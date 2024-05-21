
import type { App } from 'vue'
import MsIcon from './src/index.vue'

// 使用install方法，在app.use挂载
MsIcon.install = (app: App) => {
  app.component(MsIcon.name, MsIcon)
}

export default MsIcon