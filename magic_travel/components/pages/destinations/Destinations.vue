<template>
  <section class="layout-pt-xl">
    <div class="container">
      <div class="row y-gap-10 justify-between items-end">
        <div class="col-auto">
          <h2 class="text-30 md:text-24">Trending destinations</h2>
        </div>

        <div class="col-auto">
          <nuxt-link to="/tour-list-1" class="buttonArrow d-flex items-center">
            <span>See all</span>
            <i class="icon-arrow-top-right text-16 ml-10"></i>
          </nuxt-link>
        </div>
      </div>

      <div
        class="row y-gap-30 justify-between xl:justify-center sm:justify-start pt-40 sm:pt-20 mobile-css-slider -w-160"
      >
        <div
          v-for="(destination, index) in destinations13"
          :key="index"
          class="col-xl-auto col-lg-2 col-md-3 col-sm-4 col-6"
        >
          <div class="featureImage -type-1 text-center">
            <div class="featureImage__image mx-auto">
              <nuxt-img
                width="260"
                height="260"
                :src="destination.imgSrc"
                alt="image"
                class="size-130 object-cover rounded-full"
              />
            </div>

            <h3 class="featureImage__title text-16 fw-500 mt-20">
              {{ destination.name }}
            </h3>
            <p class="featureImage__text text-14">
              {{ destination.tours }}+ Tours
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { destinations13 } from "@/data/destinations";

// The rest of the script setup if needed
</script>

<style scoped>
/* Add your styles here */
</style>
