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

	function dn(to) {
		var no = {};
		return ws.each(to.match(Hs) || [], function (so, ao) {
			no[ao] = !0
		}), no
	}

	function ln(to) {
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

	function gn(to) {
		return to.replace(Bs, "ms-").replace(Is, hn)
	}

	function fn() {
		this.expando = ws.expando + fn.uid++
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
				_s.set(to, no, so)
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
		for (var so, ao, oo = [], ro = 0, io = to.length; ro < io; ro++)(ao = to[ro]).style && (so = ao.style.display, no ? ("none" === so && (oo[ro] = Rs.get(ao, "display") || null, oo[ro] || (ao.style.display = "")), "" === ao.style.display && Gs(ao) && (oo[ro] = xn(ao))) : "none" !== so && (oo[ro] = "none", Rs.set(ao, "display", so)));
		for (ro = 0; ro < io; ro++) null != oo[ro] && (to[ro].style.display = oo[ro]);
		return to
	}

	function An(to, no) {
		var so;
		return so = "undefined" == typeof to.getElementsByTagName ? "undefined" == typeof to.querySelectorAll ? [] : to.querySelectorAll(no || "*") : to.getElementsByTagName(no || "*"), void 0 === no || no && an(to, no) ? ws.merge([to], so) : so
	}

	function wn(to, no) {
		for (var so = 0, ao = to.length; so < ao; so++) Rs.set(to[so], "globalEval", !no || Rs.get(no[so], "globalEval"))
	}

	function Tn(to, no, so, ao, oo) {
		for (var ro, io, lo, po, co, uo, ho = no.createDocumentFragment(), go = [], fo = 0, mo = to.length; fo < mo; fo++)
			if ((ro = to[fo]) || 0 === ro)
				if ("object" === nn(ro)) ws.merge(go, ro.nodeType ? [ro] : ro);
				else if (ea.test(ro)) {
			for (io = io || ho.appendChild(no.createElement("div")), lo = (Ks.exec(ro) || ["", ""])[1].toLowerCase(), po = Zs[lo] || Zs._default, io.innerHTML = po[1] + ws.htmlPrefilter(ro) + po[2], uo = po[0]; uo--;) io = io.lastChild;
			ws.merge(go, io.childNodes), (io = ho.firstChild).textContent = ""
		} else go.push(no.createTextNode(ro));
		for (ho.textContent = "", fo = 0; ro = go[fo++];)
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

	function Dn(to, no) {
		return an(to, "table") && an(11 === no.nodeType ? no.firstChild : no, "tr") ? ws(to).children("tbody")[0] || to : to
	}

	function Nn(to) {
		return to.type = (null !== to.getAttribute("type")) + "/" + to.type, to
	}

	function Ln(to) {
		return "true/" === (to.type || "").slice(0, 5) ? to.type = to.type.slice(5) : to.removeAttribute("type"), to
	}

	function jn(to, no) {
		var so, ao, oo, ro, io, lo, po, co;
		if (1 === no.nodeType) {
			if (Rs.hasData(to) && (ro = Rs.access(to), io = Rs.set(no, ro), co = ro.events))
				for (oo in delete io.handle, io.events = {}, co)
					for (so = 0, ao = co[oo].length; so < ao; so++) ws.event.add(no, oo, co[oo][so]);
			_s.hasData(to) && (lo = _s.access(to), po = ws.extend({}, lo), _s.set(no, po))
		}
	}

	function qn(to, no) {
		var so = no.nodeName.toLowerCase();
		"input" === so && Ys.test(to.type) ? no.checked = to.checked : "input" !== so && "textarea" !== so || (no.defaultValue = to.defaultValue)
	}

	function Hn(to, no, so, ao) {
		no = ls.apply([], no);
		var oo, ro, io, lo, po, co, uo = 0,
			ho = to.length,
			fo = no[0],
			mo = bs(fo);
		if (mo || 1 < ho && "string" == typeof fo && !ys.checkClone && da.test(fo)) return to.each(function (yo) {
			var bo = to.eq(yo);
			mo && (no[0] = fo.call(this, yo, bo.html())), Hn(bo, no, so, ao)
		});
		if (ho && (oo = Tn(no, to[0].ownerDocument, !1, to, ao), ro = oo.firstChild, 1 === oo.childNodes.length && (oo = ro), ro || ao)) {
			for (lo = (io = ws.map(An(oo, "script"), Nn)).length; uo < ho; uo++) po = oo, uo != ho - 1 && (po = ws.clone(po, !0, !0), lo && ws.merge(io, An(po, "script"))), so.call(to[uo], po, uo);
			if (lo)
				for (co = io[io.length - 1].ownerDocument, ws.map(io, Ln), uo = 0; uo < lo; uo++) po = io[uo], Js.test(po.type || "") && !Rs.access(po, "globalEval") && ws.contains(co, po) && (po.src && "module" !== (po.type || "").toLowerCase() ? ws._evalUrl && ws._evalUrl(po.src) : tn(po.textContent.replace(la, ""), co, po))
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

	function Bn(to) {
		if (to in xa) return to;
		for (var no = to[0].toUpperCase() + to.slice(1), so = ya.length; so--;)
			if ((to = ya[so] + no) in xa) return to
	}

	function In(to) {
		var no = ws.cssProps[to];
		return no || (no = ws.cssProps[to] = Bn(to) || to), no
	}

	function Wn(to, no, so) {
		var ao = $s.exec(no);
		return ao ? Math.max(0, ao[2] - (so || 0)) + (ao[3] || "px") : no
	}

	function Rn(to, no, so, ao, oo, ro) {
		var io = "width" === no ? 1 : 0,
			lo = 0,
			po = 0;
		if (so === (ao ? "border" : "content")) return 0;
		for (; 4 > io; io += 2) "margin" === so && (po += ws.css(to, so + Xs[io], !0, oo)), ao ? ("content" === so && (po -= ws.css(to, "padding" + Xs[io], !0, oo)), "margin" !== so && (po -= ws.css(to, "border" + Xs[io] + "Width", !0, oo))) : (po += ws.css(to, "padding" + Xs[io], !0, oo), "padding" === so ? lo += ws.css(to, "border" + Xs[io] + "Width", !0, oo) : po += ws.css(to, "border" + Xs[io] + "Width", !0, oo));
		return !ao && 0 <= ro && (po += Math.max(0, Math.ceil(to["offset" + no[0].toUpperCase() + no.slice(1)] - ro - po - lo - .5))), po
	}

	function _n(to, no, so) {
		var ao = ca(to),
			oo = On(to, no, ao),
			ro = "border-box" === ws.css(to, "boxSizing", !1, ao),
			io = ro;
		if (pa.test(oo)) {
			if (!so) return oo;
			oo = "auto"
		}
		return io = io && (ys.boxSizingReliable() || oo === to.style[no]), ("auto" === oo || !parseFloat(oo) && "inline" === ws.css(to, "display", !1, ao)) && (oo = to["offset" + no[0].toUpperCase() + no.slice(1)], io = !0), (oo = parseFloat(oo) || 0) + Rn(to, no, so || (ro ? "border" : "content"), io, ao, oo) + "px"
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
			if (ao = gn(so), oo = no[ao], ro = to[so], Array.isArray(ro) && (oo = ro[1], ro = to[so] = ro[0]), so !== ao && (to[ao] = ro, delete to[so]), (io = ws.cssHooks[ao]) && "expand" in io)
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
				for (var ho = va || Fn(), go = Math.max(0, co.startTime + co.duration - ho), fo = 1 - (go / co.duration || 0), mo = 0, yo = co.tweens.length; mo < yo; mo++) co.tweens[mo].run(fo);
				return lo.notifyWith(to, [co, fo, go]), 1 > fo && yo ? go : (yo || lo.notifyWith(to, [co, 1, 0]), lo.resolveWith(to, [co]), !1)
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
				createTween: function (ho, go) {
					var fo = ws.Tween(to, co.opts, ho, go, co.opts.specialEasing[ho] || co.opts.easing);
					return co.tweens.push(fo), fo
				},
				stop: function (ho) {
					var go = 0,
						fo = ho ? co.tweens.length : 0;
					if (oo) return this;
					for (oo = !0; go < fo; go++) co.tweens[go].run(1);
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
		ds = os.slice,
		ls = os.concat,
		ps = os.push,
		cs = os.indexOf,
		us = {},
		hs = us.toString,
		gs = us.hasOwnProperty,
		fs = gs.toString,
		ms = fs.call(Object),
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
			return ds.call(this)
		},
		get: function (to) {
			return null == to ? ds.call(this) : 0 > to ? this[to + this.length] : this[to]
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
			return this.pushStack(ds.apply(this, arguments))
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
			return to && "[object Object]" === hs.call(to) && (!(no = is(to)) || "function" == typeof (so = gs.call(no, "constructor") && no.constructor) && fs.call(so) === ms)
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
			return ls.apply([], io)
		},
		guid: 1,
		support: ys
	}), "function" == typeof Symbol && (ws.fn[Symbol.iterator] = os[Symbol.iterator]), ws.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (to, no) {
		us["[object " + no + "]"] = no.toLowerCase()
	});
	var Cs = function (to) {
		function no(kr, Dr, Nr, Lr) {
			var jr, qr, Hr, Pr, Or, Mr, Br, Ir = Dr && Dr.ownerDocument,
				Wr = Dr ? Dr.nodeType : 9;
			if (Nr = Nr || [], "string" != typeof kr || !kr || 1 !== Wr && 9 !== Wr && 11 !== Wr) return Nr;
			if (!Lr && ((Dr ? Dr.ownerDocument || Dr : Uo) !== Oo && Po(Dr), Dr = Dr || Oo, Bo)) {
				if (11 !== Wr && (Or = xr.exec(kr)))
					if (!(jr = Or[1])) {
						if (Or[2]) return er.apply(Nr, Dr.getElementsByTagName(kr)), Nr;
						if ((jr = Or[3]) && Co.getElementsByClassName && Dr.getElementsByClassName) return er.apply(Nr, Dr.getElementsByClassName(jr)), Nr
					} else if (9 === Wr) {
					if (!(Hr = Dr.getElementById(jr))) return Nr;
					if (Hr.id === jr) return Nr.push(Hr), Nr
				} else if (Ir && (Hr = Ir.getElementById(jr)) && _o(Dr, Hr) && Hr.id === jr) return Nr.push(Hr), Nr;
				if (Co.qsa && !Qo[kr + " "] && (!Io || !Io.test(kr))) {
					if (1 !== Wr) Ir = Dr, Br = kr;
					else if ("object" !== Dr.nodeName.toLowerCase()) {
						for ((Pr = Dr.getAttribute("id")) ? Pr = Pr.replace(Tr, Cr) : Dr.setAttribute("id", Pr = zo), qr = (Mr = Do(kr)).length; qr--;) Mr[qr] = "#" + Pr + " " + fo(Mr[qr]);
						Br = Mr.join(","), Ir = vr.test(kr) && ho(Dr.parentNode) || Dr
					}
					if (Br) try {
						return er.apply(Nr, Ir.querySelectorAll(Br)), Nr
					} catch (Rr) {} finally {
						Pr === zo && Dr.removeAttribute("id")
					}
				}
			}
			return Lo(kr.replace(lr, "$1"), Dr, Nr, Lr)
		}

		function so() {
			function kr(Nr, Lr) {
				return Dr.push(Nr + " ") > So.cacheLength && delete kr[Dr.shift()], kr[Nr + " "] = Lr
			}
			var Dr = [];
			return kr
		}

		function ao(kr) {
			return kr[zo] = !0, kr
		}

		function oo(kr) {
			var Dr = Oo.createElement("fieldset");
			try {
				return !!kr(Dr)
			} catch (Nr) {
				return !1
			} finally {
				Dr.parentNode && Dr.parentNode.removeChild(Dr), Dr = null
			}
		}

		function ro(kr, Dr) {
			for (var Nr = kr.split("|"), Lr = Nr.length; Lr--;) So.attrHandle[Nr[Lr]] = Dr
		}

		function io(kr, Dr) {
			var Nr = Dr && kr,
				Lr = Nr && 1 === kr.nodeType && 1 === Dr.nodeType && kr.sourceIndex - Dr.sourceIndex;
			if (Lr) return Lr;
			if (Nr)
				for (; Nr = Nr.nextSibling;)
					if (Nr === Dr) return -1;
			return kr ? 1 : -1
		}

		function lo(kr) {
			return function (Dr) {
				return "input" === Dr.nodeName.toLowerCase() && Dr.type === kr
			}
		}

		function po(kr) {
			return function (Dr) {
				var Nr = Dr.nodeName.toLowerCase();
				return ("input" === Nr || "button" === Nr) && Dr.type === kr
			}
		}

		function co(kr) {
			return function (Dr) {
				return "form" in Dr ? Dr.parentNode && !1 === Dr.disabled ? "label" in Dr ? "label" in Dr.parentNode ? Dr.parentNode.disabled === kr : Dr.disabled === kr : Dr.isDisabled === kr || Dr.isDisabled !== !kr && Er(Dr) === kr : Dr.disabled === kr : "label" in Dr && Dr.disabled === kr
			}
		}

		function uo(kr) {
			return ao(function (Dr) {
				return Dr = +Dr, ao(function (Nr, Lr) {
					for (var jr, qr = kr([], Nr.length, Dr), Hr = qr.length; Hr--;) Nr[jr = qr[Hr]] && (Nr[jr] = !(Lr[jr] = Nr[jr]))
				})
			})
		}

		function ho(kr) {
			return kr && "undefined" != typeof kr.getElementsByTagName && kr
		}

		function go() {}

		function fo(kr) {
			for (var Dr = 0, Nr = kr.length, Lr = ""; Dr < Nr; Dr++) Lr += kr[Dr].value;
			return Lr
		}

		function mo(kr, Dr, Nr) {
			var Lr = Dr.dir,
				jr = Dr.next,
				qr = jr || Lr,
				Hr = Nr && "parentNode" === qr,
				Pr = $o++;
			return Dr.first ? function (Or, Mr, Br) {
				for (; Or = Or[Lr];)
					if (1 === Or.nodeType || Hr) return kr(Or, Mr, Br);
				return !1
			} : function (Or, Mr, Br) {
				var Ir, Wr, Rr, _r = [Fo, Pr];
				if (Br) {
					for (; Or = Or[Lr];)
						if ((1 === Or.nodeType || Hr) && kr(Or, Mr, Br)) return !0;
				} else
					for (; Or = Or[Lr];)
						if (1 === Or.nodeType || Hr)
							if (Rr = Or[zo] || (Or[zo] = {}), Wr = Rr[Or.uniqueID] || (Rr[Or.uniqueID] = {}), jr && jr === Or.nodeName.toLowerCase()) Or = Or[Lr] || Or;
							else {
								if ((Ir = Wr[qr]) && Ir[0] === Fo && Ir[1] === Pr) return _r[2] = Ir[2];
								if (Wr[qr] = _r, _r[2] = kr(Or, Mr, Br)) return !0
							} return !1
			}
		}

		function yo(kr) {
			return 1 < kr.length ? function (Dr, Nr, Lr) {
				for (var jr = kr.length; jr--;)
					if (!kr[jr](Dr, Nr, Lr)) return !1;
				return !0
			} : kr[0]
		}

		function bo(kr, Dr, Nr) {
			for (var Lr = 0, jr = Dr.length; Lr < jr; Lr++) no(kr, Dr[Lr], Nr);
			return Nr
		}

		function xo(kr, Dr, Nr, Lr, jr) {
			for (var qr, Hr = [], Pr = 0, Or = kr.length; Pr < Or; Pr++)(qr = kr[Pr]) && (Nr && !Nr(qr, Lr, jr) || (Hr.push(qr), null != Dr && Dr.push(Pr)));
			return Hr
		}

		function vo(kr, Dr, Nr, Lr, jr, qr) {
			return Lr && !Lr[zo] && (Lr = vo(Lr)), jr && !jr[zo] && (jr = vo(jr, qr)), ao(function (Hr, Pr, Or, Mr) {
				var Br, Ir, Wr, Rr = [],
					_r = [],
					zr = Pr.length,
					Ur = Hr || bo(Dr || "*", Or.nodeType ? [Or] : Or, []),
					Fr = kr && (Hr || !Dr) ? xo(Ur, Rr, kr, Or, Mr) : Ur,
					$r = Nr ? jr || (Hr ? kr : zr || Lr) ? [] : Pr : Fr;
				if (Nr && Nr(Fr, $r, Or, Mr), Lr)
					for (Br = xo($r, _r), Lr(Br, [], Or, Mr), Ir = Br.length; Ir--;)(Wr = Br[Ir]) && ($r[_r[Ir]] = !(Fr[_r[Ir]] = Wr));
				if (!Hr) $r = xo($r === Pr ? $r.splice(zr, $r.length) : $r), jr ? jr(null, Pr, $r, Mr) : er.apply(Pr, $r);
				else if (jr || kr) {
					if (jr) {
						for (Br = [], Ir = $r.length; Ir--;)(Wr = $r[Ir]) && Br.push(Fr[Ir] = Wr);
						jr(null, $r = [], Br, Mr)
					}
					for (Ir = $r.length; Ir--;)(Wr = $r[Ir]) && -1 < (Br = jr ? nr(Hr, Wr) : Rr[Ir]) && (Hr[Br] = !(Pr[Br] = Wr))
				}
			})
		}

		function Ao(kr) {
			for (var Dr, Nr, Lr, jr = kr.length, qr = So.relative[kr[0].type], Hr = qr || So.relative[" "], Pr = qr ? 1 : 0, Or = mo(function (Ir) {
					return Ir === Dr
				}, Hr, !0), Mr = mo(function (Ir) {
					return -1 < nr(Dr, Ir)
				}, Hr, !0), Br = [function (Ir, Wr, Rr) {
					var _r = !qr && (Rr || Wr !== jo) || ((Dr = Wr).nodeType ? Or(Ir, Wr, Rr) : Mr(Ir, Wr, Rr));
					return Dr = null, _r
				}]; Pr < jr; Pr++)
				if (Nr = So.relative[kr[Pr].type]) Br = [mo(yo(Br), Nr)];
				else {
					if ((Nr = So.filter[kr[Pr].type].apply(null, kr[Pr].matches))[zo]) {
						for (Lr = ++Pr; Lr < jr && !So.relative[kr[Lr].type]; Lr++);
						return vo(1 < Pr && yo(Br), 1 < Pr && fo(kr.slice(0, Pr - 1).concat({
							value: " " === kr[Pr - 2].type ? "*" : ""
						})).replace(lr, "$1"), Nr, Pr < Lr && Ao(kr.slice(Pr, Lr)), Lr < jr && Ao(kr = kr.slice(Lr)), Lr < jr && fo(kr))
					}
					Br.push(Nr)
				}
			return yo(Br)
		}

		function wo(kr, Dr) {
			var Nr = 0 < Dr.length,
				Lr = 0 < kr.length,
				jr = function (qr, Hr, Pr, Or, Mr) {
					var Br, Ir, Wr, Rr = 0,
						_r = "0",
						zr = qr && [],
						Ur = [],
						Fr = jo,
						$r = qr || Lr && So.find.TAG("*", Mr),
						Xr = Fo += null == Fr ? 1 : Math.random() || .1,
						Gr = $r.length;
					for (Mr && (jo = Hr === Oo || Hr || Mr); _r !== Gr && null != (Br = $r[_r]); _r++) {
						if (Lr && Br) {
							for (Ir = 0, Hr || Br.ownerDocument === Oo || (Po(Br), Pr = !Bo); Wr = kr[Ir++];)
								if (Wr(Br, Hr || Oo, Pr)) {
									Or.push(Br);
									break
								}
							Mr && (Fo = Xr)
						}
						Nr && ((Br = !Wr && Br) && Rr--, qr && zr.push(Br))
					}
					if (Rr += _r, Nr && _r !== Rr) {
						for (Ir = 0; Wr = Dr[Ir++];) Wr(zr, Ur, Hr, Pr);
						if (qr) {
							if (0 < Rr)
								for (; _r--;) zr[_r] || Ur[_r] || (Ur[_r] = Jo.call(Or));
							Ur = xo(Ur)
						}
						er.apply(Or, Ur), Mr && !qr && 0 < Ur.length && 1 < Rr + Dr.length && no.uniqueSort(Or)
					}
					return Mr && (Fo = Xr, jo = Fr), zr
				};
			return Nr ? ao(jr) : jr
		}
		var To, Co, So, Eo, ko, Do, No, Lo, jo, qo, Ho, Po, Oo, Mo, Bo, Io, Wo, Ro, _o, zo = "sizzle" + 1 * new Date,
			Uo = to.document,
			Fo = 0,
			$o = 0,
			Xo = so(),
			Go = so(),
			Qo = so(),
			Vo = function (kr, Dr) {
				return kr === Dr && (Ho = !0), 0
			},
			Yo = {}.hasOwnProperty,
			Ko = [],
			Jo = Ko.pop,
			Zo = Ko.push,
			er = Ko.push,
			tr = Ko.slice,
			nr = function (kr, Dr) {
				for (var Nr = 0, Lr = kr.length; Nr < Lr; Nr++)
					if (kr[Nr] === Dr) return Nr;
				return -1
			},
			sr = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			ar = "[\\x20\\t\\r\\n\\f]",
			or = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			dr = /[\x20\t\r\n\f]+/g,
			lr = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
			pr = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
			cr = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
			ur = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
			hr = /:((?:\\.|[\w-]|[^-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
			gr = /^(?:\\.|[\w-]|[^-\xa0])+$/,
			fr = {
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
			wr = function (kr, Dr, Nr) {
				var Lr = "0x" + Dr - 65536;
				return Lr != Lr || Nr ? Dr : 0 > Lr ? String.fromCharCode(Lr + 65536) : String.fromCharCode(55296 | Lr >> 10, 56320 | 1023 & Lr)
			},
			Tr = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			Cr = function (kr, Dr) {
				return Dr ? "\0" === kr ? "\uFFFD" : kr.slice(0, -1) + "\\" + kr.charCodeAt(kr.length - 1).toString(16) + " " : "\\" + kr
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
				apply: Ko.length ? function (Dr, Nr) {
					Zo.apply(Dr, tr.call(Nr))
				} : function (Dr, Nr) {
					for (var Lr = Dr.length, jr = 0; Dr[Lr++] = Nr[jr++];);
					Dr.length = Lr - 1
				}
			}
		}
		for (To in Co = no.support = {}, ko = no.isXML = function (kr) {
				var Dr = kr && (kr.ownerDocument || kr).documentElement;
				return !!Dr && "HTML" !== Dr.nodeName
			}, Po = no.setDocument = function (kr) {
				var Dr, Nr, Lr = kr ? kr.ownerDocument || kr : Uo;
				return Lr !== Oo && 9 === Lr.nodeType && Lr.documentElement ? (Oo = Lr, Mo = Oo.documentElement, Bo = !ko(Oo), Uo !== Oo && (Nr = Oo.defaultView) && Nr.top !== Nr && (Nr.addEventListener ? Nr.addEventListener("unload", Sr, !1) : Nr.attachEvent && Nr.attachEvent("onunload", Sr)), Co.attributes = oo(function (jr) {
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
					if ("undefined" != typeof qr.getElementById && Bo) {
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
					if ("undefined" != typeof qr.getElementById && Bo) {
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
					if ("undefined" != typeof qr.getElementsByClassName && Bo) return qr.getElementsByClassName(jr)
				}, Wo = [], Io = [], (Co.qsa = br.test(Oo.querySelectorAll)) && (oo(function (jr) {
					Mo.appendChild(jr).innerHTML = "<a id='" + zo + "'></a><select id='" + zo + "-\r\\' msallowcapture=''><option selected=''></option></select>", jr.querySelectorAll("[msallowcapture^='']").length && Io.push("[*^$]=" + ar + "*(?:''|\"\")"), jr.querySelectorAll("[selected]").length || Io.push("\\[" + ar + "*(?:value|" + sr + ")"), jr.querySelectorAll("[id~=" + zo + "-]").length || Io.push("~="), jr.querySelectorAll(":checked").length || Io.push(":checked"), jr.querySelectorAll("a#" + zo + "+*").length || Io.push(".#.+[+~]")
				}), oo(function (jr) {
					jr.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
					var qr = Oo.createElement("input");
					qr.setAttribute("type", "hidden"), jr.appendChild(qr).setAttribute("name", "D"), jr.querySelectorAll("[name=d]").length && Io.push("name" + ar + "*[*^$|!~]?="), 2 !== jr.querySelectorAll(":enabled").length && Io.push(":enabled", ":disabled"), Mo.appendChild(jr).disabled = !0, 2 !== jr.querySelectorAll(":disabled").length && Io.push(":enabled", ":disabled"), jr.querySelectorAll("*,:x"), Io.push(",.*:")
				})), (Co.matchesSelector = br.test(Ro = Mo.matches || Mo.webkitMatchesSelector || Mo.mozMatchesSelector || Mo.oMatchesSelector || Mo.msMatchesSelector)) && oo(function (jr) {
					Co.disconnectedMatch = Ro.call(jr, "*"), Ro.call(jr, "[s!='']:x"), Wo.push("!=", ":(" + or + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ("\\[" + ar + "*(" + or + ")(?:" + ar + "*([*^$|!~]?=)" + ar + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + or + "))|)" + ar + "*\\]") + ")*)|.*)\\)|)")
				}), Io = Io.length && new RegExp(Io.join("|")), Wo = Wo.length && new RegExp(Wo.join("|")), Dr = br.test(Mo.compareDocumentPosition), _o = Dr || br.test(Mo.contains) ? function (jr, qr) {
					var Hr = 9 === jr.nodeType ? jr.documentElement : jr,
						Pr = qr && qr.parentNode;
					return jr === Pr || Pr && 1 === Pr.nodeType && (Hr.contains ? Hr.contains(Pr) : jr.compareDocumentPosition && 16 & jr.compareDocumentPosition(Pr))
				} : function (jr, qr) {
					if (qr)
						for (; qr = qr.parentNode;)
							if (qr === jr) return !0;
					return !1
				}, Vo = Dr ? function (jr, qr) {
					if (jr === qr) return Ho = !0, 0;
					var Hr = !jr.compareDocumentPosition - !qr.compareDocumentPosition;
					return Hr || (1 & (Hr = (jr.ownerDocument || jr) === (qr.ownerDocument || qr) ? jr.compareDocumentPosition(qr) : 1) || !Co.sortDetached && qr.compareDocumentPosition(jr) === Hr ? jr === Oo || jr.ownerDocument === Uo && _o(Uo, jr) ? -1 : qr === Oo || qr.ownerDocument === Uo && _o(Uo, qr) ? 1 : qo ? nr(qo, jr) - nr(qo, qr) : 0 : 4 & Hr ? -1 : 1)
				} : function (jr, qr) {
					if (jr === qr) return Ho = !0, 0;
					var Hr, Pr = 0,
						Or = jr.parentNode,
						Mr = qr.parentNode,
						Br = [jr],
						Ir = [qr];
					if (!Or || !Mr) return jr === Oo ? -1 : qr === Oo ? 1 : Or ? -1 : Mr ? 1 : qo ? nr(qo, jr) - nr(qo, qr) : 0;
					if (Or === Mr) return io(jr, qr);
					for (Hr = jr; Hr = Hr.parentNode;) Br.unshift(Hr);
					for (Hr = qr; Hr = Hr.parentNode;) Ir.unshift(Hr);
					for (; Br[Pr] === Ir[Pr];) Pr++;
					return Pr ? io(Br[Pr], Ir[Pr]) : Br[Pr] === Uo ? -1 : Ir[Pr] === Uo ? 1 : 0
				}, Oo) : Oo
			}, no.matches = function (kr, Dr) {
				return no(kr, null, null, Dr)
			}, no.matchesSelector = function (kr, Dr) {
				if ((kr.ownerDocument || kr) !== Oo && Po(kr), Dr = Dr.replace(ur, "='$1']"), Co.matchesSelector && Bo && !Qo[Dr + " "] && (!Wo || !Wo.test(Dr)) && (!Io || !Io.test(Dr))) try {
					var Nr = Ro.call(kr, Dr);
					if (Nr || Co.disconnectedMatch || kr.document && 11 !== kr.document.nodeType) return Nr
				} catch (Lr) {}
				return 0 < no(Dr, Oo, null, [kr]).length
			}, no.contains = function (kr, Dr) {
				return (kr.ownerDocument || kr) !== Oo && Po(kr), _o(kr, Dr)
			}, no.attr = function (kr, Dr) {
				(kr.ownerDocument || kr) !== Oo && Po(kr);
				var Nr = So.attrHandle[Dr.toLowerCase()],
					Lr = Nr && Yo.call(So.attrHandle, Dr.toLowerCase()) ? Nr(kr, Dr, !Bo) : void 0;
				return void 0 === Lr ? Co.attributes || !Bo ? kr.getAttribute(Dr) : (Lr = kr.getAttributeNode(Dr)) && Lr.specified ? Lr.value : null : Lr
			}, no.escape = function (kr) {
				return (kr + "").replace(Tr, Cr)
			}, no.error = function (kr) {
				throw new Error("Syntax error, unrecognized expression: " + kr)
			}, no.uniqueSort = function (kr) {
				var Dr, Nr = [],
					Lr = 0,
					jr = 0;
				if (Ho = !Co.detectDuplicates, qo = !Co.sortStable && kr.slice(0), kr.sort(Vo), Ho) {
					for (; Dr = kr[jr++];) Dr === kr[jr] && (Lr = Nr.push(jr));
					for (; Lr--;) kr.splice(Nr[Lr], 1)
				}
				return qo = null, kr
			}, Eo = no.getText = function (kr) {
				var Dr, Nr = "",
					Lr = 0,
					jr = kr.nodeType;
				if (!jr)
					for (; Dr = kr[Lr++];) Nr += Eo(Dr);
				else if (1 === jr || 9 === jr || 11 === jr) {
					if ("string" == typeof kr.textContent) return kr.textContent;
					for (kr = kr.firstChild; kr; kr = kr.nextSibling) Nr += Eo(kr)
				} else if (3 === jr || 4 === jr) return kr.nodeValue;
				return Nr
			}, (So = no.selectors = {
				cacheLength: 50,
				createPseudo: ao,
				match: fr,
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
						var Dr, Nr = !kr[6] && kr[2];
						return fr.CHILD.test(kr[0]) ? null : (kr[3] ? kr[2] = kr[4] || kr[5] || "" : Nr && hr.test(Nr) && (Dr = Do(Nr, !0)) && (Dr = Nr.indexOf(")", Nr.length - Dr) - Nr.length) && (kr[0] = kr[0].slice(0, Dr), kr[2] = Nr.slice(0, Dr)), kr.slice(0, 3))
					}
				},
				filter: {
					TAG: function (kr) {
						var Dr = kr.replace(Ar, wr).toLowerCase();
						return "*" === kr ? function () {
							return !0
						} : function (Nr) {
							return Nr.nodeName && Nr.nodeName.toLowerCase() === Dr
						}
					},
					CLASS: function (kr) {
						var Dr = Xo[kr + " "];
						return Dr || (Dr = new RegExp("(^|" + ar + ")" + kr + "(" + ar + "|$)")) && Xo(kr, function (Nr) {
							return Dr.test("string" == typeof Nr.className && Nr.className || "undefined" != typeof Nr.getAttribute && Nr.getAttribute("class") || "")
						})
					},
					ATTR: function (kr, Dr, Nr) {
						return function (Lr) {
							var jr = no.attr(Lr, kr);
							return null == jr ? "!=" === Dr : !Dr || (jr += "", "=" === Dr ? jr === Nr : "!=" === Dr ? jr !== Nr : "^=" === Dr ? Nr && 0 === jr.indexOf(Nr) : "*=" === Dr ? Nr && -1 < jr.indexOf(Nr) : "$=" === Dr ? Nr && jr.slice(-Nr.length) === Nr : "~=" === Dr ? -1 < (" " + jr.replace(dr, " ") + " ").indexOf(Nr) : "|=" == Dr && (jr === Nr || jr.slice(0, Nr.length + 1) === Nr + "-"))
						}
					},
					CHILD: function (kr, Dr, Nr, Lr, jr) {
						var qr = "nth" !== kr.slice(0, 3),
							Hr = "last" !== kr.slice(-4),
							Pr = "of-type" === Dr;
						return 1 === Lr && 0 === jr ? function (Or) {
							return !!Or.parentNode
						} : function (Or, Mr, Br) {
							var Ir, Wr, Rr, _r, zr, Ur, Fr = qr == Hr ? "previousSibling" : "nextSibling",
								$r = Or.parentNode,
								Xr = Pr && Or.nodeName.toLowerCase(),
								Gr = !Br && !Pr,
								Qr = !1;
							if ($r) {
								if (qr) {
									for (; Fr;) {
										for (_r = Or; _r = _r[Fr];)
											if (Pr ? _r.nodeName.toLowerCase() === Xr : 1 === _r.nodeType) return !1;
										Ur = Fr = "only" === kr && !Ur && "nextSibling"
									}
									return !0
								}
								if (Ur = [Hr ? $r.firstChild : $r.lastChild], Hr && Gr) {
									for (Qr = (zr = (Ir = (Wr = (Rr = (_r = $r)[zo] || (_r[zo] = {}))[_r.uniqueID] || (Rr[_r.uniqueID] = {}))[kr] || [])[0] === Fo && Ir[1]) && Ir[2], _r = zr && $r.childNodes[zr]; _r = ++zr && _r && _r[Fr] || (Qr = zr = 0) || Ur.pop();)
										if (1 === _r.nodeType && ++Qr && _r === Or) {
											Wr[kr] = [Fo, zr, Qr];
											break
										}
								} else if (Gr && (Qr = zr = (Ir = (Wr = (Rr = (_r = Or)[zo] || (_r[zo] = {}))[_r.uniqueID] || (Rr[_r.uniqueID] = {}))[kr] || [])[0] === Fo && Ir[1]), !1 === Qr)
									for (;
										(_r = ++zr && _r && _r[Fr] || (Qr = zr = 0) || Ur.pop()) && !((Pr ? _r.nodeName.toLowerCase() === Xr : 1 === _r.nodeType) && ++Qr && (Gr && ((Wr = (Rr = _r[zo] || (_r[zo] = {}))[_r.uniqueID] || (Rr[_r.uniqueID] = {}))[kr] = [Fo, Qr]), _r === Or)););
								return (Qr -= jr) == Lr || 0 == Qr % Lr && 0 <= Qr / Lr
							}
						}
					},
					PSEUDO: function (kr, Dr) {
						var Nr, Lr = So.pseudos[kr] || So.setFilters[kr.toLowerCase()] || no.error("unsupported pseudo: " + kr);
						return Lr[zo] ? Lr(Dr) : 1 < Lr.length ? (Nr = [kr, kr, "", Dr], So.setFilters.hasOwnProperty(kr.toLowerCase()) ? ao(function (jr, qr) {
							for (var Hr, Pr = Lr(jr, Dr), Or = Pr.length; Or--;) jr[Hr = nr(jr, Pr[Or])] = !(qr[Hr] = Pr[Or])
						}) : function (jr) {
							return Lr(jr, 0, Nr)
						}) : Lr
					}
				},
				pseudos: {
					not: ao(function (kr) {
						var Dr = [],
							Nr = [],
							Lr = No(kr.replace(lr, "$1"));
						return Lr[zo] ? ao(function (jr, qr, Hr, Pr) {
							for (var Or, Mr = Lr(jr, null, Pr, []), Br = jr.length; Br--;)(Or = Mr[Br]) && (jr[Br] = !(qr[Br] = Or))
						}) : function (jr, qr, Hr) {
							return Dr[0] = jr, Lr(Dr, null, Hr, Nr), Dr[0] = null, !Nr.pop()
						}
					}),
					has: ao(function (kr) {
						return function (Dr) {
							return 0 < no(kr, Dr).length
						}
					}),
					contains: ao(function (kr) {
						return kr = kr.replace(Ar, wr),
							function (Dr) {
								return -1 < (Dr.textContent || Dr.innerText || Eo(Dr)).indexOf(kr)
							}
					}),
					lang: ao(function (kr) {
						return gr.test(kr || "") || no.error("unsupported lang: " + kr), kr = kr.replace(Ar, wr).toLowerCase(),
							function (Dr) {
								var Nr;
								do
									if (Nr = Bo ? Dr.lang : Dr.getAttribute("xml:lang") || Dr.getAttribute("lang")) return (Nr = Nr.toLowerCase()) === kr || 0 === Nr.indexOf(kr + "-"); while ((Dr = Dr.parentNode) && 1 === Dr.nodeType);
								return !1
							}
					}),
					target: function (kr) {
						var Dr = to.location && to.location.hash;
						return Dr && Dr.slice(1) === kr.id
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
						var Dr = kr.nodeName.toLowerCase();
						return "input" === Dr && !!kr.checked || "option" === Dr && !!kr.selected
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
						var Dr = kr.nodeName.toLowerCase();
						return "input" === Dr && "button" === kr.type || "button" === Dr
					},
					text: function (kr) {
						var Dr;
						return "input" === kr.nodeName.toLowerCase() && "text" === kr.type && (null == (Dr = kr.getAttribute("type")) || "text" === Dr.toLowerCase())
					},
					first: uo(function () {
						return [0]
					}),
					last: uo(function (kr, Dr) {
						return [Dr - 1]
					}),
					eq: uo(function (kr, Dr, Nr) {
						return [0 > Nr ? Nr + Dr : Nr]
					}),
					even: uo(function (kr, Dr) {
						for (var Nr = 0; Nr < Dr; Nr += 2) kr.push(Nr);
						return kr
					}),
					odd: uo(function (kr, Dr) {
						for (var Nr = 1; Nr < Dr; Nr += 2) kr.push(Nr);
						return kr
					}),
					lt: uo(function (kr, Dr, Nr) {
						for (var Lr = 0 > Nr ? Nr + Dr : Nr; 0 <= --Lr;) kr.push(Lr);
						return kr
					}),
					gt: uo(function (kr, Dr, Nr) {
						for (var Lr = 0 > Nr ? Nr + Dr : Nr; ++Lr < Dr;) kr.push(Lr);
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
		return go.prototype = So.filters = So.pseudos, So.setFilters = new go, Do = no.tokenize = function (kr, Dr) {
			var Nr, Lr, jr, qr, Hr, Pr, Or, Mr = Go[kr + " "];
			if (Mr) return Dr ? 0 : Mr.slice(0);
			for (Hr = kr, Pr = [], Or = So.preFilter; Hr;) {
				for (qr in Nr && !(Lr = pr.exec(Hr)) || (Lr && (Hr = Hr.slice(Lr[0].length) || Hr), Pr.push(jr = [])), Nr = !1, (Lr = cr.exec(Hr)) && (Nr = Lr.shift(), jr.push({
						value: Nr,
						type: Lr[0].replace(lr, " ")
					}), Hr = Hr.slice(Nr.length)), So.filter)(Lr = fr[qr].exec(Hr)) && (!Or[qr] || (Lr = Or[qr](Lr))) && (Nr = Lr.shift(), jr.push({
					value: Nr,
					type: qr,
					matches: Lr
				}), Hr = Hr.slice(Nr.length));
				if (!Nr) break
			}
			return Dr ? Hr.length : Hr ? no.error(kr) : Go(kr, Pr).slice(0)
		}, (No = no.compile = function (kr, Dr) {
			var Nr, Lr = [],
				jr = [],
				qr = Qo[kr + " "];
			if (!qr) {
				for (Dr || (Dr = Do(kr)), Nr = Dr.length; Nr--;)(qr = Ao(Dr[Nr]))[zo] ? Lr.push(qr) : jr.push(qr);
				(qr = Qo(kr, wo(jr, Lr))).selector = kr
			}
			return qr
		}, Lo = no.select = function (kr, Dr, Nr, Lr) {
			var jr, qr, Hr, Pr, Or, Mr = "function" == typeof kr && kr,
				Br = !Lr && Do(kr = Mr.selector || kr);
			if (Nr = Nr || [], 1 === Br.length) {
				if (2 < (qr = Br[0] = Br[0].slice(0)).length && "ID" === (Hr = qr[0]).type && 9 === Dr.nodeType && Bo && So.relative[qr[1].type]) {
					if (!(Dr = (So.find.ID(Hr.matches[0].replace(Ar, wr), Dr) || [])[0])) return Nr;
					Mr && (Dr = Dr.parentNode), kr = kr.slice(qr.shift().value.length)
				}
				for (jr = fr.needsContext.test(kr) ? 0 : qr.length; jr-- && (Hr = qr[jr], !So.relative[Pr = Hr.type]);)
					if ((Or = So.find[Pr]) && (Lr = Or(Hr.matches[0].replace(Ar, wr), vr.test(qr[0].type) && ho(Dr.parentNode) || Dr))) {
						if (qr.splice(jr, 1), !(kr = Lr.length && fo(qr))) return er.apply(Nr, Lr), Nr;
						break
					}
			}
			return (Mr || No(kr, Br))(Lr, Dr, !Bo, Nr, !Dr || vr.test(kr) && ho(Dr.parentNode) || Dr), Nr
		}, Co.sortStable = zo.split("").sort(Vo).join("") === zo, Co.detectDuplicates = !!Ho, Po(), Co.sortDetached = oo(function (kr) {
			return 1 & kr.compareDocumentPosition(Oo.createElement("fieldset"))
		}), oo(function (kr) {
			return kr.innerHTML = "<a href='#'></a>", "#" === kr.firstChild.getAttribute("href")
		}) || ro("type|href|height|width", function (kr, Dr, Nr) {
			if (!Nr) return kr.getAttribute(Dr, "type" === Dr.toLowerCase() ? 1 : 2)
		}), Co.attributes && oo(function (kr) {
			return kr.innerHTML = "<input/>", kr.firstChild.setAttribute("value", ""), "" === kr.firstChild.getAttribute("value")
		}) || ro("value", function (kr, Dr, Nr) {
			if (!Nr && "input" === kr.nodeName.toLowerCase()) return kr.defaultValue
		}), oo(function (kr) {
			return null == kr.getAttribute("disabled")
		}) || ro(sr, function (kr, Dr, Nr) {
			var Lr;
			if (!Nr) return !0 === kr[Dr] ? Dr.toLowerCase() : (Lr = kr.getAttributeNode(Dr)) && Lr.specified ? Lr.value : null
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
		Ds = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
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
	var Ns, Ls = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(ws.fn.init = function (to, no, so) {
		var ao, oo;
		if (!to) return this;
		if (so = so || Ns, "string" == typeof to) {
			if (!(ao = "<" === to[0] && ">" === to[to.length - 1] && 3 <= to.length ? [null, to, null] : Ls.exec(to)) || !ao[1] && no) return !no || no.jquery ? (no || so).find(to) : this.constructor(no).find(to);
			if (ao[1]) {
				if (no = no instanceof ws ? no[0] : no, ws.merge(this, ws.parseHTML(ao[1], no && no.nodeType ? no.ownerDocument || no : rs, !0)), Ds.test(ao[1]) && ws.isPlainObject(no))
					for (ao in no) bs(this[ao]) ? this[ao](no[ao]) : this.attr(ao, no[ao]);
				return this
			}
			return (oo = rs.getElementById(ao[2])) && (this[0] = oo, this.length = 1), this
		}
		return to.nodeType ? (this[0] = to, this.length = 1, this) : bs(to) ? void 0 === so.ready ? to(ws) : so.ready(to) : ws.makeArray(to, this)
	}).prototype = ws.fn, Ns = ws(rs);
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
		to = "string" == typeof to ? dn(to) : ws.extend({}, to);
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
						ws.each(ho, function (go, fo) {
							bs(fo) ? to.unique && co.has(fo) || ro.push(fo) : fo && fo.length && "string" !== nn(fo) && uo(fo)
						})
					}(arguments), so && !no && po()), this
				},
				remove: function () {
					return ws.each(arguments, function (uo, ho) {
						for (var go; - 1 < (go = ws.inArray(ho, ro, go));) ro.splice(go, 1), go <= lo && lo--
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
						function po(uo, ho, go, fo) {
							return function () {
								var mo = this,
									yo = arguments,
									bo = function () {
										var vo, Ao;
										if (!(uo < co)) {
											if ((vo = go.apply(mo, yo)) === ho.promise()) throw new TypeError("Thenable self-resolution");
											Ao = vo && ("object" == typeof vo || "function" == typeof vo) && vo.then, bs(Ao) ? fo ? Ao.call(vo, po(co, ho, ln, fo), po(co, ho, pn, fo)) : (co++, Ao.call(vo, po(co, ho, ln, fo), po(co, ho, pn, fo), po(co, ho, ln, ho.notifyWith))) : (go !== ln && (mo = void 0, yo = [vo]), (fo || ho.resolveWith)(mo, yo))
										}
									},
									xo = fo ? bo : function () {
										try {
											bo()
										} catch (vo) {
											ws.Deferred.exceptionHook && ws.Deferred.exceptionHook(vo, xo.stackTrace), uo + 1 >= co && (go !== pn && (mo = void 0, yo = [vo]), ho.rejectWith(mo, yo))
										}
									};
								uo ? xo() : (ws.Deferred.getStackHook && (xo.stackTrace = ws.Deferred.getStackHook()), Zt.setTimeout(xo))
							}
						}
						var co = 0;
						return ws.Deferred(function (uo) {
							no[0][3].add(po(0, uo, bs(lo) ? lo : ln, uo.notifyWith)), no[1][3].add(po(0, uo, bs(ro) ? ro : ln)), no[2][3].add(po(0, uo, bs(io) ? io : pn))
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
				oo = ds.call(arguments),
				ro = ws.Deferred(),
				io = function (lo) {
					return function (po) {
						ao[lo] = this, oo[lo] = 1 < arguments.length ? ds.call(arguments) : po, --no || ro.resolveWith(ao, oo)
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
			else if (void 0 !== ao && (oo = !0, bs(ao) || (io = !0), co && (io ? (no.call(to, ao), no = null) : (co = no, no = function (uo, ho, go) {
					return co.call(ws(uo), go)
				})), no))
				for (; lo < po; lo++) no(to[lo], so, io ? ao : ao.call(to[lo], lo, no(to[lo], so)));
			return oo ? to : co ? no.call(to) : po ? no(to[0], so) : ro
		},
		Bs = /^-ms-/,
		Is = /-([a-z])/g,
		Ws = function (to) {
			return 1 === to.nodeType || 9 === to.nodeType || !+to.nodeType
		};
	fn.uid = 1, fn.prototype = {
		cache: function (to) {
			var no = to[this.expando];
			return no || (no = {}, Ws(to) && (to.nodeType ? to[this.expando] = no : Object.defineProperty(to, this.expando, {
				value: no,
				configurable: !0
			}))), no
		},
		set: function (to, no, so) {
			var ao, oo = this.cache(to);
			if ("string" == typeof no) oo[gn(no)] = so;
			else
				for (ao in no) oo[gn(ao)] = no[ao];
			return oo
		},
		get: function (to, no) {
			return void 0 === no ? this.cache(to) : to[this.expando] && to[this.expando][gn(no)]
		},
		access: function (to, no, so) {
			return void 0 === no || no && "string" == typeof no && void 0 === so ? this.get(to, no) : (this.set(to, no, so), void 0 === so ? no : so)
		},
		remove: function (to, no) {
			var so, ao = to[this.expando];
			if (void 0 !== ao) {
				if (void 0 !== no)
					for (so = (no = Array.isArray(no) ? no.map(gn) : ((no = gn(no)) in ao) ? [no] : no.match(Hs) || []).length; so--;) delete ao[no[so]];
				(void 0 === no || ws.isEmptyObject(ao)) && (to.nodeType ? to[this.expando] = void 0 : delete to[this.expando])
			}
		},
		hasData: function (to) {
			var no = to[this.expando];
			return void 0 !== no && !ws.isEmptyObject(no)
		}
	};
	var Rs = new fn,
		_s = new fn,
		zs = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Us = /[A-Z]/g;
	ws.extend({
		hasData: function (to) {
			return _s.hasData(to) || Rs.hasData(to)
		},
		data: function (to, no, so) {
			return _s.access(to, no, so)
		},
		removeData: function (to, no) {
			_s.remove(to, no)
		},
		_data: function (to, no, so) {
			return Rs.access(to, no, so)
		},
		_removeData: function (to, no) {
			Rs.remove(to, no)
		}
	}), ws.fn.extend({
		data: function (to, no) {
			var so, ao, oo, ro = this[0],
				io = ro && ro.attributes;
			if (void 0 === to) {
				if (this.length && (oo = _s.get(ro), 1 === ro.nodeType && !Rs.get(ro, "hasDataAttrs"))) {
					for (so = io.length; so--;) io[so] && 0 === (ao = io[so].name).indexOf("data-") && (ao = gn(ao.slice(5)), yn(ro, ao, oo[ao]));
					Rs.set(ro, "hasDataAttrs", !0)
				}
				return oo
			}
			return "object" == typeof to ? this.each(function () {
				_s.set(this, to)
			}) : Ms(this, function (lo) {
				var po;
				if (ro && void 0 === lo) {
					if (void 0 !== (po = _s.get(ro, to))) return po;
					if (void 0 !== (po = yn(ro, to))) return po
				} else this.each(function () {
					_s.set(this, to, lo)
				})
			}, null, no, 1 < arguments.length, null, !0)
		},
		removeData: function (to) {
			return this.each(function () {
				_s.remove(this, to)
			})
		}
	}), ws.extend({
		queue: function (to, no, so) {
			var ao;
			if (to) return no = (no || "fx") + "queue", ao = Rs.get(to, no), so && (!ao || Array.isArray(so) ? ao = Rs.access(to, no, ws.makeArray(so)) : ao.push(so)), ao || []
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
			return Rs.get(to, so) || Rs.access(to, so, {
				empty: ws.Callbacks("once memory").add(function () {
					Rs.remove(to, [no + "queue", so])
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
			for ("string" != typeof to && (no = to, to = void 0), to = to || "fx"; io--;)(so = Rs.get(ro[io], to + "queueHooks")) && so.empty && (ao++, so.empty.add(lo));
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
			var ro, io, lo, po, co, uo, ho, go, fo, mo, yo, bo = Rs.get(to);
			if (bo)
				for (so.handler && (so = (ro = so).handler, oo = ro.selector), oo && ws.find.matchesSelector(ta, oo), so.guid || (so.guid = ws.guid++), (po = bo.events) || (po = bo.events = {}), (io = bo.handle) || (io = bo.handle = function (xo) {
						return "undefined" != typeof ws && ws.event.triggered !== xo.type ? ws.event.dispatch.apply(to, arguments) : void 0
					}), co = (no = (no || "").match(Hs) || [""]).length; co--;) fo = yo = (lo = oa.exec(no[co]) || [])[1], mo = (lo[2] || "").split(".").sort(), fo && (ho = ws.event.special[fo] || {}, fo = (oo ? ho.delegateType : ho.bindType) || fo, ho = ws.event.special[fo] || {}, uo = ws.extend({
					type: fo,
					origType: yo,
					data: ao,
					handler: so,
					guid: so.guid,
					selector: oo,
					needsContext: oo && ws.expr.match.needsContext.test(oo),
					namespace: mo.join(".")
				}, ro), (go = po[fo]) || ((go = po[fo] = []).delegateCount = 0, ho.setup && !1 !== ho.setup.call(to, ao, mo, io) || to.addEventListener && to.addEventListener(fo, io)), ho.add && (ho.add.call(to, uo), uo.handler.guid || (uo.handler.guid = so.guid)), oo ? go.splice(go.delegateCount++, 0, uo) : go.push(uo), ws.event.global[fo] = !0)
		},
		remove: function (to, no, so, ao, oo) {
			var ro, io, lo, po, co, uo, ho, go, fo, mo, yo, bo = Rs.hasData(to) && Rs.get(to);
			if (bo && (po = bo.events)) {
				for (co = (no = (no || "").match(Hs) || [""]).length; co--;)
					if (lo = oa.exec(no[co]) || [], fo = yo = lo[1], mo = (lo[2] || "").split(".").sort(), fo) {
						for (ho = ws.event.special[fo] || {}, go = po[fo = (ao ? ho.delegateType : ho.bindType) || fo] || [], lo = lo[2] && new RegExp("(^|\\.)" + mo.join("\\.(?:.*\\.|)") + "(\\.|$)"), io = ro = go.length; ro--;) uo = go[ro], !oo && yo !== uo.origType || so && so.guid !== uo.guid || lo && !lo.test(uo.namespace) || ao && ao !== uo.selector && ("**" !== ao || !uo.selector) || (go.splice(ro, 1), uo.selector && go.delegateCount--, ho.remove && ho.remove.call(to, uo));
						io && !go.length && (ho.teardown && !1 !== ho.teardown.call(to, mo, bo.handle) || ws.removeEvent(to, fo, bo.handle), delete po[fo])
					} else
						for (fo in po) ws.event.remove(to, fo + no[co], so, ao, !0);
				ws.isEmptyObject(po) && Rs.remove(to, "handle events")
			}
		},
		dispatch: function (to) {
			var so, ao, oo, ro, io, lo, no = ws.event.fix(to),
				po = Array(arguments.length),
				co = (Rs.get(this, "events") || {})[no.type] || [],
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
		da = /checked\s*(?:[^=]|=\s*.checked.)/i,
		la = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
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
				if (Ws(so)) {
					if (no = so[Rs.expando]) {
						if (no.events)
							for (ao in no.events) oo[ao] ? ws.event.remove(so, ao) : ws.removeEvent(so, ao, no.handle);
						so[Rs.expando] = void 0
					}
					so[_s.expando] && (so[_s.expando] = void 0)
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
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Dn(this, to).appendChild(to)
			})
		},
		prepend: function () {
			return Hn(this, arguments, function (to) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var no = Dn(this, to);
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
		ga = /^--/,
		fa = {
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
				var oo, ro, io, lo = gn(no),
					po = ga.test(no),
					co = to.style;
				if (po || (no = In(lo)), io = ws.cssHooks[no] || ws.cssHooks[lo], void 0 === so) return io && "get" in io && void 0 !== (oo = io.get(to, !1, ao)) ? oo : co[no];
				"string" == (ro = typeof so) && (oo = $s.exec(so)) && oo[1] && (so = bn(to, no, oo), ro = "number"), null != so && so === so && ("number" === ro && (so += oo && oo[3] || (ws.cssNumber[lo] ? "" : "px")), ys.clearCloneStyle || "" !== so || 0 !== no.indexOf("background") || (co[no] = "inherit"), io && "set" in io && void 0 === (so = io.set(to, so, ao)) || (po ? co.setProperty(no, so) : co[no] = so))
			}
		},
		css: function (to, no, so, ao) {
			var oo, ro, io, lo = gn(no);
			return ga.test(no) || (no = In(lo)), (io = ws.cssHooks[no] || ws.cssHooks[lo]) && "get" in io && (oo = io.get(to, !0, so)), void 0 === oo && (oo = On(to, no, ao)), "normal" === oo && no in ma && (oo = ma[no]), "" === so || so ? (ro = parseFloat(oo), !0 === so || isFinite(ro) ? ro || 0 : oo) : oo
		}
	}), ws.each(["height", "width"], function (to, no) {
		ws.cssHooks[no] = {
			get: function (so, ao, oo) {
				if (ao) return !ha.test(ws.css(so, "display")) || so.getClientRects().length && so.getBoundingClientRect().width ? _n(so, no, oo) : Qs(so, fa, function () {
					return _n(so, no, oo)
				})
			},
			set: function (so, ao, oo) {
				var ro, io = ca(so),
					lo = "border-box" === ws.css(so, "boxSizing", !1, io),
					po = oo && Rn(so, no, oo, lo, io);
				return lo && ys.scrollboxSize() === io.position && (po -= Math.ceil(so["offset" + no[0].toUpperCase() + no.slice(1)] - parseFloat(io[no]) - Rn(so, no, "border", !1, io) - .5)), po && (ro = $s.exec(ao)) && "px" !== (ro[3] || "px") && (so.style[no] = ao, ao = ws.css(so, no)), Wn(so, ao, po)
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
		}, "margin" !== to && (ws.cssHooks[to + no].set = Wn)
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
				var ao, oo, ro, io, lo, po, co, uo, go = this,
					fo = {},
					mo = to.style,
					yo = to.nodeType && Gs(to),
					bo = Rs.get(to, "fxshow");
				for (ao in so.queue || (null == (io = ws._queueHooks(to, "fx")).unqueued && (io.unqueued = 0, lo = io.empty.fire, io.empty.fire = function () {
						io.unqueued || lo()
					}), io.unqueued++, go.always(function () {
						go.always(function () {
							io.unqueued--, ws.queue(to, "fx").length || io.empty.fire()
						})
					})), no)
					if (oo = no[ao], wa.test(oo)) {
						if (delete no[ao], ro = ro || "toggle" === oo, oo === (yo ? "hide" : "show")) {
							if ("show" !== oo || !bo || void 0 === bo[ao]) continue;
							yo = !0
						}
						fo[ao] = bo && bo[ao] || ws.style(to, ao)
					}
				if ((po = !ws.isEmptyObject(no)) || !ws.isEmptyObject(fo))
					for (ao in ("width" in no || "height" in no) && 1 === to.nodeType && (so.overflow = [mo.overflow, mo.overflowX, mo.overflowY], null == (co = bo && bo.display) && (co = Rs.get(to, "display")), "none" === (uo = ws.css(to, "display")) && (co ? uo = co : (vn([to], !0), co = to.style.display || co, uo = ws.css(to, "display"), vn([to]))), ("inline" === uo || "inline-block" === uo && null != co) && "none" === ws.css(to, "float") && (po || (go.done(function () {
							mo.display = co
						}), null == co && (uo = mo.display, co = "none" === uo ? "" : uo)), mo.display = "inline-block")), so.overflow && (mo.overflow = "hidden", go.always(function () {
							mo.overflow = so.overflow[0], mo.overflowX = so.overflow[1], mo.overflowY = so.overflow[2]
						})), po = !1, fo) po || (bo ? "hidden" in bo && (yo = bo.hidden) : bo = Rs.access(to, "fxshow", {
						display: co
					}), ro && (bo.hidden = !yo), yo && vn([to], !0), go.done(function () {
						for (ao in yo || vn([to]), Rs.remove(to, "fxshow"), fo) ws.style(to, ao, fo[ao])
					})), po = Xn(yo ? bo[ao] : 0, ao, go), ao in bo || (bo[ao] = po.start, yo && (po.end = po.start, po.start = 0))
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
						(oo || Rs.get(this, "finish")) && lo.stop(!0)
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
						lo = Rs.get(this);
					if (ro) lo[ro] && lo[ro].stop && ao(lo[ro]);
					else
						for (ro in lo) lo[ro] && lo[ro].stop && Ta.test(ro) && ao(lo[ro]);
					for (ro = io.length; ro--;) io[ro].elem !== this || null != to && io[ro].queue !== to || (io[ro].anim.stop(so), oo = !1, io.splice(ro, 1));
					!oo && so || ws.dequeue(this, to)
				})
			},
			finish: function (to) {
				return !1 !== to && (to = to || "fx"), this.each(function () {
					var no, so = Rs.get(this),
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
				else void 0 !== to && "boolean" != so || ((oo = Kn(this)) && Rs.set(this, "__className__", oo), this.setAttribute && this.setAttribute("class", oo || !1 === to ? "" : Rs.get(this, "__className__") || ""))
			})
		},
		hasClass: function (to) {
			var no, so, ao = 0;
			for (no = " " + to + " "; so = this[ao++];)
				if (1 === so.nodeType && -1 < (" " + Yn(Kn(so)) + " ").indexOf(no)) return !0;
			return !1
		}
	});
	var Da = /\r/g;
	ws.fn.extend({
		val: function (to) {
			var no, so, ao, oo = this[0]; {
				if (arguments.length) return ao = bs(to), this.each(function (ro) {
					var io;
					1 === this.nodeType && (null == (io = ao ? to.call(this, ro, ws(this).val()) : to) ? io = "" : "number" == typeof io ? io += "" : Array.isArray(io) && (io = ws.map(io, function (lo) {
						return null == lo ? "" : lo + ""
					})), (no = ws.valHooks[this.type] || ws.valHooks[this.nodeName.toLowerCase()]) && "set" in no && void 0 !== no.set(this, io, "value") || (this.value = io))
				});
				if (oo) return (no = ws.valHooks[oo.type] || ws.valHooks[oo.nodeName.toLowerCase()]) && "get" in no && void 0 !== (so = no.get(oo, "value")) ? so : "string" == typeof (so = oo.value) ? so.replace(Da, "") : null == so ? "" : so
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
	var Na = /^(?:focusinfocus|focusoutblur)$/,
		La = function (to) {
			to.stopPropagation()
		};
	ws.extend(ws.event, {
		trigger: function (to, no, so, ao) {
			var oo, ro, io, lo, po, co, uo, ho, go = [so || rs],
				fo = gs.call(to, "type") ? to.type : to,
				mo = gs.call(to, "namespace") ? to.namespace.split(".") : [];
			if (ro = ho = io = so = so || rs, 3 !== so.nodeType && 8 !== so.nodeType && !Na.test(fo + ws.event.triggered) && (-1 < fo.indexOf(".") && (fo = (mo = fo.split(".")).shift(), mo.sort()), po = 0 > fo.indexOf(":") && "on" + fo, to = to[ws.expando] ? to : new ws.Event(fo, "object" == typeof to && to), to.isTrigger = ao ? 2 : 3, to.namespace = mo.join("."), to.rnamespace = to.namespace ? new RegExp("(^|\\.)" + mo.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, to.result = void 0, to.target || (to.target = so), no = null == no ? [to] : ws.makeArray(no, [to]), uo = ws.event.special[fo] || {}, ao || !uo.trigger || !1 !== uo.trigger.apply(so, no))) {
				if (!ao && !uo.noBubble && !xs(so)) {
					for (lo = uo.delegateType || fo, Na.test(lo + fo) || (ro = ro.parentNode); ro; ro = ro.parentNode) go.push(ro), io = ro;
					io === (so.ownerDocument || rs) && go.push(io.defaultView || io.parentWindow || Zt)
				}
				for (oo = 0;
					(ro = go[oo++]) && !to.isPropagationStopped();) ho = ro, to.type = 1 < oo ? lo : uo.bindType || fo, (co = (Rs.get(ro, "events") || {})[to.type] && Rs.get(ro, "handle")) && co.apply(ro, no), (co = po && ro[po]) && co.apply && Ws(ro) && (to.result = co.apply(ro, no), !1 === to.result && to.preventDefault());
				return to.type = fo, ao || to.isDefaultPrevented() || uo._default && !1 !== uo._default.apply(go.pop(), no) || !Ws(so) || po && bs(so[fo]) && !xs(so) && ((io = so[po]) && (so[po] = null), ws.event.triggered = fo, to.isPropagationStopped() && ho.addEventListener(fo, La), so[fo](), to.isPropagationStopped() && ho.removeEventListener(fo, La), ws.event.triggered = void 0, io && (so[po] = io)), to.result
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
					oo = Rs.access(ao, no);
				oo || ao.addEventListener(to, so, !0), Rs.access(ao, no, (oo || 0) + 1)
			},
			teardown: function () {
				var ao = this.ownerDocument || this,
					oo = Rs.access(ao, no) - 1;
				oo ? Rs.access(ao, no, oo) : (ao.removeEventListener(to, so, !0), Rs.remove(ao, no))
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
		Ba = /^(?:input|select|textarea|keygen)/i;
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
				return this.name && !ws(this).is(":disabled") && Ba.test(this.nodeName) && !Ma.test(to) && (this.checked || !Ys.test(to))
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
	var Ia = /%20/g,
		Wa = /#.*$/,
		Ra = /([?&])_=[^&]*/,
		_a = /^(.*?):[ \t]*([^\r\n]*)$/gm,
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
			function so(So, Eo, ko, Do) {
				var No, Lo, jo, qo, Ho, Po = Eo;
				co || (co = !0, lo && Zt.clearTimeout(lo), ao = void 0, ro = Do || "", Co.readyState = 0 < So ? 4 : 0, No = 200 <= So && 300 > So || 304 === So, ko && (qo = ss(fo, Co, ko)), qo = as(fo, qo, Co, No), No ? (fo.ifModified && ((Ho = Co.getResponseHeader("Last-Modified")) && (ws.lastModified[oo] = Ho), (Ho = Co.getResponseHeader("etag")) && (ws.etag[oo] = Ho)), 204 === So || "HEAD" === fo.type ? Po = "nocontent" : 304 === So ? Po = "notmodified" : (Po = qo.state, Lo = qo.data, No = !(jo = qo.error))) : (jo = Po, !So && Po || (Po = "error", 0 > So && (So = 0))), Co.status = So, Co.statusText = (Eo || Po) + "", No ? bo.resolveWith(mo, [Lo, Po, Co]) : bo.rejectWith(mo, [Co, Po, jo]), Co.statusCode(vo), vo = void 0, uo && yo.trigger(No ? "ajaxSuccess" : "ajaxError", [Co, fo, No ? Lo : jo]), xo.fireWith(mo, [Co, Po]), uo && (yo.trigger("ajaxComplete", [Co, fo]), --ws.active || ws.event.trigger("ajaxStop")))
			}
			"object" == typeof to && (no = to, to = void 0), no = no || {};
			var ao, oo, ro, io, lo, po, co, uo, ho, go, fo = ws.ajaxSetup({}, no),
				mo = fo.context || fo,
				yo = fo.context && (mo.nodeType || mo.jquery) ? ws(mo) : ws.event,
				bo = ws.Deferred(),
				xo = ws.Callbacks("once memory"),
				vo = fo.statusCode || {},
				Ao = {},
				wo = {},
				To = "canceled",
				Co = {
					readyState: 0,
					getResponseHeader: function (So) {
						var Eo;
						if (co) {
							if (!io)
								for (io = {}; Eo = _a.exec(ro);) io[Eo[1].toLowerCase()] = Eo[2];
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
						return null == co && (fo.mimeType = So), this
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
			if (bo.promise(Co), fo.url = ((to || fo.url || ja.href) + "").replace(Fa, ja.protocol + "//"), fo.type = no.method || no.type || fo.method || fo.type, fo.dataTypes = (fo.dataType || "*").toLowerCase().match(Hs) || [""], null == fo.crossDomain) {
				po = rs.createElement("a");
				try {
					po.href = fo.url, po.href = po.href, fo.crossDomain = Qa.protocol + "//" + Qa.host != po.protocol + "//" + po.host
				} catch (So) {
					fo.crossDomain = !0
				}
			}
			if (fo.data && fo.processData && "string" != typeof fo.data && (fo.data = ws.param(fo.data, fo.traditional)), ts($a, fo, no, Co), co) return Co;
			for (ho in (uo = ws.event && fo.global) && 0 == ws.active++ && ws.event.trigger("ajaxStart"), fo.type = fo.type.toUpperCase(), fo.hasContent = !Ua.test(fo.type), oo = fo.url.replace(Wa, ""), fo.hasContent ? fo.data && fo.processData && 0 === (fo.contentType || "").indexOf("application/x-www-form-urlencoded") && (fo.data = fo.data.replace(Ia, "+")) : (go = fo.url.slice(oo.length), fo.data && (fo.processData || "string" == typeof fo.data) && (oo += (Ha.test(oo) ? "&" : "?") + fo.data, delete fo.data), !1 === fo.cache && (oo = oo.replace(Ra, "$1"), go = (Ha.test(oo) ? "&" : "?") + "_=" + qa++ + go), fo.url = oo + go), fo.ifModified && (ws.lastModified[oo] && Co.setRequestHeader("If-Modified-Since", ws.lastModified[oo]), ws.etag[oo] && Co.setRequestHeader("If-None-Match", ws.etag[oo])), (fo.data && fo.hasContent && !1 !== fo.contentType || no.contentType) && Co.setRequestHeader("Content-Type", fo.contentType), Co.setRequestHeader("Accept", fo.dataTypes[0] && fo.accepts[fo.dataTypes[0]] ? fo.accepts[fo.dataTypes[0]] + ("*" === fo.dataTypes[0] ? "" : ", " + Ga + "; q=0.01") : fo.accepts["*"]), fo.headers) Co.setRequestHeader(ho, fo.headers[ho]);
			if (fo.beforeSend && (!1 === fo.beforeSend.call(mo, Co, fo) || co)) return Co.abort();
			if (To = "abort", xo.add(fo.complete), Co.done(fo.success), Co.fail(fo.error), ao = ts(Xa, fo, no, Co)) {
				if (Co.readyState = 1, uo && yo.trigger("ajaxSend", [Co, fo]), co) return Co;
				fo.async && 0 < fo.timeout && (lo = Zt.setTimeout(function () {
					Co.abort("timeout")
				}, fo.timeout));
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
		return no || (ys.createHTMLDocument ? ((ao = (no = rs.implementation.createHTMLDocument("")).createElement("base")).href = rs.location.href, no.head.appendChild(ao)) : no = rs), oo = Ds.exec(to), ro = !so && [], oo ? [no.createElement(oo[1])] : (oo = Tn([to], no, ro), ro && ro.length && ws(ro).remove(), ws.merge([], oo.childNodes))
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
				go = {};
			"static" === uo && (to.style.position = "relative"), lo = ho.offset(), ro = ws.css(to, "top"), po = ws.css(to, "left"), (co = ("absolute" === uo || "fixed" === uo) && -1 < (ro + po).indexOf("auto")) ? (io = (ao = ho.position()).top, oo = ao.left) : (io = parseFloat(ro) || 0, oo = parseFloat(po) || 0), bs(no) && (no = no.call(to, so, ws.extend({}, lo))), null != no.top && (go.top = no.top - lo.top + io), null != no.left && (go.left = no.left - lo.left + oo), "using" in no ? no.using.call(to, go) : ho.css(go)
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
		if ("string" == typeof no && (so = to[no], no = to, to = so), bs(to)) return ao = ds.call(arguments, 2), oo = function () {
			return to.apply(no || this, ao.concat(ds.call(arguments)))
		}, oo.guid = to.guid = to.guid || ws.guid++, oo
	}, ws.holdReady = function (to) {
		to ? ws.readyWait++ : ws.ready(!0)
	}, ws.isArray = Array.isArray, ws.parseJSON = JSON.parse, ws.nodeName = an, ws.isFunction = bs, ws.isWindow = xs, ws.camelCase = gn, ws.type = nn, ws.now = Date.now, ws.isNumeric = function (to) {
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
	}), ! function (Zt) {
		var en = navigator.userAgent;
		Zt.HTMLPictureElement && /ecko/.test(en) && en.match(/rv\:(\d+)/) && 45 > RegExp.$1 && addEventListener("resize", function () {
			var tn, nn = document.createElement("source"),
				sn = function (ln) {
					var pn, cn, un = ln.parentNode;
					"PICTURE" === un.nodeName.toUpperCase() ? (pn = nn.cloneNode(), un.insertBefore(pn, un.firstElementChild), setTimeout(function () {
						un.removeChild(pn)
					})) : (!ln._pfLastSize || ln.offsetWidth > ln._pfLastSize) && (ln._pfLastSize = ln.offsetWidth, cn = ln.sizes, ln.sizes += ",100vw", setTimeout(function () {
						ln.sizes = cn
					}))
				},
				an = function () {
					var ln, pn = document.querySelectorAll("picture > img, img[srcset][sizes]");
					for (ln = 0; ln < pn.length; ln++) sn(pn[ln])
				},
				on = function () {
					clearTimeout(tn), tn = setTimeout(an, 99)
				},
				rn = Zt.matchMedia && matchMedia("(orientation: landscape)"),
				dn = function () {
					on(), rn && rn.addListener && rn.addListener(on)
				};
			return nn.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? dn() : document.addEventListener("DOMContentLoaded", dn), on
		}())
	}(window),
	function (Zt, en, tn) {
		"use strict";

		function nn(ns) {
			return " " === ns || "\t" === ns || "\n" === ns || "\f" === ns || "\r" === ns
		}

		function an() {
			In = !1, _n = Zt.devicePixelRatio, Wn = {}, Rn = {}, bn.DPR = _n || 1, zn.width = Math.max(Zt.innerWidth || 0, Sn.clientWidth), zn.height = Math.max(Zt.innerHeight || 0, Sn.clientHeight), zn.vw = zn.width / 100, zn.vh = zn.height / 100, yn = [zn.height, zn.width, _n].join("-"), zn.em = bn.getEmValue(), zn.rem = zn.em
		}

		function on(ns, ss, as, os) {
			var rs, is, ds, ls;
			return "saveData" === kn.algorithm ? 2.7 < ns ? ls = as + 1 : (is = ss - as, rs = Math.pow(ns - .6, 1.5), ds = is * rs, os && (ds += .1 * rs), ls = ns + ds) : ls = 1 < as ? Math.sqrt(ns * ss) : ns, ls > as
		}

		function rn(ns) {
			var ss, as = bn.getSet(ns),
				os = !1;
			"pending" !== as && (os = yn, as && (ss = bn.setRes(as), bn.applySetCandidate(ss, ns))), ns[bn.ns].evaled = os
		}

		function dn(ns, ss) {
			return ns.res - ss.res
		}

		function ln(ns, ss, as) {
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
			var as, os, rs, is, ds = ns.getElementsByTagName("source");
			for (as = 0, os = ds.length; os > as; as++) rs = ds[as], rs[bn.ns] = !0, is = rs.getAttribute("srcset"), is && ss.push({
				srcset: is,
				media: rs.getAttribute("media"),
				type: rs.getAttribute("type"),
				sizes: rs.getAttribute("sizes")
			})
		}

		function un(ns, ss) {
			function as(fs) {
				var ms, ys = fs.exec(ns.substring(hs));
				return ys ? (ms = ys[0], hs += ms.length, ms) : void 0
			}

			function os() {
				var fs, ms, ys, bs, xs, vs, As, ws, Ts, Cs = !1,
					Ss = {};
				for (bs = 0; bs < ds.length; bs++) xs = ds[bs], vs = xs[xs.length - 1], As = xs.substring(0, xs.length - 1), ws = parseInt(As, 10), Ts = parseFloat(As), Vn.test(As) && "w" === vs ? ((fs || ms) && (Cs = !0), 0 === ws ? Cs = !0 : fs = ws) : Yn.test(As) && "x" === vs ? ((fs || ms || ys) && (Cs = !0), 0 > Ts ? Cs = !0 : ms = Ts) : Vn.test(As) && "h" === vs ? ((ys || ms) && (Cs = !0), 0 === ws ? Cs = !0 : ys = ws) : Cs = !0;
				Cs || (Ss.url = is, fs && (Ss.w = fs), ms && (Ss.d = ms), ys && (Ss.h = ys), ys || ms || fs || (Ss.d = 1), 1 === Ss.d && (ss.has1x = !0), Ss.set = ss, gs.push(Ss))
			}

			function rs() {
				for (as($n), ls = "", ps = "in descriptor";;) {
					if (cs = ns.charAt(hs), "in descriptor" == ps) {
						if (nn(cs)) ls && (ds.push(ls), ls = "", ps = "after descriptor");
						else {
							if ("," === cs) return hs += 1, ls && ds.push(ls), void os();
							if ("(" === cs) ls += cs, ps = "in parens";
							else {
								if ("" === cs) return ls && ds.push(ls), void os();
								ls += cs
							}
						}
					} else if ("in parens" == ps) {
						if (")" === cs) ls += cs, ps = "in descriptor";
						else {
							if ("" === cs) return ds.push(ls), void os();
							ls += cs
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
			for (var is, ds, ls, ps, cs, us = ns.length, hs = 0, gs = [];;) {
				if (as(Xn), hs >= us) return gs;
				is = as(Gn), ds = [], "," === is.slice(-1) ? (is = is.replace(Qn, ""), os()) : rs()
			}
		}

		function hn(ns) {
			function ss(hs) {
				function gs() {
					ys && (bs.push(ys), ys = "")
				}

				function fs() {
					bs[0] && (xs.push(bs), bs = [])
				}
				for (var ms, ys = "", bs = [], xs = [], vs = 0, As = 0, ws = !1;;) {
					if (ms = hs.charAt(As), "" === ms) return gs(), fs(), xs;
					if (ws) {
						if ("*" === ms && "/" === hs[As + 1]) {
							ws = !1, As += 2, gs();
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
								gs(), As += 1;
								continue
							}
							ms = " "
						} else if ("(" === ms) vs += 1;
						else if (")" === ms) vs -= 1;
						else {
							if ("," === ms) {
								gs(), fs(), As += 1;
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
			var os, rs, is, ds, ls, ps, cs = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
				us = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
			for (rs = ss(ns), is = rs.length, os = 0; is > os; os++)
				if (ds = rs[os], ls = ds[ds.length - 1], as(ls)) {
					if (ps = ls, ds.pop(), 0 === ds.length) return ps;
					if (ds = ds.join(" "), bn.matchesMedia(ds)) return ps
				}
			return "100vw"
		}
		en.createElement("picture");
		var gn, fn, mn, yn, bn = {},
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
			Dn = "data-pfsrc",
			Nn = Dn + "set",
			Ln = navigator.userAgent,
			jn = /rident/.test(Ln) || /ecko/.test(Ln) && Ln.match(/rv\:(\d+)/) && 35 < RegExp.$1,
			qn = "currentSrc",
			Hn = /\s+\+?\d+(e\d+)?w/,
			Pn = /(\([^)]+\))?\s*(.+)/,
			On = Zt.picturefillCFG,
			Bn = "font-size:100%!important;",
			In = !0,
			Wn = {},
			Rn = {},
			_n = Zt.devicePixelRatio,
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
					if (!(os in Wn))
						if (Wn[os] = !1, rs && (is = os.match(ns))) Wn[os] = is[1] * zn[is[2]];
						else try {
							Wn[os] = new Function("e", as(os))(zn)
						} catch (ds) {}
					return Wn[os]
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
		for (gn = Zt.console && console.warn ? function (ns) {
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
			}() : xn = !0, bn.selShort = "picture>img,img[srcset]", bn.sel = bn.selShort, bn.cfg = kn, bn.DPR = _n || 1, bn.u = zn, bn.types = En, bn.setSize = vn, bn.makeUrl = Jn(function (ns) {
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
				if (!fn && (ns = en.body)) {
					var ss = en.createElement("div"),
						as = Sn.style.cssText,
						os = ns.style.cssText;
					ss.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", Sn.style.cssText = Bn, ns.style.cssText = Bn, ns.appendChild(ss), fn = ss.offsetWidth, ns.removeChild(ss), fn = parseFloat(fn, 10), Sn.style.cssText = as, ns.style.cssText = os
				}
				return fn || 16
			}, bn.calcListLength = function (ns) {
				if (!(ns in Rn) || kn.uT) {
					var ss = bn.calcLength(hn(ns));
					Rn[ns] = ss ? ss : zn.width
				}
				return Rn[ns]
			}, bn.setRes = function (ns) {
				var ss;
				if (ns) {
					ss = bn.parseSet(ns);
					for (var as = 0, os = ss.length; os > as; as++) es(ss[as], ns.sizes)
				}
				return ss
			}, bn.setRes.res = es, bn.applySetCandidate = function (ns, ss) {
				if (ns.length) {
					var as, os, rs, is, ds, ls, ps, cs, us, hs = ss[bn.ns],
						gs = bn.DPR;
					if (ls = hs.curSrc || ss[qn], ps = hs.curCan || ln(ss, ls, ns[0].set), ps && ps.set === ns[0].set && (us = jn && !ss.complete && ps.res - .1 > gs, us || (ps.cached = !0, ps.res >= gs && (ds = ps))), !ds)
						for (ns.sort(dn), is = ns.length, ds = ns[is - 1], os = 0; is > os; os++)
							if (as = ns[os], as.res >= gs) {
								rs = os - 1, ds = ns[rs] && (us || ls !== bn.makeUrl(as.url)) && on(ns[rs].res, as.res, gs, ns[rs].cached) ? ns[rs] : as;
								break
							}
					ds && (cs = bn.makeUrl(ds.url), hs.curSrc = cs, hs.curCan = ds, cs !== ls && bn.setSrc(ss, ds), bn.setSize(ss))
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
				var os, rs, is, ds, ls = ss && "PICTURE" === ss.nodeName.toUpperCase(),
					ps = ns[bn.ns];
				(ps.src === tn || as.src) && (ps.src = wn.call(ns, "src"), ps.src ? Tn.call(ns, Dn, ps.src) : Cn.call(ns, Dn)), (ps.srcset === tn || as.srcset || !bn.supSrcset || ns.srcset) && (os = wn.call(ns, "srcset"), ps.srcset = os, ds = !0), ps.sets = [], ls && (ps.pic = !0, cn(ss, ps.sets)), ps.srcset ? (rs = {
					srcset: ps.srcset,
					sizes: wn.call(ns, "sizes")
				}, ps.sets.push(rs), is = (mn || ps.src) && Hn.test(ps.srcset || ""), is || !ps.src || pn(ps.src, rs) || rs.has1x || (rs.srcset += ", " + ps.src, rs.cands.push({
					url: ps.src,
					d: 1,
					set: rs
				}))) : ps.src && ps.sets.push({
					srcset: ps.src,
					sizes: null
				}), ps.curCan = null, ps.curSrc = tn, ps.supported = !(ls || rs && !bn.supSrcset || is && !bn.supSizes), ds && bn.supSrcset && !ps.supported && (os ? (Tn.call(ns, Nn, os), ns.srcset = "") : Cn.call(ns, Nn)), ps.supported && !ps.srcset && (!ps.src && ns.src || ns.src !== bn.makeUrl(ps.src)) && (null === ps.src ? ns.removeAttribute("src") : ns.src = ps.src), ps.parsed = !0
			}, bn.fillImg = function (ns, ss) {
				var as, os = ss.reselect || ss.reevaluate;
				ns[bn.ns] || (ns[bn.ns] = {}), as = ns[bn.ns], (os || as.evaled !== yn) && ((!as.parsed || ss.reevaluate) && bn.parseSets(ns, ns.parentNode, ss), as.supported ? as.evaled = yn : rn(ns))
			}, bn.setupRun = function () {
				(!Fn || In || _n !== Zt.devicePixelRatio) && an()
			}, bn.supPicture ? (ts = vn, bn.fillImg = vn) : ! function () {
				var ns, ss = Zt.attachEvent ? /d$|^c/ : /d$|^c|^i/,
					as = function () {
						var ls = en.readyState || "";
						os = setTimeout(as, "loading" === ls ? 200 : 999), en.body && (bn.fillImgs(), ns = ns || ss.test(ls), ns && clearTimeout(os))
					},
					os = setTimeout(as, en.body ? 9 : 99),
					is = Sn.clientHeight;
				Kn(Zt, "resize", function (ls, ps) {
					var cs, us, hs = function () {
						var gs = new Date - us;
						ps > gs ? cs = setTimeout(hs, ps - gs) : (cs = null, ls())
					};
					return function () {
						us = new Date, cs || (cs = setTimeout(hs, ps))
					}
				}(function () {
					In = Math.max(Zt.innerWidth || 0, Sn.clientWidth) !== zn.width || Sn.clientHeight !== is, is = Sn.clientHeight, In && bn.fillImgs()
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
					var ln;
					window.addEventListener("resize", nn, !1), window.addEventListener("orientationchange", nn, !1), window.MutationObserver ? (ln = new MutationObserver(nn), ln.observe(document.documentElement, {
						childList: !0,
						subtree: !0,
						attributes: !0
					}), sn = function () {
						try {
							ln.disconnect(), window.removeEventListener("resize", nn, !1), window.removeEventListener("orientationchange", nn, !1)
						} catch (pn) {}
					}) : (document.documentElement.addEventListener("DOMSubtreeModified", nn, !1), sn = function () {
						document.documentElement.removeEventListener("DOMSubtreeModified", nn, !1), window.removeEventListener("resize", nn, !1), window.removeEventListener("orientationchange", nn, !1)
					})
				},
				on = function (ln) {
					function pn(gn) {
						var fn;
						return void 0 === gn.protocol ? (fn = document.createElement("a"), fn.href = gn) : fn = gn, fn.protocol.replace(/:/g, "") + fn.host
					}
					var cn, un, hn;
					return window.XMLHttpRequest && (cn = new XMLHttpRequest, un = pn(location), hn = pn(ln), cn = void 0 === cn.withCredentials && "" !== hn && hn != un ? XDomainRequest || void 0 : XMLHttpRequest), cn
				},
				rn = "http://www.w3.org/1999/xlink";
			en = function () {
				function ln() {
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
							Dn;
						Sn.onload = null, kn.innerHTML = Sn.responseText, Dn = kn.getElementsByTagName("svg")[0], Dn && (Dn.setAttribute("aria-hidden", "true"), Dn.style.position = "absolute", Dn.style.width = 0, Dn.style.height = 0, Dn.style.overflow = "hidden", En.insertBefore(Dn, En.firstChild)), ln()
					}
				}

				function un(Sn) {
					return function () {
						Sn.onerror = null, Sn.ontimeout = null, ln()
					}
				}
				var hn, gn, mn, yn, bn, xn = 0,
					vn, An, wn, Tn, Cn;
				for (sn(), Tn = document.getElementsByTagName("use"), bn = 0; bn < Tn.length; bn += 1) {
					try {
						gn = Tn[bn].getBoundingClientRect()
					} catch (Sn) {
						gn = !1
					}
					yn = Tn[bn].getAttribute("href") || Tn[bn].getAttributeNS(rn, "href") || Tn[bn].getAttribute("xlink:href"), wn = yn && yn.split ? yn.split("#") : ["", ""], hn = wn[0], mn = wn[1], vn = gn && 0 === gn.left && 0 === gn.right && 0 === gn.top && 0 === gn.bottom, gn && 0 === gn.width && 0 === gn.height && !vn ? ("", Tn[bn].hasAttribute("href") && Tn[bn].setAttributeNS(rn, "xlink:href", yn), hn.length && (Cn = Zt[hn], !0 !== Cn && setTimeout(pn({
						useEl: Tn[bn],
						base: hn,
						hash: mn
					}), 0), Cn == void 0 && (An = on(hn), An != void 0 && (Cn = new An, Zt[hn] = Cn, Cn.onload = cn(Cn), Cn.onerror = un(Cn), Cn.ontimeout = un(Cn), Cn.open("GET", hn), Cn.send(), xn += 1)))) : vn ? hn.length && Zt[hn] && setTimeout(pn({
						useEl: Tn[bn],
						base: hn,
						hash: mn
					}), 0) : Zt[hn] === void 0 ? Zt[hn] = !0 : Zt[hn].onload && (Zt[hn].abort(), delete Zt[hn].onload, Zt[hn] = !0)
				}
				Tn = "", xn += 1, ln()
			};
			var dn;
			dn = function () {
				window.removeEventListener("load", dn, !1), tn = setTimeout(en, 0)
			}, "complete" === document.readyState ? dn() : window.addEventListener("load", dn, !1)
		}
	}();
