---
title: Button
lang: en-US
---

# Button

Common operation buttons.

## Sizes

Buttons stacked small to large sizes.

<demo src="../example/button-group/sizes.vue"></demo>

## States

Predefined button-group state.

<demo src="../example/button-group/states.vue"></demo>

## Shapes

Predefined the shape of the button-group.

<demo src="../example/button-group/shapes.vue"></demo>

## Disabled

You can use the disabled attribute to define whether the button-group is disabled.

<demo src="../example/button-group/disabled.vue"></demo>

## Button Props

| Name        | Type                                                 | Default   | Description                |
| ----------- | ---------------------------------------------------- | --------- | -------------------------- |
| type        | `solid` \| `white` \| `outline` \| `ghost` \| `link` | `solid`   | Set custom type attribute. |
| native-type | `button` \| `reset` \| `submit`                      | `button`  | Set native type attribute. |
| shape       | `rounded` \| `pilled` \| `circle` \| `plain`         | `rounded` | Set button shape.          |
| size        | `small` \| `medium` \| `large`                       | `medium`  | Set button size.           |
| state       | `info` \| `success` \| `warning` \| `danger`         | `info`    | Set button state.          |
| disabled    | `boolean`                                            | `false`   | Disable the button.        |

## Button Slots

| Name    | Parameters | Description                |
| ------- | ---------- | -------------------------- |
| default | `()`       | Customize default content. |
