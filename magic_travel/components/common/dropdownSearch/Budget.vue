<template>
    <div
      :class="['searchFormItemDropdown -tour-type', { 'is-active': active }]"
      data-x="budget"
      data-x-toggle="is-active"
    >
      <div class="searchFormItemDropdown__container">
        <div class="searchFormItemDropdown__list">
          <div
            v-for="(option, i) in options"
            :key="i"
            @click="handleTourTypeClick(option)"
            class="searchFormItemDropdown__item"
          >
            <button class="js-select-control-button">
              <span class="js-select-control-choice">{{ option }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const options = ref([
    "Dưới 5 triệu",
    "Từ 5 - 10 triệu",
    "Từ 10 - 20 triệu",
    "Trên 20 triệu"
  ]);
  defineProps(["active"]);
  const emits = defineEmits(["setBudget"]);
  
  const handleTourTypeClick = (option) => {
    emits("setBudget", option);
  };
  </script>
  