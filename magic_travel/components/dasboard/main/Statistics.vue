<template>
  <div class="col-xl-8 col-lg-12 col-md-6">
    <div class="rounded-12 bg-white shadow-2 h-full">
      <div class="pt-20 px-30">
        <div class="tabs -underline-2 js-tabs">
          <div class="d-flex items-center justify-between">
            <div class="text-18 fw-500">Earning Statistics</div>

            <div
              class="tabs__controls row x-gap-20 y-gap-10 lg:x-gap-20 js-tabs-controls"
            >
              <div
                v-for="(elm, i) in tabContentStaticties"
                :key="i"
                class="col-auto"
              >
                <button
                  @click="setActiveTab(elm)"
                  class="tabs__button fw-500 px-5 pb-5 lg:pb-0 js-tabs-button"
                  :class="{ 'is-tab-el-active': activeTab.label === elm.label }"
                >
                  {{ elm.label }}
                </button>
              </div>
            </div>
          </div>

          <div class="tabs__content pt-30 js-tabs-content">
            <div class="tabs__pane -tab-item-1 is-tab-el-active">
              <!-- Content for the active tab goes here -->
              <Line height="500px" :data="data" :options="options" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { tabContentStaticties } from "@/data/dashboard";

const activeTab = ref(tabContentStaticties[0]);

const setActiveTab = (tab) => {
  activeTab.value = tab;
};

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const data = computed(() => {
  return {
    labels: activeTab.value.data.map((elm) => elm.name),
    datasets: [
      {
        label: "Cubic interpolation (monotone)",
        backgroundColor: "#EB662B",
        data: activeTab.value.data.map((elm) => elm.value),
        fill: "#CE5A25",
        cubicInterpolationMode: "monotone",
        tension: 0.4,
      },
    ],
  };
});

const options = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
