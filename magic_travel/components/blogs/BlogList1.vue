<template>
  <section class="layout-pt-md layout-pb-xl">
    <div class="container">
      <div class="tabs -pills-3 pt-30 js-tabs">
        <div
          class="tabs__controls row x-gap-10 y-gap-10 justify-center js-tabs-controls"
        >
          <div v-for="(elm, i) in continents" :key="i" class="col-auto">
            <button
              @click="setCurrentActiveTab(elm)"
              :class="`tabs__button fw-500 rounded-200 js-tabs-button ${
                currentActiveTab === elm ? 'is-tab-el-active' : ''
              }`"
              data-tab-target=".-tab-item-1"
            >
              {{ elm }}
            </button>
          </div>
        </div>

        <div class="tabs__content pt-30 js-tabs-content">
          <div class="tabs__pane -tab-item-1 is-tab-el-active">
            <div class="row y-gap-30">
              <div
                v-for="(elm, i) in filteredItems"
                :key="i"
                class="col-lg-4 col-md-6"
              >
                <nuxt-link
                  :to="`/blog-single/${elm.id}`"
                  class="blogCard -type-1"
                >
                  <div class="blogCard__image ratio ratio-41:30">
                    <nuxt-img
                      width="616"
                      height="451"
                      :src="elm.image"
                      alt="image"
                      class="img-ratio rounded-12"
                    />

                    <div v-if="elm.badge" class="blogCard__badge">
                      {{ elm.badge }}
                    </div>
                  </div>

                  <div class="blogCard__content mt-30">
                    <div class="blogCard__info text-14">
                      <div class="lh-13">{{ elm.date }}</div>
                      <div class="blogCard__line"></div>
                      <div class="lh-13">By {{ elm.author }}</div>
                    </div>

                    <h3 class="blogCard__title text-18 fw-500 mt-10">
                      {{ elm.title }}
                    </h3>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex justify-center flex-column mt-60">
        <Pagination />

        <div class="text-14 text-center mt-20">
          Showing results 1-30 of 1,415
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import Pagination from "../common/Pagination.vue";
import { blogs, continents } from "@/data/blogs";
const currentActiveTab = ref("All Guide");
const filteredItems = ref([]);

const setCurrentActiveTab = (tab) => {
  currentActiveTab.value = tab;
};

onMounted(() => {
  updateFilteredItems();
});

watch(currentActiveTab, () => {
  updateFilteredItems();
});

const updateFilteredItems = () => {
  if (currentActiveTab.value === "All Guide") {
    filteredItems.value = blogs;
  } else {
    filteredItems.value = blogs.filter(
      (elm) => elm.continent === currentActiveTab.value,
    );
  }
};
</script>
