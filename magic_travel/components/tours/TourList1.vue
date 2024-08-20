<template>
  <section class="layout-pb-xl">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="row y-gap-5 justify-between">
            <div class="col-auto">
              <div>99 kết quả</div>
            </div>

            <div ref="dropDownContainer" class="col-auto">
              <div class="dropdown -type-2 js-dropdown js-form-dd" :class="{ 'is-active': ddActives }"
                data-main-value="">
                <div class="dropdown__button js-button" @click="() => {
                  ddActives = !ddActives;
                }
                  ">
                  <span>Sắp xếp: </span>
                  <span class="js-title">
                    {{ sortOption ? sortOption : "Thấp tới cao" }}
                  </span>
                  <i class="icon-chevron-down"></i>
                </div>

                <div class="dropdown__menu js-menu-items">
                  <div v-for="(elm, i) in sortTypes" :key="i" class="dropdown__item" @click="() => {
                    sortOption = sortOption === elm ? '' : elm;
                    ddActives = false;
                  }
                    " data-value="low">
                    {{ elm }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row y-gap-30 pt-30">
            <div v-for="(elm, i) in comboData" :key="i" class="col-12">
              <div class="tourCard -type-2">
                <div class="tourCard__image">
                  <nuxt-img :width="420" :height="390" :src="elm.imageSrc" alt="image" />

                  <div v-if="elm.badgeText" class="tourCard__badge">
                    <div class="bg-accent-1 rounded-12 text-white lh-11 text-13 px-15 py-10">
                      {{ elm.badgeText }}
                    </div>
                  </div>

                  <div v-if="elm.featured" class="tourCard__badge">
                    <div class="bg-accent-2 rounded-12 text-white lh-11 text-13 px-15 py-10">
                      FEATURED
                    </div>
                  </div>

                </div>

                <div class="tourCard__content">
                  <div class="tourCard__location">
                    <i class="icon-pin"></i>
                    {{ elm.location }}
                  </div>

                  <h3 class="tourCard__title mt-5">
                    <span>{{ elm.title }}</span>
                  </h3>

                  <p class="tourCard__text mt-5">
                  <p>Khởi hành: {{ elm.start_location }}</p>
                  <p>Phương tiện: {{ elm.vehicle }}</p>
                  </p>

                  <div class="row x-gap-20 y-gap-5 pt-30">
                    <div v-for="(elm2, i2) in elm.features" key="{i2}" class="col-auto">
                      <div class="text-14 text-accent-1">
                        <i :class="`${elm2.icon} mr-10`"></i>
                        {{ elm2.name }}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tourCard__info">
                  <div>
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

                    <div class="tourCard__price">
                      <div>{{ elm.fromPrice }}</div>

                      <div class="d-flex items-center">
                        Giá từ:{{ " " }}
                        <span class="text-20 fw-500 ml-5 __price">
                          {{ elm.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') }} đ
                        </span>
                      </div>
                    </div>
                  </div>

                  <button class="button -outline-accent-1 text-accent-1">
                    <nuxt-link :to="`/tour-single-1/${elm.id}`">
                      Xem chi tiết
                      <i class="icon-arrow-top-right ml-10"></i>
                    </nuxt-link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex justify-center flex-column mt-60">
            <PagePagination />

            <div class="text-14 text-center mt-20">
              Hiển thị kết quả 1-15 trên tổng 99
            </div>
          </div>
        </div>

      </div>
      <div class="row mt-30" data-aos="fade-up" data-aos-delay="">
        <h2 class="text-30">Bài viết liên quan</h2>
        <div class="pt-40 sm:pt-20">
        <div class="overflow-hidden pb-5 js-section-slider">
          <div class="swiper-wrapper">
            <Swiper space-between="30" class="w-100" :pagination="{ el: '.pbutton1', clickable: true }" :navigation="{
              prevEl: '.js-slider10-prev',
              nextEl: '.js-slider10-next',
            }" :modules="[Navigation, Pagination]" :breakpoints="{
                500: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1200: { slidesPerView: 3}
              }">
              <SwiperSlide v-for="(elm, i) in blogs" :key="i">
                <nuxt-link :to="`/blog-single/${elm.id}`" class="blogCard -type-1">
            <div class="blogCard__image ratio ratio-41:30">
              <nuxt-img width="616" height="451" :src="elm.image" alt="image" class="img-ratio rounded-12" />

              <div v-if="elm.badge" class="blogCard__badge">
                {{ elm.badge }}
              </div>
            </div>

            <div class="blogCard__content mt-30">
              <div class="blogCard__info text-14">
                <div class="lh-13">{{ elm.date }}</div>
                <div class="blogCard__line"></div>
                <div class="lh-13">By {{ elm.author }}</div>
              </div>

              <h3 class="blogCard__title text-18 fw-500 mt-10">
                {{ elm.title }}
              </h3>
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

import PagePagination from "~/components/common/Pagination.vue"; // Adjust the path based on your project structure
import { ref, onMounted, onBeforeUnmount } from "vue";
import { sortTypes } from "@/data/tourFilteringOptions";
import { comboData } from "@/data/tours";
import { blogs } from "@/data/blogs";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";


const sortOption = ref("");
const ddActives = ref(false);

const dropDownContainer = ref(null);

const handleClick = (event) => {
  if (
    dropDownContainer.value &&
    !dropDownContainer.value.contains(event.target)
  ) {
    ddActives.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClick);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClick);
});
</script>
