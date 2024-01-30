# Świat Według Kiepskich — downloader

It downloads all episodes and seasons to a `./downloads` directory.

## Requirements

* Download [Nodejs 18](https://nodejs.org/en/blog/release/v18.12.0).
* Download [yt-dlp](https://github.com/yt-dlp/yt-dlp/releases/latest).
* Clone this repository (Green button "Code" -> "Download Zip").

## How to run?

Open terminal and run

```shell
node ./index.mjs
node ./index-extra.mjs
```
The files should be in a `/downloads` folder.

# Docker usage:
```shell
docker-compose -f docker-compose.yml up --build
```