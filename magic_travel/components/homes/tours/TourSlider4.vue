<template>
  <section class="layout-pt-xl layout-pb-xl bg-accent-1-05">
    <div class="container">
      <div class="tabs -pills-4 js-tabs">
        <div class="row y-gap-10 justify-between items-end y-gap-10">
          <div class="col-auto">
            <h2 data-aos="fade-up" data-aos-delay="" class="text-30">
              Featured Trips
            </h2>
          </div>

          <div data-aos="fade-right" data-aos-delay="" class="col-auto">
            <div class="tabs__controls row x-gap-10 y-gap-10 js-tabs-controls">
              <div
                v-for="(elm, index) in travelStyles"
                :key="index"
                @click="setTravelStyle(elm)"
                class="col-auto"
              >
                <button
                  :class="[
                    'tabs__button',
                    'text-14',
                    'px-15',
                    'py-5',
                    'fw-500',
                    'rounded-200',
                    'js-tabs-button',
                    travelStyle === elm ? 'is-tab-el-active' : '',
                  ]"
                  data-tab-target=".-tab-item-1"
                >
                  {{ elm }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="tabs__content pt-40 sm:pt-20 js-tabs-content">
          <div class="tabs__pane -tab-item-1 is-tab-el-active">
            <div class="js-section-slider">
              <div
                data-aos="fade-up"
                data-aos-delay=""
                class="swiper-wrapper overflow-visible"
              >
                <Swiper
                  :space-between="30"
                  class="w-100"
                  :navigation="{
                    prevEl: '.js-slider1-prev2',
                    nextEl: '.js-slider1-next2',
                  }"
                  :breakpoints="{
                    500: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 },
                  }"
                  ref="swiper"
                  :modules="[Navigation]"
                >
                  <SwiperSlide
                    v-for="(elm, index) in filteredTours"
                    :key="index"
                  >
                    <nuxt-link
                      :to="'/tour-single-1/' + elm.id"
                      class="tourCard -type-1 -rounded bg-white hover-shadow-1 overflow-hidden rounded-20 bg-white -hover-shadow"
                    >
                      <div class="tourCard__header">
                        <div class="tourCard__image ratio ratio-28:20">
                          <nuxt-img
                            :width="421"
                            :height="301"
                            :src="elm.imageSrc"
                            alt="image"
                            class="img-ratio"
                          />

                          <div class="tourCard__shape"></div>
                        </div>

                        <button class="tourCard__favorite">
                          <i class="icon-heart"></i>
                        </button>
                      </div>

                      <div class="tourCard__content px-20 py-10">
                        <div
                          class="tourCard__location d-flex items-center text-13 text-light-2"
                        >
                          <i
                            class="icon-pin d-flex text-16 text-light-2 mr-5"
                          ></i>
                          {{ elm.location }}
                        </div>

                        <h3 class="tourCard__title text-16 fw-500 mt-5">
                          <span>{{ elm.title }}</span>
                        </h3>

                        <div class="tourCard__rating text-13 mt-5">
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
                            From{{ " " }}
                            <span class="text-16 fw-500">
                              ${{ elm.price }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </nuxt-link>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div class="d-flex mt-40">
              <button
                class="button -dark-1 rounded-full size-72 flex-center bg-white js-slider1-prev2"
              >
                <i class="icon-arrow-left text-20"></i>
              </button>

              <button
                class="button -dark-1 rounded-full size-72 flex-center bg-white ml-10 js-slider1-next2"
              >
                <i class="icon-arrow-right text-20"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { filterTour } from "~/data/tours";
import Stars from "~/components/common/Stars.vue";
import { Navigation } from "swiper/modules";

const ddActive = ref(false);
const travelStyle = ref("");
const filteredTours = ref(filterTour);

const travelStyles = ["Advanture", "Nature", "Food"];

const dropDownContainer = ref(null);

const handleDropDownClick = (event) => {
  if (
    dropDownContainer.value &&
    !dropDownContainer.value.contains(event.target)
  ) {
    ddActive.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleDropDownClick);

  return () => {
    document.removeEventListener("click", handleDropDownClick);
  };
});

watch(travelStyle, (newVal) => {
  filteredTours.value = newVal
    ? filterTour.filter((elm) => elm.feature === newVal)
    : filterTour;
});

const toggleDropDown = () => {
  ddActive.value = !ddActive.value;
};

const setTravelStyle = (style) => {
  travelStyle.value = style === travelStyle.value ? "" : style;
  ddActive.value = false;
};
</script>

<style lang="scss" scoped></style>
