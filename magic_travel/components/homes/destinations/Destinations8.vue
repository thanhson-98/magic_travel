<template>
  <section class="layout-pt-xl">
    <div class="container">
      <div class="row y-gap-10 justify-between items-end">
        <div class="col-auto">
          <h2 data-aos="fade-up" data-aos-delay="" class="text-30">
            Trending destinations
          </h2>
        </div>

        <div class="col-auto">
          <nuxt-link
            to="/tour-list-1"
            data-aos="fade-right"
            data-aos-delay=""
            class="buttonArrow d-flex items-center"
          >
            <span>See all</span>
            <i class="icon-arrow-top-right text-16 ml-10"></i>
          </nuxt-link>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay=""
        class="row y-gap-30 md:y-gap-20 pt-40 sm:pt-20"
      >
        <div
          v-for="(elm, i) in destinations11"
          :key="i"
          class="col-xl-3 col-lg-4 col-md-6"
        >
          <nuxt-link to="/tour-list-1" class="featureCard -type-9">
            <div class="featureCard__image">
              <nuxt-img
                width="165"
                height="165"
                :src="elm.imageSrc"
                alt="image"
              />
            </div>

            <div class="featureCard__content ml-20">
              <h4 class="text-18 fw-500">{{ elm.name }}</h4>
              <div class="text-14 lh-13 mt-5">{{ elm.toursCount }}+ Tours</div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { destinations11 } from "@/data/destinations";
</script>
