(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c1d5472"],{3172:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-6 text-center text-sm-left mb-4 mb-sm-0"},[a("span",{staticClass:"text-uppercase page-subtitle"},[e._v(" "+e._s(e.$t("message.currency.e_commerce_setup"))+" ")]),a("h3",{staticClass:"page-title"},[e._v(e._s(e.$t("message.currency.currency")))])]),a("div",{staticClass:"col-12 col-sm-6 d-flex align-items-center"},[a("div",{staticClass:"mx-auto ml-sm-auto mr-sm-0"},[a("CButton",{attrs:{block:"",color:"info"},on:{click:e.openModal}},[e._v(e._s(e.$t("message.currency.add_new_currency")))])],1)])]),a("div",{staticClass:"dataTables_wrapper no-footer my-5",attrs:{id:"DataTables_Table_0_wrapper"}},[a("vue-element-loading",{attrs:{active:e.loadActive,"background-color":"white",spinner:"bar-fade-scale"}}),a("div",{staticClass:"dataTables_length"},[a("label",[e._v(e._s(e.$t("message.currency.show"))+" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.tableData.length,expression:"tableData.length"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.tableData,"length",t.target.multiple?a:a[0])},function(t){return e.loadData()}]}},e._l(e.perPage,(function(t,r){return a("option",{key:r,domProps:{value:t}},[e._v(e._s(t))])})),0),e._v(" "+e._s(e.$t("message.currency.entries")))])]),a("div",{staticClass:"dataTables_filter"},[a("label",[e._v(e._s(e.$t("message.currency.search"))+" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.tableData.search,expression:"tableData.search"}],attrs:{type:"search"},domProps:{value:e.tableData.search},on:{input:[function(t){t.target.composing||e.$set(e.tableData,"search",t.target.value)},function(t){return e.loadData()}]}})])]),a("datatable",{attrs:{columns:e.columns,sortKey:e.sortKey,sortOrders:e.sortOrders},on:{sort:e.sortBy}},[a("tbody",e._l(e.projects.data,(function(t,r){return a("tr",{key:t.id,staticClass:"odd",attrs:{role:"row"}},[a("td",[e._v(e._s(r+e.serial_no))]),a("td",[e._v(e._s(t.name))]),a("td",[e._v(e._s(t.symbol))]),a("td",[e._v(e._s(t.code))]),a("td",[a("CSwitch",{staticClass:"mr-1",attrs:{color:"danger",checked:0!==t.status,shape:"pill"},on:{"update:checked":function(a){e.currencyChecked(a,t.id)}}})],1),a("td",[e._v(e._s(t.exchange_rate))]),a("td",[a("CButtonGroup",{staticClass:"mx-1",attrs:{size:"sm"}},[a("CButton",{attrs:{color:"secondary"},on:{click:function(a){return e.openModalEdit(t)}}},[a("font-awesome-icon",{attrs:{icon:"edit"}})],1),a("CButton",{attrs:{color:"secondary"},on:{click:function(a){return e.deleteCurrency(t.id)}}},[a("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)],1)],1)])})),0)]),a("div",{staticClass:"dataTables_footer"},[a("div",{staticClass:"dataTables_info"},[e._v(" "+e._s(e.$t("message.currency.showing"))+" "+e._s(e.projects.from)+" "+e._s(e.$t("message.currency.to"))+" "+e._s(e.projects.to)+" "+e._s(e.$t("message.currency.of"))+" "+e._s(e.projects.total)+" "+e._s(e.$t("message.currency.entries"))+" ")]),a("div",{staticClass:"dataTables_paginate paging_simple_numbers"},[a("pagination",{attrs:{data:e.projects,"show-disabled":!0,align:e.align,limit:2},on:{"pagination-change-page":e.loadData}},[a("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[e._v(e._s(e.$t("message.currency.previous")))]),a("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[e._v(e._s(e.$t("message.currency.next")))])])],1)])],1),a("b-modal",{attrs:{id:"adminModal",title:e.editMode?this.$t("message.currency.currency_information_edit"):this.$t("message.currency.new_currency_add"),"hide-footer":"",centered:""}},[a("b-form",{on:{submit:function(t){t.preventDefault(),e.editMode?e.updateCurrency():e.createCurrency()},keydown:function(t){return e.form.onKeydown(t)}}},[a("CInput",{attrs:{label:"Currency Name :",horizontal:"",placeholder:"Enter Currency Name",invalidFeedback:e.$v.form.name.required?e.$v.form.name.maxLength?"":this.$t("message.currency.currency_name_character"):this.$t("message.currency.currency_name_required"),isValid:e.validateState("name")},model:{value:e.$v.form.name.$model,callback:function(t){e.$set(e.$v.form.name,"$model",t)},expression:"$v.form.name.$model"}}),a("CInput",{attrs:{label:"Currency Symbol:",horizontal:"",placeholder:"Enter Currency Symbol",invalidFeedback:e.$v.form.symbol.required?e.$v.form.symbol.maxLength?"":this.$t("message.currency.currency_symbol_character"):this.$t("message.currency.currency_symbol_required"),isValid:e.validateState("symbol")},model:{value:e.$v.form.symbol.$model,callback:function(t){e.$set(e.$v.form.symbol,"$model",t)},expression:"$v.form.symbol.$model"}}),a("CInput",{attrs:{label:"Currency Code :",horizontal:"",placeholder:"Enter Currency Code",invalidFeedback:e.$v.form.code.maxLength?"":this.$t("message.currency.currency_code_character"),isValid:e.validateState("code")},model:{value:e.$v.form.code.$model,callback:function(t){e.$set(e.$v.form.code,"$model",t)},expression:"$v.form.code.$model"}}),a("CInput",{attrs:{label:"Exchange Rate :",horizontal:"",placeholder:"Enter Exchange Rate",type:"number",step:"0.01",min:"0",invalidFeedback:e.$v.form.exchange_rate.maxLength?"":this.$t("message.currency.exchange_rate_character"),isValid:e.validateState("exchange_rate")},model:{value:e.$v.form.exchange_rate.$model,callback:function(t){e.$set(e.$v.form.exchange_rate,"$model",t)},expression:"$v.form.exchange_rate.$model"}}),a("CRow",{staticClass:"justify-content-end mt-5"},[a("CCol",{staticClass:"mb-3 mb-xl-0",attrs:{col:"4",sm:"4",md:"3"}},[a("CButton",{attrs:{block:"",color:"info",type:"submit",disabled:e.form.busy}},[e._v(" "+e._s(e.editMode?this.$t("message.currency.update"):this.$t("message.currency.submit"))+" ")])],1),a("CCol",{staticClass:"mb-3 mb-xl-0",attrs:{col:"4",sm:"4",md:"3"}},[a("CButton",{attrs:{block:"",color:"dark"},on:{click:function(t){return e.$bvModal.hide("adminModal")}}},[e._v("Close")])],1)],1)],1)],1)],1)},s=[],n=a("1dce"),o=a("7b99"),c=a("6481"),i=a("b5ae"),l={mixins:[n["validationMixin"]],name:"Currency",data:function(){var e={},t=[{label:"#",name:"#"},{label:"Name",name:"name"},{label:"Symbol",name:"symbol"},{label:"Code",name:"code"},{label:"Status"},{label:"Exchange Rate",name:"exchange_rate"},{label:"Action"}];return t.forEach((function(t){e[t.name]=-1})),{editMode:!1,form:new Form({id:"",name:"",symbol:"",exchange_rate:"",code:""}),loadActive:!1,projects:{},columns:t,columns_exist:["name","symbol","code","exchange_rate"],sortKey:"deadline",sortOrders:e,perPage:["10","20","50"],align:"right",tableData:{draw:0,length:10,search:"",column:0,dir:"desc"}}},validations:{form:{name:{required:i["required"],maxLength:Object(i["maxLength"])(255)},symbol:{required:i["required"],maxLength:Object(i["maxLength"])(255)},code:{maxLength:Object(i["maxLength"])(20)},exchange_rate:{maxLength:Object(i["maxLength"])(10)}}},components:{datatable:c["a"]},methods:{validateState:function(e){var t=this.$v.form[e],a=t.$dirty,r=t.$error;return a?!r:null},openModal:function(){this.form.reset(),this.$v.$reset(),this.form.clear(),this.editMode=!1,this.$bvModal.show("adminModal")},openModalEdit:function(e){this.form.reset(),this.$v.$reset(),this.form.clear(),this.form.fill(e),this.editMode=!0,this.$bvModal.show("adminModal")},loadData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loadActive=!0,this.projects={};var a="currency?page="+t;this.tableData.draw++,o["a"].get(a,"",{params:this.tableData}).then((function(t){var a=t.data;e.loadActive=!1;var r=a.data;e.tableData.draw==a.draw&&(e.projects=r,e.serial_no=r.from)})).catch((function(e){e.response}))},sortBy:function(e){if(-1===this.columns_exist.indexOf(e))return!0;this.sortKey=e,this.sortOrders[e]=-1*this.sortOrders[e],this.tableData.column=this.getIndex(this.columns,"name",e),this.tableData.dir=1===this.sortOrders[e]?"asc":"desc",this.loadData()},getIndex:function(e,t,a){return e.findIndex((function(e){return e[t]==a}))},createCurrency:function(){var e=this;this.$v.form.$touch(),this.$v.form.$anyError||this.form.post("currency").then((function(t){e.loadData(),e.form.reset(),e.$bvModal.hide("adminModal"),toast.fire({icon:"success",title:e.$t("message.currency.currency_add_successfully")})})).catch((function(t){swal(e.$t("message.common.error"),e.$t("message.common.something_wrong"),"warning")}))},updateCurrency:function(){var e=this;this.$v.form.$touch(),this.$v.form.$anyError||this.form.put("currency/"+this.form.id).then((function(){e.loadData(),e.form.reset(),e.$bvModal.hide("adminModal"),toast.fire({icon:"success",title:e.$t("message.currency.currency_update_successfully")})})).catch((function(t){swal(e.$t("message.common.error"),e.$t("message.common.something_wrong"),"warning")}))},deleteCurrency:function(e){var t=this;swal.fire({title:this.$t("message.currency.are_you_sure"),text:this.$t("message.currency.able_to_revert"),icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:this.$t("message.currency.delete_it")}).then((function(a){a.value&&t.form.delete("area/"+e).then((function(e){t.loadData(),toast.fire({icon:"success",title:t.$t("message.currency.currency_deleted_successfully")})})).catch((function(){swal(t.$t("message.common.error"),t.$t("message.common.something_wrong"),"warning")}))}))},currencyChecked:function(e,t){var a=this;e=e?1:0,this.form.get("currency/"+t+"/"+e).catch((function(e){swal(a.$t("message.common.error"),a.$t("message.common.something_wrong"),"warning")}))}},created:function(){this.loadData()}},d=l,m=a("2877"),u=Object(m["a"])(d,r,s,!1,null,"edf35a9a",null);t["default"]=u.exports},6481:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"transaction-history dataTable no-footer dtr-inline",staticStyle:{width:"1008px"},attrs:{id:"DataTables_Table_0",role:"grid","aria-describedby":"DataTables_Table_0_info"}},[a("thead",[a("tr",{attrs:{role:"row"}},e._l(e.columns,(function(t){return a("th",{key:t.name,class:e.sortKey===t.name?e.sortOrders[t.name]>0?"sorting_asc":"sorting_desc":"sorting",style:"cursor:pointer;",attrs:{"aria-controls":"DataTables_Table_0"},on:{click:function(a){return e.$emit("sort",t.name)}}},[e._v(" "+e._s(t.label)+" "),a("font-awesome-icon",{staticClass:"ml-2 pt-1",attrs:{icon:"sort"}})],1)})),0)]),e._t("default")],2)])},s=[],n={name:"DataTable",props:["columns","sortKey","sortOrders"]},o=n,c=a("2877"),i=Object(c["a"])(o,r,s,!1,null,"8f662ed4",null);t["a"]=i.exports}}]);
//# sourceMappingURL=chunk-7c1d5472.6b3606ae.js.map