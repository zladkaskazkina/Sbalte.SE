<template>

  <div class="home">
    <router-link href="/packlists">Sbalte.se!</router-link>
    <BaseButton> "Sbalte.se!" </BaseButton>
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton.vue"
export default {
  name: 'Home',
  components:{BaseButton},
  data() {
    return {

    }
  },
  methods: {
    openLists () {

    }
  }
}
</script>

<style scoped>
      
</style>
