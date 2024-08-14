<template>
  <Gallery2 />
  <section class="pt-30">
    <div class="container">
      <MainInformation :tour="tour" />
    </div>
  </section>

  <section class="layout-pt-md js-pin-container">
    <div class="container">
      <div class="row y-gap-30 justify-between">
        <div class="col-lg-8">
          <div class="row y-gap-20 justify-between items-center layout-pb-md">
            <OthersInformation />
          </div>

          <Overview />

          <div class="line mt-60 mb-60"></div>

          <h2 class="text-30">What's included</h2>

          <Included />

          <div class="line mt-60 mb-60"></div>

          <h2 class="text-30">Itinerary</h2>

          <div class="mt-30">
            <RoadMap />
          </div>

          <h2 class="text-30 mt-60 mb-30">Tour Map</h2>
          <div class="mapTourSingle">
            <Map />
          </div>

          <div class="line mt-60 mb-60"></div>

          <h2 class="text-30">Availability Calendar</h2>

          <DateCalender />

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

          <Reviews />

          <button class="button -md -outline-accent-1 text-accent-1 mt-30">
            See more reviews
            <i class="icon-arrow-top-right text-16 ml-10"></i>
          </button>

          <CommentBox />
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
import TourSingleSidebar from "../TourSingleSidebar";
import Faq from "../Faq";
import Rating from "../Rating";
import Reviews from "../Reviews";
import CommentBox from "../CommentBox";
import Map from "@/components/tours/Map";
import DateCalender from "../DateCalender";
import RoadMap from "../RoadMap";
import Overview from "../Overview";
import Included from "../Included";
import OthersInformation from "../OthersInformation";
import MainInformation from "../MainInformation";
import Gallery2 from "../Galleries/Gallery2";

const props = defineProps(["tour"]);
</script>
