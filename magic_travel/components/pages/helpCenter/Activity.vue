<template>
  <section class="layout-pt-md">
    <div class="container">
      <div class="row y-gap-30">
        <div v-for="(elm, i) in sections" :key="i" class="col-lg-4 col-md-6">
          <div class="px-50 py-45 border-1 rounded-12">
            <nuxt-img
              :width="60"
              :height="60"
              :src="elm.imgSrc"
              alt="image"
              class="mb-20"
            />

            <h3 class="text-18 fw-500">{{ elm.title }}</h3>

            <div class="mt-10">{{ elm.content }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { sections } from "@/data/help";
</script>
