<template>
  <section class="layout-pt-xl">
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <h2 data-aos="fade-up" class="text-30 md:text-24">
            Why choose Tourz
          </h2>
        </div>
      </div>

      <div
        data-aos="fade-up"
        class="row md:x-gap-20 pt-40 sm:pt-20 mobile-css-slider -w-280"
      >
        <div v-for="(elm, i) in features" :key="i" class="col-lg-3 col-sm-6">
          <div class="featureIcon -type-1 pr-40 md:pr-0">
            <div class="featureIcon__icon">
              <nuxt-img width="60" height="60" :src="elm.iconSrc" alt="icon" />
            </div>

            <h3 class="featureIcon__title text-18 fw-500 mt-30">
              {{ elm.title }}
            </h3>
            <p class="featureIcon__text mt-10">{{ elm.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { features } from "@/data/features";
</script>
