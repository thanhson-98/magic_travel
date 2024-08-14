<template>
  <Header1 />
  <PageHeader />

  <SingleFour :tour="tour" />
  <TourSlider />
  <FooterOne />
</template>

<script setup>
useSeoMeta({
  title: "Tour-single-4 || ViaTour - Travel & Tour Nuxtjs Template",
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});

import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import PageHeader from "@/components/tourSingle/PageHeader";
import TourSlider from "@/components/tourSingle/TourSlider";
import SingleFour from "@/components/tourSingle/pages/SingleFour";
import { allTour } from "@/data/tours";
const route = useRoute();
const id = route.params.id;
const tour = allTour.find((item) => item.id == id) || allTour[0];
</script>

<style lang="scss" scoped></style>
