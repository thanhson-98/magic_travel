<template>
  <section class="relative layout-pt-xl layout-pb-xl lg:pt-0">
    <div class="sectionBg -type-2">
      <div class="bg-accent-1-05 rounded-24"></div>
      <nuxt-img
        width="717"
        height="700"
        src="/img/about/3/1.jpg"
        alt="image"
        class="rounded-24"
        data-aos="fade-up"
        data-aos-delay=""
      />
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xl-4 offset-xl-1 col-lg-5">
          <h2 data-aos="fade-up" data-aos-delay="" class="text-30 md:text-24">
            Why choose
            <br />
            Tourz
          </h2>

          <div
            data-aos="fade-up"
            data-aos-delay=""
            class="row y-gap-30 pt-60 sm:pt-30"
          >
            <div v-for="(elm, i) in featuresFour" :key="i" class="col-12">
              <div class="featureIcon -type-1 d-flex">
                <div class="featureIcon__icon size-50">
                  <nuxt-img
                    width="60"
                    height="60"
                    :src="elm.iconSrc"
                    alt="icon"
                  />
                </div>

                <div class="ml-30">
                  <h3 class="featureIcon__title text-18 fw-500">
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
