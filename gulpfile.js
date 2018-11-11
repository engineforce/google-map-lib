const { mergeDeepLeft, mergeDeepRight } = require('ramda');
const { series } = require('gulp');
const fs = require('fs');
const stripJsonComments = require('strip-json-comments');

async function generateTsConfig() {
  const base = readJson('../build-config/tsconfig.base.json');
  const local = readJson('./tsconfig.local.json');

  const merged = mergeDeepRight(base, local);
  fs.writeFileSync('./tsconfig.json', JSON.stringify(merged, undefined, 2));
}

function readJson(jsonPath) {
  const json = fs.readFileSync(jsonPath, 'utf8');
  return JSON.parse(stripJsonComments(json));
}

exports.generateTsConfig = generateTsConfig;
// exports.default = series(generateTsConfig);
