publish:
	npm publish --dry-run

install:
	npm ci

diff:
	gendiff __fixtures__/file1.json __fixtures__/file2.json
