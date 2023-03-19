---
title: Badge
lang: en-US
---

# Badge

A visual indicator for a value or status descriptor for UI elements.

## Usage

### value

Badge can be used to display text and numbers.

<demo src="../../../example/badge/value.vue"></demo>

### state

You can define different states.

<demo src="../../../example/badge/states.vue"></demo>

### max

You can customize the max value.The default max value is 99, which supports number and string.

<demo src="../../../example/badge/max.vue"></demo>

### dot

Use a dot to mark content that needs to be noticed.You can use it by setting the dot attribute or not setting the value

<demo src="../../../example/badge/dot.vue"></demo>

## Props

| Name   | Type                                                          | Default     | Description                               |
| ------ | ------------------------------------------------------------- | ----------- | ----------------------------------------- |
| value  | `string` \| `number`                                          | `undefined` | Display badge content.                    |
| color  | `blue` \| `teal` \| `red` \| `yellow` \| `gray` \| `deepGray` | `teal`      | Set badge color.                          |
| max    | `string` \| `number`                                          | `99`        | Greater than `${max}`, display `${max}+`. |
| dot    | `boolean`                                                     | `false`     | Only a dot style.                         |
| hidden | `boolean`                                                     | `false`     | Whether to display the number 0.          |

## Slots

| Name    | Parameters | Description      |
| ------- | ---------- | ---------------- |
| default | `()`       | Badge's content. |
