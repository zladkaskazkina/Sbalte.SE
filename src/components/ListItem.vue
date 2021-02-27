<template>
  <div class="listItem">
    <input type="checkbox" :id="id" v-model="completed" @click="completeItem">
    <label :class="{checked: completed}" :for="id" > {{ name }}</label>
    <span  @click="deleteItem" class="krizik">
      ×
    </span>
  </div>
</template>
<script>

export default {
  name: "ListItem",
  emits: ["complete-item", "delete-item"],
  components:{},
  props:["id", "name", "count", "checked"],
  data() {
    return {
      completed: this.checked
    }
  },
  methods: {
    completeItem() {
      this.$emit("complete-item", this.id)
    },
    deleteItem() {
      this.$emit("delete-item", this.id)
    }
  }
}
</script>
<style>
  label {
    font-size: 1.3rem;
    flex-grow: 1;
    padding: 5px;
    border-bottom: 1px solid #f4d160;
  }
  .checked {
    text-decoration: line-through;
    color: grey;
  }
  .krizik {
    background-color: var(--yellow);
    border-radius: 50%;
    /* width: 1rem; */
    /* height: 1rem; */
    display: flex;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    text-align: center;
    line-height: 1.5rem;
  }
  .listItem {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  
</style>