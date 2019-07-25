<template>
  <div class="login-container">
    <div class="logo">
      <img src="https://account.xiaomi.com/static/res/11eb7d1/account-static/respassport/acc-2014/img/2018/milogo.png"
           alt="">
      <p style="font-size: .3rem">小米账号登陆</p>
    </div>
    <div class="login-form">
      <form class="login-from-container">
        <input class="username" type="text" placeholder="邮箱/手机号码/小米ID">
        <input class="password" type="password" placeholder="密码">
        <input class="login-btn" type="button" value="登陆">
        <input class="login-other" type="button" value="手机短信登陆/注册">
      </form>
    </div>
    <div class="reverse">
      <router-link to="/register">立即注册</router-link>
      <span> | </span>
      <router-link to="/forgetPassword">忘记密码?</router-link>
    </div>
    <div class="other-login-type">
      <fieldset>
        <legend>其他方式登陆</legend>
      </fieldset>
      <div class="login-links">
        <a href="">
          <img src="http://www.sinaimg.cn/blog/developer/wiki/LOGO_64x64.png" alt="">
        </a>
        <a href="">
          <img src="https://i.alipayobjects.com/common/favicon/favicon.ico" alt="">
        </a>
        <a href="">
          <img src="../assets/weixin.png" alt="">
        </a>
      </div>
      <div class="other-links-area">
        <ul>
          <li>简体</li>|
          <li>繁体</li>|
          <li>English</li>|
          <li>常见问题</li>|
          <li>隐私政策</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login"
  }
</script>

<style lang="scss" scoped>
  .login-container {
    padding: 40px .5rem 0;
    text-align: center;

    .login-from-container {
      input {
        display: block;
        width: 100%;
        margin: 15px auto 0;
        padding: .28rem 0;
        outline: none;
        font-size: .28rem;

        &.username,
        &.password {
          border-bottom: 1px solid #ddd;
          background-color: transparent;
        }

        &.login-btn {
          color: white;
          border-radius: 6px;
          background-color: #ff6700;
        }

        &.login-other {
          border-radius: 6px;
          border: 1px solid #ddd;
        }
      }
    }

    .reverse {
      margin-top: 10px;
      font-size: .28rem;

      a {
        color: #aaa;
      }
    }

    .other-login-type {
      padding-top: 40px;

      fieldset {
        border: 0;
        border-top: 1px solid #ddd;
      }

      .login-links {
        display: flex;
        padding: 20px 90px;

        a {
          flex: 1;

          img {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
    .other-links-area{
      margin-top: 100px;
      ul{
        display: flex;
        li{
          flex: 1;
        }
      }
    }
  }
</style>
