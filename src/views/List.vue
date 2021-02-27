<template>
  <div>
    <ul>
      <li v-for="(item, index) in listItems" :key="index">
        <list-item :id="index" :name="item.name" :count="item.count" @complete-item="completed(index)"></list-item>
      </li>
    </ul>
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
  
</style>