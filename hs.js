! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function (e) {
            return t.flat.call(e)
        } : function (e) {
            return t.concat.apply([], e)
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        y = n.hasOwnProperty,
        a = y.toString,
        l = a.call(Object),
        v = {},
        m = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        x = function (e) {
            return null != e && e === e.window
        },
        S = C.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || S).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.6.3",
        E = function (e, t) {
            return new E.fn.init(e, t)
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    E.fn = E.prototype = {
        jquery: f,
        constructor: E,
        length: 0,
        toArray: function () {
            return s.call(this)
        },
        get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = E.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return E.each(this, e)
        },
        map: function (n) {
            return this.pushStack(E.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function () {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        even: function () {
            return this.pushStack(E.grep(this, function (e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function () {
            return this.pushStack(E.grep(this, function (e, t) {
                return t % 2
            }))
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, E.extend = E.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {}, i = !1, a[t] = E.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, E.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = y.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function (e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function (e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: v
    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function (n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, S, y, s, c, v, E = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            j = function (e, t) {
                return e === t && (l = !0), 0
            },
            D = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function () {
                T()
            },
            ae = be(function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function (e, t) {
                    L.apply(e, O.call(t))
                } : function (e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, S)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && v(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                    } if (d.qsa && !N[t + " "] && (!y || !y.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ve(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = E)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        if (d.cssSupportsSelector && !CSS.supports("selector(:is(" + c + "))")) throw new Error;
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === E && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[E] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ye(a) {
            return le(function (o) {
                return o = +o, le(function (e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ve(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function (e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function (e) {
                var t, n, r = e ? e.ownerDocument || e : p;
                return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, S = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
                    return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), d.cssSupportsSelector = ce(function () {
                    return CSS.supports("selector(*)") && C.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))")
                }), d.attributes = ce(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function (e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
                    return a.appendChild(e).id = E, !C.getElementsByName || !C.getElementsByName(E).length
                }), d.getById ? (b.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && S) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function (e) {
                    var n = e.replace(te, ne);
                    return function (e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && S) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && S) return t.getElementsByClassName(e)
                }, s = [], y = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + E + "-]").length || y.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || y.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + E + "+*").length || y.push(".#.+[+~]"), e.querySelectorAll("\\\f"), y.push("[\\r\\n\\f]")
                }), ce(function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
                }), d.cssSupportsSelector || y.push(":has"), y = y.length && new RegExp(y.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), v = t || K.test(a.contains) ? function (e, t) {
                    var n = 9 === e.nodeType && e.documentElement || e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function (e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, j = t ? function (e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && v(p, e) ? -1 : t == C || t.ownerDocument == p && v(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                }), C
            }, se.matches = function (e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function (e, t) {
                if (T(e), d.matchesSelector && S && !N[t + " "] && (!s || !s.test(t)) && (!y || !y.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    N(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function (e, t) {
                return (e.ownerDocument || e) != C && T(e), v(e, t)
            }, se.attr = function (e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
                return void 0 !== r ? r : d.attributes || !S ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function (e) {
                return (e + "").replace(re, ie)
            }, se.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function (e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function (e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = m[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (n, r, i) {
                        return function (e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace($, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function (h, e, t, g, y) {
                        var v = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === y ? function (e) {
                            return !!e.parentNode
                        } : function (e, t, n) {
                            var r, i, o, a, s, u, l = v !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (v) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [k, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= y) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function (e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[E] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function (e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function (e) {
                        var r = [],
                            i = [],
                            s = f(e.replace(B, "$1"));
                        return s[E] ? le(function (e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function (e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function (t) {
                        return function (e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function (t) {
                        return t = t.replace(te, ne),
                            function (e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function (n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function (e) {
                                var t;
                                do {
                                    if (t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function (e) {
                        return e === a
                    },
                    focus: function (e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function (e) {
                        return J.test(e.nodeName)
                    },
                    input: function (e) {
                        return Q.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ye(function () {
                        return [0]
                    }),
                    last: ye(function (e, t) {
                        return [t - 1]
                    }),
                    eq: ye(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ye(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ye(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ye(function (e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ye(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function (e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function (e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[E] || (e[E] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function (e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, y, v, e) {
            return y && !y[E] && (y = Ce(y)), v && !v[E] && (v = Ce(v, e)), le(function (e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? v || (e ? d : l || y) ? [] : t : f;
                if (g && g(f, p, n, r), y) {
                    i = Te(p, u), y(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (v || d) {
                        if (v) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            v(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = v ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), v ? v(null, t, p, r) : H.apply(t, p)
            })
        }

        function Se(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
                    return e === i
                }, a, !0), l = be(function (e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function (e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[E]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, s < n && Se(e.slice(s, n)), n < r && Se(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                } return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(B, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function (e, t) {
            var n, y, v, m, x, r, i = [],
                o = [],
                a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Se(t[n]))[E] ? i.push(a) : o.push(a);
                (a = A(e, (y = o, m = 0 < (v = i).length, x = 0 < y.length, r = function (e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !S);
                            while (s = y[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                } i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = v[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function (e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && S && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ve(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !S, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, d.sortStable = E.split("").sort(j).join("") === E, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function (e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    E.find = d, E.expr = d.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = d.uniqueSort, E.text = d.getText, E.isXMLDoc = d.isXML, E.contains = d.contains, E.escapeSelector = d.escape;
    var h = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && E(e).is(n)) break;
                    r.push(e)
                } return r
        },
        T = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        k = E.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return m(n) ? E.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? E.grep(e, function (e) {
            return e === n !== r
        }) : "string" != typeof n ? E.grep(e, function (e) {
            return -1 < i.call(n, e) !== r
        }) : E.filter(n, e, r)
    }
    E.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, E.fn.extend({
        find: function (e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(E(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (E.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
            return 1 < r ? E.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function (e) {
            return !!j(this, "string" == typeof e && k.test(e) ? E(e) : e || [], !1).length
        }
    });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || D, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : S, !0)), N.test(r[1]) && E.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = S.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
    }).prototype = E.fn, D = E(S);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    E.fn.extend({
        has: function (e) {
            var t = E(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (E.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && E(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), E.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return h(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function (e) {
            return O(e, "nextSibling")
        },
        prev: function (e) {
            return O(e, "previousSibling")
        },
        nextAll: function (e) {
            return h(e, "nextSibling")
        },
        prevAll: function (e) {
            return h(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function (e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return T(e.firstChild)
        },
        contents: function (e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
        }
    }, function (r, i) {
        E.fn[r] = function (e, t) {
            var n = E.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (H[r] || E.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    E.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, E.each(e.match(P) || [], function (e, t) {
            n[t] = !0
        }), n) : E.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function () {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function () {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        E.each(e, function (e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function () {
                    return E.each(arguments, function (e, t) {
                        var n;
                        while (-1 < (n = E.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function (e) {
                    return e ? -1 < E.inArray(e, s) : 0 < s.length
                },
                empty: function () {
                    return s && (s = []), this
                },
                disable: function () {
                    return a = u = [], s = t = "", this
                },
                disabled: function () {
                    return !s
                },
                lock: function () {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function () {
                    return !!a
                },
                fireWith: function (e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function () {
                    return f.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!o
                }
            };
        return f
    }, E.extend({
        Deferred: function (e) {
            var o = [
                    ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                    ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function (e) {
                        return a.then(null, e)
                    },
                    pipe: function () {
                        var i = arguments;
                        return E.Deferred(function (r) {
                            E.each(o, function (e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function (t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function () {
                                var n = this,
                                    r = arguments,
                                    e = function () {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function () {
                                        try {
                                            e()
                                        } catch (e) {
                                            E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return E.Deferred(function (e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? E.extend(e, a) : a
                    }
                },
                s = {};
            return E.each(o, function (e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function () {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function (e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = E.Deferred(),
                a = function (t) {
                    return function (e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, E.readyException = function (e) {
        C.setTimeout(function () {
            throw e
        })
    };
    var F = E.Deferred();

    function $() {
        S.removeEventListener("DOMContentLoaded", $), C.removeEventListener("load", $), E.ready()
    }
    E.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            E.readyException(e)
        }), this
    }, E.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || F.resolveWith(S, [E])
        }
    }), E.ready.then = F.then, "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? C.setTimeout(E.ready) : (S.addEventListener("DOMContentLoaded", $), C.addEventListener("load", $));
    var B = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) B(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                    return l.call(E(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = E.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !E.isEmptyObject(t)
        }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    E.extend({
        hasData: function (e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function (e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function (e, t) {
            Q.remove(e, t)
        },
        _data: function (e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function (e, t) {
            Y.remove(e, t)
        }
    }), E.fn.extend({
        data: function (n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function () {
                Q.set(this, n)
            }) : B(this, function (e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function () {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                Q.remove(this, e)
            })
        }
    }), E.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, E.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = E.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = E._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                E.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: E.Callbacks("once memory").add(function () {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), E.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                E.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = E.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = S.documentElement,
        ie = function (e) {
            return E.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function (e) {
        return E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === E.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function () {
                return r.cur()
            } : function () {
                return E.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (E.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (E.cssNumber[t] || "px" !== l && +u) && te.exec(E.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) E.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, E.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = E.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    E.fn.extend({
        show: function () {
            return le(this, !0)
        },
        hide: function () {
            return le(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? E(this).show() : E(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = S.createDocumentFragment().appendChild(S.createElement("div")), (fe = S.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", v.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? E.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, v.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) E.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            E.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < E.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Te() {
        return !1
    }

    function Ce(e, t) {
        return e === function () {
            try {
                return S.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Se(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Se(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return E().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = E.guid++)), e.each(function () {
            E.event.add(this, t, i, r, n)
        })
    }

    function Ee(e, i, o) {
        o ? (Y.set(e, i, !1), E.event.add(e, i, {
            namespace: !1,
            handler: function (e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(E.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else r.length && (Y.set(this, i, {
                    value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && E.event.add(e, i, we)
    }
    E.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && E.find.matchesSelector(re, i), n.guid || (n.guid = E.guid++), (u = y.events) || (u = y.events = Object.create(null)), (a = y.handle) || (a = y.handle = function (e) {
                    return "undefined" != typeof E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length;
                while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = E.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = E.event.special[d] || {}, c = E.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && E.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), E.event.global[d] = !0)
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = Y.hasData(e) && Y.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = E.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || E.removeEvent(e, d, y.handle), delete u[d])
                    } else
                        for (d in u) E.event.remove(e, d + t[l], n, r, !0);
                E.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = E.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = E.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = E.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < E(i, this).index(l) : E.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function (t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function (e) {
            return e[E.expando] ? e : new E.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ee(t, "click", we), !1
                },
                trigger: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ee(t, "click"), !0
                },
                _default: function (e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, E.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, E.Event = function (e, t) {
        if (!(this instanceof E.Event)) return new E.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
    }, E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, E.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, E.event.addProp), E.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        E.event.special[t] = {
            setup: function () {
                return Ee(this, t, Ce), !1
            },
            trigger: function () {
                return Ee(this, t), !0
            },
            _default: function (e) {
                return Y.get(e.target, t)
            },
            delegateType: e
        }
    }), E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, i) {
        E.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function (e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), E.fn.extend({
        on: function (e, t, n, r) {
            return Se(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
            return Se(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
                E.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function je(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) E.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = E.extend({}, o), Q.set(t, a))
        }
    }

    function He(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !v.checkClone && Ae.test(d)) return n.each(function (e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = E.map(ye(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = E.clone(u, !0, !0), s && E.merge(a, ye(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, E.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && E.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : b(u.textContent.replace(Ne, ""), u, l))
        }
        return n
    }

    function Oe(e, t, n) {
        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(ye(r)), r.parentNode && (n && ie(r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    E.extend({
        htmlPrefilter: function (e) {
            return e
        },
        clone: function (e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
                else Le(e, c);
            return 0 < (a = ye(c, "script")).length && ve(a, !f && ye(e, "script")), c
        },
        cleanData: function (e) {
            for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), E.fn.extend({
        detach: function (e) {
            return Oe(this, e, !0)
        },
        remove: function (e) {
            return Oe(this, e)
        },
        text: function (e) {
            return B(this, function (e) {
                return void 0 === e ? E.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return He(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return He(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return He(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return He(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(ye(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return E.clone(this, e, t)
            })
        },
        html: function (e) {
            return B(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(ye(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var n = [];
            return He(this, arguments, function (e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(ye(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, a) {
        E.fn[e] = function (e) {
            for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), E(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = /^--/,
        Me = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Ie = function (e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        We = new RegExp(ne.join("|"), "i"),
        Fe = "[\\x20\\t\\r\\n\\f]",
        $e = new RegExp("^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$", "g");

    function Be(e, t, n) {
        var r, i, o, a, s = Re.test(t),
            u = e.style;
        return (n = n || Me(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace($e, "$1") || void 0), "" !== a || ie(e) || (a = E.style(e, t)), !v.pixelBoxStyles() && Pe.test(a) && We.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function _e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function () {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = S.createElement("div"),
            l = S.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, E.extend(v, {
            boxSizingReliable: function () {
                return e(), r
            },
            pixelBoxStyles: function () {
                return e(), o
            },
            pixelPosition: function () {
                return e(), n
            },
            reliableMarginLeft: function () {
                return e(), s
            },
            scrollboxSize: function () {
                return e(), i
            },
            reliableTrDimensions: function () {
                var e, t, n, r;
                return null == a && (e = S.createElement("table"), t = S.createElement("tr"), n = S.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
            }
        }))
    }();
    var ze = ["Webkit", "Moz", "ms"],
        Ue = S.createElement("div").style,
        Xe = {};

    function Ve(e) {
        var t = E.cssProps[e] || Xe[e];
        return t || (e in Ue ? e : Xe[e] = function (e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = ze.length;
            while (n--)
                if ((e = ze[n] + t) in Ue) return e
        }(e) || e)
    }
    var Ge = /^(none|table(?!-c[ea]).+)/,
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += E.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= E.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= E.css(e, "border" + ne[a] + "Width", !0, i))) : (u += E.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += E.css(e, "border" + ne[a] + "Width", !0, i) : s += E.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Ze(e, t, n) {
        var r = Me(e),
            i = (!v.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i)
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Re.test(t),
                    l = e.style;
                if (u || (t = Ve(s)), a = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = X(t);
            return Re.test(t) || (t = Ve(s)), (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), E.each(["height", "width"], function (e, u) {
        E.cssHooks[u] = {
            get: function (e, t, n) {
                if (t) return !Ge.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : Ie(e, Ye, function () {
                    return Ze(e, u, n)
                })
            },
            set: function (e, t, n) {
                var r, i = Me(e),
                    o = !v.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i),
                    s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = E.css(e, u)), Je(0, t, s)
            }
        }
    }), E.cssHooks.marginLeft = _e(v.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - Ie(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (i, o) {
        E.cssHooks[i + o] = {
            expand: function (e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (E.cssHooks[i + o].set = Je)
    }), E.fn.extend({
        css: function (e, t) {
            return B(this, function (e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Me(e), i = t.length; a < i; a++) o[t[a]] = E.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((E.Tween = et).prototype = {
        constructor: et,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (E.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
        }
    }).init.prototype = et.prototype, (et.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, E.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, E.fx = et.prototype.init, E.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() {
        nt && (!1 === S.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, E.fx.interval), E.fx.tick())
    }

    function ut() {
        return C.setTimeout(function () {
            tt = void 0
        }), tt = Date.now()
    }

    function lt(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ft(o, e, t) {
        var n, a, r = 0,
            i = ft.prefilters.length,
            s = E.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (a) return !1;
                for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: E.extend({}, e),
                opts: E.extend(!0, {
                    specialEasing: {},
                    easing: E.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: tt || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = E.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = E.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return E.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), E.fx.timer(E.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    E.Animation = E.extend(ft, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function (e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
        },
        prefilters: [function (e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                y = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function () {
                    p.always(function () {
                        a.unqueued--, E.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], ot.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !y || void 0 === y[r]) continue;
                        g = !0
                    }
                    d[r] = y && y[r] || E.style(e, r)
                } if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = Y.get(e, "display")), "none" === (c = E.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = E.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === E.css(e, "float") && (u || (p.done(function () {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (y ? "hidden" in y && (g = y.hidden) : y = Y.access(e, "fxshow", {
                    display: l
                }), o && (y.hidden = !g), g && le([e], !0), p.done(function () {
                    for (r in g || le([e]), Y.remove(e, "fxshow"), d) E.style(e, r, d[r])
                })), u = ct(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function (e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }), E.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? E.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            m(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue)
        }, r
    }, E.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (t, e, n, r) {
            var i = E.isEmptyObject(t),
                o = E.speed(e, n, r),
                a = function () {
                    var e = ft(this, E.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function (i, e, o) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = E.timers,
                    r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || E.dequeue(this, i)
            })
        },
        finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = E.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, E.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), E.each(["toggle", "show", "hide"], function (e, r) {
        var i = E.fn[r];
        E.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }), E.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, r) {
        E.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), E.timers = [], E.fx.tick = function () {
        var e, t = 0,
            n = E.timers;
        for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || E.fx.stop(), tt = void 0
    }, E.fx.timer = function (e) {
        E.timers.push(e), E.fx.start()
    }, E.fx.interval = 13, E.fx.start = function () {
        nt || (nt = !0, st())
    }, E.fx.stop = function () {
        nt = null
    }, E.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, E.fn.delay = function (r, e) {
        return r = E.fx && E.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function () {
                C.clearTimeout(n)
            }
        })
    }, rt = S.createElement("input"), it = S.createElement("select").appendChild(S.createElement("option")), rt.type = "checkbox", v.checkOn = "" !== rt.value, v.optSelected = it.selected, (rt = S.createElement("input")).value = "t", rt.type = "radio", v.radioValue = "t" === rt.value;
    var pt, dt = E.expr.attrHandle;
    E.fn.extend({
        attr: function (e, t) {
            return B(this, E.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each(function () {
                E.removeAttr(this, e)
            })
        }
    }), E.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!v.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), pt = {
        set: function (e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = dt[t] || E.find.attr;
        dt[t] = function (e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function yt(e) {
        return (e.match(P) || []).join(" ")
    }

    function vt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    E.fn.extend({
        prop: function (e, t) {
            return B(this, E.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[E.propFix[e] || e]
            })
        }
    }), E.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), v.optSelected || (E.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        E.propFix[this.toLowerCase()] = this
    }), E.fn.extend({
        addClass: function (t) {
            var e, n, r, i, o, a;
            return m(t) ? this.each(function (e) {
                E(this).addClass(t.call(this, e, vt(this)))
            }) : (e = mt(t)).length ? this.each(function () {
                if (r = vt(this), n = 1 === this.nodeType && " " + yt(r) + " ") {
                    for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    a = yt(n), r !== a && this.setAttribute("class", a)
                }
            }) : this
        },
        removeClass: function (t) {
            var e, n, r, i, o, a;
            return m(t) ? this.each(function (e) {
                E(this).removeClass(t.call(this, e, vt(this)))
            }) : arguments.length ? (e = mt(t)).length ? this.each(function () {
                if (r = vt(this), n = 1 === this.nodeType && " " + yt(r) + " ") {
                    for (o = 0; o < e.length; o++) {
                        i = e[o];
                        while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ")
                    }
                    a = yt(n), r !== a && this.setAttribute("class", a)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function (t, n) {
            var e, r, i, o, a = typeof t,
                s = "string" === a || Array.isArray(t);
            return m(t) ? this.each(function (e) {
                E(this).toggleClass(t.call(this, e, vt(this), n), n)
            }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = mt(t), this.each(function () {
                if (s)
                    for (o = E(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else void 0 !== t && "boolean" !== a || ((r = vt(this)) && Y.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : Y.get(this, "__className__") || ""))
            }))
        },
        hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + yt(vt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var xt = /\r/g;
    E.fn.extend({
        val: function (n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = E.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }), E.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : yt(E.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = E(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function (e, t) {
                    var n, r, i = e.options,
                        o = E.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), E.each(["radio", "checkbox"], function () {
        E.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t)
            }
        }, v.checkOn || (E.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), v.focusin = "onfocusin" in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function (e) {
            e.stopPropagation()
        };
    E.extend(E.event, {
        trigger: function (e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || S],
                d = y.call(e, "type") ? e.type : e,
                h = y.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || S, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + E.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[E.expando] ? e : new E.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || S) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), E.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), E.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function (e, t, n) {
            var r = E.extend(new E.Event, n, {
                type: e,
                isSimulated: !0
            });
            E.event.trigger(r, null, t)
        }
    }), E.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                E.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return E.event.trigger(e, t, n, !0)
        }
    }), v.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function (n, r) {
        var i = function (e) {
            E.event.simulate(r, e.target, E.event.fix(e))
        };
        E.event.special[r] = {
            setup: function () {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function () {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var Tt = C.location,
        Ct = {
            guid: Date.now()
        },
        St = /\?/;
    E.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, function (e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var Et = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function jt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) E.each(e, function (e, t) {
            r || Et.test(n) ? i(n, t) : jt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) jt(n + "[" + t + "]", e[t], r, i)
    }
    E.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) jt(n, e[n], t, i);
        return r.join("&")
    }, E.fn.extend({
        serialize: function () {
            return E.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var n = E(this).val();
                return null == n ? null : Array.isArray(n) ? E.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var Dt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = S.createElement("a");

    function Ft(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function $t(t, i, o, a) {
        var s = {},
            u = t === Mt;

        function l(e) {
            var r;
            return s[e] = !0, E.each(t[e] || [], function (e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Bt(e, t) {
        var n, r, i = E.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && E.extend(!0, e, r), e
    }
    Wt.href = Tt.href, E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": E.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Bt(Bt(e, E.ajaxSettings), t) : Bt(E.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, y = E.ajaxSetup({}, t),
                v = y.context || y,
                m = y.context && (v.nodeType || v.jquery) ? E(v) : E.event,
                x = E.Deferred(),
                b = E.Callbacks("once memory"),
                w = y.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function () {
                        return h ? p : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == h && (y.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), y.url = ((e || y.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), y.type = t.method || t.type || y.method || y.type, y.dataTypes = (y.dataType || "*").toLowerCase().match(P) || [""], null == y.crossDomain) {
                r = S.createElement("a");
                try {
                    r.href = y.url, r.href = r.href, y.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    y.crossDomain = !0
                }
            }
            if (y.data && y.processData && "string" != typeof y.data && (y.data = E.param(y.data, y.traditional)), $t(Rt, y, t, T), h) return T;
            for (i in (g = E.event && y.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), y.type = y.type.toUpperCase(), y.hasContent = !Ot.test(y.type), f = y.url.replace(qt, ""), y.hasContent ? y.data && y.processData && 0 === (y.contentType || "").indexOf("application/x-www-form-urlencoded") && (y.data = y.data.replace(Dt, "+")) : (o = y.url.slice(f.length), y.data && (y.processData || "string" == typeof y.data) && (f += (St.test(f) ? "&" : "?") + y.data, delete y.data), !1 === y.cache && (f = f.replace(Lt, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), y.url = f + o), y.ifModified && (E.lastModified[f] && T.setRequestHeader("If-Modified-Since", E.lastModified[f]), E.etag[f] && T.setRequestHeader("If-None-Match", E.etag[f])), (y.data && y.hasContent && !1 !== y.contentType || t.contentType) && T.setRequestHeader("Content-Type", y.contentType), T.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + It + "; q=0.01" : "") : y.accepts["*"]), y.headers) T.setRequestHeader(i, y.headers[i]);
            if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h)) return T.abort();
            if (u = "abort", b.add(y.complete), T.done(y.success), T.fail(y.error), c = $t(Mt, y, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, y]), h) return T;
                y.async && 0 < y.timeout && (d = C.setTimeout(function () {
                    T.abort("timeout")
                }, y.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            } if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(y, T, n)), !i && -1 < E.inArray("script", y.dataTypes) && E.inArray("json", y.dataTypes) < 0 && (y.converters["text script"] = function () {}), s = function (e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(y, s, T, i), i ? (y.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (E.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (E.etag[f] = u)), 204 === e || "HEAD" === y.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]), b.fireWith(v, [T, l]), g && (m.trigger("ajaxComplete", [T, y]), --E.active || E.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function (e, t, n) {
            return E.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return E.get(e, void 0, t, "script")
        }
    }), E.each(["get", "post"], function (e, i) {
        E[i] = function (e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), E.ajax(E.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, E.isPlainObject(e) && e))
        }
    }), E.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), E._evalUrl = function (e, t, n) {
        return E.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {}
            },
            dataFilter: function (e) {
                E.globalEval(e, t, n)
            }
        })
    }, E.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (n) {
            return m(n) ? this.each(function (e) {
                E(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = E(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function (t) {
            var n = m(t);
            return this.each(function (e) {
                E(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                E(this).replaceWith(this.childNodes)
            }), this
        }
    }), E.expr.pseudos.hidden = function (e) {
        return !E.expr.pseudos.visible(e)
    }, E.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, E.ajaxSettings.xhr = function () {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var _t = {
            0: 200,
            1223: 204
        },
        zt = E.ajaxSettings.xhr();
    v.cors = !!zt && "withCredentials" in zt, v.ajax = zt = !!zt, E.ajaxTransport(function (i) {
        var o, a;
        if (v.cors || zt && !i.crossDomain) return {
            send: function (e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function (e) {
                    return function () {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
                    4 === r.readyState && C.setTimeout(function () {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function () {
                o && o()
            }
        }
    }), E.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), E.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return E.globalEval(e), e
            }
        }
    }), E.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), E.ajaxTransport("script", function (n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function (e, t) {
                r = E("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function (e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), S.head.appendChild(r[0])
            },
            abort: function () {
                i && i()
            }
        }
    });
    var Ut, Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Xt.pop() || E.expando + "_" + Ct.guid++;
            return this[e] = !0, e
        }
    }), E.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || E.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === i ? E(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), v.createHTMLDocument = ((Ut = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), E.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href, t.head.appendChild(r)) : t = S), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && E(o).remove(), E.merge([], i.childNodes)));
        var r, i, o
    }, E.fn.load = function (e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = yt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && E.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, E.expr.pseudos.animated = function (t) {
        return E.grep(E.timers, function (e) {
            return t === e.elem
        }).length
    }, E.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l = E.css(e, "position"),
                c = E(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = E.css(e, "top"), u = E.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, E.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, E.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                E.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0), i.left += E.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - E.css(r, "marginTop", !0),
                    left: t.left - i.left - E.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && "static" === E.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, i) {
        var o = "pageYOffset" === i;
        E.fn[t] = function (e) {
            return B(this, function (e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), E.each(["top", "left"], function (e, n) {
        E.cssHooks[n] = _e(v.pixelPosition, function (e, t) {
            if (t) return t = Be(e, n), Pe.test(t) ? E(e).position()[n] + "px" : t
        })
    }), E.each({
        Height: "height",
        Width: "width"
    }, function (a, s) {
        E.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function (r, o) {
            E.fn[o] = function (e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return B(this, function (e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        E.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), E.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        E.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    E.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || E.guid++, i
    }, E.holdReady = function (e) {
        e ? E.readyWait++ : E.ready(!0)
    }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = A, E.isFunction = m, E.isWindow = x, E.camelCase = X, E.type = w, E.now = Date.now, E.isNumeric = function (e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, E.trim = function (e) {
        return null == e ? "" : (e + "").replace(Gt, "$1")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return E
    });
    var Yt = C.jQuery,
        Qt = C.$;
    return E.noConflict = function (e) {
        return C.$ === E && (C.$ = Qt), e && C.jQuery === E && (C.jQuery = Yt), E
    }, "undefined" == typeof e && (C.jQuery = C.$ = E), E
});
! function (a) {
    "function" === typeof define && define.amd ? define(["jquery"], a) : "undefined" !== typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
    var b = window.Slick || {};
    b = function () {
        function c(c, d) {
            var f, e = this;
            e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (b, c) {
                    return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, e.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" !== typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" !== typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)
        }
        var b = 0;
        return c
    }(), b.prototype.activateADA = function () {
        var a = this;
        a.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
        var e = this;
        if ("boolean" === typeof c) d = c, c = null;
        else if (c < 0 || c >= e.slideCount) return !1;
        e.unload(), "number" === typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b)
        }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateHeight = function () {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed)
        }
    }, b.prototype.animateSlide = function (b, c) {
        var d = {},
            e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function (a) {
                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
            },
            complete: function () {
                c && c.call()
            }
        })) : (e.applyTransition(), b = Math.ceil(b), d[e.animType] = e.options.vertical === !1 ? "translate3d(" + b + "px, 0px, 0px)" : "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
            e.disableTransition(), c.call()
        }, e.options.speed))
    }, b.prototype.getNavTarget = function () {
        var b = this,
            c = b.options.asNavFor;
        return c && null !== c && (c = a(c).not(b.$slider)), c
    }, b.prototype.asNavFor = function (b) {
        var c = this,
            d = c.getNavTarget();
        null !== d && "object" === typeof d && d.each(function () {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }, b.prototype.applyTransition = function (a) {
        var b = this,
            c = {};
        c[b.transitionType] = b.options.fade === !1 ? b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function () {
        var a = this;
        a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function () {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function () {
        var a = this,
            b = a.currentSlide + a.options.slidesToScroll;
        a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
    }, b.prototype.buildArrows = function () {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, b.prototype.buildDots = function () {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
            b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, b.prototype.buildOut = function () {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" === typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.buildRows = function () {
        var b, c, d, e, f, g, h, a = this;
        if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; b < f; b++) {
                var i = document.createElement("div");
                for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");
                    for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k))
                    }
                    i.appendChild(j)
                }
                e.appendChild(i)
            }
            a.$slider.empty().append(e), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, b.prototype.checkResponsive = function (b, c) {
        var e, f, g, d = this,
            h = !1,
            i = d.$slider.width(),
            j = window.innerWidth || a(window).width();
        if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;
            for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
        }
    }, b.prototype.changeSlide = function (b, c) {
        var f, g, h, d = this,
            e = a(b.currentTarget);
        switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
        case "previous":
            g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
            break;
        case "next":
            g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
            break;
        case "index":
            var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
            d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
            break;
        default:
            return
        }
    }, b.prototype.checkNavigable = function (a) {
        var c, d, b = this;
        if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
        else
            for (var e in c) {
                if (a < c[e]) {
                    a = d;
                    break
                }
                d = c[e]
            }
        return a
    }, b.prototype.cleanUpEvents = function () {
        var b = this;
        b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.cleanUpSlideEvents = function () {
        var b = this;
        b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.cleanUpRows = function () {
        var b, a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b))
    }, b.prototype.clickHandler = function (a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function (b) {
        var c = this;
        c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            a(this).attr("style", a(this).data("originalStyling"))
        }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
    }, b.prototype.disableTransition = function (a) {
        var b = this,
            c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function (a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: c.options.zIndex
        }), c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }), b && setTimeout(function () {
            c.disableTransition(a), b.call()
        }, c.options.speed))
    }, b.prototype.fadeSlideOut = function (a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }))
    }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.focusHandler = function () {
        var b = this;
        b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function () {
                b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
            }, 0)
        })
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
        var a = this;
        return a.currentSlide
    }, b.prototype.getDotCount = function () {
        var a = this,
            b = 0,
            c = 0,
            d = 0;
        if (a.options.infinite === !0)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (a.options.centerMode === !0) d = a.slideCount;
        else if (a.options.asNavFor)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
        return d - 1
    }, b.prototype.getLeft = function (a) {
        var c, d, f, b = this,
            e = 0;
        return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.$slideTrack.children(".slick-slide").eq(b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? a : a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.$slideTrack.children(".slick-slide").eq(b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? a : a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
    }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
        var b = this;
        return b.options[a]
    }, b.prototype.getNavigableIndexes = function () {
        var e, a = this,
            b = 0,
            c = 0,
            d = [];
        for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); b < e;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }, b.prototype.getSlick = function () {
        return this
    }, b.prototype.getSlideCount = function () {
        var c, d, e, b = this;
        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
        }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
    }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
        var c = this;
        c.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b)
    }, b.prototype.init = function (b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
    }, b.prototype.initADA = function () {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + b.instanceUid + c
            })
        }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
    }, b.prototype.initArrowEvents = function () {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }, b.prototype.initDotEvents = function () {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.initSlideEvents = function () {
        var b = this;
        b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
    }, b.prototype.initializeEvents = function () {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function () {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
    }, b.prototype.keyHandler = function (a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }, b.prototype.lazyLoad = function () {
        function g(c) {
            a("img[data-lazy]", c).each(function () {
                var c = a(this),
                    d = a(this).attr("data-lazy"),
                    e = document.createElement("img");
                e.onload = function () {
                    c.animate({
                        opacity: 0
                    }, 100, function () {
                        c.attr("src", d).animate({
                            opacity: 1
                        }, 200, function () {
                            c.removeAttr("data-lazy").removeClass("slick-loading")
                        }), b.$slider.trigger("lazyLoaded", [b, c, d])
                    })
                }, e.onerror = function () {
                    c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d])
                }, e.src = d
            })
        }
        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
    }, b.prototype.loadSlider = function () {
        var a = this;
        a.setPosition(), a.$slideTrack.css({
            opacity: 1
        }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.next = b.prototype.slickNext = function () {
        var a = this;
        a.changeSlide({
            data: {
                message: "next"
            }
        })
    }, b.prototype.orientationChange = function () {
        var a = this;
        a.checkResponsive(), a.setPosition()
    }, b.prototype.pause = b.prototype.slickPause = function () {
        var a = this;
        a.autoPlayClear(), a.paused = !0
    }, b.prototype.play = b.prototype.slickPlay = function () {
        var a = this;
        a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
    }, b.prototype.postSlide = function (a) {
        var b = this;
        b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
    }, b.prototype.prev = b.prototype.slickPrev = function () {
        var a = this;
        a.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, b.prototype.preventDefault = function (a) {
        a.preventDefault()
    }, b.prototype.progressiveLazyLoad = function (b) {
        b = b || 1;
        var e, f, g, c = this,
            d = a("img[data-lazy]", c.$slider);
        d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function () {
            e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad()
        }, g.onerror = function () {
            b < 3 ? setTimeout(function () {
                c.progressiveLazyLoad(b + 1)
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad())
        }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
    }, b.prototype.refresh = function (b) {
        var d, e, c = this;
        e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
            currentSlide: d
        }), c.init(), b || c.changeSlide({
            data: {
                message: "index",
                index: d
            }
        }, !1)
    }, b.prototype.registerBreakpoints = function () {
        var c, d, e, b = this,
            f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";
            for (c in f)
                if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                    for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                    b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
                } b.breakpoints.sort(function (a, c) {
                return b.options.mobileFirst ? a - c : c - a
            })
        }
    }, b.prototype.reinit = function () {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" === typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
    }, b.prototype.resize = function () {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
            b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
        }, 50))
    }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
        var d = this;
        return "boolean" === typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || a < 0 || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
    }, b.prototype.setCSS = function (a) {
        var d, e, b = this,
            c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
    }, b.prototype.setDimensions = function () {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }, b.prototype.setFade = function () {
        var c, b = this;
        b.$slides.each(function (d, e) {
            c = b.slideWidth * d * -1, a(e).css(b.options.rtl === !0 ? {
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            } : {
                position: "relative",
                left: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            })
        }), b.$slides.eq(b.currentSlide).css({
            zIndex: b.options.zIndex - 1,
            opacity: 1
        })
    }, b.prototype.setHeight = function () {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function () {
        var c, d, e, f, h, b = this,
            g = !1;
        if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" !== typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;
        else if ("multiple" === h) a.each(e, function (a, c) {
            b.options[a] = c
        });
        else if ("responsive" === h)
            for (d in f)
                if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];
                else {
                    for (c = b.options.responsive.length - 1; c >= 0;) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
                    b.options.responsive.push(f[d])
                } g && (b.unload(), b.reinit())
    }, b.prototype.setPosition = function () {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
    }, b.prototype.setProps = function () {
        var a = this,
            b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" === typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function (a) {
        var c, d, e, f, b = this;
        d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }, b.prototype.setupInfinite = function () {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; c < e; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                a(this).attr("id", "")
            })
        }
    }, b.prototype.interrupt = function (a) {
        var b = this;
        a || b.autoPlay(), b.interrupted = a
    }, b.prototype.selectHandler = function (b) {
        var c = this,
            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
    }, b.prototype.slideHandler = function (a, b, c) {
        var d, e, f, g, j, h = null,
            i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (a < 0 || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
            i.postSlide(d)
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (a < 0 || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
            i.postSlide(d)
        }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = d < 0 ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
            i.postSlide(e)
        })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function () {
            i.postSlide(e)
        }) : i.postSlide(e))))
    }, b.prototype.startLoad = function () {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function () {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), d < 0 && (d = 360 - Math.abs(d)), d <= 45 && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : d <= 360 && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && d <= 225 ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && d <= 135 ? "down" : "up" : "vertical"
    }, b.prototype.swipeEnd = function () {
        var c, d, b = this;
        if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
            switch (d = b.swipeDirection()) {
            case "left":
            case "down":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
                break;
            case "right":
            case "up":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1
            }
            "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]))
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
    }, b.prototype.swipeHandler = function (a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1) && (b.options.draggable !== !1 || -1 === a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
        case "start":
            b.swipeStart(a);
            break;
        case "move":
            b.swipeMove(a);
            break;
        case "end":
            b.swipeEnd(a)
        }
    }, b.prototype.swipeMove = function (a) {
        var d, e, f, g, h, b = this;
        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.swipeLeft = b.options.vertical === !1 ? d + f * g : d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
    }, b.prototype.swipeStart = function (a) {
        var c, b = this;
        return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function () {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, b.prototype.unslick = function (a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]), b.destroy()
    }, b.prototype.updateArrows = function () {
        var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, b.prototype.updateDots = function () {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, b.prototype.visibility = function () {
        var a = this;
        a.options.autoplay && (a.interrupted = document[a.hidden] ? !0 : !1)
    }, a.fn.slick = function () {
        var f, g, a = this,
            c = arguments[0],
            d = Array.prototype.slice.call(arguments, 1),
            e = a.length;
        for (f = 0; f < e; f++)
            if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
        return a
    }
});
! function (a) {
    a.fn.theiaStickySidebar = function (b) {
        function c(b, c) {
            var e = d(b, c);
            e || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), a(document).on("scroll." + b.namespace, function (b, c) {
                return function (e) {
                    var f = d(b, c);
                    f && a(this).unbind(e)
                }
            }(b, c)), a(window).on("resize." + b.namespace, function (b, c) {
                return function (e) {
                    var f = d(b, c);
                    f && a(this).unbind(e)
                }
            }(b, c)))
        }

        function d(b, c) {
            return b.initialized === !0 || !(a("body").width() < b.minWidth) && (e(b, c), !0)
        }

        function e(b, c) {
            b.initialized = !0;
            var d = a("#theia-sticky-sidebar-stylesheet-" + b.namespace);
            0 === d.length && a("head").append(a('<style id="theia-sticky-sidebar-stylesheet-' + b.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), c.each(function () {
                function c() {
                    e.fixedScrollTop = 0, e.sidebar.css({
                        "min-height": "1px"
                    }), e.stickySidebar.css({
                        position: "static",
                        width: "",
                        transform: "none"
                    })
                }

                function d(b) {
                    var c = b.height();
                    return b.children().each(function () {
                        c = Math.max(c, a(this).height())
                    }), c
                }
                var e = {};
                if (e.sidebar = a(this), e.options = b || {}, e.container = a(e.options.containerSelector), 0 == e.container.length && (e.container = e.sidebar.parent()), e.sidebar.parents().css("-webkit-transform", "none"), e.sidebar.css({
                        position: e.options.defaultPosition,
                        overflow: "visible",
                        "-webkit-box-sizing": "border-box",
                        "-moz-box-sizing": "border-box",
                        "box-sizing": "border-box"
                    }), e.stickySidebar = e.sidebar.find(".theiaStickySidebar"), 0 == e.stickySidebar.length) {
                    var g = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                    e.sidebar.find("script").filter(function (a, b) {
                        return 0 === b.type.length || b.type.match(g)
                    }).remove(), e.stickySidebar = a("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()), e.sidebar.append(e.stickySidebar)
                }
                e.marginBottom = parseInt(e.sidebar.css("margin-bottom")), e.paddingTop = parseInt(e.sidebar.css("padding-top")), e.paddingBottom = parseInt(e.sidebar.css("padding-bottom"));
                var h = e.stickySidebar.offset().top,
                    i = e.stickySidebar.outerHeight();
                e.stickySidebar.css("padding-top", 1), e.stickySidebar.css("padding-bottom", 1), h -= e.stickySidebar.offset().top, i = e.stickySidebar.outerHeight() - i - h, 0 == h ? (e.stickySidebar.css("padding-top", 0), e.stickySidebarPaddingTop = 0) : e.stickySidebarPaddingTop = 1, 0 == i ? (e.stickySidebar.css("padding-bottom", 0), e.stickySidebarPaddingBottom = 0) : e.stickySidebarPaddingBottom = 1, e.previousScrollTop = null, e.fixedScrollTop = 0, c(), e.onScroll = function (e) {
                    if (e.stickySidebar.is(":visible")) {
                        if (a("body").width() < e.options.minWidth) return void c();
                        if (e.options.disableOnResponsiveLayouts) {
                            var g = e.sidebar.outerWidth("none" == e.sidebar.css("float"));
                            if (g + 50 > e.container.width()) return void c()
                        }
                        var h = a(document).scrollTop(),
                            i = "static";
                        if (h >= e.sidebar.offset().top + (e.paddingTop - e.options.additionalMarginTop)) {
                            var j, k = e.paddingTop + b.additionalMarginTop,
                                l = e.paddingBottom + e.marginBottom + b.additionalMarginBottom,
                                m = e.sidebar.offset().top,
                                n = e.sidebar.offset().top + d(e.container),
                                o = 0 + b.additionalMarginTop,
                                p = e.stickySidebar.outerHeight() + k + l < a(window).height();
                            j = p ? o + e.stickySidebar.outerHeight() : a(window).height() - e.marginBottom - e.paddingBottom - b.additionalMarginBottom;
                            var q = m - h + e.paddingTop,
                                r = n - h - e.paddingBottom - e.marginBottom,
                                s = e.stickySidebar.offset().top - h,
                                t = e.previousScrollTop - h;
                            "fixed" == e.stickySidebar.css("position") && "modern" == e.options.sidebarBehavior && (s += t), "stick-to-top" == e.options.sidebarBehavior && (s = b.additionalMarginTop), "stick-to-bottom" == e.options.sidebarBehavior && (s = j - e.stickySidebar.outerHeight()), s = t > 0 ? Math.min(s, o) : Math.max(s, j - e.stickySidebar.outerHeight()), s = Math.max(s, q), s = Math.min(s, r - e.stickySidebar.outerHeight());
                            var u = e.container.height() == e.stickySidebar.outerHeight();
                            i = !u && s == o || !u && s == j - e.stickySidebar.outerHeight() ? "fixed" : h + s - e.sidebar.offset().top - e.paddingTop <= b.additionalMarginTop ? "static" : "absolute"
                        }
                        if ("fixed" == i) {
                            var v = a(document).scrollLeft();
                            e.stickySidebar.css({
                                position: "fixed",
                                width: f(e.stickySidebar) + "px",
                                transform: "translateY(" + s + "px)",
                                left: e.sidebar.offset().left + parseInt(e.sidebar.css("padding-left")) - v + "px",
                                top: "0px"
                            })
                        } else if ("absolute" == i) {
                            var w = {};
                            "absolute" != e.stickySidebar.css("position") && (w.position = "absolute", w.transform = "translateY(" + (h + s - e.sidebar.offset().top - e.stickySidebarPaddingTop - e.stickySidebarPaddingBottom) + "px)", w.top = "0px"), w.width = f(e.stickySidebar) + "px", w.left = "", e.stickySidebar.css(w)
                        } else "static" == i && c();
                        "static" != i && 1 == e.options.updateSidebarHeight && e.sidebar.css({
                            "min-height": e.stickySidebar.outerHeight() + e.stickySidebar.offset().top - e.sidebar.offset().top + e.paddingBottom
                        }), e.previousScrollTop = h
                    }
                }, e.onScroll(e), a(document).on("scroll." + e.options.namespace, function (a) {
                    return function () {
                        a.onScroll(a)
                    }
                }(e)), a(window).on("resize." + e.options.namespace, function (a) {
                    return function () {
                        a.stickySidebar.css({
                            position: "static"
                        }), a.onScroll(a)
                    }
                }(e)), "undefined" != typeof ResizeSensor && new ResizeSensor(e.stickySidebar[0], function (a) {
                    return function () {
                        a.onScroll(a)
                    }
                }(e))
            })
        }

        function f(a) {
            var b;
            try {
                b = a[0].getBoundingClientRect().width
            } catch (a) {}
            return "undefined" == typeof b && (b = a.width()), b
        }
        var g = {
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
        return b = a.extend(g, b), b.additionalMarginTop = parseInt(b.additionalMarginTop) || 0, b.additionalMarginBottom = parseInt(b.additionalMarginBottom) || 0, c(b, this), this
    }
}(jQuery), ! function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof module && "object" == typeof module.exports ? require("jquery") : jQuery)
}(function (a) {
    function d() {
        var c = b.settings;
        if (c.autoDispose && !a.contains(document.documentElement, this)) return a(this).timeago("dispose"), this;
        var d = function (c) {
            if (!(c = a(c)).data("timeago")) {
                c.data("timeago", {
                    datetime: b.datetime(c)
                });
                var d = a.trim(c.text());
                b.settings.localeTitle ? c.attr("title", c.data("timeago").datetime.toLocaleString()) : !(d.length > 0) || b.isTime(c) && c.attr("title") || c.attr("title", d)
            }
            return c.data("timeago")
        }(this);
        return isNaN(d.datetime) || (0 === c.cutoff || Math.abs(f(d.datetime)) < c.cutoff ? a(this).text(e(d.datetime)) : a(this).attr("title").length > 0 && a(this).text(a(this).attr("title"))), this
    }

    function e(a) {
        return b.inWords(f(a))
    }

    function f(a) {
        return (new Date).getTime() - a.getTime()
    }
    a.timeago = function (b) {
        return e(b instanceof Date ? b : "string" == typeof b ? a.timeago.parse(b) : "number" == typeof b ? new Date(b) : a.timeago.datetime(b))
    };
    var b = a.timeago;
    a.extend(a.timeago, {
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
                suffixAgo: "",
                suffixFromNow: "from now",
                inPast: "any moment now",
                seconds: "10 saniye \xf6nce",
                minute: "1 dakika \xf6nce",
                minutes: "%d dakika \xf6nce",
                hour: "1 saat \xf6nce",
                hours: " %d saat \xf6nce",
                day: "1 g\xfcn \xf6nce",
                days: "%d g\xfcn \xf6nce",
                month: "ay \xf6nce",
                months: "%d ay \xf6nce",
                year: "1 y\u0131l \xf6nce",
                years: "%d y\u0131l \xf6nce",
                wordSeparator: " ",
                numbers: []
            }
        },
        inWords: function (b) {
            function k(d, e) {
                var f = a.isFunction(d) ? d(e, b) : d,
                    g = c.numbers && c.numbers[e] || e;
                return f.replace(/%d/i, g)
            }
            if (!this.settings.allowPast && !this.settings.allowFuture) throw "timeago allowPast and allowFuture settings can not both be set to false.";
            var c = this.settings.strings,
                d = c.prefixAgo,
                e = c.suffixAgo;
            if (this.settings.allowFuture && b < 0 && (d = c.prefixFromNow, e = c.suffixFromNow), !this.settings.allowPast && b >= 0) return this.settings.strings.inPast;
            var f = Math.abs(b) / 1e3,
                g = f / 60,
                h = g / 60,
                i = h / 24,
                j = i / 365,
                l = f < 45 && k(c.seconds, Math.round(f)) || f < 90 && k(c.minute, 1) || g < 45 && k(c.minutes, Math.round(g)) || g < 90 && k(c.hour, 1) || h < 24 && k(c.hours, Math.round(h)) || h < 42 && k(c.day, 1) || i < 30 && k(c.days, Math.round(i)) || i < 45 && k(c.month, 1) || i < 365 && k(c.months, Math.round(i / 30)) || j < 1.5 && k(c.year, 1) || k(c.years, Math.round(j)),
                m = c.wordSeparator || "";
            return void 0 === c.wordSeparator && (m = " "), a.trim([d, l, e].join(m))
        },
        parse: function (b) {
            var c = a.trim(b);
            return c = (c = (c = (c = (c = c.replace(/\.\d+/, "")).replace(/-/, "/").replace(/-/, "/")).replace(/T/, " ").replace(/Z/, " UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2")).replace(/([\+\-]\d\d)$/, " $100"), new Date(c)
        },
        datetime: function (c) {
            var d = a(c).attr(b.isTime(c) ? "datetime" : "title");
            return b.parse(d)
        },
        isTime: function (b) {
            return "time" === a(b).get(0).tagName.toLowerCase()
        }
    });
    var c = {
        init: function () {
            c.dispose.call(this);
            var e = a.proxy(d, this);
            e();
            var f = b.settings;
            f.refreshMillis > 0 && (this._timeagoInterval = setInterval(e, f.refreshMillis))
        },
        update: function (c) {
            var e = c instanceof Date ? c : b.parse(c);
            a(this).data("timeago", {
                datetime: e
            }), b.settings.localeTitle && a(this).attr("title", e.toLocaleString()), d.apply(this)
        },
        updateFromDOM: function () {
            a(this).data("timeago", {
                datetime: b.parse(a(this).attr(b.isTime(this) ? "datetime" : "title"))
            }), d.apply(this)
        },
        dispose: function () {
            this._timeagoInterval && (window.clearInterval(this._timeagoInterval), this._timeagoInterval = null)
        }
    };
    a.fn.timeago = function (a, b) {
        var d = a ? c[a] : c.init;
        if (!d) throw new Error("Unknown function name '" + a + "' for timeago");
        return this.each(function () {
            d.call(this, b)
        }), this
    }, document.createElement("abbr"), document.createElement("time")
}), ! function (a) {
    a.fn.lazy = function () {
        function b(b) {
            var c, d = b,
                e = a(window),
                f = d.attr("data-style"),
                g = Math.round(d.width()),
                h = Math.round(d.height()),
                i = "w" + g + "-h" + h + "-n",
                j = "undefined" !== typeof data && data.noThumb || "//hamdiphonecomtr.github.io/no.png";
            c = f.match("/s72-c") ? f.replace("/s72-c", "/" + i) : f.match("=s72-c") ? f.replace("=s72-c", "=" + i) : f.match("/w72-h") ? f.replace("/w72-h72-n", "/" + i).replace("/w72-h72-p-k-no-nu", "/" + i) : f.match("=w72-h") ? f.replace("=w72-h72-n", "=" + i).replace("=w72-h72-p-k-no-nu", "=" + i) : f.match("resources.blogblog.com") ? j.replace("/s72-c", "/" + i).replace("=s72-c", "=" + i) : f, d.is(":hidden") || e.on("load resize scroll", function k() {
                if (e.scrollTop() + e.height() >= d.offset().top) {
                    e.off("load resize scroll", k);
                    var a = new Image;
                    a.onload = function () {
                        d.attr("style", "background-image:url(" + this.src + ")").addClass("lazy")
                    }, a.src = c
                }
            }).trigger("scroll")
        }
        return this.each(function () {
            b(a(this))
        })
    }
}(jQuery);

function Error() {
    return _0x30e7[0] + typeof data !== _0x30e7[1] && data[_0x30e7[2]] || _0x30e7[3] + _0x30e7[4]
}

function Loader() {
    return [_0x30e7[5], _0x30e7[6]]
}

function Months() {
    return monthNames = new Array, monthNames[0] = typeof data !== _0x30e7[1] && data[_0x30e7[7]] || _0x30e7[7], monthNames[1] = typeof data !== _0x30e7[1] && data[_0x30e7[8]] || _0x30e7[8], monthNames[2] = typeof data !== _0x30e7[1] && data[_0x30e7[9]] || _0x30e7[9], monthNames[3] = typeof data !== _0x30e7[1] && data[_0x30e7[10]] || _0x30e7[10], monthNames[4] = typeof data !== _0x30e7[1] && data[_0x30e7[11]] || _0x30e7[11], monthNames[5] = typeof data !== _0x30e7[1] && data[_0x30e7[12]] || _0x30e7[12], monthNames[6] = typeof data !== _0x30e7[1] && data[_0x30e7[13]] || _0x30e7[13], monthNames[7] = typeof data !== _0x30e7[1] && data[_0x30e7[14]] || _0x30e7[14], monthNames[8] = typeof data !== _0x30e7[1] && data[_0x30e7[15]] || _0x30e7[15], monthNames[9] = typeof data !== _0x30e7[1] && data[_0x30e7[16]] || _0x30e7[16], monthNames[10] = typeof data !== _0x30e7[1] && data[_0x30e7[17]] || _0x30e7[17], monthNames[11] = typeof data !== _0x30e7[1] && data[_0x30e7[18]] || _0x30e7[18], monthNames
}

function ajaxUrl(a, b, c, d) {
    switch (a) {
    case _0x30e7[21]:
        d = _0x30e7[19] + c + _0x30e7[20] + b;
        break;
    case _0x30e7[23]:
        d = _0x30e7[22] + b;
        break;
    default:
        switch (c) {
        case _0x30e7[25]:
            d = _0x30e7[24] + b;
            break;
        case _0x30e7[27]:
            d = _0x30e7[26] + Math[_0x30e7[28]](Math[_0x30e7[27]]() * b + 2) + _0x30e7[20] + b;
            break;
        default:
            d = _0x30e7[29] + c + _0x30e7[30] + b
        }
    }
    return d
}

function postLink(a, b) {
    for (var c = 0; c < a[b][_0x30e7[32]][_0x30e7[31]]; c++)
        if (_0x30e7[33] == a[b][_0x30e7[32]][c][_0x30e7[34]]) {
            var d = a[b][_0x30e7[32]][c][_0x30e7[35]];
            break
        } return d
}

function catCount(a) {
    return _0x30e7[36] + a[_0x30e7[38]][_0x30e7[37]] + _0x30e7[4]
}

function postTitle(a, b) {
    return a[b][_0x30e7[39]][_0x30e7[37]] ? a[b][_0x30e7[39]][_0x30e7[37]] : fix[_0x30e7[40]]
}

function postCat(a, b) {
    return a[b][_0x30e7[41]] ? _0x30e7[42] + a[b][_0x30e7[41]][0][_0x30e7[43]] + _0x30e7[44] + a[b][_0x30e7[41]][0][_0x30e7[43]] + _0x30e7[45] + a[b][_0x30e7[41]][0][_0x30e7[43]] + _0x30e7[46] : _0x30e7[47]
}

function postAuthor(a, b) {
    return typeof postMeta !== _0x30e7[1] && 1 == postMeta[_0x30e7[48]] ? _0x30e7[49] + a[b][_0x30e7[48]][0][_0x30e7[50]][_0x30e7[37]] + _0x30e7[4] : _0x30e7[47]
}

function postDatetime(a, b) {
    monthNames = Months(); {
        var c = a[b][_0x30e7[51]][_0x30e7[37]],
            d = c[_0x30e7[52]](5, 7),
            e = c[_0x30e7[52]](8, 10),
            f = c[_0x30e7[52]](0, 4);
        monthNames[parseInt(d, 10) - 1] + e + f
    }
    return typeof postMeta !== _0x30e7[1] && 1 == postMeta[_0x30e7[53]] ? _0x30e7[54] + c + _0x30e7[55] : _0x30e7[47]
}

function postDetails(a, b) {
    return _0x30e7[56] + postAuthor(a, b) + postDatetime(a, b) + _0x30e7[57]
}

function postFeaturedimg(a) {
    var b = $(_0x30e7[63])[_0x30e7[62]](a)[_0x30e7[61]](_0x30e7[60])[_0x30e7[59]](_0x30e7[58]),
        c = b[_0x30e7[65]](_0x30e7[64]) || 0,
        d = b[_0x30e7[65]](_0x30e7[64], c - 1) || 0,
        e = b[_0x30e7[52]](0, d),
        f = b[_0x30e7[52]](d, c),
        g = b[_0x30e7[52]](c),
        h = b[_0x30e7[65]](_0x30e7[66]) || 0,
        i = b[_0x30e7[52]](0, h),
        j = b[_0x30e7[52]](h);
    return f[_0x30e7[67]](/\/s[0-9]+/g) || f[_0x30e7[67]](/\/w[0-9]+/g) ? f = _0x30e7[68] : (j[_0x30e7[67]](/\=s[0-9]+/g) || j[_0x30e7[67]](/\=w[0-9]+/g)) && (f = _0x30e7[69], g = _0x30e7[47], e = i), e + f + g
}

function postImage(a, b, c) {
    var d = a[b][_0x30e7[70]][_0x30e7[37]];
    return c = a[b][_0x30e7[71]] ? a[b][_0x30e7[71]][_0x30e7[72]] : _0x30e7[73], d[_0x30e7[74]](d[_0x30e7[67]](/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) > -1 ? d[_0x30e7[74]](_0x30e7[75]) > -1 ? d[_0x30e7[74]](d[_0x30e7[67]](/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) < d[_0x30e7[74]](_0x30e7[75]) ? c[_0x30e7[78]](_0x30e7[79], _0x30e7[80])[_0x30e7[78]](_0x30e7[76], _0x30e7[77]) : postFeaturedimg(d) : c[_0x30e7[78]](_0x30e7[79], _0x30e7[80])[_0x30e7[78]](_0x30e7[76], _0x30e7[77]) : d[_0x30e7[74]](_0x30e7[75]) > -1 ? postFeaturedimg(d) : _0x30e7[73]
}

function mediaType(a) {
    return a[_0x30e7[67]](_0x30e7[81]) ? _0x30e7[82] : _0x30e7[83]
}

function vidIn(a) {
    return a[_0x30e7[67]](_0x30e7[80]) ? _0x30e7[84] : _0x30e7[47]
}

function postId(a, b) {
    var c = a[b][_0x30e7[85]][_0x30e7[37]],
        d = c[_0x30e7[74]](_0x30e7[86]),
        e = c[_0x30e7[87]](d + 5);
    return e
}

function Comments(a, b, c) {
    var d = a[b][_0x30e7[48]][0][_0x30e7[50]][_0x30e7[37]],
        e = d[_0x30e7[88]](0),
        f = a[b][_0x30e7[48]][0][_0x30e7[92]][_0x30e7[58]][_0x30e7[78]](_0x30e7[91], _0x30e7[90])[_0x30e7[78]](_0x30e7[89], _0x30e7[90]),
        g = _0x30e7[93] + f + _0x30e7[94],
        h = a[b][_0x30e7[39]][_0x30e7[37]] ? a[b][_0x30e7[39]][_0x30e7[37]] : _0x30e7[95];
    return (f[_0x30e7[67]](_0x30e7[96]) || f[_0x30e7[67]](_0x30e7[97])) && (g = _0x30e7[98] + e + _0x30e7[4]), _0x30e7[99] + b + _0x30e7[100] + c + _0x30e7[101] + d + _0x30e7[45] + g + _0x30e7[102] + c + _0x30e7[101] + d + _0x30e7[45] + d + _0x30e7[103] + h + _0x30e7[104]
}

function unique(a) {
    for (var b = [], c = 0, d = a[_0x30e7[31]]; c < d; c++) - 1 === b[_0x30e7[74]](a[c]) && a[c] !== _0x30e7[47] && b[_0x30e7[105]](a[c]);
    return b
}

function Ajax(a, b, c, d) {
    switch (b) {
    case _0x30e7[106]:
    case _0x30e7[107]:
    case _0x30e7[108]:
    case _0x30e7[109]:
    case _0x30e7[110]:
    case _0x30e7[111]:
    case _0x30e7[112]:
    case _0x30e7[113]:
    case _0x30e7[114]:
    case _0x30e7[115]:
    case _0x30e7[116]:
    case _0x30e7[117]:
    case _0x30e7[118]:
    case _0x30e7[23]:
    case _0x30e7[21]:
    case _0x30e7[41]:
    case _0x30e7[127]:
        switch (b) {
        case _0x30e7[41]:
            var e = ajaxUrl(b, 1, d),
                f = c;
            break;
        default:
            var e = ajaxUrl(b, c, d)
        }
        $[_0x30e7[201]]({
            url: e,
            type: _0x30e7[119],
            dataType: _0x30e7[120],
            cache: !0,
            beforeSend: function () {
                switch (b) {
                case _0x30e7[106]:
                case _0x30e7[107]:
                case _0x30e7[108]:
                case _0x30e7[111]:
                    a[_0x30e7[62]](Loader()[0])[_0x30e7[123]]()[_0x30e7[122]](_0x30e7[121] + b);
                    break;
                case _0x30e7[109]:
                case _0x30e7[110]:
                case _0x30e7[112]:
                case _0x30e7[113]:
                case _0x30e7[114]:
                case _0x30e7[115]:
                case _0x30e7[23]:
                    a[_0x30e7[62]](Loader()[0])[_0x30e7[123]]()[_0x30e7[122]](_0x30e7[124] + b);
                    break;
                case _0x30e7[116]:
                    a[_0x30e7[62]](Loader()[0])[_0x30e7[123]]()[_0x30e7[122]](_0x30e7[124] + b), a[_0x30e7[126]]()[_0x30e7[125]](2)[_0x30e7[122]](b)
                }
            },
            success: function (c) {
                var e = _0x30e7[47];
                switch (b) {
                case _0x30e7[106]:
                case _0x30e7[107]:
                case _0x30e7[108]:
                case _0x30e7[109]:
                case _0x30e7[110]:
                case _0x30e7[111]:
                case _0x30e7[112]:
                case _0x30e7[113]:
                case _0x30e7[114]:
                case _0x30e7[115]:
                case _0x30e7[116]:
                case _0x30e7[127]:
                case _0x30e7[118]:
                    e = _0x30e7[128];
                    break;
                case _0x30e7[21]:
                    var g = [];
                    e = _0x30e7[129], u = _0x30e7[130];
                    break;
                case _0x30e7[23]:
                    e = _0x30e7[131];
                    break;
                case _0x30e7[117]:
                    e = _0x30e7[132];
                    break;
                case _0x30e7[41]:
                    e = _0x30e7[47]
                }
                var h = c[_0x30e7[134]][_0x30e7[133]];
                if (null != h)
                    for (var i = 0, j = h; i < j[_0x30e7[31]]; i++) {
                        var l = (j[_0x30e7[31]], postLink(j, i)),
                            h = postTitle(j, i),
                            m = postDetails(j, i),
                            o = (postId(j, i), postCat(j, i)),
                            p = postImage(j, i),
                            q = mediaType(p),
                            r = vidIn(p),
                            s = 0 != f && catCount(c[_0x30e7[134]]) || _0x30e7[47],
                            t = _0x30e7[47];
                        switch (b) {
                        case _0x30e7[117]:
                        case _0x30e7[118]:
                            t += _0x30e7[135] + i + _0x30e7[45], t += _0x30e7[136] + r + _0x30e7[137] + h + _0x30e7[138] + l + _0x30e7[139] + q + _0x30e7[140] + p + _0x30e7[141], t += _0x30e7[142], t += o + _0x30e7[143] + l + _0x30e7[101] + h + _0x30e7[45] + h + _0x30e7[144] + m, t += _0x30e7[145];
                            break;
                        case _0x30e7[108]:
                            t += _0x30e7[146] + i + _0x30e7[45], t += _0x30e7[136] + r + _0x30e7[137] + h + _0x30e7[138] + l + _0x30e7[139] + q + _0x30e7[140] + p + _0x30e7[141], t += _0x30e7[142], t += o + _0x30e7[143] + l + _0x30e7[101] + h + _0x30e7[45] + h + _0x30e7[144] + m, t += _0x30e7[147];
                            break;
                        case _0x30e7[106]:
                            t += _0x30e7[148] + i + _0x30e7[45], t += _0x30e7[136] + r + _0x30e7[137] + h + _0x30e7[138] + l + _0x30e7[139] + q + _0x30e7[140] + p + _0x30e7[141], t += _0x30e7[142], t += _0x30e7[143] + l + _0x30e7[101] + h + _0x30e7[45] + h + _0x30e7[144] + m, t += _0x30e7[147];
                            break;
                        case _0x30e7[116]:
                            switch (i) {
                            case 0:
                                t += _0x30e7[146] + i + _0x30e7[45], t += _0x30e7[136] + r + _0x30e7[137] + h + _0x30e7[138] + l + _0x30e7[139] + q + _0x30e7[140] + p + _0x30e7[141], t += _0x30e7[142], t += o + _0x30e7[143] + l + _0x30e7[101] + h + _0x30e7[45] + h + _0x30e7[144] + m, t += _0x30e7[147];
                                break;
                            default:
                                t += _0x30e7[146] + i + _0x30e7[149], t += _0x30e7[142], t += o + _0x30e7[143] + l + _0x30e7[101] + h + _0x30e7[45] + h + _0x30e7[144] + m, t += _0x30e7[147]
                            }
                            break;
                        case _0x30e7[107]:
                            t += _0x30e7[146] + i + _0x30e7[45], t += _0x30e7[136] + r + _0x30e7[137] + h + _0x30e7[138] + l + _0x30e7[139] + q + _0x30e7[140] + p + _0x30e7[141], t += _0x30e7[142], t += o + _0x30e7[143] + l + _0x30e7[101] + h + _0x30e7[45] + h + _0x30e7[144] + m, t += _0x30e7[147];
                            break;
                        case _0x30e7[110]:
                            t += _0x30e7[146] + i + _0x30e7[45], t += _0x30e7[150] + h + _0x30e7[138] + l + _0x30e7[139] + q + _0x30e7[140] + p + _0x30e7[141], t += _0x30e7[142], t += o + _0x30e7[143] + l + _0x30e7[101] + h + _0x30e7[45] + h + _0x30e7[144] + m, t += _0x30e7[147];
                            break;
                        case _0x30e7[111]:
                            t += _0x30e7[146] + i + _0x30e7[45], t += _0x30e7[151] + h + _0x30e7[138] + l + _0x30e7[139] + q + _0x30e7[140] + p + _0x30e7[141], t += _0x30e7[142], t += o + _0x30e7[143] + l + _0x30e7[101] + h + _0x30e7[45] + h + _0x30e7[144] + m, t += _0x30e7[147];
                            break;
                        case _0x30e7[109]:
                            switch (i) {
                            case 0:
                                t += _0x30e7[146] + i + _0x30e7[45], t += _0x30e7[136] + r + _0x30e7[137] + h + _0x30e7[138] + l + _0x30e7[139] + q + _0x30e7[140] + p + _0x30e7[141], t += _0x30e7[142], t += o + _0x30e7[143] + l + _0x30e7[101] + h + _0x30e7[45] + h + _0x30e7[144] + m, t += _0x30e7[147];
                                break;
                            default:
                                t += _0x30e7[146] + i + _0x30e7[45], t += _0x30e7[142], t += o + _0x30e7[143] + l + _0x30e7[101] + h + _0x30e7[45] + h + _0x30e7[144] + m, t += _0x30e7[147]
                            }
                            break;
                        case _0x30e7[112]:
                        case _0x30e7[115]:
                        case _0x30e7[127]:
                            t += _0x30e7[146] + i + _0x30e7[45], t += _0x30e7[136] + r + _0x30e7[137] + h + _0x30e7[138] + l + _0x30e7[139] + q + _0x30e7[140] + p + _0x30e7[141], t += _0x30e7[142], t += o + _0x30e7[143] + l + _0x30e7[101] + h + _0x30e7[45] + h + _0x30e7[144] + m, t += _0x30e7[147];
                            break;
                        case _0x30e7[113]:
                            switch (i) {
                            case 0:
                                t += _0x30e7[146] + i + _0x30e7[45], t += _0x30e7[136] + r + _0x30e7[137] + h + _0x30e7[138] + l + _0x30e7[139] + q + _0x30e7[140] + p + _0x30e7[141], t += _0x30e7[142], t += o + _0x30e7[143] + l + _0x30e7[101] + h + _0x30e7[45] + h + _0x30e7[144] + m, t += _0x30e7[147];
                                break;
                            default:
                                t += _0x30e7[146] + i + _0x30e7[149], t += _0x30e7[136] + r + _0x30e7[137] + h + _0x30e7[138] + l + _0x30e7[139] + q + _0x30e7[140] + p + _0x30e7[141], t += _0x30e7[142], t += o + _0x30e7[143] + l + _0x30e7[101] + h + _0x30e7[45] + h + _0x30e7[144] + m, t += _0x30e7[147]
                            }
                            break;
                        case _0x30e7[114]:
                            t += _0x30e7[146] + i + _0x30e7[45], t += _0x30e7[142], t += o + _0x30e7[143] + l + _0x30e7[101] + h + _0x30e7[45] + h + _0x30e7[144] + m, t += _0x30e7[147];
                            break;
                        case _0x30e7[21]:
                            t += _0x30e7[146] + i + _0x30e7[45], t += _0x30e7[136] + r + _0x30e7[137] + h + _0x30e7[138] + l + _0x30e7[139] + q + _0x30e7[140] + p + _0x30e7[141], t += _0x30e7[142], t += _0x30e7[143] + l + _0x30e7[101] + h + _0x30e7[45] + h + _0x30e7[144] + m, t += _0x30e7[147];
                            break;
                        case _0x30e7[23]:
                            t += Comments(j, i, l);
                            break;
                        case _0x30e7[41]:
                            t += _0x30e7[152] + h + _0x30e7[138] + l + _0x30e7[139] + q + _0x30e7[140] + p + _0x30e7[141], t += _0x30e7[153], t += _0x30e7[154] + d + _0x30e7[101] + d + _0x30e7[45] + d + _0x30e7[144] + s, t += _0x30e7[57]
                        }
                        _0x30e7[21] === b && g[_0x30e7[105]](o), e += t
                    } else switch (b) {
                    case _0x30e7[117]:
                    case _0x30e7[118]:
                        e = _0x30e7[155] + Error() + _0x30e7[156];
                        break;
                    case _0x30e7[21]:
                        e = fix[_0x30e7[157]], u = _0x30e7[47];
                        break;
                    default:
                        e = Error()
                    }
                switch (b) {
                case _0x30e7[116]:
                    e += _0x30e7[57], a[_0x30e7[122]](_0x30e7[158] + j[_0x30e7[31]]), a[_0x30e7[62]](e), a[_0x30e7[61]](_0x30e7[161])[_0x30e7[160]](_0x30e7[159]), a[_0x30e7[163]](_0x30e7[162]);
                    break;
                case _0x30e7[111]:
                    e += _0x30e7[57], a[_0x30e7[122]](_0x30e7[158] + j[_0x30e7[31]]), a[_0x30e7[62]](e), a[_0x30e7[163]](_0x30e7[162]), a[_0x30e7[61]](_0x30e7[171])[_0x30e7[170]]({
                        rtl: fix[_0x30e7[164]],
                        infinite: !1,
                        slidesToShow: 3,
                        swipeToSlide: !0,
                        arrows: !0,
                        prevArrow: _0x30e7[165],
                        nextArrow: _0x30e7[166],
                        appendArrows: a[_0x30e7[169]](_0x30e7[168])[_0x30e7[61]](_0x30e7[167]),
                        dots: !1,
                        slidesToScroll: 1,
                        responsive: [{
                            breakpoint: 1366,
                            settings: {
                                slidesToShow: 3
                            }
                        }, {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 2
                            }
                        }, {
                            breakpoint: 900,
                            settings: {
                                slidesToShow: 2
                            }
                        }, {
                            breakpoint: 640,
                            settings: {
                                slidesToShow: 1
                            }
                        }]
                    });
                    break;
                case _0x30e7[109]:
                case _0x30e7[110]:
                case _0x30e7[112]:
                case _0x30e7[114]:
                case _0x30e7[115]:
                case _0x30e7[127]:
                    e += _0x30e7[57], a[_0x30e7[122]](_0x30e7[158] + j[_0x30e7[31]]), a[_0x30e7[62]](e), a[_0x30e7[163]](_0x30e7[162]);
                    break;
                case _0x30e7[113]:
                    e += _0x30e7[57], a[_0x30e7[122]](_0x30e7[158] + j[_0x30e7[31]]), a[_0x30e7[62]](e), a[_0x30e7[61]](_0x30e7[161])[_0x30e7[160]](_0x30e7[159]), a[_0x30e7[163]](_0x30e7[162]);
                    break;
                case _0x30e7[21]:
                    e += _0x30e7[57] + u + unique(g)[_0x30e7[173]](_0x30e7[172]) + _0x30e7[57], a[_0x30e7[62]](e);
                    break;
                case _0x30e7[117]:
                    e += _0x30e7[174], a[_0x30e7[175]](e), a[_0x30e7[163]](_0x30e7[162]);
                    break;
                case _0x30e7[118]:
                    e += _0x30e7[57], a[_0x30e7[175]](e), a[_0x30e7[163]](_0x30e7[162]);
                    break;
                case _0x30e7[41]:
                    a[_0x30e7[175]](e);
                    break;
                case _0x30e7[108]:
                    e += _0x30e7[176] + e + _0x30e7[57], a[_0x30e7[62]](e), a[_0x30e7[163]](_0x30e7[162]);
                    var v = a[_0x30e7[61]](_0x30e7[177]),
                        w = a[_0x30e7[61]](_0x30e7[178]);
                    v[_0x30e7[170]]({
                        rtl: fix[_0x30e7[164]],
                        infinite: !0,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: !0,
                        prevArrow: _0x30e7[165],
                        nextArrow: _0x30e7[166],
                        dots: !1,
                        fade: !0,
                        asNavFor: _0x30e7[179]
                    }), w[_0x30e7[170]]({
                        infinite: !0,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        autoplay: !0,
                        autoplaySpeed: 5e3,
                        pauseOnHover: !1,
                        pauseOnFocus: !1,
                        vertical: !0,
                        verticalSwiping: !0,
                        arrows: !1,
                        dots: !1,
                        focusOnSelect: !0,
                        asNavFor: _0x30e7[180],
                        responsive: [{
                            breakpoint: 640,
                            settings: {
                                slidesToShow: 4,
                                vertical: !1,
                                verticalSwiping: !1
                            }
                        }]
                    }), w[_0x30e7[184]](_0x30e7[181], function () {
                        w[_0x30e7[61]](_0x30e7[183])[_0x30e7[62]](_0x30e7[47])
                    })[_0x30e7[182]](_0x30e7[181]), w[_0x30e7[184]](_0x30e7[185], function () {
                        w[_0x30e7[61]](_0x30e7[187])[_0x30e7[186]](), w[_0x30e7[61]](_0x30e7[183])[_0x30e7[62]](_0x30e7[47]), w[_0x30e7[61]](_0x30e7[189])[_0x30e7[62]](_0x30e7[188])
                    })[_0x30e7[182]](_0x30e7[185]);
                    break;
                case _0x30e7[106]:
                    e += _0x30e7[57], a[_0x30e7[62]](e), a[_0x30e7[163]](_0x30e7[162]), a[_0x30e7[61]](_0x30e7[191])[_0x30e7[160]](_0x30e7[190]), a[_0x30e7[61]](_0x30e7[197])[_0x30e7[170]]({
                        rtl: fix[_0x30e7[164]],
                        infinite: !0,
                        slidesToShow: 4,
                        swipeToSlide: !0,
                        arrows: !1,
                        dots: !1,
                        slidesToScroll: 1,
                        responsive: [{
                            breakpoint: 1366,
                            settings: {
                                slidesToShow: 4
                            }
                        }, {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3
                            }
                        }, {
                            breakpoint: 900,
                            settings: {
                                slidesToShow: 2
                            }
                        }, {
                            breakpoint: 640,
                            settings: {
                                slidesToShow: 1
                            }
                        }]
                    })[_0x30e7[184]](_0x30e7[185], function () {
                        $(_0x30e7[194])[_0x30e7[193]](_0x30e7[192]), $(_0x30e7[196])[_0x30e7[195]]()[_0x30e7[122]](_0x30e7[192])
                    }), $(_0x30e7[194])[_0x30e7[193]](_0x30e7[192]), $(_0x30e7[196])[_0x30e7[195]]()[_0x30e7[122]](_0x30e7[192]);
                    break;
                case _0x30e7[107]:
                    e += _0x30e7[57], a[_0x30e7[62]](e), a[_0x30e7[163]](_0x30e7[162]), a[_0x30e7[61]](_0x30e7[171])[_0x30e7[170]]({
                        rtl: fix[_0x30e7[164]],
                        infinite: !1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: !1,
                        dots: !0,
                        fade: !0
                    });
                    break;
                default:
                    e += _0x30e7[57], a[_0x30e7[62]](e)
                }
                a[_0x30e7[61]](_0x30e7[198])[_0x30e7[186]](), a[_0x30e7[61]](_0x30e7[200])[_0x30e7[199]]()
            },
            error: function () {
                switch (b) {
                case _0x30e7[117]:
                case _0x30e7[118]:
                    a[_0x30e7[175]](_0x30e7[155] + Error() + _0x30e7[156]);
                    break;
                default:
                    a[_0x30e7[62]](Error())
                }
            }
        })
    }
}

function stickyWrap(a) {
    1 == fix[_0x30e7[202]] && $(a)[_0x30e7[204]](function (a) {
        a = 22, $(this)[_0x30e7[203]]({
            additionalMarginTop: a
        })
    })
}

function getList(a) {
    var b = a[_0x30e7[205]]()[_0x30e7[31]],
        c = a[_0x30e7[205]]()[_0x30e7[88]](0);
    c === _0x30e7[206] && (b = a[_0x30e7[123]](_0x30e7[207])[_0x30e7[62]]()[_0x30e7[78]](/_/gi, _0x30e7[47]), c = a[_0x30e7[123]]()[_0x30e7[169]](_0x30e7[207]), !c[_0x30e7[209]](_0x30e7[208]) && (c[_0x30e7[209]](_0x30e7[210]) || (c[_0x30e7[175]](_0x30e7[211]), c[_0x30e7[122]](_0x30e7[210]))), c[_0x30e7[215]](_0x30e7[214])[_0x30e7[175]](_0x30e7[212] + b + _0x30e7[213]), a[_0x30e7[123]](_0x30e7[207])[_0x30e7[216]]())
}

function liveSearch(a, b) {
    var c = null;
    1 == fix[_0x30e7[217]] && b[_0x30e7[184]](_0x30e7[218], function () {
        var b = $(this)[_0x30e7[219]](),
            d = typeof data !== _0x30e7[1] && data[_0x30e7[220]] || 3;
        a[_0x30e7[169]]()[_0x30e7[61]](_0x30e7[222])[_0x30e7[62]](_0x30e7[221]), null != c && clearTimeout(c), c = setTimeout(function () {
            c = null, a[_0x30e7[169]]()[_0x30e7[61]](_0x30e7[222])[_0x30e7[62]](_0x30e7[223]), Ajax(a, _0x30e7[21], d, b), _0x30e7[47] != b ? a[_0x30e7[224]]() : a[_0x30e7[225]]()
        }, 1e3)
    })
}

function Category(a, d) {
    null != d && (e = d[_0x30e7[74]](_0x30e7[64]), e > -1 ? (b = d[_0x30e7[87]](0, e)[_0x30e7[226]](), c = d[_0x30e7[87]](e + 1)[_0x30e7[226]]()) : (b = d, c = 0), Ajax(a, _0x30e7[41], c, b))
}

function eventHandler(a, b) {
    var c = a[_0x30e7[61]](_0x30e7[227]),
        d = a[_0x30e7[61]](_0x30e7[228]),
        e = a[_0x30e7[61]](_0x30e7[229]),
        f = null,
        g = 0;
    e[_0x30e7[204]](function () {
        c[_0x30e7[175]](_0x30e7[230] + $(this)[_0x30e7[232]](_0x30e7[231]) + _0x30e7[233] + $(this)[_0x30e7[232]](_0x30e7[231]) + _0x30e7[234])
    }), c[_0x30e7[61]](_0x30e7[207])[_0x30e7[184]](b, _0x30e7[236], function () {
        var a = $(this)[_0x30e7[123]](),
            b = a[_0x30e7[232]](_0x30e7[231]);
        a[_0x30e7[209]](_0x30e7[235]) || (c[_0x30e7[61]](_0x30e7[207])[_0x30e7[193]](_0x30e7[235]), a[_0x30e7[122]](_0x30e7[235]), g <= 0 && e[_0x30e7[175]](_0x30e7[237]), g++), null != f && clearTimeout(f), f = setTimeout(function () {
            e[_0x30e7[61]](_0x30e7[238])[_0x30e7[216]](), g = 0, e[_0x30e7[193]](_0x30e7[235]), d[_0x30e7[61]](_0x30e7[239] + b + _0x30e7[240])[_0x30e7[122]](_0x30e7[235]), e[_0x30e7[61]](_0x30e7[183])[_0x30e7[186]]()
        }, 1e3)
    })[_0x30e7[125]](0)[_0x30e7[122]](_0x30e7[235])
}

function Tabs(a, b, c, d) {
    for (var e = _0x30e7[241], f = 0; f < c[_0x30e7[31]]; f++) e += _0x30e7[242] + f + _0x30e7[243] + c[f] + _0x30e7[244];
    e += _0x30e7[57], _0x30e7[117] == b ? (b = _0x30e7[118], a[_0x30e7[175]](_0x30e7[245] + e + _0x30e7[156])) : a[_0x30e7[62]](e), a[_0x30e7[61]](_0x30e7[229])[_0x30e7[204]](function () {
        var a = $(this),
            c = a[_0x30e7[232]](_0x30e7[231]);
        Ajax(a, b, d, c)
    })[_0x30e7[125]](0)[_0x30e7[122]](_0x30e7[235]), _0x30e7[116] == b ? eventHandler(a[_0x30e7[123]](), _0x30e7[246]) : eventHandler(a, _0x30e7[247])
}

function Collect(a, h) {
    null != h && (g = h[_0x30e7[74]](_0x30e7[248]), e = h[_0x30e7[74]](_0x30e7[64]), f = h[_0x30e7[74]](_0x30e7[249]), j = h[_0x30e7[87]](g + 1, f)[_0x30e7[226]](), b = h[_0x30e7[87]](0, g)[_0x30e7[226]](), c = e > -1 ? h[_0x30e7[87]](g + 1, e)[_0x30e7[226]]() : null == j[_0x30e7[67]](/^[0-9]+$/) ? j : _0x30e7[25], d = e > -1 ? h[_0x30e7[87]](e + 1, f)[_0x30e7[226]]() : null != j[_0x30e7[67]](/^[0-9]+$/) ? j : 5), c[_0x30e7[74]](_0x30e7[250]) > -1 ? (c = c[_0x30e7[251]](_0x30e7[250]), Tabs(a, b, c, d)) : Ajax(a, b, d, c)
}
var _0x30e7 = ['<span class="error-msg">', "undefined", "error", "Feed Error", "</span>", '<span class="loader-1"></span>', '<span class="loader-2"></span>', "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec", "/feeds/posts/default?alt=json&q=", "&max-results=", "search", "/feeds/comments/default?alt=json&max-results=", "comments", "/feeds/posts/default?alt=json&max-results=", "recent", "/feeds/posts/default?alt=json&start-index=", "random", "floor", "/feeds/posts/default/-/", "?alt=json&max-results=", "length", "link", "alternate", "rel", "href", '<span class="catCount">', "$t", "openSearch$totalResults", "title", "noTitle", "category", '<span class="postCat" data-cat="', "term", '"><a href="/search/label/', '">', "</a></span>", "", "author", '<span class="postAuthor">', "name", "published", "substring", "date", '<span class="postDate"><time class="published" datetime="', '"/></span>', '<div class="postMeta">', "</div>", "src", "attr", "img:first", "find", "html", "<div>", "/", "lastIndexOf", "=", "match", "/w72-h72-n", "=w72-h72-n", "content", "media$thumbnail", "url", "https://resources.blogblog.com/img/blank.gif", "indexOf", "<img", "/default.", "/maxresdefault.", "replace", "img.youtube.com", "i.ytimg.com", "resources.blogblog.com", "noImage", "hasImage", "data-icon='video'", "id", "post-", "slice", "charAt", "/s220", "/s72-c", "/s113", "gd$image", '<span class="hasImage" data-style="', '"></span>', "Comment deleted", "//img1.blogblog.com/img/blank.gif", "//img1.blogblog.com/img/b16-rounded.gif", '<span class="noImage">', '<div class="comment item-', '"><div class="commentImage"><a href="', '" title="', '</a></div><h3 class="commentAuthor"><a href="', '</a></h3><p class="commentSnip">', "</p></div>", "push", "slider-1", "slider-2", "slider-3", "grid-1", "grid-2", "grid-3", "sided-1", "sided-2", "sided-3", "sided-4", "tabs-1", "mega", "mega-2", "GET", "json", "slideLayout ", "addClass", "parent", "gridLayout ", "eq", "parents", "related-1", '<div class="posts">', '<h4>Posts</h4><div class="posts">', '<h4>Tags</h4><div class="searchTags">', '<div class="comments">', '<ul class="megaMenu"><div class="posts">', "entry", "feed", '<li class="post item-', '<div class="postImage"><a ', ' title="', '" href="', '"><span class="', '" data-style="', '"/></a></div>', '<div class="postDetails">', '<h3 class="postTitle"><a href="', "</a></h3>", "</div></li>", '<div class="post item-', "</div></div>", '<div class="slide-2 post item-', ' wrapped">', '<div class="postImage"><a title="', '<div class="postImage"><a data-icon="video" title="', '<div class="catImage"><a title="', '<div class="catDetails">', '<h3 class="catName"><a href="/search/label/', '<ul class="megaError">', "</ul>", "noResults", "numPosts-", "<div class='wrpBlock'></div>", "wrapAll", ".wrapped", "data-collect", "removeAttr", "lanDir", '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg></button>', '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg></button>', ".slideArrows", ".widget-heading", "prev", "slick", ".posts", " ", "join", "</div></ul>", "append", '</div><div class="navFor">', "> .posts", ".navFor .posts", ".slider-3 .widget-content .navFor .posts", ".slider-3 .widget-content > .posts", "beforeChange", "trigger", ".postImage span", "on", "afterChange", "lazy", ".postImage span:not(.lazy)", '<svg class="progress-svg" width="72" height="72"><g transform="translate(36,36)"><circle class="circle-go" r="34" cx="0" cy="0"></circle></g></svg>', ".slick-current .postImage span", "<div class='slide-2 slides'></div>", ".slide-2", "last-slide", "removeClass", ".slick-slide", "last", ".slick-slide.slick-active", ".slides", ".postImage span, .catImage span, .commentImage .hasImage", "timeago", ".postDate time", "ajax", "fxLayout", "theiaStickySidebar", "each", "text", "_", "li", "hasMega", "hasClass", "hasMenu", '<ul class="subMenu"></ul>', "<li class='subItem'>", "</li>", ".subMenu", "children", "remove", "liveSearch", "input", "val", "searchLen", '<i class="fas fa-circle-notch fa-spin"></i>', ".close", '<i class="fas fa-times"></i>', "show", "hide", "trim", ".tabsSelect", ".tabsContainer", ".tabContent", '<li data-cat="', "cat", "data", '"><a href="javascript:;">', "</a></li>", "active", "a", '<span class="tabsLoading loader-1"/>', ".tabsLoading", "[data-cat=", "]:not(.active)", '<div class="tabsContainer">', '<div class="tabContent tab-', '" data-cat="', '"></div>', '<ul class="megaMenu"><ul class="tabsSelect"></ul>', "click", "mouseenter", "[", "]", ",", "split", "collect", ".mainMenu .hasMega, .layouts .HTML .widget-content, .sidebar .HTML .widget-content, .panelContent .HTML .widget-content, .footer .rowOne .HTML .widget-content, .rPosts", ".searchResults", "input[type='text']", ".popSearch", ".layouts .Label .category, .sidebar .Label .category, .footer .rowOne .Label .category, .panelContent .Label .category", ".headerLogo img", ".footerLogo img", ".panelLogo img", "dark", "colorSwitch", "darkLogo", "light", ".darkMode a", ".mainBlog, .mainSide, .postShare", ".postOuter .postImage span, .PopularPosts .postImage span, .FeaturedPost .postImage span, .authorImage .hasImage, .postHeader.hasImage .postImage span", ".postOuter .postDate time, .PopularPosts .postDate time, .FeaturedPost .postDate time, .postHeader .postDate time", ".mainMenu li a, .panelContent li a", "down", "toggleClass", "preventDefault", ".panelContent li.hasMenu > a", ".postBody img:not(:eq(0))", ".main .rowTwo .postInner.hasHead", "scrollTop", "top", "offset", "height", "fxHead", "scroll", "fixed", "padding-top", "css", "body", "visible", "ul", "next", ".showBar", ".header.wrapper", "caps", ".authorImage .noImage", ".user a", ".comment-block", "img", "//resources.blogblog.com/img/blank.gif", '<span class="noAvatar" data-caps="', ".avatar-image-container", ".postComments", ".mainBlog, .mainSide", ".commentsToggle a", "offScroll", ".searchOpen a, .popSearch .searchClose", ".slidePanel", ".panelOpen a", "is", "target", ".panelClose i", ".darkMode", "animate", "html, body", ".toTop", ".quote-slider-progress-bar", "width", "%", "init", "slideCount", "currentSlide", "nextSlide", '.LinkList[data-type="Quotes"]', ".plus", ".email,.whatsapp,.reddit", "less", ".postShare", ".shareButtons", "[contactus]", ".beforeAd", ".afterAd", '<div class="ContactForm-wrapper"/>', "#ContactForm1", ".ContactForm-wrapper", "#beforeAd", "appendTo", "#afterAd", '<i class="fas fa-', '"></i>', "faStyle ", "#fff", "a,blockquote", ".postBody", ".loadMore", ".multiplePosts", "loaded", ".post", ".blogPager .noMore", ".blogPager .loading", ".post.loaded .postImage span", ".post.loaded .postDate time", ".blogPager"];
$(_0x30e7[253])[_0x30e7[204]](function () {
    var a = $(this),
        b = a[_0x30e7[232]](_0x30e7[252]);
    null != b && Collect(a, b)
}), $(_0x30e7[256])[_0x30e7[204]](function () {
    var a = $(this),
        b = a[_0x30e7[61]](_0x30e7[254]),
        c = a[_0x30e7[61]](_0x30e7[255]);
    liveSearch(b, c)
}), $(_0x30e7[257])[_0x30e7[204]](function () {
    var a = $(this),
        b = a[_0x30e7[232]](_0x30e7[231]);
    null != b && Category(a, b)
}), $(_0x30e7[62])[_0x30e7[204]](function () {
    var a = $(this),
        b = $(_0x30e7[258]),
        c = $(_0x30e7[259]),
        d = $(_0x30e7[260]),
        e = b[_0x30e7[59]](_0x30e7[58]),
        f = c[_0x30e7[59]](_0x30e7[58]),
        g = d[_0x30e7[59]](_0x30e7[58]);
    (_0x30e7[261] == localStorage[_0x30e7[262]] || a[_0x30e7[209]](_0x30e7[261])) && (a[_0x30e7[122]](_0x30e7[261]), typeof data !== _0x30e7[1] && (b[_0x30e7[59]](_0x30e7[58], data[_0x30e7[263]]), c[_0x30e7[59]](_0x30e7[58], data[_0x30e7[263]]), d[_0x30e7[59]](_0x30e7[58], data[_0x30e7[263]]))), $(_0x30e7[265])[_0x30e7[184]](_0x30e7[246], function () {
        _0x30e7[261] == localStorage[_0x30e7[262]] || a[_0x30e7[209]](_0x30e7[261]) ? (a[_0x30e7[193]](_0x30e7[261]), b[_0x30e7[59]](_0x30e7[58], e), c[_0x30e7[59]](_0x30e7[58], f), d[_0x30e7[59]](_0x30e7[58], g), localStorage[_0x30e7[262]] = _0x30e7[264]) : (a[_0x30e7[122]](_0x30e7[261]), typeof data !== _0x30e7[1] && (b[_0x30e7[59]](_0x30e7[58], data[_0x30e7[263]]), c[_0x30e7[59]](_0x30e7[58], data[_0x30e7[263]]), d[_0x30e7[59]](_0x30e7[58], data[_0x30e7[263]])), localStorage[_0x30e7[262]] = _0x30e7[261])
    })
}), $(function () {
    stickyWrap(_0x30e7[266]), $(_0x30e7[267])[_0x30e7[186]](), $(_0x30e7[268])[_0x30e7[199]](), $(_0x30e7[269])[_0x30e7[204]](function () {
        getList($(this))
    }), $(_0x30e7[273])[_0x30e7[184]](_0x30e7[246], function (a) {
        $(this)[_0x30e7[123]]()[_0x30e7[271]](_0x30e7[270]), a[_0x30e7[272]]()
    }), $(_0x30e7[275])[_0x30e7[61]](_0x30e7[274])[_0x30e7[224]](), $(_0x30e7[290])[_0x30e7[204]](function () {
        var a = $(this),
            c = ($(document)[_0x30e7[276]](), a[_0x30e7[278]]()[_0x30e7[277]]),
            d = a[_0x30e7[279]](),
            e = c + 2 * d;
        1 == fix[_0x30e7[280]] && $(window)[_0x30e7[184]](_0x30e7[281], function () {
            var b = $(document)[_0x30e7[276]]();
            b > e ? (a[_0x30e7[122]](_0x30e7[282]), $(_0x30e7[285])[_0x30e7[284]](_0x30e7[283], a[_0x30e7[279]]())) : (b < c || c <= 1) && (a[_0x30e7[193]](_0x30e7[282]), $(_0x30e7[285])[_0x30e7[284]](_0x30e7[283], 0))
        }), $(_0x30e7[289])[_0x30e7[184]](_0x30e7[246], function () {
            $(this)[_0x30e7[288]](_0x30e7[287])[_0x30e7[271]](_0x30e7[286])
        })
    }), $(_0x30e7[292])[_0x30e7[204]](function () {
        var a = $(this);
        a[_0x30e7[62]](a[_0x30e7[232]](_0x30e7[291])[_0x30e7[88]](0))
    }), $(_0x30e7[298])[_0x30e7[204]](function () {
        var a = $(this),
            b = a[_0x30e7[288]](_0x30e7[294])[_0x30e7[61]](_0x30e7[293])[_0x30e7[205]](),
            c = a[_0x30e7[215]](_0x30e7[295])[_0x30e7[59]](_0x30e7[58]);
        (c[_0x30e7[67]](_0x30e7[96]) || c[_0x30e7[67]](_0x30e7[97]) || c[_0x30e7[67]](_0x30e7[296])) && a[_0x30e7[62]](_0x30e7[297] + b + _0x30e7[45] + b[_0x30e7[88]](0) + _0x30e7[4])
    }), $(_0x30e7[301])[_0x30e7[184]](_0x30e7[246], function () {
        $(_0x30e7[299])[_0x30e7[271]](_0x30e7[286]), stickyWrap(_0x30e7[300])
    }), $(_0x30e7[303])[_0x30e7[184]](_0x30e7[246], function () {
        $(_0x30e7[256])[_0x30e7[271]](_0x30e7[286]), $(_0x30e7[285])[_0x30e7[271]](_0x30e7[302])
    }), $(_0x30e7[305])[_0x30e7[184]](_0x30e7[246], function () {
        $(_0x30e7[304])[_0x30e7[122]](_0x30e7[286]), $(_0x30e7[285])[_0x30e7[122]](_0x30e7[302])
    }), $(_0x30e7[304])[_0x30e7[184]](_0x30e7[246], function (a) {
        ($(a[_0x30e7[307]])[_0x30e7[306]](_0x30e7[304]) || $(a[_0x30e7[307]])[_0x30e7[306]](_0x30e7[308])) && $(_0x30e7[304])[_0x30e7[193]](_0x30e7[286]) && $(_0x30e7[285])[_0x30e7[193]](_0x30e7[302])
    }), $(_0x30e7[312])[_0x30e7[204]](function () {
        var a = $(this),
            b = $(_0x30e7[309]);
        $(window)[_0x30e7[184]](_0x30e7[281], function () {
            $(this)[_0x30e7[276]]() >= 150 ? (a[_0x30e7[122]](_0x30e7[286]), b[_0x30e7[122]](_0x30e7[286])) : (a[_0x30e7[193]](_0x30e7[286]), b[_0x30e7[193]](_0x30e7[286]))
        }), a[_0x30e7[184]](_0x30e7[246], function () {
            $(_0x30e7[311])[_0x30e7[310]]({
                scrollTop: 0
            }, 500)
        })
    }), $(_0x30e7[320])[_0x30e7[204]](function () {
        function d(a, b, d) {
            c[_0x30e7[284]](_0x30e7[314], d + _0x30e7[315])
        }
        var a = $(this),
            b = a[_0x30e7[61]](_0x30e7[287]),
            c = a[_0x30e7[61]](_0x30e7[313]);
        b[_0x30e7[184]](_0x30e7[316], function (a, b) {
            var c = b[_0x30e7[317]],
                e = b[_0x30e7[318]],
                g = (b[_0x30e7[319]], 100 / c * (e + 1));
            d(c, e, g)
        }), b[_0x30e7[184]](_0x30e7[185], function (a, b) {
            var c = b[_0x30e7[317]],
                e = b[_0x30e7[318]],
                g = (b[_0x30e7[319]], 100 / c * (e + 1));
            d(c, e, g)
        }), b[_0x30e7[170]]({
            rtl: fix[_0x30e7[164]],
            infinite: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: !1,
            arrows: !0,
            prevArrow: _0x30e7[165],
            nextArrow: _0x30e7[166],
            fade: !0
        })
    }), $(_0x30e7[325])[_0x30e7[204]](function () {
        var a = $(this),
            b = a[_0x30e7[61]](_0x30e7[321]);
        b[_0x30e7[184]](_0x30e7[246], function () {
            a[_0x30e7[61]](_0x30e7[322])[_0x30e7[271]](_0x30e7[286]), b[_0x30e7[271]](_0x30e7[323]), stickyWrap(_0x30e7[324])
        })
    }), $(_0x30e7[340])[_0x30e7[204]](function () {
        var a = $(this),
            b = a[_0x30e7[205]](),
            c = _0x30e7[326],
            d = b[_0x30e7[74]](c),
            e = a[_0x30e7[169]](_0x30e7[327]),
            f = a[_0x30e7[288]](_0x30e7[328]);
        d > -1 && (a[_0x30e7[62]](b[_0x30e7[78]](c, _0x30e7[329])), a[_0x30e7[61]](_0x30e7[331])[_0x30e7[175]]($(_0x30e7[330]))), $(_0x30e7[332])[_0x30e7[31]] && $(_0x30e7[332])[_0x30e7[333]](e), $(_0x30e7[334])[_0x30e7[31]] && $(_0x30e7[334])[_0x30e7[333]](f), a[_0x30e7[61]](_0x30e7[339])[_0x30e7[204]](function () {
            {
                var a = $(this),
                    b = a[_0x30e7[205]]()[_0x30e7[226]](),
                    c = b[_0x30e7[74]](_0x30e7[248]),
                    d = b[_0x30e7[74]](_0x30e7[64]),
                    e = b[_0x30e7[74]](_0x30e7[249]),
                    f = b[_0x30e7[87]](c + 1, e)[_0x30e7[226]](),
                    g = b[_0x30e7[87]](c + 1, d)[_0x30e7[226]](),
                    h = b[_0x30e7[87]](e + 1)[_0x30e7[226]](),
                    i = b[_0x30e7[87]](d + 1, e)[_0x30e7[226]]();
                a[_0x30e7[62]]()
            }
            e > -1 && c > -1 && -1 == d && (a[_0x30e7[62]](_0x30e7[47] !== f ? _0x30e7[335] + f + _0x30e7[336] + h : h), a[_0x30e7[122]](_0x30e7[337] + f)), e > -1 && c > -1 && d > -1 && (a[_0x30e7[62]](_0x30e7[47] !== g && _0x30e7[47] !== i ? _0x30e7[335] + g + _0x30e7[336] + h : h), a[_0x30e7[122]](_0x30e7[337] + g), a[_0x30e7[284]]({
                color: _0x30e7[338],
                "background-color": i
            }))
        })
    })
}), $(_0x30e7[349])[_0x30e7[204]](function () {
    var a = $(this)[_0x30e7[215]](_0x30e7[341]),
        b = a[_0x30e7[232]](_0x30e7[32]);
    b && a[_0x30e7[224]](), a[_0x30e7[184]](_0x30e7[246], function (c) {
        a[_0x30e7[225]](), $[_0x30e7[201]]({
            url: b,
            success: function (a) {
                var c = $(a)[_0x30e7[61]](_0x30e7[342]);
                c[_0x30e7[61]](_0x30e7[344])[_0x30e7[122]](_0x30e7[343]), $(_0x30e7[342])[_0x30e7[175]](c[_0x30e7[62]]()), (b = $(a)[_0x30e7[61]](_0x30e7[341])[_0x30e7[232]](_0x30e7[32])) ? $(_0x30e7[341])[_0x30e7[224]]() : ($(_0x30e7[341])[_0x30e7[225]](), $(_0x30e7[345])[_0x30e7[122]](_0x30e7[286]))
            },
            beforeSend: function () {
                $(_0x30e7[346])[_0x30e7[122]](_0x30e7[286])
            },
            complete: function () {
                $(_0x30e7[346])[_0x30e7[193]](_0x30e7[286]), $(_0x30e7[347])[_0x30e7[186]](), $(_0x30e7[348])[_0x30e7[199]]()
            }
        }), c[_0x30e7[272]]()
    })
}), ! function () {
    "use strict";

    function a() {
        return "cf-marker-" + Math.random().toString().slice(2)
    }

    function b() {
        for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
        (c = console.warn || console.log).call.apply(c, [console, "[ROCKET LOADER] "].concat(a));
        var c
    }

    function c(a, b) {
        var c = b.parentNode;
        c && o(a, c, b)
    }

    function d(a, b) {
        o(a, b, b.childNodes[0])
    }

    function e(a) {
        var b = a.parentNode;
        b && b.removeChild(a)
    }

    function f(a) {
        var b = a.namespaceURI === y ? "xlink:href" : "src";
        return a.getAttribute(b)
    }

    function g(a, b) {
        var c = a.type.substr(b.length);
        return !(c && !z[c.trim()]) && (!A || !a.hasAttribute("nomodule")) && !(!A && "module" === c)
    }

    function h(a) {
        return g(a, "")
    }

    function i(a, b) {
        return function (c) {
            return b(), a ? a.call(this, c) : void 0
        }
    }

    function j(a, b) {
        a.onload = i(a.onload, b), a.onerror = i(a.onerror, b)
    }

    function k(a) {
        var b = document.createElementNS(a.namespaceURI, "script");
        b.async = a.hasAttribute("async"), b.textContent = a.textContent;
        for (var c = 0; c < a.attributes.length; c++) {
            var d = a.attributes[c];
            try {
                d.namespaceURI ? b.setAttributeNS(d.namespaceURI, d.name, d.value) : b.setAttribute(d.name, d.value)
            } catch (e) {}
        }
        return b
    }

    function l(a, b) {
        var c = new B(b);
        a.dispatchEvent(c)
    }

    function m(b) {
        var c = b.namespaceURI === y,
            d = a();
        b.setAttribute(d, "");
        var f = c ? "<svg>" + b.outerHTML + "</svg>" : b.outerHTML;
        C.call(document, f);
        var g = document.querySelector("[" + d + "]");
        if (g) {
            g.removeAttribute(d);
            var h = c && g.parentNode;
            h && e(h)
        }
        return g
    }

    function n(a) {
        if (a && "handleEvent" in a) {
            var b = a.handleEvent;
            return "function" == typeof b ? b.bind(a) : b
        }
        return a
    }

    function o(a, b, c) {
        var d = c ? function (a) {
            return b.insertBefore(a, c)
        } : function (a) {
            return b.appendChild(a)
        };
        Array.prototype.slice.call(a).forEach(d)
    }

    function p() {
        return /chrome/i.test(navigator.userAgent) && /google/i.test(navigator.vendor)
    }

    function q(a, b) {
        function c() {
            this.constructor = a
        }
        E(a, b), a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
    }

    function r(a) {
        return a instanceof Window ? ["load"] : a instanceof Document ? ["DOMContentLoaded", "readystatechange"] : []
    }

    function s(a) {
        var b = a.getAttribute(M);
        if (!b) return null;
        var c = b.split(N);
        return {
            nonce: c[0],
            handlerPrefixLength: +c[1],
            bailout: !a.hasAttribute("defer")
        }
    }

    function t(a) {
        var b = O + a.nonce;
        Array.prototype.forEach.call(document.querySelectorAll("[" + b + "]"), function (c) {
            c.removeAttribute(b), Array.prototype.forEach.call(c.attributes, function (b) {
                /^on/.test(b.name) && "function" != typeof c[b.name] && c.setAttribute(b.name, b.value.substring(a.handlerPrefixLength))
            })
        })
    }

    function u() {
        var a = window;
        "undefined" != typeof Promise && (a.__cfQR = {
            done: new Promise(function (a) {
                return P = a
            })
        })
    }

    function v(a) {
        var b = new G(a),
            c = new I(b);
        b.harvestScriptsInDocument(), new L(b, {
            nonce: a,
            blocking: !0,
            docWriteSimulator: c,
            callback: function () {}
        }).run()
    }

    function w(a) {
        var b = new G(a),
            c = new I(b);
        b.harvestScriptsInDocument();
        var d = new L(b, {
            nonce: a,
            blocking: !1,
            docWriteSimulator: c,
            callback: function () {
                window.__cfRLUnblockHandlers = !0, d.removePreloadHints(), x(a)
            }
        });
        d.insertPreloadHints(), K.runOnLoad(function () {
            d.run()
        })
    }

    function x(a) {
        var b = new H(a);
        K.simulateStateBeforeDeferScriptsActivation(), b.harvestDeferScriptsInDocument(), new L(b, {
            nonce: a,
            blocking: !1,
            callback: function () {
                K.simulateStateAfterDeferScriptsActivation(), P && P()
            }
        }).run()
    }
    var y = "http://www.w3.org/2000/svg",
        z = {
            "application/ecmascript": !0,
            "application/javascript": !0,
            "application/x-ecmascript": !0,
            "application/x-javascript": !0,
            "text/ecmascript": !0,
            "text/javascript": !0,
            "text/javascript1.0": !0,
            "text/javascript1.1": !0,
            "text/javascript1.2": !0,
            "text/javascript1.3": !0,
            "text/javascript1.4": !0,
            "text/javascript1.5": !0,
            "text/jscript": !0,
            "text/livescript": !0,
            "text/x-ecmascript": !0,
            "text/x-javascript": !0,
            module: !0
        },
        A = void 0 !== document.createElement("script").noModule,
        B = function () {
            var a = window;
            return a.__rocketLoaderEventCtor || Object.defineProperty(a, "__rocketLoaderEventCtor", {
                value: Event
            }), a.__rocketLoaderEventCtor
        }(),
        C = document.write,
        D = document.writeln,
        E = Object.setPrototypeOf || {
            __proto__: []
        }
    instanceof Array && function (a, b) {
        a.__proto__ = b
    } || function (a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    }, F = function () {
        function a(a) {
            this.nonce = a, this.items = []
        }
        return Object.defineProperty(a.prototype, "hasItems", {
            get: function () {
                return this.items.length > 0
            },
            enumerable: !0,
            configurable: !0
        }), a.prototype.pop = function () {
            return this.items.pop()
        }, a.prototype.forEach = function (a) {
            this.items.forEach(function (b) {
                var c = b.script;
                return a(c)
            })
        }, a.prototype.harvestScripts = function (a, b) {
            var c = this,
                d = b.filter,
                e = b.mutate;
            Array.prototype.slice.call(a.querySelectorAll("script")).filter(d).reverse().forEach(function (a) {
                e(a), c.pushScriptOnStack(a)
            })
        }, a.prototype.pushScriptOnStack = function (a) {
            var b = a.parentNode,
                c = this.createPlaceholder(a),
                d = !!f(a);
            b.replaceChild(c, a), this.items.push({
                script: a,
                placeholder: c,
                external: d,
                async: d && a.hasAttribute("async"),
                executable: h(a)
            })
        }, a.prototype.hasNonce = function (a) {
            return 0 === (a.getAttribute("type") || "").indexOf(this.nonce)
        }, a.prototype.removeNonce = function (a) {
            a.type = a.type.substr(this.nonce.length)
        }, a.prototype.makeNonExecutable = function (a) {
            a.type = this.nonce + a.type
        }, a.prototype.isPendingDeferScript = function (a) {
            return a.hasAttribute("defer") || a.type === this.nonce + "module" && !a.hasAttribute("async")
        }, a
    }(), G = function (a) {
        function b() {
            return null !== a && a.apply(this, arguments) || this
        }
        return q(b, a), b.prototype.harvestScriptsInDocument = function () {
            var a = this;
            this.harvestScripts(document, {
                filter: function (b) {
                    return a.hasNonce(b)
                },
                mutate: function (b) {
                    a.isPendingDeferScript(b) || a.removeNonce(b)
                }
            })
        }, b.prototype.harvestScriptsAfterDocWrite = function (a) {
            var b = this;
            this.harvestScripts(a, {
                filter: h,
                mutate: function (a) {
                    b.isPendingDeferScript(a) && b.makeNonExecutable(a)
                }
            })
        }, b.prototype.createPlaceholder = function (a) {
            return document.createComment(a.outerHTML)
        }, b
    }(F), H = function (a) {
        function b() {
            return null !== a && a.apply(this, arguments) || this
        }
        return q(b, a), b.prototype.harvestDeferScriptsInDocument = function () {
            var a = this;
            this.harvestScripts(document, {
                filter: function (b) {
                    return a.hasNonce(b) && a.isPendingDeferScript(b)
                },
                mutate: function (b) {
                    return a.removeNonce(b)
                }
            })
        }, b.prototype.createPlaceholder = function (a) {
            var b = k(a);
            return this.makeNonExecutable(b), b
        }, b
    }(F), I = function () {
        function a(a) {
            this.scriptStack = a
        }
        return a.prototype.enable = function (a) {
            var b = this;
            this.insertionPointMarker = a, this.buffer = "", document.write = function () {
                for (var a = [], c = 0; c < arguments.length; c++) a[c] = arguments[c];
                return b.write(a, !1)
            }, document.writeln = function () {
                for (var a = [], c = 0; c < arguments.length; c++) a[c] = arguments[c];
                return b.write(a, !0)
            }
        }, a.prototype.flushWrittenContentAndDisable = function () {
            document.write = C, document.writeln = D, this.buffer.length && (document.contains(this.insertionPointMarker) ? this.insertionPointMarker.parentNode === document.head ? this.insertContentInHead() : this.insertContentInBody() : b("Insertion point marker for document.write was detached from document:", "Markup will not be inserted"))
        }, a.prototype.insertContentInHead = function () {
            var a = new DOMParser,
                b = "<!DOCTYPE html><head>" + this.buffer + "</head>",
                e = a.parseFromString(b, "text/html");
            if (this.scriptStack.harvestScriptsAfterDocWrite(e), c(e.head.childNodes, this.insertionPointMarker), e.body.childNodes.length) {
                for (var f = Array.prototype.slice.call(e.body.childNodes), g = this.insertionPointMarker.nextSibling; g;) f.push(g), g = g.nextSibling;
                document.body || C.call(document, "<body>"), d(f, document.body)
            }
        }, a.prototype.insertContentInBody = function () {
            var a = this.insertionPointMarker.parentElement,
                b = document.createElement(a.tagName);
            b.innerHTML = this.buffer, this.scriptStack.harvestScriptsAfterDocWrite(b), c(b.childNodes, this.insertionPointMarker)
        }, a.prototype.write = function (a, b) {
            var c = document.currentScript;
            c && f(c) && c.hasAttribute("async") ? (d = b ? D : C).call.apply(d, [document].concat(a)) : this.buffer += a.map(String).join(b ? "\n" : "");
            var d
        }, a
    }(), J = function () {
        function a() {
            var a = this;
            this.simulatedReadyState = "loading", this.bypassEventsInProxies = !1, this.nativeWindowAddEventListener = window.addEventListener;
            try {
                Object.defineProperty(document, "readyState", {
                    get: function () {
                        return a.simulatedReadyState
                    }
                })
            } catch (b) {}
            this.setupEventListenerProxy(), this.updateInlineHandlers()
        }
        return a.prototype.runOnLoad = function (a) {
            var b = this;
            this.nativeWindowAddEventListener.call(window, "load", function (c) {
                return b.bypassEventsInProxies ? void 0 : a(c)
            })
        }, a.prototype.updateInlineHandlers = function () {
            this.proxyInlineHandler(document, "onreadystatechange"), this.proxyInlineHandler(window, "onload"), document.body && this.proxyInlineHandler(document.body, "onload")
        }, a.prototype.simulateStateBeforeDeferScriptsActivation = function () {
            this.bypassEventsInProxies = !0, this.simulatedReadyState = "interactive", l(document, "readystatechange"), this.bypassEventsInProxies = !1
        }, a.prototype.simulateStateAfterDeferScriptsActivation = function () {
            var a = this;
            this.bypassEventsInProxies = !0, l(document, "DOMContentLoaded"), this.simulatedReadyState = "complete", l(document, "readystatechange"), l(window, "load"), this.bypassEventsInProxies = !1, window.setTimeout(function () {
                return a.bypassEventsInProxies = !0
            }, 0)
        }, a.prototype.setupEventListenerProxy = function () {
            var a = this;
            ("undefined" != typeof EventTarget ? [EventTarget.prototype] : [Node.prototype, Window.prototype]).forEach(function (b) {
                return a.patchEventTargetMethods(b)
            })
        }, a.prototype.patchEventTargetMethods = function (a) {
            var b = this,
                c = a.addEventListener,
                d = a.removeEventListener;
            a.addEventListener = function (a, d) {
                for (var e = [], f = 2; f < arguments.length; f++) e[f - 2] = arguments[f];
                var g = r(this),
                    h = d && d.__rocketLoaderProxiedHandler;
                if (!h) {
                    var i = n(d);
                    "function" == typeof i ? (h = function (c) {
                        return b.bypassEventsInProxies || g.indexOf(a) < 0 ? i.call(this, c) : void 0
                    }, Object.defineProperty(d, "__rocketLoaderProxiedHandler", {
                        value: h
                    })) : h = d
                }
                c.call.apply(c, [this, a, h].concat(e))
            }, a.removeEventListener = function (a, b) {
                for (var c = [], e = 2; e < arguments.length; e++) c[e - 2] = arguments[e];
                var f = b && b.__rocketLoaderProxiedHandler || b;
                d.call.apply(d, [this, a, f].concat(c))
            }
        }, a.prototype.proxyInlineHandler = function (a, b) {
            try {
                var c = a[b];
                if (c && !c.__rocketLoaderInlineHandlerProxy) {
                    var d = this;
                    a[b] = function (a) {
                        return d.bypassEventsInProxies ? c.call(this, a) : void 0
                    }, Object.defineProperty(a[b], "__rocketLoaderInlineHandlerProxy", {
                        value: !0
                    })
                }
            } catch (e) {
                return void console.warn("encountered an error when accessing " + b + " handler:", e.message)
            }
        }, a
    }(), K = function () {
        var a = window;
        return a.__rocketLoaderLoadProgressSimulator || Object.defineProperty(a, "__rocketLoaderLoadProgressSimulator", {
            value: new J
        }), a.__rocketLoaderLoadProgressSimulator
    }(), L = function () {
        function a(a, b) {
            this.scriptStack = a, this.settings = b, this.preloadHints = []
        }
        return a.prototype.insertPreloadHints = function () {
            var a = this;
            this.scriptStack.forEach(function (b) {
                if (g(b, a.settings.nonce)) {
                    var c = f(b),
                        d = p() && b.hasAttribute("integrity");
                    if (c && !d) {
                        var e = document.createElement("link");
                        e.setAttribute("rel", "preload"), e.setAttribute("as", "script"), e.setAttribute("href", c), b.crossOrigin && e.setAttribute("crossorigin", b.crossOrigin), document.head.appendChild(e), a.preloadHints.push(e)
                    }
                }
            })
        }, a.prototype.removePreloadHints = function () {
            this.preloadHints.forEach(function (a) {
                return e(a)
            })
        }, a.prototype.run = function () {
            for (var a = this, b = this; this.scriptStack.hasItems;) {
                var c = function () {
                    var c = b.settings.docWriteSimulator,
                        d = b.scriptStack.pop();
                    c && !d.async && c.enable(d.placeholder);
                    var e = b.activateScript(d);
                    return e ? d.external && d.executable && !d.async ? (j(e, function () {
                        a.finalizeActivation(d), a.run()
                    }), {
                        value: void 0
                    }) : void b.finalizeActivation(d) : (c && c.flushWrittenContentAndDisable(), "continue")
                }();
                if ("object" == typeof c) return c.value
            }
            this.scriptStack.hasItems || this.settings.callback()
        }, a.prototype.finalizeActivation = function (a) {
            this.settings.docWriteSimulator && !a.async && this.settings.docWriteSimulator.flushWrittenContentAndDisable(), K.updateInlineHandlers(), e(a.placeholder)
        }, a.prototype.activateScript = function (a) {
            var c = a.script,
                d = a.placeholder,
                e = a.external,
                f = a.async,
                g = d.parentNode;
            if (!document.contains(d)) return b("Placeholder for script \n" + c.outerHTML + "\n was detached from document.", "Script will not be executed."), null;
            var h = this.settings.blocking && e && !f ? m(c) : k(c);
            return h ? (g.insertBefore(h, d), h) : (b("Failed to create activatable copy of script \n" + c.outerHTML + "\n", "Script will not be executed."), null)
        }, a
    }(), M = "data-cf-settings", N = "|", O = "data-cf-modified-", P = void 0;
    ! function () {
        var a = document.currentScript;
        if (a) {
            var c = s(a);
            c ? (e(a), t(c), K.updateInlineHandlers(), c.bailout ? v(c.nonce) : (u(), w(c.nonce))) : b("Activator script doesn't have settings. No scripts will be executed.")
        } else b("Can't obtain activator script. No scripts will be executed.")
    }()
}();
var myIMG = document.getElementsByTagName("img");
for (var x = 0; x < myIMG.length; x++) {
    var imgSRC = myIMG[x].src;
    var imgSRC_width = myIMG[x].width;
    var imgSRC_height = myIMG[x].height;
    var mypin = String(imgSRC.match(/\/s72-c\//));
    imgSRC = replaceAll(imgSRC, mypin, "/w" + imgSRC_width + "-h" + imgSRC_height + "-p/-rw");
    imgSRC = imgSRC.replace(/png/gim, "webp");
    imgSRC = imgSRC.replace(/jpeg/gim, "webp");
    imgSRC = imgSRC.replace(/jpg/gim, "webp");
    myIMG[x].src = imgSRC;
    console.log(imgSRC)
};