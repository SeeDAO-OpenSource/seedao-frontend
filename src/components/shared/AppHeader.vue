<script>
import { watch } from "vue";
import { useI18n } from "vue-i18n";

import ThemeSwitcher from "../ThemeSwitcher";
import HireMeModal from "../HireMeModal.vue";
import feather from "feather-icons";
import AppHeaderLinks from "./AppHeaderLinks.vue";
import Button from "../reusable/Button.vue";

import VueMetamask from "vue-metamask";

// Vuex
import { mapGetters, mapActions } from "vuex";
import {
  WALLET_ADDRESS,
  GET_WALLET_SHORT_ADDRESS,
  CONNECT_WALLET,
} from "@/store/wallet.module";

export default {
  components: {
    ThemeSwitcher,
    HireMeModal,
    AppHeaderLinks,
    Button,
    VueMetamask,
  },
  setup() {
    const { t, locale } = useI18n();
    watch(locale, (newlocale) => {
      localStorage.setItem("locale", newlocale);
    });
    return {
      t,
      locale,
    };
  },
  data() {
    return {
      isConnecting: false,
      isOpen: false,
      theme: "light",
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
    };
  },

  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
     feather.replace();
    this.theme = localStorage.getItem("theme") || "light";
    if (this.isConnected()) {
      this.isConnecting = true;
    }
  },
  methods: {
    isConnected() {
      const address = localStorage.getItem(WALLET_ADDRESS);
      if (address === undefined || address === "") {
        return false;
      } else return true;
    },
    connect() {
      this.isConnecting = true;
    },
    setWallet(data) {
      this.isConnecting = false;
      this.$store.dispatch(CONNECT_WALLET, data);
    },
    updateTheme(theme) {
      this.theme = theme;
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
  updated() {
    feather.replace();
  },
  computed: {
    ...mapGetters([GET_WALLET_SHORT_ADDRESS]),
    ...mapActions([CONNECT_WALLET]),
  },
};
</script>

<template>
  <nav id="nav" class="sm:container sm:mx-auto px-0">
    <!-- Header start -->
    <div
      class="
        z-10
        max-w-screen-lg
        xl:max-w-screen-xl
        block
        sm:flex sm:justify-between sm:items-center
      "
    >
      <!-- Header menu links and small screen hamburger menu -->
      <div class="flex justify-between items-center px-4 sm:px-0">
        <!-- Header logos -->
        <div>
          <router-link to="/"
            ><img
              v-if="theme === 'light'"
              src="@/assets/images/seedao/logoSymbol.png"
              class="w-12"
              alt="Dark Logo"
            />
            <img
              v-else
              src="@/assets/images/seedao/logoSymbol.png"
              class="w-12"
              alt="Light Logo"
            />
          </router-link>
        </div>
        <!-- Theme switcher small screen -->
        <theme-switcher
          :theme="theme"
          @themeChanged="updateTheme"
          class="
            block
            sm:hidden
            bg-ternary-light
            dark:bg-ternary-dark
            hover:bg-hover-light
            dark:hover:bg-hover-dark
            hover:shadow-sm
            px-2.5
            py-2
            rounded-lg
          "
        />

        <!-- Small screen hamburger menu -->
        <div class="sm:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="focus:outline-none"
            aria-label="Hamburger Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="
                h-7
                w-7
                fill-current
                text-secondary-dark
                dark:text-ternary-light
              "
            >
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                clip-rule="evenodd"
              ></path>
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Header links -->
      <AppHeaderLinks :showModal="showModal" :isOpen="isOpen" />
      <!-- Header right section buttons -->
      <div
        class="hidden sm:flex justify-between items-center flex-col md:flex-row"
      >
      <div
          class="
            mr-5
            h-10
            ml-8
            bg-primary-light
            dark:bg-ternary-dark
            px-3
            py-2
            shadow-sm
            rounded-xl
            cursor-pointer
          "
           v-if="isConnected()"
      >
        <router-link
          to="/about">
          <i data-feather="user"></i>
        </router-link>
      </div>
        <!-- Hire me button -->
        <div v-if="!isConnected()" class="hidden md:block">
          <Button
            @click="connect()"
            :title="t('header.connect-wallet')"
            class="
              text-md
              font-general-medium
              hover:bg-gray-50
              text-black
              shadow-lgshadow-inner
              rounded-lg
              px-5
              py-2.5
              duration-300
            "
            :aria-label="t('header.connect-wallet')"
          />
        </div>
        <div v-else class="hidden md:block">
          <Button
            :title="getWalletShortAddress"
            class="
              text-md
              font-general-medium
              hover:bg-gray-50
              text-black
              shadow-lg
              rounded-lg
              px-5
              py-2.5
              duration-300
            "
            :aria-label="getWalletShortAddress"
          />
        </div>
        <!-- <Web3ModalVue
          ref="web3modal"
          :theme="theme"
          :provider-options="providerOptions"
          cache-provider
        /> -->

        <!-- Theme switcher large screen -->
        <theme-switcher
          :theme="theme"
          @themeChanged="updateTheme"
          class="
            ml-8
            bg-primary-light
            dark:bg-ternary-dark
            px-3
            py-2
            shadow-sm
            rounded-xl
            cursor-pointer
          "
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select v-model="locale">
          <option value="zh-CN">中文</option>
          <option value="en-US">English</option>
        </select>
      </div>
    </div>

    <!-- Hire me modal -->
    <HireMeModal
      :showModal="showModal"
      :modal="modal"
      :categories="categories"
      aria-modal="Hire Me Modal"
    />

    <vue-metamask v-if="isConnecting" userMessage="msg" @onComplete="setWallet">
    </vue-metamask>
  </nav>
</template>

<style scoped>
#nav a.router-link-exact-active {
  @apply text-indigo-700;
  @apply dark:text-indigo-400;
  @apply font-medium;
}
</style>