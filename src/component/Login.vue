<template>
  <div class="login">
    <div class="login_wrap">
      <div class="login_box">
        <h2>秒懂社区登录</h2>
        <form action="" class="outerbox">
          <div class="innerbox">
            <div class="form-group">
              <input type="text" name="phone" v-model="phone" placeholder="请输入手机号" />
            </div>
            <div class="form-group">
              <input type="password" name="password" v-model="password" placeholder="请输入密码" />
            </div>
            <div class="form-group">
              <button type="button" @click="login" class="btn">登录</button>
            </div>
            <div class="form-group">
              <router-link to="/register">还没有账号？</router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      phone: '13245678910',
      password: '123456'
    }
  },
  methods: {
    login () {
      // todo 用户名和密码验证
      this.$router.push({ path: "/home" });
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  height: inherit;
  min-width: 1200px;
  background: -webkit-linear-gradient(left, red, blue); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, red, blue); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, red, blue); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    to right,
    red,
    blue
  ); /* 标准的语法（必须放在最后） */
}
.login_wrap {
  width: 960px;
  height: inherit;
  position: relative;
  margin: 0 auto;
}
.login_box {
  width: 400px;
  background: rgba(0, 0, 0, 0.3);
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -200px 0 0 -200px;
  text-align: center;
  color: #fff;
}
form {
  float: left;
  position: relative;
  left: 50%;
  line-height: 100%;
  height: 100%;
}
.innerbox {
  float: left;
  position: relative;
  right: 50%;
  text-align: center;
  .form-group {
    margin: auto;
    input {
      display: block;
      margin: 20px 40px;
      outline: none;
      padding: 10px 15px;
      border: none;
      &:focus {
        transform: scale(1.2);
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        border: 1px solid blue;
      }
    }
    a {
      display: block;
      float: right;
      color: #fff;
      text-decoration: underline;
      padding-top: 5px;
    }
  }
}
.btn {
  padding: 5px 10px;
  border: none;
  background: rgb(26, 107, 172);
  color: #eee;
  &:hover {
    color: #fff;
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
  }
}
</style>
