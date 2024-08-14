<template>
  <section class="layout-pt-xl layout-pb-xl bg-accent-1-05">
    <div class="container">
      <div class="row y-gap-30 items-center justify-between">
        <div class="col-xl-4 col-lg-5">
          <h2 data-aos="fade-up" data-aos-delay="" class="text-30 md:text-24">
            Popular things to do
          </h2>

          <p data-aos="fade-up" data-aos-delay="" class="mt-30 md:mt-10">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>

          <nuxt-link
            to="/tour-list-1"
            data-aos="fade-right"
            data-aos-delay=""
            class="button -md -dark-1 bg-accent-1 text-white mt-30 md:mt-20"
          >
            See All
            <i class="icon-arrow-top-right ml-10"></i>
          </nuxt-link>
        </div>

        <div class="col-xl-6 col-lg-7">
          <div data-aos="fade-up" data-aos-delay="" class="row y-gap-30">
            <div
              v-for="(elm, i) in featureCards"
              :key="i"
              class="col-md-4 col-6"
            >
              <a :href="elm.href" class="featureCard -type-5 -hover-accent-1">
                <div class="featureCard__icon">
                  <nuxt-img
                    :width="40"
                    :height="41"
                    :src="elm.imgSrc"
                    alt="image"
                  />
                </div>

                <h4 class="text-18 fw-500 mt-20">{{ elm.title }}</h4>
                <div class="lh-13 mt-5">{{ elm.tourCount }}+ Tours</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { featureCards } from "@/data/destinations";
</script>
