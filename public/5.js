(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{124:function(n,t,a){"use strict";a.r(t);var e=a(3),i={name:"navbar",data:function(){return{vin:null}},methods:{search:function(){var n={key:"vin",value:this.vin};e.a.commit("SET_FILTER",n)}}},r=(a(76),a(0)),o=Object(r.a)(i,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("nav",{staticClass:"navBar"},[a("div",{staticClass:"navBar__content container"},[a("ul",{staticClass:"navBar__link"},[a("li",[a("router-link",{attrs:{to:{name:"home"}}},[n._v("Main")])],1),n._v(" "),a("li",[a("router-link",{attrs:{to:{name:"About"}}},[n._v("About")])],1),n._v(" "),a("li",[a("router-link",{attrs:{to:{name:"Terms"}}},[n._v("Terms&Conditions")])],1),n._v(" "),a("li",[a("router-link",{attrs:{to:{name:"Contact"}}},[n._v("Contact")])],1)]),n._v(" "),n._m(0),n._v(" "),a("div",{staticClass:"navBar__search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:n.vin,expression:"vin"}],staticClass:"base-input",attrs:{type:"text",placeholder:"Lot or VIN number"},domProps:{value:n.vin},on:{input:function(t){t.target.composing||(n.vin=t.target.value)}}}),n._v(" "),a("button",{staticClass:"base-btn",on:{click:n.search}},[n._v("SEARCH HERE")])])])])}),[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"navBar__hero"},[t("img",{attrs:{src:"img/hero.png",alt:""}}),this._v(" "),t("h1",[this._v("Check car sales and damage history. "),t("span",[this._v("It’s free!")])])])}],!1,null,null,null);t.default=o.exports},29:function(n,t,a){var e=a(77);"string"==typeof e&&(e=[[n.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(2)(e,i);e.locals&&(n.exports=e.locals)},76:function(n,t,a){"use strict";a(29)},77:function(n,t,a){(n.exports=a(1)(!1)).push([n.i,".navBar {\n  background: linear-gradient(180deg, rgba(0, 40, 179, 0.9) 0%, rgba(0, 57, 255, 0.28) 225.36%), url(/img/navbar-bg.png);\n  background-blend-mode: multiply;\n  padding: 61px 0 71px 0;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.navBar__link {\n  justify-content: flex-end;\n  margin-bottom: 40px;\n  display: flex;\n}\n@media (min-width: 768px) {\n.navBar__link {\n    gap: 62px;\n}\n}\n.navBar__link li a {\n  color: white;\n}\n.navBar__hero {\n  display: flex;\n  gap: 36px;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 40px;\n  flex-direction: column;\n}\n@media (min-width: 768px) {\n.navBar__hero {\n    flex-direction: row;\n}\n}\n.navBar__hero h1 {\n  font-weight: 700;\n  font-size: 47px;\n  line-height: 61px;\n  text-align: center;\n  color: #FFFFFF;\n}\n.navBar__hero h1 span {\n  color: #ffcd1e;\n}\n.navBar__search {\n  display: flex;\n  gap: 24px;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n@media (min-width: 576px) {\n.navBar__search {\n    flex-direction: row;\n}\n}\n@media (min-width: 1200px) {\n.navBar__search {\n    width: 77%;\n    margin: 0 auto;\n}\n}\n.navBar__search .base-input {\n  flex: 1;\n  width: 90%;\n}",""])}}]);