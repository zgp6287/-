<template>
  <div>

    <div class="home2_bg">
      <div class="hz_name box">
        <div class="hz_name_con box">
          <div class="hz_h1">
            <h1>海外资源</h1>
            <ul class="hz_ul">
              <a href="/"><li>
                  <img src="http://www.miciall.com/Public/Cn/images/j_home.png" alt="">
                  <img src="http://www.miciall.com/Public/Cn/images/j_jt.png" alt="">
                </li></a>
              <a href=""><li>海外资源
                  <img src="http://www.miciall.com/Public/Cn/images/j_jt.png" alt=""></li></a>
              <a href=""><li>高校资源</li></a>
            </ul>
          </div>

        </div>

      </div>

    </div>
    <div class="home2_dh box">

      <div class="home2_dh_con">
        <a href="">高校资源</a>
      </div>

      <div class="home2_dh_con">
        <a href="">企业资源</a>
      </div>

      <div class="home2_dh_con">
        <a href="">诺奖师资</a>
      </div>

    </div>

    <div class="hzyx_bg he4_tcolor">
      <div class="hzyx_box box">
        <div class="hz1_titl">
          <h1>合作院校</h1>
        </div>
        <p>MICI与哈佛商学院、沃顿商学院、等著名高校深度合作，共同开发适于中国企业的产品及课程。</p>

        <div class="h4map_bg">
          <div class="h4map_img">
            <img src="http://www.miciall.com/Public/Cn/images/map.png" alt="">
          </div>
          <div class="h4con_box">
            <!-- 美国 -->
            <div class="guoj_box home4_usa" @mouseenter="usa($event)" @mouseleave="leave($event)">
              <h1>美国</h1>
              <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180524/20180524211113_5b06b9f18a81d.jpg" alt="">
              <div class="guoj_box_dian"></div>
              <!-- 设置国家隐藏显示的标签 -->
              <div class="home4_titcon usa_con">
                <h2><span>美国院校</span>AMERICA</h2>
                <div class="usa_con_tit">
                  <div class="usa_con_school">
                    <div class="school_logo">
                      <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180530/20180530150502_5b0e4d1eb5527.png" alt=""><br>                      哈佛大学
                    </div>
                    <div class="school_p">
                      <p>哈佛大学坐落于美国马萨诸塞州波士顿都市区剑桥市，被公认为是当今世界最顶尖的高等教育机构之一，是美国本土历史最悠久的高等学府。</p>
                    </div>
                  </div>
                  <div class="usa_con_school">
                    <div class="school_logo"><img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180530/20180530150502_5b0e4d1eb5527.png"
                        alt=""><br>斯坦福大学</div>
                    <div class="school_p">
                      <p>斯坦福大学位于美国加州旧金山湾区南部的帕罗奥多市境内，临近世界著名高科技园区硅谷，是世界著名私立研究型大学，与旧金山北湾的加州大学伯克利分校共同构成了美国西部的学术中心。</p>
                    </div>
                  </div>
                  <div class="usa_con_school">
                    <div class="school_logo"><img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180530/20180530150534_5b0e4d3ebcf39.png"
                        alt=""><br>西点军校</div>
                    <div class="school_p">
                      <p>西点军校是美国第一所军事学校，位于纽约州西点（哈德逊河西岸），西点军校的校训是“责任、荣誉、国家”，该校是美国历史最悠久的军事学院之一。 </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- 德国 -->
            <div class="guoj_box home4_de" @mouseenter="usa($event)" @mouseleave="leave($event)">
              <h1>德国</h1>
              <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180524/20180524211027_5b06b9c3e22c8.jpg" alt="">
              <div class="guoj_box_dian"></div>
              <!-- 设置国家隐藏显示的标签 -->
              <div class="home4_titcon usa_con">
                <h2><span>德国院校</span>AMERICA</h2>
                <div class="usa_con_tit">
                  <div class="usa_con_school">
                    <div class="school_logo">
                      <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180530/20180530150502_5b0e4d1eb5527.png" alt=""><br>                      慕尼黑工业大学
                    </div>
                    <div class="school_p">
                      <p>慕尼黑工业大学坐落于德国南部巴伐利亚州（拜恩州）首府慕尼黑，是德国最古老的工业大学之一。慕尼黑工业大学是国际享有盛誉的世界顶尖大学。</p>
                    </div>
                  </div>

                  <div class="usa_con_school">
                    <div class="school_logo"><img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180530/20180530150534_5b0e4d3ebcf39.png"
                        alt=""><br>亚琛工业大学</div>
                    <div class="school_p">
                      <p>亚琛工业大学位于北莱茵-威斯特法伦州，成立于1870年，是德国最负盛名的理工类大学之一，也是世界顶尖理工类大学之一。亚琛工业大学在2018年泰晤士世界大学综合排名中位于世界第79位，工程技术领域排名世界第29位。</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- 韩国 -->
            <div class="guoj_box home4_han" @mouseenter="usa($event)" @mouseleave="leave($event)">

              <h1>韩国</h1>
              <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180524/20180524210824_5b06b9488e0ed.jpg" alt="">
              <div class="guoj_box_dian"></div>
              <!-- 设置国家隐藏显示的标签 -->
              <div class="home4_titcon usa_con">
                <h2><span>韩国院校</span>KOREA</h2>
                <div class="usa_con_tit">
                  <div class="usa_con_school">
                    <div class="school_logo">
                      <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180530/20180530150502_5b0e4d1eb5527.png" alt=""><br>                      首尔大学
                    </div>
                    <div class="school_p">
                      <p>
                        首尔大学位于韩国首都首尔，原名为国立汉城大学。前任联合国秘书长潘基文及多位韩国总统均出身于首尔大学。首尔大学是韩国公认的最高学府，世界著名大学、亚洲顶尖的研究型国立综合大学之一，是亚洲大学联盟、环太平洋大学联盟（Association of
                        Pacific Rim Universities）、东亚四大学论坛（BESETOHA ）和东亚研究型大学协会（The Association of East Asian Research Universities）的成员之一。</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
          <!-- 英国 -->
          <div class="guoj_box home4_ying" @mouseenter="usa($event)" @mouseleave="leave($event)">
            <h1>英国</h1>
            <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180524/20180524211101_5b06b9e52b1ed.jpg" alt="">
            <div class="guoj_box_dian ying_dian">

            </div>
            <!-- 设置国家隐藏显示的标签 -->
            <div class="home4_titcon usa_con">
              <h2><span>英国院校</span>ENGLAND</h2>
              <div class="usa_con_tit">
                <div class="usa_con_school">
                  <div class="school_logo">
                    <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180530/20180530150502_5b0e4d1eb5527.png" alt=""><br>                    牛津大学
                  </div>
                  <div class="school_p">
                    <p>牛津大学位于英国牛津，与剑桥大学并称“牛剑”，并且与剑桥大学、伦敦大学学院、帝国理工学院、伦敦政治经济学院同属“G5超级精英大学”。</p>
                  </div>
                </div>
                <div class="usa_con_school">
                  <div class="school_logo"><img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180530/20180530150502_5b0e4d1eb5527.png"
                      alt=""><br>剑桥大学</div>
                  <div class="school_p">
                    <p>剑桥大学坐落于英国剑桥，与牛津大学、伦敦大学学院、帝国理工学院、伦敦政治经济学院同属“G5超级精英大学”。剑桥大学是英国本土历史最悠久的高等学府之一，是英语世界中第二古老的大学。</p>
                  </div>
                </div>
                <div class="usa_con_school">
                  <div class="school_logo"><img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180530/20180530150534_5b0e4d3ebcf39.png"
                      alt=""><br>伦敦商学院</div>
                  <div class="school_p">
                    <p>伦敦商学院是一所国际化商学院 ，为伦敦大学的两个研究生院之一，不提供本科教学，只提供金融和管理学方向的研究生课程。</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <!-- 中国 -->
          <div class="guoj_box home4_ying home4_cha" @mouseenter="usa($event)" @mouseleave="leave($event)">

            <h1>中国</h1>
            <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180524/20180524210854_5b06b966bbe1a.jpg" alt="">
            <div class="guoj_box_dian ying_dian"></div>
            <!-- 设置国家隐藏显示的标签 -->
            <div class="home4_titcon usa_con">
              <h2><span>中国院校</span>CHINA</h2>
              <div class="usa_con_tit">
                <div class="usa_con_school">
                  <div class="school_logo">
                    <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180530/20180530150502_5b0e4d1eb5527.png" alt=""><br>                    哈佛大学
                  </div>
                  <div class="school_p">
                    <p>哈佛大学坐落于美国马萨诸塞州波士顿都市区剑桥市，被公认为是当今世界最顶尖的高等教育机构之一，是美国本土历史最悠久的高等学府。</p>
                  </div>
                </div>
                <div class="usa_con_school">
                  <div class="school_logo"><img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180530/20180530150502_5b0e4d1eb5527.png"
                      alt=""><br>斯坦福大学</div>
                  <div class="school_p">
                    <p>斯坦福大学位于美国加州旧金山湾区南部的帕罗奥多市境内，临近世界著名高科技园区硅谷，是世界著名私立研究型大学，与旧金山北湾的加州大学伯克利分校共同构成了美国西部的学术中心。</p>
                  </div>
                </div>

              </div>

            </div>

          </div>

          <!-- 新加坡 -->
          <div class="guoj_box home4_ying home4_xin" @mouseenter="usa($event)" @mouseleave="leave($event)">
            <h1>新加坡</h1>
            <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180524/20180524210716_5b06b90417b20.jpg" alt="">
            <div class="guoj_box_dian ying_dian"></div>
            <!-- 设置国家隐藏显示的标签 -->
            <div class="home4_titcon usa_con">
              <h2><span>中国院校</span>CHINA</h2>
              <div class="usa_con_tit">
                <div class="usa_con_school">
                  <div class="school_logo">
                    <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180530/20180530150502_5b0e4d1eb5527.png" alt=""><br>                    哈佛大学
                  </div>
                  <div class="school_p">
                    <p>哈佛大学坐落于美国马萨诸塞州波士顿都市区剑桥市，被公认为是当今世界最顶尖的高等教育机构之一，是美国本土历史最悠久的高等学府。</p>
                  </div>
                </div>
                <div class="usa_con_school">
                  <div class="school_logo"><img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180530/20180530150502_5b0e4d1eb5527.png"
                      alt=""><br>斯坦福大学</div>
                  <div class="school_p">
                    <p>斯坦福大学位于美国加州旧金山湾区南部的帕罗奥多市境内，临近世界著名高科技园区硅谷，是世界著名私立研究型大学，与旧金山北湾的加州大学伯克利分校共同构成了美国西部的学术中心。</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- 权威师资 -->
    <div class="qw_box box">
      <div class="hz1_titl box">
        <h1>权威师资</h1>
      </div>
      <p>学界精英：讲授全球最前沿的管理理念与经济发展态势 </p>
    </div>

    <div class="sz_box">
      <div class="sz_con box">
        <div class="sz_tit">
          <div class="sz" @mouseenter="hehe($event)" @mouseleave="haha($event)">
            <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180531/20180531150156_5b0f9de46fcec.jpg" alt="">
            <h1>罗伯特•博格曼 </h1>
            <div class="sz_p">
              <p>罗伯特•博格曼 Robert A.Burgelman 斯坦福大学教授
              </p>
            </div>
          </div>
        </div>
        <div class="sz_tit">
          <div class="sz" @mouseenter="hehe($event)" @mouseleave="haha($event)">
            <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180531/20180531150156_5b0f9de46fcec.jpg" alt="">
            <h1>罗伯特•博格曼 </h1>
            <div class="sz_p">
              <p>罗伯特•博格曼 Robert A.Burgelman 斯坦福大学教授
              </p>
            </div>
          </div>
        </div>
        <div class="sz_tit">
          <div class="sz" @mouseenter="hehe($event)" @mouseleave="haha($event)">
            <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180531/20180531150156_5b0f9de46fcec.jpg" alt="">
            <h1>罗伯特•博格曼 </h1>
            <div class="sz_p">
              <p>罗伯特•博格曼 Robert A.Burgelman 斯坦福大学教授
              </p>
            </div>
          </div>
        </div>
        <div class="sz_tit">
          <div class="sz" @mouseenter="hehe($event)" @mouseleave="haha($event)">
            <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180531/20180531150156_5b0f9de46fcec.jpg" alt="">
            <h1>罗伯特•博格曼 </h1>
            <div class="sz_p">
              <p>罗伯特•博格曼 Robert A.Burgelman 斯坦福大学教授
              </p>
            </div>
          </div>
        </div>
        <div class="sz_tit">
          <div class="sz" @mouseenter="hehe($event)" @mouseleave="haha($event)">
            <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180531/20180531150156_5b0f9de46fcec.jpg" alt="">
            <h1>罗伯特•博格曼 </h1>
            <div class="sz_p">
              <p>罗伯特•博格曼 Robert A.Burgelman 斯坦福大学教授
              </p>
            </div>
          </div>
        </div>
        <div class="sz_tit">
          <div class="sz" @mouseenter="hehe($event)" @mouseleave="haha($event)">
            <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180531/20180531150156_5b0f9de46fcec.jpg" alt="">
            <h1>罗伯特•博格曼 </h1>
            <div class="sz_p">
              <p>罗伯特•博格曼 Robert A.Burgelman 斯坦福大学教授
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- 企业高管 -->
    <div class="qw_box box">
      <div class="hz1_titl box">
        <h1>企业高管</h1>
      </div>
      <p>企业高管：分享标杆企业的卓越实践经验 </p>
    </div>

    <div class="sz_box qygg_bg" >
      <div class="sz_con box">
        <div class="sz_tit">
          <div class="sz" @mouseenter="hehe($event)" @mouseleave="haha($event)">
            <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180531/20180531150156_5b0f9de46fcec.jpg" alt="">
            <h1>罗伯特•博格曼 </h1>
            <div class="sz_p">
              <p>罗伯特•博格曼 Robert A.Burgelman 斯坦福大学教授
              </p>
            </div>
          </div>
        </div>
        <div class="sz_tit">
          <div class="sz" @mouseenter="hehe($event)" @mouseleave="haha($event)">
            <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180531/20180531150156_5b0f9de46fcec.jpg" alt="">
            <h1>罗伯特•博格曼 </h1>
            <div class="sz_p">
              <p>罗伯特•博格曼 Robert A.Burgelman 斯坦福大学教授
              </p>
            </div>
          </div>
        </div>
        <div class="sz_tit">
          <div class="sz" @mouseenter="hehe($event)" @mouseleave="haha($event)">
            <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180531/20180531150156_5b0f9de46fcec.jpg" alt="">
            <h1>罗伯特•博格曼 </h1>
            <div class="sz_p">
              <p>罗伯特•博格曼 Robert A.Burgelman 斯坦福大学教授
              </p>
            </div>
          </div>
        </div>
        
      </div>

    </div>

    <!-- 社会名流 -->
    <div class="qw_box box">
        <div class="hz1_titl box">
          <h1>社会名流</h1>
          
        </div>
        <p>社会名流：以独特的视角，解读地区及全球政经的未来趋势 </p>
      </div>
  
      <div class="sz_box shml_bg">
        <div class="sz_con box">
          <div class="sz_tit">
            <div class="sz" @mouseenter="hehe($event)" @mouseleave="haha($event)">
              <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180531/20180531150156_5b0f9de46fcec.jpg" alt="">
              <h1>罗伯特•博格曼 </h1>
              <div class="sz_p">
                <p>罗伯特•博格曼 Robert A.Burgelman 斯坦福大学教授
                </p>
              </div>
            </div>
          </div>
          <div class="sz_tit">
            <div class="sz" @mouseenter="hehe($event)" @mouseleave="haha($event)">
              <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180531/20180531150156_5b0f9de46fcec.jpg" alt="">
              <h1>罗伯特•博格曼 </h1>
              <div class="sz_p">
                <p>罗伯特•博格曼 Robert A.Burgelman 斯坦福大学教授
                </p>
              </div>
            </div>
          </div>
          <div class="sz_tit">
            <div class="sz" @mouseenter="hehe($event)" @mouseleave="haha($event)">
              <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180531/20180531150156_5b0f9de46fcec.jpg" alt="">
              <h1>罗伯特•博格曼 </h1>
              <div class="sz_p">
                <p>罗伯特•博格曼 Robert A.Burgelman 斯坦福大学教授
                </p>
              </div>
            </div>
          </div>
          <div class="sz_tit">
            <div class="sz" @mouseenter="hehe($event)" @mouseleave="haha($event)">
              <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180531/20180531150156_5b0f9de46fcec.jpg" alt="">
              <h1>罗伯特•博格曼 </h1>
              <div class="sz_p">
                <p>罗伯特•博格曼 Robert A.Burgelman 斯坦福大学教授
                </p>
              </div>
            </div>
          </div>
          <div class="sz_tit">
            <div class="sz" @mouseenter="hehe($event)" @mouseleave="haha($event)">
              <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180531/20180531150156_5b0f9de46fcec.jpg" alt="">
              <h1>罗伯特•博格曼 </h1>
              <div class="sz_p">
                <p>罗伯特•博格曼 Robert A.Burgelman 斯坦福大学教授
                </p>
              </div>
            </div>
          </div>
          <div class="sz_tit">
            <div class="sz" @mouseenter="hehe($event)" @mouseleave="haha($event)">
              <img src="http://www.miciall.com/Public/Uploads/uploadfile/images/20180531/20180531150156_5b0f9de46fcec.jpg" alt="">
              <h1>罗伯特•博格曼 </h1>
              <div class="sz_p">
                <p>罗伯特•博格曼 Robert A.Burgelman 斯坦福大学教授
                </p>
              </div>
            </div>
          </div>
        </div>
  
      </div>




  </div>





</template>

<script>
  export default {
    name: "home4",

    data() {
      return {

      }

    },
    methods: {


      //美国板块显示隐藏
      usa(e) {
        // $('.home4_titcon').css('display','block')
        e.target.children[3].style.display = 'block';
      },
      leave(e) {
        console.log('隐藏啊！！！')
        e.target.children[3].style.display = 'none';
      },
      // 师资隐藏显示
      hehe(e){
        e.target.children[2].style.display = 'block'
      },
      haha(e){
        e.target.children[2].style.display = 'none'
      }


    }



  }
</script>

<style scoped>
  ul,
  li,
  h1,
  h2,
  a,
  p {
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
    background-image: url("http://www.miciall.com/Public/Uploads/uploadfile/images/20180522/20180522150048_5b03c0206a396.jpg");
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

  .hzyx_bg {
    width: 100%;
    height: 925px;
    background-image: url('http://www.miciall.com/Public/Cn/images/gaoxiao_03.jpg');
    margin-top: -30px;
    padding-top: 30px;
    box-sizing: border-box;
  }




  .hz1_titl {
    padding: 40px 0;
    padding-bottom: 10px;
    border-bottom: 2px solid #dbdbdb;
    margin-bottom: 30px;

  }

  .hz1_titl h1 {
    font-size: 32px;
    line-height: 50px;
    color: #c7000a;
  }

  .he4_tcolor h1,
  .he4_tcolor p {
    color: #ffffff;
  }

  .he4_tcolor {
    font-size: 20px;
  }

  .h4map_bg {
    width: 90%;
    margin: 50px auto;
    position: relative;

  }

  .h4map_img {
    /* background-color: lightblue; */
    position: absolute;
  }

  .h4con_box {
    width: 100%;
    height: 100%;
    position: absolute;
    /* background-color: rgba(0, 0, 0, 0.2) */
  }

  .guoj_box {
    width: 123px;
    height: 114px;
    /* background-color: lightblue; */
    position: absolute;
  }

  .guoj_box h1 {
    font-size: 16px;
    color: #333333;
    font-weight: 500;
    text-align: center;
    margin-bottom: 5px;
  }

  .guoj_box img {
    width: 100%;
    height: 70px;
  }

  .guoj_box::after {
    content: " ";
    position: absolute;
    bottom: 12px;
    left: 50%;
    width: 2px;
    height: 26px;
    background-color: #333333;
    transform: translateX(-50%);
    top: 95px;

  }

  .guoj_box_dian {
    width: 10px;
    height: 10px;
    margin: 0 auto;
    background-color: #333333;
    border-radius: 50%;
    position: relative;
    text-align: center;
    top: 20px;
  }

  .home4_usa {
    left: 80px;
    top: 65px;
  }

  .home4_de {
    left: 450px;
    top: -15px;
  }

  .home4_han {
    right: 110px;
    top: 40px;
  }

  .home4_ying {
    top: 50px;
    left: 320px;

  }

  .home4_cha {
    left: 740px;
    top: 130px;
  }

  .home4_ying::after {
    content: " ";
    position: absolute;
    bottom: 12px;
    left: 135px;
    top: 53%;
    width: 26px;
    height: 2px;
    background-color: #333333;
    transform: translateX(-50%);

  }

  .ying_dian {
    left: 90px;
    top: -45px;
  }

  .home4_xin {
    left: 718px;
    top: 248px;
  }

  /* 国家显示隐藏的公用样式 */
  .home4_titcon {
    background-image: url('http://www.miciall.com/Public/Cn/images/tanbg_03.jpg');

    z-index: 100;
    padding: 0 35px;
    display: none;
    padding-bottom: 30px;

  }

  /* 美国的隐藏盒子*/
  .usa_con {
    width: 560px;
    /* height: 648px; */

    position: absolute;
    top: -165px;
    left: -250px;
    box-sizing: border-box;
  }

  .home4_titcon h2 {
    width: 100%;
    height: 136px;
    padding: 50px 0;
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    color: #333333;
    line-height: 1.5;
    display: inline-block;
    box-sizing: border-box;
    /* background-color: lightblue; */
  }

  .home4_titcon span {
    font-weight: bold;
    margin-right: 10px;
    font-size: 26px;
  }

  .usa_con_tit {
    width: 100%;
    /* height: 450px; */
    /* background-color: lightpink; */
    box-sizing: border-box;
    align-items: center;
  }

  .usa_con_school {
    width: 100%;

    background-color: rgba(255, 255, 255, .85);
    ;
    margin-top: 2px;
    display: flex;
  }

  .school_logo {
    width: 25%;
    height: 100%;
    /* background-color: antiquewhite;  */
    padding: 10px;
    text-align: center;
    color: #666666;
    align-items: center;

  }

  .school_logo img {
    height: 58px;
    width: 58px;
  }

  .school_p {
    width: 75%;
    height: 100%;
    /* background-color: rgb(169, 233, 245);  */
    padding: 30px 25px 20px;
    box-sizing: border-box;
  }

  .school_p p {
    font-size: 14px;
    color: #666666;
    line-height: 1.5;
  }

  .qw_box p {
    font-size: 20px;
    color: #666666;
  }

  .sz_box {
    width: 100%;
    height: 914px;
    background-image: url('http://www.miciall.com/Public/Cn/images/gaoxiao_05.jpg');
    margin-top: 70px;
  }

  .sz_con {
    height: 100%;
    /* background-color: rgb(214, 229, 230); */
    display: flex;
    flex-wrap: wrap;
    padding: 100px 0;
    box-sizing: border-box;
    text-align: center;

  }

  .sz_tit {
    width: 25%;
    height: 50%;
    border-right: 1px solid rgba(219, 219, 219, .2);
    box-sizing: border-box;
  }

  .sz_tit:nth-child(4n) {
    border-right: 0px solid rgba(219, 219, 219, .2);
  }

  .sz {
    position: relative;
  }

  .sz h1 {
    font-size: 18px;
    color: #fff;
    line-height: 1.8;
    font-weight: bold;
    margin-top: 10px;
  }

  .sz_p {
    width: 184px;
    height: 197px;
    background-color: rgba(219, 219, 219, .2);
    position: absolute;
    top: 9px;
    left: 61px;
    background-color: rgba(199, 0, 10, .8);
    font-size: 14px;
    padding: 25px 15px 0 25px;
    box-sizing: border-box;
    line-height: 1.5;
    color: #fff;
    text-align: left;
    display: none;
  }


  .qygg_bg{
    background-image:url('http://www.miciall.com/Public/Cn/images/gaoxiao_07.jpg');   
    height: 500px; 
  }
  .shml_bg{
    background-image: url('http://www.miciall.com/Public/Uploads/uploadfile/images/20180528/20180528095919_5b0b62774e681.jpg');
    background-repeat: no-repeat;
    width: 100%;
    height: 914px;
  }

</style>