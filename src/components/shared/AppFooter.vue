<script>
import feather from 'feather-icons';
export default {
	data() {
		return {
			socials: [
				{
					id: 1,
					name: 'Twitter',
					src: require('@/assets/images/twitter.svg'),
					url: 'https://mobile.twitter.com/see_dao',
				},
				{
					id: 2,
					name: 'Discord',
					src: require('@/assets/images/Discord.svg'),
					url: 'https://discord.com/invite/seedao',
				},
				{
					id: 3,
					name: 'WeChat',
					src: require('@/assets/images/WeChat.svg'),
					url: '#',
				},
				{
					id: 4,
					name: 'OpenSea',
					src: require('@/assets/images/opensea.png'),
					url: 'https://opensea.io/collection/seedaogenesis',
				}
			],
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="mx-auto" style="background:#F7F9FA">
		<div
			class="pt-10 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
		>
			<!-- Footer social links -->
			<div
				class="flex flex-col justify-center items-center"
			>
				<p
					class="
						text-gray-400
						font-general-semibold text-xl
						sm:text-2xl font-semibold
						dark:text-primary-light mb-5"
				>
					加入我们
				</p>
				<ul class="flex gap-4 sm:gap-8">
					<a
						v-for="social in socials"
						:key="social.id"
						:href="social.url"
						target="__blank"
						class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"
					>
						<img
							:src="social.src"
							class="w-5 sm:w-8 h-5 sm:h-8"
							:alt="social.name"
						/>
					</a>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
