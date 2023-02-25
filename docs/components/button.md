---
title: Button
lang: en-US
---

# Button

Common operation buttons.

## Types

The most commonly used button styles.

<demo src="../example/button/types.vue"></demo>

## Sizes

Buttons stacked small to large sizes.

<demo src="../example/button/sizes.vue"></demo>

## Colors

Predefined button color.

<demo src="../example/button/colors.vue"></demo>

## Shapes

Predefined the shape of the button.

<demo src="../example/button/shapes.vue"></demo>

## Disabled

You can use the disabled attribute to define whether the button is disabled.

<demo src="../example/button/disabled.vue"></demo>

## Button Props

| Name        | Type                                                           | Default   | Description                |
| ----------- | -------------------------------------------------------------- | --------- | -------------------------- |
| type        | `white` \| `solid` \| `outline` \| `ghost` \| `soft` \| `link` | `white`   | Set custom type attribute. |
| native-type | `button` \| `reset` \| `submit`                                | `button`  | Set native type attribute. |
| shape       | `rounded` \| `pilled` \| `circle`                              | `rounded` | Set button shape.          |
| size        | `small` \| `medium` \| `large`                                 | `medium`  | Set button size.           |
| color       | `blue` \| `teal` \| `red` \| `yellow` \| `gray` \| `deepGray`  | `teal`    | Set button color.          |
| disabled    | `boolean`                                                      | `false`   | Disable the button.        |

## Button Slots

| Name    | Parameters | Description                |
| ------- | ---------- | -------------------------- |
| default | `()`       | Customize default content. |
