<script>
import { mapGetters, mapActions } from "vuex";
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { createVNode } from 'vue';
import { GET_ISSUE_RESULTS, ISSUE_POAP_TESTNET } from "@/store/poap.module";
import POAPS from "../../data/poaps";
import { Modal } from 'ant-design-vue';

export default {
  name: "PoapSend",
  components: {
    //PoapSelect
  },
  beforeMount: () => {
    POAPS.forEach((p) => {
      p.select = false;
    });
  },
  mounted: function () {
    this.$nextTick(function () {
      this.adminAddress = "0x7EA1EaA27b313D04D359bF3e654FE927376e31Bb";
      let access = false;

      this.guilds.forEach((guild) => {
        const index = guild.delegate.findIndex((a) => a === this.adminAddress);
        if (index >= 0) {
          this.adminGuild = guild;
          access = true;
        }
      });
      if (access === false) {
        this.$router.push({ name: "Home" })
      }
    });
  },
  computed: {
    filteredList() {
      console.log(this.poapsobj);
      return this.poapsobj.filter((post) => {
        return post.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    ...mapGetters([GET_ISSUE_RESULTS]),
    ...mapActions([ISSUE_POAP_TESTNET]),
  },
  data: () => {
    return {
      adminGuild: {
        Id: '',
        Name: '',
      },
      adminAddress: '',
      isSubmited: false,
      isIssued: false,
      issuedBlockLink: "",
      issuedBlockHash: "",
      submitdata: {
        guild: "",
        eventName: "",
        address: "",
      },
      selected: {
        id: "-1",
        name: "",
        description: "",
      },
      search: "",
      poapsobj: POAPS,
      guilds: [
        {
          ID: "U1",
          delegate: [],
          Name: "翻译公会",
        },
        {
          ID: "U2",
          delegate: [],
          Name: "宣传公会 ",
        },
        {
          ID: "U3",
          delegate: [],
          Name: "产品公会",
        },
        {
          ID: "U4",
          delegate: [],
          Name: "运营公会",
        },
        {
          ID: "U5",
          delegate: ["0x7EA1EaA27b313D04D359bF3e654FE927376e31Bb"],
          Name: "开发者公会",
        },
        {
          ID: "U6",
          delegate: [],
          Name: "建筑公会",
        },
        {
          ID: "U7",
          delegate: [],
          Name: "投研公会",
        },
        {
          ID: "U8",
          delegate: [],
          Name: "设计公会",
        },
        {
          ID: "U9",
          delegate: [],
          Name: "艺术公会",
        },
        {
          ID: "U10",
          delegate: [],
          Name: "NFT Club",
        },
        {
          ID: "U11",
          delegate: [],
          Name: "Web3 大学",
        },
      ],
      visible:false
    };
  },
  methods: {
    submit: async function () {
      this.isSubmited = true;
      this.isIssued = false;
      this.issuedBlockLink = "";
      this.issuedBlockHash = "";
      console.log(this.selected);
      this.$store
        .dispatch(ISSUE_POAP_TESTNET, {
          accounts: this.submitdata.address.split("\n"),
          poapId: String(this.selected.id),
        })
        .then((results) => {
          this.selected = {
            id: "-1",
            name: "",
            description: "",
          };
          this.submitdata.address = "";
          this.isSubmited = false;
          this.isIssued = true;
          this.issuedBlockHash = results.data.data.hash;
          if (results.data.data.chainId === 80001) {
            this.issuedBlockLink = `https://mumbai.polygonscan.com/tx/${this.issuedBlockHash}`;
          } else if (results.data.data.chainId === 137) {
            this.issuedBlockLink = `https://polygonscan.com/tx/${this.issuedBlockHash}`;
          }
        });

      //新增的地方
    },
    setSelect: function (c) {
      let t = this.poapsobj.filter((post) => post.select == true);
      t.forEach((p) => (p.select = p.select = false));
      c.select = !c.select ? true : false;
      this.selected = JSON.parse(JSON.stringify(c));
      if (t.length > 0) {
        const p = JSON.parse(JSON.stringify(t[0]));
        if (c.id == p.id) c.select = false;
      }
    },
    showConfirm: function() {
      Modal.confirm({
        title: '请确认发送钱包地址是否正确',
        icon: createVNode(ExclamationCircleOutlined),
        content: this.submitdata.address,

        onOk() {
          console.log('ok')
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          }).catch(() => console.log('Oops errors!'));
        },
        onCancel() {
          console.log('Cancel')
        },

      });
    }
  },
};
</script>

<template>
  <div class="w-full md:w-1/2">
    <br />您正在进入 SeeDAO 官网临时后台, 若非相关操作人员请离开。<br />
    视角: {{ this.adminAddress }}<br />
    <div
      class="
        leading-loose
        max-w-xl
        m-4
        p-7
        bg-secondary-light
        dark:bg-secondary-dark
        rounded-xl
        shadow-xl
        text-left
      "
    >
      <p
        class="
          font-general-medium
          text-primary-dark
          dark:text-primary-light
          text-2xl
          mb-8
        "
      >
        发放POAP
      </p>
      <form action="#" class="font-general-regular space-y-7">
        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="subject"
            >代表公会</label
          >
          <input
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="name"
            name="name"
            type="text"
            required=""
            placeholder="请选择 ..."
            aria-label="EventName"
            v-model="this.adminGuild.Name"
            disabled
          />
          {{ this.adminGuild.Name }}
        </div>
        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >POAP 名稱</label
          >
          <input
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="name"
            name="name"
            type="text"
            required=""
            placeholder="请在右侧选择 ..."
            aria-label="EventName"
            v-model="selected.name"
            disabled
          />
        </div>
        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >POAP 描述</label
          >
          <p
            class="block text-md text-primary-dark dark:text-primary-light mb-2"
            for="name"
          >
            {{ this.selected.description }}
          </p>
        </div>
        <div>
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="message"
            >发送钱包 (换行新增多个钱包)</label
          >
          <textarea
            class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-primary-dark
              border-opacity-50
              text-primary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-ternary-dark
              rounded-md
              shadow-sm
              text-md
            "
            id="message"
            name="message"
            placeholder="0x1234...............................abcde&#10;0x5678...............................vwxyz"
            cols="14"
            rows="6"
            v-model="submitdata.address"
            aria-label="Message"
          ></textarea>
        </div>
        <div>
          <div v-if="isSubmited === false" class="flex justify-end">
            <button
              class="
                px-4
                py-2.5
                text-white
                tracking-wider
                bg-indigo-500
                hover:bg-indigo-600
                focus:ring-1 focus:ring-indigo-900
                rounded-lg
                duration-500
              "
              aria-label="Send Message"
              @click="showConfirm"
            >
              提交 (测试网)
            </button>
          </div>
          <div v-else class="flex justify-end">
            <button
              class="
                px-4
                py-2.5
                text-white
                tracking-wider
                bg-gray-500
                hover:bg-gray-600
                focus:ring-1 focus:ring-gray-900
                rounded-lg
                duration-500
              "
              aria-label="Send Message"
              disabled
            >
              提交中... (测试网)1
            </button>
          </div>
        </div>
      </form>
      <div v-if="isIssued">
        <label
          class="block text-md text-primary-dark dark:text-primary-light mb-2"
          for="message"
          >✅ 发送成功! 请等待区块完成:
          <a :href="issuedBlockLink" target="_blank"
            >{{ this.issuedBlockHash.slice(0, 8) }}...{{
              this.issuedBlockHash.slice(
                this.issuedBlockHash.length - 8,
                this.issuedBlockHash.length
              )
            }}</a
          ></label
        >
      </div>
    </div>
  </div>
  <div class="w-full md:w-1/2">
    <br /><br /><br />
    <div>
      <input
        v-model="search"
        class="
          w-full
          px-5
          py-2
          border border-gray-300
          dark:border-primary-dark
          border-opacity-50
          text-primary-dark
          dark:text-secondary-light
          bg-ternary-light
          dark:bg-ternary-dark
          rounded-md
          shadow-sm
          text-md
        "
        id="search"
        name="search"
        type="text"
        required=""
        placeholder="搜寻 POAP..."
      />
    </div>
    <div
      class="
        overflow-y-auto
        scrollbar-w-2
        scrollbar-track-gray-lighter
        scrollbar-thumb-rounded
        scrollbar-thumb-gray
        scrolling-touch
        h-2/4
      "
    >
      <div
        class="
          p-4
          grid
          gap-4
          grid-cols-3
          bg-fuchsia-300 bg-stripes bg-stripes-white
          rounded-md
        "
      >
        <div
          class="flex flex-col items-center justify-center"
          :key="c.id"
          v-for="c in filteredList"
        >
          <img
            :alt="c.name"
            @click="setSelect(c)"
            class="w-64 py-5 px-10 border border-ternary-light"
            :class="{ 'bg-indigo-200': c.select }"
            :src="require('@/assets/images/poaps/' + c.id + '.png')"
          />
          <span>{{ c.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
