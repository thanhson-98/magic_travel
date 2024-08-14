<template>
  <main>
    <Header1 />
    <Hero1 />

    <div class="mt-50">
      <TourList4 />
    </div>

    <FooterOne />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Tour-list-5 || ViaTour - Travel & Tour Nuxtjs Template",
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});
import Hero1 from "@/components/homes/heros/Hero1";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import TourList4 from "@/components/tours/TourList4";
</script>
