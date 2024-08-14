<template>
  <section class="cta -type-1">
    <div class="cta__bg">
      <nuxt-img
        src="/img/cta/14/bg.png"
        width="1530"
        height="500"
        alt="image"
      />
    </div>

    <div class="container">
      <div class="row justify-between">
        <div class="col-xl-5 col-lg-6">
          <div class="cta__content">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              class="text-40 md:text-24 lh-13 text-white"
            >
              Get 5% off your 1st
              <br class="lg:d-none" />
              app booking
            </h2>

            <p data-aos="fade-up" data-aos-delay="" class="mt-10 text-white">
              Booking's better on the app. Use promo code
              <br class="lg:d-none" />
              "TourBooking" to save!
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay=""
              class="text-18 text-white mt-40 md:mt-20"
            >
              Get a magic link sent to your email
            </div>

            <div data-aos="fade-up" data-aos-delay="" class="mt-10">
              <div class="singleInput -type-2 row x-gap-10 y-gap-10">
                <div class="col-md-auto col-12">
                  <input type="email" placeholder="Email" class="" />
                </div>
                <div class="col-md-auto col-12">
                  <button
                    class="button -md -accent-1 bg-white col-12 text-accent-2"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-right" data-aos-delay="" class="col-lg-6">
          <div class="cta__image">
            <nuxt-img
              src="/img/cta/14/1.png"
              width="667"
              height="500"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
