<template>

  <div class="header_box">

    <div class="carousel_box">

      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item,index) in dataimg" :key="index">
          <h3>
            <img :src="item.src" alt=""></h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="ppdw_box">
      <div class="ppdw_con">

        <div class="ppdw_conn">
          <img src="../assets/img/品牌定位1.png" alt="">
          <div>
            <h6>——品牌定位</h6>
            <p @mouseover="hover($event)" @mouseleave="leave($event)" ref="ppdw_p">国内规模最大的海外高端游学供应商</p>
          </div>
        </div>

        <div class="ppdw_conn">
          <img src="../assets/img/品牌定位2.png" alt="">
          <div>
            <h6>—— 经营使命</h6>
            <p @mouseover="hover($event)" @mouseleave="leave($event)" ref="ppdw_p">拓宽企业认知边界</p>
          </div>
        </div>
        <div class="ppdw_conn">
          <img src="../assets/img/品牌定位3.png" alt="">
          <div>
            <h6>——服务理念</h6>
            <p @mouseover="hover($event)" @mouseleave="leave($event)" ref="ppdw_p">真心 • 无微不至</p>
          </div>
        </div>
      </div>

    </div>

    <div class="down_img" @click="top">
      <img src="../assets/img/首页下箭头.png" alt="">
    </div>


    <div class="lunbo_two_box">
      <div class="new_logo">
        <img src="../assets/img/newlogo.png" alt="">
      </div>

      <div class="lunbo_content_box">

        <div class="block">
          鼠标滑动轮播图
          <chome1></chome1>
        </div>

        <div class="block">
          鼠标滑动轮播图
          <chome1></chome1>
        </div>

      </div>
      <div class="pro_logo">
        <img src="../assets/img/prologo.png" alt="">
      </div>
    </div>

    <div class="lunbtwo_2">
      <div class="lunb_con">

        <chome></chome>
      </div>
    </div>

    <!-- newslogo -->
    <div class="pro_logo">
      <img src="../assets/img/innews.png" alt="">
    </div>

    <div class="news_box">
      <div class="news_con">
        <div></div>
        <div class="news_left">
          <img :src="newsl1" alt="">
        </div>
        <div class="news_right">

          <div class="news_right_con" @mouseenter="news_enter($event)" @mouseleave="news_leave($event)">

            <div class="news_right_img">
              <img :src="news21" alt="" class="imgft">
            </div>
            <div>
              <h1 class="news_h1"> - AUG.15</h1>
              <p>招生丨日本百年企业传承之旅</p>
            </div>

          </div>

          <div class="news_right_con" @mouseenter="news_enter($event)" @mouseleave="news_leave($event)">
            <div class="news_right_img">
              <img :src="news22" alt="" class="imgft">
            </div>
            <div>
              <h1 class="news_h1"> - AUG.14</h1>
              <p>赵胜：为什么区块链是互联网的100倍？</p>
            </div>

          </div>
          <div class="news_right_con" @mouseenter="news_enter($event)" @mouseleave="news_leave($event)">
            <div class="news_right_img">
              <img :src="news23" alt="" class="imgft">
            </div>
            <div>
              <h1 class="news_h1"> - AUG.03</h1>
              <p>华制国际亮相达晨创投2017年度合伙人大会</p>
            </div>

          </div>
        </div>

      </div>
      <div class="aug30_box">
        <div class="aug30_left">
          <h1> - AUG.30</h1>
          <p>华制国际亮相达晨创投2017年度合伙人大会</p>
        </div>
        <div class="augmore">
          <a href="">MORE
            <span>+</span>
          </a>
        </div>
      </div>

    </div>


  </div>

</template>

<script>

  import chome from './carousel/chome'
  import chome1 from './carousel/chome1'

  export default {
    name: "home1",
    components: {
      chome,
      chome1

    },
    data() {
      return {
        activeIndex: '',

        newsl1: require("../assets/img/newsl1.jpg"),
        news21: require("../assets/img/news21.jpg"),
        news22: require("../assets/img/news22.jpg"),
        news23: require("../assets/img/news23.jpg"),
        dataimg: [
          {
            src: require("../assets/img/首页轮播1.jpg")
          },
          {
            src: require("../assets/img/首页轮播2.jpg")
          },
          {
            src: require("../assets/img/首页轮播3.jpg")
          },
          {
            src: require("../assets/img/首页轮播4.jpg")
          }
        ]
      };
    },
    methods: {
      hover: function (e) {
        //  this.$refs.ppdw_p.style.color = 'red';
        // console.log(1121211)
        e.target.style.color = "red";
        //  $(this).css('background',"red")
        //  $(this).find('p').css('color',"red")
      },
      leave: function (e) {
        //  this.$refs.ppdw_p.style.color = 'black';
        e.target.style.color = "black";
      },
      handleSelect() {

      },
      news_enter: function (e) {
        e.target.children[1].children[0].style.color = 'white'
        e.target.children[1].children[1].style.color = 'white'
        e.target.children[0].children[0].style.transform = 'scale(1.1)'
      },
      news_leave: function (e) {
        e.target.children[1].children[0].style.color = '#999999'
        e.target.children[1].children[1].style.color = '#999999'
        e.target.children[0].children[0].style.transform = 'scale(1)'

        // $('.news_h1').css("color","#999999")
        // $('.news_h1').css("color","#999999")
      },
      //点击滑动事件
      top() {
        $('body,html').animate({ scrollTop: 870 }, 800)
      },



      //监听滚轮事件
      handleScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

        console.log(scrollTop)
        if (scrollTop > 50) {

          // console.log('大于50')
          $('.header_con').css('background-color', 'white')
          $('.hep').css('color', 'black')
          $('.header_phonebox').css('color', '#c7000a')
          $('.el-dropdown-link').css('color', 'black')

          $('.hylogo2').css('display', 'block')
          $('.hylogo1').css('display', 'none')

          $('.he_phone2').css('display', 'block')
          $('.he_phone1').css('display', 'none')

        }
        else {
          $('.header_con').css('background-color', 'transparent')
          $('.hep').css('color', 'white')
          $('.header_phonebox').css('color', 'white')
          $('.el-dropdown-link').css('color', 'white')

          $('.hylogo2').css('display', 'none')
          $('.hylogo1').css('display', 'block')

          $('.he_phone2').css('display', 'none')
          $('.he_phone1').css('display', 'block')


        }

      },


    },
    mounted() {
      //监听滚轮事件
      window.addEventListener('scroll', this.handleScroll)


    },

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    /* background-color: aquamarine; */
  }

  ul,
  li,
  a,
  h6 {
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }


  /*轮播图*/
  .carousel_box {
    width: 100%;
  }

  .el-carousel__container {
    height: 750px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .el-carousel__arrow {
    width: 80px;
    height: 80px;
    font-size: 70px;
    font-weight: 100;
    margin: 0 40px;
    background: none;
  }

  .el-carousel__arrow:hover {
    background: none;
  }

  /*品牌定位*/
  .ppdw_box {
    width: 1230px;
    height: 130px;
    /* background-color: bisque; */
    margin: 0 auto;
    padding: 28px 80px;
    box-sizing: border-box;
  }

  .ppdw_con {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .ppdw_conn {
    width: 400px;
    height: 100%;
    border-left: 1px solid lightgrey;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    padding: 0 25px;
  }

  .ppdw_conn img {
    width: 32px;
    height: 32px;
  }

  .ppdw_conn h6 {
    color: red;
    font-size: 14px;
    font-weight: 400;
  }

  .ppdw_conn p {
    width: 150px;
    height: 40px;
  }

  .ppdw_con:last-child {
    border-right: 1px solid lightgrey;
  }

  .down_img {
    width: 100%;
    height: 50px;
    text-align: center;

  }

  .new_logo {
    margin-top: 40px;
    width: 100%;
    height: 117px;
    text-align: center;
  }

  .pro_logo {
    width: 100%;
    height: 117px;
    text-align: center;
    margin: 100px 0;
  }

  .lunbo_two_box {
    width: 100%;
    height: 1050px;
    background-image: url("../assets/img/inbg_02.jpg");
    box-sizing: border-box;
  }

  .lunbo_content_box {
    width: 1903px;
    height: 600px;
    padding: 0 127px;
    margin: 50px auto;
    box-sizing: border-box;
    /* background-color: #99a9bf; */
    display: flex;
    justify-content: space-around;
  }

  /*双轮播图*/

  .block {
    width: 660px;
    height: 660px;
    /* background-color: antiquewhite; */
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .lunbo_con {
    background-color: beige;
  }

  /*多图轮播*/
  .lunbtwo_2 {
    width: 100%;
    background-image: url('../assets/img/inbg_04.jpg')
  }

  .lunb_con {
    width: 100%;
    height: 500px;
  }

  .news_box {
    width: 100%;
    height: 500px;
    background-image: url("../assets/img/inbg_02.jpg");
  }

  .news_con {
    width: 100%;
    height: 500px;

    margin: 0 auto;
    display: flex;
    justify-content: space-between;

  }

  .news_left {
    width: 45%;
    height: 100%;

    overflow: hidden;
    margin-left: 150px;

  }

  /*鼠标进入图片放大*/
  .news_left img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    transition: all 0.4s;

  }

  .news_left:hover img {
    transform: scale(1.1);
    transition: all 0.4s;
  }

  .news_right {
    width: 50%;
    height: 110%;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    box-sizing: border-box;
    margin-left: 100px;
    padding-left: 100px;
    position: relative;
    top: -25px;

  }

  .news_right_con {
    width: 100%;
    height: 160px;

    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;

  }

  .news_right_con h1 {
    color: #999999;
    font-size: 30px;
    font-weight: 400;
  }

  .news_right_con p {
    color: #333333;
    font-size: 18px;
    font-weight: 700;
  }

  .news_right_con:hover {
    background-color: #f11823;

  }



  .news_right_img {
    width: 220px;
    height: 140px;

    overflow: hidden;
    position: relative;
    left: -100px;
    top: 10px;

  }

  .news_right_img img {
    width: 220px;
    height: 140px;
  }

  .imgft:hover {
    transform: scale(1.1);
    transition: all 0.4s;
  }

  .imgft {
    transform: scale(1);
    transition: all 0.4s;
  }

  .aug30_box {
    height: 200px;

    padding: 0 150px;
    display: flex;
    justify-content: space-between;

  }

  .aug30_left {
    width: 400px;
    display: inline-block;
  }

  .aug30_left h1 {
    color: rgb(153, 153, 153);
    font-size: 30px;
    font-weight: 400;
  }

  .aug30_left p {
    font-size: 20px;
    color: #333333;
    line-height: 1.5;
    font-weight: bold;
  }

  .aug30_left p:hover {
    color: #c7000a;
  }

  .augmore {
    width: 160px;
    margin-top: 100px;
    display: inline-block;
    margin-bottom: 50px;
  }

  .augmore a {
    display: inline-block;
    width: 160px;
    height: 50px;
    border: 1px solid #9b9b9b;
    border-radius: 60px;
    font-size: 18px;
    color: red;
    text-align: center;
    line-height: 50px;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
  }

  .augmore a:hover {
    background-color: red;
    color: white;
    border: none;
  }
</style>