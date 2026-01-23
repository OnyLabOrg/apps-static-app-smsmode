import{V}from"./VRangeSlider-Gy4A3dW8.js";import{d,r as _,g as u,o as c,m as i,aW as b,f as r,b as s,$ as x,e as a,t as n}from"./index-CH8kNowV.js";import{_ as h}from"./AppCardCode.vue_vue_type_style_index_0_lang-Dz_6GXV6.js";import{V as D,a as m}from"./VRow-CsY21fqc.js";import"./VSliderTrack-BXluR4kl.js";import"./VInput-BcExbrvz.js";import"./form-026c-72C.js";import"./transition-BPaD_Yn2.js";import"./vue3-perfect-scrollbar-CdXtvrte.js";import"./VCard-DRKTYnd3.js";import"./VAvatar-Bfne1_Cm.js";import"./VImg-kq4JjoOP.js";import"./index-BUpOgCMW.js";import"./VCardText-D4xbnkdK.js";import"./VDivider-CBJPQ-Nw.js";/* empty css              */const w=d({__name:"DemoRangeSliderVertical",setup(p){const e=_([20,40]);return(t,l)=>(c(),u(V,{modelValue:i(e),"onUpdate:modelValue":l[0]||(l[0]=o=>b(e)?e.value=o:null),direction:"vertical"},null,8,["modelValue"]))}}),k=d({__name:"DemoRangeSliderThumbLabel",setup(p){const e=["Winter","Spring","Summer","Fall"],t=["bx-cloud-snow","bx-leaf","bx-bxs-hot","bx-droplet"],l=_([1,2]);return(o,g)=>(c(),u(V,{modelValue:i(l),"onUpdate:modelValue":g[0]||(g[0]=f=>b(l)?l.value=f:null),tick:e,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":r(({modelValue:f})=>[s(x,{icon:t[f]},null,8,["icon"])]),_:1},8,["modelValue"]))}}),y=d({__name:"DemoRangeSliderStep",setup(p){const e=_([20,40]);return(t,l)=>(c(),u(V,{modelValue:i(e),"onUpdate:modelValue":l[0]||(l[0]=o=>b(e)?e.value=o:null),step:"10"},null,8,["modelValue"]))}}),C=d({__name:"DemoRangeSliderColor",setup(p){const e=_([10,60]);return(t,l)=>(c(),u(V,{modelValue:i(e),"onUpdate:modelValue":l[0]||(l[0]=o=>b(e)?e.value=o:null),color:"success"},null,8,["modelValue"]))}}),U=d({__name:"DemoRangeSliderDisabled",setup(p){const e=_([30,60]);return(t,l)=>(c(),u(V,{modelValue:i(e),"onUpdate:modelValue":l[0]||(l[0]=o=>b(e)?e.value=o:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}}),$=d({__name:"DemoRangeSliderBasic",setup(p){const e=_([10,60]);return(t,l)=>(c(),u(V,{modelValue:i(e),"onUpdate:modelValue":l[0]||(l[0]=o=>b(e)?e.value=o:null)},null,8,["modelValue"]))}}),j={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},B={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
  />
</template>
`},T={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},z={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},I={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['bx-cloud-snow', 'bx-leaf', 'bx-bxs-hot', 'bx-droplet']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'bx-cloud-snow',
  'bx-leaf',
  'bx-bxs-hot',
  'bx-droplet',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},W={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},Z=d({__name:"range-slider",setup(p){return(e,t)=>{const l=$,o=h,g=U,f=C,S=y,v=k,R=w;return c(),u(D,null,{default:r(()=>[s(m,{cols:"12",md:"6"},{default:r(()=>[s(o,{title:"Basic",code:i(j)},{default:r(()=>[t[0]||(t[0]=a("p",null,[n("The "),a("code",null,"v-slider"),n(" component is a better visualization of the number input.")],-1)),s(l)]),_:1,__:[0]},8,["code"])]),_:1}),s(m,{cols:"12",md:"6"},{default:r(()=>[s(o,{title:"Disabled",code:i(T)},{default:r(()=>[t[1]||(t[1]=a("p",null,[n("You cannot interact with "),a("code",null,"disabled"),n(" sliders.")],-1)),s(g)]),_:1,__:[1]},8,["code"])]),_:1}),s(m,{cols:"12",md:"6"},{default:r(()=>[s(o,{title:"Color",code:i(B)},{default:r(()=>[t[2]||(t[2]=a("p",null,[n("Use "),a("code",null,"color"),n(" prop to the sets the slider color. "),a("code",null,"track-color"),n(" prop to sets the color of slider's unfilled track.")],-1)),s(f)]),_:1,__:[2]},8,["code"])]),_:1}),s(m,{cols:"12",md:"6"},{default:r(()=>[s(o,{title:"Step",code:i(z)},{default:r(()=>[t[3]||(t[3]=a("p",null,[a("code",null,"v-range-slider"),n(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1)),s(S)]),_:1,__:[3]},8,["code"])]),_:1}),s(m,{cols:"12",md:"6"},{default:r(()=>[s(o,{title:"Thumb label",code:i(I)},{default:r(()=>[t[4]||(t[4]=a("p",null,[n(" Using the "),a("code",null,"tick-labels"),n(" prop along with the "),a("code",null,"thumb-label"),n(" slot, you can create a very customized solution. ")],-1)),s(v)]),_:1,__:[4]},8,["code"])]),_:1}),s(m,{cols:"12",md:"6"},{default:r(()=>[s(o,{title:"Vertical",code:i(W)},{default:r(()=>[t[5]||(t[5]=a("p",null,[n("You can use the "),a("code",null,"vertical"),n(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1)),s(R)]),_:1,__:[5]},8,["code"])]),_:1})]),_:1})}}});export{Z as default};
