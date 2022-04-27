<script>
import { mapGetters, mapActions } from "vuex";
import {
	GET_BOUNTY_DATA,
	FETCH_BOUNTY_DATA
} from "@/store/notion.module";

export default {
	name: 'BountyInfo',
	data() {
		return {
			theme: '',
      bountyItem:[1,1,1,1,1,1,1,1,1,1,1,1]
		};
	},
	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		this.theme = localStorage.getItem('theme') || 'light';
      this.$store.dispatch(FETCH_BOUNTY_DATA);

	},
	updated() {

	},
  computed:{
    ...mapGetters([GET_BOUNTY_DATA]),
    ...mapActions([FETCH_BOUNTY_DATA]),
  },
	methods: {},
};
</script>

<template>
<div class="grid grid-cols-1 md:grid-cols-3">
  <div
    v-for="(bounty, index) in getBountyData"
    :key="index"
    :value="bounty"
  >
    <div class="h-96 m-5 p-5 infoItem">
      <div class="flex">
          <div class="p-2">
            <div class="h-14 w-14 flex flex-wrap justify-center content-center c"></div>
          </div>
          <div class="w-2/3 flex flex-col justify-center content-center">
              <div class="font-semibold text-left">{{bounty.task }}</div>
              <!-- <div class="font-semibold text-gray-400  text-left">Due: Mar 28</div> -->
          </div>
      </div>
      <div class="h-16 flex flex-wrap  justify-start content-center">
        <div class="h-8 w-32 m-2 p-1 tap tapstyle1"> {{ bounty.member }} </div>
        <!-- <div class="h-8 w-16 m-1 p-1 tap tapstyle2"> title </div> -->
        <!-- <div class="h-8 w-16 m-1 p-1 tap tapstyle3"> title </div> -->
      </div>
      <div class="h-40">
        <div class="flex px-2 py-3">
          <div class="w-1/2 flex justify-start content-center font-bold">成员</div>
          <div class="w-1/2 flex justify-end content-center font-bold">{{ bounty.member }}</div>
        </div>
        <div class="flex px-2 py-3">
          <div class="w-1/2 flex justify-start content-center font-bold">招募</div>
          <div class="w-1/2 flex justify-end content-center font-bold">  {{ bounty.recruit }}  </div>
        </div>
        <div class="flex px-2 py-3">
          <div class="w-1/2 flex justify-start content-center font-bold">激励</div>
          <div class="w-1/2 flex justify-end content-center font-bold"> {{ bounty.reward }}</div>
        </div>
      </div>
      <div>
        <div class="w-full w-72 DoIt">
          <p><a href="https://discord.com/channels/841189467128594442/910851803707490374">Do&nbsp;&nbsp;It</a></p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="css" scoped>
	.c{
		border-radius: 80px;
		background: #FFF491;
    border: 2px solid #FEFEFE;
    box-sizing: border-box;
    box-shadow: 0px 8px 0px #626262;
	}
  .infoItem{
    /* Native White */

    background: #FFFFFF;
    /* Off Black */

    border: 2px solid #1D1D1F;
    /* Drop Shadow / Normal */

    box-shadow: 0px 4px 0px #000000;
    border-radius: 40px;
  }
  .tap{
    border-radius: 24px;
  }
  .tap.tapstyle1{
    background: #D5F7FD;
  }
  .tap.tapstyle2{
    background: #DAD8FB;
  }
  .tap.tapstyle3{
    background: #FDF5D0;
  }
  .DoIt{
    background: #B7D2FF;
    /* Off Black */
    border: 2px solid #1D1D1F;
    box-sizing: border-box;
    /* Drop Shadow / Normal */
    box-shadow: 0px 4px 0px #000000;
    border-radius: 16px;
  }
</style>
