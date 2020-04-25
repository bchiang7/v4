---
title: Destructure Property From Object Using Spread - ES6
description: Extract specific property from objects using destructuring method in ECMAScript
date: '2020-04-26'
draft: false
slug: '/pensieve/destructure-property-from-object-using-spread-es6'
tags:
  - JavaScript
  - Spread
  - ES6
  - Destructure
showInProjects: false
---

## Problem
Destructure `num_in_process` from `values` object


## Solution

```js:title=Javascript/ES6
const formatValues = ({ num_in_process, ...values }) => {
  const _vs = { ...values };
  _vs.end_datetime = Math.floor(_vs.end_datetime.valueOf() / 1000);
  _vs.start_datetime = Math.floor(_vs.start_datetime.valueOf() / 1000);
  return _vs;
};
```
