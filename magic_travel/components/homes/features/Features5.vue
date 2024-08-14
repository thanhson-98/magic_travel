<template>
  <section class="layout-pt-xl layout-pb-xl relative">
    <div class="container">
      <div class="sectionBg">
        <nuxt-img
          width="1920"
          height="690"
          src="/img/about/2/bg.jpg"
          alt="image"
          class="img-ratio"
        />
      </div>

      <div class="row y-gap-30 justify-between items-center">
        <div class="col-lg-4 col-md-6">
          <h2
            data-aos="fade-up"
            data-aos-delay=""
            class="text-40 lh-13 text-white"
          >
            We Make
            <br class="md:d-none" />
            World Travel Easy
          </h2>

          <p data-aos="fade-up" data-aos-delay="" class="text-white mt-10">
            Traveling under your own power and at your own pace, you'll connect
            more meaningfully with your destination and have more fun!
          </p>

          <button
            data-aos="fade-right"
            data-aos-delay=""
            class="button -md -dark-1 bg-white text-accent-1 mt-60 md:mt-30"
          >
            <nuxt-link to="/tour-list-1">
              Explore Our Tours
              <i class="icon-arrow-top-right ml-10"></i>
            </nuxt-link>
          </button>
        </div>

        <div class="col-md-6">
          <div data-aos="fade-up" data-aos-delay="" class="featuresGrid">
            <div
              v-for="(elm, i) in featuresTwo"
              :key="i"
              class="featuresGrid__item px-40 py-40 text-center bg-white rounded-12"
            >
              <nuxt-img width="60" height="60" :src="elm.iconSrc" alt="icon" />
              <div class="text-40 fw-700 text-accent-1 mt-20 lh-14">
                {{ elm.value }}
              </div>
              <div>{{ elm.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { featuresTwo } from "@/data/features";
</script>
