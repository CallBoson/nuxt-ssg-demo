<template>
  <div v-if="totalPage > 0" class="ssr-pager">
    <div class="pager-box">
      <!-- 上一页按钮 -->
      <template>
        <button
          v-if="currentPage === 1 || nowPage === 1"
          type="button"
          :class="['btn btn-prev', {'disabled': nowPage === 1}]"
          @click="prevPage"
        />
      </template>

      <!-- 页码列表 -->
      <div class="pager-ul">
        <!-- 第一页 -->
        <template>
          <span
            :class="['number', {'active': nowPage === 1}]"
            @click="changePage(1)"
          >1</span>
        </template>

        <!-- 省略页码符号 -->
        <span
          v-if="totalPage > pagerCount && nowPage >= jumpNum"
          class="number point point-prev"
          @click="jumpFivePage('prev')"
        >...</span>

        <!-- 第二页 -->
        <template>
          <span
            v-if="(totalPage <= pagerCount || nowPage < jumpNum) && totalPage > 2"
            :class="['number', {'active': nowPage === 2}]"
            @click="changePage(2)"
          >2</span>
        </template>

        <!-- 中间页 -->
        <template>
          <span
            v-for="i in pageList"
            :key="i"
            :class="['number', {'active': nowPage === i}]"
            @click="changePage(i)"
          >{{ i }}</span>
        </template>

        <!-- 尾部省略页码符号 -->
        <span
          v-if="totalPage > pagerCount && nowPage < (totalPage - addNum - 1)"
          class="number point point-next"
          @click="jumpFivePage('next')"
        >...</span>

        <!-- 倒数第一页 -->
        <template>
          <span
            v-if="totalPage > 1"
            :class="['number', {'active': nowPage === totalPage}]"
            @click="changePage(totalPage)"
          >{{ totalPage }}</span>
        </template>
      </div>

      <!-- 下一页按钮 -->
      <template>
        <button
          type="button"
          :class="['btn btn-next', {'disabled': nowPage === totalPage}]"
          @click="nextPage"
        />
      </template>

      <div class="pager-jump">
        前往
        <input
          v-model="redirectNum"
          class="jump-input"
          type="number"
          min="1"
          :max="totalPage"
          @change="jumpPage"
          @blur="!confirmBtn && jumpPage"
        >
        页
      </div>
      <button v-if="confirmBtn" type="button" class="btn btn-jump">
        确定
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PaginationPc',
  props: {
    total: { // 总条数
      type: Number,
      default: 0
    },
    pageSize: { // 每一页的个数
      type: Number,
      default: 10
    },
    pagerCount: { // 页码按钮的数量, 默认7，只取从5到21之间的奇数，如果传入偶数，自动减1
      type: Number,
      default: (val) => {
        if (!val || isNaN(val) || val < 5 || val > 21) {
          return 7
        }
        let num = 7
        for (let i = 5; i <= 21; i++) {
          if (i % 2 !== 0) {
            if (val >= i && val < i + 2) {
              num = i
            }
          }
        }
        return num
      }
    },
    currentPage: { // 当前页码
      type: Number,
      default: 1
    },
    pageCount: { // 总页数
      type: Number,
      default: 0
    },
    confirmBtn: { // 是否显示确认按钮,默认不显示
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      nowPage: 1, // 当前页码
      redirectNum: 1 // 前往页码
    }
  },
  computed: {
    totalPage () { // 计算总页码
      return this.pageCount > 0 ? this.pageCount : Math.ceil(this.total / this.pageSize)
    },
    jumpNum () {
      // jumpNum是根据pagerCount的计算出现省略号折叠的页数
      return (this.pagerCount + 3) / 2
    },
    addNum () {
      // addNum表示当出现折叠省略号时中间应该额外增加的数量的一半
      return (this.pagerCount - 3) / 2
    },
    pageList () { // 计算中间页生成的页码
      let arr = []
      if (this.totalPage <= 4) { // 头两页和尾两页是固定的，不用生成中间页
        return []
      } else if (this.totalPage > 4 && this.totalPage <= this.pagerCount + 1) {
        arr = Array.from(new Array(this.totalPage - 1).keys()).slice(3)
      } else if (this.totalPage > this.pagerCount + 1) {
        if (this.nowPage < this.jumpNum) {
          arr = Array.from(new Array(this.pagerCount).keys()).slice(3)
        } else if (this.nowPage >= this.jumpNum && this.nowPage < this.totalPage - this.addNum - 1) { // 从jumpNum页数开始折叠
          const maxNum = this.nowPage + this.addNum
          arr = Array.from(new Array(maxNum + 1).keys()).slice(this.nowPage - this.addNum)
        } else if (this.nowPage >= this.totalPage - this.addNum - 1) { // 最后依据addNum的值判断不再显示省略号并且页码数是固定的
          const maxNum = this.totalPage
          const reduceNum = this.addNum * 2 + 1
          arr = Array.from(new Array(maxNum - 1).keys()).slice(this.totalPage - reduceNum)
        }
      }
      return arr
    }
  },
  watch: {
    currentPage (newval) {
      this.nowPage = newval
      this.redirectNum = newval
    }
  },
  created () {
    this.nowPage = this.currentPage
    this.redirectNum = this.nowPage
  },
  methods: {
    prevPage () {
      if (this.nowPage <= 1) {
        return false
      }
      this.nowPage -= 1
      this.redirectNum = this.nowPage
      this.$emit('changePager', this.nowPage)
    },
    changePage (page) {
      if (page > 0) {
        this.nowPage = page
        this.redirectNum = page
        this.$emit('changePager', this.nowPage)
      }
    },
    jumpPage (page) {
      const str = String(page.target.value)
      if (str.charAt(0) >= 1) {
        const val = parseInt(str)
        if (val <= this.totalPage) {
          this.redirectNum = val
        } else {
          this.redirectNum = this.totalPage
        }
      } else {
        this.redirectNum = 1
      }
      this.nowPage = Number(this.redirectNum)
      this.$emit('changePager', this.nowPage)
    },
    nextPage () {
      if (this.nowPage >= this.totalPage) {
        return false
      }
      this.nowPage += 1
      this.redirectNum = this.nowPage
      this.$emit('changePager', this.nowPage)
    },
    jumpFivePage (type) {
      if (type === 'prev') {
        this.nowPage -= (this.pagerCount - 2)
        if (this.nowPage <= 1) {
          this.nowPage = 1
        }
      } else {
        this.nowPage += (this.pagerCount - 2)
        if (this.nowPage >= this.totalPage) {
          this.nowPage = this.totalPage
        }
      }
      this.redirectNum = this.nowPage
      this.$emit('changePager', this.nowPage)
    }
  }
}
</script>
<style lang="scss" scoped>
.ssr-pager {
  padding: 40px 0;
  text-align: center;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  font-size: 14px;
  color: #606266;

  .pager-box {
    display: inline-block;
    .btn {
      display: inline-block;
      width: 10px;
      height: 10px;
      cursor: pointer;

      &.btn-prev {
        border-top: 2px solid #606266;
        border-left: 2px solid #606266;
        transform: rotate(-45deg);
      }

      &.btn-next {
        border-top: 2px solid #606266;
        border-right: 2px solid #606266;
        transform: rotate(45deg);
      }

      &:hover {
        color: #ff6900;
      }
      &.disabled {
        cursor: not-allowed;
        border-color: #C0C4CC;
      }
    }

    .pager-ul {
      display: inline-block;
      margin: 0 4px;
      vertical-align: top;
      .number {
        display: inline-block;
        vertical-align: top;
        height: 28px;
        min-width: 30px;
        line-height: 28px;
        margin: 0 5px;
        box-sizing: border-box;
        text-align: center;
        background-color: #f4f4f5;
        color: #606266;
        border-radius: 2px;
        cursor: pointer;
        &.point {
          line-height: 20px;
          position: relative;
          &:hover {
            color: #3F53FF;
            &:before {
              content: '<<';
              position: absolute;
              min-width: 30px;
              height: 100%;
              left: 0;
              line-height: 28px;
              background-color: #f4f4f5;
            }
            &.point-next:before {
              content: '>>';
            }
          }
        }
        &.active {
          color: #3F53FF;
          &:hover {
            cursor: default;
          }
        }
        &:hover {
          color: #3F53FF;
        }
      }
    }
    .pager-jump {
      display: inline-block;
      margin: 0 10px 0 30px;
      .jump-input {
        width: 50px;
        -webkit-appearance: none;
        -moz-appearance: textfield;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        text-align: center;
        display: inline-block;
        font-size: inherit;
        height: 28px;
        padding: 0 3px;
        line-height: 28px;
        outline: 0;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      }
    }
  }
  // 去掉input=number时的小箭头
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  button {
    outline: none;
  }
  a {
    text-decoration: none;
  }
}
</style>
