<template>
  <div>login
    <comment commentId="100"></comment>
  </div>
</template>
<script>
//在父组件中导入子组件
import comment from '../comments/comment.vue'
export default {
  components:{//注册子组件
    comment:comment
  }
}
</script>>