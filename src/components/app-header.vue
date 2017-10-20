<template>
  <div class="">
    <mu-tabs :value="activeTab" @change="redirectUrl">
      <mu-tab value="/" icon="" title="藏头诗"/>
      <mu-tab value="/bsbdj" icon="" title="百思不得姐"/>
      <mu-tab value="/lz" icon="" title="励志语录"/>
      <mu-tab value="/about" icon="" title="关于我"/>
    </mu-tabs>

  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
        open: false,
        docked: true,
        activeTab: '/'
      }
    },
    methods: {
      toggle(flag) {
        let vm = this;
        vm.open = !vm.open;
        vm.docked = !flag;
      },
      redirectUrl(val) {
        let vm = this;
        vm.activeTab = val;
        this.$router.push(val);

      }
    },
    created() {
      this.activeTab = this.$store.state.hasPath
    }
  }
</script>
<style>

</style>
