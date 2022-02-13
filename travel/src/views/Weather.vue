<template>
    <div class="home">
        <Header></Header>
        <div class="content">
<!--            日历-->
<!--            <el-calendar v-model="value" class="cale" style=""></el-calendar>-->
<!--            搜索-->
            <div class="search">
                <el-input v-model="input" placeholder="请输入城市"> </el-input>
                <el-button  type="primary" @click="enter">查询</el-button>
            </div>
            <div class="left">
                <div><span>城市:  </span> {{list.city}}</div>
                <div><span>日期:  </span> {{list.date}}</div>
                <div><span>星期:  </span> {{list.week}}</div>
                <div><span>更新时间: </span>   {{list.update_time}}</div>
                <div><span>实时天气: </span>   {{list.wea}}</div>
                <div  class="import"><span>实时温度:  </span>  {{list.tem}}  ℃</div>
                <div class="import"><span>高温:  </span> {{list.tem1}}  ℃</div>

                <div  class="import"><span>低温:  </span> {{list.tem2}}  ℃</div>
                <div><span>风向:  </span> {{list.win}}</div>
                <div><span>风速:  </span> {{list.win_meter}}</div>
                <div><span>湿度:   </span> {{list.humidity}}</div>
                <div><span>能见度:  </span>  {{list.visibility}}</div>
<!--                <div  class="import"><span>预警:  </span>{{list.alarm.alarm_content}}</div>-->
<!--                <div><span>灾害等级:  </span> {{list.alarm.alarm_level}}</div>-->
<!--                <div><span>灾害形式:  </span>  {{list.alarm.alarm_type}}</div>-->
            </div>
            <div class="right">
                <div  class="import"><span>空气质量: </span> {{air.air}}</div>
                <div  class="import"><span>空气等级: </span> {{air.air_level}}</div>
                <div><span>外出建议: </span> {{air.air_tips}}</div>
<!--                <div><span>空气中pm2.5:  </span>  {{air.pm25}}μg/m3</div>-->
                <div><span>空气pm2.5等级: </span>  {{air.pm25_desc}}</div>
<!--                <div><span>要戴口罩: </span>   {{air.kouzhao}}</div>-->
                <div  class="import"><span>预警:  </span>{{list.alarm.alarm_content}}</div>
                <div><span>灾害等级:  </span> {{list.alarm.alarm_level}}</div>
                <div><span>灾害形式:  </span>  {{list.alarm.alarm_type}}</div>
<!--                <div><span>出门:  </span> {{air.waichu}}</div>-->
<!--                <div><span>运动:  </span> {{air.yundong}}</div>-->
<!--                <div><span>开窗:  </span> {{air.kaichuang}}</div>-->
<!--                <div><span>净化器: </span>  {{air.jinghuaqi}}</div>-->
<!--                黄历-->
                <br>
                <div><span>农历: </span>  {{newslist.lubarmonth}}{{newslist.lunarday}}</div>
                <div><span>宜:  </span>{{newslist.fitness}}</div>
                <div><span>忌: </span> {{newslist.taboo}}</div>
            </div>
        </div>
        <div class="title">近五天天气</div>
        <ul class="weather_list">
            <li v-for="(item,index) in forecastList" :key="index"
                class="comment"
                :class="[
                {'yin':item.type=='阴'},
                {'yin':item.type=='多云'},
                 {'qing':item.type=='晴'},
                 {'fangqing':item.type=='放晴'},
                 {'leidian':item.type=='雷电'},
                 {'yu':item.type=='雨'},
                 {'yu':item.type=='阵雨'},
                 {'xue':item.type=='雪'},
                ]"


            >
                <div class="info_type">
                    <span class="iconfont">{{ item.type }}</span>
                </div>
                <div class="info_temp">
                    <b>{{ item.low}}</b>
                    ~
                    <b>{{ item.high}}</b>

                </div>
                <div class="info_date">
                    <span>{{ item.date }}</span>
                </div>
            </li>
        </ul>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import {getHuang, tianzhidao} from "../utils/api";
    import {weather} from "../utils/api";
    import Footer from "../components/Footer";

    export default {
        name: 'Home',
        data(){
            return{
                value: new Date(),
                input:'',
                newslist:{lubarmonth:{},lunarday:{},fitness:{},taboo:{}},
                forecastList:{type:{},low:{},high:{},date:{}},
                list:{
                    aqi:{
                            pm25:{},pm25_desc:{},kouzhao:{},waichu:{},
                            yundong:{},kaichuang:{},jinghuaqi:{},
                        },
                        alarm:{
                            alarm_content:{},alarm_level:{},alarm_type:{}
                        },
                        air_level:{},air:{},
                        air_pm25:{},air_tips:{},city:{},
                        humidity:{},tem:{},tem1:{},tem2:{},update_time:{},
                        visibility:{},wea:{},wea_img:{},week:{},win:{},win_meter:{},wea_speed:{}

                },
                air:{air_level:{},pm25: {},pm25_desc:{},kouzhao:{},waichu:{},
                    yundong:{},kaichuang:{},jinghuaqi:{},},
            }
        },
        components: {
            Header,
            Footer
        },
        created() {
            //初始化显示
            weather('石家庄').then(res => {
                this.list = res.data
                this.air = res.data.aqi
                // console.log(res)
                this.$forceUpdate();
            }),
                getHuang('3a5d26f35062ccee8f448ee218fe6439',this.moment()).then(res=>{
                    // 黄历
                    // console.log(res)
                    if(res.data.code==200){
                        this.newslist=res.data.newslist[0]
                    }else{
                        this.$message.error('错误');
                    }
                }),
                tianzhidao('石家庄').then(res=>{
                    //天知道,多天
                    // console.log( res.data.data)
                    this.forecastList = res.data.data.forecast;
                })

            //黄历
        },
        methods:{
            enter:function () {
                //点击后

                if(this.input==''){
                    this.$message({
                        message: '请输入城市',
                        type: 'warning'
                    });
                }else{
                    //显示
                    weather(this.input).then(res => {
                        this.list = res.data
                        this.air = res.data.aqi
                        this.$forceUpdate();

                    }),
                        tianzhidao(this.input).then(res=>{
                            this.forecastList = res.data.data.forecast;
                            console.log(res)
                        })
                }
            },
            moment: function () {
                let year = this.value.getFullYear();
                let month = (this.value.getMonth() + 1).toString().padStart(2, "0");
                let day = this.value.getDate().toString().padStart(2, '0');
                return  year+'-'+month+'-'+day
            }

        }
    }
</script>
<style scoped lang="less">
    .home{
        .content{
            width: 1200px ;
            margin: 10px auto;
            padding: 10px 0;
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
            display: flex;
            justify-content: space-around;
            font-size: 16px;
            position: relative;
            .search{
                width: 150px;
                el-button{
                    margin: auto;
                }
            }
            .left{
                width: 500px;
                border-right: 1px solid #e1e2e3;
                div{
                    /*padding: 10px;*/
                    line-height: 2;
                }
                div:first-child{
                    color: orange;
                    font-size: 20px;
                }
            }
            .right{
                width: 500px;
                div{
                    /*padding: 10px;*/
                    line-height: 2;
                }
            }
            .import{
                font-size: 16px;
                color: #fc5531;
            }
            span{
                font-size: 16px;
                /*color: #fc5531;*/
            }

        }
        .title{
            border-left: 3px solid red;
            font-size:18px;
            width: 1200px;
            margin:5px auto;
            padding-left: 10px;
            box-sizing: border-box;
        }
        .weather_list{
            width: 1200px;
            margin:2px auto;
            display: flex;
            justify-content: space-around;
            text-align: center;
            /*background-color:#f5f6f7 ;*/
            padding:20px 0;
            li{
                width: 160px;
                height: 100px;
                /*color: #fda252;*/
                font-size: 16px;
                .info_type{
                    font-size: 20px;
                }
                .info_temp{
                    /*border-right: 1px solid #969696;*/
                    padding: 20px 0;
                }
                .info_date{
                    color: #2c3e50;
                }
            }
            .comment{
                background-size:cover ;
            }
            .yin{
                /*width: 100px;*/
                /*height: 100px;*/
                background: url("../assets/cloudy.png") no-repeat ;
                background-size:cover ;
            }
            .qing{
                background: url("../assets/sunnry.png") no-repeat ;
                background-size:cover ;
            }
            .fagnqing{
                background: url("../assets/clear.png") no-repeat ;background-size:cover ;
            }
            .yu{
                background: url("../assets/blustery.png") no-repeat ;background-size:cover ;
            }
            .leidian{
                background: url("../assets/rainy.png") no-repeat ;background-size:cover ;
            }
            .xie{
                background: url("../assets/bgrainy.png") no-repeat ;background-size:cover ;
            }
        }
    }



</style>
