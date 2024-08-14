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
        <h1 class="text-30">My Listings</h1>
        <p class="">Lorem ipsum dolor sit amet, consectetur.</p>

        <div
          class="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 md:px-20 md:pt-20 md:pb-20 mt-60 md:mt-30"
        >
          <div class="row y-gap-30">
            <div v-for="(elm, i) in slicedTourData" :key="i" class="col-lg-6">
              <div class="border-1 rounded-12 px-20 py-20">
                <div class="row x-gap-20 y-gap-20 items-center">
                  <div class="col-xxl-auto">
                    <nuxt-img
                      :width="421"
                      :height="301"
                      :src="elm.imageSrc"
                      alt="image"
                      class="size-200 w-1/1 object-cover rounded-12"
                    />
                  </div>

                  <div class="col">
                    <div class="d-flex items-center">
                      <i class="icon-pin mr-5"></i>
                      {{ elm.location }}
                    </div>

                    <div class="text-18 lh-15 fw-500 mt-5">
                      {{ elm.title }}
                    </div>

                    <div class="d-flex items-center mt-5">
                      <div class="d-flex x-gap-5 text-yellow-2 mr-10">
                        <Stars :star="elm.rating" />
                      </div>
                      <div>{{ elm.rating }} ({{ elm.ratingCount }})</div>
                    </div>

                    <div class="row y-gap-15 justify-between items-end pt-5">
                      <div class="col-auto">
                        <div class="d-flex items-center">
                          <i class="icon-clock mr-5"></i>
                          <div class="text-14">{{ elm.duration }}</div>
                        </div>
                      </div>

                      <div class="col-auto">
                        <div class="text-right md:text-left">
                          <div class="lh-14">${{ elm.price }}</div>
                          From{{ " " }}
                          <span class="text-20 fw-500">
                            ${{ elm.price + 1000 }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
import { tourData } from "@/data/tours";
import Stars from "../common/Stars.vue";

const sideBarOpen = ref(true);
const slicedTourData = ref(tourData.slice(0, 6));

const setSideBarOpen = () => {
  sideBarOpen.value = !sideBarOpen.value;
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
