<template>
  <div>
    <div class="mui-content">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="(item,index) in newsLists" :key="index">
          <a :href="item.url">
            <img class="mui-media-object mui-pull-left" :src="item.picUrl"/>
            <div class="mui-media-body">
              <p class="mui-ellipsis">{{item.title}}</p>
              <p class="time">
                  <span>{{item.ctime | timeFilers('YYYY-MM-DD')}}</span>
                  <span>次数</span>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
  .mui-table-view{
    margin-bottom: 56px;;
  }
  .mui-table-view .mui-media-object{
    min-width: 60px;
    height: 55px;
  }
  /* .mui-ellipsis{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  } */
  .mui-table-view-cell p{
    /* line-height: 30px; */
    font-size: 14px;
  }
  .time{
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
  }
  .mui-table-view-cell p span{
    font-size: 12px;
  }
</style>
<script>
   export default{
       data:function(){
           return {
               newsLists:[]
           }
       },
       created(){
           this.getnews();
       },
       methods:{
           getnews:function () {
               const url = 'http://api.tianapi.com/huabian/index?key=1ac2f10c8332cf0fd1afc2d907b8f8f2&num=10'
               this.$http.get(url).then(response=>{
                  //  console.log(response);
                   this.newsLists = response.body.newslist;
                  //  console.log(this.newsLists)
               },err=>{
                   console.log(err);
               })
           }
       }
}
</script>