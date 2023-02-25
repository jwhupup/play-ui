---
title: Badge
lang: en-US
---

# Badge

A visual indicator for a value or status descriptor for UI elements.

## Value

Badge can be used to display text and numbers.

<demo src="../example/badge/value.vue"></demo>

## Colors

You can define different colors.

<demo src="../example/badge/colors.vue"></demo>

## Max

You can customize the max value.The default max value is 99, which supports number and string.

<demo src="../example/badge/max.vue"></demo>

## Dot

Use a dot to mark content that needs to be noticed.You can use it by setting the dot attribute or not setting the value

<demo src="../example/badge/dot.vue"></demo>

## Badge Props

| Name   | Type                                                          | Default     | Description                               |
| ------ | ------------------------------------------------------------- | ----------- | ----------------------------------------- |
| value  | `string` \| `number`                                          | `undefined` | Display badge content.                    |
| color  | `blue` \| `teal` \| `red` \| `yellow` \| `gray` \| `deepGray` | `teal`      | Set badge color.                          |
| max    | `string` \| `number`                                          | `99`        | Greater than `${max}`, display `${max}+`. |
| dot    | `boolean`                                                     | `false`     | Only a dot style.                         |
| hidden | `boolean`                                                     | `false`     | Whether to display the number 0.          |

## Badge Slots

| Name    | Parameters | Description      |
| ------- | ---------- | ---------------- |
| default | `()`       | Badge's content. |
