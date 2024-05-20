# 快速上手


## 安装

::: code-group

```sh [npm]
$ npm add ms-form
```

```sh [pnpm]
$ pnpm add ms-form
```

```sh [yarn]
$ yarn add ms-form
```

```sh [bun]
$ bun add ms-form
```

:::

## 使用

> **Global**

```ts
import { createApp } from 'vue'
import App from './App.vue'

import MsForm from 'ms-form'
import 'ms-form/css'

const app = createApp(App)
app.use(MsForm)

app.mount('#app')
```

> **Local**

```vue
<script setup lang="ts">
import { Button } from 'ms-form'
import 'ms-form/css'
</script>

<template>
  <Button></Button>
</template>
```
