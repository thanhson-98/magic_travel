<template>
  <main>
    <Header1 />
    <PageHeader />
    <UiElements />
    <FooterOne />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "UI-elements || ViaTour - Travel & Tour Nuxtjs Template",
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import UiElements from "@/components/pages/uiElements";
import PageHeader from "@/components/pages/uiElements/PageHeader";
</script>

<style lang="scss" scoped></style>
