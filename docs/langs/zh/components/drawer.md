---
title: Drawer
lang: zh
---

# Drawer <sup><PlBadge value="New" /></sup>

将隐藏的边栏构建到您的项目中，用于导航、购物车等。

## Usage

### placement

设置抽屉位置。

<demo src="../../../example/drawer/placement.vue"></demo>

### fullscreen

设置是否全屏显示。

<demo src="../../../example/drawer/fullscreen.vue"></demo>

### shakeOff

甩掉一些东西。

<demo src="../../../example/drawer/shake-off.vue"></demo>

### headless

定制抽屉。

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
