<script>
export default {
	props: ['project', 'events', 'bounty'],
};
</script>

<template>
	<div class="w-full w-1/2">
    <div class="flex">
      <div class="w-64 relative p-6 w-48">
        <div
          class="h-4 bg-opacity-50"
          style="background-color: #DBE8FF;"
        >
          <div class="absolute top-1 left-9 font-general-semibold">
            <p class="text-2xl font-black">活动日历</p>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-wrap justify-end content-center pr-10 ">
        <p><a href="/activity">more</a></p>
      </div>
    </div>

    <div class="relative h-64 font-medium tableOutline m-5">
      <div class="absolute left-0 right-0 top-0 z-10 px-4 py-3 flex tableTitle">
        <div class="w-1/3 pl-5 text-left">时间</div>
        <div class="w-2/3 pl-5 text-left">主题</div>
      </div>
      <div class="absolute inset-3 overflow-auto pt-10 px-6 pb-4 space-y-4 font-flow">
        <div v-for="(event, index) in events.slice(0, 10)" :key="index" class="flex">
          <div class="w-1/3 text-left">{{  event.start.getFullYear() + "/"
                + (event.start.getMonth()+1)  + "/" 
                + event.start.getDate() + " "  
                + String(event.start.getHours()).padStart(2, '0')+ ":"  
                + String(event.start.getMinutes()).padStart(2, '0') }}</div>
          <div class="w-2/3 text-left pl-5">{{ event.summary }}</div>
        </div>
      </div>
    </div>
	</div>
	<div class="w-full w-1/2">
    <div class="flex">
      <div class="w-64 relative p-6 w-48">
        <div
          class="h-4 bg-opacity-50"
          style="background-color: #DBE8FF;"
        >
          <div class="absolute top-1 left-9 font-general-semibold">
            <p class="text-2xl font-black">悬赏信息</p>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-wrap justify-end content-center pr-10 ">
        <p><a href="/bounty">more</a></p>
      </div>
    </div>
    <div class="relative h-64 font-medium tableOutline m-5">
      <div class="absolute left-0 right-0 top-0 z-10 px-4 py-3 flex tableTitle">
        <div class="w-3/4 pl-5 text-left">项目</div>
        <!-- <div class="w-1/4 pl-5 text-left">成员</div>
        <div class="w-1/4 pl-5 text-left">招募</div> -->
        <div class="w-1/4 pl-5 text-left">激励</div>
      </div>
      <div class="absolute inset-3 overflow-auto pt-10 px-6 pb-4 space-y-4 font-flow">
        <div class="flex" v-for="(task, index) in bounty" :key="index">
          <div class="w-3/4 text-left">{{ task.task }}</div>
          <!-- <div class="w-1/4 text-left">{{ task.member }}</div>
          <div class="w-1/4 pl-5 text-left">{{ task.recruit }}</div> -->
          <div class="w-1/4 pl-5 text-left">{{ task.reward }}</div>
        </div>
      </div>
    </div>
	</div>
</template>

<style lang="css" scoped>
.tableOutline{
  /* Native White */
  background: #FFFFFF;
  /* Native Black */
  border: 4px solid #000000;
  box-sizing: border-box;
  /* Drop Shadow / Large */
  box-shadow: 0px 8px 0px #000000;
  border-radius: 40px;
}
.tableTitle{
  background: rgba(183, 210, 255, 100);
  border-radius: 40px 40px 0px 0px;
}
</style>
