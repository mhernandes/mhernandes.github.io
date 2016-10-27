function verifyFilter(t){for(var e=document.getElementsByClassName("post"),r=0;r<e.length;r++){var n=e[r].querySelector(".post__content_tags");n.getAttribute("tags").indexOf(t)==-1&&(e[r].style.display="none")}}var window_width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,filters=document.querySelector(".filters__list_category");if(filters&&filters.addEventListener("click",function(){var t=this.getAttribute("filter");verifyFilter(t)}),window_width<680){for(var post_wrapper=document.getElementsByClassName("post"),i=0;i<post_wrapper.length;i++){var that=post_wrapper[i];that.removeChild(that.childNodes[3])}for(var posts_content=document.getElementsByClassName("post__content"),k=0;k<posts_content.length;k++){var color=posts_content[k].getAttribute("color");posts_content[k].setAttribute("bg-color",color)}}for(var img=document.getElementsByTagName("img"),src="",i=0,imgLength=img.length;i<imgLength;i++)if(src=img[i].src,src.indexOf("/assets")==-1){var sr=src.split("/img").pop();img[i].src="/assets/img"+sr}var menu=document.querySelector(".menu"),logo=menu.querySelector(".menu__logo");window_width<960&&(logo.setAttribute("href","javascript:void(0);"),logo.addEventListener("click",function(t){logo.classList.contains("act")?(menu.style.transform="translateY(-152px)",logo.classList.remove("act")):(menu.style.transform="translateY(0)",logo.classList.add("act"))})),function t(e,r,n){function i(a,c){if(!r[a]){if(!e[a]){var s="function"==typeof require&&require;if(!c&&s)return s(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var u=r[a]={exports:{}};e[a][0].call(u.exports,function(t){var r=e[a][1][t];return i(r?r:t)},u,u.exports,t,e,r,n)}return r[a].exports}for(var o="function"==typeof require&&require,a=0;a<n.length;a++)i(n[a]);return i}({1:[function(t,e,r){"use strict";function n(t,e){var r=e.length,n=t.length;if(n>r)return!1;if(n===r)return t===e;t:for(var i=0,o=0;i<n;i++){for(var a=t.charCodeAt(i);o<r;)if(e.charCodeAt(o++)===a)continue t;return!1}return!0}e.exports=n},{}],2:[function(t,e,r){"use strict";function n(t,e){var r=o();r.open("GET",t,!0),r.onreadystatechange=i(r,e),r.send()}function i(t,e){return function(){if(4===t.readyState&&200===t.status)try{e(null,JSON.parse(t.responseText))}catch(t){e(t,null)}}}function o(){return window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")}e.exports={load:n}},{}],3:[function(t,e,r){"use strict";e.exports=function t(e){function r(t){return!!t&&(void 0!==t.required&&t.required instanceof Array)}if(!r(e))throw new Error("-- OptionsValidator: required options missing");if(!(this instanceof t))return new t(e);var n=e.required;this.getRequiredOptions=function(){return n},this.validate=function(t){var e=[];return n.forEach(function(r){void 0===t[r]&&e.push(r)}),e}}},{}],4:[function(t,e,r){"use strict";function n(t){return a(t)?s(t):c(t)?u(t):void 0}function i(){return y.length=0,y}function o(){return y}function a(t){return!!t&&"[object Object]"===Object.prototype.toString.call(t)}function c(t){return!!t&&"[object Array]"===Object.prototype.toString.call(t)}function s(t){return y.push(t),y}function u(t){for(var e=[],r=0;r<t.length;r++)a(t[r])&&e.push(s(t[r]));return e}function l(t){return t?h(y,t,v.searchStrategy,v):[]}function f(t){v=t||{},v.fuzzy=t.fuzzy||!1,v.limit=t.limit||10,v.searchStrategy=t.fuzzy?m:g}function h(t,e,r,n){for(var i=[],o=0;o<t.length&&i.length<n.limit;o++){var a=p(t[o],e,r,n);a&&i.push(a)}return i}function p(t,e,r,n){for(var i in t)if(!d(t[i],n.exclude)&&r.matches(t[i],e))return t}function d(t,e){var r=!1;e=e||[];for(var n=0;n<e.length;n++){var i=e[n];!r&&new RegExp(t).test(i)&&(r=!0)}return r}e.exports={put:n,clear:i,get:o,search:l,setOptions:f};var m=t("./SearchStrategies/FuzzySearchStrategy"),g=t("./SearchStrategies/LiteralSearchStrategy"),y=[],v={};v.fuzzy=!1,v.limit=10,v.searchStrategy=v.fuzzy?m:g},{"./SearchStrategies/FuzzySearchStrategy":5,"./SearchStrategies/LiteralSearchStrategy":6}],5:[function(t,e,r){"use strict";function n(){this.matches=function(t,e){return i(e,t)}}var i=t("fuzzysearch");e.exports=new n},{fuzzysearch:1}],6:[function(t,e,r){"use strict";function n(){this.matches=function(t,e){return"string"==typeof t&&(t=t.trim(),t.toLowerCase().indexOf(e.toLowerCase())>=0)}}e.exports=new n},{}],7:[function(t,e,r){"use strict";function n(t){o.pattern=t.pattern||o.pattern,o.template=t.template||o.template,"function"==typeof t.middleware&&(o.middleware=t.middleware)}function i(t){return o.template.replace(o.pattern,function(e,r){var n=o.middleware(r,t[r],o.template);return void 0!==n?n:t[r]||e})}e.exports={compile:i,setOptions:n};var o={};o.pattern=/\{(.*?)\}/g,o.template="",o.middleware=function(){}},{}],8:[function(t,e,r){!function(e,r,n){"use strict";function i(t){g.put(t),s()}function o(t){y.load(t,function(e,r){e&&h("failed to get JSON ("+t+")"),i(r)})}function a(){p.resultsContainer.innerHTML=""}function c(t){p.resultsContainer.innerHTML+=t}function s(){p.searchInput.addEventListener("keyup",function(t){a();var e=t.which,r=t.target.value;f(e)&&l(r)&&u(g.search(r))})}function u(t){if(0===t.length)return c(p.noResultsText);for(var e=0;e<t.length;e++)c(m.compile(t[e]))}function l(t){return t&&t.length>0}function f(t){return[13,16,20,37,38,39,40,91].indexOf(t)===-1}function h(t){throw new Error("SimpleJekyllSearch --- "+t)}var p={searchInput:null,resultsContainer:null,json:[],searchResultTemplate:'<li><a href="{url}" title="{desc}">{title}</a></li>',templateMiddleware:function(){},noResultsText:"No results found",limit:10,fuzzy:!1,exclude:[]},d=["searchInput","resultsContainer","json"],m=t("./Templater"),g=t("./Repository"),y=t("./JSONLoader"),v=t("./OptionsValidator")({required:d}),S=t("./utils");e.SimpleJekyllSearch=function(t){var e=v.validate(t);e.length>0&&h("You must specify the following required options: "+d),p=S.merge(p,t),m.setOptions({template:p.searchResultTemplate,middleware:p.templateMiddleware}),g.setOptions({fuzzy:p.fuzzy,limit:p.limit}),S.isJSON(p.json)?i(p.json):o(p.json)},e.SimpleJekyllSearch.init=e.SimpleJekyllSearch,"function"==typeof e.SimpleJekyllSearchInit&&e.SimpleJekyllSearchInit.call(this,e.SimpleJekyllSearch)}(window,document)},{"./JSONLoader":2,"./OptionsValidator":3,"./Repository":4,"./Templater":7,"./utils":9}],9:[function(t,e,r){"use strict";function n(t,e){var r={};for(var n in t)r[n]=t[n],void 0!==e[n]&&(r[n]=e[n]);return r}function i(t){try{return!!(t instanceof Object&&JSON.parse(JSON.stringify(t)))}catch(t){return!1}}e.exports={merge:n,isJSON:i}},{}]},{},[8]);var launcher=document.querySelector(".flaticon-search"),searchSection=document.querySelector(".search"),inputSearch=document.querySelector("#search"),quitSearch=document.querySelector("#quit-search"),searchActive=!1;launcher.addEventListener("click",function(){searchSection.style.height="100vh",searchActive=!0}),quitSearch.addEventListener("click",function(){searchSection.style.height="0",searchActive=!1}),SimpleJekyllSearch({searchInput:document.getElementById("search"),resultsContainer:document.getElementById("results-container"),json:"/search.json",searchResultTemplate:'<li><a href="{url}">{title}</a></li>',noResultsText:"<span>Ops! Anything was found, try again!"});