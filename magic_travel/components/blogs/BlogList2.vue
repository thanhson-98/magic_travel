<template>
  <section class="layout-pt-md layout-pb-xl">
    <div class="container">
      <div class="row y-gap-30 justify-between">
        <div class="col-lg-8">
          <div class="row y-gap-60">
            <div v-for="(elm, i) in blogs.slice(0, 3)" :key="i" class="col-12">
              <nuxt-link :to="`blog-single/${elm.id}`" class="blogCard -type-1">
                <div class="blogCard__image ratio ratio-41:30">
                  <nuxt-img
                    :src="elm.image"
                    alt="image"
                    class="img-ratio rounded-12"
                    width="616"
                    height="451"
                  />
                </div>

                <div class="blogCard__content mt-30">
                  <div class="d-flex x-gap-10 text-14">
                    <div class="lh-13">{{ elm.date }}</div>
                    <div class="lh-13">By {{ elm.author }}</div>
                  </div>

                  <h3 class="blogCard__title text-30 lh-15 mt-10">
                    {{ elm.title }}
                  </h3>

                  <p class="mt-10">{{ elm.desc }}</p>

                  <button class="fw-500 mt-10">
                    <span class="mr-10">Read More</span>
                    <nuxt-img
                      width="16"
                      height="16"
                      src="/img/icons/arrowTop.svg"
                    />
                  </button>
                </div>
              </nuxt-link>
            </div>
          </div>

          <div class="d-flex justify-center flex-column mt-60">
            <Pagination />

            <div class="text-14 text-center mt-20">
              Showing results 1-30 of 1,415
            </div>
          </div>
        </div>

        <div class="col-lg-auto">
          <div class="sidebar -type-2">
            <div class="sidebar__search">
              <i>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.20459 1.44849C4.48555 1.44849 1.45605 4.47798 1.45605 8.19703C1.45605 11.9161 4.48555 14.9515 8.20459 14.9515C9.7931 14.9515 11.254 14.3948 12.4087 13.4705L15.2197 16.28C15.3616 16.416 15.5511 16.491 15.7476 16.489C15.944 16.487 16.1319 16.4082 16.271 16.2693C16.41 16.1304 16.4892 15.9427 16.4915 15.7462C16.4937 15.5497 16.419 15.3601 16.2832 15.2181L13.4722 12.407C14.3972 11.2506 14.9546 9.78738 14.9546 8.19703C14.9546 4.47798 11.9236 1.44849 8.20459 1.44849ZM8.20459 2.94851C11.113 2.94851 13.4531 5.28866 13.4531 8.19703C13.4531 11.1054 11.113 13.4514 8.20459 13.4514C5.29621 13.4514 2.95605 11.1054 2.95605 8.19703C2.95605 5.28866 5.29621 2.94851 8.20459 2.94851Z"
                    fill="#05073C"
                  />
                </svg>
              </i>

              <input type="text" placeholder="Search" />
            </div>

            <div class="sidebar__item">
              <h4 class="text-18 fw-500 mb-20">Blog Categories</h4>

              <div class="d-flex flex-column y-gap-5">
                <a v-for="(elm, i) in categories" :key="i" :href="elm.href">
                  {{ elm.name }}
                </a>
              </div>
            </div>

            <div class="sidebar__item">
              <h4 class="text-18 fw-500 mb-20">Recent Posts</h4>

              <div class="d-flex y-gap-20 flex-column">
                <a
                  v-for="(elm, i) in recantBlogs"
                  :key="i"
                  href="#"
                  class="d-flex align-center"
                >
                  <div class="size-70 overflow-hidden rounded-12">
                    <nuxt-img
                      :src="elm.image"
                      alt="image"
                      class="img-cover"
                      width="616"
                      height="451"
                    />
                  </div>

                  <div class="ml-20">
                    <h5 class="text-15 lh-14 fw-500">{{ elm.title }}</h5>
                    <div class="text-14 lh-1 mt-10">{{ elm.date }}</div>
                  </div>
                </a>
              </div>
            </div>

            <div class="sidebar__item">
              <h4 class="text-18 fw-500 mb-20">Tags</h4>

              <div class="sidebar__tags d-flex y-gap-10 x-gap-10">
                <div v-for="(elm, i) in tags" :key="i">
                  <a :href="elm.href">{{ elm.name }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Pagination from "../common/Pagination";
import { blogs, categories, recantBlogs, tags } from "@/data/blogs";
</script>
