<template>
  <main>
    <Header1 />
    <Hero />
    <SpacialOffer />
    <TourSlider />
    <TourList1 />
    <TestimonialOne />
    <Information />
    <ArticlesOne />
    <FooterOne />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Destinations || ViaTour - Travel & Tour Nuxtjs Template",
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});

import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import SpacialOffer from "@/components/homes/others/SpacialOffer";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Hero from "@/components/pages/destinations/Hero";
import Information from "@/components/pages/destinations/Information";
import TourList1 from "@/components/pages/destinations/TourList";
import TourSlider from "@/components/pages/destinations/TourSlider";
</script>

<style lang="scss" scoped></style>
