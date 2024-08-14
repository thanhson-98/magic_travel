<template>
  <div class="relative">
    <div class="container">
      <div class="row justify-center">
        <div class="col-lg-8">
          <div class="js-section-slider">
            <div class="swiper-wrapper" :style="{ height: '438px' }">
              <Swiper
                :space-between="10"
                class="w-100 overflow-visible"
                :style="{ maxWidth: '100%' }"
                :loop="true"
                :navigation="{
                  prevEl: '.js-slider1-prev7',
                  nextEl: '.js-slider1-next7',
                }"
                :modules="[Navigation, Pagination]"
                :slides-per-view="1"
                :initialSlide="1"
              >
                <SwiperSlide v-for="(image, index) in images" :key="index">
                  <div class="swiper-slide">
                    <nuxt-img
                      width="{850}"
                      height="{510}"
                      :src="image"
                      alt="image"
                      class="img-cover rounded-12"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div class="navAbsolute -type-2">
              <button
                class="navAbsolute__button bg-white js-sliderMain-prev js-slider1-prev7"
              >
                <i class="icon-arrow-left text-14"></i>
              </button>

              <button
                class="navAbsolute__button bg-white js-sliderMain-next js-slider1-next7"
              >
                <i class="icon-arrow-right text-14"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

const images = [
  "/img/tourSingle/2/1.png",
  "/img/tourSingle/2/2.png",
  "/img/tourSingle/2/3.png",
];
</script>
