<script>
import AppBanner from '@/components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid.vue';
import ProjectAreaInfo from '../components/projects/ProjectAreaInfo.vue';
import ProjectsGrid2 from '../components/projects/ProjectsGrid2.vue';

export default {
	name: 'Home',
	components: {
		AppBanner,
		ProjectsGrid,
		ProjectAreaInfo,
		ProjectsGrid2,
	},
};
</script>

<template>
	<div class="container mx-auto">
		<!-- Banner -->
		<AppBanner class="mb-5 sm:mb-8" />

		<!-- Projects -->
		<ProjectsGrid />
	</div>
		<!-- AreaInfo -->
		<section
			class="flex flex-col sm:justify-between sm:flex-row mt-12 sm:mt-10"
		>
			<ProjectAreaInfo />
		</section>
	<div class="container mx-auto">
		<!-- Projects -->
		<ProjectsGrid2 />
	</div>
</template>

<style scoped></style>
