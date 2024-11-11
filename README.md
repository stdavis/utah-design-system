# Utah Design System

## Testing locally in other projects

1. from this project: `npm link`
1. from the project you want to test in: `npm link @utah-design-system-new`
1. add the following config to vite.config.js of the project you are testing in:

```js
  resolve: {
    // this is only applicable when npm-linking the utah-design-package
    dedupe: ['firebase'],
  },
```
