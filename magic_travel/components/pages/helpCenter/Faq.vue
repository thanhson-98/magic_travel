<template>
  <section class="layout-pt-xl layout-pb-xl">
    <div class="container">
      <div class="row justify-center text-center">
        <div class="col-auto">
          <h2 class="text-30 md:text-24">Frequently Asked Questions</h2>
        </div>
      </div>

      <div class="row justify-center pt-40">
        <div class="col-xl-8 col-lg-10">
          <div class="accordion -simple row y-gap-20 js-accordion">
            <div v-for="(elm, i) in faqData" :key="i" class="col-12">
              <div
                :class="`accordion__item px-20 py-15 border-1 rounded-12 ${
                  currentActiveFaq === i ? 'is-active' : ''
                }`"
              >
                <div
                  class="accordion__button d-flex items-center justify-between"
                  @click="toggleFaq(i)"
                >
                  <div class="button text-16 text-dark-1">
                    {{ elm.question }}
                  </div>
                  <div
                    class="accordion__icon size-30 flex-center bg-light-2 rounded-full"
                  >
                    <i class="icon-plus"></i>
                    <i class="icon-minus"></i>
                  </div>
                </div>
                <div
                  class="accordion__content"
                  :style="{ maxHeight: currentActiveFaq === i ? '150px' : '0' }"
                >
                  <div class="pt-20">
                    <p>{{ elm.answer }}</p>
                  </div>
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
import { ref } from "vue";
import { faqData } from "@/data/tourSingleContent";

const currentActiveFaq = ref(0);

const toggleFaq = (index) => {
  currentActiveFaq.value = currentActiveFaq.value === index ? -1 : index;
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
