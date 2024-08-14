<template>
  <section class="layout-pt-xl layout-pb-xl bg-accent-2-05">
    <div class="container">
      <div class="row y-gap-10 justify-between items-end">
        <div class="col-auto">
          <h2 data-aos="fade-up" data-aos-delay="" class="text-30">
            Top Deals Worldwide
          </h2>
        </div>

        <div class="col-auto">
          <nuxt-link
            to="/tour-list-1"
            data-aos="fade-right"
            data-aos-delay=""
            class="buttonArrow d-flex items-center"
          >
            <span>See All Travel</span>
            <i class="icon-arrow-top-right text-16 ml-10"></i>
          </nuxt-link>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay=""
        class="row y-gap-30 md:y-gap-20 md:x-gap-20 pt-40 sm:pt-20"
      >
        <div
          v-for="(elm, i) in regions"
          :key="i"
          class="col-xl-2 col-lg-3 col-md-4 col-6"
        >
          <nuxt-link
            to="/tour-list-1"
            class="featureCard -type-8 -hover-image-scale"
          >
            <div class="featureCard__image -hover-image-scale__image">
              <nuxt-img width="285" height="226" :src="elm.image" alt="image" />
            </div>

            <div class="featureCard__badge">
              <div>UPTO</div>
              <div>{{ elm.discount }}%</div>
              <div>OFF</div>
            </div>

            <div class="featureCard__content">
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
import { regions } from "@/data/destinations";
</script>
