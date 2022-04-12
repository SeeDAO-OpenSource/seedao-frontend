<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'SeeDAO，是一个由CryptoC发起的、致力于探索创作者经济的去中心化自治组织。（DAO）。使命是将Web2.0的创作者引入Web3.0世界，探索更好的生产关系和组织形态，帮助内容创作者和内容消费者建立共生共赢共有的IP社区，为元宇宙输入优质内容。',
				},
				{
					id: 2,
					bio:
						'',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
