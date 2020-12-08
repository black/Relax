<template>
    <div class="flex flex-col border border-gray-100 pt-10 pb-0 px-10 rounded bg-gray-200 opacity-80 cursor-pointer hover:bg-green-100" v-bind:class="disable?'bg-green-300':''">
        <img v-bind:src="require(`@/assets/img/${this.name}.svg`)" alt=""  v-on:click="playPause()" loop>
        <input class="range py-5" min="0" max="100" v-bind:class="disable?'visible':'invisible'" v-model="volume" type="range" v-on:input="changeVolume()"> 
        <audio ref="player" loop controls="controls" class="hidden">
            <source  v-bind:src="require(`@/assets/sound/${this.name}.ogg`)" type="audio/ogg">
        </audio> 
    </div>
</template>
<script>
module.exports = {
    props: ['name'],
    data() {
        return {  
            disable: false,
            volume: 50
        }
    }, 
    methods: { 
        changeVolume: function() { 
            this.$refs.player.volume = this.volume / 100;
        },
        playPause() {
            this.disable=!this.disable;
            console.log( this.disable) 
            if (this.disable) {
                this.changeVolume();
                this.$refs.player.play();  
            }else {
                this.$refs.player.pause(); 
            }
        }
    }
}
</script>
<style scoped>  
 input[type=range] {
  width: 100%;
  margin: 7px 0;
  background-color: transparent;
  -webkit-appearance: none;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  background: #fff;
  border: 0px solid rgba(0, 0, 0, 0);
  border: 0;
  width: 100%;
  height: 2px;
  cursor: pointer;
}
input[type=range]::-webkit-slider-thumb {
  margin-top: -7px;
  width: 16px;
  height: 16px;
  background: #ffffff;
  border: 1px solid #fff;
  border-radius: 16px;
  cursor: pointer;
  -webkit-appearance: none;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #0d0d0d;
}
input[type=range]::-moz-range-track {
  background: #fff;
  border: 0px solid rgba(0, 0, 0, 0);
  border: 0;
  width: 100%;
  height: 2px;
  cursor: pointer;
}
input[type=range]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background: #ffffff;
  border: 1px solid #fff;
  border-radius: 16px;
  cursor: pointer;
}
input[type=range]::-ms-track {
  background: transparent;
  border-color: transparent;
  border-width: 8.4px 0;
  color: transparent;
  width: 100%;
  height: 2px;
  cursor: pointer;
}
input[type=range]::-ms-fill-lower {
  background: #fff;
  border: 0px solid rgba(0, 0, 0, 0);
  border: 0;
}
input[type=range]::-ms-fill-upper {
  background: #fff;
  border: 0px solid rgba(0, 0, 0, 0);
  border: 0;
}
input[type=range]::-ms-thumb {
  width: 16px;
  height: 16px;
  background: #ffffff;
  border: 1px solid #fff;
  border-radius: 16px;
  cursor: pointer;
  margin-top: 0px;
  /*Needed to keep the Edge thumb centred*/
}
input[type=range]:focus::-ms-fill-lower {
  background: #fff;
}
input[type=range]:focus::-ms-fill-upper {
  background: #0d0d0d;
}
/*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
how to remove the virtical space around the range input in IE*/
@supports (-ms-ime-align:auto) {
  /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
  input[type=range] {
    margin: 0;
    /*Edge starts the margin from the thumb, not the track as other browsers do*/
  }
}

</style>