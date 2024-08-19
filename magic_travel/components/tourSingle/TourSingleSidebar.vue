<template>
  <div class="tourSingleSidebar">
    <div class="d-flex items-center">
      <div>Giá từ:</div>
      <div class="text-20 fw-500 ml-10">2.500.000 đ</div>
    </div>

    <div class="line mt-20 mb-20"></div>

    <button class="button -md -dark-1 col-12 bg-accent-1 text-white mt-20">
      Đăng ký ngay
      <i class="icon-arrow-top-right ml-10"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";

import Calender from "../common/dropdownSearch/Calender";

import { times } from "@/data/tourSingleContent";

const prices = {
  adultPrice: 94,
  youthPrice: 84,
  childrenPrice: 20,
  extraService: 40,
  servicePerPerson: 40,
};

const adultNumber = ref(3);
const youthNumber = ref(2);
const childrenNumber = ref(4);
const isExtraService = ref(false);
const isServicePerPerson = ref(false);
const extraCharge = ref(0);
const selectedTime = ref("");
const activeTimeDD = ref(false);
watchEffect(() => {
  extraCharge.value = 0;

  if (isExtraService.value) {
    extraCharge.value += prices.extraService;
  }

  if (isServicePerPerson.value) {
    extraCharge.value += prices.servicePerPerson;
  }
});
</script>
