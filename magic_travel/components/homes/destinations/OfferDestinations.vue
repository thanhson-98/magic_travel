<template>
  <section class="layout-pt-xl">
    <div class="container">
      <div class="row y-gap-10 justify-between items-end">
        <div class="col-auto">
          <h2 data-aos="fade-up" data-aos-delay="" class="text-30">
            Special Offers
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
          v-for="(elm, i) in destinationOffers"
          :key="i"
          class="col-xl-3 col-lg-4 col-sm-6"
        >
          <nuxt-link
            to="/tour-list-1"
            class="d-flex items-center -hover-image-scale"
          >
            <div class="size-100 -hover-image-scale__image rounded-full">
              <nuxt-img
                width="260"
                height="260"
                :src="elm.imageSrc"
                alt="image"
                class="img-cover rounded-full"
              />
            </div>

            <div class="ml-20">
              <div class="text-accent-1">{{ elm.subtitle }}</div>
              <h4 class="text-15 fw-500 mt-5">{{ elm.title }}</h4>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { destinationOffers } from "@/data/destinations";
</script>
