<template>
  <div>
    <ul>Pack List
      <li v-for="packList in packLists" :key="packList.name">
        {{packList.name}} : {{packList.icon}}
        <pack-list-tile @choose-list="loadList" :name="packList.name" :icon="packList.icon"></pack-list-tile>
      </li>
    </ul>
  </div>
</template>
<script>
import PackListTile from '../components/PackListTile.vue'

import { db } from '../db'

export default {
  name: "PackLists",
  components:{PackListTile},
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
    loadList() {
      
    }
  }
}
</script>
<style>
  
</style>