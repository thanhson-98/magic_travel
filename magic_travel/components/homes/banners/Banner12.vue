<template>
  <section class="cta -type-4">
    <div class="container">
      <div class="cta__content">
        <div class="row justify-between">
          <div class="col-xl-7 col-lg-8">
            <h2 data-aos="fade-up" data-aos-delay="" class="text-24 lh-13">
              7 Reasons to Plan a Trip to Lowa in {{ new Date().getFullYear() }}
            </h2>

            <p data-aos="fade-up" data-aos-delay="" class="mt-10">
              River cruises, railroad adventures, and Frank Lloyd Wright
              architecture.
            </p>

            <button
              data-aos="fade-right"
              data-aos-delay=""
              class="button -md -accent-1 bg-dark-1 text-white mt-10"
            >
              Read Now
              <i class="icon-arrow-top-right ml-10"></i>
            </button>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="cta__image">
            <nuxt-img
              src="/img/cta/11/1.jpg"
              width="730"
              height="375"
              alt="image"
            />
            <nuxt-img
              src="/img/cta/11/shape.svg"
              width="21"
              height="250"
              style="width: auto; height: 100%"
              alt="image"
            />
            <nuxt-img
              src="/img/cta/11/mobileShape.svg"
              width="254"
              height="23"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
