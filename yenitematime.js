! function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && "object" == typeof module.exports ? t(require("jquery")) : t(jQuery)
}(function (t) {
    t.timeago = function (e) {
        return e instanceof Date ? n(e) : n("string" == typeof e ? t.timeago.parse(e) : "number" == typeof e ? new Date(e) : t.timeago.datetime(e))
    };
    var e = t.timeago;
    t.extend(t.timeago, {
        settings: {
            refreshMillis: 6e4,
            allowPast: !0,
            allowFuture: !1,
            localeTitle: !1,
            cutoff: 0,
            autoDispose: !0,
            strings: {
                prefixAgo: null,
                prefixFromNow: null,
                suffixAgo: "ago",
                suffixFromNow: "from now",
                inPast: "any moment now",
                seconds: "less than a minute",
                minute: "about a minute",
                minutes: "%d minutes",
                hour: "about an hour",
                hours: "about %d hours",
                day: "a day",
                days: "%d days",
                month: "about a month",
                months: "%d months",
                year: "about a year",
                years: "%d years",
                wordSeparator: " ",
                numbers: []
            }
        },
        inWords: function (e) {
            if (!this.settings.allowPast && !this.settings.allowFuture) throw "timeago allowPast and allowFuture settings can not both be set to false.";
            var i = this.settings.strings,
                a = i.prefixAgo,
                n = i.suffixAgo;
            if (this.settings.allowFuture && e < 0 && (a = i.prefixFromNow, n = i.suffixFromNow), !this.settings.allowPast && e >= 0) return this.settings.strings.inPast;
            var r = Math.abs(e) / 1e3,
                o = r / 60,
                s = o / 60,
                u = s / 24,
                m = u / 365;

            function l(a, n) {
                var r = t.isFunction(a) ? a(n, e) : a,
                    o = i.numbers && i.numbers[n] || n;
                return r.replace(/%d/i, o)
            }
            var d = r < 45 && l(i.seconds, Math.round(r)) || r < 90 && l(i.minute, 1) || o < 45 && l(i.minutes, Math.round(o)) || o < 90 && l(i.hour, 1) || s < 24 && l(i.hours, Math.round(s)) || s < 42 && l(i.day, 1) || u < 30 && l(i.days, Math.round(u)) || u < 45 && l(i.month, 1) || u < 365 && l(i.months, Math.round(u / 30)) || m < 1.5 && l(i.year, 1) || l(i.years, Math.round(m)),
                h = i.wordSeparator || "";
            return void 0 === i.wordSeparator && (h = " "), t.trim([a, d, n].join(h))
        },
        parse: function (e) {
            var i = t.trim(e);
            return i = (i = (i = (i = (i = i.replace(/\.\d+/, "")).replace(/-/, "/").replace(/-/, "/")).replace(/T/, " ").replace(/Z/, " UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2")).replace(/([\+\-]\d\d)$/, " $100"), new Date(i)
        },
        datetime: function (i) {
            var a = e.isTime(i) ? t(i).attr("datetime") : t(i).attr("title");
            return e.parse(a)
        },
        isTime: function (e) {
            return "time" === t(e).get(0).tagName.toLowerCase()
        }
    });
    var i = {
        init: function () {
            i.dispose.call(this);
            var n = t.proxy(a, this);
            n();
            var r = e.settings;
            r.refreshMillis > 0 && (this._timeagoInterval = setInterval(n, r.refreshMillis))
        },
        update: function (i) {
            var n = i instanceof Date ? i : e.parse(i);
            t(this).data("timeago", {
                datetime: n
            }), e.settings.localeTitle && t(this).attr("title", n.toLocaleString()), a.apply(this)
        },
        updateFromDOM: function () {
            t(this).data("timeago", {
                datetime: e.parse(e.isTime(this) ? t(this).attr("datetime") : t(this).attr("title"))
            }), a.apply(this)
        },
        dispose: function () {
            this._timeagoInterval && (window.clearInterval(this._timeagoInterval), this._timeagoInterval = null)
        }
    };

    function a() {
        var i = e.settings;
        if (i.autoDispose && !t.contains(document.documentElement, this)) return t(this).timeago("dispose"), this;
        var a = function (i) {
            if (!(i = t(i)).data("timeago")) {
                i.data("timeago", {
                    datetime: e.datetime(i)
                });
                var a = t.trim(i.text());
                e.settings.localeTitle ? i.attr("title", i.data("timeago").datetime.toLocaleString()) : !(a.length > 0) || e.isTime(i) && i.attr("title") || i.attr("title", a)
            }
            return i.data("timeago")
        }(this);
        return isNaN(a.datetime) || (0 === i.cutoff || Math.abs(r(a.datetime)) < i.cutoff ? t(this).text(n(a.datetime)) : t(this).attr("title").length > 0 && t(this).text(t(this).attr("title"))), this
    }

    function n(t) {
        return e.inWords(r(t))
    }

    function r(t) {
        return (new Date).getTime() - t.getTime()
    }
    t.fn.timeago = function (t, e) {
        var a = t ? i[t] : i.init;
        if (!a) throw new Error("Unknown function name '" + t + "' for timeago");
        return this.each(function () {
            a.call(this, e)
        }), this
    }, document.createElement("abbr"), document.createElement("time")
});

! function (n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof module && "object" == typeof module.exports ? n(require("jquery")) : n(jQuery)
}(function (n) {
    switch (customData.lang) {
    case "es":
    case "pt":
        n.timeago.settings.strings = {
            prefixAgo: "hace",
            prefixFromNow: "dentro de",
            suffixAgo: "",
            suffixFromNow: "",
            seconds: "menos de un minuto",
            minute: "un minuto",
            minutes: "unos %d minutos",
            hour: "una hora",
            hours: "%d horas",
            day: "un día",
            days: "%d días",
            month: "un mes",
            months: "%d meses",
            year: "un año",
            years: "%d años"
        };
        break;
    case "fr":
        n.timeago.settings.strings = {
            prefixAgo: "il y a",
            prefixFromNow: "d'ici",
            seconds: "moins d'une minute",
            minute: "environ une minute",
            minutes: "environ %d minutes",
            hour: "environ une heure",
            hours: "environ %d heures",
            day: "environ un jour",
            days: "environ %d jours",
            month: "environ un mois",
            months: "environ %d mois",
            year: "un an",
            years: "%d ans"
        };
        break;
    case "ar":
        function e(n, e) {
            return e[plural = 0 === n ? 0 : 1 === n ? 1 : 2 === n ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5]
        }
        n.timeago.settings.strings = {
            prefixAgo: "منذ",
            prefixFromNow: "بعد",
            suffixAgo: null,
            suffixFromNow: null,
            second: function (n) {
                return e(n, ["أقل من ثانية", "ثانية واحدة", "ثانيتين", "%d ثوانٍ", "%d ثانية", "%d ثانية"])
            },
            seconds: function (n) {
                return e(n, ["أقل من ثانية", "ثانية واحدة", "ثانيتين", "%d ثوانٍ", "%d ثانية", "%d ثانية"])
            },
            minute: function (n) {
                return e(n, ["أقل من دقيقة", "دقيقة واحدة", "دقيقتين", "%d دقائق", "%d دقيقة", "دقيقة"])
            },
            minutes: function (n) {
                return e(n, ["أقل من دقيقة", "دقيقة واحدة", "دقيقتين", "%d دقائق", "%d دقيقة", "دقيقة"])
            },
            hour: function (n) {
                return e(n, ["أقل من ساعة", "ساعة واحدة", "ساعتين", "%d ساعات", "%d ساعة", "%d ساعة"])
            },
            hours: function (n) {
                return e(n, ["أقل من ساعة", "ساعة واحدة", "ساعتين", "%d ساعات", "%d ساعة", "%d ساعة"])
            },
            day: function (n) {
                return e(n, ["أقل من يوم", "يوم واحد", "يومين", "%d أيام", "%d يومًا", "%d يوم"])
            },
            days: function (n) {
                return e(n, ["أقل من يوم", "يوم واحد", "يومين", "%d أيام", "%d يومًا", "%d يوم"])
            },
            month: function (n) {
                return e(n, ["أقل من شهر", "شهر واحد", "شهرين", "%d أشهر", "%d شهرًا", "%d شهر"])
            },
            months: function (n) {
                return e(n, ["أقل من شهر", "شهر واحد", "شهرين", "%d أشهر", "%d شهرًا", "%d شهر"])
            },
            year: function (n) {
                return e(n, ["أقل من عام", "عام واحد", "%d عامين", "%d أعوام", "%d عامًا"])
            },
            years: function (n) {
                return e(n, ["أقل من عام", "عام واحد", "عامين", "%d أعوام", "%d عامًا", "%d عام"])
            }
        };
        break;
    case "in":
        n.timeago.settings.strings = {
            prefixAgo: null,
            prefixFromNow: null,
            suffixAgo: "yang lalu",
            suffixFromNow: "dari sekarang",
            seconds: "kurang dari semenit",
            minute: "sekitar satu menit",
            minutes: "%d menit",
            hour: "sekitar sejam",
            hours: "sekitar %d jam",
            day: "sehari",
            days: "%d hari",
            month: "sekitar sebulan",
            months: "%d bulan",
            year: "sekitar setahun",
            years: "%d tahun"
        }
    }
});



! function (i) {
    i.fn.theiaStickySidebar = function (t) {
        function e(t, e) {
            var a = o(t, e);
            a || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), i(document).on("scroll." + t.namespace, function (t, e) {
                return function (a) {
                    var n = o(t, e);
                    n && i(this).unbind(a)
                }
            }(t, e)), i(window).on("resize." + t.namespace, function (t, e) {
                return function (a) {
                    var n = o(t, e);
                    n && i(this).unbind(a)
                }
            }(t, e)))
        }

        function o(t, e) {
            return t.initialized === !0 || !(i("body").width() < t.minWidth) && (a(t, e), !0)
        }

        function a(t, e) {
            t.initialized = !0;
            var o = i("#theia-sticky-sidebar-stylesheet-" + t.namespace);
            0 === o.length && i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-' + t.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), e.each(function () {
                function e() {
                    a.fixedScrollTop = 0, a.sidebar.css({
                        "min-height": "1px"
                    }), a.stickySidebar.css({
                        position: "static",
                        width: "",
                        transform: "none"
                    })
                }

                function o(t) {
                    var e = t.height();
                    return t.children().each(function () {
                        e = Math.max(e, i(this).height())
                    }), e
                }
                var a = {};
                if (a.sidebar = i(this), a.options = t || {}, a.container = i(a.options.containerSelector), 0 == a.container.length && (a.container = a.sidebar.parent()), a.sidebar.parents().css("-webkit-transform", "none"), a.sidebar.css({
                        position: a.options.defaultPosition,
                        overflow: "visible",
                        "-webkit-box-sizing": "border-box",
                        "-moz-box-sizing": "border-box",
                        "box-sizing": "border-box"
                    }), a.stickySidebar = a.sidebar.find(".theiaStickySidebar"), 0 == a.stickySidebar.length) {
                    var s = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                    a.sidebar.find("script").filter(function (i, t) {
                        return 0 === t.type.length || t.type.match(s)
                    }).remove(), a.stickySidebar = i("<div>").addClass("theiaStickySidebar").append(a.sidebar.children()), a.sidebar.append(a.stickySidebar)
                }
                a.marginBottom = parseInt(a.sidebar.css("margin-bottom")), a.paddingTop = parseInt(a.sidebar.css("padding-top")), a.paddingBottom = parseInt(a.sidebar.css("padding-bottom"));
                var r = a.stickySidebar.offset().top,
                    d = a.stickySidebar.outerHeight();
                a.stickySidebar.css("padding-top", 1), a.stickySidebar.css("padding-bottom", 1), r -= a.stickySidebar.offset().top, d = a.stickySidebar.outerHeight() - d - r, 0 == r ? (a.stickySidebar.css("padding-top", 0), a.stickySidebarPaddingTop = 0) : a.stickySidebarPaddingTop = 1, 0 == d ? (a.stickySidebar.css("padding-bottom", 0), a.stickySidebarPaddingBottom = 0) : a.stickySidebarPaddingBottom = 1, a.previousScrollTop = null, a.fixedScrollTop = 0, e(), a.onScroll = function (a) {
                    if (a.stickySidebar.is(":visible")) {
                        if (i("body").width() < a.options.minWidth) return void e();
                        if (a.options.disableOnResponsiveLayouts) {
                            var s = a.sidebar.outerWidth("none" == a.sidebar.css("float"));
                            if (s + 50 > a.container.width()) return void e()
                        }
                        var r = i(document).scrollTop(),
                            d = "static";
                        if (r >= a.sidebar.offset().top + (a.paddingTop - a.options.additionalMarginTop)) {
                            var c, p = a.paddingTop + t.additionalMarginTop,
                                b = a.paddingBottom + a.marginBottom + t.additionalMarginBottom,
                                l = a.sidebar.offset().top,
                                f = a.sidebar.offset().top + o(a.container),
                                h = 0 + t.additionalMarginTop,
                                g = a.stickySidebar.outerHeight() + p + b < i(window).height();
                            c = g ? h + a.stickySidebar.outerHeight() : i(window).height() - a.marginBottom - a.paddingBottom - t.additionalMarginBottom;
                            var u = l - r + a.paddingTop,
                                S = f - r - a.paddingBottom - a.marginBottom,
                                y = a.stickySidebar.offset().top - r,
                                m = a.previousScrollTop - r;
                            "fixed" == a.stickySidebar.css("position") && "modern" == a.options.sidebarBehavior && (y += m), "stick-to-top" == a.options.sidebarBehavior && (y = t.additionalMarginTop), "stick-to-bottom" == a.options.sidebarBehavior && (y = c - a.stickySidebar.outerHeight()), y = m > 0 ? Math.min(y, h) : Math.max(y, c - a.stickySidebar.outerHeight()), y = Math.max(y, u), y = Math.min(y, S - a.stickySidebar.outerHeight());
                            var k = a.container.height() == a.stickySidebar.outerHeight();
                            d = (k || y != h) && (k || y != c - a.stickySidebar.outerHeight()) ? r + y - a.sidebar.offset().top - a.paddingTop <= t.additionalMarginTop ? "static" : "absolute" : "fixed"
                        }
                        if ("fixed" == d) {
                            var v = i(document).scrollLeft();
                            a.stickySidebar.css({
                                position: "fixed",
                                width: n(a.stickySidebar) + "px",
                                transform: "translateY(" + y + "px)",
                                left: a.sidebar.offset().left + parseInt(a.sidebar.css("padding-left")) - v + "px",
                                top: "0px"
                            })
                        } else if ("absolute" == d) {
                            var x = {};
                            "absolute" != a.stickySidebar.css("position") && (x.position = "absolute", x.transform = "translateY(" + (r + y - a.sidebar.offset().top - a.stickySidebarPaddingTop - a.stickySidebarPaddingBottom) + "px)", x.top = "0px"), x.width = n(a.stickySidebar) + "px", x.left = "", a.stickySidebar.css(x)
                        } else "static" == d && e();
                        "static" != d && 1 == a.options.updateSidebarHeight && a.sidebar.css({
                            "min-height": a.stickySidebar.outerHeight() + a.stickySidebar.offset().top - a.sidebar.offset().top + a.paddingBottom
                        }), a.previousScrollTop = r
                    }
                }, a.onScroll(a), i(document).on("scroll." + a.options.namespace, function (i) {
                    return function () {
                        i.onScroll(i)
                    }
                }(a)), i(window).on("resize." + a.options.namespace, function (i) {
                    return function () {
                        i.stickySidebar.css({
                            position: "static"
                        }), i.onScroll(i)
                    }
                }(a)), "undefined" != typeof ResizeSensor && new ResizeSensor(a.stickySidebar[0], function (i) {
                    return function () {
                        i.onScroll(i)
                    }
                }(a))
            })
        }

        function n(i) {
            var t;
            try {
                t = i[0].getBoundingClientRect().width
            } catch (i) {}
            return "undefined" == typeof t && (t = i.width()), t
        }
        var s = {
            containerSelector: "",
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
            updateSidebarHeight: !0,
            minWidth: 0,
            disableOnResponsiveLayouts: !0,
            sidebarBehavior: "modern",
            defaultPosition: "relative",
            namespace: "TSS"
        };
        return t = i.extend(s, t), t.additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0, e(t, this), this
    }
}(jQuery);



! function (c) {
    c.fn.lazy = function () {
        function a(a) {
            var e = a,
                o = c(window),
                t = e.data("style"),
                n = e.data("caps"),
                r = "w" + Math.round(e.width()) + "-h" + Math.round(e.height()) + "-n",
                s = "undefined" != typeof propData && propData.noThumb || "https://1.bp.blogspot.com/-OQTT8OprpKI/Xses6gXJp6I/AAAAAAAAA88/j2ubRv-pRqUPrs8ZS9EP2O-m-t7a66kZACLcBGAsYHQ/s72-c/no-image.png";
            t ? function (c, a, e, o) {
                a.is(":hidden") || e.on("load resize scroll", (function o() {
                    if (e.scrollTop() + e.height() >= a.offset().top) {
                        e.off("load resize scroll", o);
                        var t = new Image;
                        t.onload = function () {
                            a.css("background-image", "url('" + this.src + "')").addClass("lazy")
                        }, t.src = c
                    }
                })).trigger("scroll")
            }(t.match("/s72-c") ? t.replace("/s72-c", "/" + r) : t.match("=s72-c") ? t.replace("=s72-c", "=" + r) : t.match("/w72-h") ? t.replace("/w72-h72-n", "/" + r).replace("/w72-h72-p-k-no-nu", "/" + r) : t.match("=w72-h") ? t.replace("=w72-h72-n", "=" + r).replace("=w72-h72-p-k-no-nu", "=" + r) : t.match("resources.blogblog.com") ? s.replace("/s72-c", "/" + r).replace("=s72-c", "=" + r) : t, e, o) : n && e.text(n.charAt(0))
        }
        return this.each((function () {
            a(c(this))
        }))
    }
}(jQuery);



! function (a) {
    a.fn.submenu = function () {
        return this.each(function () {
            for (var g = a(this), f = g.find("> li").children("a"), j = f.length, e = 0; e < j; e++) {
                var d = f.eq(e),
                    c = d.text();
                if ("_" !== c.charAt(0) && "_" !== c.charAt(1)) {
                    var h = f.eq(e + 1).text();
                    if ("_" === h.charAt(0) && "_" !== h.charAt(1)) {
                        var i = f.eq(e + 2).text();
                        if ("_" === i.charAt(0) && "_" === i.charAt(1)) {
                            var b = d.parent();
                            b.hasClass("hasMega") || b.addClass("hasMenu").append('<ul class="subMenu chunked"/>')
                        } else {
                            var b = d.parent();
                            b.hasClass("hasMega") || b.addClass("hasMenu").append('<ul class="subMenu"/>')
                        }
                    }
                }
                "_" !== c.charAt(0) || "_" === c.charAt(1) || b.hasClass("hasMega") || (d.text(c.replace("_", "")), d.parent().appendTo(b.children(".subMenu"))), "_" !== c.charAt(0) || "_" !== c.charAt(1) || b.hasClass("hasMega") || (d.text(c.replace("__", "")), d.parent().addClass("isFirst").appendTo(b.children(".subMenu.chunked")))
            }
            var k = g.find(".subMenu.chunked").find("li:not(.isFirst)");
            k.each(function () {
                $(this).nextUntil(k).wrapAll('<div class="itemsWrapped"></div>'), $(this).prependTo($(this).next(".itemsWrapped"))
            })
        })
    }
}(jQuery);



! function (e) {
    e.fn.ticker = function (n) {
        return n = jQuery.extend({
            fadeInTime: 800,
            fadeOutTime: 800,
            interval: 3e3
        }, n), this.each((function () {
            var t, a, i, s, d;
            t = e(this), i = t.find(".posts"), s = i.find(".post"), d = !1, s.wrap('<div class="wrp-1"></div>'), (s = i.find(".wrp-1")).eq(0).addClass("active"), s.eq(0).show(), setInterval((function () {
                d || (a = i.find(".active")).fadeOut(n.fadeOutTime, (function () {
                    0 !== a.next().length ? (a.removeClass("active"), a.next().addClass("active"), a.next().fadeIn(n.fadeInTime)) : (a.removeClass("active"), s.eq(0).addClass("active"), s.eq(0).fadeIn(n.fadeInTime)), i.find(".postImage span").lazy()
                }))
            }), n.interval), t.on("mouseover mouseout", (function (e) {
                d = "mouseover" == e.type
            }))
        }))
    }
}(jQuery);



jQuery.fn.currDate = function () {
    var t = new Date,
        e = "0" + t.getDate(),
        n = Months()[t.getMonth()],
        a = t.getFullYear(),
        s = e.slice(-2) + '<span class="icon-meta">' + n + "<span> " + a + "</span></span>";
    return this.html(s)
};
