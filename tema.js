const jo={};!function JetThemeScript(){var ea=window,fH=document,dD=setTimeout,fs=clearTimeout,dw=Date,fL=Math,db=parseInt,c6=btoa,ef=escape,dA=unescape,eW=encodeURIComponent,dq=decodeURIComponent,fh=RegExp,eG=XMLHttpRequest,dZ=alert,fm=localStorage,eE=JSON,cK=Image,cI=setInterval,ed=clearInterval,fV="forEach",eg="innerHTML",e1="tagName",cZ="getElementById",df="getElementsByClassName",dI="querySelector",cR="querySelectorAll",dL="documentElement",dk="childNodes",e7="createElement",ez="className",ex="replace",eJ="indexOf",dj="lastIndexOf",cJ="EventListener",du="add",fN="remove",di="id",dN="key",fO="type",fd="parse",cQ="length",dQ="call",fg="slice",ey="reset",eB="scroller",eR="push",fC="Time",fo="Date",f0="Month",a8="FullYear",eU="clientX",eV="clientY",dt="pageX",dv="pageY",fM="scrollLeft",eZ="scrollTop",fj="onreadystatechange",dp="readyState",cL="Attribute",d3="set",fn="get",eI="post",cM="has",ev="checked",eQ="focus",fJ="height",ds="offsetWidth",de="offsetHeight",eD="toFixed",fU="pageYOffset",cP="appendChild",fp="firstChild",dg="insert",eY="Before",fX="value",d0="safe",fR="match",dP="href",d5="src",dU="onload",e2="onerror",ec="target",eN="closest",ee="location",ep="split",i="trim",eF="open",d9="send",d1="random",eh="status",dT="toString",fu="parentElement",e0="activeElement",dy="preventDefault",em="substr",c0="setRequestHeader",fW="responseText",dc="response",et="body",fB="title",e8="test",fY="container",fz="ceil",e6="floor",dJ="round",fc="min",cU="map",da="cookie",dS="contains",eb="toUTCString",eS="textContent",eH="elementFromPoint",fD="Item",fe="nextSibling",en="load",dV="true",cY="false",fr="valid",eL="scroll",es="click",ft="submit",fk="blur",e4="mousemove",dd="mouseup",dM="touchstart",fx="mousedown",cN="change",dm="complete",ek="undefined",dR="function",dG="Content-Type",d4="text/html",fv="application/x-www-form-urlencoded",dz="pagination",cW="loadCustomPosts",dn="custom_posts",d7="config",eq="adsbygoogle",fi="analytics",c8="jet",dr="https://",dK="www.blogger.com/",eK="-rw",eT="devicePixelRatio",dC="mount",eu=typeof isPreview!==ek?isPreview:false,fG=typeof siteUrl!==ek?siteUrl[em](0,siteUrl[cQ]-1)[ex](/(^\w+:|^)\/\//,""):"",fT=dr+fG,fK=typeof currentUrl!==ek?currentUrl:"",c9=typeof blogId!==ek?blogId:"",c7=typeof blogTitle!==ek?blogTitle:"",dO=typeof titleSeparator!==ek?titleSeparator:" - ",fy=typeof pageTitle!==ek?pageTitle:"Page",c2=typeof analyticId!==ek?analyticId:false,c4=typeof caPubAdsense!==ek?caPubAdsense[ex](/^\D+/g,""):false,fF=c4?"ca-pub-"+c4:false,e5=typeof innerAdsDelimiter!==ek?innerAdsDelimiter:"p,br,div",fa=typeof ignoreAdsDelimiter!==ek?ignoreAdsDelimiter:"pre,ul,ol,table,blockquote",dX=typeof autoTOC!==ek?autoTOC:false,e3=typeof toc_temp===dR?toc_temp:false,dh=typeof positionTOC!==ek?positionTOC:false,ej=typeof jtCallback===dR?jtCallback:false;function ei(b,a){return -1<(" "+b[ez]+" ")[eJ](" "+a+" ")}function el(a,c){var b;ei(a,c)||(""!=(b=a[ez])&&(c=" "+c),a[ez]=b+c)}function dE(b,a){b[ez]=b[ez][ex](new fh("(?:^|\\s)"+a+"(?!\\S)"),"")[i]()}function dH(b,a){(ei(b,a)?dE:el)(b,a)}function fP(b,a){el(b,"d-block"),dD(function(){el(b,a)},100)}function fw(a,c,b){dE(a,c),dD(function(){dE(a,"d-block")},b||300)}function eA(a,c){for(var b=0;b<a[cQ];b++){if(a[b]===c){return !0}}return !1}function fS(){return(fL[d1]()+1)[dT](36)[em](7)}function c5(b,a){return !!(b=new fh("[?&]"+b+"=([^&#=]*)"))[e8](a)&&a[fR](b)[1]}function dY(f,b,d,c){f=db(f),b=db(b),d=db(d),c=db(c);var j,h,g=fL[fz](f/d);b<1?b=1:g<b&&(b=g),h=g<=c?(j=1,g):(f=fL[e6](c/2),d=fL[fz](c/2)-1,b<=f?(j=1,c):g<=b+d?(j=g-c+1,g):(j=b-f,b+d));for(var k=(b-1)*d,c=fL[fc](k+d-1,f-1),a=[],e=0;e<h+1-j;e++){a[eR](e)}return a=a[cU](function(l){return j+l}),{totalItems:f,currentPage:b,pageSize:d,totalPages:g,startPage:j,endPage:h,startIndex:k,endIndex:c,pages:a}}function cX(a){for(var c=a.slice(),e=c[cQ]-1;0<e;e--){var d=fL[e6](fL[d1]()*(e+1)),b=c[e];c[e]=c[d],c[d]=b}return c}function eX(a){try{return eE[fd](a)}catch(a){return !1}}!function(b){var a=new cK;a[dU]=a[e2]=function(){b(2==a[fJ])},a[d5]="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}(function(a){a||(eK="")});var cS=fH[cZ]("header"),eO=fH[cZ]("search-toggle"),dW=fH[cZ]("search-header"),dx=fH[cZ]("navbar-toggle"),cH=fH[cZ]("navbar"),eM=fH[cZ]("back-to-top"),cO=fH[cZ]("dark-toggler"),fq=fH[dI]("html"),eP=fH[cZ]("comment-button"),fl=fH[cZ]("threaded-comment-form"),c1=fH[cZ]("comment-editor"),c3=fH[cZ]("comment-editor-src"),d8=fH[cZ]("comment-script"),dF=fH[cR](".comment-reply"),eo=fH[cR](".entry-text noscript"),eC=fH[cR](".contact-form-blogger"),fZ=fH[cZ]("ads-post"),dl=fH[cZ]("post-body"),fQ=fH[dI](".related-posts"),fI=fH[dI](".related-inline"),ff=c5("page",fK),fA=null!==fm&&1==fm[fn+fD]("lazy");!function(a){ea[du+cJ](eL,function(){var b,c=this[fU];c<a&&ei(cS,"header-hidden")?b=dD(function(){dE(cS,"header-hidden")},500):a<c&&ei(cS,"header-animate")&&(fs(b),el(cS,"header-hidden")),a=c},!1)}(0);var ew=function(e){var b,d,c,h,g,f,j,a;"IMG"==e[e1]&&((a=e[fn+cL]("data-src"))[fR](/(bp.blogspot|googleusercontent)/)?(j=fA?ea[eT]&&1<ea[eT]?ea[eT]:1.5:1,b=(e[ds]*j)[eD](0),d=(e[fu][ds]*j)[eD](0),c=(e[fu][fu][ds]*j)[eD](0),h=(e[de]*j)[eD](0),g=a[ep]("/"),f=a[dj]("=")+1,j="",j=ei(e[fu],"ratio")?"w"+b+"-h"+h+"-c"+eK:"s"+(j=b<30?d<30?c:d:b)+eK,a=a[fR](/(img\/a|proxy\/)/)?f?a[fg](0,f)+j:a+"="+j:a[ex](g[g[cQ]-2],j),e[d3+cL]("data-src",a)):a[fR](/(img.youtube|i.ytimg)/)&&(a=a[em](0,a[dj]("/"))+"/mqdefault.jpg",e[d3+cL]("data-src",a)))},er=function(g){var k,j,a,d,e,b,f,c;function h(l,o,n){var p=fH[e7]("li"),m=fH[e7]("span");return el(m,"btn btn-sm rounded-pill jt-icon-center"),m[eg]=n||l,m[d3+cL]("data-page",l),l==o?el(m,"jt-btn-primary"):(el(m,"jt-btn-light hover-btn-primary"),m[du+cJ](es,function(q){var r;q[dy](),1==(c=m[fn+cL]("data-page"))?(r=j?fT+"/search"+d+"?max-results="+k+"&page="+c:fT,ea[ee][dP]=r):(r=(c-1)*k,Defer.js(fT+"/feeds/posts/summary/"+a+"?start-index="+r+"&alt=json&callback=jo."+dz+"_date&max-results=1"))})),p[cP](m),p}g[fn+cL]("data-pagination")!=cY?(k=g[fn+cL]("data-posts"),j=g[fn+cL]("data-label"),a=(j=eW(j))?"-/"+j+"/":"",d=j?"/label/"+j:"",Defer.js(fT+"/feeds/posts/summary/"+a+"?alt=json&callback=jo."+dz+"_"+dN+"&max-results=1"),e=c5("max-results",fK),b=c5("page",fK),f=e||k,c=b||1,jo[dz+"_"+dN]=function(m){var p=m.feed,o=db(p.openSearch$totalResults.$t);if(k<o){var m=dY(o,c,f,5),q=fH[e7]("ul"),p=m.totalPages;1!=m.currentPage&&(o=h(m.currentPage-1,"",'<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-l"/></svg>'),q[cP](o)),eA(m.pages,1)||(l=h(1,m.currentPage,"1 . ."),q[cP](l));for(var n=0;n<m.pages[cQ];n++){var l=h(m.pages[n],m.currentPage);q[cP](l)}eA(m.pages,p)||(l=h(p,m.currentPage,". . "+p),q[cP](l)),m.currentPage!=p&&(p=h(m.currentPage+1,"",'<svg aria-hidden="true" class="jt-icon"><use xlink:href="#i-arrow-r"/></svg>'),q[cP](p)),g[eg]="",el(q,"pagination mb-0"),g[cP](q),dE(g,"visually-hidden")}},jo[dz+"_date"]=function(l){l=l.feed.entry[0],l=(l=l.published.$t[em](0,19)+l.published.$t[em](23,29))[ex]("+","%2B"),l=fT+"/search"+d+"?updated-max="+l+"&max-results="+f+"&page="+c;ea[ee][dP]=l}):dE(g,"visually-hidden")};function fE(a,c){var b=new eG;b[eF](fn,a),b[c0](dG,d4),b[d9](null),b[du+cJ](en,function(){var d=b[fW][fR](/<title>(.*?)<\/title>/);c[eg]=d[1][ex](dO+c7,"")})}jo[cW]=function(e){var k=fS(),f=e[fn+cL]("data-label"),h=e[fn+cL]("data-title"),a=e[fn+cL]("data-items"),g=e[fn+cL]("data-shuffle"),j=e[fn+cL]("data-no-item"),l=e[fn+cL]("data-func"),b=e[fn+cL]("data-callback"),m=j?db(a)+1:a,d=f||e[eg],c=d[ep](","),f="",f=1<c[cQ]?d?"-/"+eW(c[fL[e6](fL[d1]()*c[cQ])])+"/?":"?":d&&d!=cY?"-/"+eW(d[i]())+"/?":"?";Defer.js(fT+"/feeds/posts/summary/"+f+"alt=json&callback=jo."+dn+"_"+dN+"_"+k+"&max-results="+m),jo[dn+"_"+dN+"_"+k]=function(s){var o=db(s.feed.openSearch$totalResults.$t),q=s.feed.category;if(0<o){for(var p={title:h,posts:[],categories:q},x=s.feed.entry,v=0,u=0;u<x[cQ];++u){var w,n,r=x[u],t=r.link[r.link[cQ]-1][dP];if(v==a){break}t!=j&&(v++,(w={}).grup_id=k,w.url=t,w.title=r[fB].$t,w.summary=r.summary.$t[i](),w.img=r.media$thumbnail&&r.media$thumbnail.url,w.author=r.author[0].name.$t,w.comment=r.thr$total&&r.thr$total.$t,w.label=r.category,n=r.published.$t,r=(t=new dw(n))[fn+fo](),n=t[fn+f0]()+1,t=t[fn+a8](),w.date=t+"/"+n+"/"+r,p.posts[eR](w))}s=ea[l];typeof s===dR&&0<p.posts[cQ]&&(g&&(p.posts=cX(p.posts)[fg](0,g)),e[eg]=s(p)[i](),dE(e,"visually-hidden"),Defer.dom(".lazy-"+k,1,"loaded",ew),!b||typeof(s=ea[b])===dR&&s())}}};var cV=function(b){for(var d=b[cR]("a"),f=0;f<d[cQ];++f){var e=d[f],c=e[dP],a=fH[e7]("span");el(a,"d-block fw-bold pt-2 jt-text-primary"),e[cP](a),fE(c,a)}};function e9(){(eO&&eO[ev]||dx&&dx[ev]?dE:el)(cS,"header-animate")}function cT(b,d){function a(e){b[dS](e[ec])||(d(),c())}var c=function(){fH[fN+cJ](es,a)};fH[du+cJ](es,a)}function d2(a){a!=c3[dP]&&(el(fl,"loader"),c3[dP]=a,c1[d5]=a),ei(fl,"d-none")&&(dE(fl,"d-none"),a=d8[fX][fR](/<script.*?src='(.*?)'/)[1],Defer.js(a,"comment-js",500,function(){BLOG_CMT_createIframe(dr+dK+"rpc_relay.html")}))}eO&&eO[du+cJ](cN,function(){e9(),this[ev]&&dD(function(){fH[cZ]("search-input")[eQ]()},100),cT(dW,function(){eO[ev]=!1,e9()})}),dx&&dx[du+cJ](cN,function(){e9(),this[ev]?(fP(cH,"show"),cT(cH,function(){dx[ev]=!1,e9(),fw(cH,"show")})):fw(cH,"show")}),cO&&cO[du+cJ](es,function(a){a[dy](),dH(fq,"dark-mode"),null!==fm&&fm[d3+fD]("theme",ei(fq,"dark-mode")?"dark":"light")}),ea[du+cJ](eL,function(){(1<=this[fU]&&null!==cS?el:dE)(cS,"shadow-sm"),(1000<=this[fU]&&null!==eM?dE:el)(eM,"d-none")},!1),c1&&c1[du+cJ](en,function(a){dE(fl,"loader")}),eP&&eP[du+cJ](es,function(a){a[dy](),d2(this[dP]),"add-comment"!=fl[fu][di]&&fH[cZ]("add-comment")[cP](fl)});for(var fb=0;fb<dF[cQ];++fb){dF[fb][du+cJ](es,function(a){a[dy]();a=this[fn+cL]("data-comment-id");d2(this[dP]),fl[fu][di]!="c"+a&&fH[cZ]("c"+a)[cP](fl)})}for(fb=0;fb<eC[cQ];++fb){var d6=eC[fb];d6[du+cJ](ft,function(a){a[dy]();var b=a[ec];el(b,"loading");var d=new FormData(b),c="blogID="+c9;d[fV](function(e,f){c+="&"+eW(f)+"="+eW(e)});a=dr+dK+"contact-form.do",d=new eG;d[eF](eI,a),d[c0](dG,fv),d[d9](c),d[fj]=function(){var e;dE(b,"loading"),4===this[dp]&&200===this[eh]&&""!=this[dc]&&((e=eX(this[fW][i]()))&&"true"==e.details.emailSentStatus?(b[ey](),dE(b,"send-error"),el(b,"send-success")):(dE(b,"send-success"),el(b,"send-error")))}})}function dB(a){if(a&&(fH[fN+cJ](e4,dB),fH[fN+cJ](dM,dB),fH[fN+cJ](eL,dB)),Defer.dom(".custom-posts",1,null,jo[cW],null,{rootMargin:"200%"}),0<eo[cQ]){for(var m=0;m<eo[cQ];++m){var p=eo[m],o=p[eg],k=fH[e7]("textarea");k[eg]=o[ex](/src="(.*?)"/g,'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"');o=fH[e7]("div");o[eg]=k.value,0==m&&el(o,"feature-image full-width"),p[fu][dg+eY](o,p)}Defer.dom('[lazyload="true"]',1,"loaded",ew,null,{rootMargin:"200%"})}if(null!==dl){if(null!==fQ&&null!==fI&&(fI[eg]=fQ[eg],fI[d3+cL]("data-no-item",fQ[fn+cL]("data-no-item"))),null!==fZ){for(var h=dl[cR](e5+","+fa),f=fZ[dk],j=f[cQ],l=[],m=0;m<h[cQ];m++){var r=h[m][eN](fa);r&&h[m]!=r||l[eR](h[m])}for(var e,m=0;m<j;m++){m==j-1?dl[cP](f[0]):(e=m==j-1?l[cQ]-1:fL[dJ](l[cQ]/j)*m,(e=0==m?l[0]:l[e][fe])&&e[fu][dg+eY](f[0],e))}}if(dX&&dX!=cY&&e3&&null!==dl[fp]){for(var q=dl[cR]("h2,h3,h4,h5,h6"),g=fH[e7]("div"),a=dl[dI](dh),c=[],m=0;m<q[cQ];m++){var n=q[m],b=n[eS][ex](/[^\w!?]/g,"_")[ex](/__/g,"_"),d=db(n[e1][ex]("H",""));n[di]=b,c[eR]({level:d,title:n[eS],id:b})}null===a?a=dl[fp]:a[fe]&&(a=a[fe]),0<c[cQ]&&(g[eg]=e3(c)[i](),a&&a[fu][dg+eY](g,a))}}eu||(fF&&(typeof adsbygoogle===ek&&(adsbygoogle=[]),Defer.js(dr+"pagead2.googlesyndication.com/pagead/js/"+eq+".js?client="+fF,eq,100)),c2&&c2!=cY&&Defer.js(dr+"www.googletagmanager.com/gtag/js?id="+c2,fi,100,function(){function s(){dataLayer[eR](arguments)}s("js",new Date),s(d7,c2)}),ej&&ej()),c9&&Defer.css(dr+dK+"dyn-css/authorization.css?targetBlogID="+c9)}ff&&(fH[fB]=fH[fB][ex](dO,dO+fy+" "+ff+dO)),Defer.dom(".lazyload",1,"loaded",ew),Defer.dom("#post-pager",1,null,cV,null,{rootMargin:"200%"}),Defer.dom("#pagination",1,null,er,null,{rootMargin:"200%"}),fA?dB(!1):(null!==fm&&fm[d3+fD]("lazy",1),fH[du+cJ](e4,dB),fH[du+cJ](dM,dB),fH[du+cJ](eL,dB))}();var scrollTimer=null;$(window).scroll(function(){var a=$(this).height(),c=a/$(document).height()*a,b=$(this).scrollTop()/($(document).height()-a),d=b*(a-c)+c/2-$("#scroll").height()/2;$("#scroll").css("top",d).text(" ("+Math.round(b*100)+"%)").fadeIn(100);if(scrollTimer!==null){clearTimeout(scrollTimer)}scrollTimer=setTimeout(function(){$("#scroll").fadeOut()},1500)});
