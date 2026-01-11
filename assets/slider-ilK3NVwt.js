import{d as b,r as V,X as z,c as g,o as v,e as a,b as e,v as D,m as n,f as s,g as x,l as L,I as j,cQ as O,$ as E,ai as S,aW as c,F as $,t as m}from"./index-DZWVFJEj.js";import{V as Y}from"./VAvatar-D6Rg-emN.js";import{V as p}from"./VSlider-BtS9TTWw.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as G}from"./VImg-5sgcKXtd.js";import{a as u,V as C}from"./VRow-Ch4uDk95.js";import{V as k}from"./VTextField-C-NNS-p1.js";import{_ as N}from"./AppTextField.vue_vue_type_script_setup_true_lang-dLIQD95n.js";import{_ as Q}from"./AppCardCode.vue_vue_type_style_index_0_lang-DkGAn3Sb.js";import"./VSliderTrack-HZ23oE2m.js";import"./VInput-BZNtZ0Cp.js";import"./form-CD4LfcAL.js";import"./transition-BA0PS-dL.js";import"./index-Oc9DpuAO.js";/* empty css              *//* empty css                   */import"./VCounter-BcP4KGpW.js";import"./VField-CY8NsM9x.js";import"./easing-Bybner-F.js";import"./forwardRefs-C-GTDzx5.js";import"./vue3-perfect-scrollbar-CR9Xn5XL.js";import"./VCard-TCpTMKi2.js";import"./VCardText-C48XgJ5F.js";import"./VDivider-CUnWTeN4.js";const W={class:"d-flex justify-space-between ma-4"},X=["textContent"],T=40,R=218,q=b({__name:"DemoSliderAppendAndPrepend",setup(f){const o=V(40),t=V(!1),r=z(()=>o.value<100?"primary":o.value<125?"success":o.value<140?"info":o.value<175?"warning":"error"),i=z(()=>`${60/o.value}s`),l=()=>{o.value>T&&(o.value-=1)},d=()=>{o.value<R&&(o.value+=1)};return(w,_)=>(v(),g($,null,[a("div",W,[a("div",null,[a("span",{class:"text-6xl font-weight-light",textContent:D(n(o))},null,8,X),_[2]||(_[2]=a("span",{class:"subheading font-weight-light me-1"},"BPM",-1)),e(O,null,{default:s(()=>[n(t)?(v(),x(Y,{key:0,color:n(r),style:j({animationDuration:n(i)}),class:"mb-1 v-avatar--metronome",size:"12"},null,8,["color","style"])):L("",!0)]),_:1})]),a("div",null,[e(S,{color:n(r),icon:"",elevation:"0",onClick:_[0]||(_[0]=y=>t.value=!n(t))},{default:s(()=>[e(E,{size:"large",icon:n(t)?"bx-pause":"bx-play"},null,8,["icon"])]),_:1},8,["color"])])]),e(p,{modelValue:n(o),"onUpdate:modelValue":_[1]||(_[1]=y=>c(o)?o.value=y:null),color:n(r),step:1,min:T,max:R,"track-color":"secondary"},{prepend:s(()=>[e(S,{size:"small",variant:"text",icon:"bx-minus",color:n(r),onClick:l},null,8,["color"])]),append:s(()=>[e(S,{size:"small",variant:"text",icon:"bx-plus",color:n(r),onClick:d},null,8,["color"])]),_:1},8,["modelValue","color"])],64))}}),H=h(q,[["__scopeId","data-v-4a6d16f4"]]),J={class:"d-flex align-center justify-space-between"},K={class:"d-flex align-center justify-space-between"},Z={class:"d-flex align-center justify-space-between"},ee=b({__name:"DemoSliderAppendTextField",setup(f){const o=V(161),t=V(105),r=V(225);return(i,l)=>(v(),g($,null,[e(G,{style:j({background:`rgb(${n(o)}, ${n(t)}, ${n(r)})`}),height:"150px"},null,8,["style"]),e(C,{class:"mt-5"},{default:s(()=>[e(u,{cols:"12"},{default:s(()=>[a("div",J,[l[6]||(l[6]=a("span",{class:"me-1"},"R",-1)),e(p,{modelValue:n(o),"onUpdate:modelValue":l[0]||(l[0]=d=>c(o)?o.value=d:null),max:255,step:1},null,8,["modelValue"]),e(k,{modelValue:n(o),"onUpdate:modelValue":l[1]||(l[1]=d=>c(o)?o.value=d:null),type:"number",placeholder:"10",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1}),e(u,{cols:"12"},{default:s(()=>[a("div",K,[l[7]||(l[7]=a("span",{class:"me-1"},"G",-1)),e(p,{modelValue:n(t),"onUpdate:modelValue":l[2]||(l[2]=d=>c(t)?t.value=d:null),max:255,step:1},null,8,["modelValue"]),e(k,{modelValue:n(t),"onUpdate:modelValue":l[3]||(l[3]=d=>c(t)?t.value=d:null),type:"number",placeholder:"20",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1}),e(u,{cols:"12"},{default:s(()=>[a("div",Z,[l[8]||(l[8]=a("span",{class:"me-1"},"B",-1)),e(p,{modelValue:n(r),"onUpdate:modelValue":l[4]||(l[4]=d=>c(r)?r.value=d:null),max:255,step:1},null,8,["modelValue"]),e(k,{modelValue:n(r),"onUpdate:modelValue":l[5]||(l[5]=d=>c(r)?r.value=d:null),type:"number",placeholder:"30",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1})]),_:1})],64))}}),le=b({__name:"DemoSliderVertical",setup(f){const o=V(10);return(t,r)=>(v(),x(p,{modelValue:n(o),"onUpdate:modelValue":r[0]||(r[0]=i=>c(o)?o.value=i:null),direction:"vertical"},null,8,["modelValue"]))}}),te=b({__name:"DemoSliderTicks",setup(f){const o=V(0),t=V(1),r={0:"Figs",1:"Lemon",2:"Pear",3:"Apple"};return(i,l)=>(v(),x(C,null,{default:s(()=>[e(u,{cols:"12"},{default:s(()=>[l[4]||(l[4]=a("div",{class:"text-caption"}," Show ticks when using slider ",-1)),e(p,{modelValue:n(o),"onUpdate:modelValue":l[0]||(l[0]=d=>c(o)?o.value=d:null),step:10,"show-ticks":""},null,8,["modelValue"])]),_:1,__:[4]}),e(u,{cols:"12"},{default:s(()=>[l[5]||(l[5]=a("div",{class:"text-caption"}," Always show ticks ",-1)),e(p,{modelValue:n(o),"onUpdate:modelValue":l[1]||(l[1]=d=>c(o)?o.value=d:null),step:10,"show-ticks":"always"},null,8,["modelValue"])]),_:1,__:[5]}),e(u,{cols:"12"},{default:s(()=>[l[6]||(l[6]=a("div",{class:"text-caption"}," Tick size ",-1)),e(p,{modelValue:n(o),"onUpdate:modelValue":l[2]||(l[2]=d=>c(o)?o.value=d:null),step:10,"show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1,__:[6]}),e(u,{cols:"12"},{default:s(()=>[l[7]||(l[7]=a("div",{class:"text-caption"}," Tick labels ",-1)),e(p,{modelValue:n(t),"onUpdate:modelValue":l[3]||(l[3]=d=>c(t)?t.value=d:null),ticks:r,max:3,step:"1","show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1,__:[7]})]),_:1}))}}),oe=b({__name:"DemoSliderThumb",setup(f){const o=["😭","😢","😔","🙁","😐","🙂","😊","😁","😄","😍"],t=V(45);return(r,i)=>(v(),x(C,null,{default:s(()=>[e(u,{cols:"12"},{default:s(()=>[i[4]||(i[4]=a("div",{class:"text-caption"}," Show thumb when using slider ",-1)),e(p,{modelValue:n(t),"onUpdate:modelValue":i[0]||(i[0]=l=>c(t)?t.value=l:null),"thumb-label":""},null,8,["modelValue"])]),_:1,__:[4]}),e(u,{cols:"12"},{default:s(()=>[i[5]||(i[5]=a("div",{class:"text-caption"}," Always show thumb label ",-1)),e(p,{modelValue:n(t),"onUpdate:modelValue":i[1]||(i[1]=l=>c(t)?t.value=l:null),"thumb-label":"always"},null,8,["modelValue"])]),_:1,__:[5]}),e(u,{cols:"12"},{default:s(()=>[i[6]||(i[6]=a("div",{class:"text-caption"}," Custom thumb size ",-1)),e(p,{modelValue:n(t),"onUpdate:modelValue":i[2]||(i[2]=l=>c(t)?t.value=l:null),"thumb-size":30,"thumb-label":"always"},null,8,["modelValue"])]),_:1,__:[6]}),e(u,{cols:"12"},{default:s(()=>[i[7]||(i[7]=a("div",{class:"text-caption"}," Custom thumb label ",-1)),e(p,{modelValue:n(t),"onUpdate:modelValue":i[3]||(i[3]=l=>c(t)?t.value=l:null),"thumb-label":"always"},{"thumb-label":s(({modelValue:l})=>[m(D(o[Math.min(Math.floor(l/10),9)]),1)]),_:1},8,["modelValue"])]),_:1,__:[7]})]),_:1}))}}),se={};function ae(f,o){return v(),x(p,{step:10,"show-ticks":"","thumb-size":18,"tick-size":3,"track-size":2})}const ne=h(se,[["render",ae]]),ie={class:"d-flex justify-space-between"},re=b({__name:"DemoSliderMinAndMax",setup(f){const o=V(-50),t=V(90),r=V(40);return(i,l)=>{const d=N;return v(),g("div",ie,[e(p,{modelValue:n(r),"onUpdate:modelValue":l[0]||(l[0]=w=>c(r)?r.value=w:null),max:n(t),min:n(o),step:1},null,8,["modelValue","max","min"]),e(d,{modelValue:n(r),"onUpdate:modelValue":l[1]||(l[1]=w=>c(r)?r.value=w:null),type:"number",placeholder:"10",style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])}}}),de=b({__name:"DemoSliderValidation",setup(f){const o=V(30),t=[r=>r<=40||"Only 40 in stock"];return(r,i)=>(v(),x(p,{modelValue:n(o),"onUpdate:modelValue":i[0]||(i[0]=l=>c(o)?o.value=l:null),error:n(o)>40,rules:t,step:10,"thumb-label":"always","show-ticks":""},null,8,["modelValue","error"]))}}),me=b({__name:"DemoSliderStep",setup(f){const o=V(0);return(t,r)=>(v(),x(p,{modelValue:n(o),"onUpdate:modelValue":r[0]||(r[0]=i=>c(o)?o.value=i:null),min:0,max:1,step:.2,"thumb-label":""},null,8,["modelValue"]))}}),ue=b({__name:"DemoSliderIcons",setup(f){const o=V(0),t=V(0),r=V(10);return(i,l)=>(v(),x(C,null,{default:s(()=>[e(u,{cols:"12"},{default:s(()=>[e(p,{modelValue:n(o),"onUpdate:modelValue":l[0]||(l[0]=d=>c(o)?o.value=d:null),"prepend-icon":"bx-volume-full"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:s(()=>[e(p,{modelValue:n(t),"onUpdate:modelValue":l[1]||(l[1]=d=>c(t)?t.value=d:null),"append-icon":"bx-alarm"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:s(()=>[e(p,{modelValue:n(r),"onUpdate:modelValue":l[2]||(l[2]=d=>c(r)?r.value=d:null),"append-icon":"bx-minus","prepend-icon":"bx-plus"},null,8,["modelValue"])]),_:1})]),_:1}))}}),ce=b({__name:"DemoSliderColors",setup(f){const o=V(25),t=V(75),r=V(50);return(i,l)=>(v(),x(C,null,{default:s(()=>[e(u,{cols:"12"},{default:s(()=>[l[3]||(l[3]=a("div",{class:"text-caption"}," Color ",-1)),e(p,{modelValue:n(o),"onUpdate:modelValue":l[0]||(l[0]=d=>c(o)?o.value=d:null),color:"error"},null,8,["modelValue"])]),_:1,__:[3]}),e(u,{cols:"12"},{default:s(()=>[l[4]||(l[4]=a("div",{class:"text-caption"}," Track-color ",-1)),e(p,{modelValue:n(t),"onUpdate:modelValue":l[1]||(l[1]=d=>c(t)?t.value=d:null),"track-color":"error"},null,8,["modelValue"])]),_:1,__:[4]}),e(u,{cols:"12"},{default:s(()=>[l[5]||(l[5]=a("div",{class:"text-caption"}," Thumb-color ",-1)),e(p,{modelValue:n(r),"onUpdate:modelValue":l[2]||(l[2]=d=>c(r)?r.value=d:null),"thumb-color":"error","thumb-label":"always"},null,8,["modelValue"])]),_:1,__:[5]})]),_:1}))}}),pe={};function Ve(f,o){return v(),x(C,null,{default:s(()=>[e(u,{cols:"12"},{default:s(()=>[o[0]||(o[0]=a("div",{class:"text-caption"}," Disabled ",-1)),e(p,{disabled:"",label:"Disabled","model-value":30})]),_:1,__:[0]}),e(u,{cols:"12"},{default:s(()=>[o[1]||(o[1]=a("div",{class:"text-caption"}," Readonly ",-1)),e(p,{readonly:"",label:"Readonly","model-value":30})]),_:1,__:[1]})]),_:1})}const ve=h(pe,[["render",Ve]]),fe=b({__name:"DemoSliderBasic",setup(f){const o=V(30);return(t,r)=>(v(),x(C,null,{default:s(()=>[e(u,{cols:"12"},{default:s(()=>[e(p)]),_:1}),e(u,{cols:"12"},{default:s(()=>[e(p,{modelValue:n(o),"onUpdate:modelValue":r[0]||(r[0]=i=>c(o)?o.value=i:null)},null,8,["modelValue"])]),_:1})]),_:1}))}}),be={ts:`<script lang="ts" setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'

  return 'error'
})

const animationDuration = computed(() => {
  return \`\${60 / bpm.value}s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'bx-pause' : 'bx-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="bx-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="bx-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`,js:`<script setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'
  
  return 'error'
})

const animationDuration = computed(() => {
  return \`\${ 60 / bpm.value }s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'bx-pause' : 'bx-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="bx-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="bx-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`},xe={ts:`<script lang="ts" setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(225)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">R</span>
        <VSlider
          v-model="redColorValue"
          :max="255"
          :step="1"
        />

        <VTextField
          v-model="redColorValue"
          type="number"
          placeholder="10"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">G</span>
        <VSlider
          v-model="greenColorValue"
          :max="255"
          :step="1"
        />

        <VTextField
          v-model="greenColorValue"
          type="number"
          placeholder="20"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">B</span>
        <VSlider
          v-model="blueColorValue"
          :max="255"
          :step="1"
        />
        <VTextField
          v-model="blueColorValue"
          type="number"
          placeholder="30"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(225)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">R</span>
        <VSlider
          v-model="redColorValue"
          :max="255"
          :step="1"
        />

        <VTextField
          v-model="redColorValue"
          type="number"
          placeholder="10"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">G</span>
        <VSlider
          v-model="greenColorValue"
          :max="255"
          :step="1"
        />

        <VTextField
          v-model="greenColorValue"
          type="number"
          placeholder="20"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <div class="d-flex align-center justify-space-between">
        <span class="me-1">B</span>
        <VSlider
          v-model="blueColorValue"
          :max="255"
          :step="1"
        />
        <VTextField
          v-model="blueColorValue"
          type="number"
          placeholder="30"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>
  </VRow>
</template>
`},_e={ts:`<script setup lang="ts">
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider v-model="sliderValue" />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider v-model="sliderValue" />
    </VCol>
  </VRow>
</template>
`},Ce={ts:`<script lang="ts" setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`},we={ts:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`},ye={ts:`<script lang="ts" setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="bx-volume-full"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="bx-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="bx-minus"
        prepend-icon="bx-plus"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="bx-volume-full"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="bx-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="bx-minus"
        prepend-icon="bx-plus"
      />
    </VCol>
  </VRow>
</template>
`},Se={ts:`<script lang="ts" setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <div class="d-flex justify-space-between">
    <VSlider
      v-model="slider"
      :max="max"
      :min="min"
      :step="1"
    />

    <AppTextField
      v-model="slider"
      type="number"
      placeholder="10"
      style="max-inline-size: 5rem;"
    />
  </div>
</template>
`,js:`<script setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <div class="d-flex justify-space-between">
    <VSlider
      v-model="slider"
      :max="max"
      :min="min"
      :step="1"
    />

    <AppTextField
      v-model="slider"
      type="number"
      placeholder="10"
      style="max-inline-size: 5rem;"
    />
  </div>
</template>
`},ke={ts:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="3"
    :track-size="2"
  />
</template>
`,js:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="3"
    :track-size="2"
  />
</template>
`},ge={ts:`<script lang="ts" setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`,js:`<script setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`},he={ts:`<script lang="ts" setup>
const satisfactionEmojis = ['😭', '😢', '😔', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍']
const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const satisfactionEmojis = [
  '😭',
  '😢',
  '😔',
  '🙁',
  '😐',
  '🙂',
  '😊',
  '😁',
  '😄',
  '😍',
]

const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`},ze={ts:`<script lang="ts" setup>
const value = ref(0)
const fruits = ref(1)
const ticksLabels = { 0: 'Figs', 1: 'Lemon', 2: 'Pear', 3: 'Apple' }
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const value = ref(0)
const fruits = ref(1)

const ticksLabels = {
  0: 'Figs',
  1: 'Lemon',
  2: 'Pear',
  3: 'Apple',
}
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`},Te={ts:`<script lang="ts" setup>
const value = ref(30)
const rules = [(v: number) => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`,js:`<script setup>
const value = ref(30)
const rules = [v => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`},Re={ts:`<script lang="ts" setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`},el=b({__name:"slider",setup(f){return(o,t)=>{const r=fe,i=Q,l=ve,d=ce,w=ue,_=me,y=de,A=re,U=ne,B=oe,F=te,P=le,M=ee,I=H;return v(),x(C,{class:"match-height"},{default:s(()=>[e(u,{cols:"12",md:"6"},{default:s(()=>[e(i,{title:"Basic",code:n(_e)},{default:s(()=>[t[0]||(t[0]=a("p",null,[m("The "),a("code",null,"v-slider"),m(" component is a better visualization of the number input.")],-1)),e(r)]),_:1,__:[0]},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:s(()=>[e(i,{title:"Disabled and Readonly",code:n(we)},{default:s(()=>[t[1]||(t[1]=a("p",null,[m("You cannot interact with "),a("code",null,"disabled"),m(" and "),a("code",null,"readonly"),m(" sliders.")],-1)),e(l)]),_:1,__:[1]},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:s(()=>[e(i,{title:"Colors",code:n(Ce)},{default:s(()=>[t[2]||(t[2]=a("p",null,[m("You can set the colors of the slider using the props "),a("code",null,"color"),m(", "),a("code",null,"track-color"),m(" and "),a("code",null,"thumb-color"),m(".")],-1)),e(d)]),_:1,__:[2]},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:s(()=>[e(i,{title:"Icons",code:n(ye)},{default:s(()=>[t[3]||(t[3]=a("p",null,[m("You can add icons to the slider with the "),a("code",null,"append-icon"),m(" and "),a("code",null,"prepend-icon"),m(" props.")],-1)),e(w)]),_:1,__:[3]},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:s(()=>[e(i,{title:"Step",code:n(ge)},{default:s(()=>[t[4]||(t[4]=a("p",null,[m("Using the "),a("code",null,"step"),m(" prop you can control the precision of the slider, and how much it should move each step.")],-1)),e(_)]),_:1,__:[4]},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:s(()=>[e(i,{title:"Validation",code:n(Te)},{default:s(()=>[t[5]||(t[5]=a("p",null,[m("Vuetify includes simple validation through the "),a("code",null,"rules"),m(" prop.")],-1)),e(y)]),_:1,__:[5]},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:s(()=>[e(i,{title:"Min and Max",code:n(Se)},{default:s(()=>[t[6]||(t[6]=a("p",null,[m("You can set "),a("code",null,"min"),m(" and "),a("code",null,"max"),m(" values of sliders.")],-1)),e(A)]),_:1,__:[6]},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:s(()=>[e(i,{title:"Size",code:n(ke)},{default:s(()=>[t[7]||(t[7]=a("p",null,[m("Use "),a("code",null,"thumb-size"),m(", "),a("code",null,"tick-size"),m(", and "),a("code",null,"track-size"),m(" prop to increase and decrease the size of thumb, tick and track. ")],-1)),e(U)]),_:1,__:[7]},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:s(()=>[e(i,{title:"Thumb",code:n(he)},{default:s(()=>[t[8]||(t[8]=a("p",null,[m("You can display a thumb label while sliding or always with the "),a("code",null,"thumb-label"),m(" prop.")],-1)),e(B)]),_:1,__:[8]},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:s(()=>[e(i,{title:"Ticks",code:n(ze)},{default:s(()=>[t[9]||(t[9]=a("p",null,"Tick marks represent predetermined values to which the user can move the slider.",-1)),e(F)]),_:1,__:[9]},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:s(()=>[e(i,{title:"Vertical",code:n(Re)},{default:s(()=>[t[10]||(t[10]=a("p",null,[m(" You can use the "),a("code",null,"vertical"),m(" prop to switch sliders to a vertical orientation. ")],-1)),e(P)]),_:1,__:[10]},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:s(()=>[e(i,{title:"Append text field",code:n(xe)},{default:s(()=>[t[11]||(t[11]=a("p",null,[m("Sliders can be combined with other components in its "),a("code",null,"append"),m(" slot, such as "),a("code",null,"v-text-field"),m(", to add additional functionality to the component.")],-1)),e(M)]),_:1,__:[11]},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:s(()=>[e(i,{title:"Append and prepend",code:n(be)},{default:s(()=>[t[12]||(t[12]=a("p",null,[m("Use slots such as "),a("code",null,"append"),m(" and "),a("code",null,"prepend"),m(" to easily customize the "),a("code",null,"v-slider"),m(" to fit any situation.")],-1)),e(I)]),_:1,__:[12]},8,["code"])]),_:1})]),_:1})}}});export{el as default};
