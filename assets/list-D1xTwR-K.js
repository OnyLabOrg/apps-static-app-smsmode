import{V as f,b as I,a as m,d as S,c as J,e as B}from"./VList-whIA2bwW.js";import{d as V,g as d,o,f as t,c as x,i as _,b as e,v as y,$ as k,F as h,l as G,t as i,b8 as $,e as p,ai as P,b0 as L,r as N,m as v,aW as W,q as T}from"./index-DfJhTF3D.js";import{V as C}from"./VAvatar-CG9gvdqc.js";import{V as U}from"./VDivider-DXqaUHVy.js";import{V as K}from"./VBadge-BXP-ash4.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as D}from"./VListItemAction-Di2o7raF.js";import{V as j}from"./VCheckbox-DbOQF9Mx.js";import{_ as q}from"./AppCardCode.vue_vue_type_style_index_0_lang-CTNGJgps.js";import{V as E,a as g}from"./VRow-DAX72Tb6.js";import{V as r}from"./VCardText-DHi_ViAT.js";import"./ssrBoot-BxOW2H6b.js";import"./transition-CvkVxStN.js";import"./VImg-CSxjGDXo.js";import"./index-r3E_Fzoq.js";import"./VCheckboxBtn-DDgNdrcj.js";import"./VSelectionControl-CRLrz7xq.js";import"./form-CEPJ73PB.js";import"./VInput-BmivTT3B.js";import"./vue3-perfect-scrollbar-ew-kNVbd.js";import"./VCard-AgAH1aFc.js";/* empty css              */const Y=V({__name:"DemoListShaped",setup(b){const a=[{text:"Cupcake sesame snaps dessert marzipan.",icon:"bx-bxl-instagram"},{text:"Jelly beans jelly-o gummi bears chupa chups marshmallow.",icon:"bx-bxl-facebook"},{text:"Bonbon macaroon gummies pie jelly",icon:"bx-bxl-twitter"}];return(s,c)=>(o(),d(f,null,{default:t(()=>[(o(),x(h,null,_(a,(l,n)=>e(m,{key:n,value:l.text,rounded:"shaped"},{prepend:t(()=>[e(k,{icon:l.icon},null,8,["icon"])]),default:t(()=>[e(I,{textContent:y(l.text)},null,8,["textContent"])]),_:2},1032,["value"])),64))]),_:1}))}}),X=V({__name:"DemoListProgressList",setup(b){const a=[{avatar:"bx-bxl-react",title:"React is a JavaScript library for building user interfaces",language:"react",amount:90},{avatar:"bx-bxl-bootstrap",title:"Bootstrap is an open source toolkit",language:"bootstrap",amount:80},{avatar:"bx-bxl-vuejs",title:"Vue.js is the Progressive JavaScript Framework",language:"vue",amount:65},{avatar:"bx-bxl-angular",title:"Angular implements Functional Programming concepts",language:"angular",amount:75},{avatar:"bx-bxl-javascript",title:"JavaScript is the programming language of the Web",language:"javascript",amount:70}],s={react:"info",bootstrap:"primary",vue:"success",angular:"error",javascript:"warning"};return(c,l)=>(o(),d(f,{lines:"two",border:"",rounded:""},{default:t(()=>[(o(),x(h,null,_(a,(n,u)=>(o(),x(h,{key:n.language},[e(m,null,{prepend:t(()=>[e(C,{size:"36",rounded:"",variant:"tonal",icon:n.avatar,color:s[n.language]},null,8,["icon","color"])]),default:t(()=>[e(I,null,{default:t(()=>[i(y(n.title),1)]),_:2},1024),e(S,{class:"mt-2"},{default:t(()=>[e($,{height:"6",rounded:"","rounded-bar":"","model-value":n.amount,color:s[n.language]},null,8,["model-value","color"])]),_:2},1024)]),_:2},1024),u!==a.length-1?(o(),d(U,{key:0})):G("",!0)],64))),64))]),_:1}))}}),Z={class:"ms-4"},ee={class:"text-xs text-disabled"},te=V({__name:"DemoListUserList",setup(b){const a=[{avatar:L,name:"Caroline Black",status:"Online",lastVisited:"13 minutes ago"},{avatar:L,name:"Alfred Copeland",status:"Away",lastVisited:"11 minutes ago"},{avatar:L,name:"Celia Schneider",status:"Offline",lastVisited:"9 minutes ago"},{avatar:L,name:"Max Rogan",status:"In Meeting",lastVisited:"28 minutes ago"}],s={Online:"success",Away:"warning",Offline:"secondary","In Meeting":"error"};return(c,l)=>(o(),d(f,{border:"",lines:"two",rounded:""},{default:t(()=>[(o(),x(h,null,_(a,(n,u)=>(o(),x(h,{key:n.name},[e(m,null,{prepend:t(()=>[e(C,{image:n.avatar},null,8,["image"])]),append:t(()=>[e(P,{size:"small"},{default:t(()=>l[0]||(l[0]=[i(" Add ")])),_:1,__:[0]})]),default:t(()=>[e(I,null,{default:t(()=>[i(y(n.name),1)]),_:2},1024),e(S,{class:"mt-1"},{default:t(()=>[e(K,{color:s[n.status],class:"me-3",dot:"",location:"start center","offset-x":"2"},{default:t(()=>[p("span",Z,y(n.status),1)]),_:2},1032,["color"]),p("span",ee,y(n.lastVisited),1)]),_:2},1024)]),_:2},1024),u!==a.length-1?(o(),d(U,{key:0})):G("",!0)],64))),64))]),_:1}))}}),ae=["innerHTML"],se=V({__name:"DemoListThreeLine",setup(b){const a=[{type:"subheader",title:"Today"},{prependAvatar:L,title:"Brunch this weekend?",subtitle:`<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`},{type:"divider",inset:!0},{prependAvatar:L,title:"Summer BBQ",subtitle:`<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`},{type:"divider",inset:!0},{prependAvatar:L,title:"Oui oui",subtitle:'<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'},{type:"divider",inset:!0},{prependAvatar:L,title:"Birthday gift",subtitle:'<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?'}];return(s,c)=>(o(),d(f,{items:a,"item-props":"",lines:"three"},{subtitle:t(({subtitle:l})=>[p("div",{innerHTML:l},null,8,ae)]),_:1}))}}),ie=V({__name:"DemoListTwoLinesAndSubheader",setup(b){const a=[{color:"blue",icon:"bx-home-alt-2",subtitle:"Jan 20, 2014",title:"Vacation itinerary"},{color:"amber",icon:"bx-camera-home",subtitle:"Jan 10, 2014",title:"Kitchen remodel"}],s=[{subtitle:"Jan 9, 2014",title:"Photos"},{subtitle:"Jan 17, 2014",title:"Recipes"},{subtitle:"Jan 28, 2014",title:"Work"}];return(c,l)=>(o(),d(f,{lines:"two"},{default:t(()=>[e(J,{inset:""},{default:t(()=>l[0]||(l[0]=[i(" Folders ")])),_:1,__:[0]}),(o(),x(h,null,_(s,n=>e(m,{key:n.title,title:n.title,subtitle:n.subtitle},{prepend:t(()=>[e(C,{color:"secondary",variant:"tonal"},{default:t(()=>[e(k,{size:22,icon:"bx-folder"})]),_:1})]),append:t(()=>[e(P,{variant:"text",color:"default",icon:"bx-info-circle"})]),_:2},1032,["title","subtitle"])),64)),e(U,{inset:""}),e(J,{inset:""},{default:t(()=>l[1]||(l[1]=[i(" Files ")])),_:1,__:[1]}),(o(),x(h,null,_(a,n=>e(m,{key:n.title,title:n.title,subtitle:n.subtitle},{prepend:t(()=>[e(C,{color:"secondary",variant:"tonal"},{default:t(()=>[e(k,{size:22,icon:n.icon},null,8,["icon"])]),_:2},1024)]),append:t(()=>[e(P,{variant:"text",color:"default",icon:"bx-info-circle"})]),_:2},1032,["title","subtitle"])),64))]),_:1}))}}),le=V({__name:"DemoListSubGroup",setup(b){const a=N(["Users","Admin"]),s=[["Management","bx-user"],["Settings","bx-cog"]],c=[["Create","bx-plus"],["Read","bx-file"],["Update","bx-refresh"],["Delete","bx-trash"]];return(l,n)=>(o(),d(f,{opened:v(a),"onUpdate:opened":n[0]||(n[0]=u=>W(a)?a.value=u:null)},{default:t(()=>[e(m,{"prepend-icon":"bx-home",title:"Home",value:"Home"}),e(B,{value:"Users"},{activator:t(({props:u})=>[e(m,T(u,{"prepend-icon":"bx-user",title:"Users"}),null,16)]),default:t(()=>[e(B,{value:"Admin"},{activator:t(({props:u})=>[e(m,T(u,{title:"Admin"}),null,16)]),default:t(()=>[(o(),x(h,null,_(s,([u,A],w)=>e(m,{key:w,value:u,title:u,"prepend-icon":A},null,8,["value","title","prepend-icon"])),64))]),_:1}),e(B,{value:"Actions"},{activator:t(({props:u})=>[e(m,T(u,{title:"Actions"}),null,16)]),default:t(()=>[(o(),x(h,null,_(c,([u,A],w)=>e(m,{key:w,value:u,title:u,"prepend-icon":A},null,8,["value","title","prepend-icon"])),64))]),_:1})]),_:1})]),_:1},8,["opened"]))}}),ne={};function oe(b,a){return o(),d(f,{lines:"three","select-strategy":"classic"},{default:t(()=>[e(J,null,{default:t(()=>a[0]||(a[0]=[i("General")])),_:1,__:[0]}),e(m,{value:"notifications"},{prepend:t(({isActive:s})=>[e(D,null,{default:t(()=>[e(j,{"model-value":s,color:"primary",class:"mt-2"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(I,null,{default:t(()=>a[1]||(a[1]=[i("Notifications")])),_:1,__:[1]}),e(S,null,{default:t(()=>a[2]||(a[2]=[i("Notify me about updates to apps or games that I downloaded")])),_:1,__:[2]})]),_:1}),e(m,{value:"sound"},{prepend:t(({isActive:s})=>[e(D,null,{default:t(()=>[e(j,{"model-value":s,color:"primary",class:"mt-2"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(I,null,{default:t(()=>a[3]||(a[3]=[i("Sound")])),_:1,__:[3]}),e(S,null,{default:t(()=>a[4]||(a[4]=[i("Auto-update apps at any time. Data charges may apply")])),_:1,__:[4]})]),_:1}),e(m,{value:"widgets"},{prepend:t(({isActive:s})=>[e(D,null,{default:t(()=>[e(j,{"model-value":s,color:"primary",class:"mt-2"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(I,null,{default:t(()=>a[5]||(a[5]=[i("Auto-add widgets")])),_:1,__:[5]}),e(S,null,{default:t(()=>a[6]||(a[6]=[i("Automatically add home screen widgets when downloads complete")])),_:1,__:[6]})]),_:1})]),_:1})}const re=Q(ne,[["render",oe]]),ue=V({__name:"DemoListNav",setup(b){const a=[{title:"My Files",value:1,prependIcon:"bx-folder"},{title:"Shared with me",value:2,prependIcon:"bx-user"},{title:"Starred",value:3,prependIcon:"bx-star"},{title:"Recent",value:4,prependIcon:"bx-history"},{title:"Offline",value:5,prependIcon:"bx-check-circle"},{title:"Uploads",value:6,prependIcon:"bx-upload"},{title:"Backups",value:7,prependIcon:"bx-cloud-upload"}];return(s,c)=>(o(),d(f,{nav:"",lines:!1},{default:t(()=>[(o(),x(h,null,_(a,l=>e(m,{key:l.value,value:l.value},{prepend:t(()=>[e(k,{icon:l.prependIcon},null,8,["icon"])]),default:t(()=>[e(I,null,{default:t(()=>[i(y(l.title),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1}))}}),pe=V({__name:"DemoListDensity",setup(b){const a=[{title:"halvah icing marshmallow",value:1},{title:"Cake caramels donut danish muffin biscuit",value:2},{title:"Chocolate cake pie lollipop",value:3},{title:"Apple pie toffee pudding gummi bears",value:4},{title:"Jujubes chupa chups cheesecake tart",value:5},{title:"Candy fruitcake bonbon sesame snaps dessert",value:6},{title:"Candy wafer tiramisu sugar plum sweet.",value:7},{title:"Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.",value:8}];return(s,c)=>(o(),d(f,{density:"comfortable",items:a}))}}),me=V({__name:"DemoListRounded",setup(b){const a=[{title:"Cupcake sesame snaps dessert marzipan.",value:1,props:{prependIcon:"bx-bxl-instagram",rounded:"xl"}},{title:"Jelly beans jelly-o gummi bears chupa chups marshmallow.",value:2,props:{prependIcon:"bx-bxl-facebook",rounded:"xl"}},{title:"Bonbon macaroon gummies pie jelly",value:3,props:{prependIcon:"bx-bxl-whatsapp",rounded:"xl"}},{title:"halvah icing marshmallow",value:4,props:{prependIcon:"bx-bxl-twitter",rounded:"xl"}}];return(s,c)=>(o(),d(f,{items:a}))}}),de=V({__name:"DemoListBasic",setup(b){const a=["Cras justo odio","Dapibus ac facilisis in","Morbi leo risus","Porta ac consectetur ac"];return(s,c)=>(o(),d(f,{items:a}))}}),ce={ts:`<template>
  <VList
    lines="three"
    select-strategy="classic"
  >
    <VListSubheader>General</VListSubheader>

    <VListItem value="notifications">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Notifications</VListItemTitle>
      <VListItemSubtitle>Notify me about updates to apps or games that I downloaded</VListItemSubtitle>
    </VListItem>

    <VListItem value="sound">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Sound</VListItemTitle>
      <VListItemSubtitle>Auto-update apps at any time. Data charges may apply</VListItemSubtitle>
    </VListItem>

    <VListItem value="widgets">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Auto-add widgets</VListItemTitle>
      <VListItemSubtitle>Automatically add home screen widgets when downloads complete</VListItemSubtitle>
    </VListItem>
  </VList>
</template>
`,js:`<template>
  <VList
    lines="three"
    select-strategy="classic"
  >
    <VListSubheader>General</VListSubheader>

    <VListItem value="notifications">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Notifications</VListItemTitle>
      <VListItemSubtitle>Notify me about updates to apps or games that I downloaded</VListItemSubtitle>
    </VListItem>

    <VListItem value="sound">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Sound</VListItemTitle>
      <VListItemSubtitle>Auto-update apps at any time. Data charges may apply</VListItemSubtitle>
    </VListItem>

    <VListItem value="widgets">
      <template #prepend="{ isActive }">
        <VListItemAction>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Auto-add widgets</VListItemTitle>
      <VListItemSubtitle>Automatically add home screen widgets when downloads complete</VListItemSubtitle>
    </VListItem>
  </VList>
</template>
`},ve={ts:`<script setup lang="ts">
const items = ['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac']
<\/script>

<template>
  <VList :items="items" />
</template>
`,js:`<script setup>
const items = [
  'Cras justo odio',
  'Dapibus ac facilisis in',
  'Morbi leo risus',
  'Porta ac consectetur ac',
]
<\/script>

<template>
  <VList :items="items" />
</template>
`},be={ts:`<script lang="ts" setup>
const items = [
  { title: 'halvah icing marshmallow', value: 1 },
  { title: 'Cake caramels donut danish muffin biscuit', value: 2 },
  { title: 'Chocolate cake pie lollipop', value: 3 },
  { title: 'Apple pie toffee pudding gummi bears', value: 4 },
  { title: 'Jujubes chupa chups cheesecake tart', value: 5 },
  { title: 'Candy fruitcake bonbon sesame snaps dessert', value: 6 },
  { title: 'Candy wafer tiramisu sugar plum sweet.', value: 7 },
  { title: 'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.', value: 8 },
]
<\/script>

<template>
  <VList
    density="comfortable"
    :items="items"
  />
</template>
`,js:`<script setup>
const items = [
  {
    title: 'halvah icing marshmallow',
    value: 1,
  },
  {
    title: 'Cake caramels donut danish muffin biscuit',
    value: 2,
  },
  {
    title: 'Chocolate cake pie lollipop',
    value: 3,
  },
  {
    title: 'Apple pie toffee pudding gummi bears',
    value: 4,
  },
  {
    title: 'Jujubes chupa chups cheesecake tart',
    value: 5,
  },
  {
    title: 'Candy fruitcake bonbon sesame snaps dessert',
    value: 6,
  },
  {
    title: 'Candy wafer tiramisu sugar plum sweet.',
    value: 7,
  },
  {
    title: 'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.',
    value: 8,
  },
]
<\/script>

<template>
  <VList
    density="comfortable"
    :items="items"
  />
</template>
`},ge={ts:`<script lang="ts" setup>
const items = [
  { title: 'My Files', value: 1, prependIcon: 'bx-folder' },
  { title: 'Shared with me', value: 2, prependIcon: 'bx-user' },
  { title: 'Starred', value: 3, prependIcon: 'bx-star' },
  { title: 'Recent', value: 4, prependIcon: 'bx-history' },
  { title: 'Offline', value: 5, prependIcon: 'bx-check-circle' },
  { title: 'Uploads', value: 6, prependIcon: 'bx-upload' },
  { title: 'Backups', value: 7, prependIcon: 'bx-cloud-upload' },
]
<\/script>

<template>
  <VList
    nav
    :lines="false"
  >
    <VListItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
    >
      <template #prepend>
        <VIcon :icon="item.prependIcon" />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'My Files',
    value: 1,
    prependIcon: 'bx-folder',
  },
  {
    title: 'Shared with me',
    value: 2,
    prependIcon: 'bx-user',
  },
  {
    title: 'Starred',
    value: 3,
    prependIcon: 'bx-star',
  },
  {
    title: 'Recent',
    value: 4,
    prependIcon: 'bx-history',
  },
  {
    title: 'Offline',
    value: 5,
    prependIcon: 'bx-check-circle',
  },
  {
    title: 'Uploads',
    value: 6,
    prependIcon: 'bx-upload',
  },
  {
    title: 'Backups',
    value: 7,
    prependIcon: 'bx-cloud-upload',
  },
]
<\/script>

<template>
  <VList
    nav
    :lines="false"
  >
    <VListItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
    >
      <template #prepend>
        <VIcon :icon="item.prependIcon" />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`},fe={ts:`<script setup lang="ts">
interface Language {
  'react': string
  'bootstrap': string
  'vue': string
  'angular': string
  'javascript': string
}

interface Progress {
  avatar: string
  title: string
  language: keyof Language
  amount: number
}

const languageProgress: Progress[] = [
  {
    avatar: 'bx-bxl-react',
    title: 'React is a JavaScript library for building user interfaces',
    language: 'react',
    amount: 90,
  },
  {
    avatar: 'bx-bxl-bootstrap',
    title: 'Bootstrap is an open source toolkit',
    language: 'bootstrap',
    amount: 80,
  },
  {
    avatar: 'bx-bxl-vuejs',
    title: 'Vue.js is the Progressive JavaScript Framework',
    language: 'vue',
    amount: 65,
  },
  {
    avatar: 'bx-bxl-angular',
    title: 'Angular implements Functional Programming concepts',
    language: 'angular',
    amount: 75,
  },
  {
    avatar: 'bx-bxl-javascript',
    title: 'JavaScript is the programming language of the Web',
    language: 'javascript',
    amount: 70,
  },
]

const resolveStatusColor: Language = {
  react: 'info',
  bootstrap: 'primary',
  vue: 'success',
  angular: 'error',
  javascript: 'warning',
}
<\/script>

<template>
  <VList
    lines="two"
    border
    rounded
  >
    <template
      v-for="(progress, index) of languageProgress"
      :key="progress.language"
    >
      <VListItem>
        <template #prepend>
          <VAvatar
            size="36"
            rounded
            variant="tonal"
            :icon="progress.avatar"
            :color="resolveStatusColor[progress.language]"
          />
        </template>

        <VListItemTitle>
          {{ progress.title }}
        </VListItemTitle>

        <VListItemSubtitle class="mt-2">
          <VProgressLinear
            height="6"
            rounded
            rounded-bar
            :model-value="progress.amount"
            :color="resolveStatusColor[progress.language]"
          />
        </VListItemSubtitle>
      </VListItem>

      <VDivider v-if="index !== languageProgress.length - 1" />
    </template>
  </VList>
</template>
`,js:`<script setup>
const languageProgress = [
  {
    avatar: 'bx-bxl-react',
    title: 'React is a JavaScript library for building user interfaces',
    language: 'react',
    amount: 90,
  },
  {
    avatar: 'bx-bxl-bootstrap',
    title: 'Bootstrap is an open source toolkit',
    language: 'bootstrap',
    amount: 80,
  },
  {
    avatar: 'bx-bxl-vuejs',
    title: 'Vue.js is the Progressive JavaScript Framework',
    language: 'vue',
    amount: 65,
  },
  {
    avatar: 'bx-bxl-angular',
    title: 'Angular implements Functional Programming concepts',
    language: 'angular',
    amount: 75,
  },
  {
    avatar: 'bx-bxl-javascript',
    title: 'JavaScript is the programming language of the Web',
    language: 'javascript',
    amount: 70,
  },
]

const resolveStatusColor = {
  react: 'info',
  bootstrap: 'primary',
  vue: 'success',
  angular: 'error',
  javascript: 'warning',
}
<\/script>

<template>
  <VList
    lines="two"
    border
    rounded
  >
    <template
      v-for="(progress, index) of languageProgress"
      :key="progress.language"
    >
      <VListItem>
        <template #prepend>
          <VAvatar
            size="36"
            rounded
            variant="tonal"
            :icon="progress.avatar"
            :color="resolveStatusColor[progress.language]"
          />
        </template>

        <VListItemTitle>
          {{ progress.title }}
        </VListItemTitle>

        <VListItemSubtitle class="mt-2">
          <VProgressLinear
            height="6"
            rounded
            rounded-bar
            :model-value="progress.amount"
            :color="resolveStatusColor[progress.language]"
          />
        </VListItemSubtitle>
      </VListItem>

      <VDivider v-if="index !== languageProgress.length - 1" />
    </template>
  </VList>
</template>
`},Ve={ts:`<script lang="ts" setup>
const items = [
  {
    title: 'Cupcake sesame snaps dessert marzipan.',
    value: 1,
    props: {
      prependIcon: 'bx-bxl-instagram',
      rounded: 'xl',
    },
  },
  {
    title: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    value: 2,
    props: {
      prependIcon: 'bx-bxl-facebook',
      rounded: 'xl',
    },
  },
  {
    title: 'Bonbon macaroon gummies pie jelly',
    value: 3,
    props: {
      prependIcon: 'bx-bxl-whatsapp',
      rounded: 'xl',
    },
  },
  {
    title: 'halvah icing marshmallow',
    value: 4,
    props: {
      prependIcon: 'bx-bxl-twitter',
      rounded: 'xl',
    },
  },
]
<\/script>

<template>
  <VList :items="items" />
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Cupcake sesame snaps dessert marzipan.',
    value: 1,
    props: {
      prependIcon: 'bx-bxl-instagram',
      rounded: 'xl',
    },
  },
  {
    title: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    value: 2,
    props: {
      prependIcon: 'bx-bxl-facebook',
      rounded: 'xl',
    },
  },
  {
    title: 'Bonbon macaroon gummies pie jelly',
    value: 3,
    props: {
      prependIcon: 'bx-bxl-whatsapp',
      rounded: 'xl',
    },
  },
  {
    title: 'halvah icing marshmallow',
    value: 4,
    props: {
      prependIcon: 'bx-bxl-twitter',
      rounded: 'xl',
    },
  },
]
<\/script>

<template>
  <VList :items="items" />
</template>
`},xe={ts:`<script lang="ts" setup>
const items = [
  { text: 'Cupcake sesame snaps dessert marzipan.', icon: 'bx-bxl-instagram' },
  { text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.', icon: 'bx-bxl-facebook' },
  { text: 'Bonbon macaroon gummies pie jelly', icon: 'bx-bxl-twitter' },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item.text"
      rounded="shaped"
    >
      <template #prepend>
        <VIcon :icon="item.icon" />
      </template>
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <VListItemTitle v-text="item.text" />
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const items = [
  {
    text: 'Cupcake sesame snaps dessert marzipan.',
    icon: 'bx-bxl-instagram',
  },
  {
    text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    icon: 'bx-bxl-facebook',
  },
  {
    text: 'Bonbon macaroon gummies pie jelly',
    icon: 'bx-bxl-twitter',
  },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item.text"
      rounded="shaped"
    >
      <template #prepend>
        <VIcon :icon="item.icon" />
      </template>
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <VListItemTitle v-text="item.text" />
    </VListItem>
  </VList>
</template>
`},he={ts:`<script lang="ts" setup>
const open = ref(['Users', 'Admin'])

const admins = [
  ['Management', 'bx-user'],
  ['Settings', 'bx-cog'],
]

const cruds = [
  ['Create', 'bx-plus'],
  ['Read', 'bx-file'],
  ['Update', 'bx-refresh'],
  ['Delete', 'bx-trash'],
]
<\/script>

<template>
  <VList v-model:opened="open">
    <VListItem
      prepend-icon="bx-home"
      title="Home"
      value="Home"
    />

    <VListGroup value="Users">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          prepend-icon="bx-user"
          title="Users"
        />
      </template>

      <VListGroup value="Admin">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Admin"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in admins"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>

      <VListGroup value="Actions">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Actions"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>
    </VListGroup>
  </VList>
</template>
`,js:`<script setup>
const open = ref([
  'Users',
  'Admin',
])

const admins = [
  [
    'Management',
    'bx-user',
  ],
  [
    'Settings',
    'bx-cog',
  ],
]

const cruds = [
  [
    'Create',
    'bx-plus',
  ],
  [
    'Read',
    'bx-file',
  ],
  [
    'Update',
    'bx-refresh',
  ],
  [
    'Delete',
    'bx-trash',
  ],
]
<\/script>

<template>
  <VList v-model:opened="open">
    <VListItem
      prepend-icon="bx-home"
      title="Home"
      value="Home"
    />

    <VListGroup value="Users">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          prepend-icon="bx-user"
          title="Users"
        />
      </template>

      <VListGroup value="Admin">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Admin"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in admins"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>

      <VListGroup value="Actions">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Actions"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>
    </VListGroup>
  </VList>
</template>
`},Le={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar.png'
import avatar2 from '@images/avatars/avatar.png'
import avatar3 from '@images/avatars/avatar.png'
import avatar4 from '@images/avatars/avatar.png'

const items = [
  { type: 'subheader', title: 'Today' },
  {
    prependAvatar: avatar1,
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar2,
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar3,
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar4,
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
]
<\/script>

<template>
  <VList
    lines="three"
    :items="items"
    item-props
  >
    <template #subtitle="{ subtitle }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="subtitle" />
    </template>
  </VList>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar.png'
import avatar2 from '@images/avatars/avatar.png'
import avatar3 from '@images/avatars/avatar.png'
import avatar4 from '@images/avatars/avatar.png'

const items = [
  {
    type: 'subheader',
    title: 'Today',
  },
  {
    prependAvatar: avatar1,
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar2,
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar3,
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar4,
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
]
<\/script>

<template>
  <VList
    lines="three"
    :items="items"
    item-props
  >
    <template #subtitle="{ subtitle }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="subtitle" />
    </template>
  </VList>
</template>
`},_e={ts:`<script lang="ts" setup>
const files = [
  {
    color: 'blue',
    icon: 'bx-home-alt-2',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary',
  },
  {
    color: 'amber',
    icon: 'bx-camera-home',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel',
  },
]

const folders = [
  {
    subtitle: 'Jan 9, 2014',
    title: 'Photos',
  },
  {
    subtitle: 'Jan 17, 2014',
    title: 'Recipes',
  },
  {
    subtitle: 'Jan 28, 2014',
    title: 'Work',
  },
]
<\/script>

<template>
  <VList lines="two">
    <VListSubheader inset>
      Folders
    </VListSubheader>

    <VListItem
      v-for="folder in folders"
      :key="folder.title"
      :title="folder.title"
      :subtitle="folder.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="22"
            icon="bx-folder"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="bx-info-circle"
        />
      </template>
    </VListItem>

    <VDivider inset />

    <VListSubheader inset>
      Files
    </VListSubheader>

    <VListItem
      v-for="file in files"
      :key="file.title"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="22"
            :icon="file.icon"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="bx-info-circle"
        />
      </template>
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const files = [
  {
    color: 'blue',
    icon: 'bx-home-alt-2',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary',
  },
  {
    color: 'amber',
    icon: 'bx-camera-home',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel',
  },
]

const folders = [
  {
    subtitle: 'Jan 9, 2014',
    title: 'Photos',
  },
  {
    subtitle: 'Jan 17, 2014',
    title: 'Recipes',
  },
  {
    subtitle: 'Jan 28, 2014',
    title: 'Work',
  },
]
<\/script>

<template>
  <VList lines="two">
    <VListSubheader inset>
      Folders
    </VListSubheader>

    <VListItem
      v-for="folder in folders"
      :key="folder.title"
      :title="folder.title"
      :subtitle="folder.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="22"
            icon="bx-folder"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="bx-info-circle"
        />
      </template>
    </VListItem>

    <VDivider inset />

    <VListSubheader inset>
      Files
    </VListSubheader>

    <VListItem
      v-for="file in files"
      :key="file.title"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="22"
            :icon="file.icon"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="bx-info-circle"
        />
      </template>
    </VListItem>
  </VList>
</template>
`},Ie={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar.png'
import avatar2 from '@images/avatars/avatar.png'
import avatar3 from '@images/avatars/avatar.png'
import avatar4 from '@images/avatars/avatar.png'

interface Status {
  'Online': string
  'Away': string
  'Offline': string
  'In Meeting': string
}

interface Users {
  avatar: string
  name: string
  status: keyof Status
  lastVisited: string
}

const users: Users[] = [
  {
    avatar: avatar1,
    name: 'Caroline Black',
    status: 'Online',
    lastVisited: '13 minutes ago',
  },
  {
    avatar: avatar2,
    name: 'Alfred Copeland',
    status: 'Away',
    lastVisited: '11 minutes ago',
  },
  {
    avatar: avatar3,
    name: 'Celia Schneider',
    status: 'Offline',
    lastVisited: '9 minutes ago',
  },
  {
    avatar: avatar4,
    name: 'Max Rogan',
    status: 'In Meeting',
    lastVisited: '28 minutes ago',
  },
]

const resolveStatusColor: Status = {
  'Online': 'success',
  'Away': 'warning',
  'Offline': 'secondary',
  'In Meeting': 'error',
}
<\/script>

<template>
  <VList
    lines="two"
    border
    rounded
  >
    <template
      v-for="(user, index) of users"
      :key="user.name"
    >
      <VListItem>
        <template #prepend>
          <VAvatar :image="user.avatar" />
        </template>
        <VListItemTitle>
          {{ user.name }}
        </VListItemTitle>
        <VListItemSubtitle class="mt-1">
          <VBadge
            dot
            location="start center"
            offset-x="2"
            :color="resolveStatusColor[user.status]"
            class="me-3"
          >
            <span class="ms-4">{{ user.status }}</span>
          </VBadge>

          <span class="text-xs text-disabled">{{ user.lastVisited }}</span>
        </VListItemSubtitle>

        <template #append>
          <VBtn size="small">
            Add
          </VBtn>
        </template>
      </VListItem>
      <VDivider v-if="index !== users.length - 1" />
    </template>
  </VList>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar.png'
import avatar2 from '@images/avatars/avatar.png'
import avatar3 from '@images/avatars/avatar.png'
import avatar4 from '@images/avatars/avatar.png'

const users = [
  {
    avatar: avatar1,
    name: 'Caroline Black',
    status: 'Online',
    lastVisited: '13 minutes ago',
  },
  {
    avatar: avatar2,
    name: 'Alfred Copeland',
    status: 'Away',
    lastVisited: '11 minutes ago',
  },
  {
    avatar: avatar3,
    name: 'Celia Schneider',
    status: 'Offline',
    lastVisited: '9 minutes ago',
  },
  {
    avatar: avatar4,
    name: 'Max Rogan',
    status: 'In Meeting',
    lastVisited: '28 minutes ago',
  },
]

const resolveStatusColor = {
  'Online': 'success',
  'Away': 'warning',
  'Offline': 'secondary',
  'In Meeting': 'error',
}
<\/script>

<template>
  <VList
    lines="two"
    border
    rounded
  >
    <template
      v-for="(user, index) of users"
      :key="user.name"
    >
      <VListItem>
        <template #prepend>
          <VAvatar :image="user.avatar" />
        </template>
        <VListItemTitle>
          {{ user.name }}
        </VListItemTitle>
        <VListItemSubtitle class="mt-1">
          <VBadge
            dot
            location="start center"
            offset-x="2"
            :color="resolveStatusColor[user.status]"
            class="me-3"
          >
            <span class="ms-4">{{ user.status }}</span>
          </VBadge>

          <span class="text-xs text-disabled">{{ user.lastVisited }}</span>
        </VListItemSubtitle>

        <template #append>
          <VBtn size="small">
            Add
          </VBtn>
        </template>
      </VListItem>
      <VDivider v-if="index !== users.length - 1" />
    </template>
  </VList>
</template>
`},We=V({__name:"list",setup(b){return(a,s)=>{const c=de,l=q,n=me,u=pe,A=ue,w=re,M=le,H=ie,O=se,R=te,z=X,F=Y;return o(),d(E,{class:"match-height"},{default:t(()=>[e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Basic","no-padding":"",code:v(ve)},{default:t(()=>[e(r,null,{default:t(()=>s[0]||(s[0]=[p("code",null,"v-list",-1),i(" component can contain an avatar, content, actions and much more.")])),_:1,__:[0]}),e(r,null,{default:t(()=>[e(c)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Rounded","no-padding":"",code:v(Ve)},{default:t(()=>[e(r,null,{default:t(()=>s[1]||(s[1]=[i("You can make "),p("code",null,"v-list-item",-1),i(" rounded using "),p("code",null,"rounded",-1),i(" prop.")])),_:1,__:[1]}),e(r,null,{default:t(()=>[e(n)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Density",code:v(be),"no-padding":""},{default:t(()=>[e(r,null,{default:t(()=>s[2]||(s[2]=[i("Use "),p("code",null,"density",-1),i(" prop to adjusts the spacing within the component. Available options are: "),p("code",null,"default",-1),i(", "),p("code",null,"comfortable",-1),i(", and "),p("code",null,"compact",-1),i(".")])),_:1,__:[2]}),e(r,null,{default:t(()=>[e(u)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Nav","no-padding":"",code:v(ge)},{default:t(()=>[e(r,null,{default:t(()=>s[3]||(s[3]=[i("Lists can receive an alternative "),p("code",null,"nav",-1),i(" styling that reduces the width "),p("code",null,"v-list-item",-1),i(" takes up as well as adding a border radius.")])),_:1,__:[3]}),e(r,null,{default:t(()=>[e(A)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Action and item group","no-padding":"",code:v(ce)},{default:t(()=>[e(r,null,{default:t(()=>s[4]||(s[4]=[i("A "),p("code",null,"three-line",-1),i(" list with actions. Utilizing "),p("code",null,"v-list-group",-1),i(", easily connect actions to your tiles.")])),_:1,__:[4]}),e(r,null,{default:t(()=>[e(w)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Sub Group","no-padding":"",code:v(he)},{default:t(()=>[e(r,null,{default:t(()=>s[5]||(s[5]=[i(" Using the "),p("code",null,"v-list-group",-1),i(" component you can create up to 2 levels in depth using the sub-group prop. ")])),_:1,__:[5]}),e(r,null,{default:t(()=>[e(M)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Two lines and subheader","no-padding":"",code:v(_e)},{default:t(()=>[e(r,null,{default:t(()=>s[6]||(s[6]=[i("Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line.")])),_:1,__:[6]}),e(r,null,{default:t(()=>[e(H)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Three Line","no-padding":"",code:v(Le)},{default:t(()=>[e(r,null,{default:t(()=>s[7]||(s[7]=[i("For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. This feature uses line-clamp and is not supported in all browsers.")])),_:1,__:[7]}),e(r,null,{default:t(()=>[e(O)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"User List","no-padding":"",code:v(Ie)},{default:t(()=>[e(r,null,{default:t(()=>[e(R)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Progress List","no-padding":"",code:v(fe)},{default:t(()=>[e(r,null,{default:t(()=>[e(z)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(l,{title:"Shaped","no-padding":"",code:v(xe)},{default:t(()=>[e(r,null,{default:t(()=>s[8]||(s[8]=[i(" Shaped lists have rounded borders on one side of the "),p("code",null,"v-list-item",-1),i(". ")])),_:1,__:[8]}),e(r,null,{default:t(()=>[e(F)]),_:1})]),_:1},8,["code"])]),_:1})]),_:1})}}});export{We as default};
