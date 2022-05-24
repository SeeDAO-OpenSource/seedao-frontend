<script>
export default {
	props: ['client'],
	data(){
		return {
      c: this.client
    }
	},
	methods: {
		setSelect: function(){
			this.c.select = (!this.c.select) ? true : false
		}
	},
};
</script>

<template>
	<div class="flex flex-col items-center justify-center">
		<img
			:src="c.img"
			:alt="c.title"
			@click="setSelect"
			class="w-64 py-5 px-10 border border-ternary-light"
			:class="{'bg-indigo-200':c.select}"
		/>
		<span>{{c.title}}</span>
	</div>
</template>

<style lang="scss" scoped></style>
