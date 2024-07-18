import gendiff from '../src/index.js';
import getFixturePath from '../src/fixturePath.js';

const expectedObj1 = {
  '- follow': false,
  host: 'hexlet.io',
  '- proxy': '123.234.53.22',
  '- timeout': 50,
  '+ timeout': 20,
  '+ verbose': true,
};

const expectedObj2 = {
  '+ follow': false,
  host: 'hexlet.io',
  '+ proxy': '123.234.53.22',
  '- timeout': 20,
  '+ timeout': 50,
  '- verbose': true,
};

test('flat diff with two JSON', () => {
  expect(gendiff(getFixturePath('file1.json'), getFixturePath('file2.json')))
    .toEqual(expectedObj1);
});

test('flat diff with two yml', () => {
  expect(gendiff(getFixturePath('file1.yml'), getFixturePath('file2.yml')))
    .toEqual(expectedObj1);
});

test('flat diff with different formats', () => {
  expect(gendiff(getFixturePath('file1.json'), getFixturePath('file2.yml')))
    .toEqual(expectedObj1);
  expect(gendiff(getFixturePath('file1.yml'), getFixturePath('file2.json')))
    .toEqual(expectedObj1);
});

test('flat diff with different formats, switch files', () => {
  expect(gendiff(getFixturePath('file2.json'), getFixturePath('file1.yml')))
    .toEqual(expectedObj2);
  expect(gendiff(getFixturePath('file2.yml'), getFixturePath('file1.json')))
    .toEqual(expectedObj2);
});
