<<template>
  <div>
    <el-button type="info" @click="loginout">退出</el-button>
  </div>
</template>

<script>
export default {
methods: {
  loginout() {
    window.sessionStorage.clear();//清除之前登录保存的token
    this.$router.push('/login') //跳转登录页
  }
}
}
</script>

<style>

</style>
