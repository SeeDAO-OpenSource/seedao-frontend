<script>
import ActivityTabs from "../components/activity/ActivityTabs.vue";
// import ActivityFilter from "../components/activity/ActivityFilter.vue";
import ActivityTimeLine from "../components/activity/ActivityTimeLine.vue";

export default {
  name: "Activity",
  components: {
    ActivityTabs,
    // ActivityFilter,
    ActivityTimeLine,
  },
};
</script>

<template>
  <div class="container mx-auto">
    <!-- ActivityTabs -->
    <ActivityTabs :selected="1" />
    <!-- Banner -->
    <div class="w-full pb-10 flex flex-wrap justify-center content-center">
      <div class="flex w-full h-60 titlebg bg-contain bg-no-repeat bg-center">
        <div
          class="
            relative
            titlebg_l
            bg-contain bg-no-repeat bg-cover bg-right
            w-full
          "
        >
          <div class="absolute top-28 right-0">
            <p class="text-4xl sm:text-5xl font-black">近期活动</p>
          </div>
        </div>
        <div class="titlebg_r bg-contain bg-no-repeat w-full"></div>
      </div>
    </div>
    <!-- <ActivityFilter /> -->

    <!-- Projects -->
    <ActivityTimeLine />
  </div>
</template>

<style scoped>
	.titlebg{
		background-image: url('~@/assets/images/activity/news-1.png');
		background-size: 30rem 15rem; 
	}
	.titlebg_l{
		background-image: url('~@/assets/images/activity/news-3.png');
		background-size: 10rem 5rem; 
	}
	.titlebg_r{
		background-image: url('~@/assets/images/activity/news-2.png');
		/* background-size: 75% 80%; */
	}

</style>
