<template>
  <section class="layout-pt-xl layout-pb-xl bg-dark-1">
    <div class="container">
      <div class="row justify-between items-end y-gap-10">
        <div class="col-auto">
          <h2
            data-aos="fade-up"
            data-aos-delay=""
            class="text-30 md:text-24 text-white"
          >
            Trending Destinations
          </h2>
        </div>

        <div class="col-auto">
          <nuxt-link
            to="/tour-list-1"
            data-aos="fade-left"
            data-aos-delay=""
            class="buttonArrow d-flex items-center text-white"
          >
            <span>See all</span>
            <i class="icon-arrow-top-right text-16 ml-10"></i>
          </nuxt-link>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay=""
        class="row y-gap-30 justify-between pt-40 sm:pt-20"
      >
        <nuxt-link
          v-for="(elm, i) in destinationsEight"
          :key="i"
          to="/tour-list-1"
          class="col-lg-3 col-md-6 featureCard -type-4 -hover-image-scale"
        >
          <div
            class="featureCard__image ratio ratio-3:4 -hover-image-scale__image rounded-12"
          >
            <nuxt-img
              width="450"
              height="600"
              :src="elm.imgSrc"
              alt="image"
              class="img-ratio"
            />
          </div>

          <div class="featureCard__content text-center">
            <h4 class="text-20 fw-500 text-white">{{ elm.name }}</h4>
            <div class="text-14 lh-14 text-white">
              {{ elm.tourCount }}+ Tours
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { destinationsEight } from "@/data/destinations";
</script>
