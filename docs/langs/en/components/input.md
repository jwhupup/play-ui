---
title: Input
lang: en-US
---

# Input

A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data.

## Usage

<demo src="../../../example/input/usage.vue"></demo>

## Alert Props

| Name        | Type                                                          | Default | Description              |
| ----------- | ------------------------------------------------------------- | ------- | -------------------------|
| modelValue  | `string`                                                      | `''`    | Bind the value of input. |
| type        | [Input Types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) | `text` | Set input native type. |
| mode        | `bordered` \| `underline` \| `light`                          | `bordered` | Set input mode.       |
| size        | `mini` \| `small` \| `medium` \| `large`                      | `medium`  | Set input size.        |
| errorTip    | `string`                                                      | `''`    | Set input errorTip.      |
| successTip  | `string`                                                      | `''`    | Set input successTip.    |
| infoTip     | `string`                                                      | `''`    | Set input infoTip.       |
| prefixIcon  | [Bootstrap Icons](https://icons.getbootstrap.com/)            | `''`    | Set input prefixIcon.    |
| suffixIcon  | [Bootstrap Icons](https://icons.getbootstrap.com/)            | `''`    | Set input suffixIcon.    |
| placeholder | `string`                                                      | `''`    | Set input placeholder.   |
| disabled    | `boolean`                                                     | `false` | Set whether to disable.  |
| clearable   | `boolean`                                                     | `false` | Can settings be reset.   |
| pattern     | `RegExp`                                                      | `''`    | Verification of setting values. |

## Button Slots

| Name    | Parameters | Description              |
| ------- | ---------- | ------------------------ |
| prepend | `()`       | Front Input Box Content. |
| append  | `()`       | Post Input Box Content.  |
