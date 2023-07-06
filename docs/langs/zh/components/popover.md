---
title: Popover
lang: zh
---

# Popover <sup><PlBadge value="New" /></sup>

一个简单而紧凑的悬浮层。

## Usage

### title | content

设置悬浮层 `title` `content`。

<demo src="../../../example/popover/usage.vue"></demo>

### trigger

设置悬浮层触发方式.

<demo src="../../../example/popover/trigger.vue"></demo>

### placement

设置悬浮层出现位置.

<demo src="../../../example/popover/placement.vue"></demo>

### headless

自定义悬浮层.

<demo src="../../../example/popover/headless.vue"></demo>

## Props

| Name        | Type       | Default     | Description                           |
| ------      | ---------- | ----------- | ------------------------------------- |
| title   | `string`  | `''`  | set popover title. |
| content   | `string`  | `''`  | set popover content. |
| placement    | `<'top' \| 'right' \| 'bottom' \| 'left' \| 'top-start' \| 'top-end' \| 'right-start' \| 'right-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end'>[]` | `'right'` | set popover placement. |
| trigger    | `hover' \| 'click' \| boolean` | `'hover'` | set popover trigger methods. |

## Slots

| Name     | Parameters | Description      |
| -------  | ---------- | ---------------- |
| default  | `()`       | Popover's content. |
| headless | `()`       | Custom Popover.    |
