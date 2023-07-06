---
title: Popover
lang: en-US
---

# Popover <sup><PlBadge value="New" /></sup>

A simple and compact dialog of an action.

## Usage

### title | content

Set popover `title` `content`.

<demo src="../../../example/popover/usage.vue"></demo>

### trigger

Set popover trigger methods.

<demo src="../../../example/popover/trigger.vue"></demo>

### placement

Set popover placement.

<demo src="../../../example/popover/placement.vue"></demo>

### headless

Custom popover.

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
