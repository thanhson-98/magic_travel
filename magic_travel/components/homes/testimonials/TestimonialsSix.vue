<template>
  <section class="layout-pt-xl layout-pb-xl bg-accent-1-05">
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <h2 data-aos="fade-up" data-aos-delay="" class="text-30 md:text-24">
            What our Travelers are saying
          </h2>
        </div>
      </div>

      <div class="row y-gap-30 pt-40 md:pt-30">
        <div
          v-for="(elm, i) in testimonials"
          :key="i"
          class="col-lg-4 col-md-6"
        >
          <div class="bg-white py-30 px-30 rounded-12">
            <h4 class="text-18 fw-500 text-accent-1">{{ elm.comment }}</h4>
            <div class="fw-500 mt-15">“{{ elm.desc }}”</div>

            <div class="line mt-20 mb-20"></div>

            <div class="d-flex items-center">
              <nuxt-img
                width="105"
                height="106"
                :src="elm.img"
                alt="image"
                class="size-60 object-cover rounded-full"
              />

              <div class="ml-20">
                <div class="fw-500 lh-15">{{ elm.name }}</div>
                <div class="text-14 lh-15">{{ elm.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay=""
        class="row y-gap-30 pt-40 md:pt-30"
      >
        <div v-for="(elm, i) in features" :key="i" class="col-lg-4 col-md-6">
          <h4 class="text-30 fw-700">{{ elm.value }}</h4>
          <div class="mt-5">{{ elm.description }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { testimonialsSix } from "@/data/testimonials";
import { featuresSeven } from "@/data/features";

const testimonials = ref(testimonialsSix);
const features = ref(featuresSeven);
</script>
