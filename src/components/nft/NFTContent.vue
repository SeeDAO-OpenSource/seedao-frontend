<script>
export default {
	name: 'NFTContent',
	data: () => {
		return {
			theme: '',
		};
	},
	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	updated() {
	},
	methods: {},
};
</script>

<template>
	<section
		class="flex flex-col justify-center"
	>
		<!-- Banner left contents -->
		<div class="w-full flex  justify-between py-10">
			<div>
				<p class="text-3xl">累计mint： 500</p>
			</div>
			<div>
				<p class="text-3xl">Unique Holders： 400</p>
			</div>
			<div>
				<p class="text-3xl">Floor： 1.5E</p>
			</div>
		</div>
		<div>
			<div class="relative bg-fuchsia-200 p-6 w-80 m-auto">
				<div
					class="titlebg bg-no-repeat bg-left h-36"
				>
					<div class="absolute bottom-10 right-10 sm:-right-10 titlefont font-general-semibold">
						<p class="text-5xl font-black pb-2">Roadmap</p>
					</div>
				</div>
			</div>
		</div>
		<div class="w-full p-10">
      <img
        src="@/assets/images/nft/map.png"
				class="w-5/6"
      />
		</div>
	</section>
	<section>
		<div>
			<div class="relative bg-fuchsia-200 p-6 w-80 m-auto">
				<div
					class="titlebg bg-no-repeat bg-left h-36"
				>
					<div class="absolute bottom-10 right-10 sm:-right-10 titlefont font-general-semibold">
						<p class="text-5xl font-black pb-2">NFT Utility</p>
					</div>
				</div>
			</div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
			<div class="w-72 h-72 utility">
				<div class="flex flex-wrap justify-center content-center p-5">
					<div class=" w-24 h-24 iconbackage a flex flex-wrap justify-center content-center ">
						<img
							src="@/assets/images/nft/1.svg"
							class="w-12"
						/>
					</div>
				</div>
				<div class="p-2">
					<p>治理</p>
				</div>
				<div class="p-2">
					<p>
						拥有治理的填权和投票权，每个NFT拥有一个投票权。治理代币发行后，每个NFT拥有等于N个代币的投票权
					</p>
				</div>
			</div>
			<div class="w-72 h-72 utility">
				<div class="flex flex-wrap justify-center content-center p-5">
					<div class=" w-24 h-24 iconbackage b flex flex-wrap justify-center content-center ">
						<img
							src="@/assets/images/nft/2.svg"
							class="w-12"
						/>
					</div>
				</div>
				<div class="p-2">
					<p>空投</p>
				</div>
				<div class="p-2">
					<p>
						未来SeeDAO发行治理代币，NFT是代币空投的依据
					</p>
				</div>
			</div>
			<div class="w-72 h-72 utility">
				<div class="flex flex-wrap justify-center content-center p-5">
					<div class=" w-24 h-24 iconbackage c flex flex-wrap justify-center content-center ">
						<img
							src="@/assets/images/nft/3.svg"
							class="w-12"
						/>
					</div>
				</div>
				<div class="p-2">
					<p>白名单</p>
				</div>
				<div class="p-2">
					<p>
						社区各种合作的白名单项目，NFT Holders拥有不超过25%的WL Slots单独抽奖
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="flex flex-col justify-center">
		<div>
			<div class="relative bg-fuchsia-200 p-6 w-80 m-auto">
				<div
					class="titlebg bg-no-repeat bg-left h-36"
				>
					<div class="absolute bottom-10 right-10 sm:-right-10 titlefont font-general-semibold">
						<p class="text-5xl font-black pb-2">如何获得</p>
					</div>
				</div>
			</div>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4  flex flex-wrap justify-center content-center ">
			<div class="w-64 h-64 utility">
				<div class="h-2/6 flex flex-wrap justify-center content-center p-5">
					<div class="w-10 h-10 citrus flex flex-wrap justify-center content-center ">
						<img
							src="@/assets/images/nft/Vector.svg"
							class="w-6"
						/>
					</div>
				</div>
				<div class="h-2/6">
					<p class="p-4">直接二级市场购买</p>
				</div>
				<div class="h-2/6 p-2 border-t-2 border-gray-700 bg-gray-200 bottom">
					<div class="flex justify-center">
						<a
							href="#"
							class="flex justify-center items-center w-36 button sm:w-48 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-900 hover:text-white duration-500"
						>
							<span
								class="text-sm sm:text-lg font-general-medium duration-100"
								>去购买
							</span>
						</a>
					</div>
				</div>
			</div>
			<div class="w-64 h-64 utility">
				<div class="h-2/6 flex flex-wrap justify-center content-center p-5">
					<div class="w-10 h-10 citrus flex flex-wrap justify-center content-center ">
						<img
							src="@/assets/images/nft/Vector.svg"
							class="w-6"
						/>
					</div>
				</div>
				<div class="h-2/6">
					<p class="p-4">SeeDAO社区杰出贡献者，由团队从保留NFT中发放</p>
				</div>
				<div class="h-2/6 p-2 border-t-2 border-gray-700 bg-gray-200 bottom">
					<div class="flex justify-center">
						<a
							href="#"
							class="flex justify-center items-center w-36 button sm:w-48 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-900 hover:text-white duration-500"
						>
							<span
								class="text-sm sm:text-lg font-general-medium duration-100"
								>如何成为？
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.titlebg{
    background-image: url('~@/assets/images/titlebg.svg');
		background-size: 75% 80%;
}
.titlefont{
	font-family: 'DM Sans';
	color: #170F49;
}
.utility{
	/* Off White */
	background: #FAFAFC;
	/* Off Black */

	border: 2px solid #1D1D1F;
	box-sizing: border-box;
	/* Drop Shadow / Normal */

	box-shadow: 0px 4px 0px #000000;
	border-radius: 16px;
	align-self: center;
  justify-self: center;
}
.iconbackage{
	border: 1px solid #171717;
	box-sizing: border-box;
	border-radius: 15px;
}
.iconbackage.a{
	background: #FFA1B0;
}
.iconbackage.b{
	background: #CBC7FF;
}
.iconbackage.c{
	background: #AFFFD9;
}
.citrus{
	/* Citrus Wasp */
	background: #F3C522;
	border-radius: 40px;
}
.button{
	background: #F3C522;
	border-radius: 16px;
}
.bottom{
	border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
