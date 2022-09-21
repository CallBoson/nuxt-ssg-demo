<template>
  <div class="p-0 container-fluid" :class="isIphone ? 'attachment-scroll' : ''">
    <!-- PC端视频弹窗 -->
    <transition name="page">
      <div v-if="isShowVideoPC" class="video-popup-pc" @click.self="isShowVideoPC = false" @touchmove.prevent @mousewheel.prevent>
        <div class="video-wrapper">
          <img class="icon-close" :src="'icon-close.png' | imgHost" @click="isShowVideoPC = false">
          <video controls autoplay muted>
            <source src="https://wx-cdn.holax.com/video/827.mp4"
                    type="video/mp4">
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>
    </transition>

    <!-- 移动端视频弹窗 -->
    <div v-if="isShowVideoMobile" class="video-popup-mobile" @touchmove.self.prevent @mousewheel.prevent>
      <div class="video-wrapper">
        <img class="icon-close" :src="'icon-close.png' | imgHost" @click="isShowVideoMobile = false">
        <video controls
                controlsList="nodownload"
                id="video-index-mobile"
                webkit-playsinline="true"
                playsinline="true"
                preload="auto"
                x5-video-player-type='h5-page'
                muted>
          <source src="https://wx-cdn.holax.com/video/827.mp4"
                  type="video/mp4">
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    </div>

    <div class="index-content-pc hidden xl:block">
      <div class="product-wrapper img-index-1">
        <div class="cover" :style="'hairDryer/index-1-pc.jpg' | bgHost" />
        <div class="info-wrapper">
          <div class="flex items-center"
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-once="true">
            <img class="icon-index-pc" src="@/assets/images/icon-index-pc.png">
            <div class="logo-text">高速吹风机</div>
          </div>
          <div class="flex items-center"
                data-aos="fade-down"
                data-aos-delay="250"
                data-aos-once="true">
            <div class="title-1">澎湃动力</div>
            <div class="title-2">高速快干</div>
          </div>
          <div class="btns-wrapper">
            <a
              style="display: block;"
              class="btn"
              href="/hairDryer/hairDryer-pc"
              data-aos="fade-down"
              data-aos-delay="350"
              data-aos-once="true"
            >
              探索科技
            </a>
            <!-- <div class="btn"
                  @click="playVideoPC"
                  data-aos="fade-down"
                  data-aos-delay="400">
                  发布会回放
            </div> -->
          </div>
        </div>
      </div>
      <div class="product-wrapper img-index-2">
        <div class="cover" :style="'img-index-2.jpg' | bgHost" />
        <div class="info-wrapper">
          <img
            class="icon"
            :src="'icon-index-holax.png' | imgHost"
            data-aos="fade-down"
          >
          <div
            class="title"
            data-aos="fade-down"
          >
          一个以用户为中心的
          </div>
          <div
            class="title"
            data-aos="fade-down"
          >
            创新平台
          </div>
          <div class="btns-wrapper pb-5">
            <a
              class="btn"
              style="display: block;"
              data-aos="fade-down"
              href="/introduce"
            >
              了解我们
            </a>
          </div>
        </div>
      </div>
      <div class="contact-wrapper">
        <ContactUs />
      </div>
    </div>
    <div class="index-content-mobile block xl:hidden">
      <div class="product-wrapper img-index-1">
        <img class="cover" :src="'hairDryer/index-2.jpg' | imgHost">
        <div class="info-wrapper">
          <img class="icon-center" :src="'hairDryer/icon-index-center-2.png' | imgHost">
          <div class="flex justify-center items-center">
            <div class="index-text-1" style="margin-right: 5px;">澎湃动力</div>
            <div class="index-text-2">高速快干</div>
          </div>
          <div class="btns-wrapper">
            <a class="btn" style="display: block;" href="/hairDryer/hairDryer-mobile">
              探寻科技
            </a>
            <!-- <div class="btn" @click="playVideoMobile">
              发布会回放
            </div> -->
          </div>
        </div>
      </div>
      <div class="product-wrapper img-index-2">
        <img class="cover" :src="'img-index-2-mobile.jpg' | imgHost">
        <div class="info-wrapper">
          <img
            class="icon"
            :src="'icon-index-holax.png' | imgHost"
          >
          <div class="title">
            一个以用户为中心的
          </div>
          <div class="title">
            创新平台
          </div>
          <div class="btns-wrapper pb-5">
            <a
              class="btn"
              style="display: block;"
              href="/introduce">
              了解我们
            </a>
          </div>
        </div>
      </div>
      <div class="contact-wrapper">
        <div class="contact-title">
          关注我们
        </div>
        <div class="contact-text">
          阅读有想法的优质内容，探索有品味的趣味活动
        </div>
        <div class="contact-text">
          获取每日最新品牌资讯
        </div>
        <img class="img-mobile" :src="'contact-bg-phone-mobile.png' | imgHost">
      </div>
    </div>
  </div>
</template>

<script>
import ContactUs from '@/components/ContactUs.vue'
export default {
  name: 'IndexIndex',
  components: {
    ContactUs
  },
  data () {
    return {
      isIphone: false,
      isShowVideoPC: false,
      isShowVideoMobile: false
    }
  },
  mounted () {
    if (/iPhone/i.test(navigator.userAgent)) {
      this.isIphone = true
    }
  },
  methods: {
    playVideoPC () {
      this.isShowVideoPC = true
    },
    playVideoMobile () {
      this.isShowVideoMobile = true
      setTimeout(() => {
        document.querySelector('#video-index-mobile').play()
      }, 100)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/hover.css';
.hide-download-btn {
  &::-webkit-media-controls-enclosure {
    width: calc(100% + 32px);
    margin-left: auto;
  }
}
.index-content-pc {
  .product-wrapper {
    position: relative;

    .cover {
      width: 100%;
      height: 100vh;
      background-attachment: fixed;
      background-size: cover;
      background-position: center center;
    }

    .info-wrapper {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        @apply mb-4 text-3xl;
        color: #FFF;
      }

      .sub-text {
        @apply mb-1 text-sm;
        color: #FFF;
      }

      .btns-wrapper {
        @apply mt-5;
        display: flex;

        .btn {
          @apply mx-4 cursor-pointer;
          width: 144px;
          height: 40px;
          line-height: 40px;
          border: 1px solid #FFF;
          text-align: center;
          color: #FFF;
          font-size: 16px;
          transition: all .4s;

          &:hover {
            background-color: #FFF;
            color: #000;
          }
        }
      }
    }
  }

  .img-index-1 {
    .info-wrapper {
      top: 11%;
    }
    .icon-index-pc {
      width: 130px;
      height: auto;
      margin-right: 8px;
    }

    .logo-text {
      color: #29292A;
      font-size: 25px;
      letter-spacing: 4px;
    }

    .title-1 {
      color: #29292A;
      font-size: 48px;
      margin-right: 10px;
    }

    .title-2 {
      color: #29292A;
      font-size: 48px;
    }

    .btn {
      margin-top: -5px;
      color: #29292A !important;
      border: 1px solid #29292A !important;

      &:hover {
        background-color: #29292A !important;
        color: #fff !important;
      }
    }
  }

  .img-index-2 {
    .cover {
      width: 100%;
      height: 100vh;
      background-attachment: fixed;
      background-size: cover;
      background-position: center center;
    }

    .info-wrapper {
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .icon {
      @apply mb-5;
      width: 60px;
      height: 60px;
    }

    .title {
      display: flex;
      text-align: center;
      font-size: 2rem !important;
    }
  }

  .contact-wrapper {
    @apply mb-0 lg:mb-32;
  }

  .footer {
    background-color: beige;
    box-sizing: border-box;

    .brand {
      background-color: red;
      height: 80px;
    }

    .qr-code {
      background-color: green;
      height: 80px;
    }
  }
}

.index-content-mobile {
  .product-wrapper {
    position: relative;

    .cover {
      width: 100%;
      height: auto;
    }

    .info-wrapper {
      position: absolute;
      top: 111px;
      left: 50%;
      width: 100%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        margin-bottom: 5px;
        font-size: 23px;
        color: #FFF;
      }

      .sub-text {
        @apply mb-1;
        font-size: 13.5px;
        color: #FFF;
      }

      .btns-wrapper {
        margin-top: 20px;
        display: flex;

        .btn {
          @apply mx-4 cursor-pointer;
          width: 109px;
          height: 32px;
          line-height: 32px;
          border: 1px solid #FFF;
          text-align: center;
          color: #FFF;
          font-size: 13.5px;
          transition: all .4s;
        }
      }
    }
  }

  .img-index-1 {
    .info-wrapper {
      top: 103px;
      .title {
        margin-bottom: 8px;
      }

      .icon-center {
        margin: 0 auto;
        margin-bottom: 10px;
        width: 191px;
        height: auto;
      }
      .index-text-1 {
        color: #000;
        letter-spacing: 1px;
        font-size: 34px;
      }

      .index-text-2 {
        color: #000;
        letter-spacing: 1px;
        font-size: 34px;
        font-weight: bolder;
      }

      .btn {
        color: #000 !important;
        border: 1px solid #000 !important;
        font-size: 13px;
      }
    }
  }

  .img-index-2 {
    .info-wrapper {
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .icon {
      @apply mb-5;
      width: 33.5px;
      height: 33.5px;
    }

    .title {
      display: flex;
      text-align: center;
      font-size: 23px !important;
    }
  }

  .contact-wrapper {
    padding-top: 50px;
    margin-bottom: 50px;
    background-image: url('@/assets/images/contact-bg.jpg');
    background-size: cover;
    background-position: center center;
    .contact-title {
      color: #333;
      font-size: 23px;
      // font-weight: bold;
      text-align: center;
      padding-bottom: 15px;

      &::after {
        content: '';
        width: 48px;
        height: 1px;
        display: block;
        background-color: #333;
        margin: 0 auto;
        margin-top: 15px;
      }
    }

    .contact-text {
      font-size: 12.5px;
      color: #666;
      text-align: center;
    }

    .img-mobile {
      position: relative;
      top: 35px;
      margin: 0 auto;
      width: 155px;
      height: auto;
    }
  }

  .footer {
    background-color: beige;
    box-sizing: border-box;

    .brand {
      background-color: red;
      height: 80px;
    }

    .qr-code {
      background-color: green;
      height: 80px;
    }
  }
}

.attachment-scroll .cover {
  background-attachment: scroll;
}

/* PC端视频弹窗 */
.video-popup-pc {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.9);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  .video-wrapper {
    position: relative;
    .icon-close {
      position: absolute;
      top: -30px;
      right: -50px;
      width: 40px;
      height: 40px;
    }
    video {
      height: 80vh;
    }
  }
}

/* 移动端视频弹窗 */
.video-popup-mobile {
  position: fixed;
  top: 0px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.3);
  z-index: 9999;
  display: flex;
  align-items: center;

  .video-wrapper {
    position: relative;
    top: -50px;
    .icon-close {
      position: absolute;
      bottom: -40px;
      left: 50%;
      transform: translateX(-50%);
      width: 28px;
      height: 28px;
    }
    video {
      width: 100vw;
    }
  }
}
</style>
