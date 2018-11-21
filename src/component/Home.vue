<template>
  <div class="container">
    <header>
      <section class="logo">
        <h2>秒懂社区</h2>
      </section>
      <nav class="navbar">
        <ul>
          <li>
            <router-link to="/home/recommend">每日推荐</router-link>
          </li>
          <li>
            <router-link to="/home/discuss">问答专区</router-link>
          </li>
          <li>
            <router-link to="/home/about">关于我们</router-link>
          </li>
        </ul>
      </nav>
      <form class="login">
        <div>
          <input type="text" placeholder="搜索标签，主题等" />
          <button type="button">
            <router-link to="/login">登录</router-link>
          </button>
        </div>
      </form>
    </header>
    <router-view></router-view>
    <footer>
      <div class="footer-menu">
        <ul>
          <li><a href="http://" target="_blank" rel="noopener noreferrer">关于我们</a></li>
        </ul>
      </div>
      ©2018 秒懂社区 鲁ICP备18007783号-1
    </footer>
  </div>
</template>

<script>
</script>

<style lang="scss">
// 灰色字体
$grayfont-color: #a9b3b6;
// 左侧侧边栏宽度
$leftaside-width: 15%;
// 右侧侧边栏宽度
$rightaside-width: 20%;
// 左侧导航栏padding
$leftaside-padding: 40px;
// 导航栏hover字体颜色
$navhover-color: #5e6b71;

.container {
  // min-width: 600px;
  // max-width: 1100px;
  // 超过最大宽度时，居中布局
  overflow-y: scroll;

  margin: 0 auto;
  footer {
    clear: both;
    width: 100%;
    text-align: center;
    color: #ffffff;
    background: #474e5d;
    padding: 30px 0 20px;
    font-size: 12px;
    font-family: Arial, "\5B8B\4F53";
    a {
      color: #fff;
      font-size: 12px;
      font-family: Arial, "\5B8B\4F53";
    }
  }
}

@mixin li-a {
  list-style-type: none;

  a {
    display: block;
    height: 100%;
    padding: 20px;
    text-decoration: none;
    color: #a9b3b6;

    &:hover {
      color: $navhover-color;
      border-bottom: 3px solid #4285c9;
    }
  }
}

header {
  width: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;

  section.logo {
    float: left;
    width: 25%;

    h2 {
      margin: 0;
      padding: 16px;
    }
  }

  nav {
    float: left;

    ul {
      margin: 0;

      li {
        float: left;
        @include li-a;
      }
    }
  }

  form.login {
    float: right;
    padding: 13px;

    input {
      padding: 7px 10px;
      vertical-align: middle;
      outline: none;
      background: #fbfbfb;
      margin-right: 40px;
      border: none;
      width: 300px;

      &:focus {
        border: 1px solid blue;
      }
    }

    button {
      border: none;
      padding: 10px 60px;
      margin-right: 20px;
      background: -webkit-linear-gradient(left, #4687c9, #10579f);
      /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(right, #4687c9, #10579f);
      /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(right, #4687c9, #10579f);
      /* Firefox 3.6 - 15 */
      background: linear-gradient(to right, #4687c9, #10579f);
      /* 标准的语法 */
      color: #fff;
      border-radius: 20px;
      cursor: pointer;
      &:focus {
        outline: 0;
      }
    }
  }
}

.threecolwrap {
  float: left;
  width: 100%;
  margin-top: 65px;

  .twocolwrap {
    float: left;
    width: 100%; // height: 300px;
    background: #eee;
    margin-right: -$rightaside-width; // 左侧导航栏

    aside {
      width: $leftaside-width; // background: red;
      float: left;

      .inner {
        h3 {
          font-weight: bold;
          font-size: 17px;
          font-family: helvetica, arial, sans-serif;
          padding-left: $leftaside-padding;
        }

        nav {
          ul {
            padding: 0;

            li {
              @include li-a;

              a {
                padding-top: 10px;
                padding-bottom: 10px;
                padding-left: $leftaside-padding;
                color: $navhover-color;

                &:hover {
                  color: $grayfont-color;
                  border: none;
                }
              }
            }
          }
        }

        &:last-child {
          border-top: 1px solid $grayfont-color;
        }
      }
    }

    // 中栏
    article {
      width: auto;
      margin-left: $leftaside-width;
      margin-right: $rightaside-width;
      // background: blue;
      padding: 20px;

      .othertopic {
        section {
          ul {
            padding: 0;

            li {
              list-style-type: none;
              border-bottom: 1px solid $grayfont-color;
            }
          }
        }
      }
    }
  }

  > aside {
    float: left;
    width: $rightaside-width; // background:yellow;
    // padding: 20px 0;
    section {
      padding: 40px;

      .joinus {
        color: #fff;
        background: -webkit-linear-gradient(left top, #e75c86, #e76d71);
        /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(bottom right, #e75c86, #e76d71);
        /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(bottom right, #e75c86, #e76d71);
        /* Firefox 3.6 - 15 */
        background: linear-gradient(to bottom right, #e75c86, #e76d71);
        /* 标准的语法（必须放在最后） */
        font-size: 20px;
        font-weight: 500;
        height: 100%;
        text-align: center;
        border-radius: 5px;

        h3,
        h4,
        h5 {
          margin: 0;
        }
      }

      .hotlist {
        background: #eee;

        h3 {
          margin: 0;
        }

        ul {
          padding-left: 0;

          li {
            list-style-type: none;

            a {
              display: block;
              line-height: 45px;
              text-decoration: none;
              color: $navhover-color;
              white-space: nowrap;
              text-overflow: ellipsis;
              -o-text-overflow: ellipsis;
              overflow: hidden;
              &:hover {
                color: $grayfont-color;
              }
            }
          }
        }
      }
    }
  }
}

.swiper-container {
  width: 100%;
  height: 120px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
