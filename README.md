# Vue.js custom element `shadowRoot.delegatesFocus` example

This app shows what happens if the `shadowRoot` is initialized without `delegatesFocus: true` and there are focusable elements inside of the custom element.

If the PR will be merged, there is already a setting in the `HelloWorld.ce.vue` component that will allow the focus to be properly set.

```typescript
defineOptions({
  shadowRootOptions: { delegatesFocus: true },
})
```

More information on MDN: https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus
