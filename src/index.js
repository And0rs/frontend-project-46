import path from 'node:path';
import process from 'node:process';
import fs from 'node:fs';

const getPath = (filePath) => path.resolve(process.cwd(), filePath);

const getFile = (filePath) => fs.readFileSync(filePath);

const parse = (filePath) => JSON.parse(getFile(filePath));

const gendiff = (filePath1, filePath2) => {
  const path1 = getPath(filePath1);
  const path2 = getPath(filePath2);

  const file1 = parse(path1);
  const file2 = parse(path2);
  console.log(file1, file2);
};

export default gendiff;
