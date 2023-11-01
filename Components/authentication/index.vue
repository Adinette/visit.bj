<script setup>

import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto">
          <div class="blogAuthentication p-3">
            <div class="text-center mb-4"><img src="~/assets/images/logo.png" alt="logo"></div>
            <div>
              <h1>{{ title }}</h1>
              <p>Découvrez le Bénin à travers nos offres de voyage.</p>
              <slot></slot> 
            </div>
          </div>
        </div>
      </div>
    </div>
</template>