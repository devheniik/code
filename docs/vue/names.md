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
