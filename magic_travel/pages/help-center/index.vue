<template>
  <main>
    <Header1 />
    <Hero />
    <Activity />
    <Faq />
    <FooterOne />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Help center || ViaTour - Travel & Tour Nuxtjs Template",
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});

import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Activity from "@/components/pages/helpCenter/Activity";
import Faq from "@/components/pages/helpCenter/Faq";
import Hero from "@/components/pages/helpCenter/Hero";
</script>

<style lang="scss" scoped></style>
