<template>
  <div class="select js-select js-liveSearch">
    <button class="select__button js-button" @click="toggleDropdown">
      <span class="js-button-title">
        {{ selectedItem ? selectedItem : "Default" }}
      </span>
      <i class="select__icon" data-feather="chevron-down"></i>
    </button>

    <div
      :class="{ '-is-visible': ddActive }"
      class="select__dropdown js-dropdown js-form-dd"
    >
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search"
        class="select__search js-search"
      />

      <div class="select__options js-options">
        <div
          v-if="filteredOptions"
          v-for="(elm, i) in filteredOptions"
          :key="i"
          @click="selectItem(elm.label)"
          class="select__options__button"
        >
          {{ elm.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ddoptions } from "@/data/uiElements";

const searchQuery = ref("");
const selectedItem = ref("");
const ddActive = ref(false);
const filteredOptions = ref(ddoptions);

const toggleDropdown = () => {
  ddActive.value = !ddActive.value;
};

const selectItem = (label) => {
  selectedItem.value = label;
  ddActive.value = false;
};
watchEffect(() => {
  filteredOptions.value = ddoptions.filter((elm) =>
    elm.label.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});
</script>
