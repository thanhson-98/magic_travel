<template>
  <section class="hero -type-7">
    <div class="hero__shape"></div>

    <div class="hero__slider js-section-slider">
      <div class="swiper-wrapper">
        <Swiper
          class="w-100"
          :modules="[Navigation]"
          :navigation="{
            prevEl: '.js-sliderHero-prev',
            nextEl: '.js-sliderHero-next',
          }"
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
          <SwiperSlide v-for="(elm, i) in slides" :key="i">
            <div class="hero__bg">
              <nuxt-img
                width="1920"
                height="960"
                :src="elm.imageSrc"
                alt="background"
              />
            </div>

            <div class="container">
              <div class="row justify-center">
                <div class="col-lg-8 col-md-10">
                  <div class="hero__content text-center">
                    <div
                      data-aos="fade-up"
                      data-aos-delay="100"
                      class="hero__subtitle text-white mb-20 md:mb-10"
                    >
                      {{ elm.subtitle }}
                    </div>

                    <h1
                      data-aos="fade-up"
                      data-aos-delay="300"
                      class="hero__title text-white"
                    >
                      {{ elm.title.split(",")[0] }},
                      <br class="md:d-none" />
                      {{ elm.title.split(",")[1] }}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="hero__nav d-flex mt-40">
        <button
          class="button -outline-white rounded-full size-72 flex-center text-white js-sliderHero-prev"
        >
          <i class="icon-arrow-left text-20"></i>
        </button>

        <button
          class="button -outline-white rounded-full size-72 flex-center text-white ml-10 js-sliderHero-next"
        >
          <i class="icon-arrow-right text-20"></i>
        </button>
      </div>
    </div>

    <div class="hero__filter">
      <div
        ref="dropDownContainer"
        class="searchForm -type-1 shadow-1 rounded-200"
      >
        <div class="searchForm__form">
          <div class="searchFormItem js-select-control js-form-dd">
            <div
              class="searchFormItem__button"
              @click="toggleDropdown('location')"
            >
              <div
                class="searchFormItem__icon size-50 rounded-12 border-1 flex-center"
              >
                <i class="text-20 icon-pin"></i>
              </div>
              <div class="searchFormItem__content">
                <h5>Where</h5>
                <div class="js-select-control-chosen">
                  {{ location ? location : "Search destinations" }}
                </div>
              </div>
            </div>

            <Location
              @setLocation="setLocation"
              :active="currentActiveDD === 'location'"
            />
          </div>

          <div class="searchFormItem js-select-control js-form-dd js-calendar">
            <div
              class="searchFormItem__button"
              @click="toggleDropdown('calender')"
            >
              <div
                class="searchFormItem__icon size-50 rounded-12 border-1 flex-center"
              >
                <i class="text-20 icon-calendar"></i>
              </div>
              <div class="searchFormItem__content">
                <h5>When</h5>
                <div>
                  <span class="js-first-date">
                    <Calender :active="currentActiveDD === 'calender'" />
                  </span>
                  <span class="js-last-date"></span>
                </div>
              </div>
            </div>
          </div>

          <div class="searchFormItem js-select-control js-form-dd">
            <div
              class="searchFormItem__button"
              @click="toggleDropdown('tourType')"
            >
              <div
                class="searchFormItem__icon size-50 rounded-12 border-1 flex-center"
              >
                <i class="text-20 icon-flag"></i>
              </div>
              <div class="searchFormItem__content">
                <h5>Tour Type</h5>
                <div class="js-select-control-chosen">
                  {{ tourType ? tourType : "All tour" }}
                </div>
              </div>
            </div>

            <TourType
              @setTourType="setTourType"
              :active="currentActiveDD === 'tourType'"
            />
          </div>
        </div>

        <div @click="searchTour" class="searchForm__button">
          <button class="button -dark-1 bg-accent-1 rounded-200 text-white">
            <i class="icon-search text-16 mr-10"></i>
            Search
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import Location from "@/components/common/dropdownSearch/Location.vue";
import TourType from "@/components/common/dropdownSearch/TourType.vue";
import Calender from "@/components/common/dropdownSearch/Calender.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

import { useRouter } from "vue-router";
const router = useRouter();

const currentActiveDD = ref("");
const location = ref("");
const tourType = ref("");
const dropDownContainer = ref(null);

watch([location, tourType], () => {
  currentActiveDD.value = "";
});

const toggleDropdown = (dropdown) => {
  currentActiveDD.value = currentActiveDD.value === dropdown ? "" : dropdown;
};

const handleClick = (event) => {
  if (
    dropDownContainer.value &&
    !dropDownContainer.value.contains(event.target)
  ) {
    currentActiveDD.value = "";
  }
};

const setLocation = (locat) => {
  location.value = location.value == locat ? "" : locat;
};
const setTourType = (value) => {
  tourType.value = tourType.value == value ? "" : value;
};

onMounted(() => {
  document.addEventListener("click", handleClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClick);
});

const searchTour = () => {
  // Your logic for searching tour here
  router.push("/tour-list-1");
};

const slides = [
  {
    id: 1,
    imageSrc: "/img/hero/7/1.jpg",
    subtitle:
      "Search, compare and book 15,000+ multiday tours all over the world.",
    title: "Tours and Trip packages, Globally",
  },
  {
    id: 2,
    imageSrc: "/img/hero/7/1.jpg",
    subtitle:
      "Search, compare and book 15,000+ multiday tours all over the world.",
    title: "Tours and Trip packages, Globally",
  },
  {
    id: 3,
    imageSrc: "/img/hero/7/1.jpg",
    subtitle:
      "Search, compare and book 15,000+ multiday tours all over the world.",
    title: "Tours and Trip packages, Globally",
  },
  {
    id: 4,
    imageSrc: "/img/hero/7/1.jpg",
    subtitle:
      "Search, compare and book 15,000+ multiday tours all over the world.",
    title: "Tours and Trip packages, Globally",
  },
  {
    id: 5,
    imageSrc: "/img/hero/7/1.jpg",
    subtitle:
      "Search, compare and book 15,000+ multiday tours all over the world.",
    title: "Tours and Trip packages, Globally",
  },
];
</script>
