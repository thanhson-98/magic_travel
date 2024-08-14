<template>
  <section class="layout-pt-xl">
    <div class="container">
      <div class="row y-gap-10 justify-between items-end">
        <div class="col-auto">
          <h2 data-aos="fade-up" data-aos-delay="" class="text-30">
            Trending Destinations
          </h2>
        </div>

        <div class="col-auto">
          <nuxt-link
            to="/tour-list-1"
            data-aos="fade-right"
            data-aos-delay=""
            class="buttonArrow d-flex items-center"
          >
            <span>See all</span>
            <i class="icon-arrow-top-right text-16 ml-10"></i>
          </nuxt-link>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay=""
        class="row y-gap-30 justify-between xl:justify-center sm:justify-start pt-40 sm:pt-20 mobile-css-slider -w-160"
      >
        <div
          v-for="(elm, i) in destinationsTwo"
          :key="i"
          class="col-xl-2 col-lg-3 col-md-4 col-6"
        >
          <nuxt-link to="/tour-list-1" class="-hover-image-scale">
            <div class="ratio ratio-19:21 rounded-12 -hover-image-scale__image">
              <nuxt-img
                width="260"
                height="260"
                :src="elm.imgSrc"
                alt="image"
                class="img-ratio rounded-12"
              />
            </div>

            <h3 class="text-18 fw-500 mt-20">{{ elm.title }}</h3>
            <p class="text-14">{{ elm.tours }}+ Tours</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { destinationsTwo } from "@/data/destinations";
</script>
