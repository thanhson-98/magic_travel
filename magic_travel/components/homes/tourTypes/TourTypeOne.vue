<template>
  <section class="layout-pt-xl layout-pb-xl">
    <div class="container">
      <div class="row justify-between items-end y-gap-10">
        <div class="col-auto">
          <h2 data-aos="fade-up" data-aos-delay="" class="text-30 md:text-24">
            Popular things to do
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
        class="grid -type-1 pt-40 sm:pt-20"
      >
        <div
          v-for="(elm, i) in destinationsSix"
          :key="i"
          class="featureCard -type-1 -hover-1 overflow-hidden rounded-12 px-30 py-30"
        >
          <nuxt-link to="/tour-list-1" class="featureCard__link">
            <div class="featureCard__image">
              <nuxt-img
                :src="elm.imgSrc"
                width="780"
                height="780"
                layout="responsive"
                objectFit="cover"
                alt="image"
              />
            </div>

            <div class="featureCard__content">
              <h4 class="text-white">{{ elm.title }}</h4>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { destinationsSix } from "~/data/destinations";
</script>
