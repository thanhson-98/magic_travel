<template>
  <div v-for="(elm, i) in reviews" :key="i" class="pt-30">
    <div class="row justify-between">
      <div class="col-auto">
        <div class="d-flex items-center">
          <div class="size-40 rounded-full">
            <nuxt-img
              width="40"
              height="40"
              :src="elm.avatar"
              alt="image"
              class="img-cover"
            />
          </div>
          <div class="text-16 fw-500 ml-20">{{ elm.name }}</div>
        </div>
      </div>

      <div class="col-auto">
        <div class="text-14 text-light-2">{{ elm.date }}</div>
      </div>
    </div>

    <div class="d-flex items-center mt-15">
      <div class="d-flex x-gap-5">
        <Stars :star="elm.stars" />
      </div>
      <div class="text-16 fw-500 ml-10">{{ elm.reviewText }}</div>
    </div>

    <p class="mt-10">{{ elm.desc }}</p>

    <div class="row x-gap-20 y-gap-20 pt-20">
      <div v-for="(elm2, i2) in elm.images" :key="i2" class="col-auto">
        <div class="size-130">
          <nuxt-img
            width="195"
            height="195"
            :src="elm2"
            alt="image"
            class="img-cover rounded-12"
          />
        </div>
      </div>
    </div>

    <div class="d-flex x-gap-30 items-center mt-20">
      <div>
        <a href="#" class="d-flex items-center">
          <i class="icon-like text-16 mr-10"></i>
          Helpful
        </a>
      </div>
      <div>
        <a href="#" class="d-flex items-center">
          <i class="icon-dislike text-16 mr-10"></i>
          Not helpful
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reviews } from "@/data/tourSingleContent";
import Stars from "@/components/common/Stars.vue";
</script>
