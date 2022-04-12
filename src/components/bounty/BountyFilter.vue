<script>
export default {
	name: 'BountyFilter',
	data() {
		return {
			theme: '',
      filterItems:[
        { text: 'ALL',value:'',select:true },
        { text: 'Token',value:'',select:false },
        { text: 'NFT',value:'',select:false },
        { text: 'Poap',value:'',select:false },
      ]
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
	<div class="w-full pt-10 pb-10 flex flex-wrap justify-center">
    <div
      v-for="filteritem in filterItems"
      :key="filteritem.text"
      :value="filteritem.value"
      class="filterItem flex-none w-24 h-10 m-2 flex flex-wrap justify-center content-center"
    >
      {{filteritem.text}}
    </div>
	</div>
</template>

<style lang="css" scoped>
  .filterItem{
    background: #FFFFFF;
    /* Off Black */
    border: 2px solid #1D1D1F;
    box-sizing: border-box;
    /* Drop Shadow / Normal */
    box-shadow: 0px 4px 0px #000000;
    border-radius: 16px;
  }
  .filterItem.select{
    background: #B7D2FF;
  }
</style>
