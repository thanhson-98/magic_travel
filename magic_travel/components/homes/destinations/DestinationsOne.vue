<template>
  <section class="layout-pt-xl">
    <div class="container">
      <div class="row y-gap-10 justify-between items-end">
        <div class="col-auto">
          <h2 data-aos="fade-up" class="text-30 md:text-24">
            Trending destinations
          </h2>
        </div>

        <div data-aos="fade-up" class="col-auto">
          <nuxt-link to="/tour-list-1" class="buttonArrow d-flex items-center">
            <span>See all</span>
            <i class="icon-arrow-top-right text-16 ml-10"></i>
          </nuxt-link>
        </div>
      </div>

      <div
        data-aos="fade-up"
        class="overflow-hidden pt-40 sm:pt-20 js-section-slider"
      >
        <ClientOnly>
          <div class="swiper-wrapper">
            <Swiper
              :space-between="30"
              class="w-100"
              :slides-per-view="4"
              :pagination="{
                el: '.pbutton1',
                clickable: true,
              }"
              :modules="[Navigation, Pagination]"
              :breakpoints="{
                500: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 6,
                },
                1200: {
                  slidesPerView: 8,
                },
              }"
            >
              <SwiperSlide v-for="(elm, i) in destinations" :key="i">
                <nuxt-link
                  to="#"
                  class="featureImage -type-1 text-center -hover-image-scale"
                >
                  <div
                    class="featureImage__image mx-auto rounded-full -hover-image-scale__image"
                  >
                    <nuxt-img
                      width="{260}"
                      height="{260}"
                      :src="elm.imageSrc"
                      alt="image"
                      class="size-130 object-cover rounded-full"
                    />
                  </div>

                  <h3 class="featureImage__title text-16 fw-500 mt-20">
                    {{ elm.name }}
                  </h3>
                  <p class="featureImage__text text-14">
                    {{ elm.tourCount }}+ Tours
                  </p>
                </nuxt-link>
              </SwiperSlide>
            </Swiper>
          </div></ClientOnly
        >

        <div
          class="pagination -type-1 justify-center pt-60 md:pt-40 js-dest-pagination swiperPagination1"
        >
          <div class="pagination__button pbutton1"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

import { destinations } from "@/data/destinations";
</script>
