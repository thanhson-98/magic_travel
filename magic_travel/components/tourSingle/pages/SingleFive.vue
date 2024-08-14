<template>
  <Gallery4 :tour="tour" />

  <section class="layout-pt-md js-pin-container">
    <div class="container">
      <div class="row y-gap-30 justify-between">
        <div class="col-lg-8">
          <div class="tabs -tourSingle js-tabs">
            <div class="tabs__controls row x-gap-30 y-gap-10 js-tabs-controls">
              <div
                v-for="(tab, index) in tabButtons"
                :key="index"
                class="col-auto"
              >
                <button
                  @click="setActiveTab(tab)"
                  class="tabs__button text-30 md:text-20 fw-700 js-tabs-button"
                  :class="{ 'is-tab-el-active': tab === activeTab }"
                  data-tab-target=".-tab-item-1"
                >
                  {{ tab }}
                </button>
              </div>
            </div>

            <div class="tabs__content pt-40 js-tabs-content">
              <div
                class="tabs__pane"
                :class="{ 'is-tab-el-active': activeTab === 'Overview' }"
              >
                <div
                  class="row y-gap-20 justify-between items-center layout-pb-md"
                >
                  <OthersInformation />
                </div>

                <Overview />
              </div>

              <div
                class="tabs__pane"
                :class="{ 'is-tab-el-active': activeTab === 'included' }"
              >
                <h2 class="text-30">What's included</h2>

                <div class="row x-gap-130 y-gap-20 pt-20">
                  <!-- Included content here -->
                  <Included />
                </div>
              </div>

              <div
                class="tabs__pane"
                :class="{ 'is-tab-el-active': activeTab === 'Itinerary' }"
              >
                <h2 class="text-30">Itinerary</h2>

                <div class="mt-30">
                  <RoadMap />
                </div>
              </div>

              <div
                class="tabs__pane"
                :class="{ 'is-tab-el-active': activeTab === 'calendar' }"
              >
                <h2 class="text-30">Availability Calendar</h2>

                <DateCalender />
              </div>

              <div
                class="tabs__pane"
                :class="{ 'is-tab-el-active': activeTab === 'FAQ' }"
              >
                <h2 class="text-30">FAQ</h2>

                <div class="accordion -simple row y-gap-20 mt-30 js-accordion">
                  <Faq />
                </div>
              </div>

              <div
                class="tabs__pane"
                :class="{ 'is-tab-el-active': activeTab === 'Reviews' }"
              >
                <h2 class="text-30">Customer Reviews</h2>

                <div class="mt-30">
                  <Rating />
                </div>

                <Reviews />

                <button
                  class="button -md -outline-accent-1 text-accent-1 mt-30"
                >
                  See more reviews
                  <i class="icon-arrow-top-right text-16 ml-10"></i>
                </button>

                <CommentBox />
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div
            :style="{ height: '100%' }"
            class="d-flex justify-end toursingle5"
          >
            <div :style="{ position: 'sticky', top: '10px' }" class="-top-320">
              <TourSingleSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import TourSingleSidebar from "../TourSingleSidebar";
import CommentBox from "../CommentBox";
import Reviews from "../Reviews";
import Rating from "../Rating";
import Faq from "../Faq";
import DateCalender from "../DateCalender";
import RoadMap from "../RoadMap";
import OthersInformation from "../OthersInformation";
import Overview from "../Overview";
import Gallery4 from "../Galleries/Gallery4";
import Included from "../Included.vue";
const tabButtons = ref([
  "Overview",
  "included",
  "Itinerary",
  "calendar",
  "FAQ",
  "Reviews",
]);

const activeTab = ref("Overview");

const setActiveTab = (tab) => {
  activeTab.value = tab;
};
const props = defineProps(["tour"]);
</script>
