---
title: Select
lang: en-US
---

# Select

A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data.

## Usage

<demo src="../../../example/select/usage.vue"></demo>

## Alert Props

| Name        | Type                                                          | Default | Description              |
| ----------- | ------------------------------------------------------------- | ------- | -------------------------|
| modelValue  | `object`                                                      | `{}`    | Bind the value of select. |
| mode        | `bordered` \| `underline` \| `light`                          | `bordered` | Set select mode.       |
| size        | `mini` \| `small` \| `medium` \| `large`                      | `medium`  | Set select size.        |
| options     | `<{name: string value?: any}>[]`                              | `[]`    | Set select options.      |
| infoTip     | `string`                                                      | `''`    | Set select infoTip.       |
| prefixIcon  | [Bootstrap Icons](https://icons.getbootstrap.com/)            | `''`    | Set select prefixIcon.    |
| suffixIcon  | [Bootstrap Icons](https://icons.getbootstrap.com/)            | `''`    | Set select suffixIcon.    |
| placeholder | `string`                                                      | `''`    | Set select placeholder.   |
| disabled    | `boolean`                                                     | `false` | Set whether to disable.  |
| clearable   | `boolean`                                                     | `false` | Can settings be reset.   |
| multiple    | `boolean`                                                     | `false` | Set whether to select multiple mode. |

## Button Slots

| Name    | Parameters | Description              |
| ------- | ---------- | ------------------------ |
| prepend | `()`       | Front Select Box Content. |
| append  | `()`       | Post Select Box Content.  |
