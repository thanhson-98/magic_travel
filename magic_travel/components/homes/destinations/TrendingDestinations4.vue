<template>
  <section class="layout-pt-xl layout-pb-xl">
    <div class="container">
      <div class="row y-gap-10 justify-between items-end">
        <div class="col-auto">
          <h2 data-aos="fade-up" data-aos-delay="" class="text-30 md:text-24">
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
        class="row y-gap-30 md:y-gap-20 pt-40 sm:pt-20"
      >
        <nuxt-link
          v-for="(elm, i) in destinationsFive"
          :key="i"
          to="/tour-list-1"
          class="col-xl-2 col-lg-3 col-md-4 col-6 featureCard -type-7 -hover-image-scale"
        >
          <div
            class="featureCard__image ratio ratio-23:30 -hover-image-scale__image rounded-12"
          >
            <nuxt-img
              width="450"
              height="361"
              :src="elm.imgSrc"
              alt="image"
              class="img-ratio rounded-12"
            />
          </div>

          <div class="mt-20">
            <h4 class="text-18 fw-500">{{ elm.title }}</h4>
            <div class="text-14 lh-13 mt-5">{{ elm.count }}+ Tours</div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { destinationsFive } from "@/data/destinations";
</script>
