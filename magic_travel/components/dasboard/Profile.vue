<template>
  <div
    :class="`dashboard ${
      sideBarOpen ? '-is-sidebar-visible' : ''
    } js-dashboard`"
  >
    <Sidebar @setSideBarOpen="setSideBarOpen" />

    <div class="dashboard__content">
      <Header @setSideBarOpen="setSideBarOpen" />

      <div class="dashboard__content_content">
        <h1 class="text-30">My Profile</h1>
        <p class="">Lorem ipsum dolor sit amet, consectetur.</p>
        <div class="mt-50 rounded-12 bg-white shadow-2 px-40 pt-40 pb-30">
          <h5 class="text-20 fw-500 mb-30">Profile Details</h5>

          <div class="contactForm row y-gap-30">
            <div class="col-md-6">
              <div class="form-input">
                <input type="text" required v-model="name" />
                <label class="lh-1 text-16 text-light-1">Name</label>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-input">
                <input type="text" required v-model="lastName" />
                <label class="lh-1 text-16 text-light-1">Last Name</label>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-input">
                <input type="text" required v-model="phone" />
                <label class="lh-1 text-16 text-light-1">Phone</label>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-input">
                <input type="text" required v-model="email" />
                <label class="lh-1 text-16 text-light-1">Email</label>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-input">
                <textarea required v-model="info" rows="8"></textarea>
                <label class="lh-1 text-16 text-light-1">Info</label>
              </div>
            </div>

            <div class="col-12">
              <h4 class="text-18 fw-500 mb-20">Your photo</h4>
              <div class="row x-gap-20 y-gap">
                <!-- Add your photo upload logic here -->
                <div v-if="image1" class="col-auto">
                  <div class="relative">
                    <nuxt-img
                      width="200"
                      height="200"
                      :src="image1"
                      alt="image"
                      class="size-200 rounded-12 object-cover"
                    />
                    <button
                      @click="
                        () => {
                          setImage1('');
                        }
                      "
                      class="absoluteIcon1 button -dark-1"
                    >
                      <i class="icon-delete text-18"></i>
                    </button>
                  </div>
                </div>

                <div v-else class="col-auto">
                  <label
                    for="imageInp1"
                    class="size-200 rounded-12 border-dash-1 bg-accent-1-05 flex-center flex-column"
                  >
                    <nuxt-img
                      width="40"
                      height="40"
                      alt="image"
                      src="/img/dashboard/upload.svg"
                    />

                    <div class="text-16 fw-500 text-accent-1 mt-10">
                      Upload Images
                    </div>
                  </label>
                  <input
                    @change="(e) => handleImageChange(e, setImage1)"
                    accept="image/*"
                    id="imageInp1"
                    type="file"
                    style="display: none"
                  />
                </div>
                <div v-if="image2" class="col-auto">
                  <div class="relative">
                    <nuxt-img
                      width="200"
                      height="200"
                      :src="image2"
                      alt="image"
                      class="size-200 rounded-12 object-cover"
                    />
                    <button
                      @click="
                        () => {
                          setImage2('');
                        }
                      "
                      class="absoluteIcon1 button -dark-1"
                    >
                      <i class="icon-delete text-18"></i>
                    </button>
                  </div>
                </div>

                <div v-else class="col-auto">
                  <label
                    htmlFor="imageInp2"
                    class="size-200 rounded-12 border-dash-1 bg-accent-1-05 flex-center flex-column"
                  >
                    <nuxt-img
                      width="40"
                      height="40"
                      alt="image"
                      src="/img/dashboard/upload.svg"
                    />

                    <div class="text-16 fw-500 text-accent-1 mt-10">
                      Upload Images
                    </div>
                  </label>
                  <input
                    @change="(e) => handleImageChange(e, setImage2)"
                    accept="image/*"
                    id="imageInp2"
                    type="file"
                    style="display: none"
                  />
                </div>
              </div>

              <div class="text-14 mt-20">
                PNG or JPG no bigger than 800px wide and tall.
              </div>

              <button
                @click="saveChanges"
                class="button -md -dark-1 bg-accent-1 text-white mt-30"
              >
                Save Changes
                <i class="icon-arrow-top-right text-16 ml-10"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 mt-30">
          <h5 class="text-20 fw-500 mb-30">Change Password</h5>

          <div class="contactForm y-gap-30">
            <div class="row y-gap-30">
              <div class="col-md-6">
                <div class="form-input">
                  <input type="text" required v-model="oldPassword" />
                  <label class="lh-1 text-16 text-light-1">Old password</label>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-input">
                  <input type="text" required v-model="newPassword" />
                  <label class="lh-1 text-16 text-light-1">New password</label>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-input">
                  <input type="text" required v-model="confirmNewPassword" />
                  <label class="lh-1 text-16 text-light-1"
                    >Confirm new password</label
                  >
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <button
                  @click="savePasswordChanges"
                  class="button -md -dark-1 bg-accent-1 text-white"
                >
                  Save Changes
                  <i class="icon-arrow-top-right text-16 ml-10"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center pt-30">
          © Copyright Viatours {{ new Date().getFullYear() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import { ref } from "vue";

const sideBarOpen = ref(true);

const setSideBarOpen = (value) => {
  sideBarOpen.value = !sideBarOpen.value;
};

let name = ref("");
let lastName = ref("");
let phone = ref("");
let email = ref("");
let info = ref("");
let oldPassword = ref("");
let newPassword = ref("");
let confirmNewPassword = ref("");

const image1 = ref("");
const image2 = ref("/img/dashboard/addtour/1.jpg");
const handleImageChange = (event, setImageFunc) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageFunc(reader.result);
    };

    reader.readAsDataURL(file);
  }
};
const setImage1 = (val) => {
  image1.value = val;
};
const setImage2 = (val) => {
  image2.value = val;
};

const saveChanges = () => {
  // Add logic to save profile changes
  console.log("Saving profile changes");
};

const savePasswordChanges = () => {
  // Add logic to save password changes
  console.log("Saving password changes");
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
