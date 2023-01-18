---
title: Dynamic classes
---

# Names

## Variables

Bad :x:

```html
<template>
  <div
    :class="`main section backgroud-${color}`">
    <!-- ... -->
  </div>
  <div
    class="static classes"
    :class="`main section backgroud-${color}`">
    <!-- ... -->
  </div>
</template>
```

Good :white_check_mark:

```html
<template>
  <div
    :class="['backgroud-${color}', { 'disabled' : disabled }, 'main section']">
    <!-- ... -->
  </div>
</template>
```
