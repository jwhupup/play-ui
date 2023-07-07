---
title: Pagination
lang: en-US
---

# Pagination <sup><PlBadge value="New" /></sup>

Pagination allows you to divide large amounts of content into smaller chunks across multiple pages.

## Usage

<demo src="../../../example/pagination/usage.vue"></demo>

## Props

| Name      | Type          | Default     | Description                    |
| ----------| ------------- | ----------- | -----------------------------  |
| mode      | `'solid'` \| `'white'` \| `'outline'` \| `'ghost'` \| `'link'` | `'ghost'` | pagination style. |
| shape     | `'rounded'` \| `'pilled'` \| `'circle'` \| `'plain'` | `'rounded'` | pagination shape. |
| count     | `number` | `0` | pagination total count.               |
| showCount | `number` | `7` | pagination displayed length. |
