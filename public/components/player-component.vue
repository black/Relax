<template>
    <li>
        <img v-bind:src="imgsrc" alt="" v-on:click="disableSound()" loop>
        <input min="0" max="100" v-bind:value="volume" v-show="disable" v-model="volume" type="range" v-bind:volume="volume" v-on:input="changeVolume()">
        <audio ref="audio" loop controls="controls">
            <source v-bind:src="audisrc" type="audio/ogg">
        </audio>
    </li>
</template>
<script>
module.exports = {
    props: ['imgsrc', 'audisrc'],
    data: function() {
        return {
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
.activity-component {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    list-style: none;
}

.collection {
    border: 1px solid #eee;
    border-radius: 5px;
}

.collection>img {
    width: 100%;
    object-fit: cover;
}

.collection>div {
    padding: 20px;
}


.collection:hover {
    background: #eee;
    color: black;
}

.photos {
    height: 200px;
    background-size: cover;
    background-position: center;
}
</style>