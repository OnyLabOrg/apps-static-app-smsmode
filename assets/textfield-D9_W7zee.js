import{_ as b}from"./AppTextField.vue_vue_type_script_setup_true_lang-BlZx3gb-.js";import{V as U}from"./VNodeRenderer-D2zzZ8cD.js";import{d as v,r as x,g as f,o as u,m as r,aW as V,f as t,b as e,c as S,l as q,$ as F,ai as j,bc as H,H as N,cH as L,t as a,q as z,e as o}from"./index-CH8kNowV.js";import{V as B}from"./VTooltip-CbPwIm9c.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as C,a as s}from"./VRow-CsY21fqc.js";import{r as W,e as E}from"./validators-BJEf8OaU.js";import{V as Y}from"./VForm-DwmW1sbL.js";import{V as w}from"./VTextField-CcG7RTGl.js";import{_ as O}from"./AppCardCode.vue_vue_type_style_index_0_lang-Dz_6GXV6.js";import"./VOverlay-Cllyhr2a.js";import"./easing-Bybner-F.js";import"./delay-BbqhxiqH.js";import"./lazy-DkYd9Lh9.js";import"./scopeId-DO3lrn96.js";import"./transition-BPaD_Yn2.js";import"./forwardRefs-C-GTDzx5.js";/* empty css              */import"./helpers-BGv4x_9E.js";import"./form-026c-72C.js";/* empty css                   */import"./VCounter-B01K0t8f.js";import"./VField-C5r-5n9D.js";import"./VInput-BcExbrvz.js";import"./index-BUpOgCMW.js";import"./vue3-perfect-scrollbar-CdXtvrte.js";import"./VCard-DRKTYnd3.js";import"./VAvatar-Bfne1_Cm.js";import"./VImg-kq4JjoOP.js";import"./VCardText-D4xbnkdK.js";import"./VDivider-CBJPQ-Nw.js";const G={key:0,class:"ms-3"},J=v({__name:"DemoTextfieldIconSlots",setup(_){const n=x("Hey!"),l=x(!1),m=()=>{l.value=!0,n.value="Wait for it...",setTimeout(()=>{l.value=!1,n.value="You've clicked me!"},2e3)};return(i,p)=>{const c=b;return u(),f(c,{modelValue:r(n),"onUpdate:modelValue":p[0]||(p[0]=d=>V(n)?n.value=d:null),clearable:"",label:"Message",placeholder:"Hey!!",type:"text",class:"textfield-demo-icon-slot"},{prepend:t(()=>[e(B,{location:"bottom"},{activator:t(({props:d})=>[e(F,z(d,{icon:"bx-help-circle"}),null,16)]),default:t(()=>[p[1]||(p[1]=a(" I'm a tooltip "))]),_:1,__:[1]})]),"append-inner":t(()=>[e(L,{"leave-absolute":""},{default:t(()=>[r(l)?(u(),f(H,{key:0,color:"primary",width:"3",size:"24",indeterminate:""})):(u(),f(r(U),{key:1,class:"text-2xl",nodes:r(N).app.logo},null,8,["nodes"]))]),_:1})]),append:t(()=>[e(j,{icon:i.$vuetify.display.smAndDown,onClick:m},{default:t(()=>[e(F,{icon:"bx-target-lock",color:"#fff",size:"22"}),i.$vuetify.display.mdAndUp?(u(),S("span",G,"Click me")):q("",!0)]),_:1},8,["icon"])]),_:1},8,["modelValue"])}}}),K=g(J,[["__scopeId","data-v-8bbd2782"]]),Q=v({__name:"DemoTextfieldPasswordInput",setup(_){const n=x(!1),l=x(!0),m=x("Password"),i=x("wqfasds"),p={required:c=>!!c||"Required.",min:c=>c.length>=8||"Min 8 characters"};return(c,d)=>{const h=b;return u(),f(C,null,{default:t(()=>[e(s,{cols:"12",sm:"6"},{default:t(()=>[e(h,{modelValue:r(m),"onUpdate:modelValue":d[0]||(d[0]=T=>V(m)?m.value=T:null),"append-inner-icon":r(n)?"bx-hide":"bx-show",rules:[p.required,p.min],type:r(n)?"text":"password",name:"input-10-1",label:"Normal with hint text",hint:"At least 8 characters",placeholder:"············",counter:"","onClick:appendInner":d[1]||(d[1]=T=>n.value=!r(n))},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1}),e(s,{cols:"12",sm:"6"},{default:t(()=>[e(h,{modelValue:r(i),"onUpdate:modelValue":d[2]||(d[2]=T=>V(i)?i.value=T:null),rules:[p.required,p.min],"append-inner-icon":r(l)?"bx-hide":"bx-show",type:r(l)?"text":"password",name:"input-10-2",placeholder:"············",label:"Visible",hint:"At least 8 characters","onClick:appendInner":d[3]||(d[3]=T=>l.value=!r(l))},null,8,["modelValue","rules","append-inner-icon","type"])]),_:1})]),_:1})}}}),X={};function Z(_,n){const l=b;return u(),f(l,null,{label:t(()=>[n[0]||(n[0]=a(" What about  ")),n[1]||(n[1]=o("strong",null,"icon",-1)),n[2]||(n[2]=a(" here? ")),e(F,{icon:"bx-file-find"})]),_:1})}const ee=g(X,[["render",Z]]),le=v({__name:"DemoTextfieldIconEvents",setup(_){const n=x("Hey!"),l=x(!0),m=x(0),i=()=>{l.value=!l.value},p=()=>{n.value=""},c=()=>{m.value=0},d=()=>{c(),p()};return(h,T)=>{const A=b;return u(),f(A,{modelValue:r(n),"onUpdate:modelValue":T[0]||(T[0]=y=>V(n)?n.value=y:null),clearable:"",type:"text",label:"Message",color:"primary",placeholder:"Hey!!","clear-icon":"bx-x-circle","append-icon":r(n)?h.$vuetify.locale.isRtl?"bx-arrow-from-right":"bx-arrow-from-left":"bx-microphone","append-inner-icon":r(l)?"bx-alarm":"bx-alarm-off","onClick:appendInner":i,"onClick:append":d,"onClick:clear":p},null,8,["modelValue","append-icon","append-inner-icon"])}}}),te=v({__name:"DemoTextfieldValidation",setup(_){const n=x("");return(l,m)=>{const i=b;return u(),f(Y,null,{default:t(()=>[e(i,{modelValue:r(n),"onUpdate:modelValue":m[0]||(m[0]=p=>V(n)?n.value=p:null),rules:["requiredValidator"in l?l.requiredValidator:r(W),"emailValidator"in l?l.emailValidator:r(E)],placeholder:"johnedoe@email.com",label:"E-mail"},null,8,["modelValue","rules"])]),_:1})}}}),oe={};function ne(_,n){const l=b;return u(),f(l,{label:"Regular",placeholder:"Placeholder Text","single-line":""})}const ae=g(oe,[["render",ne]]),re=v({__name:"DemoTextfieldPrefixesAndSuffixes",setup(_){const n=x(10.05),l=x(28.02),m=x("example"),i=x("04:56");return(p,c)=>{const d=b;return u(),f(C,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(d,{modelValue:r(n),"onUpdate:modelValue":c[0]||(c[0]=h=>V(n)?n.value=h:null),label:"Amount",prefix:"$",type:"number",placeholder:"10.05"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(d,{modelValue:r(l),"onUpdate:modelValue":c[1]||(c[1]=h=>V(l)?l.value=h:null),label:"Weight",suffix:"lbs",type:"number",placeholder:"28.02"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(d,{modelValue:r(m),"onUpdate:modelValue":c[2]||(c[2]=h=>V(m)?m.value=h:null),label:"Email address",suffix:"@gmail.com",placeholder:"example"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(d,{modelValue:r(i),"onUpdate:modelValue":c[3]||(c[3]=h=>V(i)?i.value=h:null),label:"Label Text",type:"time",suffix:"PST",placeholder:"04:56"},null,8,["modelValue"])]),_:1})]),_:1})}}}),se={};function ie(_,n){const l=b;return u(),f(C,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(l,{label:"Prepend","prepend-icon":"bx-map",placeholder:"Placeholder Text"})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(l,{label:"Prepend Inner","prepend-inner-icon":"bx-map",placeholder:"Placeholder Text"})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(l,{label:"Append","append-icon":"bx-map",placeholder:"Placeholder Text"})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(l,{label:"Append Inner","append-inner-icon":"bx-map",placeholder:"Placeholder Text"})]),_:1})]),_:1})}const de=g(se,[["render",ie]]),pe={};function ce(_,n){const l=b;return u(),f(l,{color:"success",label:"First name",placeholder:"Placeholder Text"})}const me=g(pe,[["render",ce]]),ue={};function fe(_,n){const l=b;return u(),f(l,{placeholder:"Placeholder Text",label:"Regular",clearable:""})}const xe=g(ue,[["render",fe]]),_e=v({__name:"DemoTextfieldCounter",setup(_){const n=x("Preliminary report"),l=x("California is a state in the western United States"),m=[i=>i.length<=25||"Max 25 characters"];return(i,p)=>{const c=b;return u(),f(C,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[e(c,{modelValue:r(n),"onUpdate:modelValue":p[0]||(p[0]=d=>V(n)?n.value=d:null),rules:m,counter:"25",placeholder:"Placeholder Text",hint:"This field uses counter prop",label:"Regular"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(c,{modelValue:r(l),"onUpdate:modelValue":p[1]||(p[1]=d=>V(l)?l.value=d:null),rules:m,counter:"",maxlength:"25",placeholder:"Placeholder Text",hint:"This field uses maxlength attribute",label:"Limit exceeded"},null,8,["modelValue"])]),_:1})]),_:1})}}}),he={};function be(_,n){const l=b;return u(),f(C,null,{default:t(()=>[e(s,null,{default:t(()=>[e(l,{label:"Disabled",placeholder:"Placeholder Text",disabled:""})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(l,{placeholder:"Placeholder Text",label:"Readonly",readonly:""})]),_:1})]),_:1})}const Ve=g(he,[["render",be]]),Te={};function ge(_,n){return u(),f(C,null,{default:t(()=>[e(s,{cols:"12",md:"6"},{default:t(()=>[e(w,{label:"Outlined",variant:"outlined"})]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(w,{label:"Filled",variant:"filled",placeholder:"Placeholder Text"})]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(w,{label:"Solo",variant:"solo",placeholder:"Placeholder Text"})]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(w,{label:"Plain",variant:"plain",placeholder:"Placeholder Text"})]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(w,{label:"Underlined",variant:"underlined",placeholder:"Placeholder Text"})]),_:1})]),_:1})}const ve=g(Te,[["render",ge]]),Ce={};function we(_,n){const l=b;return u(),f(l,{label:"Compact",density:"compact",placeholder:"Placeholder Text"})}const Ae=g(Ce,[["render",we]]),ye={};function Fe(_,n){const l=b;return u(),f(l,{label:"Regular",placeholder:"Placeholder Text"})}const Pe=g(ye,[["render",Fe]]),ke={ts:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
  />
</template>
`},Re={ts:`<template>
  <AppTextField
    placeholder="Placeholder Text"
    label="Regular"
    clearable
  />
</template>
`,js:`<template>
  <AppTextField
    placeholder="Placeholder Text"
    label="Regular"
    clearable
  />
</template>
`},Ie={ts:`<script lang="ts" setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="title"
        :rules="rules"
        counter="25"
        placeholder="Placeholder Text"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        placeholder="Placeholder Text"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="title"
        :rules="rules"
        counter="25"
        placeholder="Placeholder Text"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        placeholder="Placeholder Text"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`},$e={ts:`<template>
  <AppTextField
    color="success"
    label="First name"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <AppTextField
    color="success"
    label="First name"
    placeholder="Placeholder Text"
  />
</template>
`},Me={ts:`<template>
  <AppTextField
    label="Compact"
    density="compact"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <AppTextField
    label="Compact"
    density="compact"
    placeholder="Placeholder Text"
  />
</template>
`},De={ts:`<script lang="ts" setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    placeholder="Hey!!"
    clear-icon="bx-x-circle"
    :append-icon="message ? $vuetify.locale.isRtl ? 'bx-arrow-from-right' : 'bx-arrow-from-left' : 'bx-microphone'"
    :append-inner-icon="marker ? 'bx-alarm' : 'bx-alarm-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`,js:`<script setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    placeholder="Hey!!"
    clear-icon="bx-x-circle"
    :append-icon="message ? $vuetify.locale.isRtl ? 'bx-arrow-from-right' : 'bx-arrow-from-left' : 'bx-microphone'"
    :append-inner-icon="marker ? 'bx-alarm' : 'bx-alarm-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`},Ue={ts:`<script setup lang="ts">
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'

  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    label="Message"
    placeholder="Hey!!"
    type="text"
    class="textfield-demo-icon-slot"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="bx-help-circle"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          color="primary"
          width="3"
          size="24"
          indeterminate
        />

        <VNodeRenderer
          v-else
          class="text-2xl"
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon
          icon="bx-target-lock"
          color="#fff"
          size="22"
        />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </AppTextField>
</template>

<style lang="scss" scoped>
// .textfield-demo-icon-slot {
//   :deep(.v-input) {
//     align-content: center;

//     .v-input__prepend,
//     .v-input__append {
//       padding-block-start: 0 !important;
//     }

//     .v-input__prepend {
//       align-items: center;
//     }

//     .v-field__append-inner .v-progress-circular svg {
//       block-size: 1.3em;
//       inline-size: 1.3em;
//     }

//     .v-field__append-inner svg {
//       margin-block-start: 0.1rem;
//     }
//   }
// }
</style>
`,js:`<script setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'
  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    label="Message"
    placeholder="Hey!!"
    type="text"
    class="textfield-demo-icon-slot"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="bx-help-circle"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          color="primary"
          width="3"
          size="24"
          indeterminate
        />

        <VNodeRenderer
          v-else
          class="text-2xl"
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon
          icon="bx-target-lock"
          color="#fff"
          size="22"
        />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </AppTextField>
</template>

<style lang="scss" scoped>
// .textfield-demo-icon-slot {
//   :deep(.v-input) {
//     align-content: center;

//     .v-input__prepend,
//     .v-input__append {
//       padding-block-start: 0 !important;
//     }

//     .v-input__prepend {
//       align-items: center;
//     }

//     .v-field__append-inner .v-progress-circular svg {
//       block-size: 1.3em;
//       inline-size: 1.3em;
//     }

//     .v-field__append-inner svg {
//       margin-block-start: 0.1rem;
//     }
//   }
// }
</style>
`},Se={ts:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        label="Prepend"
        prepend-icon="bx-map"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Prepend Inner"
        prepend-inner-icon="bx-map"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append"
        append-icon="bx-map"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append Inner"
        append-inner-icon="bx-map"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        label="Prepend"
        prepend-icon="bx-map"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Prepend Inner"
        prepend-inner-icon="bx-map"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append"
        append-icon="bx-map"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append Inner"
        append-inner-icon="bx-map"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`},qe={ts:`<template>
  <AppTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="bx-file-find" />
    </template>
  </AppTextField>
</template>
`,js:`<template>
  <AppTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="bx-file-find" />
    </template>
  </AppTextField>
</template>
`},je={ts:`<script lang="ts" setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: (value: string) => !!value || 'Required.',
  min: (v: string) => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="password"
        :append-inner-icon="show1 ? 'bx-hide' : 'bx-show' "
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        placeholder="············"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="confirmPassword"
        :rules="[rules.required, rules.min]"
        :append-inner-icon="show2 ? 'bx-hide' : 'bx-show' "
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        placeholder="············"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: value => !!value || 'Required.',
  min: v => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="password"
        :append-inner-icon="show1 ? 'bx-hide' : 'bx-show' "
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        placeholder="············"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="confirmPassword"
        :rules="[rules.required, rules.min]"
        :append-inner-icon="show2 ? 'bx-hide' : 'bx-show' "
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        placeholder="············"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`},He={ts:`<script setup lang="ts">
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
        placeholder="10.05"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
        placeholder="28.02"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
        placeholder="example"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
        placeholder="04:56"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
        placeholder="10.05"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
        placeholder="28.02"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
        placeholder="example"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
        placeholder="04:56"
      />
    </VCol>
  </VRow>
</template>
`},Ne={ts:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
    single-line
  />
</template>
`,js:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
    single-line
  />
</template>
`},Le={ts:`<template>
  <VRow>
    <VCol>
      <AppTextField
        label="Disabled"
        placeholder="Placeholder Text"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        placeholder="Placeholder Text"
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol>
      <AppTextField
        label="Disabled"
        placeholder="Placeholder Text"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        placeholder="Placeholder Text"
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`},ze={ts:`<script lang="ts" setup>
const email = ref('')
<\/script>

<template>
  <VForm>
    <AppTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      placeholder="johnedoe@email.com"
      label="E-mail"
    />
  </VForm>
</template>
`,js:`<script setup>
const email = ref('')
<\/script>

<template>
  <VForm>
    <AppTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      placeholder="johnedoe@email.com"
      label="E-mail"
    />
  </VForm>
</template>
`},Be={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Outlined"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Outlined"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`},gl=v({__name:"textfield",setup(_){return(n,l)=>{const m=Pe,i=O,p=Ae,c=ve,d=Ve,h=_e,T=xe,A=me,y=de,P=re,k=ae,R=te,I=le,$=ee,M=Q,D=K;return u(),f(C,{class:"match-height"},{default:t(()=>[e(s,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Basic",code:r(ke)},{default:t(()=>[l[0]||(l[0]=o("p",null,"Text fields components are used for collecting user provided information.",-1)),e(m)]),_:1,__:[0]},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Density",code:r(Me)},{default:t(()=>[l[1]||(l[1]=o("p",null,[a("The "),o("code",null,"density"),a(" prop decreases the height of the text field based upon levels of density; "),o("code",null,"default"),a(","),o("code",null,"comfortable"),a(", and "),o("code",null,"compact"),a(".")],-1)),e(p)]),_:1,__:[1]},8,["code"])]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(i,{title:"Variant",code:r(Be)},{default:t(()=>[l[2]||(l[2]=o("p",null,[a("Use "),o("code",null,"solo"),a(", "),o("code",null,"filled"),a(", "),o("code",null,"outlined"),a(", "),o("code",null,"plain"),a(" and "),o("code",null,"underlined"),a(" option of "),o("code",null,"variant"),a(" prop to change the look of the textfield. ")],-1)),e(c)]),_:1,__:[2]},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"State",code:r(Le)},{default:t(()=>[l[3]||(l[3]=o("p",null,"Text fields can be disabled or readonly.",-1)),e(d)]),_:1,__:[3]},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Counter",code:r(Ie)},{default:t(()=>[l[4]||(l[4]=o("p",null,[a("Use a "),o("code",null,"counter"),a(" prop to inform a user of the character limit.")],-1)),e(h)]),_:1,__:[4]},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Clearable",code:r(Re)},{default:t(()=>[l[5]||(l[5]=o("p",null,"When clearable, you can customize the clear icon with clear-icon.",-1)),e(T)]),_:1,__:[5]},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Custom Colors",code:r($e)},{default:t(()=>[l[6]||(l[6]=o("p",null,[a("Use "),o("code",null,"color"),a(" prop to change the input border color.")],-1)),e(A)]),_:1,__:[6]},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Icons",code:r(Se)},{default:t(()=>[l[7]||(l[7]=o("p",null,[a("You can add icons to the text field with "),o("code",null,"prepend-icon"),a(", "),o("code",null,"append-icon"),a(" and "),o("code",null,"append-inner-icon"),a(" and "),o("code",null,"prepend-inner-icon"),a(" props.")],-1)),e(y)]),_:1,__:[7]},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Prefixes and suffixes",code:r(He)},{default:t(()=>[l[8]||(l[8]=o("p",null,[a("The "),o("code",null,"prefix"),a(" and "),o("code",null,"suffix"),a(" properties allows you to prepend and append inline non-modifiable text next to the text field.")],-1)),e(P)]),_:1,__:[8]},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Single line",code:r(Ne)},{default:t(()=>[l[9]||(l[9]=o("p",null,[o("code",null,"single-line"),a(" text fields do not float their label on focus or with data.")],-1)),e(k)]),_:1,__:[9]},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Validation",code:r(ze)},{default:t(()=>[l[10]||(l[10]=o("p",null,[a("Vuetify includes simple validation through the "),o("code",null,"rules"),a(" prop.")],-1)),e(R)]),_:1,__:[10]},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Icon events",code:r(De)},{default:t(()=>[l[11]||(l[11]=o("p",null,[o("code",null,"click:prepend"),a(", "),o("code",null,"click:append"),a(", "),o("code",null,"click:append-inner"),a(", and "),o("code",null,"click:clear"),a(" will be emitted when you click on the respective icon")],-1)),e(I)]),_:1,__:[11]},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Label Slot",code:r(qe)},{default:t(()=>[l[12]||(l[12]=o("p",null,[a("Text field label can be defined in "),o("code",null,"label"),a(" slot - that will allow to use HTML content.")],-1)),e($)]),_:1,__:[12]},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Password input",code:r(je)},{default:t(()=>[l[13]||(l[13]=o("p",null,[a("Using the HTML input "),o("code",null,"type"),a(" password can be used with an appended icon and callback to control the visibility.")],-1)),e(M)]),_:1,__:[13]},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Icon slots",code:r(Ue)},{default:t(()=>[l[14]||(l[14]=o("p",null,[a("Instead of using "),o("code",null,"prepend"),a("/"),o("code",null,"append"),a("/"),o("code",null,"append-inner"),a(" icons you can use slots to extend input's functionality.")],-1)),e(D)]),_:1,__:[14]},8,["code"])]),_:1})]),_:1})}}});export{gl as default};
