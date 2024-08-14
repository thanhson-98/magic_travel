<template>
  <section class="hero -type-5">
    <div class="hero__bg">
      <nuxt-img
        width="1920"
        height="760"
        src="/img/hero/5/bg.png"
        alt="background"
      />
    </div>

    <div class="hero__image">
      <nuxt-img
        width="40"
        height="760"
        src="/img/hero/5/shape.svg"
        alt="image"
      />
      <nuxt-img width="716" height="760" src="/img/hero/5/1.jpg" alt="image" />
      <nuxt-img
        width="760"
        height="40"
        src="/img/hero/5/mobile.svg"
        alt="image"
      />
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="hero__content">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              class="hero__subtitle mb-10"
            >
              Search, compare and book 15,000+ multiday tours all over the
              world.
            </div>

            <h1 data-aos="fade-up" data-aos-delay="300" class="hero__title">
              Search Your Next
              <br class="md:d-none" />
              <span class="text-accent-2">Holiday</span>
            </h1>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              class="hero__filter mt-60 md:mt-30"
            >
              <div
                ref="dropDownContainer"
                class="searchForm -type-1 shadow-1 rounded-200"
              >
                <div class="searchForm__form">
                  <div class="searchFormItem js-select-control js-form-dd">
                    <div
                      class="searchFormItem__button"
                      @click="toggleDropdown('location')"
                    >
                      <div
                        class="searchFormItem__icon size-50 rounded-12 border-1 flex-center"
                      >
                        <i class="text-20 icon-pin"></i>
                      </div>
                      <div class="searchFormItem__content">
                        <h5>Where</h5>
                        <div class="js-select-control-chosen">
                          {{ location ? location : "Search destinations" }}
                        </div>
                      </div>
                    </div>

                    <Location
                      @setLocation="setLocation"
                      :active="currentActiveDD === 'location'"
                    />
                  </div>

                  <div
                    class="searchFormItem js-select-control js-form-dd js-calendar"
                  >
                    <div
                      class="searchFormItem__button"
                      @click="toggleDropdown('calender')"
                    >
                      <div
                        class="searchFormItem__icon size-50 rounded-12 border-1 flex-center"
                      >
                        <i class="text-20 icon-calendar"></i>
                      </div>
                      <div class="searchFormItem__content">
                        <h5>When</h5>
                        <div>
                          <span class="js-first-date">
                            <Calender
                              :active="currentActiveDD === 'calender'"
                            />
                          </span>
                          <span class="js-last-date"></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="searchFormItem js-select-control js-form-dd">
                    <div
                      class="searchFormItem__button"
                      @click="toggleDropdown('tourType')"
                    >
                      <div
                        class="searchFormItem__icon size-50 rounded-12 border-1 flex-center"
                      >
                        <i class="text-20 icon-flag"></i>
                      </div>
                      <div class="searchFormItem__content">
                        <h5>Tour Type</h5>
                        <div class="js-select-control-chosen">
                          {{ tourType ? tourType : "All tour" }}
                        </div>
                      </div>
                    </div>

                    <TourType
                      @setTourType="setTourType"
                      :active="currentActiveDD === 'tourType'"
                    />
                  </div>
                </div>

                <div class="searchForm__button">
                  <button
                    @click="searchTour"
                    class="button -dark-1 bg-accent-2 rounded-200 text-white"
                  >
                    <i class="icon-search text-16 mr-10"></i>
                    Search
                  </button>
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
import { ref, onMounted, onUnmounted } from "vue";

import Location from "@/components/common/dropdownSearch/Location.vue";
import TourType from "@/components/common/dropdownSearch/TourType.vue";
import Calender from "@/components/common/dropdownSearch/Calender.vue";

import { useRouter } from "vue-router";
const router = useRouter();

const currentActiveDD = ref("");
const location = ref("");
const tourType = ref("");
const dropDownContainer = ref(null);

watch([location, tourType], () => {
  currentActiveDD.value = "";
});

const toggleDropdown = (dropdown) => {
  currentActiveDD.value = currentActiveDD.value === dropdown ? "" : dropdown;
};

const handleClick = (event) => {
  if (
    dropDownContainer.value &&
    !dropDownContainer.value.contains(event.target)
  ) {
    currentActiveDD.value = "";
  }
};

const setLocation = (locat) => {
  location.value = location.value == locat ? "" : locat;
};
const setTourType = (value) => {
  tourType.value = tourType.value == value ? "" : value;
};

onMounted(() => {
  document.addEventListener("click", handleClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClick);
});

const searchTour = () => {
  // Your logic for searching tour here
  router.push("/tour-list-1");
};
</script>
