<template>
  <section class="hero -type-9">
    <div
      class="hero__slider js-section-slider"
      data-gap="0"
      data-slider-cols="xl-1 lg-1 md-1 sm-1 base-1"
      data-pagination="js-main-slider-pagination"
    >
      <div class="swiper-wrapper">
        <div class="swiper-wrapper">
          <Swiper
            class="w-100"
            @modules="[Navigation]"
            @swiper="
              (swiper) => {
                swiperRef = swiper;
              }
            "
            @slideChange="handleSlideChange"
            :breakpoints="{
              500: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 1,
              },
            }"
          >
            <SwiperSlide v-for="(elm, i) in slidesData" :key="i">
              <div class="hero__bg">
                <nuxt-img
                  width="1860"
                  height="900"
                  :src="elm.imageSrc"
                  alt="background"
                />
              </div>

              <div class="container">
                <div class="hero__content">
                  <div class="row items-center justify-between">
                    <div class="col-xl-7 col-lg-8">
                      <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        class="hero__subtitle text-18 fw-500 text-white mb-10"
                      >
                        {{ elm.subtitle }}
                      </div>

                      <h1
                        data-aos="fade-up"
                        data-aos-delay="150"
                        class="hero__title text-white"
                      >
                        {{ elm.title.split(" ").slice(0, 2).join(" ") }}
                        <br class="lg:d-none" />
                        {{ elm.title.split(" ").slice(2).join(" ") }}
                      </h1>

                      <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        class="hero__text text-white mt-10"
                      >
                        {{ elm.text.split(" ").slice(0, 10).join(" ") }}
                        <br class="lg:d-none" />
                        {{ elm.text.split(" ").slice(10).join(" ") }}
                      </div>

                      <nuxt-link to="/tour-list-1" class="hero__button mt-30">
                        <button class="button -md -outline-white text-white">
                          View Tour
                          <i class="icon-arrow-top-right ml-10"></i>
                        </button>
                      </nuxt-link>
                    </div>

                    <div class="col-lg-4">
                      <div class="hero__image">
                        <nuxt-img
                          width="437"
                          height="177"
                          :src="elm.imageSvgSrc"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div class="container -pagination">
        <div
          class="hero__pagination js-main-slider-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
        >
          <div>
            <span
              v-for="(elm, i) in slidesData"
              :key="i"
              style="cursor: pointer"
              @click="handlePaginationClick(i)"
              :class="{
                pagination__item: true,
                'is-active': currentSlideIndex === i,
              }"
            >
              {{ elm.id }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
const swiperRef = ref(null);
const currentSlideIndex = ref(0);

const handlePaginationClick = (index) => {
  currentSlideIndex.value = index;
  swiperRef.value.slideTo(index);
};

const handleSlideChange = (swiper) => {
  currentSlideIndex.value = swiper.activeIndex;

  if (swiper.activeIndex >= 5) {
    currentSlideIndex.value = swiper.activeIndex - 5;
  }
};

onMounted(() => {
  if (swiperRef.value) {
    swiperRef.value.slideTo(0);
  }
});

const slidesData = [
  // Define an array of data for each slide
  {
    id: "01",
    imageSrc: "/img/hero/9/1.jpg",
    title: "Iceland's legendary Golden Circle",
    subtitle: "Starting at $978",
    text: "Enjoy a full-day bus tour of Iceland's legendary Golden Circle. Soak in the warm thermal waters of the Secret Lagoon.",

    imageSvgSrc: "/img/hero/9/image.svg",
  },
  {
    id: "02",
    imageSrc: "/img/hero/9/1.jpg",
    title: "Iceland's legendary Golden Circle",
    subtitle: "Starting at $978",
    text: "Enjoy a full-day bus tour of Iceland's legendary Golden Circle. Soak in the warm thermal waters of the Secret Lagoon.",

    imageSvgSrc: "/img/hero/9/image.svg",
  },
  {
    id: "03",
    imageSrc: "/img/hero/9/1.jpg",
    title: "Iceland's legendary Golden Circle",
    subtitle: "Starting at $978",
    text: "Enjoy a full-day bus tour of Iceland's legendary Golden Circle. Soak in the warm thermal waters of the Secret Lagoon.",

    imageSvgSrc: "/img/hero/9/image.svg",
  },
  {
    id: "04",
    imageSrc: "/img/hero/9/1.jpg",
    title: "Iceland's legendary Golden Circle",
    subtitle: "Starting at $978",
    text: "Enjoy a full-day bus tour of Iceland's legendary Golden Circle. Soak in the warm thermal waters of the Secret Lagoon.",

    imageSvgSrc: "/img/hero/9/image.svg",
  },
  {
    id: "05",
    imageSrc: "/img/hero/9/1.jpg",
    title: "Iceland's legendary Golden Circle",
    subtitle: "Starting at $978",
    text: "Enjoy a full-day bus tour of Iceland's legendary Golden Circle. Soak in the warm thermal waters of the Secret Lagoon.",

    imageSvgSrc: "/img/hero/9/image.svg",
  },
  // Add more data for additional slides as needed
];
</script>
