<template>
  <section class="layout-pt-xl layout-pb-xl">
    <div class="container">
      <div class="row y-gap-10 justify-between items-center y-gap-10">
        <div class="col-auto">
          <h2 data-aos="fade-up" data-aos-delay="" class="text-30">
            Featured Trips
          </h2>
        </div>

        <div ref="dropDownContainer" class="col-auto">
          <div
            :class="{ 'is-active': ddActive }"
            class="dropdown -type-1 js-dropdown js-form-dd"
            data-main-value=""
          >
            <div
              @click="() => setDdActive(!ddActive)"
              class="dropdown__button js-button"
            >
              <span class="js-title">{{
                travelStyle ? travelStyle : "By Travel Style"
              }}</span>
              <i class="icon-chevron-down ml-10"></i>
            </div>

            <div class="dropdown__menu js-menu-items">
              <div
                v-for="(elm, i) in travelStyles"
                :key="i"
                @click="
                  () => {
                    setTravelStyle(travelStyle == elm ? '' : travelStyle);
                    setDdActive(false);
                  }
                "
                class="dropdown__item"
              >
                {{ elm }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative pt-40 sm:pt-20">
        <div class="overflow-hidden js-section-slider">
          <Swiper
            :space-between="30"
            class="w-100"
            :navigation="{ prevEl: '.pbp1', nextEl: '.pbn1' }"
            :modules="[Navigation]"
            :breakpoints="{
              500: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }"
          >
            <SwiperSlide v-for="(elm, i) in filtered" :key="i">
              <nuxt-link
                :to="`/tour-single-1/${elm.id}`"
                class="tourCard -type-1 d-block bg-white"
              >
                <div class="tourCard__header">
                  <div class="tourCard__image ratio ratio-28:20">
                    <nuxt-img
                      :width="421"
                      :height="301"
                      :src="elm.imageSrc"
                      alt="image"
                      class="img-ratio rounded-12"
                    />
                  </div>

                  <button class="tourCard__favorite">
                    <i class="icon-heart"></i>
                  </button>
                </div>

                <div class="tourCard__content pt-10">
                  <div
                    class="tourCard__location d-flex items-center text-13 text-light-2"
                  >
                    <i class="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                    {{ elm.location }}
                  </div>

                  <h3 class="tourCard__title text-16 fw-500 mt-5">
                    <span>{{ elm.title }}</span>
                  </h3>

                  <div class="tourCard__rating mt-5">
                    <div class="d-flex items-center">
                      <div class="d-flex x-gap-5 pr-10">
                        <Stars :star="elm.rating" />
                      </div>

                      <span class="text-dark-1 text-13">
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
              </nuxt-link>
            </SwiperSlide>
          </Swiper>
        </div>

        <div class="navAbsolute">
          <button class="navAbsolute__button bg-white js-slider1-prev pbp1">
            <i class="icon-arrow-left text-14"></i>
          </button>

          <button class="navAbsolute__button bg-white js-slider1-next pbn1">
            <i class="icon-arrow-right text-14"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watchEffect } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import Stars from "@/components/common/Stars";
import { filterTour } from "@/data/tours";

const ddActive = ref(false);
const travelStyle = ref("");
const travelStyles = ref(["Fast", "Steady", "Furious", "Grind"]);
const filtered = ref(filterTour);

const dropDownContainer = ref(null);

const setDdActive = (value) => {
  ddActive.value = value;
};

const setTravelStyle = (value) => {
  travelStyle.value = value;
};
watchEffect(() => {
  if (travelStyle.value) {
    filtered.value = filterTour.filter(
      (elm) => elm.spead === travelStyle.value,
    );
  } else {
    filtered.value = filterTour;
  }
});

onMounted(() => {
  const handleClick = (event) => {
    if (
      dropDownContainer.value &&
      !dropDownContainer.value.contains(event.target)
    ) {
      setDdActive(false);
    }
  };

  document.addEventListener("click", handleClick);

  onBeforeUnmount(() => {
    document.removeEventListener("click", handleClick);
  });
});
</script>
