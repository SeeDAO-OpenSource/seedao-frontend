<script>
export default {
	props: ['client'],
};
</script>

<template>
	<div class="flex flex-col items-center justify-center">
		<img
			:src="client.img"
			:alt="client.title"
			class="w-64 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-5 cursor-pointer dark:bg-secondary-light"
		/>
		<span>{{ client.title}}</span>
	</div>
</template>

<style lang="scss" scoped></style>
