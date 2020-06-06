# VueSimplePrint
This is a simple directive to print html section with vue.

## DEMO

[Try the Demo](https://josueaqp92.github.io/vue-simple-print/)

## Installation

```
npm install vue-simple-print --save
```


## Usage

Import the module into your `main.js` file.

```ts
import VueSimplePrintPlugin from 'vue-simple-print';

Vue.use(VueSimplePrintPlugin);
```

And you can use the directive in your app
```vue
<template>
<div>
    <button
    v-simple-print="'contentToPrint'"
    >Print Content</button>
    <div id="contentToPrint">
        your content...
    </div>
</div>
</template>
```
