<!--
@description: about.vue
@author: fc
@createtime: 2021年12月1日 11:14:02
-->
<template>
  <div class="about-container flex-col">
    <div class="about-description about-section">
      <div class="description-left flex-col">
        <div class="header-top flex-center">
          <img class="header-icon" src="../../assets/images/shape/circle.png" />
          <span class="header-text">{{$t('lang.mint[0].title')}}</span>
        </div>
        <div class="header-bottom">
          <div class="left-shape"></div>
        </div>
        <div class="description-content">
          <p>
            {{$t('lang.mint[0].desc')}}
          </p>
        </div>
      </div>
      <div class="description-right">
        <img class="we-img" src="../../assets/images/about/who we are.png" />
      </div>
    </div>
    <div class="about-nfts">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <NFTS :imagesIds="!isMobile ? [1, 2, 3, 4, 5] : [1, 2, 3]"></NFTS>
        </swiper-slide>
        <swiper-slide>
          <NFTS :imagesIds="!isMobile ? [6, 7, 8, 9, 10] : [6, 7, 8]"></NFTS>
        </swiper-slide>
        <swiper-slide>
          <NFTS
            :imagesIds="!isMobile ? [11, 12, 13, 14, 15] : [11, 12, 13]"
          ></NFTS>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div class="about-value flex-col flex-center about-section">
      <div class="header-top">
        <img class="header-icon" src="../../assets/images/shape/triangle.png" />
        <span class="header-text">{{$t('lang.mint[1].title')}}</span>
      </div>
      <div class="header-bottom">
        <div class="center-shape"></div>
      </div>
      <div class="nftvalue-content">
        <p class="content">
          {{$t('lang.mint[1].desc')}}
        </p>
      </div>
    </div>
    <div class="about-cryptoc flex-col flex-center about-section">
      <div class="header-top">
        <img class="header-icon" src="../../assets/images/shape/sector.png" />
        <span class="header-text">{{$t('lang.mint[2].title')}}</span>
      </div>
      <div class="header-bottom">
        <div class="center-shape"></div>
      </div>
      <div class="C-content">
        <div class="c-item">
          <img class="c-logo" src="../../assets/images/cryptoc.png" />
          <p class="c-content">
            <a
              class="a-link"
              title="点击查看【创世宣言】"
              href="https://mp.weixin.qq.com/s/c1rxrkfp4OHgXgyVjWhLlA"
              >C社（CryptoC）</a
            >
            {{$t('lang.mint[2].cotent[0]')}}
          </p>
        </div>
        <div class="c-item">
          <video
            controls
            muted
            loop="loop"
            class="c-video"
            poster="../../assets/images/cnft.png"
          >
            <source src="/video/cryptoc.mp4" type="video/mp4" />
          </video>
          <div style="display: flex; flex-direction: column">
            <p class="c-content">
              <a
                class="a-link"
                title="点击跳转opensea查看徽章"
                href="https://opensea.io/collection/cryptoc-v3"
                >（CryptoC V3 NFT）</a
              >
              {{$t('lang.mint[2].cotent[1]')}}<a
                class="a-link"
                href="https://mp.weixin.qq.com/s/HSIq-F2Zb2jeIfrkRMiueQ"
                >{{$t('lang.mint[2].cotent[2]')}}</a
              >{{$t('lang.mint[2].cotent[3]')}}
            </p>
            <span class="video-tip"
              >{{$t('lang.mint[4].footer')}}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="about-roadmap flex-col flex-center about-section">
      <div class="roadmap-header">
        <div class="header-top">
          <img
            class="header-icon"
            src="../../assets/images/shape/rectangle.png"
          />
          <span class="header-text">{{$t('lang.mint[3].title')}}</span>
        </div>
        <div class="header-bottom">
          <div class="center-shape"></div>
        </div>
      </div>
      <div class="roadmap-container" v-if="!isMobile">
        <div class="images-container">
          <img
            v-for="image of roadmapImages"
            :key="image"
            class="step-image"
            :src="image"
          />
        </div>
        <div class="line-container"></div>
        <div class="roadmap-content-container">
          <div
            class="roadmap-item"
            v-for="(text, index) of roadmapText"
            :key="index"
          >
            <h4>{{ $t(`lang.mint[3].time[${index-1}]`) }}</h4>
            <p>{{  $t(`lang.mint[3].intro[${index-1}]`) }}</p>
          </div>
        </div>
      </div>
      <div class="roadmap-container" v-else>
        <div
          class="mapitem-container"
          v-for="(image, index) of roadmapImages"
          :key="image"
        >
          <img class="step-image" :src="image" />
          <div class="roadmap-item">
            <h4>{{ $t(`lang.mint[3].time[${index}]`) }}</h4>
            <p>{{ $t(`lang.mint[3].intro[${index}]`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const RoadmapImages = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
  return require(`../../assets/images/robots/${i}.png`);
});
import NFTS from "./nfts.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  props: ["isMobileProp"],
  data() {
    return {
      isMobile: false,
      roadmapImages: RoadmapImages,
      swiperOption: {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      roadmapText: {
        1: [
          "12.04 上午10点半",
          "首批200个NFT开始兑换，持有C社徽章的家人们凭徽章编号获取",
        ],
        2: [
          "12.04 下午14点",
          "第二批300个NFT开始领取，面向SeeDAO的早期参与者和关注支持创作者经济（持2000BANK/50FF/2FWB/400RLY）的朋友们",
        ],
        3: ["12月底", "SeeDAO联合元宇宙资本共同举办首届元宇宙创作者嘉年华"],
        4: ["1月", "SeeDAO 创作者训练营高阶班第一期开营"],
        5: ["2月", "SeedHacks创作者大赛开启—首届元宇宙古典音乐现代化大赛"],
        6: ["3月", "SeeDAO发起的Build ShangHai in Metaverse一期项目建成"],
        7: [
          "4月",
          "SeedHacks联合各公链发起多轮次创作者大赛，为公链建设创作者生态",
        ],
        8: ["5月", "SeeDAO联合中外知名DAO发起一场Creator DAO大会"],
        9: [
          "未来",
          "由社区决定8500枚如何分配，可以售卖并将收入作为SeeDAO社区基金，也可以奖励给对社区做出卓越贡献的成员，以及其他被社区认可的方式。",
        ],
      },
    };
  },
  components: {
    NFTS,
    Swiper,
    SwiperSlide,
  },
  watch: {
    isMobileProp(val) {
      this.isMobile = val;
    },
  },
  mounted() {
    if (this.isMobileProp === undefined) {
      if (window.screen.availWidth <= 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    } else {
      this.isMobile = this.isMobileProp;
    }
  },
};
</script>

<style lang="scss">
.about-container {
  .a-link {
    color: #66b1ff;
    border-bottom: 1px solid #66b1ff;
  }
  .about-section {
    display: flex;
    width: 62.5%;
    margin: 6rem auto;

    .header-text {
      margin-left: 2rem;
      font-size: 3.6rem;
    }
    .header-bottom {
      margin-top: 1.6rem;
      margin-bottom: 6rem;
      width: 70%;
      border-bottom: 1px solid #00000080;
    }
  }
  .about- {
    &description {
      .description-left {
        flex: 7;
        align-items: flex-start;
        justify-content: center;
        .header-top {
          display: flex;
          .header-icon {
            width: 3rem;
            height: 3rem;
          }
        }
        .header-bottom {
          .left-shape {
            background-color: #ff9500;
            border: 1px solid #000000;
            width: 10rem;
            height: 0.6rem;
          }
        }
        .description-content {
          p {
            width: 70%;
            font-size: 2rem;
          }
        }
      }
      .description-right {
        flex: 5;
        .we-img {
          width: 100%;
        }
      }
    }
    &nfts {
      width: 99%;
      .swiper {
        height: 300px;
        width: 100%;
        border: 1px transparent solid;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-weight: bold;
          font-size: 14px;
          background-color: transparent;
        }
      }
    }
    &value {
      width: 36.4%;
      .header-bottom {
        justify-content: center;
        display: flex;
        .center-shape {
          background-color: #ffc31f;
          border: 1px solid #000000;
          width: 10rem;
          height: 0.6rem;
        }
      }
      .nftvalue-content {
        p {
          font-size: 2rem;
        }
      }
    }
    &cryptoc {
      width: 50%;
      .header-bottom {
        justify-content: center;
        display: flex;
        .center-shape {
          background-color: #ff1f06;
          border: 1px solid #000000;
          width: 10rem;
          height: 0.6rem;
        }
      }
      .C-content {
        display: flex;
        flex-direction: column;
        .c-item {
          display: flex;
          align-items: center;
          justify-content: center;
          &:nth-child(1) {
            margin-bottom: 6rem;
          }
          .c-logo {
            width: 27rem;
          }
          .c-video {
            width: 27rem;
            height: 27rem;
            background: #000005;
          }
          .c-content {
            margin-left: 8rem;
            font-size: 2rem;
          }
        }
        .video-tip {
          margin-top: 4rem;
          margin-left: 8rem;
          color: rgba(20, 18, 18, 0.5);
        }
      }
    }
    &roadmap {
      width: 48%;
      .header-bottom {
        justify-content: center;
        display: flex;
        .center-shape {
          background-color: #1e80c7;
          border: 1px solid #000000;
          width: 10rem;
          height: 0.6rem;
        }
      }
    }
  }
}

.roadmap-container {
  display: flex;
  flex-direction: row;
  .step-image {
    width: 28rem;
    &:nth-child(n + 1) {
      margin-bottom: 2rem;
    }
  }
  .mapitem-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 6rem;
    .roadmap-item {
      height: fit-content;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      margin-top: 3rem;
      h4 {
        font-size: 3rem;
        margin-bottom: 1rem;
        font-weight: 400;
      }
      p {
        font-size: 2rem;
        font-weight: 300;
      }
    }
  }
  .images-container {
    display: flex;
    flex-direction: column;
  }
  .line-container {
    width: 30rem;
    background-image: url("../../assets/images/about/roadmapLine.png");
    background-repeat: repeat-y;
    background-position: top;
    background-size: 10px auto;
    margin: 0px 8% 0px 16%;
  }
  .roadmap-content-container {
    display: flex;
    flex-direction: column;
    .roadmap-item {
      height: 30rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      h4 {
        font-size: 3rem;
        margin-bottom: 1rem;
        font-weight: 400;
      }
      p {
        font-size: 2rem;
        font-weight: 300;
      }
    }
  }
}
</style>