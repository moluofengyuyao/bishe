(function(t){function e(e){for(var i,r,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(i=!1)}i&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},r={app:0},a={app:0},o=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7a40ab8d"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var i="css/"+({about:"about"}[t]||t)+"."+{about:"3e50f5da"}[t]+".css",a=c.p+i,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===i||l===a))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===i||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var i=e&&e.target&&e.target.src||a,o=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete r[t],p.parentNode.removeChild(p),n(o)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[t]=0})));var i=a[t];if(0!==i)if(i)e.push(i[2]);else{var o=new Promise((function(e,n){i=a[t]=[e,n]}));e.push(i[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",d.name="ChunkLoadError",d.type=i,d.request=r,n[1](d)}a[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0418":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Header"},[n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"headList"},[n("el-menu",{staticClass:"el-menu-demo",staticStyle:{"background-color":"#f5f6f7"},attrs:{"default-active":this.$route.path,mode:"horizontal",router:"","active-text-color":"black"},on:{select:t.handleSelect}},t._l(t.navList,(function(e,i){return n("el-menu-item",{key:i,attrs:{index:e.name}},[n("template",{slot:"title"},[n("span",[t._v(" "+t._s(e.navItem))])])],2)})),1)],1),n("Login")],1)])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"logo"},[i("img",{attrs:{src:n("b640"),alt:""}})])}],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("el-button",{staticClass:"box1",attrs:{type:"text"}},[n("div",{staticClass:"box2"},[t.$store.state.isLogin?n("div",[n("el-dropdown",[n("div",[t._v(t._s(t.$store.state.userInfo.nickname))]),n("div",{staticClass:"avatar"},[n("el-avatar",{attrs:{src:t.$store.state.userInfo.avatarUrl}})],1),n("el-dropdown-menu",[n("el-dropdown-item",[n("div",{on:{click:t.touser}},[t._v("个人中心")])]),n("el-dropdown-item",[n("div",{on:{click:t.logOut}},[t._v("退出登录")])])],1)],1)],1):n("div",{on:{click:function(e){return t.$store.commit("changVisible",{dialogVisible:!0})}}},[n("div",[t._v("请登录或注册")]),n("div",{staticClass:"avatar"},[n("el-avatar",{attrs:{icon:"el-icon-user-solid"}})],1)])])]),n("el-dialog",{attrs:{title:"",visible:t.$store.state.dialogVisible,width:"30%"},on:{"update:visible":function(e){return t.$set(t.$store.state,"dialogVisible",e)}}},[n("el-tabs",{attrs:{type:"card"}},[n("el-tab-pane",{attrs:{label:"账号登录"}},[n("el-form",{staticClass:"demo-ruleForm"},[n("el-form-item",{attrs:{prop:"text"}},[n("el-input",{attrs:{type:"text",placeholder:"请输入账号",autocomplete:"on"},model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}})],1),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{type:"password",placeholder:"请输入密码",autocomplete:"on"},model:{value:t.input2,callback:function(e){t.input2=e},expression:"input2"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.login}},[t._v("登录")]),n("el-button",{on:{click:t.resetForm}},[t._v("重置")])],1)],1)],1),n("el-tab-pane",{attrs:{label:"手机号登录"}},[n("div",[n("div",[n("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:t.input3,callback:function(e){t.input3=e},expression:"input3"}})],1),n("div",{staticClass:"getNum"},[n("el-input",{attrs:{placeholder:"验证码"},model:{value:t.input4,callback:function(e){t.input4=e},expression:"input4"}}),n("el-button",{attrs:{type:"primary"},on:{click:t.getNum}},[t._v("获取验证码")])],1),n("div",[n("el-button",{attrs:{type:"primary"},on:{click:t.login2}},[t._v("登录")]),n("el-button",{on:{click:t.resetForm}},[t._v("重置")])],1)])])],1)],1)],1)},o=[],s=n("7c15"),c={data:function(){return{input1:"",input2:"",input3:"",input4:""}},methods:{resetForm:function(){this.input1="",this.input2=""},login:function(){var t=this;this.input1&&null!=this.input2?Object(s["f"])(this.input1,this.input2).then((function(e){0==e.data.code&&(t.$store.state.isLogin=!0,t.$store.commit("changVisible",{dialogVisible:!1}),t.$store.commit("changLogin",{isLogin:!0,userInfo:e.data.userInfo}),t.$message.success("欢迎登录--".concat(t.$store.state.userInfo.nickname)))})):this.$message.error("请填写完整")},touser:function(){this.$router.push("/UserCenter")},logOut:function(){var t=this;Object(s["g"])().then((function(){t.$store.state.isLogin=!1,t.$router.push("/"),t.$forceUpdate(),t.$message.success("欢迎下次光临")}))},getNum:function(){var t=this;""==this.input3?this.$message.success("请输入手机号"):Object(s["e"])(this.input3).then((function(e){console.log(e),t.$message.success("已发送")}))},login2:function(){var t=this;""==this.input3?this.$message.error("请输入手机号和验证码"):Object(s["a"])(this.input3,this.input4).then((function(e){0==e.data.code&&(t.$store.state.isLogin=!0,t.$store.commit("changVisible",{dialogVisible:!1}),t.$store.commit("changLogin",{isLogin:!0,userInfo:e.data.userInfo}),t.$message.success("欢迎登录--".concat(t.$store.state.userInfo.nickname)))}))}},created:function(){}},u=c,l=(n("0995"),n("2877")),d=Object(l["a"])(u,a,o,!1,null,"005ab7af",null),p=d.exports,f={name:"Header",data:function(){return{navList:[{name:"/",navItem:"首页"},{name:"/Weather",navItem:"天气"},{name:"/Map",navItem:"地图"},{name:"/EMap",navItem:"路线规划"}]}},components:{Login:p},methods:{handleSelect:function(){},toWeather:function(){this.$router.push("/Weather")},toMap:function(){this.$router.push("/Map")},toHome:function(){this.$router.push("/")}}},m=f,v=(n("d821"),Object(l["a"])(m,i,r,!1,null,"22f4811b",null));e["a"]=v.exports},"0995":function(t,e,n){"use strict";n("e9e4")},"11d9":function(t,e,n){t.exports=n.p+"img/3.1d62b49b.jpg"},1573:function(t,e,n){t.exports=n.p+"img/qq.2bd55d3b.png"},"1cc4":function(t,e,n){},2395:function(t,e,n){},"2aed":function(t,e,n){"use strict";n("6bb2")},"30b0":function(t,e,n){"use strict";n("b608")},"3ee5":function(t,e,n){},"405a":function(t,e,n){t.exports=n.p+"img/2.c60e05ab.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],o={name:"App",created:function(){this.$store.dispatch("userCenter")}},s=o,c=(n("7c55"),n("2877")),u=Object(c["a"])(s,r,a,!1,null,null,null),l=u.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Header"),n("Main"),n("Footer")],1)},f=[],m=n("0418"),v=n("fd2d"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"block"},[n("el-carousel",{attrs:{height:"500px"}},t._l(t.bannerList,(function(t,e){return n("el-carousel-item",{key:e,attrs:{autoplay:"false"}},[n("img",{attrs:{src:t.src,alt:""}})])})),1)],1),n("div",{staticClass:"search"},[n("el-input",{attrs:{placeholder:"请输入景点名"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),n("el-button",{attrs:{type:"primary"},on:{click:t.enter}},[t._v("寻找")])],1),n("div",{staticClass:"attraction"},[n("div",[t._v(" "+t._s(t.newslist.province)+"--"+t._s(t.newslist.city)+"--"+t._s(t.newslist.name))]),n("div",{domProps:{innerHTML:t._s(t.newslist.content)}})]),t._m(0),n("div",{staticClass:"travelNew"},t._l(t.travelNew,(function(e,i){return n("div",{key:i},[n("router-link",{attrs:{to:{path:"ShowView",query:""}}},[n("div",{staticClass:"box1"},[n("img",{attrs:{src:e.picUrl,alt:""}})]),n("div",{staticClass:"traveTitle"},[t._v(t._s(e.title))])])],1)})),0),n("XG"),n("el-backtop",{attrs:{bottom:100}},[n("div",{staticStyle:{"{\n        height":"100%",width:"100%","background-color":"#f2f5f6","box-shadow":"0 0 6px rgba(0,0,0, .12)","border-radius":"5px","text-align":"center","line-height":"30px",padding:"5px",color:"#1989fa","font-size":"14px"}},[t._v(" 返回顶部 ")])]),n("div")],1)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("h2",[t._v("旅游资讯")])])}],b=n("7c15"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("div",{staticStyle:{width:"auto",height:"400px"},attrs:{id:"main"}}),n("div",{staticClass:"box2"},[n("div",{staticClass:"title"},[t._v("国内消息")]),n("div",t._l(t.XG.news,(function(e,i){return n("div",{key:i,staticClass:"left"},[n("div",{domProps:{innerHTML:t._s(e.title)}}),n("div",{domProps:{innerHTML:t._s(e.summary)}}),n("div",{domProps:{innerHTML:t._s(e.pubDateStr)}})])})),0),n("div",{staticClass:"title"},[t._v("新冠情报")]),n("div",{staticClass:"right"},[n("div",[t._v(t._s(t.XG.desc.remark2))]),n("div",[t._v(t._s(t.XG.desc.remark3))]),n("div",[t._v(t._s(t.XG.desc.note1))]),n("div",[t._v(t._s(t.XG.desc.note2))]),n("div",[t._v(t._s(t.XG.desc.note3))])])])])},_=[],C=n("313e"),w={name:"XG",components:{echarts:C},data:function(){return{pro:null,XG:{news:{pubDateStr:{},title:{},summary:{}},desc:{currentConfirmedCount:{},confirmedCount:{},suspectedCount:{},curedCount:{},deadCount:{},seriousCount:{},yesterdayConfirmedCountIncr:{},yesterdaySuspectedCountIncr:{},remark1:{},remark2:{},remark3:{},note1:{},note2:{},note3:{}}}}},created:function(){var t=this;this.pro=Object(b["b"])("3a5d26f35062ccee8f448ee218fe6439").then((function(e){t.XG=e.data.newslist[0],console.log(e.data.newslist[0]),t.$forceUpdate()}))},mounted:function(){var t=this;this.pro.then((function(){t.init()}))},methods:{init:function(){var t=C["init"](document.getElementById("main")),e={title:{padding:5,top:"2%",text:"新冠疫情",x:"left",left:20,textStyle:{fontSize:16,color:"rgba(51,51,51,1)"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{type:"scroll",orient:"vertical",right:10,top:20,bottom:20,data:["人数"],itemWidth:4,itemHeight:16,x:"right"},grid:{left:"10%",right:"5%",bottom:"3%",containLabel:!0},xAxis:[{type:"value",show:!0}],yAxis:[{type:"category",axisTick:{show:!1},data:["现存确诊人数","累计确诊人数","累计境外输入人数","累计治愈人数","累计死亡人数","现存无症状人数","新增境外输入人数","相比昨天现存确诊人数"]}],series:[{name:"人数",type:"bar",stack:"总量",barWidth:"30",barGap:"0%",itemStyle:{color:["#FF5C95"],label:{show:!1}},data:[this.XG.desc.currentConfirmedCount,this.XG.desc.confirmedCount,this.XG.desc.suspectedCount,this.XG.desc.curedCount,this.XG.desc.deadCount,this.XG.desc.seriousCount,this.XG.desc.yesterdayConfirmedCountIncr,this.XG.desc.yesterdaySuspectedCountIncr]}]};t.setOption(e)}}},x=w,k=(n("30b0"),Object(c["a"])(x,y,_,!1,null,"3384fcf2",null)),$=k.exports,j={name:"Main",components:{XG:$},data:function(){return{input:"",bannerList:[{src:n("8554")},{src:n("405a")},{src:n("11d9")}],travelNew:{ctime:{},title:{},description:{},picUrl:{},url:{}},newslist:{name:{},content:{},city:{},province:{}}}},created:function(){var t=this;Object(b["c"])("3a5d26f35062ccee8f448ee218fe6439","驼梁山风景区").then((function(e){200==e.data.code?t.newslist=e.data.newslist[0]:t.$message.error("请求错误")})),Object(b["i"])("3a5d26f35062ccee8f448ee218fe6439").then((function(e){t.travelNew=e.data.newslist}))},methods:{enter:function(){var t=this;Object(b["c"])("3a5d26f35062ccee8f448ee218fe6439",this.input).then((function(e){console.log(e),200==e.data.code?(t.newslist=e.data.newslist[0],t.$forceUpdate()):t.$message.error("请输入")}))}}},L=j,M=(n("cc78"),Object(c["a"])(L,h,g,!1,null,"ae7e4aca",null)),O=M.exports,S={name:"Home",components:{Header:m["a"],Footer:v["a"],Main:O}},I=S,E=Object(c["a"])(I,p,f,!1,null,null,null),G=E.exports;i["default"].use(d["a"]);var A=[{path:"/",name:"Home",component:G},{path:"/",redirect:"/Home"},{path:"/Map",name:"Map",component:function(){return n.e("about").then(n.bind(null,"4bb4"))}},{path:"/Weather",name:"Weather",component:function(){return n.e("about").then(n.bind(null,"6a05"))}},{path:"/UserCenter",name:"UserCenter",component:function(){return n.e("about").then(n.bind(null,"6494"))},meta:{needLogin:!0}},{path:"/ShowView",name:"ShowView",component:function(){return n.e("about").then(n.bind(null,"0baf"))}},{path:"/EMap",name:"EMap",component:function(){return n.e("about").then(n.bind(null,"d113"))}}],X=new d["a"]({mode:"history",base:"/",routes:A});X.beforeEach((function(t,e,n){t.meta.needLogin?Object(b["j"])().then((function(t){0==t.data.code?n():(n("/"),alert("请登录"))})):n()}));var P=d["a"].prototype.push;d["a"].prototype.push=function(t){return P.call(this,t).catch((function(t){return t}))};var U=X,V=n("2f62");i["default"].use(V["a"]);var T=new V["a"].Store({state:{isLogin:!1,userInfo:{},dialogVisible:!1},getters:{},mutations:{changLogin:function(t,e){t.isLogin=e.isLogin,t.userInfo=e.userInfo},changVisible:function(t,e){t.dialogVisible=e.dialogVisible}},actions:{userCenter:function(t){Object(b["j"])().then((function(e){0==e.data.code?t.commit("changLogin",{isLogin:!0,userInfo:e.data.userInfo}):t.commit("changLogin",{isLogin:!1,userInfo:{}})}))}},modules:{}}),H=n("5c96"),N=n.n(H),F=(n("0fae"),n("c369"),n("8f9b")),q=n.n(F);i["default"].prototype.$echarts=C["default"],i["default"].use(q.a),q.a.initAMapApiLoader({key:"eaa0e979e97fb6f463a03f45285de397",plugin:["AMap.Scale","AMap.OverView","AMap.ToolBar","AMap.MapType","AMap.PlaceSearch","AMap.Geolocation","AMap.Geocoder","AMap.Driving","AMapUI","AMap.Walking"],v:"1.4.4",uiVersion:"1.0"}),i["default"].use(N.a),i["default"].config.productionTip=!1,new i["default"]({router:U,store:T,render:function(t){return t(l)}}).$mount("#app")},"6bb2":function(t,e,n){},"6ed4":function(t,e,n){t.exports=n.p+"img/weixin.890501d8.png"},"7c15":function(t,e,n){"use strict";n.d(e,"k",(function(){return s})),n.d(e,"d",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"i",(function(){return d})),n.d(e,"b",(function(){return p})),n.d(e,"f",(function(){return f})),n.d(e,"j",(function(){return m})),n.d(e,"g",(function(){return v})),n.d(e,"a",(function(){return h})),n.d(e,"e",(function(){return g}));n("99af"),n("d3b7");var i=n("bc3a"),r=n.n(i),a=r.a.create({baseURL:"",timeout:1e4});a.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),a.interceptors.response.use((function(t){return t.status,t}),(function(t){return Promise.reject(t)}));var o=a;function s(t){return o.get("/weather-api?version=v61&appid=75285986&appsecret=Iyr4MmmC&city=".concat(t,"&vue=1"))}function c(t,e){return o.get("/getHuang-api/txapi/lunar/index?key=".concat(t,"&date=").concat(e))}function u(t){return o.get("/tianzhidao-api/weather_mini?city=".concat(t))}function l(t,e){return o.get("/attraction-api/txapi/scenic/index?key=".concat(t,"&word=").concat(e))}function d(t){return o.get("/travelNew-api/travel/index?key=".concat(t,"&&num=10"))}function p(t){return o.get("/XG-api/txapi/ncov/index?key=".concat(t))}function f(t,e){var n=new FormData;return n.append("username",t),n.append("password",e),n.append("rememberMe",!0),o.post("/course-api/pcUser/login",n)}function m(){return o.get("/course-api/pcUser/login-user/info")}function v(){return o.get("/course-api/pcUser/logout")}function h(t,e){var n=new FormData;return n.append("mobile",t),n.append("code",e),n.append("rememberMe",!1),o.post("/course-api/pcUser/login/mobile",n)}function g(t){return o.get("/course-api/pcUser/login/send/code/".concat(t))}},"7c55":function(t,e,n){"use strict";n("2395")},8554:function(t,e,n){t.exports=n.p+"img/1.8bf8abbc.jpg"},"9eb7":function(t,e,n){t.exports=n.p+"img/pay.9c34617a.jpg"},b608:function(t,e,n){},b640:function(t,e,n){t.exports=n.p+"img/logo.5fc38456.jpg"},c369:function(t,e,n){},cc78:function(t,e,n){"use strict";n("1cc4")},d821:function(t,e,n){"use strict";n("3ee5")},e9e4:function(t,e,n){},fd2d:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",{staticClass:"container"},[i("div",{staticClass:"top"},[i("div",[t._v("微信")]),i("div",[t._v("QQ")]),i("div",[t._v("PAY")])]),i("div",{staticClass:"middle"},[i("div",[i("img",{attrs:{src:n("1573"),alt:""}})]),i("div",[i("img",{attrs:{src:n("6ed4"),alt:""}})]),i("div",[i("img",{attrs:{src:n("9eb7"),alt:""}})])]),i("div",{staticClass:"buttom"},[i("p",[t._v("本作品由刘天笑制作,2021年4月17日11点53分")]),i("p",[t._v("违法和不良信息举报电话：0512-81669439 举报邮箱：2698164146@qq.com 全国旅游投诉热线12301")]),i("p",[t._v("CSDN账号https://blog.csdn.net/liutianxiao123")])])])])}],a={name:"Footer"},o=a,s=(n("2aed"),n("2877")),c=Object(s["a"])(o,i,r,!1,null,"47f15308",null);e["a"]=c.exports}});
//# sourceMappingURL=app.1cb23779.js.map