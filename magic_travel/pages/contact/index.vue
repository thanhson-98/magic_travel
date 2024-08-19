<template>
  <main style="max-width: 100vw; overflow: hidden">
    <Header />
    <Map />
    <Locations />
    <ContactForm />
    <Footer />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Liên hệ || Magic Travel",
  description: "Magic Travel - Travel & Tour",
});
import Footer from "@/components/layout/footers/FooterFive";
import Header from "~/components/layout/header/Header";
import ContactForm from "@/components/pages/contact/ContactForm";
import Locations from "@/components/pages/contact/Locations";
import Map from "@/components/pages/contact/Map";
</script>

<style lang="scss" scoped></style>
