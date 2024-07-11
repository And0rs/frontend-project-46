publish:
	npm publish --dry-run

install:
	npm ci

make diff:
	node bin/gendiff.js
