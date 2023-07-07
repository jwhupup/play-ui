---
title: Tabs
lang: en-US
---

# Tabs <sup><PlBadge value="New" /></sup>

选项卡可以方便地在不同的视图之间切换。

## Usage

<demo src="../../../example/tabs/usage.vue"></demo>

## Tabs Props

| Name       | Type      | Default | Description           |
| ------     | --------- | ------- | ----------------------|
| defaultTab | `选项卡的名字`  | `第一个选项卡的名字`    | 默认选中的选项卡。 |
| placement  | `'left' \| 'right' \| 'top'`  | `'top'` | 选项卡的位置。    |

## TabPane Props

| Name   | Type       | Default | Description |
| ------ | ---------- | ------- | ----------- |
| name   | `string`   | `''`    | 选项卡的名字。|
| ...    | [Button Props](https://playui.netlify.app/langs/en/components/button.html#props) | ... | 继承按钮组件的属性。|

## Tabs Slots

| Name    | Parameters | Description        |
| ------- | ---------- | ----------------   |
| default | `()`       | 放置选项卡面板组件。 |
