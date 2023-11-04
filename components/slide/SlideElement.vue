<template>
  <swiper
    :class="className"
    :modules="[SwiperAutoplay, SwiperController, SwiperNavigation]"
    :loop="true"
    :slides-per-view="3"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
  >
    <slot />
  </swiper>
</template>

<script setup>
const props = defineProps({ className: String });
</script>

<style scoped>
/* .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
.swiper-cards {
  width: 240px;
  height: 240px;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
} */
</style>
