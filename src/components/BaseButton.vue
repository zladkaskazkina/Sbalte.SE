<template>
  <div>
    <button>
      <router-link to='/packlists'>
        Sbalte.se!
      </router-link>
    </button>
  </div>
</template>
<script>

export default {
  name: "BaseButton",
  components:{},
  props:[],
  data(){
    return {

    }
  },
  methods: {

  }
}
</script>
<style>
  button {
      background-color: #ffefa1; /* Yellow */
      border: dotted;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
    }
</style>