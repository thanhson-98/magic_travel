<template>
  <div class="halfMap -type-1">
    <div class="halfMap__content">
      <div class="row">
        <div class="col-auto">
          <h2 class="text-30 md:text-24">Explore all things to do in Phuket</h2>
        </div>
      </div>

      <div
        class="row custom-dd-container y-gap-20 justify-between items-center pt-30 md:pt-10 mb-30"
      >
        <div class="col-auto">
          <div class="row x-gap-10 y-gap-10 items-center custom-dd-container">
            <div class="col-auto">
              <button
                @click="() => setSidebarOpen(true)"
                class="button -h-50 px-20 -outline-dark-1 text-dark-1"
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
                      <!-- Assuming Calender is a component -->
                      <Calender />
                    </span>
                    <span class="js-last-date"></span>
                  </div>
                  <i class="icon-chevron-down ml-10"></i>
                </div>
              </div>
            </div>

            <div
              ref="dropDownContainer2"
              :class="`dropdown -base -price js-dropdown js-form-dd  ${
                curentDD == 'priceFilter1' ? 'is-active' : ''
              }`"
            >
              <div
                @click="
                  () => {
                    curentDD = curentDD == 'priceFilter1' ? '' : 'priceFilter1';
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
                  <!-- Assuming RangeSlider is a component -->
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
        </div>

        <div ref="dropDownContainer" class="col-auto">
          <div
            :class="`dropdown -type-2 js-dropdown js-form-dd ${
              ddActives ? 'is-active' : ''
            }`"
            data-main-value=""
          >
            <div
              @click="() => (ddActives = !ddActives)"
              class="dropdown__button js-button"
            >
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

      <div class="halfMap__cards">
        <div class="row y-gap-30">
          <!-- Assuming tourDataThree is an array of objects -->
          <div v-for="(elm, i) in tourDataThree" :key="i" class="col-sm-6">
            <nuxt-link
              :to="`/tour-single-1/${elm.id}`"
              class="tourCard -type-1 py-10 px-10 border-1 rounded-12 -hover-shadow"
            >
              <div class="tourCard__header">
                <div class="tourCard__image ratio ratio-28:20">
                  <!-- Assuming Image is a component -->
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
                    <!-- Assuming Stars is a component -->
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
                    From
                    <span class="text-16 fw-500">${{ elm.price }}</span>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="d-flex justify-center flex-column mt-30">
        <!-- Assuming Pagination is a component -->
        <Pagination />

        <div class="text-14 text-center mt-20">
          Showing results 1-30 of 1,415
        </div>
      </div>
    </div>

    <div class="halfMap__map">
      <!-- Assuming Map is a component -->
      <Map />
    </div>
  </div>
  <ToggleSidebar :sidebarOpen="sidebarOpen" @setSidebarOpen="setSidebarOpen" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Calender from "../common/dropdownSearch/Calender";
import RangeSlider from "../common/RangeSlider";
import { tourDataThree } from "@/data/tours";
import Stars from "../common/Stars";
import Pagination from "../common/Pagination";
import Map from "./Map";
import { speedFeatures } from "@/data/tourFilteringOptions";
import ToggleSidebar from "./ToggleSidebar";

const sortOption = ref("");
const ddActives = ref(false);
const sidebarOpen = ref(false);
const dropDownContainer = ref(null);
const dropDownContainer2 = ref(null);
const curentDD = ref("");

const setSidebarOpen = (value) => {
  sidebarOpen.value = value;
};
const setDdActives = (value) => {
  ddActives.value = value;
};

const handleSort = (elm) => {
  sortOption.value = sortOption.value === elm ? "" : elm;
  setDdActives(false);
};

const handleClick = (event) => {
  if (
    dropDownContainer.value &&
    !dropDownContainer.value.contains(event.target)
  ) {
    setDdActives(false);
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
