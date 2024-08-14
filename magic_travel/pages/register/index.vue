<template>
  <main>
    <Header1 />
    <Register />
    <FooterOne />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Register || ViaTour - Travel & Tour Nuxtjs Template",
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Register from "@/components/pages/Register";
</script>

<style lang="scss" scoped></style>
