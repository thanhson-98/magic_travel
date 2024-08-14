<template>
  <section class="relative">
    <div class="sectionBg -type-1">
      <div class="bg-accent-1-05 rounded-24"></div>
      <nuxt-img
        width="717"
        height="700"
        src="/img/about/3/1.jpg"
        alt="image"
        class="rounded-24"
      />
    </div>

    <div class="container">
      <div class="aboutSection -type-1">
        <div class="row">
          <div class="col-xl offset-xl-5 col-lg-7 offset-lg-5">
            <div class="aboutSection__text">
              <h2
                data-aos="fade-up"
                data-aos-delay=""
                class="text-30 md:text-24 fw-700"
              >
                Why choose Tourz
              </h2>
              <p data-aos="fade-up" data-aos-delay="">
                Most viewed and all-time top-selling services
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl offset-xl-2 col-lg-7 offset-lg-5">
            <div data-aos="fade-up" data-aos-delay="" class="row y-gap-30">
              <div
                v-for="(elm, i) in featuresFour"
                :key="i"
                class="col-xl-4 col-lg-6 col-sm-6"
              >
                <div
                  class="featureIcon -type-1 px-40 py-40 rounded-24 bg-white shadow-1"
                >
                  <div class="featureIcon__icon">
                    <nuxt-img
                      width="60"
                      height="60"
                      :src="elm.iconSrc"
                      alt="icon"
                    />
                  </div>

                  <h3 class="featureIcon__title text-18 fw-500 mt-30">
                    {{ elm.title }}
                  </h3>
                  <p class="featureIcon__text mt-10">{{ elm.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { featuresFour } from "@/data/features";
</script>
