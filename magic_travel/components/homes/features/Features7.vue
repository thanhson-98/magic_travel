<template>
  <section class="relative layout-pt-xl layout-pb-xl">
    <div class="sectionBg -mx-30 bg-accent-1-05 rounded-24"></div>

    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <h2
            data-aos="fade-up"
            data-aos-delay=""
            class="text-30 md:text-24 fw-700"
          >
            Our Footprints
          </h2>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="" class="row pt-40 md:pt-30">
        <div v-for="(elm, i) in featuresThree" :key="i" class="col-lg-3 col-6">
          <div class="text-center py-50 md:py-20 rounded-24 -hover-bg-white">
            <nuxt-img width="60" height="61" :src="elm.icon" alt="icon" />

            <h3 class="text-40 md:text-30 lh-14 fw-700 mt-30 md:mt-15">
              {{ elm.value }}
            </h3>
            <p class="lh-15">{{ elm.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { featuresThree } from "@/data/features";
</script>
