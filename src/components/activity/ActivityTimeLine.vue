<script>
import { mapGetters, mapActions } from "vuex";
import { GET_DAILY_EVENTS, FETCH_EVENTS } from "@/store/ical.module";

export default {
  name: "ActivityTimeLine",
  data() {
    return {
      theme: "",
    };
  },
  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
    this.theme = localStorage.getItem("theme") || "light";
    this.$store.dispatch(FETCH_EVENTS);
  },
  updated() {},
  methods: {},
  computed: {
    ...mapGetters([GET_DAILY_EVENTS]),
    ...mapActions([FETCH_EVENTS]),
  },
};
</script>

<template>
  <div
    class="w-full pt-10 pb-10"
    v-for="(dailyEvent, dailyIdx) in getDailyEvents.slice(0, 7)"
    :key="dailyIdx"
  >
    <div>
      <div
        class="
          h-10
          w-28
          ont-semibold
          flex flex-wrap
          justify-center
          content-center
          timelineMonth
        "
      >
        {{ dailyEvent.date.getMonth() + 1 }}月{{ dailyEvent.date.getDate() }}日
      </div>
    </div>
    <div
      class="w-full flex"
      v-for="(event, idx) in dailyEvent.events"
      :key="idx"
    >
      <div class="w-40">
        <div class="w-28 h-72 sm:h-56 border-black border-r-2">
          <div class="relative bg-fuchsia-200 m-auto">
            <div class="h-24">
              <div class="absolute bottom-0 left-0">
                {{
                  String(event.start.getHours()).padStart(2, "0") +
                  ":" +
                  String(event.start.getMinutes()).padStart(2, "0")
                }}
              </div>
              <div class="absolute bottom-0 -right-3">
                <img
                  src="@/assets/images/activity/timelinePoint.svg"
                  class="rounded-xl w-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-4/5 flex">
        <div class="w-full h-64 sm:h-48 border border-black rounded-lg p-5">
          <div class="h-1/4 sm:h-1/3 flex flex-wrap content-center">
            <div class="w-3/3 sm:w-2/3 flex justify-start">
              <!-- <div class="h-14 w-14 c"></div>
              <div class="flex flex-wrap content-center pl-5">
                <p class="font-semibold">骆宾王robinwang</p>
              </div> -->
              <p class="font-semibold">{{ event.summary }}</p>
            </div>
            <div
              class="
                hidden
                sm:flex sm:w-1/3
                flex flex-wrap
                justify-end
                content-center
              "
            >
              <div v-if="event.end.getDate() === event.start.getDate()" class="font-semibold flex flex-wrap content-center pr-10">
                Duration： {{ String((event.end - event.start)/3600000)}} 小时
              </div>
              <div v-else class="font-semibold flex flex-wrap content-center pr-10">
                Duration： 整天
              </div>
              <!-- <div
                class="
                  itemBut
                  font-semibold
                  w-28
                  h-10
                  m-2
                  text-xs
                  flex
                  justify-center
                  flex-wrap
                  content-center
                "
              >
                加入Google日历
              </div>
              <div
                class="
                  itemBut
                  font-semibold
                  w-28
                  h-10
                  m-2
                  text-xs
                  flex
                  justify-center
                  flex-wrap
                  content-center
                "
              >
                加入iCalendar
              </div> -->
            </div>
          </div>
          <div class="h-3/4 sm:h-1/3 flex justify-start">
            <p class="flex flex-wrap content-center">
              <font v-if="event.description.length > 140" align="left">{{ event.description.slice(0,140) }} ...</font>
              <font v-else align="left">{{ event.description }}</font>
            </p>
          </div>
          <div>
            <!-- <div class="flex w-full sm:hidden">
              <div
                class="
                  itemBut
                  font-semibold
                  w-28
                  h-10
                  m-2
                  text-xs
                  flex
                  justify-center
                  flex-wrap
                  content-center
                "
              >
                加入Google日历
              </div>
              <div
                class="
                  itemBut
                  font-semibold
                  w-28
                  h-10
                  m-2
                  text-xs
                  flex
                  justify-center
                  flex-wrap
                  content-center
                "
              >
                加入iCalendar
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
  .itemBut{
    /* Off White */

    background: #FAFAFC;
    /* Off Black */

    border: 2px solid #1D1D1F;
    box-sizing: border-box;
    /* Drop Shadow / Normal */

    box-shadow: 0px 4px 0px #000000;
    border-radius: 16px;
  }
  .timelineMonth{
    background: #B7D2FF;
    border: 1px solid #313238;
    box-sizing: border-box;
    box-shadow: 0px 5px 16px rgba(8, 15, 52, 0.06);
    border-radius: 20px 40px 0px 20px;
  }
	.c{
		border-radius: 80px;
		background: #B7D2FF;
	}  
</style>
