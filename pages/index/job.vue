<template>
  <div class="job-container">
    <!-- PC端content -->
    <div class="content-wrapper-pc hidden xl:block">
      <div class="back-btn hvr-backward" @click="$router.replace('joinUs')">
        <img class="icon-back" :src="'icon-back.png' | imgHost">
        返回
      </div>

      <div class="types-wrapper">
        <div
          v-for="(item) in job_types"
          :key="item.id"
          class="item"
          :class="item.id === activeTypeId ? 'active' : ''"
          @click="activeTypeId = item.id; changePage(1)"
        >
          {{ item.name }}
        </div>
      </div>

      <div class="job-list">
        <template v-if="list && list.length !== 0">
          <div
            v-for="(item) in list"
            :key="item.id"
            class="item"
            @click="getDetail(item.id)"
          >
            <div class="job-name">
              {{ item.job }}
            </div>
            <div class="salary">
              {{ item.salary }}
            </div>
          </div>
        </template>
        <!-- 空状态 -->
        <template v-else>
          <div class="empty-wrapper">
            <img :src="'empty.png' | imgHost">
            <div class="text">
              暂无内容
            </div>
          </div>
        </template>
      </div>

      <PaginationPc
        :ssr="false"
        :total="total"
        :page-size="per_page"
        @changePager="changePage"
      />
    </div>

    <!-- 移动端content -->
    <PopUp ref="job-types-popup" position="bottom">
      <div class="types-wrapper-popup">
        <!-- <img class="close" @click="$refs['job-types-popup'].close()" src="@/assets/images/icon-close-no-bg.png"> -->
        <div class="types-wrapper-title">职位类型</div>
        <div class="list-wrapper" @touchmove.stop>
          <template v-for="(item,index) in job_types">
            <div v-if="index !== 0" :key="item.id" class="item" @click="selectedTypeIndex = index">
              <div v-if="selectedTypeIndex === index" class="radio-checked">
                <img class="icon-selected" src="@/assets/images/icon-seleced.png">
              </div>
              <div v-else class="radio-unchecked"></div>
              <div class="radio-name">{{ item.name }}</div>
            </div>
          </template>
        </div>
        <div class="btns-wrapper">
          <div class="btn" @click="selectedTypeIndex = null; activeTypeId = null; list = []; changePage(1);$refs['job-types-popup'].close()">取消</div>
          <div class="btn" @click="selecteJobType">确定</div>
        </div>
      </div>
    </PopUp>
    <div class="content-wrapper-mobile blobk xl:hidden">
      <div class="type-selector-wrapper">
        <div v-if="!activeTypeId" class="select-btn" @click="$refs['job-types-popup'].open()">
          职位类型
          <img class="select-btn-icon" src="@/assets/images/icon-drop-gray.png">
        </div>
        <div v-else class="select-btn blue" @click="$refs['job-types-popup'].open()">
          {{ activeTypeName }}
          <img class="select-btn-icon" src="@/assets/images/icon-drop-blue.png">
        </div>
      </div>

      <div class="job-list">
        <template v-if="list && list.length !== 0">
          <div
            v-for="(item) in list"
            :key="item.id"
            class="item"
            @click="getDetail(item.id)"
          >
            <div class="job-name">
              {{ item.job }}
            </div>
            <div class="salary">
              {{ item.salary }}
            </div>
          </div>
          <div v-if="isLoading" class="load-text">
            正在加载中...
          </div>
          <div v-else-if="list.length < total" class="load-text" @click="changePage(page + 1)">
            点击加载更多数据
          </div>
          <div v-else class="load-text">
            没有更多数据了
          </div>
        </template>
        <!-- 空状态 -->
        <template v-else>
          <div class="empty-wrapper">
            <img :src="'empty.png' | imgHost">
            <div class="text">
              暂无内容
            </div>
          </div>
        </template>
      </div>
    </div>

    <!-- 移动端Tabbar -->
    <div class="mobile-tabbar">
      <div class="tabbar-item" @click="$router.push('joinUs')">
        <img class="icon" :src="'icon-joinus-tabbar-1.png' | imgHost">
        <div class="text">
          首页
        </div>
      </div>
      <div class="tabbar-item active">
        <img class="icon" :src="'icon-joinus-tabbar-2-selected.png' | imgHost">
        <div class="text">
          职位
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationPc from '@/components/PaginationPc.vue'
import PopUp from '~/components/PopUp.vue'
export default {
  name: 'IndexJob',
  components: {
    PaginationPc,
    PopUp
},
  async asyncData ({ $axios }) {
    const JobTypes = (await $axios.get('/recruit_job_type/all')).data
    JobTypes.unshift({ name: '全部' })
    return {
      job_types: JobTypes,
      activeTypeId: (JobTypes instanceof Array) && (JobTypes.length > 0) ? JobTypes[0]?.id : undefined,
      list: [],
      page: 1,
      per_page: 10,
      total: 0,
      isLoading: false,
      selectedTypeIndex: null, // 移动端职位弹窗当前选中项
      activeTypeName: ''
    }
  },
  mounted () {
    this.isMobile = false
    if (document.getElementsByClassName('content-wrapper-mobile')[0].offsetParent !== null) {
      this.isMobile = true
    }
    this.getList()
    if (this.isMobile) {
      // 移动端时监听滚动事件
      this.onScroll()
    }
  },
  destroyed () {
    window.onscroll = () => {}
  },
  methods: {
    getList () {
      let url = `/recruit/list?page=${this.page}&per_page=${this.per_page}`
      if (this.activeTypeId) {
        url += `&job_type_id=${this.activeTypeId}`
      }
      this.isLoading = true
      this.$axios.get(url).then((res) => {
        if (this.isMobile) {
          this.list = this.list.concat(res.data)
        } else {
          this.list = res.data
        }
        this.total = res.total
        this.page = res.current_page
        this.isLoading = false
      })
    },
    getDetail (id) {
      this.$router.push({ name: 'index-jobDetail', params: { id } })
    },
    changePage (page) {
      this.page = page
      this.getList()
    },
    onScroll () {
      // 移动端滚动加载
      window.onscroll = () => {
        if (this.list.length >= this.total || this.isLoading) {
          // 没有更多数据或正在加载则return
          return
        }
        // 距离底部200px时加载一次
        const bottomOfWindow = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight
        if (bottomOfWindow <= 200) {
          this.changePage(this.page + 1)
        }
      }
    },
    selecteJobType () {
      // 移动端确认选择职位类型
      if (!this.selectedTypeIndex) {
        this.$toast('请先选择职位类型哦~')
        return
      }
      this.activeTypeName = this.job_types[this.selectedTypeIndex].name
      this.activeTypeId = this.job_types[this.selectedTypeIndex].id
      this.list = []
      this.changePage(1)
      this.$refs['job-types-popup'].close()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/hover.css';
@screen xl {
  .job-container {
    padding-bottom: 0px !important;
  }
}
.job-container {
  background-color: #F5F5F5;
  padding-bottom: 90px;
  flex-grow: 1;

  /* PC端 */
  .content-wrapper-pc {
    @apply mx-auto;
    width: 1024px;
    padding-top: 110px;

    .back-btn {
      @apply flex items-center;
      color: #666666;
      font-size: 18px;
      cursor: pointer;

      .icon-back {
        width: 18px;
        height: 18px;
      }
    }

    .types-wrapper {
      margin-top: 20px;
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      background-color: #FFF;
      width: 100%;

      .item {
        border-radius: 4px;
        border: 1px solid #D8D8D8;
        color: #666;
        font-size: 12px;
        padding: 10px;
        margin: 5px;
        min-width: 80px;
        text-align: center;
        cursor: pointer;

        &:hover {
          color: #3F53FF;
          border: 1px solid #3F53FF;
        }

        &.active {
          color: #FFF;
          background-color: #3F53FF;
          border: 1px solid #3F53FF;
          cursor: default;
        }
      }
    }

    .job-list {
      min-height: 500px;
      .item {
        margin-top: 20px;
        background-color: #FFF;
        width: 100%;
        padding: 25px;

        &:hover {
          cursor: pointer;
        }

        .job-name {
          color: #333;
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .salary {
          font-size: 12px;
          color: #666;
        }
      }
    }

    .empty-wrapper {
      img {
        margin: 0 auto;
        width: 250px;
        height: auto;
      }

      .text {
        font-size: 14px;
        color: #333;
        text-align: center;
      }
    }
  }

  /* 移动端 */
.types-wrapper-popup {
  position: relative;
  background-color: #FFF;
  width: 100vw;
  height: 520px;
  box-sizing: border-box;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  display: flex;
  flex-direction: column;

  .close {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 20px;
    height: 20px;
  }

  .types-wrapper-title {
    color: #000;
    font-size: 17px;
    font-weight: 500;
    padding-top: 35px;
    text-align: center;
    margin-bottom: 12px;
  }

  .list-wrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    &::-webkit-scrollbar { width: 0 !important }
    .item {
      display: flex;
      align-items: center;
      margin: 0 19px;
      padding: 19px 0;
      border-bottom: 1px solid #F5F5F5;
      .radio-checked {
        width: 15px;
        height: 15px;
        line-height: 15px;
        border-radius: 50%;
        border: 1px solid #0C20CD;
        background-color: #0C20CD;
        .icon-selected {
          width: 12px;
          height: 12px;
          margin: 0 auto;
        }
      }
      .radio-unchecked {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: 1px solid #999999;
      }
      .radio-name {
        margin-left: 12px;
        font-size: 15px;
        color: #666;
      }
    }
  }

  .btns-wrapper {
    position: sticky;
    bottom: 0;
    display: flex;
    align-items: center;
    box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.1);
    background-color: #FFF;
    padding: 10px 20px;

    .btn {
      flex-grow: 1;
      height: 47px;
      line-height: 47px;
      text-align: center;
      border-radius: 5px;
      &:first-child {
        border: 1px solid #0C20CD;
        font-weight: 500;
        font-size: 13px;
        color: #0C20CD;
        margin-right: 15px;
      }
      &:last-child {
        background-color: #0C20CD;
        color: #FFF;
        font-size: 13px;
        font-weight: 500;
      }
    }
  }
}

  .content-wrapper-mobile {
    padding-top: 70px;
    width: 100%;

    .type-selector-wrapper {
      background-color: #fff;
      height: 55px;
      display: flex;
      align-items: center;

      .select-btn {
        margin-left: 19px;
        min-width: 87px;
        height: 28px;
        padding: 0 10px;
        background-color: #F5F5F7;
        border-radius: 14px;
        font-size: 12px;
        color: #666;
        display: flex;
        justify-content: center;
        align-items: center;

        &.blue {
          color: #0C20CD;
        }

        .select-btn-icon {
          width: 17px;
          height: 17px;
        }
      }
    }

    .job-list {
      margin-top: 7px;
      .item {
        background-color: #FFF;
        width: 100%;
        padding: 20px 30px;
        border-bottom: 2px solid #F5F5F5;

        .job-name {
          color: #333;
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .salary {
          font-size: 14px;
          color: #666;
        }
      }

      .load-text {
        color: #666;
        text-align: center;
        padding-top: 8px;
        font-size: 14px;
      }
    }

    .empty-wrapper {
      img {
        margin: 0 auto;
        width: 200px;
        height: auto;
      }

      .text {
        font-size: 14px;
        color: #333;
        text-align: center;
      }
    }
  }
}

.mobile-tabbar {
  @apply flex xl:hidden items-center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: #FFF;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1000);

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
</style>
