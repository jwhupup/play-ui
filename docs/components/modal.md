---
title: Modal
lang: en-US
---

# Modal

A modal dialog displays content that requires user interaction, in a layer above the page.

## Dev

Predefined the description of the modal.

<demo src="../example/modal/dev.vue"></demo>

## Title

Predefined the title of the modal.

<demo src="../example/modal/title.vue"></demo>

## Icon

Predefined the title of the modal.

<demo src="../example/modal/icon.vue"></demo>

## Closable

Use the closable attribute to define a removable modal.

<demo src="../example/modal/closable.vue"></demo>

## Types

Use the type attribute to define Modal's type.

<demo src="../example/modal/types.vue"></demo>

## Colors

You can define different colors.

<demo src="../example/modal/colors.vue"></demo>

## Modal Props

| Name        | Type                                                           | Default   | Description                |
| ----------- | -------------------------------------------------------------- | --------- | -------------------------- |
| type        | `solid` \| `soft`                                              | `solid`   | Set custom type attribute. |
| description | `string`                                                       | `''`      | Set modal description.     |
| title       | `string`                                                       | `''`      | Set modal title.           |
| icon        | `string`                                                       | `''`      | Set modal icon.            |
| closable    | `boolean`                                                      | `false`   | Set modal closable.        |
| color       | `blue` \| `teal` \| `red` \| `yellow` \| `gray` \| `deepGray`  | `teal`    | Set modal color.           |

## Button Slots

| Name    | Parameters | Description                    |
| ------- | ---------- | ------------------------------ |
| title   | `()`       | Customize title content.       |
| default | `()`       | Customize description content. |
