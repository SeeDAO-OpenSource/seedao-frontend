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
        <div class="w-full p-10">
            <img src="@/assets/images/nft/map.png" class="w-5/6" />
        </div>
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
            <div class="w-72 h-72 utility">
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
            <div class="w-72 h-72 utility">
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
            <div class="w-72 h-72 utility">
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
            <div class="w-64 h-64 utility">
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
            <div class="w-64 h-64 utility">
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
