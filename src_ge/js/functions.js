$(function(){
  jForm();
  classie();
  PathLoader();
  preloader();
  scrollTo_plugin();
  maximage();
  fitvids();
  typedJs();
  myScripts();
  languageSwitcher();
});





function classie(){
  !function(s){"use strict";function e(s){return new RegExp("(^|\\s+)"+s+"(\\s+|$)")}function n(s,e){var n=a(s,e)?c:t;n(s,e)}var a,t,c;"classList"in document.documentElement?(a=function(s,e){return s.classList.contains(e)},t=function(s,e){s.classList.add(e)},c=function(s,e){s.classList.remove(e)}):(a=function(s,n){return e(n).test(s.className)},t=function(s,e){a(s,e)||(s.className=s.className+" "+e)},c=function(s,n){s.className=s.className.replace(e(n)," ")});var i={hasClass:a,addClass:t,removeClass:c,toggleClass:n,has:a,add:t,remove:c,toggle:n};"function"==typeof define&&define.amd?define(i):s.classie=i}(window);
}

function PathLoader(){
!function(t){"use strict";function e(t){this.el=t,this.el.style.strokeDasharray=this.el.style.strokeDashoffset=this.el.getTotalLength()}e.prototype._draw=function(t){this.el.style.strokeDashoffset=this.el.getTotalLength()*(1-t)},e.prototype.setProgress=function(t,e){this._draw(t),e&&"function"==typeof e&&setTimeout(e,200)},e.prototype.setProgressFn=function(t){"function"==typeof t&&t(this)},t.PathLoader=e}(window);
}

function preloader(){
  !function(){function n(){var n=function(){t.animations&&this.removeEventListener(s,n),e()};window.addEventListener("scroll",i),classie.add(a,"loading"),t.animations?a.addEventListener(s,n):n()}function e(){var n=function(n){var e=0,r=setInterval(function(){if(e=Math.min(e+.1*Math.random(),1),n.setProgress(e),1===e){classie.remove(a,"loading"),classie.add(a,"loaded"),clearInterval(r);var d=function(n){if(t.animations){if(n.target!==o)return;this.removeEventListener(s,d)}classie.add(document.body,"layout-switch"),window.removeEventListener("scroll",i),setTimeout(function(){classie.add(o,"header-none")},2e3)};t.animations?o.addEventListener(s,d):d()}},80)};r.setProgressFn(n)}function i(){window.scrollTo(0,0)}var t={animations:Modernizr.cssanimations},a=document.getElementById("preloader_container"),o=a.querySelector("header.preloader_header"),r=new PathLoader(document.getElementById("preloader_loader_circle")),d={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},s=d[Modernizr.prefixed("animation")];n()}();
}

function scrollTo_plugin(){
  !function(e){function t(e){return"object"==typeof e?e:{top:e,left:e}}var o=e.scrollTo=function(t,o,n){e(window).scrollTo(t,o,n)};o.defaults={axis:"xy",duration:parseFloat(e.fn.jquery)>=1.3?0:1,limit:!0},o.window=function(t){return e(window)._scrollable()},e.fn._scrollable=function(){return this.map(function(){var t=this,o=!t.nodeName||-1!=e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"]);if(!o)return t;var n=(t.contentWindow||t).document||t.ownerDocument||t;return/webkit/i.test(navigator.userAgent)||"BackCompat"==n.compatMode?n.body:n.documentElement})},e.fn.scrollTo=function(n,r,i){return"object"==typeof r&&(i=r,r=0),"function"==typeof i&&(i={onAfter:i}),"max"==n&&(n=9e9),i=e.extend({},o.defaults,i),r=r||i.duration,i.queue=i.queue&&i.axis.length>1,i.queue&&(r/=2),i.offset=t(i.offset),i.over=t(i.over),this._scrollable().each(function(){function a(e){u.animate(l,r,i.easing,e&&function(){e.call(this,n,i)})}if(n){var s,c=this,u=e(c),f=n,l={},d=u.is("html,body");switch(typeof f){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=t(f);break}if(f=e(f,this),!f.length)return;case"object":(f.is||f.style)&&(s=(f=e(f)).offset())}e.each(i.axis.split(""),function(e,t){var n="x"==t?"Left":"Top",r=n.toLowerCase(),m="scroll"+n,h=c[m],w=o.max(c,t);if(s)l[m]=s[r]+(d?0:h-u.offset()[r]),i.margin&&(l[m]-=parseInt(f.css("margin"+n))||0,l[m]-=parseInt(f.css("border"+n+"Width"))||0),l[m]+=i.offset[r]||0,i.over[r]&&(l[m]+=f["x"==t?"width":"height"]()*i.over[r]);else{var b=f[r];l[m]=b.slice&&"%"==b.slice(-1)?parseFloat(b)/100*w:b}i.limit&&/^\d+$/.test(l[m])&&(l[m]=l[m]<=0?0:Math.min(l[m],w)),!e&&i.queue&&(h!=l[m]&&a(i.onAfterFirst),delete l[m])}),a(i.onAfter)}}).end()},o.max=function(t,o){var n="x"==o?"Width":"Height",r="scroll"+n;if(!e(t).is("html,body"))return t[r]-e(t)[n.toLowerCase()]();var i="client"+n,a=t.ownerDocument.documentElement,s=t.ownerDocument.body;return Math.max(a[r],s[r])-Math.min(a[i],s[i])}}(jQuery);
}

function maximage(){
  !function(e){e.fn.maximage=function(i,t){function a(e){window.console&&window.console.log&&window.console.log(e)}var d;("object"==typeof i||void 0===i)&&(d=e.extend(e.fn.maximage.defaults,i||{})),"string"==typeof i&&(d=e.fn.maximage.defaults),e.Body=e("body"),e.Window=e(window),e.Scroll=e("html, body"),e.Events={RESIZE:"resize"},this.each(function(){var t=e(this),n=0,s=[],o={setup:function(){if(e.Slides.length>0){var i,a=e.Slides.length;for(i=0;a>i;i++){var d=e.Slides[i];t.append('<div class="mc-image '+d.theclass+'" title="'+d.alt+'" style="background-image:url(\''+d.url+"');"+d.style+'" data-href="'+d.datahref+'">'+d.content+"</div>")}o.preload(0),o.resize()}},preload:function(i){var a=e("<img/>");a.load(function(){0==n&&(c.setup(),d.onFirstImageLoaded()),n==e.Slides.length-1?d.onImagesLoaded(t):(n++,o.preload(n))}),a[0].src=e.Slides[i].url,s.push(a[0])},resize:function(){e.Window.bind(e.Events.RESIZE,function(){e.Scroll.addClass("mc-hide-scrolls"),e.Window.data("h",h.sizes().h).data("w",h.sizes().w),t.height(e.Window.data("h")).width(e.Window.data("w")).children().height(e.Window.data("h")).width(e.Window.data("w")),t.children().each(function(){this.cycleH=e.Window.data("h"),this.cycleW=e.Window.data("w")}),e(e.Scroll).removeClass("mc-hide-scrolls")})}},r={setup:function(){var i,a,n,s=e.Slides.length;if(e.BrowserTests.msie&&!d.overrideMSIEStop&&document.execCommand("Stop",!1),t.html(""),e.Body.addClass("mc-old-browser"),e.Slides.length>0){for(e.Scroll.addClass("mc-hide-scrolls"),e.Window.data("h",h.sizes().h).data("w",h.sizes().w),e("body").append(e("<div></div>").attr("class","mc-loader").css({position:"absolute",left:"-9999px"})),n=0;s>n;n++)i=0==e.Slides[n].content.length?'<img src="'+e.Slides[n].url+'" />':e.Slides[n].content,a=e("<div>"+i+"</div>").attr("class","mc-image mc-image-n"+n+" "+e.Slides[n].theclass),t.append(a),0==e(".mc-image-n"+n).children("img").length||e("div.mc-loader").append(e(".mc-image-n"+n).children("img").first().clone().addClass("not-loaded"));r.preload(),r.windowResize()}},preload:function(){var i=setInterval(function(){e(".mc-loader").children("img").each(function(i){var t=e(this);if(t.hasClass("not-loaded")&&t.height()>0){e(this).removeClass("not-loaded");var a=e("div.mc-image-n"+i).children("img").first();a.data("h",t.height()).data("w",t.width()).data("ar",t.width()/t.height()),r.onceLoaded(i)}}),0==e(".not-loaded").length&&(e(".mc-loader").remove(),clearInterval(i))},1e3)},onceLoaded:function(i){r.maximage(i),0==i?(t.css({visibility:"visible"}),d.onFirstImageLoaded()):i==e.Slides.length-1&&(c.setup(),e(e.Scroll).removeClass("mc-hide-scrolls"),d.onImagesLoaded(t),d.debug&&(a(" - Final Maximage - "),a(t)))},maximage:function(i){e("div.mc-image-n"+i).height(e.Window.data("h")).width(e.Window.data("w")).children("img").first().each(function(){l.maxcover(e(this))})},windowResize:function(){e.Window.bind(e.Events.RESIZE,function(){clearTimeout(this.id),this.id=setTimeout(r.doneResizing,200)})},doneResizing:function(){e(e.Scroll).addClass("mc-hide-scrolls"),e.Window.data("h",h.sizes().h).data("w",h.sizes().w),t.height(e.Window.data("h")).width(e.Window.data("w")),t.find(".mc-image").each(function(e){r.maximage(e)});var i=t.data("cycle.opts");void 0!=i&&(i.height=e.Window.data("h"),i.width=e.Window.data("w"),jQuery.each(i.elements,function(i,t){t.cycleW=e.Window.data("w"),t.cycleH=e.Window.data("h")})),e(e.Scroll).removeClass("mc-hide-scrolls")}},c={setup:function(){t.addClass("mc-cycle"),e.Window.data("h",h.sizes().h).data("w",h.sizes().w),jQuery.easing.easeForCSSTransition=function(e,i,t,a,d,n){return t+a};var i=e.extend({fit:1,containerResize:0,height:e.Window.data("h"),width:e.Window.data("w"),slideResize:!1,easing:e.BrowserTests.cssTransitions&&d.cssTransitions?"easeForCSSTransition":"swing"},d.cycleOptions);t.cycle(i)}},l={center:function(i){d.verticalCenter&&i.css({marginTop:(i.height()-e.Window.data("h"))/2*-1}),d.horizontalCenter&&i.css({marginLeft:(i.width()-e.Window.data("w"))/2*-1})},fill:function(i){var t=i.is("object")?i.parent().first():i;"function"==typeof d.backgroundSize?d.backgroundSize(i):"cover"==d.backgroundSize?e.Window.data("w")/e.Window.data("h")<t.data("ar")?i.height(e.Window.data("h")).width((e.Window.data("h")*t.data("ar")).toFixed(0)):i.height((e.Window.data("w")/t.data("ar")).toFixed(0)).width(e.Window.data("w")):"contain"==d.backgroundSize?e.Window.data("w")/e.Window.data("h")<t.data("ar")?i.height((e.Window.data("w")/t.data("ar")).toFixed(0)).width(e.Window.data("w")):i.height(e.Window.data("h")).width((e.Window.data("h")*t.data("ar")).toFixed(0)):a("The backgroundSize option was not recognized for older browsers.")},maxcover:function(e){l.fill(e),l.center(e)},maxcontain:function(e){l.fill(e),l.center(e)}},h={browser_tests:function(){var i=e("<div />")[0],t=["Moz","Webkit","Khtml","O","ms"],n="transition",s={cssTransitions:!1,cssBackgroundSize:"backgroundSize"in i.style&&d.cssBackgroundSize,html5Video:!1,msie:!1};if(d.cssTransitions){"string"==typeof i.style[n]&&(s.cssTransitions=!0),n=n.charAt(0).toUpperCase()+n.substr(1);for(var o=0;o<t.length;o++)t[o]+n in i.style&&(s.cssTransitions=!0)}return document.createElement("video").canPlayType&&(s.html5Video=!0),s.msie=void 0!==h.msie(),d.debug&&(a(" - Browser Test - "),a(s)),s},construct_slide_object:function(){var i=new Object,n=new Array;return t.children().each(function(t){var a=e(this).is("img")?e(this).clone():e(this).find("img").first().clone();i={},i.url=a.attr("src"),i.title=void 0!=a.attr("title")?a.attr("title"):"",i.alt=void 0!=a.attr("alt")?a.attr("alt"):"",i.theclass=void 0!=a.attr("class")?a.attr("class"):"",i.styles=void 0!=a.attr("style")?a.attr("style"):"",i.orig=a.clone(),i.datahref=void 0!=a.attr("data-href")?a.attr("data-href"):"",i.content="",e(this).find("img").length>0&&(e.BrowserTests.cssBackgroundSize&&e(this).find("img").first().remove(),i.content=e(this).html()),a[0].src="",e.BrowserTests.cssBackgroundSize&&e(this).remove(),n.push(i)}),d.debug&&(a(" - Slide Object - "),a(n)),n},msie:function(){for(var e,i=3,t=document.createElement("div"),a=t.getElementsByTagName("i");t.innerHTML="<!--[if gt IE "+ ++i+"]><i></i><![endif]-->",a[0];);return i>4?i:e},sizes:function(){var i={h:0,w:0};if("window"==d.fillElement)i.h=e.Window.height(),i.w=e.Window.width();else{var a=t.parents(d.fillElement).first();0==a.height()||1==a.data("windowHeight")?(a.data("windowHeight",!0),i.h=e.Window.height()):i.h=a.height(),0==a.width()||1==a.data("windowWidth")?(a.data("windowWidth",!0),i.w=e.Window.width()):i.w=a.width()}return i}};if(e.BrowserTests=h.browser_tests(),"string"==typeof i){if(e.BrowserTests.html5Video||!t.is("video")){var w,g=t.is("object")?t.parent().first():t;e.Body.hasClass("mc-old-browser")||e.Body.addClass("mc-old-browser"),e.Window.data("h",h.sizes().h).data("w",h.sizes().w),g.data("h",t.height()).data("w",t.width()).data("ar",t.width()/t.height()),e.Window.bind(e.Events.RESIZE,function(){e.Window.data("h",h.sizes().h).data("w",h.sizes().w),w=t.data("resizer"),clearTimeout(w),w=setTimeout(l[i](t),200),t.data("resizer",w)}),l[i](t)}}else e.Slides=h.construct_slide_object(),e.BrowserTests.cssBackgroundSize?(d.debug&&a(" - Using Modern - "),o.setup()):(d.debug&&a(" - Using Old - "),r.setup())})},e.fn.maximage.defaults={debug:!1,cssBackgroundSize:!0,cssTransitions:!0,verticalCenter:!0,horizontalCenter:!0,scaleInterval:20,backgroundSize:"cover",fillElement:"window",overrideMSIEStop:!1,onFirstImageLoaded:function(){},onImagesLoaded:function(){}}}(jQuery);
}

function fitvids(){
  !function(t){"use strict";t.fn.fitVids=function(e){var i={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var r=document.head||document.getElementsByTagName("head")[0],a=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",d=document.createElement("div");d.innerHTML='<p>x</p><style id="fit-vids-style">'+a+"</style>",r.appendChild(d.childNodes[1])}return e&&t.extend(i,e),this.each(function(){var e=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];i.customSelector&&e.push(i.customSelector);var r=".fitvidsignore";i.ignore&&(r=r+", "+i.ignore);var a=t(this).find(e.join(","));a=a.not("object object"),a=a.not(r),a.each(function(){var e=t(this);if(!(e.parents(r).length>0||"embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){e.css("height")||e.css("width")||!isNaN(e.attr("height"))&&!isNaN(e.attr("width"))||(e.attr("height",9),e.attr("width",16));var i="object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height(),a=isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10),d=i/a;if(!e.attr("id")){var o="fitvid"+Math.floor(999999*Math.random());e.attr("id",o)}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*d+"%"),e.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto);
}

function spinJs(){
  !function(t,e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Spinner=e()}(this,function(){"use strict";function t(t,e){var i,o=document.createElement(t||"div");for(i in e)o[i]=e[i];return o}function e(t){for(var e=1,i=arguments.length;i>e;e++)t.appendChild(arguments[e]);return t}function i(t,e,i,o){var n=["opacity",e,~~(100*t),i,o].join("-"),r=.01+i/o*100,s=Math.max(1-(1-t)/e*(100-r),t),a=f.substring(0,f.indexOf("Animation")).toLowerCase(),l=a&&"-"+a+"-"||"";return p[n]||(c.insertRule("@"+l+"keyframes "+n+"{0%{opacity:"+s+"}"+r+"%{opacity:"+t+"}"+(r+.01)+"%{opacity:1}"+(r+e)%100+"%{opacity:"+t+"}100%{opacity:"+s+"}}",c.cssRules.length),p[n]=1),n}function o(t,e){var i,o,n=t.style;if(void 0!==n[e])return e;for(e=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<d.length;o++)if(i=d[o]+e,void 0!==n[i])return i}function n(t,e){for(var i in e)t.style[o(t,i)||i]=e[i];return t}function r(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)void 0===t[o]&&(t[o]=i[o])}return t}function s(t){for(var e={x:t.offsetLeft,y:t.offsetTop};t=t.offsetParent;)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}function a(t){return"undefined"==typeof this?new a(t):void(this.opts=r(t||{},a.defaults,u))}function l(){function i(e,i){return t("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',i)}c.addRule(".spin-vml","behavior:url(#default#VML)"),a.prototype.lines=function(t,o){function r(){return n(i("group",{coordsize:f+" "+f,coordorigin:-l+" "+-l}),{width:f,height:f})}function s(t,s,a){e(p,e(n(r(),{rotation:360/o.lines*t+"deg",left:~~s}),e(n(i("roundrect",{arcsize:o.corners}),{width:l,height:o.width,left:o.radius,top:-o.width>>1,filter:a}),i("fill",{color:o.color,opacity:o.opacity}),i("stroke",{opacity:0}))))}var a,l=o.length+o.width,f=2*l,d=2*-(o.width+o.length)+"px",p=n(r(),{position:"absolute",top:d,left:d});if(o.shadow)for(a=1;a<=o.lines;a++)s(a,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(a=1;a<=o.lines;a++)s(a);return e(t,p)},a.prototype.opacity=function(t,e,i,o){var n=t.firstChild;o=o.shadow&&o.lines||0,n&&e+o<n.childNodes.length&&(n=n.childNodes[e+o],n=n&&n.firstChild,n=n&&n.firstChild,n&&(n.opacity=i))}}var f,d=["webkit","Moz","ms","O"],p={},c=function(){var i=t("style",{type:"text/css"});return e(document.getElementsByTagName("head")[0],i),i.sheet||i.styleSheet}(),u={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};a.defaults={},r(a.prototype,{spin:function(e){this.stop();var i,o,r=this,a=r.opts,l=r.el=n(t(0,{className:a.className}),{position:a.position,width:0,zIndex:a.zIndex}),d=a.radius+a.length+a.width;if(e&&(e.insertBefore(l,e.firstChild||null),o=s(e),i=s(l),n(l,{left:("auto"==a.left?o.x-i.x+(e.offsetWidth>>1):parseInt(a.left,10)+d)+"px",top:("auto"==a.top?o.y-i.y+(e.offsetHeight>>1):parseInt(a.top,10)+d)+"px"})),l.setAttribute("role","progressbar"),r.lines(l,r.opts),!f){var p,c=0,u=(a.lines-1)*(1-a.direction)/2,h=a.fps,m=h/a.speed,y=(1-a.opacity)/(m*a.trail/100),g=m/a.lines;!function v(){c++;for(var t=0;t<a.lines;t++)p=Math.max(1-(c+(a.lines-t)*g)%m*y,a.opacity),r.opacity(l,t*a.direction+u,p,a);r.timeout=r.el&&setTimeout(v,~~(1e3/h))}()}return r},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=void 0),this},lines:function(o,r){function s(e,i){return n(t(),{position:"absolute",width:r.length+r.width+"px",height:r.width+"px",background:e,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/r.lines*l+r.rotate)+"deg) translate("+r.radius+"px,0)",borderRadius:(r.corners*r.width>>1)+"px"})}for(var a,l=0,d=(r.lines-1)*(1-r.direction)/2;l<r.lines;l++)a=n(t(),{position:"absolute",top:1+~(r.width/2)+"px",transform:r.hwaccel?"translate3d(0,0,0)":"",opacity:r.opacity,animation:f&&i(r.opacity,r.trail,d+l*r.direction,r.lines)+" "+1/r.speed+"s linear infinite"}),r.shadow&&e(a,n(s("#000","0 0 4px #000"),{top:"2px"})),e(o,e(a,s(r.color,"0 0 1px rgba(0,0,0,.1)")));return o},opacity:function(t,e,i){e<t.childNodes.length&&(t.childNodes[e].style.opacity=i)}});var h=n(t("group"),{behavior:"url(#default#VML)"});return!o(h,"transform")&&h.adj?l():f=o(h,"animation"),a});
}

function laddaJs(){
  !function(t,e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(["spin"],e):t.Ladda=e(t.Spinner)}(this,function(t){"use strict";function e(t){if("undefined"==typeof t)return void console.warn("Ladda button target must be defined.");t.querySelector(".ladda-label")||(t.innerHTML='<span class="ladda-label">'+t.innerHTML+"</span>");var e=i(t),n=document.createElement("span");n.className="ladda-spinner",t.appendChild(n);var r,a={start:function(){return t.setAttribute("disabled",""),t.setAttribute("data-loading",""),clearTimeout(r),e.spin(n),this.setProgress(0),this},startAfter:function(t){return clearTimeout(r),r=setTimeout(function(){a.start()},t),this},stop:function(){return t.removeAttribute("disabled"),t.removeAttribute("data-loading"),clearTimeout(r),r=setTimeout(function(){e.stop()},1e3),this},toggle:function(){return this.isLoading()?this.stop():this.start(),this},setProgress:function(e){e=Math.max(Math.min(e,1),0);var n=t.querySelector(".ladda-progress");0===e&&n&&n.parentNode?n.parentNode.removeChild(n):(n||(n=document.createElement("div"),n.className="ladda-progress",t.appendChild(n)),n.style.width=(e||0)*t.offsetWidth+"px")},enable:function(){return this.stop(),this},disable:function(){return this.stop(),t.setAttribute("disabled",""),this},isLoading:function(){return t.hasAttribute("data-loading")}};return o.push(a),a}function n(t,n){n=n||{};var r=[];"string"==typeof t?r=a(document.querySelectorAll(t)):"object"==typeof t&&"string"==typeof t.nodeName&&(r=[t]);for(var i=0,o=r.length;o>i;i++)!function(){var t=r[i];if("function"==typeof t.addEventListener){var a=e(t),o=-1;t.addEventListener("click",function(){a.startAfter(1),"number"==typeof n.timeout&&(clearTimeout(o),o=setTimeout(a.stop,n.timeout)),"function"==typeof n.callback&&n.callback.apply(null,[a])},!1)}}()}function r(){for(var t=0,e=o.length;e>t;t++)o[t].stop()}function i(e){var n,r=e.offsetHeight;r>32&&(r*=.8),e.hasAttribute("data-spinner-size")&&(r=parseInt(e.getAttribute("data-spinner-size"),10)),e.hasAttribute("data-spinner-color")&&(n=e.getAttribute("data-spinner-color"));var i=12,a=.2*r,o=.6*a,s=7>a?2:3;return new t({color:n||"#fff",lines:i,radius:a,length:o,width:s,zIndex:"auto",top:"auto",left:"auto",className:""})}function a(t){for(var e=[],n=0;n<t.length;n++)e.push(t[n]);return e}var o=[];return{bind:n,create:e,stopAll:r}});
}

function jForm(){
  !function(e){function t(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}e.fn.ajaxSubmit=function(a){function r(t){for(var r=new FormData,n=0;n<t.length;n++)"file"!=t[n].type&&r.append(t[n].name,t[n].value);if(u.find("input:file:enabled").each(function(){var t=e(this).attr("name"),a=this.files;if(t)for(var n=0;n<a.length;n++)r.append(t,a[n])}),a.extraData)for(var i in a.extraData)r.append(i,a.extraData[i]);a.data=null;var o=e.extend(!0,{},e.ajaxSettings,a,{contentType:!1,processData:!1,cache:!1,type:"POST"});o.context=o.context||o,o.data=null;var s=o.beforeSend;o.beforeSend=function(e,t){t.data=r,e.upload&&(e.upload.onprogress=function(e){t.progress(e.position,e.total)}),s&&s.call(t,e,a)},e.ajax(o)}function n(r){function n(e){var t=e.contentWindow?e.contentWindow.document:e.contentDocument?e.contentDocument:e.document;return t}function o(){function a(){try{var e=n(v).readyState;t("state = "+e),"uninitialized"==e.toLowerCase()&&setTimeout(a,50)}catch(r){t("Server abort: ",r," (",r.name,")"),s(k),y&&clearTimeout(y),y=void 0}}var r=u.attr("target"),o=u.attr("action");T.setAttribute("target",d),i||T.setAttribute("method","POST"),o!=f.url&&T.setAttribute("action",f.url),f.skipEncodingOverride||i&&!/post/i.test(i)||u.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),f.timeout&&(y=setTimeout(function(){b=!0,s(j)},f.timeout));var l=[];try{if(f.extraData)for(var c in f.extraData)l.push(e('<input type="hidden" name="'+c+'">').attr("value",f.extraData[c]).appendTo(T)[0]);f.iframeTarget||(p.appendTo("body"),v.attachEvent?v.attachEvent("onload",s):v.addEventListener("load",s,!1)),setTimeout(a,15),T.submit()}finally{T.setAttribute("action",o),r?T.setAttribute("target",r):u.removeAttr("target"),e(l).remove()}}function s(a){if(!h.aborted&&!E){try{L=n(v)}catch(r){t("cannot access response document: ",r),a=k}if(a===j&&h)return void h.abort("timeout");if(a==k&&h)return void h.abort("server abort");if(L&&L.location.href!=f.iframeSrc||b){v.detachEvent?v.detachEvent("onload",s):v.removeEventListener("load",s,!1);var i,o="success";try{if(b)throw"timeout";var u="xml"==f.dataType||L.XMLDocument||e.isXMLDoc(L);if(t("isXml="+u),!u&&window.opera&&(null==L.body||""==L.body.innerHTML)&&--M)return t("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var l=L.body?L.body:L.documentElement;h.responseText=l?l.innerHTML:null,h.responseXML=L.XMLDocument?L.XMLDocument:L,u&&(f.dataType="xml"),h.getResponseHeader=function(e){var t={"content-type":f.dataType};return t[e]},l&&(h.status=Number(l.getAttribute("status"))||h.status,h.statusText=l.getAttribute("statusText")||h.statusText);var c=(f.dataType||"").toLowerCase(),d=/(json|script|text)/.test(c);if(d||f.textarea){var g=L.getElementsByTagName("textarea")[0];if(g)h.responseText=g.value,h.status=Number(g.getAttribute("status"))||h.status,h.statusText=g.getAttribute("statusText")||h.statusText;else if(d){var x=L.getElementsByTagName("pre")[0],T=L.getElementsByTagName("body")[0];x?h.responseText=x.textContent?x.textContent:x.innerText:T&&(h.responseText=T.textContent?T.textContent:T.innerText)}}else"xml"!=c||h.responseXML||null==h.responseText||(h.responseXML=F(h.responseText));try{A=O(h,c,f)}catch(a){o="parsererror",h.error=i=a||o}}catch(a){t("error caught: ",a),o="error",h.error=i=a||o}h.aborted&&(t("upload aborted"),o=null),h.status&&(o=h.status>=200&&h.status<300||304===h.status?"success":"error"),"success"===o?(f.success&&f.success.call(f.context,A,"success",h),m&&e.event.trigger("ajaxSuccess",[h,f])):o&&(void 0==i&&(i=h.statusText),f.error&&f.error.call(f.context,h,o,i),m&&e.event.trigger("ajaxError",[h,f,i])),m&&e.event.trigger("ajaxComplete",[h,f]),m&&!--e.active&&e.event.trigger("ajaxStop"),f.complete&&f.complete.call(f.context,h,o),E=!0,f.timeout&&clearTimeout(y),setTimeout(function(){f.iframeTarget||p.remove(),h.responseXML=null},100)}}}var l,c,f,m,d,p,v,h,g,x,b,y,T=u[0],S=!!e.fn.prop;if(r)if(S)for(c=0;c<r.length;c++)l=e(T[r[c].name]),l.prop("disabled",!1);else for(c=0;c<r.length;c++)l=e(T[r[c].name]),l.removeAttr("disabled");if(e(":input[name=submit],:input[id=submit]",T).length)return void alert('Error: Form elements must not have name or id of "submit".');if(f=e.extend(!0,{},e.ajaxSettings,a),f.context=f.context||f,d="jqFormIO"+(new Date).getTime(),f.iframeTarget?(p=e(f.iframeTarget),x=p.attr("name"),null==x?p.attr("name",d):d=x):(p=e('<iframe name="'+d+'" src="'+f.iframeSrc+'" />'),p.css({position:"absolute",top:"-1000px",left:"-1000px"})),v=p[0],h={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(a){var r="timeout"===a?"timeout":"aborted";t("aborting upload... "+r),this.aborted=1,p.attr("src",f.iframeSrc),h.error=r,f.error&&f.error.call(f.context,h,r,a),m&&e.event.trigger("ajaxError",[h,f,r]),f.complete&&f.complete.call(f.context,h,r)}},m=f.global,m&&!e.active++&&e.event.trigger("ajaxStart"),m&&e.event.trigger("ajaxSend",[h,f]),f.beforeSend&&f.beforeSend.call(f.context,h,f)===!1)return void(f.global&&e.active--);if(!h.aborted){g=T.clk,g&&(x=g.name,x&&!g.disabled&&(f.extraData=f.extraData||{},f.extraData[x]=g.value,"image"==g.type&&(f.extraData[x+".x"]=T.clk_x,f.extraData[x+".y"]=T.clk_y)));var j=1,k=2,w=e("meta[name=csrf-token]").attr("content"),D=e("meta[name=csrf-param]").attr("content");D&&w&&(f.extraData=f.extraData||{},f.extraData[D]=w),f.forceSync?o():setTimeout(o,10);var A,L,E,M=50,F=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},X=e.parseJSON||function(e){return window.eval("("+e+")")},O=function(t,a,r){var n=t.getResponseHeader("content-type")||"",i="xml"===a||!a&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),r&&r.dataFilter&&(o=r.dataFilter(o,a)),"string"==typeof o&&("json"===a||!a&&n.indexOf("json")>=0?o=X(o):("script"===a||!a&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o}}}if(!this.length)return t("ajaxSubmit: skipping submit process - no element selected"),this;var i,o,s,u=this;"function"==typeof a&&(a={success:a}),i=this.attr("method"),o=this.attr("action"),s="string"==typeof o?e.trim(o):"",s=s||window.location.href||"",s&&(s=(s.match(/^([^#]+)/)||[])[1]),a=e.extend(!0,{url:s,success:e.ajaxSettings.success,type:i||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},a);var l={};if(this.trigger("form-pre-serialize",[this,a,l]),l.veto)return t("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(a.beforeSerialize&&a.beforeSerialize(this,a)===!1)return t("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var c=a.traditional;void 0===c&&(c=e.ajaxSettings.traditional);var f,m=this.formToArray(a.semantic);if(a.data&&(a.extraData=a.data,f=e.param(a.data,c)),a.beforeSubmit&&a.beforeSubmit(m,this,a)===!1)return t("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[m,this,a,l]),l.veto)return t("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var d=e.param(m,c);f&&(d=d?d+"&"+f:f),"GET"==a.type.toUpperCase()?(a.url+=(a.url.indexOf("?")>=0?"&":"?")+d,a.data=null):a.data=d;var p=[];if(a.resetForm&&p.push(function(){u.resetForm()}),a.clearForm&&p.push(function(){u.clearForm(a.includeHidden)}),!a.dataType&&a.target){var v=a.success||function(){};p.push(function(t){var r=a.replaceTarget?"replaceWith":"html";e(a.target)[r](t).each(v,arguments)})}else a.success&&p.push(a.success);a.success=function(e,t,r){for(var n=a.context||a,i=0,o=p.length;o>i;i++)p[i].apply(n,[e,t,r||u,u])};var h=!1,g=h.length>0,x="multipart/form-data",b=u.attr("enctype")==x||u.attr("encoding")==x,y=!!(g&&h.get(0).files&&window.FormData);t("fileAPI :"+y);var T=(g||b)&&!y;return a.iframe!==!1&&(a.iframe||T)?a.closeKeepAlive?e.get(a.closeKeepAlive,function(){n(m)}):n(m):(g||b)&&y?(a.progress=a.progress||e.noop,r(m)):e.ajax(a),this.trigger("form-submit-notify",[this,a]),this},e.fn.ajaxForm=function(a){if(0===this.length){var r={s:this.selector,c:this.context};return!e.isReady&&r.s?(t("DOM not ready, queuing ajaxForm"),e(function(){e(r.s,r.c).ajaxForm(a)}),this):(t("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return this.ajaxFormUnbind().bind("submit.form-plugin",function(t){t.isDefaultPrevented()||(t.preventDefault(),e(this).ajaxSubmit(a))}).bind("click.form-plugin",function(t){var a=t.target,r=e(a);if(!r.is(":submit,input:image")){var n=r.closest(":submit");if(0==n.length)return;a=n[0]}var i=this;if(i.clk=a,"image"==a.type)if(void 0!=t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=r.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-a.offsetLeft,i.clk_y=t.pageY-a.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)})},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t){var a=[];if(0===this.length)return a;var r=this[0],n=t?r.getElementsByTagName("*"):r.elements;if(!n)return a;var i,o,s,u,l,c,f;for(i=0,c=n.length;c>i;i++)if(l=n[i],s=l.name)if(t&&r.clk&&"image"==l.type)l.disabled||r.clk!=l||(a.push({name:s,value:e(l).val(),type:l.type}),a.push({name:s+".x",value:r.clk_x},{name:s+".y",value:r.clk_y}));else if(u=e.fieldValue(l,!0),u&&u.constructor==Array)for(o=0,f=u.length;f>o;o++)a.push({name:s,value:u[o]});else null!==u&&"undefined"!=typeof u&&a.push({name:s,value:u,type:l.type});if(!t&&r.clk){var m=e(r.clk),d=m[0];s=d.name,s&&!d.disabled&&"image"==d.type&&(a.push({name:s,value:m.val()}),a.push({name:s+".x",value:r.clk_x},{name:s+".y",value:r.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var a=[];return this.each(function(){var r=this.name;if(r){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)a.push({name:r,value:n[i]});else null!==n&&"undefined"!=typeof n&&a.push({name:this.name,value:n})}}),e.param(a)},e.fn.fieldValue=function(t){for(var a=[],r=0,n=this.length;n>r;r++){var i=this[r],o=e.fieldValue(i,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(a,o):a.push(o))}return a},e.fieldValue=function(t,a){var r=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===a&&(a=!0),a&&(!r||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,l="select-one"==n,c=l?o+1:u.length,f=l?o:0;c>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),l)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(e){var t=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,r=this.tagName.toLowerCase();t.test(a)||"textarea"==r||e&&/hidden/.test(a)?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==r&&(this.selectedIndex=-1)})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var a=this.type;if("checkbox"==a||"radio"==a)this.checked=t;else if("option"==this.tagName.toLowerCase()){var r=e(this).parent("select");t&&r[0]&&"select-one"==r[0].type&&r.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1}(jQuery);
}

function typedJs(){
  !function(t){"use strict";var s=function(s,e){this.el=t(s),this.options=t.extend({},t.fn.typed.defaults,e),this.isInput=this.el.is("input"),this.attr=this.options.attr,this.showCursor=this.isInput?!1:this.options.showCursor,this.elContent=this.attr?this.el.attr(this.attr):this.el.text(),this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};s.prototype={constructor:s,init:function(){var t=this;t.timeout=setTimeout(function(){for(var s=0;s<t.strings.length;++s)t.sequence[s]=s;t.shuffle&&(t.sequence=t.shuffleArray(t.sequence)),t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},t.startDelay)},build:function(){this.showCursor===!0&&(this.cursor=t('<span class="typed-cursor">'+this.cursorChar+"</span>"),this.el.after(this.cursor)),this.init()},typewrite:function(t,s){if(this.stop!==!0){var e=Math.round(70*Math.random())+this.typeSpeed,o=this;o.timeout=setTimeout(function(){var e=0,r=t.substr(s);if("^"===r.charAt(0)){var i=1;/^\^\d+/.test(r)&&(r=/\d+/.exec(r)[0],i+=r.length,e=parseInt(r)),t=t.substring(0,s)+t.substring(s+i)}if("html"===o.contentType){var n=t.substr(s).charAt(0);if("<"===n||"&"===n){var a="",h="";for(h="<"===n?">":";";t.substr(s).charAt(0)!==h;)a+=t.substr(s).charAt(0),s++;s++,a+=h}}o.timeout=setTimeout(function(){if(s===t.length){if(o.options.onStringTyped(o.arrayPos),o.arrayPos===o.strings.length-1&&(o.options.callback(),o.curLoop++,o.loop===!1||o.curLoop===o.loopCount))return;o.timeout=setTimeout(function(){o.backspace(t,s)},o.backDelay)}else{0===s&&o.options.preStringTyped(o.arrayPos);var e=t.substr(0,s+1);o.attr?o.el.attr(o.attr,e):o.isInput?o.el.val(e):"html"===o.contentType?o.el.html(e):o.el.text(e),s++,o.typewrite(t,s)}},e)},e)}},backspace:function(t,s){if(this.stop!==!0){var e=Math.round(70*Math.random())+this.backSpeed,o=this;o.timeout=setTimeout(function(){if("html"===o.contentType&&">"===t.substr(s).charAt(0)){for(var e="";"<"!==t.substr(s).charAt(0);)e-=t.substr(s).charAt(0),s--;s--,e+="<"}var r=t.substr(0,s);o.attr?o.el.attr(o.attr,r):o.isInput?o.el.val(r):"html"===o.contentType?o.el.html(r):o.el.text(r),s>o.stopNum?(s--,o.backspace(t,s)):s<=o.stopNum&&(o.arrayPos++,o.arrayPos===o.strings.length?(o.arrayPos=0,o.shuffle&&(o.sequence=o.shuffleArray(o.sequence)),o.init()):o.typewrite(o.strings[o.sequence[o.arrayPos]],s))},e)}},shuffleArray:function(t){var s,e,o=t.length;if(o)for(;--o;)e=Math.floor(Math.random()*(o+1)),s=t[e],t[e]=t[o],t[o]=s;return t},reset:function(){var t=this;clearInterval(t.timeout);var s=this.el.attr("id");this.el.after('<span id="'+s+'"/>'),this.el.remove(),"undefined"!=typeof this.cursor&&this.cursor.remove(),t.options.resetCallback()}},t.fn.typed=function(e){return this.each(function(){var o=t(this),r=o.data("typed"),i="object"==typeof e&&e;r||o.data("typed",r=new s(this,i)),"string"==typeof e&&r[e]()})},t.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window.jQuery);
}


// language switcher
function languageSwitcher() {
  // preparing language file
var aLangKeys=new Array();
aLangKeys['ge']=new Array();
aLangKeys['en']=new Array();

aLangKeys['ge']['home']='მთავარი';
aLangKeys['ge']['services']='სერვისები';
aLangKeys['ge']['privilegies']='უპირატესობები';
aLangKeys['ge']['coming_soon']='პროგრამული უზრუნველყოფა';
aLangKeys['ge']['contact']='კონტაქტი';
aLangKeys['ge']['blog']='ბლოგი';
aLangKeys['ge']['career']='შემოგვიერთდით';
aLangKeys['ge']['home_text']='სარეკლამო კამპანიის დაგეგმვისა და წარმოების მოქნილი და ინოვაციური მედია პლათფორმა';
aLangKeys['ge']['typing_text']='';
aLangKeys['ge']['creative']='კრეატიული, თანამედროვე და მოძრავი მაუწყებლობა თბილისის ქუჩებში';
aLangKeys['ge']['audiens']='დაუმიზნე შენი გზავნილი ზუსტ აუდიტორიას სასურველ დროსა და ადგილას';
aLangKeys['ge']['statistic']='შეაფასე რეკლამის ეფექტურობა სანდო სტატისტიკაზე დაყრდნობით';
aLangKeys['ge']['budget']='განათავსე რეკლამა მარტივად და მართე სარეკლამო ბიუჯეტი';
aLangKeys['ge']['real_time']='მართე კამპანია რეალურ დროში';
aLangKeys['ge']['online']='მიიღე ონლაინ მხარდაჭერა';
aLangKeys['ge']['services1']='სარეკლამო მასალის ატვირთვა ნებისმიერი ადგილიდან';
aLangKeys['ge']['services2']='სამიზნე აუდიტორიის შერჩევა ადგილმდებარეობის და/ან დროის მიხედვით';
aLangKeys['ge']['services3']='ზუსტი სტატისტიკური მონაცემების მიღება';
aLangKeys['ge']['services4']='ადგილმდებარეობასა და რეკლამის შინაარსზე თვალყურის მიდევნება რეალურ დროში';
aLangKeys['ge']['services4']='ადგილმდებარეობასა და რეკლამის შინაარსზე თვალყურის მიდევნება რეალურ დროში';
aLangKeys['ge']['privilegies-text']='3/1-ში ინტეგრირებული მარკეტინგული არხი:';
aLangKeys['ge']['privilegies-bold']='გარე, ციფრული, მოძრავი';
aLangKeys['ge']['privilegies1']='თვისობრივად გაუმჯობესებული ბრენდი მკვეთრი ფერებით';
aLangKeys['ge']['privilegies2']='მაუწყებლობა დროსა და სივრცეში';
aLangKeys['ge']['privilegies3']='თანაბრად მნათი დღისითა და ღამით';
aLangKeys['ge']['privilegies4']='აუდიტორიის ტარგეტირება ზონის, უბნისა და ქუჩის მიხედვითაც კი';
aLangKeys['ge']['privilegies5']='მოქნილი, სრაფი და მაღალი სიზუსტის გადახდის სისტემა';
aLangKeys['ge']['privilegies6']='მიზნობრივი მესიჯის დროსა და სივრცეში მიწოდების საუკეთესო საშუალება';
aLangKeys['ge']['info-text1']='მომხმარებლის რეგისტრაცია და ანგარიშის შექმნა';
aLangKeys['ge']['info-text2']='სარეკლამო მასალის ატვირთვა და რედაქტირება';
aLangKeys['ge']['info-text3']='სარეკლამო კამპანიის შექმნა და მართვა';
aLangKeys['ge']['info-text4']='ბიუჯეტის დაგეგმვა და კონტროლი';
aLangKeys['ge']['info-text5']='მუდმივად განახლებადი სტატისტიკური მონაცემების მიღება';
aLangKeys['ge']['screen']='ეკრანი:';
aLangKeys['ge']['moving']='დინამიკა:';
aLangKeys['ge']['view']='ხილვადობა:';
aLangKeys['ge']['targeting']='გეო ტარგეთინგი:';
aLangKeys['ge']['real_timing']='ანგარიშსწორება რეალურ დროში:';
aLangKeys['ge']['campagnes']='კამპანიები:';
aLangKeys['ge']['book']='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.';
aLangKeys['ge']['docs']='Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat possimus.';
aLangKeys['ge']['code']='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.';
aLangKeys['ge']['screenshots-text']='ka_ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.';
aLangKeys['ge']['contact_us']='დაგვიკავშირდით';
aLangKeys['ge']['contact_name']='სახელი';
aLangKeys['ge']['contact_text']='ტექსტი';
aLangKeys['ge']['contact_email']='Email';
aLangKeys['ge']['contact_send']='გაგზავნა';
aLangKeys['ge']['contact_info']='საკონტაქტო ინფორმაცია';
aLangKeys['ge']['contact_city']='თბილისი, ქსნის ქ. #36';



aLangKeys['en']['home']='Home';
aLangKeys['en']['services']='Services';
aLangKeys['en']['privilegies']='Advantages';
aLangKeys['en']['coming_soon']='Software';
aLangKeys['en']['contact']='Contact us';
aLangKeys['en']['blog']='Blog';
aLangKeys['en']['career']='JOIN US';
aLangKeys['en']['home_text']='Deliver right message: to the right audience, at the right time';
aLangKeys['en']['creative']='Creative, modern and mobile broadcasting  in the streets of Tbilisi';
aLangKeys['en']['audiens']='Reach your target audience on a location and time basis';
aLangKeys['en']['statistic']='Evaluate the efficacy of the message based upon our bulletproof statistical data';
aLangKeys['en']['budget']='Upload an advertisement and manage your marketing budget with ease';
aLangKeys['en']['real_time']='Manage Advertising Campaigns in real-time';
aLangKeys['en']['online']='Get continual online support';
aLangKeys['en']['privilegies-text']='3/1 INTEGRATED MARKETING CHANNEL:';
aLangKeys['en']['privilegies-bold']='OUTDOOR DIGITAL MOBILE';
aLangKeys['en']['privilegies1']='Enriched brand with vivid colours';
aLangKeys['en']['privilegies2']='Broadcasting in time and space';
aLangKeys['en']['privilegies3']='As luminous during the day as it is during the night';
aLangKeys['en']['privilegies4']='Audience targeting by area, district and even street';
aLangKeys['en']['privilegies5']='Seamless and highly accurate payment-processing';
aLangKeys['en']['privilegies6']='Multi-layered brand stories and targeted messages based on time/event';
aLangKeys['en']['screen']='Display:';
aLangKeys['en']['moving']='On The Go:';
aLangKeys['en']['view']='Visibility:';
aLangKeys['en']['targeting']='Geo-fencing:';
aLangKeys['en']['real_timing']='Pay As You Go:';
aLangKeys['en']['campagnes']='Campaigns:';
aLangKeys['en']['info-text1']='Account creation and user registration';
aLangKeys['en']['info-text2']='Advertising material uploading and editing';
aLangKeys['en']['info-text3']='Advertising campaign creation and management';
aLangKeys['en']['info-text4']='Budget planning and control';
aLangKeys['en']['info-text5']='Accessibility of constantly updated statistical data';
aLangKeys['en']['book']='book';
aLangKeys['en']['docs']='docs';
aLangKeys['en']['code']='code';
aLangKeys['en']['screenshots-text']='screenshots-text';
aLangKeys['en']['contact_us']='Contact Us';
aLangKeys['en']['contact_name']='Name';
aLangKeys['en']['contact_text']='Message';
aLangKeys['en']['contact_email']='Email';
aLangKeys['en']['contact_send']='Send';
aLangKeys['en']['contact_info']='Contact Information';
aLangKeys['en']['contact_city']='Tbilisi, #36 Ksani str.';





$(document).ready(function() {

  // onclick behavior
  $('.lang').click( function() {
      var lang = $(this).attr('id'); // obtain language id

      // translate all translatable elements and change font
      $('.translate').each(function(i){
        if(lang === "en"){
              $(this).text(aLangKeys[lang][ $(this).attr('key') ]).addClass("font-change");
              $(".menu_bar_navigation ul li a").css({"font-size":"15px", 'text-transform':'uppercase'});
              $("h6").css({"font-size":"1.0rem", });
              $("h3").css({"font-size":"1.2rem", });
              $(".information p").css({"font-size":"11px", });
              $(".feature_content p").css({"font-size":"0.92rem", });
              $(".input-field label").css({"font-size":"1.2rem", });


        }else{
              $(this).text(aLangKeys[lang][ $(this).attr('key') ]).removeClass("font-change");
              $(".menu_bar_navigation ul li a").css({"font-size":"11px",
                                                      "transition":"none",
                                                      "line-height":"48px",
                                                      });
              $("h6").css({"font-size":"14px", });
              $("h3").css({"font-size":"0.9rem", });
              $(".information p").css({"font-size":"9px", });
              $(".feature_content p").css({"font-size":"12px", });
              $(".input-field label").css({"font-size":"0.8rem", });
              $('#slogan + h6').css({'fontFamily':'studio'})

        }

      });

  } );

});

}


/* myscripts scripts */
function myScripts() {
  var docHeight = $(window).height() / 15 - 200,
    $body = $("html, body");
  $("document").ready(function() {
    $("#subscribe-form").ajaxForm({
      target: "#preview",
      success: function() {
        $("#preview").addClass("show_message")
      }
    }), setTimeout(function() {
      $("#polyglotLanguageSwitcher").fadeIn()
    }, 3e3), $(function() {
      $(".typing-text").typed({
        strings: [" ", "To the right audience", "At the right place", "At the right time", "EVERYTIME"],
        typeSpeed: 30,
        backDelay: 2e3,
        loop: !0,
        contentType: "html",
        loopCount: !1,
        resetCallback: function() {
          newTyped()
        }
      }), $(".reset").click(function() {
        $(".typing-text").typed("reset")
      })
    });
    var e = 0;
    $(window).scroll(function(t) {
      var o = $(this).scrollTop();
      o > e && $(".moving-arrow img").fadeOut(500), o === e && $(".moving-arrow img").fadeIn(2e3)
    });
    var t = 700;
    $(window).scroll(function(e) {
      var o = $(this).scrollTop();
      o > t ? $("#hiddenText").css({
        opacity: 1
      }) : $("#hiddenText").css({
        opacity: 0
      })
    });
    var o = $(".moving-arrow");
    o.on("click", function() {
      $("html,body").animate({
        scrollTop: $(this).offset().top - docHeight
      }, 1e3), setTimeout(function() {
        $("#feature1 p").fadeIn(3e3)
      }, 1200)
    });
    var n = window.innerWidth;
    770 > n && $("section div").removeClass("more_info_anim1 more_info_anim2 more_info_anim3 more_info_anim4 more_info_anim5 more_info_anim6 more_info_anim7 more_info_anim8 more_info_anim9 more_info_anim10 about_video_anim1 about_video_anim2 about_video_anim3 about_video_anim4 about_video_anim5 screenshots_anim1 screenshots_anim2 screenshots_anim3 screenshots_anim4 contact_anim1 contact_anim2"), 992 > n && $("#en").css({
      "margin-left": "27px"
    });
    var i = $(".career-menu");
    i.on("click", function() {
      $body.addClass("remove-scroll")
    }), $("#myModal").on("click", function(e) {
      e.target == this && $body.removeClass("remove-scroll")
    }), $(".modal-header > button, .modal-footer > button").on("click", function() {
      $body.removeClass("remove-scroll")
    }), $(".nav>li>a").click(function(e) {
      $("#myModal").scrollTop()
    });
  });
  var showRight = document.getElementById("showRight"),
    hideRight = document.getElementById("hideRight"),
    menuRight = document.getElementById("cbp-spmenu-s2"),
    body = document.body;
  showRight.onclick = function(e) {
    "use strict";
    return e.preventDefault(), classie.toggle(this, "active"), classie.toggle(menuRight, "cbp-spmenu-open"), disableOther("showRight"), !1
  }, hideRight.onclick = function(e) {
    "use strict";
    return e.preventDefault(), classie.toggle(this, "active"), classie.toggle(menuRight, "cbp-spmenu-open"), disableOther("showRight"), !1
  };
  var $head = $("#menu_bar");
  $(".menu_bar-waypoint").each(function(e) {
    var t = $(this),
      o = t.data("animateDown"),
      n = t.data("animateUp");
    t.waypoint(function(e) {
      "down" === e && o ? $head.attr("class", "menu_bar " + o) : "up" === e && n && $head.attr("class", "menu_bar " + n)
    }, {
      offset: function() {
        return navbarheight = $("#menu_bar").outerHeight() + 1, navbarheight
      }
    })
  });
  var xWidth = $(window).width();
  xWidth >= 960 && $(window).resize(function() {
    $("#information").animate({
      left: "-=30px"
    }), $(".mobile-row").removeClass("row").addClass("container")
  });

  var $twitter = $('.twitter-share-button');
  $twitter.removeClass('btn');
}
