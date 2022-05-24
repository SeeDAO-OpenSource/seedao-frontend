<script>
import PoapSelect from './PoapSelect.vue';
export default {
    name: "PoapSend",
		components: {
			PoapSelect,
		},
		computed: {
			filteredList() {
				return this.clients.filter(post => {
					return post.title.toLowerCase().includes(this.search.toLowerCase())
				})
			}
		},
    data: () => {
        return {
					search: '',
          value2: ['a1', 'b2'],
          options: [...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) })),
					clients: [
						{
							id: 1,
							title: '设计公会共建 POAP',
							img: require('@/assets/images/poaps/1.png'),
							select: false,
						},
						{
							id: 2,
							title: '信源 POAP',
							img: require('@/assets/images/poaps/2.png'),
							select: false,
						},
						{
							id: 3,
							title: '翻译 POAP',
							img: require('@/assets/images/poaps/3.png'),
							select: false,
						},
						{
							id: 4,
							title: '校对 POAP',
							img: require('@/assets/images/poaps/4.png'),
							select: false,
						},
						{
							id: 5,
							title: '围炉夜话第二期纪念 POAP',
							img: require('@/assets/images/poaps/5.png'),
							select: false,
						},
						{
							id: 6,
							title: '执笔人 POAP',
							img: require('@/assets/images/poaps/6.png'),
							select: false,
						},
						{
							id: 7,
							title: '城隍庙搭建一级 POAP',
							img: require('@/assets/images/poaps/7.png'),
							select: false,
						},
						{
							id: 7,
							title: '城隍庙搭建二级 POAP',
							img: require('@/assets/images/poaps/8.png'),
							select: false,
						},
					],
        };
    },
		methods: {
			submit:function(){
				//新增的地方
			}
		}
};
</script>

<template>
	<div class="w-full md:w-1/2">
		<div
			class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
		>
			<p
				class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"
			>
				发放POAP
			</p>
			<form action="#" class="font-general-regular space-y-7">
        <div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="subject"
						>Community</label
					>
          <a-space direction="vertical">
            <a-select
              class="w-full px-5 py-2 border border-gray-300 "
              v-model:value="value2"
              :options="options"
              mode="multiple"
              :size="size"
              placeholder="Please select"
            ></a-select>
          </a-space>
        </div>
				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="name"
						>事件名稱</label
					>
					<input
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="name"
						name="name"
						type="text"
						required=""
						placeholder="Your Name"
						aria-label="Name"
					/>
				</div>
				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="subject"
						>发送钱包</label
					>
					<input
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="subject"
						name="subject"
						type="text"
						required=""
						placeholder="Subject"
						aria-label="Subject"
					/>
				</div>
				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="message"
						>发放原因</label
					>
					<textarea
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="message"
						name="message"
						cols="14"
						rows="6"
						aria-label="Message"
					></textarea>
				</div>
				<div class="flex justify-end">
					<button
						class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
						type="submit"
						aria-label="Send Message"
						@click="submit"
					> 提交</button>
				</div>
			</form>
		</div>
	</div>
	<div class="w-full md:w-1/2">
		<div>
					<input
						v-model="search"
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="search"
						name="search"
						type="text"
						required=""
						placeholder="Search title..."
					/>
  </div>
		<div class="overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch h-4/6">
				<div class="p-4 grid gap-4 grid-cols-3 bg-fuchsia-300 bg-stripes bg-stripes-white rounded-md">
						<PoapSelect
							v-for="client in filteredList"
							:key="client.id"
							:client="client"
						/>
				</div>
		</div>
	</div>
</template>

<style lang="css" scoped></style>
