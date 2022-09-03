<template>
	<div>
		<TemplateList :items="['A', 'B']" :item-click="item => (TemplateListClicked =
		item)" />
		<p>Clicked TemplateList: {{ TemplateListClicked }}</p>

		<DefineList :items="['11', '22']" :item-click="item => (DefineListClicked =
		item)" />
		<p>Clicked DefineList: {{ DefineListClicked }}</p>

	</div>
</template>
<script>
import TemplateList from './components/templateList';

export default {
	name: "App",
	data: () => ({
		TemplateListClicked: "",
		DefineListClicked: ''
	}),
	components: {
		TemplateList,
	}
};
</script>