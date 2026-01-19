import{V as w}from"./VMenu-CeIo03Bj.js";import{a as z,b as L,d as A,V as M}from"./VList-BnZB7mVK.js";import{V as J}from"./VListItemAction-CFO0QPf5.js";import{d as S,r as V,g as C,o as c,m as s,aW as P,f as o,b as e,t as l,ai as T,$ as v,b6 as j,b7 as N,c as h,e as n,b0 as I,l as g}from"./index-BeBG7se5.js";import{V as t}from"./VChip-BDq-4ie3.js";import{_ as B}from"./AppCombobox.vue_vue_type_script_setup_true_lang-CApn-FiC.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as D}from"./VAvatar-Ezomk3Rh.js";import{_ as R}from"./AppCardCode.vue_vue_type_style_index_0_lang-DMK61jdT.js";import{V as F,a as d}from"./VRow-DcAkoV74.js";import"./VOverlay-C9gJ4TBz.js";import"./easing-Bybner-F.js";import"./delay-t-efVJDY.js";import"./lazy-Cc9O5wjm.js";import"./scopeId-B5g1BDC2.js";import"./transition-BDOC5Uc_.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-NetQuTSg.js";import"./ssrBoot-Bjtt1dD1.js";import"./VDivider-DAIpLJuN.js";import"./VSlideGroup-JwXo4N0h.js";import"./VSelect-PHQB3_T7.js";import"./VTextField-SYXXouzY.js";/* empty css                   */import"./VCounter-DbvhImLE.js";import"./VField-CdT2DSY3.js";import"./form-J-oGqMJG.js";import"./VInput-ClLzGKQK.js";import"./index-DuS_zm-5.js";import"./VCheckboxBtn-CpSTl8MR.js";import"./VSelectionControl-CZNs0_kI.js";import"./filter-DMj4q03Q.js";import"./VImg-0KjYhfmJ.js";import"./vue3-perfect-scrollbar-B-TfroUy.js";import"./VCard-NIrRrA9M.js";import"./VCardText-51u1fWz-.js";/* empty css              */const U=S({__name:"DemoChipExpandable",setup(u){const i=V(!1);return(r,m)=>(c(),C(w,{modelValue:s(i),"onUpdate:modelValue":m[1]||(m[1]=p=>P(i)?i.value=p:null),transition:"scale-transition"},{activator:o(({props:p})=>[e(t,j(N(p)),{default:o(()=>m[2]||(m[2]=[l(" VueJS ")])),_:2,__:[2]},1040)]),default:o(()=>[e(M,null,{default:o(()=>[e(z,null,{append:o(()=>[e(J,{class:"ms-3"},{default:o(()=>[e(T,{icon:"",variant:"text",size:"x-small",color:"default",onClick:m[0]||(m[0]=p=>i.value=!1)},{default:o(()=>[e(v,{size:"20",icon:"bx-x"})]),_:1})]),_:1})]),default:o(()=>[e(L,{class:"mb-2"},{default:o(()=>m[3]||(m[3]=[l(" VueJS ")])),_:1,__:[3]}),e(A,null,{default:o(()=>m[4]||(m[4]=[l("The Progressive JavaScript Framework")])),_:1,__:[4]})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),Y=S({__name:"DemoChipInSelects",setup(u){const i=V(["Programming","Playing games","Sleeping"]),r=V(["Streaming","Eating","Programming","Playing games","Sleeping"]);return(m,p)=>{const _=B;return c(),C(_,{modelValue:s(i),"onUpdate:modelValue":p[0]||(p[0]=b=>P(i)?i.value=b:null),chips:"",clearable:"",multiple:"","closable-chips":"","clear-icon":"bx-x-circle",items:s(r),label:"Your favorite hobbies","prepend-icon":"bx-filter-alt"},null,8,["modelValue","items"])}}}),O={},q={class:"demo-space-x"};function G(u,i){return c(),h("div",q,[e(t,{size:"x-small"},{default:o(()=>i[0]||(i[0]=[l(" x-small chip ")])),_:1,__:[0]}),e(t,{size:"small"},{default:o(()=>i[1]||(i[1]=[l(" small chip ")])),_:1,__:[1]}),e(t,{size:"default"},{default:o(()=>i[2]||(i[2]=[l(" Default ")])),_:1,__:[2]}),e(t,{size:"large"},{default:o(()=>i[3]||(i[3]=[l(" large chip ")])),_:1,__:[3]}),e(t,{size:"x-large"},{default:o(()=>i[4]||(i[4]=[l(" x-large chip ")])),_:1,__:[4]})])}const H=y(O,[["render",G]]),K={class:"demo-space-x"},Q=S({__name:"DemoChipWithAvatar",setup(u){return(i,r)=>(c(),h("div",K,[e(t,null,{default:o(()=>[e(D,{image:s(I),start:""},null,8,["image"]),r[0]||(r[0]=n("span",null,"John Doe",-1))]),_:1,__:[0]}),e(t,null,{default:o(()=>[e(D,{image:s(I),start:""},null,8,["image"]),r[1]||(r[1]=n("span",null,"Darcy Nooser",-1))]),_:1,__:[1]}),e(t,{label:!1,"prepend-avatar":s(I),pill:""},{default:o(()=>r[2]||(r[2]=[n("span",null,"Felicia Risker",-1)])),_:1,__:[2]},8,["prepend-avatar"]),e(t,{label:!1,pill:""},{default:o(()=>[e(D,{image:s(I),start:""},null,8,["image"]),r[3]||(r[3]=n("span",null,"Minnie Mostly",-1))]),_:1,__:[3]})]))}}),X={},Z={class:"demo-space-x"};function ii(u,i){return c(),h("div",Z,[e(t,null,{default:o(()=>[e(v,{start:"",icon:"bx-user"}),i[0]||(i[0]=l(" Account "))]),_:1,__:[0]}),e(t,{color:"primary"},{default:o(()=>[e(v,{start:"",icon:"bx-star"}),i[1]||(i[1]=l(" Premium "))]),_:1,__:[1]}),e(t,{color:"secondary"},{default:o(()=>[e(v,{start:"",icon:"bx-cake"}),i[2]||(i[2]=l(" 1 Year "))]),_:1,__:[2]}),e(t,{color:"success"},{default:o(()=>[e(v,{start:"",icon:"bx-bell"}),i[3]||(i[3]=l(" Notification "))]),_:1,__:[3]}),e(t,{color:"info"},{default:o(()=>[e(v,{start:"",icon:"bx-message"}),i[4]||(i[4]=l(" Message "))]),_:1,__:[4]}),e(t,{color:"warning"},{default:o(()=>[e(v,{start:"",icon:"bx-error"}),i[5]||(i[5]=l(" Warning "))]),_:1,__:[5]}),e(t,{color:"error"},{default:o(()=>[e(v,{start:"",icon:"bx-error-circle"}),i[6]||(i[6]=l(" Error "))]),_:1,__:[6]})])}const ei=y(X,[["render",ii]]),oi={class:"demo-space-x"},li=S({__name:"DemoChipClosable",setup(u){const i=V(!0),r=V(!0),m=V(!0),p=V(!0),_=V(!0),b=V(!0),x=V(!0);return(k,a)=>(c(),h("div",oi,[s(i)?(c(),C(t,{key:0,closable:"","onClick:close":a[0]||(a[0]=f=>i.value=!s(i))},{default:o(()=>a[7]||(a[7]=[l(" Default ")])),_:1,__:[7]})):g("",!0),s(r)?(c(),C(t,{key:1,closable:"",color:"primary","onClick:close":a[1]||(a[1]=f=>r.value=!s(r))},{default:o(()=>a[8]||(a[8]=[l(" Primary ")])),_:1,__:[8]})):g("",!0),s(m)?(c(),C(t,{key:2,closable:"",color:"secondary","onClick:close":a[2]||(a[2]=f=>m.value=!s(m))},{default:o(()=>a[9]||(a[9]=[l(" Secondary ")])),_:1,__:[9]})):g("",!0),s(p)?(c(),C(t,{key:3,closable:"",color:"success","onClick:close":a[3]||(a[3]=f=>p.value=!s(p))},{default:o(()=>a[10]||(a[10]=[l(" Success ")])),_:1,__:[10]})):g("",!0),s(_)?(c(),C(t,{key:4,closable:"",color:"info","onClick:close":a[4]||(a[4]=f=>_.value=!s(_))},{default:o(()=>a[11]||(a[11]=[l(" Info ")])),_:1,__:[11]})):g("",!0),s(b)?(c(),C(t,{key:5,closable:"",color:"warning","onClick:close":a[5]||(a[5]=f=>b.value=!s(b))},{default:o(()=>a[12]||(a[12]=[l(" Warning ")])),_:1,__:[12]})):g("",!0),s(x)?(c(),C(t,{key:6,closable:"",color:"error","onClick:close":a[6]||(a[6]=f=>x.value=!s(x))},{default:o(()=>a[13]||(a[13]=[l(" Error ")])),_:1,__:[13]})):g("",!0)]))}}),ti={},ri={class:"demo-space-x"};function si(u,i){return c(),h("div",ri,[e(t,{label:!1},{default:o(()=>i[0]||(i[0]=[l(" Default ")])),_:1,__:[0]}),e(t,{label:!1,color:"primary"},{default:o(()=>i[1]||(i[1]=[l(" Primary ")])),_:1,__:[1]}),e(t,{label:!1,color:"secondary"},{default:o(()=>i[2]||(i[2]=[l(" Secondary ")])),_:1,__:[2]}),e(t,{label:!1,color:"success"},{default:o(()=>i[3]||(i[3]=[l(" Success ")])),_:1,__:[3]}),e(t,{label:!1,color:"info"},{default:o(()=>i[4]||(i[4]=[l(" Info ")])),_:1,__:[4]}),e(t,{label:!1,color:"warning"},{default:o(()=>i[5]||(i[5]=[l(" Warning ")])),_:1,__:[5]}),e(t,{label:!1,color:"error"},{default:o(()=>i[6]||(i[6]=[l(" Error ")])),_:1,__:[6]})])}const ai=y(ti,[["render",si]]),ni={},pi={class:"demo-space-x"};function ci(u,i){return c(),h("div",pi,[e(t,{variant:"outlined"},{default:o(()=>i[0]||(i[0]=[l(" Default ")])),_:1,__:[0]}),e(t,{color:"primary",variant:"outlined"},{default:o(()=>i[1]||(i[1]=[l(" Primary ")])),_:1,__:[1]}),e(t,{color:"secondary",variant:"outlined"},{default:o(()=>i[2]||(i[2]=[l(" Secondary ")])),_:1,__:[2]}),e(t,{color:"success",variant:"outlined"},{default:o(()=>i[3]||(i[3]=[l(" Success ")])),_:1,__:[3]}),e(t,{color:"info",variant:"outlined"},{default:o(()=>i[4]||(i[4]=[l(" Info ")])),_:1,__:[4]}),e(t,{color:"warning",variant:"outlined"},{default:o(()=>i[5]||(i[5]=[l(" Warning ")])),_:1,__:[5]}),e(t,{color:"error",variant:"outlined"},{default:o(()=>i[6]||(i[6]=[l(" Error ")])),_:1,__:[6]})])}const mi=y(ni,[["render",ci]]),ui={},di={class:"demo-space-x"};function Vi(u,i){return c(),h("div",di,[e(t,{variant:"elevated"},{default:o(()=>i[0]||(i[0]=[l(" Default ")])),_:1,__:[0]}),e(t,{color:"primary",variant:"elevated"},{default:o(()=>i[1]||(i[1]=[l(" Primary ")])),_:1,__:[1]}),e(t,{color:"secondary",variant:"elevated"},{default:o(()=>i[2]||(i[2]=[l(" Secondary ")])),_:1,__:[2]}),e(t,{color:"success",variant:"elevated"},{default:o(()=>i[3]||(i[3]=[l(" Success ")])),_:1,__:[3]}),e(t,{color:"info",variant:"elevated"},{default:o(()=>i[4]||(i[4]=[l(" Info ")])),_:1,__:[4]}),e(t,{color:"warning",variant:"elevated"},{default:o(()=>i[5]||(i[5]=[l(" Warning ")])),_:1,__:[5]}),e(t,{color:"error",variant:"elevated"},{default:o(()=>i[6]||(i[6]=[l(" Error ")])),_:1,__:[6]})])}const Ci=y(ui,[["render",Vi]]),fi={},vi={class:"demo-space-x"};function hi(u,i){return c(),h("div",vi,[e(t,null,{default:o(()=>i[0]||(i[0]=[l(" Default ")])),_:1,__:[0]}),e(t,{color:"primary"},{default:o(()=>i[1]||(i[1]=[l(" Primary ")])),_:1,__:[1]}),e(t,{color:"secondary"},{default:o(()=>i[2]||(i[2]=[l(" Secondary ")])),_:1,__:[2]}),e(t,{color:"success"},{default:o(()=>i[3]||(i[3]=[l(" Success ")])),_:1,__:[3]}),e(t,{color:"info"},{default:o(()=>i[4]||(i[4]=[l(" Info ")])),_:1,__:[4]}),e(t,{color:"warning"},{default:o(()=>i[5]||(i[5]=[l(" Warning ")])),_:1,__:[5]}),e(t,{color:"error"},{default:o(()=>i[6]||(i[6]=[l(" Error ")])),_:1,__:[6]})])}const _i=y(fi,[["render",hi]]),bi={ts:`<script lang="ts" setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<script setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`},gi={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`},yi={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`},xi={ts:`<script lang="ts" setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle class="mb-2">
          VueJS
        </VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-3">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="bx-x"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`,js:`<script setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle class="mb-2">
          VueJS
        </VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-3">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="bx-x"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`},Si={ts:`<script lang="ts" setup>
const chips = ref(['Programming', 'Playing games', 'Sleeping'])
const items = ref(['Streaming', 'Eating', 'Programming', 'Playing games', 'Sleeping'])
<\/script>

<template>
  <AppCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="bx-x-circle"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="bx-filter-alt"
  />
</template>
`,js:`<script setup>
const chips = ref([
  'Programming',
  'Playing games',
  'Sleeping',
])

const items = ref([
  'Streaming',
  'Eating',
  'Programming',
  'Playing games',
  'Sleeping',
])
<\/script>

<template>
  <AppCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="bx-x-circle"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="bx-filter-alt"
  />
</template>
`},Ii={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`},Di={ts:`<template>
  <div class="demo-space-x">
    <VChip :label="false">
      Default
    </VChip>

    <VChip
      :label="false"
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      :label="false"
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      :label="false"
      color="success"
    >
      Success
    </VChip>

    <VChip
      :label="false"
      color="info"
    >
      Info
    </VChip>

    <VChip
      :label="false"
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      :label="false"
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip :label="false">
      Default
    </VChip>

    <VChip
      :label="false"
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      :label="false"
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      :label="false"
      color="success"
    >
      Success
    </VChip>

    <VChip
      :label="false"
      color="info"
    >
      Info
    </VChip>

    <VChip
      :label="false"
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      :label="false"
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`},ki={ts:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip size="default">
      Default
    </VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip size="default">
      Default
    </VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`},Pi={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar.png'
import avatar2 from '@images/avatars/avatar.png'
import avatar3 from '@images/avatars/avatar.png'
import avatar4 from '@images/avatars/avatar.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip
      pill
      :label="false"
      :prepend-avatar="avatar3"
    >
      <span>Felicia Risker</span>
    </VChip>

    <VChip
      pill
      :label="false"
    >
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar.png'
import avatar2 from '@images/avatars/avatar.png'
import avatar3 from '@images/avatars/avatar.png'
import avatar4 from '@images/avatars/avatar.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip
      pill
      :label="false"
      :prepend-avatar="avatar3"
    >
      <span>Felicia Risker</span>
    </VChip>

    <VChip
      pill
      :label="false"
    >
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`},Ei={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        icon="bx-user"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        icon="bx-star"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        icon="bx-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        icon="bx-bell"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        icon="bx-message"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        icon="bx-error"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        icon="bx-error-circle"
      />
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        icon="bx-user"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        icon="bx-star"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        icon="bx-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        icon="bx-bell"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        icon="bx-message"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        icon="bx-error"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        icon="bx-error-circle"
      />
      Error
    </VChip>
  </div>
</template>
`},de=S({__name:"chip",setup(u){return(i,r)=>{const m=_i,p=R,_=Ci,b=mi,x=ai,k=li,a=ei,f=Q,E=H,W=Y,$=U;return c(),C(F,{class:"match-height"},{default:o(()=>[e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Color",code:s(gi)},{default:o(()=>[r[0]||(r[0]=n("p",null,[l("Use "),n("code",null,"color"),l(" prop to change the background color of chips.")],-1)),e(m)]),_:1,__:[0]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Elevated",code:s(yi)},{default:o(()=>[r[1]||(r[1]=n("p",null,[l("Use "),n("code",null,"elevated"),l(" variant option to create filled chips.")],-1)),e(_)]),_:1,__:[1]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Outlined",code:s(Ii)},{default:o(()=>[r[2]||(r[2]=n("p",null,[l("Use "),n("code",null,"outlined"),l(" variant option to create outline border chips.")],-1)),e(b)]),_:1,__:[2]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Rounded",code:s(Di)},{default:o(()=>[r[3]||(r[3]=n("p",null,[l("To use the rounded chip, set "),n("code",null,"label"),l(" props value to "),n("strong",null,"false"),l(".")],-1)),e(x)]),_:1,__:[3]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Closable",code:s(bi)},{default:o(()=>[r[4]||(r[4]=n("p",null,[l("Closable chips can be controlled with a "),n("code",null,"v-model"),l(".")],-1)),e(k)]),_:1,__:[4]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"With Icon",code:s(Ei)},{default:o(()=>[r[5]||(r[5]=n("p",null,"Chips can use text or any icon available in the Material Icons font library.",-1)),e(a)]),_:1,__:[5]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"With Avatar",code:s(Pi)},{default:o(()=>[r[6]||(r[6]=n("p",null,[l("Use "),n("code",null,"pill"),l(" prop to remove the "),n("code",null,"v-avatar"),l(" padding.")],-1)),e(f)]),_:1,__:[6]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Sizes",code:s(ki)},{default:o(()=>[r[7]||(r[7]=n("p",null,[l("The "),n("code",null,"v-chip"),l(" component can have various sizes from "),n("code",null,"x-small"),l(" to "),n("code",null,"x-large"),l(".")],-1)),e(E)]),_:1,__:[7]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"In Selects",code:s(Si)},{default:o(()=>[r[8]||(r[8]=n("p",null,[l("Selects can use "),n("code",null,"chips"),l(" to display the selected data. Try adding your own tags below.")],-1)),e(W)]),_:1,__:[8]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Expandable",code:s(xi)},{default:o(()=>[r[9]||(r[9]=n("p",null,[l("Chips can be combined with "),n("code",null,"v-menu"),l(" to enable a specific set of actions for a chip.")],-1)),e($)]),_:1,__:[9]},8,["code"])]),_:1})]),_:1})}}});export{de as default};
