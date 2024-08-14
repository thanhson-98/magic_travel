<template>
  <section class="hero -type-8">
    <div class="hero__bg">
      <nuxt-img
        width="1920"
        height="860"
        src="/img/hero/8/1.jpg"
        alt="background"
      />
    </div>

    <div class="container">
      <div class="row justify-center">
        <div class="col-lg-8 col-md-10">
          <div class="hero__content text-center">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              class="hero__filter mb-60 md:mb-0 md:mt-30"
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
                    class="button -dark-1 bg-accent-2 size-60 rounded-200 text-white"
                  >
                    <i class="icon-search text-16"></i>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h1 class="hero__title text-white">Find Next PlaceTo Visit</h1>

              <div class="hero__text text-white mt-10">
                Discover amzaing places at exclusive deals.Eat, Shop, Visit
                <br class="lg:d-none" />
                interesting places around the world.
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
