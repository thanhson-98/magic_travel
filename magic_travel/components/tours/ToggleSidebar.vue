<template>
  <div :class="['tourPagesSidebar', sidebarOpen ? '-is-active' : '']">
    <div class="tourPagesSidebar__overlay"></div>
    <div class="tourPagesSidebar__content">
      <div class="tourPagesSidebar__header d-flex items-center justify-between">
        <div class="text-20 fw-500">All filters</div>
        <button
          @click="closeSidebar"
          class="button -dark-1 size-40 rounded-full bg-light-1"
        >
          <i class="icon-cross text-10"></i>
        </button>
      </div>
      <Sidebar />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./Sidebar.vue";

const props = defineProps(["sidebarOpen"]);
const emit = defineEmits(["setSidebarOpen"]);

const closeSidebar = () => {
  emit("setSidebarOpen", false);
};
</script>
