publish:
	npm publish --dry-run

install:
	npm ci

diff:
	gendiff __fixtures__/file1.json __fixtures__/file2.json

diff2:
	gendiff __fixtures__/file2.json __fixtures__/file1.yml

lint:
	npx eslint .

fix:
	npx eslint . --fix

test:
	npx jest

test-coverage:
	npx jest --coverage