import{V as m}from"./VRating-CbCk41xY.js";import{d as v,r as f,g as _,o as c,m as a,aW as u,f as l,b as e,q as S,$ as U,c as R,e as s,v as j,F as h,i as k,t as r}from"./index-DfJhTF3D.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as F}from"./VSlider-BHy3uL8j.js";import{_ as I}from"./AppCardCode.vue_vue_type_style_index_0_lang-CTNGJgps.js";import{V as B,a as p}from"./VRow-DAX72Tb6.js";import"./VSliderTrack-Cb_vJcYk.js";import"./VInput-BmivTT3B.js";import"./form-CEPJ73PB.js";import"./transition-CvkVxStN.js";import"./vue3-perfect-scrollbar-ew-kNVbd.js";import"./VCard-AgAH1aFc.js";import"./VAvatar-CG9gvdqc.js";import"./VImg-CSxjGDXo.js";import"./index-r3E_Fzoq.js";import"./VCardText-DHi_ViAT.js";import"./VDivider-DXqaUHVy.js";/* empty css              */const T=v({__name:"DemoRatingItemSlot",setup(d){const n=f(4.5);return(o,i)=>(c(),_(m,{modelValue:a(n),"onUpdate:modelValue":i[0]||(i[0]=t=>u(n)?n.value=t:null)},{item:l(t=>[e(U,S(t,{size:25,color:t.isFilled?"success":"secondary",class:"me-3",icon:t.isFilled?"bx-smile":"bx-sad"}),null,16,["color","icon"])]),_:1},8,["modelValue"]))}}),L=v({__name:"DemoRatingIncremented",setup(d){const n=f(4.5);return(o,i)=>(c(),_(m,{modelValue:a(n),"onUpdate:modelValue":i[0]||(i[0]=t=>u(n)?n.value=t:null),"half-increments":"",hover:""},null,8,["modelValue"]))}}),M={};function N(d,n){return c(),_(m,{hover:""})}const H=V(M,[["render",N]]),P={};function q(d,n){return c(),_(m,{readonly:"","model-value":4})}const A=V(P,[["render",q]]),E={};function W(d,n){return c(),_(m,{clearable:""})}const G=V(E,[["render",W]]),J={class:"font-weight-medium mb-0"},K=v({__name:"DemoRatingLength",setup(d){const n=f(5),o=f(2);return(i,t)=>(c(),R(h,null,[t[2]||(t[2]=s("div",{class:"text-caption"}," Custom length ",-1)),e(F,{modelValue:a(n),"onUpdate:modelValue":t[0]||(t[0]=g=>u(n)?n.value=g:null),min:1,max:7},null,8,["modelValue"]),e(m,{modelValue:a(o),"onUpdate:modelValue":t[1]||(t[1]=g=>u(o)?o.value=g:null),length:a(n)},null,8,["modelValue","length"]),s("p",J," Model: "+j(a(o)),1)],64))}}),O={class:"d-flex flex-column"},Q=v({__name:"DemoRatingSize",setup(d){const n=f(4);return(o,i)=>(c(),R("div",O,[e(m,{modelValue:a(n),"onUpdate:modelValue":i[0]||(i[0]=t=>u(n)?n.value=t:null),size:"small"},null,8,["modelValue"]),e(m,{modelValue:a(n),"onUpdate:modelValue":i[1]||(i[1]=t=>u(n)?n.value=t:null)},null,8,["modelValue"]),e(m,{modelValue:a(n),"onUpdate:modelValue":i[2]||(i[2]=t=>u(n)?n.value=t:null),size:"large"},null,8,["modelValue"]),e(m,{modelValue:a(n),"onUpdate:modelValue":i[3]||(i[3]=t=>u(n)?n.value=t:null),size:"x-large"},null,8,["modelValue"])]))}}),X={class:"d-flex flex-column"},Y=v({__name:"DemoRatingColors",setup(d){const n=f(4),o=["primary","secondary","success","info","error"];return(i,t)=>(c(),R("div",X,[(c(),R(h,null,k(o,g=>e(m,{key:g,modelValue:a(n),"onUpdate:modelValue":t[0]||(t[0]=x=>u(n)?n.value=x:null),color:g},null,8,["modelValue","color"])),64))]))}}),Z={};function ee(d,n){return c(),_(m,{density:"compact"})}const te=V(Z,[["render",ee]]),ne={};function oe(d,n){return c(),_(m)}const le=V(ne,[["render",oe]]),se={ts:`<template>
  <VRating />
</template>
`,js:`<template>
  <VRating />
</template>
`},ae={ts:`<template>
  <VRating clearable />
</template>
`,js:`<template>
  <VRating clearable />
</template>
`},ie={ts:`<script lang="ts" setup>
const rating = ref(4)
const ratingColors = ['primary', 'secondary', 'success', 'info', 'error']
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)

const ratingColors = [
  'primary',
  'secondary',
  'success',
  'info',
  'error',
]
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`},re={ts:`<template>
  <VRating density="compact" />
</template>
`,js:`<template>
  <VRating density="compact" />
</template>
`},me={ts:`<template>
  <VRating hover />
</template>
`,js:`<template>
  <VRating hover />
</template>
`},ce={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`},de={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'bx-smile' : 'bx-sad'"
      />
    </template>
  </VRating>
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'bx-smile' : 'bx-sad'"
      />
    </template>
  </VRating>
</template>
`},pe={ts:`<script lang="ts" setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
`,js:`<script setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
`},ue={ts:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`,js:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`},ge={ts:`<script lang="ts" setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="small"
    />

    <VRating v-model="rating" />

    <VRating
      v-model="rating"
      size="large"
    />

    <VRating
      v-model="rating"
      size="x-large"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="small"
    />

    <VRating v-model="rating" />

    <VRating
      v-model="rating"
      size="large"
    />

    <VRating
      v-model="rating"
      size="x-large"
    />
  </div>
</template>
`},Fe=v({__name:"rating",setup(d){return(n,o)=>{const i=le,t=I,g=te,x=Y,y=Q,b=K,z=G,C=A,D=H,$=L,w=T;return c(),_(B,{class:"match-height"},{default:l(()=>[e(p,{cols:"12",md:"6"},{default:l(()=>[e(t,{title:"Basic",code:a(se)},{default:l(()=>[o[0]||(o[0]=s("p",null,[r("The "),s("code",null,"v-rating"),r(" component provides a simple interface for gathering user feedback.")],-1)),e(i)]),_:1,__:[0]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(t,{title:"Density",code:a(re)},{default:l(()=>[o[1]||(o[1]=s("p",null,[r("Control the space occupied by "),s("code",null,"v-rating"),r(" items using the "),s("code",null,"density"),r(" prop.")],-1)),e(g)]),_:1,__:[1]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(t,{title:"Colors",code:a(ie)},{default:l(()=>[o[2]||(o[2]=s("p",null,[r("The "),s("code",null,"v-rating"),r(" component can be colored as you want, you can set both selected and not selected colors.")],-1)),e(x)]),_:1,__:[2]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(t,{title:"Size",code:a(ge)},{default:l(()=>[o[3]||(o[3]=s("p",null,[r("Utilize the same sizing classes available in "),s("code",null,"v-icon"),r(" or provide your own with the "),s("code",null,"size"),r(" prop.")],-1)),e(y)]),_:1,__:[3]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(t,{title:"Length",code:a(pe)},{default:l(()=>[o[4]||(o[4]=s("p",null,[r("Change the number of items by modifying the the "),s("code",null,"length"),r(" prop.")],-1)),e(b)]),_:1,__:[4]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(t,{title:"Clearable",code:a(ae)},{default:l(()=>[o[5]||(o[5]=s("p",null,[r("Use "),s("code",null,"clearable"),r(" prop to allows for the component to be cleared. Triggers when the icon containing the current value is clicked.")],-1)),e(z)]),_:1,__:[5]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(t,{title:"Readonly",code:a(ue)},{default:l(()=>[o[6]||(o[6]=s("p",null,[r("For ratings that are not meant to be changed you can use "),s("code",null,"readonly"),r(" prop.")],-1)),e(C)]),_:1,__:[6]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(t,{title:"Hover",code:a(me)},{default:l(()=>[o[7]||(o[7]=s("p",null,"Provides visual feedback when hovering over icons",-1)),e(D)]),_:1,__:[7]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(t,{title:"Incremented",code:a(ce)},{default:l(()=>[o[8]||(o[8]=s("p",null,[r("The "),s("code",null,"half-increments"),r(" prop increases the granularity of the ratings, allow for .5 values as well.")],-1)),e($)]),_:1,__:[8]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(t,{title:"Item slot",code:a(de)},{default:l(()=>[o[9]||(o[9]=s("p",null,"Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating.",-1)),e(w)]),_:1,__:[9]},8,["code"])]),_:1})]),_:1})}}});export{Fe as default};
