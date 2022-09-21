<template>
  <div class="hair-dryer-container">
    <PopUp ref="hairDryer-popup-1">
      <div class="code-float">
        <img class="code" :src="'contact-img-3.png' | imgHost">
        <div class="text">领取50元现金券</div>
      </div>
    </PopUp>
    <PopUp ref="hairDryer-popup-2">
      <div class="code-float">
        <img class="code" :src="'contact-img-4.png' | imgHost">
        <div class="text">领商城福利</div>
      </div>
    </PopUp>
    <!-- 移动端 -->
    <div class="mobile">
      <div class="index-wrapper">
        <img class="cover" :src="'hairDryer/index.jpg' | imgHost">
        <div class="info-wrapper">
          <img class="icon-center" :src="'hairDryer/icon-index-center.png' | imgHost">
          <div class="flex justify-center items-center">
            <div class="index-text-1" style="margin-right: 5px;">澎湃动力</div>
            <div class="index-text-2">高速快干</div>
          </div>
        </div>
      </div>

      <img class="common-img" :src="'hairDryer/2.jpg' | imgHost">
      <img class="common-img" :src="'hairDryer/3.jpg' | imgHost">
      <img class="common-img" :src="'hairDryer/4.jpg' | imgHost">
      <img class="common-img" :src="'hairDryer/5.jpg' | imgHost">
      <img class="common-img" :src="'hairDryer/6.jpg' | imgHost">
      <img class="common-img" :src="'hairDryer/7.jpg' | imgHost">
      <img class="common-img" :src="'hairDryer/8.jpg' | imgHost">
      <img class="common-img" :src="'hairDryer/9_01.jpg' | imgHost">
      <img class="common-img" :src="'hairDryer/9_02.gif' | imgHost">
      <!-- <img class="common-img" :src="'hairDryer/10_01.jpg' | imgHost"> -->
      <img class="common-img" :src="'hairDryer/10.gif' | imgHost">
      <img class="common-img" :src="'hairDryer/11.jpg' | imgHost">
      <img class="common-img" :src="'hairDryer/12.jpg' | imgHost">
      <img class="common-img" :src="'hairDryer/13.jpg' | imgHost">
      <img class="common-img" :src="'hairDryer/14.jpg' | imgHost">

      <!-- 底部菜单 -->
      <div class="bottom-wrapper" id="bottom_wrapper_mobile">
        <div class="kefu-wrapper flex flex-col items-center" @click="$refs['hairDryer-popup-1'].open()">
          <img class="icon-kefu" :src="'hairDryer/icon-kefu.png' | imgHost">
          <div class="kefu-text">
            1对1客服
          </div>
        </div>
        <div class="buy-btn" @click="$refs['hairDryer-popup-2'].open()">
          立即购买
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PopUp from '~/components/PopUp.vue'
export default {
    name: "IndexHairDryer",
    data() {
      return{
        timer: null,
      }
    },
    mounted() {
      const self = this
      clearTimeout(this.timer)
      window.onscroll = function (v){
        const wScrollY = document.documentElement.scrollTop||document.body.scrollTop
        this.timer = setTimeout(()=>{
          if(wScrollY > 0) {
            document.getElementById('bottom_wrapper_mobile').style.visibility = 'visible'
          } else {
            document.getElementById('bottom_wrapper_mobile').style.visibility = 'hidden'
          }
        }, 100)
      }
    },
    beforeDestroy() {
      clearTimeout(this.timer)
      this.timer = null
    },
    methods: {
        reloadPage() {
            location.reload();
        }
    },
    components: { PopUp }
}
</script>

<style lang="scss" scoped>
.hair-dryer-container {
  /* 移动端 */
.code-float {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(2,0,36,0.1);
  border-radius: 4px;

  .code {
    width: 130px;
    height: auto;
    margin-bottom: 8px;
  }

  .text {
    font-size: 13px;
    color: #333;
  }
}
  .mobile {
    .index-wrapper {
      position: relative;
      .cover {
        width: 100%;
        height: auto;
      }

      .info-wrapper {
        position: absolute;
        top: 15%;
        width: 100%;
        text-align: center;

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
      }
    }

    .common-img {
      width: 100%;
      height: auto;
    }
    #bottom_wrapper_mobile {
      visibility: hidden;
    }
    .bottom-wrapper {
      position: sticky;
      bottom: 0;
      width: 100%;
      height: 58px;
      background-color: rgba(1,0,21,.8);
      display: flex;
      align-items: center;

      .kefu-wrapper {
        margin-left: 40px;
        margin-right: 30px;
        .icon-kefu {
          width: 19px;
          height: 19px;
          margin-bottom: 3px;
        }
        .kefu-text {
          color: #FFF;
          font-size: 12px;
          text-align: center;
        }
      }

      .buy-btn {
        background-color: #3F53FF;
        border-radius: 2px;
        width: 250px;
        height: 38px;
        line-height: 38px;
        color: #FFF;
        text-align: center;
      }
    }
  }
}
</style>
