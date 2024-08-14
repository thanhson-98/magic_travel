<template>
  <section class="layout-pt-xl layout-pb-xl bg-accent-1-05">
    <div class="container">
      <div class="row justify-between items-end y-gap-10">
        <div class="col-auto">
          <h2 data-aos="fade-up" data-aos-delay="" class="text-30 md:text-24">
            Featured Trips
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
        class="row y-gap-30 justify-between pt-40 sm:pt-20 mobile-css-slider -w-300"
      >
        <div v-for="(elm, i) in tourData" :key="i" class="col-lg-3 col-md-6">
          <nuxt-link
            :to="`/tour-single-1/${elm.id}`"
            class="tourCard -type-1 d-block border-1 bg-white hover-shadow-1 overflow-hidden rounded-12 -hover-shadow"
          >
            <div class="tourCard__header">
              <div class="tourCard__image ratio ratio-28:20">
                <nuxt-img
                  :src="elm.imageSrc"
                  alt="image"
                  class="img-ratio"
                  width="421"
                  height="301"
                />
              </div>

              <button class="tourCard__favorite">
                <i class="icon-heart"></i>
              </button>
            </div>

            <div class="tourCard__content px-20 py-10">
              <div
                class="tourCard__location d-flex items-center text-13 text-light-2"
              >
                <i class="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                {{ elm.location }}
              </div>

              <h3 class="tourCard__title text-16 fw-500 mt-5">
                <span>{{ elm.title }}</span>
              </h3>

              <div class="tourCard__rating text-13 mt-5">
                <div class="d-flex items-center">
                  <div class="d-flex x-gap-5">
                    <Stars :star="elm.rating" />
                  </div>

                  <span class="text-dark-1 ml-10">
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
import { ref } from "vue";
import Stars from "@/components/common/Stars";
import { tourData } from "@/data/tours";
</script>
