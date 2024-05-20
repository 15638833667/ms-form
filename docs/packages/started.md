# 快速上手


## 安装

::: code-group

```sh [npm]
$ npm add ms-form-js
```

```sh [pnpm]
$ pnpm add ms-form-js
```

```sh [yarn]
$ yarn add ms-form-js
```

```sh [bun]
$ bun add ms-form-js
```

:::

## 使用

> **Global**

```ts
import { createApp } from 'vue'
import App from './App.vue'

import MsForm from 'ms-form-js'
import 'ms-form-js/css'

const app = createApp(App)
app.use(MsForm)

app.mount('#app')
```

> **Local**

```vue
<script setup lang="ts">
import { Button } from 'ms-form-js'
import 'ms-form-js/css'
</script>

<template>
  <Button></Button>
</template>
```
