<template>
  <div class="row y-gap-30 pt-60 md:pt-30">
    <div v-for="(elm, i) in states" :key="i" class="col-xl-3 col-sm-6">
      <div class="rounded-12 bg-white shadow-2 px-30 py-30 h-full">
        <div class="row y-gap-20 items-center justify-between">
          <div class="col-auto">
            <div>{{ elm.title }}</div>
            <div class="text-30 fw-700">{{ elm.amount }}</div>

            <div>
              <span class="text-accent-1">{{ elm.today }}</span> Today
            </div>
          </div>

          <div class="col-auto">
            <div class="size-80 flex-center bg-accent-1-05 rounded-full">
              <i :class="`text-30 ${elm.iconClass}`"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { states } from "@/data/dashboard";
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
