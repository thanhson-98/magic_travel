<template>
  <div class="roadmap roadMap2">
    <div v-for="(elm, i) in roadmapData2" :key="i" class="roadmap__item">
      <div
        v-if="elm.icon"
        class="roadmap__iconBig"
        @click="toggleActiveRoadmap(i)"
      >
        <i :class="elm.icon"></i>
      </div>
      <div v-else class="roadmap__icon" @click="toggleActiveRoadmap(i)"></div>
      <div class="roadmap__wrap">
        <div class="roadmap__title" @click="toggleActiveRoadmap(i)">
          {{ elm.title }}
        </div>
        <div
          v-if="elm.content"
          :class="{ active: activeRoadmap === i }"
          class="roadmap__content"
        >
          {{ elm.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { roadmapData2 } from "@/data/tourSingleContent";
import { ref } from "vue";

const activeRoadmap = ref(2);

const toggleActiveRoadmap = (index) => {
  activeRoadmap.value = activeRoadmap.value === index ? -1 : index;
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
