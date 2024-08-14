<template>
  <section class="layout-pt-xl layout-pb-xl">
    <div class="container">
      <div class="row y-gap-10 justify-between items-end">
        <div class="col-auto">
          <h2 data-aos="fade-up" data-aos-delay="" class="text-30">
            Top Attractions
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
        class="row y-gap-30 justify-between pt-40 sm:pt-20"
      >
        <nuxt-link
          v-for="(elm, i) in destinationsThree"
          :key="i"
          to="/tour-list-1"
          class="col-lg-4 col-sm-6 d-flex items-center -hover-image-scale"
        >
          <div class="size-100 relative rounded-12 -hover-image-scale__image">
            <nuxt-img
              width="100"
              height="100"
              :src="elm.imgSrc"
              alt="image"
              class="img-ratio rounded-12"
            />
          </div>

          <div class="ml-30">
            <h3 class="text-18 fw-500">{{ elm.title }}</h3>
            <p class="text-14">{{ elm.tours }}+ Tours</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { destinationsThree } from "@/data/destinations";
</script>
