<script>
import feather from "feather-icons";

export default {
  name: "NFTBanner",
  data: () => {
    return {
      theme: "",
    };
  },
  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
    feather.replace();
    this.theme = localStorage.getItem("theme") || "light";
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <section class="flex flex-col sm:justify-between sm:flex-row mt-12 sm:mt-10">
    <!-- Banner left contents -->
    <div class="w-full h-96 banner bg-cover md:bg-contain sm:bg-repeat-x">
      <div>
        <p class="text-xl font-extrabold titlefont md:text-6xl py-5">SeeDAO</p>
      </div>
      <div class="flex justify-center">
        <img src="~@/assets/images/nft/NFT_IN_BOLD.svg" class="w-72 md:w-96" />
      </div>
      <div>
        <div class="flex justify-center">
          <a
            target="_blank"
            href="https://opensea.io/collection/seedaogenesis"
            class="
              flex
              justify-center
              items-center
              w-36
              titleButton
              sm:w-48
              mt-12
              mb-6
              sm:mb-0
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
            aria-label="Download Resume"
          >
            <span class="text-sm sm:text-lg font-general-medium duration-100"
              >OPENSEA
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner {
  background-image: url("~@/assets/images/nft/Banner.svg");
}
.titlefont {
  font-family: "DM Sans";
  text-shadow: -2px 0 #5780c3, 0 2px #5780c3, 2px 0 #5780c3, 0 -2px #5780c3;
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  line-height: 62px;
}
.titleButton {
  /* Off White */

  background: #fafafc;
  /* Off Black */

  border: 2px solid #1d1d1f;
  box-sizing: border-box;
  /* Drop Shadow / Normal */

  box-shadow: 0px 4px 0px #000000;
  border-radius: 16px;
}
</style>
