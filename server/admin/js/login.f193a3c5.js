(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"27e6":function(e,t,s){"use strict";s("8a8b")},"8a8b":function(e,t,s){},a55b:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page-login"},[s("div",[s("el-card",{staticClass:"card-view",attrs:{"body-style":{padding:"0px"}}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",[e._v("请先登录")])]),s("el-form",{ref:"form",staticClass:"card-body",attrs:{"label-width":"80px"}},[s("el-form-item",{attrs:{label:"用户名"}},[s("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),s("el-form-item",{attrs:{label:"密码"}},[s("el-input",{attrs:{type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")]),s("el-button",{attrs:{type:"danger"},on:{click:e.register}},[e._v("注册")])],1)],1)],1)],1)])},o=[],l={data(){return{model:{}}},methods:{async login(){const e=await this.$http.post("/login",this.model);localStorage.setItem("token",e.data.token),localStorage.setItem("username",e.data.username),this.$message({type:"success",message:"登录成功"}),this.$router.push("/")},async register(){const e=await this.$http.post("/register",this.model);localStorage.setItem("token",e.data.token),localStorage.setItem("username",e.data.username),this.$message({type:"success",message:"注册成功"}),this.$router.push("/login")}}},r=l,n=(s("27e6"),s("52e0")),i=Object(n["a"])(r,a,o,!1,null,"2c65a64a",null);t["default"]=i.exports}}]);
//# sourceMappingURL=login.f193a3c5.js.map