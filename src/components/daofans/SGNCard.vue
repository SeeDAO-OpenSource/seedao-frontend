<script>
import SeeTag from "./tag";
export default {
    props: ["sgnObj"],
    components: {
        SeeTag,
    },
    computed: {
        guilds() {
            return this.sgnObj && this.sgnObj.guilds
                ? this.getSortArray(this.sgnObj.guilds)
                : [];
        },
        projects() {
            return this.sgnObj && this.sgnObj.projects
                ? this.getSortArray(this.sgnObj.projects, true)
                : [];
        },
    },
    methods: {
        getSortArray(array, nosort) {
            let temp;
            if (!array) {
                temp = [];
            } else if (typeof array === "string" && array.includes(",")) {
                temp = array.split(",");
            } else {
                temp = [array];
            }
            if (nosort) return temp;
            let index = temp.findIndex((a) => a === "协调委员");
            if (index !== -1) {
                temp.splice(index, 1);
                temp = ["协调委员"].concat(temp);
            }
            return temp;
        },
    },
};
</script>

<template>
    <div
        class="sgn-item flex flex-col"
        :style="sgnObj.description&&sgnObj.discordName ? '' : 'height:180px'"
    >
        <!-- 人物信息 -->
        <div class="flex card-top margin-bottom-10">
            <img
                class="w-101 h-101"
                :src="sgnObj.tokenUrl"
                :alt="sgnObj.tokenId"
            />
            <div
                :class="
                    `flex-1 flex-col justify-center content-start ${
                        sgnObj.tokenUrl ? 'margin-left-20' : ''
                    }`
                "
            >
                <div
                    class="text-black text-left text-base"
                    v-if="sgnObj.discordName"
                >
                    Discord ID
                </div>
                <div
                    class="font-semibold text-black text-left text-xl"
                    v-if="sgnObj.discordName"
                >
                    {{ sgnObj.discordName }}
                </div>
                <div class="text-black text-left text-lg">
                    SGN #{{ sgnObj.tokenId }}
                </div>
            </div>
        </div>
        <!-- 公会标签 -->
        <div class="flex flex-wrap" v-if="guilds">
            <SeeTag
                v-for="(guild, index) of guilds"
                :key="index"
                :name="guild"
                :bgColor="guild === '协调委员' ? '#FDF5D0' : '#D5F7FD'"
                ftColor="#000000"
            ></SeeTag>
        </div>
        <!-- 项目标签 -->
        <div class="flex flex-wrap margin-bottom-10" v-if="projects">
            <SeeTag
                v-for="(project, index) of projects"
                :key="index"
                :name="project"
                bgColor="#DAD8FB"
                ftColor="#000000"
            ></SeeTag>
        </div>
        <!-- 个人介绍 -->
        <div
            class="w-full flex-1 overflow-x-hidden overflow-y-auto"
            v-if="sgnObj.description"
        >
            <p class="description text-left">
                {{ sgnObj.description }}
            </p>
        </div>
    </div>
</template>

<style lang="css" scoped>
.c {
    border-radius: 80px;
    background: #fff491;
    border: 2px solid #fefefe;
    box-sizing: border-box;
    box-shadow: 0px 8px 0px #626262;
}
.sgn-item {
    width: 100%;
    height: 574px;
    padding: 30px;
    /* margin: 29px; */
    background: #ffffff;
    border: 2px solid #1d1d1f;
    box-shadow: 0px 4px 0px #000000;
    border-radius: 40px;
}
.margin-bottom-10 {
    margin-bottom: 16px;
}
.margin-left-20 {
    margin-left: 20px;
}
.description {
    font-family: "Noto Sans";
    font-size: 18px;
}
</style>

<style lang="css">
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);
    background-color: #fafafa;
    border-radius: 6px;
}

::-webkit-scrollbar {
    width: 10px;
    background-color: #ffffff;
}

::-webkit-scrollbar-thumb {
    cursor: pointer;
    border-radius: 6px;
    background-color: #dfdfdf;
}
</style>
