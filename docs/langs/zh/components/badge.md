---
title: Badge
lang: zh
---

# Badge

出现在按钮、图标旁的数字或状态徽章。

## 用法

### value

给徽章设置文本和数字内容。

<demo src="../../../example/badge/value.vue"></demo>

### state

定义徽章的颜色。

<demo src="../../../example/badge/states.vue"></demo>

### max

您可以自定义最大值。默认的最大值是 99，它支持数字和字符串。

<demo src="../../../example/badge/max.vue"></demo>

### dot

使用点标记需要注意的内容。您可以通过设置 dot 属性或不设置值来使用它。

<demo src="../../../example/badge/dot.vue"></demo>

## 属性

| 属性名 | 可选值                                                        | 默认值      | 描述               |
| ------ | ------------------------------------------------------------- | ----------- | ------------------ |
| value  | `string` \| `number`                                          | `undefined` | 显示标记的内容     |
| color  | `blue` \| `teal` \| `red` \| `yellow` \| `gray` \| `deepGray` | `teal`      | 设置徽章颜色       |
| max    | `string` \| `number`                                          | `99`        | 设置数字徽章最大值 |
| dot    | `boolean`                                                     | `false`     | 小圆点风格徽章     |
| hidden | `boolean`                                                     | `false`     | 是否隐藏           |

## 插槽

| 插槽名  | 参数 | 描述         |
| ------- | ---- | ------------ |
| default | `()` | 定义徽章内容 |
