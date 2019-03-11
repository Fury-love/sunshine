<style lang="scss" scoped>
.vue-cropper {
  background-image: none !important;
}
.cropper-box, .cropper-box-canvas, .cropper-drag-box, .cropper-crop-box, .cropper-face {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  user-select: none;
}

.cropper-box-canvas img {
  position: relative;
  user-select: none;
  transform: none;
  max-width: none;
  max-height: none;
}

.cropper-box {
  overflow: hidden;
}

.imgview {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; //border: 2px solid orange; 
  background-color: white;
  z-index: 2003;
  overflow: auto;
  background: #FFFFFF;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.50);
  border-radius: 4px;
  .crop {
    position: absolute; //left:4%;
    //width:92%;
    //height:97%;
    width: 100%;
    height: 100%;
    z-index: 2003;
  }
  button {
    height: .4rem;
    width: .4rem;
  }
  .tool {
    background-color: #F5F5F5;
    position: absolute;
    height: .8rem;
    width: 3.35rem;
    bottom: 2%;
    left: 50%;
    text-align: center;
    z-index: 2004;
    border-radius: .05rem;
    transform: translateX(-50%);
    button {
      margin-top: .2rem;
      margin-left: .15rem;
      margin-right: .15rem;
    } //margin-top:-20px;
    .big {

      background: url("../../img/img_zoomin.png") no-repeat scroll right center;
      background-size: contain;
      cursor: pointer;
    }
    .small {

      background: url("../../img/img_zoomout.png") no-repeat scroll right center;
      background-size: contain;
      cursor: pointer;
    }
    .roll {

      background: url("../../img/img_refresh.png") no-repeat scroll right center;
      background-size: contain;
      cursor: pointer;
    }

    .download64 {

      background: url("../../img/img_download.png") no-repeat scroll right center;
      background-size: contain;
      cursor: pointer;
    }
  }
  .close {
    position: absolute;
    z-index: 2004;
    top: 20px;
    right: 20px;

    background: url("../../img/close-white.png") no-repeat scroll right center;
    background-size: contain;
    cursor: pointer;
  }
  .up {
    position: absolute;

    top: 50%;
    left: 0;
    z-index: 2004;
    background: url("../../img/img_left.png") no-repeat scroll right center;
    background-size: contain;
    cursor: pointer;
  }
  .down {
    position: absolute;

    top: 50%;
    right: 0;
    z-index: 2004;
    background: url("../../img/img_right.png") no-repeat scroll right center transparent;
    background-size: contain;
    cursor: pointer;
  }
}
.demo {
  background-color: rgba(0, 0, 0, 0.5);
  /* IE9、标准浏览器、IE6和部分IE7内核的浏览器(如QQ浏览器)会读懂 */
}
.demo p {
  color: #FFFFFF;
}
@media \0screen\,screen\9 {
  /* 只支持IE6、7、8 */
  .demo {
    background-color: #000000;
    filter: Alpha(opacity=50);
    position: static;
    /* IE6、7、8只能设置position:static(默认属性) ，否则会导致子元素继承Alpha值 */
    *zoom: 1;
    /* 激活IE6、7的haslayout属性，让它读懂Alpha */
  }
  .demo p {
    position: relative;
    /* 设置子元素为相对定位，可让子元素不继承Alpha值 */
  }
}

</style>
<template>
  <div :style="$route.name=='Invoicemanagement'?'height:800px':''" class="imgview demo">
   <!--  <button v-if="(showup)" @click="goup" class="up"> </button>
    <button v-if="(showdown)" @click="godown" class="down"> </button> -->
    <button class="close" @click="Close"></button>
    <div class="crop" ref="cropper" @mouseover="scaleImg" @mouseout="cancleScale">
      <div class="cropper-box">
        <div class="cropper-box-canvas" :style="{
          'width': trueWidth + 'px',
          'height': trueHeight + 'px',
          'transform': 'scale(' + scale + ',' + scale + ') ' + 'translate3d('+ x / scale + 'px,' + y / scale + 'px,' + '0)'
          + 'rotateZ('+ rotate * 90 +'deg)'
          }">
          <img :src="option.img" alt="cropper-img" ref="cropperImg" />
        </div>
      </div>
    </div>
    <div class="tool">
      <button class="small" @click="small"></button>
      <button class="big" @click="big"></button>
      <button class="roll" @click="roll"></button>
      <button class="download64" @click="down()"></button>
    </div>
    <a id="downloada"></a>
  </div>
</template>
<script>
// import VueCropper from 'vue-cropper'
//import imgview from '@/components/imgcontrol/imgview'
export default {
  name: "test",
  // components: {
  //   //'imgview':imgview,
  //   'vueCropper': VueCropper,
  // },
  props: ['imglist', 'imgindex'],
  methods: {
    Close() {
      this.$emit('CloseImg');
    },
    //加载图片
    initImg() {
      var img = new Image;
      img.src = this.imglist[this.index].src
      this.trueWidth = img.width;
      this.trueHeight = img.height;
      this.w = ~~(window.getComputedStyle(this.$refs.cropper).width.replace('px', ''))
      this.h = ~~(window.getComputedStyle(this.$refs.cropper).height.replace('px', ''))
      if (this.trueWidth > this.w) {
        // 如果图片宽度大于容器宽度
        this.scale = this.w / this.trueWidth
      }

      if (this.trueHeight * this.scale > this.h) {
        this.scale = this.h / this.trueHeight
      }
      this.$nextTick(() => {
        this.x = -(this.trueWidth - this.trueWidth * this.scale) / 2 + (this.w - this.trueWidth * this.scale) / 2
        this.y = -(this.trueHeight - this.trueHeight * this.scale) / 2 + (this.h - this.trueHeight * this.scale) / 2
      })
    },
    // 修改图片大小函数
    changeScale(num) {
      num = num || 1
      var coe = 20
      coe = coe / this.trueWidth > coe / this.trueHeight ? coe / this.trueHeight : coe / this.trueWidth
      num = num * coe
      num > 0 ? this.scale += Math.abs(num) : this.scale > Math.abs(num) ? this.scale -= Math.abs(num) : this.scale
    },
    // 缩放图片
    scaleImg() {
      this.support = "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll";
      window.addEventListener(this.support, this.changeSize)
    },
    // 移出框
    cancleScale() {
      window.removeEventListener(this.support, this.changeSize)
    },
    // 改变大小函数
    changeSize(e) {
      e.preventDefault()
      var change = e.deltaY || e.wheelDelta
      // 根据图片本身大小 决定每次改变大小的系数, 图片越大系数越小
      var isFirefox = navigator.userAgent.indexOf('Firefox')
      change = isFirefox > 0 ? change * 30 : change
      // 1px - 0.2
      var coe = this.coe
      coe = coe / this.trueWidth > coe / this.trueHeight ? coe / this.trueHeight : coe / this.trueWidth
      var num = coe * change
      num < 0 ? this.scale += Math.abs(num) : this.scale > Math.abs(num) ? this.scale -= Math.abs(num) : this.scale
      // 延迟0.1s 每次放大大或者缩小的范围
      let status = num < 0 ? 'add' : 'reduce'
      if (status !== this.coeStatus) {
        this.coeStatus = status
        this.coe = 0.2
      }
      if (!this.scaling) {
        this.scalingSet = setTimeout(() => {
          this.scaling = false
          this.coe = this.coe += 0.01
        }, 50)
      }
      this.scaling = true
    },

    OpenPic(index) {
      var imgUrl = this.imglist[index].src;
      this.option.img = this.imglist[index].src;
      console.log(imgUrl)
      console.log(this.option.img)
      if (imgUrl.toString().indexOf("base64") > -1) {
        this.IsBob = false;
        var arr = this.imglist[index].src.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        var blob = new Blob([u8arr], { type: mime });
        this.BOb = blob;
      } else {
        this.IsBob = true;
      }
    },
    small() {
      this.changeScale(-1);
    },
    big() {
      this.changeScale(1);
    },
    roll() {
      this.rotate = this.rotate <= -3 ? 0 : this.rotate - 1;
    },
    down() {
      // event.preventDefault()
      var aLink = document.getElementById('downloada');
      var myDate = new Date();
      var downloadtitle = myDate.toLocaleString();
      aLink.download = downloadtitle + '.jpg';
      // 输出
      if (!this.IsBob) {

        if (window.navigator.msSaveOrOpenBlob) { // if browser is IE   
          navigator.msSaveBlob(this.BOb, aLink.download);
          //filename文件名包括扩展名，下载路径为浏览器默认路径
        } else {
          aLink.href = window.URL.createObjectURL(this.BOb);
          aLink.click();
        }

      } else {
        aLink.href = this.option.img;
        aLink.click();



        // this.$refs.cropper.getCropData((data) => {
        //   this.downImg = data
        //   aLink.href = data
        //   aLink.click()
        // })
      }
    },
    goup() {
      if (this.index == 0) {
        return;
      }
      this.index = this.index - 1;
      this.checkupdown();
      this.initImg();
      this.OpenPic(this.index);
    },
    godown() {
      if (this.index == (this.imglist.length - 1)) {
        return;
      }
      this.index = this.index + 1;
      this.checkupdown();
      this.initImg();
      this.OpenPic(this.index);
    },
    checkupdown() {
      if (this.imglist.length > 1) {
        if (this.index != 0) {
          this.showup = true;
        } else {
          this.showup = false;
        }
        if (this.index != (this.imglist.length - 1)) {
          this.showdown = true;
        } else {
          this.showdown = false;
        }
      }
    }
  },
  created: function() {
    this.index = this.imgindex;
    this.OpenPic(this.index);
  },
  mounted: function() {
    this.initImg();
    this.checkupdown();
    /*  var cropper = document.getElementsByClassName('cropper-drag-box');
      cropper[0].onclick=(ev)=>{
        this.Close();}*/
  },
  data() {
    return {
      option: { img: '', outputSize: 1, outputType: 'jpg' },
      downImg: '#',
      showup: false,
      showdown: false,
      index: 0,
      BOb: [],
      IsBob: false,
      support: '',
      trueWidth: 0,
      trueHeight: 0,
      scale: 1,
      rotate: 0,
      x: 0,
      y: 0,
      scalingSet: '',
      scaling: false,
      coe: 0.2,
    };
  }
};

</script>
