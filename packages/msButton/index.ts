import type { App } from 'vue'
import MsButton from './src/index.vue'

// 使用install方法，在app.use挂载
MsButton.install = (app: App) => {
  app.component(MsButton.name, MsButton)
}

export default MsButton
