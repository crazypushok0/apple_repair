! function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    "use strict";
    var n = [],
        i = t.document,
        r = Object.getPrototypeOf,
        o = n.slice,
        s = n.concat,
        a = n.push,
        l = n.indexOf,
        c = {},
        u = c.toString,
        h = c.hasOwnProperty,
        d = h.toString,
        p = d.call(Object),
        f = {},
        m = function(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        },
        g = function(t) {
            return null != t && t === t.window
        },
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(t, e, n) {
        var r, o, s = (n = n || i).createElement("script");
        if (s.text = t, e)
            for (r in v)(o = e[r] || e.getAttribute && e.getAttribute(r)) && s.setAttribute(r, o);
        n.head.appendChild(s).parentNode.removeChild(s)
    }

    function w(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? c[u.call(t)] || "object" : typeof t
    }
    var b = "3.4.1",
        _ = function(t, e) {
            return new _.fn.init(t, e)
        },
        x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function T(t) {
        var e = !!t && "length" in t && t.length,
            n = w(t);
        return !m(t) && !g(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    _.fn = _.prototype = {
        jquery: b,
        constructor: _,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(t) {
            return null == t ? o.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            var e = _.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function(t) {
            return _.each(this, t)
        },
        map: function(t) {
            return this.pushStack(_.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= n && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, _.extend = _.fn.extend = function() {
        var t, e, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || m(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t) i = t[e], "__proto__" !== e && s !== i && (c && i && (_.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[e], o = r && !Array.isArray(n) ? [] : r || _.isPlainObject(n) ? n : {}, r = !1, s[e] = _.extend(c, o, i)) : void 0 !== i && (s[e] = i));
        return s
    }, _.extend({
        expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isPlainObject: function(t) {
            var e, n;
            return !(!t || "[object Object]" !== u.call(t) || (e = r(t)) && ("function" != typeof(n = h.call(e, "constructor") && e.constructor) || d.call(n) !== p))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        globalEval: function(t, e) {
            y(t, {
                nonce: e && e.nonce
            })
        },
        each: function(t, e) {
            var n, i = 0;
            if (T(t))
                for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
            else
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i])) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(x, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (T(Object(t)) ? _.merge(n, "string" == typeof t ? [t] : t) : a.call(n, t)), n
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : l.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
            return t.length = r, t
        },
        grep: function(t, e, n) {
            for (var i = [], r = 0, o = t.length, s = !n; r < o; r++) !e(t[r], r) !== s && i.push(t[r]);
            return i
        },
        map: function(t, e, n) {
            var i, r, o = 0,
                a = [];
            if (T(t))
                for (i = t.length; o < i; o++) null != (r = e(t[o], o, n)) && a.push(r);
            else
                for (o in t) null != (r = e(t[o], o, n)) && a.push(r);
            return s.apply([], a)
        },
        guid: 1,
        support: f
    }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = n[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        c["[object " + e + "]"] = e.toLowerCase()
    });
    var C = function(t) {
        var e, n, i, r, o, s, a, l, c, u, h, d, p, f, m, g, v, y, w, b = "sizzle" + 1 * new Date,
            _ = t.document,
            x = 0,
            T = 0,
            C = lt(),
            E = lt(),
            S = lt(),
            A = lt(),
            D = function(t, e) {
                return t === e && (h = !0), 0
            },
            k = {}.hasOwnProperty,
            N = [],
            O = N.pop,
            j = N.push,
            I = N.push,
            $ = N.slice,
            P = function(t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e) return n;
                return -1
            },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + R + "*(" + q + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + R + "*\\]",
            z = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            H = new RegExp(R + "+", "g"),
            W = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            X = new RegExp("^" + R + "*," + R + "*"),
            F = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            B = new RegExp(R + "|>"),
            Y = new RegExp(z),
            U = new RegExp("^" + q + "$"),
            Q = {
                ID: new RegExp("^#(" + q + ")"),
                CLASS: new RegExp("^\\.(" + q + ")"),
                TAG: new RegExp("^(" + q + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + L + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
            },
            V = /HTML$/i,
            G = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            tt = /[+~]/,
            et = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
            nt = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            rt = function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            ot = function() {
                d()
            },
            st = bt(function(t) {
                return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            I.apply(N = $.call(_.childNodes), _.childNodes), N[_.childNodes.length].nodeType
        } catch (e) {
            I = {
                apply: N.length ? function(t, e) {
                    j.apply(t, $.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }

        function at(t, e, i, r) {
            var o, a, c, u, h, f, v, y = e && e.ownerDocument,
                x = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== x && 9 !== x && 11 !== x) return i;
            if (!r && ((e ? e.ownerDocument || e : _) !== p && d(e), e = e || p, m)) {
                if (11 !== x && (h = J.exec(t)))
                    if (o = h[1]) {
                        if (9 === x) {
                            if (!(c = e.getElementById(o))) return i;
                            if (c.id === o) return i.push(c), i
                        } else if (y && (c = y.getElementById(o)) && w(e, c) && c.id === o) return i.push(c), i
                    } else {
                        if (h[2]) return I.apply(i, e.getElementsByTagName(t)), i;
                        if ((o = h[3]) && n.getElementsByClassName && e.getElementsByClassName) return I.apply(i, e.getElementsByClassName(o)), i
                    } if (n.qsa && !A[t + " "] && (!g || !g.test(t)) && (1 !== x || "object" !== e.nodeName.toLowerCase())) {
                    if (v = t, y = e, 1 === x && B.test(t)) {
                        for ((u = e.getAttribute("id")) ? u = u.replace(it, rt) : e.setAttribute("id", u = b), a = (f = s(t)).length; a--;) f[a] = "#" + u + " " + wt(f[a]);
                        v = f.join(","), y = tt.test(t) && vt(e.parentNode) || e
                    }
                    try {
                        return I.apply(i, y.querySelectorAll(v)), i
                    } catch (e) {
                        A(t, !0)
                    } finally {
                        u === b && e.removeAttribute("id")
                    }
                }
            }
            return l(t.replace(W, "$1"), e, i, r)
        }

        function lt() {
            var t = [];
            return function e(n, r) {
                return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
        }

        function ct(t) {
            return t[b] = !0, t
        }

        function ut(t) {
            var e = p.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function ht(t, e) {
            for (var n = t.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = e
        }

        function dt(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function pt(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function ft(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function mt(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && st(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function gt(t) {
            return ct(function(e) {
                return e = +e, ct(function(n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function vt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (e in n = at.support = {}, o = at.isXML = function(t) {
                var e = t.namespaceURI,
                    n = (t.ownerDocument || t).documentElement;
                return !V.test(e || n && n.nodeName || "HTML")
            }, d = at.setDocument = function(t) {
                var e, r, s = t ? t.ownerDocument || t : _;
                return s !== p && 9 === s.nodeType && s.documentElement && (f = (p = s).documentElement, m = !o(p), _ !== p && (r = p.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ot, !1) : r.attachEvent && r.attachEvent("onunload", ot)), n.attributes = ut(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), n.getElementsByTagName = ut(function(t) {
                    return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length
                }), n.getElementsByClassName = Z.test(p.getElementsByClassName), n.getById = ut(function(t) {
                    return f.appendChild(t).id = b, !p.getElementsByName || !p.getElementsByName(b).length
                }), n.getById ? (i.filter.ID = function(t) {
                    var e = t.replace(et, nt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }, i.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && m) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function(t) {
                    var e = t.replace(et, nt);
                    return function(t) {
                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }, i.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && m) {
                        var n, i, r, o = e.getElementById(t);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                            for (r = e.getElementsByName(t), i = 0; o = r[i++];)
                                if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        r = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, i.find.CLASS = n.getElementsByClassName && function(t, e) {
                    if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t)
                }, v = [], g = [], (n.qsa = Z.test(p.querySelectorAll)) && (ut(function(t) {
                    f.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + R + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + R + "*(?:value|" + L + ")"), t.querySelectorAll("[id~=" + b + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]")
                }), ut(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = p.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + R + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), f.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                })), (n.matchesSelector = Z.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ut(function(t) {
                    n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", z)
                }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), e = Z.test(f.compareDocumentPosition), w = e || Z.test(f.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, D = e ? function(t, e) {
                    if (t === e) return h = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === p || t.ownerDocument === _ && w(_, t) ? -1 : e === p || e.ownerDocument === _ && w(_, e) ? 1 : u ? P(u, t) - P(u, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return h = !0, 0;
                    var n, i = 0,
                        r = t.parentNode,
                        o = e.parentNode,
                        s = [t],
                        a = [e];
                    if (!r || !o) return t === p ? -1 : e === p ? 1 : r ? -1 : o ? 1 : u ? P(u, t) - P(u, e) : 0;
                    if (r === o) return dt(t, e);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? dt(s[i], a[i]) : s[i] === _ ? -1 : a[i] === _ ? 1 : 0
                }), p
            }, at.matches = function(t, e) {
                return at(t, null, null, e)
            }, at.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== p && d(t), n.matchesSelector && m && !A[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e))) try {
                    var i = y.call(t, e);
                    if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {
                    A(e, !0)
                }
                return 0 < at(e, p, null, [t]).length
            }, at.contains = function(t, e) {
                return (t.ownerDocument || t) !== p && d(t), w(t, e)
            }, at.attr = function(t, e) {
                (t.ownerDocument || t) !== p && d(t);
                var r = i.attrHandle[e.toLowerCase()],
                    o = r && k.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !m) : void 0;
                return void 0 !== o ? o : n.attributes || !m ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
            }, at.escape = function(t) {
                return (t + "").replace(it, rt)
            }, at.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, at.uniqueSort = function(t) {
                var e, i = [],
                    r = 0,
                    o = 0;
                if (h = !n.detectDuplicates, u = !n.sortStable && t.slice(0), t.sort(D), h) {
                    for (; e = t[o++];) e === t[o] && (r = i.push(o));
                    for (; r--;) t.splice(i[r], 1)
                }
                return u = null, t
            }, r = at.getText = function(t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += r(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[i++];) n += r(e);
                return n
            }, (i = at.selectors = {
                cacheLength: 50,
                createPseudo: ct,
                match: Q,
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
                    ATTR: function(t) {
                        return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return Q.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && Y.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(et, nt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = C[t + " "];
                        return e || (e = new RegExp("(^|" + R + ")" + t + "(" + R + "|$)")) && C(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, e, n) {
                        return function(i) {
                            var r = at.attr(i, t);
                            return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && -1 < r.indexOf(n) : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? -1 < (" " + r.replace(H, " ") + " ").indexOf(n) : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, r) {
                        var o = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === r ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var c, u, h, d, p, f, m = o !== s ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                w = !1;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (d = e; d = d[m];)
                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (w = (p = (c = (u = (h = (d = g)[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === x && c[1]) && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (w = p = 0) || f.pop();)
                                        if (1 === d.nodeType && ++w && d === e) {
                                            u[t] = [x, p, w];
                                            break
                                        }
                                } else if (y && (w = p = (c = (u = (h = (d = e)[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === x && c[1]), !1 === w)
                                    for (;
                                        (d = ++p && d && d[m] || (w = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++w || (y && ((u = (h = d[b] || (d[b] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] = [x, w]), d !== e)););
                                return (w -= r) === i || w % i == 0 && 0 <= w / i
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var n, r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                        return r[b] ? r(e) : 1 < r.length ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? ct(function(t, n) {
                            for (var i, o = r(t, e), s = o.length; s--;) t[i = P(t, o[s])] = !(n[i] = o[s])
                        }) : function(t) {
                            return r(t, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: ct(function(t) {
                        var e = [],
                            n = [],
                            i = a(t.replace(W, "$1"));
                        return i[b] ? ct(function(t, e, n, r) {
                            for (var o, s = i(t, null, r, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                        }) : function(t, r, o) {
                            return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: ct(function(t) {
                        return function(e) {
                            return 0 < at(t, e).length
                        }
                    }),
                    contains: ct(function(t) {
                        return t = t.replace(et, nt),
                            function(e) {
                                return -1 < (e.textContent || r(e)).indexOf(t)
                            }
                    }),
                    lang: ct(function(t) {
                        return U.test(t || "") || at.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(),
                            function(e) {
                                var n;
                                do {
                                    if (n = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === f
                    },
                    focus: function(t) {
                        return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: mt(!1),
                    disabled: mt(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !i.pseudos.empty(t)
                    },
                    header: function(t) {
                        return K.test(t.nodeName)
                    },
                    input: function(t) {
                        return G.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: gt(function() {
                        return [0]
                    }),
                    last: gt(function(t, e) {
                        return [e - 1]
                    }),
                    eq: gt(function(t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: gt(function(t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    }),
                    odd: gt(function(t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    }),
                    lt: gt(function(t, e, n) {
                        for (var i = n < 0 ? n + e : e < n ? e : n; 0 <= --i;) t.push(i);
                        return t
                    }),
                    gt: gt(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[e] = pt(e);
        for (e in {
                submit: !0,
                reset: !0
            }) i.pseudos[e] = ft(e);

        function yt() {}

        function wt(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
        }

        function bt(t, e, n) {
            var i = e.dir,
                r = e.next,
                o = r || i,
                s = n && "parentNode" === o,
                a = T++;
            return e.first ? function(e, n, r) {
                for (; e = e[i];)
                    if (1 === e.nodeType || s) return t(e, n, r);
                return !1
            } : function(e, n, l) {
                var c, u, h, d = [x, a];
                if (l) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || s) && t(e, n, l)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || s)
                            if (u = (h = e[b] || (e[b] = {}))[e.uniqueID] || (h[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e;
                            else {
                                if ((c = u[o]) && c[0] === x && c[1] === a) return d[2] = c[2];
                                if ((u[o] = d)[2] = t(e, n, l)) return !0
                            } return !1
            }
        }

        function _t(t) {
            return 1 < t.length ? function(e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function xt(t, e, n, i, r) {
            for (var o, s = [], a = 0, l = t.length, c = null != e; a < l; a++)(o = t[a]) && (n && !n(o, i, r) || (s.push(o), c && e.push(a)));
            return s
        }

        function Tt(t, e, n, i, r, o) {
            return i && !i[b] && (i = Tt(i)), r && !r[b] && (r = Tt(r, o)), ct(function(o, s, a, l) {
                var c, u, h, d = [],
                    p = [],
                    f = s.length,
                    m = o || function(t, e, n) {
                        for (var i = 0, r = e.length; i < r; i++) at(t, e[i], n);
                        return n
                    }(e || "*", a.nodeType ? [a] : a, []),
                    g = !t || !o && e ? m : xt(m, d, t, a, l),
                    v = n ? r || (o ? t : f || i) ? [] : s : g;
                if (n && n(g, v, a, l), i)
                    for (c = xt(v, p), i(c, [], a, l), u = c.length; u--;)(h = c[u]) && (v[p[u]] = !(g[p[u]] = h));
                if (o) {
                    if (r || t) {
                        if (r) {
                            for (c = [], u = v.length; u--;)(h = v[u]) && c.push(g[u] = h);
                            r(null, v = [], c, l)
                        }
                        for (u = v.length; u--;)(h = v[u]) && -1 < (c = r ? P(o, h) : d[u]) && (o[c] = !(s[c] = h))
                    }
                } else v = xt(v === s ? v.splice(f, v.length) : v), r ? r(null, s, v, l) : I.apply(s, v)
            })
        }

        function Ct(t) {
            for (var e, n, r, o = t.length, s = i.relative[t[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = bt(function(t) {
                    return t === e
                }, a, !0), h = bt(function(t) {
                    return -1 < P(e, t)
                }, a, !0), d = [function(t, n, i) {
                    var r = !s && (i || n !== c) || ((e = n).nodeType ? u(t, n, i) : h(t, n, i));
                    return e = null, r
                }]; l < o; l++)
                if (n = i.relative[t[l].type]) d = [bt(_t(d), n)];
                else {
                    if ((n = i.filter[t[l].type].apply(null, t[l].matches))[b]) {
                        for (r = ++l; r < o && !i.relative[t[r].type]; r++);
                        return Tt(1 < l && _t(d), 1 < l && wt(t.slice(0, l - 1).concat({
                            value: " " === t[l - 2].type ? "*" : ""
                        })).replace(W, "$1"), n, l < r && Ct(t.slice(l, r)), r < o && Ct(t = t.slice(r)), r < o && wt(t))
                    }
                    d.push(n)
                } return _t(d)
        }
        return yt.prototype = i.filters = i.pseudos, i.setFilters = new yt, s = at.tokenize = function(t, e) {
            var n, r, o, s, a, l, c, u = E[t + " "];
            if (u) return e ? 0 : u.slice(0);
            for (a = t, l = [], c = i.preFilter; a;) {
                for (s in n && !(r = X.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = F.exec(a)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(W, " ")
                    }), a = a.slice(n.length)), i.filter) !(r = Q[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: s,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return e ? a.length : a ? at.error(t) : E(t, l).slice(0)
        }, a = at.compile = function(t, e) {
            var n, r, o, a, l, u, h = [],
                f = [],
                g = S[t + " "];
            if (!g) {
                for (e || (e = s(t)), n = e.length; n--;)(g = Ct(e[n]))[b] ? h.push(g) : f.push(g);
                (g = S(t, (r = f, a = 0 < (o = h).length, l = 0 < r.length, u = function(t, e, n, s, u) {
                    var h, f, g, v = 0,
                        y = "0",
                        w = t && [],
                        b = [],
                        _ = c,
                        T = t || l && i.find.TAG("*", u),
                        C = x += null == _ ? 1 : Math.random() || .1,
                        E = T.length;
                    for (u && (c = e === p || e || u); y !== E && null != (h = T[y]); y++) {
                        if (l && h) {
                            for (f = 0, e || h.ownerDocument === p || (d(h), n = !m); g = r[f++];)
                                if (g(h, e || p, n)) {
                                    s.push(h);
                                    break
                                } u && (x = C)
                        }
                        a && ((h = !g && h) && v--, t && w.push(h))
                    }
                    if (v += y, a && y !== v) {
                        for (f = 0; g = o[f++];) g(w, b, e, n);
                        if (t) {
                            if (0 < v)
                                for (; y--;) w[y] || b[y] || (b[y] = O.call(s));
                            b = xt(b)
                        }
                        I.apply(s, b), u && !t && 0 < b.length && 1 < v + o.length && at.uniqueSort(s)
                    }
                    return u && (x = C, c = _), w
                }, a ? ct(u) : u))).selector = t
            }
            return g
        }, l = at.select = function(t, e, n, r) {
            var o, l, c, u, h, d = "function" == typeof t && t,
                p = !r && s(t = d.selector || t);
            if (n = n || [], 1 === p.length) {
                if (2 < (l = p[0] = p[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === e.nodeType && m && i.relative[l[1].type]) {
                    if (!(e = (i.find.ID(c.matches[0].replace(et, nt), e) || [])[0])) return n;
                    d && (e = e.parentNode), t = t.slice(l.shift().value.length)
                }
                for (o = Q.needsContext.test(t) ? 0 : l.length; o-- && (c = l[o], !i.relative[u = c.type]);)
                    if ((h = i.find[u]) && (r = h(c.matches[0].replace(et, nt), tt.test(l[0].type) && vt(e.parentNode) || e))) {
                        if (l.splice(o, 1), !(t = r.length && wt(l))) return I.apply(n, r), n;
                        break
                    }
            }
            return (d || a(t, p))(r, e, !m, n, !e || tt.test(t) && vt(e.parentNode) || e), n
        }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!h, d(), n.sortDetached = ut(function(t) {
            return 1 & t.compareDocumentPosition(p.createElement("fieldset"))
        }), ut(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || ht("type|href|height|width", function(t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), n.attributes && ut(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || ht("value", function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), ut(function(t) {
            return null == t.getAttribute("disabled")
        }) || ht(L, function(t, e, n) {
            var i;
            if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), at
    }(t);
    _.find = C, _.expr = C.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = C.uniqueSort, _.text = C.getText, _.isXMLDoc = C.isXML, _.contains = C.contains, _.escapeSelector = C.escape;
    var E = function(t, e, n) {
            for (var i = [], r = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && _(t).is(n)) break;
                    i.push(t)
                } return i
        },
        S = function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        A = _.expr.match.needsContext;

    function D(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function N(t, e, n) {
        return m(e) ? _.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        }) : e.nodeType ? _.grep(t, function(t) {
            return t === e !== n
        }) : "string" != typeof e ? _.grep(t, function(t) {
            return -1 < l.call(e, t) !== n
        }) : _.filter(e, t, n)
    }
    _.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? _.find.matchesSelector(i, t) ? [i] : [] : _.find.matches(t, _.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, _.fn.extend({
        find: function(t) {
            var e, n, i = this.length,
                r = this;
            if ("string" != typeof t) return this.pushStack(_(t).filter(function() {
                for (e = 0; e < i; e++)
                    if (_.contains(r[e], this)) return !0
            }));
            for (n = this.pushStack([]), e = 0; e < i; e++) _.find(t, r[e], n);
            return 1 < i ? _.uniqueSort(n) : n
        },
        filter: function(t) {
            return this.pushStack(N(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(N(this, t || [], !0))
        },
        is: function(t) {
            return !!N(this, "string" == typeof t && A.test(t) ? _(t) : t || [], !1).length
        }
    });
    var O, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_.fn.init = function(t, e, n) {
        var r, o;
        if (!t) return this;
        if (n = n || O, "string" == typeof t) {
            if (!(r = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : j.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (r[1]) {
                if (e = e instanceof _ ? e[0] : e, _.merge(this, _.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : i, !0)), k.test(r[1]) && _.isPlainObject(e))
                    for (r in e) m(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                return this
            }
            return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : m(t) ? void 0 !== n.ready ? n.ready(t) : t(_) : _.makeArray(t, this)
    }).prototype = _.fn, O = _(i);
    var I = /^(?:parents|prev(?:Until|All))/,
        $ = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function P(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    _.fn.extend({
        has: function(t) {
            var e = _(t, this),
                n = e.length;
            return this.filter(function() {
                for (var t = 0; t < n; t++)
                    if (_.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof t && _(t);
            if (!A.test(t))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && _.find.matchesSelector(n, t))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? _.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? l.call(_(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(_.uniqueSort(_.merge(this.get(), _(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), _.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return E(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return E(t, "parentNode", n)
        },
        next: function(t) {
            return P(t, "nextSibling")
        },
        prev: function(t) {
            return P(t, "previousSibling")
        },
        nextAll: function(t) {
            return E(t, "nextSibling")
        },
        prevAll: function(t) {
            return E(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return E(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return E(t, "previousSibling", n)
        },
        siblings: function(t) {
            return S((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return S(t.firstChild)
        },
        contents: function(t) {
            return void 0 !== t.contentDocument ? t.contentDocument : (D(t, "template") && (t = t.content || t), _.merge([], t.childNodes))
        }
    }, function(t, e) {
        _.fn[t] = function(n, i) {
            var r = _.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = _.filter(i, r)), 1 < this.length && ($[t] || _.uniqueSort(r), I.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var L = /[^\x20\t\r\n\f]+/g;

    function R(t) {
        return t
    }

    function q(t) {
        throw t
    }

    function M(t, e, n, i) {
        var r;
        try {
            t && m(r = t.promise) ? r.call(t).done(e).fail(n) : t && m(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
        } catch (t) {
            n.apply(void 0, [t])
        }
    }
    _.Callbacks = function(t) {
        var e, n;
        t = "string" == typeof t ? (e = t, n = {}, _.each(e.match(L) || [], function(t, e) {
            n[e] = !0
        }), n) : _.extend({}, t);
        var i, r, o, s, a = [],
            l = [],
            c = -1,
            u = function() {
                for (s = s || t.once, o = i = !0; l.length; c = -1)
                    for (r = l.shift(); ++c < a.length;) !1 === a[c].apply(r[0], r[1]) && t.stopOnFalse && (c = a.length, r = !1);
                t.memory || (r = !1), i = !1, s && (a = r ? [] : "")
            },
            h = {
                add: function() {
                    return a && (r && !i && (c = a.length - 1, l.push(r)), function e(n) {
                        _.each(n, function(n, i) {
                            m(i) ? t.unique && h.has(i) || a.push(i) : i && i.length && "string" !== w(i) && e(i)
                        })
                    }(arguments), r && !i && u()), this
                },
                remove: function() {
                    return _.each(arguments, function(t, e) {
                        for (var n; - 1 < (n = _.inArray(e, a, n));) a.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(t) {
                    return t ? -1 < _.inArray(t, a) : 0 < a.length
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return s = l = [], a = r = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return s = l = [], r || i || (a = r = ""), this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(t, e) {
                    return s || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), i || u()), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return h
    }, _.extend({
        Deferred: function(e) {
            var n = [
                    ["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
                    ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(t) {
                        return r.then(null, t)
                    },
                    pipe: function() {
                        var t = arguments;
                        return _.Deferred(function(e) {
                            _.each(n, function(n, i) {
                                var r = m(t[i[4]]) && t[i[4]];
                                o[i[1]](function() {
                                    var t = r && r.apply(this, arguments);
                                    t && m(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, r ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    then: function(e, i, r) {
                        var o = 0;

                        function s(e, n, i, r) {
                            return function() {
                                var a = this,
                                    l = arguments,
                                    c = function() {
                                        var t, c;
                                        if (!(e < o)) {
                                            if ((t = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            c = t && ("object" == typeof t || "function" == typeof t) && t.then, m(c) ? r ? c.call(t, s(o, n, R, r), s(o, n, q, r)) : (o++, c.call(t, s(o, n, R, r), s(o, n, q, r), s(o, n, R, n.notifyWith))) : (i !== R && (a = void 0, l = [t]), (r || n.resolveWith)(a, l))
                                        }
                                    },
                                    u = r ? c : function() {
                                        try {
                                            c()
                                        } catch (t) {
                                            _.Deferred.exceptionHook && _.Deferred.exceptionHook(t, u.stackTrace), o <= e + 1 && (i !== q && (a = void 0, l = [t]), n.rejectWith(a, l))
                                        }
                                    };
                                e ? u() : (_.Deferred.getStackHook && (u.stackTrace = _.Deferred.getStackHook()), t.setTimeout(u))
                            }
                        }
                        return _.Deferred(function(t) {
                            n[0][3].add(s(0, t, m(r) ? r : R, t.notifyWith)), n[1][3].add(s(0, t, m(e) ? e : R)), n[2][3].add(s(0, t, m(i) ? i : q))
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? _.extend(t, r) : r
                    }
                },
                o = {};
            return _.each(n, function(t, e) {
                var s = e[2],
                    a = e[5];
                r[e[1]] = s.add, a && s.add(function() {
                    i = a
                }, n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock), s.add(e[3].fire), o[e[0]] = function() {
                    return o[e[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[e[0] + "With"] = s.fireWith
            }), r.promise(o), e && e.call(o, o), o
        },
        when: function(t) {
            var e = arguments.length,
                n = e,
                i = Array(n),
                r = o.call(arguments),
                s = _.Deferred(),
                a = function(t) {
                    return function(n) {
                        i[t] = this, r[t] = 1 < arguments.length ? o.call(arguments) : n, --e || s.resolveWith(i, r)
                    }
                };
            if (e <= 1 && (M(t, s.done(a(n)).resolve, s.reject, !e), "pending" === s.state() || m(r[n] && r[n].then))) return s.then();
            for (; n--;) M(r[n], a(n), s.reject);
            return s.promise()
        }
    });
    var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _.Deferred.exceptionHook = function(e, n) {
        t.console && t.console.warn && e && z.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }, _.readyException = function(e) {
        t.setTimeout(function() {
            throw e
        })
    };
    var H = _.Deferred();

    function W() {
        i.removeEventListener("DOMContentLoaded", W), t.removeEventListener("load", W), _.ready()
    }
    _.fn.ready = function(t) {
        return H.then(t).catch(function(t) {
            _.readyException(t)
        }), this
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(t) {
            (!0 === t ? --_.readyWait : _.isReady) || (_.isReady = !0) !== t && 0 < --_.readyWait || H.resolveWith(i, [_])
        }
    }), _.ready.then = H.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(_.ready) : (i.addEventListener("DOMContentLoaded", W), t.addEventListener("load", W));
    var X = function(t, e, n, i, r, o, s) {
            var a = 0,
                l = t.length,
                c = null == n;
            if ("object" === w(n))
                for (a in r = !0, n) X(t, e, a, n[a], !0, o, s);
            else if (void 0 !== i && (r = !0, m(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                    return c.call(_(t), n)
                })), e))
                for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : c ? e.call(t) : l ? e(t[0], n) : o
        },
        F = /^-ms-/,
        B = /-([a-z])/g;

    function Y(t, e) {
        return e.toUpperCase()
    }

    function U(t) {
        return t.replace(F, "ms-").replace(B, Y)
    }
    var Q = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };

    function V() {
        this.expando = _.expando + V.uid++
    }
    V.uid = 1, V.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {}, Q(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, n) {
            var i, r = this.cache(t);
            if ("string" == typeof e) r[U(e)] = n;
            else
                for (i in e) r[U(i)] = e[i];
            return r
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][U(e)]
        },
        access: function(t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    n = (e = Array.isArray(e) ? e.map(U) : (e = U(e)) in i ? [e] : e.match(L) || []).length;
                    for (; n--;) delete i[e[n]]
                }(void 0 === e || _.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !_.isEmptyObject(e)
        }
    };
    var G = new V,
        K = new V,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function tt(t, e, n) {
        var i, r;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(J, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Z.test(r) ? JSON.parse(r) : r)
                } catch (t) {}
                K.set(t, e, n)
            } else n = void 0;
        return n
    }
    _.extend({
        hasData: function(t) {
            return K.hasData(t) || G.hasData(t)
        },
        data: function(t, e, n) {
            return K.access(t, e, n)
        },
        removeData: function(t, e) {
            K.remove(t, e)
        },
        _data: function(t, e, n) {
            return G.access(t, e, n)
        },
        _removeData: function(t, e) {
            G.remove(t, e)
        }
    }), _.fn.extend({
        data: function(t, e) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = K.get(o), 1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = U(i.slice(5)), tt(o, i, r[i]));
                    G.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                K.set(this, t)
            }) : X(this, function(e) {
                var n;
                if (o && void 0 === e) return void 0 !== (n = K.get(o, t)) ? n : void 0 !== (n = tt(o, t)) ? n : void 0;
                this.each(function() {
                    K.set(this, t, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                K.remove(this, t)
            })
        }
    }), _.extend({
        queue: function(t, e, n) {
            var i;
            if (t) return e = (e || "fx") + "queue", i = G.get(t, e), n && (!i || Array.isArray(n) ? i = G.access(t, e, _.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = _.queue(t, e),
                i = n.length,
                r = n.shift(),
                o = _._queueHooks(t, e);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, function() {
                _.dequeue(t, e)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return G.get(t, n) || G.access(t, n, {
                empty: _.Callbacks("once memory").add(function() {
                    G.remove(t, [e + "queue", n])
                })
            })
        }
    }), _.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? _.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = _.queue(this, t, e);
                _._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && _.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                _.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                r = _.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = G.get(o[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        nt = new RegExp("^(?:([+-])=|)(" + et + ")([a-z%]*)$", "i"),
        it = ["Top", "Right", "Bottom", "Left"],
        rt = i.documentElement,
        ot = function(t) {
            return _.contains(t.ownerDocument, t)
        },
        st = {
            composed: !0
        };
    rt.getRootNode && (ot = function(t) {
        return _.contains(t.ownerDocument, t) || t.getRootNode(st) === t.ownerDocument
    });
    var at = function(t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && ot(t) && "none" === _.css(t, "display")
        },
        lt = function(t, e, n, i) {
            var r, o, s = {};
            for (o in e) s[o] = t.style[o], t.style[o] = e[o];
            for (o in r = n.apply(t, i || []), e) t.style[o] = s[o];
            return r
        };

    function ct(t, e, n, i) {
        var r, o, s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return _.css(t, e, "")
            },
            l = a(),
            c = n && n[3] || (_.cssNumber[e] ? "" : "px"),
            u = t.nodeType && (_.cssNumber[e] || "px" !== c && +l) && nt.exec(_.css(t, e));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;) _.style(t, e, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
            u *= 2, _.style(t, e, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }
    var ut = {};

    function ht(t, e) {
        for (var n, i, r, o, s, a, l, c = [], u = 0, h = t.length; u < h; u++)(i = t[u]).style && (n = i.style.display, e ? ("none" === n && (c[u] = G.get(i, "display") || null, c[u] || (i.style.display = "")), "" === i.style.display && at(i) && (c[u] = (l = s = o = void 0, s = (r = i).ownerDocument, a = r.nodeName, (l = ut[a]) || (o = s.body.appendChild(s.createElement(a)), l = _.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), ut[a] = l)))) : "none" !== n && (c[u] = "none", G.set(i, "display", n)));
        for (u = 0; u < h; u++) null != c[u] && (t[u].style.display = c[u]);
        return t
    }
    _.fn.extend({
        show: function() {
            return ht(this, !0)
        },
        hide: function() {
            return ht(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                at(this) ? _(this).show() : _(this).hide()
            })
        }
    });
    var dt = /^(?:checkbox|radio)$/i,
        pt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ft = /^$|^module$|\/(?:java|ecma)script/i,
        mt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function gt(t, e) {
        var n;
        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && D(t, e) ? _.merge([t], n) : n
    }

    function vt(t, e) {
        for (var n = 0, i = t.length; n < i; n++) G.set(t[n], "globalEval", !e || G.get(e[n], "globalEval"))
    }
    mt.optgroup = mt.option, mt.tbody = mt.tfoot = mt.colgroup = mt.caption = mt.thead, mt.th = mt.td;
    var yt, wt, bt = /<|&#?\w+;/;

    function _t(t, e, n, i, r) {
        for (var o, s, a, l, c, u, h = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++)
            if ((o = t[p]) || 0 === o)
                if ("object" === w(o)) _.merge(d, o.nodeType ? [o] : o);
                else if (bt.test(o)) {
            for (s = s || h.appendChild(e.createElement("div")), a = (pt.exec(o) || ["", ""])[1].toLowerCase(), l = mt[a] || mt._default, s.innerHTML = l[1] + _.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
            _.merge(d, s.childNodes), (s = h.firstChild).textContent = ""
        } else d.push(e.createTextNode(o));
        for (h.textContent = "", p = 0; o = d[p++];)
            if (i && -1 < _.inArray(o, i)) r && r.push(o);
            else if (c = ot(o), s = gt(h.appendChild(o), "script"), c && vt(s), n)
            for (u = 0; o = s[u++];) ft.test(o.type || "") && n.push(o);
        return h
    }
    yt = i.createDocumentFragment().appendChild(i.createElement("div")), (wt = i.createElement("input")).setAttribute("type", "radio"), wt.setAttribute("checked", "checked"), wt.setAttribute("name", "t"), yt.appendChild(wt), f.checkClone = yt.cloneNode(!0).cloneNode(!0).lastChild.checked, yt.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!yt.cloneNode(!0).lastChild.defaultValue;
    var xt = /^key/,
        Tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ct = /^([^.]*)(?:\.(.+)|)/;

    function Et() {
        return !0
    }

    function St() {
        return !1
    }

    function At(t, e) {
        return t === function() {
            try {
                return i.activeElement
            } catch (t) {}
        }() == ("focus" === e)
    }

    function Dt(t, e, n, i, r, o) {
        var s, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), e) Dt(t, a, n, i, e[a], o);
            return t
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = St;
        else if (!r) return t;
        return 1 === o && (s = r, (r = function(t) {
            return _().off(t), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = _.guid++)), t.each(function() {
            _.event.add(this, e, r, i, n)
        })
    }

    function kt(t, e, n) {
        n ? (G.set(t, e, !1), _.event.add(t, e, {
            namespace: !1,
            handler: function(t) {
                var i, r, s = G.get(this, e);
                if (1 & t.isTrigger && this[e]) {
                    if (s.length)(_.event.special[e] || {}).delegateType && t.stopPropagation();
                    else if (s = o.call(arguments), G.set(this, e, s), i = n(this, e), this[e](), s !== (r = G.get(this, e)) || i ? G.set(this, e, !1) : r = {}, s !== r) return t.stopImmediatePropagation(), t.preventDefault(), r.value
                } else s.length && (G.set(this, e, {
                    value: _.event.trigger(_.extend(s[0], _.Event.prototype), s.slice(1), this)
                }), t.stopImmediatePropagation())
            }
        })) : void 0 === G.get(t, e) && _.event.add(t, e, Et)
    }
    _.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, l, c, u, h, d, p, f, m, g = G.get(t);
            if (g)
                for (n.handler && (n = (o = n).handler, r = o.selector), r && _.find.matchesSelector(rt, r), n.guid || (n.guid = _.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(e) {
                        return void 0 !== _ && _.event.triggered !== e.type ? _.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match(L) || [""]).length; c--;) p = m = (a = Ct.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p && (h = _.event.special[p] || {}, p = (r ? h.delegateType : h.bindType) || p, h = _.event.special[p] || {}, u = _.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && _.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(t, i, f, s) || t.addEventListener && t.addEventListener(p, s)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), _.event.global[p] = !0)
        },
        remove: function(t, e, n, i, r) {
            var o, s, a, l, c, u, h, d, p, f, m, g = G.hasData(t) && G.get(t);
            if (g && (l = g.events)) {
                for (c = (e = (e || "").match(L) || [""]).length; c--;)
                    if (p = m = (a = Ct.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                        for (h = _.event.special[p] || {}, d = l[p = (i ? h.delegateType : h.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) u = d[o], !r && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, h.remove && h.remove.call(t, u));
                        s && !d.length && (h.teardown && !1 !== h.teardown.call(t, f, g.handle) || _.removeEvent(t, p, g.handle), delete l[p])
                    } else
                        for (p in l) _.event.remove(t, p + e[c], n, i, !0);
                _.isEmptyObject(l) && G.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, n, i, r, o, s, a = _.event.fix(t),
                l = new Array(arguments.length),
                c = (G.get(this, "events") || {})[a.type] || [],
                u = _.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = _.event.handlers.call(this, a, c), e = 0;
                    (r = s[e++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((_.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, s, a = [],
                l = e.delegateCount,
                c = t.target;
            if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = e[n]).selector + " "] && (s[r] = i.needsContext ? -1 < _(r, this).index(c) : _.find(r, this, null, [c]).length), s[r] && o.push(i);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    } return c = this, l < e.length && a.push({
                elem: c,
                handlers: e.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(_.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(t) {
            return t[_.expando] ? t : new _.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(t) {
                    var e = this || t;
                    return dt.test(e.type) && e.click && D(e, "input") && kt(e, "click", Et), !1
                },
                trigger: function(t) {
                    var e = this || t;
                    return dt.test(e.type) && e.click && D(e, "input") && kt(e, "click"), !0
                },
                _default: function(t) {
                    var e = t.target;
                    return dt.test(e.type) && e.click && D(e, "input") && G.get(e, "click") || D(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, _.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, _.Event = function(t, e) {
        if (!(this instanceof _.Event)) return new _.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Et : St, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && _.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[_.expando] = !0
    }, _.Event.prototype = {
        constructor: _.Event,
        isDefaultPrevented: St,
        isPropagationStopped: St,
        isImmediatePropagationStopped: St,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = Et, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = Et, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = Et, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
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
        char: !0,
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
        which: function(t) {
            var e = t.button;
            return null == t.which && xt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Tt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, _.event.addProp), _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        _.event.special[t] = {
            setup: function() {
                return kt(this, t, At), !1
            },
            trigger: function() {
                return kt(this, t), !0
            },
            delegateType: e
        }
    }), _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        _.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = t.relatedTarget,
                    r = t.handleObj;
                return i && (i === this || _.contains(this, i)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), _.fn.extend({
        on: function(t, e, n, i) {
            return Dt(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return Dt(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, _(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = St), this.each(function() {
                _.event.remove(this, t, n, e)
            })
        }
    });
    var Nt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ot = /<script|<style|<link/i,
        jt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function $t(t, e) {
        return D(t, "table") && D(11 !== e.nodeType ? e : e.firstChild, "tr") && _(t).children("tbody")[0] || t
    }

    function Pt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function Lt(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function Rt(t, e) {
        var n, i, r, o, s, a, l, c;
        if (1 === e.nodeType) {
            if (G.hasData(t) && (o = G.access(t), s = G.set(e, o), c = o.events))
                for (r in delete s.handle, s.events = {}, c)
                    for (n = 0, i = c[r].length; n < i; n++) _.event.add(e, r, c[r][n]);
            K.hasData(t) && (a = K.access(t), l = _.extend({}, a), K.set(e, l))
        }
    }

    function qt(t, e, n, i) {
        e = s.apply([], e);
        var r, o, a, l, c, u, h = 0,
            d = t.length,
            p = d - 1,
            g = e[0],
            v = m(g);
        if (v || 1 < d && "string" == typeof g && !f.checkClone && jt.test(g)) return t.each(function(r) {
            var o = t.eq(r);
            v && (e[0] = g.call(this, r, o.html())), qt(o, e, n, i)
        });
        if (d && (o = (r = _t(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
            for (l = (a = _.map(gt(r, "script"), Pt)).length; h < d; h++) c = r, h !== p && (c = _.clone(c, !0, !0), l && _.merge(a, gt(c, "script"))), n.call(t[h], c, h);
            if (l)
                for (u = a[a.length - 1].ownerDocument, _.map(a, Lt), h = 0; h < l; h++) c = a[h], ft.test(c.type || "") && !G.access(c, "globalEval") && _.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? _._evalUrl && !c.noModule && _._evalUrl(c.src, {
                    nonce: c.nonce || c.getAttribute("nonce")
                }) : y(c.textContent.replace(It, ""), c, u))
        }
        return t
    }

    function Mt(t, e, n) {
        for (var i, r = e ? _.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || _.cleanData(gt(i)), i.parentNode && (n && ot(i) && vt(gt(i, "script")), i.parentNode.removeChild(i));
        return t
    }
    _.extend({
        htmlPrefilter: function(t) {
            return t.replace(Nt, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var i, r, o, s, a, l, c, u = t.cloneNode(!0),
                h = ot(t);
            if (!(f.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || _.isXMLDoc(t)))
                for (s = gt(u), i = 0, r = (o = gt(t)).length; i < r; i++) a = o[i], "input" === (c = (l = s[i]).nodeName.toLowerCase()) && dt.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (e)
                if (n)
                    for (o = o || gt(t), s = s || gt(u), i = 0, r = o.length; i < r; i++) Rt(o[i], s[i]);
                else Rt(t, u);
            return 0 < (s = gt(u, "script")).length && vt(s, !h && gt(t, "script")), u
        },
        cleanData: function(t) {
            for (var e, n, i, r = _.event.special, o = 0; void 0 !== (n = t[o]); o++)
                if (Q(n)) {
                    if (e = n[G.expando]) {
                        if (e.events)
                            for (i in e.events) r[i] ? _.event.remove(n, i) : _.removeEvent(n, i, e.handle);
                        n[G.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }), _.fn.extend({
        detach: function(t) {
            return Mt(this, t, !0)
        },
        remove: function(t) {
            return Mt(this, t)
        },
        text: function(t) {
            return X(this, function(t) {
                return void 0 === t ? _.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return qt(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $t(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return qt(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = $t(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return qt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return qt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (_.cleanData(gt(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return _.clone(this, t, e)
            })
        },
        html: function(t) {
            return X(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Ot.test(t) && !mt[(pt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = _.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (_.cleanData(gt(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return qt(this, arguments, function(e) {
                var n = this.parentNode;
                _.inArray(this, t) < 0 && (_.cleanData(gt(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        _.fn[t] = function(t) {
            for (var n, i = [], r = _(t), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), _(r[s])[e](n), a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var zt = new RegExp("^(" + et + ")(?!px)[a-z%]+$", "i"),
        Ht = function(e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t), n.getComputedStyle(e)
        },
        Wt = new RegExp(it.join("|"), "i");

    function Xt(t, e, n) {
        var i, r, o, s, a = t.style;
        return (n = n || Ht(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || ot(t) || (s = _.style(t, e)), !f.pixelBoxStyles() && zt.test(s) && Wt.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function Ft(t, e) {
        return {
            get: function() {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", rt.appendChild(c).appendChild(u);
                var e = t.getComputedStyle(u);
                r = "1%" !== e.top, l = 12 === n(e.marginLeft), u.style.right = "60%", a = 36 === n(e.right), o = 36 === n(e.width), u.style.position = "absolute", s = 12 === n(u.offsetWidth / 3), rt.removeChild(c), u = null
            }
        }

        function n(t) {
            return Math.round(parseFloat(t))
        }
        var r, o, s, a, l, c = i.createElement("div"),
            u = i.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === u.style.backgroundClip, _.extend(f, {
            boxSizingReliable: function() {
                return e(), o
            },
            pixelBoxStyles: function() {
                return e(), a
            },
            pixelPosition: function() {
                return e(), r
            },
            reliableMarginLeft: function() {
                return e(), l
            },
            scrollboxSize: function() {
                return e(), s
            }
        }))
    }();
    var Bt = ["Webkit", "Moz", "ms"],
        Yt = i.createElement("div").style,
        Ut = {};

    function Qt(t) {
        return _.cssProps[t] || Ut[t] || (t in Yt ? t : Ut[t] = function(t) {
            for (var e = t[0].toUpperCase() + t.slice(1), n = Bt.length; n--;)
                if ((t = Bt[n] + e) in Yt) return t
        }(t) || t)
    }
    var Vt = /^(none|table(?!-c[ea]).+)/,
        Gt = /^--/,
        Kt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Zt = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Jt(t, e, n) {
        var i = nt.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function te(t, e, n, i, r, o) {
        var s = "width" === e ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += _.css(t, n + it[s], !0, r)), i ? ("content" === n && (l -= _.css(t, "padding" + it[s], !0, r)), "margin" !== n && (l -= _.css(t, "border" + it[s] + "Width", !0, r))) : (l += _.css(t, "padding" + it[s], !0, r), "padding" !== n ? l += _.css(t, "border" + it[s] + "Width", !0, r) : a += _.css(t, "border" + it[s] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5)) || 0), l
    }

    function ee(t, e, n) {
        var i = Ht(t),
            r = (!f.boxSizingReliable() || n) && "border-box" === _.css(t, "boxSizing", !1, i),
            o = r,
            s = Xt(t, e, i),
            a = "offset" + e[0].toUpperCase() + e.slice(1);
        if (zt.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return (!f.boxSizingReliable() && r || "auto" === s || !parseFloat(s) && "inline" === _.css(t, "display", !1, i)) && t.getClientRects().length && (r = "border-box" === _.css(t, "boxSizing", !1, i), (o = a in t) && (s = t[a])), (s = parseFloat(s) || 0) + te(t, e, n || (r ? "border" : "content"), o, i, s) + "px"
    }

    function ne(t, e, n, i, r) {
        return new ne.prototype.init(t, e, n, i, r)
    }
    _.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = Xt(t, "opacity");
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
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = U(e),
                    l = Gt.test(e),
                    c = t.style;
                if (l || (e = Qt(a)), s = _.cssHooks[e] || _.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : c[e];
                "string" == (o = typeof n) && (r = nt.exec(n)) && r[1] && (n = ct(t, e, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (_.cssNumber[a] ? "" : "px")), f.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))
            }
        },
        css: function(t, e, n, i) {
            var r, o, s, a = U(e);
            return Gt.test(e) || (e = Qt(a)), (s = _.cssHooks[e] || _.cssHooks[a]) && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = Xt(t, e, i)), "normal" === r && e in Zt && (r = Zt[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), _.each(["height", "width"], function(t, e) {
        _.cssHooks[e] = {
            get: function(t, n, i) {
                if (n) return !Vt.test(_.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ee(t, e, i) : lt(t, Kt, function() {
                    return ee(t, e, i)
                })
            },
            set: function(t, n, i) {
                var r, o = Ht(t),
                    s = !f.scrollboxSize() && "absolute" === o.position,
                    a = (s || i) && "border-box" === _.css(t, "boxSizing", !1, o),
                    l = i ? te(t, e, i, a, o) : 0;
                return a && s && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - te(t, e, "border", !1, o) - .5)), l && (r = nt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = _.css(t, e)), Jt(0, n, l)
            }
        }
    }), _.cssHooks.marginLeft = Ft(f.reliableMarginLeft, function(t, e) {
        if (e) return (parseFloat(Xt(t, "marginLeft")) || t.getBoundingClientRect().left - lt(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px"
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        _.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + it[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, "margin" !== t && (_.cssHooks[t + e].set = Jt)
    }), _.fn.extend({
        css: function(t, e) {
            return X(this, function(t, e, n) {
                var i, r, o = {},
                    s = 0;
                if (Array.isArray(e)) {
                    for (i = Ht(t), r = e.length; s < r; s++) o[e[s]] = _.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? _.style(t, e, n) : _.css(t, e)
            }, t, e, 1 < arguments.length)
        }
    }), ((_.Tween = ne).prototype = {
        constructor: ne,
        init: function(t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || _.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (_.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = ne.propHooks[this.prop];
            return t && t.get ? t.get(this) : ne.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = ne.propHooks[this.prop];
            return this.options.duration ? this.pos = e = _.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ne.propHooks._default.set(this), this
        }
    }).init.prototype = ne.prototype, (ne.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = _.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                _.fx.step[t.prop] ? _.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !_.cssHooks[t.prop] && null == t.elem.style[Qt(t.prop)] ? t.elem[t.prop] = t.now : _.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = ne.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, _.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, _.fx = ne.prototype.init, _.fx.step = {};
    var ie, re, oe, se, ae = /^(?:toggle|show|hide)$/,
        le = /queueHooks$/;

    function ce() {
        re && (!1 === i.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ce) : t.setTimeout(ce, _.fx.interval), _.fx.tick())
    }

    function ue() {
        return t.setTimeout(function() {
            ie = void 0
        }), ie = Date.now()
    }

    function he(t, e) {
        var n, i = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = it[i])] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function de(t, e, n) {
        for (var i, r = (pe.tweeners[e] || []).concat(pe.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, e, t)) return i
    }

    function pe(t, e, n) {
        var i, r, o = 0,
            s = pe.prefilters.length,
            a = _.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var e = ie || ue(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(i);
                return a.notifyWith(t, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: _.extend({}, e),
                opts: _.extend(!0, {
                    specialEasing: {},
                    easing: _.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: ie || ue(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = _.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) c.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                }
            }),
            u = c.props;
        for (function(t, e) {
                var n, i, r, o, s;
                for (n in t)
                    if (r = e[i = U(n)], o = t[n], Array.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (s = _.cssHooks[i]) && "expand" in s)
                        for (n in o = s.expand(o), delete t[i], o) n in t || (t[n] = o[n], e[n] = r);
                    else e[i] = r
            }(u, c.opts.specialEasing); o < s; o++)
            if (i = pe.prefilters[o].call(c, t, u, c.opts)) return m(i.stop) && (_._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return _.map(u, de, c), m(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), _.fx.timer(_.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    _.Animation = _.extend(pe, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return ct(n.elem, t, nt.exec(e), n), n
            }]
        },
        tweener: function(t, e) {
            m(t) ? (e = t, t = ["*"]) : t = t.match(L);
            for (var n, i = 0, r = t.length; i < r; i++) n = t[i], pe.tweeners[n] = pe.tweeners[n] || [], pe.tweeners[n].unshift(e)
        },
        prefilters: [function(t, e, n) {
            var i, r, o, s, a, l, c, u, h = "width" in e || "height" in e,
                d = this,
                p = {},
                f = t.style,
                m = t.nodeType && at(t),
                g = G.get(t, "fxshow");
            for (i in n.queue || (null == (s = _._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || a()
                }), s.unqueued++, d.always(function() {
                    d.always(function() {
                        s.unqueued--, _.queue(t, "fx").length || s.empty.fire()
                    })
                })), e)
                if (r = e[i], ae.test(r)) {
                    if (delete e[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[i]) continue;
                        m = !0
                    }
                    p[i] = g && g[i] || _.style(t, i)
                } if ((l = !_.isEmptyObject(e)) || !_.isEmptyObject(p))
                for (i in h && 1 === t.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = g && g.display) && (c = G.get(t, "display")), "none" === (u = _.css(t, "display")) && (c ? u = c : (ht([t], !0), c = t.style.display || c, u = _.css(t, "display"), ht([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === _.css(t, "float") && (l || (d.done(function() {
                        f.display = c
                    }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", d.always(function() {
                        f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                    })), l = !1, p) l || (g ? "hidden" in g && (m = g.hidden) : g = G.access(t, "fxshow", {
                    display: c
                }), o && (g.hidden = !m), m && ht([t], !0), d.done(function() {
                    for (i in m || ht([t]), G.remove(t, "fxshow"), p) _.style(t, i, p[i])
                })), l = de(m ? g[i] : 0, i, d), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(t, e) {
            e ? pe.prefilters.unshift(t) : pe.prefilters.push(t)
        }
    }), _.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? _.extend({}, t) : {
            complete: n || !n && e || m(t) && t,
            duration: t,
            easing: n && e || e && !m(e) && e
        };
        return _.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in _.fx.speeds ? i.duration = _.fx.speeds[i.duration] : i.duration = _.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            m(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue)
        }, i
    }, _.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(at).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var r = _.isEmptyObject(t),
                o = _.speed(e, n, i),
                s = function() {
                    var e = pe(this, _.extend({}, t), o);
                    (r || G.get(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    r = null != t && t + "queueHooks",
                    o = _.timers,
                    s = G.get(this);
                if (r) s[r] && s[r].stop && i(s[r]);
                else
                    for (r in s) s[r] && s[r].stop && le.test(r) && i(s[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                !e && n || _.dequeue(this, t)
            })
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"), this.each(function() {
                var e, n = G.get(this),
                    i = n[t + "queue"],
                    r = n[t + "queueHooks"],
                    o = _.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, _.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), _.each(["toggle", "show", "hide"], function(t, e) {
        var n = _.fn[e];
        _.fn[e] = function(t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(he(e, !0), t, i, r)
        }
    }), _.each({
        slideDown: he("show"),
        slideUp: he("hide"),
        slideToggle: he("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        _.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), _.timers = [], _.fx.tick = function() {
        var t, e = 0,
            n = _.timers;
        for (ie = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || _.fx.stop(), ie = void 0
    }, _.fx.timer = function(t) {
        _.timers.push(t), _.fx.start()
    }, _.fx.interval = 13, _.fx.start = function() {
        re || (re = !0, ce())
    }, _.fx.stop = function() {
        re = null
    }, _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, _.fn.delay = function(e, n) {
        return e = _.fx && _.fx.speeds[e] || e, n = n || "fx", this.queue(n, function(n, i) {
            var r = t.setTimeout(n, e);
            i.stop = function() {
                t.clearTimeout(r)
            }
        })
    }, oe = i.createElement("input"), se = i.createElement("select").appendChild(i.createElement("option")), oe.type = "checkbox", f.checkOn = "" !== oe.value, f.optSelected = se.selected, (oe = i.createElement("input")).value = "t", oe.type = "radio", f.radioValue = "t" === oe.value;
    var fe, me = _.expr.attrHandle;
    _.fn.extend({
        attr: function(t, e) {
            return X(this, _.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function(t) {
            return this.each(function() {
                _.removeAttr(this, t)
            })
        }
    }), _.extend({
        attr: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? _.prop(t, e, n) : (1 === o && _.isXMLDoc(t) || (r = _.attrHooks[e.toLowerCase()] || (_.expr.match.bool.test(e) ? fe : void 0)), void 0 !== n ? null === n ? void _.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = _.find.attr(t, e)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!f.radioValue && "radio" === e && D(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i = 0,
                r = e && e.match(L);
            if (r && 1 === t.nodeType)
                for (; n = r[i++];) t.removeAttribute(n)
        }
    }), fe = {
        set: function(t, e, n) {
            return !1 === e ? _.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = me[e] || _.find.attr;
        me[e] = function(t, e, i) {
            var r, o, s = e.toLowerCase();
            return i || (o = me[s], me[s] = r, r = null != n(t, e, i) ? s : null, me[s] = o), r
        }
    });
    var ge = /^(?:input|select|textarea|button)$/i,
        ve = /^(?:a|area)$/i;

    function ye(t) {
        return (t.match(L) || []).join(" ")
    }

    function we(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function be(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(L) || []
    }
    _.fn.extend({
        prop: function(t, e) {
            return X(this, _.prop, t, e, 1 < arguments.length)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[_.propFix[t] || t]
            })
        }
    }), _.extend({
        prop: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && _.isXMLDoc(t) || (e = _.propFix[e] || e, r = _.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = _.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ge.test(t.nodeName) || ve.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), f.optSelected || (_.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    }), _.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (m(t)) return this.each(function(e) {
                _(this).addClass(t.call(this, e, we(this)))
            });
            if ((e = be(t)).length)
                for (; n = this[l++];)
                    if (r = we(n), i = 1 === n.nodeType && " " + ye(r) + " ") {
                        for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = ye(i)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (m(t)) return this.each(function(e) {
                _(this).removeClass(t.call(this, e, we(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = be(t)).length)
                for (; n = this[l++];)
                    if (r = we(n), i = 1 === n.nodeType && " " + ye(r) + " ") {
                        for (s = 0; o = e[s++];)
                            for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        r !== (a = ye(i)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(t, e) {
            var n = typeof t,
                i = "string" === n || Array.isArray(t);
            return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : m(t) ? this.each(function(n) {
                _(this).toggleClass(t.call(this, n, we(this), e), e)
            }) : this.each(function() {
                var e, r, o, s;
                if (i)
                    for (r = 0, o = _(this), s = be(t); e = s[r++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else void 0 !== t && "boolean" !== n || ((e = we(this)) && G.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : G.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + ye(we(n)) + " ").indexOf(e)) return !0;
            return !1
        }
    });
    var _e = /\r/g;
    _.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = m(t), this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? t.call(this, n, _(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = _.map(r, function(t) {
                    return null == t ? "" : t + ""
                })), (e = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = _.valHooks[r.type] || _.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(_e, "") : null == n ? "" : n : void 0
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = _.find.attr(t, "value");
                    return null != e ? e : ye(_.text(t))
                }
            },
            select: {
                get: function(t) {
                    var e, n, i, r = t.options,
                        o = t.selectedIndex,
                        s = "select-one" === t.type,
                        a = s ? null : [],
                        l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                            if (e = _(n).val(), s) return e;
                            a.push(e)
                        } return a
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, o = _.makeArray(e), s = r.length; s--;)((i = r[s]).selected = -1 < _.inArray(_.valHooks.option.get(i), o)) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(t, e) {
                if (Array.isArray(e)) return t.checked = -1 < _.inArray(_(t).val(), e)
            }
        }, f.checkOn || (_.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), f.focusin = "onfocusin" in t;
    var xe = /^(?:focusinfocus|focusoutblur)$/,
        Te = function(t) {
            t.stopPropagation()
        };
    _.extend(_.event, {
        trigger: function(e, n, r, o) {
            var s, a, l, c, u, d, p, f, v = [r || i],
                y = h.call(e, "type") ? e.type : e,
                w = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = f = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !xe.test(y + _.event.triggered) && (-1 < y.indexOf(".") && (y = (w = y.split(".")).shift(), w.sort()), u = y.indexOf(":") < 0 && "on" + y, (e = e[_.expando] ? e : new _.Event(y, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = w.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : _.makeArray(n, [e]), p = _.event.special[y] || {}, o || !p.trigger || !1 !== p.trigger.apply(r, n))) {
                if (!o && !p.noBubble && !g(r)) {
                    for (c = p.delegateType || y, xe.test(c + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), l = a;
                    l === (r.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || t)
                }
                for (s = 0;
                    (a = v[s++]) && !e.isPropagationStopped();) f = a, e.type = 1 < s ? c : p.bindType || y, (d = (G.get(a, "events") || {})[e.type] && G.get(a, "handle")) && d.apply(a, n), (d = u && a[u]) && d.apply && Q(a) && (e.result = d.apply(a, n), !1 === e.result && e.preventDefault());
                return e.type = y, o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(v.pop(), n) || !Q(r) || u && m(r[y]) && !g(r) && ((l = r[u]) && (r[u] = null), _.event.triggered = y, e.isPropagationStopped() && f.addEventListener(y, Te), r[y](), e.isPropagationStopped() && f.removeEventListener(y, Te), _.event.triggered = void 0, l && (r[u] = l)), e.result
            }
        },
        simulate: function(t, e, n) {
            var i = _.extend(new _.Event, n, {
                type: t,
                isSimulated: !0
            });
            _.event.trigger(i, null, e)
        }
    }), _.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                _.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n) return _.event.trigger(t, e, n, !0)
        }
    }), f.focusin || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            _.event.simulate(e, t.target, _.event.fix(t))
        };
        _.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = G.access(i, e);
                r || i.addEventListener(t, n, !0), G.access(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = G.access(i, e) - 1;
                r ? G.access(i, e, r) : (i.removeEventListener(t, n, !0), G.remove(i, e))
            }
        }
    });
    var Ce = t.location,
        Ee = Date.now(),
        Se = /\?/;
    _.parseXML = function(e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + e), n
    };
    var Ae = /\[\]$/,
        De = /\r?\n/g,
        ke = /^(?:submit|button|image|reset|file)$/i,
        Ne = /^(?:input|select|textarea|keygen)/i;

    function Oe(t, e, n, i) {
        var r;
        if (Array.isArray(e)) _.each(e, function(e, r) {
            n || Ae.test(t) ? i(t, r) : Oe(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
        });
        else if (n || "object" !== w(e)) i(t, e);
        else
            for (r in e) Oe(t + "[" + r + "]", e[r], n, i)
    }
    _.param = function(t, e) {
        var n, i = [],
            r = function(t, e) {
                var n = m(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == t) return "";
        if (Array.isArray(t) || t.jquery && !_.isPlainObject(t)) _.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (n in t) Oe(n, t[n], e, r);
        return i.join("&")
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = _.prop(this, "elements");
                return t ? _.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !_(this).is(":disabled") && Ne.test(this.nodeName) && !ke.test(t) && (this.checked || !dt.test(t))
            }).map(function(t, e) {
                var n = _(this).val();
                return null == n ? null : Array.isArray(n) ? _.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(De, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(De, "\r\n")
                }
            }).get()
        }
    });
    var je = /%20/g,
        Ie = /#.*$/,
        $e = /([?&])_=[^&]*/,
        Pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Le = /^(?:GET|HEAD)$/,
        Re = /^\/\//,
        qe = {},
        Me = {},
        ze = "*/".concat("*"),
        He = i.createElement("a");

    function We(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                o = e.toLowerCase().match(L) || [];
            if (m(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function Xe(t, e, n, i) {
        var r = {},
            o = t === Me;

        function s(a) {
            var l;
            return r[a] = !0, _.each(t[a] || [], function(t, a) {
                var c = a(e, n, i);
                return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
            }), l
        }
        return s(e.dataTypes[0]) || !r["*"] && s("*")
    }

    function Fe(t, e) {
        var n, i, r = _.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && _.extend(!0, t, i), t
    }
    He.href = Ce.href, _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ce.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ce.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ze,
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
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Fe(Fe(t, _.ajaxSettings), e) : Fe(_.ajaxSettings, t)
        },
        ajaxPrefilter: We(qe),
        ajaxTransport: We(Me),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var r, o, s, a, l, c, u, h, d, p, f = _.ajaxSetup({}, n),
                m = f.context || f,
                g = f.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                v = _.Deferred(),
                y = _.Callbacks("once memory"),
                w = f.statusCode || {},
                b = {},
                x = {},
                T = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (u) {
                            if (!a)
                                for (a = {}; e = Pe.exec(s);) a[e[1].toLowerCase() + " "] = (a[e[1].toLowerCase() + " "] || []).concat(e[2]);
                            e = a[t.toLowerCase() + " "]
                        }
                        return null == e ? null : e.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return u ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == u && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, b[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return null == u && (f.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (u) C.always(t[C.status]);
                            else
                                for (e in t) w[e] = [w[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        var e = t || T;
                        return r && r.abort(e), E(0, e), this
                    }
                };
            if (v.promise(C), f.url = ((e || f.url || Ce.href) + "").replace(Re, Ce.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(L) || [""], null == f.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = f.url, c.href = c.href, f.crossDomain = He.protocol + "//" + He.host != c.protocol + "//" + c.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = _.param(f.data, f.traditional)), Xe(qe, f, n, C), u) return C;
            for (d in (h = _.event && f.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Le.test(f.type), o = f.url.replace(Ie, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(je, "+")) : (p = f.url.slice(o.length), f.data && (f.processData || "string" == typeof f.data) && (o += (Se.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace($e, "$1"), p = (Se.test(o) ? "&" : "?") + "_=" + Ee++ + p), f.url = o + p), f.ifModified && (_.lastModified[o] && C.setRequestHeader("If-Modified-Since", _.lastModified[o]), _.etag[o] && C.setRequestHeader("If-None-Match", _.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + ze + "; q=0.01" : "") : f.accepts["*"]), f.headers) C.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, C, f) || u)) return C.abort();
            if (T = "abort", y.add(f.complete), C.done(f.success), C.fail(f.error), r = Xe(Me, f, n, C)) {
                if (C.readyState = 1, h && g.trigger("ajaxSend", [C, f]), u) return C;
                f.async && 0 < f.timeout && (l = t.setTimeout(function() {
                    C.abort("timeout")
                }, f.timeout));
                try {
                    u = !1, r.send(b, E)
                } catch (e) {
                    if (u) throw e;
                    E(-1, e)
                }
            } else E(-1, "No Transport");

            function E(e, n, i, a) {
                var c, d, p, b, x, T = n;
                u || (u = !0, l && t.clearTimeout(l), r = void 0, s = a || "", C.readyState = 0 < e ? 4 : 0, c = 200 <= e && e < 300 || 304 === e, i && (b = function(t, e, n) {
                    for (var i, r, o, s, a = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            } if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || t.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(f, C, i)), b = function(t, e, n, i) {
                    var r, o, s, a, l, c = {},
                        u = t.dataTypes.slice();
                    if (u[1])
                        for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                    for (o = u.shift(); o;)
                        if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(s = c[l + " " + o] || c["* " + o]))
                            for (r in c)
                                if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && t.throws) e = s(e);
                            else try {
                                e = s(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: s ? t : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(f, b, C, c), c ? (f.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (_.lastModified[o] = x), (x = C.getResponseHeader("etag")) && (_.etag[o] = x)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, d = b.data, c = !(p = b.error))) : (p = T, !e && T || (T = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (n || T) + "", c ? v.resolveWith(m, [d, T, C]) : v.rejectWith(m, [C, T, p]), C.statusCode(w), w = void 0, h && g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, f, c ? d : p]), y.fireWith(m, [C, T]), h && (g.trigger("ajaxComplete", [C, f]), --_.active || _.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(t, e, n) {
            return _.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return _.get(t, void 0, e, "script")
        }
    }), _.each(["get", "post"], function(t, e) {
        _[e] = function(t, n, i, r) {
            return m(n) && (r = r || i, i = n, n = void 0), _.ajax(_.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, _.isPlainObject(t) && t))
        }
    }), _._evalUrl = function(t, e) {
        return _.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(t) {
                _.globalEval(t, e)
            }
        })
    }, _.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (m(t) && (t = t.call(this[0])), e = _(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function(t) {
            return m(t) ? this.each(function(e) {
                _(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = _(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = m(t);
            return this.each(function(n) {
                _(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                _(this).replaceWith(this.childNodes)
            }), this
        }
    }), _.expr.pseudos.hidden = function(t) {
        return !_.expr.pseudos.visible(t)
    }, _.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, _.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    };
    var Be = {
            0: 200,
            1223: 204
        },
        Ye = _.ajaxSettings.xhr();
    f.cors = !!Ye && "withCredentials" in Ye, f.ajax = Ye = !!Ye, _.ajaxTransport(function(e) {
        var n, i;
        if (f.cors || Ye && !e.crossDomain) return {
            send: function(r, o) {
                var s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (s in e.xhrFields) a[s] = e.xhrFields[s];
                for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                n = function(t) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Be[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && t.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (r) {
                    if (n) throw r
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), _.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return _.globalEval(t), t
            }
        }
    }), _.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), _.ajaxTransport("script", function(t) {
        var e, n;
        if (t.crossDomain || t.scriptAttrs) return {
            send: function(r, o) {
                e = _("<script>").attr(t.scriptAttrs || {}).prop({
                    charset: t.scriptCharset,
                    src: t.url
                }).on("load error", n = function(t) {
                    e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                }), i.head.appendChild(e[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var Ue, Qe = [],
        Ve = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Qe.pop() || _.expando + "_" + Ee++;
            return this[t] = !0, t
        }
    }), _.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r, o, s, a = !1 !== e.jsonp && (Ve.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ve.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ve, "$1" + r) : !1 !== e.jsonp && (e.url += (Se.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return s || _.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === o ? _(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, Qe.push(r)), s && m(o) && o(s[0]), s = o = void 0
        }), "script"
    }), f.createHTMLDocument = ((Ue = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ue.childNodes.length), _.parseHTML = function(t, e, n) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (f.createHTMLDocument ? ((r = (e = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, e.head.appendChild(r)) : e = i), s = !n && [], (o = k.exec(t)) ? [e.createElement(o[1])] : (o = _t([t], e, s), s && s.length && _(s).remove(), _.merge([], o.childNodes)));
        var r, o, s
    }, _.fn.load = function(t, e, n) {
        var i, r, o, s = this,
            a = t.indexOf(" ");
        return -1 < a && (i = ye(t.slice(a)), t = t.slice(0, a)), m(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), 0 < s.length && _.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, s.html(i ? _("<div>").append(_.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            s.each(function() {
                n.apply(this, o || [t.responseText, e, t])
            })
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        _.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), _.expr.pseudos.animated = function(t) {
        return _.grep(_.timers, function(e) {
            return t === e.elem
        }).length
    }, _.offset = {
        setOffset: function(t, e, n) {
            var i, r, o, s, a, l, c = _.css(t, "position"),
                u = _(t),
                h = {};
            "static" === c && (t.style.position = "relative"), a = u.offset(), o = _.css(t, "top"), l = _.css(t, "left"), ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (s = (i = u.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), m(e) && (e = e.call(t, n, _.extend({}, a))), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + r), "using" in e ? e.using.call(t, h) : u.css(h)
        }
    }, _.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                _.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === _.css(i, "position")) e = i.getBoundingClientRect();
                else {
                    for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === _.css(t, "position");) t = t.parentNode;
                    t && t !== i && 1 === t.nodeType && ((r = _(t).offset()).top += _.css(t, "borderTopWidth", !0), r.left += _.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - r.top - _.css(i, "marginTop", !0),
                    left: e.left - r.left - _.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === _.css(t, "position");) t = t.offsetParent;
                return t || rt
            })
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = "pageYOffset" === e;
        _.fn[t] = function(i) {
            return X(this, function(t, i, r) {
                var o;
                if (g(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === r) return o ? o[e] : t[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r
            }, t, i, arguments.length)
        }
    }), _.each(["top", "left"], function(t, e) {
        _.cssHooks[e] = Ft(f.pixelPosition, function(t, n) {
            if (n) return n = Xt(t, e), zt.test(n) ? _(t).position()[e] + "px" : n
        })
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        _.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            _.fn[i] = function(r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === o ? "margin" : "border");
                return X(this, function(e, n, r) {
                    var o;
                    return g(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? _.css(e, n, a) : _.style(e, n, r, a)
                }, e, s ? r : void 0, s)
            }
        })
    }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
        _.fn[e] = function(t, n) {
            return 0 < arguments.length ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), _.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), _.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }), _.proxy = function(t, e) {
        var n, i, r;
        if ("string" == typeof e && (n = t[e], e = t, t = n), m(t)) return i = o.call(arguments, 2), (r = function() {
            return t.apply(e || this, i.concat(o.call(arguments)))
        }).guid = t.guid = t.guid || _.guid++, r
    }, _.holdReady = function(t) {
        t ? _.readyWait++ : _.ready(!0)
    }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = D, _.isFunction = m, _.isWindow = g, _.camelCase = U, _.type = w, _.now = Date.now, _.isNumeric = function(t) {
        var e = _.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var Ge = t.jQuery,
        Ke = t.$;
    return _.noConflict = function(e) {
        return t.$ === _ && (t.$ = Ke), e && t.jQuery === _ && (t.jQuery = Ge), _
    }, e || (t.jQuery = t.$ = _), _
}),
function(t) {
    if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}($),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : (t = t || self).Util = e(t.jQuery)
}(this, function(t) {
    "use strict";
    t = t && t.hasOwnProperty("default") ? t.default : t;
    var e = "transitionend";

    function n(e) {
        var n = this,
            r = !1;
        return t(this).one(i.TRANSITION_END, function() {
            r = !0
        }), setTimeout(function() {
            r || i.triggerTransitionEnd(n)
        }, e), this
    }
    var i = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            do {
                t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var n = t(e).css("transition-duration"),
                i = t(e).css("transition-delay"),
                r = parseFloat(n),
                o = parseFloat(i);
            return r || o ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
        },
        reflow: function(t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function(n) {
            t(n).trigger(e)
        },
        supportsTransitionEnd: function() {
            return Boolean(e)
        },
        isElement: function(t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function(t, e, n) {
            for (var r in n)
                if (Object.prototype.hasOwnProperty.call(n, r)) {
                    var o = n[r],
                        s = e[r],
                        a = s && i.isElement(s) ? "element" : (l = s, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(a)) throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + o + '".')
                } var l
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                var e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? i.findShadowRoot(t.parentNode) : null
        },
        jQueryDetection: function() {
            if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = t.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    return i.jQueryDetection(), t.fn.emulateTransitionEnd = n, t.event.special[i.TRANSITION_END] = {
        bindType: e,
        delegateType: e,
        handle: function(e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    }, i
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util.js"], e) : (t = t || self).Modal = e(t.jQuery, t.Util)
}(this, function(t, e) {
    "use strict";

    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function i(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, i)
        }
        return n
    }

    function o(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? r(Object(n), !0).forEach(function(e) {
                i(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }
    t = t && t.hasOwnProperty("default") ? t.default : t, e = e && e.hasOwnProperty("default") ? e.default : e;
    var s = "modal",
        a = ".bs.modal",
        l = t.fn.modal,
        c = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        u = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        h = {
            HIDE: "hide.bs.modal",
            HIDE_PREVENTED: "hidePrevented.bs.modal",
            HIDDEN: "hidden.bs.modal",
            SHOW: "show.bs.modal",
            SHOWN: "shown.bs.modal",
            FOCUSIN: "focusin.bs.modal",
            RESIZE: "resize.bs.modal",
            CLICK_DISMISS: "click.dismiss.bs.modal",
            KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
            MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
            MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
            CLICK_DATA_API: "click.bs.modal.data-api"
        },
        d = "modal-dialog-scrollable",
        p = "modal-scrollbar-measure",
        f = "modal-backdrop",
        m = "modal-open",
        g = "fade",
        v = "show",
        y = "modal-static",
        w = {
            DIALOG: ".modal-dialog",
            MODAL_BODY: ".modal-body",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top"
        },
        b = function() {
            function i(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(w.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var r, l, b, _ = i.prototype;
            return _.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }, _.show = function(e) {
                var n = this;
                if (!this._isShown && !this._isTransitioning) {
                    t(this._element).hasClass(g) && (this._isTransitioning = !0);
                    var i = t.Event(h.SHOW, {
                        relatedTarget: e
                    });
                    t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(h.CLICK_DISMISS, w.DATA_DISMISS, function(t) {
                        return n.hide(t)
                    }), t(this._dialog).on(h.MOUSEDOWN_DISMISS, function() {
                        t(n._element).one(h.MOUSEUP_DISMISS, function(e) {
                            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return n._showElement(e)
                    }))
                }
            }, _.hide = function(n) {
                var i = this;
                if (n && n.preventDefault(), this._isShown && !this._isTransitioning) {
                    var r = t.Event(h.HIDE);
                    if (t(this._element).trigger(r), this._isShown && !r.isDefaultPrevented()) {
                        this._isShown = !1;
                        var o = t(this._element).hasClass(g);
                        if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(h.FOCUSIN), t(this._element).removeClass(v), t(this._element).off(h.CLICK_DISMISS), t(this._dialog).off(h.MOUSEDOWN_DISMISS), o) {
                            var s = e.getTransitionDurationFromElement(this._element);
                            t(this._element).one(e.TRANSITION_END, function(t) {
                                return i._hideModal(t)
                            }).emulateTransitionEnd(s)
                        } else this._hideModal()
                    }
                }
            }, _.dispose = function() {
                [window, this._element, this._dialog].forEach(function(e) {
                    return t(e).off(a)
                }), t(document).off(h.FOCUSIN), t.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, _.handleUpdate = function() {
                this._adjustDialog()
            }, _._getConfig = function(t) {
                return t = o({}, c, {}, t), e.typeCheckConfig(s, t, u), t
            }, _._triggerBackdropTransition = function() {
                var n = this;
                if ("static" === this._config.backdrop) {
                    var i = t.Event(h.HIDE_PREVENTED);
                    if (t(this._element).trigger(i), i.defaultPrevented) return;
                    this._element.classList.add(y);
                    var r = e.getTransitionDurationFromElement(this._element);
                    t(this._element).one(e.TRANSITION_END, function() {
                        n._element.classList.remove(y)
                    }).emulateTransitionEnd(r), this._element.focus()
                } else this.hide()
            }, _._showElement = function(n) {
                var i = this,
                    r = t(this._element).hasClass(g),
                    o = this._dialog ? this._dialog.querySelector(w.MODAL_BODY) : null;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass(d) && o ? o.scrollTop = 0 : this._element.scrollTop = 0, r && e.reflow(this._element), t(this._element).addClass(v), this._config.focus && this._enforceFocus();
                var s = t.Event(h.SHOWN, {
                        relatedTarget: n
                    }),
                    a = function() {
                        i._config.focus && i._element.focus(), i._isTransitioning = !1, t(i._element).trigger(s)
                    };
                if (r) {
                    var l = e.getTransitionDurationFromElement(this._dialog);
                    t(this._dialog).one(e.TRANSITION_END, a).emulateTransitionEnd(l)
                } else a()
            }, _._enforceFocus = function() {
                var e = this;
                t(document).off(h.FOCUSIN).on(h.FOCUSIN, function(n) {
                    document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                })
            }, _._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? t(this._element).on(h.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && e._triggerBackdropTransition()
                }) : this._isShown || t(this._element).off(h.KEYDOWN_DISMISS)
            }, _._setResizeEvent = function() {
                var e = this;
                this._isShown ? t(window).on(h.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : t(window).off(h.RESIZE)
            }, _._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                    t(document.body).removeClass(m), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(h.HIDDEN)
                })
            }, _._removeBackdrop = function() {
                this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
            }, _._showBackdrop = function(n) {
                var i = this,
                    r = t(this._element).hasClass(g) ? g : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = f, r && this._backdrop.classList.add(r), t(this._backdrop).appendTo(document.body), t(this._element).on(h.CLICK_DISMISS, function(t) {
                            i._ignoreBackdropClick ? i._ignoreBackdropClick = !1 : t.target === t.currentTarget && i._triggerBackdropTransition()
                        }), r && e.reflow(this._backdrop), t(this._backdrop).addClass(v), !n) return;
                    if (!r) return void n();
                    var o = e.getTransitionDurationFromElement(this._backdrop);
                    t(this._backdrop).one(e.TRANSITION_END, n).emulateTransitionEnd(o)
                } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(v);
                    var s = function() {
                        i._removeBackdrop(), n && n()
                    };
                    if (t(this._element).hasClass(g)) {
                        var a = e.getTransitionDurationFromElement(this._backdrop);
                        t(this._backdrop).one(e.TRANSITION_END, s).emulateTransitionEnd(a)
                    } else s()
                } else n && n()
            }, _._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, _._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, _._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, _._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                    var n = [].slice.call(document.querySelectorAll(w.FIXED_CONTENT)),
                        i = [].slice.call(document.querySelectorAll(w.STICKY_CONTENT));
                    t(n).each(function(n, i) {
                        var r = i.style.paddingRight,
                            o = t(i).css("padding-right");
                        t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                    }), t(i).each(function(n, i) {
                        var r = i.style.marginRight,
                            o = t(i).css("margin-right");
                        t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                    });
                    var r = document.body.style.paddingRight,
                        o = t(document.body).css("padding-right");
                    t(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                }
                t(document.body).addClass(m)
            }, _._resetScrollbar = function() {
                var e = [].slice.call(document.querySelectorAll(w.FIXED_CONTENT));
                t(e).each(function(e, n) {
                    var i = t(n).data("padding-right");
                    t(n).removeData("padding-right"), n.style.paddingRight = i || ""
                });
                var n = [].slice.call(document.querySelectorAll("" + w.STICKY_CONTENT));
                t(n).each(function(e, n) {
                    var i = t(n).data("margin-right");
                    void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
                });
                var i = t(document.body).data("padding-right");
                t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
            }, _._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = p, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, i._jQueryInterface = function(e, n) {
                return this.each(function() {
                    var r = t(this).data("bs.modal"),
                        s = o({}, c, {}, t(this).data(), {}, "object" == typeof e && e ? e : {});
                    if (r || (r = new i(this, s), t(this).data("bs.modal", r)), "string" == typeof e) {
                        if (void 0 === r[e]) throw new TypeError('No method named "' + e + '"');
                        r[e](n)
                    } else s.show && r.show(n)
                })
            }, r = i, b = [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return c
                }
            }], (l = null) && n(r.prototype, l), b && n(r, b), i
        }();
    return t(document).on(h.CLICK_DATA_API, w.DATA_TOGGLE, function(n) {
        var i, r = this,
            s = e.getSelectorFromElement(this);
        s && (i = document.querySelector(s));
        var a = t(i).data("bs.modal") ? "toggle" : o({}, t(i).data(), {}, t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();
        var l = t(i).one(h.SHOW, function(e) {
            e.isDefaultPrevented() || l.one(h.HIDDEN, function() {
                t(r).is(":visible") && r.focus()
            })
        });
        b._jQueryInterface.call(t(i), a, this)
    }), t.fn.modal = b._jQueryInterface, t.fn.modal.Constructor = b, t.fn.modal.noConflict = function() {
        return t.fn.modal = l, b._jQueryInterface
    }, b
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util.js"], e) : (t = t || self).Tab = e(t.jQuery, t.Util)
}(this, function(t, e) {
    "use strict";

    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    t = t && t.hasOwnProperty("default") ? t.default : t, e = e && e.hasOwnProperty("default") ? e.default : e;
    var i = t.fn.tab,
        r = {
            HIDE: "hide.bs.tab",
            HIDDEN: "hidden.bs.tab",
            SHOW: "show.bs.tab",
            SHOWN: "shown.bs.tab",
            CLICK_DATA_API: "click.bs.tab.data-api"
        },
        o = "dropdown-menu",
        s = "active",
        a = "disabled",
        l = "fade",
        c = "show",
        u = ".dropdown",
        h = ".nav, .list-group",
        d = ".active",
        p = "> li > .active",
        f = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        m = ".dropdown-toggle",
        g = "> .dropdown-menu .active",
        v = function() {
            function i(t) {
                this._element = t
            }
            var f, v, y, w = i.prototype;
            return w.show = function() {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(s) || t(this._element).hasClass(a))) {
                    var i, o, l = t(this._element).closest(h)[0],
                        c = e.getSelectorFromElement(this._element);
                    if (l) {
                        var u = "UL" === l.nodeName || "OL" === l.nodeName ? p : d;
                        o = (o = t.makeArray(t(l).find(u)))[o.length - 1]
                    }
                    var f = t.Event(r.HIDE, {
                            relatedTarget: this._element
                        }),
                        m = t.Event(r.SHOW, {
                            relatedTarget: o
                        });
                    if (o && t(o).trigger(f), t(this._element).trigger(m), !m.isDefaultPrevented() && !f.isDefaultPrevented()) {
                        c && (i = document.querySelector(c)), this._activate(this._element, l);
                        var g = function() {
                            var e = t.Event(r.HIDDEN, {
                                    relatedTarget: n._element
                                }),
                                i = t.Event(r.SHOWN, {
                                    relatedTarget: o
                                });
                            t(o).trigger(e), t(n._element).trigger(i)
                        };
                        i ? this._activate(i, i.parentNode, g) : g()
                    }
                }
            }, w.dispose = function() {
                t.removeData(this._element, "bs.tab"), this._element = null
            }, w._activate = function(n, i, r) {
                var o = this,
                    s = (!i || "UL" !== i.nodeName && "OL" !== i.nodeName ? t(i).children(d) : t(i).find(p))[0],
                    a = r && s && t(s).hasClass(l),
                    u = function() {
                        return o._transitionComplete(n, s, r)
                    };
                if (s && a) {
                    var h = e.getTransitionDurationFromElement(s);
                    t(s).removeClass(c).one(e.TRANSITION_END, u).emulateTransitionEnd(h)
                } else u()
            }, w._transitionComplete = function(n, i, r) {
                if (i) {
                    t(i).removeClass(s);
                    var a = t(i.parentNode).find(g)[0];
                    a && t(a).removeClass(s), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1)
                }
                if (t(n).addClass(s), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !0), e.reflow(n), n.classList.contains(l) && n.classList.add(c), n.parentNode && t(n.parentNode).hasClass(o)) {
                    var h = t(n).closest(u)[0];
                    if (h) {
                        var d = [].slice.call(h.querySelectorAll(m));
                        t(d).addClass(s)
                    }
                    n.setAttribute("aria-expanded", !0)
                }
                r && r()
            }, i._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = t(this),
                        r = n.data("bs.tab");
                    if (r || (r = new i(this), n.data("bs.tab", r)), "string" == typeof e) {
                        if (void 0 === r[e]) throw new TypeError('No method named "' + e + '"');
                        r[e]()
                    }
                })
            }, f = i, y = [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }], (v = null) && n(f.prototype, v), y && n(f, y), i
        }();
    return t(document).on(r.CLICK_DATA_API, f, function(e) {
        e.preventDefault(), v._jQueryInterface.call(t(this), "show")
    }), t.fn.tab = v._jQueryInterface, t.fn.tab.Constructor = v, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, v._jQueryInterface
    }, v
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util.js"], e) : (t = t || self).Carousel = e(t.jQuery, t.Util)
}(this, function(t, e) {
    "use strict";

    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function i(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, i)
        }
        return n
    }

    function o(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? r(Object(n), !0).forEach(function(e) {
                i(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }
    t = t && t.hasOwnProperty("default") ? t.default : t, e = e && e.hasOwnProperty("default") ? e.default : e;
    var s = "carousel",
        a = "bs.carousel",
        l = "." + a,
        c = t.fn[s],
        u = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        h = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        d = "next",
        p = "prev",
        f = "left",
        m = "right",
        g = {
            SLIDE: "slide" + l,
            SLID: "slid" + l,
            KEYDOWN: "keydown" + l,
            MOUSEENTER: "mouseenter" + l,
            MOUSELEAVE: "mouseleave" + l,
            TOUCHSTART: "touchstart" + l,
            TOUCHMOVE: "touchmove" + l,
            TOUCHEND: "touchend" + l,
            POINTERDOWN: "pointerdown" + l,
            POINTERUP: "pointerup" + l,
            DRAG_START: "dragstart" + l,
            LOAD_DATA_API: "load.bs.carousel.data-api",
            CLICK_DATA_API: "click.bs.carousel.data-api"
        },
        v = "carousel",
        y = "active",
        w = "slide",
        b = "carousel-item-right",
        _ = "carousel-item-left",
        x = "carousel-item-next",
        T = "carousel-item-prev",
        C = "pointer-event",
        E = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            ITEM_IMG: ".carousel-item img",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        },
        S = {
            TOUCH: "touch",
            PEN: "pen"
        },
        A = function() {
            function i(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(E.INDICATORS), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var r, c, A, D = i.prototype;
            return D.next = function() {
                this._isSliding || this._slide(d)
            }, D.nextWhenVisible = function() {
                !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
            }, D.prev = function() {
                this._isSliding || this._slide(p)
            }, D.pause = function(t) {
                t || (this._isPaused = !0), this._element.querySelector(E.NEXT_PREV) && (e.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, D.cycle = function(t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, D.to = function(e) {
                var n = this;
                this._activeElement = this._element.querySelector(E.ACTIVE_ITEM);
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) t(this._element).one(g.SLID, function() {
                        return n.to(e)
                    });
                    else {
                        if (i === e) return this.pause(), void this.cycle();
                        var r = e > i ? d : p;
                        this._slide(r, this._items[e])
                    }
            }, D.dispose = function() {
                t(this._element).off(l), t.removeData(this._element, a), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, D._getConfig = function(t) {
                return t = o({}, u, {}, t), e.typeCheckConfig(s, t, h), t
            }, D._handleSwipe = function() {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next()
                }
            }, D._addEventListeners = function() {
                var e = this;
                this._config.keyboard && t(this._element).on(g.KEYDOWN, function(t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && t(this._element).on(g.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(g.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }), this._config.touch && this._addTouchEventListeners()
            }, D._addTouchEventListeners = function() {
                var e = this;
                if (this._touchSupported) {
                    var n = function(t) {
                            e._pointerEvent && S[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                        },
                        i = function(t) {
                            e._pointerEvent && S[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                                return e.cycle(t)
                            }, 500 + e._config.interval))
                        };
                    t(this._element.querySelectorAll(E.ITEM_IMG)).on(g.DRAG_START, function(t) {
                        return t.preventDefault()
                    }), this._pointerEvent ? (t(this._element).on(g.POINTERDOWN, function(t) {
                        return n(t)
                    }), t(this._element).on(g.POINTERUP, function(t) {
                        return i(t)
                    }), this._element.classList.add(C)) : (t(this._element).on(g.TOUCHSTART, function(t) {
                        return n(t)
                    }), t(this._element).on(g.TOUCHMOVE, function(t) {
                        return function(t) {
                            t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
                        }(t)
                    }), t(this._element).on(g.TOUCHEND, function(t) {
                        return i(t)
                    }))
                }
            }, D._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, D._getItemIndex = function(t) {
                return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(E.ITEM)) : [], this._items.indexOf(t)
            }, D._getItemByDirection = function(t, e) {
                var n = t === d,
                    i = t === p,
                    r = this._getItemIndex(e),
                    o = this._items.length - 1;
                if ((i && 0 === r || n && r === o) && !this._config.wrap) return e;
                var s = (r + (t === p ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, D._triggerSlideEvent = function(e, n) {
                var i = this._getItemIndex(e),
                    r = this._getItemIndex(this._element.querySelector(E.ACTIVE_ITEM)),
                    o = t.Event(g.SLIDE, {
                        relatedTarget: e,
                        direction: n,
                        from: r,
                        to: i
                    });
                return t(this._element).trigger(o), o
            }, D._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    var n = [].slice.call(this._indicatorsElement.querySelectorAll(E.ACTIVE));
                    t(n).removeClass(y);
                    var i = this._indicatorsElement.children[this._getItemIndex(e)];
                    i && t(i).addClass(y)
                }
            }, D._slide = function(n, i) {
                var r, o, s, a = this,
                    l = this._element.querySelector(E.ACTIVE_ITEM),
                    c = this._getItemIndex(l),
                    u = i || l && this._getItemByDirection(n, l),
                    h = this._getItemIndex(u),
                    p = Boolean(this._interval);
                if (n === d ? (r = _, o = x, s = f) : (r = b, o = T, s = m), u && t(u).hasClass(y)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(u, s).isDefaultPrevented() && l && u) {
                    this._isSliding = !0, p && this.pause(), this._setActiveIndicatorElement(u);
                    var v = t.Event(g.SLID, {
                        relatedTarget: u,
                        direction: s,
                        from: c,
                        to: h
                    });
                    if (t(this._element).hasClass(w)) {
                        t(u).addClass(o), e.reflow(u), t(l).addClass(r), t(u).addClass(r);
                        var C = parseInt(u.getAttribute("data-interval"), 10);
                        C ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = C) : this._config.interval = this._config.defaultInterval || this._config.interval;
                        var S = e.getTransitionDurationFromElement(l);
                        t(l).one(e.TRANSITION_END, function() {
                            t(u).removeClass(r + " " + o).addClass(y), t(l).removeClass(y + " " + o + " " + r), a._isSliding = !1, setTimeout(function() {
                                return t(a._element).trigger(v)
                            }, 0)
                        }).emulateTransitionEnd(S)
                    } else t(l).removeClass(y), t(u).addClass(y), this._isSliding = !1, t(this._element).trigger(v);
                    p && this.cycle()
                }
            }, i._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = t(this).data(a),
                        r = o({}, u, {}, t(this).data());
                    "object" == typeof e && (r = o({}, r, {}, e));
                    var s = "string" == typeof e ? e : r.slide;
                    if (n || (n = new i(this, r), t(this).data(a, n)), "number" == typeof e) n.to(e);
                    else if ("string" == typeof s) {
                        if (void 0 === n[s]) throw new TypeError('No method named "' + s + '"');
                        n[s]()
                    } else r.interval && r.ride && (n.pause(), n.cycle())
                })
            }, i._dataApiClickHandler = function(n) {
                var r = e.getSelectorFromElement(this);
                if (r) {
                    var s = t(r)[0];
                    if (s && t(s).hasClass(v)) {
                        var l = o({}, t(s).data(), {}, t(this).data()),
                            c = this.getAttribute("data-slide-to");
                        c && (l.interval = !1), i._jQueryInterface.call(t(s), l), c && t(s).data(a).to(c), n.preventDefault()
                    }
                }
            }, r = i, A = [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return u
                }
            }], (c = null) && n(r.prototype, c), A && n(r, A), i
        }();
    return t(document).on(g.CLICK_DATA_API, E.DATA_SLIDE, A._dataApiClickHandler), t(window).on(g.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll(E.DATA_RIDE)), n = 0, i = e.length; n < i; n++) {
            var r = t(e[n]);
            A._jQueryInterface.call(r, r.data())
        }
    }), t.fn[s] = A._jQueryInterface, t.fn[s].Constructor = A, t.fn[s].noConflict = function() {
        return t.fn[s] = c, A._jQueryInterface
    }, A
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery"), require("./util.js")) : "function" == typeof define && define.amd ? define(["jquery", "./util.js"], e) : (t = t || self).Collapse = e(t.jQuery, t.Util)
}(this, function(t, e) {
    "use strict";

    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function i(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, i)
        }
        return n
    }

    function o(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? r(Object(n), !0).forEach(function(e) {
                i(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }
    t = t && t.hasOwnProperty("default") ? t.default : t, e = e && e.hasOwnProperty("default") ? e.default : e;
    var s = "collapse",
        a = "bs.collapse",
        l = t.fn[s],
        c = {
            toggle: !0,
            parent: ""
        },
        u = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        h = {
            SHOW: "show.bs.collapse",
            SHOWN: "shown.bs.collapse",
            HIDE: "hide.bs.collapse",
            HIDDEN: "hidden.bs.collapse",
            CLICK_DATA_API: "click.bs.collapse.data-api"
        },
        d = "show",
        p = "collapse",
        f = "collapsing",
        m = "collapsed",
        g = "width",
        v = "height",
        y = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        },
        w = function() {
            function i(t, n) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var i = [].slice.call(document.querySelectorAll(y.DATA_TOGGLE)), r = 0, o = i.length; r < o; r++) {
                    var s = i[r],
                        a = e.getSelectorFromElement(s),
                        l = [].slice.call(document.querySelectorAll(a)).filter(function(e) {
                            return e === t
                        });
                    null !== a && l.length > 0 && (this._selector = a, this._triggerArray.push(s))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var r, l, w, b = i.prototype;
            return b.toggle = function() {
                t(this._element).hasClass(d) ? this.hide() : this.show()
            }, b.show = function() {
                var n, r, o = this;
                if (!this._isTransitioning && !t(this._element).hasClass(d) && (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(y.ACTIVES)).filter(function(t) {
                        return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains(p)
                    })).length && (n = null), !(n && (r = t(n).not(this._selector).data(a)) && r._isTransitioning))) {
                    var s = t.Event(h.SHOW);
                    if (t(this._element).trigger(s), !s.isDefaultPrevented()) {
                        n && (i._jQueryInterface.call(t(n).not(this._selector), "hide"), r || t(n).data(a, null));
                        var l = this._getDimension();
                        t(this._element).removeClass(p).addClass(f), this._element.style[l] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(m).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var c = "scroll" + (l[0].toUpperCase() + l.slice(1)),
                            u = e.getTransitionDurationFromElement(this._element);
                        t(this._element).one(e.TRANSITION_END, function() {
                            t(o._element).removeClass(f).addClass(p).addClass(d), o._element.style[l] = "", o.setTransitioning(!1), t(o._element).trigger(h.SHOWN)
                        }).emulateTransitionEnd(u), this._element.style[l] = this._element[c] + "px"
                    }
                }
            }, b.hide = function() {
                var n = this;
                if (!this._isTransitioning && t(this._element).hasClass(d)) {
                    var i = t.Event(h.HIDE);
                    if (t(this._element).trigger(i), !i.isDefaultPrevented()) {
                        var r = this._getDimension();
                        this._element.style[r] = this._element.getBoundingClientRect()[r] + "px", e.reflow(this._element), t(this._element).addClass(f).removeClass(p).removeClass(d);
                        var o = this._triggerArray.length;
                        if (o > 0)
                            for (var s = 0; s < o; s++) {
                                var a = this._triggerArray[s],
                                    l = e.getSelectorFromElement(a);
                                if (null !== l) t([].slice.call(document.querySelectorAll(l))).hasClass(d) || t(a).addClass(m).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[r] = "";
                        var c = e.getTransitionDurationFromElement(this._element);
                        t(this._element).one(e.TRANSITION_END, function() {
                            n.setTransitioning(!1), t(n._element).removeClass(f).addClass(p).trigger(h.HIDDEN)
                        }).emulateTransitionEnd(c)
                    }
                }
            }, b.setTransitioning = function(t) {
                this._isTransitioning = t
            }, b.dispose = function() {
                t.removeData(this._element, a), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, b._getConfig = function(t) {
                return (t = o({}, c, {}, t)).toggle = Boolean(t.toggle), e.typeCheckConfig(s, t, u), t
            }, b._getDimension = function() {
                return t(this._element).hasClass(g) ? g : v
            }, b._getParent = function() {
                var n, r = this;
                e.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    s = [].slice.call(n.querySelectorAll(o));
                return t(s).each(function(t, e) {
                    r._addAriaAndCollapsedClass(i._getTargetFromElement(e), [e])
                }), n
            }, b._addAriaAndCollapsedClass = function(e, n) {
                var i = t(e).hasClass(d);
                n.length && t(n).toggleClass(m, !i).attr("aria-expanded", i)
            }, i._getTargetFromElement = function(t) {
                var n = e.getSelectorFromElement(t);
                return n ? document.querySelector(n) : null
            }, i._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = t(this),
                        r = n.data(a),
                        s = o({}, c, {}, n.data(), {}, "object" == typeof e && e ? e : {});
                    if (!r && s.toggle && /show|hide/.test(e) && (s.toggle = !1), r || (r = new i(this, s), n.data(a, r)), "string" == typeof e) {
                        if (void 0 === r[e]) throw new TypeError('No method named "' + e + '"');
                        r[e]()
                    }
                })
            }, r = i, w = [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return c
                }
            }], (l = null) && n(r.prototype, l), w && n(r, w), i
        }();
    return t(document).on(h.CLICK_DATA_API, y.DATA_TOGGLE, function(n) {
        "A" === n.currentTarget.tagName && n.preventDefault();
        var i = t(this),
            r = e.getSelectorFromElement(this),
            o = [].slice.call(document.querySelectorAll(r));
        t(o).each(function() {
            var e = t(this),
                n = e.data(a) ? "toggle" : i.data();
            w._jQueryInterface.call(e, n)
        })
    }), t.fn[s] = w._jQueryInterface, t.fn[s].Constructor = w, t.fn[s].noConflict = function() {
        return t.fn[s] = l, w._jQueryInterface
    }, w
}),
function(t, e) {
    if ("function" == typeof define && define.amd) define(["module", "exports"], e);
    else if ("undefined" != typeof exports) e(module, exports);
    else {
        var n = {
            exports: {}
        };
        e(n, n.exports), t.autosize = n.exports
    }
}(this, function(t, e) {
    "use strict";
    var n, i, r = "function" == typeof Map ? new Map : (n = [], i = [], {
            has: function(t) {
                return -1 < n.indexOf(t)
            },
            get: function(t) {
                return i[n.indexOf(t)]
            },
            set: function(t, e) {
                -1 === n.indexOf(t) && (n.push(t), i.push(e))
            },
            delete: function(t) {
                var e = n.indexOf(t); - 1 < e && (n.splice(e, 1), i.splice(e, 1))
            }
        }),
        o = function(t) {
            return new Event(t, {
                bubbles: !0
            })
        };
    try {
        new Event("test")
    } catch (t) {
        o = function(t) {
            var e = document.createEvent("Event");
            return e.initEvent(t, !0, !1), e
        }
    }

    function s(t) {
        var e = r.get(t);
        e && e.destroy()
    }

    function a(t) {
        var e = r.get(t);
        e && e.update()
    }
    var l = null;
    "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((l = function(t) {
        return t
    }).destroy = function(t) {
        return t
    }, l.update = function(t) {
        return t
    }) : ((l = function(t, e) {
        return t && Array.prototype.forEach.call(t.length ? t : [t], function(t) {
            return function(t) {
                if (t && t.nodeName && "TEXTAREA" === t.nodeName && !r.has(t)) {
                    var e, n = null,
                        i = null,
                        s = null,
                        a = function() {
                            t.clientWidth !== i && h()
                        },
                        l = function(e) {
                            window.removeEventListener("resize", a, !1), t.removeEventListener("input", h, !1), t.removeEventListener("keyup", h, !1), t.removeEventListener("autosize:destroy", l, !1), t.removeEventListener("autosize:update", h, !1), Object.keys(e).forEach(function(n) {
                                t.style[n] = e[n]
                            }), r.delete(t)
                        }.bind(t, {
                            height: t.style.height,
                            resize: t.style.resize,
                            overflowY: t.style.overflowY,
                            overflowX: t.style.overflowX,
                            wordWrap: t.style.wordWrap
                        });
                    t.addEventListener("autosize:destroy", l, !1), "onpropertychange" in t && "oninput" in t && t.addEventListener("keyup", h, !1), window.addEventListener("resize", a, !1), t.addEventListener("input", h, !1), t.addEventListener("autosize:update", h, !1), t.style.overflowX = "hidden", t.style.wordWrap = "break-word", r.set(t, {
                        destroy: l,
                        update: h
                    }), "vertical" === (e = window.getComputedStyle(t, null)).resize ? t.style.resize = "none" : "both" === e.resize && (t.style.resize = "horizontal"), n = "content-box" === e.boxSizing ? -(parseFloat(e.paddingTop) + parseFloat(e.paddingBottom)) : parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth), isNaN(n) && (n = 0), h()
                }

                function c(e) {
                    var n = t.style.width;
                    t.style.width = "0px", t.offsetWidth, t.style.width = n, t.style.overflowY = e
                }

                function u() {
                    if (0 !== t.scrollHeight) {
                        var e = function(t) {
                                for (var e = []; t && t.parentNode && t.parentNode instanceof Element;) t.parentNode.scrollTop && e.push({
                                    node: t.parentNode,
                                    scrollTop: t.parentNode.scrollTop
                                }), t = t.parentNode;
                                return e
                            }(t),
                            r = document.documentElement && document.documentElement.scrollTop;
                        t.style.height = "", t.style.height = t.scrollHeight + n + "px", i = t.clientWidth, e.forEach(function(t) {
                            t.node.scrollTop = t.scrollTop
                        }), r && (document.documentElement.scrollTop = r)
                    }
                }

                function h() {
                    u();
                    var e = Math.round(parseFloat(t.style.height)),
                        n = window.getComputedStyle(t, null),
                        i = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : t.offsetHeight;
                    if (i < e ? "hidden" === n.overflowY && (c("scroll"), u(), i = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight) : "hidden" !== n.overflowY && (c("hidden"), u(), i = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight), s !== i) {
                        s = i;
                        var r = o("autosize:resized");
                        try {
                            t.dispatchEvent(r)
                        } catch (e) {}
                    }
                }
            }(t)
        }), t
    }).destroy = function(t) {
        return t && Array.prototype.forEach.call(t.length ? t : [t], s), t
    }, l.update = function(t) {
        return t && Array.prototype.forEach.call(t.length ? t : [t], a), t
    }), e.default = l, t.exports = e.default
}),
function(t, e) {
    "use strict";

    function n(n, i, o, a, l) {
        function c() {
            T = t.devicePixelRatio > 1, o = u(o), i.delay >= 0 && setTimeout(function() {
                h(!0)
            }, i.delay), (i.delay < 0 || i.combined) && (a.e = function(t, e) {
                var r, o = 0;
                return function(s, a) {
                    function l() {
                        o = +new Date, e.call(n, s)
                    }
                    var c = +new Date - o;
                    r && clearTimeout(r), c > t || !i.enableThrottle || a ? l() : r = setTimeout(l, t - c)
                }
            }(i.throttle, function(t) {
                "resize" === t.type && (_ = x = -1), h(t.all)
            }), a.a = function(t) {
                t = u(t), o.push.apply(o, t)
            }, a.g = function() {
                return o = r(o).filter(function() {
                    return !r(this).data(i.loadedName)
                })
            }, a.f = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var n = o.filter(function() {
                        return this === t[e]
                    });
                    n.length && h(!1, n)
                }
            }, h(), r(i.appendScroll).on("scroll." + l + " resize." + l, a.e))
        }

        function u(t) {
            for (var o = i.defaultImage, s = i.placeholder, a = i.imageBase, l = i.srcsetAttribute, c = i.loaderAttribute, u = i._f || {}, h = 0, d = (t = r(t).filter(function() {
                    var t = r(this),
                        n = g(this);
                    return !t.data(i.handledName) && (t.attr(i.attribute) || t.attr(l) || t.attr(c) || u[n] !== e)
                }).data("plugin_" + i.name, n)).length; h < d; h++) {
                var p = r(t[h]),
                    f = g(t[h]),
                    m = p.attr(i.imageBaseAttribute) || a;
                f === A && m && p.attr(l) && p.attr(l, v(p.attr(l), m)), u[f] === e || p.attr(c) || p.attr(c, u[f]), f === A && o && !p.attr(D) ? p.attr(D, o) : f === A || !s || p.css(O) && "none" !== p.css(O) || p.css(O, "url('" + s + "')")
            }
            return t
        }

        function h(t, e) {
            if (o.length) {
                for (var s = e || o, a = !1, l = i.imageBase || "", c = i.srcsetAttribute, u = i.handledName, h = 0; h < s.length; h++)
                    if (t || e || p(s[h])) {
                        var f = r(s[h]),
                            m = g(s[h]),
                            v = f.attr(i.attribute),
                            y = f.attr(i.imageBaseAttribute) || l,
                            w = f.attr(i.loaderAttribute);
                        f.data(u) || i.visibleOnly && !f.is(":visible") || !((v || f.attr(c)) && (m === A && (y + v !== f.attr(D) || f.attr(c) !== f.attr(k)) || m !== A && y + v !== f.css(O)) || w) || (a = !0, f.data(u, !0), d(f, m, y, w))
                    } a && (o = r(o).filter(function() {
                    return !r(this).data(u)
                }))
            } else i.autoDestroy && n.destroy()
        }

        function d(t, e, n, o) {
            ++b;
            var s = function() {
                w("onError", t), y(), s = r.noop
            };
            w("beforeLoad", t);
            var a = i.attribute,
                l = i.srcsetAttribute,
                c = i.sizesAttribute,
                u = i.retinaAttribute,
                h = i.removeAttribute,
                d = i.loadedName,
                p = t.attr(u);
            if (o) {
                var f = function() {
                    h && t.removeAttr(i.loaderAttribute), t.data(d, !0), w(C, t), setTimeout(y, 1), f = r.noop
                };
                t.off(S).one(S, s).one(E, f), w(o, t, function(e) {
                    e ? (t.off(E), f()) : (t.off(S), s())
                }) || t.trigger(S)
            } else {
                var m = r(new Image);
                m.one(S, s).one(E, function() {
                    t.hide(), e === A ? t.attr(N, m.attr(N)).attr(k, m.attr(k)).attr(D, m.attr(D)) : t.css(O, "url('" + m.attr(D) + "')"), t[i.effect](i.effectTime), h && (t.removeAttr(a + " " + l + " " + u + " " + i.imageBaseAttribute), c !== N && t.removeAttr(c)), t.data(d, !0), w(C, t), m.remove(), y()
                });
                var g = (T && p ? p : t.attr(a)) || "";
                m.attr(N, t.attr(c)).attr(k, t.attr(l)).attr(D, g ? n + g : null), m.complete && m.trigger(E)
            }
        }

        function p(t) {
            var e = t.getBoundingClientRect(),
                n = i.scrollDirection,
                r = i.threshold,
                o = m() + r > e.top && -r < e.bottom,
                s = f() + r > e.left && -r < e.right;
            return "vertical" === n ? o : "horizontal" === n ? s : o && s
        }

        function f() {
            return _ >= 0 ? _ : _ = r(t).width()
        }

        function m() {
            return x >= 0 ? x : x = r(t).height()
        }

        function g(t) {
            return t.tagName.toLowerCase()
        }

        function v(t, e) {
            if (e) {
                var n = t.split(",");
                t = "";
                for (var i = 0, r = n.length; i < r; i++) t += e + n[i].trim() + (i !== r - 1 ? "," : "")
            }
            return t
        }

        function y() {
            --b, o.length || b || w("onFinishedAll")
        }

        function w(t, e, r) {
            return !!(t = i[t]) && (t.apply(n, [].slice.call(arguments, 1)), !0)
        }
        var b = 0,
            _ = -1,
            x = -1,
            T = !1,
            C = "afterLoad",
            E = "load",
            S = "error",
            A = "img",
            D = "src",
            k = "srcset",
            N = "sizes",
            O = "background-image";
        "event" === i.bind || s ? c() : r(t).on(E + "." + l, c)
    }

    function i(i, s) {
        var a = this,
            l = r.extend({}, a.config, s),
            c = {},
            u = l.name + "-" + ++o;
        return a.config = function(t, n) {
            return n === e ? l[t] : (l[t] = n, a)
        }, a.addItems = function(t) {
            return c.a && c.a("string" === r.type(t) ? r(t) : t), a
        }, a.getItems = function() {
            return c.g ? c.g() : {}
        }, a.update = function(t) {
            return c.e && c.e({}, !t), a
        }, a.force = function(t) {
            return c.f && c.f("string" === r.type(t) ? r(t) : t), a
        }, a.loadAll = function() {
            return c.e && c.e({
                all: !0
            }, !0), a
        }, a.destroy = function() {
            return r(l.appendScroll).off("." + u, c.e), r(t).off("." + u), c = {}, e
        }, n(a, l, i, c, u), l.chainable ? i : a
    }
    var r = t.jQuery || t.Zepto,
        o = 0,
        s = !1;
    r.fn.Lazy = r.fn.lazy = function(t) {
        return new i(this, t)
    }, r.Lazy = r.lazy = function(t, n, o) {
        if (r.isFunction(n) && (o = n, n = []), r.isFunction(o)) {
            t = r.isArray(t) ? t : [t], n = r.isArray(n) ? n : [n];
            for (var s = i.prototype.config, a = s._f || (s._f = {}), l = 0, c = t.length; l < c; l++)(s[t[l]] === e || r.isFunction(s[t[l]])) && (s[t[l]] = o);
            for (var u = 0, h = n.length; u < h; u++) a[n[u]] = t[0]
        }
    }, i.prototype.config = {
        name: "lazy",
        chainable: !0,
        autoDestroy: !0,
        bind: "load",
        threshold: 500,
        visibleOnly: !1,
        appendScroll: t,
        scrollDirection: "both",
        imageBase: null,
        defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        placeholder: null,
        delay: -1,
        combined: !1,
        attribute: "data-src",
        srcsetAttribute: "data-srcset",
        sizesAttribute: "data-sizes",
        retinaAttribute: "data-retina",
        loaderAttribute: "data-loader",
        imageBaseAttribute: "data-imagebase",
        removeAttribute: !0,
        handledName: "handled",
        loadedName: "loaded",
        effect: "show",
        effectTime: 0,
        enableThrottle: !0,
        throttle: 250,
        beforeLoad: e,
        afterLoad: e,
        onError: e,
        onFinishedAll: e
    }, r(t).on("load", function() {
        s = !0
    })
}(window),
function(t) {
    function e(e, n, i, r) {
        var o;
        "POST" !== (r = r ? r.toUpperCase() : "GET") && "PUT" !== r || !e.config("ajaxCreateData") || (o = e.config("ajaxCreateData").apply(e, [n])), t.ajax({
            url: n.attr("data-src"),
            type: "POST" === r || "PUT" === r ? r : "GET",
            data: o,
            dataType: n.attr("data-type") || "html",
            success: function(t) {
                n.html(t), i(!0), e.config("removeAttribute") && n.removeAttr("data-src data-method data-type")
            },
            error: function() {
                i(!1)
            }
        })
    }
    t.lazy("ajax", function(t, n) {
        e(this, t, n, t.attr("data-method"))
    }), t.lazy("get", function(t, n) {
        e(this, t, n, "GET")
    }), t.lazy("post", function(t, n) {
        e(this, t, n, "POST")
    }), t.lazy("put", function(t, n) {
        e(this, t, n, "PUT")
    })
}(window.jQuery || window.Zepto),
function(t) {
    t.lazy(["av", "audio", "video"], ["audio", "video"], function(e, n) {
        var i = e[0].tagName.toLowerCase();
        if ("audio" === i || "video" === i) {
            var r = e.find("data-src"),
                o = e.find("data-track"),
                s = 0,
                a = function() {
                    ++s === r.length && n(!1)
                },
                l = function() {
                    var e = t(this),
                        n = e[0].tagName.toLowerCase(),
                        i = e.prop("attributes"),
                        r = t("data-src" === n ? "<source>" : "<track>");
                    "data-src" === n && r.one("error", a), t.each(i, function(t, e) {
                        r.attr(e.name, e.value)
                    }), e.replaceWith(r)
                };
            e.one("loadedmetadata", function() {
                n(!0)
            }).off("load error").attr("poster", e.attr("data-poster")), r.length ? r.each(l) : e.attr("data-src") ? (t.each(e.attr("data-src").split(","), function(n, i) {
                var r = i.split("|");
                e.append(t("<source>").one("error", a).attr({
                    src: r[0].trim(),
                    type: r[1].trim()
                }))
            }), this.config("removeAttribute") && e.removeAttr("data-src")) : n(!1), o.length && o.each(l)
        } else n(!1)
    })
}(window.jQuery || window.Zepto),
function(t) {
    t.lazy(["frame", "iframe"], "iframe", function(e, n) {
        var i = this;
        if ("iframe" === e[0].tagName.toLowerCase()) {
            var r = e.attr("data-error-detect");
            "true" !== r && "1" !== r ? (e.attr("src", e.attr("data-src")), i.config("removeAttribute") && e.removeAttr("data-src data-error-detect")) : t.ajax({
                url: e.attr("data-src"),
                dataType: "html",
                crossDomain: !0,
                xhrFields: {
                    withCredentials: !0
                },
                success: function(t) {
                    e.html(t).attr("src", e.attr("data-src")), i.config("removeAttribute") && e.removeAttr("data-src data-error-detect")
                },
                error: function() {
                    n(!1)
                }
            })
        } else n(!1)
    })
}(window.jQuery || window.Zepto),
function(t) {
    t.lazy("noop", function() {}), t.lazy("noop-success", function(t, e) {
        e(!0)
    }), t.lazy("noop-error", function(t, e) {
        e(!1)
    })
}(window.jQuery || window.Zepto),
function(t) {
    function e(e, n, o) {
        var s = e.prop("attributes"),
            a = t("<" + n + ">");
        return t.each(s, function(t, e) {
            "srcset" !== e.name && e.name !== r || (e.value = i(e.value, o)), a.attr(e.name, e.value)
        }), e.replaceWith(a), a
    }

    function n(e, n, i) {
        var r = t("<img>").one("load", function() {
            i(!0)
        }).one("error", function() {
            i(!1)
        }).appendTo(e).attr("src", n);
        r.complete && r.load()
    }

    function i(t, e) {
        if (e) {
            var n = t.split(",");
            t = "";
            for (var i = 0, r = n.length; i < r; i++) t += e + n[i].trim() + (i !== r - 1 ? "," : "")
        }
        return t
    }
    var r = "data-src";
    t.lazy(["pic", "picture"], ["picture"], function(o, s) {
        if ("picture" === o[0].tagName.toLowerCase()) {
            var a = o.find(r),
                l = o.find("data-img"),
                c = this.config("imageBase") || "";
            a.length ? (a.each(function() {
                e(t(this), "source", c)
            }), 1 === l.length ? ((l = e(l, "img", c)).on("load", function() {
                s(!0)
            }).on("error", function() {
                s(!1)
            }), l.attr("src", l.attr(r)), this.config("removeAttribute") && l.removeAttr(r)) : o.attr(r) ? (n(o, c + o.attr(r), s), this.config("removeAttribute") && o.removeAttr(r)) : s(!1)) : o.attr("data-srcset") ? (t("<source>").attr({
                media: o.attr("data-media"),
                sizes: o.attr("data-sizes"),
                type: o.attr("data-type"),
                srcset: i(o.attr("data-srcset"), c)
            }).appendTo(o), n(o, c + o.attr(r), s), this.config("removeAttribute") && o.removeAttr(r + " data-srcset data-media data-sizes data-type")) : s(!1)
        } else s(!1)
    })
}(window.jQuery || window.Zepto), (window.jQuery || window.Zepto).lazy(["js", "javascript", "script"], "script", function(t, e) {
        "script" === t[0].tagName.toLowerCase() ? (t.attr("src", t.attr("data-src")), this.config("removeAttribute") && t.removeAttr("data-src")) : e(!1)
    }), (window.jQuery || window.Zepto).lazy("vimeo", function(t, e) {
        "iframe" === t[0].tagName.toLowerCase() ? (t.attr("src", "https://player.vimeo.com/video/" + t.attr("data-src")), this.config("removeAttribute") && t.removeAttr("data-src")) : e(!1)
    }), (window.jQuery || window.Zepto).lazy(["yt", "youtube"], function(t, e) {
        if ("iframe" === t[0].tagName.toLowerCase()) {
            var n = /1|true/.test(t.attr("data-nocookie"));
            t.attr("src", "https://www.youtube" + (n ? "-nocookie" : "") + ".com/embed/" + t.attr("data-src") + "?rel=0&amp;showinfo=0"), this.config("removeAttribute") && t.removeAttr("data-src")
        } else e(!1)
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery)
    }(function(t) {
        var e, n = navigator.userAgent,
            i = /iphone/i.test(n),
            r = /chrome/i.test(n),
            o = /android/i.test(n);
        t.mask = {
            definitions: {
                9: "[0-9]",
                a: "[A-Za-z]",
                "*": "[A-Za-z0-9]"
            },
            autoclear: !0,
            dataName: "rawMaskFn",
            placeholder: "_"
        }, t.fn.extend({
            caret: function(t, e) {
                var n;
                if (0 !== this.length && !this.is(":hidden") && this.get(0) === document.activeElement) return "number" == typeof t ? (e = "number" == typeof e ? e : t, this.each(function() {
                    this.setSelectionRange ? this.setSelectionRange(t, e) : this.createTextRange && ((n = this.createTextRange()).collapse(!0), n.moveEnd("character", e), n.moveStart("character", t), n.select())
                })) : (this[0].setSelectionRange ? (t = this[0].selectionStart, e = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), t = 0 - n.duplicate().moveStart("character", -1e5), e = t + n.text.length), {
                    begin: t,
                    end: e
                })
            },
            unmask: function() {
                return this.trigger("unmask")
            },
            mask: function(n, s) {
                var a, l, c, u, h, d, p;
                if (!n && this.length > 0) {
                    var f = t(this[0]).data(t.mask.dataName);
                    return f ? f() : void 0
                }
                return s = t.extend({
                    autoclear: t.mask.autoclear,
                    placeholder: t.mask.placeholder,
                    completed: null
                }, s), a = t.mask.definitions, l = [], c = d = n.length, u = null, n = String(n), t.each(n.split(""), function(t, e) {
                    "?" == e ? (d--, c = t) : a[e] ? (l.push(new RegExp(a[e])), null === u && (u = l.length - 1), t < c && (h = l.length - 1)) : l.push(null)
                }), this.trigger("unmask").each(function() {
                    var f = t(this),
                        m = t.map(n.split(""), function(t, e) {
                            if ("?" != t) return a[t] ? w(e) : t
                        }),
                        g = m.join(""),
                        v = f.val();

                    function y() {
                        if (s.completed) {
                            for (var t = u; t <= h; t++)
                                if (l[t] && m[t] === w(t)) return;
                            s.completed.call(f)
                        }
                    }

                    function w(t) {
                        return t < s.placeholder.length ? s.placeholder.charAt(t) : s.placeholder.charAt(0)
                    }

                    function b(t) {
                        for (; ++t < d && !l[t];);
                        return t
                    }

                    function _(t, e) {
                        var n, i;
                        if (!(t < 0)) {
                            for (n = t, i = b(e); n < d; n++)
                                if (l[n]) {
                                    if (!(i < d && l[n].test(m[i]))) break;
                                    m[n] = m[i], m[i] = w(i), i = b(i)
                                } C(), f.caret(Math.max(u, t))
                        }
                    }

                    function x(t) {
                        E(), f.val() != v && f.change()
                    }

                    function T(t, e) {
                        var n;
                        for (n = t; n < e && n < d; n++) l[n] && (m[n] = w(n))
                    }

                    function C() {
                        f.val(m.join(""))
                    }

                    function E(t) {
                        var e, n, i, r = f.val(),
                            o = -1;
                        for (e = 0, i = 0; e < d; e++)
                            if (l[e]) {
                                for (m[e] = w(e); i++ < r.length;)
                                    if (n = r.charAt(i - 1), l[e].test(n)) {
                                        m[e] = n, o = e;
                                        break
                                    } if (i > r.length) {
                                    T(e + 1, d);
                                    break
                                }
                            } else m[e] === r.charAt(i) && i++, e < c && (o = e);
                        return t ? C() : o + 1 < c ? s.autoclear || m.join("") === g ? (f.val() && f.val(""), T(0, d)) : C() : (C(), f.val(f.val().substring(0, o + 1))), c ? e : u
                    }
                    f.data(t.mask.dataName, function() {
                        return t.map(m, function(t, e) {
                            return l[e] && t != w(e) ? t : null
                        }).join("")
                    }), f.one("unmask", function() {
                        f.off(".mask").removeData(t.mask.dataName)
                    }).on("focus.mask", function() {
                        var t;
                        f.prop("readonly") || (clearTimeout(e), v = f.val(), t = E(), e = setTimeout(function() {
                            f.get(0) === document.activeElement && (C(), t == n.replace("?", "").length ? f.caret(0, t) : f.caret(t))
                        }, 10))
                    }).on("blur.mask", x).on("keydown.mask", function(t) {
                        if (!f.prop("readonly")) {
                            var e, n, r, o = t.which || t.keyCode;
                            p = f.val(), 8 === o || 46 === o || i && 127 === o ? (n = (e = f.caret()).begin, (r = e.end) - n == 0 && (n = 46 !== o ? function(t) {
                                for (; --t >= 0 && !l[t];);
                                return t
                            }(n) : r = b(n - 1), r = 46 === o ? b(r) : r), T(n, r), _(n, r - 1), t.preventDefault()) : 13 === o ? x.call(this, t) : 27 === o && (f.val(v), f.caret(0, E()), t.preventDefault())
                        }
                    }).on("keypress.mask", function(e) {
                        if (!f.prop("readonly")) {
                            var n, i, r, s = e.which || e.keyCode,
                                a = f.caret();
                            e.ctrlKey || e.altKey || e.metaKey || s < 32 || !s || 13 === s || (a.end - a.begin != 0 && (T(a.begin, a.end), _(a.begin, a.end - 1)), (n = b(a.begin - 1)) < d && (i = String.fromCharCode(s), l[n].test(i)) && (function(t) {
                                var e, n, i, r;
                                for (e = t, n = w(t); e < d; e++)
                                    if (l[e]) {
                                        if (i = b(e), r = m[e], m[e] = n, !(i < d && l[i].test(r))) break;
                                        n = r
                                    }
                            }(n), m[n] = i, C(), r = b(n), o ? setTimeout(function() {
                                t.proxy(t.fn.caret, f, r)()
                            }, 0) : f.caret(r), a.begin <= h && y()), e.preventDefault())
                        }
                    }).on("input.mask paste.mask", function() {
                        f.prop("readonly") || setTimeout(function() {
                            var t = E(!0);
                            f.caret(t), y()
                        }, 0)
                    }), r && o && f.off("input.mask").on("input.mask", function(t) {
                        var e = f.val(),
                            n = f.caret();
                        if (p && p.length && p.length > e.length) {
                            for (E(!0); n.begin > 0 && !l[n.begin - 1];) n.begin--;
                            if (0 === n.begin)
                                for (; n.begin < u && !l[n.begin];) n.begin++;
                            f.caret(n.begin, n.begin)
                        } else {
                            E(!0);
                            var i = e.charAt(n.begin);
                            n.begin < d && (l[n.begin] ? l[n.begin].test(i) && n.begin++ : (n.begin++, l[n.begin].test(i) && n.begin++)), f.caret(n.begin, n.begin)
                        }
                        y()
                    }), E()
                })
            }
        })
    }),
    function(t, e, n, i) {
        function r(e, n) {
            this.settings = null, this.options = t.extend({}, r.Defaults, n), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            }, this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            }, t.each(["onResize", "onThrottledResize"], t.proxy(function(e, n) {
                this._handlers[n] = t.proxy(this[n], this)
            }, this)), t.each(r.Plugins, t.proxy(function(t, e) {
                this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
            }, this)), t.each(r.Workers, t.proxy(function(e, n) {
                this._pipe.push({
                    filter: n.filter,
                    run: t.proxy(n.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }
        r.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            checkVisibility: !0,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: e,
            fallbackEasing: "swing",
            slideTransition: "",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        }, r.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, r.Type = {
            Event: "event",
            State: "state"
        }, r.Plugins = {}, r.Workers = [{
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this.settings.margin || "",
                    n = !this.settings.autoWidth,
                    i = this.settings.rtl,
                    r = {
                        width: "auto",
                        "margin-left": i ? e : "",
                        "margin-right": i ? "" : e
                    };
                !n && this.$stage.children().css(r), t.css = r
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    n = null,
                    i = this._items.length,
                    r = !this.settings.autoWidth,
                    o = [];
                for (t.items = {
                        merge: !1,
                        width: e
                    }; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, t.items.merge = n > 1 || t.items.merge, o[i] = r ? e * n : this._items[i].width();
                this._widths = o
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var e = [],
                    n = this._items,
                    i = this.settings,
                    r = Math.max(2 * i.items, 4),
                    o = 2 * Math.ceil(n.length / 2),
                    s = i.loop && n.length ? i.rewind ? r : Math.max(r, o) : 0,
                    a = "",
                    l = "";
                for (s /= 2; s > 0;) e.push(this.normalize(e.length / 2, !0)), a += n[e[e.length - 1]][0].outerHTML, e.push(this.normalize(n.length - 1 - (e.length - 1) / 2, !0)), l = n[e[e.length - 1]][0].outerHTML + l, s -= 1;
                this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, n = -1, i = 0, r = 0, o = []; ++n < e;) i = o[n - 1] || 0, r = this._widths[this.relative(n)] + this.settings.margin, o.push(i + r * t);
                this._coordinates = o
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var t = this.settings.stagePadding,
                    e = this._coordinates,
                    n = {
                        width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                        "padding-left": t || "",
                        "padding-right": t || ""
                    };
                this.$stage.css(n)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this._coordinates.length,
                    n = !this.settings.autoWidth,
                    i = this.$stage.children();
                if (n && t.items.merge)
                    for (; e--;) t.css.width = this._widths[this.relative(e)], i.eq(e).css(t.css);
                else n && (t.css.width = t.items.width, i.css(t.css))
            }
        }, {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var t, e, n, i, r = this.settings.rtl ? 1 : -1,
                    o = 2 * this.settings.stagePadding,
                    s = this.coordinates(this.current()) + o,
                    a = s + this.width() * r,
                    l = [];
                for (n = 0, i = this._coordinates.length; n < i; n++) t = this._coordinates[n - 1] || 0, e = Math.abs(this._coordinates[n]) + o * r, (this.op(t, "<=", s) && this.op(t, ">", a) || this.op(e, "<", s) && this.op(e, ">", a)) && l.push(n);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
            }
        }], r.prototype.initializeStage = function() {
            this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", {
                class: this.settings.stageClass
            }).wrap(t("<div/>", {
                class: this.settings.stageOuterClass
            })), this.$element.append(this.$stage.parent()))
        }, r.prototype.initializeItems = function() {
            var e = this.$element.find(".owl-item");
            if (e.length) return this._items = e.get().map(function(e) {
                return t(e)
            }), this._mergers = this._items.map(function() {
                return 1
            }), void this.refresh();
            this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
        }, r.prototype.initialize = function() {
            var t, e, n;
            (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i, n = this.$element.children(e).width(), t.length && n <= 0 && this.preloadAutoWidthImages(t));
            this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
        }, r.prototype.isVisible = function() {
            return !this.settings.checkVisibility || this.$element.is(":visible")
        }, r.prototype.setup = function() {
            var e = this.viewport(),
                n = this.options.responsive,
                i = -1,
                r = null;
            n ? (t.each(n, function(t) {
                t <= e && t > i && (i = Number(t))
            }), "function" == typeof(r = t.extend({}, this.options, n[i])).stagePadding && (r.stagePadding = r.stagePadding()), delete r.responsive, r.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : r = t.extend({}, this.options), this.trigger("change", {
                property: {
                    name: "settings",
                    value: r
                }
            }), this._breakpoint = i, this.settings = r, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            })
        }, r.prototype.optionsLogic = function() {
            this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, r.prototype.prepare = function(e) {
            var n = this.trigger("prepare", {
                content: e
            });
            return n.data || (n.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
                content: n.data
            }), n.data
        }, r.prototype.update = function() {
            for (var e = 0, n = this._pipe.length, i = t.proxy(function(t) {
                    return this[t]
                }, this._invalidated), r = {}; e < n;)(this._invalidated.all || t.grep(this._pipe[e].filter, i).length > 0) && this._pipe[e].run(r), e++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid")
        }, r.prototype.width = function(t) {
            switch (t = t || r.Width.Default) {
                case r.Width.Inner:
                case r.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, r.prototype.refresh = function() {
            this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
        }, r.prototype.onThrottledResize = function() {
            e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }, r.prototype.onResize = function() {
            return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
        }, r.prototype.registerEventHandlers = function() {
            t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                return !1
            })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
        }, r.prototype.onDragStart = function(e) {
            var i = null;
            3 !== e.which && (t.support.transform ? i = {
                x: (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === i.length ? 12 : 4],
                y: i[16 === i.length ? 13 : 5]
            } : (i = this.$stage.position(), i = {
                x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left,
                y: i.top
            }), this.is("animating") && (t.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = i, this._drag.stage.current = i, this._drag.pointer = this.pointer(e), t(n).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(n).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
                var i = this.difference(this._drag.pointer, this.pointer(e));
                t(n).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
            }, this)))
        }, r.prototype.onDragMove = function(t) {
            var e = null,
                n = null,
                i = null,
                r = this.difference(this._drag.pointer, this.pointer(t)),
                o = this.difference(this._drag.stage.start, r);
            this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % n + n) % n + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * r.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + i), n + i)), this._drag.stage.current = o, this.animate(o.x))
        }, r.prototype.onDragEnd = function(e) {
            var i = this.difference(this._drag.pointer, this.pointer(e)),
                r = this._drag.stage.current,
                o = i.x > 0 ^ this.settings.rtl ? "left" : "right";
            t(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(r.x, 0 !== i.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(i.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
                return !1
            })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
        }, r.prototype.closest = function(e, n) {
            var r = -1,
                o = this.width(),
                s = this.coordinates();
            return this.settings.freeDrag || t.each(s, t.proxy(function(t, a) {
                return "left" === n && e > a - 30 && e < a + 30 ? r = t : "right" === n && e > a - o - 30 && e < a - o + 30 ? r = t + 1 : this.op(e, "<", a) && this.op(e, ">", s[t + 1] !== i ? s[t + 1] : a - o) && (r = "left" === n ? t + 1 : t), -1 === r
            }, this)), this.settings.loop || (this.op(e, ">", s[this.minimum()]) ? r = e = this.minimum() : this.op(e, "<", s[this.maximum()]) && (r = e = this.maximum())), r
        }, r.prototype.animate = function(e) {
            var n = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(), n && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
            }) : n ? this.$stage.animate({
                left: e + "px"
            }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                left: e + "px"
            })
        }, r.prototype.is = function(t) {
            return this._states.current[t] && this._states.current[t] > 0
        }, r.prototype.current = function(t) {
            if (t === i) return this._current;
            if (0 === this._items.length) return i;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", {
                    property: {
                        name: "position",
                        value: t
                    }
                });
                e.data !== i && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, r.prototype.invalidate = function(e) {
            return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function(t, e) {
                return e
            })
        }, r.prototype.reset = function(t) {
            (t = this.normalize(t)) !== i && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
        }, r.prototype.normalize = function(t, e) {
            var n = this._items.length,
                r = e ? 0 : this._clones.length;
            return !this.isNumeric(t) || n < 1 ? t = i : (t < 0 || t >= n + r) && (t = ((t - r / 2) % n + n) % n + r / 2), t
        }, r.prototype.relative = function(t) {
            return t -= this._clones.length / 2, this.normalize(t, !0)
        }, r.prototype.maximum = function(t) {
            var e, n, i, r = this.settings,
                o = this._coordinates.length;
            if (r.loop) o = this._clones.length / 2 + this._items.length - 1;
            else if (r.autoWidth || r.merge) {
                if (e = this._items.length)
                    for (n = this._items[--e].width(), i = this.$element.width(); e-- && !((n += this._items[e].width() + this.settings.margin) > i););
                o = e + 1
            } else o = r.center ? this._items.length - 1 : this._items.length - r.items;
            return t && (o -= this._clones.length / 2), Math.max(o, 0)
        }, r.prototype.minimum = function(t) {
            return t ? 0 : this._clones.length / 2
        }, r.prototype.items = function(t) {
            return t === i ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
        }, r.prototype.mergers = function(t) {
            return t === i ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
        }, r.prototype.clones = function(e) {
            var n = this._clones.length / 2,
                r = n + this._items.length,
                o = function(t) {
                    return t % 2 == 0 ? r + t / 2 : n - (t + 1) / 2
                };
            return e === i ? t.map(this._clones, function(t, e) {
                return o(e)
            }) : t.map(this._clones, function(t, n) {
                return t === e ? o(n) : null
            })
        }, r.prototype.speed = function(t) {
            return t !== i && (this._speed = t), this._speed
        }, r.prototype.coordinates = function(e) {
            var n, r = 1,
                o = e - 1;
            return e === i ? t.map(this._coordinates, t.proxy(function(t, e) {
                return this.coordinates(e)
            }, this)) : (this.settings.center ? (this.settings.rtl && (r = -1, o = e + 1), n = this._coordinates[e], n += (this.width() - n + (this._coordinates[o] || 0)) / 2 * r) : n = this._coordinates[o] || 0, n = Math.ceil(n))
        }, r.prototype.duration = function(t, e, n) {
            return 0 === n ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed)
        }, r.prototype.to = function(t, e) {
            var n = this.current(),
                i = null,
                r = t - this.relative(n),
                o = (r > 0) - (r < 0),
                s = this._items.length,
                a = this.minimum(),
                l = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(r) > s / 2 && (r += -1 * o * s), (i = (((t = n + r) - a) % s + s) % s + a) !== t && i - r <= l && i - r > 0 && (n = i - r, t = i, this.reset(n))) : this.settings.rewind ? t = (t % (l += 1) + l) % l : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(n, t, e)), this.current(t), this.isVisible() && this.update()
        }, r.prototype.next = function(t) {
            t = t || !1, this.to(this.relative(this.current()) + 1, t)
        }, r.prototype.prev = function(t) {
            t = t || !1, this.to(this.relative(this.current()) - 1, t)
        }, r.prototype.onTransitionEnd = function(t) {
            if (t !== i && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
            this.leave("animating"), this.trigger("translated")
        }, r.prototype.viewport = function() {
            var i;
            return this.options.responsiveBaseElement !== e ? i = t(this.options.responsiveBaseElement).width() : e.innerWidth ? i = e.innerWidth : n.documentElement && n.documentElement.clientWidth ? i = n.documentElement.clientWidth : console.warn("Can not detect viewport width."), i
        }, r.prototype.replace = function(e) {
            this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
                return 1 === this.nodeType
            }).each(t.proxy(function(t, e) {
                e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, r.prototype.add = function(e, n) {
            var r = this.relative(this._current);
            n = n === i ? this._items.length : this.normalize(n, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
                content: e,
                position: n
            }), e = this.prepare(e), 0 === this._items.length || n === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[n - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[n].before(e), this._items.splice(n, 0, e), this._mergers.splice(n, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[r] && this.reset(this._items[r].index()), this.invalidate("items"), this.trigger("added", {
                content: e,
                position: n
            })
        }, r.prototype.remove = function(t) {
            (t = this.normalize(t, !0)) !== i && (this.trigger("remove", {
                content: this._items[t],
                position: t
            }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: t
            }))
        }, r.prototype.preloadAutoWidthImages = function(e) {
            e.each(t.proxy(function(e, n) {
                this.enter("pre-loading"), n = t(n), t(new Image).one("load", t.proxy(function(t) {
                    n.attr("src", t.target.src), n.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                }, this)).attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina"))
            }, this))
        }, r.prototype.destroy = function() {
            for (var i in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(n).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[i].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        }, r.prototype.op = function(t, e, n) {
            var i = this.settings.rtl;
            switch (e) {
                case "<":
                    return i ? t > n : t < n;
                case ">":
                    return i ? t < n : t > n;
                case ">=":
                    return i ? t <= n : t >= n;
                case "<=":
                    return i ? t >= n : t <= n
            }
        }, r.prototype.on = function(t, e, n, i) {
            t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n)
        }, r.prototype.off = function(t, e, n, i) {
            t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n)
        }, r.prototype.trigger = function(e, n, i, o, s) {
            var a = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                l = t.camelCase(t.grep(["on", e, i], function(t) {
                    return t
                }).join("-").toLowerCase()),
                c = t.Event([e, "owl", i || "carousel"].join(".").toLowerCase(), t.extend({
                    relatedTarget: this
                }, a, n));
            return this._supress[e] || (t.each(this._plugins, function(t, e) {
                e.onTrigger && e.onTrigger(c)
            }), this.register({
                type: r.Type.Event,
                name: e
            }), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
        }, r.prototype.enter = function(e) {
            t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
                this._states.current[e] === i && (this._states.current[e] = 0), this._states.current[e]++
            }, this))
        }, r.prototype.leave = function(e) {
            t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
                this._states.current[e]--
            }, this))
        }, r.prototype.register = function(e) {
            if (e.type === r.Type.Event) {
                if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                    var n = t.event.special[e.name]._default;
                    t.event.special[e.name]._default = function(t) {
                        return !n || !n.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : n.apply(this, arguments)
                    }, t.event.special[e.name].owl = !0
                }
            } else e.type === r.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(n, i) {
                return t.inArray(n, this._states.tags[e.name]) === i
            }, this)))
        }, r.prototype.suppress = function(e) {
            t.each(e, t.proxy(function(t, e) {
                this._supress[e] = !0
            }, this))
        }, r.prototype.release = function(e) {
            t.each(e, t.proxy(function(t, e) {
                delete this._supress[e]
            }, this))
        }, r.prototype.pointer = function(t) {
            var n = {
                x: null,
                y: null
            };
            return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (n.x = t.pageX, n.y = t.pageY) : (n.x = t.clientX, n.y = t.clientY), n
        }, r.prototype.isNumeric = function(t) {
            return !isNaN(parseFloat(t))
        }, r.prototype.difference = function(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }, t.fn.owlCarousel = function(e) {
            var n = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var i = t(this),
                    o = i.data("owl.carousel");
                o || (o = new r(this, "object" == typeof e && e), i.data("owl.carousel", o), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, n) {
                    o.register({
                        type: r.Type.Event,
                        name: n
                    }), o.$element.on(n + ".owl.carousel.core", t.proxy(function(t) {
                        t.namespace && t.relatedTarget !== this && (this.suppress([n]), o[n].apply(this, [].slice.call(arguments, 1)), this.release([n]))
                    }, o))
                })), "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, n)
            })
        }, t.fn.owlCarousel.Constructor = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        var r = function(e) {
            this._core = e, this._interval = null, this._visible = null, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        r.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        }, r.prototype.watch = function() {
            this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        }, r.prototype.refresh = function() {
            this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
        }, r.prototype.destroy = function() {
            var t, n;
            for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        var r = function(e) {
            this._core = e, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
                    if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
                        var n = this._core.settings,
                            i = n.center && Math.ceil(n.items / 2) || n.items,
                            r = n.center && -1 * i || 0,
                            o = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + r,
                            s = this._core.clones().length,
                            a = t.proxy(function(t, e) {
                                this.load(e)
                            }, this);
                        for (n.lazyLoadEager > 0 && (i += n.lazyLoadEager, n.loop && (o -= n.lazyLoadEager, i++)); r++ < i;) this.load(s / 2 + this._core.relative(o)), s && t.each(this._core.clones(this._core.relative(o)), a), o++
                    }
                }, this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        r.Defaults = {
            lazyLoad: !1,
            lazyLoadEager: 0
        }, r.prototype.load = function(n) {
            var i = this._core.$stage.children().eq(n),
                r = i && i.find(".owl-lazy");
            !r || t.inArray(i.get(0), this._loaded) > -1 || (r.each(t.proxy(function(n, i) {
                var r, o = t(i),
                    s = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src") || o.attr("data-srcset");
                this._core.trigger("load", {
                    element: o,
                    url: s
                }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() {
                    o.css("opacity", 1), this._core.trigger("loaded", {
                        element: o,
                        url: s
                    }, "lazy")
                }, this)).attr("src", s) : o.is("source") ? o.one("load.owl.lazy", t.proxy(function() {
                    this._core.trigger("loaded", {
                        element: o,
                        url: s
                    }, "lazy")
                }, this)).attr("srcset", s) : ((r = new Image).onload = t.proxy(function() {
                    o.css({
                        "background-image": 'url("' + s + '")',
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: o,
                        url: s
                    }, "lazy")
                }, this), r.src = s)
            }, this)), this._loaded.push(i.get(0)))
        }, r.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Lazy = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        var r = function(n) {
            this._core = n, this._previousHeight = null, this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
                }, this),
                "loaded.owl.lazy": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
            var i = this;
            t(e).on("load", function() {
                i._core.settings.autoHeight && i.update()
            }), t(e).resize(function() {
                i._core.settings.autoHeight && (null != i._intervalId && clearTimeout(i._intervalId), i._intervalId = setTimeout(function() {
                    i.update()
                }, 250))
            })
        };
        r.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, r.prototype.update = function() {
            var e = this._core._current,
                n = e + this._core.settings.items,
                i = this._core.settings.lazyLoad,
                r = this._core.$stage.children().toArray().slice(e, n),
                o = [],
                s = 0;
            t.each(r, function(e, n) {
                o.push(t(n).height())
            }), (s = Math.max.apply(null, o)) <= 1 && i && this._previousHeight && (s = this._previousHeight), this._previousHeight = s, this._core.$stage.parent().height(s).addClass(this._core.settings.autoHeightClass)
        }, r.prototype.destroy = function() {
            var t, e;
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        var r = function(e) {
            this._core = e, this._videos = {}, this._playing = null, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
                }, this),
                "refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" === t.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    if (e.namespace) {
                        var n = t(e.content).find(".owl-video");
                        n.length && (n.css("display", "none"), this.fetch(n, t(e.content)))
                    }
                }, this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
                this.play(t)
            }, this))
        };
        r.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, r.prototype.fetch = function(t, e) {
            var n = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
                i = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                r = t.attr("data-width") || this._core.settings.videoWidth,
                o = t.attr("data-height") || this._core.settings.videoHeight,
                s = t.attr("href");
            if (!s) throw new Error("Missing video URL.");
            if ((i = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) n = "youtube";
            else if (i[3].indexOf("vimeo") > -1) n = "vimeo";
            else {
                if (!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                n = "vzaar"
            }
            i = i[6], this._videos[s] = {
                type: n,
                id: i,
                width: r,
                height: o
            }, e.attr("data-video", s), this.thumbnail(t, this._videos[s])
        }, r.prototype.thumbnail = function(e, n) {
            var i, r, o = n.width && n.height ? "width:" + n.width + "px;height:" + n.height + "px;" : "",
                s = e.find("img"),
                a = "src",
                l = "",
                c = this._core.settings,
                u = function(n) {
                    '<div class="owl-video-play-icon"></div>',
                    i = c.lazyLoad ? t("<div/>", {
                        class: "owl-video-tn " + l,
                        srcType: n
                    }) : t("<div/>", {
                        class: "owl-video-tn",
                        style: "opacity:1;background-image:url(" + n + ")"
                    }),
                    e.after(i),
                    e.after('<div class="owl-video-play-icon"></div>')
                };
            if (e.wrap(t("<div/>", {
                    class: "owl-video-wrapper",
                    style: o
                })), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), s.length) return u(s.attr(a)), s.remove(), !1;
            "youtube" === n.type ? (r = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg", u(r)) : "vimeo" === n.type ? t.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + n.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    r = t[0].thumbnail_large, u(r)
                }
            }) : "vzaar" === n.type && t.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + n.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    r = t.framegrab_url, u(r)
                }
            })
        }, r.prototype.stop = function() {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
        }, r.prototype.play = function(e) {
            var n, i = t(e.target).closest("." + this._core.settings.itemClass),
                r = this._videos[i.attr("data-video")],
                o = r.width || "100%",
                s = r.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), (n = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", s), n.attr("width", o), "youtube" === r.type ? n.attr("src", "//www.youtube.com/embed/" + r.id + "?autoplay=1&rel=0&v=" + r.id) : "vimeo" === r.type ? n.attr("src", "//player.vimeo.com/video/" + r.id + "?autoplay=1") : "vzaar" === r.type && n.attr("src", "//view.vzaar.com/" + r.id + "/player?autoplay=true"), t(n).wrap('<div class="owl-video-frame" />').insertAfter(i.find(".owl-video")), this._playing = i.addClass("owl-video-playing"))
        }, r.prototype.isInFullScreen = function() {
            var e = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
            return e && t(e).parent().hasClass("owl-video-frame")
        }, r.prototype.destroy = function() {
            var t, e;
            for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Video = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        var r = function(e) {
            this.core = e, this.core.options = t.extend({}, r.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = {
                "change.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                    t.namespace && (this.swapping = "translated" == t.type)
                }, this),
                "translate.owl.carousel": t.proxy(function(t) {
                    t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        r.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, r.prototype.swap = function() {
            if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
                this.core.speed(0);
                var e, n = t.proxy(this.clear, this),
                    i = this.core.$stage.children().eq(this.previous),
                    r = this.core.$stage.children().eq(this.next),
                    o = this.core.settings.animateIn,
                    s = this.core.settings.animateOut;
                this.core.current() !== this.previous && (s && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(t.support.animation.end, n).css({
                    left: e + "px"
                }).addClass("animated owl-animated-out").addClass(s)), o && r.one(t.support.animation.end, n).addClass("animated owl-animated-in").addClass(o))
            }
        }, r.prototype.clear = function(e) {
            t(e.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
        }, r.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Animate = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        var r = function(e) {
            this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
                }, this),
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": t.proxy(function(t, e, n) {
                    t.namespace && this.play(e, n)
                }, this),
                "stop.owl.autoplay": t.proxy(function(t) {
                    t.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this),
                "touchstart.owl.core": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "touchend.owl.core": t.proxy(function() {
                    this._core.settings.autoplayHoverPause && this.play()
                }, this)
            }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, r.Defaults, this._core.options)
        };
        r.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, r.prototype._next = function(i) {
            this._call = e.setTimeout(t.proxy(this._next, this, i), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || n.hidden || this._core.next(i || this._core.settings.autoplaySpeed)
        }, r.prototype.read = function() {
            return (new Date).getTime() - this._time
        }, r.prototype.play = function(n, i) {
            var r;
            this._core.is("rotating") || this._core.enter("rotating"), n = n || this._core.settings.autoplayTimeout, r = Math.min(this._time % (this._timeout || n), n), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % n - r, this._timeout = n, this._call = e.setTimeout(t.proxy(this._next, this, i), n - r)
        }, r.prototype.stop = function() {
            this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating"))
        }, r.prototype.pause = function() {
            this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call))
        }, r.prototype.destroy = function() {
            var t, e;
            for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.autoplay = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        "use strict";
        var r = function(e) {
            this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": t.proxy(function(e) {
                    e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                }, this),
                "added.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
                }, this),
                "changed.owl.carousel": t.proxy(function(t) {
                    t.namespace && "position" == t.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": t.proxy(function(t) {
                    t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                }, this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        r.Defaults = {
            nav: !1,
            navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
            navSpeed: !1,
            navElement: 'button type="button" role="presentation"',
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        }, r.prototype.initialize = function() {
            var e, n = this._core.settings;
            for (e in this._controls.$relative = (n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) {
                    this.prev(n.navSpeed)
                }, this)), this._controls.$next = t("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) {
                    this.next(n.navSpeed)
                }, this)), n.dotsData || (this._templates = [t('<button role="button">').addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? t(n.dotsContainer) : t("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy(function(e) {
                    var i = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                    e.preventDefault(), this.to(i, n.dotsSpeed)
                }, this)), this._overrides) this._core[e] = t.proxy(this[e], this)
        }, r.prototype.destroy = function() {
            var t, e, n, i, r;
            for (t in r = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]);
            for (e in this._controls) "$relative" === e && r.navContainer ? this._controls[e].html("") : this._controls[e].remove();
            for (i in this.overides) this._core[i] = this._overrides[i];
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
        }, r.prototype.update = function() {
            var t, e, n = this._core.clones().length / 2,
                i = n + this._core.items().length,
                r = this._core.maximum(!0),
                o = this._core.settings,
                s = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
            if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
                for (this._pages = [], t = n, e = 0, 0; t < i; t++) {
                    if (e >= s || 0 === e) {
                        if (this._pages.push({
                                start: Math.min(r, t - n),
                                end: t - n + s - 1
                            }), Math.min(r, t - n) === r) break;
                        e = 0, 0
                    }
                    e += this._core.mergers(this._core.relative(t))
                }
        }, r.prototype.draw = function() {
            var e, n = this._core.settings,
                i = this._core.items().length <= n.items,
                r = this._core.relative(this._core.current()),
                o = n.loop || n.rewind;
            this._controls.$relative.toggleClass("disabled", !n.nav || i), n.nav && (this._controls.$previous.toggleClass("disabled", !o && r <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && r >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !n.dots || i), n.dots && (e = this._pages.length - this._controls.$absolute.children().length, n.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
        }, r.prototype.onTrigger = function(e) {
            var n = this._core.settings;
            e.page = {
                index: t.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items)
            }
        }, r.prototype.current = function() {
            var e = this._core.relative(this._core.current());
            return t.grep(this._pages, t.proxy(function(t, n) {
                return t.start <= e && t.end >= e
            }, this)).pop()
        }, r.prototype.getPosition = function(e) {
            var n, i, r = this._core.settings;
            return "page" == r.slideBy ? (n = t.inArray(this.current(), this._pages), i = this._pages.length, e ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, e ? n += r.slideBy : n -= r.slideBy), n
        }, r.prototype.next = function(e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
        }, r.prototype.prev = function(e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
        }, r.prototype.to = function(e, n, i) {
            var r;
            !i && this._pages.length ? (r = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % r + r) % r].start, n)) : t.proxy(this._overrides.to, this._core)(e, n)
        }, t.fn.owlCarousel.Constructor.Plugins.Navigation = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        "use strict";
        var r = function(n) {
            this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(n) {
                    n.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    if (e.namespace) {
                        var n = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!n) return;
                        this._hashes[n] = e.content
                    }
                }, this),
                "changed.owl.carousel": t.proxy(function(n) {
                    if (n.namespace && "position" === n.property.name) {
                        var i = this._core.items(this._core.relative(this._core.current())),
                            r = t.map(this._hashes, function(t, e) {
                                return t === i ? e : null
                            }).join();
                        if (!r || e.location.hash.slice(1) === r) return;
                        e.location.hash = r
                    }
                }, this)
            }, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function(t) {
                var n = e.location.hash.substring(1),
                    i = this._core.$stage.children(),
                    r = this._hashes[n] && i.index(this._hashes[n]);
                void 0 !== r && r !== this._core.current() && this._core.to(this._core.relative(r), !1, !0)
            }, this))
        };
        r.Defaults = {
            URLhashListener: !1
        }, r.prototype.destroy = function() {
            var n, i;
            for (n in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(n, this._handlers[n]);
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Hash = r
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, n, i) {
        function r(e, n) {
            var r = !1,
                o = e.charAt(0).toUpperCase() + e.slice(1);
            return t.each((e + " " + a.join(o + " ") + o).split(" "), function(t, e) {
                if (s[e] !== i) return r = !n || e, !1
            }), r
        }

        function o(t) {
            return r(t, !0)
        }
        var s = t("<support>").get(0).style,
            a = "Webkit Moz O ms".split(" "),
            l = {
                transition: {
                    end: {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        transition: "transitionend"
                    }
                },
                animation: {
                    end: {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd",
                        animation: "animationend"
                    }
                }
            },
            c = function() {
                return !!r("transform")
            },
            u = function() {
                return !!r("perspective")
            },
            h = function() {
                return !!r("animation")
            };
        (function() {
            return !!r("transition")
        })() && (t.support.transition = new String(o("transition")), t.support.transition.end = l.transition.end[t.support.transition]), h() && (t.support.animation = new String(o("animation")), t.support.animation.end = l.animation.end[t.support.animation]), c() && (t.support.transform = new String(o("transform")), t.support.transform3d = u())
    }(window.Zepto || window.jQuery, window, document),
    function(t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Parallax = t()
    }(function() {
        return function t(e, n, i) {
            function r(s, a) {
                if (!n[s]) {
                    if (!e[s]) {
                        var l = "function" == typeof require && require;
                        if (!a && l) return l(s, !0);
                        if (o) return o(s, !0);
                        var c = new Error("Cannot find module '" + s + "'");
                        throw c.code = "MODULE_NOT_FOUND", c
                    }
                    var u = n[s] = {
                        exports: {}
                    };
                    e[s][0].call(u.exports, function(t) {
                        return r(e[s][1][t] || t)
                    }, u, u.exports, t, e, n, i)
                }
                return n[s].exports
            }
            for (var o = "function" == typeof require && require, s = 0; s < i.length; s++) r(i[s]);
            return r
        }({
            1: [function(t, e, n) {
                "use strict";
                var i = Object.getOwnPropertySymbols,
                    r = Object.prototype.hasOwnProperty,
                    o = Object.prototype.propertyIsEnumerable;
                e.exports = function() {
                    try {
                        if (!Object.assign) return !1;
                        var t = new String("abc");
                        if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                        for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
                        if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                                return e[t]
                            }).join("")) return !1;
                        var i = {};
                        return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                            i[t] = t
                        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
                    } catch (t) {
                        return !1
                    }
                }() ? Object.assign : function(t, e) {
                    for (var n, s, a = function(t) {
                            if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                            return Object(t)
                        }(t), l = 1; l < arguments.length; l++) {
                        for (var c in n = Object(arguments[l])) r.call(n, c) && (a[c] = n[c]);
                        if (i) {
                            s = i(n);
                            for (var u = 0; u < s.length; u++) o.call(n, s[u]) && (a[s[u]] = n[s[u]])
                        }
                    }
                    return a
                }
            }, {}],
            2: [function(t, e, n) {
                (function(t) {
                    (function() {
                        var n, i, r, o, s, a;
                        "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                            return performance.now()
                        } : null != t && t.hrtime ? (e.exports = function() {
                            return (n() - s) / 1e6
                        }, i = t.hrtime, o = (n = function() {
                            var t;
                            return 1e9 * (t = i())[0] + t[1]
                        })(), a = 1e9 * t.uptime(), s = o - a) : Date.now ? (e.exports = function() {
                            return Date.now() - r
                        }, r = Date.now()) : (e.exports = function() {
                            return (new Date).getTime() - r
                        }, r = (new Date).getTime())
                    }).call(this)
                }).call(this, t("_process"))
            }, {
                _process: 3
            }],
            3: [function(t, e, n) {
                function i() {
                    throw new Error("setTimeout has not been defined")
                }

                function r() {
                    throw new Error("clearTimeout has not been defined")
                }

                function o(t) {
                    if (u === setTimeout) return setTimeout(t, 0);
                    if ((u === i || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
                    try {
                        return u(t, 0)
                    } catch (e) {
                        try {
                            return u.call(null, t, 0)
                        } catch (e) {
                            return u.call(this, t, 0)
                        }
                    }
                }

                function s() {
                    m && p && (m = !1, p.length ? f = p.concat(f) : g = -1, f.length && a())
                }

                function a() {
                    if (!m) {
                        var t = o(s);
                        m = !0;
                        for (var e = f.length; e;) {
                            for (p = f, f = []; ++g < e;) p && p[g].run();
                            g = -1, e = f.length
                        }
                        p = null, m = !1,
                            function(t) {
                                if (h === clearTimeout) return clearTimeout(t);
                                if ((h === r || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t);
                                try {
                                    h(t)
                                } catch (e) {
                                    try {
                                        return h.call(null, t)
                                    } catch (e) {
                                        return h.call(this, t)
                                    }
                                }
                            }(t)
                    }
                }

                function l(t, e) {
                    this.fun = t, this.array = e
                }

                function c() {}
                var u, h, d = e.exports = {};
                ! function() {
                    try {
                        u = "function" == typeof setTimeout ? setTimeout : i
                    } catch (t) {
                        u = i
                    }
                    try {
                        h = "function" == typeof clearTimeout ? clearTimeout : r
                    } catch (t) {
                        h = r
                    }
                }();
                var p, f = [],
                    m = !1,
                    g = -1;
                d.nextTick = function(t) {
                    var e = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    f.push(new l(t, e)), 1 !== f.length || m || o(a)
                }, l.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = c, d.addListener = c, d.once = c, d.off = c, d.removeListener = c, d.removeAllListeners = c, d.emit = c, d.prependListener = c, d.prependOnceListener = c, d.listeners = function(t) {
                    return []
                }, d.binding = function(t) {
                    throw new Error("process.binding is not supported")
                }, d.cwd = function() {
                    return "/"
                }, d.chdir = function(t) {
                    throw new Error("process.chdir is not supported")
                }, d.umask = function() {
                    return 0
                }
            }, {}],
            4: [function(t, e, n) {
                (function(n) {
                    for (var i = t("performance-now"), r = "undefined" == typeof window ? n : window, o = ["moz", "webkit"], s = "AnimationFrame", a = r["request" + s], l = r["cancel" + s] || r["cancelRequest" + s], c = 0; !a && c < o.length; c++) a = r[o[c] + "Request" + s], l = r[o[c] + "Cancel" + s] || r[o[c] + "CancelRequest" + s];
                    if (!a || !l) {
                        var u = 0,
                            h = 0,
                            d = [];
                        a = function(t) {
                            if (0 === d.length) {
                                var e = i(),
                                    n = Math.max(0, 1e3 / 60 - (e - u));
                                u = n + e, setTimeout(function() {
                                    var t = d.slice(0);
                                    d.length = 0;
                                    for (var e = 0; e < t.length; e++)
                                        if (!t[e].cancelled) try {
                                            t[e].callback(u)
                                        } catch (t) {
                                            setTimeout(function() {
                                                throw t
                                            }, 0)
                                        }
                                }, Math.round(n))
                            }
                            return d.push({
                                handle: ++h,
                                callback: t,
                                cancelled: !1
                            }), h
                        }, l = function(t) {
                            for (var e = 0; e < d.length; e++) d[e].handle === t && (d[e].cancelled = !0)
                        }
                    }
                    e.exports = function(t) {
                        return a.call(r, t)
                    }, e.exports.cancel = function() {
                        l.apply(r, arguments)
                    }, e.exports.polyfill = function() {
                        r.requestAnimationFrame = a, r.cancelAnimationFrame = l
                    }
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "performance-now": 2
            }],
            5: [function(t, e, n) {
                "use strict";
                var i = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                            }
                        }
                        return function(e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e
                        }
                    }(),
                    r = t("raf"),
                    o = t("object-assign"),
                    s = {
                        propertyCache: {},
                        vendors: [null, ["-webkit-", "webkit"],
                            ["-moz-", "Moz"],
                            ["-o-", "O"],
                            ["-ms-", "ms"]
                        ],
                        clamp: function(t, e, n) {
                            return e < n ? t < e ? e : t > n ? n : t : t < n ? n : t > e ? e : t
                        },
                        data: function(t, e) {
                            return s.deserialize(t.getAttribute("data-" + e))
                        },
                        deserialize: function(t) {
                            return "true" === t || "false" !== t && ("null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t)
                        },
                        camelCase: function(t) {
                            return t.replace(/-+(.)?/g, function(t, e) {
                                return e ? e.toUpperCase() : ""
                            })
                        },
                        accelerate: function(t) {
                            s.css(t, "transform", "translate3d(0,0,0) rotate(0.0001deg)"), s.css(t, "transform-style", "preserve-3d"), s.css(t, "backface-visibility", "hidden")
                        },
                        transformSupport: function(t) {
                            for (var e = document.createElement("div"), n = !1, i = null, r = !1, o = null, a = null, l = 0, c = s.vendors.length; l < c; l++)
                                if (null !== s.vendors[l] ? (o = s.vendors[l][0] + "transform", a = s.vendors[l][1] + "Transform") : (o = "transform", a = "transform"), void 0 !== e.style[a]) {
                                    n = !0;
                                    break
                                } switch (t) {
                                case "2D":
                                    r = n;
                                    break;
                                case "3D":
                                    if (n) {
                                        var u = document.body || document.createElement("body"),
                                            h = document.documentElement,
                                            d = h.style.overflow,
                                            p = !1;
                                        document.body || (p = !0, h.style.overflow = "hidden", h.appendChild(u), u.style.overflow = "hidden", u.style.background = ""), u.appendChild(e), e.style[a] = "translate3d(1px,1px,1px)", r = void 0 !== (i = window.getComputedStyle(e).getPropertyValue(o)) && i.length > 0 && "none" !== i, h.style.overflow = d, u.removeChild(e), p && (u.removeAttribute("style"), u.parentNode.removeChild(u))
                                    }
                            }
                            return r
                        },
                        css: function(t, e, n) {
                            var i = s.propertyCache[e];
                            if (!i)
                                for (var r = 0, o = s.vendors.length; r < o; r++)
                                    if (i = null !== s.vendors[r] ? s.camelCase(s.vendors[r][1] + "-" + e) : e, void 0 !== t.style[i]) {
                                        s.propertyCache[e] = i;
                                        break
                                    } t.style[i] = n
                        }
                    },
                    a = {
                        relativeInput: !1,
                        clipRelativeInput: !1,
                        inputElement: null,
                        hoverOnly: !1,
                        calibrationThreshold: 100,
                        calibrationDelay: 500,
                        supportDelay: 500,
                        calibrateX: !1,
                        calibrateY: !0,
                        invertX: !0,
                        invertY: !0,
                        limitX: !1,
                        limitY: !1,
                        scalarX: 10,
                        scalarY: 10,
                        frictionX: .1,
                        frictionY: .1,
                        originX: .5,
                        originY: .5,
                        pointerEvents: !1,
                        precision: 1,
                        onReady: null,
                        selector: null
                    },
                    l = function() {
                        function t(e, n) {
                            (function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            })(this, t), this.element = e;
                            var i = {
                                calibrateX: s.data(this.element, "calibrate-x"),
                                calibrateY: s.data(this.element, "calibrate-y"),
                                invertX: s.data(this.element, "invert-x"),
                                invertY: s.data(this.element, "invert-y"),
                                limitX: s.data(this.element, "limit-x"),
                                limitY: s.data(this.element, "limit-y"),
                                scalarX: s.data(this.element, "scalar-x"),
                                scalarY: s.data(this.element, "scalar-y"),
                                frictionX: s.data(this.element, "friction-x"),
                                frictionY: s.data(this.element, "friction-y"),
                                originX: s.data(this.element, "origin-x"),
                                originY: s.data(this.element, "origin-y"),
                                pointerEvents: s.data(this.element, "pointer-events"),
                                precision: s.data(this.element, "precision"),
                                relativeInput: s.data(this.element, "relative-input"),
                                clipRelativeInput: s.data(this.element, "clip-relative-input"),
                                hoverOnly: s.data(this.element, "hover-only"),
                                inputElement: document.querySelector(s.data(this.element, "input-element")),
                                selector: s.data(this.element, "selector")
                            };
                            for (var r in i) null === i[r] && delete i[r];
                            o(this, a, i, n), this.inputElement || (this.inputElement = this.element), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depthsX = [], this.depthsY = [], this.raf = null, this.bounds = null, this.elementPositionX = 0, this.elementPositionY = 0, this.elementWidth = 0, this.elementHeight = 0, this.elementCenterX = 0, this.elementCenterY = 0, this.elementRangeX = 0, this.elementRangeY = 0, this.calibrationX = 0, this.calibrationY = 0, this.inputX = 0, this.inputY = 0, this.motionX = 0, this.motionY = 0, this.velocityX = 0, this.velocityY = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onDeviceMotion = this.onDeviceMotion.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onMotionTimer = this.onMotionTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.windowWidth = null, this.windowHeight = null, this.windowCenterX = null, this.windowCenterY = null, this.windowRadiusX = null, this.windowRadiusY = null, this.portrait = !1, this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), this.motionSupport = !!window.DeviceMotionEvent && !this.desktop, this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop, this.orientationStatus = 0, this.motionStatus = 0, this.initialise()
                        }
                        return i(t, [{
                            key: "initialise",
                            value: function() {
                                void 0 === this.transform2DSupport && (this.transform2DSupport = s.transformSupport("2D"), this.transform3DSupport = s.transformSupport("3D")), this.transform3DSupport && s.accelerate(this.element), "static" === window.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"), this.pointerEvents || (this.element.style.pointerEvents = "none"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
                            }
                        }, {
                            key: "doReadyCallback",
                            value: function() {
                                this.onReady && this.onReady()
                            }
                        }, {
                            key: "updateLayers",
                            value: function() {
                                this.selector ? this.layers = this.element.querySelectorAll(this.selector) : this.layers = this.element.children, this.layers.length || console.warn("ParallaxJS: Your scene does not have any layers."), this.depthsX = [], this.depthsY = [];
                                for (var t = 0; t < this.layers.length; t++) {
                                    var e = this.layers[t];
                                    this.transform3DSupport && s.accelerate(e), e.style.position = t ? "absolute" : "relative", e.style.display = "block", e.style.left = 0, e.style.top = 0;
                                    var n = s.data(e, "depth") || 0;
                                    this.depthsX.push(s.data(e, "depth-x") || n), this.depthsY.push(s.data(e, "depth-y") || n)
                                }
                            }
                        }, {
                            key: "updateDimensions",
                            value: function() {
                                this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.windowCenterX = this.windowWidth * this.originX, this.windowCenterY = this.windowHeight * this.originY, this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX), this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY)
                            }
                        }, {
                            key: "updateBounds",
                            value: function() {
                                this.bounds = this.inputElement.getBoundingClientRect(), this.elementPositionX = this.bounds.left, this.elementPositionY = this.bounds.top, this.elementWidth = this.bounds.width, this.elementHeight = this.bounds.height, this.elementCenterX = this.elementWidth * this.originX, this.elementCenterY = this.elementHeight * this.originY, this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX), this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY)
                            }
                        }, {
                            key: "queueCalibration",
                            value: function(t) {
                                clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
                            }
                        }, {
                            key: "enable",
                            value: function() {
                                this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = !1, window.addEventListener("deviceorientation", this.onDeviceOrientation), this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)) : this.motionSupport ? (this.portrait = !1, window.addEventListener("devicemotion", this.onDeviceMotion), this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)) : (this.calibrationX = 0, this.calibrationY = 0, this.portrait = !1, window.addEventListener("mousemove", this.onMouseMove), this.doReadyCallback()), window.addEventListener("resize", this.onWindowResize), this.raf = r(this.onAnimationFrame))
                            }
                        }, {
                            key: "disable",
                            value: function() {
                                this.enabled && (this.enabled = !1, this.orientationSupport ? window.removeEventListener("deviceorientation", this.onDeviceOrientation) : this.motionSupport ? window.removeEventListener("devicemotion", this.onDeviceMotion) : window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("resize", this.onWindowResize), r.cancel(this.raf))
                            }
                        }, {
                            key: "calibrate",
                            value: function(t, e) {
                                this.calibrateX = void 0 === t ? this.calibrateX : t, this.calibrateY = void 0 === e ? this.calibrateY : e
                            }
                        }, {
                            key: "invert",
                            value: function(t, e) {
                                this.invertX = void 0 === t ? this.invertX : t, this.invertY = void 0 === e ? this.invertY : e
                            }
                        }, {
                            key: "friction",
                            value: function(t, e) {
                                this.frictionX = void 0 === t ? this.frictionX : t, this.frictionY = void 0 === e ? this.frictionY : e
                            }
                        }, {
                            key: "scalar",
                            value: function(t, e) {
                                this.scalarX = void 0 === t ? this.scalarX : t, this.scalarY = void 0 === e ? this.scalarY : e
                            }
                        }, {
                            key: "limit",
                            value: function(t, e) {
                                this.limitX = void 0 === t ? this.limitX : t, this.limitY = void 0 === e ? this.limitY : e
                            }
                        }, {
                            key: "origin",
                            value: function(t, e) {
                                this.originX = void 0 === t ? this.originX : t, this.originY = void 0 === e ? this.originY : e
                            }
                        }, {
                            key: "setInputElement",
                            value: function(t) {
                                this.inputElement = t, this.updateDimensions()
                            }
                        }, {
                            key: "setPosition",
                            value: function(t, e, n) {
                                e = e.toFixed(this.precision) + "px", n = n.toFixed(this.precision) + "px", this.transform3DSupport ? s.css(t, "transform", "translate3d(" + e + "," + n + ",0)") : this.transform2DSupport ? s.css(t, "transform", "translate(" + e + "," + n + ")") : (t.style.left = e, t.style.top = n)
                            }
                        }, {
                            key: "onOrientationTimer",
                            value: function() {
                                this.orientationSupport && 0 === this.orientationStatus ? (this.disable(), this.orientationSupport = !1, this.enable()) : this.doReadyCallback()
                            }
                        }, {
                            key: "onMotionTimer",
                            value: function() {
                                this.motionSupport && 0 === this.motionStatus ? (this.disable(), this.motionSupport = !1, this.enable()) : this.doReadyCallback()
                            }
                        }, {
                            key: "onCalibrationTimer",
                            value: function() {
                                this.calibrationFlag = !0
                            }
                        }, {
                            key: "onWindowResize",
                            value: function() {
                                this.updateDimensions()
                            }
                        }, {
                            key: "onAnimationFrame",
                            value: function() {
                                this.updateBounds();
                                var t = this.inputX - this.calibrationX,
                                    e = this.inputY - this.calibrationY;
                                (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.motionX = this.calibrateX ? e : this.inputY, this.motionY = this.calibrateY ? t : this.inputX) : (this.motionX = this.calibrateX ? t : this.inputX, this.motionY = this.calibrateY ? e : this.inputY), this.motionX *= this.elementWidth * (this.scalarX / 100), this.motionY *= this.elementHeight * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.motionX = s.clamp(this.motionX, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.motionY = s.clamp(this.motionY, -this.limitY, this.limitY)), this.velocityX += (this.motionX - this.velocityX) * this.frictionX, this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
                                for (var n = 0; n < this.layers.length; n++) {
                                    var i = this.layers[n],
                                        o = this.depthsX[n],
                                        a = this.depthsY[n],
                                        l = this.velocityX * (o * (this.invertX ? -1 : 1)),
                                        c = this.velocityY * (a * (this.invertY ? -1 : 1));
                                    this.setPosition(i, l, c)
                                }
                                this.raf = r(this.onAnimationFrame)
                            }
                        }, {
                            key: "rotate",
                            value: function(t, e) {
                                var n = (t || 0) / 30,
                                    i = (e || 0) / 30,
                                    r = this.windowHeight > this.windowWidth;
                                this.portrait !== r && (this.portrait = r, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.calibrationX = n, this.calibrationY = i), this.inputX = n, this.inputY = i
                            }
                        }, {
                            key: "onDeviceOrientation",
                            value: function(t) {
                                var e = t.beta,
                                    n = t.gamma;
                                null !== e && null !== n && (this.orientationStatus = 1, this.rotate(e, n))
                            }
                        }, {
                            key: "onDeviceMotion",
                            value: function(t) {
                                var e = t.rotationRate.beta,
                                    n = t.rotationRate.gamma;
                                null !== e && null !== n && (this.motionStatus = 1, this.rotate(e, n))
                            }
                        }, {
                            key: "onMouseMove",
                            value: function(t) {
                                var e = t.clientX,
                                    n = t.clientY;
                                if (this.hoverOnly && (e < this.elementPositionX || e > this.elementPositionX + this.elementWidth || n < this.elementPositionY || n > this.elementPositionY + this.elementHeight)) return this.inputX = 0, void(this.inputY = 0);
                                this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.elementPositionX), e = Math.min(e, this.elementPositionX + this.elementWidth), n = Math.max(n, this.elementPositionY), n = Math.min(n, this.elementPositionY + this.elementHeight)), this.elementRangeX && this.elementRangeY && (this.inputX = (e - this.elementPositionX - this.elementCenterX) / this.elementRangeX, this.inputY = (n - this.elementPositionY - this.elementCenterY) / this.elementRangeY)) : this.windowRadiusX && this.windowRadiusY && (this.inputX = (e - this.windowCenterX) / this.windowRadiusX, this.inputY = (n - this.windowCenterY) / this.windowRadiusY)
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.disable(), clearTimeout(this.calibrationTimer), clearTimeout(this.detectionTimer), this.element.removeAttribute("style");
                                for (var t = 0; t < this.layers.length; t++) this.layers[t].removeAttribute("style");
                                delete this.element, delete this.layers
                            }
                        }, {
                            key: "version",
                            value: function() {
                                return "3.1.0"
                            }
                        }]), t
                    }();
                e.exports = l
            }, {
                "object-assign": 1,
                raf: 4
            }]
        }, {}, [5])(5)
    }), $(document).ready(() => {
        $("form").submit(function(t) {
            t.preventDefault();
            const e = this,
                n = $(this).serializeArray(),
                i = {};
            $(n).each(function(t, e) {
                i[e.name] = e.value
            }), $.ajax({
                url: `${window.location.origin}/send/validate`,
                success: function(t) {
                    i.key = t, $.post(window.location.href, i, function(t) {
                        e.reset(), $(".modal").modal("hide"), $("#feedback-message").text(t), setTimeout(function() {
                            $("#modal-feedback").modal("show")
                        }, 500), setTimeout(function() {
                            $("#modal-feedback").modal("hide")
                        }, 3500)
                    })
                }
            })
        });
        const t = document.querySelectorAll(".banner-info-scene"),
            e = document.querySelectorAll(".page-section-category-scene");
        Array.prototype.map.call([...t, ...e], t => new Parallax(t));
        $('[href*="tel:"]').on("click", function() {
            const t = $(this).attr("href").slice(4);
            $.post(`${window.location.origin}/track/mobiletrack`, {
                phone: t
            })
        });
        $(".service-checkbox-parent").on("click", function(t) {
            if ("A" !== t.target.tagName) {
                t.preventDefault();
                const e = $(this).find(".service-checkbox")[0].checked;
                $(this).find(".service-checkbox")[0].checked = !e,
                    function(t) {
                        let e;
                        const n = [],
                            i = $(".service-checkbox:checked"),
                            r = i.length,
                            o = Array.prototype.reduce.call(i, (t, i) => {
                                e = $(i).data("product");
                                let r = String($(i).data("price"));
                                return -1 !== r.indexOf("от") && (r = r.slice(3)), r = parseInt(r) ? parseInt(r) : 0, n.push($(i).data("service")), t + r
                            }, 0);
                        let s;
                        s = r % 10 == 0 || r % 10 > 4 && r % 10 < 10 || r > 4 && r < 21 ? `${r} услуг` : r % 10 == 1 ? `${r} услугa` : `${r} услуги`, $(".service-count").text(s), $(".service-total-price").text(o), r ? ($(".fixed-bar").addClass("active"), $('[data-target="#modal-order"]').data("price", o), $('[data-target="#modal-order"]').data("product", e), $('[data-target="#modal-order"]').data("services", n.join(","))) : ($(".fixed-bar").removeClass("active"), $('[data-target="#modal-order"]').data("price", ""), $('[data-target="#modal-order"]').data("product", ""), $('[data-target="#modal-order"]').data("services", ""))
                    }()
            }
        }), $(".repair-tabs").on("shown.bs.tab", t => {
            $(".repair-tab").removeClass("active"), $(`.${$(t.target).data("tab")}`).addClass("active")
        }), $(".link-card-category").on("click", t => {
            "SELECT" !== t.target.tagName && "OPTION" !== t.target.tagName || t.preventDefault()
        }), $(".device-radio-parent").on("click", function(t) {
            if ("A" !== t.target.tagName) {
                t.preventDefault();
                const e = $(this).find(".device-radio")[0].checked;
                $(this).find(".device-radio")[0].checked = !e,
                    function(t) {
                        let e, n, i;
                        const r = $(".device-radio:checked"),
                            o = r.length,
                            s = Array.prototype.reduce.call(r, (t, r) => {
                                e = $(r).data("product");
                                let o = String($(r).data("price"));
                                return -1 !== o.indexOf("от") && (o = o.slice(3)), o = parseInt(o) ? parseInt(o) : 0, n = $(r).data("service"), i = $(r).data("service-title"), t + o
                            }, 0);
                        let a;
                        a = o % 10 == 0 || o % 10 > 4 && o % 10 < 10 || o > 4 && o < 21 ? `${o} девайсов` : o % 10 == 1 ? `${o} девайс` : `${o} девайса`, $(".device-count").text(a), $(".device-total-price").text(s), $(".service-title").text(i), o ? ($(".fixed-bar").addClass("active"), $('[data-target="#modal-order"]').data("price", s), $('[data-target="#modal-order"]').data("product", e), $('[data-target="#modal-order"]').data("services", n)) : ($(".fixed-bar").removeClass("active"), $('[data-target="#modal-order"]').data("price", ""), $('[data-target="#modal-order"]').data("product", ""), $('[data-target="#modal-order"]').data("services", ""))
                    }()
            }
        }), $('[data-target="#modal-order"]').on("click", function(t) {
            $("#modal-order-total-price").text($(this).data("price")), $("#modal-order-product").val($(this).data("product")), $("#modal-order-services").val($(this).data("services"))
        }), $(".link-select > option:selected").removeProp("selected"), $(".link-select > option:first-child").prop("selected", !0), $(".link-select").on("change", function(t) {
            const {
                value: e
            } = t.target;
            $(t.target).data("id") === $(t.target).find("option:selected").data("parent") && (window.location.pathname = e)
        }), autosize($("textarea")), $(".mobile-menu-opener").on("click", () => {
            $("body").addClass("mobile-active mobile-active-menu-content")
        }), setTimeout(() => {
            $('[style*="spikmi"]').remove()
        }, 1e3), $(".mobile-overlay").on("click", () => {
            $("body").attr("class", "")
        }), $(".card-collapsed-toggler").click(function(t) {
            t.preventDefault();
            const e = $(this).closest(".owl-carousel"),
                n = $(this).closest(".owl-item");
            e.trigger("to.owl.carousel", n.index()), $(this).closest(".card").hasClass("show") ? $(this).text("Развернуть") : $(this).text("Свернуть"), $(this).closest(".card").toggleClass("show")
        });
        $(".img-lazy").Lazy({
            effect: "fadeIn",
            effectTime: 350,
            threshold: 100,
            chainable: !1
        });


        function n(t) {
            const e = $(this),
                n = e.outerWidth(),
                i = e.position().left,
                r = e.parent(),
                o = r.outerWidth(),
                s = r.scrollLeft(),
                a = n + i;
            i < 0 ? r.animate({
                scrollLeft: s + i - 16
            }) : i + n > o && r.animate({
                scrollLeft: s + (a - o) + 8
            })
        }
        $(".tab .tab-col").on("click", n), $(".carousel-cards").each((t, e) => {
            $(e).owlCarousel({
                loop: !1,
                margin: 30,
                nav: !0,
                items: $(e).data("items"),
                dots: !1,
                stageClass: "carousel-cards-stage",
                stageOuterClass: "carousel-cards-stage-outer",
                navClass: ["carousel-control carousel-control-prev", "carousel-control carousel-control-next"],
                navText: ['<img src="/assets/img/svg/fragments/left.svg" alt="Предыдущая" class="img-responsive"><span class="sr-only">Предыдущая</span>', '<img src="/assets/img/svg/fragments/right.svg" alt="Следующая" class="img-responsive"><span class="sr-only">Следующая</span>'],
                responsive: {
                    0: {
                        margin: 15,
                        items: 4 === $(e).data("items") ? 3 : 1
                    },
                    576: {
                        margin: 15,
                        items: 4 === $(e).data("items") ? 4 : 2
                    },
                    768: {
                        margin: 30,
                        items: $(e).data("items")
                    }
                }
            })
        }), $(".tab-col > .active").length && n.call($(".tab-col > .active").parent()), document.oncopy = function() {
            const t = document.getElementsByTagName("body")[0],
                e = window.getSelection(),
                n = document.location.href,
                i = (e + "").length > 100 ? e + " Источник:  " + n + " ©" : e,
                r = document.createElement("div");
            r.style.position = "absolute", r.style.left = "-99999px", t.appendChild(r), r.innerHTML = i, e.selectAllChildren(r), window.setTimeout(function() {
                t.removeChild(r)
            }, 0)
        }
    });