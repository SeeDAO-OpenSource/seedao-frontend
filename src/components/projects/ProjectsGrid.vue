<script>
import feather from 'feather-icons';
import ProjectSingle from './ProjectSingle.vue';
import ProjectCoreInfo from './ProjectCoreInfo.vue'
import ProjectNoteInfo from './ProjectNoteInfo.vue'
import projects from '../../data/projects';

export default {
	components: { 
		ProjectSingle,
		ProjectCoreInfo,
		ProjectNoteInfo
	},
	data: () => {
		return {
			projects,
			projectsHeading: 'Projects Portfolio',
			selectedCategory: '',
			searchProject: '',
		};
	},
	computed: {
		// Get the filtered projects
		filteredProjects() {
			if (this.selectedCategory) {
				return this.filterProjectsByCategory();
			} else if (this.searchProject) {
				return this.filterProjectsBySearch();
			}
			return this.projects;
		},
	},
	methods: {
		// Filter projects by category
		filterProjectsByCategory() {
			return this.projects.filter((item) => {
				let category =
					item.category.charAt(0).toUpperCase() +
					item.category.slice(1);
				console.log(category);
				return category.includes(this.selectedCategory);
			});
		},
		// Filter projects by title search
		filterProjectsBySearch() {
			let project = new RegExp(this.searchProject, 'i');
			return this.projects.filter((el) => el.title.match(project));
		},
	},
	mounted() {
		feather.replace();
	},
};
</script>

<template>
	<!-- Projects grid -->
	<section>
		<!-- Projects grid title -->
	<div>
		<div class="relative bg-fuchsia-200 p-6 w-80 m-auto">
			<div
				class="titlebg bg-no-repeat bg-left h-36"
			>
				<div class="absolute bottom-10 -right-10 titlefont font-general-semibold">
					<p class="text-5xl font-black pb-2">在SeeDAO</p>
				</div>
			</div>
		</div>
	</div>
		<!-- Projects grid -->
		<section
			class="flex flex-col sm:justify-between sm:flex-row mt-12 sm:mt-10"
		>
			<ProjectSingle />
		</section>
		<!-- Projects Honor Roll Start-->
		<!-- CoreInfo -->
		<div>
			<div class="relative bg-fuchsia-200 p-6 w-80 m-auto">
				<div
					class="titlebg bg-no-repeat bg-left h-36"
				>
					<div class="absolute bottom-10 right-11 titlefont font-general-semibold">
						<p class="text-5xl font-black pb-2">高光板</p>
					</div>
				</div>
			</div>
		</div>
			<ProjectCoreInfo />
		<!-- CoreInfo -->
		<section
			class="flex flex-col sm:justify-between sm:flex-row mt-12 sm:mt-10"
		>
			<ProjectNoteInfo />
		</section>
		<!-- Projects Honor Roll End-->
		<!-- Guild -->
		<div>
			<div class="relative bg-fuchsia-200 p-6 w-80 m-auto">
				<div
					class="titlebg bg-no-repeat bg-left h-36"
				>
					<div class="absolute bottom-10 right-11 titlefont font-general-semibold">
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
				<div
					class="titlebg bg-no-repeat bg-left h-36"
				>
					<div class="absolute bottom-10 -right-1 titlefont font-general-semibold">
						<p class="text-5xl font-black pb-2">孵化项目</p>
					</div>
				</div>
			</div>
		</div>
		<section>
			<ProjectIncubation />
		</section>
	</section>

</template>

<style scoped>
.titlebg{
    background-image: url('~@/assets/images/titlebg.svg');
		background-size: 75% 80%;
}
.titlefont{
	font-family: 'DM Sans';
	color: #170F49;
}
</style>
