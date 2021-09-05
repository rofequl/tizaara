(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74671fa9"],{"331d2":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6 text-center text-sm-left mb-4 mb-sm-0"},[a("span",{staticClass:"text-uppercase page-subtitle"},[e._v(e._s(e.$t("message.brand.product"))+" ")]),a("h3",{staticClass:"page-title"},[e._v(e._s(e.$t("message.brand.brand_information")))])]),a("div",{staticClass:"col-12 col-sm-6 d-flex align-items-center"},[a("div",{staticClass:"mx-auto ml-sm-auto mr-sm-0"},[a("CButton",{attrs:{block:"",color:"info"},on:{click:e.openModal}},[e._v(e._s(e.$t("message.brand.add_new_brand")))])],1)])]),a("div",{staticClass:"dataTables_wrapper no-footer my-5",attrs:{id:"people"}},[a("v-client-table",{staticClass:"text-center",attrs:{data:Object.values(e.brandList),columns:e.columns,options:e.options},scopedSlots:e._u([{key:"serial",fn:function(t){return a("div",{},[e._v(" "+e._s(t.index)+" ")])}},{key:"logo",fn:function(t){return a("div",{},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.getProfilePhoto(t.row.logo),expression:"getProfilePhoto(props.row.logo)"}],staticClass:"border",attrs:{width:"80px"}})])}},{key:"action",fn:function(t){return a("div",{},[a("CButtonGroup",{staticClass:"mx-1",attrs:{size:"sm"}},[a("CButton",{attrs:{color:"secondary"},on:{click:function(a){return e.openModalEdit(t.row)}}},[a("font-awesome-icon",{attrs:{icon:"edit"}})],1),a("CButton",{attrs:{color:"secondary"},on:{click:function(a){return e.deleteBrand(t.row.id)}}},[a("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)],1)],1)}}])})],1),a("b-modal",{attrs:{id:"brandModal",title:e.editMode?"Brand Information Edit":"New Brand Add","hide-footer":""}},[a("b-form",{on:{submit:function(t){t.preventDefault(),e.editMode?e.updateBrand():e.createBrand()},keydown:function(t){return e.form.onKeydown(t)}}},[a("b-form-group",{attrs:{label:"Brand Name :","label-cols-sm":"5","label-cols-lg":"4"}},[a("b-form-input",{staticClass:"form-control form-control-solid h-auto",class:{"is-invalid":e.form.errors.has("name")},attrs:{id:"BrandName-1",placeholder:"Enter Brand Name",state:e.validateState("name"),"aria-describedby":"BrandName"},model:{value:e.$v.form.name.$model,callback:function(t){e.$set(e.$v.form.name,"$model",t)},expression:"$v.form.name.$model"}}),e.$v.form.name.required?e._e():a("b-form-invalid-feedback",[e._v(" "+e._s(e.$t("message.brand.brand_name_required"))+" ")]),e.$v.form.name.maxLength?e._e():a("b-form-invalid-feedback",[e._v(" "+e._s(e.$t("message.brand.brand_name_character"))+" ")]),a("has-error",{attrs:{form:e.form,field:"name"}})],1),a("b-form-group",{attrs:{label:"Brand logo :","label-cols-sm":"5","label-cols-lg":"4"}},[a("b-form-file",{attrs:{accept:"image/jpeg, image/png, image/jpg",placeholder:"Choose brand logo 120x80",state:e.validateState("logo")},on:{change:e.onInputChange}}),e.$v.form.logo.required?e._e():a("b-form-invalid-feedback",[e._v(" "+e._s(e.$t("message.brand.brand_logo_required"))+" ")]),a("b-form-invalid-feedback",{attrs:{id:"fileErrorText",state:e.validation}})],1),a("b-form-group",{attrs:{label:"Meta Title :","label-cols-sm":"5","label-cols-lg":"4"}},[a("b-form-input",{attrs:{state:e.validateState("meta_title"),placeholder:"Enter Meta Title"},model:{value:e.$v.form.meta_title.$model,callback:function(t){e.$set(e.$v.form.meta_title,"$model",t)},expression:"$v.form.meta_title.$model"}}),a("b-form-invalid-feedback",[e._v(" "+e._s(e.$t("message.brand.meta_title_character"))+" ")])],1),a("b-form-group",{attrs:{label:"Meta Description :","label-cols-sm":"5","label-cols-lg":"4"}},[a("b-form-textarea",{attrs:{id:"textarea",placeholder:"Description",rows:"3"},model:{value:e.form.meta_description,callback:function(t){e.$set(e.form,"meta_description",t)},expression:"form.meta_description"}})],1),a("CRow",{staticClass:"justify-content-end"},[a("CCol",{staticClass:"mb-3 mb-xl-0",attrs:{col:"4",sm:"4",md:"3"}},[a("CButton",{attrs:{block:"",color:"info",type:"submit",disabled:e.form.busy}},[e.form.busy?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):e._e(),e.form.busy?a("span",{staticClass:"sr-only"},[e._v(e._s(e.$t("message.brand.loading")))]):e._e(),e._v(" "+e._s(e.editMode?this.$t("message.brand.update"):this.$t("message.brand.submit"))+" ")])],1),a("CCol",{staticClass:"mb-3 mb-xl-0",attrs:{col:"4",sm:"4",md:"3"}},[a("CButton",{attrs:{block:"",color:"dark"},on:{click:function(t){return e.$bvModal.hide("brandModal")}}},[e._v(e._s(e.$t("message.brand.close")))])],1)],1)],1)],1)],1)},o=[],n=a("2f62"),s=a("1dce"),i=a("b5ae"),l=a("fdb5"),d=a("242d");function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){f(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u={mixins:[s["validationMixin"]],name:"Brand",data:function(){return{validation:!0,editMode:!1,form:new Form({id:"",name:"",logo:"",meta_title:"",slug:"",meta_description:""}),columns:["serial","name","logo","meta_title","action"],options:{headings:{serial:"#",name:"Brand Name",logo:"Brand Logo"},sortable:["name"],filterable:["name","meta_title"]}}},validations:{form:{name:{required:i["required"],maxLength:Object(i["maxLength"])(50)},meta_title:{maxLength:Object(i["maxLength"])(255)},logo:{required:i["required"]}}},methods:{getProfilePhoto:function(e){return l["a"]+e},validateState:function(e){var t=this.$v.form[e],a=t.$dirty,r=t.$error;return a?!r:null},openModal:function(){this.validation=!0,this.$v.$reset(),this.form.reset(),this.form.clear(),this.editMode=!1,this.$bvModal.show("brandModal")},openModalEdit:function(e){this.validation=!0,this.$v.$reset(),this.form.reset(),this.form.clear(),this.form.fill(e),this.editMode=!0,this.$bvModal.show("brandModal")},onInputChange:function(e){var t=this,a=e.target.files[0];if(!a.type.match("image.*"))return $("#fileErrorText").text(a.name+this.$t("message.brand.not_image")),void(this.validation=!1);if(a["size"]>2111775)return $("#fileErrorText").text(this.$t("message.brand.uploading_large_file")),void(this.validation=!1);this.validation=!0;var r=new FileReader;r.onload=function(e){t.form.logo=r.result},r.readAsDataURL(a)},createBrand:function(){var e=this;this.$v.form.$touch(),this.$v.form.$anyError||this.form.post("brand").then((function(t){var a=t.data;e.$store.commit(d["a"],a),e.form.reset(),e.$bvModal.hide("brandModal"),toast.fire({icon:e.$t("message.common.succes"),title:e.$t("message.brand.brand_add_successfully")})}))},updateBrand:function(){var e=this;this.$v.form.$touch(),this.$v.form.$anyError||this.form.put("brand/"+this.form.id).then((function(t){var a=t.data;e.$store.commit(d["c"],a),e.form.reset(),e.validation=!0,e.$bvModal.hide("brandModal"),toast.fire({icon:e.$t("message.common.succes"),title:e.$t("message.brand.brand_update_successfully")})}))},deleteBrand:function(e){var t=this;swal.fire({title:this.$t("message.brand.are_you_sure"),text:this.$t("message.brand.able_to_revert"),icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:this.$t("message.brand.delete_it")}).then((function(a){a.value&&t.form.delete("brand/"+e).then((function(a){"Error"===a.data.result?swal.fire("Failed!",a.data.message,"warning"):(swal.fire(t.$t("message.common.deleted"),t.$t("message.brand.brand_deleted"),t.$t("message.common.succes")),t.$store.commit(d["d"],e))})).catch((function(){swal.fire(t.$t("message.common.error"),t.$t("message.common.something_wrong"),"warning")}))}))}},created:function(){this.$store.dispatch(d["b"])},computed:c({},Object(n["b"])(["brandList"]))},b=u,g=a("2877"),v=Object(g["a"])(b,r,o,!1,null,"1b22849c",null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-74671fa9.9b5ecdeb.js.map