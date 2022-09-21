<template>
  <div class="contact-us-mobile-container">
    <div class="item" :style="'contact-us-mobile-bg-5.png' | bgHost">
      <div class="left-wrapper">
        <div class="title">
          厂家合作
        </div>
      </div>
      <img class="icon object-cover" :src="'cooperation-code-1.png' | imgHost">
    </div>
    <div class="item" :style="'contact-us-mobile-bg-5.png' | bgHost">
      <div class="left-wrapper">
        <div class="title">
          代理合作
        </div>
      </div>
      <img class="icon object-cover" :src="'cooperation-code-2.png' | imgHost">
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexAttractmobile'
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
    padding: 30px;
    margin-bottom: 15px;

    .left-wrapper {
      flex-grow: 1;
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
      width: 80px;
      height: auto;
    }
  }
}
</style>
