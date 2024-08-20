<template>
  <main>
    <Header1 />
    <Hero1 />
    <BlogList1 />
    <FooterOne />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Blog-list-1 || ViaTour - Travel & Tour Nuxtjs Template",
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Hero1 from "@/components/blogs/Hero1";
import BlogList1 from "@/components/blogs/BlogList1.vue";
</script>

<style lang="scss" scoped></style>
