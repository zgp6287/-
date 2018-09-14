<template>
        <div>
    
            <div class="home2_bg">
                <div class="hz_name box">
                    <div class="hz_name_con box">
                        <div class="hz_h1">
                            <h1>出行服务</h1>
                            <ul class="hz_ul">
                                <a href="/"><li>
                                        <img src="http://www.miciall.com/Public/Cn/images/j_home.png" alt="">
                                        <img src="http://www.miciall.com/Public/Cn/images/j_jt.png" alt="">
                                    </li></a>
                                <a href=""><li>出行服务
                                        <img src="http://www.miciall.com/Public/Cn/images/j_jt.png" alt=""></li></a>
                                <a href=""><li>签证准备</li></a>
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
            <!-- <div style="padding:500px 0">
              <carousel></carousel>
            </div> -->
            
          </div>
            
        </div>
    
    
    </template>
    
    <script>
    import carousel from './carousel'
    export default {
      name: "home7",
      components:{carousel}
      ,
      data() {
        return {
          invTime: 2000,
               
        };
        
    
        methods: {
          //华制简介背景图旋转180度
          $(".home2_dh_bg").css("transform", "rotate(180deg)");
    
    
        }
        
      },
      components: {
            carousel
        }
    
    }
    </script>
    
    <style scoped>
    ul,
    li,
    
    a,
    p{
      list-style: none;
      margin: 0;
      padding: 0;
      text-decoration: none;
    }
    
    .box {
      width: 1230px;
      margin: 0 auto;
    }
    
    
    
    .home2_bg {
      background-image: url("http://www.miciall.com/Public/Uploads/uploadfile/images/20180524/20180524125519_5b0645b7eca44.jpg");
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
      width: 50%;
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
    
    </style>