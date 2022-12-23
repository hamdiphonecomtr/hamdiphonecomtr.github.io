// sticky sidebar plugin v1.5.0 ~ https://github.com/WeCodePixels/theia-sticky-sidebar
// ---------------------------------------------------------------------------------
!function(i){i.fn.theiaStickySidebar=function(t){function e(t,e){var a=o(t,e);a||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),i(document).on("scroll."+t.namespace,function(t,e){return function(a){var n=o(t,e);n&&i(this).unbind(a)}}(t,e)),i(window).on("resize."+t.namespace,function(t,e){return function(a){var n=o(t,e);n&&i(this).unbind(a)}}(t,e)))}function o(t,e){return t.initialized===!0||!(i("body").width()<t.minWidth)&&(a(t,e),!0)}function a(t,e){t.initialized=!0;var o=i("#theia-sticky-sidebar-stylesheet-"+t.namespace);0===o.length&&i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-'+t.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),e.each(function(){function e(){a.fixedScrollTop=0,a.sidebar.css({"min-height":"1px"}),a.stickySidebar.css({position:"static",width:"",transform:"none"})}function o(t){var e=t.height();return t.children().each(function(){e=Math.max(e,i(this).height())}),e}var a={};if(a.sidebar=i(this),a.options=t||{},a.container=i(a.options.containerSelector),0==a.container.length&&(a.container=a.sidebar.parent()),a.sidebar.parents().css("-webkit-transform","none"),a.sidebar.css({position:a.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),a.stickySidebar=a.sidebar.find(".theiaStickySidebar"),0==a.stickySidebar.length){var s=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;a.sidebar.find("script").filter(function(i,t){return 0===t.type.length||t.type.match(s)}).remove(),a.stickySidebar=i("<div>").addClass("theiaStickySidebar").append(a.sidebar.children()),a.sidebar.append(a.stickySidebar)}a.marginBottom=parseInt(a.sidebar.css("margin-bottom")),a.paddingTop=parseInt(a.sidebar.css("padding-top")),a.paddingBottom=parseInt(a.sidebar.css("padding-bottom"));var r=a.stickySidebar.offset().top,d=a.stickySidebar.outerHeight();a.stickySidebar.css("padding-top",1),a.stickySidebar.css("padding-bottom",1),r-=a.stickySidebar.offset().top,d=a.stickySidebar.outerHeight()-d-r,0==r?(a.stickySidebar.css("padding-top",0),a.stickySidebarPaddingTop=0):a.stickySidebarPaddingTop=1,0==d?(a.stickySidebar.css("padding-bottom",0),a.stickySidebarPaddingBottom=0):a.stickySidebarPaddingBottom=1,a.previousScrollTop=null,a.fixedScrollTop=0,e(),a.onScroll=function(a){if(a.stickySidebar.is(":visible")){if(i("body").width()<a.options.minWidth)return void e();if(a.options.disableOnResponsiveLayouts){var s=a.sidebar.outerWidth("none"==a.sidebar.css("float"));if(s+50>a.container.width())return void e()}var r=i(document).scrollTop(),d="static";if(r>=a.sidebar.offset().top+(a.paddingTop-a.options.additionalMarginTop)){var c,p=a.paddingTop+t.additionalMarginTop,b=a.paddingBottom+a.marginBottom+t.additionalMarginBottom,l=a.sidebar.offset().top,f=a.sidebar.offset().top+o(a.container),h=0+t.additionalMarginTop,g=a.stickySidebar.outerHeight()+p+b<i(window).height();c=g?h+a.stickySidebar.outerHeight():i(window).height()-a.marginBottom-a.paddingBottom-t.additionalMarginBottom;var u=l-r+a.paddingTop,S=f-r-a.paddingBottom-a.marginBottom,y=a.stickySidebar.offset().top-r,m=a.previousScrollTop-r;"fixed"==a.stickySidebar.css("position")&&"modern"==a.options.sidebarBehavior&&(y+=m),"stick-to-top"==a.options.sidebarBehavior&&(y=t.additionalMarginTop),"stick-to-bottom"==a.options.sidebarBehavior&&(y=c-a.stickySidebar.outerHeight()),y=m>0?Math.min(y,h):Math.max(y,c-a.stickySidebar.outerHeight()),y=Math.max(y,u),y=Math.min(y,S-a.stickySidebar.outerHeight());var k=a.container.height()==a.stickySidebar.outerHeight();d=(k||y!=h)&&(k||y!=c-a.stickySidebar.outerHeight())?r+y-a.sidebar.offset().top-a.paddingTop<=t.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==d){var v=i(document).scrollLeft();a.stickySidebar.css({position:"fixed",width:n(a.stickySidebar)+"px",transform:"translateY("+y+"px)",left:a.sidebar.offset().left+parseInt(a.sidebar.css("padding-left"))-v+"px",top:"0px"})}else if("absolute"==d){var x={};"absolute"!=a.stickySidebar.css("position")&&(x.position="absolute",x.transform="translateY("+(r+y-a.sidebar.offset().top-a.stickySidebarPaddingTop-a.stickySidebarPaddingBottom)+"px)",x.top="0px"),x.width=n(a.stickySidebar)+"px",x.left="",a.stickySidebar.css(x)}else"static"==d&&e();"static"!=d&&1==a.options.updateSidebarHeight&&a.sidebar.css({"min-height":a.stickySidebar.outerHeight()+a.stickySidebar.offset().top-a.sidebar.offset().top+a.paddingBottom}),a.previousScrollTop=r}},a.onScroll(a),i(document).on("scroll."+a.options.namespace,function(i){return function(){i.onScroll(i)}}(a)),i(window).on("resize."+a.options.namespace,function(i){return function(){i.stickySidebar.css({position:"static"}),i.onScroll(i)}}(a)),"undefined"!=typeof ResizeSensor&&new ResizeSensor(a.stickySidebar[0],function(i){return function(){i.onScroll(i)}}(a))})}function n(i){var t;try{t=i[0].getBoundingClientRect().width}catch(i){}return"undefined"==typeof t&&(t=i.width()),t}var s={containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"};return t=i.extend(s,t),t.additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,e(t,this),this}}(jQuery);
// --------------------------------------------------------------------
// Timeago plugin v1.6.7 ~ URL: https://github.com/rmm5t/jquery-timeago
// --------------------------------------------------------------------
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&"object"==typeof module.exports?t(require("jquery")):t(jQuery)}(function(t){t.timeago=function(e){return e instanceof Date?n(e):n("string"==typeof e?t.timeago.parse(e):"number"==typeof e?new Date(e):t.timeago.datetime(e))};var e=t.timeago;t.extend(t.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"1 dakika önce",minutes:"%d minutes",hour:"saat önce",hours:" %d saat önce",day:"1 gün önce",days:"%d gün önce",month:"ay önce",months:"%d ay önce",year:"1 yıl önce",years:"%d yıl önce",wordSeparator:" ",numbers:[]}},inWords:function(e){if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var i=this.settings.strings,a=i.prefixAgo,n=i.suffixAgo;if(this.settings.allowFuture&&e<0&&(a=i.prefixFromNow,n=i.suffixFromNow),!this.settings.allowPast&&e>=0)return this.settings.strings.inPast;var r=Math.abs(e)/1e3,o=r/60,s=o/60,u=s/24,m=u/365;function l(a,n){var r=t.isFunction(a)?a(n,e):a,o=i.numbers&&i.numbers[n]||n;return r.replace(/%d/i,o)}var d=r<45&&l(i.seconds,Math.round(r))||r<90&&l(i.minute,1)||o<45&&l(i.minutes,Math.round(o))||o<90&&l(i.hour,1)||s<24&&l(i.hours,Math.round(s))||s<42&&l(i.day,1)||u<30&&l(i.days,Math.round(u))||u<45&&l(i.month,1)||u<365&&l(i.months,Math.round(u/30))||m<1.5&&l(i.year,1)||l(i.years,Math.round(m)),h=i.wordSeparator||"";return void 0===i.wordSeparator&&(h=" "),t.trim([a,d,n].join(h))},parse:function(e){var i=t.trim(e);return i=(i=(i=(i=(i=i.replace(/\.\d+/,"")).replace(/-/,"/").replace(/-/,"/")).replace(/T/," ").replace(/Z/," UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2")).replace(/([\+\-]\d\d)$/," $100"),new Date(i)},datetime:function(i){var a=e.isTime(i)?t(i).attr("datetime"):t(i).attr("title");return e.parse(a)},isTime:function(e){return"time"===t(e).get(0).tagName.toLowerCase()}});var i={init:function(){i.dispose.call(this);var n=t.proxy(a,this);n();var r=e.settings;r.refreshMillis>0&&(this._timeagoInterval=setInterval(n,r.refreshMillis))},update:function(i){var n=i instanceof Date?i:e.parse(i);t(this).data("timeago",{datetime:n}),e.settings.localeTitle&&t(this).attr("title",n.toLocaleString()),a.apply(this)},updateFromDOM:function(){t(this).data("timeago",{datetime:e.parse(e.isTime(this)?t(this).attr("datetime"):t(this).attr("title"))}),a.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};function a(){var i=e.settings;if(i.autoDispose&&!t.contains(document.documentElement,this))return t(this).timeago("dispose"),this;var a=function(i){if(!(i=t(i)).data("timeago")){i.data("timeago",{datetime:e.datetime(i)});var a=t.trim(i.text());e.settings.localeTitle?i.attr("title",i.data("timeago").datetime.toLocaleString()):!(a.length>0)||e.isTime(i)&&i.attr("title")||i.attr("title",a)}return i.data("timeago")}(this);return isNaN(a.datetime)||(0===i.cutoff||Math.abs(r(a.datetime))<i.cutoff?t(this).text(n(a.datetime)):t(this).attr("title").length>0&&t(this).text(t(this).attr("title"))),this}function n(t){return e.inWords(r(t))}function r(t){return(new Date).getTime()-t.getTime()}t.fn.timeago=function(t,e){var a=t?i[t]:i.init;if(!a)throw new Error("Unknown function name'"+t+"' for timeago");return this.each(function(){a.call(this,e)}),this},document.createElement("abbr"),document.createElement("time")});
// ---------------
// LazyLoad plugin
// ---------------
!function(o){o.fn.lazy=function(){function constrI(c){var e,f=c,g=o(window),h=f.attr("data-style"),i=Math.round(f.width()),j=Math.round(f.height()),k="w"+i+"-h"+j+"-n",l=typeof data!=='undefined'&&data.noThumb||"https://1.bp.blogspot.com/-OQTT8OprpKI/Xses6gXJp6I/AAAAAAAAA88/j2ubRv-pRqUPrs8ZS9EP2O-m-t7a66kZACLcBGAsYHQ/s72-c/no-image.png";e=h.match("/s72-c")?h.replace("/s72-c","/"+k):h.match("=s72-c")?h.replace("=s72-c","="+k):h.match("/w72-h")?h.replace("/w72-h72-n","/"+k).replace("/w72-h72-p-k-no-nu","/"+k):h.match("=w72-h")?h.replace("=w72-h72-n","="+k).replace("=w72-h72-p-k-no-nu","="+k):h.match("resources.blogblog.com")?l.replace("/s72-c","/"+k).replace("=s72-c","="+k):h,f.is(":hidden")||g.on("load resize scroll",function o(){if(g.scrollTop()+g.height()>=f.offset().top){g.off("load resize scroll",o);var h=new Image;h.onload=function(){f.attr("style","background-image:url("+this.src+")").addClass("lazy")},h.src=e}}).trigger("scroll")}
return this.each(function(){constrI(o(this))})}}(jQuery);
