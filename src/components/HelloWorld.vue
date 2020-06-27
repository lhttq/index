<template>
  <div class="hello">
      <el-button>  <router-link to="/HelloWorld/login">登录</router-link></el-button>
      <el-button type="primary"> <router-link to="/HelloWorld/register">注册</router-link></el-button>
    <router-view></router-view>
  </div>
</template>

<script>

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    color: yellow;
  }
</style>
