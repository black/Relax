let mydata = ["nature","ocean","rain","tree","wind","thunderstorm"]; 

new Vue({
    el: '#app',
    components: {
        'player-component': httpVueLoader('../components/player-component.vue')
    },
    data: { 
        list: mydata
    }
});