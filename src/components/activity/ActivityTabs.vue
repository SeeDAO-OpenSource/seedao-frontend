<script>
export default {
  props:['selected'],
	name: 'ActivityTabs',
	data() {
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
	<div class="w-full pt-10 pb-10 flex flex-wrap justify-center content-center">
    <ul class="flex w-96 ul">
      <li class="w-full" v-if="selected == '1'">
          <a href="/activity"
            class="inline-block p-4 w-full text-gray-900 bg-gray-100
            rounded-l-lg focus:ring-4 focus:ring-blue-300"
            style="background: #B7D2FF;border-radius: 16px;"
            aria-current="page">
            活动
          </a>
      </li>
      <li class="w-full" v-if="selected == '1'">
          <a href="/bounty"
            class="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none"
            style="border-radius: 16px;"
          >
            悬赏
          </a>
      </li>
      <li class="w-full" v-if="selected == '2'">
          <a href="/activity"
            class="inline-block p-4 w-full text-gray-900 bg-gray-100
            rounded-l-lg focus:ring-4 focus:ring-blue-300"
            style="border-radius: 16px;"
            aria-current="page">
            活动
          </a>
      </li>
      <li class="w-full" v-if="selected == '2'">
          <a href="/bounty"
            class="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none"
            style="background: #B7D2FF;border-radius: 16px;"
          >
            悬赏
          </a>
      </li>
    </ul>
	</div>
</template>

<style lang="css" scoped>
.ul{
  /* Off White */
  background: #FAFAFC;
  /* Off Black */
  border: 2px solid #1D1D1F;
  box-shadow: 0px 4px 0px #000000;
  border-radius: 16px;
}
</style>
