import parse from '../src/parsers.js';
import getFixturePath from '../src/fixturePath.js';

test('parse JSON', () => {
  const obj1 = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };

  expect(parse(getFixturePath('file1.json'))).toEqual(obj1);
});

test('parse YML', () => {
  const obj1 = {
    timeout: 20,
    verbose: true,
    host: 'hexlet.io',
  };

  expect(parse(getFixturePath('file2.yml'))).toEqual(obj1);
});
