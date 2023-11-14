<template>
      <li class="nav-item" :role="role" >
        <a class="nav-link" id="ex1-tab-1">{{ title }}</a>
      </li>
</template>

<script setup lang="ts">
defineProps({
  role: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  }, 
});
</script>
