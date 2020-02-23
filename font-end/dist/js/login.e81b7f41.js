(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"2cce":function(t,e,r){},"4bd4":function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("7db0"),r("4160"),r("caad"),r("e439"),r("dbb4"),r("b64b"),r("07ac"),r("2532"),r("159b");var n=r("fc11"),a=r("58df"),i=r("7e2b"),s=r("3206");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]=Object(a["a"])(i["a"],Object(s["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,r=function(t){return t.$watch("hasError",(function(r){e.$set(e.errorBag,t._uid,r)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(a){a&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=r(t)))})):n.valid=r(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var r=this.watchers.find((function(t){return t._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:c({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},a55b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("with-app-bar",[r("v-card-text",{staticClass:"blue"},[r("v-sheet",{staticClass:"mx-auto",attrs:{"max-width":"90%","max-height":"100%",height:"300"}})],1),r("v-row",{staticClass:"mx-auto",attrs:{lign:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[r("v-card",{staticClass:"elevation-1 justify-center pa-5"},[r("v-form",{ref:"form",attrs:{"lazy-validation":""}},[r("v-text-field",{attrs:{name:"username",label:"用户名",required:"","prepend-icon":"person"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.post_login()}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),r("v-text-field",{attrs:{name:"password","prepend-icon":"lock",type:"password",label:"密码",required:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.post_login()}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),r("v-card-actions",{staticClass:"pt-2 py-4"},[r("v-btn",{staticClass:"mr-4",attrs:{text:"",color:"success"},on:{click:function(e){return t.recaptcha()}}},[t._v("登入")]),r("v-btn",{staticClass:"mr-4",attrs:{text:"",color:"blue",dark:""},on:{click:function(e){return t.go_register()}}},[t._v("注册")]),r("v-btn",{staticClass:"mr-4",attrs:{text:"",color:"error"},on:{click:function(e){return t.go_repass()}}},[t._v("找回密码")])],1)],1),r("v-divider"),r("v-card-subtitle",[t._v(" This site is protected by reCAPTCHA and the Google "),r("a",{attrs:{href:"https://policies.google.com/privacy"}},[t._v("Privacy Policy")]),t._v(" and "),r("a",{attrs:{href:"https://policies.google.com/terms"}},[t._v("Terms of Service")]),t._v(" apply. ")])],1)],1)],1)],1)},a=[],i=(r("96cf"),r("c964")),s=r("fd03"),o={name:"Login",props:{source:String},data:function(){return{username:"",password:"",tokentimestate:!1,tokentime:0}},mounted:function(){localStorage.getItem("token")&&this.$router.push("/")},watch:{tokentimestate:function(t){1==t&&(this.tokentime=1)}},methods:{go_register:function(){this.$router.push("/Register")},go_repass:function(){this.$router.push("/RePass")},recaptcha:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$recaptchaLoaded();case 2:return t.next=4,this.$recaptcha("login");case 4:this.retoken=t.sent,this.post_login();case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),post_login:function(){var t=this;Object(s["f"])({username:this.username,password:this.password,retoken:this.retoken}).then((function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("username",e.data.username),t.$store.commit("pushprofile",e.data),t.$snackbar.success(e.message),t.$route.params.from?t.$router.push(t.$route.params.from):t.$router.push("/")}))}},template:'<button @click="recaptcha">Execute recaptcha</button>'},c=o,u=(r("d6db"),r("2877")),l=r("6544"),d=r.n(l),h=r("8336"),p=r("b0af"),f=r("99d9"),m=r("62ad"),v=r("ce7e"),b=r("4bd4"),g=r("0fd9"),w=r("8dd9"),y=r("8654"),k=Object(u["a"])(c,n,a,!1,null,null,null);e["default"]=k.exports;d()(k,{VBtn:h["a"],VCard:p["a"],VCardActions:f["a"],VCardSubtitle:f["b"],VCardText:f["c"],VCol:m["a"],VDivider:v["a"],VForm:b["a"],VRow:g["a"],VSheet:w["a"],VTextField:y["a"]})},d6db:function(t,e,r){"use strict";var n=r("2cce"),a=r.n(n);a.a}}]);
//# sourceMappingURL=login.e81b7f41.js.map