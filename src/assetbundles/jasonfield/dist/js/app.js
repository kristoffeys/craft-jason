(function(e){function t(t){for(var a,o,l=t[0],s=t[1],u=t[2],c=0,f=[];c<l.length;c++)o=l[c],r[o]&&f.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1908:function(e,t,n){},"29e5":function(e,t,n){"use strict";var a=n("1908"),r=n.n(a);r.a},"41d0":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("ac6a"),n("456d");var a=n("a026"),r=(n("a481"),n("6809"));r.keys().forEach(function(e){var t=r(e),n=e.replace(/^\.\/(.*)\.\w+$/,"$1");a["default"].component(n,t.default||t)});n("41d0");n.p="http://localhost:8080/",a["default"].config.productionTip=!1;var i=setInterval(function(){if(window.JasonField){if("{}"!=window.JasonField)for(var e=0,t=Object.keys(window.JasonField);e<t.length;e++){var n=t[e];new a["default"]({el:"#".concat(window.JasonField[n].namespace||window.JasonField.id),delimiters:["${","}"],data:{readonly:null,allowRawEditing:null}})}clearInterval(i)}},100)},6809:function(e,t,n){var a={"./JasonSwitch.vue":"8071","./Node.vue":"dbe3","./Tree.vue":"730d"};function r(e){var t=i(e);return n(t)}function i(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id="6809"},"730d":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.showRaw,expression:"!showRaw"}],staticClass:"rounded w-full"},[e.fieldEmpty&&!e.readonly?n("button",{staticClass:"w-full font-bold bg-grey-lighter text-grey-darker border border-grey px-5px py-3px text-xl flex items-center justify-center leading-none hover:border-blue",on:{click:function(t){return t.preventDefault(),e.initField(t)}}},[e._v("\n      +\n    ")]):e.fieldEmpty&&e.readonly?n("div",{staticClass:"text-grey-dark"},[e._v("\n      No value entered for this "),n("i",[e._v("readonly")]),e._v(" Jason (JSON) field.\n    ")]):e._e(),null===e.error?n("table",{staticClass:"w-full"},e._l(e.fieldValue,function(t,a,r){return n("node",{key:r,attrs:{index:r,nodevalue:t,nodekey:a,reference:""+a},on:{valuechange:function(t){return e.addToData(t)},keychange:function(t){return e.replaceKey(t)}}})}),1):e._e()]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.jsonString,expression:"jsonString"},{name:"show",rawName:"v-show",value:e.showRaw,expression:"showRaw"}],ref:"textarea",staticClass:"text fullwidth font-mono",class:{"border-red-light focus:border-red-light":e.error},attrs:{id:e.namespacedId,name:e.name,rows:"2",placeholder:"Field is blank. Enter valid JSON."},domProps:{value:e.jsonString},on:{input:function(t){t.target.composing||(e.jsonString=t.target.value)}}}),n("div",{staticClass:"flex"},[n("ul",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],staticClass:"errors"},[n("li",[e._v(e._s(e.error))])]),e.allowRawEditing&&!e.readonly?n("div",{staticClass:"ml-auto py-10px"},[n("div",{staticClass:"btn",attrs:{tabindex:"0"},on:{click:function(t){t.preventDefault(),e.showRaw=!e.showRaw}}},[e._v("\n        "+e._s(e.showRaw?"Done Editing":"Edit Raw Data")+"\n      ")])]):e._e()])])},r=[],i=(n("ac6a"),n("456d"),n("79c4")),o=n("19e9"),l=n.n(o),s={props:{value:{},name:{type:String},namespacedId:{type:String},validOnLoad:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},allowRawEditing:{type:Boolean,default:!0}},mounted:function(){this.isValid=this.validOnLoad,this.validOnLoad||this.readonly||!this.allowRawEditing||(this.showRaw=!0),Array.isArray(this.value)&&0==this.value.length?this.fieldValue="":this.fieldValue=this.value,l()(this.$refs.textarea)},watch:{jsonString:function(e){0===this.jsonString.length?this.fieldValue="":this.parse(e)},showRaw:function(e){1==e&&this.$nextTick(function(){l.a.update(this.$refs.textarea)})}},computed:{fieldEmpty:function(){return 0===this.fieldValue.length||!Object.keys(this.fieldValue).length},jsonString:{get:function(){if(null===this.error&&!0===this.isValid){var e=JSON.stringify(this.fieldValue,null,1);return'""'==e?"":e}return this.fieldValue},set:function(e){this.parse(e)}}},data:function(){return{fieldValue:{},showRaw:!1,error:null,isValid:!0}},methods:{initField:function(){this.fieldValue="[0]"},addToData:function(e){Object(i["vueSet"])(this.fieldValue,e.reference,e.value.trim())},parse:function(e){try{this.fieldValue=JSON.parse(e),this.error=null,this.isValid=!0}catch(t){return this.error=t.message,void(this.fieldValue=e)}}}},u=s,d=n("2877"),c=Object(d["a"])(u,a,r,!1,null,null,null);t["default"]=c.exports},8071:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"lightswitch",class:{on:e.active},attrs:{tabindex:"0",id:e.id,"aria-labelledby":e.id,role:"checkbox","aria-checked":"true"},on:{click:function(t){return e.toggle()}}},[n("div",{staticClass:"lightswitch-container",style:"margin-left: "+(e.active?0:-11)+"px;"},[n("div",{staticClass:"label on"}),n("div",{staticClass:"handle"}),n("div",{staticClass:"label off"})]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.active,expression:"active"}],attrs:{type:"hidden",name:e.name},domProps:{value:e.active},on:{input:function(t){t.target.composing||(e.active=t.target.value)}}})])])},r=[],i={props:["id","name","value"],beforeMount:function(){this.active=this.value},mounted:function(){this.$emit("toggled",this.active)},data:function(){return{active:!0}},methods:{toggle:function(){this.active=!this.active,this.$emit("toggled",this.active)}}},o=i,l=(n("e97b"),n("2877")),s=Object(l["a"])(o,a,r,!1,null,"6dcd4ca7",null);t["default"]=s.exports},c4a4:function(e,t,n){},dbe3:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",{staticClass:"w-full"},[n("td",{staticClass:"bg-grey-lighter text-grey-darker px-8px"},[e._v("\n    "+e._s(e.nodekey)+"\n  ")]),e.isObject(e.nodevalue)?n("td",{},[n("table",{staticClass:"w-full"},e._l(e.nodevalue,function(t,a,r){return n("node",{key:r,attrs:{index:r,nodevalue:t,nodekey:a,reference:(e.reference?e.reference+".":"")+a},on:{valuechange:function(t){return e.emitValueChange(t.reference,t.value)}}})}),1)]):e.reference.length>0?n("td",[n("textarea",{ref:"textarea",staticClass:"block w-full outline-none resize-none focus:shadow-outline px-8px py-5px leading-normal",attrs:{autocomplete:"disabled",rows:"1"},domProps:{value:e.nodevalue},on:{input:function(t){return e.emitValueChange(e.reference,t.target.value)}}})]):e._e()])},r=[],i=n("7618"),o=n("19e9"),l=n.n(o),s={name:"node",props:["index","nodevalue","nodekey","reference"],data:function(){return{nodeactive:!1,nodeinputvalue:""}},methods:{isObject:function(e){return"object"===Object(i["a"])(e)&&null!==e},emitValueChange:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.$emit("valuechange",{value:t,reference:e})}},mounted:function(){l()(this.$refs.textarea)}},u=s,d=(n("29e5"),n("2877")),c=Object(d["a"])(u,a,r,!1,null,"420f1dc5",null);t["default"]=c.exports},e97b:function(e,t,n){"use strict";var a=n("c4a4"),r=n.n(a);r.a}});