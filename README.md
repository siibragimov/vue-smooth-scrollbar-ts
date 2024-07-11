# Vue 3 and Nuxt 3 smooth scrollbar component

Add your styled scrollbar to any block, which will look consistent across all platforms. To see how it works, plaese, see the demo.

Based on [https://idiotwu.github.io/smooth-scrollbar/](https://idiotwu.github.io/smooth-scrollbar/).

## Demo
There are two examples in the demo. One of them with custom styles.
![Demo](https://raw.github.com/siibragimov/vue-smooth-scrollbar-ts/main/public/demo.webp)

## Installation and setup

### 1. Install component:
If you want to install package from __npmjs registry__ use:
```shell
npm i vue-smooth-scrollbar-ts
```

```shell
yarn add vue-smooth-scrollbar-ts
```

```shell
pnpm add vue-smooth-scrollbar-ts
```

If you want to install package from __GitHub packages__ use: 

```shell
npm install @siibragimov/vue-smooth-scrollbar-ts
```
**Note**: Don't forget to configure registry. Use __.npmrc__ file or use command:
```shell
npm config set registry https://npm.pkg.github.com/
```

### 2. Import CSS.
For Vue 3:
```javascript
  // in entry point (main.js)
  import '../node_modules/vue-smooth-scrollbar-ts/dist/style.css';
```
For Nuxt 3:
```javascript
  // nuxt.config.ts
  export default defineNuxtConfig({
    css: ['~/node_modules/vue-smooth-scrollbar-ts/dist/style.css'],
  });
```
**Note**: If you have problems with import, check the file path and especially the prefix.

### 3. Define overriding styles for scrollbars if needed. See the [`App.vue`](/src/App.vue).

**Note**: to make component work properly add height or width styling properties explicitly for the parent block of component. It behaviour is very close to the scroll when you use `overflow: scroll`. For more info checkout the [page](https://github.com/idiotWu/smooth-scrollbar/tree/develop/docs#common-mistakes).

### 4. Wrap content you want to be scrolled.

Example:
```javascript
<aside class="container">
  <VueSmoothScrollbarTs>
      <!-- YOUR CONTENT -->
  </VueSmoothScrollbarTs>
</aside>
```
## Properties

| Name  | Type | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| __options__  | `ScrollbarOptions`  | `{}`  | check the list [here](https://github.com/idiotWu/smooth-scrollbar/tree/develop/docs#available-options-for-scrollbar) |
| __plugins__  | `Array<ScrollbarPlugin>`  | `[]`  | check the list [here](https://github.com/idiotWu/smooth-scrollbar/tree/develop/docs) |
| __scrollIntoView__  | `boolean`  | `false`  | Scrolls the block into viewport when the user points cursor over it |

## Contributing

To run in development mode 
```shell
npm run dev
```

Use for build component
```shell
npm run build
```
and follow the instruction in console to open the test page.

To generate types you can use:
```shell
npm run types
```
