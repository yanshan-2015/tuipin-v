<template>
    <div class="index">

    <p>{{title}}</p>
    </div>
</template>

<script>
    export default {
        name: 'index',
        components: {},
        data() {
            return {
              title: 'cli',
              name: '小师妹'
            }
        }
    }
</script>

<style lang="less" scoped>
  .index{
    font-size: 55px;
  }
</style>
