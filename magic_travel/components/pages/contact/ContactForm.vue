<template>
  <section class="layout-pt-lg layout-pb-lg">
    <div class="container">
      <div class="row justify-center">
        <div class="col-lg-8">
          <h2 class="text-30 fw-700 text-center mb-30">Leave us your info</h2>

          <div class="contactForm">
            <form @submit.prevent="submitForm" class="row y-gap-30">
              <div class="col-md-6">
                <input v-model="name" type="text" placeholder="Name" required />
              </div>
              <div class="col-md-6">
                <input
                  v-model="phone"
                  type="text"
                  placeholder="Phone"
                  required
                />
              </div>
              <div class="col-12">
                <input
                  v-model="email"
                  type="text"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="col-12">
                <textarea
                  v-model="message"
                  placeholder="Message"
                  rows="6"
                  required
                ></textarea>
              </div>
              <div class="col-12">
                <button
                  type="submit"
                  class="button -md -dark-1 bg-accent-1 text-white col-12"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const name = ref("");
const phone = ref("");
const email = ref("");
const message = ref("");

const submitForm = () => {
  // Handle form submission logic here
  // Access the form data using the `name`, `phone`, `email`, and `message` variables
};
</script>

<style scoped>
/* Add your styles here */
</style>
