---
title: Templates
---

# Template

## Variables

Bad practies :x:

```html
<template>
  <div>
    <Modal :show="is_modal_open" />
    <button @click="is_modal_open = !is_modal_open">Toggle</button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const is_modal_open = ref(true)
</script>
```

Good practies :white_check_mark:

```html
<template>
  <div>
    <Modal :show="is_modal_open" />
    <button @click="handleOpenModal">Toggle</button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const isModalOpen = ref(true)

  const handleOpenModal = () => {
    isModalOpen.value = !isModalOpen.value
  }
</script>
```

## Functions

Bad practies :x:

```html
<template>
  <div>
    <form>
      <!-- Create Massage -->
    </form>

    <!-- 💩 -->
    <button @click="saveMassage; goToMessage">Save & GO</button>

    <!-- 💩 -->
    <button @click="[saveMassage, goToMessage]">Save & GO</button>

    <!-- 💩 -->
    <button @click="() => {saveMassage(); goToMessage()}">Save & GO</button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const saveMassage = () => {
    // ... saving
  }

  const goToMessage = () => {
    // ... saving
  }
</script>
```

Good practies :white_check_mark:

```html
<template>
  <div>
    <form>
      <!-- Create Massage -->
    </form>

    <!-- 💩 -->
    <button @click="handleSaveButton">Save & GO</button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const handleSaveButton = async () => {
    await saveMassage()
    goToMessage()
  }

  const saveMassage = () => {
    // ... saving
  }

  const goToMessage = () => {
    // ... saving
  }
</script>
```
