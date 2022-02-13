<template>
    <div class="Header">
        <div class="container">
            <!--      版心1200px-->
            <div class="logo"><img src="../assets/logo.jpg" alt=""></div>
            <div class="headList">
                <el-menu
                        style="background-color: #f5f6f7"
                        :default-active="this.$route.path"
                        class="el-menu-demo"
                        mode="horizontal"
                        router
                        @select="handleSelect"
                        active-text-color="black">
                    <el-menu-item v-for="(item, index) in navList" :key="index" :index="item.name">
                        <template slot="title">
                            <span> {{ item.navItem }}</span>
                        </template>
                    </el-menu-item>
                </el-menu>
            </div>

            <Login></Login>

        </div>
    </div>
</template>

<script>
    import Login from "./Login";

    export default {
        name: 'Header',
        data(){
            return{
                navList: [
                    { name: "/", navItem: "首页" },
                    { name: "/Weather", navItem: "天气" },
                    { name: "/Map", navItem: "地图" },
                    { name: "/EMap", navItem: "路线规划" },
                ],

            }
        },
        components: {
            Login
        },
        methods: {
            handleSelect() {

            },
            // toWeather:function () {
            //     this.$router.push('/Weather')
            // },
            // toMap:function(){
            //     this.$router.push('/Map')
            // },
            // toHome:function () {
            //     this.$router.push('/')
            // },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .Header{
        width: 100%;
        background-color: #f5f6f7;
        /*background-color: antiquewhite;*/
        .container{
            width: 1200px;
            margin: 0 auto;
            /*background-color: #f5f6f7;*/
            display: flex;
            justify-content: space-between;
            .logo{
                img{
                    width: 125px;
                    height: 60px;
                }
            }
            .headList{
                display: flex;
                justify-content: space-between;
                line-height: 61px;
                /*float: left;*/
                >div{
                    padding: 0 30px;
                }
            }

        }
    }
</style>
