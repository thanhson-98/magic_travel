<template>
  <section class="layout-pt-xl layout-pb-xl">
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <h2 class="text-30">List Style v6</h2>
        </div>
      </div>

      <div class="row y-gap-30 pt-40 sm:pt-20">
        <div
          v-for="(elm, i) in tourDataTwo.slice(0, 2)"
          :key="i"
          class="col-md-9"
        >
          <div class="tourCard -type-2">
            <div class="tourCard__image">
              <nuxt-img
                width="420"
                height="390"
                :src="elm.imageSrc"
                alt="image"
              />

              <div v-if="elm.badgeText" class="tourCard__badge">
                <div
                  class="bg-accent-1 rounded-12 text-white lh-11 text-13 px-15 py-10"
                >
                  {{ elm.badgeText }}
                </div>
              </div>

              <div class="tourCard__favorite">
                <button
                  class="button -accent-1 size-35 bg-white rounded-full flex-center"
                >
                  <i class="icon-heart text-15"></i>
                </button>
              </div>
            </div>

            <div class="tourCard__content">
              <div class="tourCard__location">
                <i class="icon-pin"></i>
                {{ elm.location }}
              </div>

              <h3 class="tourCard__title mt-5">
                <span>{{ elm.title }}</span>
              </h3>

              <div class="d-flex items-center mt-5">
                <div class="d-flex items-center x-gap-5">
                  <Stars :star="elm.rating" :font="12" />
                </div>

                <div class="text-14 ml-10">
                  <span class="fw-500">{{ elm.rating }}</span> ({{
                    elm.ratingCount
                  }})
                </div>
              </div>

              <p class="tourCard__text mt-5">{{ elm.description }}</p>

              <div class="row x-gap-20 y-gap-5 pt-30">
                <div
                  v-for="(elm2, i2) in elm.features"
                  :key="i2"
                  class="col-auto"
                >
                  <div class="text-14 text-accent-1">
                    <i :class="`${elm2.icon} mr-10`"></i>
                    {{ elm2.name }}
                  </div>
                </div>
              </div>
            </div>

            <div class="tourCard__info">
              <div>
                <div class="d-flex items-center text-14">
                  <i class="icon-clock mr-10"></i>
                  {{ elm.duration }}
                </div>

                <div class="tourCard__price">
                  <div>${{ elm.fromPrice }}</div>

                  <div class="d-flex items-center">
                    From
                    <span class="text-20 fw-500 ml-5">${{ elm.price }}</span>
                  </div>
                </div>
              </div>

              <button class="button -outline-accent-1 text-accent-1">
                <nuxt-link :to="`/tour-single-1/${elm.id}`">
                  View Details
                  <i class="icon-arrow-top-right ml-10"></i>
                </nuxt-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { tourDataTwo } from "@/data/tours";

import Stars from "@/components/common/Stars.vue"; // Adjust the path based on your project structure
</script>
