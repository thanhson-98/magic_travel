<template>
  <section class="hero -type-1">
    <div class="hero__bg">
      <nuxt-img width="1800" height="700" src="/img/hero/1/1.png" alt="image" />
      <nuxt-img
        src="/img/hero/1/shape.svg"
        width="1800"
        height="40"
        alt="image"
        style="height: auto"
      />
    </div>

    <div class="container">
      <div class="row justify-center">
        <div class="col-xl-8 col-lg-10">
          <div class="hero__content">
            <h1 data-aos="fade-up" data-aos-delay="100" class="hero__title">
              Your world of joy
            </h1>

            <p data-aos="fade-up" data-aos-delay="300" class="hero__text">
              From local escapes to far-flung adventures, find what makes you
              happy anytime, anywhere
            </p>

            <div
              ref="dropDownContainer"
              data-aos="fade-up"
              data-aos-delay="300"
              class="mt-60 md:mt-35"
            >
              <div class="searchForm -type-1">
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
                    class="button -dark-1 bg-accent-1 text-white"
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
  router.push("/tour-list-1");
};
</script>
