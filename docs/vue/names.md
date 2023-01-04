---
title: Names
---

# Names

## Variables

Bad :x:

```html
<script setup lang="ts">
  import { ref } from 'vue'

  const is_modal_open = ref(true)
</script>
```

Good :white_check_mark:

```html
<script setup lang="ts">
  import { ref } from 'vue'

  const isModalOpen = ref(true)
</script>
```

## Functions

Bad :x:

```html
<script setup lang="ts">
  import { ref } from 'vue'

  const is_modal_open = ref(true)

  const handle_open_modal = function () {
    is_modal_open.value = !is_modal_open.value
  }
</script>
```

Good :white_check_mark:

```html
<script setup lang="ts">
  import { ref } from 'vue'

  const isModalOpen = ref(true)

  const handleOpenModal = () => {
    isModalOpen.value = !isModalOpen.value
  }
</script>
```

## Props

Bad practies :x:

```html
<template>

  <!-- 💩 -->
  <MyComponent myProp="props" />

  <!-- 💩 -->
  <MyComponent my_prop="props" />

  <!-- 💩 -->
  <MyComponent myprop="props" />

</template>

<script setup lang="ts">
  import MyComponent from './MyComponent.vue'
</script>
```

Good practies :white_check_mark:


::: code-group

```html [App.vue]
<template>
  <MyComponent my-prop="props" />
</template>

<script setup lang="ts">
  import MyComponent from './MyComponent.vue'
</script>
```


```html [MyComponent.vue]
<template>
  <!-- ... -->
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'

  defineProps({
    myProp: {
        // ...
    }
  })

</script>
```
:::

## Component names

Firstly often you can find adviced to name you component like this style:

```html
📦components
 ┣ 📂global
 ┣ 📂forms
 ┗ 📂todos
   ┗ 📜Create.vue
   ┗ 📜Update.vue
   ┗ 📜View.vue
```

But we named component by full name without attantion to the folder where it locale, becouse it help in future faster find and understand files. Please write names like this:

```html
📦components
 ┣ 📂global
 ┣ 📂forms
 ┗ 📂todos
   ┗ 📜CreateTodo.vue
   ┗ 📜UpdateTodo.vue
   ┗ 📜ViewToto.vue
```

And some about style using components:

Bad practies :x:

```
<template>

  <!-- 💩 -->
  <createTodo />

  <!-- 💩 -->
  <Createtodo />

  <!-- 💩 -->
  <CreateTodo />

</template>

<script setup lang="ts">
  import CreateTodo from './CreateTodo.vue'
</script>
```

Good practies :white_check_mark:



```html
<template>

  <!-- 💩 -->
  <create-todo />

</template>

<script setup lang="ts">
  import CreateTodo from './CreateTodo.vue'
</script>
```
