<template>
  <div class="register">
    <div class="register_wrap">
      <div class="register_box">
        <h2>注册</h2>
        <form action="" class="outerbox">
          <div class="innerbox">
            <div class="form-group">
              <input type="text" name="phone" v-model="phone" placeholder="请输入手机号" />
            </div>
            <div class="form-group">
              <input type="password" name="password" v-model="password" placeholder="请输入密码" />
            </div>
            <div class="form-group">
              <input type="password" name="password" v-model="passwordconf" placeholder="再次输入密码" />
            </div>
            <div class="form-group">
              <button type="button" @click="register" class="btn">注册</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'register',
  data () {
    return {
      phone: string,
      password: string,
      passwordconf: string
    }
  },
  methods: {
    register () {
      if (this.password !== this.passwordconf) {
        alert("two time password is different, please try again.");
        return;
      }
      // todo 用户名和密码验证
      this.$router.push({ path: "/login" });
    }
  }
}
</script>
<style lang="scss" scoped>
.register {
  height: inherit;
  min-width: 1200px;
  background: #50a3a2;
  background: -webkit-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
  background: -moz-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
  background: -o-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
  background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
}
.register_wrap {
  width: 960px;
  height: inherit;
  position: relative;
  margin: 0 auto;
}
.register_box {
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
      margin: 20px;
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
