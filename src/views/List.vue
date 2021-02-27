<template>
  <div>
    <ul>
      <li v-for="item in listItems" :key="item.id">
        <list-item :id="item.id" :name="item.name"></list-item>
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

  },
  created() {
    this.listItems = localStorage.getItem(this.$route.params.id)
  }
  
}
</script>
<style>
  
</style>