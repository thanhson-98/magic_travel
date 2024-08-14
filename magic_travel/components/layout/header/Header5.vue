<template>
  <header
    :class="`header -type-1 -page-6 js-header  ${addClass ? '-is-sticky' : ''}`"
  >
    <div class="header__container container">
      <div class="headerMobile__left">
        <button @click="openMobileMenu" class="header__menuBtn js-menu-button">
          <i class="icon-main-menu"></i>
        </button>
      </div>

      <div class="header__logo">
        <nuxt-link to="/" class="header__logo">
          <nuxt-img
            width="167"
            height="32"
            src="/img/general/logo-1.svg"
            alt="logo icon"
          />
        </nuxt-link>

        <div class="xl:d-none ml-30">
          <HeaderSerch />
        </div>
      </div>

      <div class="headerMobile__right">
        <button @click="() => pageNavigate('/tour-list-1')" class="d-flex">
          <i class="icon-search text-18"></i>
        </button>

        <button @click="() => pageNavigate('/login')" class="d-flex ml-20">
          <i class="icon-person text-18"></i>
        </button>
      </div>

      <div class="header__right">
        <Destinations />
        <Activities />
        <Currency />
        <nuxt-link to="/register" class="ml-10"> Sign up </nuxt-link>

        <nuxt-link
          to="/login"
          class="button -sm -dark-1 bg-accent-1 rounded-200 text-white ml-30"
        >
          Log in
        </nuxt-link>

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

import Currency from "../components/Currency";
import MobileMenu from "../components/MobileMenu";
import { useRouter } from "vue-router";
import HeaderSerch from "../components/HeaderSerch.vue";
import Destinations from "../components/Destinations.vue";
import Activities from "../components/Activities.vue";

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

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

router.afterEach(() => {
  setMobileMenuOpen(false);
});
</script>
