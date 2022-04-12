<script>
export default {
	props: ['project'],
};
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-4">
    <div class="p-5">
      <div class="flex flex-wrap justify-center content-center">
        <div class="h-24 w-24 flex flex-wrap justify-center box-content backRound">
          <img
            src="@/assets/images/icon/TV.svg"
            class="w-16"
          />
        </div>
      </div>
      <p class="pt-5">开发者公会</p>
    </div>
    <div class="p-5">
      <div class="flex flex-wrap justify-center content-center">
        <div class="h-24 w-24 flex flex-wrap justify-center box-content backRound">
          <img
            src="@/assets/images/icon/Camera.svg"
            class="w-16"
          />
        </div>
      </div>
      <p class="pt-5">宣传公会</p>
    </div>
    <div class="p-5">
      <div class="flex flex-wrap justify-center content-center">
        <div class="h-24 w-24 flex flex-wrap justify-center box-content backRound">
          <img
            src="@/assets/images/icon/Remove_playlist.svg"
            class="w-16"
          />
        </div>
      </div>
      <p class="pt-5">元宇宙建筑师公会</p>
    </div>
    <div class="p-5">
      <div class="flex flex-wrap justify-center content-center">
        <div class="h-24 w-24 flex flex-wrap justify-center box-content backRound">
          <img
            src="@/assets/images/icon/Knife.svg"
            class="w-16"
          />
        </div>
      </div>
      <p class="pt-5">产品公会</p>
    </div>
    <div class="p-5">
      <div class="flex flex-wrap justify-center content-center">
        <div class="h-24 w-24 flex flex-wrap justify-center box-content backRound">
          <img
            src="@/assets/images/icon/Target.svg"
            class="w-16"
          />
        </div>
      </div>
      <p class="pt-5">设计者公会</p>
    </div>
    <div class="p-5">
      <div class="flex flex-wrap justify-center content-center">
        <div class="h-24 w-24 flex flex-wrap justify-center box-content backRound">
          <img
            src="@/assets/images/icon/Messaging.svg"
            class="w-20"
          />
        </div>
      </div>
      <p class="pt-5">运营公会</p>
    </div>
    <div class="p-5">
      <div class="flex flex-wrap justify-center content-center">
        <div class="h-24 w-24 flex flex-wrap justify-center box-content backRound">
          <img
            src="@/assets/images/icon/Files.svg"
            class="w-16"
          />
        </div>
      </div>
      <p class="pt-5">翻译者公会</p>
    </div>
    <div class="p-5">
      <div class="flex flex-wrap justify-center content-center">
        <div class="h-24 w-24 flex flex-wrap justify-center box-content backRound">
          <img
            src="@/assets/images/icon/Router.svg"
            class="w-16"
          />
        </div>
      </div>
      <p class="pt-5">投研公会</p>
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
		background: #FFFFFF;
    border: 2px solid #5A5A5A;
    box-sizing: border-box;
    box-shadow: 0px 3px 0px #626262;
	}
</style>
