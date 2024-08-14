<template>
  <section class="layout-pt-lg">
    <div class="container">
      <div class="row y-gap-30 mobile-css-slider-2">
        <div
          v-for="(elm, i) in destinations12"
          :key="i"
          class="col-lg-2 col-md-3 col-6"
        >
          <a href="#" class="-hover-opacity">
            <div class="ratio ratio-19:22">
              <nuxt-img
                width="284"
                height="326"
                :src="elm.imgSrc"
                alt="image"
                class="img-ratio rounded-12"
              />
            </div>

            <div class="mt-20">
              <h4 class="text-18 fw-500 lh-11">{{ elm.name }}</h4>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { destinations12 } from "@/data/destinations";
</script>
