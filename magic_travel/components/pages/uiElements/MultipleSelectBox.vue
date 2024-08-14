<template>
  <div class="select js-multiple-select">
    <button class="select__button js-button" @click="toggleDropdown">
      <span class="js-button-title">
        {{ selected.length ? selected.join(", ") : "Default" }}
      </span>
      <i class="select__icon" data-feather="chevron-down"></i>
    </button>

    <div
      :class="{ '-is-visible': isActiveDD }"
      class="select__dropdown js-dropdown js-form-dd"
    >
      <div class="select__options js-options">
        <div
          v-for="(elm, i) in ddoptions"
          :key="i"
          @click="toggleOption(elm.label)"
          class="select__options__button"
        >
          <div class="form-checkbox pointer-events-none">
            <input
              :checked="selected.includes(elm.label)"
              type="checkbox"
              class="pointer-events-none"
              readonly
            />
            <div class="form-checkbox__mark">
              <div class="form-checkbox__icon icon-check text-white"></div>
            </div>
          </div>

          <span class="ml-10 js-target-title">{{ elm.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selected = ref([]);
const isActiveDD = ref(false);
import { ddoptions } from "@/data/uiElements";

const toggleDropdown = () => {
  isActiveDD.value = !isActiveDD.value;
};

const toggleOption = (label) => {
  selected.value = selected.value.includes(label)
    ? selected.value.filter((el) => el !== label)
    : [...selected.value, label];
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
