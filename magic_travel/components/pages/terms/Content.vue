<template>
  <section class="layout-pt-md layout-pb-lg">
    <div class="container">
      <div class="tabs -terms js-tabs">
        <div class="row y-gap-30">
          <div class="col-lg-3">
            <div class="tabs__controls row y-gap-10 js-tabs-controls">
              <div
                v-for="(tab, index) in tabs"
                :key="index"
                class="col-12"
                @click="setCurrentTab(tab)"
              >
                <button
                  class="tabs__button relative pl-20 js-tabs-button"
                  :class="{ 'is-tab-el-active': tab === currentTab }"
                >
                  {{ tab }}
                </button>
              </div>
            </div>
          </div>

          <div class="col-lg-9">
            <div class="tabs__content js-tabs-content">
              <div
                id="termsContainer"
                :style="{ transition: '0.1s', opacity: currentTabOpacity }"
                :class="{ '-tab-item-1': currentTab === tabs[0] }"
              >
                <h2 class="text-20 fw-500">1. Introduction</h2>
                <p class="mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
                  nascetur morbi nisl, mi, in semper metus porttitor non. Augue
                  nunc amet fringilla sit. Fringilla eget arcu sodales sed a,
                  parturient fermentum amet scelerisque. Amet purus urna,
                  dictumst aliquet aliquam natoque non, morbi pretium. Integer
                  amet fermentum nibh viverra mollis consectetur arcu, ultrices
                  dolor. Gravida purus arcu viverra eget. Aliquet tincidunt
                  dignissim aliquam tempor nec id. Habitant suscipit sit semper
                  duis odio amet, at.
                  <br />
                  <br />
                  Massa ultricies a arcu velit eget gravida purus ultrices eget.
                  Orci, fames eu facilisi justo. Lacus netus a at sed justo vel
                  leo leo pellentesque. Nulla ut laoreet luctus cum turpis et
                  amet ac viverra. Vitae neque orci dui eu ac tincidunt. Egestas
                  placerat egestas netus nec velit gravida consectetur laoreet
                  vitae. Velit sed enim habitant habitant non diam. Semper
                  tellus turpis tempus ac leo tempor. Ultricies amet, habitasse
                  adipiscing bibendum consequat amet, sed. Id convallis
                  suspendisse vitae, lacinia mattis cursus montes, dui. Tortor
                  lobortis dignissim eget egestas. Eget enim auctor nunc eget
                  mattis sollicitudin senectus diam. Tincidunt morbi egestas
                  dignissim eget id aliquam.
                </p>

                <h2 class="text-20 fw-500 mt-60 md:mt-30">
                  2. Your Use of the Zenmart Sites
                </h2>
                <p class="mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
                  nascetur morbi nisl, mi, in semper metus porttitor non. Augue
                  nunc amet fringilla sit. Fringilla eget arcu sodales sed a,
                  parturient fermentum amet scelerisque. Amet purus urna,
                  dictumst aliquet aliquam natoque non, morbi pretium. Integer
                  amet fermentum nibh viverra mollis consectetur arcu, ultrices
                  dolor. Gravida purus arcu viverra eget. Aliquet tincidunt
                  dignissim aliquam tempor nec id. Habitant suscipit sit semper
                  duis odio amet, at.
                  <br />
                  <br />
                  Massa ultricies a arcu velit eget gravida purus ultrices eget.
                  Orci, fames eu facilisi justo. Lacus netus a at sed justo vel
                  leo leo pellentesque. Nulla ut laoreet luctus cum turpis et
                  amet ac viverra. Vitae neque orci dui eu ac tincidunt. Egestas
                  placerat egestas netus nec velit gravida consectetur laoreet
                  vitae. Velit sed enim habitant habitant non diam. Semper
                  tellus turpis tempus ac leo tempor. Ultricies amet, habitasse
                  adipiscing bibendum consequat amet, sed. Id convallis
                  suspendisse vitae, lacinia mattis cursus montes, dui. Tortor
                  lobortis dignissim eget egestas. Eget enim auctor nunc eget
                  mattis sollicitudin senectus diam. Tincidunt morbi egestas
                  dignissim eget id aliquam.
                </p>

                <h2 class="text-20 fw-500 mt-60 md:mt-30">
                  3. Content and Ideas
                </h2>
                <p class="mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
                  nascetur morbi nisl, mi, in semper metus porttitor non. Augue
                  nunc amet fringilla sit. Fringilla eget arcu sodales sed a,
                  parturient fermentum amet scelerisque. Amet purus urna,
                  dictumst aliquet aliquam natoque non, morbi pretium. Integer
                  amet fermentum nibh viverra mollis consectetur arcu, ultrices
                  dolor. Gravida purus arcu viverra eget. Aliquet tincidunt
                  dignissim aliquam tempor nec id. Habitant suscipit sit semper
                  duis odio amet, at.
                  <br />
                  <br />
                  Massa ultricies a arcu velit eget gravida purus ultrices eget.
                  Orci, fames eu facilisi justo. Lacus netus a at sed justo vel
                  leo leo pellentesque. Nulla ut laoreet luctus cum turpis et
                  amet ac viverra. Vitae neque orci dui eu ac tincidunt. Egestas
                  placerat egestas netus nec velit gravida consectetur laoreet
                  vitae. Velit sed enim habitant habitant non diam. Semper
                  tellus turpis tempus ac leo tempor. Ultricies amet, habitasse
                  adipiscing bibendum consequat amet, sed. Id convallis
                  suspendisse vitae, lacinia mattis cursus montes, dui. Tortor
                  lobortis dignissim eget egestas. Eget enim auctor nunc eget
                  mattis sollicitudin senectus diam. Tincidunt morbi egestas
                  dignissim eget id aliquam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";

const tabs = [
  "Account & Payments",
  "Manage Orders",
  "Returns & Refunds",
  "COVID-19",
  "Other",
];

const currentTab = ref("Account & Payments");
const currentTabOpacity = ref(1);
const setCurrentTab = (val) => {
  currentTab.value = val;
};
watch(currentTab, () => {
  const termsContainer = document.getElementById("termsContainer");
  if (termsContainer) {
    currentTabOpacity.value = 0;
    setTimeout(() => {
      currentTabOpacity.value = 1;
    }, 300); // Change the time (in milliseconds) as needed
  }
});
</script>

<style scoped>
/* Add your styles here */
</style>
