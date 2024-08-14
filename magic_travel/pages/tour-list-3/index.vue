<template>
  <main>
    <Header1 />
    <PageHeader />
    <div class="container mb-40">
      <TourTypes />
    </div>
    <TourList2 />
    <FooterOne />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Tour-list-3 || ViaTour - Travel & Tour Nuxtjs Template",
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import PageHeader from "@/components/tours/PageHeader";
import TourList2 from "@/components/tours/TourList2";
import TourTypes from "@/components/tours/TourTypes";
</script>
