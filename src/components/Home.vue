<<template>
  <el-container class="home-container">
    <!-- 头部 -->
    <el-header>
      <div>
        <img src="../assets/logo.png"alt="">
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="loginout">退出</el-button>
    </el-header>
    <!-- 主体 -->
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="isCollapse ? '79px': '200px'">
          <div class="toggle-button" @click="toggleCollapse">|||</div>
          <el-menu :unique-opened="true" :collapse="isCollapse" :collapse-transition="false"
          :router="true"
          :default-active="activePath"
          background-color="#333744" text-color="#fff" active-text-color="#409eff">
            <!-- 一级菜单 -->
            <el-submenu :index="item.id +''" v-for="item in menulist" :key="item.id">
              <!-- 一级菜单模板 -->
              <template slot="title">
                <i :class="iconObj[item.id]"></i>
                <span>{{item.authName}}</span>
              </template>
                <!-- 二级菜单 -->
                <el-menu-item :index="'/' + subItem.path"
                v-for="subItem in item.children" :key="subItem.id"
                @click="saveNavState('/' + subItem.path)">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>{{subItem.authName}}</span>
                  </template>
                </el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 右侧内容 -->
        <el-main>
          <!-- 路由占位符 -->
          <router-view></router-view>
        </el-main>
      </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return{
      //左侧菜单数据
      menulist: [], //存储一级菜单数据
      //侧边栏一级菜单图标
      iconObj: {
        '125':'iconfont icon-user',
        '103':'iconfont icon-tijikongjian',
        '101':'iconfont icon-shangpin',
        '102':'iconfont icon-danju',
        '145':'iconfont icon-baobiao',
      },
      //侧边栏是否折叠
      isCollapse: false,
      //存储被激活链接的地址 url
      activePath:''

    }
  },
  created() {
    this.getMenuList();
    this.activePath = window.sessionStorage.getItem('activePath');//刷新后再次点击时重新获取到的activePath
  },
  methods: {
    loginout() {
      window.sessionStorage.clear();//清除之前登录保存的token
      this.$router.push('/login') //跳转登录页
    },
    //获取所有菜单
    async getMenuList() {
      const {data:res} = await this.$http.get('menus');
      if(res.meta.status != 200) return this.message.error(res.meta.msg);
      this.menulist = res.data;
      //console.log(res);
    },
    //侧边菜单的折叠与展开
    toggleCollapse() {
      this.isCollapse = ! this.isCollapse;
    },
    //保存链接的二级菜单的激活状态
    saveNavState(activePath) {
      window.sessionStorage.setItem('activePath', activePath);
      this.activePath = activePath //刷新后重新赋值
    }
  }
}
</script>

<style lang="less" scoped>
.home-container{
  height: 100%;
}
  .el-header{
    background-color:#373d41;
    display: flex;
    justify-content: space-between;
    padding-left:0;
    align-items: center;
    color: #fff;
    font-size: 20px;
    >div{
      display: flex;
      align-items: center;
      img{
        width: 60px;
        height: 60px;
      }
      span{
        margin-top:15px;
      }
    }
  }
  .el-aside{
    background-color: #333744;
    .el-menu{
      border-right: none;
    }
  }
  .el-main{
    background-color: #eee;
  }
  .iconfont{
    margin-right: 10px;
  }
  .toggle-button{
    background-color: #4A5064;
    font-size:10PX;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 0.2rem;
    cursor: pointer;
  }

</style>
