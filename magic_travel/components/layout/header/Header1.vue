<template>
  <header
    :class="{
      header: true,
      '-type-1': true,
      'js-header': true,
      '-is-sticky': addClass,
    }"
  >
    <div class="header__container container">
      <div class="headerMobile__left">
        <button @click="openMobileMenu" class="header__menuBtn js-menu-button">
          <i class="icon-main-menu"></i>
        </button>
      </div>

      <div class="header__logo">
        <router-link to="/" class="header__logo">
          <nuxt-img
            width="167"
            height="32"
            src="/img/general/logo-1.svg"
            alt="logo icon"
          />
        </router-link>

        <div class="xl:d-none ml-30">
          <HeaderSerch />
        </div>
      </div>

      <div class="headerMobile__right">
        <button @click="toggleSearch" class="d-flex">
          <i class="icon-search text-18"></i>
        </button>

        <button @click="openPerson" class="d-flex ml-20">
          <i class="icon-person text-18"></i>
        </button>
      </div>

      <div class="header__right">
        <Destinations />
        <Activities />
        <Currency />
        <router-link to="/register" class="ml-10"> Sign up </router-link>

        <router-link
          to="/login"
          class="button -sm -dark-1 bg-accent-1 rounded-200 text-white ml-30"
        >
          Log in
        </router-link>

        <button
          @click="openMobileMenu"
          class="header__menuBtn ml-30 js-menu-button"
        >
          <i class="icon-main-menu"></i>
        </button>
      </div>
    </div>
  </header>
  <MobileMenu
    :mobileMenuOpen="mobileMenuOpen"
    @setMobileMenuOpen="setMobileMenuOpen"
  />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import HeaderSerch from "../components/HeaderSerch.vue";
import Destinations from "../components/Destinations.vue";
import Activities from "../components/Activities.vue";
import Currency from "../components/Currency.vue";
import MobileMenu from "../components/MobileMenu.vue";
import { useRouter } from "vue-router";

const addClass = ref(false);
const mobileMenuOpen = ref(false);
const router = useRouter();

const pageNavigate = (pageName) => {
  router.push(pageName);
};
const handleScroll = () => {
  addClass.value = window.scrollY >= 50;
};

const openMobileMenu = () => {
  mobileMenuOpen.value = true;
};

const setMobileMenuOpen = (value) => {
  mobileMenuOpen.value = value;
};

const toggleSearch = () => {
  pageNavigate("/tour-list-1");
};

const openPerson = () => {
  pageNavigate("/login");
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

router.afterEach(() => {
  // Close the mobile menu when the route changes
  setMobileMenuOpen(false);
});
</script>

<style scoped>
/* Your styles here */
</style>
