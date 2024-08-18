<template>
  <section class="layout-pt-lg">
    <div class="container">
      <div class="row y-gap-30">
        <div
          v-for="(location, index) in locations"
          :key="index"
          class="col-xl-6"
        >
          <div class="px-30 text-center">
            <h3 class="text-30 md:text-24 fw-700">{{ location.title }}</h3>

            <div class="mt-20 md:mt-10">
              {{ location.address }}
              <br />
              <br />
              {{ location.contact }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const locations = [
  {
    id: 1,
    title: "Chi nhánh 1",
    address: "Tòa nhà xxxx",
    contact: "1900xxxx - magictravel@tourz.com",
  },
  {
    id: 2,
    title: "Chi nhánh 2",
    address: "Tòa nhà xxxx",
    contact: "1900xxxx - magictravel@tourz.com",
  },
  // {
  //   id: 3,
  //   title: "Europe",
  //   address: "45 Rue du Faubourg Saint-Antoine, 75011 Paris, France",
  //   contact: "33-800-987-654 europe@tourz.com",
  // },
  // {
  //   id: 4,
  //   title: "Asia",
  //   address: "Tokyo, Japan",
  //   contact: "81-800-567-890 asia@tourz.com",
  // },
];
</script>

<style scoped>
/* Add your styles here */
</style>
