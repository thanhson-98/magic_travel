<template>
  <section class="relative layout-pt-xl layout-pb-xl">
    <div class="sectionBg md:d-none">
      <nuxt-img
        width="1920"
        height="871"
        src="/img/testimonials/1/1.png"
        alt="image"
      />
    </div>

    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <h2 data-aos="fade-up" data-aos-delay="" class="text-30 md:text-24">
            Customer Reviews
          </h2>
        </div>
      </div>

      <div class="row justify-center pt-60 md:pt-20">
        <div class="col-xl-6 col-md-8 col-sm-10">
          <div class="overflow-hidden js-section-slider">
            <div data-aos="fade-up" data-aos-delay="" class="swiper-wrapper">
              <Swiper
                :space-between="30"
                class="w-100"
                loop
                :pagination="{ el: '.pbutton2', clickable: true }"
                :modules="[Pagination]"
                :breakpoints="{
                  500: { slidesPerView: 1 },
                  768: { slidesPerView: 1 },
                  1024: { slidesPerView: 1 },
                  1200: { slidesPerView: 1 },
                }"
              >
                <SwiperSlide v-for="(elm, i) in testimonialsOne" :key="i">
                  <div class="testimonials -type-1 pt-10 text-center">
                    <div class="testimonials__image size-100 rounded-full">
                      <nuxt-img
                        width="98"
                        height="98"
                        :src="elm.imageSrc"
                        alt="image"
                      />

                      <div class="testimonials__icon">
                        <svg
                          width="16"
                          height="13"
                          viewBox="0 0 16 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3165 0.838867C12.1013 1.81846 10.9367 3.43478 9.77215 5.63887C8.65823 7.84295 8 10.2429 7.8481 12.8389H12.4557C12.4051 8.87152 13.6203 5.24703 16 1.91642L13.3165 0.838867ZM5.51899 0.838867C4.25316 1.81846 3.08861 3.43478 1.92405 5.63887C0.810126 7.84295 0.151899 10.2429 0 12.8389H4.60759C4.55696 8.87152 5.77215 5.19805 8.20253 1.91642L5.51899 0.838867Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>

                    <div class="text-18 fw-500 text-accent-1 mt-60 md:mt-40">
                      {{ elm.title }}
                    </div>

                    <div class="text-20 fw-500 mt-20">
                      {{ elm.content }}
                    </div>

                    <div class="mt-20 md:mt-40">
                      <div class="lh-16 text-16 fw-500">
                        {{ elm.authorName }}
                      </div>
                      <div class="lh-16">{{ elm.authorRole }}</div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div
              class="pagination -type-1 justify-center pt-60 md:pt-40 js-testimonials-pagination swiperPagination1"
            >
              <div class="pagination__button pbutton2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

import { testimonialsOne } from "@/data/testimonials";
</script>
