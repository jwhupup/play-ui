---
title: Notification
lang: en-US
---

# Notification <sup><PlBadge value="New" /></sup>

Displaying global notification and reminder messages.

## Usage

### title | content | cancelButtonText

Set notification title.

<demo src="../../../example/notification/usage.vue"></demo>

### autoClose

Set whether to automatically close.

<demo src="../../../example/notification/auto-close.vue"></demo>

### placement

Set notification placement.

<demo src="../../../example/notification/placement.vue"></demo>

### shakeOff

Shake off somthing.

<demo src="../../../example/notification/shake-off.vue"></demo>

### headless

Custom notification.

<demo src="../../../example/notification/headless.vue"></demo>

## Props

| Name        | Type       | Default     | Description                           |
| ------      | ---------- | ----------- | ------------------------------------- |
| title       | `string`   | `''`        | set notification title.               |
| content     | `string`   | `''`        | set notification title.               |
| cancelButtonText  | `string`   | `''`  | set notification cancel button text.  |
| confirmButtonText | `string`   | `''`  | set notification confirm button text. |
| placement   | `left \| right`  | `''`  | set notification placement. |
| autoClose   | `boolean`  | `true`      | Set whether to automatically close.   |
| shakeOff    | `<'x-button' \| 'confirm-button' \| 'cancel-button' \| 'mask' \| 'header' \| 'footer'>[]` | `[]` | shake off somthing. |

## Slots

| Name     | Parameters | Description      |
| -------  | ---------- | ---------------- |
| default  | `()`       | Notification's content. |
| headless | `()`       | Custom notification.    |
