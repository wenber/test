/**
 * Actual demo
 */

new Vue({

    el: '#demo',

    data: {
        name: 'liuming'
    },

    created: function() {},
    computed: {
        age() {
            return this.name + 44;
        }
    },
    methods: {
        click() {
            this.name = 'tyy';
        }
    }
})