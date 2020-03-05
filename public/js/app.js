new Vue({
    el: '#app',
    components: {
        'player-component': httpVueLoader('../components/player-component.vue') 
    }
});