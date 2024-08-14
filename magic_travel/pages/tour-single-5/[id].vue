<template>
  <main>
    <Header1 />
    <PageHeader />

    <SingleFive :tour="tour" />
    <TourSlider />
    <FooterOne />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Tour-single-5 || ViaTour - Travel & Tour Nuxtjs Template",
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});

import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import PageHeader from "@/components/tourSingle/PageHeader";
import TourSlider from "@/components/tourSingle/TourSlider";
import SingleFive from "@/components/tourSingle/pages/SingleFive";
import { allTour } from "@/data/tours";
const route = useRoute();
const id = route.params.id;
const tour = allTour.find((item) => item.id == id) || allTour[0];
</script>

<style lang="scss" scoped></style>
