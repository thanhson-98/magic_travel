<template>
  <main>
    <Header1 />
    <PageHeader />

    <SingleTwo :tour="tour" />
    <TourSlider />
    <FooterOne />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Tour-single-2 || ViaTour - Travel & Tour Nuxtjs Template",
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import PageHeader from "@/components/tourSingle/PageHeader";
import TourSlider from "@/components/tourSingle/TourSlider";
import SingleTwo from "@/components/tourSingle/pages/SingleTwo";
import { allTour } from "@/data/tours";
const route = useRoute();
const id = route.params.id;
const tour = allTour.find((item) => item.id == id) || allTour[0];
</script>
