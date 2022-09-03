export const DefineList = {
    install(Vue) {
		Vue.component('DefineList', {
			// 声明为函数式组件
			functional: true,
			props: {
				items: {
					type: Array,
					default: () => []
				},
				itemClick: {
					type: Function,
					default: () => {}
				}
			},
			// template: '<div>sss</div>',

			render(h, c) {
				return h('div', {},
					c.props.items.map(function (item) {
						return h('p', {
							domProps: {
								innerText:  item,
							},
							on: {
								click: (e) => {
									c.props.itemClick(e.target.innerText);
								}
							},
						}, []);
					})
				);
			},
		})
    }
};
