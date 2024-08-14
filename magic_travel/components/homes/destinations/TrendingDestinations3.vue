<template>
  <section class="layout-pt-lg layout-pb-lg">
    <div class="container">
      <div class="row y-gap-15 justify-between items-end">
        <div class="col-auto">
          <h2 data-aos="fade-up" data-aos-delay="" class="text-30 md:text-24">
            Trending destinations
          </h2>
        </div>

        <div class="col-auto">
          <nuxt-link
            to="/tour-list-1"
            data-aos="fade-up"
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
        class="row y-gap-30 pt-40 sm:pt-20"
      >
        <nuxt-link
          v-for="(elm, i) in destinationCards2"
          :key="i"
          to="/tour-list-1"
          class="col-lg-3 col-sm-6 featureCard -type-6 -hover-image-scale"
        >
          <div class="featureCard__image -hover-image-scale__image rounded-12">
            <nuxt-img width="450" height="270" :src="elm.imgSrc" alt="image" />
          </div>

          <div class="featureCard__content">
            <h3 class="text-16 fw-500 text-white">{{ elm.title }}</h3>
            <p class="text-white lh-16">{{ elm.tourCount }}+ Tours</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { destinationCards2 } from "@/data/destinations";
</script>
