---
title: Tooltip
lang: en-US
---

# Tooltip <sup><PlBadge value="New" /></sup>

Commonly used to display prompt information when the mouse hovers.

## Usage

### title | content

Set tooltip `title` `content`.

<demo src="../../../example/tooltip/usage.vue"></demo>

### trigger

Set tooltip trigger methods.

<demo src="../../../example/tooltip/trigger.vue"></demo>

### placement

Set tooltip placement.

<demo src="../../../example/tooltip/placement.vue"></demo>

### headless

Custom tooltip.

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
