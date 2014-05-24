
var Stats = function () {
    function R(b, h, k) {
        var i, l, j;
        for (l = 0; l < 30; l++) {
            for (i = 0; i < 73; i++) {
                j = (i + l * 74) * 4, b[j] = b[j + 4], b[j + 1] = b[j + 5], b[j + 2] = b[j + 6]
            }
        }
        for (l = 0; l < 30; l++) {
            j = (73 + l * 74) * 4, l < h ? (b[j] = ak[k].bg.r, b[j + 1] = ak[k].bg.g, b[j + 2] = ak[k].bg.b) : (b[j] = ak[k].fg.r, b[j + 1] = ak[k].fg.g, b[j + 2] = ak[k].fg.b)
        }
    }
    var T = 0,
        P = 2,
        ag, N = 0,
        ad = (new Date).getTime(),
        M = ad,
        L = ad,
        ab = 0,
        J = 1000,
        I = 0,
        ac, ai, al, aa, H, Z = 0,
        e = 1000,
        X = 0,
        ah, aj, Y, V, W = 0,
        S = 1000,
        Q = 0,
        af, ae, U, O, ak = {
            fps: {
                bg: {
                    r: 16,
                    g: 16,
                    b: 48
                },
                fg: {
                    r: 0,
                    g: 255,
                    b: 255
                }
            },
            ms: {
                bg: {
                    r: 16,
                    g: 48,
                    b: 16
                },
                fg: {
                    r: 0,
                    g: 255,
                    b: 0
                }
            },
            mb: {
                bg: {
                    r: 48,
                    g: 16,
                    b: 26
                },
                fg: {
                    r: 255,
                    g: 0,
                    b: 128
                }
            }
        };
    ag = document.createElement("div");
    ag.style.cursor = "pointer";
    ag.style.width = "80px";
    ag.style.opacity = "0.9";
    ag.style.zIndex = "10001";
    ag.addEventListener("click", function () {
        T++;
        T == P && (T = 0);
        ac.style.display = "none";
        ah.style.display = "none";
        af.style.display = "none";
        switch (T) {
        case 0:
            ac.style.display = "block";
            break;
        case 1:
            ah.style.display = "block";
            break;
        case 2:
            af.style.display = "block"
        }
    }, !1);
    ac = document.createElement("div");
    ac.style.backgroundColor = "rgb(" + Math.floor(ak.fps.bg.r / 2) + "," + Math.floor(ak.fps.bg.g / 2) + "," + Math.floor(ak.fps.bg.b / 2) + ")";
    ac.style.padding = "2px 0px 3px 0px";
    ag.appendChild(ac);
    ai = document.createElement("div");
    ai.style.fontFamily = "Helvetica, Arial, sans-serif";
    ai.style.textAlign = "left";
    ai.style.fontSize = "9px";
    ai.style.color = "rgb(" + ak.fps.fg.r + "," + ak.fps.fg.g + "," + ak.fps.fg.b + ")";
    ai.style.margin = "0px 0px 1px 3px";
    ai.innerHTML = '<span style="font-weight:bold">FPS</span>';
    ac.appendChild(ai);
    al = document.createElement("canvas");
    al.width = 74;
    al.height = 30;
    al.style.display = "block";
    al.style.marginLeft = "3px";
    ac.appendChild(al);
    aa = al.getContext("2d");
    aa.fillStyle = "rgb(" + ak.fps.bg.r + "," + ak.fps.bg.g + "," + ak.fps.bg.b + ")";
    aa.fillRect(0, 0, al.width, al.height);
    H = aa.getImageData(0, 0, al.width, al.height);
    ah = document.createElement("div");
    ah.style.backgroundColor = "rgb(" + Math.floor(ak.ms.bg.r / 2) + "," + Math.floor(ak.ms.bg.g / 2) + "," + Math.floor(ak.ms.bg.b / 2) + ")";
    ah.style.padding = "2px 0px 3px 0px";
    ah.style.display = "none";
    ag.appendChild(ah);
    aj = document.createElement("div");
    aj.style.fontFamily = "Helvetica, Arial, sans-serif";
    aj.style.textAlign = "left";
    aj.style.fontSize = "9px";
    aj.style.color = "rgb(" + ak.ms.fg.r + "," + ak.ms.fg.g + "," + ak.ms.fg.b + ")";
    aj.style.margin = "0px 0px 1px 3px";
    aj.innerHTML = '<span style="font-weight:bold">MS</span>';
    ah.appendChild(aj);
    al = document.createElement("canvas");
    al.width = 74;
    al.height = 30;
    al.style.display = "block";
    al.style.marginLeft = "3px";
    ah.appendChild(al);
    Y = al.getContext("2d");
    Y.fillStyle = "rgb(" + ak.ms.bg.r + "," + ak.ms.bg.g + "," + ak.ms.bg.b + ")";
    Y.fillRect(0, 0, al.width, al.height);
    V = Y.getImageData(0, 0, al.width, al.height);
    try {
        performance && performance.memory && performance.memory.totalJSHeapSize && (P = 3)
    } catch (K) {}
    af = document.createElement("div");
    af.style.backgroundColor = "rgb(" + Math.floor(ak.mb.bg.r / 2) + "," + Math.floor(ak.mb.bg.g / 2) + "," + Math.floor(ak.mb.bg.b / 2) + ")";
    af.style.padding = "2px 0px 3px 0px";
    af.style.display = "none";
    ag.appendChild(af);
    ae = document.createElement("div");
    ae.style.fontFamily = "Helvetica, Arial, sans-serif";
    ae.style.textAlign = "left";
    ae.style.fontSize = "9px";
    ae.style.color = "rgb(" + ak.mb.fg.r + "," + ak.mb.fg.g + "," + ak.mb.fg.b + ")";
    ae.style.margin = "0px 0px 1px 3px";
    ae.innerHTML = '<span style="font-weight:bold">MB</span>';
    af.appendChild(ae);
    al = document.createElement("canvas");
    al.width = 74;
    al.height = 30;
    al.style.display = "block";
    al.style.marginLeft = "3px";
    af.appendChild(al);
    U = al.getContext("2d");
    U.fillStyle = "#301010";
    U.fillRect(0, 0, al.width, al.height);
    O = U.getImageData(0, 0, al.width, al.height);
    return {
        domElement: ag,
        update: function () {
            N++;
            ad = (new Date).getTime();
            Z = ad - M;
            e = Math.min(e, Z);
            X = Math.max(X, Z);
            R(V.data, Math.min(30, 30 - Z / 200 * 30), "ms");
            aj.innerHTML = '<span style="font-weight:bold">' + Z + " MS</span> (" + e + "-" + X + ")";
            Y.putImageData(V, 0, 0);
            M = ad;
            if (ad > L + 1000) {
                ab = Math.round(N * 1000 / (ad - L));
                J = Math.min(J, ab);
                I = Math.max(I, ab);
                R(H.data, Math.min(30, 30 - ab / 100 * 30), "fps");
                ai.innerHTML = '<span style="font-weight:bold">' + ab + " FPS</span> (" + J + "-" + I + ")";
                aa.putImageData(H, 0, 0);
                if (P == 3) {
                    W = performance.memory.usedJSHeapSize * 9.54e-7, S = Math.min(S, W), Q = Math.max(Q, W), R(O.data, Math.min(30, 30 - W / 2), "mb"), ae.innerHTML = '<span style="font-weight:bold">' + Math.round(W) + " MB</span> (" + Math.round(S) + "-" + Math.round(Q) + ")", U.putImageData(O, 0, 0)
                }
                L = ad;
                N = 0
            }
        }
    }
};
/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function () {
    var l = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        m = 0,
        p = Object.prototype.toString,
        g = false,
        f = true,
        n = /\\/g,
        t = /\W/;
    [0, 0].sort(function () {
        f = false;
        return 0
    });
    var c = function (y, e, B, C) {
        B = B || [];
        e = e || document;
        var E = e;
        if (e.nodeType !== 1 && e.nodeType !== 9) {
            return []
        }
        if (!y || typeof y !== "string") {
            return B
        }
        var v, G, J, u, F, I, H, A, x = true,
            w = c.isXML(e),
            z = [],
            D = y;
        do {
            l.exec("");
            v = l.exec(D);
            if (v) {
                D = v[3];
                z.push(v[1]);
                if (v[2]) {
                    u = v[3];
                    break
                }
            }
        } while (v);
        if (z.length > 1 && h.exec(y)) {
            if (z.length === 2 && i.relative[z[0]]) {
                G = q(z[0] + z[1], e)
            } else {
                G = i.relative[z[0]] ? [e] : c(z.shift(), e);
                while (z.length) {
                    y = z.shift();
                    if (i.relative[y]) {
                        y += z.shift()
                    }
                    G = q(y, G)
                }
            }
        } else {
            if (!C && z.length > 1 && e.nodeType === 9 && !w && i.match.ID.test(z[0]) && !i.match.ID.test(z[z.length - 1])) {
                F = c.find(z.shift(), e, w);
                e = F.expr ? c.filter(F.expr, F.set)[0] : F.set[0]
            }
            if (e) {
                F = C ? {
                    expr: z.pop(),
                    set: j(C)
                } : c.find(z.pop(), z.length === 1 && (z[0] === "~" || z[0] === "+") && e.parentNode ? e.parentNode : e, w);
                G = F.expr ? c.filter(F.expr, F.set) : F.set;
                if (z.length > 0) {
                    J = j(G)
                } else {
                    x = false
                }
                while (z.length) {
                    I = z.pop();
                    H = I;
                    if (!i.relative[I]) {
                        I = ""
                    } else {
                        H = z.pop()
                    } if (H == null) {
                        H = e
                    }
                    i.relative[I](J, H, w)
                }
            } else {
                J = z = []
            }
        } if (!J) {
            J = G
        }
        if (!J) {
            c.error(I || y)
        }
        if (p.call(J) === "[object Array]") {
            if (!x) {
                B.push.apply(B, J)
            } else {
                if (e && e.nodeType === 1) {
                    for (A = 0; J[A] != null; A++) {
                        if (J[A] && (J[A] === true || J[A].nodeType === 1 && c.contains(e, J[A]))) {
                            B.push(G[A])
                        }
                    }
                } else {
                    for (A = 0; J[A] != null; A++) {
                        if (J[A] && J[A].nodeType === 1) {
                            B.push(G[A])
                        }
                    }
                }
            }
        } else {
            j(J, B)
        } if (u) {
            c(u, E, B, C);
            c.uniqueSort(B)
        }
        return B
    };
    c.uniqueSort = function (u) {
        if (o) {
            g = f;
            u.sort(o);
            if (g) {
                for (var e = 1; e < u.length; e++) {
                    if (u[e] === u[e - 1]) {
                        u.splice(e--, 1)
                    }
                }
            }
        }
        return u
    };
    c.matches = function (e, u) {
        return c(e, null, null, u)
    };
    c.matchesSelector = function (e, u) {
        return c(u, null, null, [e]).length > 0
    };
    c.find = function (A, e, B) {
        var z;
        if (!A) {
            return []
        }
        for (var w = 0, v = i.order.length; w < v; w++) {
            var x, y = i.order[w];
            if ((x = i.leftMatch[y].exec(A))) {
                var u = x[1];
                x.splice(1, 1);
                if (u.substr(u.length - 1) !== "\\") {
                    x[1] = (x[1] || "").replace(n, "");
                    z = i.find[y](x, e, B);
                    if (z != null) {
                        A = A.replace(i.match[y], "");
                        break
                    }
                }
            }
        }
        if (!z) {
            z = typeof e.getElementsByTagName !== "undefined" ? e.getElementsByTagName("*") : []
        }
        return {
            set: z,
            expr: A
        }
    };
    c.filter = function (E, D, H, x) {
        var z, e, v = E,
            J = [],
            B = D,
            A = D && D[0] && c.isXML(D[0]);
        while (E && D.length) {
            for (var C in i.filter) {
                if ((z = i.leftMatch[C].exec(E)) != null && z[2]) {
                    var I, G, u = i.filter[C],
                        w = z[1];
                    e = false;
                    z.splice(1, 1);
                    if (w.substr(w.length - 1) === "\\") {
                        continue
                    }
                    if (B === J) {
                        J = []
                    }
                    if (i.preFilter[C]) {
                        z = i.preFilter[C](z, B, H, J, x, A);
                        if (!z) {
                            e = I = true
                        } else {
                            if (z === true) {
                                continue
                            }
                        }
                    }
                    if (z) {
                        for (var y = 0;
                            (G = B[y]) != null; y++) {
                            if (G) {
                                I = u(G, z, y, B);
                                var F = x ^ !!I;
                                if (H && I != null) {
                                    if (F) {
                                        e = true
                                    } else {
                                        B[y] = false
                                    }
                                } else {
                                    if (F) {
                                        J.push(G);
                                        e = true
                                    }
                                }
                            }
                        }
                    }
                    if (I !== undefined) {
                        if (!H) {
                            B = J
                        }
                        E = E.replace(i.match[C], "");
                        if (!e) {
                            return []
                        }
                        break
                    }
                }
            }
            if (E === v) {
                if (e == null) {
                    c.error(E)
                } else {
                    break
                }
            }
            v = E
        }
        return B
    };
    c.error = function (e) {
        throw "Syntax error, unrecognized expression: " + e
    };
    var i = c.selectors = {
        order: ["ID", "NAME", "TAG"],
        match: {
            ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
            ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
            TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
            CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
            POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
            PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
        },
        leftMatch: {},
        attrMap: {
            "class": "className",
            "for": "htmlFor"
        },
        attrHandle: {
            href: function (e) {
                return e.getAttribute("href")
            },
            type: function (e) {
                return e.getAttribute("type")
            }
        },
        relative: {
            "+": function (z, u) {
                var w = typeof u === "string",
                    y = w && !t.test(u),
                    A = w && !y;
                if (y) {
                    u = u.toLowerCase()
                }
                for (var v = 0, e = z.length, x; v < e; v++) {
                    if ((x = z[v])) {
                        while ((x = x.previousSibling) && x.nodeType !== 1) {}
                        z[v] = A || x && x.nodeName.toLowerCase() === u ? x || false : x === u
                    }
                }
                if (A) {
                    c.filter(u, z, true)
                }
            },
            ">": function (z, u) {
                var y, x = typeof u === "string",
                    v = 0,
                    e = z.length;
                if (x && !t.test(u)) {
                    u = u.toLowerCase();
                    for (; v < e; v++) {
                        y = z[v];
                        if (y) {
                            var w = y.parentNode;
                            z[v] = w.nodeName.toLowerCase() === u ? w : false
                        }
                    }
                } else {
                    for (; v < e; v++) {
                        y = z[v];
                        if (y) {
                            z[v] = x ? y.parentNode : y.parentNode === u
                        }
                    }
                    if (x) {
                        c.filter(u, z, true)
                    }
                }
            },
            "": function (w, u, y) {
                var x, v = m++,
                    e = r;
                if (typeof u === "string" && !t.test(u)) {
                    u = u.toLowerCase();
                    x = u;
                    e = a
                }
                e("parentNode", u, v, w, x, y)
            },
            "~": function (w, u, y) {
                var x, v = m++,
                    e = r;
                if (typeof u === "string" && !t.test(u)) {
                    u = u.toLowerCase();
                    x = u;
                    e = a
                }
                e("previousSibling", u, v, w, x, y)
            }
        },
        find: {
            ID: function (u, v, w) {
                if (typeof v.getElementById !== "undefined" && !w) {
                    var e = v.getElementById(u[1]);
                    return e && e.parentNode ? [e] : []
                }
            },
            NAME: function (v, y) {
                if (typeof y.getElementsByName !== "undefined") {
                    var u = [],
                        x = y.getElementsByName(v[1]);
                    for (var w = 0, e = x.length; w < e; w++) {
                        if (x[w].getAttribute("name") === v[1]) {
                            u.push(x[w])
                        }
                    }
                    return u.length === 0 ? null : u
                }
            },
            TAG: function (e, u) {
                if (typeof u.getElementsByTagName !== "undefined") {
                    return u.getElementsByTagName(e[1])
                }
            }
        },
        preFilter: {
            CLASS: function (w, u, v, e, z, A) {
                w = " " + w[1].replace(n, "") + " ";
                if (A) {
                    return w
                }
                for (var x = 0, y;
                    (y = u[x]) != null; x++) {
                    if (y) {
                        if (z ^ (y.className && (" " + y.className + " ").replace(/[\t\n\r]/g, " ").indexOf(w) >= 0)) {
                            if (!v) {
                                e.push(y)
                            }
                        } else {
                            if (v) {
                                u[x] = false
                            }
                        }
                    }
                }
                return false
            },
            ID: function (e) {
                return e[1].replace(n, "")
            },
            TAG: function (u, e) {
                return u[1].replace(n, "").toLowerCase()
            },
            CHILD: function (e) {
                if (e[1] === "nth") {
                    if (!e[2]) {
                        c.error(e[0])
                    }
                    e[2] = e[2].replace(/^\+|\s*/g, "");
                    var u = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                    e[2] = (u[1] + (u[2] || 1)) - 0;
                    e[3] = u[3] - 0
                } else {
                    if (e[2]) {
                        c.error(e[0])
                    }
                }
                e[0] = m++;
                return e
            },
            ATTR: function (x, u, v, e, y, z) {
                var w = x[1] = x[1].replace(n, "");
                if (!z && i.attrMap[w]) {
                    x[1] = i.attrMap[w]
                }
                x[4] = (x[4] || x[5] || "").replace(n, "");
                if (x[2] === "~=") {
                    x[4] = " " + x[4] + " "
                }
                return x
            },
            PSEUDO: function (x, u, v, e, y) {
                if (x[1] === "not") {
                    if ((l.exec(x[3]) || "").length > 1 || /^\w/.test(x[3])) {
                        x[3] = c(x[3], null, null, u)
                    } else {
                        var w = c.filter(x[3], u, v, true ^ y);
                        if (!v) {
                            e.push.apply(e, w)
                        }
                        return false
                    }
                } else {
                    if (i.match.POS.test(x[0]) || i.match.CHILD.test(x[0])) {
                        return true
                    }
                }
                return x
            },
            POS: function (e) {
                e.unshift(true);
                return e
            }
        },
        filters: {
            enabled: function (e) {
                return e.disabled === false && e.type !== "hidden"
            },
            disabled: function (e) {
                return e.disabled === true
            },
            checked: function (e) {
                return e.checked === true
            },
            selected: function (e) {
                if (e.parentNode) {
                    e.parentNode.selectedIndex
                }
                return e.selected === true
            },
            parent: function (e) {
                return !!e.firstChild
            },
            empty: function (e) {
                return !e.firstChild
            },
            has: function (v, u, e) {
                return !!c(e[3], v).length
            },
            header: function (e) {
                return (/h\d/i).test(e.nodeName)
            },
            text: function (v) {
                var e = v.getAttribute("type"),
                    u = v.type;
                return v.nodeName.toLowerCase() === "input" && "text" === u && (e === u || e === null)
            },
            radio: function (e) {
                return e.nodeName.toLowerCase() === "input" && "radio" === e.type
            },
            checkbox: function (e) {
                return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type
            },
            file: function (e) {
                return e.nodeName.toLowerCase() === "input" && "file" === e.type
            },
            password: function (e) {
                return e.nodeName.toLowerCase() === "input" && "password" === e.type
            },
            submit: function (u) {
                var e = u.nodeName.toLowerCase();
                return (e === "input" || e === "button") && "submit" === u.type
            },
            image: function (e) {
                return e.nodeName.toLowerCase() === "input" && "image" === e.type
            },
            reset: function (u) {
                var e = u.nodeName.toLowerCase();
                return (e === "input" || e === "button") && "reset" === u.type
            },
            button: function (u) {
                var e = u.nodeName.toLowerCase();
                return e === "input" && "button" === u.type || e === "button"
            },
            input: function (e) {
                return (/input|select|textarea|button/i).test(e.nodeName)
            },
            focus: function (e) {
                return e === e.ownerDocument.activeElement
            }
        },
        setFilters: {
            first: function (u, e) {
                return e === 0
            },
            last: function (v, u, e, w) {
                return u === w.length - 1
            },
            even: function (u, e) {
                return e % 2 === 0
            },
            odd: function (u, e) {
                return e % 2 === 1
            },
            lt: function (v, u, e) {
                return u < e[3] - 0
            },
            gt: function (v, u, e) {
                return u > e[3] - 0
            },
            nth: function (v, u, e) {
                return e[3] - 0 === u
            },
            eq: function (v, u, e) {
                return e[3] - 0 === u
            }
        },
        filter: {
            PSEUDO: function (v, A, z, B) {
                var e = A[1],
                    u = i.filters[e];
                if (u) {
                    return u(v, z, A, B)
                } else {
                    if (e === "contains") {
                        return (v.textContent || v.innerText || c.getText([v]) || "").indexOf(A[3]) >= 0
                    } else {
                        if (e === "not") {
                            var w = A[3];
                            for (var y = 0, x = w.length; y < x; y++) {
                                if (w[y] === v) {
                                    return false
                                }
                            }
                            return true
                        } else {
                            c.error(e)
                        }
                    }
                }
            },
            CHILD: function (e, w) {
                var z = w[1],
                    u = e;
                switch (z) {
                case "only":
                case "first":
                    while ((u = u.previousSibling)) {
                        if (u.nodeType === 1) {
                            return false
                        }
                    }
                    if (z === "first") {
                        return true
                    }
                    u = e;
                case "last":
                    while ((u = u.nextSibling)) {
                        if (u.nodeType === 1) {
                            return false
                        }
                    }
                    return true;
                case "nth":
                    var v = w[2],
                        C = w[3];
                    if (v === 1 && C === 0) {
                        return true
                    }
                    var y = w[0],
                        B = e.parentNode;
                    if (B && (B.sizcache !== y || !e.nodeIndex)) {
                        var x = 0;
                        for (u = B.firstChild; u; u = u.nextSibling) {
                            if (u.nodeType === 1) {
                                u.nodeIndex = ++x
                            }
                        }
                        B.sizcache = y
                    }
                    var A = e.nodeIndex - C;
                    if (v === 0) {
                        return A === 0
                    } else {
                        return (A % v === 0 && A / v >= 0)
                    }
                }
            },
            ID: function (u, e) {
                return u.nodeType === 1 && u.getAttribute("id") === e
            },
            TAG: function (u, e) {
                return (e === "*" && u.nodeType === 1) || u.nodeName.toLowerCase() === e
            },
            CLASS: function (u, e) {
                return (" " + (u.className || u.getAttribute("class")) + " ").indexOf(e) > -1
            },
            ATTR: function (y, w) {
                var v = w[1],
                    e = i.attrHandle[v] ? i.attrHandle[v](y) : y[v] != null ? y[v] : y.getAttribute(v),
                    z = e + "",
                    x = w[2],
                    u = w[4];
                return e == null ? x === "!=" : x === "=" ? z === u : x === "*=" ? z.indexOf(u) >= 0 : x === "~=" ? (" " + z + " ").indexOf(u) >= 0 : !u ? z && e !== false : x === "!=" ? z !== u : x === "^=" ? z.indexOf(u) === 0 : x === "$=" ? z.substr(z.length - u.length) === u : x === "|=" ? z === u || z.substr(0, u.length + 1) === u + "-" : false
            },
            POS: function (x, u, v, y) {
                var e = u[2],
                    w = i.setFilters[e];
                if (w) {
                    return w(x, v, u, y)
                }
            }
        }
    };
    var h = i.match.POS,
        b = function (u, e) {
            return "\\" + (e - 0 + 1)
        };
    for (var d in i.match) {
        i.match[d] = new RegExp(i.match[d].source + (/(?![^\[]*\])(?![^\(]*\))/.source));
        i.leftMatch[d] = new RegExp(/(^(?:.|\r|\n)*?)/.source + i.match[d].source.replace(/\\(\d+)/g, b))
    }
    var j = function (u, e) {
        u = Array.prototype.slice.call(u, 0);
        if (e) {
            e.push.apply(e, u);
            return e
        }
        return u
    };
    try {
        Array.prototype.slice.call(document.documentElement.childNodes, 0)[0].nodeType
    } catch (s) {
        j = function (x, w) {
            var v = 0,
                u = w || [];
            if (p.call(x) === "[object Array]") {
                Array.prototype.push.apply(u, x)
            } else {
                if (typeof x.length === "number") {
                    for (var e = x.length; v < e; v++) {
                        u.push(x[v])
                    }
                } else {
                    for (; x[v]; v++) {
                        u.push(x[v])
                    }
                }
            }
            return u
        }
    }
    var o, k;
    if (document.documentElement.compareDocumentPosition) {
        o = function (u, e) {
            if (u === e) {
                g = true;
                return 0
            }
            if (!u.compareDocumentPosition || !e.compareDocumentPosition) {
                return u.compareDocumentPosition ? -1 : 1
            }
            return u.compareDocumentPosition(e) & 4 ? -1 : 1
        }
    } else {
        o = function (B, A) {
            if (B === A) {
                g = true;
                return 0
            } else {
                if (B.sourceIndex && A.sourceIndex) {
                    return B.sourceIndex - A.sourceIndex
                }
            }
            var y, u, v = [],
                e = [],
                x = B.parentNode,
                z = A.parentNode,
                C = x;
            if (x === z) {
                return k(B, A)
            } else {
                if (!x) {
                    return -1
                } else {
                    if (!z) {
                        return 1
                    }
                }
            }
            while (C) {
                v.unshift(C);
                C = C.parentNode
            }
            C = z;
            while (C) {
                e.unshift(C);
                C = C.parentNode
            }
            y = v.length;
            u = e.length;
            for (var w = 0; w < y && w < u; w++) {
                if (v[w] !== e[w]) {
                    return k(v[w], e[w])
                }
            }
            return w === y ? k(B, e[w], -1) : k(v[w], A, 1)
        };
        k = function (u, e, v) {
            if (u === e) {
                return v
            }
            var w = u.nextSibling;
            while (w) {
                if (w === e) {
                    return -1
                }
                w = w.nextSibling
            }
            return 1
        }
    }
    c.getText = function (e) {
        var u = "",
            w;
        for (var v = 0; e[v]; v++) {
            w = e[v];
            if (w.nodeType === 3 || w.nodeType === 4) {
                u += w.nodeValue
            } else {
                if (w.nodeType !== 8) {
                    u += c.getText(w.childNodes)
                }
            }
        }
        return u
    };
    (function () {
        var u = document.createElement("div"),
            v = "script" + (new Date()).getTime(),
            e = document.documentElement;
        u.innerHTML = "<a name='" + v + "'/>";
        e.insertBefore(u, e.firstChild);
        if (document.getElementById(v)) {
            i.find.ID = function (x, y, z) {
                if (typeof y.getElementById !== "undefined" && !z) {
                    var w = y.getElementById(x[1]);
                    return w ? w.id === x[1] || typeof w.getAttributeNode !== "undefined" && w.getAttributeNode("id").nodeValue === x[1] ? [w] : undefined : []
                }
            };
            i.filter.ID = function (y, w) {
                var x = typeof y.getAttributeNode !== "undefined" && y.getAttributeNode("id");
                return y.nodeType === 1 && x && x.nodeValue === w
            }
        }
        e.removeChild(u);
        e = u = null
    })();
    (function () {
        var e = document.createElement("div");
        e.appendChild(document.createComment(""));
        if (e.getElementsByTagName("*").length > 0) {
            i.find.TAG = function (u, y) {
                var x = y.getElementsByTagName(u[1]);
                if (u[1] === "*") {
                    var w = [];
                    for (var v = 0; x[v]; v++) {
                        if (x[v].nodeType === 1) {
                            w.push(x[v])
                        }
                    }
                    x = w
                }
                return x
            }
        }
        e.innerHTML = "<a href='#'></a>";
        if (e.firstChild && typeof e.firstChild.getAttribute !== "undefined" && e.firstChild.getAttribute("href") !== "#") {
            i.attrHandle.href = function (u) {
                return u.getAttribute("href", 2)
            }
        }
        e = null
    })();
    if (document.querySelectorAll) {
        (function () {
            var e = c,
                w = document.createElement("div"),
                v = "__sizzle__";
            w.innerHTML = "<p class='TEST'></p>";
            if (w.querySelectorAll && w.querySelectorAll(".TEST").length === 0) {
                return
            }
            c = function (H, y, C, G) {
                y = y || document;
                if (!G && !c.isXML(y)) {
                    var F = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(H);
                    if (F && (y.nodeType === 1 || y.nodeType === 9)) {
                        if (F[1]) {
                            return j(y.getElementsByTagName(H), C)
                        } else {
                            if (F[2] && i.find.CLASS && y.getElementsByClassName) {
                                return j(y.getElementsByClassName(F[2]), C)
                            }
                        }
                    }
                    if (y.nodeType === 9) {
                        if (H === "body" && y.body) {
                            return j([y.body], C)
                        } else {
                            if (F && F[3]) {
                                var B = y.getElementById(F[3]);
                                if (B && B.parentNode) {
                                    if (B.id === F[3]) {
                                        return j([B], C)
                                    }
                                } else {
                                    return j([], C)
                                }
                            }
                        }
                        try {
                            return j(y.querySelectorAll(H), C)
                        } catch (D) {}
                    } else {
                        if (y.nodeType === 1 && y.nodeName.toLowerCase() !== "object") {
                            var z = y,
                                A = y.getAttribute("id"),
                                x = A || v,
                                J = y.parentNode,
                                I = /^\s*[+~]/.test(H);
                            if (!A) {
                                y.setAttribute("id", x)
                            } else {
                                x = x.replace(/'/g, "\\$&")
                            } if (I && J) {
                                y = y.parentNode
                            }
                            try {
                                if (!I || J) {
                                    return j(y.querySelectorAll("[id='" + x + "'] " + H), C)
                                }
                            } catch (E) {} finally {
                                if (!A) {
                                    z.removeAttribute("id")
                                }
                            }
                        }
                    }
                }
                return e(H, y, C, G)
            };
            for (var u in e) {
                c[u] = e[u]
            }
            w = null
        })()
    }(function () {
        var e = document.documentElement,
            v = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
        if (v) {
            var x = !v.call(document.createElement("div"), "div"),
                u = false;
            try {
                v.call(document.documentElement, "[test!='']:sizzle")
            } catch (w) {
                u = true
            }
            c.matchesSelector = function (z, B) {
                B = B.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                if (!c.isXML(z)) {
                    try {
                        if (u || !i.match.PSEUDO.test(B) && !/!=/.test(B)) {
                            var y = v.call(z, B);
                            if (y || !x || z.document && z.document.nodeType !== 11) {
                                return y
                            }
                        }
                    } catch (A) {}
                }
                return c(B, null, null, [z]).length > 0
            }
        }
    })();
    (function () {
        var e = document.createElement("div");
        e.innerHTML = "<div class='test e'></div><div class='test'></div>";
        if (!e.getElementsByClassName || e.getElementsByClassName("e").length === 0) {
            return
        }
        e.lastChild.className = "e";
        if (e.getElementsByClassName("e").length === 1) {
            return
        }
        i.order.splice(1, 0, "CLASS");
        i.find.CLASS = function (u, v, w) {
            if (typeof v.getElementsByClassName !== "undefined" && !w) {
                return v.getElementsByClassName(u[1])
            }
        };
        e = null
    })();

    function a(u, z, y, C, A, B) {
        for (var w = 0, v = C.length; w < v; w++) {
            var e = C[w];
            if (e) {
                var x = false;
                e = e[u];
                while (e) {
                    if (e.sizcache === y) {
                        x = C[e.sizset];
                        break
                    }
                    if (e.nodeType === 1 && !B) {
                        e.sizcache = y;
                        e.sizset = w
                    }
                    if (e.nodeName.toLowerCase() === z) {
                        x = e;
                        break
                    }
                    e = e[u]
                }
                C[w] = x
            }
        }
    }

    function r(u, z, y, C, A, B) {
        for (var w = 0, v = C.length; w < v; w++) {
            var e = C[w];
            if (e) {
                var x = false;
                e = e[u];
                while (e) {
                    if (e.sizcache === y) {
                        x = C[e.sizset];
                        break
                    }
                    if (e.nodeType === 1) {
                        if (!B) {
                            e.sizcache = y;
                            e.sizset = w
                        }
                        if (typeof z !== "string") {
                            if (e === z) {
                                x = true;
                                break
                            }
                        } else {
                            if (c.filter(z, [e]).length > 0) {
                                x = e;
                                break
                            }
                        }
                    }
                    e = e[u]
                }
                C[w] = x
            }
        }
    }
    if (document.documentElement.contains) {
        c.contains = function (u, e) {
            return u !== e && (u.contains ? u.contains(e) : true)
        }
    } else {
        if (document.documentElement.compareDocumentPosition) {
            c.contains = function (u, e) {
                return !!(u.compareDocumentPosition(e) & 16)
            }
        } else {
            c.contains = function () {
                return false
            }
        }
    }
    c.isXML = function (e) {
        var u = (e ? e.ownerDocument || e : 0).documentElement;
        return u ? u.nodeName !== "HTML" : false
    };
    var q = function (e, A) {
        var y, w = [],
            x = "",
            v = A.nodeType ? [A] : A;
        while ((y = i.match.PSEUDO.exec(e))) {
            x += y[0];
            e = e.replace(i.match.PSEUDO, "")
        }
        e = i.relative[e] ? e + "*" : e;
        for (var z = 0, u = v.length; z < u; z++) {
            c(e, v[z], w)
        }
        return c.filter(x, w)
    };
    window.Sizzle = c
})();

function Animator(a) {
    this.setOptions(a);
    var b = this;
    this.timerDelegate = function () {
        b.onTimerEvent()
    };
    this.subjects = [];
    this.target = 0;
    this.state = 0;
    this.lastTime = null
}
Animator.prototype = {
    setOptions: function (a) {
        this.options = Animator.applyDefaults({
            interval: 20,
            duration: 400,
            onComplete: function () {},
            onStep: function () {},
            transition: Animator.tx.easeInOut
        }, a)
    },
    seekTo: function (a) {
        this.seekFromTo(this.state, a)
    },
    seekFromTo: function (b, a) {
        this.target = Math.max(0, Math.min(1, a));
        this.state = Math.max(0, Math.min(1, b));
        this.lastTime = new Date().getTime();
        if (!this.intervalId) {
            this.intervalId = window.setInterval(this.timerDelegate, this.options.interval)
        }
    },
    jumpTo: function (a) {
        this.target = this.state = Math.max(0, Math.min(1, a));
        this.propagate()
    },
    toggle: function () {
        this.seekTo(1 - this.target)
    },
    addSubject: function (a) {
        this.subjects[this.subjects.length] = a;
        return this
    },
    clearSubjects: function () {
        this.subjects = []
    },
    propagate: function () {
        var b = this.options.transition(this.state);
        for (var a = 0; a < this.subjects.length; a++) {
            if (this.subjects[a].setState) {
                this.subjects[a].setState(b)
            } else {
                this.subjects[a](b)
            }
        }
    },
    onTimerEvent: function () {
        var c = new Date().getTime();
        var a = c - this.lastTime;
        this.lastTime = c;
        var b = (a / this.options.duration) * (this.state < this.target ? 1 : -1);
        if (Math.abs(b) >= Math.abs(this.state - this.target)) {
            this.state = this.target
        } else {
            this.state += b
        }
        try {
            this.propagate()
        } finally {
            this.options.onStep.call(this);
            if (this.target == this.state) {
                this.stop()
            }
        }
    },
    stop: function () {
        if (this.intervalId) {
            window.clearInterval(this.intervalId);
            this.intervalId = null;
            this.options.onComplete.call(this)
        }
    },
    play: function () {
        this.seekFromTo(0, 1)
    },
    reverse: function () {
        this.seekFromTo(1, 0)
    },
    inspect: function () {
        var b = "#<Animator:\n";
        for (var a = 0; a < this.subjects.length; a++) {
            b += this.subjects[a].inspect()
        }
        b += ">";
        return b
    }
};
Animator.applyDefaults = function (c, b) {
    b = b || {};
    var d, a = {};
    for (d in c) {
        a[d] = b[d] !== undefined ? b[d] : c[d]
    }
    return a
};
Animator.makeArrayOfElements = function (c) {
    if (c == null) {
        return []
    }
    if ("string" == typeof c) {
        return [document.getElementById(c)]
    }
    if (!c.length) {
        return [c]
    }
    var a = [];
    for (var b = 0; b < c.length; b++) {
        if ("string" == typeof c[b]) {
            a[b] = document.getElementById(c[b])
        } else {
            a[b] = c[b]
        }
    }
    return a
};
Animator.camelize = function (c) {
    var e = c.split("-");
    if (e.length == 1) {
        return e[0]
    }
    var b = c.indexOf("-") == 0 ? e[0].charAt(0).toUpperCase() + e[0].substring(1) : e[0];
    for (var d = 1, a = e.length; d < a; d++) {
        var f = e[d];
        b += f.charAt(0).toUpperCase() + f.substring(1)
    }
    return b
};
Animator.apply = function (c, b, a) {
    if (b instanceof Array) {
        return new Animator(a).addSubject(new CSSStyleSubject(c, b[0], b[1]))
    }
    return new Animator(a).addSubject(new CSSStyleSubject(c, b))
};
Animator.makeEaseIn = function (b) {
    return function (a) {
        return Math.pow(a, b * 2)
    }
};
Animator.makeEaseOut = function (b) {
    return function (a) {
        return 1 - Math.pow(1 - a, b * 2)
    }
};
Animator.makeElastic = function (a) {
    return function (b) {
        b = Animator.tx.easeInOut(b);
        return ((1 - Math.cos(b * Math.PI * a)) * (1 - b)) + b
    }
};
Animator.makeADSR = function (d, b, c, a) {
    if (a == null) {
        a = 0.5
    }
    return function (e) {
        if (e < d) {
            return e / d
        }
        if (e < b) {
            return 1 - ((e - d) / (b - d) * (1 - a))
        }
        if (e < c) {
            return a
        }
        return a * (1 - ((e - c) / (1 - c)))
    }
};
Animator.makeBounce = function (a) {
    var b = Animator.makeElastic(a);
    return function (c) {
        c = b(c);
        return c <= 1 ? c : 2 - c
    }
};
Animator.tx = {
    easeInOut: function (a) {
        return ((-Math.cos(a * Math.PI) / 2) + 0.5)
    },
    linear: function (a) {
        return a
    },
    easeIn: Animator.makeEaseIn(1.5),
    easeOut: Animator.makeEaseOut(1.5),
    strongEaseIn: Animator.makeEaseIn(2.5),
    strongEaseOut: Animator.makeEaseOut(2.5),
    elastic: Animator.makeElastic(1),
    veryElastic: Animator.makeElastic(3),
    bouncy: Animator.makeBounce(1),
    veryBouncy: Animator.makeBounce(3)
};

function NumericalStyleSubject(b, c, e, d, a) {
    this.els = Animator.makeArrayOfElements(b);
    this.property = Animator.camelize(c);
    this.from = parseFloat(e);
    this.to = parseFloat(d);
    this.units = a != null ? a : "px"
}
NumericalStyleSubject.prototype = {
    setState: function (f) {
        var d = this.getStyle(f);
        var a = (this.property == "opacity" && f == 0) ? "hidden" : "";
        var b = 0;
        for (var c = 0; c < this.els.length; c++) {
            try {
                this.els[c].style[this.property] = d
            } catch (g) {
                if (this.property != "fontWeight") {
                    throw g
                }
            }
            if (b++ > 20) {
                return
            }
        }
    },
    getStyle: function (a) {
        a = this.from + ((this.to - this.from) * a);
        if (this.property == "opacity") {
            return a
        }
        return Math.round(a) + this.units
    },
    inspect: function () {
        return "\t" + this.property + "(" + this.from + this.units + " to " + this.to + this.units + ")\n"
    }
};

function ColorStyleSubject(a, b, d, c) {
    this.els = Animator.makeArrayOfElements(a);
    this.property = Animator.camelize(b);
    this.to = this.expandColor(c);
    this.from = this.expandColor(d);
    this.origFrom = d;
    this.origTo = c
}
ColorStyleSubject.prototype = {
    expandColor: function (b) {
        var c, e, d, a;
        c = ColorStyleSubject.parseColor(b);
        if (c) {
            e = parseInt(c.slice(1, 3), 16);
            d = parseInt(c.slice(3, 5), 16);
            a = parseInt(c.slice(5, 7), 16);
            return [e, d, a]
        }
        if (window.ANIMATOR_DEBUG) {
            alert("Invalid colour: '" + b + "'")
        }
    },
    getValueForState: function (a, b) {
        return Math.round(this.from[a] + ((this.to[a] - this.from[a]) * b))
    },
    setState: function (c) {
        var a = "#" + ColorStyleSubject.toColorPart(this.getValueForState(0, c)) + ColorStyleSubject.toColorPart(this.getValueForState(1, c)) + ColorStyleSubject.toColorPart(this.getValueForState(2, c));
        for (var b = 0; b < this.els.length; b++) {
            this.els[b].style[this.property] = a
        }
    },
    inspect: function () {
        return "\t" + this.property + "(" + this.origFrom + " to " + this.origTo + ")\n"
    }
};
ColorStyleSubject.parseColor = function (d) {
    var a = "#",
        c;
    if (c = ColorStyleSubject.parseColor.rgbRe.exec(d)) {
        var b;
        for (var e = 1; e <= 3; e++) {
            b = Math.max(0, Math.min(255, parseInt(c[e])));
            a += ColorStyleSubject.toColorPart(b)
        }
        return a
    }
    if (c = ColorStyleSubject.parseColor.hexRe.exec(d)) {
        if (c[1].length == 3) {
            for (var e = 0; e < 3; e++) {
                a += c[1].charAt(e) + c[1].charAt(e)
            }
            return a
        }
        return "#" + c[1]
    }
    return false
};
ColorStyleSubject.toColorPart = function (a) {
    if (a > 255) {
        a = 255
    }
    var b = a.toString(16);
    if (a < 16) {
        return "0" + b
    }
    return b
};
ColorStyleSubject.parseColor.rgbRe = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i;
ColorStyleSubject.parseColor.hexRe = /^\#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

function DiscreteStyleSubject(b, c, e, d, a) {
    this.els = Animator.makeArrayOfElements(b);
    this.property = Animator.camelize(c);
    this.from = e;
    this.to = d;
    this.threshold = a || 0.5
}
DiscreteStyleSubject.prototype = {
    setState: function (c) {
        var a = 0;
        for (var b = 0; b < this.els.length; b++) {
            this.els[b].style[this.property] = c <= this.threshold ? this.from : this.to
        }
    },
    inspect: function () {
        return "\t" + this.property + "(" + this.from + " to " + this.to + " @ " + this.threshold + ")\n"
    }
};

function CSSStyleSubject(d, m, j) {
    d = Animator.makeArrayOfElements(d);
    this.subjects = [];
    if (d.length == 0) {
        return
    }
    var a, n, b;
    if (j) {
        b = this.parseStyle(m, d[0]);
        n = this.parseStyle(j, d[0])
    } else {
        n = this.parseStyle(m, d[0]);
        b = {};
        for (a in n) {
            b[a] = CSSStyleSubject.getStyle(d[0], a)
        }
    }
    var a;
    for (a in b) {
        if (b[a] == n[a]) {
            delete b[a];
            delete n[a]
        }
    }
    var a, h, e, i, l, k;
    for (a in b) {
        var g = String(b[a]);
        var c = String(n[a]);
        if (n[a] == null) {
            if (window.ANIMATOR_DEBUG) {
                alert("No to style provided for '" + a + '"')
            }
            continue
        }
        if (l = ColorStyleSubject.parseColor(g)) {
            k = ColorStyleSubject.parseColor(c);
            i = ColorStyleSubject
        } else {
            if (g.match(CSSStyleSubject.numericalRe) && c.match(CSSStyleSubject.numericalRe)) {
                l = parseFloat(g);
                k = parseFloat(c);
                i = NumericalStyleSubject;
                e = CSSStyleSubject.numericalRe.exec(g);
                var f = CSSStyleSubject.numericalRe.exec(c);
                if (e[1] != null) {
                    h = e[1]
                } else {
                    if (f[1] != null) {
                        h = f[1]
                    } else {
                        h = f
                    }
                }
            } else {
                if (g.match(CSSStyleSubject.discreteRe) && c.match(CSSStyleSubject.discreteRe)) {
                    l = g;
                    k = c;
                    i = DiscreteStyleSubject;
                    h = 0
                } else {
                    if (window.ANIMATOR_DEBUG) {
                        alert("Unrecognised format for value of " + a + ": '" + b[a] + "'")
                    }
                    continue
                }
            }
        }
        this.subjects[this.subjects.length] = new i(d, a, l, k, h)
    }
}
CSSStyleSubject.prototype = {
    parseStyle: function (b, c) {
        var g = {};
        if (b.indexOf(":") != -1) {
            var j = b.split(";");
            for (var e = 0; e < j.length; e++) {
                var d = CSSStyleSubject.ruleRe.exec(j[e]);
                if (d) {
                    g[d[1]] = d[2]
                }
            }
        } else {
            var a, h, f;
            f = c.className;
            c.className = b;
            for (var e = 0; e < CSSStyleSubject.cssProperties.length; e++) {
                a = CSSStyleSubject.cssProperties[e];
                h = CSSStyleSubject.getStyle(c, a);
                if (h != null) {
                    g[a] = h
                }
            }
            c.className = f
        }
        return g
    },
    setState: function (b) {
        for (var a = 0; a < this.subjects.length; a++) {
            this.subjects[a].setState(b)
        }
    },
    inspect: function () {
        var b = "";
        for (var a = 0; a < this.subjects.length; a++) {
            b += this.subjects[a].inspect()
        }
        return b
    }
};
CSSStyleSubject.getStyle = function (b, c) {
    var a;
    if (document.defaultView && document.defaultView.getComputedStyle) {
        a = document.defaultView.getComputedStyle(b, "").getPropertyValue(c);
        if (a) {
            return a
        }
    }
    c = Animator.camelize(c);
    if (b.currentStyle) {
        a = b.currentStyle[c]
    }
    return a || b.style[c]
};
CSSStyleSubject.ruleRe = /^\s*([a-zA-Z\-]+)\s*:\s*(\S(.+\S)?)\s*$/;
CSSStyleSubject.numericalRe = /^-?\d+(?:\.\d+)?(%|[a-zA-Z]{2})?$/;
CSSStyleSubject.discreteRe = /^\w+$/;
CSSStyleSubject.cssProperties = ["azimuth", "background", "background-attachment", "background-color", "background-image", "background-position", "background-repeat", "border-collapse", "border-color", "border-spacing", "border-style", "border-top", "border-top-color", "border-right-color", "border-bottom-color", "border-left-color", "border-top-style", "border-right-style", "border-bottom-style", "border-left-style", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "border-width", "bottom", "clear", "clip", "color", "content", "cursor", "direction", "display", "elevation", "empty-cells", "css-float", "font", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "height", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-top", "margin-right", "margin-bottom", "margin-left", "max-height", "max-width", "min-height", "min-width", "orphans", "outline", "outline-color", "outline-style", "outline-width", "overflow", "padding", "padding-top", "padding-right", "padding-bottom", "padding-left", "pause", "position", "right", "size", "table-layout", "text-align", "text-decoration", "text-indent", "text-shadow", "text-transform", "top", "vertical-align", "visibility", "white-space", "width", "word-spacing", "z-index", "opacity", "outline-offset", "overflow-x", "overflow-y"];

function AnimatorChain(c, a) {
    this.animators = c;
    this.setOptions(a);
    for (var b = 0; b < this.animators.length; b++) {
        this.listenTo(this.animators[b])
    }
    this.forwards = false;
    this.current = 0
}
AnimatorChain.prototype = {
    setOptions: function (a) {
        this.options = Animator.applyDefaults({
            resetOnPlay: true
        }, a)
    },
    play: function () {
        this.forwards = true;
        this.current = -1;
        if (this.options.resetOnPlay) {
            for (var a = 0; a < this.animators.length; a++) {
                this.animators[a].jumpTo(0)
            }
        }
        this.advance()
    },
    reverse: function () {
        this.forwards = false;
        this.current = this.animators.length;
        if (this.options.resetOnPlay) {
            for (var a = 0; a < this.animators.length; a++) {
                this.animators[a].jumpTo(1)
            }
        }
        this.advance()
    },
    toggle: function () {
        if (this.forwards) {
            this.seekTo(0)
        } else {
            this.seekTo(1)
        }
    },
    listenTo: function (a) {
        var b = a.options.onComplete;
        var c = this;
        a.options.onComplete = function () {
            if (b) {
                b.call(a)
            }
            c.advance()
        }
    },
    advance: function () {
        if (this.forwards) {
            if (this.animators[this.current + 1] == null) {
                return
            }
            this.current++;
            this.animators[this.current].play()
        } else {
            if (this.animators[this.current - 1] == null) {
                return
            }
            this.current--;
            this.animators[this.current].reverse()
        }
    },
    seekTo: function (a) {
        if (a <= 0) {
            this.forwards = false;
            this.animators[this.current].seekTo(0)
        } else {
            this.forwards = true;
            this.animators[this.current].seekTo(1)
        }
    }
};
AudioFX = function () {
    var c = false,
        e = document.createElement("audio"),
        a = function (i) {
            var h = e.canPlayType(i);
            return (h === "probably") || (h === "maybe")
        };
    if (e && e.canPlayType) {
        c = {
            ogg: a('audio/ogg; codecs="vorbis"'),
            mp3: a("audio/mpeg;"),
            wav: a('audio/wav; codecs="1"'),
            loop: (typeof e.loop === "boolean")
        }
    }
    var g = function (h) {
        return !h.paused && !h.ended
    };
    var d = function (l, h, k) {
        var j = document.createElement("audio");
        if (k) {
            var i = function () {
                j.removeEventListener("canplay", i, false);
                k()
            };
            j.addEventListener("canplay", i, false)
        }
        if (h.loop && !c.loop) {
            j.addEventListener("ended", function () {
                j.currentTime = 0;
                j.play()
            }, false)
        }
        j.volume = h.volume || 0.2;
        j.loop = h.loop;
        j.src = l;
        return j
    };
    var f = function (l, h, j) {
        var i = [];
        if (c) {
            for (var m = 0; m < (h.pool || 1); m++) {
                i.push(d(l, h, m == 0 ? j : null))
            }
        } else {
            j()
        }
        var k = function () {
            var p, o;
            for (p = 0; p < i.length; p++) {
                o = i[p];
                if (o.paused || o.ended) {
                    return o
                }
            }
        };
        return {
            audio: (i.length == 1 ? i[0] : i),
            play: function () {
                var n = k();
                if (n) {
                    n.play()
                }
            },
            stop: function () {
                var p, o;
                for (p = 0; p < i.length; p++) {
                    o = i[p];
                    if (g(o)) {
                        o.pause();
                        o.currentTime = 0
                    }
                }
            }
        }
    };
    var b = function (j, i, k) {
        i = i || {};
        var l = j,
            h = i.formats;
        if (h) {
            for (var m = 0; m < h.length; m++) {
                if (c && c[h[m]]) {
                    l = l + "." + h[m];
                    break
                }
            }
        }
        return f(l, i, k)
    };
    b.enabled = c;
    return b
}();
StateMachine = {
    VERSION: "2.0.0",
    create: function (e, f) {
        var h = (typeof e.initial == "string") ? {
            state: e.initial
        } : e.initial;
        var d = f || e.target || {};
        var j = e.events || [];
        var g = e.callbacks || {};
        var b = {};
        var i = function (k) {
            var m = (k.from instanceof Array) ? k.from : [k.from];
            b[k.name] = b[k.name] || {};
            for (var l = 0; l < m.length; l++) {
                b[k.name][m[l]] = k.to
            }
        };
        if (h) {
            h.event = h.event || "startup";
            i({
                name: h.event,
                from: "none",
                to: h.state
            })
        }
        for (var c = 0; c < j.length; c++) {
            i(j[c])
        }
        for (var a in b) {
            if (b.hasOwnProperty(a)) {
                d[a] = StateMachine.buildEvent(a, b[a])
            }
        }
        for (var a in g) {
            if (g.hasOwnProperty(a)) {
                d[a] = g[a]
            }
        }
        d.current = "none";
        d.is = function (k) {
            return this.current == k
        };
        d.can = function (k) {
            return !!b[k][this.current] && !this.transition
        };
        d.cannot = function (k) {
            return !this.can(k)
        };
        if (h && !h.defer) {
            d[h.event]()
        }
        return d
    },
    beforeEvent: function (b, e, d, a) {
        var c = this["onbefore" + b];
        if (c) {
            return c.apply(this, [b, e, d].concat(a))
        }
    },
    afterEvent: function (b, e, d, a) {
        var c = this["onafter" + b] || this["on" + b];
        if (c) {
            return c.apply(this, [b, e, d].concat(a))
        }
    },
    leaveState: function (b, e, d, a) {
        var c = this["onleave" + e];
        if (c) {
            return c.apply(this, [b, e, d].concat(a))
        }
    },
    enterState: function (b, e, d, a) {
        var c = this["onenter" + d] || this["on" + d];
        if (c) {
            return c.apply(this, [b, e, d].concat(a))
        }
    },
    changeState: function (b, e, d, a) {
        var c = this["onchangestate"];
        if (c) {
            return c.apply(this, [b, e, d].concat(a))
        }
    },
    buildEvent: function (a, b) {
        return function () {
            if (this.transition) {
                throw "event " + a + " innapropriate because previous transition did not complete"
            }
            if (this.cannot(a)) {
                throw "event " + a + " innapropriate in current state " + this.current
            }
            var f = this.current;
            var e = b[f];
            var d = Array.prototype.slice.call(arguments);
            if (this.current != e) {
                if (false === StateMachine.beforeEvent.call(this, a, f, e, d)) {
                    return
                }
                var c = this;
                this.transition = function () {
                    c.transition = null;
                    c.current = e;
                    StateMachine.enterState.call(c, a, f, e, d);
                    StateMachine.changeState.call(c, a, f, e, d);
                    StateMachine.afterEvent.call(c, a, f, e, d)
                };
                if (false !== StateMachine.leaveState.call(this, a, f, e, d)) {
                    if (this.transition) {
                        this.transition()
                    }
                }
            }
        }
    }
};
userAgent = function () {
    var c = navigator.userAgent.toLowerCase();
    var b = ((c.indexOf("opera") > -1) ? "opera" : null);
    b = b || ((c.indexOf("firefox") > -1) ? "firefox" : null);
    b = b || ((c.indexOf("chrome") > -1) ? "chrome" : null);
    b = b || ((c.indexOf("safari") > -1) ? "safari" : null);
    b = b || ((c.indexOf("msie") > -1) ? "ie" : null);
    try {
        var d = (b == "ie") ? "msie (\\d)" : b + "\\/(\\d\\.\\d)";
        var f = c.match(new RegExp(d, "i"));
        var a = f ? parseFloat(f[1]) : null
    } catch (g) {}
    return {
        full: c,
        name: b + (a ? " " + a.toString() : ""),
        version: a,
        isFirefox: (b == "firefox"),
        isChrome: (b == "chrome"),
        isSafari: (b == "safari"),
        isOpera: (b == "opera"),
        isIE: (b == "ie"),
        hasAudio: AudioFX && AudioFX.enabled,
        hasCanvas: (document.createElement("canvas").getContext),
        hasTouch: ("ontouchstart" in window)
    }
}();
is = {
    string: function (a) {
        return (typeof a === "string")
    },
    number: function (a) {
        return (typeof a === "number")
    },
    bool: function (a) {
        return (typeof a === "boolean")
    },
    array: function (a) {
        return (a instanceof Array)
    },
    undefined: function (a) {
        return (typeof a === "undefined")
    },
    "null": function (a) {
        return (a === null)
    },
    notNull: function (a) {
        return (a !== null)
    },
    invalid: function (a) {
        return (is["null"](a) || is.undefined(a))
    },
    valid: function (a) {
        return (!is["null"](a) && !is.undefined(a))
    },
    emptyString: function (a) {
        return (is.string(a) && (a.length == 0))
    },
    nonEmptyString: function (a) {
        return (is.string(a) && (a.length > 0))
    },
    emptyArray: function (a) {
        return (is.array(a) && (a.length == 0))
    },
    nonEmptyArray: function (a) {
        return (is.array(a) && (a.length > 0))
    },
    document: function (a) {
        return (a === document)
    },
    window: function (a) {
        return (a === window)
    },
    element: function (a) {
        return (a instanceof HTMLElement)
    },
    event: function (a) {
        return (a instanceof Event)
    },
    link: function (a) {
        return (is.element(a) && (a.tagName == "A"))
    }
};
toBool = function (b, a) {
    if (is.valid(b)) {
        return ((b == 1) || (b == true) || (b == "1") || (b.toString().toLowerCase() == "true") || (b.toString().toLowerCase() == "yes"))
    } else {
        return (is.bool(a) ? a : false)
    }
};
toInt = function (c, b) {
    if (is.valid(c)) {
        var a = parseInt(c, 10);
        if (!isNaN(a)) {
            return a
        }
    }
    return (is.number(b) ? b : 0)
};
toString = function (b, a) {
    if (is.valid(b)) {
        return b.toString()
    }
    return (is.string(a) ? a : "")
};
toFloat = function (c, b) {
    if (is.valid(c)) {
        var a = parseFloat(c);
        if (!isNaN(a)) {
            return a
        }
    }
    return (is.number(b) ? b : 0)
};
if (!Function.prototype.bind) {
    Function.prototype.bind = function (d) {
        var e = [].slice,
            b = e.call(arguments, 1),
            a = this,
            f = function () {},
            c = function () {
                return a.apply(this instanceof f ? this : (d || {}), b.concat(e.call(arguments)))
            };
        f.prototype = a.prototype;
        c.prototype = new f();
        return c
    }
}
if (!Object.create) {
    Object.create = function (b) {
        function a() {}
        a.prototype = b;
        return new a()
    }
}
if (!Object.extend) {
    Object.extend = function (a, c) {
        for (var b in c) {
            if (c.hasOwnProperty(b)) {
                a[b] = c[b]
            }
        }
        return a
    }
}
var Class = {
    create: function (a, b) {
        var c = function () {
            if (this.initialize) {
                return this.initialize.apply(this, arguments)
            }
        };
        c.prototype = a || {};
        Object.extend(c, b || {});
        return c
    }
};
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (b, a) {
        window.setTimeout(b, 1000 / 60)
    }
}
Game = {
    ready: function () {
        var a = [];
        document.addEventListener("DOMContentLoaded", function () {
            for (var b = 0; b < a.length; b++) {
                a[b]()
            }
            a = true
        }, false);
        return function (b) {
            (a === true) ? b() : a.push(b)
        }
    }(),
    Runner: Class.create({
        initialize: function (c, b, a) {
            this.game = b;
            this.cfg = a || {};
            this.canvas = $(c);
            this.bounds = this.canvas.getBoundingClientRect();
            this.width = this.cfg.width || this.canvas.offsetWidth;
            this.height = this.cfg.height || this.canvas.offsetHeight;
            this.canvas = this.canvas;
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.ctx = this.canvas.getContext("2d");
            this.addEvents();
            this.resetStats();
            if (toBool(a.start)) {
                this.start()
            }
        },
        start: function () {
            var f = function () {
                return new Date().getTime()
            };
            var c, a, i, d, g = f(),
                e = false,
                h = this;
            var b = function () {
                a = f();
                h.update(Math.min(0.1, (a - g) / 1000));
                i = f();
                h.draw();
                d = f();
                g = a;
                h.updateStats(i - a, d - i);
                if (!e) {
                    requestAnimationFrame(b)
                }
            };
            this.stop = function () {
                e = true
            };
            b()
        },
        update: function (a) {
            a = Math.min(a, 500);
            this.game.update(a)
        },
        draw: function () {
            this.ctx.save();
            this.game.draw(this.ctx);
            this.ctx.restore();
            this.drawStats(this.ctx)
        },
        resetStats: function () {
            if (this.cfg.stats) {
                this.stats = new Stats();
                this.stats.extra = {
                    update: 0,
                    draw: 0,
                };
                this.stats.domElement.id = "stats";
                this.canvas.parentNode.appendChild(this.stats.domElement)
            }
        },
        updateStats: function (b, a) {
            if (this.cfg.stats) {
                this.stats.update();
                this.stats.extra.update = Math.max(1, b);
                this.stats.extra.draw = Math.max(1, a)
            }
        },
        drawStats: function (a) {},
        addEvents: function () {
            $(window).on("resize", this.onresize.bind(this));
            var a = this.game;
            if (a.onfocus) {
                document.body.tabIndex = toInt(document.body.tabIndex, 0);
                $(document.body).on("focus", function (b) {
                    a.onfocus(b)
                })
            }
            if (a.onclick) {
                $(document).on("click", function (b) {
                    a.onclick(b)
                })
            }
        },
        onresize: function () {
            if (this.onresizeTimer) {
                clearTimeout(this.onresizeTimer)
            }
            this.onresizeTimer = setTimeout(this.onresizeend.bind(this), 50)
        },
        onresizeend: function () {
            this.resize()
        },
        resize: function () {
            if ((this.width != this.canvas.offsetWidth) || (this.height != this.canvas.offsetHeight)) {
                this.width = this.canvas.width = this.canvas.offsetWidth;
                this.height = this.canvas.height = this.canvas.offsetHeight;
                if (this.game && this.game.onresize) {
                    this.game.onresize(this.width, this.height)
                }
            }
        }
    }),
    storage: function () {
        try {
            return this.localStorage = this.localStorage || window.localStorage || {}
        } catch (a) {
            return this.localStorage = {}
        }
    },
    renderToCanvas: function (d, a, c, b) {
        b = b || document.createElement("canvas");
        b.width = d;
        b.height = a;
        c(b.getContext("2d"));
        return b
    },
    createImage: function (b, a) {
        a = a || {};
        var c = $({
            tag: "img"
        });
        if (a.onload) {
            c.on("load", a.onload)
        }
        c.src = b;
        return c
    },
    loadResources: function (i, c, k) {
        i = i || [];
        c = c || [];
        var h = i.length + c.length;
        var b = {
            images: {},
            sounds: {}
        };
        if (h == 0) {
            k(b)
        } else {
            var f = false;
            var g = function () {
                if (!f) {
                    f = true;
                    k(b)
                }
            };
            var e = function () {
                if (--h == 0) {
                    g()
                }
            };
            for (var a = 0; a < i.length; a++) {
                var d = i[a];
                d = is.string(d) ? {
                    id: d,
                    url: d
                } : d;
                b.images[d.id] = Game.createImage(d.url, {
                    onload: e
                })
            }
            for (var a = 0; a < c.length; a++) {
                var j = c[a];
                j = is.string(j) ? {
                    id: j,
                    name: j
                } : j;
                b.sounds[j.id] = AudioFX(j.name, j, e)
            }
            setTimeout(g, 4000)
        }
    }
};
Game.Element = function () {
    var d = function (f, g) {
        if (is.array(g)) {
            return Sizzle.matches(f, g)
        } else {
            return Sizzle(f, g)
        }
    };
    var e = function (g) {
        if (is.array(g)) {
            for (var h = 0, f = g.length; h < f; h++) {
                g[h] = e(g[h])
            }
        } else {
            if (!g._extended) {
                Object.extend(g, Game.Element.instanceMethods)
            }
        }
        return g
    };
    var a = function (i, h, g, f) {
        i.addEventListener(h, g, f)
    };
    var b = function (i, h, g, f) {
        i.removeEventListener(h, g, f)
    };
    var c = function (f) {
        var i = document.createElement(f.tag);
        for (var g in f) {
            if (f.hasOwnProperty(g) && is.valid(f[g])) {
                switch (g) {
                case "tag":
                    break;
                case "html":
                    i.innerHTML = f[g];
                    break;
                case "text":
                    i.appendChild(document.createTextNode(f[g]));
                    break;
                case "dom":
                    f[g] = is.array(f[g]) ? f[g] : [f[g]];
                    for (var j = 0; j < f[g].length; j++) {
                        i.appendChild(f[g][j])
                    }
                    break;
                case "class":
                case "klass":
                case "className":
                    i.className = f[g];
                    break;
                case "on":
                    for (var h in f[g]) {
                        a(i, h, f[g][h])
                    }
                    break;
                default:
                    i.setAttribute(g, f[g]);
                    break
                }
            }
        }
        return i
    };
    return {
        all: function (f, g) {
            return e(d(f, g))
        },
        get: function (g, f) {
            if (is.string(g)) {
                return e(d("#" + g, f)[0])
            } else {
                if (is.element(g) || is.window(g) || is.document(g)) {
                    return e(g)
                } else {
                    if (is.event(g)) {
                        return e(g.target || g.srcElement)
                    } else {
                        if ((typeof g == "object") && g.tag) {
                            return e(c(g))
                        } else {
                            throw "not an appropriate type for DOM wrapping: " + ele
                        }
                    }
                }
            }
        },
        instanceMethods: {
            _extended: true,
            on: function (h, g, f) {
                a(this, h, g, f)
            },
            un: function (h, g, f) {
                b(this, h, g, f)
            },
            showIf: function (f) {
                if (f) {
                    this.show()
                } else {
                    this.hide()
                }
            },
            show: function () {
                this.style.display = ""
            },
            hide: function () {
                this.style.display = "none"
            },
            visible: function () {
                return (this.style.display != "none") && !this.fading
            },
            fade: function (f) {
                this.style.opacity = f
            },
            relations: function (i, g) {
                var f = g ? [this] : [],
                    h = this;
                while (h = h[i]) {
                    if (h.nodeType == 1) {
                        f.push(h)
                    }
                }
                return e(f)
            },
            parent: function () {
                return e(this.parentNode)
            },
            ancestors: function (f) {
                return this.relations("parentNode", f)
            },
            previousSiblings: function () {
                return this.relations("previousSibling")
            },
            nextSiblings: function () {
                return this.relations("nextSibling")
            },
            select: function (f) {
                return Game.Element.all(f, this)
            },
            down: function (f) {
                return Game.Element.all(f, this)[0]
            },
            up: function (f, g) {
                return Game.Element.all(f, this.ancestors(g))[0]
            },
            prev: function (f) {
                return Game.Element.all(f, this.previousSiblings())[0]
            },
            next: function (f) {
                return Game.Element.all(f, this.nextSiblings())[0]
            },
            remove: function () {
                if (this.parentNode) {
                    this.parentNode.removeChild(this)
                }
                return this
            },
            removeChildren: function () {
                while (this.childNodes.length > 0) {
                    this.removeChild(this.childNodes[0])
                }
                return this
            },
            update: function (f) {
                this.innerHTML = "";
                this.append(f)
            },
            append: function (f) {
                if (is.string(f)) {
                    this.innerHTML += f
                } else {
                    if (is.array(f)) {
                        for (var g = 0; g < f.length; g++) {
                            this.append(f[g])
                        }
                    } else {
                        this.appendChild(Game.Element.get(f))
                    }
                }
            },
            setClassName: function (f) {
                this.className = f
            },
            hasClassName: function (f) {
                return (new RegExp("(^|s*)" + f + "(s*|$)")).test(this.className)
            },
            addClassName: function (f) {
                this.toggleClassName(f, true)
            },
            removeClassName: function (f) {
                this.toggleClassName(f, false)
            },
            toggleClassName: function (g, f) {
                var h = this.className.split(" ");
                var i = h.indexOf(g);
                f = (typeof f == "undefined") ? (i < 0) : f;
                if (f && (i < 0)) {
                    h.push(g)
                } else {
                    if (!f && (i >= 0)) {
                        h.splice(i, 1)
                    }
                }
                this.className = h.join(" ")
            },
            fadeout: function (f) {
                f = f || {};
                this.cancelFade();
                this.fading = Animator.apply(this, "opacity: 0", {
                    duration: f.duration,
                    onComplete: function () {
                        this.hide();
                        this.fading = null;
                        this.style.opacity = is.ie ? 1 : null;
                        if (f.onComplete) {
                            f.onComplete()
                        }
                    }.bind(this)
                });
                this.fading.play()
            },
            fadein: function (f) {
                f = f || {};
                this.cancelFade();
                this.style.opacity = 0;
                this.show();
                this.fading = Animator.apply(this, "opacity: 1", {
                    duration: f.duration,
                    onComplete: function () {
                        this.fading = null;
                        this.style.opacity = is.ie ? 1 : null;
                        if (f.onComplete) {
                            f.onComplete()
                        }
                    }.bind(this)
                });
                this.fading.play()
            },
            cancelFade: function () {
                if (this.fading) {
                    this.fading.stop();
                    delete this.fading
                }
            }
        }
    }
}();
$ = Game.Element.get;
$$ = Game.Element.all;
Game.Event = {
    stop: function (a) {
        a.preventDefault();
        a.cancelBubble = true;
        a.returnValue = false;
        return false
    }
};
Game.Menu = Class.create({
    initialize: function (c, b, a) {
        this.parent = $(c);
        this.game = b;
        this.cfg = a;
        this.construct(a.id, a.items, toBool(a.visible, true));
        Game.Key.map([{
            keys: [Game.Key.UP, Game.Key.W],
            mode: "down",
            action: function () {
                this.prev()
            }
        }, {
            keys: [Game.Key.DOWN, Game.Key.S],
            mode: "down",
            action: function () {
                this.next()
            }
        }, {
            keys: [Game.Key.LEFT, Game.Key.A],
            mode: "down",
            action: function () {
                this.prevChoice()
            }
        }, {
            keys: [Game.Key.RIGHT, Game.Key.D],
            mode: "down",
            action: function () {
                this.nextChoice()
            }
        }, {
            keys: [Game.Key.SPACE, Game.Key.RETURN],
            mode: "down",
            action: function () {
                this.click()
            }
        }], this, {
            ele: this.dom
        })
    },
    destruct: function () {
        if (this.dom) {
            this.dom.remove();
            this.dom = null;
            this.items = null
        }
    },
    construct: function (e, a, c) {
        var b = c ? "" : "display: none;";
        this.destruct();
        this.dom = $({
            tag: "div",
            id: e,
            klass: "menu",
            style: b,
            on: {
                mousemove: this.onmousemove.bind(this),
                click: this.onclick.bind(this)
            }
        });
        this.tabindex = 10;
        this.items = [];
        for (var d = 0; d < a.length; d++) {
            this.items.push(this.constructItem(d, a[d]))
        }
        this.parent.append(this.dom);
        this.select(0)
    },
    constructItem: function (c, a) {
        var b = $({
            tag: "span",
            klass: "item",
            style: "cursor: pointer;",
            text: a.text,
            title: a.title,
            tabindex: a.tabindex || this.tabindex++,
            on: {
                focus: this.onfocusitem.bind(this)
            }
        });
        b.cfg = a;
        b.index = c;
        b.action = a.choice ? this.nextChoice.bind(this, b, true) : a.action;
        this.setChoice(b, a.chosen);
        this.dom.append({
            tag: "div",
            dom: b
        });
        return b
    },
    prevChoice: function (b, a) {
        b = b || this.selectedItem();
        if (b.cfg.choice) {
            if (b.cfg.chosen > 0) {
                this.setChoice(b, b.cfg.chosen - 1)
            } else {
                if (a) {
                    this.setChoice(b, b.cfg.choice.length - 1)
                }
            }
        }
    },
    nextChoice: function (b, a) {
        b = b || this.selectedItem();
        if (b.cfg.choice) {
            if (b.cfg.chosen < (b.cfg.choice.length - 1)) {
                this.setChoice(b, b.cfg.chosen + 1)
            } else {
                if (a) {
                    this.setChoice(b, 0)
                }
            }
        }
    },
    setChoice: function (f, g) {
        if (f.cfg.choice) {
            var b = f.cfg.choice;
            var a = f.cfg.chosen = toInt(g, 0);
            var c = $({
                tag: "span",
                klass: "choice",
                text: f.cfg.choice[a]
            });
            var e = $({
                tag: "span",
                klass: "prev",
                text: (a == 0 ? "" : "<")
            });
            var d = $({
                tag: "span",
                klass: "next",
                text: (a == b.length - 1 ? "" : ">")
            });
            if (a > 0) {
                e.on("click", function (h) {
                    this.prevChoice(f, false);
                    Game.Event.stop(h)
                }.bind(this))
            }
            if (a < b.length - 1) {
                d.on("click", function (h) {
                    this.nextChoice(f, false);
                    Game.Event.stop(h)
                }.bind(this))
            }
            f.update([e, c, d]);
            f.cfg.action.call(this.game, f.cfg.chosen)
        }
    },
    item: function (a) {
        return $(a).up(".item", true)
    },
    selectedItem: function () {
        return this.dom.down(".selected")
    },
    selectedIndex: function () {
        return this.selectedItem().index
    },
    firstItem: function () {
        return this.dom.down(".item:first")
    },
    lastItem: function () {
        return this.dom.down(".item:last")
    },
    onfocusitem: function (a) {
        this.select(this.item(a))
    },
    onmousemove: function (a) {
        this.select(this.item(a))
    },
    prev: function () {
        this.select(this.selectedIndex() - 1)
    },
    next: function () {
        this.select(this.selectedIndex() + 1)
    },
    click: function () {
        var a = this.selectedItem();
        if (a && a.action) {
            if (this.cfg.onclick) {
                this.cfg.onclick.call(this.game, a)
            }
            a.action.call(this.game)
        }
    },
    onclick: function (a) {
        if (this.dom.visible()) {
            this.click(this.item(a))
        }
        return Game.Event.stop(a)
    },
    select: function (c) {
        if (is.valid(c)) {
            var a = this.selectedItem();
            var b = is.number(c) ? this.items[Math.min(Math.max(c, 0), this.items.length - 1)] : c;
            if (a != b) {
                if (a) {
                    a.removeClassName("selected")
                }
                if (b) {
                    b.addClassName("selected");
                    b.focus()
                }
                if (this.dom.visible() && this.cfg.onselect) {
                    this.cfg.onselect.call(this.game, a)
                }
            }
        }
    },
    focus: function () {
        this.selectedItem().focus()
    },
    hide: function () {
        this.dom.hide()
    },
    show: function () {
        this.dom.show();
        this.selectedItem().focus()
    },
    fadeout: function (a) {
        this.dom.fadeout(a)
    },
    fadein: function (b) {
        b = b || {};
        var a = b.onComplete;
        b.onComplete = function () {
            this.selectedItem().focus();
            if (a) {
                a()
            }
        }.bind(this);
        this.dom.fadein(b)
    }
});
Game.Key = {
    BACKSPACE: 8,
    TAB: 9,
    RETURN: 13,
    ESC: 27,
    SPACE: 32,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    PAGEUP: 33,
    PAGEDOWN: 34,
    INSERT: 45,
    DELETE: 46,
    ZERO: 48,
    ONE: 49,
    TWO: 50,
    THREE: 51,
    FOUR: 52,
    FIVE: 53,
    SIX: 54,
    SEVEN: 55,
    EIGHT: 56,
    NINE: 57,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    TILDA: 192,
    map: function (d, b, a) {
        a = a || {};
        var c = $(a.ele || document);
        var e = function (h, j, l) {
            var m, f, g;
            if ((c === document) || c.visible()) {
                for (m = 0; m < d.length; ++m) {
                    f = d[m];
                    f.mode = f.mode || "up";
                    if (Game.Key.match(f, j, l, b)) {
                        f.action.call(b, j);
                        return Game.Event.stop(h)
                    }
                }
            }
        };
        c.on("keydown", function (f) {
            return e(f, f.keyCode, "down")
        });
        c.on("keyup", function (f) {
            return e(f, f.keyCode, "up")
        })
    },
    match: function (c, b, d, a) {
        if (c.mode === d) {
            if (!c.state || !a || (c.state === a.current)) {
                if ((c.key === b) || (c.keys && (c.keys.indexOf(b) >= 0))) {
                    return true
                }
            }
        }
        return false
    }
};
Game.Math = {
    THREESIXTY: Math.PI * 2,
    minmax: function (b, c, a) {
        return Math.max(c, Math.min(a, b))
    },
    random: function (b, a) {
        return (b + (Math.random() * (a - b)))
    },
    randomChoice: function (a) {
        return a[Math.round(Game.random(0, a.length - 1))]
    },
    randomBool: function () {
        return Game.randomChoice([true, false])
    },
    between: function (a, c, b) {
        return ((c <= a) && (a <= b))
    },
    brighten: function (f, e) {
        var d = parseInt(f.substr(1, 2), 16),
            c = parseInt(f.substr(3, 2), 16),
            a = parseInt(f.substr(5, 2), 16);
        return "#" + ((0 | (1 << 8) + d + (256 - d) * e / 100).toString(16)).substr(1) + ((0 | (1 << 8) + c + (256 - c) * e / 100).toString(16)).substr(1) + ((0 | (1 << 8) + a + (256 - a) * e / 100).toString(16)).substr(1)
    },
    bound: function (a) {
        if (a.radius) {
            a.w = 2 * a.radius;
            a.h = 2 * a.radius;
            a.left = a.x - a.radius;
            a.right = a.x + a.radius;
            a.top = a.y - a.radius;
            a.bottom = a.y + a.radius
        } else {
            a.left = a.x;
            a.right = a.x + a.w;
            a.top = a.y;
            a.bottom = a.y + a.h
        }
        return a
    },
    overlap: function (c, a, e) {
        if ((c.right < a.left) || (c.left > a.right) || (c.top > a.bottom) || (c.bottom < a.top)) {
            return false
        } else {
            if (e) {
                var g = Math.max(c.left, a.left);
                var d = Math.min(c.right, a.right);
                var f = Math.max(c.top, a.top);
                var b = Math.min(c.bottom, a.bottom);
                return {
                    x: g,
                    y: f,
                    w: d - g,
                    h: b - f,
                    left: g,
                    right: d,
                    top: f,
                    bottom: b
                }
            } else {
                return true
            }
        }
    },
    normalize: function (b, a) {
        b.m = this.magnitude(b.x, b.y);
        if (b.m == 0) {
            b.x = b.y = b.m = 0
        } else {
            b.m = b.m / (a || 1);
            b.x = b.x / b.m;
            b.y = b.y / b.m;
            b.m = b.m / b.m
        }
        return b
    },
    magnitude: function (a, b) {
        return Math.sqrt(a * a + b * b)
    },
    move: function (b, g, d, c, e) {
        var a = d * e;
        var f = c * e;
        return {
            x: b + a,
            y: g + f,
            dx: d,
            dy: c,
            nx: a,
            ny: f
        }
    },
    accelerate: function (g, e, j, i, c, b) {
        var a = g + (b * j) + (c * b * b * 0.5);
        var f = e + (b * i) + (c * b * b * 0.5);
        var h = j + (c * b) * (j > 0 ? 1 : -1);
        var d = i + (c * b) * (i > 0 ? 1 : -1);
        return {
            nx: (a - g),
            ny: (f - e),
            x: a,
            y: f,
            dx: h,
            dy: d
        }
    },
    intercept: function (f, n, e, l, b, j, o, i, h) {
        var g = ((i - j) * (e - f)) - ((o - b) * (l - n));
        if (g != 0) {
            var c = (((o - b) * (n - j)) - ((i - j) * (f - b))) / g;
            if ((c >= 0) && (c <= 1)) {
                var a = (((e - f) * (n - j)) - ((l - n) * (f - b))) / g;
                if ((a >= 0) && (a <= 1)) {
                    var m = f + (c * (e - f));
                    var k = n + (c * (l - n));
                    return {
                        x: m,
                        y: k,
                        d: h
                    }
                }
            }
        }
        return null
    },
    ballIntercept: function (d, b, a, e) {
        var c;
        if (a < 0) {
            c = Game.Math.intercept(d.x, d.y, d.x + a, d.y + e, b.right + d.radius, b.top - d.radius, b.right + d.radius, b.bottom + d.radius, "right")
        } else {
            if (a > 0) {
                c = Game.Math.intercept(d.x, d.y, d.x + a, d.y + e, b.left - d.radius, b.top - d.radius, b.left - d.radius, b.bottom + d.radius, "left")
            }
        } if (!c) {
            if (e < 0) {
                c = Game.Math.intercept(d.x, d.y, d.x + a, d.y + e, b.left - d.radius, b.bottom + d.radius, b.right + d.radius, b.bottom + d.radius, "bottom")
            } else {
                if (e > 0) {
                    c = Game.Math.intercept(d.x, d.y, d.x + a, d.y + e, b.left - d.radius, b.top - d.radius, b.right + d.radius, b.top - d.radius, "top")
                }
            }
        }
        return c
    }
};
Game.Vector = Game.Point = Class.create({
    initialize: function (a, b) {
        this.x = a;
        this.y = b
    },
    equals: function (a) {
        return ((this.x == a.x) && (this.y == a.y))
    },
    blank: function () {
        return (is.invalid(this.x) || is.invalid(this.y))
    }
});
Snakes = function () {
    DIR = {
        UP: 0,
        DOWN: 1,
        LEFT: 2,
        RIGHT: 3,
        OPPOSITE: [1, 0, 3, 2]
    };
    CORNER = {
        NONE: 0,
        BL: 1,
        BR: 2,
        TL: 3,
        TR: 4
    };
    CORNER.LOOKUP = [
        [CORNER.NONE, CORNER.NONE, CORNER.BL, CORNER.BR],
        [CORNER.NONE, CORNER.NONE, CORNER.TL, CORNER.TR],
        [CORNER.TR, CORNER.BR, CORNER.NONE, CORNER.NONE],
        [CORNER.TL, CORNER.BL, CORNER.NONE, CORNER.NONE]
    ];
    var a = {
        runner: {
            stats: true
        },
        state: {
            initial: "loading",
            events: [{
                name: "ready",
                from: "loading",
                to: "menu"
            }, {
                name: "viewScores",
                from: "menu",
                to: "highscores"
            }, {
                name: "viewCredits",
                from: "menu",
                to: "credits"
            }, {
                name: "backToMenu",
                from: "highscores",
                to: "menu"
            }, {
                name: "backToMenu",
                from: "credits",
                to: "menu"
            }, {
                name: "newGame",
                from: "menu",
                to: "game"
            }, {
                name: "quitGame",
                from: "game",
                to: "quit"
            }, {
                name: "quitGame",
                from: "quit",
                to: "menu"
            }, {
                name: "continueGame",
                from: "quit",
                to: "game"
            }, {
                name: "loseGame",
                from: "game",
                to: "menu"
            }, {
                name: "newHighScore",
                from: "game",
                to: "name"
            }, {
                name: "saveHighScore",
                from: "name",
                to: "highscores"
            }, ]
        },
        keys: [{
            keys: [Game.Key.Y, Game.Key.Q],
            mode: "down",
            state: "quit",
            action: function () {
                this.quitGame()
            }
        }, {
            keys: [Game.Key.N, Game.Key.ESC],
            mode: "down",
            state: "quit",
            action: function () {
                this.continueGame()
            }
        }, {
            keys: [Game.Key.ESC, Game.Key.RETURN],
            mode: "down",
            state: "highscores",
            action: function () {
                this.backToMenu()
            }
        }, {
            keys: [Game.Key.ESC, Game.Key.RETURN],
            mode: "down",
            state: "credits",
            action: function () {
                this.backToMenu()
            }
        }, {
            keys: [Game.Key.ESC, Game.Key.RETURN],
            mode: "down",
            state: "name",
            action: function () {
                this.saveHighScore()
            }
        }, {
            keys: [Game.Key.LEFT, Game.Key.A],
            mode: "down",
            state: "game",
            action: function () {
                this.snake.move(DIR.LEFT)
            }
        }, {
            keys: [Game.Key.RIGHT, Game.Key.D],
            mode: "down",
            state: "game",
            action: function () {
                this.snake.move(DIR.RIGHT)
            }
        }, {
            keys: [Game.Key.UP, Game.Key.W],
            mode: "down",
            state: "game",
            action: function () {
                this.snake.move(DIR.UP)
            }
        }, {
            keys: [Game.Key.DOWN, Game.Key.S],
            mode: "down",
            state: "game",
            action: function () {
                this.snake.move(DIR.DOWN)
            }
        }, {
            key: Game.Key.ESC,
            mode: "down",
            state: "game",
            action: function () {
                this.quitGame()
            }
        }],
        difficulties: [{
            label: "Slow",
            dstep: 0.09,
            dscore: 0.75
        }, {
            label: "Normal",
            dstep: 0.07,
            dscore: 1
        }, {
            label: "Fast",
            dstep: 0.05,
            dscore: 1.25
        }, {
            label: "Insane",
            dstep: 0.03,
            dscore: 1.5
        }],
        highscores: [{
            name: "amy",
            score: 3000
        }, {
            name: "jake",
            score: 2500
        }, {
            name: "ritchie",
            score: 2000
        }, {
            name: "eddie",
            score: 1500
        }, {
            name: "code",
            score: 1000
        }, {
            name: "incomplete",
            score: 500
        }, {
            name: "liquid",
            score: 250
        }, {
            name: "planner",
            score: 100
        }],
        colors: {
            head: "#000",
            body: {
                fill: "#FF2D1C",
                stroke: "black"
            },
            fruit: {
                fill: "green",
                stroke: "black"
            },
            wall: {
                fill: "#1F4367",
                stroke: "black"
            },
            particles: ["#F03F37", "#85BD3D", "#EFCA05", "#D41433", "#3D526D", "#DC1135", "#7B5643", "#4E1D4E", "#EB7923", "#EBDA3D", "#EC5675", "#F99120", "#F5AD87", "#DA961E", "#DFBC27", "#ED2920"]
        },
        images: [{
            id: "head",
            url: "images/head.png"
        }, {
            id: "fruit",
            url: "images/fruit.png"
        }],
        sounds: [{
            id: "menu",
            name: "sounds/menu",
            formats: ["mp3", "ogg"],
            loop: true
        }, {
            id: "game",
            name: "sounds/game",
            formats: ["mp3", "ogg"],
            loop: true
        }, {
            id: "eat",
            name: "sounds/eat",
            formats: ["mp3", "ogg"],
            pool: 3
        }, {
            id: "die",
            name: "sounds/die",
            formats: ["mp3", "ogg"]
        }, {
            id: "turn",
            name: "sounds/turn",
            formats: ["mp3", "ogg"],
            pool: 5,
            volume: 0.02
        }, {
            id: "click",
            name: "sounds/turn",
            formats: ["mp3", "ogg"],
            pool: 5,
            volume: 0.05
        }, {
            id: "highscore",
            name: "sounds/highscore",
            formats: ["mp3", "ogg"]
        }, ],
        sparkles: {
            duration: 1200,
            spread: 8,
            max: 200,
            each: 80
        },
        fruit: {
            score: 10,
            growth: 5,
            images: 16,
            size: 64
        },
        snake: {
            x: 45,
            y: 26,
            length: 10,
            dir: DIR.LEFT
        },
        court: {
            w: 48,
            h: 36,
            layout: ["wwwwww                                    wwwwww", "w                                              w", "w                                              w", "w                                              w", "w                                              w", "w                                              w", "                                                ", "                                                ", "                                                ", "                                                ", "                                                ", "                                                ", "                                                ", "                                                ", "                                                ", "                                                ", "                                                ", "                                                ", "                                                ", "                                                ", "                                                ", "                                                ", "                                                ", "                                                ", "                                                ", "                                                ", "                                                ", "                                                ", "                                                ", "                                                ", "w                                              w", "w                                              w", "w                                              w", "w                                              w", "w                                              w", "wwwwww                                    wwwwww", ]
        }
    };
    var b = Class.create({
        initialize: function () {
            this.runner = new Game.Runner("canvas", this, a.runner);
            this.storage = Game.storage();
            this.dom = {
                main: $("snakes"),
                overlay: $("overlay"),
                loading: $("loading"),
                credits: $("credits"),
                sound: $("sound")
            };
            this.render = new d(this);
            this.score = new h(this);
            this.court = new c(this);
            this.snake = new f(this);
            this.fruit = new e(this);
            this.sparkles = new g(this);
            this.resetDifficulty();
            this.resetGame();
            this.menu = this.buildMenu();
            this.quitmenu = this.buildQuitMenu();
            Game.Key.map(a.keys, this);
            StateMachine.create(a.state, this);
            Game.loadResources(a.images, a.sounds, function (i) {
                this.images = i.images;
                this.sounds = i.sounds;
                this.initSound();
                this.ready()
            }.bind(this))
        },
        onenterloading: function (i, k, j) {
            this.dom.loading.show()
        },
        onleaveloading: function (i, k, j) {
            this.dom.loading.fadeout()
        },
        onenterhighscores: function (i, k, j) {
            if (k !== "name") {
                this.score.dom.highscores.page.fadein()
            }
        },
        onleavehighscores: function (i, k, j) {
            this.score.dom.highscores.page.fadeout()
        },
        onentername: function (i, k, j) {
            this.score.newHighScore()
        },
        onleavename: function (i, k, j) {
            this.score.save()
        },
        onentercredits: function (i, k, j) {
            this.dom.credits.fadein()
        },
        onleavecredits: function (i, k, j) {
            this.dom.credits.fadeout()
        },
        onenterquit: function (i, k, j) {
            this.quitmenu.fadein()
        },
        onleavequit: function (i, k, j) {
            this.quitmenu.fadeout()
        },
        onentermenu: function (i, k, j) {
            this.menu.fadein()
        },
        onleavemenu: function (i, k, j) {
            this.menu.fadeout()
        },
        onentergame: function (i, k, j) {
            this.dom.overlay.fadeout();
            this.playGameMusic()
        },
        onleavegame: function (i, k, j) {
            this.dom.overlay.fadein();
            this.playMenuMusic()
        },
        onready: function () {
            this.runner.start()
        },
        onnewGame: function () {
            this.resetGame()
        },
        onbackToMenu: function () {
            this.playClickFx()
        },
        onchangestate: function (i, k, j) {
            this.dom.main.removeClassName("state_is_" + k);
            this.dom.main.addClassName("state_is_" + j)
        },
        resetDifficulty: function (i) {
            this.storage.difficulty = Game.Math.minmax(is.valid(i) ? i : toInt(this.storage.difficulty, 1), 0, a.difficulties.length - 1);
            this.difficulty = a.difficulties[this.storage.difficulty]
        },
        resetGame: function () {
            this.w = a.court.w;
            this.h = a.court.h;
            this.dw = this.runner.width / this.w;
            this.dh = this.runner.height / this.h;
            this.maxX = this.w - 1;
            this.maxY = this.h - 1;
            this.court.reset(a.court);
            this.snake.reset(a.snake);
            this.fruit.reset(this.unoccupied(this.fruit.pos), this.fruit.image);
            this.score.reset()
        },
        initSound: function () {
            this.toggleMute(this.isMute());
            this.dom.sound.on("click", function () {
                this.toggleMute()
            }.bind(this));
            this.dom.sound.show()
        },
        update: function (i) {
            if (this.is("game")) {
                this.court.update(i);
                this.snake.update(i);
                this.fruit.update(i);
                this.score.update(i);
                if ((this.snake.occupies(this.snake.head, true)) || (this.court.occupies(this.snake.head))) {
                    this.playDieFx();
                    this.sparkles.add(this.snake.head, {
                        color: a.colors.head
                    });
                    if (this.score.isworthy()) {
                        this.playHighScoreFx();
                        this.newHighScore()
                    } else {
                        this.loseGame()
                    }
                } else {
                    if (this.fruit.occupies(this.snake.head)) {
                        this.playEatFx();
                        this.sparkles.add(this.fruit.pos, {
                            image: this.fruit.image
                        });
                        this.score.increase(Game.Math.random(1, 9));
                        this.score.increase(this.fruit.score * this.snake.length * this.difficulty.dscore);
                        this.snake.grow(this.fruit.growth);
                        this.fruit.reset(this.unoccupied())
                    }
                }
            }
        },
        draw: function (i) {
            if (!this.is("loading")) {
                this.render.draw(i)
            }
        },
        onclick: function (i) {
            if (this.can("backToMenu")) {
                if (!is.link(i.target)) {
                    this.backToMenu()
                }
            }
        },
        onfocus: function (i) {
            if (this.is("menu")) {
                this.menu.focus()
            } else {
                if (this.is("quit")) {
                    this.quitmenu.focus()
                }
            }
        },
        onresize: function () {
            this.dw = this.runner.width / this.w;
            this.dh = this.runner.height / this.h;
            this.render.onresize()
        },
        unoccupied: function (o) {
            var i = 100,
                m = o || new Game.Point(),
                n = new Game.Point(),
                l = new Game.Point(),
                k = new Game.Point(),
                j = new Game.Point();
            while (--i) {
                if (!m.blank()) {
                    n.x = m.x - 1;
                    n.y = m.y - 1;
                    l.x = m.x + 1;
                    l.y = m.y - 1;
                    k.x = m.x - 1;
                    k.y = m.y + 1;
                    j.x = m.x + 1;
                    j.y = m.y + 1;
                    if (!this.court.occupies(m) && !this.snake.occupies(m) && !this.court.occupies(n) && !this.snake.occupies(n) && !this.court.occupies(l) && !this.snake.occupies(l) && !this.court.occupies(k) && !this.snake.occupies(k) && !this.court.occupies(j) && !this.snake.occupies(j)) {
                        return m
                    }
                }
                m.x = Math.round(Game.Math.random(2, this.maxX - 2));
                m.y = Math.round(Game.Math.random(2, this.maxY - 2))
            }
            return o
        },
        step: function (j, i) {
            switch (i) {
            case DIR.LEFT:
                return new Game.Point(j.x == 0 ? this.maxX : j.x - 1, j.y);
            case DIR.RIGHT:
                return new Game.Point(j.x == this.maxX ? 0 : j.x + 1, j.y);
            case DIR.UP:
                return new Game.Point(j.x, j.y == 0 ? this.maxY : j.y - 1);
            case DIR.DOWN:
                return new Game.Point(j.x, j.y == this.maxY ? 0 : j.y + 1)
            }
        },
        toggleMute: function (i) {
            var j = toBool(i, this.isNotMute());
            this.storage.mute = j;
            this.dom.sound.setClassName(j ? "off" : "on");
            if (j) {
                this.sounds.game.stop();
                this.sounds.menu.stop()
            } else {
                if (this.is("game")) {
                    this.playGameMusic()
                } else {
                    this.playMenuMusic()
                }
            }
        },
        allowMusic: function () {
            return true
        },
        allowFx: function () {
            return !userAgent.isSafari
        },
        isMute: function () {
            return toBool(this.storage.mute)
        },
        isNotMute: function () {
            return !this.isMute()
        },
        playMenuMusic: function () {
            if (this.allowMusic() && this.isNotMute()) {
                this.sounds.game.stop();
                this.sounds.menu.play()
            }
        },
        playGameMusic: function () {
            if (this.allowMusic() && this.isNotMute()) {
                this.sounds.menu.stop();
                this.sounds.game.play()
            }
        },
        playDieFx: function () {
            if (this.allowFx() && this.isNotMute()) {
                this.sounds.die.play()
            }
        },
        playEatFx: function () {
            if (this.allowFx() && this.isNotMute()) {
                this.sounds.eat.play()
            }
        },
        playTurnFx: function () {
            if (this.allowFx() && this.isNotMute()) {
                this.sounds.turn.play()
            }
        },
        playClickFx: function () {
            if (this.allowFx() && this.isNotMute()) {
                this.sounds.click.play()
            }
        },
        playHighScoreFx: function () {
            if (this.allowFx() && this.isNotMute()) {
                this.sounds.highscore.play()
            }
        },
        buildMenu: function () {
            var j, i = [];
            for (j = 0; j < a.difficulties.length; j++) {
                i.push(a.difficulties[j].label)
            }
            return new Game.Menu(this.dom.overlay, this, {
                id: "menu",
                visible: false,
                onselect: function () {
                    this.playClickFx()
                },
                onclick: function () {
                    this.playClickFx()
                },
                items: [{
                    text: "New Game",
                    title: "Start a new game of snakes...",
                    action: function () {
                        this.newGame()
                    }
                }, {
                    title: "Change Difficulty level",
                    action: function (k) {
                        this.resetDifficulty(k)
                    },
                    choice: i,
                    chosen: this.storage.difficulty
                }, {
                    text: "High Scores",
                    title: "View the high score table",
                    action: function () {
                        this.viewScores()
                    }
                }, {
                    text: "Credits",
                    title: "Thanks to the games contributors",
                    action: function () {
                        this.viewCredits()
                    }
                }, ]
            })
        },
        buildQuitMenu: function () {
            return new Game.Menu(this.dom.overlay, this, {
                id: "quitmenu",
                visible: false,
                onselect: function () {
                    this.playClickFx()
                },
                items: [{
                    text: "Abandon",
                    title: "Abandon the current game (Y/N) ?",
                    action: function () {
                        this.quitGame()
                    }
                }, {
                    text: "Continue",
                    title: "Continue the current game ?",
                    action: function () {
                        this.continueGame()
                    }
                }]
            })
        }
    });
    var h = Class.create({
        initialize: function (i) {
            this.game = i;
            this.dom = {
                highscores: {
                    page: $("highscores"),
                    title: $("highscores").down("h1"),
                    list: $("highscores").down("ul"),
                    input: $({
                        tag: "input",
                        maxlength: 10
                    })
                },
                score: {
                    current: $("score").down(".current .value"),
                    high: $("score").down(".high .value")
                }
            };
            this.load();
            this.reset()
        },
        reset: function () {
            this.set(0)
        },
        set: function (i) {
            this.vset(this.score = Math.floor(i))
        },
        vset: function (i) {
            this.vscore = Math.floor(i);
            this.redraw = true
        },
        increase: function (i) {
            this.score = this.score + Math.floor(i)
        },
        format: function (i) {
            return ("0000000" + Math.floor(i)).slice(-6)
        },
        ishigh: function () {
            return (this.vscore > this.highscore)
        },
        isworthy: function () {
            this.vset(this.score);
            return (this.score > this.lowscore)
        },
        update: function (j) {
            if (this.vscore < this.score) {
                var i = this.ishigh();
                this.vset(Math.min(this.score, this.vscore + 1 + (this.score - this.vscore) / 10));
                if (!i && this.ishigh()) {
                    this.game.playHighScoreFx()
                }
            }
        },
        draw: function () {
            if (this.redraw) {
                this.drawScore(this.vscore);
                if (this.ishigh()) {
                    this.drawHighScore(this.vscore)
                }
                this.game.dom.main.toggleClassName("highscore", this.ishigh());
                this.redraw = false
            }
        },
        drawScore: function (i) {
            this.dom.score.current.update(this.format(i))
        },
        drawHighScore: function (i) {
            this.dom.score.high.update(this.format(i))
        },
        buildHighScoreTable: function (m, t) {
            m = m || this.highscores;
            var p = this.dom.highscores.list;
            p.removeChildren();
            var j, r, o, l, q, i, k, s;
            for (j = 0; j < m.length; j++) {
                r = m[j];
                o = (r.name.toUpperCase() === this.name.toUpperCase());
                l = (r === t);
                q = l ? "editing" : (o ? "current" : "");
                i = $({
                    tag: "span",
                    klass: "name",
                    text: l ? null : r.name,
                    dom: l ? this.dom.highscores.input : null
                });
                k = $({
                    tag: "span",
                    klass: "score",
                    text: r.score
                });
                s = $({
                    tag: "li",
                    klass: q,
                    dom: [k, i]
                });
                p.append(s)
            }
            if (is.valid(this.game.storage.highscores) && !t) {
                p.append({
                    tag: "li",
                    dom: $({
                        tag: "span",
                        html: "reset",
                        klass: "reset",
                        on: {
                            click: this.onreset.bind(this)
                        }
                    })
                })
            }
        },
        newHighScore: function () {
            var i = {
                name: this.name,
                score: this.score
            };
            this.buildHighScoreTable(this.insert(i), i);
            this.dom.highscores.page.show();
            this.dom.highscores.input.focus();
            this.dom.highscores.input.value = i.name
        },
        onreset: function (i) {
            delete this.game.storage.highscores;
            this.reset();
            this.load();
            Game.Event.stop(i)
        },
        load: function () {
            this.name = this.game.storage.highscorename || "";
            this.highscores = JSON.parse(this.game.storage.highscores || "null") || a.highscores;
            this.highscore = this.highscores[0].score;
            this.lowscore = this.highscores[this.highscores.length - 1].score;
            this.buildHighScoreTable();
            this.drawHighScore(this.highscore)
        },
        save: function () {
            this.name = this.dom.highscores.input.value;
            this.highscores = this.insert({
                name: this.name,
                score: this.score
            });
            this.highscore = this.highscores[0].score;
            this.lowscore = this.highscores[this.highscores.length - 1].score;
            this.game.storage.highscores = JSON.stringify(this.highscores);
            this.game.storage.highscorename = this.name;
            this.buildHighScoreTable()
        },
        insert: function (l) {
            var o, k = null;
            for (o = 0; o < this.highscores.length; o++) {
                if (l.score > this.highscores[o].score) {
                    k = o;
                    var m = this.highscores.slice(0, k);
                    var j = [l];
                    var i = this.highscores.slice(k, this.highscores.length - 1);
                    return m.concat(j).concat(i)
                }
            }
            return this.highscores
        }
    });
    var c = Class.create({
        initialize: function (i) {
            this.game = i
        },
        reset: function (k) {
            this.walls = [];
            var j, o, l;
            for (o = 0; o < k.layout.length; o++) {
                l = k.layout[o];
                for (j = 0; j < l.length; j++) {
                    if (l[j] == "w") {
                        this.walls.push(new Game.Point(j, o))
                    }
                }
            }
            var m, i;
            for (m = 0; m < this.walls.length; ++m) {
                i = this.walls[m];
                i.north = !this.occupies(new Game.Point(i.x, i.y - 1));
                i.south = !this.occupies(new Game.Point(i.x, i.y + 1));
                i.east = !this.occupies(new Game.Point(i.x + 1, i.y));
                i.west = !this.occupies(new Game.Point(i.x - 1, i.y))
            }
        },
        update: function (i) {},
        occupies: function (l) {
            var j, k, i = this.walls.length;
            for (k = 0; k < i; k++) {
                j = this.walls[k];
                if (j.equals(l)) {
                    return true
                }
            }
            return false
        }
    });
    var e = Class.create({
        initialize: function (i) {
            this.game = i;
            this.score = a.fruit.score;
            this.growth = a.fruit.growth
        },
        reset: function (j, i) {
            this.pos = j || this.pos;
            this.image = is.valid(i) ? i : toInt(this.image, -1) + 1;
            this.image = (this.image >= a.fruit.images) ? 0 : this.image;
            this.occupied = [new Game.Point(this.pos.x - 1, this.pos.y - 1), new Game.Point(this.pos.x, this.pos.y - 1), new Game.Point(this.pos.x + 1, this.pos.y - 1), new Game.Point(this.pos.x - 1, this.pos.y), this.pos, new Game.Point(this.pos.x + 1, this.pos.y), new Game.Point(this.pos.x - 1, this.pos.y + 1), new Game.Point(this.pos.x, this.pos.y + 1), new Game.Point(this.pos.x + 1, this.pos.y + 1)]
        },
        occupies: function (j) {
            for (var i = 0; i < this.occupied.length; i++) {
                if (this.occupied[i].equals(j)) {
                    return true
                }
            }
            return false
        },
        update: function (i) {}
    });
    var g = Class.create({
        initialize: function (i) {
            this.game = i;
            this.all = [];
            this.particles = [];
            for (var j = 0; j < a.sparkles.max; j++) {
                this.particles.push({
                    dx: Game.Math.random(-a.sparkles.spread, a.sparkles.spread),
                    dy: Game.Math.random(-a.sparkles.spread, a.sparkles.spread),
                    size: Game.Math.random(0, 1)
                })
            }
        },
        add: function (k, i) {
            i = i || [];
            var j = {
                pos: k,
                image: i.image,
                color: i.color || (a.colors.particles[i.image]),
                opacity: 1,
                particles: this.getParticles(a.sparkles.each)
            };
            this.all.push(j);
            j.animator = new Animator({
                duration: a.sparkles.duration,
                transition: Animator.tx.easeOut,
                onComplete: function () {
                    this.remove(j)
                }.bind(this)
            });
            j.animator.addSubject(function (l) {
                this.explode(j, l)
            }.bind(this));
            j.animator.play()
        },
        getParticles: function (i) {
            var j = this.particles.splice(0, i);
            var l, i, k;
            for (l = 0, i = j.length; l < i; ++l) {
                k = j[l];
                k.x = k.y = 0
            }
            return j
        },
        remove: function (j) {
            delete j.animator;
            this.particles = this.particles.concat(j.particles);
            var i = this.all.indexOf(j);
            if (i >= 0) {
                this.all.splice(i, 1)
            }
        },
        explode: function (j, i) {
            j.opacity = 1 - i;
            if (j.particles) {
                var l, k;
                for (l = 0; l < j.particles.length; l++) {
                    k = j.particles[l];
                    k.x = k.dx * i;
                    k.y = k.dy * i
                }
            }
        }
    });
    var f = Class.create({
        initialize: function (i) {
            this.game = i
        },
        reset: function (i) {
            this.head = this.tail = new Game.Point(i.x, i.y);
            this.dir = i.dir;
            this.dt = 0;
            this.dstep = this.game.difficulty.dstep;
            this.moves = [];
            this.length = 1;
            this.growth = i.length || 10;
            while (--this.growth) {
                this.increase()
            }
        },
        update: function (i) {
            this.dt = this.dt + i;
            if (this.dt > this.dstep) {
                this.dt = this.dt - this.dstep;
                this.increase(this.moves.shift());
                this.decrease()
            }
        },
        increase: function (i) {
            if (typeof i != "undefined") {
                this.head.corner = CORNER.LOOKUP[this.dir][i];
                this.dir = i;
                this.game.playTurnFx()
            }
            this.push(this.game.step(this.head, this.dir))
        },
        decrease: function () {
            if (this.growth) {
                this.growth--
            } else {
                this.pop()
            }
        },
        push: function (i) {
            i.next = this.head;
            this.head.prev = i;
            this.head = i;
            this.length++
        },
        pop: function () {
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--
        },
        grow: function (i) {
            this.growth += i
        },
        move: function (i) {
            var j = this.moves.length ? this.moves[this.moves.length - 1] : this.dir;
            if ((i != j) && (i != DIR.OPPOSITE[j])) {
                this.moves.push(i)
            }
        },
        occupies: function (k, i) {
            var j = i ? this.head.next : this.head;
            do {
                if (j.equals(k)) {
                    return true
                }
            } while (j = j.next);
            return false
        }
    });
    var d = Class.create({
        initialize: function (i) {
            this.game = i
        },
        draw: function (j) {
            if (!this.parts) {
                this.renderParts()
            }
            j.clearRect(0, 0, this.game.runner.width, this.game.runner.height);
            var q, i, l, m, o, k;
            for (q = 0, i = this.game.sparkles.all.length; q < i; ++q) {
                m = this.game.sparkles.all[q];
                if (is.valid(m.image)) {
                    j.globalAlpha = m.opacity;
                    j.drawImage(this.game.images.fruit, m.image * a.fruit.size, 0, a.fruit.size, a.fruit.size, (m.pos.x - 1) * this.game.dw, (m.pos.y - 1) * this.game.dh, this.game.dw * 3, this.game.dh * 3)
                }
            }
            j.globalAlpha = this.game.is("game") ? 1 : 0.2;
            j.drawImage(this.game.images.fruit, this.game.fruit.image * a.fruit.size, 0, a.fruit.size, a.fruit.size, (this.game.fruit.pos.x - 1) * this.game.dw, (this.game.fruit.pos.y - 1) * this.game.dh, this.game.dw * 3, this.game.dh * 3);
            for (q = 0, i = this.game.court.walls.length; q < i; q++) {
                this.drawPart(j, this.game.court.walls[q], q, 5)
            }
            j.drawImage(this.game.images.head, this.game.snake.dir * 40, 0, 40, 40, this.game.snake.head.x * this.game.dw - (this.game.dw / 4), this.game.snake.head.y * this.game.dh - (this.game.dh / 4), this.game.dw + (this.game.dw / 2), this.game.dh + (this.game.dh / 2));
            k = this.game.snake.head, q = 1;
            while (k = k.next) {
                this.drawPart(j, k, 1 + Math.floor(this.nparts * (q++/this.game.snake.length)),toInt(k.corner))}for(q=0,i=this.game.sparkles.all.length;q<i;q++){m=this.game.sparkles.all[q];j.fillStyle=m.color;j.globalAlpha=m.opacity;for(l=0;l<m.particles.length;l++){o=m.particles[l];j.fillRect((m.pos.x+o.x+0.5)*this.game.dw,(m.pos.y+o.y+0.5)*this.game.dh,o.size*(this.game.dw/2), o.size * (this.game.dh / 2))
                }
            }
            this.game.score.draw()
        },
        drawPart: function (i, l, k, j) {
            i.drawImage(this.parts, k * this.game.dw, j * this.game.dh, this.game.dw, this.game.dh, l.x * this.game.dw, l.y * this.game.dh, this.game.dw, this.game.dh)
        },
        renderParts: function () {
            this.nparts = 100;
            this.parts = Game.renderToCanvas((1 + this.nparts) * this.game.dw, 6 * this.game.dh, function (i) {
                var k, j;
                for (var k = 0; k < this.nparts; k++) {
                    j = k / this.nparts;
                    this.renderSegment(i, {
                        x: 1 + k,
                        y: 0
                    }, CORNER.NONE, j);
                    this.renderSegment(i, {
                        x: 1 + k,
                        y: 1
                    }, CORNER.BL, j);
                    this.renderSegment(i, {
                        x: 1 + k,
                        y: 2
                    }, CORNER.BR, j);
                    this.renderSegment(i, {
                        x: 1 + k,
                        y: 3
                    }, CORNER.TL, j);
                    this.renderSegment(i, {
                        x: 1 + k,
                        y: 4
                    }, CORNER.TR, j)
                }
                if (this.game.court.walls.length > this.nparts) {
                    throw "not enough room to render all the wall parts - I need to optimize away repeating parts"
                }
                for (var k = 0; k < this.game.court.walls.length; k++) {
                    this.renderWall(i, {
                        x: k,
                        y: 5
                    }, this.game.court.walls[k])
                }
            }.bind(this))
        },
        renderWall: function (j, o, i) {
            var l = o.x * this.game.dw;
            var n = o.y * this.game.dh;
            var k = l + this.game.dw;
            var m = n + this.game.dh;
            j.fillStyle = a.colors.wall.fill;
            j.fillRect(l, n, this.game.dw, this.game.dh);
            l = l + 0.5;
            n = n + 0.5;
            k = k - 0.5;
            m = m - 0.5;
            j.strokeStyle = a.colors.wall.stroke;
            j.beginPath();
            j.moveTo(l, n);
            i.north ? j.lineTo(k, n) : j.moveTo(k, n);
            i.east ? j.lineTo(k, m) : j.moveTo(k, m);
            i.south ? j.lineTo(l, m) : j.moveTo(l, m);
            i.west ? j.lineTo(l, n) : j.moveTo(l, n);
            j.stroke();
            j.closePath()
        },
        renderSegment: function (s, o, r, t) {
            var l = this.game.dw * (t / 4) / 2;
            var i = this.game.dh * (t / 4) / 2;
            var k = o.x * this.game.dw + l;
            var p = o.y * this.game.dh + i;
            var q = this.game.dw - (2 * l);
            var m = this.game.dh - (2 * i);
            var j = k + q;
            var n = p + m;
            s.strokeStyle = a.colors.body.stroke;
            s.fillStyle = Game.Math.brighten(a.colors.body.fill, 50 * t);
            k++;
            j--;
            p++;
            n--;
            q -= 2;
            m -= 2;
            switch (r) {
            case CORNER.TL:
                s.beginPath();
                s.moveTo(k, p);
                s.lineTo(k, n);
                s.lineTo(j, p);
                s.closePath();
                s.fill();
                s.stroke();
                break;
            case CORNER.TR:
                s.beginPath();
                s.moveTo(k, p);
                s.lineTo(j, p);
                s.lineTo(j, n);
                s.closePath();
                s.fill();
                s.stroke();
                break;
            case CORNER.BL:
                s.beginPath();
                s.moveTo(k, p);
                s.lineTo(j, n);
                s.lineTo(k, n);
                s.closePath();
                s.fill();
                s.stroke();
                break;
            case CORNER.BR:
                s.beginPath();
                s.moveTo(k, n);
                s.lineTo(j, p);
                s.lineTo(j, n);
                s.closePath();
                s.fill();
                s.stroke();
                break;
            default:
                s.fillRect(k, p, q, m);
                s.strokeRect(k, p, q, m);
                break
            }
        },
        onresize: function () {
            delete this.parts
        }
    });
    return new b()
};