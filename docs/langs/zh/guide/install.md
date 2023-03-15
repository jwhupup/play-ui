# 安装

本节解释如何正确安装和使用 PlayUI。

## 获取安装包

```shell
# npm
npm i play-ui

# yarn
yarn add play-ui

# pnpm
pnpm add play-ui
```

## 按需引入

您需要使用一个额外的插件来导入您使用的组件。首先你需要安装 [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components)。

```shell
npm install -D unplugin-vue-components
```

然后将下面的代码添加到你的 Vite 配置文件。

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { PlayResolver } from 'play-ui/dist/lib/resolver'

export default defineConfig({
  // ...
  plugins: [
    // ...
    Components({
      resolvers: [PlayResolver()],
    }),
  ],
})
```

<!-- ## Get Volar Typescript support

You can add the `OnuUI` global component type definition to `compilerOptions.types` in your project's `tsconfig.json`. Then [volar](https://github.com/johnsoncodehk/volar) will help you have a better experience while developing.

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["onu-ui/volar"]
  }
}
``` -->
