<template>
    <div class="main" >

        <div class="block">
            <!--        横幅-->
            <el-carousel  height="500px" >
                <el-carousel-item autoplay=false  v-for="(item,index) in bannerList" :key="index">
                    <img :src="item.src" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="search">
            <!--    查询景点-->

            <!--            <el-input v-model="input2" placeholder="请输入城市名"></el-input>-->
            <el-input v-model="input" placeholder="请输入景点名"></el-input>
            <el-button style="" type="primary" @click="enter">寻找</el-button>
        </div>
        <!--    展示景区-->
        <div class="attraction">
<!--           <router-link :to="{path:'ShowView'}" style="color: black;text-decoration: none;">-->
               <div> {{newslist.province}}--{{newslist.city}}--{{newslist.name}}</div>
               <div v-html="newslist.content"></div>
<!--           </router-link>-->
        </div>

        <div class="title"><h2>旅游资讯</h2></div>
        <div  class="travelNew" >
            <!--    旅游资讯-->
            <div v-for="(item,index) in travelNew" :key="index"  >
                <router-link :to="{path:'ShowView', query:''}">
                    <div class="box1">
                        <img :src="item.picUrl" alt="">
                    </div>
                    <div class="traveTitle">{{item.title}}</div>
<!--                    <div class="des">{{item.description}}</div>-->
<!--                    <div>{{item.ctime}}</div>-->
                </router-link>
            </div>
        </div>

<XG></XG>
        <!--            返回顶部-->
        <el-backtop :bottom="100">
            <div
                    style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        border-radius: 5px;
        text-align: center;
        line-height: 30px;
        padding: 5px;
        color: #1989fa;
        font-size: 14px;
      }"
            >
                返回顶部
            </div>
        </el-backtop>
        <div>
        </div>

    </div>
</template>

<script>
    import {attraction, travelNew} from "../utils/api";
    import XG from "./XG";

    export default {
        name: "Main",
        components:{
            XG
        },
        data(){
            return{
                input: '',
                bannerList:[
                    {src:require('../assets/1.jpg')},
                    {src:require('../assets/2.jpg')},
                    {src:require('../assets/3.jpg')},
                ],
                travelNew:{ctime:{},title:{},description:{},picUrl:{},url:{}},
                newslist:{name:{},content:{},city:{},province:{}},
            }
        },
        created() {
            //初始化显示
            // banner(3).then(res=>{
            //     this.bannerList=res.data.data
            // })

            attraction('3a5d26f35062ccee8f448ee218fe6439','驼梁山风景区').then(res=>{
                //景点初始展示
                // console.log(res)
                if(res.data.code==200){
                    this.newslist=res.data.newslist[0]
                }else{
                    this.$message.error('请求错误');
                }
            })
            travelNew('3a5d26f35062ccee8f448ee218fe6439').then(res=>{
                //旅游资讯
                // localStorage.setItem('key4', JSON.stringify(res))
                this.travelNew=res.data.newslist
            })
        },
        methods:{
            enter:function () {
                attraction('3a5d26f35062ccee8f448ee218fe6439',this.input).then(res=>{
                    // console.log(this.input)
                    // console.log(this.input2)
                    console.log(res)
                    if(res.data.code==200){
                        this.newslist=res.data.newslist[0]
                        this.$forceUpdate();
                    }else{
                        this.$message.error('请输入');
                    }
                })

            }
        }
    }
</script>

<style scoped lang="less">
    .main{
        /*height: 1000px;*/
        .block{
            width: 100%;
            text-align: center;
            img{
                width: 100%;
                height: 500px;
            }
        }
        .search{
            width: 500px;
            margin:20px auto;
            display: flex;
            justify-content: space-between;
        }
        .attraction{
            width: 1200px;
            margin: auto;
            font-size: 16px;
            background-color: #f5f6f7;
            div{
                padding: 10px;
                text-indent: 2em;
            margin: 10px 0;
                line-height: 1.5;
        }
    }
        .title{
            width: 1200px;
            border-left: 3px solid red;
            padding-left: 10px;
            margin: 10px auto;
            box-sizing: border-box;
        /*  怪异盒模型  */
        }
        .travelNew{
            width: 1200px;
            margin:  auto;
            font-size: 12px;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            background-color: #f5f6f7;
            padding-top: 10px;
            color: #2c3e50;
            text-underline: none;
            >div{
                width: 210px;
                /*height: 270px;*/
                margin: 10px 0;

                .box1{
                    height: 165px;
                    width: 210px;
                    overflow: hidden;
                    img{
                        height: 165px;
                        width: 210px;
                    }
                    img:hover{
                        transform: scale(1.3);
                    }
                }
                .traveTitle{
                    font-size: 14px;
                    line-height: 20px;
                    color: #2c3e50;

                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;

                }
                a {
                    text-decoration: none;
                }

                .router-link-active {
                    text-decoration: none;
                }
                div{
                    margin: 5px 0;
                }

                /*.des{*/
                /*    line-height: 18px;*/
                /*    overflow: hidden;*/
                /*    text-overflow: ellipsis;*/
                /*    display: -webkit-box;*/
                /*    -webkit-line-clamp: 3;*/
                /*    -webkit-box-orient: vertical;*/
                /*}*/

            }
            >div:hover{
                color: #07adf5;
            }
        }
    }

</style>
