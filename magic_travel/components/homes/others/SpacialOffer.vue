<template>
  <section class="layout-pt-xl">
    <div class="container">
      <div class="row justify-between items-end y-gap-10">
        <div class="col-auto">
          <h2 data-aos="fade-up" data-aos-delay="" class="text-30 md:text-24">
            Special Offers
          </h2>
        </div>

        <div class="col-auto">
          <nuxt-link
            to="/tour-list-1"
            data-aos="fade-left"
            data-aos-delay=""
            class="buttonArrow d-flex items-center"
          >
            <span>See all</span>
            <i class="icon-arrow-top-right text-16 ml-10"></i>
          </nuxt-link>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay=""
        class="specialCardGrid row y-gap-30 md:y-gap-20 pt-40 sm:pt-20"
      >
        <div
          v-for="(elm, i) in specialOffers"
          :key="i"
          class="col-xl-4 col-lg-6 col-md-6"
        >
          <div class="specialCard">
            <div class="specialCard__image">
              <nuxt-img
                width="615"
                height="300"
                :src="elm.imgSrc"
                alt="image"
              />
            </div>

            <div class="specialCard__content">
              <div class="specialCard__subtitle">{{ elm.subtitle }}</div>
              <h3 class="specialCard__title">
                {{ elm.title.split(" ").slice(0, 3).join(" ") }}
                <br />
                {{ elm.title.split(" ").slice(3).join(" ") }}
              </h3>
              <div v-if="elm.text" class="specialCard__text">
                {{ elm.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { specialOffers } from "@/data/offer";
</script>
