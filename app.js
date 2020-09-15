new Vue({
    el:'#vue-app',
    data : {
        name: 'Mijail',
        job: 'Intern'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.name;
        }
    }
});