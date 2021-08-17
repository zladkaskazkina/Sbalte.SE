<template>
  <div class="container">
    <h4 class="nadpis">Kam to bude?</h4>
    <span v-for="packList in packLists" :key="packList.name">
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
    loadList(name) {
      const packList = this.packLists.find((packList) => {
        return name === packList.name
      })
      localStorage.setItem(packList.id, JSON.stringify(packList.items))
      this.$router.push(`/list/${packList.id}`)
    }
  }
}
</script>

<style>
  .container{
    margin: 0.5rem;
  }
</style>