---
title: Alert
lang: zh
---

# Alert

Displays important alert messages.

## type

Use the type attribute to define Alert's type.

<demo src="../../../example/alert/types.vue"></demo>

## state

You can define different states.

<demo src="../../../example/alert/states.vue"></demo>

## title

Predefined the title of the alert.

<demo src="../../../example/alert/title.vue"></demo>

## description

Predefined the description of the alert.

<demo src="../../../example/alert/description.vue"></demo>

## Icon

Predefined the title of the alert.

<demo src="../../../example/alert/icon.vue"></demo>

## Closable

Use the closable attribute to define a removable alert.

<demo src="../../../example/alert/closable.vue"></demo>

## Alert Props

| Name        | Type                                                          | Default | Description                |
| ----------- | ------------------------------------------------------------- | ------- | -------------------------- |
| type        | `solid` \| `soft`                                             | `solid` | Set custom type attribute. |
| description | `string`                                                      | `''`    | Set alert description.     |
| title       | `string`                                                      | `''`    | Set alert title.           |
| icon        | `string`                                                      | `''`    | Set alert icon.            |
| closable    | `boolean`                                                     | `false` | Set alert closable.        |
| color       | `blue` \| `teal` \| `red` \| `yellow` \| `gray` \| `deepGray` | `teal`  | Set alert color.           |

## Button Slots

| Name    | Parameters | Description                    |
| ------- | ---------- | ------------------------------ |
| title   | `()`       | Customize title content.       |
| default | `()`       | Customize description content. |
