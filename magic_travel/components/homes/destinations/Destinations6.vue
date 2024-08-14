<template>
  <section class="layout-pt-xl layout-pb-xl">
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
        class="row y-gap-30 md:y-gap-20 pt-40 sm:pt-20"
      >
        <div
          v-for="(elm, i) in destinationsTen"
          :key="i"
          class="w-1/5 lg:w-1/4 md:w-1/2"
        >
          <nuxt-link
            to="/tour-list-1"
            class="featureCard -type-7 -hover-image-scale"
          >
            <div
              class="featureCard__image ratio ratio-23:30 -hover-image-scale__image rounded-12"
            >
              <nuxt-img
                width="351"
                height="451"
                :src="elm.image"
                alt="image"
                class="img-ratio rounded-12"
              />
            </div>

            <div class="mt-20">
              <h4 class="text-18 fw-500">{{ elm.name }}</h4>
              <div class="text-14 lh-13 mt-5">{{ elm.tourCount }}+ Tours</div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { destinationsTen } from "@/data/destinations";
</script>
