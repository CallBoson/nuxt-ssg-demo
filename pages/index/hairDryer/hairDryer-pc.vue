<template>
  <div class="hair-dryer-container">
    <!-- PC -->
    <div class="pc">
      <div class="progress-bar"></div>
      <div class="p1">
        <img class="common-img" :src="'hairDryer/p1-v2.0.jpg' | imgHost">
        <div class="info-wrap">
          <div class="flex items-center" style="margin-bottom: 30px;line-height: 34px;">
            <img style="width: 190px;height: auto;margin-right: 10px;" :src="'hairDryer/icon-foly.png' | imgHost">
            <div style="color:#000;font-size:34px;">高速吹风机</div>
          </div>
          <div style="color:#161823;font-size:52px;line-height: 52px;font-weight:500;">澎湃动力 高速快干</div>
        </div>
      </div>
      <div class="scroll-scale p2">
        <img class="common-img" :src="'hairDryer/p2-v2.0.jpg' | imgHost">
        <div class="info-wrap">
          <div class="title scroll-text" style="margin-bottom: 40px;color: #fff;font-size: 52px;font-weight: 500;">4X升级核心机能</div>
          <div class="flex items-center">
            <div class="flex flex-col items-center scroll-text" style="margin-right: 30px;">
              <img style="width: 70px;height: 70px;" :src="'hairDryer/icon-p2-1.png' | imgHost">
              <div style="color: #fff;font-size:16px;text-align:center;margin-top:10px;">快干风力</div>
            </div>
            <div class="flex flex-col items-center scroll-text" style="margin-right: 30px;">
              <img style="width: 70px;height: 70px;" :src="'hairDryer/icon-p2-2.png' | imgHost">
              <div style="color: #fff;font-size:16px;text-align:center;margin-top:10px;">源头护发力</div>
            </div>
            <div class="flex flex-col items-center scroll-text" style="margin-right: 30px;">
              <img style="width: 70px;height: 70px;" :src="'hairDryer/icon-p2-3.png' | imgHost">
              <div style="color: #fff;font-size:16px;text-align:center;margin-top:10px;">养发TECH</div>
            </div>
            <div class="flex flex-col items-center scroll-text" style="margin-right: 30px;">
              <img style="width: 70px;height: 70px;" :src="'hairDryer/icon-p2-4.png' | imgHost">
              <div style="color: #fff;font-size:16px;text-align:center;margin-top:10px;">温控TECH</div>
            </div>
          </div>
        </div>
      </div>
      <div class="p3">
        <img class="common-img" :src="'hairDryer/p3-v2.0.jpg' | imgHost">
        <div class="info-wrap" data-aos="fade-up" data-aos-delay="200" data-aos-once="false">
            <div style="font-size: 48px;line-height: 48px;font-weight:600;color:#161823;display: flex;align-items: flex-start;">长发速干 <span style="font-size:28px;line-height: 28px;margin-left: 5px;">*</span></div>
            <div style="font-size: 34px;line-height: 34px;color:#161823;margin-top: 24px;">大风力 才得劲</div>
            <div style="font-size: 16px;line-height: 16px;color:#161823;margin-top: 24px;">负离子护发，改善毛燥，不易炸毛。</div>
          </div>
      </div>      
      <div class="scroll-scale p4">
        <img class="common-img" :src="'hairDryer/p4-v2.0.png' | imgHost">
        <div class="info-wrap scroll-text">
          <div style="font-size: 52px;line-height: 52px;font-weight:500;color:#fff;display: flex;align-items: flex-start;">{{ countNumber }}转/分<span style="font-size:28px;line-height:28px;">*</span></div>
          <div style="font-size: 34px;color:#fff;margin-top: 20px;">澎湃动力 源于硬核马达</div>
        </div>
      </div>
      <div class="p5">
        <img class="common-img" :src="'hairDryer/p5-v2.0.jpg' | imgHost">
        <div class="info-wrap">
          <div style="color: #FFF;font-size:52px;line-height:52px;font-weight:500;margin-bottom:24px;" class="bounce-show">飓风来袭</div>
          <div style="color: #FFF;font-size:34px;line-height:34px;font-weight:400;margin-bottom:24px;" class="bounce-show">干发不是只靠「烘」</div>
          <div style="color: #FFF;font-size:16px;line-height:16px;font-weight:400;margin-bottom:10px;" class="bounce-show">高速电机搭配FOLY风道设计，风量更大， 风速更猛！</div>
          <div style="color: #FFF;font-size:16px;line-height:16px;font-weight:400;margin-bottom:84px;" class="bounce-show">减少高温烘干，吹干更快速。</div>
          <div style="color: #FFF;font-size:28px;line-height:28px;font-weight:500;margin-bottom:26px;" class="bounce-show">干发方式对比示意图</div>
          <span style="color:#FFF;font-size:16px;line-height:16px;margin-right: 10px;" class="bounce-show">FOLY高速吹风机</span>
          <span style="color:#FFF;font-size:12px;line-height:12px;" class="bounce-show">无刷高转速电机 11万转/分*主要通过强猛风力吹干头发</span>
          <div style="margin: 13px 0;" class="progress progress-1 bounce-show">
            <div class="block-1" style="background: linear-gradient(270deg, #7B47F3 0%, #2274E2 100%);">风速</div>
            <div class="block-2" style="background: linear-gradient(270deg, #EB553A 0%, #DD353E 100%);">风温</div>
          </div>
          <span style="color:#FFF;font-size:16px;line-height:16px;margin-right: 10px;" class="bounce-show">传统吹风机</span>
          <span style="color:#FFF;font-size:12px;line-height:12px;" class="bounce-show">有刷低转速电机2万转/分*主要依靠高温对头发烘烤从而达到干发目的</span>
          <div style="margin-top: 13px;" class="progress progress-2 bounce-show">
            <div class="block-1" style="background: linear-gradient(270deg, #EB553A 0%, #DD353E 100%);">风温</div>
            <div class="block-2" style="background: linear-gradient(270deg, #7B47F3 0%, #2274E2 100%);">风速</div>
          </div>
        </div>
      </div>
      <div class="p6">
        <img class="common-img" :src="'hairDryer/p6-v2.0.jpg' | imgHost">
        <div class="info-wrap">
          <div class="bounce-show" style="color:#FFF;font-size:52px;line-height:52px;font-weight:500;margin-bottom:24px;display: flex;align-items: flex-start;">边吹边SPA<span style="font-size: 28px;line-height:28px;">*</span></div>
          <div class="bounce-show" style="color:#FFF;font-size:34px;line-height:34px;font-weight:400;margin-bottom:24px;">专研「双子养发Tech」</div>
          <div class="bounce-show" style="color:#FFF;font-size:16px;line-height:28px;font-weight:400;margin-bottom:50px;max-width: 406px;">鱼子酱精华叠加负离子，深层渗进发丝， 中和发丝静电，抚平毛躁。</div>
          <div class="bounce-show" style="position:relative;">
            <img style="width:612px;height:auto" :src="'hairDryer/p6-1.jpg' | imgHost">
            <div style="position: absolute;left:30px;top:49px;">
              <div style="color:#FFF;font-size:28px;line-height:28px;font-weight:500;margin-bottom:14px;">鱼子酱搭配负离子</div>
              <div style="color:#FFF;font-size:24px;line-height:24px;font-weight:400;margin-bottom:59px;">水分平衡、顺滑秀发</div>
              <div style="color:#999;font-size:12px;line-height:12px;font-weight:400;margin-bottom:45px;">*鱼子酱圈开封后，建议2个月更换一次</div>
              <div class="flex">
                <div style="position:relative;margin-right: 12px;">
                  <img style="width:270px;height:auto" :src="'hairDryer/p6-2.jpg' | imgHost">
                  <div style="position:absolute;top:14px;left:76px;color:#fff;font-size:18px;line-height: 18px;">鱼子酱+负离子</div>
                </div>
                <div style="position:relative;">
                  <img style="width:270px;height:auto" :src="'hairDryer/p6-3.jpg' | imgHost">
                  <div style="position:absolute;top:14px;left:76px;color:#fff;font-size:18px;line-height: 18px;">普通吹风机</div>
                </div>
              </div>
              <div style="margin-top: 15px;font-size:12px;line-height:12px;color:#999;">*鱼子酱搭配负离子可以减少头发中的静电，顺滑秀发</div>
            </div>
          </div>
        </div>
      </div>
      <div class="p8">
        <img class="common-img" :src="'hairDryer/p8-v2.0.jpg' | imgHost">
        <div class="info-wrap">
          <div class="scroll-text" style="color: #000;font-size:52px;line-height:52px;font-weight:500;margin-bottom:20px;display: flex;align-items: flex-start;">智能恒温监测<span style="font-size: 28px;line-height: 28px;margin-left: 5px;">*</span></div>
          <div class="scroll-text" style="color: #000;font-size:34px;line-height:34px;font-weight:400;margin-bottom:20px;">远离「忽冷忽热」</div>
          <div class="scroll-text" style="color: #000;font-size:16px;line-height:16px;font-weight:400;margin-bottom:40px;">4档控温设置，自由可控。</div>
          <div class="flex items-center" style="gap:36px;">
            <div class="flex flex-col items-center bounce-show" style="position: relative;bottom:0px;">
              <img style="width: 70px;height: auto;margin-bottom: 10px;" :src="'hairDryer/icon-p8-1.png' | imgHost">
              <div style="color: #000;font-size: 16px;">冷风档</div>
            </div>
            <div class="flex flex-col items-center bounce-show" style="position: relative;bottom:0px;">
              <img style="width: 70px;height: auto;margin-bottom: 10px;" :src="'hairDryer/icon-p8-2.png' | imgHost">
              <div style="color: #000;font-size: 16px;">暖风档</div>
            </div>
            <div class="flex flex-col items-center bounce-show" style="position: relative;bottom:0px;">
              <img style="width: 70px;height: auto;margin-bottom: 10px;" :src="'hairDryer/icon-p8-3.png' | imgHost">
              <div style="color: #000;font-size: 16px;">热风档</div>
            </div>
            <div class="flex flex-col items-center bounce-show" style="position: relative;bottom:0px;">
              <img style="width: 70px;height: auto;margin-bottom: 10px;" :src="'hairDryer/icon-p8-4.png' | imgHost">
              <div style="color: #000;font-size: 16px;">超频档</div>
            </div>
          </div>
        </div>
      </div>
      <div class="p9">
        <div class="info-wrap">
          <div style="text-align: center;color:#FFF;font-size:52px;line-height:52px;font-weight:500;margin-top:12.9vh;margin-bottom:24px;">一键超频</div>
          <div style="text-align: center;color:#FFF;font-size:34px;line-height:34px;">开机直达强猛风速</div>
          <div style="position:absolute;bottom:10vh;width: 100%;text-align:center;color:#999;">一键超频使用说明：在强风档时，长按风温调节按钮3秒，进入超频模式（红灯长亮）。</div>
        </div>
        <img style="width: auto;height:50vh;margin-top: 10vh;object-fit: cover;" :src="'hairDryer/p9-v2.0.gif' | imgHost">
      </div>
      <div class="p10">
        <div class="bounce-show" style="padding-top:140px;">
          <div style="text-align: center;font-size:52px;line-height:52px;color:#fff;font-weight:500;margin-bottom:24px;">贯穿式尾灯</div>
          <div style="text-align: center;font-size:34px;line-height:34px;color:#fff;font-weight:400;">灵感来源跑车设计</div>
        </div>
        <img style="width: 640px;height: auto;" :src="'hairDryer/p10-v2.0.gif' | imgHost">
      </div>
      <div class="p11">
        <img class="common-img" :src="'hairDryer/p11-v2.0.jpg' | imgHost">
        <div class="info-wrap">
          <div data-aos="fade-up" data-aos-once="false" data-aos-mirrow="true" style="color: #000;font-size:52px;line-height:52px;font-weight:500;margin-bottom:24px;">365g 小巧机身</div>
          <div data-aos="fade-up" data-aos-once="false" data-aos-mirrow="true" style="color: #000;font-size:34px;line-height:34px;">轻量握感  久举不易累</div>
        </div>
      </div>
      <div class="p12">
        <img class="common-img" :src="'hairDryer/p12-v2.0.jpg' | imgHost">
        <div class="info-wrap">
          <div style="color:#000;font-size:52px;line-height:52px;font-weight:500;margin-bottom:24px;">小巧精美 拒绝繁琐</div>
          <div style="color:#000;font-size:34px;line-height:34px;">三种颜色，勾勒精致生活</div>
        </div>
        <div style="position: absolute;bottom:0;width:100%;display:flex;justify-content:center;align-items: flex-end;gap:3%;">
          <img class="bounce-show" style="width:12.48%;height:auto;" :src="'hairDryer/p12-1.png' | imgHost">
          <img class="bounce-show" style="width:15%;height:auto;" :src="'hairDryer/p12-2.png' | imgHost">
          <img class="bounce-show" style="width:18.96%;height:auto;" :src="'hairDryer/p12-3.png' | imgHost">
        </div>
      </div>
      <div class="p13">
        <img style="width: 100%;height:auto;" :src="'hairDryer/p13-v2.0.jpg' | imgHost">
        <div class="info-wrap">
          <div class="param-box">
            <div style="color:#000;font-size:46px;line-height:46px;padding:33px 40px;font-weight:500;border-bottom:1px solid #e7e7e7;">基本参数</div>
            <div style="padding: 40px;padding-top:24px;display: flex;flex-wrap: wrap;row-gap:30px;column-gap: 53px;">
              <div class="item">
                <div class="title">产品主型号</div>
                <div class="content">HX-GH-01-H01</div>
              </div>
              <div class="item">
                <div class="title">产品颜色</div>
                <div class="content">科技灰/珍珠白/冰雪蓝</div>
              </div>
              <div class="item">
                <div class="title">额定功率</div>
                <div class="content">1600w</div>
              </div>
              <div class="item">
                <div class="title">产品净重</div>
                <div class="content">365g（不含线及其他配件）</div>
              </div>
              <div class="item">
                <div class="title">额定电压</div>
                <div class="content">220v</div>
              </div>
              <div class="item">
                <div class="title">额定频率</div>
                <div class="content">50Hz</div>
              </div>
              <div class="item">
                <div class="title">产品功能</div>
                <div class="content">高速吹风，柔顺护发</div>
              </div>
            </div>
          </div>
          <div style="margin-top:6.4vh;color:#666;font-size:12px;line-height:12px;">* 此画面中的吹风机架不含在产品中，如有需要可另外购买</div>
        </div>
      </div>
      <div class="p14">
        <div style="width:1200px;margin: 0 auto;">
          <div style="white-space: pre-wrap;color:#666;font-size:16px;line-height:36px;margin-top:60px;margin-bottom:90px;position: relative;left: -40px;">
          注释：
          * 11万转高速无刷马达、110，000转/分钟：在标准环境下（23±2℃），采用高速频闪仪测试吹风机在高速挡位运行时，马达的最高转速;
          * 传统吹风机马达转速一般是16000~21000转/分钟，数据来自于百度;
          * 快干：指的是产品功效，以传统吹风机作为对比参照物，FOLY高速吹风机马达转速是传统吹风机马达的5倍，吹干速度更快;
          * 双子：指的是负离子和鱼子酱;
          * SPA：为广告创意修饰。
          </div>
          <div style="color:#000;font-size:46px;line-height:46px;font-weight:600;margin-bottom:40px;">品质售后</div>
          <div class="flex items-center justify-between" style="margin-bottom:120px;">
            <div class="item">
              <div>
                <span class="day-num">15</span>
                <span class="day-word">天</span>
              </div>
              <div class="explain">无理由退换</div>
              <div class="sub-explain">专人服务<br>售后无忧</div>
            </div>
            <div class="item">
              <div>
                <span class="day-num">180</span>
                <span class="day-word">天</span>
              </div>
              <div class="explain">免费换新</div>
              <div class="sub-explain">质量问题<br>只换不修</div>
            </div>
            <div class="item">
              <div>
                <span class="day-num">3</span>
                <span class="day-word">天</span>
              </div>
              <div class="explain">品牌质保</div>
              <div class="sub-explain">正品质保<br>品质保障</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部菜单 -->
      <div class="bottom-wrapper" id="bottom_wrapper_pc">
        <div class="item-text gaishu" @click="reloadPage">概述</div>
        <div class="item-text kefu">
          1对1客服
          <div class="code-float">
            <img class="code" :src="'contact-img-3.png' | imgHost">
            <div class="text">领取50元现金券</div>
          </div>
        </div>
        <div class="buy-btn">
          立即购买
          <div class="code-float">
            <img class="code" :src="'contact-img-4.png' | imgHost">
            <div class="text">领商城福利</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollMagic from 'scrollmagic'
import { TweenMax, TimelineMax } from "gsap"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"
export default {
    name: "IndexHairDryer",
    data() {
      return{
        countNumber: 0,
        controller: null
      }
    },
    mounted() {
      if (screen.width < 1280) {
        window.location = window.location.origin + '/hairDryer/hairDryer-mobile'
      }
      ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)
      this.controller = new ScrollMagic.Controller()
      this.animation_bottom()
      this.animation_p1()
      this.animation_p2()
      this.animation_p4()
      this.animation_p5()
      this.animation_p6()
      this.animation_p8()
      this.animation_p9()
      this.animation_p10()
      this.animation_p12()
    },
    methods: {
        reloadPage() {
            location.reload();
        },
        reset_animation_progress_bar (triggerElement, duration) {
          const scene = new ScrollMagic.Scene({
            triggerElement,
            triggerHook: 'onLeave',
            duration,
            tweenChanges: true
          })
          const tween = TweenMax.fromTo('.progress-bar', { width: 0 }, { width: '100vw', duration: 0.3 })
          scene.setTween(tween)
          scene.addTo(this.controller)
        },
        animation_p1 () {
          const scrollScene = new ScrollMagic.Scene({
            duration: '200%',
            triggerElement: '.p1',
            triggerHook: 'onLeave'
          }).setPin('.p1', { pushFollowers: false })
          scrollScene.addTo(this.controller)

          document.querySelector('.p1 .common-img').onload = () => {
            const fadeupScene = new ScrollMagic.Scene({
            triggerElement: '.p1',
            triggerHook: 0.9,
            duration: '80%',
            offset: 50,
            tweenChanges: true
          })
          const fadeTween = TweenMax.from('.p1 .info-wrap', 1, { top:'+=100', opacity:0 })
          fadeupScene.setTween(fadeTween)
          fadeupScene.addTo(this.controller)
          }
        },
        animation_bottom () {
          const scene = new ScrollMagic.Scene({
            triggerElement: '.navbar',
            triggerHook: 'onLeave',
            duration: '100%'
          })
          const tween = TweenMax.to('#bottom_wrapper_pc', 1, { bottom: 0 })
          scene.setTween(tween)
          scene.addTo(this.controller)
        },
        animation_p2 () {
          this.reset_animation_progress_bar('.p2', '130%')
          let played = false
          TweenMax.set('.p2 .scroll-text', { opacity: 0 })
          const scrollScene = new ScrollMagic.Scene({
            triggerElement: '.p2',
            triggerHook: 'onLeave',
            duration: '130%'
          }).setPin('.p2')
          scrollScene.on('enter', () => {
            if (played) return
            TweenMax.set('.p2 .scroll-text', { opacity: 1 })
            const timeline = new TimelineMax()
            const tween = TweenMax.from('.p2 .scroll-text', 1, { y: 200, opacity: 0, stagger: 0.2 })
            timeline.add(tween)
            played = true
          })
          scrollScene.addTo(this.controller)
        },
        animation_p4 () {
          this.reset_animation_progress_bar('.p4', '150%')
          const textTween = TweenMax.fromTo('.p4 .scroll-text', { top: '101%', opacity: 0 }, { top: '50%', opacity: 1, paused: true, duration: 0.8 })
          const scrollScene = new ScrollMagic.Scene({
            duration: '150%',
            triggerElement: '.p4',
            triggerHook: 'onLeave',
            tweenChanges: true
          }).setPin('.scroll-scale.p4')
          scrollScene.on('enter', () => {
            textTween.play()
            if (!this.countNumberOnce) {
                const target = 110000
                let countNumberClock = setInterval(() => {
                  if (this.countNumber >= target) {
                    this.countNumber = target
                    clearInterval(countNumberClock)
                    countNumberClock = null
                  } else {
                    this.countNumber += 1658
                  }
                }, 30)
                this.countNumberOnce = true
              }
          })
          scrollScene.addTo(this.controller)
        },
        animation_p5 () {
          this.reset_animation_progress_bar('.p5', '200%')
          let played = false
          TweenMax.set('.p5 .bounce-show', { opacity: 0 })
          const scene = new ScrollMagic.Scene({
            triggerElement: '.p5',
            triggerHook: 'onLeave',
            duration: '200%'
          }).setPin('.p5').on('enter', () => {
            if (played) return
            TweenMax.set('.p5 .bounce-show', { opacity: 1 })
            const t1 = TweenMax.from('.p5 .bounce-show', { opacity: 0, y: '+=200', duration: 0.3, stagger: 0.1 })
            const t2 = TweenMax.from('.p5 .progress', { width: '20%', ease: 'Power1.easeInOut', delay: -0.5, duration: 2, stagger: 0.1 })
            const tl = new TimelineMax()
            tl.add(t1)
            tl.add(t2)
            played = true
          })
          scene.addTo(this.controller)
        },
        animation_p6 () {
          this.reset_animation_progress_bar('.p6', '100%')
          const tweenText = TweenMax.from('.p6 .bounce-show', 0.5, { y: '+=200', opacity: 0, stagger: 0.3, paused: true })

          const scene = new ScrollMagic.Scene({
            triggerElement: '.p6',
            triggerHook: 'onLeave',
            duration: '100%'
          }).setPin('.p6').on('enter', (e) => {
            tweenText.play()
          })
          scene.addTo(this.controller)
        },
        animation_p8 () {
          this.reset_animation_progress_bar('.p8', '150%')
          const scene = new ScrollMagic.Scene({
            duration: '100%',
            triggerElement: '.p8',
            triggerHook: 'onLeave',
            tweenChanges: true
          }).setPin('.p8')
          const timeline = new TimelineMax()
          const tween1 = TweenMax.from('.p8 .scroll-text', { opacity: 0, y: '+=50', stagger: 0.2, duration: 0.2 })
          const tween2 = TweenMax.from('.p8 .bounce-show', { opacity: 0, y: '+=50', stagger: 0.2, duration: 0.3 })
          timeline.add(tween1)
          timeline.add(tween2)
          scene.setTween(timeline)
          scene.addTo(this.controller)
        },
        animation_p9 () {
          this.reset_animation_progress_bar('.p9', '200%')
          const tween1 = TweenMax.to('.p9 .info-wrap', 1, { opacity: 0, delay: 0.2, paused: true })
          const tween2 = TweenMax.to('.p9 img', 1, { width: '100%', height: '100vh', delay: 0.2, paused: true })

          const scene = new ScrollMagic.Scene({
            triggerElement: '.p9',
            triggerHook: 'onLeave',
            duration: '200%'
          }).setPin('.p9').on('enter', (e) => {
            tween1.play()
            tween2.play()
          }).on('leave', (e) => {
            tween1.reverse()
            tween2.reverse()
          })
          scene.addTo(this.controller)
        },
        animation_p10 () {
          this.reset_animation_progress_bar('.p10', '100%')
          const tweenText = TweenMax.from('.p10 .bounce-show', 0.5, { y: '+=200', opacity: 0, paused: true })

          const scene = new ScrollMagic.Scene({
            triggerElement: '.p10',
            triggerHook: 'onLeave',
            duration: '100%'
          }).setPin('.p10').on('enter', (e) => {
            tweenText.play()
          })
          scene.addTo(this.controller)
        },
        animation_p12 () {
          this.reset_animation_progress_bar('.p12', '100%')
          const tween = TweenMax.from('.p12 .bounce-show', 1, { y: '+=200', ease:'Power1.easeOut', opacity: 0, stagger: 0.5, paused: true })

          const scene = new ScrollMagic.Scene({
            triggerElement: '.p12',
            triggerHook: 'onLeave',
            duration: '100%'
          }).setPin('.p12').on('enter', (e) => {
            tween.play()
          })
          scene.addTo(this.controller)
        }
    }
}
</script>

<style lang="scss" scoped>
.hair-dryer-container {
  /* pc端 */
  .pc {
    .progress-bar {
      position: fixed;
      top: 0px;
      width: 0;
      height: 3px;
      background: linear-gradient(270deg, #7B47F3 0%, #2274E2 100%);
      z-index: 10;
      border-radius:px-vh(10);
    }
    .p1 {
      position: relative;
      .info-wrap {
        position: absolute;
        left: 25%;
        top: 50%;
        transform: translate(-30%, -50%);
      }
    }
    .p2 {
      position: relative;
      transform-origin: center center;
      .info-wrap {
        position: absolute;
        right: 30%;
        top: 50%;
        transform: translate(30%, -50%);
      }
    }
    .p3 {
      position: relative;
      .info-wrap {
        position: absolute;
        top: 34%;
        left: 20%;
      }
    }
    .p4 {
      position: relative;
      transform-origin: center center;
      overflow: hidden;
      .info-wrap {
        position: absolute;
        right: 25%;
        top: 50%;
        transform: translate(30%, -50%);
      }
    }
    .p5 {
      position: relative;
      .info-wrap {
        position: absolute;
        left: 20%;
        top: 50%;
        transform: translate(-20%, -50%);
        .bounce-show {
          position: relative;
        }
      }
      .progress {
        width: 492px;
        height: 24px;
        box-sizing: border-box;
        border-radius: 12px;
        display: flex;
        align-items: center;
        overflow: hidden;

        .block-1 {
          width: 75%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          color: #FFF;
        }

        .block-2 {
          position: relative;
          left: -10px;
          flex-grow: 1;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #FFF;
          font-size: 12px;
          border-radius: 12px;
        }
      }
    }
    .p6 {
      position: relative;
      .info-wrap {
        position: absolute;
        top: 50%;
        right: 18.75%;
        transform: translate(18.75%, -50%);
      }
    }
    .p8 {
      position: relative;
      .info-wrap {
        position: absolute;
        left: 30%;
        top: 50%;
        transform: translate(-30%, -50%);
      }
    }
    .p9 {
      position: relative;
      background-color: #000;
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;

      .info-wrap {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
    .p10 {
      background-color: #000;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:space-between;
      height: 100vh;
    }
    .p11 {
      position: relative;
      .info-wrap {
        position: absolute;
        left: 18%;
        top: 50%;
        transform: translate(0, -50%);
      }
    }
    .p12 {
      position: relative;
      .info-wrap {
        position: absolute;
        top: 15%;
        width: 100%;
        text-align: center;
      }
    }
    .p13 {
      position: relative;
      .info-wrap {
        position: absolute;
        top: 50%;
        right: 15%;
        transform: translate(0, -50%);
        .param-box {
          background-color: #F5F5F5;
          border-radius: 10px;
          width: 526px;
          box-sizing: border-box;
          .item {
            border-bottom: 1px solid #E7E7E7;
            width: 196px;
            box-sizing: border-box;
            .title {
              color: #666;
              font-size: 16px;
              line-height: 16px;
              margin-bottom: 14px;
            }
            .content {
              font-size: 18px;
              line-height: 18px;
              margin-bottom: 15px;
              color: #000;
              font-weight: 500;
            }
          }
        }
      }
    }
    .p14 {
      color: #f0f2f5;
      .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 310px;
        height: 420px;
        box-sizing: border-box;
        background-color: #F5F5F5;
        border-radius: 10px;

        .day-num {
          color: #000;
          font-size: 98px;
          line-height: 98px;
          font-weight: 600;
        }

        .day-word {
          font-size: 28px;
          line-height: 28px;
          color: #000;
          font-weight: 600;
        }

        .explain {
          padding-top: 19px;
          color: #000;
          font-size: 28px;
          line-height: 28px;
          font-weight: 600;
          &::after {
            content: '';
            display: block;
            width: 30px;
            height: 2px;
            background-color: #000;
            margin: 0 auto;
            margin-top: 35px;
          }
        }

        .sub-explain {
          margin-top: 20px;
          line-height: 38px;
          font-size: 22px;
          color: #666;
        }
      }
    }

    .common-img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      object-position: top;
    }

    .bottom-wrapper {
      padding: 0 310px;
      position: sticky;
      bottom: -70px;
      width: 100%;
      height: 68px;
      background-color: rgba(1,0,21,.85);
      display: flex;
      align-items: center;

      .item-text {
        color: #FFF;
        font-size: 16px;

        &.gaishu {
          margin-right: 60px;
          cursor: pointer;
        }
      }

      .code-float {
        position: absolute;
        bottom: 52px;
        right: 50%;
        transform: translate(50%,0);
        width: 180px;
        height: 180px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        box-shadow: 0px 0px 20px 0px rgba(2,0,36,0.1);
        border-radius: 8px;
        visibility: hidden;

        .code {
          position: relative;
          top: 5px;
          width: 120px;
          height: auto;
          margin-bottom: 12px;
        }

        .text {
          font-size: 12px;
          color: #333;
        }
      }

      .kefu {
        position: relative;
        margin-right: auto;

        &:hover {
          .code-float {
            visibility: visible;
          }
        }
      }

      .buy-btn {
        position: relative;
        background-color: #3F53FF;
        width: 116px;
        height: 44px;
        line-height: 44px;
        color: #FFF;
        text-align: center;

        .code-float {
          bottom: 62px;
          .code {
            position: relative;
            top: 15px;
          }
        }
        &:hover {
          .code-float {
            visibility: visible;
          }
        }
      }
    }
  }
}
</style>
