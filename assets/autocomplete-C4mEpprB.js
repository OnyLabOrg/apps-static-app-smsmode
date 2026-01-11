import{_ as b,V as C}from"./AppAutocomplete.vue_vue_type_script_setup_true_lang-DYLzRFac.js";import{d as v,r as S,g as h,o as g,m as r,aW as y,f as l,b as a,$ as G,dH as I,w as F,b0 as A,q as V,e as s,t as n}from"./index-B4trpNpq.js";import{a as W}from"./VList-CfkQgccu.js";import{V as D}from"./VChip-CfOVepsI.js";import{V as x,a as u}from"./VRow-BNRl9lqd.js";import{_ as R}from"./AppCardCode.vue_vue_type_style_index_0_lang-Dw0Nab0O.js";import"./VSelect-BeslwrF4.js";import"./VTextField-D4NgpABA.js";/* empty css                   */import"./VCounter-DNm1D0R9.js";import"./transition-DzuGzAMP.js";import"./VField-DbiUXdT6.js";import"./form-CeCw-UG5.js";import"./easing-Bybner-F.js";import"./VInput-CMZYqozq.js";import"./forwardRefs-C-GTDzx5.js";import"./index-DPZRgg84.js";import"./dialog-transition-2kihUDek.js";import"./VMenu-C_K_5m1S.js";import"./VOverlay-D0qO99Cg.js";import"./delay-BKOHSa9m.js";import"./lazy-CHsVODYN.js";import"./scopeId-BIvWvg6Y.js";import"./VCheckboxBtn-DINCtmZc.js";import"./VSelectionControl-DE9ea4s6.js";import"./VAvatar-BRltcDDf.js";import"./VImg-DV2UUrQh.js";import"./filter-XzM-P0hs.js";import"./ssrBoot-DTTBuvyz.js";import"./VDivider-hcznu_-L.js";import"./VSlideGroup-BdVU9RYV.js";/* empty css              */import"./vue3-perfect-scrollbar-BYJGV9eF.js";import"./VCard-D0sq1ij7.js";import"./VCardText-DjVuD5I1.js";const O=v({__name:"DemoAutocompleteValidation",setup(f){const t=["foo","bar","fizz","buzz"],e=S(["foo"]),m=[o=>!!o.length||"Select at least one option."];return(o,p)=>{const c=b;return g(),h(c,{modelValue:r(e),"onUpdate:modelValue":p[0]||(p[0]=i=>y(e)?e.value=i:null),items:t,rules:m,placeholder:"Select Option",multiple:""},null,8,["modelValue"])}}}),H=v({__name:"DemoAutocompleteStateSelector",setup(f){const t=S(!1),e=S(null),m=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];return(o,p)=>{const c=b;return g(),h(c,{modelValue:r(e),"onUpdate:modelValue":p[1]||(p[1]=i=>y(e)?e.value=i:null),hint:r(t)?"Click the icon to save":"Click the icon to edit",placeholder:"Select Your State",items:m,readonly:!r(t),label:`State — ${r(t)?"Editable":"Readonly"}`,"persistent-hint":"","prepend-icon":"bx-building","menu-props":{maxHeight:"200px"}},{append:l(()=>[a(I,{mode:"out-in"},{default:l(()=>[(g(),h(G,{key:`icon-${r(t)}`,color:r(t)?"success":"info",icon:r(t)?"bx-check-double":"bx-edit",onClick:p[0]||(p[0]=i=>t.value=!r(t))},null,8,["color","icon"]))]),_:1})]),_:1},8,["modelValue","hint","readonly","label"])}}}),L=v({__name:"DemoAutocompleteAsyncItems",setup(f){const t=S(!1),e=S(),m=S(null),o=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],p=S(o),c=i=>{t.value=!0,setTimeout(()=>{p.value=o.filter(d=>(d||"").toLowerCase().includes((i||"").toLowerCase())),t.value=!1},500)};return F(e,i=>{i&&i!==m.value&&c(i)}),(i,d)=>(g(),h(C,{modelValue:r(m),"onUpdate:modelValue":d[0]||(d[0]=_=>y(m)?m.value=_:null),search:r(e),"onUpdate:search":d[1]||(d[1]=_=>y(e)?e.value=_:null),loading:r(t),items:r(p),placeholder:"Search for a state",label:"What state are you from?",variant:"underlined","menu-props":{maxHeight:"200px"}},null,8,["modelValue","search","loading","items"]))}}),E=v({__name:"DemoAutocompleteSlots",setup(f){const t=S(["Sandra Adams","Britta Holt"]),e=[{name:"Sandra Adams",group:"Group 1",avatar:A},{name:"Ali Connors",group:"Group 1",avatar:A},{name:"Trevor Hansen",group:"Group 1",avatar:A},{name:"Tucker Smith",group:"Group 1",avatar:A},{name:"Britta Holt",group:"Group 2",avatar:A},{name:"Jane Smith ",group:"Group 2",avatar:A},{name:"John Smith",group:"Group 2",avatar:A},{name:"Sandra Williams",group:"Group 2",avatar:A}];return(m,o)=>{const p=b;return g(),h(p,{modelValue:r(t),"onUpdate:modelValue":o[0]||(o[0]=c=>y(t)?t.value=c:null),items:e,chips:"","closable-chips":"","item-title":"name","item-value":"name",label:"Select",multiple:"",placeholder:"Select User"},{chip:l(({props:c,item:i})=>[a(D,V({"prepend-avatar":i.raw.avatar,text:i.raw.name},c),null,16,["prepend-avatar","text"])]),item:l(({props:c,item:i})=>{var d,_,w;return[a(W,V({"prepend-avatar":(d=i==null?void 0:i.raw)==null?void 0:d.avatar,subtitle:(_=i==null?void 0:i.raw)==null?void 0:_.group,title:(w=i==null?void 0:i.raw)==null?void 0:w.name},c),null,16,["prepend-avatar","subtitle","title"])]}),_:1},8,["modelValue"])}}}),U=v({__name:"DemoAutocompleteCustomFilter",setup(f){const t=[{name:"Florida",abbr:"FL",id:1},{name:"Georgia",abbr:"GA",id:2},{name:"Nebraska",abbr:"NE",id:3},{name:"California",abbr:"CA",id:4},{name:"New York",abbr:"NY",id:5}];function e(m,o,p){const c=p.raw.name.toLowerCase(),i=p.raw.abbr.toLowerCase(),d=o.toLowerCase();return c.includes(d)||i.includes(d)}return(m,o)=>{const p=b;return g(),h(p,{label:"States",items:t,"custom-filter":e,"item-title":"name","item-value":"abbr",placeholder:"Select State"})}}}),P=v({__name:"DemoAutocompleteChips",setup(f){const t=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(e,m)=>{const o=b;return g(),h(o,{label:"States",items:t,placeholder:"Select State",chips:"",multiple:"","closable-chips":""})}}}),q=v({__name:"DemoAutocompleteClearable",setup(f){const t=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(e,m)=>{const o=b;return g(),h(o,{label:"States",items:t,multiple:"",placeholder:"Select State",clearable:""})}}}),$=v({__name:"DemoAutocompleteMultiple",setup(f){const t=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(e,m)=>{const o=b;return g(),h(o,{label:"States",items:t,placeholder:"Select State",multiple:"",eager:""})}}}),z=v({__name:"DemoAutocompleteVariant",setup(f){const t=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(e,m)=>(g(),h(x,null,{default:l(()=>[a(u,{cols:"12",md:"6"},{default:l(()=>[a(C,{variant:"solo",label:"Solo",items:t,placeholder:"Select State"})]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(C,{variant:"outlined",label:"Outlined",placeholder:"Select State",items:t})]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(C,{variant:"underlined",label:"Underlined",placeholder:"Select State",items:t})]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(C,{variant:"filled",label:"Filled",placeholder:"Select State",items:t})]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(C,{variant:"plain",label:"Plain",placeholder:"Select State",items:t})]),_:1})]),_:1}))}}),Y=v({__name:"DemoAutocompleteDensity",setup(f){const t=S("Florida"),e=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(m,o)=>{const p=b;return g(),h(p,{modelValue:r(t),"onUpdate:modelValue":o[0]||(o[0]=c=>y(t)?t.value=c:null),label:"States",density:"compact",placeholder:"Select State",items:e},null,8,["modelValue"])}}}),j=v({__name:"DemoAutocompleteBasic",setup(f){const t=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(e,m)=>{const o=b;return g(),h(o,{label:"States",items:t,placeholder:"Select State"})}}}),B={ts:`<script setup lang="ts">
const loading = ref(false)
const search = ref()
const select = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = (query: string) => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    placeholder="Search for a state"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`,js:`<script setup>
const loading = ref(false)
const search = ref()
const select = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = query => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    placeholder="Search for a state"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`},J={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
  />
</template>
`},K={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    chips
    multiple
    closable-chips
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    chips
    multiple
    closable-chips
  />
</template>
`},X={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    multiple
    placeholder="Select State"
    clearable
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    multiple
    placeholder="Select State"
    clearable
  />
</template>
`},Q={ts:`<script setup lang="ts">
const states = [
  { name: 'Florida', abbr: 'FL', id: 1 },
  { name: 'Georgia', abbr: 'GA', id: 2 },
  { name: 'Nebraska', abbr: 'NE', id: 3 },
  { name: 'California', abbr: 'CA', id: 4 },
  { name: 'New York', abbr: 'NY', id: 5 },
]

function customFilter(itemTitle: any, queryText: any, item: any) {
  const textOne = item.raw.name.toLowerCase()
  const textTwo = item.raw.abbr.toLowerCase()
  const searchText = queryText.toLowerCase()

  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const states = [
  {
    name: 'Florida',
    abbr: 'FL',
    id: 1,
  },
  {
    name: 'Georgia',
    abbr: 'GA',
    id: 2,
  },
  {
    name: 'Nebraska',
    abbr: 'NE',
    id: 3,
  },
  {
    name: 'California',
    abbr: 'CA',
    id: 4,
  },
  {
    name: 'New York',
    abbr: 'NY',
    id: 5,
  },
]

function customFilter(itemTitle, queryText, item) {
  const textOne = item.raw.name.toLowerCase()
  const textTwo = item.raw.abbr.toLowerCase()
  const searchText = queryText.toLowerCase()

  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
    placeholder="Select State"
  />
</template>
`},Z={ts:`<script setup lang="ts">
const select = ref('Florida')
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    v-model="select"
    label="States"
    density="compact"
    placeholder="Select State"
    :items="items"
  />
</template>
`,js:`<script setup>
const select = ref('Florida')

const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    v-model="select"
    label="States"
    density="compact"
    placeholder="Select State"
    :items="items"
  />
</template>
`},ee={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    multiple
    eager
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    placeholder="Select State"
    multiple
    eager
  />
</template>
`},ae={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar.png'
import avatar2 from '@images/avatars/avatar.png'
import avatar3 from '@images/avatars/avatar.png'
import avatar4 from '@images/avatars/avatar.png'
import avatar5 from '@images/avatars/avatar.png'
import avatar6 from '@images/avatars/avatar.png'
import avatar7 from '@images/avatars/avatar.png'
import avatar8 from '@images/avatars/avatar.png'

const friends = ref(['Sandra Adams', 'Britta Holt'])

const people = [
  { name: 'Sandra Adams', group: 'Group 1', avatar: avatar1 },
  { name: 'Ali Connors', group: 'Group 1', avatar: avatar2 },
  { name: 'Trevor Hansen', group: 'Group 1', avatar: avatar3 },
  { name: 'Tucker Smith', group: 'Group 1', avatar: avatar4 },
  { name: 'Britta Holt', group: 'Group 2', avatar: avatar5 },
  { name: 'Jane Smith ', group: 'Group 2', avatar: avatar6 },
  { name: 'John Smith', group: 'Group 2', avatar: avatar7 },
  { name: 'Sandra Williams', group: 'Group 2', avatar: avatar8 },
]
<\/script>

<template>
  <AppAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    placeholder="Select User"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :prepend-avatar="item?.raw?.avatar"
        :title="item?.raw?.name"
        :subtitle="item?.raw?.group"
      />
    </template>
  </AppAutocomplete>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar.png'
import avatar2 from '@images/avatars/avatar.png'
import avatar3 from '@images/avatars/avatar.png'
import avatar4 from '@images/avatars/avatar.png'
import avatar5 from '@images/avatars/avatar.png'
import avatar6 from '@images/avatars/avatar.png'
import avatar7 from '@images/avatars/avatar.png'
import avatar8 from '@images/avatars/avatar.png'

const friends = ref([
  'Sandra Adams',
  'Britta Holt',
])

const people = [
  {
    name: 'Sandra Adams',
    group: 'Group 1',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    group: 'Group 1',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    group: 'Group 1',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    group: 'Group 1',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    group: 'Group 2',
    avatar: avatar5,
  },
  {
    name: 'Jane Smith ',
    group: 'Group 2',
    avatar: avatar6,
  },
  {
    name: 'John Smith',
    group: 'Group 2',
    avatar: avatar7,
  },
  {
    name: 'Sandra Williams',
    group: 'Group 2',
    avatar: avatar8,
  },
]
<\/script>

<template>
  <AppAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    placeholder="Select User"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :prepend-avatar="item?.raw?.avatar"
        :title="item?.raw?.name"
        :subtitle="item?.raw?.group"
      />
    </template>
  </AppAutocomplete>
</template>
`},te={ts:`<script setup lang="ts">
const isEditing = ref(false)
const selectedState = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    placeholder="Select Your State"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="bx-building"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'bx-check-double' : 'bx-edit'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </AppAutocomplete>
</template>
`,js:`<script setup>
const isEditing = ref(false)
const selectedState = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <AppAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    placeholder="Select Your State"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="bx-building"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'bx-check-double' : 'bx-edit'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </AppAutocomplete>
</template>
`},oe={ts:`<script setup lang="ts">
const items = ['foo', 'bar', 'fizz', 'buzz']
const values = ref(['foo'])
const nameRules = [(v: string) => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <AppAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    placeholder="Select Option"
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref(['foo'])
const nameRules = [v => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <AppAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    placeholder="Select Option"
    multiple
  />
</template>
`},le={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="Solo"
        :items="items"
        placeholder="Select State"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="Outlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="Underlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="Filled"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="Plain"
        placeholder="Select State"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="Solo"
        :items="items"
        placeholder="Select State"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="Outlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="Underlined"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="Filled"
        placeholder="Select State"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="Plain"
        placeholder="Select State"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`},Ee=v({__name:"autocomplete",setup(f){return(t,e)=>{const m=j,o=R,p=Y,c=z,i=$,d=q,_=P,w=U,k=E,M=L,N=H,T=O;return g(),h(x,{class:"match-height"},{default:l(()=>[a(u,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Basic",code:r(J)},{default:l(()=>[e[0]||(e[0]=s("p",null,[n(" The "),s("code",null," v-autocomplete "),n(" component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically fetching information from an API. ")],-1)),a(m)]),_:1,__:[0]},8,["code"])]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Density",code:r(Z)},{default:l(()=>[e[1]||(e[1]=s("p",null,[n(" You can use "),s("code",null," density "),n(" prop to adjusts vertical spacing within the component. Available options are: "),s("code",null,"default"),n(", "),s("code",null,"comfortable"),n(", and "),s("code",null,"compact"),n(". ")],-1)),a(p)]),_:1,__:[1]},8,["code"])]),_:1}),a(u,{cols:"12",md:"12"},{default:l(()=>[a(o,{title:"Variant",code:r(le)},{default:l(()=>[e[2]||(e[2]=s("p",null,[n("Use "),s("code",null,"Solo"),n(", "),s("code",null,"Outlined"),n(", "),s("code",null,"Underlined"),n(", "),s("code",null,"Filled"),n(" and "),s("code",null,"Plain"),n(" options of "),s("code",null,"variant"),n(" prop to change the look of Autocomplete. ")],-1)),a(c)]),_:1,__:[2]},8,["code"])]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Multiple",code:r(ee)},{default:l(()=>[e[3]||(e[3]=s("p",null,[n("Use "),s("code",null,"multiple"),n(" prop to select multiple. Accepts array for value")],-1)),a(i)]),_:1,__:[3]},8,["code"])]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Clearable",code:r(X)},{default:l(()=>[e[4]||(e[4]=s("p",null,[n("Use "),s("code",null,"clearable"),n(" prop to add input clear functionality.")],-1)),a(d)]),_:1,__:[4]},8,["code"])]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Chips",code:r(K)},{default:l(()=>[e[5]||(e[5]=s("p",null,[n("Use "),s("code",null," chips "),n(" prop to use chips in select.")],-1)),a(_)]),_:1,__:[5]},8,["code"])]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Custom-Filter",code:r(Q)},{default:l(()=>[e[6]||(e[6]=s("p",null,[n("The "),s("code",null," custom-filter "),n(" prop can be used to filter each individual item with custom logic.In example we will filter state based on their name and abbreviations ")],-1)),a(w)]),_:1,__:[6]},8,["code"])]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Slots",code:r(ae)},{default:l(()=>[e[7]||(e[7]=s("p",null,"With the power of slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items using their props. ",-1)),a(k)]),_:1,__:[7]},8,["code"])]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"Async items",code:r(B)},{default:l(()=>[e[8]||(e[8]=s("p",null,"Sometimes you need to load data externally based upon a search query. ",-1)),a(M)]),_:1,__:[8]},8,["code"])]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"State Selector",code:r(te)},{default:l(()=>[e[9]||(e[9]=s("p",null,"Using a combination of v-autocomplete slots and transitions, you can create a stylish toggle able autocomplete field such as below state selector.",-1)),a(N)]),_:1,__:[9]},8,["code"])]),_:1}),a(u,{cols:"12",md:"6"},{default:l(()=>[a(o,{title:"validation",code:r(oe)},{default:l(()=>[e[10]||(e[10]=s("p",null,[n("Use "),s("code",null,"rules"),n(" prop to validate autocomplete. Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message.")],-1)),a(T)]),_:1,__:[10]},8,["code"])]),_:1})]),_:1})}}});export{Ee as default};
