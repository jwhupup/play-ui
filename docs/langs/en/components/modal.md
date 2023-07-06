---
title: Modal
lang: en-US
---

# Modal <sup><PlBadge value="New" /></sup>

A modal dialog displays content that requires user interaction, in a layer above the page.

## Usage

### title

Set modal title.

<demo src="../../../example/modal/usage.vue"></demo>

### cancelButtonText | confirmButtonText

Set modal `cancel button` `confirm button` text.

<demo src="../../../example/modal/usage.vue"></demo>


### draggable

Settings can be dragged.

<demo src="../../../example/modal/usage.vue"></demo>

### shakeOff

shake off somthing.

<demo src="../../../example/modal/shake-off.vue"></demo>

### headless

custom modal.

<demo src="../../../example/modal/custom.vue"></demo>

## Props

| Name        | Type       | Default     | Description                    |
| ------      | ---------- | ----------- | ------------------------------ |
| title       | `string`   | `''`        | set modal title.               |
| cancelButtonText  | `string`   | `Cancel`    | set modal cancel button text.  |
| confirmButtonText | `string`   | `Confirm`   | set modal confirm button text. |
| draggable   | `boolean`  | `false`     | Draggable the modal.          |
| shakeOff    | `<'x-button' \| 'confirm-button' \| 'cancel-button' \| 'mask' \| 'header' \| 'footer'>[]` | `[]` | shake off somthing. |

## Slots

| Name     | Parameters | Description      |
| -------  | ---------- | ---------------- |
| default  | `()`       | Modal's content. |
| headless | `()`       | Custom modal.    |
