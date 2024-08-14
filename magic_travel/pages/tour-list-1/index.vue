<template>
  <main>
    <Header1 />
    <PageHeader />
    <TourList1 />
    <FooterOne />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Tour-list-1 || ViaTour - Travel & Tour Nuxtjs Template",
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import PageHeader from "@/components/tours/PageHeader";
import TourList1 from "@/components/tours/TourList1";
</script>
