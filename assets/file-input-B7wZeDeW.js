import{_ as m}from"./AppFileInput.vue_vue_type_script_setup_true_lang-Cn5qNiYD.js";import{d as g,r as I,w as j,g as u,o as c,m as s,aW as h,f as o,c as S,i as N,t as n,v as L,F as U,b as l,e as t}from"./index-BeBG7se5.js";import{V as k}from"./VChip-BDq-4ie3.js";import{_ as d}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a,V}from"./VRow-DcAkoV74.js";import{V as b}from"./VFileInput-DYV86WGR.js";import{_ as B}from"./AppCardCode.vue_vue_type_style_index_0_lang-DMK61jdT.js";import"./form-J-oGqMJG.js";import"./VSlideGroup-JwXo4N0h.js";import"./VAvatar-Ezomk3Rh.js";import"./VImg-0KjYhfmJ.js";import"./transition-BDOC5Uc_.js";import"./index-DuS_zm-5.js";/* empty css              */import"./VField-CdT2DSY3.js";import"./easing-Bybner-F.js";import"./VInput-ClLzGKQK.js";import"./forwardRefs-C-GTDzx5.js";import"./VCounter-DbvhImLE.js";import"./vue3-perfect-scrollbar-B-TfroUy.js";import"./VCard-NIrRrA9M.js";import"./VCardText-51u1fWz-.js";import"./VDivider-DAIpLJuN.js";const P=g({__name:"DemoFileInputLoading",setup(r){const i=I(),e=I(!0);return j(i,()=>{e.value=!i.value[0]}),(f,p)=>{const _=m;return c(),u(_,{modelValue:s(i),"onUpdate:modelValue":p[0]||(p[0]=F=>h(i)?i.value=F:null),loading:s(e),color:"primary",label:"File input",variant:"outlined"},null,8,["modelValue","loading"])}}}),R=g({__name:"DemoFileInputSelectionSlot",setup(r){const i=I([]);return(e,f)=>{const p=m;return c(),u(p,{modelValue:s(i),"onUpdate:modelValue":f[0]||(f[0]=_=>h(i)?i.value=_:null),multiple:"",placeholder:"Upload your documents",label:"File input","prepend-inner-icon":"bx-paperclip"},{selection:o(({fileNames:_})=>[(c(!0),S(U,null,N(_,F=>(c(),u(k,{key:F,label:"",size:"small",color:"primary",class:"me-2"},{default:o(()=>[n(L(F),1)]),_:2},1024))),128))]),_:1},8,["modelValue"])}}}),M=g({__name:"DemoFileInputValidation",setup(r){const i=[e=>!e||!e.length||e[0].size<1e6||"Avatar size should be less than 1 MB!"];return(e,f)=>{const p=m;return c(),u(p,{rules:i,label:"Avatar",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-inner-icon":"bx-camera",variant:"outlined"})}}}),T={};function O(r,i){const e=m;return c(),u(e,{"show-size":"",label:"File input"})}const W=d(T,[["render",O]]),Y={};function E(r,i){const e=m;return c(),u(e,{label:"File input","prepend-icon":"bx-camera"})}const q=d(Y,[["render",E]]),G={};function H(r,i){const e=m;return c(),u(e,{multiple:"",label:"File input"})}const J=d(G,[["render",H]]),K={};function Q(r,i){const e=m;return c(),u(e,{"show-size":"",counter:"",multiple:"",label:"File input"})}const X=d(K,[["render",Q]]),Z={};function ee(r,i){const e=m;return c(),u(e,{chips:"",label:"File input w/ chips"})}const le=d(Z,[["render",ee]]),te={};function ne(r,i){const e=m;return c(),u(e,{accept:"image/*",label:"File input"})}const oe=d(te,[["render",ne]]),ie={};function pe(r,i){return c(),u(V,null,{default:o(()=>[l(a,{cols:"12",sm:"6"},{default:o(()=>[l(b,{label:"Outlined"})]),_:1}),l(a,{cols:"12",sm:"6"},{default:o(()=>[l(b,{label:"Filled",variant:"filled"})]),_:1}),l(a,{cols:"12",sm:"6"},{default:o(()=>[l(b,{label:"Solo",variant:"solo"})]),_:1}),l(a,{cols:"12",sm:"6"},{default:o(()=>[l(b,{label:"Plain",variant:"plain"})]),_:1}),l(a,{cols:"12",sm:"6"},{default:o(()=>[l(b,{label:"Underlined",variant:"underlined",density:"default"})]),_:1})]),_:1})}const ae=d(ie,[["render",pe]]),se={};function ce(r,i){const e=m;return c(),u(e,{label:"File input",density:"compact"})}const ue=d(se,[["render",ce]]),re={};function me(r,i){const e=m;return c(),u(e,{label:"File input"})}const de=d(re,[["render",me]]),_e={ts:`<template>
  <AppFileInput
    accept="image/*"
    label="File input"
  />
</template>
`,js:`<template>
  <AppFileInput
    accept="image/*"
    label="File input"
  />
</template>
`},fe={ts:`<template>
  <AppFileInput label="File input" />
</template>
`,js:`<template>
  <AppFileInput label="File input" />
</template>
`},Fe={ts:`<template>
  <AppFileInput
    chips
    label="File input w/ chips"
  />
</template>
`,js:`<template>
  <AppFileInput
    chips
    label="File input w/ chips"
  />
</template>
`},be={ts:`<template>
  <AppFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <AppFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`},ge={ts:`<template>
  <AppFileInput
    label="File input"
    density="compact"
  />
</template>
`,js:`<template>
  <AppFileInput
    label="File input"
    density="compact"
  />
</template>
`},Ie={ts:`<script setup lang="ts">
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <AppFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
    variant="outlined"
  />
</template>
`,js:`<script setup>
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <AppFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
    variant="outlined"
  />
</template>
`},he={ts:`<template>
  <AppFileInput
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <AppFileInput
    multiple
    label="File input"
  />
</template>
`},Ve={ts:`<template>
  <AppFileInput
    label="File input"
    prepend-icon="bx-camera"
  />
</template>
`,js:`<template>
  <AppFileInput
    label="File input"
    prepend-icon="bx-camera"
  />
</template>
`},ve={ts:`<script lang="ts" setup>
const files = ref<File[]>([])
<\/script>

<template>
  <AppFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-inner-icon="bx-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </AppFileInput>
</template>
`,js:`<script setup>
const files = ref([])
<\/script>

<template>
  <AppFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-inner-icon="bx-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </AppFileInput>
</template>
`},Ae={ts:`<template>
  <AppFileInput
    show-size
    label="File input"
  />
</template>
`,js:`<template>
  <AppFileInput
    show-size
    label="File input"
  />
</template>
`},ye={ts:`<script lang="ts" setup>
const rules = [
  (fileList: FileList) => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!',
]
<\/script>

<template>
  <AppFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-inner-icon="bx-camera"
    variant="outlined"
  />
</template>
`,js:`<script setup>
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!']
<\/script>

<template>
  <AppFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-inner-icon="bx-camera"
    variant="outlined"
  />
</template>
`},Ce={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`},Je=g({__name:"file-input",setup(r){return(i,e)=>{const f=de,p=B,_=ue,F=ae,v=oe,A=le,y=X,C=J,w=q,x=W,z=M,$=R,D=P;return c(),u(V,{class:"match-height"},{default:o(()=>[l(a,{cols:"12",md:"6"},{default:o(()=>[l(p,{title:"Basic",code:s(fe)},{default:o(()=>[e[0]||(e[0]=t("p",null,[n("The "),t("code",null,"v-file-input"),n(" component is used to selecting files.")],-1)),l(f)]),_:1,__:[0]},8,["code"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(p,{title:"Density",code:s(ge)},{default:o(()=>[e[1]||(e[1]=t("p",null,[n("You can reduces the file input height with "),t("code",null,"density"),n(" prop. Available options are: "),t("code",null,"default"),n(", "),t("code",null,"comfortable"),n(", and "),t("code",null,"compact"),n(".")],-1)),l(_)]),_:1,__:[1]},8,["code"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(p,{title:"Variant",code:s(Ce)},{default:o(()=>[e[2]||(e[2]=t("p",null,[n("use "),t("code",null,"solo"),n(", "),t("code",null,"filled"),n(", "),t("code",null,"outlined"),n(", "),t("code",null,"plain"),n(" and "),t("code",null,"underlined"),n(" option of "),t("code",null,"variant"),n(" prop to change the look of file input.")],-1)),l(F)]),_:1,__:[2]},8,["code"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(p,{title:"Accept",code:s(_e)},{default:o(()=>[e[3]||(e[3]=t("p",null,[t("code",null,"v-file-input"),n(" component can accept only specific media formats/file types if you want.")],-1)),l(v)]),_:1,__:[3]},8,["code"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(p,{title:"Chips",code:s(Fe)},{default:o(()=>[e[4]||(e[4]=t("p",null,[n("Use "),t("code",null,"chip"),n(" prop to display the selected file as a chip.")],-1)),l(A)]),_:1,__:[4]},8,["code"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(p,{title:"Counter",code:s(be)},{default:o(()=>[e[5]||(e[5]=t("p",null,[n("When using the "),t("code",null,"show-size"),n(" property along with "),t("code",null,"counter"),n(", the total number of files and size will be displayed under the input.")],-1)),l(y)]),_:1,__:[5]},8,["code"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(p,{title:"Multiple",code:s(he)},{default:o(()=>[e[6]||(e[6]=t("p",null,[n(" The "),t("code",null,"v-file-input"),n(" can contain multiple files at the same time when using the "),t("code",null,"multiple"),n(" prop. ")],-1)),l(C)]),_:1,__:[6]},8,["code"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(p,{title:"Prepend icon",code:s(Ve)},{default:o(()=>[e[7]||(e[7]=t("p",null,[n(" The "),t("code",null,"v-file-input"),n(" has a default "),t("code",null,"prepend-icon"),n(" that can be set on the component or adjusted globally. ")],-1)),l(w)]),_:1,__:[7]},8,["code"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(p,{title:"Show size",code:s(Ae)},{default:o(()=>[e[8]||(e[8]=t("p",null,[n("The displayed size of the selected file(s) can be configured with the "),t("code",null,"show-size"),n(" property.")],-1)),l(x)]),_:1,__:[8]},8,["code"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(p,{title:"Validation",code:s(ye)},{default:o(()=>[e[9]||(e[9]=t("p",null,[n("You can use the "),t("code",null,"rules"),n(" prop to create your own custom validation parameters.")],-1)),l(z)]),_:1,__:[9]},8,["code"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(p,{title:"Selection slot",code:s(ve)},{default:o(()=>[e[10]||(e[10]=t("p",null,[n("Using the "),t("code",null,"selection"),n(" slot, you can customize the appearance of your input selections.")],-1)),l($)]),_:1,__:[10]},8,["code"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(p,{title:"Loading",code:s(Ie)},{default:o(()=>[e[11]||(e[11]=t("p",null,[n("Use "),t("code",null,"loading"),n(" prop to displays linear progress bar.")],-1)),l(D)]),_:1,__:[11]},8,["code"])]),_:1})]),_:1})}}});export{Je as default};
