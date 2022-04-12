<script>
export default {
	props: ['project'],
};
</script>

<template>
	<section
		class="flex flex-col sm:justify-between sm:flex-row mt-12 sm:mt-10"
	>
		<!-- Banner left contents -->
		<div class="w-full md:w-1/2 text-left mt-10 mr-10">
			<div
				class="font-general-semibold text-7xl text-justify
        md:text-7xl xl:text-7xl text-center
        sm:text-left text-ternary-dark dark:text-primary-light highlight"
			>
				<p>Shanghai DAO</p>
			</div>
			<p
				class="
        font-extrabold font-general-medium mt-10 text-lg
        sm:text-xl
        xl:text-xl text-center
        sm:text-left text-gray-300"
			>
				<a href="https://shanghaidao.xyz/home">
          在元宇宙中建设新上海，承接seedao的内容活动，使seedao的内容生产有文化场域，也使seedao内部的文化流量可以被转化为内部资产
        </a>
			</p>
			<div class="flex justify-center mt-10 sm:block">
				<a
					href="https://shanghaidao.xyz/home"
				>
					<span>
            https://shanghaidao.xyz/home
					</span>
				</a>
			</div>
		</div>

		<!-- Banner right illustration -->
		<div class="w-full
			flex flex-wrap  justify-center content-center
			md:w-1/2 text-right float-right">
			<img
				v-if="theme === 'light'"
				src="@/assets/images/ShanghaiDAO.svg"
				alt="Developer"
			/>
			<img
				v-else
				src="@/assets/images/ShanghaiDAO.svg"
				alt="Developer"
			/>
		</div>
	</section>
</template>

<style lang="css" scoped>

</style>
