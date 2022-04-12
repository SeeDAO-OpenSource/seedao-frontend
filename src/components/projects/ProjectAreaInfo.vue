<script>
import feather from 'feather-icons';

export default {
	name: 'ProjectAreaInfo',
	data() {
		return {
			theme: '',
      areainfos:[
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo. Nulla varius vitae.' },
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo. Nulla varius vitae.' },
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo. Nulla varius vitae.' },
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo. Nulla varius vitae.' },
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo. Nulla varius vitae.' }
      ]
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
	<div class="w-full w-1/5 area flex flex-wrap content-center">
    <div class="pl-10">
      <div class="w-64 relative p-6 w-48">
        <div
          class="h-4 bg-opacity-50"
          style="background-color: #FFF5D0;"
        >
          <div class="absolute top-1 left-9 font-general-semibold">
            <p class="text-2xl font-black">社区高光</p>
          </div>
        </div>
      </div>
      <div class="h-1 w-20 bg-gray-500 ml-6"></div>
      <div class="ml-6 mt-5">
        <div class="flex justify-center sm:block">
          <a
            href="#"
            class="flex items-center"
            aria-label="See all"
          >
            <span
              class="mr-5 text-sm sm:text-lg font-general-medium duration-100"
              >See all
            </span>
            <div class="h-10 w-10 flex flex-wrap justify-center content-center backRound" >
              <i
                data-feather="chevron-right"
              ></i>
            </div>
          </a>
        </div>
      </div>
    </div>
	</div>
	<div class="area sm:w-full md:w-4/5">
    <div class="overflow-x-auto flex p-10">
      <div
      	v-for="info in areainfos"
        :key="info.text"
        :value="info"
        class="areainfo flex-none w-60 h-60 m-2"
      >
        <div class="h-2/3 flex flex-wrap justify-start content-center text-left">
          <p class="p-4 font-semibold">
            {{info.text}}
          </p>
        </div>
        <div class="h-1/3 flex">
          <div class="w-1/3 p-2">
            <div class="h-14 w-14 flex flex-wrap justify-center content-center c"></div>
          </div>
          <div class="w-2/3 flex flex-wrap justify-start content-center">
              <div class="font-semibold">Dev opter</div>
              <div class="font-semibold text-gray-400">2022.3.23 16:20:23</div>
          </div>
        </div>
      </div>
      <!-- <div class="areainfo flex-none w-60 h-60 m-2">2</div>
      <div class="areainfo flex-none w-60 h-60 m-2">3</div>
      <div class="areainfo flex-none w-60 h-60 m-2">3</div> -->
    </div>
	</div>
</template>

<style lang="css" scoped>
  .area{
    background:#B7D2FF
  }
  .areainfo{
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 8px 0px #000000;
    border-radius: 15px;
  }
	.backRound{
		border-radius: 80px;
		background: #FFFFFF;
	}
	.c{
		border-radius: 80px;
		background: #B7D2FF;
	}
</style>
