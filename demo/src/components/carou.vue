<template>
    <!-- 制作一个框架包裹slider -->
    <div class="body">
        <div style="width:30%;margin:20px auto;height:400px">
            <!-- 配置slider组件 -->
            <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
                <!-- 直接使用slideritem slot -->
                
                <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">{{item.html}}</slideritem>
                <!-- 设置loading,可自定义 -->
                <div slot="loading">loading...</div>
            </slider> 
        </div>

            <!-- pages:[
                {
                  title: '',
                  style:{
                   background:'url(../assets/img/newsl1.jpg)'
                  }
                },
                {
                 title: '',
                 style:{
                  background:'url(../assets/img/newsl1.jpg)'
                  }
                },
                {
                  title: 'slide3',
                  style:{
                    background:'#4bbfc3',
                  },
                }
              ] -->

        

<img src="" alt="">
        

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
                        html: 'slide1',
                        style: {
                            'background': '#1bbc9b'
                        }
                    },
                    {
                        html: 'slide2',
                        style: {
                            'background': '#4bbfc3'
                        }
                    },
                    {
                        html: 'slide3',
                        style: {
                            'background': '#7baabe'
                        }
                    }
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