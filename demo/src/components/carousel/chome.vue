<template>
        <!-- 制作一个框架包裹slider -->
        <div class="body" style="height: 600px;">
            

            <div style="width: 70%;height: 100%;margin:20px auto;height:500px;">
                <!-- 配置slider组件 -->
                <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit' style="height: 100%;">
                    <!-- 直接使用 slideritem slot -->
                    <slideritem class="lunb" style="width:25%;height: 500px;">1111111</slideritem>
                    <slideritem class="lunb" style="width:25%;height: 500px;">222222</slideritem>
                    <slideritem class="lunb" style="width:25%;height: 500px;">3333333</slideritem>
                    <slideritem class="lunb" style="width:25%;height: 500px;">4444444</slideritem>
                    <slideritem class="lunb" style="width:25%;height: 500px;">55555555</slideritem>
                    <slideritem class="lunb" style="width:25%;height: 500px;">66666666</slideritem>
                    <slideritem class="lunb" style="width:25%;height: 500px;">7777777</slideritem>
                    <slideritem class="lunb" style="width:25%;height: 500px;">8888888</slideritem>
                    <slideritem class="lunb" style="width:25%;height: 500px;">999999</slideritem>
                    <slideritem class="lunb" style="width:25%;height: 500px;">1010101101</slideritem>
                    
                    
                    <!-- <slideritem v-for="(item,index) in someList" :key="index" :style="item.style" style="width: 100%;">{{item.html}}</slideritem> -->
                    <!-- 设置loading,可自定义 -->
                    <div slot="loading">loading...</div>
                </slider>
                
            </div>
            
  
    
        </div>
    </template>
    
    <script>
        // import '../assets/js/build.js'
        // 基础滚动
        // import sliderbasic from './components/slider_basic'
    
        import { slider, slideritem } from 'vue-concise-slider'// import slider components
    
        export default {
    
            data() {
                return {
                    //Image list
                    someList: [
                
                    ],
                    //Sliding configuration [obj]
                    options: {
                        currentPage: 0,
                        thresholdDistance: 100,
                        thresholdTime: 500,
                        autoplay: 2000,
                        loop: true,
                        direction: 'horizontal',
                        loopedSlides: 1,
                        slidesToScroll: 1,
                        timingFunction: 'ease',
                        speed: 300,
                        infinite:10
    
                    }
                }
            },
            components: {
                slider,
                slideritem
            },
            mounted() {
                let that = this
                setTimeout(function () {
                    that.someList = [
                        {
                            html: '',
                            style: {
                                'background-image':'url(http://www.miciall.com/Public/Uploads/uploadfile/images/20180913/20180913140249_5b99fd89907da.jpg)'
                            }
                        },
                        {
                            html: '',
                            style: {
                                'background-image':'url(http://www.miciall.com/Public/Uploads/uploadfile/images/20180601/20180601145035_5b10ecbb9c1c0.jpg)'
                            }
                        },
                        {
                            html: '',
                            style: {
                                'background-image':'url(http://www.miciall.com/Public/Uploads/uploadfile/images/20180717/20180717173440_5b4db830e5499.png)'
                            }
                        },{
                            html: '',
                            style: {
                                'background-image':'url(http://www.miciall.com/Public/Uploads/uploadfile/images/20180601/20180601134955_5b10de834168b.png)'
                            }
                        },
                        
                    ]
                }, 2000)
            },
            methods: {
                // Listener event
                slide(data) {
                    console.log(data)
                },
                onTap(data) {
                    console.log(data)
                },
                onInit(data) {
                    console.log(data)
                }
            }
        }
    </script>
    
    <style scoped>

        .lunb{
            width: 25%;
            height: 100%;
            background-image: url('http://www.miciall.com/Public/Uploads/uploadfile/images/20180530/20180530211056_5b0ea2e0d13aa.jpg');
            margin: 0 5px;
            
        }
        .div {
            background-color: lightblue;
        }
    
        .body {
            background: #eee none repeat scroll 0 0;
            color: #000;
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
            font-size: 14px;
            margin: 0;
            padding: 0;
            /* position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;*/
    
            /*bug:当内容超过一屏时，滚动条需要默认显示*/
            overflow-y: scroll;
            width: 100%;
        }
    
        .body div {
            width: 100%;
            
        }
    
        .main {
            display: -webkit-flex;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            height: 100%;
            text-align: center;
            margin-bottom: 20px;
            
            
        }
    
        h3 {
            font-size: 20px;
            margin: 0;
            margin-top: 25px;
        }
    </style>