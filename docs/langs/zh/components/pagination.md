---
title: Pagination
lang: zh
---

# Pagination <sup><PlBadge value="New" /></sup>

分页允许您在多个页面上将大量内容划分为较小的块。

## Usage

<demo src="../../../example/pagination/usage.vue"></demo>

## Props

| Name      | Type          | Default     | Description                    |
| ----------| ------------- | ----------- | -----------------------------  |
| mode      | `'solid'` \| `'white'` \| `'outline'` \| `'ghost'` \| `'link'` | `'ghost'` | 分页器风格。 |
| shape     | `'rounded'` \| `'pilled'` \| `'circle'` \| `'plain'` | `'rounded'` | 分页器按钮形状。 |
| count     | `number` | `0` | 分页器总页数。   |
| showCount | `number` | `7` | 分页器展示页数。  | 
