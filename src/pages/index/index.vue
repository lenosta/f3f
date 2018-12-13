<template>
    <div class="">
        <div class="banner-wrapper">
            <header class="text-center" id="home"></header>
            <p>换位思考 结果导向 勇于担当</p>
            <p>各有专长 协同协作 共创价值</p>
            <p class="banner-text">--“打造智慧的数据服务能力，让数据会说话!”</p>
            <a class="arrow-down" @click="arrowDown()"><i class="iconfont icon-xiangxia"></i></a>
        </div>
        <div class="index-wrapper">
            <!--技术规范-->
            <section id="tech-standard" class="sblock  text-center">
                <div class="container">
                    <h1 class="section-title"><span>技术规范</span></h1>
                    <div class="tech-wrapper">
                        <div class="cat">
                            <ul>
                                <li v-for="(item, index) in techCategories" :class="{active:standardTechIndex===item.index}"
                                    @click="standardTechIndex=item.index" :key="index">
                                    {{item.name}}
                                </li>
                            </ul>
                        </div>
                        <div class="show-wrapper">
                            <div class="row " v-for="(parentItem, index) in techCategories[standardTechIndex].standards" :key="index">
                                <div class="col-lg-4 col-md-4 tech-block inline"
                                     v-for="(item, index) in parentItem" :key="index">
                                    <a :href="item.url" target="_blank">
                                        <div class="icon">
                                            <div class="circle"></div>
                                            <i class="iconfont" :class="item.iconClass"></i>
                                        </div>
                                        <div class="content">
                                            <div class="title">{{item.name}}</div>
                                            <p :class="tit_pclass">{{item.summary}}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!--相关技术-->
            <section id="relative-tech" class="sblock sblock-gray text-center">
                <div class="container">
                    <h1 class="section-title"><span>相关技术</span></h1>
                    <div class="relative-wrapper">
                        <div class="cat">
                            <ul>
                                <li v-for="(item, index) in techCategories"
                                    :class="{active:relativeTechIndex===item.index}"
                                    @click="relativeTechIndex=item.index" :key="index">
                                    {{item.name}}
                                </li>
                            </ul>
                        </div>
                        <div class="show-wrapper" key="relative">
                            <div class="row"
                                 v-for="(parentItem, index) in techCategories[relativeTechIndex].relativeTechs"
                                 :key="index">
                                <div class="col-md-4 tech-block"
                                     v-for="(item, index) in parentItem" :key="index">
                                    <div class="icon">
                                        <i class="iconfont" :class="item.iconClass"></i>
                                    </div>
                                    <div class="title">{{item.name}}</div>
                                    <div class="content">
                                        <span v-for="(child, indexChild) in item.items" :key="indexChild">
                                            <a :href="child.url?child.url:'javascript:void(0);'" target="_blank">{{child.name}}</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!--培训计划-->
            <section id="train-plan" class="sblock  text-center">
                <div class="container">
                    <h1 class="section-title"><span>培训计划</span></h1>
                    <div class="train-wrapper">
                        <div class="cat">
                            <ul>
                                <li v-for="(item, index) in trainBtn" :class="{active:trainIndex===index}" @click="handleClickTrain(item, index)" :key="index">
                                    {{item}}
                                </li>
                            </ul>
                            <!--<a class="more-btn"><i class="iconfont icon-gengduo"></i></a>-->
                        </div>
                        <div class="train-list-wrapper">
                            <div class="show-wrapper" key="train">
                                <div  class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12"  v-for="(item1, index1) in trainArr" :key="index1">
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
                                <p class="go-to-list" v-show="trainArr.length > 0"><span class="go-to-list-text">查看列表</span><i class="iconfont icon-youjiantou"></i></p>
                            </div>
                        </div>

                    </div>
                    <div></div>
                </div>
            </section>
            <!--技术周刊-->
            <section id="technical-weekly" class="sblock sblock-gray  text-center">
                <div class="container">
                    <h1 class="section-title"><span>技术周刊</span></h1>
                    <div class="tech-wrapper">
                        <div class="cat">
                            <ul>
                                <li v-for="(item, index) in weeklyBtn" :class="{active:weeklyIndex===index}" @click="handleClickWeekly(item, index)" :key="index">
                                    {{item}}
                                </li>
                            </ul>
                        </div>
                        <div class="show-wrapper" key="weekly">
                            <ul class="weekly-list-wrapper" >
                                <li v-for="(item, index) in weeklyArr" :key="index" :class="index % 2 == 0 ? 'weeklyLeft' : 'weeklyRight'">
                                    <p class="weekly-title"><a :href="item.url" target="_blank">{{item.title}}</a></p>
                                    <p class="weekly-outline">{{item.outline}}</p>
                                    <p class="weekly-other clearfix">
                                        <span class="provider-img"  >
                                            <i v-show="!item.provider" class="iconfont icon-gerenyonghutouxiang2"></i>
                                            <img v-show="item.provider" :src="'./static/img/teamimg/'+ item.provider + '.jpg'">
                                        </span>
                                        <span class="provider-name">{{item.provider}}</span>
                                        <span class="weekly-date">{{item.date}}</span>
                                    </p>
                                </li>
                            </ul>
                            <p class="go-to-list" v-show="weeklyArr.length > 0"><span class="go-to-list-text">查看列表</span><i class="iconfont icon-youjiantou"></i></p>
                        </div>
                    </div>
                </div>
            </section>
            <!--技术沉淀-->
            <section id="tech-subside" class="sblock   text-center">
                <div class="container">
                    <h1 class="section-title"><span>技术沉淀</span></h1>
                    <div class="tech-wrapper">
                        <div class="cat">
                            <ul>
                                <li v-for="(item, index) in subsideBtn" :class="{active:subsideIndex===index}" @click="handleClickSubside(item, index)" :key="index">
                                    {{item}}
                                </li>
                            </ul>
                        </div>
                        <div class="show-wrapper" key="subside">
                            <div class="row subside-list-wrapper " >
                                <div v-for="(item, index) in subsideArr" :key="index" class="col-lg-6 col-md-6 col-sm-6 col-xs-12 subside-item">
                                    <div class="subside-top text-center">
                                        <p class="subside-icon"><i class="iconfont" :class="item.icon"></i></p>
                                        <h2 class="subside-name">{{item.name}}</h2>
                                    </div>
                                    <div class="subside-bottom">
                                        <ul v-for="(item1, index1) in item.children" class="text-center" :key="index1">
                                            <li v-for="(item2,index2) in item1" :key="index2"><a :href="item2.url">{{item2.name}}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="dots-wrapper">
                <p class="dots-text">各有专长 协同协作 共创价值</p>
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
                                    :class="tabIndex === index ? 'active': ''" :key='index'>
                                    {{item}}
                                </li>
                            </ul>
                            <div class="show-wrapper" key="team">
                                <div id="teamListWrapper" class="team-list-wrapper clearfix show-transition" :style="{height: height+'px'}" >
                                    <ul id="teamList" class="team-list clearfix">
                                        <li :class="item.className" v-for="(item, index) in teamArr" :key="index">
                                            <a :href="item.blogUrl ? item.blogUrl : ''">
                                                <div class="spinner"></div>
                                                <div class="team-img" ><i v-show="item.imgurl == ''" class="iconfont icon-gerenyonghutouxiang2"></i><img v-show="item.imgurl" :src="item.imgurl"></div>
                                                <div class="team-content">
                                                    <p>
                                                        <span class="team-name">{{item.anotherName ? item.anotherName: item.name}}</span>
                                                        <span class="team-des">{{item.des}}</span>
                                                    </p>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" class="sblock sblock-dark text-center">

                <div class="container">
                    <div class="contact-wrapper">
                        <div class="copyright ">
                            <div class="row">
                                <div class="col-lg-7 col-md-5 col-sm-12 col-xs-12"><p class="copyright-left">版权所有 智慧大数据</p>
                                </div>
                                <div class="col-lg-5 col-md-7 col-sm-12 col-xs-12"><p class="copyright-right">
                                    Copyright©️2018 BigDataSmart All Rights Reserved</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="scrollToTop" @click="gotoTop()"><i class="iconfont icon-xiangshang" ></i></div>
    </div>
</template>

<script>
    import techCategory from './tech-category';
    import teamObj from "./team.json"
    import trainPlan from './train-plan.json'
    import weekly from './technical-weekly.json'
    import subside from './tech-subside.json'
    import * as jstool from '../../assets/js/utility'
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
                height6: 0,
                scrollTop: 0,
                //技术沉淀
                subsideBtn: [],
                subsideIndex: 0,
                subsideArr: [],
                isIE: false,
                tit_pclass: 'tit-p',
            }
        },
        mounted() {
            this.setIEClass();
            this.initTechCategories();
            this.initTrainPlan();
            this.initWeekly();
            this.initSubside();
            this.initTeam();
            this.height6 = jQuery("#tech-standard").offset().top;
            window.addEventListener('scroll', this.handleScroll, true);
            this.initVanta();
            jQuery(".main").click(function () {
                jQuery("[data-target='#bs-example-navbar-collapse-1']").addClass("collapsed").attr("aria-expanded", false);
                jQuery("#bs-example-navbar-collapse-1").removeClass("in").attr({"aria-expanded": false});
            })
        },
        components: {},
        computed: {

        },
        methods: {
            setIEClass() {
                this.isIE = jstool.getBrowserType();
                if (this.isIE != 'webKit') {
                    this.tit_pclass = 'tit-p-ie';
                }
            },
            handleScroll(){
                this.scrollTop = jQuery(document).scrollTop() ;
                if( this.scrollTop > 100){
                  jQuery(".scrollToTop").addClass("active");
                }else {
                  jQuery(".scrollToTop").removeClass("active");
                }

                if(0 < this.scrollTop < this.height6){
                jQuery("#nav li ").eq(0).addClass("active").siblings().removeClass("active");
                }
                
                if(this.height6 -200 < this.scrollTop){
                  jQuery("#nav li").eq(1).addClass("active").siblings().removeClass("active");
                  this.height0 = jQuery("#relative-tech").offset().top;
                  if(this.height0 -200  < this.scrollTop) {
                    jQuery("#nav li ").eq(2).addClass("active").siblings().removeClass("active");
                    jQuery("#relative-tech").addClass("relative-tech");
                    this.height1 = jQuery("#train-plan").offset().top;
                    if(this.height1 -200 < this.scrollTop){
                      jQuery("#nav li ").eq(3).addClass("active").siblings().removeClass("active");
//                    this.show1 = true;
                      jQuery("#train-plan").addClass("train-plan");
                      this.height2 = jQuery("#technical-weekly").offset().top;
                      if(this.height2 -200 < this.scrollTop){
                        jQuery("#nav li ").eq(4).addClass("active").siblings().removeClass("active");
                        jQuery("#technical-weekly").addClass("technical-weekly");
                        this.height3 = jQuery("#tech-subside").offset().top;
                        if(this.height3 -200 < this.scrollTop){
                          jQuery("#nav li ").eq(5).addClass("active").siblings().removeClass("active");
                          jQuery("#tech-subside").addClass("tech-subside");
                          this.height4 = jQuery("#team").offset().top;
                          if(this.height4 - 200 < this.scrollTop){
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
//                    color: 'rgba(3,150,255,1)',
                    color: 0x7e8da,
//                  backgroundColor: 'rgba(5,23,63,1)',
                    backgroundColor: 'black',
                    points: 10.00,
                    maxDistance: 18.00,
                    spacing: 14.00,
//                    backgroundAlpha: 0
                });
                jQuery(".banner-wrapper p").eq(0).addClass("cultural-consensus");
                jQuery(".banner-wrapper p").eq(1).addClass("development-goals");
                jQuery(".banner-wrapper p").eq(2).addClass("effort-direction");
                jQuery(".arrow-down").addClass("active");
                VANTA.BIRDS({
                    el: "#dots",
                    backgroundColor: 0xdb9ae,//0x0396ff,
                    color1: 0xffffff,
                    color2: 0xffffff,
                    wingSpan: 10.00,
                    speedLimit: 2.00,
                    separation: 51.00,
                    alignment: 70.00,
                    cohesion: 73.00,
//                    backgroundAlpha: 0
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
                let dataArr = trainPlan.data[0].details;
                let btnArr = [], listArr = [];
                trainArr.map( item => {
                  btnArr.push(item.type);
                })
                this.trainBtn = btnArr;
                dataArr.map(item => {
                    if(item.status){
                      listArr.push(item);
                    }
                });
                var compare = function(pro){
                    return function(a, b){
                      let value1 = a[pro];
                      let value2 = b[pro];
                      return new Date(value2).getTime() - new Date(value1).getTime();
                    }
                }
                listArr.sort(compare('time'));
                this.trainArr = listArr;
                let width = document.body.clientWidth;
                if(width <= 768){
                    this.trainArr = this.trainArr.slice(0, 3);
                }else {
                  if(listArr.length > 6) {
                    this.trainArr = listArr.slice(0, 7);
                  }

                }



            },
            // 初始化技术周刊
            initWeekly(){
                let weeklyArr = weekly.data;
                let arr = [];
                weeklyArr.map( item => {
                    arr.push(item.type);
                })
                this.weeklyBtn = arr;
                this.weeklyArr = weeklyArr[0].details.slice(0,4);
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
            },
            gotoTop(){
              jQuery("html, body").animate({scrollTop: 0}, 1000);
            },
            arrowDown(){
              jQuery("html, body").animate({scrollTop: this.height6}, 1000);
            },
            handleClickWeekly(name, index){
              this.weeklyIndex = index;
              let weeklyArr = weekly.data;
              weeklyArr.map(item => {
                if(item.type == name){
                  this.weeklyArr = item.details;
                }
              })
            },
            handleClickSubside(name, index){
              this.subsideIndex = index;
              let subsideArr = subside.data;
              subsideArr.map(item => {
                if(item.type == name){
                  this.subsideArr = item.details;
                }
              })
            },
            handleClickTrain(name,index){
              this.trainIndex = index;
              let trainArr = trainPlan.data;
              trainArr.map(item => {
                if(item.type == name){
                  this.trainArr = item.details;
                }
              })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "./../../assets/css/variable.scss";
    @import "./../../assets/css/mixin.scss";
    @import "../../../static/css/animate.min.css";
    .banner-wrapper {
        width: 100%;
        header {
            background: linear-gradient(135deg, #111222 0%,#090b2a 100%);
            background-size: cover;
            color: #cfcfcf;
            height: 100vh;
            z-index: 10;
        }
        p{
            position: absolute;
            left: 10%;
            z-index: 11;
            color: rgba(255,255,255,.9);
            font-size: 2.6em;
            opacity: 0;
            transform: skewX(45deg);
        }
        .banner-text {
            right: 0;
            left: auto;
            color: rgba(255,255,255,.7);
            transform: skewX(-45deg);
        }
        .cultural-consensus {
            top: 30%;
            left: 25%;
            opacity: 1;
            transform: skewX(0);
            transition: all 1s ease-in-out .5s;
        }
        .development-goals {
            top: 40%;
            left: 25%;
            opacity: 1;
            transform: skewX(0);
            transition: all 1s ease-in-out 1s;
        }
        .effort-direction {
            top: 50%;
            right: 15%;
            opacity: 1;
            font-size: 1.8em;
            transform: skewX(-10deg);
            transition: all 1s ease-in-out 1.5s;
        }
        .arrow-down {
            position: absolute;
            bottom: 100px;
            left: 48%;
            width: 56px;
            height: 56px;
            border-radius: 50%;
            /*background: rgba(3,150,255 ,.6);*/
            background: rgba(125,250,251,.6);
            z-index: 11;
            text-align: center;
            cursor: pointer;
            opacity: 0;
            overflow: hidden;
            i {
                position: absolute;
                transform: translateY(0);
                left: 16px;
                color: rgba(255,255,255,.8);
                opacity: 0;
                font-size: 26px;
                animation: arrowDown 2.5s infinite;
            }
            &.active {
                opacity: 1;
                transition: all .5s ease-in-out 1s;
            }
            &:hover {
                transition: all 1s ease-out 0s;
                /*<!--background: $hover;-->*/
                background: rgba(125,250,251,.8); ;
                i{
                    /*animation-play-state: paused;*/
                    animation: arrowDown 1s infinite;
                }
            }
        }
    }
    @keyframes arrowDown {
        0% {transform: translateY(0px);opacity: 0;}
        80% {transform: translateY(25px);opacity: 1;}
        100% {transform: translateY(25px); opacity: 0;}
    }
    .index-wrapper {
        position: relative;
        z-index: 100;
    }
    .cat {
        position: relative;
        margin: 25px 0 0;
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
                border-bottom: 2px solid $tabhover;
                transition: all .2s linear;
            }
            &:hover {
                color: $tabhover;
            }
            &:hover:before {
                width: 100%;
                left: 0;
                top: 0;
                transition-delay: 0.1s;
                border-bottom-color: $tabhover;
                z-index: 1;
            }
            &.active {
                color: $tabhover;
            }
            &.active:before {
                width: 100%;
                left: 0;
                top: 0;
                transition-delay: 0.1s;
                border-bottom-color: $tabhover;
                z-index: 1;
            }
        }
        li:hover ~ li::before {
            left: 0;
        }
        .more-btn {
            position: absolute;
            top: 3px;
            right: 0;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            border: 1px solid #cecece;
            text-align: center;
            line-height: 28px;
            color: #cecece;
            transition: all .3s ease-out;
            cursor: pointer;
            i {
                font-size: 20px;
            }
            &:hover {
                background: $hover;
                border: 1px solid $hover;
                color: #fff;
            }
        }
    }
    .sblock {
        padding: 20px 0;
        background: #fff;
        .section-title {
            padding: 20px 0;
            margin-bottom: 30px;
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
        z-index: 1;
        .section-title {
            span {
                &:after {
                    border: 8px solid $sblock-gray;
                }
            }

        }
    }
    .tech-block {
        margin-top: 50px;
        padding: 10px;
        opacity: 0;
        transition: all 1s ease-out;
        .icon {
            position: relative;
            margin: auto;
            float: none;
            width: 70px;
            height: 70px;
            line-height: 70px;
            text-align: center;
            font-size: 2em;
            border-radius: 50%;
            /*border: 1px solid #ddd;*/
            i {
                color: #888;
            }
            i.icon-keshihua {
                font-size: 2em;
            }

        }
        .title {
            margin-top: 15px;
            font-size: 18px;
            font-weight: bold;
            color: #666;
        }
        .content {
            margin: 10px 0;
            padding: 0 10px;
            text-align: center;
            color: #666;
            span {
                display: inline-block;
                padding: 8px 8px;
                margin: 10px 10px 0;
                color: #666;
                background: transparent;
                border: 1px solid #666;
                border-radius: 5px;
                &:hover {
                    border: 1px solid $tabhover;
                    background: $tabhover;
                    color: #fff;
                    transition: all .2s linear;
                    box-shadow: 2px 2px 8px 1px #a9a9a9;
                }
                a {
                    color: inherit;
                }
            }
        }
    }

    .relative-tech {
        .tech-block {
            margin-top: 10px;
            opacity: 1;
        }
    }
    .tech-block.inline {
        margin-top: 30px;
        padding: 10px;
        opacity: 1;
        &:hover {
            border-radius: 5px;
            box-shadow: 0 0 1px 1px rgba(0, 0, 0, .1) inset !important;
        }
        a {
            color: #333;
            text-decoration: none;
            transition: all 1s;
            &:hover {
                outline: medium none;
                /*text-decoration: none;*/
                transition: all .2s ease-out;
                .content {
                    color: #333;
                }
                .icon {
                    i {
                        color: $tabhover; //#666;
                    }
                }
                .circle {
                    border: 2px dashed $tabhover;
                    -webkit-animation: boderrotate 7s linear infinite;
                    -moz-animation: boderrotate 7s linear infinite;
                    -o-animation: boderrotate 7s linear infinite;
                    animation: boderrotate 7s linear infinite;
                }
                .tit-p {
                    background-image: -webkit-linear-gradient(left, #2f52d4, #86d0d4 25%, #2f52d4 50%, #86d0d4 75%, #147B96);
                    /*background-image: -webkit-linear-gradient(left, #b9ffff, #8dffff 20%, #65ffff 40%, #35eaea 60%, #22d4d4 80%, #0eb7b7);*/
                    color: transparent;
                    -webkit-text-fill-color: transparent;
                    -webkit-background-clip: text;
                    background-size: 200% 100%;
                    /* 动画 */
                    animation: masked-animation 2s infinite linear;
                }
                .tit-p-ie {
                    transition: all .5s;
                    color: #22d4d4;
                }
            }
        }
        .icon {
            float: left;
            width: 50px;
            height: 50px;
            margin-top: 48px;
            line-height: 50px;
            text-align: center;
            font-size: 2em;
            border-radius: 50%;
            /*border: 1px solid #ddd;*/
            i {
                color: #888;
            }
            .circle{
                position: absolute;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: 1px solid #ddd;
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
    .tech-standard {
        .tech-block {
            margin-top: 30px;
            opacity: 1;
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
                border-bottom: 2px solid $tabhover;
                transition: all .2s linear;
            }
            &:hover {
                color: $tabhover;
            }
            &:hover:before {
                width: 100%;
                left: 0;
                top: 0;
                transition-delay: 0.1s;
                border-bottom-color: $tabhover;
                z-index: 1;
            }
            &.active {
                color: $tabhover;
            }
            &.active:before {
                width: 100%;
                left: 0;
                top: 0;
                transition-delay: 0.1s;
                border-bottom-color: $tabhover;
                z-index: 1;
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
                width: 80px;
                margin: 0 15px;
                border-radius: 50%;
                a {
                    display: inline-block;
                    .spinner {
                        position:absolute;
                        width: 80px;
                        height: 80px;
                        border-radius: 50%;
                        transition: all .3s;
                        z-index: 10;
                    }
                    .team-img {
                        width: 80px;
                        height: 80px;
                        border-radius: 50%;
                        overflow: hidden;
                        background: #fbfbfb;
                        .iconfont {
                            font-size: 70px;
                            line-height: 110px;
                            color: #f1f1f1;
                            transition: all .3s ease-in;
                        }
                        img{
                            width: 100%;
                            height: auto;
                            filter: grayscale(90%);
                            transition: all .3s ease-in;
                        }
                    }
                    .team-content {
                        position: relative;
                        width: 100%;
                        height: 52px;
                        margin-top: 5px;
                        text-align: center;
                        transition: all 0.3s;
                        overflow: hidden;
                        p {
                            position: absolute;
                            width: 100%;
                            height: 26px;
                            top: 0;
                            margin: 0;
                            color: #5f6367;
                            text-align: center;
                            transition: all 0.3s;
                            overflow: hidden;
                            span {
                                display: block;
                                margin-bottom: 10px;
                            }
                        }
                    }
                    &:hover {
                        .spinner {
                            box-shadow: 0 0 11px 1px #efefef inset;
                            /*transform: rotate(180deg);*/
                        }
                        .team-img {
                            overflow: hidden;
                            .iconfont {
                                font-size: 80px;
                                color: #e8e8e8;
                            }
                            img {
                                transform: scale(1.1);
                                filter: grayscale(0%);
                            }
                        }
                        .team-content {
                            p {
                                top: -34px;
                                height: 80px;
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
                    border:1px solid $tabhover;
                    background: $tabhover;
                    i {
                        color: #fff;
                    }
                }
                .contact-msg {
                    color: $tabhover;
                }
            }
        }

        .copyright {
            padding: 10px 0;
            color: #73777a;
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
        height: 150px;
        background: rgba(7, 111, 185, .9);
        p {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            text-align: center;
            line-height: 150px;
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
    .train-plan {
        .train-list-wrapper {
            .train-item {
                opacity: 1;
                transform: scale(1, 1);
            }
        }
    }
    .train-list-wrapper {
        margin-top: 20px;
        .train-item {
            position: relative;
            overflow: hidden;
            max-width: 480px;
            max-height: 360px;
            height: 350px;
            margin-bottom: 20px;
            /*background: rgba(3,150,255 ,1);*/
            cursor: pointer;
            box-shadow: 0 1px 2px $box-shadow;
            border-radius: 4px;
            opacity: 0;
            transform: scale(0.8, 0.8);
            transition: 1s ease-out;
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
                    transition: 1s;
                    backface-visibility: hidden;
                    filter: brightness(90%);
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
                    color: #ddd;
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
                    a {
                        color: rgb(51,51,51);
                        transition: all .35s ease;
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
                background: $hover;//rgba(3,150,255 ,.9);
                box-shadow: 0 2px 8px $box-shadow-hover;
                .train-icon {
                    background: #aaa;
                    opacity: 0.3;
                }
                .train-img {
                    img {
                        opacity: .4;
                        transform: scale3d(1.1,1.1,1);
                        filter:blur(3px) brightness(30%);
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

                            color: #fff;
                        }
                    }
                }
                .train-theme {
                    .theme-text {
                        a{
                            color: $tabhover;
                        }

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
    .technical-weekly {
        .weekly-list-wrapper {
            li {
                opacity: 1;
            }
            li.weeklyLeft {
                left: 0;
            }
            li.weeklyRight {
                right: 0;
            }
        }
    }
    .weekly-list-wrapper {
        width: 100%;
        li {
            position: relative;
            padding: 10px 20px;
            text-align: left;
            border-bottom: 1px solid rgba(138,138,138, .2);
            opacity: 0;
            transition: 1s ease-out;
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
                        color: $tabhover;
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
                    text-align: center;
                    overflow: hidden;
                    i {
                        font-size: 18px;
                        color: rgba(0,0,0,0.4);
                    }
                    img {
                        width: 100%;
                    }

                }
                .provider-name {
                    float: left;
                    margin-left: 10px;
                    color: #8a8a8a;
                }
                .weekly-date {
                    float: right;
                    color: #8a8a8a;
                }
            }
        }
        li.weeklyLeft {
            left: -50px;
        }
        li.weeklyRight {

            right: -50px;
        }
    }
    .show-wrapper {
        min-height: 250px;
    }
    .show-transition {
        transition: all .35s;
    }
    .tech-subside {
        .subside-list-wrapper {
            .subside-item {
                opacity: 1;
                transform: translate(0, 0);
            }
        }
    }
    .subside-list-wrapper {
        margin-top: 3em;
        .subside-item {
            opacity: 0;
            transform: translate(-50px, 0);
            transition: 1s ease-out;
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

    }
    .scrollToTop {
        position: fixed;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        bottom: 100px;
        right: 2%;
        z-index: 1000;
        background: #fff;
        color: #ccc;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
        opacity: 0;
        transition:  .5s ease-in-out;
        box-shadow: 0 1px 10px #ccc;
        i {
            font-size: 24px;
        }
        &:hover {
            background: $fonthover;
            color: #fff;
            box-shadow: 0 0 3px $fonthover;
        }
    }
    .scrollToTop.active {
        opacity: 1;
    }
    .go-to-list {
        position: relative;
        width: 100px;
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        border-radius: 5px;
        background: #efefef;
        overflow: hidden;
        cursor: pointer;
        transition: all .5s ease-out;
        .go-to-list-text {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 40px;
            left: 0;
            color: #fff;
            transition: all .3s ease-out;
        }
        i {
            position: absolute;
            width: 100%;
            left: 0;
            top: 0;
            color: #ccc;
            font-size: 24px;
            transition: all .3s ease-out;
        }
        &:hover {
            background: $tabhover;
            .go-to-list-text {
                top: 0;
            }
            i {
                top: -40px;
            }
        }
    }

    @-webkit-keyframes boderrotate{from{-webkit-transform: rotate(0deg)}
        to{-webkit-transform: rotate(360deg)}
    }
    @-moz-keyframes boderrotate{from{-moz-transform: rotate(0deg)}
        to{-moz-transform: rotate(359deg)}
    }
    @-o-keyframes boderrotate{from{-o-transform: rotate(0deg)}
        to{-o-transform: rotate(359deg)}
    }
    @keyframes boderrotate{from{transform: rotate(0deg)}
        to{transform: rotate(359deg)}
    }


    @media screen and (max-width: 768px){
        .banner-wrapper{
            header {
                height: 100vh;
            }
            p{
                width: 100%;
                left: 0;
                text-align: center;
                font-size: 1.8em;
            }
            .banner-text {
            }
            .cultural-consensus {
                top: 35%;
                left: 0;
            }
            .development-goals {
                top: 45%;
                left: 0;
            }
            .effort-direction {
                opacity: 0;
            }
            .arrow-down {
                bottom: 50px;
                left: 46%;
                width: 50px;
                height: 50px;
                background: rgba(3,150,255 ,.8);
                i {
                    left: 13px;
                    font-size: 24px;
                }
            }
        }
        .contact-wrapper{
            .copyright {
                .copyright-left {
                    text-align: left;
                }
                .copyright-right {
                    text-align: left;
                    font-size: 12px;
                }
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
        .team-list-wrapper {
            .team-list {
                li {
                    width: 70px;
                    margin: 0 5px;
                    border-radius: 50%;
                    a {
                        display: inline-block;
                        .spinner {
                            width: 70px;
                            height: 70px;
                            z-index: 10;
                        }
                        .team-img {
                            width: 70px;
                            height: 70px;
                            .iconfont {
                                font-size: 60px;
                            }
                        }
                    }
                }
            }
        }
        .tech-block.inline {
            margin-top: 0;
            padding: 5px 15px;
            .icon {
                margin-top: 30px;
            }
        }
        .tech-block {
            .icon {
                width: 60px;
                height: 60px;
                line-height: 60px;
                i.icon-keshihua {
                    font-size: 1.8em;
                }
            }
        }
        .weekly-list-wrapper {
            li.weeklyLeft {
                left: -20px;
            }
            li.weeklyRight {
                right: -20px;
            }
        }
    }

    @keyframes masked-animation {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: -100% 0;
        }
    }
</style>
