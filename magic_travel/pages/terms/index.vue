<template>
  <main>
    <Header1 />
    <PageHeader />
    <Content />
    <FooterOne />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Terms || ViaTour - Travel & Tour Nuxtjs Template",
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Content from "@/components/pages/terms/Content";
import PageHeader from "@/components/pages/terms/PageHeader";
</script>

<style lang="scss" scoped></style>
