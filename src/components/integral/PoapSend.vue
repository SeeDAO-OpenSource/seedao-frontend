<script>
//import PoapSelect from './PoapSelect.vue';
import POAPS from "../../data/poaps";
export default {
    name: "PoapSend",
		components: {
			//PoapSelect
		},
		beforeMount:() =>{
			POAPS.forEach(p =>{ p.select = false})
		},
		computed: {
			filteredList() {
				console.log(this.poapsobj)
				return this.poapsobj.filter(post => {
					return post.name.toLowerCase().includes(this.search.toLowerCase())
				})
			}
		},
    data: () => {
        return {
					submitdata:{
						union:'',
						eventName:'',
						address:'',
					},
					search: '',
					poapsobj:POAPS,
					unions:[
						{
							"Id":'U1',
							"Name":'翻译公会-translation',
						},
						{
							"Id":'U2',
							"Name":'宣传公会-publicity ',
						},
						{
							"Id":'U3',
							"Name":'产品公会-product',
						},
						{
							"Id":'U4',
							"Name":'运营公会-operation',
						},
						{
							"Id":'U5',
							"Name":'开发公会-development',
						},
						{
							"Id":'U6',
							"Name":'建筑公会-construction',
						},
						{
							"Id":'U7',
							"Name":'投研公会-insightandresearch',
						},
						{
							"Id":'U8',
							"Name":'设计公会-design ',
						},
						{
							"Id":'U9',
							"Name":'艺术公会-art ',
						},
						{
							"Id":'U10',
							"Name":"nft-club",
						}
						
					]
        };
    },
		methods: {
			submit:function(){
				//新增的地方
			},
			setSelect: function(c){
				let t = this.poapsobj.filter(post => post.select == true)
				t.forEach(p => p.select = p.select = false)
				c.select = (!c.select) ? true : false
				if(t.length > 0){
					const p = JSON.parse(
						JSON.stringify(t[0])
					);
					if(c.id == p.id)
						c.select = false
				}
			}
		}
};
</script>

<template>
	<div class="w-full md:w-1/2">
		<div
			class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
		>
			<p
				class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"
			>
				发放POAP
			</p>
			<form action="#" class="font-general-regular space-y-7">
        <div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="subject"
						>工会</label
					>
					<select
						:name="select"
						:id="select"
						class="font-general-medium
								px-4
								py-2
								border-1 border-gray-200
								dark:border-secondary-dark
								rounded-lg
								text-sm
								sm:text-md
								bg-secondary-light
								dark:bg-ternary-dark
								text-primary-dark
								dark:text-ternary-light
							"
					>
						<option value class="text-sm sm:text-md">请选择...</option>
						<option
							v-for="union in unions"
							:key="union"
							:value="union.Id"
							class="sm:text-md"
						>
							{{ union.Name }}
						</option>
					</select>
        </div>
				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="name"
						>事件名稱</label
					>
					<input
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="name"
						name="name"
						type="text"
						required=""
						placeholder="Event Names"
						aria-label="EventName"
						v-model="submitdata.eventName"
					/>
				</div>
				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="message"
						>发送钱包</label
					>
					<textarea
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="message"
						name="message"
						cols="14"
						rows="6"
						v-model="submitdata.address"
						aria-label="Message"
					></textarea>
				</div>
				<div class="flex justify-end">
					<button
						class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
						type="submit"
						aria-label="Send Message"
						@click="submit"
					> 提交</button>
				</div>
			</form>
		</div>
	</div>
	<div class="w-full md:w-1/2">
		<div>
					<input
						v-model="search"
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
						id="search"
						name="search"
						type="text"
						required=""
						placeholder="Search title..."
					/>
  </div>
		<div class="overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch h-2/4">
				<div class="p-4 grid gap-4 grid-cols-3 bg-fuchsia-300 bg-stripes bg-stripes-white rounded-md">
					<div class="flex flex-col items-center justify-center" :key="c.id" v-for="c in filteredList">
						<img
							:alt="c.name"
							@click="setSelect(c)"
							class="w-64 py-5 px-10 border border-ternary-light"
							:class="{'bg-indigo-200':c.select}"
							:src="require('@/assets/images/poaps/'+c.id+'.png')"
						/>
						<span>{{c.name}}</span>
					</div>
				</div>
		</div>
	</div>
</template>

<style lang="css" scoped></style>
