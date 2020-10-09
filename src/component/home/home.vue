<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in picArray" :key="index">
        <img :src="item.picUrl" />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="news">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-email">
              <span class="mui-badge">5</span>
            </span>
            <div class="mui-media-body">图片分享</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">商品购买</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
/* 轮播图 */
.mint-swipe {
  width: 100%;
  height: 200px;
}
.mint-swipe-item img {
  width: 100%;
  height: 100%;
}
/* 九宫格样式 */
.mui-content .mui-table-view{
    background-color: #fff;
}
.mui-table-view-cell{
    background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
}
.mui-icon::before{
    content: '';
}
.mui-icon{
    width: 40px;
    height: 40px;
    background-size: cover
}
.mui-icon.mui-icon-home{
    background-image: url('../../../static/images/menu3.png');
}
.mui-icon.mui-icon-email{
    background-image: url('../../../static/images/menu4.png');
}
.mui-icon.mui-icon-chatbubble{
    background-image: url('../../../static/images/menu5.png');
}
.mui-icon.mui-icon-location{
    background-image: url('../../../static/images/menu6.png');
}
.mui-icon.mui-icon-search{
    background-image: url('../../../static/images/menu9.png');
}
.mui-icon.mui-icon-phone{
    background-image: url('../../../static/images/menu10.png');
}
</style>
<script>
//在组件中写业务逻辑必须导出一个vue对象，写法是es5：module.exports={},也可以是es6：export default{}
export default {
  data: function() {
    //data里面的数据会直接提供给页面
    return {
      picArray: []
    };
  },
  created() {
    //生命周期函数，页面打开就调用，与window.onload作用类似
    //vue对象调用
    this.getScrollPic();
    // console.log(this);
  },
  methods: {
    getScrollPic: function() {
      this.$http
        .get(
          "http://api.tianapi.com/meinv/index?key=1ac2f10c8332cf0fd1afc2d907b8f8f2&num=6"
        )
        .then(
          function(response) {
            // console.log(response);
            this.picArray = response.body.newslist;
            // console.log(this.picArray);
          },
          function(err) {
            console.log(err);
          }
        );
    }
  }
};
</script>