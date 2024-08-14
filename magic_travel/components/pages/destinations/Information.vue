<template>
  <section class="layout-pt-xl">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <h2 class="text-30 md:text-24">
            What to know before visiting Phuket
          </h2>
        </div>
      </div>

      <div class="row y-gap-20 pt-30">
        <div class="col-lg-8">
          <p>
            Phuket is a shining example of a metropolis at the highest peak of
            modernity and boasts an economy and cultural diversity that’s the
            envy of other global superpowers.
            <br />
            <br />
            Take the opportunity to acquaint yourself with its fascinating
            history chronicled by institutions like the British Museum as well
            as see how far it has come by simply riding the Tube and passing by
            celebrated landmarks like Buckingham Palace, Westminster Abbey, and
            marvels like Big Ben, the London Eye, and the Tower Bridge.
            <br />
            <br />
            You can also immerse yourself in its ever-evolving and impactful
            culture by visiting places like the National Gallery, the Tate
            Modern, West End, Abbey Road, the Royal Albert Hall, Oxford Street
            and the Westfield Shopping Centers, and areas referenced and seen in
            literature and film.
          </p>
        </div>

        <div class="col-lg-4">
          <div class="mapTourSingle2">
            <div class="map__content rounded-12 js-map-single">
              <!-- Assuming MyComponent is a Vue component, you can import it and use it directly -->
              <MyComponent />
            </div>

            <div class="mapTourSingle2__button">
              <button class="button -md -dark-1 bg-white fw-500 col-12">
                <i class="icon-pin text-20 mr-10"></i>
                See popular activities on the map
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="line mt-40 mb-40"></div>

      <div class="row y-gap-20">
        <div class="col-12">
          <h3 class="text-20 fw-500">Local weather</h3>
        </div>

        <div
          v-for="(weather, index) in weatherData"
          :key="index"
          class="col-lg-3 col-6"
        >
          <div>{{ weather.period }}</div>

          <div class="d-flex text-20 fw-500 pt-5">
            <span>{{ weather.high }}</span>
            <span class="ml-20">{{ weather.low }}</span>
          </div>
        </div>
      </div>

      <div class="line mt-40 mb-40"></div>

      <div class="row y-gap-20">
        <div class="col-12">
          <h3 class="text-20 fw-500">General info</h3>
        </div>

        <div class="col-lg-3 col-6">
          <div>Time Zone</div>
          <div class="fw-500">GMT +00:00</div>
          <div>3 hours behind</div>
        </div>

        <div class="col-lg-3 col-6">
          <div>Currency</div>
          <div class="fw-500">British Pound</div>
          <div>1USD = 0.76GBP</div>
        </div>

        <div class="col-lg-6 col-6">
          <div>Best time to visit</div>
          <div class="row x-gap-20 y-gap-20">
            <div class="col-auto">
              <div class="fw-500">JUN</div>
              <div>The Queen's Birthday</div>
            </div>
            <div class="col-auto">
              <div class="fw-500">DEC</div>
              <div>A colorful Christmas season</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { weatherData } from "@/data/weather";
// Import the Vue component if not already done
import MyComponent from "./Map";

// The rest of the script setup if needed
</script>

<style scoped>
/* Add your styles here */
</style>
