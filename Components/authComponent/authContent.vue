<script setup>

  import { defineProps } from 'vue'

  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: 'Découvrez le Bénin à travers nos offres de voyage.'
    }
  })
</script>

<template>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto">
          <div class="blogAuth">
            <div class="text-center mb-4"><img src="~/assets/images/logo.png" alt="logo"></div>
            <div>
              <div class="mb-6">
                <h1 class="mb-3">{{ title }}</h1>
                <p class="mb-0">{{ subtitle }}</p>
              </div>
              <slot></slot> 
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped></style>