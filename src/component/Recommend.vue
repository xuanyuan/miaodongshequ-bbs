<template>
  <div class="threecolwrap">
    <div class="twocolwrap">
      <!--         左侧导航栏 -->
      <aside>
        <div class="inner">
          <h3>导航</h3>
          <nav>
            <ul>
              <li><a href="">
                <i class="icon iconfont icon-feiji"></i>
                论坛</a></li>
              <li><a href="">用户</a></li>
              <li><a href="">热门标签</a></li>
              <li><a href="">热门主题</a></li>
              <li><a href="">统计</a></li>
            </ul>
          </nav>
        </div>
        <div class="inner">
          <h3>论坛</h3>
          <nav>
            <ul>
              <li><a href="">总览</a></li>
              <li><a href="">教程</a></li>
              <li><a href="">帮助</a></li>
              <li><a href="">意见</a></li>
              <li><a href="">其他</a></li>
            </ul>
          </nav>
        </div>
      </aside>
      <!--          中栏-->
      <article>
        <div class="hottopic">
          <h3>本周热门</h3>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in todayhots" :key="item.key">
                <a :href="item.originalUrl" target="_blank" rel="noopener noreferrer" style="color: #000;">{{item.title}}</a>
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- 如果需要滚动条 -->
            <!--     <div class="swiper-scrollbar"></div> -->
          </div>
        </div>
        <div class="othertopic">
          <h3>其他相关</h3>
          <section>
            <ul>
              <li v-for="item in todayhots" :key="item.id">
                <h4><a :href="item.originalUrl" target="_blank" style="color: #000;">{{item.title}}</a></h4>
                <p>{{item.content}}</p>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </div>
    <!--        右侧边栏-->
    <aside>
      <section class="">
        <div class="joinus">
          <h4>加入我们</h4>
          <p>你可以不优秀，<br />
            但我更欣赏努力的你</p>
        </div>
      </section>
      <section class="">
        <div class="hotlist">
          <h3>今日热门</h3>
          <ul>
            <li v-for="item in todayhots" :key="item.id">
              <a :title="item.title" :href="item.originalUrl" target="_blank">{{item.title}}</a>
            </li>
          </ul>
        </div>
      </section>
    </aside>
  </div>
</template>
<script>
import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
  name: 'home',
  data () {
    return {
      todayhots: []
    }
  },
  methods: {
  },
  mounted () {
    new Swiper('.swiper-container', {
      //  预览数量  
      slidesPerView: 4,
      spaceBetween: 12,
      // 步长
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      initialSlide: 0,
      observer: true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents: true//修改swiper的父元素时，自动初始化swiper
    });
    // 请求展示数据
    axios.get('/v1/article')
      .then(response => {
        // console.log(response.data);
        this.todayhots = response.data;
      });
  }
}
</script>
<style lang="scss">

</style>

