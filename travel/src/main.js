import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//重置样式表
import '../Reset.css'
//echarts
import echarts from 'echarts'
//需要挂载到Vue原型上
Vue.prototype.$echarts = echarts

//引入高德地图
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: 'eaa0e979e97fb6f463a03f45285de397',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch',
    'AMap.Geolocation', 'AMap.Geocoder','AMap.Driving','AMapUI','AMap.Walking'],
  v: '1.4.4',
  uiVersion: '1.0'
})

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
