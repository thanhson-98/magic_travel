<template>
  <section class="layout-pt-xl">
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <h2 class="text-30">List Style v5</h2>
        </div>
      </div>

      <div class="row y-gap-30 pt-40 sm:pt-20">
        <div
          v-for="(elm, i) in tourData.slice(0, 4)"
          :key="i"
          class="col-lg-3 col-md-6"
        >
          <nuxt-link
            :to="`/tour-single-1/${elm.id}`"
            class="tourCard -type-1 d-block bg-white"
          >
            <div class="tourCard__header">
              <div class="tourCard__image ratio ratio-28:20">
                <nuxt-img
                  width="421"
                  height="301"
                  :src="elm.imageSrc"
                  alt="image"
                  class="img-ratio rounded-12"
                />
              </div>

              <button class="tourCard__favorite">
                <i class="icon-heart"></i>
              </button>
            </div>

            <div class="tourCard__content pt-10">
              <div
                class="tourCard__location d-flex items-center text-13 text-light-2"
              >
                <i class="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                {{ elm.location }}
              </div>

              <h3 class="tourCard__title text-16 fw-500 mt-5">
                <span>{{ elm.title }}</span>
              </h3>

              <div class="tourCard__rating mt-5">
                <div class="d-flex items-center">
                  <div class="d-flex x-gap-5 pr-10">
                    <Stars :star="elm.rating" />
                  </div>

                  <span class="text-dark-1 text-13">
                    {{ elm.rating }} ({{ elm.ratingCount }})
                  </span>
                </div>
              </div>

              <div
                class="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10"
              >
                <div class="d-flex items-center">
                  <i class="icon-clock text-16 mr-5"></i>
                  {{ elm.duration }}
                </div>

                <div>
                  From <span class="text-16 fw-500">${{ elm.price }}</span>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { tourData } from "@/data/tours";

import Stars from "@/components/common/Stars.vue"; // Adjust the path based on your project structure

// ... (any other setup logic) ...
</script>
