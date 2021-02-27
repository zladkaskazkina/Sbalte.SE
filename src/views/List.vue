<template>
  <div>
    <h4 class="nadpis">Zabalím si</h4>
    <div class="items-box">
      <span class="item" v-for="(item, index) in listItems" :key="index">
        <list-item :id="index" :name="item.name" :count="item.count" @complete-item="completed(index)"></list-item>
      </span>
    </div>
  </div>
</template>
<script>
import ListItem from '../components/ListItem.vue'

export default {
  name: "List",
  components:{ListItem},
  props:[],
  data(){
    return {
      listItems: []
    }
  },
  methods: {
    completed(index) {
      this.listItems[index].count = -1;
      localStorage.setItem(this.$route.params.id, JSON.stringify(this.listItems));
    }
  },
  created() {
    this.listItems = JSON.parse(localStorage.getItem(this.$route.params.id));
  }
  
}
</script>

<style>
  .items-box {
    background-color: #fbeeac;
    color: #28527a;
    width: 250px;
    text-align: left;
    /* align-items: center; */
    margin-left: 10%;
    padding: 15px 15px;
  }
  .item {
    padding-top: 5px;
    padding-bottom: 5px;
  }
</style>