---
title: Select
lang: zh
---

# Select

用于获取用户输入的一个基本小部件是一个文本字段。键盘和鼠标可用于提供或更改数据。

## Usage

<demo src="../../../example/select/usage.vue"></demo>

## Alert Props

| Name        | Type                                                          | Default | Description              |
| ----------- | ------------------------------------------------------------- | ------- | -------------------------|
| modelValue  | `object`                                                      | `{}`    | 绑定select的值。 |
| mode        | `bordered` \| `underline` \| `light`                          | `bordered` | 设置风格。       |
| size        | `mini` \| `small` \| `medium` \| `large`                      | `medium`  | 设置尺寸。        |
| options     | `<{name: string value?: any}>[]`                              | `[]`    | 设置选项。      |
| infoTip     | `string`                                                      | `''`    | 设置消息提示。       |
| prefixIcon  | [Bootstrap Icons](https://icons.getbootstrap.com/)            | `''`    | 设置风左图标。    |
| suffixIcon  | [Bootstrap Icons](https://icons.getbootstrap.com/)            | `''`    | 设置风右图标。    |
| placeholder | `string`                                                      | `''`    | 设置输入占位符。   |
| disabled    | `boolean`                                                     | `false` | 是否禁用。  |
| clearable   | `boolean`                                                     | `false` | 是否显示可清空按钮。   |
| multiple    | `boolean`                                                     | `false` | 设置是否为多选模式。 |

## Button Slots

| Name    | Parameters | Description              |
| ------- | ---------- | ------------------------ |
| prepend | `()`       | 自定义前置内容。 |
| append  | `()`       | 自定义后置内容。 |
