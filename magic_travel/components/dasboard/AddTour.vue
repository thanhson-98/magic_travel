<template>
  <div
    :class="{ dashboard: true, '-is-sidebar-visible': sideBarOpen }"
    class="js-dashboard"
  >
    <Sidebar @setSideBarOpen="setSideBarOpen" />

    <div class="dashboard__content">
      <Header @setSideBarOpen="setSideBarOpen" />

      <div class="dashboard__content_content">
        <h1 class="text-30">Add Tour</h1>
        <p class="">Lorem ipsum dolor sit amet, consectetur.</p>

        <div class="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 mt-60">
          <div class="tabs -underline-2 js-tabs">
            <div
              class="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls"
            >
              <div v-for="(tab, index) in tabs" :key="index" class="col-auto">
                <button
                  @click="setActiveTab(tab)"
                  :class="{ 'is-tab-el-active': activeTab === tab }"
                  class="tabs__button text-20 lh-12 fw-500 pb-15 lg:pb-0 js-tabs-button"
                >
                  {{ index + 1 }}. {{ tab }}
                </button>
              </div>
            </div>

            <div class="row pt-40">
              <div class="col-xl-9 col-lg-10">
                <div class="tabs__content js-tabs-content">
                  <div
                    :class="`tabs__pane  ${
                      activeTab == 'Content' ? 'is-tab-el-active' : ''
                    }`"
                  >
                    <div class="contactForm row y-gap-30">
                      <div class="col-12">
                        <div class="form-input">
                          <input type="text" required />
                          <label class="lh-1 text-16 text-light-1"
                            >Tour Title</label
                          >
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-input">
                          <input type="text" required />
                          <label class="lh-1 text-16 text-light-1"
                            >Category</label
                          >
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-input">
                          <input type="text" required />
                          <label class="lh-1 text-16 text-light-1"
                            >Keywords</label
                          >
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="form-input">
                          <textarea required rows="8"></textarea>
                          <label class="lh-1 text-16 text-light-1"
                            >Tour Content</label
                          >
                        </div>
                      </div>

                      <div class="col-12">
                        <h4 class="text-18 fw-500 mb-20">Gallery</h4>

                        <div class="row x-gap-20 y-gap-20">
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
                          <div v-if="image3" class="col-auto">
                            <div class="relative">
                              <nuxt-img
                                width="200"
                                height="200"
                                :src="image3"
                                alt="image"
                                class="size-200 rounded-12 object-cover"
                              />
                              <button
                                @click="
                                  () => {
                                    setImage3('');
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
                              htmlFor="imageInp3"
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
                              @change="(e) => handleImageChange(e, setImage3)"
                              accept="image/*"
                              id="imageInp3"
                              type="file"
                              style="display: none"
                            />
                          </div>
                          <div v-if="image4" class="col-auto">
                            <div class="relative">
                              <nuxt-img
                                width="200"
                                height="200"
                                :src="image4"
                                alt="image"
                                class="size-200 rounded-12 object-cover"
                              />
                              <button
                                @click="
                                  () => {
                                    setImage4('');
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
                              htmlFor="imageInp4"
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
                              @change="(e) => handleImageChange(e, setImage4)"
                              accept="image/*"
                              id="imageInp4"
                              type="file"
                              style="display: none"
                            />
                          </div>
                        </div>

                        <div class="text-14 mt-20">
                          PNG or JPG no bigger than 800px wide and tall.
                        </div>
                      </div>

                      <div class="col-12">
                        <button
                          class="button -md -dark-1 bg-accent-1 text-white"
                        >
                          Save Changes
                          <i class="icon-arrow-top-right text-16 ml-10"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    :class="`tabs__pane  ${
                      activeTab == 'Location' ? 'is-tab-el-active' : ''
                    }`"
                  >
                    <div class="contactForm row y-gap-30">
                      <div class="col-12">
                        <div class="form-input">
                          <input type="text" required />
                          <label class="lh-1 text-16 text-light-1">City</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-input">
                          <input type="text" required />
                          <label class="lh-1 text-16 text-light-1">State</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-input">
                          <input type="text" required />
                          <label class="lh-1 text-16 text-light-1"
                            >Address</label
                          >
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-input">
                          <input type="text" required />
                          <label class="lh-1 text-16 text-light-1"
                            >Zip Code</label
                          >
                        </div>
                      </div>

                      <div class="col-lg-4">
                        <div class="form-input">
                          <input type="text" required />
                          <label class="lh-1 text-16 text-light-1"
                            >Map Latitude</label
                          >
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-input">
                          <input type="text" required />
                          <label class="lh-1 text-16 text-light-1"
                            >Map Longitude</label
                          >
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-input">
                          <input type="text" required />
                          <label class="lh-1 text-16 text-light-1"
                            >Map Zoom</label
                          >
                        </div>
                      </div>
                    </div>

                    <div class="map relative mt-30">
                      <Map />
                    </div>

                    <button
                      class="button -md -dark-1 bg-accent-1 text-white mt-30"
                    >
                      Save Changes
                      <i class="icon-arrow-top-right text-16 ml-10"></i>
                    </button>
                  </div>

                  <div
                    :class="`tabs__pane  ${
                      activeTab == 'Pricing' ? 'is-tab-el-active' : ''
                    }`"
                  >
                    <div class="contactForm row y-gap-30">
                      <div class="col-12">
                        <div class="form-input">
                          <input type="text" required />
                          <label class="lh-1 text-16 text-light-1"
                            >Tour Price</label
                          >
                        </div>
                      </div>
                    </div>

                    <div class="mt-30">
                      <h3 class="text-18 fw-500 mb-20">Extra Price</h3>

                      <div class="contactForm row y-gap-30 items-center">
                        <div class="col-lg-4">
                          <div class="form-input">
                            <input type="text" required />
                            <label class="lh-1 text-16 text-light-1"
                              >Add Service per booking</label
                            >
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="form-input">
                            <input type="text" required />
                            <label class="lh-1 text-16 text-light-1"
                              >Description</label
                            >
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="d-flex items-center">
                            <div class="form-input">
                              <input type="text" required />
                              <label class="lh-1 text-16 text-light-1"
                                >Price</label
                              >
                            </div>

                            <button class="text-18 ml-20">
                              <i class="icon-delete"></i>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div class="contactForm row y-gap-30 items-center pt-10">
                        <div class="col-lg-4">
                          <div class="form-input">
                            <input type="text" required />
                            <label class="lh-1 text-16 text-light-1"
                              >Add Service per booking</label
                            >
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="form-input">
                            <input type="text" required />
                            <label class="lh-1 text-16 text-light-1"
                              >Description</label
                            >
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="d-flex items-center">
                            <div class="form-input">
                              <input type="text" required />
                              <label class="lh-1 text-16 text-light-1"
                                >Price</label
                              >
                            </div>

                            <button class="text-18 ml-20">
                              <i class="icon-delete"></i>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div class="mt-30">
                        <button class="button -md -outline-dark-1 bg-light-1">
                          <i class="icon-add-button text-16 mr-10"></i>
                          Add Item
                        </button>
                      </div>
                    </div>

                    <button
                      class="button -md -dark-1 bg-accent-1 text-white mt-30"
                    >
                      Save Changes
                      <i class="icon-arrow-top-right text-16 ml-10"></i>
                    </button>
                  </div>

                  <div
                    :class="`tabs__pane  ${
                      activeTab == 'Included' ? 'is-tab-el-active' : ''
                    }`"
                  >
                    <div class="row y-gap-20 justify-between">
                      <div class="col-md-8">
                        <div class="row y-gap-20">
                          <div class="col-12">
                            <div class="d-flex items-center">
                              <div class="form-checkbox">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-16 ml-15">
                                Beverages, drinking water, morning tea and
                                buffet lunch
                              </div>
                            </div>
                          </div>

                          <div class="col-12">
                            <div class="d-flex items-center">
                              <div class="form-checkbox">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-16 ml-15">Local taxes</div>
                            </div>
                          </div>

                          <div class="col-12">
                            <div class="d-flex items-center">
                              <div class="form-checkbox">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-16 ml-15">
                                Hotel pickup and drop-off by air-conditioned
                                minivan
                              </div>
                            </div>
                          </div>

                          <div class="col-12">
                            <div class="d-flex items-center">
                              <div class="form-checkbox">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-16 ml-15">
                                InsuranceTransfer to a private pier
                              </div>
                            </div>
                          </div>

                          <div class="col-12">
                            <div class="d-flex items-center">
                              <div class="form-checkbox">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-16 ml-15">Soft drinks</div>
                            </div>
                          </div>

                          <div class="col-12">
                            <div class="d-flex items-center">
                              <div class="form-checkbox">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-16 ml-15">Tour Guide</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-4">
                        <div class="row y-gap-20">
                          <div class="col-12">
                            <div class="d-flex items-center">
                              <div class="form-checkbox">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-16 ml-15">Towel</div>
                            </div>
                          </div>

                          <div class="col-12">
                            <div class="d-flex items-center">
                              <div class="form-checkbox">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-16 ml-15">Tips</div>
                            </div>
                          </div>

                          <div class="col-12">
                            <div class="d-flex items-center">
                              <div class="form-checkbox">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-16 ml-15">Alcoholic Beverages</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      class="button -md -dark-1 bg-accent-1 text-white mt-30"
                    >
                      Save Changes
                      <i class="icon-arrow-top-right text-16 ml-10"></i>
                    </button>
                  </div>
                </div>
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
import Statistics from "./main/Statistics.vue";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { ref } from "vue";

import Map from "../pages/contact/Map";

const tabs = ["Content", "Location", "Pricing", "Included"];
const sideBarOpen = ref(true);
const setSideBarOpen = (val) => {
  sideBarOpen.value = !sideBarOpen.value;
};
const activeTab = ref("Content");
const image3 = ref("/img/dashboard/addtour/2.jpg");
const image4 = ref("/img/dashboard/addtour/3.jpg");

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
const setImage3 = (val) => {
  image3.value = val;
};
const setImage4 = (val) => {
  image4.value = val;
};
const setActiveTab = (val) => {
  activeTab.value = val;
};
</script>

<style scoped>
/* Add your styles here */
</style>
