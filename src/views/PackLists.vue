<template>
  <div>
    <ul>Pack List
      <li v-for="packList in packLists" :key="packList.name">
        {{packList.name}} : {{packList.icon}}
      </li>
    </ul>
  </div>
</template>
<script>

import { db } from '../db'

export default {
  name: "PackLists",
  components:{},
  props:[],
  data(){
    return {
      packLists : [],
    }
  },
  firestore: {
    packLists: db.collection('pack_lists'),
  },
  methods: {

  }
}
</script>
<style>
  
</style>