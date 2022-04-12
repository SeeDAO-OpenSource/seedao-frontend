<script>
import feather from 'feather-icons';

export default {
	name: 'Home',
	data: () => {
		return {
			theme: '',
		};
	},
	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<section
		class="flex flex-col sm:justify-between sm:flex-row mt-12 sm:mt-10"
	>
		<!-- Banner left contents -->
		<div class="w-full md:w-1/2 text-left mt-10">
			<div
				class="font-general-semibold text-7xl text-justify md:text-7xl xl:text-7xl text-center sm:text-left text-ternary-dark dark:text-primary-light highlight"
			>
				<span class="text-red-500 xl:text-8xl">DAO</span> it, <span class="xl:text-8xl">Do</span> it<span class="xl:text-5xl">！</span>
			</div>
			<p
				class="font-extrabold font-general-medium mt-5 text-lg sm:text-xl  xl:text-xl text-center sm:text-left leading-none text-gray-900"
			>
				我们的使命---探索基于Web3.0的内容生产关系🔥
			</p>
			<div class="flex justify-center sm:block">
				<a
					href="#"
					class="flex justify-center items-center w-36 startButton sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-900 hover:text-white duration-500"
					aria-label="Download Resume"
				>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>开始创造
					</span>
					<i
						data-feather="chevron-right"
						class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
					></i>
				</a>
			</div>
		</div>

		<!-- Banner right illustration -->
		<div class="w-full md:w-1/2 text-right float-right">
			<img
				v-if="theme === 'light'"
				src="@/assets/images/Web_development.svg"
				alt="Developer"
			/>
			<img
				v-else
				src="@/assets/images/Web_development.svg"
				alt="Developer"
			/>
		</div>
	</section>
</template>

<style scoped>
	.highlight{
		font-family: 'ZCOOL QingKe HuangYou', cursive;
	}
	.startButton{
		width: 150px;
    height: 40px;
		background: #FAFAFC;
    border: 2px solid #1D1D1F;
    box-sizing: border-box;
    box-shadow: 0px 4px 0px #000000;
    border-radius: 16px;
	}
</style>
