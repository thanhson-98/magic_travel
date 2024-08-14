<template>
  <div class="pl-tag__grid mobile-css-slider-2">
    <!-- Assuming tagData is available in the data property or as a computed property -->
    <div v-for="(elm, i) in tagData" :key="i" class="">
      <nuxt-link :to="`/destinations`" class="pl-tag">
        <div class="pl-tag__icon">
          <i :class="`${elm.icon} text-24 text-accent-1`"></i>
        </div>

        <div class="pl-tag__title text-dark-1">{{ elm.title }}</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { tagData } from "@/data/destinations"; // Update the path accordingly
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
