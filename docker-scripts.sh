#!/bin/bash

apt-get update
apt-get install -y --no-install-recommends git python3-pip python3-venv curl
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs software-properties-common
python3 -m pip install --force-reinstall https://github.com/yt-dlp/yt-dlp/archive/master.tar.gz
rm -rf /var/lib/apt/lists/*
