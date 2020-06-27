<template>
  <div id="app">
      <el-card class="box-card">
          <router-view></router-view>
      </el-card>
        </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 30vw;
  height: 50vh;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  color: #2c3e50;
}
</style>
