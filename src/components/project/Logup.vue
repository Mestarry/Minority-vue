<template>
  <div class="logup" @click="hideLogup">
    <div class="logup-content">
      <i class="iconfont icon-guanbi" @click="isShowThisDom" />
      <div class="logup-logo">
        <img src="~@/icons/common/logo.png">
      </div>
      <div class="to-login-btn">
        <span @click="toLogin">登录</span>
      </div>
      <div>
        <form class="logup-form">
          <div class="form-input">
            <input v-model="phoneNumber" type="number" placeholder="手机号码" @input="phoneNumLen">
          </div>
          <div class="form-input">
            <input v-model="username" type="text" placeholder="昵称（2-10个字符，中英文）">
          </div>
          <div class="form-input">
            <input
              v-model="password"
              type="password"
              placeholder="密码（6-16位）"
              maxlength="16"
              minlength="6"
            >
          </div>
          <div class="form-input">
            <input
              v-model="old_password"
              type="password"
              placeholder="再次输入密码"
              maxlength="16"
              minlength="6"
            >
          </div>
          <div class="form-input">
            <input v-model="vercode" type="number" placeholder="短信验证码">
            <span>发送验证码</span>
          </div>
          <p class="user-pro">
            <input v-model="check" type="checkbox"> 我已经阅读并同意《
            <a href="javascript:0">少数派用户协议</a>》
          </p>
          <button type="button" class="logup-submit-btn" @click="submitLogup">注册</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Logup',
  data() {
    return {
      phoneNumber: '',
      username: '',
      password: '',
      old_password: '',
      check: false,
      vercode: '123456'
    }
  },
  methods: {
    submitLogup() {
      // 校验手机号
      const phoneNumber = this.parityPhoneNumber(this.phoneNumber)
      if (!phoneNumber) return
      // 校验用户名
      const username = this.parityUserName(this.username)
      if (!username) return
      // 校验密码
      const password = this.parityPassword(this.password)
      if (!password) return
      // 验证两次密码是否一致
      if (password !== this.old_password) {
        this.showPopup(`两次输入的密码不一致`)
        return
      }
      // 验证短信验证码
      // soming code.
      // 判断是否勾选同意协议
      if (!this.check) {
        this.showPopup(`请阅读用户协议并同意`)
        return
      }
      this.showPopup('未连接数据库')
      // 提交到注册接口
      // post({
      //   url: 'logup',
      //   method: 'post',
      //   data: {
      //     phoneNumber,
      //     username,
      //     password
      //   }
      // })
      //   .then(res => {
      //     if (res.err == 0) {
      //       this.$store.state.isShowLogup = false;
      //       this.showPopup(res.msg);
      //       //重定向到指定页或者当前页并自动登录
      //     } else {
      //       this.showPopup(res.msg);
      //     }
      //   })
      //   .catch(function(err) {
      //     console.log(err);
      //   });
    },
    // 隐藏注册页
    hideLogup(e) {
      const divClass = e.target.className
      if (divClass === 'logup logup-component') {
        this.$store.state.isShowLogup = false
      }
    },
    showPopup(str) {
      // 弹出弹窗信息
      this.$store.state.isShowPopup = true
      this.$store.state.toastMsg = str
    },
    // 去登录
    toLogin() {
      this.$store.state.isShowLogin = true
      this.$store.state.isShowLogup = false
    },
    // 限制手机号输入的长度
    phoneNumLen() {
      if (this.phoneNumber.length >= 11) {
        this.phoneNumber = this.phoneNumber.slice(0, 11)
      }
    },
    // 校验手机号
    parityPhoneNumber(value) {
      const Reg = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
      if (value.trim() === '') {
        this.showPopup(`请输入手机号码`)
        return false
      } else if (!Reg.test(value)) {
        this.showPopup(`请输入正确的手机号码`)
        return false
      }
      return value
    },
    // 校验用户名
    parityUserName(value) {
      const Reg = /^[\u4e00-\u9fa5a-zA-Z0-9_]{2,10}$/
      const reg1 = /[^\u4e00-\u9fa5a-zA-Z0-9_]/
      if (value.trim() === '') {
        this.showPopup(`请设置昵称`)
        return false
      } else if (reg1.test(value)) {
        this.showPopup(`昵称不能包含特殊除“_”以外的符号`)
        return false
      } else if (!Reg.test(value)) {
        this.showPopup(`请设置2-10位昵称`)
        return false
      }
      return value
    },
    // 校验密码输入
    parityPassword(value) {
      const Reg = /.{6,16}$/
      if (!(value.trim())) {
        this.showPopup(`密码不能为空`)
        return false
      } else if (!Reg.test(value)) {
        this.showPopup(`密码不能少于六位`)
        return false
      }
      return value
    },
    isShowThisDom() {
      this.$store.state.isShowLogup = false
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~@/styles/variables';
.logup {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
}
.logup-content {
  width: 300px;
  height: 470px;
  padding: 50px;
  margin-top: 80px;
  background-color: #fff;
  position: relative;
}
.logup-logo {
  width: 120px;
  margin: 0 auto;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}
.to-login-btn {
  color: #4a90e2;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.to-login-btn span {
  cursor: pointer;
  font-size: 16px;
}
.logup-form {
  font-size: 16px;
  .form-input {
    width: 100%;
    height: 38px;
    position: relative;
    border: 1px solid $themeColor;
    margin-top: 20px;
    display: flex;
    align-items: center;
    input {
      width: 100%;
      box-sizing: border-box;
      height: 38px;
      line-height: 38px;
      padding: 0 10px;
    }
    span {
      position: absolute;
      height: 38px;
      cursor: pointer;
      color: #4a90e2;
      line-height: 38px;
      padding-right: 20px;
      font-size: 14px;
      display: block;
      top: 0;
      right: 0;
    }
  }
  .logup-submit-btn {
    width: 100%;
    height: 40px;
    background-color: $themeColor;
    color: #fff;
    cursor: pointer;
  }
  .user-pro {
    padding: 20px 0;
    font-size: 14px;
    a {
      color: #4a90e2;
    }
  }
}

.other-ways {
  margin: 30px 0;
}
.icon-guanbi{
  color:#000;
  position: absolute;
  right: 30px;
  top: 30px;
  font-size: 20px;
}
@media (max-width:400px) {
  .logup-content{
    margin: 80px 10px 0 10px;;
    width: 100%;
  }
}
</style>
