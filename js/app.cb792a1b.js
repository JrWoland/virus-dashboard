(function(t){function e(e){for(var a,s,o=e[0],c=e[1],u=e[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/virus-dashboard/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=(n("78a7"),n("5c96")),i=n.n(r),s=(n("8002"),n("b2d6")),o=n.n(s),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{attrs:{id:"app"}},[n("AppCountryList"),n("HomeDashboard"),n("router-view")],1)},u=[],l=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("159b"),n("96cf"),n("ade3")),d=(n("99af"),n("3ca3"),n("10d1"),n("ddb0"),n("d4ec")),f=n("bee2"),p=n("5364"),h=n("bc3a"),y=n.n(h),b=function(){function t(){Object(d["a"])(this,t),v.set(this,{writable:!0,value:"a3495eb567msheffe8e1e8777959p1480fejsna8c7a7c97dbc"}),m.set(this,{writable:!0,value:{"content-type":"application/octet-stream","x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":Object(p["a"])(this,v)}}),g.set(this,{writable:!0,value:y.a.create({baseURL:"https://coronavirus-monitor.p.rapidapi.com/coronavirus",headers:Object(p["a"])(this,m)})}),O.set(this,{writable:!0,value:y.a.create({baseURL:"https://api.covid19api.com"})})}return Object(f["a"])(t,[{key:"myRequest",value:function(t){var e;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,regeneratorRuntime.awrap(t);case 3:return e=n.sent,n.abrupt("return",e.data);case 7:return n.prev=7,n.t0=n["catch"](0),n.abrupt("return",new Error(n.t0));case 10:case"end":return n.stop()}}),null,null,[[0,7]])}},{key:"getAllInfectedCountries",value:function(){return this.myRequest(Object(p["a"])(this,g).get("/affected.php"))}},{key:"getWorldTotalStats",value:function(){return this.myRequest(Object(p["a"])(this,g).get("/worldstat.php"))}},{key:"getLatestStatsByCountryName",value:function(t){return this.myRequest(Object(p["a"])(this,g).get("/latest_stat_by_country.php",{params:{country:t}}))}},{key:"getHistoryByCountryName",value:function(t){return this.myRequest(Object(p["a"])(this,g).get("/cases_by_particular_country.php",{params:{country:t}}))}},{key:"getHistoryByCountryNameAndDate",value:function(t,e){return this.myRequest(Object(p["a"])(this,g).get("/history_by_country_and_date.php",{params:{country:t,date:e}}))}},{key:"getLatestCasesForContries",value:function(){return this.myRequest(Object(p["a"])(this,O).get("/summary"))}},{key:"getHistoryOfAllStatuses",value:function(t){return this.myRequest(Object(p["a"])(this,O).get("/total/country/".concat(t)))}},{key:"getHistoryFromDayOneForCountry",value:function(t,e){return this.myRequest(Object(p["a"])(this,O).get("/total/country/".concat(t,"/status/").concat(e)))}},{key:"getHistoryFromDayOneForCountryLive",value:function(t,e){return this.myRequest(Object(p["a"])(this,O).get("/dayone/country/".concat(t,"/status/").concat(e,"/live")))}}]),t}(),v=new WeakMap,m=new WeakMap,g=new WeakMap,O=new WeakMap,C=new b,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticClass:"dashboard-view",attrs:{direction:"vertical"}},[n("span",[t._v("Last update: "+t._s(t.getWorldStats.statistic_taken_at))]),n("div",{staticClass:"stats"},[n("AppInfoBox",{staticStyle:{color:"blueviolet"},attrs:{title:"Total cases",value:t.getWorldStats.total_cases}}),n("AppInfoBox",{staticStyle:{color:"crimson"},attrs:{title:"Deaths",value:t.getWorldStats.total_deaths}}),n("AppInfoBox",{staticStyle:{color:"green"},attrs:{title:"Recovered",value:t.getWorldStats.total_recovered}})],1),n("div",{staticClass:"dynamic-chart"},[n("div",{staticClass:"stats-type"},[n("el-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[n("el-radio",{attrs:{label:1}},[t._v("Active cases")]),n("el-radio",{attrs:{label:2}},[t._v("Confirmed")]),n("el-radio",{attrs:{label:3}},[t._v("Deaths")]),n("el-radio",{attrs:{label:4}},[t._v("Recovered")])],1)],1),n("div",[n("AppSlider",{on:{"slide-event":t.getSliderValue}})],1),n("AppLineChart",{attrs:{dataToDisplay:t.dataToDisplay,xAxisRange:t.range,seriesDoDisplay:t.series,legend:t.legend,dimentions:t.dimentions}})],1)])},_=[],w=(n("d81d"),n("fb6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-slider"},[n("el-slider",{attrs:{max:t.max,"format-tooltip":t.formatTooltip,"show-input":""},model:{value:t.valueSlide,callback:function(e){t.valueSlide=e},expression:"valueSlide"}})],1)}),j=[],A=(n("a9e3"),n("b047")),S=n.n(A),x={name:"AppSlider",data:function(){return{valueSlide:this.value}},props:{max:{type:Number,default:90},value:{type:Number,default:0},dataset:{type:Array,default:function(){return[]}}},methods:{formatTooltip:function(t){return this.dataset[t]},emitValue:function(){this.$emit("slide-event",{day:this.dataset[this.valueSlide],value:this.valueSlide})}},watch:{valueSlide:S()((function(){this.emitValue()}),5)}},k=x,T=(n("c587"),n("2877")),R=Object(T["a"])(k,w,j,!1,null,"c9ba781e",null),P=R.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-card"},[n("p",{staticClass:"info-card__title"},[t._v(t._s(t.title))]),n("el-row",{directives:[{name:"loading",rawName:"v-loading",value:!t.value,expression:"!value"}],staticClass:"info-card__value"},[t._v(t._s(t.value))])],1)},L=[],W={name:"AppInfoBox",props:{value:String,title:String}},I=W,N=(n("eac8"),Object(T["a"])(I,E,L,!1,null,"6dc1e56e",null)),F=N.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"app-line-chart"})])}],H=n("313e"),M=n.n(H),$={name:"AppLineChart",data:function(){return{chart:void 0}},props:{dataToDisplay:{type:Array,default:function(){return[]}},dimentions:{type:Array,default:function(){return[]}},yAxisMax:{type:Number,default:null},xAxisRange:{type:Array,default:function(){return[]}},legend:{type:Array,default:function(){return[]}},seriesDoDisplay:{type:Array,default:function(){return[]}}},methods:{initChart:function(){this.chart=M.a.init(document.querySelector(".app-line-chart")),this.chart.setOption({animation:!1,title:{text:"Dataset"},legend:{data:this.legend},tooltip:{trigger:"axis"},dataset:{dimensions:this.dimentions,source:this.dataToDisplay},xAxis:{data:this.xAxisRange,type:"category"},yAxis:{min:0},series:this.seriesDoDisplay})}},mounted:function(){this.initChart()},watch:{dataToDisplay:function(){this.chart.setOption({dataset:{dimensions:this.dimentions,source:this.dataToDisplay},series:this.seriesDoDisplay})},xAxisRange:function(){this.chart.setOption({xAxis:{data:this.xAxisRange}})}}},B=$,U=(n("7e35"),Object(T["a"])(B,V,q,!1,null,"45c3c387",null)),z=U.exports,J=n("2f62");function G(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function K(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?G(Object(n),!0).forEach((function(e){Object(l["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Q={name:"HomeDashboard",components:{AppSlider:P,AppInfoBox:F,AppLineChart:z},data:function(){return{radio:0,baseData:[],sliderValue:null,range:[],dataToDisplay:[],dimentions:[],series:[],legend:[]}},created:function(){this.initialData()},computed:K({},Object(J["c"])(["getWorldStats","getCountriesDataset"])),watch:{sliderValue:function(){this.setNewValues()},getCountriesDataset:function(){this.test(),this.setSeriesToDisplay(),this.setDataToDisplay(this.baseData),this.setDimentions(this.baseData)}},methods:{initialData:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(C.getHistoryOfAllStatuses("china"));case 2:t=e.sent,this.sliderValue=t.length,this.range=t.map((function(t){return t.Date}));case 5:case"end":return e.stop()}}),null,this)},getSliderValue:function(t){this.sliderValue=t.value},setNewValues:function(){var t=this.baseData.slice(0,this.sliderValue);this.setDataToDisplay(t)},setLegendToDisplay:function(){this.legend=this.getCountriesDataset.filter((function(t){return t.length>0})).map((function(t){return t[0].Country}))},setSeriesToDisplay:function(){this.series=this.getCountriesDataset.filter((function(t){return t.length>0})).map((function(){return{type:"line",smooth:!0,symbol:"none"}}))},setDimentions:function(t){this.dimentions=Object.keys(t[0])},setDataToDisplay:function(t){this.dataToDisplay=t},test:function(){var t=this.getCountriesDataset[0].map((function(t){return{Date:t.Date}}));return this.getCountriesDataset.forEach((function(e){var n=e[0].Country;e.forEach((function(e,a){return t[a][n]=0===e.Confirmed?void 0:e.Confirmed}))})),this.baseData=t,t}}},X=Q,Y=(n("b084"),Object(T["a"])(X,D,_,!1,null,"c14515c0",null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-aside",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"country-list"},[n("div",{staticClass:"country-list__options"},[n("el-button",{staticClass:"country-list__download-button",attrs:{size:"mini",type:"primary"},on:{click:t.getDataForCheckedCountries}},[t._v("Download data ")]),n("el-checkbox",{staticClass:"country-list__check-all",attrs:{indeterminate:t.isIndeterminate},on:{change:t.handleCheckAllChange},model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}},[t._v(" Check all ")])],1),n("el-checkbox-group",{staticClass:"country-list__checkbox-group",on:{change:t.handleCheckedCountriesChange},model:{value:t.checkedCountries,callback:function(e){t.checkedCountries=e},expression:"checkedCountries"}},t._l(t.countryList,(function(e){return n("el-checkbox",{key:e.Country,staticClass:"country-list__checkbox-item",attrs:{label:e.Slug}},[n("el-tag",{attrs:{size:"mini"}},[t._v(t._s(e.TotalConfirmed))]),t._v(" "+t._s(e.Country)+" ")],1)})),1)],1)},et=[],nt=(n("4e82"),n("2909"));function at(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(n,a){if(!n.hasOwnProperty(t)||!a.hasOwnProperty(t))return 0;var r="string"===typeof n[t]?n[t].toUpperCase():n[t],i="string"===typeof a[t]?a[t].toUpperCase():a[t],s=0;return r>i?s=1:r<i&&(s=-1),"desc"===e?-1*s:s}}function rt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function it(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?rt(Object(n),!0).forEach((function(e){Object(l["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var st={name:"AppCountryList",data:function(){return{checkAll:!1,checkedCountries:[],isIndeterminate:!0,isLoading:!1}},computed:it({},Object(J["c"])(["allAffectedCountries"]),{countryList:function(){return Object(nt["a"])(this.allAffectedCountries).sort(at("TotalConfirmed","desc"))}}),methods:it({},Object(J["b"])(["setAllAffectedCountries","setCountriesDataset"]),{getDataForCheckedCountries:function(){var t,e;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return this.isLoading=!0,t=[],this.checkedCountries.forEach((function(e){t.push(C.getHistoryOfAllStatuses(e))})),n.next=5,regeneratorRuntime.awrap(Promise.all(t));case 5:e=n.sent,this.setCountriesDataset(e),this.isLoading=!1;case 8:case"end":return n.stop()}}),null,this)},getAffectedCountryList:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.t0=this,t.next=4,regeneratorRuntime.awrap(C.getLatestCasesForContries());case 4:t.t1=t.sent,t.t0.setAllAffectedCountries.call(t.t0,t.t1),this.isLoading=!1;case 7:case"end":return t.stop()}}),null,this)},handleCheckAllChange:function(t){this.checkedCountries=t?this.allAffectedCountries.map((function(t){return t.Slug})):[],this.isIndeterminate=!1},handleCheckedCountriesChange:function(t){var e=t.length;this.checkAll=e===this.allAffectedCountries.length,this.isIndeterminate=e>0&&e<this.allAffectedCountries.length}}),created:function(){this.getAffectedCountryList()}},ot=st,ct=(n("e1e8"),Object(T["a"])(ot,tt,et,!1,null,"c8fa0cee",null)),ut=ct.exports;function lt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function dt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?lt(Object(n),!0).forEach((function(e){Object(l["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):lt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ft={name:"App",components:{HomeDashboard:Z,AppCountryList:ut},created:function(){this.initialData()},methods:dt({},Object(J["b"])(["setWorldStats"]),{initialData:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=this,t.next=3,regeneratorRuntime.awrap(C.getWorldTotalStats());case 3:t.t1=t.sent,t.t0.setWorldStats.call(t.t0,t.t1);case 5:case"end":return t.stop()}}),null,this)}})},pt=ft,ht=Object(T["a"])(pt,c,u,!1,null,null,null),yt=ht.exports,bt=n("8c4f");a["default"].use(bt["a"]);var vt=[],mt=new bt["a"]({routes:vt}),gt=mt,Ot={allAffectedCountries:{Countries:[],Date:""},countriesDataset:[],worldStats:{}},Ct={allAffectedCountries:function(t){return t.allAffectedCountries.Countries.filter((function(t){if(""!==t.Country&&0!==t.TotalConfirmed)return t}))},getWorldStats:function(t){return t.worldStats},getCountriesDataset:function(){return Ot.countriesDataset}},Dt={setAllAffectedCountries:function(t,e){var n=t.commit;n("SET_ALL_AFFECTED_COUNTRIES",e)},setWorldStats:function(t,e){var n=t.commit;n("SET_WORLD_STATS",e)},setCountriesDataset:function(t,e){var n=t.commit;n("SET_COUNTRIES_DATASET",e)}},_t={SET_ALL_AFFECTED_COUNTRIES:function(t,e){t.allAffectedCountries=e},SET_WORLD_STATS:function(t,e){t.worldStats=e},SET_COUNTRIES_DATASET:function(t,e){t.countriesDataset=e}},wt={state:Ot,getters:Ct,mutations:_t,actions:Dt};a["default"].use(J["a"]);var jt=new J["a"].Store({modules:{coronaVirus:wt}});a["default"].config.productionTip=!1,a["default"].use(i.a,{locale:o.a}),new a["default"]({router:gt,store:jt,render:function(t){return t(yt)}}).$mount("#app")},"5f76":function(t,e,n){},"78a7":function(t,e,n){},"7e35":function(t,e,n){"use strict";var a=n("aed3"),r=n.n(a);r.a},8002:function(t,e,n){},aed3:function(t,e,n){},b084:function(t,e,n){"use strict";var a=n("b832"),r=n.n(a);r.a},b832:function(t,e,n){},c587:function(t,e,n){"use strict";var a=n("d47b"),r=n.n(a);r.a},d47b:function(t,e,n){},e1e8:function(t,e,n){"use strict";var a=n("e3b3"),r=n.n(a);r.a},e3b3:function(t,e,n){},eac8:function(t,e,n){"use strict";var a=n("5f76"),r=n.n(a);r.a}});
//# sourceMappingURL=app.cb792a1b.js.map