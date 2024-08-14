<template>
  <div
    :class="`dashboard ${
      sideBarOpen ? '-is-sidebar-visible' : ''
    } js-dashboard`"
  >
    <Sidebar @setSideBarOpen="setSideBarOpen" />

    <div class="dashboard__content">
      <Header @setSideBarOpen="setSideBarOpen" />

      <div class="dashboard__content_content">
        <h1 class="text-30">My Favorites</h1>
        <p class="">Lorem ipsum dolor sit amet, consectetur.</p>

        <div class="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 mt-60">
          <div class="row y-gap-30">
            <div
              v-for="(elm, i) in slicedTourData"
              :key="i"
              class="col-xl-3 col-lg-4 col-md-6"
            >
              <nuxt-link
                :to="`/tour-single-1/${elm.id}`"
                class="tourCard -type-1 py-10 px-10 border-1 rounded-12 -hover-shadow"
              >
                <div class="tourCard__header">
                  <div class="tourCard__image ratio ratio-28:20">
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

          <div class="mt-30">
            <Pagination />
            <div class="text-14 text-center mt-20">
              Showing results 1-30 of 1,415
            </div>
          </div>
        </div>

        <div class="text-center pt-30">
          © Copyright Viatours {{ new Date().getFullYear() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import Pagination from "../common/Pagination.vue";
import { tourDataThree } from "@/data/tours";
import Stars from "../common/Stars.vue";

const sideBarOpen = ref(true);
const slicedTourData = ref(tourDataThree.slice(0, 8));

const setSideBarOpen = (value) => {
  sideBarOpen.value = !sideBarOpen.value;
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
