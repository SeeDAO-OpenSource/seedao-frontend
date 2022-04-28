<script>
export default {
    name: "NFTContent",
    data: () => {
        return {
            theme: "",
        };
    },
    created() {
        this.theme = localStorage.getItem("theme") || "light";
    },
    mounted() {
        this.theme = localStorage.getItem("theme") || "light";
    },
    updated() {},
    methods: {},
};
</script>

<template>
    <section class="flex flex-col justify-center">
        <!-- Banner left contents -->
        <div class="w-full flex justify-between py-10">
            <div>
                <p class="text-3xl">累计铸造： 424</p>
            </div>
            <div>
                <p class="text-3xl">持有者数量： 361</p>
            </div>
            <div>
                <p class="text-3xl">地板价： 0.45E</p>
            </div>
        </div>
        <div>
            <div class="relative bg-fuchsia-200 p-6 w-80 m-auto">
                <div class="titlebg bg-no-repeat bg-left h-36">
                    <div
                        class="
              absolute
              bottom-10
              right-10
              sm:-right-10
              titlefont
              font-general-semibold
            "
                    >
                        <p class="text-5xl font-black pb-2">Roadmap</p>
                    </div>
                </div>
            </div>
        </div>
    <div class="w-full p-10 text-left">
      <div class="p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
        <time class="text-lg font-semibold text-gray-900 dark:text-white">2021</time>
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">11月23日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-5">
                  <a href="https://mp.weixin.qq.com/s/HOkJe3emgv4eVAIB7n-BXA" target="_blank" class="text-indigo-600">
                  《SeeDAO宣言：基于Web3的创作者组织系统》
                  </a>
                  发布，SeeDAO诞生</h3>
                <!-- <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p> -->
                <a href="https://mp.weixin.qq.com/s/HOkJe3emgv4eVAIB7n-BXA" target="_blank"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                  看更多 <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">12月02日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">发起第一次社区共建者线上会议</h3>
                <!-- <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> -->
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">12月04日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> 官网V1正式上线，开启针对CryptoC社区老用户、Bank/FF/FWB/RLY持有者的SGN空投</h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">12月16日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> SeeDAO 元宇宙建筑师公会成立 </h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">12月16日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-5">  
                  <a href="https://mp.weixin.qq.com/s/tWhvQPyBAZ2l2gcy2NYEEg" target="_blank" class="text-indigo-600">
                  《SeeDAO NFT和贡献徽章(POAP)指南草稿》
                  </a>发布 
                </h3>
                <a href="https://mp.weixin.qq.com/s/tWhvQPyBAZ2l2gcy2NYEEg" target="_blank"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                  看更多 <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">12月底</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-5">
                  联合Y2Z成功举办
                  <a href="https://mcc.fund/" target="_blank" class="text-indigo-600">
                  首届元宇宙创作者嘉年华
                  </a>
                </h3>
                <a href="https://mcc.fund/" target="_blank"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                  看更多 <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">12月25日 </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> SeeDAO 协调委员会成立，7名成员举行第一次社区会议</h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">12月28日 </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> 发生“悟恶意分叉”攻击事件</h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">12月30日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-5">  
                  <a href="https://mcc.fund/" target="_blank" class="text-indigo-600">
                  《SeeDAO治理架构草案》
                  </a>
                  发布
                </h3>
                <a href="https://mp.weixin.qq.com/s/tWhvQPyBAZ2l2gcy2NYEEg" target="_blank"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                  看更多 <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </li>
        </ol>
      </div>
      <div class="p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
        <time class="text-lg font-semibold text-gray-900 dark:text-white">2022</time>
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">1月19日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-5">ShanghaiDAO 城隍庙抢头香</h3>
                <a href="https://mp.weixin.qq.com/s/JbmeG-azc3ptl8E9dKZDEg" target="_blank"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                  看更多 <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">1月22日 </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">第一次社区孵化项目路演</h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">1月23日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-5"> SeeDAO 贡献记录体系 MSN 开发完成 </h3>
                <a href="https://www.notion.so/SeeDAO-Poap-1d0cb0ee1084476a893341afbdf72f24" target="_blank"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                  看更多 <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">1月24日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> 春节神秘活动 </h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2月13日 </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">  投研公会建立公会内部POAP体系，翻译公会建立协调小组，任期三个月 </h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2月16日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-5"> ShanghaiDAO  元宇宙相亲活动 </h3>
                <a href="https://mp.weixin.qq.com/s/e4PEGBdA0D0Xhnd15Ix5fQ" target="_blank"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                  看更多 <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2月21日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> 联合登峰文社、FLOW、MASK、Matrix World、MyNFT发起古典音乐现代化大赛</h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">3月6日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> 官网V2开始设计，投研公会推进Web3 大学入门课程</h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">3月13日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> SeeDAO NFT更名为SGN (SeeDAO Genesis NFT ) ; POAP更名为 MSC（Memory of  SeeDAO Contribution ）</h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">3月15日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> 社区持续举办高质量AMA</h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">3月20日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> 讨论 SeeDAO 主要任务为 孵化DAO，开始孵化器技术平台开发</h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">3月20日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> 确立SeeDAO抽象治理原则， 公地剧场研究所开始立项</h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">3月23日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> 辍学之辨，引起波澜；DeSchool 开启内测 ； 元宇宙音乐厅建设开启</h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">3月24日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> 完成SeeDAO所有过往贡献的登记和确认回溯性空投Token数量</h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">3月27日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> Web3 大学#100课程收官 ； SeeDAO知识沉淀 项目启动</h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">3月28日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> Azuki Cafe 项目确定社区化运营原则</h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">4月10日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> DeSchool 出Alpha 版本、官网V2出demo</h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">4月11日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> ShanghaiDAO 升级为 MetaShanghai</h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">4月12日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-5"> 
                  <a href="https://www.notion.so/SeeDAO-Poap-1d0cb0ee1084476a893341afbdf72f24" target="_blank" class="text-indigo-600">
                  《春天音乐会》
                  </a>筹备
                </h3>
                <a href="https://www.notion.so/SeeDAO-Poap-1d0cb0ee1084476a893341afbdf72f24" target="_blank"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                  看更多 <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">4月17日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> 第二次社区孵化项目路演</h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">4月11日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> ShanghaiDAO 升级为 MetaShanghai</h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">4月18日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> SeeDAO参加艺术展览，社区共创一件作品表达自我</h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">4月19日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> SeeDAO POAP V2 工具立项</h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">4月20日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> Web3 图书馆项目开启</h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">4月26日</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> 投研公会、产品公会和翻译公会在制定换届规则</h3>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">5月-8月</time>
                <ul>
                  <li class="text-lg font-semibold text-gray-900 dark:text-white"> ◼︎ 孵化器技术平台 C-Combinator 上线</li>
                  <li class="text-lg font-semibold text-gray-900 dark:text-white"> ◼︎ 成立与C-Combitor配套的SeeDAO 创造者Grants基金</li>
                  <li class="text-lg font-semibold text-gray-900 dark:text-white"> ◼︎ 举办SeeDAO 第一期黑客松，孵化出12个项目</li>
                  <li class="text-lg font-semibold text-gray-900 dark:text-white"> ◼︎ 重点吸纳来自因为各种原因离开Web2的从业者，转化为SeeDAO有生力量</li>
                </ul>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">9月-12月</time>
                <ul>
                  <li class="text-lg font-semibold text-gray-900 dark:text-white"> ◼︎ 建立SeeDAO北美据点，增加SeeDAO的北美成员比例及SGN持有者</li>
                  <li class="text-lg font-semibold text-gray-900 dark:text-white"> ◼︎ 完善SeeDAO的治理体系与工具组合，形成教育、工作、治理、创造的良性循环</li>
                  <li class="text-lg font-semibold text-gray-900 dark:text-white"> ◼︎ 举办SeeDAO第二期黑客松，孵化出12个项目</li>
                  <li class="text-lg font-semibold text-gray-900 dark:text-white"> ◼︎ 开启SeeDAO下一轮融资</li>
                </ul>
            </li>
        </ol>
      </div>
      <div class="p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
        <time class="text-lg font-semibold text-gray-900 dark:text-white">2023</time>
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Q1 - Q2</time>
                <ul>
                  <li class="text-lg font-semibold text-gray-900 dark:text-white"> ◼︎ 完成SeeDAO B轮融资，与全球顶级的投资机构、创业组织建立广泛联系</li>
                  <li class="text-lg font-semibold text-gray-900 dark:text-white"> ◼︎ 抽象出一套DAO的哲学观和方法论，将其对外输出，建立在DAO领域的深层次影响</li>
                  <li class="text-lg font-semibold text-gray-900 dark:text-white"> ◼︎ 举办SeeDAO第三期与第四期黑客松，每一期都孵化出12个项目</li>
                  <li class="text-lg font-semibold text-gray-900 dark:text-white"> ◼︎ SGN的持有人数超过1000人，启动SeeDAO协调委员会换届选举</li>
                </ul>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Q3 - Q4</time>
                <ul>
                  <li class="text-lg font-semibold text-gray-900 dark:text-white"> ◼︎ 举办全球各大城市SeeDAO见面会。例如：北京、上海、杭州、深圳、洛杉矶、纽约、伦敦、东京等</li>
                  <li class="text-lg font-semibold text-gray-900 dark:text-white"> ◼︎ 在某些国际化大城市建立SeeDAO的固定线下据点，让SeeDAO成为华人Web3文化的典范</li>
                  <li class="text-lg font-semibold text-gray-900 dark:text-white"> ◼︎ 举办SeeDAO第五期与第六期黑客松，每一期都孵化出12个项目</li>
                  <li class="text-lg font-semibold text-gray-900 dark:text-white"> ◼︎ 在商业上取得一定成功后，增加在学术和理论上输出和影响</li>
                </ul>
            </li>
        </ol>
      </div>
    </div>
        <!-- <div class="w-full p-10">
            <img src="@/assets/images/nft/map.png" class="w-5/6" />
        </div> -->
    </section>
    <section>
        <div>
            <div class="relative bg-fuchsia-200 p-6 w-80 m-auto">
                <div class="titlebg bg-no-repeat bg-left h-36">
                    <div
                        class="
              absolute
              bottom-10
              right-10
              sm:-right-10
              titlefont
              font-general-semibold
            "
                    >
                        <p class="text-5xl font-black pb-2">SGN Utility</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid w-full item-center justify-center" style="display:flex">
            <p class="text-2xl pb-10 w-5/6">
                SGN, 全称SeeDAO Genesis NFT，象征着SeeDAO正式成员身份，也代表SeeDAO治理权和被选举权，是SeeDAO生态最重要的NFT。数目暂定为10000枚，只颁发给社区贡献者，坚持POW原则。
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="w-72 h-80 utility">
                <div class="flex flex-wrap justify-center content-center p-5">
                    <div
                        class="
              w-24
              h-24
              iconbackage
              a
              flex flex-wrap
              justify-center
              content-center
            "
                    >
                        <img src="@/assets/images/nft/1.svg" class="w-12" />
                    </div>
                </div>
                <div class="p-2">
                    <p>治理</p>
                </div>
                <div class="p-2">
                    <p style="text-align: left">
                        1.
                        SGN持有者是SeeDAO生态居民，拥有社区大会投票权和被选举权。
                    </p>
                    <p style="text-align: left">
                        2. 深度参与各个公会核心事务的权利
                    </p>
                </div>
            </div>
            <div class="w-72 h-80 utility">
                <div class="flex flex-wrap justify-center content-center p-5">
                    <div
                        class="
              w-24
              h-24
              iconbackage
              b
              flex flex-wrap
              justify-center
              content-center
            "
                    >
                        <img src="@/assets/images/nft/2.svg" class="w-12" />
                    </div>
                </div>
                <div class="p-2">
                    <p>孵化</p>
                </div>
                <div class="p-2">
                    <p style="text-align: left">
                        1. 帮助每一位SGN 持有者在SeeDAO实现梦想, 从 Holder 变成
                        Builder
                    </p>
                    <p style="text-align: left">
                        2. 只有SGN持有者提出的创DAO想法才会被SeeDAO孵化,
                        被社区基金支持
                    </p>
                </div>
            </div>
            <div class="w-72 h-80 utility">
                <div class="flex flex-wrap justify-center content-center p-5">
                    <div
                        class="
              w-24
              h-24
              iconbackage
              c
              flex flex-wrap
              justify-center
              content-center
            "
                    >
                        <img src="@/assets/images/nft/3.svg" class="w-12" />
                    </div>
                </div>
                <div class="p-2">
                    <p>空投</p>
                </div>
                <div class="p-2">
                    <p style="text-align: left">
                        1. 未来SeeDAO发行治理代币，SGN是代币空投的依据
                    </p>
                    <p style="text-align: left">
                        2. SeeDAO日常记录贡献的 Memory of SeeDAO NFT (MSN)
                        也是空投依据
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section class="flex flex-col justify-center">
        <div>
            <div class="relative bg-fuchsia-200 p-6 w-80 m-auto">
                <div class="titlebg bg-no-repeat bg-left h-36">
                    <div
                        class="
              absolute
              bottom-10
              right-10
              sm:-right-10
              titlefont
              font-general-semibold
            "
                    >
                        <p class="text-5xl font-black pb-2">如何获得</p>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="
        grid grid-cols-1
        sm:grid-cols-2
        gap-4
        flex flex-wrap
        justify-center
        content-center
      "
        >
            <div class="w-96 h-64 utility">
                <div
                    class="h-2/6 flex flex-wrap justify-center content-center p-5"
                >
                    <div
                        class="
              w-10
              h-10
              citrus
              flex flex-wrap
              justify-center
              content-center
            "
                    >
                        <img src="@/assets/images/nft/Vector.svg" class="w-6" />
                    </div>
                </div>
                <div class="h-2/6">
                    <p><b>PoW 挖矿</b></p>
                    <p>大胆参与SeeDAO各公会，<br />通过“工作量证明”挖掘SGN</p>
                </div>
                <div
                    class="h-2/6 p-2 border-t-2 border-gray-700 bg-gray-200 bottom"
                >
                    <div class="flex justify-center">
                        <a
                            href="https://discord.com/channels/841189467128594442/910851803707490374"
                            class="
                flex
                justify-center
                items-center
                w-36
                button
                sm:w-48 sm:mb-0
                text-lg
                border border-indigo-200
                dark:border-ternary-dark
                py-2.5
                sm:py-3
                shadow-lg
                rounded-lg
                bg-indigo-50
                focus:ring-1 focus:ring-indigo-900
                hover:bg-indigo-500
                text-gray-900
                hover:text-white
                duration-500
              "
                        >
                            <span
                                class="text-sm sm:text-lg font-general-medium duration-100"
                                >如何成为？
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="w-96 h-64 utility">
                <div
                    class="h-2/6 flex flex-wrap justify-center content-center p-5"
                >
                    <div
                        class="
              w-10
              h-10
              citrus
              flex flex-wrap
              justify-center
              content-center
            "
                    >
                        <img src="@/assets/images/nft/Vector.svg" class="w-6" />
                    </div>
                </div>
                <div class="h-2/6">
                    <p class="p-4">直接从二级市场购买</p>
                </div>
                <div
                    class="h-2/6 p-2 border-t-2 border-gray-700 bg-gray-200 bottom"
                >
                    <div class="flex justify-center">
                        <a
                            href="https://opensea.io/collection/seedaogenesis"
                            class="
                flex
                justify-center
                items-center
                w-36
                button
                sm:w-48 sm:mb-0
                text-lg
                border border-indigo-200
                dark:border-ternary-dark
                py-2.5
                sm:py-3
                shadow-lg
                rounded-lg
                bg-indigo-50
                focus:ring-1 focus:ring-indigo-900
                hover:bg-indigo-500
                text-gray-900
                hover:text-white
                duration-500
              "
                        >
                            <span
                                class="text-sm sm:text-lg font-general-medium duration-100"
                                >去购买
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.titlebg {
    background-image: url("~@/assets/images/titlebg.svg");
    background-size: 75% 80%;
}
.titlefont {
    font-family: "DM Sans";
    color: #170f49;
}
.utility {
    /* Off White */
    background: #fafafc;
    /* Off Black */

    border: 2px solid #1d1d1f;
    box-sizing: border-box;
    /* Drop Shadow / Normal */

    box-shadow: 0px 4px 0px #000000;
    border-radius: 16px;
    align-self: center;
    justify-self: center;
}
.iconbackage {
    border: 1px solid #171717;
    box-sizing: border-box;
    border-radius: 15px;
}
.iconbackage.a {
    background: #ffa1b0;
}
.iconbackage.b {
    background: #cbc7ff;
}
.iconbackage.c {
    background: #afffd9;
}
.citrus {
    /* Citrus Wasp */
    background: #f3c522;
    border-radius: 40px;
}
.button {
    background: #f3c522;
    border-radius: 16px;
}
.bottom {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
</style>
