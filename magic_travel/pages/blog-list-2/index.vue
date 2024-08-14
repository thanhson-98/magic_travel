<template>
  <main>
    <Header1 />
    <Hero1 />
    <BlogList2 />
    <FooterOne />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Blog-list-2 || ViaTour - Travel & Tour Nuxtjs Template",
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Hero1 from "@/components/blogs/Hero1";
import BlogList2 from "@/components/blogs/BlogList2";
</script>

<style lang="scss" scoped></style>
