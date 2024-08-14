<template>
  <main>
    <Header1 />
    <Hero1 :blog="blog" />
    <BlogSingle />
    <FooterOne />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Blog-single || ViaTour - Travel & Tour Nuxtjs Template",
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Hero1 from "@/components/blogs/Hero1";
import BlogSingle from "@/components/blogs/BlogSingle";
import { blogs } from "@/data/blogs";
const route = useRoute();
const id = route.params.id;

const blog = blogs.find((item) => item.id == id) || blogs[0];
</script>

<style lang="scss" scoped></style>
