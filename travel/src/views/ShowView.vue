<template>
    <div>
        <Header></Header>
        <div class="title"><h2>旅游资讯</h2></div>
        <div  class="travelNew" >
            <!--    旅游资讯-->
            <div v-for="(item,index) in travelNew" :key="index"  class="box">
                    <div class="box1">
                        <img :src="item.picUrl" alt="">
                    </div>
                   <div class="box2">
                       <div class="traveTitle">{{item.title}}</div>
                       <div class="des">{{item.description}}</div>
                       <div>{{item.ctime}}</div>
                   </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import {travelNew} from "../utils/api";
    import Header from "../components/Header";
    import Footer from "../components/Footer";

    export default {
        name: "ShowView",
        components:{
            Header,
            Footer
        },
        data(){
            return{
                input: '',
                travelNew:{ctime:{},title:{},description:{},picUrl:{},url:{}},
            }
        },
        created() {
            //初始化显示
            travelNew('3a5d26f35062ccee8f448ee218fe6439').then(res=>{
                //旅游资讯
                // localStorage.setItem('key4', JSON.stringify(res))
                this.travelNew=res.data.newslist
            })
        },
    }
</script>

<style scoped lang="less">
    .title {
        width: 1200px;
        border-left: 3px solid red;
        padding-left: 10px;
        margin: 10px auto;
        box-sizing: border-box;
    }
    /*  怪异盒模型  */

    .travelNew {
        width: 1200px;
        font-size: 14px;
        margin: auto;
        /*background-color: #f5f5f5;*/
        /*padding: 5px 0;*/
        .box{
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin-: 10px 0;
            background-color: #f5f5f5;
            padding: 5px 0;
            .box1{
                img{
                    height: 165px;
                    width: 210px;
                }
            }
            .box2{
                width: 950px;
                border-bottom: 1px dashed #97b4dc;
                .traveTitle{
                    font-size: 14px;
                    line-height: 20px;
                }
                div{
                    margin: 10px 0;
                }
                .des{
                    line-height: 18px;
                    /*overflow: hidden;*/
                    /*text-overflow: ellipsis;*/
                    /*display: -webkit-box;*/
                    /*-webkit-line-clamp: 3;*/
                    /*-webkit-box-orient: vertical;*/
                }
            }
        }
    }


</style>
