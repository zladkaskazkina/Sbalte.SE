<template>
  <div class="container">
    <h4 class="nadpis">Zabalím si</h4>
    <div class="items-box">
      <span class="item" v-for="(item, index) in listItems" :key="item.name+index">
        <list-item :id="index" :name="item.name" :count="item.count" :checked="item.checked" @complete-item="completed(index)" @delete-item="deleteItem(index)"></list-item>
      </span>
    </div>
    <button class="pridat" @click="addItem">+</button>
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
      this.listItems[index].checked = !this.listItems[index].checked;
      localStorage.setItem(this.$route.params.id, JSON.stringify(this.listItems));
    },
    addItem() {
      const name = prompt("Název položky");
      this.listItems.push({name, count: 1})
      localStorage.setItem(this.$route.params.id, JSON.stringify(this.listItems));
    },
    deleteItem(index) {
      this.listItems.splice(index, 1)
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
    width: 80%;
    text-align: left;
    margin: auto;
    margin-top: 15px;
    padding: 15px 15px;
  }
  .item {
    padding-top: 5px;
    padding-bottom: 5px;
    display: block;
  }
  .pridat {
    background-color: var(--yellow);
    border: none;
    color: var(--blue);
    height: 3rem;
    width: 3rem;
    font-size: 2.5rem;
    border-radius: 50%;
    margin-top: 0.5rem;
  }
</style>