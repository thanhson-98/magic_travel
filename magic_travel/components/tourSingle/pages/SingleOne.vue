<template>
  <section>
    <div class="container">
      <MainInformation :tour="tour" />
      <Gallery1 />
    </div>
  </section>

  <section class="layout-pt-md js-pin-container">
    <div class="container">
      <div class="row y-gap-30 justify-between">
        <div class="col-lg-8">
          <div class="row y-gap-20 items-center layout-pb-md">
            <OthersInformation />
          </div>

          <Overview />

          <div class="line mt-60 mb-60"></div>

          <h2 class="text-30">What's included</h2>

          <Included />

          <div class="line mt-60 mb-60"></div>

          <h2 class="text-30">Itinerary</h2>

          <RoadMap2 />

          <div class="line mt-60 mb-60"></div>

          <h2 class="text-30">FAQ</h2>

          <div class="accordion -simple row y-gap-20 mt-30 js-accordion">
            <Faq />
          </div>

          <div class="line mt-60 mb-60"></div>

          <h2 class="text-30">Customer Reviews</h2>

          <div class="mt-30">
            <Rating />
          </div>
        </div>

        <div class="col-lg-4">
          <div class="d-flex justify-end js-pin-content">
            <TourSingleSidebar />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import MainInformation from "../MainInformation";
import OthersInformation from "../OthersInformation";
import Overview from "../Overview";
import Included from "../Included";
import Faq from "../Faq";
import Rating from "../Rating";
import TourSingleSidebar from "../TourSingleSidebar";
import Gallery1 from "../Galleries/Gallery1";
import RoadMap2 from "../Roadmap2";

const props = defineProps(["tour"]);
</script>
