<script>
import GUILDS from "@/data/guilds.js";
export default {
    props: ["project"],
    data() {
        return {
            guilds: GUILDS,
        };
    },
    methods: {
        handleJump(url) {
            window.open(url);
        },
    },
};
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-4">
        <div class="p-5" v-for="guildItem of guilds" :key="guildItem.id">
            <div class="flex flex-wrap justify-center content-center">
                <div
                    class="h-24 w-24 flex flex-wrap justify-center box-content backRound"
                >
                    <img :src="guildItem.img" class="w-16" />
                </div>
            </div>
            <p
                class="pt-5 text-link"
                @click.prevent="handleJump(guildItem.notion)"
            >
                {{ guildItem.name }}
            </p>
        </div>
    </div>
</template>

<style lang="css" scoped>
.infoItem {
    background: #fafafc;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 15px;
}
.backRound {
    border-radius: 80px;
    background: #ffffff;
    border: 2px solid #5a5a5a;
    box-sizing: border-box;
    box-shadow: 0px 3px 0px #626262;
}
.text-link:hover {
    color: #0088ff;
    text-decoration: underline;
}
</style>
