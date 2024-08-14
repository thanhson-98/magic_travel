<template>
  <section class="layout-pt-xl layout-pb-xl bg-accent-1-05">
    <div class="container">
      <div class="row y-gap-10 justify-between items-end">
        <div class="col-auto">
          <h2 data-aos="fade-up" data-aos-delay="" class="text-30">
            Popular things to do
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

      <div data-aos="fade-up" data-aos-delay="" class="row y-gap-20 pt-40">
        <div
          v-for="(elm, i) in featureCards"
          :key="i"
          class="col-xl-2 col-md-4 col-6"
        >
          <nuxt-link
            to="/tour-list-1"
            class="featureCard -type-5 -hover-accent-1"
          >
            <div class="featureCard__icon">
              <nuxt-img width="40" height="41" :src="elm.imgSrc" alt="image" />
            </div>

            <h4 class="text-18 fw-500 mt-20">{{ elm.title }}</h4>
            <div class="lh-13 mt-5">{{ elm.tourCount }}+ Tours</div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { featureCards } from "~/data/destinations";
</script>
