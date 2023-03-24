---
title: Table
lang: zh
---

# Table

Displays important alert messages.

## Usage

<demo src="../../../example/table/types.vue"></demo>

## Table Props

| Name        | Type                                                          | Default | Description                |
| ----------- | ------------------------------------------------------------- | ------- | -------------------------- |
| type        | `solid` \| `soft`                                             | `solid` | Set custom type attribute. |
| description | `string`                                                      | `''`    | Set alert description.     |
| title       | `string`                                                      | `''`    | Set alert title.           |
| icon        | `string`                                                      | `''`    | Set alert icon.            |
| closable    | `boolean`                                                     | `false` | Set alert closable.        |
| color       | `blue` \| `teal` \| `red` \| `yellow` \| `gray` \| `deepGray` | `teal`  | Set alert color.           |

## Table Slots

| Name    | Parameters | Description                    |
| ------- | ---------- | ------------------------------ |
| title   | `()`       | Customize title content.       |
| default | `()`       | Customize description content. |
