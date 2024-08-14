<template>
  <main>
    <Header1 />
    <Hero />
    <Information />
    <Banner />
    <FeaturesOne />
    <div class="mt-60">
      <FeturesTwo />
    </div>
    <TestimonialOne />
    <BannerOne />
    <Team />
    <BrandsOne />
    <FooterOne />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "About || ViaTour - Travel & Tour Nuxtjs Template",
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});
import BannerOne from "@/components/homes/banners/BannerOne";
import BrandsOne from "@/components/homes/brands/BrandsOne";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import FeturesTwo from "@/components/homes/features/FeturesTwo";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Banner from "@/components/pages/about/Banner";
import Hero from "@/components/pages/about/Hero";
import Information from "@/components/pages/about/Information";
import Team from "@/components/pages/about/Team";
</script>

<style lang="scss" scoped></style>
