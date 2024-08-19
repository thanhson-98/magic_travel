<template>
  <main>
    <Header />
    <PageHeader />
    <TourList1 />
    <Footer />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Danh mục || Magic Travel",
  description: "Magic Travel - Travel & Tour",
});
import Footer from "@/components/layout/footers/FooterFive";
import Header from "@/components/layout/header/Header";
import PageHeader from "@/components/tours/PageHeader.vue";
import TourList1 from "@/components/tours/TourList1.vue";
</script>
