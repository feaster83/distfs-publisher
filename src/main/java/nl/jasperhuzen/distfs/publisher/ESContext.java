package nl.jasperhuzen.distfs.publisher;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ESContext {
    private String index;
    private String type;
    private String hostname;
    private String port;
    private final String distfs_prexix = "_distfs";
}
