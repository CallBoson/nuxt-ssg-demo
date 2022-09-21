<template>
  <div class="footer" :class="isHide">
    <!-- 移动端二维码弹窗 -->
    <PopUp ref="popup">
      <div class="popup-back-mobile">
        <template v-if="current_popup_type === 1">
          <!-- 官方公众号 -->
          <img :src="'contact-img-1.png' | imgHost">
        </template>
        <template v-else-if="current_popup_type === 2">
          <!-- 官方小程序 -->
          <img :src="'contact-img-4.png' | imgHost">
        </template>
        <template v-else-if="current_popup_type === 3">
          <!-- 1对1咨询 -->
          <img :src="'contact-img-3.png' | imgHost">
        </template>
        <template v-else-if="current_popup_type === 4">
          <!-- 热线电话 -->
          <img class="call-img" :src="'contact-img-5.png' | imgHost">
          <div class="call-text">
            热线电话：4000-688-666
          </div>
          <div class="call-text">
            周一至周日：9:00-21:00（北京时间）
          </div>
        </template>
        <template v-else-if="current_popup_type === 5">
          <!-- 厂家合作 -->
          <img :src="'cooperation-code-1.png' | imgHost">
        </template>
        <template v-else-if="current_popup_type === 6">
          <!-- 代理合作 -->
          <img :src="'cooperation-code-2.png' | imgHost">
        </template>
        <template v-else-if="current_popup_type === 7">
          <!-- 廉洁监察 -->
          <img :src="'cooperation-code-3.jpg' | imgHost">
        </template>
      </div>
    </PopUp>
    <!-- pc端 -->
    <div class="pc mx-auto justify-between hidden xl:flex">
      <img class="logobrand cursor-pointer" src="@/assets/images/logo.png" @click="$router.push('/')">
      <div v-for="(nav_item, nav_index) in nav_data" :key="nav_index" class="footer-list-item pb-16">
        <div class="l-head">
          {{ nav_item.head }}
        </div>
        <div v-for="(head_item, head_index) in nav_item.row_list"
            :id="head_item.idName"
            :key="head_index"
            class="l-row"
            @click="head_item.hasOwnProperty('fn') ? head_item.fn() : ''"
            @mouseenter="head_item.hasOwnProperty('moseenter') ? head_item.moseenter() : ''">
          {{ head_item.row }}
          <div class="popup-back">
            <template v-if="current_popup_type === 1">
              <!-- 官方公众号 -->
              <img :src="'contact-img-1.png' | imgHost">
            </template>
            <template v-else-if="current_popup_type === 2">
              <!-- 官方小程序 -->
              <img :src="'contact-img-4.png' | imgHost">
            </template>
            <template v-else-if="current_popup_type === 3">
              <!-- 1对1咨询 -->
              <img :src="'contact-img-3.png' | imgHost">
            </template>
            <template v-else-if="current_popup_type === 4">
              <!-- 热线电话 -->
              <img class="call-img" :src="'contact-img-5.png' | imgHost">
              <div class="call-text">
                热线电话：4000-688-666
              </div>
              <div class="call-text">
                周一至周日：9:00-21:00（北京时间）
              </div>
            </template>
            <template v-else-if="current_popup_type === 5">
              <!-- 厂家合作 -->
              <img :src="'cooperation-code-1.png' | imgHost">
            </template>
            <template v-else-if="current_popup_type === 6">
              <!-- 代理合作 -->
              <img :src="'cooperation-code-2.png' | imgHost">
            </template>
            <template v-else-if="current_popup_type === 7">
              <!-- 廉洁监察 -->
              <img :src="'cooperation-code-3.jpg' | imgHost">
            </template>
          </div>
        </div>
      </div>
      <div class="copyright-wrapper flex justify-center py-6">
        <a href="https://beian.miit.gov.cn/" target="_blank" class="mr-5 cursor-pointer beian-text">
          粤ICP备2022088305号
        </a>
        <div>官方客服 4000 688 666</div>
      </div>
    </div>

    <!-- 移动端 -->
    <div class="mobile block xl:hidden">
      <div v-for="(nav_item, nav_index) in nav_data" :key="nav_index" class="footer-list-item" :class="mobile_unfold_index === nav_index ? 'unfold' : ''">
        <div class="l-head flex items-center mx-8" @click="unfold_mobile(nav_index)">
          <div class="flex-grow">
            {{ nav_item.head }}
          </div>
          <div class="mr-3">
            <img v-if="mobile_unfold_index === nav_index" class="arrow" :src="'arrow-down.png' | imgHost">
            <img v-else class="arrow" :src="'arrow-right.png' | imgHost">
          </div>
        </div>
        <!-- <div class="mx-8 flex" style="width:100%;height:1px;background-color:rgba(255, 255, 255, .2);"></div> -->
        <div v-for="(head_item, head_index) in nav_item.row_list" :key="head_index" class="l-row px-8" @click="head_item.fn()">
          {{ head_item.row }}
        </div>
      </div>
      <img style="width: 120px;height: auto;" class="mx-auto mt-10" src="@/assets/images/footer-logo-mobile.png" @click="$router.push('/')">
      <div class="copyright-wrapper flex justify-center pt-3 pb-5">
        <a href="https://beian.miit.gov.cn/" target="_blank" class="mr-0 cursor-pointer beian-text">
          粤ICP备2022088305号
        </a>
        <div style="margin: 0 3px;">
          |
        </div>
        <div @click="toCall">官方客服 4000 688 666</div>
      </div>
    </div>
  </div>
</template>

<script>
import { navigateTo } from '~/plugins/utils'
import PopUp from './PopUp.vue'
export default {
  components: {
    PopUp
  },
  data () {
    return {
      current_popup_type: 1,
      mobile_unfold_index: -1,
      nav_data: [
        {
          head: '产品分类',
          row_list: [
            {
              row: '高速吹风机',
              fn: () => { this.$isMobile ? navigateTo('/hairDryer/hairDryer-mobile') : navigateTo('/hairDryer/hairDryer-pc') }
            }
          ]
        },
        {
          head: '关于我们',
          row_list: [
            {
              row: '了解我们',
              fn: () => { navigateTo('/introduce') }
            },
            {
              row: '加入我们',
              fn: () => { navigateTo('/joinUs') }
            }
          ]
        },
        {
          head: '联系我们',
          row_list: [
            {
              idName: 'footer-gfgzh',
              row: '官方公众号',
              fn: () => { this.current_popup_type = 1; if (screen.width >= 1280) { return }; this.$refs.popup.open() },
              moseenter: () => { this.current_popup_type = 1 }
            },
            {
              idName: 'footer-gfxcx',
              row: '官方小程序',
              fn: () => { this.current_popup_type = 2; if (screen.width >= 1280) { return }; this.$refs.popup.open() },
              moseenter: () => { this.current_popup_type = 2 }
            },
            {
              idName: 'footer-1d1zx',
              row: '1对1咨询',
              fn: () => { this.current_popup_type = 3; if (screen.width >= 1280) { return }; this.$refs.popup.open() },
              moseenter: () => { this.current_popup_type = 3 }
            },
            {
              idName: 'footer-rxdh',
              row: '热线电话',
              fn: () => {
                this.current_popup_type = 4
                this.toCall()
              },
              // fn: () => { this.current_popup_type = 4; if (screen.width >= 640) { return }; this.$refs.popup.open() },
              moseenter: () => { this.current_popup_type = 4 }
            }
          ]
        },
        {
          head: '招商合作',
          row_list: [
            {
              idName: 'footer-cjhz',
              row: '厂家合作',
              fn: () => { this.current_popup_type = 5; if (screen.width >= 1280) { return }; this.$refs.popup.open() },
              moseenter: () => { this.current_popup_type = 5 }
            },
            {
              idName: 'footer-dlhz',
              row: '代理合作',
              fn: () => { this.current_popup_type = 6; if (screen.width >= 1280) { return }; this.$refs.popup.open() },
              moseenter: () => { this.current_popup_type = 6 }
            },
            {
              idName: 'footer-ljjb',
              row: '廉洁监察',
              fn: () => { this.current_popup_type = 7; if (screen.width >= 1280) { return }; this.$refs.popup.open() },
              moseenter: () => { this.current_popup_type = 7 }
            }
          ]
        },
        {
          head: '支持',
          row_list: [
            {
              row: '隐私与法律',
              fn: () => { navigateTo('/privacy') }
            }
          ]
        }
      ]
    }
  },
  computed: {
    isHide () {
      if (this.$route.name === 'index-job' || this.$route.name === 'index-joinUs' || this.$route.name === 'index-jobDetail') {
        return 'hidden xl:block'
      } else {
        return ''
      }
    }
  },
  methods: {
    unfold_mobile (idx) {
      if (this.mobile_unfold_index === idx) {
        this.mobile_unfold_index = -1
      } else {
        this.mobile_unfold_index = idx
      }
    },
    toBeian () {
      window.open('https://beian.miit.gov.cn/', '_blank')
    },
    toCall () {
      if (screen.width <= 640) {
        window.location.href = 'tel:4000688666'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pc {
    position: relative;
    padding-top: 80px;
    padding-bottom: 120px;
    @apply w-11/12 lg:w-8/12;
    border-bottom: 1px solid rgba(255, 255, 255, .2);

    .logobrand {
        width: 114px;
        height: 20px;
    }

    .footer-list-item {
        .popup-back {
          position: absolute;
          bottom: 100%;
          right: 50%;
          transform: translate(50%,0%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #FFF;
          border-radius: 8px;
          transition: all .2s;
          opacity: 0;
          visibility: hidden;
          width: 180px;
          height: 180px;

          img {
            width: 130px;
            height: auto;
          }

          .call-img {
            position: relative;
            top: -10px;
            margin: 0 auto;
            width: 90px;
          }
          .call-text {
            position: relative;
            top: -15px;
            padding: 0 5px;
            color: #333;
            font-size: 13px;
            text-align: center;
          }
        }

        &:nth-child(4), &:nth-child(5) {
          .l-row:hover .popup-back {
            opacity: 1;
            visibility: visible;
          }
        }

        .l-head {
            font-size: 16px;
            color: #FFF;
            margin-bottom: 40px;
        }

        .l-row {
            position: relative;
            margin-bottom: 25px;
            color: rgba(255,255,255,.5);
            font-size: 16px;
            cursor: pointer;

            &:hover {
                color: #FFF;
            }
        }
    }

    .copyright-wrapper {
      border-top: 1px solid rgba(255, 255, 255, .2);
      position: absolute;
      bottom: 0px;
      width: 100%;
      text-align: center;
      & > * {
        text-align: center;
        font-size: 16px;
        color: rgba(255, 255, 255, .2);
      }

      .beian-text {
        &:hover {
          color: #FFF !important;
        }
      }
    }
}

.mobile {
    .logobrand {
        width: 114px;
        height: 20px;
    }

    .footer-list-item {
        max-height: 60px;
        line-height: 60px;
        transition: max-height .5s;

        &.unfold {
            max-height: 350px;
            .l-row {
                visibility: visible;
            }
        }

        .l-head {
            font-size: 15px;
            color: #FFF;
            border-bottom: 1px solid rgba(255, 255, 255, .2);

            .arrow {
              width: 15px;
              height: 15px;
            }
        }

        .l-row {
            visibility: hidden;
            color: #FFF;
            font-size: 14px;
            cursor: pointer;
            background-color: #100d2f;
        }
    }

    .copyright-wrapper {
      & > * {
        text-align: center;
        font-size: 14px;
        color: rgba(255, 255, 255, .2);
      }

      .beian-text {
        &:hover {
          color: #FFF !important;
        }
      }
    }
}

.footer {
  background-color: #020024;
}

.popup-back-mobile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  border-radius: 8px;
  width: 180px;
  height: 180px;

  img {
    width: 130px;
    height: auto;
  }

  .call-img {
    margin: 0 auto;
    width: 90px;
  }
  .call-text {
    padding: 0 5px;
    color: #333;
    font-size: 13px;
    line-height: 21px;
    text-align: center;
  }
}
</style>
