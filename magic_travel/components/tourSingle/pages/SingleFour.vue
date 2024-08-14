<template>
  <section class="">
    <div class="container">
      <MainInformation :tour="tour" />

      <Gallery1 />
    </div>
  </section>

  <section class="layout-pt-md">
    <div class="container">
      <div class="row y-gap-30 justify-between">
        <div class="col-lg-8">
          <div class="row y-gap-20 justify-between items-center layout-pb-md">
            <OthersInformation />
          </div>

          <Overview />

          <div
            class="accordion -tour-single row y-gap-20 pt-60 md:pt-30 js-accordion"
          >
            <div class="col-12">
              <div
                :class="`accordion__item py-30 border-1-top ${
                  activeAcorditions.includes('included') ? 'is-active' : ''
                }`"
              >
                <div
                  @click="() => toggleAccordion('included')"
                  class="accordion__button d-flex items-center justify-between"
                >
                  <div class="text-30 md:text-20 lh-13 fw-700">
                    What's included
                  </div>

                  <div class="accordion__icon size-30 text-24 flex-center">
                    <i class="icon-chevron-down"></i>
                    <i class="icon-chevron-up"></i>
                  </div>
                </div>

                <div
                  class="accordion__content"
                  :style="
                    activeAcorditions.includes('included')
                      ? { maxHeight: '500px' }
                      : {}
                  "
                >
                  <div class="pt-20">
                    <Included />
                  </div>
                </div>
              </div>

              <div
                :class="`accordion__item py-30 border-1-top ${
                  activeAcorditions.includes('roadmap') ? 'is-active' : ''
                }`"
              >
                <div
                  @click="() => toggleAccordion('roadmap')"
                  class="accordion__button d-flex items-center justify-between"
                >
                  <div class="text-30 md:text-20 lh-13 fw-700">Itinerary</div>

                  <div class="accordion__icon size-30 text-24 flex-center">
                    <i class="icon-chevron-down"></i>
                    <i class="icon-chevron-up"></i>
                  </div>
                </div>

                <div
                  class="accordion__content"
                  :style="
                    activeAcorditions.includes('roadmap')
                      ? { maxHeight: '500px' }
                      : {}
                  "
                >
                  <div class="pt-20">
                    <RoadMap />
                  </div>
                </div>
              </div>

              <div
                :class="`accordion__item py-30 border-1-top ${
                  activeAcorditions.includes('calender') ? 'is-active' : ''
                }`"
              >
                <div
                  @click="() => toggleAccordion('calender')"
                  class="accordion__button d-flex items-center justify-between"
                >
                  <div class="text-30 md:text-20 lh-13 fw-700">
                    Availability Calendar
                  </div>

                  <div class="accordion__icon size-30 text-24 flex-center">
                    <i class="icon-chevron-down"></i>
                    <i class="icon-chevron-up"></i>
                  </div>
                </div>

                <div
                  class="accordion__content"
                  :style="
                    activeAcorditions.includes('calender')
                      ? { maxHeight: '500px' }
                      : {}
                  "
                >
                  <div class="pt-20">
                    <DateCalender />
                  </div>
                </div>
              </div>

              <div
                :class="`accordion__item py-30 border-1-top ${
                  activeAcorditions.includes('faq') ? 'is-active' : ''
                }`"
              >
                <div
                  @click="() => toggleAccordion('faq')"
                  class="accordion__button d-flex items-center justify-between"
                >
                  <div class="text-30 md:text-20 lh-13 fw-700">FAQ</div>

                  <div class="accordion__icon size-30 text-24 flex-center">
                    <i class="icon-chevron-down"></i>
                    <i class="icon-chevron-up"></i>
                  </div>
                </div>

                <div
                  class="accordion__content"
                  :style="
                    activeAcorditions.includes('faq')
                      ? { maxHeight: '500px' }
                      : {}
                  "
                >
                  <div class="pt-20">
                    <div class="accordion -simple row y-gap-20 js-accordion">
                      <Faq />
                    </div>
                  </div>
                </div>
              </div>

              <div
                :class="`accordion__item py-30 border-1-top ${
                  activeAcorditions.includes('review') ? 'is-active' : ''
                }`"
              >
                <div
                  @click="() => toggleAccordion('review')"
                  class="accordion__button d-flex items-center justify-between"
                >
                  <div class="text-30 md:text-20 lh-13 fw-700">
                    Customer Reviews
                  </div>

                  <div class="accordion__icon size-30 text-24 flex-center">
                    <i class="icon-chevron-down"></i>
                    <i class="icon-chevron-up"></i>
                  </div>
                </div>

                <div
                  class="accordion__content"
                  :style="
                    activeAcorditions.includes('review')
                      ? { maxHeight: '500px' }
                      : {}
                  "
                >
                  <div class="pt-20">
                    <Rating />
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
          </div>
        </div>

        <div class="col-lg-4">
          <div
            :style="{ position: 'sticky', top: '10px' }"
            class="d-flex justify-end"
          >
            <TourSingleSidebar />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import MainInformation from "../MainInformation";
import Gallery1 from "../Galleries/Gallery1";
import OthersInformation from "../OthersInformation";
import Overview from "../Overview";
import Included from "../Included";
import RoadMap from "../RoadMap";
import DateCalender from "../DateCalender";
import Faq from "../Faq";
import Rating from "../Rating";
import Reviews from "../Reviews";
import CommentBox from "../CommentBox";
import TourSingleSidebar from "../TourSingleSidebar";
const props = defineProps(["tour"]);
const activeAcorditions = ref([]);

const toggleAccordion = (sectionId) => {
  activeAcorditions.value = activeAcorditions.value.includes(sectionId)
    ? activeAcorditions.value.filter((elm) => elm !== sectionId)
    : [...activeAcorditions.value, sectionId];
};
</script>
