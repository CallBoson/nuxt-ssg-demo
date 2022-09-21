<template>
  <div class="job-detail-container">
    <div class="back-btn hidden xl:flex items-center" @click="$router.push('job')">
      <img class="icon-back" :src="'icon-back.png' | imgHost">
      返回
    </div>
    <div class="content-wrapper xl:mb-8">
      <div class="job-name">
        {{ detail.job }}
      </div>
      <div class="salary">
        {{ detail.salary }}
      </div>
      <div class="title">
        岗位职责
      </div>
      <div class="job-duty">{{ detail.job_duty }}</div>
      <div class="title">
        职位要求
      </div>
      <div class="job-requirement">{{ detail.job_requirement }}</div>
      <div class="sent-email">
        简历投递：{{ detail.sent_email }}
      </div>
      <div class="more-jobs-wrapper flex xl:hidden" @click="$router.push('job')">
        <div class="flex-grow font-bold text-sm">
          更多职位
        </div>
        <div class="arrow" />
      </div>
      <div class="copy-btn-pc hidden xl:block" @click="copyEmail">
        复制邮箱投递地址
      </div>
      <div class="copy-btn-mobile block xl:hidden" @click="copyEmail">
        复制邮箱投递地址
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexJobDetail',
  async asyncData ({ $axios, params }) {
    const detail = await $axios.get(`/recruit/detail?id=${params.id}`)
    return { detail }
  },
  methods: {
    copyEmail () {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(this.detail.sent_email)
      } else {
        const textarea = document.createElement('textarea')
        document.body.appendChild(textarea)
        // 隐藏此输入框
        textarea.style.position = 'fixed'
        textarea.style.clip = 'rect(0 0 0 0)'
        textarea.style.top = '10px'
        // 赋值
        textarea.value = this.detail.sent_email
        // 选中
        textarea.select()
        // 复制
        document.execCommand('copy', true)
        // 移除输入框
        document.body.removeChild(textarea)
      }
      this.$toast('复制成功，赶紧去投递吧~')
    }
  }
}
</script>

<style lang="scss" scoped>
@screen xl {
  .content-wrapper {
    width: 1024px !important;
  }
}
.job-detail-container {
  flex-grow: 1;
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  padding-top: 70px;

  .back-btn {
    padding-top: 30px;
    padding-bottom: 20px;
    width: 1024px;
    margin: 0 auto;
    color: #666666;
    font-size: 18px;
    cursor: pointer;

    .icon-back {
      width: 18px;
      height: 18px;
    }
  }

  .content-wrapper {
    @apply mx-auto;
    width: 100%;
    box-sizing: border-box;
    background-color: #FFF;
    flex-grow: 1;
    padding: 25px;

    .job-name {
      color: #333;
      font-weight: bold;
      @apply text-xl;
      margin-bottom: 10px;
    }

    .salary {
      @apply text-sm;
      color: #666;
    }

    .title {
      @apply text-lg;
      font-weight: bold;
      color: #333;
      display: flex;
      align-items: center;
      margin-top: 40px;
      margin-bottom: 10px;

      &::before {
        content: '';
        width: 4px;
        height: 15px;
        background-color: #0C20CD;
        margin-right: 5px;
      }
    }

    .job-duty, .job-requirement {
      @apply text-sm;
      color: #666;
      line-height: 25px;
      white-space: pre-wrap;
    }

    .sent-email {
      @apply text-base;
      color: #0C20CD;
      font-weight: bold;
      margin-top: 20px;
      margin-bottom: 40px;
    }

    .copy-btn-pc {
      width: 160px;
      height: 36px;
      line-height: 36px;
      background-color: #3F53FF;
      border-radius: 2px;
      text-align: center;
      color: #FFF;
      font-size: 14px;

      &:hover {
        cursor: pointer;
        filter: brightness(80%);
      }
    }

    .copy-btn-mobile {
      @apply shadow-lg;
      position: sticky;
      bottom: 20px;
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      margin: 0 auto;
      background-color: rgba(63,83, 255,1);
      text-align: center;
      color: #FFF;
      border-radius: 5px;
    }

    .more-jobs-wrapper {
      margin-bottom: 30px;
      background-color: #F5F5F5;
      border-radius: 7px;
      padding: 10px;

      .arrow {
        position: relative;
        top: 5px;
        border-top: 2px solid #666666;
        border-right: 2px solid #666666;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        margin-left: 5px;
      }
    }
  }
}
</style>
