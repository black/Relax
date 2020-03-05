<template>
    <li>
        <img v-bind:src="imgsrc" alt="" v-on:click="disableSound()" loop>
        <input class="range" min="0" max="100" v-show="disable" v-model="volume" type="range" v-on:input="changeVolume()">
        <audio ref="audio" loop controls="controls">
            <source v-bind:src="audsrc" type="audio/ogg">
        </audio>
    </li>
</template>
<script>
module.exports = {
    props: ['name'],
    data: function() {
        return { 
            imgsrc:'../images/'+this.name +".svg",
            audsrc:'../audios/'+this.name +".ogg",
            disable: false,
            volume: 50
        }
    },
    methods: {
        disableSound: function() {
            this.disable = !this.disable;
            console.log("clicked", this.audisrc);
            this.playPause();
        },
        changeVolume: function() {
            console.log(this.volume / 100);
            this.$refs.audio.volume = this.volume / 100;
        },
        playPause() {
            if (this.disable) this.$refs.audio.play();
            else this.$refs.audio.pause();
        }
    }
}
</script>
<style>
li {
    margin: 10px;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 1fr;
}

img {
    width: 100px;
}

audio {
    display: none;
} 
 
input[type=range] {
  height: 2px;
  -webkit-appearance: none; 
  width: 100%;
}

 input[type=range]:focus {
  outline: none;
} 
 


input[type=range]::-webkit-slider-thumb { 
  height: 15px;
  width: 15px;
  border-radius: 15px;
  background: #FFFFFF;
  cursor: pointer;
  -webkit-appearance: none; 
}


</style>