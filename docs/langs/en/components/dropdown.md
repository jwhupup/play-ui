---
title: Dropdown
lang: en-US
---

# Dropdown <sup><PlBadge value="New" /></sup>

Breadcrumbs are a navigation system used to show a user's location in a site or app.

## Usage

<demo src="../../../example/dropdown/usage.vue"></demo>

## Props

| Name       | Type       | Default     | Description                           |
| ------     | ---------- | ----------- | ------------------------------------- |
| modelValue | `<{ name: string separator?: String to: RouteLocationRaw icon: string }>[]`  | `[]`  | bind breadcrumb options. |
| replace    | `boolean`  | `false` | equivalent to `replace` in vue router. |
| separator  | `string`   | `'/'`   | set toolseparator. |
