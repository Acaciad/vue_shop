<template>
  <div class="login_container">
    <div class="login_box">
    <!-- logo -->
      <div class="avater_box">
        <img src="@/assets/logo.png">
      </div>
    <!-- 登录表单区域 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <!-- v-model 绑定登录对象的属性 username password -->
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
         <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" type="password"></el-input>
        </el-form-item>
          <!-- 按钮 -->
         <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      //登录数据绑定的对象
      loginForm: {
        username:'admin',
        password:'123456'
      },
      //登录表单验证规则对象
      loginFormRules: {
        //验证用户名
        username:[
           { required: true, message: '请输入用户名', trigger: 'blur' },
           { min: 3, max: 9, message: '长度在 3 到 9 个字符', trigger: 'blur' }
        ],
        //验证密码
        password:[
           { required: true, message: '请输入密码', trigger: 'blur' },
           { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }

  },
  methods: {
    resetLoginForm() {
      //重置登录表单
      //console.log(this);
      //获取登录表单实例对象 调用 resetFields()方法 实现重置表单
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      //validate() 表单预验证方法
      this.$refs.loginFormRef.validate(async valid => {//async 函数执行时，遇到 await 就会先暂停执行 ，等到触发的异步操作完成后，恢复 async 函数的执行并返回解析值
        //console.log(valid)
        if(!valid) return;
        const {data:res} = await this.$http.post('login',this.loginForm);//data:res 只打印data对象
        //console.log(res);
        if(res.meta.status !== 200) return this.$message.error('登录失败');
        this.$message.success('登录成功');
        // 1.将登录成功后的token 保存到客服端的sessionStorage中
        // 1.1项目中除了登录之外其他的api接口需登录后才能访问
        // 1.2 token 只应在当前网站打开期间生效，使用将token 保存在sessionStorage 中
        console.log(res);
        window.sessionStorage.setItem("token", res.data.token);

        // 2.通过编程时导航跳转到后台主页，路由地址 /home
        this.$router.push("/home");
      });
    }
  }
}
</script>

<!--
1.定义一个验证对象 loginFormRules
2.绑定该对象 :rules="loginFormRules"
3.在data 定义验证对象的规则,每一个属性都是一个验证规则 username password
4. 不同表单e-from-item 通过添加 prop 指定不同验证规则来进行验证
 -->
<style lang="less" scoped>//scoped 只在当前组件起作用
.login_container{
  height: 1080px;
  width: 1920px;
  background-color:rgb(247, 237, 134) ;
}
.login_box{
  width: 450px;
  height: 300px;
  background-color:#fff;
  border-radius:3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  .avater_box{
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius:50% ;
    box-shadow:0 0 10px #fff;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    img{
      height: 100%;
      width: 100%;
      border-radius:50% ;
      background-color: #eee;
    }
  }
}
.login_form{
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0, 20px;
  box-sizing:border-box;
}
.btns{
  display: flex;
  justify-content: flex-end;
}
</style>

