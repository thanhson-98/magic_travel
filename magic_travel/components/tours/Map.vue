<template>
  <GoogleMap
    :options="option"
    api-key="AIzaSyAAz77U5XQuEME6TpftaMdX0bBelQxXRlM"
    style="width: 100%; height: 100%"
    :center="center"
    :zoom="12"
  >
    <MarkerCluster>
      <Marker
        v-for="(elm, i) in tourDataThree.slice(0, 6)"
        @click="locationHandler(elm)"
        :options="{ position: elm.position }"
        :key="i"
      />
    </MarkerCluster>
    <InfoWindow
      v-if="clickedItem"
      :options="{ position: clickedItem.position }"
    >
      <nuxt-link
        :to="`/tour-single-1/${clickedItem.id}`"
        class="tourCard -type-1 py-10 px-10 border-1 rounded-12 -hover-shadow"
      >
        <div class="tourCard__header">
          <div class="tourCard__image ratio ratio-28:20">
            <nuxt-img
              width="421"
              height="301"
              :src="clickedItem.imageSrc"
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
            {{ clickedItem.location }}
          </div>

          <h3 class="tourCard__title text-16 fw-500 mt-5">
            <span>{{ clickedItem.title }}</span>
          </h3>

          <div class="tourCard__rating d-flex items-center text-13 mt-5">
            <div class="d-flex x-gap-5">
              <Stars :star="clickedItem.rating" />
            </div>

            <span class="text-dark-1 ml-10">
              {{ clickedItem.rating }}({{ clickedItem.ratingCount }})
            </span>
          </div>

          <div
            class="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10"
          >
            <div class="d-flex items-center">
              <i class="icon-clock text-16 mr-5"></i>
              {{ clickedItem.duration }}
            </div>

            <div>
              From{{ " " }}
              <span class="text-16 fw-500"> ${{ clickedItem.price }} </span>
            </div>
          </div>
        </div>
      </nuxt-link>
    </InfoWindow>
  </GoogleMap>
</template>

<script setup>
import { ref } from "vue";
const clickedItem = ref();
const locationHandler = (location) => {
  clickedItem.value = location;
};

// close handler
const closeCardHandler = () => {
  clickedItem.value = null;
};
import { GoogleMap, Marker, InfoWindow, MarkerCluster } from "vue3-google-map";
import { tourDataThree } from "~/data/tours";
import Stars from "../common/Stars.vue";

const center = {   
  lat: 21.028511,
  lng: 105.804817,
};
const option = {
  zoomControl: true,
  disableDefaultUI: true,
  styles: [
    {
      featureType: "all",
      elementType: "geometry.fill",
      stylers: [
        {
          weight: "2.00",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#9c9c9c",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          color: "#f2f2f2",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 45,
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#7b7b7b",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          color: "#46bcec",
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#c8d7d4",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#070707",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
  ],
  scrollwheel: true,
};
</script>
