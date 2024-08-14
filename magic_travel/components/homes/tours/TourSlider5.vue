<template>
  <section class="layout-pt-xl layout-pb-xl">
    <div class="container">
      <div class="row y-gap-10 justify-between items-center y-gap-10">
        <div class="col-auto">
          <h2 data-aos="fade-up" data-aos-delay="" class="text-30">
            Featured Trips
          </h2>
        </div>
      </div>

      <div class="relative pt-40 sm:pt-20">
        <div class="js-section-slider">
          <div data-aos="fade-up" data-aos-delay="" class="">
            <Swiper
              :space-between="30"
              class="w-100 overflow-visible"
              :navigation="{
                prevEl: '.js-slider1-prev',
                nextEl: '.js-slider1-next',
              }"
              :modules="[Navigation, Pagination]"
              :breakpoints="{
                500: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
              }"
            >
              <SwiperSlide v-for="(elm, i) in tourData" :key="i">
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
                          <i
                            class="icon-pin d-flex text-16 text-white mr-5"
                          ></i>
                          {{ elm.location }}
                        </div>

                        <h3
                          class="tourCard__title text-18 text-white fw-500 mt-5"
                        >
                          <span>{{ elm.title }}</span>
                        </h3>

                        <div
                          class="tourCard__rating d-flex items-center text-13 mt-5"
                        >
                          <div class="d-flex items-center x-gap-5">
                            <Stars :font="12" :star="elm.rating" />
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
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div class="navRegular mt-40 md:mt-30">
          <button class="navRegular__button bg-white js-slider1-prev">
            <i class="icon-arrow-left text-20"></i>
          </button>

          <button class="navRegular__button bg-white js-slider1-next">
            <i class="icon-arrow-right text-20"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

import Stars from "@/components/common/Stars";
import { tourData } from "@/data/tours";
</script>
