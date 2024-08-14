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
        <h1 class="text-30">My Booking</h1>
        <p class="">Lorem ipsum dolor sit amet, consectetur.</p>

        <div
          class="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 md:px-20 md:pt-20 md:mb-20 mt-60"
        >
          <div class="tabs -underline-2 js-tabs">
            <div
              class="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls"
            >
              <div
                v-for="(tab, i) in tabs"
                :key="i"
                class="col-auto"
                @click="setcurrentTab(tab)"
              >
                <button
                  :class="`tabs__button text-20 lh-12 fw-500 pb-15 lg:pb-0 js-tabs-button ${
                    tab === currentTab ? 'is-tab-el-active' : ''
                  }`"
                >
                  {{ tab }}
                </button>
              </div>
            </div>

            <div class="tabs__content js-tabs-content">
              <div class="tabs__pane -tab-item-1 is-tab-el-active">
                <div class="overflowAuto">
                  <table class="tableTest mb-30">
                    <thead class="bg-light-1 rounded-12">
                      <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Start date</th>
                        <th>End date</th>
                        <th>Details</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr v-for="(elm, i) in filteredBookingData" :key="i">
                        <td>{{ elm.orderNumber }}</td>
                        <td class="min-w-300">
                          <div class="d-flex items-center">
                            <nuxt-img
                              :width="70"
                              :height="65"
                              :src="elm.imageUrl"
                              alt="image"
                            />
                            <div class="ml-20">{{ elm.title }}</div>
                          </div>
                        </td>
                        <td>{{ elm.startDate }}</td>
                        <td>{{ elm.endDate }}</td>
                        <td>{{ elm.numberOfPeople }}</td>
                        <td>{{ elm.cost }}</td>
                        <td>
                          <div
                            :class="`circle ${
                              elm.status === 'Approved'
                                ? 'text-purple-1'
                                : elm.status === 'Pending'
                                ? 'text-yellow-1'
                                : 'text-red-2'
                            }`"
                          >
                            {{ elm.status }}
                          </div>
                        </td>
                        <td>
                          <div class="d-flex items-center">
                            <button
                              class="button -dark-1 size-35 bg-light-1 rounded-full flex-center"
                            >
                              <i class="icon-pencil text-14"></i>
                            </button>
                            <button
                              class="button -dark-1 size-35 bg-light-1 rounded-full flex-center ml-10"
                            >
                              <i class="icon-delete text-14"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Pagination />

                <div class="text-14 text-center mt-20">
                  Showing results 1-30 of 1,415
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
import { ref } from "vue";
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import Pagination from "../common/Pagination.vue";

import { bookingData } from "@/data/dashboard";

const tabs = ref(["Approved", "Pending", "Cancelled"]);
const sideBarOpen = ref(true);
const currentTab = ref("Approved");
const setSideBarOpen = () => {
  sideBarOpen.value = !sideBarOpen.value;
};
const filteredBookingData = ref([]);

const setcurrentTab = (tab) => {
  currentTab.value = tab;
  filterBookingData();
};

const filterBookingData = () => {
  filteredBookingData.value = bookingData.filter(
    (elm) => elm.status === currentTab.value,
  );
};

filterBookingData(); // Initial data filtering
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
