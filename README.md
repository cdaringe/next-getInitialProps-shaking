# weak tree shaking

- no treeshaking on `getInitialProps`
- no treeshaking, post terser, on unusedImports

## usage

- `yarn && yarn build`
- client compilation fails, trying to resolve a `node` only module, `async_hooks`
  - however, it would be ideal if tree-shaking and DCE dropped such an import, thus compiling successfully
