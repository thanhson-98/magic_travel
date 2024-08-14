<template>
  <section class="cta -type-2">
    <div class="cta__bg">
      <nuxt-img width="1530" height="600" src="/img/cta/2/bg.png" alt="image" />

      <div class="cta__image">
        <nuxt-img width="750" height="600" src="/img/cta/2/1.png" alt="image" />
        <nuxt-img
          width="40"
          height="600"
          src="/img/cta/2/shape.svg"
          alt="image"
        />
        <nuxt-img
          width="390"
          height="35"
          src="/img/cta/2/shape2.svg"
          alt="image"
        />
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-7">
          <div class="cta__content">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              class="text-40 md:text-30 lh-13"
            >
              Grab up to <span class="text-accent-1">35% off</span>
              <br class="lg:d-none" />
              on your favorite
              <br class="lg:d-none" />
              Destination
            </h2>

            <p data-aos="fade-up" data-aos-delay="" class="mt-10">
              Limited time offer, don't miss the opportunity
            </p>

            <div class="mt-30 md:mt-20">
              <button
                data-aos="fade-right"
                data-aos-delay=""
                class="button -md -dark-1 bg-accent-1 text-white"
              >
                <nuxt-link to="/tour-list-1">
                  Book Now
                  <i class="icon-arrow-top-right ml-10 text-16"></i>
                </nuxt-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
