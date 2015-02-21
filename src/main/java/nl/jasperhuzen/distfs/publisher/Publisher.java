package nl.jasperhuzen.distfs.publisher;

import lombok.extern.slf4j.Slf4j;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.FileEntity;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.tika.config.TikaConfig;
import org.apache.tika.exception.TikaException;
import org.apache.tika.io.TikaInputStream;
import org.apache.tika.metadata.Metadata;
import org.apache.tika.mime.MediaType;

import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

@Slf4j
public class Publisher {
    private final String sourceDir;
    private final ESContext esContext;
    private final Map<String, String> fileIdMap;
    private final Map<String, String> urlIdMap;

    public static void main(String[] args) {
        if (args.length != 5) {
            System.out.println("Usage: Publisher.jar <es_hostname> <es_port> <es_index> <ex_type> <directory to publish>");
            System.exit(-1);
        }
        ESContext esContext = new ESContext();
        esContext.setHostname(args[0]);
        esContext.setPort(args[1]);
        esContext.setIndex(args[2]);
        esContext.setType(args[3]);

        Publisher publisher = new Publisher(esContext, args[4]);
        publisher.publish();
    }

    public Publisher(ESContext esContext, String sourceDir) {
        if (!sourceDir.endsWith("/")) {
            sourceDir += "/";
        }
        this.sourceDir = sourceDir;
        this.esContext = esContext;

        fileIdMap = new TreeMap<>();
        urlIdMap = new TreeMap<>();
    }

    public void publish() {
        List<String> fileList = new ArrayList<>();

        generateFileList(Paths.get(sourceDir), fileList);

        fileList.forEach(file ->
            generateUrlIdForFile(sourceDir, file)
        );

        fileList.forEach(file ->
                        indexFile(file)
        );

        log.info("Script ready!");
    }

    private void indexFile(String file) {
        log.info("Preparing to index file: {}", file);

        try {
            String fileContent = readFile(file, Charset.defaultCharset());
            if (file.endsWith(".html")) {
                log.info("HTML file found. ");
                fileContent = replaceURLS(fileContent);
            }

            indexFile(file, fileContent);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void indexFile(String file, String content) {
        String id = fileIdMap.get(file);
        HttpPost httppost = new HttpPost(getDocumentTarget(id));
        log.info("POST data to {}", httppost.getURI());

        HttpEntity entity;
        if (file.endsWith(".html")) {
            entity = new StringEntity(content, ContentType.create(getContentType(file)));
        } else {
            entity = new FileEntity(new File(file));
        }
        httppost.setEntity(entity);

        DefaultHttpClient httpclient = new DefaultHttpClient();
        try {
           HttpResponse response = httpclient.execute(httppost);
           log.info("Post result for id {}: {}", id, response.getStatusLine().getStatusCode());
        } catch (IOException e) {
           log.error("Post failed with reason: {}", e.getMessage());
        }
    }

    private String getContentType(String file) {
        String contentType = null;
        try {
            TikaConfig tika = new TikaConfig();
            Metadata md = new Metadata();
            MediaType mediaType = tika.getDetector().detect(TikaInputStream.get(new File(file)), md);

            contentType = mediaType.toString();

            if (contentType.contains("php")) {
                contentType = "text/html";
            }

        } catch (IOException | TikaException e) {
            log.error(e.getMessage(), e);
        }
        return contentType;
    }

    private String replaceURLS(String content) {
        String replacedContent = content;
        for (Map.Entry<String, String> entry : urlIdMap.entrySet()) {
            if (replacedContent.contains(entry.getKey())) {
                log.debug("Replacing URL's {} to {}", entry.getKey(), entry.getValue());
                replacedContent = replacedContent.replaceAll(entry.getKey(), entry.getValue());
            }
        }
        return replacedContent;
    }

    private String readFile(String path, Charset encoding) throws IOException {
        byte[] encoded = Files.readAllBytes(Paths.get(path));
        return new String(encoded, encoding);
    }



    private void generateUrlIdForFile(String dir, String file) {
        log.info("Processing file to generate id {}", file);

        String fileUrl = getFileUrl(dir, file);
        log.debug("URL: {}", fileUrl);

        String fileId = getFileId(fileUrl, file);
        log.debug("ID: {}", fileId);

        urlIdMap.put(fileUrl, fileId);
        fileIdMap.put(file, fileId);
    }

    private String getFileUrl(String dir, String file) {
        return file.replace(dir, "");
    }


    private String getFileId(String fileUrl, String file) {
        return fileUrl.replaceAll("/", "_").replaceAll(" ", "_");
    }

    public List<String> generateFileList(Path directory, List<String> fileList) {
        try (DirectoryStream<Path> directoryStream = Files.newDirectoryStream(directory)) {
            for (Path path : directoryStream) {
                if (Files.isDirectory(path)) {
                    generateFileList(path, fileList);
                } else {
                    fileList.add(path.toString());
                }
            }
        } catch (IOException ex) {}
        return fileList;
    }

    public String getDocumentTarget(String id) {
        return "http://" + esContext.getHostname() + ":" + esContext.getPort() +
                             "/" + esContext.getDistfs_prexix() +
                             "/" + esContext.getIndex() +
                             "/" + esContext.getType() +
                             "/" + id;
    }
}
