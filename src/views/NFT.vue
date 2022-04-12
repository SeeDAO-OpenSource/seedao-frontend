<script>
import NFTBanner from '@/components/nft/NFTBanner.vue';
import NFTContent from '@/components/nft/NFTContent.vue';

export default {
	name: 'NFT',
	components: {
		NFTBanner,
    NFTContent,
	},
	data: () => {
		return {};
	},
	mounted() {

	},
	updated() {

	},
	methods: {},
};
</script>

<template>
	<div>
    <NFTBanner />
		<!-- About me -->
		<div class="container mx-auto">
      <NFTContent />
		</div>
	</div>
</template>

<style scoped></style>
