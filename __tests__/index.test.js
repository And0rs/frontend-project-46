import gendiff from '../src/index.js';
import getFixturePath from '../src/fixturePath.js';

test('flat diff with two JSON', () => {
  const expectedObj = {
    '- follow': false,
    host: 'hexlet.io',
    '- proxy': '123.234.53.22',
    '- timeout': 50,
    '+ timeout': 20,
    '+ verbose': true,
  };

  expect(gendiff(getFixturePath('file1.json'), getFixturePath('file2.json')))
    .toEqual(expectedObj);
});

test('flat diff with two yml', () => {
  const expectedObj = {
    '- follow': false,
    host: 'hexlet.io',
    '- proxy': '123.234.53.22',
    '- timeout': 50,
    '+ timeout': 20,
    '+ verbose': true,
  };

  expect(gendiff(getFixturePath('file1.yml'), getFixturePath('file2.yml')))
    .toEqual(expectedObj);
});

test('flat diff with different formats', () => {
  const expectedObj = {
    '- follow': false,
    host: 'hexlet.io',
    '- proxy': '123.234.53.22',
    '- timeout': 50,
    '+ timeout': 20,
    '+ verbose': true,
  };

  expect(gendiff(getFixturePath('file1.json'), getFixturePath('file2.yml')))
    .toEqual(expectedObj);
  expect(gendiff(getFixturePath('file1.yml'), getFixturePath('file2.json')))
    .toEqual(expectedObj);
});

test('flat diff with different formats, switch files', () => {
  const expectedObj = {
    '+ follow': false,
    host: 'hexlet.io',
    '+ proxy': '123.234.53.22',
    '- timeout': 20,
    '+ timeout': 50,
    '- verbose': true,
  };

  expect(gendiff(getFixturePath('file2.json'), getFixturePath('file1.yml')))
    .toEqual(expectedObj);
  expect(gendiff(getFixturePath('file2.yml'), getFixturePath('file1.json')))
    .toEqual(expectedObj);
});
