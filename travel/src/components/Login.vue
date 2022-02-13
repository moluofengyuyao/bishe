<template>
    <div class="login">

        <el-button type="text"  class="box1">
            <div class="box2" >
                <div v-if="!$store.state.isLogin" @click="$store.commit('changVisible',{dialogVisible:true})">
                    <div >请登录或注册</div>
                    <div class="avatar"> <el-avatar icon="el-icon-user-solid"></el-avatar></div>
                </div>
                <div v-else>
                    <el-dropdown>
                        <div>{{$store.state.userInfo.nickname}}</div>
                        <div class="avatar"> <el-avatar :src="$store.state.userInfo.avatarUrl" /></div>
                        <el-dropdown-menu >
                            <el-dropdown-item ><div @click="touser">个人中心</div></el-dropdown-item>
                            <el-dropdown-item ><div @click="logOut">退出登录</div></el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>

        </el-button>

        <el-dialog
                title=""
                :visible.sync="$store.state.dialogVisible"
                width="30%"
                >
            <el-tabs type="card">
                <el-tab-pane label="账号登录">
                    <el-form class="demo-ruleForm">
                        <el-form-item   prop="text">
                            <el-input type="text" placeholder="请输入账号" v-model="input1" autocomplete="on"></el-input>
                        </el-form-item>
                        <el-form-item  prop="password">
                            <el-input type="password" placeholder="请输入密码" v-model="input2" autocomplete="on"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="login" >登录</el-button>
                            <el-button @click="resetForm">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="手机号登录">
                    <div>
                        <div> <el-input v-model="input3" placeholder="请输入手机号"></el-input></div>
                        <div class="getNum">
                            <el-input v-model="input4" placeholder="验证码"></el-input>
                            <el-button type="primary" @click="getNum" >获取验证码</el-button>
                        </div>
                        <div >
                            <el-button type="primary" @click="login2">登录</el-button>
                            <el-button @click="resetForm">重置</el-button>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-dialog>
    </div>
</template>

<script>
    import {getNum, login, out, Phone} from "../utils/api";

    export default {
        data() {
            return {
                // isLogin: false,
                input1:'',
                input2:"",
                input3:"",
                input4:"",
                // $store.state.dialogVisible:false,
                // user: {avatarUrl: {}, nickname: {}},
            }
        },
        methods:{


            resetForm(){
                //重置
                this.input1='';
                this.input2='';
            },
            login(){
                if (this.input1&&this.input2!=null) {
                    //    请求接口登录
                    login(this.input1,this.input2).then(res => {
                        if (res.data.code == 0) {
                            this.$store.state.isLogin = true
                            this.$store.commit('changVisible',{dialogVisible:false})
                            this.$store.commit('changLogin',{isLogin:true,userInfo: res.data.userInfo})
                            this.$message.success(`欢迎登录--${this.$store.state.userInfo.nickname}`);
                        }else{
                            this.$message.error(`输入错误`);
                        }
                    })
                }else{
                    this.$message.error(`请填写完整`);
                }
            },
            touser(){
                //去个人中心
                this.$router.push('/UserCenter')
            },
            logOut(){
                //退出登录
                out().then(() => {
                    // console.log(res)
                    this.$store.state.isLogin = false
                    this.$router.push('/')
                    this.$forceUpdate();
                    this.$message.success('欢迎下次光临');
                })
            },
            getNum(){
               // 获取验证码
               if(this.input3==''){
                   this.$message.success('请输入手机号');
               }else{
                   getNum(this.input3).then(res=>{
                       console.log(res)
                       this.$message.success('已发送');
                   })
               }
            },
            login2(){
            //    登录
                if(this.input3==''){
                    this.$message.error('请输入手机号和验证码');
                }else{
                    Phone(this.input3,this.input4).then(res=>{
                        if (res.data.code == 0) {
                            this.$store.state.isLogin = true
                            this.$store.commit('changVisible',{dialogVisible:false})
                            this.$store.commit('changLogin',{isLogin:true,userInfo: res.data.userInfo})
                            this.$message.success(`欢迎登录--${this.$store.state.userInfo.nickname}`);
                        }
                    })
                }
            }

        },
        created() {



        },
    }
</script>

<style scoped lang="less">
    .login{

        .box1{
            padding: 0;
            .box2{
                height: 60px;
                line-height: 60px;
                font-size: 16px;
                padding: 0 ;
                margin: 0;
                color: black;
                overflow: hidden;
                div{
                    float: left;
                }
                .avatar{
                    height: 40px;
                    margin: 10px 0 0 10px;
                }
            }
        }

        .getNum{
            display: flex;
            justify-content: space-between;
            /*background-color: red;*/
            margin: 20px 0;
        }
        .demo-ruleForm{
width: 100%;
        }
    }
</style>
