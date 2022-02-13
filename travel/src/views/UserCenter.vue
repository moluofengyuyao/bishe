<template>
    <div>
        <Header></Header>
        <div class="container">
            <el-tabs :tab-position="tabPosition">
                <el-tab-pane label="我的主页">
                    <p style="font-size: 25px">个人信息</p>
                    <div class="box1">
                        <p >昵称 <span>修改</span></p>
                        {{ userInfo.nickname}}
                    </div>
                    <div class="box1">
                        <p>手机号 <span>修改</span></p>
                        {{ userInfo.mobile}}
                    </div>
                    <div class="box1">
                        <p >密码 <span>修改</span></p>
                        *********
                    </div>
                    <!--            更改图片-->
                    <div class="change">
                        <img :src="userInfo.avatarUrl" alt="">
                        <el-upload
                                class="upload-demo"
                                drag
                                action="/course-api/pcUser/updata/userAvatar"
                                :on-success="update"
                               >
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="我的旅游">配置管理</el-tab-pane>
            </el-tabs>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import {userCenter} from "../utils/api.js";
    import Footer from "../components/Footer";

    export default {
        name: "UserCenter",
        data(){
            return{
                userInfo:{nickname:{},mobile:{},avatarUrl:{},password:{}},
                tabPosition: 'left',
            }
        },
        components:{
            Header,
            Footer
        },
        methods:{
            update(info){
                console.log(info)
                this.$message.success(`上传成功`);
                this.userInfo.avatarUrl=info.userInfo.avatarUrl
            },
            clearFiles(){}
        },
        created() {
            userCenter().then(res=>{
                this.userInfo=res.data.userInfo;
            })
        },

    }
</script>

<style scoped lang="less">
    .container{
        width: 1200px;
        margin: 10px auto;
        h2{
            /*font-size: 22px;*/
        }
        .box1{
            padding-bottom: 20px;
            margin: 20px;
            border-bottom: 1px solid #ddd;
            p{
                margin-bottom: 10px;
                font-size: 18px;
                span{
                    font-size: 14px;
                    color:#00cf8c;
                ;
                }
            }
        }
        .change{
            img{
                width: 400px;
                /*height: 200px;*/
                margin:0 20px ;
            }
            .upload-demo{
                margin-left: 20px;
            }
        }
    }
</style>
