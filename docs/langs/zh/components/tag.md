---
title: Tag
lang: zh
---

# Tag

用于标记和选择。

## 用法

### type

使用 type 属性定义 Tag 的类型。

<demo src="../../../example/tag/types.vue"></demo>

### state

您可以定义不同的状态。

<demo src="../../../example/tag/states.vue"></demo>

### shape

预定义标记的形状。

<demo src="../../../example/tag/shapes.vue"></demo>

### closable

使用 `closable` 属性定义可移除标记。

<demo src="../../../example/tag/closable.vue"></demo>

### indicator

使用 `indicator` 显示标记。

<demo src="../../../example/tag/indicator.vue"></demo>

## 属性

| 属性名    | 可选值                                                        | 默认值    | 描述                                                  |
| --------- | ------------------------------------------------------------- | --------- | ----------------------------------------------------- |
| type      | `solid` \| `outline` \| `soft`                                | `solid`   | Set custom type attribute.                            |
| color     | `blue` \| `teal` \| `red` \| `yellow` \| `gray` \| `deepGray` | `teal`    | Set tag color.                                        |
| shape     | `rounded` \| `pilled`                                         | `rounded` | Set tag shape.                                        |
| closable  | `boolean`                                                     | `false`   | Use the closable attribute to define a removable tag. |
| indicator | `boolean`                                                     | `false`   | Use an indicator appearance to show indication.       |
