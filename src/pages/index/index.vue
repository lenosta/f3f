<template>
    <div class="">
        <header class="text-center" id="home">
            <!--<div class="intro-text">-->
            <!--<a href="" class="fa fa-angle-down page-scroll"></a>-->
            <!--</div>-->
        </header>
        <section id="relative-tech" class="sblock sblock-gray text-center">
            <div class="container">
                <h1 class="section-title"><span>相关技术</span></h1>
                <div class="relative-wrapper">
                    <div class="cat">
                        <ul>
                            <li v-for="item in techCategories" :class="{active:relativeTechIndex===item.index}"
                                @click="relativeTechIndex=item.index">
                                {{item.name}}
                            </li>
                        </ul>
                    </div>
                    <transition-group name="animated zoomIn">
                        <div class="show-wrapper" key="relative">
                            <div v-show="show0" class="row show-transition" v-for="(parentItem, index) in techCategories[relativeTechIndex].relativeTechs" :key="index">
                                <div class="col-md-4 tech-block inline animated fadeInUp"
                                     v-for="item in parentItem">
                                    <div class="icon">
                                        <i class="iconfont" :class="item.iconClass"></i>
                                    </div>
                                    <div class="title">{{item.name}}</div>
                                    <div class="content">
                                <span v-for="child in item.items"><a :href="child.url"
                                                                     target="_blank">{{child.name}}</a></span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </transition-group>
                </div>
            </div>
        </section>

        <section id="train-plan" class="sblock   text-center">
            <div class="container">
                <h1 class="section-title"><span>培训计划</span></h1>
                <div class="train-wrapper">
                    <div class="cat">
                        <ul>
                            <li v-for="(item, index) in trainBtn" :class="{active:trainIndex===index}">
                                {{item}}
                            </li>
                        </ul>
                    </div>
                    <div class="train-list-wrapper">
                        <transition-group name="animated slideInDown">
                            <div class="show-wrapper" key="train">
                                <div  v-show="show1" class="row show-transition">
                                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 animated zoomIn"  v-for="item1 in trainArr">
                                        <div :class="item1.status ? 'train-item' : 'train-item train-item-unfinshed'">
                                            <div class="train-icon"  v-show="item1.imgurl == ''">
                                                <i class="iconfont icon-icontianjiatupian"></i>
                                            </div>
                                            <div class="train-img"  v-show="item1.imgurl != ''">
                                                <img :src="item1.imgurl" >
                                            </div>
                                            <div class="train-content">
                                                <p><span>培训人：</span><span>{{item1.tranier}}</span></p>
                                                <p><span>培训时间：</span><span>{{item1.time}}</span></p>
                                                <p><span>培训地点：</span><span>{{item1.place}}</span></p>
                                                <p><span>培训内容：</span><span>{{item1.content}}</span></p>
                                            </div>
                                            <a class="train-video" :href="item1.videourl" target="_blank"><i v-show="item1.videourl == ''?false:true" class="iconfont icon-shipin"></i></a>
                                            <div class="train-theme">
                                                <p class="theme-text"><a target="_blank" :href="item1.docurl">{{item1.theme}}</a></p>
                                                <p class="train-other clearfix"><span>{{item1.keyword}}</span><span class="train-status">{{item1.status ? "已完成" : "未开始"}}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition-group>
                    </div>

                </div>
            </div>
        </section>
        <section id="technical-weekly" class="sblock sblock-gray  text-center">
            <div class="container">
                <h1 class="section-title"><span>技术周刊</span></h1>
                <div class="tech-wrapper">
                    <div class="cat">
                        <ul>
                            <li v-for="(item, index) in weeklyBtn" :class="{active:weeklyIndex===index}">
                                {{item}}
                            </li>
                        </ul>
                    </div>
                    <transition-group name="animated slideInDown">
                        <div class="show-wrapper" key="weekly">
                            <ul v-show="show2" class="weekly-list-wrapper show-transition" >
                                <li v-for="(item, index) in weeklyArr" :key="index" :class="index % 2 == 0 ? 'animated fadeInLeft' : 'animated fadeInRight'">
                                    <p class="weekly-title"><a :href="item.url" target="_blank">{{item.title}}</a></p>
                                    <p class="weekly-outline">{{item.outline}}</p>
                                    <p class="weekly-other clearfix">
                                        <span class="provider-img">
                                            <i class="iconfont icon-yonghutouxiang"></i>
                                            <img >
                                        </span>
                                        <span class="provider-name">{{item.provider}}</span>
                                        <span class="weekly-date">{{item.date}}</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </transition-group>
                </div>
            </div>
        </section>
        <section id="tech-subside" class="sblock   text-center">
            <div class="container">
                <h1 class="section-title"><span>技术沉淀</span></h1>
                <div class="tech-wrapper">
                    <div class="cat">
                        <ul>
                            <li v-for="(item, index) in subsideBtn" :class="{active:subsideIndex===index}">
                                {{item}}
                            </li>
                        </ul>
                    </div>
                    <transition-group name="animated slideInDown">
                        <div class="show-wrapper" key="subside">
                            <div v-show="show3" class="row subside-list-wrapper show-transition " >
                                <div v-for="(item, index) in subsideArr" :key="index" class="col-lg-4 col-md-4 col-sm-6 col-xs-12 animated zoomIn">
                                    <div class="subside-top text-center">
                                        <p class="subside-icon"><i class="iconfont" :class="item.icon"></i></p>
                                        <h2 class="subside-name">{{item.name}}</h2>
                                    </div>
                                    <div class="subside-bottom">
                                        <ul v-for="item1 in item.children" class="text-center">
                                            <li v-for="item2 in item1"><a :href="item2.url">{{item2.name}}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition-group>
                </div>
            </div>
        </section>
        <div class="dots-wrapper">
            <p class="dots-text">技术只有起点，创新没有终点</p>
            <div class="dots" id="dots"></div>
        </div>

        <section id="team" class="sblock  text-center">
            <div class="container">
                <h1 class="section-title"><span>团队介绍</span></h1>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-12 col-sm-12">
                        <ul class="team-filter-btn">
                            <li v-for="(item,index) in teamType" @click="handleClickTeamType(item,index)"
                                :class="tabIndex === index ? 'active': ''">
                                {{item}}
                            </li>
                        </ul>
                        <transition-group name="animated slideInDown">
                            <div class="show-wrapper" key="team">
                                <div v-show="show4" id="teamListWrapper" class="team-list-wrapper clearfix show-transition" :style="{height: height+'px'}" >
                                    <ul id="teamList" class="team-list clearfix">
                                        <li :class="item.className" v-for="(item, index) in teamArr">
                                            <a href="#">
                                                <div class="spinner"></div>
                                                <div class="team-img"><i v-show="item.imgurl == ''" class="iconfont icon-yonghutouxiang"></i><img v-show="item.imgurl" :src="item.imgurl"></div>
                                                <div class="team-content">
                                                    <p>
                                                        <span class="team-name">{{item.name}}</span>
                                                        <span class="team-des">{{item.des}}</span>
                                                    </p>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </transition-group>
                    </div>
                </div>
            </div>
        </section>
        <section id="contact" class="sblock sblock-dark text-center">

            <div class="container">

                <h1 class="section-title"><span>联系我们</span></h1>
                <div class="contact-wrapper">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4" v-for="item in contractInfos">
                            <div class="contact-block">
                                <div class="contact-icon"><i class="iconfont" :class="item.iconClass"></i></div>
                                <!--<span class="contact-lable">{{item.name}}：</span>-->
                                <span class="contact-msg">{{item.value}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="copyright ">
                        <div class="row">
                            <div class="col-lg-7 col-md-5 col-sm-12 col-xs-12"><p class="copyright-left">版权所有 联通大数据有限公司技术部</p>
                            </div>
                            <div class="col-lg-5 col-md-7 col-sm-12 col-xs-12"><p class="copyright-right">
                                Copyright 2018 by UnicomBigData.com All Right Reserved</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import techCategory from './tech-category';
    import teamObj from "./team.json"
    import contract from './contract'
    import trainPlan from './train-plan.json'
    import weekly from './technical-weekly.json'
    import subside from './tech-subside.json'
    export default {
        name: 'index',
        data() {
            return {
                techCategories: techCategory.items,
                //技术规范——技术方向的index
                standardTechIndex: 0,
                //相关技术的index
                relativeTechIndex: 0,
                teamArr: [],
                teamType: [],
                teamAllArr: [],
                teamObj: {},
                //联系我们的相关配置信息
                contractInfos: contract.infos,
                tabIndex: 0,
                //用于自动化测试的属性
                testMsg: '自动化测试karma+mocha',
                height: 90,
                // 培训计划
                trainBtn: [],
                trainIndex: 0,
                trainArr: [],
                // 技术周刊
                weeklyBtn: [],
                weeklyIndex: 0,
                weeklyArr: [],
                height0: 0,
                height1: 0,
                height2: 0,
                height3: 0,
                height4: 0,
                  height5: 0,
                  scrollTop: 0,
                  show0: false,
                  show1: false,
                  show2: false,
                  show3: false,
                  show4: false,
              //技术沉淀
                subsideBtn: [],
                subsideIndex: 0,
                subsideArr: []
            }
        },
        mounted() {
          this.height0 = jQuery("#relative-tech").offset().top;
          window.addEventListener('scroll',this.handleScroll,true);
            this.initVanta();
            this.initTeam();
            this.initTechCategories();
            this.initTrainPlan();
            this.initWeekly();
            this.initSubside();
        },
        components: {},
        methods: {
            handleScroll(){
                this.scrollTop = jQuery(document).scrollTop() ;
                if(0 < this.scrollTop < this.height0){
                jQuery("#nav li ").eq(0).addClass("active").siblings().removeClass("active");
                }
                if(this.height0 - 140  < this.scrollTop) {
                  jQuery("#nav li ").eq(1).addClass("active").siblings().removeClass("active");
                  this.show0 = true;
                  this.height1 = jQuery("#train-plan").offset().top;
                  if(this.height1 - 140 < this.scrollTop){
                    jQuery("#nav li ").eq(2).addClass("active").siblings().removeClass("active");
                    this.show1 = true;
                    this.height2 = jQuery("#technical-weekly").offset().top;
                    if(this.height2 - 140 < this.scrollTop){
                      jQuery("#nav li ").eq(3).addClass("active").siblings().removeClass("active");
                      this.show2 = true;
                      this.height3 = jQuery("#tech-subside").offset().top;
                      if(this.height3 - 140 < this.scrollTop){
                        jQuery("#nav li ").eq(4).addClass("active").siblings().removeClass("active");
                        this.show3 = true;
                        this.height4 = jQuery("#team").offset().top;
                        if(this.height4 - 140 < this.scrollTop){
                          jQuery("#nav li ").eq(5).addClass("active").siblings().removeClass("active");
                          this.show4 = true;
                          this.height5 = jQuery("#contact").offset().top;
                          if(this.height5 - 300  < this.scrollTop){
                            jQuery("#nav li ").eq(6).addClass("active").siblings().removeClass("active");
                          }
                        }
                      }
                    }
                  }
                }
            },
            initVanta() {
                VANTA.NET({
                  el: "#home",
                  color: 0xffffff,
                  backgroundColor: 0xffffff,
                  points: 8.00,
                  spacing: 20.00,
                  backgroundAlpha: 0.00
                });
                VANTA.BIRDS({
                    el: "#dots",
                    backgroundColor: 0x0082c8,
                    color1: 0xffffff,
                    color2: 0xffffff,
                    wingSpan: 10.00,
                    speedLimit: 2.00,
                    separation: 51.00,
                    alignment: 70.00,
                    cohesion: 73.00,
                    backgroundAlpha: 0.8
                })
            },
            initTeam() {
              // 获取分组
              let teamTypeArr = Object.keys(teamObj);
              teamTypeArr.unshift("全部");
              this.teamType = teamTypeArr;
              // 获取全部列表数据
              let teamArr = [];
              Object.keys(teamObj).map(item => {
                teamArr = teamArr.concat(teamObj[item])
              })
              for(let item of teamArr){
                item.className = "animated fadeIn"
              }
              this.teamArr = teamArr;
              this.teamAllArr = teamArr;
            },
            getTeamListHeight(){
              let height = jQuery("#teamList").height();
              this.height = height;
            },
            handleClickTeamType(item, index) {
              this.teamArr = [];
              let _this = this;
              setTimeout(function(){
                _this.tabIndex = index;
                if (item == '全部') {
                  _this.teamArr = _this.teamAllArr;
                } else {
                  _this.teamArr = teamObj[item];
                }
                _this.$nextTick(() => _this.getTeamListHeight())
              }, 10)
            },
            /**
             * 处理技术分类数据：将其中的技术规范、相关技术整理成每3个一组
             */
            initTechCategories() {
                //一个组的成员数量
                let groupSize = 3;
                let techCategoryArr = [];
                techCategory.items.forEach((item, index) => {
                    let standards = item.standards;
                    let relativeTechs = item.relativeTechs;
                    techCategoryArr.push({
                        name: item.name,
                        index: item.index,
                        standards: transformArr(item.standards, groupSize),
                        relativeTechs: transformArr(item.relativeTechs, groupSize)
                    });
                });
                this.techCategories = techCategoryArr;

                /**
                 * 将一个一维数组转换成二维数据
                 * @param arr 原数组
                 * @param groupSize 二维数组中一维数组的数据项的最大个数
                 */
                function transformArr(arr, groupSize) {
                    let destArr = [];
                    if (arr !== undefined && arr != null && arr.length > 0) {
                        //目标数组的index
                        let destArrIndex = 0;
                        let indexArr = [];
                        arr.forEach((item, index) => {
                            indexArr.push(item);
                            //如果是groupSize的倍数
                            if ((index + 1) % groupSize === 0) {
                                destArr[destArrIndex] = [...indexArr];
                                destArrIndex++;
                                indexArr = [];
                                //如果是最后一个元素
                            } else if (index === arr.length - 1) {
                                destArr[destArrIndex] = [...indexArr];
                            }
                        })
                    }
                    return destArr;
                }

            },
            /**
             * 用于自动化测试的测试function
             * @param msg
             */
            testDemo(msg) {
                this.testMsg = msg;
            },
            // 初始化培训计划
            initTrainPlan(){
                let trainArr = trainPlan.data;
                let arr = [];
                trainArr.map( item => {
                  arr.push(item.type);
                })
                this.trainBtn = arr;

//                this.trainArr = all_arr;
                this.trainArr = trainPlan.data[0].details;
            },
            // 初始化技术周刊
            initWeekly(){
                let weeklyArr = weekly.data;
                let arr = [];
                weeklyArr.map( item => {
                    arr.push(item.type);
                })
                this.weeklyBtn = arr;
                this.weeklyArr = weeklyArr[0].details;
            },
            //初始化技术沉淀
            initSubside(){
                let subsideArr = subside.data;
                let details = subsideArr[0].details;
                let arr = [];
                subsideArr.map(item => {
                  arr.push(item.type)
                })
                this.subsideBtn = arr;

                details.map(item => {
                  item.children = transformArrToDubble(item.children)
                })
                // 把数组处理为一个二维数组
                function transformArrToDubble(arr){
                  let o_arr = arr;
                  let all_arr = [], current_arr = [];
                  for( let i = 0; i < o_arr.length; i++){
                    current_arr.push(o_arr[i]);
                    if((i != 0 && (i + 1) % 3 == 0) || i == o_arr.length - 1) {
                      all_arr.push(current_arr);
                      //在这里清空currData
                      current_arr = [];
                    }
                  }
                  return all_arr;
                }
                this.subsideArr = details;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "./../../assets/css/variable.scss";
    @import "./../../assets/css/mixin.scss";
    @import "../../../static/css/animate.min.css";
    header {
        /*background-attachment: fixed;*/
        /*background: linear-gradient(to right, #72edf2 0%,#5151e5 100%);*/
        /*background: linear-gradient(to top, #90f7e7 0%,#32ccbc 100%);*/
        /*background: linear-gradient(to left, #004e92 0%,#000428 100%);*/
        /*background: linear-gradient(to bottom, #00b4db 0%,#0083b0 100%);*/
        /*background: linear-gradient(to left, #667db6 0%, #0082c8 20%,#0082c8 80%, #667db6 100%);*/
        /*background: linear-gradient(to bottom, #2c3e50 0%,#3498db 100%);*/
        /*background: linear-gradient(to bottom, #7474bf 0%,#348ac7 100%);*/
        /*background: linear-gradient(to bottom, #1a2980 0%,#26d0ce 100%);*/
        background: linear-gradient(165deg, #000046 0%,#1cb5e0 100%);
        /*<!--background: linear-gradient(-45deg, #1488cc 0%,#2b32b2 100%);-->*/
        background-size: cover;
        color: #cfcfcf;
        position: relative;
        height: 500px;
    }
    .cat {
        margin: 25px 0;
        text-align: center;
        ul li {
            position: relative;
            display: inline-block;
            padding: 5px;
            margin: 0 5px;
            font-size: 16px;
            cursor: pointer;
            transition: 0.2s all linear;
            &:before {
                position: absolute;
                content: '';
                top: 0;
                bottom: 0;
                left: 100%;
                width: 0;
                height: 100%;
                border-bottom: 2px solid $hover;
                transition: all .2s linear;
            }
            &:hover {
                color: $hover;
            }
            &:hover:before {
                width: 100%;
                left: 0;
                top: 0;
                transition-delay: 0.1s;
                border-bottom-color: $hover;
                z-index: -1;
            }
            &.active {
                color: $hover;
            }
            &.active:before {

                width: 100%;
                left: 0;
                top: 0;
                transition-delay: 0.1s;
                border-bottom-color: $hover;
                z-index: -1;
            }
        }
        li:hover ~ li::before {
            left: 0;
        }
    }
    .sblock {
        padding: 20px 0 80px 0;
        .section-title {
            padding: 20px 0;
            margin-bottom: 40px;
            font-size: 32px;
            color: $section-title;
            text-align: center;
            span {
                display: inline-block;
                line-height: 40px;
                position: relative;
                padding: 0 6%;
                font-weight: normal;
                &:before {
                    width: 100%;
                    height: 1px;
                    background: #333;
                    position: absolute;
                    left: 0;
                    right: 0;
                    content: '';
                    bottom: -20px;
                }
                &:after {
                    box-sizing: content-box;
                    display: block;
                    overflow: hidden;
                    content: '';
                    background: #333;
                    border: 8px solid #fff;
                    position: absolute;
                    left: 50%;
                    width: 8px;
                    bottom: -32px;
                    height: 8px;
                    border-radius: 50%;
                    margin-left: -12px;
                }
            }

        }
    }
    .sblock-gray {
        position: relative;
        background: #f5f5f6;
        z-index: -2;
        .section-title {
            span {
                &:after {
                    border: 8px solid $sblock-gray;
                }
            }

        }
    }


    .tech-block {
        margin-top: 30px;
        padding: 10px;
        &:hover {
            box-shadow: 0 0 1px 1px rgba(0, 0, 0, .1) inset !important;
        }
        a {
            color: #333;
            text-decoration: none;
            &:hover {
                outline: medium none;
                /*text-decoration: none;*/
                transition: all .2s ease-out;
                .content {
                    color: #333;
                }
                .icon {
                    border: 1px solid #bbb;
                    i {
                        color: #666
                    }
                ;
                }
            }
        }
        .icon {
            float: left;
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 2em;
            border-radius: 50%;
            border: 1px solid #ddd;
            i {
                color: #888;
            }
        }
        .content {
            margin-left: 50px;
            padding: 0 10px;
            text-align: left;
            color: #666;
            .title {
                font-size: 18px;
                font-weight: bold;
            }
            p {
                line-height: 2em;
            }
        }
    }

    .tech-block.inline {
        margin-top: 30px;
        padding: 10px;
        &:hover {
            box-shadow: none !important;
        }
        .icon {
            margin: auto;
            float: none;
            width: 80px;
            height: 80px;
            line-height: 80px;
            text-align: center;
            font-size: 2em;
            border-radius: 50%;
            border: 1px solid #ddd;
            i {
                color: #888;
            }
        }
        .title {
            margin-top: 15px;
            font-size: 18px;
            font-weight: bold;
            color: #666;
        }
        .content {
            margin: 15px 0;
            padding: 0 10px;
            text-align: center;
            color: #666;
            span {
                display: inline-block;
                padding: 10px;
                margin: 10px;
                color: #666;
                background: transparent;
                border: 1px solid #666;
                border-radius: 5px;
                &:hover {
                    border: 1px solid $hover;
                    background: $hover;
                    color: #fff;
                    transition: all .2s linear;
                }
                a {
                    color: inherit;
                }
            }
        }
    }

    .team-filter-btn {
        margin: 25px 0;
        color: $sblock-gray-text;
        font-size: $fz-md;
        overflow: hidden;
        li {
            position: relative;
            display: inline-block;
            padding: 5px;
            margin: 0 5px;
            cursor: pointer;
            transition: 0.2s all linear;
            &:before {
                position: absolute;
                content: '';
                top: 0;
                bottom: 0;
                left: 100%;
                width: 0;
                height: 100%;
                border-bottom: 2px solid $hover;
                transition: all .2s linear;
            }
            &:hover {
                color: $hover;
            }
            &:hover:before {
                width: 100%;
                left: 0;
                top: 0;
                transition-delay: 0.1s;
                border-bottom-color: $hover;
                z-index: -1;
            }
            &.active {
                color: $hover;
            }
            &.active:before {
                width: 100%;
                left: 0;
                top: 0;
                transition-delay: 0.1s;
                border-bottom-color: $hover;
                z-index: -1;
            }
        }
        li:hover ~ li::before {
            left: 0;
        }
    }
    .team-list-wrapper {
        transition: height 1s;
        .team-list {
            font-size: $fz-md;
            color: $sblock-gray-text;

            li {
                position: relative;
                float: left;
                width: 90px;
                height: 90px;
                margin: 0 35px 50px 0;
                border-radius: 50%;
                a {
                    .spinner {
                        position:absolute;
                        width: 90px;
                        height: 90px;
                        border: 5px solid $team-border;
                        border-right-color: $team-border-right-bottom;
                        border-bottom-color: $team-border-right-bottom;
                        border-radius: 50%;
                        transition: all .3s;
                        z-index: 10;
                    }
                    .team-img {
                        position: absolute;
                        width: auto;
                        height: auto;
                        top: 5px;
                        left: 5px;
                        bottom: 5px;
                        right: 5px;
                        border-radius: 50%;
                        overflow: hidden;
                        transition: all .3s;
                        .iconfont {
                            font-size: 60px;
                            line-height: 100px;
                            color: #bbb;
                        }
                        img{
                            width: 100%;
                            height: auto;
                            border-radius: 50%;
                            filter: grayscale(100%);
                        }
                    }
                    .team-content {
                        position: absolute;
                        width: 100%;
                        height: 26px;
                        left: 0;
                        bottom: -35px;
                        text-align: center;
                        transition: all 0.3s;
                        overflow: hidden;
                        p {
                            position: relative;
                            top: 0;
                            margin: 0;
                            color: #5f6367;
                            transition: all 0.3s;
                            span {
                                display: block;
                                margin-bottom: 10px;
                            }
                        }
                    }
                    &:hover {
                        .spinner {
                            transform: rotate(180deg);
                        }
                        .team-img {
                            transform: scale(1.1);
                            img {
                                filter: grayscale(0%);
                            }
                        }
                        .team-content {
                            p {
                                top: -34px;
                            }

                        }
                    }
                }


            }
        }
    }

    .sblock-dark {
        padding: 20px 0 0;
        background: $sblock-dark;
        color: $sblock-dark-text;
        .section-title {
            color: $sblock-dark-text;
            span {
                &:before {
                    color: $sblock-dark-text;
                    background: $sblock-dark-text;
                }
                &:after {
                    background: $sblock-dark-text;
                    border: 8px solid $sblock-dark;
                    color: $sblock-dark-text;
                }
            }

        }
    }
    .contact-wrapper {
        .contact-block {
            display: inline-block;
            margin: 20px 0 50px 0;
            .contact-icon {
                width: 80px;
                height: 80px;
                margin: 0 auto;
                border: 1px solid $sblock-dark-text;
                border-radius: 100%;
                transition: all 0.2s;
                i {
                    display: inline-block;
                    font-size: 34px;
                    line-height: 80px;
                    color: $sblock-dark-text;
                }

            }
            .contact-msg {
                display: block;
                margin: 10px 0 20px 0;
                transition: all 0.2s;
            }
            &:hover {
                .contact-icon {
                    border:1px solid $hover;
                    background: $hover;
                    i {
                        color: #fff;
                    }
                }
                .contact-msg {
                    color: $hover;
                }
            }
        }

        .copyright {
            margin-top: 20px;
            padding: 10px 0;
            color: #73777a;
            border-top: 1px dashed #666;
            .copyright-left {
                text-align: left;
            }
            .copyright-right {
                text-align: right;
            }
        }
    }
    .dots-wrapper {
        position: relative;
        height: 200px;
        p {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            text-align: center;
            line-height: 200px;
            font-size: 36px;
            font-weight: 500;
            z-index: 100;
            color: #fff;
        }
        .dots {
            width: 100%;
            height: 100%;
        }
    }
    .tech-wrapper {
        .iconfont {
            font-size: 24px;
        }
    }

    .relative-wrapper {
        .iconfont {
            font-size: 30px;
        }
    }
    .train-list-wrapper {
        .train-item {
            position: relative;
            overflow: hidden;
            max-width: 480px;
            max-height: 360px;
            height: 350px;
            margin-bottom: 20px;
            background: #2f3238;
            cursor: pointer;
            box-shadow: 0 1px 2px $box-shadow;
            border-radius: 0 0 2px 2px;
            transition: .3s;
            .train-icon {
                position:absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 270px;
                overflow: hidden;
                background: #fff;
                border-bottom: 1px solid $train-icon-border;
                border-top: 1px solid $train-icon-border;
                transition:  all 2s;
                i {
                    font-size: 80px;
                    color: $icon-icontianjiatupian;
                    line-height: 280px;
                }
            }
            .train-img {
                position:absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 270px;
                overflow: hidden;

                img {
                    position: relative;
                    display: block;
                    max-width: none;
                    width: 100%;
                    height: 100%;
                    transition: opacity 1s,transform 1s;
                    backface-visibility: hidden;
                    opacity: .9;
                }
            }
            .train-content {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                color: #fff;
                padding: 2em 2em 0 2em;
                text-transform: uppercase;
                backface-visibility: hidden;
                cursor: auto;
                p {
                    padding: .2em 1em;
                    color: #fff;
                    text-align: left;
                    text-transform: none;
                    transition: opacity .35s,transform .35s;
                    transform: translate3d(-360px,0,0);
                }
                p:first-child{
                    transition-delay: .2s;
                }
                p:nth-of-type(2){
                    transition-delay: .15s;
                }
                p:nth-of-type(3){
                    transition-delay: .1s;
                }
                p:nth-of-type(4){
                    transition-delay: .05s;
                }
            }
            .train-video {
                position: absolute;
                bottom: 100px;
                right: 0;
                color: #fff;
                cursor: pointer;
                transition: opacity .35s,transform .35s;
                transform: translate3d(30px,0,0);
                transition-delay: .2s;
                .icon-shipin {
                    transition: all .3s;
                    font-size: 28px;
                }
            }
            .train-theme {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 80px;
                padding: 10px;
                background: #fff;
                font-size: 18px;
                .theme-text {
                    width: 100%;
                    font-size: 16px;
                    text-align: left;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    transition: all .3s;
                    a {
                        color: rgb(51,51,51)
                    }
                }
            }
            .train-other {
                color: #aaa;
                font-size: 14px;
                span {
                    float: left;
                }
                span.train-status {
                    float: right;
                }
            }
            &:hover {
                box-shadow: 0 2px 8px $box-shadow-hover;
                .train-icon {
                    background: #aaa;
                    opacity: 0.3;
                }
                .train-img {
                    img {
                        opacity: .3;
                        transform: scale3d(1.1,1.1,1);
                    }
                }
                .train-content {
                    p {
                        opacity: 1;
                        transform: translate3d(0,0,0);
                    }
                    p:first-child {
                        transition-delay: .05s;
                    }
                    p:nth-of-type(2){
                        transition-delay: .1s;
                    }
                    p:nth-of-type(3){
                        transition-delay: .15s;
                    }
                    p:nth-of-type(4){
                        transition-delay: .2s;
                    }
                }
                .train-video {
                    opacity: 1;
                    transform: translate3d(-20px,0,0);
                    transition: all .3s ease .3s;
                    &:hover {
                        .icon-shipin {

                            color: $hover;
                        }
                    }
                }
                .train-theme {
                    .theme-text {
                        font-size: 16px;
                        font-weight: bold;
                    }
                }
                .train-other {
                    cursor: auto;
                }
            }

        }
        .train-item-unfinshed {
            &:hover {
                .train-video {
                    opacity: 0;
                    transform: translate3d(50px,0,0);
                }
                .train-theme {
                    .theme-text {
                        font-size: 16px;
                        font-weight: normal;
                        cursor: auto;
                    }
                }
                .train-other {
                    cursor: auto;
                }
            }
        }
    }
    .weekly-list-wrapper {
        width: 100%;
        li {
            padding: 10px 20px;
            text-align: left;
            border-bottom: 1px dashed rgba(138,138,138, .3);
            &:last-child {
                border: none;
            }
            .weekly-title {
                padding-top: 10px;
                font-size: 18px;
                font-weight: bold;
                line-height: 24px;
                a {
                    color: rgb(51,51,51);
                    cursor: pointer;
                    &:hover {
                        color: $hover;
                        text-decoration: none;
                    }
                }

            }
            .weekly-outline {
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 14px;
                color: rgb(138,138,138);
            }
            .weekly-other {
                line-height: 24px;
                .provider-img {
                    position: relative;
                    float: left;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    overflow: hidden;
                    i {
                        color: rgba(0,0,0,0.1);
                    }
                    &:before {
                        position: absolute;
                        content: '';
                        z-index: 2;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        border: 1px solid rgba(0,0,0,0.1);
                        border-radius: 50%;
                    }
                }
                .provider-name {
                    float: left;
                    margin-left: 10px;
                    color: #3d3d3d;
                }
                .weekly-date {
                    float: right;
                    color: #8a8a8a;
                }
            }
        }
    }
    .show-wrapper {
        min-height: 300px;
    }
    .show-transition {
        transition: all .35s;
    }
    .subside-list-wrapper {
        margin-top: 3em;
        .subside-top {
            .subside-icon {
                padding: 10px 0;
                i {
                    font-size: 3.2em;
                    color: #666;
                }
            }
            .subside-name {
                font-size: 20px;
                color: #373d41;
                margin-top: 10px;
                font-weight: 700;
            }
        }
        .subside-bottom {
            padding-top: 10px;
            ul {
                margin-bottom: 0;
                li {
                    position: relative;
                    display: inline-block;
                    a {
                        display: inline-block;
                        padding: 0 10px;
                        color: #a9b0b4;
                        &:hover {
                            color: $hover;
                        }
                    }
                    &:after{
                        position: absolute;
                        top: 3px;
                        bottom: 5px;
                        content: '';
                        width: 1px;
                        background: #dcddde;
                    }
                    &:last-child {
                        &:after {
                            background: none;
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 768px){
        header {
            height: 300px;
        }
        .copyright {
            .copyright-left {
                text-align: left;
            }
            .copyright-right {
                text-align: left;
                font-size: 12px;
            }
        }
        .sblock {
            .section-title {
                padding: 0;
            }
        }
        .train-list-wrapper{
            .train-item{
                margin: 0 auto 20px auto;
            }
        }

        .team-list-wrapper {
            .team-list {
                li {
                    width: 70px;
                    height: 70px;
                    margin: 0 10px 40px 10px;
                    a {
                        .spinner {
                            width: 70px;
                            height: 70px;
                        }
                        .team-img {
                            top: 5px;
                            left: 5px;
                            bottom: 5px;
                            right: 5px;
                            .iconfont {
                                font-size: 50px;
                                line-height: 80px;
                            }
                        }
                        .team-content {
                            height: 26px;
                            left: 0;
                            bottom: -35px;
                            text-align: center;
                            transition: all 0.3s;
                            overflow: hidden;
                            p {
                                position: relative;
                                top: 0;
                                margin: 0;
                                color: #5f6367;
                                transition: all 0.3s;
                                span {
                                    display: block;
                                }
                            }
                        }
                        &:hover {
                            .spinner {
                                transform: rotate(180deg);
                            }
                            .team-img {
                                transform: scale(1.1);
                                img {
                                    filter: grayscale(0%);
                                }
                            }
                            .team-content {
                                p {
                                    top: -24px;
                                }

                            }
                        }
                    }


                }
            }
        }
        .dots-wrapper {
            height: 150px;
            p {
                font-size: 26px;
                line-height: 150px;
            }
            .dots {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
