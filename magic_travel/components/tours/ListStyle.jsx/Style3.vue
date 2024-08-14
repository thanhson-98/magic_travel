<template>
  <section class="layout-pt-xl">
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <h2 class="text-30">List Style v3</h2>
        </div>
      </div>

      <div class="row y-gap-30 pt-40 sm:pt-20">
        <div
          v-for="(elm, i) in tourData.slice(0, 3)"
          :key="i"
          class="col-lg-4 col-sm-6"
        >
          <nuxt-link
            :to="`/tour-single-1/${elm.id}`"
            class="tourCard -type-3 -hover-image-scale"
          >
            <div
              class="tourCard__image ratio ratio-41:45 rounded-12 -hover-image-scale__image"
            >
              <nuxt-img
                width="421"
                height="301"
                :src="elm.imageSrc"
                alt="image"
                class="img-ratio rounded-12"
              />
            </div>

            <div class="tourCard__wrap">
              <div
                class="tourCard__header d-flex justify-between items-center text-13 text-white"
              >
                <div class="d-flex items-center">
                  <i class="icon-clock text-16 mr-5"></i>
                  {{ elm.duration }}
                </div>

                <button class="tourCard__favorite">
                  <i class="icon-heart"></i>
                </button>
              </div>

              <div class="tourCard__content">
                <div>
                  <div
                    class="tourCard__location d-flex items-center text-13 text-white"
                  >
                    <i class="icon-pin d-flex text-16 text-white mr-5"></i>
                    {{ elm.location }}
                  </div>

                  <h3 class="tourCard__title text-18 text-white fw-500 mt-5">
                    <span>{{ elm.title }}</span>
                  </h3>

                  <div
                    class="tourCard__rating d-flex items-center text-13 mt-5"
                  >
                    <div class="d-flex items-center x-gap-5">
                      <Stars :star="elm.rating" :font="12" />
                    </div>

                    <span class="text-white ml-10">
                      {{ elm.rating }} ({{ elm.ratingCount }})
                    </span>
                  </div>
                </div>

                <div class="text-right text-white">
                  <div class="text-13 lh-14">From</div>
                  <div class="text-18 fw-500">${{ elm.price }}</div>
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
</script>
