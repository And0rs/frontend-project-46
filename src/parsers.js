import fs from 'node:fs';
import yaml from 'js-yaml';

const getFile = (filePath) => fs.readFileSync(filePath);

const jsonParser = (file) => JSON.parse(file);

const ymlParser = (file) => yaml.load(file);

const parse = (filePath) => {
  const file = getFile(filePath);
  if (filePath.endsWith('json')) {
    return jsonParser(file);
  }
  return ymlParser(file);
};

export default parse;
