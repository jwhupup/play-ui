---
title: Tooltip
lang: zh
---

# Tooltip <sup><PlBadge value="New" /></sup>

通常用于在鼠标悬停时显示提示信息。

## Usage

### title | content

设置工具提示 `title` `content`.

<demo src="../../../example/tooltip/usage.vue"></demo>

### trigger

设置工具提示触发方式。

<demo src="../../../example/tooltip/trigger.vue"></demo>

### placement

设置工具提示位置。

<demo src="../../../example/tooltip/placement.vue"></demo>

### headless

自定义工具提示。

<demo src="../../../example/tooltip/headless.vue"></demo>

## Props

| Name        | Type       | Default     | Description                           |
| ------      | ---------- | ----------- | ------------------------------------- |
| title   | `string`  | `''`  | set tooltip title. |
| content   | `string`  | `''`  | set tooltip content. |
| placement    | `<'top' \| 'right' \| 'bottom' \| 'left' \| 'top-start' \| 'top-end' \| 'right-start' \| 'right-end' \| 'bottom-start' \| 'bottom-end' \| 'left-start' \| 'left-end'>[]` | `'right'` | set tooltip placement. |
| trigger    | `hover' \| 'click'` | `'hover'` | set tooltip trigger methods. |

## Slots

| Name     | Parameters | Description      |
| -------  | ---------- | ---------------- |
| headless | `()`       | Custom Popover.    |
