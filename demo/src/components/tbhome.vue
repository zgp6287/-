<template>
    <div id="tbhome">
        <!-- 头部 -->
        <div class="header_con">

            <div class="header_logo fl">
                <a href="">
                    <img src="../assets/img/hylogo1.png" alt="" class="hylogo1">
                    <img src="../assets/img/hylogo2.png" alt="" class="hylogo2">
                </a>
            </div>
            <div class="header_nav fr">
                <div class="header_nav_a">

                    <!-- 1 -->
                    <a href="javascript:;">
                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

                            <el-submenu index='2' >
                                <template slot="title"><p class="hep" id="hep" @click='home2("Home2")'>关于华制</p> </template>

                                <div class="header_conent">
                                    <div class="header_conent_1">
                                        <h1>华制国际（MICI）</h1>
                                        <p>华制国际（MICI）成立于2005年，是中国规模最大的海外游学供应商，是海外教育培训产业链中关键资源的有效组织者。
                                        </p>
                                        <a href="javascript:;" @click='home2("Home2")'>MORE
                                            <span>+</span>
                                        </a>
                                    </div>
                                    <div class="header_conent_2">
                                        <div class="header_conent_01">
                                            <ul>
                                                <li>
                                                    <a href="">华制简介</a>
                                                </li>
                                                <li>
                                                    <a href="">核心优势</a>
                                                </li>
                                                <li>
                                                    <a href="">合作客户</a>
                                                </li>
                                                <li>
                                                    <a href="">团队介绍</a>
                                                </li>
                                                <li>
                                                    <a href="">联系我们</a>
                                                </li>
                                            </ul>


                                        </div>
                                        <div class="header_conent_02">
                                            <div class="header_conent_02_1">
                                                <img src="../assets/img/himg11.png" alt="" class="imgft">
                                                <p>MICI旗下拥有硅谷创新创业学院、以色列创新学院、德国智能制造学院、日本JMC株式会社等5个海外品牌</p>
                                            </div>
                                            <div class="header_conent_02_1">
                                                <img src="../assets/img/himg12.png" alt="" class="imgft">
                                                <p>MICI的目标是为中国企业家和管理层提供”宽阔的全球视野”和“深邃的科技内核”。</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </el-submenu>
                        </el-menu>
                    </a>

                    <!-- 2 -->
                    <a href="javascript:;">
                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

                            <el-submenu index='2'>
                                <template slot="title"><p class="hep" id="hep"
                                     @click='home3("Home3")'>游学产品</p></template>

                                <div class="header_conent">
                                    <div class="header_conent_1">
                                        <h1>华制国际（MICI）</h1>
                                        <p>华制国际（MICI）成立于2005年，是中国规模最大的海外游学供应商，是海外教育培训产业链中关键资源的有效组织者。
                                        </p>
                                        <a href="javascript:;" @click='home3("Home3")'>MORE
                                            <span>+</span>
                                        </a>
                                    </div>
                                    <div class="header_conent_2">
                                        <div class="header_conent_01">
                                            <ul>
                                                <li>
                                                    <a href="">标准产品</a>
                                                </li>
                                                <li>
                                                    <a href="">定制产品</a>
                                                </li>

                                            </ul>

                                        </div>
                                        <div class="header_conent_02">
                                            <div class="header_conent_02_1">
                                                <img src="../assets/img/himg21.png" alt="" class="imgft">
                                                <h6>新加坡 6天5夜6.10-15</h6>
                                                <p>颠覆世界的下一个科技史诗</p>
                                                <p>—— 新加坡区块链认知重启游学之旅 </p>
                                            </div>
                                            <div class="header_conent_02_1">
                                                <img src="../assets/img/himg22.png" alt="" class="imgft">
                                                <h6>日本 名古屋 8天7夜</h6>
                                                <p>精益溯源，以TPS密码实施再造升级</p>
                                                <p>—— 日本丰田精益标杆游学之旅 </p>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </el-submenu>
                        </el-menu>
                    </a>

                    <!-- 3 -->
                    <a href="javascript:;">
                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

                            <el-submenu index='2'>
                                <template slot="title"><p class="hep" id="hep" @click='home4("Home4")'>海外资源 </p></template>

                                <div class="header_conent">
                                    <div class="header_conent_1">
                                        <h1>华制国际（MICI）</h1>
                                        <p>华制国际（MICI）成立于2005年，是中国规模最大的海外游学供应商，是海外教育培训产业链中关键资源的有效组织者。
                                        </p>
                                        <a href="javascript:;"  @click='home4("Home4")'>MORE
                                            <span>+</span>
                                        </a>
                                    </div>
                                    <div class="header_conent_2">
                                        <div class="header_conent_01">
                                            <ul>
                                                <li>
                                                    <a href="">标准产品</a>
                                                </li>
                                                <li>
                                                    <a href="">定制产品</a>
                                                </li>

                                            </ul>

                                        </div>
                                        <div class="header_conent_02">
                                            <div class="header_conent_02_1">
                                                <img src="../assets/img/himg21.png" alt="" class="imgft">
                                                <h6>新加坡 6天5夜6.10-15</h6>
                                                <p>颠覆世界的下一个科技史诗</p>
                                                <p>—— 新加坡区块链认知重启游学之旅 </p>
                                            </div>
                                            <div class="header_conent_02_1">
                                                <img src="../assets/img/himg22.png" alt="" class="imgft">
                                                <h6>日本 名古屋 8天7夜</h6>
                                                <p>精益溯源，以TPS密码实施再造升级</p>
                                                <p>—— 日本丰田精益标杆游学之旅 </p>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </el-submenu>
                        </el-menu>
                    </a>

                    <!-- 4 -->
                    <a href="javascript:;">
                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

                            <el-submenu index='2'>
                                <template slot="title"><p class="hep" id="hep"  @click='home5("Home5")'>华制资讯 </p></template>

                                <div class="header_conent">
                                    <div class="header_conent_1">
                                        <h1>华制国际（MICI）</h1>
                                        <p>华制国际（MICI）成立于2005年，是中国规模最大的海外游学供应商，是海外教育培训产业链中关键资源的有效组织者。
                                        </p>
                                        <a href="javascript:;" @click='home5("Home5")'>MORE
                                            <span>+</span>
                                        </a>
                                    </div>
                                    <div class="header_conent_2">
                                        <div class="header_conent_01">
                                            <ul>
                                                <li>
                                                    <a href="">标准产品</a>
                                                </li>
                                                <li>
                                                    <a href="">定制产品</a>
                                                </li>

                                            </ul>

                                        </div>
                                        <div class="header_conent_02">
                                            <div class="header_conent_02_1">
                                                <img src="../assets/img/himg21.png" alt="" class="imgft">
                                                <h6>新加坡 6天5夜6.10-15</h6>
                                                <p>颠覆世界的下一个科技史诗</p>
                                                <p>—— 新加坡区块链认知重启游学之旅 </p>
                                            </div>
                                            <div class="header_conent_02_1">
                                                <img src="../assets/img/himg22.png" alt="" class="imgft">
                                                <h6>日本 名古屋 8天7夜</h6>
                                                <p>精益溯源，以TPS密码实施再造升级</p>
                                                <p>—— 日本丰田精益标杆游学之旅 </p>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </el-submenu>
                        </el-menu>
                    </a>

                    <!-- 5 -->
                    <a href="javascript:;">
                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

                            <el-submenu index='2'>
                                <template slot="title"><p class="hep" id="hep"  @click='home6("Home6")'>考察分享 </p> </template>

                                <div class="header_conent">
                                    <div class="header_conent_1">
                                        <h1>华制国际（MICI）</h1>
                                        <p>华制国际（MICI）成立于2005年，是中国规模最大的海外游学供应商，是海外教育培训产业链中关键资源的有效组织者。
                                        </p>
                                        <a href="javascript:;" @click='home6("Home6")'>MORE
                                            <span>+</span>
                                        </a>
                                    </div>
                                    <div class="header_conent_2">
                                        <div class="header_conent_01">
                                            <ul>
                                                <li>
                                                    <a href="">标准产品</a>
                                                </li>
                                                <li>
                                                    <a href="">定制产品</a>
                                                </li>

                                            </ul>

                                        </div>
                                        <div class="header_conent_02">
                                            <div class="header_conent_02_1">
                                                <img src="../assets/img/himg21.png" alt="" class="imgft">
                                                <h6>新加坡 6天5夜6.10-15</h6>
                                                <p>颠覆世界的下一个科技史诗</p>
                                                <p>—— 新加坡区块链认知重启游学之旅 </p>
                                            </div>
                                            <div class="header_conent_02_1">
                                                <img src="../assets/img/himg22.png" alt="" class="imgft">
                                                <h6>日本 名古屋 8天7夜</h6>
                                                <p>精益溯源，以TPS密码实施再造升级</p>
                                                <p>—— 日本丰田精益标杆游学之旅 </p>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </el-submenu>
                        </el-menu>
                    </a>

                    <!-- 6 -->
                    <a href="javascript:;">
                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

                            <el-submenu index='2'>
                                <template slot="title"><p class="hep" id="hep"  @click='home7("Home7")'>关于华制 </p></template>

                                <div class="header_conent">
                                    <div class="header_conent_1">
                                        <h1>华制国际（MICI）</h1>
                                        <p>华制国际（MICI）成立于2005年，是中国规模最大的海外游学供应商，是海外教育培训产业链中关键资源的有效组织者。
                                        </p>
                                        <a href="javascript:;" @click='home7("Home7")'>MORE
                                            <span>+</span>
                                        </a>
                                    </div>
                                    <div class="header_conent_2">
                                        <div class="header_conent_01">
                                            <ul>
                                                <li>
                                                    <a href="">标准产品</a>
                                                </li>
                                                <li>
                                                    <a href="">定制产品</a>
                                                </li>

                                            </ul>

                                        </div>
                                        <div class="header_conent_02">
                                            <div class="header_conent_02_1">
                                                <img src="../assets/img/himg21.png" alt="" class="imgft">
                                                <h6>新加坡 6天5夜6.10-15</h6>
                                                <p>颠覆世界的下一个科技史诗</p>
                                                <p>—— 新加坡区块链认知重启游学之旅 </p>
                                            </div>
                                            <div class="header_conent_02_1">
                                                <img src="../assets/img/himg22.png" alt="" class="imgft">
                                                <h6>日本 名古屋 8天7夜</h6>
                                                <p>精益溯源，以TPS密码实施再造升级</p>
                                                <p>—— 日本丰田精益标杆游学之旅 </p>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </el-submenu>
                        </el-menu>
                    </a>




                </div>
                <div class="header_phonebox">
                    <img src="../assets/img/he_phone1.png" alt="" class="he_phone1">
                    <img src="../assets/img/he_phone2.png" alt="" class="he_phone2"> 4008-785-852
                </div>
                <div class="header_en">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            EN<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>cn</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>

        <div >
            <router-view/>
        </div>
       
        <!-- 尾部/////////////////////////////  -->
        <div class="footer_box">
            <div class="fo_top">
                <div class="fo_con">
                    <div class="fo_conle">
                        <div class="fo_conle_link">
                            <a href="">
                                <img src="../assets/img/xlimg.png" alt="">
                            </a>
                            <a href="">
                                <img src="../assets/img/wximg.png" alt="">
                            </a>
                            <a href="">
                                <img src="../assets/img/ttimg.png" alt="">
                            </a>
                        </div>
                        <div class="fo_tit">
                            <h1>联系我们</h1>
                        </div>
                        <div class="fo_phone">
                            <img src="../assets/img/fo1.png" alt="">
                            <span>4008-785-852</span>

                        </div>
                        <div class="fo_ul">
                            <ul>
                                <li>
                                    <img src="../assets/img/fo3.png" alt=""> 邮箱：huazhi@micc.cn
                                </li>
                                <li>
                                    <img src="../assets/img/fo4.png" alt=""> 地址：上海市杨浦区五角场万达广场A座21楼
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="fo_conri">
                        <ul class="fo_ul">
                            <h1>关于华制</h1>
                            <li><a href="/">华制简介</a>
                            </li>
                            <li><a href="">核心优势</a> </li>
                            <li><a href="">合作客户</a> </li>
                            <li><a href="">团队介绍</a> </li>
                            <li><a href=""></a>联系我们></a> </li>

                        </ul>
                        <ul class="fo_ul">
                            <h1>游学产品</h1>
                            <li><a href="">标准产品</a> </li>
                            <li><a href="">定制产品</a> </li>
                        </ul>
                        <ul class="fo_ul">
                            <h1>海外资源</h1>
                            <li><a href="">高校资源</a> </li>
                            <li><a href="">企业资源</a> </li>
                            <li><a href="">诺奖师资</a> </li>
                        </ul>
                        <ul class="fo_ul">
                            <h1>华制资讯</h1>
                            <li><a href="">企业活动</a> </li>
                            <li><a href="">出团报道</a> </li>
                        </ul>
                        <ul class="fo_ul">
                            <h1>考察分享</h1>
                            <li><a href="">行程报道</a> </li>
                            <li><a href="">精彩图片</a> </li>
                            <li><a href="">精彩视频</a> </li>
                        </ul>
                        <ul class="fo_ul">
                            <h1>出行服务</h1>
                            <li><a href="">签证准备</a> </li>
                            <li><a href="">下载中心</a> </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div class="fo_btm">
                <img src="../assets/img/foimg6.png" alt="">
                <span>© 2018-2019 上海华制企业管理咨询有限公司 版权所有Powered by Yongsy</span>
                <br>
                <img src="../assets/img/fo_pic.gif" alt="">
            </div>
        </div>
    </div>


</template>

<script>
   
    export default {
        name: "tbhome",

        data() {
            return {
                hehe:'Home1',
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

                e.target.style.color = "red";
            },
            leave: function (e) {

                e.target.style.color = "black";
            },
            handleSelect() {

            },
            home2(cal){
                // alert("000")
                this.$router.push('/home2')
            },
            home3(cal){
                //alert("000")
                this.$router.push('/home3')
            },
            home4(cal){
                //alert("000")
                this.$router.push('/home4')
            },
            
            home5(cal){
                //alert("000")
                this.$router.push('/home5')
            },
            
            home6(cal){
                //alert("000")
                this.$router.push('/home6')
            },
            
            home7(cal){
                //alert("000")
                this.$router.push('/home7')
            },

             

            //监听滚轮事件
            handleScroll() {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

                //   console.log(scrollTop)
                if (scrollTop > 50) {

                    //   console.log('大于50')
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

    }
</script>



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

    /*顶栏*/
    .header_box {
        min-width: 1200px;
        /* height: 100px; */
       
    }

    .header_con {
        width: 100%;
        /* margin: 0 150px; */
        padding: 0 150px;
        display: flex;
        justify-content: space-between;
        position: fixed;
        z-index: 10;
        box-sizing: border-box;
        /* background-color: rgba(255,0,0,0.5); */
    }

    /*顶栏logo*/
    .header_logo {
        width: 30%;
        height: 100px;
        /* background-color: transparent; */
        box-sizing: border-box;
    }

    .header_logo a {
        display: inline-block;
        width: 160px;
        height: 100px;
        overflow: hidden;
        margin-top: 30px;
    }

    .header_logo img {
        width: 160px;
        line-height: 100px;
    }

    .hylogo2 {
        display: none;

    }
    .el-dropdown-menu__item--divided::before, .el-menu, .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover, .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
    background-color: transparent;
}

    /*顶栏 右侧内容*/
    .header_nav {
        width: 70%;
        height: 100px;

        display: flex;
        justify-content: space-between;
    }

    .header_nav_a {
        height: 100%;
        width: 70%;
        display: flex;
        justify-content: space-between;
        line-height: 100px;
        margin-top: 20px;
    }

    .el-submenu__title {
        padding: 0;
    }

    .el-submenu__icon-arrow,
    .el-icon-arrow-down {
        display: none;
    }

    .el-menu-demo,
    .el-menu--horizontal,
    .el-menu {
        background-color: transparent;
        border: none;
    }

    .hep {
        margin: 0;
        font-size: 18px;
        height: 100%;
        width: 100%;
    }

    #hep {
        color: white;
    }

    #hep:hover {
        color: red;
    }


    .header_conent {
        width: 1400px;
        height: 500px;
        background-color: rgba(0, 0, 0, 0.88);
        position: relative;
        top: 5px;
        display: flex;
        justify-content: space-between;

    }

    .header_conent_1 {
        width: 33%;
        height: 100%;
        /* background-color: #d3dce6; */
        padding-bottom: 0px;
        padding-left: 60px;
        padding-right: 60px;
        padding-top: 55px;
        box-sizing: border-box;
    }

    .header_conent_1 h1 {
        color: red;
        font-size: 26px;
        font-weight: 400;
        margin-top: 50px;
    }

    .header_conent_1 p {
        color: white;
        font-size: 14px;
        font-weight: 400;
        line-height: 25.2px;
        margin-top: 50px;
    }

    .header_conent_1 a {
        display: inline-block;
        width: 160px;
        height: 50px;
        border: 1px solid white;
        border-radius: 60px;
        margin-top: 50px;
        font-size: 18px;
        color: red;
        text-align: center;
        line-height: 50px;
        display: flex;
        justify-content: space-around;
        box-sizing: border-box;
    }

    .header_conent_1 a:hover {
        background-color: red;
        color: white;
        border: none;

    }

    .header_conent_2 {
        width: 70%;
        height: 95%;
        background-color: rgb(174, 174, 174);
        margin-top: 25px;
        display: flex;
        justify-content: space-between;

    }

    .header_conent_01 {
        width: 25%;
        height: 100%;
        /* background-color: aqua; */
        padding: 50px 70px;
        box-sizing: border-box;
        color: #333333;
        font-size: 16px;
    }

    .header_conent_01 li {

        margin: 20px 0;
    }

    .header_conent_01 a {
        color: #333333;
        font-size: 16px;
    }

    .header_conent_01 a:hover {
        color: #c7000a;
    }

    .header_conent_02 {
        width: 75%;
        height: 100%;
        background-color: rgb(130, 130, 131);
        padding: 60px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;

    }

    .header_conent_02_1 {
        width: 45%;
        text-align: left;
        /* background-color: lightyellow; */
        box-sizing: border-box;
        color: rgb(51, 51, 51);
        overflow: hidden;
    }

    .header_conent_02_1 p {
        line-height: 30px;
        margin: 0;
    }

    .header_conent_02_1 h6 {
        color: #c7000a;
        font-size: 14px;
        font-weight: 400;
        margin-top: 20px;
        margin-bottom: 20px;
    }


    .header_phonebox {
        color: white;
        line-height: 100px;
        font-size: 24px;
        display: flex;
        justify-content: space-between;
    }

    .header_phonebox img {
        width: 20px;
        height: 20px;
        margin-top: 40px;
        margin-right: 10px;
    }

    .he_phone2 {
        display: none;
    }

    .header_en {
        margin-top: 40px;
        height: 30px;
        color: white;
        font-size: 16px;
    }

    .el-dropdown-link {
        color: white;
        font-size: 16px;
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

    

    

    .footer_box {
        height: 629px;
        background-image: url('../assets/img/inbut.jpg');
        margin-top: 200px;
    }

    .fo_top {
        height: 450px;

        padding: 110px 0 0 0;
        box-sizing: border-box;
    }

    .fo_con {
        height: 70%;
        box-sizing: border-box;
        padding: 0 124px;

        display: flex;
        justify-content: space-between;
    }

    .fo_conle {
        width: 400px;
        height: 234px;

    }

    .fo_conri {
        width: 1032px;
        height: 197px;

        display: flex;
        justify-content: space-between;
    }

    .fo_conle_link {
        width: 100%;
        height: 25px;

        padding-left: 20px;
        box-sizing: border-box;
        margin-top: 20px;
    }

    .fo_conle_link a {
        margin-right: 15px;
    }

    .fo_tit h1 {
        font-size: 18px;
        font-weight: 400;
        color: white;
        margin-top: 30px;
    }

    .fo_phone {

        color: white;
        font-size: 26px;
        font-weight: 400;
        height: 40px;
        box-sizing: border-box;
    }

    .fo_phone img {
        width: 37px;
        height: 33px;
    }

    .fo_phone span {
        line-height: 40px;
        box-sizing: border-box;
    }

    .fo_ul {
        width: 100%;
        height: 63px;

        margin-top: 30px;
        color: #888888;
        text-align: left;
    }

    .fo_ul h1 {
        font-size: 18px;
        font-weight: 400;
    }

    .fo_ul a {
        display: block;
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 10px;
        color: #888888;
    }

    .fo_ul a:hover {
        color: #c7000a
    }

    .fo_ul img {
        width: 13px;
    }

    .fo_btm {
        text-align: center;
        color: #888888;
    }

    .fo_btm img {
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>