<script>
import SGNS from "../data/sgn.js";
import SGNCard from "../components/hall/SGNCard.vue";
// import debounce from "lodash.debounce";
export default {
    name: "Hall",
    components: {
        SGNCard,
    },
    data: () => {
        return {
            sgnObjs: SGNS.slice(),
            total: SGNS.length,
            keywords: "",
        };
    },
    methods: {
        handleSearch() {
            this.sgnObjs = [];
            let keywords = this.keywords;
            if (!keywords && !keywords.trim()) {
                this.sgnObjs = SGNS.slice();
            } else {
                this.sgnObjs = SGNS.filter((item) =>
                    JSON.stringify(item).includes(keywords)
                );
            }
        },
    },
};
</script>

<template>
    <div class="grid grid-flow-row auto-rows-max">
        <!-- banner -->
        <div
            class="hall-header flex flex-row items-center justify-center relative"
        >
            <img
                class="absolute fyb-bg"
                src="../assets/images/fyb-bg.png"
                width="540"
            />
            <h3 class="flex items-center titlefont">SeeDAO 风云榜</h3>
        </div>
        <!-- filter -->
        <div
            class="flex flex-row items-center justify-between relative filter-container"
        >
            <div class="titlefont">累计MINT：{{ total }}</div>
            <div class="flex search-container">
                <input
                    class="keywords-input"
                    type="text"
                    placeholder="请输入公会/项目/Discord ID等关键词"
                    v-model="keywords"
                    @keyup.enter="handleSearch"
                />
                <button
                    @click.prevent="handleSearch()"
                    class="flex justify-center items-center titleButton duration-100"
                >
                    搜索
                </button>
            </div>
        </div>
        <!-- cards -->
        <div
            class="cards-container grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:gap-0 lg:gap-8 xl:gap-10"
        >
            <SGNCard v-for="sgn of sgnObjs" :key="sgn.tokenId" :sgnObj="sgn" />
        </div>
    </div>
</template>

<style lang="css" scoped>
.hall-header {
    width: 100%;
    height: 260px;
}
.hall-header h3 {
    font-weight: 700;
    font-size: 50px;
    line-height: 62px;
}
.fyb-bg {
    z-index: -1;
}
.titlefont {
    font-family: "DM Sans";
    color: #170f49;
}
.titleButton {
    width: 140px;
    height: 45px;
    background: #fafafc;
    border: 2px solid #1d1d1f;
    box-sizing: border-box;
    box-shadow: 0 4px 0 #000;
    border-radius: 16px;
    margin-left: 23px;
}
.filter-container {
    padding: 20px 100px;
    height: 50px;
    margin: 30px 0px;
}
.filter-container .titlefont {
    font-weight: 700;
}
.search-container {
    height: 50px;
}
.keywords-input {
    background: #fafafc;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 20px;
}
.cards-container {
    margin: 0px 100px;
}
@media screen and (max-width: 375px) {
    .cards-container {
        margin: 0px 10px;
    }
}
@media screen and (max-width: 640px) {
    .cards-container {
        margin: 0px 30px;
    }
    .filter-container {
        padding: 20px;
        height: 140px;
        flex-direction: column;
    }
    .filter-container .titlefont {
        width: 100%;
        display: flex;
        align-content: center;
        justify-content: flex-start;
    }
    .search-container {
        display: flex;
        align-content: center;
    }
}
</style>
