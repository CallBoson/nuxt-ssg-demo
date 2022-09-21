<template>
  <div class="contact-us-mobile-container">
    <div class="item" :style="'contact-us-mobile-bg-1.png' | bgHost">
      <div class="left-wrapper">
        <div class="title">
          官方公众号
        </div>
        <div class="text">
          获取每日最新优惠
        </div>
      </div>
      <img class="icon" :src="'contact-img-1.png' | imgHost">
    </div>
    <div class="item" :style="'contact-us-mobile-bg-2.png' | bgHost">
      <div class="left-wrapper">
        <div class="title">
          1对1咨询
        </div>
        <div class="text">
          可领50元现金券
        </div>
      </div>
      <img class="icon" :src="'contact-img-3.png' | imgHost">
    </div>
    <div class="item" :style="'contact-us-mobile-bg-3.png' | bgHost">
      <div class="left-wrapper">
        <div class="title">
          官方小程序
        </div>
        <div class="text">
          一键解锁商城福利
        </div>
      </div>
      <img class="icon" :src="'contact-img-4.png' | imgHost">
    </div>
    <a class="item" href="tel:4000688666" :style="'contact-us-mobile-bg-4.png' | bgHost">
      <div class="left-wrapper">
        <a class="title">
          热线电话: 4000 688 666
        </a>
        <div class="text">
          周一至周日9:00-21:00 (北京时间)
        </div>
      </div>
      <img class="icon" :src="'contact-img-5.png' | imgHost">
    </a>
  </div>
</template>

<script>
export default {
  name: 'IndexConusmobile'
}
</script>

<style lang="scss" scoped>
.contact-us-mobile-container {
  background-color: #F5F5F5;
  min-height: 100vh;
  padding: 100px 30px 30px 30px;

  .item {
    @apply flex items-center;
    width: 100%;
    background-size: cover;
    padding: 25px;
    margin-bottom: 15px;

    .left-wrapper {
      flex-grow: 1;
      flex-shrink: 0;
      .title {
        font-size: 14px;
        font-weight: bold;
        color: #333;
        margin-bottom: 10px;
        line-height: 1;
      }

      .text {
        font-size: 12px;
        color: #666;
      }
    }

    .icon {
      flex-shrink: 0;
      width: 80px;
      height: auto;
    }
  }
}
</style>
