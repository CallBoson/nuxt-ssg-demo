<template>
  <div>
    <!-- PC -->
    <div class="pc navbar hidden xl:flex items-center justify-center" :class="isBlueBackground">
      <div style="width: 1200px;height: 100%;" class="flex items-center">
        <a class="logobrand cursor-pointer" data-aos="zoom-in-down" data-aos-delay="100" data-aos-once="true"
          href="/" />
        <div class="list">
          <a class="item" href="/hairDryer/hairDryer-pc" data-aos="fade-down" data-aos-delay="100" data-aos-once="true">
            高速吹风机
          </a>
          <div id="nav-about-us-item" style="position: relative;" class="item" data-aos="fade-down" data-aos-delay="200"
            data-aos-once="true">
            关于我们
            <div class="about-float">
              <a class="sub-item" :class="$route.name === 'index-introduce' ? 'active' : ''" href="/introduce">
                了解我们
              </a>
              <a class="sub-item" :class="$route.name === 'index-joinUs' ? 'active' : ''" href="/joinUs">
                加入我们
              </a>
            </div>
          </div>
          <div id="nav-contact-item" class="item list-item1" data-aos="fade-down" data-aos-delay="300" data-aos-once="true" style="position: static">
            联系我们
            <div class="contact-float">
              <div style="width: 1200px;" class="flex justify-between items-center">
                <div class="item">
                  <img :src="'contact-img-1.png' | imgHost">
                  <div class="title">
                    官方公众号
                  </div>
                  <div class="sub-text">
                    获取每日最新优惠
                  </div>
                </div>
                <div class="item">
                  <img :src="'contact-img-3.png' | imgHost">
                  <div class="title">
                    1对1咨询
                  </div>
                  <div class="sub-text">
                    可领50元现金券
                  </div>
                </div>
                <div class="item">
                  <img :src="'contact-img-4.png' | imgHost">
                  <div class="title">
                    官方小程序
                  </div>
                  <div class="sub-text">
                    一键解锁商城福利
                  </div>
                </div>
                <div class="item">
                  <img :src="'contact-img-5.png' | imgHost">
                  <div class="title">
                    热线电话：4000-688-666
                  </div>
                  <div class="sub-text">
                    周一至周日：9:00-21:00（北京时间）
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="nav-cooperation-item" class="item" data-aos="fade-down" data-aos-delay="400" data-aos-once="true">
            招商合作
            <div class="cooperation-float">
              <div class="cooperation-item">
                <img class="code" :src="'cooperation-code-1.png' | imgHost">
                <div>厂家合作</div>
              </div>
              <div class="cooperation-item">
                <img class="code" :src="'cooperation-code-2.png' | imgHost">
                <div>代理合作</div>
              </div>
            </div>
          </div>
        </div>
        <BuyButton class="buy-btn" data-aos="fade-left" data-aos-delay="500" data-aos-once="true" />
      </div>
    </div>

    <!-- Mobile -->
    <div class="mobile navbar px-8 items-center flex xl:hidden" :class="isShowMobileBackground">
      <img class="logobrand" src="@/assets/images/logo.png" @click="menuToggle = false; $router.push('/')">
      <div class="toggle-btn" :class="menuToggle ? 'toggle-open' : ''" @click="menuToggle = !menuToggle" />
      <BuyButton class="buy-button" data-aos="fade-left" data-aos-delay="300" data-aos-once="true" />

      <!-- 悬浮窗 -->
      <div :class="menuToggle ? 'float-show' : 'float-hide'" class="float-wrapper shadow-xl" @touchmove.prevent>
        <div class="menu">
          <a class="item" href="/hairDryer/hairDryer-mobile">
            高速吹风机
          </a>
          <a class="item" href="/introduce">
            了解我们
          </a>
          <a class="item" href="/joinUs">
            加入我们
          </a>
          <a class="item" href="/conusmobile">
            联系我们
          </a>
          <a class="item" href="/attractmobile">
            招商合作
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar'
export default NavBar
</script>

<style lang="scss" scoped>
@import './NavBar.scss';
</style>
