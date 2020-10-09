<template>
  <div>
    <!-- 头部 -->
    <mt-header fixed title="小柠檬商店"></mt-header>
    <div v-show="routeChange" class="goback" @click="isGoback">&lt;返回</div>
    <router-view class="home-component"></router-view>
    <!-- 底部 -->
    <mt-tabbar :class="routeChange ? 'activeStyle':''" fixed>
      <mt-tab-item>
        <router-link to="/home">
          <img
            src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png"
          />
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/category">
          <img
            src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png"
          />
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/cart">
          <img
            src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png"
          />
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/login">
          <img
            src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/68400/36/12368/3153/5d9c4b13E0e0d80a8/876c40f17d91ce44.png"
          />
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<style scoped>
/* 头部样式 */
.mint-header {
  font-size: 18px;
}
/* 给组件设置个maigin */
.home-component{
  margin-top: 40px;
}
/* 底部样式 */
.mint-tab-item-label a img {
  width: 50px;
  height: 40px;
}
.goback{
  position: fixed;
  top: 10px;
  left: 8px;
  z-index: 2;
  font-size: 14px;
  color: aliceblue;
}
.activeStyle{
  display: none;
}
</style>
<script>
export default {
  data(){
    return {
      routeChange:false
    } 
  },
  created(){
    console.log(this.$route);
    if(this._routerRoot._route.path != '/home'){
        this.routeChange = true;
      }else{
        this.routeChange = false;
      }
  },
  methods:{
     isGoback:function(){
      this.$router.go(-1);
    }
  },
  watch:{
    $route:function(newVal,oldVal){
      console.log(newVal);
      if(newVal.path != '/home'){
        this.routeChange = true;
      }else{
        this.routeChange = false;
      }
    }
  }
}
</script>>