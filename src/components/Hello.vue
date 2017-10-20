<template>
  <div class="cts">
    <h1>{{ msg }}</h1>
    <div class="hello">
      <div class="item-input">
        <mu-text-field hintText="输入藏头诗内容" :errorText="inputErrorText" @textOverflow="handleInputOverflow"
                       @input="getVal" fullWidth
                       :maxLength="8"/>
      </div>
      <div class="mt8" >
        <mu-radio label="五言" name="num" nativeValue="5" v-model="num" class="demo-radio flex-demo"
                  uncheckIcon="favorite_border" checkedIcon="favorite"/>
        <br/>
        <mu-radio label="七言" name="num" nativeValue="7" v-model="num" class="demo-radio flex-demo"
                  uncheckIcon="favorite_border" checkedIcon="favorite"/>
        <br/>
      </div>
      {{list}}
      <div class="mt8" >
        <mu-radio label="双句一压" name="yayuntype" nativeValue="1" v-model="yayuntype" class="demo-radio flex-demo"
                  uncheckIcon="favorite_border" checkedIcon="favorite"/>
        <br/>
        <mu-radio label="双句押韵" name="yayuntype" nativeValue="2" v-model="yayuntype" class="demo-radio flex-demo"
                  uncheckIcon="favorite_border" checkedIcon="favorite"/>
        <br/>
        <mu-radio label="一三四押" name="yayuntype" nativeValue="3" v-model="yayuntype" class="demo-radio flex-demo"
                  uncheckIcon="favorite_border" checkedIcon="favorite"/>
        <br/>
      </div>
      <div class="mt8" >
        <mu-radio label="藏头" name="type" nativeValue="1" v-model="type" class="demo-radio flex-demo"
                  uncheckIcon="favorite_border" checkedIcon="favorite"/>
        <br/>
        <mu-radio label="藏尾" name="type" nativeValue="2" v-model="type" class="demo-radio flex-demo"
                  uncheckIcon="favorite_border" checkedIcon="favorite"/>
        <br/>
        <mu-radio label="藏中" name="type" nativeValue="3" v-model="type" class="demo-radio flex-demo"
                  uncheckIcon="favorite_border" checkedIcon="favorite"/>
        <br/>
      </div>
      <div class="item-subtitle">
        <mu-raised-button label="一键生成" class="demo-raised-button" primary fullWidth @click="getData"/>
      </div>
    </div>
    <div class="item-body animated fadeIn ">
      <mu-card-text v-for="(item , index) in items" :key="index">{{item}}</mu-card-text>

    </div>
    <mu-dialog :open="dialog" title="警告">
      {{errorText}}
      <mu-flat-button label="确定" slot="actions" primary @click="close"/>
    </mu-dialog>
    <mu-snackbar v-if="toast" message="数据努力加载中..." />
  </div>

</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: '藏头诗 ',
        inputErrorText: '',
        num: "5",
        type: "1",
        yayuntype: '1',
        key: '',
        items: [],
        value: '',
        list: '',
        errorText:'请输入内容！',
        toast:false,
        dialog: false,
      }
    },
    methods: {
      handleInputOverflow(isOverflow) {
        this.inputErrorText = isOverflow ? '超过字数限制啦！！！！' : ''
      },
      getVal(val) {
        let vm = this;
        vm.key = val;

      },
      close() {
        this.dialog = false
      },

      getData() {
        let vm = this;
        if (vm.key.length > 8) {
          return;
        }
        if (vm.key.length === 0) {
          vm.dialog = true;
          return;
        }
        let param = {
          'showapi_sign': '676cbadc540c45c482377e152c8c680c',
          'showapi_appid': '48198',
          'num': vm.num,
          'type': vm.type,
          'yayuntype': vm.yayuntype,
          'key': vm.key
        };
        vm.toast=true;
        vm.$services.ctsConstruct(param,
          function (res) {
            let results = res.data;
            if (results.showapi_res_code == "0") {
              console.log(results.showapi_res_body.list)
              vm.items = results.showapi_res_body.list;
            } else {
              console.log(results.showapi_res_error)
              vm.errorText=results.showapi_res_error;
              vm.dialog=true;
            }
            vm.toast=false;
          },
          function (err) {
            vm.errorText=err;
            vm.dialog=true;
            vm.toast=false;
          }
        );
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .cts {
    flex: 1;
    h1, h2 {
      font-weight: normal;
    }
    .item-body {
      margin-top: 2rem;
    }
    .mt8 {
      margin-top: 8px;
      display: flex;
    }
    .item-subtitle {
      margin-top: 8px;
    }
    .flex-demo {
      flex: 1;
      height: 32px;
      margin: 2px;
      /*background-color: #e0e0e0;*/
      text-align: center;
      line-height: 32px;
      padding: 0 5px;
      border: 1px solid #7E57C2;

    }
    .mu-card-text {
      border: 1px solid #7E57C2;
      margin: .5rem;
      border-radius: 4px;
      box-shadow: 0px 0px 10px #7E57C2;
    }
    .mu-radio-wrapper {
      height: 32px !important;
    }
    .mu-radio-label {
      font-size: 12px;
    }
  }
</style>
