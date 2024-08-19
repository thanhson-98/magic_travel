<template>
  <section class="layout-pt-xl layout-pb-xl">
    <div class="container">
      <div class="row text-center justify-center y-gap-10">
        <div class="col-auto text-center" data-aos="fade-up" data-aos-delay="">
          <h2 class="text-30">
            Điểm đến ưa thích
          </h2>
          <p class="featureIcon__text mt-10">Hãy chọn một điểm đến du lịch nổi tiếng dưới đây để khám phá các chuyến đi
            độc quyền của chúng tôi với mức giá vô cùng hợp lý.</p>
        </div>
      </div>

      <!-- Tab Set 1 -->
      <div class="tabs -pills-3 pt-30 js-tabs">
        <div class="tabs__controls row x-gap-10 y-gap-10 js-tabs-controls justify-center" data-aos="fade-up" data-aos-delay="">
          <div v-for="(elm, i) in tabs" :key="i" class="col-auto" @click="setActiveTabOne(i)">
            <button :class="[
              'tabs__button',
              'fw-500',
              'rounded-200',
              'js-tabs-button',
              i === activeTabOne ? 'is-tab-el-active' : '',
            ]">
              {{ elm }}
            </button>
          </div>
        </div>
        <div class="tabs__content pt-15 js-tabs-content">
          <div :class="['tabs__pane', '-tab-item-1', 'is-tab-el-active']">
            <div v-if="tabContent[activeTabOne]" data-aos="fade-up" data-aos-delay="" class="grid -type-4 pt-40 sm:pt-20">
              <nuxt-link v-for="(elm, i) in tabContent[activeTabOne]" :key="i" to="/tour-list-1"
                class="featureCard -type-1 overflow-hidden rounded-12 px-30 py-30 -hover-image-scale">
                <div class="featureCard__image -hover-image-scale__image">
                  <nuxt-img width="780" height="780" style="object-fit: cover" :src="elm.imgSrc" alt="image" />
                </div>
                <div class="featureCard__content">
                  <h4 class="text-white">{{ elm.title }}</h4>
                </div>
              </nuxt-link>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { tabs, tabContent } from "@/data/destinations";
import { destinationsSeven } from "@/data/destinations";
const activeTabOne = ref(0);
const setActiveTabOne = (index) => {
  activeTabOne.value = index;
};
</script>
