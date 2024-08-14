<template>
  <main>
    <Header1 />
    <section class="nopage mt-header">
      <div class="container">
        <div class="row y-gap-30 justify-between items-center">
          <div class="col-xl-6 col-lg-6">
            <nuxt-img
              width="629"
              height="481"
              src="/img/404/1.svg"
              alt="image"
            />
          </div>

          <div class="col-xl-5 col-lg-6">
            <div class="nopage__content pr-30 lg:pr-0">
              <h1>40<span class="text-accent-1">4</span></h1>
              <h2 class="text-30 md:text-24 fw-700">
                Oops! It looks like you're lost.
              </h2>
              <p>
                The page you're looking for isn't available. Try to search again
                or use the go to.
              </p>

              <nuxt-link to="/">
                <button class="button -md -dark-1 bg-accent-1 text-white mt-25">
                  Go back to homepage
                  <i class="icon-arrow-top-right ml-10"></i>
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterOne />
  </main>
</template>

<script setup>
useSeoMeta({
  title: `Page not found || ViaTour - Travel & Tour Nuxtjs Template`,
  description: "ViaTour - Travel & Tour Nuxtjs Template",
});
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
</script>
