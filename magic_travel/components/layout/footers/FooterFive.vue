<template>
  <footer class="footer -type-1 bg-accent-1-05">
    <div class="footer__main">
      <div class="container">
        <div class="footer__info">
          <div class="row y-gap-20 justify-between">
            <div class="col-auto">
              <div class="row y-gap-20 items-center">
                <div class="col-auto">
                  <i class="icon-headphone text-50"></i>
                </div>

                <div class="col-auto">
                  <div class="text-20 fw-500">
                    Hotline:
                    <span class="text-accent-1">1-800-453-6744</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-auto">
              <div class="footerSocials">
                <div class="footerSocials__title">Theo dõi chúng tôi</div>

                <div class="footerSocials__icons">
                  <Socials />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer__content">
          <div class="row y-gap-40 justify-between">
            <div class="col-lg-4 col-md-6">
              <h4 class="text-20 fw-500">Magic Travel</h4>

              <div class="y-gap-10 mt-20">
                <p class="d-block" href="#">
                  190 Pasteur, Phường Võ Thị Sáu, Quận 3, TP.HCM
                </p>
                <p class="d-block" href="#"> 
                  (+84 28) 3822 8898 </p>
                <p class="d-block" href="#"> (+84 28) 3829 9142 </p>
                <p class="d-block" href="#"> magictravel@gmail.com </p>
              </div>
            </div>

            <FooterLinks />

            <div class="col-lg-3 col-md-6">

              <h4 class="text-20 fw-500">Bản đồ</h4>
              <div class="map relative mt-30">
                      <Map />
                    </div>
              <h4 class="text-20 fw-500 mt-30">Mobile Apps</h4>

              <div class="mt-10">
                <a class="d-flex items-center" href="#">
                  <i class="icon-apple text-16 mr-10"></i>
                  iOS App
                </a>

                <a class="d-flex items-center mt-10" href="#">
                  <i class="icon-android text-16 mr-10"></i>
                  Android App
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="footer__bottom">
        <div class="row y-gap-5 justify-between items-center">
          <div class="col-auto">
            <div>© Copyright Magic Travel {{ new Date().getFullYear() }}</div>
          </div>

          <div class="col-auto">
            <div class="footer__images d-flex items-center x-gap-10">
              <Paymentcards />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Map from "~/components/tours/Map.vue";
import Socials from "../components/Socials";
import FooterLinks from "../components/FooterLinks";
import Paymentcards from "../components/Paymentcards";
</script>

<style scoped>
/* Add your scoped styles here */
</style>
