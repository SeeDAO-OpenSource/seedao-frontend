<script>
import feather from "feather-icons";
import VueMetamask from "vue-metamask";

import {
  checkIsInWhitelist,
  mintWhitelistByBatchId,
} from "@/utils/checklist.js";

import { mapGetters, mapActions } from "vuex";
import {
  WALLET_ADDRESS,
  GET_WALLET_SHORT_ADDRESS,
  CONNECT_WALLET,
} from "@/store/wallet.module";

export default {
  name: "MintBanner",
  components: {
    VueMetamask,
  },
  data: () => {
    return {
      isConnecting: false,
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
  methods: {
    connect() {
      this.isConnecting = true;
    },
    claim(data) {
      return new Promise((resolve) => {
        this.isConnecting = false;
        this.$store
          .dispatch(CONNECT_WALLET, data)
          .then((wallet) => {
            if (wallet.netID !== 1) {
              this.$notify({
                type: "error",
                text: `请将小狐狸钱包切换到以太坊主网`,
              });
              resolve();
            } else {
              const address = localStorage.getItem(WALLET_ADDRESS);
              if (address === undefined || address === "") {
                this.$notify({
                  type: "error",
                  text: "请接入您的钱包!",
                });
              } else {
                let batchId = checkIsInWhitelist(address);
                if (batchId > 0) {
                  mintWhitelistByBatchId(address, batchId)
                    .then((tx) => {
                      this.$notify({
                        type: "info",
                        duration: 300000,
                        text: "正在鑄造中...",
                      });
                      tx.wait()
                        .then((ret) => {
                          this.$notify({
                            type: "success",
                            duration: 100000,
                            text: "领取成功!",
                          });
                          resolve(ret);
                        })
                        .catch((error) => {
                          this.$notify({
                            type: "error",
                            text: `抱歉，鑄造失敗, 错误讯息: ${error}`,
                          });
                        });
                    })
                    .catch((error) => {
                      this.$notify({
                        type: "error",
                        text: `抱歉，请再尝试一次, 错误讯息: ${error}`,
                      });
                    });
                } else {
                  this.$notify({
                    type: "error",
                     duration: 10000,
                    text: `抱歉，您不在白名单中~ (当前錢包: ${address.slice(0,5)}...${address.slice(address.length-5,address.length)})`,
                  });
                }
              }
            }
          })
          .catch(() => {
            this.$notify({
              type: "error",
              text: "请接入您的钱包!",
            });
          });
      });
    },
  },
  computed: {
    ...mapGetters([GET_WALLET_SHORT_ADDRESS]),
    ...mapActions([CONNECT_WALLET]),
  },
};
</script>

<template>
  <section class="flex flex-col sm:justify-between sm:flex-row mt-12 sm:mt-10">
    <!-- Banner left contents -->
    <div class="w-full h-96 banner bg-cover md:bg-contain sm:bg-repeat-x">
      <div>
        <p class="text-xl font-extrabold titlefont md:text-6xl py-5">SeeDAO</p>
      </div>
      <div>
        <div class="flex justify-center">
          <button
            @click.prevent="connect()"
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
              >領取
            </span>
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            target="_blank"
            href="https://rowan-mollusk-a75.notion.site/SeeDAO-NFT-3ac1aeb4896541c3b41bff263835d668"
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
              >白名單地址
            </span>
          </a>
        </div>
      </div>
    </div>
    <vue-metamask v-if="isConnecting" userMessage="msg" @onComplete="claim">
    </vue-metamask>
    <notifications position="top center" />
  </section>
</template>

<style scoped>
.banner {
  background-image: url("~@/assets/images/mint/banner.png");
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