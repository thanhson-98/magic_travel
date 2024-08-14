<template>
  <main>
    <Header1 />
    <Hero />
    <TourList5 />
    <FooterOne />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Tour-list-6 || ViaTour - Travel & Tour Nuxtjs Template",
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Hero from "@/components/tours/Hero";
import TourList5 from "@/components/tours/TourList5";
</script>
