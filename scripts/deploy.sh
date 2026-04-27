#!/data/data/com.termux/files/usr/bin/bash

echo "Building Angels Purses v2..."

node scripts/write-build.js

git add .

git commit -m "auto-deploy: $(date)"

git push origin main

echo "Deploy complete → GitHub Pages will update"
