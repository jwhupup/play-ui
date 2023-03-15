---
title: Button Group
lang: zh
---

# Button Group

按钮组组件，可用于对按钮进行组合。

## 用法

### type

按钮组类型，它将覆盖内部按钮的类型。默认值为`solid`。

<demo src="../../../example/button-group/types.vue"></demo>

### state

按钮组状态，它将覆盖内部按钮的状态。默认值为`info`。

<demo src="../../../example/button-group/states.vue"></demo>

### shape

按钮组形状，它将覆盖内部按钮的形状。默认值为`rounded`。

<demo src="../../../example/button-group/shapes.vue"></demo>

### size

按钮组尺寸，它将覆盖内部按钮的尺寸。默认值为`medium`。

<demo src="../../../example/button-group/sizes.vue"></demo>

### vertical

您可以使用`vertical`属性来定义按钮组是否垂直。默认展示效果为水平。

<demo src="../../../example/button-group/vertical.vue"></demo>

### disabled

You can use the disabled attribute to define whether the button-group is disabled.
您可以使用`disabled`设置按钮组的禁用状态。

<demo src="../../../example/button-group/disabled.vue"></demo>

## 属性

| 属性名   | 可选值                                       | 默认值    | 描述                 |
| -------- | -------------------------------------------- | --------- | -------------------- |
| type     | `solid` \| `white` \| `outline`              | `solid`   | 设置按钮组类型       |
| shape    | `rounded` \| `pilled` \| `plain`             | `rounded` | 设置按钮组形状       |
| size     | `mini` \| `small` \| `medium` \| `large`     | `medium`  | 设置按钮组尺寸       |
| state    | `info` \| `success` \| `warning` \| `danger` | `info`    | 设置按钮组类型状态   |
| vertical | `boolean`                                    | `false`   | 设置按钮组为垂直方向 |
| disabled | `boolean`                                    | `false`   | 设置按钮组禁用状态   |

## 插槽

| 插槽名  | 参数 | 描述           |
| ------- | ---- | -------------- |
| default | `()` | 自定义默认内容 |
