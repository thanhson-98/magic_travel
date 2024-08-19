<template>
    <header :class="{
        header: true,
        '-type-1': true,
        'js-header': true,
        '-is-sticky': addClass,
    }">
        <div class="header__container container">
            <div class="headerMobile__left">
                <button @click="openMobileMenu" class="header__menuBtn js-menu-button">
                    <i class="icon-main-menu"></i>
                </button>
            </div>

            <div class="header__logo">
                <router-link to="/" class="header__logo">
                    <nuxt-img width="180" height="40" src="/img/general/logo.png" alt="logo icon" />
                </router-link>

                <!-- <div class="xl:d-none ml-30">
            <HeaderSerch />
          </div> -->
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
                <router-link to="/about" class="mr-10"> Về chúng tôi </router-link>
                <DomesticMenu />
                <ForeignMenu />

                <router-link to="/contact" class="ml-10"> Liên hệ</router-link>

                <button @click="openMobileMenu" class="header__menuBtn ml-30 js-menu-button">
                    <i class="icon-main-menu"></i>
                </button>
            </div>
        </div>
    </header>
    <MobileMenu :mobileMenuOpen="mobileMenuOpen" @setMobileMenuOpen="setMobileMenuOpen" />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import DomesticMenu from "../components/DomesticMenu.vue";
import ForeignMenu from "../components/ForeignMenu.vue";
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