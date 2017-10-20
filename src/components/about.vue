<template>
  <div class="about">

    <img class="item-img" src="../assets/xzc.jpg" alt="">
    <h3> 夏正春</h3>
    <div>
      <mu-chip v-for="(tag ,index) in tags" :key="index" class="tag">
        {{tag}}
      </mu-chip>
    </div>
    <div class="intro">
      一个苦逼的程序员.
    </div>
  </div>
</template>
<script>
  export default {
    name: 'about',
    data() {
      return {
        items: [
          {
            name: '夏正春'
          }
        ],
        tags: ['阳光', '闷骚', '有趣', '吃货', '完美主义']
      }
    }
  }
</script>
<style scoped>
  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }

  .item-img {
    display: inline-block;
    width: 50%;
    border-radius: 50%;
    margin-top: 1rem;
  }

  .tag {
    margin: 3px;
  }
  .intro{
    margin:.5rem;
  }

</style>
