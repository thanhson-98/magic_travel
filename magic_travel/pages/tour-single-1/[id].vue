<template>
  <main>
    <Header />
    <PageHeader />
    <SingleOne :tour="tour" />
    <TourSlider />
    <FooterOne />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Chi tiết Tour",
  description: "Magic Travel",
});
import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/header/Header";
import PageHeader from "@/components/tourSingle/PageHeader";
import TourSlider from "@/components/tourSingle/TourSlider.vue";
import SingleOne from "@/components/tourSingle/pages/SingleOne";
import { allTour } from "@/data/tours";
const route = useRoute();
const id = route.params.id;
const tour = allTour.find((item) => item.id == id) || allTour[0];
</script>
