<template>
    <div class="box">
        <!--新冠疫情可视化-->
<!--        <el-button type="primary" @click="reLoad">手动刷新</el-button>-->
        <div style="width: auto;height: 400px" id="main"></div>
        <div class="box2">
            <div class="title">国内消息</div>
           <div>
               <div class="left" v-for="(item,index) in XG.news" :key="index">
                   <div v-html="item.title"></div>
                   <div v-html="item.summary"></div>
                   <div v-html="item.pubDateStr"></div>
               </div>
           </div>
            <div class="title">新冠情报</div>
            <div class="right">
<!--                <div>{{XG.desc.remark1}}</div>-->
                <div>{{XG.desc.remark2}}</div>
                <div>{{XG.desc.remark3}}</div>
                <div>{{XG.desc.note1}}</div>
                <div>{{XG.desc.note2}}</div>
                <div>{{XG.desc.note3}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {XG} from "../utils/api";
    import * as echarts from "echarts";



    export default {
        name: "XG",
        components:{
            // eslint-disable-next-line vue/no-unused-components
            echarts
        },
        data(){
            return{
                pro:null,
                XG:{
                    news:{
                        //新闻
                        pubDateStr:{},
                        title:{},
                        summary:{},
                    },
                    desc:{
                        //统计
                        currentConfirmedCount:{},
                        confirmedCount:{},
                        suspectedCount:{},
                        curedCount:{},
                        deadCount:{},
                        seriousCount:{},
                        yesterdayConfirmedCountIncr:{},
                        yesterdaySuspectedCountIncr:{},
                        remark1:{},
                        remark2:{},
                        remark3:{},
                        note1:{},
                        note2:{},
                        note3:{},
                        // foreignStatistics:{
                        // //    海外
                        //     currentConfirmedCount:{},
                        //     confirmedCount:{},
                        //     suspectedCount:{},
                        //     curedCount:{},
                        //     deadCount:{},
                        // }
                    }
                }
            }
        },
        created() {
        //  初始化显示
        //     let XG1 = JSON.parse(localStorage.getItem("keyXG", 'res'))
        //     this.XG = XG1.data.newslist[0]
        //     console.log(this.XG)
        //     XG('3a5d26f35062ccee8f448ee218fe6439').then(res=>{
        //         // localStorage.setItem('keyXG', JSON.stringify(res))
        //         this.XG=res.data.newslist[0]
        //         console.log(res.data.newslist[0])
        //         this.$forceUpdate()
        //     })

            this.pro =  XG('3a5d26f35062ccee8f448ee218fe6439').then(res=>{
                // localStorage.setItem('keyXG', JSON.stringify(res))
                this.XG=res.data.newslist[0]
                console.log(res.data.newslist[0])
                this.$forceUpdate()
            })
        },
        mounted() {

            this.pro.then(()=>{
                this.init()
            })
            // this.init()
        },
        methods:{
            // reLoad(){
            //     //点击刷新
            //     // XG('3a5d26f35062ccee8f448ee218fe6439').then(res=>{
            //     //     // localStorage.setItem('keyXG', JSON.stringify(res))
            //     //     this.XG=res.data.newslist[0]
            //     //     // console.log(11)
            //     // })
            //     this.pro.then(()=>{
            //         this.init()
            //     })
            // },
            init() {
                // 基于准备好的dom，初始化echarts实例
                    let myChart = echarts.init(document.getElementById("main"));
                    let option = {
                        title: {
                            padding: 5, //padding: [5,5,5,5],标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
                            top: "2%",
                            text: "新冠疫情",
                            // subtext: '(纵向为人/次，横向为时间)',
                            x: "left",
                            left: 20,
                            textStyle: {
                                fontSize: 16,
                                color: "rgba(51,51,51,1)"
                            }
                        },
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {
                                // 坐标轴指示器，坐标轴触发有效
                                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                        legend: {
                            type: "scroll",
                            orient: "vertical",
                            right: 10,
                            top: 20,
                            bottom: 20,
                            data: ['人数'],
                            itemWidth: 4,
                            itemHeight: 16,

                            x: "right"
                        },
                        grid: {
                            left: "10%",
                            right: "5%",
                            bottom: "3%",
                            containLabel: true
                        },
                        xAxis: [
                            {
                                type: "value",
                                show: true
                            }
                        ],
                        yAxis: [
                            {
                                type: "category",
                                axisTick: {
                                    show: false
                                },
                                data:[
                                    '现存确诊人数','累计确诊人数','累计境外输入人数','累计治愈人数','累计死亡人数','现存无症状人数',
                               '新增境外输入人数','相比昨天现存确诊人数',
                                ]
                            }
                        ],
                        series: [
                            {
                                name: "人数",
                                type: "bar",
                                stack: "总量", //数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
                                barWidth: "30",
                                barGap: "0%", //两个柱子距离
                                itemStyle: {
                                    // normal: {
                                        //这里用函数控制柱子颜色，定义一个list，然后根据所以取得不同的值
                                        color: ["#FF5C95"],
                                        label: {
                                            show: false
                                        }
                                    // }
                                },
                                data: [
                                    this.XG.desc.currentConfirmedCount,
                                    this.XG.desc.confirmedCount,
                                    this.XG.desc.suspectedCount,
                                    this.XG.desc.curedCount,
                                    this.XG.desc.deadCount,
                                    this.XG.desc.seriousCount,
                                    this.XG.desc.yesterdayConfirmedCountIncr,
                                    this.XG.desc.yesterdaySuspectedCountIncr,
                                ]
                            },
                        ]
                    };
                    myChart.setOption(option);

            }
        }
    }
</script>

<style scoped lang="less">
.box{
    width: 1200px;
    margin:20px auto;
    background-color: #f5f6f7;
/*overflow: hidden;*/
    .el-button{
        border-radius: 10px;
        /*float: right;*/
    }

    .box2{
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        >div{
            margin: 10px;
        }
        .left{
            overflow: hidden;
            div{
                margin: 5px 0;
              line-height: 1.5;
            }
            div:last-child{
                float: right;
            }
        }
        .right{
            div{
                margin: 5px 0;
                line-height: 1.5;
            }
        }
        .title{
            font-size: 20px;
            font-weight: 400;
            border-top: 3px solid red;
            text-align: center;
            padding-top:10px;
        }
    }
}
</style>
