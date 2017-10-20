<template>
  <div class="">
    <h1>英语励志语录</h1>
    <div v-for="(item,index) in items" :key="index" class="sentence-box">
      <mu-content-block>{{item.chinese}}</mu-content-block>
      <mu-content-block>{{item.english}}</mu-content-block>
    </div>
    <div>
      <mu-raised-button label="换一批" class="demo-raised-button" primary @click="getSentence"/>
    </div>
    <mu-dialog :open="dialog" title="警告">
      {{errorText}}
      <mu-flat-button label="确定" slot="actions" primary @click="close"/>
    </mu-dialog>
    <mu-snackbar v-if="toast" message="数据努力加载中..."/>
  </div>
</template>
<script>
  export default {
    name: 'lz',
    data() {
      return {
        items: [],
        toast: false,
        errorText: '',
        dialog: false,
      }
    },
    methods: {
      close() {
        this.dialog = false
      },
      getSentence() {
        let vm = this;
        let param = {
          'showapi_appid': '48198',
          'showapi_sign': '676cbadc540c45c482377e152c8c680c',
          'count': '5'
        };
        vm.toast = true;
        vm.$services.lzConstruct(param, function (res) {
          let results = res.data;
          if (results.showapi_res_code == "0") {
            vm.items = results.showapi_res_body.data;
          } else {
            vm.errorText = results.showapi_res_error;
            vm.dialog = true;
          }
          vm.toast = false;
        }, function (err) {
          vm.toast = false;
        })
      }
    },
    created() {
      this.getSentence()
    }
  }

</script>
<style>
  .mu-sub-header {
    text-align: left;
  }

  .sentence-box {
    border: 1px solid #7E57C2;
    margin: .5rem;
    border-radius: 4px;
    box-shadow: 0px 0px 10px #7E57C2;
  }

  .mu-content-block {
    text-align: left;
    padding: 5px 16px;
  }
</style>
