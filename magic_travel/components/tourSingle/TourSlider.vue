<template>
  <section class="layout-pt-xl layout-pb-xl">
    <div class="container">
      <div class="row">
        <div class="col-auto" data-aos="fade-up" data-aos-delay="">
          <h2 class="text-30">Sản phẩm liên quan</h2>
        </div>
        <div class="relative pt-40 sm:pt-20" data-aos="fade-up" data-aos-delay="">
        <div class="overflow-hidden pb-5 js-section-slider">
          <div class="swiper-wrapper">
            <Swiper space-between="30" class="w-100" :pagination="{ el: '.pbutton1', clickable: true }" :navigation="{
              prevEl: '.js-slider10-prev',
              nextEl: '.js-slider10-next',
            }" :modules="[Navigation, Pagination]" :breakpoints="{
                500: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
              }">
              <SwiperSlide v-for="(elm, i) in comboData" :key="i">
                <nuxt-link :to="`/tour-single-1/${elm.id}`"
                  class="tourCard -type-1 py-10 px-10 border-1 rounded-12 -hover-shadow">
                  <div class="tourCard__header">
                    <div class="tourCard__image ratio ratio-28:20">
                      <nuxt-img :src="elm.imageSrc" alt="image" class="img-ratio rounded-12" width="421" height="301" />
                    </div>
                    <!-- <button class="tourCard__favorite">
                <i class="icon-heart"></i>
              </button> -->
                    <div v-if="elm.combo" class="tourCard__combo">
                      Combo
                    </div>
                  </div>

                  <div class="tourCard__content px-10 pt-10">
                    <div class="tourCard__location d-flex items-center text-13 text-light-2">
                      <i class="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                      {{ elm.location }}
                    </div>

                    <h3 class="tourCard__title text-16 fw-500 mt-5">
                      <span>{{ elm.title }}</span>
                    </h3>

                    <div class="tourCard__rating d-flex text-13 mt-5 flex-column">
                      <p>Khởi hành: {{ elm.start_location }}</p>
                      <p>Phương tiện: {{ elm.vehicle }}</p>
                      <div class="d-flex">
                        <p class="d-flex items-center"> <i class="icon-clock text-16 mr-5"></i>
                          {{ elm.duration }} </p>
                        <p class="d-flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-people ml-20 mr-5" viewBox="0 0 16 16">
                            <path
                              d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                          </svg>
                          {{ elm.max_persons }} người
                        </p>

                      </div>
                    </div>

                    <div class="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">

                      <p>
                        Giá từ: <span class="text-20 fw-500 __price">{{
                          elm.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') }} đ</span>
                      </p>
                    </div>
                  </div>
                </nuxt-link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div class="navAbsolute">
          <button class="navAbsolute__button bg-white js-slider10-prev">
            <i class="icon-arrow-left text-14"></i>
          </button>

          <button class="navAbsolute__button bg-white js-slider10-next">
            <i class="icon-arrow-right text-14"></i>
          </button>
        </div>
      </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { comboData } from "@/data/tours";
</script>
