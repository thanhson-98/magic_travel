<template>
  <section class="layout-pt-lg layout-pb-xl">
    <div class="container">
      <div
        class="row custom-dd-container justify-between items-center relative z-5"
      >
        <div class="col-auto">
          <div
            ref="dropDownContainer2"
            class="row custom-dd-container2 custom-dd-container x-gap-10 y-gap-10 items-center"
          >
            <div class="col-auto">
              <div
                :class="`dropdown -base -price js-dropdown js-form-dd ${
                  curentDD === 'priceFilter1' ? 'is-active' : ''
                }`"
              >
                <div
                  @click="
                    () => {
                      curentDD =
                        curentDD === 'priceFilter1' ? '' : 'priceFilter1';
                    }
                  "
                  class="dropdown__button h-50 min-w-auto js-button"
                >
                  <span class="js-title">Price</span>
                  <i class="icon-chevron-down ml-10"></i>
                </div>

                <div class="dropdown__menu px-30 py-30 shadow-1 border-1 js-">
                  <h5 class="text-18 fw-500">Filter Price</h5>
                  <div class="pt-20">
                    <RangeSlider />
                  </div>
                  <button
                    class="button px-25 py-15 lh-12 -accent-1 text-accent-1 bg-accent-1-05 border-accent-1 mt-30"
                  >
                    Apply
                    <i class="icon-arrow-top-right text-16 ml-10"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="col-auto">
              <div
                :class="`dropdown -base -price js-dropdown js-form-dd ${
                  curentDD === 'durationFilter1' ? 'is-active' : ''
                }`"
              >
                <div
                  @click="
                    () => {
                      curentDD =
                        curentDD === 'durationFilter1' ? '' : 'durationFilter1';
                    }
                  "
                  class="dropdown__button h-50 min-w-auto js-button"
                >
                  <span class="js-title">Duration</span>
                  <i class="icon-chevron-down ml-10"></i>
                </div>

                <div class="dropdown__menu px-30 py-30 shadow-1 border-1 js-">
                  <h5 class="text-18 fw-500">Duration</h5>
                  <div class="pt-20">
                    <div class="d-flex flex-column y-gap-15">
                      <div
                        v-for="(elm, i) in durations"
                        :key="i"
                        class="d-flex items-center"
                      >
                        <div class="form-checkbox">
                          <input type="checkbox" name="name" />
                          <div class="form-checkbox__mark">
                            <div class="form-checkbox__icon">
                              <nuxt-img
                                width="10"
                                height="8"
                                src="/img/icons/check.svg"
                                alt="icon"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="lh-11 ml-10">{{ elm }}</div>
                      </div>
                    </div>
                  </div>

                  <button
                    class="button px-25 py-15 lh-12 -accent-1 text-accent-1 bg-accent-1-05 border-accent-1 mt-20"
                  >
                    Apply
                    <i class="icon-arrow-top-right text-16 ml-10"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="col-auto">
              <div
                :class="`dropdown -base -price js-dropdown js-form-dd ${
                  curentDD === 'languageFilter1' ? 'is-active' : ''
                }`"
              >
                <div
                  @click="
                    () => {
                      curentDD =
                        curentDD === 'languageFilter1' ? '' : 'languageFilter1';
                    }
                  "
                  class="dropdown__button h-50 min-w-auto js-button"
                >
                  <span class="js-title">Languages</span>
                  <i class="icon-chevron-down ml-10"></i>
                </div>

                <div class="dropdown__menu px-30 py-30 shadow-1 border-1 js-">
                  <h5 class="text-18 fw-500">Language</h5>
                  <div class="pt-20">
                    <div class="d-flex flex-column y-gap-15">
                      <div
                        v-for="(elm, i) in languages"
                        :key="i"
                        class="d-flex items-center"
                      >
                        <div class="form-checkbox">
                          <input type="checkbox" name="name" />
                          <div class="form-checkbox__mark">
                            <div class="form-checkbox__icon">
                              <nuxt-img
                                width="10"
                                height="8"
                                src="/img/icons/check.svg"
                                alt="icon"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="lh-11 ml-10">{{ elm }}</div>
                      </div>
                    </div>
                  </div>

                  <button
                    class="button px-25 py-15 lh-12 -accent-1 text-accent-1 bg-accent-1-05 border-accent-1 mt-20"
                  >
                    Apply
                    <i class="icon-arrow-top-right text-16 ml-10"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="col-auto">
              <div
                :class="`dropdown -base -price js-dropdown js-form-dd ${
                  curentDD === 'ratingFilter1' ? 'is-active' : ''
                }`"
              >
                <div
                  @click="
                    () => {
                      curentDD =
                        curentDD === 'ratingFilter1' ? '' : 'ratingFilter1';
                    }
                  "
                  class="dropdown__button h-50 min-w-auto js-button"
                >
                  <span class="js-title">Rating</span>
                  <i class="icon-chevron-down ml-10"></i>
                </div>

                <div class="dropdown__menu px-30 py-30 shadow-1 border-1 js-">
                  <h5 class="text-18 fw-500">Rating</h5>
                  <div class="pt-20">
                    <div class="d-flex flex-column y-gap-15">
                      <div v-for="(elm, i) in rating" :key="i" class="d-flex">
                        <div class="form-checkbox">
                          <input type="checkbox" name="rating" />
                          <div class="form-checkbox__mark">
                            <div class="form-checkbox__icon">
                              <nuxt-img
                                width="10"
                                height="8"
                                src="/img/icons/check.svg"
                                alt="icon"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="d-flex x-gap-5 ml-10">
                          <Stars :star="elm" :font="13" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    class="button px-25 py-15 lh-12 -accent-1 text-accent-1 bg-accent-1-05 border-accent-1 mt-20"
                  >
                    Apply
                    <i class="icon-arrow-top-right text-16 ml-10"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="col-auto">
              <div
                :class="`dropdown -base -price js-dropdown js-form-dd ${
                  curentDD === 'featuresFilter1' ? 'is-active' : ''
                }`"
              >
                <div
                  @click="
                    () => {
                      curentDD =
                        curentDD === 'featuresFilter1' ? '' : 'featuresFilter1';
                    }
                  "
                  class="dropdown__button h-50 min-w-auto js-button"
                >
                  <span class="js-title">Specials</span>
                  <i class="icon-chevron-down ml-10"></i>
                </div>

                <div class="dropdown__menu px-30 py-30 shadow-1 border-1 js-">
                  <h5 class="text-18 fw-500">Specials</h5>
                  <div class="pt-20">
                    <div class="d-flex flex-column y-gap-15">
                      <div
                        v-for="(elm, i) in features"
                        :key="i"
                        class="d-flex items-center"
                      >
                        <div class="form-checkbox">
                          <input type="checkbox" name="name" />
                          <div class="form-checkbox__mark">
                            <div class="form-checkbox__icon">
                              <nuxt-img
                                width="10"
                                height="8"
                                src="/img/icons/check.svg"
                                alt="icon"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="lh-11 ml-10">{{ elm }}</div>
                      </div>
                    </div>
                  </div>

                  <button
                    class="button px-25 py-15 lh-12 -accent-1 text-accent-1 bg-accent-1-05 border-accent-1 mt-20"
                  >
                    Apply
                    <i class="icon-arrow-top-right text-16 ml-10"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref="dropDownContainer" class="col-auto">
          <div
            :class="`dropdown -type-2 js-dropdown js-form-dd ${
              ddActives ? 'is-active' : ''
            }`"
          >
            <div
              @click="() => (ddActives = !ddActives)"
              class="dropdown__button js-button"
            >
              <span>Sort by: </span>
              <span class="js-title">{{
                sortOption ? sortOption : "Featured"
              }}</span>
              <i class="icon-chevron-down"></i>
            </div>

            <div class="dropdown__menu js-menu-items">
              <div
                v-for="(elm, i) in speedFeatures"
                :key="i"
                @click="() => handleSort(elm)"
                class="dropdown__item"
                data-value="fast"
              >
                {{ elm }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row y-gap-30 pt-30">
        <div
          v-for="(elm, i) in tourDataThree"
          :key="i"
          class="col-lg-3 col-sm-6"
        >
          <nuxt-link
            :to="`/tour-single-1/${elm.id}`"
            class="tourCard -type-1 py-10 px-10 border-1 rounded-12 -hover-shadow"
          >
            <div class="tourCard__header">
              <div class="tourCard__image ratio ratio-28:20">
                <nuxt-img
                  width="421"
                  height="301"
                  :src="elm.imageSrc"
                  alt="image"
                  class="img-ratio rounded-12"
                />
              </div>
              <button class="tourCard__favorite">
                <i class="icon-heart"></i>
              </button>
            </div>

            <div class="tourCard__content px-10 pt-10">
              <div
                class="tourCard__location d-flex items-center text-13 text-light-2"
              >
                <i class="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                {{ elm.location }}
              </div>

              <h3 class="tourCard__title text-16 fw-500 mt-5">
                <span>{{ elm.title }}</span>
              </h3>

              <div class="tourCard__rating d-flex items-center text-13 mt-5">
                <div class="d-flex x-gap-5">
                  <Stars :star="elm.rating" />
                </div>

                <span class="text-dark-1 ml-10">
                  {{ elm.rating }} ({{ elm.ratingCount }})
                </span>
              </div>

              <div
                class="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10"
              >
                <div class="d-flex items-center">
                  <i class="icon-clock text-16 mr-5"></i>
                  {{ elm.duration }}
                </div>

                <div>
                  From <span class="text-16 fw-500">${{ elm.price }}</span>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>

      <div class="d-flex justify-center flex-column mt-60">
        <Pagination />
        <div class="text-14 text-center mt-20">
          Showing results 1-30 of 1,415
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { tourDataThree } from "@/data/tours";
import Stars from "../common/Stars";
import Pagination from "../common/Pagination";
import {
  durations,
  features,
  languages,
  rating,
  speedFeatures,
} from "@/data/tourFilteringOptions";
import RangeSlider from "../common/RangeSlider";

const sortOption = ref("");
const ddActives = ref(false);
const dropDownContainer = ref(null);
const dropDownContainer2 = ref(null);
const curentDD = ref("");
const handleSort = (value) => {
  sortOption.value = value;
};
const handleClick = (event) => {
  if (
    dropDownContainer.value &&
    !dropDownContainer.value.contains(event.target)
  ) {
    ddActives.value = false;
  }
  if (
    dropDownContainer2.value &&
    !dropDownContainer2.value.contains(event.target)
  ) {
    curentDD.value = "";
  }
};

onMounted(() => {
  document.addEventListener("click", handleClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClick);
});
</script>
