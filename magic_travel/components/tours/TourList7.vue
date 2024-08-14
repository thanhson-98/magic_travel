<template>
  <div>
    <section class="halfMap -type-1 -wide">
      <div class="halfMap__content">
        <div class="row">
          <div class="col-auto">
            <h2 class="text-30 md:text-24">
              Explore all things to do in Phuket
            </h2>
          </div>
        </div>

        <div
          class="row custom-dd-container y-gap-20 justify-between items-center pt-30 md:pt-10 mb-30"
        >
          <div class="col-auto">
            <div class="row custom-dd-container x-gap-10 y-gap-10 items-center">
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
                        <Calender />
                      </span>
                      <span class="js-last-date"></span>
                    </div>
                    <i class="icon-chevron-down ml-10"></i>
                  </div>
                </div>
              </div>

              <div class="col-auto">
                <div
                  ref="{dropDownContainer2}"
                  :class="` dropdown -base -price js-dropdown js-form-dd  ${
                    currentDD == 'priceFilter1' ? 'is-active' : ''
                  } `"
                >
                  <div
                    @click="
                      () => {
                        currentDD =
                          currentDD == 'priceFilter1' ? '' : 'priceFilter1';
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
            </div>
          </div>

          <div ref="{dropDownContainer}" class="col-auto">
            <div
              :class="`dropdown -type-2 js-dropdown js-form-dd ${
                ddActives ? 'is-active' : ''
              } `"
              data-main-value=""
            >
              <div
                class="dropdown__button js-button"
                @click="
                  () => {
                    ddActives = !ddActives;
                  }
                "
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
                  @click="handleSortOptionClick(elm)"
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
            <div v-for="(elm, i) in tourDataTwo" :key="i" class="col-12">
              <div class="tourCard -type-2">
                <div class="tourCard__image">
                  <nuxt-img
                    :width="420"
                    :height="390"
                    :src="elm.imageSrc"
                    alt="image"
                  />

                  <div v-if="elm.badgeText" class="tourCard__badge">
                    <div
                      class="bg-accent-1 rounded-12 text-white lh-11 text-13 px-15 py-10"
                    >
                      {{ elm.badgeText }}
                    </div>
                  </div>

                  <div v-if="elm.featured" class="tourCard__badge">
                    <div
                      class="bg-accent-2 rounded-12 text-white lh-11 text-13 px-15 py-10"
                    >
                      FEATURED
                    </div>
                  </div>

                  <div class="tourCard__favorite">
                    <button
                      class="button -accent-1 size-35 bg-white rounded-full flex-center"
                    >
                      <i class="icon-heart text-15"></i>
                    </button>
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

                  <div class="d-flex items-center mt-5">
                    <div class="d-flex items-center x-gap-5">
                      <Stars :star="elm.rating" :font="12" />
                    </div>

                    <div class="text-14 ml-10">
                      <span class="fw-500">{{ elm.rating }}</span> ({{
                        elm.ratingCount
                      }})
                    </div>
                  </div>

                  <p class="tourCard__text mt-5">{{ elm.description }}</p>

                  <div class="row x-gap-20 y-gap-5 pt-30">
                    <div
                      v-for="(elm2, i2) in elm.features"
                      :key="i2"
                      class="col-auto"
                    >
                      <div class="text-14 text-accent-1">
                        <i :class="`${elm2.icon} mr-10`"></i>
                        {{ elm2.name }}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tourCard__info">
                  <div>
                    <div class="d-flex items-center text-14">
                      <i class="icon-clock mr-10"></i>
                      {{ elm.duration }}
                    </div>

                    <div class="tourCard__price">
                      <div>${{ elm.fromPrice }}</div>

                      <div class="d-flex items-center">
                        From
                        <span class="text-20 fw-500 ml-5"
                          >${{ elm.price }}</span
                        >
                      </div>
                    </div>
                  </div>

                  <button class="button -outline-accent-1 text-accent-1">
                    <nuxt-link :to="`/tour-single-1/${elm.id}`"
                      >View Details<i class="icon-arrow-top-right ml-10"></i
                    ></nuxt-link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-center flex-column mt-30">
          <Pagination />
          <div class="text-14 text-center mt-20">
            Showing results 1-30 of 1,415
          </div>
        </div>
      </div>

      <div class="halfMap__map">
        <Map />
      </div>
    </section>

    <ToggleSidebar
      :sidebarOpen="sidebarOpen"
      @setSidebarOpen="setSidebarOpen"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Calender from "../common/dropdownSearch/Calender.vue";
import RangeSlider from "../common/RangeSlider.vue";
import { tourDataTwo } from "@/data/tours";
import Stars from "../common/Stars.vue";
import Pagination from "../common/Pagination.vue";
import Map from "./Map.vue";
import { speedFeatures } from "@/data/tourFilteringOptions";
import ToggleSidebar from "./ToggleSidebar.vue";

const sortOption = ref("");
const ddActives = ref(false);
const sidebarOpen = ref(false);
const dropDownContainer = ref(null);
const dropDownContainer2 = ref(null);
const currentDD = ref("");

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
    currentDD.value = "";
  }
};
const setSidebarOpen = (value) => {
  sidebarOpen.value = value;
};
const handleSortOptionClick = (elm) => {
  sortOption.value = sortOption.value === elm ? "" : elm;
  ddActives.value = false;
};
onMounted(() => {
  document.addEventListener("click", handleClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClick);
});
</script>
