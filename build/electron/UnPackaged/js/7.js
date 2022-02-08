(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"516e":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"q-gutter-md",attrs:{padding:""}},[n("q-card",{attrs:{bordered:"",flat:""}},[n("q-card-section",{staticClass:"panel"},[n("q-btn",{attrs:{color:"red",icon:"delete_forever",label:"Clear Application Config"},on:{click:function(e){return t.delete_config()}}}),n("q-btn",{attrs:{color:"black",icon:"translate",label:"Get User Language"},on:{click:function(e){return t.getUsersLanguage()}}}),n("q-btn",{attrs:{color:"black",icon:"flag",label:"Get Locale"},on:{click:function(e){return t.getLocale()}}}),n("q-btn",{attrs:{color:"purple",icon:"build",label:"About Dialog"},on:{click:function(e){return t.getAboutDialog()}}}),n("q-btn",{attrs:{color:"green",icon:"bug_report",label:"Open WebTorrent DevTools"},on:{click:t.openWebtorrentDevTools}})],1)],1),n("p",[t._v(t._s(t.language))]),n("AboutDialog",{ref:"about"}),n("q-list",{staticClass:"expansion-list",attrs:{separator:"",bordered:""}},[n("q-expansion-item",{attrs:{icon:"account_circle",label:"Account Info ("+t.$store.state.account.authState+")"}},[n("q-list",{attrs:{separator:""}},[t._l(t.$store.getters.accountUserInfo,(function(e,o){return[Array.isArray(e)?n("q-expansion-item",{key:o,attrs:{"content-inset-level":.4,label:o}},t._l(e,(function(e,o){return n("div",{key:o},[t._v(t._s(e))])})),0):n("q-item",{key:o},[n("q-item-section",[n("q-item-label",{attrs:{overline:""}},[t._v(t._s(o))]),n("q-item-label",[t._v(t._s(e))])],1)],1)]}))],2)],1),n("q-expansion-item",{attrs:{icon:"developer_board",label:"Amplify Test Cases"}},[n("q-card",[n("q-card-section",{staticClass:"panel"},t._l(t.$amplify.amplifyTest,(function(t,e){return n("amplify-button",{key:e,attrs:{label:e,"on-click":function(){return t()}}})})),1),n("q-card-section",[n("div",[t._v(t._s(t.value))]),n("amplify-select",{attrs:{filter:function(t,e){return e.value.indexOf(t)>=0},options:[{value:"aaa",label:"ahahah",icon:"account_box"},{value:"baa",label:"bhahah",icon:"account_box"},{value:"caa",label:"chahah",icon:"account_box"},{value:"daa",label:"dhahah",icon:"account_box"}]},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1)],1),n("q-expansion-item",{attrs:{icon:"info",label:"Dev Info"}},[n("q-card",[t.devInfo.torrentStore?n("q-card-section",{staticClass:"row q-py-xs"},[n("p",{staticClass:"full-width"},[t._v("Torrent Config Store:\n            "),n("q-btn",{staticClass:"dev-info-action",attrs:{flat:""},on:{click:function(e){return t.open(t.devInfo.torrentStore)}}},[t._v("Open")]),n("q-btn",{staticClass:"dev-info-action",attrs:{flat:""},on:{click:t.resetTorrent}},[t._v("Reset")]),n("pre",[t._v(t._s(t.devInfo.torrentStore))])],1)]):t._e(),t.devInfo.settingStore?n("q-card-section",{staticClass:"row q-py-xs"},[n("p",{staticClass:"full-width"},[t._v("Setting Config Store:\n            "),n("q-btn",{staticClass:"dev-info-action",attrs:{flat:""},on:{click:function(e){return t.open(t.devInfo.settingStore)}}},[t._v("Open")]),n("q-btn",{staticClass:"dev-info-action",attrs:{flat:""},on:{click:t.resetSetting}},[t._v("Reset")]),n("pre",[t._v(t._s(t.devInfo.settingStore))])],1)]):t._e()],1)],1)],1)],1)},a=[],i=n("ed08"),s=n("16268");const r=n("ed08").isElectron(),l=r?n("34bb").ipcRenderer:null;var c={name:"Development",components:{AboutDialog:s["a"]},inject:["io"],data(){return{language:"",value:"aaa",devInfo:{torrentStore:"",settingStore:""}}},methods:{notify(t){this.$q.notify({message:t})},delete_config(){this.$q.electron.ipcRenderer.invoke("deleteConfig").then((t=>{this.$q.notify(t)}))},getLocale(){this.$q.notify(this.$q.lang.getLocale())},getUsersLanguage(){i["localConfigs"].getSettingsItem("language").then((t=>{this.language=t})).catch((()=>{this.$q.notify({message:this.$t("fail"),position:"bottom-right",type:"negative",timeout:3e3}),this.language="未获取到数据项"}))},getAboutDialog(){this.$refs.about.about_visible()},resetSetting(){this.$store.dispatch("resetSettings").then((t=>{this.$i18n.locale=t.language,this.$q.notify("Reset success")}))},resetTorrent(){r&&l.send("reset-torrent")},openWebtorrentDevTools(){if(r)return n("34bb").ipcRenderer.send("open-webtorrent-devtools")},open(t){this.io.emit("show_torrent_file",t)}},mounted(){r&&(l.on("dev-info",((t,e)=>{e.torrentStore&&(this.devInfo.torrentStore=e.torrentStore),e.settingStore&&(this.devInfo.settingStore=e.settingStore)})),l.send("dev-info")),this.io.off("notify",this.notify),this.io.on("notify",this.notify)}},u=c,f=(n("5632"),n("2877")),d=n("9989"),b=n("f09f"),g=n("a370"),v=n("9c40"),p=n("1c1c"),h=n("3b73"),_=n("66e5"),q=n("4074"),m=n("0170"),y=n("eebe"),S=n.n(y),C=Object(f["a"])(u,o,a,!1,null,"8231c3d0",null);e["default"]=C.exports;S()(C,"components",{QPage:d["a"],QCard:b["a"],QCardSection:g["a"],QBtn:v["a"],QList:p["a"],QExpansionItem:h["a"],QItem:_["a"],QItemSection:q["a"],QItemLabel:m["a"]})},5632:function(t,e,n){"use strict";n("6451")},6451:function(t,e,n){}}]);