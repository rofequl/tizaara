(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f414f7c2"],{"07d3":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-12 col-md-8 my-4"},[1==e.user.status?i("div",[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"200px",version:"1.1",viewBox:"0 0 512 512.00113",width:"100%"}},[i("g",{attrs:{id:"surface1"}},[i("path",{staticStyle:{stroke:"none","fill-rule":"nonzero",fill:"rgb(100%,85.490196%,26.666667%)","fill-opacity":"1"},attrs:{d:"M 294.847656 100.304688 L 344.867188 150.328125 L 344.867188 0 C 261.84375 0 194.542969 67.304688 194.542969 150.328125 C 194.542969 233.351562 261.84375 300.652344 344.867188 300.652344 L 344.867188 150.328125 Z M 294.847656 100.304688 "}}),i("path",{staticStyle:{stroke:"none","fill-rule":"nonzero",fill:"rgb(100%,92.156863%,60%)","fill-opacity":"1"},attrs:{d:"M 344.867188 0 L 344.867188 150.328125 L 419.898438 75.296875 L 344.867188 150.328125 L 344.867188 300.652344 C 427.890625 300.652344 495.195312 233.351562 495.195312 150.328125 C 495.195312 67.304688 427.890625 0 344.867188 0 Z M 344.867188 0 "}}),i("path",{staticStyle:{stroke:"none","fill-rule":"nonzero",fill:"rgb(100%,90.980392%,79.215686%)","fill-opacity":"1"},attrs:{d:"M 508.285156 357.25 C 500.917969 344.601562 484.734375 340.261719 472.027344 347.523438 L 362.554688 410.746094 C 363.722656 408.753906 364.617188 406.613281 365.207031 404.378906 C 369.007812 390.21875 360.617188 375.65625 346.460938 371.839844 L 262.808594 356.984375 C 250.113281 354.097656 237.878906 349.453125 226.464844 343.1875 C 205.699219 332.375 182.578125 326.875 159.171875 327.183594 C 136.164062 326.875 113.425781 332.1875 92.9375 342.65625 C 89.273438 344.484375 85.457031 345.996094 81.53125 347.167969 C 66.710938 351.636719 51.296875 353.84375 35.816406 353.710938 L 0 353.710938 L 0 477.511719 L 53.851562 477.511719 C 59.210938 477.527344 64.5625 477.941406 69.859375 478.75 L 285.445312 511.730469 C 289.578125 512.457031 293.835938 511.707031 297.472656 509.609375 L 498.558594 393.503906 C 511.234375 386.164062 515.585938 369.949219 508.285156 357.25 Z M 339.652344 424.011719 L 339.5625 424.011719 C 337.265625 424.023438 334.976562 423.726562 332.753906 423.128906 L 221.246094 406.769531 L 223.636719 391.382812 L 361.582031 412.25 C 356.691406 419.585938 348.46875 423.996094 339.652344 424.011719 Z M 339.652344 424.011719 "}}),i("path",{staticStyle:{stroke:"none","fill-rule":"nonzero",fill:"rgb(100%,31.372549%,13.72549%)","fill-opacity":"1"},attrs:{d:"M 344.867188 176.855469 C 342.523438 176.855469 340.277344 175.921875 338.617188 174.265625 L 288.59375 124.242188 C 285.199219 120.730469 285.296875 115.128906 288.8125 111.738281 C 292.238281 108.425781 297.671875 108.425781 301.097656 111.738281 L 344.867188 155.507812 L 413.648438 86.730469 C 417.160156 83.335938 422.757812 83.433594 426.152344 86.945312 C 429.460938 90.375 429.460938 95.808594 426.152344 99.234375 L 351.121094 174.265625 C 349.460938 175.921875 347.214844 176.855469 344.867188 176.855469 Z M 344.867188 176.855469 "}}),i("path",{staticStyle:{stroke:"none","fill-rule":"nonzero",fill:"rgb(74.901961%,68.235294%,59.607843%)","fill-opacity":"1"},attrs:{d:"M 361.582031 412.25 C 356.695312 419.585938 348.46875 423.996094 339.652344 424.011719 L 339.5625 424.011719 C 337.265625 424.023438 334.976562 423.726562 332.753906 423.128906 L 221.246094 406.769531 L 223.636719 391.382812 Z M 361.582031 412.25 "}})])]),i("h4",{staticClass:"text-center text-capitalize mt-3"},[e._v(e._s(e.$t("message.verify.pending.please_wait")))]),i("p",{staticClass:"text-center"},[e._v(e._s(e.$t("message.verify.pending.approve_email")))])]):e._e(),0==e.user.status?i("div",{staticClass:"card"},[i("div",{staticClass:"card-header"},[i("strong",[e._v(e._s(e.$t("message.verify.missing_information.please")))]),e._v(" "+e._s(e.$t("message.verify.missing_information.insert_missing"))+" ")]),i("div",{staticClass:"card-body card-block"},[i("form",{staticClass:"form-horizontal",on:{keydown:function(t){return e.form.onKeydown(t)}}},[i("div",{staticClass:"row form-group mb-4"},[i("div",{staticClass:"col col-md-3"},[i("label",{staticClass:" form-control-label"},[e._v(e._s(e.$t("message.verify.missing_information.i_am_a")))])]),i("div",{staticClass:"form-check form-check-inline"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.account_type,expression:"form.account_type"}],staticClass:"form-check-input",attrs:{type:"radio",disabled:!e.account_type,id:"supplier",value:"1"},domProps:{checked:e._q(e.form.account_type,"1")},on:{change:function(t){return e.$set(e.form,"account_type","1")}}}),i("label",{staticClass:"form-check-label",attrs:{for:"supplier"}},[e._v(e._s(e.$t("message.verify.missing_information.supplier")))])]),i("div",{staticClass:"form-check form-check-inline"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.account_type,expression:"form.account_type"}],staticClass:"form-check-input",attrs:{type:"radio",disabled:!e.account_type,id:"buyer",value:"2"},domProps:{checked:e._q(e.form.account_type,"2")},on:{change:function(t){return e.$set(e.form,"account_type","2")}}}),i("label",{staticClass:"form-check-label",attrs:{for:"buyer"}},[e._v(e._s(e.$t("message.verify.missing_information.buyer")))])]),i("div",{staticClass:"form-check form-check-inline"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.account_type,expression:"form.account_type"}],staticClass:"form-check-input",attrs:{type:"radio",disabled:!e.account_type,id:"both",value:"0"},domProps:{checked:e._q(e.form.account_type,"0")},on:{change:function(t){return e.$set(e.form,"account_type","0")}}}),i("label",{staticClass:"form-check-label",attrs:{for:"both"}},[e._v(e._s(e.$t("message.verify.missing_information.both")))])])]),i("div",{staticClass:"form-row mb-4"},[i("div",{staticClass:"col col-md-3"},[i("label",{staticClass:" form-control-label"},[e._v(e._s(e.$t("message.verify.missing_information.name")))])]),i("div",{staticClass:"form-group col-md-4"},[i("b-form-input",{staticClass:"form-control",attrs:{id:"first-name",placeholder:e.$t("message.message.first_name"),type:"text",disabled:""},model:{value:e.form.first_name,callback:function(t){e.$set(e.form,"first_name",t)},expression:"form.first_name"}})],1),i("div",{staticClass:"form-group col-md-4"},[i("b-form-input",{staticClass:"form-control",attrs:{id:"last-name",placeholder:e.$t("message.message.last_name"),type:"text",disabled:""},model:{value:e.form.last_name,callback:function(t){e.$set(e.form,"last_name",t)},expression:"form.last_name"}})],1)]),i("div",{staticClass:"row form-group mb-4"},[i("div",{staticClass:"col col-md-3"},[i("label",{staticClass:" form-control-label"},[e._v(e._s(e.$t("message.verify.missing_information.email_address")))])]),i("div",{staticClass:"col-12 col-md-8"},[i("b-form-input",{staticClass:"form-control",class:{"is-invalid":e.form.errors.has("email")},attrs:{id:"email",placeholder:e.$t("message.message.email_address"),type:"email",disabled:!e.email,state:e.validateState("email")},model:{value:e.$v.form.email.$model,callback:function(t){e.$set(e.$v.form.email,"$model",t)},expression:"$v.form.email.$model"}}),e.$v.form.email.required?e._e():i("b-form-invalid-feedback",[e._v(" "+e._s(e.$t("message.verify.missing_information.enter_email_address"))+" ")]),e.$v.form.email.maxLength?e._e():i("b-form-invalid-feedback",[e._v(" "+e._s(e.$t("message.verify.missing_information.email_or_phone"))+" ")]),e.$v.form.email.email?e._e():i("b-form-invalid-feedback",[e._v(" "+e._s(e.$t("message.verify.missing_information.invalid_email"))+" ")]),i("has-error",{attrs:{form:e.form,field:"email"}})],1)]),i("div",{staticClass:"row form-group mb-4"},[i("div",{staticClass:"col col-md-3"},[i("label",{staticClass:" form-control-label"},[e._v(e._s(e.$t("message.verify.missing_information.phone_number")))])]),i("div",{staticClass:"col-12 col-md-8"},[i("b-form-input",{staticClass:"form-control",class:{"is-invalid":e.form.errors.has("mobile")},attrs:{id:"phone",placeholder:e.$t("message.message.phone_number"),type:"number",disabled:!e.mobile,state:e.validateState("mobile")},on:{keyup:e.onSearch},model:{value:e.$v.form.mobile.$model,callback:function(t){e.$set(e.$v.form.mobile,"$model",t)},expression:"$v.form.mobile.$model"}}),e.$v.form.mobile.required?e._e():i("b-form-invalid-feedback",[e._v(" "+e._s(e.$t("message.verify.missing_information.enter_your_phone"))+" ")]),e.$v.form.mobile.maxLength?e._e():i("b-form-invalid-feedback",[e._v(" "+e._s(e.$t("message.verify.missing_information.phone_digits"))+" ")]),e.$v.form.mobile.minLength?e._e():i("b-form-invalid-feedback",[e._v(" "+e._s(e.$t("message.verify.missing_information.phone_digits"))+" ")]),e.$v.form.mobile.isUnique?e._e():i("b-form-invalid-feedback",[e._v(" "+e._s(e.$t("message.verify.missing_information.phone_number_registered"))+" ")]),i("has-error",{attrs:{form:e.form,field:"mobile"}})],1)])])]),i("div",{staticClass:"card-footer"},[i("button",{staticClass:"btn btn-primary float-right",attrs:{type:"submit",disabled:e.form.busy},on:{click:e.onSubmit}},[i("i",{staticClass:"fa fa-dot-circle-o"}),e._v(" "+e._s(e.$t("message.verify.missing_information.submit"))+" ")])])]):e._e()])])},s=[],a=(i("841c"),i("ac1f"),i("1dce")),n=i("b5ae"),o=i("854b"),l=i("7b99"),c={mixins:[a["validationMixin"]],name:"Verify",data:function(){return{form:new Form({account_type:"1",first_name:"",last_name:"",email:"",mobile:""}),account_type:!1,email:!1,mobile:!1,validationSubmit:!1}},validations:{form:{email:{required:n["required"],email:n["email"],maxLength:Object(n["maxLength"])(255)},account_type:{required:n["required"]},mobile:{required:n["required"],maxLength:Object(n["maxLength"])(11),minLength:Object(n["minLength"])(11),isUnique:function(e){if(""===e)return!0;if(11!==e.length)return!0;var t="user/user-search?phone="+e;return l["a"].get(t).then((function(e){return console.log(e.data),2==e.data}))}}}},methods:{validateState:function(e){var t=this.$v.form[e],i=t.$dirty,r=t.$error;return i?!r:null},userStatus:function(e){2==e.status&&this.$router.push({name:"Dashboard"})},loadUser:function(){this.account_type=""===this.user.account_type||null==this.user.account_type,this.email=""===this.user.email||null==this.user.email,this.mobile=""===this.user.mobile||null==this.user.mobile,this.validationSubmit=1==this.user.status,this.form.first_name=this.user.first_name,this.form.last_name=this.user.last_name,this.form.email=this.user.email,this.form.account_type=this.user.account_type},onSubmit:function(){var e=this;this.$v.form.$touch(),this.$v.form.$anyError||this.form.post("user/verify-request/"+this.user.id).then((function(){e.$store.dispatch(o["d"])})).catch((function(t){var i=t.response;500===i.status&&swal.fire(e.$t("message.common.error"),e.$t("message.common.something_wrong"),"warning")}))},onSearch:function(){this.search(this.form.mobile,this)},search:_.debounce((function(e,t){var i="user/user-search?phone="+e;return l["a"].get(i).then((function(e){return 1!=e.data})),!1}),350)},computed:{user:function(){return this.$store.getters.currentUser}},watch:{user:function(e){this.userStatus(e),this.loadUser()}},created:function(){Fire.$emit("menuToggle")}},m=c,u=(i("d9ba"),i("2877")),f=Object(u["a"])(m,r,s,!1,null,"0765d49f",null);t["default"]=f.exports},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,i){var r=i("c6b6"),s=i("9263");e.exports=function(e,t){var i=e.exec;if("function"===typeof i){var a=i.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return s.call(e,t)}},"841c":function(e,t,i){"use strict";var r=i("d784"),s=i("825a"),a=i("1d80"),n=i("129f"),o=i("14c3");r("search",1,(function(e,t,i){return[function(t){var i=a(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,i):new RegExp(t)[e](String(i))},function(e){var r=i(t,e,this);if(r.done)return r.value;var a=s(e),l=String(this),c=a.lastIndex;n(c,0)||(a.lastIndex=0);var m=o(a,l);return n(a.lastIndex,c)||(a.lastIndex=c),null===m?-1:m.index}]}))},"8b75":function(e,t,i){},9263:function(e,t,i){"use strict";var r=i("ad6d"),s=i("9f7f"),a=RegExp.prototype.exec,n=String.prototype.replace,o=a,l=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=s.UNSUPPORTED_Y||s.BROKEN_CARET,m=void 0!==/()??/.exec("")[1],u=l||m||c;u&&(o=function(e){var t,i,s,o,u=this,f=c&&u.sticky,d=r.call(u),v=u.source,p=0,_=e;return f&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),_=String(e).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==e[u.lastIndex-1])&&(v="(?: "+v+")",_=" "+_,p++),i=new RegExp("^(?:"+v+")",d)),m&&(i=new RegExp("^"+v+"$(?!\\s)",d)),l&&(t=u.lastIndex),s=a.call(f?i:u,_),f?s?(s.input=s.input.slice(p),s[0]=s[0].slice(p),s.index=u.lastIndex,u.lastIndex+=s[0].length):u.lastIndex=0:l&&s&&(u.lastIndex=u.global?s.index+s[0].length:t),m&&s&&s.length>1&&n.call(s[0],i,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(s[o]=void 0)})),s}),e.exports=o},"9f7f":function(e,t,i){"use strict";var r=i("d039");function s(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,i){"use strict";var r=i("23e7"),s=i("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},ad6d:function(e,t,i){"use strict";var r=i("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,i){"use strict";i("ac1f");var r=i("6eeb"),s=i("d039"),a=i("b622"),n=i("9263"),o=i("9112"),l=a("species"),c=!s((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),m=function(){return"$0"==="a".replace(/./,"$0")}(),u=a("replace"),f=function(){return!!/./[u]&&""===/./[u]("a","$0")}(),d=!s((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var i="ab".split(e);return 2!==i.length||"a"!==i[0]||"b"!==i[1]}));e.exports=function(e,t,i,u){var v=a(e),p=!s((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),_=p&&!s((function(){var t=!1,i=/a/;return"split"===e&&(i={},i.constructor={},i.constructor[l]=function(){return i},i.flags="",i[v]=/./[v]),i.exec=function(){return t=!0,null},i[v](""),!t}));if(!p||!_||"replace"===e&&(!c||!m||f)||"split"===e&&!d){var h=/./[v],g=i(v,""[e],(function(e,t,i,r,s){return t.exec===n?p&&!s?{done:!0,value:h.call(t,i,r)}:{done:!0,value:e.call(i,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:m,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),b=g[0],y=g[1];r(String.prototype,e,b),r(RegExp.prototype,v,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}u&&o(RegExp.prototype[v],"sham",!0)}},d9ba:function(e,t,i){"use strict";i("8b75")}}]);
//# sourceMappingURL=chunk-f414f7c2.48b17d1d.js.map