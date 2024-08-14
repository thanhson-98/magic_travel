<template>
  <section class="pageHeader -type-2">
    <div class="pageHeader__bg">
      <nuxt-img
        :width="1800"
        :height="350"
        src="/img/pageHeader/2.jpg"
        alt="image"
      />
      <nuxt-img
        :width="1800"
        :height="40"
        style="height: auto"
        src="/img/hero/1/shape.svg"
        alt="image"
      />
    </div>

    <div class="container">
      <div class="row justify-center">
        <div class="col-12">
          <div class="pageHeader__content">
            <h1 class="pageHeader__title">Welcome to the Help Center</h1>

            <p class="pageHeader__text">
              Lorem ipsum is placeholder text commonly used in the site.
            </p>

            <div class="pageHeader__search">
              <input type="text" placeholder="Search for a topic" />
              <button>
                <i class="icon-search text-15 text-white"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
