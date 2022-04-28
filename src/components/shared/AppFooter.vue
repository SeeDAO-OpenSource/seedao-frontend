<script>
import feather from "feather-icons";
import WechatQRCodeModal from "./WechatQRCodeModal.vue";

export default {
  components: {
    WechatQRCodeModal,
  },
  data() {
    return {
      modal: false,
      categories: [
        {
          id: 1,
          value: "web",
          name: "Web Application",
        },
        {
          id: 2,
          value: "mobile",
          name: "Mobile Application",
        },
        {
          id: 3,
          value: "ui-ux",
          name: "UI/UX Design",
        },
        {
          id: 4,
          value: "branding",
          name: "Branding & Anim",
        },
      ],
      wechat: {
        id: 3,
        name: "WeChat",
        src: require("@/assets/images/WeChat.svg"),
        url: "#",
      },
      socials: [
        {
          id: 1,
          name: "Twitter",
          src: require("@/assets/images/twitter.svg"),
          url: "https://mobile.twitter.com/see_dao",
        },
        {
          id: 2,
          name: "OpenSea",
          src: require("@/assets/images/opensea.svg"),
          url: "https://opensea.io/collection/seedaogenesis",
        },
        {
          id: 3,
          name: "Discord",
          src: require("@/assets/images/Discord.svg"),
          url: "https://discord.com/invite/seedao",
        },
        {
          id: 4,
          name: "Mirror",
          src: require("@/assets/images/mirror.png"),
          url: "https://mirror.xyz/seedao.eth",
        },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {
    handleShowQRCode(id) {
      this.showQRCode = id === 3;
    },
    handleHideQRCode(id) {
      id === 3 ? (this.showQRCode = false) : "";
    },
    showModal() {
      if (this.modal) {
        // Stop screen scrolling
        document
          .getElementsByTagName("html")[0]
          .classList.remove("overflow-y-hidden");
        this.modal = false;
      } else {
        document
          .getElementsByTagName("html")[0]
          .classList.add("overflow-y-hidden");
        this.modal = true;
      }
    },
  },
};
</script>

<template>
  <div class="mx-auto" style="background: #f7f9fa">
    <div
      class="
        pt-10
        sm:pt-30
        pb-8
        mt-20
        border-t-2 border-primary-light
        dark:border-secondary-dark
      "
    >
      <!-- Footer social links -->
      <div class="relative flex flex-col justify-center items-center">
        <!-- <img src="../../assets/images/wechat-qrcode.jpg"/> -->
        <p
          class="
            text-gray-400
            font-general-semibold
            text-xl
            sm:text-2xl
            font-semibold
            dark:text-primary-light
            mb-5
          "
        >
          加入我们
        </p>
        <ul class="flex gap-4 sm:gap-8">
          <a
            v-for="social in socials"
            :key="social.id"
            :href="social.url"
            target="__blank"
            class="
              text-gray-400
              hover:text-indigo-500
              dark:hover:text-indigo-400
              cursor-pointer
              rounded-lg
              bg-gray-50
              dark:bg-ternary-dark
              hover:bg-gray-100
              shadow-sm
              p-4
              duration-500
            "
          >
            <img
              :src="social.src"
              class="w-5 sm:w-8 h-5 sm:h-8"
              :alt="social.name"
            />
          </a>
          <b-button
            class="
              text-gray-400
              hover:text-indigo-500
              dark:hover:text-indigo-400
              cursor-pointer
              rounded-lg
              bg-gray-50
              dark:bg-ternary-dark
              hover:bg-gray-100
              shadow-sm
              p-4
              duration-500
            "
            @click="showModal()"
            ><img
              :src="wechat.src"
              class="w-5 sm:w-8 h-5 sm:h-8"
              :alt="wechat.name"
          /></b-button>

          <WechatQRCodeModal
            :showModal="showModal"
            :modal="modal"
            :categories="categories"
            aria-modal="Hire Me Modal"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
