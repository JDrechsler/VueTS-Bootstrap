var Vue;
var vueVars = {
    title: 'My todos',
    items: [
        { text: 'Go shopping' },
        { text: 'again' },
        { text: 'and again' }
    ],
    newItem: { text: '' }
};
new Vue({
    el: '#vue-app',
    data: vueVars,
    methods: {
        addItem: function (newItem) {
            if (vueVars.newItem.text.match('[a-zA-Z0-9]')) {
                vueVars.items.push(newItem);
                vueVars.newItem = { text: '' };
            }
        },
        deleteItem: function (index) {
            vueVars.items.splice(index, 1);
        }
    }
});
