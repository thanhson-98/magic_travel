<template>
  <section class="layout-pt-xl layout-pb-xl">
    <div class="container">
      <div data-aos="fade-up" data-aos-delay="" class="row y-gap-30">
        <div v-for="(elm, i) in featuresSix" :key="i" class="col-lg-4 col-md-6">
          <div class="featureCard -type-3 -style-2">
            <div class="featureCard__image">
              <nuxt-img
                :width="630"
                :height="401"
                :src="elm.imageSrc"
                alt="image"
              />
            </div>

            <div class="featureCard__content">
              <div class="text-white">{{ elm.description }}</div>
              <h4 class="text-24 text-white fw-700 mt-5">
                {{ elm.title.split(" ").slice(0, 2).join(" ") }}
                <br />
                {{ elm.title.split(" ").slice(2).join(" ") }}
              </h4>

              <button class="button -md -accent-1 bg-white">
                <nuxt-link to="/tour-list-1">
                  See activities
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
import { featuresSix } from "@/data/features";
</script>
