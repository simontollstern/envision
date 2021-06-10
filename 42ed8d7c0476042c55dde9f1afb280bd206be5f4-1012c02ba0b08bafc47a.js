(self.webpackChunkenvision_docs=self.webpackChunkenvision_docs||[]).push([[536],{2161:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(u=c;0!=u--;)if(!i(e[u],o[u]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!o.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],o.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!o.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(u=c;0!=u--;)if(e[u]!==o[u])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(o,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],o[s[u]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},2773:function(e,t,n){"use strict";var r,a=n(2784),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),l()},o.componentDidUpdate=function(){l()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",c),f}}},3976:function(e,t,n){"use strict";n.d(t,{r:function(){return a}});var r=n(2784),a=function(e){r.useEffect((function(){e.current.querySelectorAll(".gatsby-highlight[data-language=html]").forEach((function(e){var t=document.createElement("div");t.classList.add("code-example"),t.innerHTML=e.textContent,e.parentNode.insertBefore(t,e)}));var t=window.$,n=window.envision;n.popover(".example-popover"),t(".example-tabs").envTabs(),t(".example-tabs1").envTabs(),t(".example-tabs2").envTabs(),t(".example-tabs3").envTabs(),t(".example-range-slider").envRangeSlider({values:[20,70]});for(var r=document.querySelectorAll(".example-tag-select"),a=0;r&&a<r.length;a++)n.select(r,{maxItems:6,create:!0,i18n:"en"});var i=document.querySelector("#example-tag-select-1");i&&n.select(i,{i18n:"en"});var o=document.querySelector("#example-tag-select-2");if(o){n.select(o,{maxItems:5,clearButton:!0,create:!0,placeholder:"Select or add tags...",items:["fruit01"],i18n:"en",options:[{value:"fruit01",text:"Apple"},{value:"fruit02",text:"Banana"},{value:"fruit03",text:"Grapefruit"},{value:"fruit04",text:"Lemon"},{value:"fruit05",text:"Pear"}],onOptionAdd:function(e,t){console.log("Added:",e,t)}}).then((function(e){document.getElementById("example-tag-select-2-add").addEventListener("click",(function(){var t=document.getElementById("example-tag-select-2-tag").value;e[0].addOptions({value:t,text:t}),e[0].addItem(t)}))}));var c=document.querySelector("#example-tag-select-3");c&&n.select(c,{maxItems:5,placeholder:"Select a Github repository...",i18n:"en",valueField:"url",labelField:"name",searchField:["name"],preload:!0,load:function(e,t){e=e||"sitevision";var n="https://api.github.com/search/repositories?q="+encodeURIComponent(e);fetch(n).then((function(e){return e.json()})).then((function(e){t(e.items)})).catch((function(){t()}))}})}}),[e])}},5118:function(e,t,n){"use strict";n.d(t,{Z:function(){return we}});var r,a,i,o,c=n(2784),u=n(3980),s=n.n(u),l=n(2773),f=n.n(l),p=n(2161),m=n.n(p),d=n(308),h=n.n(d),v="bodyAttributes",y="htmlAttributes",g="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(b).map((function(e){return b[e]})),"charset"),E="cssText",w="href",A="http-equiv",C="innerHTML",O="itemprop",S="name",k="property",x="rel",j="src",I="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",L="defer",_="encodeSpecialCharacters",M="onChangeClientState",q="titleTemplate",R=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),B=[b.NOSCRIPT,b.SCRIPT,b.STYLE],F="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=Q(e,b.TITLE),n=Q(e,q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,P);return t||r||void 0},$=function(e){return Q(e,M)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],u=c.toLowerCase();-1===t.indexOf(u)||n===x&&"canonical"===e[n].toLowerCase()||u===x&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==C&&c!==E&&c!==O||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],u=h()({},r[c],a[c]);r[c]=u}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ue(b.BODY,r),ue(b.HTML,a),ce(f,p);var m={baseTag:se(b.BASE,n),linkTags:se(b.LINK,i),metaTags:se(b.META,o),noscriptTags:se(b.NOSCRIPT,c),scriptTags:se(b.SCRIPT,s),styleTags:se(b.STYLE,l)},d={},h={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=m[e].oldTags)})),t&&t(),u(e,d,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ue(b.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(F),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var u=o[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute(F):n.getAttribute(F)!==o.join(",")&&n.setAttribute(F,o.join(","))}},se=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(F,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[F]=!0,a=fe(n,r),[c.createElement(b.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+V(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case y:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[F]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===C||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(b.BASE,t,r),bodyAttributes:pe(v,n,r),htmlAttributes:pe(y,a,r),link:pe(b.LINK,i,r),meta:pe(b.META,o,r),noscript:pe(b.NOSCRIPT,c,r),script:pe(b.SCRIPT,u,r),style:pe(b.STYLE,s,r),title:pe(b.TITLE,{title:f,titleAttributes:p},r)}},de=f()((function(e){return{baseTag:Z([w,I],e),bodyAttributes:G(v,e),defer:Q(e,L),encode:Q(e,_),htmlAttributes:G(y,e),linkTags:J(b.LINK,[x,w],e),metaTags:J(b.META,[S,T,A,k,O],e),noscriptTags:J(b.NOSCRIPT,[C],e),onChangeClientState:$(e),scriptTags:J(b.SCRIPT,[j,C],e),styleTags:J(b.STYLE,[E],e),title:W(e),titleAttributes:G(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),me)((function(){return null})),he=(a=de,o=i=function(e){function t(){return H(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case b.TITLE:return Y({},a,((t={})[r.type]=o,t.titleAttributes=Y({},i),t));case b.BODY:return Y({},a,{bodyAttributes:Y({},i)});case b.HTML:return Y({},a,{htmlAttributes:Y({},i)})}return Y({},a,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(z(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=z(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(a,r)},U(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind;var ve=he;var ye=n(8447),ge=function(e){var t=e.to,n=e.children,r=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["to","children"]);return/^http/.test(t)?c.createElement("a",{href:t},n):c.createElement(ye.Link,Object.assign({to:t},r),n)},be=function(e){var t=e.title,n=e.menuItems;return c.createElement(c.Fragment,null,c.createElement(ve,null,c.createElement("html",{lang:"en",className:"sv-js"}),c.createElement("meta",{charset:"utf-8"}),c.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),c.createElement("title",null,t+" · Envision by Sitevision"),c.createElement("link",{rel:"icon",type:"image/png",href:"/images/envision_logo.png",sizes:"32x32"})),c.createElement("div",{className:"sv-header"},c.createElement("header",{className:"header"},c.createElement("div",{className:"logo"},c.createElement("a",{href:"https://www.sitevision.se"},c.createElement("img",{src:"/images/sitevision-logo.svg",alt:"Sitevision"}))),c.createElement("nav",{className:"header-nav"},c.createElement("ul",{className:"env-nav env-nav--menubar env-nav--border",role:"menubar"},n.map((function(e){var t=e.label,n=e.to;return c.createElement("li",{className:"env-nav__item",key:t,role:"menuitem"},c.createElement(ge,{to:n,activeClassName:"active"},t))})))))))},Te=function(e){var t=e.categories,n=e.menuItems;return c.createElement("nav",{className:"sidenav"},t.map((function(e){var t=e.title,r=e.slug;return c.createElement("div",{key:r},c.createElement(ge,{to:n[r][0].slug},t),c.createElement("ul",null,n[r].map((function(e){var t=e.id,n=e.title,r=e.slug;return c.createElement("li",{key:t},c.createElement(ge,{to:r,className:"env-link-secondary",activeClassName:"active"},n))}))))})),c.createElement("div",{className:"theme-picker env-text"},c.createElement("a",{href:"/theme/settings/",className:"env-link-secondary"},"Site theme settings")))},Ee=function(e){var t=e.menuItems;return c.createElement(c.Fragment,null,c.createElement("div",{className:"footer-wrapper"},c.createElement("footer",{className:"footer"},c.createElement("a",{href:"https://www.sitevision.se/"},"© Sitevision"),c.createElement("nav",{className:"footer-nav"},c.createElement("ul",{className:"env-nav env-nav--menubar env-nav--border",role:"menubar"},t.map((function(e){var t=e.label,n=e.to;return c.createElement("li",{className:"env-nav__item",key:t,role:"menuitem"},c.createElement(ge,{to:n,activeClassName:"active"},t))})))))),c.createElement(ve,null,c.createElement("script",null,"var _paq = _paq || [];\n  /* tracker methods like \"setCustomDimension\" should be called before \"trackPageView\" */\n  _paq.push([\"setDoNotTrack\", true]);\n  _paq.push(['trackPageView']);\n  _paq.push(['enableLinkTracking']);\n  (function() {\n    var u=\"//uistats.sitevision.se/\";\n    _paq.push(['setTrackerUrl', u+'piwik.php']);\n    _paq.push(['setSiteId', '8']);\n    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];\n    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);\n  })();")))},we=function(e){var t,n=e.title,r=e.topMenuItems,a=e.menuCategories,i=e.menuItems,o=e.children;return c.createElement(c.Fragment,null,c.createElement(be,{title:n,menuItems:r}),c.createElement("div",{className:"main-container"},c.createElement("main",null,c.createElement("h1",{className:"main-heading"},n),o),c.createElement(Te,{categories:a,menuItems:(t=i,t.map((function(e){var t=e.node;return{id:t.id,title:t.frontmatter.title,slug:t.fields.slug}})).reduce((function(e,t){var n=t.slug.split("/").filter((function(e){return e})),r=e[n[0]];return r||(r=e[n[0]]=[]),r.push(t),e}),{}))})),c.createElement(Ee,{menuItems:r}))}}}]);
//# sourceMappingURL=42ed8d7c0476042c55dde9f1afb280bd206be5f4-1012c02ba0b08bafc47a.js.map