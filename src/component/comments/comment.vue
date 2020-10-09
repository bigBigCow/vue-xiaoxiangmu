<template>
  <div class="all">
    <textarea class="texta" name id cols="30" rows="5" placeholder="请输入评论内容"></textarea>
    <mt-button type="primary" size="large">提交评论</mt-button>
    <h4>评论列表</h4>
    <div class="contentAll">
      <div class="content">小柠檬真是太可爱了</div>
      <p>
        <span>匿名用户</span>
        <span>2020-10-8</span>
      </p>
    </div>
  </div>
</template>
<style scoped>
.all{
  padding: 8px;
}
.texta {
  margin-top: 10px;
}
h4 {
  line-height: 30px;
}
.content {
  height: 60px;
  font-size: 14px;
}
p{
  display: flex;
  justify-content: space-between;
  /* padding: 0 8px; */
}
.contentAll{
  border-top: 1px solid rgba(92,92,92, .3);
  padding-top: 8px;
  
}
</style>
<script>
export default {
  props: ["commentId"],
  created() {
    console.log(this.commentId);
  }
};
</script>>