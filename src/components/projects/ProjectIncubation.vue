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
            <div class="flex justify-center mt-10 sm:block">
                <a :href="project.link">
                    <span>
                        {{ project.link }}
                    </span>
                </a>
            </div>
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

<style lang="css" scoped></style>
