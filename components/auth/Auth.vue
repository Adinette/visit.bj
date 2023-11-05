<template>
  <div class="auth">
    <div class="container">
    <div class="row">
      <div class="col-md-8 col-lg-6 mx-auto">
        <div class="blogAuth">
          <div class="text-center mb-3"> <nuxt-img src="logo.png" alt="logo"/></div>
          <div>
            <div class="mb-5">
              <h1>{{ props.title }}</h1>
              <p class="subtitle mb-0">{{ props.subtitle }}</p>
            </div>
            <slot></slot> 
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>

  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: 'Découvrez le Bénin à travers nos offres de voyage.', 
    }
  })

</script>