import{d as u,c as B,o as f,b as t,f as a,m as o,b0 as l,ai as _,t as n,g as y,i as k,v as $,F as O,r as b,M as A,$ as p,e as r}from"./index-DqY9bX1y.js";import{V as i}from"./VAvatar-DgZ7x4dV.js";import{V as m}from"./VImg-BbL5lMG3.js";import{V as s}from"./VBadge-B4QqgDTY.js";import{a as S,V as j}from"./VTabs-B__XV3-F.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as C}from"./AppCardCode.vue_vue_type_style_index_0_lang-XdCmWsUd.js";import{V as E,a as v}from"./VRow-D8SRbiPb.js";import"./transition-Cgm_pV_K.js";import"./index-Du0nQsin.js";import"./forwardRefs-C-GTDzx5.js";import"./easing-Bybner-F.js";import"./VWindowItem-D7Moyj1x.js";import"./lazy-DXNXMooP.js";import"./ssrBoot-5xHTV11C.js";import"./VSlideGroup-Dh1VAgKw.js";import"./scopeId-DPLRcO83.js";import"./vue3-perfect-scrollbar-BlrC7XbA.js";import"./VCard-Byo8u5ae.js";import"./VCardText-1wk3mYgs.js";import"./VDivider-0EFaISfK.js";/* empty css              */const N={class:"demo-space-x"},M=u({__name:"DemoBadgeTonal",setup(V){return(d,e)=>(f(),B("div",N,[t(s,{class:"v-badge--tonal",content:"5"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1}),t(s,{class:"v-badge--tonal",color:"error",content:"1"},{default:a(()=>[t(_,{color:"error"},{default:a(()=>e[0]||(e[0]=[n(" Default ")])),_:1,__:[0]})]),_:1}),t(s,{class:"v-badge--tonal",color:"info",icon:"bx-lock-open"},{default:a(()=>[t(i,null,{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1})]))}}),Y={class:"demo-space-x"},P=u({__name:"DemoBadgeMaximumValue",setup(V){return(d,e)=>(f(),B("div",Y,[t(s,{content:"99",max:"99","offset-x":"5","offset-y":"-1"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1}),t(s,{content:"100",max:"99","offset-x":"5","offset-y":"-1"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1}),t(s,{content:"1000",max:"999","offset-x":"5","offset-y":"-1"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1})]))}}),U=u({__name:"DemoBadgeTabs",setup(V){const d=[{badge:"3",content:"Item One"},{badge:"1",content:"Item Two"},{badge:"2",content:"Item Three"}];return(e,g)=>(f(),y(S,{grow:""},{default:a(()=>[(f(),B(O,null,k(d,c=>t(j,{key:c.content,value:c.content},{default:a(()=>[t(s,{content:c.badge,"offset-x":-18,"offset-y":6},{default:a(()=>[n($(c.content),1)]),_:2},1032,["content"])]),_:2},1032,["value"])),64))]),_:1}))}}),F={class:"demo-space-x"},L=u({__name:"DemoBadgeShowOnHover",setup(V){const d=b(),e=b(),g=b(),c=A(e),x=A(d),I=A(g);return(z,w)=>(f(),B("div",F,[t(s,{content:"3",transition:"slide-x-transition","model-value":o(c)},{default:a(()=>[t(p,{ref_key:"tRefTwitterBadge",ref:e,size:"25",icon:"bx-bxl-meta"},null,512)]),_:1},8,["model-value"]),t(s,{content:"5",transition:"scale-transition","model-value":o(x)},{default:a(()=>[t(p,{ref_key:"tRefInstagramBadge",ref:d,size:"25",icon:"bx-bxl-instagram"},null,512)]),_:1},8,["model-value"]),t(s,{content:"1",transition:"slide-x-transition","model-value":o(I)},{default:a(()=>[t(p,{ref_key:"tRefWhatsappBadge",ref:g,size:"25",icon:"bx-bxl-whatsapp"},null,512)]),_:1},8,["model-value"])]))}}),q={class:"d-flex align-center"},G={class:"demo-space-x"},J=u({__name:"DemoBadgeDynamicNotifications",setup(V){const d=b();return(e,g)=>(f(),B("div",q,[t(s,{content:o(d),"model-value":!!o(d),color:"success",class:"me-5"},{default:a(()=>[t(p,{size:"40",icon:"bx-bxl-vuejs"})]),_:1},8,["content","model-value"]),r("div",G,[t(_,{onClick:g[0]||(g[0]=c=>d.value=(o(d)||0)+1)},{default:a(()=>g[2]||(g[2]=[n(" Send Message ")])),_:1,__:[2]}),t(_,{color:"error",onClick:g[1]||(g[1]=c=>d.value=0)},{default:a(()=>g[3]||(g[3]=[n(" Clear Notifications ")])),_:1,__:[3]})])]))}}),K={class:"demo-space-x"},Q=u({__name:"DemoBadgeAvatarStatus",setup(V){return(d,e)=>(f(),B("div",K,[t(s,{"offset-x":5,"offset-y":1,bordered:"",color:"success",dot:"",location:"bottom end"},{default:a(()=>[t(i,{size:"large"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1}),t(s,{"offset-x":5,"offset-y":1,bordered:"",color:"warning",dot:"",location:"bottom end"},{default:a(()=>[t(i,{size:"large"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1}),t(s,{"offset-x":5,"offset-y":1,bordered:"",color:"error",dot:"",location:"bottom end"},{default:a(()=>[t(i,{size:"large"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1})]))}}),X={class:"demo-space-x"},Z=u({__name:"DemoBadgeIcon",setup(V){return(d,e)=>(f(),B("div",X,[t(s,null,{badge:a(()=>[t(p,{icon:"bx-bulb"})]),default:a(()=>[t(i,null,{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1}),t(s,{icon:"bx-lock-open"},{default:a(()=>[t(i,null,{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1})]))}}),tt={class:"demo-space-x"},at=u({__name:"DemoBadgePosition",setup(V){return(d,e)=>(f(),B("div",tt,[t(s,{content:"1",location:"end top"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1}),t(s,{content:"2",location:"bottom start"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1}),t(s,{content:"3",location:"bottom end"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1}),t(s,{content:"4",location:"top start"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1})]))}}),et={},ot={class:"demo-space-x"};function st(V,d){return f(),B("div",ot,[t(s,{dot:"",color:"primary"},{default:a(()=>[t(p,{size:"25",icon:"bx-bxl-instagram"})]),_:1}),t(s,{dot:"",color:"secondary"},{default:a(()=>[t(p,{size:"25",icon:"bx-bxl-instagram"})]),_:1}),t(s,{dot:"",color:"success"},{default:a(()=>[t(p,{size:"25",icon:"bx-bxl-instagram"})]),_:1}),t(s,{dot:"",color:"info"},{default:a(()=>[t(p,{size:"25",icon:"bx-bxl-instagram"})]),_:1}),t(s,{dot:"",color:"warning"},{default:a(()=>[t(p,{size:"25",icon:"bx-bxl-instagram"})]),_:1}),t(s,{dot:"",color:"error"},{default:a(()=>[t(p,{size:"25",icon:"bx-bxl-instagram"})]),_:1})])}const nt=W(et,[["render",st]]),rt={class:"demo-space-x d-flex align-center flex-wrap"},ct=u({__name:"DemoBadgeStyle",setup(V){return(d,e)=>(f(),B("div",rt,[t(s,{content:"1"},{default:a(()=>[t(_,{variant:"tonal"},{default:a(()=>e[0]||(e[0]=[n(" Default ")])),_:1,__:[0]})]),_:1}),t(s,{bordered:"",content:"5"},{default:a(()=>[t(_,{variant:"tonal"},{default:a(()=>e[1]||(e[1]=[n(" Border ")])),_:1,__:[1]})]),_:1}),t(s,{dot:"",location:"bottom end","offset-x":"3","offset-y":"3"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1}),t(s,{content:"5",inline:""},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1}),t(s,{content:"5",rounded:"sm"},{default:a(()=>[t(i,{size:"48"},{default:a(()=>[t(m,{src:o(l)},null,8,["src"])]),_:1})]),_:1})]))}}),dt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      dot
      bordered
      color="success"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="warning"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="error"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      dot
      bordered
      color="success"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="warning"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      dot
      bordered
      color="error"
      location="bottom end"
      :offset-x="5"
      :offset-y="1"
    >
      <VAvatar size="large">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},lt={ts:`<template>
  <div class="demo-space-x">
    <VBadge
      dot
      color="primary"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="secondary"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="success"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="info"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="warning"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="error"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBadge
      dot
      color="primary"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="secondary"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="success"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="info"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="warning"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      dot
      color="error"
    >
      <VIcon
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>
  </div>
</template>
`},it={ts:`<script lang="ts" setup>
const notifications = ref<number>()
<\/script>

<template>
  <div class="d-flex align-center">
    <VBadge
      :content="notifications"
      :model-value="!!notifications"
      color="success"
      class="me-5"
    >
      <VIcon
        size="40"
        icon="bx-bxl-vuejs"
      />
    </VBadge>

    <div class="demo-space-x">
      <VBtn @click="notifications = (notifications || 0) + 1">
        Send Message
      </VBtn>

      <VBtn
        color="error"
        @click="notifications = 0"
      >
        Clear Notifications
      </VBtn>
    </div>
  </div>
</template>
`,js:`<script setup>
const notifications = ref()
<\/script>

<template>
  <div class="d-flex align-center">
    <VBadge
      :content="notifications"
      :model-value="!!notifications"
      color="success"
      class="me-5"
    >
      <VIcon
        size="40"
        icon="bx-bxl-vuejs"
      />
    </VBadge>

    <div class="demo-space-x">
      <VBtn @click="notifications = (notifications || 0) + 1">
        Send Message
      </VBtn>

      <VBtn
        color="error"
        @click="notifications = 0"
      >
        Clear Notifications
      </VBtn>
    </div>
  </div>
</template>
`},mt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VIcon icon="bx-bulb" />
      </template>

      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="bx-lock-open">
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <VBadge>
      <template #badge>
        <VIcon icon="bx-bulb" />
      </template>

      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- icon -->
    <VBadge icon="bx-lock-open">
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},gt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="99"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="100"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="1000"
      max="999"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="99"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="100"
      max="99"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <VBadge
      content="1000"
      max="999"
      offset-x="5"
      offset-y="-1"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},ft={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- 👉 Top End -->
    <VBadge
      content="1"
      location="end top"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom Start -->
    <VBadge
      location="bottom start"
      content="2"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom End -->
    <VBadge
      location="bottom end"
      content="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 top Start -->
    <VBadge
      location="top start"
      content="4"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar.png'
<\/script>

<template>
  <div class="demo-space-x">
    <!-- 👉 Top End -->
    <VBadge
      content="1"
      location="end top"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom Start -->
    <VBadge
      location="bottom start"
      content="2"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 Bottom End -->
    <VBadge
      location="bottom end"
      content="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- 👉 top Start -->
    <VBadge
      location="top start"
      content="4"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},pt={ts:`<script lang="ts" setup>
const tRefInstagramBadge = ref()
const tRefTwitterBadge = ref()
const tRefWhatsappBadge = ref()

const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge)
const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge)
const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge)
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="3"
      transition="slide-x-transition"
      :model-value="showTwitterBadgeOnHover"
    >
      <VIcon
        ref="tRefTwitterBadge"
        size="25"
        icon="bx-bxl-meta"
      />
    </VBadge>

    <VBadge
      content="5"
      transition="scale-transition"
      :model-value="showInstagramBadgeOnHover"
    >
      <VIcon
        ref="tRefInstagramBadge"
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      content="1"
      transition="slide-x-transition"
      :model-value="showWhatsappBadgeOnHover"
    >
      <VIcon
        ref="tRefWhatsappBadge"
        size="25"
        icon="bx-bxl-whatsapp"
      />
    </VBadge>
  </div>
</template>
`,js:`<script setup>
const tRefInstagramBadge = ref()
const tRefTwitterBadge = ref()
const tRefWhatsappBadge = ref()
const showTwitterBadgeOnHover = useElementHover(tRefTwitterBadge)
const showInstagramBadgeOnHover = useElementHover(tRefInstagramBadge)
const showWhatsappBadgeOnHover = useElementHover(tRefWhatsappBadge)
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="3"
      transition="slide-x-transition"
      :model-value="showTwitterBadgeOnHover"
    >
      <VIcon
        ref="tRefTwitterBadge"
        size="25"
        icon="bx-bxl-meta"
      />
    </VBadge>

    <VBadge
      content="5"
      transition="scale-transition"
      :model-value="showInstagramBadgeOnHover"
    >
      <VIcon
        ref="tRefInstagramBadge"
        size="25"
        icon="bx-bxl-instagram"
      />
    </VBadge>

    <VBadge
      content="1"
      transition="slide-x-transition"
      :model-value="showWhatsappBadgeOnHover"
    >
      <VIcon
        ref="tRefWhatsappBadge"
        size="25"
        icon="bx-bxl-whatsapp"
      />
    </VBadge>
  </div>
</template>
`},Vt={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar.png'
<\/script>

<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- default -->
    <VBadge content="1">
      <VBtn variant="tonal">
        Default
      </VBtn>
    </VBadge>

    <!-- bordered -->
    <VBadge
      content="5"
      bordered
    >
      <VBtn variant="tonal">
        Border
      </VBtn>
    </VBadge>

    <!-- dot -->
    <VBadge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- inline -->
    <VBadge
      inline
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- Rounded -->
    <VBadge
      rounded="sm"
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar.png'
<\/script>

<template>
  <div class="demo-space-x d-flex align-center flex-wrap">
    <!-- default -->
    <VBadge content="1">
      <VBtn variant="tonal">
        Default
      </VBtn>
    </VBadge>

    <!-- bordered -->
    <VBadge
      content="5"
      bordered
    >
      <VBtn variant="tonal">
        Border
      </VBtn>
    </VBadge>

    <!-- dot -->
    <VBadge
      dot
      location="bottom end"
      offset-x="3"
      offset-y="3"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- inline -->
    <VBadge
      inline
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- Rounded -->
    <VBadge
      rounded="sm"
      content="5"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},vt={ts:`<script setup lang="ts">
const tabs = [
  {
    badge: '3',
    content: 'Item One',
  },
  {
    badge: '1',
    content: 'Item Two',
  },
  {
    badge: '2',
    content: 'Item Three',
  },
]
<\/script>

<template>
  <VTabs grow>
    <VTab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <VBadge
        :content="tab.badge"
        :offset-x="-18"
        :offset-y="6"
      >
        {{ tab.content }}
      </VBadge>
    </VTab>
  </VTabs>
</template>
`,js:`<script setup>
const tabs = [
  {
    badge: '3',
    content: 'Item One',
  },
  {
    badge: '1',
    content: 'Item Two',
  },
  {
    badge: '2',
    content: 'Item Three',
  },
]
<\/script>

<template>
  <VTabs grow>
    <VTab
      v-for="tab in tabs"
      :key="tab.content"
      :value="tab.content"
    >
      <VBadge
        :content="tab.badge"
        :offset-x="-18"
        :offset-y="6"
      >
        {{ tab.content }}
      </VBadge>
    </VTab>
  </VTabs>
</template>
`},ut={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="5"
      class="v-badge--tonal"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- default -->
    <VBadge
      content="1"
      class="v-badge--tonal"
      color="error"
    >
      <VBtn color="error">
        Default
      </VBtn>
    </VBadge>

    <!-- icon -->
    <VBadge
      icon="bx-lock-open"
      color="info"
      class="v-badge--tonal"
    >
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBadge
      content="5"
      class="v-badge--tonal"
    >
      <VAvatar size="48">
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>

    <!-- default -->
    <VBadge
      content="1"
      class="v-badge--tonal"
      color="error"
    >
      <VBtn color="error">
        Default
      </VBtn>
    </VBadge>

    <!-- icon -->
    <VBadge
      icon="bx-lock-open"
      color="info"
      class="v-badge--tonal"
    >
      <VAvatar>
        <VImg :src="avatar1" />
      </VAvatar>
    </VBadge>
  </div>
</template>
`},Nt=u({__name:"badge",setup(V){return(d,e)=>{const g=ct,c=C,x=nt,I=at,z=Z,w=Q,h=J,T=L,D=U,R=P,H=M;return f(),y(E,{class:"match-height"},{default:a(()=>[t(v,{cols:"12",md:"6"},{default:a(()=>[t(c,{title:"Style",code:o(Vt)},{default:a(()=>[e[0]||(e[0]=r("p",null,[n("You can use various props like "),r("code",null,"bordered"),n(", "),r("code",null,"dot"),n(", "),r("code",null,"inline"),n(", "),r("code",null,"rounded"),n(" etc. to style the badge.")],-1)),t(g)]),_:1,__:[0]},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(c,{title:"Color",code:o(lt)},{default:a(()=>[e[1]||(e[1]=r("p",null,[n("Use "),r("code",null,"color"),n(" prop to create various background badges.")],-1)),t(x)]),_:1,__:[1]},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(c,{title:"Position",code:o(ft)},{default:a(()=>[e[2]||(e[2]=r("p",null,[n("You can use "),r("code",null,"location"),n(" prop to change the position of the badge. Possible values are "),r("code",null,"top-end"),n(", "),r("code",null,"bottom-end"),n(", "),r("code",null,"bottom-start"),n(", "),r("code",null,"top-start"),n(".")],-1)),t(I)]),_:1,__:[2]},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(c,{title:"Icon",code:o(mt)},{default:a(()=>[e[3]||(e[3]=r("p",null,[n("You can use "),r("code",null,"icon"),n(" prop or use "),r("code",null,"slot"),n(" to render the icon")],-1)),t(z)]),_:1,__:[3]},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(c,{title:"Avatar Status",code:o(dt)},{default:a(()=>[e[4]||(e[4]=r("p",null,"You can use badge with avatar as status.",-1)),t(w)]),_:1,__:[4]},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(c,{title:"Dynamic notifications",code:o(it)},{default:a(()=>[e[5]||(e[5]=r("p",null,"You can incorporate badges with dynamic content to make things such as a notification system.",-1)),t(h)]),_:1,__:[5]},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(c,{title:"Show on hover",code:o(pt)},{default:a(()=>[e[6]||(e[6]=r("p",null,"You can do many things with visibility control, for example, show badge on hover.",-1)),t(T)]),_:1,__:[6]},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(c,{title:"Tabs",code:o(vt)},{default:a(()=>[e[7]||(e[7]=r("p",null,"Badges help convey information to the user in a variety of ways.",-1)),t(D)]),_:1,__:[7]},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(c,{title:"Maximum Value",code:o(gt)},{default:a(()=>[e[8]||(e[8]=r("p",null,[n("Use "),r("code",null,"max"),n(" prop to cap the value of the badge content")],-1)),t(R)]),_:1,__:[8]},8,["code"])]),_:1}),t(v,{cols:"12",md:"6"},{default:a(()=>[t(c,{title:"Tonal",code:o(ut)},{default:a(()=>[e[9]||(e[9]=r("p",null,[n("Use class "),r("code",null,"v-badge--tonal"),n(" for using tonal variant badge.")],-1)),t(H)]),_:1,__:[9]},8,["code"])]),_:1})]),_:1})}}});export{Nt as default};
