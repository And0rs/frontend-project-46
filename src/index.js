import path from 'node:path';
import process from 'node:process';
import fs from 'node:fs';
import _ from 'lodash';

const getPath = (filePath) => path.resolve(process.cwd(), filePath);

const getFile = (filePath) => fs.readFileSync(filePath);

const parse = (filePath) => JSON.parse(getFile(filePath));

const getDiff = (obj1, obj2) => {
  // Получаем массив уникальных отсортированных ключей
  // Хотел использовать uniq, но он принимает только один массив, пришлось бы тогда дополнительно объединять массивы
  const sortedKeys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  const result = {};

  // Получаем результат сравнения двух объектов
  // если не 2, если не 1, если равны, остальное (если не равны)
  for (const key of sortedKeys) {
    if (!Object.hasOwn(obj2, key)) {
      result[`- ${key}`] = obj1[key];
    } else if (!Object.hasOwn(obj1, key)) {
      result[`+ ${key}`] = obj2[key];
    } else if (obj1[key] === obj2[key]) {
      result[key] = obj1[key]
    } else {
      result[`- ${key}`] = obj1[key];
      result[`+ ${key}`] = obj2[key];
    }
  }
  return result;
};

const gendiff = (filePath1, filePath2) => {
  const path1 = getPath(filePath1);
  const path2 = getPath(filePath2);

  const obj1 = parse(path1);
  const obj2 = parse(path2);
  // console.log(obj1);
  // console.log(obj2);

  const result = getDiff(obj1, obj2);
  console.log(result);
};

export default gendiff;
