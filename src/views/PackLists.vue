<template>
  <div>
    <h4 class="kam-to-bude">Kam to bude?</h4>
    <span v-for="packList in packLists" :key="packList.name">
      <!-- {{packList.name}} : {{packList.icon}} -->
      <pack-list-tile @choose-list="loadList" :name="packList.name" :icon="packList.icon"></pack-list-tile>
    </span>
  
  </div>
</template>
<script>

import { db } from '../db'
import PackListTile from '../components/PackListTile.vue'

export default {
  name: "PackLists",
  components:{
    PackListTile,
  },
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
  .kam-to-bude {
    background-color: #f4d160;
    line-height: 50px;
    font-size: 25px;
  }
  
</style>