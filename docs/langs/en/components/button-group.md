---
title: Button Group
lang: en-US
---

# Button Group

Displayed as a button group, can be used to group a series of similar operations.

## Usage

### Types

Button group type, which overrides the type of button. The default is `solid`.

<demo src="../../../example/button-group/types.vue"></demo>

### States

Button group state, which overrides the state of button. The default is `info`.

<demo src="../../../example/button-group/states.vue"></demo>

### Shapes

Button group shape, which overrides the shape of button. The default is `rounded`.

<demo src="../../../example/button-group/shapes.vue"></demo>

### Sizes

Button group size, which overrides the size of button. The default is `medium`.

<demo src="../../../example/button-group/sizes.vue"></demo>

### Vertical

You can use the vertical attribute to define whether the button-group is vertical.

<demo src="../../../example/button-group/vertical.vue"></demo>

### Disabled

You can use the disabled attribute to define whether the button-group is disabled.

<demo src="../../../example/button-group/disabled.vue"></demo>

## Props

| Name     | Type                                         | Default   | Description                |
| -------- | -------------------------------------------- | --------- | -------------------------- |
| type     | `solid` \| `white` \| `outline`              | `solid`   | Set custom type attribute. |
| shape    | `rounded` \| `pilled` \| `plain`             | `rounded` | Set button group shape.    |
| size     | `mini` \| `small` \| `medium` \| `large`     | `medium`  | Set button group size.     |
| state    | `info` \| `success` \| `warning` \| `danger` | `info`    | Set button group state.    |
| vertical | `boolean`                                    | `false`   | Set native type attribute. |
| disabled | `boolean`                                    | `false`   | Disable the button group.  |

## Slots

| Name    | Parameters | Description                |
| ------- | ---------- | -------------------------- |
| default | `()`       | Customize default content. |
