#!/usr/bin/env node

const verMajor = parseInt(process.versions.node.split(".")[0], 10);

if (verMajor <= 8) {
  require("../dist/node8-card");
} else {
  require("../dist/card");
}
