(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["link_edit"],{ec07:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v(t._s(t.id?"编辑":"新增")+"友链")]),s("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[s("el-form-item",{attrs:{label:"网站名称"}},[s("el-input",{model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),s("el-form-item",{attrs:{label:"网站地址"}},[s("el-input",{model:{value:t.model.site,callback:function(e){t.$set(t.model,"site",e)},expression:"model.site"}})],1),s("el-form-item",{attrs:{label:"网站描述"}},[s("el-input",{model:{value:t.model.description,callback:function(e){t.$set(t.model,"description",e)},expression:"model.description"}})],1),s("el-form-item",{attrs:{label:"网站图标"}},[s("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,headers:t.getAuthHeaders(),"show-file-list":!1,"on-success":function(e){return t.$set(t.model,"icon",e.url)}}},[t.model.icon?s("img",{staticClass:"avatar",attrs:{src:t.model.icon}}):s("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),s("el-form-item",[s("el-button",{attrs:{type:"primary","native-type":"submit"}},[t._v("保存")])],1)],1)],1)},l=[],a={props:{id:{}},data(){return{model:{}}},methods:{async save(){this.id?await this.$http.put("rest/links/"+this.id,this.model):await this.$http.post("rest/links",this.model),this.$router.push("/links/list"),this.$message({type:"success",message:"保存成功"})},async fetch(){const t=await this.$http.get("rest/links/"+this.id);this.model=Object.assign({},this.model,t.data)}},created(){this.id&&this.fetch()}},o=a,n=s("52e0"),r=Object(n["a"])(o,i,l,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=link_edit.977db822.js.map