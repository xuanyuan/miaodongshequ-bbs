<template>
  <div class="about">
    <div class="about_wrap">
      <h3>关于我们</h3>
      <p>
        邮箱：
        <a href="mailto:z_dianjun@163.com">z_dianjun@163.com</a>
      </p>
      <p>
        QQ：390805461
      </p>
      <p>
        QQ群：770839368(加群备注：秒懂社区)
        <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=78fb8f0cb62ed286c3017e51f7d7bc47d2bab267f1b155586409cd0d427719e1">
          <img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="JavaScript学习交流" title="JavaScript学习交流">
        </a>
        <br>
        <img src="../images/qq.png" width="258" height="258" alt="JavaScript学习交流" />
      </p>
      <p>
        公众号：软件开发那些事

        <br>
        <img src="../images/weixin.jpg" width="253" height="253" alt="软件开发那些事" />
      </p>
      <p>
        本网站本着开源精神，开源网站所有代码，期望更多大牛、小牛、大鸟、小鸟和菜鸟贡献自己的一份力量。
      </p>
      <p>
        本网站不限制技术，不限制学历
      </p>
      <p class="highlight">
        Anytime, anywhere, if you want to code, join us! I want you!
      </p>
      <p>
        附项目地址
        <br>
        <a href="https://github.com/xuanyuan/miaodongshequ" target="_blank" rel="noopener noreferrer">后台地址</a>
        <br>
        <a href="https://github.com/xuanyuan/miaodongshequ-front" target="_blank" rel="noopener noreferrer">前端地址</a>
      </p>
      <div class="social-share"></div>
    </div>
  </div>
</template>

<script>

import 'social-share.js/dist/css/share.min.css';
import 'social-share.js/dist/js/social-share.min.js';

export default {
  data () {
    return {

    }
  },
  methods: {

  },
  mounted () {
    var $config = {
      image: '图片', // 图片, 默认取网页中第一个img标签
      // sites: ['qzone', 'qq', 'weibo', 'wechat', 'douban'], // 启用的站点
      disabled: ['google', 'facebook', 'twitter'], // 禁用的站点
      wechatQrcodeTitle: '微信扫一扫：分享', // 微信二维码提示文字
      wechatQrcodeHelper: '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'
    }
    socialShare('.social-share', $config);
  }
}
</script>
<style lang="scss" scoped>
.about {
  margin-top: 65px;
  float: left;
  width: 100%;
  .about_wrap {
    padding: 15px;
    background: #ffffff;
    margin: 18px auto 15px auto;
    max-width: 960px;
    .highlight {
      font-family: sans-serif;
      font-weight: 900;
      font-size: x-large;
    }
  }
}
</style>
