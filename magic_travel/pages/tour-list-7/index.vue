<template>
  <main>
    <Header1 />
    <Hero1 />

    <Destinations />
    <TourSlder />

    <TourList4 />

    <FooterOne />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Tour-list-7 || ViaTour - Travel & Tour Nuxtjs Template",
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});
import Hero1 from "@/components/homes/heros/Hero1";
import TourSlderOne from "@/components/homes/tours/TourSlderOne";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Destinations from "@/components/tours/Destinations";
import TourList4 from "@/components/tours/TourList4";
import TourSlder from "@/components/tours/TourSlider";
</script>
