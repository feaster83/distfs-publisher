# distfs-publisher
Tool to index a website to a DistFS server

## Project build status
[![wercker status](https://app.wercker.com/status/edf3e083bde8a086bae9241d001e113e/m "wercker status")](https://app.wercker.com/project/bykey/edf3e083bde8a086bae9241d001e113e)

## Usage

Optional: Download a website with a Tool like [SiteSucker] (http://www.sitesucker.us)

Usage: `java -jar distfs-publisher.jar <es_hostname> <es_port> <es_index> <ex_type> <directory to publish>`

Example: `java -jar distfs-publisher.jar localhost 9200 fs mysite ~/site/mysite.nl`

*Java 8 is required to use the Publisher!*