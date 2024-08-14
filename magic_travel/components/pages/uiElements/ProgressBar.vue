<template>
  <div class="col-lg-6">
    <div class="text-18 lh-1 text-dark-1 fw-500 mb-40">Progress bars</div>

    <div v-for="(elm, i) in progressBar" :key="i" class="progressBar">
      <div class="mt-30">
        <div class="progressBar__bg bg-border"></div>
        <div class="progressBar__bar bg-accent-1" :style="{ width: `${elm}%` }">
          <span>{{ elm }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { progressBar } from "@/data/uiElements";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
