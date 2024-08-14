<template>
  <div>
    <section class="layout-pb-xl">
      <div class="container">
        <div
          class="row custom-dd-container justify-between items-center relative z-5"
        >
          <div class="col-auto">
            <div class="row custom-dd-container x-gap-10 y-gap-10 items-center">
              <div class="col-auto">
                <button
                  @click="setSidebarOpen(true)"
                  class="button -h-50 px-20 -outline-dark-1 text-dark-1"
                  data-x-click="tourPagesSidebar"
                >
                  <i class="icon-sort-down text-18 mr-10"></i>
                  All Filter
                </button>
              </div>

              <div class="col-auto">
                <div
                  class="dropdown -base -date js-calendar js-form-dd js-dropdown js-dont-close"
                  data-main-value=""
                >
                  <div class="dropdown__button h-50 min-w-auto js-button">
                    <div>
                      <span class="js-first-date">
                        <!-- Assuming Calender is a Nuxt component -->
                        <Calender />
                      </span>
                      <span class="js-last-date"></span>
                    </div>
                    <i class="icon-chevron-down ml-10"></i>
                  </div>
                </div>
              </div>

              <div ref="dropDownContainer2" class="col-auto">
                <div
                  :class="`dropdown -base -price js-dropdown js-form-dd ${
                    tourTypeActive ? 'is-active' : ''
                  }`"
                >
                  <div
                    class="dropdown__button h-50 min-w-auto js-button"
                    @click="toggleTourTypeActive"
                  >
                    <span class="js-title">Tour Type</span>
                    <i class="icon-chevron-down ml-10"></i>
                  </div>

                  <div class="dropdown__menu px-30 py-30 shadow-1 border-1 js-">
                    <h5 class="text-18 fw-500">Tour Type</h5>
                    <div class="pt-20">
                      <div class="d-flex flex-column y-gap-15">
                        <!-- Assuming toursTypes is a computed property or data property -->
                        <div
                          v-for="(elm, i) in toursTypes"
                          :key="i"
                          style="padding: 7.5px 0px"
                          class="d-flex items-center"
                        >
                          <div class="form-checkbox">
                            <input type="checkbox" name="name" />
                            <div class="form-checkbox__mark">
                              <div class="form-checkbox__icon">
                                <!-- Assuming Image is a Nuxt component -->
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

                      <a
                        href="#"
                        class="d-flex text-15 fw-500 text-accent-2 mt-15"
                      >
                        See More
                      </a>
                    </div>

                    <button
                      class="button px-25 py-15 lh-12 -accent-1 text-accent-1 bg-accent-1-05 border-accent-1 mt-10"
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
              data-main-value=""
            >
              <div class="dropdown__button js-button" @click="toggleDdActives">
                <span>Sort by: </span>
                <span class="js-title">
                  {{ sortOption ? sortOption : "Featured" }}
                </span>
                <i class="icon-chevron-down"></i>
              </div>

              <div class="dropdown__menu js-menu-items">
                <div
                  v-for="(elm, i) in speedFeatures"
                  :key="i"
                  @click="setSortOption(elm)"
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
                  <!-- Assuming Image is a Nuxt component -->
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
                    <!-- Assuming Stars is a Nuxt component -->
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
          <!-- Assuming Pagination is a Nuxt component -->
          <Pagination />

          <div class="text-14 text-center mt-20">
            Showing results 1-30 of 1,415
          </div>
        </div>
      </div>
    </section>

    <!-- Assuming ToggleSidebar is a Nuxt component -->
    <ToggleSidebar
      :sidebarOpen="sidebarOpen"
      @setSidebarOpen="setSidebarOpen"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Stars from "~/components/common/Stars.vue"; // Update the path accordingly
import Calender from "~/components/common/dropdownSearch/Calender.vue"; // Update the path accordingly
import Pagination from "~/components/common/Pagination.vue"; // Update the path accordingly
import ToggleSidebar from "./ToggleSidebar.vue"; // Update the path accordingly
import { tourDataThree } from "~/data/tours"; // Update the path accordingly
import { speedFeatures, toursTypes } from "~/data/tourFilteringOptions";

const sortOption = ref("");
const ddActives = ref(false);
const tourTypeActive = ref(false);
const sidebarOpen = ref(false);
const dropDownContainer = ref(null);
const dropDownContainer2 = ref(null);

const toggleDdActives = () => {
  ddActives.value = !ddActives.value;
};

const toggleTourTypeActive = () => {
  tourTypeActive.value = !tourTypeActive.value;
};

const setSortOption = (option) => {
  sortOption.value = sortOption.value === option ? "" : option;
  ddActives.value = false;
};
const setSidebarOpen = (value) => {
  sidebarOpen.value = value;
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
    tourTypeActive.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClick);
});
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
