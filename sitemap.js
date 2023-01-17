var static_page_text = $.trim( $('.static_page .post-body').text() );
if ( static_page_text === "[sitemap]" ) {
  var postbody = $('.static_page .post-body');
  $.ajax({
    url: "/feeds/posts/default?alt=json-in-script",
    type: 'get',
    dataType: "jsonp",
    success: function (dataZ) {
      var blogLabels = [];
      for (var t = 0; t < dataZ.feed.category.length; t++) {
        blogLabels.push(dataZ.feed.category[t].term);
      }
      var blogLabels = blogLabels.join('/');
      postbody.html('<div class="siteLabel"></div>');
      $('.static_page .post-body .siteLabel').text(blogLabels);
      var splabel = $(".siteLabel").text().split("/");
      var splabels="";
      for (get = 0; get < splabel.length; ++get) {
        splabels+= "<span>"+splabel[get]+"</span>";
      }
      $(".siteLabel").html(splabels);
      $('.siteLabel span').each(function() {
        var mapLabel = $(this);
        var mapLabel_text = $(this).text();
        $.ajax({
          url: "/feeds/posts/default/-/" + mapLabel_text + "?alt=json-in-script",
          type: 'get',
          dataType: "jsonp",
          success: function (data) {
            var posturl = "";
            var htmlcode = '<div class="mapp">';
            for (var i = 0; i < data.feed.entry.length; i++) {
              for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                if (data.feed.entry[i].link[j].rel == "alternate") {
                  posturl = data.feed.entry[i].link[j].href;
                  break;
                }
              }
              var posttitle = data.feed.entry[i].title.$t;
              var get_date = data.feed.entry[i].published.$t,
                  year = get_date.substring(0, 4),
                  month = get_date.substring(5, 7),
                  day = get_date.substring(8, 10),
                  date = '<span class="day">' +  day.replace(/^0+/, '') + '</span><span class="month">' + text_month[parseInt(month, 10)] + ' </span><span class="year">' + year + '</span>';

              htmlcode += '<div class="mpost"><div class="map-date">' + date + '</div><h3 class="rcp-title"><a href="' + posturl + '">' + posttitle + '</a></h3></div>';
            }
            htmlcode += '</div>';
            mapLabel.replaceWith('<div class="maplabel"><h2>' + mapLabel_text + '<span class="butoo"><i class="fa fa-plus-circle"></i></span></h2>' + htmlcode + '</div>');
            $(document).on('click','.maplabel h2',function(){
              $(this).parent('.maplabel').addClass('active');
              $(this).find('.butoo .fa').removeClass('fa-plus-circle').addClass('fa-minus-circle');
            });
            $(document).on('click','.maplabel.active h2',function(){
              $(this).parent('.maplabel').removeClass('active');
              $(this).find('.butoo .fa').addClass('fa-plus-circle').removeClass('fa-minus-circle');
            });
          }
        });
      });
    }
  });
}

$('.intro .HTML .widget-content').each(function () {
  var text = $(this).text();
  if (text.match('random')) {
    $.ajax({
      url: "/feeds/posts/default?alt=json-in-script",
      type: 'get',
      dataType: "jsonp",
      success: function (datax) {
        var numpost = datax.feed.entry.length;
        var min = 0; 
        var max = numpost-3; 
        var random = Math.floor(Math.random() * (max - min + 1)) + min;
    $.ajax({
      url: "/feeds/posts/default?alt=json-in-script&start-index=" + random + "&max-results=3",
      type: 'get',
      dataType: "jsonp",
      success: function (data) {
        var posturl = "";
        var htmlcode = '<ul>';
        for (var i = 0; i < data.feed.entry.length; i++) {
          for (var j = 0; j < data.feed.entry[i].link.length; j++) {
            if (data.feed.entry[i].link[j].rel == "alternate") {
              posturl = data.feed.entry[i].link[j].href;
              break;
            }
          }
          var posttitle = data.feed.entry[i].title.$t;
          var author = data.feed.entry[i].author[0].name.$t;
          var get_date = data.feed.entry[i].published.$t,
              year = get_date.substring(0, 4),
              month = get_date.substring(5, 7),
              day = get_date.substring(8, 10),
              date = text_month[parseInt(month, 10)] + ' ' + day + ', ' + year;
          var tag = data.feed.entry[i].category[0].term;
            var content = data.feed.entry[i].content.$t;
            var $content = $('<div>').html(content);

          if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1 ) {

              var src2 = data.feed.entry[i].media$thumbnail.url;
              var thumb = '<a class="rcp-thumb" href="' + posturl + '" style="background:url('+src2+') no-repeat center center;background-size: cover"/>';


          } else if (content.indexOf("<img") > -1 ) {

            var src = $content.find('img:first').attr('src');
              var thumb = '<a class="rcp-thumb" href="' + posturl + '" style="background:url('+src+') no-repeat center center;background-size: cover"/>';


          } else {
              var thumb = '<a class="rcp-thumb" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>';
          }


          htmlcode += '<li><a href="/search/label/' + tag + '" class="post-tag">' + tag + '</a>' + thumb + '<div class="post-panel"><h3 class="rcp-title"><a href="' + posturl + '">' + posttitle + '</a></h3><span class="recent-date">' + date + '</span><span class="recent-author">' + author + '</span></div></li>';
        }
        htmlcode += '<div class="clear"/></ul>';
        $('.intro .HTML .widget-content').each(function () {
          if ($(this).text().match('random')) {
            $(this).html(htmlcode);
            $(this).removeClass('widget-content').addClass('layout-content');
            $('.intro-loader').remove();
            $(this).find('.rcp-thumb').each(function() {
              $(this).attr('style', function(i, src) {
                return src.replace('/default.jpg', '/mqdefault.jpg');
              }).attr('style', function(i, src) {
                return src.replace('s72-c', 's1600');
              });
            });
            $("p.trans").each(function() {
              var e = $(this).text();
              var t = $(this).attr("data-tran");
              $("#pages-wrapper *").replaceText(e, t)
            });
          }
        });
      }
    });
      }
    });
  } else if (text.match('recent')) {
    $.ajax({
      url: "/feeds/posts/default?alt=json-in-script",
      type: 'get',
      dataType: "jsonp",
      success: function (datax) {
      $.ajax({
      url: "/feeds/posts/default?alt=json-in-script&max-results=3",
      type: 'get',
      dataType: "jsonp",
      success: function (data) {
        var posturl = "";
        var htmlcode = '<ul>';
        for (var i = 0; i < data.feed.entry.length; i++) {
          for (var j = 0; j < data.feed.entry[i].link.length; j++) {
            if (data.feed.entry[i].link[j].rel == "alternate") {
              posturl = data.feed.entry[i].link[j].href;
              break;
            }
          }
          var posttitle = data.feed.entry[i].title.$t;
          var author = data.feed.entry[i].author[0].name.$t;
          var get_date = data.feed.entry[i].published.$t,
              year = get_date.substring(0, 4),
              month = get_date.substring(5, 7),
              day = get_date.substring(8, 10),
              date = text_month[parseInt(month, 10)] + ' ' + day + ', ' + year;
          var tag = data.feed.entry[i].category[0].term;
            var content = data.feed.entry[i].content.$t;
            var $content = $('<div>').html(content);

          if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1 ) {

              var src2 = data.feed.entry[i].media$thumbnail.url;
              var thumb = '<a class="rcp-thumb" href="' + posturl + '" style="background:url('+src2+') no-repeat center center;background-size: cover"/>';


          } else if (content.indexOf("<img") > -1 ) {

            var src = $content.find('img:first').attr('src');
              var thumb = '<a class="rcp-thumb" href="' + posturl + '" style="background:url('+src+') no-repeat center center;background-size: cover"/>';


          } else {
              var thumb = '<a class="rcp-thumb" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>';
          }


          htmlcode += '<li><a href="/search/label/' + tag + '" class="post-tag">' + tag + '</a>' + thumb + '<div class="post-panel"><h3 class="rcp-title"><a href="' + posturl + '">' + posttitle + '</a></h3><span class="recent-date">' + date + '</span><span class="recent-author">' + author + '</span></div></li>';
        }
        htmlcode += '<div class="clear"/></ul>';
        $('.intro .HTML .widget-content').each(function () {
          if ($(this).text().match('recent')) {
            $(this).html(htmlcode);
            $(this).removeClass('widget-content').addClass('layout-content');
            $('.intro-loader').remove();
            $(this).find('.rcp-thumb').each(function() {
              $(this).attr('style', function(i, src) {
                return src.replace('/default.jpg', '/mqdefault.jpg');
              }).attr('style', function(i, src) {
                return src.replace('s72-c', 's1600');
              });
            });
            $("p.trans").each(function() {
              var e = $(this).text();
              var t = $(this).attr("data-tran");
              $("#pages-wrapper *").replaceText(e, t)
            });
          }
        });
      }
    });
      }
    });
  } else {
      $.ajax({
      url: "/feeds/posts/default/-/" + text + "?alt=json-in-script&max-results=3",
      type: 'get',
      dataType: "jsonp",
      success: function (data) {
        var posturl = "";
        var htmlcode = '<ul>';
        for (var i = 0; i < data.feed.entry.length; i++) {
          for (var j = 0; j < data.feed.entry[i].link.length; j++) {
            if (data.feed.entry[i].link[j].rel == "alternate") {
              posturl = data.feed.entry[i].link[j].href;
              break;
            }
          }
          var posttitle = data.feed.entry[i].title.$t;
          var author = data.feed.entry[i].author[0].name.$t;
          var get_date = data.feed.entry[i].published.$t,
              year = get_date.substring(0, 4),
              month = get_date.substring(5, 7),
              day = get_date.substring(8, 10),
              date = text_month[parseInt(month, 10)] + ' ' + day + ', ' + year;
          var tag = data.feed.entry[i].category[0].term;
            var content = data.feed.entry[i].content.$t;
            var $content = $('<div>').html(content);
          if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1 ) {
              var src2 = data.feed.entry[i].media$thumbnail.url;
              var thumb = '<a class="rcp-thumb" href="' + posturl + '" style="background:url('+src2+') no-repeat center center;background-size: cover"/>';
          } else if (content.indexOf("<img") > -1 ) {
            var src = $content.find('img:first').attr('src');
              var thumb = '<a class="rcp-thumb" href="' + posturl + '" style="background:url('+src+') no-repeat center center;background-size: cover"/>';
          } else {
              var thumb = '<a class="rcp-thumb" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>';
          }
          htmlcode += '<li><a href="/search/label/' + tag + '" class="post-tag">' + tag + '</a>' + thumb + '<div class="post-panel"><h3 class="rcp-title"><a href="' + posturl + '">' + posttitle + '</a></h3><span class="recent-date">' + date + '</span><span class="recent-author">' + author + '</span></div></li>';
        }
        htmlcode += '<div class="clear"/></ul>';
        $('.intro .HTML .widget-content').each(function () {
            $(this).html(htmlcode);
            $(this).removeClass('widget-content').addClass('layout-content');
            $('.intro-loader').remove();
            $(this).find('.rcp-thumb').each(function() {
              $(this).attr('style', function(i, src) {
                return src.replace('/default.jpg', '/mqdefault.jpg');
              }).attr('style', function(i, src) {
                return src.replace('s72-c', 's1600');
              });
            });
            $("p.trans").each(function() {
              var e = $(this).text();
              var t = $(this).attr("data-tran");
              $("#pages-wrapper *").replaceText(e, t)
            });
        });
      }
    });
  }
});
