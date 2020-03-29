# sandbox-react-ui-lib-with-ts

My practice project of React UI library with

* TypeScript
* styled-components

## Release

No publishing to npm version:

```
VERSION=<new_version>

# (1) update package.json and commit
perl -i -pe 's/(?<="version": ").+(?=")/'${VERSION}'/g' package.json && \
  git add package.json && git commit -m':up: Bump up version.' && \

# (2) build and commit and create tag
yarn clean && \
  yarn build && \
  git add --force lib && \
  git commit -m':sparkles: Build for release.' && \
  git tag v${VERSION} && \
  git push origin --tag v${VERSION} && \

# reset to (1)
  git reset --hard HEAD^
```
