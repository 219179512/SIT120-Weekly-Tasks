Vue.component('global', {
    template: '<div>This is global</div>',
}); 
var component1 = {
    template: '<div><global></global>This is component 1</div>',
};
var component2 = {
    template: '<div>{{message}}</div>',
    data: function () {
        return {
            message: 'This is component 2',
        };
    },
};
var app = new Vue({
    el: '#app',
    data: {
    },
    components: {
        component1,
        component2,
    },
});

