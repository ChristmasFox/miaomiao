<template>
  <div id="content">
    <form action="" class="login">
      <input type="text" class="q">
      <input type="password" class="pwd">
      <input type="submit" value="登录" class="btn">
    </form>
    <div class="login-otr">
      <div class="register">立即注册</div>
      <div class="reset">找回密码</div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    .q, .pwd {
      width: 100%;
      height: 40px;
      margin-bottom: 5px;
      border: none;
      outline: none;
      padding-left: 10px;
      background-color: rgb(195, 253, 193);
      box-sizing: border-box;
    }
    .btn {
      width: 95%;
      height: 45px;
      background-color: red;
      color: white;
      border: none;
      border-radius: 5px;
      outline: none;
      margin-top: 10px;
      font-size: 1.1em;
    }
  }
  .login-otr {
    padding: 10px;
    font-size: 13px;
    .register {
      float: left;
    }
    .reset {
      float: right;
    }
  }
</style>