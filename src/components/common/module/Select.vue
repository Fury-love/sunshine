<style lang="scss" scoped>
.SelectDemo {
  font-family: MicrosoftYaHei;
  letter-spacing: -0.1px;
  line-height: 14px;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: middle;
  color: #515a6e;
  font-size: 14px;
  line-height: normal;
  position: relative;
  .content:hover {
    border-color: #57a3f3;
  }
  .selectedValue {
    display: block;
    height: 34px;
    line-height: 34px;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 8px;
    padding-right: 24px;
  }
  .selectColor {
    color: #c5c8ce;
  }
  .selected {
    border-color: #57a3f3 !important;
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px rgba(45, 140, 240, .2);
    box-shadow: 0 0 0 2px rgba(45, 140, 240, .2);
    .ivu-icon {
      transform: rotate(180deg);
    }
  }
  .content {
    box-sizing:border-box;
    padding: 0 24px 0 0;
    display: block;
    box-sizing: border-box;
    outline: 0;
    user-select: none;
    cursor: pointer;
    position: relative;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #dcdee2;
    transition: all .2s ease-in-out;
    height: 100%;
    .ivu-icon {
      position: absolute;
      top: 50%;
      right: 8px;
      line-height: 1;
      margin-top: -7px;
      font-size: 14px;
      color: #808695;
      -webkit-transition: all .2s ease-in-out;
      transition: all .2s ease-in-out;
    }
    input {
      height: 30px;
      line-height: 30px;
      cursor: pointer;
      padding: 0 22px 0 4px;
      font-size: 12px;
    }
    input::-webkit-input-placeholder {
      color: #c5c8ce;
    }
    input::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: #c5c8ce;
    }
    input:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      color: #c5c8ce;
    }
    input:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #c5c8ce;
    }
  }
  .dropList {
    position: absolute;
    will-change: top, left;
    transform-origin: center top 0px;
    top: 35px;
    left: 0px; // display: none;
    width: 200px;
    margin: 5px 0;
    padding: 5px 0;
    background-color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
    position: absolute;
    z-index: 900;
    .allS {
      padding: 7px 16px;
      font-size: 12px!important;
      cursor: pointer;
      line-height: 14px!important;
      input {
        margin-right: 12px;
      }
    }
    ul {
      min-width: 100%;
      list-style: none;
      overflow: auto;
      max-height: 200px;
      li {
        position: relative;
        margin: 0;
        line-height: normal;
        padding: 7px 16px;
        clear: both;
        color: #515a6e;
        font-size: 12px!important;
        white-space: nowrap;
        list-style: none;
        cursor: pointer;
        -webkit-transition: background .2s ease-in-out;
        transition: background .2s ease-in-out;
        input {
          margin-right: 12px;
        }
      }
    }
    .bottom {
      text-align: center;
      margin: .2rem 0 .1rem 0;
      span {
        //padding: .05rem .14rem;
        //font-size: .14rem;
        height: 28px;
        line-height: 28px;
      }
      .button1 {
        border: 1px solid #aaa;
        color: #aaa;
      }
      .button1:hover {
        border: 1px solid #666;
        color: #666;
      }
    }
  }
}

</style>
<template>
  <div class='SelectDemo' :style="{width:width}">
    <div :class="downFlag?'content selected':'content'" @click="toggleShow()">
      <input type="hidden" readonly="true" v-model="selectValue"><i class="ivu-icon ivu-icon-ios-arrow-down ivu-select-arrow" />
      <span :class="hasSelected?'selectedValue':'selectedValue selectColor'">{{selectValue}}</span>
    </div>
    <transition name="transition-drop">
      <div v-if="downFlag" class="dropList">
        <div class="allS">
          <input type="checkbox" v-model="checkAll" @change='changeState()'><span>全部</span>
        </div>
        <ul>
          <li v-for="item in list">
            <input type="checkbox" v-model="checkModel" :value="item"><span>{{item.invoiceTypeName}}</span>
          </li>
        </ul>
        <div class="bottom">
          <span class="button" @click="sure">确定</span>
          <span class="button1" @click="reset">重置</span>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "SelectDemo",
  props: {
    //列表
    placeholder: {
      type: String,
    },
    list: {
      type: Array,
      default: () => []
    },
    //宽度
    width: {
      type: String,
      default: '200px'
    },
  },
  created: function() {
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.downFlag = false;
      }
    })
    if (this.placeholder) {
      this.selectValue = this.placeholder;
    }
  },
  mounted() {
    console.log(this.list);
    console.log(typeof(this.list));
  },
  methods: {
    sure() {
      this.$emit('sureSelect', this.checkModel)
      this.toggleShow();
    },
    toggleShow() {
      this.downFlag = !this.downFlag;
    },
    reset() {
      this.checkAll = false;
      this.checkModel = [];
    },
    //全选按钮方法
    changeState() {
      this.checkModel = [];
      if (this.checkAll == true) {
        this.list.forEach((value, index) => {
          this.checkModel.push(value);
        });
      }
    },
  },
  watch: {
    checkModel: {
      handler: function(val, oldVal) {
        if (val.length > 0) {
          this.hasSelected = true;
          if (val.length == 1) {
            this.selectValue = val[0].invoiceTypeName;
          } else {
            this.selectValue = val[0].invoiceTypeName + ' 等';
          }
        } else {
          this.hasSelected = false;
          this.selectValue = this.placeholder;
        }
      },
      deep: true
    },
  },
  data() {
    return {
      downFlag: false,
      selectValue: '',
      checkAll: false,
      hasSelected: false,
      checkModel: [],
    };
  },
};

</script>
