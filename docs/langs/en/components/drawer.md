---
title: Drawer
lang: en-US
---

# Drawer <sup><PlBadge value="New" /></sup>

Build hidden sidebars into your project for navigation, shopping carts, and more.

## Usage

### placement

Set drawer placement.

<demo src="../../../example/drawer/placement.vue"></demo>

### shakeOff

Shake off somthing.

<demo src="../../../example/drawer/shake-off.vue"></demo>

### fullscreen

Set whether to full screen.

<demo src="../../../example/drawer/fullscreen.vue"></demo>

### headless

Custom drawer.

<demo src="../../../example/drawer/headless.vue"></demo>

## Props

| Name        | Type       | Default     | Description                           |
| ------      | ---------- | ----------- | ------------------------------------- |
| placement   | `'left' \| 'right' \| 'top' \| 'bottom'`  | `'left'`  | set drawer placement. |
| fullscreen   | `boolean`  | `false`      | Set whether to full screen.   |
| shakeOff    | `<'x-button' \| 'mask' \| 'header'>[]` | `[]` | shake off somthing. |

## Slots

| Name     | Parameters | Description      |
| -------  | ---------- | ---------------- |
| default  | `()`       | Notification's content. |
| headless | `()`       | Custom notification.    |
