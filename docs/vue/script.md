---
title: Script
---

# Template

## Compotition Api
You need to separate script logic in your component, try to write comment which help you and your team to navigate, so composition api was create for slove problem when all logiс mixed in option api.

Bad practies :x:

```html
<template>
  <div>
    <!-- Part of component with form -->
    <input type="text" v-model="inputValue"/>
    <button @click="clearInput">Toggle</button>

    <!-- Part of component with Modal -->
    <Modal :show="isModalOpen" />
    <button @click="handleOpenModal">Toggle</button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const isModalOpen = ref(true)
  const inputValue = ref('')

  const handleOpenModal = () => {
    isModalOpen.value = !isModalOpen.value
  }
  const clearInput = () => {
    inputValue.value = ''
  }
</script>
```

Good practies :white_check_mark:

```html
<template>
  <div>
    <!-- Part of component with form -->
    <input type="text" v-model="inputValue"/>
    <button @click="clearInput">Toggle</button>

    <!-- Part of component with Modal -->
    <Modal :show="isModalOpen" />
    <button @click="handleOpenModal">Toggle</button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  // Modal section
  const isModalOpen = ref(true)
  const handleOpenModal = () => {
    isModalOpen.value = !isModalOpen.value
  }

  // Form section
  const inputValue = ref('')
  const clearInput = () => {
    inputValue.value = ''
  }
</script>
```
