import{_ as O}from"./AppCardCode.vue_vue_type_style_index_0_lang-Dw0Nab0O.js";import{_ as W}from"./AppSelect.vue_vue_type_script_setup_true_lang-CVVTcUQA.js";import{_ as R}from"./AppTextField.vue_vue_type_script_setup_true_lang-pIjTq4xA.js";import{_ as B}from"./AppStepper.vue_vue_type_style_index_0_lang-CQcZ00rw.js";import{V as _}from"./VCard-D0sq1ij7.js";import{V as D}from"./VCardText-DjVuD5I1.js";import{V as T}from"./VForm-CyEVP9HW.js";import{V as q,a as S}from"./VWindowItem-D2W-X6gR.js";import{V as C,a as r}from"./VRow-BNRl9lqd.js";import{d as N,r as V,c as K,o as h,F as z,e as p,b as e,m as o,aW as I,f as t,g as P,ai as v,t as g,$ as A,ba as G,x as Q}from"./index-B4trpNpq.js";import{V as $}from"./VDivider-hcznu_-L.js";import{r as k,e as X,p as Y,d as Z,u as E}from"./validators-BJEf8OaU.js";import"./vue3-perfect-scrollbar-BYJGV9eF.js";import"./VSelect-BeslwrF4.js";import"./VTextField-D4NgpABA.js";/* empty css                   */import"./VCounter-DNm1D0R9.js";import"./transition-DzuGzAMP.js";import"./VField-DbiUXdT6.js";import"./form-CeCw-UG5.js";import"./easing-Bybner-F.js";import"./VInput-CMZYqozq.js";import"./forwardRefs-C-GTDzx5.js";import"./index-DPZRgg84.js";import"./VList-CfkQgccu.js";import"./ssrBoot-DTTBuvyz.js";import"./VAvatar-BRltcDDf.js";import"./VImg-DV2UUrQh.js";import"./dialog-transition-2kihUDek.js";import"./VMenu-C_K_5m1S.js";import"./VOverlay-D0qO99Cg.js";import"./delay-BKOHSa9m.js";import"./lazy-CHsVODYN.js";import"./scopeId-BIvWvg6Y.js";import"./VCheckboxBtn-DINCtmZc.js";import"./VSelectionControl-DE9ea4s6.js";import"./VChip-CfOVepsI.js";import"./VSlideGroup-BdVU9RYV.js";/* empty css              */import"./helpers-BGv4x_9E.js";const ee={ts:`<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        class="stepper-icon-step-bg"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.username"
                  placeholder="CarterLeonardo"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.email"
                  placeholder="carterleonardo@gmail.com"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  autocomplete="password"
                  :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.cPassword"
                  label="Confirm Password"
                  autocomplete="confirm-password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="
                    isCPasswordVisible ? 'bx-hide' : 'bx-show'
                  "
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.firstName"
                  label="First Name"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.lastName"
                  label="Last Name"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.country"
                  label="Country"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.language"
                  label="Language"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.twitter"
                  placeholder="https://twitter.com/abc"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.facebook"
                  placeholder="https://facebook.com/abc"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.LinkedIn"
                  placeholder="https://linkedin.com/abc"
                  label="LinkedIn"
                />
              </VCol>
            </VRow>
          </VWindowItem>
        </VWindow>

        <div class="d-flex flex-wrap gap-4 justify-space-between mt-8">
          <VBtn
            color="secondary"
            variant="tonal"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="bx-left-arrow-alt"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>

          <VBtn
            v-if="numberedSteps.length - 1 === currentStep"
            color="success"
            @click="onSubmit"
          >
            submit
          </VBtn>

          <VBtn
            v-else
            @click="currentStep++"
          >
            Next

            <VIcon
              icon="bx-right-arrow-alt"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        class="stepper-icon-step-bg"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.username"
                  placeholder="CarterLeonardo"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.email"
                  placeholder="carterleonardo@gmail.com"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  autocomplete="password"
                  :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.cPassword"
                  label="Confirm Password"
                  autocomplete="confirm-password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="
                    isCPasswordVisible ? 'bx-hide' : 'bx-show'
                  "
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.firstName"
                  label="First Name"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.lastName"
                  label="Last Name"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.country"
                  label="Country"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.language"
                  label="Language"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.twitter"
                  placeholder="https://twitter.com/abc"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.facebook"
                  placeholder="https://facebook.com/abc"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.LinkedIn"
                  placeholder="https://linkedin.com/abc"
                  label="LinkedIn"
                />
              </VCol>
            </VRow>
          </VWindowItem>
        </VWindow>

        <div class="d-flex flex-wrap gap-4 justify-space-between mt-8">
          <VBtn
            color="secondary"
            variant="tonal"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="bx-left-arrow-alt"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>

          <VBtn
            v-if="numberedSteps.length - 1 === currentStep"
            color="success"
            @click="onSubmit"
          >
            submit
          </VBtn>

          <VBtn
            v-else
            @click="currentStep++"
          >
            Next

            <VIcon
              icon="bx-right-arrow-alt"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
`},le={ts:`<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',

})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <!-- 👉 Stepper -->
  <div class="mb-6">
    <AppStepper
      v-model:current-step="currentStep"
      align="start"
      :items="numberedSteps"
    />
  </div>

  <VCard>
    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.username"
                  placeholder="CarterLeonardo"
                  label="Username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.email"
                  placeholder="carterleonardo@gmail.com"
                  label="Email"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VWindowItem>
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.firstName"
                  label="First Name"
                  placeholder="Leonard"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.lastName"
                  label="Last Name"
                  placeholder="Carter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.country"
                  label="Country"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.language"
                  label="Language"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>
            </VRow>
          </VWindowItem>
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.twitter"
                  placeholder="https://twitter.com/abc"
                  label="Twitter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.facebook"
                  placeholder="https://facebook.com/abc"
                  label="Facebook"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  label="Google+"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.LinkedIn"
                  placeholder="https://linkedin.com/abc"
                  label="LinkedIn"
                />
              </VCol>
            </VRow>
          </VWindowItem>
        </VWindow>
        <div class="d-flex flex-wrap gap-4 justify-space-between mt-8">
          <VBtn
            color="secondary"
            variant="tonal"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="bx-left-arrow-alt"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>
          <VBtn
            v-if="numberedSteps.length - 1 === currentStep"
            color="success"
            @click="onSubmit"
          >
            submit
          </VBtn>
          <VBtn
            v-else
            @click="currentStep++"
          >
            Next
            <VIcon
              icon="bx-right-arrow-alt"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <!-- 👉 Stepper -->
  <div class="mb-6">
    <AppStepper
      v-model:current-step="currentStep"
      align="start"
      :items="numberedSteps"
    />
  </div>

  <VCard>
    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.username"
                  placeholder="CarterLeonardo"
                  label="Username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.email"
                  placeholder="carterleonardo@gmail.com"
                  label="Email"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VWindowItem>
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.firstName"
                  label="First Name"
                  placeholder="Leonard"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.lastName"
                  label="Last Name"
                  placeholder="Carter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.country"
                  label="Country"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="formData.language"
                  label="Language"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>
            </VRow>
          </VWindowItem>
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.twitter"
                  placeholder="https://twitter.com/abc"
                  label="Twitter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.facebook"
                  placeholder="https://facebook.com/abc"
                  label="Facebook"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  label="Google+"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="formData.LinkedIn"
                  placeholder="https://linkedin.com/abc"
                  label="LinkedIn"
                />
              </VCol>
            </VRow>
          </VWindowItem>
        </VWindow>
        <div class="d-flex flex-wrap gap-4 justify-space-between mt-8">
          <VBtn
            color="secondary"
            variant="tonal"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="bx-left-arrow-alt"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>
          <VBtn
            v-if="numberedSteps.length - 1 === currentStep"
            color="success"
            @click="onSubmit"
          >
            submit
          </VBtn>
          <VBtn
            v-else
            @click="currentStep++"
          >
            Next
            <VIcon
              icon="bx-right-arrow-alt"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
`},oe={ts:`<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',

})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="4"
    >
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        direction="vertical"
        :items="numberedSteps"
      />
    </VCol>
    <!-- 👉 stepper content -->
    <VCol
      cols="12"
      md="8"
    >
      <VCard>
        <VCardText>
          <VForm>
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
            >
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Account Details
                    </h6>
                    <p class="mb-0">
                      Enter your Account Details
                    </p>
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.username"
                      placeholder="CarterLeonardo"
                      label="Username"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.email"
                      placeholder="carterleonardo@gmail.com"
                      label="Email"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.password"
                      placeholder="············"
                      label="Password"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                      @click:append-inner="isPasswordVisible = !isPasswordVisible"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.cPassword"
                      placeholder="············"
                      label="Confirm Password"
                      :type="isCPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isCPasswordVisible ? 'bx-hide' : 'bx-show'"
                      @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Personal Info
                    </h6>
                    <p class="mb-0">
                      Setup Information
                    </p>
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.firstName"
                      label="First Name"
                      placeholder="Leonard"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.lastName"
                      label="Last Name"
                      placeholder="Carter"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.country"
                      label="Country"
                      placeholder="Select Country"
                      :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.language"
                      label="Language"
                      placeholder="Select Language"
                      :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Social Links
                    </h6>
                    <p class="mb-0">
                      Add Social Links
                    </p>
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.twitter"
                      placeholder="https://twitter.com/abc"
                      label="Twitter"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.facebook"
                      placeholder="https://facebook.com/abc"
                      label="Facebook"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.googlePlus"
                      placeholder="https://plus.google.com/abc"
                      label="Google+"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.LinkedIn"
                      placeholder="https://linkedin.com/abc"
                      label="LinkedIn"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
            </VWindow>
            <div class="d-flex flex-wrap gap-4 justify-space-between mt-8">
              <VBtn
                color="secondary"
                variant="tonal"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="bx-left-arrow-alt"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>
              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                @click="onSubmit"
              >
                submit
              </VBtn>
              <VBtn
                v-else
                @click="currentStep++"
              >
                Next
                <VIcon
                  icon="bx-right-arrow-alt"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="4"
    >
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        direction="vertical"
        :items="numberedSteps"
      />
    </VCol>
    <!-- 👉 stepper content -->
    <VCol
      cols="12"
      md="8"
    >
      <VCard>
        <VCardText>
          <VForm>
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
            >
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Account Details
                    </h6>
                    <p class="mb-0">
                      Enter your Account Details
                    </p>
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.username"
                      placeholder="CarterLeonardo"
                      label="Username"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.email"
                      placeholder="carterleonardo@gmail.com"
                      label="Email"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.password"
                      placeholder="············"
                      label="Password"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                      @click:append-inner="isPasswordVisible = !isPasswordVisible"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.cPassword"
                      placeholder="············"
                      label="Confirm Password"
                      :type="isCPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isCPasswordVisible ? 'bx-hide' : 'bx-show'"
                      @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Personal Info
                    </h6>
                    <p class="mb-0">
                      Setup Information
                    </p>
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.firstName"
                      label="First Name"
                      placeholder="Leonard"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.lastName"
                      label="Last Name"
                      placeholder="Carter"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.country"
                      label="Country"
                      placeholder="Select Country"
                      :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.language"
                      label="Language"
                      placeholder="Select Language"
                      :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Social Links
                    </h6>
                    <p class="mb-0">
                      Add Social Links
                    </p>
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.twitter"
                      placeholder="https://twitter.com/abc"
                      label="Twitter"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.facebook"
                      placeholder="https://facebook.com/abc"
                      label="Facebook"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.googlePlus"
                      placeholder="https://plus.google.com/abc"
                      label="Google+"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.LinkedIn"
                      placeholder="https://linkedin.com/abc"
                      label="LinkedIn"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
            </VWindow>
            <div class="d-flex flex-wrap gap-4 justify-space-between mt-8">
              <VBtn
                color="secondary"
                variant="tonal"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="bx-left-arrow-alt"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>
              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                @click="onSubmit"
              >
                submit
              </VBtn>
              <VBtn
                v-else
                @click="currentStep++"
              >
                Next
                <VIcon
                  icon="bx-right-arrow-alt"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
`},te={ts:`<script setup lang="ts">
import { VForm } from 'vuetify/components/VForm'

const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const isCurrentStepValid = ref(true)
const refAccountForm = ref<VForm>()
const refPersonalForm = ref<VForm>()
const refSocialLinkForm = ref<VForm>()

const accountForm = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
})

const personalForm = ref({
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
})

const socialForm = ref({
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const validateAccountForm = () => {
  refAccountForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else {
      isCurrentStepValid.value = false
    }
  })
}

const validatePersonalForm = () => {
  refPersonalForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else {
      isCurrentStepValid.value = false
    }
  })
}

const validateSocialLinkForm = () => {
  refSocialLinkForm.value?.validate().then(valid => {
    if (valid.valid) {
      isCurrentStepValid.value = true

      console.log({
        ...accountForm.value,
        ...personalForm.value,
        ...socialForm.value,
      })
    }
    else {
      isCurrentStepValid.value = false
    }
  })
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        :is-active-step-valid="isCurrentStepValid"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->

      <VWindow
        v-model="currentStep"
        class="disable-tab-transition"
      >
        <VWindowItem>
          <VForm
            ref="refAccountForm"
            @submit.prevent="validateAccountForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.username"
                  placeholder="CarterLeonardo"
                  :rules="[requiredValidator]"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.email"
                  placeholder="carterleonardo@gmail.com"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.password"
                  label="Password"
                  placeholder="············"
                  :rules="[requiredValidator, passwordValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  autocomplete="password"
                  :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.cPassword"
                  label="Confirm Password"
                  autocomplete="confirm-password"
                  placeholder="············"
                  :rules="[
                    requiredValidator,
                    confirmedValidator(
                      accountForm.cPassword,
                      accountForm.password,
                    ),
                  ]"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="
                    isCPasswordVisible ? 'bx-hide' : 'bx-show'
                  "
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-space-between mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    disabled
                  >
                    <VIcon
                      icon="bx-left-arrow-alt"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="bx-right-arrow-alt"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refPersonalForm"
            @submit.prevent="validatePersonalForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="personalForm.firstName"
                  label="First Name"
                  :rules="[requiredValidator]"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="personalForm.lastName"
                  label="Last Name"
                  :rules="[requiredValidator]"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="personalForm.country"
                  label="Country"
                  :rules="[requiredValidator]"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="personalForm.language"
                  label="Language"
                  :rules="[requiredValidator]"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="bx-left-arrow-alt"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="bx-right-arrow-alt"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refSocialLinkForm"
            @submit.prevent="validateSocialLinkForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.twitter"
                  placeholder="https://twitter.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.facebook"
                  placeholder="https://facebook.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.LinkedIn"
                  placeholder="https://likedin.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="LinkedIn"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="bx-left-arrow-alt"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn
                    color="success"
                    type="submit"
                  >
                    submit
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
import { VForm } from 'vuetify/components/VForm'

const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const isCurrentStepValid = ref(true)
const refAccountForm = ref()
const refPersonalForm = ref()
const refSocialLinkForm = ref()

const accountForm = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
})

const personalForm = ref({
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
})

const socialForm = ref({
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const validateAccountForm = () => {
  refAccountForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    } else {
      isCurrentStepValid.value = false
    }
  })
}

const validatePersonalForm = () => {
  refPersonalForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    } else {
      isCurrentStepValid.value = false
    }
  })
}

const validateSocialLinkForm = () => {
  refSocialLinkForm.value?.validate().then(valid => {
    if (valid.valid) {
      isCurrentStepValid.value = true
      console.log({
        ...accountForm.value,
        ...personalForm.value,
        ...socialForm.value,
      })
    } else {
      isCurrentStepValid.value = false
    }
  })
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        :is-active-step-valid="isCurrentStepValid"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->

      <VWindow
        v-model="currentStep"
        class="disable-tab-transition"
      >
        <VWindowItem>
          <VForm
            ref="refAccountForm"
            @submit.prevent="validateAccountForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Account Details
                </h6>
                <p class="mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.username"
                  placeholder="CarterLeonardo"
                  :rules="[requiredValidator]"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.email"
                  placeholder="carterleonardo@gmail.com"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.password"
                  label="Password"
                  placeholder="············"
                  :rules="[requiredValidator, passwordValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  autocomplete="password"
                  :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="accountForm.cPassword"
                  label="Confirm Password"
                  autocomplete="confirm-password"
                  placeholder="············"
                  :rules="[
                    requiredValidator,
                    confirmedValidator(
                      accountForm.cPassword,
                      accountForm.password,
                    ),
                  ]"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="
                    isCPasswordVisible ? 'bx-hide' : 'bx-show'
                  "
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-space-between mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    disabled
                  >
                    <VIcon
                      icon="bx-left-arrow-alt"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="bx-right-arrow-alt"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refPersonalForm"
            @submit.prevent="validatePersonalForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Personal Info
                </h6>
                <p class="mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="personalForm.firstName"
                  label="First Name"
                  :rules="[requiredValidator]"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="personalForm.lastName"
                  label="Last Name"
                  :rules="[requiredValidator]"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="personalForm.country"
                  label="Country"
                  :rules="[requiredValidator]"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="personalForm.language"
                  label="Language"
                  :rules="[requiredValidator]"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="bx-left-arrow-alt"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="bx-right-arrow-alt"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refSocialLinkForm"
            @submit.prevent="validateSocialLinkForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 font-weight-medium">
                  Social Links
                </h6>
                <p class="mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.twitter"
                  placeholder="https://twitter.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.facebook"
                  placeholder="https://facebook.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="socialForm.LinkedIn"
                  placeholder="https://likedin.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="LinkedIn"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="bx-left-arrow-alt"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn
                    color="success"
                    type="submit"
                  >
                    submit
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},ae={ts:`<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VRow>
      <VCol
        cols="12"
        md="4"
        :class="$vuetify.display.smAndDown ? 'border-b' : 'border-e'"
      >
        <VCardText>
          <!-- 👉 Stepper -->
          <AppStepper
            v-model:current-step="currentStep"
            direction="vertical"
            :items="numberedSteps"
          />
        </VCardText>
      </VCol>
      <!-- 👉 stepper content -->
      <VCol
        cols="12"
        md="8"
      >
        <VCardText>
          <VForm>
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
            >
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Account Details
                    </h6>
                    <p class="mb-0">
                      Enter your Account Details
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.username"
                      placeholder="CarterLeonardo"
                      label="Username"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.email"
                      placeholder="carterleonardo@gmail.com"
                      label="Email"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.password"
                      placeholder="············"
                      label="Password"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      autocomplete="password"
                      :append-inner-icon="
                        isPasswordVisible ? 'bx-hide' : 'bx-show'
                      "
                      @click:append-inner="
                        isPasswordVisible = !isPasswordVisible
                      "
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.cPassword"
                      placeholder="············"
                      label="Confirm Password"
                      autocomplete="confirm-password"
                      :type="isCPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="
                        isCPasswordVisible ? 'bx-hide' : 'bx-show'
                      "
                      @click:append-inner="
                        isCPasswordVisible = !isCPasswordVisible
                      "
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Personal Info
                    </h6>
                    <p class="mb-0">
                      Setup Information
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.firstName"
                      label="First Name"
                      placeholder="Leonard"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.lastName"
                      label="Last Name"
                      placeholder="Carter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.country"
                      label="Country"
                      placeholder="Select Country"
                      :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.language"
                      label="Language"
                      placeholder="Select Language"
                      :items="[
                        'English',
                        'Spanish',
                        'French',
                        'Russian',
                        'German',
                      ]"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Social Links
                    </h6>
                    <p class="mb-0">
                      Add Social Links
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.twitter"
                      placeholder="https://twitter.com/abc"
                      label="Twitter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.facebook"
                      placeholder="https://facebook.com/abc"
                      label="Facebook"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.googlePlus"
                      placeholder="https://plus.google.com/abc"
                      label="Google+"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.LinkedIn"
                      placeholder="https://linkedin.com/abc"
                      label="LinkedIn"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
            </VWindow>

            <div class="d-flex flex-wrap gap-4 justify-space-between mt-8">
              <VBtn
                color="secondary"
                variant="tonal"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="bx-left-arrow-alt"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>

              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                @click="onSubmit"
              >
                submit
              </VBtn>

              <VBtn
                v-else
                @click="currentStep++"
              >
                Next

                <VIcon
                  icon="bx-right-arrow-alt"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
`,js:`<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VRow>
      <VCol
        cols="12"
        md="4"
        :class="$vuetify.display.smAndDown ? 'border-b' : 'border-e'"
      >
        <VCardText>
          <!-- 👉 Stepper -->
          <AppStepper
            v-model:current-step="currentStep"
            direction="vertical"
            :items="numberedSteps"
          />
        </VCardText>
      </VCol>
      <!-- 👉 stepper content -->
      <VCol
        cols="12"
        md="8"
      >
        <VCardText>
          <VForm>
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
            >
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Account Details
                    </h6>
                    <p class="mb-0">
                      Enter your Account Details
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.username"
                      placeholder="CarterLeonardo"
                      label="Username"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.email"
                      placeholder="carterleonardo@gmail.com"
                      label="Email"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.password"
                      placeholder="············"
                      label="Password"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      autocomplete="password"
                      :append-inner-icon="
                        isPasswordVisible ? 'bx-hide' : 'bx-show'
                      "
                      @click:append-inner="
                        isPasswordVisible = !isPasswordVisible
                      "
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.cPassword"
                      placeholder="············"
                      label="Confirm Password"
                      autocomplete="confirm-password"
                      :type="isCPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="
                        isCPasswordVisible ? 'bx-hide' : 'bx-show'
                      "
                      @click:append-inner="
                        isCPasswordVisible = !isCPasswordVisible
                      "
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Personal Info
                    </h6>
                    <p class="mb-0">
                      Setup Information
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.firstName"
                      label="First Name"
                      placeholder="Leonard"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.lastName"
                      label="Last Name"
                      placeholder="Carter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.country"
                      label="Country"
                      placeholder="Select Country"
                      :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppSelect
                      v-model="formData.language"
                      label="Language"
                      placeholder="Select Language"
                      :items="[
                        'English',
                        'Spanish',
                        'French',
                        'Russian',
                        'German',
                      ]"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6 font-weight-medium">
                      Social Links
                    </h6>
                    <p class="mb-0">
                      Add Social Links
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.twitter"
                      placeholder="https://twitter.com/abc"
                      label="Twitter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.facebook"
                      placeholder="https://facebook.com/abc"
                      label="Facebook"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.googlePlus"
                      placeholder="https://plus.google.com/abc"
                      label="Google+"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppTextField
                      v-model="formData.LinkedIn"
                      placeholder="https://linkedin.com/abc"
                      label="LinkedIn"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
            </VWindow>

            <div class="d-flex flex-wrap gap-4 justify-space-between mt-8">
              <VBtn
                color="secondary"
                variant="tonal"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="bx-left-arrow-alt"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>

              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                @click="onSubmit"
              >
                submit
              </VBtn>

              <VBtn
                v-else
                @click="currentStep++"
              >
                Next

                <VIcon
                  icon="bx-right-arrow-alt"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
`},se={class:"mb-6"},re={class:"d-flex flex-wrap gap-4 justify-space-between mt-8"},ie=N({__name:"DemoFormWizardNumberedModernBasic",setup(U){const x=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],d=V(0),c=V(!1),f=V(!1),s=V({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),F=()=>{console.log(s.value)};return(L,l)=>{const w=B,n=R,b=W;return h(),K(z,null,[p("div",se,[e(w,{"current-step":o(d),"onUpdate:currentStep":l[0]||(l[0]=a=>I(d)?d.value=a:null),align:"start",items:x},null,8,["current-step"])]),e(_,null,{default:t(()=>[e(D,null,{default:t(()=>[e(T,null,{default:t(()=>[e(q,{modelValue:o(d),"onUpdate:modelValue":l[15]||(l[15]=a=>I(d)?d.value=a:null),class:"disable-tab-transition"},{default:t(()=>[e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[18]||(l[18]=[p("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),p("p",{class:"mb-0"}," Enter your Account Details ",-1)])),_:1,__:[18]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).username,"onUpdate:modelValue":l[1]||(l[1]=a=>o(s).username=a),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).email,"onUpdate:modelValue":l[2]||(l[2]=a=>o(s).email=a),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).password,"onUpdate:modelValue":l[3]||(l[3]=a=>o(s).password=a),label:"Password",placeholder:"············",type:o(c)?"text":"password","append-inner-icon":o(c)?"bx-hide":"bx-show","onClick:appendInner":l[4]||(l[4]=a=>c.value=!o(c))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).cPassword,"onUpdate:modelValue":l[5]||(l[5]=a=>o(s).cPassword=a),label:"Confirm Password",placeholder:"············",type:o(f)?"text":"password","append-inner-icon":o(f)?"bx-hide":"bx-show","onClick:appendInner":l[6]||(l[6]=a=>f.value=!o(f))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[19]||(l[19]=[p("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),p("p",{class:"mb-0"}," Setup Information ",-1)])),_:1,__:[19]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).firstName,"onUpdate:modelValue":l[7]||(l[7]=a=>o(s).firstName=a),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).lastName,"onUpdate:modelValue":l[8]||(l[8]=a=>o(s).lastName=a),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(b,{modelValue:o(s).country,"onUpdate:modelValue":l[9]||(l[9]=a=>o(s).country=a),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(b,{modelValue:o(s).language,"onUpdate:modelValue":l[10]||(l[10]=a=>o(s).language=a),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[20]||(l[20]=[p("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),p("p",{class:"mb-0"}," Add Social Links ",-1)])),_:1,__:[20]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).twitter,"onUpdate:modelValue":l[11]||(l[11]=a=>o(s).twitter=a),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).facebook,"onUpdate:modelValue":l[12]||(l[12]=a=>o(s).facebook=a),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).googlePlus,"onUpdate:modelValue":l[13]||(l[13]=a=>o(s).googlePlus=a),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).linkedIn,"onUpdate:modelValue":l[14]||(l[14]=a=>o(s).linkedIn=a),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),p("div",re,[e(v,{color:"secondary",variant:"tonal",disabled:o(d)===0,onClick:l[16]||(l[16]=a=>d.value--)},{default:t(()=>[e(A,{icon:"bx-left-arrow-alt",start:"",class:"flip-in-rtl"}),l[21]||(l[21]=g(" Previous "))]),_:1,__:[21]},8,["disabled"]),x.length-1===o(d)?(h(),P(v,{key:0,color:"success",onClick:F},{default:t(()=>l[22]||(l[22]=[g(" submit ")])),_:1,__:[22]})):(h(),P(v,{key:1,onClick:l[17]||(l[17]=a=>d.value++)},{default:t(()=>[l[23]||(l[23]=g(" Next ")),e(A,{icon:"bx-right-arrow-alt",end:"",class:"flip-in-rtl"})]),_:1,__:[23]}))])]),_:1})]),_:1})]),_:1})],64)}}}),de={class:"d-flex flex-wrap gap-4 justify-space-between mt-8"},ne=N({__name:"DemoFormWizardNumberedBasic",setup(U){const x=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],d=V(0),c=V(!1),f=V(!1),s=V({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),F=()=>{console.log(s.value)};return(L,l)=>{const w=B,n=R,b=W;return h(),P(_,null,{default:t(()=>[e(D,null,{default:t(()=>[e(w,{"current-step":o(d),"onUpdate:currentStep":l[0]||(l[0]=a=>I(d)?d.value=a:null),items:x,class:"stepper-icon-step-bg"},null,8,["current-step"])]),_:1}),e($),e(D,null,{default:t(()=>[e(T,null,{default:t(()=>[e(q,{modelValue:o(d),"onUpdate:modelValue":l[15]||(l[15]=a=>I(d)?d.value=a:null),class:"disable-tab-transition"},{default:t(()=>[e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[18]||(l[18]=[p("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),p("p",{class:"mb-0"}," Enter your Account Details ",-1)])),_:1,__:[18]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).username,"onUpdate:modelValue":l[1]||(l[1]=a=>o(s).username=a),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).email,"onUpdate:modelValue":l[2]||(l[2]=a=>o(s).email=a),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).password,"onUpdate:modelValue":l[3]||(l[3]=a=>o(s).password=a),label:"Password",placeholder:"············",type:o(c)?"text":"password",autocomplete:"password","append-inner-icon":o(c)?"bx-hide":"bx-show","onClick:appendInner":l[4]||(l[4]=a=>c.value=!o(c))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).cPassword,"onUpdate:modelValue":l[5]||(l[5]=a=>o(s).cPassword=a),label:"Confirm Password",autocomplete:"confirm-password",placeholder:"············",type:o(f)?"text":"password","append-inner-icon":o(f)?"bx-hide":"bx-show","onClick:appendInner":l[6]||(l[6]=a=>f.value=!o(f))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[19]||(l[19]=[p("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),p("p",{class:"mb-0"}," Setup Information ",-1)])),_:1,__:[19]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).firstName,"onUpdate:modelValue":l[7]||(l[7]=a=>o(s).firstName=a),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).lastName,"onUpdate:modelValue":l[8]||(l[8]=a=>o(s).lastName=a),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(b,{modelValue:o(s).country,"onUpdate:modelValue":l[9]||(l[9]=a=>o(s).country=a),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(b,{modelValue:o(s).language,"onUpdate:modelValue":l[10]||(l[10]=a=>o(s).language=a),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[20]||(l[20]=[p("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),p("p",{class:"mb-0"}," Add Social Links ",-1)])),_:1,__:[20]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).twitter,"onUpdate:modelValue":l[11]||(l[11]=a=>o(s).twitter=a),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).facebook,"onUpdate:modelValue":l[12]||(l[12]=a=>o(s).facebook=a),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).googlePlus,"onUpdate:modelValue":l[13]||(l[13]=a=>o(s).googlePlus=a),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).linkedIn,"onUpdate:modelValue":l[14]||(l[14]=a=>o(s).linkedIn=a),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),p("div",de,[e(v,{color:"secondary",variant:"tonal",disabled:o(d)===0,onClick:l[16]||(l[16]=a=>d.value--)},{default:t(()=>[e(A,{icon:"bx-left-arrow-alt",start:"",class:"flip-in-rtl"}),l[21]||(l[21]=g(" Previous "))]),_:1,__:[21]},8,["disabled"]),x.length-1===o(d)?(h(),P(v,{key:0,color:"success",onClick:F},{default:t(()=>l[22]||(l[22]=[g(" submit ")])),_:1,__:[22]})):(h(),P(v,{key:1,onClick:l[17]||(l[17]=a=>d.value++)},{default:t(()=>[l[23]||(l[23]=g(" Next ")),e(A,{icon:"bx-right-arrow-alt",end:"",class:"flip-in-rtl"})]),_:1,__:[23]}))])]),_:1})]),_:1})]),_:1})}}}),me={class:"d-flex flex-wrap gap-4 justify-space-between mt-8"},pe=N({__name:"DemoFormWizardNumberedModernVertical",setup(U){const x=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],d=V(0),c=V(!1),f=V(!1),s=V({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),F=()=>{console.log(s.value)};return(L,l)=>{const w=B,n=R,b=W;return h(),P(C,null,{default:t(()=>[e(r,{cols:"12",md:"4"},{default:t(()=>[e(w,{"current-step":o(d),"onUpdate:currentStep":l[0]||(l[0]=a=>I(d)?d.value=a:null),direction:"vertical",items:x},null,8,["current-step"])]),_:1}),e(r,{cols:"12",md:"8"},{default:t(()=>[e(_,null,{default:t(()=>[e(D,null,{default:t(()=>[e(T,null,{default:t(()=>[e(q,{modelValue:o(d),"onUpdate:modelValue":l[15]||(l[15]=a=>I(d)?d.value=a:null),class:"disable-tab-transition"},{default:t(()=>[e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[18]||(l[18]=[p("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),p("p",{class:"mb-0"}," Enter your Account Details ",-1)])),_:1,__:[18]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).username,"onUpdate:modelValue":l[1]||(l[1]=a=>o(s).username=a),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).email,"onUpdate:modelValue":l[2]||(l[2]=a=>o(s).email=a),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).password,"onUpdate:modelValue":l[3]||(l[3]=a=>o(s).password=a),placeholder:"············",label:"Password",type:o(c)?"text":"password","append-inner-icon":o(c)?"bx-hide":"bx-show","onClick:appendInner":l[4]||(l[4]=a=>c.value=!o(c))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).cPassword,"onUpdate:modelValue":l[5]||(l[5]=a=>o(s).cPassword=a),placeholder:"············",label:"Confirm Password",type:o(f)?"text":"password","append-inner-icon":o(f)?"bx-hide":"bx-show","onClick:appendInner":l[6]||(l[6]=a=>f.value=!o(f))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[19]||(l[19]=[p("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),p("p",{class:"mb-0"}," Setup Information ",-1)])),_:1,__:[19]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).firstName,"onUpdate:modelValue":l[7]||(l[7]=a=>o(s).firstName=a),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).lastName,"onUpdate:modelValue":l[8]||(l[8]=a=>o(s).lastName=a),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(b,{modelValue:o(s).country,"onUpdate:modelValue":l[9]||(l[9]=a=>o(s).country=a),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(b,{modelValue:o(s).language,"onUpdate:modelValue":l[10]||(l[10]=a=>o(s).language=a),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[20]||(l[20]=[p("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),p("p",{class:"mb-0"}," Add Social Links ",-1)])),_:1,__:[20]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).twitter,"onUpdate:modelValue":l[11]||(l[11]=a=>o(s).twitter=a),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).facebook,"onUpdate:modelValue":l[12]||(l[12]=a=>o(s).facebook=a),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).googlePlus,"onUpdate:modelValue":l[13]||(l[13]=a=>o(s).googlePlus=a),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).linkedIn,"onUpdate:modelValue":l[14]||(l[14]=a=>o(s).linkedIn=a),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),p("div",me,[e(v,{color:"secondary",variant:"tonal",disabled:o(d)===0,onClick:l[16]||(l[16]=a=>d.value--)},{default:t(()=>[e(A,{icon:"bx-left-arrow-alt",start:"",class:"flip-in-rtl"}),l[21]||(l[21]=g(" Previous "))]),_:1,__:[21]},8,["disabled"]),x.length-1===o(d)?(h(),P(v,{key:0,color:"success",onClick:F},{default:t(()=>l[22]||(l[22]=[g(" submit ")])),_:1,__:[22]})):(h(),P(v,{key:1,onClick:l[17]||(l[17]=a=>d.value++)},{default:t(()=>[l[23]||(l[23]=g(" Next ")),e(A,{icon:"bx-right-arrow-alt",end:"",class:"flip-in-rtl"})]),_:1,__:[23]}))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),ue={class:"d-flex flex-wrap gap-4 justify-space-between mt-8"},ce={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},Ve={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},fe=N({__name:"DemoFormWizardNumberedValidation",setup(U){const x=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],d=V(0),c=V(!1),f=V(!1),s=V(!0),F=V(),L=V(),l=V(),w=V({username:"",email:"",password:"",cPassword:""}),n=V({firstName:"",lastName:"",country:void 0,language:void 0}),b=V({twitter:"",facebook:"",googlePlus:"",linkedIn:""}),a=()=>{var m;(m=F.value)==null||m.validate().then(i=>{i.valid?(d.value++,s.value=!0):s.value=!1})},M=()=>{var m;(m=L.value)==null||m.validate().then(i=>{i.valid?(d.value++,s.value=!0):s.value=!1})},H=()=>{var m;(m=l.value)==null||m.validate().then(i=>{i.valid?(s.value=!0,console.log({...w.value,...n.value,...b.value})):s.value=!1})};return(m,i)=>{const J=B,y=R,j=W;return h(),P(_,null,{default:t(()=>[e(D,null,{default:t(()=>[e(J,{"current-step":o(d),"onUpdate:currentStep":i[0]||(i[0]=u=>I(d)?d.value=u:null),items:x,"is-active-step-valid":o(s)},null,8,["current-step","is-active-step-valid"])]),_:1}),e($),e(D,null,{default:t(()=>[e(q,{modelValue:o(d),"onUpdate:modelValue":i[17]||(i[17]=u=>I(d)?d.value=u:null),class:"disable-tab-transition"},{default:t(()=>[e(S,null,{default:t(()=>[e(o(T),{ref_key:"refAccountForm",ref:F,onSubmit:G(a,["prevent"])},{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>i[18]||(i[18]=[p("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),p("p",{class:"mb-0"}," Enter your Account Details ",-1)])),_:1,__:[18]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(y,{modelValue:o(w).username,"onUpdate:modelValue":i[1]||(i[1]=u=>o(w).username=u),placeholder:"CarterLeonardo",rules:["requiredValidator"in m?m.requiredValidator:o(k)],label:"Username"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(y,{modelValue:o(w).email,"onUpdate:modelValue":i[2]||(i[2]=u=>o(w).email=u),placeholder:"carterleonardo@gmail.com",rules:["requiredValidator"in m?m.requiredValidator:o(k),"emailValidator"in m?m.emailValidator:o(X)],label:"Email"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(y,{modelValue:o(w).password,"onUpdate:modelValue":i[3]||(i[3]=u=>o(w).password=u),label:"Password",placeholder:"············",rules:["requiredValidator"in m?m.requiredValidator:o(k),"passwordValidator"in m?m.passwordValidator:o(Y)],type:o(c)?"text":"password",autocomplete:"password","append-inner-icon":o(c)?"bx-hide":"bx-show","onClick:appendInner":i[4]||(i[4]=u=>c.value=!o(c))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(y,{modelValue:o(w).cPassword,"onUpdate:modelValue":i[5]||(i[5]=u=>o(w).cPassword=u),label:"Confirm Password",autocomplete:"confirm-password",placeholder:"············",rules:["requiredValidator"in m?m.requiredValidator:o(k),("confirmedValidator"in m?m.confirmedValidator:o(Z))(o(w).cPassword,o(w).password)],type:o(f)?"text":"password","append-inner-icon":o(f)?"bx-hide":"bx-show","onClick:appendInner":i[6]||(i[6]=u=>f.value=!o(f))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[p("div",ue,[e(v,{color:"secondary",variant:"tonal",disabled:""},{default:t(()=>[e(A,{icon:"bx-left-arrow-alt",start:"",class:"flip-in-rtl"}),i[19]||(i[19]=g(" Previous "))]),_:1,__:[19]}),e(v,{type:"submit"},{default:t(()=>[i[20]||(i[20]=g(" Next ")),e(A,{icon:"bx-right-arrow-alt",end:"",class:"flip-in-rtl"})]),_:1,__:[20]})])]),_:1})]),_:1})]),_:1},512)]),_:1}),e(S,null,{default:t(()=>[e(o(T),{ref_key:"refPersonalForm",ref:L,onSubmit:G(M,["prevent"])},{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>i[21]||(i[21]=[p("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),p("p",{class:"mb-0"}," Setup Information ",-1)])),_:1,__:[21]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(y,{modelValue:o(n).firstName,"onUpdate:modelValue":i[7]||(i[7]=u=>o(n).firstName=u),label:"First Name",rules:["requiredValidator"in m?m.requiredValidator:o(k)],placeholder:"Leonard"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(y,{modelValue:o(n).lastName,"onUpdate:modelValue":i[8]||(i[8]=u=>o(n).lastName=u),label:"Last Name",rules:["requiredValidator"in m?m.requiredValidator:o(k)],placeholder:"Carter"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(j,{modelValue:o(n).country,"onUpdate:modelValue":i[9]||(i[9]=u=>o(n).country=u),label:"Country",rules:["requiredValidator"in m?m.requiredValidator:o(k)],placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(j,{modelValue:o(n).language,"onUpdate:modelValue":i[10]||(i[10]=u=>o(n).language=u),label:"Language",rules:["requiredValidator"in m?m.requiredValidator:o(k)],placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[p("div",ce,[e(v,{color:"secondary",variant:"tonal",onClick:i[11]||(i[11]=u=>d.value--)},{default:t(()=>[e(A,{icon:"bx-left-arrow-alt",start:"",class:"flip-in-rtl"}),i[22]||(i[22]=g(" Previous "))]),_:1,__:[22]}),e(v,{type:"submit"},{default:t(()=>[i[23]||(i[23]=g(" Next ")),e(A,{icon:"bx-right-arrow-alt",end:"",class:"flip-in-rtl"})]),_:1,__:[23]})])]),_:1})]),_:1})]),_:1},512)]),_:1}),e(S,null,{default:t(()=>[e(o(T),{ref_key:"refSocialLinkForm",ref:l,onSubmit:G(H,["prevent"])},{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>i[24]||(i[24]=[p("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),p("p",{class:"mb-0"}," Add Social Links ",-1)])),_:1,__:[24]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(y,{modelValue:o(b).twitter,"onUpdate:modelValue":i[12]||(i[12]=u=>o(b).twitter=u),placeholder:"https://twitter.com/abc",rules:["requiredValidator"in m?m.requiredValidator:o(k),"urlValidator"in m?m.urlValidator:o(E)],label:"Twitter"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(y,{modelValue:o(b).facebook,"onUpdate:modelValue":i[13]||(i[13]=u=>o(b).facebook=u),placeholder:"https://facebook.com/abc",rules:["requiredValidator"in m?m.requiredValidator:o(k),"urlValidator"in m?m.urlValidator:o(E)],label:"Facebook"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(y,{modelValue:o(b).googlePlus,"onUpdate:modelValue":i[14]||(i[14]=u=>o(b).googlePlus=u),placeholder:"https://plus.google.com/abc",rules:["requiredValidator"in m?m.requiredValidator:o(k),"urlValidator"in m?m.urlValidator:o(E)],label:"Google+"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(y,{modelValue:o(b).linkedIn,"onUpdate:modelValue":i[15]||(i[15]=u=>o(b).linkedIn=u),placeholder:"https://likedin.com/abc",rules:["requiredValidator"in m?m.requiredValidator:o(k),"urlValidator"in m?m.urlValidator:o(E)],label:"LinkedIn"},null,8,["modelValue","rules"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[p("div",Ve,[e(v,{color:"secondary",variant:"tonal",onClick:i[16]||(i[16]=u=>d.value--)},{default:t(()=>[e(A,{icon:"bx-left-arrow-alt",start:"",class:"flip-in-rtl"}),i[25]||(i[25]=g(" Previous "))]),_:1,__:[25]}),e(v,{color:"success",type:"submit"},{default:t(()=>i[26]||(i[26]=[g(" submit ")])),_:1,__:[26]})])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),be={class:"d-flex flex-wrap gap-4 justify-space-between mt-8"},we=N({__name:"DemoFormWizardNumberedVertical",setup(U){const x=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],d=V(0),c=V(!1),f=V(!1),s=V({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),F=()=>{console.log(s.value)};return(L,l)=>{const w=B,n=R,b=W;return h(),P(_,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12",md:"4",class:Q(L.$vuetify.display.smAndDown?"border-b":"border-e")},{default:t(()=>[e(D,null,{default:t(()=>[e(w,{"current-step":o(d),"onUpdate:currentStep":l[0]||(l[0]=a=>I(d)?d.value=a:null),direction:"vertical",items:x},null,8,["current-step"])]),_:1})]),_:1},8,["class"]),e(r,{cols:"12",md:"8"},{default:t(()=>[e(D,null,{default:t(()=>[e(T,null,{default:t(()=>[e(q,{modelValue:o(d),"onUpdate:modelValue":l[15]||(l[15]=a=>I(d)?d.value=a:null),class:"disable-tab-transition"},{default:t(()=>[e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[18]||(l[18]=[p("h6",{class:"text-h6 font-weight-medium"}," Account Details ",-1),p("p",{class:"mb-0"}," Enter your Account Details ",-1)])),_:1,__:[18]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).username,"onUpdate:modelValue":l[1]||(l[1]=a=>o(s).username=a),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).email,"onUpdate:modelValue":l[2]||(l[2]=a=>o(s).email=a),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).password,"onUpdate:modelValue":l[3]||(l[3]=a=>o(s).password=a),placeholder:"············",label:"Password",type:o(c)?"text":"password",autocomplete:"password","append-inner-icon":o(c)?"bx-hide":"bx-show","onClick:appendInner":l[4]||(l[4]=a=>c.value=!o(c))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).cPassword,"onUpdate:modelValue":l[5]||(l[5]=a=>o(s).cPassword=a),placeholder:"············",label:"Confirm Password",autocomplete:"confirm-password",type:o(f)?"text":"password","append-inner-icon":o(f)?"bx-hide":"bx-show","onClick:appendInner":l[6]||(l[6]=a=>f.value=!o(f))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[19]||(l[19]=[p("h6",{class:"text-h6 font-weight-medium"}," Personal Info ",-1),p("p",{class:"mb-0"}," Setup Information ",-1)])),_:1,__:[19]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).firstName,"onUpdate:modelValue":l[7]||(l[7]=a=>o(s).firstName=a),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).lastName,"onUpdate:modelValue":l[8]||(l[8]=a=>o(s).lastName=a),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(b,{modelValue:o(s).country,"onUpdate:modelValue":l[9]||(l[9]=a=>o(s).country=a),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(b,{modelValue:o(s).language,"onUpdate:modelValue":l[10]||(l[10]=a=>o(s).language=a),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(S,null,{default:t(()=>[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>l[20]||(l[20]=[p("h6",{class:"text-h6 font-weight-medium"}," Social Links ",-1),p("p",{class:"mb-0"}," Add Social Links ",-1)])),_:1,__:[20]}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).twitter,"onUpdate:modelValue":l[11]||(l[11]=a=>o(s).twitter=a),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).facebook,"onUpdate:modelValue":l[12]||(l[12]=a=>o(s).facebook=a),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).googlePlus,"onUpdate:modelValue":l[13]||(l[13]=a=>o(s).googlePlus=a),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(n,{modelValue:o(s).linkedIn,"onUpdate:modelValue":l[14]||(l[14]=a=>o(s).linkedIn=a),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),p("div",be,[e(v,{color:"secondary",variant:"tonal",disabled:o(d)===0,onClick:l[16]||(l[16]=a=>d.value--)},{default:t(()=>[e(A,{icon:"bx-left-arrow-alt",start:"",class:"flip-in-rtl"}),l[21]||(l[21]=g(" Previous "))]),_:1,__:[21]},8,["disabled"]),x.length-1===o(d)?(h(),P(v,{key:0,color:"success",onClick:F},{default:t(()=>l[22]||(l[22]=[g(" submit ")])),_:1,__:[22]})):(h(),P(v,{key:1,onClick:l[17]||(l[17]=a=>d.value++)},{default:t(()=>[l[23]||(l[23]=g(" Next ")),e(A,{icon:"bx-right-arrow-alt",end:"",class:"flip-in-rtl"})]),_:1,__:[23]}))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),al=N({__name:"form-wizard-numbered",setup(U){return(x,d)=>{const c=O;return h(),K(z,null,[e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(c,{variant:"outlined",title:"Basic",code:o(ee)},{default:t(()=>[e(ne)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(c,{variant:"outlined",title:"Validation",code:o(te)},{default:t(()=>[e(fe)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(c,{variant:"outlined",title:"Vertical",code:o(ae)},{default:t(()=>[e(we)]),_:1},8,["code"])]),_:1})]),_:1}),e($,{class:"my-10 mx-n6"}),d[0]||(d[0]=p("h3",{class:"text-h3 my-4"}," Modern ",-1)),e(C,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(c,{variant:"outlined",title:"Modern Vertical",code:o(oe)},{default:t(()=>[e(pe)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(c,{variant:"outlined",title:"Modern Basic",code:o(le)},{default:t(()=>[e(ie)]),_:1},8,["code"])]),_:1})]),_:1})],64)}}});export{al as default};
