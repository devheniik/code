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

## Fuctions

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
