<template>
  <div class="join-container">
    <div class="cover" :style="'img-joinus-1.jpg' | bgHost" data-aos="fade-down">
      <div class="title" data-aos="fade-down" data-aos-delay="500" data-aos-once="true">
        招贤纳士
      </div>
      <div class="sub-text" data-aos="fade-down" data-aos-delay="700" data-aos-once="true">
        「 火猩未来等你加入 」
      </div>
    </div>

    <!-- 关于我们 -->
    <div class="content">
      <div class="title">
        关于我们
      </div>
      <div class="hidden xl:block">
        <div class="sub-text" data-aos="fade-in">
          火猩未来是一个以用户为中心的创新平台
        </div>
        <div class="sub-text" data-aos="fade-in">
          旗下拥有foly等创新品牌，汇集全球顶尖的产品设计师、工业设计团队
        </div>
        <div class="sub-text" data-aos="fade-in">
          联合强大的供应链体系，业务辐射3T板块。
        </div>
      </div>
      <div class="block xl:hidden">
        <div class="sub-text" data-aos="fade-in">
          火猩未来是一个以用户为中心的创新平台。旗下拥有foly等创新品牌，汇集全球顶尖的产品设计师，工业设计团队，联合强大的供应链体系，业务辐射3T板块。
        </div>
      </div>
      <div class="about-list" data-aos="fade-in">
        <div class="item">
          <img class="icon" :src="'icon-joinus-1.png' | imgHost">
          <div class="title-en">
            TREND
          </div>
          <div class="title-ch">
            趋势
          </div>
          <div class="about-sub-text">
            以用户需求为中心
          </div>
          <div class="about-sub-text">
            为服务提供根基
          </div>
        </div>
        <div class="item">
          <img class="icon" :src="'icon-joinus-2.png' | imgHost">
          <div class="title-en">
            TECH
          </div>
          <div class="title-ch">
            科技
          </div>
          <div class="about-sub-text">
            以科技为支撑
          </div>
          <div class="about-sub-text">
            为用户打造更理想的生活空间
          </div>
        </div>
        <div class="item">
          <img class="icon" :src="'icon-joinus-3.png' | imgHost">
          <div class="title-en">
            TRADE
          </div>
          <div class="title-ch">
            销售
          </div>
          <div class="about-sub-text">
            以销售为目的，依靠千万社区
          </div>
          <div class="about-sub-text">
            和亿级直播流量全渠道爆发
          </div>
        </div>
      </div>

      <!-- 公司福利 -->
      <div class="title">
        公司福利
      </div>
      <div class="sub-text" data-aos="fade-in">
        从衣食住行到个人成长，点滴关怀培育热爱的土壤；<br class="hidden xl:block">感受极具设计感的多元环境，从一方天地出发，让想象无限延长。
      </div>
      <div class="company-group" data-aos="fade-in">
        <img class="xl:order-1" :src="'img-joinus-2.jpg' | imgHost">
        <div class="group-content">
          <div class="group-title">
            丰厚的员工福利
          </div>
          <div class="group-text">
            入职即买五险一金(全额度)，每周两次下午茶，吃不完的零食礼包，还有丰厚的年终奖。入职礼包，节假日惊喜不断。
          </div>
        </div>
      </div>
      <div class="company-group" data-aos="fade-in">
        <img :src="'img-joinus-3.jpg' | imgHost">
        <div class="group-content">
          <div class="group-title">
            优美的办公环境
          </div>
          <div class="group-text">
            坐落番禺CBD，地铁上盖的甲级写字楼，来感受落地玻璃窗、宽敞的午间休息区工作体验！
          </div>
        </div>
      </div>

      <!-- 热招岗位 -->
      <div class="title">
        热招岗位
      </div>
      <div class="hiring-wrapper mt-5" data-aos="fade-in">
        <div class="hiring-title">
          在工作中收获成长和快乐，成为更好的我们
        </div>
        <div class="hiring-text">
          成就志同道合的伙伴，是火猩未来创造更多美好的动力之一
        </div>
        <div class="hiring-btn flex items-center justify-center" @click="$router.push('job')">
          查看在招职位
          <img style="width:18px;height:18px;" src="@/assets/images/icon-arrow-right.png">
        </div>
      </div>

      <!-- 联系方式 -->
      <div class="title">
        联系方式
      </div>
      <div class="contact-wrapper" data-aos="fade-in">
        <div class="item">
          <img class="icon" :src="'icon-joinus-5.png' | imgHost">
          <div class="item-wrap">
            <div class="contact-title">
              招聘专码
            </div>
            <div class="contact-text">
              人才招聘的一切信息，这里都有。加入我们吧
            </div>
          </div>
        </div>
        <div class="item">
          <img class="icon" :src="'icon-joinus-4.png' | imgHost">
          <div class="item-wrap">
            <div class="contact-title">
              简历投递
            </div>
            <div class="contact-text">
              zhaopin@holax.com
            </div>
          </div>
        </div>
        <div class="item">
          <img class="icon" :src="'icon-joinus-6.png' | imgHost" >
          <div class="item-wrap">
            <div class="contact-title">
              公司地址
            </div>
            <div class="contact-text">
              广州市番禺区南村镇汉溪大道362号粤海广场写字楼38楼3801、3804、3805、3806、3807房
            </div>
          </div>
        </div>
      </div>

      <!-- 备案号 -->
      <div class="copyright block xl:hidden">
        粤ICP备2022088305号｜官方客服 4000 688 666
      </div>
    </div>

    <!-- 移动端Tabbar -->
    <div class="mobile-tabbar">
      <div class="tabbar-item active">
        <img class="icon" :src="'icon-joinus-tabbar-1-selected.png' | imgHost">
        <div class="text">
          首页
        </div>
      </div>
      <div class="tabbar-item" @click="$router.push('job')">
        <img class="icon" :src="'icon-joinus-tabbar-2.png' | imgHost">
        <div class="text">
          职位
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexJoinUs'
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/hover.css';
@screen xl {
  .join-container {
    padding-bottom: 0px !important;
  }
  .cover {
    height: 820px !important;

    .title {
      padding-top: 130px !important;
      font-size: 60px !important;
      margin-bottom: 20px !important;
    }

    .sub-text {
      font-size: 24px !important;
    }
  }

  .content {
    padding: 0 !important;
    width: 1024px !important;
    .title {
      font-size: 45px !important;
      margin-top: 115px !important;
    }

    .sub-text {
      font-size: 18px !important;
      line-height: 32px !important;
    }

    .about-list {
      .item {
        width: 332px !important;
        border-radius: 0 !important;

        .title-en, .title-ch {
          font-size: 28px !important;
        }

        .about-sub-text {
          font-size: 18px !important;
        }
      }
    }

    .company-group {
      border-radius: 0 !important;
      img {
        height: 308px !important;
      }

      .group-title {
        font-size: 28px !important;
      }

      .group-text {
        font-size: 18px !important;
      }
    }

    .hiring-wrapper {
      border-radius: 0px !important;
      .hiring-title {
        font-size: 28px !important;
      }
      .hiring-text {
        font-size: 18px !important;
        margin-bottom: 38px !important;
      }
      .hiring-btn {
        border-radius: 0 !important;
      }
    }

    .contact-wrapper {
      .item {
        width: 332px !important;
        .icon {
          width: 90px !important;
          height: 90px !important;
        }
      }
    }
  }
}

.join-container {
  background-color: #F5F5F5;
  padding-bottom: 70px;

  .cover {
    height: 400px;
    width: 100%;
    background-size: cover;
    background-position: center;

    .title {
      font-size: 40px;
      padding-top: 80px;
      margin-bottom: 0px;
      color: #FFF;
      // font-weight: bold;
      text-align: center;
      letter-spacing: 1px;
    }

    .sub-text {
      font-size: 18px;
      color: #FFF;
      text-align: center;
    }
  }

  .content {
    @apply mx-auto;
    padding: 20px;
    content-visibility: auto;

    .title {
      @apply text-left xl:text-center mb-3;
      font-size: 28px;
      margin-top: 35px;
      // font-weight: 600;
    }

    .sub-text {
      @apply leading-relaxed text-left xl:text-center;
      font-size: 13px;
      line-height: 24px;
      color: #666;
    }

    .about-list {
      @apply mt-5 flex justify-between flex-col xl:flex-row;
      .item {
        @apply my-1 py-5 xl:py-20 flex flex-col justify-center items-center;
        flex-shrink: 0;
        width: 100%;
        background-color: #FFF;
        border-radius: 15px;

        .icon {
          @apply w-32 h-auto;
        }

        .title-en, .title-ch {
          // @apply font-bold;
          font-size: 24px;
          color: #333;
        }

        .title-ch {
          @apply mb-5;
        }

        .about-sub-text {
          font-size: 15px;
          color: #666;
        }
      }
    }

    .company-group {
      @apply flex flex-col xl:flex-row mt-8;
      overflow: hidden;
      background-color: #FFF;
      border-radius: 10px;

      & > * {
        @apply flex-grow-0 xl:flex-grow;
      }

      img {
        height: 180px;
        object-fit: cover;
      }

      .group-content {
        @apply flex flex-col justify-center p-10;

        .group-title {
          // @apply font-bold;
          font-size: 24px;
          display: flex;
          flex-direction: column;

          &::after {
            @apply mt-3;
            content: '';
            display: block;
            width: 32px;
            height: 2px;
            background-color: #333;
          }
        }

        .group-text {
          @apply leading-relaxed pt-3;
          font-size: 15px;
          color: #666;
        }
      }
    }

    .hiring-wrapper {
      @apply p-10;
      background-color: #FFF;
      border-radius: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .hiring-title {
        // font-weight: bolder;
        font-size: 24px;
        text-align: center;
      }

      .hiring-text {
        @apply my-3;
        margin-bottom: 30px;
        color: #666;
        font-size: 15.5px;
        line-height: 20px;
        text-align: center;
      }

      .hiring-btn {
        border: 1px solid #333;
        color: #333;
        border-radius: 20px;
        width: 174px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
        transition: all .3s;

        &:hover {
          color: #FFF;
          background-color: #333;
          border: 1px solid #333;
        }
      }
    }

    .contact-wrapper {
      @apply my-5 mb-8 xl:mb-28 flex flex-col xl:flex-row justify-between overflow-hidden xl:overflow-visible;
      border-radius: 10px;

      .item {
        @apply px-5 xl:px-7 py-5 xl:py-12 flex flex-row xl:flex-col items-center xl:justify-center;
        width: 100%;
        background-color: #FFF;
        box-sizing: border-box;
        border-bottom: 2px solid #F5F5F5;

        &:not(&:first-child) {
          .icon {
            transform: scale(.7);
          }
        }

        .icon {
          @apply xl:mb-5;
          width: 73px;
          height: 73px;
        }

        .item-wrap {
          @apply ml-3 xl:ml-0 text-left xl:text-center;

          .contact-title {
            @apply mb-2 font-bold;
            font-size: 18px;
            color: #333;
          }

          .contact-text {
            @apply text-xs;
            min-height: 30px;
            color: #666666;
          }
        }
      }
    }

    .copyright {
      text-align: center;
      color: #999;
      font-size: 13.5px;
    }
  }

  .mobile-tabbar {
    @apply flex xl:hidden items-center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70px;
    background-color: #FFF;
    box-shadow: 0px 2px 20px 0px rgba(0,0,0,0.1000);

    .tabbar-item {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &.active .text {
        color: #333 !important;
      }

      .icon {
        width: 25px;
        height: 25px;
        margin-bottom: 5px;
      }

      .text {
        color: #999;
        font-size: 14px;
      }
    }
  }
}
</style>
