new Vue({
    el:'#vue-app',
    data : {
        name: 'Mijail',
        job: 'Intern',
        website: 'http://google.com',
        websiteTag: '<a href="http://google.com">The Google</a>'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.name;
        }
    }
});