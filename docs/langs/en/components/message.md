---
title: Message
lang: en-US
---

# Message <sup><PlBadge value="New" /></sup>

Displaying global notification and reminder messages.

## Usage

### content

Set message content.

<demo src="../../../example/message/content.vue"></demo>

### autoClose

Set whether to automatically close.

<demo src="../../../example/message/auto-close.vue"></demo>

### state

Set message state.

<demo src="../../../example/message/state.vue"></demo>

### closable

Set closable.

<demo src="../../../example/message/closable.vue"></demo>

### headless

Custom Message.

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
