<template>
  <footer class="footer -type-1 -light bg-accent-2">
    <div class="footer__main">
      <div class="container">
        <div class="footer__info">
          <div class="row y-gap-20 justify-between">
            <div class="col-auto">
              <div class="row y-gap-20 items-center">
                <div class="col-auto">
                  <i class="icon-headphone text-50 text-white"></i>
                </div>

                <div class="col-auto">
                  <div class="text-20 fw-500 text-white">
                    Speak to our expert at
                    <span class="text-white">1-800-453-6744</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-auto">
              <div class="footerSocials">
                <div class="footerSocials__title text-white">Follow Us</div>

                <div class="footerSocials__icons text-white">
                  <Socials />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-white-15-top">
        <div class="container">
          <div class="footer__content">
            <div class="row y-gap-40 justify-between">
              <div class="col-lg-4 col-md-6">
                <h4 class="text-20 fw-500 text-white">Contact</h4>

                <div class="y-gap-10 mt-20 text-white">
                  <a class="d-block" href="#">
                    328 Queensberry Street, North Melbourne VIC3051, Australia.
                  </a>
                  <a class="d-block" href="#"> hi@viatours.com </a>
                </div>
              </div>

              <FooterLinksTwo />

              <div class="col-lg-3 col-md-6">
                <h4 class="text-20 fw-500 text-white">Newsletter</h4>
                <p class="text-white mt-20">
                  Subscribe to the free newsletter and stay up to date
                </p>

                <div class="footer__newsletter">
                  <input type="Email" placeholder="Your email address" />
                  <button>Send</button>
                </div>

                <h4 class="text-20 fw-500 text-white mt-30">Mobile Apps</h4>

                <div class="mt-10">
                  <a class="d-flex items-center text-white" href="#">
                    <i class="icon-apple text-16 mr-10"></i>
                    iOS App
                  </a>

                  <a class="d-flex items-center text-white mt-10" href="#">
                    <i class="icon-android text-16 mr-10"></i>
                    Android App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-white-15-top">
      <div class="container">
        <div class="footer__bottom">
          <div class="row y-gap-5 justify-between items-center">
            <div class="col-auto text-white">
              <div>© Copyright Viatours {{ new Date().getFullYear() }}</div>
            </div>

            <div class="col-auto">
              <div class="footer__images d-flex items-center x-gap-10">
                <Paymentcards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Socials from "../components/Socials";
import FooterLinksTwo from "../components/FooterLinksTwo";
import Paymentcards from "../components/Paymentcards";
</script>
