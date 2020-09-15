new Vue({
    el:'#vue-app',
    data : {
        // name: 'Mijail',
        // job: 'Intern',
        // website: 'http://google.com',
        // websiteTag: '<a href="http://google.com">The Google</a>'
        age: 25,
        x: 0,
        y: 0
    },
    methods: {
        // greet: function(time) {
        //     return 'Good ' + time + ' ' + this.name;
        // }
        add: function(inc) {
            this.age += inc;
        },
        subtract: function(inc) {
            this.age -= inc;
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert('you clicked me');
        }
    }
});