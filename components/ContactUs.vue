<template>
  <div class="contact-wrapper-pc">
    <div style="width: 1200px;" class="flex items-center">
      <img
        class="bg-phone"
        :src="'contact-bg-phone.png' | imgHost"
      >
      <div class="left mr-auto">
        <div class="title">
          关注我们
        </div>
        <div class="sub-text">
          阅读有想法的优质内容
        </div>
        <div class="sub-text">
          探索有品味的趣味活动
        </div>
        <div class="sub-text">
          获取每日最新品牌资讯
        </div>
      </div>
      <div class="right">
        <img class="code" :src="'contact-img-1.png' | imgHost">
        <div class="text-1">
          立即扫码
        </div>
        <div class="text-2">
          更多优惠 尽在于此
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.contact-wrapper-pc {
    position: relative;
    width: 100%;
    height: 600px;
    background-image: url('@/assets/images/contact-bg.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 180px;

    .bg-phone {
        position: absolute;
        bottom: -122px;
        left: 50%;
        transform: translate(-50%, 0px);
        width: 322px;
        height: auto;
    }

    .left, .right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .left {
        .title {
            position: relative;
            left: -19px;
            font-size: 35px;
            color: #333;
            display: flex;
            flex-direction: column;

            &::after {
                content: '';
                display: block;
                width: 50px;
                height: 2px;
                background-color: #3F53FF;
                margin: 28px 0;
            }
        }

        .sub-text {
            font-size: 18px;
            color: #666;
            line-height: 32px;
        }
    }

    .right {
        .code {
            @apply mb-3;
            width: 110px;
            height: 110px;
        }

        .text-1, .text-2 {
            font-size: 17px;
            font-weight: bold;
            color: #333;
            text-align: center;
        }

        .text-2 {
          font-weight: 400;
        }
    }
}
</style>
