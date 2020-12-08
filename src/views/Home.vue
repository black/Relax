<template>
  <div class="grid grid-cols-6 gap-4 py-4 font-body font-semibold"> 
    <div class="col-span-6 py-4">
      <span class="text-3xl">R E L A X</span>
    </div>
    <Player v-bind:name="item"  v-for="(item,i) in list" :key="i"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Player from '@/components/Player.vue'

export default {
  name: 'Home',
   data() { 
    return {
      list: ["nature","ocean","rain","tree","wind","thunderstorm"]
    }
  },
  components: {
    Player
  }
}
</script>
