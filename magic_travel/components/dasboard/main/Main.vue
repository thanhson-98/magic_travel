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
        <h1 class="text-30">Dashboard</h1>
        <p class="">Lorem ipsum dolor sit amet, consectetur.</p>

        <States />

        <div class="row pt-30 y-gap-30">
          <Statistics />

          <div class="col-xl-4 col-lg-12 col-md-6">
            <div class="px-30 py-25 rounded-12 bg-white shadow-2">
              <div class="d-flex items-center justify-between">
                <div class="text-18 fw-500">Recent Activities</div>
              </div>

              <Activities />

              <div class="pt-40">
                <button
                  class="button -md -outline-accent-1 col-12 text-accent-1"
                >
                  View More
                  <i class="icon-arrow-top-right text-16 ml-10"></i>
                </button>
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
import Sidebar from "../Sidebar.vue";
import Header from "../Header.vue";
import States from "./States.vue";
import Activities from "./Activities.vue";
import Statistics from "./Statistics.vue";

const sideBarOpen = ref(true);
const setSideBarOpen = () => {
  sideBarOpen.value = !sideBarOpen.value;
};
</script>
