<template>
  <section class="hero -type-1">
    <div class="hero__bg hero__bg1">
      <nuxt-img width="1800" height="700" src="\img\general\hero-bg.jpg" alt="image" />
      <nuxt-img src="/img/hero/1/shape.svg" width="1800" height="40" alt="image" style="height: auto" />
    </div>

    <div class="container">
      <div class="row justify-center">
        <div class="col-xl-9 col-lg-10">
          <div class="hero__content">
            <h1 data-aos="fade-up" data-aos-delay="100" class="hero__title title__1">
              Tận hưởng kỳ nghỉ mơ ước của bạn
            </h1>

            <p data-aos="fade-up" data-aos-delay="300" class="hero__text">
              Lên kế hoạch chuyến đi hoàn hảo của bạn với lời khuyên của chuyên gia, mẹo du lịch, thông tin điểm đến và
              nguồn cảm hứng từ chúng tôi.
            </p>

            <div ref="dropDownContainer" data-aos="fade-up" data-aos-delay="300" class="mt-60 md:mt-35">
              <div class="searchForm -type-1">
                <div class="searchForm__form searchForm__2cols">
                  <div class="searchFormItem js-select-control js-form-dd">
                    <div class="searchFormItem__button searchFormItem__custom">
                      <div class="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
                        <i class="text-20 icon-pin"></i>
                      </div>
                      <div class="searchFormItem__content">
                        <h5>Địa điểm</h5>
                        <div class="js-select-control-chosen">
                          <input type="text" placeholder="Bạn muốn đến đâu?">
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="searchFormItem js-select-control js-form-dd">
                    <div class="searchFormItem__button" @click="toggleDropdown('budget')">
                      <div class="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-cash-stack text-20" viewBox="0 0 16 16">
                          <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                          <path
                            d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
                        </svg>
                      </div>
                      <div class="searchFormItem__content">
                        <h5>Ngân sách</h5>
                        <div class="js-select-control-chosen">
                          {{ budget ? budget : "Ngân quỹ bạn mong muốn?" }}
                        </div>
                      </div>
                    </div>
                    <Budget @setBudget="setBudget" :active="currentActiveDD === 'budget'" />
                  </div>
                </div>

                <div class="searchForm__button">
                  <button @click="searchTour" class="button -dark-1 bg-accent-1 text-white">
                    <i class="icon-search text-16 mr-10"></i>
                    Tìm kiếm
                  </button>
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
import { ref, onMounted, onUnmounted } from "vue";
import Budget from "@/components/common/dropdownSearch/Budget.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const currentActiveDD = ref("");
const budget = ref("");
const dropDownContainer = ref(null);

watch([budget], () => {
  currentActiveDD.value = "";
});

const toggleDropdown = (dropdown) => {
  currentActiveDD.value = currentActiveDD.value === dropdown ? "" : dropdown;
};

const handleClick = (event) => {
  if (
    dropDownContainer.value &&
    !dropDownContainer.value.contains(event.target)
  ) {
    currentActiveDD.value = "";
  }
};

const setBudget = (value) => {
  budget.value = budget.value == value ? "" : value;
};
onMounted(() => {
  document.addEventListener("click", handleClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClick);
});

const searchTour = () => {
  router.push("/tour-list-1");
};
</script>
