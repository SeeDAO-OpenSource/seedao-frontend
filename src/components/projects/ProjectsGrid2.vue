<script>
import feather from "feather-icons";
import ProjectGuild from "./ProjectGuild.vue";
import ProjectIncubation from "./ProjectIncubation.vue";
import IncubatinProjects from "@/data/incubation.js";

export default {
    name: "ProjectsGrid2",
    components: {
        ProjectGuild,
        ProjectIncubation,
    },
    data: () => {
        return {
            projectsHeading: "Projects Portfolio",
            selectedCategory: "",
            searchProject: "",
            incubatinProjects: IncubatinProjects,
        };
    },
    computed: {},
    methods: {},
    mounted() {
        feather.replace();
    },
};
</script>

<template>
    <section>
        <!-- Guild -->
        <div>
            <div class="relative bg-fuchsia-200 p-6 w-80 m-auto">
                <div class="titlebg bg-no-repeat bg-left h-36">
                    <div
                        class="absolute bottom-10 right-11 titlefont font-general-semibold"
                    >
                        <p class="text-5xl font-black pb-2">公会</p>
                    </div>
                </div>
            </div>
        </div>
        <section>
            <ProjectGuild />
        </section>
        <div>
            <div class="relative bg-fuchsia-200 p-6 w-80 m-auto">
                <div class="titlebg bg-no-repeat bg-left h-36">
                    <div
                        class="absolute bottom-10 -right-1 titlefont font-general-semibold"
                    >
                        <p class="text-5xl font-black pb-2">孵化项目</p>
                    </div>
                </div>
            </div>
        </div>
        <section v-for="incubatin of incubatinProjects" :key="incubatin.id">
            <ProjectIncubation :project="incubatin" />
        </section>
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
</style>
