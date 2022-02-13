<template>
    <div>


    <Header></Header>
        <EMap></EMap>
<!--    <div style="width:100%;height:660px;">-->
<!--        -->
<!--        <div class="abc">-->
<!--            <el-input v-model="input1" placeholder="起始点"></el-input>-->
<!--            <el-input v-model="input2" placeholder="终点"></el-input>-->
<!--            &lt;!&ndash;                <el-button  type="primary" plain @click="plan">规划</el-button>&ndash;&gt;-->
<!--        </div>-->
<!--        <div class="page" id="container"> </div>-->

<!--        <div id="panel"></div>-->
<!--    </div>-->
<!--    <Footer></Footer>-->
    </div>
</template>
<script>

import Header from "../components/Header";
// import Footer from "../components/Footer";
import EMap from "../components/EMap";

export default{
    // data(){
    //     return{
    //         input1:'河北科技大学',
    //         input2:'河北师范大学',
    //     }
    // },
    components:{
        Header,
        // Footer,
        EMap
    }
}

</script>
<style lang="less" scoped>

</style>
