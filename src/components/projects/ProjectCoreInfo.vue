<script>
// import counter from 'vue3-autocounter';
export default {
	// components: {
	// 	counter,
	// },
	props: ['project'],
};
</script>

<template>
	<div class="w-full">
		<div class="relative p-6 w-48">
			<div
				class="h-4 bg-opacity-50"
				style="background-color: #DBE8FF;"
			>
				<div class="absolute top-1 left-9 font-general-semibold">
					<p class="text-2xl font-black">核心數據</p>
				</div>
			</div>
		</div>

    <div class="flex flex-wrap justify-between content-center infoItem m-10 px-20 py-2">
      
      <div class=" my-5">
        <p class="text-4xl font-medium">9510<span style="color: #DBE8FF;">+</span></p>
        <p class="text-gray-500">社区人数</p>
      </div>
      <div class=" my-5">
        <p class="text-4xl font-medium">7,800,000<span style="color: #DBE8FF;">+</span></p>
        <p class="text-gray-500">回溯token总数</p>
      </div>
      <div class=" my-5">
        <p class="text-4xl font-medium">4.74<span style="color: #DBE8FF;">%</span></p>
        <p class="text-gray-500">NFT发放情况</p>
      </div>
      <div class=" my-5">
        <p class="text-4xl font-medium">15<span style="color: #DBE8FF;">+</span></p>
        <p class="text-gray-500">项目数量</p>
      </div>
    </div>
	</div>
</template>

<style lang="css" scoped>
	.infoItem{

		border: 1px solid #000000;
		box-sizing: border-box;
		border-radius: 15px;
	}
</style>
