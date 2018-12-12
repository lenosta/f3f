<template>
  <div id="app" class="app">
    <!-- SVG Sprite -->
    <div style="height: 0; width: 0; position: absolute; visibility: hidden;" aria-hidden="true">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false">
        <symbol id="ripply-scott" viewBox="0 0 100 100">
          <g>
            <polygon points="5.6,77.4 0,29 39.1,0 83.8,19.3 89.4,67.7 50.3,96.7" />
            <polygon fill="rgba(255,255,255,0.35)" transform="scale(0.5), translate(50, 50)" points="5.6,77.4 0,29 39.1,0 83.8,19.3 89.4,67.7 50.3,96.7" />
            <polygon fill="rgba(255,255,255,0.25)" transform="scale(0.25), translate(145, 145)" points="5.6,77.4 0,29 39.1,0 83.8,19.3 89.4,67.7 50.3,96.7" />
          </g>
        </symbol>
      </svg>
    </div>
    <!-- /end sprite -->
    <nav id="menu" class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span><span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/"><i class="iconfont icon-bigdatan"></i>智慧大数据</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse"  id="bs-example-navbar-collapse-1">
          <ul id="nav" class="nav navbar-nav navbar-right">
            <li class="active">
              <a class="navbar-li" href="#home">首页</a>
              <svg class="ripple-obj" id="js-ripple">
                <use height="10" width="10" xlink:href="#ripply-scott" class="js-ripple"></use>
              </svg>
            </li>
            <li class="active">
              <a  class="navbar-li" href="#tech-standard"  data-href="tech-standard">技术规范</a>
              <svg class="ripple-obj" id="js-ripple">
                <use height="10" width="10" xlink:href="#ripply-scott" class="js-ripple"></use>
              </svg>
            </li>
            <li>
              <a  class="navbar-li" href="#relative-tech"  data-href="relative-tech">相关技术</a>
              <svg class="ripple-obj" id="js-ripple">
                <use height="10" width="10" xlink:href="#ripply-scott" class="js-ripple"></use>
              </svg>
            </li>
            <li>
              <a  class="navbar-li" href="#train-plan"  data-href="train-plan">培训计划</a>
              <svg class="ripple-obj" id="js-ripple">
                <use height="10" width="10" xlink:href="#ripply-scott" class="js-ripple"></use>
              </svg>
            </li>
            <li>
              <a  class="navbar-li" href="#technical-weekly"  data-href="technical-weekly">技术周刊</a>
              <svg class="ripple-obj" id="js-ripple">
                <use height="10" width="10" xlink:href="#ripply-scott" class="js-ripple"></use>
              </svg>
            </li>
            <li>
              <a  class="navbar-li" href="#tech-subside" data-href="tech-subside">技术沉淀</a>
              <svg class="ripple-obj">
                <use height="10" width="10" xlink:href="#ripply-scott" class="js-ripple"></use>
              </svg>
            </li>

            <li>
              <a  class="navbar-li" href="#team"  data-href="team">团队介绍</a>
              <svg class="ripple-obj" id="js-ripple">
                <use height="10" width="10" xlink:href="#ripply-scott" class="js-ripple"></use>
              </svg>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
    <router-view class="main"></router-view>    
  </div>
</template>

<script>
  import  '../static/js/TweenMax.min'
  import rippleAnimation from '../static/js/ripple-confing'
//  import {init} from '../static/js/ripper'
  export default {
    name: 'app',
    data(){
      return {
        arr: [0, 1, 2, 3, 4, 5, 6]
      }
    },
    mounted: function(){
      this.$nextTick(function(){
        jQuery(window).scroll(function () {
          let height = document.getElementById("home").offsetHeight - 50;
          jQuery('#menu').toggleClass("mine-bar", jQuery(this).scrollTop() > height);
        });
      })
      this.navScroll();
    },
    methods:{
      navScroll(){
        jQuery("#nav li a").click(function(event){
          rippleAnimation.call(this, jQuery(this).parent().find("use")[0], event, 0.75);
          jQuery(this).parent("li").addClass("active").siblings("li").removeClass("active");
          let targetId = jQuery(this).attr("data-href");
          let top = jQuery("#"+targetId).offset().top;
          jQuery("html, body").animate({scrollTop: top}, 1000);
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "./assets/css/variable.scss";
  /*.app{*/
    /*min-width:1280px;*/
  /*}*/
  .navbar-default {
    background-color: rgba(0, 0, 0, 0.1);
    border-color: rgba(231, 231, 231, 0.1);
    transition: all 0.8s;
    .navbar-brand {
      padding: 0 0 0 15px;
      line-height: 50px;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
      .iconfont {
        float: left;
        font-size: 26px;
        margin-right: 10px;
      }
    }
    .navbar-nav {
      li {
        position: relative;
        cursor: pointer;
        a {
          padding: 0 20px;
          line-height: 50px;
          color: #fff;
          background: transparent;
          overflow: hidden;
        }
        transition: .35s;
        &:hover {
          a {
            background: transparent;
            /*<!--color: $hover;-->*/
            color: rgba(125,250,251,1);
            &:before {
              border-top: 3px solid $hover;
            }
          }
        }
        &.active {
          a {
            /*background: rgba(3,96,162,.7);*/
            background: rgba(125,250,251,.4);
            /*color: #8fd1ff;*/
            color: #fff;
          }
        }
        svg {
          use {
            opacity: 0;
          }
        }
        .ripple-obj {
          height: 100%;
          pointer-events: none;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
          width: 100%;
          fill: #999;
          opacity: 0.7;
        }


      }
    }
  }
  .navbar-default.mine-bar {
    background: $header-footer;
    .navbar-nav {
      li {
        transition: .35s;
        &:hover {
          a {
            background: transparent;
            color: $fonthover;
            &:before {
              border-top: 3px solid $hover;
            }
          }
        }
        &.active {
          a {
            /*<!--background: rgba(0,0,0,.3);-->*/
            /*<!--color: $hover;-->*/
            background: rgba(125,250,251,.4);
            color: #fff;
          }
        }
        svg {
          use {
            opacity: 0;
          }
        }
      }
    }
  }
  .navbar-default .navbar-toggle .icon-bar {
    background-color: #fff;
  }
  .navbar-fixed-bottom .navbar-collapse,
  .navbar-fixed-top .navbar-collapse {
    max-height: 370px!important;
  }
  .navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {
    background-color: $hover;
  }
  @media (max-width: 603px){
    .navbar-default {
      background: rgba(0,0,0,.5);
    }
    .navbar-default  {
      .navbar-nav{
        li{
          &.active{
            a {
              background: rgba(0,0,0,.6);
              color: $hover;
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1000px){
    .navbar-default {
      .navbar-nav {
        li {
          a {
            padding: 0 10px;
          }
        }
      }
    }

  }
</style>
