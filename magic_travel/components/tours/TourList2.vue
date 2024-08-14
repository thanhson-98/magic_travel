<template>
  <section class="layout-pb-xl">
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-lg-4">
          <div class="lg:d-none">
            <Sidebar />
          </div>

          <div class="accordion d-none mb-30 lg:d-flex js-accordion">
            <div
              class="accordion__item col-12"
              :class="{ 'is-active': sidebarActive }"
            >
              <button
                class="accordion__button button -dark-1 bg-light-1 px-25 py-10 border-1 rounded-12"
                @click="() => (sidebarActive = !sidebarActive)"
              >
                <i class="icon-sort-down mr-10 text-16"></i>
                Filter
              </button>

              <div
                class="accordion__content"
                :style="{ maxHeight: sidebarActive ? '2000px' : '' }"
              >
                <div class="pt-20">
                  <Sidebar />
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
                <div
                  class="dropdown__button js-button"
                  @click="() => (ddActives = !ddActives)"
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
                    @click="
                      () => {
                        sortOption = sortOption === elm ? '' : elm;
                        ddActives = false;
                      }
                    "
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
              class="col-lg-4 col-sm-6"
            >
              <nuxt-link
                :to="`/tour-single-1/${elm.id}`"
                class="tourCard -type-1 py-10 px-10 border-1 rounded-12 -hover-shadow"
              >
                <div class="tourCard__header">
                  <div class="tourCard__image ratio ratio-28:20">
                    <!-- Replace the Image component with native Vue image handling or another library -->
                    <nuxt-img
                      :src="elm.imageSrc"
                      :alt="`image ${i}`"
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

                  <div
                    class="tourCard__rating d-flex items-center text-13 mt-5"
                  >
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
            <!-- Pagination component logic here -->
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
import Sidebar from "./Sidebar.vue"; // adjust the path
import { speedFeatures } from "@/data/tourFilteringOptions";
import { tourDataThree } from "@/data/tours"; // import only what you need
import Stars from "../common/Stars.vue";
import Pagination from "../common/Pagination.vue";
// Import other dependencies as needed

const sortOption = ref("");
const ddActives = ref(false);
const sidebarActive = ref(false);
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

onUnmounted(() => {
  document.removeEventListener("click", handleClick);
});
</script>
