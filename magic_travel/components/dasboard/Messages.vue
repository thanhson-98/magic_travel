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
        <h1 class="text-30">Messages</h1>
        <p class="">Lorem ipsum dolor sit amet, consectetur.</p>
        <div class="row y-gap-30 pt-60">
          <div class="col-lg-4">
            <div class="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30">
              <div class="dbSearch">
                <i class="icon-search text-16"></i>
                <input type="search" placeholder="Search" />
              </div>

              <div class="row y-gap-30 pt-30">
                <div v-for="(elm, i) in messageSanders" :key="i" class="col-12">
                  <div class="row x-gap-10 y-gap-10 justify-between">
                    <div class="col-auto">
                      <div class="d-flex items-center">
                        <nuxt-img
                          :width="50"
                          :height="50"
                          :src="elm.image"
                          alt="image"
                          class="size-50 rounded-full"
                        />

                        <div class="ml-10">
                          <h5 class="text-15 lh-13 fw-500">{{ elm.name }}</h5>
                          <div class="text-14 lh-13">{{ elm.role }}</div>
                        </div>
                      </div>
                    </div>

                    <div class="col-auto">
                      <div class="d-flex flex-column items-end md:items-start">
                        <div class="text-14">{{ elm.time }}</div>

                        <div
                          v-if="elm.badgeText"
                          :class="`size-16 flex-center rounded-full ${
                            elm.badgeColor ? elm.badgeColor : ''
                          } text-8 text-white`"
                        >
                          {{ elm.badgeText }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-8">
            <div class="rounded-12 bg-white shadow-2 px-40 pt-20 pb-30">
              <div
                class="row x-gap-10 y-gap-10 justify-between items-center pb-20 border-1-bottom"
              >
                <div class="col-auto">
                  <div class="d-flex items-center">
                    <nuxt-img
                      :width="50"
                      :height="50"
                      src="/img/dashboard/messages/main/4.png"
                      alt="image"
                      class="size-50 rounded-full"
                    />

                    <div class="ml-10">
                      <h5 class="text-15 lh-13 fw-500">Arlene McCoy</h5>
                      <div class="text-14 lh-13">Active</div>
                    </div>
                  </div>
                </div>

                <div class="col-auto">
                  <div class="text-14">Delete Conversation</div>
                </div>
              </div>

              <div class="row pt-40">
                <div class="col-lg-6">
                  <div class="d-flex items-center">
                    <nuxt-img
                      :width="50"
                      :height="50"
                      src="/img/dashboard/messages/main/1.png"
                      alt="image"
                      class="size-50 rounded-full"
                    />
                    <h5 class="ml-10 text-15 fw-500">Albert Flores</h5>
                    <div class="text-14 ml-5">35 mins</div>
                  </div>

                  <div class="text-14 bg-light-1 rounded-12 py-20 px-30 mt-15">
                    How likely are you to recommend our company to your friends
                    and family?
                  </div>
                </div>
              </div>

              <div class="row justify-end text-right pt-20">
                <div class="col-lg-6">
                  <div class="d-flex items-center justify-end">
                    <div class="text-14 mr-5">35 mins</div>
                    <h5 class="mr-10 text-15 fw-500">Albert Flores</h5>
                    <nuxt-img
                      :width="50"
                      :height="50"
                      src="/img/dashboard/messages/main/3.png"
                      alt="image"
                      class="size-50 rounded-full"
                    />
                  </div>

                  <div
                    class="text-14 bg-accent-1-05 rounded-12 py-20 px-30 mt-15"
                  >
                    How likely are you to recommend our company to your friends
                    and family?
                  </div>
                </div>
              </div>

              <div class="row pt-20">
                <div class="col-lg-6">
                  <div class="d-flex items-center">
                    <nuxt-img
                      :width="50"
                      :height="50"
                      src="/img/dashboard/messages/main/3.png"
                      alt="image"
                      class="size-50 rounded-full"
                    />
                    <h5 class="ml-10 text-15 fw-500">Cameron Williamson</h5>
                    <div class="text-14 ml-5">35 mins</div>
                  </div>

                  <div class="text-14 bg-light-1 rounded-12 py-20 px-30 mt-15">
                    Ok, Understood!
                  </div>
                </div>
              </div>

              <div class="mt-40 mb-30 border-1-top"></div>

              <div class="row y-gap-20 justify-between items-center">
                <div class="col-auto">
                  <input type="text" placeholder="Type a Message" />
                </div>

                <div class="col-auto">
                  <button class="button -md -dark-1 bg-accent-1 text-white">
                    Send Message
                    <i class="icon-arrow-top-right text-16 ml-10"></i>
                  </button>
                </div>
              </div>
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
import { messageSanders } from "@/data/dashboard";

const sideBarOpen = ref(true);

const setSideBarOpen = (value) => {
  sideBarOpen.value = !sideBarOpen.value;
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
