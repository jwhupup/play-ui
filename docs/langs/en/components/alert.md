---
title: Alert
lang: zh
---

# Alert

Displays important alert messages.

## mode

Use the mode attribute to define Alert's mode.

<demo src="../../../example/alert/mode.vue"></demo>

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

| Name        | Type                                                          | Default   | Description                |
| ----------- | ------------------------------------------------------------- | -------   | -------------------------- |
| mode        | `'solid'` \| `'soft'`                                             | `'solid'`   | Set custom type attribute. |
| state       | `'primary'` \| `'info'` \| `'success'` \| `'warning'` \| `'danger'`     | `'primary'` | Set alert state.           |
| description | `string`                                                      | `''`      | Set alert description.     |
| title       | `string`                                                      | `''`      | Set alert title.           |
| icon        | `string`                                                      | `''`      | Set alert icon.            |
| closable    | `boolean`                                                     | `false`   | Set alert closable.        |

## Button Slots

| Name    | Parameters | Description                    |
| ------- | ---------- | ------------------------------ |
| title   | `()`       | Customize title content.       |
| default | `()`       | Customize description content. |
