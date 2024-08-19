  <template>
    <main>
      <Header />
      <Hero1 />
      <DiscoverOffer/>
      <TrendingDestinations/>
      <ComboTour />
      <FeaturesThree />
      <Footer />
    </main>
  </template>
  
  <script setup>
  useSeoMeta({
    title: "Trang chủ || Magic Travel",
    description: "Magic Travel - Travel & Tour",
  });
  import FeaturesThree from "@/components/homes/features/FeaturesThree";
  import Hero1 from "@/components/homes/heros/Hero1";
  import ComboTour from "@/components/homes/tours/Tour1";
  import Footer from "@/components/layout/footers/FooterFive";
  import Header from "~/components/layout/header/Header.vue";
  import TrendingDestinations from "@/components/homes/destinations/TrendingDestinations";
  import DiscoverOffer from "@/components/homes/others/DiscoverOffer";
  </script>
  