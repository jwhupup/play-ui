---
title: Tabs
lang: en-US
---

# Tabs <sup><PlBadge value="New" /></sup>

Tabs make it easy to switch between different views.

## Usage

<demo src="../../../example/tabs/usage.vue"></demo>

## Tabs Props

| Name       | Type      | Default | Description           |
| ------     | --------- | ------- | ----------------------|
| defaultTab | `string`  | `''`    | default selected tab. |
| placement  | `string`  | `''`    | placement of tabs.    |

## TabPane Props

| Name   | Type       | Default | Description |
| ------ | ---------- | ------- | ----------- |
| name   | `Tabs name`   | `first Tabs name`    | set TabPane name. |
| ...    | [Button Props](https://playui.netlify.app/langs/en/components/button.html#props) | ... | extends Button Props. |

## Tabs Slots

| Name    | Parameters | Description        |
| ------- | ---------- | ----------------   |
| default | `()`       | TabPane component. |
