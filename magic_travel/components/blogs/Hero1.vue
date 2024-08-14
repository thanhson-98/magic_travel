<template>
  <section class="hero -type-1 -min-2">
    <div class="hero__bg">
      <nuxt-img :width="1800" height="500" src="/img/hero/1.png" alt="image" />
      <nuxt-img
        width="1800"
        height="40"
        src="/img/hero/1/shape.svg"
        alt="image"
      />
    </div>

    <div class="container">
      <div class="row justify-center">
        <div class="col-xl-12">
          <div class="hero__content">
            <h1 class="hero__title">
              {{ blog?.title ? blog?.title : "Your guide to everywhere" }}
            </h1>

            <p class="hero__text">
              {{
                blog?.desc
                  ? blog?.desc
                  : `Find inspiration, guides and stories for wherever you're going
                Select a destination`
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(["blog"]);
</script>

<style lang="scss" scoped></style>
