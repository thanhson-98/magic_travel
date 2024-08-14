<template>
  <main>
    <Header4 />
    <Hero5 />
    <BrandsThree />
    <TourTypesTwo />
    <FeaturedTrips />
    <BannerEight />
    <DestinationsFive />
    <TestimonialsFour />
    <ArticlesOne />
    <Banner9 />
    <FooterThree />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Home-5 || ViaTour - Travel & Tour Nuxtjs Template",
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});
import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import Banner9 from "@/components/homes/banners/Banner9";
import BannerEight from "@/components/homes/banners/BannerEight";
import BrandsThree from "@/components/homes/brands/BrandsThree";
import DestinationsFive from "@/components/homes/destinations/DestinationsFive";
import Hero5 from "@/components/homes/heros/Hero5";
import TestimonialsFour from "@/components/homes/testimonials/TestimonialsFour";
import TourTypesTwo from "@/components/homes/tourTypes/TourTypesTwo";
import FeaturedTrips from "@/components/homes/tours/FeaturedTrips";
import FooterThree from "@/components/layout/footers/FooterThree";
import Header4 from "@/components/layout/header/Header4";
</script>
