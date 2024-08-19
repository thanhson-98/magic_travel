<template>
  <div
    v-for="(section, index) in sections"
    :key="index"
    class="col-lg-auto col-6"
  >
    <h4 class="text-20 fw-500">{{ section.title }}</h4>

    <div class="y-gap-10 mt-20">
      <a
        v-for="(link, linkIndex) in section.links"
        :key="linkIndex"
        class="d-block fw-500"
        :href="link.href"
      >
        {{ link.text }}
      </a>
    </div>
  </div>
</template>

<script setup>
const sections = [
  {
    title: "Dịch vụ",
    links: [
      { id: 1, text: "Lưu trú", href: "#" },
      { id: 2, text: "Phương tiện", href: "#" },
      { id: 3, text: "Camping Đà Lạt", href: "#" },
      { id: 4, text: "Travel Guides", href: "#" },
      { id: 5, text: "Data Policy", href: "#" },
      { id: 6, text: "Cookie Policy", href: "#" },
      { id: 7, text: "Legal", href: "#" },
      { id: 8, text: "Sitemap", href: "#" },
    ],
  },
  {
    title: "Thông tin",
    links: [
      { id: 9, text: "Sa Pa review tất tần tật", href: "#" },
      { id: 10, text: "Đà Lạt review tất tần tật", href: "#" },
      { id: 11, text: "Nha Trang review tất tần tật", href: "#" },
      { id: 12, text: "Phan Thiết review tất tần tật", href: "#" },
    ],
  },
];
</script>
