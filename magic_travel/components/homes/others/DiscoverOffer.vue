<template>
    <section class="layout-pt-xl layout-pb-xl bg-accent-1-05">
        <div class="container">
            <div class="tabs -pills-4 js-tabs">
                <div class="row y-gap-10 justify-between y-gap-10">
                    <div class="col-xl-9" data-aos="fade-left" data-aos-delay="">
                        <h2 class="text-30">
                            Khám phá
                        </h2>
                        <p class="featureIcon__text mt-10">Hãy tận hưởng trải nghiệm du lịch chuyên nghiệp, mang lại cho
                            bạn những khoảnh khắc tuyệt vời và nâng tầm cuộc sống. Chúng tôi cam kết mang đến những
                            chuyến đi đáng nhớ, giúp bạn khám phá thế giới theo cách hoàn hảo nhất.</p>
                    </div>

                    <div data-aos="fade-right" data-aos-delay="" class="col-xl-3">
                        <div class="d-flex mt-40 justify-end">
                            <button class="button -dark-1 rounded-full size-72 flex-center bg-white js-slider1-prev2">
                                <i class="icon-arrow-left text-20"></i>
                            </button>

                            <button
                                class="button -dark-1 rounded-full size-72 flex-center bg-white ml-10 js-slider1-next2">
                                <i class="icon-arrow-right text-20"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="tabs__content pt-40 sm:pt-20 js-tabs-content">
                    <div class="tabs__pane -tab-item-1 is-tab-el-active">
                        <div class="js-section-slider">
                            <div data-aos="fade-up" data-aos-delay="" class="swiper-wrapper overflow-visible">
                                <Swiper :space-between="30" class="w-100" :navigation="{
                                    prevEl: '.js-slider1-prev2',
                                    nextEl: '.js-slider1-next2',
                                }" :breakpoints="{
                                    500: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                    1200: { slidesPerView: 3 },
                                }" ref="swiper" :modules="[Navigation]">
                                    <SwiperSlide v-for="(elm, index) in specialOffers" :key="index">
                                        <nuxt-link :to="'/tour-single-1/' + elm.id">
                                            <div class="specialCard">
                                                <div class="specialCard__image">
                                                    <nuxt-img width="615" height="300" :src="elm.imgSrc" alt="image" />
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
                                        </nuxt-link>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { specialOffers } from "@/data/offer";
import { Navigation } from "swiper/modules";
</script>