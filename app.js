new Vue({
    el:'#vue-app',
    data : {
        name: '',
        age: '',
        // website: 'http://google.com',
        // websiteTag: '<a href="http://google.com">The Google</a>'
        x: 0,
        y: 0
    },
    methods: {
        // greet: function(time) {
        //     return 'Good ' + time + ' ' + this.name;
        // }
        // add: function(inc) {
        //     this.age += inc;
        // },
        // subtract: function(inc) {
        //     this.age -= inc;
        // },
        // updateXY: function(event) {
        //     this.x = event.offsetX;
        //     this.y = event.offsetY;
        // },
        // click: function() {
        //     alert('you clicked me');
        // }
        logName: function() {
            console.log('you entered your name');
        },
        logAge: function() {
            console.log('you entered your age');
        }
    }
});