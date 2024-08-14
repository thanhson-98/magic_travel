<template>
  <main>
    <Header1 />
    <Login />
    <FooterOne />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Login || ViaTour - Travel & Tour Nuxtjs Template",
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Login from "@/components/pages/Login";
</script>

<style lang="scss" scoped></style>
