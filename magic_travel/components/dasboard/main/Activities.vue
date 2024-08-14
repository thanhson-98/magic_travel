<template>
  <div class="row y-gap-30 pt-30">
    <div v-for="(elm, i) in notificationData" :key="i" class="col-12">
      <div class="d-flex items-center">
        <div class="flex-center size-40 bg-accent-1-05 rounded-full">
          <i :class="`${elm.icon} text-16`"></i>
        </div>

        <div class="lh-14 ml-10">{{ elm.message }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { notificationData } from "@/data/dashboard";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
