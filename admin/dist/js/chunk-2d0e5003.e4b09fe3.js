(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5003"],{"932e":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6 text-center text-sm-left mb-4 mb-sm-0"},[a("span",{staticClass:"text-uppercase page-subtitle"},[e._v(e._s(e.$t("message.sub_category.product"))+" ")]),a("h3",{staticClass:"page-title"},[e._v(e._s(e.$t("message.sub_category.sub_category_information")))])]),a("div",{staticClass:"col-12 col-sm-6 d-flex align-items-center"},[a("div",{staticClass:"mx-auto ml-sm-auto mr-sm-0"},[a("CButton",{attrs:{block:"",color:"info"},on:{click:e.openModal}},[e._v(e._s(e.$t("message.sub_category.add_new_subcategory")))])],1)])]),a("div",{staticClass:"dataTables_wrapper no-footer my-5",attrs:{id:"people"}},[a("v-client-table",{staticClass:"text-center",attrs:{data:Object.values(e.subcategoryList),columns:e.columns,options:e.options},scopedSlots:e._u([{key:"serial",fn:function(t){return a("div",{},[e._v(" "+e._s(t.index)+" ")])}},{key:"banner",fn:function(t){return a("div",{},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.getProfilePhoto(t.row.banner),expression:"getProfilePhoto(props.row.banner)"}],staticClass:"border",attrs:{width:"90px"}})])}},{key:"action",fn:function(t){return a("div",{},[a("CButtonGroup",{staticClass:"mx-1",attrs:{size:"sm"}},[a("CButton",{attrs:{color:"secondary"},on:{click:function(a){return e.openModalEdit(t.row)}}},[a("font-awesome-icon",{attrs:{icon:"edit"}})],1),a("CButton",{attrs:{color:"secondary"},on:{click:function(a){return e.deleteSubcategory(t.row.id)}}},[a("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)],1)],1)}}])})],1),a("b-modal",{attrs:{id:"adminModal",title:e.editMode?"Sub-Category Information Edit":"New Sub-Category Add","hide-footer":""}},[a("b-form",{on:{submit:function(t){t.preventDefault(),e.editMode?e.updateSubcategory():e.createSubcategory()},keydown:function(t){return e.form.onKeydown(t)}}},[a("b-form-group",{attrs:{label:"Subcategory Name :","label-cols-sm":"5","label-cols-lg":"4"}},[a("b-form-input",{staticClass:"form-control form-control-solid h-auto",class:{"is-invalid":e.form.errors.has("name")},attrs:{id:"BrandName-1",placeholder:"Subcategory Name",state:e.validateState("name")},model:{value:e.$v.form.name.$model,callback:function(t){e.$set(e.$v.form.name,"$model",t)},expression:"$v.form.name.$model"}}),e.$v.form.name.required?e._e():a("b-form-invalid-feedback",[e._v(" "+e._s(e.$t("message.sub_category.subcategory_name_required"))+" ")]),e.$v.form.name.maxLength?e._e():a("b-form-invalid-feedback",[e._v(" "+e._s(e.$t("message.sub_category.subcategory_name_character"))+" ")]),a("has-error",{attrs:{form:e.form,field:"name"}})],1),a("b-form-group",{attrs:{label:"Select Category :","label-cols-sm":"5","label-cols-lg":"4"}},[a("b-form-select",{attrs:{options:Object.values(e.categoryList),state:e.validateState("category_id"),"value-field":"id","text-field":"name"},scopedSlots:e._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:"",disabled:""}},[e._v(e._s(e.$t("message.sub_category.please_select_category")))])]},proxy:!0}]),model:{value:e.$v.form.category_id.$model,callback:function(t){e.$set(e.$v.form.category_id,"$model",t)},expression:"$v.form.category_id.$model"}}),e.$v.form.category_id.required?e._e():a("b-form-invalid-feedback",[e._v(" "+e._s(e.$t("message.sub_category.category_required"))+" ")])],1),a("b-form-group",{attrs:{label:"Subcategory banner :","label-cols-sm":"5","label-cols-lg":"4"}},[a("b-form-file",{attrs:{accept:"image/jpeg, image/png, image/jpg",placeholder:"Choose subcategory banner 300x300",state:e.validateState("banner")},on:{change:e.onInputChange}}),e.$v.form.banner.required?e._e():a("b-form-invalid-feedback",[e._v(" "+e._s(e.$t("message.sub_category.subcategory_banner_required"))+" ")]),a("b-form-invalid-feedback",{attrs:{id:"fileErrorText",state:e.validation}})],1),a("b-form-group",{attrs:{label:"Meta Title :","label-cols-sm":"5","label-cols-lg":"4"}},[a("b-form-input",{attrs:{state:e.validateState("meta_title"),placeholder:"Meta Title"},model:{value:e.$v.form.meta_title.$model,callback:function(t){e.$set(e.$v.form.meta_title,"$model",t)},expression:"$v.form.meta_title.$model"}}),a("b-form-invalid-feedback",[e._v(" "+e._s(e.$t("message.sub_category.meta_title_character"))+" ")])],1),a("b-form-group",{attrs:{label:"Meta Description :","label-cols-sm":"5","label-cols-lg":"4"}},[a("b-form-textarea",{attrs:{id:"textarea",placeholder:"Description",rows:"3"},model:{value:e.form.meta_description,callback:function(t){e.$set(e.form,"meta_description",t)},expression:"form.meta_description"}})],1),a("CRow",{staticClass:"justify-content-end"},[a("CCol",{staticClass:"mb-3 mb-xl-0",attrs:{col:"4",sm:"4",md:"3"}},[a("CButton",{attrs:{block:"",color:"info",type:"submit",disabled:e.form.busy}},[e.form.busy?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):e._e(),e.form.busy?a("span",{staticClass:"sr-only"},[e._v("Loading...")]):e._e(),e._v(" "+e._s(e.editMode?"Update":"Submit")+" ")])],1),a("CCol",{staticClass:"mb-3 mb-xl-0",attrs:{col:"4",sm:"4",md:"3"}},[a("CButton",{attrs:{block:"",color:"dark"},on:{click:function(t){return e.$bvModal.hide("adminModal")}}},[e._v("Close")])],1)],1)],1)],1)],1)},r=[],s=a("2f62"),i=a("1dce"),n=a("b5ae"),c=a("fdb5"),l=a("bd28"),m=a("1a36");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var f={mixins:[i["validationMixin"]],name:"SubCategory",data:function(){return{validation:!0,validation2:!0,editMode:!1,form:new Form({id:"",name:"",category_id:"",banner:"",meta_title:"",slug:"",meta_description:""}),columns:["serial","name","categoryName","banner","action"],options:{headings:{serial:"#",name:"Sub-Category Name",categoryName:"Category Name"},sortable:["name","categoryName"],filterable:["name","categoryName"]}}},validations:{form:{name:{required:n["required"],maxLength:Object(n["maxLength"])(50)},meta_title:{maxLength:Object(n["maxLength"])(255)},category_id:{required:n["required"]},banner:{required:n["required"]}}},methods:{getProfilePhoto:function(e){return c["a"]+e},validateState:function(e){var t=this.$v.form[e],a=t.$dirty,o=t.$error;return a?!o:null},onInputChange:function(e){var t=this,a=e.target.files[0];if(!a.type.match("image.*"))return $("#fileErrorText").text(a.name+this.$t("message.sub_category.not_image")),void(this.validation=!1);if(a["size"]>2111775)return $("#fileErrorText").text(this.$t("message.sub_category.uploading_large_file")),void(this.validation=!1);this.validation=!0;var o=new FileReader;o.onload=function(e){t.form.banner=o.result},o.readAsDataURL(a)},openModal:function(){$(".modal-content").removeAttr("tabindex"),this.validation=!0,this.$v.$reset(),this.form.reset(),this.form.clear(),this.editMode=!1,this.$bvModal.show("adminModal")},openModalEdit:function(e){this.validation=!0,this.$v.$reset(),this.form.reset(),this.form.clear(),this.form.fill(e),this.editMode=!0,this.$bvModal.show("adminModal")},createSubcategory:function(){var e=this;this.$v.form.$touch(),this.$v.form.$anyError||this.form.post("subcategory").then((function(t){var a=t.data;e.$store.commit(m["a"],a),e.form.reset(),e.validation=!0,e.$bvModal.hide("adminModal"),toast.fire({icon:"success",title:e.$t("message.sub_category.sub_category_add_successfully")})})).catch((function(e){}))},updateSubcategory:function(){var e=this;this.$v.form.$touch(),this.$v.form.$anyError||this.form.put("subcategory/"+this.form.id).then((function(t){var a=t.data;e.$store.commit(m["c"],a),e.form.reset(),e.validation=!0,e.$bvModal.hide("adminModal"),toast.fire({icon:"success",title:e.$t("message.sub_category.sub_category_update_successfully")})})).catch((function(e){}))},deleteSubcategory:function(e){var t=this;swal.fire({title:this.$t("message.sub_category.are_you_sure"),text:this.$t("message.sub_category.able_to_revert"),icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:this.$t("message.sub_category.delete_it")}).then((function(a){a.value&&t.form.delete("subcategory/"+e).then((function(a){"Error"===a.data.result?swal.fire(t.$t("message.common.error"),a.data.message,"warning"):(swal.fire(t.$t("message.common.deleted"),t.$t("message.sub_category.sub_category_deleted"),t.$t("message.common.succes")),t.$store.commit(m["d"],e))})).catch((function(){swal(t.$t("message.common.error"),t.$t("message.common.something_wrong"),"warning")}))}))}},created:function(){this.$store.dispatch(m["b"]),this.$store.dispatch(l["b"])},computed:u({},Object(s["b"])(["subcategoryList","categoryList"]))},g=f,v=a("2877"),_=Object(v["a"])(g,o,r,!1,null,"1338b1ca",null);t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d0e5003.e4b09fe3.js.map