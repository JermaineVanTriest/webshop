var demo = new Vue({
    el: '#demo',
    data: {
        active: false
    },
    methods: {
        mouseOver: function(){
            this.active = !this.active;   
        }
    }
});