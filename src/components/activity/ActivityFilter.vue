<script>
export default {
	name: 'ActivityFilter',
	data() {
		return {
			theme: '',
      filterItems:[
        { text: 'ALL',value:'',select:true },
        { text: 'AMA',value:'',select:false },
        { text: '迎新会',value:'',select:false },
        { text: '协调委员会',value:'',select:false },
        { text: '翻译公会',value:'',select:false },
        { text: '投研公会',value:'',select:false },
        { text: '运营公会',value:'',select:false },
        { text: '设计公会',value:'',select:false },
        { text: '产品公会',value:'',select:false },
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
