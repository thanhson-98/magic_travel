<template>
  <div class="sidebar -type-1 rounded-12">
    <div class="sidebar__content">
      <div class="sidebar__item">
        <div class="accordion -simple-1 js-accordion">
          <div
            :class="`accordion__item js-accordion-item-active ${
              ddActives.includes('tourtype') ? 'is-active' : ''
            }`"
          >
            <div
              class="accordion__button d-flex items-center justify-between"
              @click="
                () => {
                  ddActives = ddActives.includes('tourtype')
                    ? [...ddActives.filter((elm) => elm != 'tourtype')]
                    : [...ddActives, 'tourtype'];
                }
              "
            >
              <h5 class="text-18 fw-500">Tour Type</h5>

              <div class="accordion__icon flex-center">
                <i class="icon-chevron-down"></i>
              </div>
            </div>

            <div
              class="accordion__content"
              :style="ddActives.includes('tourtype') ? 'max-height: 300px' : ''"
            >
              <div class="pt-15">
                <div class="d-flex flex-column y-gap-15">
                  <div v-for="(elm, i) in toursTypes" :key="i">
                    <div class="d-flex items-center">
                      <div class="form-checkbox">
                        <input type="checkbox" name="name" />
                        <div class="form-checkbox__mark">
                          <div class="form-checkbox__icon">
                            <nuxt-img
                              width="10"
                              height="8"
                              src="/img/icons/check.svg"
                              alt="icon"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="lh-11 ml-10">{{ elm }}</div>
                    </div>
                  </div>
                </div>

                <a href="#" class="d-flex text-15 fw-500 text-accent-2 mt-15">
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sidebar__item">
        <div class="accordion -simple-1 js-accordion">
          <div
            :class="`accordion__item js-accordion-item-active ${
              ddActives.includes('pricerange') ? 'is-active' : ''
            }`"
          >
            <div
              class="accordion__button mb-10 d-flex items-center justify-between"
              @click="
                () => {
                  ddActives = ddActives.includes('pricerange')
                    ? [...ddActives.filter((elm) => elm != 'pricerange')]
                    : [...ddActives, 'pricerange'];
                }
              "
            >
              <h5 class="text-18 fw-500">Filter Price</h5>

              <div class="accordion__icon flex-center">
                <i class="icon-chevron-down"></i>
              </div>
            </div>

            <div
              class="accordion__content"
              :style="
                ddActives.includes('pricerange') ? 'max-height: 300px' : ''
              "
            >
              <div class="pt-15">
                <RangeSlider />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sidebar__item">
        <div class="accordion -simple-1 js-accordion">
          <div
            :class="`accordion__item js-accordion-item-active ${
              ddActives.includes('duration') ? 'is-active' : ''
            }`"
          >
            <div
              class="accordion__button d-flex items-center justify-between"
              @click="
                () => {
                  ddActives = ddActives.includes('duration')
                    ? [...ddActives.filter((elm) => elm != 'duration')]
                    : [...ddActives, 'duration'];
                }
              "
            >
              <h5 class="text-18 fw-500">Duration</h5>

              <div class="accordion__icon flex-center">
                <i class="icon-chevron-down"></i>
              </div>
            </div>

            <div
              class="accordion__content"
              :style="ddActives.includes('duration') ? 'max-height: 300px' : ''"
            >
              <div class="pt-15">
                <div class="d-flex flex-column y-gap-15">
                  <div v-for="(elm, i) in durations" :key="i">
                    <div class="d-flex items-center">
                      <div class="form-checkbox">
                        <input type="checkbox" name="name" />
                        <div class="form-checkbox__mark">
                          <div class="form-checkbox__icon">
                            <nuxt-img
                              width="10"
                              height="8"
                              src="/img/icons/check.svg"
                              alt="icon"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="lh-11 ml-10">{{ elm }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sidebar__item">
        <div class="accordion -simple-1 js-accordion">
          <div
            :class="`accordion__item js-accordion-item-active ${
              ddActives.includes('language') ? 'is-active' : ''
            }`"
          >
            <div
              class="accordion__button d-flex items-center justify-between"
              @click="
                () => {
                  ddActives = ddActives.includes('language')
                    ? [...ddActives.filter((elm) => elm != 'language')]
                    : [...ddActives, 'language'];
                }
              "
            >
              <h5 class="text-18 fw-500">Language</h5>

              <div class="accordion__icon flex-center">
                <i class="icon-chevron-down"></i>
              </div>
            </div>

            <div
              class="accordion__content"
              :style="ddActives.includes('language') ? 'max-height: 300px' : ''"
            >
              <div class="pt-15">
                <div class="d-flex flex-column y-gap-15">
                  <div v-for="(elm, i) in languages" :key="i">
                    <div class="d-flex items-center">
                      <div class="form-checkbox">
                        <input type="checkbox" name="name" />
                        <div class="form-checkbox__mark">
                          <div class="form-checkbox__icon">
                            <nuxt-img
                              width="10"
                              height="8"
                              src="/img/icons/check.svg"
                              alt="icon"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="lh-11 ml-10">{{ elm }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sidebar__item">
        <div class="accordion -simple-1 js-accordion">
          <div
            :class="`accordion__item js-accordion-item-active ${
              ddActives.includes('rating') ? 'is-active' : ''
            }`"
          >
            <div
              class="accordion__button d-flex items-center justify-between"
              @click="
                () => {
                  ddActives = ddActives.includes('rating')
                    ? [...ddActives.filter((elm) => elm != 'rating')]
                    : [...ddActives, 'rating'];
                }
              "
            >
              <h5 class="text-18 fw-500">Rating</h5>

              <div class="accordion__icon flex-center">
                <i class="icon-chevron-down"></i>
              </div>
            </div>

            <div
              class="accordion__content"
              :style="ddActives.includes('rating') ? 'max-height: 300px' : ''"
            >
              <div class="pt-15">
                <div class="d-flex flex-column y-gap-15">
                  <div v-for="(elm, i) in rating" :key="i" class="d-flex">
                    <div class="form-checkbox">
                      <input type="checkbox" name="rating" />
                      <div class="form-checkbox__mark">
                        <div class="form-checkbox__icon">
                          <nuxt-img
                            width="10"
                            height="8"
                            src="/img/icons/check.svg"
                            alt="icon"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="d-flex x-gap-5 ml-10">
                      <Stars :star="elm" :font="13" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sidebar__item">
        <div class="accordion -simple-1 js-accordion">
          <div
            :class="`accordion__item js-accordion-item-active ${
              ddActives.includes('features') ? 'is-active' : ''
            }`"
          >
            <div
              class="accordion__button d-flex items-center justify-between"
              @click="
                () => {
                  ddActives = ddActives.includes('features')
                    ? [...ddActives.filter((elm) => elm != 'features')]
                    : [...ddActives, 'features'];
                }
              "
            >
              <h5 class="text-18 fw-500">Specials</h5>

              <div class="accordion__icon flex-center">
                <i class="icon-chevron-down"></i>
              </div>
            </div>

            <div
              class="accordion__content"
              :style="ddActives.includes('features') ? 'max-height: 300px' : ''"
            >
              <div class="pt-15">
                <div class="d-flex flex-column y-gap-15">
                  <div v-for="(elm, i) in features" :key="i">
                    <div class="d-flex items-center">
                      <div class="form-checkbox">
                        <input type="checkbox" name="name" />
                        <div class="form-checkbox__mark">
                          <div class="form-checkbox__icon">
                            <nuxt-img
                              width="10"
                              height="8"
                              src="/img/icons/check.svg"
                              alt="icon"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="lh-11 ml-10">{{ elm }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Calender from "../common/dropdownSearch/Calender";
import {
  durations,
  languages,
  toursTypes,
  features,
  rating,
} from "@/data/tourFilteringOptions";
import RangeSlider from "../common/RangeSlider";
import Stars from "../common/Stars";
const ddActives = ref(["tourtype"]);
</script>
