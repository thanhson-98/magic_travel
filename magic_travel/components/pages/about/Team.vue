<template>
  <section class="layout-pt-xl">
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <h2 class="text-30">Meet The Team</h2>
        </div>
      </div>

      <div class="row y-gap-30 pt-40 sm:pt-20">
        <div
          v-for="(member, index) in teamData"
          :key="index"
          class="col-lg col-md-4 col-sm-6"
        >
          <div class="ratio ratio-23:26">
            <nuxt-img
              :width="345"
              :height="395"
              :src="member.imgPath"
              alt="image"
              class="img-ratio bg-light-1 rounded-12"
            />
          </div>

          <h3 class="text-16 fw-500 mt-20">{{ member.name }}</h3>
          <p class="text-14 lh-16">{{ member.position }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { teamData } from "@/data/team";
</script>

<style scoped>
/* Add your styles here */
</style>
