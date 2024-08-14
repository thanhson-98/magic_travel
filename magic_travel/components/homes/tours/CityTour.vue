<template>
  <section class="layout-pt-xl">
    <div class="container">
      <div class="row y-gap-10 justify-between items-center y-gap-10">
        <div class="col-auto">
          <h2 data-aos="fade-up" data-aos-delay="" class="text-30 md:text-24">
            City Tours
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

      <div class="relative pt-40 sm:pt-20">
        <div
          data-aos="fade-up"
          data-aos-delay=""
          class="overflow-hidden js-section-slider"
        >
          <div class="swiper-wrapper">
            <Swiper
              :space-between="30"
              class="w-100"
              :navigation="{ prevEl: '.pbp2', nextEl: '.pbn2' }"
              :modules="[Navigation]"
              :breakpoints="{
                500: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }"
            >
              <SwiperSlide v-for="(elm, i) in tourData" :key="i">
                <nuxt-link
                  :to="`/tour-single-1/${elm.id}`"
                  class="tourCard -type-1 d-block bg-white"
                >
                  <div class="tourCard__header">
                    <div class="tourCard__image ratio ratio-28:20">
                      <nuxt-img
                        :width="421"
                        :height="301"
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
                        From
                        <span class="text-16 fw-500">${{ elm.price }}</span>
                      </div>
                    </div>
                  </div>
                </nuxt-link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div class="navAbsolute">
          <button class="navAbsolute__button bg-white js-slider1-prev pbp2">
            <i class="icon-arrow-left text-14"></i>
          </button>

          <button class="navAbsolute__button bg-white js-slider1-next pbn2">
            <i class="icon-arrow-right text-14"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import Stars from "@/components/common/Stars";
import { tourData } from "@/data/tours";

const tourDataRef = ref(tourData);
</script>
