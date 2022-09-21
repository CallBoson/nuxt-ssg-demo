<template>
  <div>
    <!-- 招商合作移动端弹出层 -->
    <PopUp ref="cooperation-popup-mobile" position="center">
      <div class="cooperation-float-mobile">
        <img class="code" :src="'contact-img-4.png' | imgHost">
        <div>领商城福利</div>
        <img class="close" :src="'icon-close.png' | imgHost" @click="$refs['cooperation-popup-mobile'].close()">
      </div>
    </PopUp>
    <div id="nav-buy-btn" class="buy-btn relative">
      立即购买
      <div class="cooperation-float">
        <img class="code" :src="'contact-img-4.png' | imgHost">
        <div>领商城福利</div>
      </div>
    </div>
    <img class="icon-shop" :src="'icon-shop.png' | imgHost" @click="$refs['cooperation-popup-mobile'].open()">
  </div>
</template>

<script>
import PopUp from '@/components/PopUp.vue'
export default {
  components: { PopUp }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/hover.css';
.cooperation-float-mobile {
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    .code {
        width: 130px;
        height: auto;
        margin-bottom: 8px;
    }

    .close {
        position: absolute !important;
        bottom: -45px;
        width: 30px;
        height: 30px;
    }

    > div {
        font-weight: bold;
        font-size: 13px;
        color: #333;
    }
}

.cooperation-float {
    position: absolute;
    top: 67px;
    width: 180px;
    height: 180px;
    background-color: #FFF;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    transition: all .3s;

    > *:not(.close) {
      position: relative;
      top: 8px;
    }

    img {
        width: 114px;
        height: 114px;
    }

    > div {
        // font-weight: bold;
        font-size: 14px;
        color: #333;
    }
}

.buy-btn {
    @apply mr-0 hidden xl:flex;
    font-size: 18px;
    width: 116px;
    height: 44px;
    line-height: 44px;
    justify-content: center;
    align-items: center;
    background-color: #3F53FF;
    color: #FFF;

    &:hover {
        .cooperation-float {
            visibility: visible;
            opacity: 1;
        }
    }
}

.icon-shop {
    @apply block xl:hidden;
    width: 20px;
    height: 20px;
}
</style>
