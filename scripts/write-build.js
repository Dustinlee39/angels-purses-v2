const fs = require('fs');

const meta = {
  build: Date.now(),
  version: "ap-v2-production",
  date: new Date().toISOString()
};

fs.writeFileSync(
  "./data/build.json",
  JSON.stringify(meta, null, 2)
);
