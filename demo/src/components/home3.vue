<template>
    <div>

        <div class="home2_bg">
            <div class="hz_name box">
                <div class="hz_name_con box">
                    <div class="hz_h1">
                        <h1>标准产品</h1>
                        <ul class="hz_ul">
                            <a href="/"><li>
                                    <img src="http://www.miciall.com/Public/Cn/images/j_home.png" alt="">
                                    <img src="http://www.miciall.com/Public/Cn/images/j_jt.png" alt="">
                                </li></a>
                            <a href=""><li>标准产品
                                    <img src="http://www.miciall.com/Public/Cn/images/j_jt.png" alt=""></li></a>
                            <a href=""><li>美国</li></a>
                        </ul>
                    </div>

                </div>

            </div>

        </div>
        <div class="home2_dh box">

            <div class="home2_dh_con">
                <a href="">标准产品</a>
            </div>

            <div class="home2_dh_con">
                <a href="">定制产品</a>
            </div>

        </div>

        <div class="home3_box box">
            <div class="home3_con_bt">
                <div class="home3_con_gj">美国</div>
                <div><img src="http://www.miciall.com/Public/Cn/images/tabbor.png" alt=""></div>
            </div>
            <div class="home3_con_bt">
                <div class="home3_con_gj">英国</div>
                <div><img src="http://www.miciall.com/Public/Cn/images/tabbor.png" alt=""></div>
            </div>
            <div class="home3_con_bt">
                <div class="home3_con_gj">德国</div>
                <div><img src="http://www.miciall.com/Public/Cn/images/tabbor.png" alt=""></div>
            </div>
            <div class="home3_con_bt">
                <div class="home3_con_gj">日本</div>
                <div><img src="http://www.miciall.com/Public/Cn/images/tabbor.png" alt=""></div>
            </div>
            <div class="home3_con_bt">
                <div class="home3_con_gj">以色列</div>
                <div><img src="http://www.miciall.com/Public/Cn/images/tabbor.png" alt=""></div>
            </div>
            <div class="home3_con_bt">
                <div class="home3_con_gj">印度</div>
                <div><img src="http://www.miciall.com/Public/Cn/images/tabbor.png" alt=""></div>
            </div>
            <div class="home3_con_bt">
                <div class="home3_con_gj">爆款</div>
                <div><img src="http://www.miciall.com/Public/Cn/images/tabbor.png" alt=""></div>
            </div>
        </div>
        <div class="home3_imgbox box">
            <div class="home3_imgleft">
                <a href="" class="home3_imga"> <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180530/20180530211302_5b0ea35e34db8.jpg"
                        alt="">
                </a>
            </div>
            <div class="home3_imgright">
                <div class="home3_imgright_le">
                    <a href="" class="home3_imgale"> 
                        <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180601/20180601141952_5b10e588ee8d3.jpg"
                            alt="">
                    </a>
                    <br>
                    <a href="" class="home3_imgale mt">
                         <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180530/20180530211302_5b0ea35e34db8.jpg"
                            alt="">
                    </a>

                </div>
                <div class="home3_imgright_ri">
                    <a href="" class="home3_imgale"> 
                    <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180601/20180601142333_5b10e665e3589.jpg"
                            alt="">
                    </a>
                    <a href="" class="home3_imgale mt">
                         <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180601/20180601141835_5b10e53ba6128.jpg"
                            alt="">
                    </a></div>


            </div>
        </div>

    </div>



    </div>


</template>

<script>
    export default {
        name: "home3",

        data() {
            return {

            };

            methods: {
                //华制简介背景图旋转180度
                $(".home2_dh_bg").css("transform", "rotate(180deg)");


            }
        }

    }
</script>

<style lang="scss">
    ul,
    li,

    a,
    p {
        list-style: none;
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    .box {
        width: 1200px;
        margin: 0 auto;
    }



    .home2_bg {
        background-image: url("http://www.miciall.com/Public/Uploads/uploadfile/images/20180523/20180523171255_5b053097f0ec8.jpg");
    }

    .hz_name {
        height: 416px;
        position: relative;
    }

    .hz_name_con {
        display: inline-block;
        height: 77px;

        position: absolute;
        bottom: 80px;
        text-align: right;
    }

    .hz_ul {
        width: 137px;
        height: 22px;
        display: flex;
        font-size: 12px;
        float: right;
        margin-top: 10px;
        color: #ffffff;
    }

    .hz_h1 {
        color: #ffffff;
    }

    .hz_ul a {
        display: block;
        color: #ffffff;
    }

    .hz_ul a:hover {
        color: #c7000a;
    }

    .hz_ul img {
        margin: 0 1px;
        height: 12px;
    }

    .home2_dh {
        background-color: white;
        height: 57px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        margin-top: -27px;
        z-index: 8888888;

    }

    .home2_dh_con {
        width: 51%;
        height: 100%;
        border-left: 1px solid #e4e4e4;
        border-right: 1px solid #e4e4e4;
        border-bottom: 1px solid #c0c0c0;
        margin-left: -1px;
        text-align: center;
        box-sizing: border-box;
        padding: 15px;
        background-color: white;

    }

    .home2_dh_con a {
        color: #999999;
    }

    .home2_dh_bg {
        height: 1100px;
        background-image: url("http://www.miciall.com/Public/Cn/images/ny_sec.png");
        background-repeat: no-repeat;

        z-index: 1;
        box-sizing: border-box;
        margin-top: -30px;
    }

    .home3_box {
        height: 150px;
        /* background-color: lightblue; */
        display: flex;
        justify-content: space-between;
        padding-top: 70px;
        box-sizing: border-box;
    }

    .home3_con_bt {
        width: 100%/7;
        text-align: center;
        color: #999999;
    }

    .home3_imgbox {
        height: 600px;
        /* background-color: lightpink; */
        display: flex;
        justify-content: space-around;

        box-sizing: border-box;
    }

    .home3_imgbox img {

        height: 100%;
    }

    .home3_imgleft,
    .home3_imgright {
        width: 50%;
        height: 100%;
        /* background-color: #22be83; */

        box-sizing: border-box;
    }

    .home3_imgleft {
        margin-right: 5px;
    }

    .home3_imgright {
        margin-left: 5px;
    }

    .home3_imga {
        height: 100%;
        width: 100%;
        display: block;
        box-sizing: border-box;
        overflow: hidden;
    }

    .home3_imgright {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;

    }

    .home3_imgright_le {
        width: 50%;
        height: 100%;
        /* background-color: lightyellow; */
        margin-right: 5px;
        box-sizing: border-box;
    }

    .home3_imgright_ri {
        width: 50%;
        height: 100%;
        background-color: lightcyan;
        margin-left: 5px;
        box-sizing: border-box;
    }

    .home3_imgale {
        height: 295px;
        width: 100%;
        display: inline-block;
        box-sizing: border-box;
        overflow: hidden;
    }
    .home3_imgale img{
        width: 100%;
        height: 100%;
    }
    .mt{
        margin-top: 6px;
    }
</style>