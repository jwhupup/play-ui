---
title: Alert
lang: en-US
---

# Alert

Displays important alert messages.

## Description

Predefined the description of the alert.

<demo src="../../../example/alert/description.vue"></demo>

## Title

Predefined the title of the alert.

<demo src="../../../example/alert/title.vue"></demo>

## Icon

Predefined the title of the alert.

<demo src="../../../example/alert/icon.vue"></demo>

## Closable

Use the closable attribute to define a removable alert.

<demo src="../../../example/alert/closable.vue"></demo>

## Types

Use the type attribute to define Alert's type.

<demo src="../../../example/alert/types.vue"></demo>

## Colors

You can define different colors.

<demo src="../../../example/alert/colors.vue"></demo>

## Alert Props

| Name        | Type                                                           | Default   | Description                |
| ----------- | -------------------------------------------------------------- | --------- | -------------------------- |
| type        | `solid` \| `soft`                                              | `solid`   | Set custom type attribute. |
| description | `string`                                                       | `''`      | Set alert description.     |
| title       | `string`                                                       | `''`      | Set alert title.           |
| icon        | `string`                                                       | `''`      | Set alert icon.            |
| closable    | `boolean`                                                      | `false`   | Set alert closable.        |
| color       | `blue` \| `teal` \| `red` \| `yellow` \| `gray` \| `deepGray`  | `teal`    | Set alert color.           |

## Button Slots

| Name    | Parameters | Description                    |
| ------- | ---------- | ------------------------------ |
| title   | `()`       | Customize title content.       |
| default | `()`       | Customize description content. |
