// Automatically generated file.  Do not edit!

'use strict';
var b, h = {
    g: {}
};
h.g.global = function() {
    return "object" === typeof self ? self : "object" === typeof window ? window : "object" === typeof global ? global : this
}();
h.h = {};
h.g.global.Blockly || (h.g.global.Blockly = {});
h.g.global.Blockly.Msg || (h.g.global.Blockly.Msg = h.h);
h.g.O = function(a, c) {
    this.x = a;
    this.y = c
};
h.g.O.me = function(a, c) {
    return a == c ? !0 : a && c ? a.x == c.x && a.y == c.y : !1
};
h.g.O.Pt = function(a, c) {
    var d = a.x - c.x;
    a = a.y - c.y;
    return Math.sqrt(d * d + a * a)
};
h.g.O.HA = function(a) {
    return Math.sqrt(a.x * a.x + a.y * a.y)
};
h.g.O.Mj = function(a, c) {
    return new h.g.O(a.x - c.x, a.y - c.y)
};
h.g.O.sum = function(a, c) {
    return new h.g.O(a.x + c.x, a.y + c.y)
};
h.g.O.prototype.scale = function(a) {
    this.x *= a;
    this.y *= a;
    return this
};
h.g.O.prototype.translate = function(a, c) {
    this.x += a;
    this.y += c;
    return this
};
h.g.Da = {};
h.g.Da.startsWith = function(a, c) {
    return 0 == a.lastIndexOf(c, 0)
};
h.g.Da.Rq = function(a) {
    return a.length ? a.reduce(function(c, d) {
        return c.length < d.length ? c : d
    }).length : 0
};
h.g.Da.st = function(a, c) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    var d = 0;
    c = c || h.g.Da.Rq(a);
    for (var e = 0; e < c; e++) {
        for (var f = a[0][e], g = 1; g < a.length; g++)
            if (f != a[g][e]) return d;
        " " == f && (d = e + 1)
    }
    for (g = 1; g < a.length; g++)
        if ((f = a[g][e]) && " " != f) return d;
    return c
};
h.g.Da.tt = function(a, c) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    var d = 0;
    c = c || h.g.Da.Rq(a);
    for (var e = 0; e < c; e++) {
        for (var f = a[0].substr(-e - 1, 1), g = 1; g < a.length; g++)
            if (f != a[g].substr(-e - 1, 1)) return d;
        " " == f && (d = e + 1)
    }
    for (g = 1; g < a.length; g++)
        if ((f = a[g].charAt(a[g].length - e - 1)) && " " != f) return d;
    return c
};
h.g.Da.fw = function(a, c) {
    a = a.split("\n");
    for (var d = 0; d < a.length; d++) a[d] = h.g.Da.$B(a[d], c);
    return a.join("\n")
};
h.g.Da.$B = function(a, c) {
    if (a.length <= c) return a;
    for (var d = a.trim().split(/\s+/), e = 0; e < d.length; e++) d[e].length > c && (c = d[e].length);
    e = -Infinity;
    var f = 1;
    do {
        var g = e;
        var k = a;
        a = [];
        var l = d.length / f,
            m = 1;
        for (e = 0; e < d.length - 1; e++) m < (e + 1.5) / l ? (m++, a[e] = !0) : a[e] = !1;
        a = h.g.Da.gw(d, a, c);
        e = h.g.Da.jr(d, a, c);
        a = h.g.Da.aC(d, a);
        f++
    } while (e > g);
    return k
};
h.g.Da.jr = function(a, c, d) {
    for (var e = [0], f = [], g = 0; g < a.length; g++) e[e.length - 1] += a[g].length, !0 === c[g] ? (e.push(0), f.push(a[g].charAt(a[g].length - 1))) : !1 === c[g] && e[e.length - 1]++;
    a = Math.max.apply(Math, e);
    for (g = c = 0; g < e.length; g++) c -= 2 * Math.pow(Math.abs(d - e[g]), 1.5), c -= Math.pow(a - e[g], 1.5), -1 != ".?!".indexOf(f[g]) ? c += d / 3 : -1 != ",;)]}".indexOf(f[g]) && (c += d / 4);
    1 < e.length && e[e.length - 1] <= e[e.length - 2] && (c += .5);
    return c
};
h.g.Da.gw = function(a, c, d) {
    for (var e = h.g.Da.jr(a, c, d), f, g = 0; g < c.length - 1; g++)
        if (c[g] != c[g + 1]) {
            var k = [].concat(c);
            k[g] = !k[g];
            k[g + 1] = !k[g + 1];
            var l = h.g.Da.jr(a, k, d);
            l > e && (e = l, f = k)
        }
    return f ? h.g.Da.gw(a, f, d) : c
};
h.g.Da.aC = function(a, c) {
    for (var d = [], e = 0; e < a.length; e++) d.push(a[e]), void 0 !== c[e] && d.push(c[e] ? "\n" : " ");
    return d.join("")
};
h.g.Cd = function(a, c) {
    this.width = a;
    this.height = c
};
h.g.Cd.me = function(a, c) {
    return a == c ? !0 : a && c ? a.width == c.width && a.height == c.height : !1
};
h.g.style = {};
h.g.style.We = function(a) {
    if ("none" != h.g.style.tu(a, "display")) return h.g.style.qu(a);
    var c = a.style,
        d = c.display,
        e = c.visibility,
        f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    var g = a.offsetWidth;
    a = a.offsetHeight;
    c.display = d;
    c.position = f;
    c.visibility = e;
    return new h.g.Cd(g, a)
};
h.g.style.qu = function(a) {
    return new h.g.Cd(a.offsetWidth, a.offsetHeight)
};
h.g.style.tu = function(a, c) {
    return h.g.style.getComputedStyle(a, c) || h.g.style.Mz(a, c) || a.style && a.style[c]
};
h.g.style.getComputedStyle = function(a, c) {
    return document.defaultView && document.defaultView.getComputedStyle && (a = document.defaultView.getComputedStyle(a, null)) ? a[c] || a.getPropertyValue(c) || "" : ""
};
h.g.style.Mz = function(a, c) {
    return a.currentStyle ? a.currentStyle[c] : null
};
h.g.style.tp = function(a) {
    var c = new h.g.O(0, 0);
    a = a.getBoundingClientRect();
    var d = document.documentElement;
    d = new h.g.O(window.pageXOffset || d.scrollLeft, window.pageYOffset || d.scrollTop);
    c.x = a.left + d.x;
    c.y = a.top + d.y;
    return c
};
h.g.style.vu = function() {
    var a = document.body,
        c = document.documentElement;
    return new h.g.O(a.scrollLeft || c.scrollLeft, a.scrollTop || c.scrollTop)
};
h.g.style.AH = function(a, c) {
    a.style.display = c ? "" : "none"
};
h.g.style.Ru = function() {
    return "rtl" == h.g.style.tu(void 0, "direction")
};
h.g.style.Jz = function(a) {
    var c = h.g.style.getComputedStyle(a, "borderLeftWidth"),
        d = h.g.style.getComputedStyle(a, "borderRightWidth"),
        e = h.g.style.getComputedStyle(a, "borderTopWidth");
    a = h.g.style.getComputedStyle(a, "borderBottomWidth");
    return {
        top: parseFloat(e),
        right: parseFloat(d),
        bottom: parseFloat(a),
        left: parseFloat(c)
    }
};
h.g.style.Hv = function(a, c) {
    a = h.g.style.Oz(a, c);
    c.scrollLeft = a.x;
    c.scrollTop = a.y
};
h.g.style.Oz = function(a, c) {
    var d = h.g.style.tp(a),
        e = h.g.style.tp(c),
        f = h.g.style.Jz(c),
        g = d.x - e.x - f.left;
    d = d.y - e.y - f.top;
    a = h.g.style.qu(a);
    e = c.clientHeight - a.height;
    f = c.scrollLeft;
    var k = c.scrollTop;
    f += Math.min(g, Math.max(g - (c.clientWidth - a.width), 0));
    k += Math.min(d, Math.max(d - e, 0));
    return new h.g.O(f, k)
};
h.g.userAgent = {};
(function(a) {
    function c(e) {
        return -1 != d.indexOf(e.toUpperCase())
    }
    h.g.userAgent.raw = a;
    var d = h.g.userAgent.raw.toUpperCase();
    h.g.userAgent.hf = c("Trident") || c("MSIE");
    h.g.userAgent.tl = c("Edge");
    h.g.userAgent.px = c("JavaFX");
    h.g.userAgent.Ts = c("WebKit") && !h.g.userAgent.tl;
    h.g.userAgent.$w = c("Gecko") && !h.g.userAgent.Ts && !h.g.userAgent.hf && !h.g.userAgent.tl;
    h.g.userAgent.bl = c("Android");
    h.g.userAgent.gj = c("iPad");
    h.g.userAgent.Yr = c("iPod");
    h.g.userAgent.Xr = c("iPhone") && !h.g.userAgent.gj && !h.g.userAgent.Yr;
    h.g.userAgent.ux = c("Macintosh");
    h.g.userAgent.Zx = h.g.userAgent.gj || h.g.userAgent.bl && !c("Mobile") || c("Silk");
    h.g.userAgent.gE = !h.g.userAgent.Zx && (h.g.userAgent.Yr || h.g.userAgent.Xr || h.g.userAgent.bl || c("IEMobile"))
})(h.g.global.navigator && h.g.global.navigator.userAgent || "");
h.g.VA = function(a) {
    a.preventDefault();
    a.stopPropagation()
};
h.g.Km = function(a) {
    return "textarea" == a.target.type || "text" == a.target.type || "number" == a.target.type || "email" == a.target.type || "password" == a.target.type || "search" == a.target.type || "tel" == a.target.type || "url" == a.target.type || a.target.isContentEditable
};
h.g.ld = function(a) {
    var c = new h.g.O(0, 0),
        d = a.getAttribute("x");
    d && (c.x = parseInt(d, 10));
    if (d = a.getAttribute("y")) c.y = parseInt(d, 10);
    if (d = (d = a.getAttribute("transform")) && d.match(h.g.ld.ky)) c.x += Number(d[1]), d[3] && (c.y += Number(d[3]));
    (a = a.getAttribute("style")) && -1 < a.indexOf("translate") && (a = a.match(h.g.ld.ly)) && (c.x += Number(a[1]), a[3] && (c.y += Number(a[3])));
    return c
};
h.g.Sj = function(a) {
    for (var c = 0, d = 0; a;) {
        var e = h.g.ld(a);
        c += e.x;
        d += e.y;
        if (-1 != (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) break;
        a = a.parentNode
    }
    return new h.g.O(c, d)
};
h.g.ld.ky = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*)?/;
h.g.ld.ly = /transform:\s*translate(?:3d)?\(\s*([-+\d.e]+)\s*px([ ,]\s*([-+\d.e]+)\s*px)?/;
h.g.ui = function(a) {
    return a.ctrlKey && h.g.userAgent.ux ? !0 : 2 == a.button
};
h.g.qk = function(a, c, d) {
    var e = c.createSVGPoint();
    e.x = a.clientX;
    e.y = a.clientY;
    d || (d = c.getScreenCTM().inverse());
    return e.matrixTransform(d)
};
h.g.pu = function(a) {
    switch (a.deltaMode) {
        case 0:
            return {
                x: a.deltaX,
                y: a.deltaY
            };
        case 1:
            return {
                x: a.deltaX * h.bs,
                y: a.deltaY * h.bs
            };
        case 2:
            return {
                x: a.deltaX * h.vs,
                y: a.deltaY * h.vs
            }
    }
};
h.g.RB = function(a) {
    return h.g.cr(a, !0)
};
h.g.Fc = function(a) {
    if ("string" != typeof a) return a;
    a = h.g.cr(a, !1);
    return a.length ? a[0] : ""
};
h.g.kt = function(a) {
    for (var c = h.h, d = a.match(/%{BKY_[A-Z]\w*}/ig), e = 0; e < d.length; e++) void 0 == c[d[e].toUpperCase().slice(6, -1)] && console.log("WARNING: No message string for " + d[e] + " in " + a)
};
h.g.cr = function(a, c) {
    var d = [],
        e = a.split("");
    e.push("");
    var f = 0;
    a = [];
    for (var g = null, k = 0; k < e.length; k++) {
        var l = e[k];
        0 == f ? "%" == l ? ((l = a.join("")) && d.push(l), a.length = 0, f = 1) : a.push(l) : 1 == f ? "%" == l ? (a.push(l), f = 0) : c && "0" <= l && "9" >= l ? (f = 2, g = l, (l = a.join("")) && d.push(l), a.length = 0) : "{" == l ? f = 3 : (a.push("%", l), f = 0) : 2 == f ? "0" <= l && "9" >= l ? g += l : (d.push(parseInt(g, 10)), k--, f = 0) : 3 == f && ("" == l ? (a.splice(0, 0, "%{"), k--, f = 0) : "}" != l ? a.push(l) : (f = a.join(""), /[A-Z]\w*/i.test(f) ? (l = f.toUpperCase(), (l = h.g.Da.startsWith(l, "BKY_") ?
            l.substring(4) : null) && l in h.h ? (f = h.h[l], "string" == typeof f ? Array.prototype.push.apply(d, h.g.cr(f, c)) : c ? d.push(String(f)) : d.push(f)) : d.push("%{" + f + "}")) : d.push("%{" + f + "}"), f = a.length = 0))
    }(l = a.join("")) && d.push(l);
    c = [];
    for (k = a.length = 0; k < d.length; ++k) "string" == typeof d[k] ? a.push(d[k]) : ((l = a.join("")) && c.push(l), a.length = 0, c.push(d[k]));
    (l = a.join("")) && c.push(l);
    a.length = 0;
    return c
};
h.g.Ve = function() {
    for (var a = h.g.Ve.Rv.length, c = [], d = 0; 20 > d; d++) c[d] = h.g.Ve.Rv.charAt(Math.random() * a);
    return c.join("")
};
h.g.Ve.Rv = "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
h.g.Mg = function() {
    if (void 0 !== h.g.Mg.Go) return h.g.Mg.Go;
    if (!h.g.global.getComputedStyle) return !1;
    var a = document.createElement("p"),
        c = "none",
        d = {
            webkitTransform: "-webkit-transform",
            OTransform: "-o-transform",
            msTransform: "-ms-transform",
            MozTransform: "-moz-transform",
            transform: "transform"
        };
    document.body.insertBefore(a, null);
    for (var e in d)
        if (void 0 !== a.style[e]) {
            a.style[e] = "translate3d(1px,1px,1px)";
            c = h.g.global.getComputedStyle(a);
            if (!c) return document.body.removeChild(a), !1;
            c = c.getPropertyValue(d[e])
        }
    document.body.removeChild(a);
    h.g.Mg.Go = "none" !== c;
    return h.g.Mg.Go
};
h.g.Gv = function(a) {
    if ("object" != typeof document) throw Error("Blockly.utils.runAfterPageLoad() requires browser document.");
    if ("complete" == document.readyState) a();
    else var c = setInterval(function() {
        "complete" == document.readyState && (clearInterval(c), a())
    }, 10)
};
h.g.Zz = function() {
    var a = h.g.style.vu();
    return {
        right: document.documentElement.clientWidth + a.x,
        bottom: document.documentElement.clientHeight + a.y,
        top: a.y,
        left: a.x
    }
};
h.g.Rl = function(a, c) {
    c = a.indexOf(c);
    if (-1 == c) return !1;
    a.splice(c, 1);
    return !0
};
h.g.Tz = function() {
    var a = document.documentElement,
        c = window;
    return h.g.userAgent.hf && c.pageYOffset != a.scrollTop ? new h.g.O(a.scrollLeft, a.scrollTop) : new h.g.O(c.pageXOffset || a.scrollLeft, c.pageYOffset || a.scrollTop)
};
h.g.pp = function(a, c) {
    var d = Object.create(null),
        e = p(a, !0);
    c && (a = u(a)) && (a = e.indexOf(a), e.splice(a, e.length - a));
    for (a = 0; c = e[a]; a++) d[c.type] ? d[c.type]++ : d[c.type] = 1;
    return d
};
h.g.xB = function(a, c) {
    var d = c.x;
    c = c.y;
    var e = aa(a).getBoundingClientRect();
    d = new h.g.O(d - e.left, c - e.top);
    c = h.g.Sj(a.$a);
    return h.g.O.Mj(d, c).scale(1 / a.scale)
};
h.i = {};
h.i.zu = "";
h.i.$b = !0;
h.i.Vo = 0;
h.i.ml = "create";
h.i.xr = h.i.ml;
h.i.aj = "delete";
h.i.xw = h.i.aj;
h.i.Zi = "change";
h.i.nC = h.i.Zi;
h.i.ij = "move";
h.i.yr = h.i.ij;
h.i.Ps = "var_create";
h.i.Qs = "var_delete";
h.i.Rs = "var_rename";
h.i.Nl = "ui";
h.i.kl = "comment_create";
h.i.Er = "comment_delete";
h.i.Dr = "comment_change";
h.i.ll = "comment_move";
h.i.Vw = "finished_loading";
h.i.yw = [h.i.xr, h.i.yr, h.i.kl, h.i.ll];
h.i.bj = [];
h.i.Na = function(a) {
    h.i.isEnabled() && (h.i.bj.length || setTimeout(h.i.Bz, 0), h.i.bj.push(a))
};
h.i.Bz = function() {
    for (var a = h.i.filter(h.i.bj, !0), c = h.i.bj.length = 0, d; d = a[c]; c++)
        if (d.Ub) {
            var e = h.hb.qp(d.Ub);
            if (e) {
                var f = d;
                if (f.$b)
                    for (e.nh.push(f), e.zk.length = 0; e.nh.length > e.fs && 0 <= e.fs;) e.nh.shift();
                for (var g = 0; d = e.zc[g]; g++) d(f)
            }
        }
};
h.i.filter = function(a, c) {
    a = a.slice();
    c || a.reverse();
    for (var d = [], e = Object.create(null), f = 0, g; g = a[f]; f++)
        if (!g.si()) {
            var k = [g.type, g.gc, g.Ub].join(" "),
                l = e[k],
                m = l ? l.event : null;
            if (!l) e[k] = {
                event: g,
                index: f
            }, d.push(g);
            else if (g.type == h.i.ij && l.index == f - 1) m.Vg = g.Vg, m.Ug = g.Ug, m.Rf = g.Rf, l.index = f;
            else if (g.type == h.i.Zi && g.element == m.element && g.name == m.name) m.newValue = g.newValue;
            else if (g.type != h.i.Nl || "click" != g.element || "commentOpen" != m.element && "mutatorOpen" != m.element && "warningOpen" != m.element) e[k] = {
                event: g,
                index: 1
            }, d.push(g)
        }
    a = d.filter(function(n) {
        return !n.si()
    });
    c || a.reverse();
    for (f = 1; g = a[f]; f++) g.type == h.i.Zi && "mutation" == g.element && a.unshift(a.splice(f, 1)[0]);
    return a
};
h.i.Ty = function() {
    for (var a = 0, c; c = h.i.bj[a]; a++) c.$b = !1
};
h.i.disable = function() {
    h.i.Vo++
};
h.i.enable = function() {
    h.i.Vo--
};
h.i.isEnabled = function() {
    return 0 == h.i.Vo
};
h.i.Db = function() {
    return h.i.zu
};
h.i.ga = function(a) {
    h.i.zu = "boolean" == typeof a ? a ? h.g.Ve() : "" : a
};
h.i.iu = function(a) {
    var c = [];
    a = p(a, !1);
    for (var d = 0, e; e = a[d]; d++) c[d] = e.id;
    return c
};
h.i.pa = function(a) {
    switch (a.type) {
        case h.i.ml:
            var c = new h.i.wd(null);
            break;
        case h.i.aj:
            c = new h.i.Vd(null);
            break;
        case h.i.Zi:
            c = new h.i.gf(null, "", "", "", "");
            break;
        case h.i.ij:
            c = new h.i.lg(null);
            break;
        case h.i.Ps:
            c = new h.i.cd(null);
            break;
        case h.i.Qs:
            c = new h.i.Ed(null);
            break;
        case h.i.Rs:
            c = new h.i.ce(null, "");
            break;
        case h.i.Nl:
            c = new h.i.bd(null, "", "", "");
            break;
        case h.i.kl:
            c = new h.i.Fe(null);
            break;
        case h.i.Dr:
            c = new h.i.xh(null, "", "");
            break;
        case h.i.ll:
            c = new h.i.fg(null);
            break;
        case h.i.Er:
            c = new h.i.Ge(null);
            break;
        default:
            throw Error("Unknown event type.");
    }
    c.pa(a);
    c.Ub = (void 0).id;
    return c
};
h.i.NG = function(a) {
    if ((a.type == h.i.ij || a.type == h.i.ml) && a.Ub) {
        var c = h.hb.qp(a.Ub);
        if (a = v(c, a.gc)) {
            var d = a.getParent();
            if (d && d.isEnabled())
                for (c = p(a, !1), a = 0; d = c[a]; a++) d.we(!0);
            else if ((a.M || a.R) && !c.yc()) {
                do a.we(!1), a = u(a); while (a)
            }
        }
    }
};
h.i.Abstract = function() {
    this.Ub = void 0;
    this.group = h.i.Db();
    this.$b = h.i.$b
};
h.i.Abstract.prototype.Ia = function() {
    var a = {
        type: this.type
    };
    this.group && (a.group = this.group);
    return a
};
h.i.Abstract.prototype.pa = function(a) {
    this.group = a.group
};
h.i.Abstract.prototype.si = function() {
    return !1
};
h.i.Abstract.prototype.run = function() {};

function w(a) {
    if (a.Ub) var c = h.hb.qp(a.Ub);
    if (!c) throw Error("Workspace is null. Event must have been generated from real Blockly events.");
    return c
};
h.g.object = {};
h.g.object.S = function(a, c) {
    a.w = c.prototype;
    a.prototype = Object.create(c.prototype);
    a.prototype.constructor = a
};
h.g.object.yi = function(a, c) {
    for (var d in c) a[d] = c[d]
};
h.g.object.values = function(a) {
    return Object.values ? Object.values(a) : Object.keys(a).map(function(c) {
        return a[c]
    })
};
h.g.xml = {};
h.g.xml.Ex = "https://developers.google.com/blockly/xml";
h.g.xml.document = function() {
    return document
};
h.g.xml.createElement = function(a) {
    return h.g.xml.document().createElementNS(h.g.xml.Ex, a)
};
h.g.xml.createTextNode = function(a) {
    return h.g.xml.document().createTextNode(a)
};
h.g.xml.NB = function(a) {
    return (new DOMParser).parseFromString(a, "text/xml")
};
h.g.xml.Mc = function(a) {
    return (new XMLSerializer).serializeToString(a)
};
h.i.Ud = function(a) {
    h.i.Ud.w.constructor.call(this);
    this.gc = a.id;
    this.Ub = a.C.id
};
h.g.object.S(h.i.Ud, h.i.Abstract);
h.i.Ud.prototype.Ia = function() {
    var a = h.i.Ud.w.Ia.call(this);
    a.blockId = this.gc;
    return a
};
h.i.Ud.prototype.pa = function(a) {
    h.i.Ud.w.pa.call(this, a);
    this.gc = a.blockId
};
h.i.gf = function(a, c, d, e, f) {
    a && (h.i.gf.w.constructor.call(this, a), this.element = c, this.name = d, this.oldValue = e, this.newValue = f)
};
h.g.object.S(h.i.gf, h.i.Ud);
h.i.uh = h.i.gf;
b = h.i.gf.prototype;
b.type = h.i.Zi;
b.Ia = function() {
    var a = h.i.gf.w.Ia.call(this);
    a.element = this.element;
    this.name && (a.name = this.name);
    a.newValue = this.newValue;
    return a
};
b.pa = function(a) {
    h.i.gf.w.pa.call(this, a);
    this.element = a.element;
    this.name = a.name;
    this.newValue = a.newValue
};
b.si = function() {
    return this.oldValue == this.newValue
};
b.run = function(a) {
    var c = v(w(this), this.gc);
    if (c) switch (c.Qf && c.Qf.Eb(!1), a = a ? this.newValue : this.oldValue, this.element) {
        case "field":
            (c = ba(c, this.name)) ? c.setValue(a): console.warn("Can't set non-existent field: " + this.name);
            break;
        case "comment":
            c.Hi(a || null);
            break;
        case "collapsed":
            c.Zf(!!a);
            break;
        case "disabled":
            c.we(!a);
            break;
        case "inline":
            c.Ii(!!a);
            break;
        case "mutation":
            var d = "";
            c.qd && (d = (d = c.qd()) && h.K.Mc(d));
            if (c.Ue) {
                var e = h.K.$f(a || "<mutation/>");
                c.Ue(e)
            }
            h.i.Na(new h.i.gf(c, "mutation", null, d,
                a));
            break;
        default:
            console.warn("Unknown change type: " + this.element)
    } else console.warn("Can't change non-existent block: " + this.gc)
};
h.i.wd = function(a) {
    a && (h.i.wd.w.constructor.call(this, a), this.xml = a.C.ca ? h.K.Bo(a) : h.K.sf(a), this.Lg = h.i.iu(a))
};
h.g.object.S(h.i.wd, h.i.Ud);
h.i.il = h.i.wd;
h.i.wd.prototype.type = h.i.ml;
h.i.wd.prototype.Ia = function() {
    var a = h.i.wd.w.Ia.call(this);
    a.xml = h.K.Mc(this.xml);
    a.ids = this.Lg;
    return a
};
h.i.wd.prototype.pa = function(a) {
    h.i.wd.w.pa.call(this, a);
    this.xml = h.K.$f(a.xml);
    this.Lg = a.ids
};
h.i.wd.prototype.run = function(a) {
    var c = w(this);
    if (a) a = h.g.xml.createElement("xml"), a.appendChild(this.xml), h.K.Eg(a, c);
    else {
        a = 0;
        for (var d; d = this.Lg[a]; a++) {
            var e = v(c, d);
            e ? e.I(!1) : d == this.gc && console.warn("Can't uncreate non-existent block: " + d)
        }
    }
};
h.i.Vd = function(a) {
    if (a) {
        if (a.getParent()) throw Error("Connected blocks cannot be deleted.");
        h.i.Vd.w.constructor.call(this, a);
        this.pq = a.C.ca ? h.K.Bo(a) : h.K.sf(a);
        this.Lg = h.i.iu(a)
    }
};
h.g.object.S(h.i.Vd, h.i.Ud);
h.i.zw = h.i.Vd;
h.i.Vd.prototype.type = h.i.aj;
h.i.Vd.prototype.Ia = function() {
    var a = h.i.Vd.w.Ia.call(this);
    a.ids = this.Lg;
    return a
};
h.i.Vd.prototype.pa = function(a) {
    h.i.Vd.w.pa.call(this, a);
    this.Lg = a.ids
};
h.i.Vd.prototype.run = function(a) {
    var c = w(this);
    if (a) {
        a = 0;
        for (var d; d = this.Lg[a]; a++) {
            var e = v(c, d);
            e ? e.I(!1) : d == this.gc && console.warn("Can't delete non-existent block: " + d)
        }
    } else a = h.g.xml.createElement("xml"), a.appendChild(this.pq), h.K.Eg(a, c)
};
h.i.lg = function(a) {
    a && (h.i.lg.w.constructor.call(this, a), a = ca(this), this.kv = a.qv, this.jv = a.Lu, this.mq = a.Bt)
};
h.g.object.S(h.i.lg, h.i.Ud);
h.i.Xi = h.i.lg;
b = h.i.lg.prototype;
b.type = h.i.ij;
b.Ia = function() {
    var a = h.i.lg.w.Ia.call(this);
    this.Vg && (a.newParentId = this.Vg);
    this.Ug && (a.newInputName = this.Ug);
    this.Rf && (a.newCoordinate = Math.round(this.Rf.x) + "," + Math.round(this.Rf.y));
    return a
};
b.pa = function(a) {
    h.i.lg.w.pa.call(this, a);
    this.Vg = a.newParentId;
    this.Ug = a.newInputName;
    a.newCoordinate && (a = a.newCoordinate.split(","), this.Rf = new h.g.O(Number(a[0]), Number(a[1])))
};
b.$g = function() {
    var a = ca(this);
    this.Vg = a.qv;
    this.Ug = a.Lu;
    this.Rf = a.Bt
};

function ca(a) {
    var c = v(w(a), a.gc);
    a = {};
    var d = c.getParent();
    if (d) {
        a.qv = d.id;
        a: {
            for (var e = 0, f; f = d.N[e]; e++)
                if (f.connection && x(f.connection) == c) {
                    c = f;
                    break a
                }
            c = null
        }
        c && (a.Lu = c.name)
    } else a.Bt = c.Ha();
    return a
}
b.si = function() {
    return this.kv == this.Vg && this.jv == this.Ug && h.g.O.me(this.mq, this.Rf)
};
b.run = function(a) {
    var c = w(this),
        d = v(c, this.gc);
    if (d) {
        var e = a ? this.Vg : this.kv,
            f = a ? this.Ug : this.jv;
        a = a ? this.Rf : this.mq;
        var g = null;
        if (e && (g = v(c, e), !g)) {
            console.warn("Can't connect to non-existent block: " + e);
            return
        }
        d.getParent() && y(d);
        if (a) f = d.Ha(), d.moveBy(a.x - f.x, a.y - f.y);
        else {
            d = d.M || d.R;
            if (f) {
                if (c = da(g, f)) var k = c.connection
            } else d.type == h.Bd && (k = g.V);
            k ? d.connect(k) : console.warn("Can't connect to non-existent input: " + f)
        }
    } else console.warn("Can't move non-existent block: " + this.gc)
};
h.g.m = {};
h.g.m.qc = "http://www.w3.org/2000/svg";
h.g.m.Hn = "http://www.w3.org/1999/xhtml";
h.g.m.dd = "http://www.w3.org/1999/xlink";
h.g.m.Node = {
    ELEMENT_NODE: 1,
    TEXT_NODE: 3,
    COMMENT_NODE: 8,
    DOCUMENT_POSITION_CONTAINED_BY: 16
};
h.g.m.vg = null;
h.g.m.Fo = 0;
h.g.m.L = function(a, c, d) {
    a = document.createElementNS(h.g.m.qc, a);
    for (var e in c) a.setAttribute(e, c[e]);
    document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
    d && d.appendChild(a);
    return a
};
h.g.m.Ib = function(a, c) {
    var d = a.getAttribute("class") || "";
    if (-1 != (" " + d + " ").indexOf(" " + c + " ")) return !1;
    d && (d += " ");
    a.setAttribute("class", d + c);
    return !0
};
h.g.m.Sc = function(a, c) {
    var d = a.getAttribute("class");
    if (-1 == (" " + d + " ").indexOf(" " + c + " ")) return !1;
    d = d.split(/\s+/);
    for (var e = 0; e < d.length; e++) d[e] && d[e] != c || (d.splice(e, 1), e--);
    d.length ? a.setAttribute("class", d.join(" ")) : a.removeAttribute("class");
    return !0
};
h.g.m.Cu = function(a, c) {
    return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + c + " ")
};
h.g.m.removeNode = function(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
};
h.g.m.ni = function(a, c) {
    var d = c.nextSibling;
    c = c.parentNode;
    if (!c) throw Error("Reference node has no parent.");
    d ? c.insertBefore(a, d) : c.appendChild(a)
};
h.g.m.containsNode = function(a, c) {
    return !!(a.compareDocumentPosition(c) & h.g.m.Node.DOCUMENT_POSITION_CONTAINED_BY)
};
h.g.m.Dk = function(a, c) {
    a.style.transform = c;
    a.style["-webkit-transform"] = c
};
h.g.m.Lk = function() {
    h.g.m.Fo++;
    h.g.m.vg || (h.g.m.vg = {})
};
h.g.m.Mk = function() {
    h.g.m.Fo--;
    h.g.m.Fo || (h.g.m.vg = null)
};
h.g.m.xp = function(a) {
    var c = a.textContent + "\n" + a.className.baseVal,
        d;
    if (h.g.m.vg && (d = h.g.m.vg[c])) return d;
    try {
        d = h.g.userAgent.hf || h.g.userAgent.tl ? a.getBBox().width : a.getComputedTextLength()
    } catch (e) {
        return 8 * a.textContent.length
    }
    h.g.m.vg && (h.g.m.vg[c] = d);
    return d
};
h.Qa = {};
h.Qa.Xo = 0;
h.Qa.em = null;
h.Qa.oz = function(a) {
    var c = a.C,
        d = a.Y();
    c.Bc.play("delete");
    a = ea(c, d);
    d = d.cloneNode(!0);
    d.UB = a.x;
    d.VB = a.y;
    d.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
    z(c).appendChild(d);
    d.dt = d.getBBox();
    h.Qa.Ot(d, c.H, new Date, c.scale)
};
h.Qa.Ot = function(a, c, d, e) {
    var f = (new Date - d) / 150;
    1 < f ? h.g.m.removeNode(a) : (a.setAttribute("transform", "translate(" + (a.UB + (c ? -1 : 1) * a.dt.width * e / 2 * f) + "," + (a.VB + a.dt.height * e * f) + ") scale(" + (1 - f) * e + ")"), setTimeout(h.Qa.Ot, 10, a, c, d, e))
};
h.Qa.Zy = function(a) {
    var c = a.C,
        d = c.scale;
    c.Bc.play("click");
    if (!(1 > d)) {
        var e = ea(c, a.Y());
        a.M ? (e.x += (a.H ? 3 : -3) * d, e.y += 13 * d) : a.R && (e.x += (a.H ? -23 : 23) * d, e.y += 3 * d);
        a = h.g.m.L("circle", {
            cx: e.x,
            cy: e.y,
            r: 0,
            fill: "none",
            stroke: "#888",
            "stroke-width": 10
        }, z(c));
        h.Qa.xt(a, new Date, d)
    }
};
h.Qa.xt = function(a, c, d) {
    var e = (new Date - c) / 150;
    1 < e ? h.g.m.removeNode(a) : (a.setAttribute("r", 25 * e * d), a.style.opacity = 1 - e, h.Qa.Xo = setTimeout(h.Qa.xt, 10, a, c, d))
};
h.Qa.nz = function(a) {
    a.C.Bc.play("disconnect");
    if (!(1 > a.C.scale)) {
        var c = A(a).height;
        c = Math.atan(10 / c) / Math.PI * 180;
        a.H || (c *= -1);
        h.Qa.Nt(a.Y(), c, new Date)
    }
};
h.Qa.Nt = function(a, c, d) {
    var e = (new Date - d) / 200;
    1 < e ? a.Kk = "" : (a.Kk = "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * c) + ")", h.Qa.em = a, h.Qa.Xo = setTimeout(h.Qa.Nt, 10, a, c, d));
    a.setAttribute("transform", a.Tk + a.Kk)
};
h.Qa.Yo = function() {
    if (h.Qa.em) {
        clearTimeout(h.Qa.Xo);
        var a = h.Qa.em;
        a.Kk = "";
        a.setAttribute("transform", a.Tk);
        h.Qa.em = null
    }
};
h.xl = function(a) {
    this.Rd = h.selected = a;
    this.s = a.C;
    this.Qg = this.Pp = null;
    this.ai = fa(this, this.Rd);
    this.Nb = this.bb = null;
    this.De = !1;
    this.Sg = null;
    this.Gp = !1;
    this.ji = null;
    a = this.Rd.kd(!1);
    var c;
    a: {
        for (c = this.Rd.V; c;) {
            var d = x(c);
            if (!d) break a;
            c = d.V
        }
        c = null
    }
    c && c != this.Rd.V && (a.push(c), this.Pp = c, this.Qg = fa(this, c.D));
    this.xo = a
};
h.xl.prototype.I = function() {
    this.s = this.Rd = null;
    this.xo.length = 0;
    this.Nb = this.bb = null;
    h.i.disable();
    try {
        this.ai && (this.ai.I(), this.ai = null), this.Qg && (this.Qg.I(), this.Qg = null)
    } finally {
        h.i.enable()
    }
    this.ji = null
};
h.xl.prototype.update = function(a, c) {
    var d = this.bb && this.Nb ? h.Fr : h.ec;
    for (var e = null, f = null, g = 0; g < this.xo.length; g++) {
        var k = this.xo[g],
            l = k.closest(d, a);
        l.connection && (e = l.connection, f = k, d = l.dn)
    }
    e = (d = {
        closest: e,
        local: f,
        dn: d
    }, !!d.closest) && c != h.Kr;
    if ((this.De = !!c && !this.Rd.getParent() && this.Rd.Pc() && !e) || ha(this, d, a)) {
        h.i.disable();
        d.closest ? (a = this.bb != d.closest, c = this.Nb != d.local, this.bb && this.Nb && (a || c || this.De) && ia(this)) : ia(this);
        this.Nb = this.bb = this.Sg = null;
        if (!this.De && (a = d.closest, c = d.local,
                a))
            if (a == this.bb || a.D.Kf()) console.log("Trying to connect to an insertion marker");
            else {
                this.bb = a;
                this.Nb = c;
                a = this.bb;
                c = this.Nb;
                if (c.type == h.zd) a = a.isConnected() && !h.ea.Tu(this.Rd, a.la.D);
                else {
                    a: {
                        for (d = 0; e = c.D.N[d]; d++)
                            if (e.connection && e.connection.type == h.Ca) {
                                d = e.connection;
                                break a
                            }
                        d = null
                    }
                    a = c == d ? 0 : !this.Rd.V && c.type == h.Bd && a.isConnected()
                }
                if (a) a = this.bb, c = this.Nb, x(a) ? (this.ji = x(a), ja(x(a), !0)) : c.type == h.zd && (this.ji = a.D, a.D.jA(a, !0)), this.Gp = !0;
                else {
                    d = this.Nb;
                    a = this.bb;
                    c = this.Pp && d == this.Pp ? this.Qg :
                        this.ai;
                    a: {
                        f = d.D;e = c.kd(!0);f = f.kd(!0);
                        if (e.length != f.length) throw Error("Connection lists did not match in length.");
                        for (g = 0; g < f.length; g++)
                            if (f[g] == d) {
                                d = e[g];
                                break a
                            }
                        d = null
                    }
                    if (d == this.Sg) throw Error("Made it to connectMarker_ even though the marker isn't changing");
                    c.Ba();
                    c.ca = !0;
                    c.Y().setAttribute("visibility", "visible");
                    d.type != h.Ca && d.type != h.Oa || c.moveBy(a.qb - d.qb, a.Ka - d.Ka);
                    d.connect(a);
                    this.Sg = d
                }
                this.bb && this.bb.zm()
            }
        h.i.enable()
    }
};

function fa(a, c) {
    var d = c.type;
    h.i.disable();
    try {
        var e = a.s.jq(d);
        e.Lv(!0);
        e.Zf(c.isCollapsed());
        if (c.qd) {
            var f = c.qd();
            f && e.Ue(f)
        }
        for (a = 0; a < c.N.length; a++) {
            var g = c.N[a],
                k = e.N[a];
            for (d = 0; d < g.Ma.length; d++) k.Ma[d].setValue(g.Ma[d].getValue())
        }
        e.mi();
        e.Y().setAttribute("visibility", "hidden")
    } finally {
        h.i.enable()
    }
    return e
}

function ha(a, c, d) {
    var e = c.local,
        f = c.closest;
    c = c.dn;
    if (e && f) {
        if (a.Nb && a.bb) {
            if (a.bb == f && a.Nb == e) return !1;
            e = a.Nb.qb + d.x - a.bb.qb;
            a = a.Nb.Ka + d.y - a.bb.Ka;
            a = Math.sqrt(e * e + a * a);
            return !(f && c > a - h.Gw)
        }
        if (a.Nb || a.bb) console.error("Only one of localConnection_ and closestConnection_ was set.");
        else return !0
    } else return !(!a.Nb || !a.bb);
    console.error("Returning true from shouldUpdatePreviews, but it's not clear why.");
    return !0
}

function ia(a) {
    a.bb && (h.g.m.removeNode(h.ea.Ku), delete h.ea.Ku);
    if (a.Gp) {
        var c = a.bb;
        c.type != h.Oa || c.isConnected() ? ja(a.ji, !1) : a.ji.jA(c, !1);
        a.ji = null;
        a.Gp = !1
    } else if (a.Sg)
        if (a.Sg) {
            c = a.Sg;
            var d = c.D,
                e = d.V,
                f = d.R,
                g = d.M;
            g = c.type == h.Oa && !(g && g.la);
            !(c != e || f && f.la) || g ? y(x(c), !1) : c.type == h.Ca && c != e ? (e = c.la, y(e.D, !1), f = f ? f.la : null, y(d, !0), f && f.connect(e)) : y(d, !0);
            if (c.la) throw Error("markerConnection_ still connected at the end of disconnectInsertionMarker");
            a.Sg = null;
            d.Y().setAttribute("visibility", "hidden")
        } else console.log("No insertion marker connection to disconnect")
}
h.xl.prototype.bi = function() {
    var a = [];
    this.ai && a.push(this.ai);
    this.Qg && a.push(this.Qg);
    return a
};
h.eg = function(a, c) {
    this.cb = a;
    this.s = c;
    this.le = new h.xl(this.cb);
    this.Dg = null;
    this.De = !1;
    this.ze = this.cb.Ha();
    this.im = h.eg.qA(a)
};
h.eg.prototype.I = function() {
    this.Fb = this.s = this.cb = null;
    this.im.length = 0;
    this.le && (this.le.I(), this.le = null)
};
h.eg.qA = function(a) {
    var c = [];
    a = p(a, !1);
    for (var d = 0, e; e = a[d]; d++) {
        e = ka(e);
        for (var f = 0; f < e.length; f++) c.push({
            location: e[f].Am,
            icon: e[f]
        })
    }
    return c
};

function ma(a, c, d) {
    d = a.Bi(d);
    var e = h.g.O.sum(a.ze, d);
    a.cb.hq(e);
    for (e = 0; e < a.im.length; e++) {
        var f = a.im[e];
        na(f.icon, h.g.O.sum(f.location, d))
    }
    a.Dg = oa(a.s, c);
    a.le.update(d, a.Dg);
    a.De = a.le.De;
    c = a.s.bc;
    a.De ? (pa(a.cb, !0), a.Dg == h.En && c && qa(c, !0)) : (pa(a.cb, !1), c && qa(c, !1))
}

function ra(a, c, d) {
    ma(a, c, d);
    a.im = [];
    h.g.m.Mk();
    h.Qa.Yo();
    c = a.Bi(d);
    d = h.g.O.sum(a.ze, c);
    var e = a.cb;
    e.$k && (e.translate(d.x, d.y), e.C.Kc.Tl(e.C.$a));
    d = a.s.bc;
    a.De ? (d && setTimeout(d.close.bind(d), 100), a.Qj(), a.cb.I(!1, !0)) : d && d.close();
    a.De || (sa(a.cb, c.x, c.y), a.cb.dh(!1), a.Qj(), a.le.bb ? (c = a.le, c.bb && (h.i.disable(), ia(c), h.i.enable(), c.Nb.connect(c.bb), c.Rd.ca && (h.Qa.Zy((C(c.Nb) ? c.bb : c.Nb).D), ta(D(c.Rd))))) : a.cb.Ba(), ua(a.cb));
    a.s.Rb(!0);
    (c = a.s.sa) && c.qB(a.cb.Pc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
    h.i.ga(!1)
}
h.eg.prototype.Qj = function() {
    var a = new h.i.Xi(this.cb);
    a.mq = this.ze;
    a.$g();
    h.i.Na(a)
};
h.eg.prototype.Bi = function(a) {
    a = new h.g.O(a.x / this.s.scale, a.y / this.s.scale);
    this.s.ri && a.scale(1 / this.s.options.Ac.scale);
    return a
};
h.eg.prototype.bi = function() {
    return this.le && this.le.bi ? this.le.bi() : []
};
h.Touch = {};
h.Touch.Ns = "ontouchstart" in h.g.global || !!(h.g.global.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!h.g.global.navigator || !h.g.global.navigator.maxTouchPoints && !h.g.global.navigator.msMaxTouchPoints);
h.Touch.Sk = null;
h.Touch.ae = {};
h.g.global.PointerEvent ? h.Touch.ae = {
    mousedown: ["pointerdown"],
    mouseenter: ["pointerenter"],
    mouseleave: ["pointerleave"],
    mousemove: ["pointermove"],
    mouseout: ["pointerout"],
    mouseover: ["pointerover"],
    mouseup: ["pointerup", "pointercancel"],
    touchend: ["pointerup"],
    touchcancel: ["pointercancel"]
} : h.Touch.Ns && (h.Touch.ae = {
    mousedown: ["touchstart"],
    mousemove: ["touchmove"],
    mouseup: ["touchend", "touchcancel"]
});
h.Nm = 0;
h.GA = function(a, c) {
    h.Pf();
    a.changedTouches && 1 != a.changedTouches.length || (h.Nm = setTimeout(function() {
        a.changedTouches && (a.button = 2, a.clientX = a.changedTouches[0].clientX, a.clientY = a.changedTouches[0].clientY);
        c && va(c, a)
    }, h.tx))
};
h.Pf = function() {
    h.Nm && (clearTimeout(h.Nm), h.Nm = 0)
};
h.Touch.Ul = function() {
    h.Touch.Sk = null
};
h.Touch.Sq = function(a) {
    return !h.Touch.yA(a) || h.Touch.Qy(a)
};
h.Touch.vm = function(a) {
    return void 0 != a.pointerId ? a.pointerId : a.changedTouches && a.changedTouches[0] && void 0 !== a.changedTouches[0].identifier && null !== a.changedTouches[0].identifier ? a.changedTouches[0].identifier : "mouse"
};
h.Touch.Qy = function(a) {
    var c = h.Touch.vm(a);
    return void 0 !== h.Touch.Sk && null !== h.Touch.Sk ? h.Touch.Sk == c : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type ? (h.Touch.Sk = c, !0) : !1
};
h.Touch.zB = function(a) {
    if (h.g.Da.startsWith(a.type, "touch")) {
        var c = a.changedTouches[0];
        a.clientX = c.clientX;
        a.clientY = c.clientY
    }
};
h.Touch.yA = function(a) {
    return h.g.Da.startsWith(a.type, "touch") || h.g.Da.startsWith(a.type, "mouse") || h.g.Da.startsWith(a.type, "pointer")
};
h.Touch.Mm = function(a) {
    return h.g.Da.startsWith(a.type, "touch") || h.g.Da.startsWith(a.type, "pointer")
};
h.Touch.HB = function(a) {
    var c = [];
    if (a.changedTouches)
        for (var d = 0; d < a.changedTouches.length; d++) c[d] = {
            type: a.type,
            changedTouches: [a.changedTouches[d]],
            target: a.target,
            stopPropagation: function() {
                a.stopPropagation()
            },
            preventDefault: function() {
                a.preventDefault()
            }
        };
    else c.push(a);
    return c
};
h.Lh = function(a) {
    this.s = a;
    this.Oc = new h.za(a, !0, !0, "blocklyMainWorkspaceScrollbar");
    this.Wc = new h.za(a, !1, !0, "blocklyMainWorkspaceScrollbar");
    this.Ej = h.g.m.L("rect", {
        height: h.za.ac,
        width: h.za.ac,
        "class": "blocklyScrollbarBackground"
    }, null);
    h.g.m.ni(this.Ej, a.ef)
};
h.Lh.prototype.eb = null;
h.Lh.prototype.I = function() {
    h.g.m.removeNode(this.Ej);
    this.eb = this.s = this.Ej = null;
    this.Oc.I();
    this.Oc = null;
    this.Wc.I();
    this.Wc = null
};
h.Lh.prototype.resize = function() {
    var a = this.s.vc();
    if (a) {
        var c = !1,
            d = !1;
        this.eb && this.eb.lb == a.lb && this.eb.vb == a.vb && this.eb.rc == a.rc && this.eb.fc == a.fc ? (this.eb && this.eb.ie == a.ie && this.eb.wb == a.wb && this.eb.tc == a.tc || (c = !0), this.eb && this.eb.gd == a.gd && this.eb.Bb == a.Bb && this.eb.ic == a.ic || (d = !0)) : d = c = !0;
        c && this.Oc.resize(a);
        d && this.Wc.resize(a);
        this.eb && this.eb.lb == a.lb && this.eb.fc == a.fc || this.Ej.setAttribute("x", this.Wc.te.x);
        this.eb && this.eb.vb == a.vb && this.eb.rc == a.rc || this.Ej.setAttribute("y", this.Oc.te.y);
        this.eb = a
    }
};
h.Lh.prototype.set = function(a, c) {
    var d = {};
    a *= this.Oc.Pb;
    c *= this.Wc.Pb;
    var e = this.Wc.td,
        f = a / this.Oc.td;
    d.x = isNaN(f) ? 0 : f;
    e = c / e;
    d.y = isNaN(e) ? 0 : e;
    this.s.eh(d);
    wa(this.Oc, a);
    wa(this.Wc, c)
};
h.za = function(a, c, d, e) {
    this.s = a;
    this.Ai = d || !1;
    this.Kg = c;
    this.eb = null;
    this.Fj(e);
    this.te = new h.g.O(0, 0);
    a = h.za.ac;
    c ? (this.Sb.setAttribute("height", a), this.re.setAttribute("height", a), this.Gc.setAttribute("height", a - 5), this.Gc.setAttribute("y", 2.5), this.jk = "width", this.uv = "x") : (this.Sb.setAttribute("width", a), this.re.setAttribute("width", a), this.Gc.setAttribute("width", a - 5), this.Gc.setAttribute("x", 2.5), this.jk = "height", this.uv = "y");
    this.ov = h.ra(this.Sb, "mousedown", this, this.$A);
    this.pv = h.ra(this.Gc,
        "mousedown", this, this.aB)
};
b = h.za.prototype;
b.rq = new h.g.O(0, 0);
b.Uv = 0;
b.td = 0;
b.Ef = 0;
b.Vj = 0;
b.Nf = !0;
b.yg = !0;
h.za.ac = 15;
h.Touch.Ns && (h.za.ac = 25);
h.za.IA = function(a, c) {
    return a && c && a.lb == c.lb && a.vb == c.vb && a.wb == c.wb && a.Bb == c.Bb && a.rc == c.rc && a.fc == c.fc && a.ie == c.ie && a.gd == c.gd && a.tc == c.tc && a.ic == c.ic ? !0 : !1
};
h.za.prototype.I = function() {
    xa();
    h.fb(this.ov);
    this.ov = null;
    h.fb(this.pv);
    this.pv = null;
    h.g.m.removeNode(this.re);
    this.Sb = this.J = this.re = null;
    this.Gc && (this.s.Tb.unsubscribe(this.Gc), this.Gc = null);
    this.s = null
};

function wa(a, c) {
    a.Vj = c;
    a.Gc.setAttribute(a.uv, a.Vj)
}

function ya(a, c) {
    a.td = c;
    a.re.setAttribute(a.jk, a.td);
    a.Sb.setAttribute(a.jk, a.td)
}
h.Lh.prototype.bh = function(a) {
    this.Oc.bh(a);
    this.Wc.bh(a)
};

function za(a, c, d) {
    a.te.x = c;
    a.te.y = d;
    h.g.m.Dk(a.re, "translate(" + (a.te.x + a.rq.x) + "px," + (a.te.y + a.rq.y) + "px)")
}
b = h.za.prototype;
b.resize = function(a) {
    if (!a && (a = this.s.vc(), !a)) return;
    h.za.IA(a, this.eb) || (this.eb = a, this.Kg ? Aa(this, a) : Ba(this, a), Ca(this))
};

function Aa(a, c) {
    var d = c.lb - 1;
    a.Ai && (d -= h.za.ac);
    ya(a, Math.max(0, d));
    d = c.fc + .5;
    a.Ai && a.s.H && (d += h.za.ac);
    za(a, d, c.rc + c.vb - h.za.ac - .5);
    Da(a, c)
}

function Da(a, c) {
    a.Ai || a.Eb(a.td < c.ie);
    a.Pb = a.td / c.ie;
    if (-Infinity == a.Pb || Infinity == a.Pb || isNaN(a.Pb)) a.Pb = 0;
    a.Ef = Math.max(0, c.lb * a.Pb);
    a.Gc.setAttribute(a.jk, a.Ef);
    wa(a, Ea(a, (c.wb - c.tc) * a.Pb))
}

function Ba(a, c) {
    var d = c.vb - 1;
    a.Ai && (d -= h.za.ac);
    ya(a, Math.max(0, d));
    d = c.fc + .5;
    a.s.H || (d += c.lb - h.za.ac - 1);
    za(a, d, c.rc + .5);
    Fa(a, c)
}

function Fa(a, c) {
    a.Ai || a.Eb(a.td < c.gd);
    a.Pb = a.td / c.gd;
    if (-Infinity == a.Pb || Infinity == a.Pb || isNaN(a.Pb)) a.Pb = 0;
    a.Ef = Math.max(0, c.vb * a.Pb);
    a.Gc.setAttribute(a.jk, a.Ef);
    wa(a, Ea(a, (c.Bb - c.ic) * a.Pb))
}
b.Fj = function(a) {
    var c = "blocklyScrollbar" + (this.Kg ? "Horizontal" : "Vertical");
    a && (c += " " + a);
    this.re = h.g.m.L("svg", {
        "class": c
    }, null);
    this.J = h.g.m.L("g", {}, this.re);
    this.Sb = h.g.m.L("rect", {
        "class": "blocklyScrollbarBackground"
    }, this.J);
    a = Math.floor((h.za.ac - 5) / 2);
    this.Gc = h.g.m.L("rect", {
        "class": "blocklyScrollbarHandle",
        rx: a,
        ry: a
    }, this.J);
    this.s.Tb.subscribe(this.Gc, "scrollbar", "fill");
    this.s.Tb.subscribe(this.Gc, "scrollbarOpacity", "fill-opacity");
    h.g.m.ni(this.re, z(this.s))
};
b.isVisible = function() {
    return this.Nf
};
b.bh = function(a) {
    var c = a != this.yg;
    this.yg = a;
    c && this.Wk()
};
b.Eb = function(a) {
    var c = a != this.isVisible();
    if (this.Ai) throw Error("Unable to toggle visibility of paired scrollbars.");
    this.Nf = a;
    c && this.Wk()
};
b.Wk = function() {
    this.yg && this.isVisible() ? this.re.setAttribute("display", "block") : this.re.setAttribute("display", "none")
};
b.$A = function(a) {
    Ga(this.s);
    h.Touch.Ul();
    xa();
    if (h.g.ui(a)) a.stopPropagation();
    else {
        var c = h.g.qk(a, z(this.s), Ha(this.s));
        c = this.Kg ? c.x : c.y;
        var d = h.g.Sj(this.Gc);
        d = this.Kg ? d.x : d.y;
        var e = this.Vj,
            f = .95 * this.Ef;
        c <= d ? e -= f : c >= d + this.Ef && (e += f);
        wa(this, Ea(this, e));
        Ca(this);
        a.stopPropagation();
        a.preventDefault()
    }
};
b.aB = function(a) {
    Ga(this.s);
    xa();
    h.g.ui(a) ? a.stopPropagation() : (this.IB = this.Vj, Ia(this.s), this.Uv = this.Kg ? a.clientX : a.clientY, h.za.Uf = h.ra(document, "mouseup", this, this.fB), h.za.Tf = h.ra(document, "mousemove", this, this.bB), a.stopPropagation(), a.preventDefault())
};
b.bB = function(a) {
    wa(this, Ea(this, this.IB + ((this.Kg ? a.clientX : a.clientY) - this.Uv)));
    Ca(this)
};
b.fB = function() {
    Ja(this.s);
    h.Touch.Ul();
    xa()
};

function xa() {
    h.jc(!0);
    h.za.Uf && (h.fb(h.za.Uf), h.za.Uf = null);
    h.za.Tf && (h.fb(h.za.Tf), h.za.Tf = null)
}

function Ea(a, c) {
    return c = 0 >= c || isNaN(c) || a.td < a.Ef ? 0 : Math.min(c, a.td - a.Ef)
}

function Ca(a) {
    var c = a.Vj / a.td;
    isNaN(c) && (c = 0);
    var d = {};
    a.Kg ? d.x = c : d.y = c;
    a.s.eh(d)
}
b.set = function(a) {
    wa(this, Ea(this, a * this.Pb));
    Ca(this)
};
h.g.pd = {};
h.g.pd.Zq = function(a) {
    return a * Math.PI / 180
};
h.g.pd.QB = function(a) {
    return 180 * a / Math.PI
};
h.g.pd.wj = function(a, c, d) {
    if (d < a) {
        var e = d;
        d = a;
        a = e
    }
    return Math.max(a, Math.min(c, d))
};
h.rl = function() {
    this.Mb = this.mb = null
};

function E(a, c) {
    a.mb = c;
    a.Mb && a.Mb.draw(a.mb)
}
b = h.rl.prototype;
b.va = function() {
    this.Mb && this.Mb.va()
};
b.next = function() {
    var a = this.mb;
    if (!a) return null;
    for (a = a.next(); a && a.next() && (a.jb() == h.B.types.xd || a.jb() == h.B.types.Ic);) a = a.next();
    a && E(this, a);
    return a
};
b.Yj = function() {
    var a = this.mb;
    if (!a) return null;
    if (a.jb() == h.B.types.Ad || a.jb() == h.B.types.Jh) a = a.next();
    (a = a.Yj()) && E(this, a);
    return a
};
b.ue = function() {
    var a = this.mb;
    if (!a) return null;
    for (a = a.ue(); a && a.ue() && (a.jb() == h.B.types.xd || a.jb() == h.B.types.Ic);) a = a.ue();
    a && E(this, a);
    return a
};
b.tk = function() {
    var a = this.mb;
    if (!a) return null;
    (a = a.tk()) && a.jb() == h.B.types.Ic && (a = a.ue() || a);
    a && E(this, a);
    return a
};
h.lf = function() {
    h.lf.w.constructor.call(this)
};
h.g.object.S(h.lf, h.rl);
h.lf.prototype.next = function() {
    return null
};
h.lf.prototype.Yj = function() {
    return null
};
h.lf.prototype.ue = function() {
    return null
};
h.lf.prototype.tk = function() {
    return null
};
h.$x = function() {
    this.Gy = h.Mh.$i.gz;
    this.Wy = Object.create(null)
};

function Ka(a, c) {
    return (c = a.Wy[c]) && "string" == typeof propertyValue && Ka(a, c) ? Ka(a, c) : c ? String(c) : null
};
h.mj = function(a) {
    this.ln = a;
    this.jn = [];
    this.uf = Object.create(null)
};
h.mj.prototype.zp = function() {
    return this.ln
};
h.mj.prototype.subscribe = function(a, c, d) {
    this.uf[c] || (this.uf[c] = []);
    this.uf[c].push({
        element: a,
        propertyName: d
    });
    a.style[d] = this.ln && Ka(this.ln, c) || ""
};
h.mj.prototype.unsubscribe = function(a) {
    if (a)
        for (var c = Object.keys(this.uf), d = 0, e; e = c[d]; d++) {
            for (var f = this.uf[e], g = f.length - 1; 0 <= g; g--) f[g].element === a && f.splice(g, 1);
            this.uf[e].length || delete this.uf[e]
        }
};
h.mj.prototype.I = function() {
    this.uf = this.jn = this.ln = this.lc = null
};
h.Mh = {};
h.Mh.$i = {};
h.Mh.$i.gz = {
    colour_blocks: {
        colourPrimary: "20"
    },
    list_blocks: {
        colourPrimary: "260"
    },
    logic_blocks: {
        colourPrimary: "210"
    },
    loop_blocks: {
        colourPrimary: "120"
    },
    math_blocks: {
        colourPrimary: "230"
    },
    procedure_blocks: {
        colourPrimary: "290"
    },
    text_blocks: {
        colourPrimary: "160"
    },
    variable_blocks: {
        colourPrimary: "330"
    },
    variable_dynamic_blocks: {
        colourPrimary: "310"
    },
    hat_blocks: {
        colourPrimary: "330",
        hat: "cap"
    }
};
h.Mh.$i.GG = {
    colour_category: {
        colour: "20"
    },
    list_category: {
        colour: "260"
    },
    logic_category: {
        colour: "210"
    },
    loop_category: {
        colour: "120"
    },
    math_category: {
        colour: "230"
    },
    procedure_category: {
        colour: "290"
    },
    text_category: {
        colour: "160"
    },
    variable_category: {
        colour: "330"
    },
    variable_dynamic_category: {
        colour: "310"
    }
};
h.Mh.$i = new h.$x;
h.i.Me = function(a) {
    h.i.Me.w.constructor.call(this);
    this.ag = a.ob();
    this.Ub = a.C.id
};
h.g.object.S(h.i.Me, h.i.Abstract);
h.i.Me.prototype.Ia = function() {
    var a = h.i.Me.w.Ia.call(this);
    a.varId = this.ag;
    return a
};
h.i.Me.prototype.pa = function(a) {
    h.i.Me.w.Ia.call(this);
    this.ag = a.varId
};
h.i.cd = function(a) {
    a && (h.i.cd.w.constructor.call(this, a), this.ph = a.type, this.oh = a.name)
};
h.g.object.S(h.i.cd, h.i.Me);
h.i.cd.prototype.type = h.i.Ps;
h.i.cd.prototype.Ia = function() {
    var a = h.i.cd.w.Ia.call(this);
    a.varType = this.ph;
    a.varName = this.oh;
    return a
};
h.i.cd.prototype.pa = function(a) {
    h.i.cd.w.pa.call(this, a);
    this.ph = a.varType;
    this.oh = a.varName
};
h.i.cd.prototype.run = function(a) {
    var c = w(this);
    a ? c.Jd(this.oh, this.ph, this.ag) : c.Xh(this.ag)
};
h.i.Ed = function(a) {
    a && (h.i.Ed.w.constructor.call(this, a), this.ph = a.type, this.oh = a.name)
};
h.g.object.S(h.i.Ed, h.i.Me);
h.i.Ed.prototype.type = h.i.Qs;
h.i.Ed.prototype.Ia = function() {
    var a = h.i.Ed.w.Ia.call(this);
    a.varType = this.ph;
    a.varName = this.oh;
    return a
};
h.i.Ed.prototype.pa = function(a) {
    h.i.Ed.w.pa.call(this, a);
    this.ph = a.varType;
    this.oh = a.varName
};
h.i.Ed.prototype.run = function(a) {
    var c = w(this);
    a ? c.Xh(this.ag) : c.Jd(this.oh, this.ph, this.ag)
};
h.i.ce = function(a, c) {
    a && (h.i.ce.w.constructor.call(this, a), this.oq = a.name, this.kq = c)
};
h.g.object.S(h.i.ce, h.i.Me);
h.i.ce.prototype.type = h.i.Rs;
h.i.ce.prototype.Ia = function() {
    var a = h.i.ce.w.Ia.call(this);
    a.oldName = this.oq;
    a.newName = this.kq;
    return a
};
h.i.ce.prototype.pa = function(a) {
    h.i.ce.w.pa.call(this, a);
    this.oq = a.oldName;
    this.kq = a.newName
};
h.i.ce.prototype.run = function(a) {
    var c = w(this);
    a ? c.ah(this.ag, this.kq) : c.ah(this.ag, this.oq)
};
h.po = function(a) {
    this.Ja = Object.create(null);
    this.C = a
};
b = h.po.prototype;
b.clear = function() {
    this.Ja = Object.create(null)
};
b.Bv = function(a, c) {
    var d = this.Cf(c, a.type),
        e = F(this.C, !1);
    h.i.ga(!0);
    try {
        if (d && d.ob() != a.ob()) {
            var f = a.type;
            c != d.name && La(d, c, e);
            for (c = 0; c < e.length; c++) {
                var g = void 0;
                a.ob();
                d.ob();
                for (var k = 0; g = e[c].N[k]; k++)
                    for (var l = 0; g.Ma[l]; l++);
            }
            h.i.Na(new h.i.Ed(a));
            this.Ja[f].splice(this.wm(f).indexOf(a), 1)
        } else La(a, c, e)
    } finally {
        h.i.ga(!1)
    }
};
b.ah = function(a, c) {
    var d = this.Df(a);
    if (!d) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
    this.Bv(d, c)
};

function La(a, c, d) {
    h.i.Na(new h.i.ce(a, c));
    a.name = c;
    for (a = 0; a < d.length; a++)
        for (var e = d[a], f = 0; c = e.N[f]; f++)
            for (var g = 0; c.Ma[g]; g++);
}
b.Jd = function(a, c, d) {
    var e = this.Cf(a, c);
    if (e) {
        if (d && e.ob() != d) throw Error('Variable "' + a + '" is already in use and its id is "' + e.ob() + '" which conflicts with the passed in id, "' + d + '".');
        return e
    }
    if (d && this.Df(d)) throw Error('Variable id, "' + d + '", is already in use.');
    e = d || h.g.Ve();
    c = c || "";
    e = new h.Ol(this.C, a, c, e);
    a = this.Ja[c] || [];
    a.push(e);
    delete this.Ja[c];
    this.Ja[c] = a;
    return e
};
b.Xh = function(a) {
    var c = this.Df(a);
    if (c) {
        var d = c.name,
            e = this.Bp(a);
        a = 0;
        for (var f; f = e[a]; a++)
            if ("procedures_defnoreturn" == f.type || "procedures_defreturn" == f.type) {
                a = Ma(f, "NAME");
                d = h.h.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", d).replace("%2", a);
                h.alert(d);
                return
            }
        var g = this;
        1 < e.length ? (d = h.h.DELETE_VARIABLE_CONFIRMATION.replace("%1", String(e.length)).replace("%2", d), h.confirm(d, function(k) {
            k && g.cm(c, e)
        })) : g.cm(c, e)
    } else console.warn("Can't delete non-existent variable: " + a)
};
b.cm = function(a, c) {
    var d = h.i.Db();
    d || h.i.ga(!0);
    try {
        for (var e = 0; e < c.length; e++) c[e].I(!0, !1);
        var f = this.Ja[a.type];
        c = 0;
        for (var g; g = f[c]; c++)
            if (g.ob() == a.ob()) {
                f.splice(c, 1);
                h.i.Na(new h.i.Ed(a));
                break
            }
    } finally {
        d || h.i.ga(!1)
    }
};
b.Cf = function(a, c) {
    if (c = this.Ja[c || ""])
        for (var d = 0, e; e = c[d]; d++)
            if (h.yd.me(e.name, a)) return e;
    return null
};
b.Df = function(a) {
    for (var c = Object.keys(this.Ja), d = 0; d < c.length; d++)
        for (var e = c[d], f = 0, g; g = this.Ja[e][f]; f++)
            if (g.ob() == a) return g;
    return null
};
b.wm = function(a) {
    return (a = this.Ja[a || ""]) ? a.slice() : []
};
b.yf = function() {
    var a = [],
        c;
    for (c in this.Ja) a = a.concat(this.Ja[c]);
    return a
};
b.Bp = function(a) {
    for (var c = [], d = F(this.C, !1), e = 0; e < d.length; e++) {
        var f = Na(d[e]);
        if (f)
            for (var g = 0; g < f.length; g++) f[g].ob() == a && c.push(d[e])
    }
    return c
};
h.hb = function(a) {
    this.id = h.g.Ve();
    h.hb.oj[this.id] = this;
    this.options = a || {};
    this.H = !!this.options.H;
    this.Ff = !!this.options.Ff;
    this.Va = this.options.Va;
    this.Ui = [];
    this.mn = [];
    this.Xl = Object.create(null);
    this.zc = [];
    this.nh = [];
    this.zk = [];
    this.Ao = Object.create(null);
    this.ff = Object.create(null);
    this.Ja = new h.po(this);
    this.Ci = null;
    this.Ga = new h.rl;
    this.tb = new h.lf;
    this.Tb = this.options.Ac ? this.options.Ac.Tb : new h.mj(this.options.PB || h.Mh.$i);
    this.Tb.jn.push(this)
};
b = h.hb.prototype;
b.ca = !1;
b.Lp = !1;
b.fs = 1024;
b.Zl = null;
b.Lq = function(a) {
    this.Ga = a
};
b.Mv = function(a) {
    this.tb = a
};
b.zp = function() {
    return this.Tb.zp()
};
b.I = function() {
    this.zc.length = 0;
    this.clear();
    delete h.hb.oj[this.id];
    if (this.Tb) {
        var a = this.Tb,
            c = a.jn.indexOf(this);
        if (0 > c) throw Error("Cannot unsubscribe a workspace that hasn't been subscribed.");
        a.jn.splice(c, 1);
        this.Tb.unsubscribe(this.Sb);
        this.options.Ac || (this.Tb.I(), this.Tb = null)
    }
};
h.hb.Es = 3;
b = h.hb.prototype;
b.ye = function(a, c) {
    a = a.Ha();
    c = c.Ha();
    return a.y + h.hb.prototype.ye.offset * a.x - (c.y + h.hb.prototype.ye.offset * c.x)
};

function Oa(a, c) {
    if (!h.g.Rl(a.Ui, c)) throw Error("Block not present in workspace's list of top-most blocks.");
}

function G(a, c) {
    var d = [].concat(a.Ui);
    c && 1 < d.length && (a.ye.offset = Math.sin(h.g.pd.Zq(h.hb.Es)), a.H && (a.ye.offset *= -1), d.sort(a.ye));
    return d
}

function Pa(a, c) {
    var d = [].concat(a.mn);
    c && 1 < d.length && (a.ye.offset = Math.sin(h.g.pd.Zq(h.hb.Es)), a.H && (a.ye.offset *= -1), d.sort(a.ye));
    return d
}

function F(a, c) {
    if (c) {
        a = G(a, !0);
        c = [];
        for (var d = 0; d < a.length; d++) c.push.apply(c, p(a[d], !0))
    } else
        for (c = G(a, !1), d = 0; d < c.length; d++) c.push.apply(c, Qa(c[d], !1));
    return c.filter(function(e) {
        return !e.Kf()
    })
}
b.clear = function() {
    this.Lp = !0;
    try {
        var a = h.i.Db();
        for (a || h.i.ga(!0); this.Ui.length;) this.Ui[0].I();
        for (; this.mn.length;) this.mn[this.mn.length - 1].I();
        a || h.i.ga(!1);
        this.Ja.clear();
        this.Ci && this.Ci.clear()
    } finally {
        this.Lp = !1
    }
};
b.ah = function(a, c) {
    this.Ja.ah(a, c)
};
b.Jd = function(a, c, d) {
    return this.Ja.Jd(a, c, d)
};
b.Bp = function(a) {
    return this.Ja.Bp(a)
};
b.Xh = function(a) {
    this.Ja.Xh(a)
};
b.cm = function(a, c) {
    this.Ja.cm(a, c)
};
b.Cf = function(a, c) {
    return this.Ja.Cf(a, c)
};
b.Df = function(a) {
    return this.Ja.Df(a)
};
b.wm = function(a) {
    return this.Ja.wm(a)
};
b.yf = function() {
    return this.Ja.yf()
};
b.di = function() {
    return 0
};
b.jq = function(a, c) {
    return new h.hl(this, a, c)
};

function Ra(a) {
    return isNaN(a.options.cq) ? Infinity : a.options.cq - F(a).length
}

function Sa(a, c) {
    if (!Ta(a)) return !0;
    var d = 0,
        e;
    for (e in c) {
        var f = c[e];
        if (a.options.eq) {
            var g = a.options.eq[e] || Infinity;
            var k = a.ff[e] ? a.ff[e].slice(0) : [];
            g -= k.length
        } else g = Infinity;
        if (f > g) return !1;
        d += c[e]
    }
    return d > Ra(a) ? !1 : !0
}

function Ta(a) {
    return Infinity != a.options.cq || !!a.options.eq
}
b.hr = function(a) {
    var c = a ? this.zk : this.nh,
        d = a ? this.nh : this.zk,
        e = c.pop();
    if (e) {
        for (var f = [e]; c.length && e.group && e.group == c[c.length - 1].group;) f.push(c.pop());
        for (c = 0; e = f[c]; c++) d.push(e);
        f = h.i.filter(f, a);
        h.i.$b = !1;
        try {
            for (c = 0; e = f[c]; c++) e.run(a)
        } finally {
            h.i.$b = !0
        }
    }
};

function Ua(a, c) {
    a.zc.push(c)
}

function Va(a, c) {
    h.g.Rl(a.zc, c)
}

function v(a, c) {
    return a.Ao[c] || null
}
h.hb.oj = Object.create(null);
h.hb.qp = function(a) {
    return h.hb.oj[a] || null
};
h.hb.getAll = function() {
    var a = [],
        c;
    for (c in h.hb.oj) a.push(h.hb.oj[c]);
    return a
};
h.oa = function(a, c, d, e, f, g) {
    this.s = a;
    this.wf = c;
    this.Pv = d;
    d = h.oa.tw;
    this.s.H && (d = -d);
    this.Ay = h.g.pd.Zq(d);
    a.ef.appendChild(this.Fj(c, !(!f || !g)));
    this.xb = e;
    this.Eq && Wa(this);
    f && g || (c = this.wf.getBBox(), f = c.width + 2 * h.oa.Td, g = c.height + 2 * h.oa.Td);
    Xa(this, f, g);
    Wa(this);
    Ya(this);
    this.Eq = !0;
    a.options.readOnly || (h.ra(this.tj, "mousedown", this, this.Hy), this.ve && h.ra(this.ve, "mousedown", this, this.sB))
};
h.oa.Td = 6;
h.oa.uw = 5;
h.oa.tw = 20;
h.oa.rr = 4;
h.oa.rw = 8;
h.oa.Uf = null;
h.oa.Tf = null;
h.oa.prototype.Ev = null;
h.oa.gr = function() {
    h.oa.Uf && (h.fb(h.oa.Uf), h.oa.Uf = null);
    h.oa.Tf && (h.fb(h.oa.Tf), h.oa.Tf = null)
};
h.oa.Iy = function() {
    h.Touch.Ul();
    h.oa.gr()
};
b = h.oa.prototype;
b.Eq = !1;
b.xb = null;
b.bf = 0;
b.Xf = 0;
b.Xa = 0;
b.Zb = 0;
b.wo = !0;
b.Fj = function(a, c) {
    this.Lc = h.g.m.L("g", {}, null);
    var d = {
        filter: "url(#" + this.s.options.Tt + ")"
    };
    h.g.userAgent.px && (d = {});
    d = h.g.m.L("g", d, this.Lc);
    this.Eo = h.g.m.L("path", {}, d);
    this.tj = h.g.m.L("rect", {
        "class": "blocklyDraggable",
        x: 0,
        y: 0,
        rx: h.oa.Td,
        ry: h.oa.Td
    }, d);
    c ? (this.ve = h.g.m.L("g", {
        "class": this.s.H ? "blocklyResizeSW" : "blocklyResizeSE"
    }, this.Lc), c = 2 * h.oa.Td, h.g.m.L("polygon", {
        points: "0,x x,x x,0".replace(/x/g, c.toString())
    }, this.ve), h.g.m.L("line", {
        "class": "blocklyResizeLine",
        x1: c / 3,
        y1: c - 1,
        x2: c - 1,
        y2: c /
            3
    }, this.ve), h.g.m.L("line", {
        "class": "blocklyResizeLine",
        x1: 2 * c / 3,
        y1: c - 1,
        x2: c - 1,
        y2: 2 * c / 3
    }, this.ve)) : this.ve = null;
    this.Lc.appendChild(a);
    return this.Lc
};
b.Y = function() {
    return this.Lc
};
b.Hy = function(a) {
    var c = this.s.Af(a);
    if (c) {
        if (c.Jg) throw Error("Tried to call gesture.handleBubbleStart, but the gesture had already been started.");
        c.Tc || (c.Tc = this);
        c.Od = a
    }
};
b.Hk = function() {};
b.Pc = function() {
    return !1
};
b.sB = function(a) {
    var c = this.Lc.parentNode;
    c.lastChild !== this.Lc && c.appendChild(this.Lc);
    h.oa.gr();
    h.g.ui(a) || (this.s.Uq(a, new h.g.O(this.s.H ? -this.Xa : this.Xa, this.Zb)), h.oa.Uf = h.ra(document, "mouseup", this, h.oa.Iy), h.oa.Tf = h.ra(document, "mousemove", this, this.tB), h.jc());
    a.stopPropagation()
};
b.tB = function(a) {
    this.wo = !1;
    var c = this.s;
    a = h.g.qk(a, z(c), Ha(c));
    a.x /= c.scale;
    a.y /= c.scale;
    c = h.g.O.sum(c.Qt, a);
    Xa(this, this.s.H ? -c.x : c.x, c.y);
    this.s.H && Wa(this)
};

function Za(a, c, d) {
    var e = a.s.H ? a.xb.x - c.x - a.Xa : c.x + a.xb.x;
    c = c.y + a.xb.y;
    return Math.max(0, Math.min(1, (Math.min(e + a.Xa, d.wb + d.lb) - Math.max(e, d.wb)) * (Math.min(c + a.Zb, d.Bb + d.vb) - Math.max(c, d.Bb)) / (a.Xa * a.Zb)))
}

function Wa(a) {
    var c = a.xb.x;
    c = a.s.H ? c - (a.bf + a.Xa) : c + a.bf;
    a.moveTo(c, a.Xf + a.xb.y)
}
b.moveTo = function(a, c) {
    this.Lc.setAttribute("transform", "translate(" + a + "," + c + ")")
};

function Xa(a, c, d) {
    var e = 2 * h.oa.Td;
    c = Math.max(c, e + 45);
    d = Math.max(d, e + 20);
    a.Xa = c;
    a.Zb = d;
    a.tj.setAttribute("width", c);
    a.tj.setAttribute("height", d);
    a.ve && (a.s.H ? a.ve.setAttribute("transform", "translate(" + 2 * h.oa.Td + "," + (d - e) + ") scale(-1 1)") : a.ve.setAttribute("transform", "translate(" + (c - e) + "," + (d - e) + ")"));
    if (a.wo) {
        c = a.s.vc();
        c.wb /= a.s.scale;
        c.lb /= a.s.scale;
        c.Bb /= a.s.scale;
        c.vb /= a.s.scale;
        d = -a.Xa / 4;
        if (!(a.Xa > c.lb)) {
            if (a.s.H) {
                e = a.xb.x - d;
                var f = e - a.Xa;
                var g = c.wb + c.lb,
                    k = c.wb + h.za.ac / a.s.scale
            } else f = d + a.xb.x,
                e = f + a.Xa, k = c.wb, g = c.wb + c.lb - h.za.ac / a.s.scale;
            a.s.H ? f < k ? d = -(k - a.xb.x + a.Xa) : e > g && (d = -(g - a.xb.x)) : f < k ? d = k - a.xb.x : e > g && (d = g - a.xb.x - a.Xa)
        }
        f = d;
        d = -a.Zb / 4;
        if (!(a.Zb > c.vb)) {
            e = a.xb.y + d;
            g = e + a.Zb;
            k = c.Bb;
            var l = c.Bb + c.vb - h.za.ac / a.s.scale,
                m = a.xb.y;
            e < k ? d = k - m : g > l && (d = l - m - a.Zb)
        }
        k = d;
        g = a.Pv.getBBox();
        d = {
            x: f,
            y: -a.Zb - h.ma.hs
        };
        e = {
            x: -a.Xa - 30,
            y: k
        };
        k = {
            x: g.width,
            y: k
        };
        l = {
            x: f,
            y: g.height
        };
        f = g.width < g.height ? k : l;
        g = g.width < g.height ? l : k;
        k = Za(a, d, c);
        l = Za(a, e, c);
        m = Za(a, f, c);
        c = Math.max(k, l, m, Za(a, g, c));
        k == c ? (a.bf = d.x, a.Xf = d.y) : l ==
            c ? (a.bf = e.x, a.Xf = e.y) : m == c ? (a.bf = f.x, a.Xf = f.y) : (a.bf = g.x, a.Xf = g.y)
    }
    Wa(a);
    Ya(a);
    a.Ev && a.Ev()
}

function Ya(a) {
    var c = [],
        d = a.Xa / 2,
        e = a.Zb / 2,
        f = -a.bf,
        g = -a.Xf;
    if (d == f && e == g) c.push("M " + d + "," + e);
    else {
        g -= e;
        f -= d;
        a.s.H && (f *= -1);
        var k = Math.sqrt(g * g + f * f),
            l = Math.acos(f / k);
        0 > g && (l = 2 * Math.PI - l);
        var m = l + Math.PI / 2;
        m > 2 * Math.PI && (m -= 2 * Math.PI);
        var n = Math.sin(m),
            q = Math.cos(m),
            r = new h.g.Cd(a.Xa, a.Zb);
        m = (r.width + r.height) / h.oa.uw;
        m = Math.min(m, r.width, r.height) / 4;
        r = 1 - h.oa.rw / k;
        f = d + r * f;
        g = e + r * g;
        r = d + m * q;
        var t = e + m * n;
        d -= m * q;
        e -= m * n;
        n = l + a.Ay;
        n > 2 * Math.PI && (n -= 2 * Math.PI);
        l = Math.sin(n) * k / h.oa.rr;
        k = Math.cos(n) * k / h.oa.rr;
        c.push("M" +
            r + "," + t);
        c.push("C" + (r + k) + "," + (t + l) + " " + f + "," + g + " " + f + "," + g);
        c.push("C" + f + "," + g + " " + (d + k) + "," + (e + l) + " " + d + "," + e)
    }
    c.push("z");
    a.Eo.setAttribute("d", c.join(" "))
}
b.ud = function(a) {
    this.tj.setAttribute("fill", a);
    this.Eo.setAttribute("fill", a)
};
b.I = function() {
    h.oa.gr();
    h.g.m.removeNode(this.Lc);
    this.Pv = this.wf = this.s = this.ve = this.tj = this.Eo = this.Lc = null
};
b.hq = function(a, c) {
    a ? a.mh(c.x, c.y) : this.moveTo(c.x, c.y);
    this.bf = this.s.H ? this.xb.x - c.x - this.Xa : c.x - this.xb.x;
    this.Xf = c.y - this.xb.y;
    Ya(this)
};
b.Ha = function() {
    return new h.g.O(this.xb.x + this.bf, this.xb.y + this.Xf)
};
h.i.Ee = function(a) {
    this.ge = a.id;
    this.Ub = a.C.id;
    this.group = h.i.Db();
    this.$b = h.i.$b
};
h.g.object.S(h.i.Ee, h.i.Abstract);
h.i.Ee.prototype.Ia = function() {
    var a = h.i.Ee.w.Ia.call(this);
    this.ge && (a.commentId = this.ge);
    return a
};
h.i.Ee.prototype.pa = function(a) {
    h.i.Ee.w.pa.call(this, a);
    this.ge = a.commentId
};
h.i.xh = function(a, c, d) {
    a && (h.i.xh.w.constructor.call(this, a), this.iv = c, this.Tm = d)
};
h.g.object.S(h.i.xh, h.i.Ee);
b = h.i.xh.prototype;
b.type = h.i.Dr;
b.Ia = function() {
    var a = h.i.xh.w.Ia.call(this);
    a.newContents = this.Tm;
    return a
};
b.pa = function(a) {
    h.i.xh.w.pa.call(this, a);
    this.Tm = a.newValue
};
b.si = function() {
    return this.iv == this.Tm
};
b.run = function(a) {
    var c;
    (c = w(this).Xl[this.ge] || null) ? c.zH(a ? this.Tm : this.iv): console.warn("Can't change non-existent comment: " + this.ge)
};
h.i.Fe = function(a) {
    a && (h.i.Fe.w.constructor.call(this, a), this.xml = a.$q())
};
h.g.object.S(h.i.Fe, h.i.Ee);
h.i.Fe.prototype.type = h.i.kl;
h.i.Fe.prototype.Ia = function() {
    var a = h.i.Fe.w.Ia.call(this);
    a.xml = h.K.Mc(this.xml);
    return a
};
h.i.Fe.prototype.pa = function(a) {
    h.i.Fe.w.pa.call(this, a);
    this.xml = h.K.$f(a.xml)
};
h.i.Fe.prototype.run = function(a) {
    h.i.Gr(this, a)
};
h.i.Gr = function(a, c) {
    var d = w(a);
    c ? (c = h.g.xml.createElement("xml"), c.appendChild(a.xml), h.K.Eg(c, d)) : (d = d.Xl[a.ge] || null) ? d.I(!1, !1) : console.warn("Can't uncreate non-existent comment: " + a.ge)
};
h.i.Ge = function(a) {
    a && (h.i.Ge.w.constructor.call(this, a), this.xml = a.$q())
};
h.g.object.S(h.i.Ge, h.i.Ee);
h.i.Ge.prototype.type = h.i.Er;
h.i.Ge.prototype.Ia = function() {
    return h.i.Ge.w.Ia.call(this)
};
h.i.Ge.prototype.pa = function(a) {
    h.i.Ge.w.pa.call(this, a)
};
h.i.Ge.prototype.run = function(a) {
    h.i.Gr(this, !a)
};
h.i.fg = function(a) {
    a && (h.i.fg.w.constructor.call(this, a), this.Ko = a, this.nq = a.wu(), this.Tg = null)
};
h.g.object.S(h.i.fg, h.i.Ee);
b = h.i.fg.prototype;
b.$g = function() {
    if (!this.Ko) throw Error("Tried to record the new position of a comment on the same event twice.");
    this.Tg = this.Ko.wu();
    this.Ko = null
};
b.type = h.i.ll;
b.Ia = function() {
    var a = h.i.fg.w.Ia.call(this);
    this.Tg && (a.newCoordinate = Math.round(this.Tg.x) + "," + Math.round(this.Tg.y));
    return a
};
b.pa = function(a) {
    h.i.fg.w.pa.call(this, a);
    a.newCoordinate && (a = a.newCoordinate.split(","), this.Tg = new h.g.O(Number(a[0]), Number(a[1])))
};
b.si = function() {
    return h.g.O.me(this.nq, this.Tg)
};
b.run = function(a) {
    var c;
    if (c = w(this).Xl[this.ge] || null) {
        a = a ? this.Tg : this.nq;
        var d = c.wu();
        c.moveBy(a.x - d.x, a.y - d.y)
    } else console.warn("Can't move non-existent comment: " + this.ge)
};
h.Yi = function(a, c) {
    this.Cb = a;
    this.s = c;
    this.Dg = null;
    this.rn = !1;
    this.ze = this.Cb.Ha();
    this.Fg = h.g.Mg() && c.Kc ? c.Kc : null
};
h.Yi.prototype.I = function() {
    this.Fg = this.s = this.Cb = null
};

function $a(a, c, d) {
    d = a.Bi(d);
    d = h.g.O.sum(a.ze, d);
    a.Cb.hq(a.Fg, d);
    a.Cb.Pc() && (a.Dg = oa(a.s, c), a.rn = a.Dg != h.Jr, c = a.s.bc, a.rn ? (pa(a.Cb, !0), a.Dg == h.En && c && qa(c, !0)) : (pa(a.Cb, !1), c && qa(c, !1)))
}

function ab(a, c, d) {
    $a(a, c, d);
    c = a.Bi(d);
    c = h.g.O.sum(a.ze, c);
    a.Cb.moveTo(c.x, c.y);
    c = a.s.bc;
    a.rn ? (c && setTimeout(c.close.bind(c), 100), a.Qj(), a.Cb.I(!1, !0)) : c && c.close();
    a.rn || (a.Fg && a.Fg.Tl(a.s.ef), a.Cb.dh && a.Cb.dh(!1), a.Qj());
    a.s.Rb(!0);
    a.s.sa && a.s.sa.qB(a.Cb.Pc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
    h.i.ga(!1)
}
h.Yi.prototype.Qj = function() {
    if (this.Cb.Pu) {
        var a = new h.i.fg(this.Cb);
        a.nq = this.ze;
        a.$g();
        h.i.Na(a)
    }
};
h.Yi.prototype.Bi = function(a) {
    a = new h.g.O(a.x / this.s.scale, a.y / this.s.scale);
    this.s.ri && a.scale(1 / this.s.options.Ac.scale);
    return a
};
h.Yi.prototype.iq = function() {
    this.Cb.moveTo(0, 0);
    this.Fg.mh(this.ze.x, this.ze.y);
    bb(this.Fg, this.Cb.Y())
};
h.LG = {};
h.bs = 40;
h.vs = 125;
h.Nw = 5;
h.Ww = 10;
h.ec = 28;
h.Fr = h.ec;
h.Gw = 8;
h.lx = "#000000";
h.zn = 250;
h.An = 10;
h.Cw = 30;
h.tx = 750;
h.Rx = 100;
h.Ow = !0;
h.gx = .45;
h.hx = .65;
h.Kh = {
    width: 96,
    height: 124,
    url: "sprites.png"
};
h.Oa = 1;
h.zd = 2;
h.Ca = 3;
h.Bd = 4;
h.He = 5;
h.vn = -1;
h.nr = 0;
h.pr = 1;
h.PC = 0;
h.QC = 1;
h.NC = 1;
h.OC = 2;
h.Ih = [];
h.Ih[h.Oa] = h.zd;
h.Ih[h.zd] = h.Oa;
h.Ih[h.Ca] = h.Bd;
h.Ih[h.Bd] = h.Ca;
h.qg = 0;
h.lj = 1;
h.Dd = 2;
h.pg = 3;
h.Jr = null;
h.En = 1;
h.Kr = 2;
h.Os = "VARIABLE";
h.gy = "VARIABLE_DYNAMIC";
h.xs = "PROCEDURE";
h.DF = "RENAME_VARIABLE_ID";
h.HC = "DELETE_VARIABLE_ID";
h.i.bd = function(a, c, d, e) {
    h.i.bd.w.constructor.call(this);
    this.gc = a ? a.id : null;
    this.Ub = a ? a.C.id : void 0;
    this.element = c;
    this.oldValue = d;
    this.newValue = e;
    this.$b = !1
};
h.g.object.S(h.i.bd, h.i.Abstract);
h.i.bd.prototype.type = h.i.Nl;
h.i.bd.prototype.Ia = function() {
    var a = h.i.bd.w.Ia.call(this);
    a.element = this.element;
    void 0 !== this.newValue && (a.newValue = this.newValue);
    this.gc && (a.blockId = this.gc);
    return a
};
h.i.bd.prototype.pa = function(a) {
    h.i.bd.w.pa.call(this, a);
    this.element = a.element;
    this.newValue = a.newValue;
    this.gc = a.blockId
};
h.pj = function(a) {
    this.s = a;
    this.Vv = new h.g.O(a.scrollX, a.scrollY)
};
h.pj.prototype.I = function() {
    this.s = null
};
h.pj.prototype.Uq = function() {
    h.selected && cb(h.selected);
    Ia(this.s)
};
h.pj.prototype.xf = function(a) {
    a = h.g.O.sum(this.Vv, a);
    this.s.scroll(a.x, a.y)
};
h.vl = function(a) {
    h.vl.w.constructor.call(this, a.ei());
    this.Qb = a.Qb;
    this.ki = a.ki
};
h.g.object.S(h.vl, h.pj);
h.vl.prototype.xf = function(a) {
    a = h.g.O.sum(this.Vv, a);
    this.ki ? this.Qb.set(-a.x) : this.Qb.set(-a.y)
};
h.F = {};
h.F.visible = !1;
h.F.Sh = !1;
h.F.sx = 50;
h.F.ev = 0;
h.F.Jk = 0;
h.F.Rp = 0;
h.F.Sp = 0;
h.F.$ = null;
h.F.an = null;
h.F.ks = 0;
h.F.ls = 10;
h.F.Lx = 10;
h.F.ex = 750;
h.F.Pn = 5;
h.F.ya = null;
h.F.La = function() {
    h.F.ya || (h.F.ya = document.createElement("div"), h.F.ya.className = "blocklyTooltipDiv", document.body.appendChild(h.F.ya))
};
h.F.Rh = function(a) {
    h.Xb(a, "mouseover", null, h.F.eB);
    h.Xb(a, "mouseout", null, h.F.dB);
    a.addEventListener("mousemove", h.F.cB, !1)
};
h.F.eB = function(a) {
    if (!h.F.Sh) {
        for (a = a.currentTarget;
            "string" != typeof a.Qd && "function" != typeof a.Qd;) a = a.Qd;
        h.F.$ != a && (h.F.va(), h.F.an = null, h.F.$ = a);
        clearTimeout(h.F.ev)
    }
};
h.F.dB = function() {
    h.F.Sh || (h.F.ev = setTimeout(function() {
        h.F.$ = null;
        h.F.an = null;
        h.F.va()
    }, 1), clearTimeout(h.F.Jk))
};
h.F.cB = function(a) {
    if (h.F.$ && h.F.$.Qd && !h.F.Sh)
        if (h.F.visible) {
            var c = h.F.Rp - a.pageX;
            a = h.F.Sp - a.pageY;
            Math.sqrt(c * c + a * a) > h.F.Lx && h.F.va()
        } else h.F.an != h.F.$ && (clearTimeout(h.F.Jk), h.F.Rp = a.pageX, h.F.Sp = a.pageY, h.F.Jk = setTimeout(h.F.EB, h.F.ex))
};
h.F.va = function() {
    h.F.visible && (h.F.visible = !1, h.F.ya && (h.F.ya.style.display = "none"));
    h.F.Jk && clearTimeout(h.F.Jk)
};
h.F.block = function() {
    h.F.va();
    h.F.Sh = !0
};
h.F.WB = function() {
    h.F.Sh = !1
};
h.F.EB = function() {
    if (!h.F.Sh && (h.F.an = h.F.$, h.F.ya)) {
        h.F.ya.innerHTML = "";
        for (var a = h.F.$.Qd;
            "function" == typeof a;) a = a();
        a = h.g.Da.fw(a, h.F.sx);
        a = a.split("\n");
        for (var c = 0; c < a.length; c++) {
            var d = document.createElement("div");
            d.appendChild(document.createTextNode(a[c]));
            h.F.ya.appendChild(d)
        }
        a = h.F.$.H;
        c = document.documentElement.clientWidth;
        d = document.documentElement.clientHeight;
        h.F.ya.style.direction = a ? "rtl" : "ltr";
        h.F.ya.style.display = "block";
        h.F.visible = !0;
        var e = h.F.Rp;
        e = a ? e - (h.F.ks + h.F.ya.offsetWidth) :
            e + h.F.ks;
        var f = h.F.Sp + h.F.ls;
        f + h.F.ya.offsetHeight > d + window.scrollY && (f -= h.F.ya.offsetHeight + 2 * h.F.ls);
        a ? e = Math.max(h.F.Pn - window.scrollX, e) : e + h.F.ya.offsetWidth > c + window.scrollX - 2 * h.F.Pn && (e = c - h.F.ya.offsetWidth - 2 * h.F.Pn);
        h.F.ya.style.top = f + "px";
        h.F.ya.style.left = e + "px"
    }
};
h.Ah = function(a, c) {
    this.Fb = this.Gb = this.gh = this.hh = this.Tc = this.uc = this.dv = null;
    this.Po = c;
    this.ck = this.Og = this.dk = this.Hg = !1;
    this.Od = a;
    this.P = this.dg = this.Gd = this.Oe = this.Xm = this.Wm = null;
    this.Hm = this.Jg = this.ht = !1;
    this.Gu = !h.Ow
};
b = h.Ah.prototype;
b.I = function() {
    h.Touch.Ul();
    h.F.WB();
    this.Po.Lb = null;
    this.Wm && h.fb(this.Wm);
    this.Xm && h.fb(this.Xm);
    this.P = this.Fb = this.Gb = this.gh = this.hh = null;
    this.Gd && (this.Gd.I(), this.Gd = null);
    this.dg && (this.dg.I(), this.dg = null);
    this.Oe && (this.Oe.I(), this.Oe = null)
};

function db(a, c) {
    a.uc = h.g.O.Mj(new h.g.O(c.clientX, c.clientY), a.dv);
    if (a.Hg) var d = !1;
    else a.Hg = h.g.O.HA(a.uc) > (a.P ? h.Ww : h.Nw), d = a.Hg;
    if (d) {
        if (a.ht) throw Error("updateIsDragging_ should only be called once per gesture.");
        a.ht = !0;
        if (a.Tc) {
            a.ck = !0;
            a.Oe = new h.Yi(a.Tc, a.Fb);
            d = a.Oe;
            h.i.Db() || h.i.ga(!0);
            d.s.Rb(!1);
            d.Cb.wo = !1;
            d.Fg && d.iq();
            d.Cb.dh && d.Cb.dh(!0);
            var e = d.s.sa;
            e && e.uy(d.Cb.Pc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
            $a(a.Oe, a.Od, a.uc);
            d = !0
        } else d = !1;
        if (!d) {
            if (a.Gb)
                if (a.P ? (a.P.Ou(a.Gb) ? ((d = !eb(a.P)) || (d = a.uc, d = Math.atan2(d.y, d.x) / Math.PI * 180, e = a.P.uz, d = d < e && d > -e || d < -180 + e || d > 180 - e ? !0 : !1), d ? (a.Fb = a.P.kb, fb(a.Fb), h.i.Db() || h.i.ga(!0), a.gh = null, a.Gb = gb(a.P, a.Gb), a.Gb.select(), d = !0) : d = !1) : d = !1, a.Og = d) : a.Gb.Dc() && (a.Og = !0), a.Og) {
                    a.Gd = new h.eg(a.Gb, a.Fb);
                    d = a.Gd;
                    e = a.uc;
                    var f = a.Gu;
                    h.i.Db() || h.i.ga(!0);
                    d.s.ri && ta(d.cb);
                    h.g.m.Lk();
                    d.s.Rb(!1);
                    h.Qa.Yo();
                    if (d.cb.getParent() || f && d.cb.V && x(d.cb.V)) y(d.cb, f), e = d.Bi(e), e = h.g.O.sum(d.ze, e), d.cb.translate(e.x, e.y), h.Qa.nz(d.cb);
                    d.cb.dh(!0);
                    d.cb.iq();
                    (e = d.s.sa) && e.uy(d.cb.Pc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
                    ma(a.Gd, a.Od, a.uc);
                    d = !0
                } else d = !1;
            else d = !1;
            if (d = !d)
                if (a.P) d = eb(a.P);
                else if (d = a.Fb) d = a.Fb, d = d.options.Ob && d.options.Ob.xf;
            d && (a.dg = a.P ? new h.vl(a.P) : new h.pj(a.Fb), a.dk = !0, a.dg.Uq())
        }
        h.Pf()
    }
    a.Od = c
}
b.$o = function(a) {
    h.g.Km(a) ? this.cancel() : (this.Jg = !0, h.Qa.Yo(), fb(this.Fb), this.Fb.ri && this.Fb.resize(), Ga(this.Fb), this.Od = a, h.jc(!!this.P), h.F.block(), this.Gb && (!this.Gb.Rc && a.shiftKey ? (h.navigation.jp(), E(this.Po.Ga, h.navigation.Ap(this.Gb))) : this.Gb.select()), h.g.ui(a) ? va(this, a) : ("touchstart" != a.type.toLowerCase() && "pointerdown" != a.type.toLowerCase() || "mouse" == a.pointerType || h.GA(a, this), this.dv = new h.g.O(a.clientX, a.clientY), this.Gu = a.altKey || a.ctrlKey || a.metaKey, this.Rh(a)))
};
b.Rh = function(a) {
    this.Wm = h.ra(document, "mousemove", null, this.Uj.bind(this));
    this.Xm = h.ra(document, "mouseup", null, this.xm.bind(this));
    a.preventDefault();
    a.stopPropagation()
};
b.Uj = function(a) {
    db(this, a);
    this.dk ? this.dg.xf(this.uc) : this.Og ? ma(this.Gd, this.Od, this.uc) : this.ck && $a(this.Oe, this.Od, this.uc);
    a.preventDefault();
    a.stopPropagation()
};
b.xm = function(a) {
    db(this, a);
    h.Pf();
    if (this.Hm) console.log("Trying to end a gesture recursively.");
    else {
        this.Hm = !0;
        if (this.ck) ab(this.Oe, a, this.uc);
        else if (this.Og) ra(this.Gd, a, this.uc);
        else if (this.dk) {
            var c = this.dg;
            c.xf(this.uc);
            Ja(c.s)
        } else if (this.Tc && !this.Hg) this.Tc.AB && this.Tc.AB(), this.Tc.select && this.Tc.select();
        else if (hb(this)) this.hh.Ik(), ib(this);
        else if (this.gh && !this.Hg && !hb(this)) this.P && this.P.Qh ? this.Gb.isEnabled() && (h.i.Db() || h.i.ga(!0), ua(gb(this.P, this.Gb))) : h.i.Na(new h.i.bd(this.gh,
            "click", void 0, void 0)), ib(this), h.i.ga(!1);
        else if (!(this.gh || this.Tc || this.hh || this.Hg))
            if (c = this.Po, a.shiftKey) {
                h.navigation.jp();
                var d = h.g.xB(c, new h.g.O(a.clientX, a.clientY));
                d = h.B.Ij(c, d);
                E(c.Ga, d)
            } else h.selected && cb(h.selected);
        a.preventDefault();
        a.stopPropagation();
        this.I()
    }
};
b.cancel = function() {
    if (!this.Hm) {
        h.Pf();
        if (this.ck) ab(this.Oe, this.Od, this.uc);
        else if (this.Og) ra(this.Gd, this.Od, this.uc);
        else if (this.dk) {
            var a = this.dg;
            a.xf(this.uc);
            Ja(a.s)
        }
        this.I()
    }
};

function va(a, c) {
    a.Gb ? (ib(a), h.jc(a.P), a.Gb.Hk(c)) : a.Tc ? a.Tc.Hk(c) : a.Fb && !a.P && (h.jc(), a.Fb.Hk(c));
    c.preventDefault();
    c.stopPropagation();
    a.I()
}

function jb(a, c, d) {
    if (a.Jg) throw Error("Tried to call gesture.handleWsStart, but the gesture had already been started.");
    a.Fb || (a.Fb = d);
    a.Od = c;
    a.$o(c);
    h.$e && h.navigation.Mi(h.navigation.Kl)
}

function kb(a, c, d) {
    if (a.Jg) throw Error("Tried to call gesture.handleFlyoutStart, but the gesture had already been started.");
    a.P || (a.P = d);
    jb(a, c, d.ei())
}

function ib(a) {
    a.Gb && !a.P && ta(a.Gb)
}

function lb(a, c) {
    a.gh || a.Tc || (a.gh = c, c.Rc && c != D(c) ? mb(a, D(c)) : mb(a, c))
}

function mb(a, c) {
    c.Ua ? mb(a, c.getParent()) : a.Gb = c
}

function hb(a) {
    if (a.hh) {
        var c = a.hh;
        c = !!c.D && c.D.Qc() && !!c.Ik && "function" === typeof c.Ik
    } else c = !1;
    return c && !a.Hg && (!a.P || !a.P.Qh)
}
b.yc = function() {
    return this.dk || this.Og || this.ck
};
b.bi = function() {
    return this.Gd ? this.Gd.bi() : []
};
h.Ah.Hp = function() {
    for (var a = h.hb.getAll(), c = 0, d; d = a[c]; c++)
        if (d.Lb) return !0;
    return !1
};
h.Ea = function(a, c, d) {
    this.Zv = this.bw = this.Be = null;
    this.ub = new h.g.Cd(0, 0);
    this.Yb = null;
    d && this.Aj(d);
    this.setValue(a);
    c && (this.bw = c)
};
h.Ea.Ar = 16;
h.Ea.Ls = 12.5;
h.Ea.qj = 10;
h.Ea.Xs = 10;
h.Ea.zh = h.Ea.qj / 2;
b = h.Ea.prototype;
b.name = void 0;
b.av = 50;
b.D = null;
b.If = !0;
b.cg = !0;
b.Vl = null;
h.Ea.js = "\u00a0";
b = h.Ea.prototype;
b.Wd = !0;
b.Fs = !1;
b.Aj = function(a) {
    var c = a.tooltip;
    "string" == typeof c && (c = h.g.Fc(a.tooltip));
    c && this.Pd(c)
};
b.wa = function() {
    this.jd || (this.jd = h.g.m.L("g", {}, null), this.isVisible() || (this.jd.style.display = "none"), this.D.Y().appendChild(this.jd), this.$j(), this.Xk(), this.Pd(this.Zv), h.F.Rh(this.Vl || this.Y()), this.cv = h.ra(this.Vl || this.Y(), "mousedown", this, this.Sf))
};
b.$j = function() {
    this.ub.height = Math.max(this.ub.height, h.Ea.Ar);
    this.ub.width = Math.max(this.ub.width, h.Ea.qj);
    this.sj = h.g.m.L("rect", {
        rx: 4,
        ry: 4,
        x: 0,
        y: 0,
        height: this.ub.height,
        width: this.ub.width
    }, this.jd);
    nb(this)
};

function nb(a) {
    a.Vc = h.g.m.L("text", {
        "class": "blocklyText",
        y: h.Ea.Ls,
        x: a.sj ? h.Ea.zh : 0
    }, a.jd);
    a.Ri = document.createTextNode("");
    a.Vc.appendChild(a.Ri)
}
b.I = function() {
    h.A.Wj(this);
    h.W.Wj(this);
    this.cv && h.fb(this.cv);
    h.g.m.removeNode(this.jd)
};
b.Xk = function() {
    var a = this.Vl || this.Y();
    this.Wd && a && (this.D.Qc() ? (h.g.m.Ib(a, "blocklyEditableText"), h.g.m.Sc(a, "blocklyNonEditableText"), a.style.cursor = this.Hw) : (h.g.m.Ib(a, "blocklyNonEditableText"), h.g.m.Sc(a, "blocklyEditableText"), a.style.cursor = ""))
};
b.isVisible = function() {
    return this.cg
};
b.Eb = function(a) {
    if (this.cg != a) {
        this.cg = a;
        var c = this.Y();
        c && (c.style.display = a ? "block" : "none")
    }
};
b.Y = function() {
    return this.jd
};
b.Ae = function() {};
b.Di = function() {
    if (this.Ri) {
        this.Ri.nodeValue = ob(this);
        var a = h.g.m.xp(this.Vc);
        this.sj && (a += h.Ea.qj, this.sj.setAttribute("width", a));
        this.ub.width = a
    }
};
b.We = function() {
    if (!this.isVisible()) return new h.g.Cd(0, 0);
    this.If ? (this.Di(), this.If = !1) : this.cg && 0 == this.ub.width && (console.warn("Deprecated use of setting size_.width to 0 to rerender a field. Set field.isDirty_ to true instead."), this.Di());
    return this.ub
};

function ob(a) {
    var c = a.Bf();
    if (!c) return h.Ea.js;
    c.length > a.av && (c = c.substring(0, a.av - 2) + "\u2026");
    c = c.replace(/\s/g, h.Ea.js);
    a.D && a.D.H && (c += "\u200f");
    return c
}
b.Bf = function() {
    if (this.yp) {
        var a = this.yp.call(this);
        if (null !== a) return String(a)
    }
    return String(this.getValue())
};
b.gn = function() {
    throw Error("setText method is deprecated");
};
b.mk = function() {
    this.If = !0
};

function pb(a) {
    a.If = !0;
    a.D && a.D.ca && (a.D.Ba(), a.D.Cc())
}
b.setValue = function(a) {
    if (null !== a) {
        var c = this.gm(a);
        a = qb(this, a, c);
        if (!(a instanceof Error)) {
            if (c = this.bw)
                if (c = c.call(this, a), a = qb(this, a, c), a instanceof Error) return;
            c = this.getValue();
            c !== a && (this.D && h.i.isEnabled() && h.i.Na(new h.i.uh(this.D, "field", this.name || null, c, a)), this.hm(a), this.If && pb(this))
        }
    }
};

function qb(a, c, d) {
    if (null === d) return a.If && pb(a), Error();
    void 0 !== d && (c = d);
    return c
}
b.getValue = function() {
    return this.Be
};
b.gm = function(a) {
    return null === a || void 0 === a ? null : a
};
b.hm = function(a) {
    this.Be = a;
    this.If = !0
};
b.Sf = function(a) {
    if (this.D && this.D.C && (a = this.D.C.Af(a))) {
        if (a.Jg) throw Error("Tried to call gesture.setStartField, but the gesture had already been started.");
        a.hh || (a.hh = this)
    }
};
b.Pd = function(a) {
    var c = this.Vl || this.Y();
    c ? c.Qd = a || "" === a ? a : this.D : this.Zv = a
};
b.ne = function() {
    for (var a = null, c = this.D, d = c.N, e = 0; e < c.N.length; e++)
        for (var f = d[e], g = f.Ma, k = 0; k < g.length; k++)
            if (g[k] === this) {
                a = f;
                break
            }
    return a
};
b.lu = function() {
    return !1
};
b.Xg = function() {
    return !1
};
b.Ek = function(a) {
    a ? (this.jd.appendChild(a), this.Yb = a) : this.Yb = null
};
b.Fk = function(a) {
    a && this.jd.appendChild(a)
};
h.Nc = {};
h.Nc.Uk = {};
h.Nc.register = function(a, c) {
    if ("string" != typeof a || "" == a.trim()) throw Error('Invalid field type "' + a + '". The type must be a non-empty string.');
    if (h.Nc.Uk[a]) throw Error('Error: Field "' + a + '" is already registered.');
    if (!c || "function" != typeof c.pa) throw Error('Field "' + c + '" must have a fromJson function');
    a = a.toLowerCase();
    h.Nc.Uk[a] = c
};
h.Nc.unregister = function(a) {
    h.Nc.Uk[a] ? delete h.Nc.Uk[a] : console.warn('No field mapping for type "' + a + '" found to unregister')
};
h.Nc.pa = function(a) {
    var c = h.Nc.Uk[a.type.toLowerCase()];
    return c ? c.pa(a) : (console.warn("Blockly could not create a field of type " + a.type + ". The field is probably not being registered. This could be because the file is not loaded, the field does not register itself (Issue #1584), or the registration is not being reached."), null)
};
h.g.wl = {};
h.g.wl.UA = 0;
h.g.wl.Vz = function() {
    return "blockly:" + (h.g.wl.UA++).toString(36)
};
h.nc = function() {
    this.Fv = h.nc.Ft;
    this.li = null;
    this.od = !1;
    this.Ec = this.$ = null;
    this.Kb = [];
    this.Io = {}
};
h.nc.Ft = !1;
h.nc.Error = {
    wn: "Component already rendered",
    ws: "Unable to set parent component",
    Bw: "Child component index out of bounds"
};
b = h.nc.prototype;
b.ob = function() {
    return this.li || (this.li = h.g.wl.Vz())
};
b.Ki = function(a) {
    if (this == a) throw Error(h.nc.Error.ws);
    var c;
    if (c = a && this.Ec && this.li) c = (c = this.li) ? this.Ec.Io[c] || null : null;
    if (c && this.Ec != a) throw Error(h.nc.Error.ws);
    this.Ec = a
};
b.getParent = function() {
    return this.Ec
};
b.La = function() {
    this.$ = document.createElement("div")
};
b.Ba = function(a) {
    this.Di(a)
};
b.Di = function(a, c) {
    if (this.od) throw Error(h.nc.Error.wn);
    this.$ || this.La();
    a ? a.insertBefore(this.$, c || null) : document.body.appendChild(this.$);
    this.Ec && !this.Ec.od || this.km()
};
b.km = function() {
    this.od = !0;
    rb(this, function(a) {
        !a.od && a.$ && a.km()
    })
};
b.lm = function() {
    rb(this, function(a) {
        a.od && a.lm()
    });
    this.od = !1
};
b.I = function() {
    this.pz || (this.pz = !0, this.Zo())
};
b.Zo = function() {
    this.od && this.lm();
    rb(this, function(a) {
        a.I()
    });
    this.$ && h.g.m.removeNode(this.$);
    this.Ec = this.$ = this.Io = this.Kb = null
};

function sb(a, c) {
    var d = a.Kb.length;
    if (c.od) throw Error(h.nc.Error.wn);
    if (0 > d || d > a.Kb.length) throw Error(h.nc.Error.Bw);
    a.Io[c.ob()] = c;
    if (c.getParent() == a) {
        var e = a.Kb.indexOf(c); - 1 < e && a.Kb.splice(e, 1)
    }
    c.Ki(a);
    a.Kb.splice(d, 0, c);
    c.od && a.od && c.getParent() == a ? (a = a.$, d = a.childNodes[d] || null, d != c.$ && a.insertBefore(c.$, d)) : (a.$ || a.La(), d = a.Kb[d + 1] || null, c.Di(a.$, d ? d.$ : null))
}
b.Ru = function() {
    return this.Fv
};

function tb(a, c) {
    if (a.od) throw Error(h.nc.Error.wn);
    a.Fv = c
}

function rb(a, c, d) {
    for (var e = 0; e < a.Kb.length; e++) c.call(d, a.Kb[e], e)
};
h.g.Pa = {};
h.g.Pa.sw = "aria-";
h.g.Pa.ao = "role";
h.g.Pa.co = {
    cC: "alert",
    dC: "alertdialog",
    fC: "application",
    gC: "article",
    mC: "banner",
    pC: "button",
    rC: "checkbox",
    wC: "columnheader",
    xC: "combobox",
    zC: "complementary",
    AC: "contentinfo",
    GC: "definition",
    JC: "dialog",
    KC: "directory",
    MC: "document",
    qD: "form",
    uD: "grid",
    vD: "gridcell",
    wD: "group",
    AD: "heading",
    ED: "img",
    QD: "link",
    RD: "list",
    SD: "listbox",
    TD: "listitem",
    VD: "log",
    aE: "main",
    bE: "marquee",
    cE: "math",
    yx: "menu",
    eE: "menubar",
    zx: "menuitem",
    Ax: "menuitemcheckbox",
    fE: "menuitemradio",
    kE: "navigation",
    nE: "note",
    IE: "option",
    rF: "presentation",
    uF: "progressbar",
    xF: "radio",
    yF: "radiogroup",
    AF: "region",
    bo: "row",
    HF: "rowgroup",
    IF: "rowheader",
    KF: "scrollbar",
    MF: "search",
    OF: "separator",
    UF: "slider",
    XF: "spinbutton",
    YF: "status",
    Yx: "tab",
    ZF: "table",
    $F: "tablist",
    aG: "tabpanel",
    bG: "textbox",
    cG: "textinfo",
    fG: "timer",
    gG: "toolbar",
    hG: "tooltip",
    iG: "tree",
    jG: "treegrid",
    kG: "treeitem"
};
h.g.Pa.State = {
    pw: "activedescendant",
    hC: "atomic",
    jC: "autocomplete",
    oC: "busy",
    sC: "checked",
    vC: "colindex",
    CC: "controls",
    IC: "describedby",
    LC: "disabled",
    RC: "dropeffect",
    WC: "expanded",
    pD: "flowto",
    tD: "grabbed",
    yD: "haspopup",
    BD: "hidden",
    GD: "invalid",
    KD: "label",
    LD: "labelledby",
    PD: "level",
    UD: "live",
    hE: "multiline",
    iE: "multiselectable",
    hF: "orientation",
    iF: "owns",
    qF: "posinset",
    sF: "pressed",
    zF: "readonly",
    BF: "relevant",
    EF: "required",
    JF: "rowindex",
    fo: "selected",
    PF: "setsize",
    VF: "sort",
    nG: "valuemax",
    oG: "valuemin",
    pG: "valuenow",
    qG: "valuetext"
};
h.g.Pa.Li = function(a, c) {
    c ? a.setAttribute(h.g.Pa.ao, c) : h.g.Pa.pB(a)
};
h.g.Pa.ZG = function(a) {
    return a.getAttribute(h.g.Pa.ao) || null
};
h.g.Pa.pB = function(a) {
    a.removeAttribute(h.g.Pa.ao)
};
h.g.Pa.Mi = function(a, c, d) {
    Array.isArray(d) && (d = d.join(" "));
    a.setAttribute(h.g.Pa.Iz(c), d)
};
h.g.Pa.Iz = function(a) {
    return h.g.Pa.sw + a
};
h.kg = function() {
    h.nc.call(this);
    this.Ye = -1
};
h.g.object.S(h.kg, h.nc);
b = h.kg.prototype;
b.La = function() {
    var a = document.createElement("div");
    a.id = this.ob();
    this.$ = a;
    a.className = "goog-menu goog-menu-vertical blocklyNonSelectable";
    a.tabIndex = 0;
    h.g.Pa.Li(a, this.Jq || h.g.Pa.co.yx)
};
b.focus = function() {
    var a = this.$;
    a && (a.focus(), h.g.m.Ib(a, "focused"))
};
b.blur = function() {
    var a = this.$;
    a && (a.blur(), h.g.m.Sc(a, "focused"))
};
b.Li = function(a) {
    this.Jq = a
};
b.km = function() {
    h.kg.w.km.call(this);
    rb(this, function(a) {
        if (a.od) {
            var c = a.$;
            c = c.id || (c.id = a.ob());
            this.Th || (this.Th = {});
            this.Th[c] = a
        }
    }, this);
    ub(this)
};
b.lm = function() {
    vb(this, -1);
    h.kg.w.lm.call(this)
};
b.Zo = function() {
    h.kg.w.Zo.call(this);
    h.fb(this.NA);
    h.fb(this.xj);
    h.fb(this.KA);
    h.fb(this.LA);
    h.fb(this.YA)
};

function ub(a) {
    var c = a.$;
    a.NA = h.ra(c, "mouseover", a, a.eA, !0);
    a.xj = h.ra(c, "click", a, a.$z, !0);
    a.KA = h.ra(c, "mouseenter", a, a.cA, !0);
    a.LA = h.ra(c, "mouseleave", a, a.dA, !0);
    a.YA = h.ra(c, "keydown", a, a.Cp)
}
b.Th = null;

function wb(a, c) {
    if (a.Th)
        for (var d = a.$; c && c !== d;) {
            var e = c.id;
            if (e in a.Th) return a.Th[e];
            c = c.parentNode
        }
    return null
}

function xb(a) {
    (a = a.Kb[a.Ye] || null) && a.df(!1)
}

function vb(a, c) {
    var d = a.Kb[c] || null;
    d ? (d.df(!0), a.Ye = c) : -1 < a.Ye && ((a.Kb[a.Ye] || null).df(!1), a.Ye = -1);
    d && h.g.style.Hv(d.$, a.$)
}
b.df = function(a) {
    vb(this, this.Kb.indexOf(a))
};

function yb(a) {
    xb(a);
    zb(a, function(c, d) {
        return (c + 1) % d
    }, a.Ye)
}

function Ab(a) {
    xb(a);
    zb(a, function(c, d) {
        c--;
        return 0 > c ? d - 1 : c
    }, a.Ye)
}

function zb(a, c, d) {
    var e = a.Kb.length;
    d = c.call(a, 0 > d ? -1 : d, e);
    for (var f = 0; f <= e;) {
        var g = a.Kb[d] || null;
        if (g && g.isEnabled()) {
            vb(a, d);
            break
        }
        f++;
        d = c.call(a, d, e)
    }
}
b.eA = function(a) {
    (a = wb(this, a.target)) && a.isEnabled() && (this.Kb[this.Ye] || null) !== a && (xb(this), this.df(a))
};
b.$z = function(a) {
    var c = wb(this, a.target),
        d;
    if (d = c) c.isEnabled() && (c.df(!0), Bb(c)), d = void 0;
    d && a.preventDefault()
};
b.cA = function() {
    this.focus()
};
b.dA = function() {
    this.$ && (this.blur(), xb(this), vb(this, -1))
};
b.Cp = function(a) {
    return 0 != this.Kb.length && Cb(this, a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};

function Cb(a, c) {
    var d = a.Kb[a.Ye] || null;
    if (d && "function" == typeof d.Cp && d.Cp(c)) return !0;
    if (c.shiftKey || c.ctrlKey || c.metaKey || c.altKey) return !1;
    switch (c.keyCode) {
        case h.g.rb.Mr:
            d && Bb(d);
            break;
        case h.g.rb.by:
            Ab(a);
            break;
        case h.g.rb.Mw:
            yb(a);
            break;
        default:
            return !1
    }
    return !0
};
h.zl = function(a, c) {
    h.nc.call(this);
    this.wf = a;
    this.setValue(c);
    this.jm = !0
};
h.g.object.S(h.zl, h.nc);
b = h.zl.prototype;
b.La = function() {
    var a = document.createElement("div");
    a.id = this.ob();
    this.$ = a;
    a.className = "goog-menuitem goog-option " + (this.jm ? "" : "goog-menuitem-disabled ") + (this.Ho ? "goog-option-selected " : "") + (this.Ru() ? "goog-menuitem-rtl " : "");
    var c = document.createElement("div");
    c.className = "goog-menuitem-content";
    a.appendChild(c);
    if (this.vj) {
        var d = document.createElement("div");
        d.className = "goog-menuitem-checkbox"
    } else d = null;
    d && c.appendChild(d);
    c.appendChild(Db(this));
    h.g.Pa.Li(a, this.Jq || (this.vj ? h.g.Pa.co.Ax :
        h.g.Pa.co.zx));
    h.g.Pa.Mi(a, h.g.Pa.State.fo, this.vj && this.Ho || !1)
};

function Db(a) {
    a = a.wf;
    "string" === typeof a && (a = document.createTextNode(a));
    return a
}
b.setValue = function(a) {
    this.Be = a
};
b.getValue = function() {
    return this.Be
};
b.Li = function(a) {
    this.Jq = a
};

function Eb(a, c) {
    if (a.vj) {
        a.Ho = c;
        var d = a.$;
        d && a.isEnabled() && (c ? (h.g.m.Ib(d, "goog-option-selected"), h.g.Pa.Mi(d, h.g.Pa.State.fo, !0)) : (h.g.m.Sc(d, "goog-option-selected"), h.g.Pa.Mi(d, h.g.Pa.State.fo, !1)))
    }
}
b.df = function(a) {
    var c = this.$;
    c && this.isEnabled() && (a ? h.g.m.Ib(c, "goog-menuitem-highlight") : h.g.m.Sc(c, "goog-menuitem-highlight"))
};
b.isEnabled = function() {
    return this.jm
};
b.we = function(a) {
    this.jm = a;
    (a = this.$) && (this.jm ? h.g.m.Sc(a, "goog-menuitem-disabled") : h.g.m.Ib(a, "goog-menuitem-disabled"))
};

function Bb(a) {
    a.vj && Eb(a, !a.Ho);
    a.$s && a.$s.call(a.sy, a)
}

function Fb(a, c, d) {
    a.$s = c;
    a.sy = d
};
h.Sd = function(a) {
    this.name = a
};
h.B = function(a, c, d) {
    if (!c) throw Error("Cannot create a node without a location.");
    this.Vk = a;
    this.bk = h.B.wA(a);
    this.ba = c;
    (a = d || null) && a.hw && (this.iw = a.hw)
};
h.B.types = {
    Zc: "field",
    Ic: "block",
    Ie: "input",
    Jh: "output",
    xd: "next",
    Ad: "previous",
    $d: "stack",
    sg: "workspace"
};
h.B.Kw = -20;
h.B.wA = function(a) {
    switch (a) {
        case h.B.types.Ad:
        case h.B.types.xd:
        case h.B.types.Ie:
        case h.B.types.Jh:
            return !0
    }
    return !1
};
h.B.Gj = function(a) {
    return new h.B(h.B.types.Zc, a)
};
h.B.je = function(a) {
    return a ? a.type == h.Oa || a.type == h.Ca && a.ne() ? h.B.Ag(a.ne()) : a.type == h.Ca ? new h.B(h.B.types.xd, a) : a.type == h.zd ? new h.B(h.B.types.Jh, a) : a.type == h.Bd ? new h.B(h.B.types.Ad, a) : null : null
};
h.B.Ag = function(a) {
    return a ? new h.B(h.B.types.Ie, a.connection) : null
};
h.B.Te = function(a) {
    return new h.B(h.B.types.Ic, a)
};
h.B.Hj = function(a) {
    return new h.B(h.B.types.$d, a)
};
h.B.Ij = function(a, c) {
    return new h.B(h.B.types.sg, a, {
        hw: c
    })
};
b = h.B.prototype;
b.jb = function() {
    return this.Vk
};

function Gb(a, c) {
    a = a.ba;
    a instanceof h.hl || (a = a.D);
    if (!a || !a.C) return null;
    var d = D(a);
    a = G(d.C, !0);
    for (var e = 0, f; f = a[e]; e++)
        if (d.id == f.id) return c = e + (c ? 1 : -1), -1 == c || c == a.length ? null : h.B.Hj(a[c]);
    throw Error("Couldn't find " + (c ? "next" : "previous") + " stack?!");
}

function Hb(a) {
    if (!a) return null;
    do var c = a.R && x(a.R); while (c && u(c) == a && (a = c));
    return (c = a.R || a.M) && c.la && c.la.ne() ? h.B.Ag(c.la.ne()) : h.B.Hj(a)
}
b.next = function() {
    switch (this.Vk) {
        case h.B.types.$d:
            return Gb(this, !0);
        case h.B.types.Jh:
            return h.B.Te(this.ba.D);
        case h.B.types.Zc:
            a: {
                var a = this.ba,
                    c = a.ne();
                var d = a.D;a = c.Ma.indexOf(a) + 1;c = d.N.indexOf(c);
                for (var e; e = d.N[c]; c++) {
                    for (var f = e.Ma; a < f.length;) {
                        if (f[a].Wd) {
                            d = h.B.Gj(f[a]);
                            break a
                        }
                        a++
                    }
                    a = 0;
                    if (e.connection) {
                        d = h.B.Ag(e);
                        break a
                    }
                }
                d = null
            }
            return d;
        case h.B.types.Ie:
            a: {
                a = this.ba.ne();d = a.D;
                for (a = d.N.indexOf(a) + 1; c = d.N[a]; a++) {
                    e = c.Ma;
                    f = 0;
                    for (var g; g = e[f]; f++)
                        if (g.Wd) {
                            d = h.B.Gj(g);
                            break a
                        }
                    if (c.connection) {
                        d =
                            h.B.Ag(c);
                        break a
                    }
                }
                d = null
            }
            return d;
        case h.B.types.Ic:
            if (d = this.ba.V) return h.B.je(d);
            break;
        case h.B.types.Ad:
            return h.B.Te(this.ba.D);
        case h.B.types.xd:
            if (d = this.ba.la) return h.B.je(d)
    }
    return null
};
b.Yj = function() {
    switch (this.Vk) {
        case h.B.types.sg:
            var a = G(this.ba, !0);
            if (0 < a.length) return h.B.Hj(a[0]);
            break;
        case h.B.types.$d:
            a = this.ba;
            var c = a.R || a.M;
            return c ? h.B.je(c) : h.B.Te(a);
        case h.B.types.Ic:
            a: {
                a = this.ba.N;c = 0;
                for (var d; d = a[c]; c++) {
                    for (var e = d.Ma, f = 0, g; g = e[f]; f++)
                        if (g.Wd) {
                            a = h.B.Gj(g);
                            break a
                        }
                    if (d.connection) {
                        a = h.B.Ag(d);
                        break a
                    }
                }
                a = null
            }
            return a;
        case h.B.types.Ie:
            if (a = this.ba.la) return h.B.je(a)
    }
    return null
};
b.ue = function() {
    switch (this.Vk) {
        case h.B.types.$d:
            return Gb(this, !1);
        case h.B.types.Zc:
            a: {
                var a = this.ba;
                var c = a.ne();
                var d = a.D;a = c.Ma.indexOf(a) - 1;
                for (var e = d.N.indexOf(c), f; f = d.N[e]; e--) {
                    if (f.connection && f !== c) {
                        c = h.B.Ag(f);
                        break a
                    }
                    for (f = f.Ma; - 1 < a;) {
                        if (f[a].Wd) {
                            c = h.B.Gj(f[a]);
                            break a
                        }
                        a--
                    }
                    0 <= e - 1 && (a = d.N[e - 1].Ma.length - 1)
                }
                c = null
            }
            return c;
        case h.B.types.Ie:
            a: {
                c = this.ba.ne();d = c.D;
                for (a = d.N.indexOf(c); e = d.N[a]; a--) {
                    if (e.connection && e !== c) {
                        c = h.B.Ag(e);
                        break a
                    }
                    e = e.Ma;
                    f = e.length - 1;
                    for (var g; g = e[f]; f--)
                        if (g.Wd) {
                            c =
                                h.B.Gj(g);
                            break a
                        }
                }
                c = null
            }
            return c;
        case h.B.types.Ic:
            c = this.ba.M;
            if (c = this.ba.R || c) return h.B.je(c);
            break;
        case h.B.types.Ad:
            if ((c = this.ba.la) && !c.ne()) return h.B.je(c);
            break;
        case h.B.types.xd:
            return h.B.Te(this.ba.D)
    }
    return null
};
b.tk = function() {
    switch (this.Vk) {
        case h.B.types.$d:
            var a = this.ba.Ha();
            return h.B.Ij(this.ba.C, new h.g.O(a.x, a.y + h.B.Kw));
        case h.B.types.Jh:
            return (a = this.ba.la) ? h.B.je(a) : h.B.Hj(this.ba.D);
        case h.B.types.Zc:
            return h.B.Te(this.ba.D);
        case h.B.types.Ie:
            return h.B.Te(this.ba.D);
        case h.B.types.Ic:
            return Hb(this.ba);
        case h.B.types.Ad:
            return Hb(this.ba.D);
        case h.B.types.xd:
            return Hb(this.ba.D)
    }
    return null
};
h.g.rb = {
    vG: 0,
    XD: 3,
    vw: 8,
    Yx: 9,
    pE: 12,
    Mr: 13,
    Px: 16,
    DC: 17,
    qw: 18,
    mF: 19,
    qC: 20,
    Nr: 27,
    WF: 32,
    lF: 33,
    kF: 34,
    UC: 35,
    CD: 36,
    ND: 37,
    by: 38,
    FF: 39,
    Mw: 40,
    pF: 43,
    tF: 44,
    Ln: 45,
    aj: 46,
    ZERO: 48,
    ONE: 49,
    lG: 50,
    dG: 51,
    rD: 52,
    oD: 53,
    SF: 54,
    QF: 55,
    TC: 56,
    lE: 57,
    mD: 59,
    kD: 61,
    jD: 173,
    lD: 163,
    vF: 63,
    iC: 64,
    kw: 65,
    kC: 66,
    Aw: 67,
    Jw: 68,
    E: 69,
    XC: 70,
    sD: 71,
    xD: 72,
    ix: 73,
    ID: 74,
    qx: 75,
    JD: 76,
    WD: 77,
    jE: 78,
    FE: 79,
    jF: 80,
    Q: 81,
    wF: 82,
    Nx: 83,
    Xx: 84,
    mG: 85,
    ey: 86,
    iy: 87,
    Ws: 88,
    yG: 89,
    ny: 90,
    Bx: 91,
    wG: 92,
    BC: 93,
    EE: 96,
    xE: 97,
    DE: 98,
    CE: 99,
    tE: 100,
    sE: 101,
    BE: 102,
    AE: 103,
    rE: 104,
    wE: 105,
    vE: 106,
    zE: 107,
    uE: 109,
    yE: 110,
    qE: 111,
    YC: 112,
    bD: 113,
    cD: 114,
    dD: 115,
    eD: 116,
    fD: 117,
    gD: 118,
    hD: 119,
    iD: 120,
    ZC: 121,
    $C: 122,
    aD: 123,
    oE: 144,
    LF: 145,
    nD: 166,
    MD: 183,
    NF: 186,
    EC: 189,
    VC: 187,
    yC: 188,
    nF: 190,
    TF: 191,
    eC: 192,
    eG: 192,
    RF: 222,
    GE: 219,
    lC: 220,
    uC: 221,
    uG: 224,
    YD: 224,
    ZD: 91,
    $D: 93,
    tG: 229,
    sG: 252,
    oF: 255
};
h.Wa = {};
h.Wa.Ra = {};
h.Wa.Ra.Rg = {};
h.Wa.Ra.fq = {
    Px: "Shift",
    Fw: "Control",
    qw: "Alt",
    Bx: "Meta"
};
h.Wa.Ra.xH = function(a, c) {
    var d = h.Wa.Ra.Uz(c);
    d && delete h.Wa.Ra.Rg[d];
    h.Wa.Ra.Rg[a] = c
};
h.Wa.Ra.BB = function(a) {
    h.Wa.Ra.Rg = a
};
h.Wa.Ra.WG = function() {
    var a = {};
    h.g.object.yi(a, h.Wa.Ra.Rg);
    return a
};
h.Wa.Ra.Hz = function(a) {
    return h.Wa.Ra.Rg[a]
};
h.Wa.Ra.Uz = function(a) {
    for (var c = Object.keys(h.Wa.Ra.Rg), d = 0, e; e = c[d]; d++)
        if (h.Wa.Ra.Rg[e].name === a.name) return e;
    return null
};
h.Wa.Ra.yB = function(a) {
    for (var c = h.g.object.values(h.Wa.Ra.fq), d = "", e = 0, f; f = c[e]; e++) a.getModifierState(f) && (d += f);
    return d += a.keyCode
};
h.Wa.Ra.cz = function() {
    for (var a = h.g.rb.qx, c = [h.Wa.Ra.fq.Fw], d = "", e = h.g.object.values(h.Wa.Ra.fq), f = 0, g; g = c[f]; f++)
        if (-1 < e.indexOf(g)) d += g;
        else throw Error(g + " is not a valid modifier key.");
    return d + a
};
h.Wa.Ra.az = function() {
    var a = {},
        c = h.Wa.Ra.cz();
    a[h.g.rb.iy] = h.navigation.un;
    a[h.g.rb.kw] = h.navigation.lr;
    a[h.g.rb.Nx] = h.navigation.tn;
    a[h.g.rb.Jw] = h.navigation.kr;
    a[h.g.rb.ix] = h.navigation.mw;
    a[h.g.rb.Mr] = h.navigation.nw;
    a[h.g.rb.Ws] = h.navigation.lw;
    a[h.g.rb.Xx] = h.navigation.ow;
    a[h.g.rb.E] = h.navigation.sn;
    a[h.g.rb.Nr] = h.navigation.sn;
    a[c] = h.navigation.mr;
    return a
};
h.navigation = {};
h.navigation.wi = null;
h.navigation.Is = 1;
h.navigation.Kl = 2;
h.navigation.Js = 3;
h.navigation.Bg = h.navigation.Kl;
h.navigation.Ta = {
    Ad: "previous",
    xd: "next",
    Kn: "in",
    Un: "out",
    Ln: "insert",
    Qn: "mark",
    Lr: "disconnect",
    Ms: "toolbox",
    Gn: "exit",
    mo: "toggle_keyboard_nav"
};
h.navigation.au = function() {
    var a = h.Za(),
        c = a.sa;
    c && (h.navigation.Bg = h.navigation.Js, h.navigation.Dv(!1), a.tb.mb || h.navigation.bq(), c.wH())
};
h.navigation.$t = function() {
    h.navigation.Bg = h.navigation.Is;
    var a = h.Za();
    var c = a.sa;
    c = c ? c.P : Ib(a);
    a.tb.mb || h.navigation.bq();
    c && c.ei() && (a = G(c.ei(), !0), 0 < a.length && (a = a[0], a = h.B.Hj(a), E(h.navigation.zf(), a)))
};
h.navigation.pm = function() {
    h.jc();
    var a = h.Za(),
        c = a.Ga,
        d = !!a.sa,
        e = G(a, !0);
    h.navigation.Dv(d);
    h.navigation.Bg = h.navigation.Kl;
    0 < e.length ? E(c, h.navigation.Ap(e[0])) : (a = h.B.Ij(a, new h.g.O(100, 100)), E(c, a))
};
h.navigation.zf = function() {
    var a = h.Za(),
        c = null;
    a.ca && (c = (a = (c = a.sa) ? c.P : Ib(a)) ? a.s.Ga : null);
    return c
};
h.navigation.vA = function() {
    var a = h.Za(),
        c = Ib(a);
    if (c && c.isVisible()) {
        var d = h.navigation.zf().mb.ba;
        d.isEnabled() ? (c = gb(c, d), c.Ba(), Jb(c, !1), E(a.Ga, h.B.Te(c)), h.navigation.bv() || h.navigation.mc("Something went wrong while inserting a block from the flyout."), h.navigation.pm(), E(a.Ga, h.navigation.Ap(c)), h.navigation.oB()) : h.navigation.mc("Can't insert a disabled block.")
    } else h.navigation.mc("Trying to insert from the flyout when the flyout does not  exist or is not visible")
};
h.navigation.Dv = function(a) {
    h.navigation.zf() && (h.navigation.zf().va(), a && Ib(h.Za()).va())
};
h.navigation.JA = function() {
    var a = h.Za().tb.mb,
        c = h.Za().Ga.mb;
    if (!a) return h.navigation.mc("Cannot insert with no marked node."), !1;
    if (!c) return h.navigation.mc("Cannot insert with no cursor node."), !1;
    a = a.jb();
    c = c.jb();
    return a == h.B.types.Zc ? (h.navigation.mc("Should not have been able to mark a field."), !1) : a == h.B.types.Ic ? (h.navigation.mc("Should not have been able to mark a block."), !1) : a == h.B.types.$d ? (h.navigation.mc("Should not have been able to mark a stack."), !1) : c == h.B.types.Zc ? (h.navigation.mc("Cannot attach a field to anything else."), !1) : c == h.B.types.sg ? (h.navigation.mc("Cannot attach a workspace to anything else."), !1) : !0
};
h.navigation.PA = function(a, c) {
    if (a.Ua) return h.navigation.mc("Cannot move a shadow block to the workspace."), !1;
    a.getParent() && y(a, !1);
    a.moveTo(c.iw);
    return !0
};
h.navigation.bv = function() {
    var a = h.Za().tb.mb,
        c = h.Za().Ga.mb;
    if (!h.navigation.JA()) return !1;
    var d = a.jb(),
        e = c.jb(),
        f = c.ba,
        g = a.ba;
    if (a.bk && c.bk) return h.navigation.Id(f, g);
    if (a.bk && (e == h.B.types.Ic || e == h.B.types.$d)) return h.navigation.Mu(f, g);
    if (d == h.B.types.sg) return c = h.navigation.vp(c), h.navigation.PA(c, a);
    h.navigation.mc("Unexpected state in Blockly.navigation.modify_.");
    return !1
};
h.navigation.mz = function(a, c) {
    var d = a.D,
        e = c.D;
    D(d) == D(e) && (-1 < p(d, !1).indexOf(e) ? h.navigation.tm(c).disconnect() : h.navigation.tm(a).disconnect())
};
h.navigation.gq = function(a, c) {
    if (!a || !c) return !1;
    var d = a.D;
    return Kb(c, a) == h.ea.jl ? (h.navigation.mz(a, c), C(c) || a.type != h.Ca && a.type != h.Oa || D(d).moveBy(c.qb - a.qb, c.Ka - a.Ka), c.connect(a), !0) : !1
};
h.navigation.tm = function(a) {
    var c = a.D;
    return C(a) ? c.R ? c.R : c.M ? c.M : null : a
};
h.navigation.uu = function(a) {
    return C(a) ? a : a.la ? a.la : null
};
h.navigation.Id = function(a, c) {
    if (!a || !c) return !1;
    var d = h.navigation.tm(a),
        e = h.navigation.uu(c),
        f = h.navigation.uu(a),
        g = h.navigation.tm(c);
    if (d && e && h.navigation.gq(d, e) || f && g && h.navigation.gq(f, g) || h.navigation.gq(a, c)) return !0;
    try {
        Lb(c, a)
    } catch (k) {
        h.navigation.mc("Connection failed with error: " + k)
    }
    return !1
};
h.navigation.Mu = function(a, c) {
    switch (c.type) {
        case h.Bd:
            if (h.navigation.Id(a.V, c)) return !0;
            break;
        case h.Ca:
            if (h.navigation.Id(a.R, c)) return !0;
            break;
        case h.Oa:
            if (h.navigation.Id(a.M, c)) return !0;
            break;
        case h.zd:
            for (var d = 0; d < a.N.length; d++) {
                var e = a.N[d].connection;
                if (e && e.type === h.Oa && h.navigation.Id(e, c)) return !0
            }
            if (a.M && h.navigation.Id(a.M, c)) return !0
    }
    h.navigation.mc("This block can not be inserted at the marked location.");
    return !1
};
h.navigation.lz = function() {
    var a = h.Za(),
        c = a.Ga.mb;
    if (c.bk) {
        var d = c.ba;
        d.isConnected() ? (c = C(d) ? d : d.la, d = C(d) ? d.la : d, d.D.Ua ? h.navigation.Wp("Cannot disconnect a shadow block") : (c.disconnect(), Mb(d, c), ta(D(c.D)), c = h.B.je(c), E(a.Ga, c))) : h.navigation.Wp("Cannot disconnect unconnected connection")
    } else h.navigation.Wp("Cannot disconnect blocks when the cursor is not on a connection")
};
h.navigation.bq = function() {
    var a = h.Za();
    E(a.tb, a.Ga.mb)
};
h.navigation.oB = function() {
    var a = h.Za();
    E(a.tb, null);
    a.tb.va()
};
h.navigation.Mi = function(a) {
    h.navigation.Bg = a
};
h.navigation.vp = function(a) {
    return a ? a.jb() === h.B.types.Ic ? a.ba : a.jb() === h.B.types.$d ? a.ba : a.jb() === h.B.types.sg ? null : a.ba.D : null
};
h.navigation.Ap = function(a) {
    var c = a.R || a.M;
    return c ? h.B.je(c) : h.B.Te(a)
};
h.navigation.gv = function(a) {
    var c = h.Za();
    if (c && (c = c.Ga)) {
        var d = h.navigation.vp(c.mb);
        d === a ? d.getParent() ? (a = d.R || d.M) && E(c, h.B.je(a.la)) : E(c, h.B.Ij(d.C, d.Ha())) : -1 < Qa(a, !1).indexOf(d) && E(c, h.B.Ij(d.C, d.Ha()))
    }
};
h.navigation.kH = function(a) {
    var c = h.Za().Ga;
    if (c) {
        var d = h.navigation.vp(c.mb);
        d === a && E(c, h.B.Te(d))
    }
};
h.navigation.jp = function() {
    h.$e || (h.$e = !0, h.navigation.pm())
};
h.navigation.kz = function() {
    if (h.$e) {
        var a = h.Za();
        h.$e = !1;
        a.Ga.va();
        a.tb.va();
        h.navigation.zf() && h.navigation.zf().va()
    }
};
h.navigation.Wp = function(a) {
    h.navigation.wi ? h.navigation.wi("log", a) : console.log(a)
};
h.navigation.mc = function(a) {
    h.navigation.wi ? h.navigation.wi("warn", a) : console.warn(a)
};
h.navigation.PG = function(a) {
    h.navigation.wi ? h.navigation.wi("error", a) : console.error(a)
};
h.navigation.nv = function(a) {
    a = h.Wa.Ra.yB(a);
    return (a = h.Wa.Ra.Hz(a)) ? h.navigation.Xg(a) : !1
};
h.navigation.Xg = function(a) {
    var c = h.Za().options.readOnly,
        d = !1;
    h.$e ? c ? -1 < h.navigation.Mx.indexOf(a) && (d = h.navigation.Au(a)) : d = h.navigation.Au(a) : a.name === h.navigation.Ta.mo && (h.navigation.jp(), d = !0);
    return d
};
h.navigation.Au = function(a) {
    var c = h.Za();
    if (a.name === h.navigation.Ta.mo) return h.navigation.kz(), !0;
    if (a.name === h.navigation.Ta.Ms) return c.sa ? h.navigation.au() : h.navigation.$t(), !0;
    if (h.navigation.Bg === h.navigation.Kl) {
        c = c.Ga.mb;
        var d = !1;
        c && c.jb() === h.B.types.Zc && (d = c.ba.Xg(a));
        d || (d = h.navigation.ZB(a));
        return d
    }
    return h.navigation.Bg === h.navigation.Is ? h.navigation.Ez(a) : h.navigation.Bg === h.navigation.Js ? h.navigation.SB(a) : !1
};
h.navigation.ZB = function(a) {
    var c = h.Za();
    switch (a.name) {
        case h.navigation.Ta.Ad:
            return c.Ga.ue(), !0;
        case h.navigation.Ta.Un:
            return c.Ga.tk(), !0;
        case h.navigation.Ta.xd:
            return c.Ga.next(), !0;
        case h.navigation.Ta.Kn:
            return c.Ga.Yj(), !0;
        case h.navigation.Ta.Ln:
            return h.navigation.bv(), !0;
        case h.navigation.Ta.Qn:
            return h.navigation.aA(), !0;
        case h.navigation.Ta.Lr:
            return h.navigation.lz(), !0;
        default:
            return !1
    }
};
h.navigation.Ez = function(a) {
    switch (a.name) {
        case h.navigation.Ta.Ad:
            return h.navigation.zf().ue(), !0;
        case h.navigation.Ta.Un:
            return h.navigation.au(), !0;
        case h.navigation.Ta.xd:
            return h.navigation.zf().next(), !0;
        case h.navigation.Ta.Qn:
            return h.navigation.vA(), !0;
        case h.navigation.Ta.Gn:
            return h.navigation.pm(), !0;
        default:
            return !1
    }
};
h.navigation.SB = function(a) {
    if (a.name === h.navigation.Ta.Gn) return h.navigation.pm(), !0;
    var c = h.Za().sa.Xg(a);
    return c || a.name !== h.navigation.Ta.Kn ? c : (h.navigation.$t(), !0)
};
h.navigation.aA = function() {
    var a = h.Za().Ga.mb,
        c = a.jb();
    c == h.B.types.Zc ? a.ba.Ik() : a.bk || c == h.B.types.sg ? h.navigation.bq() : c == h.B.types.Ic ? h.navigation.mc("Cannot mark a block.") : c == h.B.types.$d && h.navigation.mc("Cannot mark a stack.")
};
h.navigation.un = new h.Sd(h.navigation.Ta.Ad);
h.navigation.lr = new h.Sd(h.navigation.Ta.Un);
h.navigation.tn = new h.Sd(h.navigation.Ta.xd);
h.navigation.kr = new h.Sd(h.navigation.Ta.Kn);
h.navigation.mw = new h.Sd(h.navigation.Ta.Ln);
h.navigation.nw = new h.Sd(h.navigation.Ta.Qn);
h.navigation.lw = new h.Sd(h.navigation.Ta.Lr);
h.navigation.ow = new h.Sd(h.navigation.Ta.Ms);
h.navigation.sn = new h.Sd(h.navigation.Ta.Gn);
h.navigation.mr = new h.Sd(h.navigation.Ta.mo);
h.navigation.Mx = [h.navigation.un, h.navigation.lr, h.navigation.kr, h.navigation.tn, h.navigation.mr];
h.Fa = function(a, c, d) {
    "function" != typeof a && h.Fa.aw(a);
    this.xi = a;
    this.qm = null;
    this.Ck = 0;
    this.Wq = this.yq = null;
    a = this.xi;
    if (Array.isArray(a)) {
        for (var e = !1, f = 0; f < a.length; f++) {
            var g = a[f][0];
            "string" == typeof g ? a[f][0] = h.g.Fc(g) : (null != g.alt && (a[f][0].alt = h.g.Fc(g.alt)), e = !0)
        }
        if (!(e || 2 > a.length)) {
            e = [];
            for (f = 0; f < a.length; f++) e.push(a[f][0]);
            f = h.g.Da.Rq(e);
            g = h.g.Da.st(e, f);
            var k = h.g.Da.tt(e, f);
            !g && !k || f <= g + k || (g && (this.yq = e[0].substring(0, g - 1)), k && (this.Wq = e[0].substr(1 - k)), this.xi = h.Fa.zy(a, g, k))
        }
    }
    a = this.getOptions(!1)[0];
    h.Fa.w.constructor.call(this, a[1], c, d);
    this.Fi = this.nd = null
};
h.g.object.S(h.Fa, h.Ea);
h.Fa.pa = function(a) {
    return new h.Fa(a.options, void 0, a)
};
h.Fa.prototype.Fs = !0;
h.Fa.tC = 25;
h.Fa.dE = .45;
h.Fa.Sr = 5;
h.Fa.jx = 2 * h.Fa.Sr;
h.Fa.cl = h.g.userAgent.bl ? "\u25bc" : "\u25be";
b = h.Fa.prototype;
b.Hw = "default";
b.$j = function() {
    h.Fa.w.$j.call(this);
    this.nd = h.g.m.L("image", {
        y: h.Fa.Sr
    }, this.jd);
    this.Fd = h.g.m.L("tspan", {}, this.Vc);
    this.Fd.appendChild(document.createTextNode(this.D.H ? h.Fa.cl + " " : " " + h.Fa.cl));
    this.D.H ? this.Vc.insertBefore(this.Fd, this.Ri) : this.Vc.appendChild(this.Fd)
};
b.Ik = function() {
    var a = new h.kg;
    tb(a, this.D.H);
    a.Li("listbox");
    var c = this.getOptions(!1);
    this.Fi = null;
    for (var d = 0; d < c.length; d++) {
        var e = c[d][0],
            f = c[d][1];
        if ("object" == typeof e) {
            var g = new Image(e.width, e.height);
            g.src = e.src;
            g.alt = e.alt || "";
            e = g
        }
        e = new h.zl(e);
        e.Li("option");
        tb(e, this.D.H);
        e.setValue(f);
        e.vj = !0;
        sb(a, e);
        Eb(e, f == this.Be);
        f == this.Be && (this.Fi = e);
        Fb(e, this.bA, this)
    }
    h.g.Pa.Mi(a.$, h.g.Pa.State.pw, this.Fi ? this.Fi.ob() : "");
    this.af = a;
    this.af.Ba(h.A.Rz());
    h.g.m.Ib(this.af.$, "blocklyDropdownMenu");
    h.A.DB(this, this.wz.bind(this));
    this.af.focus();
    this.Fi && h.g.style.Hv(this.Fi.$, this.af.$)
};
b.wz = function() {
    this.af.I();
    this.af = null
};
b.bA = function(a) {
    h.A.Wj(this, !0);
    this.setValue(a.getValue())
};
h.Fa.zy = function(a, c, d) {
    for (var e = [], f = 0; f < a.length; f++) {
        var g = a[f][0],
            k = a[f][1];
        g = g.substring(c, g.length - d);
        e[f] = [g, k]
    }
    return e
};
b = h.Fa.prototype;
b.getOptions = function(a) {
    return "function" == typeof this.xi ? (this.qm && a || (this.qm = this.xi.call(this), h.Fa.aw(this.qm)), this.qm) : this.xi
};
b.gm = function(a) {
    for (var c = !1, d = this.getOptions(!0), e = 0, f; f = d[e]; e++)
        if (f[1] == a) {
            c = !0;
            break
        }
    return c ? a : (this.D && console.warn("Cannot set the dropdown's value to an unavailable option. Block type: " + this.D.type + ", Field name: " + this.name + ", Value: " + a), null)
};
b.hm = function(a) {
    h.Fa.w.hm.call(this, a);
    a = this.getOptions(!0);
    for (var c = 0, d; d = a[c]; c++) d[1] == this.Be && (this.Ck = c)
};
b.Ae = function() {
    this.D && this.Fd && (this.Fd.style.fill = this.D.Ua ? Nb(this.D) : this.D.wg)
};
b.Di = function() {
    this.Ri.nodeValue = "";
    this.nd.style.display = "none";
    var a = this.getOptions(!0),
        c = 0 <= this.Ck && a[this.Ck][0];
    if (c && "object" == typeof c) {
        this.nd.style.display = "";
        this.nd.setAttributeNS(h.g.m.dd, "xlink:href", c.src);
        this.nd.setAttribute("height", c.height);
        this.nd.setAttribute("width", c.width);
        a = h.g.m.xp(this.Fd);
        var d = Number(c.width);
        this.ub.height = Number(c.height) + h.Fa.jx;
        this.ub.width = d + a + h.Ea.qj;
        this.D.H ? (c = h.Ea.zh - 1, this.nd.setAttribute("x", h.Ea.zh + a), this.Vc.setAttribute("x", c)) : (c = d +
            a + h.Ea.zh + 1, this.Vc.setAttribute("text-anchor", "end"), this.Vc.setAttribute("x", c), this.nd.setAttribute("x", h.Ea.zh))
    } else this.Ri.nodeValue = ob(this), this.Vc.setAttribute("text-anchor", "start"), this.Vc.setAttribute("x", h.Ea.zh), this.ub.height = h.Ea.Ar, this.ub.width = h.g.m.xp(this.Vc) + h.Ea.qj;
    this.sj.setAttribute("height", this.ub.height);
    this.sj.setAttribute("width", this.ub.width)
};
b.yp = function() {
    if (0 > this.Ck) return null;
    var a = this.getOptions(!0)[this.Ck][0];
    return "object" == typeof a ? a.alt : a
};
h.Fa.aw = function(a) {
    if (!Array.isArray(a)) throw TypeError("FieldDropdown options must be an array.");
    if (!a.length) throw TypeError("FieldDropdown options must not be an empty array.");
    for (var c = !1, d = 0; d < a.length; ++d) {
        var e = a[d];
        Array.isArray(e) ? "string" != typeof e[1] ? (c = !0, console.error("Invalid option[" + d + "]: Each FieldDropdown option id must be a string. Found " + e[1] + " in: ", e)) : e[0] && "string" != typeof e[0] && "string" != typeof e[0].src && (c = !0, console.error("Invalid option[" + d + "]: Each FieldDropdown option must have a string label or image description. Found" +
            e[0] + " in: ", e)) : (c = !0, console.error("Invalid option[" + d + "]: Each FieldDropdown option must be an array. Found: ", e))
    }
    if (c) throw TypeError("Found invalid FieldDropdown options.");
};
h.Fa.prototype.Xg = function(a) {
    if (this.af) {
        if (a === h.navigation.un) return Ab(this.af), !0;
        if (a === h.navigation.tn) return yb(this.af), !0
    }
    return h.Fa.w.Xg.call(this, a)
};
h.Nc.register("field_dropdown", h.Fa);
h.g.Rect = function(a, c, d, e) {
    this.top = a;
    this.bottom = c;
    this.left = d;
    this.right = e
};
h.g.Rect.prototype.contains = function(a, c) {
    return a >= this.left && a <= this.right && c >= this.top && c <= this.bottom
};
h.i.cj = function(a) {
    this.Ub = a.id;
    this.group = h.i.Db();
    this.$b = !1
};
h.g.object.S(h.i.cj, h.i.Abstract);
h.i.cj.prototype.type = h.i.Vw;
h.i.cj.prototype.Ia = function() {
    var a = {
        type: this.type
    };
    this.group && (a.group = this.group);
    this.Ub && (a.workspaceId = this.Ub);
    return a
};
h.i.cj.prototype.pa = function(a) {
    this.Ub = a.workspaceId;
    this.group = a.group
};
h.K = {};
h.K.qn = function(a) {
    var c = H,
        d = h.g.xml.createElement("xml"),
        e = h.K.XB(h.Z.bt(c));
    e.hasChildNodes() && d.appendChild(e);
    var f = Pa(c, !0);
    e = 0;
    for (var g; g = f[e]; e++) d.appendChild(g.$q(a));
    c = G(c, !0);
    for (e = 0; f = c[e]; e++) d.appendChild(h.K.Bo(f, a));
    return d
};
h.K.XB = function(a) {
    for (var c = h.g.xml.createElement("variables"), d = 0, e; e = a[d]; d++) {
        var f = h.g.xml.createElement("variable");
        f.appendChild(h.g.xml.createTextNode(e.name));
        e.type && f.setAttribute("type", e.type);
        f.id = e.ob();
        c.appendChild(f)
    }
    return c
};
h.K.Bo = function(a, c) {
    var d;
    a.C.H && (d = a.C.di());
    c = h.K.sf(a, c);
    var e = a.Ha();
    c.setAttribute("x", Math.round(a.C.H ? d - e.x : e.x));
    c.setAttribute("y", Math.round(e.y));
    return c
};
h.K.zz = function(a) {
    var c = !1;
    a.name && (a.Fs ? c = !0 : a.Wd && (console.warn("Detected an editable field that was not serializable. Please define SERIALIZABLE property as true on all editable custom fields. Proceeding with serialization."), c = !0));
    return c ? (c = h.g.xml.createElement("field"), c.setAttribute("name", a.name), c.textContent = a.getValue(), c) : null
};
h.K.xy = function(a, c) {
    for (var d = 0, e; e = a.N[d]; d++)
        for (var f = 0, g; g = e.Ma[f]; f++)(g = h.K.zz(g)) && c.appendChild(g)
};
h.K.sf = function(a, c) {
    var d = h.g.xml.createElement(a.Ua ? "shadow" : "block");
    d.setAttribute("type", a.type);
    c || (d.id = a.id);
    if (a.qd) {
        var e = a.qd();
        e && (e.hasChildNodes() || e.hasAttributes()) && d.appendChild(e)
    }
    h.K.xy(a, d);
    if (e = a.Hd.text) {
        var f = a.Hd.size,
            g = a.Hd.tv,
            k = h.g.xml.createElement("comment");
        k.appendChild(h.g.xml.createTextNode(e));
        k.setAttribute("pinned", g);
        k.setAttribute("h", f.height);
        k.setAttribute("w", f.width);
        d.appendChild(k)
    }
    a.data && (e = h.g.xml.createElement("data"), e.appendChild(h.g.xml.createTextNode(a.data)),
        d.appendChild(e));
    for (f = 0; g = a.N[f]; f++) {
        var l;
        k = !0;
        if (g.type != h.He) {
            var m = x(g.connection);
            g.type == h.Oa ? l = h.g.xml.createElement("value") : g.type == h.Ca && (l = h.g.xml.createElement("statement"));
            e = g.connection.xe;
            !e || m && m.Ua || l.appendChild(h.K.nt(e, c));
            m && (l.appendChild(h.K.sf(m, c)), k = !1);
            l.setAttribute("name", g.name);
            k || d.appendChild(l)
        }
    }
    void 0 != a.Ze && a.Ze != a.uA && d.setAttribute("inline", a.Ze);
    a.isCollapsed() && d.setAttribute("collapsed", !0);
    a.isEnabled() || d.setAttribute("disabled", !0);
    a.Pc() || a.Ua || d.setAttribute("deletable", !1);
    a.Dc() || a.Ua || d.setAttribute("movable", !1);
    a.Qc() || d.setAttribute("editable", !1);
    if (f = u(a)) l = h.g.xml.createElement("next"), l.appendChild(h.K.sf(f, c)), d.appendChild(l);
    e = a.V && a.V.xe;
    !e || f && f.Ua || l.appendChild(h.K.nt(e, c));
    return d
};
h.K.nt = function(a, c) {
    for (var d = a = a.cloneNode(!0), e; d;)
        if (c && "shadow" == d.nodeName && d.removeAttribute("id"), d.firstChild) d = d.firstChild;
        else {
            for (; d && !d.nextSibling;) e = d, d = d.parentNode, e.nodeType == h.g.m.Node.TEXT_NODE && "" == e.data.trim() && d.firstChild != e && h.g.m.removeNode(e);
            d && (e = d, d = d.nextSibling, e.nodeType == h.g.m.Node.TEXT_NODE && "" == e.data.trim() && h.g.m.removeNode(e))
        }
    return a
};
h.K.Mc = function(a) {
    a = h.g.xml.Mc(a);
    var c = /(<[^/](?:[^>]*[^/])?>[^<]*)\n([^<]*<\/)/;
    do {
        var d = a;
        a = a.replace(c, "$1&#10;$2")
    } while (a != d);
    return a
};
h.K.OG = function(a) {
    a = h.K.Mc(a).split("<");
    for (var c = "", d = 1; d < a.length; d++) {
        var e = a[d];
        "/" == e[0] && (c = c.substring(2));
        a[d] = c + "<" + e;
        "/" != e[0] && "/>" != e.slice(-2) && (c += "  ")
    }
    a = a.join("\n");
    a = a.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, "$1</$2>");
    return a.replace(/^\n/, "")
};
h.K.$f = function(a) {
    var c = h.g.xml.NB(a);
    if (!c || !c.documentElement || c.getElementsByTagName("parsererror").length) throw Error("textToDom was unable to parse: " + a);
    return c.documentElement
};
h.K.IG = function(a, c) {
    c.Rb(!1);
    c.clear();
    a = h.K.Eg(a, c);
    c.Rb(!0);
    return a
};
h.K.Eg = function(a, c) {
    if (a instanceof h.hb) {
        var d = a;
        a = c;
        c = d;
        console.warn("Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments.")
    }
    var e;
    c.H && (e = c.di());
    d = [];
    h.g.m.Lk();
    var f = a.childNodes.length,
        g = h.i.Db();
    g || h.i.ga(!0);
    c.Rb && c.Rb(!1);
    var k = !0;
    try {
        for (var l = 0; l < f; l++) {
            var m = a.childNodes[l],
                n = m.nodeName.toLowerCase();
            if ("block" == n || "shadow" == n && !h.i.$b) {
                var q = h.K.Zh(m, c);
                d.push(q.id);
                var r = m.hasAttribute("x") ? parseInt(m.getAttribute("x"), 10) : 10,
                    t = m.hasAttribute("y") ? parseInt(m.getAttribute("y"),
                        10) : 10;
                isNaN(r) || isNaN(t) || q.moveBy(c.H ? e - r : r, t);
                k = !1
            } else {
                if ("shadow" == n) throw TypeError("Shadow block cannot be a top-level block.");
                if ("comment" == n) c.ca ? h.Oh ? h.Oh.setValue(m.textContent) : console.warn("Missing require for Blockly.WorkspaceCommentSvg, ignoring workspace comment.") : h.jy ? h.jy.setValue(m.textContent) : console.warn("Missing require for Blockly.WorkspaceComment, ignoring workspace comment.");
                else if ("variables" == n) {
                    if (k) h.K.sz(m, c);
                    else throw Error("'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location.");
                    k = !1
                }
            }
        }
    } finally {
        g || h.i.ga(!1), h.g.m.Mk()
    }
    c.Rb && c.Rb(!0);
    h.i.Na(new h.i.cj(c));
    return d
};
h.K.AG = function(a, c) {
    if (c.hasOwnProperty("scale")) {
        var d = h.ma.rf;
        try {
            h.ma.rf = 0;
            var e = Ob(c)
        } finally {
            h.ma.rf = d
        }
    }
    a = h.K.Eg(a, c);
    if (e && e.top != e.bottom) {
        d = e.bottom;
        var f = e.left;
        var g = Infinity,
            k = Infinity;
        for (e = 0; e < a.length; e++) {
            var l = v(c, a[e]).Ha();
            l.y < k && (k = l.y);
            l.x < g && (g = l.x)
        }
        d = d - k + h.ma.Ox;
        f -= g;
        var m;
        c.H && (m = c.di());
        for (e = 0; e < a.length; e++) v(c, a[e]).moveBy(c.H ? m - f : f, d)
    }
    return a
};
h.K.Zh = function(a, c) {
    if (a instanceof h.hb) {
        var d = a;
        a = c;
        c = d;
        console.warn("Deprecated call to Blockly.Xml.domToBlock, swap the arguments.")
    }
    h.i.disable();
    d = c.yf();
    try {
        var e = h.K.ap(a, c),
            f = p(e, !1);
        if (c.ca) {
            Jb(e, !0);
            for (var g = f.length - 1; 0 <= g; g--) f[g].mi();
            for (g = f.length - 1; 0 <= g; g--) f[g].Ba(!1);
            setTimeout(function() {
                e.C && Jb(e, !1)
            }, 1);
            Pb(e);
            Qb(c)
        } else
            for (g = f.length - 1; 0 <= g; g--);
    } finally {
        h.i.enable()
    }
    if (h.i.isEnabled()) {
        a = h.Z.du(c, d);
        for (g = 0; g < a.length; g++) h.i.Na(new h.i.cd(a[g]));
        h.i.Na(new h.i.il(e))
    }
    return e
};
h.K.sz = function(a, c) {
    for (var d = 0, e; e = a.childNodes[d]; d++)
        if (e.nodeType == h.g.m.Node.ELEMENT_NODE) {
            var f = e.getAttribute("type"),
                g = e.getAttribute("id");
            c.Jd(e.textContent, f, g)
        }
};
h.K.ap = function(a, c) {
    var d = null,
        e = a.getAttribute("type");
    if (!e) throw TypeError("Block type unspecified: " + a.outerHTML);
    var f = a.getAttribute("id");
    d = c.jq(e, f);
    var g = null;
    f = 0;
    for (var k; k = a.childNodes[f]; f++)
        if (k.nodeType != h.g.m.Node.TEXT_NODE) {
            for (var l = g = null, m = 0, n; n = k.childNodes[m]; m++) n.nodeType == h.g.m.Node.ELEMENT_NODE && ("block" == n.nodeName.toLowerCase() ? g = n : "shadow" == n.nodeName.toLowerCase() && (l = n));
            !g && l && (g = l);
            m = k.getAttribute("name");
            switch (k.nodeName.toLowerCase()) {
                case "mutation":
                    d.Ue && (d.Ue(k),
                        d.mi && d.mi());
                    break;
                case "comment":
                    if (!h.Comment) {
                        console.warn("Missing require for Blockly.Comment, ignoring block comment.");
                        break
                    }
                    g = k.textContent;
                    l = "true" == k.getAttribute("pinned");
                    m = parseInt(k.getAttribute("w"), 10);
                    k = parseInt(k.getAttribute("h"), 10);
                    d.Hi(g);
                    d.Hd.tv = l;
                    isNaN(m) || isNaN(k) || (d.Hd.size = new h.g.Cd(m, k));
                    l && d.Nz && !d.Rc && setTimeout(function() {
                        d.fe.Eb(!0)
                    }, 1);
                    break;
                case "data":
                    d.data = k.textContent;
                    break;
                case "title":
                case "field":
                    h.K.rz(d, m, k);
                    break;
                case "value":
                case "statement":
                    k = da(d,
                        m);
                    if (!k) {
                        console.warn("Ignoring non-existent input " + m + " in block " + e);
                        break
                    }
                    l && (k.connection.xe = l);
                    if (g)
                        if (g = h.K.ap(g, c), g.M) k.connection.connect(g.M);
                        else if (g.R) k.connection.connect(g.R);
                    else throw TypeError("Child block does not have output or previous statement.");
                    break;
                case "next":
                    l && d.V && (d.V.xe = l);
                    if (g) {
                        if (!d.V) throw TypeError("Next statement does not exist.");
                        if (d.V.isConnected()) throw TypeError("Next statement is already connected.");
                        g = h.K.ap(g, c);
                        if (!g.R) throw TypeError("Next block does not have previous statement.");
                        d.V.connect(g.R)
                    }
                    break;
                default:
                    console.warn("Ignoring unknown tag: " + k.nodeName)
            }
        }(f = a.getAttribute("inline")) && d.Ii("true" == f);
    (f = a.getAttribute("disabled")) && d.we("true" != f && "disabled" != f);
    if (f = a.getAttribute("deletable")) d.Gt = "true" == f;
    (f = a.getAttribute("movable")) && d.Nq("true" == f);
    (f = a.getAttribute("editable")) && d.Mq("true" == f);
    (f = a.getAttribute("collapsed")) && d.Zf("true" == f);
    if ("shadow" == a.nodeName.toLowerCase()) {
        a = Qa(d, !1);
        for (f = 0; c = a[f]; f++)
            if (!c.Ua) throw TypeError("Shadow block not allowed non-shadow child.");
        if (Na(d).length) throw TypeError("Shadow blocks cannot have variable references.");
        d.Qq(!0)
    }
    return d
};
h.K.rz = function(a, c, d) {
    var e = ba(a, c);
    e ? e.setValue(d.textContent) : console.warn("Ignoring non-existent field " + c + " in block " + a.type)
};
h.K.hz = function(a) {
    for (var c = 0, d; d = a.childNodes[c]; c++)
        if ("next" == d.nodeName.toLowerCase()) {
            a.removeChild(d);
            break
        }
};
h.oo = function(a) {
    this.s = a;
    this.zg = [];
    if (!(0 >= this.s.options.Rm)) {
        a = {
            scrollbars: !0,
            Nj: this.s.options.Nj,
            Ac: this.s,
            H: this.s.H,
            zi: this.s.options.zi,
            Bk: this.s.options.Bk
        };
        if (this.s.Ff) {
            a.Va = this.s.Va == h.qg ? h.lj : h.qg;
            if (!h.Jn) throw Error("Missing require for Blockly.HorizontalFlyout");
            this.P = new h.Jn(a)
        } else {
            a.Va = this.s.Va == h.pg ? h.Dd : h.pg;
            if (!h.rg) throw Error("Missing require for Blockly.VerticalFlyout");
            this.P = new h.rg(a)
        }
        Ua(this.s, this.XA.bind(this))
    }
};
b = h.oo.prototype;
b.nj = 47;
b.fl = 44;
b.Eh = 16;
b.vx = 20;
b.ds = 20;
b.yl = 10;
b.io = 0;
b.jo = 32;
b.ax = .1;
b.Np = !1;
b.Sm = 0;
b.J = null;
b.kn = null;
b.Tp = 0;
b.Of = 0;
b.Vu = 0;
b.$v = 0;
b.La = function() {
    this.J = h.g.m.L("g", {
        "class": "blocklyTrash"
    }, null);
    var a = String(Math.random()).substring(2);
    var c = h.g.m.L("clipPath", {
        id: "blocklyTrashBodyClipPath" + a
    }, this.J);
    h.g.m.L("rect", {
        width: this.nj,
        height: this.fl,
        y: this.Eh
    }, c);
    var d = h.g.m.L("image", {
        width: h.Kh.width,
        x: -this.io,
        height: h.Kh.height,
        y: -this.jo,
        "clip-path": "url(#blocklyTrashBodyClipPath" + a + ")"
    }, this.J);
    d.setAttributeNS(h.g.m.dd, "xlink:href", this.s.options.$m + h.Kh.url);
    c = h.g.m.L("clipPath", {
        id: "blocklyTrashLidClipPath" + a
    }, this.J);
    h.g.m.L("rect", {
        width: this.nj,
        height: this.Eh
    }, c);
    this.kn = h.g.m.L("image", {
        width: h.Kh.width,
        x: -this.io,
        height: h.Kh.height,
        y: -this.jo,
        "clip-path": "url(#blocklyTrashLidClipPath" + a + ")"
    }, this.J);
    this.kn.setAttributeNS(h.g.m.dd, "xlink:href", this.s.options.$m + h.Kh.url);
    h.ra(this.J, "mouseup", this, this.click);
    h.Xb(d, "mouseover", this, this.OA);
    h.Xb(d, "mouseout", this, this.MA);
    this.so();
    return this.J
};
b.wa = function(a) {
    0 < this.s.options.Rm && (h.g.m.ni(this.P.La("svg"), z(this.s)), this.P.wa(this.s), this.P.Ou = function() {
        return !0
    });
    this.pn = this.vx + a;
    qa(this, !1);
    return this.pn + this.fl + this.Eh
};
b.I = function() {
    this.J && (h.g.m.removeNode(this.J), this.J = null);
    this.s = this.kn = null;
    clearTimeout(this.Tp)
};
b.position = function() {
    if (this.pn) {
        var a = this.s.vc();
        a && (this.Vu = a.Va == h.Dd || this.s.Ff && !this.s.H ? a.lb + a.fc - this.nj - this.ds - h.za.ac : this.ds + h.za.ac, this.$v = a.Va == h.lj ? this.pn : a.vb + a.rc - (this.fl + this.Eh) - this.pn, this.J.setAttribute("transform", "translate(" + this.Vu + "," + this.$v + ")"))
    }
};
b.rm = function() {
    if (!this.J) return null;
    var a = this.J.getBoundingClientRect(),
        c = a.top + this.jo - this.yl;
    a = a.left + this.io - this.yl;
    return new h.g.Rect(c, c + this.Eh + this.fl + 2 * this.yl, a, a + this.nj + 2 * this.yl)
};

function qa(a, c) {
    a.Np != c && (clearTimeout(a.Tp), a.Np = c, a.so())
}
b.so = function() {
    this.Of += this.Np ? .2 : -.2;
    this.Of = Math.min(Math.max(this.Of, this.Sm), 1);
    Rb(this, 45 * this.Of);
    this.J.style.opacity = .4 + .4 * this.Of;
    this.Of > this.Sm && 1 > this.Of && (this.Tp = setTimeout(this.so.bind(this), 20))
};

function Rb(a, c) {
    var d = a.s.Va == h.pg || a.s.Ff && a.s.H;
    a.kn.setAttribute("transform", "rotate(" + (d ? -c : c) + "," + (d ? 4 : a.nj - 4) + "," + (a.Eh - 2) + ")")
}
b.close = function() {
    qa(this, !1)
};
b.click = function() {
    if (this.zg.length) {
        for (var a = [], c = 0, d; d = this.zg[c]; c++) a[c] = h.K.$f(d);
        this.P.show(a)
    }
};
b.OA = function() {
    this.zg.length && qa(this, !0)
};
b.MA = function() {
    qa(this, !1)
};
b.XA = function(a) {
    if (!(0 >= this.s.options.Rm) && a.type == h.i.xw && "shadow" != a.pq.tagName.toLowerCase()) {
        for (var c = a = a.pq.cloneNode(!0); c;) {
            c.removeAttribute && (c.removeAttribute("x"), c.removeAttribute("y"), c.removeAttribute("id"));
            var d = c.firstChild || c.nextSibling;
            if (!d)
                for (d = c.parentNode; d;) {
                    if (d.nextSibling) {
                        d = d.nextSibling;
                        break
                    }
                    d = d.parentNode
                }
            c = d
        }
        a = h.K.Mc(a);
        if (-1 == this.zg.indexOf(a)) {
            for (this.zg.unshift(a); this.zg.length > this.s.options.Rm;) this.zg.pop();
            this.Sm = this.ax;
            Rb(this, 45 * this.Sm)
        }
    }
};
h.Hb = Object.create(null);
h.ea = function(a, c) {
    this.D = a;
    this.type = c
};
h.ea.jl = 0;
h.ea.As = 1;
h.ea.Ds = 2;
h.ea.Cs = 3;
h.ea.ys = 4;
h.ea.zs = 5;
h.ea.Bs = 6;
b = h.ea.prototype;
b.la = null;
b.Qe = null;
b.xe = null;
b.qb = 0;
b.Ka = 0;
b.Id = function(a) {
    var c = this,
        d = c.D,
        e = a.D;
    a.isConnected() && a.disconnect();
    if (c.isConnected()) {
        var f = x(c),
            g = c.xe;
        c.xe = null;
        if (f.Ua) g = h.K.sf(f), f.I(), f = null;
        else if (c.type == h.Oa) {
            if (!f.M) throw Error("Orphan block does not have an output connection.");
            var k = h.ea.Tu(e, f);
            k && (f.M.connect(k), f = null)
        } else if (c.type == h.Ca) {
            if (!f.R) throw Error("Orphan block does not have a previous connection.");
            for (k = e; k.V;) {
                var l = u(k);
                if (l && !l.Ua) k = l;
                else {
                    Sb(f.R, k.V) && (k.V.connect(f.R), f = null);
                    break
                }
            }
        }
        if (f && (c.disconnect(),
                h.i.$b)) {
            var m = h.i.Db();
            setTimeout(function() {
                f.C && !f.getParent() && (h.i.ga(m), f.M ? f.M.Vm(c) : f.R && f.R.Vm(c), h.i.ga(!1))
            }, h.zn)
        }
        c.xe = g
    }
    var n;
    h.i.isEnabled() && (n = new h.i.Xi(e));
    h.ea.Yy(c, a);
    e.Ki(d);
    n && (n.$g(), h.i.Na(n))
};
b.I = function() {
    if (this.isConnected()) {
        this.xe = null;
        var a = x(this);
        a.Ua ? a.I() : y(a)
    }
};

function C(a) {
    return a.type == h.Oa || a.type == h.Ca
}
b.isConnected = function() {
    return !!this.la
};

function Kb(a, c) {
    if (!c) return h.ea.Cs;
    if (C(a)) var d = a.D,
        e = c.D;
    else e = a.D, d = c.D;
    return d && d == e ? h.ea.As : c.type != h.Ih[a.type] ? h.ea.Ds : d && e && d.C !== e.C ? h.ea.zs : Sb(a, c) ? d.Ua && !e.Ua ? h.ea.Bs : h.ea.jl : h.ea.ys
}

function Lb(a, c) {
    switch (Kb(a, c)) {
        case h.ea.jl:
            break;
        case h.ea.As:
            throw Error("Attempted to connect a block to itself.");
        case h.ea.zs:
            throw Error("Blocks not on same workspace.");
        case h.ea.Ds:
            throw Error("Attempt to connect incompatible types.");
        case h.ea.Cs:
            throw Error("Target connection is null.");
        case h.ea.ys:
            throw Error("Connection checks failed. " + (a + " expected " + a.Qe + ", found " + c.Qe));
        case h.ea.Bs:
            throw Error("Connecting non-shadow to shadow block.");
        default:
            throw Error("Unknown connection failure: this should never happen!");
    }
}
b.Fm = function(a) {
    if (a.D.Kf() || Kb(this, a) != h.ea.jl) return !1;
    switch (a.type) {
        case h.Bd:
            return this.la || -1 != h.Oj.indexOf(a) ? a = !1 : a.la ? (a = x(a), a = a.Kf() ? !(a.R && x(a.R)) : !1) : a = !0, a;
        case h.zd:
            if (a.isConnected() && !x(a).Kf() || this.isConnected()) return !1;
            break;
        case h.Oa:
            if (a.isConnected() && !x(a).Dc() && !x(a).Ua) return !1;
            break;
        case h.Ca:
            if (a.isConnected() && !this.D.V && !x(a).Ua && x(a).V) return !1;
            break;
        default:
            throw Error("Unknown connection type in isConnectionAllowed");
    }
    return -1 != h.Oj.indexOf(a) ? !1 : !0
};
b.Vm = function() {};
b.connect = function(a) {
    if (this.la != a) {
        Lb(this, a);
        var c = h.i.Db();
        c || h.i.ga(!0);
        C(this) ? this.Id(a) : a.Id(this);
        c || h.i.ga(!1)
    }
};
h.ea.Yy = function(a, c) {
    if (!a || !c) throw Error("Cannot connect null connections.");
    a.la = c;
    c.la = a
};
h.ea.FB = function(a, c) {
    for (var d = !1, e = 0; e < a.N.length; e++) {
        var f = a.N[e].connection;
        if (f && f.type == h.Oa && Sb(c.M, f)) {
            if (d) return null;
            d = f
        }
    }
    return d
};
h.ea.Tu = function(a, c) {
    for (var d; d = h.ea.FB(a, c);)
        if (a = x(d), !a || a.Ua) return d;
    return null
};
b = h.ea.prototype;
b.disconnect = function() {
    var a = this.la;
    if (!a) throw Error("Source connection not connected.");
    if (a.la != this) throw Error("Target connection not connected to source connection.");
    if (C(this)) {
        var c = this.D;
        var d = a.D;
        a = this
    } else c = a.D, d = this.D;
    var e = h.i.Db();
    e || h.i.ga(!0);
    this.Wo(c, d);
    a.Hq();
    e || h.i.ga(!1)
};
b.Wo = function(a, c) {
    var d;
    h.i.isEnabled() && (d = new h.i.Xi(c));
    this.la = this.la.la = null;
    c.Ki(null);
    d && (d.$g(), h.i.Na(d))
};
b.Hq = function() {
    var a = this.D,
        c = this.xe;
    if (a.C && c && h.i.$b)
        if (a = h.K.Zh(c, a.C), a.M) this.connect(a.M);
        else if (a.R) this.connect(a.R);
    else throw Error("Child block does not have output or previous statement.");
};

function x(a) {
    return a.isConnected() ? a.la.D : null
}

function Sb(a, c) {
    if (!a.Qe || !c.Qe) return !0;
    for (var d = 0; d < a.Qe.length; d++)
        if (-1 != c.Qe.indexOf(a.Qe[d])) return !0;
    return !1
}
b.mv = function() {
    this.isConnected() && !Sb(this, this.la) && y(C(this) ? x(this) : this.D)
};
b.Gi = function(a) {
    a ? (Array.isArray(a) || (a = [a]), this.Qe = a, this.mv()) : this.Qe = null
};
b.hv = function() {
    return []
};
b.ne = function() {
    for (var a = null, c = this.D, d = c.N, e = 0; e < c.N.length; e++)
        if (d[e].connection === this) {
            a = d[e];
            break
        }
    return a
};
b.toString = function() {
    var a = this.D;
    if (a)
        if (a.M == this) var c = "Output Connection of ";
        else if (a.R == this) c = "Previous Connection of ";
    else if (a.V == this) c = "Next Connection of ";
    else {
        c = null;
        for (var d = 0, e; e = a.N[d]; d++)
            if (e.connection == this) {
                c = e;
                break
            }
        if (c) c = 'Input "' + c.name + '" connection on ';
        else return console.warn("Connection not actually connected to sourceBlock_"), "Orphan Connection"
    } else return "Orphan Connection";
    d = a.type ? '"' + a.type + '" block' : "Block";
    a.id && (d += ' (id="' + a.id + '")');
    return c + d
};
h.qa = {};
h.qa.Wi = {};
h.qa.register = function(a, c) {
    if ("string" != typeof a || "" == a.trim()) throw Error('Error: Invalid extension name "' + a + '"');
    if (h.qa.Wi[a]) throw Error('Error: Extension "' + a + '" is already registered.');
    if ("function" != typeof c) throw Error('Error: Extension "' + a + '" must be a function');
    h.qa.Wi[a] = c
};
h.qa.pH = function(a, c) {
    if (!c || "object" != typeof c) throw Error('Error: Mixin "' + a + '" must be a object');
    h.qa.register(a, function() {
        this.yi(c)
    })
};
h.qa.qH = function(a, c, d, e) {
    var f = 'Error when registering mutator "' + a + '": ';
    h.qa.jt(f, c.Ue, "domToMutation");
    h.qa.jt(f, c.qd, "mutationToDom");
    var g = h.qa.mt(c, f);
    if (d && "function" != typeof d) throw Error('Extension "' + a + '" is not a function');
    h.qa.register(a, function() {
        if (g) {
            if (!h.Dx) throw Error(f + "Missing require for Blockly.Mutator");
            this.Ov(new h.Dx(e))
        }
        this.yi(c);
        d && d.apply(this)
    })
};
h.qa.unregister = function(a) {
    h.qa.Wi[a] ? delete h.qa.Wi[a] : console.warn('No extension mapping for name "' + a + '" found to unregister')
};
h.qa.apply = function(a, c, d) {
    var e = h.qa.Wi[a];
    if ("function" != typeof e) throw Error('Error: Extension "' + a + '" not found.');
    if (d) h.qa.Py(a, c);
    else var f = h.qa.sp(c);
    e.apply(c);
    if (d) h.qa.Ny('Error after applying mutator "' + a + '": ', c);
    else if (!h.qa.QA(f, c)) throw Error('Error when applying extension "' + a + '": mutation properties changed when applying a non-mutator extension.');
};
h.qa.jt = function(a, c, d) {
    if (!c) throw Error(a + 'missing required property "' + d + '"');
    if ("function" != typeof c) throw Error(a + '" required property "' + d + '" must be a function');
};
h.qa.Py = function(a, c) {
    if (h.qa.sp(c).length) throw Error('Error: tried to apply mutation "' + a + '" to a block that already has mutator functions.  Block id: ' + c.id);
};
h.qa.mt = function(a, c) {
    var d = void 0 !== a.Lo,
        e = void 0 !== a.Qo;
    if (d && e) {
        if ("function" != typeof a.Lo) throw Error(c + "compose must be a function.");
        if ("function" != typeof a.Qo) throw Error(c + "decompose must be a function.");
        return !0
    }
    if (d || e) throw Error(c + 'Must have both or neither of "compose" and "decompose"');
    return !1
};
h.qa.Ny = function(a, c) {
    if ("function" != typeof c.Ue) throw Error(a + 'Applying a mutator didn\'t add "domToMutation"');
    if ("function" != typeof c.qd) throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
    h.qa.mt(c, a)
};
h.qa.sp = function(a) {
    var c = [];
    void 0 !== a.Ue && c.push(a.Ue);
    void 0 !== a.qd && c.push(a.qd);
    void 0 !== a.Lo && c.push(a.Lo);
    void 0 !== a.Qo && c.push(a.Qo);
    return c
};
h.qa.QA = function(a, c) {
    c = h.qa.sp(c);
    if (c.length != a.length) return !1;
    for (var d = 0; d < c.length; d++)
        if (a[d] != c[d]) return !1;
    return !0
};
h.qa.CG = function(a, c) {
    var d = [];
    "object" == typeof document && h.g.Gv(function() {
        for (var e in c) h.g.kt(c[e])
    });
    return function() {
        this.type && -1 == d.indexOf(this.type) && (h.qa.Oy(this, a, c), d.push(this.type));
        this.Pd(function() {
            var e = Ma(this, a),
                f = c[e];
            null == f ? -1 == d.indexOf(this.type) && (e = "No tooltip mapping for value " + e + " of field " + a, null != this.type && (e += " of block type " + this.type), console.warn(e + ".")) : f = h.g.Fc(f);
            return f
        }.bind(this))
    }
};
h.qa.Oy = function(a, c, d) {
    var e = ba(a, c);
    if ("function" != typeof e.xi) {
        e = e.getOptions();
        for (var f = 0; f < e.length; ++f) {
            var g = e[f][1];
            null == d[g] && console.warn("No tooltip mapping for value " + g + " of field " + c + " of block type " + a.type)
        }
    }
};
h.qa.DG = function(a, c) {
    "object" == typeof document && h.g.Gv(function() {
        h.g.kt(a)
    });
    return function() {
        this.Pd(function() {
            var d = ba(this, c);
            return h.g.Fc(a).replace("%1", d ? d.Bf() : "")
        }.bind(this))
    }
};
h.qa.yz = function() {
    this.TB = this.Qd;
    this.Pd(function() {
        var a = this.getParent();
        return a && Tb(a) && a.Qd || this.TB
    }.bind(this))
};
h.qa.register("parent_tooltip_when_inline", h.qa.yz);
h.$c = function(a, c, d) {
    this.Sl = null;
    null == a && (a = "");
    h.$c.w.constructor.call(this, a, null, d);
    d || (this.Sl = c || null);
    this.ub = new h.g.Cd(0, h.Ea.Ls)
};
h.g.object.S(h.$c, h.Ea);
h.$c.pa = function(a) {
    var c = h.g.Fc(a.text);
    return new h.$c(c, void 0, a)
};
h.$c.prototype.Wd = !1;
h.$c.prototype.Aj = function(a) {
    h.$c.w.Aj.call(this, a);
    this.Sl = a["class"]
};
h.$c.prototype.$j = function() {
    nb(this);
    this.Vc.setAttribute("y", this.ub.height);
    this.Sl && h.g.m.Ib(this.Vc, this.Sl)
};
h.$c.prototype.gm = function(a) {
    return null === a || void 0 === a ? null : String(a)
};
h.Nc.register("field_label", h.$c);
h.Zr = function(a, c, d, e) {
    if (a != h.He && !c) throw Error("Value inputs and statement inputs must have non-empty name.");
    this.type = a;
    this.name = c;
    this.D = d;
    this.connection = e;
    this.Ma = []
};
b = h.Zr.prototype;
b.align = h.vn;
b.cg = !0;

function I(a, c, d) {
    Ub(a, a.Ma.length, c, d);
    return a
}

function Ub(a, c, d, e) {
    if (0 > c || c > a.Ma.length) throw Error("index " + c + " out of bounds.");
    if (!(d || "" == d && e)) return c;
    "string" == typeof d && (d = new h.$c(d));
    if (d.D) throw Error("Field already bound to a block.");
    d.D = a.D;
    a.D.ca && d.wa();
    d.name = e;
    d.yq && (c = Ub(a, c, d.yq));
    a.Ma.splice(c, 0, d);
    ++c;
    d.Wq && (c = Ub(a, c, d.Wq));
    a.D.ca && (a.D.Ba(), a.D.Cc());
    return c
}
b.isVisible = function() {
    return this.cg
};
b.Eb = function(a) {
    var c = [];
    if (this.cg == a) return c;
    for (var d = (this.cg = a) ? "block" : "none", e = 0, f; f = this.Ma[e]; e++) f.Eb(a);
    if (this.connection) {
        if (a) c = Vb(this.connection);
        else if (e = this.connection, Wb(e, !0), e.la)
            for (e = p(x(e), !1), f = 0; f < e.length; f++) {
                for (var g = e[f], k = g.kd(!0), l = 0; l < k.length; l++) Wb(k[l], !0);
                g = ka(g);
                for (l = 0; l < g.length; l++) g[l].Eb(!1)
            }
        if (e = x(this.connection)) e.Y().style.display = d, a || (e.ca = !1)
    }
    return c
};
b.mk = function() {
    for (var a = 0, c; c = this.Ma[a]; a++) c.mk()
};
b.Gi = function(a) {
    if (!this.connection) throw Error("This input does not have a connection.");
    this.connection.Gi(a)
};
b.wa = function() {
    if (this.D.C.ca)
        for (var a = 0; a < this.Ma.length; a++) this.Ma[a].wa()
};
b.I = function() {
    for (var a = 0, c; c = this.Ma[a]; a++) c.I();
    this.connection && this.connection.I();
    this.D = null
};
h.g.yb = {};
h.g.yb.parse = function(a) {
    a = String(a).toLowerCase().trim();
    var c = h.g.yb.names[a];
    if (c) return c;
    c = "#" == a[0] ? a : "#" + a;
    if (/^#[0-9a-f]{6}$/.test(c)) return c;
    if (/^#[0-9a-f]{3}$/.test(c)) return ["#", c[1], c[1], c[2], c[2], c[3], c[3]].join("");
    var d = a.match(/^(?:rgb)?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
    return d && (a = Number(d[1]), c = Number(d[2]), d = Number(d[3]), 0 <= a && 256 > a && 0 <= c && 256 > c && 0 <= d && 256 > d) ? h.g.yb.Iq(a, c, d) : null
};
h.g.yb.Iq = function(a, c, d) {
    c = a << 16 | c << 8 | d;
    return 16 > a ? "#" + (16777216 | c).toString(16).substr(1) : "#" + c.toString(16)
};
h.g.yb.Hu = function(a) {
    a = parseInt(a.substr(1), 16);
    return [a >> 16, a >> 8 & 255, a & 255]
};
h.g.yb.kA = function(a) {
    var c = h.gx,
        d = 255 * h.hx,
        e = 0,
        f = 0,
        g = 0;
    if (0 == c) g = f = e = d;
    else {
        var k = Math.floor(a / 60),
            l = a / 60 - k;
        a = d * (1 - c);
        var m = d * (1 - c * l);
        c = d * (1 - c * (1 - l));
        switch (k) {
            case 1:
                e = m;
                f = d;
                g = a;
                break;
            case 2:
                e = a;
                f = d;
                g = c;
                break;
            case 3:
                e = a;
                f = m;
                g = d;
                break;
            case 4:
                e = c;
                f = a;
                g = d;
                break;
            case 5:
                e = d;
                f = a;
                g = m;
                break;
            case 6:
            case 0:
                e = d, f = c, g = a
        }
    }
    return h.g.yb.Iq(Math.floor(e), Math.floor(f), Math.floor(g))
};
h.g.yb.zo = function(a, c, d) {
    a = h.g.yb.Hu(h.g.yb.parse(a));
    c = h.g.yb.Hu(h.g.yb.parse(c));
    return h.g.yb.Iq(Math.round(c[0] + d * (a[0] - c[0])), Math.round(c[1] + d * (a[1] - c[1])), Math.round(c[2] + d * (a[2] - c[2])))
};
h.g.yb.names = {
    aqua: "#00ffff",
    black: "#000000",
    blue: "#0000ff",
    fuchsia: "#ff00ff",
    gray: "#808080",
    green: "#008000",
    lime: "#00ff00",
    maroon: "#800000",
    navy: "#000080",
    olive: "#808000",
    purple: "#800080",
    red: "#ff0000",
    silver: "#c0c0c0",
    teal: "#008080",
    white: "#ffffff",
    yellow: "#ffff00"
};
h.hl = function(a, c, d) {
    if (h.Generator && "undefined" != typeof h.Generator.prototype[c]) throw Error('Block prototypeName "' + c + '" conflicts with Blockly.Generator members.');
    this.id = d && !v(a, d) ? d : h.g.Ve();
    a.Ao[this.id] = this;
    this.R = this.V = this.M = null;
    this.N = [];
    this.Ze = void 0;
    this.disabled = !1;
    this.Qd = "";
    this.contextMenu = !0;
    this.se = null;
    this.Re = [];
    this.St = this.fv = this.Gt = !0;
    this.Se = this.Ua = !1;
    this.zj = null;
    this.Hd = {
        text: null,
        tv: !1,
        size: new h.g.Cd(160, 80)
    };
    this.jw = new h.g.O(0, 0);
    this.C = a;
    this.Rc = a.qe;
    this.H = a.H;
    this.gk = !1;
    this.Xe = void 0;
    if (c) {
        this.type = c;
        d = h.Hb[c];
        if (!d || "object" != typeof d) throw TypeError("Unknown block type: " + c);
        h.g.object.yi(this, d)
    }
    a.Ui.push(this);
    a.ff[this.type] || (a.ff[this.type] = []);
    a.ff[this.type].push(this);
    "function" == typeof this.wa && this.wa();
    this.uA = this.Ze;
    if (h.i.isEnabled()) {
        (a = h.i.Db()) || h.i.ga(!0);
        try {
            h.i.Na(new h.i.il(this))
        } finally {
            a || h.i.ga(!1)
        }
    }
    if ("function" == typeof this.onchange) {
        if ((a = this.onchange) && "function" != typeof a) throw Error("onchange must be a function.");
        this.rk &&
            Va(this.C, this.rk);
        if (this.onchange = a) this.rk = a.bind(this), Ua(this.C, this.rk)
    }
};
b = h.hl.prototype;
b.data = null;
b.wg = "#000000";
b.qt = null;
b.rt = null;
b.I = function(a) {
    if (this.C) {
        this.rk && Va(this.C, this.rk);
        h.$e && h.navigation.gv(this);
        y(this, a);
        h.i.isEnabled() && h.i.Na(new h.i.zw(this));
        h.i.disable();
        try {
            if (this.C) {
                Oa(this.C, this);
                var c = this.C;
                c.ff[this.type].splice(c.ff[this.type].indexOf(this), 1);
                c.ff[this.type].length || delete c.ff[this.type];
                delete this.C.Ao[this.id];
                this.C = null
            }
            h.selected == this && (h.selected = null);
            for (var d = this.Re.length - 1; 0 <= d; d--) this.Re[d].I(!1);
            d = 0;
            for (var e; e = this.N[d]; d++) e.I();
            this.N.length = 0;
            var f = this.kd(!0);
            d = 0;
            for (var g; g =
                f[d]; d++) g.I()
        } finally {
            h.i.enable()
        }
    }
};

function y(a, c) {
    if (a.M) {
        var d = null;
        a.M.isConnected() && (d = a.M.la, a.M.disconnect());
        if (d && c) {
            a: {
                c = null;
                for (var e = 0; e < a.N.length; e++) {
                    var f = a.N[e].connection;
                    if (f && f.type == h.Oa && f.la) {
                        if (c) {
                            a = null;
                            break a
                        }
                        c = f
                    }
                }
                a = c
            }
            a && a.isConnected() && !x(a).Ua && (a = a.la, a.disconnect(), Sb(a, d) ? d.connect(a) : a.Vm(d))
        }
    } else a.R && (d = null, a.R.isConnected() && (d = a.R.la, a.R.disconnect()), e = u(a), c && e && !e.Ua && (a = a.V.la, a.disconnect(), d && Sb(d, a) && d.connect(a)))
}
b.kd = function() {
    var a = [];
    this.M && a.push(this.M);
    this.R && a.push(this.R);
    this.V && a.push(this.V);
    for (var c = 0, d; d = this.N[c]; c++) d.connection && a.push(d.connection);
    return a
};
b.Cc = function() {
    console.warn("Not expected to reach Block.bumpNeighbours function. BlockSvg.bumpNeighbours was expected to be called instead.")
};
b.getParent = function() {
    return this.se
};

function Xb(a) {
    do {
        var c = a;
        a = a.getParent();
        if (!a) return null
    } while (u(a) == c);
    return a
}

function u(a) {
    return a.V && x(a.V)
}

function D(a) {
    var c = a;
    do a = c, c = a.se; while (c);
    return a
}

function Qa(a, c) {
    if (!c) return a.Re;
    c = [];
    for (var d = 0, e; e = a.N[d]; d++) e.connection && (e = x(e.connection)) && c.push(e);
    (a = u(a)) && c.push(a);
    return c
}
b.Ki = function(a) {
    if (a != this.se) {
        if (this.se) {
            h.g.Rl(this.se.Re, this);
            if (this.R && this.R.isConnected()) throw Error("Still connected to previous block.");
            if (this.M && this.M.isConnected()) throw Error("Still connected to parent block.");
            this.se = null
        } else Oa(this.C, this);
        (this.se = a) ? a.Re.push(this): this.C.Ui.push(this)
    }
};

function p(a, c) {
    var d = [a];
    a = Qa(a, c);
    for (var e, f = 0; e = a[f]; f++) d.push.apply(d, p(e, c));
    return d
}
b.Pc = function() {
    return this.Gt && !this.Ua && !(this.C && this.C.options.readOnly)
};
b.Dc = function() {
    return this.fv && !this.Ua && !(this.C && this.C.options.readOnly)
};
b.Nq = function(a) {
    this.fv = a
};
b.Qq = function(a) {
    this.Ua = a
};
b.Kf = function() {
    return this.gk
};
b.Lv = function(a) {
    this.gk = a
};
b.Qc = function() {
    return this.St && !(this.C && this.C.options.readOnly)
};
b.Mq = function(a) {
    this.St = a;
    a = 0;
    for (var c; c = this.N[a]; a++)
        for (var d = 0, e; e = c.Ma[d]; d++) e.Xk()
};
b.Pd = function(a) {
    this.Qd = a
};

function Nb(a) {
    var c = a.qt;
    return c ? c : h.g.yb.zo("#fff", a.wg, .6)
}
b.ud = function(a) {
    var c = "string" == typeof a ? h.g.Fc(a) : a,
        d = Number(c);
    if (!isNaN(d) && 0 <= d && 360 >= d) this.wg = h.lA(d);
    else if (d = h.g.yb.parse(c)) this.wg = d;
    else throw d = 'Invalid colour: "' + c + '"', a != c && (d += ' (from "' + a + '")'), Error(d);
};

function ba(a, c) {
    for (var d = 0, e; e = a.N[d]; d++)
        for (var f = 0, g; g = e.Ma[f]; f++)
            if (g.name == c) return g;
    return null
}

function Na(a) {
    for (var c = 0, d; d = a.N[c]; c++)
        for (var e = 0; d.Ma[e]; e++);
    return []
}

function Ma(a, c) {
    return (a = ba(a, c)) ? a.getValue() : null
}
b.fh = function(a, c) {
    if (a) {
        void 0 === c && (c = null);
        if (!this.R) {
            if (this.M) throw Error("Remove output connection prior to adding previous connection.");
            this.R = this.lk(h.Bd)
        }
        this.R.Gi(c)
    } else if (this.R) {
        if (this.R.isConnected()) throw Error("Must disconnect previous statement before removing connection.");
        this.R.I();
        this.R = null
    }
};
b.Ji = function(a, c) {
    if (a) void 0 === c && (c = null), this.V || (this.V = this.lk(h.Ca)), this.V.Gi(c);
    else if (this.V) {
        if (this.V.isConnected()) throw Error("Must disconnect next statement before removing connection.");
        this.V.I();
        this.V = null
    }
};
b.Oq = function(a, c) {
    if (a) {
        void 0 === c && (c = null);
        if (!this.M) {
            if (this.R) throw Error("Remove previous connection prior to adding output connection.");
            this.M = this.lk(h.zd)
        }
        this.M.Gi(c)
    } else if (this.M) {
        if (this.M.isConnected()) throw Error("Must disconnect output value before removing connection.");
        this.M.I();
        this.M = null
    }
};
b.Ii = function(a) {
    this.Ze != a && (h.i.Na(new h.i.uh(this, "inline", null, this.Ze, a)), this.Ze = a)
};

function Tb(a) {
    if (void 0 != a.Ze) return a.Ze;
    for (var c = 1; c < a.N.length; c++)
        if (a.N[c - 1].type == h.He && a.N[c].type == h.He) return !1;
    for (c = 1; c < a.N.length; c++)
        if (a.N[c - 1].type == h.Oa && a.N[c].type == h.He) return !0;
    return !1
}
b.isEnabled = function() {
    return !this.disabled
};
b.we = function(a) {
    this.isEnabled() != a && (h.i.Na(new h.i.uh(this, "disabled", null, this.disabled, !a)), this.disabled = !a)
};

function Yb(a) {
    for (a = Xb(a); a;) {
        if (a.disabled) return !0;
        a = Xb(a)
    }
    return !1
}
b.isCollapsed = function() {
    return this.Se
};
b.Zf = function(a) {
    this.Se != a && (h.i.Na(new h.i.uh(this, "collapsed", null, this.Se, a)), this.Se = a)
};
b.toString = function(a, c) {
    var d = [],
        e = c || "?";
    if (this.Se) d.push(da(this, "_TEMP_COLLAPSED_INPUT").Ma[0].Bf());
    else
        for (var f = 0, g; g = this.N[f]; f++) {
            for (var k = 0, l; l = g.Ma[k]; k++) d.push(l.Bf());
            g.connection && ((g = x(g.connection)) ? d.push(g.toString(void 0, c)) : d.push(e))
        }
    d = d.join(" ").trim() || "???";
    a && d.length > a && (d = d.substring(0, a - 3) + "...");
    return d
};

function Zb(a, c) {
    return a.Ne(h.He, c || "")
}

function $b(a, c) {
    var d = c.type ? 'Block "' + c.type + '": ' : "";
    if (c.output && c.previousStatement) throw Error(d + "Must not have both an output and a previousStatement.");
    c.style && c.style.Xe && (a.Xe = c.style.Xe, c.style = null);
    if (c.style && c.colour) throw Error(d + "Must not have both a colour and a style.");
    if (c.style) {
        var e = c.style;
        try {
            var f = a.C.zp().Gy[e];
            if (f) a.qt = f.colourSecondary, a.rt = f.colourTertiary, a.Xe = f.Xe, a.ud(f.colourPrimary);
            else throw Error("Invalid style name: " + e);
        } catch (B) {
            console.warn(d + "Style does not exist: ",
                e)
        }
    } else if ("colour" in c)
        if (void 0 === c.colour) console.warn(d + "Undefined colour value.");
        else {
            e = c.colour;
            try {
                a.ud(e)
            } catch (B) {
                console.warn(d + "Illegal colour value: ", e)
            }
        }
    for (e = 0; void 0 !== c["message" + e];) {
        f = a;
        for (var g = c["args" + e] || [], k = c["lastDummyAlign" + e], l = h.g.RB(c["message" + e]), m = [], n = 0, q = [], r = 0; r < l.length; r++) {
            var t = l[r];
            if ("number" == typeof t) {
                if (0 >= t || t > g.length) throw Error('Block "' + f.type + '": Message index %' + t + " out of range.");
                if (m[t]) throw Error('Block "' + f.type + '": Message index %' + t + " duplicated.");
                m[t] = !0;
                n++;
                q.push(g[t - 1])
            } else(t = t.trim()) && q.push(t)
        }
        if (n != g.length) throw Error('Block "' + f.type + '": Message does not reference all ' + g.length + " arg(s).");
        q.length && ("string" == typeof q[q.length - 1] || h.g.Da.startsWith(q[q.length - 1].type, "field_")) && (r = {
            type: "input_dummy"
        }, k && (r.align = k), q.push(r));
        k = {
            LEFT: h.vn,
            RIGHT: h.pr,
            CENTRE: h.nr
        };
        g = [];
        for (r = 0; r < q.length; r++)
            if (m = q[r], "string" == typeof m) g.push([m, void 0]);
            else {
                l = n = null;
                do
                    if (t = !1, "string" == typeof m) n = new h.$c(m);
                    else switch (m.type) {
                        case "input_value":
                            l =
                                f.Ne(h.Oa, m.name);
                            break;
                        case "input_statement":
                            l = f.Ne(h.Ca, m.name);
                            break;
                        case "input_dummy":
                            l = Zb(f, m.name);
                            break;
                        default:
                            n = h.Nc.pa(m), !n && m.alt && (m = m.alt, t = !0)
                    }
                while (t);
                if (n) g.push([n, m.name]);
                else if (l) {
                    m.check && l.Gi(m.check);
                    m.align && (n = l, n.align = k[m.align], n.D.ca && n.D.Ba());
                    for (m = 0; m < g.length; m++) I(l, g[m][0], g[m][1]);
                    g.length = 0
                }
            }
        e++
    }
    void 0 !== c.inputsInline && a.Ii(c.inputsInline);
    void 0 !== c.output && a.Oq(!0, c.output);
    void 0 !== c.previousStatement && a.fh(!0, c.previousStatement);
    void 0 !== c.nextStatement &&
        a.Ji(!0, c.nextStatement);
    void 0 !== c.tooltip && (e = c.tooltip, e = h.g.Fc(e), a.Pd(e));
    void 0 !== c.enableContextMenu && (e = c.enableContextMenu, a.contextMenu = !!e);
    void 0 !== c.helpUrl && (e = c.helpUrl, e = h.g.Fc(e), a.ii = e);
    "string" == typeof c.extensions && (console.warn(d + "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" + c.type + "' block."), c.extensions = [c.extensions]);
    void 0 !== c.mutator && h.qa.apply(c.mutator, a, !0);
    if (Array.isArray(c.extensions))
        for (c = c.extensions, d = 0; d < c.length; ++d) h.qa.apply(c[d],
            a, !1)
}
b.yi = function(a, c) {
    if (void 0 !== c && "boolean" != typeof c) throw Error("opt_disableCheck must be a boolean if provided");
    if (!c) {
        c = [];
        for (var d in a) void 0 !== this[d] && c.push(d);
        if (c.length) throw Error("Mixin will overwrite block members: " + JSON.stringify(c));
    }
    h.g.object.yi(this, a)
};
b.Ne = function(a, c) {
    var d = null;
    if (a == h.Oa || a == h.Ca) d = this.lk(a);
    a = new h.Zr(a, c, this, d);
    this.N.push(a);
    return a
};
b.Dq = function(a, c) {
    for (var d = 0, e; e = this.N[d]; d++)
        if (e.name == a) {
            e.I();
            this.N.splice(d, 1);
            return
        }
    if (!c) throw Error("Input not found: " + a);
};

function da(a, c) {
    for (var d = 0, e; e = a.N[d]; d++)
        if (e.name == c) return e;
    return null
}

function ac(a, c) {
    return (a = da(a, c)) && a.connection && x(a.connection)
}
b.Hi = function(a) {
    this.Hd.text != a && (h.i.Na(new h.i.uh(this, "comment", null, this.Hd.text, a)), this.zj = this.Hd.text = a)
};
b.Gk = function() {};
b.Ov = function() {};
b.Ha = function() {
    return this.jw
};
b.moveBy = function(a, c) {
    if (this.se) throw Error("Block has parent.");
    var d = new h.i.Xi(this);
    this.jw.translate(a, c);
    d.$g();
    h.i.Na(d)
};
b.lk = function(a) {
    return new h.ea(this, a)
};
h.j = {};
h.j.Ei = {};
h.j.Zk = !1;
h.j.register = function(a, c) {
    if (h.j.Ei[a]) throw Error("Renderer has already been registered.");
    h.j.Ei[a] = c
};
h.j.unregister = function(a) {
    h.j.Ei[a] ? delete h.j.Ei[a] : console.warn('No renderer mapping for name "' + a + '" found to unregister')
};
h.j.DH = function() {
    h.j.Zk = !0
};
h.j.EH = function() {
    h.j.Zk = !1
};
h.j.wa = function(a) {
    function c() {
        c.w.constructor.call(this)
    }
    if (!h.j.Ei[a]) throw Error("Renderer not registered: ", a);
    h.g.object.S(c, h.j.Ei[a]);
    a = new c;
    a.wa();
    return a
};
h.hg = function() {
    h.hg.w.constructor.call(this)
};
h.g.object.S(h.hg, h.rl);
h.hg.prototype.next = function() {
    var a = this.mb;
    if (!a) return null;
    (a = a.next()) && E(this, a);
    return a
};
h.hg.prototype.Yj = function() {
    return null
};
h.hg.prototype.ue = function() {
    var a = this.mb;
    if (!a) return null;
    (a = a.ue()) && E(this, a);
    return a
};
h.hg.prototype.tk = function() {
    return null
};
h.j.HD = function() {};
h.j.ng = function(a) {
    this.kh = a;
    this.Pi = h.g.m.L("path", {
        "class": "blocklyPath"
    }, this.kh);
    this.Qk = h.g.m.L("path", {
        "class": "blocklyPathLight"
    }, this.kh);
    this.Ok = h.g.m.L("path", {
        "class": "blocklyPathDark",
        transform: "translate(1,1)"
    }, this.kh)
};
h.j.ng.prototype.Pq = function(a) {
    this.Pi.setAttribute("d", a);
    this.Qk.style.display = "none";
    this.Ok.style.display = "none"
};
h.j.ng.prototype.mp = function() {
    this.Pi.setAttribute("transform", "scale(-1 1)")
};
h.g.nn = {};
h.g.nn.We = function(a) {
    a = a.$;
    var c = h.g.style.We(a);
    c.height = a.scrollHeight;
    return c
};
h.g.nn.vy = function(a, c, d) {
    c.left += d.width;
    c.right += d.width;
    a.left += d.width;
    a.right += d.width
};
h.ua = {};
h.ua.am = null;
h.ua.Vt = null;
h.ua.show = function(a, c, d) {
    h.W.show(h.ua, d, null);
    if (c.length) {
        var e = h.ua.lB(c, d);
        h.ua.te(e, a, d);
        setTimeout(function() {
            e.$.focus()
        }, 1);
        h.ua.am = null
    } else h.ua.va()
};
h.ua.lB = function(a, c) {
    var d = new h.kg;
    tb(d, c);
    for (var e = 0, f; f = a[e]; e++) {
        var g = new h.zl(f.text);
        tb(g, c);
        sb(d, g);
        g.we(f.enabled);
        f.enabled && Fb(g, function() {
            h.ua.va();
            this.Jb()
        }, f)
    }
    return d
};
h.ua.te = function(a, c, d) {
    var e = h.g.Zz();
    c = {
        top: c.clientY + e.top,
        bottom: c.clientY + e.top,
        left: c.clientX + e.left,
        right: c.clientX + e.left
    };
    h.ua.ez(a);
    var f = h.g.nn.We(a);
    d && h.g.nn.vy(e, c, f);
    h.W.mB(e, c, f, d);
    a.$.focus()
};
h.ua.ez = function(a) {
    a.Ba(h.W.ya);
    var c = a.$;
    h.g.m.Ib(c, "blocklyContextMenu");
    h.ra(c, "contextmenu", null, h.g.VA);
    a.focus()
};
h.ua.va = function() {
    h.W.Wj(h.ua);
    h.ua.am = null;
    h.ua.Vt && h.fb(h.ua.Vt)
};
h.ua.FG = function(a, c) {
    return function() {
        h.i.disable();
        try {
            var d = h.K.Zh(c, a.C),
                e = a.Ha();
            e.x = a.H ? e.x - h.ec : e.x + h.ec;
            e.y += 2 * h.ec;
            d.moveBy(e.x, e.y)
        } finally {
            h.i.enable()
        }
        h.i.isEnabled() && !d.Ua && h.i.Na(new h.i.il(d));
        d.select()
    }
};
h.ua.Dy = function(a) {
    var c = p(a, !1).length,
        d = u(a);
    d && (c -= p(d, !1).length);
    return {
        text: 1 == c ? h.h.DELETE_BLOCK : h.h.DELETE_X_BLOCKS.replace("%1", String(c)),
        enabled: !0,
        Jb: function() {
            h.i.ga(!0);
            a.I(!0, !0);
            h.i.ga(!1)
        }
    }
};
h.ua.Fy = function(a) {
    return {
        enabled: !("function" == typeof a.ii ? !a.ii() : !a.ii),
        text: h.h.HELP,
        Jb: function() {
            var c = "function" == typeof a.ii ? a.ii() : a.ii;
            c && window.open(c)
        }
    }
};
h.ua.Ey = function(a) {
    var c = Ta(a.C) ? Sa(a.C, h.g.pp(a, !0)) : !0;
    return {
        text: h.h.DUPLICATE_BLOCK,
        enabled: c,
        Jb: function() {
            h.Rt(a)
        }
    }
};
h.ua.Cy = function(a) {
    var c = {
        enabled: !h.g.userAgent.hf
    };
    a.zj ? (c.text = h.h.REMOVE_COMMENT, c.Jb = function() {
        a.Hi(null)
    }) : (c.text = h.h.ADD_COMMENT, c.Jb = function() {
        a.Hi("")
    });
    return c
};
h.ua.JG = function(a) {
    return {
        text: h.h.CF,
        enabled: !0,
        Jb: function() {
            h.i.ga(!0);
            a.I(!0, !0);
            h.i.ga(!1)
        }
    }
};
h.ua.KG = function(a) {
    return {
        text: h.h.SC,
        enabled: !0,
        Jb: function() {
            h.Rt(a)
        }
    }
};
h.ua.JH = function(a, c) {
    if (!h.Oh) throw Error("Missing require for Blockly.WorkspaceCommentSvg");
    var d = {
        enabled: !h.g.userAgent.hf
    };
    d.text = h.h.bC;
    d.Jb = function() {
        var e = new h.Oh(a, h.h.xG, h.Oh.Lw, h.Oh.Lw),
            f = aa(a).getBoundingClientRect();
        f = new h.g.O(c.clientX - f.left, c.clientY - f.top);
        var g = h.g.Sj(a.$a);
        f = h.g.O.Mj(f, g);
        f.scale(1 / a.scale);
        e.moveBy(f.x, f.y);
        a.ca && (e.mi(), e.Ba(), e.select())
    };
    return d
};
h.Ke = function(a, c) {
    h.Ke.w.constructor.call(this, a, c);
    this.ke = a.C.Zl[c];
    this.Dt = a.C.Zl[h.Ih[c]];
    this.Wg = new h.g.O(0, 0);
    this.Gf = !1;
    this.Ju = !this.ke
};
h.g.object.S(h.Ke, h.ea);
b = h.Ke.prototype;
b.I = function() {
    h.Ke.w.I.call(this);
    this.Gf && bc(this.ke, this)
};

function cc(a, c) {
    var d = a.qb - c.qb;
    a = a.Ka - c.Ka;
    return Math.sqrt(d * d + a * a)
}

function Mb(a, c) {
    if (!a.D.C.yc()) {
        var d = D(a.D);
        if (!d.Rc) {
            var e = !1;
            if (!d.Dc()) {
                d = D(c.D);
                if (!d.Dc()) return;
                c = a;
                e = !0
            }
            var f = h.selected == d;
            f || d.Pl();
            var g = c.qb + h.ec + Math.floor(Math.random() * h.An) - a.qb,
                k = c.Ka + h.ec + Math.floor(Math.random() * h.An) - a.Ka;
            e && (k = -k);
            d.H && (g = c.qb - h.ec - Math.floor(Math.random() * h.An) - a.qb);
            d.moveBy(g, k);
            f || d.Ak()
        }
    }
}
b.moveTo = function(a, c) {
    this.Gf && bc(this.ke, this);
    this.qb = a;
    this.Ka = c;
    this.Ju || dc(this.ke, this)
};
b.moveBy = function(a, c) {
    this.moveTo(this.qb + a, this.Ka + c)
};

function ec(a, c) {
    a.moveTo(c.x + a.Wg.x, c.y + a.Wg.y)
}

function fc(a, c, d) {
    a.Wg.x = c;
    a.Wg.y = d
}

function gc(a) {
    var c = a.la.qb - a.qb,
        d = a.la.Ka - a.Ka;
    if (0 != c || 0 != d) {
        a = x(a);
        var e = a.Y();
        if (!e) throw Error("block is not rendered.");
        e = h.g.ld(e);
        a.Y().setAttribute("transform", "translate(" + (e.x - c) + "," + (e.y - d) + ")");
        sa(a, -c, -d)
    }
}
b.closest = function(a, c) {
    var d = this.Dt;
    if (d.zb.length) {
        var e = this.Ka,
            f = this.qb;
        this.qb = f + c.x;
        this.Ka = e + c.y;
        var g = hc(d, this);
        c = null;
        for (var k = a, l, m = g - 1; 0 <= m && Math.abs(d.zb[m].Ka - this.Ka) <= a;) l = d.zb[m], this.Fm(l, k) && (c = l, k = cc(l, this)), m--;
        for (; g < d.zb.length && Math.abs(d.zb[g].Ka - this.Ka) <= a;) l = d.zb[g], this.Fm(l, k) && (c = l, k = cc(l, this)), g++;
        this.qb = f;
        this.Ka = e;
        a = {
            connection: c,
            dn: k
        }
    } else a = {
        connection: null,
        dn: a
    };
    return a
};
b.zm = function() {
    var a = this.D.C.cf.v;
    a = this.type == h.Oa || this.type == h.zd ? h.g.u.moveBy(0, -5) + h.g.u.T("v", 5) + a.mg.sd + h.g.u.T("v", 5) : h.g.u.moveBy(-5, 0) + h.g.u.T("h", 5) + a.Gh.Vf + h.g.u.T("h", 5);
    var c = this.D.Ha();
    h.ea.Ku = h.g.m.L("path", {
        "class": "blocklyHighlightedConnectionPath",
        d: a,
        transform: "translate(" + (this.qb - c.x) + "," + (this.Ka - c.y) + ")" + (this.D.H ? " scale(-1 1)" : "")
    }, this.D.Y())
};

function Vb(a) {
    Wb(a, !1);
    var c = [];
    if (a.type != h.Oa && a.type != h.Ca) return c;
    if (a = x(a)) {
        if (a.isCollapsed()) {
            var d = [];
            a.M && d.push(a.M);
            a.V && d.push(a.V);
            a.R && d.push(a.R)
        } else d = a.kd(!0);
        for (var e = 0; e < d.length; e++) c.push.apply(c, Vb(d[e]));
        c.length || (c[0] = a)
    }
    return c
}

function Wb(a, c) {
    (a.Ju = c) && a.Gf ? bc(a.ke, a) : c || a.Gf || dc(a.ke, a)
}
b.Fm = function(a, c) {
    return cc(this, a) > c ? !1 : h.Ke.w.Fm.call(this, a)
};
b.Vm = function(a) {
    Mb(this, a)
};
b.Wo = function(a, c) {
    h.Ke.w.Wo.call(this, a, c);
    a.ca && a.Ba();
    c.ca && (Pb(c), c.Ba())
};
b.Hq = function() {
    var a = this.D,
        c = this.xe;
    if (a.C && c && h.i.$b) {
        h.Ke.w.Hq.call(this);
        c = x(this);
        if (!c) throw Error("Couldn't respawn the shadow block that should exist here.");
        c.mi();
        c.Ba(!1);
        a.ca && a.Ba()
    }
};
b.hv = function(a) {
    return ic(this.Dt, this, a)
};
b.Id = function(a) {
    h.Ke.w.Id.call(this, a);
    var c = this.D;
    a = a.D;
    c.ca && Pb(c);
    a.ca && Pb(a);
    c.ca && a.ca && (this.type == h.Ca || this.type == h.Bd ? a.Ba() : c.Ba())
};
b.mv = function() {
    this.isConnected() && !Sb(this, this.la) && (y(C(this) ? x(this) : this.D), this.D.Cc())
};
h.Je = function(a) {
    this.ka = a
};
b = h.Je.prototype;
b.ot = !0;
b.Gl = 17;
b.ug = null;
b.Am = null;

function jc(a) {
    if (!a.pe) {
        a.pe = h.g.m.L("g", {
            "class": "blocklyIconGroup"
        }, null);
        a.ka.Rc && h.g.m.Ib(a.pe, "blocklyIconGroupReadonly");
        var c = a.pe;
        h.g.m.L("path", {
            "class": "blocklyIconShape",
            d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z"
        }, c);
        h.g.m.L("path", {
            "class": "blocklyIconSymbol",
            d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z"
        }, c);
        h.g.m.L("rect", {
            "class": "blocklyIconSymbol",
            x: "7",
            y: "11",
            height: "2",
            width: "2"
        }, c);
        a.ka.Y().appendChild(a.pe);
        h.ra(a.pe, "mouseup", a, a.mA);
        a.Xk()
    }
}
b.I = function() {
    h.g.m.removeNode(this.pe);
    this.pe = null;
    this.Eb(!1);
    this.ka = null
};
b.Xk = function() {};
b.isVisible = function() {
    return !!this.ug
};
b.mA = function(a) {
    this.ka.C.yc() || this.ka.Rc || h.g.ui(a) || this.Eb(!this.isVisible())
};
b.Ae = function() {
    this.isVisible() && this.ug.ud(this.ka.wg)
};

function na(a, c) {
    a.Am = c;
    a.isVisible() && (a = a.ug, a.xb = c, a.Eq && Wa(a))
}

function kc(a) {
    var c = a.ka.Ha(),
        d = h.g.ld(a.pe);
    c = new h.g.O(c.x + d.x + a.Gl / 2, c.y + d.y + a.Gl / 2);
    h.g.O.me(a.Am, c) || na(a, c)
};
h.ee = function(a) {
    h.ee.w.constructor.call(this, a);
    jc(this);
    this.Si = {}
};
h.g.object.S(h.ee, h.Je);
h.ee.prototype.ot = !1;
h.ee.OB = function(a) {
    var c = h.g.m.L("text", {
        "class": "blocklyText blocklyBubbleText",
        y: h.oa.Td
    }, null);
    a = a.split("\n");
    for (var d = 0; d < a.length; d++) {
        var e = h.g.m.L("tspan", {
                dy: "1em",
                x: h.oa.Td
            }, c),
            f = document.createTextNode(a[d]);
        e.appendChild(f)
    }
    return c
};
h.ee.prototype.Eb = function(a) {
    if (a != this.isVisible())
        if (h.i.Na(new h.i.bd(this.ka, "warningOpen", !a, a)), a) {
            this.Ym = h.ee.OB(this.Bf());
            a = this.ug = new h.oa(this.ka.C, this.Ym, this.ka.vd, this.Am, null, null);
            a.Lc.dataset && (a.Lc.dataset.blockId = this.ka.id);
            if (this.ka.H) {
                a = this.Ym.getBBox().width;
                for (var c = 0, d; d = this.Ym.childNodes[c]; c++) d.setAttribute("text-anchor", "end"), d.setAttribute("x", a + h.oa.Td)
            }
            this.Ae()
        } else this.ug.I(), this.Ym = this.ug = null
};
h.ee.prototype.gn = function(a, c) {
    this.Si[c] != a && (a ? this.Si[c] = a : delete this.Si[c], this.isVisible() && (this.Eb(!1), this.Eb(!0)))
};
h.ee.prototype.Bf = function() {
    var a = [],
        c;
    for (c in this.Si) a.push(this.Si[c]);
    return a.join("\n")
};
h.ee.prototype.I = function() {
    this.ka.cc = null;
    h.Je.prototype.I.call(this)
};
h.ma = function(a, c, d) {
    this.J = h.g.m.L("g", {}, null);
    this.J.Tk = "";
    this.Zg = a.cf.Zu(this.J);
    this.Pk = this.Zg.Ok || null;
    this.vd = this.Zg.Pi || null;
    this.jh = this.Zg.Qk || null;
    this.vd.Qd = this;
    this.ca = !1;
    this.$k = h.g.Mg() && !!a.Kc;
    h.F.Rh(this.vd);
    h.ma.w.constructor.call(this, a, c, d);
    this.J.dataset && (this.J.dataset.id = this.id);
    this.Yb = null
};
h.g.object.S(h.ma, h.hl);
h.ma.prototype.height = 0;
h.ma.prototype.width = 0;
h.ma.prototype.Hc = null;
h.ma.FD = -1;
h.ma.Bn = "TEMP_COLLAPSED_WARNING_";
h.ma.Ox = 10;
h.ma.hs = 25;
h.ma.rf = 8;
h.ma.Le = !1;
b = h.ma.prototype;
b.mi = function() {
    if (!this.C.ca) throw TypeError("Workspace is headless.");
    for (var a = 0, c; c = this.N[a]; a++) c.wa();
    c = ka(this);
    for (a = 0; a < c.length; a++) jc(c[a]);
    this.Ae();
    lc(this);
    this.C.options.readOnly || this.xz || h.ra(this.Y(), "mousedown", this, this.Sf);
    this.xz = !0;
    this.Y().parentNode || this.C.$a.appendChild(this.Y())
};
b.select = function() {
    if (this.Ua && this.getParent()) this.getParent().select();
    else if (h.selected != this) {
        var a = null;
        if (h.selected) {
            a = h.selected.id;
            h.i.disable();
            try {
                cb(h.selected)
            } finally {
                h.i.enable()
            }
        }
        a = new h.i.bd(null, "selected", a, this.id);
        a.Ub = this.C.id;
        h.i.Na(a);
        h.selected = this;
        this.Pl()
    }
};

function cb(a) {
    if (h.selected == a) {
        var c = new h.i.bd(null, "selected", a.id, null);
        c.Ub = a.C.id;
        h.i.Na(c);
        h.selected = null;
        a.Ak()
    }
}
b.Qf = null;
b.zj = null;
b.fe = null;
b.cc = null;

function ka(a) {
    var c = [];
    a.Qf && c.push(a.Qf);
    a.fe && c.push(a.fe);
    a.cc && c.push(a.cc);
    return c
}
b.Ki = function(a) {
    var c = this.se;
    if (a != c) {
        h.g.m.Lk();
        h.ma.w.Ki.call(this, a);
        h.g.m.Mk();
        var d = this.Y();
        if (!this.C.Lp && d) {
            var e = this.Ha();
            a ? (a.Y().appendChild(d), a = this.Ha(), sa(this, a.x - e.x, a.y - e.y)) : c && (this.C.$a.appendChild(d), this.translate(e.x, e.y))
        }
    }
};
b.Ha = function() {
    var a = 0,
        c = 0,
        d = this.$k ? this.C.Kc.Db() : null,
        e = this.Y();
    if (e) {
        do {
            var f = h.g.ld(e);
            a += f.x;
            c += f.y;
            this.$k && this.C.Kc.Kd.firstChild == e && (f = this.C.Kc.wp(), a += f.x, c += f.y);
            e = e.parentNode
        } while (e && e != this.C.$a && e != d)
    }
    return new h.g.O(a, c)
};
b.moveBy = function(a, c) {
    if (this.se) throw Error("Block has parent.");
    var d = h.i.isEnabled();
    if (d) var e = new h.i.Xi(this);
    var f = this.Ha();
    this.translate(f.x + a, f.y + c);
    sa(this, a, c);
    d && (e.$g(), h.i.Na(e));
    Qb(this.C)
};
b.translate = function(a, c) {
    this.Y().setAttribute("transform", "translate(" + a + "," + c + ")")
};
b.iq = function() {
    if (this.$k) {
        var a = this.Ha();
        this.Y().removeAttribute("transform");
        this.C.Kc.mh(a.x, a.y);
        bb(this.C.Kc, this.Y())
    }
};
b.moveTo = function(a) {
    var c = this.Ha();
    this.moveBy(a.x - c.x, a.y - c.y)
};
b.hq = function(a) {
    this.$k ? this.C.Kc.mh(a.x, a.y) : (this.J.Tk = "translate(" + a.x + "," + a.y + ")", this.J.setAttribute("transform", this.J.Tk + this.J.Kk))
};

function mc(a) {
    if (a.C && !a.C.yc() && !a.getParent() && !a.Rc) {
        var c = a.C.md;
        if (c && c.GB) {
            var d = c.Tq,
                e = d / 2,
                f = a.Ha();
            c = Math.round((f.x - e) / d) * d + e - f.x;
            d = Math.round((f.y - e) / d) * d + e - f.y;
            c = Math.round(c);
            d = Math.round(d);
            0 == c && 0 == d || a.moveBy(c, d)
        }
    }
}

function nc(a) {
    var c = a.Ha(),
        d = a.M ? h.ma.rf : 0,
        e = A(a),
        f = c.y,
        g = c.y + e.height;
    a.H ? (a = c.x - (e.width - d), c = c.x + d) : (a = c.x - d, c = c.x + e.width - d);
    return new h.g.Rect(f, g, a, c)
}
b.mk = function() {
    for (var a = 0, c; c = this.N[a]; a++) c.mk()
};
b.Zf = function(a) {
    if (this.Se != a) {
        for (var c = [], d = 0, e; e = this.N[d]; d++) c.push.apply(c, e.Eb(!a));
        if (a) {
            e = ka(this);
            for (d = 0; d < e.length; d++) e[d].Eb(!1);
            d = this.toString(h.Cw);
            I(Zb(this, "_TEMP_COLLAPSED_INPUT"), d).wa();
            e = p(this, !0);
            if (d = u(this)) d = e.indexOf(d), e.splice(d, e.length - d);
            d = 1;
            for (var f; f = e[d]; d++)
                if (f.cc) {
                    this.Gk(h.h.COLLAPSED_WARNINGS_WARNING, h.ma.Bn);
                    break
                }
        } else this.Dq("_TEMP_COLLAPSED_INPUT"), this.cc && (this.cc.gn("", h.ma.Bn), Object.keys(this.cc.Si).length || this.Gk(null));
        h.ma.w.Zf.call(this, a);
        c.length || (c[0] = this);
        if (this.ca)
            for (d = 0; f = c[d]; d++) f.Ba()
    }
};
b.Sf = function(a) {
    var c = this.C && this.C.Af(a);
    if (c) {
        if (c.Jg) throw Error("Tried to call gesture.handleBlockStart, but the gesture had already been started.");
        lb(c, this);
        c.Od = a
    }
};

function oc(a) {
    if (a.C.options.readOnly || !a.contextMenu) return null;
    var c = [];
    if (!a.Rc) {
        a.Pc() && a.Dc() && c.push(h.ua.Ey(a));
        a.C.options.Uy && !a.Se && a.Qc() && c.push(h.ua.Cy(a));
        if (a.Dc())
            if (a.Se) a.C.options.collapse && (d = {
                enabled: !0
            }, d.text = h.h.EXPAND_BLOCK, d.Jb = function() {
                a.Zf(!1)
            }, c.push(d));
            else {
                for (var d = 1; d < a.N.length; d++)
                    if (a.N[d - 1].type != h.Ca && a.N[d].type != h.Ca) {
                        d = {
                            enabled: !0
                        };
                        var e = Tb(a);
                        d.text = e ? h.h.EXTERNAL_INPUTS : h.h.INLINE_INPUTS;
                        d.Jb = function() {
                            a.Ii(!e)
                        };
                        c.push(d);
                        break
                    }
                a.C.options.collapse &&
                    (d = {
                        enabled: !0
                    }, d.text = h.h.COLLAPSE_BLOCK, d.Jb = function() {
                        a.Zf(!0)
                    }, c.push(d))
            }
        a.C.options.disable && a.Qc() && (d = {
            text: a.isEnabled() ? h.h.DISABLE_BLOCK : h.h.ENABLE_BLOCK,
            enabled: !Yb(a),
            Jb: function() {
                var f = h.i.Db();
                f || h.i.ga(!0);
                a.we(!a.isEnabled());
                f || h.i.ga(!1)
            }
        }, c.push(d));
        a.Pc() && c.push(h.ua.Dy(a))
    }
    c.push(h.ua.Fy(a));
    a.fz && a.fz(c);
    return c
}
b.Hk = function(a) {
    var c = oc(this);
    c && c.length && (h.ua.show(a, c, this.H), h.ua.am = this)
};

function sa(a, c, d) {
    if (a.ca) {
        for (var e = a.kd(!1), f = 0; f < e.length; f++) e[f].moveBy(c, d);
        e = ka(a);
        for (f = 0; f < e.length; f++) kc(e[f]);
        for (f = 0; f < a.Re.length; f++) sa(a.Re[f], c, d)
    }
}
b.dh = function(a) {
    if (a) {
        var c = this.Y();
        c.Tk = "";
        c.Kk = "";
        h.Oj = h.Oj.concat(this.kd(!0));
        h.g.m.Ib(this.J, "blocklyDragging")
    } else h.Oj = [], h.g.m.Sc(this.J, "blocklyDragging");
    for (c = 0; c < this.Re.length; c++) this.Re[c].dh(a)
};

function lc(a) {
    a.Dc() ? h.g.m.Ib(a.J, "blocklyDraggable") : h.g.m.Sc(a.J, "blocklyDraggable")
}
b.Nq = function(a) {
    h.ma.w.Nq.call(this, a);
    lc(this)
};
b.Mq = function(a) {
    h.ma.w.Mq.call(this, a);
    a = ka(this);
    for (var c = 0; c < a.length; c++) a[c].Xk()
};
b.Qq = function(a) {
    h.ma.w.Qq.call(this, a);
    this.Ae()
};
b.Lv = function(a) {
    this.gk != a && (this.gk = a) && (this.ud(h.lx), h.g.m.Ib(this.J, "blocklyInsertionMarker"))
};
b.Y = function() {
    return this.J
};
b.I = function(a, c) {
    if (this.C) {
        h.F.va();
        h.g.m.Lk();
        var d = this.C;
        if (h.selected == this) {
            cb(this);
            var e = this.C;
            e.Lb && e.Lb.cancel()
        }
        h.ua.am == this && h.ua.va();
        h.$e && h.navigation.gv(this);
        c && this.ca && (y(this, a), h.Qa.oz(this));
        this.ca = !1;
        if (this.Hc) {
            for (var f in this.Hc) clearTimeout(this.Hc[f]);
            this.Hc = null
        }
        c = ka(this);
        for (e = 0; e < c.length; e++) c[e].I();
        h.ma.w.I.call(this, a);
        h.g.m.removeNode(this.J);
        Qb(d);
        this.Pk = this.jh = this.vd = this.J = null;
        h.g.m.Mk()
    }
};
b.Ae = function() {
    var a;
    if (this.isEnabled()) {
        if (this.Ua) {
            var c = Nb(this);
            this.jh.style.display = "none";
            this.Pk.setAttribute("fill", c);
            this.vd.setAttribute("stroke", "none");
            this.vd.setAttribute("fill", c)
        } else {
            if (c = this.rt) var d = a = null;
            else d = this.wg, c = null, a = h.g.yb.zo("#fff", d, .3), d = h.g.yb.zo("#000", d, .2);
            c ? (this.jh.style.display = "none", this.Pk.style.display = "none", this.vd.setAttribute("stroke", c)) : (this.jh.style.display = "", this.Pk.style.display = "", this.vd.setAttribute("stroke", "none"), this.jh.setAttribute("stroke",
                a), this.Pk.setAttribute("fill", d));
            this.vd.setAttribute("fill", this.wg)
        }
        c = ka(this);
        for (a = 0; a < c.length; a++) c[a].Ae();
        for (c = 0; a = this.N[c]; c++) {
            d = 0;
            for (var e; e = a.Ma[d]; d++) e.Ae()
        }
    }
};

function Pb(a) {
    !a.isEnabled() || Yb(a) ? h.g.m.Ib(a.J, "blocklyDisabled") && a.vd.setAttribute("fill", "url(#" + a.C.options.Nj + ")") : h.g.m.Sc(a.J, "blocklyDisabled") && a.Ae();
    a = Qa(a, !1);
    for (var c = 0, d; d = a[c]; c++) Pb(d)
}
b.Nz = function() {
    return this.fe
};
b.Hi = function(a) {
    if (!h.Comment) throw Error("Missing require for Blockly.Comment");
    this.Hd.text != a && (h.ma.w.Hi.call(this, a), a = null != a, !!this.fe == a ? this.fe.IH() : (a ? this.zj = this.fe = new h.Comment(this) : (this.fe.I(), this.zj = this.fe = null), this.ca && (this.Ba(), this.Cc())))
};
b.Gk = function(a, c) {
    this.Hc || (this.Hc = Object.create(null));
    var d = c || "";
    if (d) this.Hc[d] && (clearTimeout(this.Hc[d]), delete this.Hc[d]);
    else
        for (var e in this.Hc) clearTimeout(this.Hc[e]), delete this.Hc[e];
    if (this.C.yc()) {
        var f = this;
        this.Hc[d] = setTimeout(function() {
            f.C && (delete f.Hc[d], f.Gk(a, d))
        }, 100)
    } else {
        this.Rc && (a = null);
        c = Xb(this);
        for (e = null; c;) c.isCollapsed() && (e = c), c = Xb(c);
        e && e.Gk(h.h.COLLAPSED_WARNINGS_WARNING, h.ma.Bn);
        c = !1;
        "string" == typeof a ? (this.cc || (this.cc = new h.ee(this), c = !0), this.cc.gn(a,
            d)) : this.cc && !d ? (this.cc.I(), c = !0) : this.cc && (c = this.cc.Bf(), this.cc.gn("", d), (e = this.cc.Bf()) || this.cc.I(), c = c != e);
        c && this.ca && (this.Ba(), this.Cc())
    }
};
b.Ov = function(a) {
    this.Qf && this.Qf !== a && this.Qf.I();
    a && (a.ka = this, this.Qf = a, jc(a))
};
b.we = function(a) {
    this.isEnabled() != a && (h.ma.w.we.call(this, a), this.ca && Pb(this))
};
b.df = function(a) {
    this.ca && (a ? (this.vd.setAttribute("filter", "url(#" + this.C.options.Tt + ")"), this.jh.style.display = "none") : (this.vd.setAttribute("filter", "none"), this.jh.style.display = "inline"))
};
b.Pl = function() {
    h.g.m.Ib(this.J, "blocklySelected")
};
b.Ak = function() {
    h.g.m.Sc(this.J, "blocklySelected")
};

function pa(a, c) {
    c ? h.g.m.Ib(a.J, "blocklyDraggingDelete") : h.g.m.Sc(a.J, "blocklyDraggingDelete")
}
b.ud = function(a) {
    h.ma.w.ud.call(this, a);
    this.ca && this.Ae()
};

function ta(a) {
    do {
        var c = a.Y();
        c.parentNode.appendChild(c);
        a = a.getParent()
    } while (a)
}
b.fh = function(a, c) {
    h.ma.w.fh.call(this, a, c);
    this.ca && (this.Ba(), this.Cc())
};
b.Ji = function(a, c) {
    h.ma.w.Ji.call(this, a, c);
    this.ca && (this.Ba(), this.Cc())
};
b.Oq = function(a, c) {
    h.ma.w.Oq.call(this, a, c);
    this.ca && (this.Ba(), this.Cc())
};
b.Ii = function(a) {
    h.ma.w.Ii.call(this, a);
    this.ca && (this.Ba(), this.Cc())
};
b.Dq = function(a, c) {
    h.ma.w.Dq.call(this, a, c);
    this.ca && (this.Ba(), this.Cc())
};
b.Ne = function(a, c) {
    a = h.ma.w.Ne.call(this, a, c);
    this.ca && (this.Ba(), this.Cc());
    return a
};

function Jb(a, c) {
    if (!c && a.isCollapsed()) {
        if (a.M && Wb(a.M, c), a.R && Wb(a.R, c), a.V) {
            Wb(a.V, c);
            var d = x(a.V);
            d && Jb(d, c)
        }
    } else {
        a = a.kd(!0);
        for (var e = 0; d = a[e]; e++) Wb(d, c), C(d) && (d = x(d)) && Jb(d, c)
    }
}
b.kd = function(a) {
    var c = [];
    if (a || this.ca)
        if (this.M && c.push(this.M), this.R && c.push(this.R), this.V && c.push(this.V), a || !this.Se) {
            a = 0;
            for (var d; d = this.N[a]; a++) d.connection && c.push(d.connection)
        }
    return c
};
b.lk = function(a) {
    return new h.Ke(this, a)
};
b.Cc = function() {
    if (this.C && !this.C.yc()) {
        var a = D(this);
        if (!a.Rc)
            for (var c = this.kd(!1), d = 0, e; e = c[d]; d++) {
                e.isConnected() && C(e) && x(e).Cc();
                for (var f = e.hv(h.ec), g = 0, k; k = f[g]; g++) e.isConnected() && k.isConnected() || D(k.D) != a && (C(e) ? Mb(k, e) : Mb(e, k))
            }
    }
};

function ua(a) {
    var c = h.i.Db();
    setTimeout(function() {
        h.i.ga(c);
        mc(a);
        h.i.ga(!1)
    }, h.zn / 2);
    setTimeout(function() {
        h.i.ga(c);
        a.Cc();
        h.i.ga(!1)
    }, h.zn)
}
b.Ba = function(a) {
    h.g.m.Lk();
    this.ca = !0;
    this.C.cf.Ba(this);
    var c = this.Ha();
    this.R && ec(this.R, c);
    this.M && ec(this.M, c);
    for (var d = 0; d < this.N.length; d++) {
        var e = this.N[d].connection;
        e && (ec(e, c), e.isConnected() && gc(e))
    }
    this.V && (ec(this.V, c), this.V.isConnected() && gc(this.V));
    !1 !== a && ((a = this.getParent()) ? a.Ba(!0) : Qb(this.C));
    h.g.m.Mk()
};
b.Ek = function(a) {
    a ? (this.J.appendChild(a), this.Yb = a) : this.Yb = null
};
b.Fk = function(a) {
    a && (this.Yb ? this.J.insertBefore(a, this.Yb) : this.J.appendChild(a))
};

function A(a) {
    var c = a.height,
        d = a.width;
    if (a = u(a)) a = A(a), c += a.height - 4, d = Math.max(d, a.width);
    return {
        height: c,
        width: d
    }
}

function ja(a, c) {
    c ? h.g.m.Ib(a.J, "blocklyReplaceable") : h.g.m.Sc(a.J, "blocklyReplaceable")
};
h.yh = function() {
    this.zb = []
};

function dc(a, c) {
    if (c.Gf) throw Error("Connection already in database.");
    c.D.Rc || (a.zb.splice(hc(a, c), 0, c), c.Gf = !0)
}

function pc(a, c) {
    if (!a.zb.length) return -1;
    var d = hc(a, c);
    if (d >= a.zb.length) return -1;
    for (var e = c.Ka, f = d; 0 <= f && a.zb[f].Ka == e;) {
        if (a.zb[f] == c) return f;
        f--
    }
    for (; d < a.zb.length && a.zb[d].Ka == e;) {
        if (a.zb[d] == c) return d;
        d++
    }
    return -1
}

function hc(a, c) {
    if (!a.zb.length) return 0;
    for (var d = 0, e = a.zb.length; d < e;) {
        var f = Math.floor((d + e) / 2);
        if (a.zb[f].Ka < c.Ka) d = f + 1;
        else if (a.zb[f].Ka > c.Ka) e = f;
        else {
            d = f;
            break
        }
    }
    return d
}

function bc(a, c) {
    if (!c.Gf) throw Error("Connection not in database.");
    var d = pc(a, c);
    if (-1 == d) throw Error("Unable to find connection in connectionDB.");
    c.Gf = !1;
    a.zb.splice(d, 1)
}

function ic(a, c, d) {
    function e(n) {
        var q = g - f[n].qb,
            r = k - f[n].Ka;
        Math.sqrt(q * q + r * r) <= d && m.push(f[n]);
        return r < d
    }
    var f = a.zb,
        g = c.qb,
        k = c.Ka;
    a = 0;
    for (var l = c = f.length - 2; a < l;) f[l].Ka < k ? a = l : c = l, l = Math.floor((a + c) / 2);
    var m = [];
    c = a = l;
    if (f.length) {
        for (; 0 <= a && e(a);) a--;
        do c++; while (c < f.length && e(c))
    }
    return m
}
h.yh.wa = function() {
    var a = [];
    a[h.Oa] = new h.yh;
    a[h.zd] = new h.yh;
    a[h.Ca] = new h.yh;
    a[h.Bd] = new h.yh;
    return a
};
h.jg = function(a, c) {
    this.gi = a;
    this.Tq = c.spacing;
    this.Wu = c.length;
    this.DA = (this.Up = a.firstChild) && this.Up.nextSibling;
    this.GB = c.snap
};
h.jg.prototype.Yf = 1;
h.jg.prototype.I = function() {
    this.gi = null
};
h.jg.prototype.update = function(a) {
    this.Yf = a;
    var c = this.Tq * a || 100;
    this.gi.setAttribute("width", c);
    this.gi.setAttribute("height", c);
    c = Math.floor(this.Tq / 2) + .5;
    var d = c - this.Wu / 2,
        e = c + this.Wu / 2;
    c *= a;
    d *= a;
    e *= a;
    qc(this.Up, a, d, e, c, c);
    qc(this.DA, a, c, c, d, e)
};

function qc(a, c, d, e, f, g) {
    a && (a.setAttribute("stroke-width", c), a.setAttribute("x1", d), a.setAttribute("y1", f), a.setAttribute("x2", e), a.setAttribute("y2", g))
}
h.jg.prototype.moveTo = function(a, c) {
    this.gi.setAttribute("x", a);
    this.gi.setAttribute("y", c);
    (h.g.userAgent.hf || h.g.userAgent.tl) && this.update(this.Yf)
};
h.jg.La = function(a, c, d) {
    a = h.g.m.L("pattern", {
        id: "blocklyGridPattern" + a,
        patternUnits: "userSpaceOnUse"
    }, d);
    0 < c.length && 0 < c.spacing ? (h.g.m.L("line", {
        stroke: c.colour
    }, a), 1 < c.length && h.g.m.L("line", {
        stroke: c.colour
    }, a)) : h.g.m.L("line", {}, a);
    return a
};
h.ad = function(a) {
    var c = !!a.readOnly;
    if (c) var d = null,
        e = !1,
        f = !1,
        g = !1,
        k = !1,
        l = !1,
        m = !1;
    else {
        d = h.ad.jB(a.toolbox || null);
        e = !(!d || !d.getElementsByTagName("category").length);
        f = a.trashcan;
        void 0 === f && (f = e);
        var n = a.maxTrashcanContents;
        f ? void 0 === n && (n = 32) : n = 0;
        g = a.collapse;
        void 0 === g && (g = e);
        k = a.comments;
        void 0 === k && (k = e);
        l = a.disable;
        void 0 === l && (l = e);
        m = a.sounds;
        void 0 === m && (m = !0)
    }
    var q = !!a.rtl,
        r = a.horizontalLayout;
    void 0 === r && (r = !1);
    var t = a.toolboxPosition;
    t = "end" === t ? !1 : !0;
    t = r ? t ? h.qg : h.lj : t == q ? h.pg : h.Dd;
    var B =
        a.css;
    void 0 === B && (B = !0);
    var R = "https://blockly-demo.appspot.com/static/media/";
    a.media ? R = a.media : a.path && (R = a.path + "media/");
    var W = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex,
        la = a.theme,
        Jd = a.keyMap || h.Wa.Ra.az(),
        Kd = a.renderer || "geras";
    this.H = q;
    this.zi = W;
    this.collapse = g;
    this.Uy = k;
    this.disable = l;
    this.readOnly = c;
    this.cq = a.maxBlocks || Infinity;
    this.eq = a.maxInstances;
    this.$m = R;
    this.Bu = e;
    this.Ob = h.ad.iB(a, e);
    this.Fu = f;
    this.Rm = n;
    this.iA = m;
    this.gA = B;
    this.Ff = r;
    this.Op = d;
    this.xu = h.ad.hB(a);
    this.gb = h.ad.kB(a);
    this.Va = t;
    this.PB = la;
    this.Ra = Jd;
    this.Bk = Kd
};
h.ad.prototype.Ac = null;
h.ad.prototype.eh = null;
h.ad.prototype.vc = null;
h.ad.iB = function(a, c) {
    var d = a.move || {},
        e = {};
    e.scrollbars = void 0 === d.scrollbars && void 0 === a.scrollbars ? c : !!d.scrollbars || !!a.scrollbars;
    e.qh = e.scrollbars && void 0 !== d.wheel ? !!d.wheel : !1;
    e.xf = e.scrollbars ? void 0 === d.drag ? !0 : !!d.drag : !1;
    return e
};
h.ad.kB = function(a) {
    a = a.zoom || {};
    var c = {};
    c.controls = void 0 === a.controls ? !1 : !!a.controls;
    c.qh = void 0 === a.wheel ? !1 : !!a.wheel;
    c.KB = void 0 === a.startScale ? 1 : Number(a.startScale);
    c.nk = void 0 === a.maxScale ? 3 : Number(a.maxScale);
    c.pk = void 0 === a.minScale ? .3 : Number(a.minScale);
    c.wB = void 0 === a.scaleSpeed ? 1.2 : Number(a.scaleSpeed);
    return c
};
h.ad.hB = function(a) {
    a = a.grid || {};
    var c = {};
    c.spacing = Number(a.spacing) || 0;
    c.yb = a.colour || "#888";
    c.length = Number(a.length) || 1;
    c.CH = 0 < c.spacing && !!a.snap;
    return c
};
h.ad.jB = function(a) {
    if (a) {
        if ("string" != typeof a && (h.g.userAgent.hf && a.outerHTML ? a = a.outerHTML : a instanceof Element || (a = null)), "string" == typeof a && (a = h.K.$f(a), "xml" != a.nodeName.toLowerCase())) throw TypeError("Toolbox should be an <xml> document.");
    } else a = null;
    return a
};
h.Jc = function(a, c) {
    h.Jc.w.constructor.call(this, a, c);
    this.Jm = !1;
    this.ed = {};
    this.Tv = this.xk = 0;
    this.qq = null
};
h.g.object.S(h.Jc, h.Ah);
h.Jc.oy = 5;
h.Jc.py = 6;
b = h.Jc.prototype;
b.$o = function(a) {
    h.Jc.w.$o.call(this, a);
    !this.Hm && h.Touch.Mm(a) && rc(this, a)
};
b.Rh = function(a) {
    this.qq = h.ra(document, "mousedown", null, this.fA.bind(this), !0);
    this.Wm = h.ra(document, "mousemove", null, this.Uj.bind(this), !0);
    this.Xm = h.ra(document, "mouseup", null, this.xm.bind(this), !0);
    a.preventDefault();
    a.stopPropagation()
};
b.fA = function(a) {
    !this.yc() && h.Touch.Mm(a) && (rc(this, a), this.Jm && h.Pf())
};
b.Uj = function(a) {
    if (this.yc()) h.Touch.Sq(a) && h.Jc.w.Uj.call(this, a);
    else if (this.Jm) {
        if (h.Touch.Mm(a)) {
            this.ed[h.Touch.vm(a)] = sc(this, a);
            var c = Object.keys(this.ed);
            if (2 == c.length) {
                c = h.g.O.Pt(this.ed[c[0]], this.ed[c[1]]) / this.Tv;
                if (0 < this.xk && Infinity > this.xk) {
                    var d = c - this.xk;
                    d = 0 < d ? d * h.Jc.oy : d * h.Jc.py;
                    var e = this.Fb,
                        f = h.g.qk(a, z(e), Ha(e));
                    e.zoom(f.x, f.y, d)
                }
                this.xk = c;
                a.preventDefault()
            }
        }
        h.Pf()
    } else h.Jc.w.Uj.call(this, a)
};
b.xm = function(a) {
    if (h.Touch.Mm(a) && !this.yc()) {
        var c = h.Touch.vm(a);
        this.ed[c] && delete this.ed[c];
        2 > Object.keys(this.ed).length && (this.ed = {}, this.xk = 0)
    }!this.Jm || this.yc() ? h.Touch.Sq(a) && h.Jc.w.xm.call(this, a) : (a.preventDefault(), a.stopPropagation(), this.I())
};
b.I = function() {
    h.Jc.w.I.call(this);
    this.qq && h.fb(this.qq)
};

function rc(a, c) {
    a.ed[h.Touch.vm(c)] = sc(a, c);
    var d = Object.keys(a.ed);
    2 == d.length && (a.Tv = h.g.O.Pt(a.ed[d[0]], a.ed[d[1]]), a.Jm = !0, c.preventDefault())
}

function sc(a, c) {
    return a.Fb ? new h.g.O(c.pageX ? c.pageX : c.changedTouches[0].pageX, c.pageY ? c.pageY : c.changedTouches[0].pageY) : null
};
h.Us = function(a) {
    this.uq = a;
    this.jj = Object.create(null)
};
b = h.Us.prototype;
b.Qp = null;
b.I = function() {
    this.jj = this.uq = null
};
b.load = function(a, c) {
    if (a.length) {
        try {
            var d = new h.g.global.Audio
        } catch (l) {
            return
        }
        for (var e, f = 0; f < a.length; f++) {
            var g = a[f],
                k = g.match(/\.(\w+)$/);
            if (k && d.canPlayType("audio/" + k[1])) {
                e = new h.g.global.Audio(g);
                break
            }
        }
        e && e.play && (this.jj[c] = e)
    }
};
b.preload = function() {
    for (var a in this.jj) {
        var c = this.jj[a];
        c.volume = .01;
        var d = c.play();
        void 0 !== d ? d.then(c.pause).catch(function() {}) : c.pause();
        if (h.g.userAgent.gj || h.g.userAgent.Xr) break
    }
};
b.play = function(a, c) {
    var d = this.jj[a];
    d ? (a = new Date, null != this.Qp && a - this.Qp < h.Rx || (this.Qp = a, d = h.g.userAgent.gj || h.g.userAgent.bl ? d : d.cloneNode(), d.volume = void 0 === c ? 1 : c, d.play())) : this.uq && this.uq.Bc.play(a, c)
};
h.Vs = function(a) {
    this.Dj = a;
    this.La()
};
b = h.Vs.prototype;
b.Ya = null;
b.Kd = null;
b.Dj = null;
b.La = function() {
    this.Ya || (this.Ya = h.g.m.L("svg", {
        xmlns: h.g.m.qc,
        "xmlns:html": h.g.m.Hn,
        "xmlns:xlink": h.g.m.dd,
        version: "1.1",
        "class": "blocklyWsDragSurface blocklyOverflowVisible"
    }, null), this.Dj.appendChild(this.Ya))
};
b.mh = function(a, c) {
    a = a.toFixed(0);
    c = c.toFixed(0);
    this.Ya.style.display = "block";
    h.g.m.Dk(this.Ya, "translate3d(" + a + "px, " + c + "px, 0px)")
};
b.wp = function() {
    return h.g.ld(this.Ya)
};
b.Tl = function(a) {
    if (!a) throw Error("Couldn't clear and hide the drag surface: missing new surface.");
    var c = this.Ya.childNodes[0],
        d = this.Ya.childNodes[1];
    if (!(c && d && h.g.m.Cu(c, "blocklyBlockCanvas") && h.g.m.Cu(d, "blocklyBubbleCanvas"))) throw Error("Couldn't clear and hide the drag surface. A node was missing.");
    null != this.Aq ? h.g.m.ni(c, this.Aq) : a.insertBefore(c, a.firstChild);
    h.g.m.ni(d, c);
    this.Ya.style.display = "none";
    if (this.Ya.childNodes.length) throw Error("Drag surface was not cleared.");
    h.g.m.Dk(this.Ya,
        "");
    this.Aq = null
};
h.Sa = function(a, c, d) {
    h.Sa.w.constructor.call(this, a);
    this.vc = a.vc || h.Sa.Yz;
    this.eh = a.eh || h.Sa.CB;
    this.Zl = h.yh.wa();
    c && (this.Kc = c);
    d && (this.rh = d);
    this.on = this.rh && h.g.Mg();
    this.Xj = [];
    this.Bc = new h.Us(a.Ac);
    this.md = this.options.yu ? new h.jg(a.yu, a.xu) : null;
    this.Yb = null;
    h.Z && h.Z.Gg && tc(this, h.Os, h.Z.Gg);
    h.Ss && h.Ss.Gg && tc(this, h.gy, h.Ss.Gg);
    h.sb && h.sb.Gg && tc(this, h.xs, h.sb.Gg);
    this.cf = h.j.wa(this.options.Bk || "geras")
};
h.g.object.S(h.Sa, h.hb);
b = h.Sa.prototype;
b.fn = null;
b.ca = !0;
b.Nf = !0;
b.qe = !1;
b.ri = !1;
b.Gq = !0;
b.scrollX = 0;
b.scrollY = 0;
b.Qt = null;
b.scale = 1;
b.bc = null;
b.pb = null;
b.P = null;
b.sa = null;
b.Lb = null;
b.Kc = null;
b.rh = null;
b.on = !1;
b.Gm = !1;
b.Jp = null;
b.Uu = null;
b.Yt = {};
b.dr = {};
b.ut = null;
b.lh = null;
b.Nu = null;
b.Kp = !0;
b.Lq = function(a) {
    this.Ga && this.Ga.Mb && this.Ga.Mb.I();
    if (this.Ga = a) this.Ga.Mb = new h.na(this, !1), this.Ek(this.Ga.Mb.La())
};
b.Mv = function(a) {
    this.tb && this.tb.Mb && this.tb.Mb.I();
    if (this.tb = a) this.tb.Mb = new h.na(this, !0), this.Fk(this.tb.Mb.La())
};
b.Ek = function(a) {
    a ? this.$a && (this.$a.appendChild(a), this.Yb = a) : this.Yb = null
};
b.Fk = function(a) {
    a && this.$a && (this.Yb ? this.$a.insertBefore(a, this.Yb) : this.$a.appendChild(a))
};

function Ha(a) {
    if (a.Kp) {
        var c = z(a).getScreenCTM();
        c && (a.Nu = c.inverse(), a.Kp = !1)
    }
    return a.Nu
}
b.Yk = function() {
    this.Kp = !0
};
b.isVisible = function() {
    return this.Nf
};

function ea(a, c) {
    var d = 0,
        e = 0,
        f = 1;
    if (h.g.m.containsNode(a.$a, c) || h.g.m.containsNode(a.ef, c)) f = a.scale;
    do {
        var g = h.g.ld(c);
        if (c == a.$a || c == a.ef) f = 1;
        d += g.x * f;
        e += g.y * f;
        c = c.parentNode
    } while (c && c != z(a));
    return new h.g.O(d, e)
}

function aa(a) {
    if (!a.Jp)
        for (var c = a.J; c;) {
            if (-1 != (" " + (c.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")) {
                a.Jp = c;
                break
            }
            c = c.parentNode
        }
    return a.Jp
}
b.La = function(a) {
    this.J = h.g.m.L("g", {
        "class": "blocklyWorkspace"
    }, null);
    a && (this.Sb = h.g.m.L("rect", {
        height: "100%",
        width: "100%",
        "class": a
    }, this.J), "blocklyMainBackground" == a && this.md ? this.Sb.style.fill = "url(#" + this.md.gi.id + ")" : this.Tb.subscribe(this.Sb, "workspace", "fill"));
    this.$a = h.g.m.L("g", {
        "class": "blocklyBlockCanvas"
    }, this.J);
    this.ef = h.g.m.L("g", {
        "class": "blocklyBubbleCanvas"
    }, this.J);
    this.qe || (h.ra(this.J, "mousedown", this, this.Sf, !1, !0), h.ra(this.J, "wheel", this, this.gB));
    if (this.options.Bu) {
        if (!h.ay) throw Error("Missing require for Blockly.Toolbox");
        this.sa = new h.ay(this)
    }
    this.md && this.md.update(this.scale);
    uc(this);
    this.Ga.Mb = new h.na(this, !1);
    a = this.Ga.Mb.La();
    this.J.appendChild(a);
    this.tb.Mb = new h.na(this, !0);
    a = this.tb.Mb.La();
    this.J.appendChild(a);
    return this.J
};
b.I = function() {
    this.ca = !1;
    this.Lb && this.Lb.cancel();
    this.J && (h.g.m.removeNode(this.J), this.J = null);
    this.ef = this.$a = null;
    this.sa && (this.sa.I(), this.sa = null);
    this.P && (this.P.I(), this.P = null);
    this.bc && (this.bc.I(), this.bc = null);
    this.pb && (this.pb.I(), this.pb = null);
    this.sh && (this.sh.I(), this.sh = null);
    this.tb && this.tb.Mb.I();
    this.Ga && this.Ga.Mb.I();
    this.Bc && (this.Bc.I(), this.Bc = null);
    this.md && (this.md.I(), this.md = null);
    this.Tb && this.Tb.unsubscribe(this.Sb);
    h.Sa.w.I.call(this);
    this.Yt = this.dr = this.Zl = null;
    if (!this.options.Ac) {
        var a = z(this).parentNode;
        a && h.g.m.removeNode(a)
    }
    this.fn && (h.fb(this.fn), this.fn = null)
};
b.jq = function(a, c) {
    return new h.ma(this, a, c)
};

function vc(a) {
    if (!h.oo) throw Error("Missing require for Blockly.Trashcan");
    a.bc = new h.oo(a);
    var c = a.bc.La();
    a.J.insertBefore(c, a.$a)
}

function wc(a) {
    if (!h.qy) throw Error("Missing require for Blockly.ZoomControls");
    a.sh = new h.qy(a);
    var c = a.sh.La();
    a.J.appendChild(c)
}

function xc(a) {
    var c = {
        Nj: a.options.Nj,
        Ac: a,
        H: a.H,
        zi: a.options.zi,
        Ff: a.Ff,
        Va: a.options.Va,
        Bk: a.options.Bk
    };
    if (a.Ff) {
        if (!h.Jn) throw Error("Missing require for Blockly.HorizontalFlyout");
        a.P = new h.Jn(c)
    } else {
        if (!h.rg) throw Error("Missing require for Blockly.VerticalFlyout");
        a.P = new h.rg(c)
    }
    a.P.Qh = !1;
    return a.P.La("svg")
}

function Ib(a) {
    return a.P ? a.P : a.sa ? a.sa.P : null
}

function Qb(a) {
    if (a.Gq && a.ca) {
        if (a.pb) {
            var c = a.vc();
            Da(a.pb.Oc, c);
            Fa(a.pb.Wc, c)
        }
        a.Yk()
    }
}
b.resize = function() {
    this.sa && this.sa.position();
    this.P && this.P.position();
    this.bc && this.bc.position();
    this.sh && this.sh.position();
    this.pb && this.pb.resize();
    this.Yk();
    uc(this)
};

function fb(a) {
    var c = h.g.Tz();
    h.g.O.me(a.Uu, c) || (a.Uu = c, a.Yk(), uc(a))
}

function z(a) {
    if (a.ft) return a.ft;
    for (var c = a.J; c;) {
        if ("svg" == c.tagName) return a.ft = c;
        c = c.parentNode
    }
    return null
}
b.translate = function(a, c) {
    if (this.on && this.Gm) this.rh.mh(a, c);
    else {
        var d = "translate(" + a + "," + c + ") scale(" + this.scale + ")";
        this.$a.setAttribute("transform", d);
        this.ef.setAttribute("transform", d)
    }
    if (this.Kc) {
        d = this.Kc;
        var e = this.scale;
        d.Yf = e;
        d.Kd.setAttribute("transform", "translate(" + a.toFixed(0) + "," + c.toFixed(0) + ") scale(" + e + ")")
    }
    this.md && this.md.moveTo(a, c)
};

function Ja(a) {
    if (a.on) {
        a.Gm = !1;
        var c = a.rh.wp();
        a.rh.Tl(a.J);
        c = "translate(" + c.x + "," + c.y + ") scale(" + a.scale + ")";
        a.$a.setAttribute("transform", c);
        a.ef.setAttribute("transform", c)
    }
}

function Ia(a) {
    if (a.on && !a.Gm) {
        a.Gm = !0;
        var c = a.$a.previousSibling,
            d = parseInt(z(a).getAttribute("width"), 10),
            e = parseInt(z(a).getAttribute("height"), 10),
            f = h.g.ld(a.$a),
            g = a.rh,
            k = a.$a,
            l = a.ef,
            m = a.scale;
        if (g.Ya.childNodes.length) throw Error("Already dragging a block.");
        g.Aq = c;
        k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
        g.Ya.setAttribute("width", d);
        g.Ya.setAttribute("height", e);
        g.Ya.appendChild(k);
        g.Ya.appendChild(l);
        g.Ya.style.display =
            "block";
        a.rh.mh(f.x, f.y)
    }
}
b.di = function() {
    var a = this.vc();
    return a ? a.lb / this.scale : 0
};
b.Eb = function(a) {
    this.pb && this.pb.bh(a);
    Ib(this) && Ib(this).bh(a);
    z(this).style.display = a ? "block" : "none";
    this.sa && (this.sa.DD.style.display = a ? "block" : "none");
    if (a) {
        for (var c = F(this, !1), d = c.length - 1; 0 <= d; d--) c[d].mk();
        this.Ba();
        this.sa && this.sa.position()
    } else h.jc(!0);
    this.Nf = a
};
b.Ba = function() {
    for (var a = F(this, !1), c = a.length - 1; 0 <= c; c--) a[c].Ba(!1);
    if (this.Lb)
        for (a = this.Lb.bi(), c = 0; c < a.length; c++) a[c].Ba(!1)
};

function yc(a, c) {
    var d = H;
    if (void 0 === c) {
        for (var e = 0, f; f = d.Xj[e]; e++) f.df(!1);
        d.Xj.length = 0
    }
    if (f = a ? v(d, a) : null)(a = void 0 === c || c) ? -1 == d.Xj.indexOf(f) && d.Xj.push(f) : h.g.Rl(d.Xj, f), f.df(a)
}

function zc(a) {
    var c = h.yj;
    if (a.ca && !(c.getElementsByTagName("block").length >= Ra(a)))
        if (a.Lb && a.Lb.cancel(), "comment" == c.tagName.toLowerCase()) {
            h.i.disable();
            try {
                h.Oh.setValue(c.textContent);
                var d = void 0;
                var e = parseInt(c.getAttribute("x"), 10),
                    f = parseInt(c.getAttribute("y"), 10);
                isNaN(e) || isNaN(f) || (a.H && (e = -e), d.moveBy(e + 50, f + 50))
            } finally {
                h.i.enable()
            }
            d.select()
        } else a: {
            h.i.disable();
            try {
                var g = h.K.Zh(c, a),
                    k = a.tb.mb;
                if (h.$e && k) {
                    h.navigation.Mu(g, k.ba);
                    break a
                }
                var l = parseInt(c.getAttribute("x"), 10),
                    m =
                    parseInt(c.getAttribute("y"), 10);
                if (!isNaN(l) && !isNaN(m)) {
                    a.H && (l = -l);
                    do {
                        c = !1;
                        var n = F(a, !1);
                        d = 0;
                        for (var q; q = n[d]; d++) {
                            var r = q.Ha();
                            if (1 >= Math.abs(l - r.x) && 1 >= Math.abs(m - r.y)) {
                                c = !0;
                                break
                            }
                        }
                        if (!c) {
                            var t = g.kd(!1);
                            d = 0;
                            for (var B; B = t[d]; d++)
                                if (B.closest(h.ec, new h.g.O(l, m)).connection) {
                                    c = !0;
                                    break
                                }
                        }
                        c && (l = a.H ? l - h.ec : l + h.ec, m += 2 * h.ec)
                    } while (c);
                    g.moveBy(l, m)
                }
            } finally {
                h.i.enable()
            }
            h.i.isEnabled() && !g.Ua && h.i.Na(new h.i.il(g));g.select()
        }
}

function Ac(a) {
    (a = a.qe ? a.lh : a) && !a.Lb && a.sa && a.sa.P && a.sa.oH()
}
b.ah = function(a, c) {
    h.Sa.w.ah.call(this, a, c);
    Ac(this)
};
b.Xh = function(a) {
    h.Sa.w.Xh.call(this, a);
    Ac(this)
};
b.Jd = function(a, c, d) {
    a = h.Sa.w.Jd.call(this, a, c, d);
    Ac(this);
    return a
};

function uc(a) {
    a.It = a.bc && a.J.parentNode ? a.bc.rm() : null;
    a.Ht = a.P ? a.P.rm() : a.sa ? a.sa.rm() : null
}

function oa(a, c) {
    return a.It && a.It.contains(c.clientX, c.clientY) ? h.En : a.Ht && a.Ht.contains(c.clientX, c.clientY) ? h.Kr : h.Jr
}
b.Sf = function(a) {
    var c = this.Af(a);
    c && jb(c, a, this)
};
b.Uq = function(a, c) {
    a = h.g.qk(a, z(this), Ha(this));
    a.x /= this.scale;
    a.y /= this.scale;
    this.Qt = h.g.O.Mj(c, a)
};
b.yc = function() {
    return null != this.Lb && this.Lb.yc()
};

function Bc(a) {
    return a.options.Ob && a.options.Ob.scrollbars || a.options.Ob && a.options.Ob.qh || a.options.Ob && a.options.Ob.xf || a.options.gb && a.options.gb.controls || a.options.gb && a.options.gb.qh
}
b.Dc = function() {
    return this.options.Ob && this.options.Ob.scrollbars || this.options.Ob && this.options.Ob.qh || this.options.Ob && this.options.Ob.xf || this.options.gb && this.options.gb.qh
};
b.gB = function(a) {
    if (h.Ah.Hp()) a.preventDefault(), a.stopPropagation();
    else {
        var c = this.options.gb && this.options.gb.qh,
            d = this.options.Ob && this.options.Ob.qh;
        if (c || d) {
            var e = h.g.pu(a);
            !c || !a.ctrlKey && d ? (c = this.scrollX - e.x, d = this.scrollY - e.y, a.shiftKey && !e.x && (c = this.scrollX - e.y, d = this.scrollY), this.scroll(c, d)) : (e = -e.y / 50, c = h.g.qk(a, z(this), Ha(this)), this.zoom(c.x, c.y, e));
            a.preventDefault()
        }
    }
};

function Ob(a) {
    var c = G(a, !1);
    a = Pa(a, !1);
    c = c.concat(a);
    if (!c.length) return new h.g.Rect(0, 0, 0, 0);
    a = nc(c[0]);
    for (var d = 1; d < c.length; d++) {
        var e = nc(c[d]);
        e.top < a.top && (a.top = e.top);
        e.bottom > a.bottom && (a.bottom = e.bottom);
        e.left < a.left && (a.left = e.left);
        e.right > a.right && (a.right = e.right)
    }
    return a
}
b.Ry = function() {
    this.Rb(!1);
    h.i.ga(!0);
    for (var a = G(this, !0), c = 0, d = 0, e; e = a[d]; d++)
        if (e.Dc()) {
            var f = e.Ha();
            e.moveBy(-f.x, c - f.y);
            mc(e);
            c = e.Ha().y + A(e).height + h.ma.hs
        }
    h.i.ga(!1);
    this.Rb(!0)
};
b.Hk = function(a) {
    function c(B) {
        if (B.Pc()) t = t.concat(p(B, !1));
        else {
            B = Qa(B, !1);
            for (var R = 0; R < B.length; R++) c(B[R])
        }
    }

    function d() {
        h.i.ga(g);
        var B = t.shift();
        B && (B.C ? (B.I(!1, !0), setTimeout(d, 10)) : d());
        h.i.ga(!1)
    }
    if (!this.options.readOnly && !this.qe) {
        var e = [],
            f = G(this, !0),
            g = h.g.Ve(),
            k = this,
            l = {};
        l.text = h.h.UNDO;
        l.enabled = 0 < this.nh.length;
        l.Jb = this.hr.bind(this, !1);
        e.push(l);
        l = {};
        l.text = h.h.REDO;
        l.enabled = 0 < this.zk.length;
        l.Jb = this.hr.bind(this, !0);
        e.push(l);
        this.Dc() && (l = {}, l.text = h.h.CLEAN_UP, l.enabled = 1 <
            f.length, l.Jb = this.Ry.bind(this), e.push(l));
        if (this.options.collapse) {
            for (var m = l = !1, n = 0; n < f.length; n++)
                for (var q = f[n]; q;) q.isCollapsed() ? l = !0 : m = !0, q = u(q);
            var r = function(B) {
                for (var R = 0, W = 0; W < f.length; W++)
                    for (var la = f[W]; la;) setTimeout(la.Zf.bind(la, B), R), la = u(la), R += 10
            };
            m = {
                enabled: m
            };
            m.text = h.h.COLLAPSE_ALL;
            m.Jb = function() {
                r(!0)
            };
            e.push(m);
            l = {
                enabled: l
            };
            l.text = h.h.EXPAND_ALL;
            l.Jb = function() {
                r(!1)
            };
            e.push(l)
        }
        var t = [];
        for (n = 0; n < f.length; n++) c(f[n]);
        l = {
            text: 1 == t.length ? h.h.DELETE_BLOCK : h.h.DELETE_X_BLOCKS.replace("%1",
                String(t.length)),
            enabled: 0 < t.length,
            Jb: function() {
                k.Lb && k.Lb.cancel();
                2 > t.length ? d() : h.confirm(h.h.DELETE_ALL_BLOCKS.replace("%1", t.length), function(B) {
                    B && d()
                })
            }
        };
        e.push(l);
        this.ut && this.ut(e);
        h.ua.show(a, e, this.H)
    }
};

function Ga(a) {
    if (a.options.Ac) Ga(a.options.Ac);
    else {
        h.kk = a;
        document.activeElement && document.activeElement.blur();
        try {
            z(a).focus()
        } catch (c) {
            try {
                z(a).parentNode.setActive()
            } catch (d) {
                z(a).parentNode.focus()
            }
        }
    }
}
b.zoom = function(a, c, d) {
    if (!this.qe && !this.ri) {
        d = Math.pow(this.options.gb.wB, d);
        var e = this.scale * d;
        if (this.scale != e) {
            e > this.options.gb.nk ? d = this.options.gb.nk / this.scale : e < this.options.gb.pk && (d = this.options.gb.pk / this.scale);
            var f = this.$a.getCTM(),
                g = z(this).createSVGPoint();
            g.x = a;
            g.y = c;
            g = g.matrixTransform(f.inverse());
            a = g.x;
            c = g.y;
            f = f.translate(a * (1 - d), c * (1 - d)).scale(d);
            this.scrollX = f.e;
            this.scrollY = f.f;
            this.setScale(e)
        }
    }
};
b.setScale = function(a) {
    this.options.gb.nk && a > this.options.gb.nk ? a = this.options.gb.nk : this.options.gb.pk && a < this.options.gb.pk && (a = this.options.gb.pk);
    this.scale = a;
    h.jc(!1);
    this.P && (this.P.Cq(), uc(this));
    this.md && this.md.update(this.scale);
    a = this.vc();
    this.scrollX -= a.fc;
    this.scrollY -= a.rc;
    a.wb += a.fc;
    a.Bb += a.rc;
    this.scroll(this.scrollX, this.scrollY);
    this.pb && (this.P ? (Aa(this.pb.Oc, a), Ba(this.pb.Wc, a)) : (Da(this.pb.Oc, a), Fa(this.pb.Wc, a)))
};
b.scroll = function(a, c) {
    h.jc(!0);
    var d = this.vc(),
        e = d.ie + d.tc - d.lb,
        f = d.gd + d.ic - d.vb;
    a = Math.min(a, -d.tc);
    c = Math.min(c, -d.ic);
    a = Math.max(a, -e);
    c = Math.max(c, -f);
    this.scrollX = a;
    this.scrollY = c;
    this.pb && (wa(this.pb.Oc, -(a + d.tc) * this.pb.Oc.Pb), wa(this.pb.Wc, -(c + d.ic) * this.pb.Wc.Pb));
    a += d.fc;
    c += d.rc;
    this.translate(a, c)
};
h.Sa.ju = function(a) {
    var c = 0,
        d = 0;
    a && (c = a.di(), d = a.Zb);
    return {
        width: c,
        height: d
    }
};
h.Sa.Qz = function(a, c) {
    return Bc(a) ? h.Sa.Pz(a, c) : h.Sa.gu(a)
};
h.Sa.gu = function(a) {
    var c = Ob(a),
        d = a.scale;
    a = c.top * d;
    var e = c.bottom * d,
        f = c.left * d;
    c = c.right * d;
    return {
        top: a,
        bottom: e,
        left: f,
        right: c,
        width: c - f,
        height: e - a
    }
};
h.Sa.Pz = function(a, c) {
    a = h.Sa.gu(a);
    var d = c.width;
    c = c.height;
    var e = d / 2,
        f = c / 2,
        g = Math.min(a.left - e, a.right - d),
        k = Math.min(a.top - f, a.bottom - c);
    return {
        left: g,
        top: k,
        height: Math.max(a.bottom + f, a.top + c) - k,
        width: Math.max(a.right + e, a.left + d) - g
    }
};
h.Sa.Yz = function() {
    var a = h.Sa.ju(this.sa),
        c = h.Sa.ju(this.P),
        d = h.MB(z(this)),
        e = {
            height: d.height,
            width: d.width
        };
    if (this.sa)
        if (this.Va == h.qg || this.Va == h.lj) e.height -= a.height;
        else {
            if (this.Va == h.Dd || this.Va == h.pg) e.width -= a.width
        }
    else if (this.P)
        if (this.Va == h.qg || this.Va == h.lj) e.height -= c.height;
        else if (this.Va == h.Dd || this.Va == h.pg) e.width -= c.width;
    var f = h.Sa.Qz(this, e),
        g = 0;
    this.sa && this.Va == h.Dd ? g = a.width : this.P && this.Va == h.Dd && (g = c.width);
    var k = 0;
    this.sa && this.Va == h.qg ? k = a.height : this.P && this.Va == h.qg &&
        (k = c.height);
    return {
        gd: f.height,
        ie: f.width,
        ic: f.top,
        tc: f.left,
        vb: e.height,
        lb: e.width,
        Bb: -this.scrollY,
        wb: -this.scrollX,
        rc: k,
        fc: g,
        FH: d.height,
        GH: d.width,
        Yv: a.width,
        HH: a.height,
        SG: c.width,
        QG: c.height,
        Va: this.Va
    }
};
h.Sa.CB = function(a) {
    var c = this.vc();
    "number" == typeof a.x && (this.scrollX = -c.ie * a.x - c.tc);
    "number" == typeof a.y && (this.scrollY = -c.gd * a.y - c.ic);
    this.translate(this.scrollX + c.fc, this.scrollY + c.rc)
};
h.Sa.prototype.Rb = function(a) {
    var c = !this.Gq && a;
    this.Gq = a;
    c && Qb(this)
};
h.Sa.prototype.clear = function() {
    this.Rb(!1);
    h.Sa.w.clear.call(this);
    this.Rb(!0)
};

function Cc(a, c) {
    if ("function" != typeof c) throw TypeError("Button callbacks must be functions.");
    a.Yt.CREATE_VARIABLE = c
}

function tc(a, c, d) {
    if ("function" != typeof d) throw TypeError("Toolbox category callbacks must be functions.");
    a.dr[c] = d
}
h.Sa.prototype.Af = function(a) {
    var c = "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type,
        d = this.Lb;
    return d ? c && d.Jg ? (console.warn("Tried to start the same gesture twice."), d.cancel(), null) : d : c ? this.Lb = new h.Jc(a, this) : null
};
h.dj = function(a) {
    a.vc = this.um.bind(this);
    a.eh = this.Nv.bind(this);
    this.s = new h.Sa(a);
    this.s.qe = !0;
    this.s.Lq(new h.hg);
    this.s.Mv(new h.lf);
    this.H = !!a.H;
    this.Ti = a.Va;
    this.kp = [];
    this.Qm = [];
    this.uj = [];
    this.zc = [];
    this.xq = [];
    this.Qi = this.s.cf.v.rf
};
b = h.dj.prototype;
b.Qh = !0;
b.Nf = !1;
b.yg = !0;
b.ab = 8;
b.kf = h.dj.prototype.ab;
b.Yw = 3 * h.dj.prototype.kf;
b.Zw = 3 * h.dj.prototype.kf;
b.eo = 2;
b.Xa = 0;
b.Zb = 0;
b.uz = 70;
b.La = function(a) {
    this.J = h.g.m.L(a, {
        "class": "blocklyFlyout",
        style: "display: none"
    }, null);
    this.Sb = h.g.m.L("path", {
        "class": "blocklyFlyoutBackground"
    }, this.J);
    this.J.appendChild(this.s.La());
    this.s.Tb.subscribe(this.Sb, "flyout", "fill");
    this.s.Tb.subscribe(this.Sb, "flyoutOpacity", "fill-opacity");
    return this.J
};
b.wa = function(a) {
    this.kb = a;
    this.s.lh = a;
    this.Qb = new h.za(this.s, this.ki, !1, "blocklyFlyoutScrollbar");
    this.va();
    Array.prototype.push.apply(this.kp, h.ra(this.J, "wheel", this, this.YB));
    this.Qh || (this.mm = this.lp.bind(this), Ua(this.kb, this.mm));
    Array.prototype.push.apply(this.kp, h.ra(this.Sb, "mousedown", this, this.Sf));
    this.s.Af = this.kb.Af.bind(this.kb);
    this.s.Ja = this.kb.Ja;
    a = this.s;
    a.Ci = new h.po(a)
};
b.I = function() {
    this.va();
    h.fb(this.kp);
    this.mm && (Va(this.kb, this.mm), this.mm = null);
    this.Qb && (this.Qb.I(), this.Qb = null);
    this.s && (this.s.Tb.unsubscribe(this.Sb), this.s.lh = null, this.s.I(), this.s = null);
    this.J && (h.g.m.removeNode(this.J), this.J = null);
    this.kb = this.Sb = null
};
b.di = function() {
    return this.Xa
};
b.ei = function() {
    return this.s
};
b.isVisible = function() {
    return this.Nf
};
b.Eb = function(a) {
    var c = a != this.isVisible();
    this.Nf = a;
    c && this.Wk()
};
b.bh = function(a) {
    var c = a != this.yg;
    this.yg = a;
    c && this.Wk()
};
b.Wk = function() {
    var a = this.yg ? this.isVisible() : !1;
    this.J.style.display = a ? "block" : "none";
    this.Qb.bh(a)
};
b.va = function() {
    if (this.isVisible()) {
        this.Eb(!1);
        for (var a = 0, c; c = this.zc[a]; a++) h.fb(c);
        this.zc.length = 0;
        this.Wf && (Va(this.s, this.Wf), this.Wf = null)
    }
};
b.show = function(a) {
    this.s.Rb(!1);
    this.va();
    Dc(this);
    if ("string" == typeof a) {
        a = this.s.lh.dr[a] || null;
        if ("function" != typeof a) throw TypeError("Couldn't find a callback function when opening a toolbox category.");
        a = a(this.s.lh);
        if (!Array.isArray(a)) throw TypeError("Result of toolbox category callback must be an array.");
    }
    this.Eb(!0);
    var c = [],
        d = [];
    this.xq.length = 0;
    for (var e = this.ki ? this.Yw : this.Zw, f = 0, g; g = a[f]; f++)
        if (g.tagName) switch (g.tagName.toUpperCase()) {
            case "BLOCK":
                var k = h.K.Zh(g, this.s);
                k.isEnabled() ||
                    this.xq.push(k);
                c.push({
                    type: "block",
                    block: k
                });
                g = parseInt(g.getAttribute("gap"), 10);
                d.push(isNaN(g) ? e : g);
                break;
            case "SEP":
                g = parseInt(g.getAttribute("gap"), 10);
                !isNaN(g) && 0 < d.length ? d[d.length - 1] = g : d.push(e);
                break;
            case "LABEL":
            case "BUTTON":
                k = "LABEL" == g.tagName.toUpperCase();
                if (!h.Xw) throw Error("Missing require for Blockly.FlyoutButton");
                g = new h.Xw(this.s, this.kb, g, k);
                c.push({
                    type: "button",
                    button: g
                });
                d.push(e)
        }
    Ec(this, c, d);
    this.zc.push(h.ra(this.Sb, "mouseover", this, function() {
        for (var l = G(this.s, !1),
                m = 0, n; n = l[m]; m++) n.Ak()
    }));
    this.ki ? this.Zb = 0 : this.Xa = 0;
    this.s.Rb(!0);
    this.Cq();
    this.lp();
    this.position();
    this.Wf = this.Cq.bind(this);
    Ua(this.s, this.Wf)
};

function Dc(a) {
    for (var c = G(a.s, !1), d = 0, e; e = c[d]; d++) e.C == a.s && e.I(!1, !1);
    for (d = 0; d < a.Qm.length; d++)(c = a.Qm[d]) && h.g.m.removeNode(c);
    for (d = a.Qm.length = 0; c = a.uj[d]; d++) c.I();
    a.uj.length = 0;
    a.s.Ci.clear()
}

function Fc(a, c) {
    return function(d) {
        var e = a.kb.Af(d);
        e && (lb(e, c), kb(e, d, a))
    }
}
b.Sf = function(a) {
    var c = this.kb.Af(a);
    c && kb(c, a, this)
};
b.Ou = function(a) {
    return a.isEnabled()
};

function gb(a, c) {
    var d = null;
    h.i.disable();
    var e = a.kb.yf();
    a.kb.Rb(!1);
    try {
        var f = a.kb;
        if (!c.Y()) throw Error("oldBlock is not rendered.");
        var g = h.K.sf(c, !0);
        f.Rb(!1);
        var k = h.K.Zh(g, f);
        if (!k.Y()) throw Error("block is not rendered.");
        var l = h.g.Sj(f.$a),
            m = h.g.Sj(a.s.$a),
            n = c.Ha();
        n.scale(a.s.scale);
        var q = h.g.O.sum(m, n),
            r = h.g.O.Mj(q, l);
        r.scale(1 / f.scale);
        k.moveBy(r.x, r.y);
        d = k;
        h.jc()
    } finally {
        h.i.enable()
    }
    c = h.Z.du(a.kb, e);
    if (h.i.isEnabled())
        for (h.i.ga(!0), h.i.Na(new h.i.wd(d)), e = 0; e < c.length; e++) h.i.Na(new h.i.cd(c[e]));
    a.Qh ? a.va() : a.lp();
    return d
}
b.lp = function() {
    for (var a = G(this.s, !1), c = 0, d; d = a[c]; c++)
        if (-1 == this.xq.indexOf(d))
            for (var e = Sa(this.kb, h.g.pp(d)); d;) d.we(e), d = u(d)
};
b.Cq = function() {
    this.Wf && Va(this.s, this.Wf);
    this.s.scale = this.kb.scale;
    for (var a = 0, c = G(this.s, !1), d = 0, e; e = c[d]; d++) {
        var f = A(e).width;
        e.M && (f -= this.Qi);
        a = Math.max(a, f)
    }
    for (d = 0; e = this.uj[d]; d++) a = Math.max(a, e.width);
    a += 1.5 * this.kf + this.Qi;
    a *= this.s.scale;
    a += h.za.ac;
    if (this.Xa != a) {
        for (d = 0; e = c[d]; d++) {
            if (this.H) {
                f = e.Ha().x;
                var g = a / this.s.scale - this.kf;
                e.M || (g -= this.Qi);
                e.moveBy(g - f, 0)
            }
            e.Zt && (f = e.Zt, g = e, e = A(g), f.setAttribute("width", e.width), f.setAttribute("height", e.height), g = g.Ha(), f.setAttribute("y",
                g.y), f.setAttribute("x", this.H ? g.x - e.width : g.x))
        }
        if (this.H)
            for (d = 0; e = this.uj[d]; d++) c = e.YG().y, e.moveTo(a / this.s.scale - e.width - this.kf - this.Qi, c);
        this.Xa = a;
        this.position()
    }
    this.Wf && Ua(this.s, this.Wf)
};

function eb(a) {
    return a.Qb ? a.Qb.isVisible() : !1
};
h.W = {};
h.W.ya = null;
h.W.lc = null;
h.W.fm = null;
h.W.La = function() {
    h.W.ya || (h.W.ya = document.createElement("div"), h.W.ya.className = "blocklyWidgetDiv", document.body.appendChild(h.W.ya))
};
h.W.show = function(a, c, d) {
    h.W.va();
    h.W.lc = a;
    h.W.fm = d;
    h.W.ya.style.top = h.g.style.vu().y + "px";
    h.W.ya.style.direction = c ? "rtl" : "ltr";
    h.W.ya.style.display = "block"
};
h.W.va = function() {
    h.W.lc && (h.W.lc = null, h.W.ya.style.display = "none", h.W.ya.style.left = "", h.W.ya.style.top = "", h.W.fm && h.W.fm(), h.W.fm = null, h.W.ya.innerHTML = "")
};
h.W.isVisible = function() {
    return !!h.W.lc
};
h.W.Wj = function(a) {
    h.W.lc == a && h.W.va()
};
h.W.wk = function(a, c, d) {
    h.W.ya.style.left = a + "px";
    h.W.ya.style.top = c + "px";
    h.W.ya.style.height = d + "px"
};
h.W.mB = function(a, c, d, e) {
    var f = h.W.Ky(a, c, d);
    a = h.W.Jy(a, c, d, e);
    0 > f ? h.W.wk(a, 0, d.height + f) : h.W.wk(a, f, d.height)
};
h.W.Jy = function(a, c, d, e) {
    if (e) return c = Math.max(c.right - d.width, a.left), Math.min(c, a.right - d.width);
    c = Math.min(c.left, a.right - d.width);
    return Math.max(c, a.left)
};
h.W.Ky = function(a, c, d) {
    return c.bottom + d.height >= a.bottom ? c.top - d.height : c.bottom
};
h.rg = function(a) {
    a.vc = this.um.bind(this);
    a.eh = this.Nv.bind(this);
    h.rg.w.constructor.call(this, a);
    this.ki = !1
};
h.g.object.S(h.rg, h.dj);
b = h.rg.prototype;
b.um = function() {
    if (!this.isVisible()) return null;
    try {
        var a = this.s.$a.getBBox()
    } catch (f) {
        a = {
            height: 0,
            y: 0,
            width: 0,
            x: 0
        }
    }
    var c = this.eo,
        d = this.Zb - 2 * this.eo,
        e = this.Xa;
    this.H || (e -= this.eo);
    return {
        vb: d,
        lb: e,
        gd: a.height * this.s.scale + 2 * this.kf,
        ie: a.width * this.s.scale + 2 * this.kf,
        Bb: -this.s.scrollY + a.y,
        wb: -this.s.scrollX,
        ic: a.y,
        tc: a.x,
        rc: c,
        fc: 0
    }
};
b.Nv = function(a) {
    var c = this.um();
    c && ("number" == typeof a.y && (this.s.scrollY = -c.gd * a.y), this.s.translate(this.s.scrollX + c.fc, this.s.scrollY + c.rc))
};
b.position = function() {
    if (this.isVisible()) {
        var a = this.kb.vc();
        if (a) {
            this.Zb = a.vb;
            var c = this.Xa - this.ab,
                d = a.vb - 2 * this.ab,
                e = this.Ti == h.pg,
                f = c + this.ab;
            f = ["M " + (e ? f : 0) + ",0"];
            f.push("h", e ? -c : c);
            f.push("a", this.ab, this.ab, 0, 0, e ? 0 : 1, e ? -this.ab : this.ab, this.ab);
            f.push("v", Math.max(0, d));
            f.push("a", this.ab, this.ab, 0, 0, e ? 0 : 1, e ? this.ab : -this.ab, this.ab);
            f.push("h", e ? c : -c);
            f.push("z");
            this.Sb.setAttribute("d", f.join(" "));
            c = this.Zb;
            a = this.kb.Va == this.Ti ? a.Yv ? this.Ti == h.Dd ? a.Yv : a.lb - this.Xa : this.Ti == h.Dd ? 0 : a.lb :
                this.Ti == h.Dd ? 0 : a.lb + a.fc - this.Xa;
            this.J.setAttribute("width", this.Xa);
            this.J.setAttribute("height", c);
            "svg" == this.J.tagName ? h.g.m.Dk(this.J, "translate(" + a + "px,0px)") : this.J.setAttribute("transform", "translate(" + a + ",0)");
            this.Qb && (this.Qb.rq = new h.g.O(a, 0), this.Qb.resize(), za(this.Qb, this.Qb.te.x, this.Qb.te.y))
        }
    }
};
b.YB = function(a) {
    var c = h.g.pu(a);
    if (c.y) {
        var d = this.um();
        c = d.Bb - d.ic + c.y;
        c = Math.min(c, d.gd - d.vb);
        c = Math.max(c, 0);
        this.Qb.set(c);
        h.W.va()
    }
    a.preventDefault();
    a.stopPropagation()
};

function Ec(a, c, d) {
    a.s.scale = a.kb.scale;
    for (var e = a.kf, f = a.H ? e : e + a.Qi, g = 0, k; k = c[g]; g++)
        if ("block" == k.type) {
            k = k.block;
            for (var l = p(k, !1), m = 0, n; n = l[m]; m++) n.Rc = !0;
            k.Ba();
            n = k.Y();
            l = A(k);
            m = k.M ? f - a.Qi : f;
            k.moveBy(m, e);
            var q = a,
                r = k,
                t = g;
            m = h.g.m.L("rect", {
                "fill-opacity": 0,
                x: a.H ? m - l.width : m,
                y: e,
                height: l.height,
                width: l.width
            }, null);
            m.Qd = r;
            h.F.Rh(m);
            q.s.$a.insertBefore(m, r.Y());
            r.Zt = m;
            q.Qm[t] = m;
            q = a;
            q.zc.push(h.ra(n, "mousedown", null, Fc(q, k)));
            q.zc.push(h.ra(m, "mousedown", null, Fc(q, k)));
            q.zc.push(h.Xb(n, "mouseover",
                k, k.Pl));
            q.zc.push(h.Xb(n, "mouseout", k, k.Ak));
            q.zc.push(h.Xb(m, "mouseover", k, k.Pl));
            q.zc.push(h.Xb(m, "mouseout", k, k.Ak));
            e += l.height + d[g]
        } else "button" == k.type && (l = a, m = k.button, n = f, q = e, r = m.La(), m.moveTo(n, q), m.show(), l.zc.push(h.ra(r, "mousedown", l, l.Sf)), l.uj.push(m), e += k.button.height + d[g])
}
b.rm = function() {
    if (!this.J) return null;
    var a = this.J.getBoundingClientRect(),
        c = a.left;
    if (this.Ti == h.Dd) return new h.g.Rect(-1E9, 1E9, -1E9, c + a.width);
    h.g.userAgent.$w && this.kb && this.kb.ri && (a = this.kb.J.getBoundingClientRect().x, 10 > Math.abs(a - c) && (c += this.jH * this.kb.options.Ac.scale));
    return new h.g.Rect(-1E9, 1E9, c, 1E9)
};
h.Cr = function(a) {
    this.Dj = a;
    this.La()
};
b = h.Cr.prototype;
b.Ya = null;
b.Kd = null;
b.Dj = null;
b.Yf = 1;
b.Nk = null;
b.La = function() {
    this.Ya || (this.Ya = h.g.m.L("svg", {
        xmlns: h.g.m.qc,
        "xmlns:html": h.g.m.Hn,
        "xmlns:xlink": h.g.m.dd,
        version: "1.1",
        "class": "blocklyBlockDragSurface"
    }, this.Dj), this.Kd = h.g.m.L("g", {}, this.Ya))
};

function bb(a, c) {
    if (a.Kd.childNodes.length) throw Error("Already dragging a block.");
    a.Kd.appendChild(c);
    a.Ya.style.display = "block";
    a.Nk = new h.g.O(0, 0)
}
b.mh = function(a, c) {
    this.Nk = new h.g.O(a * this.Yf, c * this.Yf);
    a = this.Nk.x;
    c = this.Nk.y;
    a = a.toFixed(0);
    c = c.toFixed(0);
    this.Ya.style.display = "block";
    h.g.m.Dk(this.Ya, "translate3d(" + a + "px, " + c + "px, 0px)")
};
b.wp = function() {
    var a = h.g.ld(this.Ya);
    return new h.g.O(a.x / this.Yf, a.y / this.Yf)
};
b.Db = function() {
    return this.Kd
};
b.Tl = function(a) {
    a ? a.appendChild(this.Kd.firstChild) : this.Kd.removeChild(this.Kd.firstChild);
    this.Ya.style.display = "none";
    if (this.Kd.childNodes.length) throw Error("Drag group was not cleared.");
    this.Nk = null
};
h.Xc = {};
h.Xc.Ip = !1;
h.Xc.register = function(a) {
    if (h.Xc.Ip) throw Error("CSS already injected");
    Array.prototype.push.apply(h.Xc.Cn, a);
    a.length = 0
};
h.Xc.Hf = function(a, c) {
    if (!h.Xc.Ip) {
        h.Xc.Ip = !0;
        var d = h.Xc.Cn.join("\n");
        h.Xc.Cn.length = 0;
        a && (a = c.replace(/[\\/]$/, ""), d = d.replace(/<<<PATH>>>/g, a), a = document.createElement("style"), d = document.createTextNode(d), a.appendChild(d), document.head.insertBefore(a, document.head.firstChild))
    }
};
h.Xc.Lq = function() {
    console.warn("Deprecated call to Blockly.Css.setCursor. See https://github.com/google/blockly/issues/981 for context")
};
h.Xc.Cn = [".blocklySvg {", "background-color: #fff;", "outline: none;", "overflow: hidden;", "position: absolute;", "display: block;", "}", ".blocklyWidgetDiv {", "display: none;", "position: absolute;", "z-index: 99999;", "}", ".injectionDiv {", "height: 100%;", "position: relative;", "overflow: hidden;", "touch-action: none;", "}", ".blocklyNonSelectable {", "user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "}", ".blocklyWsDragSurface {", "display: none;", "position: absolute;", "top: 0;", "left: 0;",
    "}", ".blocklyWsDragSurface.blocklyOverflowVisible {", "overflow: visible;", "}", ".blocklyBlockDragSurface {", "display: none;", "position: absolute;", "top: 0;", "left: 0;", "right: 0;", "bottom: 0;", "overflow: visible !important;", "z-index: 50;", "}", ".blocklyBlockCanvas.blocklyCanvasTransitioning,", ".blocklyBubbleCanvas.blocklyCanvasTransitioning {", "transition: transform .5s;", "}", ".blocklyTooltipDiv {", "background-color: #ffffc7;", "border: 1px solid #ddc;", "box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);",
    "color: #000;", "display: none;", "font-family: sans-serif;", "font-size: 9pt;", "opacity: .9;", "padding: 2px;", "position: absolute;", "z-index: 100000;", "}", ".blocklyDropDownDiv {", "position: fixed;", "left: 0;", "top: 0;", "z-index: 1000;", "display: none;", "border: 1px solid;", "border-radius: 2px;", "padding: 4px;", "box-shadow: 0px 0px 3px 1px rgba(0,0,0,.3);", "}", ".blocklyDropDownDiv.focused {", "box-shadow: 0px 0px 6px 1px rgba(0,0,0,.3);", "}", ".blocklyDropDownContent {", "max-height: 300px;", "overflow: auto;",
    "overflow-x: hidden;", "}", ".blocklyDropDownArrow {", "position: absolute;", "left: 0;", "top: 0;", "width: 16px;", "height: 16px;", "z-index: -1;", "background-color: inherit;", "border-color: inherit;", "}", ".blocklyDropDownButton {", "display: inline-block;", "float: left;", "padding: 0;", "margin: 4px;", "border-radius: 4px;", "outline: none;", "border: 1px solid;", "transition: box-shadow .1s;", "cursor: pointer;", "}", ".arrowTop {", "border-top: 1px solid;", "border-left: 1px solid;", "border-top-left-radius: 4px;",
    "border-color: inherit;", "}", ".arrowBottom {", "border-bottom: 1px solid;", "border-right: 1px solid;", "border-bottom-right-radius: 4px;", "border-color: inherit;", "}", ".blocklyResizeSE {", "cursor: se-resize;", "fill: #aaa;", "}", ".blocklyResizeSW {", "cursor: sw-resize;", "fill: #aaa;", "}", ".blocklyResizeLine {", "stroke: #515A5A;", "stroke-width: 1;", "}", ".blocklyHighlightedConnectionPath {", "fill: none;", "stroke: #fc3;", "stroke-width: 4px;", "}", ".blocklyPathLight {", "fill: none;", "stroke-linecap: round;",
    "stroke-width: 1;", "}", ".blocklySelected>.blocklyPath {", "stroke: #fc3;", "stroke-width: 3px;", "}", ".blocklySelected>.blocklyPathLight {", "display: none;", "}", ".blocklyDraggable {", 'cursor: url("<<<PATH>>>/handopen.cur"), auto;', "cursor: grab;", "cursor: -webkit-grab;", "}", ".blocklyDragging {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyDraggable:active {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;",
    "}", ".blocklyBlockDragSurface .blocklyDraggable {", 'cursor: url("<<<PATH>>>/handclosed.cur"), auto;', "cursor: grabbing;", "cursor: -webkit-grabbing;", "}", ".blocklyDragging.blocklyDraggingDelete {", 'cursor: url("<<<PATH>>>/handdelete.cur"), auto;', "}", ".blocklyDragging>.blocklyPath,", ".blocklyDragging>.blocklyPathLight {", "fill-opacity: .8;", "stroke-opacity: .8;", "}", ".blocklyDragging>.blocklyPathDark {", "display: none;", "}", ".blocklyDisabled>.blocklyPath {", "fill-opacity: .5;", "stroke-opacity: .5;",
    "}", ".blocklyDisabled>.blocklyPathLight,", ".blocklyDisabled>.blocklyPathDark {", "display: none;", "}", ".blocklyInsertionMarker>.blocklyPath,", ".blocklyInsertionMarker>.blocklyPathLight,", ".blocklyInsertionMarker>.blocklyPathDark {", "fill-opacity: .2;", "stroke: none", "}", ".blocklyReplaceable .blocklyPath {", "fill-opacity: .5;", "}", ".blocklyReplaceable .blocklyPathLight,", ".blocklyReplaceable .blocklyPathDark {", "display: none;", "}", ".blocklyText {", "cursor: default;", "fill: #fff;", "font-family: sans-serif;",
    "font-size: 11pt;", "}", ".blocklyMultilineText {", "font-family: monospace;", "}", ".blocklyNonEditableText>text {", "pointer-events: none;", "}", ".blocklyNonEditableText>rect,", ".blocklyEditableText>rect {", "fill: #fff;", "fill-opacity: .6;", "}", ".blocklyNonEditableText>text,", ".blocklyEditableText>text {", "fill: #000;", "}", ".blocklyEditableText:hover>rect {", "stroke: #fff;", "stroke-width: 2;", "}", ".blocklyBubbleText {", "fill: #000;", "}", ".blocklyFlyout {", "position: absolute;", "z-index: 20;", "}", ".blocklySvg text, .blocklyBlockDragSurface text {",
    "user-select: none;", "-ms-user-select: none;", "-webkit-user-select: none;", "cursor: inherit;", "}", ".blocklyHidden {", "display: none;", "}", ".blocklyFieldDropdown:not(.blocklyHidden) {", "display: block;", "}", ".blocklyIconGroup {", "cursor: default;", "}", ".blocklyIconGroup:not(:hover),", ".blocklyIconGroupReadonly {", "opacity: .6;", "}", ".blocklyIconShape {", "fill: #00f;", "stroke: #fff;", "stroke-width: 1px;", "}", ".blocklyIconSymbol {", "fill: #fff;", "}", ".blocklyMinimalBody {", "margin: 0;", "padding: 0;",
    "}", ".blocklyCommentForeignObject {", "position: relative;", "z-index: 0;", "}", ".blocklyCommentRect {", "fill: #E7DE8E;", "stroke: #bcA903;", "stroke-width: 1px", "}", ".blocklyCommentTarget {", "fill: transparent;", "stroke: #bcA903;", "}", ".blocklyCommentTargetFocused {", "fill: none;", "}", ".blocklyCommentHandleTarget {", "fill: none;", "}", ".blocklyCommentHandleTargetFocused {", "fill: transparent;", "}", ".blocklyFocused>.blocklyCommentRect {", "fill: #B9B272;", "stroke: #B9B272;", "}", ".blocklySelected>.blocklyCommentTarget {",
    "stroke: #fc3;", "stroke-width: 3px;", "}", ".blocklyCommentTextarea {", "background-color: #fef49c;", "border: 0;", "outline: 0;", "margin: 0;", "padding: 3px;", "resize: none;", "display: block;", "overflow: hidden;", "}", ".blocklyCommentDeleteIcon {", "cursor: pointer;", "fill: #000;", "display: none", "}", ".blocklySelected > .blocklyCommentDeleteIcon {", "display: block", "}", ".blocklyDeleteIconShape {", "fill: #000;", "stroke: #000;", "stroke-width: 1px;", "}", ".blocklyDeleteIconShape.blocklyDeleteIconHighlighted {",
    "stroke: #fc3;", "}", ".blocklyHtmlInput {", "border: none;", "border-radius: 4px;", "font-family: sans-serif;", "height: 100%;", "margin: 0;", "outline: none;", "padding: 0;", "width: 100%;", "text-align: center;", "}", ".blocklyHtmlInput::-ms-clear {", "display: none;", "}", ".blocklyMainBackground {", "stroke-width: 1;", "stroke: #c6c6c6;", "}", ".blocklyMutatorBackground {", "fill: #fff;", "stroke: #ddd;", "stroke-width: 1;", "}", ".blocklyFlyoutBackground {", "fill: #ddd;", "fill-opacity: .8;", "}", ".blocklyMainWorkspaceScrollbar {",
    "z-index: 20;", "}", ".blocklyFlyoutScrollbar {", "z-index: 30;", "}", ".blocklyScrollbarHorizontal, .blocklyScrollbarVertical {", "position: absolute;", "outline: none;", "}", ".blocklyScrollbarBackground {", "opacity: 0;", "}", ".blocklyScrollbarHandle {", "fill: #ccc;", "}", ".blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyScrollbarHandle:hover {", "fill: #bbb;", "}", ".blocklyFlyout .blocklyScrollbarHandle {", "fill: #bbb;", "}", ".blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,",
    ".blocklyFlyout .blocklyScrollbarHandle:hover {", "fill: #aaa;", "}", ".blocklyInvalidInput {", "background: #faa;", "}", ".blocklyContextMenu {", "border-radius: 4px;", "max-height: 100%;", "}", ".blocklyDropdownMenu {", "border-radius: 2px;", "padding: 0 !important;", "}", ".blocklyWidgetDiv .blocklyDropdownMenu .goog-menuitem,", ".blocklyDropDownDiv .blocklyDropdownMenu .goog-menuitem {", "padding-left: 28px;", "}", ".blocklyWidgetDiv .blocklyDropdownMenu .goog-menuitem.goog-menuitem-rtl,", ".blocklyDropDownDiv .blocklyDropdownMenu .goog-menuitem.goog-menuitem-rtl {",
    "padding-left: 5px;", "padding-right: 28px;", "}", ".blocklyVerticalCursor {", "stroke-width: 3px;", "fill: rgba(255,255,255,.5);", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon,", ".blocklyDropDownDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyDropDownDiv .goog-option-selected .goog-menuitem-icon {", "background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px;", "}", ".blocklyWidgetDiv .goog-menu {", "background: #fff;",
    "border-color: transparent;", "border-style: solid;", "border-width: 1px;", "cursor: default;", "font: normal 13px Arial, sans-serif;", "margin: 0;", "outline: none;", "padding: 4px 0;", "position: absolute;", "overflow-y: auto;", "overflow-x: hidden;", "max-height: 100%;", "z-index: 20000;", "box-shadow: 0px 0px 3px 1px rgba(0,0,0,.3);", "}", ".blocklyWidgetDiv .goog-menu.focused {", "box-shadow: 0px 0px 6px 1px rgba(0,0,0,.3);", "}", ".blocklyDropDownDiv .goog-menu {", "cursor: default;", 'font: normal 13px "Helvetica Neue", Helvetica, sans-serif;',
    "outline: none;", "z-index: 20000;", "}", ".blocklyWidgetDiv .goog-menuitem,", ".blocklyDropDownDiv .goog-menuitem {", "color: #000;", "font: normal 13px Arial, sans-serif;", "list-style: none;", "margin: 0;", "min-width: 7em;", "border: none;", "padding: 6px 15px;", "white-space: nowrap;", "cursor: pointer;", "}", ".blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem,", ".blocklyWidgetDiv .goog-menu-noicon .goog-menuitem,", ".blocklyDropDownDiv .goog-menu-nocheckbox .goog-menuitem,", ".blocklyDropDownDiv .goog-menu-noicon .goog-menuitem {",
    "padding-left: 12px;", "}", ".blocklyWidgetDiv .goog-menuitem-content,", ".blocklyDropDownDiv .goog-menuitem-content {", "font: normal 13px Arial, sans-serif;", "}", ".blocklyWidgetDiv .goog-menuitem-content {", "color: #000;", "}", ".blocklyDropDownDiv .goog-menuitem-content {", "color: #000;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled,", ".blocklyDropDownDiv .goog-menuitem-disabled {", "cursor: inherit;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content,", ".blocklyDropDownDiv .goog-menuitem-disabled .goog-menuitem-content {",
    "color: #ccc !important;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon,", ".blocklyDropDownDiv .goog-menuitem-disabled .goog-menuitem-icon {", "opacity: .3;", "filter: alpha(opacity=30);", "}", ".blocklyWidgetDiv .goog-menuitem-highlight ,", ".blocklyDropDownDiv .goog-menuitem-highlight {", "background-color: rgba(0,0,0,.1);", "}", ".blocklyWidgetDiv .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-icon,", ".blocklyDropDownDiv .goog-menuitem-checkbox,", ".blocklyDropDownDiv .goog-menuitem-icon {",
    "background-repeat: no-repeat;", "height: 16px;", "left: 6px;", "position: absolute;", "right: auto;", "vertical-align: middle;", "width: 16px;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon,", ".blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-icon {", "left: auto;", "right: 6px;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon,",
    ".blocklyDropDownDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyDropDownDiv .goog-option-selected .goog-menuitem-icon {", "position: static;", "float: left;", "margin-left: -24px;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon,", ".blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-icon {", "float: right;", "margin-right: -24px;", "}"
];
h.A = function() {};
h.A.Yc = null;
h.A.Do = null;
h.A.lc = null;
h.A.cn = null;
h.A.dl = 16;
h.A.Br = 1;
h.A.vr = 12;
h.A.us = 16;
h.A.xn = .25;
h.A.Hr = "#dadce0";
h.A.Ir = "#fff";
h.A.to = null;
h.A.Yg = null;
h.A.La = function() {
    if (!h.A.Yc) {
        var a = document.createElement("div");
        a.className = "blocklyDropDownDiv";
        a.style.backgroundColor = h.A.Ir;
        a.style.borderColor = h.A.Hr;
        document.body.appendChild(a);
        h.A.Yc = a;
        var c = document.createElement("div");
        c.className = "blocklyDropDownContent";
        a.appendChild(c);
        h.A.wf = c;
        c = document.createElement("div");
        c.className = "blocklyDropDownArrow";
        a.appendChild(c);
        h.A.Fd = c;
        h.A.Yc.style.opacity = 0;
        h.A.Yc.style.transition = "transform " + h.A.xn + "s, opacity " + h.A.xn + "s";
        a.addEventListener("focusin",
            function() {
                h.g.m.Ib(a, "focused")
            });
        a.addEventListener("focusout", function() {
            h.g.m.Sc(a, "focused")
        })
    }
};
h.A.Jv = function(a) {
    h.A.Do = a
};
h.A.Rz = function() {
    return h.A.wf
};
h.A.Sy = function() {
    h.A.wf.innerHTML = "";
    h.A.wf.style.width = ""
};
h.A.ud = function(a) {
    h.A.Yc.style.backgroundColor = a;
    h.A.Yc.style.borderColor = void 0
};
h.A.yH = function(a) {
    h.A.Yc.setAttribute("data-category", a)
};
h.A.BH = function(a, c, d, e) {
    var f = c.C.scale,
        g = c.width,
        k = c.height;
    g *= f;
    k *= f;
    f = c.Y().getBoundingClientRect();
    g = f.left + g / 2;
    k = f.top + k;
    f = f.top;
    e && (f += e);
    h.A.Jv(z(c.C).parentNode);
    return h.A.show(a, c.H, g, k, g, f, d)
};
h.A.DB = function(a, c) {
    var d = a.Y().getBoundingClientRect(),
        e = d.left + d.width / 2,
        f = d.bottom;
    d = d.top;
    var g = a.D;
    h.A.cn = !0;
    h.A.Jv(z(g.C).parentNode);
    h.A.show(a, g.H, e, f, e, d, c)
};
h.A.show = function(a, c, d, e, f, g, k) {
    h.A.lc = a;
    h.A.Yg = k || null;
    a = h.A.ou(d, e, f, g);
    a.vo ? (h.A.Fd.style.display = "", h.A.Fd.style.transform = "translate(" + a.rj + "px," + a.ct + "px) rotate(45deg)", h.A.Fd.setAttribute("class", a.uo ? "blocklyDropDownArrow arrowTop" : "blocklyDropDownArrow arrowBottom")) : h.A.Fd.style.display = "none";
    h.A.Yc.style.direction = c ? "rtl" : "ltr";
    h.A.wk(a.Bm, a.Cm, a.nm, a.om);
    return a.uo
};
h.A.Kz = function() {
    var a = h.A.Do.getBoundingClientRect(),
        c = h.g.style.We(h.A.Do);
    return {
        left: a.left,
        right: a.left + c.width,
        top: a.top,
        bottom: a.top + c.height,
        width: c.width,
        height: c.height
    }
};
h.A.ou = function(a, c, d, e) {
    var f = h.A.Kz(),
        g = h.g.style.We(h.A.Yc);
    return c + g.height < f.bottom ? h.A.nu(a, c, f, g) : e - g.height > f.top ? h.A.mu(d, e, f, g) : c + g.height < document.documentElement.clientHeight ? h.A.nu(a, c, f, g) : e - g.height > document.documentElement.clientTop ? h.A.mu(d, e, f, g) : h.A.Wz(a, f, g)
};
h.A.nu = function(a, c, d, e) {
    a = h.A.up(a, d.left, d.right, e.width);
    return {
        Bm: a.Yh,
        Cm: c,
        nm: a.Yh,
        om: c + h.A.us,
        rj: a.rj,
        ct: -(h.A.dl / 2 + h.A.Br),
        uo: !0,
        vo: !0
    }
};
h.A.mu = function(a, c, d, e) {
    a = h.A.up(a, d.left, d.right, e.width);
    return {
        Bm: a.Yh,
        Cm: c - e.height,
        nm: a.Yh,
        om: c - e.height - h.A.us,
        rj: a.rj,
        ct: e.height - 2 * h.A.Br - h.A.dl / 2,
        uo: !1,
        vo: !0
    }
};
h.A.Wz = function(a, c, d) {
    a = h.A.up(a, c.left, c.right, d.width);
    return {
        Bm: a.Yh,
        Cm: 0,
        nm: a.Yh,
        om: 0,
        vo: !1
    }
};
h.A.up = function(a, c, d, e) {
    var f = a;
    a = h.g.pd.wj(c, a - e / 2, d - e);
    f -= h.A.dl / 2;
    c = h.g.pd.wj(h.A.vr, f - a, e - h.A.vr - h.A.dl);
    return {
        rj: c,
        Yh: a
    }
};
h.A.isVisible = function() {
    return !!h.A.lc
};
h.A.Wj = function(a, c) {
    h.A.lc === a && (c ? h.A.Fp() : h.A.va())
};
h.A.va = function() {
    var a = h.A.Yc;
    a.style.transform = "translate(0, 0)";
    a.style.opacity = 0;
    h.A.to = setTimeout(function() {
        h.A.Fp()
    }, 1E3 * h.A.xn);
    h.A.Yg && (h.A.Yg(), h.A.Yg = null)
};
h.A.Fp = function() {
    if (h.A.isVisible()) {
        h.A.to && clearTimeout(h.A.to);
        var a = h.A.Yc;
        a.style.transform = "";
        a.style.left = "";
        a.style.top = "";
        a.style.opacity = 0;
        a.style.display = "none";
        a.style.backgroundColor = h.A.Ir;
        a.style.borderColor = h.A.Hr;
        h.A.Yg && (h.A.Yg(), h.A.Yg = null);
        h.A.Sy();
        h.A.lc = null
    }
};
h.A.wk = function(a, c, d, e) {
    a = Math.floor(a);
    c = Math.floor(c);
    d = Math.floor(d);
    e = Math.floor(e);
    var f = h.A.Yc;
    f.style.left = a + "px";
    f.style.top = c + "px";
    f.style.display = "block";
    f.style.opacity = 1;
    f.style.transform = "translate(" + (d - a) + "px," + (e - c) + "px)"
};
h.A.sH = function() {
    if (h.A.lc) {
        var a = h.A.lc.D,
            c = a.C.scale,
            d = h.A.cn ? h.A.lc.ub.width : a.width,
            e = h.A.cn ? h.A.lc.ub.height : a.height;
        d *= c;
        e *= c;
        a = h.A.cn ? h.A.lc.jd.getBoundingClientRect() : a.Y().getBoundingClientRect();
        d = a.left + d / 2;
        e = h.A.ou(d, a.top + e, d, a.top);
        h.A.wk(e.Bm, e.Cm, e.nm, e.om)
    } else h.A.va()
};
h.Hf = function(a, c) {
    h.My();
    "string" == typeof a && (a = document.getElementById(a) || document.querySelector(a));
    if (!h.g.m.containsNode(document, a)) throw Error("Error: container is not in current document.");
    c = new h.ad(c || {});
    var d = document.createElement("div");
    d.className = "injectionDiv";
    a.appendChild(d);
    a = h.Fj(d, c);
    var e = new h.Cr(d);
    d = new h.Vs(d);
    d = h.bz(a, c, e, d);
    h.Wa.Ra.BB(c.Ra);
    h.rA(d);
    h.kk = d;
    h.Rk(d);
    return d
};
h.Fj = function(a, c) {
    a.setAttribute("dir", "LTR");
    h.nc.Ft = c.H;
    h.Xc.Hf(c.gA, c.$m);
    a = h.g.m.L("svg", {
        xmlns: h.g.m.qc,
        "xmlns:html": h.g.m.Hn,
        "xmlns:xlink": h.g.m.dd,
        version: "1.1",
        "class": "blocklySvg"
    }, a);
    var d = h.g.m.L("defs", {}, a),
        e = String(Math.random()).substring(2),
        f = h.g.m.L("filter", {
            id: "blocklyEmbossFilter" + e
        }, d);
    h.g.m.L("feGaussianBlur", {
        "in": "SourceAlpha",
        stdDeviation: 1,
        result: "blur"
    }, f);
    var g = h.g.m.L("feSpecularLighting", {
        "in": "blur",
        surfaceScale: 1,
        specularConstant: .5,
        specularExponent: 10,
        "lighting-color": "white",
        result: "specOut"
    }, f);
    h.g.m.L("fePointLight", {
        x: -5E3,
        y: -1E4,
        z: 2E4
    }, g);
    h.g.m.L("feComposite", {
        "in": "specOut",
        in2: "SourceAlpha",
        operator: "in",
        result: "specOut"
    }, f);
    h.g.m.L("feComposite", {
        "in": "SourceGraphic",
        in2: "specOut",
        operator: "arithmetic",
        k1: 0,
        k2: 1,
        k3: 1,
        k4: 0
    }, f);
    c.Tt = f.id;
    f = h.g.m.L("pattern", {
        id: "blocklyDisabledPattern" + e,
        patternUnits: "userSpaceOnUse",
        width: 10,
        height: 10
    }, d);
    h.g.m.L("rect", {
        width: 10,
        height: 10,
        fill: "#aaa"
    }, f);
    h.g.m.L("path", {
        d: "M 0 0 L 10 10 M 10 0 L 0 10",
        stroke: "#cc0"
    }, f);
    c.Nj = f.id;
    c.yu = h.jg.La(e, c.xu, d);
    return a
};
h.bz = function(a, c, d, e) {
    c.Ac = null;
    var f = new h.Sa(c, d, e);
    f.scale = c.gb.KB;
    a.appendChild(f.La("blocklyMainBackground"));
    !c.Bu && c.Op && (d = xc(f), h.g.m.ni(d, a));
    c.Fu && vc(f);
    c.gb && c.gb.controls && wc(f);
    f.Tb.subscribe(a, "workspace", "background-color");
    f.translate(0, 0);
    h.kk = f;
    c.readOnly || f.Dc() || Ua(f, function(g) {
        if (!f.yc() && !f.Dc() && -1 != h.i.yw.indexOf(g.type)) {
            var k = Object.create(null),
                l = f.vc(),
                m = f.scale;
            k.H = f.H;
            k.wb = l.wb / m;
            k.Bb = l.Bb / m;
            k.ew = (l.wb + l.lb) / m;
            k.dw = (l.Bb + l.vb) / m;
            Bc(f) ? (l = Ob(f), k.tc = l.left, k.ic = l.top,
                k.At = l.right, k.yt = l.bottom) : (k.tc = l.tc / m, k.ic = l.ic / m, k.At = (l.tc + l.ie) / m, k.yt = (l.ic + l.gd) / m);
            if (k.ic < k.Bb || k.yt > k.dw || k.tc < k.wb || k.At > k.ew) {
                l = null;
                g && (l = h.i.Db(), h.i.ga(g.group));
                switch (g.type) {
                    case h.i.xr:
                    case h.i.yr:
                        var n = v(f, g.gc);
                        n = D(n);
                        break;
                    case h.i.kl:
                    case h.i.ll:
                        n = f.Xl[g.ge] || null
                }
                if (n) {
                    m = nc(n);
                    m.height = m.bottom - m.top;
                    m.width = m.right - m.left;
                    var q = k.Bb,
                        r = k.dw - m.height;
                    r = Math.max(q, r);
                    q = h.g.pd.wj(q, m.top, r) - m.top;
                    r = k.wb;
                    var t = k.ew - m.width;
                    k.H ? r = Math.min(t, r) : t = Math.max(r, t);
                    n.moveBy(h.g.pd.wj(r,
                        m.left, t) - m.left, q)
                }
                g && (g.group || console.log("WARNING: Moved object in bounds but there was no event group. This may break undo."), null !== l && h.i.ga(l))
            }
        }
    });
    h.Rk(f);
    h.W.La();
    h.A.La();
    h.F.La();
    return f
};
h.rA = function(a) {
    var c = a.options,
        d = z(a);
    h.ra(d.parentNode, "contextmenu", null, function(e) {
        h.g.Km(e) || e.preventDefault()
    });
    d = h.ra(window, "resize", null, function() {
        h.jc(!0);
        h.Rk(a)
    });
    a.fn = d;
    h.Hf.By();
    c.Op && (a.sa ? a.sa.wa(a) : a.P && (a.P.wa(a), a.P.show(c.Op.childNodes), a.P.Qb.set(0)));
    d = h.za.ac;
    c.Fu && (d = a.bc.wa(d));
    c.gb && c.gb.controls && a.sh.wa(d);
    c.Ob && c.Ob.scrollbars ? (a.pb = new h.Lh(a), a.pb.resize()) : a.eh({
        x: .5,
        y: .5
    });
    c.iA && h.Hf.FA(c.$m, a)
};
h.Hf.By = function() {
    h.qz || (h.ra(document, "scroll", null, function() {
        for (var a = h.hb.getAll(), c = 0, d; d = a[c]; c++) d.Yk && d.Yk()
    }), h.ra(document, "keydown", null, h.ZA), h.Xb(document, "touchend", null, h.Pf), h.Xb(document, "touchcancel", null, h.Pf), h.g.userAgent.gj && h.ra(window, "orientationchange", document, function() {
        h.Rk(h.Za())
    }));
    h.qz = !0
};
h.Hf.FA = function(a, c) {
    function d() {
        for (; f.length;) h.fb(f.pop());
        e.preload()
    }
    var e = c.Bc;
    e.load([a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
    e.load([a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"], "disconnect");
    e.load([a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
    var f = [];
    f.push(h.ra(document, "mousemove", null, d, !0));
    f.push(h.ra(document, "touchstart", null, d, !0))
};
h.yd = function(a, c) {
    this.cw = c || "";
    this.Cv = Object.create(null);
    if (a)
        for (a = a.split(","), c = 0; c < a.length; c++) this.Cv[a[c]] = !0;
    this.reset()
};
h.yd.Fn = "DEVELOPER_VARIABLE";
h.yd.prototype.reset = function() {
    this.ke = Object.create(null);
    this.Et = Object.create(null);
    this.Ja = null
};

function Gc(a, c) {
    var d = h.G.al;
    if (c == h.Z.Fh) {
        var e = a;
        d.Ja ? e = (e = d.Ja.Df(e)) ? e.name : null : (console.log("Deprecated call to Blockly.Names.prototype.getName without defining a variable map. To fix, add the folowing code in your generator's init() function:\nBlockly.YourGeneratorName.variableDB_.setVariableMap(workspace.getVariableMap());"), e = null);
        e && (a = e)
    }
    e = a.toLowerCase() + "_" + c;
    var f = c == h.Z.Fh || c == h.yd.Fn ? d.cw : "";
    if (e in d.ke) return f + d.ke[e];
    a ? (a = encodeURI(a.replace(/ /g, "_")).replace(/[^\w]/g, "_"), -1 != "0123456789".indexOf(a[0]) && (a = "my_" + a)) : a = h.h.UNNAMED_KEY || "unnamed";
    for (var g = ""; d.Et[a + g] || a + g in d.Cv;) g = g ? g + 1 : 2;
    a += g;
    d.Et[a] = !0;
    c = (c == h.Z.Fh || c == h.yd.Fn ? d.cw : "") + a;
    d.ke[e] = c.substr(f.length);
    return c
}
h.yd.me = function(a, c) {
    return a.toLowerCase() == c.toLowerCase()
};
h.sb = {};
h.sb.Fh = h.xs;
h.sb.yy = function(a) {
    a = F(a, !1);
    for (var c = [], d = [], e = 0; e < a.length; e++)
        if (a[e].ci) {
            var f = a[e].ci();
            f && (f[2] ? c.push(f) : d.push(f))
        }
    d.sort(h.sb.zv);
    c.sort(h.sb.zv);
    return [d, c]
};
h.sb.zv = function(a, c) {
    return a[0].toLowerCase().localeCompare(c[0].toLowerCase())
};
h.sb.Az = function(a, c) {
    if (c.Rc) return a;
    for (a = a || h.h.UNNAMED_KEY || "unnamed"; !h.sb.xA(a, c.C, c);) {
        var d = a.match(/^(.*?)(\d+)$/);
        a = d ? d[1] + (parseInt(d[2], 10) + 1) : a + "2"
    }
    return a
};
h.sb.xA = function(a, c, d) {
    return !h.sb.zA(a, c, d)
};
h.sb.zA = function(a, c, d) {
    c = F(c, !1);
    for (var e = 0; e < c.length; e++)
        if (c[e] != d && c[e].ci) {
            var f = c[e].ci();
            if (h.yd.me(f[0], a)) return !0
        }
    return !1
};
h.sb.rH = function(a) {
    a = a.trim();
    var c = h.sb.Az(a, this.D),
        d = this.getValue();
    if (d != a && d != c) {
        a = F(this.D.C, !1);
        for (var e = 0; e < a.length; e++) a[e].rB && a[e].rB(d, c)
    }
    return c
};
h.sb.Gg = function(a) {
    function c(g, k) {
        for (var l = 0; l < g.length; l++) {
            var m = g[l][0],
                n = g[l][1],
                q = h.g.xml.createElement("block");
            q.setAttribute("type", k);
            q.setAttribute("gap", 16);
            var r = h.g.xml.createElement("mutation");
            r.setAttribute("name", m);
            q.appendChild(r);
            for (m = 0; m < n.length; m++) {
                var t = h.g.xml.createElement("arg");
                t.setAttribute("name", n[m]);
                r.appendChild(t)
            }
            d.push(q)
        }
    }
    var d = [];
    if (h.Hb.procedures_defnoreturn) {
        var e = h.g.xml.createElement("block");
        e.setAttribute("type", "procedures_defnoreturn");
        e.setAttribute("gap",
            16);
        var f = h.g.xml.createElement("field");
        f.setAttribute("name", "NAME");
        f.appendChild(h.g.xml.createTextNode(h.h.PROCEDURES_DEFNORETURN_PROCEDURE));
        e.appendChild(f);
        d.push(e)
    }
    h.Hb.procedures_defreturn && (e = h.g.xml.createElement("block"), e.setAttribute("type", "procedures_defreturn"), e.setAttribute("gap", 16), f = h.g.xml.createElement("field"), f.setAttribute("name", "NAME"), f.appendChild(h.g.xml.createTextNode(h.h.PROCEDURES_DEFRETURN_PROCEDURE)), e.appendChild(f), d.push(e));
    h.Hb.procedures_ifreturn && (e = h.g.xml.createElement("block"),
        e.setAttribute("type", "procedures_ifreturn"), e.setAttribute("gap", 16), d.push(e));
    d.length && d[d.length - 1].setAttribute("gap", 24);
    a = h.sb.yy(a);
    c(a[0], "procedures_callnoreturn");
    c(a[1], "procedures_callreturn");
    return d
};
h.sb.Lz = function(a, c) {
    var d = [];
    c = F(c, !1);
    for (var e = 0; e < c.length; e++)
        if (c[e].Xz) {
            var f = c[e].Xz();
            f && h.yd.me(f, a) && d.push(c[e])
        }
    return d
};
h.sb.mH = function(a) {
    var c = h.i.$b,
        d = a.ci()[0],
        e = a.qd(!0);
    a = h.sb.Lz(d, a.C);
    d = 0;
    for (var f; f = a[d]; d++) {
        var g = f.qd();
        g = g && h.K.Mc(g);
        f.Ue(e);
        var k = f.qd();
        k = k && h.K.Mc(k);
        g != k && (h.i.$b = !1, h.i.Na(new h.i.uh(f, "mutation", null, g, k)), h.i.$b = c)
    }
};
h.sb.UG = function(a, c) {
    c = G(c, !1);
    for (var d = 0; d < c.length; d++)
        if (c[d].ci) {
            var e = c[d].ci();
            if (e && h.yd.me(e[0], a)) return c[d]
        }
    return null
};
h.Ol = function(a, c, d, e) {
    this.C = a;
    this.name = c;
    this.type = d || "";
    this.li = e || h.g.Ve();
    h.i.Na(new h.i.cd(this))
};
h.Ol.prototype.ob = function() {
    return this.li
};
h.Ol.Vy = function(a, c) {
    a = a.name.toLowerCase();
    c = c.name.toLowerCase();
    return a < c ? -1 : a == c ? 0 : 1
};
h.Z = {};
h.Z.Fh = h.Os;
h.Z.bt = function(a) {
    var c = F(a, !1);
    a = Object.create(null);
    for (var d = 0; d < c.length; d++) {
        var e = Na(c[d]);
        if (e)
            for (var f = 0; f < e.length; f++) {
                var g = e[f],
                    k = g.ob();
                k && (a[k] = g)
            }
    }
    c = [];
    for (k in a) c.push(a[k]);
    return c
};
h.Z.zG = function() {
    console.warn("Deprecated call to Blockly.Variables.allUsedVariables. Use Blockly.Variables.allUsedVarModels instead.\nIf this is a major issue please file a bug on GitHub.")
};
h.Z.qr = {};
h.Z.wy = function(a) {
    a = F(a, !1);
    for (var c = Object.create(null), d = 0, e; e = a[d]; d++) {
        var f = e.VG;
        !f && e.Sz && (f = e.Sz, h.Z.qr[e.type] || (console.warn("Function getDeveloperVars() deprecated. Use getDeveloperVariables() (block type '" + e.type + "')"), h.Z.qr[e.type] = !0));
        if (f)
            for (e = f(), f = 0; f < e.length; f++) c[e[f]] = !0
    }
    return Object.keys(c)
};
h.Z.Gg = function(a) {
    var c = [],
        d = document.createElement("button");
    d.setAttribute("text", "%{BKY_NEW_VARIABLE}");
    d.setAttribute("callbackKey", "CREATE_VARIABLE");
    Cc(a, function(e) {
        h.Z.Ct(e.$G())
    });
    c.push(d);
    a = h.Z.Dz(a);
    return c = c.concat(a)
};
h.Z.Dz = function(a) {
    a = a.wm("");
    var c = [];
    if (0 < a.length) {
        var d = a[a.length - 1];
        if (h.Hb.variables_set) {
            var e = h.g.xml.createElement("block");
            e.setAttribute("type", "variables_set");
            e.setAttribute("gap", h.Hb.math_change ? 8 : 24);
            e.appendChild(h.Z.op(d));
            c.push(e)
        }
        h.Hb.math_change && (e = h.g.xml.createElement("block"), e.setAttribute("type", "math_change"), e.setAttribute("gap", h.Hb.variables_get ? 20 : 8), e.appendChild(h.Z.op(d)), d = h.K.$f('<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value>'),
            e.appendChild(d), c.push(e));
        if (h.Hb.variables_get) {
            a.sort(h.Ol.Vy);
            d = 0;
            for (var f; f = a[d]; d++) e = h.g.xml.createElement("block"), e.setAttribute("type", "variables_get"), e.setAttribute("gap", 8), e.appendChild(h.Z.op(f)), c.push(e)
        }
    }
    return c
};
h.Z.Gz = function(a) {
    a = a.yf();
    var c = "";
    if (a.length)
        for (var d = 1, e = 0, f = "ijkmnopqrstuvwxyzabcdefgh".charAt(e); !c;) {
            for (var g = !1, k = 0; k < a.length; k++)
                if (a[k].name.toLowerCase() == f) {
                    g = !0;
                    break
                }
            g ? (e++, 25 == e && (e = 0, d++), f = "ijkmnopqrstuvwxyzabcdefgh".charAt(e), 1 < d && (f += d)) : c = f
        } else c = "i";
    return c
};
h.Z.Ct = function(a, c, d) {
    function e(g) {
        h.Z.Av(h.h.NEW_VARIABLE_TITLE, g, function(k) {
            if (k) {
                var l = h.Z.RA(k, a);
                if (l) {
                    var m = k.toLowerCase();
                    if (l.type == f) var n = h.h.VARIABLE_ALREADY_EXISTS.replace("%1", m);
                    else n = h.h.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE, n = n.replace("%1", m).replace("%2", l.type);
                    h.alert(n, function() {
                        e(k)
                    })
                } else a.Jd(k, f), c && c(k)
            } else c && c(null)
        })
    }
    var f = d || "";
    e("")
};
h.Z.Jd = h.Z.Ct;
h.Z.Bv = function(a, c) {
    function d(e) {
        var f = h.h.RENAME_VARIABLE_TITLE.replace("%1", c.name);
        h.Z.Av(f, e, function(g) {
            if (g) {
                var k = h.Z.SA(g, c.type, a);
                k ? (k = h.h.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace("%1", g.toLowerCase()).replace("%2", k.type), h.alert(k, function() {
                    d(g)
                })) : a.ah(c.ob(), g)
            }
        })
    }
    d("")
};
h.Z.Av = function(a, c, d) {
    h.prompt(a, c, function(e) {
        e && (e = e.replace(/[\s\xa0]+/g, " ").trim(), e == h.h.RENAME_VARIABLE || e == h.h.NEW_VARIABLE) && (e = null);
        d(e)
    })
};
h.Z.SA = function(a, c, d) {
    d = d.Ja.yf();
    a = a.toLowerCase();
    for (var e = 0, f; f = d[e]; e++)
        if (f.name.toLowerCase() == a && f.type != c) return f;
    return null
};
h.Z.RA = function(a, c) {
    c = c.Ja.yf();
    a = a.toLowerCase();
    for (var d = 0, e; e = c[d]; d++)
        if (e.name.toLowerCase() == a) return e;
    return null
};
h.Z.op = function(a) {
    var c = h.g.xml.createElement("field");
    c.setAttribute("name", "VAR");
    c.setAttribute("id", a.ob());
    c.setAttribute("variabletype", a.type);
    a = h.g.xml.createTextNode(a.name);
    c.appendChild(a);
    return c
};
h.Z.XG = function(a, c, d, e) {
    var f = h.Z.Cf(a, c, d, e);
    f || (f = h.Z.dz(a, c, d, e));
    return f
};
h.Z.Cf = function(a, c, d, e) {
    var f = a.Ci;
    if (c) {
        var g = a.Df(c);
        !g && f && (g = f.Df(c));
        if (g) return g
    }
    if (d) {
        if (void 0 == e) throw Error("Tried to look up a variable by name without a type");
        g = a.Cf(d, e);
        !g && f && (g = f.Cf(d, e))
    }
    return g
};
h.Z.dz = function(a, c, d, e) {
    var f = a.Ci;
    d || (d = h.Z.Gz(a.qe ? a.lh : a));
    return f ? f.Jd(d, e, c) : a.Jd(d, e, c)
};
h.Z.du = function(a, c) {
    a = a.yf();
    var d = [];
    if (c.length != a.length)
        for (var e = 0; e < a.length; e++) {
            var f = a[e]; - 1 == c.indexOf(f) && d.push(f)
        }
    return d
};
h.VERSION = "uncompiled";
h.kk = null;
h.selected = null;
h.cursor = null;
h.$e = !1;
h.Oj = [];
h.yj = null;
h.Wl = null;
h.Jo = null;
h.EG = null;
h.MB = function(a) {
    return {
        width: a.gt,
        height: a.et
    }
};
h.tH = function(a) {
    Qb(a)
};
h.Rk = function(a) {
    for (; a.options.Ac;) a = a.options.Ac;
    var c = z(a),
        d = c.parentNode;
    if (d) {
        var e = d.offsetWidth;
        d = d.offsetHeight;
        c.gt != e && (c.setAttribute("width", e + "px"), c.gt = e);
        c.et != d && (c.setAttribute("height", d + "px"), c.et = d);
        a.resize()
    }
};
h.ZA = function(a) {
    var c = h.kk;
    if (!(h.g.Km(a) || c.ca && !c.isVisible()))
        if (c.options.readOnly) h.navigation.nv(a);
        else {
            var d = !1;
            if (a.keyCode == h.g.rb.Nr) h.jc(), h.navigation.Xg(h.navigation.sn);
            else {
                if (h.navigation.nv(a)) return;
                if (a.keyCode == h.g.rb.vw || a.keyCode == h.g.rb.aj) {
                    a.preventDefault();
                    if (h.Ah.Hp()) return;
                    h.selected && h.selected.Pc() && (d = !0)
                } else if (a.altKey || a.ctrlKey || a.metaKey) {
                    if (h.Ah.Hp()) return;
                    h.selected && h.selected.Pc() && h.selected.Dc() && (a.keyCode == h.g.rb.Aw ? (h.jc(), h.No(h.selected)) : a.keyCode !=
                        h.g.rb.Ws || h.selected.C.qe || (h.No(h.selected), d = !0));
                    a.keyCode == h.g.rb.ey ? h.yj && (a = h.Wl, a.qe && (a = a.lh), h.Jo && Sa(a, h.Jo) && (h.i.ga(!0), zc(a), h.i.ga(!1))) : a.keyCode == h.g.rb.ny && (h.jc(), c.hr(a.shiftKey))
                }
            }
            d && !h.selected.C.qe && (h.i.ga(!0), h.jc(), h.selected.I(!0, !0), h.i.ga(!1))
        }
};
h.No = function(a) {
    if (a.Pu) var c = a.$q();
    else {
        c = h.K.sf(a, !0);
        h.K.hz(c);
        var d = a.Ha();
        c.setAttribute("x", a.H ? -d.x : d.x);
        c.setAttribute("y", d.y)
    }
    h.yj = c;
    h.Wl = a.C;
    h.Jo = a.Pu ? null : h.g.pp(a, !0)
};
h.Rt = function(a) {
    var c = h.yj,
        d = h.Wl;
    h.No(a);
    zc(a.C);
    h.yj = c;
    h.Wl = d
};
h.nH = function(a) {
    h.g.Km(a) || a.preventDefault()
};
h.jc = function(a) {
    h.F.va();
    h.W.va();
    h.A.Fp();
    a || (a = h.Za(), a.bc && a.bc.P && a.bc.P.va(), a.sa && a.sa.P && a.sa.P.Qh && a.sa.HG())
};
h.Za = function() {
    return h.kk
};
h.alert = function(a, c) {
    alert(a);
    c && c()
};
h.confirm = function(a, c) {
    c(confirm(a))
};
h.prompt = function(a, c, d) {
    d(prompt(a, c))
};
h.CA = function(a) {
    return function() {
        $b(this, a)
    }
};
h.MG = function(a) {
    for (var c = 0; c < a.length; c++) {
        var d = a[c];
        if (d) {
            var e = d.type;
            null == e || "" === e ? console.warn("Block definition #" + c + " in JSON array is missing a type attribute. Skipping.") : (h.Hb[e] && console.warn("Block definition #" + c + ' in JSON array overwrites prior definition of "' + e + '".'), h.Hb[e] = {
                wa: h.CA(d)
            })
        } else console.warn("Block definition #" + c + " in JSON array is " + d + ". Skipping.")
    }
};
h.ra = function(a, c, d, e, f, g) {
    function k(t) {
        var B = !f;
        t = h.Touch.HB(t);
        for (var R = 0, W; W = t[R]; R++)
            if (!B || h.Touch.Sq(W)) h.Touch.zB(W), d ? e.call(d, W) : e(W), l = !0
    }
    var l = !1,
        m = [];
    if (h.g.global.PointerEvent && c in h.Touch.ae)
        for (var n = 0, q; q = h.Touch.ae[c][n]; n++) a.addEventListener(q, k, !1), m.push([a, q, k]);
    else if (a.addEventListener(c, k, !1), m.push([a, c, k]), c in h.Touch.ae) {
        var r = function(t) {
            k(t);
            var B = !g;
            l && B && t.preventDefault()
        };
        for (n = 0; q = h.Touch.ae[c][n]; n++) a.addEventListener(q, r, !1), m.push([a, q, r])
    }
    return m
};
h.Xb = function(a, c, d, e) {
    function f(n) {
        d ? e.call(d, n) : e(n)
    }
    var g = [];
    if (h.g.global.PointerEvent && c in h.Touch.ae)
        for (var k = 0, l; l = h.Touch.ae[c][k]; k++) a.addEventListener(l, f, !1), g.push([a, l, f]);
    else if (a.addEventListener(c, f, !1), g.push([a, c, f]), c in h.Touch.ae) {
        var m = function(n) {
            if (n.changedTouches && 1 == n.changedTouches.length) {
                var q = n.changedTouches[0];
                n.clientX = q.clientX;
                n.clientY = q.clientY
            }
            f(n);
            n.preventDefault()
        };
        for (k = 0; l = h.Touch.ae[c][k]; k++) a.addEventListener(l, m, !1), g.push([a, l, m])
    }
    return g
};
h.fb = function(a) {
    for (; a.length;) {
        var c = a.pop();
        c[0].removeEventListener(c[1], c[2], !1)
    }
};
h.AA = function(a) {
    return /^\s*-?\d+(\.\d+)?\s*$/.test(a)
};
h.lA = function(a) {
    return h.g.yb.kA(a)
};
h.My = function() {
    h.hc("LOGIC_HUE", ["Blocks", "logic", "HUE"], void 0);
    h.hc("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
    h.hc("LOOPS_HUE", ["Blocks", "loops", "HUE"], void 0);
    h.hc("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
    h.hc("MATH_HUE", ["Blocks", "math", "HUE"], void 0);
    h.hc("MATH_HUE", ["Constants", "Math", "HUE"], 230);
    h.hc("TEXTS_HUE", ["Blocks", "texts", "HUE"], void 0);
    h.hc("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
    h.hc("LISTS_HUE", ["Blocks", "lists", "HUE"], void 0);
    h.hc("LISTS_HUE", ["Constants", "Lists", "HUE"],
        260);
    h.hc("COLOUR_HUE", ["Blocks", "colour", "HUE"], void 0);
    h.hc("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
    h.hc("VARIABLES_HUE", ["Blocks", "variables", "HUE"], void 0);
    h.hc("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
    h.hc("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
    h.hc("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"], void 0)
};
h.hc = function(a, c, d) {
    for (var e = "Blockly", f = h, g = 0; g < c.length; ++g) e += "." + c[g], f && (f = f[c[g]]);
    f && f !== d && (a = (void 0 === d ? '%1 has been removed. Use Blockly.Msg["%2"].' : '%1 is deprecated and unused. Override Blockly.Msg["%2"].').replace("%1", e).replace("%2", a), console.warn(a))
};
var Hc = {
        ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
        be: "\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0456",
        "be-tarask": "Tara\u0161kievica",
        bg: "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",
        bn: "\u09ac\u09be\u0982\u09b2\u09be",
        br: "Brezhoneg",
        cs: "\u010cesky",
        da: "Dansk",
        de: "Deutsch",
        el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
        en: "English",
        es: "Espa\u00f1ol",
        eu: "Euskara",
        fa: "\u0641\u0627\u0631\u0633\u06cc",
        fi: "Suomi",
        fr: "Fran\u00e7ais",
        gl: "Galego",
        ha: "Hausa",
        he: "\u05e2\u05d1\u05e8\u05d9\u05ea",
        hi: "\u0939\u093f\u0928\u094d\u0926\u0940",
        hu: "Magyar",
        hy: "\u0570\u0561\u0575\u0565\u0580\u0567\u0576",
        ia: "Interlingua",
        id: "Bahasa Indonesia",
        ig: "As\u1ee5s\u1ee5 Igbo",
        is: "\u00cdslenska",
        it: "Italiano",
        ja: "\u65e5\u672c\u8a9e",
        kab: "Taqbaylit",
        ko: "\ud55c\uad6d\uc5b4",
        lt: "Lietuvi\u0173",
        lv: "Latvie\u0161u",
        ms: "Bahasa Melayu",
        my: "\u1019\u103c\u1014\u103a\u1019\u102c\u1005\u102c",
        nb: "Norsk Bokm\u00e5l",
        nl: "Nederlands, Vlaams",
        pl: "Polski",
        pms: "Piemont\u00e8is",
        pt: "Portugu\u00eas",
        "pt-br": "Portugu\u00eas Brasileiro",
        ro: "Rom\u00e2n\u0103",
        ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
        sc: "Sardu",
        sk: "Sloven\u010dina",
        sl: "Sloven\u0161\u010dina",
        sq: "Shqip",
        sr: "\u0421\u0440\u043f\u0441\u043a\u0438",
        sv: "Svenska",
        th: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
        tr: "T\u00fcrk\u00e7e",
        uk: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
        ur: "\u0627\u064f\u0631\u062f\u064f\u0648\u202c",
        vi: "Ti\u1ebfng Vi\u1ec7t",
        yo: "\u00c8d\u00e8 Yor\u00f9b\u00e1",
        "zh-hans": "\u7b80\u4f53\u4e2d\u6587",
        "zh-hant": "\u6b63\u9ad4\u4e2d\u6587"
    },
    Ic = "ace ar fa he mzn ps ur".split(" "),
    J = window.BlocklyGamesLang,
    Jc = window.BlocklyGamesLanguages,
    Kc = ".html" == window.location.pathname.substr(-5),
    H = null;

function Lc(a, c, d) {
    var e = Number;
    a = (a = window.location.search.match(new RegExp("[?&]" + a + "=([^&]+)"))) ? decodeURIComponent(a[1].replace(/\+/g, "%20")) : "NaN";
    e = e(a);
    return isNaN(e) ? c : h.g.pd.wj(c, e, d)
}
var K = Lc("level", 1, 10);

function Mc() {
    document.title = document.getElementById("title").textContent;
    document.dir = -1 != Ic.indexOf(J) ? "rtl" : "ltr";
    document.head.parentElement.setAttribute("lang", J);
    var a = document.getElementById("languageMenu");
    if (a) {
        for (var c = [], d = 0; d < Jc.length; d++) {
            var e = Jc[d];
            c.push([Hc[e], e])
        }
        c.sort(function(g, k) {
            return g[0] > k[0] ? 1 : g[0] < k[0] ? -1 : 0
        });
        for (d = a.options.length = 0; d < c.length; d++) {
            var f = c[d];
            e = f[1];
            f = new Option(f[0], e);
            e == J && (f.selected = !0);
            a.options.add(f)
        }
        1 >= a.options.length && (a.style.display = "none")
    }
    for (d =
        1; 10 >= d; d++) a = document.getElementById("level" + d), c = !!Nc(d), a && c && (a.className += " level_done");
    (d = document.querySelector('meta[name="viewport"]')) && 725 > screen.availWidth && d.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
    setTimeout(Oc, 1)
}

function Nc(a) {
    var c = Pc;
    try {
        var d = window.localStorage[c + a]
    } catch (e) {}
    return d
}

function L(a) {
    var c;
    (c = document.getElementById(a)) ? (c = c.textContent, c = c.replace(/\\n/g, "\n")) : c = null;
    return null === c ? "[Unknown message: " + a + "]" : c
}

function Qc(a, c) {
    if (!a) throw TypeError("Element not found: " + a);
    "string" == typeof a && (a = document.getElementById(a));
    a.addEventListener("click", c, !0);
    a.addEventListener("touchend", c, !0)
}

function Oc() {
    if (!Kc) {
        window.GoogleAnalyticsObject = "GoogleAnalyticsFunction";
        var a = function(d) {
            (a.q = a.q || []).push(arguments)
        };
        window.GoogleAnalyticsFunction = a;
        a.l = 1 * new Date;
        var c = document.createElement("script");
        c.async = 1;
        c.src = "//www.google-analytics.com/analytics.js";
        document.head.appendChild(c);
        a("create", "UA-50448074-1", "auto");
        a("send", "pageview")
    }
};
h.g.u = {};
h.g.u.Aa = function(a, c) {
    return " " + a + "," + c + " "
};
h.g.u.curve = function(a, c) {
    return " " + a + c.join("")
};
h.g.u.moveTo = function(a, c) {
    return " M " + a + "," + c + " "
};
h.g.u.moveBy = function(a, c) {
    return " m " + a + "," + c + " "
};
h.g.u.lineTo = function(a, c) {
    return " l " + a + "," + c + " "
};
h.g.u.line = function(a) {
    return " l" + a.join("")
};
h.g.u.T = function(a, c) {
    return " " + a + " " + c + " "
};
h.g.u.arc = function(a, c, d, e) {
    return a + " " + d + " " + d + " " + c + e
};
h.j.gg = function() {
    this.Zd = 0;
    this.Qx = 3;
    this.Yd = 5;
    this.gs = 8;
    this.pc = 10;
    this.Ks = this.Yd;
    this.lo = 15;
    this.kj = 5;
    this.rf = 8;
    this.Gx = 15;
    this.Fx = 4;
    this.Cx = 12;
    this.Qw = 16;
    this.ab = 8;
    this.Al = 15;
    this.Vx = 0;
    this.Wx = 20;
    this.ww = 4;
    this.Tx = 15;
    this.Ux = 100;
    this.Sx = 15;
    this.Rn = 24;
    this.Sw = 14.5;
    this.Rw = this.lo + 11;
    this.Uw = 2;
    this.Tw = this.Rn;
    this.Gs = h.g.u.moveBy(0, 0);
    this.nx = 12;
    this.ox = 6
};
b = h.j.gg.prototype;
b.wa = function() {
    this.Dh = this.Yp();
    this.Gh = this.Zp();
    this.Le = this.aq();
    this.mg = this.$p();
    var a = this.ab,
        c = h.g.u.arc("a", "0 0,0", a, h.g.u.Aa(-a, a)),
        d = h.g.u.arc("a", "0 0,0", a, h.g.u.Aa(a, a));
    this.fj = {
        width: a,
        height: a,
        vq: c,
        Zm: d
    };
    c = this.ab;
    a = h.g.u.moveBy(0, c) + h.g.u.arc("a", "0 0,1", c, h.g.u.Aa(c, -c));
    c = h.g.u.arc("a", "0 0,1", c, h.g.u.Aa(-c, -c));
    this.ts = {
        er: a,
        Co: c
    }
};
b.Yp = function() {
    var a = this.nx,
        c = this.ox,
        d = h.g.u.line([h.g.u.Aa(6, 3), h.g.u.Aa(-12, 6), h.g.u.Aa(6, 3)]);
    return {
        height: a,
        width: c,
        path: d
    }
};
b.aq = function() {
    var a = this.Tx,
        c = this.Ux,
        d = h.g.u.curve("c", [h.g.u.Aa(30, -a), h.g.u.Aa(70, -a), h.g.u.Aa(c, 0)]);
    return {
        height: a,
        width: c,
        path: d
    }
};
b.$p = function() {
    function a(g) {
        g = g ? -1 : 1;
        var k = -g,
            l = d / 2,
            m = h.g.u.Aa(c, g * l);
        return h.g.u.curve("c", [h.g.u.Aa(0, g * (l + 2.5)), h.g.u.Aa(-c, k * (l + .5)), h.g.u.Aa(-c, g * l)]) + h.g.u.curve("s", [h.g.u.Aa(c, 2.5 * k), m])
    }
    var c = this.rf,
        d = this.lo,
        e = a(!0),
        f = a(!1);
    return {
        width: c,
        height: d,
        sd: f,
        vk: e
    }
};
b.Zp = function() {
    function a(k) {
        return h.g.u.line([h.g.u.Aa(k * e, d), h.g.u.Aa(3 * k, 0), h.g.u.Aa(k * e, -d)])
    }
    var c = this.Gx,
        d = this.Fx,
        e = (c - 3) / 2,
        f = a(1),
        g = a(-1);
    return {
        width: c,
        height: d,
        Vf: f,
        rv: g
    }
};
h.j.o = {
    NONE: 0,
    Zc: 1,
    Pr: 2,
    Rr: 4,
    ho: 8,
    wr: 16,
    Wr: 32,
    Or: 64,
    Ie: 128,
    Ur: 256,
    Hs: 512,
    Ew: 1024,
    Wn: 2048,
    Sn: 4096,
    Jx: 8192,
    Dn: 16384,
    On: 32768,
    Nn: 65536,
    $n: 131072,
    Zn: 262144,
    $r: 524288,
    bo: 1048576,
    no: 2097152,
    yn: 4194304,
    Vr: 8388608
};
h.j.o.OD = h.j.o.On | h.j.o.Nn;
h.j.o.GF = h.j.o.$n | h.j.o.Zn;
h.j.o.lq = 16777216;
h.j.o.jb = function() {
    h.j.o.hasOwnProperty(void 0) || (h.j.o[void 0] = h.j.o.lq, h.j.o.lq <<= 1);
    return h.j.o[void 0]
};
h.j.o.fk = function(a) {
    return a.type & h.j.o.Zc
};
h.j.o.Pg = function(a) {
    return a.type & h.j.o.Pr
};
h.j.o.pi = function(a) {
    return a.type & h.j.o.Rr
};
h.j.o.Nd = function(a) {
    return a.type & h.j.o.ho
};
h.j.o.cH = function(a) {
    return a.type & h.j.o.Wr
};
h.j.o.Md = function(a) {
    return a.type & h.j.o.Ie
};
h.j.o.ek = function(a) {
    return a.type & h.j.o.Or
};
h.j.o.Jf = function(a) {
    return a.type & h.j.o.Ur
};
h.j.o.ik = function(a) {
    return a.type & h.j.o.Hs
};
h.j.o.ti = function(a) {
    return a.type & h.j.o.Wn
};
h.j.o.Mf = function(a) {
    return a.type & h.j.o.Sn
};
h.j.o.BA = function(a) {
    return a.type & (h.j.o.Wn | h.j.o.Sn)
};
h.j.o.Lf = function(a) {
    return a.type & h.j.o.Nn
};
h.j.o.eH = function(a) {
    return a.type & h.j.o.Zn
};
h.j.o.hk = function(a) {
    return a.type & h.j.o.On
};
h.j.o.fH = function(a) {
    return a.type & h.j.o.$n
};
h.j.o.bH = function(a) {
    return a.type & h.j.o.Dn
};
h.j.o.Qu = function(a) {
    return a.type & h.j.o.$r
};
h.j.o.gH = function(a) {
    return a.type & h.j.o.bo
};
h.j.o.aH = function(a) {
    return a.type & h.j.o.wr
};
h.j.o.Lm = function(a) {
    return a.type & h.j.o.no
};
h.j.o.Em = function(a) {
    return a.type & h.j.o.yn
};
h.j.o.hH = function(a) {
    return a.type & (h.j.o.no | h.j.o.yn)
};
h.j.o.dH = function(a) {
    return a.type & h.j.o.Vr
};
h.j.mf = function(a) {
    this.height = this.width = 0;
    this.type = h.j.o.NONE;
    this.tf = this.xa = 0;
    this.v = a;
    this.rd = this.v.Al
};
h.j.ea = function(a, c) {
    h.j.ea.w.constructor.call(this, a);
    this.Mo = c;
    a: switch (a = this.v, c.type) {
        case h.Oa:
        case h.zd:
            c = a.mg;
            break a;
        case h.Bd:
        case h.Ca:
            c = a.Gh;
            break a;
        default:
            throw Error("Unknown connection type");
    }
    this.shape = c;
    this.type |= h.j.o.Ew
};
h.g.object.S(h.j.ea, h.j.mf);
h.j.Vn = function(a, c) {
    h.j.Vn.w.constructor.call(this, a, c);
    this.type |= h.j.o.Jx;
    this.height = this.shape.height;
    this.width = this.shape.width;
    this.fd = this.v.kj;
    this.Uc = this.width
};
h.g.object.S(h.j.Vn, h.j.ea);
h.j.Xn = function(a, c) {
    h.j.Xn.w.constructor.call(this, a, c);
    this.type |= h.j.o.Wn;
    this.height = this.shape.height;
    this.width = this.shape.width
};
h.g.object.S(h.j.Xn, h.j.ea);
h.j.Tn = function(a, c) {
    h.j.Tn.w.constructor.call(this, a, c);
    this.type |= h.j.o.Sn;
    this.height = this.shape.height;
    this.width = this.shape.width
};
h.g.object.S(h.j.Tn, h.j.ea);
h.j.hj = function(a, c) {
    h.j.hj.w.constructor.call(this, a, c.connection);
    this.type |= h.j.o.Ie;
    this.input = c;
    this.align = c.align;
    (this.xg = c.connection && x(c.connection) ? x(c.connection) : null) ? (a = A(this.xg), this.Bj = a.width, this.Yl = a.height) : this.Yl = this.Bj = 0;
    this.connection = c.connection;
    this.fd = 0
};
h.g.object.S(h.j.hj, h.j.ea);
h.j.jf = function(a, c) {
    h.j.jf.w.constructor.call(this, a, c);
    this.type |= h.j.o.Ur;
    this.xg ? (this.width = this.Bj, this.height = this.Yl) : (this.height = this.v.Rw, this.width = this.shape.width + this.v.Sw);
    this.fd = this.v.kj;
    this.Cj = this.shape.height;
    this.vf = this.shape.width
};
h.g.object.S(h.j.jf, h.j.hj);
h.j.qf = function(a, c) {
    h.j.qf.w.constructor.call(this, a, c);
    this.type |= h.j.o.Hs;
    this.height = this.xg ? this.Yl + this.v.Vx : this.v.Tw;
    this.width = this.v.Al + this.shape.width
};
h.g.object.S(h.j.qf, h.j.hj);
h.j.ul = function(a, c) {
    h.j.ul.w.constructor.call(this, a, c);
    this.type |= h.j.o.Or;
    this.height = this.xg ? this.Yl - 2 * this.v.kj : this.shape.height;
    this.width = this.shape.width + this.v.Uw;
    this.fd = this.v.kj;
    this.Cj = this.shape.height;
    this.vf = this.shape.width
};
h.g.object.S(h.j.ul, h.j.hj);
h.j.Je = function(a, c) {
    h.j.Je.w.constructor.call(this, a);
    this.icon = c;
    this.isVisible = c.isVisible();
    this.type |= h.j.o.Rr;
    a = new h.g.Cd(h.Je.prototype.Gl, h.Je.prototype.Gl - 2);
    this.height = a.height;
    this.width = a.width
};
h.g.object.S(h.j.Je, h.j.mf);
h.j.Mn = function(a) {
    h.j.Mn.w.constructor.call(this, a);
    this.type |= h.j.o.$r;
    this.height = this.v.Dh.height;
    this.width = this.v.Dh.width
};
h.g.object.S(h.j.Mn, h.j.mf);
h.j.Ea = function(a, c) {
    h.j.Ea.w.constructor.call(this, a);
    this.Wt = c;
    this.Qc = c.Wd && !!c.D && c.D.Qc();
    this.Cz = c.lu();
    this.type |= h.j.o.Zc;
    a = this.Wt.We();
    this.height = a.height;
    this.width = a.width
};
h.g.object.S(h.j.Ea, h.j.mf);
h.j.In = function(a) {
    h.j.In.w.constructor.call(this, a);
    this.type |= h.j.o.Pr;
    this.height = this.v.Le.height;
    this.width = this.v.Le.width;
    this.Ph = this.height
};
h.g.object.S(h.j.In, h.j.mf);
h.j.Ml = function(a, c) {
    h.j.Ml.w.constructor.call(this, a);
    this.type = (c && "left" != c ? h.j.o.$n : h.j.o.On) | h.j.o.Dn;
    this.width = this.height = this.v.Zd
};
h.g.object.S(h.j.Ml, h.j.mf);
h.j.Fl = function(a, c) {
    h.j.Fl.w.constructor.call(this, a);
    this.type = (c && "left" != c ? h.j.o.Zn : h.j.o.Nn) | h.j.o.Dn;
    this.width = this.v.ab;
    this.height = this.v.ab / 2
};
h.g.object.S(h.j.Fl, h.j.mf);
h.j.Bh = function(a, c) {
    h.j.Bh.w.constructor.call(this, a);
    this.type = this.type | h.j.o.ho | h.j.o.Wr;
    this.width = c;
    this.height = this.v.Sx
};
h.g.object.S(h.j.Bh, h.j.mf);
h.j.og = function(a) {
    this.type = h.j.o.bo;
    this.elements = [];
    this.xa = this.Vb = this.Ce = this.minWidth = this.minHeight = this.width = this.height = 0;
    this.Du = this.ym = this.Dp = this.wc = this.Ig = !1;
    this.v = a;
    this.rd = this.v.Al
};
h.j.og.prototype.measure = function() {
    throw Error("Unexpected attempt to measure a base Row.");
};

function M(a) {
    for (var c = a.elements.length - 1, d; d = a.elements[c]; c--)
        if (h.j.o.Md(d)) return d;
    return null
}
h.j.og.prototype.Vq = function() {
    return !0
};
h.j.og.prototype.Ut = function() {
    return !0
};

function Rc(a) {
    for (var c = a.elements.length - 1, d; d = a.elements[c]; c--)
        if (h.j.o.Nd(d)) return d;
    return null
}
h.j.Nh = function(a) {
    h.j.Nh.w.constructor.call(this, a);
    this.type |= h.j.o.no;
    this.Ph = this.Pe = 0;
    this.hA = !1;
    this.connection = null
};
h.g.object.S(h.j.Nh, h.j.og);
h.j.Nh.prototype.Ep = function(a) {
    var c = a.Xe ? "cap" === a.Xe : h.ma.Le,
        d = a.R && x(a.R);
    return !!a.M || c || (d ? u(d) == a : !1)
};
h.j.Nh.prototype.measure = function() {
    for (var a = 0, c = 0, d = 0, e = 0, f; f = this.elements[e]; e++) c += f.width, h.j.o.Nd(f) || (h.j.o.Pg(f) ? d = Math.max(d, f.Ph) : a = Math.max(a, f.height));
    this.width = Math.max(this.minWidth, c);
    this.height = Math.max(this.minHeight, a) + d;
    this.Pe = this.Ph = d;
    this.Ce = this.width
};
h.j.Nh.prototype.Vq = function() {
    return !1
};
h.j.vh = function(a) {
    h.j.vh.w.constructor.call(this, a);
    this.type |= h.j.o.yn;
    this.Eu = !1;
    this.connection = null;
    this.tg = this.Lj = 0
};
h.g.object.S(h.j.vh, h.j.og);
h.j.vh.prototype.Ep = function(a) {
    return !!a.M || !!u(a)
};
h.j.vh.prototype.measure = function() {
    for (var a = 0, c = 0, d = 0, e = 0, f; f = this.elements[e]; e++) c += f.width, h.j.o.Nd(f) || (h.j.o.Mf(f) ? d = Math.max(d, f.height) : a = Math.max(a, f.height));
    this.width = Math.max(this.minWidth, c);
    this.height = Math.max(this.minHeight, a) + d;
    this.Lj = d;
    this.Ce = this.width
};
h.j.vh.prototype.Vq = function() {
    return !1
};
h.j.Ll = function(a, c, d) {
    h.j.Ll.w.constructor.call(this, a);
    this.type = this.type | h.j.o.ho | h.j.o.wr;
    this.width = d;
    this.height = c;
    this.bu = !1;
    this.Ce = 0;
    this.elements = [new h.j.Bh(this.v, d)]
};
h.g.object.S(h.j.Ll, h.j.og);
h.j.Ll.prototype.measure = function() {};
h.j.Ch = function(a) {
    h.j.Ch.w.constructor.call(this, a);
    this.type |= h.j.o.Vr;
    this.wt = 0
};
h.g.object.S(h.j.Ch, h.j.og);
h.j.Ch.prototype.measure = function() {
    this.width = this.minWidth;
    this.height = this.minHeight;
    for (var a = 0, c = 0, d; d = this.elements[c]; c++) this.width += d.width, h.j.o.Md(d) && (h.j.o.ik(d) ? a += d.Bj : h.j.o.ek(d) && 0 != d.Bj && (a += d.Bj - d.vf)), h.j.o.Nd(d) || (this.height = Math.max(this.height, d.height));
    this.wt = a;
    this.Ce = this.width + a
};
h.j.Ch.prototype.Ut = function() {
    return !this.Ig && !this.wc
};
h.j.nf = function(a, c) {
    this.ka = c;
    this.cf = a;
    this.v = this.cf.v;
    this.M = c.M ? new h.j.Vn(this.v, c.M) : null;
    this.Mp = Tb(c) && !c.isCollapsed();
    this.isCollapsed = c.isCollapsed();
    this.Kf = c.Kf();
    this.H = c.H;
    this.ih = this.width = this.Vi = this.height = 0;
    this.rows = [];
    this.Iu = [];
    this.Ab = new h.j.Nh(this.v);
    this.ib = new h.j.vh(this.v);
    this.hn = this.Uc = 0
};
b = h.j.nf.prototype;
b.measure = function() {
    var a = this.ka.Xe ? "cap" === this.ka.Xe : h.ma.Le,
        c = !!this.ka.R;
    this.Ab.Ep(this.ka) ? this.Ab.elements.push(new h.j.Ml(this.v)) : this.Ab.elements.push(new h.j.Fl(this.v));
    a ? (a = new h.j.In(this.v), this.Ab.elements.push(a), this.Ab.Pe = a.Ph) : c && (this.Ab.hA = !0, this.Ab.connection = new h.j.Xn(this.v, this.ka.R), this.Ab.elements.push(this.Ab.connection));
    this.ka.N.length && this.ka.N[0].type == h.Ca && !this.ka.isCollapsed() ? this.Ab.minHeight = this.v.pc : this.Ab.minHeight = this.v.Yd;
    this.rows.push(this.Ab);
    a = new h.j.Ch(this.v);
    var d = ka(this.ka);
    if (d.length) {
        c = 0;
        for (var e; e = d[c]; c++) {
            var f = new h.j.Je(this.v, e);
            this.isCollapsed && e.ot ? this.Iu.push(f) : a.elements.push(f)
        }
    }
    e = null;
    for (c = 0; d = this.ka.N[c]; c++)
        if (d.isVisible()) {
            !e || d.type != h.Ca && e.type != h.Ca && (d.type != h.Oa && d.type != h.He || this.Mp) || (this.rows.push(a), a = new h.j.Ch(this.v));
            for (e = 0; f = d.Ma[e]; e++) a.elements.push(new h.j.Ea(this.v, f, d));
            this.at(d, a);
            e = d
        }
    this.isCollapsed && (a.Du = !0, a.elements.push(new h.j.Mn(this.v)));
    (a.elements.length || a.ym) && this.rows.push(a);
    this.ib.Eu = !!this.ka.V;
    this.ib.minHeight = this.ka.N.length && this.ka.N[this.ka.N.length - 1].type == h.Ca ? this.v.pc : this.v.Yd - 1;
    this.ib.Ep(this.ka) ? this.ib.elements.push(new h.j.Ml(this.v)) : this.ib.elements.push(new h.j.Fl(this.v));
    this.ib.Eu && (this.ib.connection = new h.j.Tn(this.v, this.ka.V), this.ib.elements.push(this.ib.connection));
    this.rows.push(this.ib);
    for (a = 0; c = this.rows[a]; a++) {
        d = c.elements;
        c.elements = [];
        c.Vq() && c.elements.push(new h.j.Bh(this.v, this.sm(null, d[0])));
        for (e = 0; e < d.length - 1; e++) c.elements.push(d[e]),
            c.elements.push(new h.j.Bh(this.v, this.sm(d[e], d[e + 1])));
        c.elements.push(d[d.length - 1]);
        c.Ut() && c.elements.push(new h.j.Bh(this.v, this.sm(d[d.length - 1], null)))
    }
    for (e = d = c = a = 0; f = this.rows[e]; e++) f.measure(), c = Math.max(c, f.width), f.wc && (a = Math.max(a, f.width - M(f).width)), d = Math.max(d, f.Ce);
    this.ih = a;
    this.width = c;
    for (e = 0; f = this.rows[e]; e++) f.wc && (f.ih = this.ih);
    this.Vi = Math.max(c, d);
    this.M && (this.Uc = this.M.width, this.width += this.M.width, this.Vi += this.M.width);
    for (a = 0; c = this.rows[a]; a++) c.wc ? (d = M(c), e = c.width -
        d.width, f = this.ih - this.Uc, (e = f - e) && this.qo(c, e), e = c.width, f = this.width - this.Uc - (this.v.fj.uH || 0), d.width += f - e, c.width += f - e, c.Ce = Math.max(c.width, this.ih + c.wt)) : (d = this.width - this.Uc - c.width) && this.qo(c, d);
    a = this.rows;
    this.rows = [];
    for (c = 0; c < a.length; c++) this.rows.push(a[c]), c != a.length - 1 && this.rows.push(Sc(this, a[c], a[c + 1]));
    this.Xt()
};
b.at = function(a, c) {
    this.Mp && a.type == h.Oa ? (c.elements.push(new h.j.jf(this.v, a)), c.Dp = !0) : a.type == h.Ca ? (c.elements.push(new h.j.qf(this.v, a)), c.wc = !0) : a.type == h.Oa ? (c.elements.push(new h.j.ul(this.v, a)), c.Ig = !0) : a.type == h.He && (c.ym = !0)
};
b.sm = function(a, c) {
    if (a && h.j.o.Md(a) && !c) {
        if (h.j.o.ek(a)) return this.v.Zd;
        if (h.j.o.Jf(a)) return this.v.pc;
        if (h.j.o.ik(a)) return this.v.Zd
    }
    return a && h.j.o.hk(a) && c && (h.j.o.ti(c) || h.j.o.Mf(c)) ? c.rd : a && h.j.o.Lf(a) && c && (h.j.o.ti(c) || h.j.o.Mf(c)) ? c.rd - this.v.ab : this.v.Yd
};
b.qo = function(a, c) {
    var d = Rc(a);
    d && (d.width += c, a.width += c)
};

function Sc(a, c, d) {
    a = new h.j.Ll(a.v, a.su(c, d), a.width - a.Uc);
    c.wc && (a.bu = !0);
    return a
}
b.su = function() {
    return this.v.Yd
};
b.ku = function(a, c) {
    return h.j.o.Nd(c) ? a.Vb + c.height / 2 : h.j.o.Em(a) ? (a = a.Vb + a.height - a.Lj, h.j.o.Mf(c) ? a + c.height / 2 : a - c.height / 2) : h.j.o.Lm(a) ? h.j.o.Pg(c) ? a.Pe - c.height / 2 : a.Pe + c.height / 2 : a.Vb + a.height / 2
};

function Tc(a, c) {
    for (var d = c.xa, e = 0, f; f = c.elements[e]; e++) h.j.o.Nd(f) && (f.height = c.height), f.xa = d, f.tf = a.ku(c, f), d += f.width
}
b.Xt = function() {
    for (var a = 0, c = 0, d = 0, e; e = this.rows[d]; d++) e.Vb = c, e.xa = this.Uc, c += e.height, a = Math.max(a, e.Ce), Tc(this, e);
    this.Vi = a + this.Uc;
    this.height = c;
    this.hn = this.Ab.Pe;
    this.ib.tg = c - this.ib.Lj
};
h.j.dc = function(a, c) {
    this.ka = a;
    this.aa = c;
    a.Ha();
    this.Dm = this.ta = "";
    this.v = c.cf.v
};
b = h.j.dc.prototype;
b.draw = function() {
    Uc(this);
    Vc(this);
    Wc(this);
    this.ka.Zg.Pq(this.ta + "\n" + this.Dm);
    this.aa.H && this.ka.Zg.mp();
    h.j.Zk && this.ka.Fq.vz(this.ka, this.aa);
    Xc(this)
};

function Xc(a) {
    a.ka.height = a.aa.height;
    a.ka.width = a.aa.Vi
}

function Uc(a) {
    for (var c = 0, d; d = a.aa.Iu[c]; c++) d.icon.pe.setAttribute("display", "none")
}

function Vc(a) {
    a.hp();
    for (var c = 1; c < a.aa.rows.length - 1; c++) {
        var d = a.aa.rows[c];
        d.Du ? a.Pj(d) : d.wc ? a.gp(d) : d.Ig ? a.ip(d) : a.fp(d)
    }
    a.bp();
    a.ep()
}
b.hp = function() {
    var a = this.aa.Ab,
        c = a.elements,
        d = this.aa.Ab;
    if (d.connection) {
        var e = d.xa + d.rd;
        fc(d.connection.Mo, this.aa.H ? -e : e, 0)
    }
    this.ta += h.g.u.moveBy(a.xa, this.aa.hn);
    for (d = 0; e = c[d]; d++) h.j.o.Lf(e) ? this.ta += this.v.ts.er : h.j.o.ti(e) ? this.ta += e.shape.Vf : h.j.o.Pg(e) ? this.ta += this.v.Le.path : h.j.o.Nd(e) && (this.ta += h.g.u.T("h", e.width));
    this.ta += h.g.u.T("v", a.height)
};
b.Pj = function(a) {
    this.ta += this.v.Dh.path + h.g.u.T("v", a.height - this.v.Dh.height)
};
b.ip = function(a) {
    var c = M(a);
    this.vv(a);
    var d = "function" == typeof c.shape.sd ? c.shape.sd(c.height) : c.shape.sd;
    this.ta += h.g.u.T("H", c.xa + c.width) + d + h.g.u.T("v", a.height - c.Cj)
};
b.gp = function(a) {
    var c = M(a);
    this.ta += h.g.u.T("H", c.xa + c.rd + c.shape.width) + (c.shape.rv + h.g.u.T("h", -(c.rd - this.v.fj.width)) + this.v.fj.vq) + h.g.u.T("v", a.height - 2 * this.v.fj.height) + this.v.fj.Zm + h.g.u.T("H", a.xa + a.width);
    this.yv(a)
};
b.fp = function(a) {
    this.ta += h.g.u.T("V", a.Vb + a.height)
};
b.bp = function() {
    var a = this.aa.ib,
        c = a.elements;
    this.xv();
    this.ta += h.g.u.T("V", a.tg);
    for (var d = c.length - 1, e; e = c[d]; d--) h.j.o.Mf(e) ? this.ta += e.shape.rv : h.j.o.hk(e) ? this.ta += h.g.u.T("H", a.xa) : h.j.o.Lf(e) ? this.ta += this.v.ts.Co : h.j.o.Nd(e) && (this.ta += h.g.u.T("h", -1 * e.width))
};
b.ep = function() {
    var a = this.aa.M;
    if (this.aa.M) {
        var c = this.aa.Uc;
        fc(this.ka.M, this.aa.H ? -c : c, this.aa.M.fd)
    }
    a && (c = a.fd + a.height, a = "function" == typeof a.shape.vk ? a.shape.vk(a.height) : a.shape.vk, this.ta += h.g.u.T("V", c) + a);
    this.ta += "z"
};

function Wc(a) {
    for (var c = 0, d; d = a.aa.rows[c]; c++)
        for (var e = 0, f; f = d.elements[e]; e++)
            if (h.j.o.Jf(f)) a.cp(f);
            else if (h.j.o.pi(f) || h.j.o.fk(f)) {
        var g = a;
        if (h.j.o.fk(f)) var k = f.Wt.Y();
        else h.j.o.pi(f) && (k = f.icon.pe);
        var l = f.tf - f.height / 2,
            m = f.xa,
            n = "";
        g.aa.H && (m = -(m + f.width), f.Cz && (m += f.width, n = "scale(-1 1)"));
        h.j.o.pi(f) ? (k.setAttribute("display", "block"), k.setAttribute("transform", "translate(" + m + "," + l + ")"), kc(f.icon)) : k.setAttribute("transform", "translate(" + m + "," + l + ")" + n);
        g.aa.Kf && k.setAttribute("display",
            "none")
    }
}
b.cp = function(a) {
    var c = a.width,
        d = a.height,
        e = a.fd,
        f = a.Cj + e;
    this.Dm += h.g.u.moveTo(a.xa + a.vf, a.tf - d / 2) + h.g.u.T("v", e) + a.shape.sd + h.g.u.T("v", d - f) + h.g.u.T("h", c - a.vf) + h.g.u.T("v", -d) + "z";
    this.wv(a)
};
b.wv = function(a) {
    var c = a.tf - a.height / 2;
    if (a.connection) {
        var d = a.xa + a.vf;
        this.aa.H && (d *= -1);
        fc(a.connection, d, c + a.fd)
    }
};
b.yv = function(a) {
    var c = M(a);
    if (c.connection) {
        var d = a.xa + a.ih + c.rd;
        this.aa.H && (d *= -1);
        fc(c.connection, d, a.Vb)
    }
};
b.vv = function(a) {
    var c = M(a);
    if (c.connection) {
        var d = a.xa + a.width;
        this.aa.H && (d *= -1);
        fc(c.connection, d, a.Vb)
    }
};
b.xv = function() {
    var a = this.aa.ib;
    if (a.connection) {
        a = a.connection;
        var c = a.xa;
        fc(a.Mo, this.aa.H ? -c : c, a.tf - a.height / 2)
    }
};
h.na = function(a, c) {
    this.s = a;
    this.Im = c;
    this.Ec = null;
    this.v = a.cf.v
};
h.na.ql = 5;
h.na.wh = 100;
h.na.mE = 24;
h.na.rG = 5;
h.na.Hl = 10;
h.na.zr = 2;
h.na.bx = .75;
h.na.ol = "#cc0a0a";
h.na.xx = "#4286f4";
h.na.Iw = "blocklyCursor";
h.na.wx = "blocklyMarker";
b = h.na.prototype;
b.Jj = null;
b.Y = function() {
    return this.J
};
b.La = function() {
    this.J = h.g.m.L("g", {
        "class": this.Im ? h.na.wx : h.na.Iw
    }, null);
    var a = this.Im ? h.na.xx : h.na.ol;
    this.Yb = h.g.m.L("g", {
        width: h.na.wh,
        height: h.na.ql
    }, this.J);
    this.Vh = h.g.m.L("rect", {
        x: "0",
        y: "0",
        fill: a,
        width: h.na.wh,
        height: h.na.ql,
        style: "display: none;"
    }, this.Yb);
    this.Wh = h.g.m.L("rect", {
        "class": "blocklyVerticalCursor",
        x: "0",
        y: "0",
        rx: "10",
        ry: "10",
        style: "display: none;",
        stroke: a
    }, this.Yb);
    this.Kj = h.g.m.L("path", {
        width: h.na.wh,
        height: h.na.ql,
        transform: "",
        style: "display: none;",
        fill: a
    }, this.Yb);
    this.Cg = h.g.m.L("path", {
        width: h.na.wh,
        height: h.na.ql,
        transform: "",
        style: "display: none;",
        fill: "none",
        stroke: a,
        "stroke-width": "4"
    }, this.Yb);
    this.Im || (h.g.m.L("animate", {
        attributeType: "XML",
        attributeName: "fill",
        dur: "1s",
        values: h.na.ol + ";transparent;transparent;",
        repeatCount: "indefinite"
    }, this.Vh), h.g.m.L("animate", {
        attributeType: "XML",
        attributeName: "fill",
        dur: "1s",
        values: h.na.ol + ";transparent;transparent;",
        repeatCount: "indefinite"
    }, this.Kj), h.g.m.L("animate", {
        attributeType: "XML",
        attributeName: "stroke",
        dur: "1s",
        values: h.na.ol + ";transparent;transparent;",
        repeatCount: "indefinite"
    }, this.Cg));
    return this.J
};

function Yc(a, c) {
    a.Im ? (a.Ec && a.Ec.Fk(null), c.Fk(a.Y())) : (a.Ec && a.Ec.Ek(null), c.Ek(a.Y()));
    a.Ec = c
}

function Zc(a, c) {
    if (c) {
        var d = c.width,
            e = c.height,
            f = e * h.na.bx;
        c.R ? (e = h.na.zr, d = h.g.u.moveBy(-1 * e, f) + h.g.u.T("V", -1 * e) + h.g.u.T("H", a.v.Al) + a.v.Gh.Vf + h.g.u.T("H", d + 2 * e) + h.g.u.T("V", f), a.Cg.setAttribute("d", d)) : c.M ? (d = h.g.u.moveBy(d, 0) + h.g.u.T("h", -1 * (d - a.v.mg.width)) + h.g.u.T("v", a.v.kj) + a.v.mg.sd + h.g.u.T("V", e) + h.g.u.T("H", d), a.Cg.setAttribute("d", d)) : (e = h.na.zr, d = h.g.u.moveBy(-1 * e, f) + h.g.u.T("V", -1 * e) + h.g.u.T("H", d + 2 * e) + h.g.u.T("V", f), a.Cg.setAttribute("d", d));
        a.s.H && a.Rj(a.Cg);
        a.Jj = a.Cg;
        Yc(a, c);
        $c(a)
    }
}

function $c(a) {
    a.va();
    a.Jj.style.display = ""
}

function ad(a, c, d, e) {
    a.Vh.setAttribute("x", c);
    a.Vh.setAttribute("y", d);
    a.Vh.setAttribute("width", e);
    a.Jj = a.Vh
}

function bd(a, c, d, e, f) {
    a.Wh.setAttribute("x", c);
    a.Wh.setAttribute("y", d);
    a.Wh.setAttribute("width", e);
    a.Wh.setAttribute("height", f);
    a.Jj = a.Wh
}
b.Rj = function(a) {
    a.setAttribute("transform", "scale(-1 1)")
};
b.va = function() {
    this.Vh.style.display = "none";
    this.Wh.style.display = "none";
    this.Kj.style.display = "none";
    this.Cg.style.display = "none"
};
b.draw = function(a) {
    if (a)
        if (a.jb() === h.B.types.Ic) Zc(this, a.ba);
        else if (a.jb() === h.B.types.Jh) Zc(this, a.ba.D);
    else if (a.ba.type === h.Oa) {
        var c = a.ba;
        a = c.D;
        var d = c.Wg.x;
        c = c.Wg.y;
        var e = h.g.u.moveTo(0, 0) + this.v.mg.sd;
        this.Kj.setAttribute("d", e);
        this.Kj.setAttribute("transform", "translate(" + d + "," + c + ")" + (this.s.H ? " scale(-1 1)" : ""));
        this.Jj = this.Kj;
        Yc(this, a);
        $c(this)
    } else if (a.ba.type === h.Ca) c = a.ba, a = c.D, d = 0, c = c.Wg.y, e = A(a).width, this.s.H && (d = -e), ad(this, d, c, e), Yc(this, a), $c(this);
    else if (a.jb() === h.B.types.Ad) Zc(this,
        a.ba.D);
    else if (a.jb() === h.B.types.Zc) a = a.ba, d = a.We().width, c = a.We().height, bd(this, 0, 0, d, c), Yc(this, a), $c(this);
    else if (a.jb() === h.B.types.sg) d = a.iw, a = d.x, d = d.y, this.s.H && (a -= h.na.wh), ad(this, a, d, h.na.wh), Yc(this, this.s), $c(this);
    else {
        if (a.jb() === h.B.types.$d) {
            a = a.ba;
            c = A(a);
            d = c.width + h.na.Hl;
            c = c.height + h.na.Hl;
            var f = e = -1 * h.na.Hl / 2,
                g = -1 * h.na.Hl / 2;
            this.s.H && (f = -(d + e));
            bd(this, f, g, d, c);
            Yc(this, a);
            $c(this)
        }
    } else this.va()
};
b.I = function() {
    this.J && h.g.m.removeNode(this.J)
};
h.j.pf = function() {
    this.v = null
};
b = h.j.pf.prototype;
b.wa = function() {
    this.v = this.Xu();
    this.v.wa()
};
b.Xu = function() {
    return new h.j.gg
};
b.$u = function(a) {
    return new h.j.nf(this, a)
};
b.Yu = function(a, c) {
    return new h.j.dc(a, c)
};
b.Zu = function(a) {
    return new h.j.ng(a)
};
b.Ba = function(a) {
    if (h.j.Zk && !a.Fq) {
        if (!h.j.Pw) throw Error("Missing require for Blockly.blockRendering.Debug");
        var c = new h.j.Pw;
        a.Fq = c
    }
    c = this.$u(a);
    c.measure();
    this.Yu(a, c).draw()
};
h.X = {};
h.X.gg = function() {
    h.X.gg.w.constructor.call(this);
    this.oc = 1
};
h.g.object.S(h.X.gg, h.j.gg);
h.X.Qr = function(a) {
    this.aa = a;
    this.ak = this.U = "";
    this.Wb = this.aa.H;
    a = a.cf;
    this.v = a.v;
    this.Ld = a.Ld;
    this.xc = this.Ld.Hh;
    this.tq = this.Ld.Kx;
    this.oi = this.Ld.mx;
    this.yk = this.Ld.mg;
    this.WA = this.Ld.Gh;
    this.JB = this.Ld.Le;
    this.Su = this.Ld.Dh
};
h.X.Qr.prototype.Pj = function(a) {
    this.aa.H && (this.U += h.g.u.T("H", a.width - this.xc), this.U += this.Su.Vf, this.U += h.g.u.T("v", a.height - this.Su.height - this.xc))
};

function cd(a, c) {
    var d = c.xa + c.width - a.xc;
    c.bu && (a.U += h.g.u.T("H", d));
    a.Wb && (a.U += h.g.u.T("H", d), c.height > a.xc && (a.U += h.g.u.T("V", c.Vb + c.height - a.xc)))
};
h.X.ng = function(a) {
    this.kh = a;
    this.Ok = h.g.m.L("path", {
        "class": "blocklyPathDark",
        transform: "translate(1,1)"
    }, this.kh);
    this.Pi = h.g.m.L("path", {
        "class": "blocklyPath"
    }, this.kh);
    this.Qk = h.g.m.L("path", {
        "class": "blocklyPathLight"
    }, this.kh)
};
h.X.ng.prototype.Pq = function(a, c) {
    this.Pi.setAttribute("d", a);
    this.Ok.setAttribute("d", a);
    this.Qk.setAttribute("d", c)
};
h.X.ng.prototype.mp = function() {
    this.Pi.setAttribute("transform", "scale(-1 1)");
    this.Qk.setAttribute("transform", "scale(-1 1)");
    this.Ok.setAttribute("transform", "translate(1,1) scale(-1 1)")
};
h.X.jf = function(a, c) {
    h.X.jf.w.constructor.call(this, a, c);
    this.xg && (this.width += this.v.oc, this.height += this.v.oc)
};
h.g.object.S(h.X.jf, h.j.jf);
h.X.qf = function(a, c) {
    h.X.qf.w.constructor.call(this, a, c);
    this.xg && (this.height += this.v.oc)
};
h.g.object.S(h.X.qf, h.j.qf);
h.X.nf = function(a, c) {
    h.X.nf.w.constructor.call(this, a, c)
};
h.g.object.S(h.X.nf, h.j.nf);
b = h.X.nf.prototype;
b.at = function(a, c) {
    this.Mp && a.type == h.Oa ? (c.elements.push(new h.X.jf(this.v, a)), c.Dp = !0) : a.type == h.Ca ? (c.elements.push(new h.X.qf(this.v, a)), c.wc = !0) : a.type == h.Oa ? (c.elements.push(new h.j.ul(this.v, a)), c.Ig = !0) : a.type == h.He && (c.ym = !0)
};
b.sm = function(a, c) {
    if (!a) return c && h.j.o.fk(c) && c.Qc ? this.v.Yd : c && h.j.o.Jf(c) ? this.v.gs : c && h.j.o.ik(c) ? this.v.Wx : this.v.pc;
    if (!h.j.o.Md(a) && !c) return h.j.o.fk(a) && a.Qc ? this.v.Yd : h.j.o.pi(a) ? 2 * this.v.pc + 1 : h.j.o.Pg(a) ? this.v.Zd : h.j.o.BA(a) ? this.v.pc : h.j.o.Lf(a) ? this.v.Cx : h.j.o.Qu(a) ? this.v.Zd : this.v.pc;
    if (h.j.o.Md(a) && !c) {
        if (h.j.o.ek(a)) return this.v.Zd;
        if (h.j.o.Jf(a)) return this.v.pc;
        if (h.j.o.ik(a)) return this.v.Zd
    }
    if (!h.j.o.Md(a) && c && h.j.o.Md(c)) {
        if (a.Qc) {
            if (h.j.o.Jf(c) || h.j.o.ek(c)) return this.v.Qx
        } else {
            if (h.j.o.Jf(c) ||
                h.j.o.ek(c)) return this.v.gs;
            if (h.j.o.ik(c)) return this.v.pc
        }
        return this.v.pc - 1
    }
    if (h.j.o.pi(a) && c && !h.j.o.Md(c)) return this.v.pc;
    if (h.j.o.Jf(a) && c && !h.j.o.Md(c)) return c.Qc ? this.v.Yd : this.v.pc;
    if (h.j.o.hk(a) && c) {
        if (h.j.o.Pg(c)) return this.v.Zd;
        if (h.j.o.ti(c)) return c.rd;
        if (h.j.o.Mf(c)) return a = (this.H ? 1 : -1) * this.v.oc / 2, c.rd + a
    }
    if (h.j.o.Lf(a) && c) {
        if (h.j.o.ti(c)) return c.rd - this.v.ab;
        if (h.j.o.Mf(c)) return a = (this.H ? 1 : -1) * this.v.oc / 2, c.rd - this.v.ab + a
    }
    return !h.j.o.Md(a) && c && !h.j.o.Md(c) && a.Qc == c.Qc || c &&
        h.j.o.Qu(c) ? this.v.pc : this.v.Yd
};
b.qo = function(a, c) {
    a: {
        var d = 0;
        for (var e; e = a.elements[d]; d++)
            if (h.j.o.Nd(e)) {
                d = e;
                break a
            }
        d = null
    }
    e = Rc(a);
    if (a.Ig || a.wc) a.Ce += c;
    var f = M(a);f ? f.align == h.vn ? e.width += c : f.align == h.nr ? (d.width += c / 2, e.width += c / 2) : f.align == h.pr && (d.width += c) : e.width += c;a.width += c
};
b.su = function(a, c) {
    return h.j.o.Lm(a) && h.j.o.Em(c) ? this.v.Qw : h.j.o.Lm(a) || h.j.o.Em(c) ? this.v.Zd : a.Ig && c.Ig ? this.v.pc : !a.wc && c.wc ? this.v.ww : a.wc && c.wc || !a.wc && c.ym ? this.v.pc : this.v.Yd
};
b.ku = function(a, c) {
    if (h.j.o.Nd(c)) return a.Vb + c.height / 2;
    if (h.j.o.Em(a)) return a = a.Vb + a.height - a.Lj, h.j.o.Mf(c) ? a + c.height / 2 : a - c.height / 2;
    if (h.j.o.Lm(a)) return h.j.o.Pg(c) ? a.Pe - c.height / 2 : a.Pe + c.height / 2;
    var d = a.Vb;
    h.j.o.fk(c) || h.j.o.pi(c) ? (d += c.height / 2, (a.Dp || a.wc) && c.height + this.v.Ks <= a.height && (d += this.v.Ks)) : d = h.j.o.Jf(c) ? d + c.height / 2 : d + a.height / 2;
    return d
};
b.Xt = function() {
    for (var a = 0, c = 0, d = 0, e; e = this.rows[d]; d++) {
        e.Vb = c;
        e.xa = this.Uc;
        c += e.height;
        a = Math.max(a, e.Ce);
        var f = c - this.Ab.Ph;
        e == this.ib && f < this.v.Rn && (f = this.v.Rn - f, this.ib.height += f, c += f);
        Tc(this, e)
    }
    this.ib.tg = c - this.ib.Lj;
    this.Vi = a + this.Uc + this.v.oc;
    this.width += this.v.oc;
    this.height = c + this.v.oc;
    this.hn = this.Ab.Pe
};
h.X.dc = function(a, c) {
    h.X.dc.w.constructor.call(this, a, c);
    this.oe = new h.X.Qr(c)
};
h.g.object.S(h.X.dc, h.j.dc);
b = h.X.dc.prototype;
b.draw = function() {
    Uc(this);
    Vc(this);
    Wc(this);
    var a = this.oe;
    this.ka.Zg.Pq(this.ta + "\n" + this.Dm, a.U + "\n" + a.ak);
    this.aa.H && this.ka.Zg.mp();
    h.j.Zk && this.ka.Fq.vz(this.ka, this.aa);
    Xc(this)
};
b.hp = function() {
    var a = this.oe,
        c = this.aa.Ab;
    a.U += h.g.u.moveBy(c.xa, a.aa.hn);
    for (var d = 0, e; e = c.elements[d]; d++) h.j.o.hk(e) ? a.U += a.Ld.Gs : h.j.o.Lf(e) ? a.U += a.tq.er(a.Wb) : h.j.o.ti(e) ? a.U += a.WA.Vf : h.j.o.Pg(e) ? a.U += a.JB.path(a.Wb) : h.j.o.Nd(e) && 0 != e.width && (a.U += h.g.u.T("H", e.xa + e.width - a.xc));
    a.U += h.g.u.T("H", c.xa + c.width - a.xc);
    cd(this.oe, this.aa.Ab);
    h.X.dc.w.hp.call(this)
};
b.Pj = function(a) {
    this.oe.Pj(a);
    h.X.dc.w.Pj.call(this, a)
};
b.ip = function(a) {
    var c = this.oe,
        d = M(a);
    if (c.Wb) {
        var e = a.height - d.Cj;
        c.U += h.g.u.moveTo(d.xa + d.width - c.xc, a.Vb) + c.yk.sd(c.Wb) + h.g.u.T("v", e)
    } else c.U += h.g.u.moveTo(d.xa + d.width, a.Vb) + c.yk.sd(c.Wb);
    h.X.dc.w.ip.call(this, a)
};
b.gp = function(a) {
    var c = this.oe,
        d = M(a);
    if (c.Wb) {
        var e = a.height - 2 * c.oi.height;
        c.U += h.g.u.moveTo(d.xa, a.Vb) + c.oi.vq(c.Wb) + h.g.u.T("v", e) + c.oi.Zm(c.Wb) + h.g.u.lineTo(a.width - d.xa - c.oi.width, 0)
    } else c.U += h.g.u.moveTo(d.xa, a.Vb + a.height) + c.oi.Zm(c.Wb) + h.g.u.lineTo(a.width - d.xa - c.oi.width, 0);
    h.X.dc.w.gp.call(this, a)
};
b.fp = function(a) {
    cd(this.oe, a);
    h.X.dc.w.fp.call(this, a)
};
b.bp = function() {
    var a = this.oe,
        c = this.aa.ib;
    if (a.Wb) a.U += h.g.u.T("V", c.tg - a.xc);
    else {
        var d = a.aa.ib.elements[0];
        h.j.o.hk(d) ? a.U += h.g.u.moveTo(c.xa + a.xc, c.tg - a.xc) : h.j.o.Lf(d) && (a.U += h.g.u.moveTo(c.xa, c.tg), a.U += a.tq.Co())
    }
    h.X.dc.w.bp.call(this)
};
b.ep = function() {
    var a = this.oe,
        c = a.aa.M;
    c && (c = c.fd + c.height, a.Wb ? a.U += h.g.u.moveTo(a.aa.Uc, c) : (a.U += h.g.u.moveTo(a.aa.Uc + a.xc, a.aa.ib.tg - a.xc), a.U += h.g.u.T("V", c)), a.U += a.yk.vk(a.Wb));
    a.Wb || (c = a.aa.Ab, a.U = h.j.o.Lf(c.elements[0]) ? a.U + h.g.u.T("V", a.tq.height) : a.U + h.g.u.T("V", c.Pe + a.xc));
    h.X.dc.w.ep.call(this)
};
b.cp = function(a) {
    var c = this.oe,
        d = c.xc,
        e = a.xa + a.vf,
        f = a.tf - a.height / 2,
        g = a.width - a.vf,
        k = f + d;
    if (c.Wb) {
        f = a.fd - d;
        var l = a.height - (a.fd + a.Cj) + d;
        c.ak += h.g.u.moveTo(e - d, k) + h.g.u.T("v", f) + c.yk.sd(c.Wb) + h.g.u.T("v", l) + h.g.u.T("h", g)
    } else c.ak += h.g.u.moveTo(a.xa + a.width + d, k) + h.g.u.T("v", a.height) + h.g.u.T("h", -g) + h.g.u.moveTo(e, f + a.fd) + c.yk.sd(c.Wb);
    h.X.dc.w.cp.call(this, a)
};
b.wv = function(a) {
    var c = a.tf - a.height / 2;
    if (a.connection) {
        var d = a.xa + a.vf + this.v.oc;
        this.aa.H && (d *= -1);
        fc(a.connection, d, c + a.fd + this.v.oc)
    }
};
b.yv = function(a) {
    var c = M(a);
    if (c.connection) {
        var d = a.xa + a.ih + c.rd;
        d = this.aa.H ? -1 * d : d + this.v.oc;
        fc(c.connection, d, a.Vb + this.v.oc)
    }
};
b.vv = function(a) {
    var c = M(a);
    if (c.connection) {
        var d = a.xa + a.width + this.v.oc;
        this.aa.H && (d *= -1);
        fc(c.connection, d, a.Vb)
    }
};
b.xv = function() {
    var a = this.aa.ib;
    if (a.connection) {
        a = a.connection;
        var c = a.xa;
        fc(a.Mo, (this.aa.H ? -c : c) + this.v.oc / 2, a.tf - a.height / 2 + this.v.oc)
    }
};
h.X.ej = function(a) {
    this.Uh = a;
    this.Hh = .5;
    this.Gs = h.g.u.moveBy(this.Hh, this.Hh);
    this.mx = dd(this);
    this.Kx = ed(this);
    this.mg = this.$p();
    this.Gh = this.Zp();
    this.Dh = this.Yp();
    this.Le = this.aq()
};

function dd(a) {
    var c = a.Uh.ab;
    a = a.Hh;
    var d = (1 - Math.SQRT1_2) * (c + a) - a,
        e = h.g.u.moveBy(d, d) + h.g.u.arc("a", "0 0,0", c, h.g.u.Aa(-d - a, c - d)),
        f = h.g.u.arc("a", "0 0,0", c + a, h.g.u.Aa(c + a, c + a)),
        g = h.g.u.moveBy(d, -d) + h.g.u.arc("a", "0 0,0", c + a, h.g.u.Aa(c - d, d + a));
    return {
        width: c + a,
        height: c,
        vq: function(k) {
            return k ? e : ""
        },
        Zm: function(k) {
            return k ? f : g
        }
    }
}

function ed(a) {
    var c = a.Uh.ab;
    a = a.Hh;
    var d = (1 - Math.SQRT1_2) * (c - a) + a,
        e = h.g.u.moveBy(d, d) + h.g.u.arc("a", "0 0,1", c - a, h.g.u.Aa(c - d, -d + a)),
        f = h.g.u.moveBy(a, c) + h.g.u.arc("a", "0 0,1", c - a, h.g.u.Aa(c, -c + a)),
        g = -d,
        k = h.g.u.moveBy(d, g) + h.g.u.arc("a", "0 0,1", c - a, h.g.u.Aa(-d + a, -g - c));
    return {
        height: c,
        er: function(l) {
            return l ? e : f
        },
        Co: function() {
            return k
        }
    }
}
h.X.ej.prototype.$p = function() {
    var a = this.Uh.rf,
        c = this.Uh.lo,
        d = h.g.u.moveBy(-2, -c + 3.4) + h.g.u.lineTo(-.45 * a, -2.1),
        e = h.g.u.T("v", 2.5) + h.g.u.moveBy(.97 * -a, 2.5) + h.g.u.curve("q", [h.g.u.Aa(.05 * -a, 10), h.g.u.Aa(.3 * a, 9.5)]) + h.g.u.moveBy(.67 * a, -1.9) + h.g.u.T("v", 2.5),
        f = h.g.u.T("v", -1.5) + h.g.u.moveBy(-.92 * a, -.5) + h.g.u.curve("q", [h.g.u.Aa(-.19 * a, -5.5), h.g.u.Aa(0, -11)]) + h.g.u.moveBy(.92 * a, 1),
        g = h.g.u.moveBy(-5, c - .7) + h.g.u.lineTo(.46 * a, -2.1);
    return {
        width: a,
        height: c,
        vk: function(k) {
            return k ? d : f
        },
        sd: function(k) {
            return k ?
                e : g
        }
    }
};
h.X.ej.prototype.Zp = function() {
    return {
        Vf: h.g.u.T("h", this.Hh) + this.Uh.Gh.Vf
    }
};
h.X.ej.prototype.Yp = function() {
    return {
        Vf: h.g.u.lineTo(5.1, 2.6) + h.g.u.moveBy(-10.2, 6.8) + h.g.u.lineTo(5.1, 2.6)
    }
};
h.X.ej.prototype.aq = function() {
    var a = this.Uh.Le.height,
        c = h.g.u.moveBy(25, -8.7) + h.g.u.curve("c", [h.g.u.Aa(29.7, -6.2), h.g.u.Aa(57.2, -.5), h.g.u.Aa(75, 8.7)]),
        d = h.g.u.curve("c", [h.g.u.Aa(17.8, -9.2), h.g.u.Aa(45.3, -14.9), h.g.u.Aa(75, -8.7)]) + h.g.u.moveTo(100.5, a + .5);
    return {
        path: function(e) {
            return e ? c : d
        }
    }
};
h.X.pf = function() {
    h.X.pf.w.constructor.call(this);
    this.Ld = null
};
h.g.object.S(h.X.pf, h.j.pf);
b = h.X.pf.prototype;
b.wa = function() {
    h.X.pf.w.wa.call(this);
    this.Ld = new h.X.ej(this.v)
};
b.Xu = function() {
    return new h.X.gg
};
b.$u = function(a) {
    return new h.X.nf(this, a)
};
b.Yu = function(a, c) {
    return new h.X.dc(a, c)
};
b.Zu = function(a) {
    return new h.X.ng(a)
};
h.j.register("geras", h.X.pf);
h.h.ADD_COMMENT = "Adicionar coment\u00e1rio";
h.h.CANNOT_DELETE_VARIABLE_PROCEDURE = "N\u00e3o se pode deletar a vari\u00e1vel '%1' porque \u00e9 parte da defini\u00e7\u00e3o da fun\u00e7\u00e3o '%2'";
h.h.CHANGE_VALUE_TITLE = "Mudar valor:";
h.h.CLEAN_UP = "Limpar blocos";
h.h.COLLAPSED_WARNINGS_WARNING = "Bloqueios recolhidos cont\u00eam avisos.";
h.h.COLLAPSE_ALL = "Colapsar Blocos";
h.h.COLLAPSE_BLOCK = "Colapsar Bloco";
h.h.COLOUR_BLEND_COLOUR1 = "cor 1";
h.h.COLOUR_BLEND_COLOUR2 = "cor 2";
h.h.COLOUR_BLEND_HELPURL = "https://meyerweb.com/eric/tools/color-blend/#:::rgbp";
h.h.COLOUR_BLEND_RATIO = "propor\u00e7\u00e3o";
h.h.COLOUR_BLEND_TITLE = "misturar";
h.h.COLOUR_BLEND_TOOLTIP = "Mistura duas cores em uma dada propor\u00e7\u00e3o (0,0 - 1,0).";
h.h.COLOUR_PICKER_HELPURL = "https://pt.wikipedia.org/wiki/Cor";
h.h.COLOUR_PICKER_TOOLTIP = "Escolher uma cor da palheta de cores.";
h.h.COLOUR_RANDOM_HELPURL = "http://randomcolour.com";
h.h.COLOUR_RANDOM_TITLE = "cor aleat\u00f3ria";
h.h.COLOUR_RANDOM_TOOLTIP = "Escolher cor de forma aleat\u00f3ria.";
h.h.COLOUR_RGB_BLUE = "azul";
h.h.COLOUR_RGB_GREEN = "verde";
h.h.COLOUR_RGB_HELPURL = "https://www.december.com/html/spec/colorpercompact.html";
h.h.COLOUR_RGB_RED = "vermelho";
h.h.COLOUR_RGB_TITLE = "colorir com";
h.h.COLOUR_RGB_TOOLTIP = "Criar uma cor com a quantidade especificada de vermelho, verde e azul. Todos os valores devem estar entre 0 e 100.";
h.h.CONTROLS_FLOW_STATEMENTS_HELPURL = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
h.h.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "encerra o la\u00e7o";
h.h.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "continua com a pr\u00f3xima itera\u00e7\u00e3o do la\u00e7o";
h.h.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Encerra o la\u00e7o.";
h.h.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = "Ignora o resto deste la\u00e7o, e continua com a pr\u00f3xima itera\u00e7\u00e3o.";
h.h.CONTROLS_FLOW_STATEMENTS_WARNING = "Aten\u00e7\u00e3o: Este bloco s\u00f3 pode ser usado dentro de um la\u00e7o.";
h.h.CONTROLS_FOREACH_HELPURL = "https://github.com/google/blockly/wiki/Loops#for-each";
h.h.CONTROLS_FOREACH_TITLE = "para cada item %1 na lista %2";
h.h.CONTROLS_FOREACH_TOOLTIP = "Para cada item em uma lista, atribua o item \u00e0 vari\u00e1vel '%1' e ent\u00e3o realize algumas instru\u00e7\u00f5es.";
h.h.CONTROLS_FOR_HELPURL = "https://github.com/google/blockly/wiki/Loops#count-with";
h.h.CONTROLS_FOR_TITLE = "contar com %1 de %2 at\u00e9 %3 por %4";
h.h.CONTROLS_FOR_TOOLTIP = "Fa\u00e7a com que a vari\u00e1vel '%1' assuma os valores do n\u00famero inicial ao n\u00famero final, contando de acordo com o intervalo especificado e execute os blocos especificados.";
h.h.CONTROLS_IF_ELSEIF_TOOLTIP = "Acrescente uma condi\u00e7\u00e3o para o bloco se.";
h.h.CONTROLS_IF_ELSE_TOOLTIP = "Acrescente uma condi\u00e7\u00e3o final para o bloco se.";
h.h.CONTROLS_IF_HELPURL = "https://github.com/google/blockly/wiki/IfElse";
h.h.CONTROLS_IF_IF_TOOLTIP = "Acrescente, remova ou reordene se\u00e7\u00f5es para reconfigurar este bloco.";
h.h.CONTROLS_IF_MSG_ELSE = "sen\u00e3o";
h.h.CONTROLS_IF_MSG_ELSEIF = "sen\u00e3o se";
h.h.CONTROLS_IF_MSG_IF = "se";
h.h.CONTROLS_IF_TOOLTIP_1 = "Se um valor for verdadeiro, ent\u00e3o realize algumas instru\u00e7\u00f5es.";
h.h.CONTROLS_IF_TOOLTIP_2 = "Se um valor for verdadeiro, ent\u00e3o realize o primeiro bloco de instru\u00e7\u00f5es. Sen\u00e3o, realize o segundo bloco de instru\u00e7\u00f5es.";
h.h.CONTROLS_IF_TOOLTIP_3 = "Se o primeiro valor \u00e9 verdadeiro, ent\u00e3o realize o primeiro bloco de instru\u00e7\u00f5es.  Sen\u00e3o, se o segundo valor \u00e9 verdadeiro, realize o segundo bloco de instru\u00e7\u00f5es.";
h.h.CONTROLS_IF_TOOLTIP_4 = "Se o primeiro valor for verdadeiro, ent\u00e3o realize o primeiro bloco de instru\u00e7\u00f5es. Sen\u00e3o, se o segundo valor \u00e9 verdadeiro, realize o segundo bloco de instru\u00e7\u00f5es. Se nenhum dos blocos for verdadeiro, realize o \u00faltimo bloco de instru\u00e7\u00f5es.";
h.h.CONTROLS_REPEAT_HELPURL = "https://pt.wikipedia.org/wiki/Estrutura_de_repeti%C3%A7%C3%A3o#Repeti.C3.A7.C3.A3o_com_vari.C3.A1vel_de_controle";
h.h.CONTROLS_REPEAT_INPUT_DO = "fa\u00e7a";
h.h.CONTROLS_REPEAT_TITLE = "repita %1 vezes";
h.h.CONTROLS_REPEAT_TOOLTIP = "Fa\u00e7a algumas instru\u00e7\u00f5es v\u00e1rias vezes.";
h.h.CONTROLS_WHILEUNTIL_HELPURL = "https://github.com/google/blockly/wiki/Loops#repeat";
h.h.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "repita at\u00e9";
h.h.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "repita enquanto";
h.h.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = "Enquanto um valor for falso, ent\u00e3o fa\u00e7a algumas instru\u00e7\u00f5es.";
h.h.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = "Enquanto um valor for verdadeiro, ent\u00e3o fa\u00e7a algumas instru\u00e7\u00f5es.";
h.h.DELETE_ALL_BLOCKS = "Deletar todos os blocos %1?";
h.h.DELETE_BLOCK = "Deletar bloco";
h.h.DELETE_VARIABLE = "Deletar a vari\u00e1vel '%1'";
h.h.DELETE_VARIABLE_CONFIRMATION = "Deletar %1 usos da vari\u00e1vel '%2'?";
h.h.DELETE_X_BLOCKS = "Deletar %1 blocos";
h.h.DISABLE_BLOCK = "Desabilitar bloco";
h.h.DUPLICATE_BLOCK = "Duplicar";
h.h.DUPLICATE_COMMENT = "Duplicar coment\u00e1rio";
h.h.ENABLE_BLOCK = "Habilitar bloco";
h.h.EXPAND_ALL = "Expandir blocos";
h.h.EXPAND_BLOCK = "Expandir bloco";
h.h.EXTERNAL_INPUTS = "Entradas externas";
h.h.HELP = "Ajuda";
h.h.INLINE_INPUTS = "Entradas incorporadas";
h.h.IOS_CANCEL = "blockly:IOS Cancelar/pt-br";
h.h.IOS_ERROR = "Erro";
h.h.IOS_OK = "Ok";
h.h.IOS_PROCEDURES_ADD_INPUT = "+ Adicionar Entrada";
h.h.IOS_PROCEDURES_ALLOW_STATEMENTS = "Permitir declara\u00e7\u00f5es";
h.h.IOS_PROCEDURES_DUPLICATE_INPUTS_ERROR = "Essa fun\u00e7\u00e3o tem entradas duplicadas.";
h.h.IOS_PROCEDURES_INPUTS = "ENTRADAS";
h.h.IOS_VARIABLES_ADD_BUTTON = "Adicionar";
h.h.IOS_VARIABLES_ADD_VARIABLE = "+ Adicionar Vari\u00e1vel";
h.h.IOS_VARIABLES_DELETE_BUTTON = "Deletar";
h.h.IOS_VARIABLES_EMPTY_NAME_ERROR = "Voc\u00ea n\u00e3o pode usar um nome de vari\u00e1vel vazio.";
h.h.IOS_VARIABLES_RENAME_BUTTON = "Blockly:Renomear varioas botoens/pt-br";
h.h.IOS_VARIABLES_VARIABLE_NAME = "Nome variavel";
h.h.LISTS_CREATE_EMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
h.h.LISTS_CREATE_EMPTY_TITLE = "criar lista vazia";
h.h.LISTS_CREATE_EMPTY_TOOLTIP = "Retorna uma lista, de tamanho 0, contendo nenhum registro";
h.h.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "lista";
h.h.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = "Acrescenta, remove ou reordena se\u00e7\u00f5es para reconfigurar este bloco de lista.";
h.h.LISTS_CREATE_WITH_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";
h.h.LISTS_CREATE_WITH_INPUT_WITH = "criar lista com";
h.h.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Acrescenta um item \u00e0 lista.";
h.h.LISTS_CREATE_WITH_TOOLTIP = "Cria uma lista com a quantidade de itens informada.";
h.h.LISTS_GET_INDEX_FIRST = "primeiro";
h.h.LISTS_GET_INDEX_FROM_END = "n\u00ba a partir do final";
h.h.LISTS_GET_INDEX_FROM_START = "n\u00ba";
h.h.LISTS_GET_INDEX_GET = "obter";
h.h.LISTS_GET_INDEX_GET_REMOVE = "obter e remover";
h.h.LISTS_GET_INDEX_LAST = "\u00faltimo";
h.h.LISTS_GET_INDEX_RANDOM = "aleat\u00f3rio";
h.h.LISTS_GET_INDEX_REMOVE = "remover";
h.h.LISTS_GET_INDEX_TAIL = "";
h.h.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "Retorna o primeiro item em uma lista.";
h.h.LISTS_GET_INDEX_TOOLTIP_GET_FROM = "Retorna o item da lista na posi\u00e7\u00e3o especificada.";
h.h.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "Retorna o \u00faltimo item em uma lista.";
h.h.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "Retorna um item aleat\u00f3rio de uma lista.";
h.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = "Remove e retorna o primeiro item de uma lista.";
h.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = "Remove e retorna o item na posi\u00e7\u00e3o especificada em uma lista.";
h.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = "Remove e retorna o \u00faltimo item de uma lista.";
h.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = "Remove e retorna um item aleat\u00f3rio de uma lista.";
h.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "Remove o primeiro item de uma lista.";
h.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = "Remove o item na posi\u00e7\u00e3o especificada em uma lista.";
h.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "Remove o \u00faltimo item de uma lista.";
h.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "Remove um item aleat\u00f3rio de uma lista.";
h.h.LISTS_GET_SUBLIST_END_FROM_END = "at\u00e9 n\u00ba a partir do final";
h.h.LISTS_GET_SUBLIST_END_FROM_START = "at\u00e9 n\u00ba";
h.h.LISTS_GET_SUBLIST_END_LAST = "at\u00e9 \u00faltimo";
h.h.LISTS_GET_SUBLIST_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
h.h.LISTS_GET_SUBLIST_START_FIRST = "obt\u00e9m sublista a partir do primeiro";
h.h.LISTS_GET_SUBLIST_START_FROM_END = "obt\u00e9m sublista de n\u00ba a partir do final";
h.h.LISTS_GET_SUBLIST_START_FROM_START = "obt\u00e9m sublista de n\u00ba";
h.h.LISTS_GET_SUBLIST_TAIL = "";
h.h.LISTS_GET_SUBLIST_TOOLTIP = "Cria uma c\u00f3pia da por\u00e7\u00e3o especificada de uma lista.";
h.h.LISTS_INDEX_FROM_END_TOOLTIP = "%1 \u00e9 o \u00faltimo item.";
h.h.LISTS_INDEX_FROM_START_TOOLTIP = "%1 \u00e9 o primeiro item.";
h.h.LISTS_INDEX_OF_FIRST = "encontre a primeira ocorr\u00eancia do item";
h.h.LISTS_INDEX_OF_HELPURL = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
h.h.LISTS_INDEX_OF_LAST = "encontre a \u00faltima ocorr\u00eancia do item";
h.h.LISTS_INDEX_OF_TOOLTIP = "Retorna o \u00edndice da primeira/\u00faltima ocorr\u00eancia do item na lista.  Retorna %1 se o item n\u00e3o for encontrado.";
h.h.LISTS_INLIST = "na lista";
h.h.LISTS_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Lists#is-empty";
h.h.LISTS_ISEMPTY_TITLE = "%1 \u00e9 vazia";
h.h.LISTS_ISEMPTY_TOOLTIP = "Retorna ao verdadeiro se a lista estiver vazia.";
h.h.LISTS_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Lists#length-of";
h.h.LISTS_LENGTH_TITLE = "tamanho de %1";
h.h.LISTS_LENGTH_TOOLTIP = "Retorna o tamanho de uma lista.";
h.h.LISTS_REPEAT_HELPURL = "https://github.com/google/blockly/wiki/Lists#create-list-with";
h.h.LISTS_REPEAT_TITLE = "criar lista com item %1 repetido %2 vezes";
h.h.LISTS_REPEAT_TOOLTIP = "Cria uma lista consistindo no valor informado repetido o n\u00famero de vezes especificado.";
h.h.LISTS_REVERSE_HELPURL = "https://github.com/google/blockly/wiki/Listas#invertendo-uma-lista";
h.h.LISTS_REVERSE_MESSAGE0 = "inverter %1";
h.h.LISTS_REVERSE_TOOLTIP = "Inverter uma c\u00f3pia da lista.";
h.h.LISTS_SET_INDEX_HELPURL = "https://github.com/google/blockly/wiki/Lists#in-list--set";
h.h.LISTS_SET_INDEX_INPUT_TO = "como";
h.h.LISTS_SET_INDEX_INSERT = "inserir em";
h.h.LISTS_SET_INDEX_SET = "definir";
h.h.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = "Insere o item no in\u00edcio de uma lista.";
h.h.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = "Insere o item na posi\u00e7\u00e3o especificada em uma lista.";
h.h.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = "Insere o item no final de uma lista.";
h.h.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = "Insere o item em uma posi\u00e7\u00e3o qualquer de uma lista.";
h.h.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "Define o primeiro item de uma lista.";
h.h.LISTS_SET_INDEX_TOOLTIP_SET_FROM = "Define o item da posi\u00e7\u00e3o especificada de uma lista.";
h.h.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "Define o \u00faltimo item de uma lista.";
h.h.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "Define um item aleat\u00f3rio de uma lista.";
h.h.LISTS_SORT_HELPURL = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
h.h.LISTS_SORT_ORDER_ASCENDING = "ascendente";
h.h.LISTS_SORT_ORDER_DESCENDING = "descendente";
h.h.LISTS_SORT_TITLE = "ordenar %1 %2 %3";
h.h.LISTS_SORT_TOOLTIP = "Ordenar uma c\u00f3pia de uma lista.";
h.h.LISTS_SORT_TYPE_IGNORECASE = "alfab\u00e9tico, ignorar mai\u00fascula/min\u00fascula";
h.h.LISTS_SORT_TYPE_NUMERIC = "num\u00e9rico";
h.h.LISTS_SORT_TYPE_TEXT = "alfab\u00e9tico";
h.h.LISTS_SPLIT_HELPURL = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
h.h.LISTS_SPLIT_LIST_FROM_TEXT = "Fazer uma lista a partir do texto";
h.h.LISTS_SPLIT_TEXT_FROM_LIST = "fazer um texto a partir da lista";
h.h.LISTS_SPLIT_TOOLTIP_JOIN = "Juntar uma lista de textos em um \u00fanico texto, separado por um delimitador.";
h.h.LISTS_SPLIT_TOOLTIP_SPLIT = "Dividir o texto em uma lista de textos, separando-o em cada delimitador.";
h.h.LISTS_SPLIT_WITH_DELIMITER = "com delimitador";
h.h.LOGIC_BOOLEAN_FALSE = "falso";
h.h.LOGIC_BOOLEAN_HELPURL = "https://github.com/google/blockly/wiki/Logic#values";
h.h.LOGIC_BOOLEAN_TOOLTIP = "Retorna verdadeiro ou falso.";
h.h.LOGIC_BOOLEAN_TRUE = "verdadeiro";
h.h.LOGIC_COMPARE_HELPURL = "https://pt.wikipedia.org/wiki/Inequa%C3%A7%C3%A3o";
h.h.LOGIC_COMPARE_TOOLTIP_EQ = "Retorna verdadeiro se ambas as entradas forem iguais.";
h.h.LOGIC_COMPARE_TOOLTIP_GT = "Retorna verdadeiro se a primeira entrada for maior que a segunda entrada.";
h.h.LOGIC_COMPARE_TOOLTIP_GTE = "Retorna verdadeiro se a primeira entrada for maior ou igual \u00e0 segunda entrada.";
h.h.LOGIC_COMPARE_TOOLTIP_LT = "Retorna verdadeiro se a primeira entrada for menor que a segunda entrada.";
h.h.LOGIC_COMPARE_TOOLTIP_LTE = "Retorna verdadeiro se a primeira entrada for menor ou igual \u00e0 segunda entrada.";
h.h.LOGIC_COMPARE_TOOLTIP_NEQ = "Retorna verdadeiro se ambas as entradas forem diferentes.";
h.h.LOGIC_NEGATE_HELPURL = "https://github.com/google/blockly/wiki/Logic#not";
h.h.LOGIC_NEGATE_TITLE = "n\u00e3o %1";
h.h.LOGIC_NEGATE_TOOLTIP = "Retorna verdadeiro se a entrada for falsa.  Retorna falsa se a entrada for verdadeira.";
h.h.LOGIC_NULL = "nulo";
h.h.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type";
h.h.LOGIC_NULL_TOOLTIP = "Retorna nulo.";
h.h.LOGIC_OPERATION_AND = "e";
h.h.LOGIC_OPERATION_HELPURL = "https://github.com/google/blockly/wiki/Logic#logical-operations";
h.h.LOGIC_OPERATION_OR = "ou";
h.h.LOGIC_OPERATION_TOOLTIP_AND = "Retorna verdadeiro se ambas as entradas forem verdadeiras.";
h.h.LOGIC_OPERATION_TOOLTIP_OR = "Retorna verdadeiro se uma das estradas for verdadeira.";
h.h.LOGIC_TERNARY_CONDITION = "teste";
h.h.LOGIC_TERNARY_HELPURL = "https://en.wikipedia.org/wiki/%3F:";
h.h.LOGIC_TERNARY_IF_FALSE = "se falso";
h.h.LOGIC_TERNARY_IF_TRUE = "se verdadeiro";
h.h.LOGIC_TERNARY_TOOLTIP = 'Avalia a condi\u00e7\u00e3o em "teste". Se a condi\u00e7\u00e3o for verdadeira retorna o valor "se verdadeiro", sen\u00e3o retorna o valor "se falso".';
h.h.MATH_ADDITION_SYMBOL = "+";
h.h.MATH_ARITHMETIC_HELPURL = "https://pt.wikipedia.org/wiki/Aritm%C3%A9tica";
h.h.MATH_ARITHMETIC_TOOLTIP_ADD = "Retorna a soma dos dois n\u00fameros.";
h.h.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "Retorna o quociente da divis\u00e3o dos dois n\u00fameros.";
h.h.MATH_ARITHMETIC_TOOLTIP_MINUS = "Retorna a diferen\u00e7a entre os dois n\u00fameros.";
h.h.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "Retorna o produto dos dois n\u00fameros.";
h.h.MATH_ARITHMETIC_TOOLTIP_POWER = "Retorna o primeiro n\u00famero elevado \u00e0 pot\u00eancia do segundo n\u00famero.";
h.h.MATH_ATAN2_HELPURL = "https://en.wikipedia.org/wiki/Atan2";
h.h.MATH_ATAN2_TITLE = "atan2 de X:%1 Y:%2";
h.h.MATH_ATAN2_TOOLTIP = "Retorne o arco tangente do ponto (X, Y) em graus de -180 a 180.";
h.h.MATH_CHANGE_HELPURL = "https://pt.wikipedia.org/wiki/Adi%C3%A7%C3%A3o";
h.h.MATH_CHANGE_TITLE = "alterar %1 por %2";
h.h.MATH_CHANGE_TOOLTIP = 'Soma um n\u00famero \u00e0 vari\u00e1vel "%1".';
h.h.MATH_CONSTANT_HELPURL = "https://pt.wikipedia.org/wiki/Anexo:Lista_de_constantes_matem%C3%A1ticas";
h.h.MATH_CONSTANT_TOOLTIP = "Retorna uma das constantes comuns: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), ou \u221e (infinito).";
h.h.MATH_CONSTRAIN_HELPURL = "https://en.wikipedia.org/wiki/Clamping_(graphics)";
h.h.MATH_CONSTRAIN_TITLE = "restringe %1 inferior %2 superior %3";
h.h.MATH_CONSTRAIN_TOOLTIP = "Restringe um n\u00famero entre os limites especificados (inclusivo).";
h.h.MATH_DIVISION_SYMBOL = "\u00f7";
h.h.MATH_IS_DIVISIBLE_BY = "\u00e9 divis\u00edvel por";
h.h.MATH_IS_EVEN = "\u00e9 par";
h.h.MATH_IS_NEGATIVE = "\u00e9 negativo";
h.h.MATH_IS_ODD = "\u00e9 \u00edmpar";
h.h.MATH_IS_POSITIVE = "\u00e9 positivo";
h.h.MATH_IS_PRIME = "\u00e9 primo";
h.h.MATH_IS_TOOLTIP = "Verifica se um n\u00famero \u00e9 par, \u00edmpar, inteiro, positivo, negativo, ou se \u00e9 divis\u00edvel por outro n\u00famero.  Retorna verdadeiro ou falso.";
h.h.MATH_IS_WHOLE = "\u00e9 inteiro";
h.h.MATH_MODULO_HELPURL = "https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_m%C3%B3dulo";
h.h.MATH_MODULO_TITLE = "resto da divis\u00e3o de %1 \u00f7 %2";
h.h.MATH_MODULO_TOOLTIP = "Retorna o resto da divis\u00e3o de dois n\u00fameros.";
h.h.MATH_MULTIPLICATION_SYMBOL = "\u00d7";
h.h.MATH_NUMBER_HELPURL = "https://pt.wikipedia.org/wiki/N%C3%BAmero";
h.h.MATH_NUMBER_TOOLTIP = "Um n\u00famero.";
h.h.MATH_ONLIST_HELPURL = "";
h.h.MATH_ONLIST_OPERATOR_AVERAGE = "m\u00e9dia da lista";
h.h.MATH_ONLIST_OPERATOR_MAX = "maior da lista";
h.h.MATH_ONLIST_OPERATOR_MEDIAN = "mediana da lista";
h.h.MATH_ONLIST_OPERATOR_MIN = "menor da lista";
h.h.MATH_ONLIST_OPERATOR_MODE = "moda da lista";
h.h.MATH_ONLIST_OPERATOR_RANDOM = "item aleat\u00f3rio da lista";
h.h.MATH_ONLIST_OPERATOR_STD_DEV = "desvio padr\u00e3o da lista";
h.h.MATH_ONLIST_OPERATOR_SUM = "soma de uma lista";
h.h.MATH_ONLIST_TOOLTIP_AVERAGE = "Retorna a m\u00e9dia aritm\u00e9tica dos n\u00fameros da lista.";
h.h.MATH_ONLIST_TOOLTIP_MAX = "Retorna o maior n\u00famero da lista.";
h.h.MATH_ONLIST_TOOLTIP_MEDIAN = "Retorna a mediana dos n\u00fameros da lista.";
h.h.MATH_ONLIST_TOOLTIP_MIN = "Retorna o menor n\u00famero da lista.";
h.h.MATH_ONLIST_TOOLTIP_MODE = "Retorna uma lista do(s) item(ns) mais comum(ns) da lista.";
h.h.MATH_ONLIST_TOOLTIP_RANDOM = "Retorna um elemento aleat\u00f3rio da lista.";
h.h.MATH_ONLIST_TOOLTIP_STD_DEV = "Retorna o desvio padr\u00e3o dos n\u00fameros da lista.";
h.h.MATH_ONLIST_TOOLTIP_SUM = "Retorna a soma de todos os n\u00fameros na lista.";
h.h.MATH_POWER_SYMBOL = "^";
h.h.MATH_RANDOM_FLOAT_HELPURL = "https://pt.wikipedia.org/wiki/Gerador_de_n%C3%BAmeros_pseudoaleat%C3%B3rios";
h.h.MATH_RANDOM_FLOAT_TITLE_RANDOM = "fra\u00e7\u00e3o aleat\u00f3ria";
h.h.MATH_RANDOM_FLOAT_TOOLTIP = "Retorna uma fra\u00e7\u00e3o aleat\u00f3ria entre 0.0 (inclusivo) e 1.0 (exclusivo).";
h.h.MATH_RANDOM_INT_HELPURL = "https://pt.wikipedia.org/wiki/Gerador_de_n%C3%BAmeros_pseudoaleat%C3%B3rios";
h.h.MATH_RANDOM_INT_TITLE = "inteiro aleat\u00f3rio entre %1 e %2";
h.h.MATH_RANDOM_INT_TOOLTIP = "Retorna um n\u00famero inteiro entre os dois limites informados, inclusivo.";
h.h.MATH_ROUND_HELPURL = "https://pt.wikipedia.org/wiki/Arredondamento";
h.h.MATH_ROUND_OPERATOR_ROUND = "arredonda";
h.h.MATH_ROUND_OPERATOR_ROUNDDOWN = "arredonda para baixo";
h.h.MATH_ROUND_OPERATOR_ROUNDUP = "arredonda para cima";
h.h.MATH_ROUND_TOOLTIP = "Arredonda um n\u00famero para cima ou para baixo.";
h.h.MATH_SINGLE_HELPURL = "https://pt.wikipedia.org/wiki/Raiz_quadrada";
h.h.MATH_SINGLE_OP_ABSOLUTE = "absoluto";
h.h.MATH_SINGLE_OP_ROOT = "raiz quadrada";
h.h.MATH_SINGLE_TOOLTIP_ABS = "Retorna o valor absoluto de um n\u00famero.";
h.h.MATH_SINGLE_TOOLTIP_EXP = "Retorna o n\u00famero e elevado \u00e0 pot\u00eancia de um n\u00famero.";
h.h.MATH_SINGLE_TOOLTIP_LN = "Retorna o logaritmo natural de um n\u00famero.";
h.h.MATH_SINGLE_TOOLTIP_LOG10 = "Retorna o logaritmo em base 10 de um n\u00famero.";
h.h.MATH_SINGLE_TOOLTIP_NEG = "Retorna o oposto de um n\u00famero.";
h.h.MATH_SINGLE_TOOLTIP_POW10 = "Retorna 10 elevado \u00e0 pot\u00eancia de um n\u00famero.";
h.h.MATH_SINGLE_TOOLTIP_ROOT = "Retorna a raiz quadrada de um n\u00famero.";
h.h.MATH_SUBTRACTION_SYMBOL = "-";
h.h.MATH_TRIG_ACOS = "acos";
h.h.MATH_TRIG_ASIN = "asin";
h.h.MATH_TRIG_ATAN = "atan";
h.h.MATH_TRIG_COS = "cos";
h.h.MATH_TRIG_HELPURL = "https://pt.wikipedia.org/wiki/Fun%C3%A7%C3%A3o_trigonom%C3%A9trica";
h.h.MATH_TRIG_SIN = "sin";
h.h.MATH_TRIG_TAN = "tan";
h.h.MATH_TRIG_TOOLTIP_ACOS = "Retorna o arco cosseno de um n\u00famero.";
h.h.MATH_TRIG_TOOLTIP_ASIN = "Retorna o arco seno de um n\u00famero.";
h.h.MATH_TRIG_TOOLTIP_ATAN = "Retorna o arco tangente de um n\u00famero.";
h.h.MATH_TRIG_TOOLTIP_COS = "Retorna o cosseno de um grau (n\u00e3o radiano).";
h.h.MATH_TRIG_TOOLTIP_SIN = "Retorna o seno de um grau (n\u00e3o radiano).";
h.h.MATH_TRIG_TOOLTIP_TAN = "Retorna a tangente de um grau (n\u00e3o radiano).";
h.h.NEW_COLOUR_VARIABLE = "Criar vari\u00e1vel colorida...";
h.h.NEW_NUMBER_VARIABLE = "Criar vari\u00e1vel num\u00e9rica...";
h.h.NEW_STRING_VARIABLE = "Criar vari\u00e1vel de segmentos de texto...";
h.h.NEW_VARIABLE = "Criar vari\u00e1vel...";
h.h.NEW_VARIABLE_TITLE = "Nome da nova vari\u00e1vel:";
h.h.NEW_VARIABLE_TYPE_TITLE = "Tipo da nova vari\u00e1vel:";
h.h.ORDINAL_NUMBER_SUFFIX = "";
h.h.PROCEDURES_ALLOW_STATEMENTS = "permitir declara\u00e7\u00f5es";
h.h.PROCEDURES_BEFORE_PARAMS = "com:";
h.h.PROCEDURES_CALLNORETURN_HELPURL = "https://pt.wikipedia.org/wiki/Sub-rotina";
h.h.PROCEDURES_CALLNORETURN_TOOLTIP = 'Executa a fun\u00e7\u00e3o definida pelo usu\u00e1rio "%1".';
h.h.PROCEDURES_CALLRETURN_HELPURL = "https://pt.wikipedia.org/wiki/Sub-rotina";
h.h.PROCEDURES_CALLRETURN_TOOLTIP = 'Executa a fun\u00e7\u00e3o definida pelo usu\u00e1rio "%1" e usa seu retorno.';
h.h.PROCEDURES_CALL_BEFORE_PARAMS = "com:";
h.h.PROCEDURES_CREATE_DO = 'Criar "%1"';
h.h.PROCEDURES_DEFNORETURN_COMMENT = "Descreva esta fun\u00e7\u00e3o...";
h.h.PROCEDURES_DEFNORETURN_DO = "";
h.h.PROCEDURES_DEFNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
h.h.PROCEDURES_DEFNORETURN_PROCEDURE = "fa\u00e7a algo";
h.h.PROCEDURES_DEFNORETURN_TITLE = "para";
h.h.PROCEDURES_DEFNORETURN_TOOLTIP = "Cria uma fun\u00e7\u00e3o que n\u00e3o tem retorno.";
h.h.PROCEDURES_DEFRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
h.h.PROCEDURES_DEFRETURN_RETURN = "retorna";
h.h.PROCEDURES_DEFRETURN_TOOLTIP = "Cria uma fun\u00e7\u00e3o que possui um valor de retorno.";
h.h.PROCEDURES_DEF_DUPLICATE_WARNING = "Aten\u00e7\u00e3o: Esta fun\u00e7\u00e3o tem par\u00e2metros duplicados.";
h.h.PROCEDURES_HIGHLIGHT_DEF = "Destacar defini\u00e7\u00e3o da fun\u00e7\u00e3o";
h.h.PROCEDURES_IFRETURN_HELPURL = "http://c2.com/cgi/wiki?GuardClause";
h.h.PROCEDURES_IFRETURN_TOOLTIP = "Se um valor \u00e9 verdadeiro, ent\u00e3o retorna um valor.";
h.h.PROCEDURES_IFRETURN_WARNING = "Aten\u00e7\u00e3o: Este bloco s\u00f3 pode ser utilizado dentro da defini\u00e7\u00e3o de uma fun\u00e7\u00e3o.";
h.h.PROCEDURES_MUTATORARG_TITLE = "nome da entrada:";
h.h.PROCEDURES_MUTATORARG_TOOLTIP = "Adiciona uma entrada para esta fun\u00e7\u00e3o";
h.h.PROCEDURES_MUTATORCONTAINER_TITLE = "entradas";
h.h.PROCEDURES_MUTATORCONTAINER_TOOLTIP = "Adiciona, remove, ou reordena as entradas para esta fun\u00e7\u00e3o.";
h.h.REDO = "Refazer";
h.h.REMOVE_COMMENT = "Remover coment\u00e1rio";
h.h.RENAME_VARIABLE = "Renomear vari\u00e1vel...";
h.h.RENAME_VARIABLE_TITLE = "Renomear todas as vari\u00e1veis '%1' para:";
h.h.TEXT_APPEND_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification";
h.h.TEXT_APPEND_TITLE = "para %1 anexar texto %2";
h.h.TEXT_APPEND_TOOLTIP = 'Acrescentar um peda\u00e7o de texto \u00e0 vari\u00e1vel "%1".';
h.h.TEXT_CHANGECASE_HELPURL = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
h.h.TEXT_CHANGECASE_OPERATOR_LOWERCASE = "para min\u00fasculas";
h.h.TEXT_CHANGECASE_OPERATOR_TITLECASE = "para Nomes Pr\u00f3prios";
h.h.TEXT_CHANGECASE_OPERATOR_UPPERCASE = "para MAI\u00daSCULAS";
h.h.TEXT_CHANGECASE_TOOLTIP = "Retorna uma c\u00f3pia do texto em um formato diferente.";
h.h.TEXT_CHARAT_FIRST = "obter primeira letra";
h.h.TEXT_CHARAT_FROM_END = "obter letra # a partir do final";
h.h.TEXT_CHARAT_FROM_START = "obter letra n\u00ba";
h.h.TEXT_CHARAT_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-text";
h.h.TEXT_CHARAT_LAST = "obter \u00faltima letra";
h.h.TEXT_CHARAT_RANDOM = "obter letra aleat\u00f3ria";
h.h.TEXT_CHARAT_TAIL = "";
h.h.TEXT_CHARAT_TITLE = "no texto %1 %2";
h.h.TEXT_CHARAT_TOOLTIP = "Retorna a letra na posi\u00e7\u00e3o especificada.";
h.h.TEXT_COUNT_HELPURL = "https://github.com/google/blockly/wiki/Text#counting-substrings";
h.h.TEXT_COUNT_MESSAGE0 = "Contar %1 em %2";
h.h.TEXT_COUNT_TOOLTIP = "Calcule quantas vezes algum texto aparece centro de algum outro texto.";
h.h.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "Acrescentar um item ao texto.";
h.h.TEXT_CREATE_JOIN_TITLE_JOIN = "unir";
h.h.TEXT_CREATE_JOIN_TOOLTIP = "Acrescenta, remove ou reordena se\u00e7\u00f5es para reconfigurar este bloco de texto.";
h.h.TEXT_GET_SUBSTRING_END_FROM_END = "at\u00e9 letra n\u00ba a partir do final";
h.h.TEXT_GET_SUBSTRING_END_FROM_START = "at\u00e9 letra n\u00ba";
h.h.TEXT_GET_SUBSTRING_END_LAST = "at\u00e9 \u00faltima letra";
h.h.TEXT_GET_SUBSTRING_HELPURL = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
h.h.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = "no texto";
h.h.TEXT_GET_SUBSTRING_START_FIRST = "obter trecho de primeira letra";
h.h.TEXT_GET_SUBSTRING_START_FROM_END = "obter trecho de letra n\u00ba a partir do final";
h.h.TEXT_GET_SUBSTRING_START_FROM_START = "obter trecho de letra n\u00ba";
h.h.TEXT_GET_SUBSTRING_TAIL = "";
h.h.TEXT_GET_SUBSTRING_TOOLTIP = "Retorna o trecho de texto especificado.";
h.h.TEXT_INDEXOF_HELPURL = "https://github.com/google/blockly/wiki/Text#finding-text";
h.h.TEXT_INDEXOF_OPERATOR_FIRST = "encontre a primeira ocorr\u00eancia do item";
h.h.TEXT_INDEXOF_OPERATOR_LAST = "encontre a \u00faltima ocorr\u00eancia do texto";
h.h.TEXT_INDEXOF_TITLE = "no texto %1 %2 %3";
h.h.TEXT_INDEXOF_TOOLTIP = "Retorna a posi\u00e7\u00e3o da primeira/\u00faltima ocorr\u00eancia do primeiro texto no segundo texto.  Retorna %1 se o texto n\u00e3o for encontrado.";
h.h.TEXT_ISEMPTY_HELPURL = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
h.h.TEXT_ISEMPTY_TITLE = "%1 \u00e9 vazio";
h.h.TEXT_ISEMPTY_TOOLTIP = "Retorna verdadeiro se o texto fornecido for vazio.";
h.h.TEXT_JOIN_HELPURL = "https://github.com/google/blockly/wiki/Text#text-creation";
h.h.TEXT_JOIN_TITLE_CREATEWITH = "criar texto com";
h.h.TEXT_JOIN_TOOLTIP = "Criar um peda\u00e7o de texto juntando qualquer n\u00famero de itens.";
h.h.TEXT_LENGTH_HELPURL = "https://github.com/google/blockly/wiki/Text#text-modification";
h.h.TEXT_LENGTH_TITLE = "tamanho de %1";
h.h.TEXT_LENGTH_TOOLTIP = "Retorna o n\u00famero de letras (incluindo espa\u00e7os) no texto fornecido.";
h.h.TEXT_PRINT_HELPURL = "https://github.com/google/blockly/wiki/Text#printing-text";
h.h.TEXT_PRINT_TITLE = "imprime %1";
h.h.TEXT_PRINT_TOOLTIP = "Imprime o texto, n\u00famero ou valor especificado.";
h.h.TEXT_PROMPT_HELPURL = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
h.h.TEXT_PROMPT_TOOLTIP_NUMBER = "Pede ao usu\u00e1rio um n\u00famero.";
h.h.TEXT_PROMPT_TOOLTIP_TEXT = "Pede ao usu\u00e1rio um texto.";
h.h.TEXT_PROMPT_TYPE_NUMBER = "Pede um n\u00famero com uma mensagem";
h.h.TEXT_PROMPT_TYPE_TEXT = "Pede um texto com uma mensagem";
h.h.TEXT_REPLACE_HELPURL = "https://github.com/google/blockly/wiki/Texto#substituindo-substrings";
h.h.TEXT_REPLACE_MESSAGE0 = "substituir %1 por %2 em %3";
h.h.TEXT_REPLACE_TOOLTIP = "Substitua todas as ocorr\u00eancias de algum texto dentro de algum outro texto.";
h.h.TEXT_REVERSE_HELPURL = "https://github.com/google/blockly/wiki/Texto#invertendo-texto";
h.h.TEXT_REVERSE_MESSAGE0 = "inverter %1";
h.h.TEXT_REVERSE_TOOLTIP = "Inverter a ordem dos caracteres no texto.";
h.h.TEXT_TEXT_HELPURL = "https://pt.wikipedia.org/wiki/Cadeia_de_caracteres";
h.h.TEXT_TEXT_TOOLTIP = "Uma letra, palavra ou linha de texto.";
h.h.TEXT_TRIM_HELPURL = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
h.h.TEXT_TRIM_OPERATOR_BOTH = "remover espa\u00e7os de ambos os lados de";
h.h.TEXT_TRIM_OPERATOR_LEFT = "remover espa\u00e7os \u00e0 esquerda de";
h.h.TEXT_TRIM_OPERATOR_RIGHT = "remover espa\u00e7os \u00e0 direita de";
h.h.TEXT_TRIM_TOOLTIP = "Retorna uma c\u00f3pia do texto com os espa\u00e7os removidos de uma ou ambas extremidades.";
h.h.TODAY = "Hoje";
h.h.UNDO = "Desfazer";
h.h.UNNAMED_KEY = "Sem t\u00edtulo";
h.h.VARIABLES_DEFAULT_NAME = "item";
h.h.VARIABLES_GET_CREATE_SET = 'Criar "definir %1"';
h.h.VARIABLES_GET_HELPURL = "https://github.com/google/blockly/wiki/Variables#get";
h.h.VARIABLES_GET_TOOLTIP = "Retorna o valor desta vari\u00e1vel.";
h.h.VARIABLES_SET = "definir %1 para %2";
h.h.VARIABLES_SET_CREATE_GET = 'Criar "obter %1"';
h.h.VARIABLES_SET_HELPURL = "https://github.com/google/blockly/wiki/Variables#set";
h.h.VARIABLES_SET_TOOLTIP = "Define esta vari\u00e1vel para o valor da entrada.";
h.h.VARIABLE_ALREADY_EXISTS = "A vari\u00e1vel chamada '%1' j\u00e1 existe.";
h.h.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = "J\u00e1 existe uma vari\u00e1vel chamada '%1' para outra do tipo: '%2'.";
h.h.WORKSPACE_COMMENT_DEFAULT_TEXT = "Diz algo...";
h.h.CONTROLS_FOREACH_INPUT_DO = h.h.CONTROLS_REPEAT_INPUT_DO;
h.h.CONTROLS_FOR_INPUT_DO = h.h.CONTROLS_REPEAT_INPUT_DO;
h.h.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = h.h.CONTROLS_IF_MSG_ELSEIF;
h.h.CONTROLS_IF_ELSE_TITLE_ELSE = h.h.CONTROLS_IF_MSG_ELSE;
h.h.CONTROLS_IF_IF_TITLE_IF = h.h.CONTROLS_IF_MSG_IF;
h.h.CONTROLS_IF_MSG_THEN = h.h.CONTROLS_REPEAT_INPUT_DO;
h.h.CONTROLS_WHILEUNTIL_INPUT_DO = h.h.CONTROLS_REPEAT_INPUT_DO;
h.h.LISTS_CREATE_WITH_ITEM_TITLE = h.h.VARIABLES_DEFAULT_NAME;
h.h.LISTS_GET_INDEX_HELPURL = h.h.LISTS_INDEX_OF_HELPURL;
h.h.LISTS_GET_INDEX_INPUT_IN_LIST = h.h.LISTS_INLIST;
h.h.LISTS_GET_SUBLIST_INPUT_IN_LIST = h.h.LISTS_INLIST;
h.h.LISTS_INDEX_OF_INPUT_IN_LIST = h.h.LISTS_INLIST;
h.h.LISTS_SET_INDEX_INPUT_IN_LIST = h.h.LISTS_INLIST;
h.h.MATH_CHANGE_TITLE_ITEM = h.h.VARIABLES_DEFAULT_NAME;
h.h.PROCEDURES_DEFRETURN_COMMENT = h.h.PROCEDURES_DEFNORETURN_COMMENT;
h.h.PROCEDURES_DEFRETURN_DO = h.h.PROCEDURES_DEFNORETURN_DO;
h.h.PROCEDURES_DEFRETURN_PROCEDURE = h.h.PROCEDURES_DEFNORETURN_PROCEDURE;
h.h.PROCEDURES_DEFRETURN_TITLE = h.h.PROCEDURES_DEFNORETURN_TITLE;
h.h.TEXT_APPEND_VARIABLE = h.h.VARIABLES_DEFAULT_NAME;
h.h.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = h.h.VARIABLES_DEFAULT_NAME;
h.h.MATH_HUE = "230";
h.h.LOOPS_HUE = "120";
h.h.LISTS_HUE = "260";
h.h.LOGIC_HUE = "210";
h.h.VARIABLES_HUE = "330";
h.h.TEXTS_HUE = "160";
h.h.PROCEDURES_HUE = "290";
h.h.COLOUR_HUE = "20";
h.h.VARIABLES_DYNAMIC_HUE = "310";
var O = {
    $h: null,
    wa: function() {
        Mc();
        var a = document.getElementById("linkButton");
        "BlocklyStorage" in window ? (BlocklyStorage.HTTPREQUEST_ERROR = L("Games_httpRequestError"), BlocklyStorage.LINK_ALERT = L("Games_linkAlert"), BlocklyStorage.HASH_ERROR = L("Games_hashError"), BlocklyStorage.XML_ERROR = L("Games_xmlError"), BlocklyStorage.alert = N.Xv.bind(N, a), a && Qc(a, BlocklyStorage.link)) : a && (a.style.display = "none");
        (a = document.getElementById("languageMenu")) && a.addEventListener("change", O.Ly, !0);
        h.Hb && (h.Hb.Hx = !1);
        h.G &&
            (h.G.Hx = !1)
    },
    EA: function(a, c) {
        if ("BlocklyStorage" in window && 1 < window.location.hash.length) BlocklyStorage.retrieveXml(window.location.hash.substring(1));
        else {
            var d = null;
            try {
                d = window.sessionStorage.Vp
            } catch (g) {}
            d && delete window.sessionStorage.Vp;
            var e = Nc(K),
                f = c && Nc(K - 1);
            f && "function" == typeof c && (f = c(f));
            (a = d || e || f || a) && O.Kv(a)
        }
    },
    Kv: function(a) {
        O.$h ? O.$h.setValue(a, -1) : (a = h.K.$f(a), H.clear(), h.K.Eg(a, H), a = H, a.nh.length = 0, a.zk.length = 0, h.i.Ty())
    },
    rp: function() {
        if (O.$h) var a = O.$h.getValue();
        else {
            a = h.K.qn(!0);
            if (1 == G(H, !1).length && a.querySelector) {
                var c = a.querySelector("block");
                c && (c.removeAttribute("x"), c.removeAttribute("y"))
            }
            a = h.K.Mc(a)
        }
        return a
    },
    ei: function() {
        return H
    },
    vB: function() {
        window.localStorage && (window.localStorage[Pc + K] = O.rp())
    },
    Zj: function() {
        window.location = (Kc ? "index.html" : "./") + "?lang=" + J
    },
    Ly: function() {
        if (window.sessionStorage) {
            if (O.$h) var a = O.$h.getValue();
            else a = h.K.qn(), a = h.K.Mc(a);
            window.sessionStorage.Vp = a
        }
        a = document.getElementById("languageMenu");
        a = encodeURIComponent(a.options[a.selectedIndex].value);
        var c = window.location.search;
        c = 1 >= c.length ? "?lang=" + a : c.match(/[?&]lang=[^&]*/) ? c.replace(/([?&]lang=)[^&]*/, "$1" + a) : c.replace(/\?/, "?lang=" + a + "&");
        window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + c
    },
    Um: function() {
        10 > K ? window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + J + "&level=" + (K + 1) : O.Zj()
    },
    zm: function(a, c) {
        if (a) {
            var d = a.match(/^block_id_([^']+)$/);
            d && (a = d[1])
        }
        yc(a, c)
    },
    tA: function(a, c) {
        a = document.getElementById(a);
        a.firstChild || (a = h.Hf(a, {
            rtl: -1 != Ic.indexOf(J),
            readOnly: !0
        }), "string" != typeof c && (c = c.join("")), h.K.Eg(h.K.$f(c), a))
    },
    LB: function(a) {
        a = a.replace(/(,\s*)?'block_id_[^']+'\)/g, ")");
        return a.replace(/\s+$/, "")
    },
    hd: function(a) {
        if ("click" == a.type && "touchend" == O.hd.Bq && O.hd.zq + 2E3 > Date.now() || O.hd.Bq == a.type && O.hd.zq + 400 > Date.now()) return a.preventDefault(), a.stopPropagation(), !0;
        O.hd.Bq = a.type;
        O.hd.zq = Date.now();
        return !1
    }
};
O.hd.Bq = null;
O.hd.zq = 0;
O.oA = function() {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = "third-party/JS-Interpreter/compressed.js";
    document.head.appendChild(a)
};
O.pA = function() {
    var a = document.createElement("link");
    a.rel = "stylesheet";
    a.type = "text/css";
    a.href = "common/prettify.css";
    document.head.appendChild(a);
    a = document.createElement("script");
    a.type = "text/javascript";
    a.src = "common/prettify.js";
    document.head.appendChild(a)
};
window.BlocklyInterface = O;
O.setCode = O.Kv;
O.getCode = O.rp;
O.getWorkspace = O.ei;
var N = {
    Ng: !1,
    Kt: null,
    dm: null,
    Ni: function(a, c, d, e, f, g) {
        function k() {
            N.Ng && (l.style.visibility = "visible", l.style.zIndex = 10, m.style.visibility = "hidden")
        }
        if (!a) throw TypeError("Content not found: " + a);
        N.Ng && N.kc(!1);
        h.Za() && h.jc(!0);
        N.Ng = !0;
        N.Kt = c;
        N.dm = g;
        var l = document.getElementById("dialog");
        g = document.getElementById("dialogShadow");
        var m = document.getElementById("dialogBorder"),
            n;
        for (n in f) l.style[n] = f[n];
        e && (g.style.visibility = "visible", g.style.opacity = .3, g.style.zIndex = 9, e = document.createElement("div"),
            e.id = "dialogHeader", l.appendChild(e), N.Ro = h.Xb(e, "mousedown", null, N.iz));
        l.appendChild(a);
        a.className = a.className.replace("dialogHiddenContent", "");
        d && c ? (N.Pm(c, !1, .2), N.Pm(l, !0, .8), setTimeout(k, 175)) : k()
    },
    Lt: 0,
    Mt: 0,
    iz: function(a) {
        N.Uo();
        if (!h.g.ui(a)) {
            var c = document.getElementById("dialog");
            N.Lt = c.offsetLeft - a.clientX;
            N.Mt = c.offsetTop - a.clientY;
            N.To = h.Xb(document, "mouseup", null, N.Uo);
            N.So = h.Xb(document, "mousemove", null, N.jz);
            a.stopPropagation()
        }
    },
    jz: function(a) {
        var c = document.getElementById("dialog"),
            d = N.Lt + a.clientX;
        a = N.Mt + a.clientY;
        a = Math.max(a, 0);
        a = Math.min(a, window.innerHeight - c.offsetHeight);
        d = Math.max(d, 0);
        d = Math.min(d, window.innerWidth - c.offsetWidth);
        c.style.left = d + "px";
        c.style.top = a + "px"
    },
    Uo: function() {
        N.To && (h.fb(N.To), N.To = null);
        N.So && (h.fb(N.So), N.So = null)
    },
    kc: function(a) {
        function c() {
            e.style.zIndex = -1;
            e.style.visibility = "hidden";
            document.getElementById("dialogBorder").style.visibility = "hidden"
        }
        if (N.Ng) {
            N.Uo();
            N.Ro && (h.fb(N.Ro), N.Ro = null);
            N.Ng = !1;
            N.dm && N.dm();
            N.dm = null;
            var d = !1 === a ?
                null : N.Kt;
            a = document.getElementById("dialog");
            var e = document.getElementById("dialogShadow");
            e.style.opacity = 0;
            d && a ? (N.Pm(a, !1, .8), N.Pm(d, !0, .2), setTimeout(c, 175)) : c();
            a.style.visibility = "hidden";
            a.style.zIndex = -1;
            for ((d = document.getElementById("dialogHeader")) && d.parentNode.removeChild(d); a.firstChild;) d = a.firstChild, d.className += " dialogHiddenContent", document.body.appendChild(d)
        }
    },
    Pm: function(a, c, d) {
        function e() {
            f.style.width = g.width + "px";
            f.style.height = g.height + "px";
            f.style.left = g.x + "px";
            f.style.top =
                g.y + "px";
            f.style.opacity = d
        }
        if (a) {
            var f = document.getElementById("dialogBorder"),
                g = N.fu(a);
            c ? (f.className = "dialogAnimate", setTimeout(e, 1)) : (f.className = "", e());
            f.style.visibility = "visible"
        }
    },
    fu: function(a) {
        var c = h.g.style.tp(a);
        c = {
            x: c.x,
            y: c.y
        };
        a.getBBox ? (a = a.getBBox(), c.height = a.height, c.width = a.width) : (c.height = a.offsetHeight, c.width = a.offsetWidth);
        return c
    },
    Xv: function(a, c) {
        var d = document.getElementById("containerStorage");
        d.textContent = "";
        c = c.split("\n");
        for (var e = 0; e < c.length; e++) {
            var f = document.createElement("p");
            f.appendChild(document.createTextNode(c[e]));
            d.appendChild(f)
        }
        d = document.getElementById("dialogStorage");
        N.Ni(d, a, !0, !0, {
            width: "50%",
            left: "25%",
            top: "5em"
        }, N.Wv);
        N.Sv()
    },
    Zs: function() {
        if (!Nc(K))
            if (N.Ng || H.yc()) setTimeout(N.Zs, 15E3);
            else {
                var a = document.getElementById("dialogAbort"),
                    c = document.getElementById("abortCancel");
                c.addEventListener("click", N.kc, !0);
                c.addEventListener("touchend", N.kc, !0);
                c = document.getElementById("abortOk");
                c.addEventListener("click", O.Zj, !0);
                c.addEventListener("touchend", O.Zj, !0);
                N.Ni(a, null, !1, !0, {
                    width: "40%",
                    left: "30%",
                    top: "3em"
                }, function() {
                    document.body.removeEventListener("keydown", N.Ys, !0)
                });
                document.body.addEventListener("keydown", N.Ys, !0)
            }
    },
    Qv: function() {
        document.getElementById("galleryXml").value = O.rp();
        var a = document.getElementById("galleryDialog");
        if (!N.Qv.uB) {
            var c = document.getElementById("galleryCancel");
            c.addEventListener("click", N.kc, !0);
            c.addEventListener("touchend", N.kc, !0);
            c = document.getElementById("galleryOk");
            c.addEventListener("click", N.np, !0);
            c.addEventListener("touchend",
                N.np, !0);
            N.Qv.uB = !0
        }
        c = document.getElementById("submitButton");
        N.Ni(a, c, !0, !0, {
            width: "40%",
            left: "30%",
            top: "3em"
        }, function() {
            document.body.removeEventListener("keydown", N.cu, !0)
        });
        document.body.addEventListener("keydown", N.cu, !0);
        setTimeout(function() {
            document.getElementById("galleryTitle").focus()
        }, 250)
    },
    Xy: function() {
        var a = document.getElementById("dialogDone");
        if (H) {
            var c = document.getElementById("dialogLinesText");
            c.textContent = "";
            var d = fd();
            d = O.LB(d);
            var e = d.replace(/\/\/[^\n]*/g, "");
            e = e.replace(/\/\*.*\*\//g,
                "");
            e = e.replace(/[ \t]+\n/g, "\n");
            e = e.replace(/\n+/g, "\n");
            e = e.trim();
            e = e.split("\n").length;
            var f = document.getElementById("containerCode");
            f.textContent = d;
            "function" == typeof prettyPrintOne && (d = f.innerHTML, d = prettyPrintOne(d, "js"), f.innerHTML = d);
            d = 1 == e ? L("Games_linesOfCode1") : L("Games_linesOfCode2").replace("%1", String(e));
            c.appendChild(document.createTextNode(d))
        }
        d = 10 > K ? L("Games_nextLevel").replace("%1", String(K + 1)) : L("Games_finalLevel");
        c = document.getElementById("doneCancel");
        c.addEventListener("click",
            N.kc, !0);
        c.addEventListener("touchend", N.kc, !0);
        c = document.getElementById("doneOk");
        c.addEventListener("click", O.Um, !0);
        c.addEventListener("touchend", O.Um, !0);
        N.Ni(a, null, !1, !0, {
            width: "40%",
            left: "30%",
            top: "3em"
        }, function() {
            document.body.removeEventListener("keydown", N.vt, !0)
        });
        document.body.addEventListener("keydown", N.vt, !0);
        document.getElementById("dialogDoneText").textContent = d
    },
    Jt: function(a) {
        !N.Ng || 13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode || (N.kc(!0), a.stopPropagation(), a.preventDefault())
    },
    Sv: function() {
        document.body.addEventListener("keydown", N.Jt, !0)
    },
    Wv: function() {
        document.body.removeEventListener("keydown", N.Jt, !0)
    },
    vt: function(a) {
        if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) N.kc(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && O.Um()
    },
    Ys: function(a) {
        if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) N.kc(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && O.Zj()
    },
    cu: function(a) {
        27 == a.keyCode ? N.kc(!0) : 13 == a.keyCode && N.np()
    },
    np: function() {
        var a = document.getElementById("galleryTitle");
        if (a.value.trim()) {
            a = document.getElementById("galleryForm");
            for (var c = [], d = 0, e; e = a.elements[d]; d++) e.name && (c[d] = encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value));
            var f = new XMLHttpRequest;
            f.open("POST", a.action);
            f.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            f.onload = function() {
                if (4 == f.readyState) {
                    var g = 200 == f.status ? L("Games_submitted") : L("Games_httpRequestError") + "\nStatus: " + f.status;
                    N.Xv(null, g)
                }
            };
            f.send(c.join("&"));
            N.kc(!0)
        } else a.value = "", a.focus()
    }
};
window.BlocklyDialogs = N;
N.hideDialog = N.kc;
h.Generator = function(a) {
    this.TA = a
};
h.Generator.Fh = "generated_function";
b = h.Generator.prototype;
b.Tr = null;
b.Il = null;
b.Jl = null;
b.kx = "  ";
b.Dw = 60;
b.El = [];

function fd() {
    var a = h.G,
        c = H;
    c || (console.warn("No workspace specified in workspaceToCode call.  Guessing."), c = h.Za());
    var d = [];
    a.wa(c);
    c = G(c, !0);
    for (var e = 0, f; f = c[e]; e++) {
        var g = gd(a, f);
        Array.isArray(g) && (g = g[0]);
        g && (f.M && (g = a.Iv(g), a.Il && !f.Xq && (g = hd(a.Il, f) + g), a.Jl && !f.Xq && (g += hd(a.Jl, f))), d.push(g))
    }
    d = d.join("\n");
    d = a.finish(d);
    d = d.replace(/^\s+\n/, "");
    d = d.replace(/\n\s+$/, "\n");
    return d = d.replace(/[ \t]+\n/g, "\n")
}

function id(a, c) {
    return c + a.replace(/(?!\n$)\n/g, "\n" + c)
}

function gd(a, c) {
    if (!c) return "";
    if (!c.isEnabled()) return gd(a, u(c));
    var d = a[c.type];
    if ("function" != typeof d) throw Error('Language "' + a.TA + '" does not know how to generate  code for block type "' + c.type + '".');
    d = d.call(c, c);
    if (Array.isArray(d)) {
        if (!c.M) throw TypeError("Expecting string from statement block: " + c.type);
        return [a.Kq(c, d[0], void 0), d[1]]
    }
    if ("string" == typeof d) return a.Il && !c.Xq && (d = hd(a.Il, c) + d), a.Jl && !c.Xq && (d += hd(a.Jl, c)), a.Kq(c, d, void 0);
    if (null === d) return "";
    throw SyntaxError("Invalid code generated: " +
        d);
}

function jd(a, c, d) {
    var e = h.G;
    if (isNaN(d)) throw TypeError("Expecting valid order from block: " + a.type);
    var f = ac(a, c);
    if (!f) return "";
    c = gd(e, f);
    if ("" === c) return "";
    if (!Array.isArray(c)) throw TypeError("Expecting tuple from value block: " + f.type);
    a = c[0];
    c = c[1];
    if (isNaN(c)) throw TypeError("Expecting valid order from value block: " + f.type);
    if (!a) return "";
    f = !1;
    var g = Math.floor(d),
        k = Math.floor(c);
    if (g <= k && (g != k || 0 != g && 99 != g))
        for (f = !0, g = 0; g < e.El.length; g++)
            if (e.El[g][0] == d && e.El[g][1] == c) {
                f = !1;
                break
            }
    f && (a =
        "(" + a + ")");
    return a
}

function kd(a, c) {
    var d = h.G;
    a = ac(a, c);
    c = gd(d, a);
    if ("string" != typeof c) throw TypeError("Expecting code from statement block: " + (a && a.type));
    c && (c = id(c, d.kx));
    return c
}

function hd(a, c) {
    c = c.id.replace(/\$/g, "$$$$");
    return a.replace(/%1/g, "'" + c + "'")
}
b.Yn = "";

function ld(a) {
    var c = h.G;
    c.Yn += a + ","
}
b.wa = function() {};
b.Kq = function(a, c) {
    return c
};
b.finish = function(a) {
    return a
};
b.Iv = function(a) {
    return a
};
h.G = new h.Generator("JavaScript");
ld("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
h.G.KE = 0;
h.G.bF = 1.1;
h.G.Dl = 1.2;
h.G.Cl = 2;
h.G.ZE = 3;
h.G.TE = 3;
h.G.NE = 4.1;
h.G.eF = 4.2;
h.G.ss = 4.3;
h.G.os = 4.4;
h.G.dF = 4.5;
h.G.fF = 4.6;
h.G.UE = 4.7;
h.G.LE = 4.8;
h.G.XE = 5;
h.G.qs = 5.1;
h.G.VE = 5.2;
h.G.aF = 5.3;
h.G.rs = 6.1;
h.G.Bl = 6.2;
h.G.PE = 7;
h.G.cF = 8;
h.G.YE = 8;
h.G.$E = 8;
h.G.WE = 9;
h.G.ME = 10;
h.G.QE = 11;
h.G.OE = 12;
h.G.ns = 13;
h.G.ps = 14;
h.G.SE = 15;
h.G.JE = 16;
h.G.gF = 17;
h.G.RE = 18;
h.G.Ix = 99;
h.G.El = [
    [h.G.Cl, h.G.Dl],
    [h.G.Cl, h.G.Cl],
    [h.G.Dl, h.G.Dl],
    [h.G.Dl, h.G.Cl],
    [h.G.os, h.G.os],
    [h.G.qs, h.G.qs],
    [h.G.Bl, h.G.Bl],
    [h.G.ns, h.G.ns],
    [h.G.ps, h.G.ps]
];
h.G.wa = function(a) {
    h.G.bm = Object.create(null);
    h.G.Fz = Object.create(null);
    h.G.al ? h.G.al.reset() : h.G.al = new h.yd(h.G.Yn);
    h.G.al.Ja = a.Ja;
    for (var c = [], d = h.Z.wy(a), e = 0; e < d.length; e++) c.push(Gc(d[e], h.yd.Fn));
    a = h.Z.bt(a);
    for (e = 0; e < a.length; e++) c.push(Gc(a[e].ob(), h.Z.Fh));
    c.length && (h.G.bm.variables = "var " + c.join(", ") + ";")
};
h.G.finish = function(a) {
    var c = [],
        d;
    for (d in h.G.bm) c.push(h.G.bm[d]);
    delete h.G.bm;
    delete h.G.Fz;
    h.G.al.reset();
    return c.join("\n\n") + "\n\n\n" + a
};
h.G.Iv = function(a) {
    return a + ";\n"
};
h.G.nB = function(a) {
    a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
    return "'" + a + "'"
};
h.G.lH = function(a) {
    return a.split(/\n/g).map(h.G.nB).join(" + '\\n' +\n")
};
h.G.Kq = function(a, c, d) {
    var e = "";
    if (!a.M || !a.M.la) {
        var f = a.Hd.text;
        f && (f = h.g.Da.fw(f, h.G.Dw - 3), e += id(f + "\n", "// "));
        for (var g = 0; g < a.N.length; g++)
            if (a.N[g].type == h.Oa) {
                var k = x(a.N[g].connection);
                if (k) {
                    f = [];
                    k = p(k, !0);
                    for (var l = 0; l < k.length; l++) {
                        var m = k[l].Hd.text;
                        m && f.push(m)
                    }
                    f.length && f.push("");
                    (f = f.join("\n")) && (e += id(f, "// "))
                }
            }
    }
    a = a.V && x(a.V);
    d = d ? "" : gd(h.G, a);
    return e + c + d
};
h.G.TG = function(a, c, d, e, f) {
    d = d || 0;
    f = f || h.G.Ix;
    a.C.options.zi && d--;
    var g = a.C.options.zi ? "1" : "0";
    a = 0 < d ? jd(a, c, h.G.Bl) || g : 0 > d ? jd(a, c, h.G.rs) || g : e ? jd(a, c, h.G.ss) || g : jd(a, c, f) || g;
    if (h.AA(a)) a = Number(a) + d, e && (a = -a);
    else {
        if (0 < d) {
            a = a + " + " + d;
            var k = h.G.Bl
        } else 0 > d && (a = a + " - " + -d, k = h.G.rs);
        e && (a = d ? "-(" + a + ")" : "-" + a, k = h.G.ss);
        k = Math.floor(k);
        f = Math.floor(f);
        k && f >= k && (a = "(" + a + ")")
    }
    return a
};
h.Xd = function(a, c, d, e, f, g, k) {
    if (!a) throw Error("Src value of an image field is required");
    a = h.g.Fc(a);
    d = Number(h.g.Fc(d));
    c = Number(h.g.Fc(c));
    if (isNaN(d) || isNaN(c)) throw Error("Height and width values of an image field must cast to numbers.");
    if (0 >= d || 0 >= c) throw Error("Height and width values of an image field must be greater than 0.");
    this.Rj = !1;
    this.Ql = "";
    h.Xd.w.constructor.call(this, a || "", null, k);
    k || (this.Rj = !!g, this.Ql = h.g.Fc(e) || "");
    this.ub = new h.g.Cd(c, d + h.Xd.Xs);
    this.nA = d;
    this.xj = null;
    "function" ==
    typeof f && (this.xj = f)
};
h.g.object.S(h.Xd, h.Ea);
h.Xd.pa = function(a) {
    return new h.Xd(a.src, a.width, a.height, void 0, void 0, void 0, a)
};
h.Xd.Xs = 1;
b = h.Xd.prototype;
b.Wd = !1;
b.If = !1;
b.Aj = function(a) {
    h.Xd.w.Aj.call(this, a);
    this.Rj = !!a.flipRtl;
    this.Ql = h.g.Fc(a.alt) || ""
};
b.$j = function() {
    this.nd = h.g.m.L("image", {
        height: this.nA + "px",
        width: this.ub.width + "px",
        alt: this.Ql
    }, this.jd);
    this.nd.setAttributeNS(h.g.m.dd, "xlink:href", this.Be)
};
b.gm = function(a) {
    return "string" != typeof a ? null : a
};
b.hm = function(a) {
    this.Be = a;
    this.nd && this.nd.setAttributeNS(h.g.m.dd, "xlink:href", this.Be || "")
};
b.lu = function() {
    return this.Rj
};
b.Ik = function() {
    this.xj && this.xj(this)
};
b.yp = function() {
    return this.Ql
};
h.Nc.register("field_image", h.Xd);
var md = {},
    P, nd, od, Q, S, T, pd;
h.Hb.maze_moveForward = {
    wa: function() {
        $b(this, {
            message0: L("Maze_moveForward"),
            previousStatement: null,
            nextStatement: null,
            colour: 290,
            tooltip: L("Maze_moveForwardTooltip")
        })
    }
};
h.G.maze_moveForward = function(a) {
    return "moveForward('block_id_" + a.id + "');\n"
};
h.Hb.maze_turn = {
    wa: function() {
        var a = [
            [L("Maze_turnLeft"), "turnLeft"],
            [L("Maze_turnRight"), "turnRight"]
        ];
        a[0][0] += " \u21ba";
        a[1][0] += " \u21bb";
        this.ud(290);
        I(Zb(this), new h.Fa(a), "DIR");
        this.fh(!0);
        this.Ji(!0);
        this.Pd(L("Maze_turnTooltip"))
    }
};
h.G.maze_turn = function(a) {
    return Ma(a, "DIR") + "('block_id_" + a.id + "');\n"
};
h.Hb.maze_if = {
    wa: function() {
        var a = [
            [L("Maze_pathAhead"), "isPathForward"],
            [L("Maze_pathLeft"), "isPathLeft"],
            [L("Maze_pathRight"), "isPathRight"]
        ];
        a[1][0] += " \u21ba";
        a[2][0] += " \u21bb";
        this.ud(210);
        I(Zb(this), new h.Fa(a), "DIR");
        I(this.Ne(h.Ca, "DO"), L("Maze_doCode"));
        this.Pd(L("Maze_ifTooltip"));
        this.fh(!0);
        this.Ji(!0)
    }
};
h.G.maze_if = function(a) {
    var c = Ma(a, "DIR") + "('block_id_" + a.id + "')";
    a = kd(a, "DO");
    return "if (" + c + ") {\n" + a + "}\n"
};
h.Hb.maze_ifElse = {
    wa: function() {
        var a = [
            [L("Maze_pathAhead"), "isPathForward"],
            [L("Maze_pathLeft"), "isPathLeft"],
            [L("Maze_pathRight"), "isPathRight"]
        ];
        a[1][0] += " \u21ba";
        a[2][0] += " \u21bb";
        this.ud(210);
        I(Zb(this), new h.Fa(a), "DIR");
        I(this.Ne(h.Ca, "DO"), L("Maze_doCode"));
        I(this.Ne(h.Ca, "ELSE"), L("Maze_elseCode"));
        this.Pd(L("Maze_ifelseTooltip"));
        this.fh(!0);
        this.Ji(!0)
    }
};
h.G.maze_ifElse = function(a) {
    var c = Ma(a, "DIR") + "('block_id_" + a.id + "')",
        d = kd(a, "DO");
    a = kd(a, "ELSE");
    return "if (" + c + ") {\n" + d + "} else {\n" + a + "}\n"
};
h.Hb.maze_forever = {
    wa: function() {
        this.ud(120);
        I(I(Zb(this), L("Maze_repeatUntil")), new h.Xd(U.Om, 12, 16));
        I(this.Ne(h.Ca, "DO"), L("Maze_doCode"));
        this.fh(!0);
        this.Pd(L("Maze_whileTooltip"))
    }
};
h.G.maze_forever = function(a) {
    var c = kd(a, "DO");
    h.G.Tr && (c = h.G.Tr.replace(/%1/g, "'block_id_" + a.id + "'") + c);
    return "while (notDone()) {\n" + c + "}\n"
};
var qd = qd || {};

function rd(a, c) {
    function d() {}
    d.prototype = c.prototype;
    a.w = c.prototype;
    a.prototype = new d;
    a.prototype.constructor = a;
    a.BG = function(e, f, g) {
        return c.prototype[f].apply(e, Array.prototype.slice.call(arguments, 2))
    }
}
if (!sd) {
    var sd, td = "";
    "undefined" !== typeof navigator && navigator && "string" == typeof navigator.userAgent && (td = navigator.userAgent);
    var ud = 0 == td.indexOf("Opera");
    sd = {
        iH: {
            zD: "ScriptEngine" in window
        },
        HE: ud,
        hf: !ud && -1 != td.indexOf("MSIE"),
        Ts: !ud && -1 != td.indexOf("WebKit")
    }
}
if (!vd) var vd = {};
if (!wd) var wd = {};
if (!xd) var xd = {};
if (!yd) var yd = {};
if (!zd) var zd = {};
if (!Ad) var Ad = {};
var Bd = qd.FC ? {
    vH: !0
} : {};

function Cd() {
    throw Error("Do not instantiate directly");
}
Cd.prototype.zt = null;
Cd.prototype.toString = function() {
    return this.content
};

function Dd(a) {
    if (null != a) switch (a.zt) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0
    }
    return null
}

function Ed() {
    Cd.call(this)
}
rd(Ed, Cd);
Ed.prototype.$y = Bd;

function V(a) {
    return null != a && a.$y === Bd ? a : Fd(String(String(a)).replace(Gd, Hd), Dd(a))
}
var Fd = function(a) {
        function c() {}
        c.prototype = a.prototype;
        return function(d, e) {
            var f = new c;
            f.content = String(d);
            void 0 !== e && (f.zt = e);
            return f
        }
    }(Ed),
    Id = {
        "\x00": "&#0;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "<": "&lt;",
        ">": "&gt;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        "-": "&#45;",
        "/": "&#47;",
        "=": "&#61;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

function Hd(a) {
    return Id[a]
}
var Gd = /[\x00\x22\x26\x27\x3c\x3e]/g;

function Ld() {
    return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>'
};

function Md() {
    var a = Nd,
        c = '<div style="display: none"><span id="Games_name">Jogos do Blockly</span><span id="Games_puzzle">Quebra-Cabe\u00e7a</span><span id="Games_maze">Labirinto</span><span id="Games_bird">P\u00e1ssaro</span><span id="Games_turtle">Tartaruga</span><span id="Games_movie">Filme</span><span id="Games_music">M\u00fasica</span><span id="Games_pondTutor">Tutor de Lagoa</span><span id="Games_pond">Lagoa</span><span id="Games_genetics">Gen\u00e9ticas</span><span id="Games_linesOfCode1">Voc\u00ea solucionou esse n\u00edvel com uma linha de JavaScript:</span><span id="Games_linesOfCode2">Voc\u00ea solucionou esse n\u00edvel com sucesso!</span><span id="Games_nextLevel">Voc\u00ea esta preparado para o n\u00edvel %1?</span><span id="Games_finalLevel">Voc\u00ea esta preparado para o pr\u00f3ximo desafio?</span><span id="Games_submitTitle">T\u00edtulo:</span><span id="Games_linkTooltip">Salvar e ligar aos blocos.</span><span id="Games_runTooltip">Rodar o programa que voc\u00ea escreveu.</span><span id="Games_runProgram">Executar o programa</span><span id="Games_resetTooltip">Parar a execu\u00e7\u00e3o do programa e resetar o nivel.</span><span id="Games_resetProgram">Reiniciar</span><span id="Games_help">Ajuda</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancelar</span><span id="Games_catLogic">L\u00f3gica</span><span id="Games_catLoops">La\u00e7os</span><span id="Games_catMath">Matem\u00e1tica</span><span id="Games_catText">Texto</span><span id="Games_catLists">Listas</span><span id="Games_catColour">Cor</span><span id="Games_catVariables">Vari\u00e1veis</span><span id="Games_catProcedures">Fun\u00e7\u00f5es</span><span id="Games_httpRequestError">Houve um problema com a requisi\u00e7\u00e3o.</span><span id="Games_linkAlert">Compartilhe seus blocos com este link:\n\n%1</span><span id="Games_hashError">Desculpe, \'%1\' n\u00e3o corresponde a um programa salvo.</span><span id="Games_xmlError">N\u00e3o foi poss\u00edvel carregar seu arquivo salvo. Talvez ele tenha sido criado com uma vers\u00e3o diferente do Blockly?</span><span id="Games_submitted">Agradecemos pelo programa! Se a nossa equipa gostar dele, este ser\u00e1 publicado na galeria por n\u00f3s dentro de alguns dias.</span><span id="Games_listVariable">lista</span><span id="Games_textVariable">texto</span><span id="Games_breakLink">Quando voc\u00ea come\u00e7ar a editar o JavaScript, voc\u00ea n\u00e3o poder\u00e1 mais voltar a editar os blocos. Voc\u00ea tem certeza?</span><span id="Games_blocks">Blocos</div></div><div style="display: none"><span id="Maze_moveForward">avan\u00e7ar</span><span id="Maze_turnLeft">vire \u00e0 esquerda</span><span id="Maze_turnRight">vire \u00e0 direita</span><span id="Maze_doCode">fa\u00e7a</span><span id="Maze_elseCode">sen\u00e3o</span><span id="Maze_helpIfElse">Blocos se-sen\u00e3o far\u00e3o uma coisa ou outra.</span><span id="Maze_pathAhead">se caminho \u00e0 frente</span><span id="Maze_pathLeft">se caminho \u00e0 esquerda</span><span id="Maze_pathRight">se caminho \u00e0 direita</span><span id="Maze_repeatUntil">repetir at\u00e9</span><span id="Maze_moveForwardTooltip">Move o jogador um espa\u00e7o para frente.</span><span id="Maze_turnTooltip">Vira o jogador 90 graus para esquerda ou direita.</span><span id="Maze_ifTooltip">Se h\u00e1 um caminho na dire\u00e7\u00e3o especificada, \\nent\u00e3o fa\u00e7a algumas a\u00e7\u00f5es. </span><span id="Maze_ifelseTooltip">Se h\u00e1 um caminho na dire\u00e7\u00e3o especificada, \\nent\u00e3o fa\u00e7a o primeiro bloco de a\u00e7\u00f5es. \\nCaso contr\u00e1rio, fa\u00e7a o segundo bloco de \\na\u00e7\u00f5es. </span><span id="Maze_whileTooltip">Repetir as a\u00e7\u00f5es inclusas at\u00e9 que o ponto final \\nseja alcan\u00e7ado. </span><span id="Maze_capacity0">Restam %0 blocos.</span><span id="Maze_capacity1">Resta %1 bloco.</span><span id="Maze_capacity2">Restam %2 blocos.</span></div><table width="100%"><tr><td><h1><span id="title">' +
        ((Kc ? '<a href="index.html?lang=' + V(J) + '">' : '<a href="./?lang=' + V(J) + '">') + "Jogos do Blockly</a> : " + V({
            appName: "Labirinto"
        }.appName) + "</span>");
    a = "&skin=" + V(a);
    for (var d = " &nbsp; ", e = 1; 11 > e; e++) d += " " + (e == K ? '<span class="level_number level_done" id="level' + V(e) + '">' + V(e) + "</span>" : 10 == e ? '<a class="level_number" id="level' + V(e) + '" href="?lang=' + V(J) + "&level=" + V(e) + V(a) + '">' + V(e) + "</a>" : '<a class="level_dot" id="level' + V(e) + '" href="?lang=' + V(J) + "&level=" + V(e) + V(a) + '"></a>');
    return c + d + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Salvar e ligar aos blocos."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Faz o jogador executar o que os blocos dizem."><img src="common/1x1.gif" class="run icon21"> Executar o programa</button><button id="resetButton" class="primary" style="display: none" title="Coloca o jogador de volta ao in\u00edcio do labirinto."><img src="common/1x1.gif" class="stop icon21"> Reiniciar</button></td></tr></table><xml id="toolbox" style="display: none;" xmlns="https://developers.google.com/blockly/xml"><block type="maze_moveForward"></block><block type="maze_turn"><field name="DIR">turnLeft</field></block><block type="maze_turn"><field name="DIR">turnRight</field></block>' +
        ((2 < K ? '<block type="maze_forever"></block>' + (6 == K ? '<block type="maze_if"><field name="DIR">isPathLeft</field></block>' : 6 < K ? '<block type="maze_if"></block>' + (8 < K ? '<block type="maze_ifElse"></block>' : "") : "") : "") + '</xml><div id="blockly"></div><div id="pegmanMenu"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Paarab\u00e9ns!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode" style="display: none;"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancelar</button><button id="doneOk" class="secondary">OK</button></div></div><div id="dialogAbort" class="dialogHiddenContent">Este n\u00edvel \u00e9 extremamente dif\u00edcil. Voc\u00ea deseja pul\u00e1-lo e ir ao pr\u00f3ximo jogo? Voc\u00ea sempre pode voltar mais tarde.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancelar</button><button id="abortOk" class="secondary">OK</button></div></div><div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>') +
        (Ld() + "</div>") + (1 == K ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Empilhe alguns blocos \'avan\u00e7ar\' juntos para me ajudar a alcan\u00e7ar o objetivo.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Neste n\u00edvel, voc\u00ea deve empilhar todos os blocos na \u00e1rea de trabalho branca.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Execute seu programa para ver o que acontece.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' :
            2 == K ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Seu programa n\u00e3o resolveu o labirinto. Aperte \'Reiniciar\' e tente novamente.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : 3 == K || 4 == K ? (3 == K ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Alcance o fim deste caminho usando apenas dois blocos. Use \'repetir\' para executar um bloco mais de uma vez.</td><td><img src="common/help.png"></td></tr></table></div>' :
                "") + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Voc\u00ea usou todos os blocos para este n\u00edvel. Para criar um novo bloco, voc\u00ea primeiro deve deletar um bloco existente.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Voc\u00ea pode encaixar mais de um bloco dentro de um bloco \'repetir\'.</td><td><img src="common/help.png"></td></tr></table></div>' :
            5 == K ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">Escolha o seu jogador favorito neste menu.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : 6 == K ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Um bloco \'se\' far\u00e1 alguma coisa apenas se a condi\u00e7\u00e3o for verdadeira. Tente virar \u00e0 esquerda se houver um caminho para a esquerda.</td><td><img src="common/help.png"></td></tr></table></div>' :
            7 == K ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Clique em %1 no bloco \'se\' para mudar sua condi\u00e7\u00e3o.</td><td><img src="common/help.png"></td></tr></table></div>' : 9 == K ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>Blocos se-sen\u00e3o far\u00e3o uma coisa ou outra.</td><td><img src="common/help.png"></td></tr></table></div>' : 10 == K ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Voc\u00ea consegue resolver este labirinto complicado? Tente seguir a parede da m\u00e3o esquerda. Apenas para programadores avan\u00e7ados!' +
            Ld() + "</td></tr></table></div>" : "")
};
var Pc = "maze";
O.Um = function() {
    10 > K ? window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + J + "&level=" + (K + 1) + "&skin=" + Nd : O.Zj()
};
var Od = [void 0, Infinity, Infinity, 2, 5, 5, 5, 5, 10, 7, 10][K],
    Pd = [{
        Oi: "maze/pegman.png",
        Yq: "maze/tiles_pegman.png",
        Om: "maze/marker.png",
        background: !1,
        Tj: !1,
        Xp: "#000",
        ir: ["maze/win.mp3", "maze/win.ogg"],
        Oo: ["maze/fail_pegman.mp3", "maze/fail_pegman.ogg"],
        $l: 1
    }, {
        Oi: "maze/astro.png",
        Yq: "maze/tiles_astro.png",
        Om: "maze/marker.png",
        background: "maze/bg_astro.jpg",
        Tj: !1,
        Xp: "#fff",
        ir: ["maze/win.mp3", "maze/win.ogg"],
        Oo: ["maze/fail_astro.mp3", "maze/fail_astro.ogg"],
        $l: 2
    }, {
        Oi: "maze/panda.png",
        Yq: "maze/tiles_panda.png",
        Om: "maze/marker.png",
        background: "maze/bg_panda.jpg",
        Tj: !1,
        Xp: "#000",
        ir: ["maze/win.mp3", "maze/win.ogg"],
        Oo: ["maze/fail_panda.mp3", "maze/fail_panda.ogg"],
        $l: 3
    }],
    Nd = Lc("skin", 0, Pd.length),
    U = Pd[Nd],
    X = [void 0, [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 2, 1, 3, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 3, 0, 0, 0],
            [0, 0, 2, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 1, 1, 1, 1, 3, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 3, 1, 0],
            [0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0],
            [0, 2, 1, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 3, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 2, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 0, 0],
            [0, 1, 0, 0, 0, 1, 0, 0],
            [0, 1, 1, 3, 0, 1, 0, 0],
            [0, 0, 0, 0,
                0, 1, 0, 0
            ],
            [0, 2, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0],
            [0, 2, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0],
            [0, 1, 1, 3, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 1, 0, 1, 0, 0],
            [0, 0, 0, 1, 0, 1, 0, 0],
            [0, 2, 1, 1, 0, 3, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0],
            [3, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 1, 0],
            [1, 1, 1, 1, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 2, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 0, 3, 0, 1, 0],
            [0, 1, 1, 0, 1, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 1, 0, 0, 1, 0],
            [0, 2, 1, 1, 1, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ]
    ][K],
    Qd = X.length,
    Rd = X[0].length,
    Sd = 50 * Rd,
    Td = 50 * Qd,
    Ud = 0,
    Y = [],
    Vd = {
        10010: [4, 0],
        10001: [3, 3],
        11E3: [0, 1],
        10100: [0, 2],
        11010: [4, 1],
        10101: [3, 2],
        10110: [0, 0],
        10011: [2, 0],
        11001: [4, 2],
        11100: [2, 3],
        11110: [1, 1],
        10111: [1, 0],
        11011: [2, 1],
        11101: [1, 2],
        11111: [2, 2],
        null0: [4, 3],
        null1: [3, 0],
        null2: [3, 1],
        null3: [0, 3],
        null4: [1, 3]
    };

function Wd() {
    function a(n, q) {
        return 0 > n || n >= Rd || 0 > q || q >= Qd ? "0" : 0 == X[q][n] ? "0" : "1"
    }
    var c = document.getElementById("svgMaze"),
        d = 50 * Math.max(Qd, Rd);
    c.setAttribute("viewBox", "0 0 " + d + " " + d);
    d = document.createElementNS(h.g.m.qc, "rect");
    d.setAttribute("width", Sd);
    d.setAttribute("height", Td);
    d.setAttribute("fill", "#F1EEE7");
    d.setAttribute("stroke-width", 1);
    d.setAttribute("stroke", "#CCB");
    c.appendChild(d);
    if (U.background) {
        var e = document.createElementNS(h.g.m.qc, "image");
        e.setAttributeNS(h.g.m.dd, "xlink:href",
            U.background);
        e.setAttribute("height", Td);
        e.setAttribute("width", Sd);
        e.setAttribute("x", 0);
        e.setAttribute("y", 0);
        c.appendChild(e)
    }
    if (U.Tj) {
        for (d = 0; d < Qd; d++) {
            var f = document.createElementNS(h.g.m.qc, "line");
            f.setAttribute("y1", 50 * d + 25.5);
            f.setAttribute("x2", Sd);
            f.setAttribute("y2", 50 * d + 25.5);
            f.setAttribute("stroke", U.Tj);
            f.setAttribute("stroke-width", 1);
            c.appendChild(f)
        }
        for (d = 0; d < Rd; d++) f = document.createElementNS(h.g.m.qc, "line"), f.setAttribute("x1", 50 * d + 25.5), f.setAttribute("x2", 50 * d + 25.5), f.setAttribute("y2",
            Td), f.setAttribute("stroke", U.Tj), f.setAttribute("stroke-width", 1), c.appendChild(f)
    }
    for (f = d = 0; f < Qd; f++)
        for (var g = 0; g < Rd; g++) {
            var k = a(g, f) + a(g, f - 1) + a(g + 1, f) + a(g, f + 1) + a(g - 1, f);
            Vd[k] || (k = "00000" == k && .3 < Math.random() ? "null0" : "null" + Math.floor(1 + 4 * Math.random()));
            var l = Vd[k][0];
            k = Vd[k][1];
            var m = document.createElementNS(h.g.m.qc, "clipPath");
            m.id = "tileClipPath" + d;
            e = document.createElementNS(h.g.m.qc, "rect");
            e.setAttribute("width", 50);
            e.setAttribute("height", 50);
            e.setAttribute("x", 50 * g);
            e.setAttribute("y",
                50 * f);
            m.appendChild(e);
            c.appendChild(m);
            e = document.createElementNS(h.g.m.qc, "image");
            e.setAttributeNS(h.g.m.dd, "xlink:href", U.Yq);
            e.setAttribute("height", 200);
            e.setAttribute("width", 250);
            e.setAttribute("clip-path", "url(#tileClipPath" + d + ")");
            e.setAttribute("x", 50 * (g - l));
            e.setAttribute("y", 50 * (f - k));
            c.appendChild(e);
            d++
        }
    d = document.createElementNS(h.g.m.qc, "image");
    d.id = "finish";
    d.setAttributeNS(h.g.m.dd, "xlink:href", U.Om);
    d.setAttribute("height", 34);
    d.setAttribute("width", 20);
    c.appendChild(d);
    d = document.createElementNS(h.g.m.qc,
        "clipPath");
    d.id = "pegmanClipPath";
    e = document.createElementNS(h.g.m.qc, "rect");
    e.id = "clipRect";
    e.setAttribute("width", 49);
    e.setAttribute("height", 52);
    d.appendChild(e);
    c.appendChild(d);
    d = document.createElementNS(h.g.m.qc, "image");
    d.id = "pegman";
    d.setAttributeNS(h.g.m.dd, "xlink:href", U.Oi);
    d.setAttribute("height", 52);
    d.setAttribute("width", 1029);
    d.setAttribute("clip-path", "url(#pegmanClipPath)");
    c.appendChild(d)
}

function Xd(a) {
    if (!(a && a.type == h.i.Nl || H.yc() || 1 == Ud || Nc(K))) {
        a = -1 != Ic.indexOf(J);
        var c = h.K.Mc(h.K.qn()),
            d = G(H.P.s, !0),
            e = null,
            f = null,
            g = null;
        if (1 == K) 2 > F(H).length ? (e = document.getElementById("dialogHelpStack"), g = {
            width: "370px",
            top: "130px"
        }, g[a ? "right" : "left"] = "215px", f = d[0].Y()) : (d = G(H, !0), 1 < d.length ? (O.tA("sampleOneTopBlock", '<xml>;<block type="maze_moveForward" x="10" y="10">;<next>;<block type="maze_moveForward"></block>;</next>;</block>;</xml>'.split(";")), e = document.getElementById("dialogHelpOneTopBlock"),
            g = {
                width: "360px",
                top: "120px"
            }, g[a ? "right" : "left"] = "225px", f = d[0].Y()) : 0 == Ud && (e = document.getElementById("dialogHelpRun"), g = {
            width: "360px",
            top: "410px"
        }, g[a ? "right" : "left"] = "400px", f = document.getElementById("runButton")));
        else if (2 == K) 0 != Ud && "none" == document.getElementById("runButton").style.display && (e = document.getElementById("dialogHelpReset"), g = {
            width: "360px",
            top: "410px"
        }, g[a ? "right" : "left"] = "400px", f = document.getElementById("resetButton"));
        else if (3 == K) - 1 == c.indexOf("maze_forever") && (0 == Ra(H) ? (e =
            document.getElementById("dialogHelpCapacity"), g = {
                width: "430px",
                top: "310px"
            }, g[a ? "right" : "left"] = "50px", f = document.getElementById("capacityBubble")) : (e = document.getElementById("dialogHelpRepeat"), g = {
            width: "360px",
            top: "360px"
        }, g[a ? "right" : "left"] = "425px", f = d[3].Y()));
        else if (4 == K)
            if (0 == Ra(H) && (-1 == c.indexOf("maze_forever") || 1 < G(H, !1).length)) e = document.getElementById("dialogHelpCapacity"), g = {
                width: "430px",
                top: "310px"
            }, g[a ? "right" : "left"] = "50px", f = document.getElementById("capacityBubble");
            else {
                c = !0;
                for (var k = F(H), l = 0; l < k.length; l++) {
                    var m = k[l];
                    if ("maze_forever" == m.type) {
                        for (var n = 0; m;) m = Qa(m), m = m.length ? m[0] : null, n++;
                        if (2 < n) {
                            c = !1;
                            break
                        }
                    }
                }
                c && (e = document.getElementById("dialogHelpRepeatMany"), g = {
                    width: "360px",
                    top: "360px"
                }, g[a ? "right" : "left"] = "425px", f = d[3].Y())
            }
        else if (5 == K) 0 != Nd || Yd.ty || (e = document.getElementById("dialogHelpSkins"), g = {
            width: "360px",
            top: "60px"
        }, g[a ? "left" : "right"] = "20px", f = document.getElementById("pegmanButton"));
        else if (6 == K) - 1 == c.indexOf("maze_if") && (e = document.getElementById("dialogHelpIf"),
            g = {
                width: "360px",
                top: "430px"
            }, g[a ? "right" : "left"] = "425px", f = d[4].Y());
        else if (7 == K) {
            if (!Xd.sA) {
                k = document.createElement("span");
                k.className = "helpMenuFake";
                l = [L("Maze_pathAhead"), L("Maze_pathLeft"), L("Maze_pathRight")];
                n = h.g.Da.st(l);
                m = h.g.Da.tt(l);
                k.textContent = (m ? l[0].slice(n, -m) : l[0].substring(n)) + " " + h.Fa.cl;
                n = document.getElementById("helpMenuText");
                l = n.textContent;
                n.textContent = "";
                m = l.split(/%\d/);
                for (l = 0; l < m.length; l++) n.appendChild(document.createTextNode(m[l])), l != m.length - 1 && n.appendChild(k.cloneNode(!0));
                Xd.sA = !0
            } - 1 == c.indexOf("isPathRight") && (e = document.getElementById("dialogHelpMenu"), g = {
                width: "360px",
                top: "430px"
            }, g[a ? "right" : "left"] = "425px", f = d[4].Y())
        } else 9 == K && -1 == c.indexOf("maze_ifElse") && (e = document.getElementById("dialogHelpIfElse"), g = {
            width: "360px",
            top: "305px"
        }, g[a ? "right" : "left"] = "425px", f = d[5].Y());
        e ? e.parentNode != document.getElementById("dialog") && N.Ni(e, f, !0, !1, g, null) : N.kc(!1)
    }
}

function Yd(a) {
    var c = document.getElementById("pegmanMenu");
    "block" == c.style.display ? Zd(a) : O.hd(a) || (a = document.getElementById("pegmanButton"), a.classList.add("buttonHover"), c.style.top = a.offsetTop + a.offsetHeight + "px", c.style.left = a.offsetLeft + "px", c.style.display = "block", md.wq = h.Xb(document.body, "mousedown", null, Zd), (c = document.getElementById("dialogHelpSkins")) && "dialogHiddenContent" != c.className && N.kc(!1), Yd.ty = !0)
}

function Zd(a) {
    O.hd(a) || (document.getElementById("pegmanMenu").style.display = "none", document.getElementById("pegmanButton").classList.remove("buttonHover"), md.wq && (h.fb(md.wq), delete md.wq))
}

function $d(a) {
    for (var c = 0; c < Y.length; c++) window.clearTimeout(Y[c]);
    Y = [];
    Q = nd.x;
    S = nd.y;
    a ? (T = 2, ae(!1), Y.push(setTimeout(function() {
        P = 100;
        be([Q, S, 4 * T - 4]);
        T++
    }, 5 * P))) : (T = 1, Z(Q, S, 4 * T));
    c = document.getElementById("finish");
    c.setAttribute("x", 50 * (od.x + .5) - c.getAttribute("width") / 2);
    c.setAttribute("y", 50 * (od.y + .6) - c.getAttribute("height"));
    c = document.getElementById("look");
    c.style.display = "none";
    c.parentNode.appendChild(c);
    a = c.getElementsByTagName("path");
    c = 0;
    for (var d; d = a[c]; c++) d.setAttribute("stroke",
        U.Xp)
}

function ce(a) {
    if (!O.hd(a))
        if (N.kc(!1), 1 == K && 1 < G(H, !1).length && 1 != Ud && !Nc(K)) Xd();
        else {
            a = document.getElementById("runButton");
            var c = document.getElementById("resetButton");
            c.style.minWidth || (c.style.minWidth = a.offsetWidth + "px");
            a.style.display = "none";
            c.style.display = "inline";
            $d(!1);
            de()
        }
}

function ee(a) {
    O.hd(a) || (document.getElementById("runButton").style.display = "inline", document.getElementById("resetButton").style.display = "none", yc(null), $d(!1), Xd())
}

function fe(a, c) {
    var d = function(e) {
        ge(0, e)
    };
    a.setProperty(c, "moveForward", a.createNativeFunction(d));
    d = function(e) {
        ge(2, e)
    };
    a.setProperty(c, "moveBackward", a.createNativeFunction(d));
    d = function(e) {
        he(0, e)
    };
    a.setProperty(c, "turnLeft", a.createNativeFunction(d));
    d = function(e) {
        he(1, e)
    };
    a.setProperty(c, "turnRight", a.createNativeFunction(d));
    d = function(e) {
        return ie(0, e)
    };
    a.setProperty(c, "isPathForward", a.createNativeFunction(d));
    d = function(e) {
        return ie(1, e)
    };
    a.setProperty(c, "isPathRight", a.createNativeFunction(d));
    d = function(e) {
        return ie(2, e)
    };
    a.setProperty(c, "isPathBackward", a.createNativeFunction(d));
    d = function(e) {
        return ie(3, e)
    };
    a.setProperty(c, "isPathLeft", a.createNativeFunction(d));
    a.setProperty(c, "notDone", a.createNativeFunction(function() {
        return Q != od.x || S != od.y
    }))
}

function de() {
    if ("Interpreter" in window) {
        pd = [];
        h.selected && cb(h.selected);
        var a = fd();
        Ud = 0;
        a = new Interpreter(a, fe);
        try {
            for (var c = 1E4; a.step();)
                if (0 == c--) throw Infinity;
            Ud = Q != od.x || S != od.y ? -1 : 1
        } catch (d) {
            Infinity === d ? Ud = 2 : !1 === d ? Ud = -2 : (Ud = -2, alert(d))
        }
        1 == Ud ? (P = 100, pd.push(["finish", null])) : P = 150;
        $d(!1);
        Y.push(setTimeout(je, 100))
    } else setTimeout(de, 250)
}

function je() {
    var a = pd.shift();
    if (a) {
        O.zm(a[1]);
        switch (a[0]) {
            case "north":
                be([Q, S - 1, 4 * T]);
                S--;
                break;
            case "east":
                be([Q + 1, S, 4 * T]);
                Q++;
                break;
            case "south":
                be([Q, S + 1, 4 * T]);
                S++;
                break;
            case "west":
                be([Q - 1, S, 4 * T]);
                Q--;
                break;
            case "look_north":
                ke(0);
                break;
            case "look_east":
                ke(1);
                break;
            case "look_south":
                ke(2);
                break;
            case "look_west":
                ke(3);
                break;
            case "fail_forward":
                le(!0);
                break;
            case "fail_backward":
                le(!1);
                break;
            case "left":
                be([Q, S, 4 * T - 4]);
                T = me(T - 1);
                break;
            case "right":
                be([Q, S, 4 * T + 4]);
                T = me(T + 1);
                break;
            case "finish":
                ae(!0),
                    O.vB(), setTimeout(N.Xy, 1E3)
        }
        Y.push(setTimeout(je, 5 * P))
    } else O.zm(null), Xd()
}

function ne(a) {
    if ("dialogHiddenContent" != document.getElementById("dialogDone").className) {
        var c = document.getElementById("pegSpin"),
            d = N.fu(c),
            e = a.clientX - (d.x + d.width / 2 - window.pageXOffset);
        a = h.g.pd.QB(Math.atan((a.clientY - (d.y + d.height / 2 - window.pageYOffset)) / e));
        e = Math.round((0 < e ? a + 90 : a + 270) / 360 * 16);
        16 == e && (e = 15);
        c.style.backgroundPosition = 49 * -e + "px 0px"
    }
}

function be(a) {
    var c = [Q, S, 4 * T],
        d = [(a[0] - c[0]) / 4, (a[1] - c[1]) / 4, (a[2] - c[2]) / 4];
    Z(c[0] + d[0], c[1] + d[1], oe(c[2] + d[2]));
    Y.push(setTimeout(function() {
        Z(c[0] + 2 * d[0], c[1] + 2 * d[1], oe(c[2] + 2 * d[2]))
    }, P));
    Y.push(setTimeout(function() {
        Z(c[0] + 3 * d[0], c[1] + 3 * d[1], oe(c[2] + 3 * d[2]))
    }, 2 * P));
    Y.push(setTimeout(function() {
        Z(a[0], a[1], oe(a[2]))
    }, 3 * P))
}

function le(a) {
    var c = 0,
        d = 0;
    switch (T) {
        case 0:
            d = -1;
            break;
        case 1:
            c = 1;
            break;
        case 2:
            d = 1;
            break;
        case 3:
            c = -1
    }
    a || (c = -c, d = -d);
    if (1 == U.$l) {
        c /= 4;
        d /= 4;
        var e = oe(4 * T);
        Z(Q + c, S + d, e);
        H.Bc.play("fail", .5);
        Y.push(setTimeout(function() {
            Z(Q, S, e)
        }, P));
        Y.push(setTimeout(function() {
            Z(Q + c, S + d, e);
            H.Bc.play("fail", .5)
        }, 2 * P));
        Y.push(setTimeout(function() {
            Z(Q, S, e)
        }, 3 * P))
    } else {
        var f = 10 * (Math.random() - .5),
            g = (Math.random() - .5) / 2;
        c += (Math.random() - .5) / 4;
        d += (Math.random() - .5) / 4;
        c /= 8;
        d /= 8;
        var k = 0;
        3 == U.$l && (k = .01);
        Y.push(setTimeout(function() {
            H.Bc.play("fail",
                .5)
        }, 2 * P));
        a = function(m) {
            return function() {
                Z(Q + c * m, S + d * m, oe(4 * T + g * m), f * m);
                d += k
            }
        };
        for (var l = 1; 100 > l; l++) Y.push(setTimeout(a(l), P * l / 2))
    }
}

function ae(a) {
    var c = oe(4 * T);
    Z(Q, S, 16);
    a && H.Bc.play("win", .5);
    P = 150;
    Y.push(setTimeout(function() {
        Z(Q, S, 18)
    }, P));
    Y.push(setTimeout(function() {
        Z(Q, S, 16)
    }, 2 * P));
    Y.push(setTimeout(function() {
        Z(Q, S, c)
    }, 3 * P))
}

function Z(a, c, d, e) {
    var f = document.getElementById("pegman");
    f.setAttribute("x", 50 * a - 49 * d + 1);
    f.setAttribute("y", 50 * (c + .5) - 26 - 8);
    e ? f.setAttribute("transform", "rotate(" + e + ", " + (50 * a + 25) + ", " + (50 * c + 25) + ")") : f.setAttribute("transform", "rotate(0, 0, 0)");
    c = document.getElementById("clipRect");
    c.setAttribute("x", 50 * a + 1);
    c.setAttribute("y", f.getAttribute("y"))
}

function ke(a) {
    var c = Q,
        d = S;
    switch (a) {
        case 0:
            c += .5;
            break;
        case 1:
            c += 1;
            d += .5;
            break;
        case 2:
            c += .5;
            d += 1;
            break;
        case 3:
            d += .5
    }
    c *= 50;
    d *= 50;
    var e = 90 * a - 45;
    a = document.getElementById("look");
    a.setAttribute("transform", "translate(" + c + ", " + d + ") rotate(" + e + " 0 0) scale(.4)");
    c = a.getElementsByTagName("path");
    a.style.display = "inline";
    for (d = 0; a = c[d]; d++) pe(a, P * d)
}

function pe(a, c) {
    Y.push(setTimeout(function() {
        a.style.display = "inline";
        setTimeout(function() {
            a.style.display = "none"
        }, 2 * P)
    }, c))
}

function me(a) {
    a = Math.round(a) % 4;
    0 > a && (a += 4);
    return a
}

function oe(a) {
    a = Math.round(a) % 16;
    0 > a && (a += 16);
    return a
}

function ge(a, c) {
    if (!ie(a, null)) throw pd.push(["fail_" + (a ? "backward" : "forward"), c]), !1;
    switch (me(T + a)) {
        case 0:
            S--;
            var d = "north";
            break;
        case 1:
            Q++;
            d = "east";
            break;
        case 2:
            S++;
            d = "south";
            break;
        case 3:
            Q--, d = "west"
    }
    pd.push([d, c])
}

function he(a, c) {
    a ? (T++, pd.push(["right", c])) : (T--, pd.push(["left", c]));
    T = me(T)
}

function ie(a, c) {
    switch (me(T + a)) {
        case 0:
            var d = X[S - 1] && X[S - 1][Q];
            var e = "look_north";
            break;
        case 1:
            d = X[S][Q + 1];
            e = "look_east";
            break;
        case 2:
            d = X[S + 1] && X[S + 1][Q];
            e = "look_south";
            break;
        case 3:
            d = X[S][Q - 1], e = "look_west"
    }
    c && pd.push([e, c]);
    return 0 !== d && void 0 !== d
}
window.addEventListener("load", function() {
    function a() {
        l.style.top = Math.max(10, m.offsetTop - window.pageYOffset) + "px";
        l.style.left = k ? "10px" : "420px";
        l.style.width = window.innerWidth - 440 + "px"
    }

    function c(n) {
        return function() {
            if (window.sessionStorage) {
                var q = h.K.qn();
                q = h.K.Mc(q);
                window.sessionStorage.Vp = q
            }
            window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + J + "&level=" + K + "&skin=" + n
        }
    }
    document.body.innerHTML = Md();
    O.wa();
    document.querySelector("#pegmanButton>img").style.backgroundImage =
        "url(" + U.Oi + ")";
    for (var d = document.getElementById("pegmanMenu"), e = 0; e < Pd.length; e++)
        if (e != Nd) {
            var f = document.createElement("div"),
                g = document.createElement("img");
            g.src = "common/1x1.gif";
            g.style.backgroundImage = "url(" + Pd[e].Oi + ")";
            f.appendChild(g);
            d.appendChild(f);
            h.Xb(f, "mousedown", null, c(e))
        }
    h.Xb(window, "resize", null, Zd);
    d = document.getElementById("pegmanButton");
    h.Xb(d, "mousedown", null, Yd);
    d = document.getElementById("pegmanButtonArrow");
    e = document.createTextNode(h.Fa.cl);
    d.appendChild(e);
    var k = -1 !=
        Ic.indexOf(J),
        l = document.getElementById("blockly"),
        m = document.getElementById("visualization");
    window.addEventListener("scroll", function() {
        a(null);
        h.Rk(H)
    });
    window.addEventListener("resize", a);
    a(null);
    d = document.getElementById("toolbox");
    H = h.Hf("blockly", {
        media: "third-party/blockly/media/",
        maxBlocks: Od,
        rtl: k,
        toolbox: d,
        trashcan: !0,
        zoom: {
            startScale: 1 + (1 - K / 10) / 3
        }
    });
    H.Bc.load(U.ir, "win");
    H.Bc.load(U.Oo, "fail");
    ld("moveForward,moveBackward,turnRight,turnLeft,isPathForward,isPathRight,isPathBackward,isPathLeft");
    Wd();
    O.EA('<xml><block movable="' + (1 != K) + '" type="maze_moveForward" x="70" y="70"></block></xml>', !1);
    for (d = 0; d < Qd; d++)
        for (e = 0; e < Rd; e++) 2 == X[d][e] ? nd = {
            x: e,
            y: d
        } : 3 == X[d][e] && (od = {
            x: e,
            y: d
        });
    $d(!0);
    Ua(H, function() {
        var n = Ra(H),
            q = document.getElementById("capacity");
        if (Infinity == n) q.style.display = "none";
        else {
            q.style.display = "inline";
            q.innerHTML = "";
            n = Number(n);
            var r = document.createElement("span");
            r.className = "capacityNumber";
            r.appendChild(document.createTextNode(n));
            n = (0 == n ? L("Maze_capacity0") : 1 == n ? L("Maze_capacity1") :
                L("Maze_capacity2")).split(/%\d/);
            for (var t = 0; t < n.length; t++) q.appendChild(document.createTextNode(n[t])), t != n.length - 1 && q.appendChild(r.cloneNode(!0))
        }
    });
    document.body.addEventListener("mousemove", ne, !0);
    Qc("runButton", ce);
    Qc("resetButton", ee);
    1 == K && (h.ec *= 2, h.Fr = h.ec);
    10 == K ? Nc(K) || (d = document.getElementById("dialogHelpWallFollow"), N.Ni(d, null, !1, !0, {
        width: "30%",
        left: "35%",
        top: "12em"
    }, N.Wv), N.Sv(), setTimeout(N.Zs, 3E5)) : setTimeout(function() {
        Ua(H, Xd);
        Xd()
    }, 5E3);
    d = document.getElementById("dialogDoneButtons");
    e = document.createElement("img");
    e.id = "pegSpin";
    e.src = "common/1x1.gif";
    e.style.backgroundImage = "url(" + U.Oi + ")";
    d.parentNode.insertBefore(e, d);
    setTimeout(O.oA, 1);
    setTimeout(O.pA, 1)
});