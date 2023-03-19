---
title: Tag
lang: en-US
---

# Tag

Used for marking and selection.

## Usage

### type

Use the type attribute to define Tag's type.

<demo src="../../../example/tag/types.vue"></demo>

### state

You can define different states.

<demo src="../../../example/tag/states.vue"></demo>

### shape

Predefined the shape of the Tag.

<demo src="../../../example/tag/shapes.vue"></demo>

### closable

Use the closable attribute to define a removable tag.

<demo src="../../../example/tag/closable.vue"></demo>

### indicator

Use an indicator appearance to show indication.

<demo src="../../../example/tag/indicator.vue"></demo>

## Props

| Name      | Type                                                          | Default   | Description                                           |
| --------- | ------------------------------------------------------------- | --------- | ----------------------------------------------------- |
| type      | `solid` \| `outline` \| `soft`                                | `solid`   | Set custom type attribute.                            |
| color     | `blue` \| `teal` \| `red` \| `yellow` \| `gray` \| `deepGray` | `teal`    | Set tag color.                                        |
| shape     | `rounded` \| `pilled`                                         | `rounded` | Set tag shape.                                        |
| closable  | `boolean`                                                     | `false`   | Use the closable attribute to define a removable tag. |
| indicator | `boolean`                                                     | `false`   | Use an indicator appearance to show indication.       |
