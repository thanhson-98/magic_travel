<template>
  <main>
    <div style="border-bottom: 1px solid #e7e6e6">
      <Header1 />
    </div>
    <Style1 />
    <Style2 />
    <Style3 />
    <Style4 />
    <Style5 />
    <Style6 />
    <FooterOne />
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Tour-list-10 || ViaTour - Travel & Tour Nuxtjs Template",
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Style1 from "@/components/tours/ListStyle.jsx/Style1";
import Style2 from "@/components/tours/ListStyle.jsx/Style2";
import Style3 from "@/components/tours/ListStyle.jsx/Style3";
import Style4 from "@/components/tours/ListStyle.jsx/Style4";
import Style5 from "@/components/tours/ListStyle.jsx/Style5";
import Style6 from "@/components/tours/ListStyle.jsx/Style6";
</script>
