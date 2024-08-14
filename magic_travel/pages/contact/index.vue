<template>
  <main style="max-width: 100vw; overflow: hidden">
    <Header1 />
    <Map />
    <Locations />
    <ContactForm />

    <FooterOne />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Contact || ViaTour - Travel & Tour Nuxtjs Template",
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import ContactForm from "@/components/pages/contact/ContactForm";
import Locations from "@/components/pages/contact/Locations";
import Map from "@/components/pages/contact/Map";
</script>

<style lang="scss" scoped></style>
