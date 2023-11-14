<template>
  <div
    class="tab-pane fade tab-detaill container"
    id="ex1-tabs-1"
    aria-labelledby="ex1-tab-1"
    :aria-tabs="attr"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  attr: {
    type: String,
    require: true,
  },
});
</script>
