<template>
    <div id="demo">
<!--        路径规划-->
        <div class="abc">
                            <el-input v-model="input1" placeholder="起始点"></el-input>
                            <el-input v-model="input2" placeholder="终点"></el-input>
                           <el-button  type="primary" plain @click="plan">规划</el-button>
                        </div>
        <el-amap vid="amapDemo" :amap-manager="amapManager" :events="mapEvents" class="amap-demo">
        </el-amap>
        <div id="panel"></div>
<!--        <div id="panel" v-show="isShow"></div>-->
    </div>
</template>

<script>
    // import {
    //     AMapManager
    // } from 'vue-amap';
    import VueAMap from 'vue-amap'
    let amapManager = new VueAMap.AMapManager();

    export default {
        name: "demo",

        data() {
            let that=this

            return {
                isShow:false,
                input1:'',
                input2:'',
                // input1:'河北科技大学',
                // input2:'河北师范大学',
                amapManager,
                mapEvents: {
                    init(o) {
                        o.setMapStyle('amap://styles/macaron'); //自定义的高德地图的样式，我选的是马卡龙

                        o.plugin(["AMap.Driving"], function() {
                            // eslint-disable-next-line no-undef
                            var driving = new AMap.Driving({
                                map: o,
                                panel: "panel"
                            })

                            //地点关键字+ 驾车路线规划
                            driving.search([
                                // {keyword: that.input1, city: '石家庄'},
                                // {keyword: that.input2, city: '石家庄'}
                                {keyword:'河北科技大学', city: '石家庄'},
                                {keyword: '河北师范大学', city: '石家庄'}
                            ], function(status, result) {
                                console.log(that)
                                // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
                                if (status === 'complete') {
                                    console.log('绘制驾车路线完成' + result);
                                } else {
                                    console.log('获取驾车数据失败：' + result);
                                }
                            });
                            o.addControl(driving);
                        })
                    }
                }
            }
        },
       methods:{
           plan(o){
               this.isShow=true
               // this.panel=''
               // eslint-disable-next-line no-undef
               let driving = new AMap.Driving({
                   map: o,
                   panel: "panel"
               });
               driving.search([
                   {keyword: this.input1, city: '石家庄'},
                   {keyword: this.input2, city: '石家庄'}
               ], function(status, result) {

                   if (status === 'complete') {

                       console.log('绘制驾车路线完成' + result);
                   } else {
                       console.log('获取驾车数据失败：' + result);
                   }
               });
           }
       }
    }
</script>
<style lang="less" scoped>
    .amap-demo {
        width: 100%;
        height: 655px;
    }
    .abc{
        display: flex;
        justify-content: space-between;
        /*width: 455px;*/
        position: absolute;
        z-index: 5;
        width: 20%;
        left: 50%;
        top: 70px;
        height: 40px;
    }


    #panel {
        position: absolute;
        max-height: 90%;
        overflow: hidden;
        top: 70px;
        background-color: #f5f5f5;
        right: 150px;
        width: 300px;
        z-index: 100;
    }
    #panel .amap-call {
        background-color: #009cf9;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }
    #panel .amap-lib-driving {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        overflow: hidden;

    }
</style>
