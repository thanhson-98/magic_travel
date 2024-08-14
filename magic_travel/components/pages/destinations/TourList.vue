<template>
  <section class="layout-pb-xl">
    <div class="container">
      <div class="row y-gap-10 justify-between items-end y-gap-10 mb-50">
        <div class="col-auto">
          <h2 class="text-30">
            Explore all things to do in Phuket {{ new Date().getFullYear() }}
          </h2>
        </div>
        <div class="col-auto">
          <nuxt-link to="/tour-list-1" class="buttonArrow d-flex items-center">
            <span>See all</span>
            <i class="icon-arrow-top-right text-16 ml-10"></i>
          </nuxt-link>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-3 col-lg-4">
          <div class="lg:d-none">
            <Sidebar2 />
          </div>
          <div class="accordion d-none mb-30 lg:d-flex js-accordion">
            <div
              :class="`accordion__item col-12 ${
                sidebarActive ? 'is-active' : ''
              } `"
            >
              <button
                class="accordion__button button -dark-1 bg-light-1 px-25 py-10 border-1 rounded-12"
                @click="
                  () => {
                    sidebarActive = !sidebarActive;
                  }
                "
              >
                <i class="icon-sort-down mr-10 text-16"></i>
                Filter
              </button>

              <div
                class="accordion__content"
                :style="sidebarActive ? { maxHeight: '2000px' } : {}"
              >
                <div class="pt-20">
                  <Sidebar2 />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-9 col-lg-8">
          <div class="row y-gap-5 justify-between">
            <div class="col-auto">
              <div>1362 results</div>
            </div>

            <div ref="dropDownContainer" class="col-auto">
              <div
                class="dropdown -type-2 js-dropdown js-form-dd"
                :class="{ 'is-active': ddActives }"
                data-main-value=""
              >
                <div class="dropdown__button js-button" @click="toggleDropdown">
                  <span>Sort by: </span>
                  <span class="js-title">{{
                    sortOption ? sortOption : "Featured"
                  }}</span>
                  <i class="icon-chevron-down"></i>
                </div>

                <div class="dropdown__menu js-menu-items">
                  <div
                    @click="selectSortOption(elm)"
                    v-for="(elm, i) in speedFeatures"
                    :key="i"
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
                      >View Details</nuxt-link
                    >
                    <i class="icon-arrow-top-right ml-10"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex justify-center flex-column mt-60">
            <!-- Your pagination component -->
            <Pagination />
            <div class="text-14 text-center mt-20">
              Showing results 1-30 of 1,415
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { speedFeatures } from "@/data/tourFilteringOptions";
import { tourDataTwo } from "@/data/tours";
import Stars from "@/components/common/Stars";
import Pagination from "@/components/common/Pagination";

import Sidebar2 from "@/components/tours/Sidebar2";
import { useRouter } from "vue-router";

const sortOption = ref("");
const ddActives = ref(false);
const sidebarActive = ref(false);
const dropDownContainer = ref(null);

const toggleDropdown = () => {
  ddActives.value = !ddActives.value;
};

const selectSortOption = (elm) => {
  sortOption.value = sortOption.value === elm ? "" : elm;
  ddActives.value = false;
};

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

onUnmounted(() => {
  document.removeEventListener("click", handleClick);
});
</script>
