---
title: Breadcrumb
lang: en-US
---

# Breadcrumb <sup><PlBadge value="New" /></sup>

面包屑是一种导航系统，用于显示用户在网站或应用程序中的位置。

## Usage

<demo src="../../../example/breadcrumb/usage.vue"></demo>

## Props

| Name       | Type       | Default     | Description                           |
| ------     | ---------- | ----------- | ------------------------------------- |
| modelValue | `<{ name: string separator?: String to: RouteLocationRaw icon: string }>[]`  | `[]`  | 绑定面包屑选项。 |
| replace    | `boolean`  | `false` | 等同于vue router中的 `replace` 方法。 |
| separator  | `string`   | `'/'`   | 面包屑的分隔符。 |
