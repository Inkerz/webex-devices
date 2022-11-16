/*! For license information please see jibb_WebexXapi.js.LICENSE.txt */
!(function (t, e) {
	"object" == typeof exports && "object" == typeof module
		? (module.exports = e(require("xapi")))
		: "function" == typeof define && define.amd
		? define(["xapi"], e)
		: "object" == typeof exports
		? (exports.JIBB = e(require("xapi")))
		: (t.JIBB = e(t.xapi))
})(global, (t) =>
	(() => {
		"use strict"
		var e,
			r = {
				9491: (t) => {
					t.exports = require("assert")
				},
				4300: (t) => {
					t.exports = require("buffer")
				},
				2361: (t) => {
					t.exports = require("events")
				},
				7147: (t) => {
					t.exports = require("fs")
				},
				8188: (t) => {
					t.exports = require("module")
				},
				2037: (t) => {
					t.exports = require("os")
				},
				1017: (t) => {
					t.exports = require("path")
				},
				2781: (t) => {
					t.exports = require("stream")
				},
				1576: (t) => {
					t.exports = require("string_decoder")
				},
				6224: (t) => {
					t.exports = require("tty")
				},
				7310: (t) => {
					t.exports = require("url")
				},
				3837: (t) => {
					t.exports = require("util")
				},
				6144: (t) => {
					t.exports = require("vm")
				},
				1267: (t) => {
					t.exports = require("worker_threads")
				},
				8994: (e) => {
					e.exports = t
				},
			},
			n = {}
		function o(t) {
			var e = n[t]
			if (void 0 !== e) return e.exports
			var i = (n[t] = { exports: {} })
			return r[t](i, i.exports, o), i.exports
		}
		;(o.m = r),
			(o.n = (t) => {
				var e = t && t.__esModule ? () => t.default : () => t
				return o.d(e, { a: e }), e
			}),
			(o.d = (t, e) => {
				for (var r in e) o.o(e, r) && !o.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: e[r] })
			}),
			(o.f = {}),
			(o.e = (t) => Promise.all(Object.keys(o.f).reduce((e, r) => (o.f[r](t, e), e), []))),
			(o.u = (t) => t + ".jibb_WebexXapi.js"),
			(o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
			(o.r = (t) => {
				"undefined" != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
					Object.defineProperty(t, "__esModule", { value: !0 })
			}),
			(e = { 179: 1 }),
			(o.f.require = (t, r) => {
				e[t] ||
					((t) => {
						var r = t.modules,
							n = t.ids,
							i = t.runtime
						for (var a in r) o.o(r, a) && (o.m[a] = r[a])
						i && i(o)
						for (var c = 0; c < n.length; c++) e[n[c]] = 1
					})(require("./" + o.u(t)))
			})
		var i = {}
		return (
			(() => {
				o.d(i, { default: () => Se })
				var t = {}
				o.r(t),
					o.d(t, {
						createMeeting: () => jt,
						createShare: () => $t,
						createTemporaryShare: () => Lt,
						deleteMeeting: () => Gt,
						deleteMeetingImages: () => Ot,
						deleteShare: () => te,
						deleteShareMe: () => oe,
						endMeeting: () => Bt,
						getListShare: () => Vt,
						getListShareMe: () => re,
						getMeetingDetails: () => Jt,
						getMeetingImage: () => It,
						getMeetingImages: () => Ut,
						getMeetingList: () => Dt,
						getMeetingToken: () => Ft,
						getMeetingTokenFromTempShareId: () => Et,
						isMeetingOwner: () => zt,
						startMeeting: () => Rt,
						updateMeeting: () => Kt,
					})
				var e = {}
				function r(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r]
						;(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							"value" in n && (n.writable = !0),
							Object.defineProperty(t, n.key, n)
					}
				}
				o.r(e),
					o.d(e, {
						getCameraList: () => pe,
						getCameraPreview: () => fe,
						getClientStatusList: () => je,
						sendMessage: () => ge,
						setRuntimeConfig: () => be,
						startStream: () => ye,
						stopStream: () => de,
					})
				var n = new ((function () {
					function t() {
						!(function (t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						})(this, t),
							(this.apiBaseURL = "https://api.jibb.ai")
					}
					var e, n
					return (
						(e = t),
						(n = [
							{
								key: "setApiBaseURL",
								value: function (t) {
									this.apiBaseURL = t
								},
							},
						]) && r(e.prototype, n),
						Object.defineProperty(e, "prototype", { writable: !1 }),
						t
					)
				})())()
				function a(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r]
						;(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							"value" in n && (n.writable = !0),
							Object.defineProperty(t, n.key, n)
					}
				}
				var c = new ((function () {
					function t() {
						!(function (t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						})(this, t)
					}
					var e, r
					return (
						(e = t),
						(r = [
							{ key: "error", value: function () {} },
							{ key: "debug", value: function () {} },
							{ key: "warn", value: function () {} },
							{ key: "info", value: function () {} },
							{ key: "setLevel", value: function () {} },
						]) && a(e.prototype, r),
						Object.defineProperty(e, "prototype", { writable: !1 }),
						t
					)
				})())()
				function u(t) {
					this.message = t
				}
				;(u.prototype = new Error()), (u.prototype.name = "InvalidCharacterError")
				var s =
					("undefined" != typeof window && window.atob && window.atob.bind(window)) ||
					function (t) {
						var e = String(t).replace(/=+$/, "")
						if (e.length % 4 == 1) throw new u("'atob' failed: The string to be decoded is not correctly encoded.")
						for (
							var r, n, o = 0, i = 0, a = "";
							(n = e.charAt(i++));
							~n && ((r = o % 4 ? 64 * r + n : n), o++ % 4)
								? (a += String.fromCharCode(255 & (r >> ((-2 * o) & 6))))
								: 0
						)
							n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n)
						return a
					}
				function p(t) {
					var e = t.replace(/-/g, "+").replace(/_/g, "/")
					switch (e.length % 4) {
						case 0:
							break
						case 2:
							e += "=="
							break
						case 3:
							e += "="
							break
						default:
							throw "Illegal base64url string!"
					}
					try {
						return (function (t) {
							return decodeURIComponent(
								s(t).replace(/(.)/g, function (t, e) {
									var r = e.charCodeAt(0).toString(16).toUpperCase()
									return r.length < 2 && (r = "0" + r), "%" + r
								})
							)
						})(e)
					} catch (t) {
						return s(e)
					}
				}
				function l(t) {
					this.message = t
				}
				;(l.prototype = new Error()), (l.prototype.name = "InvalidTokenError")
				const f = function (t, e) {
					if ("string" != typeof t) throw new l("Invalid token specified")
					var r = !0 === (e = e || {}).header ? 0 : 1
					try {
						return JSON.parse(p(t.split(".")[r]))
					} catch (t) {
						throw new l("Invalid token specified: " + t.message)
					}
				}
				function h(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}
				function y(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r]
						;(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							"value" in n && (n.writable = !0),
							Object.defineProperty(t, n.key, n)
					}
				}
				function v(t, e, r) {
					return e && y(t.prototype, e), r && y(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t
				}
				var d = "USER",
					m = "ADMIN",
					g = "SUPERADMIN",
					w = (function () {
						function t(e) {
							h(this, t),
								(this.claims = f(e)),
								(this.expiryTime = new Date(1e3 * this.claims.exp)),
								(this.owner = this.claims.data.owner),
								(this.meetindId = this.claims.data.meeting_id),
								(this.title = this.claims.data.title),
								(this.capacity = this.claims.data.capacity),
								(this.permission = this.claims.data.permission),
								(this.meetingType = this.claims.data.meeting_type),
								(this.isTemporary = this.claims.data.is_temporary)
						}
						return (
							v(t, [
								{
									key: "getSecondsUntilExpiry",
									value: function () {
										return this.expiryTime - Date.now() - 60
									},
								},
								{
									key: "isExpired",
									value: function () {
										return this.getSecondsUntilExpiry() <= 0
									},
								},
							]),
							t
						)
					})(),
					b = (function () {
						function t(e) {
							h(this, t),
								(this.token = e),
								(this.claims = f(e)),
								(this.expiryTime = new Date(1e3 * this.claims.exp)),
								(this.email = this.claims.sub)
						}
						return (
							v(t, [
								{
									key: "getSecondsUntilExpiry",
									value: function () {
										return this.expiryTime - Date.now() - 60
									},
								},
								{
									key: "isExpired",
									value: function () {
										return this.getSecondsUntilExpiry() <= 0
									},
								},
								{
									key: "getUserId",
									value: function () {
										var t, e
										return null === (t = this.claims) || void 0 === t || null === (e = t.data) || void 0 === e
											? void 0
											: e.user_id
									},
								},
							]),
							t
						)
					})(),
					x = o(8994),
					j = o.n(x)
				function k(t) {
					return (
						(k =
							"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
								? function (t) {
										return typeof t
								  }
								: function (t) {
										return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
											? "symbol"
											: typeof t
								  }),
						k(t)
					)
				}
				function L(t, e) {
					;(null == e || e > t.length) && (e = t.length)
					for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
					return n
				}
				function T() {
					T = function () {
						return t
					}
					var t = {},
						e = Object.prototype,
						r = e.hasOwnProperty,
						n =
							Object.defineProperty ||
							function (t, e, r) {
								t[e] = r.value
							},
						o = "function" == typeof Symbol ? Symbol : {},
						i = o.iterator || "@@iterator",
						a = o.asyncIterator || "@@asyncIterator",
						c = o.toStringTag || "@@toStringTag"
					function u(t, e, r) {
						return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function (t, e, r) {
							return (t[e] = r)
						}
					}
					function s(t, e, r, o) {
						var i = e && e.prototype instanceof f ? e : f,
							a = Object.create(i.prototype),
							c = new S(o || [])
						return n(a, "_invoke", { value: x(t, r, c) }), a
					}
					function p(t, e, r) {
						try {
							return { type: "normal", arg: t.call(e, r) }
						} catch (t) {
							return { type: "throw", arg: t }
						}
					}
					t.wrap = s
					var l = {}
					function f() {}
					function h() {}
					function y() {}
					var v = {}
					u(v, i, function () {
						return this
					})
					var d = Object.getPrototypeOf,
						m = d && d(d(O([])))
					m && m !== e && r.call(m, i) && (v = m)
					var g = (y.prototype = f.prototype = Object.create(v))
					function w(t) {
						;["next", "throw", "return"].forEach(function (e) {
							u(t, e, function (t) {
								return this._invoke(e, t)
							})
						})
					}
					function b(t, e) {
						function o(n, i, a, c) {
							var u = p(t[n], t, i)
							if ("throw" !== u.type) {
								var s = u.arg,
									l = s.value
								return l && "object" == k(l) && r.call(l, "__await")
									? e.resolve(l.__await).then(
											function (t) {
												o("next", t, a, c)
											},
											function (t) {
												o("throw", t, a, c)
											}
									  )
									: e.resolve(l).then(
											function (t) {
												;(s.value = t), a(s)
											},
											function (t) {
												return o("throw", t, a, c)
											}
									  )
							}
							c(u.arg)
						}
						var i
						n(this, "_invoke", {
							value: function (t, r) {
								function n() {
									return new e(function (e, n) {
										o(t, r, e, n)
									})
								}
								return (i = i ? i.then(n, n) : n())
							},
						})
					}
					function x(t, e, r) {
						var n = "suspendedStart"
						return function (o, i) {
							if ("executing" === n) throw new Error("Generator is already running")
							if ("completed" === n) {
								if ("throw" === o) throw i
								return { value: void 0, done: !0 }
							}
							for (r.method = o, r.arg = i; ; ) {
								var a = r.delegate
								if (a) {
									var c = j(a, r)
									if (c) {
										if (c === l) continue
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg
								else if ("throw" === r.method) {
									if ("suspendedStart" === n) throw ((n = "completed"), r.arg)
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg)
								n = "executing"
								var u = p(t, e, r)
								if ("normal" === u.type) {
									if (((n = r.done ? "completed" : "suspendedYield"), u.arg === l)) continue
									return { value: u.arg, done: r.done }
								}
								"throw" === u.type && ((n = "completed"), (r.method = "throw"), (r.arg = u.arg))
							}
						}
					}
					function j(t, e) {
						var r = t.iterator[e.method]
						if (void 0 === r) {
							if (((e.delegate = null), "throw" === e.method)) {
								if (t.iterator.return && ((e.method = "return"), (e.arg = void 0), j(t, e), "throw" === e.method))
									return l
								;(e.method = "throw"), (e.arg = new TypeError("The iterator does not provide a 'throw' method"))
							}
							return l
						}
						var n = p(r, t.iterator, e.arg)
						if ("throw" === n.type) return (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l
						var o = n.arg
						return o
							? o.done
								? ((e[t.resultName] = o.value),
								  (e.next = t.nextLoc),
								  "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
								  (e.delegate = null),
								  l)
								: o
							: ((e.method = "throw"),
							  (e.arg = new TypeError("iterator result is not an object")),
							  (e.delegate = null),
							  l)
					}
					function L(t) {
						var e = { tryLoc: t[0] }
						1 in t && (e.catchLoc = t[1]),
							2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
							this.tryEntries.push(e)
					}
					function E(t) {
						var e = t.completion || {}
						;(e.type = "normal"), delete e.arg, (t.completion = e)
					}
					function S(t) {
						;(this.tryEntries = [{ tryLoc: "root" }]), t.forEach(L, this), this.reset(!0)
					}
					function O(t) {
						if (t) {
							var e = t[i]
							if (e) return e.call(t)
							if ("function" == typeof t.next) return t
							if (!isNaN(t.length)) {
								var n = -1,
									o = function e() {
										for (; ++n < t.length; ) if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e
										return (e.value = void 0), (e.done = !0), e
									}
								return (o.next = o)
							}
						}
						return { next: _ }
					}
					function _() {
						return { value: void 0, done: !0 }
					}
					return (
						(h.prototype = y),
						n(g, "constructor", { value: y, configurable: !0 }),
						n(y, "constructor", { value: h, configurable: !0 }),
						(h.displayName = u(y, c, "GeneratorFunction")),
						(t.isGeneratorFunction = function (t) {
							var e = "function" == typeof t && t.constructor
							return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
						}),
						(t.mark = function (t) {
							return (
								Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : ((t.__proto__ = y), u(t, c, "GeneratorFunction")),
								(t.prototype = Object.create(g)),
								t
							)
						}),
						(t.awrap = function (t) {
							return { __await: t }
						}),
						w(b.prototype),
						u(b.prototype, a, function () {
							return this
						}),
						(t.AsyncIterator = b),
						(t.async = function (e, r, n, o, i) {
							void 0 === i && (i = Promise)
							var a = new b(s(e, r, n, o), i)
							return t.isGeneratorFunction(r)
								? a
								: a.next().then(function (t) {
										return t.done ? t.value : a.next()
								  })
						}),
						w(g),
						u(g, c, "Generator"),
						u(g, i, function () {
							return this
						}),
						u(g, "toString", function () {
							return "[object Generator]"
						}),
						(t.keys = function (t) {
							var e = Object(t),
								r = []
							for (var n in e) r.push(n)
							return (
								r.reverse(),
								function t() {
									for (; r.length; ) {
										var n = r.pop()
										if (n in e) return (t.value = n), (t.done = !1), t
									}
									return (t.done = !0), t
								}
							)
						}),
						(t.values = O),
						(S.prototype = {
							constructor: S,
							reset: function (t) {
								if (
									((this.prev = 0),
									(this.next = 0),
									(this.sent = this._sent = void 0),
									(this.done = !1),
									(this.delegate = null),
									(this.method = "next"),
									(this.arg = void 0),
									this.tryEntries.forEach(E),
									!t)
								)
									for (var e in this)
										"t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
							},
							stop: function () {
								this.done = !0
								var t = this.tryEntries[0].completion
								if ("throw" === t.type) throw t.arg
								return this.rval
							},
							dispatchException: function (t) {
								if (this.done) throw t
								var e = this
								function n(r, n) {
									return (
										(a.type = "throw"), (a.arg = t), (e.next = r), n && ((e.method = "next"), (e.arg = void 0)), !!n
									)
								}
								for (var o = this.tryEntries.length - 1; o >= 0; --o) {
									var i = this.tryEntries[o],
										a = i.completion
									if ("root" === i.tryLoc) return n("end")
									if (i.tryLoc <= this.prev) {
										var c = r.call(i, "catchLoc"),
											u = r.call(i, "finallyLoc")
										if (c && u) {
											if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
											if (this.prev < i.finallyLoc) return n(i.finallyLoc)
										} else if (c) {
											if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
										} else {
											if (!u) throw new Error("try statement without catch or finally")
											if (this.prev < i.finallyLoc) return n(i.finallyLoc)
										}
									}
								}
							},
							abrupt: function (t, e) {
								for (var n = this.tryEntries.length - 1; n >= 0; --n) {
									var o = this.tryEntries[n]
									if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
										var i = o
										break
									}
								}
								i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null)
								var a = i ? i.completion : {}
								return (
									(a.type = t),
									(a.arg = e),
									i ? ((this.method = "next"), (this.next = i.finallyLoc), l) : this.complete(a)
								)
							},
							complete: function (t, e) {
								if ("throw" === t.type) throw t.arg
								return (
									"break" === t.type || "continue" === t.type
										? (this.next = t.arg)
										: "return" === t.type
										? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
										: "normal" === t.type && e && (this.next = e),
									l
								)
							},
							finish: function (t) {
								for (var e = this.tryEntries.length - 1; e >= 0; --e) {
									var r = this.tryEntries[e]
									if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), l
								}
							},
							catch: function (t) {
								for (var e = this.tryEntries.length - 1; e >= 0; --e) {
									var r = this.tryEntries[e]
									if (r.tryLoc === t) {
										var n = r.completion
										if ("throw" === n.type) {
											var o = n.arg
											E(r)
										}
										return o
									}
								}
								throw new Error("illegal catch attempt")
							},
							delegateYield: function (t, e, r) {
								return (
									(this.delegate = { iterator: O(t), resultName: e, nextLoc: r }),
									"next" === this.method && (this.arg = void 0),
									l
								)
							},
						}),
						t
					)
				}
				function E(t, e, r, n, o, i, a) {
					try {
						var c = t[i](a),
							u = c.value
					} catch (t) {
						return void r(t)
					}
					c.done ? e(u) : Promise.resolve(u).then(n, o)
				}
				function S(t) {
					return function () {
						var e = this,
							r = arguments
						return new Promise(function (n, o) {
							var i = t.apply(e, r)
							function a(t) {
								E(i, n, o, a, c, "next", t)
							}
							function c(t) {
								E(i, n, o, a, c, "throw", t)
							}
							a(void 0)
						})
					}
				}
				function O(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r]
						;(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							"value" in n && (n.writable = !0),
							Object.defineProperty(t, n.key, n)
					}
				}
				function _(t, e) {
					!(function (t, e) {
						if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
					})(t, e),
						e.add(t)
				}
				function U(t, e, r) {
					if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance")
					return r
				}
				var P = new WeakSet(),
					I = new WeakSet(),
					C = (function () {
						function t() {
							!(function (t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							})(this, t),
								_(this, I),
								_(this, P)
						}
						var e, r, n, o, i, a, c
						return (
							(e = t),
							(r = [
								{
									key: "get",
									value:
										((c = S(
											T().mark(function t(e, r) {
												var n
												return T().wrap(
													function (t) {
														for (;;)
															switch ((t.prev = t.next)) {
																case 0:
																	return (
																		(t.next = 2),
																		j().Command.HttpClient.Get({
																			AllowInsecureHTTPS: "True",
																			Header: U(this, P, R).call(this, r),
																			Url: e,
																			ResultBody: "PlainText",
																		})
																	)
																case 2:
																	return (n = t.sent), t.abrupt("return", U(this, I, A).call(this, n))
																case 4:
																case "end":
																	return t.stop()
															}
													},
													t,
													this
												)
											})
										)),
										function (t, e) {
											return c.apply(this, arguments)
										}),
								},
								{
									key: "post",
									value:
										((a = S(
											T().mark(function t(e) {
												var r,
													n,
													o,
													i = arguments
												return T().wrap(
													function (t) {
														for (;;)
															switch ((t.prev = t.next)) {
																case 0:
																	return (
																		(r = i.length > 1 && void 0 !== i[1] ? i[1] : {}),
																		(n = i.length > 2 && void 0 !== i[2] ? i[2] : {}),
																		(t.next = 4),
																		j().Command.HttpClient.Post(
																			{
																				AllowInsecureHTTPS: "True",
																				Header: U(this, P, R).call(this, n),
																				Url: e,
																				ResultBody: "PlainText",
																			},
																			JSON.stringify(r)
																		)
																	)
																case 4:
																	return (o = t.sent), t.abrupt("return", U(this, I, A).call(this, o))
																case 6:
																case "end":
																	return t.stop()
															}
													},
													t,
													this
												)
											})
										)),
										function (t) {
											return a.apply(this, arguments)
										}),
								},
								{
									key: "patch",
									value:
										((i = S(
											T().mark(function t(e) {
												var r,
													n,
													o,
													i = arguments
												return T().wrap(
													function (t) {
														for (;;)
															switch ((t.prev = t.next)) {
																case 0:
																	return (
																		(r = i.length > 1 && void 0 !== i[1] ? i[1] : {}),
																		(n = i.length > 2 && void 0 !== i[2] ? i[2] : {}),
																		(t.next = 4),
																		j().Command.HttpClient.Patch(
																			{
																				AllowInsecureHTTPS: "True",
																				Header: U(this, P, R).call(this, n),
																				Url: e,
																				ResultBody: "PlainText",
																			},
																			JSON.stringify(r)
																		)
																	)
																case 4:
																	return (o = t.sent), t.abrupt("return", U(this, I, A).call(this, o))
																case 6:
																case "end":
																	return t.stop()
															}
													},
													t,
													this
												)
											})
										)),
										function (t) {
											return i.apply(this, arguments)
										}),
								},
								{
									key: "put",
									value:
										((o = S(
											T().mark(function t(e) {
												var r,
													n,
													o,
													i = arguments
												return T().wrap(
													function (t) {
														for (;;)
															switch ((t.prev = t.next)) {
																case 0:
																	return (
																		(r = i.length > 1 && void 0 !== i[1] ? i[1] : {}),
																		(n = i.length > 2 && void 0 !== i[2] ? i[2] : {}),
																		(t.next = 4),
																		j().Command.HttpClient.Put(
																			{
																				AllowInsecureHTTPS: "True",
																				Header: U(this, P, R).call(this, n),
																				Url: e,
																				ResultBody: "PlainText",
																			},
																			JSON.stringify(r)
																		)
																	)
																case 4:
																	return (o = t.sent), t.abrupt("return", U(this, I, A).call(this, o))
																case 6:
																case "end":
																	return t.stop()
															}
													},
													t,
													this
												)
											})
										)),
										function (t) {
											return o.apply(this, arguments)
										}),
								},
								{
									key: "delete",
									value:
										((n = S(
											T().mark(function t(e) {
												var r,
													n,
													o = arguments
												return T().wrap(
													function (t) {
														for (;;)
															switch ((t.prev = t.next)) {
																case 0:
																	return (
																		(r = o.length > 1 && void 0 !== o[1] ? o[1] : {}),
																		(t.next = 3),
																		j().Command.HttpClient.Delete({
																			AllowInsecureHTTPS: "True",
																			Header: U(this, P, R).call(this, r),
																			Url: e,
																			ResultBody: "PlainText",
																		})
																	)
																case 3:
																	return (n = t.sent), t.abrupt("return", U(this, I, A).call(this, n))
																case 5:
																case "end":
																	return t.stop()
															}
													},
													t,
													this
												)
											})
										)),
										function (t) {
											return n.apply(this, arguments)
										}),
								},
							]),
							r && O(e.prototype, r),
							Object.defineProperty(e, "prototype", { writable: !1 }),
							t
						)
					})()
				function R(t) {
					for (var e = [], r = 0, n = Object.entries(t); r < n.length; r++) {
						var o =
								((c = n[r]),
								(u = 2),
								(function (t) {
									if (Array.isArray(t)) return t
								})(c) ||
									(function (t, e) {
										var r = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"]
										if (null != r) {
											var n,
												o,
												i = [],
												a = !0,
												c = !1
											try {
												for (
													r = r.call(t);
													!(a = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e);
													a = !0
												);
											} catch (t) {
												;(c = !0), (o = t)
											} finally {
												try {
													a || null == r.return || r.return()
												} finally {
													if (c) throw o
												}
											}
											return i
										}
									})(c, u) ||
									(function (t, e) {
										if (t) {
											if ("string" == typeof t) return L(t, e)
											var r = Object.prototype.toString.call(t).slice(8, -1)
											return (
												"Object" === r && t.constructor && (r = t.constructor.name),
												"Map" === r || "Set" === r
													? Array.from(t)
													: "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
													? L(t, e)
													: void 0
											)
										}
									})(c, u) ||
									(function () {
										throw new TypeError(
											"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
										)
									})()),
							i = o[0],
							a = o[1]
						e.push("".concat(i, ": ").concat(a))
					}
					var c, u
					return e
				}
				function A(t) {
					var e = t
					return (e.data = JSON.parse(e.Body)), delete e.Body, e
				}
				;(global.globalThis = {}), (global.globalThis.http = new C())
				var B = globalThis.http
				function N(t) {
					return (
						(N =
							"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
								? function (t) {
										return typeof t
								  }
								: function (t) {
										return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
											? "symbol"
											: typeof t
								  }),
						N(t)
					)
				}
				function G() {
					G = function () {
						return t
					}
					var t = {},
						e = Object.prototype,
						r = e.hasOwnProperty,
						n =
							Object.defineProperty ||
							function (t, e, r) {
								t[e] = r.value
							},
						o = "function" == typeof Symbol ? Symbol : {},
						i = o.iterator || "@@iterator",
						a = o.asyncIterator || "@@asyncIterator",
						c = o.toStringTag || "@@toStringTag"
					function u(t, e, r) {
						return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function (t, e, r) {
							return (t[e] = r)
						}
					}
					function s(t, e, r, o) {
						var i = e && e.prototype instanceof f ? e : f,
							a = Object.create(i.prototype),
							c = new T(o || [])
						return n(a, "_invoke", { value: x(t, r, c) }), a
					}
					function p(t, e, r) {
						try {
							return { type: "normal", arg: t.call(e, r) }
						} catch (t) {
							return { type: "throw", arg: t }
						}
					}
					t.wrap = s
					var l = {}
					function f() {}
					function h() {}
					function y() {}
					var v = {}
					u(v, i, function () {
						return this
					})
					var d = Object.getPrototypeOf,
						m = d && d(d(E([])))
					m && m !== e && r.call(m, i) && (v = m)
					var g = (y.prototype = f.prototype = Object.create(v))
					function w(t) {
						;["next", "throw", "return"].forEach(function (e) {
							u(t, e, function (t) {
								return this._invoke(e, t)
							})
						})
					}
					function b(t, e) {
						function o(n, i, a, c) {
							var u = p(t[n], t, i)
							if ("throw" !== u.type) {
								var s = u.arg,
									l = s.value
								return l && "object" == N(l) && r.call(l, "__await")
									? e.resolve(l.__await).then(
											function (t) {
												o("next", t, a, c)
											},
											function (t) {
												o("throw", t, a, c)
											}
									  )
									: e.resolve(l).then(
											function (t) {
												;(s.value = t), a(s)
											},
											function (t) {
												return o("throw", t, a, c)
											}
									  )
							}
							c(u.arg)
						}
						var i
						n(this, "_invoke", {
							value: function (t, r) {
								function n() {
									return new e(function (e, n) {
										o(t, r, e, n)
									})
								}
								return (i = i ? i.then(n, n) : n())
							},
						})
					}
					function x(t, e, r) {
						var n = "suspendedStart"
						return function (o, i) {
							if ("executing" === n) throw new Error("Generator is already running")
							if ("completed" === n) {
								if ("throw" === o) throw i
								return { value: void 0, done: !0 }
							}
							for (r.method = o, r.arg = i; ; ) {
								var a = r.delegate
								if (a) {
									var c = j(a, r)
									if (c) {
										if (c === l) continue
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg
								else if ("throw" === r.method) {
									if ("suspendedStart" === n) throw ((n = "completed"), r.arg)
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg)
								n = "executing"
								var u = p(t, e, r)
								if ("normal" === u.type) {
									if (((n = r.done ? "completed" : "suspendedYield"), u.arg === l)) continue
									return { value: u.arg, done: r.done }
								}
								"throw" === u.type && ((n = "completed"), (r.method = "throw"), (r.arg = u.arg))
							}
						}
					}
					function j(t, e) {
						var r = t.iterator[e.method]
						if (void 0 === r) {
							if (((e.delegate = null), "throw" === e.method)) {
								if (t.iterator.return && ((e.method = "return"), (e.arg = void 0), j(t, e), "throw" === e.method))
									return l
								;(e.method = "throw"), (e.arg = new TypeError("The iterator does not provide a 'throw' method"))
							}
							return l
						}
						var n = p(r, t.iterator, e.arg)
						if ("throw" === n.type) return (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l
						var o = n.arg
						return o
							? o.done
								? ((e[t.resultName] = o.value),
								  (e.next = t.nextLoc),
								  "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
								  (e.delegate = null),
								  l)
								: o
							: ((e.method = "throw"),
							  (e.arg = new TypeError("iterator result is not an object")),
							  (e.delegate = null),
							  l)
					}
					function k(t) {
						var e = { tryLoc: t[0] }
						1 in t && (e.catchLoc = t[1]),
							2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
							this.tryEntries.push(e)
					}
					function L(t) {
						var e = t.completion || {}
						;(e.type = "normal"), delete e.arg, (t.completion = e)
					}
					function T(t) {
						;(this.tryEntries = [{ tryLoc: "root" }]), t.forEach(k, this), this.reset(!0)
					}
					function E(t) {
						if (t) {
							var e = t[i]
							if (e) return e.call(t)
							if ("function" == typeof t.next) return t
							if (!isNaN(t.length)) {
								var n = -1,
									o = function e() {
										for (; ++n < t.length; ) if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e
										return (e.value = void 0), (e.done = !0), e
									}
								return (o.next = o)
							}
						}
						return { next: S }
					}
					function S() {
						return { value: void 0, done: !0 }
					}
					return (
						(h.prototype = y),
						n(g, "constructor", { value: y, configurable: !0 }),
						n(y, "constructor", { value: h, configurable: !0 }),
						(h.displayName = u(y, c, "GeneratorFunction")),
						(t.isGeneratorFunction = function (t) {
							var e = "function" == typeof t && t.constructor
							return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
						}),
						(t.mark = function (t) {
							return (
								Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : ((t.__proto__ = y), u(t, c, "GeneratorFunction")),
								(t.prototype = Object.create(g)),
								t
							)
						}),
						(t.awrap = function (t) {
							return { __await: t }
						}),
						w(b.prototype),
						u(b.prototype, a, function () {
							return this
						}),
						(t.AsyncIterator = b),
						(t.async = function (e, r, n, o, i) {
							void 0 === i && (i = Promise)
							var a = new b(s(e, r, n, o), i)
							return t.isGeneratorFunction(r)
								? a
								: a.next().then(function (t) {
										return t.done ? t.value : a.next()
								  })
						}),
						w(g),
						u(g, c, "Generator"),
						u(g, i, function () {
							return this
						}),
						u(g, "toString", function () {
							return "[object Generator]"
						}),
						(t.keys = function (t) {
							var e = Object(t),
								r = []
							for (var n in e) r.push(n)
							return (
								r.reverse(),
								function t() {
									for (; r.length; ) {
										var n = r.pop()
										if (n in e) return (t.value = n), (t.done = !1), t
									}
									return (t.done = !0), t
								}
							)
						}),
						(t.values = E),
						(T.prototype = {
							constructor: T,
							reset: function (t) {
								if (
									((this.prev = 0),
									(this.next = 0),
									(this.sent = this._sent = void 0),
									(this.done = !1),
									(this.delegate = null),
									(this.method = "next"),
									(this.arg = void 0),
									this.tryEntries.forEach(L),
									!t)
								)
									for (var e in this)
										"t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
							},
							stop: function () {
								this.done = !0
								var t = this.tryEntries[0].completion
								if ("throw" === t.type) throw t.arg
								return this.rval
							},
							dispatchException: function (t) {
								if (this.done) throw t
								var e = this
								function n(r, n) {
									return (
										(a.type = "throw"), (a.arg = t), (e.next = r), n && ((e.method = "next"), (e.arg = void 0)), !!n
									)
								}
								for (var o = this.tryEntries.length - 1; o >= 0; --o) {
									var i = this.tryEntries[o],
										a = i.completion
									if ("root" === i.tryLoc) return n("end")
									if (i.tryLoc <= this.prev) {
										var c = r.call(i, "catchLoc"),
											u = r.call(i, "finallyLoc")
										if (c && u) {
											if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
											if (this.prev < i.finallyLoc) return n(i.finallyLoc)
										} else if (c) {
											if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
										} else {
											if (!u) throw new Error("try statement without catch or finally")
											if (this.prev < i.finallyLoc) return n(i.finallyLoc)
										}
									}
								}
							},
							abrupt: function (t, e) {
								for (var n = this.tryEntries.length - 1; n >= 0; --n) {
									var o = this.tryEntries[n]
									if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
										var i = o
										break
									}
								}
								i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null)
								var a = i ? i.completion : {}
								return (
									(a.type = t),
									(a.arg = e),
									i ? ((this.method = "next"), (this.next = i.finallyLoc), l) : this.complete(a)
								)
							},
							complete: function (t, e) {
								if ("throw" === t.type) throw t.arg
								return (
									"break" === t.type || "continue" === t.type
										? (this.next = t.arg)
										: "return" === t.type
										? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
										: "normal" === t.type && e && (this.next = e),
									l
								)
							},
							finish: function (t) {
								for (var e = this.tryEntries.length - 1; e >= 0; --e) {
									var r = this.tryEntries[e]
									if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), L(r), l
								}
							},
							catch: function (t) {
								for (var e = this.tryEntries.length - 1; e >= 0; --e) {
									var r = this.tryEntries[e]
									if (r.tryLoc === t) {
										var n = r.completion
										if ("throw" === n.type) {
											var o = n.arg
											L(r)
										}
										return o
									}
								}
								throw new Error("illegal catch attempt")
							},
							delegateYield: function (t, e, r) {
								return (
									(this.delegate = { iterator: E(t), resultName: e, nextLoc: r }),
									"next" === this.method && (this.arg = void 0),
									l
								)
							},
						}),
						t
					)
				}
				function M(t, e, r, n, o, i, a) {
					try {
						var c = t[i](a),
							u = c.value
					} catch (t) {
						return void r(t)
					}
					c.done ? e(u) : Promise.resolve(u).then(n, o)
				}
				function F(t) {
					return function () {
						var e = this,
							r = arguments
						return new Promise(function (n, o) {
							var i = t.apply(e, r)
							function a(t) {
								M(i, n, o, a, c, "next", t)
							}
							function c(t) {
								M(i, n, o, a, c, "throw", t)
							}
							a(void 0)
						})
					}
				}
				function q(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r]
						;(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							"value" in n && (n.writable = !0),
							Object.defineProperty(t, n.key, n)
					}
				}
				function D(t, e) {
					H(t, e), e.add(t)
				}
				function H(t, e) {
					if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
				}
				function J(t, e, r) {
					if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance")
					return r
				}
				function Y(t, e) {
					return (function (t, e) {
						return e.get ? e.get.call(t) : e.value
					})(t, K(t, e, "get"))
				}
				function K(t, e, r) {
					if (!e.has(t)) throw new TypeError("attempted to " + r + " private field on non-instance")
					return e.get(t)
				}
				var W = new WeakMap(),
					z = new WeakSet(),
					X = new WeakSet(),
					$ = new WeakSet()
				function Q(t) {
					return V.apply(this, arguments)
				}
				function V() {
					return (V = F(
						G().mark(function t(e) {
							var r, o, i, a, c, u
							return G().wrap(
								function (t) {
									for (;;)
										switch ((t.prev = t.next)) {
											case 0:
												;(r = e.expiry),
													(o = e.accessLevel),
													(i = { "Content-Type": "application/json", Accept: "application/json" }),
													(a = { api_key: this.apiKey, expiry: { seconds: r } }),
													(t.t0 = o),
													(t.next = t.t0 === m ? 6 : t.t0 === g ? 8 : 10)
												break
											case 6:
												return (c = "".concat(n.apiBaseURL, "/v1/admin/auth/token")), t.abrupt("break", 12)
											case 8:
												return (c = "".concat(n.apiBaseURL, "/v1/superadmin/auth/token")), t.abrupt("break", 12)
											case 10:
												return (c = "".concat(n.apiBaseURL, "/v1/auth/token")), t.abrupt("break", 12)
											case 12:
												return (t.next = 14), B.post(c, a, i)
											case 14:
												return (u = t.sent), t.abrupt("return", u.data.token)
											case 16:
											case "end":
												return t.stop()
										}
								},
								t,
								this
							)
						})
					)).apply(this, arguments)
				}
				function Z(t) {
					return tt.apply(this, arguments)
				}
				function tt() {
					return (tt = F(
						G().mark(function t(e) {
							var r, o, i, a, c, u
							return G().wrap(
								function (t) {
									for (;;)
										switch ((t.prev = t.next)) {
											case 0:
												return (r = e.expiry), (o = e.accessLevel), (t.next = 3), this.getIdToken()
											case 3:
												;(t.t0 = t.sent),
													(i = {
														"Content-Type": "application/json",
														Accept: "application/json",
														"x-jibb-id-jwt": t.t0,
													}),
													(a = { expiry: { seconds: r } }),
													(t.t1 = o),
													(t.next = t.t1 === m ? 9 : t.t1 === g ? 11 : 13)
												break
											case 9:
												return (c = "".concat(n.apiBaseURL, "/v1/admin/auth/token")), t.abrupt("break", 15)
											case 11:
												return (c = "".concat(n.apiBaseURL, "/v1/superadmin/auth/token")), t.abrupt("break", 15)
											case 13:
												return (c = "".concat(n.apiBaseURL, "/v1/auth/token")), t.abrupt("break", 15)
											case 15:
												return (t.next = 17), B.post(c, a, i)
											case 17:
												return (u = t.sent), t.abrupt("return", u.data.token)
											case 19:
											case "end":
												return t.stop()
										}
								},
								t,
								this
							)
						})
					)).apply(this, arguments)
				}
				function et(t) {
					return rt.apply(this, arguments)
				}
				function rt() {
					return (rt = F(
						G().mark(function t(e) {
							var r, n, o, i
							return G().wrap(
								function (t) {
									for (;;)
										switch ((t.prev = t.next)) {
											case 0:
												if (((r = e.expiry), (n = e.accessLevel), !this.apiKey)) {
													t.next = 7
													break
												}
												return (t.next = 4), J(this, z, Q).call(this, { expiry: r, accessLevel: n })
											case 4:
												return (o = t.sent), this.setUserToken(o, n), t.abrupt("return", o)
											case 7:
												return (t.prev = 7), (t.next = 10), J(this, X, Z).call(this, { expiry: r, accessLevel: n })
											case 10:
												return (i = t.sent), this.setUserToken(i, n), t.abrupt("return", i)
											case 15:
												;(t.prev = 15), (t.t0 = t.catch(7)), c.error(t.t0)
											case 18:
											case "end":
												return t.stop()
										}
								},
								t,
								this,
								[[7, 15]]
							)
						})
					)).apply(this, arguments)
				}
				var nt = new ((function () {
					function t() {
						var e, r
						!(function (t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						})(this, t),
							D(this, $),
							D(this, X),
							D(this, z),
							(r = { writable: !0, value: void 0 }),
							H(this, (e = W)),
							e.set(this, r),
							c.debug("Creating new Auth instance"),
							(this.apiKey = void 0),
							(function (t, e, r) {
								;(function (t, e, r) {
									if (e.set) e.set.call(t, r)
									else {
										if (!e.writable) throw new TypeError("attempted to set read only private field")
										e.value = r
									}
								})(t, K(t, e, "set"), r)
							})(this, W, new Map()),
							(this.getIdToken = void 0)
					}
					var e, r, o, i, a, u
					return (
						(e = t),
						(r = [
							{
								key: "setUserToken",
								value: function (t) {
									var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d,
										r = new b(t)
									Y(this, W).set(e, r)
								},
							},
							{
								key: "setApiKey",
								value: function (t) {
									;(this.apiKey = t), Y(this, W).clear()
								},
							},
							{
								key: "getUserClaims",
								value:
									((u = F(
										G().mark(function t() {
											return G().wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (t.next = 2), this.getUserToken()
															case 2:
																return t.abrupt("return", Y(this, W).get(d))
															case 3:
															case "end":
																return t.stop()
														}
												},
												t,
												this
											)
										})
									)),
									function () {
										return u.apply(this, arguments)
									}),
							},
							{
								key: "getUserToken",
								value:
									((a = F(
										G().mark(function t() {
											var e,
												r,
												n,
												o,
												i,
												a = arguments
											return G().wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																if (
																	((e = a.length > 0 && void 0 !== a[0] ? a[0] : {}),
																	(r = e.expiry),
																	(n = e.refresh),
																	(o = e.accessLevel),
																	(i = void 0),
																	(o = o || d),
																	(r = r || 3600),
																	!0 !== (n = n || !1))
																) {
																	t.next = 8
																	break
																}
																return (t.next = 8), J(this, $, et).call(this, { expiry: r, accessLevel: o })
															case 8:
																if (void 0 === (i = Y(this, W).get(o)) || i.isExpired()) {
																	t.next = 11
																	break
																}
																return t.abrupt("return", i.token)
															case 11:
																return (t.next = 13), J(this, $, et).call(this, { expiry: r, accessLevel: o })
															case 13:
																if (void 0 === (i = Y(this, W).get(o)) || i.isExpired()) {
																	t.next = 16
																	break
																}
																return t.abrupt("return", i.token)
															case 16:
																throw new Error("could not create user token")
															case 17:
															case "end":
																return t.stop()
														}
												},
												t,
												this
											)
										})
									)),
									function () {
										return a.apply(this, arguments)
									}),
							},
							{
								key: "logout",
								value: function () {
									Y(this, W).clear()
								},
							},
							{
								key: "generateAPIKey",
								value:
									((i = F(
										G().mark(function t() {
											var e, r
											return G().wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (t.next = 2), this.getUserToken()
															case 2:
																return (
																	(t.t0 = t.sent),
																	(e = {
																		"Content-Type": "application/json",
																		Accept: "application/json",
																		"x-jibb-user-jwt": t.t0,
																	}),
																	(t.next = 6),
																	B.get("".concat(n.apiBaseURL, "/v1/auth/apikey"), e)
																)
															case 6:
																return (r = t.sent), t.abrupt("return", r.data.apiKey)
															case 8:
															case "end":
																return t.stop()
														}
												},
												t,
												this
											)
										})
									)),
									function () {
										return i.apply(this, arguments)
									}),
							},
							{
								key: "generateCustomAuthPassword",
								value:
									((o = F(
										G().mark(function t() {
											var e, r
											return G().wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (t.next = 2), this.getIdToken()
															case 2:
																return (
																	(t.t0 = t.sent),
																	(e = {
																		"Content-Type": "application/json",
																		Accept: "application/json",
																		"x-jibb-id-jwt": t.t0,
																	}),
																	(t.next = 6),
																	B.get("".concat(n.apiBaseURL, "/v1/auth/custom"), e)
																)
															case 6:
																return (r = t.sent), t.abrupt("return", r.data.password)
															case 8:
															case "end":
																return t.stop()
														}
												},
												t,
												this
											)
										})
									)),
									function () {
										return o.apply(this, arguments)
									}),
							},
						]),
						r && q(e.prototype, r),
						Object.defineProperty(e, "prototype", { writable: !1 }),
						t
					)
				})())()
				function ot(t) {
					return (
						(ot =
							"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
								? function (t) {
										return typeof t
								  }
								: function (t) {
										return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
											? "symbol"
											: typeof t
								  }),
						ot(t)
					)
				}
				function it(t, e) {
					for (var r = 0; r < e.length; r++) {
						var n = e[r]
						;(n.enumerable = n.enumerable || !1),
							(n.configurable = !0),
							"value" in n && (n.writable = !0),
							Object.defineProperty(t, n.key, n)
					}
				}
				function at(t, e, r) {
					return e && it(t.prototype, e), r && it(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t
				}
				function ct(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}
				function ut(t, e) {
					if ("function" != typeof e && null !== e)
						throw new TypeError("Super expression must either be null or a function")
					;(t.prototype = Object.create(e && e.prototype, {
						constructor: { value: t, writable: !0, configurable: !0 },
					})),
						Object.defineProperty(t, "prototype", { writable: !1 }),
						e && yt(t, e)
				}
				function st(t) {
					var e = ht()
					return function () {
						var r,
							n = vt(t)
						if (e) {
							var o = vt(this).constructor
							r = Reflect.construct(n, arguments, o)
						} else r = n.apply(this, arguments)
						return pt(this, r)
					}
				}
				function pt(t, e) {
					if (e && ("object" === ot(e) || "function" == typeof e)) return e
					if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined")
					return (function (t) {
						if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
						return t
					})(t)
				}
				function lt(t) {
					var e = "function" == typeof Map ? new Map() : void 0
					return (
						(lt = function (t) {
							if (null === t || ((r = t), -1 === Function.toString.call(r).indexOf("[native code]"))) return t
							var r
							if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function")
							if (void 0 !== e) {
								if (e.has(t)) return e.get(t)
								e.set(t, n)
							}
							function n() {
								return ft(t, arguments, vt(this).constructor)
							}
							return (
								(n.prototype = Object.create(t.prototype, {
									constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
								})),
								yt(n, t)
							)
						}),
						lt(t)
					)
				}
				function ft(t, e, r) {
					return (
						(ft = ht()
							? Reflect.construct.bind()
							: function (t, e, r) {
									var n = [null]
									n.push.apply(n, e)
									var o = new (Function.bind.apply(t, n))()
									return r && yt(o, r.prototype), o
							  }),
						ft.apply(null, arguments)
					)
				}
				function ht() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1
					if (Reflect.construct.sham) return !1
					if ("function" == typeof Proxy) return !0
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
					} catch (t) {
						return !1
					}
				}
				function yt(t, e) {
					return (
						(yt = Object.setPrototypeOf
							? Object.setPrototypeOf.bind()
							: function (t, e) {
									return (t.__proto__ = e), t
							  }),
						yt(t, e)
					)
				}
				function vt(t) {
					return (
						(vt = Object.setPrototypeOf
							? Object.getPrototypeOf.bind()
							: function (t) {
									return t.__proto__ || Object.getPrototypeOf(t)
							  }),
						vt(t)
					)
				}
				var dt = (function (t) {
						ut(r, t)
						var e = st(r)
						function r(t) {
							var n
							return ct(this, r), ((n = e.call(this, t)).name = "NotFoundError"), n
						}
						return at(r)
					})(lt(Error)),
					mt =
						(Error,
						Error,
						Error,
						Error,
						(function (t) {
							ut(r, t)
							var e = st(r)
							function r(t) {
								var n
								return ct(this, r), ((n = e.call(this, t)).name = "PermissionDeniedError"), n
							}
							return at(r)
						})(lt(Error)))
				function gt(t) {
					return (
						(gt =
							"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
								? function (t) {
										return typeof t
								  }
								: function (t) {
										return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
											? "symbol"
											: typeof t
								  }),
						gt(t)
					)
				}
				function wt() {
					wt = function () {
						return t
					}
					var t = {},
						e = Object.prototype,
						r = e.hasOwnProperty,
						n =
							Object.defineProperty ||
							function (t, e, r) {
								t[e] = r.value
							},
						o = "function" == typeof Symbol ? Symbol : {},
						i = o.iterator || "@@iterator",
						a = o.asyncIterator || "@@asyncIterator",
						c = o.toStringTag || "@@toStringTag"
					function u(t, e, r) {
						return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function (t, e, r) {
							return (t[e] = r)
						}
					}
					function s(t, e, r, o) {
						var i = e && e.prototype instanceof f ? e : f,
							a = Object.create(i.prototype),
							c = new T(o || [])
						return n(a, "_invoke", { value: x(t, r, c) }), a
					}
					function p(t, e, r) {
						try {
							return { type: "normal", arg: t.call(e, r) }
						} catch (t) {
							return { type: "throw", arg: t }
						}
					}
					t.wrap = s
					var l = {}
					function f() {}
					function h() {}
					function y() {}
					var v = {}
					u(v, i, function () {
						return this
					})
					var d = Object.getPrototypeOf,
						m = d && d(d(E([])))
					m && m !== e && r.call(m, i) && (v = m)
					var g = (y.prototype = f.prototype = Object.create(v))
					function w(t) {
						;["next", "throw", "return"].forEach(function (e) {
							u(t, e, function (t) {
								return this._invoke(e, t)
							})
						})
					}
					function b(t, e) {
						function o(n, i, a, c) {
							var u = p(t[n], t, i)
							if ("throw" !== u.type) {
								var s = u.arg,
									l = s.value
								return l && "object" == gt(l) && r.call(l, "__await")
									? e.resolve(l.__await).then(
											function (t) {
												o("next", t, a, c)
											},
											function (t) {
												o("throw", t, a, c)
											}
									  )
									: e.resolve(l).then(
											function (t) {
												;(s.value = t), a(s)
											},
											function (t) {
												return o("throw", t, a, c)
											}
									  )
							}
							c(u.arg)
						}
						var i
						n(this, "_invoke", {
							value: function (t, r) {
								function n() {
									return new e(function (e, n) {
										o(t, r, e, n)
									})
								}
								return (i = i ? i.then(n, n) : n())
							},
						})
					}
					function x(t, e, r) {
						var n = "suspendedStart"
						return function (o, i) {
							if ("executing" === n) throw new Error("Generator is already running")
							if ("completed" === n) {
								if ("throw" === o) throw i
								return { value: void 0, done: !0 }
							}
							for (r.method = o, r.arg = i; ; ) {
								var a = r.delegate
								if (a) {
									var c = j(a, r)
									if (c) {
										if (c === l) continue
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg
								else if ("throw" === r.method) {
									if ("suspendedStart" === n) throw ((n = "completed"), r.arg)
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg)
								n = "executing"
								var u = p(t, e, r)
								if ("normal" === u.type) {
									if (((n = r.done ? "completed" : "suspendedYield"), u.arg === l)) continue
									return { value: u.arg, done: r.done }
								}
								"throw" === u.type && ((n = "completed"), (r.method = "throw"), (r.arg = u.arg))
							}
						}
					}
					function j(t, e) {
						var r = t.iterator[e.method]
						if (void 0 === r) {
							if (((e.delegate = null), "throw" === e.method)) {
								if (t.iterator.return && ((e.method = "return"), (e.arg = void 0), j(t, e), "throw" === e.method))
									return l
								;(e.method = "throw"), (e.arg = new TypeError("The iterator does not provide a 'throw' method"))
							}
							return l
						}
						var n = p(r, t.iterator, e.arg)
						if ("throw" === n.type) return (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l
						var o = n.arg
						return o
							? o.done
								? ((e[t.resultName] = o.value),
								  (e.next = t.nextLoc),
								  "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
								  (e.delegate = null),
								  l)
								: o
							: ((e.method = "throw"),
							  (e.arg = new TypeError("iterator result is not an object")),
							  (e.delegate = null),
							  l)
					}
					function k(t) {
						var e = { tryLoc: t[0] }
						1 in t && (e.catchLoc = t[1]),
							2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
							this.tryEntries.push(e)
					}
					function L(t) {
						var e = t.completion || {}
						;(e.type = "normal"), delete e.arg, (t.completion = e)
					}
					function T(t) {
						;(this.tryEntries = [{ tryLoc: "root" }]), t.forEach(k, this), this.reset(!0)
					}
					function E(t) {
						if (t) {
							var e = t[i]
							if (e) return e.call(t)
							if ("function" == typeof t.next) return t
							if (!isNaN(t.length)) {
								var n = -1,
									o = function e() {
										for (; ++n < t.length; ) if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e
										return (e.value = void 0), (e.done = !0), e
									}
								return (o.next = o)
							}
						}
						return { next: S }
					}
					function S() {
						return { value: void 0, done: !0 }
					}
					return (
						(h.prototype = y),
						n(g, "constructor", { value: y, configurable: !0 }),
						n(y, "constructor", { value: h, configurable: !0 }),
						(h.displayName = u(y, c, "GeneratorFunction")),
						(t.isGeneratorFunction = function (t) {
							var e = "function" == typeof t && t.constructor
							return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
						}),
						(t.mark = function (t) {
							return (
								Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : ((t.__proto__ = y), u(t, c, "GeneratorFunction")),
								(t.prototype = Object.create(g)),
								t
							)
						}),
						(t.awrap = function (t) {
							return { __await: t }
						}),
						w(b.prototype),
						u(b.prototype, a, function () {
							return this
						}),
						(t.AsyncIterator = b),
						(t.async = function (e, r, n, o, i) {
							void 0 === i && (i = Promise)
							var a = new b(s(e, r, n, o), i)
							return t.isGeneratorFunction(r)
								? a
								: a.next().then(function (t) {
										return t.done ? t.value : a.next()
								  })
						}),
						w(g),
						u(g, c, "Generator"),
						u(g, i, function () {
							return this
						}),
						u(g, "toString", function () {
							return "[object Generator]"
						}),
						(t.keys = function (t) {
							var e = Object(t),
								r = []
							for (var n in e) r.push(n)
							return (
								r.reverse(),
								function t() {
									for (; r.length; ) {
										var n = r.pop()
										if (n in e) return (t.value = n), (t.done = !1), t
									}
									return (t.done = !0), t
								}
							)
						}),
						(t.values = E),
						(T.prototype = {
							constructor: T,
							reset: function (t) {
								if (
									((this.prev = 0),
									(this.next = 0),
									(this.sent = this._sent = void 0),
									(this.done = !1),
									(this.delegate = null),
									(this.method = "next"),
									(this.arg = void 0),
									this.tryEntries.forEach(L),
									!t)
								)
									for (var e in this)
										"t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
							},
							stop: function () {
								this.done = !0
								var t = this.tryEntries[0].completion
								if ("throw" === t.type) throw t.arg
								return this.rval
							},
							dispatchException: function (t) {
								if (this.done) throw t
								var e = this
								function n(r, n) {
									return (
										(a.type = "throw"), (a.arg = t), (e.next = r), n && ((e.method = "next"), (e.arg = void 0)), !!n
									)
								}
								for (var o = this.tryEntries.length - 1; o >= 0; --o) {
									var i = this.tryEntries[o],
										a = i.completion
									if ("root" === i.tryLoc) return n("end")
									if (i.tryLoc <= this.prev) {
										var c = r.call(i, "catchLoc"),
											u = r.call(i, "finallyLoc")
										if (c && u) {
											if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
											if (this.prev < i.finallyLoc) return n(i.finallyLoc)
										} else if (c) {
											if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
										} else {
											if (!u) throw new Error("try statement without catch or finally")
											if (this.prev < i.finallyLoc) return n(i.finallyLoc)
										}
									}
								}
							},
							abrupt: function (t, e) {
								for (var n = this.tryEntries.length - 1; n >= 0; --n) {
									var o = this.tryEntries[n]
									if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
										var i = o
										break
									}
								}
								i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null)
								var a = i ? i.completion : {}
								return (
									(a.type = t),
									(a.arg = e),
									i ? ((this.method = "next"), (this.next = i.finallyLoc), l) : this.complete(a)
								)
							},
							complete: function (t, e) {
								if ("throw" === t.type) throw t.arg
								return (
									"break" === t.type || "continue" === t.type
										? (this.next = t.arg)
										: "return" === t.type
										? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
										: "normal" === t.type && e && (this.next = e),
									l
								)
							},
							finish: function (t) {
								for (var e = this.tryEntries.length - 1; e >= 0; --e) {
									var r = this.tryEntries[e]
									if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), L(r), l
								}
							},
							catch: function (t) {
								for (var e = this.tryEntries.length - 1; e >= 0; --e) {
									var r = this.tryEntries[e]
									if (r.tryLoc === t) {
										var n = r.completion
										if ("throw" === n.type) {
											var o = n.arg
											L(r)
										}
										return o
									}
								}
								throw new Error("illegal catch attempt")
							},
							delegateYield: function (t, e, r) {
								return (
									(this.delegate = { iterator: E(t), resultName: e, nextLoc: r }),
									"next" === this.method && (this.arg = void 0),
									l
								)
							},
						}),
						t
					)
				}
				function bt(t, e, r, n, o, i, a) {
					try {
						var c = t[i](a),
							u = c.value
					} catch (t) {
						return void r(t)
					}
					c.done ? e(u) : Promise.resolve(u).then(n, o)
				}
				function xt(t) {
					return function () {
						var e = this,
							r = arguments
						return new Promise(function (n, o) {
							var i = t.apply(e, r)
							function a(t) {
								bt(i, n, o, a, c, "next", t)
							}
							function c(t) {
								bt(i, n, o, a, c, "throw", t)
							}
							a(void 0)
						})
					}
				}
				function jt(t) {
					return kt.apply(this, arguments)
				}
				function kt() {
					return (kt = xt(
						wt().mark(function t(e) {
							var r, o, i, a, c, u, s
							return wt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (
												(r = e.title),
												(o = e.isTemporary),
												(i = e.capacity),
												(a = e.meetingType),
												(t.next = 3),
												nt.getUserToken()
											)
										case 3:
											return (
												(t.t0 = t.sent),
												(c = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
												}),
												(u = { title: r || "", isTemporary: o || !1, capacity: i || 2, meetingType: a || 0 }),
												(t.next = 8),
												B.post("".concat(n.apiBaseURL, "/v1/meetings"), u, c)
											)
										case 8:
											return (s = t.sent), t.abrupt("return", s.data.meetingId)
										case 10:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Lt(t) {
					return Tt.apply(this, arguments)
				}
				function Tt() {
					return (Tt = xt(
						wt().mark(function t(e) {
							var r, o, i, a, c, u, s
							return wt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (
												(r = e.meetingId),
												(o = e.permission),
												(i = e.expiry),
												(a = e.auxData),
												(t.next = 3),
												nt.getUserToken()
											)
										case 3:
											return (
												(t.t0 = t.sent),
												(c = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
												}),
												(u = { permission: o, expiry: { seconds: i || 3600 }, auxilary: a || {} }),
												(t.next = 8),
												B.post("".concat(n.apiBaseURL, "/v1/meetings/").concat(r, "/temp-shares"), u, c)
											)
										case 8:
											return (s = t.sent), t.abrupt("return", s.data.shareId)
										case 10:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Et(t) {
					return St.apply(this, arguments)
				}
				function St() {
					return (St = xt(
						wt().mark(function t(e) {
							var r, o, i, a
							return wt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (
												(r = e.meetingId),
												(o = e.shareId),
												(i = { "Content-Type": "application/json", Accept: "application/json" }),
												(t.next = 4),
												B.get("".concat(n.apiBaseURL, "/v1/meetings/").concat(r, "/temp-shares/").concat(o), i)
											)
										case 4:
											return (a = t.sent), t.abrupt("return", a.data.token)
										case 6:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Ot(t) {
					return _t.apply(this, arguments)
				}
				function _t() {
					return (_t = xt(
						wt().mark(function t(e) {
							var r, o, i
							return wt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (r = e.meetingId), (o = e.mtoken), (t.next = 3), nt.getUserToken()
										case 3:
											return (
												(t.t0 = t.sent),
												(t.t1 = o),
												(i = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
													"x-jibb-meeting-jwt": t.t1,
												}),
												t.abrupt("return", B.delete("".concat(n.apiBaseURL, "/v1/meetings/").concat(r, "/images"), i))
											)
										case 7:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Ut(t) {
					return Pt.apply(this, arguments)
				}
				function Pt() {
					return (Pt = xt(
						wt().mark(function t(e) {
							var r, o, i, a
							return wt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (r = e.meetingId), (o = e.meetingToken), (t.next = 3), nt.getUserToken()
										case 3:
											return (
												(t.t0 = t.sent),
												(t.t1 = o),
												(i = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
													"x-jibb-meeting-jwt": t.t1,
												}),
												(t.next = 8),
												B.get("".concat(n.apiBaseURL, "/v1/meetings/").concat(r, "/images"), i)
											)
										case 8:
											return (a = t.sent), t.abrupt("return", a.data)
										case 10:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function It(t) {
					return Ct.apply(this, arguments)
				}
				function Ct() {
					return (Ct = xt(
						wt().mark(function t(e) {
							var r, o, i, a, c
							return wt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (r = e.meetingId), (o = e.meetingToken), (i = e.imageId), (t.next = 3), nt.getUserToken()
										case 3:
											return (
												(t.t0 = t.sent),
												(t.t1 = o),
												(a = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
													"x-jibb-meeting-jwt": t.t1,
												}),
												(t.next = 8),
												B.get("".concat(n.apiBaseURL, "/v1/meetings/").concat(r, "/images/").concat(i), a)
											)
										case 8:
											return (c = t.sent), t.abrupt("return", c.data)
										case 10:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Rt(t) {
					return At.apply(this, arguments)
				}
				function At() {
					return (At = xt(
						wt().mark(function t(e) {
							var r, o, i, a, c
							return wt().wrap(
								function (t) {
									for (;;)
										switch ((t.prev = t.next)) {
											case 0:
												return (
													(r = e.meetingId),
													(o = e.meetingToken),
													(i = {
														"Content-Type": "application/json",
														Accept: "application/json",
														"x-jibb-meeting-jwt": o,
													}),
													(t.prev = 2),
													(a = {}),
													(t.next = 6),
													B.post("".concat(n.apiBaseURL, "/v1/meetings/").concat(r, "/actions/start"), a, i)
												)
											case 6:
												return t.abrupt("return", t.sent)
											case 9:
												if (
													((t.prev = 9),
													(t.t0 = t.catch(2)),
													404 !=
														(null === t.t0 || void 0 === t.t0 || null === (c = t.t0.response) || void 0 === c
															? void 0
															: c.status))
												) {
													t.next = 15
													break
												}
												throw new dt()
											case 15:
												throw t.t0
											case 16:
											case "end":
												return t.stop()
										}
								},
								t,
								null,
								[[2, 9]]
							)
						})
					)).apply(this, arguments)
				}
				function Bt(t) {
					return Nt.apply(this, arguments)
				}
				function Nt() {
					return (Nt = xt(
						wt().mark(function t(e) {
							var r, o, i, a
							return wt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (
												(r = e.meetingId),
												(o = e.meetingToken),
												(i = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-meeting-jwt": o,
												}),
												(a = {}),
												t.abrupt(
													"return",
													B.post("".concat(n.apiBaseURL, "/v1/meetings/").concat(r, "/actions/end"), a, i)
												)
											)
										case 4:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Gt(t) {
					return Mt.apply(this, arguments)
				}
				function Mt() {
					return (Mt = xt(
						wt().mark(function t(e) {
							var r
							return wt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (t.next = 2), nt.getUserToken()
										case 2:
											return (
												(t.t0 = t.sent),
												(r = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
												}),
												t.abrupt("return", B.delete("".concat(n.apiBaseURL, "/v1/meetings/").concat(e), r))
											)
										case 5:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Ft(t) {
					return qt.apply(this, arguments)
				}
				function qt() {
					return (qt = xt(
						wt().mark(function t(e) {
							var r, o, i, a, u, s, p, l
							return wt().wrap(
								function (t) {
									for (;;)
										switch ((t.prev = t.next)) {
											case 0:
												return (
													(r = e.meetingId),
													(o = e.permission),
													(i = e.expiry),
													(a = void 0 === i ? 3600 : i),
													(t.prev = 1),
													(t.next = 4),
													nt.getUserToken()
												)
											case 4:
												;(u = t.sent), (t.next = 11)
												break
											case 7:
												throw (
													((t.prev = 7),
													(t.t0 = t.catch(1)),
													c.error({ err: t.t0 }),
													new mt("user is not authenticated"))
												)
											case 11:
												return (
													(t.prev = 11),
													(s = {
														"Content-Type": "application/json",
														Accept: "application/json",
														"x-jibb-user-jwt": u,
													}),
													(t.next = 15),
													B.get(
														""
															.concat(n.apiBaseURL, "/v1/meetings/")
															.concat(r, "/token/")
															.concat(o, "?expiry.seconds=")
															.concat(a),
														s
													)
												)
											case 15:
												return (p = t.sent), t.abrupt("return", p.data.token)
											case 19:
												if (
													((t.prev = 19),
													(t.t1 = t.catch(11)),
													404 !=
														(null === t.t1 || void 0 === t.t1 || null === (l = t.t1.response) || void 0 === l
															? void 0
															: l.status))
												) {
													t.next = 25
													break
												}
												throw new dt("meeting not found")
											case 25:
												throw t.t1
											case 26:
											case "end":
												return t.stop()
										}
								},
								t,
								null,
								[
									[1, 7],
									[11, 19],
								]
							)
						})
					)).apply(this, arguments)
				}
				function Dt(t) {
					return Ht.apply(this, arguments)
				}
				function Ht() {
					return (Ht = xt(
						wt().mark(function t(e) {
							var r, o
							return wt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (t.next = 2), nt.getUserToken()
										case 2:
											return (
												(t.t0 = t.sent),
												(r = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
												}),
												void 0 !== e && (r["x-jibb-pagination"] = JSON.stringify(e)),
												(t.next = 7),
												B.get("".concat(n.apiBaseURL, "/v1/meetings"), r)
											)
										case 7:
											return (
												(o = t.sent),
												(e = (e = o.headers["x-jibb-pagination"]) && JSON.parse(e)),
												t.abrupt("return", { meetings: o.data.meetings, pagination: e })
											)
										case 11:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Jt(t) {
					return Yt.apply(this, arguments)
				}
				function Yt() {
					return (Yt = xt(
						wt().mark(function t(e) {
							var r, o
							return wt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (t.next = 2), nt.getUserToken()
										case 2:
											return (
												(t.t0 = t.sent),
												(r = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
												}),
												(t.next = 6),
												B.get("".concat(n.apiBaseURL, "/v1/meetings/").concat(e), r)
											)
										case 6:
											return (o = t.sent), t.abrupt("return", o.data)
										case 8:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Kt(t) {
					return Wt.apply(this, arguments)
				}
				function Wt() {
					return (Wt = xt(
						wt().mark(function t(e) {
							var r, o, i, a, c
							return wt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (r = e.meetingId), (o = e.title), (i = e.capacity), (t.next = 3), nt.getUserToken()
										case 3:
											return (
												(t.t0 = t.sent),
												(a = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
												}),
												(c = {}),
												o && (c.title = o),
												i && (c.capacity = i),
												t.abrupt("return", B.post("".concat(n.apiBaseURL, "/v1/meetings/").concat(r), c, a))
											)
										case 9:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function zt(t) {
					return Xt.apply(this, arguments)
				}
				function Xt() {
					return (Xt = xt(
						wt().mark(function t(e) {
							var r, n
							return wt().wrap(
								function (t) {
									for (;;)
										switch ((t.prev = t.next)) {
											case 0:
												return (t.prev = 0), (r = new w(e)), (t.t0 = b), (t.next = 5), nt.getUserToken()
											case 5:
												return (t.t1 = t.sent), (n = new t.t0(t.t1)), t.abrupt("return", n.email === r.owner)
											case 10:
												return (t.prev = 10), (t.t2 = t.catch(0)), t.abrupt("return", !1)
											case 13:
											case "end":
												return t.stop()
										}
								},
								t,
								null,
								[[0, 10]]
							)
						})
					)).apply(this, arguments)
				}
				function $t(t) {
					return Qt.apply(this, arguments)
				}
				function Qt() {
					return (Qt = xt(
						wt().mark(function t(e) {
							var r, o, i, a, c, u, s
							return wt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (
												(r = e.email),
												(o = e.meetingId),
												(i = e.permission),
												(a = e.meetingToken),
												(t.next = 3),
												nt.getUserToken()
											)
										case 3:
											return (
												(t.t0 = t.sent),
												(t.t1 = a),
												(c = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
													"x-jibb-meeting-jwt": t.t1,
												}),
												(u = { email: r, permission: i }),
												(t.next = 9),
												B.post("".concat(n.apiBaseURL, "/v1/meetings/").concat(o, "/shares"), u, c)
											)
										case 9:
											return (s = t.sent), t.abrupt("return", s.data)
										case 11:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Vt(t) {
					return Zt.apply(this, arguments)
				}
				function Zt() {
					return (Zt = xt(
						wt().mark(function t(e) {
							var r, o, i, a
							return wt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (r = e.meetingId), (o = e.meetingToken), (t.next = 3), nt.getUserToken()
										case 3:
											return (
												(t.t0 = t.sent),
												(t.t1 = o),
												(i = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
													"x-jibb-meeting-jwt": t.t1,
												}),
												(t.next = 8),
												B.get("".concat(n.apiBaseURL, "/v1/meetings/").concat(r, "/shares"), i)
											)
										case 8:
											return (a = t.sent), t.abrupt("return", a.data.shares)
										case 10:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function te(t) {
					return ee.apply(this, arguments)
				}
				function ee() {
					return (ee = xt(
						wt().mark(function t(e) {
							var r, o, i, a
							return wt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (r = e.meetingId), (o = e.userId), (i = e.meetingToken), (t.next = 3), nt.getUserToken()
										case 3:
											return (
												(t.t0 = t.sent),
												(t.t1 = i),
												(a = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
													"x-jibb-meeting-jwt": t.t1,
												}),
												t.abrupt(
													"return",
													B.delete("".concat(n.apiBaseURL, "/v1/meetings/").concat(r, "/shares/").concat(o), a)
												)
											)
										case 7:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function re() {
					return ne.apply(this, arguments)
				}
				function ne() {
					return (ne = xt(
						wt().mark(function t() {
							var e, r
							return wt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (t.next = 2), nt.getUserToken()
										case 2:
											return (
												(t.t0 = t.sent),
												(e = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
												}),
												(t.next = 6),
												B.get("".concat(n.apiBaseURL, "/v1/meetings/shares"), e)
											)
										case 6:
											return (r = t.sent), t.abrupt("return", r.data.shares)
										case 8:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function oe(t) {
					return ie.apply(this, arguments)
				}
				function ie() {
					return (ie = xt(
						wt().mark(function t(e) {
							var r
							return wt().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (t.next = 2), nt.getUserToken()
										case 2:
											return (
												(t.t0 = t.sent),
												(r = {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
												}),
												t.abrupt("return", B.delete("".concat(n.apiBaseURL, "/v1/meetings/shares/").concat(e), r))
											)
										case 5:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function ae(t) {
					return (
						(ae =
							"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
								? function (t) {
										return typeof t
								  }
								: function (t) {
										return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
											? "symbol"
											: typeof t
								  }),
						ae(t)
					)
				}
				function ce() {
					ce = function () {
						return t
					}
					var t = {},
						e = Object.prototype,
						r = e.hasOwnProperty,
						n =
							Object.defineProperty ||
							function (t, e, r) {
								t[e] = r.value
							},
						o = "function" == typeof Symbol ? Symbol : {},
						i = o.iterator || "@@iterator",
						a = o.asyncIterator || "@@asyncIterator",
						c = o.toStringTag || "@@toStringTag"
					function u(t, e, r) {
						return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]
					}
					try {
						u({}, "")
					} catch (t) {
						u = function (t, e, r) {
							return (t[e] = r)
						}
					}
					function s(t, e, r, o) {
						var i = e && e.prototype instanceof f ? e : f,
							a = Object.create(i.prototype),
							c = new T(o || [])
						return n(a, "_invoke", { value: x(t, r, c) }), a
					}
					function p(t, e, r) {
						try {
							return { type: "normal", arg: t.call(e, r) }
						} catch (t) {
							return { type: "throw", arg: t }
						}
					}
					t.wrap = s
					var l = {}
					function f() {}
					function h() {}
					function y() {}
					var v = {}
					u(v, i, function () {
						return this
					})
					var d = Object.getPrototypeOf,
						m = d && d(d(E([])))
					m && m !== e && r.call(m, i) && (v = m)
					var g = (y.prototype = f.prototype = Object.create(v))
					function w(t) {
						;["next", "throw", "return"].forEach(function (e) {
							u(t, e, function (t) {
								return this._invoke(e, t)
							})
						})
					}
					function b(t, e) {
						function o(n, i, a, c) {
							var u = p(t[n], t, i)
							if ("throw" !== u.type) {
								var s = u.arg,
									l = s.value
								return l && "object" == ae(l) && r.call(l, "__await")
									? e.resolve(l.__await).then(
											function (t) {
												o("next", t, a, c)
											},
											function (t) {
												o("throw", t, a, c)
											}
									  )
									: e.resolve(l).then(
											function (t) {
												;(s.value = t), a(s)
											},
											function (t) {
												return o("throw", t, a, c)
											}
									  )
							}
							c(u.arg)
						}
						var i
						n(this, "_invoke", {
							value: function (t, r) {
								function n() {
									return new e(function (e, n) {
										o(t, r, e, n)
									})
								}
								return (i = i ? i.then(n, n) : n())
							},
						})
					}
					function x(t, e, r) {
						var n = "suspendedStart"
						return function (o, i) {
							if ("executing" === n) throw new Error("Generator is already running")
							if ("completed" === n) {
								if ("throw" === o) throw i
								return { value: void 0, done: !0 }
							}
							for (r.method = o, r.arg = i; ; ) {
								var a = r.delegate
								if (a) {
									var c = j(a, r)
									if (c) {
										if (c === l) continue
										return c
									}
								}
								if ("next" === r.method) r.sent = r._sent = r.arg
								else if ("throw" === r.method) {
									if ("suspendedStart" === n) throw ((n = "completed"), r.arg)
									r.dispatchException(r.arg)
								} else "return" === r.method && r.abrupt("return", r.arg)
								n = "executing"
								var u = p(t, e, r)
								if ("normal" === u.type) {
									if (((n = r.done ? "completed" : "suspendedYield"), u.arg === l)) continue
									return { value: u.arg, done: r.done }
								}
								"throw" === u.type && ((n = "completed"), (r.method = "throw"), (r.arg = u.arg))
							}
						}
					}
					function j(t, e) {
						var r = t.iterator[e.method]
						if (void 0 === r) {
							if (((e.delegate = null), "throw" === e.method)) {
								if (t.iterator.return && ((e.method = "return"), (e.arg = void 0), j(t, e), "throw" === e.method))
									return l
								;(e.method = "throw"), (e.arg = new TypeError("The iterator does not provide a 'throw' method"))
							}
							return l
						}
						var n = p(r, t.iterator, e.arg)
						if ("throw" === n.type) return (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), l
						var o = n.arg
						return o
							? o.done
								? ((e[t.resultName] = o.value),
								  (e.next = t.nextLoc),
								  "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
								  (e.delegate = null),
								  l)
								: o
							: ((e.method = "throw"),
							  (e.arg = new TypeError("iterator result is not an object")),
							  (e.delegate = null),
							  l)
					}
					function k(t) {
						var e = { tryLoc: t[0] }
						1 in t && (e.catchLoc = t[1]),
							2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
							this.tryEntries.push(e)
					}
					function L(t) {
						var e = t.completion || {}
						;(e.type = "normal"), delete e.arg, (t.completion = e)
					}
					function T(t) {
						;(this.tryEntries = [{ tryLoc: "root" }]), t.forEach(k, this), this.reset(!0)
					}
					function E(t) {
						if (t) {
							var e = t[i]
							if (e) return e.call(t)
							if ("function" == typeof t.next) return t
							if (!isNaN(t.length)) {
								var n = -1,
									o = function e() {
										for (; ++n < t.length; ) if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e
										return (e.value = void 0), (e.done = !0), e
									}
								return (o.next = o)
							}
						}
						return { next: S }
					}
					function S() {
						return { value: void 0, done: !0 }
					}
					return (
						(h.prototype = y),
						n(g, "constructor", { value: y, configurable: !0 }),
						n(y, "constructor", { value: h, configurable: !0 }),
						(h.displayName = u(y, c, "GeneratorFunction")),
						(t.isGeneratorFunction = function (t) {
							var e = "function" == typeof t && t.constructor
							return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
						}),
						(t.mark = function (t) {
							return (
								Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : ((t.__proto__ = y), u(t, c, "GeneratorFunction")),
								(t.prototype = Object.create(g)),
								t
							)
						}),
						(t.awrap = function (t) {
							return { __await: t }
						}),
						w(b.prototype),
						u(b.prototype, a, function () {
							return this
						}),
						(t.AsyncIterator = b),
						(t.async = function (e, r, n, o, i) {
							void 0 === i && (i = Promise)
							var a = new b(s(e, r, n, o), i)
							return t.isGeneratorFunction(r)
								? a
								: a.next().then(function (t) {
										return t.done ? t.value : a.next()
								  })
						}),
						w(g),
						u(g, c, "Generator"),
						u(g, i, function () {
							return this
						}),
						u(g, "toString", function () {
							return "[object Generator]"
						}),
						(t.keys = function (t) {
							var e = Object(t),
								r = []
							for (var n in e) r.push(n)
							return (
								r.reverse(),
								function t() {
									for (; r.length; ) {
										var n = r.pop()
										if (n in e) return (t.value = n), (t.done = !1), t
									}
									return (t.done = !0), t
								}
							)
						}),
						(t.values = E),
						(T.prototype = {
							constructor: T,
							reset: function (t) {
								if (
									((this.prev = 0),
									(this.next = 0),
									(this.sent = this._sent = void 0),
									(this.done = !1),
									(this.delegate = null),
									(this.method = "next"),
									(this.arg = void 0),
									this.tryEntries.forEach(L),
									!t)
								)
									for (var e in this)
										"t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
							},
							stop: function () {
								this.done = !0
								var t = this.tryEntries[0].completion
								if ("throw" === t.type) throw t.arg
								return this.rval
							},
							dispatchException: function (t) {
								if (this.done) throw t
								var e = this
								function n(r, n) {
									return (
										(a.type = "throw"), (a.arg = t), (e.next = r), n && ((e.method = "next"), (e.arg = void 0)), !!n
									)
								}
								for (var o = this.tryEntries.length - 1; o >= 0; --o) {
									var i = this.tryEntries[o],
										a = i.completion
									if ("root" === i.tryLoc) return n("end")
									if (i.tryLoc <= this.prev) {
										var c = r.call(i, "catchLoc"),
											u = r.call(i, "finallyLoc")
										if (c && u) {
											if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
											if (this.prev < i.finallyLoc) return n(i.finallyLoc)
										} else if (c) {
											if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
										} else {
											if (!u) throw new Error("try statement without catch or finally")
											if (this.prev < i.finallyLoc) return n(i.finallyLoc)
										}
									}
								}
							},
							abrupt: function (t, e) {
								for (var n = this.tryEntries.length - 1; n >= 0; --n) {
									var o = this.tryEntries[n]
									if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
										var i = o
										break
									}
								}
								i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null)
								var a = i ? i.completion : {}
								return (
									(a.type = t),
									(a.arg = e),
									i ? ((this.method = "next"), (this.next = i.finallyLoc), l) : this.complete(a)
								)
							},
							complete: function (t, e) {
								if ("throw" === t.type) throw t.arg
								return (
									"break" === t.type || "continue" === t.type
										? (this.next = t.arg)
										: "return" === t.type
										? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
										: "normal" === t.type && e && (this.next = e),
									l
								)
							},
							finish: function (t) {
								for (var e = this.tryEntries.length - 1; e >= 0; --e) {
									var r = this.tryEntries[e]
									if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), L(r), l
								}
							},
							catch: function (t) {
								for (var e = this.tryEntries.length - 1; e >= 0; --e) {
									var r = this.tryEntries[e]
									if (r.tryLoc === t) {
										var n = r.completion
										if ("throw" === n.type) {
											var o = n.arg
											L(r)
										}
										return o
									}
								}
								throw new Error("illegal catch attempt")
							},
							delegateYield: function (t, e, r) {
								return (
									(this.delegate = { iterator: E(t), resultName: e, nextLoc: r }),
									"next" === this.method && (this.arg = void 0),
									l
								)
							},
						}),
						t
					)
				}
				function ue(t, e, r, n, o, i, a) {
					try {
						var c = t[i](a),
							u = c.value
					} catch (t) {
						return void r(t)
					}
					c.done ? e(u) : Promise.resolve(u).then(n, o)
				}
				function se(t) {
					return function () {
						var e = this,
							r = arguments
						return new Promise(function (n, o) {
							var i = t.apply(e, r)
							function a(t) {
								ue(i, n, o, a, c, "next", t)
							}
							function c(t) {
								ue(i, n, o, a, c, "throw", t)
							}
							a(void 0)
						})
					}
				}
				function pe(t) {
					return le.apply(this, arguments)
				}
				function le() {
					return (le = se(
						ce().mark(function t(e) {
							var r
							return ce().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (
												(t.t0 = B),
												(t.t1 = "".concat(n.apiBaseURL, "/v1/eventbus/clients/").concat(e, "/cameras")),
												(t.next = 4),
												Le()
											)
										case 4:
											return (t.t2 = t.sent), (t.next = 7), t.t0.get.call(t.t0, t.t1, t.t2)
										case 7:
											return (r = t.sent), t.abrupt("return", r.data.items)
										case 9:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function fe(t) {
					return he.apply(this, arguments)
				}
				function he() {
					return (he = se(
						ce().mark(function t(e) {
							var r, o, i, a
							return ce().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (
												(r = e.cameraId),
												(o = e.clientId),
												(i = { source: { id: r } }),
												(t.t0 = B),
												(t.t1 = "".concat(n.apiBaseURL, "/v1/eventbus/").concat(o, "/preview")),
												(t.t2 = i),
												(t.next = 7),
												Le()
											)
										case 7:
											return (t.t3 = t.sent), (t.next = 10), t.t0.post.call(t.t0, t.t1, t.t2, t.t3)
										case 10:
											return (a = t.sent), t.abrupt("return", a.data.image)
										case 12:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function ye(t) {
					return ve.apply(this, arguments)
				}
				function ve() {
					return (ve = se(
						ce().mark(function t(e) {
							var r, o, i, a, c, u, s, p, l, f, h, y, v
							return ce().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											if (
												((r = e.meetingId),
												(o = e.meetingToken),
												(i = e.surfaceType),
												(a = e.cameraId),
												(c = e.sipUri),
												(u = e.flipLeftRight),
												(s = e.flipUpDown),
												(p = e.rotation),
												(l = e.fixedCorners),
												(f = e.clientId),
												(h = e.customCorners),
												(y = {
													config: { surface_type: i },
													app_config: { meeting_id: r, meeting_token: o },
													runtime_config: Ee({
														fixedCorners: l,
														flipLeftRight: u,
														flipUpDown: s,
														rotation: p,
														customCorners: h,
													}),
												}),
												a || c)
											) {
												t.next = 4
												break
											}
											return t.abrupt(
												"return",
												Promise.reject("Invalid request: either sipUri or cameraId should be specified")
											)
										case 4:
											if (!a || !c) {
												t.next = 8
												break
											}
											return t.abrupt(
												"return",
												Promise.reject(
													"Invalid request: both sipUri (".concat(c, ") and cameraId (").concat(c, ") are specified")
												)
											)
										case 8:
											c ? (y.sip_uri = c) : (y.camera = { id: a })
										case 9:
											return (
												(v = { start_request: y }),
												(t.t0 = B),
												(t.t1 = "".concat(n.apiBaseURL, "/v1/eventbus/clients/").concat(f, "/start")),
												(t.t2 = v),
												(t.next = 15),
												Le()
											)
										case 15:
											return (t.t3 = t.sent), t.abrupt("return", t.t0.post.call(t.t0, t.t1, t.t2, t.t3))
										case 17:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function de(t) {
					return me.apply(this, arguments)
				}
				function me() {
					return (me = se(
						ce().mark(function t(e) {
							var r
							return ce().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (
												(r = {}),
												(t.t0 = B),
												(t.t1 = "".concat(n.apiBaseURL, "/v1/eventbus/").concat(e, "/stop")),
												(t.t2 = r),
												(t.next = 6),
												Le()
											)
										case 6:
											return (t.t3 = t.sent), t.abrupt("return", t.t0.post.call(t.t0, t.t1, t.t2, t.t3))
										case 8:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function ge(t) {
					return we.apply(this, arguments)
				}
				function we() {
					return (we = se(
						ce().mark(function t(e) {
							return ce().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (
												(t.t0 = B), (t.t1 = "".concat(n.apiBaseURL, "/v1/eventbus")), (t.t2 = e), (t.next = 5), Le()
											)
										case 5:
											return (t.t3 = t.sent), t.abrupt("return", t.t0.post.call(t.t0, t.t1, t.t2, t.t3))
										case 7:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function be(t) {
					return xe.apply(this, arguments)
				}
				function xe() {
					return (xe = se(
						ce().mark(function t(e) {
							var r, o, i, a, c, u, s
							return ce().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (
												(r = e.flipLeftRight),
												(o = e.flipUpDown),
												(i = e.rotation),
												(a = e.fixedCorners),
												(c = e.customCorners),
												(u = e.clientId),
												(s = {
													runtime_config_request: {
														runtime_config: Ee({
															fixedCorners: a,
															flipLeftRight: r,
															flipUpDown: o,
															rotation: i,
															customCorners: c,
														}),
													},
												}),
												(t.t0 = B),
												(t.t1 = "".concat(n.apiBaseURL, "/v1/eventbus/").concat(u, "/runtime_config")),
												(t.t2 = s),
												(t.next = 7),
												Le()
											)
										case 7:
											return (t.t3 = t.sent), t.abrupt("return", t.t0.post.call(t.t0, t.t1, t.t2, t.t3))
										case 9:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function je() {
					return ke.apply(this, arguments)
				}
				function ke() {
					return (ke = se(
						ce().mark(function t() {
							var e
							return ce().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (t.t0 = B), (t.t1 = "".concat(n.apiBaseURL, "/v1/eventbus/clients")), (t.next = 4), Le()
										case 4:
											return (t.t2 = t.sent), (t.next = 7), t.t0.get.call(t.t0, t.t1, t.t2)
										case 7:
											return (e = t.sent), t.abrupt("return", e.data.clients)
										case 9:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Le() {
					return Te.apply(this, arguments)
				}
				function Te() {
					return (Te = se(
						ce().mark(function t() {
							return ce().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (t.next = 2), nt.getUserToken()
										case 2:
											return (
												(t.t0 = t.sent),
												t.abrupt("return", {
													"Content-Type": "application/json",
													Accept: "application/json",
													"x-jibb-user-jwt": t.t0,
												})
											)
										case 4:
										case "end":
											return t.stop()
									}
							}, t)
						})
					)).apply(this, arguments)
				}
				function Ee(t) {
					var e = t.flipLeftRight,
						r = t.flipUpDown,
						n = t.fixedCorners,
						o = t.rotation,
						i = t.customCorners
					switch (o) {
						case 90:
							o = "1"
							break
						case 180:
						case -180:
							o = "2"
							break
						case -90:
						case 270:
							o = "3"
							break
						default:
							o = "0"
					}
					return {
						custom_corners: i || [],
						rotation: o,
						enable_color: !1,
						fixed_corners: n,
						enable_estimation: !1,
						flip_up_down: r || !1,
						flip_left_right: e || !1,
					}
				}
				Error
				const Se = { Auth: nt, Config: n, Meeting: t, EventBus: e }
			})(),
			i.default
		)
	})()
)
