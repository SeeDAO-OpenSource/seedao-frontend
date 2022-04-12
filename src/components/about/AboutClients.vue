<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'POAP',
			clients: [
				{
					id: 1,
					title: '设计公会共建 POAP',
					img: require('@/assets/images/poaps/1.png'),
				},
				{
					id: 2,
					title: '信源 POAP',
					img: require('@/assets/images/poaps/2.png'),
				},
				{
					id: 3,
					title: '翻译 POAP',
					img: require('@/assets/images/poaps/3.png'),
				},
				{
					id: 4,
					title: '校对 POAP',
					img: require('@/assets/images/poaps/4.png'),
				},
				{
					id: 5,
					title: '围炉夜话第二期纪念 POAP',
					img: require('@/assets/images/poaps/5.png'),
				},
				{
					id: 6,
					title: '执笔人 POAP',
					img: require('@/assets/images/poaps/6.png'),
				},
				{
					id: 7,
					title: '城隍庙搭建一级 POAP',
					img: require('@/assets/images/poaps/7.png'),
				},
				{
					id: 7,
					title: '城隍庙搭建二级 POAP',
					img: require('@/assets/images/poaps/8.png'),
				},
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
