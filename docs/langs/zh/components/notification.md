---
title: Notification
lang: zh
---

# Notification <sup><PlBadge value="New" /></sup>

显示全局通知和提醒消息。

## Usage

### title | content | cancelButtonText

设置通知标题。

<demo src="../../../example/notification/usage.vue"></demo>

### autoClose

设置是否自动关闭。

<demo src="../../../example/notification/auto-close.vue"></demo>

### placement

设置通知位置。

<demo src="../../../example/notification/placement.vue"></demo>

### shakeOff

甩掉一些东西。

<demo src="../../../example/notification/shake-off.vue"></demo>

### headless

自定义通知。

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
