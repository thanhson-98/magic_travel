<template>
  <section class="layout-pt-xl layout-pb-xl">
    <div class="container">
      <div class="row y-gap-10 justify-between items-center y-gap-10">
        <div ref="dropDownContainer" class="col-auto">
          <h2 class="text-30 md:text-24">
            Best of
            <div
              class="dropdown -type-list js-dropdown js-form-dd"
              :class="{ 'is-active': ddActive }"
              data-main-value="london"
            >
              <div
                class="dropdown__button text-light-7 js-button"
                @click="toggleDropdown"
              >
                <span style="margin-left: 8px" class="js-title">
                  {{ currentLocation }}
                </span>
                <i class="icon-chevron-down ml-5 text-18"></i>
              </div>

              <div class="dropdown__menu text-16 fw-500 border-1 js-menu-items">
                <div
                  v-for="(location, index) in ddlocations"
                  :key="index"
                  @click="selectLocation(location)"
                  class="dropdown__item"
                >
                  {{ location }}
                </div>
              </div>
            </div>
          </h2>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay=""
        class="row y-gap-30 pt-40 sm:pt-20"
      >
        <div
          v-for="(elm, i) in filteredTourData"
          :key="i"
          class="col-lg-3 col-md-6"
        >
          <a
            href="#"
            class="tourCard -type-1 d-block border-1 bg-white hover-shadow-1 overflow-hidden rounded-12 bg-white -hover-shadow"
          >
            <div class="tourCard__header">
              <div class="tourCard__image ratio ratio-28:20">
                <nuxt-img
                  width="421"
                  height="301"
                  :src="elm.imageSrc"
                  :alt="elm.title"
                  class="img-ratio"
                />
              </div>

              <button class="tourCard__favorite">
                <i class="icon-heart"></i>
              </button>
            </div>

            <div class="tourCard__content px-20 py-10">
              <div
                class="tourCard__location d-flex items-center text-13 text-light-2"
              >
                <i class="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                {{ elm.location }}
              </div>

              <h3 class="tourCard__title text-16 fw-500 mt-5">
                <span>{{ elm.title }}</span>
              </h3>

              <div class="tourCard__rating text-13 mt-5">
                <div class="d-flex items-center">
                  <div class="d-flex x-gap-5">
                    <Stars :star="elm.rating" />
                  </div>

                  <span class="text-dark-1 ml-10">
                    {{ elm.rating }} ({{ elm.ratingCount }})
                  </span>
                </div>
              </div>

              <div
                class="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10"
              >
                <div class="d-flex items-center">
                  <i class="icon-clock text-16 mr-5"></i>
                  {{ elm.duration }}
                </div>

                <div>
                  From <span class="text-16 fw-500">${{ elm.price }}</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Stars from "~/components/common/Stars.vue";
import { tourData } from "~/data/tours";

const ddActive = ref(false);
const currentLocation = ref("New York");
const ddlocations = ref(["New York", "London", "Paris"]);

const filteredTourData = computed(() =>
  tourData
    .filter((elm) =>
      elm.location.toLowerCase().includes(currentLocation.value.toLowerCase()),
    )
    .slice(0, 4),
);

const dropDownContainer = ref(null);

const toggleDropdown = () => {
  ddActive.value = !ddActive.value;
};

const selectLocation = (location) => {
  currentLocation.value = location;
  ddActive.value = false;
};

const handleClick = (event) => {
  if (
    dropDownContainer.value &&
    !dropDownContainer.value.contains(event.target)
  ) {
    ddActive.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClick);
});
</script>
