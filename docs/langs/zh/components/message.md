---
title: Message
lang: zh
---

# Message <sup><PlBadge value="New" /></sup>

显示全局通知和提醒消息.

## Usage

### content

设置消息内容.

<demo src="../../../example/message/content.vue"></demo>

### autoClose

设置是否自动关闭。

<demo src="../../../example/message/auto-close.vue"></demo>

### state

设置消息状态。

<demo src="../../../example/message/state.vue"></demo>

### closable

设置为可关闭。

<demo src="../../../example/message/closable.vue"></demo>

### headless

自定义消息。

<demo src="../../../example/message/headless.vue"></demo>

## Props

| Name        | Type       | Default     | Description                           |
| ------      | ---------- | ----------- | ------------------------------------- |
| content     | `string`   | `''`        | set message content.               |
| state  | `'info' \| 'success' \| 'warning' \| 'danger'`   | `'info'`  | set message state.  |
| autoClose   | `boolean`  | `true`      | Set whether to automatically close.   |
| closable    | `boolean` | `true` | set closable. |

## Slots

| Name     | Parameters | Description      |
| -------  | ---------- | ---------------- |
| default  | `()`       | Message's content. |
| headless | `()`       | Custom Messgae.    |
