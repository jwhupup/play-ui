---
title: Modal
lang: zh
---

# Modal <sup><PlBadge value="New" /></sup>

模态对话框在页面上方的层中显示需要用户交互的内容。

## Usage

### title

设置模态对话框标题。

<demo src="../../../example/modal/usage.vue"></demo>

### cancelButtonText | confirmButtonText

设置模态对话框 `取消` `确认` 按钮文案。

<demo src="../../../example/modal/usage.vue"></demo>


### draggable

设置模态框可以拖动。

<demo src="../../../example/modal/usage.vue"></demo>

### shakeOff

甩掉某些元素。

<demo src="../../../example/modal/shake-off.vue"></demo>

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
| default  | `()`       | 模态框内容. |
| headless | `()`       | 自定义模态框（保留了模态框显隐的基本能力）.    |
