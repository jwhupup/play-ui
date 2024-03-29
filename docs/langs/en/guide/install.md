# Installation

This section explains how to properly install and use an Play UI.

## Install Package

```shell
# npm
npm i play-ui

# yarn
yarn add play-ui

# pnpm
pnpm add play-ui
```

## On-demand Import

You need to use an additional plugin to import components you used. First you need to install [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components) and [unplugin-auto-import](https://www.npmjs.com/package/unplugin-auto-import).

```shell
npm install -D unplugin-vue-components
```

<!-- unplugin-auto-import -->

Then add the code below into your Vite config file.

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { PlayResolver } from 'play-ui/dist/lib/components/resolver'

export default defineConfig({
  // ...
  plugins: [
    // ...
    Components({
      resolvers: [PlayResolver()],
    }),
    AutoImport({
      resolvers: [PlayResolver()],
    }),
  ],
})
```
