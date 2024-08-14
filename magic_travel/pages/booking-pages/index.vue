<template>
  <main>
    <Header1 />
    <BookingPages />
    <FooterOne />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Booking Pages || ViaTour - Travel & Tour Nuxtjs Template",
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import BookingPages from "@/components/pages/BookingPages";
</script>

<style lang="scss" scoped></style>
