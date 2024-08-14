<template>
  <header
    :class="{
      header: true,
      '-type-9': true,
      'js-header': true,
      '-is-sticky': addClass,
    }"
  >
    <div class="header__container container">
      <div class="headerMobile__left">
        <button @click="openMobileMenu" class="header__menuBtn js-menu-button">
          <i class="icon-main-menu text-white"></i>
        </button>
      </div>

      <div class="header__left">
        <div class="header__logo">
          <nuxt-link to="/" class="header__logo">
            <nuxt-img
              width="167"
              height="32"
              src="/img/general/logo-light.svg"
              alt="logo icon"
            />
          </nuxt-link>

          <div class="text-white">
            <Menu />
          </div>
        </div>
      </div>

      <div class="headerMobile__right">
        <button @click="() => pageNavigate('/tour-list-1')" class="d-flex">
          <i class="icon-search text-18 text-white"></i>
        </button>

        <button @click="() => pageNavigate('/login')" class="d-flex ml-20">
          <i class="icon-person text-18 text-white"></i>
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
          class="button -sm -outline-white text-white rounded-200 ml-30"
        >
          Log in
        </nuxt-link>

        <nuxt-link
          to="/login"
          class="button size-42 -outline-white text-white rounded-200 ml-20"
        >
          <i class="icon-search text-18"></i>
        </nuxt-link>
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
