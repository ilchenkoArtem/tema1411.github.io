! function (Zt, en) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = Zt.document ? en(Zt, !0) : function (tn) {
		if (!tn.document) throw new Error("jQuery requires a window with a document");
		return en(tn)
	} : en(Zt)
}("undefined" == typeof window ? this : window, function (Zt, en) {
	"use strict";

	function tn(to, no, so) {
		var ao, oo = (no = no || rs).createElement("script");
		if (oo.text = to, so)
			for (ao in vs) so[ao] && (oo[ao] = so[ao]);
		no.head.appendChild(oo).parentNode.removeChild(oo)
	}

	function nn(to) {
		return null == to ? to + "" : "object" == typeof to || "function" == typeof to ? us[hs.call(to)] || "object" : typeof to
	}

	function sn(to) {
		var no = !!to && "length" in to && to.length,
			so = nn(to);
		return !bs(to) && !xs(to) && ("array" === so || 0 === no || "number" == typeof no && 0 < no && no - 1 in to)
	}

	function an(to, no) {
		return to.nodeName && to.nodeName.toLowerCase() === no.toLowerCase()
	}

	function on(to, no, so) {
		return bs(no) ? ws.grep(to, function (ao, oo) {
			return !!no.call(ao, oo, ao) !== so
		}) : no.nodeType ? ws.grep(to, function (ao) {
			return ao === no !== so
		}) : "string" == typeof no ? ws.filter(no, to, so) : ws.grep(to, function (ao) {
			return -1 < cs.call(no, ao) !== so
		})
	}

	function rn(to, no) {
		for (;
			(to = to[no]) && 1 !== to.nodeType;);
		return to
	}

	function ln(to) {
		var no = {};
		return ws.each(to.match(Hs) || [], function (so, ao) {
			no[ao] = !0
		}), no
	}

	function dn(to) {
		return to
	}

	function pn(to) {
		throw to
	}

	function cn(to, no, so, ao) {
		var oo;
		try {
			to && bs(oo = to.promise) ? oo.call(to).done(no).fail(so) : to && bs(oo = to.then) ? oo.call(to, no, so) : no.apply(void 0, [to].slice(ao))
		} catch (ro) {
			so.apply(void 0, [ro])
		}
	}

	function un() {
		rs.removeEventListener("DOMContentLoaded", un), Zt.removeEventListener("load", un), ws.ready()
	}

	function hn(to, no) {
		return no.toUpperCase()
	}

	function fn(to) {
		return to.replace(_s, "ms-").replace(Bs, hn)
	}

	function gn() {
		this.expando = ws.expando + gn.uid++
	}

	function mn(to) {
		return "true" === to || "false" !== to && ("null" === to ? null : to === +to + "" ? +to : zs.test(to) ? JSON.parse(to) : to)
	}

	function yn(to, no, so) {
		var ao;
		if (void 0 === so && 1 === to.nodeType)
			if (ao = "data-" + no.replace(Us, "-$&").toLowerCase(), "string" == typeof (so = to.getAttribute(ao))) {
				try {
					so = mn(so)
				} catch (oo) {}
				Rs.set(to, no, so)
			} else so = void 0;
		return so
	}

	function bn(to, no, so, ao) {
		var oo, ro, io = 20,
			lo = ao ? function () {
				return ao.cur()
			} : function () {
				return ws.css(to, no, "")
			},
			po = lo(),
			co = so && so[3] || (ws.cssNumber[no] ? "" : "px"),
			uo = (ws.cssNumber[no] || "px" !== co && +po) && $s.exec(ws.css(to, no));
		if (uo && uo[3] !== co) {
			for (po /= 2, co = co || uo[3], uo = +po || 1; io--;) ws.style(to, no, uo + co), 0 >= (1 - ro) * (1 - (ro = lo() / po || .5)) && (io = 0), uo /= ro;
			uo *= 2, ws.style(to, no, uo + co), so = so || []
		}
		return so && (uo = +uo || +po || 0, oo = so[1] ? uo + (so[1] + 1) * so[2] : +so[2], ao && (ao.unit = co, ao.start = uo, ao.end = oo)), oo
	}

	function xn(to) {
		var no, so = to.ownerDocument,
			ao = to.nodeName,
			oo = Vs[ao];
		return oo || (no = so.body.appendChild(so.createElement(ao)), oo = ws.css(no, "display"), no.parentNode.removeChild(no), "none" === oo && (oo = "block"), Vs[ao] = oo, oo)
	}

	function vn(to, no) {
		for (var so, ao, oo = [], ro = 0, io = to.length; ro < io; ro++)(ao = to[ro]).style && (so = ao.style.display, no ? ("none" === so && (oo[ro] = Ws.get(ao, "display") || null, oo[ro] || (ao.style.display = "")), "" === ao.style.display && Gs(ao) && (oo[ro] = xn(ao))) : "none" !== so && (oo[ro] = "none", Ws.set(ao, "display", so)));
		for (ro = 0; ro < io; ro++) null != oo[ro] && (to[ro].style.display = oo[ro]);
		return to
	}

	function An(to, no) {
		var so;
		return so = "undefined" == typeof to.getElementsByTagName ? "undefined" == typeof to.querySelectorAll ? [] : to.querySelectorAll(no || "*") : to.getElementsByTagName(no || "*"), void 0 === no || no && an(to, no) ? ws.merge([to], so) : so
	}

	function wn(to, no) {
		for (var so = 0, ao = to.length; so < ao; so++) Ws.set(to[so], "globalEval", !no || Ws.get(no[so], "globalEval"))
	}

	function Tn(to, no, so, ao, oo) {
		for (var ro, io, lo, po, co, uo, ho = no.createDocumentFragment(), fo = [], go = 0, mo = to.length; go < mo; go++)
			if ((ro = to[go]) || 0 === ro)
				if ("object" === nn(ro)) ws.merge(fo, ro.nodeType ? [ro] : ro);
				else if (ea.test(ro)) {
			for (io = io || ho.appendChild(no.createElement("div")), lo = (Ks.exec(ro) || ["", ""])[1].toLowerCase(), po = Zs[lo] || Zs._default, io.innerHTML = po[1] + ws.htmlPrefilter(ro) + po[2], uo = po[0]; uo--;) io = io.lastChild;
			ws.merge(fo, io.childNodes), (io = ho.firstChild).textContent = ""
		} else fo.push(no.createTextNode(ro));
		for (ho.textContent = "", go = 0; ro = fo[go++];)
			if (ao && -1 < ws.inArray(ro, ao)) oo && oo.push(ro);
			else if (co = ws.contains(ro.ownerDocument, ro), io = An(ho.appendChild(ro), "script"), co && wn(io), so)
			for (uo = 0; ro = io[uo++];) Js.test(ro.type || "") && so.push(ro);
		return ho
	}

	function Cn() {
		return !0
	}

	function Sn() {
		return !1
	}

	function En() {
		try {
			return rs.activeElement
		} catch (to) {}
	}

	function kn(to, no, so, ao, oo, ro) {
		var io, lo;
		if ("object" == typeof no) {
			for (lo in "string" != typeof so && (ao = ao || so, so = void 0), no) kn(to, lo, so, ao, no[lo], ro);
			return to
		}
		if (null == ao && null == oo ? (oo = so, ao = so = void 0) : null == oo && ("string" == typeof so ? (oo = ao, ao = void 0) : (oo = ao, ao = so, so = void 0)), !1 === oo) oo = Sn;
		else if (!oo) return to;
		return 1 === ro && (io = oo, (oo = function (po) {
			return ws().off(po), io.apply(this, arguments)
		}).guid = io.guid || (io.guid = ws.guid++)), to.each(function () {
			ws.event.add(this, no, oo, ao, so)
		})
	}

	function Ln(to, no) {
		return an(to, "table") && an(11 === no.nodeType ? no.firstChild : no, "tr") ? ws(to).children("tbody")[0] || to : to
	}

	function Dn(to) {
		return to.type = (null !== to.getAttribute("type")) + "/" + to.type, to
	}

	function Nn(to) {
		return "true/" === (to.type || "").slice(0, 5) ? to.type = to.type.slice(5) : to.removeAttribute("type"), to
	}

	function jn(to, no) {
		var so, ao, oo, ro, io, lo, po, co;
		if (1 === no.nodeType) {
			if (Ws.hasData(to) && (ro = Ws.access(to), io = Ws.set(no, ro), co = ro.events))
				for (oo in delete io.handle, io.events = {}, co)
					for (so = 0, ao = co[oo].length; so < ao; so++) ws.event.add(no, oo, co[oo][so]);
			Rs.hasData(to) && (lo = Rs.access(to), po = ws.extend({}, lo), Rs.set(no, po))
		}
	}

	function qn(to, no) {
		var so = no.nodeName.toLowerCase();
		"input" === so && Ys.test(to.type) ? no.checked = to.checked : "input" !== so && "textarea" !== so || (no.defaultValue = to.defaultValue)
	}

	function Hn(to, no, so, ao) {
		no = ds.apply([], no);
		var oo, ro, io, lo, po, co, uo = 0,
			ho = to.length,
			go = no[0],
			mo = bs(go);
		if (mo || 1 < ho && "string" == typeof go && !ys.checkClone && la.test(go)) return to.each(function (yo) {
			var bo = to.eq(yo);
			mo && (no[0] = go.call(this, yo, bo.html())), Hn(bo, no, so, ao)
		});
		if (ho && (oo = Tn(no, to[0].ownerDocument, !1, to, ao), ro = oo.firstChild, 1 === oo.childNodes.length && (oo = ro), ro || ao)) {
			for (lo = (io = ws.map(An(oo, "script"), Dn)).length; uo < ho; uo++) po = oo, uo != ho - 1 && (po = ws.clone(po, !0, !0), lo && ws.merge(io, An(po, "script"))), so.call(to[uo], po, uo);
			if (lo)
				for (co = io[io.length - 1].ownerDocument, ws.map(io, Nn), uo = 0; uo < lo; uo++) po = io[uo], Js.test(po.type || "") && !Ws.access(po, "globalEval") && ws.contains(co, po) && (po.src && "module" !== (po.type || "").toLowerCase() ? ws._evalUrl && ws._evalUrl(po.src) : tn(po.textContent.replace(da, ""), co, po))
		}
		return to
	}

	function Pn(to, no, so) {
		for (var ao, oo = no ? ws.filter(no, to) : to, ro = 0; null != (ao = oo[ro]); ro++) so || 1 !== ao.nodeType || ws.cleanData(An(ao)), ao.parentNode && (so && ws.contains(ao.ownerDocument, ao) && wn(An(ao, "script")), ao.parentNode.removeChild(ao));
		return to
	}

	function On(to, no, so) {
		var ao, oo, ro, io, lo = to.style;
		return (so = so || ca(to)) && ("" !== (io = so.getPropertyValue(no) || so[no]) || ws.contains(to.ownerDocument, to) || (io = ws.style(to, no)), !ys.pixelBoxStyles() && pa.test(io) && ua.test(no) && (ao = lo.width, oo = lo.minWidth, ro = lo.maxWidth, lo.minWidth = lo.maxWidth = lo.width = io, io = so.width, lo.width = ao, lo.minWidth = oo, lo.maxWidth = ro)), void 0 === io ? io : io + ""
	}

	function Mn(to, no) {
		return {
			get: function () {
				return to() ? void delete this.get : (this.get = no).apply(this, arguments)
			}
		}
	}

	function _n(to) {
		if (to in xa) return to;
		for (var no = to[0].toUpperCase() + to.slice(1), so = ya.length; so--;)
			if ((to = ya[so] + no) in xa) return to
	}

	function Bn(to) {
		var no = ws.cssProps[to];
		return no || (no = ws.cssProps[to] = _n(to) || to), no
	}

	function In(to, no, so) {
		var ao = $s.exec(no);
		return ao ? Math.max(0, ao[2] - (so || 0)) + (ao[3] || "px") : no
	}

	function Wn(to, no, so, ao, oo, ro) {
		var io = "width" === no ? 1 : 0,
			lo = 0,
			po = 0;
		if (so === (ao ? "border" : "content")) return 0;
		for (; 4 > io; io += 2) "margin" === so && (po += ws.css(to, so + Xs[io], !0, oo)), ao ? ("content" === so && (po -= ws.css(to, "padding" + Xs[io], !0, oo)), "margin" !== so && (po -= ws.css(to, "border" + Xs[io] + "Width", !0, oo))) : (po += ws.css(to, "padding" + Xs[io], !0, oo), "padding" === so ? lo += ws.css(to, "border" + Xs[io] + "Width", !0, oo) : po += ws.css(to, "border" + Xs[io] + "Width", !0, oo));
		return !ao && 0 <= ro && (po += Math.max(0, Math.ceil(to["offset" + no[0].toUpperCase() + no.slice(1)] - ro - po - lo - .5))), po
	}

	function Rn(to, no, so) {
		var ao = ca(to),
			oo = On(to, no, ao),
			ro = "border-box" === ws.css(to, "boxSizing", !1, ao),
			io = ro;
		if (pa.test(oo)) {
			if (!so) return oo;
			oo = "auto"
		}
		return io = io && (ys.boxSizingReliable() || oo === to.style[no]), ("auto" === oo || !parseFloat(oo) && "inline" === ws.css(to, "display", !1, ao)) && (oo = to["offset" + no[0].toUpperCase() + no.slice(1)], io = !0), (oo = parseFloat(oo) || 0) + Wn(to, no, so || (ro ? "border" : "content"), io, ao, oo) + "px"
	}

	function zn(to, no, so, ao, oo) {
		return new zn.prototype.init(to, no, so, ao, oo)
	}

	function Un() {
		Aa && (!1 === rs.hidden && Zt.requestAnimationFrame ? Zt.requestAnimationFrame(Un) : Zt.setTimeout(Un, ws.fx.interval), ws.fx.tick())
	}

	function Fn() {
		return Zt.setTimeout(function () {
			va = void 0
		}), va = Date.now()
	}

	function $n(to, no) {
		var so, ao = 0,
			oo = {
				height: to
			};
		for (no = no ? 1 : 0; 4 > ao; ao += 2 - no) oo["margin" + (so = Xs[ao])] = oo["padding" + so] = to;
		return no && (oo.opacity = oo.width = to), oo
	}

	function Xn(to, no, so) {
		for (var ao, oo = (Vn.tweeners[no] || []).concat(Vn.tweeners["*"]), ro = 0, io = oo.length; ro < io; ro++)
			if (ao = oo[ro].call(so, no, to)) return ao
	}

	function Qn(to, no) {
		var so, ao, oo, ro, io;
		for (so in to)
			if (ao = fn(so), oo = no[ao], ro = to[so], Array.isArray(ro) && (oo = ro[1], ro = to[so] = ro[0]), so !== ao && (to[ao] = ro, delete to[so]), (io = ws.cssHooks[ao]) && "expand" in io)
				for (so in ro = io.expand(ro), delete to[ao], ro) so in to || (to[so] = ro[so], no[so] = oo);
			else no[ao] = oo
	}

	function Vn(to, no, so) {
		var ao, oo, ro = 0,
			io = Vn.prefilters.length,
			lo = ws.Deferred().always(function () {
				delete po.elem
			}),
			po = function () {
				if (oo) return !1;
				for (var ho = va || Fn(), fo = Math.max(0, co.startTime + co.duration - ho), go = 1 - (fo / co.duration || 0), mo = 0, yo = co.tweens.length; mo < yo; mo++) co.tweens[mo].run(go);
				return lo.notifyWith(to, [co, go, fo]), 1 > go && yo ? fo : (yo || lo.notifyWith(to, [co, 1, 0]), lo.resolveWith(to, [co]), !1)
			},
			co = lo.promise({
				elem: to,
				props: ws.extend({}, no),
				opts: ws.extend(!0, {
					specialEasing: {},
					easing: ws.easing._default
				}, so),
				originalProperties: no,
				originalOptions: so,
				startTime: va || Fn(),
				duration: so.duration,
				tweens: [],
				createTween: function (ho, fo) {
					var go = ws.Tween(to, co.opts, ho, fo, co.opts.specialEasing[ho] || co.opts.easing);
					return co.tweens.push(go), go
				},
				stop: function (ho) {
					var fo = 0,
						go = ho ? co.tweens.length : 0;
					if (oo) return this;
					for (oo = !0; fo < go; fo++) co.tweens[fo].run(1);
					return ho ? (lo.notifyWith(to, [co, 1, 0]), lo.resolveWith(to, [co, ho])) : lo.rejectWith(to, [co, ho]), this
				}
			}),
			uo = co.props;
		for (Qn(uo, co.opts.specialEasing); ro < io; ro++)
			if (ao = Vn.prefilters[ro].call(co, to, uo, co.opts)) return bs(ao.stop) && (ws._queueHooks(co.elem, co.opts.queue).stop = ao.stop.bind(ao)), ao;
		return ws.map(uo, Xn, co), bs(co.opts.start) && co.opts.start.call(to, co), co.progress(co.opts.progress).done(co.opts.done, co.opts.complete).fail(co.opts.fail).always(co.opts.always), ws.fx.timer(ws.extend(po, {
			elem: to,
			anim: co,
			queue: co.opts.queue
		})), co
	}

	function Yn(to) {
		return (to.match(Hs) || []).join(" ")
	}

	function Kn(to) {
		return to.getAttribute && to.getAttribute("class") || ""
	}

	function Jn(to) {
		return Array.isArray(to) ? to : "string" == typeof to ? to.match(Hs) || [] : []
	}

	function Zn(to, no, so, ao) {
		if (Array.isArray(no)) ws.each(no, function (ro, io) {
			so || Pa.test(to) ? ao(to, io) : Zn(to + "[" + ("object" == typeof io && null != io ? ro : "") + "]", io, so, ao)
		});
		else if (so || "object" !== nn(no)) ao(to, no);
		else
			for (var oo in no) Zn(to + "[" + oo + "]", no[oo], so, ao)
	}

	function es(to) {
		return function (no, so) {
			"string" != typeof no && (so = no, no = "*");
			var ao, oo = 0,
				ro = no.toLowerCase().match(Hs) || [];
			if (bs(so))
				for (; ao = ro[oo++];) "+" === ao[0] ? (ao = ao.slice(1) || "*", (to[ao] = to[ao] || []).unshift(so)) : (to[ao] = to[ao] || []).push(so)
		}
	}

	function ts(to, no, so, ao) {
		function oo(lo) {
			var po;
			return ro[lo] = !0, ws.each(to[lo] || [], function (co, uo) {
				var ho = uo(no, so, ao);
				return "string" != typeof ho || io || ro[ho] ? io ? !(po = ho) : void 0 : (no.dataTypes.unshift(ho), oo(ho), !1)
			}), po
		}
		var ro = {},
			io = to === Xa;
		return oo(no.dataTypes[0]) || !ro["*"] && oo("*")
	}

	function ns(to, no) {
		var so, ao, oo = ws.ajaxSettings.flatOptions || {};
		for (so in no) void 0 !== no[so] && ((oo[so] ? to : ao || (ao = {}))[so] = no[so]);
		return ao && ws.extend(!0, to, ao), to
	}

	function ss(to, no, so) {
		for (var ao, oo, ro, io, lo = to.contents, po = to.dataTypes;
			"*" === po[0];) po.shift(), void 0 === ao && (ao = to.mimeType || no.getResponseHeader("Content-Type"));
		if (ao)
			for (oo in lo)
				if (lo[oo] && lo[oo].test(ao)) {
					po.unshift(oo);
					break
				}
		if (po[0] in so) ro = po[0];
		else {
			for (oo in so) {
				if (!po[0] || to.converters[oo + " " + po[0]]) {
					ro = oo;
					break
				}
				io || (io = oo)
			}
			ro = ro || io
		}
		return ro ? (ro !== po[0] && po.unshift(ro), so[ro]) : void 0
	}

	function as(to, no, so, ao) {
		var oo, ro, io, lo, po, co = {},
			uo = to.dataTypes.slice();
		if (uo[1])
			for (io in to.converters) co[io.toLowerCase()] = to.converters[io];
		for (ro = uo.shift(); ro;)
			if (to.responseFields[ro] && (so[to.responseFields[ro]] = no), !po && ao && to.dataFilter && (no = to.dataFilter(no, to.dataType)), po = ro, ro = uo.shift())
				if ("*" === ro) ro = po;
				else if ("*" !== po && po !== ro) {
			if (!(io = co[po + " " + ro] || co["* " + ro]))
				for (oo in co)
					if ((lo = oo.split(" "))[1] === ro && (io = co[po + " " + lo[0]] || co["* " + lo[0]])) {
						!0 === io ? io = co[oo] : !0 !== co[oo] && (ro = lo[0], uo.unshift(lo[1]));
						break
					}
			if (!0 !== io)
				if (io && to.throws) no = io(no);
				else try {
					no = io(no)
				} catch (ho) {
					return {
						state: "parsererror",
						error: io ? ho : "No conversion from " + po + " to " + ro
					}
				}
		}
		return {
			state: "success",
			data: no
		}
	}
	var os = [],
		rs = Zt.document,
		is = Object.getPrototypeOf,
		ls = os.slice,
		ds = os.concat,
		ps = os.push,
		cs = os.indexOf,
		us = {},
		hs = us.toString,
		fs = us.hasOwnProperty,
		gs = fs.toString,
		ms = gs.call(Object),
		ys = {},
		bs = function (no) {
			return "function" == typeof no && "number" != typeof no.nodeType
		},
		xs = function (no) {
			return null != no && no === no.window
		},
		vs = {
			type: !0,
			src: !0,
			noModule: !0
		},
		ws = function (to, no) {
			return new ws.fn.init(to, no)
		},
		Ts = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	ws.fn = ws.prototype = {
		jquery: "3.3.1",
		constructor: ws,
		length: 0,
		toArray: function () {
			return ls.call(this)
		},
		get: function (to) {
			return null == to ? ls.call(this) : 0 > to ? this[to + this.length] : this[to]
		},
		pushStack: function (to) {
			var no = ws.merge(this.constructor(), to);
			return no.prevObject = this, no
		},
		each: function (to) {
			return ws.each(this, to)
		},
		map: function (to) {
			return this.pushStack(ws.map(this, function (no, so) {
				return to.call(no, so, no)
			}))
		},
		slice: function () {
			return this.pushStack(ls.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		eq: function (to) {
			var no = this.length,
				so = +to + (0 > to ? no : 0);
			return this.pushStack(0 <= so && so < no ? [this[so]] : [])
		},
		end: function () {
			return this.prevObject || this.constructor()
		},
		push: ps,
		sort: os.sort,
		splice: os.splice
	}, ws.extend = ws.fn.extend = function () {
		var to, no, so, ao, oo, ro, io = arguments[0] || {},
			lo = 1,
			po = arguments.length,
			co = !1;
		for ("boolean" == typeof io && (co = io, io = arguments[lo] || {}, lo++), "object" == typeof io || bs(io) || (io = {}), lo === po && (io = this, lo--); lo < po; lo++)
			if (null != (to = arguments[lo]))
				for (no in to) so = io[no], io !== (ao = to[no]) && (co && ao && (ws.isPlainObject(ao) || (oo = Array.isArray(ao))) ? (oo ? (oo = !1, ro = so && Array.isArray(so) ? so : []) : ro = so && ws.isPlainObject(so) ? so : {}, io[no] = ws.extend(co, ro, ao)) : void 0 != ao && (io[no] = ao));
		return io
	}, ws.extend({
		expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function (to) {
			throw new Error(to)
		},
		noop: function () {},
		isPlainObject: function (to) {
			var no, so;
			return to && "[object Object]" === hs.call(to) && (!(no = is(to)) || "function" == typeof (so = fs.call(no, "constructor") && no.constructor) && gs.call(so) === ms)
		},
		isEmptyObject: function (to) {
			for (var no in to) return !1;
			return !0
		},
		globalEval: function (to) {
			tn(to)
		},
		each: function (to, no) {
			var so, ao = 0;
			if (sn(to))
				for (so = to.length; ao < so && !1 !== no.call(to[ao], ao, to[ao]); ao++);
			else
				for (ao in to)
					if (!1 === no.call(to[ao], ao, to[ao])) break;
			return to
		},
		trim: function (to) {
			return null == to ? "" : (to + "").replace(Ts, "")
		},
		makeArray: function (to, no) {
			var so = no || [];
			return null != to && (sn(Object(to)) ? ws.merge(so, "string" == typeof to ? [to] : to) : ps.call(so, to)), so
		},
		inArray: function (to, no, so) {
			return null == no ? -1 : cs.call(no, to, so)
		},
		merge: function (to, no) {
			for (var so = +no.length, ao = 0, oo = to.length; ao < so; ao++) to[oo++] = no[ao];
			return to.length = oo, to
		},
		grep: function (to, no, so) {
			for (var ao, oo = [], ro = 0, io = to.length; ro < io; ro++)(ao = !no(to[ro], ro)) !== !so && oo.push(to[ro]);
			return oo
		},
		map: function (to, no, so) {
			var ao, oo, ro = 0,
				io = [];
			if (sn(to))
				for (ao = to.length; ro < ao; ro++) null != (oo = no(to[ro], ro, so)) && io.push(oo);
			else
				for (ro in to) null != (oo = no(to[ro], ro, so)) && io.push(oo);
			return ds.apply([], io)
		},
		guid: 1,
		support: ys
	}), "function" == typeof Symbol && (ws.fn[Symbol.iterator] = os[Symbol.iterator]), ws.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (to, no) {
		us["[object " + no + "]"] = no.toLowerCase()
	});
	var Cs = function (to) {
		function no(kr, Lr, Dr, Nr) {
			var jr, qr, Hr, Pr, Or, Mr, _r, Br = Lr && Lr.ownerDocument,
				Ir = Lr ? Lr.nodeType : 9;
			if (Dr = Dr || [], "string" != typeof kr || !kr || 1 !== Ir && 9 !== Ir && 11 !== Ir) return Dr;
			if (!Nr && ((Lr ? Lr.ownerDocument || Lr : Uo) !== Oo && Po(Lr), Lr = Lr || Oo, _o)) {
				if (11 !== Ir && (Or = xr.exec(kr)))
					if (!(jr = Or[1])) {
						if (Or[2]) return er.apply(Dr, Lr.getElementsByTagName(kr)), Dr;
						if ((jr = Or[3]) && Co.getElementsByClassName && Lr.getElementsByClassName) return er.apply(Dr, Lr.getElementsByClassName(jr)), Dr
					} else if (9 === Ir) {
					if (!(Hr = Lr.getElementById(jr))) return Dr;
					if (Hr.id === jr) return Dr.push(Hr), Dr
				} else if (Br && (Hr = Br.getElementById(jr)) && Ro(Lr, Hr) && Hr.id === jr) return Dr.push(Hr), Dr;
				if (Co.qsa && !Qo[kr + " "] && (!Bo || !Bo.test(kr))) {
					if (1 !== Ir) Br = Lr, _r = kr;
					else if ("object" !== Lr.nodeName.toLowerCase()) {
						for ((Pr = Lr.getAttribute("id")) ? Pr = Pr.replace(Tr, Cr) : Lr.setAttribute("id", Pr = zo), qr = (Mr = Lo(kr)).length; qr--;) Mr[qr] = "#" + Pr + " " + go(Mr[qr]);
						_r = Mr.join(","), Br = vr.test(kr) && ho(Lr.parentNode) || Lr
					}
					if (_r) try {
						return er.apply(Dr, Br.querySelectorAll(_r)), Dr
					} catch (Wr) {} finally {
						Pr === zo && Lr.removeAttribute("id")
					}
				}
			}
			return No(kr.replace(dr, "$1"), Lr, Dr, Nr)
		}

		function so() {
			function kr(Dr, Nr) {
				return Lr.push(Dr + " ") > So.cacheLength && delete kr[Lr.shift()], kr[Dr + " "] = Nr
			}
			var Lr = [];
			return kr
		}

		function ao(kr) {
			return kr[zo] = !0, kr
		}

		function oo(kr) {
			var Lr = Oo.createElement("fieldset");
			try {
				return !!kr(Lr)
			} catch (Dr) {
				return !1
			} finally {
				Lr.parentNode && Lr.parentNode.removeChild(Lr), Lr = null
			}
		}

		function ro(kr, Lr) {
			for (var Dr = kr.split("|"), Nr = Dr.length; Nr--;) So.attrHandle[Dr[Nr]] = Lr
		}

		function io(kr, Lr) {
			var Dr = Lr && kr,
				Nr = Dr && 1 === kr.nodeType && 1 === Lr.nodeType && kr.sourceIndex - Lr.sourceIndex;
			if (Nr) return Nr;
			if (Dr)
				for (; Dr = Dr.nextSibling;)
					if (Dr === Lr) return -1;
			return kr ? 1 : -1
		}

		function lo(kr) {
			return function (Lr) {
				return "input" === Lr.nodeName.toLowerCase() && Lr.type === kr
			}
		}

		function po(kr) {
			return function (Lr) {
				var Dr = Lr.nodeName.toLowerCase();
				return ("input" === Dr || "button" === Dr) && Lr.type === kr
			}
		}

		function co(kr) {
			return function (Lr) {
				return "form" in Lr ? Lr.parentNode && !1 === Lr.disabled ? "label" in Lr ? "label" in Lr.parentNode ? Lr.parentNode.disabled === kr : Lr.disabled === kr : Lr.isDisabled === kr || Lr.isDisabled !== !kr && Er(Lr) === kr : Lr.disabled === kr : "label" in Lr && Lr.disabled === kr
			}
		}

		function uo(kr) {
			return ao(function (Lr) {
				return Lr = +Lr, ao(function (Dr, Nr) {
					for (var jr, qr = kr([], Dr.length, Lr), Hr = qr.length; Hr--;) Dr[jr = qr[Hr]] && (Dr[jr] = !(Nr[jr] = Dr[jr]))
				})
			})
		}

		function ho(kr) {
			return kr && "undefined" != typeof kr.getElementsByTagName && kr
		}

		function fo() {}

		function go(kr) {
			for (var Lr = 0, Dr = kr.length, Nr = ""; Lr < Dr; Lr++) Nr += kr[Lr].value;
			return Nr
		}

		function mo(kr, Lr, Dr) {
			var Nr = Lr.dir,
				jr = Lr.next,
				qr = jr || Nr,
				Hr = Dr && "parentNode" === qr,
				Pr = $o++;
			return Lr.first ? function (Or, Mr, _r) {
				for (; Or = Or[Nr];)
					if (1 === Or.nodeType || Hr) return kr(Or, Mr, _r);
				return !1
			} : function (Or, Mr, _r) {
				var Br, Ir, Wr, Rr = [Fo, Pr];
				if (_r) {
					for (; Or = Or[Nr];)
						if ((1 === Or.nodeType || Hr) && kr(Or, Mr, _r)) return !0;
				} else
					for (; Or = Or[Nr];)
						if (1 === Or.nodeType || Hr)
							if (Wr = Or[zo] || (Or[zo] = {}), Ir = Wr[Or.uniqueID] || (Wr[Or.uniqueID] = {}), jr && jr === Or.nodeName.toLowerCase()) Or = Or[Nr] || Or;
							else {
								if ((Br = Ir[qr]) && Br[0] === Fo && Br[1] === Pr) return Rr[2] = Br[2];
								if (Ir[qr] = Rr, Rr[2] = kr(Or, Mr, _r)) return !0
							} return !1
			}
		}

		function yo(kr) {
			return 1 < kr.length ? function (Lr, Dr, Nr) {
				for (var jr = kr.length; jr--;)
					if (!kr[jr](Lr, Dr, Nr)) return !1;
				return !0
			} : kr[0]
		}

		function bo(kr, Lr, Dr) {
			for (var Nr = 0, jr = Lr.length; Nr < jr; Nr++) no(kr, Lr[Nr], Dr);
			return Dr
		}

		function xo(kr, Lr, Dr, Nr, jr) {
			for (var qr, Hr = [], Pr = 0, Or = kr.length; Pr < Or; Pr++)(qr = kr[Pr]) && (Dr && !Dr(qr, Nr, jr) || (Hr.push(qr), null != Lr && Lr.push(Pr)));
			return Hr
		}

		function vo(kr, Lr, Dr, Nr, jr, qr) {
			return Nr && !Nr[zo] && (Nr = vo(Nr)), jr && !jr[zo] && (jr = vo(jr, qr)), ao(function (Hr, Pr, Or, Mr) {
				var _r, Br, Ir, Wr = [],
					Rr = [],
					zr = Pr.length,
					Ur = Hr || bo(Lr || "*", Or.nodeType ? [Or] : Or, []),
					Fr = kr && (Hr || !Lr) ? xo(Ur, Wr, kr, Or, Mr) : Ur,
					$r = Dr ? jr || (Hr ? kr : zr || Nr) ? [] : Pr : Fr;
				if (Dr && Dr(Fr, $r, Or, Mr), Nr)
					for (_r = xo($r, Rr), Nr(_r, [], Or, Mr), Br = _r.length; Br--;)(Ir = _r[Br]) && ($r[Rr[Br]] = !(Fr[Rr[Br]] = Ir));
				if (!Hr) $r = xo($r === Pr ? $r.splice(zr, $r.length) : $r), jr ? jr(null, Pr, $r, Mr) : er.apply(Pr, $r);
				else if (jr || kr) {
					if (jr) {
						for (_r = [], Br = $r.length; Br--;)(Ir = $r[Br]) && _r.push(Fr[Br] = Ir);
						jr(null, $r = [], _r, Mr)
					}
					for (Br = $r.length; Br--;)(Ir = $r[Br]) && -1 < (_r = jr ? nr(Hr, Ir) : Wr[Br]) && (Hr[_r] = !(Pr[_r] = Ir))
				}
			})
		}

		function Ao(kr) {
			for (var Lr, Dr, Nr, jr = kr.length, qr = So.relative[kr[0].type], Hr = qr || So.relative[" "], Pr = qr ? 1 : 0, Or = mo(function (Br) {
					return Br === Lr
				}, Hr, !0), Mr = mo(function (Br) {
					return -1 < nr(Lr, Br)
				}, Hr, !0), _r = [function (Br, Ir, Wr) {
					var Rr = !qr && (Wr || Ir !== jo) || ((Lr = Ir).nodeType ? Or(Br, Ir, Wr) : Mr(Br, Ir, Wr));
					return Lr = null, Rr
				}]; Pr < jr; Pr++)
				if (Dr = So.relative[kr[Pr].type]) _r = [mo(yo(_r), Dr)];
				else {
					if ((Dr = So.filter[kr[Pr].type].apply(null, kr[Pr].matches))[zo]) {
						for (Nr = ++Pr; Nr < jr && !So.relative[kr[Nr].type]; Nr++);
						return vo(1 < Pr && yo(_r), 1 < Pr && go(kr.slice(0, Pr - 1).concat({
							value: " " === kr[Pr - 2].type ? "*" : ""
						})).replace(dr, "$1"), Dr, Pr < Nr && Ao(kr.slice(Pr, Nr)), Nr < jr && Ao(kr = kr.slice(Nr)), Nr < jr && go(kr))
					}
					_r.push(Dr)
				}
			return yo(_r)
		}

		function wo(kr, Lr) {
			var Dr = 0 < Lr.length,
				Nr = 0 < kr.length,
				jr = function (qr, Hr, Pr, Or, Mr) {
					var _r, Br, Ir, Wr = 0,
						Rr = "0",
						zr = qr && [],
						Ur = [],
						Fr = jo,
						$r = qr || Nr && So.find.TAG("*", Mr),
						Xr = Fo += null == Fr ? 1 : Math.random() || .1,
						Gr = $r.length;
					for (Mr && (jo = Hr === Oo || Hr || Mr); Rr !== Gr && null != (_r = $r[Rr]); Rr++) {
						if (Nr && _r) {
							for (Br = 0, Hr || _r.ownerDocument === Oo || (Po(_r), Pr = !_o); Ir = kr[Br++];)
								if (Ir(_r, Hr || Oo, Pr)) {
									Or.push(_r);
									break
								}
							Mr && (Fo = Xr)
						}
						Dr && ((_r = !Ir && _r) && Wr--, qr && zr.push(_r))
					}
					if (Wr += Rr, Dr && Rr !== Wr) {
						for (Br = 0; Ir = Lr[Br++];) Ir(zr, Ur, Hr, Pr);
						if (qr) {
							if (0 < Wr)
								for (; Rr--;) zr[Rr] || Ur[Rr] || (Ur[Rr] = Jo.call(Or));
							Ur = xo(Ur)
						}
						er.apply(Or, Ur), Mr && !qr && 0 < Ur.length && 1 < Wr + Lr.length && no.uniqueSort(Or)
					}
					return Mr && (Fo = Xr, jo = Fr), zr
				};
			return Dr ? ao(jr) : jr
		}
		var To, Co, So, Eo, ko, Lo, Do, No, jo, qo, Ho, Po, Oo, Mo, _o, Bo, Io, Wo, Ro, zo = "sizzle" + 1 * new Date,
			Uo = to.document,
			Fo = 0,
			$o = 0,
			Xo = so(),
			Go = so(),
			Qo = so(),
			Vo = function (kr, Lr) {
				return kr === Lr && (Ho = !0), 0
			},
			Yo = {}.hasOwnProperty,
			Ko = [],
			Jo = Ko.pop,
			Zo = Ko.push,
			er = Ko.push,
			tr = Ko.slice,
			nr = function (kr, Lr) {
				for (var Dr = 0, Nr = kr.length; Dr < Nr; Dr++)
					if (kr[Dr] === Lr) return Dr;
				return -1
			},
			sr = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			ar = "[\\x20\\t\\r\\n\\f]",
			or = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			lr = /[\x20\t\r\n\f]+/g,
			dr = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
			pr = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
			cr = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
			ur = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
			hr = /:((?:\\.|[\w-]|[^-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
			fr = /^(?:\\.|[\w-]|[^-\xa0])+$/,
			gr = {
				ID: /^#((?:\\.|[\w-]|[^-\xa0])+)/,
				CLASS: /^\.((?:\\.|[\w-]|[^-\xa0])+)/,
				TAG: /^((?:\\.|[\w-]|[^-\xa0])+|[*])/,
				ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^-\xa0])+))|)[\x20\t\r\n\f]*\]/,
				PSEUDO: /^:((?:\\.|[\w-]|[^-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
				CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
				bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
				needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
			},
			mr = /^(?:input|select|textarea|button)$/i,
			yr = /^h\d$/i,
			br = /^[^{]+\{\s*\[native \w/,
			xr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			vr = /[+~]/,
			Ar = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
			wr = function (kr, Lr, Dr) {
				var Nr = "0x" + Lr - 65536;
				return Nr != Nr || Dr ? Lr : 0 > Nr ? String.fromCharCode(Nr + 65536) : String.fromCharCode(55296 | Nr >> 10, 56320 | 1023 & Nr)
			},
			Tr = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			Cr = function (kr, Lr) {
				return Lr ? "\0" === kr ? "\uFFFD" : kr.slice(0, -1) + "\\" + kr.charCodeAt(kr.length - 1).toString(16) + " " : "\\" + kr
			},
			Sr = function () {
				Po()
			},
			Er = mo(function (kr) {
				return !0 === kr.disabled && ("form" in kr || "label" in kr)
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			er.apply(Ko = tr.call(Uo.childNodes), Uo.childNodes), Ko[Uo.childNodes.length].nodeType
		} catch (kr) {
			er = {
				apply: Ko.length ? function (Lr, Dr) {
					Zo.apply(Lr, tr.call(Dr))
				} : function (Lr, Dr) {
					for (var Nr = Lr.length, jr = 0; Lr[Nr++] = Dr[jr++];);
					Lr.length = Nr - 1
				}
			}
		}
		for (To in Co = no.support = {}, ko = no.isXML = function (kr) {
				var Lr = kr && (kr.ownerDocument || kr).documentElement;
				return !!Lr && "HTML" !== Lr.nodeName
			}, Po = no.setDocument = function (kr) {
				var Lr, Dr, Nr = kr ? kr.ownerDocument || kr : Uo;
				return Nr !== Oo && 9 === Nr.nodeType && Nr.documentElement ? (Oo = Nr, Mo = Oo.documentElement, _o = !ko(Oo), Uo !== Oo && (Dr = Oo.defaultView) && Dr.top !== Dr && (Dr.addEventListener ? Dr.addEventListener("unload", Sr, !1) : Dr.attachEvent && Dr.attachEvent("onunload", Sr)), Co.attributes = oo(function (jr) {
					return jr.className = "i", !jr.getAttribute("className")
				}), Co.getElementsByTagName = oo(function (jr) {
					return jr.appendChild(Oo.createComment("")), !jr.getElementsByTagName("*").length
				}), Co.getElementsByClassName = br.test(Oo.getElementsByClassName), Co.getById = oo(function (jr) {
					return Mo.appendChild(jr).id = zo, !Oo.getElementsByName || !Oo.getElementsByName(zo).length
				}), Co.getById ? (So.filter.ID = function (jr) {
					var qr = jr.replace(Ar, wr);
					return function (Hr) {
						return Hr.getAttribute("id") === qr
					}
				}, So.find.ID = function (jr, qr) {
					if ("undefined" != typeof qr.getElementById && _o) {
						var Hr = qr.getElementById(jr);
						return Hr ? [Hr] : []
					}
				}) : (So.filter.ID = function (jr) {
					var qr = jr.replace(Ar, wr);
					return function (Hr) {
						var Pr = "undefined" != typeof Hr.getAttributeNode && Hr.getAttributeNode("id");
						return Pr && Pr.value === qr
					}
				}, So.find.ID = function (jr, qr) {
					if ("undefined" != typeof qr.getElementById && _o) {
						var Hr, Pr, Or, Mr = qr.getElementById(jr);
						if (Mr) {
							if ((Hr = Mr.getAttributeNode("id")) && Hr.value === jr) return [Mr];
							for (Or = qr.getElementsByName(jr), Pr = 0; Mr = Or[Pr++];)
								if ((Hr = Mr.getAttributeNode("id")) && Hr.value === jr) return [Mr]
						}
						return []
					}
				}), So.find.TAG = Co.getElementsByTagName ? function (jr, qr) {
					return "undefined" == typeof qr.getElementsByTagName ? Co.qsa ? qr.querySelectorAll(jr) : void 0 : qr.getElementsByTagName(jr)
				} : function (jr, qr) {
					var Hr, Pr = [],
						Or = 0,
						Mr = qr.getElementsByTagName(jr);
					if ("*" === jr) {
						for (; Hr = Mr[Or++];) 1 === Hr.nodeType && Pr.push(Hr);
						return Pr
					}
					return Mr
				}, So.find.CLASS = Co.getElementsByClassName && function (jr, qr) {
					if ("undefined" != typeof qr.getElementsByClassName && _o) return qr.getElementsByClassName(jr)
				}, Io = [], Bo = [], (Co.qsa = br.test(Oo.querySelectorAll)) && (oo(function (jr) {
					Mo.appendChild(jr).innerHTML = "<a id='" + zo + "'></a><select id='" + zo + "-\r\\' msallowcapture=''><option selected=''></option></select>", jr.querySelectorAll("[msallowcapture^='']").length && Bo.push("[*^$]=" + ar + "*(?:''|\"\")"), jr.querySelectorAll("[selected]").length || Bo.push("\\[" + ar + "*(?:value|" + sr + ")"), jr.querySelectorAll("[id~=" + zo + "-]").length || Bo.push("~="), jr.querySelectorAll(":checked").length || Bo.push(":checked"), jr.querySelectorAll("a#" + zo + "+*").length || Bo.push(".#.+[+~]")
				}), oo(function (jr) {
					jr.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
					var qr = Oo.createElement("input");
					qr.setAttribute("type", "hidden"), jr.appendChild(qr).setAttribute("name", "D"), jr.querySelectorAll("[name=d]").length && Bo.push("name" + ar + "*[*^$|!~]?="), 2 !== jr.querySelectorAll(":enabled").length && Bo.push(":enabled", ":disabled"), Mo.appendChild(jr).disabled = !0, 2 !== jr.querySelectorAll(":disabled").length && Bo.push(":enabled", ":disabled"), jr.querySelectorAll("*,:x"), Bo.push(",.*:")
				})), (Co.matchesSelector = br.test(Wo = Mo.matches || Mo.webkitMatchesSelector || Mo.mozMatchesSelector || Mo.oMatchesSelector || Mo.msMatchesSelector)) && oo(function (jr) {
					Co.disconnectedMatch = Wo.call(jr, "*"), Wo.call(jr, "[s!='']:x"), Io.push("!=", ":(" + or + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ("\\[" + ar + "*(" + or + ")(?:" + ar + "*([*^$|!~]?=)" + ar + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + or + "))|)" + ar + "*\\]") + ")*)|.*)\\)|)")
				}), Bo = Bo.length && new RegExp(Bo.join("|")), Io = Io.length && new RegExp(Io.join("|")), Lr = br.test(Mo.compareDocumentPosition), Ro = Lr || br.test(Mo.contains) ? function (jr, qr) {
					var Hr = 9 === jr.nodeType ? jr.documentElement : jr,
						Pr = qr && qr.parentNode;
					return jr === Pr || Pr && 1 === Pr.nodeType && (Hr.contains ? Hr.contains(Pr) : jr.compareDocumentPosition && 16 & jr.compareDocumentPosition(Pr))
				} : function (jr, qr) {
					if (qr)
						for (; qr = qr.parentNode;)
							if (qr === jr) return !0;
					return !1
				}, Vo = Lr ? function (jr, qr) {
					if (jr === qr) return Ho = !0, 0;
					var Hr = !jr.compareDocumentPosition - !qr.compareDocumentPosition;
					return Hr || (1 & (Hr = (jr.ownerDocument || jr) === (qr.ownerDocument || qr) ? jr.compareDocumentPosition(qr) : 1) || !Co.sortDetached && qr.compareDocumentPosition(jr) === Hr ? jr === Oo || jr.ownerDocument === Uo && Ro(Uo, jr) ? -1 : qr === Oo || qr.ownerDocument === Uo && Ro(Uo, qr) ? 1 : qo ? nr(qo, jr) - nr(qo, qr) : 0 : 4 & Hr ? -1 : 1)
				} : function (jr, qr) {
					if (jr === qr) return Ho = !0, 0;
					var Hr, Pr = 0,
						Or = jr.parentNode,
						Mr = qr.parentNode,
						_r = [jr],
						Br = [qr];
					if (!Or || !Mr) return jr === Oo ? -1 : qr === Oo ? 1 : Or ? -1 : Mr ? 1 : qo ? nr(qo, jr) - nr(qo, qr) : 0;
					if (Or === Mr) return io(jr, qr);
					for (Hr = jr; Hr = Hr.parentNode;) _r.unshift(Hr);
					for (Hr = qr; Hr = Hr.parentNode;) Br.unshift(Hr);
					for (; _r[Pr] === Br[Pr];) Pr++;
					return Pr ? io(_r[Pr], Br[Pr]) : _r[Pr] === Uo ? -1 : Br[Pr] === Uo ? 1 : 0
				}, Oo) : Oo
			}, no.matches = function (kr, Lr) {
				return no(kr, null, null, Lr)
			}, no.matchesSelector = function (kr, Lr) {
				if ((kr.ownerDocument || kr) !== Oo && Po(kr), Lr = Lr.replace(ur, "='$1']"), Co.matchesSelector && _o && !Qo[Lr + " "] && (!Io || !Io.test(Lr)) && (!Bo || !Bo.test(Lr))) try {
					var Dr = Wo.call(kr, Lr);
					if (Dr || Co.disconnectedMatch || kr.document && 11 !== kr.document.nodeType) return Dr
				} catch (Nr) {}
				return 0 < no(Lr, Oo, null, [kr]).length
			}, no.contains = function (kr, Lr) {
				return (kr.ownerDocument || kr) !== Oo && Po(kr), Ro(kr, Lr)
			}, no.attr = function (kr, Lr) {
				(kr.ownerDocument || kr) !== Oo && Po(kr);
				var Dr = So.attrHandle[Lr.toLowerCase()],
					Nr = Dr && Yo.call(So.attrHandle, Lr.toLowerCase()) ? Dr(kr, Lr, !_o) : void 0;
				return void 0 === Nr ? Co.attributes || !_o ? kr.getAttribute(Lr) : (Nr = kr.getAttributeNode(Lr)) && Nr.specified ? Nr.value : null : Nr
			}, no.escape = function (kr) {
				return (kr + "").replace(Tr, Cr)
			}, no.error = function (kr) {
				throw new Error("Syntax error, unrecognized expression: " + kr)
			}, no.uniqueSort = function (kr) {
				var Lr, Dr = [],
					Nr = 0,
					jr = 0;
				if (Ho = !Co.detectDuplicates, qo = !Co.sortStable && kr.slice(0), kr.sort(Vo), Ho) {
					for (; Lr = kr[jr++];) Lr === kr[jr] && (Nr = Dr.push(jr));
					for (; Nr--;) kr.splice(Dr[Nr], 1)
				}
				return qo = null, kr
			}, Eo = no.getText = function (kr) {
				var Lr, Dr = "",
					Nr = 0,
					jr = kr.nodeType;
				if (!jr)
					for (; Lr = kr[Nr++];) Dr += Eo(Lr);
				else if (1 === jr || 9 === jr || 11 === jr) {
					if ("string" == typeof kr.textContent) return kr.textContent;
					for (kr = kr.firstChild; kr; kr = kr.nextSibling) Dr += Eo(kr)
				} else if (3 === jr || 4 === jr) return kr.nodeValue;
				return Dr
			}, (So = no.selectors = {
				cacheLength: 50,
				createPseudo: ao,
				match: gr,
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
					ATTR: function (kr) {
						return kr[1] = kr[1].replace(Ar, wr), kr[3] = (kr[3] || kr[4] || kr[5] || "").replace(Ar, wr), "~=" === kr[2] && (kr[3] = " " + kr[3] + " "), kr.slice(0, 4)
					},
					CHILD: function (kr) {
						return kr[1] = kr[1].toLowerCase(), "nth" === kr[1].slice(0, 3) ? (kr[3] || no.error(kr[0]), kr[4] = +(kr[4] ? kr[5] + (kr[6] || 1) : 2 * ("even" === kr[3] || "odd" === kr[3])), kr[5] = +(kr[7] + kr[8] || "odd" === kr[3])) : kr[3] && no.error(kr[0]), kr
					},
					PSEUDO: function (kr) {
						var Lr, Dr = !kr[6] && kr[2];
						return gr.CHILD.test(kr[0]) ? null : (kr[3] ? kr[2] = kr[4] || kr[5] || "" : Dr && hr.test(Dr) && (Lr = Lo(Dr, !0)) && (Lr = Dr.indexOf(")", Dr.length - Lr) - Dr.length) && (kr[0] = kr[0].slice(0, Lr), kr[2] = Dr.slice(0, Lr)), kr.slice(0, 3))
					}
				},
				filter: {
					TAG: function (kr) {
						var Lr = kr.replace(Ar, wr).toLowerCase();
						return "*" === kr ? function () {
							return !0
						} : function (Dr) {
							return Dr.nodeName && Dr.nodeName.toLowerCase() === Lr
						}
					},
					CLASS: function (kr) {
						var Lr = Xo[kr + " "];
						return Lr || (Lr = new RegExp("(^|" + ar + ")" + kr + "(" + ar + "|$)")) && Xo(kr, function (Dr) {
							return Lr.test("string" == typeof Dr.className && Dr.className || "undefined" != typeof Dr.getAttribute && Dr.getAttribute("class") || "")
						})
					},
					ATTR: function (kr, Lr, Dr) {
						return function (Nr) {
							var jr = no.attr(Nr, kr);
							return null == jr ? "!=" === Lr : !Lr || (jr += "", "=" === Lr ? jr === Dr : "!=" === Lr ? jr !== Dr : "^=" === Lr ? Dr && 0 === jr.indexOf(Dr) : "*=" === Lr ? Dr && -1 < jr.indexOf(Dr) : "$=" === Lr ? Dr && jr.slice(-Dr.length) === Dr : "~=" === Lr ? -1 < (" " + jr.replace(lr, " ") + " ").indexOf(Dr) : "|=" == Lr && (jr === Dr || jr.slice(0, Dr.length + 1) === Dr + "-"))
						}
					},
					CHILD: function (kr, Lr, Dr, Nr, jr) {
						var qr = "nth" !== kr.slice(0, 3),
							Hr = "last" !== kr.slice(-4),
							Pr = "of-type" === Lr;
						return 1 === Nr && 0 === jr ? function (Or) {
							return !!Or.parentNode
						} : function (Or, Mr, _r) {
							var Br, Ir, Wr, Rr, zr, Ur, Fr = qr == Hr ? "previousSibling" : "nextSibling",
								$r = Or.parentNode,
								Xr = Pr && Or.nodeName.toLowerCase(),
								Gr = !_r && !Pr,
								Qr = !1;
							if ($r) {
								if (qr) {
									for (; Fr;) {
										for (Rr = Or; Rr = Rr[Fr];)
											if (Pr ? Rr.nodeName.toLowerCase() === Xr : 1 === Rr.nodeType) return !1;
										Ur = Fr = "only" === kr && !Ur && "nextSibling"
									}
									return !0
								}
								if (Ur = [Hr ? $r.firstChild : $r.lastChild], Hr && Gr) {
									for (Qr = (zr = (Br = (Ir = (Wr = (Rr = $r)[zo] || (Rr[zo] = {}))[Rr.uniqueID] || (Wr[Rr.uniqueID] = {}))[kr] || [])[0] === Fo && Br[1]) && Br[2], Rr = zr && $r.childNodes[zr]; Rr = ++zr && Rr && Rr[Fr] || (Qr = zr = 0) || Ur.pop();)
										if (1 === Rr.nodeType && ++Qr && Rr === Or) {
											Ir[kr] = [Fo, zr, Qr];
											break
										}
								} else if (Gr && (Qr = zr = (Br = (Ir = (Wr = (Rr = Or)[zo] || (Rr[zo] = {}))[Rr.uniqueID] || (Wr[Rr.uniqueID] = {}))[kr] || [])[0] === Fo && Br[1]), !1 === Qr)
									for (;
										(Rr = ++zr && Rr && Rr[Fr] || (Qr = zr = 0) || Ur.pop()) && !((Pr ? Rr.nodeName.toLowerCase() === Xr : 1 === Rr.nodeType) && ++Qr && (Gr && ((Ir = (Wr = Rr[zo] || (Rr[zo] = {}))[Rr.uniqueID] || (Wr[Rr.uniqueID] = {}))[kr] = [Fo, Qr]), Rr === Or)););
								return (Qr -= jr) == Nr || 0 == Qr % Nr && 0 <= Qr / Nr
							}
						}
					},
					PSEUDO: function (kr, Lr) {
						var Dr, Nr = So.pseudos[kr] || So.setFilters[kr.toLowerCase()] || no.error("unsupported pseudo: " + kr);
						return Nr[zo] ? Nr(Lr) : 1 < Nr.length ? (Dr = [kr, kr, "", Lr], So.setFilters.hasOwnProperty(kr.toLowerCase()) ? ao(function (jr, qr) {
							for (var Hr, Pr = Nr(jr, Lr), Or = Pr.length; Or--;) jr[Hr = nr(jr, Pr[Or])] = !(qr[Hr] = Pr[Or])
						}) : function (jr) {
							return Nr(jr, 0, Dr)
						}) : Nr
					}
				},
				pseudos: {
					not: ao(function (kr) {
						var Lr = [],
							Dr = [],
							Nr = Do(kr.replace(dr, "$1"));
						return Nr[zo] ? ao(function (jr, qr, Hr, Pr) {
							for (var Or, Mr = Nr(jr, null, Pr, []), _r = jr.length; _r--;)(Or = Mr[_r]) && (jr[_r] = !(qr[_r] = Or))
						}) : function (jr, qr, Hr) {
							return Lr[0] = jr, Nr(Lr, null, Hr, Dr), Lr[0] = null, !Dr.pop()
						}
					}),
					has: ao(function (kr) {
						return function (Lr) {
							return 0 < no(kr, Lr).length
						}
					}),
					contains: ao(function (kr) {
						return kr = kr.replace(Ar, wr),
							function (Lr) {
								return -1 < (Lr.textContent || Lr.innerText || Eo(Lr)).indexOf(kr)
							}
					}),
					lang: ao(function (kr) {
						return fr.test(kr || "") || no.error("unsupported lang: " + kr), kr = kr.replace(Ar, wr).toLowerCase(),
							function (Lr) {
								var Dr;
								do
									if (Dr = _o ? Lr.lang : Lr.getAttribute("xml:lang") || Lr.getAttribute("lang")) return (Dr = Dr.toLowerCase()) === kr || 0 === Dr.indexOf(kr + "-"); while ((Lr = Lr.parentNode) && 1 === Lr.nodeType);
								return !1
							}
					}),
					target: function (kr) {
						var Lr = to.location && to.location.hash;
						return Lr && Lr.slice(1) === kr.id
					},
					root: function (kr) {
						return kr === Mo
					},
					focus: function (kr) {
						return kr === Oo.activeElement && (!Oo.hasFocus || Oo.hasFocus()) && !!(kr.type || kr.href || ~kr.tabIndex)
					},
					enabled: co(!1),
					disabled: co(!0),
					checked: function (kr) {
						var Lr = kr.nodeName.toLowerCase();
						return "input" === Lr && !!kr.checked || "option" === Lr && !!kr.selected
					},
					selected: function (kr) {
						return kr.parentNode && kr.parentNode.selectedIndex, !0 === kr.selected
					},
					empty: function (kr) {
						for (kr = kr.firstChild; kr; kr = kr.nextSibling)
							if (6 > kr.nodeType) return !1;
						return !0
					},
					parent: function (kr) {
						return !So.pseudos.empty(kr)
					},
					header: function (kr) {
						return yr.test(kr.nodeName)
					},
					input: function (kr) {
						return mr.test(kr.nodeName)
					},
					button: function (kr) {
						var Lr = kr.nodeName.toLowerCase();
						return "input" === Lr && "button" === kr.type || "button" === Lr
					},
					text: function (kr) {
						var Lr;
						return "input" === kr.nodeName.toLowerCase() && "text" === kr.type && (null == (Lr = kr.getAttribute("type")) || "text" === Lr.toLowerCase())
					},
					first: uo(function () {
						return [0]
					}),
					last: uo(function (kr, Lr) {
						return [Lr - 1]
					}),
					eq: uo(function (kr, Lr, Dr) {
						return [0 > Dr ? Dr + Lr : Dr]
					}),
					even: uo(function (kr, Lr) {
						for (var Dr = 0; Dr < Lr; Dr += 2) kr.push(Dr);
						return kr
					}),
					odd: uo(function (kr, Lr) {
						for (var Dr = 1; Dr < Lr; Dr += 2) kr.push(Dr);
						return kr
					}),
					lt: uo(function (kr, Lr, Dr) {
						for (var Nr = 0 > Dr ? Dr + Lr : Dr; 0 <= --Nr;) kr.push(Nr);
						return kr
					}),
					gt: uo(function (kr, Lr, Dr) {
						for (var Nr = 0 > Dr ? Dr + Lr : Dr; ++Nr < Lr;) kr.push(Nr);
						return kr
					})
				}
			}).pseudos.nth = So.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) So.pseudos[To] = lo(To);
		for (To in {
				submit: !0,
				reset: !0
			}) So.pseudos[To] = po(To);
		return fo.prototype = So.filters = So.pseudos, So.setFilters = new fo, Lo = no.tokenize = function (kr, Lr) {
			var Dr, Nr, jr, qr, Hr, Pr, Or, Mr = Go[kr + " "];
			if (Mr) return Lr ? 0 : Mr.slice(0);
			for (Hr = kr, Pr = [], Or = So.preFilter; Hr;) {
				for (qr in Dr && !(Nr = pr.exec(Hr)) || (Nr && (Hr = Hr.slice(Nr[0].length) || Hr), Pr.push(jr = [])), Dr = !1, (Nr = cr.exec(Hr)) && (Dr = Nr.shift(), jr.push({
						value: Dr,
						type: Nr[0].replace(dr, " ")
					}), Hr = Hr.slice(Dr.length)), So.filter)(Nr = gr[qr].exec(Hr)) && (!Or[qr] || (Nr = Or[qr](Nr))) && (Dr = Nr.shift(), jr.push({
					value: Dr,
					type: qr,
					matches: Nr
				}), Hr = Hr.slice(Dr.length));
				if (!Dr) break
			}
			return Lr ? Hr.length : Hr ? no.error(kr) : Go(kr, Pr).slice(0)
		}, (Do = no.compile = function (kr, Lr) {
			var Dr, Nr = [],
				jr = [],
				qr = Qo[kr + " "];
			if (!qr) {
				for (Lr || (Lr = Lo(kr)), Dr = Lr.length; Dr--;)(qr = Ao(Lr[Dr]))[zo] ? Nr.push(qr) : jr.push(qr);
				(qr = Qo(kr, wo(jr, Nr))).selector = kr
			}
			return qr
		}, No = no.select = function (kr, Lr, Dr, Nr) {
			var jr, qr, Hr, Pr, Or, Mr = "function" == typeof kr && kr,
				_r = !Nr && Lo(kr = Mr.selector || kr);
			if (Dr = Dr || [], 1 === _r.length) {
				if (2 < (qr = _r[0] = _r[0].slice(0)).length && "ID" === (Hr = qr[0]).type && 9 === Lr.nodeType && _o && So.relative[qr[1].type]) {
					if (!(Lr = (So.find.ID(Hr.matches[0].replace(Ar, wr), Lr) || [])[0])) return Dr;
					Mr && (Lr = Lr.parentNode), kr = kr.slice(qr.shift().value.length)
				}
				for (jr = gr.needsContext.test(kr) ? 0 : qr.length; jr-- && (Hr = qr[jr], !So.relative[Pr = Hr.type]);)
					if ((Or = So.find[Pr]) && (Nr = Or(Hr.matches[0].replace(Ar, wr), vr.test(qr[0].type) && ho(Lr.parentNode) || Lr))) {
						if (qr.splice(jr, 1), !(kr = Nr.length && go(qr))) return er.apply(Dr, Nr), Dr;
						break
					}
			}
			return (Mr || Do(kr, _r))(Nr, Lr, !_o, Dr, !Lr || vr.test(kr) && ho(Lr.parentNode) || Lr), Dr
		}, Co.sortStable = zo.split("").sort(Vo).join("") === zo, Co.detectDuplicates = !!Ho, Po(), Co.sortDetached = oo(function (kr) {
			return 1 & kr.compareDocumentPosition(Oo.createElement("fieldset"))
		}), oo(function (kr) {
			return kr.innerHTML = "<a href='#'></a>", "#" === kr.firstChild.getAttribute("href")
		}) || ro("type|href|height|width", function (kr, Lr, Dr) {
			if (!Dr) return kr.getAttribute(Lr, "type" === Lr.toLowerCase() ? 1 : 2)
		}), Co.attributes && oo(function (kr) {
			return kr.innerHTML = "<input/>", kr.firstChild.setAttribute("value", ""), "" === kr.firstChild.getAttribute("value")
		}) || ro("value", function (kr, Lr, Dr) {
			if (!Dr && "input" === kr.nodeName.toLowerCase()) return kr.defaultValue
		}), oo(function (kr) {
			return null == kr.getAttribute("disabled")
		}) || ro(sr, function (kr, Lr, Dr) {
			var Nr;
			if (!Dr) return !0 === kr[Lr] ? Lr.toLowerCase() : (Nr = kr.getAttributeNode(Lr)) && Nr.specified ? Nr.value : null
		}), no)
	}(Zt);
	ws.find = Cs, ws.expr = Cs.selectors, ws.expr[":"] = ws.expr.pseudos, ws.uniqueSort = ws.unique = Cs.uniqueSort, ws.text = Cs.getText, ws.isXMLDoc = Cs.isXML, ws.contains = Cs.contains, ws.escapeSelector = Cs.escape;
	var Ss = function (to, no, so) {
			for (var ao = [];
				(to = to[no]) && 9 !== to.nodeType;)
				if (1 === to.nodeType) {
					if (void 0 !== so && ws(to).is(so)) break;
					ao.push(to)
				}
			return ao
		},
		Es = function (to, no) {
			for (var so = []; to; to = to.nextSibling) 1 === to.nodeType && to !== no && so.push(to);
			return so
		},
		ks = ws.expr.match.needsContext,
		Ls = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
	ws.filter = function (to, no, so) {
		var ao = no[0];
		return so && (to = ":not(" + to + ")"), 1 === no.length && 1 === ao.nodeType ? ws.find.matchesSelector(ao, to) ? [ao] : [] : ws.find.matches(to, ws.grep(no, function (oo) {
			return 1 === oo.nodeType
		}))
	}, ws.fn.extend({
		find: function (to) {
			var no, so, ao = this.length,
				oo = this;
			if ("string" != typeof to) return this.pushStack(ws(to).filter(function () {
				for (no = 0; no < ao; no++)
					if (ws.contains(oo[no], this)) return !0
			}));
			for (so = this.pushStack([]), no = 0; no < ao; no++) ws.find(to, oo[no], so);
			return 1 < ao ? ws.uniqueSort(so) : so
		},
		filter: function (to) {
			return this.pushStack(on(this, to || [], !1))
		},
		not: function (to) {
			return this.pushStack(on(this, to || [], !0))
		},
		is: function (to) {
			return !!on(this, "string" == typeof to && ks.test(to) ? ws(to) : to || [], !1).length
		}
	});
	var Ds, Ns = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(ws.fn.init = function (to, no, so) {
		var ao, oo;
		if (!to) return this;
		if (so = so || Ds, "string" == typeof to) {
			if (!(ao = "<" === to[0] && ">" === to[to.length - 1] && 3 <= to.length ? [null, to, null] : Ns.exec(to)) || !ao[1] && no) return !no || no.jquery ? (no || so).find(to) : this.constructor(no).find(to);
			if (ao[1]) {
				if (no = no instanceof ws ? no[0] : no, ws.merge(this, ws.parseHTML(ao[1], no && no.nodeType ? no.ownerDocument || no : rs, !0)), Ls.test(ao[1]) && ws.isPlainObject(no))
					for (ao in no) bs(this[ao]) ? this[ao](no[ao]) : this.attr(ao, no[ao]);
				return this
			}
			return (oo = rs.getElementById(ao[2])) && (this[0] = oo, this.length = 1), this
		}
		return to.nodeType ? (this[0] = to, this.length = 1, this) : bs(to) ? void 0 === so.ready ? to(ws) : so.ready(to) : ws.makeArray(to, this)
	}).prototype = ws.fn, Ds = ws(rs);
	var js = /^(?:parents|prev(?:Until|All))/,
		qs = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	ws.fn.extend({
		has: function (to) {
			var no = ws(to, this),
				so = no.length;
			return this.filter(function () {
				for (var ao = 0; ao < so; ao++)
					if (ws.contains(this, no[ao])) return !0
			})
		},
		closest: function (to, no) {
			var so, ao = 0,
				oo = this.length,
				ro = [],
				io = "string" != typeof to && ws(to);
			if (!ks.test(to))
				for (; ao < oo; ao++)
					for (so = this[ao]; so && so !== no; so = so.parentNode)
						if (11 > so.nodeType && (io ? -1 < io.index(so) : 1 === so.nodeType && ws.find.matchesSelector(so, to))) {
							ro.push(so);
							break
						}
			return this.pushStack(1 < ro.length ? ws.uniqueSort(ro) : ro)
		},
		index: function (to) {
			return to ? "string" == typeof to ? cs.call(ws(to), this[0]) : cs.call(this, to.jquery ? to[0] : to) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (to, no) {
			return this.pushStack(ws.uniqueSort(ws.merge(this.get(), ws(to, no))))
		},
		addBack: function (to) {
			return this.add(null == to ? this.prevObject : this.prevObject.filter(to))
		}
	}), ws.each({
		parent: function (to) {
			var no = to.parentNode;
			return no && 11 !== no.nodeType ? no : null
		},
		parents: function (to) {
			return Ss(to, "parentNode")
		},
		parentsUntil: function (to, no, so) {
			return Ss(to, "parentNode", so)
		},
		next: function (to) {
			return rn(to, "nextSibling")
		},
		prev: function (to) {
			return rn(to, "previousSibling")
		},
		nextAll: function (to) {
			return Ss(to, "nextSibling")
		},
		prevAll: function (to) {
			return Ss(to, "previousSibling")
		},
		nextUntil: function (to, no, so) {
			return Ss(to, "nextSibling", so)
		},
		prevUntil: function (to, no, so) {
			return Ss(to, "previousSibling", so)
		},
		siblings: function (to) {
			return Es((to.parentNode || {}).firstChild, to)
		},
		children: function (to) {
			return Es(to.firstChild)
		},
		contents: function (to) {
			return an(to, "iframe") ? to.contentDocument : (an(to, "template") && (to = to.content || to), ws.merge([], to.childNodes))
		}
	}, function (to, no) {
		ws.fn[to] = function (so, ao) {
			var oo = ws.map(this, no, so);
			return "Until" !== to.slice(-5) && (ao = so), ao && "string" == typeof ao && (oo = ws.filter(ao, oo)), 1 < this.length && (qs[to] || ws.uniqueSort(oo), js.test(to) && oo.reverse()), this.pushStack(oo)
		}
	});
	var Hs = /[^\x20\t\r\n\f]+/g;
	ws.Callbacks = function (to) {
		to = "string" == typeof to ? ln(to) : ws.extend({}, to);
		var no, so, ao, oo, ro = [],
			io = [],
			lo = -1,
			po = function () {
				for (oo = oo || to.once, ao = no = !0; io.length; lo = -1)
					for (so = io.shift(); ++lo < ro.length;) !1 === ro[lo].apply(so[0], so[1]) && to.stopOnFalse && (lo = ro.length, so = !1);
				to.memory || (so = !1), no = !1, oo && (ro = so ? [] : "")
			},
			co = {
				add: function () {
					return ro && (so && !no && (lo = ro.length - 1, io.push(so)), function uo(ho) {
						ws.each(ho, function (fo, go) {
							bs(go) ? to.unique && co.has(go) || ro.push(go) : go && go.length && "string" !== nn(go) && uo(go)
						})
					}(arguments), so && !no && po()), this
				},
				remove: function () {
					return ws.each(arguments, function (uo, ho) {
						for (var fo; - 1 < (fo = ws.inArray(ho, ro, fo));) ro.splice(fo, 1), fo <= lo && lo--
					}), this
				},
				has: function (uo) {
					return uo ? -1 < ws.inArray(uo, ro) : 0 < ro.length
				},
				empty: function () {
					return ro && (ro = []), this
				},
				disable: function () {
					return oo = io = [], ro = so = "", this
				},
				disabled: function () {
					return !ro
				},
				lock: function () {
					return oo = io = [], so || no || (ro = so = ""), this
				},
				locked: function () {
					return !!oo
				},
				fireWith: function (uo, ho) {
					return oo || (ho = [uo, (ho = ho || []).slice ? ho.slice() : ho], io.push(ho), no || po()), this
				},
				fire: function () {
					return co.fireWith(this, arguments), this
				},
				fired: function () {
					return !!ao
				}
			};
		return co
	}, ws.extend({
		Deferred: function (to) {
			var no = [["notify", "progress", ws.Callbacks("memory"), ws.Callbacks("memory"), 2], ["resolve", "done", ws.Callbacks("once memory"), ws.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ws.Callbacks("once memory"), ws.Callbacks("once memory"), 1, "rejected"]],
				so = "pending",
				ao = {
					state: function () {
						return so
					},
					always: function () {
						return oo.done(arguments).fail(arguments), this
					},
					"catch": function (ro) {
						return ao.then(null, ro)
					},
					pipe: function () {
						var ro = arguments;
						return ws.Deferred(function (io) {
							ws.each(no, function (lo, po) {
								var co = bs(ro[po[4]]) && ro[po[4]];
								oo[po[1]](function () {
									var uo = co && co.apply(this, arguments);
									uo && bs(uo.promise) ? uo.promise().progress(io.notify).done(io.resolve).fail(io.reject) : io[po[0] + "With"](this, co ? [uo] : arguments)
								})
							}), ro = null
						}).promise()
					},
					then: function (ro, io, lo) {
						function po(uo, ho, fo, go) {
							return function () {
								var mo = this,
									yo = arguments,
									bo = function () {
										var vo, Ao;
										if (!(uo < co)) {
											if ((vo = fo.apply(mo, yo)) === ho.promise()) throw new TypeError("Thenable self-resolution");
											Ao = vo && ("object" == typeof vo || "function" == typeof vo) && vo.then, bs(Ao) ? go ? Ao.call(vo, po(co, ho, dn, go), po(co, ho, pn, go)) : (co++, Ao.call(vo, po(co, ho, dn, go), po(co, ho, pn, go), po(co, ho, dn, ho.notifyWith))) : (fo !== dn && (mo = void 0, yo = [vo]), (go || ho.resolveWith)(mo, yo))
										}
									},
									xo = go ? bo : function () {
										try {
											bo()
										} catch (vo) {
											ws.Deferred.exceptionHook && ws.Deferred.exceptionHook(vo, xo.stackTrace), uo + 1 >= co && (fo !== pn && (mo = void 0, yo = [vo]), ho.rejectWith(mo, yo))
										}
									};
								uo ? xo() : (ws.Deferred.getStackHook && (xo.stackTrace = ws.Deferred.getStackHook()), Zt.setTimeout(xo))
							}
						}
						var co = 0;
						return ws.Deferred(function (uo) {
							no[0][3].add(po(0, uo, bs(lo) ? lo : dn, uo.notifyWith)), no[1][3].add(po(0, uo, bs(ro) ? ro : dn)), no[2][3].add(po(0, uo, bs(io) ? io : pn))
						}).promise()
					},
					promise: function (ro) {
						return null == ro ? ao : ws.extend(ro, ao)
					}
				},
				oo = {};
			return ws.each(no, function (ro, io) {
				var lo = io[2],
					po = io[5];
				ao[io[1]] = lo.add, po && lo.add(function () {
					so = po
				}, no[3 - ro][2].disable, no[3 - ro][3].disable, no[0][2].lock, no[0][3].lock), lo.add(io[3].fire), oo[io[0]] = function () {
					return oo[io[0] + "With"](this === oo ? void 0 : this, arguments), this
				}, oo[io[0] + "With"] = lo.fireWith
			}), ao.promise(oo), to && to.call(oo, oo), oo
		},
		when: function (to) {
			var no = arguments.length,
				so = no,
				ao = Array(so),
				oo = ls.call(arguments),
				ro = ws.Deferred(),
				io = function (lo) {
					return function (po) {
						ao[lo] = this, oo[lo] = 1 < arguments.length ? ls.call(arguments) : po, --no || ro.resolveWith(ao, oo)
					}
				};
			if (1 >= no && (cn(to, ro.done(io(so)).resolve, ro.reject, !no), "pending" === ro.state() || bs(oo[so] && oo[so].then))) return ro.then();
			for (; so--;) cn(oo[so], io(so), ro.reject);
			return ro.promise()
		}
	});
	var Ps = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	ws.Deferred.exceptionHook = function (to, no) {
		Zt.console && Zt.console.warn && to && Ps.test(to.name) && Zt.console.warn("jQuery.Deferred exception: " + to.message, to.stack, no)
	}, ws.readyException = function (to) {
		Zt.setTimeout(function () {
			throw to
		})
	};
	var Os = ws.Deferred();
	ws.fn.ready = function (to) {
		return Os.then(to)["catch"](function (no) {
			ws.readyException(no)
		}), this
	}, ws.extend({
		isReady: !1,
		readyWait: 1,
		ready: function (to) {
			(!0 === to ? --ws.readyWait : ws.isReady) || (ws.isReady = !0, !0 !== to && 0 < --ws.readyWait || Os.resolveWith(rs, [ws]))
		}
	}), ws.ready.then = Os.then, "complete" !== rs.readyState && ("loading" === rs.readyState || rs.documentElement.doScroll) ? (rs.addEventListener("DOMContentLoaded", un), Zt.addEventListener("load", un)) : Zt.setTimeout(ws.ready);
	var Ms = function (to, no, so, ao, oo, ro, io) {
			var lo = 0,
				po = to.length,
				co = null == so;
			if ("object" === nn(so))
				for (lo in oo = !0, so) Ms(to, no, lo, so[lo], !0, ro, io);
			else if (void 0 !== ao && (oo = !0, bs(ao) || (io = !0), co && (io ? (no.call(to, ao), no = null) : (co = no, no = function (uo, ho, fo) {
					return co.call(ws(uo), fo)
				})), no))
				for (; lo < po; lo++) no(to[lo], so, io ? ao : ao.call(to[lo], lo, no(to[lo], so)));
			return oo ? to : co ? no.call(to) : po ? no(to[0], so) : ro
		},
		_s = /^-ms-/,
		Bs = /-([a-z])/g,
		Is = function (to) {
			return 1 === to.nodeType || 9 === to.nodeType || !+to.nodeType
		};
	gn.uid = 1, gn.prototype = {
		cache: function (to) {
			var no = to[this.expando];
			return no || (no = {}, Is(to) && (to.nodeType ? to[this.expando] = no : Object.defineProperty(to, this.expando, {
				value: no,
				configurable: !0
			}))), no
		},
		set: function (to, no, so) {
			var ao, oo = this.cache(to);
			if ("string" == typeof no) oo[fn(no)] = so;
			else
				for (ao in no) oo[fn(ao)] = no[ao];
			return oo
		},
		get: function (to, no) {
			return void 0 === no ? this.cache(to) : to[this.expando] && to[this.expando][fn(no)]
		},
		access: function (to, no, so) {
			return void 0 === no || no && "string" == typeof no && void 0 === so ? this.get(to, no) : (this.set(to, no, so), void 0 === so ? no : so)
		},
		remove: function (to, no) {
			var so, ao = to[this.expando];
			if (void 0 !== ao) {
				if (void 0 !== no)
					for (so = (no = Array.isArray(no) ? no.map(fn) : ((no = fn(no)) in ao) ? [no] : no.match(Hs) || []).length; so--;) delete ao[no[so]];
				(void 0 === no || ws.isEmptyObject(ao)) && (to.nodeType ? to[this.expando] = void 0 : delete to[this.expando])
			}
		},
		hasData: function (to) {
			var no = to[this.expando];
			return void 0 !== no && !ws.isEmptyObject(no)
		}
	};
	var Ws = new gn,
		Rs = new gn,
		zs = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Us = /[A-Z]/g;
	ws.extend({
		hasData: function (to) {
			return Rs.hasData(to) || Ws.hasData(to)
		},
		data: function (to, no, so) {
			return Rs.access(to, no, so)
		},
		removeData: function (to, no) {
			Rs.remove(to, no)
		},
		_data: function (to, no, so) {
			return Ws.access(to, no, so)
		},
		_removeData: function (to, no) {
			Ws.remove(to, no)
		}
	}), ws.fn.extend({
		data: function (to, no) {
			var so, ao, oo, ro = this[0],
				io = ro && ro.attributes;
			if (void 0 === to) {
				if (this.length && (oo = Rs.get(ro), 1 === ro.nodeType && !Ws.get(ro, "hasDataAttrs"))) {
					for (so = io.length; so--;) io[so] && 0 === (ao = io[so].name).indexOf("data-") && (ao = fn(ao.slice(5)), yn(ro, ao, oo[ao]));
					Ws.set(ro, "hasDataAttrs", !0)
				}
				return oo
			}
			return "object" == typeof to ? this.each(function () {
				Rs.set(this, to)
			}) : Ms(this, function (lo) {
				var po;
				if (ro && void 0 === lo) {
					if (void 0 !== (po = Rs.get(ro, to))) return po;
					if (void 0 !== (po = yn(ro, to))) return po
				} else this.each(function () {
					Rs.set(this, to, lo)
				})
			}, null, no, 1 < arguments.length, null, !0)
		},
		removeData: function (to) {
			return this.each(function () {
				Rs.remove(this, to)
			})
		}
	}), ws.extend({
		queue: function (to, no, so) {
			var ao;
			if (to) return no = (no || "fx") + "queue", ao = Ws.get(to, no), so && (!ao || Array.isArray(so) ? ao = Ws.access(to, no, ws.makeArray(so)) : ao.push(so)), ao || []
		},
		dequeue: function (to, no) {
			no = no || "fx";
			var so = ws.queue(to, no),
				ao = so.length,
				oo = so.shift(),
				ro = ws._queueHooks(to, no);
			"inprogress" === oo && (oo = so.shift(), ao--), oo && ("fx" === no && so.unshift("inprogress"), delete ro.stop, oo.call(to, function () {
				ws.dequeue(to, no)
			}, ro)), !ao && ro && ro.empty.fire()
		},
		_queueHooks: function (to, no) {
			var so = no + "queueHooks";
			return Ws.get(to, so) || Ws.access(to, so, {
				empty: ws.Callbacks("once memory").add(function () {
					Ws.remove(to, [no + "queue", so])
				})
			})
		}
	}), ws.fn.extend({
		queue: function (to, no) {
			var so = 2;
			return "string" != typeof to && (no = to, to = "fx", so--), arguments.length < so ? ws.queue(this[0], to) : void 0 === no ? this : this.each(function () {
				var ao = ws.queue(this, to, no);
				ws._queueHooks(this, to), "fx" === to && "inprogress" !== ao[0] && ws.dequeue(this, to)
			})
		},
		dequeue: function (to) {
			return this.each(function () {
				ws.dequeue(this, to)
			})
		},
		clearQueue: function (to) {
			return this.queue(to || "fx", [])
		},
		promise: function (to, no) {
			var so, ao = 1,
				oo = ws.Deferred(),
				ro = this,
				io = this.length,
				lo = function () {
					--ao || oo.resolveWith(ro, [ro])
				};
			for ("string" != typeof to && (no = to, to = void 0), to = to || "fx"; io--;)(so = Ws.get(ro[io], to + "queueHooks")) && so.empty && (ao++, so.empty.add(lo));
			return lo(), oo.promise(no)
		}
	});
	var Fs = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		$s = new RegExp("^(?:([+-])=|)(" + Fs + ")([a-z%]*)$", "i"),
		Xs = ["Top", "Right", "Bottom", "Left"],
		Gs = function (to, no) {
			return "none" === (to = no || to).style.display || "" === to.style.display && ws.contains(to.ownerDocument, to) && "none" === ws.css(to, "display")
		},
		Qs = function (to, no, so, ao) {
			var oo, ro, io = {};
			for (ro in no) io[ro] = to.style[ro], to.style[ro] = no[ro];
			for (ro in oo = so.apply(to, ao || []), no) to.style[ro] = io[ro];
			return oo
		},
		Vs = {};
	ws.fn.extend({
		show: function () {
			return vn(this, !0)
		},
		hide: function () {
			return vn(this)
		},
		toggle: function (to) {
			return "boolean" == typeof to ? to ? this.show() : this.hide() : this.each(function () {
				Gs(this) ? ws(this).show() : ws(this).hide()
			})
		}
	});
	var Ys = /^(?:checkbox|radio)$/i,
		Ks = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		Js = /^$|^module$|\/(?:java|ecma)script/i,
		Zs = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	Zs.optgroup = Zs.option, Zs.tbody = Zs.tfoot = Zs.colgroup = Zs.caption = Zs.thead, Zs.th = Zs.td;
	var ea = /<|&#?\w+;/;
	! function () {
		var to = rs.createDocumentFragment().appendChild(rs.createElement("div")),
			no = rs.createElement("input");
		no.setAttribute("type", "radio"), no.setAttribute("checked", "checked"), no.setAttribute("name", "t"), to.appendChild(no), ys.checkClone = to.cloneNode(!0).cloneNode(!0).lastChild.checked, to.innerHTML = "<textarea>x</textarea>", ys.noCloneChecked = !!to.cloneNode(!0).lastChild.defaultValue
	}();
	var ta = rs.documentElement,
		na = /^key/,
		sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		oa = /^([^.]*)(?:\.(.+)|)/;
	ws.event = {
		global: {},
		add: function (to, no, so, ao, oo) {
			var ro, io, lo, po, co, uo, ho, fo, go, mo, yo, bo = Ws.get(to);
			if (bo)
				for (so.handler && (so = (ro = so).handler, oo = ro.selector), oo && ws.find.matchesSelector(ta, oo), so.guid || (so.guid = ws.guid++), (po = bo.events) || (po = bo.events = {}), (io = bo.handle) || (io = bo.handle = function (xo) {
						return "undefined" != typeof ws && ws.event.triggered !== xo.type ? ws.event.dispatch.apply(to, arguments) : void 0
					}), co = (no = (no || "").match(Hs) || [""]).length; co--;) go = yo = (lo = oa.exec(no[co]) || [])[1], mo = (lo[2] || "").split(".").sort(), go && (ho = ws.event.special[go] || {}, go = (oo ? ho.delegateType : ho.bindType) || go, ho = ws.event.special[go] || {}, uo = ws.extend({
					type: go,
					origType: yo,
					data: ao,
					handler: so,
					guid: so.guid,
					selector: oo,
					needsContext: oo && ws.expr.match.needsContext.test(oo),
					namespace: mo.join(".")
				}, ro), (fo = po[go]) || ((fo = po[go] = []).delegateCount = 0, ho.setup && !1 !== ho.setup.call(to, ao, mo, io) || to.addEventListener && to.addEventListener(go, io)), ho.add && (ho.add.call(to, uo), uo.handler.guid || (uo.handler.guid = so.guid)), oo ? fo.splice(fo.delegateCount++, 0, uo) : fo.push(uo), ws.event.global[go] = !0)
		},
		remove: function (to, no, so, ao, oo) {
			var ro, io, lo, po, co, uo, ho, fo, go, mo, yo, bo = Ws.hasData(to) && Ws.get(to);
			if (bo && (po = bo.events)) {
				for (co = (no = (no || "").match(Hs) || [""]).length; co--;)
					if (lo = oa.exec(no[co]) || [], go = yo = lo[1], mo = (lo[2] || "").split(".").sort(), go) {
						for (ho = ws.event.special[go] || {}, fo = po[go = (ao ? ho.delegateType : ho.bindType) || go] || [], lo = lo[2] && new RegExp("(^|\\.)" + mo.join("\\.(?:.*\\.|)") + "(\\.|$)"), io = ro = fo.length; ro--;) uo = fo[ro], !oo && yo !== uo.origType || so && so.guid !== uo.guid || lo && !lo.test(uo.namespace) || ao && ao !== uo.selector && ("**" !== ao || !uo.selector) || (fo.splice(ro, 1), uo.selector && fo.delegateCount--, ho.remove && ho.remove.call(to, uo));
						io && !fo.length && (ho.teardown && !1 !== ho.teardown.call(to, mo, bo.handle) || ws.removeEvent(to, go, bo.handle), delete po[go])
					} else
						for (go in po) ws.event.remove(to, go + no[co], so, ao, !0);
				ws.isEmptyObject(po) && Ws.remove(to, "handle events")
			}
		},
		dispatch: function (to) {
			var so, ao, oo, ro, io, lo, no = ws.event.fix(to),
				po = Array(arguments.length),
				co = (Ws.get(this, "events") || {})[no.type] || [],
				uo = ws.event.special[no.type] || {};
			for (po[0] = no, so = 1; so < arguments.length; so++) po[so] = arguments[so];
			if (no.delegateTarget = this, !uo.preDispatch || !1 !== uo.preDispatch.call(this, no)) {
				for (lo = ws.event.handlers.call(this, no, co), so = 0;
					(ro = lo[so++]) && !no.isPropagationStopped();)
					for (no.currentTarget = ro.elem, ao = 0;
						(io = ro.handlers[ao++]) && !no.isImmediatePropagationStopped();) no.rnamespace && !no.rnamespace.test(io.namespace) || (no.handleObj = io, no.data = io.data, void 0 !== (oo = ((ws.event.special[io.origType] || {}).handle || io.handler).apply(ro.elem, po)) && !1 === (no.result = oo) && (no.preventDefault(), no.stopPropagation()));
				return uo.postDispatch && uo.postDispatch.call(this, no), no.result
			}
		},
		handlers: function (to, no) {
			var so, ao, oo, ro, io, lo = [],
				po = no.delegateCount,
				co = to.target;
			if (po && co.nodeType && !("click" === to.type && 1 <= to.button))
				for (; co !== this; co = co.parentNode || this)
					if (1 === co.nodeType && ("click" !== to.type || !0 !== co.disabled)) {
						for (ro = [], io = {}, so = 0; so < po; so++) void 0 === io[oo = (ao = no[so]).selector + " "] && (io[oo] = ao.needsContext ? -1 < ws(oo, this).index(co) : ws.find(oo, this, null, [co]).length), io[oo] && ro.push(ao);
						ro.length && lo.push({
							elem: co,
							handlers: ro
						})
					}
			return co = this, po < no.length && lo.push({
				elem: co,
				handlers: no.slice(po)
			}), lo
		},
		addProp: function (to, no) {
			Object.defineProperty(ws.Event.prototype, to, {
				enumerable: !0,
				configurable: !0,
				get: bs(no) ? function () {
					if (this.originalEvent) return no(this.originalEvent)
				} : function () {
					if (this.originalEvent) return this.originalEvent[to]
				},
				set: function (so) {
					Object.defineProperty(this, to, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: so
					})
				}
			})
		},
		fix: function (to) {
			return to[ws.expando] ? to : new ws.Event(to)
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					if (this !== En() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					if (this === En() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					if ("checkbox" === this.type && this.click && an(this, "input")) return this.click(), !1
				},
				_default: function (to) {
					return an(to.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (to) {
					void 0 !== to.result && to.originalEvent && (to.originalEvent.returnValue = to.result)
				}
			}
		}
	}, ws.removeEvent = function (to, no, so) {
		to.removeEventListener && to.removeEventListener(no, so)
	}, ws.Event = function (to, no) {
		return this instanceof ws.Event ? void(to && to.type ? (this.originalEvent = to, this.type = to.type, this.isDefaultPrevented = to.defaultPrevented || void 0 === to.defaultPrevented && !1 === to.returnValue ? Cn : Sn, this.target = to.target && 3 === to.target.nodeType ? to.target.parentNode : to.target, this.currentTarget = to.currentTarget, this.relatedTarget = to.relatedTarget) : this.type = to, no && ws.extend(this, no), this.timeStamp = to && to.timeStamp || Date.now(), this[ws.expando] = !0) : new ws.Event(to, no)
	}, ws.Event.prototype = {
		constructor: ws.Event,
		isDefaultPrevented: Sn,
		isPropagationStopped: Sn,
		isImmediatePropagationStopped: Sn,
		isSimulated: !1,
		preventDefault: function () {
			var to = this.originalEvent;
			this.isDefaultPrevented = Cn, to && !this.isSimulated && to.preventDefault()
		},
		stopPropagation: function () {
			var to = this.originalEvent;
			this.isPropagationStopped = Cn, to && !this.isSimulated && to.stopPropagation()
		},
		stopImmediatePropagation: function () {
			var to = this.originalEvent;
			this.isImmediatePropagationStopped = Cn, to && !this.isSimulated && to.stopImmediatePropagation(), this.stopPropagation()
		}
	}, ws.each({
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
		which: function (to) {
			var no = to.button;
			return null == to.which && na.test(to.type) ? null == to.charCode ? to.keyCode : to.charCode : !to.which && void 0 !== no && sa.test(to.type) ? 1 & no ? 1 : 2 & no ? 3 : 4 & no ? 2 : 0 : to.which
		}
	}, ws.event.addProp), ws.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (to, no) {
		ws.event.special[to] = {
			delegateType: no,
			bindType: no,
			handle: function (so) {
				var ao, oo = this,
					ro = so.relatedTarget,
					io = so.handleObj;
				return ro && (ro === oo || ws.contains(oo, ro)) || (so.type = io.origType, ao = io.handler.apply(this, arguments), so.type = no), ao
			}
		}
	}), ws.fn.extend({
		on: function (to, no, so, ao) {
			return kn(this, to, no, so, ao)
		},
		one: function (to, no, so, ao) {
			return kn(this, to, no, so, ao, 1)
		},
		off: function (to, no, so) {
			var ao, oo;
			if (to && to.preventDefault && to.handleObj) return ao = to.handleObj, ws(to.delegateTarget).off(ao.namespace ? ao.origType + "." + ao.namespace : ao.origType, ao.selector, ao.handler), this;
			if ("object" == typeof to) {
				for (oo in to) this.off(oo, no, to[oo]);
				return this
			}
			return !1 !== no && "function" != typeof no || (so = no, no = void 0), !1 === so && (so = Sn), this.each(function () {
				ws.event.remove(this, to, so, no)
			})
		}
	});
	var ra = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		ia = /<script|<style|<link/i,
		la = /checked\s*(?:[^=]|=\s*.checked.)/i,
		da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	ws.extend({
		htmlPrefilter: function (to) {
			return to.replace(ra, "<$1></$2>")
		},
		clone: function (to, no, so) {
			var ao, oo, ro, io, lo = to.cloneNode(!0),
				po = ws.contains(to.ownerDocument, to);
			if (!(ys.noCloneChecked || 1 !== to.nodeType && 11 !== to.nodeType || ws.isXMLDoc(to)))
				for (io = An(lo), ao = 0, oo = (ro = An(to)).length; ao < oo; ao++) qn(ro[ao], io[ao]);
			if (no)
				if (so)
					for (ro = ro || An(to), io = io || An(lo), ao = 0, oo = ro.length; ao < oo; ao++) jn(ro[ao], io[ao]);
				else jn(to, lo);
			return 0 < (io = An(lo, "script")).length && wn(io, !po && An(to, "script")), lo
		},
		cleanData: function (to) {
			for (var no, so, ao, oo = ws.event.special, ro = 0; void 0 !== (so = to[ro]); ro++)
				if (Is(so)) {
					if (no = so[Ws.expando]) {
						if (no.events)
							for (ao in no.events) oo[ao] ? ws.event.remove(so, ao) : ws.removeEvent(so, ao, no.handle);
						so[Ws.expando] = void 0
					}
					so[Rs.expando] && (so[Rs.expando] = void 0)
				}
		}
	}), ws.fn.extend({
		detach: function (to) {
			return Pn(this, to, !0)
		},
		remove: function (to) {
			return Pn(this, to)
		},
		text: function (to) {
			return Ms(this, function (no) {
				return void 0 === no ? ws.text(this) : this.empty().each(function () {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = no)
				})
			}, null, to, arguments.length)
		},
		append: function () {
			return Hn(this, arguments, function (to) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ln(this, to).appendChild(to)
			})
		},
		prepend: function () {
			return Hn(this, arguments, function (to) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var no = Ln(this, to);
					no.insertBefore(to, no.firstChild)
				}
			})
		},
		before: function () {
			return Hn(this, arguments, function (to) {
				this.parentNode && this.parentNode.insertBefore(to, this)
			})
		},
		after: function () {
			return Hn(this, arguments, function (to) {
				this.parentNode && this.parentNode.insertBefore(to, this.nextSibling)
			})
		},
		empty: function () {
			for (var to, no = 0; null != (to = this[no]); no++) 1 === to.nodeType && (ws.cleanData(An(to, !1)), to.textContent = "");
			return this
		},
		clone: function (to, no) {
			return to = null != to && to, no = null == no ? to : no, this.map(function () {
				return ws.clone(this, to, no)
			})
		},
		html: function (to) {
			return Ms(this, function (no) {
				var so = this[0] || {},
					ao = 0,
					oo = this.length;
				if (void 0 === no && 1 === so.nodeType) return so.innerHTML;
				if ("string" == typeof no && !ia.test(no) && !Zs[(Ks.exec(no) || ["", ""])[1].toLowerCase()]) {
					no = ws.htmlPrefilter(no);
					try {
						for (; ao < oo; ao++) 1 === (so = this[ao] || {}).nodeType && (ws.cleanData(An(so, !1)), so.innerHTML = no);
						so = 0
					} catch (ro) {}
				}
				so && this.empty().append(no)
			}, null, to, arguments.length)
		},
		replaceWith: function () {
			var to = [];
			return Hn(this, arguments, function (no) {
				var so = this.parentNode;
				0 > ws.inArray(this, to) && (ws.cleanData(An(this)), so && so.replaceChild(no, this))
			}, to)
		}
	}), ws.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (to, no) {
		ws.fn[to] = function (so) {
			for (var ao, oo = [], ro = ws(so), io = ro.length - 1, lo = 0; lo <= io; lo++) ao = lo === io ? this : this.clone(!0), ws(ro[lo])[no](ao), ps.apply(oo, ao.get());
			return this.pushStack(oo)
		}
	});
	var pa = new RegExp("^(" + Fs + ")(?!px)[a-z%]+$", "i"),
		ca = function (to) {
			var no = to.ownerDocument.defaultView;
			return no && no.opener || (no = Zt), no.getComputedStyle(to)
		},
		ua = new RegExp(Xs.join("|"), "i");
	! function () {
		function to() {
			if (po) {
				lo.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", po.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ta.appendChild(lo).appendChild(po);
				var co = Zt.getComputedStyle(po);
				so = "1%" !== co.top, io = 12 === no(co.marginLeft), po.style.right = "60%", ro = 36 === no(co.right), ao = 36 === no(co.width), po.style.position = "absolute", oo = 36 === po.offsetWidth || "absolute", ta.removeChild(lo), po = null
			}
		}

		function no(co) {
			return Math.round(parseFloat(co))
		}
		var so, ao, oo, ro, io, lo = rs.createElement("div"),
			po = rs.createElement("div");
		po.style && (po.style.backgroundClip = "content-box", po.cloneNode(!0).style.backgroundClip = "", ys.clearCloneStyle = "content-box" === po.style.backgroundClip, ws.extend(ys, {
			boxSizingReliable: function () {
				return to(), ao
			},
			pixelBoxStyles: function () {
				return to(), ro
			},
			pixelPosition: function () {
				return to(), so
			},
			reliableMarginLeft: function () {
				return to(), io
			},
			scrollboxSize: function () {
				return to(), oo
			}
		}))
	}();
	var ha = /^(none|table(?!-c[ea]).+)/,
		fa = /^--/,
		ga = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		ma = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		ya = ["Webkit", "Moz", "ms"],
		xa = rs.createElement("div").style;
	ws.extend({
		cssHooks: {
			opacity: {
				get: function (to, no) {
					if (no) {
						var so = On(to, "opacity");
						return "" === so ? "1" : so
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
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {},
		style: function (to, no, so, ao) {
			if (to && 3 !== to.nodeType && 8 !== to.nodeType && to.style) {
				var oo, ro, io, lo = fn(no),
					po = fa.test(no),
					co = to.style;
				if (po || (no = Bn(lo)), io = ws.cssHooks[no] || ws.cssHooks[lo], void 0 === so) return io && "get" in io && void 0 !== (oo = io.get(to, !1, ao)) ? oo : co[no];
				"string" == (ro = typeof so) && (oo = $s.exec(so)) && oo[1] && (so = bn(to, no, oo), ro = "number"), null != so && so === so && ("number" === ro && (so += oo && oo[3] || (ws.cssNumber[lo] ? "" : "px")), ys.clearCloneStyle || "" !== so || 0 !== no.indexOf("background") || (co[no] = "inherit"), io && "set" in io && void 0 === (so = io.set(to, so, ao)) || (po ? co.setProperty(no, so) : co[no] = so))
			}
		},
		css: function (to, no, so, ao) {
			var oo, ro, io, lo = fn(no);
			return fa.test(no) || (no = Bn(lo)), (io = ws.cssHooks[no] || ws.cssHooks[lo]) && "get" in io && (oo = io.get(to, !0, so)), void 0 === oo && (oo = On(to, no, ao)), "normal" === oo && no in ma && (oo = ma[no]), "" === so || so ? (ro = parseFloat(oo), !0 === so || isFinite(ro) ? ro || 0 : oo) : oo
		}
	}), ws.each(["height", "width"], function (to, no) {
		ws.cssHooks[no] = {
			get: function (so, ao, oo) {
				if (ao) return !ha.test(ws.css(so, "display")) || so.getClientRects().length && so.getBoundingClientRect().width ? Rn(so, no, oo) : Qs(so, ga, function () {
					return Rn(so, no, oo)
				})
			},
			set: function (so, ao, oo) {
				var ro, io = ca(so),
					lo = "border-box" === ws.css(so, "boxSizing", !1, io),
					po = oo && Wn(so, no, oo, lo, io);
				return lo && ys.scrollboxSize() === io.position && (po -= Math.ceil(so["offset" + no[0].toUpperCase() + no.slice(1)] - parseFloat(io[no]) - Wn(so, no, "border", !1, io) - .5)), po && (ro = $s.exec(ao)) && "px" !== (ro[3] || "px") && (so.style[no] = ao, ao = ws.css(so, no)), In(so, ao, po)
			}
		}
	}), ws.cssHooks.marginLeft = Mn(ys.reliableMarginLeft, function (to, no) {
		if (no) return (parseFloat(On(to, "marginLeft")) || to.getBoundingClientRect().left - Qs(to, {
			marginLeft: 0
		}, function () {
			return to.getBoundingClientRect().left
		})) + "px"
	}), ws.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (to, no) {
		ws.cssHooks[to + no] = {
			expand: function (so) {
				for (var ao = 0, oo = {}, ro = "string" == typeof so ? so.split(" ") : [so]; 4 > ao; ao++) oo[to + Xs[ao] + no] = ro[ao] || ro[ao - 2] || ro[0];
				return oo
			}
		}, "margin" !== to && (ws.cssHooks[to + no].set = In)
	}), ws.fn.extend({
		css: function (to, no) {
			return Ms(this, function (so, ao, oo) {
				var ro, io, lo = {},
					po = 0;
				if (Array.isArray(ao)) {
					for (ro = ca(so), io = ao.length; po < io; po++) lo[ao[po]] = ws.css(so, ao[po], !1, ro);
					return lo
				}
				return void 0 === oo ? ws.css(so, ao) : ws.style(so, ao, oo)
			}, to, no, 1 < arguments.length)
		}
	}), ws.Tween = zn, zn.prototype = {
		constructor: zn,
		init: function (to, no, so, ao, oo, ro) {
			this.elem = to, this.prop = so, this.easing = oo || ws.easing._default, this.options = no, this.start = this.now = this.cur(), this.end = ao, this.unit = ro || (ws.cssNumber[so] ? "" : "px")
		},
		cur: function () {
			var to = zn.propHooks[this.prop];
			return to && to.get ? to.get(this) : zn.propHooks._default.get(this)
		},
		run: function (to) {
			var no, so = zn.propHooks[this.prop];
			return this.pos = this.options.duration ? no = ws.easing[this.easing](to, this.options.duration * to, 0, 1, this.options.duration) : no = to, this.now = (this.end - this.start) * no + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), so && so.set ? so.set(this) : zn.propHooks._default.set(this), this
		}
	}, zn.prototype.init.prototype = zn.prototype, zn.propHooks = {
		_default: {
			get: function (to) {
				var no;
				return 1 !== to.elem.nodeType || null != to.elem[to.prop] && null == to.elem.style[to.prop] ? to.elem[to.prop] : (no = ws.css(to.elem, to.prop, "")) && "auto" !== no ? no : 0
			},
			set: function (to) {
				ws.fx.step[to.prop] ? ws.fx.step[to.prop](to) : 1 === to.elem.nodeType && (null != to.elem.style[ws.cssProps[to.prop]] || ws.cssHooks[to.prop]) ? ws.style(to.elem, to.prop, to.now + to.unit) : to.elem[to.prop] = to.now
			}
		}
	}, zn.propHooks.scrollTop = zn.propHooks.scrollLeft = {
		set: function (to) {
			to.elem.nodeType && to.elem.parentNode && (to.elem[to.prop] = to.now)
		}
	}, ws.easing = {
		linear: function (to) {
			return to
		},
		swing: function (to) {
			return .5 - Math.cos(to * Math.PI) / 2
		},
		_default: "swing"
	}, ws.fx = zn.prototype.init, ws.fx.step = {};
	var va, Aa, wa = /^(?:toggle|show|hide)$/,
		Ta = /queueHooks$/;
	ws.Animation = ws.extend(Vn, {
			tweeners: {
				"*": [function (to, no) {
					var so = this.createTween(to, no);
					return bn(so.elem, to, $s.exec(no), so), so
				}]
			},
			tweener: function (to, no) {
				bs(to) ? (no = to, to = ["*"]) : to = to.match(Hs);
				for (var so, ao = 0, oo = to.length; ao < oo; ao++) so = to[ao], Vn.tweeners[so] = Vn.tweeners[so] || [], Vn.tweeners[so].unshift(no)
			},
			prefilters: [function (to, no, so) {
				var ao, oo, ro, io, lo, po, co, uo, fo = this,
					go = {},
					mo = to.style,
					yo = to.nodeType && Gs(to),
					bo = Ws.get(to, "fxshow");
				for (ao in so.queue || (null == (io = ws._queueHooks(to, "fx")).unqueued && (io.unqueued = 0, lo = io.empty.fire, io.empty.fire = function () {
						io.unqueued || lo()
					}), io.unqueued++, fo.always(function () {
						fo.always(function () {
							io.unqueued--, ws.queue(to, "fx").length || io.empty.fire()
						})
					})), no)
					if (oo = no[ao], wa.test(oo)) {
						if (delete no[ao], ro = ro || "toggle" === oo, oo === (yo ? "hide" : "show")) {
							if ("show" !== oo || !bo || void 0 === bo[ao]) continue;
							yo = !0
						}
						go[ao] = bo && bo[ao] || ws.style(to, ao)
					}
				if ((po = !ws.isEmptyObject(no)) || !ws.isEmptyObject(go))
					for (ao in ("width" in no || "height" in no) && 1 === to.nodeType && (so.overflow = [mo.overflow, mo.overflowX, mo.overflowY], null == (co = bo && bo.display) && (co = Ws.get(to, "display")), "none" === (uo = ws.css(to, "display")) && (co ? uo = co : (vn([to], !0), co = to.style.display || co, uo = ws.css(to, "display"), vn([to]))), ("inline" === uo || "inline-block" === uo && null != co) && "none" === ws.css(to, "float") && (po || (fo.done(function () {
							mo.display = co
						}), null == co && (uo = mo.display, co = "none" === uo ? "" : uo)), mo.display = "inline-block")), so.overflow && (mo.overflow = "hidden", fo.always(function () {
							mo.overflow = so.overflow[0], mo.overflowX = so.overflow[1], mo.overflowY = so.overflow[2]
						})), po = !1, go) po || (bo ? "hidden" in bo && (yo = bo.hidden) : bo = Ws.access(to, "fxshow", {
						display: co
					}), ro && (bo.hidden = !yo), yo && vn([to], !0), fo.done(function () {
						for (ao in yo || vn([to]), Ws.remove(to, "fxshow"), go) ws.style(to, ao, go[ao])
					})), po = Xn(yo ? bo[ao] : 0, ao, fo), ao in bo || (bo[ao] = po.start, yo && (po.end = po.start, po.start = 0))
			}],
			prefilter: function (to, no) {
				no ? Vn.prefilters.unshift(to) : Vn.prefilters.push(to)
			}
		}), ws.speed = function (to, no, so) {
			var ao = to && "object" == typeof to ? ws.extend({}, to) : {
				complete: so || !so && no || bs(to) && to,
				duration: to,
				easing: so && no || no && !bs(no) && no
			};
			return ws.fx.off ? ao.duration = 0 : "number" != typeof ao.duration && (ao.duration in ws.fx.speeds ? ao.duration = ws.fx.speeds[ao.duration] : ao.duration = ws.fx.speeds._default), null != ao.queue && !0 !== ao.queue || (ao.queue = "fx"), ao.old = ao.complete, ao.complete = function () {
				bs(ao.old) && ao.old.call(this), ao.queue && ws.dequeue(this, ao.queue)
			}, ao
		}, ws.fn.extend({
			fadeTo: function (to, no, so, ao) {
				return this.filter(Gs).css("opacity", 0).show().end().animate({
					opacity: no
				}, to, so, ao)
			},
			animate: function (to, no, so, ao) {
				var oo = ws.isEmptyObject(to),
					ro = ws.speed(no, so, ao),
					io = function () {
						var lo = Vn(this, ws.extend({}, to), ro);
						(oo || Ws.get(this, "finish")) && lo.stop(!0)
					};
				return io.finish = io, oo || !1 === ro.queue ? this.each(io) : this.queue(ro.queue, io)
			},
			stop: function (to, no, so) {
				var ao = function (oo) {
					var ro = oo.stop;
					delete oo.stop, ro(so)
				};
				return "string" != typeof to && (so = no, no = to, to = void 0), no && !1 !== to && this.queue(to || "fx", []), this.each(function () {
					var oo = !0,
						ro = null != to && to + "queueHooks",
						io = ws.timers,
						lo = Ws.get(this);
					if (ro) lo[ro] && lo[ro].stop && ao(lo[ro]);
					else
						for (ro in lo) lo[ro] && lo[ro].stop && Ta.test(ro) && ao(lo[ro]);
					for (ro = io.length; ro--;) io[ro].elem !== this || null != to && io[ro].queue !== to || (io[ro].anim.stop(so), oo = !1, io.splice(ro, 1));
					!oo && so || ws.dequeue(this, to)
				})
			},
			finish: function (to) {
				return !1 !== to && (to = to || "fx"), this.each(function () {
					var no, so = Ws.get(this),
						ao = so[to + "queue"],
						oo = so[to + "queueHooks"],
						ro = ws.timers,
						io = ao ? ao.length : 0;
					for (so.finish = !0, ws.queue(this, to, []), oo && oo.stop && oo.stop.call(this, !0), no = ro.length; no--;) ro[no].elem === this && ro[no].queue === to && (ro[no].anim.stop(!0), ro.splice(no, 1));
					for (no = 0; no < io; no++) ao[no] && ao[no].finish && ao[no].finish.call(this);
					delete so.finish
				})
			}
		}), ws.each(["toggle", "show", "hide"], function (to, no) {
			var so = ws.fn[no];
			ws.fn[no] = function (ao, oo, ro) {
				return null == ao || "boolean" == typeof ao ? so.apply(this, arguments) : this.animate($n(no, !0), ao, oo, ro)
			}
		}), ws.each({
			slideDown: $n("show"),
			slideUp: $n("hide"),
			slideToggle: $n("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function (to, no) {
			ws.fn[to] = function (so, ao, oo) {
				return this.animate(no, so, ao, oo)
			}
		}), ws.timers = [], ws.fx.tick = function () {
			var to, no = 0,
				so = ws.timers;
			for (va = Date.now(); no < so.length; no++)(to = so[no])() || so[no] !== to || so.splice(no--, 1);
			so.length || ws.fx.stop(), va = void 0
		}, ws.fx.timer = function (to) {
			ws.timers.push(to), ws.fx.start()
		}, ws.fx.interval = 13, ws.fx.start = function () {
			Aa || (Aa = !0, Un())
		}, ws.fx.stop = function () {
			Aa = null
		}, ws.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, ws.fn.delay = function (to, no) {
			return to = ws.fx ? ws.fx.speeds[to] || to : to, no = no || "fx", this.queue(no, function (so, ao) {
				var oo = Zt.setTimeout(so, to);
				ao.stop = function () {
					Zt.clearTimeout(oo)
				}
			})
		},
		function () {
			var to = rs.createElement("input"),
				no = rs.createElement("select").appendChild(rs.createElement("option"));
			to.type = "checkbox", ys.checkOn = "" !== to.value, ys.optSelected = no.selected, (to = rs.createElement("input")).value = "t", to.type = "radio", ys.radioValue = "t" === to.value
		}();
	var Ca, Sa = ws.expr.attrHandle;
	ws.fn.extend({
		attr: function (to, no) {
			return Ms(this, ws.attr, to, no, 1 < arguments.length)
		},
		removeAttr: function (to) {
			return this.each(function () {
				ws.removeAttr(this, to)
			})
		}
	}), ws.extend({
		attr: function (to, no, so) {
			var ao, oo, ro = to.nodeType;
			if (3 !== ro && 8 !== ro && 2 !== ro) return "undefined" == typeof to.getAttribute ? ws.prop(to, no, so) : (1 === ro && ws.isXMLDoc(to) || (oo = ws.attrHooks[no.toLowerCase()] || (ws.expr.match.bool.test(no) ? Ca : void 0)), void 0 === so ? oo && "get" in oo && null !== (ao = oo.get(to, no)) ? ao : null == (ao = ws.find.attr(to, no)) ? void 0 : ao : null === so ? void ws.removeAttr(to, no) : oo && "set" in oo && void 0 !== (ao = oo.set(to, so, no)) ? ao : (to.setAttribute(no, so + ""), so))
		},
		attrHooks: {
			type: {
				set: function (to, no) {
					if (!ys.radioValue && "radio" === no && an(to, "input")) {
						var so = to.value;
						return to.setAttribute("type", no), so && (to.value = so), no
					}
				}
			}
		},
		removeAttr: function (to, no) {
			var so, ao = 0,
				oo = no && no.match(Hs);
			if (oo && 1 === to.nodeType)
				for (; so = oo[ao++];) to.removeAttribute(so)
		}
	}), Ca = {
		set: function (to, no, so) {
			return !1 === no ? ws.removeAttr(to, so) : to.setAttribute(so, so), so
		}
	}, ws.each(ws.expr.match.bool.source.match(/\w+/g), function (to, no) {
		var so = Sa[no] || ws.find.attr;
		Sa[no] = function (ao, oo, ro) {
			var io, lo, po = oo.toLowerCase();
			return ro || (lo = Sa[po], Sa[po] = io, io = null == so(ao, oo, ro) ? null : po, Sa[po] = lo), io
		}
	});
	var Ea = /^(?:input|select|textarea|button)$/i,
		ka = /^(?:a|area)$/i;
	ws.fn.extend({
		prop: function (to, no) {
			return Ms(this, ws.prop, to, no, 1 < arguments.length)
		},
		removeProp: function (to) {
			return this.each(function () {
				delete this[ws.propFix[to] || to]
			})
		}
	}), ws.extend({
		prop: function (to, no, so) {
			var ao, oo, ro = to.nodeType;
			if (3 !== ro && 8 !== ro && 2 !== ro) return 1 === ro && ws.isXMLDoc(to) || (no = ws.propFix[no] || no, oo = ws.propHooks[no]), void 0 === so ? oo && "get" in oo && null !== (ao = oo.get(to, no)) ? ao : to[no] : oo && "set" in oo && void 0 !== (ao = oo.set(to, so, no)) ? ao : to[no] = so
		},
		propHooks: {
			tabIndex: {
				get: function (to) {
					var no = ws.find.attr(to, "tabindex");
					return no ? parseInt(no, 10) : Ea.test(to.nodeName) || ka.test(to.nodeName) && to.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), ys.optSelected || (ws.propHooks.selected = {
		get: function (to) {
			var no = to.parentNode;
			return no && no.parentNode && no.parentNode.selectedIndex, null
		},
		set: function (to) {
			var no = to.parentNode;
			no && (no.selectedIndex, no.parentNode && no.parentNode.selectedIndex)
		}
	}), ws.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		ws.propFix[this.toLowerCase()] = this
	}), ws.fn.extend({
		addClass: function (to) {
			var no, so, ao, oo, ro, io, lo, po = 0;
			if (bs(to)) return this.each(function (co) {
				ws(this).addClass(to.call(this, co, Kn(this)))
			});
			if ((no = Jn(to)).length)
				for (; so = this[po++];)
					if (oo = Kn(so), ao = 1 === so.nodeType && " " + Yn(oo) + " ") {
						for (io = 0; ro = no[io++];) 0 > ao.indexOf(" " + ro + " ") && (ao += ro + " ");
						oo !== (lo = Yn(ao)) && so.setAttribute("class", lo)
					}
			return this
		},
		removeClass: function (to) {
			var no, so, ao, oo, ro, io, lo, po = 0;
			if (bs(to)) return this.each(function (co) {
				ws(this).removeClass(to.call(this, co, Kn(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ((no = Jn(to)).length)
				for (; so = this[po++];)
					if (oo = Kn(so), ao = 1 === so.nodeType && " " + Yn(oo) + " ") {
						for (io = 0; ro = no[io++];)
							for (; - 1 < ao.indexOf(" " + ro + " ");) ao = ao.replace(" " + ro + " ", " ");
						oo !== (lo = Yn(ao)) && so.setAttribute("class", lo)
					}
			return this
		},
		toggleClass: function (to, no) {
			var so = typeof to,
				ao = "string" == so || Array.isArray(to);
			return "boolean" == typeof no && ao ? no ? this.addClass(to) : this.removeClass(to) : bs(to) ? this.each(function (oo) {
				ws(this).toggleClass(to.call(this, oo, Kn(this), no), no)
			}) : this.each(function () {
				var oo, ro, io, lo;
				if (ao)
					for (ro = 0, io = ws(this), lo = Jn(to); oo = lo[ro++];) io.hasClass(oo) ? io.removeClass(oo) : io.addClass(oo);
				else void 0 !== to && "boolean" != so || ((oo = Kn(this)) && Ws.set(this, "__className__", oo), this.setAttribute && this.setAttribute("class", oo || !1 === to ? "" : Ws.get(this, "__className__") || ""))
			})
		},
		hasClass: function (to) {
			var no, so, ao = 0;
			for (no = " " + to + " "; so = this[ao++];)
				if (1 === so.nodeType && -1 < (" " + Yn(Kn(so)) + " ").indexOf(no)) return !0;
			return !1
		}
	});
	var La = /\r/g;
	ws.fn.extend({
		val: function (to) {
			var no, so, ao, oo = this[0]; {
				if (arguments.length) return ao = bs(to), this.each(function (ro) {
					var io;
					1 === this.nodeType && (null == (io = ao ? to.call(this, ro, ws(this).val()) : to) ? io = "" : "number" == typeof io ? io += "" : Array.isArray(io) && (io = ws.map(io, function (lo) {
						return null == lo ? "" : lo + ""
					})), (no = ws.valHooks[this.type] || ws.valHooks[this.nodeName.toLowerCase()]) && "set" in no && void 0 !== no.set(this, io, "value") || (this.value = io))
				});
				if (oo) return (no = ws.valHooks[oo.type] || ws.valHooks[oo.nodeName.toLowerCase()]) && "get" in no && void 0 !== (so = no.get(oo, "value")) ? so : "string" == typeof (so = oo.value) ? so.replace(La, "") : null == so ? "" : so
			}
		}
	}), ws.extend({
		valHooks: {
			option: {
				get: function (to) {
					var no = ws.find.attr(to, "value");
					return null == no ? Yn(ws.text(to)) : no
				}
			},
			select: {
				get: function (to) {
					var no, so, ao, oo = to.options,
						ro = to.selectedIndex,
						io = "select-one" === to.type,
						lo = io ? null : [],
						po = io ? ro + 1 : oo.length;
					for (ao = 0 > ro ? po : io ? ro : 0; ao < po; ao++)
						if (((so = oo[ao]).selected || ao === ro) && !so.disabled && (!so.parentNode.disabled || !an(so.parentNode, "optgroup"))) {
							if (no = ws(so).val(), io) return no;
							lo.push(no)
						}
					return lo
				},
				set: function (to, no) {
					for (var so, ao, oo = to.options, ro = ws.makeArray(no), io = oo.length; io--;)((ao = oo[io]).selected = -1 < ws.inArray(ws.valHooks.option.get(ao), ro)) && (so = !0);
					return so || (to.selectedIndex = -1), ro
				}
			}
		}
	}), ws.each(["radio", "checkbox"], function () {
		ws.valHooks[this] = {
			set: function (to, no) {
				if (Array.isArray(no)) return to.checked = -1 < ws.inArray(ws(to).val(), no)
			}
		}, ys.checkOn || (ws.valHooks[this].get = function (to) {
			return null === to.getAttribute("value") ? "on" : to.value
		})
	}), ys.focusin = "onfocusin" in Zt;
	var Da = /^(?:focusinfocus|focusoutblur)$/,
		Na = function (to) {
			to.stopPropagation()
		};
	ws.extend(ws.event, {
		trigger: function (to, no, so, ao) {
			var oo, ro, io, lo, po, co, uo, ho, fo = [so || rs],
				go = fs.call(to, "type") ? to.type : to,
				mo = fs.call(to, "namespace") ? to.namespace.split(".") : [];
			if (ro = ho = io = so = so || rs, 3 !== so.nodeType && 8 !== so.nodeType && !Da.test(go + ws.event.triggered) && (-1 < go.indexOf(".") && (go = (mo = go.split(".")).shift(), mo.sort()), po = 0 > go.indexOf(":") && "on" + go, to = to[ws.expando] ? to : new ws.Event(go, "object" == typeof to && to), to.isTrigger = ao ? 2 : 3, to.namespace = mo.join("."), to.rnamespace = to.namespace ? new RegExp("(^|\\.)" + mo.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, to.result = void 0, to.target || (to.target = so), no = null == no ? [to] : ws.makeArray(no, [to]), uo = ws.event.special[go] || {}, ao || !uo.trigger || !1 !== uo.trigger.apply(so, no))) {
				if (!ao && !uo.noBubble && !xs(so)) {
					for (lo = uo.delegateType || go, Da.test(lo + go) || (ro = ro.parentNode); ro; ro = ro.parentNode) fo.push(ro), io = ro;
					io === (so.ownerDocument || rs) && fo.push(io.defaultView || io.parentWindow || Zt)
				}
				for (oo = 0;
					(ro = fo[oo++]) && !to.isPropagationStopped();) ho = ro, to.type = 1 < oo ? lo : uo.bindType || go, (co = (Ws.get(ro, "events") || {})[to.type] && Ws.get(ro, "handle")) && co.apply(ro, no), (co = po && ro[po]) && co.apply && Is(ro) && (to.result = co.apply(ro, no), !1 === to.result && to.preventDefault());
				return to.type = go, ao || to.isDefaultPrevented() || uo._default && !1 !== uo._default.apply(fo.pop(), no) || !Is(so) || po && bs(so[go]) && !xs(so) && ((io = so[po]) && (so[po] = null), ws.event.triggered = go, to.isPropagationStopped() && ho.addEventListener(go, Na), so[go](), to.isPropagationStopped() && ho.removeEventListener(go, Na), ws.event.triggered = void 0, io && (so[po] = io)), to.result
			}
		},
		simulate: function (to, no, so) {
			var ao = ws.extend(new ws.Event, so, {
				type: to,
				isSimulated: !0
			});
			ws.event.trigger(ao, null, no)
		}
	}), ws.fn.extend({
		trigger: function (to, no) {
			return this.each(function () {
				ws.event.trigger(to, no, this)
			})
		},
		triggerHandler: function (to, no) {
			var so = this[0];
			if (so) return ws.event.trigger(to, no, so, !0)
		}
	}), ys.focusin || ws.each({
		focus: "focusin",
		blur: "focusout"
	}, function (to, no) {
		var so = function (ao) {
			ws.event.simulate(no, ao.target, ws.event.fix(ao))
		};
		ws.event.special[no] = {
			setup: function () {
				var ao = this.ownerDocument || this,
					oo = Ws.access(ao, no);
				oo || ao.addEventListener(to, so, !0), Ws.access(ao, no, (oo || 0) + 1)
			},
			teardown: function () {
				var ao = this.ownerDocument || this,
					oo = Ws.access(ao, no) - 1;
				oo ? Ws.access(ao, no, oo) : (ao.removeEventListener(to, so, !0), Ws.remove(ao, no))
			}
		}
	});
	var ja = Zt.location,
		qa = Date.now(),
		Ha = /\?/;
	ws.parseXML = function (to) {
		var no;
		if (!to || "string" != typeof to) return null;
		try {
			no = new Zt.DOMParser().parseFromString(to, "text/xml")
		} catch (so) {
			no = void 0
		}
		return no && !no.getElementsByTagName("parsererror").length || ws.error("Invalid XML: " + to), no
	};
	var Pa = /\[\]$/,
		Oa = /\r?\n/g,
		Ma = /^(?:submit|button|image|reset|file)$/i,
		_a = /^(?:input|select|textarea|keygen)/i;
	ws.param = function (to, no) {
		var so, ao = [],
			oo = function (ro, io) {
				var lo = bs(io) ? io() : io;
				ao[ao.length] = encodeURIComponent(ro) + "=" + encodeURIComponent(null == lo ? "" : lo)
			};
		if (Array.isArray(to) || to.jquery && !ws.isPlainObject(to)) ws.each(to, function () {
			oo(this.name, this.value)
		});
		else
			for (so in to) Zn(so, to[so], no, oo);
		return ao.join("&")
	}, ws.fn.extend({
		serialize: function () {
			return ws.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var to = ws.prop(this, "elements");
				return to ? ws.makeArray(to) : this
			}).filter(function () {
				var to = this.type;
				return this.name && !ws(this).is(":disabled") && _a.test(this.nodeName) && !Ma.test(to) && (this.checked || !Ys.test(to))
			}).map(function (to, no) {
				var so = ws(this).val();
				return null == so ? null : Array.isArray(so) ? ws.map(so, function (ao) {
					return {
						name: no.name,
						value: ao.replace(Oa, "\r\n")
					}
				}) : {
					name: no.name,
					value: so.replace(Oa, "\r\n")
				}
			}).get()
		}
	});
	var Ba = /%20/g,
		Ia = /#.*$/,
		Wa = /([?&])_=[^&]*/,
		Ra = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		za = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Ua = /^(?:GET|HEAD)$/,
		Fa = /^\/\//,
		$a = {},
		Xa = {},
		Ga = "*/".concat("*"),
		Qa = rs.createElement("a");
	Qa.href = ja.href, ws.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: ja.href,
			type: "GET",
			isLocal: za.test(ja.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Ga,
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
				"text xml": ws.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (to, no) {
			return no ? ns(ns(to, ws.ajaxSettings), no) : ns(ws.ajaxSettings, to)
		},
		ajaxPrefilter: es($a),
		ajaxTransport: es(Xa),
		ajax: function (to, no) {
			function so(So, Eo, ko, Lo) {
				var Do, No, jo, qo, Ho, Po = Eo;
				co || (co = !0, lo && Zt.clearTimeout(lo), ao = void 0, ro = Lo || "", Co.readyState = 0 < So ? 4 : 0, Do = 200 <= So && 300 > So || 304 === So, ko && (qo = ss(go, Co, ko)), qo = as(go, qo, Co, Do), Do ? (go.ifModified && ((Ho = Co.getResponseHeader("Last-Modified")) && (ws.lastModified[oo] = Ho), (Ho = Co.getResponseHeader("etag")) && (ws.etag[oo] = Ho)), 204 === So || "HEAD" === go.type ? Po = "nocontent" : 304 === So ? Po = "notmodified" : (Po = qo.state, No = qo.data, Do = !(jo = qo.error))) : (jo = Po, !So && Po || (Po = "error", 0 > So && (So = 0))), Co.status = So, Co.statusText = (Eo || Po) + "", Do ? bo.resolveWith(mo, [No, Po, Co]) : bo.rejectWith(mo, [Co, Po, jo]), Co.statusCode(vo), vo = void 0, uo && yo.trigger(Do ? "ajaxSuccess" : "ajaxError", [Co, go, Do ? No : jo]), xo.fireWith(mo, [Co, Po]), uo && (yo.trigger("ajaxComplete", [Co, go]), --ws.active || ws.event.trigger("ajaxStop")))
			}
			"object" == typeof to && (no = to, to = void 0), no = no || {};
			var ao, oo, ro, io, lo, po, co, uo, ho, fo, go = ws.ajaxSetup({}, no),
				mo = go.context || go,
				yo = go.context && (mo.nodeType || mo.jquery) ? ws(mo) : ws.event,
				bo = ws.Deferred(),
				xo = ws.Callbacks("once memory"),
				vo = go.statusCode || {},
				Ao = {},
				wo = {},
				To = "canceled",
				Co = {
					readyState: 0,
					getResponseHeader: function (So) {
						var Eo;
						if (co) {
							if (!io)
								for (io = {}; Eo = Ra.exec(ro);) io[Eo[1].toLowerCase()] = Eo[2];
							Eo = io[So.toLowerCase()]
						}
						return null == Eo ? null : Eo
					},
					getAllResponseHeaders: function () {
						return co ? ro : null
					},
					setRequestHeader: function (So, Eo) {
						return null == co && (So = wo[So.toLowerCase()] = wo[So.toLowerCase()] || So, Ao[So] = Eo), this
					},
					overrideMimeType: function (So) {
						return null == co && (go.mimeType = So), this
					},
					statusCode: function (So) {
						if (So)
							if (co) Co.always(So[Co.status]);
							else
								for (var Eo in So) vo[Eo] = [vo[Eo], So[Eo]];
						return this
					},
					abort: function (So) {
						var Eo = So || To;
						return ao && ao.abort(Eo), so(0, Eo), this
					}
				};
			if (bo.promise(Co), go.url = ((to || go.url || ja.href) + "").replace(Fa, ja.protocol + "//"), go.type = no.method || no.type || go.method || go.type, go.dataTypes = (go.dataType || "*").toLowerCase().match(Hs) || [""], null == go.crossDomain) {
				po = rs.createElement("a");
				try {
					po.href = go.url, po.href = po.href, go.crossDomain = Qa.protocol + "//" + Qa.host != po.protocol + "//" + po.host
				} catch (So) {
					go.crossDomain = !0
				}
			}
			if (go.data && go.processData && "string" != typeof go.data && (go.data = ws.param(go.data, go.traditional)), ts($a, go, no, Co), co) return Co;
			for (ho in (uo = ws.event && go.global) && 0 == ws.active++ && ws.event.trigger("ajaxStart"), go.type = go.type.toUpperCase(), go.hasContent = !Ua.test(go.type), oo = go.url.replace(Ia, ""), go.hasContent ? go.data && go.processData && 0 === (go.contentType || "").indexOf("application/x-www-form-urlencoded") && (go.data = go.data.replace(Ba, "+")) : (fo = go.url.slice(oo.length), go.data && (go.processData || "string" == typeof go.data) && (oo += (Ha.test(oo) ? "&" : "?") + go.data, delete go.data), !1 === go.cache && (oo = oo.replace(Wa, "$1"), fo = (Ha.test(oo) ? "&" : "?") + "_=" + qa++ + fo), go.url = oo + fo), go.ifModified && (ws.lastModified[oo] && Co.setRequestHeader("If-Modified-Since", ws.lastModified[oo]), ws.etag[oo] && Co.setRequestHeader("If-None-Match", ws.etag[oo])), (go.data && go.hasContent && !1 !== go.contentType || no.contentType) && Co.setRequestHeader("Content-Type", go.contentType), Co.setRequestHeader("Accept", go.dataTypes[0] && go.accepts[go.dataTypes[0]] ? go.accepts[go.dataTypes[0]] + ("*" === go.dataTypes[0] ? "" : ", " + Ga + "; q=0.01") : go.accepts["*"]), go.headers) Co.setRequestHeader(ho, go.headers[ho]);
			if (go.beforeSend && (!1 === go.beforeSend.call(mo, Co, go) || co)) return Co.abort();
			if (To = "abort", xo.add(go.complete), Co.done(go.success), Co.fail(go.error), ao = ts(Xa, go, no, Co)) {
				if (Co.readyState = 1, uo && yo.trigger("ajaxSend", [Co, go]), co) return Co;
				go.async && 0 < go.timeout && (lo = Zt.setTimeout(function () {
					Co.abort("timeout")
				}, go.timeout));
				try {
					co = !1, ao.send(Ao, so)
				} catch (So) {
					if (co) throw So;
					so(-1, So)
				}
			} else so(-1, "No Transport");
			return Co
		},
		getJSON: function (to, no, so) {
			return ws.get(to, no, so, "json")
		},
		getScript: function (to, no) {
			return ws.get(to, void 0, no, "script")
		}
	}), ws.each(["get", "post"], function (to, no) {
		ws[no] = function (so, ao, oo, ro) {
			return bs(ao) && (ro = ro || oo, oo = ao, ao = void 0), ws.ajax(ws.extend({
				url: so,
				type: no,
				dataType: ro,
				data: ao,
				success: oo
			}, ws.isPlainObject(so) && so))
		}
	}), ws._evalUrl = function (to) {
		return ws.ajax({
			url: to,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			throws: !0
		})
	}, ws.fn.extend({
		wrapAll: function (to) {
			var no;
			return this[0] && (bs(to) && (to = to.call(this[0])), no = ws(to, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && no.insertBefore(this[0]), no.map(function () {
				for (var so = this; so.firstElementChild;) so = so.firstElementChild;
				return so
			}).append(this)), this
		},
		wrapInner: function (to) {
			return bs(to) ? this.each(function (no) {
				ws(this).wrapInner(to.call(this, no))
			}) : this.each(function () {
				var no = ws(this),
					so = no.contents();
				so.length ? so.wrapAll(to) : no.append(to)
			})
		},
		wrap: function (to) {
			var no = bs(to);
			return this.each(function (so) {
				ws(this).wrapAll(no ? to.call(this, so) : to)
			})
		},
		unwrap: function (to) {
			return this.parent(to).not("body").each(function () {
				ws(this).replaceWith(this.childNodes)
			}), this
		}
	}), ws.expr.pseudos.hidden = function (to) {
		return !ws.expr.pseudos.visible(to)
	}, ws.expr.pseudos.visible = function (to) {
		return !!(to.offsetWidth || to.offsetHeight || to.getClientRects().length)
	}, ws.ajaxSettings.xhr = function () {
		try {
			return new Zt.XMLHttpRequest
		} catch (to) {}
	};
	var Va = {
			0: 200,
			1223: 204
		},
		Ya = ws.ajaxSettings.xhr();
	ys.cors = !!Ya && "withCredentials" in Ya, ys.ajax = Ya = !!Ya, ws.ajaxTransport(function (to) {
		var no, so;
		if (ys.cors || Ya && !to.crossDomain) return {
			send: function (ao, oo) {
				var ro, io = to.xhr();
				if (io.open(to.type, to.url, to.async, to.username, to.password), to.xhrFields)
					for (ro in to.xhrFields) io[ro] = to.xhrFields[ro];
				for (ro in to.mimeType && io.overrideMimeType && io.overrideMimeType(to.mimeType), to.crossDomain || ao["X-Requested-With"] || (ao["X-Requested-With"] = "XMLHttpRequest"), ao) io.setRequestHeader(ro, ao[ro]);
				no = function (lo) {
					return function () {
						no && (no = so = io.onload = io.onerror = io.onabort = io.ontimeout = io.onreadystatechange = null, "abort" === lo ? io.abort() : "error" === lo ? "number" == typeof io.status ? oo(io.status, io.statusText) : oo(0, "error") : oo(Va[io.status] || io.status, io.statusText, "text" !== (io.responseType || "text") || "string" != typeof io.responseText ? {
							binary: io.response
						} : {
							text: io.responseText
						}, io.getAllResponseHeaders()))
					}
				}, io.onload = no(), so = io.onerror = io.ontimeout = no("error"), void 0 === io.onabort ? io.onreadystatechange = function () {
					4 === io.readyState && Zt.setTimeout(function () {
						no && so()
					})
				} : io.onabort = so, no = no("abort");
				try {
					io.send(to.hasContent && to.data || null)
				} catch (lo) {
					if (no) throw lo
				}
			},
			abort: function () {
				no && no()
			}
		}
	}), ws.ajaxPrefilter(function (to) {
		to.crossDomain && (to.contents.script = !1)
	}), ws.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function (to) {
				return ws.globalEval(to), to
			}
		}
	}), ws.ajaxPrefilter("script", function (to) {
		void 0 === to.cache && (to.cache = !1), to.crossDomain && (to.type = "GET")
	}), ws.ajaxTransport("script", function (to) {
		if (to.crossDomain) {
			var no, so;
			return {
				send: function (ao, oo) {
					no = ws("<script>").prop({
						charset: to.scriptCharset,
						src: to.url
					}).on("load error", so = function (ro) {
						no.remove(), so = null, ro && oo("error" === ro.type ? 404 : 200, ro.type)
					}), rs.head.appendChild(no[0])
				},
				abort: function () {
					so && so()
				}
			}
		}
	});
	var Ka = [],
		Ja = /(=)\?(?=&|$)|\?\?/;
	ws.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var to = Ka.pop() || ws.expando + "_" + qa++;
			return this[to] = !0, to
		}
	}), ws.ajaxPrefilter("json jsonp", function (to, no, so) {
		var ao, oo, ro, io = !1 !== to.jsonp && (Ja.test(to.url) ? "url" : "string" == typeof to.data && 0 === (to.contentType || "").indexOf("application/x-www-form-urlencoded") && Ja.test(to.data) && "data");
		if (io || "jsonp" === to.dataTypes[0]) return ao = to.jsonpCallback = bs(to.jsonpCallback) ? to.jsonpCallback() : to.jsonpCallback, io ? to[io] = to[io].replace(Ja, "$1" + ao) : !1 !== to.jsonp && (to.url += (Ha.test(to.url) ? "&" : "?") + to.jsonp + "=" + ao), to.converters["script json"] = function () {
			return ro || ws.error(ao + " was not called"), ro[0]
		}, to.dataTypes[0] = "json", oo = Zt[ao], Zt[ao] = function () {
			ro = arguments
		}, so.always(function () {
			void 0 === oo ? ws(Zt).removeProp(ao) : Zt[ao] = oo, to[ao] && (to.jsonpCallback = no.jsonpCallback, Ka.push(ao)), ro && bs(oo) && oo(ro[0]), ro = oo = void 0
		}), "script"
	}), ys.createHTMLDocument = function () {
		var to = rs.implementation.createHTMLDocument("").body;
		return to.innerHTML = "<form></form><form></form>", 2 === to.childNodes.length
	}(), ws.parseHTML = function (to, no, so) {
		if ("string" != typeof to) return [];
		"boolean" == typeof no && (so = no, no = !1);
		var ao, oo, ro;
		return no || (ys.createHTMLDocument ? ((ao = (no = rs.implementation.createHTMLDocument("")).createElement("base")).href = rs.location.href, no.head.appendChild(ao)) : no = rs), oo = Ls.exec(to), ro = !so && [], oo ? [no.createElement(oo[1])] : (oo = Tn([to], no, ro), ro && ro.length && ws(ro).remove(), ws.merge([], oo.childNodes))
	}, ws.fn.load = function (to, no, so) {
		var ao, oo, ro, io = this,
			lo = to.indexOf(" ");
		return -1 < lo && (ao = Yn(to.slice(lo)), to = to.slice(0, lo)), bs(no) ? (so = no, no = void 0) : no && "object" == typeof no && (oo = "POST"), 0 < io.length && ws.ajax({
			url: to,
			type: oo || "GET",
			dataType: "html",
			data: no
		}).done(function (po) {
			ro = arguments, io.html(ao ? ws("<div>").append(ws.parseHTML(po)).find(ao) : po)
		}).always(so && function (po, co) {
			io.each(function () {
				so.apply(this, ro || [po.responseText, co, po])
			})
		}), this
	}, ws.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (to, no) {
		ws.fn[no] = function (so) {
			return this.on(no, so)
		}
	}), ws.expr.pseudos.animated = function (to) {
		return ws.grep(ws.timers, function (no) {
			return to === no.elem
		}).length
	}, ws.offset = {
		setOffset: function (to, no, so) {
			var ao, oo, ro, io, lo, po, co, uo = ws.css(to, "position"),
				ho = ws(to),
				fo = {};
			"static" === uo && (to.style.position = "relative"), lo = ho.offset(), ro = ws.css(to, "top"), po = ws.css(to, "left"), (co = ("absolute" === uo || "fixed" === uo) && -1 < (ro + po).indexOf("auto")) ? (io = (ao = ho.position()).top, oo = ao.left) : (io = parseFloat(ro) || 0, oo = parseFloat(po) || 0), bs(no) && (no = no.call(to, so, ws.extend({}, lo))), null != no.top && (fo.top = no.top - lo.top + io), null != no.left && (fo.left = no.left - lo.left + oo), "using" in no ? no.using.call(to, fo) : ho.css(fo)
		}
	}, ws.fn.extend({
		offset: function (to) {
			if (arguments.length) return void 0 === to ? this : this.each(function (oo) {
				ws.offset.setOffset(this, to, oo)
			});
			var no, so, ao = this[0];
			if (ao) return ao.getClientRects().length ? (no = ao.getBoundingClientRect(), so = ao.ownerDocument.defaultView, {
				top: no.top + so.pageYOffset,
				left: no.left + so.pageXOffset
			}) : {
				top: 0,
				left: 0
			}
		},
		position: function () {
			if (this[0]) {
				var to, no, so, ao = this[0],
					oo = {
						top: 0,
						left: 0
					};
				if ("fixed" === ws.css(ao, "position")) no = ao.getBoundingClientRect();
				else {
					for (no = this.offset(), so = ao.ownerDocument, to = ao.offsetParent || so.documentElement; to && (to === so.body || to === so.documentElement) && "static" === ws.css(to, "position");) to = to.parentNode;
					to && to !== ao && 1 === to.nodeType && ((oo = ws(to).offset()).top += ws.css(to, "borderTopWidth", !0), oo.left += ws.css(to, "borderLeftWidth", !0))
				}
				return {
					top: no.top - oo.top - ws.css(ao, "marginTop", !0),
					left: no.left - oo.left - ws.css(ao, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				for (var to = this.offsetParent; to && "static" === ws.css(to, "position");) to = to.offsetParent;
				return to || ta
			})
		}
	}), ws.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (to, no) {
		var so = "pageYOffset" === no;
		ws.fn[to] = function (ao) {
			return Ms(this, function (oo, ro, io) {
				var lo;
				return (xs(oo) ? lo = oo : 9 === oo.nodeType && (lo = oo.defaultView), void 0 === io) ? lo ? lo[no] : oo[ro] : void(lo ? lo.scrollTo(so ? lo.pageXOffset : io, so ? io : lo.pageYOffset) : oo[ro] = io)
			}, to, ao, arguments.length)
		}
	}), ws.each(["top", "left"], function (to, no) {
		ws.cssHooks[no] = Mn(ys.pixelPosition, function (so, ao) {
			if (ao) return ao = On(so, no), pa.test(ao) ? ws(so).position()[no] + "px" : ao
		})
	}), ws.each({
		Height: "height",
		Width: "width"
	}, function (to, no) {
		ws.each({
			padding: "inner" + to,
			content: no,
			"": "outer" + to
		}, function (so, ao) {
			ws.fn[ao] = function (oo, ro) {
				var io = arguments.length && (so || "boolean" != typeof oo),
					lo = so || (!0 === oo || !0 === ro ? "margin" : "border");
				return Ms(this, function (po, co, uo) {
					var ho;
					return xs(po) ? 0 === ao.indexOf("outer") ? po["inner" + to] : po.document.documentElement["client" + to] : 9 === po.nodeType ? (ho = po.documentElement, Math.max(po.body["scroll" + to], ho["scroll" + to], po.body["offset" + to], ho["offset" + to], ho["client" + to])) : void 0 === uo ? ws.css(po, co, lo) : ws.style(po, co, uo, lo)
				}, no, io ? oo : void 0, io)
			}
		})
	}), ws.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (to, no) {
		ws.fn[no] = function (so, ao) {
			return 0 < arguments.length ? this.on(no, null, so, ao) : this.trigger(no)
		}
	}), ws.fn.extend({
		hover: function (to, no) {
			return this.mouseenter(to).mouseleave(no || to)
		}
	}), ws.fn.extend({
		bind: function (to, no, so) {
			return this.on(to, null, no, so)
		},
		unbind: function (to, no) {
			return this.off(to, null, no)
		},
		delegate: function (to, no, so, ao) {
			return this.on(no, to, so, ao)
		},
		undelegate: function (to, no, so) {
			return 1 === arguments.length ? this.off(to, "**") : this.off(no, to || "**", so)
		}
	}), ws.proxy = function (to, no) {
		var so, ao, oo;
		if ("string" == typeof no && (so = to[no], no = to, to = so), bs(to)) return ao = ls.call(arguments, 2), oo = function () {
			return to.apply(no || this, ao.concat(ls.call(arguments)))
		}, oo.guid = to.guid = to.guid || ws.guid++, oo
	}, ws.holdReady = function (to) {
		to ? ws.readyWait++ : ws.ready(!0)
	}, ws.isArray = Array.isArray, ws.parseJSON = JSON.parse, ws.nodeName = an, ws.isFunction = bs, ws.isWindow = xs, ws.camelCase = fn, ws.type = nn, ws.now = Date.now, ws.isNumeric = function (to) {
		var no = ws.type(to);
		return ("number" === no || "string" === no) && !isNaN(to - parseFloat(to))
	}, "function" == typeof define && define.amd && define("jquery", [], function () {
		return ws
	});
	var Za = Zt.jQuery,
		eo = Zt.$;
	return ws.noConflict = function (to) {
		return Zt.$ === ws && (Zt.$ = eo), to && Zt.jQuery === ws && (Zt.jQuery = Za), ws
	}, en || (Zt.jQuery = Zt.$ = ws), ws
});
var caption = document.querySelectorAll(".mywork__container-img"),
	discription = document.querySelectorAll(".mywork__description"),
	menuNav = document.querySelector(".header__links"),
	link = document.querySelectorAll(".main-nav__link");
if (discription)
	for (var i = 0; i < discription.length; i++) discription[i].classList.add("mywork__description--close");
for (var i = 0; i < caption.length; i++) caption[i].addEventListener("click", function () {
	this.nextElementSibling.classList.toggle("mywork__description--close")
});
const menuOne = document.querySelector(".header__menu");

function addClassFunOne() {
	this.classList.toggle("clickheader__menu")
}
menuOne.addEventListener("click", addClassFunOne), menuOne.addEventListener("click", function () {
	menuNav.classList.contains("header__links--close") ? menuNav.classList.remove("header__links--close") : menuNav.classList.add("header__links--close")
}), $(document).ready(function () {
	$("#menu").on("click", "a", function (Zt) {
		Zt.preventDefault();
		var en = $(this).attr("href"),
			tn = $(en).offset().top;
		$("body,html").animate({
			scrollTop: tn
		}, 500)
	})
}), $(document).ready(function () {
	$(".back-top").on("click", "a", function (Zt) {
		Zt.preventDefault();
		var en = $(this).attr("href"),
			tn = $(en).offset().top;
		$("body,html").animate({
			scrollTop: tn
		}, 500)
	})
}), jQuery(function (Zt) {
	var en = Zt(".back-top");
	Zt(window).scroll(function () {
		en["fade" + (200 < Zt(this).scrollTop() ? "In" : "Out")](500)
	})
});
var buttonModal = document.querySelector(".contacts__button"),
	Modalfon = document.querySelector(".modal__fone"),
	form = document.querySelector(".modal__form"),
	formclose = document.querySelector(".modal__button--close");
buttonModal.addEventListener("click", function () {
	Modalfon.classList.remove("modal__fone--close"), form.classList.remove("modal__form--close")
});

function close() {
	console.log("\u043A\u043B\u0438\u043A"), Modalfon.classList.add("modal__fone--close"), form.classList.add("modal__form--close")
}
formclose.addEventListener("click", function () {
		close()
	}), Modalfon.addEventListener("click", function () {
		close()
	}), window.addEventListener("keydown", function (Zt) {
		27 === Zt.keyCode && close()
	}), ! function (Zt) {
		var en = navigator.userAgent;
		Zt.HTMLPictureElement && /ecko/.test(en) && en.match(/rv\:(\d+)/) && 45 > RegExp.$1 && addEventListener("resize", function () {
			var tn, nn = document.createElement("source"),
				sn = function (dn) {
					var pn, cn, un = dn.parentNode;
					"PICTURE" === un.nodeName.toUpperCase() ? (pn = nn.cloneNode(), un.insertBefore(pn, un.firstElementChild), setTimeout(function () {
						un.removeChild(pn)
					})) : (!dn._pfLastSize || dn.offsetWidth > dn._pfLastSize) && (dn._pfLastSize = dn.offsetWidth, cn = dn.sizes, dn.sizes += ",100vw", setTimeout(function () {
						dn.sizes = cn
					}))
				},
				an = function () {
					var dn, pn = document.querySelectorAll("picture > img, img[srcset][sizes]");
					for (dn = 0; dn < pn.length; dn++) sn(pn[dn])
				},
				on = function () {
					clearTimeout(tn), tn = setTimeout(an, 99)
				},
				rn = Zt.matchMedia && matchMedia("(orientation: landscape)"),
				ln = function () {
					on(), rn && rn.addListener && rn.addListener(on)
				};
			return nn.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? ln() : document.addEventListener("DOMContentLoaded", ln), on
		}())
	}(window),
	function (Zt, en, tn) {
		"use strict";

		function nn(ns) {
			return " " === ns || "\t" === ns || "\n" === ns || "\f" === ns || "\r" === ns
		}

		function an() {
			Bn = !1, Rn = Zt.devicePixelRatio, In = {}, Wn = {}, bn.DPR = Rn || 1, zn.width = Math.max(Zt.innerWidth || 0, Sn.clientWidth), zn.height = Math.max(Zt.innerHeight || 0, Sn.clientHeight), zn.vw = zn.width / 100, zn.vh = zn.height / 100, yn = [zn.height, zn.width, Rn].join("-"), zn.em = bn.getEmValue(), zn.rem = zn.em
		}

		function on(ns, ss, as, os) {
			var rs, is, ls, ds;
			return "saveData" === kn.algorithm ? 2.7 < ns ? ds = as + 1 : (is = ss - as, rs = Math.pow(ns - .6, 1.5), ls = is * rs, os && (ls += .1 * rs), ds = ns + ls) : ds = 1 < as ? Math.sqrt(ns * ss) : ns, ds > as
		}

		function rn(ns) {
			var ss, as = bn.getSet(ns),
				os = !1;
			"pending" !== as && (os = yn, as && (ss = bn.setRes(as), bn.applySetCandidate(ss, ns))), ns[bn.ns].evaled = os
		}

		function ln(ns, ss) {
			return ns.res - ss.res
		}

		function dn(ns, ss, as) {
			var os;
			return !as && ss && (as = ns[bn.ns].sets, as = as && as[as.length - 1]), os = pn(ss, as), os && (ss = bn.makeUrl(ss), ns[bn.ns].curSrc = ss, ns[bn.ns].curCan = os, os.res || es(os, os.set.sizes)), os
		}

		function pn(ns, ss) {
			var as, os, rs;
			if (ns && ss)
				for (rs = bn.parseSet(ss), ns = bn.makeUrl(ns), as = 0; as < rs.length; as++)
					if (ns === bn.makeUrl(rs[as].url)) {
						os = rs[as];
						break
					}
			return os
		}

		function cn(ns, ss) {
			var as, os, rs, is, ls = ns.getElementsByTagName("source");
			for (as = 0, os = ls.length; os > as; as++) rs = ls[as], rs[bn.ns] = !0, is = rs.getAttribute("srcset"), is && ss.push({
				srcset: is,
				media: rs.getAttribute("media"),
				type: rs.getAttribute("type"),
				sizes: rs.getAttribute("sizes")
			})
		}

		function un(ns, ss) {
			function as(gs) {
				var ms, ys = gs.exec(ns.substring(hs));
				return ys ? (ms = ys[0], hs += ms.length, ms) : void 0
			}

			function os() {
				var gs, ms, ys, bs, xs, vs, As, ws, Ts, Cs = !1,
					Ss = {};
				for (bs = 0; bs < ls.length; bs++) xs = ls[bs], vs = xs[xs.length - 1], As = xs.substring(0, xs.length - 1), ws = parseInt(As, 10), Ts = parseFloat(As), Vn.test(As) && "w" === vs ? ((gs || ms) && (Cs = !0), 0 === ws ? Cs = !0 : gs = ws) : Yn.test(As) && "x" === vs ? ((gs || ms || ys) && (Cs = !0), 0 > Ts ? Cs = !0 : ms = Ts) : Vn.test(As) && "h" === vs ? ((ys || ms) && (Cs = !0), 0 === ws ? Cs = !0 : ys = ws) : Cs = !0;
				Cs || (Ss.url = is, gs && (Ss.w = gs), ms && (Ss.d = ms), ys && (Ss.h = ys), ys || ms || gs || (Ss.d = 1), 1 === Ss.d && (ss.has1x = !0), Ss.set = ss, fs.push(Ss))
			}

			function rs() {
				for (as($n), ds = "", ps = "in descriptor";;) {
					if (cs = ns.charAt(hs), "in descriptor" == ps) {
						if (nn(cs)) ds && (ls.push(ds), ds = "", ps = "after descriptor");
						else {
							if ("," === cs) return hs += 1, ds && ls.push(ds), void os();
							if ("(" === cs) ds += cs, ps = "in parens";
							else {
								if ("" === cs) return ds && ls.push(ds), void os();
								ds += cs
							}
						}
					} else if ("in parens" == ps) {
						if (")" === cs) ds += cs, ps = "in descriptor";
						else {
							if ("" === cs) return ls.push(ds), void os();
							ds += cs
						}
					} else if ("after descriptor" == ps)
						if (nn(cs));
						else {
							if ("" === cs) return void os();
							ps = "in descriptor", hs -= 1
						}
					hs += 1
				}
			}
			for (var is, ls, ds, ps, cs, us = ns.length, hs = 0, fs = [];;) {
				if (as(Xn), hs >= us) return fs;
				is = as(Gn), ls = [], "," === is.slice(-1) ? (is = is.replace(Qn, ""), os()) : rs()
			}
		}

		function hn(ns) {
			function ss(hs) {
				function fs() {
					ys && (bs.push(ys), ys = "")
				}

				function gs() {
					bs[0] && (xs.push(bs), bs = [])
				}
				for (var ms, ys = "", bs = [], xs = [], vs = 0, As = 0, ws = !1;;) {
					if (ms = hs.charAt(As), "" === ms) return fs(), gs(), xs;
					if (ws) {
						if ("*" === ms && "/" === hs[As + 1]) {
							ws = !1, As += 2, fs();
							continue
						}
						As += 1
					} else {
						if (nn(ms)) {
							if (hs.charAt(As - 1) && nn(hs.charAt(As - 1)) || !ys) {
								As += 1;
								continue
							}
							if (0 == vs) {
								fs(), As += 1;
								continue
							}
							ms = " "
						} else if ("(" === ms) vs += 1;
						else if (")" === ms) vs -= 1;
						else {
							if ("," === ms) {
								fs(), gs(), As += 1;
								continue
							}
							if ("/" === ms && "*" === hs.charAt(As + 1)) {
								ws = !0, As += 2;
								continue
							}
						}
						ys += ms, As += 1
					}
				}
			}

			function as(hs) {
				return cs.test(hs) && 0 <= parseFloat(hs) || !!us.test(hs) || "0" === hs || "-0" === hs || "+0" === hs
			}
			var os, rs, is, ls, ds, ps, cs = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
				us = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
			for (rs = ss(ns), is = rs.length, os = 0; is > os; os++)
				if (ls = rs[os], ds = ls[ls.length - 1], as(ds)) {
					if (ps = ds, ls.pop(), 0 === ls.length) return ps;
					if (ls = ls.join(" "), bn.matchesMedia(ls)) return ps
				}
			return "100vw"
		}
		en.createElement("picture");
		var fn, gn, mn, yn, bn = {},
			xn = !1,
			vn = function () {},
			An = en.createElement("img"),
			wn = An.getAttribute,
			Tn = An.setAttribute,
			Cn = An.removeAttribute,
			Sn = en.documentElement,
			En = {},
			kn = {
				algorithm: ""
			},
			Ln = "data-pfsrc",
			Dn = Ln + "set",
			Nn = navigator.userAgent,
			jn = /rident/.test(Nn) || /ecko/.test(Nn) && Nn.match(/rv\:(\d+)/) && 35 < RegExp.$1,
			qn = "currentSrc",
			Hn = /\s+\+?\d+(e\d+)?w/,
			Pn = /(\([^)]+\))?\s*(.+)/,
			On = Zt.picturefillCFG,
			_n = "font-size:100%!important;",
			Bn = !0,
			In = {},
			Wn = {},
			Rn = Zt.devicePixelRatio,
			zn = {
				px: 1,
				"in": 96
			},
			Un = en.createElement("a"),
			Fn = !1,
			$n = /^[ \t\n\r\u000c]+/,
			Xn = /^[, \t\n\r\u000c]+/,
			Gn = /^[^ \t\n\r\u000c]+/,
			Qn = /[,]+$/,
			Vn = /^\d+$/,
			Yn = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
			Kn = function (ns, ss, as, os) {
				ns.addEventListener ? ns.addEventListener(ss, as, os || !1) : ns.attachEvent && ns.attachEvent("on" + ss, as)
			},
			Jn = function (ns) {
				var ss = {};
				return function (as) {
					return as in ss || (ss[as] = ns(as)), ss[as]
				}
			},
			Zn = function () {
				var ns = /^([\d\.]+)(em|vw|px)$/,
					ss = function () {
						for (var os = arguments, rs = 0, is = os[0]; ++rs in os;) is = is.replace(os[rs], os[++rs]);
						return is
					},
					as = Jn(function (os) {
						return "return " + ss((os || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
					});
				return function (os, rs) {
					var is;
					if (!(os in In))
						if (In[os] = !1, rs && (is = os.match(ns))) In[os] = is[1] * zn[is[2]];
						else try {
							In[os] = new Function("e", as(os))(zn)
						} catch (ls) {}
					return In[os]
				}
			}(),
			es = function (ns, ss) {
				return ns.w ? (ns.cWidth = bn.calcListLength(ss || "100vw"), ns.res = ns.w / ns.cWidth) : ns.res = ns.d, ns
			},
			ts = function (ns) {
				if (xn) {
					var ss, as, os, rs = ns || {};
					if (rs.elements && 1 === rs.elements.nodeType && ("IMG" === rs.elements.nodeName.toUpperCase() ? rs.elements = [rs.elements] : (rs.context = rs.elements, rs.elements = null)), ss = rs.elements || bn.qsa(rs.context || en, rs.reevaluate || rs.reselect ? bn.sel : bn.selShort), os = ss.length) {
						for (bn.setupRun(rs), Fn = !0, as = 0; os > as; as++) bn.fillImg(ss[as], rs);
						bn.teardownRun(rs)
					}
				}
			};
		for (fn = Zt.console && console.warn ? function (ns) {
				console.warn(ns)
			} : vn, (qn in An) || (qn = "src"), En["image/jpeg"] = !0, En["image/gif"] = !0, En["image/png"] = !0, En["image/svg+xml"] = en.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), bn.ns = ("pf" + new Date().getTime()).substr(0, 9), bn.supSrcset = ("srcset" in An), bn.supSizes = ("sizes" in An), bn.supPicture = !!Zt.HTMLPictureElement, !bn.supSrcset || !bn.supPicture || bn.supSizes || function (ns) {
				An.srcset = "data:,a", ns.src = "data:,a", bn.supSrcset = An.complete === ns.complete, bn.supPicture = bn.supSrcset && bn.supPicture
			}(en.createElement("img")), bn.supSrcset && !bn.supSizes ? ! function () {
				var ss = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
					as = en.createElement("img"),
					os = function () {
						var rs = as.width;
						2 === rs && (bn.supSizes = !0), mn = bn.supSrcset && !bn.supSizes, xn = !0, setTimeout(ts)
					};
				as.onload = os, as.onerror = os, as.setAttribute("sizes", "9px"), as.srcset = ss + " 1w," + "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==" + " 9w", as.src = ss
			}() : xn = !0, bn.selShort = "picture>img,img[srcset]", bn.sel = bn.selShort, bn.cfg = kn, bn.DPR = Rn || 1, bn.u = zn, bn.types = En, bn.setSize = vn, bn.makeUrl = Jn(function (ns) {
				return Un.href = ns, Un.href
			}), bn.qsa = function (ns, ss) {
				return ("querySelector" in ns) ? ns.querySelectorAll(ss) : []
			}, bn.matchesMedia = function () {
				return bn.matchesMedia = Zt.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? function (ns) {
					return !ns || matchMedia(ns).matches
				} : bn.mMQ, bn.matchesMedia.apply(this, arguments)
			}, bn.mMQ = function (ns) {
				return !ns || Zn(ns)
			}, bn.calcLength = function (ns) {
				var ss = Zn(ns, !0) || !1;
				return 0 > ss && (ss = !1), ss
			}, bn.supportsType = function (ns) {
				return !ns || En[ns]
			}, bn.parseSize = Jn(function (ns) {
				var ss = (ns || "").match(Pn);
				return {
					media: ss && ss[1],
					length: ss && ss[2]
				}
			}), bn.parseSet = function (ns) {
				return ns.cands || (ns.cands = un(ns.srcset, ns)), ns.cands
			}, bn.getEmValue = function () {
				var ns;
				if (!gn && (ns = en.body)) {
					var ss = en.createElement("div"),
						as = Sn.style.cssText,
						os = ns.style.cssText;
					ss.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", Sn.style.cssText = _n, ns.style.cssText = _n, ns.appendChild(ss), gn = ss.offsetWidth, ns.removeChild(ss), gn = parseFloat(gn, 10), Sn.style.cssText = as, ns.style.cssText = os
				}
				return gn || 16
			}, bn.calcListLength = function (ns) {
				if (!(ns in Wn) || kn.uT) {
					var ss = bn.calcLength(hn(ns));
					Wn[ns] = ss ? ss : zn.width
				}
				return Wn[ns]
			}, bn.setRes = function (ns) {
				var ss;
				if (ns) {
					ss = bn.parseSet(ns);
					for (var as = 0, os = ss.length; os > as; as++) es(ss[as], ns.sizes)
				}
				return ss
			}, bn.setRes.res = es, bn.applySetCandidate = function (ns, ss) {
				if (ns.length) {
					var as, os, rs, is, ls, ds, ps, cs, us, hs = ss[bn.ns],
						fs = bn.DPR;
					if (ds = hs.curSrc || ss[qn], ps = hs.curCan || dn(ss, ds, ns[0].set), ps && ps.set === ns[0].set && (us = jn && !ss.complete && ps.res - .1 > fs, us || (ps.cached = !0, ps.res >= fs && (ls = ps))), !ls)
						for (ns.sort(ln), is = ns.length, ls = ns[is - 1], os = 0; is > os; os++)
							if (as = ns[os], as.res >= fs) {
								rs = os - 1, ls = ns[rs] && (us || ds !== bn.makeUrl(as.url)) && on(ns[rs].res, as.res, fs, ns[rs].cached) ? ns[rs] : as;
								break
							}
					ls && (cs = bn.makeUrl(ls.url), hs.curSrc = cs, hs.curCan = ls, cs !== ds && bn.setSrc(ss, ls), bn.setSize(ss))
				}
			}, bn.setSrc = function (ns, ss) {
				var as;
				ns.src = ss.url, "image/svg+xml" === ss.set.type && (as = ns.style.width, ns.style.width = ns.offsetWidth + 1 + "px", ns.offsetWidth + 1 && (ns.style.width = as))
			}, bn.getSet = function (ns) {
				var ss, as, os, rs = !1,
					is = ns[bn.ns].sets;
				for (ss = 0; ss < is.length && !rs; ss++)
					if (as = is[ss], as.srcset && bn.matchesMedia(as.media) && (os = bn.supportsType(as.type))) {
						"pending" === os && (as = os), rs = as;
						break
					}
				return rs
			}, bn.parseSets = function (ns, ss, as) {
				var os, rs, is, ls, ds = ss && "PICTURE" === ss.nodeName.toUpperCase(),
					ps = ns[bn.ns];
				(ps.src === tn || as.src) && (ps.src = wn.call(ns, "src"), ps.src ? Tn.call(ns, Ln, ps.src) : Cn.call(ns, Ln)), (ps.srcset === tn || as.srcset || !bn.supSrcset || ns.srcset) && (os = wn.call(ns, "srcset"), ps.srcset = os, ls = !0), ps.sets = [], ds && (ps.pic = !0, cn(ss, ps.sets)), ps.srcset ? (rs = {
					srcset: ps.srcset,
					sizes: wn.call(ns, "sizes")
				}, ps.sets.push(rs), is = (mn || ps.src) && Hn.test(ps.srcset || ""), is || !ps.src || pn(ps.src, rs) || rs.has1x || (rs.srcset += ", " + ps.src, rs.cands.push({
					url: ps.src,
					d: 1,
					set: rs
				}))) : ps.src && ps.sets.push({
					srcset: ps.src,
					sizes: null
				}), ps.curCan = null, ps.curSrc = tn, ps.supported = !(ds || rs && !bn.supSrcset || is && !bn.supSizes), ls && bn.supSrcset && !ps.supported && (os ? (Tn.call(ns, Dn, os), ns.srcset = "") : Cn.call(ns, Dn)), ps.supported && !ps.srcset && (!ps.src && ns.src || ns.src !== bn.makeUrl(ps.src)) && (null === ps.src ? ns.removeAttribute("src") : ns.src = ps.src), ps.parsed = !0
			}, bn.fillImg = function (ns, ss) {
				var as, os = ss.reselect || ss.reevaluate;
				ns[bn.ns] || (ns[bn.ns] = {}), as = ns[bn.ns], (os || as.evaled !== yn) && ((!as.parsed || ss.reevaluate) && bn.parseSets(ns, ns.parentNode, ss), as.supported ? as.evaled = yn : rn(ns))
			}, bn.setupRun = function () {
				(!Fn || Bn || Rn !== Zt.devicePixelRatio) && an()
			}, bn.supPicture ? (ts = vn, bn.fillImg = vn) : ! function () {
				var ns, ss = Zt.attachEvent ? /d$|^c/ : /d$|^c|^i/,
					as = function () {
						var ds = en.readyState || "";
						os = setTimeout(as, "loading" === ds ? 200 : 999), en.body && (bn.fillImgs(), ns = ns || ss.test(ds), ns && clearTimeout(os))
					},
					os = setTimeout(as, en.body ? 9 : 99),
					is = Sn.clientHeight;
				Kn(Zt, "resize", function (ds, ps) {
					var cs, us, hs = function () {
						var fs = new Date - us;
						ps > fs ? cs = setTimeout(hs, ps - fs) : (cs = null, ds())
					};
					return function () {
						us = new Date, cs || (cs = setTimeout(hs, ps))
					}
				}(function () {
					Bn = Math.max(Zt.innerWidth || 0, Sn.clientWidth) !== zn.width || Sn.clientHeight !== is, is = Sn.clientHeight, Bn && bn.fillImgs()
				}, 99)), Kn(en, "readystatechange", as)
			}(), bn.picturefill = ts, bn.fillImgs = ts, bn.teardownRun = vn, ts._ = bn, Zt.picturefillCFG = {
				pf: bn,
				push: function (ns) {
					var ss = ns.shift();
					"function" == typeof bn[ss] ? bn[ss].apply(bn, ns) : (kn[ss] = ns[0], Fn && bn.fillImgs({
						reselect: !0
					}))
				}
			}; On && On.length;) Zt.picturefillCFG.push(On.shift());
		Zt.picturefill = ts, "object" == typeof module && "object" == typeof module.exports ? module.exports = ts : "function" == typeof define && define.amd && define("picturefill", function () {
			return ts
		}), bn.supPicture || (En["image/webp"] = function (ns, ss) {
			var as = new Zt.Image;
			return as.onerror = function () {
				En[ns] = !1, ts()
			}, as.onload = function () {
				En[ns] = 1 === as.width, ts()
			}, as.src = ss, "pending"
		}("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
	}(window, document),
	function () {
		"use strict";
		if ("undefined" != typeof window && window.addEventListener) {
			var Zt = Object.create(null),
				en, tn, nn = function () {
					clearTimeout(tn), tn = setTimeout(en, 100)
				},
				sn = function () {},
				an = function () {
					var dn;
					window.addEventListener("resize", nn, !1), window.addEventListener("orientationchange", nn, !1), window.MutationObserver ? (dn = new MutationObserver(nn), dn.observe(document.documentElement, {
						childList: !0,
						subtree: !0,
						attributes: !0
					}), sn = function () {
						try {
							dn.disconnect(), window.removeEventListener("resize", nn, !1), window.removeEventListener("orientationchange", nn, !1)
						} catch (pn) {}
					}) : (document.documentElement.addEventListener("DOMSubtreeModified", nn, !1), sn = function () {
						document.documentElement.removeEventListener("DOMSubtreeModified", nn, !1), window.removeEventListener("resize", nn, !1), window.removeEventListener("orientationchange", nn, !1)
					})
				},
				on = function (dn) {
					function pn(fn) {
						var gn;
						return void 0 === fn.protocol ? (gn = document.createElement("a"), gn.href = fn) : gn = fn, gn.protocol.replace(/:/g, "") + gn.host
					}
					var cn, un, hn;
					return window.XMLHttpRequest && (cn = new XMLHttpRequest, un = pn(location), hn = pn(dn), cn = void 0 === cn.withCredentials && "" !== hn && hn != un ? XDomainRequest || void 0 : XMLHttpRequest), cn
				},
				rn = "http://www.w3.org/1999/xlink";
			en = function () {
				function dn() {
					xn -= 1, 0 === xn && (sn(), an())
				}

				function pn(Sn) {
					return function () {
						!0 !== Zt[Sn.base] && (Sn.useEl.setAttributeNS(rn, "xlink:href", "#" + Sn.hash), Sn.useEl.hasAttribute("href") && Sn.useEl.setAttribute("href", "#" + Sn.hash))
					}
				}

				function cn(Sn) {
					return function () {
						var En = document.body,
							kn = document.createElement("x"),
							Ln;
						Sn.onload = null, kn.innerHTML = Sn.responseText, Ln = kn.getElementsByTagName("svg")[0], Ln && (Ln.setAttribute("aria-hidden", "true"), Ln.style.position = "absolute", Ln.style.width = 0, Ln.style.height = 0, Ln.style.overflow = "hidden", En.insertBefore(Ln, En.firstChild)), dn()
					}
				}

				function un(Sn) {
					return function () {
						Sn.onerror = null, Sn.ontimeout = null, dn()
					}
				}
				var hn, fn, mn, yn, bn, xn = 0,
					vn, An, wn, Tn, Cn;
				for (sn(), Tn = document.getElementsByTagName("use"), bn = 0; bn < Tn.length; bn += 1) {
					try {
						fn = Tn[bn].getBoundingClientRect()
					} catch (Sn) {
						fn = !1
					}
					yn = Tn[bn].getAttribute("href") || Tn[bn].getAttributeNS(rn, "href") || Tn[bn].getAttribute("xlink:href"), wn = yn && yn.split ? yn.split("#") : ["", ""], hn = wn[0], mn = wn[1], vn = fn && 0 === fn.left && 0 === fn.right && 0 === fn.top && 0 === fn.bottom, fn && 0 === fn.width && 0 === fn.height && !vn ? ("", Tn[bn].hasAttribute("href") && Tn[bn].setAttributeNS(rn, "xlink:href", yn), hn.length && (Cn = Zt[hn], !0 !== Cn && setTimeout(pn({
						useEl: Tn[bn],
						base: hn,
						hash: mn
					}), 0), Cn == void 0 && (An = on(hn), An != void 0 && (Cn = new An, Zt[hn] = Cn, Cn.onload = cn(Cn), Cn.onerror = un(Cn), Cn.ontimeout = un(Cn), Cn.open("GET", hn), Cn.send(), xn += 1)))) : vn ? hn.length && Zt[hn] && setTimeout(pn({
						useEl: Tn[bn],
						base: hn,
						hash: mn
					}), 0) : Zt[hn] === void 0 ? Zt[hn] = !0 : Zt[hn].onload && (Zt[hn].abort(), delete Zt[hn].onload, Zt[hn] = !0)
				}
				Tn = "", xn += 1, dn()
			};
			var ln;
			ln = function () {
				window.removeEventListener("load", ln, !1), tn = setTimeout(en, 0)
			}, "complete" === document.readyState ? ln() : window.addEventListener("load", ln, !1)
		}
	}();
