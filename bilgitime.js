!function(a){a.fn.theiaStickySidebar=function(b){function c(b,c){var e=d(b,c);e||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),a(document).on("scroll."+b.namespace,function(b,c){return function(e){var f=d(b,c);f&&a(this).unbind(e)}}(b,c)),a(window).on("resize."+b.namespace,function(b,c){return function(e){var f=d(b,c);f&&a(this).unbind(e)}}(b,c)))}function d(b,c){return b.initialized===!0||!(a("body").width()<b.minWidth)&&(e(b,c),!0)}function e(b,c){b.initialized=!0;var d=a("#theia-sticky-sidebar-stylesheet-"+b.namespace);0===d.length&&a("head").append(a('<style id="theia-sticky-sidebar-stylesheet-'+b.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),c.each(function(){function c(){e.fixedScrollTop=0,e.sidebar.css({"min-height":"1px"}),e.stickySidebar.css({position:"static",width:"",transform:"none"})}function d(b){var c=b.height();return b.children().each(function(){c=Math.max(c,a(this).height())}),c}var e={};if(e.sidebar=a(this),e.options=b||{},e.container=a(e.options.containerSelector),0==e.container.length&&(e.container=e.sidebar.parent()),e.sidebar.parents().css("-webkit-transform","none"),e.sidebar.css({position:e.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),e.stickySidebar=e.sidebar.find(".theiaStickySidebar"),0==e.stickySidebar.length){var g=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;e.sidebar.find("script").filter(function(a,b){return 0===b.type.length||b.type.match(g)}).remove(),e.stickySidebar=a("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()),e.sidebar.append(e.stickySidebar)}e.marginBottom=parseInt(e.sidebar.css("margin-bottom")),e.paddingTop=parseInt(e.sidebar.css("padding-top")),e.paddingBottom=parseInt(e.sidebar.css("padding-bottom"));var h=e.stickySidebar.offset().top,i=e.stickySidebar.outerHeight();e.stickySidebar.css("padding-top",1),e.stickySidebar.css("padding-bottom",1),h-=e.stickySidebar.offset().top,i=e.stickySidebar.outerHeight()-i-h,0==h?(e.stickySidebar.css("padding-top",0),e.stickySidebarPaddingTop=0):e.stickySidebarPaddingTop=1,0==i?(e.stickySidebar.css("padding-bottom",0),e.stickySidebarPaddingBottom=0):e.stickySidebarPaddingBottom=1,e.previousScrollTop=null,e.fixedScrollTop=0,c(),e.onScroll=function(e){if(e.stickySidebar.is(":visible")){if(a("body").width()<e.options.minWidth)return void c();if(e.options.disableOnResponsiveLayouts){var g=e.sidebar.outerWidth("none"==e.sidebar.css("float"));if(g+50>e.container.width())return void c()}var h=a(document).scrollTop(),i="static";if(h>=e.sidebar.offset().top+(e.paddingTop-e.options.additionalMarginTop)){var j,k=e.paddingTop+b.additionalMarginTop,l=e.paddingBottom+e.marginBottom+b.additionalMarginBottom,m=e.sidebar.offset().top,n=e.sidebar.offset().top+d(e.container),o=0+b.additionalMarginTop,p=e.stickySidebar.outerHeight()+k+l<a(window).height();j=p?o+e.stickySidebar.outerHeight():a(window).height()-e.marginBottom-e.paddingBottom-b.additionalMarginBottom;var q=m-h+e.paddingTop,r=n-h-e.paddingBottom-e.marginBottom,s=e.stickySidebar.offset().top-h,t=e.previousScrollTop-h;"fixed"==e.stickySidebar.css("position")&&"modern"==e.options.sidebarBehavior&&(s+=t),"stick-to-top"==e.options.sidebarBehavior&&(s=b.additionalMarginTop),"stick-to-bottom"==e.options.sidebarBehavior&&(s=j-e.stickySidebar.outerHeight()),s=t>0?Math.min(s,o):Math.max(s,j-e.stickySidebar.outerHeight()),s=Math.max(s,q),s=Math.min(s,r-e.stickySidebar.outerHeight());var u=e.container.height()==e.stickySidebar.outerHeight();i=!u&&s==o||!u&&s==j-e.stickySidebar.outerHeight()?"fixed":h+s-e.sidebar.offset().top-e.paddingTop<=b.additionalMarginTop?"static":"absolute"}if("fixed"==i){var v=a(document).scrollLeft();e.stickySidebar.css({position:"fixed",width:f(e.stickySidebar)+"px",transform:"translateY("+s+"px)",left:e.sidebar.offset().left+parseInt(e.sidebar.css("padding-left"))-v+"px",top:"0px"})}else if("absolute"==i){var w={};"absolute"!=e.stickySidebar.css("position")&&(w.position="absolute",w.transform="translateY("+(h+s-e.sidebar.offset().top-e.stickySidebarPaddingTop-e.stickySidebarPaddingBottom)+"px)",w.top="0px"),w.width=f(e.stickySidebar)+"px",w.left="",e.stickySidebar.css(w)}else"static"==i&&c();"static"!=i&&1==e.options.updateSidebarHeight&&e.sidebar.css({"min-height":e.stickySidebar.outerHeight()+e.stickySidebar.offset().top-e.sidebar.offset().top+e.paddingBottom}),e.previousScrollTop=h}},e.onScroll(e),a(document).on("scroll."+e.options.namespace,function(a){return function(){a.onScroll(a)}}(e)),a(window).on("resize."+e.options.namespace,function(a){return function(){a.stickySidebar.css({position:"static"}),a.onScroll(a)}}(e)),"undefined"!=typeof ResizeSensor&&new ResizeSensor(e.stickySidebar[0],function(a){return function(){a.onScroll(a)}}(e))})}function f(a){var b;try{b=a[0].getBoundingClientRect().width}catch(a){}return"undefined"==typeof b&&(b=a.width()),b}var g={containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"};return b=a.extend(g,b),b.additionalMarginTop=parseInt(b.additionalMarginTop)||0,b.additionalMarginBottom=parseInt(b.additionalMarginBottom)||0,c(b,this),this}}(jQuery),!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof module&&"object"==typeof module.exports?require("jquery"):jQuery)}(function(a){function d(){var c=b.settings;if(c.autoDispose&&!a.contains(document.documentElement,this))return a(this).timeago("dispose"),this;var d=function(c){if(!(c=a(c)).data("timeago")){c.data("timeago",{datetime:b.datetime(c)});var d=a.trim(c.text());b.settings.localeTitle?c.attr("title",c.data("timeago").datetime.toLocaleString()):!(d.length>0)||b.isTime(c)&&c.attr("title")||c.attr("title",d)}return c.data("timeago")}(this);return isNaN(d.datetime)||(0===c.cutoff||Math.abs(f(d.datetime))<c.cutoff?a(this).text(e(d.datetime)):a(this).attr("title").length>0&&a(this).text(a(this).attr("title"))),this}function e(a){return b.inWords(f(a))}function f(a){return(new Date).getTime()-a.getTime()}a.timeago=function(b){return e(b instanceof Date?b:"string"==typeof b?a.timeago.parse(b):"number"==typeof b?new Date(b):a.timeago.datetime(b))};var b=a.timeago;a.extend(a.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"",suffixFromNow:"from now",inPast:"any moment now",seconds:"10 saniye \xf6nce",minute:"1 dakika \xf6nce",minutes:"%d dakika \xf6nce",hour:"1 saat \xf6nce",hours:" %d saat \xf6nce",day:"1 g\xfcn \xf6nce",days:"%d g\xfcn \xf6nce",month:"ay \xf6nce",months:"%d ay \xf6nce",year:"1 y\u0131l \xf6nce",years:"%d y\u0131l \xf6nce",wordSeparator:" ",numbers:[]}},inWords:function(b){function k(d,e){var f=a.isFunction(d)?d(e,b):d,g=c.numbers&&c.numbers[e]||e;return f.replace(/%d/i,g)}if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var c=this.settings.strings,d=c.prefixAgo,e=c.suffixAgo;if(this.settings.allowFuture&&b<0&&(d=c.prefixFromNow,e=c.suffixFromNow),!this.settings.allowPast&&b>=0)return this.settings.strings.inPast;var f=Math.abs(b)/1e3,g=f/60,h=g/60,i=h/24,j=i/365,l=f<45&&k(c.seconds,Math.round(f))||f<90&&k(c.minute,1)||g<45&&k(c.minutes,Math.round(g))||g<90&&k(c.hour,1)||h<24&&k(c.hours,Math.round(h))||h<42&&k(c.day,1)||i<30&&k(c.days,Math.round(i))||i<45&&k(c.month,1)||i<365&&k(c.months,Math.round(i/30))||j<1.5&&k(c.year,1)||k(c.years,Math.round(j)),m=c.wordSeparator||"";return void 0===c.wordSeparator&&(m=" "),a.trim([d,l,e].join(m))},parse:function(b){var c=a.trim(b);return c=(c=(c=(c=(c=c.replace(/\.\d+/,"")).replace(/-/,"/").replace(/-/,"/")).replace(/T/," ").replace(/Z/," UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2")).replace(/([\+\-]\d\d)$/," $100"),new Date(c)},datetime:function(c){var d=a(c).attr(b.isTime(c)?"datetime":"title");return b.parse(d)},isTime:function(b){return"time"===a(b).get(0).tagName.toLowerCase()}});var c={init:function(){c.dispose.call(this);var e=a.proxy(d,this);e();var f=b.settings;f.refreshMillis>0&&(this._timeagoInterval=setInterval(e,f.refreshMillis))},update:function(c){var e=c instanceof Date?c:b.parse(c);a(this).data("timeago",{datetime:e}),b.settings.localeTitle&&a(this).attr("title",e.toLocaleString()),d.apply(this)},updateFromDOM:function(){a(this).data("timeago",{datetime:b.parse(a(this).attr(b.isTime(this)?"datetime":"title"))}),d.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};a.fn.timeago=function(a,b){var d=a?c[a]:c.init;if(!d)throw new Error("Unknown function name '"+a+"' for timeago");return this.each(function(){d.call(this,b)}),this},document.createElement("abbr"),document.createElement("time")}),!function(a){a.fn.lazy=function(){function b(b){var c,d=b,e=a(window),f=d.attr("data-style"),g=Math.round(d.width()),h=Math.round(d.height()),i="w"+g+"-h"+h+"-n",j="undefined"!==typeof data&&data.noThumb||"//hamdiphonecomtr.github.io/no.png";c=f.match("/s72-c")?f.replace("/s72-c","/"+i):f.match("=s72-c")?f.replace("=s72-c","="+i):f.match("/w72-h")?f.replace("/w72-h72-n","/"+i).replace("/w72-h72-p-k-no-nu","/"+i):f.match("=w72-h")?f.replace("=w72-h72-n","="+i).replace("=w72-h72-p-k-no-nu","="+i):f.match("resources.blogblog.com")?j.replace("/s72-c","/"+i).replace("=s72-c","="+i):f,d.is(":hidden")||e.on("load resize scroll",function k(){if(e.scrollTop()+e.height()>=d.offset().top){e.off("load resize scroll",k);var a=new Image;a.onload=function(){d.attr("style","background-image:url("+this.src+")").addClass("lazy")},a.src=c}}).trigger("scroll")}return this.each(function(){b(a(this))})}}(jQuery);
