<script>
export default {
    name: "ActiveAdd",
    data: () => {
        return {
					unions:[
						{
							"Id":'U1',
							"Name":'翻译公会-translation',
						},
						{
							"Id":'U2',
							"Name":'宣传公会-publicity ',
						},
						{
							"Id":'U3',
							"Name":'产品公会-product',
						},
						{
							"Id":'U4',
							"Name":'运营公会-operation',
						},
						{
							"Id":'U5',
							"Name":'开发公会-development',
						},
						{
							"Id":'U6',
							"Name":'建筑公会-construction',
						},
						{
							"Id":'U7',
							"Name":'投研公会-insightandresearch',
						},
						{
							"Id":'U8',
							"Name":'设计公会-design ',
						},
						{
							"Id":'U9',
							"Name":'艺术公会-art ',
						},
						{
							"Id":'U10',
							"Name":"nft-club",
						}
					]
        };
    },
    methods: {

    },
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
				事件記錄
			</p>
			<form action="#" class="font-general-regular space-y-7">
        <div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="subject"
						>公会</label
					>
					<select
						:name="select"
						:id="select"
						class="font-general-medium
								px-4
								py-2
								border-1 border-gray-200
								dark:border-secondary-dark
								rounded-lg
								text-sm
								sm:text-md
								bg-secondary-light
								dark:bg-ternary-dark
								text-primary-dark
								dark:text-ternary-light
							"
					>
						<option value class="text-sm sm:text-md">请选择...</option>
						<option
							v-for="union in unions"
							:key="union"
							:value="union.Id"
							class="sm:text-md"
						>
							{{ union.Name }}
						</option>
					</select>
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
						>積分</label
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
						>事件說明</label
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

				<div>
				</div>
			</form>
		</div>
	</div>
</template>

<style lang="css" scoped></style>
