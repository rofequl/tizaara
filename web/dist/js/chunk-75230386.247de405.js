(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75230386"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r("d3b7");function o(t,e,r,o,n,s,i){try{var a=t[s](i),c=a.value}catch(u){return void r(u)}a.done?e(c):Promise.resolve(c).then(o,n)}function n(t){return function(){var e=this,r=arguments;return new Promise((function(n,s){var i=t.apply(e,r);function a(t){o(i,n,s,a,c,"next",t)}function c(t){o(i,n,s,a,c,"throw",t)}a(void 0)}))}}},"8a8e":function(t,e,r){"use strict";r("9612")},9612:function(t,e,r){},"96cf":function(t,e,r){var o=function(t){"use strict";var e,r=Object.prototype,o=r.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},s=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(S){c=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var n=e&&e.prototype instanceof _?e:_,s=Object.create(n.prototype),i=new M(o||[]);return s._invoke=k(t,r,i),s}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",m={};function _(){}function v(){}function g(){}var y={};y[s]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(j([])));w&&w!==r&&o.call(w,s)&&(y=w);var x=g.prototype=_.prototype=Object.create(y);function $(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function r(n,s,i,a){var c=l(t[n],t,s);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"===typeof d&&o.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,a)}),(function(t){r("throw",t,i,a)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,a)}))}a(c.arg)}var n;function s(t,o){function s(){return new e((function(e,n){r(t,o,e,n)}))}return n=n?n.then(s,s):s()}this._invoke=s}function k(t,e,r){var o=d;return function(n,s){if(o===p)throw new Error("Generator is already running");if(o===h){if("throw"===n)throw s;return O()}r.method=n,r.arg=s;while(1){var i=r.delegate;if(i){var a=L(i,r);if(a){if(a===m)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=p;var c=l(t,e,r);if("normal"===c.type){if(o=r.done?h:f,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=h,r.method="throw",r.arg=c.arg)}}}function L(t,r){var o=t.iterator[r.method];if(o===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=l(o,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,m;var s=n.arg;return s?s.done?(r[t.resultName]=s.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):s:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var r=t[s];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){while(++n<t.length)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:O}}function O(){return{value:e,done:!0}}return v.prototype=x.constructor=g,g.constructor=v,v.displayName=c(g,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,a,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},$(C.prototype),C.prototype[i]=function(){return this},t.AsyncIterator=C,t.async=function(e,r,o,n,s){void 0===s&&(s=Promise);var i=new C(u(e,r,o,n),s);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},$(x),c(x,a,"Generator"),x[s]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var o=e.pop();if(o in t)return r.value=o,r.done=!1,r}return r.done=!0,r}},t.values=j,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(D),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(o,n){return a.type="throw",a.arg=t,r.next=o,n&&(r.method="next",r.arg=e),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var s=n;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var i=s?s.completion:{};return i.type=t,i.arg=e,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),D(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;D(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,o){return this.delegate={iterator:j(t),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=o}catch(n){Function("r","regeneratorRuntime = r")(o)}},d1d2:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content pr-md-5"},[r("div",{staticClass:"row mb-3"},[r("div",{staticClass:"col-12 col-sm-6 text-center text-sm-left mb-4 mb-sm-0"},[r("span",{staticClass:"text-uppercase page-subtitle"},[t._v(t._s(t.$t("message.product_list.product"))+" ")]),r("h3",{staticClass:"page-title"},[t._v(t._s(t.$t("message.product_list.product_list")))])]),r("div",{staticClass:"col-12 col-sm-6 d-flex align-items-center"},[r("div",{staticClass:"mx-auto ml-sm-auto mr-sm-0"},[r("b-button",{staticClass:"text-white mr-2",attrs:{variant:"success",size:"sm"},on:{click:function(e){return t.$router.push({name:"product-request",params:{type:"flash-deal"}})}}},[t._v(t._s(t.$t("message.product_list.flash_deal_request")))]),r("b-button",{staticClass:"text-white",attrs:{variant:"success",size:"sm"},on:{click:function(e){return t.$router.push({name:"product-request",params:{type:"ecommerce-zone"}})}}},[t._v(t._s(t.$t("message.product_list.ecommerce_zone_request"))+" ")])],1)])]),r("hr"),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("b-form-select",{staticClass:"mb-3",model:{value:t.category_id,callback:function(e){t.category_id=e},expression:"category_id"}},[r("b-form-select-option",{attrs:{selected:"",value:null}},[t._v(t._s(t.$t("message.product_list.select_category")))]),t._l(t.categories,(function(e,o){return r("b-form-select-option",{key:o,attrs:{value:e.id}},[t._v(t._s(e.name))])}))],2)],1),r("div",{staticClass:"col"},[r("b-form",{attrs:{inline:""}},[r("label",{staticClass:"mr-sm-2",attrs:{for:"inline-form-custom-select-pref"}},[t._v(t._s(t.$t("message.product_list.sort_by")))]),r("b-form-select",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"inline-form-custom-select-pref"},model:{value:t.sort_by,callback:function(e){t.sort_by=e},expression:"sort_by"}},[r("b-form-select-option",{attrs:{selected:"",value:null}},[t._v(t._s(t.$t("message.product_list.select_sort_by")))]),r("b-form-select-option",{attrs:{value:1}},[t._v(t._s(t.$t("message.product_lists.new_items")))]),r("b-form-select-option",{attrs:{value:2}},[t._v(t._s(t.$t("message.product_list.old_items")))])],1)],1)],1)]),r("div",{staticClass:"row"},t._l(t.show_products,(function(e,o){return r("div",{key:o,staticClass:"col-lg-3 col-md-4 col-sm-6 col-12"},[r("section",{staticClass:"card",staticStyle:{padding:"5px"}},[r("div",{staticClass:"corner-ribon black-ribon"},[r("div",{staticClass:"dropdown"},[t._m(0,!0),r("div",{staticClass:"dropdown-menu dropdown-menu-right",staticStyle:{"font-size":"12px"}},[r("a",{staticClass:"dropdown-item",attrs:{href:"javascript:void(0)"},on:{click:function(r){return t.loadSingleProduct(e)}}},[t._v(t._s(t.$t("message.product_list.view_details")))]),r("a",{staticClass:"dropdown-item",attrs:{href:"Request-Flash-Deal"},on:{click:function(r){return r.preventDefault(),t.addFlashDeal(e.id)}}},[t._v(t._s(t.$t("message.product_list.request_flash_deal")))]),r("a",{staticClass:"dropdown-item",attrs:{href:"Ecommerce-Zone"},on:{click:function(r){return r.preventDefault(),t.addEcommerceZone(e.id)}}},[t._v(t._s(t.$t("message.product_list.request_ecommerce_zone")))]),r("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"product-edit",params:{id:e.id}}}},[t._v(t._s(t.$t("message.product_list.product_edit")))]),r("a",{staticClass:"dropdown-item",attrs:{href:"javascript:void(0)"},on:{click:function(r){return t.removeProduct(e.id)}}},[t._v(t._s(t.$t("message.product_list.product_delete")))])],1)])]),r("img",{staticClass:"card-img-top border",attrs:{src:t.showImage(e.thumbnail_img),alt:"Card image cap",height:"150px"}}),r("h4",{staticStyle:{"font-size":"12px"}},[t._v(t._s(e.name))]),r("p",{staticClass:"mb-0",staticStyle:{"font-size":"10px"}},[t._v(t._s(t.$t("message.product_list.sku"))+" "+t._s(e.sku))]),r("hr",{staticClass:"my-1"}),r("div",{staticClass:"weather-category twt-category mt-0 pt-0"},[r("ul",[r("li",{staticClass:"active"},[r("h5",[t._v("0")]),t._v(" "+t._s(t.$t("message.product_list.order"))+" ")]),r("li",[r("h5",[t._v("0")]),t._v(" "+t._s(t.$t("message.product_list.sales"))+" ")]),r("li",{staticClass:"border-right-0"},[r("h5",[t._v("0")]),t._v(" "+t._s(t.$t("message.product_list.return"))+" ")])])])])])})),0),r("b-modal",{attrs:{id:"brandModal",title:"Please enter product discount","hide-footer":""}},[r("b-form",{on:{submit:function(e){return e.preventDefault(),t.submit()}}},[r("b-row",{staticClass:"my-3"},[r("b-col",{attrs:{sm:"8"}},[r("b-form-input",{attrs:{id:"input-small",size:"sm",placeholder:t.$t("message.product_list.enter_product_discount"),type:"number",state:t.validateState("discount"),min:"0","aria-describedby":"input-1-live-feedback"},model:{value:t.$v.form.discount.$model,callback:function(e){t.$set(t.$v.form.discount,"$model",e)},expression:"$v.form.discount.$model"}}),t.$v.form.discount.required?t._e():r("b-form-invalid-feedback",[t._v(" "+t._s(t.$t("message.product_list.product_discount_required"))+" ")]),t.$v.form.discount.maxLength?t._e():r("b-form-invalid-feedback",[t._v(" "+t._s(t.$t("message.product_list.product_discount_5_character"))+" ")])],1),r("b-col",{attrs:{sm:"4"}},[r("b-form-select",{attrs:{size:"sm"},model:{value:t.form.discount_type,callback:function(e){t.$set(t.form,"discount_type",e)},expression:"form.discount_type"}},[r("b-form-select-option",{attrs:{value:"flat"}},[t._v(t._s(t.$t("message.product_list.flat"))+" ")]),r("b-form-select-option",{attrs:{value:"percent"}},[t._v(t._s(t.$t("message.product_list.percent")))])],1)],1)],1),r("b-row",{staticClass:"my-3 justify-content-end"},[r("b-col",{staticClass:"mb-3 mb-xl-0",attrs:{cols:"8",sm:"6",md:"4"}},[r("b-button",{staticClass:"text-white",attrs:{variant:"primary",type:"submit",size:"sm"}},[t._v(t._s(t.$t("message.product_list.submit"))+" ")]),r("b-button",{staticClass:"text-white float-right",attrs:{variant:"secondary",type:"button",size:"sm"},on:{click:function(e){return t.$bvModal.hide("brandModal")}}},[t._v(t._s(t.$t("message.product_list.close"))+" ")])],1)],1)],1)],1)],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticStyle:{"font-size":"12px"},attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[r("i",{staticClass:"fas fa-bars",staticStyle:{color:"#333"}})])}],s=r("1da1"),i=(r("4de4"),r("d81d"),r("96cf"),r("fdb5")),a=r("7b99"),c=r("2b41"),u=r("1dce"),l=r("b5ae"),d=r("c1df"),f=r.n(d),p={mixins:[u["validationMixin"]],name:"ProductList",data:function(){return{form:{product_id:"",discount:"",discount_type:"flat"},sort_by:null,category_id:null,products:[],show_products:{},categories:[]}},validations:{form:{discount:{required:l["required"],maxLength:Object(l["maxLength"])(5)}}},created:function(){this.loadData(),this.getCategories()},methods:{validateState:function(t){var e=this.$v.form[t],r=e.$dirty,o=e.$error;return r?!o:null},showImage:function(t){return i["a"]+t},loadSingleProduct:function(t){t.is_approved?window.open("/single/product/"+t.slug,"_blank"):toast.fire({icon:"error",title:this.$t("message.product_list.this_product_is_not_approved_yer")})},loadData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].get("user/product").then((function(e){var r=e.data;t.products=r})).catch((function(e){e.response;swal.fire(t.$t("message.common.error"),t.$t("message.common.something_wrong"),"warning")}));case 2:case"end":return e.stop()}}),e)})))()},getCategories:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].get("user/product/related/categories").then((function(e){t.categories=e.data})).catch((function(e){t.categories=[]}));case 2:case"end":return e.stop()}}),e)})))()},removeProduct:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,a["a"].delete("user/product/remove/byId".concat(t)).then((function(t){e.$toaster.success(t.data.message),e.loadData()})).catch((function(t){e.$toaster.error(t)}));case 2:case"end":return r.stop()}}),r)})))()},addEcommerceZone:function(t){var e=this,r=t,o=this.$store.getters.currentUser.id,n=1;this.$store.dispatch(c["a"],{product_id:r,user_id:o,request_type:n}).then((function(){return toast.fire({icon:"success",title:e.$t("message.product_list.product_add_ecommerce_zone")})})).catch((function(t){return console.log(t)}))},addFlashDeal:function(t){this.form.product_id=t,this.$bvModal.show("brandModal")},submit:function(){var t=this;if(this.$v.form.$touch(),!this.$v.form.$anyError){var e=this.form.product_id,r=this.form.discount,o=this.form.discount_type,n=this.$store.getters.currentUser.id,s=2;this.$bvModal.hide("brandModal"),this.$store.dispatch(c["a"],{product_id:e,user_id:n,request_type:s,discount:r,discount_type:o}).then((function(){return toast.fire({icon:"success",title:t.$t("message.product_list.product_add_flash_deal")})})).catch((function(t){return console.log(t)}))}}},watch:{products:function(){this.show_products=this.products},category_id:function(){var t=this;this.category_id?this.show_products=this.products.map((function(e){if(e.category_id==t.category_id)return e})).filter(Boolean):this.show_products=this.products},sort_by:function(){if(this.sort_by){var t=this.sort_by;this.show_products=this.show_products.sort((function(e,r){return 1==t?f()(e.updated_at).format("YMMDD")<f()(r.updated_at).format("YMMDD")?1:-1:2==t?f()(e.updated_at).format("YMMDD")>f()(r.updated_at).format("YMMDD")?1:-1:void 0}))}else this.show_products=this.show_products.sort((function(t,e){return f()(t.updated_at).format("YMMDD")<f()(e.updated_at).format("YMMDD")?1:-1}))}}},h=p,m=(r("8a8e"),r("2877")),_=Object(m["a"])(h,o,n,!1,null,"3f880412",null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-75230386.247de405.js.map