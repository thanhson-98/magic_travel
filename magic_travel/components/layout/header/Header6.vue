<template>
  <header
    :class="{
      header: true,
      '-type-7': true,
      'js-header': true,
      '-is-sticky': addClass,
    }"
  >
    <div class="header__container container">
      <div class="headerMobile__left">
        <button class="header__menuBtn js-menu-button" @click="openMobileMenu">
          <i class="icon-main-menu text-white"></i>
        </button>
      </div>

      <div class="header__left xl:d-none text-white">
        <HeaderSerch white="true" />
      </div>

      <div class="header__center">
        <div class="header__logo">
          <nuxt-link to="/" class="header__logo">
            <nuxt-img
              width="167"
              height="32"
              src="/img/general/logo-light.svg"
              alt="logo icon"
            />
          </nuxt-link>
        </div>
      </div>

      <div class="headerMobile__right">
        <button @click="() => pageNavigate('/tour-list-1')" class="d-flex">
          <i class="icon-search text-white text-18"></i>
        </button>

        <button @click="() => pageNavigate('/login')" class="d-flex ml-20">
          <i class="icon-person text-white text-18"></i>
        </button>
      </div>

      <div class="header__right">
        <div class="text-white">
          <Currency
            parentClass="headerDropdown -hover-light text-white js-form-dd"
          />
        </div>

        <nuxt-link to="/register" class="text-white ml-10"> Sign up </nuxt-link>

        <nuxt-link
          to="/login"
          class="button -sm -dark-1 bg-white rounded-200 ml-30"
        >
          Log in
        </nuxt-link>

        <button
          class="header__menuBtn ml-30 js-menu-button"
          @click="openMobileMenu"
        >
          <i class="icon-main-menu text-white"></i>
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

import Currency from "../components/Currency.vue";
import MobileMenu from "../components/MobileMenu.vue";
import { useRouter } from "vue-router";
import Menu from "../components/Menu.vue";
import HeaderSerch from "../components/HeaderSerch.vue";

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
