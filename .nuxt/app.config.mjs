
import { updateAppConfig } from '#app'
import { defuFn } from '/Users/aristoteodjo/Sites/app/init/node_modules/.pnpm/defu@6.1.3/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "860cf2dd-35d4-423d-a236-a01f0b793483"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
