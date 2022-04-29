<script>
export default {
    props: ["project"],
};
</script>

<template>
    <section
        class="flex flex-col sm:justify-between sm:flex-row mt-12 sm:mt-10"
    >
        <!-- Banner left contents -->
        <div class="w-full md:w-1/2 text-left mt-10 mr-10  flex flex-col content-center">
            <div
                class="font-general-semibold text-7xl text-justify
				md:text-7xl xl:text-7xl text-center
				sm:text-left text-ternary-dark dark:text-primary-light highlight"
            >
                <p>{{ project.title }}</p>
            </div>
            <p
                class="font-extrabold font-general-medium mt-10 text-lg
				sm:text-xl
				xl:text-xl text-center
				sm:text-left text-gray-300"
            >
                <a :href="project.link">
                    {{ project.description }}
                </a>
            </p>
            <div class="flex justify-center sm:block">
                <a
                    :href="project.link"
                    class="flex justify-center items-center w-36 startButton sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-900 hover:text-white duration-500"
                    aria-label="Download Resume"
                >
                    <span
                        class="text-sm sm:text-lg font-general-medium duration-100"
                        >前往观看
                    </span>
                    <i
                        data-feather="chevron-right"
                        class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
                    ></i>
                </a>
            </div>
            <!-- <div class="flex justify-center mt-10 sm:block">
                <a :href="project.link">
                    <span>
                        {{ project.link }}
                    </span>
                </a>
            </div> -->
        </div>

        <!-- Banner right illustration -->
        <div
            class="w-full
			flex flex-wrap  justify-center content-center
			md:w-1/2 text-right float-right"
        >
            <img :src="project.img" alt="project.title" />
            <!-- <img
                v-if="theme === 'light'"
                src="@/assets/images/ShanghaiDAO.svg"
                alt="Developer"
            />
            <img v-else src="@/assets/images/ShanghaiDAO.svg" alt="Developer" /> -->
        </div>
    </section>
</template>

<style lang="css" scoped>
.startButton {
    width: 150px;
    height: 40px;
    background: #fafafc;
    border: 2px solid #1d1d1f;
    box-sizing: border-box;
    box-shadow: 0px 4px 0px #000000;
    border-radius: 16px;
}
</style>
