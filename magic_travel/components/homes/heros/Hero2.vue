<template>
  <section class="hero -type-2">
    <div class="hero__shape">
      <svg
        width="1920"
        height="573"
        view-box="0 0 1920 573"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.05"
          d="M0 0H1920V515.556C1920 515.556 1665 386.305 960 515.556C255 644.806 0 515.556 0 515.556V0Z"
          fill="#EB662B"
        />
      </svg>
    </div>

    <div class="container">
      <div ref="dropDownContainer" class="hero__filter">
        <div class="searchForm -type-1 shadow-1">
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

            <div
              class="searchFormItem js-select-control js-form-dd js-calendar"
            >
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

          <div class="searchForm__button">
            <button class="button -dark-1 bg-accent-1 text-white">
              <i class="icon-search text-16 mr-10"></i>
              Search
            </button>
          </div>
        </div>
      </div>

      <div class="hero__slider">
        <div class="hero__bg bg-accent-1">
          <nuxt-img
            width="973"
            height="500"
            src="/img/hero/2/bg.png"
            alt="image"
          />
        </div>

        <div class="overflow-hidden js-section-slider">
          <div class="hero__slides swiper-wrapper">
            <Swiper
              :space-between="30"
              class="w-100"
              :navigation="{
                prevEl: '.hero2prev',
                nextEl: '.hero2next',
              }"
              :modules="[Navigation]"
              :break-points="{
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
                <div class="hero__slide swiper-slide">
                  <div class="hero__content">
                    <h1
                      class="hero__title"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      Grab up to
                      <span class="hero__title_shape text-accent-1">
                        35% off
                        <span>
                          <nuxt-img
                            width="231"
                            height="56"
                            src="/img/hero/2/brush.svg"
                            alt="brush stroke"
                          />
                        </span>
                      </span>
                      <br />
                      on your favorite
                      <br />
                      Destination
                    </h1>

                    <p
                      class="hero__text"
                      data-aos="fade-up"
                      data-aos-delay="350"
                    >
                      Limited time offer, don't miss the opportunity
                    </p>

                    <button
                      data-aos="fade-right"
                      data-aos-delay="200"
                      class="button -md -dark-1 bg-white text-accent-1 mt-30"
                    >
                      <nuxt-link to="/tour-list-1">
                        <span>Book Now</span>
                        <i class="icon-arrow-top-right ml-10"></i>
                      </nuxt-link>
                    </button>
                  </div>

                  <div class="hero__image">
                    <div class="hero__image_shape">
                      <nuxt-img
                        width="40"
                        height="500"
                        src="/img/hero/2/shape.svg"
                        alt="image"
                      />
                    </div>

                    <div class="hero__image_mobileShape">
                      <nuxt-img
                        width="847"
                        height="40"
                        src="/img/hero/2/shape2.svg"
                        alt="image"
                      />
                    </div>

                    <nuxt-img
                      :width="630"
                      :height="500"
                      src="/img/hero/2/1.png"
                      alt="image"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div class="navAbsolute">
          <button
            class="navAbsolute__button bg-white js-sliderMain-prev hero2prev"
          >
            <i class="icon-arrow-left text-14"></i>
          </button>

          <button
            class="navAbsolute__button bg-white js-sliderMain-next hero2next"
          >
            <i class="icon-arrow-right text-14"></i>
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
    title: "Grab up to 35% off on your favorite Destination",
    text: "Limited time offer, don't miss the opportunity",
    buttonText: "Book Now",
    imageSrc: "/img/hero/2/1.png",
  },
  {
    id: 2,
    title: "Explore Exotic Beaches and Resorts",
    text: "Discover paradise on Earth with our exclusive beach destinations.",
    buttonText: "Explore Now",
    imageSrc: "/img/hero/2/2.png",
  },
  {
    id: 3,
    title: "Adventure Awaits in the Mountains",
    text: "Embark on thrilling mountain adventures with unbeatable discounts.",
    buttonText: "Book Your Adventure",
    imageSrc: "/img/hero/2/3.png",
  },
  {
    id: 4,
    title: "Cruise into the Sunset",
    text: "Sail away on a memorable cruise experience with huge discounts.",
    buttonText: "Book Your Cruise",
    imageSrc: "/img/hero/2/4.png",
  },
  {
    id: 5,
    title: "Discover Historic Cities",
    text: "Experience the charm of historic cities with our special offers.",
    buttonText: "Explore History",
    imageSrc: "/img/hero/2/5.png",
  },
  // Add more slide objects as needed
];
</script>
