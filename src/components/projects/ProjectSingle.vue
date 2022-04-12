<script>
export default {
	props: ['project'],
};
</script>

<template>
	<div class="w-full w-1/2">
		<div class="relative p-6 w-48">
			<div
				class="h-4 bg-opacity-50"
				style="background-color: #FF7C7580;"
			>
				<div class="absolute top-1 left-9 font-general-semibold">
					<p class="text-2xl font-black">你可以做</p>
				</div>
			</div>
		</div>
		<div class="h-20 w-10/12 m-8 flex infoItem">
			<div class="flex flex-wrap justify-center content-center w-1/5">
				<div class="h-16 w-16 flex flex-wrap justify-center box-content backRound ucat">
					<img
						src="@/assets/images/icon/Here.svg"
						class="w-8"
					/>
				</div>
			</div>
			<div class="w-4/5 flex flex-wrap justify-left content-center font-black">
				<p>1.加入兴趣小组，找到志同道合的小伙伴！</p>
			</div>
		</div>
		<div class="h-20 w-10/12 m-8 flex infoItem">
			<div class="flex flex-wrap justify-center content-center w-1/5">
				<div class="h-16 w-16 flex flex-wrap justify-center box-content backRound ucat">
					<img
						src="@/assets/images/icon/Love.svg"
						class="w-10"
					/>
				</div>
			</div>
			<div class="w-4/5 flex flex-wrap justify-items-start content-center text-left  font-black">
				<p>2.加入SeeDAO公会，发起项目，完善社区生态，参与社区共建 ！</p>
			</div>
		</div>
		<div class="h-20 w-10/12 m-8 flex infoItem">
			<div class="flex flex-wrap justify-center content-center w-1/5">
				<div class="h-16 w-16 flex flex-wrap justify-center box-content backRound ucat">
					<img
						src="@/assets/images/icon/Idea.svg"
						class="w-8"
					/>
				</div>
			</div>
			<div class="w-4/5 flex flex-wrap justify-left content-center font-black">
				<p>3.自由发布活动，有趣的灵魂终将相遇！</p>
			</div>
		</div>
	</div>
	<div class="w-full w-1/2">
		<div class="relative p-6 w-48">
			<div
				class="h-4 bg-opacity-50"
				style="background-color: #F29D38;"
			>
				<div class="absolute top-1 left-9 font-general-semibold">
					<p class="text-2xl font-black">你能获得</p>
				</div>
			</div>
		</div>
		<div class="h-20 w-10/12 m-8 flex infoItem">
			<div class="flex flex-wrap justify-center content-center w-1/5">
				<div class="h-16 w-16 flex flex-wrap justify-center box-content backRound uget" >
					<img
						src="@/assets/images/icon/thumbup.svg"
						class="w-10"
					/>
				</div>
			</div>
			<div class="w-4/5 flex flex-wrap justify-left content-center font-black">
				<p>1.获得指导！</p>
			</div>
		</div>
		<div class="h-20 w-10/12 m-8 flex infoItem">
			<div class="flex flex-wrap justify-center content-center w-1/5">
				<div class="h-16 w-16 flex flex-wrap justify-center box-content backRound uget" >
					<img
						src="@/assets/images/icon/Email.svg"
						class="w-15"
					/>
				</div>
			</div>
			<div class="w-4/5 flex flex-wrap justify-items-start content-center text-left  font-black">
				<p>2.获得资助！</p>
			</div>
		</div>
		<div class="h-20 w-10/12 m-8 flex infoItem">
			<div class="flex flex-wrap justify-center content-center w-1/5">
				<div class="h-16 w-16 flex flex-wrap justify-center box-content backRound uget" >
					<img
						src="@/assets/images/icon/Smartphone.svg"
						class="w-10"
					/>
				</div>
			</div>
			<div class="w-4/5 flex flex-wrap justify-left content-center font-black">
				<p>3.获得成长的空间！</p>
			</div>
		</div>
	</div>
</template>

<style lang="css" scoped>
	.infoItem{
		background: #FAFAFC;
		border: 1px solid #000000;
		box-sizing: border-box;
		border-radius: 15px;
	}
	.backRound{
		border-radius: 80px;
	}
	.backRound.ucat{
		background: #FFBDBA;
	}
	.backRound.uget{
		background: #F8CE9B;
	}
</style>
