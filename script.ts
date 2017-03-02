var Vue: any

var vueVars = {
	title: 'My todos',
	items: [
		{ text: 'Go shopping' },
		{ text: 'again' },
		{ text: 'and again' }
	],
	newItem: { text: '' }
}

new Vue({
	el: '#vue-app',
	data: vueVars,
	methods: {
		addItem(newItem: { text: '' }) {
			if (vueVars.newItem.text.match('[a-zA-Z0-9]')) {
				vueVars.items.push(newItem)
				vueVars.newItem = { text: '' }
			}
		},
		deleteItem(index: number) {
			vueVars.items.splice(index, 1)
		}
	}

})