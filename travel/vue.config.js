module.exports = {
    devServer:{
        hot:true,
        port:8080,
        contentBase:"src",
        open:true,
        //    配置代理

        proxy: {
            //天气代理
            "/weather-api": {
                target: "https://v0.yiketianqi.com/api", // 接口地址
                changOrigin: true, //允许跨域  Origin源127.0.0.1:9000
                pathRewrite: {
                    "^/weather-api": "" //请求的时候使用这个/api前缀就可以
                }
            },
            //黄历代理
            "/getHuang-api": {
                target: "http://api.tianapi.com", // 接口地址
                changOrigin: true,
                pathRewrite: {
                    "^/getHuang-api": ""
                }
            },
            // "/banner-api": {
            //     //轮播图代理
            //     target: "http://wkt.myhope365.com", // 接口地址
            //     changOrigin: true,
            //     pathRewrite: {
            //         "^/banner-api": ""
            //     }
            // },
            "/attraction-api": {
                //景点代理
                target: "http://api.tianapi.com", // 接口地址
                changOrigin: true,
                pathRewrite: {
                    "^/attraction-api": ""
                }
            },
            "/travelNew-api": {
                //旅游资讯代理
                target: "http://api.tianapi.com", // 接口地址
                changOrigin: true,
                pathRewrite: {
                    "^/travelNew-api": ""
                }
            },
            "/XG-api": {
                //新冠代理
                target: "http://api.tianapi.com", // 接口地址
                changOrigin: true,
                pathRewrite: {
                    "^/XG-api": ""
                }
            },

            "/course-api": {
                //    登录代理
                target: "http://wkt.myhope365.com", // 接口地址
                changOrigin: true,
                pathRewrite: {
                    "^/course-api": ""
                }
            },

            "/tianzhidao-api": {
                //    天知道
                target: "http://wthrcdn.etouch.cn", // 接口地址
                changOrigin: true,
                pathRewrite: {
                    "^/tianzhidao-api": ""
                }
            },



        }

    },

}
