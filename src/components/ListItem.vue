<template>
  <div>
    <input type="checkbox" :id="id" v-model="completed" @click="completeItem">
    <label :class="{checked: completed}" :for="id" > {{ name }}</label>
    <button @click="deleteItem" class="btn-krizik">
      <img :src="require(`@/assets/krizik.svg`)" class="krizik">
    </button>
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
  }
  .checked {
    text-decoration: line-through;
    color: grey;
  }
  .krizik {
    width: 15px;
  }
  .btn-krizik {
    background-color: var(--bright-blue);
    width: 10px;
    height: 10px;
    
  }
</style>