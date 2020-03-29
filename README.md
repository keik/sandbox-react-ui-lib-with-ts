# sandbox-react-ui-lib-with-ts

My practice project of React UI library with

* written by TypeScript
* distribute as JavaScript with
  - ES Modules version
  - CommonJS version
  - TypeScript declarations
* using styled-components with `css` prop

## Usage

Install

```
yarn add https://github.com/keik/sandbox-react-ui-lib-with-ts#1.0.0
```

and import from TypeScript / JavaScript, place in JSX.

```jsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button } from "sandbox-react-ui-lib-with-ts";

ReactDOM.render(
  <>
    <Button>normal button</Button>
    <Button primary>primary button</Button>
  </>,
  document.querySelector("#app")
);
```

## How to build

```
Sources written TypeScript
 -> (tsc with `"jsx": "preserve"`)
 -> JavaScript (es5 + JSX with raw `css` prop)
 -> (Babel with `@babel/preset-react` + `babel-plugin-styled-components`)
 -> JavaScript (es5)
```

## Release

For no publishing to npm version assmued private package

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

results like tree of below

```
* 544c8c6 (HEAD -> master) :up: Bump up version.
* a9aca09 :+1: Build css props.
| * 793ceb0 (tag: v0.0.2) :sparkles: Build for release.
|/
* 00bfacb :up: Bump up version.
* 3bcaace :+1: Add package info.
| * 2165789 (tag: v0.0.1) :sparkles: Build for release.
|/
* 2bc5392 (origin/master) :up: Bump up version.
* fb7c106 :bulb: Docs about release.
```
