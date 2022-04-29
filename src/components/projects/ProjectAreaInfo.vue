<script>
import feather from "feather-icons";
import { mapGetters, mapActions } from "vuex";
import { GET_HIGHLIGHTS, FETCH_HIGHLIGHTS } from "@/store/discordbot.module";

export default {
    name: "ProjectAreaInfo",
    data() {
        return {
            theme: "",
            areainfos: [
                {
                    text:
                        "随着最近 SeeDAO 的成员越来越多，我认为内部需要更多的信息聚合和输出，让DAO内的人协作得更顺滑。所以DeSchool中一个很重要的部分就是Learn。虽然每个人知识水平不同，但大家可以选择学习不同阶段的知识，在实践中晋升和学习。并且你在平台上的所有信息、贡献、学习的课程、身份都登记在链上。",
                    author: "Vera_sir           ",
                    date: "2022/4/8",
                },
                {
                    text:
                        "DeSchool V1 (Learn+Bounty+Identity) 作为DeSchool产品的基础框架将会在下周上线完成。下一步计划除了修改bug、提升用户体验以外，还需要作为早期builder的我们决定V2要聚焦解决的问题。希望各位builder以及所有对deschool感兴趣的小伙伴们一起参与到这个讨论里，你对于未来web3教育、工作、个人身份等看法将会对deschool的产品基因有深远的影响。讨论链接（需要notion权限的小伙伴可以联系我） https://rowan-mollusk-a75.notion.site/DeSchool-f4fbfa2c1b334719a0195e2e595e6300感谢 @NEO @Kyle37 @Ricky Wang 的精彩发言，期待更多伙伴加入一起讨论。",
                    author: "kc",
                    date: "2022/4/6",
                },
                {
                    text:
                        "北京时间4月8日（本周五）晚八点，Dework创始人将来到SeeDAO Discord dework-product-chat频道进行一场产品交流会。Dework是一款集合web3产品管理工具、任务发布平台以及web3领英功能的强大产品，在Dework中可实现链上贡献记录，目前拥有一批优秀的DAO入驻其中。",
                    author: "BeiLin            ",
                    date: "2022/4/6",
                },
                {
                    text:
                        "大家好，很高兴DeSchool的Alpha终于和大家见面。DeSchool是SeeDAO以DAO的方式孵化出的第一个产品，现阶段的目标是成为Web3的Coursera+LinkedIn+Fiverr。",
                    author: "kc",
                    date: "2022/4/2",
                },
                {
                    text:
                        "家人们好~ 产品工会的周会会在今晚八点在Seedao的discrod频道举行。欢迎大家来旁听，互动，seedao and chill",
                    author: "Will Jiang        ",
                    date: "2022/3/9",
                },
            ],
        };
    },
    computed: {
        ...mapGetters([GET_HIGHLIGHTS]),
        ...mapActions([FETCH_HIGHLIGHTS]),
    },
    created() {
        this.theme = localStorage.getItem("theme") || "light";
    },
    mounted() {
        feather.replace();
        this.theme = localStorage.getItem("theme") || "light";
        this.$store.dispatch(FETCH_HIGHLIGHTS);
    },
    updated() {
        feather.replace();
    },
    methods: {
        jumpout(link) {
            window.open(link);
        },
    },
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
                        href="https://discord.com/channels/841189467128594442/926102352438640661"
                        class="flex items-center"
                        aria-label="See all"
                    >
                        <span
                            class="mr-5 text-sm sm:text-lg font-general-medium duration-100"
                            >See all
                        </span>
                        <div
                            class="h-10 w-10 flex flex-wrap justify-center content-center backRound"
                        >
                            <i data-feather="chevron-right"></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="area sm:w-full md:w-4/5">
        <div class="overflow-x-auto flex p-4">
            <div
                v-for="info in getHighlights"
                :key="info.id"
                :value="info"
                class="areainfo flex-none w-60 h-80 m-1"
            >
                <div
                    class="h-2/3 flex flex-wrap justify-start content-center text-left"
                >
                    <p v-if="info.title.length > 65" class="p-4 font-semibold w-full word-break">
                        {{ info.title.slice(0, 65) }}...
                    </p>
                    <p v-else class="p-4 font-semibold w-full word-break">
                        {{ info.title }}
                    </p>
                </div>
                <div class="h-1/3 flex p-4">
                    <div
                        class="w-full p-1 flex flex-col justify-start content-center"
                    >
                        <div class="flex flex-row flex-wrap justify-start">
                            <img width="32" :src="info.author.iconUrl" />
                            <div
                                class="font-semibold word-overflow"
                                style="max-width:180px"
                            >
                                {{ info.author.name }}
                            </div>
                        </div>
                        <div
                            class="font-semibold text-gray-400 flex justify-end"
                        >
                            &nbsp;{{
                                new Date(info.timestamp * 1000).toLocaleString()
                            }}
                        </div>
                        <div class="flex item-center justify-end">
                            <span @click="jumpout(info.link)" class="more"
                                >去discord查看更多</span
                            >
                        </div>
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
.area {
    background: #b7d2ff;
}
.areainfo {
    background: #ffffff;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 8px 0px #000000;
    border-radius: 15px;
}
.backRound {
    border-radius: 80px;
    background: #ffffff;
}
.c {
    border-radius: 80px;
    background: #b7d2ff;
}
.word-overflow {
    white-space: nowrap;
    word-break: normal;
    text-overflow: ellipsis;
    overflow: hidden;
}
.word-break {
    word-break: break-all;
}
.more {
    color: #359bd4;
}
.more:hover {
    cursor: pointer;
    color: #1883c1;
    text-decoration: underline;
}
</style>
