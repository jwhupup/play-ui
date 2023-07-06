---
title: Input
lang: zh
---

# Input

用于获取用户输入的一个基本小部件是一个文本字段。键盘和鼠标可用于提供或更改数据。

## Usage

<demo src="../../../example/input/usage.vue"></demo>

## Alert Props

| Name        | Type                                                          | Default | Description              |
| ----------- | ------------------------------------------------------------- | ------- | -------------------------|
| modelValue  | `string`                                                      | `''`    | 绑定输入的值。 |
| type        | [Input Types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) | `text` | 设置原生类型。 |
| mode        | `bordered` \| `underline` \| `light`                          | `bordered` | 设置风格。       |
| size        | `mini` \| `small` \| `medium` \| `large`                      | `medium`  | 设置尺寸。        |
| errorTip    | `string`                                                      | `''`    | 设置错误提示，仅在设置了pattern的时候生效。      |
| successTip  | `string`                                                      | `''`    | 设置成功提示，仅在设置了pattern的时候生效。    |
| infoTip     | `string`                                                      | `''`    | 设置消息提示。       |
| prefixIcon  | [Bootstrap Icons](https://icons.getbootstrap.com/)            | `''`    | 设置左图标。    |
| suffixIcon  | [Bootstrap Icons](https://icons.getbootstrap.com/)            | `''`    | 设置右图标。    |
| placeholder | `string`                                                      | `''`    | 设置输入占位符。   |
| disabled    | `boolean`                                                     | `false` | 是否禁用。  |
| clearable   | `boolean`                                                     | `false` | 是否显示可清空按钮。   |
| pattern     | `RegExp`                                                      | `''`    | 值的验证规则。 |

## Button Slots

| Name    | Parameters | Description              |
| ------- | ---------- | ------------------------ |
| prepend | `()`       | 自定义前置内容。 |
| append  | `()`       | 自定义后置内容。 |
