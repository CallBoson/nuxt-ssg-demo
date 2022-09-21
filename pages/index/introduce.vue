<template>
  <div class="introduce-container" :class="isIphone ? 'attachment-scroll' : ''">
    <!-- PC端 -->
    <div class="introduce-content-pc hidden xl:block">
      <div class="img-wrapper cover-1" :style="'img-index-2.jpg' | bgHost">
        <div class="info-wrapper" data-aos="fade-down">
          <div class="title">
            你好未来
          </div>
          <div class="sub-text">
            「 未来，即现在 」
          </div>
          <div class="sub-text">
            把未来科技照到现实，真正实现
          </div>
          <div class="sub-text">
            科技生活，人人平等
          </div>
        </div>
      </div>
      <div class="img-wrapper cover-2">
        <div class="video-wrapper" :style="'who-we-are.jpg' | bgHost">
          <!-- <video id="pc-video-intro" controls autoplay muted data-aos="fade-down">
            <source :src="'ceshi.mp4' | imgHost"
                    type="video/mp4">
            Sorry, your browser doesn't support embedded videos.
          </video> -->
          <div class="title">
            我们是谁？
          </div>
        </div>
        <div class="sub-text" data-aos="fade-down">
          一个和世界死磕的科技团队
        </div>
        <div class="sub-text" data-aos="fade-down">
          把所有的「不可以」都变成「了不起」
        </div>
        <br>
        <div class="sub-text" data-aos="fade-down">
          一个以用户为中心的创新平台
        </div>
        <div class="sub-text" data-aos="fade-down">
          以科技与创新赋能
        </div>
        <div class="sub-text" data-aos="fade-down">
          让每一个要求都能被实现
        </div>
      </div>
      <div class="img-wrapper cover-3" :style="'img-introduce-2.jpg' | bgHost">
        <div class="info-wrapper" data-aos="fade-down">
          <div class="title">
            造·你要的好物
          </div>
          <div class="sub-text">
            用耳聆听需求，用心孵化产品
          </div>
        </div>
      </div>
      <div class="img-wrapper cover-4">
        <div class="swiper-wrapper" data-aos="fade-down">
          <img :class="swiper_1_current === 1 ? 'brightness-in' : 'brightness-out'" class="swiper-item" :src="'img-introduce-swiper-1.jpg' | imgHost">
          <img :class="swiper_1_current === 2 ? 'brightness-in' : 'brightness-out'" class="swiper-item" :src="'img-introduce-swiper-2.jpg' | imgHost">
        </div>
        <div class="switch-wrapper">
          <div
            class="switch-item"
            :class="swiper_1_current === 1 ? 'active' : ''"
            @click="swiper_1_current = 1"
          >
            <div class="switch-title" data-aos="fade-down">
              TOP原创设计团队
            </div>
            <div class="switch-text" data-aos="fade-down">
              汇聚全球TOP设计团队，以全球视野，大师级的设计，让新颖的产品创意与独特的设计品味结合得更融洽。
            </div>
          </div>
          <div
            class="switch-item"
            :class="swiper_1_current === 2 ? 'active' : ''"
            @click="swiper_1_current = 2"
          >
            <div class="switch-title" data-aos="fade-down">
              全球原创设计
            </div>
            <div class="switch-text" data-aos="fade-down">
              从用户需求出发，深度思考产品使用场景，用原创设计，研发出具有极大潜力的蓝海产品。
            </div>
          </div>
        </div>
      </div>
      <div class="img-wrapper cover-5" :style="'img-introduce-3.jpg' | bgHost">
        <div class="info-wrapper">
          <div class="title" data-aos="fade-down">
            做·让你惊叹的事
          </div>
          <div class="sub-text" data-aos="fade-down">
            用科技和创新赋能
          </div>
          <div class="sub-text" data-aos="fade-down">
            让生产出的每一个产品都赢得用户的惊叹
          </div>
        </div>
      </div>
      <div class="img-wrapper cover-6">
        <div class="swiper-wrapper" data-aos="fade-down">
          <img :class="swiper_2_current === 1 ? 'brightness-in' : 'brightness-out'" class="swiper-item" :src="'img-introduce-swiper-3.jpg' | imgHost">
          <img :class="swiper_2_current === 2 ? 'brightness-in' : 'brightness-out'" class="swiper-item" :src="'img-introduce-swiper-4.jpg' | imgHost">
        </div>
        <div class="switch-wrapper">
          <div class="switch-item" :class="swiper_2_current === 1 ? 'active' : ''" @click="swiper_2_current = 1">
            <div class="switch-title" data-aos="fade-down">
              知名品牌同源供应链
            </div>
            <div class="switch-text" data-aos="fade-down">
              精良材质，上乘做工，定制出物超所值的产品。
            </div>
          </div>
          <div class="switch-item" :class="swiper_2_current === 2 ? 'active' : ''" @click="swiper_2_current = 2">
            <div class="switch-title" data-aos="fade-down">
              精准到0.001mm的匠心打磨
            </div>
            <div class="switch-text" data-aos="fade-down">
              打磨每一个小细节，1：1精准还原原创作品，用人性化的设计，实现每一个苛刻的要求
            </div>
          </div>
        </div>
      </div>
      <div class="img-wrapper cover-7" :style="'img-introduce-4.jpg' | bgHost">
        <div class="info-wrapper" data-aos="fade-down">
          <div class="title">
            未来猩球用户社区
          </div>
          <div class="sub-text">
            为全球用户创建私域平台，提供1v1定制服务
          </div>
          <div class="sub-text">
            满足所有细分需求，给用户惊叹的社区使用体验
          </div>
        </div>
      </div>
      <div class="img-wrapper cover-8" :style="'img-introduce-5.jpg' | bgHost">
        <div class="info-wrapper" data-aos="fade-down">
          <img class="icon-x" :src="'icon-index-holax.png' | imgHost">
          <div class="title">
            未来已来 一起奔赴
          </div>
        </div>
      </div>
    </div>

    <!-- 移动端 -->
    <div class="introduce-content-mobile block xl:hidden">
      <div class="img-wrapper cover-1">
        <img class="cover" :src="'img-index-2-mobile.jpg' | imgHost">
        <div class="info-wrapper">
          <div class="title">
            你好未来
          </div>
          <div class="sub-text">
            「 未来，即现在 」
          </div>
          <div class="sub-text">
            把未来科技照到现实，真正实现
          </div>
          <div class="sub-text">
            科技生活，人人平等
          </div>
        </div>
      </div>
      <div class="img-wrapper cover-2">
        <div class="title">
          我们是谁？
        </div>
        <div class="video-wrapper">
          <img :src="'who-we-are.jpg' | imgHost">
          <!-- <video controls
                  controlsList="nodownload"
                  id="mobile-video-intro"
                  webkit-playsinline
                  playsinline
                  preload="auto"
                  x5-video-player-type='h5-page'
                  muted>
            <source :src="'ceshi.mp4' | imgHost"
                    type="video/mp4">
            Sorry, your browser doesn't support embedded videos.
          </video> -->
        </div>
        <div class="sub-text">
          一个和世界死磕的科技团队
        </div>
        <div class="sub-text">
          把所有的「不可以」都变成「了不起」
        </div>
        <br>
        <div class="sub-text">
          一个以用户为中心的创新平台
        </div>
        <div class="sub-text">
          以科技与创新赋能
        </div>
        <div class="sub-text">
          让每一个要求都能被实现
        </div>
      </div>
      <div class="img-wrapper cover-3">
        <img class="cover" :src="'img-introduce-2-mobile.jpg' | imgHost">
        <div class="info-wrapper">
          <div class="title">
            造·你要的好物
          </div>
          <div class="sub-text">
            用耳聆听需求
          </div>
          <div class="sub-text">
            用心孵化产品
          </div>
        </div>
      </div>
      <div class="img-wrapper cover-4">
        <div class="swiper-item">
          <div class="switch-title">
            TOP原创设计团队
          </div>
          <div class="switch-text">
            汇聚全球TOP设计团队，以全球视野，大师级的设计，让新颖的产品创意与独特的设计品味结合得更融洽。
          </div>
          <img class="img-item" :src="'img-introduce-swiper-1.jpg' | imgHost">
        </div>
        <div class="swiper-item">
          <div class="switch-title">
            全球原创设计
          </div>
          <div class="switch-text">
            从用户需求出发，深度思考产品使用场景，用原创设计，研发出具有极大潜力的蓝海产品。
          </div>
          <img class="img-item" :src="'img-introduce-swiper-2.jpg' | imgHost">
        </div>
      </div>
      <div class="img-wrapper cover-5">
        <img class="cover" :src="'img-introduce-3-mobile.jpg' | imgHost">
        <div class="info-wrapper">
          <div class="title">
            做·让你惊叹的事
          </div>
          <div class="sub-text">
            用科技和创新赋能让生产出的每
          </div>
          <div class="sub-text">
            一个产品都赢得用户的惊叹
          </div>
        </div>
      </div>
      <div class="img-wrapper cover-6">
        <div class="swiper-item">
          <div class="switch-title">
            知名品牌同源供应链
          </div>
          <div class="switch-text">
            精良材质，上乘做工，定制出物超所值的产品。
          </div>
          <img class="img-item" :src="'img-introduce-swiper-3.jpg' | imgHost">
        </div>
        <div class="swiper-item">
          <div class="switch-title">
            精准到0.001mm的匠心打磨
          </div>
          <div class="switch-text">
            打磨每一个小细节，1：1精准还原原创作品，用人性化的设计，实现每一个苛刻的要求
          </div>
          <img class="img-item" :src="'img-introduce-swiper-4.jpg' | imgHost">
        </div>
      </div>
      <div class="img-wrapper cover-7">
        <img class="cover" :src="'img-introduce-4-mobile.jpg' | imgHost">
        <div class="info-wrapper">
          <div class="title">
            未来猩球用户社区
          </div>
          <div class="sub-text">
            为全球用户创建私域平台，提供1v1定制服务
          </div>
          <div class="sub-text">
            满足所有细分需求，给用户惊叹的社区使用体验
          </div>
        </div>
      </div>
      <div class="img-wrapper cover-8">
        <img class="cover" :src="'img-introduce-5-mobile.jpg' | imgHost">
        <div class="info-wrapper">
          <img class="icon-x" :src="'icon-index-holax.png' | imgHost">
          <div class="title">
            未来已来
          </div>
          <div class="title">
            一起奔赴
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexIntroduce',
  data () {
    return {
      swiper_1_current: 1,
      swiper_2_current: 1,
      isIphone: false,
      audioOnce: true
    }
  },
  mounted () {
    if (/iPhone/i.test(navigator.userAgent)) {
      this.isIphone = true
    }

    // 创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
    document.addEventListener('touchstart', () => {
      if (!this.audioOnce) {
        return false
      }
      const audioAutoPlay = () => {
        this.audioOnce = false
        const audio = document.getElementById('mobile-video-intro')
        audio.play()
      }
      if (this.audioOnce) {
        audioAutoPlay()
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.hide-fullscreen-btn {
  &::-webkit-media-controls-fullscreen-button {
    display: none !important;
  }
  &::-webkit-media-controls {
    overflow: hidden !important;
  }
  &::-webkit-media-controls-enclosure {
    width: calc(100% + 32px);
    margin-left: auto;
  }
}

.introduce-container {
  overflow: hidden;
  .introduce-content-pc {
    .img-wrapper {
      height: 100vh;
      background: #FFF;
      display: flex;
      justify-content: center;
      align-items: center;

      .title {
        font-size: 55px;
      }
    }

    .cover-1 {
      background-attachment: fixed;
      background-size: cover;
      background-position: center center;

      .info-wrapper {
        @apply p-10;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
          @apply mb-8;
          color: #FFF;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          &::after {
            @apply mt-8;
            content: '';
            display: block;
            width: 100px;
            height: 2px;
            background-color: rgba(255, 255, 255, .5);
          }
        }

        .sub-text {
          @apply mb-1;
          font-size: 22px;
          color: #FFF;
        }
      }
    }

    .cover-2 {
      flex-direction: column;
      height: auto;
      padding: 80px 0;

      .video-wrapper {
        width: 1128px;
        height: 632px;
        background-size: cover;
        background-position: center center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;

        video {
          width: 100%;
          height: 100%;
        }
      }

      .title {
        font-size: 55px;
        color: #FFF;
      }

      .sub-text {
        @apply mb-1 mx-11;
        font-size: 22px;
        text-align: center;
        color: #333;
      }
    }

    .cover-3 {
      background-attachment: fixed;
      background-size: cover;
      background-position: center center;

      .info-wrapper {
        position: relative;
        top: -200px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
          @apply mb-8;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #FFF;
          word-break: keep-all;

          &::after {
            @apply mt-8;
            content: '';
            display: block;
            width: 100px;
            height: 2px;
            background-color: rgba(255, 255, 255, .5);
          }
        }

        .sub-text {
          @apply mb-1;
          font-size: 22px;
          color: #FFF;
        }
      }
    }

    .cover-5 {
      background-attachment: fixed;
      background-size: cover;
      background-position: center center;

      .info-wrapper {
        position: relative;
        top: -200px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
          @apply mb-8;
          color: #FFF;
          word-break: keep-all;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          &::after {
            @apply mt-8;
            content: '';
            display: block;
            width: 100px;
            height: 2px;
            background-color: rgba(255, 255, 255, .5);
          }
        }

        .sub-text {
          @apply mb-1;
          font-size: 22px;
          color: #FFF;
        }
      }
    }

    .cover-7 {
      background-attachment: fixed;
      background-size: cover;
      background-position: center center;

      .info-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
          @apply mb-8;
          color: #333333;
          word-break: keep-all;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          &::after {
            @apply mt-8;
            content: '';
            display: block;
            width: 100px;
            height: 2px;
            background-color: #020024;
            opacity: .5;
          }
        }

        .sub-text {
          @apply mb-1;
          font-size: 22px;
          color: #333333;
        }
      }
    }

    .cover-4, .cover-6 {
      width: 1128px;
      flex-direction: column;
      margin: 80px auto;
      height: auto;

      .swiper-wrapper {
        width: 100%;
        height: auto;

        img {
          width: 100%;
          height: auto;

          &.brightness-in {
            display: block;
            animation: brightnessIn .5s;
          }

          &.brightness-out {
            display: none;
            animation: brightnessIn .5s;
          }
        }
      }

      .switch-wrapper {
        @apply mt-10;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .switch-item {
          @apply pt-2 cursor-pointer;
          width: 474px;
          opacity: .5 !important;
          border-top: 4px solid #020024;
          transition: all .5s;

          &.active {
            opacity: 1 !important;
            animation: none
          }

          .switch-title {
            font-size: 24px;
            color: #020024;
            margin-bottom: 12px;
          }

          .switch-text {
            font-size: 14px;
            color: #020024;
          }
        }
      }
    }
    .cover-8 {
      background-attachment: fixed;
      background-size: cover;
      background-position: center center;

      .info-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        .icon-x {
          @apply mb-5;
          width: 60px;
          height: 60px;
        }

        .title {
          @apply mb-8;
          color: #FFF;
          word-break: keep-all;
        }
      }
    }
  }

  /* 移动端 */
  .introduce-content-mobile {
    .img-wrapper {
      position: relative;
      background: #FFF;
      display: flex;
      justify-content: center;
      align-items: center;

      .cover {
        width: 100%;
        height: auto;
      }

      .info-wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
      }

      .title {
        font-size: 29px;
      }
    }

    .cover-1 {
      .info-wrapper {
        top: 45%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
          color: #FFF;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          &::after {
            margin: 15px 0;
            content: '';
            display: block;
            width: 48px;
            height: 1px;
            background-color: rgba(255, 255, 255, .5);
          }
        }

        .sub-text {
          font-size: 12.5px;
          line-height: 20px;
          color: #FFF;
        }
      }
    }

    .cover-2 {
      flex-direction: column;
      padding: 57.5px 0;

      .video-wrapper {
        margin: 29px 0;
        img {
          width: 336.5px;
          height: auto;
        }
        video {
          width: 336.5px;
          // height: 200px;
          height: auto;
        }
      }

      .title {
        font-size: 23px;
        // font-weight: bold;
        color: #333;
      }

      .sub-text {
        font-size: 12.5px;
        text-align: center;
        color: #333;
      }
    }

    .cover-3 {
      .info-wrapper {
        top: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
          color: #FFF;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          &::after {
            margin: 15px 0;
            content: '';
            display: block;
            width: 48px;
            height: 1px;
            background-color: rgba(255, 255, 255, .5);
          }
        }

        .sub-text {
          font-size: 12.5px;
          line-height: 20px;
          color: #FFF;
        }
      }
    }

    .cover-5 {
      .info-wrapper {
        top: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
          color: #FFF;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          &::after {
            margin: 15px 0;
            content: '';
            display: block;
            width: 48px;
            height: 1px;
            background-color: rgba(255, 255, 255, .5);
          }
        }

        .sub-text {
          font-size: 12.5px;
          line-height: 20px;
          color: #FFF;
        }
      }
    }

    .cover-7 {
      .info-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
          color: #333333;
          word-break: keep-all;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          &::after {
            margin: 15px 0;
            content: '';
            display: block;
            width: 48px;
            height: 1px;
            background-color: #333;
          }
        }

        .sub-text {
          font-size: 12.5px;
          color: #333333;
          line-height: 20px;
        }
      }
    }

    .cover-4, .cover-6 {
      flex-direction: column;
      padding: 0 19px;
      padding-bottom: 55px;
      .swiper-item {
        width: 100%;
        height: auto;
        .img-item {
          margin-top: 29px;
          width: 100%;
          height: auto;
        }
        .switch-title {
          margin-top: 55px;
          color: #333;
          font-size: 23px;
          text-align: center;

          &::after {
            content: '';
            display: block;
            width: 48px;
            height: 1px;
            background-color: #333;
            margin: 19px auto;
          }
        }
        .switch-text {
          font-size: 12.5px;
          color: #666;
          text-align: center;
        }
      }
    }
    .cover-8 {
      .info-wrapper {
        top: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .icon-x {
          margin-bottom: 20px;
          width: 29px;
          height: 29px
        }

        .title {
          color: #FFF;
          font-weight: 100;
          letter-spacing: 0.5px;

          &:last-child {
            font-weight: bold;
          }
        }
      }
    }
  }
}

.attachment-scroll .img-wrapper {
  background-attachment: scroll;
}

@keyframes brightnessIn {
  0%   { filter: brightness(5); }
  100% { filter: brightness(1); }
}
</style>
