<template>
  <main>
    <Header6 />
    <Hero7 />
    <TourSlider4 />
    <TrendingDestinations />
    <Banner />
    <TopAttractions />
    <div class="bg-accent-1-05">
      <TestimonialOne />
    </div>
    <PopulerTours />
    <Banner11 />
    <ArticlesOne />
    <FooterFive />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Home-7 || ViaTour - Travel & Tour Nuxtjs Template",
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});
import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import Banner from "@/components/homes/banners/Banner";
import Banner11 from "@/components/homes/banners/Banner11";
import TopAttractions from "@/components/homes/destinations/TopAttractions";
import TrendingDestinations from "@/components/homes/destinations/TrendingDestinations";
import Hero7 from "@/components/homes/heros/Hero7";

import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import PopulerTours from "@/components/homes/tours/PopulerTours";
import TourSlider4 from "@/components/homes/tours/TourSlider4";
import FooterFive from "@/components/layout/footers/FooterFive";
import Header6 from "@/components/layout/header/Header6";
</script>
