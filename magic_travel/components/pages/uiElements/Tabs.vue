<template>
  <div class="col-lg-6">
    <div class="text-22 fw-500">Tabs</div>

    <!-- Tab Set 1 -->
    <div class="tabs -pills-3 pt-30 js-tabs">
      <div class="tabs__controls row x-gap-10 y-gap-10 js-tabs-controls">
        <div
          v-for="(elm, i) in tab1"
          :key="i"
          class="col-auto"
          @click="setActiveTabOne(i)"
        >
          <button
            :class="[
              'tabs__button',
              'fw-500',
              'rounded-200',
              'js-tabs-button',
              i === activeTabOne ? 'is-tab-el-active' : '',
            ]"
          >
            {{ elm }}
          </button>
        </div>
      </div>

      <div class="tabs__content pt-15 js-tabs-content">
        <div :class="['tabs__pane', '-tab-item-1', 'is-tab-el-active']">
          <p v-if="tabContent[activeTabOne]">
            <span v-for="(elm, i) in tabContent[activeTabOne]" :key="i">
              {{ elm }}
              <br />
              <br />
            </span>
          </p>
        </div>
      </div>
    </div>

    <!-- Tab Set 2 -->
    <div class="tabs -underline-2 pt-60 lg:pt-40 sm:pt-30 js-tabs">
      <div
        class="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls"
      >
        <div
          v-for="(elm, i) in tab2"
          :key="i"
          class="col-auto"
          @click="setActiveTabTwo(i)"
        >
          <button
            :class="[
              'tabs__button',
              'fw-500',
              'px-5',
              'pb-5',
              'lg:pb-0',
              'js-tabs-button',
              activeTabTwo === i ? 'is-tab-el-active' : '',
            ]"
          >
            {{ elm }}
          </button>
        </div>
      </div>

      <div class="tabs__content pt-20 js-tabs-content">
        <div :class="['tabs__pane', '-tab-item-1', 'is-tab-el-active']">
          <p v-if="tabContent[activeTabTwo]">
            <span v-for="(elm, i) in tabContent[activeTabTwo]" :key="i">
              {{ elm }}
              <br />
              <br />
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTabOne = ref(0);
const activeTabTwo = ref(0);
import { tab1, tab2, tabContent } from "@/data/uiElements";

const setActiveTabOne = (index) => {
  activeTabOne.value = index;
};

const setActiveTabTwo = (index) => {
  activeTabTwo.value = index;
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
