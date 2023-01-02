// tabs alan
$('.js-tabs-title').on('click', function() {
  var openTab = $(this).data('tab'),
      linePosition = $(this).position().left;
  
  $('.js-tabs-underline').css('transform', 'translateX(' + linePosition + 'px)');
  $('.js-tabs-title').removeClass('active');
  $(this).addClass('active');
  $('.js-tabs-content').removeClass('active');
  $(openTab).addClass('active');
});
// Kaydırma Performansı
(function() {
  var supportsPassive = eventListenerOptionsSupported();  

  if (supportsPassive) {
    var addEvent = EventTarget.prototype.addEventListener;
    overwriteAddEvent(addEvent);
  }

  function overwriteAddEvent(superMethod) {
    var defaultOptions = {
      passive: true,
      capture: false
    };

    EventTarget.prototype.addEventListener = function(type, listener, options) {
      var usesListenerOptions = typeof options === 'object';
      var useCapture = usesListenerOptions ? options.capture : options;

      options = usesListenerOptions ? options : {};
      options.passive = options.passive !== undefined ? options.passive : defaultOptions.passive;
      options.capture = useCapture !== undefined ? useCapture : defaultOptions.capture;

      superMethod.call(this, type, listener, options);
    };
  }

  function eventListenerOptionsSupported() {
    var supported = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function() {
          supported = true;
        }
      });
      window.addEventListener("test", null, opts);
    } catch (e) {}

    return supported;
  }
})();
// Slider
!function(t){"use strict";t.fn.memeSlider=function(e){return this.each(function(s,n){let l=t(n),o=new i(l,e);l.data("memeSlider",o)})},t.fn.memeSlider.defaults={wrapperSelector:".meme-wrapper",slideSelector:".meme-slide",navigation:{nextSelector:".next",prevSelector:".prev"},pagination:{containerSelector:".meme-pagination",bulletRender:function(t,i){return`<button class="${t}">${i}</button>`}},items:1,slideActiveClass:"active",bulletActiveClass:"active",infinity:!0,swipe:!0,swipeDelta:50,spaceBetween:20,autoPlay:!0,autoPlayDelay:3500,resizeDelay:300,animationFunction:function(t,i){let e=this.$wrapper;if(!e.length)return;let s=t*this.slides.width;e.css({transition:"transform 500ms ease-in-out",transform:`translateX(-${s}px)`}),clearTimeout(this.slides._timer),this.slides._timer=setTimeout(()=>{i()},500)},animationFunctionOnResize:function(t){let i=t*this.slides.width;this.$wrapper.css({transition:"transform 0ms ease-in-out",transform:`translateX(-${i}px)`})},onInit:function(){},onResizeStart:function(){},onResizeEnd:function(){},onSlideChangeStart:function(){},onSlideChangeEnd:function(){}};class i{constructor(i,e){this.options=Object.assign({},t.fn.memeSlider.defaults,e),this.$slider=i;let s=this.$slider.find(this.options.slideSelector),n=this._calcSlidesWidth();this.slides={$collection:s,count:s.length,width:n,step:n*this.options.items,currentSlide:0},this.$wrapper=i.find(this.options.wrapperSelector),this.$bullets=null,this.autoPlayTimer=null,this._init(i,e)}_calcSlidesWidth(){let t=this.options.items,i=this.$slider.innerWidth();return t>=1?i/t:i}goTo(t){let i=this.slides.count,e=this.options.items;return i===e||(t=this._calcNewSlideIndex(t,i,e),this._reinitAutoplay(),t===this.slides.currentSlide||(this._changeBulletActiveClass(t),this._changeSlidesActiveClass(t),this._changeSlide(t))),this}_calcNewSlideIndex(t,i,e){let s=this.options.infinity;return t>=i?s?0:this._calcSlideLastIndex(i,e):t<0?s?this._calcSlideLastIndex(i,e):0:t}_calcSlideLastIndex(t,i){let e=t%i;return 0===e?t-i:t-e}_changeBulletActiveClass(i){let e=this.options.bulletActiveClass,s=this.$bullets;return s&&s.removeClass(e).filter(function(){return t(this).data("meme-bullet")===i}).addClass(e),this}_changeSlidesActiveClass(t){let i=this.slides.$collection,e=this.options.slideActiveClass;i.filter(`.${e}`).removeClass(e);for(let s=0;s<this.options.items;s++)i.eq(t+s).addClass(e);return this.slides.currentSlide=t,this}_changeSlide(t){let i=this.options;return i.onSlideChangeStart(),i.animationFunction.call(this,t,i.onSlideChangeEnd.bind(this)),this}goNext(){return this.goTo(this.slides.currentSlide+this.options.items),this}goPrev(){return this.goTo(this.slides.currentSlide-this.options.items),this}_init(t,i){return this._setSlidesWidth(),this._addSwipeEvent(),this._addResizeEvent(),this._initNavigation(),this._initPagination(),this._changeBulletActiveClass(0),this._changeSlidesActiveClass(0),this._initAutoPlay(),this.options.onInit.call(this),this}_setSlidesWidth(){return this.slides.$collection.css("width",this.slides.width),this}_addSwipeEvent(){if(!this.options.swipe)return this;let t=0,i=0,e=this.options.swipeDelta;return this.$wrapper.on("touchstart.meme",i=>{t=i.changedTouches[0].screenX}),this.$wrapper.on("touchend.meme",s=>{(i=s.changedTouches[0].screenX)<t-e?this.goNext():i-e>t&&this.goPrev()}),this}_addResizeEvent(){let i;t(window).on("resize.meme",t=>{clearTimeout(i),i=setTimeout(()=>{this.options.onResizeStart.call(this),this.slides.width=this._calcSlidesWidth(),this._setSlidesWidth(),this.options.animationFunctionOnResize.call(this,this.slides.currentSlide),this.options.onResizeEnd.call(this)},this.options.resizeDelay)})}_initNavigation(){let i=this.options.navigation.nextSelector,e=this.options.navigation.prevSelector;return t(i).length&&this._addNavigationEvent(i),t(e).length&&this._addNavigationEvent(e,"prev"),this}_addNavigationEvent(t,i){let e=this._findNavigationButton(t);return e&&(e.off("click.meme"),e.on("click.meme",t=>{t.preventDefault();let e=this.slides.currentSlide,s=this.options.items;"prev"===i?this.goTo(e-s):this.goTo(e+s)})),this}_findNavigationButton(i){let e=this.$slider.find(i);return(!!e.length||!!(e=t(i)).length)&&(this.$button=e,this.$button)}_initPagination(){let i=this.options.pagination.containerSelector,e=this.$slider.find(i);if(!e.length)return this;e.empty();let s=Math.ceil(this.slides.count/this.options.items);this.$bullets=t();for(let n=0;n<s;n++){let l=t(this.options.pagination.bulletRender("meme-bullet",n+1));this.$bullets=this.$bullets.add(l),l.data("meme-bullet",n*this.options.items),this._addPaginationEvent(l),e.append(l)}return this}_addPaginationEvent(i){return i.on("click.meme",i=>{i.preventDefault();let e=t(i.target).data("meme-bullet");this.goTo(e)}),this}_initAutoPlay(){return this.options.autoPlay&&(this.autoPlayTimer=setInterval(()=>{this.goNext()},this.options.autoPlayDelay)),this}_reinitAutoplay(){this.autoPlayTimer&&(clearInterval(this.autoPlayTimer),this._initAutoPlay())}}}(jQuery);

// Get screen size
var size = $( window ).width();
if(size < 640 ){
itemCount = 1 ;
}else{
itemCount= 4;
}

// What user can do
$(".meme-slider").memeSlider({
  items: 3,
  autoPlay: false,
  onResizeEnd: function () {
    console.log("Resize event Ended!");
  } });

$(".meme-slider-1").memeSlider({
  autoPlay:false,
  items: 1,
  onSlideChangeStart: function () {
    console.log("onSlideChangeStart Fired");
  }
});

$(".meme-slider-2").memeSlider({
  autoPlay: false,
  items: 3,
  onSlideChangeStart: function () {
    console.log("onSlideChangeStart Fired");
  }
});
$(".meme-slider-3").memeSlider({
  autoPlay: false,
  items:itemCount,
  onSlideChangeStart: function () {
    console.log("onSlideChangeStart Fired");
  }
});
console.log($(".meme-slider").data("memeSlider"));
// Menu
const navToggler = document.querySelector(".nav-toggler");navToggler.addEventListener("click", navToggle);function navToggle() {navToggler.classList.toggle("active");const nav = document.querySelector(".nav");nav.classList.toggle("open");if(nav.classList.contains("open")){nav.style.maxHeight = nav.scrollHeight + "px";}else{nav.removeAttribute("style");}}
// Search Box
const searchInput=document.querySelector(".search-icon"),searchContainer=document.querySelector(".search-container"),searchCloseBtn=document.querySelector(".search-close-btn");searchInput.addEventListener("click",()=>{searchContainer.classList.add("active"),searchCloseBtn.style.display="block"}),searchCloseBtn.addEventListener("click",()=>{searchContainer.classList.remove("active"),searchCloseBtn.style.display="none",searchInput.value=""});
