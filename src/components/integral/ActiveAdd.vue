<script>
export default {
    name: "ActiveAdd",
    data: () => {
        return {
          value2: ['a1', 'b2'],
          options: [...Array(25)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) })),
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
              style="width: 400px"
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
