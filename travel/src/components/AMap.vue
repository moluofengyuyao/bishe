<template lang="html">
    <div style="width:100%;height:655px;">
        <div class="container"  >
            <div class="search-box">
                <input
                        v-model="searchKey"
                        type="search"
                        id="search">
                <button @click="searchByHand">搜索</button>
                <div class="tip-box" id="searchTip"></div>
            </div>
<!--            <div class="abc">-->
<!--                <el-input v-model="input1" placeholder="起始点"></el-input>-->
<!--                <el-input v-model="input2" placeholder="终点"></el-input>-->
<!--               <el-button  type="primary" plain @click="plan">规划</el-button>&ndash;&gt;-->
<!--            </div>-->


            <!--
              amap-manager： 地图管理对象
              vid：地图容器节点的ID
              zooms： 地图显示的缩放级别范围，在PC上，默认范围[3,18]，取值范围[3-18]；在移动设备上，默认范围[3-19]，取值范围[3-19]
              center： 地图中心点坐标值
              plugin：地图使用的插件
              events： 事件
            -->
            <el-amap class="amap-box"
                     :amap-manager="amapManager"
                     :vid="'amap-vue'"
                     :zoom="zoom"
                     :plugin="plugin"
                     :center="center"
                     :events="events"
                     id="container"
            >
                <!-- 标记 -->
                <el-amap-marker v-for="(marker, index) in markers" :position="marker" :key="index"></el-amap-marker>
            </el-amap>
        </div>
<!--        <div id="panel"></div>-->
    </div>
</template>

<script>
    import { AMapManager, lazyAMapApiLoaderInstance} from 'vue-amap'
    // import AMap from "vue-amap/src/lib/services/lazy-amap-api-loader";
    // import {AMap} from 'vue-amap'
    let amapManager = new AMapManager()

    export default {
        name:'AMap',
        data() {
            let self = this
            return {
                // input1:'河北科技大学',
                // input2:'河北师范大学',
                address: null,
                searchKey: '',
                amapManager,
                markers: [],
                keyword:'',
                searchOption: {
                    city: '全国',
                    citylimit: true
                },
                center: [114.514963,37.973819],
                zoom: 17,
                lng: 0,
                lat: 0,
                loaded: false,
                events: {
                    init() {
                        lazyAMapApiLoaderInstance.load().then(() => {
                            self.initSearch()
                        })
                    },
                    // 点击获取地址的数据
                    click(e) {
                        self.markers = []
                        let { lng, lat } = e.lnglat
                        self.lng = lng
                        self.lat = lat
                        self.center = [lng, lat]
                        self.markers.push([lng, lat])
                        // 这里通过高德 SDK 完成。
                        console.log(self.lng, self.lat)
                        // eslint-disable-next-line no-undef
                        let geocoder = new AMap.Geocoder({
                            radius: 1000,
                            extensions: 'all'
                        })
                        geocoder.getAddress([lng, lat], function(status, result) {
                            if (status === 'complete' && result.info === 'OK') {
                                if (result && result.regeocode) {
                                    // console.log(result.regeocode.formattedAddress) //控制台打印地址
                                    self.address = result.regeocode.formattedAddress
                                    self.searchKey = result.regeocode.formattedAddress
                                    self.$nextTick()
                                }
                            }
                        })
                    }
                },
                // 一些工具插件
                plugin: [
                    {
                        // 定位
                        pName: 'Geolocation',
                        events: {
                            init(o) {
                                // o是高德地图定位插件实例
                                o.getCurrentPosition((status, result) => {
                                    if (result && result.position) {
                                        // 设置经度
                                        self.lng = result.position.lng
                                        // 设置维度
                                        self.lat = result.position.lat
                                        // 设置坐标
                                        self.center = [self.lng, self.lat]
                                        self.markers.push([self.lng, self.lat])
                                        // load
                                        self.loaded = true
                                        // 页面渲染好后
                                        self.$nextTick()

                                    }
                                })
                            }
                        }
                    },'ToolBar','OverView','MapType','PlaceSearch','Geocoder',
                    // {
                    //     //    路径规划
                    //     pName: 'Driving',
                    //     events: {
                    //         init(){
                    //             // eslint-disable-next-line no-undef
                    //             let map = new AMap.Map("container",{
                    //             //     resizeEnable: true,
                    //             });
                    //             // let map = this.amapManager.getMap()
                    //             //构造路线导航类
                    //             // eslint-disable-next-line no-undef
                    //             const driving = new AMap.Driving({
                    //                 map,
                    //                 panel: "panel"
                    //             });
                    //
                    //             let points = [
                    //                 {keyword: self.input1, city: '石家庄'},
                    //                 {keyword: self.input2, city: '石家庄'}
                    //             ];
                    //
                    //             driving.search(points, function (status, result) {
                    //                 // 未出错时，result即是对应的路线规划方案
                    //                 // console.log(this)
                    //                 if (status === 'complete') {
                    //                     // this.$message('绘制驾车路线完成' );
                    //                     console.log(status)
                    //                 } else {
                    //                     // this.$message('获取驾车数据失败'+ result);
                    //                     console.log(result)
                    //
                    //                 }
                    //             })
                    //
                    //
                    //         }
                    //     }
                    // }


                ]
            }
        },

        methods: {
            initSearch() {
                let vm = this
                let map = this.amapManager.getMap()

                // eslint-disable-next-line no-undef
                AMapUI.loadUI(['misc/PoiPicker'], function (PoiPicker) {
                    const poiPicker = new PoiPicker({
                        input: 'search',
                        placeSearchOptions: {
                            map: map,
                            pageSize: 10
                        },
                        suggestContainer: 'searchTip',
                        searchResultsContainer: 'searchTip'
                    });
                    vm.poiPicker = poiPicker
                    // 监听poi选中信息
                    poiPicker.on('poiPicked', function (poiResult) {
                        // console.log(poiResult)
                        let source = poiResult.source
                        let poi = poiResult.item
                        if (source !== 'search') {
                            poiPicker.searchByKeyword(poi.name)
                        } else {
                            poiPicker.clearSearchResults()
                            vm.markers = []
                            let lng = poi.location.lng
                            let lat = poi.location.lat
                            let address = poi.cityname + poi.adname + poi.name
                            vm.center = [lng, lat]
                            vm.markers.push([lng, lat])
                            vm.lng = lng
                            vm.lat = lat
                            vm.address = address
                            vm.searchKey = address

                        }
                    })
                })

            },
            searchByHand() {
                if (this.searchKey !== '') {
                    this.poiPicker.searchByKeyword(this.searchKey)
                }
            },
            // plan(){
            //
            //
            // }

        }
    }
</script>

<style lang="css">
    .container {
        height: 100%;
        /*width: 100%;*/
        position: relative;
    }

    .search-box {
        position: absolute;
        z-index: 5;
        width: 30%;
        left: 13%;
        top: 10px;
        height: 30px;
    }
    .search-box input {
        float: left;
        width: 80%;
        height: 100%;
        border: 1px solid #30ccc1;
        padding: 0 8px;
        outline: none;
    }
    .search-box button {
        float: left;
        width: 20%;
        height: 100%;
        background: #30ccc1;
        border: 1px solid #30ccc1;
        color: #fff;
        outline: none;
    }
    .tip-box {
        width: 100%;
        max-height: 260px;
        position: absolute;
        top: 30px;
        overflow-y: auto;
        background-color: #fff;
    }


</style>
