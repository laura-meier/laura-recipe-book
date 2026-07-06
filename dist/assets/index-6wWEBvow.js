function v2(e, r) {
  for (var o = 0; o < r.length; o++) {
    const l = r[o];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const s in l)
        if (s !== "default" && !(s in e)) {
          const c = Object.getOwnPropertyDescriptor(l, s);
          c && Object.defineProperty(e, s, c.get ? c : { enumerable: !0, get: () => l[s] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) l(s);
  new MutationObserver((s) => {
    for (const c of s)
      if (c.type === "childList")
        for (const u of c.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && l(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(s) {
    const c = {};
    return (
      s.integrity && (c.integrity = s.integrity),
      s.referrerPolicy && (c.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (c.credentials = "omit")
          : (c.credentials = "same-origin"),
      c
    );
  }
  function l(s) {
    if (s.ep) return;
    s.ep = !0;
    const c = o(s);
    fetch(s.href, c);
  }
})();
function fp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var rm = { exports: {} },
  Ss = {};
var x0;
function y2() {
  if (x0) return Ss;
  x0 = 1;
  var e = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function o(l, s, c) {
    var u = null;
    if ((c !== void 0 && (u = "" + c), s.key !== void 0 && (u = "" + s.key), "key" in s)) {
      c = {};
      for (var f in s) f !== "key" && (c[f] = s[f]);
    } else c = s;
    return ((s = c.ref), { $$typeof: e, type: l, key: u, ref: s !== void 0 ? s : null, props: c });
  }
  return ((Ss.Fragment = r), (Ss.jsx = o), (Ss.jsxs = o), Ss);
}
var C0;
function b2() {
  return (C0 || ((C0 = 1), (rm.exports = y2())), rm.exports);
}
var w = b2(),
  am = { exports: {} },
  ws = {},
  om = { exports: {} },
  lm = {};
var E0;
function S2() {
  return (
    E0 ||
      ((E0 = 1),
      (function (e) {
        function r(N, k) {
          var B = N.length;
          N.push(k);
          e: for (; 0 < B; ) {
            var F = (B - 1) >>> 1,
              Z = N[F];
            if (0 < s(Z, k)) ((N[F] = k), (N[B] = Z), (B = F));
            else break e;
          }
        }
        function o(N) {
          return N.length === 0 ? null : N[0];
        }
        function l(N) {
          if (N.length === 0) return null;
          var k = N[0],
            B = N.pop();
          if (B !== k) {
            N[0] = B;
            e: for (var F = 0, Z = N.length, O = Z >>> 1; F < O; ) {
              var P = 2 * (F + 1) - 1,
                Q = N[P],
                ae = P + 1,
                ie = N[ae];
              if (0 > s(Q, B))
                ae < Z && 0 > s(ie, Q)
                  ? ((N[F] = ie), (N[ae] = B), (F = ae))
                  : ((N[F] = Q), (N[P] = B), (F = P));
              else if (ae < Z && 0 > s(ie, B)) ((N[F] = ie), (N[ae] = B), (F = ae));
              else break e;
            }
          }
          return k;
        }
        function s(N, k) {
          var B = N.sortIndex - k.sortIndex;
          return B !== 0 ? B : N.id - k.id;
        }
        if (
          ((e.unstable_now = void 0),
          typeof performance == "object" && typeof performance.now == "function")
        ) {
          var c = performance;
          e.unstable_now = function () {
            return c.now();
          };
        } else {
          var u = Date,
            f = u.now();
          e.unstable_now = function () {
            return u.now() - f;
          };
        }
        var d = [],
          m = [],
          v = 1,
          g = null,
          y = 3,
          b = !1,
          x = !1,
          C = !1,
          R = !1,
          T = typeof setTimeout == "function" ? setTimeout : null,
          _ = typeof clearTimeout == "function" ? clearTimeout : null,
          D = typeof setImmediate < "u" ? setImmediate : null;
        function j(N) {
          for (var k = o(m); k !== null; ) {
            if (k.callback === null) l(m);
            else if (k.startTime <= N) (l(m), (k.sortIndex = k.expirationTime), r(d, k));
            else break;
            k = o(m);
          }
        }
        function z(N) {
          if (((C = !1), j(N), !x))
            if (o(d) !== null) ((x = !0), H || ((H = !0), ne()));
            else {
              var k = o(m);
              k !== null && re(z, k.startTime - N);
            }
        }
        var H = !1,
          $ = -1,
          M = 5,
          K = -1;
        function Y() {
          return R ? !0 : !(e.unstable_now() - K < M);
        }
        function ee() {
          if (((R = !1), H)) {
            var N = e.unstable_now();
            K = N;
            var k = !0;
            try {
              e: {
                ((x = !1), C && ((C = !1), _($), ($ = -1)), (b = !0));
                var B = y;
                try {
                  t: {
                    for (j(N), g = o(d); g !== null && !(g.expirationTime > N && Y()); ) {
                      var F = g.callback;
                      if (typeof F == "function") {
                        ((g.callback = null), (y = g.priorityLevel));
                        var Z = F(g.expirationTime <= N);
                        if (((N = e.unstable_now()), typeof Z == "function")) {
                          ((g.callback = Z), j(N), (k = !0));
                          break t;
                        }
                        (g === o(d) && l(d), j(N));
                      } else l(d);
                      g = o(d);
                    }
                    if (g !== null) k = !0;
                    else {
                      var O = o(m);
                      (O !== null && re(z, O.startTime - N), (k = !1));
                    }
                  }
                  break e;
                } finally {
                  ((g = null), (y = B), (b = !1));
                }
                k = void 0;
              }
            } finally {
              k ? ne() : (H = !1);
            }
          }
        }
        var ne;
        if (typeof D == "function")
          ne = function () {
            D(ee);
          };
        else if (typeof MessageChannel < "u") {
          var oe = new MessageChannel(),
            U = oe.port2;
          ((oe.port1.onmessage = ee),
            (ne = function () {
              U.postMessage(null);
            }));
        } else
          ne = function () {
            T(ee, 0);
          };
        function re(N, k) {
          $ = T(function () {
            N(e.unstable_now());
          }, k);
        }
        ((e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (e.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (M = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return y;
          }),
          (e.unstable_next = function (N) {
            switch (y) {
              case 1:
              case 2:
              case 3:
                var k = 3;
                break;
              default:
                k = y;
            }
            var B = y;
            y = k;
            try {
              return N();
            } finally {
              y = B;
            }
          }),
          (e.unstable_requestPaint = function () {
            R = !0;
          }),
          (e.unstable_runWithPriority = function (N, k) {
            switch (N) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                N = 3;
            }
            var B = y;
            y = N;
            try {
              return k();
            } finally {
              y = B;
            }
          }),
          (e.unstable_scheduleCallback = function (N, k, B) {
            var F = e.unstable_now();
            switch (
              (typeof B == "object" && B !== null
                ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? F + B : F))
                : (B = F),
              N)
            ) {
              case 1:
                var Z = -1;
                break;
              case 2:
                Z = 250;
                break;
              case 5:
                Z = 1073741823;
                break;
              case 4:
                Z = 1e4;
                break;
              default:
                Z = 5e3;
            }
            return (
              (Z = B + Z),
              (N = {
                id: v++,
                callback: k,
                priorityLevel: N,
                startTime: B,
                expirationTime: Z,
                sortIndex: -1,
              }),
              B > F
                ? ((N.sortIndex = B),
                  r(m, N),
                  o(d) === null && N === o(m) && (C ? (_($), ($ = -1)) : (C = !0), re(z, B - F)))
                : ((N.sortIndex = Z), r(d, N), x || b || ((x = !0), H || ((H = !0), ne()))),
              N
            );
          }),
          (e.unstable_shouldYield = Y),
          (e.unstable_wrapCallback = function (N) {
            var k = y;
            return function () {
              var B = y;
              y = k;
              try {
                return N.apply(this, arguments);
              } finally {
                y = B;
              }
            };
          }));
      })(lm)),
    lm
  );
}
var R0;
function w2() {
  return (R0 || ((R0 = 1), (om.exports = S2())), om.exports);
}
var im = { exports: {} },
  Je = {};
var T0;
function x2() {
  if (T0) return Je;
  T0 = 1;
  var e = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    u = Symbol.for("react.context"),
    f = Symbol.for("react.forward_ref"),
    d = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    g = Symbol.for("react.activity"),
    y = Symbol.iterator;
  function b(O) {
    return O === null || typeof O != "object"
      ? null
      : ((O = (y && O[y]) || O["@@iterator"]), typeof O == "function" ? O : null);
  }
  var x = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    C = Object.assign,
    R = {};
  function T(O, P, Q) {
    ((this.props = O), (this.context = P), (this.refs = R), (this.updater = Q || x));
  }
  ((T.prototype.isReactComponent = {}),
    (T.prototype.setState = function (O, P) {
      if (typeof O != "object" && typeof O != "function" && O != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, O, P, "setState");
    }),
    (T.prototype.forceUpdate = function (O) {
      this.updater.enqueueForceUpdate(this, O, "forceUpdate");
    }));
  function _() {}
  _.prototype = T.prototype;
  function D(O, P, Q) {
    ((this.props = O), (this.context = P), (this.refs = R), (this.updater = Q || x));
  }
  var j = (D.prototype = new _());
  ((j.constructor = D), C(j, T.prototype), (j.isPureReactComponent = !0));
  var z = Array.isArray;
  function H() {}
  var $ = { H: null, A: null, T: null, S: null },
    M = Object.prototype.hasOwnProperty;
  function K(O, P, Q) {
    var ae = Q.ref;
    return { $$typeof: e, type: O, key: P, ref: ae !== void 0 ? ae : null, props: Q };
  }
  function Y(O, P) {
    return K(O.type, P, O.props);
  }
  function ee(O) {
    return typeof O == "object" && O !== null && O.$$typeof === e;
  }
  function ne(O) {
    var P = { "=": "=0", ":": "=2" };
    return (
      "$" +
      O.replace(/[=:]/g, function (Q) {
        return P[Q];
      })
    );
  }
  var oe = /\/+/g;
  function U(O, P) {
    return typeof O == "object" && O !== null && O.key != null ? ne("" + O.key) : P.toString(36);
  }
  function re(O) {
    switch (O.status) {
      case "fulfilled":
        return O.value;
      case "rejected":
        throw O.reason;
      default:
        switch (
          (typeof O.status == "string"
            ? O.then(H, H)
            : ((O.status = "pending"),
              O.then(
                function (P) {
                  O.status === "pending" && ((O.status = "fulfilled"), (O.value = P));
                },
                function (P) {
                  O.status === "pending" && ((O.status = "rejected"), (O.reason = P));
                },
              )),
          O.status)
        ) {
          case "fulfilled":
            return O.value;
          case "rejected":
            throw O.reason;
        }
    }
    throw O;
  }
  function N(O, P, Q, ae, ie) {
    var ue = typeof O;
    (ue === "undefined" || ue === "boolean") && (O = null);
    var ge = !1;
    if (O === null) ge = !0;
    else
      switch (ue) {
        case "bigint":
        case "string":
        case "number":
          ge = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case e:
            case r:
              ge = !0;
              break;
            case v:
              return ((ge = O._init), N(ge(O._payload), P, Q, ae, ie));
          }
      }
    if (ge)
      return (
        (ie = ie(O)),
        (ge = ae === "" ? "." + U(O, 0) : ae),
        z(ie)
          ? ((Q = ""),
            ge != null && (Q = ge.replace(oe, "$&/") + "/"),
            N(ie, P, Q, "", function (Ye) {
              return Ye;
            }))
          : ie != null &&
            (ee(ie) &&
              (ie = Y(
                ie,
                Q +
                  (ie.key == null || (O && O.key === ie.key)
                    ? ""
                    : ("" + ie.key).replace(oe, "$&/") + "/") +
                  ge,
              )),
            P.push(ie)),
        1
      );
    ge = 0;
    var Se = ae === "" ? "." : ae + ":";
    if (z(O))
      for (var Ce = 0; Ce < O.length; Ce++)
        ((ae = O[Ce]), (ue = Se + U(ae, Ce)), (ge += N(ae, P, Q, ue, ie)));
    else if (((Ce = b(O)), typeof Ce == "function"))
      for (O = Ce.call(O), Ce = 0; !(ae = O.next()).done; )
        ((ae = ae.value), (ue = Se + U(ae, Ce++)), (ge += N(ae, P, Q, ue, ie)));
    else if (ue === "object") {
      if (typeof O.then == "function") return N(re(O), P, Q, ae, ie);
      throw (
        (P = String(O)),
        Error(
          "Objects are not valid as a React child (found: " +
            (P === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : P) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ge;
  }
  function k(O, P, Q) {
    if (O == null) return O;
    var ae = [],
      ie = 0;
    return (
      N(O, ae, "", "", function (ue) {
        return P.call(Q, ue, ie++);
      }),
      ae
    );
  }
  function B(O) {
    if (O._status === -1) {
      var P = O._result;
      ((P = P()),
        P.then(
          function (Q) {
            (O._status === 0 || O._status === -1) && ((O._status = 1), (O._result = Q));
          },
          function (Q) {
            (O._status === 0 || O._status === -1) && ((O._status = 2), (O._result = Q));
          },
        ),
        O._status === -1 && ((O._status = 0), (O._result = P)));
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var F =
      typeof reportError == "function"
        ? reportError
        : function (O) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var P = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof O == "object" && O !== null && typeof O.message == "string"
                    ? String(O.message)
                    : String(O),
                error: O,
              });
              if (!window.dispatchEvent(P)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", O);
              return;
            }
            console.error(O);
          },
    Z = {
      map: k,
      forEach: function (O, P, Q) {
        k(
          O,
          function () {
            P.apply(this, arguments);
          },
          Q,
        );
      },
      count: function (O) {
        var P = 0;
        return (
          k(O, function () {
            P++;
          }),
          P
        );
      },
      toArray: function (O) {
        return (
          k(O, function (P) {
            return P;
          }) || []
        );
      },
      only: function (O) {
        if (!ee(O))
          throw Error("React.Children.only expected to receive a single React element child.");
        return O;
      },
    };
  return (
    (Je.Activity = g),
    (Je.Children = Z),
    (Je.Component = T),
    (Je.Fragment = o),
    (Je.Profiler = s),
    (Je.PureComponent = D),
    (Je.StrictMode = l),
    (Je.Suspense = d),
    (Je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $),
    (Je.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (O) {
        return $.H.useMemoCache(O);
      },
    }),
    (Je.cache = function (O) {
      return function () {
        return O.apply(null, arguments);
      };
    }),
    (Je.cacheSignal = function () {
      return null;
    }),
    (Je.cloneElement = function (O, P, Q) {
      if (O == null) throw Error("The argument must be a React element, but you passed " + O + ".");
      var ae = C({}, O.props),
        ie = O.key;
      if (P != null)
        for (ue in (P.key !== void 0 && (ie = "" + P.key), P))
          !M.call(P, ue) ||
            ue === "key" ||
            ue === "__self" ||
            ue === "__source" ||
            (ue === "ref" && P.ref === void 0) ||
            (ae[ue] = P[ue]);
      var ue = arguments.length - 2;
      if (ue === 1) ae.children = Q;
      else if (1 < ue) {
        for (var ge = Array(ue), Se = 0; Se < ue; Se++) ge[Se] = arguments[Se + 2];
        ae.children = ge;
      }
      return K(O.type, ie, ae);
    }),
    (Je.createContext = function (O) {
      return (
        (O = {
          $$typeof: u,
          _currentValue: O,
          _currentValue2: O,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (O.Provider = O),
        (O.Consumer = { $$typeof: c, _context: O }),
        O
      );
    }),
    (Je.createElement = function (O, P, Q) {
      var ae,
        ie = {},
        ue = null;
      if (P != null)
        for (ae in (P.key !== void 0 && (ue = "" + P.key), P))
          M.call(P, ae) && ae !== "key" && ae !== "__self" && ae !== "__source" && (ie[ae] = P[ae]);
      var ge = arguments.length - 2;
      if (ge === 1) ie.children = Q;
      else if (1 < ge) {
        for (var Se = Array(ge), Ce = 0; Ce < ge; Ce++) Se[Ce] = arguments[Ce + 2];
        ie.children = Se;
      }
      if (O && O.defaultProps)
        for (ae in ((ge = O.defaultProps), ge)) ie[ae] === void 0 && (ie[ae] = ge[ae]);
      return K(O, ue, ie);
    }),
    (Je.createRef = function () {
      return { current: null };
    }),
    (Je.forwardRef = function (O) {
      return { $$typeof: f, render: O };
    }),
    (Je.isValidElement = ee),
    (Je.lazy = function (O) {
      return { $$typeof: v, _payload: { _status: -1, _result: O }, _init: B };
    }),
    (Je.memo = function (O, P) {
      return { $$typeof: m, type: O, compare: P === void 0 ? null : P };
    }),
    (Je.startTransition = function (O) {
      var P = $.T,
        Q = {};
      $.T = Q;
      try {
        var ae = O(),
          ie = $.S;
        (ie !== null && ie(Q, ae),
          typeof ae == "object" && ae !== null && typeof ae.then == "function" && ae.then(H, F));
      } catch (ue) {
        F(ue);
      } finally {
        (P !== null && Q.types !== null && (P.types = Q.types), ($.T = P));
      }
    }),
    (Je.unstable_useCacheRefresh = function () {
      return $.H.useCacheRefresh();
    }),
    (Je.use = function (O) {
      return $.H.use(O);
    }),
    (Je.useActionState = function (O, P, Q) {
      return $.H.useActionState(O, P, Q);
    }),
    (Je.useCallback = function (O, P) {
      return $.H.useCallback(O, P);
    }),
    (Je.useContext = function (O) {
      return $.H.useContext(O);
    }),
    (Je.useDebugValue = function () {}),
    (Je.useDeferredValue = function (O, P) {
      return $.H.useDeferredValue(O, P);
    }),
    (Je.useEffect = function (O, P) {
      return $.H.useEffect(O, P);
    }),
    (Je.useEffectEvent = function (O) {
      return $.H.useEffectEvent(O);
    }),
    (Je.useId = function () {
      return $.H.useId();
    }),
    (Je.useImperativeHandle = function (O, P, Q) {
      return $.H.useImperativeHandle(O, P, Q);
    }),
    (Je.useInsertionEffect = function (O, P) {
      return $.H.useInsertionEffect(O, P);
    }),
    (Je.useLayoutEffect = function (O, P) {
      return $.H.useLayoutEffect(O, P);
    }),
    (Je.useMemo = function (O, P) {
      return $.H.useMemo(O, P);
    }),
    (Je.useOptimistic = function (O, P) {
      return $.H.useOptimistic(O, P);
    }),
    (Je.useReducer = function (O, P, Q) {
      return $.H.useReducer(O, P, Q);
    }),
    (Je.useRef = function (O) {
      return $.H.useRef(O);
    }),
    (Je.useState = function (O) {
      return $.H.useState(O);
    }),
    (Je.useSyncExternalStore = function (O, P, Q) {
      return $.H.useSyncExternalStore(O, P, Q);
    }),
    (Je.useTransition = function () {
      return $.H.useTransition();
    }),
    (Je.version = "19.2.6"),
    Je
  );
}
var _0;
function dp() {
  return (_0 || ((_0 = 1), (im.exports = x2())), im.exports);
}
var sm = { exports: {} },
  On = {};
var D0;
function C2() {
  if (D0) return On;
  D0 = 1;
  var e = dp();
  function r(d) {
    var m = "https://react.dev/errors/" + d;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++) m += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      d +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var l = {
      d: {
        f: o,
        r: function () {
          throw Error(r(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for("react.portal");
  function c(d, m, v) {
    var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: g == null ? null : "" + g,
      children: d,
      containerInfo: m,
      implementation: v,
    };
  }
  var u = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function f(d, m) {
    if (d === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l),
    (On.createPortal = function (d, m) {
      var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)) throw Error(r(299));
      return c(d, m, null, v);
    }),
    (On.flushSync = function (d) {
      var m = u.T,
        v = l.p;
      try {
        if (((u.T = null), (l.p = 2), d)) return d();
      } finally {
        ((u.T = m), (l.p = v), l.d.f());
      }
    }),
    (On.preconnect = function (d, m) {
      typeof d == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m = typeof m == "string" ? (m === "use-credentials" ? m : "") : void 0))
          : (m = null),
        l.d.C(d, m));
    }),
    (On.prefetchDNS = function (d) {
      typeof d == "string" && l.d.D(d);
    }),
    (On.preinit = function (d, m) {
      if (typeof d == "string" && m && typeof m.as == "string") {
        var v = m.as,
          g = f(v, m.crossOrigin),
          y = typeof m.integrity == "string" ? m.integrity : void 0,
          b = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        v === "style"
          ? l.d.S(d, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: g,
              integrity: y,
              fetchPriority: b,
            })
          : v === "script" &&
            l.d.X(d, {
              crossOrigin: g,
              integrity: y,
              fetchPriority: b,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (On.preinitModule = function (d, m) {
      if (typeof d == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var v = f(m.as, m.crossOrigin);
            l.d.M(d, {
              crossOrigin: v,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && l.d.M(d);
    }),
    (On.preload = function (d, m) {
      if (typeof d == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
        var v = m.as,
          g = f(v, m.crossOrigin);
        l.d.L(d, v, {
          crossOrigin: g,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (On.preloadModule = function (d, m) {
      if (typeof d == "string")
        if (m) {
          var v = f(m.as, m.crossOrigin);
          l.d.m(d, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: v,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else l.d.m(d);
    }),
    (On.requestFormReset = function (d) {
      l.d.r(d);
    }),
    (On.unstable_batchedUpdates = function (d, m) {
      return d(m);
    }),
    (On.useFormState = function (d, m, v) {
      return u.H.useFormState(d, m, v);
    }),
    (On.useFormStatus = function () {
      return u.H.useHostTransitionStatus();
    }),
    (On.version = "19.2.6"),
    On
  );
}
var A0;
function pS() {
  if (A0) return sm.exports;
  A0 = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (r) {
        console.error(r);
      }
  }
  return (e(), (sm.exports = C2()), sm.exports);
}
var M0;
function E2() {
  if (M0) return ws;
  M0 = 1;
  var e = w2(),
    r = dp(),
    o = pS();
  function l(t) {
    var n = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) n += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function c(t) {
    var n = t,
      a = t;
    if (t.alternate) for (; n.return; ) n = n.return;
    else {
      t = n;
      do ((n = t), (n.flags & 4098) !== 0 && (a = n.return), (t = n.return));
      while (t);
    }
    return n.tag === 3 ? a : null;
  }
  function u(t) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if ((n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)), n !== null))
        return n.dehydrated;
    }
    return null;
  }
  function f(t) {
    if (t.tag === 31) {
      var n = t.memoizedState;
      if ((n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)), n !== null))
        return n.dehydrated;
    }
    return null;
  }
  function d(t) {
    if (c(t) !== t) throw Error(l(188));
  }
  function m(t) {
    var n = t.alternate;
    if (!n) {
      if (((n = c(t)), n === null)) throw Error(l(188));
      return n !== t ? null : t;
    }
    for (var a = t, i = n; ; ) {
      var h = a.return;
      if (h === null) break;
      var p = h.alternate;
      if (p === null) {
        if (((i = h.return), i !== null)) {
          a = i;
          continue;
        }
        break;
      }
      if (h.child === p.child) {
        for (p = h.child; p; ) {
          if (p === a) return (d(h), t);
          if (p === i) return (d(h), n);
          p = p.sibling;
        }
        throw Error(l(188));
      }
      if (a.return !== i.return) ((a = h), (i = p));
      else {
        for (var E = !1, A = h.child; A; ) {
          if (A === a) {
            ((E = !0), (a = h), (i = p));
            break;
          }
          if (A === i) {
            ((E = !0), (i = h), (a = p));
            break;
          }
          A = A.sibling;
        }
        if (!E) {
          for (A = p.child; A; ) {
            if (A === a) {
              ((E = !0), (a = p), (i = h));
              break;
            }
            if (A === i) {
              ((E = !0), (i = p), (a = h));
              break;
            }
            A = A.sibling;
          }
          if (!E) throw Error(l(189));
        }
      }
      if (a.alternate !== i) throw Error(l(190));
    }
    if (a.tag !== 3) throw Error(l(188));
    return a.stateNode.current === a ? t : n;
  }
  function v(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((n = v(t)), n !== null)) return n;
      t = t.sibling;
    }
    return null;
  }
  var g = Object.assign,
    y = Symbol.for("react.element"),
    b = Symbol.for("react.transitional.element"),
    x = Symbol.for("react.portal"),
    C = Symbol.for("react.fragment"),
    R = Symbol.for("react.strict_mode"),
    T = Symbol.for("react.profiler"),
    _ = Symbol.for("react.consumer"),
    D = Symbol.for("react.context"),
    j = Symbol.for("react.forward_ref"),
    z = Symbol.for("react.suspense"),
    H = Symbol.for("react.suspense_list"),
    $ = Symbol.for("react.memo"),
    M = Symbol.for("react.lazy"),
    K = Symbol.for("react.activity"),
    Y = Symbol.for("react.memo_cache_sentinel"),
    ee = Symbol.iterator;
  function ne(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (ee && t[ee]) || t["@@iterator"]), typeof t == "function" ? t : null);
  }
  var oe = Symbol.for("react.client.reference");
  function U(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === oe ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case C:
        return "Fragment";
      case T:
        return "Profiler";
      case R:
        return "StrictMode";
      case z:
        return "Suspense";
      case H:
        return "SuspenseList";
      case K:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case x:
          return "Portal";
        case D:
          return t.displayName || "Context";
        case _:
          return (t._context.displayName || "Context") + ".Consumer";
        case j:
          var n = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = n.displayName || n.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case $:
          return ((n = t.displayName || null), n !== null ? n : U(t.type) || "Memo");
        case M:
          ((n = t._payload), (t = t._init));
          try {
            return U(t(n));
          } catch {}
      }
    return null;
  }
  var re = Array.isArray,
    N = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    k = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    B = { pending: !1, data: null, method: null, action: null },
    F = [],
    Z = -1;
  function O(t) {
    return { current: t };
  }
  function P(t) {
    0 > Z || ((t.current = F[Z]), (F[Z] = null), Z--);
  }
  function Q(t, n) {
    (Z++, (F[Z] = t.current), (t.current = n));
  }
  var ae = O(null),
    ie = O(null),
    ue = O(null),
    ge = O(null);
  function Se(t, n) {
    switch ((Q(ue, n), Q(ie, t), Q(ae, null), n.nodeType)) {
      case 9:
      case 11:
        t = (t = n.documentElement) && (t = t.namespaceURI) ? qb(t) : 0;
        break;
      default:
        if (((t = n.tagName), (n = n.namespaceURI))) ((n = qb(n)), (t = Yb(n, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (P(ae), Q(ae, t));
  }
  function Ce() {
    (P(ae), P(ie), P(ue));
  }
  function Ye(t) {
    t.memoizedState !== null && Q(ge, t);
    var n = ae.current,
      a = Yb(n, t.type);
    n !== a && (Q(ie, t), Q(ae, a));
  }
  function je(t) {
    (ie.current === t && (P(ae), P(ie)), ge.current === t && (P(ge), (gs._currentValue = B)));
  }
  var de, _e;
  function ze(t) {
    if (de === void 0)
      try {
        throw Error();
      } catch (a) {
        var n = a.stack.trim().match(/\n( *(at )?)/);
        ((de = (n && n[1]) || ""),
          (_e =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      de +
      t +
      _e
    );
  }
  var Oe = !1;
  function at(t, n) {
    if (!t || Oe) return "";
    Oe = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var me = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(me.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(me, []);
                } catch (le) {
                  var te = le;
                }
                Reflect.construct(t, [], me);
              } else {
                try {
                  me.call();
                } catch (le) {
                  te = le;
                }
                t.call(me.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (le) {
                te = le;
              }
              (me = t()) && typeof me.catch == "function" && me.catch(function () {});
            }
          } catch (le) {
            if (le && te && typeof le.stack == "string") return [le.stack, te.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var h = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
      h &&
        h.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var p = i.DetermineComponentFrameRoot(),
        E = p[0],
        A = p[1];
      if (E && A) {
        var V = E.split(`
`),
          J = A.split(`
`);
        for (h = i = 0; i < V.length && !V[i].includes("DetermineComponentFrameRoot"); ) i++;
        for (; h < J.length && !J[h].includes("DetermineComponentFrameRoot"); ) h++;
        if (i === V.length || h === J.length)
          for (i = V.length - 1, h = J.length - 1; 1 <= i && 0 <= h && V[i] !== J[h]; ) h--;
        for (; 1 <= i && 0 <= h; i--, h--)
          if (V[i] !== J[h]) {
            if (i !== 1 || h !== 1)
              do
                if ((i--, h--, 0 > h || V[i] !== J[h])) {
                  var se =
                    `
` + V[i].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      se.includes("<anonymous>") &&
                      (se = se.replace("<anonymous>", t.displayName)),
                    se
                  );
                }
              while (1 <= i && 0 <= h);
            break;
          }
      }
    } finally {
      ((Oe = !1), (Error.prepareStackTrace = a));
    }
    return (a = t ? t.displayName || t.name : "") ? ze(a) : "";
  }
  function be(t, n) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ze(t.type);
      case 16:
        return ze("Lazy");
      case 13:
        return t.child !== n && n !== null ? ze("Suspense Fallback") : ze("Suspense");
      case 19:
        return ze("SuspenseList");
      case 0:
      case 15:
        return at(t.type, !1);
      case 11:
        return at(t.type.render, !1);
      case 1:
        return at(t.type, !0);
      case 31:
        return ze("Activity");
      default:
        return "";
    }
  }
  function we(t) {
    try {
      var n = "",
        a = null;
      do ((n += be(t, a)), (a = t), (t = t.return));
      while (t);
      return n;
    } catch (i) {
      return (
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
      );
    }
  }
  var Me = Object.prototype.hasOwnProperty,
    xe = e.unstable_scheduleCallback,
    Be = e.unstable_cancelCallback,
    Ve = e.unstable_shouldYield,
    Xe = e.unstable_requestPaint,
    ot = e.unstable_now,
    We = e.unstable_getCurrentPriorityLevel,
    Ie = e.unstable_ImmediatePriority,
    Yt = e.unstable_UserBlockingPriority,
    pn = e.unstable_NormalPriority,
    Gt = e.unstable_LowPriority,
    zt = e.unstable_IdlePriority,
    nn = e.log,
    An = e.unstable_setDisableYieldValue,
    Vt = null,
    Ht = null;
  function At(t) {
    if ((typeof nn == "function" && An(t), Ht && typeof Ht.setStrictMode == "function"))
      try {
        Ht.setStrictMode(Vt, t);
      } catch {}
  }
  var Ft = Math.clz32 ? Math.clz32 : Lr,
    zr = Math.log,
    kr = Math.LN2;
  function Lr(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((zr(t) / kr) | 0)) | 0);
  }
  var Mn = 256,
    gn = 262144,
    Nn = 4194304;
  function rn(t) {
    var n = t & 42;
    if (n !== 0) return n;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Bn(t, n, a) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var h = 0,
      p = t.suspendedLanes,
      E = t.pingedLanes;
    t = t.warmLanes;
    var A = i & 134217727;
    return (
      A !== 0
        ? ((i = A & ~p),
          i !== 0
            ? (h = rn(i))
            : ((E &= A), E !== 0 ? (h = rn(E)) : a || ((a = A & ~t), a !== 0 && (h = rn(a)))))
        : ((A = i & ~p),
          A !== 0
            ? (h = rn(A))
            : E !== 0
              ? (h = rn(E))
              : a || ((a = i & ~t), a !== 0 && (h = rn(a)))),
      h === 0
        ? 0
        : n !== 0 &&
            n !== h &&
            (n & p) === 0 &&
            ((p = h & -h), (a = n & -n), p >= a || (p === 32 && (a & 4194048) !== 0))
          ? n
          : h
    );
  }
  function xn(t, n) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0;
  }
  function Re(t, n) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function $e() {
    var t = Nn;
    return ((Nn <<= 1), (Nn & 62914560) === 0 && (Nn = 4194304), t);
  }
  function Xt(t) {
    for (var n = [], a = 0; 31 > a; a++) n.push(t);
    return n;
  }
  function an(t, n) {
    ((t.pendingLanes |= n),
      n !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function yt(t, n, a, i, h, p) {
    var E = t.pendingLanes;
    ((t.pendingLanes = a),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= a),
      (t.entangledLanes &= a),
      (t.errorRecoveryDisabledLanes &= a),
      (t.shellSuspendCounter = 0));
    var A = t.entanglements,
      V = t.expirationTimes,
      J = t.hiddenUpdates;
    for (a = E & ~a; 0 < a; ) {
      var se = 31 - Ft(a),
        me = 1 << se;
      ((A[se] = 0), (V[se] = -1));
      var te = J[se];
      if (te !== null)
        for (J[se] = null, se = 0; se < te.length; se++) {
          var le = te[se];
          le !== null && (le.lane &= -536870913);
        }
      a &= ~me;
    }
    (i !== 0 && kt(t, i, 0),
      p !== 0 && h === 0 && t.tag !== 0 && (t.suspendedLanes |= p & ~(E & ~n)));
  }
  function kt(t, n, a) {
    ((t.pendingLanes |= n), (t.suspendedLanes &= ~n));
    var i = 31 - Ft(n);
    ((t.entangledLanes |= n),
      (t.entanglements[i] = t.entanglements[i] | 1073741824 | (a & 261930)));
  }
  function Tt(t, n) {
    var a = (t.entangledLanes |= n);
    for (t = t.entanglements; a; ) {
      var i = 31 - Ft(a),
        h = 1 << i;
      ((h & n) | (t[i] & n) && (t[i] |= n), (a &= ~h));
    }
  }
  function L(t, n) {
    var a = n & -n;
    return ((a = (a & 42) !== 0 ? 1 : I(a)), (a & (t.suspendedLanes | n)) !== 0 ? 0 : a);
  }
  function I(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function G(t) {
    return ((t &= -t), 2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function ce() {
    var t = k.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : p0(t.type));
  }
  function he(t, n) {
    var a = k.p;
    try {
      return ((k.p = t), n());
    } finally {
      k.p = a;
    }
  }
  var Te = Math.random().toString(36).slice(2),
    De = "__reactFiber$" + Te,
    Ae = "__reactProps$" + Te,
    ve = "__reactContainer$" + Te,
    Ue = "__reactEvents$" + Te,
    ke = "__reactListeners$" + Te,
    Ke = "__reactHandles$" + Te,
    qe = "__reactResources$" + Te,
    et = "__reactMarker$" + Te;
  function ut(t) {
    (delete t[De], delete t[Ae], delete t[Ue], delete t[ke], delete t[Ke]);
  }
  function Mt(t) {
    var n = t[De];
    if (n) return n;
    for (var a = t.parentNode; a; ) {
      if ((n = a[ve] || a[De])) {
        if (((a = n.alternate), n.child !== null || (a !== null && a.child !== null)))
          for (t = Jb(t); t !== null; ) {
            if ((a = t[De])) return a;
            t = Jb(t);
          }
        return n;
      }
      ((t = a), (a = t.parentNode));
    }
    return null;
  }
  function ht(t) {
    if ((t = t[De] || t[ve])) {
      var n = t.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3) return t;
    }
    return null;
  }
  function st(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t.stateNode;
    throw Error(l(33));
  }
  function Bt(t) {
    var n = t[qe];
    return (n || (n = t[qe] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), n);
  }
  function ct(t) {
    t[et] = !0;
  }
  var Br = new Set(),
    fr = {};
  function Cn(t, n) {
    (vn(t, n), vn(t + "Capture", n));
  }
  function vn(t, n) {
    for (fr[t] = n, t = 0; t < n.length; t++) Br.add(n[t]);
  }
  var $n = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Sa = {},
    In = {};
  function wa(t) {
    return Me.call(In, t)
      ? !0
      : Me.call(Sa, t)
        ? !1
        : $n.test(t)
          ? (In[t] = !0)
          : ((Sa[t] = !0), !1);
  }
  function $r(t, n, a) {
    if (wa(n))
      if (a === null) t.removeAttribute(n);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(n);
            return;
          case "boolean":
            var i = n.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(n);
              return;
            }
        }
        t.setAttribute(n, "" + a);
      }
  }
  function er(t, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttribute(n, "" + a);
    }
  }
  function Qe(t, n, a, i) {
    if (i === null) t.removeAttribute(a);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(n, a, "" + i);
    }
  }
  function Ct(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Hn(t) {
    var n = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function tr(t, n, a) {
    var i = Object.getOwnPropertyDescriptor(t.constructor.prototype, n);
    if (
      !t.hasOwnProperty(n) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var h = i.get,
        p = i.set;
      return (
        Object.defineProperty(t, n, {
          configurable: !0,
          get: function () {
            return h.call(this);
          },
          set: function (E) {
            ((a = "" + E), p.call(this, E));
          },
        }),
        Object.defineProperty(t, n, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (E) {
            a = "" + E;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[n]);
          },
        }
      );
    }
  }
  function ea(t) {
    if (!t._valueTracker) {
      var n = Hn(t) ? "checked" : "value";
      t._valueTracker = tr(t, n, "" + t[n]);
    }
  }
  function xa(t) {
    if (!t) return !1;
    var n = t._valueTracker;
    if (!n) return !0;
    var a = n.getValue(),
      i = "";
    return (
      t && (i = Hn(t) ? (t.checked ? "true" : "false") : t.value),
      (t = i),
      t !== a ? (n.setValue(t), !0) : !1
    );
  }
  function Et(t) {
    if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")) return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Hr = /[\n"\\]/g;
  function yn(t) {
    return t.replace(Hr, function (n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function ye(t, n, a, i, h, p, E, A) {
    ((t.name = ""),
      E != null && typeof E != "function" && typeof E != "symbol" && typeof E != "boolean"
        ? (t.type = E)
        : t.removeAttribute("type"),
      n != null
        ? E === "number"
          ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + Ct(n))
          : t.value !== "" + Ct(n) && (t.value = "" + Ct(n))
        : (E !== "submit" && E !== "reset") || t.removeAttribute("value"),
      n != null
        ? lt(t, E, Ct(n))
        : a != null
          ? lt(t, E, Ct(a))
          : i != null && t.removeAttribute("value"),
      h == null && p != null && (t.defaultChecked = !!p),
      h != null && (t.checked = h && typeof h != "function" && typeof h != "symbol"),
      A != null && typeof A != "function" && typeof A != "symbol" && typeof A != "boolean"
        ? (t.name = "" + Ct(A))
        : t.removeAttribute("name"));
  }
  function nt(t, n, a, i, h, p, E, A) {
    if (
      (p != null &&
        typeof p != "function" &&
        typeof p != "symbol" &&
        typeof p != "boolean" &&
        (t.type = p),
      n != null || a != null)
    ) {
      if (!((p !== "submit" && p !== "reset") || n != null)) {
        ea(t);
        return;
      }
      ((a = a != null ? "" + Ct(a) : ""),
        (n = n != null ? "" + Ct(n) : a),
        A || n === t.value || (t.value = n),
        (t.defaultValue = n));
    }
    ((i = i ?? h),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (t.checked = A ? t.checked : !!i),
      (t.defaultChecked = !!i),
      E != null &&
        typeof E != "function" &&
        typeof E != "symbol" &&
        typeof E != "boolean" &&
        (t.name = E),
      ea(t));
  }
  function lt(t, n, a) {
    (n === "number" && Et(t.ownerDocument) === t) ||
      t.defaultValue === "" + a ||
      (t.defaultValue = "" + a);
  }
  function bt(t, n, a, i) {
    if (((t = t.options), n)) {
      n = {};
      for (var h = 0; h < a.length; h++) n["$" + a[h]] = !0;
      for (a = 0; a < t.length; a++)
        ((h = n.hasOwnProperty("$" + t[a].value)),
          t[a].selected !== h && (t[a].selected = h),
          h && i && (t[a].defaultSelected = !0));
    } else {
      for (a = "" + Ct(a), n = null, h = 0; h < t.length; h++) {
        if (t[h].value === a) {
          ((t[h].selected = !0), i && (t[h].defaultSelected = !0));
          return;
        }
        n !== null || t[h].disabled || (n = t[h]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function bn(t, n, a) {
    if (n != null && ((n = "" + Ct(n)), n !== t.value && (t.value = n), a == null)) {
      t.defaultValue !== n && (t.defaultValue = n);
      return;
    }
    t.defaultValue = a != null ? "" + Ct(a) : "";
  }
  function Fo(t, n, a, i) {
    if (n == null) {
      if (i != null) {
        if (a != null) throw Error(l(92));
        if (re(i)) {
          if (1 < i.length) throw Error(l(93));
          i = i[0];
        }
        a = i;
      }
      (a == null && (a = ""), (n = a));
    }
    ((a = Ct(n)),
      (t.defaultValue = a),
      (i = t.textContent),
      i === a && i !== "" && i !== null && (t.value = i),
      ea(t));
  }
  function Al(t, n) {
    if (n) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = n;
        return;
      }
    }
    t.textContent = n;
  }
  var dE = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Vg(t, n, a) {
    var i = n.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? i
        ? t.setProperty(n, "")
        : n === "float"
          ? (t.cssFloat = "")
          : (t[n] = "")
      : i
        ? t.setProperty(n, a)
        : typeof a != "number" || a === 0 || dE.has(n)
          ? n === "float"
            ? (t.cssFloat = a)
            : (t[n] = ("" + a).trim())
          : (t[n] = a + "px");
  }
  function Ig(t, n, a) {
    if (n != null && typeof n != "object") throw Error(l(62));
    if (((t = t.style), a != null)) {
      for (var i in a)
        !a.hasOwnProperty(i) ||
          (n != null && n.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? t.setProperty(i, "")
            : i === "float"
              ? (t.cssFloat = "")
              : (t[i] = ""));
      for (var h in n) ((i = n[h]), n.hasOwnProperty(h) && a[h] !== i && Vg(t, h, i));
    } else for (var p in n) n.hasOwnProperty(p) && Vg(t, p, n[p]);
  }
  function Jf(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var hE = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    mE =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function yc(t) {
    return mE.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Ca() {}
  var ed = null;
  function td(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ml = null,
    Nl = null;
  function Fg(t) {
    var n = ht(t);
    if (n && (t = n.stateNode)) {
      var a = t[Ae] || null;
      e: switch (((t = n.stateNode), n.type)) {
        case "input":
          if (
            (ye(
              t,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (n = a.name),
            a.type === "radio" && n != null)
          ) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll('input[name="' + yn("" + n) + '"][type="radio"]'), n = 0;
              n < a.length;
              n++
            ) {
              var i = a[n];
              if (i !== t && i.form === t.form) {
                var h = i[Ae] || null;
                if (!h) throw Error(l(90));
                ye(
                  i,
                  h.value,
                  h.defaultValue,
                  h.defaultValue,
                  h.checked,
                  h.defaultChecked,
                  h.type,
                  h.name,
                );
              }
            }
            for (n = 0; n < a.length; n++) ((i = a[n]), i.form === t.form && xa(i));
          }
          break e;
        case "textarea":
          bn(t, a.value, a.defaultValue);
          break e;
        case "select":
          ((n = a.value), n != null && bt(t, !!a.multiple, n, !1));
      }
    }
  }
  var nd = !1;
  function qg(t, n, a) {
    if (nd) return t(n, a);
    nd = !0;
    try {
      var i = t(n);
      return i;
    } finally {
      if (
        ((nd = !1),
        (Ml !== null || Nl !== null) &&
          (ou(), Ml && ((n = Ml), (t = Nl), (Nl = Ml = null), Fg(n), t)))
      )
        for (n = 0; n < t.length; n++) Fg(t[n]);
    }
  }
  function ji(t, n) {
    var a = t.stateNode;
    if (a === null) return null;
    var i = a[Ae] || null;
    if (i === null) return null;
    a = i[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((i = !i.disabled) ||
          ((t = t.type),
          (i = !(t === "button" || t === "input" || t === "select" || t === "textarea"))),
          (t = !i));
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function") throw Error(l(231, n, typeof a));
    return a;
  }
  var Ea = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    rd = !1;
  if (Ea)
    try {
      var zi = {};
      (Object.defineProperty(zi, "passive", {
        get: function () {
          rd = !0;
        },
      }),
        window.addEventListener("test", zi, zi),
        window.removeEventListener("test", zi, zi));
    } catch {
      rd = !1;
    }
  var ao = null,
    ad = null,
    bc = null;
  function Yg() {
    if (bc) return bc;
    var t,
      n = ad,
      a = n.length,
      i,
      h = "value" in ao ? ao.value : ao.textContent,
      p = h.length;
    for (t = 0; t < a && n[t] === h[t]; t++);
    var E = a - t;
    for (i = 1; i <= E && n[a - i] === h[p - i]; i++);
    return (bc = h.slice(t, 1 < i ? 1 - i : void 0));
  }
  function Sc(t) {
    var n = t.keyCode;
    return (
      "charCode" in t ? ((t = t.charCode), t === 0 && n === 13 && (t = 13)) : (t = n),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function wc() {
    return !0;
  }
  function Gg() {
    return !1;
  }
  function Fn(t) {
    function n(a, i, h, p, E) {
      ((this._reactName = a),
        (this._targetInst = h),
        (this.type = i),
        (this.nativeEvent = p),
        (this.target = E),
        (this.currentTarget = null));
      for (var A in t) t.hasOwnProperty(A) && ((a = t[A]), (this[A] = a ? a(p) : p[A]));
      return (
        (this.isDefaultPrevented = (
          p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1
        )
          ? wc
          : Gg),
        (this.isPropagationStopped = Gg),
        this
      );
    }
    return (
      g(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = wc));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = wc));
        },
        persist: function () {},
        isPersistent: wc,
      }),
      n
    );
  }
  var qo = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    xc = Fn(qo),
    ki = g({}, qo, { view: 0, detail: 0 }),
    pE = Fn(ki),
    od,
    ld,
    Li,
    Cc = g({}, ki, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: sd,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Li &&
              (Li && t.type === "mousemove"
                ? ((od = t.screenX - Li.screenX), (ld = t.screenY - Li.screenY))
                : (ld = od = 0),
              (Li = t)),
            od);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : ld;
      },
    }),
    Xg = Fn(Cc),
    gE = g({}, Cc, { dataTransfer: 0 }),
    vE = Fn(gE),
    yE = g({}, ki, { relatedTarget: 0 }),
    id = Fn(yE),
    bE = g({}, qo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    SE = Fn(bE),
    wE = g({}, qo, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    xE = Fn(wE),
    CE = g({}, qo, { data: 0 }),
    Kg = Fn(CE),
    EE = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    RE = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    TE = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function _E(t) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(t) : (t = TE[t]) ? !!n[t] : !1;
  }
  function sd() {
    return _E;
  }
  var DE = g({}, ki, {
      key: function (t) {
        if (t.key) {
          var n = EE[t.key] || t.key;
          if (n !== "Unidentified") return n;
        }
        return t.type === "keypress"
          ? ((t = Sc(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? RE[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: sd,
      charCode: function (t) {
        return t.type === "keypress" ? Sc(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Sc(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    AE = Fn(DE),
    ME = g({}, Cc, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Qg = Fn(ME),
    NE = g({}, ki, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: sd,
    }),
    OE = Fn(NE),
    jE = g({}, qo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    zE = Fn(jE),
    kE = g({}, Cc, {
      deltaX: function (t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    LE = Fn(kE),
    BE = g({}, qo, { newState: 0, oldState: 0 }),
    $E = Fn(BE),
    HE = [9, 13, 27, 32],
    cd = Ea && "CompositionEvent" in window,
    Bi = null;
  Ea && "documentMode" in document && (Bi = document.documentMode);
  var UE = Ea && "TextEvent" in window && !Bi,
    Zg = Ea && (!cd || (Bi && 8 < Bi && 11 >= Bi)),
    Wg = " ",
    Jg = !1;
  function ev(t, n) {
    switch (t) {
      case "keyup":
        return HE.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function tv(t) {
    return ((t = t.detail), typeof t == "object" && "data" in t ? t.data : null);
  }
  var Ol = !1;
  function PE(t, n) {
    switch (t) {
      case "compositionend":
        return tv(n);
      case "keypress":
        return n.which !== 32 ? null : ((Jg = !0), Wg);
      case "textInput":
        return ((t = n.data), t === Wg && Jg ? null : t);
      default:
        return null;
    }
  }
  function VE(t, n) {
    if (Ol)
      return t === "compositionend" || (!cd && ev(t, n))
        ? ((t = Yg()), (bc = ad = ao = null), (Ol = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Zg && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var IE = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function nv(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === "input" ? !!IE[t.type] : n === "textarea";
  }
  function rv(t, n, a, i) {
    (Ml ? (Nl ? Nl.push(i) : (Nl = [i])) : (Ml = i),
      (n = du(n, "onChange")),
      0 < n.length &&
        ((a = new xc("onChange", "change", null, a, i)), t.push({ event: a, listeners: n })));
  }
  var $i = null,
    Hi = null;
  function FE(t) {
    Hb(t, 0);
  }
  function Ec(t) {
    var n = st(t);
    if (xa(n)) return t;
  }
  function av(t, n) {
    if (t === "change") return n;
  }
  var ov = !1;
  if (Ea) {
    var ud;
    if (Ea) {
      var fd = "oninput" in document;
      if (!fd) {
        var lv = document.createElement("div");
        (lv.setAttribute("oninput", "return;"), (fd = typeof lv.oninput == "function"));
      }
      ud = fd;
    } else ud = !1;
    ov = ud && (!document.documentMode || 9 < document.documentMode);
  }
  function iv() {
    $i && ($i.detachEvent("onpropertychange", sv), (Hi = $i = null));
  }
  function sv(t) {
    if (t.propertyName === "value" && Ec(Hi)) {
      var n = [];
      (rv(n, Hi, t, td(t)), qg(FE, n));
    }
  }
  function qE(t, n, a) {
    t === "focusin"
      ? (iv(), ($i = n), (Hi = a), $i.attachEvent("onpropertychange", sv))
      : t === "focusout" && iv();
  }
  function YE(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Ec(Hi);
  }
  function GE(t, n) {
    if (t === "click") return Ec(n);
  }
  function XE(t, n) {
    if (t === "input" || t === "change") return Ec(n);
  }
  function KE(t, n) {
    return (t === n && (t !== 0 || 1 / t === 1 / n)) || (t !== t && n !== n);
  }
  var nr = typeof Object.is == "function" ? Object.is : KE;
  function Ui(t, n) {
    if (nr(t, n)) return !0;
    if (typeof t != "object" || t === null || typeof n != "object" || n === null) return !1;
    var a = Object.keys(t),
      i = Object.keys(n);
    if (a.length !== i.length) return !1;
    for (i = 0; i < a.length; i++) {
      var h = a[i];
      if (!Me.call(n, h) || !nr(t[h], n[h])) return !1;
    }
    return !0;
  }
  function cv(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function uv(t, n) {
    var a = cv(t);
    t = 0;
    for (var i; a; ) {
      if (a.nodeType === 3) {
        if (((i = t + a.textContent.length), t <= n && i >= n)) return { node: a, offset: n - t };
        t = i;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = cv(a);
    }
  }
  function fv(t, n) {
    return t && n
      ? t === n
        ? !0
        : t && t.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? fv(t, n.parentNode)
            : "contains" in t
              ? t.contains(n)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(n) & 16)
                : !1
      : !1;
  }
  function dv(t) {
    t =
      t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var n = Et(t.document); n instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof n.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = n.contentWindow;
      else break;
      n = Et(t.document);
    }
    return n;
  }
  function dd(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        n === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var QE = Ea && "documentMode" in document && 11 >= document.documentMode,
    jl = null,
    hd = null,
    Pi = null,
    md = !1;
  function hv(t, n, a) {
    var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    md ||
      jl == null ||
      jl !== Et(i) ||
      ((i = jl),
      "selectionStart" in i && dd(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = ((i.ownerDocument && i.ownerDocument.defaultView) || window).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (Pi && Ui(Pi, i)) ||
        ((Pi = i),
        (i = du(hd, "onSelect")),
        0 < i.length &&
          ((n = new xc("onSelect", "select", null, n, a)),
          t.push({ event: n, listeners: i }),
          (n.target = jl))));
  }
  function Yo(t, n) {
    var a = {};
    return (
      (a[t.toLowerCase()] = n.toLowerCase()),
      (a["Webkit" + t] = "webkit" + n),
      (a["Moz" + t] = "moz" + n),
      a
    );
  }
  var zl = {
      animationend: Yo("Animation", "AnimationEnd"),
      animationiteration: Yo("Animation", "AnimationIteration"),
      animationstart: Yo("Animation", "AnimationStart"),
      transitionrun: Yo("Transition", "TransitionRun"),
      transitionstart: Yo("Transition", "TransitionStart"),
      transitioncancel: Yo("Transition", "TransitionCancel"),
      transitionend: Yo("Transition", "TransitionEnd"),
    },
    pd = {},
    mv = {};
  Ea &&
    ((mv = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete zl.animationend.animation,
      delete zl.animationiteration.animation,
      delete zl.animationstart.animation),
    "TransitionEvent" in window || delete zl.transitionend.transition);
  function Go(t) {
    if (pd[t]) return pd[t];
    if (!zl[t]) return t;
    var n = zl[t],
      a;
    for (a in n) if (n.hasOwnProperty(a) && a in mv) return (pd[t] = n[a]);
    return t;
  }
  var pv = Go("animationend"),
    gv = Go("animationiteration"),
    vv = Go("animationstart"),
    ZE = Go("transitionrun"),
    WE = Go("transitionstart"),
    JE = Go("transitioncancel"),
    yv = Go("transitionend"),
    bv = new Map(),
    gd =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  gd.push("scrollEnd");
  function Ur(t, n) {
    (bv.set(t, n), Cn(n, [t]));
  }
  var Rc =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var n = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" && t !== null && typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(n)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    dr = [],
    kl = 0,
    vd = 0;
  function Tc() {
    for (var t = kl, n = (vd = kl = 0); n < t; ) {
      var a = dr[n];
      dr[n++] = null;
      var i = dr[n];
      dr[n++] = null;
      var h = dr[n];
      dr[n++] = null;
      var p = dr[n];
      if (((dr[n++] = null), i !== null && h !== null)) {
        var E = i.pending;
        (E === null ? (h.next = h) : ((h.next = E.next), (E.next = h)), (i.pending = h));
      }
      p !== 0 && Sv(a, h, p);
    }
  }
  function _c(t, n, a, i) {
    ((dr[kl++] = t),
      (dr[kl++] = n),
      (dr[kl++] = a),
      (dr[kl++] = i),
      (vd |= i),
      (t.lanes |= i),
      (t = t.alternate),
      t !== null && (t.lanes |= i));
  }
  function yd(t, n, a, i) {
    return (_c(t, n, a, i), Dc(t));
  }
  function Xo(t, n) {
    return (_c(t, null, null, n), Dc(t));
  }
  function Sv(t, n, a) {
    t.lanes |= a;
    var i = t.alternate;
    i !== null && (i.lanes |= a);
    for (var h = !1, p = t.return; p !== null; )
      ((p.childLanes |= a),
        (i = p.alternate),
        i !== null && (i.childLanes |= a),
        p.tag === 22 && ((t = p.stateNode), t === null || t._visibility & 1 || (h = !0)),
        (t = p),
        (p = p.return));
    return t.tag === 3
      ? ((p = t.stateNode),
        h &&
          n !== null &&
          ((h = 31 - Ft(a)),
          (t = p.hiddenUpdates),
          (i = t[h]),
          i === null ? (t[h] = [n]) : i.push(n),
          (n.lane = a | 536870912)),
        p)
      : null;
  }
  function Dc(t) {
    if (50 < cs) throw ((cs = 0), (_h = null), Error(l(185)));
    for (var n = t.return; n !== null; ) ((t = n), (n = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ll = {};
  function eR(t, n, a, i) {
    ((this.tag = t),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function rr(t, n, a, i) {
    return new eR(t, n, a, i);
  }
  function bd(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Ra(t, n) {
    var a = t.alternate;
    return (
      a === null
        ? ((a = rr(t.tag, n, t.key, t.mode)),
          (a.elementType = t.elementType),
          (a.type = t.type),
          (a.stateNode = t.stateNode),
          (a.alternate = t),
          (t.alternate = a))
        : ((a.pendingProps = n),
          (a.type = t.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = t.flags & 65011712),
      (a.childLanes = t.childLanes),
      (a.lanes = t.lanes),
      (a.child = t.child),
      (a.memoizedProps = t.memoizedProps),
      (a.memoizedState = t.memoizedState),
      (a.updateQueue = t.updateQueue),
      (n = t.dependencies),
      (a.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (a.sibling = t.sibling),
      (a.index = t.index),
      (a.ref = t.ref),
      (a.refCleanup = t.refCleanup),
      a
    );
  }
  function wv(t, n) {
    t.flags &= 65011714;
    var a = t.alternate;
    return (
      a === null
        ? ((t.childLanes = 0),
          (t.lanes = n),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = a.childLanes),
          (t.lanes = a.lanes),
          (t.child = a.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = a.memoizedProps),
          (t.memoizedState = a.memoizedState),
          (t.updateQueue = a.updateQueue),
          (t.type = a.type),
          (n = a.dependencies),
          (t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext })),
      t
    );
  }
  function Ac(t, n, a, i, h, p) {
    var E = 0;
    if (((i = t), typeof t == "function")) bd(t) && (E = 1);
    else if (typeof t == "string")
      E = o2(t, a, ae.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      e: switch (t) {
        case K:
          return ((t = rr(31, a, n, h)), (t.elementType = K), (t.lanes = p), t);
        case C:
          return Ko(a.children, h, p, n);
        case R:
          ((E = 8), (h |= 24));
          break;
        case T:
          return ((t = rr(12, a, n, h | 2)), (t.elementType = T), (t.lanes = p), t);
        case z:
          return ((t = rr(13, a, n, h)), (t.elementType = z), (t.lanes = p), t);
        case H:
          return ((t = rr(19, a, n, h)), (t.elementType = H), (t.lanes = p), t);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case D:
                E = 10;
                break e;
              case _:
                E = 9;
                break e;
              case j:
                E = 11;
                break e;
              case $:
                E = 14;
                break e;
              case M:
                ((E = 16), (i = null));
                break e;
            }
          ((E = 29), (a = Error(l(130, t === null ? "null" : typeof t, ""))), (i = null));
      }
    return ((n = rr(E, a, n, h)), (n.elementType = t), (n.type = i), (n.lanes = p), n);
  }
  function Ko(t, n, a, i) {
    return ((t = rr(7, t, i, n)), (t.lanes = a), t);
  }
  function Sd(t, n, a) {
    return ((t = rr(6, t, null, n)), (t.lanes = a), t);
  }
  function xv(t) {
    var n = rr(18, null, null, 0);
    return ((n.stateNode = t), n);
  }
  function wd(t, n, a) {
    return (
      (n = rr(4, t.children !== null ? t.children : [], t.key, n)),
      (n.lanes = a),
      (n.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      n
    );
  }
  var Cv = new WeakMap();
  function hr(t, n) {
    if (typeof t == "object" && t !== null) {
      var a = Cv.get(t);
      return a !== void 0 ? a : ((n = { value: t, source: n, stack: we(n) }), Cv.set(t, n), n);
    }
    return { value: t, source: n, stack: we(n) };
  }
  var Bl = [],
    $l = 0,
    Mc = null,
    Vi = 0,
    mr = [],
    pr = 0,
    oo = null,
    ta = 1,
    na = "";
  function Ta(t, n) {
    ((Bl[$l++] = Vi), (Bl[$l++] = Mc), (Mc = t), (Vi = n));
  }
  function Ev(t, n, a) {
    ((mr[pr++] = ta), (mr[pr++] = na), (mr[pr++] = oo), (oo = t));
    var i = ta;
    t = na;
    var h = 32 - Ft(i) - 1;
    ((i &= ~(1 << h)), (a += 1));
    var p = 32 - Ft(n) + h;
    if (30 < p) {
      var E = h - (h % 5);
      ((p = (i & ((1 << E) - 1)).toString(32)),
        (i >>= E),
        (h -= E),
        (ta = (1 << (32 - Ft(n) + h)) | (a << h) | i),
        (na = p + t));
    } else ((ta = (1 << p) | (a << h) | i), (na = t));
  }
  function xd(t) {
    t.return !== null && (Ta(t, 1), Ev(t, 1, 0));
  }
  function Cd(t) {
    for (; t === Mc; ) ((Mc = Bl[--$l]), (Bl[$l] = null), (Vi = Bl[--$l]), (Bl[$l] = null));
    for (; t === oo; )
      ((oo = mr[--pr]),
        (mr[pr] = null),
        (na = mr[--pr]),
        (mr[pr] = null),
        (ta = mr[--pr]),
        (mr[pr] = null));
  }
  function Rv(t, n) {
    ((mr[pr++] = ta), (mr[pr++] = na), (mr[pr++] = oo), (ta = n.id), (na = n.overflow), (oo = t));
  }
  var En = null,
    Ut = null,
    vt = !1,
    lo = null,
    gr = !1,
    Ed = Error(l(519));
  function io(t) {
    var n = Error(
      l(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""),
    );
    throw (Ii(hr(n, t)), Ed);
  }
  function Tv(t) {
    var n = t.stateNode,
      a = t.type,
      i = t.memoizedProps;
    switch (((n[De] = t), (n[Ae] = i), a)) {
      case "dialog":
        (dt("cancel", n), dt("close", n));
        break;
      case "iframe":
      case "object":
      case "embed":
        dt("load", n);
        break;
      case "video":
      case "audio":
        for (a = 0; a < fs.length; a++) dt(fs[a], n);
        break;
      case "source":
        dt("error", n);
        break;
      case "img":
      case "image":
      case "link":
        (dt("error", n), dt("load", n));
        break;
      case "details":
        dt("toggle", n);
        break;
      case "input":
        (dt("invalid", n),
          nt(n, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, !0));
        break;
      case "select":
        dt("invalid", n);
        break;
      case "textarea":
        (dt("invalid", n), Fo(n, i.value, i.defaultValue, i.children));
    }
    ((a = i.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      n.textContent === "" + a ||
      i.suppressHydrationWarning === !0 ||
      Ib(n.textContent, a)
        ? (i.popover != null && (dt("beforetoggle", n), dt("toggle", n)),
          i.onScroll != null && dt("scroll", n),
          i.onScrollEnd != null && dt("scrollend", n),
          i.onClick != null && (n.onclick = Ca),
          (n = !0))
        : (n = !1),
      n || io(t, !0));
  }
  function _v(t) {
    for (En = t.return; En; )
      switch (En.tag) {
        case 5:
        case 31:
        case 13:
          gr = !1;
          return;
        case 27:
        case 3:
          gr = !0;
          return;
        default:
          En = En.return;
      }
  }
  function Hl(t) {
    if (t !== En) return !1;
    if (!vt) return (_v(t), (vt = !0), !1);
    var n = t.tag,
      a;
    if (
      ((a = n !== 3 && n !== 27) &&
        ((a = n === 5) &&
          ((a = t.type), (a = !(a !== "form" && a !== "button") || Vh(t.type, t.memoizedProps))),
        (a = !a)),
      a && Ut && io(t),
      _v(t),
      n === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(l(317));
      Ut = Wb(t);
    } else if (n === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(l(317));
      Ut = Wb(t);
    } else
      n === 27
        ? ((n = Ut), xo(t.type) ? ((t = Gh), (Gh = null), (Ut = t)) : (Ut = n))
        : (Ut = En ? yr(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Qo() {
    ((Ut = En = null), (vt = !1));
  }
  function Rd() {
    var t = lo;
    return (t !== null && (Xn === null ? (Xn = t) : Xn.push.apply(Xn, t), (lo = null)), t);
  }
  function Ii(t) {
    lo === null ? (lo = [t]) : lo.push(t);
  }
  var Td = O(null),
    Zo = null,
    _a = null;
  function so(t, n, a) {
    (Q(Td, n._currentValue), (n._currentValue = a));
  }
  function Da(t) {
    ((t._currentValue = Td.current), P(Td));
  }
  function _d(t, n, a) {
    for (; t !== null; ) {
      var i = t.alternate;
      if (
        ((t.childLanes & n) !== n
          ? ((t.childLanes |= n), i !== null && (i.childLanes |= n))
          : i !== null && (i.childLanes & n) !== n && (i.childLanes |= n),
        t === a)
      )
        break;
      t = t.return;
    }
  }
  function Dd(t, n, a, i) {
    var h = t.child;
    for (h !== null && (h.return = t); h !== null; ) {
      var p = h.dependencies;
      if (p !== null) {
        var E = h.child;
        p = p.firstContext;
        e: for (; p !== null; ) {
          var A = p;
          p = h;
          for (var V = 0; V < n.length; V++)
            if (A.context === n[V]) {
              ((p.lanes |= a),
                (A = p.alternate),
                A !== null && (A.lanes |= a),
                _d(p.return, a, t),
                i || (E = null));
              break e;
            }
          p = A.next;
        }
      } else if (h.tag === 18) {
        if (((E = h.return), E === null)) throw Error(l(341));
        ((E.lanes |= a), (p = E.alternate), p !== null && (p.lanes |= a), _d(E, a, t), (E = null));
      } else E = h.child;
      if (E !== null) E.return = h;
      else
        for (E = h; E !== null; ) {
          if (E === t) {
            E = null;
            break;
          }
          if (((h = E.sibling), h !== null)) {
            ((h.return = E.return), (E = h));
            break;
          }
          E = E.return;
        }
      h = E;
    }
  }
  function Ul(t, n, a, i) {
    t = null;
    for (var h = n, p = !1; h !== null; ) {
      if (!p) {
        if ((h.flags & 524288) !== 0) p = !0;
        else if ((h.flags & 262144) !== 0) break;
      }
      if (h.tag === 10) {
        var E = h.alternate;
        if (E === null) throw Error(l(387));
        if (((E = E.memoizedProps), E !== null)) {
          var A = h.type;
          nr(h.pendingProps.value, E.value) || (t !== null ? t.push(A) : (t = [A]));
        }
      } else if (h === ge.current) {
        if (((E = h.alternate), E === null)) throw Error(l(387));
        E.memoizedState.memoizedState !== h.memoizedState.memoizedState &&
          (t !== null ? t.push(gs) : (t = [gs]));
      }
      h = h.return;
    }
    (t !== null && Dd(n, t, a, i), (n.flags |= 262144));
  }
  function Nc(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!nr(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Wo(t) {
    ((Zo = t), (_a = null), (t = t.dependencies), t !== null && (t.firstContext = null));
  }
  function Rn(t) {
    return Dv(Zo, t);
  }
  function Oc(t, n) {
    return (Zo === null && Wo(t), Dv(t, n));
  }
  function Dv(t, n) {
    var a = n._currentValue;
    if (((n = { context: n, memoizedValue: a, next: null }), _a === null)) {
      if (t === null) throw Error(l(308));
      ((_a = n), (t.dependencies = { lanes: 0, firstContext: n }), (t.flags |= 524288));
    } else _a = _a.next = n;
    return a;
  }
  var tR =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (a, i) {
                  t.push(i);
                },
              });
            this.abort = function () {
              ((n.aborted = !0),
                t.forEach(function (a) {
                  return a();
                }));
            };
          },
    nR = e.unstable_scheduleCallback,
    rR = e.unstable_NormalPriority,
    on = {
      $$typeof: D,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ad() {
    return { controller: new tR(), data: new Map(), refCount: 0 };
  }
  function Fi(t) {
    (t.refCount--,
      t.refCount === 0 &&
        nR(rR, function () {
          t.controller.abort();
        }));
  }
  var qi = null,
    Md = 0,
    Pl = 0,
    Vl = null;
  function aR(t, n) {
    if (qi === null) {
      var a = (qi = []);
      ((Md = 0),
        (Pl = jh()),
        (Vl = {
          status: "pending",
          value: void 0,
          then: function (i) {
            a.push(i);
          },
        }));
    }
    return (Md++, n.then(Av, Av), n);
  }
  function Av() {
    if (--Md === 0 && qi !== null) {
      Vl !== null && (Vl.status = "fulfilled");
      var t = qi;
      ((qi = null), (Pl = 0), (Vl = null));
      for (var n = 0; n < t.length; n++) (0, t[n])();
    }
  }
  function oR(t, n) {
    var a = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (h) {
          a.push(h);
        },
      };
    return (
      t.then(
        function () {
          ((i.status = "fulfilled"), (i.value = n));
          for (var h = 0; h < a.length; h++) (0, a[h])(n);
        },
        function (h) {
          for (i.status = "rejected", i.reason = h, h = 0; h < a.length; h++) (0, a[h])(void 0);
        },
      ),
      i
    );
  }
  var Mv = N.S;
  N.S = function (t, n) {
    ((hb = ot()),
      typeof n == "object" && n !== null && typeof n.then == "function" && aR(t, n),
      Mv !== null && Mv(t, n));
  };
  var Jo = O(null);
  function Nd() {
    var t = Jo.current;
    return t !== null ? t : Lt.pooledCache;
  }
  function jc(t, n) {
    n === null ? Q(Jo, Jo.current) : Q(Jo, n.pool);
  }
  function Nv() {
    var t = Nd();
    return t === null ? null : { parent: on._currentValue, pool: t };
  }
  var Il = Error(l(460)),
    Od = Error(l(474)),
    zc = Error(l(542)),
    kc = { then: function () {} };
  function Ov(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function jv(t, n, a) {
    switch (
      ((a = t[a]), a === void 0 ? t.push(n) : a !== n && (n.then(Ca, Ca), (n = a)), n.status)
    ) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw ((t = n.reason), kv(t), t);
      default:
        if (typeof n.status == "string") n.then(Ca, Ca);
        else {
          if (((t = Lt), t !== null && 100 < t.shellSuspendCounter)) throw Error(l(482));
          ((t = n),
            (t.status = "pending"),
            t.then(
              function (i) {
                if (n.status === "pending") {
                  var h = n;
                  ((h.status = "fulfilled"), (h.value = i));
                }
              },
              function (i) {
                if (n.status === "pending") {
                  var h = n;
                  ((h.status = "rejected"), (h.reason = i));
                }
              },
            ));
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw ((t = n.reason), kv(t), t);
        }
        throw ((tl = n), Il);
    }
  }
  function el(t) {
    try {
      var n = t._init;
      return n(t._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? ((tl = a), Il) : a;
    }
  }
  var tl = null;
  function zv() {
    if (tl === null) throw Error(l(459));
    var t = tl;
    return ((tl = null), t);
  }
  function kv(t) {
    if (t === Il || t === zc) throw Error(l(483));
  }
  var Fl = null,
    Yi = 0;
  function Lc(t) {
    var n = Yi;
    return ((Yi += 1), Fl === null && (Fl = []), jv(Fl, t, n));
  }
  function Gi(t, n) {
    ((n = n.props.ref), (t.ref = n !== void 0 ? n : null));
  }
  function Bc(t, n) {
    throw n.$$typeof === y
      ? Error(l(525))
      : ((t = Object.prototype.toString.call(n)),
        Error(
          l(
            31,
            t === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : t,
          ),
        ));
  }
  function Lv(t) {
    function n(X, q) {
      if (t) {
        var W = X.deletions;
        W === null ? ((X.deletions = [q]), (X.flags |= 16)) : W.push(q);
      }
    }
    function a(X, q) {
      if (!t) return null;
      for (; q !== null; ) (n(X, q), (q = q.sibling));
      return null;
    }
    function i(X) {
      for (var q = new Map(); X !== null; )
        (X.key !== null ? q.set(X.key, X) : q.set(X.index, X), (X = X.sibling));
      return q;
    }
    function h(X, q) {
      return ((X = Ra(X, q)), (X.index = 0), (X.sibling = null), X);
    }
    function p(X, q, W) {
      return (
        (X.index = W),
        t
          ? ((W = X.alternate),
            W !== null
              ? ((W = W.index), W < q ? ((X.flags |= 67108866), q) : W)
              : ((X.flags |= 67108866), q))
          : ((X.flags |= 1048576), q)
      );
    }
    function E(X) {
      return (t && X.alternate === null && (X.flags |= 67108866), X);
    }
    function A(X, q, W, fe) {
      return q === null || q.tag !== 6
        ? ((q = Sd(W, X.mode, fe)), (q.return = X), q)
        : ((q = h(q, W)), (q.return = X), q);
    }
    function V(X, q, W, fe) {
      var Fe = W.type;
      return Fe === C
        ? se(X, q, W.props.children, fe, W.key)
        : q !== null &&
            (q.elementType === Fe ||
              (typeof Fe == "object" && Fe !== null && Fe.$$typeof === M && el(Fe) === q.type))
          ? ((q = h(q, W.props)), Gi(q, W), (q.return = X), q)
          : ((q = Ac(W.type, W.key, W.props, null, X.mode, fe)), Gi(q, W), (q.return = X), q);
    }
    function J(X, q, W, fe) {
      return q === null ||
        q.tag !== 4 ||
        q.stateNode.containerInfo !== W.containerInfo ||
        q.stateNode.implementation !== W.implementation
        ? ((q = wd(W, X.mode, fe)), (q.return = X), q)
        : ((q = h(q, W.children || [])), (q.return = X), q);
    }
    function se(X, q, W, fe, Fe) {
      return q === null || q.tag !== 7
        ? ((q = Ko(W, X.mode, fe, Fe)), (q.return = X), q)
        : ((q = h(q, W)), (q.return = X), q);
    }
    function me(X, q, W) {
      if ((typeof q == "string" && q !== "") || typeof q == "number" || typeof q == "bigint")
        return ((q = Sd("" + q, X.mode, W)), (q.return = X), q);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case b:
            return ((W = Ac(q.type, q.key, q.props, null, X.mode, W)), Gi(W, q), (W.return = X), W);
          case x:
            return ((q = wd(q, X.mode, W)), (q.return = X), q);
          case M:
            return ((q = el(q)), me(X, q, W));
        }
        if (re(q) || ne(q)) return ((q = Ko(q, X.mode, W, null)), (q.return = X), q);
        if (typeof q.then == "function") return me(X, Lc(q), W);
        if (q.$$typeof === D) return me(X, Oc(X, q), W);
        Bc(X, q);
      }
      return null;
    }
    function te(X, q, W, fe) {
      var Fe = q !== null ? q.key : null;
      if ((typeof W == "string" && W !== "") || typeof W == "number" || typeof W == "bigint")
        return Fe !== null ? null : A(X, q, "" + W, fe);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case b:
            return W.key === Fe ? V(X, q, W, fe) : null;
          case x:
            return W.key === Fe ? J(X, q, W, fe) : null;
          case M:
            return ((W = el(W)), te(X, q, W, fe));
        }
        if (re(W) || ne(W)) return Fe !== null ? null : se(X, q, W, fe, null);
        if (typeof W.then == "function") return te(X, q, Lc(W), fe);
        if (W.$$typeof === D) return te(X, q, Oc(X, W), fe);
        Bc(X, W);
      }
      return null;
    }
    function le(X, q, W, fe, Fe) {
      if ((typeof fe == "string" && fe !== "") || typeof fe == "number" || typeof fe == "bigint")
        return ((X = X.get(W) || null), A(q, X, "" + fe, Fe));
      if (typeof fe == "object" && fe !== null) {
        switch (fe.$$typeof) {
          case b:
            return ((X = X.get(fe.key === null ? W : fe.key) || null), V(q, X, fe, Fe));
          case x:
            return ((X = X.get(fe.key === null ? W : fe.key) || null), J(q, X, fe, Fe));
          case M:
            return ((fe = el(fe)), le(X, q, W, fe, Fe));
        }
        if (re(fe) || ne(fe)) return ((X = X.get(W) || null), se(q, X, fe, Fe, null));
        if (typeof fe.then == "function") return le(X, q, W, Lc(fe), Fe);
        if (fe.$$typeof === D) return le(X, q, W, Oc(q, fe), Fe);
        Bc(q, fe);
      }
      return null;
    }
    function Le(X, q, W, fe) {
      for (
        var Fe = null, wt = null, Pe = q, rt = (q = 0), pt = null;
        Pe !== null && rt < W.length;
        rt++
      ) {
        Pe.index > rt ? ((pt = Pe), (Pe = null)) : (pt = Pe.sibling);
        var xt = te(X, Pe, W[rt], fe);
        if (xt === null) {
          Pe === null && (Pe = pt);
          break;
        }
        (t && Pe && xt.alternate === null && n(X, Pe),
          (q = p(xt, q, rt)),
          wt === null ? (Fe = xt) : (wt.sibling = xt),
          (wt = xt),
          (Pe = pt));
      }
      if (rt === W.length) return (a(X, Pe), vt && Ta(X, rt), Fe);
      if (Pe === null) {
        for (; rt < W.length; rt++)
          ((Pe = me(X, W[rt], fe)),
            Pe !== null &&
              ((q = p(Pe, q, rt)), wt === null ? (Fe = Pe) : (wt.sibling = Pe), (wt = Pe)));
        return (vt && Ta(X, rt), Fe);
      }
      for (Pe = i(Pe); rt < W.length; rt++)
        ((pt = le(Pe, X, rt, W[rt], fe)),
          pt !== null &&
            (t && pt.alternate !== null && Pe.delete(pt.key === null ? rt : pt.key),
            (q = p(pt, q, rt)),
            wt === null ? (Fe = pt) : (wt.sibling = pt),
            (wt = pt)));
      return (
        t &&
          Pe.forEach(function (_o) {
            return n(X, _o);
          }),
        vt && Ta(X, rt),
        Fe
      );
    }
    function Ge(X, q, W, fe) {
      if (W == null) throw Error(l(151));
      for (
        var Fe = null, wt = null, Pe = q, rt = (q = 0), pt = null, xt = W.next();
        Pe !== null && !xt.done;
        rt++, xt = W.next()
      ) {
        Pe.index > rt ? ((pt = Pe), (Pe = null)) : (pt = Pe.sibling);
        var _o = te(X, Pe, xt.value, fe);
        if (_o === null) {
          Pe === null && (Pe = pt);
          break;
        }
        (t && Pe && _o.alternate === null && n(X, Pe),
          (q = p(_o, q, rt)),
          wt === null ? (Fe = _o) : (wt.sibling = _o),
          (wt = _o),
          (Pe = pt));
      }
      if (xt.done) return (a(X, Pe), vt && Ta(X, rt), Fe);
      if (Pe === null) {
        for (; !xt.done; rt++, xt = W.next())
          ((xt = me(X, xt.value, fe)),
            xt !== null &&
              ((q = p(xt, q, rt)), wt === null ? (Fe = xt) : (wt.sibling = xt), (wt = xt)));
        return (vt && Ta(X, rt), Fe);
      }
      for (Pe = i(Pe); !xt.done; rt++, xt = W.next())
        ((xt = le(Pe, X, rt, xt.value, fe)),
          xt !== null &&
            (t && xt.alternate !== null && Pe.delete(xt.key === null ? rt : xt.key),
            (q = p(xt, q, rt)),
            wt === null ? (Fe = xt) : (wt.sibling = xt),
            (wt = xt)));
      return (
        t &&
          Pe.forEach(function (g2) {
            return n(X, g2);
          }),
        vt && Ta(X, rt),
        Fe
      );
    }
    function jt(X, q, W, fe) {
      if (
        (typeof W == "object" &&
          W !== null &&
          W.type === C &&
          W.key === null &&
          (W = W.props.children),
        typeof W == "object" && W !== null)
      ) {
        switch (W.$$typeof) {
          case b:
            e: {
              for (var Fe = W.key; q !== null; ) {
                if (q.key === Fe) {
                  if (((Fe = W.type), Fe === C)) {
                    if (q.tag === 7) {
                      (a(X, q.sibling), (fe = h(q, W.props.children)), (fe.return = X), (X = fe));
                      break e;
                    }
                  } else if (
                    q.elementType === Fe ||
                    (typeof Fe == "object" && Fe !== null && Fe.$$typeof === M && el(Fe) === q.type)
                  ) {
                    (a(X, q.sibling), (fe = h(q, W.props)), Gi(fe, W), (fe.return = X), (X = fe));
                    break e;
                  }
                  a(X, q);
                  break;
                } else n(X, q);
                q = q.sibling;
              }
              W.type === C
                ? ((fe = Ko(W.props.children, X.mode, fe, W.key)), (fe.return = X), (X = fe))
                : ((fe = Ac(W.type, W.key, W.props, null, X.mode, fe)),
                  Gi(fe, W),
                  (fe.return = X),
                  (X = fe));
            }
            return E(X);
          case x:
            e: {
              for (Fe = W.key; q !== null; ) {
                if (q.key === Fe)
                  if (
                    q.tag === 4 &&
                    q.stateNode.containerInfo === W.containerInfo &&
                    q.stateNode.implementation === W.implementation
                  ) {
                    (a(X, q.sibling), (fe = h(q, W.children || [])), (fe.return = X), (X = fe));
                    break e;
                  } else {
                    a(X, q);
                    break;
                  }
                else n(X, q);
                q = q.sibling;
              }
              ((fe = wd(W, X.mode, fe)), (fe.return = X), (X = fe));
            }
            return E(X);
          case M:
            return ((W = el(W)), jt(X, q, W, fe));
        }
        if (re(W)) return Le(X, q, W, fe);
        if (ne(W)) {
          if (((Fe = ne(W)), typeof Fe != "function")) throw Error(l(150));
          return ((W = Fe.call(W)), Ge(X, q, W, fe));
        }
        if (typeof W.then == "function") return jt(X, q, Lc(W), fe);
        if (W.$$typeof === D) return jt(X, q, Oc(X, W), fe);
        Bc(X, W);
      }
      return (typeof W == "string" && W !== "") || typeof W == "number" || typeof W == "bigint"
        ? ((W = "" + W),
          q !== null && q.tag === 6
            ? (a(X, q.sibling), (fe = h(q, W)), (fe.return = X), (X = fe))
            : (a(X, q), (fe = Sd(W, X.mode, fe)), (fe.return = X), (X = fe)),
          E(X))
        : a(X, q);
    }
    return function (X, q, W, fe) {
      try {
        Yi = 0;
        var Fe = jt(X, q, W, fe);
        return ((Fl = null), Fe);
      } catch (Pe) {
        if (Pe === Il || Pe === zc) throw Pe;
        var wt = rr(29, Pe, null, X.mode);
        return ((wt.lanes = fe), (wt.return = X), wt);
      }
    };
  }
  var nl = Lv(!0),
    Bv = Lv(!1),
    co = !1;
  function jd(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function zd(t, n) {
    ((t = t.updateQueue),
      n.updateQueue === t &&
        (n.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function uo(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function fo(t, n, a) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (Rt & 2) !== 0)) {
      var h = i.pending;
      return (
        h === null ? (n.next = n) : ((n.next = h.next), (h.next = n)),
        (i.pending = n),
        (n = Dc(t)),
        Sv(t, null, a),
        n
      );
    }
    return (_c(t, i, n, a), Dc(t));
  }
  function Xi(t, n, a) {
    if (((n = n.updateQueue), n !== null && ((n = n.shared), (a & 4194048) !== 0))) {
      var i = n.lanes;
      ((i &= t.pendingLanes), (a |= i), (n.lanes = a), Tt(t, a));
    }
  }
  function kd(t, n) {
    var a = t.updateQueue,
      i = t.alternate;
    if (i !== null && ((i = i.updateQueue), a === i)) {
      var h = null,
        p = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var E = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null };
          (p === null ? (h = p = E) : (p = p.next = E), (a = a.next));
        } while (a !== null);
        p === null ? (h = p = n) : (p = p.next = n);
      } else h = p = n;
      ((a = {
        baseState: i.baseState,
        firstBaseUpdate: h,
        lastBaseUpdate: p,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (t.updateQueue = a));
      return;
    }
    ((t = a.lastBaseUpdate),
      t === null ? (a.firstBaseUpdate = n) : (t.next = n),
      (a.lastBaseUpdate = n));
  }
  var Ld = !1;
  function Ki() {
    if (Ld) {
      var t = Vl;
      if (t !== null) throw t;
    }
  }
  function Qi(t, n, a, i) {
    Ld = !1;
    var h = t.updateQueue;
    co = !1;
    var p = h.firstBaseUpdate,
      E = h.lastBaseUpdate,
      A = h.shared.pending;
    if (A !== null) {
      h.shared.pending = null;
      var V = A,
        J = V.next;
      ((V.next = null), E === null ? (p = J) : (E.next = J), (E = V));
      var se = t.alternate;
      se !== null &&
        ((se = se.updateQueue),
        (A = se.lastBaseUpdate),
        A !== E && (A === null ? (se.firstBaseUpdate = J) : (A.next = J), (se.lastBaseUpdate = V)));
    }
    if (p !== null) {
      var me = h.baseState;
      ((E = 0), (se = J = V = null), (A = p));
      do {
        var te = A.lane & -536870913,
          le = te !== A.lane;
        if (le ? (mt & te) === te : (i & te) === te) {
          (te !== 0 && te === Pl && (Ld = !0),
            se !== null &&
              (se = se.next =
                { lane: 0, tag: A.tag, payload: A.payload, callback: null, next: null }));
          e: {
            var Le = t,
              Ge = A;
            te = n;
            var jt = a;
            switch (Ge.tag) {
              case 1:
                if (((Le = Ge.payload), typeof Le == "function")) {
                  me = Le.call(jt, me, te);
                  break e;
                }
                me = Le;
                break e;
              case 3:
                Le.flags = (Le.flags & -65537) | 128;
              case 0:
                if (
                  ((Le = Ge.payload),
                  (te = typeof Le == "function" ? Le.call(jt, me, te) : Le),
                  te == null)
                )
                  break e;
                me = g({}, me, te);
                break e;
              case 2:
                co = !0;
            }
          }
          ((te = A.callback),
            te !== null &&
              ((t.flags |= 64),
              le && (t.flags |= 8192),
              (le = h.callbacks),
              le === null ? (h.callbacks = [te]) : le.push(te)));
        } else
          ((le = { lane: te, tag: A.tag, payload: A.payload, callback: A.callback, next: null }),
            se === null ? ((J = se = le), (V = me)) : (se = se.next = le),
            (E |= te));
        if (((A = A.next), A === null)) {
          if (((A = h.shared.pending), A === null)) break;
          ((le = A),
            (A = le.next),
            (le.next = null),
            (h.lastBaseUpdate = le),
            (h.shared.pending = null));
        }
      } while (!0);
      (se === null && (V = me),
        (h.baseState = V),
        (h.firstBaseUpdate = J),
        (h.lastBaseUpdate = se),
        p === null && (h.shared.lanes = 0),
        (vo |= E),
        (t.lanes = E),
        (t.memoizedState = me));
    }
  }
  function $v(t, n) {
    if (typeof t != "function") throw Error(l(191, t));
    t.call(n);
  }
  function Hv(t, n) {
    var a = t.callbacks;
    if (a !== null) for (t.callbacks = null, t = 0; t < a.length; t++) $v(a[t], n);
  }
  var ql = O(null),
    $c = O(0);
  function Uv(t, n) {
    ((t = Ba), Q($c, t), Q(ql, n), (Ba = t | n.baseLanes));
  }
  function Bd() {
    (Q($c, Ba), Q(ql, ql.current));
  }
  function $d() {
    ((Ba = $c.current), P(ql), P($c));
  }
  var ar = O(null),
    vr = null;
  function ho(t) {
    var n = t.alternate;
    (Q(Wt, Wt.current & 1),
      Q(ar, t),
      vr === null && (n === null || ql.current !== null || n.memoizedState !== null) && (vr = t));
  }
  function Hd(t) {
    (Q(Wt, Wt.current), Q(ar, t), vr === null && (vr = t));
  }
  function Pv(t) {
    t.tag === 22 ? (Q(Wt, Wt.current), Q(ar, t), vr === null && (vr = t)) : mo();
  }
  function mo() {
    (Q(Wt, Wt.current), Q(ar, ar.current));
  }
  function or(t) {
    (P(ar), vr === t && (vr = null), P(Wt));
  }
  var Wt = O(0);
  function Hc(t) {
    for (var n = t; n !== null; ) {
      if (n.tag === 13) {
        var a = n.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || qh(a) || Yh(a))) return n;
      } else if (
        n.tag === 19 &&
        (n.memoizedProps.revealOrder === "forwards" ||
          n.memoizedProps.revealOrder === "backwards" ||
          n.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          n.memoizedProps.revealOrder === "together")
      ) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return null;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
    return null;
  }
  var Aa = 0,
    tt = null,
    Nt = null,
    ln = null,
    Uc = !1,
    Yl = !1,
    rl = !1,
    Pc = 0,
    Zi = 0,
    Gl = null,
    lR = 0;
  function Kt() {
    throw Error(l(321));
  }
  function Ud(t, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < t.length; a++) if (!nr(t[a], n[a])) return !1;
    return !0;
  }
  function Pd(t, n, a, i, h, p) {
    return (
      (Aa = p),
      (tt = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (N.H = t === null || t.memoizedState === null ? Ey : nh),
      (rl = !1),
      (p = a(i, h)),
      (rl = !1),
      Yl && (p = Iv(n, a, i, h)),
      Vv(t),
      p
    );
  }
  function Vv(t) {
    N.H = es;
    var n = Nt !== null && Nt.next !== null;
    if (((Aa = 0), (ln = Nt = tt = null), (Uc = !1), (Zi = 0), (Gl = null), n)) throw Error(l(300));
    t === null || sn || ((t = t.dependencies), t !== null && Nc(t) && (sn = !0));
  }
  function Iv(t, n, a, i) {
    tt = t;
    var h = 0;
    do {
      if ((Yl && (Gl = null), (Zi = 0), (Yl = !1), 25 <= h)) throw Error(l(301));
      if (((h += 1), (ln = Nt = null), t.updateQueue != null)) {
        var p = t.updateQueue;
        ((p.lastEffect = null),
          (p.events = null),
          (p.stores = null),
          p.memoCache != null && (p.memoCache.index = 0));
      }
      ((N.H = Ry), (p = n(a, i)));
    } while (Yl);
    return p;
  }
  function iR() {
    var t = N.H,
      n = t.useState()[0];
    return (
      (n = typeof n.then == "function" ? Wi(n) : n),
      (t = t.useState()[0]),
      (Nt !== null ? Nt.memoizedState : null) !== t && (tt.flags |= 1024),
      n
    );
  }
  function Vd() {
    var t = Pc !== 0;
    return ((Pc = 0), t);
  }
  function Id(t, n, a) {
    ((n.updateQueue = t.updateQueue), (n.flags &= -2053), (t.lanes &= ~a));
  }
  function Fd(t) {
    if (Uc) {
      for (t = t.memoizedState; t !== null; ) {
        var n = t.queue;
        (n !== null && (n.pending = null), (t = t.next));
      }
      Uc = !1;
    }
    ((Aa = 0), (ln = Nt = tt = null), (Yl = !1), (Zi = Pc = 0), (Gl = null));
  }
  function Un() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (ln === null ? (tt.memoizedState = ln = t) : (ln = ln.next = t), ln);
  }
  function Jt() {
    if (Nt === null) {
      var t = tt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Nt.next;
    var n = ln === null ? tt.memoizedState : ln.next;
    if (n !== null) ((ln = n), (Nt = t));
    else {
      if (t === null) throw tt.alternate === null ? Error(l(467)) : Error(l(310));
      ((Nt = t),
        (t = {
          memoizedState: Nt.memoizedState,
          baseState: Nt.baseState,
          baseQueue: Nt.baseQueue,
          queue: Nt.queue,
          next: null,
        }),
        ln === null ? (tt.memoizedState = ln = t) : (ln = ln.next = t));
    }
    return ln;
  }
  function Vc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Wi(t) {
    var n = Zi;
    return (
      (Zi += 1),
      Gl === null && (Gl = []),
      (t = jv(Gl, t, n)),
      (n = tt),
      (ln === null ? n.memoizedState : ln.next) === null &&
        ((n = n.alternate), (N.H = n === null || n.memoizedState === null ? Ey : nh)),
      t
    );
  }
  function Ic(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Wi(t);
      if (t.$$typeof === D) return Rn(t);
    }
    throw Error(l(438, String(t)));
  }
  function qd(t) {
    var n = null,
      a = tt.updateQueue;
    if ((a !== null && (n = a.memoCache), n == null)) {
      var i = tt.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (n = {
              data: i.data.map(function (h) {
                return h.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      a === null && ((a = Vc()), (tt.updateQueue = a)),
      (a.memoCache = n),
      (a = n.data[n.index]),
      a === void 0)
    )
      for (a = n.data[n.index] = Array(t), i = 0; i < t; i++) a[i] = Y;
    return (n.index++, a);
  }
  function Ma(t, n) {
    return typeof n == "function" ? n(t) : n;
  }
  function Fc(t) {
    var n = Jt();
    return Yd(n, Nt, t);
  }
  function Yd(t, n, a) {
    var i = t.queue;
    if (i === null) throw Error(l(311));
    i.lastRenderedReducer = a;
    var h = t.baseQueue,
      p = i.pending;
    if (p !== null) {
      if (h !== null) {
        var E = h.next;
        ((h.next = p.next), (p.next = E));
      }
      ((n.baseQueue = h = p), (i.pending = null));
    }
    if (((p = t.baseState), h === null)) t.memoizedState = p;
    else {
      n = h.next;
      var A = (E = null),
        V = null,
        J = n,
        se = !1;
      do {
        var me = J.lane & -536870913;
        if (me !== J.lane ? (mt & me) === me : (Aa & me) === me) {
          var te = J.revertLane;
          if (te === 0)
            (V !== null &&
              (V = V.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: J.action,
                  hasEagerState: J.hasEagerState,
                  eagerState: J.eagerState,
                  next: null,
                }),
              me === Pl && (se = !0));
          else if ((Aa & te) === te) {
            ((J = J.next), te === Pl && (se = !0));
            continue;
          } else
            ((me = {
              lane: 0,
              revertLane: J.revertLane,
              gesture: null,
              action: J.action,
              hasEagerState: J.hasEagerState,
              eagerState: J.eagerState,
              next: null,
            }),
              V === null ? ((A = V = me), (E = p)) : (V = V.next = me),
              (tt.lanes |= te),
              (vo |= te));
          ((me = J.action), rl && a(p, me), (p = J.hasEagerState ? J.eagerState : a(p, me)));
        } else
          ((te = {
            lane: me,
            revertLane: J.revertLane,
            gesture: J.gesture,
            action: J.action,
            hasEagerState: J.hasEagerState,
            eagerState: J.eagerState,
            next: null,
          }),
            V === null ? ((A = V = te), (E = p)) : (V = V.next = te),
            (tt.lanes |= me),
            (vo |= me));
        J = J.next;
      } while (J !== null && J !== n);
      if (
        (V === null ? (E = p) : (V.next = A),
        !nr(p, t.memoizedState) && ((sn = !0), se && ((a = Vl), a !== null)))
      )
        throw a;
      ((t.memoizedState = p), (t.baseState = E), (t.baseQueue = V), (i.lastRenderedState = p));
    }
    return (h === null && (i.lanes = 0), [t.memoizedState, i.dispatch]);
  }
  function Gd(t) {
    var n = Jt(),
      a = n.queue;
    if (a === null) throw Error(l(311));
    a.lastRenderedReducer = t;
    var i = a.dispatch,
      h = a.pending,
      p = n.memoizedState;
    if (h !== null) {
      a.pending = null;
      var E = (h = h.next);
      do ((p = t(p, E.action)), (E = E.next));
      while (E !== h);
      (nr(p, n.memoizedState) || (sn = !0),
        (n.memoizedState = p),
        n.baseQueue === null && (n.baseState = p),
        (a.lastRenderedState = p));
    }
    return [p, i];
  }
  function Fv(t, n, a) {
    var i = tt,
      h = Jt(),
      p = vt;
    if (p) {
      if (a === void 0) throw Error(l(407));
      a = a();
    } else a = n();
    var E = !nr((Nt || h).memoizedState, a);
    if (
      (E && ((h.memoizedState = a), (sn = !0)),
      (h = h.queue),
      Qd(Gv.bind(null, i, h, t), [t]),
      h.getSnapshot !== n || E || (ln !== null && ln.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        Xl(9, { destroy: void 0 }, Yv.bind(null, i, h, a, n), null),
        Lt === null)
      )
        throw Error(l(349));
      p || (Aa & 127) !== 0 || qv(i, n, a);
    }
    return a;
  }
  function qv(t, n, a) {
    ((t.flags |= 16384),
      (t = { getSnapshot: n, value: a }),
      (n = tt.updateQueue),
      n === null
        ? ((n = Vc()), (tt.updateQueue = n), (n.stores = [t]))
        : ((a = n.stores), a === null ? (n.stores = [t]) : a.push(t)));
  }
  function Yv(t, n, a, i) {
    ((n.value = a), (n.getSnapshot = i), Xv(n) && Kv(t));
  }
  function Gv(t, n, a) {
    return a(function () {
      Xv(n) && Kv(t);
    });
  }
  function Xv(t) {
    var n = t.getSnapshot;
    t = t.value;
    try {
      var a = n();
      return !nr(t, a);
    } catch {
      return !0;
    }
  }
  function Kv(t) {
    var n = Xo(t, 2);
    n !== null && Kn(n, t, 2);
  }
  function Xd(t) {
    var n = Un();
    if (typeof t == "function") {
      var a = t;
      if (((t = a()), rl)) {
        At(!0);
        try {
          a();
        } finally {
          At(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = t),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ma,
        lastRenderedState: t,
      }),
      n
    );
  }
  function Qv(t, n, a, i) {
    return ((t.baseState = a), Yd(t, Nt, typeof i == "function" ? i : Ma));
  }
  function sR(t, n, a, i, h) {
    if (Gc(t)) throw Error(l(485));
    if (((t = n.action), t !== null)) {
      var p = {
        payload: h,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (E) {
          p.listeners.push(E);
        },
      };
      (N.T !== null ? a(!0) : (p.isTransition = !1),
        i(p),
        (a = n.pending),
        a === null
          ? ((p.next = n.pending = p), Zv(n, p))
          : ((p.next = a.next), (n.pending = a.next = p)));
    }
  }
  function Zv(t, n) {
    var a = n.action,
      i = n.payload,
      h = t.state;
    if (n.isTransition) {
      var p = N.T,
        E = {};
      N.T = E;
      try {
        var A = a(h, i),
          V = N.S;
        (V !== null && V(E, A), Wv(t, n, A));
      } catch (J) {
        Kd(t, n, J);
      } finally {
        (p !== null && E.types !== null && (p.types = E.types), (N.T = p));
      }
    } else
      try {
        ((p = a(h, i)), Wv(t, n, p));
      } catch (J) {
        Kd(t, n, J);
      }
  }
  function Wv(t, n, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (i) {
            Jv(t, n, i);
          },
          function (i) {
            return Kd(t, n, i);
          },
        )
      : Jv(t, n, a);
  }
  function Jv(t, n, a) {
    ((n.status = "fulfilled"),
      (n.value = a),
      ey(n),
      (t.state = a),
      (n = t.pending),
      n !== null &&
        ((a = n.next), a === n ? (t.pending = null) : ((a = a.next), (n.next = a), Zv(t, a))));
  }
  function Kd(t, n, a) {
    var i = t.pending;
    if (((t.pending = null), i !== null)) {
      i = i.next;
      do ((n.status = "rejected"), (n.reason = a), ey(n), (n = n.next));
      while (n !== i);
    }
    t.action = null;
  }
  function ey(t) {
    t = t.listeners;
    for (var n = 0; n < t.length; n++) (0, t[n])();
  }
  function ty(t, n) {
    return n;
  }
  function ny(t, n) {
    if (vt) {
      var a = Lt.formState;
      if (a !== null) {
        e: {
          var i = tt;
          if (vt) {
            if (Ut) {
              t: {
                for (var h = Ut, p = gr; h.nodeType !== 8; ) {
                  if (!p) {
                    h = null;
                    break t;
                  }
                  if (((h = yr(h.nextSibling)), h === null)) {
                    h = null;
                    break t;
                  }
                }
                ((p = h.data), (h = p === "F!" || p === "F" ? h : null));
              }
              if (h) {
                ((Ut = yr(h.nextSibling)), (i = h.data === "F!"));
                break e;
              }
            }
            io(i);
          }
          i = !1;
        }
        i && (n = a[0]);
      }
    }
    return (
      (a = Un()),
      (a.memoizedState = a.baseState = n),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ty,
        lastRenderedState: n,
      }),
      (a.queue = i),
      (a = wy.bind(null, tt, i)),
      (i.dispatch = a),
      (i = Xd(!1)),
      (p = th.bind(null, tt, !1, i.queue)),
      (i = Un()),
      (h = { state: n, dispatch: null, action: t, pending: null }),
      (i.queue = h),
      (a = sR.bind(null, tt, h, p, a)),
      (h.dispatch = a),
      (i.memoizedState = t),
      [n, a, !1]
    );
  }
  function ry(t) {
    var n = Jt();
    return ay(n, Nt, t);
  }
  function ay(t, n, a) {
    if (
      ((n = Yd(t, n, ty)[0]),
      (t = Fc(Ma)[0]),
      typeof n == "object" && n !== null && typeof n.then == "function")
    )
      try {
        var i = Wi(n);
      } catch (E) {
        throw E === Il ? zc : E;
      }
    else i = n;
    n = Jt();
    var h = n.queue,
      p = h.dispatch;
    return (
      a !== n.memoizedState &&
        ((tt.flags |= 2048), Xl(9, { destroy: void 0 }, cR.bind(null, h, a), null)),
      [i, p, t]
    );
  }
  function cR(t, n) {
    t.action = n;
  }
  function oy(t) {
    var n = Jt(),
      a = Nt;
    if (a !== null) return ay(n, a, t);
    (Jt(), (n = n.memoizedState), (a = Jt()));
    var i = a.queue.dispatch;
    return ((a.memoizedState = t), [n, i, !1]);
  }
  function Xl(t, n, a, i) {
    return (
      (t = { tag: t, create: a, deps: i, inst: n, next: null }),
      (n = tt.updateQueue),
      n === null && ((n = Vc()), (tt.updateQueue = n)),
      (a = n.lastEffect),
      a === null
        ? (n.lastEffect = t.next = t)
        : ((i = a.next), (a.next = t), (t.next = i), (n.lastEffect = t)),
      t
    );
  }
  function ly() {
    return Jt().memoizedState;
  }
  function qc(t, n, a, i) {
    var h = Un();
    ((tt.flags |= t),
      (h.memoizedState = Xl(1 | n, { destroy: void 0 }, a, i === void 0 ? null : i)));
  }
  function Yc(t, n, a, i) {
    var h = Jt();
    i = i === void 0 ? null : i;
    var p = h.memoizedState.inst;
    Nt !== null && i !== null && Ud(i, Nt.memoizedState.deps)
      ? (h.memoizedState = Xl(n, p, a, i))
      : ((tt.flags |= t), (h.memoizedState = Xl(1 | n, p, a, i)));
  }
  function iy(t, n) {
    qc(8390656, 8, t, n);
  }
  function Qd(t, n) {
    Yc(2048, 8, t, n);
  }
  function uR(t) {
    tt.flags |= 4;
    var n = tt.updateQueue;
    if (n === null) ((n = Vc()), (tt.updateQueue = n), (n.events = [t]));
    else {
      var a = n.events;
      a === null ? (n.events = [t]) : a.push(t);
    }
  }
  function sy(t) {
    var n = Jt().memoizedState;
    return (
      uR({ ref: n, nextImpl: t }),
      function () {
        if ((Rt & 2) !== 0) throw Error(l(440));
        return n.impl.apply(void 0, arguments);
      }
    );
  }
  function cy(t, n) {
    return Yc(4, 2, t, n);
  }
  function uy(t, n) {
    return Yc(4, 4, t, n);
  }
  function fy(t, n) {
    if (typeof n == "function") {
      t = t();
      var a = n(t);
      return function () {
        typeof a == "function" ? a() : n(null);
      };
    }
    if (n != null)
      return (
        (t = t()),
        (n.current = t),
        function () {
          n.current = null;
        }
      );
  }
  function dy(t, n, a) {
    ((a = a != null ? a.concat([t]) : null), Yc(4, 4, fy.bind(null, n, t), a));
  }
  function Zd() {}
  function hy(t, n) {
    var a = Jt();
    n = n === void 0 ? null : n;
    var i = a.memoizedState;
    return n !== null && Ud(n, i[1]) ? i[0] : ((a.memoizedState = [t, n]), t);
  }
  function my(t, n) {
    var a = Jt();
    n = n === void 0 ? null : n;
    var i = a.memoizedState;
    if (n !== null && Ud(n, i[1])) return i[0];
    if (((i = t()), rl)) {
      At(!0);
      try {
        t();
      } finally {
        At(!1);
      }
    }
    return ((a.memoizedState = [i, n]), i);
  }
  function Wd(t, n, a) {
    return a === void 0 || ((Aa & 1073741824) !== 0 && (mt & 261930) === 0)
      ? (t.memoizedState = n)
      : ((t.memoizedState = a), (t = pb()), (tt.lanes |= t), (vo |= t), a);
  }
  function py(t, n, a, i) {
    return nr(a, n)
      ? a
      : ql.current !== null
        ? ((t = Wd(t, a, i)), nr(t, n) || (sn = !0), t)
        : (Aa & 42) === 0 || ((Aa & 1073741824) !== 0 && (mt & 261930) === 0)
          ? ((sn = !0), (t.memoizedState = a))
          : ((t = pb()), (tt.lanes |= t), (vo |= t), n);
  }
  function gy(t, n, a, i, h) {
    var p = k.p;
    k.p = p !== 0 && 8 > p ? p : 8;
    var E = N.T,
      A = {};
    ((N.T = A), th(t, !1, n, a));
    try {
      var V = h(),
        J = N.S;
      if (
        (J !== null && J(A, V), V !== null && typeof V == "object" && typeof V.then == "function")
      ) {
        var se = oR(V, i);
        Ji(t, n, se, sr(t));
      } else Ji(t, n, i, sr(t));
    } catch (me) {
      Ji(t, n, { then: function () {}, status: "rejected", reason: me }, sr());
    } finally {
      ((k.p = p), E !== null && A.types !== null && (E.types = A.types), (N.T = E));
    }
  }
  function fR() {}
  function Jd(t, n, a, i) {
    if (t.tag !== 5) throw Error(l(476));
    var h = vy(t).queue;
    gy(
      t,
      h,
      n,
      B,
      a === null
        ? fR
        : function () {
            return (yy(t), a(i));
          },
    );
  }
  function vy(t) {
    var n = t.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: B,
      baseState: B,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ma,
        lastRenderedState: B,
      },
      next: null,
    };
    var a = {};
    return (
      (n.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ma,
          lastRenderedState: a,
        },
        next: null,
      }),
      (t.memoizedState = n),
      (t = t.alternate),
      t !== null && (t.memoizedState = n),
      n
    );
  }
  function yy(t) {
    var n = vy(t);
    (n.next === null && (n = t.alternate.memoizedState), Ji(t, n.next.queue, {}, sr()));
  }
  function eh() {
    return Rn(gs);
  }
  function by() {
    return Jt().memoizedState;
  }
  function Sy() {
    return Jt().memoizedState;
  }
  function dR(t) {
    for (var n = t.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = sr();
          t = uo(a);
          var i = fo(n, t, a);
          (i !== null && (Kn(i, n, a), Xi(i, n, a)), (n = { cache: Ad() }), (t.payload = n));
          return;
      }
      n = n.return;
    }
  }
  function hR(t, n, a) {
    var i = sr();
    ((a = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Gc(t) ? xy(n, a) : ((a = yd(t, n, a, i)), a !== null && (Kn(a, t, i), Cy(a, n, i))));
  }
  function wy(t, n, a) {
    var i = sr();
    Ji(t, n, a, i);
  }
  function Ji(t, n, a, i) {
    var h = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Gc(t)) xy(n, h);
    else {
      var p = t.alternate;
      if (
        t.lanes === 0 &&
        (p === null || p.lanes === 0) &&
        ((p = n.lastRenderedReducer), p !== null)
      )
        try {
          var E = n.lastRenderedState,
            A = p(E, a);
          if (((h.hasEagerState = !0), (h.eagerState = A), nr(A, E)))
            return (_c(t, n, h, 0), Lt === null && Tc(), !1);
        } catch {}
      if (((a = yd(t, n, h, i)), a !== null)) return (Kn(a, t, i), Cy(a, n, i), !0);
    }
    return !1;
  }
  function th(t, n, a, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: jh(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Gc(t))
    ) {
      if (n) throw Error(l(479));
    } else ((n = yd(t, a, i, 2)), n !== null && Kn(n, t, 2));
  }
  function Gc(t) {
    var n = t.alternate;
    return t === tt || (n !== null && n === tt);
  }
  function xy(t, n) {
    Yl = Uc = !0;
    var a = t.pending;
    (a === null ? (n.next = n) : ((n.next = a.next), (a.next = n)), (t.pending = n));
  }
  function Cy(t, n, a) {
    if ((a & 4194048) !== 0) {
      var i = n.lanes;
      ((i &= t.pendingLanes), (a |= i), (n.lanes = a), Tt(t, a));
    }
  }
  var es = {
    readContext: Rn,
    use: Ic,
    useCallback: Kt,
    useContext: Kt,
    useEffect: Kt,
    useImperativeHandle: Kt,
    useLayoutEffect: Kt,
    useInsertionEffect: Kt,
    useMemo: Kt,
    useReducer: Kt,
    useRef: Kt,
    useState: Kt,
    useDebugValue: Kt,
    useDeferredValue: Kt,
    useTransition: Kt,
    useSyncExternalStore: Kt,
    useId: Kt,
    useHostTransitionStatus: Kt,
    useFormState: Kt,
    useActionState: Kt,
    useOptimistic: Kt,
    useMemoCache: Kt,
    useCacheRefresh: Kt,
  };
  es.useEffectEvent = Kt;
  var Ey = {
      readContext: Rn,
      use: Ic,
      useCallback: function (t, n) {
        return ((Un().memoizedState = [t, n === void 0 ? null : n]), t);
      },
      useContext: Rn,
      useEffect: iy,
      useImperativeHandle: function (t, n, a) {
        ((a = a != null ? a.concat([t]) : null), qc(4194308, 4, fy.bind(null, n, t), a));
      },
      useLayoutEffect: function (t, n) {
        return qc(4194308, 4, t, n);
      },
      useInsertionEffect: function (t, n) {
        qc(4, 2, t, n);
      },
      useMemo: function (t, n) {
        var a = Un();
        n = n === void 0 ? null : n;
        var i = t();
        if (rl) {
          At(!0);
          try {
            t();
          } finally {
            At(!1);
          }
        }
        return ((a.memoizedState = [i, n]), i);
      },
      useReducer: function (t, n, a) {
        var i = Un();
        if (a !== void 0) {
          var h = a(n);
          if (rl) {
            At(!0);
            try {
              a(n);
            } finally {
              At(!1);
            }
          }
        } else h = n;
        return (
          (i.memoizedState = i.baseState = h),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: h,
          }),
          (i.queue = t),
          (t = t.dispatch = hR.bind(null, tt, t)),
          [i.memoizedState, t]
        );
      },
      useRef: function (t) {
        var n = Un();
        return ((t = { current: t }), (n.memoizedState = t));
      },
      useState: function (t) {
        t = Xd(t);
        var n = t.queue,
          a = wy.bind(null, tt, n);
        return ((n.dispatch = a), [t.memoizedState, a]);
      },
      useDebugValue: Zd,
      useDeferredValue: function (t, n) {
        var a = Un();
        return Wd(a, t, n);
      },
      useTransition: function () {
        var t = Xd(!1);
        return ((t = gy.bind(null, tt, t.queue, !0, !1)), (Un().memoizedState = t), [!1, t]);
      },
      useSyncExternalStore: function (t, n, a) {
        var i = tt,
          h = Un();
        if (vt) {
          if (a === void 0) throw Error(l(407));
          a = a();
        } else {
          if (((a = n()), Lt === null)) throw Error(l(349));
          (mt & 127) !== 0 || qv(i, n, a);
        }
        h.memoizedState = a;
        var p = { value: a, getSnapshot: n };
        return (
          (h.queue = p),
          iy(Gv.bind(null, i, p, t), [t]),
          (i.flags |= 2048),
          Xl(9, { destroy: void 0 }, Yv.bind(null, i, p, a, n), null),
          a
        );
      },
      useId: function () {
        var t = Un(),
          n = Lt.identifierPrefix;
        if (vt) {
          var a = na,
            i = ta;
          ((a = (i & ~(1 << (32 - Ft(i) - 1))).toString(32) + a),
            (n = "_" + n + "R_" + a),
            (a = Pc++),
            0 < a && (n += "H" + a.toString(32)),
            (n += "_"));
        } else ((a = lR++), (n = "_" + n + "r_" + a.toString(32) + "_"));
        return (t.memoizedState = n);
      },
      useHostTransitionStatus: eh,
      useFormState: ny,
      useActionState: ny,
      useOptimistic: function (t) {
        var n = Un();
        n.memoizedState = n.baseState = t;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((n.queue = a), (n = th.bind(null, tt, !0, a)), (a.dispatch = n), [t, n]);
      },
      useMemoCache: qd,
      useCacheRefresh: function () {
        return (Un().memoizedState = dR.bind(null, tt));
      },
      useEffectEvent: function (t) {
        var n = Un(),
          a = { impl: t };
        return (
          (n.memoizedState = a),
          function () {
            if ((Rt & 2) !== 0) throw Error(l(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    nh = {
      readContext: Rn,
      use: Ic,
      useCallback: hy,
      useContext: Rn,
      useEffect: Qd,
      useImperativeHandle: dy,
      useInsertionEffect: cy,
      useLayoutEffect: uy,
      useMemo: my,
      useReducer: Fc,
      useRef: ly,
      useState: function () {
        return Fc(Ma);
      },
      useDebugValue: Zd,
      useDeferredValue: function (t, n) {
        var a = Jt();
        return py(a, Nt.memoizedState, t, n);
      },
      useTransition: function () {
        var t = Fc(Ma)[0],
          n = Jt().memoizedState;
        return [typeof t == "boolean" ? t : Wi(t), n];
      },
      useSyncExternalStore: Fv,
      useId: by,
      useHostTransitionStatus: eh,
      useFormState: ry,
      useActionState: ry,
      useOptimistic: function (t, n) {
        var a = Jt();
        return Qv(a, Nt, t, n);
      },
      useMemoCache: qd,
      useCacheRefresh: Sy,
    };
  nh.useEffectEvent = sy;
  var Ry = {
    readContext: Rn,
    use: Ic,
    useCallback: hy,
    useContext: Rn,
    useEffect: Qd,
    useImperativeHandle: dy,
    useInsertionEffect: cy,
    useLayoutEffect: uy,
    useMemo: my,
    useReducer: Gd,
    useRef: ly,
    useState: function () {
      return Gd(Ma);
    },
    useDebugValue: Zd,
    useDeferredValue: function (t, n) {
      var a = Jt();
      return Nt === null ? Wd(a, t, n) : py(a, Nt.memoizedState, t, n);
    },
    useTransition: function () {
      var t = Gd(Ma)[0],
        n = Jt().memoizedState;
      return [typeof t == "boolean" ? t : Wi(t), n];
    },
    useSyncExternalStore: Fv,
    useId: by,
    useHostTransitionStatus: eh,
    useFormState: oy,
    useActionState: oy,
    useOptimistic: function (t, n) {
      var a = Jt();
      return Nt !== null ? Qv(a, Nt, t, n) : ((a.baseState = t), [t, a.queue.dispatch]);
    },
    useMemoCache: qd,
    useCacheRefresh: Sy,
  };
  Ry.useEffectEvent = sy;
  function rh(t, n, a, i) {
    ((n = t.memoizedState),
      (a = a(i, n)),
      (a = a == null ? n : g({}, n, a)),
      (t.memoizedState = a),
      t.lanes === 0 && (t.updateQueue.baseState = a));
  }
  var ah = {
    enqueueSetState: function (t, n, a) {
      t = t._reactInternals;
      var i = sr(),
        h = uo(i);
      ((h.payload = n),
        a != null && (h.callback = a),
        (n = fo(t, h, i)),
        n !== null && (Kn(n, t, i), Xi(n, t, i)));
    },
    enqueueReplaceState: function (t, n, a) {
      t = t._reactInternals;
      var i = sr(),
        h = uo(i);
      ((h.tag = 1),
        (h.payload = n),
        a != null && (h.callback = a),
        (n = fo(t, h, i)),
        n !== null && (Kn(n, t, i), Xi(n, t, i)));
    },
    enqueueForceUpdate: function (t, n) {
      t = t._reactInternals;
      var a = sr(),
        i = uo(a);
      ((i.tag = 2),
        n != null && (i.callback = n),
        (n = fo(t, i, a)),
        n !== null && (Kn(n, t, a), Xi(n, t, a)));
    },
  };
  function Ty(t, n, a, i, h, p, E) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(i, p, E)
        : n.prototype && n.prototype.isPureReactComponent
          ? !Ui(a, i) || !Ui(h, p)
          : !0
    );
  }
  function _y(t, n, a, i) {
    ((t = n.state),
      typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(a, i),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(a, i),
      n.state !== t && ah.enqueueReplaceState(n, n.state, null));
  }
  function al(t, n) {
    var a = n;
    if ("ref" in n) {
      a = {};
      for (var i in n) i !== "ref" && (a[i] = n[i]);
    }
    if ((t = t.defaultProps)) {
      a === n && (a = g({}, a));
      for (var h in t) a[h] === void 0 && (a[h] = t[h]);
    }
    return a;
  }
  function Dy(t) {
    Rc(t);
  }
  function Ay(t) {
    console.error(t);
  }
  function My(t) {
    Rc(t);
  }
  function Xc(t, n) {
    try {
      var a = t.onUncaughtError;
      a(n.value, { componentStack: n.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Ny(t, n, a) {
    try {
      var i = t.onCaughtError;
      i(a.value, { componentStack: a.stack, errorBoundary: n.tag === 1 ? n.stateNode : null });
    } catch (h) {
      setTimeout(function () {
        throw h;
      });
    }
  }
  function oh(t, n, a) {
    return (
      (a = uo(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        Xc(t, n);
      }),
      a
    );
  }
  function Oy(t) {
    return ((t = uo(t)), (t.tag = 3), t);
  }
  function jy(t, n, a, i) {
    var h = a.type.getDerivedStateFromError;
    if (typeof h == "function") {
      var p = i.value;
      ((t.payload = function () {
        return h(p);
      }),
        (t.callback = function () {
          Ny(n, a, i);
        }));
    }
    var E = a.stateNode;
    E !== null &&
      typeof E.componentDidCatch == "function" &&
      (t.callback = function () {
        (Ny(n, a, i),
          typeof h != "function" && (yo === null ? (yo = new Set([this])) : yo.add(this)));
        var A = i.stack;
        this.componentDidCatch(i.value, { componentStack: A !== null ? A : "" });
      });
  }
  function mR(t, n, a, i, h) {
    if (((a.flags |= 32768), i !== null && typeof i == "object" && typeof i.then == "function")) {
      if (((n = a.alternate), n !== null && Ul(n, a, h, !0), (a = ar.current), a !== null)) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              vr === null ? lu() : a.alternate === null && Qt === 0 && (Qt = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = h),
              i === kc
                ? (a.flags |= 16384)
                : ((n = a.updateQueue),
                  n === null ? (a.updateQueue = new Set([i])) : n.add(i),
                  Mh(t, i, h)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              i === kc
                ? (a.flags |= 16384)
                : ((n = a.updateQueue),
                  n === null
                    ? ((n = { transitions: null, markerInstances: null, retryQueue: new Set([i]) }),
                      (a.updateQueue = n))
                    : ((a = n.retryQueue), a === null ? (n.retryQueue = new Set([i])) : a.add(i)),
                  Mh(t, i, h)),
              !1
            );
        }
        throw Error(l(435, a.tag));
      }
      return (Mh(t, i, h), lu(), !1);
    }
    if (vt)
      return (
        (n = ar.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = h),
            i !== Ed && ((t = Error(l(422), { cause: i })), Ii(hr(t, a))))
          : (i !== Ed && ((n = Error(l(423), { cause: i })), Ii(hr(n, a))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (h &= -h),
            (t.lanes |= h),
            (i = hr(i, a)),
            (h = oh(t.stateNode, i, h)),
            kd(t, h),
            Qt !== 4 && (Qt = 2)),
        !1
      );
    var p = Error(l(520), { cause: i });
    if (((p = hr(p, a)), ss === null ? (ss = [p]) : ss.push(p), Qt !== 4 && (Qt = 2), n === null))
      return !0;
    ((i = hr(i, a)), (a = n));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (t = h & -h),
            (a.lanes |= t),
            (t = oh(a.stateNode, i, t)),
            kd(a, t),
            !1
          );
        case 1:
          if (
            ((n = a.type),
            (p = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == "function" ||
                (p !== null &&
                  typeof p.componentDidCatch == "function" &&
                  (yo === null || !yo.has(p)))))
          )
            return (
              (a.flags |= 65536),
              (h &= -h),
              (a.lanes |= h),
              (h = Oy(h)),
              jy(h, t, a, i),
              kd(a, h),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var lh = Error(l(461)),
    sn = !1;
  function Tn(t, n, a, i) {
    n.child = t === null ? Bv(n, null, a, i) : nl(n, t.child, a, i);
  }
  function zy(t, n, a, i, h) {
    a = a.render;
    var p = n.ref;
    if ("ref" in i) {
      var E = {};
      for (var A in i) A !== "ref" && (E[A] = i[A]);
    } else E = i;
    return (
      Wo(n),
      (i = Pd(t, n, a, E, p, h)),
      (A = Vd()),
      t !== null && !sn
        ? (Id(t, n, h), Na(t, n, h))
        : (vt && A && xd(n), (n.flags |= 1), Tn(t, n, i, h), n.child)
    );
  }
  function ky(t, n, a, i, h) {
    if (t === null) {
      var p = a.type;
      return typeof p == "function" && !bd(p) && p.defaultProps === void 0 && a.compare === null
        ? ((n.tag = 15), (n.type = p), Ly(t, n, p, i, h))
        : ((t = Ac(a.type, null, i, n, n.mode, h)), (t.ref = n.ref), (t.return = n), (n.child = t));
    }
    if (((p = t.child), !mh(t, h))) {
      var E = p.memoizedProps;
      if (((a = a.compare), (a = a !== null ? a : Ui), a(E, i) && t.ref === n.ref))
        return Na(t, n, h);
    }
    return ((n.flags |= 1), (t = Ra(p, i)), (t.ref = n.ref), (t.return = n), (n.child = t));
  }
  function Ly(t, n, a, i, h) {
    if (t !== null) {
      var p = t.memoizedProps;
      if (Ui(p, i) && t.ref === n.ref)
        if (((sn = !1), (n.pendingProps = i = p), mh(t, h))) (t.flags & 131072) !== 0 && (sn = !0);
        else return ((n.lanes = t.lanes), Na(t, n, h));
    }
    return ih(t, n, a, i, h);
  }
  function By(t, n, a, i) {
    var h = i.children,
      p = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        n.stateNode === null &&
        (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      i.mode === "hidden")
    ) {
      if ((n.flags & 128) !== 0) {
        if (((p = p !== null ? p.baseLanes | a : a), t !== null)) {
          for (i = n.child = t.child, h = 0; i !== null; )
            ((h = h | i.lanes | i.childLanes), (i = i.sibling));
          i = h & ~p;
        } else ((i = 0), (n.child = null));
        return $y(t, n, p, a, i);
      }
      if ((a & 536870912) !== 0)
        ((n.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && jc(n, p !== null ? p.cachePool : null),
          p !== null ? Uv(n, p) : Bd(),
          Pv(n));
      else return ((i = n.lanes = 536870912), $y(t, n, p !== null ? p.baseLanes | a : a, a, i));
    } else
      p !== null
        ? (jc(n, p.cachePool), Uv(n, p), mo(), (n.memoizedState = null))
        : (t !== null && jc(n, null), Bd(), mo());
    return (Tn(t, n, h, a), n.child);
  }
  function ts(t, n) {
    return (
      (t !== null && t.tag === 22) ||
        n.stateNode !== null ||
        (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      n.sibling
    );
  }
  function $y(t, n, a, i, h) {
    var p = Nd();
    return (
      (p = p === null ? null : { parent: on._currentValue, pool: p }),
      (n.memoizedState = { baseLanes: a, cachePool: p }),
      t !== null && jc(n, null),
      Bd(),
      Pv(n),
      t !== null && Ul(t, n, i, !0),
      (n.childLanes = h),
      null
    );
  }
  function Kc(t, n) {
    return (
      (n = Zc({ mode: n.mode, children: n.children }, t.mode)),
      (n.ref = t.ref),
      (t.child = n),
      (n.return = t),
      n
    );
  }
  function Hy(t, n, a) {
    return (
      nl(n, t.child, null, a),
      (t = Kc(n, n.pendingProps)),
      (t.flags |= 2),
      or(n),
      (n.memoizedState = null),
      t
    );
  }
  function pR(t, n, a) {
    var i = n.pendingProps,
      h = (n.flags & 128) !== 0;
    if (((n.flags &= -129), t === null)) {
      if (vt) {
        if (i.mode === "hidden") return ((t = Kc(n, i)), (n.lanes = 536870912), ts(null, t));
        if (
          (Hd(n),
          (t = Ut)
            ? ((t = Zb(t, gr)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((n.memoizedState = {
                  dehydrated: t,
                  treeContext: oo !== null ? { id: ta, overflow: na } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = xv(t)),
                (a.return = n),
                (n.child = a),
                (En = n),
                (Ut = null)))
            : (t = null),
          t === null)
        )
          throw io(n);
        return ((n.lanes = 536870912), null);
      }
      return Kc(n, i);
    }
    var p = t.memoizedState;
    if (p !== null) {
      var E = p.dehydrated;
      if ((Hd(n), h))
        if (n.flags & 256) ((n.flags &= -257), (n = Hy(t, n, a)));
        else if (n.memoizedState !== null) ((n.child = t.child), (n.flags |= 128), (n = null));
        else throw Error(l(558));
      else if ((sn || Ul(t, n, a, !1), (h = (a & t.childLanes) !== 0), sn || h)) {
        if (((i = Lt), i !== null && ((E = L(i, a)), E !== 0 && E !== p.retryLane)))
          throw ((p.retryLane = E), Xo(t, E), Kn(i, t, E), lh);
        (lu(), (n = Hy(t, n, a)));
      } else
        ((t = p.treeContext),
          (Ut = yr(E.nextSibling)),
          (En = n),
          (vt = !0),
          (lo = null),
          (gr = !1),
          t !== null && Rv(n, t),
          (n = Kc(n, i)),
          (n.flags |= 4096));
      return n;
    }
    return (
      (t = Ra(t.child, { mode: i.mode, children: i.children })),
      (t.ref = n.ref),
      (n.child = t),
      (t.return = n),
      t
    );
  }
  function Qc(t, n) {
    var a = n.ref;
    if (a === null) t !== null && t.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(l(284));
      (t === null || t.ref !== a) && (n.flags |= 4194816);
    }
  }
  function ih(t, n, a, i, h) {
    return (
      Wo(n),
      (a = Pd(t, n, a, i, void 0, h)),
      (i = Vd()),
      t !== null && !sn
        ? (Id(t, n, h), Na(t, n, h))
        : (vt && i && xd(n), (n.flags |= 1), Tn(t, n, a, h), n.child)
    );
  }
  function Uy(t, n, a, i, h, p) {
    return (
      Wo(n),
      (n.updateQueue = null),
      (a = Iv(n, i, a, h)),
      Vv(t),
      (i = Vd()),
      t !== null && !sn
        ? (Id(t, n, p), Na(t, n, p))
        : (vt && i && xd(n), (n.flags |= 1), Tn(t, n, a, p), n.child)
    );
  }
  function Py(t, n, a, i, h) {
    if ((Wo(n), n.stateNode === null)) {
      var p = Ll,
        E = a.contextType;
      (typeof E == "object" && E !== null && (p = Rn(E)),
        (p = new a(i, p)),
        (n.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null),
        (p.updater = ah),
        (n.stateNode = p),
        (p._reactInternals = n),
        (p = n.stateNode),
        (p.props = i),
        (p.state = n.memoizedState),
        (p.refs = {}),
        jd(n),
        (E = a.contextType),
        (p.context = typeof E == "object" && E !== null ? Rn(E) : Ll),
        (p.state = n.memoizedState),
        (E = a.getDerivedStateFromProps),
        typeof E == "function" && (rh(n, a, E, i), (p.state = n.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function" ||
          (typeof p.UNSAFE_componentWillMount != "function" &&
            typeof p.componentWillMount != "function") ||
          ((E = p.state),
          typeof p.componentWillMount == "function" && p.componentWillMount(),
          typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(),
          E !== p.state && ah.enqueueReplaceState(p, p.state, null),
          Qi(n, i, p, h),
          Ki(),
          (p.state = n.memoizedState)),
        typeof p.componentDidMount == "function" && (n.flags |= 4194308),
        (i = !0));
    } else if (t === null) {
      p = n.stateNode;
      var A = n.memoizedProps,
        V = al(a, A);
      p.props = V;
      var J = p.context,
        se = a.contextType;
      ((E = Ll), typeof se == "object" && se !== null && (E = Rn(se)));
      var me = a.getDerivedStateFromProps;
      ((se = typeof me == "function" || typeof p.getSnapshotBeforeUpdate == "function"),
        (A = n.pendingProps !== A),
        se ||
          (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
            typeof p.componentWillReceiveProps != "function") ||
          ((A || J !== E) && _y(n, p, i, E)),
        (co = !1));
      var te = n.memoizedState;
      ((p.state = te),
        Qi(n, i, p, h),
        Ki(),
        (J = n.memoizedState),
        A || te !== J || co
          ? (typeof me == "function" && (rh(n, a, me, i), (J = n.memoizedState)),
            (V = co || Ty(n, a, V, i, te, J, E))
              ? (se ||
                  (typeof p.UNSAFE_componentWillMount != "function" &&
                    typeof p.componentWillMount != "function") ||
                  (typeof p.componentWillMount == "function" && p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == "function" &&
                    p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == "function" && (n.flags |= 4194308))
              : (typeof p.componentDidMount == "function" && (n.flags |= 4194308),
                (n.memoizedProps = i),
                (n.memoizedState = J)),
            (p.props = i),
            (p.state = J),
            (p.context = E),
            (i = V))
          : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), (i = !1)));
    } else {
      ((p = n.stateNode),
        zd(t, n),
        (E = n.memoizedProps),
        (se = al(a, E)),
        (p.props = se),
        (me = n.pendingProps),
        (te = p.context),
        (J = a.contextType),
        (V = Ll),
        typeof J == "object" && J !== null && (V = Rn(J)),
        (A = a.getDerivedStateFromProps),
        (J = typeof A == "function" || typeof p.getSnapshotBeforeUpdate == "function") ||
          (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
            typeof p.componentWillReceiveProps != "function") ||
          ((E !== me || te !== V) && _y(n, p, i, V)),
        (co = !1),
        (te = n.memoizedState),
        (p.state = te),
        Qi(n, i, p, h),
        Ki());
      var le = n.memoizedState;
      E !== me || te !== le || co || (t !== null && t.dependencies !== null && Nc(t.dependencies))
        ? (typeof A == "function" && (rh(n, a, A, i), (le = n.memoizedState)),
          (se =
            co ||
            Ty(n, a, se, i, te, le, V) ||
            (t !== null && t.dependencies !== null && Nc(t.dependencies)))
            ? (J ||
                (typeof p.UNSAFE_componentWillUpdate != "function" &&
                  typeof p.componentWillUpdate != "function") ||
                (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(i, le, V),
                typeof p.UNSAFE_componentWillUpdate == "function" &&
                  p.UNSAFE_componentWillUpdate(i, le, V)),
              typeof p.componentDidUpdate == "function" && (n.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
            : (typeof p.componentDidUpdate != "function" ||
                (E === t.memoizedProps && te === t.memoizedState) ||
                (n.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != "function" ||
                (E === t.memoizedProps && te === t.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = i),
              (n.memoizedState = le)),
          (p.props = i),
          (p.state = le),
          (p.context = V),
          (i = se))
        : (typeof p.componentDidUpdate != "function" ||
            (E === t.memoizedProps && te === t.memoizedState) ||
            (n.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != "function" ||
            (E === t.memoizedProps && te === t.memoizedState) ||
            (n.flags |= 1024),
          (i = !1));
    }
    return (
      (p = i),
      Qc(t, n),
      (i = (n.flags & 128) !== 0),
      p || i
        ? ((p = n.stateNode),
          (a = i && typeof a.getDerivedStateFromError != "function" ? null : p.render()),
          (n.flags |= 1),
          t !== null && i
            ? ((n.child = nl(n, t.child, null, h)), (n.child = nl(n, null, a, h)))
            : Tn(t, n, a, h),
          (n.memoizedState = p.state),
          (t = n.child))
        : (t = Na(t, n, h)),
      t
    );
  }
  function Vy(t, n, a, i) {
    return (Qo(), (n.flags |= 256), Tn(t, n, a, i), n.child);
  }
  var sh = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function ch(t) {
    return { baseLanes: t, cachePool: Nv() };
  }
  function uh(t, n, a) {
    return ((t = t !== null ? t.childLanes & ~a : 0), n && (t |= ir), t);
  }
  function Iy(t, n, a) {
    var i = n.pendingProps,
      h = !1,
      p = (n.flags & 128) !== 0,
      E;
    if (
      ((E = p) || (E = t !== null && t.memoizedState === null ? !1 : (Wt.current & 2) !== 0),
      E && ((h = !0), (n.flags &= -129)),
      (E = (n.flags & 32) !== 0),
      (n.flags &= -33),
      t === null)
    ) {
      if (vt) {
        if (
          (h ? ho(n) : mo(),
          (t = Ut)
            ? ((t = Zb(t, gr)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((n.memoizedState = {
                  dehydrated: t,
                  treeContext: oo !== null ? { id: ta, overflow: na } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = xv(t)),
                (a.return = n),
                (n.child = a),
                (En = n),
                (Ut = null)))
            : (t = null),
          t === null)
        )
          throw io(n);
        return (Yh(t) ? (n.lanes = 32) : (n.lanes = 536870912), null);
      }
      var A = i.children;
      return (
        (i = i.fallback),
        h
          ? (mo(),
            (h = n.mode),
            (A = Zc({ mode: "hidden", children: A }, h)),
            (i = Ko(i, h, a, null)),
            (A.return = n),
            (i.return = n),
            (A.sibling = i),
            (n.child = A),
            (i = n.child),
            (i.memoizedState = ch(a)),
            (i.childLanes = uh(t, E, a)),
            (n.memoizedState = sh),
            ts(null, i))
          : (ho(n), fh(n, A))
      );
    }
    var V = t.memoizedState;
    if (V !== null && ((A = V.dehydrated), A !== null)) {
      if (p)
        n.flags & 256
          ? (ho(n), (n.flags &= -257), (n = dh(t, n, a)))
          : n.memoizedState !== null
            ? (mo(), (n.child = t.child), (n.flags |= 128), (n = null))
            : (mo(),
              (A = i.fallback),
              (h = n.mode),
              (i = Zc({ mode: "visible", children: i.children }, h)),
              (A = Ko(A, h, a, null)),
              (A.flags |= 2),
              (i.return = n),
              (A.return = n),
              (i.sibling = A),
              (n.child = i),
              nl(n, t.child, null, a),
              (i = n.child),
              (i.memoizedState = ch(a)),
              (i.childLanes = uh(t, E, a)),
              (n.memoizedState = sh),
              (n = ts(null, i)));
      else if ((ho(n), Yh(A))) {
        if (((E = A.nextSibling && A.nextSibling.dataset), E)) var J = E.dgst;
        ((E = J),
          (i = Error(l(419))),
          (i.stack = ""),
          (i.digest = E),
          Ii({ value: i, source: null, stack: null }),
          (n = dh(t, n, a)));
      } else if ((sn || Ul(t, n, a, !1), (E = (a & t.childLanes) !== 0), sn || E)) {
        if (((E = Lt), E !== null && ((i = L(E, a)), i !== 0 && i !== V.retryLane)))
          throw ((V.retryLane = i), Xo(t, i), Kn(E, t, i), lh);
        (qh(A) || lu(), (n = dh(t, n, a)));
      } else
        qh(A)
          ? ((n.flags |= 192), (n.child = t.child), (n = null))
          : ((t = V.treeContext),
            (Ut = yr(A.nextSibling)),
            (En = n),
            (vt = !0),
            (lo = null),
            (gr = !1),
            t !== null && Rv(n, t),
            (n = fh(n, i.children)),
            (n.flags |= 4096));
      return n;
    }
    return h
      ? (mo(),
        (A = i.fallback),
        (h = n.mode),
        (V = t.child),
        (J = V.sibling),
        (i = Ra(V, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = V.subtreeFlags & 65011712),
        J !== null ? (A = Ra(J, A)) : ((A = Ko(A, h, a, null)), (A.flags |= 2)),
        (A.return = n),
        (i.return = n),
        (i.sibling = A),
        (n.child = i),
        ts(null, i),
        (i = n.child),
        (A = t.child.memoizedState),
        A === null
          ? (A = ch(a))
          : ((h = A.cachePool),
            h !== null
              ? ((V = on._currentValue), (h = h.parent !== V ? { parent: V, pool: V } : h))
              : (h = Nv()),
            (A = { baseLanes: A.baseLanes | a, cachePool: h })),
        (i.memoizedState = A),
        (i.childLanes = uh(t, E, a)),
        (n.memoizedState = sh),
        ts(t.child, i))
      : (ho(n),
        (a = t.child),
        (t = a.sibling),
        (a = Ra(a, { mode: "visible", children: i.children })),
        (a.return = n),
        (a.sibling = null),
        t !== null &&
          ((E = n.deletions), E === null ? ((n.deletions = [t]), (n.flags |= 16)) : E.push(t)),
        (n.child = a),
        (n.memoizedState = null),
        a);
  }
  function fh(t, n) {
    return ((n = Zc({ mode: "visible", children: n }, t.mode)), (n.return = t), (t.child = n));
  }
  function Zc(t, n) {
    return ((t = rr(22, t, null, n)), (t.lanes = 0), t);
  }
  function dh(t, n, a) {
    return (
      nl(n, t.child, null, a),
      (t = fh(n, n.pendingProps.children)),
      (t.flags |= 2),
      (n.memoizedState = null),
      t
    );
  }
  function Fy(t, n, a) {
    t.lanes |= n;
    var i = t.alternate;
    (i !== null && (i.lanes |= n), _d(t.return, n, a));
  }
  function hh(t, n, a, i, h, p) {
    var E = t.memoizedState;
    E === null
      ? (t.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: a,
          tailMode: h,
          treeForkCount: p,
        })
      : ((E.isBackwards = n),
        (E.rendering = null),
        (E.renderingStartTime = 0),
        (E.last = i),
        (E.tail = a),
        (E.tailMode = h),
        (E.treeForkCount = p));
  }
  function qy(t, n, a) {
    var i = n.pendingProps,
      h = i.revealOrder,
      p = i.tail;
    i = i.children;
    var E = Wt.current,
      A = (E & 2) !== 0;
    if (
      (A ? ((E = (E & 1) | 2), (n.flags |= 128)) : (E &= 1),
      Q(Wt, E),
      Tn(t, n, i, a),
      (i = vt ? Vi : 0),
      !A && t !== null && (t.flags & 128) !== 0)
    )
      e: for (t = n.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Fy(t, a, n);
        else if (t.tag === 19) Fy(t, a, n);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === n) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === n) break e;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (h) {
      case "forwards":
        for (a = n.child, h = null; a !== null; )
          ((t = a.alternate), t !== null && Hc(t) === null && (h = a), (a = a.sibling));
        ((a = h),
          a === null ? ((h = n.child), (n.child = null)) : ((h = a.sibling), (a.sibling = null)),
          hh(n, !1, h, a, p, i));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, h = n.child, n.child = null; h !== null; ) {
          if (((t = h.alternate), t !== null && Hc(t) === null)) {
            n.child = h;
            break;
          }
          ((t = h.sibling), (h.sibling = a), (a = h), (h = t));
        }
        hh(n, !0, a, null, p, i);
        break;
      case "together":
        hh(n, !1, null, null, void 0, i);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Na(t, n, a) {
    if (
      (t !== null && (n.dependencies = t.dependencies), (vo |= n.lanes), (a & n.childLanes) === 0)
    )
      if (t !== null) {
        if ((Ul(t, n, a, !1), (a & n.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && n.child !== t.child) throw Error(l(153));
    if (n.child !== null) {
      for (t = n.child, a = Ra(t, t.pendingProps), n.child = a, a.return = n; t.sibling !== null; )
        ((t = t.sibling), (a = a.sibling = Ra(t, t.pendingProps)), (a.return = n));
      a.sibling = null;
    }
    return n.child;
  }
  function mh(t, n) {
    return (t.lanes & n) !== 0 ? !0 : ((t = t.dependencies), !!(t !== null && Nc(t)));
  }
  function gR(t, n, a) {
    switch (n.tag) {
      case 3:
        (Se(n, n.stateNode.containerInfo), so(n, on, t.memoizedState.cache), Qo());
        break;
      case 27:
      case 5:
        Ye(n);
        break;
      case 4:
        Se(n, n.stateNode.containerInfo);
        break;
      case 10:
        so(n, n.type, n.memoizedProps.value);
        break;
      case 31:
        if (n.memoizedState !== null) return ((n.flags |= 128), Hd(n), null);
        break;
      case 13:
        var i = n.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (ho(n), (n.flags |= 128), null)
            : (a & n.child.childLanes) !== 0
              ? Iy(t, n, a)
              : (ho(n), (t = Na(t, n, a)), t !== null ? t.sibling : null);
        ho(n);
        break;
      case 19:
        var h = (t.flags & 128) !== 0;
        if (
          ((i = (a & n.childLanes) !== 0),
          i || (Ul(t, n, a, !1), (i = (a & n.childLanes) !== 0)),
          h)
        ) {
          if (i) return qy(t, n, a);
          n.flags |= 128;
        }
        if (
          ((h = n.memoizedState),
          h !== null && ((h.rendering = null), (h.tail = null), (h.lastEffect = null)),
          Q(Wt, Wt.current),
          i)
        )
          break;
        return null;
      case 22:
        return ((n.lanes = 0), By(t, n, a, n.pendingProps));
      case 24:
        so(n, on, t.memoizedState.cache);
    }
    return Na(t, n, a);
  }
  function Yy(t, n, a) {
    if (t !== null)
      if (t.memoizedProps !== n.pendingProps) sn = !0;
      else {
        if (!mh(t, a) && (n.flags & 128) === 0) return ((sn = !1), gR(t, n, a));
        sn = (t.flags & 131072) !== 0;
      }
    else ((sn = !1), vt && (n.flags & 1048576) !== 0 && Ev(n, Vi, n.index));
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        e: {
          var i = n.pendingProps;
          if (((t = el(n.elementType)), (n.type = t), typeof t == "function"))
            bd(t)
              ? ((i = al(t, i)), (n.tag = 1), (n = Py(null, n, t, i, a)))
              : ((n.tag = 0), (n = ih(null, n, t, i, a)));
          else {
            if (t != null) {
              var h = t.$$typeof;
              if (h === j) {
                ((n.tag = 11), (n = zy(null, n, t, i, a)));
                break e;
              } else if (h === $) {
                ((n.tag = 14), (n = ky(null, n, t, i, a)));
                break e;
              }
            }
            throw ((n = U(t) || t), Error(l(306, n, "")));
          }
        }
        return n;
      case 0:
        return ih(t, n, n.type, n.pendingProps, a);
      case 1:
        return ((i = n.type), (h = al(i, n.pendingProps)), Py(t, n, i, h, a));
      case 3:
        e: {
          if ((Se(n, n.stateNode.containerInfo), t === null)) throw Error(l(387));
          i = n.pendingProps;
          var p = n.memoizedState;
          ((h = p.element), zd(t, n), Qi(n, i, null, a));
          var E = n.memoizedState;
          if (
            ((i = E.cache),
            so(n, on, i),
            i !== p.cache && Dd(n, [on], a, !0),
            Ki(),
            (i = E.element),
            p.isDehydrated)
          )
            if (
              ((p = { element: i, isDehydrated: !1, cache: E.cache }),
              (n.updateQueue.baseState = p),
              (n.memoizedState = p),
              n.flags & 256)
            ) {
              n = Vy(t, n, i, a);
              break e;
            } else if (i !== h) {
              ((h = hr(Error(l(424)), n)), Ii(h), (n = Vy(t, n, i, a)));
              break e;
            } else
              for (
                t = n.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                  Ut = yr(t.firstChild),
                  En = n,
                  vt = !0,
                  lo = null,
                  gr = !0,
                  a = Bv(n, null, i, a),
                  n.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
          else {
            if ((Qo(), i === h)) {
              n = Na(t, n, a);
              break e;
            }
            Tn(t, n, i, a);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          Qc(t, n),
          t === null
            ? (a = r0(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = a)
              : vt ||
                ((a = n.type),
                (t = n.pendingProps),
                (i = hu(ue.current).createElement(a)),
                (i[De] = n),
                (i[Ae] = t),
                _n(i, a, t),
                ct(i),
                (n.stateNode = i))
            : (n.memoizedState = r0(n.type, t.memoizedProps, n.pendingProps, t.memoizedState)),
          null
        );
      case 27:
        return (
          Ye(n),
          t === null &&
            vt &&
            ((i = n.stateNode = e0(n.type, n.pendingProps, ue.current)),
            (En = n),
            (gr = !0),
            (h = Ut),
            xo(n.type) ? ((Gh = h), (Ut = yr(i.firstChild))) : (Ut = h)),
          Tn(t, n, n.pendingProps.children, a),
          Qc(t, n),
          t === null && (n.flags |= 4194304),
          n.child
        );
      case 5:
        return (
          t === null &&
            vt &&
            ((h = i = Ut) &&
              ((i = YR(i, n.type, n.pendingProps, gr)),
              i !== null
                ? ((n.stateNode = i), (En = n), (Ut = yr(i.firstChild)), (gr = !1), (h = !0))
                : (h = !1)),
            h || io(n)),
          Ye(n),
          (h = n.type),
          (p = n.pendingProps),
          (E = t !== null ? t.memoizedProps : null),
          (i = p.children),
          Vh(h, p) ? (i = null) : E !== null && Vh(h, E) && (n.flags |= 32),
          n.memoizedState !== null && ((h = Pd(t, n, iR, null, null, a)), (gs._currentValue = h)),
          Qc(t, n),
          Tn(t, n, i, a),
          n.child
        );
      case 6:
        return (
          t === null &&
            vt &&
            ((t = a = Ut) &&
              ((a = GR(a, n.pendingProps, gr)),
              a !== null ? ((n.stateNode = a), (En = n), (Ut = null), (t = !0)) : (t = !1)),
            t || io(n)),
          null
        );
      case 13:
        return Iy(t, n, a);
      case 4:
        return (
          Se(n, n.stateNode.containerInfo),
          (i = n.pendingProps),
          t === null ? (n.child = nl(n, null, i, a)) : Tn(t, n, i, a),
          n.child
        );
      case 11:
        return zy(t, n, n.type, n.pendingProps, a);
      case 7:
        return (Tn(t, n, n.pendingProps, a), n.child);
      case 8:
        return (Tn(t, n, n.pendingProps.children, a), n.child);
      case 12:
        return (Tn(t, n, n.pendingProps.children, a), n.child);
      case 10:
        return ((i = n.pendingProps), so(n, n.type, i.value), Tn(t, n, i.children, a), n.child);
      case 9:
        return (
          (h = n.type._context),
          (i = n.pendingProps.children),
          Wo(n),
          (h = Rn(h)),
          (i = i(h)),
          (n.flags |= 1),
          Tn(t, n, i, a),
          n.child
        );
      case 14:
        return ky(t, n, n.type, n.pendingProps, a);
      case 15:
        return Ly(t, n, n.type, n.pendingProps, a);
      case 19:
        return qy(t, n, a);
      case 31:
        return pR(t, n, a);
      case 22:
        return By(t, n, a, n.pendingProps);
      case 24:
        return (
          Wo(n),
          (i = Rn(on)),
          t === null
            ? ((h = Nd()),
              h === null &&
                ((h = Lt),
                (p = Ad()),
                (h.pooledCache = p),
                p.refCount++,
                p !== null && (h.pooledCacheLanes |= a),
                (h = p)),
              (n.memoizedState = { parent: i, cache: h }),
              jd(n),
              so(n, on, h))
            : ((t.lanes & a) !== 0 && (zd(t, n), Qi(n, null, null, a), Ki()),
              (h = t.memoizedState),
              (p = n.memoizedState),
              h.parent !== i
                ? ((h = { parent: i, cache: i }),
                  (n.memoizedState = h),
                  n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = h),
                  so(n, on, i))
                : ((i = p.cache), so(n, on, i), i !== h.cache && Dd(n, [on], a, !0))),
          Tn(t, n, n.pendingProps.children, a),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(l(156, n.tag));
  }
  function Oa(t) {
    t.flags |= 4;
  }
  function ph(t, n, a, i, h) {
    if (((n = (t.mode & 32) !== 0) && (n = !1), n)) {
      if (((t.flags |= 16777216), (h & 335544128) === h))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (bb()) t.flags |= 8192;
        else throw ((tl = kc), Od);
    } else t.flags &= -16777217;
  }
  function Gy(t, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (((t.flags |= 16777216), !s0(n)))
      if (bb()) t.flags |= 8192;
      else throw ((tl = kc), Od);
  }
  function Wc(t, n) {
    (n !== null && (t.flags |= 4),
      t.flags & 16384 && ((n = t.tag !== 22 ? $e() : 536870912), (t.lanes |= n), (Wl |= n)));
  }
  function ns(t, n) {
    if (!vt)
      switch (t.tailMode) {
        case "hidden":
          n = t.tail;
          for (var a = null; n !== null; ) (n.alternate !== null && (a = n), (n = n.sibling));
          a === null ? (t.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = t.tail;
          for (var i = null; a !== null; ) (a.alternate !== null && (i = a), (a = a.sibling));
          i === null
            ? n || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function Pt(t) {
    var n = t.alternate !== null && t.alternate.child === t.child,
      a = 0,
      i = 0;
    if (n)
      for (var h = t.child; h !== null; )
        ((a |= h.lanes | h.childLanes),
          (i |= h.subtreeFlags & 65011712),
          (i |= h.flags & 65011712),
          (h.return = t),
          (h = h.sibling));
    else
      for (h = t.child; h !== null; )
        ((a |= h.lanes | h.childLanes),
          (i |= h.subtreeFlags),
          (i |= h.flags),
          (h.return = t),
          (h = h.sibling));
    return ((t.subtreeFlags |= i), (t.childLanes = a), n);
  }
  function vR(t, n, a) {
    var i = n.pendingProps;
    switch ((Cd(n), n.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Pt(n), null);
      case 1:
        return (Pt(n), null);
      case 3:
        return (
          (a = n.stateNode),
          (i = null),
          t !== null && (i = t.memoizedState.cache),
          n.memoizedState.cache !== i && (n.flags |= 2048),
          Da(on),
          Ce(),
          a.pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
          (t === null || t.child === null) &&
            (Hl(n)
              ? Oa(n)
              : t === null ||
                (t.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), Rd())),
          Pt(n),
          null
        );
      case 26:
        var h = n.type,
          p = n.memoizedState;
        return (
          t === null
            ? (Oa(n), p !== null ? (Pt(n), Gy(n, p)) : (Pt(n), ph(n, h, null, i, a)))
            : p
              ? p !== t.memoizedState
                ? (Oa(n), Pt(n), Gy(n, p))
                : (Pt(n), (n.flags &= -16777217))
              : ((t = t.memoizedProps), t !== i && Oa(n), Pt(n), ph(n, h, t, i, a)),
          null
        );
      case 27:
        if ((je(n), (a = ue.current), (h = n.type), t !== null && n.stateNode != null))
          t.memoizedProps !== i && Oa(n);
        else {
          if (!i) {
            if (n.stateNode === null) throw Error(l(166));
            return (Pt(n), null);
          }
          ((t = ae.current), Hl(n) ? Tv(n) : ((t = e0(h, i, a)), (n.stateNode = t), Oa(n)));
        }
        return (Pt(n), null);
      case 5:
        if ((je(n), (h = n.type), t !== null && n.stateNode != null))
          t.memoizedProps !== i && Oa(n);
        else {
          if (!i) {
            if (n.stateNode === null) throw Error(l(166));
            return (Pt(n), null);
          }
          if (((p = ae.current), Hl(n))) Tv(n);
          else {
            var E = hu(ue.current);
            switch (p) {
              case 1:
                p = E.createElementNS("http://www.w3.org/2000/svg", h);
                break;
              case 2:
                p = E.createElementNS("http://www.w3.org/1998/Math/MathML", h);
                break;
              default:
                switch (h) {
                  case "svg":
                    p = E.createElementNS("http://www.w3.org/2000/svg", h);
                    break;
                  case "math":
                    p = E.createElementNS("http://www.w3.org/1998/Math/MathML", h);
                    break;
                  case "script":
                    ((p = E.createElement("div")),
                      (p.innerHTML = "<script><\/script>"),
                      (p = p.removeChild(p.firstChild)));
                    break;
                  case "select":
                    ((p =
                      typeof i.is == "string"
                        ? E.createElement("select", { is: i.is })
                        : E.createElement("select")),
                      i.multiple ? (p.multiple = !0) : i.size && (p.size = i.size));
                    break;
                  default:
                    p =
                      typeof i.is == "string"
                        ? E.createElement(h, { is: i.is })
                        : E.createElement(h);
                }
            }
            ((p[De] = n), (p[Ae] = i));
            e: for (E = n.child; E !== null; ) {
              if (E.tag === 5 || E.tag === 6) p.appendChild(E.stateNode);
              else if (E.tag !== 4 && E.tag !== 27 && E.child !== null) {
                ((E.child.return = E), (E = E.child));
                continue;
              }
              if (E === n) break e;
              for (; E.sibling === null; ) {
                if (E.return === null || E.return === n) break e;
                E = E.return;
              }
              ((E.sibling.return = E.return), (E = E.sibling));
            }
            n.stateNode = p;
            e: switch ((_n(p, h, i), h)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
            i && Oa(n);
          }
        }
        return (Pt(n), ph(n, n.type, t === null ? null : t.memoizedProps, n.pendingProps, a), null);
      case 6:
        if (t && n.stateNode != null) t.memoizedProps !== i && Oa(n);
        else {
          if (typeof i != "string" && n.stateNode === null) throw Error(l(166));
          if (((t = ue.current), Hl(n))) {
            if (((t = n.stateNode), (a = n.memoizedProps), (i = null), (h = En), h !== null))
              switch (h.tag) {
                case 27:
                case 5:
                  i = h.memoizedProps;
              }
            ((t[De] = n),
              (t = !!(
                t.nodeValue === a ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                Ib(t.nodeValue, a)
              )),
              t || io(n, !0));
          } else ((t = hu(t).createTextNode(i)), (t[De] = n), (n.stateNode = t));
        }
        return (Pt(n), null);
      case 31:
        if (((a = n.memoizedState), t === null || t.memoizedState !== null)) {
          if (((i = Hl(n)), a !== null)) {
            if (t === null) {
              if (!i) throw Error(l(318));
              if (((t = n.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
                throw Error(l(557));
              t[De] = n;
            } else (Qo(), (n.flags & 128) === 0 && (n.memoizedState = null), (n.flags |= 4));
            (Pt(n), (t = !1));
          } else
            ((a = Rd()),
              t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a),
              (t = !0));
          if (!t) return n.flags & 256 ? (or(n), n) : (or(n), null);
          if ((n.flags & 128) !== 0) throw Error(l(558));
        }
        return (Pt(n), null);
      case 13:
        if (
          ((i = n.memoizedState),
          t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((h = Hl(n)), i !== null && i.dehydrated !== null)) {
            if (t === null) {
              if (!h) throw Error(l(318));
              if (((h = n.memoizedState), (h = h !== null ? h.dehydrated : null), !h))
                throw Error(l(317));
              h[De] = n;
            } else (Qo(), (n.flags & 128) === 0 && (n.memoizedState = null), (n.flags |= 4));
            (Pt(n), (h = !1));
          } else
            ((h = Rd()),
              t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = h),
              (h = !0));
          if (!h) return n.flags & 256 ? (or(n), n) : (or(n), null);
        }
        return (
          or(n),
          (n.flags & 128) !== 0
            ? ((n.lanes = a), n)
            : ((a = i !== null),
              (t = t !== null && t.memoizedState !== null),
              a &&
                ((i = n.child),
                (h = null),
                i.alternate !== null &&
                  i.alternate.memoizedState !== null &&
                  i.alternate.memoizedState.cachePool !== null &&
                  (h = i.alternate.memoizedState.cachePool.pool),
                (p = null),
                i.memoizedState !== null &&
                  i.memoizedState.cachePool !== null &&
                  (p = i.memoizedState.cachePool.pool),
                p !== h && (i.flags |= 2048)),
              a !== t && a && (n.child.flags |= 8192),
              Wc(n, n.updateQueue),
              Pt(n),
              null)
        );
      case 4:
        return (Ce(), t === null && Bh(n.stateNode.containerInfo), Pt(n), null);
      case 10:
        return (Da(n.type), Pt(n), null);
      case 19:
        if ((P(Wt), (i = n.memoizedState), i === null)) return (Pt(n), null);
        if (((h = (n.flags & 128) !== 0), (p = i.rendering), p === null))
          if (h) ns(i, !1);
          else {
            if (Qt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = n.child; t !== null; ) {
                if (((p = Hc(t)), p !== null)) {
                  for (
                    n.flags |= 128,
                      ns(i, !1),
                      t = p.updateQueue,
                      n.updateQueue = t,
                      Wc(n, t),
                      n.subtreeFlags = 0,
                      t = a,
                      a = n.child;
                    a !== null;
                  )
                    (wv(a, t), (a = a.sibling));
                  return (Q(Wt, (Wt.current & 1) | 2), vt && Ta(n, i.treeForkCount), n.child);
                }
                t = t.sibling;
              }
            i.tail !== null &&
              ot() > ru &&
              ((n.flags |= 128), (h = !0), ns(i, !1), (n.lanes = 4194304));
          }
        else {
          if (!h)
            if (((t = Hc(p)), t !== null)) {
              if (
                ((n.flags |= 128),
                (h = !0),
                (t = t.updateQueue),
                (n.updateQueue = t),
                Wc(n, t),
                ns(i, !0),
                i.tail === null && i.tailMode === "hidden" && !p.alternate && !vt)
              )
                return (Pt(n), null);
            } else
              2 * ot() - i.renderingStartTime > ru &&
                a !== 536870912 &&
                ((n.flags |= 128), (h = !0), ns(i, !1), (n.lanes = 4194304));
          i.isBackwards
            ? ((p.sibling = n.child), (n.child = p))
            : ((t = i.last), t !== null ? (t.sibling = p) : (n.child = p), (i.last = p));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = ot()),
            (t.sibling = null),
            (a = Wt.current),
            Q(Wt, h ? (a & 1) | 2 : a & 1),
            vt && Ta(n, i.treeForkCount),
            t)
          : (Pt(n), null);
      case 22:
      case 23:
        return (
          or(n),
          $d(),
          (i = n.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== i && (n.flags |= 8192)
            : i && (n.flags |= 8192),
          i
            ? (a & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              (Pt(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : Pt(n),
          (a = n.updateQueue),
          a !== null && Wc(n, a.retryQueue),
          (a = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          (i = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (i = n.memoizedState.cachePool.pool),
          i !== a && (n.flags |= 2048),
          t !== null && P(Jo),
          null
        );
      case 24:
        return (
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          n.memoizedState.cache !== a && (n.flags |= 2048),
          Da(on),
          Pt(n),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, n.tag));
  }
  function yR(t, n) {
    switch ((Cd(n), n.tag)) {
      case 1:
        return ((t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null);
      case 3:
        return (
          Da(on),
          Ce(),
          (t = n.flags),
          (t & 65536) !== 0 && (t & 128) === 0 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 26:
      case 27:
      case 5:
        return (je(n), null);
      case 31:
        if (n.memoizedState !== null) {
          if ((or(n), n.alternate === null)) throw Error(l(340));
          Qo();
        }
        return ((t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null);
      case 13:
        if ((or(n), (t = n.memoizedState), t !== null && t.dehydrated !== null)) {
          if (n.alternate === null) throw Error(l(340));
          Qo();
        }
        return ((t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null);
      case 19:
        return (P(Wt), null);
      case 4:
        return (Ce(), null);
      case 10:
        return (Da(n.type), null);
      case 22:
      case 23:
        return (
          or(n),
          $d(),
          t !== null && P(Jo),
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 24:
        return (Da(on), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Xy(t, n) {
    switch ((Cd(n), n.tag)) {
      case 3:
        (Da(on), Ce());
        break;
      case 26:
      case 27:
      case 5:
        je(n);
        break;
      case 4:
        Ce();
        break;
      case 31:
        n.memoizedState !== null && or(n);
        break;
      case 13:
        or(n);
        break;
      case 19:
        P(Wt);
        break;
      case 10:
        Da(n.type);
        break;
      case 22:
      case 23:
        (or(n), $d(), t !== null && P(Jo));
        break;
      case 24:
        Da(on);
    }
  }
  function rs(t, n) {
    try {
      var a = n.updateQueue,
        i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var h = i.next;
        a = h;
        do {
          if ((a.tag & t) === t) {
            i = void 0;
            var p = a.create,
              E = a.inst;
            ((i = p()), (E.destroy = i));
          }
          a = a.next;
        } while (a !== h);
      }
    } catch (A) {
      Dt(n, n.return, A);
    }
  }
  function po(t, n, a) {
    try {
      var i = n.updateQueue,
        h = i !== null ? i.lastEffect : null;
      if (h !== null) {
        var p = h.next;
        i = p;
        do {
          if ((i.tag & t) === t) {
            var E = i.inst,
              A = E.destroy;
            if (A !== void 0) {
              ((E.destroy = void 0), (h = n));
              var V = a,
                J = A;
              try {
                J();
              } catch (se) {
                Dt(h, V, se);
              }
            }
          }
          i = i.next;
        } while (i !== p);
      }
    } catch (se) {
      Dt(n, n.return, se);
    }
  }
  function Ky(t) {
    var n = t.updateQueue;
    if (n !== null) {
      var a = t.stateNode;
      try {
        Hv(n, a);
      } catch (i) {
        Dt(t, t.return, i);
      }
    }
  }
  function Qy(t, n, a) {
    ((a.props = al(t.type, t.memoizedProps)), (a.state = t.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (i) {
      Dt(t, n, i);
    }
  }
  function as(t, n) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = t.stateNode;
            break;
          case 30:
            i = t.stateNode;
            break;
          default:
            i = t.stateNode;
        }
        typeof a == "function" ? (t.refCleanup = a(i)) : (a.current = i);
      }
    } catch (h) {
      Dt(t, n, h);
    }
  }
  function ra(t, n) {
    var a = t.ref,
      i = t.refCleanup;
    if (a !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (h) {
          Dt(t, n, h);
        } finally {
          ((t.refCleanup = null), (t = t.alternate), t != null && (t.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (h) {
          Dt(t, n, h);
        }
      else a.current = null;
  }
  function Zy(t) {
    var n = t.type,
      a = t.memoizedProps,
      i = t.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && i.focus();
          break e;
        case "img":
          a.src ? (i.src = a.src) : a.srcSet && (i.srcset = a.srcSet);
      }
    } catch (h) {
      Dt(t, t.return, h);
    }
  }
  function gh(t, n, a) {
    try {
      var i = t.stateNode;
      (UR(i, t.type, a, n), (i[Ae] = n));
    } catch (h) {
      Dt(t, t.return, h);
    }
  }
  function Wy(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || (t.tag === 27 && xo(t.type)) || t.tag === 4
    );
  }
  function vh(t) {
    e: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Wy(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if ((t.tag === 27 && xo(t.type)) || t.flags & 2 || t.child === null || t.tag === 4)
          continue e;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function yh(t, n, a) {
    var i = t.tag;
    if (i === 5 || i === 6)
      ((t = t.stateNode),
        n
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(t, n)
          : ((n = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a),
            n.appendChild(t),
            (a = a._reactRootContainer),
            a != null || n.onclick !== null || (n.onclick = Ca)));
    else if (
      i !== 4 &&
      (i === 27 && xo(t.type) && ((a = t.stateNode), (n = null)), (t = t.child), t !== null)
    )
      for (yh(t, n, a), t = t.sibling; t !== null; ) (yh(t, n, a), (t = t.sibling));
  }
  function Jc(t, n, a) {
    var i = t.tag;
    if (i === 5 || i === 6) ((t = t.stateNode), n ? a.insertBefore(t, n) : a.appendChild(t));
    else if (i !== 4 && (i === 27 && xo(t.type) && (a = t.stateNode), (t = t.child), t !== null))
      for (Jc(t, n, a), t = t.sibling; t !== null; ) (Jc(t, n, a), (t = t.sibling));
  }
  function Jy(t) {
    var n = t.stateNode,
      a = t.memoizedProps;
    try {
      for (var i = t.type, h = n.attributes; h.length; ) n.removeAttributeNode(h[0]);
      (_n(n, i, a), (n[De] = t), (n[Ae] = a));
    } catch (p) {
      Dt(t, t.return, p);
    }
  }
  var ja = !1,
    cn = !1,
    bh = !1,
    eb = typeof WeakSet == "function" ? WeakSet : Set,
    Sn = null;
  function bR(t, n) {
    if (((t = t.containerInfo), (Uh = Su), (t = dv(t)), dd(t))) {
      if ("selectionStart" in t) var a = { start: t.selectionStart, end: t.selectionEnd };
      else
        e: {
          a = ((a = t.ownerDocument) && a.defaultView) || window;
          var i = a.getSelection && a.getSelection();
          if (i && i.rangeCount !== 0) {
            a = i.anchorNode;
            var h = i.anchorOffset,
              p = i.focusNode;
            i = i.focusOffset;
            try {
              (a.nodeType, p.nodeType);
            } catch {
              a = null;
              break e;
            }
            var E = 0,
              A = -1,
              V = -1,
              J = 0,
              se = 0,
              me = t,
              te = null;
            t: for (;;) {
              for (
                var le;
                me !== a || (h !== 0 && me.nodeType !== 3) || (A = E + h),
                  me !== p || (i !== 0 && me.nodeType !== 3) || (V = E + i),
                  me.nodeType === 3 && (E += me.nodeValue.length),
                  (le = me.firstChild) !== null;
              )
                ((te = me), (me = le));
              for (;;) {
                if (me === t) break t;
                if (
                  (te === a && ++J === h && (A = E),
                  te === p && ++se === i && (V = E),
                  (le = me.nextSibling) !== null)
                )
                  break;
                ((me = te), (te = me.parentNode));
              }
              me = le;
            }
            a = A === -1 || V === -1 ? null : { start: A, end: V };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Ph = { focusedElem: t, selectionRange: a }, Su = !1, Sn = n; Sn !== null; )
      if (((n = Sn), (t = n.child), (n.subtreeFlags & 1028) !== 0 && t !== null))
        ((t.return = n), (Sn = t));
      else
        for (; Sn !== null; ) {
          switch (((n = Sn), (p = n.alternate), (t = n.flags), n.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = n.updateQueue), (t = t !== null ? t.events : null), t !== null)
              )
                for (a = 0; a < t.length; a++) ((h = t[a]), (h.ref.impl = h.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && p !== null) {
                ((t = void 0),
                  (a = n),
                  (h = p.memoizedProps),
                  (p = p.memoizedState),
                  (i = a.stateNode));
                try {
                  var Le = al(a.type, h);
                  ((t = i.getSnapshotBeforeUpdate(Le, p)),
                    (i.__reactInternalSnapshotBeforeUpdate = t));
                } catch (Ge) {
                  Dt(a, a.return, Ge);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (((t = n.stateNode.containerInfo), (a = t.nodeType), a === 9)) Fh(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Fh(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(l(163));
          }
          if (((t = n.sibling), t !== null)) {
            ((t.return = n.return), (Sn = t));
            break;
          }
          Sn = n.return;
        }
  }
  function tb(t, n, a) {
    var i = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (ka(t, a), i & 4 && rs(5, a));
        break;
      case 1:
        if ((ka(t, a), i & 4))
          if (((t = a.stateNode), n === null))
            try {
              t.componentDidMount();
            } catch (E) {
              Dt(a, a.return, E);
            }
          else {
            var h = al(a.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              t.componentDidUpdate(h, n, t.__reactInternalSnapshotBeforeUpdate);
            } catch (E) {
              Dt(a, a.return, E);
            }
          }
        (i & 64 && Ky(a), i & 512 && as(a, a.return));
        break;
      case 3:
        if ((ka(t, a), i & 64 && ((t = a.updateQueue), t !== null))) {
          if (((n = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                n = a.child.stateNode;
                break;
              case 1:
                n = a.child.stateNode;
            }
          try {
            Hv(t, n);
          } catch (E) {
            Dt(a, a.return, E);
          }
        }
        break;
      case 27:
        n === null && i & 4 && Jy(a);
      case 26:
      case 5:
        (ka(t, a), n === null && i & 4 && Zy(a), i & 512 && as(a, a.return));
        break;
      case 12:
        ka(t, a);
        break;
      case 31:
        (ka(t, a), i & 4 && ab(t, a));
        break;
      case 13:
        (ka(t, a),
          i & 4 && ob(t, a),
          i & 64 &&
            ((t = a.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null && ((a = DR.bind(null, a)), XR(t, a)))));
        break;
      case 22:
        if (((i = a.memoizedState !== null || ja), !i)) {
          ((n = (n !== null && n.memoizedState !== null) || cn), (h = ja));
          var p = cn;
          ((ja = i),
            (cn = n) && !p ? La(t, a, (a.subtreeFlags & 8772) !== 0) : ka(t, a),
            (ja = h),
            (cn = p));
        }
        break;
      case 30:
        break;
      default:
        ka(t, a);
    }
  }
  function nb(t) {
    var n = t.alternate;
    (n !== null && ((t.alternate = null), nb(n)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((n = t.stateNode), n !== null && ut(n)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var It = null,
    qn = !1;
  function za(t, n, a) {
    for (a = a.child; a !== null; ) (rb(t, n, a), (a = a.sibling));
  }
  function rb(t, n, a) {
    if (Ht && typeof Ht.onCommitFiberUnmount == "function")
      try {
        Ht.onCommitFiberUnmount(Vt, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (cn || ra(a, n),
          za(t, n, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        cn || ra(a, n);
        var i = It,
          h = qn;
        (xo(a.type) && ((It = a.stateNode), (qn = !1)),
          za(t, n, a),
          hs(a.stateNode),
          (It = i),
          (qn = h));
        break;
      case 5:
        cn || ra(a, n);
      case 6:
        if (((i = It), (h = qn), (It = null), za(t, n, a), (It = i), (qn = h), It !== null))
          if (qn)
            try {
              (It.nodeType === 9
                ? It.body
                : It.nodeName === "HTML"
                  ? It.ownerDocument.body
                  : It
              ).removeChild(a.stateNode);
            } catch (p) {
              Dt(a, n, p);
            }
          else
            try {
              It.removeChild(a.stateNode);
            } catch (p) {
              Dt(a, n, p);
            }
        break;
      case 18:
        It !== null &&
          (qn
            ? ((t = It),
              Kb(
                t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
                a.stateNode,
              ),
              li(t))
            : Kb(It, a.stateNode));
        break;
      case 4:
        ((i = It),
          (h = qn),
          (It = a.stateNode.containerInfo),
          (qn = !0),
          za(t, n, a),
          (It = i),
          (qn = h));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (po(2, a, n), cn || po(4, a, n), za(t, n, a));
        break;
      case 1:
        (cn ||
          (ra(a, n), (i = a.stateNode), typeof i.componentWillUnmount == "function" && Qy(a, n, i)),
          za(t, n, a));
        break;
      case 21:
        za(t, n, a);
        break;
      case 22:
        ((cn = (i = cn) || a.memoizedState !== null), za(t, n, a), (cn = i));
        break;
      default:
        za(t, n, a);
    }
  }
  function ab(t, n) {
    if (
      n.memoizedState === null &&
      ((t = n.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        li(t);
      } catch (a) {
        Dt(n, n.return, a);
      }
    }
  }
  function ob(t, n) {
    if (
      n.memoizedState === null &&
      ((t = n.alternate),
      t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        li(t);
      } catch (a) {
        Dt(n, n.return, a);
      }
  }
  function SR(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var n = t.stateNode;
        return (n === null && (n = t.stateNode = new eb()), n);
      case 22:
        return (
          (t = t.stateNode),
          (n = t._retryCache),
          n === null && (n = t._retryCache = new eb()),
          n
        );
      default:
        throw Error(l(435, t.tag));
    }
  }
  function eu(t, n) {
    var a = SR(t);
    n.forEach(function (i) {
      if (!a.has(i)) {
        a.add(i);
        var h = AR.bind(null, t, i);
        i.then(h, h);
      }
    });
  }
  function Yn(t, n) {
    var a = n.deletions;
    if (a !== null)
      for (var i = 0; i < a.length; i++) {
        var h = a[i],
          p = t,
          E = n,
          A = E;
        e: for (; A !== null; ) {
          switch (A.tag) {
            case 27:
              if (xo(A.type)) {
                ((It = A.stateNode), (qn = !1));
                break e;
              }
              break;
            case 5:
              ((It = A.stateNode), (qn = !1));
              break e;
            case 3:
            case 4:
              ((It = A.stateNode.containerInfo), (qn = !0));
              break e;
          }
          A = A.return;
        }
        if (It === null) throw Error(l(160));
        (rb(p, E, h),
          (It = null),
          (qn = !1),
          (p = h.alternate),
          p !== null && (p.return = null),
          (h.return = null));
      }
    if (n.subtreeFlags & 13886) for (n = n.child; n !== null; ) (lb(n, t), (n = n.sibling));
  }
  var Pr = null;
  function lb(t, n) {
    var a = t.alternate,
      i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Yn(n, t), Gn(t), i & 4 && (po(3, t, t.return), rs(3, t), po(5, t, t.return)));
        break;
      case 1:
        (Yn(n, t),
          Gn(t),
          i & 512 && (cn || a === null || ra(a, a.return)),
          i & 64 &&
            ja &&
            ((t = t.updateQueue),
            t !== null &&
              ((i = t.callbacks),
              i !== null &&
                ((a = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = a === null ? i : a.concat(i))))));
        break;
      case 26:
        var h = Pr;
        if ((Yn(n, t), Gn(t), i & 512 && (cn || a === null || ra(a, a.return)), i & 4)) {
          var p = a !== null ? a.memoizedState : null;
          if (((i = t.memoizedState), a === null))
            if (i === null)
              if (t.stateNode === null) {
                e: {
                  ((i = t.type), (a = t.memoizedProps), (h = h.ownerDocument || h));
                  t: switch (i) {
                    case "title":
                      ((p = h.getElementsByTagName("title")[0]),
                        (!p ||
                          p[et] ||
                          p[De] ||
                          p.namespaceURI === "http://www.w3.org/2000/svg" ||
                          p.hasAttribute("itemprop")) &&
                          ((p = h.createElement(i)),
                          h.head.insertBefore(p, h.querySelector("head > title"))),
                        _n(p, i, a),
                        (p[De] = t),
                        ct(p),
                        (i = p));
                      break e;
                    case "link":
                      var E = l0("link", "href", h).get(i + (a.href || ""));
                      if (E) {
                        for (var A = 0; A < E.length; A++)
                          if (
                            ((p = E[A]),
                            p.getAttribute("href") ===
                              (a.href == null || a.href === "" ? null : a.href) &&
                              p.getAttribute("rel") === (a.rel == null ? null : a.rel) &&
                              p.getAttribute("title") === (a.title == null ? null : a.title) &&
                              p.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            E.splice(A, 1);
                            break t;
                          }
                      }
                      ((p = h.createElement(i)), _n(p, i, a), h.head.appendChild(p));
                      break;
                    case "meta":
                      if ((E = l0("meta", "content", h).get(i + (a.content || "")))) {
                        for (A = 0; A < E.length; A++)
                          if (
                            ((p = E[A]),
                            p.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              p.getAttribute("name") === (a.name == null ? null : a.name) &&
                              p.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              p.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              p.getAttribute("charset") === (a.charSet == null ? null : a.charSet))
                          ) {
                            E.splice(A, 1);
                            break t;
                          }
                      }
                      ((p = h.createElement(i)), _n(p, i, a), h.head.appendChild(p));
                      break;
                    default:
                      throw Error(l(468, i));
                  }
                  ((p[De] = t), ct(p), (i = p));
                }
                t.stateNode = i;
              } else i0(h, t.type, t.stateNode);
            else t.stateNode = o0(h, i, t.memoizedProps);
          else
            p !== i
              ? (p === null
                  ? a.stateNode !== null && ((a = a.stateNode), a.parentNode.removeChild(a))
                  : p.count--,
                i === null ? i0(h, t.type, t.stateNode) : o0(h, i, t.memoizedProps))
              : i === null && t.stateNode !== null && gh(t, t.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (Yn(n, t),
          Gn(t),
          i & 512 && (cn || a === null || ra(a, a.return)),
          a !== null && i & 4 && gh(t, t.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if ((Yn(n, t), Gn(t), i & 512 && (cn || a === null || ra(a, a.return)), t.flags & 32)) {
          h = t.stateNode;
          try {
            Al(h, "");
          } catch (Le) {
            Dt(t, t.return, Le);
          }
        }
        (i & 4 &&
          t.stateNode != null &&
          ((h = t.memoizedProps), gh(t, h, a !== null ? a.memoizedProps : h)),
          i & 1024 && (bh = !0));
        break;
      case 6:
        if ((Yn(n, t), Gn(t), i & 4)) {
          if (t.stateNode === null) throw Error(l(162));
          ((i = t.memoizedProps), (a = t.stateNode));
          try {
            a.nodeValue = i;
          } catch (Le) {
            Dt(t, t.return, Le);
          }
        }
        break;
      case 3:
        if (
          ((gu = null),
          (h = Pr),
          (Pr = mu(n.containerInfo)),
          Yn(n, t),
          (Pr = h),
          Gn(t),
          i & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            li(n.containerInfo);
          } catch (Le) {
            Dt(t, t.return, Le);
          }
        bh && ((bh = !1), ib(t));
        break;
      case 4:
        ((i = Pr), (Pr = mu(t.stateNode.containerInfo)), Yn(n, t), Gn(t), (Pr = i));
        break;
      case 12:
        (Yn(n, t), Gn(t));
        break;
      case 31:
        (Yn(n, t),
          Gn(t),
          i & 4 && ((i = t.updateQueue), i !== null && ((t.updateQueue = null), eu(t, i))));
        break;
      case 13:
        (Yn(n, t),
          Gn(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) != (a !== null && a.memoizedState !== null) &&
            (nu = ot()),
          i & 4 && ((i = t.updateQueue), i !== null && ((t.updateQueue = null), eu(t, i))));
        break;
      case 22:
        h = t.memoizedState !== null;
        var V = a !== null && a.memoizedState !== null,
          J = ja,
          se = cn;
        if (((ja = J || h), (cn = se || V), Yn(n, t), (cn = se), (ja = J), Gn(t), i & 8192))
          e: for (
            n = t.stateNode,
              n._visibility = h ? n._visibility & -2 : n._visibility | 1,
              h && (a === null || V || ja || cn || ol(t)),
              a = null,
              n = t;
            ;
          ) {
            if (n.tag === 5 || n.tag === 26) {
              if (a === null) {
                V = a = n;
                try {
                  if (((p = V.stateNode), h))
                    ((E = p.style),
                      typeof E.setProperty == "function"
                        ? E.setProperty("display", "none", "important")
                        : (E.display = "none"));
                  else {
                    A = V.stateNode;
                    var me = V.memoizedProps.style,
                      te = me != null && me.hasOwnProperty("display") ? me.display : null;
                    A.style.display = te == null || typeof te == "boolean" ? "" : ("" + te).trim();
                  }
                } catch (Le) {
                  Dt(V, V.return, Le);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                V = n;
                try {
                  V.stateNode.nodeValue = h ? "" : V.memoizedProps;
                } catch (Le) {
                  Dt(V, V.return, Le);
                }
              }
            } else if (n.tag === 18) {
              if (a === null) {
                V = n;
                try {
                  var le = V.stateNode;
                  h ? Qb(le, !0) : Qb(V.stateNode, !1);
                } catch (Le) {
                  Dt(V, V.return, Le);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) || n.memoizedState === null || n === t) &&
              n.child !== null
            ) {
              ((n.child.return = n), (n = n.child));
              continue;
            }
            if (n === t) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === t) break e;
              (a === n && (a = null), (n = n.return));
            }
            (a === n && (a = null), (n.sibling.return = n.return), (n = n.sibling));
          }
        i & 4 &&
          ((i = t.updateQueue),
          i !== null && ((a = i.retryQueue), a !== null && ((i.retryQueue = null), eu(t, a))));
        break;
      case 19:
        (Yn(n, t),
          Gn(t),
          i & 4 && ((i = t.updateQueue), i !== null && ((t.updateQueue = null), eu(t, i))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Yn(n, t), Gn(t));
    }
  }
  function Gn(t) {
    var n = t.flags;
    if (n & 2) {
      try {
        for (var a, i = t.return; i !== null; ) {
          if (Wy(i)) {
            a = i;
            break;
          }
          i = i.return;
        }
        if (a == null) throw Error(l(160));
        switch (a.tag) {
          case 27:
            var h = a.stateNode,
              p = vh(t);
            Jc(t, p, h);
            break;
          case 5:
            var E = a.stateNode;
            a.flags & 32 && (Al(E, ""), (a.flags &= -33));
            var A = vh(t);
            Jc(t, A, E);
            break;
          case 3:
          case 4:
            var V = a.stateNode.containerInfo,
              J = vh(t);
            yh(t, J, V);
            break;
          default:
            throw Error(l(161));
        }
      } catch (se) {
        Dt(t, t.return, se);
      }
      t.flags &= -3;
    }
    n & 4096 && (t.flags &= -4097);
  }
  function ib(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var n = t;
        (ib(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), (t = t.sibling));
      }
  }
  function ka(t, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) (tb(t, n.alternate, n), (n = n.sibling));
  }
  function ol(t) {
    for (t = t.child; t !== null; ) {
      var n = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (po(4, n, n.return), ol(n));
          break;
        case 1:
          ra(n, n.return);
          var a = n.stateNode;
          (typeof a.componentWillUnmount == "function" && Qy(n, n.return, a), ol(n));
          break;
        case 27:
          hs(n.stateNode);
        case 26:
        case 5:
          (ra(n, n.return), ol(n));
          break;
        case 22:
          n.memoizedState === null && ol(n);
          break;
        case 30:
          ol(n);
          break;
        default:
          ol(n);
      }
      t = t.sibling;
    }
  }
  function La(t, n, a) {
    for (a = a && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var i = n.alternate,
        h = t,
        p = n,
        E = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          (La(h, p, a), rs(4, p));
          break;
        case 1:
          if ((La(h, p, a), (i = p), (h = i.stateNode), typeof h.componentDidMount == "function"))
            try {
              h.componentDidMount();
            } catch (J) {
              Dt(i, i.return, J);
            }
          if (((i = p), (h = i.updateQueue), h !== null)) {
            var A = i.stateNode;
            try {
              var V = h.shared.hiddenCallbacks;
              if (V !== null)
                for (h.shared.hiddenCallbacks = null, h = 0; h < V.length; h++) $v(V[h], A);
            } catch (J) {
              Dt(i, i.return, J);
            }
          }
          (a && E & 64 && Ky(p), as(p, p.return));
          break;
        case 27:
          Jy(p);
        case 26:
        case 5:
          (La(h, p, a), a && i === null && E & 4 && Zy(p), as(p, p.return));
          break;
        case 12:
          La(h, p, a);
          break;
        case 31:
          (La(h, p, a), a && E & 4 && ab(h, p));
          break;
        case 13:
          (La(h, p, a), a && E & 4 && ob(h, p));
          break;
        case 22:
          (p.memoizedState === null && La(h, p, a), as(p, p.return));
          break;
        case 30:
          break;
        default:
          La(h, p, a);
      }
      n = n.sibling;
    }
  }
  function Sh(t, n) {
    var a = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (a = t.memoizedState.cachePool.pool),
      (t = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (t = n.memoizedState.cachePool.pool),
      t !== a && (t != null && t.refCount++, a != null && Fi(a)));
  }
  function wh(t, n) {
    ((t = null),
      n.alternate !== null && (t = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== t && (n.refCount++, t != null && Fi(t)));
  }
  function Vr(t, n, a, i) {
    if (n.subtreeFlags & 10256) for (n = n.child; n !== null; ) (sb(t, n, a, i), (n = n.sibling));
  }
  function sb(t, n, a, i) {
    var h = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Vr(t, n, a, i), h & 2048 && rs(9, n));
        break;
      case 1:
        Vr(t, n, a, i);
        break;
      case 3:
        (Vr(t, n, a, i),
          h & 2048 &&
            ((t = null),
            n.alternate !== null && (t = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== t && (n.refCount++, t != null && Fi(t))));
        break;
      case 12:
        if (h & 2048) {
          (Vr(t, n, a, i), (t = n.stateNode));
          try {
            var p = n.memoizedProps,
              E = p.id,
              A = p.onPostCommit;
            typeof A == "function" &&
              A(E, n.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (V) {
            Dt(n, n.return, V);
          }
        } else Vr(t, n, a, i);
        break;
      case 31:
        Vr(t, n, a, i);
        break;
      case 13:
        Vr(t, n, a, i);
        break;
      case 23:
        break;
      case 22:
        ((p = n.stateNode),
          (E = n.alternate),
          n.memoizedState !== null
            ? p._visibility & 2
              ? Vr(t, n, a, i)
              : os(t, n)
            : p._visibility & 2
              ? Vr(t, n, a, i)
              : ((p._visibility |= 2), Kl(t, n, a, i, (n.subtreeFlags & 10256) !== 0 || !1)),
          h & 2048 && Sh(E, n));
        break;
      case 24:
        (Vr(t, n, a, i), h & 2048 && wh(n.alternate, n));
        break;
      default:
        Vr(t, n, a, i);
    }
  }
  function Kl(t, n, a, i, h) {
    for (h = h && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var p = t,
        E = n,
        A = a,
        V = i,
        J = E.flags;
      switch (E.tag) {
        case 0:
        case 11:
        case 15:
          (Kl(p, E, A, V, h), rs(8, E));
          break;
        case 23:
          break;
        case 22:
          var se = E.stateNode;
          (E.memoizedState !== null
            ? se._visibility & 2
              ? Kl(p, E, A, V, h)
              : os(p, E)
            : ((se._visibility |= 2), Kl(p, E, A, V, h)),
            h && J & 2048 && Sh(E.alternate, E));
          break;
        case 24:
          (Kl(p, E, A, V, h), h && J & 2048 && wh(E.alternate, E));
          break;
        default:
          Kl(p, E, A, V, h);
      }
      n = n.sibling;
    }
  }
  function os(t, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var a = t,
          i = n,
          h = i.flags;
        switch (i.tag) {
          case 22:
            (os(a, i), h & 2048 && Sh(i.alternate, i));
            break;
          case 24:
            (os(a, i), h & 2048 && wh(i.alternate, i));
            break;
          default:
            os(a, i);
        }
        n = n.sibling;
      }
  }
  var ls = 8192;
  function Ql(t, n, a) {
    if (t.subtreeFlags & ls) for (t = t.child; t !== null; ) (cb(t, n, a), (t = t.sibling));
  }
  function cb(t, n, a) {
    switch (t.tag) {
      case 26:
        (Ql(t, n, a),
          t.flags & ls && t.memoizedState !== null && l2(a, Pr, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Ql(t, n, a);
        break;
      case 3:
      case 4:
        var i = Pr;
        ((Pr = mu(t.stateNode.containerInfo)), Ql(t, n, a), (Pr = i));
        break;
      case 22:
        t.memoizedState === null &&
          ((i = t.alternate),
          i !== null && i.memoizedState !== null
            ? ((i = ls), (ls = 16777216), Ql(t, n, a), (ls = i))
            : Ql(t, n, a));
        break;
      default:
        Ql(t, n, a);
    }
  }
  function ub(t) {
    var n = t.alternate;
    if (n !== null && ((t = n.child), t !== null)) {
      n.child = null;
      do ((n = t.sibling), (t.sibling = null), (t = n));
      while (t !== null);
    }
  }
  function is(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var i = n[a];
          ((Sn = i), db(i, t));
        }
      ub(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (fb(t), (t = t.sibling));
  }
  function fb(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (is(t), t.flags & 2048 && po(9, t, t.return));
        break;
      case 3:
        is(t);
        break;
      case 12:
        is(t);
        break;
      case 22:
        var n = t.stateNode;
        t.memoizedState !== null && n._visibility & 2 && (t.return === null || t.return.tag !== 13)
          ? ((n._visibility &= -3), tu(t))
          : is(t);
        break;
      default:
        is(t);
    }
  }
  function tu(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var i = n[a];
          ((Sn = i), db(i, t));
        }
      ub(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((n = t), n.tag)) {
        case 0:
        case 11:
        case 15:
          (po(8, n, n.return), tu(n));
          break;
        case 22:
          ((a = n.stateNode), a._visibility & 2 && ((a._visibility &= -3), tu(n)));
          break;
        default:
          tu(n);
      }
      t = t.sibling;
    }
  }
  function db(t, n) {
    for (; Sn !== null; ) {
      var a = Sn;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          po(8, a, n);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var i = a.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Fi(a.memoizedState.cache);
      }
      if (((i = a.child), i !== null)) ((i.return = a), (Sn = i));
      else
        e: for (a = t; Sn !== null; ) {
          i = Sn;
          var h = i.sibling,
            p = i.return;
          if ((nb(i), i === a)) {
            Sn = null;
            break e;
          }
          if (h !== null) {
            ((h.return = p), (Sn = h));
            break e;
          }
          Sn = p;
        }
    }
  }
  var wR = {
      getCacheForType: function (t) {
        var n = Rn(on),
          a = n.data.get(t);
        return (a === void 0 && ((a = t()), n.data.set(t, a)), a);
      },
      cacheSignal: function () {
        return Rn(on).controller.signal;
      },
    },
    xR = typeof WeakMap == "function" ? WeakMap : Map,
    Rt = 0,
    Lt = null,
    ft = null,
    mt = 0,
    _t = 0,
    lr = null,
    go = !1,
    Zl = !1,
    xh = !1,
    Ba = 0,
    Qt = 0,
    vo = 0,
    ll = 0,
    Ch = 0,
    ir = 0,
    Wl = 0,
    ss = null,
    Xn = null,
    Eh = !1,
    nu = 0,
    hb = 0,
    ru = 1 / 0,
    au = null,
    yo = null,
    dn = 0,
    bo = null,
    Jl = null,
    $a = 0,
    Rh = 0,
    Th = null,
    mb = null,
    cs = 0,
    _h = null;
  function sr() {
    return (Rt & 2) !== 0 && mt !== 0 ? mt & -mt : N.T !== null ? jh() : ce();
  }
  function pb() {
    if (ir === 0)
      if ((mt & 536870912) === 0 || vt) {
        var t = gn;
        ((gn <<= 1), (gn & 3932160) === 0 && (gn = 262144), (ir = t));
      } else ir = 536870912;
    return ((t = ar.current), t !== null && (t.flags |= 32), ir);
  }
  function Kn(t, n, a) {
    (((t === Lt && (_t === 2 || _t === 9)) || t.cancelPendingCommit !== null) &&
      (ei(t, 0), So(t, mt, ir, !1)),
      an(t, a),
      ((Rt & 2) === 0 || t !== Lt) &&
        (t === Lt && ((Rt & 2) === 0 && (ll |= a), Qt === 4 && So(t, mt, ir, !1)), aa(t)));
  }
  function gb(t, n, a) {
    if ((Rt & 6) !== 0) throw Error(l(327));
    var i = (!a && (n & 127) === 0 && (n & t.expiredLanes) === 0) || xn(t, n),
      h = i ? RR(t, n) : Ah(t, n, !0),
      p = i;
    do {
      if (h === 0) {
        Zl && !i && So(t, n, 0, !1);
        break;
      } else {
        if (((a = t.current.alternate), p && !CR(a))) {
          ((h = Ah(t, n, !1)), (p = !1));
          continue;
        }
        if (h === 2) {
          if (((p = n), t.errorRecoveryDisabledLanes & p)) var E = 0;
          else
            ((E = t.pendingLanes & -536870913), (E = E !== 0 ? E : E & 536870912 ? 536870912 : 0));
          if (E !== 0) {
            n = E;
            e: {
              var A = t;
              h = ss;
              var V = A.current.memoizedState.isDehydrated;
              if ((V && (ei(A, E).flags |= 256), (E = Ah(A, E, !1)), E !== 2)) {
                if (xh && !V) {
                  ((A.errorRecoveryDisabledLanes |= p), (ll |= p), (h = 4));
                  break e;
                }
                ((p = Xn), (Xn = h), p !== null && (Xn === null ? (Xn = p) : Xn.push.apply(Xn, p)));
              }
              h = E;
            }
            if (((p = !1), h !== 2)) continue;
          }
        }
        if (h === 1) {
          (ei(t, 0), So(t, n, 0, !0));
          break;
        }
        e: {
          switch (((i = t), (p = h), p)) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              So(i, n, ir, !go);
              break e;
            case 2:
              Xn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if ((n & 62914560) === n && ((h = nu + 300 - ot()), 10 < h)) {
            if ((So(i, n, ir, !go), Bn(i, 0, !0) !== 0)) break e;
            (($a = n),
              (i.timeoutHandle = Gb(
                vb.bind(null, i, a, Xn, au, Eh, n, ir, ll, Wl, go, p, "Throttled", -0, 0),
                h,
              )));
            break e;
          }
          vb(i, a, Xn, au, Eh, n, ir, ll, Wl, go, p, null, -0, 0);
        }
      }
      break;
    } while (!0);
    aa(t);
  }
  function vb(t, n, a, i, h, p, E, A, V, J, se, me, te, le) {
    if (
      ((t.timeoutHandle = -1), (me = n.subtreeFlags), me & 8192 || (me & 16785408) === 16785408)
    ) {
      ((me = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ca,
      }),
        cb(n, p, me));
      var Le = (p & 62914560) === p ? nu - ot() : (p & 4194048) === p ? hb - ot() : 0;
      if (((Le = i2(me, Le)), Le !== null)) {
        (($a = p),
          (t.cancelPendingCommit = Le(
            Rb.bind(null, t, n, p, a, i, h, E, A, V, se, me, null, te, le),
          )),
          So(t, p, E, !J));
        return;
      }
    }
    Rb(t, n, p, a, i, h, E, A, V);
  }
  function CR(t) {
    for (var n = t; ; ) {
      var a = n.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        n.flags & 16384 &&
        ((a = n.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var i = 0; i < a.length; i++) {
          var h = a[i],
            p = h.getSnapshot;
          h = h.value;
          try {
            if (!nr(p(), h)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = n.child), n.subtreeFlags & 16384 && a !== null)) ((a.return = n), (n = a));
      else {
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return !0;
          n = n.return;
        }
        ((n.sibling.return = n.return), (n = n.sibling));
      }
    }
    return !0;
  }
  function So(t, n, a, i) {
    ((n &= ~Ch),
      (n &= ~ll),
      (t.suspendedLanes |= n),
      (t.pingedLanes &= ~n),
      i && (t.warmLanes |= n),
      (i = t.expirationTimes));
    for (var h = n; 0 < h; ) {
      var p = 31 - Ft(h),
        E = 1 << p;
      ((i[p] = -1), (h &= ~E));
    }
    a !== 0 && kt(t, a, n);
  }
  function ou() {
    return (Rt & 6) === 0 ? (us(0), !1) : !0;
  }
  function Dh() {
    if (ft !== null) {
      if (_t === 0) var t = ft.return;
      else ((t = ft), (_a = Zo = null), Fd(t), (Fl = null), (Yi = 0), (t = ft));
      for (; t !== null; ) (Xy(t.alternate, t), (t = t.return));
      ft = null;
    }
  }
  function ei(t, n) {
    var a = t.timeoutHandle;
    (a !== -1 && ((t.timeoutHandle = -1), IR(a)),
      (a = t.cancelPendingCommit),
      a !== null && ((t.cancelPendingCommit = null), a()),
      ($a = 0),
      Dh(),
      (Lt = t),
      (ft = a = Ra(t.current, null)),
      (mt = n),
      (_t = 0),
      (lr = null),
      (go = !1),
      (Zl = xn(t, n)),
      (xh = !1),
      (Wl = ir = Ch = ll = vo = Qt = 0),
      (Xn = ss = null),
      (Eh = !1),
      (n & 8) !== 0 && (n |= n & 32));
    var i = t.entangledLanes;
    if (i !== 0)
      for (t = t.entanglements, i &= n; 0 < i; ) {
        var h = 31 - Ft(i),
          p = 1 << h;
        ((n |= t[h]), (i &= ~p));
      }
    return ((Ba = n), Tc(), a);
  }
  function yb(t, n) {
    ((tt = null),
      (N.H = es),
      n === Il || n === zc
        ? ((n = zv()), (_t = 3))
        : n === Od
          ? ((n = zv()), (_t = 4))
          : (_t =
              n === lh
                ? 8
                : n !== null && typeof n == "object" && typeof n.then == "function"
                  ? 6
                  : 1),
      (lr = n),
      ft === null && ((Qt = 1), Xc(t, hr(n, t.current))));
  }
  function bb() {
    var t = ar.current;
    return t === null
      ? !0
      : (mt & 4194048) === mt
        ? vr === null
        : (mt & 62914560) === mt || (mt & 536870912) !== 0
          ? t === vr
          : !1;
  }
  function Sb() {
    var t = N.H;
    return ((N.H = es), t === null ? es : t);
  }
  function wb() {
    var t = N.A;
    return ((N.A = wR), t);
  }
  function lu() {
    ((Qt = 4),
      go || ((mt & 4194048) !== mt && ar.current !== null) || (Zl = !0),
      ((vo & 134217727) === 0 && (ll & 134217727) === 0) || Lt === null || So(Lt, mt, ir, !1));
  }
  function Ah(t, n, a) {
    var i = Rt;
    Rt |= 2;
    var h = Sb(),
      p = wb();
    ((Lt !== t || mt !== n) && ((au = null), ei(t, n)), (n = !1));
    var E = Qt;
    e: do
      try {
        if (_t !== 0 && ft !== null) {
          var A = ft,
            V = lr;
          switch (_t) {
            case 8:
              (Dh(), (E = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ar.current === null && (n = !0);
              var J = _t;
              if (((_t = 0), (lr = null), ti(t, A, V, J), a && Zl)) {
                E = 0;
                break e;
              }
              break;
            default:
              ((J = _t), (_t = 0), (lr = null), ti(t, A, V, J));
          }
        }
        (ER(), (E = Qt));
        break;
      } catch (se) {
        yb(t, se);
      }
    while (!0);
    return (
      n && t.shellSuspendCounter++,
      (_a = Zo = null),
      (Rt = i),
      (N.H = h),
      (N.A = p),
      ft === null && ((Lt = null), (mt = 0), Tc()),
      E
    );
  }
  function ER() {
    for (; ft !== null; ) xb(ft);
  }
  function RR(t, n) {
    var a = Rt;
    Rt |= 2;
    var i = Sb(),
      h = wb();
    Lt !== t || mt !== n ? ((au = null), (ru = ot() + 500), ei(t, n)) : (Zl = xn(t, n));
    e: do
      try {
        if (_t !== 0 && ft !== null) {
          n = ft;
          var p = lr;
          t: switch (_t) {
            case 1:
              ((_t = 0), (lr = null), ti(t, n, p, 1));
              break;
            case 2:
            case 9:
              if (Ov(p)) {
                ((_t = 0), (lr = null), Cb(n));
                break;
              }
              ((n = function () {
                ((_t !== 2 && _t !== 9) || Lt !== t || (_t = 7), aa(t));
              }),
                p.then(n, n));
              break e;
            case 3:
              _t = 7;
              break e;
            case 4:
              _t = 5;
              break e;
            case 7:
              Ov(p) ? ((_t = 0), (lr = null), Cb(n)) : ((_t = 0), (lr = null), ti(t, n, p, 7));
              break;
            case 5:
              var E = null;
              switch (ft.tag) {
                case 26:
                  E = ft.memoizedState;
                case 5:
                case 27:
                  var A = ft;
                  if (E ? s0(E) : A.stateNode.complete) {
                    ((_t = 0), (lr = null));
                    var V = A.sibling;
                    if (V !== null) ft = V;
                    else {
                      var J = A.return;
                      J !== null ? ((ft = J), iu(J)) : (ft = null);
                    }
                    break t;
                  }
              }
              ((_t = 0), (lr = null), ti(t, n, p, 5));
              break;
            case 6:
              ((_t = 0), (lr = null), ti(t, n, p, 6));
              break;
            case 8:
              (Dh(), (Qt = 6));
              break e;
            default:
              throw Error(l(462));
          }
        }
        TR();
        break;
      } catch (se) {
        yb(t, se);
      }
    while (!0);
    return (
      (_a = Zo = null),
      (N.H = i),
      (N.A = h),
      (Rt = a),
      ft !== null ? 0 : ((Lt = null), (mt = 0), Tc(), Qt)
    );
  }
  function TR() {
    for (; ft !== null && !Ve(); ) xb(ft);
  }
  function xb(t) {
    var n = Yy(t.alternate, t, Ba);
    ((t.memoizedProps = t.pendingProps), n === null ? iu(t) : (ft = n));
  }
  function Cb(t) {
    var n = t,
      a = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Uy(a, n, n.pendingProps, n.type, void 0, mt);
        break;
      case 11:
        n = Uy(a, n, n.pendingProps, n.type.render, n.ref, mt);
        break;
      case 5:
        Fd(n);
      default:
        (Xy(a, n), (n = ft = wv(n, Ba)), (n = Yy(a, n, Ba)));
    }
    ((t.memoizedProps = t.pendingProps), n === null ? iu(t) : (ft = n));
  }
  function ti(t, n, a, i) {
    ((_a = Zo = null), Fd(n), (Fl = null), (Yi = 0));
    var h = n.return;
    try {
      if (mR(t, h, n, a, mt)) {
        ((Qt = 1), Xc(t, hr(a, t.current)), (ft = null));
        return;
      }
    } catch (p) {
      if (h !== null) throw ((ft = h), p);
      ((Qt = 1), Xc(t, hr(a, t.current)), (ft = null));
      return;
    }
    n.flags & 32768
      ? (vt || i === 1
          ? (t = !0)
          : Zl || (mt & 536870912) !== 0
            ? (t = !1)
            : ((go = t = !0),
              (i === 2 || i === 9 || i === 3 || i === 6) &&
                ((i = ar.current), i !== null && i.tag === 13 && (i.flags |= 16384))),
        Eb(n, t))
      : iu(n);
  }
  function iu(t) {
    var n = t;
    do {
      if ((n.flags & 32768) !== 0) {
        Eb(n, go);
        return;
      }
      t = n.return;
      var a = vR(n.alternate, n, Ba);
      if (a !== null) {
        ft = a;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        ft = n;
        return;
      }
      ft = n = t;
    } while (n !== null);
    Qt === 0 && (Qt = 5);
  }
  function Eb(t, n) {
    do {
      var a = yR(t.alternate, t);
      if (a !== null) {
        ((a.flags &= 32767), (ft = a));
        return;
      }
      if (
        ((a = t.return),
        a !== null && ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !n && ((t = t.sibling), t !== null))
      ) {
        ft = t;
        return;
      }
      ft = t = a;
    } while (t !== null);
    ((Qt = 6), (ft = null));
  }
  function Rb(t, n, a, i, h, p, E, A, V) {
    t.cancelPendingCommit = null;
    do su();
    while (dn !== 0);
    if ((Rt & 6) !== 0) throw Error(l(327));
    if (n !== null) {
      if (n === t.current) throw Error(l(177));
      if (
        ((p = n.lanes | n.childLanes),
        (p |= vd),
        yt(t, a, p, E, A, V),
        t === Lt && ((ft = Lt = null), (mt = 0)),
        (Jl = n),
        (bo = t),
        ($a = a),
        (Rh = p),
        (Th = h),
        (mb = i),
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            MR(pn, function () {
              return (Mb(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (i = (n.flags & 13878) !== 0),
        (n.subtreeFlags & 13878) !== 0 || i)
      ) {
        ((i = N.T), (N.T = null), (h = k.p), (k.p = 2), (E = Rt), (Rt |= 4));
        try {
          bR(t, n, a);
        } finally {
          ((Rt = E), (k.p = h), (N.T = i));
        }
      }
      ((dn = 1), Tb(), _b(), Db());
    }
  }
  function Tb() {
    if (dn === 1) {
      dn = 0;
      var t = bo,
        n = Jl,
        a = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || a) {
        ((a = N.T), (N.T = null));
        var i = k.p;
        k.p = 2;
        var h = Rt;
        Rt |= 4;
        try {
          lb(n, t);
          var p = Ph,
            E = dv(t.containerInfo),
            A = p.focusedElem,
            V = p.selectionRange;
          if (E !== A && A && A.ownerDocument && fv(A.ownerDocument.documentElement, A)) {
            if (V !== null && dd(A)) {
              var J = V.start,
                se = V.end;
              if ((se === void 0 && (se = J), "selectionStart" in A))
                ((A.selectionStart = J), (A.selectionEnd = Math.min(se, A.value.length)));
              else {
                var me = A.ownerDocument || document,
                  te = (me && me.defaultView) || window;
                if (te.getSelection) {
                  var le = te.getSelection(),
                    Le = A.textContent.length,
                    Ge = Math.min(V.start, Le),
                    jt = V.end === void 0 ? Ge : Math.min(V.end, Le);
                  !le.extend && Ge > jt && ((E = jt), (jt = Ge), (Ge = E));
                  var X = uv(A, Ge),
                    q = uv(A, jt);
                  if (
                    X &&
                    q &&
                    (le.rangeCount !== 1 ||
                      le.anchorNode !== X.node ||
                      le.anchorOffset !== X.offset ||
                      le.focusNode !== q.node ||
                      le.focusOffset !== q.offset)
                  ) {
                    var W = me.createRange();
                    (W.setStart(X.node, X.offset),
                      le.removeAllRanges(),
                      Ge > jt
                        ? (le.addRange(W), le.extend(q.node, q.offset))
                        : (W.setEnd(q.node, q.offset), le.addRange(W)));
                  }
                }
              }
            }
            for (me = [], le = A; (le = le.parentNode); )
              le.nodeType === 1 && me.push({ element: le, left: le.scrollLeft, top: le.scrollTop });
            for (typeof A.focus == "function" && A.focus(), A = 0; A < me.length; A++) {
              var fe = me[A];
              ((fe.element.scrollLeft = fe.left), (fe.element.scrollTop = fe.top));
            }
          }
          ((Su = !!Uh), (Ph = Uh = null));
        } finally {
          ((Rt = h), (k.p = i), (N.T = a));
        }
      }
      ((t.current = n), (dn = 2));
    }
  }
  function _b() {
    if (dn === 2) {
      dn = 0;
      var t = bo,
        n = Jl,
        a = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || a) {
        ((a = N.T), (N.T = null));
        var i = k.p;
        k.p = 2;
        var h = Rt;
        Rt |= 4;
        try {
          tb(t, n.alternate, n);
        } finally {
          ((Rt = h), (k.p = i), (N.T = a));
        }
      }
      dn = 3;
    }
  }
  function Db() {
    if (dn === 4 || dn === 3) {
      ((dn = 0), Xe());
      var t = bo,
        n = Jl,
        a = $a,
        i = mb;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
        ? (dn = 5)
        : ((dn = 0), (Jl = bo = null), Ab(t, t.pendingLanes));
      var h = t.pendingLanes;
      if (
        (h === 0 && (yo = null),
        G(a),
        (n = n.stateNode),
        Ht && typeof Ht.onCommitFiberRoot == "function")
      )
        try {
          Ht.onCommitFiberRoot(Vt, n, void 0, (n.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        ((n = N.T), (h = k.p), (k.p = 2), (N.T = null));
        try {
          for (var p = t.onRecoverableError, E = 0; E < i.length; E++) {
            var A = i[E];
            p(A.value, { componentStack: A.stack });
          }
        } finally {
          ((N.T = n), (k.p = h));
        }
      }
      (($a & 3) !== 0 && su(),
        aa(t),
        (h = t.pendingLanes),
        (a & 261930) !== 0 && (h & 42) !== 0 ? (t === _h ? cs++ : ((cs = 0), (_h = t))) : (cs = 0),
        us(0));
    }
  }
  function Ab(t, n) {
    (t.pooledCacheLanes &= n) === 0 &&
      ((n = t.pooledCache), n != null && ((t.pooledCache = null), Fi(n)));
  }
  function su() {
    return (Tb(), _b(), Db(), Mb());
  }
  function Mb() {
    if (dn !== 5) return !1;
    var t = bo,
      n = Rh;
    Rh = 0;
    var a = G($a),
      i = N.T,
      h = k.p;
    try {
      ((k.p = 32 > a ? 32 : a), (N.T = null), (a = Th), (Th = null));
      var p = bo,
        E = $a;
      if (((dn = 0), (Jl = bo = null), ($a = 0), (Rt & 6) !== 0)) throw Error(l(331));
      var A = Rt;
      if (
        ((Rt |= 4),
        fb(p.current),
        sb(p, p.current, E, a),
        (Rt = A),
        us(0, !1),
        Ht && typeof Ht.onPostCommitFiberRoot == "function")
      )
        try {
          Ht.onPostCommitFiberRoot(Vt, p);
        } catch {}
      return !0;
    } finally {
      ((k.p = h), (N.T = i), Ab(t, n));
    }
  }
  function Nb(t, n, a) {
    ((n = hr(a, n)),
      (n = oh(t.stateNode, n, 2)),
      (t = fo(t, n, 2)),
      t !== null && (an(t, 2), aa(t)));
  }
  function Dt(t, n, a) {
    if (t.tag === 3) Nb(t, t, a);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Nb(n, t, a);
          break;
        } else if (n.tag === 1) {
          var i = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" && (yo === null || !yo.has(i)))
          ) {
            ((t = hr(a, t)),
              (a = Oy(2)),
              (i = fo(n, a, 2)),
              i !== null && (jy(a, i, n, t), an(i, 2), aa(i)));
            break;
          }
        }
        n = n.return;
      }
  }
  function Mh(t, n, a) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new xR();
      var h = new Set();
      i.set(n, h);
    } else ((h = i.get(n)), h === void 0 && ((h = new Set()), i.set(n, h)));
    h.has(a) || ((xh = !0), h.add(a), (t = _R.bind(null, t, n, a)), n.then(t, t));
  }
  function _R(t, n, a) {
    var i = t.pingCache;
    (i !== null && i.delete(n),
      (t.pingedLanes |= t.suspendedLanes & a),
      (t.warmLanes &= ~a),
      Lt === t &&
        (mt & a) === a &&
        (Qt === 4 || (Qt === 3 && (mt & 62914560) === mt && 300 > ot() - nu)
          ? (Rt & 2) === 0 && ei(t, 0)
          : (Ch |= a),
        Wl === mt && (Wl = 0)),
      aa(t));
  }
  function Ob(t, n) {
    (n === 0 && (n = $e()), (t = Xo(t, n)), t !== null && (an(t, n), aa(t)));
  }
  function DR(t) {
    var n = t.memoizedState,
      a = 0;
    (n !== null && (a = n.retryLane), Ob(t, a));
  }
  function AR(t, n) {
    var a = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var i = t.stateNode,
          h = t.memoizedState;
        h !== null && (a = h.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(l(314));
    }
    (i !== null && i.delete(n), Ob(t, a));
  }
  function MR(t, n) {
    return xe(t, n);
  }
  var cu = null,
    ni = null,
    Nh = !1,
    uu = !1,
    Oh = !1,
    wo = 0;
  function aa(t) {
    (t !== ni && t.next === null && (ni === null ? (cu = ni = t) : (ni = ni.next = t)),
      (uu = !0),
      Nh || ((Nh = !0), OR()));
  }
  function us(t, n) {
    if (!Oh && uu) {
      Oh = !0;
      do
        for (var a = !1, i = cu; i !== null; ) {
          if (t !== 0) {
            var h = i.pendingLanes;
            if (h === 0) var p = 0;
            else {
              var E = i.suspendedLanes,
                A = i.pingedLanes;
              ((p = (1 << (31 - Ft(42 | t) + 1)) - 1),
                (p &= h & ~(E & ~A)),
                (p = p & 201326741 ? (p & 201326741) | 1 : p ? p | 2 : 0));
            }
            p !== 0 && ((a = !0), Lb(i, p));
          } else
            ((p = mt),
              (p = Bn(
                i,
                i === Lt ? p : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1,
              )),
              (p & 3) === 0 || xn(i, p) || ((a = !0), Lb(i, p)));
          i = i.next;
        }
      while (a);
      Oh = !1;
    }
  }
  function NR() {
    jb();
  }
  function jb() {
    uu = Nh = !1;
    var t = 0;
    wo !== 0 && VR() && (t = wo);
    for (var n = ot(), a = null, i = cu; i !== null; ) {
      var h = i.next,
        p = zb(i, n);
      (p === 0
        ? ((i.next = null), a === null ? (cu = h) : (a.next = h), h === null && (ni = a))
        : ((a = i), (t !== 0 || (p & 3) !== 0) && (uu = !0)),
        (i = h));
    }
    ((dn !== 0 && dn !== 5) || us(t), wo !== 0 && (wo = 0));
  }
  function zb(t, n) {
    for (
      var a = t.suspendedLanes,
        i = t.pingedLanes,
        h = t.expirationTimes,
        p = t.pendingLanes & -62914561;
      0 < p;
    ) {
      var E = 31 - Ft(p),
        A = 1 << E,
        V = h[E];
      (V === -1
        ? ((A & a) === 0 || (A & i) !== 0) && (h[E] = Re(A, n))
        : V <= n && (t.expiredLanes |= A),
        (p &= ~A));
    }
    if (
      ((n = Lt),
      (a = mt),
      (a = Bn(t, t === n ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      (i = t.callbackNode),
      a === 0 || (t === n && (_t === 2 || _t === 9)) || t.cancelPendingCommit !== null)
    )
      return (i !== null && i !== null && Be(i), (t.callbackNode = null), (t.callbackPriority = 0));
    if ((a & 3) === 0 || xn(t, a)) {
      if (((n = a & -a), n === t.callbackPriority)) return n;
      switch ((i !== null && Be(i), G(a))) {
        case 2:
        case 8:
          a = Yt;
          break;
        case 32:
          a = pn;
          break;
        case 268435456:
          a = zt;
          break;
        default:
          a = pn;
      }
      return (
        (i = kb.bind(null, t)),
        (a = xe(a, i)),
        (t.callbackPriority = n),
        (t.callbackNode = a),
        n
      );
    }
    return (
      i !== null && i !== null && Be(i),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function kb(t, n) {
    if (dn !== 0 && dn !== 5) return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var a = t.callbackNode;
    if (su() && t.callbackNode !== a) return null;
    var i = mt;
    return (
      (i = Bn(t, t === Lt ? i : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      i === 0
        ? null
        : (gb(t, i, n),
          zb(t, ot()),
          t.callbackNode != null && t.callbackNode === a ? kb.bind(null, t) : null)
    );
  }
  function Lb(t, n) {
    if (su()) return null;
    gb(t, n, !0);
  }
  function OR() {
    FR(function () {
      (Rt & 6) !== 0 ? xe(Ie, NR) : jb();
    });
  }
  function jh() {
    if (wo === 0) {
      var t = Pl;
      (t === 0 && ((t = Mn), (Mn <<= 1), (Mn & 261888) === 0 && (Mn = 256)), (wo = t));
    }
    return wo;
  }
  function Bb(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : yc("" + t);
  }
  function $b(t, n) {
    var a = n.ownerDocument.createElement("input");
    return (
      (a.name = n.name),
      (a.value = n.value),
      t.id && a.setAttribute("form", t.id),
      n.parentNode.insertBefore(a, n),
      (t = new FormData(t)),
      a.parentNode.removeChild(a),
      t
    );
  }
  function jR(t, n, a, i, h) {
    if (n === "submit" && a && a.stateNode === h) {
      var p = Bb((h[Ae] || null).action),
        E = i.submitter;
      E &&
        ((n = (n = E[Ae] || null) ? Bb(n.formAction) : E.getAttribute("formAction")),
        n !== null && ((p = n), (E = null)));
      var A = new xc("action", "action", null, i, h);
      t.push({
        event: A,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (wo !== 0) {
                  var V = E ? $b(h, E) : new FormData(h);
                  Jd(a, { pending: !0, data: V, method: h.method, action: p }, null, V);
                }
              } else
                typeof p == "function" &&
                  (A.preventDefault(),
                  (V = E ? $b(h, E) : new FormData(h)),
                  Jd(a, { pending: !0, data: V, method: h.method, action: p }, p, V));
            },
            currentTarget: h,
          },
        ],
      });
    }
  }
  for (var zh = 0; zh < gd.length; zh++) {
    var kh = gd[zh],
      zR = kh.toLowerCase(),
      kR = kh[0].toUpperCase() + kh.slice(1);
    Ur(zR, "on" + kR);
  }
  (Ur(pv, "onAnimationEnd"),
    Ur(gv, "onAnimationIteration"),
    Ur(vv, "onAnimationStart"),
    Ur("dblclick", "onDoubleClick"),
    Ur("focusin", "onFocus"),
    Ur("focusout", "onBlur"),
    Ur(ZE, "onTransitionRun"),
    Ur(WE, "onTransitionStart"),
    Ur(JE, "onTransitionCancel"),
    Ur(yv, "onTransitionEnd"),
    vn("onMouseEnter", ["mouseout", "mouseover"]),
    vn("onMouseLeave", ["mouseout", "mouseover"]),
    vn("onPointerEnter", ["pointerout", "pointerover"]),
    vn("onPointerLeave", ["pointerout", "pointerover"]),
    Cn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Cn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Cn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Cn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Cn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var fs =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    LR = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fs),
    );
  function Hb(t, n) {
    n = (n & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var i = t[a],
        h = i.event;
      i = i.listeners;
      e: {
        var p = void 0;
        if (n)
          for (var E = i.length - 1; 0 <= E; E--) {
            var A = i[E],
              V = A.instance,
              J = A.currentTarget;
            if (((A = A.listener), V !== p && h.isPropagationStopped())) break e;
            ((p = A), (h.currentTarget = J));
            try {
              p(h);
            } catch (se) {
              Rc(se);
            }
            ((h.currentTarget = null), (p = V));
          }
        else
          for (E = 0; E < i.length; E++) {
            if (
              ((A = i[E]),
              (V = A.instance),
              (J = A.currentTarget),
              (A = A.listener),
              V !== p && h.isPropagationStopped())
            )
              break e;
            ((p = A), (h.currentTarget = J));
            try {
              p(h);
            } catch (se) {
              Rc(se);
            }
            ((h.currentTarget = null), (p = V));
          }
      }
    }
  }
  function dt(t, n) {
    var a = n[Ue];
    a === void 0 && (a = n[Ue] = new Set());
    var i = t + "__bubble";
    a.has(i) || (Ub(n, t, 2, !1), a.add(i));
  }
  function Lh(t, n, a) {
    var i = 0;
    (n && (i |= 4), Ub(a, t, i, n));
  }
  var fu = "_reactListening" + Math.random().toString(36).slice(2);
  function Bh(t) {
    if (!t[fu]) {
      ((t[fu] = !0),
        Br.forEach(function (a) {
          a !== "selectionchange" && (LR.has(a) || Lh(a, !1, t), Lh(a, !0, t));
        }));
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[fu] || ((n[fu] = !0), Lh("selectionchange", !1, n));
    }
  }
  function Ub(t, n, a, i) {
    switch (p0(n)) {
      case 2:
        var h = u2;
        break;
      case 8:
        h = f2;
        break;
      default:
        h = Wh;
    }
    ((a = h.bind(null, n, a, t)),
      (h = void 0),
      !rd || (n !== "touchstart" && n !== "touchmove" && n !== "wheel") || (h = !0),
      i
        ? h !== void 0
          ? t.addEventListener(n, a, { capture: !0, passive: h })
          : t.addEventListener(n, a, !0)
        : h !== void 0
          ? t.addEventListener(n, a, { passive: h })
          : t.addEventListener(n, a, !1));
  }
  function $h(t, n, a, i, h) {
    var p = i;
    if ((n & 1) === 0 && (n & 2) === 0 && i !== null)
      e: for (;;) {
        if (i === null) return;
        var E = i.tag;
        if (E === 3 || E === 4) {
          var A = i.stateNode.containerInfo;
          if (A === h) break;
          if (E === 4)
            for (E = i.return; E !== null; ) {
              var V = E.tag;
              if ((V === 3 || V === 4) && E.stateNode.containerInfo === h) return;
              E = E.return;
            }
          for (; A !== null; ) {
            if (((E = Mt(A)), E === null)) return;
            if (((V = E.tag), V === 5 || V === 6 || V === 26 || V === 27)) {
              i = p = E;
              continue e;
            }
            A = A.parentNode;
          }
        }
        i = i.return;
      }
    qg(function () {
      var J = p,
        se = td(a),
        me = [];
      e: {
        var te = bv.get(t);
        if (te !== void 0) {
          var le = xc,
            Le = t;
          switch (t) {
            case "keypress":
              if (Sc(a) === 0) break e;
            case "keydown":
            case "keyup":
              le = AE;
              break;
            case "focusin":
              ((Le = "focus"), (le = id));
              break;
            case "focusout":
              ((Le = "blur"), (le = id));
              break;
            case "beforeblur":
            case "afterblur":
              le = id;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              le = Xg;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              le = vE;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              le = OE;
              break;
            case pv:
            case gv:
            case vv:
              le = SE;
              break;
            case yv:
              le = zE;
              break;
            case "scroll":
            case "scrollend":
              le = pE;
              break;
            case "wheel":
              le = LE;
              break;
            case "copy":
            case "cut":
            case "paste":
              le = xE;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              le = Qg;
              break;
            case "toggle":
            case "beforetoggle":
              le = $E;
          }
          var Ge = (n & 4) !== 0,
            jt = !Ge && (t === "scroll" || t === "scrollend"),
            X = Ge ? (te !== null ? te + "Capture" : null) : te;
          Ge = [];
          for (var q = J, W; q !== null; ) {
            var fe = q;
            if (
              ((W = fe.stateNode),
              (fe = fe.tag),
              (fe !== 5 && fe !== 26 && fe !== 27) ||
                W === null ||
                X === null ||
                ((fe = ji(q, X)), fe != null && Ge.push(ds(q, fe, W))),
              jt)
            )
              break;
            q = q.return;
          }
          0 < Ge.length &&
            ((te = new le(te, Le, null, a, se)), me.push({ event: te, listeners: Ge }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (
            ((te = t === "mouseover" || t === "pointerover"),
            (le = t === "mouseout" || t === "pointerout"),
            te && a !== ed && (Le = a.relatedTarget || a.fromElement) && (Mt(Le) || Le[ve]))
          )
            break e;
          if (
            (le || te) &&
            ((te =
              se.window === se
                ? se
                : (te = se.ownerDocument)
                  ? te.defaultView || te.parentWindow
                  : window),
            le
              ? ((Le = a.relatedTarget || a.toElement),
                (le = J),
                (Le = Le ? Mt(Le) : null),
                Le !== null &&
                  ((jt = c(Le)), (Ge = Le.tag), Le !== jt || (Ge !== 5 && Ge !== 27 && Ge !== 6)) &&
                  (Le = null))
              : ((le = null), (Le = J)),
            le !== Le)
          ) {
            if (
              ((Ge = Xg),
              (fe = "onMouseLeave"),
              (X = "onMouseEnter"),
              (q = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((Ge = Qg), (fe = "onPointerLeave"), (X = "onPointerEnter"), (q = "pointer")),
              (jt = le == null ? te : st(le)),
              (W = Le == null ? te : st(Le)),
              (te = new Ge(fe, q + "leave", le, a, se)),
              (te.target = jt),
              (te.relatedTarget = W),
              (fe = null),
              Mt(se) === J &&
                ((Ge = new Ge(X, q + "enter", Le, a, se)),
                (Ge.target = W),
                (Ge.relatedTarget = jt),
                (fe = Ge)),
              (jt = fe),
              le && Le)
            )
              t: {
                for (Ge = BR, X = le, q = Le, W = 0, fe = X; fe; fe = Ge(fe)) W++;
                fe = 0;
                for (var Fe = q; Fe; Fe = Ge(Fe)) fe++;
                for (; 0 < W - fe; ) ((X = Ge(X)), W--);
                for (; 0 < fe - W; ) ((q = Ge(q)), fe--);
                for (; W--; ) {
                  if (X === q || (q !== null && X === q.alternate)) {
                    Ge = X;
                    break t;
                  }
                  ((X = Ge(X)), (q = Ge(q)));
                }
                Ge = null;
              }
            else Ge = null;
            (le !== null && Pb(me, te, le, Ge, !1),
              Le !== null && jt !== null && Pb(me, jt, Le, Ge, !0));
          }
        }
        e: {
          if (
            ((te = J ? st(J) : window),
            (le = te.nodeName && te.nodeName.toLowerCase()),
            le === "select" || (le === "input" && te.type === "file"))
          )
            var wt = av;
          else if (nv(te))
            if (ov) wt = XE;
            else {
              wt = YE;
              var Pe = qE;
            }
          else
            ((le = te.nodeName),
              !le || le.toLowerCase() !== "input" || (te.type !== "checkbox" && te.type !== "radio")
                ? J && Jf(J.elementType) && (wt = av)
                : (wt = GE));
          if (wt && (wt = wt(t, J))) {
            rv(me, wt, a, se);
            break e;
          }
          (Pe && Pe(t, te, J),
            t === "focusout" &&
              J &&
              te.type === "number" &&
              J.memoizedProps.value != null &&
              lt(te, "number", te.value));
        }
        switch (((Pe = J ? st(J) : window), t)) {
          case "focusin":
            (nv(Pe) || Pe.contentEditable === "true") && ((jl = Pe), (hd = J), (Pi = null));
            break;
          case "focusout":
            Pi = hd = jl = null;
            break;
          case "mousedown":
            md = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((md = !1), hv(me, a, se));
            break;
          case "selectionchange":
            if (QE) break;
          case "keydown":
          case "keyup":
            hv(me, a, se);
        }
        var rt;
        if (cd)
          e: {
            switch (t) {
              case "compositionstart":
                var pt = "onCompositionStart";
                break e;
              case "compositionend":
                pt = "onCompositionEnd";
                break e;
              case "compositionupdate":
                pt = "onCompositionUpdate";
                break e;
            }
            pt = void 0;
          }
        else
          Ol
            ? ev(t, a) && (pt = "onCompositionEnd")
            : t === "keydown" && a.keyCode === 229 && (pt = "onCompositionStart");
        (pt &&
          (Zg &&
            a.locale !== "ko" &&
            (Ol || pt !== "onCompositionStart"
              ? pt === "onCompositionEnd" && Ol && (rt = Yg())
              : ((ao = se), (ad = "value" in ao ? ao.value : ao.textContent), (Ol = !0))),
          (Pe = du(J, pt)),
          0 < Pe.length &&
            ((pt = new Kg(pt, t, null, a, se)),
            me.push({ event: pt, listeners: Pe }),
            rt ? (pt.data = rt) : ((rt = tv(a)), rt !== null && (pt.data = rt)))),
          (rt = UE ? PE(t, a) : VE(t, a)) &&
            ((pt = du(J, "onBeforeInput")),
            0 < pt.length &&
              ((Pe = new Kg("onBeforeInput", "beforeinput", null, a, se)),
              me.push({ event: Pe, listeners: pt }),
              (Pe.data = rt))),
          jR(me, t, J, a, se));
      }
      Hb(me, n);
    });
  }
  function ds(t, n, a) {
    return { instance: t, listener: n, currentTarget: a };
  }
  function du(t, n) {
    for (var a = n + "Capture", i = []; t !== null; ) {
      var h = t,
        p = h.stateNode;
      if (
        ((h = h.tag),
        (h !== 5 && h !== 26 && h !== 27) ||
          p === null ||
          ((h = ji(t, a)),
          h != null && i.unshift(ds(t, h, p)),
          (h = ji(t, n)),
          h != null && i.push(ds(t, h, p))),
        t.tag === 3)
      )
        return i;
      t = t.return;
    }
    return [];
  }
  function BR(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Pb(t, n, a, i, h) {
    for (var p = n._reactName, E = []; a !== null && a !== i; ) {
      var A = a,
        V = A.alternate,
        J = A.stateNode;
      if (((A = A.tag), V !== null && V === i)) break;
      ((A !== 5 && A !== 26 && A !== 27) ||
        J === null ||
        ((V = J),
        h
          ? ((J = ji(a, p)), J != null && E.unshift(ds(a, J, V)))
          : h || ((J = ji(a, p)), J != null && E.push(ds(a, J, V)))),
        (a = a.return));
    }
    E.length !== 0 && t.push({ event: n, listeners: E });
  }
  var $R = /\r\n?/g,
    HR = /\u0000|\uFFFD/g;
  function Vb(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        $R,
        `
`,
      )
      .replace(HR, "");
  }
  function Ib(t, n) {
    return ((n = Vb(n)), Vb(t) === n);
  }
  function Ot(t, n, a, i, h, p) {
    switch (a) {
      case "children":
        typeof i == "string"
          ? n === "body" || (n === "textarea" && i === "") || Al(t, i)
          : (typeof i == "number" || typeof i == "bigint") && n !== "body" && Al(t, "" + i);
        break;
      case "className":
        er(t, "class", i);
        break;
      case "tabIndex":
        er(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        er(t, a, i);
        break;
      case "style":
        Ig(t, i, p);
        break;
      case "data":
        if (n !== "object") {
          er(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (n !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(a);
          break;
        }
        ((i = yc("" + i)), t.setAttribute(a, i));
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof p == "function" &&
            (a === "formAction"
              ? (n !== "input" && Ot(t, n, "name", h.name, h, null),
                Ot(t, n, "formEncType", h.formEncType, h, null),
                Ot(t, n, "formMethod", h.formMethod, h, null),
                Ot(t, n, "formTarget", h.formTarget, h, null))
              : (Ot(t, n, "encType", h.encType, h, null),
                Ot(t, n, "method", h.method, h, null),
                Ot(t, n, "target", h.target, h, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(a);
          break;
        }
        ((i = yc("" + i)), t.setAttribute(a, i));
        break;
      case "onClick":
        i != null && (t.onclick = Ca);
        break;
      case "onScroll":
        i != null && dt("scroll", t);
        break;
      case "onScrollEnd":
        i != null && dt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(l(61));
          if (((a = i.__html), a != null)) {
            if (h.children != null) throw Error(l(60));
            t.innerHTML = a;
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        ((a = yc("" + i)), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(a, "" + i)
          : t.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(a, "")
          : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        i === !0
          ? t.setAttribute(a, "")
          : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol"
            ? t.setAttribute(a, i)
            : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i
          ? t.setAttribute(a, i)
          : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? t.removeAttribute(a)
          : t.setAttribute(a, i);
        break;
      case "popover":
        (dt("beforetoggle", t), dt("toggle", t), $r(t, "popover", i));
        break;
      case "xlinkActuate":
        Qe(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        Qe(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        Qe(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        Qe(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        Qe(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        Qe(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        Qe(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        Qe(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        Qe(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        $r(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || (a[0] !== "o" && a[0] !== "O") || (a[1] !== "n" && a[1] !== "N")) &&
          ((a = hE.get(a) || a), $r(t, a, i));
    }
  }
  function Hh(t, n, a, i, h, p) {
    switch (a) {
      case "style":
        Ig(t, i, p);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(l(61));
          if (((a = i.__html), a != null)) {
            if (h.children != null) throw Error(l(60));
            t.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? Al(t, i)
          : (typeof i == "number" || typeof i == "bigint") && Al(t, "" + i);
        break;
      case "onScroll":
        i != null && dt("scroll", t);
        break;
      case "onScrollEnd":
        i != null && dt("scrollend", t);
        break;
      case "onClick":
        i != null && (t.onclick = Ca);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!fr.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((h = a.endsWith("Capture")),
              (n = a.slice(2, h ? a.length - 7 : void 0)),
              (p = t[Ae] || null),
              (p = p != null ? p[a] : null),
              typeof p == "function" && t.removeEventListener(n, p, h),
              typeof i == "function")
            ) {
              (typeof p != "function" &&
                p !== null &&
                (a in t ? (t[a] = null) : t.hasAttribute(a) && t.removeAttribute(a)),
                t.addEventListener(n, i, h));
              break e;
            }
            a in t ? (t[a] = i) : i === !0 ? t.setAttribute(a, "") : $r(t, a, i);
          }
    }
  }
  function _n(t, n, a) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (dt("error", t), dt("load", t));
        var i = !1,
          h = !1,
          p;
        for (p in a)
          if (a.hasOwnProperty(p)) {
            var E = a[p];
            if (E != null)
              switch (p) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  h = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l(137, n));
                default:
                  Ot(t, n, p, E, a, null);
              }
          }
        (h && Ot(t, n, "srcSet", a.srcSet, a, null), i && Ot(t, n, "src", a.src, a, null));
        return;
      case "input":
        dt("invalid", t);
        var A = (p = E = h = null),
          V = null,
          J = null;
        for (i in a)
          if (a.hasOwnProperty(i)) {
            var se = a[i];
            if (se != null)
              switch (i) {
                case "name":
                  h = se;
                  break;
                case "type":
                  E = se;
                  break;
                case "checked":
                  V = se;
                  break;
                case "defaultChecked":
                  J = se;
                  break;
                case "value":
                  p = se;
                  break;
                case "defaultValue":
                  A = se;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (se != null) throw Error(l(137, n));
                  break;
                default:
                  Ot(t, n, i, se, a, null);
              }
          }
        nt(t, p, A, V, J, E, h, !1);
        return;
      case "select":
        (dt("invalid", t), (i = E = p = null));
        for (h in a)
          if (a.hasOwnProperty(h) && ((A = a[h]), A != null))
            switch (h) {
              case "value":
                p = A;
                break;
              case "defaultValue":
                E = A;
                break;
              case "multiple":
                i = A;
              default:
                Ot(t, n, h, A, a, null);
            }
        ((n = p),
          (a = E),
          (t.multiple = !!i),
          n != null ? bt(t, !!i, n, !1) : a != null && bt(t, !!i, a, !0));
        return;
      case "textarea":
        (dt("invalid", t), (p = h = i = null));
        for (E in a)
          if (a.hasOwnProperty(E) && ((A = a[E]), A != null))
            switch (E) {
              case "value":
                i = A;
                break;
              case "defaultValue":
                h = A;
                break;
              case "children":
                p = A;
                break;
              case "dangerouslySetInnerHTML":
                if (A != null) throw Error(l(91));
                break;
              default:
                Ot(t, n, E, A, a, null);
            }
        Fo(t, i, h, p);
        return;
      case "option":
        for (V in a)
          a.hasOwnProperty(V) &&
            ((i = a[V]), i != null) &&
            (V === "selected"
              ? (t.selected = i && typeof i != "function" && typeof i != "symbol")
              : Ot(t, n, V, i, a, null));
        return;
      case "dialog":
        (dt("beforetoggle", t), dt("toggle", t), dt("cancel", t), dt("close", t));
        break;
      case "iframe":
      case "object":
        dt("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < fs.length; i++) dt(fs[i], t);
        break;
      case "image":
        (dt("error", t), dt("load", t));
        break;
      case "details":
        dt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (dt("error", t), dt("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (J in a)
          if (a.hasOwnProperty(J) && ((i = a[J]), i != null))
            switch (J) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(l(137, n));
              default:
                Ot(t, n, J, i, a, null);
            }
        return;
      default:
        if (Jf(n)) {
          for (se in a)
            a.hasOwnProperty(se) && ((i = a[se]), i !== void 0 && Hh(t, n, se, i, a, void 0));
          return;
        }
    }
    for (A in a) a.hasOwnProperty(A) && ((i = a[A]), i != null && Ot(t, n, A, i, a, null));
  }
  function UR(t, n, a, i) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var h = null,
          p = null,
          E = null,
          A = null,
          V = null,
          J = null,
          se = null;
        for (le in a) {
          var me = a[le];
          if (a.hasOwnProperty(le) && me != null)
            switch (le) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                V = me;
              default:
                i.hasOwnProperty(le) || Ot(t, n, le, null, i, me);
            }
        }
        for (var te in i) {
          var le = i[te];
          if (((me = a[te]), i.hasOwnProperty(te) && (le != null || me != null)))
            switch (te) {
              case "type":
                p = le;
                break;
              case "name":
                h = le;
                break;
              case "checked":
                J = le;
                break;
              case "defaultChecked":
                se = le;
                break;
              case "value":
                E = le;
                break;
              case "defaultValue":
                A = le;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (le != null) throw Error(l(137, n));
                break;
              default:
                le !== me && Ot(t, n, te, le, i, me);
            }
        }
        ye(t, E, A, V, J, se, p, h);
        return;
      case "select":
        le = E = A = te = null;
        for (p in a)
          if (((V = a[p]), a.hasOwnProperty(p) && V != null))
            switch (p) {
              case "value":
                break;
              case "multiple":
                le = V;
              default:
                i.hasOwnProperty(p) || Ot(t, n, p, null, i, V);
            }
        for (h in i)
          if (((p = i[h]), (V = a[h]), i.hasOwnProperty(h) && (p != null || V != null)))
            switch (h) {
              case "value":
                te = p;
                break;
              case "defaultValue":
                A = p;
                break;
              case "multiple":
                E = p;
              default:
                p !== V && Ot(t, n, h, p, i, V);
            }
        ((n = A),
          (a = E),
          (i = le),
          te != null
            ? bt(t, !!a, te, !1)
            : !!i != !!a && (n != null ? bt(t, !!a, n, !0) : bt(t, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        le = te = null;
        for (A in a)
          if (((h = a[A]), a.hasOwnProperty(A) && h != null && !i.hasOwnProperty(A)))
            switch (A) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ot(t, n, A, null, i, h);
            }
        for (E in i)
          if (((h = i[E]), (p = a[E]), i.hasOwnProperty(E) && (h != null || p != null)))
            switch (E) {
              case "value":
                te = h;
                break;
              case "defaultValue":
                le = h;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(l(91));
                break;
              default:
                h !== p && Ot(t, n, E, h, i, p);
            }
        bn(t, te, le);
        return;
      case "option":
        for (var Le in a)
          ((te = a[Le]),
            a.hasOwnProperty(Le) &&
              te != null &&
              !i.hasOwnProperty(Le) &&
              (Le === "selected" ? (t.selected = !1) : Ot(t, n, Le, null, i, te)));
        for (V in i)
          ((te = i[V]),
            (le = a[V]),
            i.hasOwnProperty(V) &&
              te !== le &&
              (te != null || le != null) &&
              (V === "selected"
                ? (t.selected = te && typeof te != "function" && typeof te != "symbol")
                : Ot(t, n, V, te, i, le)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Ge in a)
          ((te = a[Ge]),
            a.hasOwnProperty(Ge) &&
              te != null &&
              !i.hasOwnProperty(Ge) &&
              Ot(t, n, Ge, null, i, te));
        for (J in i)
          if (
            ((te = i[J]),
            (le = a[J]),
            i.hasOwnProperty(J) && te !== le && (te != null || le != null))
          )
            switch (J) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (te != null) throw Error(l(137, n));
                break;
              default:
                Ot(t, n, J, te, i, le);
            }
        return;
      default:
        if (Jf(n)) {
          for (var jt in a)
            ((te = a[jt]),
              a.hasOwnProperty(jt) &&
                te !== void 0 &&
                !i.hasOwnProperty(jt) &&
                Hh(t, n, jt, void 0, i, te));
          for (se in i)
            ((te = i[se]),
              (le = a[se]),
              !i.hasOwnProperty(se) ||
                te === le ||
                (te === void 0 && le === void 0) ||
                Hh(t, n, se, te, i, le));
          return;
        }
    }
    for (var X in a)
      ((te = a[X]),
        a.hasOwnProperty(X) && te != null && !i.hasOwnProperty(X) && Ot(t, n, X, null, i, te));
    for (me in i)
      ((te = i[me]),
        (le = a[me]),
        !i.hasOwnProperty(me) ||
          te === le ||
          (te == null && le == null) ||
          Ot(t, n, me, te, i, le));
  }
  function Fb(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function PR() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, n = 0, a = performance.getEntriesByType("resource"), i = 0;
        i < a.length;
        i++
      ) {
        var h = a[i],
          p = h.transferSize,
          E = h.initiatorType,
          A = h.duration;
        if (p && A && Fb(E)) {
          for (E = 0, A = h.responseEnd, i += 1; i < a.length; i++) {
            var V = a[i],
              J = V.startTime;
            if (J > A) break;
            var se = V.transferSize,
              me = V.initiatorType;
            se && Fb(me) && ((V = V.responseEnd), (E += se * (V < A ? 1 : (A - J) / (V - J))));
          }
          if ((--i, (n += (8 * (p + E)) / (h.duration / 1e3)), t++, 10 < t)) break;
        }
      }
      if (0 < t) return n / t / 1e6;
    }
    return navigator.connection && ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var Uh = null,
    Ph = null;
  function hu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function qb(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Yb(t, n) {
    if (t === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && n === "foreignObject" ? 0 : t;
  }
  function Vh(t, n) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      typeof n.children == "bigint" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ih = null;
  function VR() {
    var t = window.event;
    return t && t.type === "popstate" ? (t === Ih ? !1 : ((Ih = t), !0)) : ((Ih = null), !1);
  }
  var Gb = typeof setTimeout == "function" ? setTimeout : void 0,
    IR = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Xb = typeof Promise == "function" ? Promise : void 0,
    FR =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Xb < "u"
          ? function (t) {
              return Xb.resolve(null).then(t).catch(qR);
            }
          : Gb;
  function qR(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function xo(t) {
    return t === "head";
  }
  function Kb(t, n) {
    var a = n,
      i = 0;
    do {
      var h = a.nextSibling;
      if ((t.removeChild(a), h && h.nodeType === 8))
        if (((a = h.data), a === "/$" || a === "/&")) {
          if (i === 0) {
            (t.removeChild(h), li(n));
            return;
          }
          i--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") i++;
        else if (a === "html") hs(t.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = t.ownerDocument.head), hs(a));
          for (var p = a.firstChild; p; ) {
            var E = p.nextSibling,
              A = p.nodeName;
            (p[et] ||
              A === "SCRIPT" ||
              A === "STYLE" ||
              (A === "LINK" && p.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(p),
              (p = E));
          }
        } else a === "body" && hs(t.ownerDocument.body);
      a = h;
    } while (a);
    li(n);
  }
  function Qb(t, n) {
    var a = t;
    t = 0;
    do {
      var i = a.nextSibling;
      if (
        (a.nodeType === 1
          ? n
            ? ((a._stashedDisplay = a.style.display), (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (n
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        i && i.nodeType === 8)
      )
        if (((a = i.data), a === "/$")) {
          if (t === 0) break;
          t--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || t++;
      a = i;
    } while (a);
  }
  function Fh(t) {
    var n = t.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var a = n;
      switch (((n = n.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Fh(a), ut(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function YR(t, n, a, i) {
    for (; t.nodeType === 1; ) {
      var h = a;
      if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (i) {
        if (!t[et])
          switch (n) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((p = t.getAttribute("rel")),
                p === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                p !== h.rel ||
                t.getAttribute("href") !== (h.href == null || h.href === "" ? null : h.href) ||
                t.getAttribute("crossorigin") !== (h.crossOrigin == null ? null : h.crossOrigin) ||
                t.getAttribute("title") !== (h.title == null ? null : h.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((p = t.getAttribute("src")),
                (p !== (h.src == null ? null : h.src) ||
                  t.getAttribute("type") !== (h.type == null ? null : h.type) ||
                  t.getAttribute("crossorigin") !==
                    (h.crossOrigin == null ? null : h.crossOrigin)) &&
                  p &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (n === "input" && t.type === "hidden") {
        var p = h.name == null ? null : "" + h.name;
        if (h.type === "hidden" && t.getAttribute("name") === p) return t;
      } else return t;
      if (((t = yr(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function GR(t, n, a) {
    if (n === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a) ||
        ((t = yr(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Zb(t, n) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n) ||
        ((t = yr(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function qh(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Yh(t) {
    return t.data === "$!" || (t.data === "$?" && t.ownerDocument.readyState !== "loading");
  }
  function XR(t, n) {
    var a = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = n;
    else if (t.data !== "$?" || a.readyState !== "loading") n();
    else {
      var i = function () {
        (n(), a.removeEventListener("DOMContentLoaded", i));
      };
      (a.addEventListener("DOMContentLoaded", i), (t._reactRetry = i));
    }
  }
  function yr(t) {
    for (; t != null; t = t.nextSibling) {
      var n = t.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (
          ((n = t.data),
          n === "$" ||
            n === "$!" ||
            n === "$?" ||
            n === "$~" ||
            n === "&" ||
            n === "F!" ||
            n === "F")
        )
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return t;
  }
  var Gh = null;
  function Wb(t) {
    t = t.nextSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "/$" || a === "/&") {
          if (n === 0) return yr(t.nextSibling);
          n--;
        } else (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") || n++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Jb(t) {
    t = t.previousSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (n === 0) return t;
          n--;
        } else (a !== "/$" && a !== "/&") || n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function e0(t, n, a) {
    switch (((n = hu(a)), t)) {
      case "html":
        if (((t = n.documentElement), !t)) throw Error(l(452));
        return t;
      case "head":
        if (((t = n.head), !t)) throw Error(l(453));
        return t;
      case "body":
        if (((t = n.body), !t)) throw Error(l(454));
        return t;
      default:
        throw Error(l(451));
    }
  }
  function hs(t) {
    for (var n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
    ut(t);
  }
  var br = new Map(),
    t0 = new Set();
  function mu(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var Ha = k.d;
  k.d = { f: KR, r: QR, D: ZR, C: WR, L: JR, m: e2, X: n2, S: t2, M: r2 };
  function KR() {
    var t = Ha.f(),
      n = ou();
    return t || n;
  }
  function QR(t) {
    var n = ht(t);
    n !== null && n.tag === 5 && n.type === "form" ? yy(n) : Ha.r(t);
  }
  var ri = typeof document > "u" ? null : document;
  function n0(t, n, a) {
    var i = ri;
    if (i && typeof n == "string" && n) {
      var h = yn(n);
      ((h = 'link[rel="' + t + '"][href="' + h + '"]'),
        typeof a == "string" && (h += '[crossorigin="' + a + '"]'),
        t0.has(h) ||
          (t0.add(h),
          (t = { rel: t, crossOrigin: a, href: n }),
          i.querySelector(h) === null &&
            ((n = i.createElement("link")), _n(n, "link", t), ct(n), i.head.appendChild(n))));
    }
  }
  function ZR(t) {
    (Ha.D(t), n0("dns-prefetch", t, null));
  }
  function WR(t, n) {
    (Ha.C(t, n), n0("preconnect", t, n));
  }
  function JR(t, n, a) {
    Ha.L(t, n, a);
    var i = ri;
    if (i && t && n) {
      var h = 'link[rel="preload"][as="' + yn(n) + '"]';
      n === "image" && a && a.imageSrcSet
        ? ((h += '[imagesrcset="' + yn(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" && (h += '[imagesizes="' + yn(a.imageSizes) + '"]'))
        : (h += '[href="' + yn(t) + '"]');
      var p = h;
      switch (n) {
        case "style":
          p = ai(t);
          break;
        case "script":
          p = oi(t);
      }
      br.has(p) ||
        ((t = g(
          { rel: "preload", href: n === "image" && a && a.imageSrcSet ? void 0 : t, as: n },
          a,
        )),
        br.set(p, t),
        i.querySelector(h) !== null ||
          (n === "style" && i.querySelector(ms(p))) ||
          (n === "script" && i.querySelector(ps(p))) ||
          ((n = i.createElement("link")), _n(n, "link", t), ct(n), i.head.appendChild(n)));
    }
  }
  function e2(t, n) {
    Ha.m(t, n);
    var a = ri;
    if (a && t) {
      var i = n && typeof n.as == "string" ? n.as : "script",
        h = 'link[rel="modulepreload"][as="' + yn(i) + '"][href="' + yn(t) + '"]',
        p = h;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          p = oi(t);
      }
      if (
        !br.has(p) &&
        ((t = g({ rel: "modulepreload", href: t }, n)), br.set(p, t), a.querySelector(h) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ps(p))) return;
        }
        ((i = a.createElement("link")), _n(i, "link", t), ct(i), a.head.appendChild(i));
      }
    }
  }
  function t2(t, n, a) {
    Ha.S(t, n, a);
    var i = ri;
    if (i && t) {
      var h = Bt(i).hoistableStyles,
        p = ai(t);
      n = n || "default";
      var E = h.get(p);
      if (!E) {
        var A = { loading: 0, preload: null };
        if ((E = i.querySelector(ms(p)))) A.loading = 5;
        else {
          ((t = g({ rel: "stylesheet", href: t, "data-precedence": n }, a)),
            (a = br.get(p)) && Xh(t, a));
          var V = (E = i.createElement("link"));
          (ct(V),
            _n(V, "link", t),
            (V._p = new Promise(function (J, se) {
              ((V.onload = J), (V.onerror = se));
            })),
            V.addEventListener("load", function () {
              A.loading |= 1;
            }),
            V.addEventListener("error", function () {
              A.loading |= 2;
            }),
            (A.loading |= 4),
            pu(E, n, i));
        }
        ((E = { type: "stylesheet", instance: E, count: 1, state: A }), h.set(p, E));
      }
    }
  }
  function n2(t, n) {
    Ha.X(t, n);
    var a = ri;
    if (a && t) {
      var i = Bt(a).hoistableScripts,
        h = oi(t),
        p = i.get(h);
      p ||
        ((p = a.querySelector(ps(h))),
        p ||
          ((t = g({ src: t, async: !0 }, n)),
          (n = br.get(h)) && Kh(t, n),
          (p = a.createElement("script")),
          ct(p),
          _n(p, "link", t),
          a.head.appendChild(p)),
        (p = { type: "script", instance: p, count: 1, state: null }),
        i.set(h, p));
    }
  }
  function r2(t, n) {
    Ha.M(t, n);
    var a = ri;
    if (a && t) {
      var i = Bt(a).hoistableScripts,
        h = oi(t),
        p = i.get(h);
      p ||
        ((p = a.querySelector(ps(h))),
        p ||
          ((t = g({ src: t, async: !0, type: "module" }, n)),
          (n = br.get(h)) && Kh(t, n),
          (p = a.createElement("script")),
          ct(p),
          _n(p, "link", t),
          a.head.appendChild(p)),
        (p = { type: "script", instance: p, count: 1, state: null }),
        i.set(h, p));
    }
  }
  function r0(t, n, a, i) {
    var h = (h = ue.current) ? mu(h) : null;
    if (!h) throw Error(l(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((n = ai(a.href)),
            (a = Bt(h).hoistableStyles),
            (i = a.get(n)),
            i || ((i = { type: "style", instance: null, count: 0, state: null }), a.set(n, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          t = ai(a.href);
          var p = Bt(h).hoistableStyles,
            E = p.get(t);
          if (
            (E ||
              ((h = h.ownerDocument || h),
              (E = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              p.set(t, E),
              (p = h.querySelector(ms(t))) && !p._p && ((E.instance = p), (E.state.loading = 5)),
              br.has(t) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                br.set(t, a),
                p || a2(h, t, a, E.state))),
            n && i === null)
          )
            throw Error(l(528, ""));
          return E;
        }
        if (n && i !== null) throw Error(l(529, ""));
        return null;
      case "script":
        return (
          (n = a.async),
          (a = a.src),
          typeof a == "string" && n && typeof n != "function" && typeof n != "symbol"
            ? ((n = oi(a)),
              (a = Bt(h).hoistableScripts),
              (i = a.get(n)),
              i || ((i = { type: "script", instance: null, count: 0, state: null }), a.set(n, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(l(444, t));
    }
  }
  function ai(t) {
    return 'href="' + yn(t) + '"';
  }
  function ms(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function a0(t) {
    return g({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function a2(t, n, a, i) {
    t.querySelector('link[rel="preload"][as="style"][' + n + "]")
      ? (i.loading = 1)
      : ((n = t.createElement("link")),
        (i.preload = n),
        n.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        n.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        _n(n, "link", a),
        ct(n),
        t.head.appendChild(n));
  }
  function oi(t) {
    return '[src="' + yn(t) + '"]';
  }
  function ps(t) {
    return "script[async]" + t;
  }
  function o0(t, n, a) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case "style":
          var i = t.querySelector('style[data-href~="' + yn(a.href) + '"]');
          if (i) return ((n.instance = i), ct(i), i);
          var h = g({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (t.ownerDocument || t).createElement("style")),
            ct(i),
            _n(i, "style", h),
            pu(i, a.precedence, t),
            (n.instance = i)
          );
        case "stylesheet":
          h = ai(a.href);
          var p = t.querySelector(ms(h));
          if (p) return ((n.state.loading |= 4), (n.instance = p), ct(p), p);
          ((i = a0(a)),
            (h = br.get(h)) && Xh(i, h),
            (p = (t.ownerDocument || t).createElement("link")),
            ct(p));
          var E = p;
          return (
            (E._p = new Promise(function (A, V) {
              ((E.onload = A), (E.onerror = V));
            })),
            _n(p, "link", i),
            (n.state.loading |= 4),
            pu(p, a.precedence, t),
            (n.instance = p)
          );
        case "script":
          return (
            (p = oi(a.src)),
            (h = t.querySelector(ps(p)))
              ? ((n.instance = h), ct(h), h)
              : ((i = a),
                (h = br.get(p)) && ((i = g({}, a)), Kh(i, h)),
                (t = t.ownerDocument || t),
                (h = t.createElement("script")),
                ct(h),
                _n(h, "link", i),
                t.head.appendChild(h),
                (n.instance = h))
          );
        case "void":
          return null;
        default:
          throw Error(l(443, n.type));
      }
    else
      n.type === "stylesheet" &&
        (n.state.loading & 4) === 0 &&
        ((i = n.instance), (n.state.loading |= 4), pu(i, a.precedence, t));
    return n.instance;
  }
  function pu(t, n, a) {
    for (
      var i = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        h = i.length ? i[i.length - 1] : null,
        p = h,
        E = 0;
      E < i.length;
      E++
    ) {
      var A = i[E];
      if (A.dataset.precedence === n) p = A;
      else if (p !== h) break;
    }
    p
      ? p.parentNode.insertBefore(t, p.nextSibling)
      : ((n = a.nodeType === 9 ? a.head : a), n.insertBefore(t, n.firstChild));
  }
  function Xh(t, n) {
    (t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.title == null && (t.title = n.title));
  }
  function Kh(t, n) {
    (t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.integrity == null && (t.integrity = n.integrity));
  }
  var gu = null;
  function l0(t, n, a) {
    if (gu === null) {
      var i = new Map(),
        h = (gu = new Map());
      h.set(a, i);
    } else ((h = gu), (i = h.get(a)), i || ((i = new Map()), h.set(a, i)));
    if (i.has(t)) return i;
    for (i.set(t, null), a = a.getElementsByTagName(t), h = 0; h < a.length; h++) {
      var p = a[h];
      if (
        !(p[et] || p[De] || (t === "link" && p.getAttribute("rel") === "stylesheet")) &&
        p.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var E = p.getAttribute(n) || "";
        E = t + E;
        var A = i.get(E);
        A ? A.push(p) : i.set(E, [p]);
      }
    }
    return i;
  }
  function i0(t, n, a) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(a, n === "title" ? t.querySelector("head > title") : null));
  }
  function o2(t, n, a) {
    if (a === 1 || n.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "") break;
        return !0;
      case "link":
        if (
          typeof n.rel != "string" ||
          typeof n.href != "string" ||
          n.href === "" ||
          n.onLoad ||
          n.onError
        )
          break;
        return n.rel === "stylesheet"
          ? ((t = n.disabled), typeof n.precedence == "string" && t == null)
          : !0;
      case "script":
        if (
          n.async &&
          typeof n.async != "function" &&
          typeof n.async != "symbol" &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function s0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function l2(t, n, a, i) {
    if (
      a.type === "stylesheet" &&
      (typeof i.media != "string" || matchMedia(i.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var h = ai(i.href),
          p = n.querySelector(ms(h));
        if (p) {
          ((n = p._p),
            n !== null &&
              typeof n == "object" &&
              typeof n.then == "function" &&
              (t.count++, (t = vu.bind(t)), n.then(t, t)),
            (a.state.loading |= 4),
            (a.instance = p),
            ct(p));
          return;
        }
        ((p = n.ownerDocument || n),
          (i = a0(i)),
          (h = br.get(h)) && Xh(i, h),
          (p = p.createElement("link")),
          ct(p));
        var E = p;
        ((E._p = new Promise(function (A, V) {
          ((E.onload = A), (E.onerror = V));
        })),
          _n(p, "link", i),
          (a.instance = p));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(a, n),
        (n = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (t.count++,
          (a = vu.bind(t)),
          n.addEventListener("load", a),
          n.addEventListener("error", a)));
    }
  }
  var Qh = 0;
  function i2(t, n) {
    return (
      t.stylesheets && t.count === 0 && bu(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (a) {
            var i = setTimeout(function () {
              if ((t.stylesheets && bu(t, t.stylesheets), t.unsuspend)) {
                var p = t.unsuspend;
                ((t.unsuspend = null), p());
              }
            }, 6e4 + n);
            0 < t.imgBytes && Qh === 0 && (Qh = 62500 * PR());
            var h = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 && (t.stylesheets && bu(t, t.stylesheets), t.unsuspend))
                ) {
                  var p = t.unsuspend;
                  ((t.unsuspend = null), p());
                }
              },
              (t.imgBytes > Qh ? 50 : 800) + n,
            );
            return (
              (t.unsuspend = a),
              function () {
                ((t.unsuspend = null), clearTimeout(i), clearTimeout(h));
              }
            );
          }
        : null
    );
  }
  function vu() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) bu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var yu = null;
  function bu(t, n) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++, (yu = new Map()), n.forEach(s2, t), (yu = null), vu.call(t)));
  }
  function s2(t, n) {
    if (!(n.state.loading & 4)) {
      var a = yu.get(t);
      if (a) var i = a.get(null);
      else {
        ((a = new Map()), yu.set(t, a));
        for (
          var h = t.querySelectorAll("link[data-precedence],style[data-precedence]"), p = 0;
          p < h.length;
          p++
        ) {
          var E = h[p];
          (E.nodeName === "LINK" || E.getAttribute("media") !== "not all") &&
            (a.set(E.dataset.precedence, E), (i = E));
        }
        i && a.set(null, i);
      }
      ((h = n.instance),
        (E = h.getAttribute("data-precedence")),
        (p = a.get(E) || i),
        p === i && a.set(null, h),
        a.set(E, h),
        this.count++,
        (i = vu.bind(this)),
        h.addEventListener("load", i),
        h.addEventListener("error", i),
        p
          ? p.parentNode.insertBefore(h, p.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(h, t.firstChild)),
        (n.state.loading |= 4));
    }
  }
  var gs = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: B,
    _currentValue2: B,
    _threadCount: 0,
  };
  function c2(t, n, a, i, h, p, E, A, V) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Xt(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Xt(0)),
      (this.hiddenUpdates = Xt(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = h),
      (this.onCaughtError = p),
      (this.onRecoverableError = E),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = V),
      (this.incompleteTransitions = new Map()));
  }
  function c0(t, n, a, i, h, p, E, A, V, J, se, me) {
    return (
      (t = new c2(t, n, a, E, V, J, se, me, A)),
      (n = 1),
      p === !0 && (n |= 24),
      (p = rr(3, null, null, n)),
      (t.current = p),
      (p.stateNode = t),
      (n = Ad()),
      n.refCount++,
      (t.pooledCache = n),
      n.refCount++,
      (p.memoizedState = { element: i, isDehydrated: a, cache: n }),
      jd(p),
      t
    );
  }
  function u0(t) {
    return t ? ((t = Ll), t) : Ll;
  }
  function f0(t, n, a, i, h, p) {
    ((h = u0(h)),
      i.context === null ? (i.context = h) : (i.pendingContext = h),
      (i = uo(n)),
      (i.payload = { element: a }),
      (p = p === void 0 ? null : p),
      p !== null && (i.callback = p),
      (a = fo(t, i, n)),
      a !== null && (Kn(a, t, n), Xi(a, t, n)));
  }
  function d0(t, n) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function Zh(t, n) {
    (d0(t, n), (t = t.alternate) && d0(t, n));
  }
  function h0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var n = Xo(t, 67108864);
      (n !== null && Kn(n, t, 67108864), Zh(t, 67108864));
    }
  }
  function m0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var n = sr();
      n = I(n);
      var a = Xo(t, n);
      (a !== null && Kn(a, t, n), Zh(t, n));
    }
  }
  var Su = !0;
  function u2(t, n, a, i) {
    var h = N.T;
    N.T = null;
    var p = k.p;
    try {
      ((k.p = 2), Wh(t, n, a, i));
    } finally {
      ((k.p = p), (N.T = h));
    }
  }
  function f2(t, n, a, i) {
    var h = N.T;
    N.T = null;
    var p = k.p;
    try {
      ((k.p = 8), Wh(t, n, a, i));
    } finally {
      ((k.p = p), (N.T = h));
    }
  }
  function Wh(t, n, a, i) {
    if (Su) {
      var h = Jh(i);
      if (h === null) ($h(t, n, i, wu, a), g0(t, i));
      else if (h2(h, t, n, a, i)) i.stopPropagation();
      else if ((g0(t, i), n & 4 && -1 < d2.indexOf(t))) {
        for (; h !== null; ) {
          var p = ht(h);
          if (p !== null)
            switch (p.tag) {
              case 3:
                if (((p = p.stateNode), p.current.memoizedState.isDehydrated)) {
                  var E = rn(p.pendingLanes);
                  if (E !== 0) {
                    var A = p;
                    for (A.pendingLanes |= 2, A.entangledLanes |= 2; E; ) {
                      var V = 1 << (31 - Ft(E));
                      ((A.entanglements[1] |= V), (E &= ~V));
                    }
                    (aa(p), (Rt & 6) === 0 && ((ru = ot() + 500), us(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((A = Xo(p, 2)), A !== null && Kn(A, p, 2), ou(), Zh(p, 2));
            }
          if (((p = Jh(i)), p === null && $h(t, n, i, wu, a), p === h)) break;
          h = p;
        }
        h !== null && i.stopPropagation();
      } else $h(t, n, i, null, a);
    }
  }
  function Jh(t) {
    return ((t = td(t)), em(t));
  }
  var wu = null;
  function em(t) {
    if (((wu = null), (t = Mt(t)), t !== null)) {
      var n = c(t);
      if (n === null) t = null;
      else {
        var a = n.tag;
        if (a === 13) {
          if (((t = u(n)), t !== null)) return t;
          t = null;
        } else if (a === 31) {
          if (((t = f(n)), t !== null)) return t;
          t = null;
        } else if (a === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          t = null;
        } else n !== t && (t = null);
      }
    }
    return ((wu = t), null);
  }
  function p0(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (We()) {
          case Ie:
            return 2;
          case Yt:
            return 8;
          case pn:
          case Gt:
            return 32;
          case zt:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var tm = !1,
    Co = null,
    Eo = null,
    Ro = null,
    vs = new Map(),
    ys = new Map(),
    To = [],
    d2 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function g0(t, n) {
    switch (t) {
      case "focusin":
      case "focusout":
        Co = null;
        break;
      case "dragenter":
      case "dragleave":
        Eo = null;
        break;
      case "mouseover":
      case "mouseout":
        Ro = null;
        break;
      case "pointerover":
      case "pointerout":
        vs.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ys.delete(n.pointerId);
    }
  }
  function bs(t, n, a, i, h, p) {
    return t === null || t.nativeEvent !== p
      ? ((t = {
          blockedOn: n,
          domEventName: a,
          eventSystemFlags: i,
          nativeEvent: p,
          targetContainers: [h],
        }),
        n !== null && ((n = ht(n)), n !== null && h0(n)),
        t)
      : ((t.eventSystemFlags |= i),
        (n = t.targetContainers),
        h !== null && n.indexOf(h) === -1 && n.push(h),
        t);
  }
  function h2(t, n, a, i, h) {
    switch (n) {
      case "focusin":
        return ((Co = bs(Co, t, n, a, i, h)), !0);
      case "dragenter":
        return ((Eo = bs(Eo, t, n, a, i, h)), !0);
      case "mouseover":
        return ((Ro = bs(Ro, t, n, a, i, h)), !0);
      case "pointerover":
        var p = h.pointerId;
        return (vs.set(p, bs(vs.get(p) || null, t, n, a, i, h)), !0);
      case "gotpointercapture":
        return ((p = h.pointerId), ys.set(p, bs(ys.get(p) || null, t, n, a, i, h)), !0);
    }
    return !1;
  }
  function v0(t) {
    var n = Mt(t.target);
    if (n !== null) {
      var a = c(n);
      if (a !== null) {
        if (((n = a.tag), n === 13)) {
          if (((n = u(a)), n !== null)) {
            ((t.blockedOn = n),
              he(t.priority, function () {
                m0(a);
              }));
            return;
          }
        } else if (n === 31) {
          if (((n = f(a)), n !== null)) {
            ((t.blockedOn = n),
              he(t.priority, function () {
                m0(a);
              }));
            return;
          }
        } else if (n === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function xu(t) {
    if (t.blockedOn !== null) return !1;
    for (var n = t.targetContainers; 0 < n.length; ) {
      var a = Jh(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var i = new a.constructor(a.type, a);
        ((ed = i), a.target.dispatchEvent(i), (ed = null));
      } else return ((n = ht(a)), n !== null && h0(n), (t.blockedOn = a), !1);
      n.shift();
    }
    return !0;
  }
  function y0(t, n, a) {
    xu(t) && a.delete(n);
  }
  function m2() {
    ((tm = !1),
      Co !== null && xu(Co) && (Co = null),
      Eo !== null && xu(Eo) && (Eo = null),
      Ro !== null && xu(Ro) && (Ro = null),
      vs.forEach(y0),
      ys.forEach(y0));
  }
  function Cu(t, n) {
    t.blockedOn === n &&
      ((t.blockedOn = null),
      tm || ((tm = !0), e.unstable_scheduleCallback(e.unstable_NormalPriority, m2)));
  }
  var Eu = null;
  function b0(t) {
    Eu !== t &&
      ((Eu = t),
      e.unstable_scheduleCallback(e.unstable_NormalPriority, function () {
        Eu === t && (Eu = null);
        for (var n = 0; n < t.length; n += 3) {
          var a = t[n],
            i = t[n + 1],
            h = t[n + 2];
          if (typeof i != "function") {
            if (em(i || a) === null) continue;
            break;
          }
          var p = ht(a);
          p !== null &&
            (t.splice(n, 3),
            (n -= 3),
            Jd(p, { pending: !0, data: h, method: a.method, action: i }, i, h));
        }
      }));
  }
  function li(t) {
    function n(V) {
      return Cu(V, t);
    }
    (Co !== null && Cu(Co, t),
      Eo !== null && Cu(Eo, t),
      Ro !== null && Cu(Ro, t),
      vs.forEach(n),
      ys.forEach(n));
    for (var a = 0; a < To.length; a++) {
      var i = To[a];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < To.length && ((a = To[0]), a.blockedOn === null); )
      (v0(a), a.blockedOn === null && To.shift());
    if (((a = (t.ownerDocument || t).$$reactFormReplay), a != null))
      for (i = 0; i < a.length; i += 3) {
        var h = a[i],
          p = a[i + 1],
          E = h[Ae] || null;
        if (typeof p == "function") E || b0(a);
        else if (E) {
          var A = null;
          if (p && p.hasAttribute("formAction")) {
            if (((h = p), (E = p[Ae] || null))) A = E.formAction;
            else if (em(h) !== null) continue;
          } else A = E.action;
          (typeof A == "function" ? (a[i + 1] = A) : (a.splice(i, 3), (i -= 3)), b0(a));
        }
      }
  }
  function S0() {
    function t(p) {
      p.canIntercept &&
        p.info === "react-transition" &&
        p.intercept({
          handler: function () {
            return new Promise(function (E) {
              return (h = E);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function n() {
      (h !== null && (h(), (h = null)), i || setTimeout(a, 20));
    }
    function a() {
      if (!i && !navigation.transition) {
        var p = navigation.currentEntry;
        p &&
          p.url != null &&
          navigation.navigate(p.url, {
            state: p.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var i = !1,
        h = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", n),
        navigation.addEventListener("navigateerror", n),
        setTimeout(a, 100),
        function () {
          ((i = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", n),
            navigation.removeEventListener("navigateerror", n),
            h !== null && (h(), (h = null)));
        }
      );
    }
  }
  function nm(t) {
    this._internalRoot = t;
  }
  ((Ru.prototype.render = nm.prototype.render =
    function (t) {
      var n = this._internalRoot;
      if (n === null) throw Error(l(409));
      var a = n.current,
        i = sr();
      f0(a, i, t, n, null, null);
    }),
    (Ru.prototype.unmount = nm.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var n = t.containerInfo;
          (f0(t.current, 2, null, t, null, null), ou(), (n[ve] = null));
        }
      }));
  function Ru(t) {
    this._internalRoot = t;
  }
  Ru.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var n = ce();
      t = { blockedOn: null, target: t, priority: n };
      for (var a = 0; a < To.length && n !== 0 && n < To[a].priority; a++);
      (To.splice(a, 0, t), a === 0 && v0(t));
    }
  };
  var w0 = r.version;
  if (w0 !== "19.2.6") throw Error(l(527, w0, "19.2.6"));
  k.findDOMNode = function (t) {
    var n = t._reactInternals;
    if (n === void 0)
      throw typeof t.render == "function"
        ? Error(l(188))
        : ((t = Object.keys(t).join(",")), Error(l(268, t)));
    return ((t = m(n)), (t = t !== null ? v(t) : null), (t = t === null ? null : t.stateNode), t);
  };
  var p2 = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: N,
    reconcilerVersion: "19.2.6",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tu.isDisabled && Tu.supportsFiber)
      try {
        ((Vt = Tu.inject(p2)), (Ht = Tu));
      } catch {}
  }
  return (
    (ws.createRoot = function (t, n) {
      if (!s(t)) throw Error(l(299));
      var a = !1,
        i = "",
        h = Dy,
        p = Ay,
        E = My;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (h = n.onUncaughtError),
          n.onCaughtError !== void 0 && (p = n.onCaughtError),
          n.onRecoverableError !== void 0 && (E = n.onRecoverableError)),
        (n = c0(t, 1, !1, null, null, a, i, null, h, p, E, S0)),
        (t[ve] = n.current),
        Bh(t),
        new nm(n)
      );
    }),
    (ws.hydrateRoot = function (t, n, a) {
      if (!s(t)) throw Error(l(299));
      var i = !1,
        h = "",
        p = Dy,
        E = Ay,
        A = My,
        V = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (i = !0),
          a.identifierPrefix !== void 0 && (h = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (p = a.onUncaughtError),
          a.onCaughtError !== void 0 && (E = a.onCaughtError),
          a.onRecoverableError !== void 0 && (A = a.onRecoverableError),
          a.formState !== void 0 && (V = a.formState)),
        (n = c0(t, 1, !0, n, a ?? null, i, h, V, p, E, A, S0)),
        (n.context = u0(null)),
        (a = n.current),
        (i = sr()),
        (i = I(i)),
        (h = uo(i)),
        (h.callback = null),
        fo(a, h, i),
        (a = i),
        (n.current.lanes = a),
        an(n, a),
        aa(n),
        (t[ve] = n.current),
        Bh(t),
        new Ru(n)
      );
    }),
    (ws.version = "19.2.6"),
    ws
  );
}
var N0;
function R2() {
  if (N0) return am.exports;
  N0 = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (r) {
        console.error(r);
      }
  }
  return (e(), (am.exports = E2()), am.exports);
}
var T2 = R2();
const _2 = fp(T2);
function wn(e) {
  return Object.keys(e);
}
function cm(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function hp(e, r) {
  const o = { ...e },
    l = r;
  return (
    cm(e) &&
      cm(r) &&
      Object.keys(r).forEach((s) => {
        cm(l[s]) && s in e ? (o[s] = hp(o[s], l[s])) : (o[s] = l[s]);
      }),
    o
  );
}
function D2(e) {
  return e.replace(/[A-Z]/g, (r) => `-${r.toLowerCase()}`);
}
function A2(e) {
  return typeof e != "string" || !e.includes("var(--mantine-scale)")
    ? e
    : e
        .match(/^calc\((.*?)\)$/)?.[1]
        .split("*")[0]
        .trim();
}
function vl(e) {
  const r = A2(e);
  return typeof r == "number"
    ? r
    : typeof r == "string"
      ? r.includes("calc") || r.includes("var")
        ? r
        : r.includes("px")
          ? Number(r.replace("px", ""))
          : r.includes("rem")
            ? Number(r.replace("rem", "")) * 16
            : r.includes("em")
              ? Number(r.replace("em", "")) * 16
              : Number(r)
      : NaN;
}
function O0(e) {
  return e === "0rem" ? "0rem" : `calc(${e} * var(--mantine-scale))`;
}
function gS(e, { shouldScale: r = !1 } = {}) {
  function o(l) {
    if (l === 0 || l === "0") return `0${e}`;
    if (typeof l == "number") {
      const s = `${l / 16}${e}`;
      return r ? O0(s) : s;
    }
    if (typeof l == "string") {
      if (l === "" || l.startsWith("calc(") || l.startsWith("clamp(") || l.includes("rgba("))
        return l;
      if (l.includes(","))
        return l
          .split(",")
          .map((c) => o(c))
          .join(",");
      if (l.includes(" "))
        return l
          .split(" ")
          .map((c) => o(c))
          .join(" ");
      const s = l.replace("px", "");
      if (!Number.isNaN(Number(s))) {
        const c = `${Number(s) / 16}${e}`;
        return r ? O0(c) : c;
      }
    }
    return l;
  }
  return o;
}
const pe = gS("rem", { shouldScale: !0 }),
  j0 = gS("em");
function xl(e) {
  return Object.keys(e).reduce((r, o) => (e[o] !== void 0 && (r[o] = e[o]), r), {});
}
function vS(e) {
  if (typeof e == "number") return !0;
  if (typeof e == "string") {
    if (e.startsWith("calc(") || e.startsWith("var(") || (e.includes(" ") && e.trim() !== ""))
      return !0;
    const r =
      /^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;
    return e
      .trim()
      .split(/\s+/)
      .every((o) => r.test(o));
  }
  return !1;
}
var S = dp();
const Va = fp(S),
  mp = v2({ __proto__: null, default: Va }, [S]);
function pp(e) {
  return Array.isArray(e) || e === null ? !1 : typeof e == "object" ? e.type !== S.Fragment : !1;
}
function Ga(e) {
  const r = S.createContext(null);
  return [
    r,
    () => {
      const l = S.use(r);
      if (l === null) throw new Error(e);
      return l;
    },
  ];
}
function Qu(e, r) {
  let o = e;
  for (; (o = o.parentElement) && !o.matches(r); );
  return o;
}
function M2(e, r, o) {
  for (let l = e - 1; l >= 0; l -= 1) if (!r[l].disabled) return l;
  if (o) {
    for (let l = r.length - 1; l > -1; l -= 1) if (!r[l].disabled) return l;
  }
  return e;
}
function N2(e, r, o) {
  for (let l = e + 1; l < r.length; l += 1) if (!r[l].disabled) return l;
  if (o) {
    for (let l = 0; l < r.length; l += 1) if (!r[l].disabled) return l;
  }
  return e;
}
function O2(e, r, o) {
  return Qu(e, o) === Qu(r, o);
}
function yS({
  parentSelector: e,
  siblingSelector: r,
  onKeyDown: o,
  loop: l = !0,
  activateOnFocus: s = !1,
  dir: c = "rtl",
  orientation: u,
}) {
  return (f) => {
    o?.(f);
    const d = Array.from(Qu(f.currentTarget, e)?.querySelectorAll(r) || []).filter((y) =>
        O2(f.currentTarget, y, e),
      ),
      m = d.findIndex((y) => f.currentTarget === y),
      v = N2(m, d, l),
      g = M2(m, d, l);
    switch (f.key) {
      case "ArrowRight":
        break;
      case "ArrowLeft":
        break;
      case "ArrowUp":
        (f.stopPropagation(), f.preventDefault(), d[g].focus(), s && d[g].click());
        break;
      case "ArrowDown":
        (f.stopPropagation(), f.preventDefault(), d[v].focus(), s && d[v].click());
        break;
      case "Home":
        (f.stopPropagation(), f.preventDefault(), !d[0].disabled && d[0].focus());
        break;
      case "End": {
        (f.stopPropagation(), f.preventDefault());
        const y = d.length - 1;
        !d[y].disabled && d[y].focus();
        break;
      }
    }
  };
}
const j2 = { app: 100, modal: 200, popover: 300, overlay: 400, max: 9999 };
function Xa(e) {
  return j2[e];
}
const Zu = () => {};
function z2(e, r = { active: !0 }) {
  return typeof e != "function" || !r.active
    ? r.onKeyDown || Zu
    : (o) => {
        o.key === "Escape" && (e(o), r.onTrigger?.());
      };
}
function gt(e, r = "size", o = !0) {
  if (e !== void 0) return vS(e) ? (o ? pe(e) : e) : `var(--${r}-${e})`;
}
function un(e) {
  return gt(e, "mantine-spacing");
}
function Ln(e) {
  return e === void 0 ? "var(--mantine-radius-default)" : gt(e, "mantine-radius");
}
function kn(e) {
  return gt(e, "mantine-font-size");
}
function bS(e) {
  return gt(e, "mantine-line-height", !1);
}
function gp(e) {
  if (e) return gt(e, "mantine-shadow", !1);
}
function ua(e, r) {
  return (o) => {
    (e?.(o), r?.(o));
  };
}
function k2(e, r) {
  return e in r ? vl(r[e]) : vl(e);
}
function SS(e, r) {
  const o = e.map((l) => ({ value: l, px: k2(l, r) }));
  return (o.sort((l, s) => l.px - s.px), o);
}
function fa(e) {
  return typeof e == "object" && e !== null ? ("base" in e ? e.base : void 0) : e;
}
function L2(e, r, o) {
  return o ? Array.from(Qu(o, r)?.querySelectorAll(e) || []).findIndex((l) => l === o) : null;
}
function ks(e, r, o) {
  return r === void 0 && o === void 0
    ? e
    : r !== void 0 && o === void 0
      ? Math.max(e, r)
      : Math.min(r === void 0 && o !== void 0 ? e : Math.max(e, r), o);
}
function B2(e = "mantine-") {
  return `${e}${Math.random().toString(36).slice(2, 11)}`;
}
function Ms(e) {
  const r = S.useRef(e);
  return (
    S.useEffect(() => {
      r.current = e;
    }),
    S.useMemo(
      () =>
        (...o) =>
          r.current?.(...o),
      [],
    )
  );
}
function df(e, r) {
  const {
      delay: o,
      flushOnUnmount: l,
      leading: s,
      maxWait: c,
    } = typeof r == "number" ? { delay: r, flushOnUnmount: !1, leading: !1, maxWait: void 0 } : r,
    u = Ms(e),
    f = S.useRef(0),
    d = S.useRef(0),
    m = S.useRef(null),
    v = S.useMemo(() => {
      const g = Object.assign(
        (...y) => {
          (window.clearTimeout(f.current), (m.current = y));
          const b = g._isFirstCall;
          g._isFirstCall = !1;
          function x() {
            (window.clearTimeout(f.current),
              window.clearTimeout(d.current),
              (f.current = 0),
              (d.current = 0),
              (g._isFirstCall = !0),
              (g._hasPendingCallback = !1));
          }
          function C() {
            c !== void 0 &&
              d.current === 0 &&
              (d.current = window.setTimeout(() => {
                if (f.current !== 0) {
                  const _ = m.current;
                  (x(), u(..._));
                }
              }, c));
          }
          if (s && b) {
            u(...y);
            const _ = () => {
                x();
              },
              D = () => {
                f.current !== 0 && (x(), u(...y));
              },
              j = () => {
                x();
              };
            ((g.flush = D), (g.cancel = j), (f.current = window.setTimeout(_, o)), C());
            return;
          }
          if (s && !b) {
            g._hasPendingCallback = !0;
            const _ = () => {
                f.current !== 0 && (x(), u(...y));
              },
              D = () => {
                x();
              };
            ((g.flush = _), (g.cancel = D));
            const j = () => {
              x();
            };
            ((f.current = window.setTimeout(j, o)), C());
            return;
          }
          g._hasPendingCallback = !0;
          const R = () => {
              f.current !== 0 && (x(), u(...y));
            },
            T = () => {
              x();
            };
          ((g.flush = R), (g.cancel = T), (f.current = window.setTimeout(R, o)), C());
        },
        {
          flush: () => {},
          cancel: () => {},
          isPending: () => g._hasPendingCallback,
          _isFirstCall: !0,
          _hasPendingCallback: !1,
        },
      );
      return g;
    }, [u, o, s, c]);
  return (
    S.useEffect(
      () => () => {
        l ? v.flush() : v.cancel();
      },
      [v, l],
    ),
    v
  );
}
const $2 = ["mousedown", "touchstart"];
function H2(e, r, o, l = !0) {
  const s = S.useRef(null),
    c = r || $2,
    u = S.useEffectEvent((d) => {
      const { target: m } = d ?? {};
      if (!document.body.contains(m) && m?.tagName !== "HTML") return;
      const v = d.composedPath();
      Array.isArray(o)
        ? o.every((g) => !!g && !v.includes(g)) && e(d)
        : s.current && !v.includes(s.current) && e(d);
    }),
    f = c.join(",");
  return (
    S.useEffect(() => {
      if (!l) return;
      const d = f.split(",");
      return (
        d.forEach((m) => document.addEventListener(m, u)),
        () => {
          d.forEach((m) => document.removeEventListener(m, u));
        }
      );
    }, [f, l]),
    s
  );
}
function U2(e, r) {
  return typeof window < "u" && "matchMedia" in window ? window.matchMedia(e).matches : !1;
}
function Ho(e, r, { getInitialValueInEffect: o } = { getInitialValueInEffect: !0 }) {
  const [l, s] = S.useState(o ? r : U2(e));
  return (
    S.useEffect(() => {
      try {
        if ("matchMedia" in window) {
          const c = window.matchMedia(e);
          s(c.matches);
          const u = (f) => s(f.matches);
          return (
            c.addEventListener("change", u),
            () => {
              c.removeEventListener("change", u);
            }
          );
        }
      } catch {
        return;
      }
    }, [e]),
    l || !1
  );
}
function P2(e, r) {
  return Ho("(prefers-color-scheme: dark)", e === "dark", r) ? "dark" : "light";
}
const Cl = typeof document < "u" ? S.useLayoutEffect : S.useEffect;
function yl(e, r) {
  const o = S.useRef(!1);
  (S.useEffect(
    () => () => {
      o.current = !1;
    },
    [],
  ),
    S.useEffect(() => {
      if (o.current) return e();
      o.current = !0;
    }, r));
}
function wS({ opened: e, shouldReturnFocus: r = !0 }) {
  const o = S.useRef(null),
    l = () => {
      o.current &&
        "focus" in o.current &&
        typeof o.current.focus == "function" &&
        o.current?.focus({ preventScroll: !0 });
    };
  return (
    yl(() => {
      let s = -1;
      const c = (u) => {
        u.key === "Tab" && window.clearTimeout(s);
      };
      if ((document.addEventListener("keydown", c), e)) o.current = document.activeElement;
      else if (r) {
        const u = document.activeElement;
        s = window.setTimeout(() => {
          const f = document.activeElement;
          (f === null || f === document.body || f === u) && l();
        }, 10);
      }
      return () => {
        (window.clearTimeout(s), document.removeEventListener("keydown", c));
      };
    }, [e, r]),
    l
  );
}
const V2 = /input|select|textarea|button|object/,
  xS = "a, input, select, textarea, button, object, [tabindex]";
function I2(e) {
  return e.style.display === "none";
}
function F2(e) {
  if (
    e.getAttribute("aria-hidden") ||
    e.getAttribute("hidden") ||
    e.getAttribute("type") === "hidden"
  )
    return !1;
  let r = e;
  for (; r && !(r === document.body || r.nodeType === 11); ) {
    if (I2(r)) return !1;
    r = r.parentNode;
  }
  return !0;
}
function CS(e) {
  let r = e.getAttribute("tabindex");
  return (r === null && (r = void 0), parseInt(r, 10));
}
function qm(e) {
  const r = e.nodeName.toLowerCase(),
    o = !Number.isNaN(CS(e));
  return ((V2.test(r) && !e.disabled) || (e instanceof HTMLAnchorElement && e.href) || o) && F2(e);
}
function ES(e) {
  const r = CS(e);
  return (Number.isNaN(r) || r >= 0) && qm(e);
}
function q2(e) {
  return Array.from(e.querySelectorAll(xS)).filter(ES);
}
function Y2(e, r) {
  const o = q2(e);
  if (!o.length) {
    r.preventDefault();
    return;
  }
  const l = o[r.shiftKey ? 0 : o.length - 1],
    s = e.getRootNode();
  let c = l === s.activeElement || e === s.activeElement;
  const u = s.activeElement;
  if (
    (u.tagName === "INPUT" &&
      u.getAttribute("type") === "radio" &&
      (c = o
        .filter(
          (d) =>
            d.getAttribute("type") === "radio" && d.getAttribute("name") === u.getAttribute("name"),
        )
        .includes(l)),
    !c)
  )
    return;
  r.preventDefault();
  const f = o[r.shiftKey ? o.length - 1 : 0];
  f && f.focus();
}
function G2(e = !0) {
  const r = S.useRef(null),
    o = (s) => {
      let c = s.querySelector("[data-autofocus]");
      if (!c) {
        const u = Array.from(s.querySelectorAll(xS));
        ((c = u.find(ES) || u.find(qm) || null), !c && qm(s) && (c = s));
      }
      c
        ? c.focus({ preventScroll: !0 })
        : console.warn(
            "[@mantine/hooks/use-focus-trap] Failed to find focusable element within provided node",
            s,
          );
    },
    l = S.useCallback(
      (s) => {
        if (e) {
          if (s === null) {
            r.current = null;
            return;
          }
          r.current !== s &&
            (setTimeout(() => {
              s.getRootNode()
                ? o(s)
                : console.warn(
                    "[@mantine/hooks/use-focus-trap] Ref node is not part of the dom",
                    s,
                  );
            }),
            (r.current = s));
        }
      },
      [e],
    );
  return (
    S.useEffect(() => {
      if (!e) return;
      r.current &&
        setTimeout(() => {
          r.current && o(r.current);
        });
      const s = (c) => {
        c.key === "Tab" && r.current && Y2(r.current, c);
      };
      return (
        document.addEventListener("keydown", s),
        () => document.removeEventListener("keydown", s)
      );
    }, [e]),
    l
  );
}
function Wr(e) {
  const [r, o] = S.useState(`mantine-${S.useId().replace(/:/g, "")}`);
  return (
    Cl(() => {
      o(B2());
    }, []),
    typeof e == "string" ? e : r
  );
}
function X2(e, r, o) {
  const l = S.useEffectEvent(r);
  S.useEffect(
    () => (window.addEventListener(e, l, o), () => window.removeEventListener(e, l, o)),
    [e],
  );
}
function Wu(e, r) {
  if (typeof e == "function") return e(r);
  typeof e == "object" && e !== null && "current" in e && (e.current = r);
}
function vp(...e) {
  const r = new Map();
  return (o) => {
    if (
      (e.forEach((l) => {
        const s = Wu(l, o);
        s && r.set(l, s);
      }),
      r.size > 0)
    )
      return () => {
        (e.forEach((l) => {
          const s = r.get(l);
          s && typeof s == "function" ? s() : Wu(l, null);
        }),
          r.clear());
      };
  };
}
function tn(...e) {
  return S.useCallback(vp(...e), e);
}
function Yr({ value: e, defaultValue: r, finalValue: o, onChange: l = () => {} }) {
  const [s, c] = S.useState(r !== void 0 ? r : o),
    u = (f, ...d) => {
      (c(f), l?.(f, ...d));
    };
  return e !== void 0 ? [e, l, !0] : [s, u, !1];
}
function yp(e, r) {
  return Ho("(prefers-reduced-motion: reduce)", e, r);
}
function bp(e = !1, r = {}) {
  const [o, l] = S.useState(e),
    s = S.useCallback(() => {
      l((u) => u || (r.onOpen?.(), !0));
    }, [r.onOpen]),
    c = S.useCallback(() => {
      l((u) => u && (r.onClose?.(), !1));
    }, [r.onClose]);
  return [
    o,
    {
      open: s,
      close: c,
      toggle: S.useCallback(() => {
        o ? c() : s();
      }, [c, s, o]),
      set: l,
    },
  ];
}
var da = pS();
const K2 = fp(da);
function Q2(e) {
  if (!e || typeof e == "string") return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function um(e) {
  return e.current ? e.current.scrollHeight : "auto";
}
function Z2({
  transitionDuration: e,
  transitionTimingFunction: r = "ease",
  onTransitionEnd: o,
  onTransitionStart: l,
  expanded: s,
  keepMounted: c,
}) {
  const u = { height: 0, overflow: "hidden", ...(c ? {} : { display: "none" }) },
    f = S.useEffectEvent(() => l?.()),
    d = S.useRef(null),
    [m, v] = S.useState(s ? {} : u),
    [g, y] = S.useState(s ? "entered" : "exited"),
    b = (T) => {
      da.flushSync(() => v(T));
    },
    x = (T) => {
      b((_) => ({ ..._, ...T }));
    },
    C = (T) => {
      const _ = e ?? Q2(T);
      return { transition: `height ${_}ms ${r}, opacity ${_}ms ${r}` };
    };
  yl(() => {
    (e !== 0 && f(),
      s
        ? window.requestAnimationFrame(() => {
            (da.flushSync(() => y("entering")),
              x({ willChange: "height", display: "block", overflow: "hidden" }),
              window.requestAnimationFrame(() => {
                const T = um(d);
                x({ ...C(T), height: T });
              }));
          })
        : window.requestAnimationFrame(() => {
            da.flushSync(() => y("exiting"));
            const T = um(d);
            (x({ ...C(T), willChange: "height", height: T }),
              window.requestAnimationFrame(() => x({ height: 0, overflow: "hidden" })));
          }));
  }, [s]);
  const R = (T) => {
    if (!(T.target !== d.current || T.propertyName !== "height"))
      if (s) {
        const _ = um(d);
        (_ === m.height ? b({}) : x({ height: _ }), y("entered"), o?.());
      } else m.height === 0 && (b(u), y("exited"), o?.());
  };
  return {
    state: g,
    getCollapseProps: (T) => ({
      "aria-hidden": !s,
      inert: !s,
      ref: vp(d, T?.ref),
      onTransitionEnd: R,
      style: { boxSizing: "border-box", ...T?.style, ...m },
    }),
  };
}
function W2(e) {
  if (!e || typeof e == "string") return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function fm(e) {
  return e.current ? e.current.scrollWidth : "auto";
}
function J2({
  transitionDuration: e,
  transitionTimingFunction: r = "ease",
  onTransitionEnd: o,
  onTransitionStart: l,
  expanded: s,
  keepMounted: c,
}) {
  const u = { width: 0, overflow: "hidden", ...(c ? {} : { display: "none" }) },
    f = S.useEffectEvent(() => l?.()),
    d = S.useRef(null),
    [m, v] = S.useState(s ? {} : u),
    [g, y] = S.useState(s ? "entered" : "exited"),
    b = (T) => {
      da.flushSync(() => v(T));
    },
    x = (T) => {
      b((_) => ({ ..._, ...T }));
    },
    C = (T) => {
      const _ = e ?? W2(T);
      return { transition: `width ${_}ms ${r}, opacity ${_}ms ${r}` };
    };
  yl(() => {
    (e !== 0 && f(),
      s
        ? window.requestAnimationFrame(() => {
            (da.flushSync(() => y("entering")),
              x({ willChange: "width", display: "block", overflow: "hidden" }),
              window.requestAnimationFrame(() => {
                const T = fm(d);
                x({ ...C(T), width: T });
              }));
          })
        : window.requestAnimationFrame(() => {
            da.flushSync(() => y("exiting"));
            const T = fm(d);
            (x({ ...C(T), willChange: "width", width: T }),
              window.requestAnimationFrame(() => x({ width: 0, overflow: "hidden" })));
          }));
  }, [s]);
  const R = (T) => {
    if (!(T.target !== d.current || T.propertyName !== "width"))
      if (s) {
        const _ = fm(d);
        (_ === m.width ? b({}) : x({ width: _ }), y("entered"), o?.());
      } else m.width === 0 && (b(u), y("exited"), o?.());
  };
  return {
    state: g,
    getCollapseProps: (T) => ({
      "aria-hidden": !s,
      inert: !s,
      ref: vp(d, T?.ref),
      onTransitionEnd: R,
      style: { boxSizing: "border-box", ...T?.style, ...m },
    }),
  };
}
function hf(e) {
  const r = Va.version;
  return typeof Va.version != "string" || r.startsWith("18.") ? e?.ref : e?.props?.ref;
}
function Hu(e, r = document) {
  const o = r.querySelector(e);
  if (o) return o;
  const l = r.querySelectorAll("*");
  for (let s = 0; s < l.length; s += 1) {
    const c = l[s];
    if (c.shadowRoot) {
      const u = Hu(e, c.shadowRoot);
      if (u) return u;
    }
  }
  return null;
}
function Pa(e, r = document) {
  const o = [],
    l = r.querySelectorAll(e);
  o.push(...Array.from(l));
  const s = r.querySelectorAll("*");
  for (let c = 0; c < s.length; c += 1) {
    const u = s[c];
    if (u.shadowRoot) {
      const f = Pa(e, u.shadowRoot);
      o.push(...f);
    }
  }
  return o;
}
function Ua(e) {
  if (!e) return document;
  const r = e.getRootNode();
  return r instanceof ShadowRoot || r instanceof Document ? r : document;
}
function El(e) {
  const r = S.Children.toArray(e);
  return r.length !== 1 || !pp(r[0]) ? null : r[0];
}
function RS(e) {
  var r,
    o,
    l = "";
  if (typeof e == "string" || typeof e == "number") l += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (r = 0; r < s; r++) e[r] && (o = RS(e[r])) && (l && (l += " "), (l += o));
    } else for (o in e) e[o] && (l && (l += " "), (l += o));
  return l;
}
function Dn() {
  for (var e, r, o = 0, l = "", s = arguments.length; o < s; o++)
    (e = arguments[o]) && (r = RS(e)) && (l && (l += " "), (l += r));
  return l;
}
const eT = {};
function tT(e) {
  const r = {};
  return (
    e.forEach((o) => {
      Object.entries(o).forEach(([l, s]) => {
        r[l] ? (r[l] = Dn(r[l], s)) : (r[l] = s);
      });
    }),
    r
  );
}
function Us({ theme: e, classNames: r, props: o, stylesCtx: l }) {
  return tT(
    (Array.isArray(r) ? r : [r]).map((s) => (typeof s == "function" ? s(e, o, l) : s || eT)),
  );
}
function Ju({ theme: e, styles: r, props: o, stylesCtx: l }) {
  const s = Array.isArray(r) ? r : [r],
    c = {};
  for (const u of s)
    typeof u == "function" ? Object.assign(c, u(e, o, l)) : u && Object.assign(c, u);
  return c;
}
function z0(e) {
  return e === "auto" || e === "dark" || e === "light";
}
function nT({ key: e = "mantine-color-scheme-value" } = {}) {
  let r;
  return {
    get: (o) => {
      if (typeof window > "u") return o;
      try {
        const l = window.localStorage.getItem(e);
        return z0(l) ? l : o;
      } catch {
        return o;
      }
    },
    set: (o) => {
      try {
        window.localStorage.setItem(e, o);
      } catch (l) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          l,
        );
      }
    },
    subscribe: (o) => {
      ((r = (l) => {
        l.storageArea === window.localStorage && l.key === e && z0(l.newValue) && o(l.newValue);
      }),
        window.addEventListener("storage", r));
    },
    unsubscribe: () => {
      window.removeEventListener("storage", r);
    },
    clear: () => {
      window.localStorage.removeItem(e);
    },
  };
}
function Ps(e, r) {
  return typeof e.primaryShade == "number"
    ? e.primaryShade
    : r === "dark"
      ? e.primaryShade.dark
      : e.primaryShade.light;
}
function rT(e) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e);
}
function aT(e) {
  let r = e.replace("#", "");
  if (r.length === 3) {
    const l = r.split("");
    r = [l[0], l[0], l[1], l[1], l[2], l[2]].join("");
  }
  if (r.length === 8) {
    const l = parseInt(r.slice(6, 8), 16) / 255;
    return {
      r: parseInt(r.slice(0, 2), 16),
      g: parseInt(r.slice(2, 4), 16),
      b: parseInt(r.slice(4, 6), 16),
      a: l,
    };
  }
  const o = parseInt(r, 16);
  return { r: (o >> 16) & 255, g: (o >> 8) & 255, b: o & 255, a: 1 };
}
function oT(e) {
  const [r, o, l, s] = e
    .replace(/[^0-9,./]/g, "")
    .split(/[/,]/)
    .map(Number);
  return { r, g: o, b: l, a: s === void 0 ? 1 : s };
}
function lT(e) {
  const r = e.match(
    /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i,
  );
  if (!r) return { r: 0, g: 0, b: 0, a: 1 };
  const o = parseInt(r[1], 10),
    l = parseInt(r[2], 10) / 100,
    s = parseInt(r[3], 10) / 100,
    c = r[5] ? parseFloat(r[5]) : void 0,
    u = (1 - Math.abs(2 * s - 1)) * l,
    f = o / 60,
    d = u * (1 - Math.abs((f % 2) - 1)),
    m = s - u / 2;
  let v, g, y;
  return (
    f >= 0 && f < 1
      ? ((v = u), (g = d), (y = 0))
      : f >= 1 && f < 2
        ? ((v = d), (g = u), (y = 0))
        : f >= 2 && f < 3
          ? ((v = 0), (g = u), (y = d))
          : f >= 3 && f < 4
            ? ((v = 0), (g = d), (y = u))
            : f >= 4 && f < 5
              ? ((v = d), (g = 0), (y = u))
              : ((v = u), (g = 0), (y = d)),
    {
      r: Math.round((v + m) * 255),
      g: Math.round((g + m) * 255),
      b: Math.round((y + m) * 255),
      a: c || 1,
    }
  );
}
function Sp(e) {
  return rT(e)
    ? aT(e)
    : e.startsWith("rgb")
      ? oT(e)
      : e.startsWith("hsl")
        ? lT(e)
        : { r: 0, g: 0, b: 0, a: 1 };
}
function dm(e) {
  return e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
}
function iT(e) {
  const r = e.match(/oklch\((.*?)%\s/);
  return r ? parseFloat(r[1]) : null;
}
function sT(e) {
  if (e.startsWith("oklch(")) return (iT(e) || 0) / 100;
  const { r, g: o, b: l } = Sp(e),
    s = r / 255,
    c = o / 255,
    u = l / 255,
    f = dm(s),
    d = dm(c),
    m = dm(u);
  return 0.2126 * f + 0.7152 * d + 0.0722 * m;
}
function xs(e, r = 0.179) {
  return e.startsWith("var(") ? !1 : sT(e) > r;
}
function Ka({ color: e, theme: r, colorScheme: o }) {
  if (typeof e != "string")
    throw new Error(
      `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof e}`,
    );
  if (e === "bright")
    return {
      color: e,
      value: o === "dark" ? r.white : r.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: xs(o === "dark" ? r.white : r.black, r.luminanceThreshold),
      variable: "--mantine-color-bright",
    };
  if (e === "dimmed")
    return {
      color: e,
      value: o === "dark" ? r.colors.dark[2] : r.colors.gray[7],
      shade: void 0,
      isThemeColor: !1,
      isLight: xs(o === "dark" ? r.colors.dark[2] : r.colors.gray[6], r.luminanceThreshold),
      variable: "--mantine-color-dimmed",
    };
  if (e === "white" || e === "black")
    return {
      color: e,
      value: e === "white" ? r.white : r.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: xs(e === "white" ? r.white : r.black, r.luminanceThreshold),
      variable: `--mantine-color-${e}`,
    };
  const [l, s] = e.split("."),
    c = s ? Number(s) : void 0,
    u = l in r.colors;
  if (u) {
    const f = c !== void 0 ? r.colors[l][c] : r.colors[l][Ps(r, o || "light")];
    return {
      color: l,
      value: f,
      shade: c,
      isThemeColor: u,
      isLight: xs(f, r.luminanceThreshold),
      variable: s ? `--mantine-color-${l}-${c}` : `--mantine-color-${l}-filled`,
    };
  }
  return {
    color: e,
    value: e,
    isThemeColor: u,
    isLight: xs(e, r.luminanceThreshold),
    shade: c,
    variable: void 0,
  };
}
function ur(e, r) {
  const o = Ka({ color: e || r.primaryColor, theme: r });
  return o.variable ? `var(${o.variable})` : e;
}
function ul(e, r) {
  if (e.startsWith("var(")) return `color-mix(in srgb, ${e}, black ${r * 100}%)`;
  const { r: o, g: l, b: s, a: c } = Sp(e),
    u = 1 - r,
    f = (d) => Math.round(d * u);
  return `rgba(${f(o)}, ${f(l)}, ${f(s)}, ${c})`;
}
function Ym(e, r) {
  const o = {
      from: e?.from || r.defaultGradient.from,
      to: e?.to || r.defaultGradient.to,
      deg: e?.deg ?? r.defaultGradient.deg ?? 0,
    },
    l = ur(o.from, r),
    s = ur(o.to, r);
  return `linear-gradient(${o.deg}deg, ${l} 0%, ${s} 100%)`;
}
function No(e, r) {
  if (typeof e != "string" || r > 1 || r < 0) return "rgba(0, 0, 0, 1)";
  if (e.startsWith("var(")) return `color-mix(in srgb, ${e}, transparent ${(1 - r) * 100}%)`;
  if (e.startsWith("oklch"))
    return e.includes("/") ? e.replace(/\/\s*[\d.]+\s*\)/, `/ ${r})`) : e.replace(")", ` / ${r})`);
  const { r: o, g: l, b: s } = Sp(e);
  return `rgba(${o}, ${l}, ${s}, ${r})`;
}
const k0 = No,
  cT = ({ color: e, theme: r, variant: o, gradient: l, autoContrast: s }) => {
    const c = Ka({ color: e, theme: r }),
      u = typeof s == "boolean" ? s : r.autoContrast;
    if (o === "none")
      return { background: "transparent", hover: "transparent", color: "inherit", border: "none" };
    if (o === "filled") {
      const f = u && c.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
      return c.isThemeColor
        ? c.shade === void 0
          ? {
              background: `var(--mantine-color-${e}-filled)`,
              hover: `var(--mantine-color-${e}-filled-hover)`,
              color: f,
              border: `${pe(1)} solid transparent`,
            }
          : {
              background: `var(--mantine-color-${c.color}-${c.shade})`,
              hover: `var(--mantine-color-${c.color}-${c.shade === 9 ? 8 : c.shade + 1})`,
              color: f,
              border: `${pe(1)} solid transparent`,
            }
        : { background: e, hover: ul(e, 0.1), color: f, border: `${pe(1)} solid transparent` };
    }
    if (o === "light") {
      if (c.isThemeColor) {
        if (c.shade === void 0)
          return {
            background: `var(--mantine-color-${e}-light)`,
            hover: `var(--mantine-color-${e}-light-hover)`,
            color: `var(--mantine-color-${e}-light-color)`,
            border: `${pe(1)} solid transparent`,
          };
        const f = r.colors[c.color][c.shade];
        return {
          background: f,
          hover: ul(f, 0.1),
          color: `var(--mantine-color-${c.color}-light-color)`,
          border: `${pe(1)} solid transparent`,
        };
      }
      return {
        background: No(e, 0.1),
        hover: No(e, 0.12),
        color: e,
        border: `${pe(1)} solid transparent`,
      };
    }
    if (o === "outline")
      return c.isThemeColor
        ? c.shade === void 0
          ? {
              background: "transparent",
              hover: `var(--mantine-color-${e}-outline-hover)`,
              color: `var(--mantine-color-${e}-outline)`,
              border: `${pe(1)} solid var(--mantine-color-${e}-outline)`,
            }
          : {
              background: "transparent",
              hover: No(r.colors[c.color][c.shade], 0.05),
              color: `var(--mantine-color-${c.color}-${c.shade})`,
              border: `${pe(1)} solid var(--mantine-color-${c.color}-${c.shade})`,
            }
        : {
            background: "transparent",
            hover: No(e, 0.05),
            color: e,
            border: `${pe(1)} solid ${e}`,
          };
    if (o === "subtle") {
      if (c.isThemeColor) {
        if (c.shade === void 0)
          return {
            background: "transparent",
            hover: `var(--mantine-color-${e}-light-hover)`,
            color: `var(--mantine-color-${e}-light-color)`,
            border: `${pe(1)} solid transparent`,
          };
        const f = r.colors[c.color][c.shade];
        return {
          background: "transparent",
          hover: No(f, 0.12),
          color: `var(--mantine-color-${c.color}-${Math.min(c.shade, 6)})`,
          border: `${pe(1)} solid transparent`,
        };
      }
      return {
        background: "transparent",
        hover: No(e, 0.12),
        color: e,
        border: `${pe(1)} solid transparent`,
      };
    }
    return o === "transparent"
      ? c.isThemeColor
        ? c.shade === void 0
          ? {
              background: "transparent",
              hover: "transparent",
              color: `var(--mantine-color-${e}-light-color)`,
              border: `${pe(1)} solid transparent`,
            }
          : {
              background: "transparent",
              hover: "transparent",
              color: `var(--mantine-color-${c.color}-${Math.min(c.shade, 6)})`,
              border: `${pe(1)} solid transparent`,
            }
        : {
            background: "transparent",
            hover: "transparent",
            color: e,
            border: `${pe(1)} solid transparent`,
          }
      : o === "white"
        ? c.isThemeColor
          ? c.shade === void 0
            ? {
                background: "var(--mantine-color-white)",
                hover: ul(r.white, 0.01),
                color: `var(--mantine-color-${e}-filled)`,
                border: `${pe(1)} solid transparent`,
              }
            : {
                background: "var(--mantine-color-white)",
                hover: ul(r.white, 0.01),
                color: `var(--mantine-color-${c.color}-${c.shade})`,
                border: `${pe(1)} solid transparent`,
              }
          : {
              background: "var(--mantine-color-white)",
              hover: ul(r.white, 0.01),
              color: e,
              border: `${pe(1)} solid transparent`,
            }
        : o === "gradient"
          ? {
              background: Ym(l, r),
              hover: Ym(l, r),
              color: "var(--mantine-color-white)",
              border: "none",
            }
          : o === "default"
            ? {
                background: "var(--mantine-color-default)",
                hover: "var(--mantine-color-default-hover)",
                color: "var(--mantine-color-default-color)",
                border: `${pe(1)} solid var(--mantine-color-default-border)`,
              }
            : {};
  };
function wp({ color: e, theme: r, autoContrast: o }) {
  return (typeof o == "boolean" ? o : r.autoContrast) &&
    Ka({ color: e || r.primaryColor, theme: r }).isLight
    ? "var(--mantine-color-black)"
    : "var(--mantine-color-white)";
}
function L0(e, r) {
  return wp({ color: e.colors[e.primaryColor][Ps(e, r)], theme: e, autoContrast: null });
}
function TS(e, r) {
  return typeof e == "boolean" ? e : r.autoContrast;
}
const xp = S.createContext(null);
function Qa() {
  const e = S.use(xp);
  if (!e) throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return e;
}
function uT() {
  return Qa().cssVariablesResolver;
}
function fT() {
  return Qa().classNamesPrefix;
}
function mf() {
  return Qa().getStyleNonce;
}
function dT() {
  return Qa().withStaticClasses;
}
function hT() {
  return Qa().headless;
}
function mT() {
  return Qa().stylesTransform?.sx;
}
function pT() {
  return Qa().stylesTransform?.styles;
}
function ec() {
  return Qa().env || "default";
}
function gT() {
  return Qa().deduplicateInlineStyles;
}
function B0(e) {
  const r = document.createElement("style");
  return (
    r.setAttribute("data-mantine-styles", "inline"),
    (r.innerHTML = "*, *::before, *::after {transition: none !important;}"),
    r.setAttribute("data-mantine-disable-transition", "true"),
    e && r.setAttribute("nonce", e),
    document.head.appendChild(r),
    () => document.querySelectorAll("[data-mantine-disable-transition]").forEach((l) => l.remove())
  );
}
function vT({ keepTransitions: e } = {}) {
  const r = S.useRef(Zu),
    o = S.useRef(-1),
    l = S.use(xp),
    s = S.useRef(mf()?.());
  if (!l) throw new Error("[@mantine/core] MantineProvider was not found in tree");
  const c = (v) => {
      (l.setColorScheme(v),
        (r.current = e ? () => {} : B0(s.current)),
        window.clearTimeout(o.current),
        (o.current = window.setTimeout(() => {
          r.current?.();
        }, 10)));
    },
    u = () => {
      (l.clearColorScheme(),
        (r.current = e ? () => {} : B0(s.current)),
        window.clearTimeout(o.current),
        (o.current = window.setTimeout(() => {
          r.current?.();
        }, 10)));
    },
    f = P2("light", { getInitialValueInEffect: !1 }),
    d = l.colorScheme === "auto" ? f : l.colorScheme,
    m = S.useCallback(() => c(d === "light" ? "dark" : "light"), [c, d]);
  return (
    S.useEffect(
      () => () => {
        (r.current?.(), window.clearTimeout(o.current));
      },
      [],
    ),
    { colorScheme: l.colorScheme, setColorScheme: c, clearColorScheme: u, toggleColorScheme: m }
  );
}
function ii(e, r) {
  const o =
      typeof window < "u" &&
      "matchMedia" in window &&
      window.matchMedia("(prefers-color-scheme: dark)")?.matches,
    l = e !== "auto" ? e : o ? "dark" : "light";
  r()?.setAttribute("data-mantine-color-scheme", l);
}
function yT({ manager: e, defaultColorScheme: r, getRootElement: o, forceColorScheme: l }) {
  const s = S.useRef(null),
    [c, u] = S.useState(() => e.get(r)),
    f = l || c,
    d = S.useCallback(
      (v) => {
        l || (ii(v, o), u(v), e.set(v));
      },
      [e.set, f, l],
    ),
    m = S.useCallback(() => {
      (u(r), ii(r, o), e.clear());
    }, [e.clear, r]);
  return (
    S.useEffect(() => (e.subscribe(d), e.unsubscribe), [e.subscribe, e.unsubscribe]),
    Cl(() => {
      ii(e.get(r), o);
    }, []),
    S.useEffect(() => {
      if (l) return (ii(l, o), () => {});
      (l === void 0 && ii(c, o),
        typeof window < "u" &&
          "matchMedia" in window &&
          (s.current = window.matchMedia("(prefers-color-scheme: dark)")));
      const v = (g) => {
        c === "auto" && ii(g.matches ? "dark" : "light", o);
      };
      return (
        s.current?.addEventListener("change", v),
        () => s.current?.removeEventListener("change", v)
      );
    }, [c, l]),
    { colorScheme: f, setColorScheme: d, clearColorScheme: m }
  );
}
const bT = {
    dark: [
      "#C9C9C9",
      "#b8b8b8",
      "#828282",
      "#696969",
      "#424242",
      "#3b3b3b",
      "#2e2e2e",
      "#242424",
      "#1f1f1f",
      "#141414",
    ],
    gray: [
      "#f8f9fa",
      "#f1f3f5",
      "#e9ecef",
      "#dee2e6",
      "#ced4da",
      "#adb5bd",
      "#868e96",
      "#495057",
      "#343a40",
      "#212529",
    ],
    red: [
      "#fff5f5",
      "#ffe3e3",
      "#ffc9c9",
      "#ffa8a8",
      "#ff8787",
      "#ff6b6b",
      "#fa5252",
      "#f03e3e",
      "#e03131",
      "#c92a2a",
    ],
    pink: [
      "#fff0f6",
      "#ffdeeb",
      "#fcc2d7",
      "#faa2c1",
      "#f783ac",
      "#f06595",
      "#e64980",
      "#d6336c",
      "#c2255c",
      "#a61e4d",
    ],
    grape: [
      "#f8f0fc",
      "#f3d9fa",
      "#eebefa",
      "#e599f7",
      "#da77f2",
      "#cc5de8",
      "#be4bdb",
      "#ae3ec9",
      "#9c36b5",
      "#862e9c",
    ],
    violet: [
      "#f3f0ff",
      "#e5dbff",
      "#d0bfff",
      "#b197fc",
      "#9775fa",
      "#845ef7",
      "#7950f2",
      "#7048e8",
      "#6741d9",
      "#5f3dc4",
    ],
    indigo: [
      "#edf2ff",
      "#dbe4ff",
      "#bac8ff",
      "#91a7ff",
      "#748ffc",
      "#5c7cfa",
      "#4c6ef5",
      "#4263eb",
      "#3b5bdb",
      "#364fc7",
    ],
    blue: [
      "#e7f5ff",
      "#d0ebff",
      "#a5d8ff",
      "#74c0fc",
      "#4dabf7",
      "#339af0",
      "#228be6",
      "#1c7ed6",
      "#1971c2",
      "#1864ab",
    ],
    cyan: [
      "#e3fafc",
      "#c5f6fa",
      "#99e9f2",
      "#66d9e8",
      "#3bc9db",
      "#22b8cf",
      "#15aabf",
      "#1098ad",
      "#0c8599",
      "#0b7285",
    ],
    teal: [
      "#e6fcf5",
      "#c3fae8",
      "#96f2d7",
      "#63e6be",
      "#38d9a9",
      "#20c997",
      "#12b886",
      "#0ca678",
      "#099268",
      "#087f5b",
    ],
    green: [
      "#ebfbee",
      "#d3f9d8",
      "#b2f2bb",
      "#8ce99a",
      "#69db7c",
      "#51cf66",
      "#40c057",
      "#37b24d",
      "#2f9e44",
      "#2b8a3e",
    ],
    lime: [
      "#f4fce3",
      "#e9fac8",
      "#d8f5a2",
      "#c0eb75",
      "#a9e34b",
      "#94d82d",
      "#82c91e",
      "#74b816",
      "#66a80f",
      "#5c940d",
    ],
    yellow: [
      "#fff9db",
      "#fff3bf",
      "#ffec99",
      "#ffe066",
      "#ffd43b",
      "#fcc419",
      "#fab005",
      "#f59f00",
      "#f08c00",
      "#e67700",
    ],
    orange: [
      "#fff4e6",
      "#ffe8cc",
      "#ffd8a8",
      "#ffc078",
      "#ffa94d",
      "#ff922b",
      "#fd7e14",
      "#f76707",
      "#e8590c",
      "#d9480f",
    ],
  },
  $0 =
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  Cp = {
    scale: 1,
    fontSmoothing: !0,
    focusRing: "auto",
    white: "#fff",
    black: "#000",
    colors: bT,
    primaryShade: { light: 6, dark: 8 },
    primaryColor: "blue",
    variantColorResolver: cT,
    autoContrast: !1,
    luminanceThreshold: 0.3,
    fontFamily: $0,
    fontFamilyMonospace:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    respectReducedMotion: !1,
    cursorType: "default",
    defaultGradient: { from: "blue", to: "cyan", deg: 45 },
    defaultRadius: "md",
    activeClassName: "mantine-active",
    focusClassName: "",
    headings: {
      fontFamily: $0,
      fontWeight: "700",
      textWrap: "wrap",
      sizes: {
        h1: { fontSize: pe(34), lineHeight: "1.3" },
        h2: { fontSize: pe(26), lineHeight: "1.35" },
        h3: { fontSize: pe(22), lineHeight: "1.4" },
        h4: { fontSize: pe(18), lineHeight: "1.45" },
        h5: { fontSize: pe(16), lineHeight: "1.5" },
        h6: { fontSize: pe(14), lineHeight: "1.5" },
      },
    },
    fontSizes: { xs: pe(12), sm: pe(14), md: pe(16), lg: pe(18), xl: pe(20) },
    lineHeights: { xs: "1.4", sm: "1.45", md: "1.55", lg: "1.6", xl: "1.65" },
    fontWeights: { regular: "400", medium: "600", bold: "700" },
    radius: { xs: pe(2), sm: pe(4), md: pe(8), lg: pe(16), xl: pe(32) },
    spacing: { xs: pe(10), sm: pe(12), md: pe(16), lg: pe(20), xl: pe(32) },
    breakpoints: { xs: "36em", sm: "48em", md: "62em", lg: "75em", xl: "88em" },
    shadows: {
      xs: `0 ${pe(1)} ${pe(3)} rgba(0, 0, 0, 0.05), 0 ${pe(1)} ${pe(2)} rgba(0, 0, 0, 0.1)`,
      sm: `0 ${pe(1)} ${pe(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${pe(10)} ${pe(15)} ${pe(-5)}, rgba(0, 0, 0, 0.04) 0 ${pe(7)} ${pe(7)} ${pe(-5)}`,
      md: `0 ${pe(1)} ${pe(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${pe(20)} ${pe(25)} ${pe(-5)}, rgba(0, 0, 0, 0.04) 0 ${pe(10)} ${pe(10)} ${pe(-5)}`,
      lg: `0 ${pe(1)} ${pe(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${pe(28)} ${pe(23)} ${pe(-7)}, rgba(0, 0, 0, 0.04) 0 ${pe(12)} ${pe(12)} ${pe(-7)}`,
      xl: `0 ${pe(1)} ${pe(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${pe(36)} ${pe(28)} ${pe(-7)}, rgba(0, 0, 0, 0.04) 0 ${pe(17)} ${pe(17)} ${pe(-7)}`,
    },
    other: {},
    components: {},
  },
  ST =
    "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color",
  H0 =
    "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function hm(e) {
  return e < 0 || e > 9 ? !1 : parseInt(e.toString(), 10) === e;
}
function U0(e) {
  if (!(e.primaryColor in e.colors)) throw new Error(ST);
  if (typeof e.primaryShade == "object" && (!hm(e.primaryShade.dark) || !hm(e.primaryShade.light)))
    throw new Error(H0);
  if (typeof e.primaryShade == "number" && !hm(e.primaryShade)) throw new Error(H0);
}
function wT(e, r) {
  if (!r) return (U0(e), e);
  const o = hp(e, r);
  return (
    r.fontFamily &&
      !r.headings?.fontFamily &&
      (o.headings = { ...o.headings, fontFamily: r.fontFamily }),
    U0(o),
    o
  );
}
const Ep = S.createContext(null),
  xT = () => S.use(Ep) || Cp;
function mn() {
  const e = S.use(Ep);
  if (!e)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app",
    );
  return e;
}
function _S({ theme: e, children: r, inherit: o = !0 }) {
  const l = xT();
  return w.jsx(Ep, { value: S.useMemo(() => wT(o ? l : Cp, e), [e, l, o]), children: r });
}
_S.displayName = "@mantine/core/MantineThemeProvider";
function mm(e) {
  return Object.entries(e)
    .map(([r, o]) => `${r}: ${o};`)
    .join("");
}
function DS(e, r) {
  const o = r ? [r] : [":root", ":host"],
    l = mm(e.variables),
    s = l ? `${o.join(", ")}{${l}}` : "",
    c = mm(e.dark),
    u = mm(e.light),
    f = (d) =>
      o
        .map((m) =>
          m === ":host"
            ? `${m}([data-mantine-color-scheme="${d}"])`
            : `${m}[data-mantine-color-scheme="${d}"]`,
        )
        .join(", ");
  return `${s}

${c ? `${f("dark")}{${c}}` : ""}

${u ? `${f("light")}{${u}}` : ""}`;
}
function _u({ theme: e, color: r, colorScheme: o, name: l = r, withColorValues: s = !0 }) {
  if (!e.colors[r]) return {};
  if (o === "light") {
    const f = Ps(e, "light"),
      d = {
        [`--mantine-color-${l}-text`]: `var(--mantine-color-${l}-filled)`,
        [`--mantine-color-${l}-filled`]: `var(--mantine-color-${l}-${f})`,
        [`--mantine-color-${l}-filled-hover`]: `var(--mantine-color-${l}-${f === 9 ? 8 : f + 1})`,
        [`--mantine-color-${l}-light`]: `var(--mantine-color-${l}-1)`,
        [`--mantine-color-${l}-light-hover`]: `var(--mantine-color-${l}-2)`,
        [`--mantine-color-${l}-light-color`]: `var(--mantine-color-${l}-9)`,
        [`--mantine-color-${l}-outline`]: `var(--mantine-color-${l}-${f})`,
        [`--mantine-color-${l}-outline-hover`]: k0(e.colors[r][f], 0.05),
      };
    return s
      ? {
          [`--mantine-color-${l}-0`]: e.colors[r][0],
          [`--mantine-color-${l}-1`]: e.colors[r][1],
          [`--mantine-color-${l}-2`]: e.colors[r][2],
          [`--mantine-color-${l}-3`]: e.colors[r][3],
          [`--mantine-color-${l}-4`]: e.colors[r][4],
          [`--mantine-color-${l}-5`]: e.colors[r][5],
          [`--mantine-color-${l}-6`]: e.colors[r][6],
          [`--mantine-color-${l}-7`]: e.colors[r][7],
          [`--mantine-color-${l}-8`]: e.colors[r][8],
          [`--mantine-color-${l}-9`]: e.colors[r][9],
          ...d,
        }
      : d;
  }
  const c = Ps(e, "dark"),
    u = {
      [`--mantine-color-${l}-text`]: `var(--mantine-color-${l}-4)`,
      [`--mantine-color-${l}-filled`]: `var(--mantine-color-${l}-${c})`,
      [`--mantine-color-${l}-filled-hover`]: `var(--mantine-color-${l}-${c === 9 ? 8 : c + 1})`,
      [`--mantine-color-${l}-light`]: ul(e.colors[r][9], 0.5),
      [`--mantine-color-${l}-light-hover`]: ul(e.colors[r][9], 0.3),
      [`--mantine-color-${l}-light-color`]: `var(--mantine-color-${l}-0)`,
      [`--mantine-color-${l}-outline`]: `var(--mantine-color-${l}-${Math.max(c - 4, 0)})`,
      [`--mantine-color-${l}-outline-hover`]: k0(e.colors[r][Math.max(c - 4, 0)], 0.05),
    };
  return s
    ? {
        [`--mantine-color-${l}-0`]: e.colors[r][0],
        [`--mantine-color-${l}-1`]: e.colors[r][1],
        [`--mantine-color-${l}-2`]: e.colors[r][2],
        [`--mantine-color-${l}-3`]: e.colors[r][3],
        [`--mantine-color-${l}-4`]: e.colors[r][4],
        [`--mantine-color-${l}-5`]: e.colors[r][5],
        [`--mantine-color-${l}-6`]: e.colors[r][6],
        [`--mantine-color-${l}-7`]: e.colors[r][7],
        [`--mantine-color-${l}-8`]: e.colors[r][8],
        [`--mantine-color-${l}-9`]: e.colors[r][9],
        ...u,
      }
    : u;
}
function CT(e) {
  return !!e && typeof e == "object" && "mantine-virtual-color" in e;
}
function il(e, r, o) {
  wn(r).forEach((l) => Object.assign(e, { [`--mantine-${o}-${l}`]: r[l] }));
}
const AS = (e) => {
  const r = Ps(e, "light"),
    o = e.defaultRadius in e.radius ? e.radius[e.defaultRadius] : pe(e.defaultRadius),
    l = {
      variables: {
        "--mantine-z-index-app": "100",
        "--mantine-z-index-modal": "200",
        "--mantine-z-index-popover": "300",
        "--mantine-z-index-overlay": "400",
        "--mantine-z-index-max": "9999",
        "--mantine-scale": e.scale.toString(),
        "--mantine-cursor-type": e.cursorType,
        "--mantine-webkit-font-smoothing": e.fontSmoothing ? "antialiased" : "unset",
        "--mantine-moz-font-smoothing": e.fontSmoothing ? "grayscale" : "unset",
        "--mantine-color-white": e.white,
        "--mantine-color-black": e.black,
        "--mantine-line-height": e.lineHeights.md,
        "--mantine-font-family": e.fontFamily,
        "--mantine-font-family-monospace": e.fontFamilyMonospace,
        "--mantine-font-family-headings": e.headings.fontFamily,
        "--mantine-heading-font-weight": e.headings.fontWeight,
        "--mantine-heading-text-wrap": e.headings.textWrap,
        "--mantine-radius-default": o,
        "--mantine-primary-color-filled": `var(--mantine-color-${e.primaryColor}-filled)`,
        "--mantine-primary-color-filled-hover": `var(--mantine-color-${e.primaryColor}-filled-hover)`,
        "--mantine-primary-color-light": `var(--mantine-color-${e.primaryColor}-light)`,
        "--mantine-primary-color-light-hover": `var(--mantine-color-${e.primaryColor}-light-hover)`,
        "--mantine-primary-color-light-color": `var(--mantine-color-${e.primaryColor}-light-color)`,
      },
      light: {
        "--mantine-color-scheme": "light",
        "--mantine-primary-color-contrast": L0(e, "light"),
        "--mantine-color-bright": "var(--mantine-color-black)",
        "--mantine-color-text": e.black,
        "--mantine-color-body": e.white,
        "--mantine-color-error": "var(--mantine-color-red-6)",
        "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
        "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-${r})`,
        "--mantine-color-default": "var(--mantine-color-white)",
        "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
        "--mantine-color-default-color": "var(--mantine-color-black)",
        "--mantine-color-default-border": "var(--mantine-color-gray-4)",
        "--mantine-color-dimmed": "var(--mantine-color-gray-6)",
        "--mantine-color-disabled": "var(--mantine-color-gray-2)",
        "--mantine-color-disabled-color": "var(--mantine-color-gray-5)",
        "--mantine-color-disabled-border": "var(--mantine-color-gray-3)",
      },
      dark: {
        "--mantine-color-scheme": "dark",
        "--mantine-primary-color-contrast": L0(e, "dark"),
        "--mantine-color-bright": "var(--mantine-color-white)",
        "--mantine-color-text": "var(--mantine-color-dark-0)",
        "--mantine-color-body": "var(--mantine-color-dark-7)",
        "--mantine-color-error": "var(--mantine-color-red-8)",
        "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
        "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-4)`,
        "--mantine-color-default": "var(--mantine-color-dark-6)",
        "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
        "--mantine-color-default-color": "var(--mantine-color-white)",
        "--mantine-color-default-border": "var(--mantine-color-dark-4)",
        "--mantine-color-dimmed": "var(--mantine-color-dark-2)",
        "--mantine-color-disabled": "var(--mantine-color-dark-6)",
        "--mantine-color-disabled-color": "var(--mantine-color-dark-3)",
        "--mantine-color-disabled-border": "var(--mantine-color-dark-4)",
      },
    };
  (il(l.variables, e.breakpoints, "breakpoint"),
    il(l.variables, e.spacing, "spacing"),
    il(l.variables, e.fontSizes, "font-size"),
    il(l.variables, e.lineHeights, "line-height"),
    il(l.variables, e.shadows, "shadow"),
    il(l.variables, e.radius, "radius"),
    il(l.variables, e.fontWeights, "font-weight"),
    e.colors[e.primaryColor].forEach((c, u) => {
      l.variables[`--mantine-primary-color-${u}`] = `var(--mantine-color-${e.primaryColor}-${u})`;
    }),
    wn(e.colors).forEach((c) => {
      const u = e.colors[c];
      if (CT(u)) {
        (Object.assign(
          l.light,
          _u({ theme: e, name: u.name, color: u.light, colorScheme: "light", withColorValues: !0 }),
        ),
          Object.assign(
            l.dark,
            _u({ theme: e, name: u.name, color: u.dark, colorScheme: "dark", withColorValues: !0 }),
          ));
        return;
      }
      (u.forEach((f, d) => {
        l.variables[`--mantine-color-${c}-${d}`] = f;
      }),
        Object.assign(
          l.light,
          _u({ theme: e, color: c, colorScheme: "light", withColorValues: !1 }),
        ),
        Object.assign(
          l.dark,
          _u({ theme: e, color: c, colorScheme: "dark", withColorValues: !1 }),
        ));
    }));
  const s = e.headings.sizes;
  return (
    wn(s).forEach((c) => {
      ((l.variables[`--mantine-${c}-font-size`] = s[c].fontSize),
        (l.variables[`--mantine-${c}-line-height`] = s[c].lineHeight),
        (l.variables[`--mantine-${c}-font-weight`] = s[c].fontWeight || e.headings.fontWeight));
    }),
    l
  );
};
function ET() {
  const e = mn(),
    r = mf(),
    o = wn(e.breakpoints).reduce((l, s) => {
      const c = e.breakpoints[s].includes("px"),
        u = vl(e.breakpoints[s]);
      return `${l}@media (max-width: ${c ? `${u - 0.1}px` : j0(u - 0.1)}) {.mantine-visible-from-${s} {display: none !important;}}@media (min-width: ${c ? `${u}px` : j0(u)}) {.mantine-hidden-from-${s} {display: none !important;}}`;
    }, "");
  return w.jsx("style", {
    "data-mantine-styles": "classes",
    nonce: r?.(),
    dangerouslySetInnerHTML: { __html: o },
  });
}
function RT({ theme: e, generator: r }) {
  const o = AS(e),
    l = r?.(e);
  return l ? hp(o, l) : o;
}
const pm = AS(Cp);
function TT(e) {
  const r = { variables: {}, light: {}, dark: {} };
  return (
    wn(e.variables).forEach((o) => {
      pm.variables[o] !== e.variables[o] && (r.variables[o] = e.variables[o]);
    }),
    wn(e.light).forEach((o) => {
      pm.light[o] !== e.light[o] && (r.light[o] = e.light[o]);
    }),
    wn(e.dark).forEach((o) => {
      pm.dark[o] !== e.dark[o] && (r.dark[o] = e.dark[o]);
    }),
    r
  );
}
function _T(e) {
  return DS(
    {
      variables: {},
      dark: { "--mantine-color-scheme": "dark" },
      light: { "--mantine-color-scheme": "light" },
    },
    e,
  );
}
function MS({ cssVariablesSelector: e, deduplicateCssVariables: r }) {
  const o = mn(),
    l = mf(),
    s = RT({ theme: o, generator: uT() }),
    c = (e === void 0 || e === ":root" || e === ":host") && r,
    u = DS(c ? TT(s) : s, e);
  return u
    ? w.jsx("style", {
        "data-mantine-styles": !0,
        nonce: l?.(),
        dangerouslySetInnerHTML: { __html: `${u}${c ? "" : _T(e)}` },
      })
    : null;
}
MS.displayName = "@mantine/CssVariables";
function DT({ respectReducedMotion: e, getRootElement: r }) {
  Cl(() => {
    e && r()?.setAttribute("data-respect-reduced-motion", "true");
  }, [e]);
}
function NS({
  theme: e,
  children: r,
  getStyleNonce: o,
  withStaticClasses: l = !0,
  withGlobalClasses: s = !0,
  deduplicateCssVariables: c = !0,
  withCssVariables: u = !0,
  cssVariablesSelector: f,
  classNamesPrefix: d = "mantine",
  colorSchemeManager: m = nT(),
  defaultColorScheme: v = "light",
  getRootElement: g = () => document.documentElement,
  cssVariablesResolver: y,
  forceColorScheme: b,
  stylesTransform: x,
  env: C,
  deduplicateInlineStyles: R = !1,
}) {
  const {
    colorScheme: T,
    setColorScheme: _,
    clearColorScheme: D,
  } = yT({ defaultColorScheme: v, forceColorScheme: b, manager: m, getRootElement: g });
  return (
    DT({ respectReducedMotion: e?.respectReducedMotion || !1, getRootElement: g }),
    w.jsx(xp, {
      value: {
        colorScheme: T,
        setColorScheme: _,
        clearColorScheme: D,
        getRootElement: g,
        classNamesPrefix: d,
        getStyleNonce: o,
        cssVariablesResolver: y,
        cssVariablesSelector: f ?? ":root",
        withStaticClasses: l,
        stylesTransform: x,
        env: C,
        deduplicateInlineStyles: R,
      },
      children: w.jsxs(_S, {
        theme: e,
        children: [
          u && w.jsx(MS, { cssVariablesSelector: f, deduplicateCssVariables: c }),
          s && w.jsx(ET, {}),
          r,
        ],
      }),
    })
  );
}
NS.displayName = "@mantine/core/MantineProvider";
function Ee(e, r, o) {
  const l = mn(),
    s = (Array.isArray(e) ? e : [e]).filter(Boolean);
  let c = {};
  for (const u of s) {
    const f = l.components[u]?.defaultProps,
      d = typeof f == "function" ? f(l) : f;
    d && (c = { ...c, ...d });
  }
  return { ...r, ...c, ...xl(o) };
}
function tc({ classNames: e, styles: r, props: o, stylesCtx: l }) {
  const s = mn();
  return {
    resolvedClassNames:
      e === void 0 ? void 0 : Us({ theme: s, classNames: e, props: o, stylesCtx: l || void 0 }),
    resolvedStyles:
      r === void 0 ? void 0 : Ju({ theme: s, styles: r, props: o, stylesCtx: l || void 0 }),
  };
}
const AT = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never",
};
function MT({ theme: e, options: r, unstyled: o }) {
  return Dn(
    r?.focusable && !o && (e.focusClassName || AT[e.focusRing]),
    r?.active && !o && e.activeClassName,
  );
}
function NT({ selector: e, stylesCtx: r, options: o, props: l, theme: s }) {
  return Us({ theme: s, classNames: o?.classNames, props: o?.props || l, stylesCtx: r })[e];
}
function OT({ selector: e, stylesCtx: r, theme: o, classNames: l, props: s }) {
  return Us({ theme: o, classNames: l, props: s, stylesCtx: r })[e];
}
function jT({ rootSelector: e, selector: r, className: o }) {
  return e === r ? o : void 0;
}
function zT({ selector: e, classes: r, unstyled: o }) {
  return o ? void 0 : r[e];
}
function kT({ themeName: e, classNamesPrefix: r, selector: o, withStaticClass: l }) {
  return l === !1 ? [] : e.map((s) => `${r}-${s}-${o}`);
}
function LT({ options: e, classes: r, selector: o, unstyled: l }) {
  return e?.variant && !l ? r[`${o}--${e.variant}`] : void 0;
}
function BT({
  theme: e,
  options: r,
  themeName: o,
  selector: l,
  classNamesPrefix: s,
  resolvedClassNames: c,
  resolvedThemeClassNames: u,
  classes: f,
  unstyled: d,
  className: m,
  rootSelector: v,
  props: g,
  stylesCtx: y,
  withStaticClasses: b,
  headless: x,
  transformedStyles: C,
}) {
  return Dn(
    MT({ theme: e, options: r, unstyled: d || x }),
    u.map((R) => R[l]),
    LT({ options: r, classes: f, selector: l, unstyled: d || x }),
    c[l],
    OT({ selector: l, stylesCtx: y, theme: e, classNames: C, props: g }),
    NT({ selector: l, stylesCtx: y, options: r, props: g, theme: e }),
    jT({ rootSelector: v, selector: l, className: m }),
    zT({ selector: l, classes: f, unstyled: d || x }),
    b &&
      !x &&
      kT({ themeName: o, classNamesPrefix: s, selector: l, withStaticClass: r?.withStaticClass }),
    r?.className,
  );
}
function Rp({ style: e, theme: r }) {
  return Array.isArray(e)
    ? e.reduce((o, l) => ({ ...o, ...Rp({ style: l, theme: r }) }), {})
    : typeof e == "function"
      ? e(r)
      : (e ?? {});
}
function $T({
  theme: e,
  selector: r,
  options: o,
  props: l,
  stylesCtx: s,
  rootSelector: c,
  withStylesTransform: u,
  resolvedStyles: f,
  resolvedThemeStyles: d,
  resolvedVars: m,
  resolvedRootStyle: v,
}) {
  return {
    ...d[r],
    ...f[r],
    ...(!u && Ju({ theme: e, styles: o?.styles, props: o?.props || l, stylesCtx: s })[r]),
    ...m[r],
    ...(c === r ? v : null),
    ...Rp({ style: o?.style, theme: e }),
  };
}
function HT(e) {
  return e.reduce(
    (r, o) => (
      o &&
        Object.keys(o).forEach((l) => {
          r[l] = { ...r[l], ...xl(o[l]) };
        }),
      r
    ),
    {},
  );
}
function UT({ props: e, stylesCtx: r, themeName: o, theme: l }) {
  const s = pT()?.();
  return {
    getTransformedStyles: (u) =>
      s
        ? [
            ...u.map((f) => s(f, { props: e, theme: l, ctx: r })),
            ...o.map((f) => s(l.components[f]?.styles, { props: e, theme: l, ctx: r })),
          ].filter(Boolean)
        : [],
    withStylesTransform: !!s,
  };
}
function Ze({
  name: e,
  classes: r,
  props: o,
  stylesCtx: l,
  className: s,
  style: c,
  rootSelector: u = "root",
  unstyled: f,
  classNames: d,
  styles: m,
  vars: v,
  varsResolver: g,
  attributes: y,
}) {
  const b = mn(),
    x = fT(),
    C = dT(),
    R = hT(),
    T = (Array.isArray(e) ? e : [e]).filter((Y) => Y),
    { withStylesTransform: _, getTransformedStyles: D } = UT({
      props: o,
      stylesCtx: l,
      themeName: T,
      theme: b,
    }),
    j = Us({ theme: b, classNames: d, props: o, stylesCtx: l }),
    z = T.map((Y) =>
      Us({ theme: b, classNames: b.components[Y]?.classNames, props: o, stylesCtx: l }),
    ),
    H = _ ? {} : Ju({ theme: b, styles: m, props: o, stylesCtx: l }),
    $ = {};
  if (!_)
    for (const Y of T) {
      const ee = Ju({ theme: b, styles: b.components[Y]?.styles, props: o, stylesCtx: l });
      for (const ne of Object.keys(ee)) $[ne] = { ...$[ne], ...ee[ne] };
    }
  const M = HT([
      R ? {} : g?.(b, o, l),
      ...T.map((Y) => b.components?.[Y]?.vars?.(b, o, l)),
      v?.(b, o, l),
    ]),
    K = Rp({ style: c, theme: b });
  return (Y, ee) => ({
    ...y?.[Y],
    className: BT({
      theme: b,
      options: ee,
      themeName: T,
      selector: Y,
      classNamesPrefix: x,
      resolvedClassNames: j,
      resolvedThemeClassNames: z,
      classes: r,
      unstyled: f,
      className: s,
      rootSelector: u,
      props: o,
      stylesCtx: l,
      withStaticClasses: C,
      headless: R,
      transformedStyles: D([ee?.styles, m]),
    }),
    style: $T({
      theme: b,
      selector: Y,
      options: ee,
      props: o,
      stylesCtx: l,
      rootSelector: u,
      withStylesTransform: _,
      resolvedStyles: H,
      resolvedThemeStyles: $,
      resolvedVars: M,
      resolvedRootStyle: K,
    }),
  });
}
function Ls(e) {
  return wn(e)
    .reduce((r, o) => (e[o] !== void 0 ? `${r}${D2(o)}:${e[o]};` : r), "")
    .trim();
}
function PT({ selector: e, styles: r, media: o, container: l }) {
  const s = r ? Ls(r) : "",
    c = Array.isArray(o) ? o.map((f) => `@media${f.query}{${e}{${Ls(f.styles)}}}`) : [],
    u = Array.isArray(l) ? l.map((f) => `@container ${f.query}{${e}{${Ls(f.styles)}}}`) : [];
  return `${s ? `${e}{${s}}` : ""}${c.join("")}${u.join("")}`.trim();
}
function VT(e) {
  let r = 5381;
  for (let o = 0; o < e.length; o++) r = ((r << 5) + r + e.charCodeAt(o)) & 4294967295;
  return (r >>> 0).toString(36);
}
function nc({ deduplicate: e, ...r }) {
  const o = mf(),
    l = PT(r);
  return e
    ? w.jsx("style", { href: `mantine-${VT(l)}`, precedence: "mantine", nonce: o?.(), children: l })
    : w.jsx("style", {
        "data-mantine-styles": "inline",
        nonce: o?.(),
        dangerouslySetInnerHTML: { __html: l },
      });
}
function IT(e) {
  let r = 5381;
  for (let o = 0; o < e.length; o++) r = ((r << 5) + r + e.charCodeAt(o)) & 4294967295;
  return (r >>> 0).toString(36);
}
function FT(e, r) {
  return `__mdi__-${IT(`${e ? Ls(e) : ""}|${Array.isArray(r) ? r.map((o) => `${o.query}:${Ls(o.styles)}`).join("|") : ""}`)}`;
}
function Ei(e) {
  const {
    m: r,
    mx: o,
    my: l,
    mt: s,
    mb: c,
    ml: u,
    mr: f,
    me: d,
    ms: m,
    mis: v,
    mie: g,
    p: y,
    px: b,
    py: x,
    pt: C,
    pb: R,
    pl: T,
    pr: _,
    pe: D,
    ps: j,
    pis: z,
    pie: H,
    bd: $,
    bdrs: M,
    bg: K,
    c: Y,
    opacity: ee,
    ff: ne,
    fz: oe,
    fw: U,
    lts: re,
    ta: N,
    lh: k,
    fs: B,
    tt: F,
    td: Z,
    w: O,
    miw: P,
    maw: Q,
    h: ae,
    mih: ie,
    mah: ue,
    bgsz: ge,
    bgp: Se,
    bgr: Ce,
    bga: Ye,
    pos: je,
    top: de,
    left: _e,
    bottom: ze,
    right: Oe,
    inset: at,
    display: be,
    flex: we,
    hiddenFrom: Me,
    visibleFrom: xe,
    lightHidden: Be,
    darkHidden: Ve,
    sx: Xe,
    ...ot
  } = e;
  return {
    styleProps: xl({
      m: r,
      mx: o,
      my: l,
      mt: s,
      mb: c,
      ml: u,
      mr: f,
      me: d,
      ms: m,
      mis: v,
      mie: g,
      p: y,
      px: b,
      py: x,
      pt: C,
      pb: R,
      pl: T,
      pr: _,
      pis: z,
      pie: H,
      pe: D,
      ps: j,
      bd: $,
      bg: K,
      c: Y,
      opacity: ee,
      ff: ne,
      fz: oe,
      fw: U,
      lts: re,
      ta: N,
      lh: k,
      fs: B,
      tt: F,
      td: Z,
      w: O,
      miw: P,
      maw: Q,
      h: ae,
      mih: ie,
      mah: ue,
      bgsz: ge,
      bgp: Se,
      bgr: Ce,
      bga: Ye,
      pos: je,
      top: de,
      left: _e,
      bottom: ze,
      right: Oe,
      inset: at,
      display: be,
      flex: we,
      bdrs: M,
      hiddenFrom: Me,
      visibleFrom: xe,
      lightHidden: Be,
      darkHidden: Ve,
      sx: Xe,
    }),
    rest: ot,
  };
}
const qT = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  ms: { type: "spacing", property: "marginInlineStart" },
  me: { type: "spacing", property: "marginInlineEnd" },
  mis: { type: "spacing", property: "marginInlineStart" },
  mie: { type: "spacing", property: "marginInlineEnd" },
  mx: { type: "spacing", property: "marginInline" },
  my: { type: "spacing", property: "marginBlock" },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  ps: { type: "spacing", property: "paddingInlineStart" },
  pe: { type: "spacing", property: "paddingInlineEnd" },
  pis: { type: "spacing", property: "paddingInlineStart" },
  pie: { type: "spacing", property: "paddingInlineEnd" },
  px: { type: "spacing", property: "paddingInline" },
  py: { type: "spacing", property: "paddingBlock" },
  bd: { type: "border", property: "border" },
  bdrs: { type: "radius", property: "borderRadius" },
  bg: { type: "color", property: "background" },
  c: { type: "textColor", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "fontFamily", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "size", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" },
  flex: { type: "identity", property: "flex" },
};
function Tp(e, r) {
  const o = Ka({ color: e, theme: r });
  return o.color === "dimmed"
    ? "var(--mantine-color-dimmed)"
    : o.color === "bright"
      ? "var(--mantine-color-bright)"
      : o.variable
        ? `var(${o.variable})`
        : o.color;
}
function YT(e, r) {
  const o = Ka({ color: e, theme: r });
  return o.isThemeColor && o.shade === void 0 ? `var(--mantine-color-${o.color}-text)` : Tp(e, r);
}
function GT(e, r) {
  if (typeof e == "number") return pe(e);
  if (typeof e == "string") {
    const [o, l, ...s] = e.split(" ").filter((u) => u.trim() !== "");
    let c = `${pe(o)}`;
    return (l && (c += ` ${l}`), s.length > 0 && (c += ` ${Tp(s.join(" "), r)}`), c.trim());
  }
  return e;
}
const P0 = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)",
};
function XT(e) {
  return typeof e == "string" && e in P0 ? P0[e] : e;
}
const KT = ["h1", "h2", "h3", "h4", "h5", "h6"];
function QT(e, r) {
  return typeof e == "string" && e in r.fontSizes
    ? `var(--mantine-font-size-${e})`
    : typeof e == "string" && KT.includes(e)
      ? `var(--mantine-${e}-font-size)`
      : typeof e == "number" || typeof e == "string"
        ? pe(e)
        : e;
}
function ZT(e) {
  return e;
}
const WT = ["h1", "h2", "h3", "h4", "h5", "h6"];
function JT(e, r) {
  return typeof e == "string" && e in r.lineHeights
    ? `var(--mantine-line-height-${e})`
    : typeof e == "string" && WT.includes(e)
      ? `var(--mantine-${e}-line-height)`
      : e;
}
function e_(e, r) {
  return typeof e == "string" && e in r.radius
    ? `var(--mantine-radius-${e})`
    : typeof e == "number" || typeof e == "string"
      ? pe(e)
      : e;
}
function t_(e) {
  return typeof e == "number" ? pe(e) : e;
}
function n_(e, r) {
  if (typeof e == "number") return pe(e);
  if (typeof e == "string") {
    const o = e.replace("-", "");
    if (!(o in r.spacing)) return pe(e);
    const l = `--mantine-spacing-${o}`;
    return e.startsWith("-") ? `calc(var(${l}) * -1)` : `var(${l})`;
  }
  return e;
}
const gm = {
  color: Tp,
  textColor: YT,
  fontSize: QT,
  spacing: n_,
  radius: e_,
  identity: ZT,
  size: t_,
  lineHeight: JT,
  fontFamily: XT,
  border: GT,
};
function V0(e) {
  return e.replace("(min-width: ", "").replace("em)", "");
}
function r_({ media: e, ...r }) {
  const o = Object.keys(e)
    .sort((l, s) => Number(V0(l)) - Number(V0(s)))
    .map((l) => ({ query: l, styles: e[l] }));
  return { ...r, media: o };
}
function a_(e) {
  if (typeof e != "object" || e === null) return !1;
  const r = Object.keys(e);
  return !(r.length === 1 && r[0] === "base");
}
function o_(e) {
  return typeof e == "object" && e !== null ? ("base" in e ? e.base : void 0) : e;
}
function l_(e) {
  return typeof e == "object" && e !== null ? wn(e).filter((r) => r !== "base") : [];
}
function i_(e, r) {
  return typeof e == "object" && e !== null && r in e ? e[r] : e;
}
function s_({ styleProps: e, data: r, theme: o }) {
  return r_(
    wn(e).reduce(
      (l, s) => {
        if (s === "hiddenFrom" || s === "visibleFrom" || s === "sx") return l;
        const c = r[s],
          u = Array.isArray(c.property) ? c.property : [c.property],
          f = o_(e[s]);
        if (!a_(e[s]))
          return (
            u.forEach((m) => {
              l.inlineStyles[m] = gm[c.type](f, o);
            }),
            l
          );
        l.hasResponsiveStyles = !0;
        const d = l_(e[s]);
        return (
          u.forEach((m) => {
            (f != null && (l.styles[m] = gm[c.type](f, o)),
              d.forEach((v) => {
                const g = `(min-width: ${o.breakpoints[v]})`;
                l.media[g] = { ...l.media[g], [m]: gm[c.type](i_(e[s], v), o) };
              }));
          }),
          l
        );
      },
      { hasResponsiveStyles: !1, styles: {}, inlineStyles: {}, media: {} },
    ),
  );
}
function _p() {
  return `__m__-${S.useId().replace(/[:«»]/g, "")}`;
}
function Dp(e, r) {
  return Array.isArray(e)
    ? [...e].reduce((o, l) => ({ ...o, ...Dp(l, r) }), {})
    : typeof e == "function"
      ? e(r)
      : (e ?? {});
}
function c_(e) {
  return e;
}
const u_ = c_;
function OS(e) {
  return e;
}
function He(e) {
  const r = e;
  return (
    (r.extend = OS),
    (r.withProps = (o) => {
      const l = (s) => w.jsx(r, { ...o, ...s });
      return ((l.extend = r.extend), (l.displayName = `WithProps(${r.displayName})`), l);
    }),
    r
  );
}
function pf(e) {
  return He(e);
}
function Jn(e) {
  const r = e;
  return (
    (r.withProps = (o) => {
      const l = (s) => w.jsx(r, { ...o, ...s });
      return ((l.extend = r.extend), (l.displayName = `WithProps(${r.displayName})`), l);
    }),
    (r.extend = OS),
    r
  );
}
function jS(e) {
  return `data-${(e.startsWith("data-") ? e.slice(5) : e).replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}`;
}
function f_(e) {
  return Object.keys(e).reduce((r, o) => {
    const l = e[o];
    return (l === void 0 || l === "" || l === !1 || l === null || (r[jS(o)] = e[o]), r);
  }, {});
}
function zS(e) {
  return e
    ? typeof e == "string"
      ? { [jS(e)]: !0 }
      : Array.isArray(e)
        ? [...e].reduce((r, o) => ({ ...r, ...zS(o) }), {})
        : f_(e)
    : null;
}
function Gm(e, r) {
  return Array.isArray(e)
    ? [...e].reduce((o, l) => ({ ...o, ...Gm(l, r) }), {})
    : typeof e == "function"
      ? e(r)
      : (e ?? {});
}
function d_({ theme: e, style: r, vars: o, styleProps: l }) {
  const s = Gm(r, e),
    c = Gm(o, e);
  return { ...s, ...c, ...l };
}
function kS({
  component: e,
  style: r,
  __vars: o,
  className: l,
  variant: s,
  mod: c,
  size: u,
  hiddenFrom: f,
  visibleFrom: d,
  lightHidden: m,
  darkHidden: v,
  renderRoot: g,
  __size: y,
  ref: b,
  ...x
}) {
  const C = mn(),
    R = e || "div",
    { styleProps: T, rest: _ } = Ei(x),
    D = mT()?.()?.(T.sx),
    j = _p(),
    z = s_({ styleProps: T, theme: C, data: qT }),
    H = gT(),
    $ = H && z.hasResponsiveStyles ? FT(z.styles, z.media) : j,
    M = {
      ref: b,
      style: d_({ theme: C, style: r, vars: o, styleProps: z.inlineStyles }),
      className: Dn(l, D, {
        [$]: z.hasResponsiveStyles,
        "mantine-light-hidden": m,
        "mantine-dark-hidden": v,
        [`mantine-hidden-from-${f}`]: f,
        [`mantine-visible-from-${d}`]: d,
      }),
      "data-variant": s,
      "data-size": vS(u) ? void 0 : u || void 0,
      size: y,
      ...zS(c),
      ..._,
    };
  return w.jsxs(w.Fragment, {
    children: [
      z.hasResponsiveStyles &&
        w.jsx(nc, { selector: `.${$}`, styles: z.styles, media: z.media, deduplicate: H }),
      typeof g == "function" ? g(M) : w.jsx(R, { ...M }),
    ],
  });
}
kS.displayName = "@mantine/core/Box";
const Ne = u_(kS),
  h_ = S.createContext({ dir: "ltr", toggleDirection: () => {}, setDirection: () => {} });
function Za() {
  return S.use(h_);
}
const m_ = {
    transitionDuration: 200,
    transitionTimingFunction: "ease",
    animateOpacity: !0,
    orientation: "vertical",
  },
  LS = He((e) => {
    const {
        children: r,
        expanded: o,
        transitionDuration: l,
        transitionTimingFunction: s,
        style: c,
        onTransitionEnd: u,
        onTransitionStart: f,
        animateOpacity: d,
        keepMounted: m,
        ref: v,
        orientation: g,
        ...y
      } = Ee("Collapse", m_, e),
      b = ec(),
      x = mn(),
      C = yp(),
      R = x.respectReducedMotion && C ? 0 : l,
      T = (g === "horizontal" ? J2 : Z2)({
        expanded: o,
        transitionDuration: R,
        transitionTimingFunction: s,
        onTransitionEnd: u,
        onTransitionStart: f,
        keepMounted: !1,
      });
    if (R === 0)
      return m === !0 && b !== "test"
        ? w.jsx(S.Activity, {
            mode: o ? "visible" : "hidden",
            children: w.jsx(Ne, { ...y, children: r }),
          })
        : o
          ? w.jsx(Ne, { ...y, children: r })
          : null;
    const _ = T.state === "exited";
    let D;
    return (
      m === !1
        ? (D = _ ? null : r)
        : m === !0
          ? (D = w.jsx(S.Activity, { mode: _ ? "hidden" : "visible", children: r }))
          : (D = r),
      w.jsx(Ne, {
        ...y,
        ...T.getCollapseProps({
          style: {
            opacity: o || !d ? 1 : 0,
            transition: d ? `opacity ${R}ms ${s}` : "none",
            ...Dp(c, x),
          },
          ref: v,
        }),
        children: D,
      })
    );
  });
LS.displayName = "@mantine/core/Collapse";
const [p_, Tr] = Ga("ScrollArea.Root component was not found in tree");
function Lo(e, r) {
  const o = S.useEffectEvent(r);
  Cl(() => {
    let l = 0;
    if (e) {
      const s = new ResizeObserver(() => {
        (cancelAnimationFrame(l), (l = window.requestAnimationFrame(o)));
      });
      return (
        s.observe(e),
        () => {
          (window.cancelAnimationFrame(l), s.unobserve(e));
        }
      );
    }
  }, [e]);
}
function g_(e) {
  const { style: r, ...o } = e,
    l = Tr(),
    [s, c] = S.useState(0),
    [u, f] = S.useState(0),
    d = !!(s && u);
  return (
    Lo(l.scrollbarX, () => {
      const m = l.scrollbarX?.offsetHeight || 0;
      (l.onCornerHeightChange(m), f(m));
    }),
    Lo(l.scrollbarY, () => {
      const m = l.scrollbarY?.offsetWidth || 0;
      (l.onCornerWidthChange(m), c(m));
    }),
    d ? w.jsx("div", { ...o, style: { ...r, width: s, height: u } }) : null
  );
}
function v_(e) {
  const r = Tr(),
    o = !!(r.scrollbarX && r.scrollbarY);
  return r.type !== "scroll" && o ? w.jsx(g_, { ...e }) : null;
}
const y_ = { scrollHideDelay: 1e3, type: "hover" };
function BS(e) {
  const {
      type: r,
      scrollHideDelay: o,
      scrollbars: l,
      getStyles: s,
      ref: c,
      ...u
    } = Ee("ScrollAreaRoot", y_, e),
    [f, d] = S.useState(null),
    [m, v] = S.useState(null),
    [g, y] = S.useState(null),
    [b, x] = S.useState(null),
    [C, R] = S.useState(null),
    [T, _] = S.useState(0),
    [D, j] = S.useState(0),
    [z, H] = S.useState(!1),
    [$, M] = S.useState(!1),
    K = tn(c, d);
  return w.jsx(p_, {
    value: {
      type: r,
      scrollHideDelay: o,
      scrollArea: f,
      viewport: m,
      onViewportChange: v,
      content: g,
      onContentChange: y,
      scrollbarX: b,
      onScrollbarXChange: x,
      scrollbarXEnabled: z,
      onScrollbarXEnabledChange: H,
      scrollbarY: C,
      onScrollbarYChange: R,
      scrollbarYEnabled: $,
      onScrollbarYEnabledChange: M,
      onCornerWidthChange: _,
      onCornerHeightChange: j,
      getStyles: s,
    },
    children: w.jsx(Ne, {
      ...u,
      ref: K,
      __vars: {
        "--sa-corner-width": l !== "xy" ? "0px" : `${T}px`,
        "--sa-corner-height": l !== "xy" ? "0px" : `${D}px`,
      },
    }),
  });
}
BS.displayName = "@mantine/core/ScrollAreaRoot";
function $S(e, r) {
  const o = e / r;
  return Number.isNaN(o) ? 0 : o;
}
function gf(e) {
  const r = $S(e.viewport, e.content),
    o = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    l = (e.scrollbar.size - o) * r;
  return Math.max(l, 18);
}
function HS(e, r) {
  return (o) => {
    if (e[0] === e[1] || r[0] === r[1]) return r[0];
    const l = (r[1] - r[0]) / (e[1] - e[0]);
    return r[0] + l * (o - e[0]);
  };
}
function b_(e, [r, o]) {
  return Math.min(o, Math.max(r, e));
}
function I0(e, r, o = "ltr") {
  const l = gf(r),
    s = r.scrollbar.paddingStart + r.scrollbar.paddingEnd,
    c = r.scrollbar.size - s,
    u = r.content - r.viewport,
    f = c - l,
    d = b_(e, o === "ltr" ? [0, u] : [u * -1, 0]);
  return HS([0, u], [0, f])(d);
}
function S_(e, r, o, l = "ltr") {
  const s = gf(o),
    c = s / 2,
    u = r || c,
    f = s - u,
    d = o.scrollbar.paddingStart + u,
    m = o.scrollbar.size - o.scrollbar.paddingEnd - f,
    v = o.content - o.viewport,
    g = l === "ltr" ? [0, v] : [v * -1, 0];
  return HS([d, m], g)(e);
}
function US(e, r) {
  return e > 0 && e < r;
}
function ef(e) {
  return e ? parseInt(e, 10) : 0;
}
function pl(e, r, { checkForDefaultPrevented: o = !0 } = {}) {
  return (l) => {
    (e?.(l), (o === !1 || !l.defaultPrevented) && r?.(l));
  };
}
const [w_, PS] = Ga("ScrollAreaScrollbar was not found in tree");
function VS(e) {
  const {
      sizes: r,
      hasThumb: o,
      onThumbChange: l,
      onThumbPointerUp: s,
      onThumbPointerDown: c,
      onThumbPositionChange: u,
      onDragScroll: f,
      onWheelScroll: d,
      onResize: m,
      ref: v,
      ...g
    } = e,
    y = Tr(),
    [b, x] = S.useState(null),
    C = tn(v, x),
    R = S.useRef(null),
    T = S.useRef(""),
    { viewport: _ } = y,
    D = r.content - r.viewport,
    j = S.useEffectEvent(d),
    z = Ms(u),
    H = df(m, 10),
    $ = (M) => {
      R.current && f({ x: M.clientX - R.current.left, y: M.clientY - R.current.top });
    };
  return (
    S.useEffect(() => {
      const M = (K) => {
        const Y = K.target;
        b?.contains(Y) && j(K, D);
      };
      return (
        document.addEventListener("wheel", M, { passive: !1 }),
        () => document.removeEventListener("wheel", M, { passive: !1 })
      );
    }, [_, b, D]),
    S.useEffect(z, [r, z]),
    Lo(b, H),
    Lo(y.content, H),
    w.jsx(w_, {
      value: {
        scrollbar: b,
        hasThumb: o,
        onThumbChange: Ms(l),
        onThumbPointerUp: Ms(s),
        onThumbPositionChange: z,
        onThumbPointerDown: Ms(c),
      },
      children: w.jsx("div", {
        ...g,
        ref: C,
        "data-mantine-scrollbar": !0,
        style: { position: "absolute", ...g.style },
        onPointerDown: pl(e.onPointerDown, (M) => {
          (M.preventDefault(),
            M.button === 0 &&
              (M.target.setPointerCapture(M.pointerId),
              (R.current = b.getBoundingClientRect()),
              (T.current = document.body.style.webkitUserSelect),
              (document.body.style.webkitUserSelect = "none"),
              $(M)));
        }),
        onPointerMove: pl(e.onPointerMove, $),
        onPointerUp: pl(e.onPointerUp, (M) => {
          const K = M.target;
          K.hasPointerCapture(M.pointerId) &&
            (M.preventDefault(), K.releasePointerCapture(M.pointerId));
        }),
        onLostPointerCapture: () => {
          ((document.body.style.webkitUserSelect = T.current), (R.current = null));
        },
      }),
    })
  );
}
const IS = (e) => {
  const { sizes: r, onSizesChange: o, style: l, ref: s, ...c } = e,
    u = Tr(),
    [f, d] = S.useState(),
    m = S.useRef(null),
    v = tn(s, m, u.onScrollbarXChange);
  return (
    S.useEffect(() => {
      m.current && d(getComputedStyle(m.current));
    }, [m]),
    w.jsx(VS, {
      "data-orientation": "horizontal",
      ...c,
      ref: v,
      sizes: r,
      style: { ...l, "--sa-thumb-width": `${gf(r)}px` },
      onThumbPointerDown: (g) => e.onThumbPointerDown(g.x),
      onDragScroll: (g) => e.onDragScroll(g.x),
      onWheelScroll: (g, y) => {
        if (u.viewport) {
          const b = u.viewport.scrollLeft + g.deltaX;
          (e.onWheelScroll(b), US(b, y) && g.preventDefault());
        }
      },
      onResize: () => {
        m.current &&
          u.viewport &&
          f &&
          o({
            content: u.viewport.scrollWidth,
            viewport: u.viewport.offsetWidth,
            scrollbar: {
              size: m.current.clientWidth,
              paddingStart: ef(f.paddingLeft),
              paddingEnd: ef(f.paddingRight),
            },
          });
      },
    })
  );
};
IS.displayName = "@mantine/core/ScrollAreaScrollbarX";
function FS(e) {
  const { sizes: r, onSizesChange: o, style: l, ref: s, ...c } = e,
    u = Tr(),
    [f, d] = S.useState(),
    m = S.useRef(null),
    v = tn(s, m, u.onScrollbarYChange);
  return (
    S.useEffect(() => {
      m.current && d(window.getComputedStyle(m.current));
    }, []),
    w.jsx(VS, {
      ...c,
      "data-orientation": "vertical",
      ref: v,
      sizes: r,
      style: { "--sa-thumb-height": `${gf(r)}px`, ...l },
      onThumbPointerDown: (g) => e.onThumbPointerDown(g.y),
      onDragScroll: (g) => e.onDragScroll(g.y),
      onWheelScroll: (g, y) => {
        if (u.viewport) {
          const b = u.viewport.scrollTop + g.deltaY;
          (e.onWheelScroll(b), US(b, y) && g.preventDefault());
        }
      },
      onResize: () => {
        m.current &&
          u.viewport &&
          f &&
          o({
            content: u.viewport.scrollHeight,
            viewport: u.viewport.offsetHeight,
            scrollbar: {
              size: m.current.clientHeight,
              paddingStart: ef(f.paddingTop),
              paddingEnd: ef(f.paddingBottom),
            },
          });
      },
    })
  );
}
FS.displayName = "@mantine/core/ScrollAreaScrollbarY";
function vf(e) {
  const { orientation: r = "vertical", ...o } = e,
    { dir: l } = Za(),
    s = Tr(),
    c = S.useRef(null),
    u = S.useRef(0),
    [f, d] = S.useState({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
    }),
    m = $S(f.viewport, f.content),
    v = {
      ...o,
      sizes: f,
      onSizesChange: d,
      hasThumb: m > 0 && m < 1,
      onThumbChange: (y) => {
        c.current = y;
      },
      onThumbPointerUp: () => {
        u.current = 0;
      },
      onThumbPointerDown: (y) => {
        u.current = y;
      },
    },
    g = (y, b) => S_(y, u.current, f, b);
  return r === "horizontal"
    ? w.jsx(IS, {
        ...v,
        onThumbPositionChange: () => {
          if (s.viewport && c.current) {
            const y = s.viewport.scrollLeft,
              b = I0(y, f, l);
            c.current.style.transform = `translate3d(${b}px, 0, 0)`;
          }
        },
        onWheelScroll: (y) => {
          s.viewport && (s.viewport.scrollLeft = y);
        },
        onDragScroll: (y) => {
          s.viewport && (s.viewport.scrollLeft = g(y, l));
        },
      })
    : r === "vertical"
      ? w.jsx(FS, {
          ...v,
          onThumbPositionChange: () => {
            if (s.viewport && c.current) {
              const y = s.viewport.scrollTop,
                b = I0(y, f);
              (f.scrollbar.size === 0
                ? c.current.style.setProperty("--thumb-opacity", "0")
                : c.current.style.setProperty("--thumb-opacity", "1"),
                (c.current.style.transform = `translate3d(0, ${b}px, 0)`));
            }
          },
          onWheelScroll: (y) => {
            s.viewport && (s.viewport.scrollTop = y);
          },
          onDragScroll: (y) => {
            s.viewport && (s.viewport.scrollTop = g(y));
          },
        })
      : null;
}
vf.displayName = "@mantine/core/ScrollAreaScrollbarVisible";
function Ap(e) {
  const r = Tr(),
    { forceMount: o, ...l } = e,
    [s, c] = S.useState(!1),
    u = e.orientation === "horizontal",
    f = df(() => {
      if (r.viewport) {
        const d = r.viewport.offsetWidth < r.viewport.scrollWidth,
          m = r.viewport.offsetHeight < r.viewport.scrollHeight;
        c(u ? d : m);
      }
    }, 10);
  return (
    Lo(r.viewport, f),
    Lo(r.content, f),
    o || s ? w.jsx(vf, { "data-state": s ? "visible" : "hidden", ...l }) : null
  );
}
Ap.displayName = "@mantine/core/ScrollAreaScrollbarAuto";
function qS(e) {
  const { forceMount: r, ...o } = e,
    l = Tr(),
    [s, c] = S.useState(!1);
  return (
    S.useEffect(() => {
      const { scrollArea: u } = l;
      let f = 0;
      if (u) {
        const d = () => {
            (window.clearTimeout(f), c(!0));
          },
          m = () => {
            f = window.setTimeout(() => c(!1), l.scrollHideDelay);
          };
        return (
          u.addEventListener("pointerenter", d),
          u.addEventListener("pointerleave", m),
          () => {
            (window.clearTimeout(f),
              u.removeEventListener("pointerenter", d),
              u.removeEventListener("pointerleave", m));
          }
        );
      }
    }, [l.scrollArea, l.scrollHideDelay]),
    r || s ? w.jsx(Ap, { "data-state": s ? "visible" : "hidden", ...o }) : null
  );
}
qS.displayName = "@mantine/core/ScrollAreaScrollbarHover";
function x_(e) {
  const { forceMount: r, ...o } = e,
    l = Tr(),
    s = e.orientation === "horizontal",
    [c, u] = S.useState("hidden"),
    f = df(() => u("idle"), 100);
  return (
    S.useEffect(() => {
      if (c === "idle") {
        const d = window.setTimeout(() => u("hidden"), l.scrollHideDelay);
        return () => window.clearTimeout(d);
      }
    }, [c, l.scrollHideDelay]),
    S.useEffect(() => {
      const { viewport: d } = l,
        m = s ? "scrollLeft" : "scrollTop";
      if (d) {
        let v = d[m];
        const g = () => {
          const y = d[m];
          (v !== y && (u("scrolling"), f()), (v = y));
        };
        return (d.addEventListener("scroll", g), () => d.removeEventListener("scroll", g));
      }
    }, [l.viewport, s, f]),
    r || c !== "hidden"
      ? w.jsx(vf, {
          "data-state": c === "hidden" ? "hidden" : "visible",
          ...o,
          onPointerEnter: pl(e.onPointerEnter, () => u("interacting")),
          onPointerLeave: pl(e.onPointerLeave, () => u("idle")),
        })
      : null
  );
}
function Xm(e) {
  const { forceMount: r, ...o } = e,
    l = Tr(),
    { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: c } = l,
    u = e.orientation === "horizontal";
  return (
    S.useEffect(
      () => (
        u ? s(!0) : c(!0),
        () => {
          u ? s(!1) : c(!1);
        }
      ),
      [u, s, c],
    ),
    l.type === "hover"
      ? w.jsx(qS, { ...o, forceMount: r })
      : l.type === "scroll"
        ? w.jsx(x_, { ...o, forceMount: r })
        : l.type === "auto"
          ? w.jsx(Ap, { ...o, forceMount: r })
          : l.type === "always"
            ? w.jsx(vf, { ...o })
            : null
  );
}
Xm.displayName = "@mantine/core/ScrollAreaScrollbar";
function C_(e, r = () => {}) {
  let o = { left: e.scrollLeft, top: e.scrollTop },
    l = 0;
  return (
    (function s() {
      const c = { left: e.scrollLeft, top: e.scrollTop },
        u = o.left !== c.left,
        f = o.top !== c.top;
      ((u || f) && r(), (o = c), (l = window.requestAnimationFrame(s)));
    })(),
    () => window.cancelAnimationFrame(l)
  );
}
function YS(e) {
  const { style: r, ref: o, ...l } = e,
    s = Tr(),
    c = PS(),
    { onThumbPositionChange: u } = c,
    f = tn(o, c.onThumbChange),
    d = S.useRef(void 0),
    m = df(() => {
      d.current && (d.current(), (d.current = void 0));
    }, 100);
  return (
    S.useEffect(() => {
      const { viewport: v } = s;
      if (v) {
        const g = () => {
          (m(), d.current || ((d.current = C_(v, u)), u()));
        };
        return (u(), v.addEventListener("scroll", g), () => v.removeEventListener("scroll", g));
      }
    }, [s.viewport, m, u]),
    w.jsx("div", {
      "data-state": c.hasThumb ? "visible" : "hidden",
      ...l,
      ref: f,
      style: { width: "var(--sa-thumb-width)", height: "var(--sa-thumb-height)", ...r },
      onPointerDownCapture: pl(e.onPointerDownCapture, (v) => {
        const g = v.target.getBoundingClientRect(),
          y = v.clientX - g.left,
          b = v.clientY - g.top;
        c.onThumbPointerDown({ x: y, y: b });
      }),
      onPointerUp: pl(e.onPointerUp, c.onThumbPointerUp),
    })
  );
}
YS.displayName = "@mantine/core/ScrollAreaThumb";
function Km(e) {
  const { forceMount: r, ...o } = e,
    l = PS();
  return r || l.hasThumb ? w.jsx(YS, { ...o }) : null;
}
Km.displayName = "@mantine/core/ScrollAreaThumb";
function GS({ children: e, style: r, ref: o, onWheel: l, ...s }) {
  const c = Tr(),
    u = tn(o, c.onViewportChange),
    f = (d) => {
      if ((l?.(d), c.scrollbarXEnabled && c.viewport && d.shiftKey)) {
        const {
            scrollTop: m,
            scrollHeight: v,
            clientHeight: g,
            scrollWidth: y,
            clientWidth: b,
          } = c.viewport,
          x = m < 1,
          C = m >= v - g - 1;
        y > b && (x || C) && d.stopPropagation();
      }
    };
  return w.jsx(Ne, {
    ...s,
    ref: u,
    onWheel: f,
    style: {
      overflowX: c.scrollbarXEnabled ? "scroll" : "hidden",
      overflowY: c.scrollbarYEnabled ? "scroll" : "hidden",
      ...r,
    },
    children: w.jsx("div", { ...c.getStyles("content"), ref: c.onContentChange, children: e }),
  });
}
GS.displayName = "@mantine/core/ScrollAreaViewport";
var Mp = {
  root: "m_d57069b5",
  content: "m_b1336c6",
  viewport: "m_c0783ff9",
  viewportInner: "m_f8f631dd",
  scrollbar: "m_c44ba933",
  thumb: "m_d8b5e363",
  corner: "m_21657268",
};
function yf() {
  return typeof window < "u";
}
function Ri(e) {
  return XS(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Zn(e) {
  var r;
  return (e == null || (r = e.ownerDocument) == null ? void 0 : r.defaultView) || window;
}
function va(e) {
  var r;
  return (r = (XS(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : r.documentElement;
}
function XS(e) {
  return yf() ? e instanceof Node || e instanceof Zn(e).Node : !1;
}
function $t(e) {
  return yf() ? e instanceof Element || e instanceof Zn(e).Element : !1;
}
function _r(e) {
  return yf() ? e instanceof HTMLElement || e instanceof Zn(e).HTMLElement : !1;
}
function tf(e) {
  return !yf() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Zn(e).ShadowRoot;
}
function rc(e) {
  const { overflow: r, overflowX: o, overflowY: l, display: s } = Er(e);
  return /auto|scroll|overlay|hidden|clip/.test(r + l + o) && s !== "inline" && s !== "contents";
}
function E_(e) {
  return /^(table|td|th)$/.test(Ri(e));
}
function bf(e) {
  try {
    if (e.matches(":popover-open")) return !0;
  } catch {}
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const R_ = /transform|translate|scale|rotate|perspective|filter/,
  T_ = /paint|layout|strict|content/,
  sl = (e) => !!e && e !== "none";
let vm;
function Np(e) {
  const r = $t(e) ? Er(e) : e;
  return (
    sl(r.transform) ||
    sl(r.translate) ||
    sl(r.scale) ||
    sl(r.rotate) ||
    sl(r.perspective) ||
    (!Sf() && (sl(r.backdropFilter) || sl(r.filter))) ||
    R_.test(r.willChange || "") ||
    T_.test(r.contain || "")
  );
}
function __(e) {
  let r = Ya(e);
  for (; _r(r) && !Ia(r); ) {
    if (Np(r)) return r;
    if (bf(r)) return null;
    r = Ya(r);
  }
  return null;
}
function Sf() {
  return (
    vm == null &&
      (vm = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")),
    vm
  );
}
function Ia(e) {
  return /^(html|body|#document)$/.test(Ri(e));
}
function Er(e) {
  return Zn(e).getComputedStyle(e);
}
function wf(e) {
  return $t(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Ya(e) {
  if (Ri(e) === "html") return e;
  const r = e.assignedSlot || e.parentNode || (tf(e) && e.host) || va(e);
  return tf(r) ? r.host : r;
}
function KS(e) {
  const r = Ya(e);
  return Ia(r) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : _r(r) && rc(r) ? r : KS(r);
}
function Fa(e, r, o) {
  var l;
  (r === void 0 && (r = []), o === void 0 && (o = !0));
  const s = KS(e),
    c = s === ((l = e.ownerDocument) == null ? void 0 : l.body),
    u = Zn(s);
  if (c) {
    const f = Qm(u);
    return r.concat(u, u.visualViewport || [], rc(s) ? s : [], f && o ? Fa(f) : []);
  } else return r.concat(s, Fa(s, [], o));
}
function Qm(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
const D_ = ["top", "right", "bottom", "left"],
  Kr = Math.min,
  zn = Math.max,
  nf = Math.round,
  Du = Math.floor,
  ha = (e) => ({ x: e, y: e }),
  A_ = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Zm(e, r, o) {
  return zn(e, Kr(r, o));
}
function pa(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Qr(e) {
  return e.split("-")[0];
}
function Ti(e) {
  return e.split("-")[1];
}
function Op(e) {
  return e === "x" ? "y" : "x";
}
function jp(e) {
  return e === "y" ? "height" : "width";
}
function Fr(e) {
  const r = e[0];
  return r === "t" || r === "b" ? "y" : "x";
}
function zp(e) {
  return Op(Fr(e));
}
function M_(e, r, o) {
  o === void 0 && (o = !1);
  const l = Ti(e),
    s = zp(e),
    c = jp(s);
  let u =
    s === "x" ? (l === (o ? "end" : "start") ? "right" : "left") : l === "start" ? "bottom" : "top";
  return (r.reference[c] > r.floating[c] && (u = rf(u)), [u, rf(u)]);
}
function N_(e) {
  const r = rf(e);
  return [Wm(e), r, Wm(r)];
}
function Wm(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const F0 = ["left", "right"],
  q0 = ["right", "left"],
  O_ = ["top", "bottom"],
  j_ = ["bottom", "top"];
function z_(e, r, o) {
  switch (e) {
    case "top":
    case "bottom":
      return o ? (r ? q0 : F0) : r ? F0 : q0;
    case "left":
    case "right":
      return r ? O_ : j_;
    default:
      return [];
  }
}
function k_(e, r, o, l) {
  const s = Ti(e);
  let c = z_(Qr(e), o === "start", l);
  return (s && ((c = c.map((u) => u + "-" + s)), r && (c = c.concat(c.map(Wm)))), c);
}
function rf(e) {
  const r = Qr(e);
  return A_[r] + e.slice(r.length);
}
function L_(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function kp(e) {
  return typeof e != "number" ? L_(e) : { top: e, right: e, bottom: e, left: e };
}
function yi(e) {
  const { x: r, y: o, width: l, height: s } = e;
  return { width: l, height: s, top: o, left: r, right: r + l, bottom: o + s, x: r, y: o };
}
function B_() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function $_() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands)
    ? e.brands
        .map((r) => {
          let { brand: o, version: l } = r;
          return o + "/" + l;
        })
        .join(" ")
    : navigator.userAgent;
}
function H_() {
  return /apple/i.test(navigator.vendor);
}
function U_() {
  return B_().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function P_() {
  return $_().includes("jsdom/");
}
const Y0 = "data-floating-ui-focusable",
  V_ =
    "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function G0(e) {
  let r = e.activeElement;
  for (; ((o = r) == null || (o = o.shadowRoot) == null ? void 0 : o.activeElement) != null; ) {
    var o;
    r = r.shadowRoot.activeElement;
  }
  return r;
}
function Vs(e, r) {
  if (!e || !r) return !1;
  const o = r.getRootNode == null ? void 0 : r.getRootNode();
  if (e.contains(r)) return !0;
  if (o && tf(o)) {
    let l = r;
    for (; l; ) {
      if (e === l) return !0;
      l = l.parentNode || l.host;
    }
  }
  return !1;
}
function ui(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function ym(e, r) {
  if (r == null) return !1;
  if ("composedPath" in e) return e.composedPath().includes(r);
  const o = e;
  return o.target != null && r.contains(o.target);
}
function I_(e) {
  return e.matches("html,body");
}
function hl(e) {
  return e?.ownerDocument || document;
}
function F_(e) {
  return _r(e) && e.matches(V_);
}
function q_(e) {
  if (!e || P_()) return !0;
  try {
    return e.matches(":focus-visible");
  } catch {
    return !0;
  }
}
function Y_(e) {
  return e ? (e.hasAttribute(Y0) ? e : e.querySelector("[" + Y0 + "]") || e) : null;
}
function Uu(e, r, o) {
  return (
    o === void 0 && (o = !0),
    e
      .filter((s) => {
        var c;
        return s.parentId === r && (!o || ((c = s.context) == null ? void 0 : c.open));
      })
      .flatMap((s) => [s, ...Uu(e, s.id, o)])
  );
}
function G_(e) {
  return "nativeEvent" in e;
}
function Jm(e, r) {
  const o = ["mouse", "pen"];
  return (o.push("", void 0), o.includes(e));
}
var X_ = typeof document < "u",
  K_ = function () {},
  ma = X_ ? S.useLayoutEffect : K_;
const Q_ = { ...mp };
function Au(e) {
  const r = S.useRef(e);
  return (
    ma(() => {
      r.current = e;
    }),
    r
  );
}
const Z_ = Q_.useInsertionEffect,
  W_ = Z_ || ((e) => e());
function sa(e) {
  const r = S.useRef(() => {});
  return (
    W_(() => {
      r.current = e;
    }),
    S.useCallback(function () {
      for (var o = arguments.length, l = new Array(o), s = 0; s < o; s++) l[s] = arguments[s];
      return r.current == null ? void 0 : r.current(...l);
    }, [])
  );
}
function X0(e, r, o) {
  let { reference: l, floating: s } = e;
  const c = Fr(r),
    u = zp(r),
    f = jp(u),
    d = Qr(r),
    m = c === "y",
    v = l.x + l.width / 2 - s.width / 2,
    g = l.y + l.height / 2 - s.height / 2,
    y = l[f] / 2 - s[f] / 2;
  let b;
  switch (d) {
    case "top":
      b = { x: v, y: l.y - s.height };
      break;
    case "bottom":
      b = { x: v, y: l.y + l.height };
      break;
    case "right":
      b = { x: l.x + l.width, y: g };
      break;
    case "left":
      b = { x: l.x - s.width, y: g };
      break;
    default:
      b = { x: l.x, y: l.y };
  }
  switch (Ti(r)) {
    case "start":
      b[u] -= y * (o && m ? -1 : 1);
      break;
    case "end":
      b[u] += y * (o && m ? -1 : 1);
      break;
  }
  return b;
}
async function J_(e, r) {
  var o;
  r === void 0 && (r = {});
  const { x: l, y: s, platform: c, rects: u, elements: f, strategy: d } = e,
    {
      boundary: m = "clippingAncestors",
      rootBoundary: v = "viewport",
      elementContext: g = "floating",
      altBoundary: y = !1,
      padding: b = 0,
    } = pa(r, e),
    x = kp(b),
    R = f[y ? (g === "floating" ? "reference" : "floating") : g],
    T = yi(
      await c.getClippingRect({
        element:
          (o = await (c.isElement == null ? void 0 : c.isElement(R))) == null || o
            ? R
            : R.contextElement ||
              (await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(f.floating))),
        boundary: m,
        rootBoundary: v,
        strategy: d,
      }),
    ),
    _ =
      g === "floating"
        ? { x: l, y: s, width: u.floating.width, height: u.floating.height }
        : u.reference,
    D = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(f.floating)),
    j = (await (c.isElement == null ? void 0 : c.isElement(D)))
      ? (await (c.getScale == null ? void 0 : c.getScale(D))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    z = yi(
      c.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: f,
            rect: _,
            offsetParent: D,
            strategy: d,
          })
        : _,
    );
  return {
    top: (T.top - z.top + x.top) / j.y,
    bottom: (z.bottom - T.bottom + x.bottom) / j.y,
    left: (T.left - z.left + x.left) / j.x,
    right: (z.right - T.right + x.right) / j.x,
  };
}
const eD = 50,
  tD = async (e, r, o) => {
    const {
        placement: l = "bottom",
        strategy: s = "absolute",
        middleware: c = [],
        platform: u,
      } = o,
      f = u.detectOverflow ? u : { ...u, detectOverflow: J_ },
      d = await (u.isRTL == null ? void 0 : u.isRTL(r));
    let m = await u.getElementRects({ reference: e, floating: r, strategy: s }),
      { x: v, y: g } = X0(m, l, d),
      y = l,
      b = 0;
    const x = {};
    for (let C = 0; C < c.length; C++) {
      const R = c[C];
      if (!R) continue;
      const { name: T, fn: _ } = R,
        {
          x: D,
          y: j,
          data: z,
          reset: H,
        } = await _({
          x: v,
          y: g,
          initialPlacement: l,
          placement: y,
          strategy: s,
          middlewareData: x,
          rects: m,
          platform: f,
          elements: { reference: e, floating: r },
        });
      ((v = D ?? v),
        (g = j ?? g),
        (x[T] = { ...x[T], ...z }),
        H &&
          b < eD &&
          (b++,
          typeof H == "object" &&
            (H.placement && (y = H.placement),
            H.rects &&
              (m =
                H.rects === !0
                  ? await u.getElementRects({ reference: e, floating: r, strategy: s })
                  : H.rects),
            ({ x: v, y: g } = X0(m, y, d))),
          (C = -1)));
    }
    return { x: v, y: g, placement: y, strategy: s, middlewareData: x };
  },
  nD = (e) => ({
    name: "arrow",
    options: e,
    async fn(r) {
      const { x: o, y: l, placement: s, rects: c, platform: u, elements: f, middlewareData: d } = r,
        { element: m, padding: v = 0 } = pa(e, r) || {};
      if (m == null) return {};
      const g = kp(v),
        y = { x: o, y: l },
        b = zp(s),
        x = jp(b),
        C = await u.getDimensions(m),
        R = b === "y",
        T = R ? "top" : "left",
        _ = R ? "bottom" : "right",
        D = R ? "clientHeight" : "clientWidth",
        j = c.reference[x] + c.reference[b] - y[b] - c.floating[x],
        z = y[b] - c.reference[b],
        H = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(m));
      let $ = H ? H[D] : 0;
      (!$ || !(await (u.isElement == null ? void 0 : u.isElement(H)))) &&
        ($ = f.floating[D] || c.floating[x]);
      const M = j / 2 - z / 2,
        K = $ / 2 - C[x] / 2 - 1,
        Y = Kr(g[T], K),
        ee = Kr(g[_], K),
        ne = Y,
        oe = $ - C[x] - ee,
        U = $ / 2 - C[x] / 2 + M,
        re = Zm(ne, U, oe),
        N =
          !d.arrow &&
          Ti(s) != null &&
          U !== re &&
          c.reference[x] / 2 - (U < ne ? Y : ee) - C[x] / 2 < 0,
        k = N ? (U < ne ? U - ne : U - oe) : 0;
      return {
        [b]: y[b] + k,
        data: { [b]: re, centerOffset: U - re - k, ...(N && { alignmentOffset: k }) },
        reset: N,
      };
    },
  }),
  rD = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(r) {
          var o, l;
          const {
              placement: s,
              middlewareData: c,
              rects: u,
              initialPlacement: f,
              platform: d,
              elements: m,
            } = r,
            {
              mainAxis: v = !0,
              crossAxis: g = !0,
              fallbackPlacements: y,
              fallbackStrategy: b = "bestFit",
              fallbackAxisSideDirection: x = "none",
              flipAlignment: C = !0,
              ...R
            } = pa(e, r);
          if ((o = c.arrow) != null && o.alignmentOffset) return {};
          const T = Qr(s),
            _ = Fr(f),
            D = Qr(f) === f,
            j = await (d.isRTL == null ? void 0 : d.isRTL(m.floating)),
            z = y || (D || !C ? [rf(f)] : N_(f)),
            H = x !== "none";
          !y && H && z.push(...k_(f, C, x, j));
          const $ = [f, ...z],
            M = await d.detectOverflow(r, R),
            K = [];
          let Y = ((l = c.flip) == null ? void 0 : l.overflows) || [];
          if ((v && K.push(M[T]), g)) {
            const U = M_(s, u, j);
            K.push(M[U[0]], M[U[1]]);
          }
          if (((Y = [...Y, { placement: s, overflows: K }]), !K.every((U) => U <= 0))) {
            var ee, ne;
            const U = (((ee = c.flip) == null ? void 0 : ee.index) || 0) + 1,
              re = $[U];
            if (
              re &&
              (!(g === "alignment" ? _ !== Fr(re) : !1) ||
                Y.every((B) => (Fr(B.placement) === _ ? B.overflows[0] > 0 : !0)))
            )
              return { data: { index: U, overflows: Y }, reset: { placement: re } };
            let N =
              (ne = Y.filter((k) => k.overflows[0] <= 0).sort(
                (k, B) => k.overflows[1] - B.overflows[1],
              )[0]) == null
                ? void 0
                : ne.placement;
            if (!N)
              switch (b) {
                case "bestFit": {
                  var oe;
                  const k =
                    (oe = Y.filter((B) => {
                      if (H) {
                        const F = Fr(B.placement);
                        return F === _ || F === "y";
                      }
                      return !0;
                    })
                      .map((B) => [
                        B.placement,
                        B.overflows.filter((F) => F > 0).reduce((F, Z) => F + Z, 0),
                      ])
                      .sort((B, F) => B[1] - F[1])[0]) == null
                      ? void 0
                      : oe[0];
                  k && (N = k);
                  break;
                }
                case "initialPlacement":
                  N = f;
                  break;
              }
            if (s !== N) return { reset: { placement: N } };
          }
          return {};
        },
      }
    );
  };
function K0(e, r) {
  return {
    top: e.top - r.height,
    right: e.right - r.width,
    bottom: e.bottom - r.height,
    left: e.left - r.width,
  };
}
function Q0(e) {
  return D_.some((r) => e[r] >= 0);
}
const aD = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(r) {
        const { rects: o, platform: l } = r,
          { strategy: s = "referenceHidden", ...c } = pa(e, r);
        switch (s) {
          case "referenceHidden": {
            const u = await l.detectOverflow(r, { ...c, elementContext: "reference" }),
              f = K0(u, o.reference);
            return { data: { referenceHiddenOffsets: f, referenceHidden: Q0(f) } };
          }
          case "escaped": {
            const u = await l.detectOverflow(r, { ...c, altBoundary: !0 }),
              f = K0(u, o.floating);
            return { data: { escapedOffsets: f, escaped: Q0(f) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
function QS(e) {
  const r = Kr(...e.map((c) => c.left)),
    o = Kr(...e.map((c) => c.top)),
    l = zn(...e.map((c) => c.right)),
    s = zn(...e.map((c) => c.bottom));
  return { x: r, y: o, width: l - r, height: s - o };
}
function oD(e) {
  const r = e.slice().sort((s, c) => s.y - c.y),
    o = [];
  let l = null;
  for (let s = 0; s < r.length; s++) {
    const c = r[s];
    (!l || c.y - l.y > l.height / 2 ? o.push([c]) : o[o.length - 1].push(c), (l = c));
  }
  return o.map((s) => yi(QS(s)));
}
const lD = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "inline",
        options: e,
        async fn(r) {
          const { placement: o, elements: l, rects: s, platform: c, strategy: u } = r,
            { padding: f = 2, x: d, y: m } = pa(e, r),
            v = Array.from(
              (await (c.getClientRects == null ? void 0 : c.getClientRects(l.reference))) || [],
            ),
            g = oD(v),
            y = yi(QS(v)),
            b = kp(f);
          function x() {
            if (g.length === 2 && g[0].left > g[1].right && d != null && m != null)
              return (
                g.find(
                  (R) =>
                    d > R.left - b.left &&
                    d < R.right + b.right &&
                    m > R.top - b.top &&
                    m < R.bottom + b.bottom,
                ) || y
              );
            if (g.length >= 2) {
              if (Fr(o) === "y") {
                const Y = g[0],
                  ee = g[g.length - 1],
                  ne = Qr(o) === "top",
                  oe = Y.top,
                  U = ee.bottom,
                  re = ne ? Y.left : ee.left,
                  N = ne ? Y.right : ee.right,
                  k = N - re,
                  B = U - oe;
                return {
                  top: oe,
                  bottom: U,
                  left: re,
                  right: N,
                  width: k,
                  height: B,
                  x: re,
                  y: oe,
                };
              }
              const R = Qr(o) === "left",
                T = zn(...g.map((Y) => Y.right)),
                _ = Kr(...g.map((Y) => Y.left)),
                D = g.filter((Y) => (R ? Y.left === _ : Y.right === T)),
                j = D[0].top,
                z = D[D.length - 1].bottom,
                H = _,
                $ = T,
                M = $ - H,
                K = z - j;
              return { top: j, bottom: z, left: H, right: $, width: M, height: K, x: H, y: j };
            }
            return y;
          }
          const C = await c.getElementRects({
            reference: { getBoundingClientRect: x },
            floating: l.floating,
            strategy: u,
          });
          return s.reference.x !== C.reference.x ||
            s.reference.y !== C.reference.y ||
            s.reference.width !== C.reference.width ||
            s.reference.height !== C.reference.height
            ? { reset: { rects: C } }
            : {};
        },
      }
    );
  },
  ZS = new Set(["left", "top"]);
async function iD(e, r) {
  const { placement: o, platform: l, elements: s } = e,
    c = await (l.isRTL == null ? void 0 : l.isRTL(s.floating)),
    u = Qr(o),
    f = Ti(o),
    d = Fr(o) === "y",
    m = ZS.has(u) ? -1 : 1,
    v = c && d ? -1 : 1,
    g = pa(r, e);
  let {
    mainAxis: y,
    crossAxis: b,
    alignmentAxis: x,
  } = typeof g == "number"
    ? { mainAxis: g, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: g.mainAxis || 0, crossAxis: g.crossAxis || 0, alignmentAxis: g.alignmentAxis };
  return (
    f && typeof x == "number" && (b = f === "end" ? x * -1 : x),
    d ? { x: b * v, y: y * m } : { x: y * m, y: b * v }
  );
}
const sD = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(r) {
          var o, l;
          const { x: s, y: c, placement: u, middlewareData: f } = r,
            d = await iD(r, e);
          return u === ((o = f.offset) == null ? void 0 : o.placement) &&
            (l = f.arrow) != null &&
            l.alignmentOffset
            ? {}
            : { x: s + d.x, y: c + d.y, data: { ...d, placement: u } };
        },
      }
    );
  },
  cD = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(r) {
          const { x: o, y: l, placement: s, platform: c } = r,
            {
              mainAxis: u = !0,
              crossAxis: f = !1,
              limiter: d = {
                fn: (T) => {
                  let { x: _, y: D } = T;
                  return { x: _, y: D };
                },
              },
              ...m
            } = pa(e, r),
            v = { x: o, y: l },
            g = await c.detectOverflow(r, m),
            y = Fr(Qr(s)),
            b = Op(y);
          let x = v[b],
            C = v[y];
          if (u) {
            const T = b === "y" ? "top" : "left",
              _ = b === "y" ? "bottom" : "right",
              D = x + g[T],
              j = x - g[_];
            x = Zm(D, x, j);
          }
          if (f) {
            const T = y === "y" ? "top" : "left",
              _ = y === "y" ? "bottom" : "right",
              D = C + g[T],
              j = C - g[_];
            C = Zm(D, C, j);
          }
          const R = d.fn({ ...r, [b]: x, [y]: C });
          return { ...R, data: { x: R.x - o, y: R.y - l, enabled: { [b]: u, [y]: f } } };
        },
      }
    );
  },
  uD = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(r) {
          const { x: o, y: l, placement: s, rects: c, middlewareData: u } = r,
            { offset: f = 0, mainAxis: d = !0, crossAxis: m = !0 } = pa(e, r),
            v = { x: o, y: l },
            g = Fr(s),
            y = Op(g);
          let b = v[y],
            x = v[g];
          const C = pa(f, r),
            R =
              typeof C == "number"
                ? { mainAxis: C, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...C };
          if (d) {
            const D = y === "y" ? "height" : "width",
              j = c.reference[y] - c.floating[D] + R.mainAxis,
              z = c.reference[y] + c.reference[D] - R.mainAxis;
            b < j ? (b = j) : b > z && (b = z);
          }
          if (m) {
            var T, _;
            const D = y === "y" ? "width" : "height",
              j = ZS.has(Qr(s)),
              z =
                c.reference[g] -
                c.floating[D] +
                ((j && ((T = u.offset) == null ? void 0 : T[g])) || 0) +
                (j ? 0 : R.crossAxis),
              H =
                c.reference[g] +
                c.reference[D] +
                (j ? 0 : ((_ = u.offset) == null ? void 0 : _[g]) || 0) -
                (j ? R.crossAxis : 0);
            x < z ? (x = z) : x > H && (x = H);
          }
          return { [y]: b, [g]: x };
        },
      }
    );
  },
  fD = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(r) {
          var o, l;
          const { placement: s, rects: c, platform: u, elements: f } = r,
            { apply: d = () => {}, ...m } = pa(e, r),
            v = await u.detectOverflow(r, m),
            g = Qr(s),
            y = Ti(s),
            b = Fr(s) === "y",
            { width: x, height: C } = c.floating;
          let R, T;
          g === "top" || g === "bottom"
            ? ((R = g),
              (T =
                y === ((await (u.isRTL == null ? void 0 : u.isRTL(f.floating))) ? "start" : "end")
                  ? "left"
                  : "right"))
            : ((T = g), (R = y === "end" ? "top" : "bottom"));
          const _ = C - v.top - v.bottom,
            D = x - v.left - v.right,
            j = Kr(C - v[R], _),
            z = Kr(x - v[T], D),
            H = !r.middlewareData.shift;
          let $ = j,
            M = z;
          if (
            ((o = r.middlewareData.shift) != null && o.enabled.x && (M = D),
            (l = r.middlewareData.shift) != null && l.enabled.y && ($ = _),
            H && !y)
          ) {
            const Y = zn(v.left, 0),
              ee = zn(v.right, 0),
              ne = zn(v.top, 0),
              oe = zn(v.bottom, 0);
            b
              ? (M = x - 2 * (Y !== 0 || ee !== 0 ? Y + ee : zn(v.left, v.right)))
              : ($ = C - 2 * (ne !== 0 || oe !== 0 ? ne + oe : zn(v.top, v.bottom)));
          }
          await d({ ...r, availableWidth: M, availableHeight: $ });
          const K = await u.getDimensions(f.floating);
          return x !== K.width || C !== K.height ? { reset: { rects: !0 } } : {};
        },
      }
    );
  };
function WS(e) {
  const r = Er(e);
  let o = parseFloat(r.width) || 0,
    l = parseFloat(r.height) || 0;
  const s = _r(e),
    c = s ? e.offsetWidth : o,
    u = s ? e.offsetHeight : l,
    f = nf(o) !== c || nf(l) !== u;
  return (f && ((o = c), (l = u)), { width: o, height: l, $: f });
}
function Lp(e) {
  return $t(e) ? e : e.contextElement;
}
function pi(e) {
  const r = Lp(e);
  if (!_r(r)) return ha(1);
  const o = r.getBoundingClientRect(),
    { width: l, height: s, $: c } = WS(r);
  let u = (c ? nf(o.width) : o.width) / l,
    f = (c ? nf(o.height) : o.height) / s;
  return (
    (!u || !Number.isFinite(u)) && (u = 1),
    (!f || !Number.isFinite(f)) && (f = 1),
    { x: u, y: f }
  );
}
const dD = ha(0);
function JS(e) {
  const r = Zn(e);
  return !Sf() || !r.visualViewport
    ? dD
    : { x: r.visualViewport.offsetLeft, y: r.visualViewport.offsetTop };
}
function hD(e, r, o) {
  return (r === void 0 && (r = !1), !o || (r && o !== Zn(e)) ? !1 : r);
}
function bl(e, r, o, l) {
  (r === void 0 && (r = !1), o === void 0 && (o = !1));
  const s = e.getBoundingClientRect(),
    c = Lp(e);
  let u = ha(1);
  r && (l ? $t(l) && (u = pi(l)) : (u = pi(e)));
  const f = hD(c, o, l) ? JS(c) : ha(0);
  let d = (s.left + f.x) / u.x,
    m = (s.top + f.y) / u.y,
    v = s.width / u.x,
    g = s.height / u.y;
  if (c) {
    const y = Zn(c),
      b = l && $t(l) ? Zn(l) : l;
    let x = y,
      C = Qm(x);
    for (; C && l && b !== x; ) {
      const R = pi(C),
        T = C.getBoundingClientRect(),
        _ = Er(C),
        D = T.left + (C.clientLeft + parseFloat(_.paddingLeft)) * R.x,
        j = T.top + (C.clientTop + parseFloat(_.paddingTop)) * R.y;
      ((d *= R.x),
        (m *= R.y),
        (v *= R.x),
        (g *= R.y),
        (d += D),
        (m += j),
        (x = Zn(C)),
        (C = Qm(x)));
    }
  }
  return yi({ width: v, height: g, x: d, y: m });
}
function xf(e, r) {
  const o = wf(e).scrollLeft;
  return r ? r.left + o : bl(va(e)).left + o;
}
function ew(e, r) {
  const o = e.getBoundingClientRect(),
    l = o.left + r.scrollLeft - xf(e, o),
    s = o.top + r.scrollTop;
  return { x: l, y: s };
}
function mD(e) {
  let { elements: r, rect: o, offsetParent: l, strategy: s } = e;
  const c = s === "fixed",
    u = va(l),
    f = r ? bf(r.floating) : !1;
  if (l === u || (f && c)) return o;
  let d = { scrollLeft: 0, scrollTop: 0 },
    m = ha(1);
  const v = ha(0),
    g = _r(l);
  if ((g || (!g && !c)) && ((Ri(l) !== "body" || rc(u)) && (d = wf(l)), g)) {
    const b = bl(l);
    ((m = pi(l)), (v.x = b.x + l.clientLeft), (v.y = b.y + l.clientTop));
  }
  const y = u && !g && !c ? ew(u, d) : ha(0);
  return {
    width: o.width * m.x,
    height: o.height * m.y,
    x: o.x * m.x - d.scrollLeft * m.x + v.x + y.x,
    y: o.y * m.y - d.scrollTop * m.y + v.y + y.y,
  };
}
function pD(e) {
  return Array.from(e.getClientRects());
}
function gD(e) {
  const r = va(e),
    o = wf(e),
    l = e.ownerDocument.body,
    s = zn(r.scrollWidth, r.clientWidth, l.scrollWidth, l.clientWidth),
    c = zn(r.scrollHeight, r.clientHeight, l.scrollHeight, l.clientHeight);
  let u = -o.scrollLeft + xf(e);
  const f = -o.scrollTop;
  return (
    Er(l).direction === "rtl" && (u += zn(r.clientWidth, l.clientWidth) - s),
    { width: s, height: c, x: u, y: f }
  );
}
const Z0 = 25;
function vD(e, r) {
  const o = Zn(e),
    l = va(e),
    s = o.visualViewport;
  let c = l.clientWidth,
    u = l.clientHeight,
    f = 0,
    d = 0;
  if (s) {
    ((c = s.width), (u = s.height));
    const v = Sf();
    (!v || (v && r === "fixed")) && ((f = s.offsetLeft), (d = s.offsetTop));
  }
  const m = xf(l);
  if (m <= 0) {
    const v = l.ownerDocument,
      g = v.body,
      y = getComputedStyle(g),
      b =
        (v.compatMode === "CSS1Compat" && parseFloat(y.marginLeft) + parseFloat(y.marginRight)) ||
        0,
      x = Math.abs(l.clientWidth - g.clientWidth - b);
    x <= Z0 && (c -= x);
  } else m <= Z0 && (c += m);
  return { width: c, height: u, x: f, y: d };
}
function yD(e, r) {
  const o = bl(e, !0, r === "fixed"),
    l = o.top + e.clientTop,
    s = o.left + e.clientLeft,
    c = _r(e) ? pi(e) : ha(1),
    u = e.clientWidth * c.x,
    f = e.clientHeight * c.y,
    d = s * c.x,
    m = l * c.y;
  return { width: u, height: f, x: d, y: m };
}
function W0(e, r, o) {
  let l;
  if (r === "viewport") l = vD(e, o);
  else if (r === "document") l = gD(va(e));
  else if ($t(r)) l = yD(r, o);
  else {
    const s = JS(e);
    l = { x: r.x - s.x, y: r.y - s.y, width: r.width, height: r.height };
  }
  return yi(l);
}
function tw(e, r) {
  const o = Ya(e);
  return o === r || !$t(o) || Ia(o) ? !1 : Er(o).position === "fixed" || tw(o, r);
}
function bD(e, r) {
  const o = r.get(e);
  if (o) return o;
  let l = Fa(e, [], !1).filter((f) => $t(f) && Ri(f) !== "body"),
    s = null;
  const c = Er(e).position === "fixed";
  let u = c ? Ya(e) : e;
  for (; $t(u) && !Ia(u); ) {
    const f = Er(u),
      d = Np(u);
    (!d && f.position === "fixed" && (s = null),
      (
        c
          ? !d && !s
          : (!d &&
              f.position === "static" &&
              !!s &&
              (s.position === "absolute" || s.position === "fixed")) ||
            (rc(u) && !d && tw(e, u))
      )
        ? (l = l.filter((v) => v !== u))
        : (s = f),
      (u = Ya(u)));
  }
  return (r.set(e, l), l);
}
function SD(e) {
  let { element: r, boundary: o, rootBoundary: l, strategy: s } = e;
  const u = [...(o === "clippingAncestors" ? (bf(r) ? [] : bD(r, this._c)) : [].concat(o)), l],
    f = W0(r, u[0], s);
  let d = f.top,
    m = f.right,
    v = f.bottom,
    g = f.left;
  for (let y = 1; y < u.length; y++) {
    const b = W0(r, u[y], s);
    ((d = zn(b.top, d)), (m = Kr(b.right, m)), (v = Kr(b.bottom, v)), (g = zn(b.left, g)));
  }
  return { width: m - g, height: v - d, x: g, y: d };
}
function wD(e) {
  const { width: r, height: o } = WS(e);
  return { width: r, height: o };
}
function xD(e, r, o) {
  const l = _r(r),
    s = va(r),
    c = o === "fixed",
    u = bl(e, !0, c, r);
  let f = { scrollLeft: 0, scrollTop: 0 };
  const d = ha(0);
  function m() {
    d.x = xf(s);
  }
  if (l || (!l && !c))
    if (((Ri(r) !== "body" || rc(s)) && (f = wf(r)), l)) {
      const b = bl(r, !0, c, r);
      ((d.x = b.x + r.clientLeft), (d.y = b.y + r.clientTop));
    } else s && m();
  c && !l && s && m();
  const v = s && !l && !c ? ew(s, f) : ha(0),
    g = u.left + f.scrollLeft - d.x - v.x,
    y = u.top + f.scrollTop - d.y - v.y;
  return { x: g, y, width: u.width, height: u.height };
}
function bm(e) {
  return Er(e).position === "static";
}
function J0(e, r) {
  if (!_r(e) || Er(e).position === "fixed") return null;
  if (r) return r(e);
  let o = e.offsetParent;
  return (va(e) === o && (o = o.ownerDocument.body), o);
}
function nw(e, r) {
  const o = Zn(e);
  if (bf(e)) return o;
  if (!_r(e)) {
    let s = Ya(e);
    for (; s && !Ia(s); ) {
      if ($t(s) && !bm(s)) return s;
      s = Ya(s);
    }
    return o;
  }
  let l = J0(e, r);
  for (; l && E_(l) && bm(l); ) l = J0(l, r);
  return l && Ia(l) && bm(l) && !Np(l) ? o : l || __(e) || o;
}
const CD = async function (e) {
  const r = this.getOffsetParent || nw,
    o = this.getDimensions,
    l = await o(e.floating);
  return {
    reference: xD(e.reference, await r(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: l.width, height: l.height },
  };
};
function ED(e) {
  return Er(e).direction === "rtl";
}
const RD = {
  convertOffsetParentRelativeRectToViewportRelativeRect: mD,
  getDocumentElement: va,
  getClippingRect: SD,
  getOffsetParent: nw,
  getElementRects: CD,
  getClientRects: pD,
  getDimensions: wD,
  getScale: pi,
  isElement: $t,
  isRTL: ED,
};
function rw(e, r) {
  return e.x === r.x && e.y === r.y && e.width === r.width && e.height === r.height;
}
function TD(e, r) {
  let o = null,
    l;
  const s = va(e);
  function c() {
    var f;
    (clearTimeout(l), (f = o) == null || f.disconnect(), (o = null));
  }
  function u(f, d) {
    (f === void 0 && (f = !1), d === void 0 && (d = 1), c());
    const m = e.getBoundingClientRect(),
      { left: v, top: g, width: y, height: b } = m;
    if ((f || r(), !y || !b)) return;
    const x = Du(g),
      C = Du(s.clientWidth - (v + y)),
      R = Du(s.clientHeight - (g + b)),
      T = Du(v),
      D = {
        rootMargin: -x + "px " + -C + "px " + -R + "px " + -T + "px",
        threshold: zn(0, Kr(1, d)) || 1,
      };
    let j = !0;
    function z(H) {
      const $ = H[0].intersectionRatio;
      if ($ !== d) {
        if (!j) return u();
        $
          ? u(!1, $)
          : (l = setTimeout(() => {
              u(!1, 1e-7);
            }, 1e3));
      }
      ($ === 1 && !rw(m, e.getBoundingClientRect()) && u(), (j = !1));
    }
    try {
      o = new IntersectionObserver(z, { ...D, root: s.ownerDocument });
    } catch {
      o = new IntersectionObserver(z, D);
    }
    o.observe(e);
  }
  return (u(!0), c);
}
function ep(e, r, o, l) {
  l === void 0 && (l = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: c = !0,
      elementResize: u = typeof ResizeObserver == "function",
      layoutShift: f = typeof IntersectionObserver == "function",
      animationFrame: d = !1,
    } = l,
    m = Lp(e),
    v = s || c ? [...(m ? Fa(m) : []), ...(r ? Fa(r) : [])] : [];
  v.forEach((T) => {
    (s && T.addEventListener("scroll", o, { passive: !0 }), c && T.addEventListener("resize", o));
  });
  const g = m && f ? TD(m, o) : null;
  let y = -1,
    b = null;
  u &&
    ((b = new ResizeObserver((T) => {
      let [_] = T;
      (_ &&
        _.target === m &&
        b &&
        r &&
        (b.unobserve(r),
        cancelAnimationFrame(y),
        (y = requestAnimationFrame(() => {
          var D;
          (D = b) == null || D.observe(r);
        }))),
        o());
    })),
    m && !d && b.observe(m),
    r && b.observe(r));
  let x,
    C = d ? bl(e) : null;
  d && R();
  function R() {
    const T = bl(e);
    (C && !rw(C, T) && o(), (C = T), (x = requestAnimationFrame(R)));
  }
  return (
    o(),
    () => {
      var T;
      (v.forEach((_) => {
        (s && _.removeEventListener("scroll", o), c && _.removeEventListener("resize", o));
      }),
        g?.(),
        (T = b) == null || T.disconnect(),
        (b = null),
        d && cancelAnimationFrame(x));
    }
  );
}
const _D = sD,
  DD = cD,
  AD = rD,
  MD = fD,
  ND = aD,
  e1 = nD,
  OD = lD,
  jD = uD,
  zD = (e, r, o) => {
    const l = new Map(),
      s = { platform: RD, ...o },
      c = { ...s.platform, _c: l };
    return tD(e, r, { ...s, platform: c });
  };
var kD = typeof document < "u",
  LD = function () {},
  Pu = kD ? S.useLayoutEffect : LD;
function af(e, r) {
  if (e === r) return !0;
  if (typeof e != typeof r) return !1;
  if (typeof e == "function" && e.toString() === r.toString()) return !0;
  let o, l, s;
  if (e && r && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((o = e.length), o !== r.length)) return !1;
      for (l = o; l-- !== 0; ) if (!af(e[l], r[l])) return !1;
      return !0;
    }
    if (((s = Object.keys(e)), (o = s.length), o !== Object.keys(r).length)) return !1;
    for (l = o; l-- !== 0; ) if (!{}.hasOwnProperty.call(r, s[l])) return !1;
    for (l = o; l-- !== 0; ) {
      const c = s[l];
      if (!(c === "_owner" && e.$$typeof) && !af(e[c], r[c])) return !1;
    }
    return !0;
  }
  return e !== e && r !== r;
}
function aw(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function t1(e, r) {
  const o = aw(e);
  return Math.round(r * o) / o;
}
function Sm(e) {
  const r = S.useRef(e);
  return (
    Pu(() => {
      r.current = e;
    }),
    r
  );
}
function BD(e) {
  e === void 0 && (e = {});
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: l = [],
      platform: s,
      elements: { reference: c, floating: u } = {},
      transform: f = !0,
      whileElementsMounted: d,
      open: m,
    } = e,
    [v, g] = S.useState({
      x: 0,
      y: 0,
      strategy: o,
      placement: r,
      middlewareData: {},
      isPositioned: !1,
    }),
    [y, b] = S.useState(l);
  af(y, l) || b(l);
  const [x, C] = S.useState(null),
    [R, T] = S.useState(null),
    _ = S.useCallback((B) => {
      B !== H.current && ((H.current = B), C(B));
    }, []),
    D = S.useCallback((B) => {
      B !== $.current && (($.current = B), T(B));
    }, []),
    j = c || x,
    z = u || R,
    H = S.useRef(null),
    $ = S.useRef(null),
    M = S.useRef(v),
    K = d != null,
    Y = Sm(d),
    ee = Sm(s),
    ne = Sm(m),
    oe = S.useCallback(() => {
      if (!H.current || !$.current) return;
      const B = { placement: r, strategy: o, middleware: y };
      (ee.current && (B.platform = ee.current),
        zD(H.current, $.current, B).then((F) => {
          const Z = { ...F, isPositioned: ne.current !== !1 };
          U.current &&
            !af(M.current, Z) &&
            ((M.current = Z),
            da.flushSync(() => {
              g(Z);
            }));
        }));
    }, [y, r, o, ee, ne]);
  Pu(() => {
    m === !1 &&
      M.current.isPositioned &&
      ((M.current.isPositioned = !1), g((B) => ({ ...B, isPositioned: !1 })));
  }, [m]);
  const U = S.useRef(!1);
  (Pu(
    () => (
      (U.current = !0),
      () => {
        U.current = !1;
      }
    ),
    [],
  ),
    Pu(() => {
      if ((j && (H.current = j), z && ($.current = z), j && z)) {
        if (Y.current) return Y.current(j, z, oe);
        oe();
      }
    }, [j, z, oe, Y, K]));
  const re = S.useMemo(
      () => ({ reference: H, floating: $, setReference: _, setFloating: D }),
      [_, D],
    ),
    N = S.useMemo(() => ({ reference: j, floating: z }), [j, z]),
    k = S.useMemo(() => {
      const B = { position: o, left: 0, top: 0 };
      if (!N.floating) return B;
      const F = t1(N.floating, v.x),
        Z = t1(N.floating, v.y);
      return f
        ? {
            ...B,
            transform: "translate(" + F + "px, " + Z + "px)",
            ...(aw(N.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: o, left: F, top: Z };
    }, [o, f, N.floating, v.x, v.y]);
  return S.useMemo(
    () => ({ ...v, update: oe, refs: re, elements: N, floatingStyles: k }),
    [v, oe, re, N, k],
  );
}
const $D = (e) => {
    function r(o) {
      return {}.hasOwnProperty.call(o, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(o) {
        const { element: l, padding: s } = typeof e == "function" ? e(o) : e;
        return l && r(l)
          ? l.current != null
            ? e1({ element: l.current, padding: s }).fn(o)
            : {}
          : l
            ? e1({ element: l, padding: s }).fn(o)
            : {};
      },
    };
  },
  ow = (e, r) => {
    const o = _D(e);
    return { name: o.name, fn: o.fn, options: [e, r] };
  },
  Bp = (e, r) => {
    const o = DD(e);
    return { name: o.name, fn: o.fn, options: [e, r] };
  },
  n1 = (e, r) => ({ fn: jD(e).fn, options: [e, r] }),
  of = (e, r) => {
    const o = AD(e);
    return { name: o.name, fn: o.fn, options: [e, r] };
  },
  HD = (e, r) => {
    const o = MD(e);
    return { name: o.name, fn: o.fn, options: [e, r] };
  },
  UD = (e, r) => {
    const o = ND(e);
    return { name: o.name, fn: o.fn, options: [e, r] };
  },
  Bs = (e, r) => {
    const o = OD(e);
    return { name: o.name, fn: o.fn, options: [e, r] };
  },
  lw = (e, r) => {
    const o = $D(e);
    return { name: o.name, fn: o.fn, options: [e, r] };
  };
function iw(e) {
  const r = S.useRef(void 0),
    o = S.useCallback((l) => {
      const s = e.map((c) => {
        if (c != null) {
          if (typeof c == "function") {
            const u = c,
              f = u(l);
            return typeof f == "function"
              ? f
              : () => {
                  u(null);
                };
          }
          return (
            (c.current = l),
            () => {
              c.current = null;
            }
          );
        }
      });
      return () => {
        s.forEach((c) => c?.());
      };
    }, e);
  return S.useMemo(
    () =>
      e.every((l) => l == null)
        ? null
        : (l) => {
            (r.current && (r.current(), (r.current = void 0)), l != null && (r.current = o(l)));
          },
    e,
  );
}
const PD = "data-floating-ui-focusable",
  r1 = "active",
  a1 = "selected",
  VD = { ...mp };
let o1 = !1,
  ID = 0;
const l1 = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + ID++;
function FD() {
  const [e, r] = S.useState(() => (o1 ? l1() : void 0));
  return (
    ma(() => {
      e == null && r(l1());
    }, []),
    S.useEffect(() => {
      o1 = !0;
    }, []),
    e
  );
}
const qD = VD.useId,
  sw = qD || FD;
function YD() {
  const e = new Map();
  return {
    emit(r, o) {
      var l;
      (l = e.get(r)) == null || l.forEach((s) => s(o));
    },
    on(r, o) {
      (e.has(r) || e.set(r, new Set()), e.get(r).add(o));
    },
    off(r, o) {
      var l;
      (l = e.get(r)) == null || l.delete(o);
    },
  };
}
const GD = S.createContext(null),
  XD = S.createContext(null),
  $p = () => {
    var e;
    return ((e = S.useContext(GD)) == null ? void 0 : e.id) || null;
  },
  Hp = () => S.useContext(XD);
function Up(e) {
  return "data-floating-ui-" + e;
}
function Qn(e) {
  e.current !== -1 && (clearTimeout(e.current), (e.current = -1));
}
const i1 = Up("safe-polygon");
function Vu(e, r, o) {
  if (o && !Jm(o)) return 0;
  if (typeof e == "number") return e;
  if (typeof e == "function") {
    const l = e();
    return typeof l == "number" ? l : l?.[r];
  }
  return e?.[r];
}
function wm(e) {
  return typeof e == "function" ? e() : e;
}
function cw(e, r) {
  r === void 0 && (r = {});
  const { open: o, onOpenChange: l, dataRef: s, events: c, elements: u } = e,
    {
      enabled: f = !0,
      delay: d = 0,
      handleClose: m = null,
      mouseOnly: v = !1,
      restMs: g = 0,
      move: y = !0,
    } = r,
    b = Hp(),
    x = $p(),
    C = Au(m),
    R = Au(d),
    T = Au(o),
    _ = Au(g),
    D = S.useRef(),
    j = S.useRef(-1),
    z = S.useRef(),
    H = S.useRef(-1),
    $ = S.useRef(!0),
    M = S.useRef(!1),
    K = S.useRef(() => {}),
    Y = S.useRef(!1),
    ee = sa(() => {
      var k;
      const B = (k = s.current.openEvent) == null ? void 0 : k.type;
      return B?.includes("mouse") && B !== "mousedown";
    });
  (S.useEffect(() => {
    if (!f) return;
    function k(B) {
      let { open: F } = B;
      F || (Qn(j), Qn(H), ($.current = !0), (Y.current = !1));
    }
    return (
      c.on("openchange", k),
      () => {
        c.off("openchange", k);
      }
    );
  }, [f, c]),
    S.useEffect(() => {
      if (!f || !C.current || !o) return;
      function k(F) {
        ee() && l(!1, F, "hover");
      }
      const B = hl(u.floating).documentElement;
      return (
        B.addEventListener("mouseleave", k),
        () => {
          B.removeEventListener("mouseleave", k);
        }
      );
    }, [u.floating, o, l, f, C, ee]));
  const ne = S.useCallback(
      function (k, B, F) {
        (B === void 0 && (B = !0), F === void 0 && (F = "hover"));
        const Z = Vu(R.current, "close", D.current);
        Z && !z.current
          ? (Qn(j), (j.current = window.setTimeout(() => l(!1, k, F), Z)))
          : B && (Qn(j), l(!1, k, F));
      },
      [R, l],
    ),
    oe = sa(() => {
      (K.current(), (z.current = void 0));
    }),
    U = sa(() => {
      if (M.current) {
        const k = hl(u.floating).body;
        ((k.style.pointerEvents = ""), k.removeAttribute(i1), (M.current = !1));
      }
    }),
    re = sa(() =>
      s.current.openEvent ? ["click", "mousedown"].includes(s.current.openEvent.type) : !1,
    );
  (S.useEffect(() => {
    if (!f) return;
    function k(P) {
      if (
        (Qn(j),
        ($.current = !1),
        (v && !Jm(D.current)) || (wm(_.current) > 0 && !Vu(R.current, "open")))
      )
        return;
      const Q = Vu(R.current, "open", D.current);
      Q
        ? (j.current = window.setTimeout(() => {
            T.current || l(!0, P, "hover");
          }, Q))
        : o || l(!0, P, "hover");
    }
    function B(P) {
      if (re()) {
        U();
        return;
      }
      K.current();
      const Q = hl(u.floating);
      if ((Qn(H), (Y.current = !1), C.current && s.current.floatingContext)) {
        (o || Qn(j),
          (z.current = C.current({
            ...s.current.floatingContext,
            tree: b,
            x: P.clientX,
            y: P.clientY,
            onClose() {
              (U(), oe(), re() || ne(P, !0, "safe-polygon"));
            },
          })));
        const ie = z.current;
        (Q.addEventListener("mousemove", ie),
          (K.current = () => {
            Q.removeEventListener("mousemove", ie);
          }));
        return;
      }
      (D.current !== "touch" || !Vs(u.floating, P.relatedTarget)) && ne(P);
    }
    function F(P) {
      re() ||
        (s.current.floatingContext &&
          (C.current == null ||
            C.current({
              ...s.current.floatingContext,
              tree: b,
              x: P.clientX,
              y: P.clientY,
              onClose() {
                (U(), oe(), re() || ne(P));
              },
            })(P)));
    }
    function Z() {
      Qn(j);
    }
    function O(P) {
      re() || ne(P, !1);
    }
    if ($t(u.domReference)) {
      const P = u.domReference,
        Q = u.floating;
      return (
        o && P.addEventListener("mouseleave", F),
        y && P.addEventListener("mousemove", k, { once: !0 }),
        P.addEventListener("mouseenter", k),
        P.addEventListener("mouseleave", B),
        Q &&
          (Q.addEventListener("mouseleave", F),
          Q.addEventListener("mouseenter", Z),
          Q.addEventListener("mouseleave", O)),
        () => {
          (o && P.removeEventListener("mouseleave", F),
            y && P.removeEventListener("mousemove", k),
            P.removeEventListener("mouseenter", k),
            P.removeEventListener("mouseleave", B),
            Q &&
              (Q.removeEventListener("mouseleave", F),
              Q.removeEventListener("mouseenter", Z),
              Q.removeEventListener("mouseleave", O)));
        }
      );
    }
  }, [u, f, e, v, y, ne, oe, U, l, o, T, b, R, C, s, re, _]),
    ma(() => {
      var k;
      if (
        f &&
        o &&
        (k = C.current) != null &&
        (k = k.__options) != null &&
        k.blockPointerEvents &&
        ee()
      ) {
        M.current = !0;
        const F = u.floating;
        if ($t(u.domReference) && F) {
          var B;
          const Z = hl(u.floating).body;
          Z.setAttribute(i1, "");
          const O = u.domReference,
            P =
              b == null ||
              (B = b.nodesRef.current.find((Q) => Q.id === x)) == null ||
              (B = B.context) == null
                ? void 0
                : B.elements.floating;
          return (
            P && (P.style.pointerEvents = ""),
            (Z.style.pointerEvents = "none"),
            (O.style.pointerEvents = "auto"),
            (F.style.pointerEvents = "auto"),
            () => {
              ((Z.style.pointerEvents = ""),
                (O.style.pointerEvents = ""),
                (F.style.pointerEvents = ""));
            }
          );
        }
      }
    }, [f, o, x, u, b, C, ee]),
    ma(() => {
      o || ((D.current = void 0), (Y.current = !1), oe(), U());
    }, [o, oe, U]),
    S.useEffect(
      () => () => {
        (oe(), Qn(j), Qn(H), U());
      },
      [f, u.domReference, oe, U],
    ));
  const N = S.useMemo(() => {
    function k(B) {
      D.current = B.pointerType;
    }
    return {
      onPointerDown: k,
      onPointerEnter: k,
      onMouseMove(B) {
        const { nativeEvent: F } = B;
        function Z() {
          !$.current && !T.current && l(!0, F, "hover");
        }
        (v && !Jm(D.current)) ||
          o ||
          wm(_.current) === 0 ||
          (Y.current && B.movementX ** 2 + B.movementY ** 2 < 2) ||
          (Qn(H),
          D.current === "touch"
            ? Z()
            : ((Y.current = !0), (H.current = window.setTimeout(Z, wm(_.current)))));
      },
    };
  }, [v, l, o, T, _]);
  return S.useMemo(() => (f ? { reference: N } : {}), [f, N]);
}
const tp = () => {},
  uw = S.createContext({
    delay: 0,
    initialDelay: 0,
    timeoutMs: 0,
    currentId: null,
    setCurrentId: tp,
    setState: tp,
    isInstantPhase: !1,
  }),
  KD = () => S.useContext(uw);
function QD(e) {
  const { children: r, delay: o, timeoutMs: l = 0 } = e,
    [s, c] = S.useReducer((d, m) => ({ ...d, ...m }), {
      delay: o,
      timeoutMs: l,
      initialDelay: o,
      currentId: null,
      isInstantPhase: !1,
    }),
    u = S.useRef(null),
    f = S.useCallback((d) => {
      c({ currentId: d });
    }, []);
  return (
    ma(() => {
      s.currentId
        ? u.current === null
          ? (u.current = s.currentId)
          : s.isInstantPhase || c({ isInstantPhase: !0 })
        : (s.isInstantPhase && c({ isInstantPhase: !1 }), (u.current = null));
    }, [s.currentId, s.isInstantPhase]),
    w.jsx(uw.Provider, {
      value: S.useMemo(() => ({ ...s, setState: c, setCurrentId: f }), [s, f]),
      children: r,
    })
  );
}
function ZD(e, r) {
  r === void 0 && (r = {});
  const { open: o, onOpenChange: l, floatingId: s } = e,
    { id: c, enabled: u = !0 } = r,
    f = c ?? s,
    d = KD(),
    { currentId: m, setCurrentId: v, initialDelay: g, setState: y, timeoutMs: b } = d;
  return (
    ma(() => {
      u && m && (y({ delay: { open: 1, close: Vu(g, "close") } }), m !== f && l(!1));
    }, [u, f, l, y, m, g]),
    ma(() => {
      function x() {
        (l(!1), y({ delay: g, currentId: null }));
      }
      if (u && m && !o && m === f) {
        if (b) {
          const C = window.setTimeout(x, b);
          return () => {
            clearTimeout(C);
          };
        }
        x();
      }
    }, [u, o, y, m, f, l, g, b]),
    ma(() => {
      u && (v === tp || !o || v(f));
    }, [u, o, v, f]),
    d
  );
}
function xm(e, r) {
  if (!e || !r) return !1;
  const o = r.getRootNode == null ? void 0 : r.getRootNode();
  if (e.contains(r)) return !0;
  if (o && tf(o)) {
    let l = r;
    for (; l; ) {
      if (e === l) return !0;
      l = l.parentNode || l.host;
    }
  }
  return !1;
}
function WD(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const JD = { pointerdown: "onPointerDown", mousedown: "onMouseDown", click: "onClick" },
  eA = {
    pointerdown: "onPointerDownCapture",
    mousedown: "onMouseDownCapture",
    click: "onClickCapture",
  },
  s1 = (e) => {
    var r, o;
    return {
      escapeKey: typeof e == "boolean" ? e : (r = e?.escapeKey) != null ? r : !1,
      outsidePress: typeof e == "boolean" ? e : (o = e?.outsidePress) != null ? o : !0,
    };
  };
function tA(e, r) {
  r === void 0 && (r = {});
  const { open: o, onOpenChange: l, elements: s, dataRef: c } = e,
    {
      enabled: u = !0,
      escapeKey: f = !0,
      outsidePress: d = !0,
      outsidePressEvent: m = "pointerdown",
      referencePress: v = !1,
      referencePressEvent: g = "pointerdown",
      ancestorScroll: y = !1,
      bubbles: b,
      capture: x,
    } = r,
    C = Hp(),
    R = sa(typeof d == "function" ? d : () => !1),
    T = typeof d == "function" ? R : d,
    _ = S.useRef(!1),
    { escapeKey: D, outsidePress: j } = s1(b),
    { escapeKey: z, outsidePress: H } = s1(x),
    $ = S.useRef(!1),
    M = sa((U) => {
      var re;
      if (!o || !u || !f || U.key !== "Escape" || $.current) return;
      const N = (re = c.current.floatingContext) == null ? void 0 : re.nodeId,
        k = C ? Uu(C.nodesRef.current, N) : [];
      if (!D && (U.stopPropagation(), k.length > 0)) {
        let B = !0;
        if (
          (k.forEach((F) => {
            var Z;
            if (
              (Z = F.context) != null &&
              Z.open &&
              !F.context.dataRef.current.__escapeKeyBubbles
            ) {
              B = !1;
              return;
            }
          }),
          !B)
        )
          return;
      }
      l(!1, G_(U) ? U.nativeEvent : U, "escape-key");
    }),
    K = sa((U) => {
      var re;
      const N = () => {
        var k;
        (M(U), (k = ui(U)) == null || k.removeEventListener("keydown", N));
      };
      (re = ui(U)) == null || re.addEventListener("keydown", N);
    }),
    Y = sa((U) => {
      var re;
      const N = c.current.insideReactTree;
      c.current.insideReactTree = !1;
      const k = _.current;
      if (((_.current = !1), (m === "click" && k) || N || (typeof T == "function" && !T(U))))
        return;
      const B = ui(U),
        F = "[" + Up("inert") + "]",
        Z = hl(s.floating).querySelectorAll(F);
      let O = $t(B) ? B : null;
      for (; O && !Ia(O); ) {
        const ie = Ya(O);
        if (Ia(ie) || !$t(ie)) break;
        O = ie;
      }
      if (
        Z.length &&
        $t(B) &&
        !I_(B) &&
        !Vs(B, s.floating) &&
        Array.from(Z).every((ie) => !Vs(O, ie))
      )
        return;
      if (_r(B) && oe) {
        const ie = Ia(B),
          ue = Er(B),
          ge = /auto|scroll/,
          Se = ie || ge.test(ue.overflowX),
          Ce = ie || ge.test(ue.overflowY),
          Ye = Se && B.clientWidth > 0 && B.scrollWidth > B.clientWidth,
          je = Ce && B.clientHeight > 0 && B.scrollHeight > B.clientHeight,
          de = ue.direction === "rtl",
          _e = je && (de ? U.offsetX <= B.offsetWidth - B.clientWidth : U.offsetX > B.clientWidth),
          ze = Ye && U.offsetY > B.clientHeight;
        if (_e || ze) return;
      }
      const P = (re = c.current.floatingContext) == null ? void 0 : re.nodeId,
        Q =
          C &&
          Uu(C.nodesRef.current, P).some((ie) => {
            var ue;
            return ym(U, (ue = ie.context) == null ? void 0 : ue.elements.floating);
          });
      if (ym(U, s.floating) || ym(U, s.domReference) || Q) return;
      const ae = C ? Uu(C.nodesRef.current, P) : [];
      if (ae.length > 0) {
        let ie = !0;
        if (
          (ae.forEach((ue) => {
            var ge;
            if (
              (ge = ue.context) != null &&
              ge.open &&
              !ue.context.dataRef.current.__outsidePressBubbles
            ) {
              ie = !1;
              return;
            }
          }),
          !ie)
        )
          return;
      }
      l(!1, U, "outside-press");
    }),
    ee = sa((U) => {
      var re;
      const N = () => {
        var k;
        (Y(U), (k = ui(U)) == null || k.removeEventListener(m, N));
      };
      (re = ui(U)) == null || re.addEventListener(m, N);
    });
  (S.useEffect(() => {
    if (!o || !u) return;
    ((c.current.__escapeKeyBubbles = D), (c.current.__outsidePressBubbles = j));
    let U = -1;
    function re(Z) {
      l(!1, Z, "ancestor-scroll");
    }
    function N() {
      (window.clearTimeout(U), ($.current = !0));
    }
    function k() {
      U = window.setTimeout(
        () => {
          $.current = !1;
        },
        Sf() ? 5 : 0,
      );
    }
    const B = hl(s.floating);
    (f &&
      (B.addEventListener("keydown", z ? K : M, z),
      B.addEventListener("compositionstart", N),
      B.addEventListener("compositionend", k)),
      T && B.addEventListener(m, H ? ee : Y, H));
    let F = [];
    return (
      y &&
        ($t(s.domReference) && (F = Fa(s.domReference)),
        $t(s.floating) && (F = F.concat(Fa(s.floating))),
        !$t(s.reference) &&
          s.reference &&
          s.reference.contextElement &&
          (F = F.concat(Fa(s.reference.contextElement)))),
      (F = F.filter((Z) => {
        var O;
        return Z !== ((O = B.defaultView) == null ? void 0 : O.visualViewport);
      })),
      F.forEach((Z) => {
        Z.addEventListener("scroll", re, { passive: !0 });
      }),
      () => {
        (f &&
          (B.removeEventListener("keydown", z ? K : M, z),
          B.removeEventListener("compositionstart", N),
          B.removeEventListener("compositionend", k)),
          T && B.removeEventListener(m, H ? ee : Y, H),
          F.forEach((Z) => {
            Z.removeEventListener("scroll", re);
          }),
          window.clearTimeout(U));
      }
    );
  }, [c, s, f, T, m, o, l, y, u, D, j, M, z, K, Y, H, ee]),
    S.useEffect(() => {
      c.current.insideReactTree = !1;
    }, [c, T, m]));
  const ne = S.useMemo(
      () => ({
        onKeyDown: M,
        ...(v && {
          [JD[g]]: (U) => {
            l(!1, U.nativeEvent, "reference-press");
          },
          ...(g !== "click" && {
            onClick(U) {
              l(!1, U.nativeEvent, "reference-press");
            },
          }),
        }),
      }),
      [M, l, v, g],
    ),
    oe = S.useMemo(() => {
      function U(re) {
        re.button === 0 && (_.current = !0);
      }
      return {
        onKeyDown: M,
        onMouseDown: U,
        onMouseUp: U,
        [eA[m]]: () => {
          c.current.insideReactTree = !0;
        },
      };
    }, [M, m, c]);
  return S.useMemo(() => (u ? { reference: ne, floating: oe } : {}), [u, ne, oe]);
}
function nA(e) {
  const { open: r = !1, onOpenChange: o, elements: l } = e,
    s = sw(),
    c = S.useRef({}),
    [u] = S.useState(() => YD()),
    f = $p() != null,
    [d, m] = S.useState(l.reference),
    v = sa((b, x, C) => {
      ((c.current.openEvent = b ? x : void 0),
        u.emit("openchange", { open: b, event: x, reason: C, nested: f }),
        o?.(b, x, C));
    }),
    g = S.useMemo(() => ({ setPositionReference: m }), []),
    y = S.useMemo(
      () => ({
        reference: d || l.reference || null,
        floating: l.floating || null,
        domReference: l.reference,
      }),
      [d, l.reference, l.floating],
    );
  return S.useMemo(
    () => ({
      dataRef: c,
      open: r,
      onOpenChange: v,
      elements: y,
      events: u,
      floatingId: s,
      refs: g,
    }),
    [r, v, y, u, s, g],
  );
}
function Cf(e) {
  e === void 0 && (e = {});
  const { nodeId: r } = e,
    o = nA({ ...e, elements: { reference: null, floating: null, ...e.elements } }),
    l = e.rootContext || o,
    s = l.elements,
    [c, u] = S.useState(null),
    [f, d] = S.useState(null),
    v = s?.domReference || c,
    g = S.useRef(null),
    y = Hp();
  ma(() => {
    v && (g.current = v);
  }, [v]);
  const b = BD({ ...e, elements: { ...s, ...(f && { reference: f }) } }),
    x = S.useCallback(
      (D) => {
        const j = $t(D)
          ? {
              getBoundingClientRect: () => D.getBoundingClientRect(),
              getClientRects: () => D.getClientRects(),
              contextElement: D,
            }
          : D;
        (d(j), b.refs.setReference(j));
      },
      [b.refs],
    ),
    C = S.useCallback(
      (D) => {
        (($t(D) || D === null) && ((g.current = D), u(D)),
          ($t(b.refs.reference.current) ||
            b.refs.reference.current === null ||
            (D !== null && !$t(D))) &&
            b.refs.setReference(D));
      },
      [b.refs],
    ),
    R = S.useMemo(
      () => ({ ...b.refs, setReference: C, setPositionReference: x, domReference: g }),
      [b.refs, C, x],
    ),
    T = S.useMemo(() => ({ ...b.elements, domReference: v }), [b.elements, v]),
    _ = S.useMemo(() => ({ ...b, ...l, refs: R, elements: T, nodeId: r }), [b, R, T, r, l]);
  return (
    ma(() => {
      l.dataRef.current.floatingContext = _;
      const D = y?.nodesRef.current.find((j) => j.id === r);
      D && (D.context = _);
    }),
    S.useMemo(() => ({ ...b, context: _, refs: R, elements: T }), [b, R, T, _])
  );
}
function Cm() {
  return U_() && H_();
}
function rA(e, r) {
  r === void 0 && (r = {});
  const { open: o, onOpenChange: l, events: s, dataRef: c, elements: u } = e,
    { enabled: f = !0, visibleOnly: d = !0 } = r,
    m = S.useRef(!1),
    v = S.useRef(-1),
    g = S.useRef(!0);
  (S.useEffect(() => {
    if (!f) return;
    const b = Zn(u.domReference);
    function x() {
      !o && _r(u.domReference) && u.domReference === G0(hl(u.domReference)) && (m.current = !0);
    }
    function C() {
      g.current = !0;
    }
    function R() {
      g.current = !1;
    }
    return (
      b.addEventListener("blur", x),
      Cm() && (b.addEventListener("keydown", C, !0), b.addEventListener("pointerdown", R, !0)),
      () => {
        (b.removeEventListener("blur", x),
          Cm() &&
            (b.removeEventListener("keydown", C, !0), b.removeEventListener("pointerdown", R, !0)));
      }
    );
  }, [u.domReference, o, f]),
    S.useEffect(() => {
      if (!f) return;
      function b(x) {
        let { reason: C } = x;
        (C === "reference-press" || C === "escape-key") && (m.current = !0);
      }
      return (
        s.on("openchange", b),
        () => {
          s.off("openchange", b);
        }
      );
    }, [s, f]),
    S.useEffect(
      () => () => {
        Qn(v);
      },
      [],
    ));
  const y = S.useMemo(
    () => ({
      onMouseLeave() {
        m.current = !1;
      },
      onFocus(b) {
        if (m.current) return;
        const x = ui(b.nativeEvent);
        if (d && $t(x)) {
          if (Cm() && !b.relatedTarget) {
            if (!g.current && !F_(x)) return;
          } else if (!q_(x)) return;
        }
        l(!0, b.nativeEvent, "focus");
      },
      onBlur(b) {
        m.current = !1;
        const x = b.relatedTarget,
          C = b.nativeEvent,
          R =
            $t(x) && x.hasAttribute(Up("focus-guard")) && x.getAttribute("data-type") === "outside";
        v.current = window.setTimeout(() => {
          var T;
          const _ = G0(u.domReference ? u.domReference.ownerDocument : document);
          (!x && _ === u.domReference) ||
            Vs((T = c.current.floatingContext) == null ? void 0 : T.refs.floating.current, _) ||
            Vs(u.domReference, _) ||
            R ||
            l(!1, C, "focus");
        });
      },
    }),
    [c, u.domReference, l, d],
  );
  return S.useMemo(() => (f ? { reference: y } : {}), [f, y]);
}
function Em(e, r, o) {
  const l = new Map(),
    s = o === "item";
  let c = e;
  if (s && e) {
    const { [r1]: u, [a1]: f, ...d } = e;
    c = d;
  }
  return {
    ...(o === "floating" && { tabIndex: -1, [PD]: "" }),
    ...c,
    ...r
      .map((u) => {
        const f = u ? u[o] : null;
        return typeof f == "function" ? (e ? f(e) : null) : f;
      })
      .concat(e)
      .reduce(
        (u, f) => (
          f &&
            Object.entries(f).forEach((d) => {
              let [m, v] = d;
              if (!(s && [r1, a1].includes(m)))
                if (m.indexOf("on") === 0) {
                  if ((l.has(m) || l.set(m, []), typeof v == "function")) {
                    var g;
                    ((g = l.get(m)) == null || g.push(v),
                      (u[m] = function () {
                        for (var y, b = arguments.length, x = new Array(b), C = 0; C < b; C++)
                          x[C] = arguments[C];
                        return (y = l.get(m)) == null
                          ? void 0
                          : y.map((R) => R(...x)).find((R) => R !== void 0);
                      }));
                  }
                } else u[m] = v;
            }),
          u
        ),
        {},
      ),
  };
}
function fw(e) {
  e === void 0 && (e = []);
  const r = e.map((f) => f?.reference),
    o = e.map((f) => f?.floating),
    l = e.map((f) => f?.item),
    s = S.useCallback((f) => Em(f, e, "reference"), r),
    c = S.useCallback((f) => Em(f, e, "floating"), o),
    u = S.useCallback((f) => Em(f, e, "item"), l);
  return S.useMemo(
    () => ({ getReferenceProps: s, getFloatingProps: c, getItemProps: u }),
    [s, c, u],
  );
}
const aA = new Map([
  ["select", "listbox"],
  ["combobox", "listbox"],
  ["label", !1],
]);
function oA(e, r) {
  var o, l;
  r === void 0 && (r = {});
  const { open: s, elements: c, floatingId: u } = e,
    { enabled: f = !0, role: d = "dialog" } = r,
    m = sw(),
    v = ((o = c.domReference) == null ? void 0 : o.id) || m,
    g = S.useMemo(() => {
      var _;
      return ((_ = Y_(c.floating)) == null ? void 0 : _.id) || u;
    }, [c.floating, u]),
    y = (l = aA.get(d)) != null ? l : d,
    x = $p() != null,
    C = S.useMemo(
      () =>
        y === "tooltip" || d === "label"
          ? { ["aria-" + (d === "label" ? "labelledby" : "describedby")]: s ? g : void 0 }
          : {
              "aria-expanded": s ? "true" : "false",
              "aria-haspopup": y === "alertdialog" ? "dialog" : y,
              "aria-controls": s ? g : void 0,
              ...(y === "listbox" && { role: "combobox" }),
              ...(y === "menu" && { id: v }),
              ...(y === "menu" && x && { role: "menuitem" }),
              ...(d === "select" && { "aria-autocomplete": "none" }),
              ...(d === "combobox" && { "aria-autocomplete": "list" }),
            },
      [y, g, x, s, v, d],
    ),
    R = S.useMemo(() => {
      const _ = { id: g, ...(y && { role: y }) };
      return y === "tooltip" || d === "label"
        ? _
        : { ..._, ...(y === "menu" && { "aria-labelledby": v }) };
    }, [y, g, v, d]),
    T = S.useCallback(
      (_) => {
        let { active: D, selected: j } = _;
        const z = { role: "option", ...(D && { id: g + "-fui-option" }) };
        switch (d) {
          case "select":
          case "combobox":
            return { ...z, "aria-selected": j };
        }
        return {};
      },
      [g, d],
    );
  return S.useMemo(() => (f ? { reference: C, floating: R, item: T } : {}), [f, C, R, T]);
}
function dw(e, r, o) {
  return (
    o === void 0 && (o = !0),
    e
      .filter((s) => {
        var c;
        return s.parentId === r && (!o || ((c = s.context) == null ? void 0 : c.open));
      })
      .flatMap((s) => [s, ...dw(e, s.id, o)])
  );
}
function c1(e, r) {
  const [o, l] = e;
  let s = !1;
  const c = r.length;
  for (let u = 0, f = c - 1; u < c; f = u++) {
    const [d, m] = r[u] || [0, 0],
      [v, g] = r[f] || [0, 0];
    m >= l != g >= l && o <= ((v - d) * (l - m)) / (g - m) + d && (s = !s);
  }
  return s;
}
function lA(e, r) {
  return e[0] >= r.x && e[0] <= r.x + r.width && e[1] >= r.y && e[1] <= r.y + r.height;
}
function iA(e) {
  e === void 0 && (e = {});
  const { buffer: r = 0.5, blockPointerEvents: o = !1, requireIntent: l = !0 } = e,
    s = { current: -1 };
  let c = !1,
    u = null,
    f = null,
    d = typeof performance < "u" ? performance.now() : 0;
  function m(g, y) {
    const b = performance.now(),
      x = b - d;
    if (u === null || f === null || x === 0) return ((u = g), (f = y), (d = b), null);
    const C = g - u,
      R = y - f,
      _ = Math.sqrt(C * C + R * R) / x;
    return ((u = g), (f = y), (d = b), _);
  }
  const v = (g) => {
    let { x: y, y: b, placement: x, elements: C, onClose: R, nodeId: T, tree: _ } = g;
    return function (j) {
      function z() {
        (Qn(s), R());
      }
      if ((Qn(s), !C.domReference || !C.floating || x == null || y == null || b == null)) return;
      const { clientX: H, clientY: $ } = j,
        M = [H, $],
        K = WD(j),
        Y = j.type === "mouseleave",
        ee = xm(C.floating, K),
        ne = xm(C.domReference, K),
        oe = C.domReference.getBoundingClientRect(),
        U = C.floating.getBoundingClientRect(),
        re = x.split("-")[0],
        N = y > U.right - U.width / 2,
        k = b > U.bottom - U.height / 2,
        B = lA(M, oe),
        F = U.width > oe.width,
        Z = U.height > oe.height,
        O = (F ? oe : U).left,
        P = (F ? oe : U).right,
        Q = (Z ? oe : U).top,
        ae = (Z ? oe : U).bottom;
      if (ee && ((c = !0), !Y)) return;
      if ((ne && (c = !1), ne && !Y)) {
        c = !0;
        return;
      }
      if (
        (Y && $t(j.relatedTarget) && xm(C.floating, j.relatedTarget)) ||
        (_ && dw(_.nodesRef.current, T).length)
      )
        return;
      if (
        (re === "top" && b >= oe.bottom - 1) ||
        (re === "bottom" && b <= oe.top + 1) ||
        (re === "left" && y >= oe.right - 1) ||
        (re === "right" && y <= oe.left + 1)
      )
        return z();
      let ie = [];
      switch (re) {
        case "top":
          ie = [
            [O, oe.top + 1],
            [O, U.bottom - 1],
            [P, U.bottom - 1],
            [P, oe.top + 1],
          ];
          break;
        case "bottom":
          ie = [
            [O, U.top + 1],
            [O, oe.bottom - 1],
            [P, oe.bottom - 1],
            [P, U.top + 1],
          ];
          break;
        case "left":
          ie = [
            [U.right - 1, ae],
            [U.right - 1, Q],
            [oe.left + 1, Q],
            [oe.left + 1, ae],
          ];
          break;
        case "right":
          ie = [
            [oe.right - 1, ae],
            [oe.right - 1, Q],
            [U.left + 1, Q],
            [U.left + 1, ae],
          ];
          break;
      }
      function ue(ge) {
        let [Se, Ce] = ge;
        switch (re) {
          case "top": {
            const Ye = [F ? Se + r / 2 : N ? Se + r * 4 : Se - r * 4, Ce + r + 1],
              je = [F ? Se - r / 2 : N ? Se + r * 4 : Se - r * 4, Ce + r + 1],
              de = [
                [U.left, N || F ? U.bottom - r : U.top],
                [U.right, N ? (F ? U.bottom - r : U.top) : U.bottom - r],
              ];
            return [Ye, je, ...de];
          }
          case "bottom": {
            const Ye = [F ? Se + r / 2 : N ? Se + r * 4 : Se - r * 4, Ce - r],
              je = [F ? Se - r / 2 : N ? Se + r * 4 : Se - r * 4, Ce - r],
              de = [
                [U.left, N || F ? U.top + r : U.bottom],
                [U.right, N ? (F ? U.top + r : U.bottom) : U.top + r],
              ];
            return [Ye, je, ...de];
          }
          case "left": {
            const Ye = [Se + r + 1, Z ? Ce + r / 2 : k ? Ce + r * 4 : Ce - r * 4],
              je = [Se + r + 1, Z ? Ce - r / 2 : k ? Ce + r * 4 : Ce - r * 4];
            return [
              ...[
                [k || Z ? U.right - r : U.left, U.top],
                [k ? (Z ? U.right - r : U.left) : U.right - r, U.bottom],
              ],
              Ye,
              je,
            ];
          }
          case "right": {
            const Ye = [Se - r, Z ? Ce + r / 2 : k ? Ce + r * 4 : Ce - r * 4],
              je = [Se - r, Z ? Ce - r / 2 : k ? Ce + r * 4 : Ce - r * 4],
              de = [
                [k || Z ? U.left + r : U.right, U.top],
                [k ? (Z ? U.left + r : U.right) : U.left + r, U.bottom],
              ];
            return [Ye, je, ...de];
          }
        }
      }
      if (!c1([H, $], ie)) {
        if (c && !B) return z();
        if (!Y && l) {
          const ge = m(j.clientX, j.clientY);
          if (ge !== null && ge < 0.1) return z();
        }
        c1([H, $], ue([y, b])) ? !c && l && (s.current = window.setTimeout(z, 40)) : z();
      }
    };
  };
  return ((v.__options = { blockPointerEvents: o }), v);
}
const hw = { scrollHideDelay: 1e3, type: "hover", scrollbars: "xy" },
  mw = (e, { scrollbarSize: r, overscrollBehavior: o, scrollbars: l }) => {
    let s = o;
    return (
      o && l && (l === "x" ? (s = `${o} auto`) : l === "y" && (s = `auto ${o}`)),
      { root: { "--scrollarea-scrollbar-size": pe(r), "--scrollarea-over-scroll-behavior": s } }
    );
  },
  Uo = He((e) => {
    const r = Ee("ScrollArea", hw, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        scrollbarSize: f,
        vars: d,
        type: m,
        scrollHideDelay: v,
        viewportProps: g,
        viewportRef: y,
        onScrollPositionChange: b,
        children: x,
        offsetScrollbars: C,
        scrollbars: R,
        onBottomReached: T,
        onTopReached: _,
        onLeftReached: D,
        onRightReached: j,
        overscrollBehavior: z,
        startScrollPosition: H,
        attributes: $,
        ...M
      } = r,
      [K, Y] = S.useState(!1),
      [ee, ne] = S.useState(!1),
      [oe, U] = S.useState(!1),
      re = S.useRef(!0),
      N = S.useRef(!1),
      k = S.useRef(!0),
      B = S.useRef(!1),
      F = Ze({
        name: "ScrollArea",
        props: r,
        classes: Mp,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: $,
        vars: d,
        varsResolver: mw,
      }),
      Z = S.useRef(null),
      [O, P] = S.useState(null),
      Q = iw([
        y,
        Z,
        S.useCallback((ae) => {
          P((ie) => (ie === ae ? ie : ae));
        }, []),
      ]);
    return (
      Lo(C === "present" ? O : null, () => {
        const ae = Z.current;
        ae && (ne(ae.scrollHeight > ae.clientHeight), U(ae.scrollWidth > ae.clientWidth));
      }),
      Cl(() => {
        H && Z.current && Z.current.scrollTo({ left: H.x ?? 0, top: H.y ?? 0 });
      }, []),
      w.jsxs(BS, {
        getStyles: F,
        type: m === "never" ? "always" : m,
        scrollHideDelay: v,
        scrollbars: R,
        ...F("root"),
        ...M,
        children: [
          w.jsx(GS, {
            ...g,
            ...F("viewport", { style: g?.style }),
            ref: Q,
            "data-offset-scrollbars": C === !0 ? "xy" : C || void 0,
            "data-scrollbars": R || void 0,
            "data-horizontal-hidden": C === "present" && !oe ? "true" : void 0,
            "data-vertical-hidden": C === "present" && !ee ? "true" : void 0,
            onScroll: (ae) => {
              (g?.onScroll?.(ae),
                b?.({ x: ae.currentTarget.scrollLeft, y: ae.currentTarget.scrollTop }));
              const {
                  scrollTop: ie,
                  scrollHeight: ue,
                  clientHeight: ge,
                  scrollLeft: Se,
                  scrollWidth: Ce,
                  clientWidth: Ye,
                } = ae.currentTarget,
                je = ie - (ue - ge) >= -0.8,
                de = ie === 0;
              (je && !N.current && T?.(),
                de && !re.current && _?.(),
                (N.current = je),
                (re.current = de));
              const _e = Se - (Ce - Ye) >= -0.8,
                ze = Se === 0;
              (_e && !B.current && j?.(),
                ze && !k.current && D?.(),
                (B.current = _e),
                (k.current = ze));
            },
            children: x,
          }),
          (R === "xy" || R === "x") &&
            w.jsx(Xm, {
              ...F("scrollbar"),
              orientation: "horizontal",
              "data-hidden": m === "never" || (C === "present" && !oe) ? !0 : void 0,
              forceMount: !0,
              onMouseEnter: () => Y(!0),
              onMouseLeave: () => Y(!1),
              children: w.jsx(Km, { ...F("thumb") }),
            }),
          (R === "xy" || R === "y") &&
            w.jsx(Xm, {
              ...F("scrollbar"),
              orientation: "vertical",
              "data-hidden": m === "never" || (C === "present" && !ee) ? !0 : void 0,
              forceMount: !0,
              onMouseEnter: () => Y(!0),
              onMouseLeave: () => Y(!1),
              children: w.jsx(Km, { ...F("thumb") }),
            }),
          w.jsx(v_, {
            ...F("corner"),
            "data-hovered": K || void 0,
            "data-hidden": m === "never" || void 0,
          }),
        ],
      })
    );
  });
Uo.displayName = "@mantine/core/ScrollArea";
const Pp = He((e) => {
  const {
      children: r,
      classNames: o,
      styles: l,
      scrollbarSize: s,
      scrollHideDelay: c,
      type: u,
      dir: f,
      offsetScrollbars: d,
      overscrollBehavior: m,
      viewportRef: v,
      onScrollPositionChange: g,
      unstyled: y,
      variant: b,
      viewportProps: x,
      scrollbars: C,
      style: R,
      vars: T,
      onBottomReached: _,
      onTopReached: D,
      startScrollPosition: j,
      onOverflowChange: z,
      ...H
    } = Ee("ScrollAreaAutosize", hw, e),
    $ = S.useRef(null),
    [M, K] = S.useState(null),
    Y = iw([
      v,
      $,
      S.useCallback((U) => {
        K((re) => (re === U ? re : U));
      }, []),
    ]),
    ee = S.useRef(!1),
    ne = S.useRef(!1),
    oe = S.useEffectEvent(() => {
      const U = $.current;
      if (!U || !z) return;
      const re = U.scrollHeight > U.clientHeight;
      re !== ee.current &&
        (ne.current ? z(re) : ((ne.current = !0), re && z(!0)), (ee.current = re));
    });
  return (
    Lo(z ? M : null, oe),
    w.jsx(Ne, {
      ...H,
      variant: b,
      style: [{ display: "flex", overflow: "hidden" }, R],
      children: w.jsx(Ne, {
        style: {
          display: "flex",
          flexDirection: "column",
          flex: 1,
          overflow: "hidden",
          ...(C === "y" && { minWidth: 0 }),
          ...(C === "x" && { minHeight: 0 }),
          ...(C === "xy" && { minWidth: 0, minHeight: 0 }),
          ...(C === !1 && { minWidth: 0, minHeight: 0 }),
        },
        children: w.jsx(Uo, {
          classNames: o,
          styles: l,
          scrollHideDelay: c,
          scrollbarSize: s,
          type: u,
          dir: f,
          offsetScrollbars: d,
          overscrollBehavior: m,
          viewportRef: Y,
          onScrollPositionChange: g,
          unstyled: y,
          variant: b,
          viewportProps: x,
          vars: T,
          scrollbars: C,
          onBottomReached: _,
          onTopReached: D,
          startScrollPosition: j,
          "data-autosize": "true",
          children: r,
        }),
      }),
    })
  );
});
Uo.classes = Mp;
Uo.varsResolver = mw;
Pp.displayName = "@mantine/core/ScrollAreaAutosize";
Pp.classes = Mp;
Uo.Autosize = Pp;
var pw = { root: "m_87cf2631" };
const sA = { __staticSelector: "UnstyledButton" },
  Wn = Jn((e) => {
    const r = Ee("UnstyledButton", sA, e),
      {
        className: o,
        component: l = "button",
        __staticSelector: s,
        unstyled: c,
        classNames: u,
        styles: f,
        style: d,
        attributes: m,
        ...v
      } = r;
    return w.jsx(Ne, {
      ...Ze({
        name: s,
        props: r,
        classes: pw,
        className: o,
        style: d,
        classNames: u,
        styles: f,
        unstyled: c,
        attributes: m,
      })("root", { focusable: !0 }),
      component: l,
      type: l === "button" ? "button" : void 0,
      ...v,
    });
  });
Wn.classes = pw;
Wn.displayName = "@mantine/core/UnstyledButton";
var gw = { root: "m_515a97f8" };
const Ef = He((e) => {
  const r = Ee("VisuallyHidden", null, e),
    {
      classNames: o,
      className: l,
      style: s,
      styles: c,
      unstyled: u,
      vars: f,
      attributes: d,
      ...m
    } = r;
  return w.jsx(Ne, {
    component: "span",
    ...Ze({
      name: "VisuallyHidden",
      classes: gw,
      props: r,
      className: l,
      style: s,
      classNames: o,
      styles: c,
      unstyled: u,
      attributes: d,
    })("root"),
    ...m,
  });
});
Ef.classes = gw;
Ef.displayName = "@mantine/core/VisuallyHidden";
var vw = { root: "m_1b7284a3" };
const yw = (e, { radius: r, shadow: o }) => ({
    root: { "--paper-radius": r === void 0 ? void 0 : Ln(r), "--paper-shadow": gp(o) },
  }),
  Bo = Jn((e) => {
    const r = Ee("Paper", null, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        withBorder: f,
        vars: d,
        radius: m,
        shadow: v,
        variant: g,
        mod: y,
        attributes: b,
        ...x
      } = r,
      C = Ze({
        name: "Paper",
        props: r,
        classes: vw,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: b,
        vars: d,
        varsResolver: yw,
      });
    return w.jsx(Ne, { mod: [{ "data-with-border": f }, y], ...C("root"), variant: g, ...x });
  });
Bo.classes = vw;
Bo.varsResolver = yw;
Bo.displayName = "@mantine/core/Paper";
function u1(e, r, o, l) {
  return e === "center" || l === "center"
    ? { top: r }
    : e === "end"
      ? { bottom: o }
      : e === "start"
        ? { top: o }
        : {};
}
function f1(e, r, o, l, s) {
  return e === "center" || l === "center"
    ? { left: r }
    : e === "end"
      ? { [s === "ltr" ? "right" : "left"]: o }
      : e === "start"
        ? { [s === "ltr" ? "left" : "right"]: o }
        : {};
}
const cA = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius",
};
function uA({
  position: e,
  arrowSize: r,
  arrowOffset: o,
  arrowRadius: l,
  arrowPosition: s,
  arrowX: c,
  arrowY: u,
  dir: f,
}) {
  const [d, m = "center"] = e.split("-"),
    v = { width: r, height: r, transform: "rotate(45deg)", position: "absolute", [cA[d]]: l },
    g = -r / 2;
  return d === "left"
    ? {
        ...v,
        ...u1(m, u, o, s),
        right: g,
        borderLeftColor: "transparent",
        borderBottomColor: "transparent",
        clipPath: "polygon(100% 0, 0 0, 100% 100%)",
      }
    : d === "right"
      ? {
          ...v,
          ...u1(m, u, o, s),
          left: g,
          borderRightColor: "transparent",
          borderTopColor: "transparent",
          clipPath: "polygon(0 100%, 0 0, 100% 100%)",
        }
      : d === "top"
        ? {
            ...v,
            ...f1(m, c, o, s, f),
            bottom: g,
            borderTopColor: "transparent",
            borderLeftColor: "transparent",
            clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
          }
        : d === "bottom"
          ? {
              ...v,
              ...f1(m, c, o, s, f),
              top: g,
              borderBottomColor: "transparent",
              borderRightColor: "transparent",
              clipPath: "polygon(0 100%, 0 0, 100% 0)",
            }
          : {};
}
function lf({
  position: e,
  arrowSize: r,
  arrowOffset: o,
  arrowRadius: l,
  arrowPosition: s,
  visible: c,
  arrowX: u,
  arrowY: f,
  style: d,
  ...m
}) {
  const { dir: v } = Za();
  return c
    ? w.jsx("div", {
        ...m,
        style: {
          ...d,
          ...uA({
            position: e,
            arrowSize: r,
            arrowOffset: o,
            arrowRadius: l,
            arrowPosition: s,
            dir: v,
            arrowX: u,
            arrowY: f,
          }),
        },
      })
    : null;
}
lf.displayName = "@mantine/core/FloatingArrow";
function Vp(e, r) {
  if (e === "rtl" && (r.includes("right") || r.includes("left"))) {
    const [o, l] = r.split("-"),
      s = o === "right" ? "left" : "right";
    return l === void 0 ? s : `${s}-${l}`;
  }
  return r;
}
function fA({ open: e, close: r, openDelay: o, closeDelay: l }) {
  const s = S.useRef(-1),
    c = S.useRef(-1),
    u = () => {
      (window.clearTimeout(s.current), window.clearTimeout(c.current));
    },
    f = () => {
      (u(), o === 0 || o === void 0 ? e() : (s.current = window.setTimeout(e, o)));
    },
    d = () => {
      (u(), l === 0 || l === void 0 ? r() : (c.current = window.setTimeout(r, l)));
    };
  return (S.useEffect(() => u, []), { openDropdown: f, closeDropdown: d });
}
var bw = { root: "m_9814e45f" };
const dA = { zIndex: Xa("modal") },
  Sw = (e, { gradient: r, color: o, backgroundOpacity: l, blur: s, radius: c, zIndex: u }) => ({
    root: {
      "--overlay-bg": r || ((o !== void 0 || l !== void 0) && No(o || "#000", l ?? 0.6)) || void 0,
      "--overlay-filter": s ? `blur(${pe(s)})` : void 0,
      "--overlay-radius": c === void 0 ? void 0 : Ln(c),
      "--overlay-z-index": u?.toString(),
    },
  }),
  ac = Jn((e) => {
    const r = Ee("Overlay", dA, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        vars: f,
        fixed: d,
        center: m,
        children: v,
        radius: g,
        zIndex: y,
        gradient: b,
        blur: x,
        color: C,
        backgroundOpacity: R,
        mod: T,
        attributes: _,
        ...D
      } = r;
    return w.jsx(Ne, {
      ...Ze({
        name: "Overlay",
        props: r,
        classes: bw,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: _,
        vars: f,
        varsResolver: Sw,
      })("root"),
      mod: [{ center: m, fixed: d }, T],
      ...D,
      children: v,
    });
  });
ac.classes = bw;
ac.varsResolver = Sw;
ac.displayName = "@mantine/core/Overlay";
function Rm(e) {
  const r = document.createElement("div");
  return (
    r.setAttribute("data-portal", "true"),
    typeof e.className == "string" && r.classList.add(...e.className.split(" ").filter(Boolean)),
    typeof e.style == "object" && Object.assign(r.style, e.style),
    typeof e.id == "string" && r.setAttribute("id", e.id),
    r
  );
}
function hA({ target: e, reuseTargetNode: r, ...o }) {
  if (e) return typeof e == "string" ? document.querySelector(e) || Rm(o) : e;
  if (r) {
    const l = document.querySelector("[data-mantine-shared-portal-node]");
    if (l) return l;
    const s = Rm(o);
    return (
      s.setAttribute("data-mantine-shared-portal-node", "true"),
      document.body.appendChild(s),
      s
    );
  }
  return Rm(o);
}
const mA = { reuseTargetNode: !0 },
  ww = He((e) => {
    const { children: r, target: o, reuseTargetNode: l, ref: s, ...c } = Ee("Portal", mA, e),
      [u, f] = S.useState(!1),
      d = S.useRef(null);
    return (
      Cl(
        () => (
          f(!0),
          (d.current = hA({ target: o, reuseTargetNode: l, ...c })),
          Wu(s, d.current),
          !o && !l && d.current && document.body.appendChild(d.current),
          () => {
            !o && !l && d.current && document.body.removeChild(d.current);
          }
        ),
        [o],
      ),
      !u || !d.current ? null : da.createPortal(w.jsx(w.Fragment, { children: r }), d.current)
    );
  });
ww.displayName = "@mantine/core/Portal";
const Sl = He(({ withinPortal: e = !0, children: r, ...o }) =>
  ec() === "test" || !e ? w.jsx(w.Fragment, { children: r }) : w.jsx(ww, { ...o, children: r }),
);
Sl.displayName = "@mantine/core/OptionalPortal";
const Cs = (e) => ({
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: `scale(.9) translateY(${e === "bottom" ? 10 : -10}px)` },
    transitionProperty: "transform, opacity",
  }),
  Mu = {
    fade: { in: { opacity: 1 }, out: { opacity: 0 }, transitionProperty: "opacity" },
    "fade-up": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(30px)" },
      transitionProperty: "opacity, transform",
    },
    "fade-down": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(-30px)" },
      transitionProperty: "opacity, transform",
    },
    "fade-left": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(30px)" },
      transitionProperty: "opacity, transform",
    },
    "fade-right": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(-30px)" },
      transitionProperty: "opacity, transform",
    },
    scale: {
      in: { opacity: 1, transform: "scale(1)" },
      out: { opacity: 0, transform: "scale(0)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "scale-y": {
      in: { opacity: 1, transform: "scaleY(1)" },
      out: { opacity: 0, transform: "scaleY(0)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "scale-x": {
      in: { opacity: 1, transform: "scaleX(1)" },
      out: { opacity: 0, transform: "scaleX(0)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity",
    },
    "skew-up": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: { opacity: 0, transform: "translateY(-20px) skew(-10deg, -5deg)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "skew-down": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: { opacity: 0, transform: "translateY(20px) skew(-10deg, -5deg)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-left": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: "translateY(20px) rotate(-5deg)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "rotate-right": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: "translateY(20px) rotate(5deg)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "slide-down": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(-100%)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity",
    },
    "slide-up": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(100%)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity",
    },
    "slide-left": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(100%)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity",
    },
    "slide-right": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(-100%)" },
      common: { transformOrigin: "right" },
      transitionProperty: "transform, opacity",
    },
    pop: { ...Cs("bottom"), common: { transformOrigin: "center center" } },
    "pop-bottom-left": { ...Cs("bottom"), common: { transformOrigin: "bottom left" } },
    "pop-bottom-right": { ...Cs("bottom"), common: { transformOrigin: "bottom right" } },
    "pop-top-left": { ...Cs("top"), common: { transformOrigin: "top left" } },
    "pop-top-right": { ...Cs("top"), common: { transformOrigin: "top right" } },
  },
  d1 = {
    entering: "in",
    entered: "in",
    exiting: "out",
    exited: "out",
    "pre-exiting": "out",
    "pre-entering": "out",
  };
function h1({ transition: e, state: r, duration: o, timingFunction: l }) {
  const s = {
    WebkitBackfaceVisibility: "hidden",
    transitionDuration: `${o}ms`,
    transitionTimingFunction: l,
  };
  return typeof e == "string"
    ? e in Mu
      ? { transitionProperty: Mu[e].transitionProperty, ...s, ...Mu[e].common, ...Mu[e][d1[r]] }
      : {}
    : { transitionProperty: e.transitionProperty, ...s, ...e.common, ...e[d1[r]] };
}
function pA({
  duration: e,
  exitDuration: r,
  timingFunction: o,
  mounted: l,
  onEnter: s,
  onExit: c,
  onEntered: u,
  onExited: f,
  enterDelay: d,
  exitDelay: m,
}) {
  const v = mn(),
    g = yp(),
    y = v.respectReducedMotion ? g : !1,
    [b, x] = S.useState(y ? 0 : e),
    [C, R] = S.useState(l ? "entered" : "exited"),
    T = S.useRef(-1),
    _ = S.useRef(-1),
    D = S.useRef(-1);
  function j() {
    (window.clearTimeout(T.current),
      window.clearTimeout(_.current),
      cancelAnimationFrame(D.current));
  }
  const z = ($) => {
      j();
      const M = $ ? s : c,
        K = $ ? u : f,
        Y = y ? 0 : $ ? e : r;
      (x(Y),
        Y === 0
          ? (typeof M == "function" && M(),
            typeof K == "function" && K(),
            R($ ? "entered" : "exited"))
          : (D.current = requestAnimationFrame(() => {
              (K2.flushSync(() => {
                R($ ? "pre-entering" : "pre-exiting");
              }),
                (D.current = requestAnimationFrame(() => {
                  (typeof M == "function" && M(),
                    R($ ? "entering" : "exiting"),
                    (T.current = window.setTimeout(() => {
                      (typeof K == "function" && K(), R($ ? "entered" : "exited"));
                    }, Y)));
                })));
            })));
    },
    H = ($) => {
      if ((j(), typeof ($ ? d : m) != "number")) {
        z($);
        return;
      }
      _.current = window.setTimeout(
        () => {
          z($);
        },
        $ ? d : m,
      );
    };
  return (
    yl(() => {
      H(l);
    }, [l]),
    S.useEffect(
      () => () => {
        j();
      },
      [],
    ),
    { transitionDuration: b, transitionStatus: C, transitionTimingFunction: o || "ease" }
  );
}
function $o({
  keepMounted: e,
  transition: r = "fade",
  duration: o = 250,
  exitDuration: l = o,
  mounted: s,
  children: c,
  timingFunction: u = "ease",
  onExit: f,
  onEntered: d,
  onEnter: m,
  onExited: v,
  enterDelay: g,
  exitDelay: y,
}) {
  const b = ec(),
    {
      transitionDuration: x,
      transitionStatus: C,
      transitionTimingFunction: R,
    } = pA({
      mounted: s,
      exitDuration: l,
      duration: o,
      timingFunction: u,
      onExit: f,
      onEntered: d,
      onEnter: m,
      onExited: v,
      enterDelay: g,
      exitDelay: y,
    });
  if (b === "test")
    return s ? w.jsx(w.Fragment, { children: c({}) }) : e ? c({ display: "none" }) : null;
  if (x === 0)
    return e
      ? w.jsx(S.Activity, { mode: s ? "visible" : "hidden", children: c({}) })
      : s
        ? w.jsx(w.Fragment, { children: c({}) })
        : null;
  const T = C === "exited";
  return e
    ? w.jsx(S.Activity, {
        mode: T ? "hidden" : "visible",
        children: c(T ? {} : h1({ transition: r, duration: x, state: C, timingFunction: R })),
      })
    : T
      ? null
      : w.jsx(w.Fragment, {
          children: c(h1({ transition: r, duration: x, state: C, timingFunction: R })),
        });
}
$o.displayName = "@mantine/core/Transition";
const gA = { duration: 100, transition: "fade" };
function m1(e, r) {
  return { ...gA, ...r, ...e };
}
const [vA, xw] = Ga("Popover component was not found in the tree");
function Rf({ children: e, active: r = !0, refProp: o = "ref", innerRef: l }) {
  const s = tn(G2(r), l),
    c = El(e);
  return c ? S.cloneElement(c, { [o]: s }) : e;
}
function Cw(e) {
  return w.jsx(Ef, { tabIndex: -1, "data-autofocus": !0, ...e });
}
Rf.displayName = "@mantine/core/FocusTrap";
Cw.displayName = "@mantine/core/FocusTrapInitialFocus";
Rf.InitialFocus = Cw;
var Ew = { dropdown: "m_38a85659", arrow: "m_a31dc6c1", overlay: "m_3d7bc908" };
const Ip = He((e) => {
  const r = Ee("PopoverDropdown", null, e),
    {
      className: o,
      style: l,
      vars: s,
      children: c,
      onKeyDownCapture: u,
      variant: f,
      classNames: d,
      styles: m,
      ref: v,
      ...g
    } = r,
    y = xw(),
    b = wS({ opened: y.opened, shouldReturnFocus: y.returnFocus }),
    x = y.withRoles
      ? { "aria-labelledby": y.getTargetId(), id: y.getDropdownId(), role: "dialog", tabIndex: -1 }
      : {},
    C = tn(v, y.floating);
  return y.disabled
    ? null
    : w.jsx(Sl, {
        ...y.portalProps,
        withinPortal: y.withinPortal,
        children: w.jsx($o, {
          mounted: y.opened,
          ...y.transitionProps,
          transition: y.transitionProps?.transition || "fade",
          duration: y.transitionProps?.duration ?? 150,
          keepMounted: y.keepMounted,
          exitDuration:
            typeof y.transitionProps?.exitDuration == "number"
              ? y.transitionProps.exitDuration
              : y.transitionProps?.duration,
          children: (R) =>
            w.jsx(Rf, {
              active: y.trapFocus && y.opened,
              innerRef: C,
              children: w.jsxs(Ne, {
                ...x,
                ...g,
                variant: f,
                onKeyDownCapture: z2(
                  () => {
                    (y.onClose?.(), y.onDismiss?.());
                  },
                  { active: y.closeOnEscape, onTrigger: b, onKeyDown: u },
                ),
                "data-position": y.placement,
                "data-fixed": y.floatingStrategy === "fixed" || void 0,
                ...y.getStyles("dropdown", {
                  className: o,
                  props: r,
                  classNames: d,
                  styles: m,
                  style: [
                    {
                      ...R,
                      zIndex: y.zIndex,
                      top: y.y ?? 0,
                      left: y.x ?? 0,
                      width: y.width === "target" ? void 0 : pe(y.width),
                      ...(y.referenceHidden ? { display: "none" } : null),
                    },
                    y.resolvedStyles?.dropdown,
                    m?.dropdown,
                    l,
                  ],
                }),
                children: [
                  c,
                  w.jsx(lf, {
                    ref: y.arrowRef,
                    arrowX: y.arrowX,
                    arrowY: y.arrowY,
                    visible: y.withArrow,
                    position: y.placement,
                    arrowSize: y.arrowSize,
                    arrowRadius: y.arrowRadius,
                    arrowOffset: y.arrowOffset,
                    arrowPosition: y.arrowPosition,
                    ...y.getStyles("arrow", { props: r, classNames: d, styles: m }),
                  }),
                ],
              }),
            }),
        }),
      });
});
Ip.classes = Ew;
Ip.displayName = "@mantine/core/PopoverDropdown";
const yA = { refProp: "ref", popupType: "dialog" },
  Rw = He((e) => {
    const { children: r, refProp: o, popupType: l, ref: s, ...c } = Ee("PopoverTarget", yA, e),
      u = El(r);
    if (!u)
      throw new Error(
        "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported",
      );
    const f = c,
      d = xw(),
      m = tn(d.reference, hf(u), s),
      v = d.withRoles
        ? {
            "aria-haspopup": l,
            "aria-expanded": d.opened,
            "aria-controls": d.opened ? d.getDropdownId() : void 0,
            id: d.getTargetId(),
          }
        : {},
      g = u.props;
    return S.cloneElement(u, {
      ...f,
      ...v,
      ...d.targetProps,
      className: Dn(d.targetProps.className, f.className, g.className),
      [o]: m,
      ...(d.controlled
        ? null
        : {
            onClick: (y) => {
              (d.onToggle(), g.onClick?.(y));
            },
          }),
    });
  });
Rw.displayName = "@mantine/core/PopoverTarget";
function bA(e) {
  if (e === void 0) return { shift: !0, flip: !0 };
  const r = { ...e };
  return (e.shift === void 0 && (r.shift = !0), e.flip === void 0 && (r.flip = !0), r);
}
function SA(e, r, o) {
  const l = bA(e.middlewares),
    s = [ow(e.offset), UD()];
  return (
    e.dropdownVisible && o !== "test" && e.preventPositionChangeWhenVisible && (l.flip = !1),
    l.flip && s.push(typeof l.flip == "boolean" ? of() : of(l.flip)),
    l.shift &&
      s.push(
        Bp(
          typeof l.shift == "boolean"
            ? { limiter: n1(), padding: 5 }
            : { limiter: n1(), padding: 5, ...l.shift },
        ),
      ),
    l.inline && s.push(typeof l.inline == "boolean" ? Bs() : Bs(l.inline)),
    s.push(lw({ element: e.arrowRef, padding: e.arrowOffset })),
    (l.size || e.width === "target") &&
      s.push(
        HD({
          ...(typeof l.size == "boolean" ? {} : l.size),
          apply({ rects: c, availableWidth: u, availableHeight: f, ...d }) {
            const m = r().refs.floating.current?.style ?? {};
            (l.size &&
              (typeof l.size == "object" && l.size.apply
                ? l.size.apply({ rects: c, availableWidth: u, availableHeight: f, ...d })
                : Object.assign(m, { maxWidth: `${u}px`, maxHeight: `${f}px` })),
              e.width === "target" && Object.assign(m, { width: `${c.reference.width}px` }));
          },
        }),
      ),
    s
  );
}
function wA(e) {
  const r = ec(),
    [o, l] = Yr({
      value: e.opened,
      defaultValue: e.defaultOpened,
      finalValue: !1,
      onChange: e.onChange,
    }),
    s = S.useRef(o),
    c = () => {
      o && !e.disabled && l(!1);
    },
    u = () => {
      e.disabled || l(!o);
    },
    f = Cf({
      strategy: e.strategy,
      placement: e.preventPositionChangeWhenVisible ? e.positionRef.current : e.position,
      middleware: SA(e, () => f, r),
      whileElementsMounted: e.keepMounted ? void 0 : ep,
    });
  return (
    S.useEffect(() => {
      if (!(!f.refs.reference.current || !f.refs.floating.current) && o)
        return ep(f.refs.reference.current, f.refs.floating.current, f.update);
    }, [o, f.update]),
    yl(() => {
      (e.onPositionChange?.(f.placement), (e.positionRef.current = f.placement));
    }, [f.placement, e.preventPositionChangeWhenVisible]),
    yl(() => {
      (o !== s.current && (o ? e.onOpen?.() : e.onClose?.()), (s.current = o));
    }, [o, e.onClose, e.onOpen]),
    Cl(() => {
      let d = -1;
      return (
        o && (d = window.setTimeout(() => e.setDropdownVisible(!0), 4)),
        () => {
          window.clearTimeout(d);
        }
      );
    }, [o, e.position]),
    { floating: f, controlled: typeof e.opened == "boolean", opened: o, onClose: c, onToggle: u }
  );
}
const xA = {
    position: "bottom",
    offset: 8,
    transitionProps: { transition: "fade", duration: 150 },
    middlewares: { flip: !0, shift: !0, inline: !1 },
    arrowSize: 7,
    arrowOffset: 5,
    arrowRadius: 0,
    arrowPosition: "side",
    closeOnClickOutside: !0,
    withinPortal: !0,
    closeOnEscape: !0,
    trapFocus: !1,
    withRoles: !0,
    returnFocus: !1,
    withOverlay: !1,
    hideDetached: !0,
    clickOutsideEvents: ["mousedown", "touchstart"],
    zIndex: Xa("popover"),
    __staticSelector: "Popover",
    width: "max-content",
  },
  Tw = (e, { radius: r, shadow: o }) => ({
    dropdown: { "--popover-radius": r === void 0 ? void 0 : Ln(r), "--popover-shadow": gp(o) },
  });
function Zt(e) {
  const r = Ee("Popover", xA, e),
    {
      children: o,
      position: l,
      offset: s,
      onPositionChange: c,
      opened: u,
      transitionProps: f,
      onExitTransitionEnd: d,
      onEnterTransitionEnd: m,
      width: v,
      middlewares: g,
      withArrow: y,
      arrowSize: b,
      arrowOffset: x,
      arrowRadius: C,
      arrowPosition: R,
      unstyled: T,
      classNames: _,
      styles: D,
      closeOnClickOutside: j,
      withinPortal: z,
      portalProps: H,
      closeOnEscape: $,
      clickOutsideEvents: M,
      trapFocus: K,
      onClose: Y,
      onDismiss: ee,
      onOpen: ne,
      onChange: oe,
      zIndex: U,
      radius: re,
      shadow: N,
      id: k,
      defaultOpened: B,
      __staticSelector: F,
      withRoles: Z,
      disabled: O,
      returnFocus: P,
      variant: Q,
      keepMounted: ae,
      vars: ie,
      floatingStrategy: ue,
      withOverlay: ge,
      overlayProps: Se,
      hideDetached: Ce,
      attributes: Ye,
      preventPositionChangeWhenVisible: je,
      ...de
    } = r,
    _e = Ze({
      name: F,
      props: r,
      classes: Ew,
      classNames: _,
      styles: D,
      unstyled: T,
      attributes: Ye,
      rootSelector: "dropdown",
      vars: ie,
      varsResolver: Tw,
    }),
    { resolvedStyles: ze } = tc({ classNames: _, styles: D, props: r }),
    [Oe, at] = S.useState(u ?? B ?? !1),
    be = S.useRef(l),
    we = S.useRef(null),
    [Me, xe] = S.useState(null),
    [Be, Ve] = S.useState(null),
    { dir: Xe } = Za(),
    ot = ec(),
    We = Wr(k),
    Ie = wA({
      middlewares: g,
      width: v,
      position: Vp(Xe, l),
      offset: typeof s == "number" ? s + (y ? b / 2 : 0) : s,
      arrowRef: we,
      arrowOffset: x,
      onPositionChange: c,
      opened: u,
      defaultOpened: B,
      onChange: oe,
      onOpen: ne,
      onClose: Y,
      onDismiss: ee,
      strategy: ue,
      dropdownVisible: Oe,
      setDropdownVisible: at,
      positionRef: be,
      disabled: O,
      preventPositionChangeWhenVisible: je,
      keepMounted: ae,
    });
  H2(
    () => {
      j && (Ie.onClose(), ee?.());
    },
    M,
    [Me, Be],
  );
  const Yt = S.useCallback(
      (nn) => {
        (xe(nn), Ie.floating.refs.setReference(nn));
      },
      [Ie.floating.refs.setReference],
    ),
    pn = S.useCallback(
      (nn) => {
        (Ve(nn), Ie.floating.refs.setFloating(nn));
      },
      [Ie.floating.refs.setFloating],
    ),
    Gt = S.useCallback(() => {
      (f?.onExited?.(), d?.(), at(!1), je || (be.current = l));
    }, [f?.onExited, d, je, l]),
    zt = S.useCallback(() => {
      (f?.onEntered?.(), m?.());
    }, [f?.onEntered, m]);
  return w.jsxs(vA, {
    value: {
      returnFocus: P,
      disabled: O,
      controlled: Ie.controlled,
      reference: Yt,
      floating: pn,
      x: Ie.floating.x,
      y: Ie.floating.y,
      arrowX: Ie.floating?.middlewareData?.arrow?.x,
      arrowY: Ie.floating?.middlewareData?.arrow?.y,
      opened: Ie.opened,
      arrowRef: we,
      transitionProps: { ...f, onExited: Gt, onEntered: zt },
      width: v,
      withArrow: y,
      arrowSize: b,
      arrowOffset: x,
      arrowRadius: C,
      arrowPosition: R,
      placement: Ie.floating.placement,
      trapFocus: K,
      withinPortal: z,
      portalProps: H,
      zIndex: U,
      radius: re,
      shadow: N,
      closeOnEscape: $,
      onDismiss: ee,
      onClose: Ie.onClose,
      onToggle: Ie.onToggle,
      getTargetId: () => We,
      getDropdownId: () => `${We}-dropdown`,
      withRoles: Z,
      targetProps: de,
      __staticSelector: F,
      classNames: _,
      styles: D,
      unstyled: T,
      variant: Q,
      keepMounted: ae,
      getStyles: _e,
      resolvedStyles: ze,
      floatingStrategy: ue,
      referenceHidden: Ce && ot !== "test" ? Ie.floating.middlewareData.hide?.referenceHidden : !1,
    },
    children: [
      o,
      ge &&
        w.jsx($o, {
          transition: "fade",
          mounted: Ie.opened,
          duration: f?.duration || 250,
          exitDuration: f?.exitDuration || 250,
          children: (nn) =>
            w.jsx(Sl, {
              withinPortal: z,
              children: w.jsx(ac, {
                ...Se,
                ..._e("overlay", { className: Se?.className, style: [nn, Se?.style] }),
              }),
            }),
        }),
    ],
  });
}
Zt.Target = Rw;
Zt.Dropdown = Ip;
Zt.varsResolver = Tw;
Zt.displayName = "@mantine/core/Popover";
Zt.extend = (e) => e;
Zt.withProps = (e) => {
  const r = (o) => w.jsx(Zt, { ...e, ...o });
  return ((r.extend = Zt.extend), (r.displayName = `WithProps(${Zt.displayName})`), r);
};
var qr = {
  root: "m_5ae2e3c",
  barsLoader: "m_7a2bd4cd",
  bar: "m_870bb79",
  "bars-loader-animation": "m_5d2b3b9d",
  dotsLoader: "m_4e3f22d7",
  dot: "m_870c4af",
  "loader-dots-animation": "m_aac34a1",
  ovalLoader: "m_b34414df",
  "oval-loader-animation": "m_f8e89c4b",
};
const _w = ({ className: e, ...r }) =>
  w.jsxs(Ne, {
    component: "span",
    className: Dn(qr.barsLoader, e),
    ...r,
    children: [
      w.jsx("span", { className: qr.bar }),
      w.jsx("span", { className: qr.bar }),
      w.jsx("span", { className: qr.bar }),
    ],
  });
_w.displayName = "@mantine/core/Bars";
const Dw = ({ className: e, ...r }) =>
  w.jsxs(Ne, {
    component: "span",
    className: Dn(qr.dotsLoader, e),
    ...r,
    children: [
      w.jsx("span", { className: qr.dot }),
      w.jsx("span", { className: qr.dot }),
      w.jsx("span", { className: qr.dot }),
    ],
  });
Dw.displayName = "@mantine/core/Dots";
const Aw = ({ className: e, ...r }) =>
  w.jsx(Ne, { component: "span", className: Dn(qr.ovalLoader, e), ...r });
Aw.displayName = "@mantine/core/Oval";
const Mw = { bars: _w, oval: Aw, dots: Dw },
  CA = { loaders: Mw, type: "oval" },
  Nw = (e, { size: r, color: o }) => ({
    root: { "--loader-size": gt(r, "loader-size"), "--loader-color": o ? ur(o, e) : void 0 },
  }),
  _i = He((e) => {
    const r = Ee("Loader", CA, e),
      {
        size: o,
        color: l,
        type: s,
        vars: c,
        className: u,
        style: f,
        classNames: d,
        styles: m,
        unstyled: v,
        loaders: g,
        variant: y,
        children: b,
        attributes: x,
        ...C
      } = r,
      R = Ze({
        name: "Loader",
        props: r,
        classes: qr,
        className: u,
        style: f,
        classNames: d,
        styles: m,
        unstyled: v,
        attributes: x,
        vars: c,
        varsResolver: Nw,
      });
    return b
      ? w.jsx(Ne, { ...R("root"), ...C, children: b })
      : w.jsx(Ne, { ...R("root"), component: g[s], variant: y, size: o, ...C });
  });
_i.defaultLoaders = Mw;
_i.classes = qr;
_i.varsResolver = Nw;
_i.displayName = "@mantine/core/Loader";
function Ow({ size: e = "var(--cb-icon-size, 70%)", style: r, ...o }) {
  return w.jsx("svg", {
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: { ...r, width: e, height: e },
    ...o,
    children: w.jsx("path", {
      d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }),
  });
}
Ow.displayName = "@mantine/core/CloseIcon";
var jw = { root: "m_86a44da5", "root--subtle": "m_220c80f2" };
const EA = { variant: "subtle" },
  zw = (e, { size: r, radius: o, iconSize: l }) => ({
    root: {
      "--cb-size": gt(r, "cb-size"),
      "--cb-radius": o === void 0 ? void 0 : Ln(o),
      "--cb-icon-size": pe(l),
    },
  }),
  Di = Jn((e) => {
    const r = Ee("CloseButton", EA, e),
      {
        iconSize: o,
        children: l,
        vars: s,
        radius: c,
        className: u,
        classNames: f,
        style: d,
        styles: m,
        unstyled: v,
        "data-disabled": g,
        disabled: y,
        variant: b,
        icon: x,
        mod: C,
        attributes: R,
        __staticSelector: T,
        ..._
      } = r,
      D = Ze({
        name: T || "CloseButton",
        props: r,
        className: u,
        style: d,
        classes: jw,
        classNames: f,
        styles: m,
        unstyled: v,
        attributes: R,
        vars: s,
        varsResolver: zw,
      });
    return w.jsxs(Wn, {
      ..._,
      unstyled: v,
      variant: b,
      disabled: y,
      mod: [{ disabled: y || g }, C],
      ...D("root", { variant: b, active: !y && !g }),
      children: [x || w.jsx(Ow, {}), l],
    });
  });
Di.classes = jw;
Di.varsResolver = zw;
Di.displayName = "@mantine/core/CloseButton";
function RA(e) {
  return S.Children.toArray(e).filter(Boolean);
}
var kw = { root: "m_4081bf90" };
const TA = {
    preventGrowOverflow: !0,
    gap: "md",
    align: "center",
    justify: "flex-start",
    wrap: "wrap",
  },
  Lw = (
    e,
    { grow: r, preventGrowOverflow: o, gap: l, align: s, justify: c, wrap: u },
    { childWidth: f },
  ) => ({
    root: {
      "--group-child-width": r && o ? f : void 0,
      "--group-gap": un(l),
      "--group-align": s,
      "--group-justify": c,
      "--group-wrap": u,
    },
  }),
  Wa = He((e) => {
    const r = Ee("Group", TA, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        children: f,
        gap: d,
        align: m,
        justify: v,
        wrap: g,
        grow: y,
        preventGrowOverflow: b,
        vars: x,
        variant: C,
        __size: R,
        mod: T,
        attributes: _,
        ...D
      } = r,
      j = RA(f),
      z = j.length,
      H = un(d ?? "md");
    return w.jsx(Ne, {
      ...Ze({
        name: "Group",
        props: r,
        stylesCtx: { childWidth: `calc(${100 / z}% - (${H} - ${H} / ${z}))` },
        className: l,
        style: s,
        classes: kw,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: _,
        vars: x,
        varsResolver: Lw,
      })("root"),
      variant: C,
      mod: [{ grow: y }, T],
      size: R,
      ...D,
      children: j,
    });
  });
Wa.classes = kw;
Wa.varsResolver = Lw;
Wa.displayName = "@mantine/core/Group";
const [_A, Ja] = Ga("ModalBase component was not found in tree");
function DA({ opened: e, transitionDuration: r }) {
  const [o, l] = S.useState(e),
    s = S.useRef(-1),
    c = yp() ? 0 : r;
  return (
    S.useEffect(
      () => (
        e
          ? (l(!0), window.clearTimeout(s.current))
          : c === 0
            ? l(!1)
            : (s.current = window.setTimeout(() => l(!1), c)),
        () => window.clearTimeout(s.current)
      ),
      [e, c],
    ),
    o
  );
}
function AA({
  id: e,
  transitionProps: r,
  opened: o,
  trapFocus: l,
  closeOnEscape: s,
  onClose: c,
  returnFocus: u,
}) {
  const f = Wr(e),
    [d, m] = S.useState(!1),
    [v, g] = S.useState(!1),
    y = DA({ opened: o, transitionDuration: typeof r?.duration == "number" ? r?.duration : 200 });
  return (
    X2(
      "keydown",
      (b) => {
        b.key === "Escape" &&
          s &&
          !b.isComposing &&
          o &&
          b.target?.getAttribute("data-mantine-stop-propagation") !== "true" &&
          c();
      },
      { capture: !0 },
    ),
    wS({ opened: o, shouldReturnFocus: l && u }),
    {
      _id: f,
      titleMounted: d,
      bodyMounted: v,
      shouldLockScroll: y,
      setTitleMounted: m,
      setBodyMounted: g,
    }
  );
}
var ca = function () {
  return (
    (ca =
      Object.assign ||
      function (r) {
        for (var o, l = 1, s = arguments.length; l < s; l++) {
          o = arguments[l];
          for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (r[c] = o[c]);
        }
        return r;
      }),
    ca.apply(this, arguments)
  );
};
function Bw(e, r) {
  var o = {};
  for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && r.indexOf(l) < 0 && (o[l] = e[l]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, l = Object.getOwnPropertySymbols(e); s < l.length; s++)
      r.indexOf(l[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, l[s]) &&
        (o[l[s]] = e[l[s]]);
  return o;
}
function MA(e, r, o) {
  if (o || arguments.length === 2)
    for (var l = 0, s = r.length, c; l < s; l++)
      (c || !(l in r)) && (c || (c = Array.prototype.slice.call(r, 0, l)), (c[l] = r[l]));
  return e.concat(c || Array.prototype.slice.call(r));
}
var Iu = "right-scroll-bar-position",
  Fu = "width-before-scroll-bar",
  NA = "with-scroll-bars-hidden",
  OA = "--removed-body-scroll-bar-size";
function Tm(e, r) {
  return (typeof e == "function" ? e(r) : e && (e.current = r), e);
}
function jA(e, r) {
  var o = S.useState(function () {
    return {
      value: e,
      callback: r,
      facade: {
        get current() {
          return o.value;
        },
        set current(l) {
          var s = o.value;
          s !== l && ((o.value = l), o.callback(l, s));
        },
      },
    };
  })[0];
  return ((o.callback = r), o.facade);
}
var zA = typeof window < "u" ? S.useLayoutEffect : S.useEffect,
  p1 = new WeakMap();
function kA(e, r) {
  var o = jA(null, function (l) {
    return e.forEach(function (s) {
      return Tm(s, l);
    });
  });
  return (
    zA(
      function () {
        var l = p1.get(o);
        if (l) {
          var s = new Set(l),
            c = new Set(e),
            u = o.current;
          (s.forEach(function (f) {
            c.has(f) || Tm(f, null);
          }),
            c.forEach(function (f) {
              s.has(f) || Tm(f, u);
            }));
        }
        p1.set(o, e);
      },
      [e],
    ),
    o
  );
}
function LA(e) {
  return e;
}
function BA(e, r) {
  r === void 0 && (r = LA);
  var o = [],
    l = !1,
    s = {
      read: function () {
        if (l)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return o.length ? o[o.length - 1] : e;
      },
      useMedium: function (c) {
        var u = r(c, l);
        return (
          o.push(u),
          function () {
            o = o.filter(function (f) {
              return f !== u;
            });
          }
        );
      },
      assignSyncMedium: function (c) {
        for (l = !0; o.length; ) {
          var u = o;
          ((o = []), u.forEach(c));
        }
        o = {
          push: function (f) {
            return c(f);
          },
          filter: function () {
            return o;
          },
        };
      },
      assignMedium: function (c) {
        l = !0;
        var u = [];
        if (o.length) {
          var f = o;
          ((o = []), f.forEach(c), (u = o));
        }
        var d = function () {
            var v = u;
            ((u = []), v.forEach(c));
          },
          m = function () {
            return Promise.resolve().then(d);
          };
        (m(),
          (o = {
            push: function (v) {
              (u.push(v), m());
            },
            filter: function (v) {
              return ((u = u.filter(v)), o);
            },
          }));
      },
    };
  return s;
}
function $A(e) {
  e === void 0 && (e = {});
  var r = BA(null);
  return ((r.options = ca({ async: !0, ssr: !1 }, e)), r);
}
var $w = function (e) {
  var r = e.sideCar,
    o = Bw(e, ["sideCar"]);
  if (!r) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var l = r.read();
  if (!l) throw new Error("Sidecar medium not found");
  return S.createElement(l, ca({}, o));
};
$w.isSideCarExport = !0;
function HA(e, r) {
  return (e.useMedium(r), $w);
}
var Hw = $A(),
  _m = function () {},
  Tf = S.forwardRef(function (e, r) {
    var o = S.useRef(null),
      l = S.useState({ onScrollCapture: _m, onWheelCapture: _m, onTouchMoveCapture: _m }),
      s = l[0],
      c = l[1],
      u = e.forwardProps,
      f = e.children,
      d = e.className,
      m = e.removeScrollBar,
      v = e.enabled,
      g = e.shards,
      y = e.sideCar,
      b = e.noRelative,
      x = e.noIsolation,
      C = e.inert,
      R = e.allowPinchZoom,
      T = e.as,
      _ = T === void 0 ? "div" : T,
      D = e.gapMode,
      j = Bw(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      z = y,
      H = kA([o, r]),
      $ = ca(ca({}, j), s);
    return S.createElement(
      S.Fragment,
      null,
      v &&
        S.createElement(z, {
          sideCar: Hw,
          removeScrollBar: m,
          shards: g,
          noRelative: b,
          noIsolation: x,
          inert: C,
          setCallbacks: c,
          allowPinchZoom: !!R,
          lockRef: o,
          gapMode: D,
        }),
      u
        ? S.cloneElement(S.Children.only(f), ca(ca({}, $), { ref: H }))
        : S.createElement(_, ca({}, $, { className: d, ref: H }), f),
    );
  });
Tf.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Tf.classNames = { fullWidth: Fu, zeroRight: Iu };
var UA = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function PA() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var r = UA();
  return (r && e.setAttribute("nonce", r), e);
}
function VA(e, r) {
  e.styleSheet ? (e.styleSheet.cssText = r) : e.appendChild(document.createTextNode(r));
}
function IA(e) {
  var r = document.head || document.getElementsByTagName("head")[0];
  r.appendChild(e);
}
var FA = function () {
    var e = 0,
      r = null;
    return {
      add: function (o) {
        (e == 0 && (r = PA()) && (VA(r, o), IA(r)), e++);
      },
      remove: function () {
        (e--, !e && r && (r.parentNode && r.parentNode.removeChild(r), (r = null)));
      },
    };
  },
  qA = function () {
    var e = FA();
    return function (r, o) {
      S.useEffect(
        function () {
          return (
            e.add(r),
            function () {
              e.remove();
            }
          );
        },
        [r && o],
      );
    };
  },
  Uw = function () {
    var e = qA(),
      r = function (o) {
        var l = o.styles,
          s = o.dynamic;
        return (e(l, s), null);
      };
    return r;
  },
  YA = { left: 0, top: 0, right: 0, gap: 0 },
  Dm = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  GA = function (e) {
    var r = window.getComputedStyle(document.body),
      o = r[e === "padding" ? "paddingLeft" : "marginLeft"],
      l = r[e === "padding" ? "paddingTop" : "marginTop"],
      s = r[e === "padding" ? "paddingRight" : "marginRight"];
    return [Dm(o), Dm(l), Dm(s)];
  },
  XA = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return YA;
    var r = GA(e),
      o = document.documentElement.clientWidth,
      l = window.innerWidth;
    return { left: r[0], top: r[1], right: r[2], gap: Math.max(0, l - o + r[2] - r[0]) };
  },
  KA = Uw(),
  gi = "data-scroll-locked",
  QA = function (e, r, o, l) {
    var s = e.left,
      c = e.top,
      u = e.right,
      f = e.gap;
    return (
      o === void 0 && (o = "margin"),
      `
  .`
        .concat(
          NA,
          ` {
   overflow: hidden `,
        )
        .concat(
          l,
          `;
   padding-right: `,
        )
        .concat(f, "px ")
        .concat(
          l,
          `;
  }
  body[`,
        )
        .concat(
          gi,
          `] {
    overflow: hidden `,
        )
        .concat(
          l,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            r && "position: relative ".concat(l, ";"),
            o === "margin" &&
              `
    padding-left: `
                .concat(
                  s,
                  `px;
    padding-top: `,
                )
                .concat(
                  c,
                  `px;
    padding-right: `,
                )
                .concat(
                  u,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(f, "px ")
                .concat(
                  l,
                  `;
    `,
                ),
            o === "padding" && "padding-right: ".concat(f, "px ").concat(l, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          Iu,
          ` {
    right: `,
        )
        .concat(f, "px ")
        .concat(
          l,
          `;
  }
  
  .`,
        )
        .concat(
          Fu,
          ` {
    margin-right: `,
        )
        .concat(f, "px ")
        .concat(
          l,
          `;
  }
  
  .`,
        )
        .concat(Iu, " .")
        .concat(
          Iu,
          ` {
    right: 0 `,
        )
        .concat(
          l,
          `;
  }
  
  .`,
        )
        .concat(Fu, " .")
        .concat(
          Fu,
          ` {
    margin-right: 0 `,
        )
        .concat(
          l,
          `;
  }
  
  body[`,
        )
        .concat(
          gi,
          `] {
    `,
        )
        .concat(OA, ": ")
        .concat(
          f,
          `px;
  }
`,
        )
    );
  },
  g1 = function () {
    var e = parseInt(document.body.getAttribute(gi) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  ZA = function () {
    S.useEffect(function () {
      return (
        document.body.setAttribute(gi, (g1() + 1).toString()),
        function () {
          var e = g1() - 1;
          e <= 0 ? document.body.removeAttribute(gi) : document.body.setAttribute(gi, e.toString());
        }
      );
    }, []);
  },
  WA = function (e) {
    var r = e.noRelative,
      o = e.noImportant,
      l = e.gapMode,
      s = l === void 0 ? "margin" : l;
    ZA();
    var c = S.useMemo(
      function () {
        return XA(s);
      },
      [s],
    );
    return S.createElement(KA, { styles: QA(c, !r, s, o ? "" : "!important") });
  },
  np = !1;
if (typeof window < "u")
  try {
    var Nu = Object.defineProperty({}, "passive", {
      get: function () {
        return ((np = !0), !0);
      },
    });
    (window.addEventListener("test", Nu, Nu), window.removeEventListener("test", Nu, Nu));
  } catch {
    np = !1;
  }
var si = np ? { passive: !1 } : !1,
  JA = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Pw = function (e, r) {
    if (!(e instanceof Element)) return !1;
    var o = window.getComputedStyle(e);
    return o[r] !== "hidden" && !(o.overflowY === o.overflowX && !JA(e) && o[r] === "visible");
  },
  eM = function (e) {
    return Pw(e, "overflowY");
  },
  tM = function (e) {
    return Pw(e, "overflowX");
  },
  v1 = function (e, r) {
    var o = r.ownerDocument,
      l = r;
    do {
      typeof ShadowRoot < "u" && l instanceof ShadowRoot && (l = l.host);
      var s = Vw(e, l);
      if (s) {
        var c = Iw(e, l),
          u = c[1],
          f = c[2];
        if (u > f) return !0;
      }
      l = l.parentNode;
    } while (l && l !== o.body);
    return !1;
  },
  nM = function (e) {
    var r = e.scrollTop,
      o = e.scrollHeight,
      l = e.clientHeight;
    return [r, o, l];
  },
  rM = function (e) {
    var r = e.scrollLeft,
      o = e.scrollWidth,
      l = e.clientWidth;
    return [r, o, l];
  },
  Vw = function (e, r) {
    return e === "v" ? eM(r) : tM(r);
  },
  Iw = function (e, r) {
    return e === "v" ? nM(r) : rM(r);
  },
  aM = function (e, r) {
    return e === "h" && r === "rtl" ? -1 : 1;
  },
  oM = function (e, r, o, l, s) {
    var c = aM(e, window.getComputedStyle(r).direction),
      u = c * l,
      f = o.target,
      d = r.contains(f),
      m = !1,
      v = u > 0,
      g = 0,
      y = 0;
    do {
      if (!f) break;
      var b = Iw(e, f),
        x = b[0],
        C = b[1],
        R = b[2],
        T = C - R - c * x;
      (x || T) && Vw(e, f) && ((g += T), (y += x));
      var _ = f.parentNode;
      f = _ && _.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? _.host : _;
    } while ((!d && f !== document.body) || (d && (r.contains(f) || r === f)));
    return (((v && Math.abs(g) < 1) || (!v && Math.abs(y) < 1)) && (m = !0), m);
  },
  Ou = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  y1 = function (e) {
    return [e.deltaX, e.deltaY];
  },
  b1 = function (e) {
    return e && "current" in e ? e.current : e;
  },
  lM = function (e, r) {
    return e[0] === r[0] && e[1] === r[1];
  },
  iM = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  sM = 0,
  ci = [];
function cM(e) {
  var r = S.useRef([]),
    o = S.useRef([0, 0]),
    l = S.useRef(),
    s = S.useState(sM++)[0],
    c = S.useState(Uw)[0],
    u = S.useRef(e);
  (S.useEffect(
    function () {
      u.current = e;
    },
    [e],
  ),
    S.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(s));
          var C = MA([e.lockRef.current], (e.shards || []).map(b1), !0).filter(Boolean);
          return (
            C.forEach(function (R) {
              return R.classList.add("allow-interactivity-".concat(s));
            }),
            function () {
              (document.body.classList.remove("block-interactivity-".concat(s)),
                C.forEach(function (R) {
                  return R.classList.remove("allow-interactivity-".concat(s));
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    ));
  var f = S.useCallback(function (C, R) {
      if (("touches" in C && C.touches.length === 2) || (C.type === "wheel" && C.ctrlKey))
        return !u.current.allowPinchZoom;
      var T = Ou(C),
        _ = o.current,
        D = "deltaX" in C ? C.deltaX : _[0] - T[0],
        j = "deltaY" in C ? C.deltaY : _[1] - T[1],
        z,
        H = C.target,
        $ = Math.abs(D) > Math.abs(j) ? "h" : "v";
      if ("touches" in C && $ === "h" && H.type === "range") return !1;
      var M = window.getSelection(),
        K = M && M.anchorNode,
        Y = K ? K === H || K.contains(H) : !1;
      if (Y) return !1;
      var ee = v1($, H);
      if (!ee) return !0;
      if ((ee ? (z = $) : ((z = $ === "v" ? "h" : "v"), (ee = v1($, H))), !ee)) return !1;
      if ((!l.current && "changedTouches" in C && (D || j) && (l.current = z), !z)) return !0;
      var ne = l.current || z;
      return oM(ne, R, C, ne === "h" ? D : j);
    }, []),
    d = S.useCallback(function (C) {
      var R = C;
      if (!(!ci.length || ci[ci.length - 1] !== c)) {
        var T = "deltaY" in R ? y1(R) : Ou(R),
          _ = r.current.filter(function (z) {
            return (
              z.name === R.type &&
              (z.target === R.target || R.target === z.shadowParent) &&
              lM(z.delta, T)
            );
          })[0];
        if (_ && _.should) {
          R.cancelable && R.preventDefault();
          return;
        }
        if (!_) {
          var D = (u.current.shards || [])
              .map(b1)
              .filter(Boolean)
              .filter(function (z) {
                return z.contains(R.target);
              }),
            j = D.length > 0 ? f(R, D[0]) : !u.current.noIsolation;
          j && R.cancelable && R.preventDefault();
        }
      }
    }, []),
    m = S.useCallback(function (C, R, T, _) {
      var D = { name: C, delta: R, target: T, should: _, shadowParent: uM(T) };
      (r.current.push(D),
        setTimeout(function () {
          r.current = r.current.filter(function (j) {
            return j !== D;
          });
        }, 1));
    }, []),
    v = S.useCallback(function (C) {
      ((o.current = Ou(C)), (l.current = void 0));
    }, []),
    g = S.useCallback(function (C) {
      m(C.type, y1(C), C.target, f(C, e.lockRef.current));
    }, []),
    y = S.useCallback(function (C) {
      m(C.type, Ou(C), C.target, f(C, e.lockRef.current));
    }, []);
  S.useEffect(function () {
    return (
      ci.push(c),
      e.setCallbacks({ onScrollCapture: g, onWheelCapture: g, onTouchMoveCapture: y }),
      document.addEventListener("wheel", d, si),
      document.addEventListener("touchmove", d, si),
      document.addEventListener("touchstart", v, si),
      function () {
        ((ci = ci.filter(function (C) {
          return C !== c;
        })),
          document.removeEventListener("wheel", d, si),
          document.removeEventListener("touchmove", d, si),
          document.removeEventListener("touchstart", v, si));
      }
    );
  }, []);
  var b = e.removeScrollBar,
    x = e.inert;
  return S.createElement(
    S.Fragment,
    null,
    x ? S.createElement(c, { styles: iM(s) }) : null,
    b ? S.createElement(WA, { noRelative: e.noRelative, gapMode: e.gapMode }) : null,
  );
}
function uM(e) {
  for (var r = null; e !== null; )
    (e instanceof ShadowRoot && ((r = e.host), (e = e.host)), (e = e.parentNode));
  return r;
}
const fM = HA(Hw, cM);
var Fw = S.forwardRef(function (e, r) {
  return S.createElement(Tf, ca({}, e, { ref: r, sideCar: fM }));
});
Fw.classNames = Tf.classNames;
function qw({
  keepMounted: e,
  opened: r,
  onClose: o,
  id: l,
  transitionProps: s,
  onExitTransitionEnd: c,
  onEnterTransitionEnd: u,
  trapFocus: f,
  closeOnEscape: d,
  returnFocus: m,
  closeOnClickOutside: v,
  withinPortal: g,
  portalProps: y,
  lockScroll: b,
  children: x,
  zIndex: C,
  shadow: R,
  padding: T,
  __vars: _,
  unstyled: D,
  removeScrollProps: j,
  ...z
}) {
  const {
      _id: H,
      titleMounted: $,
      bodyMounted: M,
      shouldLockScroll: K,
      setTitleMounted: Y,
      setBodyMounted: ee,
    } = AA({
      id: l,
      transitionProps: s,
      opened: r,
      trapFocus: f,
      closeOnEscape: d,
      onClose: o,
      returnFocus: m,
    }),
    { key: ne, ...oe } = j || {};
  return w.jsx(Sl, {
    ...y,
    withinPortal: g,
    children: w.jsx(_A, {
      value: {
        opened: r,
        onClose: o,
        closeOnClickOutside: v,
        onExitTransitionEnd: c,
        onEnterTransitionEnd: u,
        transitionProps: { ...s, keepMounted: e },
        getTitleId: () => `${H}-title`,
        getBodyId: () => `${H}-body`,
        titleMounted: $,
        bodyMounted: M,
        setTitleMounted: Y,
        setBodyMounted: ee,
        trapFocus: f,
        closeOnEscape: d,
        zIndex: C,
        unstyled: D,
      },
      children: w.jsx(
        Fw,
        {
          enabled: K && b,
          ...oe,
          children: w.jsx(Ne, {
            ...z,
            id: H,
            __vars: {
              ..._,
              "--mb-z-index": (C || Xa("modal")).toString(),
              "--mb-shadow": gp(R),
              "--mb-padding": un(T),
            },
            children: x,
          }),
        },
        ne,
      ),
    }),
  });
}
qw.displayName = "@mantine/core/ModalBase";
function dM() {
  const e = Ja();
  return (S.useEffect(() => (e.setBodyMounted(!0), () => e.setBodyMounted(!1)), []), e.getBodyId());
}
var bi = {
  title: "m_615af6c9",
  header: "m_b5489c3c",
  inner: "m_60c222c7",
  content: "m_fd1ab0aa",
  close: "m_606cb269",
  body: "m_5df29311",
};
function Yw({ className: e, ...r }) {
  const o = dM(),
    l = Ja();
  return w.jsx(Ne, { id: o, className: Dn({ [bi.body]: !l.unstyled }, e), ...r });
}
Yw.displayName = "@mantine/core/ModalBaseBody";
function Gw({ className: e, onClick: r, ...o }) {
  const l = Ja();
  return w.jsx(Di, {
    ...o,
    onClick: (s) => {
      (l.onClose(), r?.(s));
    },
    className: Dn({ [bi.close]: !l.unstyled }, e),
    unstyled: l.unstyled,
  });
}
Gw.displayName = "@mantine/core/ModalBaseCloseButton";
function Xw({
  transitionProps: e,
  className: r,
  innerProps: o,
  onKeyDown: l,
  style: s,
  ref: c,
  ...u
}) {
  const f = Ja();
  return w.jsx($o, {
    mounted: f.opened,
    transition: "pop",
    ...f.transitionProps,
    onExited: () => {
      (f.onExitTransitionEnd?.(), f.transitionProps?.onExited?.());
    },
    onEntered: () => {
      (f.onEnterTransitionEnd?.(), f.transitionProps?.onEntered?.());
    },
    ...e,
    children: (d) =>
      w.jsx("div", {
        ...o,
        className: Dn({ [bi.inner]: !f.unstyled }, o.className),
        children: w.jsx(Rf, {
          active: f.opened && f.trapFocus,
          innerRef: c,
          children: w.jsx(Bo, {
            ...u,
            component: "section",
            role: "dialog",
            tabIndex: -1,
            "aria-modal": !0,
            "aria-describedby": f.bodyMounted ? f.getBodyId() : void 0,
            "aria-labelledby": f.titleMounted ? f.getTitleId() : void 0,
            style: [s, d],
            className: Dn({ [bi.content]: !f.unstyled }, r),
            unstyled: f.unstyled,
            children: u.children,
          }),
        }),
      }),
  });
}
Xw.displayName = "@mantine/core/ModalBaseContent";
function Kw({ className: e, ...r }) {
  const o = Ja();
  return w.jsx(Ne, { component: "header", className: Dn({ [bi.header]: !o.unstyled }, e), ...r });
}
Kw.displayName = "@mantine/core/ModalBaseHeader";
const hM = { duration: 200, timingFunction: "ease", transition: "fade" };
function mM(e) {
  const r = Ja();
  return { ...hM, ...r.transitionProps, ...e };
}
function Qw({ onClick: e, transitionProps: r, style: o, visible: l, ...s }) {
  const c = Ja(),
    u = mM(r);
  return w.jsx($o, {
    mounted: l !== void 0 ? l : c.opened,
    ...u,
    transition: "fade",
    children: (f) =>
      w.jsx(ac, {
        fixed: !0,
        style: [o, f],
        zIndex: c.zIndex,
        unstyled: c.unstyled,
        onClick: (d) => {
          (e?.(d), c.closeOnClickOutside && c.onClose());
        },
        ...s,
      }),
  });
}
Qw.displayName = "@mantine/core/ModalBaseOverlay";
function pM() {
  const e = Ja();
  return (
    S.useEffect(() => (e.setTitleMounted(!0), () => e.setTitleMounted(!1)), []),
    e.getTitleId()
  );
}
function Zw({ className: e, ...r }) {
  const o = pM(),
    l = Ja();
  return w.jsx(Ne, { component: "h2", className: Dn({ [bi.title]: !l.unstyled }, e), id: o, ...r });
}
Zw.displayName = "@mantine/core/ModalBaseTitle";
function gM({ children: e }) {
  return w.jsx(w.Fragment, { children: e });
}
const Ww = S.createContext({ size: "sm" }),
  Jw = He((e) => {
    const r = Ee("InputClearButton", null, e),
      { size: o, variant: l, vars: s, classNames: c, styles: u, ...f } = r,
      d = S.use(Ww),
      { resolvedClassNames: m, resolvedStyles: v } = tc({ classNames: c, styles: u, props: r });
    return w.jsx(Di, {
      variant: l || "transparent",
      size: o || d?.size || "sm",
      classNames: m,
      styles: v,
      __staticSelector: "InputClearButton",
      style: { pointerEvents: "all", background: "var(--input-bg)", ...f.style },
      ...f,
    });
  });
Jw.displayName = "@mantine/core/InputClearButton";
const vM = { xs: 7, sm: 8, md: 10, lg: 12, xl: 15 };
function yM({
  __clearable: e,
  __clearSection: r,
  rightSection: o,
  __defaultRightSection: l,
  size: s = "sm",
  __clearSectionMode: c = "both",
}) {
  const u = e && r;
  return c === "rightSection"
    ? o === null
      ? null
      : o || l
    : c === "clear"
      ? o === null
        ? null
        : u || l
      : u && (o || l)
        ? w.jsxs("div", {
            "data-combined-clear-section": !0,
            style: { display: "flex", gap: 2, alignItems: "center", paddingInlineEnd: vM[s] },
            children: [u, o || l],
          })
        : o === null
          ? null
          : o || u || l;
}
const Rl = S.createContext({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0,
});
var Dr = {
  wrapper: "m_6c018570",
  input: "m_8fb7ebe7",
  section: "m_82577fc2",
  placeholder: "m_88bacfd0",
  root: "m_46b77525",
  label: "m_8fdc1311",
  required: "m_78a94662",
  error: "m_8f816625",
  description: "m_fe47ce59",
};
const ex = (e, { size: r }) => ({
    description: {
      "--input-description-size": r === void 0 ? void 0 : `calc(${kn(r)} - ${pe(2)})`,
    },
  }),
  oc = He((e) => {
    const r = Ee("InputDescription", null, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        vars: f,
        __staticSelector: d,
        __inheritStyles: m = !0,
        attributes: v,
        ...g
      } = Ee("InputDescription", null, r),
      y = S.use(Rl),
      b = Ze({
        name: ["InputWrapper", d],
        props: r,
        classes: Dr,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: v,
        rootSelector: "description",
        vars: f,
        varsResolver: ex,
      });
    return w.jsx(Ne, {
      component: "p",
      ...((m && y?.getStyles) || b)(
        "description",
        y?.getStyles ? { className: l, style: s } : void 0,
      ),
      ...g,
    });
  });
oc.classes = Dr;
oc.varsResolver = ex;
oc.displayName = "@mantine/core/InputDescription";
const tx = (e, { size: r }) => ({
    error: { "--input-error-size": r === void 0 ? void 0 : `calc(${kn(r)} - ${pe(2)})` },
  }),
  lc = He((e) => {
    const r = Ee("InputError", null, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        vars: f,
        attributes: d,
        __staticSelector: m,
        __inheritStyles: v = !0,
        ...g
      } = r,
      y = Ze({
        name: ["InputWrapper", m],
        props: r,
        classes: Dr,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: d,
        rootSelector: "error",
        vars: f,
        varsResolver: tx,
      }),
      b = S.use(Rl);
    return w.jsx(Ne, {
      component: "p",
      ...((v && b?.getStyles) || y)("error", b?.getStyles ? { className: l, style: s } : void 0),
      ...g,
    });
  });
lc.classes = Dr;
lc.varsResolver = tx;
lc.displayName = "@mantine/core/InputError";
const bM = { labelElement: "label" },
  nx = (e, { size: r }) => ({
    label: { "--input-label-size": kn(r), "--input-asterisk-color": void 0 },
  }),
  ic = He((e) => {
    const r = Ee("InputLabel", bM, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        vars: f,
        labelElement: d,
        required: m,
        htmlFor: v,
        onMouseDown: g,
        children: y,
        __staticSelector: b,
        mod: x,
        attributes: C,
        ...R
      } = r,
      T = Ze({
        name: ["InputWrapper", b],
        props: r,
        classes: Dr,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: C,
        rootSelector: "label",
        vars: f,
        varsResolver: nx,
      }),
      _ = S.use(Rl),
      D = _?.getStyles || T;
    return w.jsxs(Ne, {
      ...D("label", _?.getStyles ? { className: l, style: s } : void 0),
      component: d,
      htmlFor: d === "label" ? v : void 0,
      mod: [{ required: m }, x],
      onMouseDown: (j) => {
        (g?.(j), !j.defaultPrevented && j.detail > 1 && j.preventDefault());
      },
      ...R,
      children: [y, m && w.jsx("span", { ...D("required"), "aria-hidden": !0, children: " *" })],
    });
  });
ic.classes = Dr;
ic.varsResolver = nx;
ic.displayName = "@mantine/core/InputLabel";
const Fp = He((e) => {
  const r = Ee("InputPlaceholder", null, e),
    {
      classNames: o,
      className: l,
      style: s,
      styles: c,
      unstyled: u,
      vars: f,
      __staticSelector: d,
      error: m,
      mod: v,
      attributes: g,
      ...y
    } = r;
  return w.jsx(Ne, {
    ...Ze({
      name: ["InputPlaceholder", d],
      props: r,
      classes: Dr,
      className: l,
      style: s,
      classNames: o,
      styles: c,
      unstyled: u,
      attributes: g,
      rootSelector: "placeholder",
    })("placeholder"),
    mod: [{ error: !!m }, v],
    component: "span",
    ...y,
  });
});
Fp.classes = Dr;
Fp.displayName = "@mantine/core/InputPlaceholder";
function SM(e, { hasDescription: r, hasError: o }) {
  const l = e.findIndex((f) => f === "input"),
    s = e.slice(0, l),
    c = e.slice(l + 1),
    u = (r && s.includes("description")) || (o && s.includes("error"));
  return {
    offsetBottom: (r && c.includes("description")) || (o && c.includes("error")),
    offsetTop: u,
  };
}
const wM = {
    labelElement: "label",
    inputContainer: (e) => e,
    inputWrapperOrder: ["label", "description", "input", "error"],
  },
  rx = (e, { size: r }) => ({
    label: { "--input-label-size": kn(r), "--input-asterisk-color": void 0 },
    error: { "--input-error-size": r === void 0 ? void 0 : `calc(${kn(r)} - ${pe(2)})` },
    description: {
      "--input-description-size": r === void 0 ? void 0 : `calc(${kn(r)} - ${pe(2)})`,
    },
  }),
  _f = He((e) => {
    const r = Ee("InputWrapper", wM, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        vars: f,
        size: d,
        variant: m,
        __staticSelector: v,
        inputContainer: g,
        inputWrapperOrder: y,
        label: b,
        error: x,
        description: C,
        labelProps: R,
        descriptionProps: T,
        errorProps: _,
        labelElement: D,
        children: j,
        withAsterisk: z,
        id: H,
        required: $,
        __stylesApiProps: M,
        mod: K,
        attributes: Y,
        ...ee
      } = r,
      ne = Ze({
        name: ["InputWrapper", v],
        props: M || r,
        classes: Dr,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: Y,
        vars: f,
        varsResolver: rx,
      }),
      oe = { size: d, variant: m, __staticSelector: v },
      U = Wr(H),
      re = typeof z == "boolean" ? z : $,
      N = _?.id || `${U}-error`,
      k = T?.id || `${U}-description`,
      B = U,
      F = !!x && typeof x != "boolean",
      Z = !!C,
      O = `${F ? N : ""} ${Z ? k : ""}`,
      P = O.trim().length > 0 ? O.trim() : void 0,
      Q = R?.id || `${U}-label`,
      ae =
        b &&
        w.jsx(
          ic,
          { labelElement: D, id: Q, htmlFor: B, required: re, ...oe, ...R, children: b },
          "label",
        ),
      ie =
        Z &&
        w.jsx(
          oc,
          { ...T, ...oe, size: T?.size || oe.size, id: T?.id || k, children: C },
          "description",
        ),
      ue = w.jsx(S.Fragment, { children: g(j) }, "input"),
      ge =
        F &&
        S.createElement(
          lc,
          { ..._, ...oe, size: _?.size || oe.size, key: "error", id: _?.id || N },
          x,
        ),
      Se = y.map((Ce) => {
        switch (Ce) {
          case "label":
            return ae;
          case "input":
            return ue;
          case "description":
            return ie;
          case "error":
            return ge;
          default:
            return null;
        }
      });
    return w.jsx(Rl, {
      value: {
        getStyles: ne,
        describedBy: P,
        inputId: B,
        labelId: Q,
        ...SM(y, { hasDescription: Z, hasError: F }),
      },
      children: w.jsx(Ne, {
        variant: m,
        size: d,
        mod: [{ error: !!x }, K],
        id: D === "label" ? void 0 : H,
        ...ne("root"),
        ...ee,
        children: Se,
      }),
    });
  });
_f.classes = Dr;
_f.varsResolver = rx;
_f.displayName = "@mantine/core/InputWrapper";
const xM = {
    variant: "default",
    leftSectionPointerEvents: "none",
    rightSectionPointerEvents: "none",
    withAria: !0,
    withErrorStyles: !0,
    size: "sm",
    loading: !1,
    loadingPosition: "right",
  },
  ax = (e, r, o) => ({
    wrapper: {
      "--input-margin-top": o.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
      "--input-margin-bottom": o.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
      "--input-height": gt(r.size, "input-height"),
      "--input-fz": kn(r.size),
      "--input-radius": r.radius === void 0 ? void 0 : Ln(r.radius),
      "--input-left-section-width": r.leftSectionWidth !== void 0 ? pe(r.leftSectionWidth) : void 0,
      "--input-right-section-width":
        r.rightSectionWidth !== void 0 ? pe(r.rightSectionWidth) : void 0,
      "--input-padding-y": r.multiline ? gt(r.size, "input-padding-y") : void 0,
      "--input-left-section-pointer-events": r.leftSectionPointerEvents,
      "--input-right-section-pointer-events": r.rightSectionPointerEvents,
    },
  }),
  en = Jn((e) => {
    const r = Ee("Input", xM, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        required: f,
        __staticSelector: d,
        __stylesApiProps: m,
        size: v,
        wrapperProps: g,
        error: y,
        disabled: b,
        leftSection: x,
        leftSectionProps: C,
        leftSectionWidth: R,
        rightSection: T,
        rightSectionProps: _,
        rightSectionWidth: D,
        rightSectionPointerEvents: j,
        leftSectionPointerEvents: z,
        variant: H,
        vars: $,
        pointer: M,
        multiline: K,
        radius: Y,
        id: ee,
        withAria: ne,
        withErrorStyles: oe,
        mod: U,
        inputSize: re,
        attributes: N,
        __clearSection: k,
        __clearable: B,
        __clearSectionMode: F,
        __defaultRightSection: Z,
        loading: O,
        loadingPosition: P,
        rootRef: Q,
        ...ae
      } = r,
      { styleProps: ie, rest: ue } = Ei(ae),
      ge = S.use(Rl),
      Se = { offsetBottom: ge?.offsetBottom, offsetTop: ge?.offsetTop },
      Ce = Ze({
        name: ["Input", d],
        props: m || r,
        classes: Dr,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: N,
        stylesCtx: Se,
        rootSelector: "wrapper",
        vars: $,
        varsResolver: ax,
      }),
      Ye = ne
        ? {
            required: f,
            disabled: b,
            "aria-invalid": y ? !0 : void 0,
            "aria-describedby": ge?.describedBy,
            id: ge?.inputId || ee,
          }
        : {},
      je = O
        ? w.jsx(_i, {
            size:
              P === "left"
                ? "calc(var(--input-left-section-size) / 2)"
                : "calc(var(--input-right-section-size) / 2)",
          })
        : null,
      de = O && P === "left" ? je : x,
      _e = yM({
        __clearable: B,
        __clearSection: k,
        rightSection: O && P === "right" ? je : T,
        __defaultRightSection: Z,
        size: v,
        __clearSectionMode: F,
      });
    return w.jsx(Ww, {
      value: { size: v || "sm" },
      children: w.jsxs(Ne, {
        ref: Q,
        ...Ce("wrapper"),
        ...ie,
        ...g,
        mod: [
          {
            error: !!y && oe,
            pointer: M,
            disabled: b,
            multiline: K,
            "data-with-right-section": !!_e,
            "data-with-left-section": !!de,
          },
          U,
        ],
        variant: H,
        size: v,
        children: [
          de &&
            w.jsx("div", {
              ...C,
              "data-position": "left",
              ...Ce("section", { className: C?.className, style: C?.style }),
              children: de,
            }),
          w.jsx(Ne, {
            component: "input",
            ...ue,
            ...Ye,
            required: f,
            mod: { disabled: b, error: !!y && oe },
            variant: H,
            __size: re,
            ...Ce("input"),
          }),
          _e &&
            w.jsx("div", {
              ..._,
              "data-position": "right",
              ...Ce("section", { className: _?.className, style: _?.style }),
              children: _e,
            }),
        ],
      }),
    });
  });
en.classes = Dr;
en.varsResolver = ax;
en.Wrapper = _f;
en.Label = ic;
en.Error = lc;
en.Description = oc;
en.Placeholder = Fp;
en.ClearButton = Jw;
en.displayName = "@mantine/core/Input";
function CM(e, r, o) {
  const l = Ee(["Input", "InputWrapper", e], r, o),
    {
      label: s,
      description: c,
      error: u,
      required: f,
      classNames: d,
      styles: m,
      className: v,
      unstyled: g,
      __staticSelector: y,
      __stylesApiProps: b,
      errorProps: x,
      labelProps: C,
      descriptionProps: R,
      wrapperProps: T,
      id: _,
      size: D,
      style: j,
      inputContainer: z,
      inputWrapperOrder: H,
      withAsterisk: $,
      variant: M,
      vars: K,
      mod: Y,
      attributes: ee,
      ...ne
    } = l,
    { styleProps: oe, rest: U } = Ei(ne),
    re = {
      label: s,
      description: c,
      error: u,
      required: f,
      classNames: d,
      className: v,
      __staticSelector: y,
      __stylesApiProps: b || l,
      errorProps: x,
      labelProps: C,
      descriptionProps: R,
      unstyled: g,
      styles: m,
      size: D,
      style: j,
      inputContainer: z,
      inputWrapperOrder: H,
      withAsterisk: $,
      variant: M,
      id: _,
      mod: Y,
      attributes: ee,
      ...T,
    };
  return {
    ...U,
    classNames: d,
    styles: m,
    unstyled: g,
    wrapperProps: { ...re, ...oe },
    inputProps: {
      required: f,
      classNames: d,
      styles: m,
      unstyled: g,
      size: D,
      __staticSelector: y,
      __stylesApiProps: b || l,
      error: u,
      variant: M,
      id: _,
      attributes: ee,
    },
  };
}
const EM = { __staticSelector: "InputBase", withAria: !0, size: "sm" },
  Po = Jn((e) => {
    const { inputProps: r, wrapperProps: o, ...l } = CM("InputBase", EM, e);
    return w.jsx(en.Wrapper, { ...o, children: w.jsx(en, { ...r, ...l }) });
  });
Po.classes = { ...en.classes, ...en.Wrapper.classes };
Po.displayName = "@mantine/core/InputBase";
function Is({ style: e, size: r = 16, ...o }) {
  return w.jsx("svg", {
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: { ...e, width: pe(r), height: pe(r), display: "block" },
    ...o,
    children: w.jsx("path", {
      d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }),
  });
}
Is.displayName = "@mantine/core/AccordionChevron";
var ox = { root: "m_b6d8b162" };
function RM(e) {
  if (e === "start") return "start";
  if (e === "end" || e) return "end";
}
const TM = { inherit: !1 },
  lx = (e, { variant: r, lineClamp: o, gradient: l, size: s }) => ({
    root: {
      "--text-fz": kn(s),
      "--text-lh": bS(s),
      "--text-gradient": r === "gradient" ? Ym(l, e) : void 0,
      "--text-line-clamp": typeof o == "number" ? o.toString() : void 0,
    },
  }),
  Vn = Jn((e) => {
    const r = Ee("Text", TM, e),
      {
        lineClamp: o,
        truncate: l,
        inline: s,
        inherit: c,
        gradient: u,
        span: f,
        __staticSelector: d,
        vars: m,
        className: v,
        style: g,
        classNames: y,
        styles: b,
        unstyled: x,
        variant: C,
        mod: R,
        size: T,
        attributes: _,
        ...D
      } = r;
    return w.jsx(Ne, {
      ...Ze({
        name: ["Text", d],
        props: r,
        classes: ox,
        className: v,
        style: g,
        classNames: y,
        styles: b,
        unstyled: x,
        attributes: _,
        vars: m,
        varsResolver: lx,
      })("root", { focusable: !0 }),
      component: f ? "span" : "p",
      variant: C,
      mod: [
        {
          "data-truncate": RM(l),
          "data-line-clamp": typeof o == "number",
          "data-inline": s,
          "data-inherit": c,
        },
        R,
      ],
      size: T,
      ...D,
    });
  });
Vn.classes = ox;
Vn.varsResolver = lx;
Vn.displayName = "@mantine/core/Text";
var ix = { root: "m_849cf0da" };
const _M = { underline: "hover" },
  qp = Jn((e) => {
    const { underline: r, className: o, unstyled: l, mod: s, ...c } = Ee("Anchor", _M, e);
    return w.jsx(Vn, {
      component: "a",
      className: Dn({ [ix.root]: !l }, o),
      ...c,
      mod: [{ underline: r }, s],
      __staticSelector: "Anchor",
      unstyled: l,
    });
  });
qp.classes = ix;
qp.displayName = "@mantine/core/Anchor";
var Ar = {
  dropdown: "m_88b62a41",
  search: "m_985517d8",
  options: "m_b2821a6e",
  option: "m_92253aa5",
  empty: "m_2530cd1d",
  header: "m_858f94bd",
  footer: "m_82b967cb",
  group: "m_254f3e4f",
  groupLabel: "m_2bb2e9e5",
  chevron: "m_2943220b",
  optionsDropdownOption: "m_390b5f4",
  optionsDropdownCheckIcon: "m_8ee53fc2",
  optionsDropdownCheckPlaceholder: "m_a530ee0a",
};
const DM = { error: null },
  sx = (e, { size: r, color: o }) => ({
    chevron: {
      "--combobox-chevron-size": gt(r, "combobox-chevron-size"),
      "--combobox-chevron-color": o ? ur(o, e) : void 0,
    },
  }),
  Df = He((e) => {
    const r = Ee("ComboboxChevron", DM, e),
      {
        size: o,
        error: l,
        style: s,
        className: c,
        classNames: u,
        styles: f,
        unstyled: d,
        vars: m,
        attributes: v,
        mod: g,
        ...y
      } = r,
      b = Ze({
        name: "ComboboxChevron",
        classes: Ar,
        props: r,
        style: s,
        className: c,
        classNames: u,
        styles: f,
        unstyled: d,
        vars: m,
        varsResolver: sx,
        attributes: v,
        rootSelector: "chevron",
      });
    return w.jsx(Ne, {
      component: "svg",
      ...y,
      ...b("chevron"),
      size: o,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      mod: ["combobox-chevron", { error: l }, g],
      children: w.jsx("path", {
        d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    });
  });
Df.classes = Ar;
Df.varsResolver = sx;
Df.displayName = "@mantine/core/ComboboxChevron";
const [AM, Mr] = Ga("Combobox component was not found in tree");
function cx({ onMouseDown: e, onClick: r, onClear: o, ...l }) {
  return w.jsx(en.ClearButton, {
    tabIndex: -1,
    "aria-hidden": !0,
    ...l,
    onMouseDown: (s) => {
      (s.preventDefault(), e?.(s));
    },
    onClick: (s) => {
      (o(), r?.(s));
    },
  });
}
cx.displayName = "@mantine/core/ComboboxClearButton";
const Yp = He((e) => {
  const {
      classNames: r,
      styles: o,
      className: l,
      style: s,
      hidden: c,
      ...u
    } = Ee("ComboboxDropdown", null, e),
    f = Mr();
  return w.jsx(Zt.Dropdown, {
    ...u,
    role: "presentation",
    "data-hidden": c || void 0,
    ...f.getStyles("dropdown", { className: l, style: s, classNames: r, styles: o }),
  });
});
Yp.classes = Ar;
Yp.displayName = "@mantine/core/ComboboxDropdown";
const MM = { refProp: "ref" },
  ux = He((e) => {
    const { children: r, refProp: o, ref: l } = Ee("ComboboxDropdownTarget", MM, e);
    if ((Mr(), !pp(r)))
      throw new Error(
        "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported",
      );
    return w.jsx(Zt.Target, { ref: l, refProp: o, children: r });
  });
ux.displayName = "@mantine/core/ComboboxDropdownTarget";
const Gp = He((e) => {
  const {
    classNames: r,
    className: o,
    style: l,
    styles: s,
    vars: c,
    ...u
  } = Ee("ComboboxEmpty", null, e);
  return w.jsx(Ne, {
    ...Mr().getStyles("empty", { className: o, classNames: r, styles: s, style: l }),
    ...u,
  });
});
Gp.classes = Ar;
Gp.displayName = "@mantine/core/ComboboxEmpty";
function Xp({
  onKeyDown: e,
  onClick: r,
  withKeyboardNavigation: o,
  withAriaAttributes: l,
  withExpandedAttribute: s,
  targetType: c,
  autoComplete: u,
}) {
  const f = Mr(),
    [d, m] = S.useState(null),
    v = (b) => {
      if ((e?.(b), !f.readOnly && o)) {
        if (b.nativeEvent.isComposing) return;
        if (
          (b.nativeEvent.code === "ArrowDown" &&
            (b.preventDefault(),
            f.store.dropdownOpened
              ? m(f.store.selectNextOption())
              : (f.store.openDropdown("keyboard"),
                m(f.store.selectActiveOption()),
                f.store.updateSelectedOptionIndex("selected", { scrollIntoView: !0 }))),
          b.nativeEvent.code === "ArrowUp" &&
            (b.preventDefault(),
            f.store.dropdownOpened
              ? m(f.store.selectPreviousOption())
              : (f.store.openDropdown("keyboard"),
                m(f.store.selectActiveOption()),
                f.store.updateSelectedOptionIndex("selected", { scrollIntoView: !0 }))),
          b.nativeEvent.code === "Enter" || b.nativeEvent.code === "NumpadEnter")
        ) {
          if (b.nativeEvent.keyCode === 229) return;
          const x = f.store.getSelectedOptionIndex();
          f.store.dropdownOpened && x !== -1
            ? (b.preventDefault(), f.store.clickSelectedOption())
            : c === "button" && (b.preventDefault(), f.store.openDropdown("keyboard"));
        }
        (b.key === "Escape" && f.store.closeDropdown("keyboard"),
          b.nativeEvent.code === "Space" &&
            c === "button" &&
            (b.preventDefault(), f.store.toggleDropdown("keyboard")));
      }
    };
  return {
    ...(l
      ? {
          ...(s ? { role: "combobox" } : {}),
          "aria-haspopup": "listbox",
          "aria-expanded": s ? !!(f.store.listId && f.store.dropdownOpened) : void 0,
          "aria-controls": f.store.dropdownOpened && f.store.listId ? f.store.listId : void 0,
          "aria-activedescendant": (f.store.dropdownOpened && d) || void 0,
          autoComplete: u,
          "data-expanded": f.store.dropdownOpened || void 0,
          "data-mantine-stop-propagation": f.store.dropdownOpened || void 0,
        }
      : {}),
    onKeyDown: v,
    onClick: (b) => {
      (c === "button" && b.currentTarget.focus(), r?.(b));
    },
  };
}
const NM = {
    refProp: "ref",
    targetType: "input",
    withKeyboardNavigation: !0,
    withAriaAttributes: !0,
    withExpandedAttribute: !1,
    autoComplete: "off",
  },
  fx = He((e) => {
    const {
        children: r,
        refProp: o,
        withKeyboardNavigation: l,
        withAriaAttributes: s,
        withExpandedAttribute: c,
        targetType: u,
        autoComplete: f,
        ref: d,
        ...m
      } = Ee("ComboboxEventsTarget", NM, e),
      v = El(r);
    if (!v)
      throw new Error(
        "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported",
      );
    const g = Mr();
    return S.cloneElement(v, {
      ...Xp({
        targetType: u,
        withAriaAttributes: s,
        withKeyboardNavigation: l,
        withExpandedAttribute: c,
        onKeyDown: v.props.onKeyDown,
        onClick: v.props.onClick,
        autoComplete: f,
      }),
      ...m,
      [o]: tn(d, g.store.targetRef, hf(v)),
    });
  });
fx.displayName = "@mantine/core/ComboboxEventsTarget";
const Kp = He((e) => {
  const {
    classNames: r,
    className: o,
    style: l,
    styles: s,
    vars: c,
    ...u
  } = Ee("ComboboxFooter", null, e);
  return w.jsx(Ne, {
    ...Mr().getStyles("footer", { className: o, classNames: r, style: l, styles: s }),
    ...u,
    onMouseDown: (f) => {
      f.preventDefault();
    },
  });
});
Kp.classes = Ar;
Kp.displayName = "@mantine/core/ComboboxFooter";
const Qp = He((e) => {
  const {
      classNames: r,
      className: o,
      style: l,
      styles: s,
      vars: c,
      children: u,
      label: f,
      id: d,
      ...m
    } = Ee("ComboboxGroup", null, e),
    v = Mr(),
    g = Wr(d);
  return w.jsxs(Ne, {
    role: "group",
    "aria-labelledby": f ? g : void 0,
    ...v.getStyles("group", { className: o, classNames: r, style: l, styles: s }),
    ...m,
    children: [
      f &&
        w.jsx("div", {
          id: g,
          ...v.getStyles("groupLabel", { classNames: r, styles: s }),
          children: f,
        }),
      u,
    ],
  });
});
Qp.classes = Ar;
Qp.displayName = "@mantine/core/ComboboxGroup";
const Zp = He((e) => {
  const {
    classNames: r,
    className: o,
    style: l,
    styles: s,
    vars: c,
    ...u
  } = Ee("ComboboxHeader", null, e);
  return w.jsx(Ne, {
    ...Mr().getStyles("header", { className: o, classNames: r, style: l, styles: s }),
    ...u,
    onMouseDown: (f) => {
      f.preventDefault();
    },
  });
});
Zp.classes = Ar;
Zp.displayName = "@mantine/core/ComboboxHeader";
function dx({ value: e, valuesDivider: r = ",", ...o }) {
  return w.jsx("input", {
    type: "hidden",
    value: Array.isArray(e) ? e.join(r) : e ? `${e}` : "",
    ...o,
  });
}
dx.displayName = "@mantine/core/ComboboxHiddenInput";
const Wp = He((e) => {
  const r = Ee("ComboboxOption", null, e),
    {
      classNames: o,
      className: l,
      style: s,
      styles: c,
      vars: u,
      onClick: f,
      id: d,
      active: m,
      onMouseDown: v,
      onMouseOver: g,
      disabled: y,
      selected: b,
      mod: x,
      ...C
    } = r,
    R = Mr(),
    T = S.useId(),
    _ = d || T;
  return w.jsx(Ne, {
    ...R.getStyles("option", { className: l, classNames: o, styles: c, style: s }),
    ...C,
    id: _,
    mod: [
      "combobox-option",
      { "combobox-active": m, "combobox-disabled": y, "combobox-selected": b },
      x,
    ],
    role: "option",
    onClick: (D) => {
      y ? D.preventDefault() : (R.onOptionSubmit?.(r.value, r), f?.(D));
    },
    onMouseDown: (D) => {
      (D.preventDefault(), v?.(D));
    },
    onMouseOver: (D) => {
      (R.resetSelectionOnOptionHover && R.store.resetSelectedOption(), g?.(D));
    },
  });
});
Wp.classes = Ar;
Wp.displayName = "@mantine/core/ComboboxOption";
const Jp = He((e) => {
  const {
      classNames: r,
      className: o,
      style: l,
      styles: s,
      id: c,
      onMouseDown: u,
      labelledBy: f,
      ...d
    } = Ee("ComboboxOptions", null, e),
    m = Mr(),
    v = Wr(c);
  return (
    S.useEffect(() => {
      m.store.setListId(v);
    }, [v]),
    w.jsx(Ne, {
      ...m.getStyles("options", { className: o, style: l, classNames: r, styles: s }),
      ...d,
      id: v,
      role: "listbox",
      "aria-labelledby": f,
      onMouseDown: (g) => {
        (g.preventDefault(), u?.(g));
      },
    })
  );
});
Jp.classes = Ar;
Jp.displayName = "@mantine/core/ComboboxOptions";
const OM = { withAriaAttributes: !0, withKeyboardNavigation: !0 },
  eg = He((e) => {
    const {
        classNames: r,
        styles: o,
        unstyled: l,
        vars: s,
        withAriaAttributes: c,
        onKeyDown: u,
        onClick: f,
        withKeyboardNavigation: d,
        size: m,
        ref: v,
        ...g
      } = Ee("ComboboxSearch", OM, e),
      y = Mr(),
      b = y.getStyles("search"),
      x = Xp({
        targetType: "input",
        withAriaAttributes: c,
        withKeyboardNavigation: d,
        withExpandedAttribute: !1,
        onKeyDown: u,
        onClick: f,
        autoComplete: "off",
      });
    return w.jsx(en, {
      ref: tn(v, y.store.searchRef),
      classNames: [{ input: b.className }, r],
      styles: [{ input: b.style }, o],
      size: m || y.size,
      ...x,
      ...g,
      __staticSelector: "Combobox",
    });
  });
eg.classes = Ar;
eg.displayName = "@mantine/core/ComboboxSearch";
const jM = {
    refProp: "ref",
    targetType: "input",
    withKeyboardNavigation: !0,
    withAriaAttributes: !0,
    withExpandedAttribute: !1,
    autoComplete: "off",
  },
  hx = He((e) => {
    const {
        children: r,
        refProp: o,
        withKeyboardNavigation: l,
        withAriaAttributes: s,
        withExpandedAttribute: c,
        targetType: u,
        autoComplete: f,
        ref: d,
        ...m
      } = Ee("ComboboxTarget", jM, e),
      v = El(r);
    if (!v)
      throw new Error(
        "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported",
      );
    const g = Mr(),
      y = S.cloneElement(v, {
        ...Xp({
          targetType: u,
          withAriaAttributes: s,
          withKeyboardNavigation: l,
          withExpandedAttribute: c,
          onKeyDown: v.props.onKeyDown,
          onClick: v.props.onClick,
          autoComplete: f,
        }),
        ...m,
      });
    return w.jsx(Zt.Target, { refProp: o, ref: tn(d, g.store.targetRef), children: y });
  });
hx.displayName = "@mantine/core/ComboboxTarget";
function zM(e, r, o) {
  for (let l = e - 1; l >= 0; l -= 1) if (!r[l].hasAttribute("data-combobox-disabled")) return l;
  if (o) {
    for (let l = r.length - 1; l > -1; l -= 1)
      if (!r[l].hasAttribute("data-combobox-disabled")) return l;
  }
  return e;
}
function kM(e, r, o) {
  for (let l = e + 1; l < r.length; l += 1)
    if (!r[l].hasAttribute("data-combobox-disabled")) return l;
  if (o) {
    for (let l = 0; l < r.length; l += 1)
      if (!r[l].hasAttribute("data-combobox-disabled")) return l;
  }
  return e;
}
function LM(e) {
  for (let r = 0; r < e.length; r += 1) if (!e[r].hasAttribute("data-combobox-disabled")) return r;
  return -1;
}
function mx({
  defaultOpened: e,
  opened: r,
  onOpenedChange: o,
  onDropdownClose: l,
  onDropdownOpen: s,
  loop: c = !0,
  scrollBehavior: u = "instant",
} = {}) {
  const [f, d] = Yr({ value: r, defaultValue: e, finalValue: !1, onChange: o }),
    m = S.useRef(null),
    v = S.useRef(-1),
    g = S.useRef(null),
    y = S.useRef(null),
    b = S.useRef(-1),
    x = S.useRef(-1),
    C = S.useRef(-1),
    R = S.useCallback(
      (N = "unknown") => {
        f || (d(!0), s?.(N));
      },
      [d, s, f],
    ),
    T = S.useCallback(
      (N = "unknown") => {
        f && (d(!1), l?.(N));
      },
      [d, l, f],
    ),
    _ = S.useCallback(
      (N = "unknown") => {
        f ? T(N) : R(N);
      },
      [T, R, f],
    ),
    D = S.useCallback(() => {
      const N = Ua(y.current),
        k = Hu(`#${m.current} [data-combobox-selected]`, N);
      (k?.removeAttribute("data-combobox-selected"), k?.removeAttribute("aria-selected"));
    }, []),
    j = S.useCallback(
      (N) => {
        const k = Ua(y.current),
          B = Hu(`#${m.current}`, k),
          F = B ? Pa("[data-combobox-option]", B) : null;
        if (!F) return null;
        const Z = N >= F.length ? 0 : N < 0 ? F.length - 1 : N;
        return (
          (v.current = Z),
          F?.[Z] && !F[Z].hasAttribute("data-combobox-disabled")
            ? (D(),
              F[Z].setAttribute("data-combobox-selected", "true"),
              F[Z].setAttribute("aria-selected", "true"),
              F[Z].scrollIntoView({ block: "nearest", behavior: u }),
              F[Z].id)
            : null
        );
      },
      [u, D],
    ),
    z = S.useCallback(() => {
      const N = Ua(y.current),
        k = Hu(`#${m.current} [data-combobox-active]`, N);
      return j(k ? Pa(`#${m.current} [data-combobox-option]`, N).findIndex((B) => B === k) : 0);
    }, [j]),
    H = S.useCallback(() => {
      const N = Ua(y.current),
        k = Pa(`#${m.current} [data-combobox-option]`, N);
      return j(kM(v.current, k, c));
    }, [j, c]),
    $ = S.useCallback(() => {
      const N = Ua(y.current),
        k = Pa(`#${m.current} [data-combobox-option]`, N);
      return j(zM(v.current, k, c));
    }, [j, c]),
    M = S.useCallback(() => {
      const N = Ua(y.current);
      return j(LM(Pa(`#${m.current} [data-combobox-option]`, N)));
    }, [j]),
    K = S.useCallback((N = "selected", k) => {
      if (typeof N == "number") {
        v.current = N;
        const B = Ua(y.current),
          F = Pa(`#${m.current} [data-combobox-option]`, B);
        k?.scrollIntoView && F[N]?.scrollIntoView({ block: "nearest", behavior: u });
        return;
      }
      C.current = window.setTimeout(() => {
        const B = Ua(y.current),
          F = Pa(`#${m.current} [data-combobox-option]`, B),
          Z = F.findIndex((O) => O.hasAttribute(`data-combobox-${N}`));
        ((v.current = Z),
          k?.scrollIntoView && F[Z]?.scrollIntoView({ block: "nearest", behavior: u }));
      }, 0);
    }, []),
    Y = S.useCallback(() => {
      ((v.current = -1), D());
    }, [D]),
    ee = S.useCallback(() => {
      const N = Ua(y.current);
      Pa(`#${m.current} [data-combobox-option]`, N)?.[v.current]?.click();
    }, []),
    ne = S.useCallback((N) => {
      m.current = N;
    }, []),
    oe = S.useCallback(() => {
      b.current = window.setTimeout(() => g.current?.focus(), 0);
    }, []),
    U = S.useCallback(() => {
      x.current = window.setTimeout(() => y.current?.focus(), 0);
    }, []),
    re = S.useCallback(() => v.current, []);
  return (
    S.useEffect(
      () => () => {
        (window.clearTimeout(b.current),
          window.clearTimeout(x.current),
          window.clearTimeout(C.current));
      },
      [],
    ),
    {
      dropdownOpened: f,
      openDropdown: R,
      closeDropdown: T,
      toggleDropdown: _,
      selectedOptionIndex: v.current,
      getSelectedOptionIndex: re,
      selectOption: j,
      selectFirstOption: M,
      selectActiveOption: z,
      selectNextOption: H,
      selectPreviousOption: $,
      resetSelectedOption: Y,
      updateSelectedOptionIndex: K,
      listId: m.current,
      setListId: ne,
      clickSelectedOption: ee,
      searchRef: g,
      focusSearchInput: oe,
      targetRef: y,
      focusTarget: U,
    }
  );
}
const BM = {
    keepMounted: !0,
    withinPortal: !0,
    resetSelectionOnOptionHover: !1,
    width: "target",
    transitionProps: { transition: "fade", duration: 0 },
    size: "sm",
  },
  px = (e, { size: r, dropdownPadding: o }) => ({
    options: {
      "--combobox-option-fz": kn(r),
      "--combobox-option-padding": gt(r, "combobox-option-padding"),
    },
    dropdown: {
      "--combobox-padding": o === void 0 ? void 0 : pe(o),
      "--combobox-option-fz": kn(r),
      "--combobox-option-padding": gt(r, "combobox-option-padding"),
    },
  }),
  St = (e) => {
    const r = Ee("Combobox", BM, e),
      {
        classNames: o,
        styles: l,
        unstyled: s,
        children: c,
        store: u,
        vars: f,
        onOptionSubmit: d,
        onClose: m,
        size: v,
        dropdownPadding: g,
        resetSelectionOnOptionHover: y,
        __staticSelector: b,
        readOnly: x,
        attributes: C,
        ...R
      } = r,
      T = mx(),
      _ = u || T,
      D = Ze({
        name: b || "Combobox",
        classes: Ar,
        props: r,
        classNames: o,
        styles: l,
        unstyled: s,
        attributes: C,
        vars: f,
        varsResolver: px,
      }),
      j = () => {
        (m?.(), _.closeDropdown());
      };
    return w.jsx(AM, {
      value: {
        getStyles: D,
        store: _,
        onOptionSubmit: d,
        size: v,
        resetSelectionOnOptionHover: y,
        readOnly: x,
      },
      children: w.jsx(Zt, {
        opened: _.dropdownOpened,
        preventPositionChangeWhenVisible: !1,
        ...R,
        onChange: (z) => !z && j(),
        withRoles: !1,
        unstyled: s,
        children: c,
      }),
    });
  },
  $M = (e) => e;
St.extend = $M;
St.classes = Ar;
St.varsResolver = px;
St.displayName = "@mantine/core/Combobox";
St.Target = hx;
St.Dropdown = Yp;
St.Options = Jp;
St.Option = Wp;
St.Search = eg;
St.Empty = Gp;
St.Chevron = Df;
St.Footer = Kp;
St.Header = Zp;
St.EventsTarget = fx;
St.DropdownTarget = ux;
St.Group = Qp;
St.ClearButton = cx;
St.HiddenInput = dx;
function gx({ children: e, role: r }) {
  const o = S.use(Rl);
  return o
    ? w.jsx("div", {
        role: r,
        "aria-labelledby": o.labelId,
        "aria-describedby": o.describedBy,
        children: e,
      })
    : w.jsx(w.Fragment, { children: e });
}
const tg = S.createContext(null),
  HM = { hiddenInputValuesSeparator: "," },
  ng = pf((e) => {
    const {
        value: r,
        defaultValue: o,
        onChange: l,
        size: s,
        wrapperProps: c,
        children: u,
        readOnly: f,
        name: d,
        hiddenInputValuesSeparator: m,
        hiddenInputProps: v,
        maxSelectedValues: g,
        disabled: y,
        ...b
      } = Ee("CheckboxGroup", HM, e),
      [x, C] = Yr({ value: r, defaultValue: o, finalValue: [], onChange: l }),
      R = (D) => {
        const j = typeof D == "string" ? D : D.currentTarget.value;
        if (f) return;
        const z = x.includes(j);
        (!z && g && x.length >= g) || C(z ? x.filter((H) => H !== j) : [...x, j]);
      },
      T = (D) => {
        if (y) return !0;
        if (!g) return !1;
        const j = x.includes(D),
          z = x.length >= g;
        return !j && z;
      },
      _ = x.join(m);
    return w.jsx(tg, {
      value: { value: x, onChange: R, size: s, isDisabled: T },
      children: w.jsxs(en.Wrapper, {
        size: s,
        ...c,
        ...b,
        labelElement: "div",
        __staticSelector: "CheckboxGroup",
        children: [
          w.jsx(gx, { role: "group", children: u }),
          w.jsx("input", { type: "hidden", name: d, value: _, ...v }),
        ],
      }),
    });
  });
ng.classes = en.Wrapper.classes;
ng.displayName = "@mantine/core/CheckboxGroup";
var vx = { card: "m_26775b0a" };
const yx = S.createContext(null),
  UM = { withBorder: !0 },
  bx = (e, { radius: r }) => ({ card: { "--card-radius": Ln(r) } }),
  Af = He((e) => {
    const r = Ee("CheckboxCard", UM, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        vars: f,
        checked: d,
        mod: m,
        withBorder: v,
        value: g,
        onClick: y,
        defaultChecked: b,
        onChange: x,
        attributes: C,
        ...R
      } = r,
      T = Ze({
        name: "CheckboxCard",
        classes: vx,
        props: r,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: C,
        vars: f,
        varsResolver: bx,
        rootSelector: "card",
      }),
      _ = S.use(tg),
      [D, j] = Yr({
        value: typeof d == "boolean" ? d : _ ? _.value.includes(g || "") : void 0,
        defaultValue: b,
        finalValue: !1,
        onChange: x,
      });
    return w.jsx(yx, {
      value: { checked: D },
      children: w.jsx(Wn, {
        mod: [{ "with-border": v, checked: D }, m],
        ...T("card"),
        ...R,
        role: "checkbox",
        "aria-checked": D,
        onClick: (z) => {
          (y?.(z), _?.onChange(g || ""), j(!D));
        },
      }),
    });
  });
Af.displayName = "@mantine/core/CheckboxCard";
Af.classes = vx;
Af.varsResolver = bx;
function Sx({ size: e, style: r, ...o }) {
  return w.jsx("svg", {
    viewBox: "0 0 10 7",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: e !== void 0 ? { width: pe(e), height: pe(e), ...r } : r,
    "aria-hidden": !0,
    ...o,
    children: w.jsx("path", {
      d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }),
  });
}
function wx({ indeterminate: e, ...r }) {
  return e
    ? w.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 32 6",
        "aria-hidden": !0,
        ...r,
        children: w.jsx("rect", { width: "32", height: "6", fill: "currentColor", rx: "3" }),
      })
    : w.jsx(Sx, { ...r });
}
var xx = { indicator: "m_5e5256ee", icon: "m_1b1c543a", "indicator--outline": "m_76e20374" };
const PM = { icon: wx, variant: "filled", radius: "sm" },
  Cx = (e, { radius: r, color: o, size: l, iconColor: s, variant: c, autoContrast: u }) => {
    const f = Ka({ color: o || e.primaryColor, theme: e }),
      d =
        f.isThemeColor && f.shade === void 0 ? `var(--mantine-color-${f.color}-outline)` : f.color;
    return {
      indicator: {
        "--checkbox-size": gt(l, "checkbox-size"),
        "--checkbox-radius": r === void 0 ? void 0 : Ln(r),
        "--checkbox-color": c === "outline" ? d : ur(o, e),
        "--checkbox-icon-color": s
          ? ur(s, e)
          : TS(u, e)
            ? wp({ color: o, theme: e, autoContrast: u })
            : void 0,
      },
    };
  },
  sc = He((e) => {
    const r = Ee("CheckboxIndicator", PM, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        vars: f,
        icon: d,
        indeterminate: m,
        radius: v,
        color: g,
        iconColor: y,
        autoContrast: b,
        checked: x,
        mod: C,
        variant: R,
        disabled: T,
        attributes: _,
        ...D
      } = r,
      j = Ze({
        name: "CheckboxIndicator",
        classes: xx,
        props: r,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: _,
        vars: f,
        varsResolver: Cx,
        rootSelector: "indicator",
      }),
      z = S.use(yx),
      H = typeof x == "boolean" || typeof m == "boolean" ? x || m : z?.checked || !1;
    return w.jsx(Ne, {
      ...j("indicator", { variant: R }),
      variant: R,
      mod: [{ checked: H, disabled: T }, C],
      ...D,
      children: w.jsx(d, { indeterminate: m, ...j("icon") }),
    });
  });
sc.displayName = "@mantine/core/CheckboxIndicator";
sc.classes = xx;
sc.varsResolver = Cx;
var Ex = {
  root: "m_5f75b09e",
  body: "m_5f6e695e",
  labelWrapper: "m_d3ea56bb",
  label: "m_8ee546b8",
  description: "m_328f68c0",
  error: "m_8e8a99cc",
};
const Rx = Ex;
function rg({
  __staticSelector: e,
  __stylesApiProps: r,
  className: o,
  classNames: l,
  styles: s,
  unstyled: c,
  children: u,
  label: f,
  description: d,
  id: m,
  disabled: v,
  error: g,
  size: y,
  labelPosition: b = "left",
  bodyElement: x = "div",
  labelElement: C = "label",
  variant: R,
  style: T,
  vars: _,
  mod: D,
  attributes: j,
  ...z
}) {
  const H = Ze({
      name: e,
      props: r,
      className: o,
      style: T,
      classes: Ex,
      classNames: l,
      styles: s,
      unstyled: c,
      attributes: j,
    }),
    $ = d ? `${m}-description` : void 0,
    M = g && typeof g != "boolean" ? `${m}-error` : void 0;
  return w.jsx(Ne, {
    ...H("root"),
    __vars: { "--label-fz": kn(y), "--label-lh": gt(y, "label-lh") },
    mod: [{ "label-position": b }, D],
    variant: R,
    size: y,
    ...z,
    children: w.jsxs(Ne, {
      component: x,
      htmlFor: x === "label" ? m : void 0,
      ...H("body"),
      children: [
        u,
        w.jsxs("div", {
          ...H("labelWrapper"),
          "data-disabled": v || void 0,
          children: [
            f &&
              w.jsx(Ne, {
                component: C,
                htmlFor: C === "label" ? m : void 0,
                ...H("label"),
                "data-disabled": v || void 0,
                children: f,
              }),
            d &&
              w.jsx(en.Description, {
                id: $,
                size: y,
                __inheritStyles: !1,
                ...H("description"),
                children: d,
              }),
            g &&
              typeof g != "boolean" &&
              w.jsx(en.Error, { id: M, size: y, __inheritStyles: !1, ...H("error"), children: g }),
          ],
        }),
      ],
    }),
  });
}
rg.displayName = "@mantine/core/InlineInput";
var Tx = {
  root: "m_bf2d988c",
  inner: "m_26062bec",
  input: "m_26063560",
  icon: "m_bf295423",
  "input--outline": "m_215c4542",
};
const VM = {
    labelPosition: "right",
    icon: wx,
    withErrorStyles: !0,
    variant: "filled",
    radius: "sm",
  },
  _x = (e, { radius: r, color: o, size: l, iconColor: s, variant: c, autoContrast: u }) => {
    const f = Ka({ color: o || e.primaryColor, theme: e }),
      d =
        f.isThemeColor && f.shade === void 0 ? `var(--mantine-color-${f.color}-outline)` : f.color;
    return {
      root: {
        "--checkbox-size": gt(l, "checkbox-size"),
        "--checkbox-radius": r === void 0 ? void 0 : Ln(r),
        "--checkbox-color": c === "outline" ? d : ur(o, e),
        "--checkbox-icon-color": s
          ? ur(s, e)
          : TS(u, e)
            ? wp({ color: o, theme: e, autoContrast: u })
            : void 0,
      },
    };
  },
  Tl = He((e) => {
    const r = Ee("Checkbox", VM, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        vars: f,
        color: d,
        label: m,
        id: v,
        size: g,
        radius: y,
        wrapperProps: b,
        checked: x,
        labelPosition: C,
        description: R,
        error: T,
        disabled: _,
        variant: D,
        indeterminate: j,
        icon: z,
        rootRef: H,
        iconColor: $,
        onChange: M,
        autoContrast: K,
        mod: Y,
        attributes: ee,
        readOnly: ne,
        onClick: oe,
        withErrorStyles: U,
        ref: re,
        ...N
      } = r,
      k = S.useRef(null),
      B = S.use(tg),
      F = g || B?.size,
      Z = Ze({
        name: "Checkbox",
        props: r,
        classes: Tx,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: ee,
        vars: f,
        varsResolver: _x,
      }),
      { styleProps: O, rest: P } = Ei(N),
      Q = Wr(v),
      ae =
        [
          R ? `${Q}-description` : void 0,
          T && typeof T != "boolean" ? `${Q}-error` : void 0,
          P["aria-describedby"],
        ]
          .filter(Boolean)
          .join(" ") || void 0,
      ie = {
        checked: B?.value.includes(P.value) ?? x,
        onChange: (Se) => {
          (B?.onChange(Se), M?.(Se));
        },
      },
      ue = B?.isDisabled?.(P.value) ?? !1,
      ge = _ || ue;
    return (
      S.useEffect(() => {
        k.current &&
          ((k.current.indeterminate = j || !1),
          j
            ? k.current.setAttribute("data-indeterminate", "true")
            : k.current.removeAttribute("data-indeterminate"));
      }, [j]),
      w.jsx(rg, {
        ...Z("root"),
        __staticSelector: "Checkbox",
        __stylesApiProps: r,
        id: Q,
        size: F,
        labelPosition: C,
        label: m,
        description: R,
        error: T,
        disabled: ge,
        classNames: o,
        styles: c,
        unstyled: u,
        "data-checked": ie.checked || x || void 0,
        variant: D,
        ref: H,
        mod: Y,
        attributes: ee,
        inert: P.inert,
        ...O,
        ...b,
        children: w.jsxs(Ne, {
          ...Z("inner"),
          mod: { "data-label-position": C },
          children: [
            w.jsx(Ne, {
              component: "input",
              id: Q,
              ref: tn(k, re),
              mod: { error: !!T, "with-error-styles": U },
              ...Z("input", { focusable: !0, variant: D }),
              ...P,
              ...ie,
              "aria-describedby": ae,
              disabled: ge,
              inert: P.inert,
              type: "checkbox",
              onClick: (Se) => {
                (ne && Se.preventDefault(), oe?.(Se));
              },
            }),
            w.jsx(z, { indeterminate: j, ...Z("icon") }),
          ],
        }),
      })
    );
  });
Tl.classes = { ...Tx, ...Rx };
Tl.varsResolver = _x;
Tl.displayName = "@mantine/core/Checkbox";
Tl.Group = ng;
Tl.Indicator = sc;
Tl.Card = Af;
var Dx = {
  root: "m_347db0ec",
  "root--dot": "m_fbd81e3d",
  label: "m_5add502a",
  section: "m_91fdda9b",
};
const Ax = (
    e,
    { radius: r, color: o, gradient: l, variant: s, size: c, autoContrast: u, circle: f },
  ) => {
    const d = e.variantColorResolver({
      color: o || e.primaryColor,
      theme: e,
      gradient: l,
      variant: s || "filled",
      autoContrast: u,
    });
    return {
      root: {
        "--badge-height": gt(c, "badge-height"),
        "--badge-padding-x": gt(c, "badge-padding-x"),
        "--badge-fz": gt(c, "badge-fz"),
        "--badge-radius": f || r === void 0 ? void 0 : Ln(r),
        "--badge-bg": o || s ? d.background : void 0,
        "--badge-color": o || s ? d.color : void 0,
        "--badge-bd": o || s ? d.border : void 0,
        "--badge-dot-color": s === "dot" ? ur(o, e) : void 0,
      },
    };
  },
  Ai = Jn((e) => {
    const r = Ee("Badge", null, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        vars: f,
        radius: d,
        color: m,
        gradient: v,
        leftSection: g,
        rightSection: y,
        children: b,
        variant: x,
        fullWidth: C,
        autoContrast: R,
        circle: T,
        mod: _,
        attributes: D,
        ...j
      } = r,
      z = Ze({
        name: "Badge",
        props: r,
        classes: Dx,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: D,
        vars: f,
        varsResolver: Ax,
      });
    return w.jsxs(Ne, {
      variant: x,
      mod: [{ block: C, circle: T, "with-right-section": !!y, "with-left-section": !!g }, _],
      ...z("root", { variant: x }),
      ...j,
      children: [
        g && w.jsx("span", { ...z("section"), "data-position": "left", children: g }),
        w.jsx("span", { ...z("label"), children: b }),
        y && w.jsx("span", { ...z("section"), "data-position": "right", children: y }),
      ],
    });
  });
Ai.classes = Dx;
Ai.varsResolver = Ax;
Ai.displayName = "@mantine/core/Badge";
var Mx = { root: "m_fea6bf1a", burger: "m_d4fb9cad" };
const Nx = (
    e,
    { color: r, size: o, lineSize: l, transitionDuration: s, transitionTimingFunction: c },
  ) => ({
    root: {
      "--burger-color": r ? ur(r, e) : void 0,
      "--burger-size": gt(o, "burger-size"),
      "--burger-line-size": l ? pe(l) : void 0,
      "--burger-transition-duration": s === void 0 ? void 0 : `${s}ms`,
      "--burger-transition-timing-function": c,
    },
  }),
  Mf = He((e) => {
    const r = Ee("Burger", null, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        vars: f,
        opened: d,
        children: m,
        transitionDuration: v,
        transitionTimingFunction: g,
        lineSize: y,
        attributes: b,
        ...x
      } = r,
      C = Ze({
        name: "Burger",
        classes: Mx,
        props: r,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: b,
        vars: f,
        varsResolver: Nx,
      });
    return w.jsxs(Wn, {
      ...C("root"),
      ...x,
      children: [w.jsx(Ne, { mod: ["reduce-motion", { opened: d }], ...C("burger") }), m],
    });
  });
Mf.classes = Mx;
Mf.varsResolver = Nx;
Mf.displayName = "@mantine/core/Burger";
var Mi = {
  root: "m_77c9d27d",
  inner: "m_80f1301b",
  label: "m_811560b9",
  section: "m_a74036a",
  loader: "m_a25b86ee",
  group: "m_80d6d844",
  groupSection: "m_70be2a01",
};
const S1 = { orientation: "horizontal" },
  Ox = (e, { borderWidth: r }) => ({ group: { "--button-border-width": pe(r) } }),
  Nf = He((e) => {
    const r = Ee("ButtonGroup", S1, e),
      {
        className: o,
        style: l,
        classNames: s,
        styles: c,
        unstyled: u,
        orientation: f,
        vars: d,
        borderWidth: m,
        mod: v,
        attributes: g,
        ...y
      } = Ee("ButtonGroup", S1, e);
    return w.jsx(Ne, {
      ...Ze({
        name: "ButtonGroup",
        props: r,
        classes: Mi,
        className: o,
        style: l,
        classNames: s,
        styles: c,
        unstyled: u,
        attributes: g,
        vars: d,
        varsResolver: Ox,
        rootSelector: "group",
      })("group"),
      mod: [{ "data-orientation": f }, v],
      role: "group",
      ...y,
    });
  });
Nf.classes = Mi;
Nf.varsResolver = Ox;
Nf.displayName = "@mantine/core/ButtonGroup";
const jx = (e, { radius: r, color: o, gradient: l, variant: s, autoContrast: c, size: u }) => {
    const f = e.variantColorResolver({
      color: o || e.primaryColor,
      theme: e,
      gradient: l,
      variant: s || "filled",
      autoContrast: c,
    });
    return {
      groupSection: {
        "--section-height": gt(u, "section-height"),
        "--section-padding-x": gt(u, "section-padding-x"),
        "--section-fz": u?.includes("compact") ? kn(u.replace("compact-", "")) : kn(u),
        "--section-radius": r === void 0 ? void 0 : Ln(r),
        "--section-bg": o || s ? f.background : void 0,
        "--section-color": f.color,
        "--section-bd": o || s ? f.border : void 0,
      },
    };
  },
  Of = He((e) => {
    const r = Ee("ButtonGroupSection", null, e),
      {
        className: o,
        style: l,
        classNames: s,
        styles: c,
        unstyled: u,
        vars: f,
        gradient: d,
        radius: m,
        autoContrast: v,
        attributes: g,
        ...y
      } = r;
    return w.jsx(Ne, {
      ...Ze({
        name: "ButtonGroupSection",
        props: r,
        classes: Mi,
        className: o,
        style: l,
        classNames: s,
        styles: c,
        unstyled: u,
        attributes: g,
        vars: f,
        varsResolver: jx,
        rootSelector: "groupSection",
      })("groupSection"),
      ...y,
    });
  });
Of.classes = Mi;
Of.varsResolver = jx;
Of.displayName = "@mantine/core/ButtonGroupSection";
const IM = {
    in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${pe(1)}))` },
    out: { opacity: 0, transform: "translate(-50%, -200%)" },
    common: { transformOrigin: "center" },
    transitionProperty: "transform, opacity",
  },
  zx = (
    e,
    { radius: r, color: o, gradient: l, variant: s, size: c, justify: u, autoContrast: f },
  ) => {
    const d = e.variantColorResolver({
      color: o || e.primaryColor,
      theme: e,
      gradient: l,
      variant: s || "filled",
      autoContrast: f,
    });
    return {
      root: {
        "--button-justify": u,
        "--button-height": gt(c, "button-height"),
        "--button-padding-x": gt(c, "button-padding-x"),
        "--button-fz": c?.includes("compact") ? kn(c.replace("compact-", "")) : kn(c),
        "--button-radius": r === void 0 ? void 0 : Ln(r),
        "--button-bg": o || s ? d.background : void 0,
        "--button-hover": o || s ? d.hover : void 0,
        "--button-color": d.color,
        "--button-bd": o || s ? d.border : void 0,
        "--button-hover-color": o || s ? d.hoverColor : void 0,
      },
    };
  },
  qa = Jn((e) => {
    const r = Ee("Button", null, e),
      {
        style: o,
        vars: l,
        className: s,
        color: c,
        disabled: u,
        children: f,
        leftSection: d,
        rightSection: m,
        fullWidth: v,
        variant: g,
        radius: y,
        loading: b,
        loaderProps: x,
        gradient: C,
        classNames: R,
        styles: T,
        unstyled: _,
        "data-disabled": D,
        autoContrast: j,
        mod: z,
        attributes: H,
        ...$
      } = r,
      M = Ze({
        name: "Button",
        props: r,
        classes: Mi,
        className: s,
        style: o,
        classNames: R,
        styles: T,
        unstyled: _,
        attributes: H,
        vars: l,
        varsResolver: zx,
      }),
      K = !!d,
      Y = !!m;
    return w.jsxs(Wn, {
      ...M("root", { active: !u && !b && !D }),
      unstyled: _,
      variant: g,
      disabled: u || b,
      mod: [
        { disabled: u || D, loading: b, block: v, "with-left-section": K, "with-right-section": Y },
        z,
      ],
      ...$,
      children: [
        typeof b == "boolean" &&
          w.jsx($o, {
            mounted: b,
            transition: IM,
            duration: 150,
            children: (ee) =>
              w.jsx(Ne, {
                component: "span",
                ...M("loader", { style: ee }),
                "aria-hidden": !0,
                children: w.jsx(_i, {
                  color: "var(--button-color)",
                  size: "calc(var(--button-height) / 1.8)",
                  ...x,
                }),
              }),
          }),
        w.jsxs("span", {
          ...M("inner"),
          children: [
            d &&
              w.jsx(Ne, {
                component: "span",
                ...M("section"),
                mod: { position: "left" },
                children: d,
              }),
            w.jsx(Ne, { component: "span", mod: { loading: b }, ...M("label"), children: f }),
            m &&
              w.jsx(Ne, {
                component: "span",
                ...M("section"),
                mod: { position: "right" },
                children: m,
              }),
          ],
        }),
      ],
    });
  });
qa.classes = Mi;
qa.varsResolver = zx;
qa.displayName = "@mantine/core/Button";
qa.Group = Nf;
qa.GroupSection = Of;
var kx = { root: "m_4451eb3a" };
const ya = Jn((e) => {
  const r = Ee("Center", null, e),
    {
      classNames: o,
      className: l,
      style: s,
      styles: c,
      unstyled: u,
      vars: f,
      inline: d,
      mod: m,
      attributes: v,
      ...g
    } = r,
    y = Ze({
      name: "Center",
      props: r,
      classes: kx,
      className: l,
      style: s,
      classNames: o,
      styles: c,
      unstyled: u,
      attributes: v,
      vars: f,
    });
  return w.jsx(Ne, { mod: [{ inline: d }, m], ...y("root"), ...g });
});
ya.classes = kx;
ya.displayName = "@mantine/core/Center";
var Lx = { root: "m_7485cace" };
const FM = { strategy: "block" },
  Bx = (e, { size: r, fluid: o }) => ({
    root: { "--container-size": o ? void 0 : gt(r, "container-size") },
  }),
  Nr = He((e) => {
    const r = Ee("Container", FM, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        vars: f,
        fluid: d,
        mod: m,
        attributes: v,
        strategy: g,
        ...y
      } = r,
      b = Ze({
        name: "Container",
        classes: Lx,
        props: r,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: v,
        vars: f,
        varsResolver: Bx,
      });
    return w.jsx(Ne, { mod: [{ fluid: d, strategy: g }, m], ...b("root"), ...y });
  });
Nr.classes = Lx;
Nr.varsResolver = Bx;
Nr.displayName = "@mantine/core/Container";
var $x = { root: "m_3eebeb36", label: "m_9e365f20" };
const qM = { orientation: "horizontal" },
  Hx = (e, { color: r, variant: o, size: l }) => ({
    root: {
      "--divider-color": r ? ur(r, e) : void 0,
      "--divider-border-style": o,
      "--divider-size": gt(l, "divider-size"),
    },
  }),
  jf = He((e) => {
    const r = Ee("Divider", qM, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        vars: f,
        color: d,
        orientation: m,
        label: v,
        labelPosition: g,
        mod: y,
        attributes: b,
        ...x
      } = r,
      C = Ze({
        name: "Divider",
        classes: $x,
        props: r,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: b,
        vars: f,
        varsResolver: Hx,
      });
    return w.jsx(Ne, {
      mod: [{ orientation: m, withLabel: !!v }, y],
      role: "separator",
      ...C("root"),
      ...x,
      children:
        v && w.jsx(Ne, { component: "span", mod: { position: g }, ...C("label"), children: v }),
    });
  });
jf.classes = $x;
jf.varsResolver = Hx;
jf.displayName = "@mantine/core/Divider";
const [YM, Ni] = Ga("Drawer component was not found in tree");
var eo = { root: "m_f11b401e", header: "m_5a7c2c9", content: "m_b8a05bbd", inner: "m_31cd769a" };
const zf = He((e) => {
  const {
    classNames: r,
    className: o,
    style: l,
    styles: s,
    vars: c,
    ...u
  } = Ee("DrawerBody", null, e);
  return w.jsx(Yw, {
    ...Ni().getStyles("body", { classNames: r, style: l, styles: s, className: o }),
    ...u,
  });
});
zf.classes = eo;
zf.displayName = "@mantine/core/DrawerBody";
const kf = He((e) => {
  const {
    classNames: r,
    className: o,
    style: l,
    styles: s,
    vars: c,
    ...u
  } = Ee("DrawerCloseButton", null, e);
  return w.jsx(Gw, {
    ...Ni().getStyles("close", { classNames: r, style: l, styles: s, className: o }),
    ...u,
  });
});
kf.classes = eo;
kf.displayName = "@mantine/core/DrawerCloseButton";
const Lf = He((e) => {
  const {
      classNames: r,
      className: o,
      style: l,
      styles: s,
      vars: c,
      children: u,
      radius: f,
      __hidden: d,
      ...m
    } = Ee("DrawerContent", null, e),
    v = Ni(),
    g = v.scrollAreaComponent || gM;
  return w.jsx(Xw, {
    ...v.getStyles("content", { className: o, style: l, styles: s, classNames: r }),
    innerProps: v.getStyles("inner", { className: o, style: l, styles: s, classNames: r }),
    ...m,
    radius: f || v.radius || 0,
    "data-hidden": d || void 0,
    children: w.jsx(g, {
      style: { height: "calc(100vh - var(--drawer-offset) * 2)" },
      children: u,
    }),
  });
});
Lf.classes = eo;
Lf.displayName = "@mantine/core/DrawerContent";
const Bf = He((e) => {
  const {
    classNames: r,
    className: o,
    style: l,
    styles: s,
    vars: c,
    ...u
  } = Ee("DrawerHeader", null, e);
  return w.jsx(Kw, {
    ...Ni().getStyles("header", { classNames: r, style: l, styles: s, className: o }),
    ...u,
  });
});
Bf.classes = eo;
Bf.displayName = "@mantine/core/DrawerHeader";
const $f = He((e) => {
  const {
    classNames: r,
    className: o,
    style: l,
    styles: s,
    vars: c,
    ...u
  } = Ee("DrawerOverlay", null, e);
  return w.jsx(Qw, {
    ...Ni().getStyles("overlay", { classNames: r, style: l, styles: s, className: o }),
    ...u,
  });
});
$f.classes = eo;
$f.displayName = "@mantine/core/DrawerOverlay";
function GM(e) {
  switch (e) {
    case "top":
      return "flex-start";
    case "bottom":
      return "flex-end";
    default:
      return;
  }
}
function XM(e) {
  if (e === "top" || e === "bottom") return "0 0 calc(100% - var(--drawer-offset, 0rem) * 2)";
}
const KM = { top: "slide-down", bottom: "slide-up", left: "slide-right", right: "slide-left" },
  QM = { top: "slide-down", bottom: "slide-up", right: "slide-right", left: "slide-left" },
  ZM = {
    closeOnClickOutside: !0,
    withinPortal: !0,
    lockScroll: !0,
    trapFocus: !0,
    returnFocus: !0,
    closeOnEscape: !0,
    keepMounted: !1,
    zIndex: Xa("modal"),
    position: "left",
  },
  Ux = (e, { position: r, size: o, offset: l }) => ({
    root: {
      "--drawer-size": gt(o, "drawer-size"),
      "--drawer-flex": XM(r),
      "--drawer-height": r === "left" || r === "right" ? void 0 : "var(--drawer-size)",
      "--drawer-align": GM(r),
      "--drawer-justify": r === "right" ? "flex-end" : void 0,
      "--drawer-offset": pe(l),
    },
  }),
  cc = He((e) => {
    const r = Ee("DrawerRoot", ZM, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        vars: f,
        scrollAreaComponent: d,
        position: m,
        transitionProps: v,
        radius: g,
        attributes: y,
        ...b
      } = r,
      { dir: x } = Za(),
      C = Ze({
        name: "Drawer",
        classes: eo,
        props: r,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: y,
        vars: f,
        varsResolver: Ux,
      }),
      R = (x === "rtl" ? QM : KM)[m];
    return w.jsx(YM, {
      value: { scrollAreaComponent: d, getStyles: C, radius: g },
      children: w.jsx(qw, {
        ...C("root"),
        transitionProps: { transition: R, ...v },
        "data-offset-scrollbars": d === Uo.Autosize || void 0,
        unstyled: u,
        ...b,
      }),
    });
  });
cc.classes = eo;
cc.varsResolver = Ux;
cc.displayName = "@mantine/core/DrawerRoot";
const Px = S.createContext(null);
function Vx({ children: e }) {
  const [r, o] = S.useState([]),
    [l, s] = S.useState(Xa("modal"));
  return w.jsx(Px, {
    value: {
      stack: r,
      addModal: (c, u) => {
        (o((f) => [...new Set([...f, c])]),
          s((f) => (typeof u == "number" && typeof f == "number" ? Math.max(f, u) : f)));
      },
      removeModal: (c) => o((u) => u.filter((f) => f !== c)),
      getZIndex: (c) => `calc(${l} + ${r.indexOf(c)} + 1)`,
      currentId: r[r.length - 1],
      maxZIndex: l,
    },
    children: e,
  });
}
Vx.displayName = "@mantine/core/DrawerStack";
const Hf = He((e) => {
  const {
    classNames: r,
    className: o,
    style: l,
    styles: s,
    vars: c,
    ...u
  } = Ee("DrawerTitle", null, e);
  return w.jsx(Zw, {
    ...Ni().getStyles("title", { classNames: r, style: l, styles: s, className: o }),
    ...u,
  });
});
Hf.classes = eo;
Hf.displayName = "@mantine/core/DrawerTitle";
const WM = {
    closeOnClickOutside: !0,
    withinPortal: !0,
    lockScroll: !0,
    trapFocus: !0,
    returnFocus: !0,
    closeOnEscape: !0,
    keepMounted: !1,
    zIndex: Xa("modal"),
    withOverlay: !0,
    withCloseButton: !0,
  },
  Jr = He((e) => {
    const {
        title: r,
        withOverlay: o,
        overlayProps: l,
        withCloseButton: s,
        closeButtonProps: c,
        children: u,
        opened: f,
        stackId: d,
        zIndex: m,
        ...v
      } = Ee("Drawer", WM, e),
      g = S.use(Px),
      y = !!r || s,
      b =
        g && d
          ? {
              closeOnEscape: g.currentId === d,
              trapFocus: g.currentId === d,
              zIndex: g.getZIndex(d),
            }
          : {},
      x = o === !1 ? !1 : d && g ? g.currentId === d : f;
    return (
      S.useEffect(() => {
        g && d && (f ? g.addModal(d, m || Xa("modal")) : g.removeModal(d));
      }, [f, d, m]),
      w.jsxs(cc, {
        opened: f,
        zIndex: g && d ? g.getZIndex(d) : m,
        ...v,
        ...b,
        children: [
          o && w.jsx($f, { visible: x, transitionProps: g && d ? { duration: 0 } : void 0, ...l }),
          w.jsxs(Lf, {
            __hidden: g && d && f ? d !== g.currentId : !1,
            children: [
              y &&
                w.jsxs(Bf, {
                  children: [r && w.jsx(Hf, { children: r }), s && w.jsx(kf, { ...c })],
                }),
              w.jsx(zf, { children: u }),
            ],
          }),
        ],
      })
    );
  });
Jr.classes = eo;
Jr.displayName = "@mantine/core/Drawer";
Jr.Root = cc;
Jr.Overlay = $f;
Jr.Content = Lf;
Jr.Body = zf;
Jr.Header = Bf;
Jr.Title = Hf;
Jr.CloseButton = kf;
Jr.Stack = Vx;
var Ix = { root: "m_9e117634" };
const Fx = (e, { radius: r, fit: o }) => ({
    root: { "--image-radius": r === void 0 ? void 0 : Ln(r), "--image-object-fit": o },
  }),
  uc = Jn((e) => {
    const r = Ee("Image", null, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        vars: f,
        onError: d,
        src: m,
        radius: v,
        fit: g,
        fallbackSrc: y,
        mod: b,
        attributes: x,
        ...C
      } = r,
      [R, T] = S.useState(!m);
    S.useEffect(() => T(!m), [m]);
    const _ = Ze({
      name: "Image",
      classes: Ix,
      props: r,
      className: l,
      style: s,
      classNames: o,
      styles: c,
      unstyled: u,
      attributes: x,
      vars: f,
      varsResolver: Fx,
    });
    return R && y
      ? w.jsx(Ne, {
          component: "img",
          src: y,
          ..._("root"),
          onError: d,
          mod: ["fallback", b],
          ...C,
        })
      : w.jsx(Ne, {
          component: "img",
          ..._("root"),
          src: m,
          onError: (D) => {
            (d?.(D), T(!0));
          },
          mod: b,
          ...C,
        });
  });
uc.classes = Ix;
uc.varsResolver = Fx;
uc.displayName = "@mantine/core/Image";
const [JM, eN] = Ga("List component was not found in tree");
var ag = {
  root: "m_abbac491",
  item: "m_abb6bec2",
  itemWrapper: "m_75cd9f71",
  itemIcon: "m_60f83e5b",
};
const Fs = He((e) => {
  const {
      classNames: r,
      className: o,
      style: l,
      styles: s,
      vars: c,
      icon: u,
      children: f,
      mod: d,
      ...m
    } = Ee("ListItem", null, e),
    v = eN(),
    g = u || v.icon,
    y = { classNames: r, styles: s };
  return w.jsx(Ne, {
    ...v.getStyles("item", { ...y, className: o, style: l }),
    component: "li",
    mod: [{ "with-icon": !!g, centered: v.center }, d],
    ...m,
    children: w.jsxs("div", {
      ...v.getStyles("itemWrapper", y),
      children: [
        g && w.jsx("span", { ...v.getStyles("itemIcon", y), children: g }),
        w.jsx("span", { ...v.getStyles("itemLabel", y), children: f }),
      ],
    }),
  });
});
Fs.classes = ag;
Fs.displayName = "@mantine/core/ListItem";
const tN = { type: "unordered" },
  qx = (e, { size: r, spacing: o }) => ({
    root: { "--list-fz": kn(r), "--list-lh": bS(r), "--list-spacing": un(o) },
  }),
  Si = He((e) => {
    const r = Ee("List", tN, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        vars: f,
        children: d,
        type: m,
        withPadding: v,
        icon: g,
        spacing: y,
        center: b,
        listStyleType: x,
        mod: C,
        attributes: R,
        ...T
      } = r,
      _ = Ze({
        name: "List",
        classes: ag,
        props: r,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: R,
        vars: f,
        varsResolver: qx,
      });
    return w.jsx(JM, {
      value: { center: b, icon: g, getStyles: _ },
      children: w.jsx(Ne, {
        ..._("root", { style: { listStyleType: x } }),
        component: m === "unordered" ? "ul" : "ol",
        mod: [{ "with-padding": v, type: g ? "none" : x }, C],
        ...T,
        children: d,
      }),
    });
  });
Si.classes = ag;
Si.varsResolver = qx;
Si.displayName = "@mantine/core/List";
Si.Item = Fs;
const [nN, to] = Ga("Menu component was not found in the tree");
var Vo = {
  dropdown: "m_dc9b7c9f",
  label: "m_9bfac126",
  divider: "m_efdf90cb",
  item: "m_99ac2aa1",
  itemLabel: "m_5476e0d3",
  itemSection: "m_8b75e504",
  chevron: "m_b85b0bed",
};
const og = He((e) => {
  const {
    classNames: r,
    className: o,
    style: l,
    styles: s,
    vars: c,
    ...u
  } = Ee("MenuDivider", null, e);
  return w.jsx(Ne, {
    ...to().getStyles("divider", { className: o, style: l, styles: s, classNames: r }),
    ...u,
  });
});
og.classes = Vo;
og.displayName = "@mantine/core/MenuDivider";
const lg = He((e) => {
  const {
      classNames: r,
      className: o,
      style: l,
      styles: s,
      vars: c,
      onMouseEnter: u,
      onMouseLeave: f,
      onKeyDown: d,
      children: m,
      ref: v,
      ...g
    } = Ee("MenuDropdown", null, e),
    y = S.useRef(null),
    b = to(),
    x = ua(d, (T) => {
      (T.key === "ArrowUp" || T.key === "ArrowDown") &&
        (T.preventDefault(),
        y.current?.querySelectorAll("[data-menu-item]:not(:disabled)")[0]?.focus());
    }),
    C = ua(u, () => (b.trigger === "hover" || b.trigger === "click-hover") && b.openDropdown()),
    R = ua(f, () => (b.trigger === "hover" || b.trigger === "click-hover") && b.closeDropdown());
  return w.jsxs(Zt.Dropdown, {
    ...g,
    onMouseEnter: C,
    onMouseLeave: R,
    role: "menu",
    "aria-orientation": "vertical",
    ref: tn(v, y),
    ...b.getStyles("dropdown", {
      className: o,
      style: l,
      styles: s,
      classNames: r,
      withStaticClass: !1,
    }),
    tabIndex: -1,
    "data-menu-dropdown": !0,
    onKeyDown: x,
    children: [
      b.withInitialFocusPlaceholder &&
        w.jsx("div", {
          tabIndex: -1,
          "data-autofocus": !0,
          "data-mantine-stop-propagation": !0,
          style: { outline: 0 },
        }),
      m,
    ],
  });
});
lg.classes = Vo;
lg.displayName = "@mantine/core/MenuDropdown";
const qs = S.createContext(null),
  ig = Jn((e) => {
    const {
        classNames: r,
        className: o,
        style: l,
        styles: s,
        vars: c,
        color: u,
        closeMenuOnClick: f,
        leftSection: d,
        rightSection: m,
        children: v,
        disabled: g,
        "data-disabled": y,
        ref: b,
        ...x
      } = Ee("MenuItem", null, e),
      C = to(),
      R = S.use(qs),
      T = mn(),
      { dir: _ } = Za(),
      D = S.useRef(null),
      j = x,
      z = ua(j.onClick, () => {
        y ||
          (typeof f == "boolean"
            ? f && C.closeDropdownImmediately()
            : C.closeOnItemClick && C.closeDropdownImmediately());
      }),
      H = u ? T.variantColorResolver({ color: u, theme: T, variant: "light" }) : void 0,
      $ = u ? Ka({ color: u, theme: T }) : null,
      M = ua(j.onKeyDown, (K) => {
        K.key === "ArrowLeft" && R && (R.close(), R.focusParentItem());
      });
    return w.jsxs(Wn, {
      onMouseDown: (K) => K.preventDefault(),
      ...x,
      unstyled: C.unstyled,
      tabIndex: C.menuItemTabIndex,
      ...C.getStyles("item", { className: o, style: l, styles: s, classNames: r }),
      ref: tn(D, b),
      role: "menuitem",
      disabled: g,
      "data-menu-item": !0,
      "data-disabled": g || y || void 0,
      "data-mantine-stop-propagation": !0,
      onClick: z,
      onKeyDown: yS({
        siblingSelector: "[data-menu-item]:not([data-disabled])",
        parentSelector: "[data-menu-dropdown]",
        activateOnFocus: !1,
        loop: C.loop,
        dir: _,
        orientation: "vertical",
        onKeyDown: M,
      }),
      __vars: {
        "--menu-item-color":
          $?.isThemeColor && $?.shade === void 0 ? `var(--mantine-color-${$.color}-6)` : H?.color,
        "--menu-item-hover": H?.hover,
      },
      children: [
        d &&
          w.jsx("div", {
            ...C.getStyles("itemSection", { styles: s, classNames: r }),
            "data-position": "left",
            children: d,
          }),
        v &&
          w.jsx("div", { ...C.getStyles("itemLabel", { styles: s, classNames: r }), children: v }),
        m &&
          w.jsx("div", {
            ...C.getStyles("itemSection", { styles: s, classNames: r }),
            "data-position": "right",
            children: m,
          }),
      ],
    });
  });
ig.classes = Vo;
ig.displayName = "@mantine/core/MenuItem";
const sg = He((e) => {
  const {
    classNames: r,
    className: o,
    style: l,
    styles: s,
    vars: c,
    ...u
  } = Ee("MenuLabel", null, e);
  return w.jsx(Ne, {
    ...to().getStyles("label", { className: o, style: l, styles: s, classNames: r }),
    ...u,
  });
});
sg.classes = Vo;
sg.displayName = "@mantine/core/MenuLabel";
const cg = He((e) => {
  const {
      classNames: r,
      className: o,
      style: l,
      styles: s,
      vars: c,
      onMouseEnter: u,
      onMouseLeave: f,
      onPointerEnter: d,
      onPointerLeave: m,
      onKeyDown: v,
      children: g,
      ref: y,
      ...b
    } = Ee("MenuSubDropdown", null, e),
    x = S.useRef(null),
    C = to(),
    R = S.use(qs),
    T = R?.getFloatingProps({
      onMouseEnter: u,
      onMouseLeave: f,
      onPointerEnter: d,
      onPointerLeave: m,
    });
  return w.jsx(Zt.Dropdown, {
    ...b,
    ...T,
    role: "menu",
    "aria-orientation": "vertical",
    ref: tn(y, x, R?.setFloating),
    ...C.getStyles("dropdown", {
      className: o,
      style: l,
      styles: s,
      classNames: r,
      withStaticClass: !1,
    }),
    tabIndex: -1,
    "data-menu-dropdown": !0,
    children: g,
  });
});
cg.classes = Vo;
cg.displayName = "@mantine/core/MenuSubDropdown";
const ug = Jn((e) => {
  const {
      classNames: r,
      className: o,
      style: l,
      styles: s,
      vars: c,
      color: u,
      leftSection: f,
      rightSection: d,
      children: m,
      disabled: v,
      "data-disabled": g,
      closeMenuOnClick: y,
      ref: b,
      ...x
    } = Ee("MenuSubItem", null, e),
    C = to(),
    R = S.use(qs),
    T = mn(),
    { dir: _ } = Za(),
    D = S.useRef(null),
    j = x,
    z = u ? T.variantColorResolver({ color: u, theme: T, variant: "light" }) : void 0,
    H = u ? Ka({ color: u, theme: T }) : null,
    $ = ua(j.onKeyDown, (Y) => {
      (Y.key === "ArrowRight" && (R?.open(), R?.focusFirstItem()),
        Y.key === "ArrowLeft" &&
          R?.parentContext &&
          (R.parentContext.close(), R.parentContext.focusParentItem()));
    }),
    M = ua(j.onClick, () => {
      !g && y && C.closeDropdownImmediately();
    }),
    K = R?.getReferenceProps({
      onMouseEnter: j.onMouseEnter,
      onMouseLeave: j.onMouseLeave,
      onPointerEnter: j.onPointerEnter,
      onPointerLeave: j.onPointerLeave,
    });
  return w.jsxs(Wn, {
    onMouseDown: (Y) => Y.preventDefault(),
    ...x,
    ...K,
    unstyled: C.unstyled,
    tabIndex: C.menuItemTabIndex,
    ...C.getStyles("item", { className: o, style: l, styles: s, classNames: r }),
    ref: tn(D, b, R?.setReference),
    role: "menuitem",
    disabled: v,
    "data-menu-item": !0,
    "data-sub-menu-item": !0,
    "data-disabled": v || g || void 0,
    "data-mantine-stop-propagation": !0,
    onClick: M,
    onKeyDown: yS({
      siblingSelector: "[data-menu-item]:not([data-disabled])",
      parentSelector: "[data-menu-dropdown]",
      activateOnFocus: !1,
      loop: C.loop,
      dir: _,
      orientation: "vertical",
      onKeyDown: $,
    }),
    __vars: {
      "--menu-item-color":
        H?.isThemeColor && H?.shade === void 0 ? `var(--mantine-color-${H.color}-6)` : z?.color,
      "--menu-item-hover": z?.hover,
    },
    children: [
      f &&
        w.jsx("div", {
          ...C.getStyles("itemSection", { styles: s, classNames: r }),
          "data-position": "left",
          children: f,
        }),
      m && w.jsx("div", { ...C.getStyles("itemLabel", { styles: s, classNames: r }), children: m }),
      w.jsx("div", {
        ...C.getStyles("itemSection", { styles: s, classNames: r }),
        "data-position": "right",
        children: d || w.jsx(Is, { ...C.getStyles("chevron"), size: 14 }),
      }),
    ],
  });
});
ug.classes = Vo;
ug.displayName = "@mantine/core/MenuSubItem";
function Yx({ children: e, refProp: r }) {
  if (!pp(e))
    throw new Error(
      "Menu.Sub.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported",
    );
  return (to(), w.jsx(Zt.Target, { refProp: r, popupType: "menu", children: e }));
}
Yx.displayName = "@mantine/core/MenuSubTarget";
const rN = {
  offset: 0,
  position: "right-start",
  transitionProps: { duration: 0 },
  openDelay: 0,
  middlewares: { shift: { crossAxis: !0 } },
};
function Oi(e) {
  const { children: r, closeDelay: o, openDelay: l, position: s, ...c } = Ee("MenuSub", rN, e),
    u = Wr(),
    [f, { open: d, close: m }] = bp(!1),
    v = S.use(qs),
    g = to(),
    { dir: y } = Za(),
    b = Vp(y, s),
    x = v?.registerOpenSub ?? g.registerOpenSub,
    C = S.useRef(null),
    R = S.useRef(null),
    T = S.useCallback((Y) => {
      const ee = R.current;
      return (
        ee && ee !== Y && ee(),
        (R.current = Y),
        () => {
          R.current === Y && (R.current = null);
        }
      );
    }, []),
    _ = S.useCallback(() => {
      ((C.current = x(m)), d());
    }, [m, x, d]),
    D = S.useCallback(() => {
      (C.current?.(), (C.current = null), m());
    }, [m]),
    { context: j, refs: z } = Cf({
      placement: b,
      open: f,
      onOpenChange: (Y) => {
        Y ? _() : D();
      },
    }),
    { getReferenceProps: H, getFloatingProps: $ } = fw([
      cw(j, { handleClose: iA(), delay: { open: l, close: o } }),
    ]),
    M = () =>
      window.setTimeout(() => {
        document
          .getElementById(`${u}-dropdown`)
          ?.querySelectorAll("[data-menu-item]:not([data-disabled])")[0]
          ?.focus();
      }, 16),
    K = () =>
      window.setTimeout(() => {
        document.getElementById(`${u}-target`)?.focus();
      }, 16);
  return w.jsx(qs, {
    value: {
      opened: f,
      close: D,
      open: _,
      focusFirstItem: M,
      focusParentItem: K,
      parentContext: v,
      setReference: z.setReference,
      setFloating: z.setFloating,
      getReferenceProps: H,
      getFloatingProps: $,
      registerOpenSub: T,
    },
    children: w.jsx(Zt, {
      opened: f,
      withinPortal: !1,
      withArrow: !1,
      id: u,
      position: s,
      ...c,
      children: r,
    }),
  });
}
Oi.extend = (e) => e;
Oi.displayName = "@mantine/core/MenuSub";
Oi.Target = Yx;
Oi.Dropdown = cg;
Oi.Item = ug;
const aN = { refProp: "ref" };
function Gx(e) {
  const { children: r, refProp: o, ...l } = Ee("MenuTarget", aN, e),
    s = El(r);
  if (!s)
    throw new Error(
      "Menu.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported",
    );
  const c = to(),
    u = s.props,
    f = ua(u.onClick, () => {
      c.trigger === "click"
        ? c.toggleDropdown()
        : c.trigger === "click-hover" && (c.setOpenedViaClick(!0), c.opened || c.openDropdown());
    }),
    d = ua(
      u.onMouseEnter,
      () => (c.trigger === "hover" || c.trigger === "click-hover") && c.openDropdown(),
    ),
    m = ua(u.onMouseLeave, () => {
      (c.trigger === "hover" || (c.trigger === "click-hover" && !c.openedViaClick)) &&
        c.closeDropdown();
    });
  return w.jsx(Zt.Target, {
    refProp: o,
    popupType: "menu",
    ...l,
    children: S.cloneElement(s, {
      onClick: f,
      onMouseEnter: d,
      onMouseLeave: m,
      "data-expanded": c.opened ? !0 : void 0,
    }),
  });
}
Gx.displayName = "@mantine/core/MenuTarget";
const oN = {
    trapFocus: !0,
    closeOnItemClick: !0,
    withInitialFocusPlaceholder: !0,
    clickOutsideEvents: ["mousedown", "touchstart", "keydown"],
    loop: !0,
    trigger: "click",
    openDelay: 0,
    closeDelay: 100,
    menuItemTabIndex: -1,
  },
  xr = He((e) => {
    const r = Ee("Menu", oN, e),
      {
        children: o,
        onOpen: l,
        onClose: s,
        opened: c,
        defaultOpened: u,
        trapFocus: f,
        onChange: d,
        closeOnItemClick: m,
        loop: v,
        closeOnEscape: g,
        trigger: y,
        openDelay: b,
        closeDelay: x,
        classNames: C,
        styles: R,
        unstyled: T,
        variant: _,
        vars: D,
        menuItemTabIndex: j,
        keepMounted: z,
        withInitialFocusPlaceholder: H,
        attributes: $,
        ...M
      } = r,
      K = Ze({
        name: "Menu",
        classes: Vo,
        props: r,
        classNames: C,
        styles: R,
        unstyled: T,
        attributes: $,
      }),
      [Y, ee] = Yr({ value: c, defaultValue: u, finalValue: !1, onChange: d }),
      [ne, oe] = S.useState(!1),
      U = () => {
        (ee(!1), oe(!1), Y && s?.());
      },
      re = () => {
        (ee(!0), !Y && l?.());
      },
      N = () => {
        Y ? U() : re();
      },
      { openDropdown: k, closeDropdown: B } = fA({
        open: re,
        close: U,
        closeDelay: x,
        openDelay: b,
      }),
      F = S.useRef(null),
      Z = S.useCallback((ae) => {
        const ie = F.current;
        return (
          ie && ie !== ae && ie(),
          (F.current = ae),
          () => {
            F.current === ae && (F.current = null);
          }
        );
      }, []),
      O = (ae) => L2("[data-menu-item]", "[data-menu-dropdown]", ae),
      { resolvedClassNames: P, resolvedStyles: Q } = tc({ classNames: C, styles: R, props: r });
    return w.jsx(nN, {
      value: {
        getStyles: K,
        opened: Y,
        toggleDropdown: N,
        getItemIndex: O,
        openedViaClick: ne,
        setOpenedViaClick: oe,
        closeOnItemClick: m,
        closeDropdown: y === "click" ? U : B,
        openDropdown: y === "click" ? re : k,
        closeDropdownImmediately: U,
        loop: v,
        trigger: y,
        unstyled: T,
        menuItemTabIndex: j,
        withInitialFocusPlaceholder: H,
        registerOpenSub: Z,
      },
      children: w.jsx(Zt, {
        returnFocus: !0,
        ...M,
        opened: Y,
        onChange: N,
        defaultOpened: u,
        trapFocus: z ? !1 : f,
        closeOnEscape: g,
        __staticSelector: "Menu",
        classNames: P,
        styles: Q,
        unstyled: T,
        variant: _,
        keepMounted: z,
        children: o,
      }),
    });
  });
xr.displayName = "@mantine/core/Menu";
xr.classes = Vo;
xr.Item = ig;
xr.Label = sg;
xr.Dropdown = lg;
xr.Target = Gx;
xr.Divider = og;
xr.Sub = Oi;
const Uf = S.createContext(null);
var Pf = {
  root: "m_7cda1cd6",
  "root--default": "m_44da308b",
  "root--contrast": "m_e3a01f8",
  label: "m_1e0e6180",
  remove: "m_ae386778",
  group: "m_1dcfd90b",
};
const Xx = S.createContext(null),
  Kx = (e, { gap: r }, { size: o }) => ({
    group: { "--pg-gap": r !== void 0 ? gt(r) : gt(o, "pg-gap") },
  }),
  Vf = He((e) => {
    const r = Ee("PillGroup", null, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        vars: f,
        size: d,
        disabled: m,
        attributes: v,
        ...g
      } = r,
      y = S.use(Uf)?.size || d || void 0,
      b = Ze({
        name: "PillGroup",
        classes: Pf,
        props: r,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: v,
        vars: f,
        varsResolver: Kx,
        stylesCtx: { size: y },
        rootSelector: "group",
      });
    return w.jsx(Xx, {
      value: { size: y, disabled: m },
      children: w.jsx(Ne, { size: y, ...b("group"), ...g }),
    });
  });
Vf.classes = Pf;
Vf.varsResolver = Kx;
Vf.displayName = "@mantine/core/PillGroup";
const lN = { variant: "default" },
  Qx = (e, { radius: r }, { size: o }) => ({
    root: {
      "--pill-fz": gt(o, "pill-fz"),
      "--pill-height": gt(o, "pill-height"),
      "--pill-radius": r === void 0 ? void 0 : Ln(r),
    },
  }),
  gl = He((e) => {
    const r = Ee("Pill", lN, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        vars: f,
        variant: d,
        children: m,
        withRemoveButton: v,
        onRemove: g,
        removeButtonProps: y,
        radius: b,
        size: x,
        disabled: C,
        mod: R,
        attributes: T,
        ..._
      } = r,
      D = S.use(Xx),
      j = S.use(Uf),
      z = x || D?.size || void 0,
      H = j?.variant === "filled" ? "contrast" : d || "default",
      $ = Ze({
        name: "Pill",
        classes: Pf,
        props: r,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: T,
        vars: f,
        varsResolver: Qx,
        stylesCtx: { size: z },
      });
    return w.jsxs(Ne, {
      component: "span",
      variant: H,
      size: z,
      ...$("root", { variant: H }),
      mod: [{ "with-remove": v && !C, disabled: C || D?.disabled }, R],
      ..._,
      children: [
        w.jsx("span", { ...$("label"), children: m }),
        v &&
          w.jsx(Di, {
            variant: "transparent",
            radius: b,
            tabIndex: -1,
            "aria-hidden": !0,
            unstyled: u,
            ...y,
            ...$("remove", { className: y?.className, style: y?.style }),
            onMouseDown: (M) => {
              (M.preventDefault(), M.stopPropagation(), y?.onMouseDown?.(M));
            },
            onClick: (M) => {
              (M.stopPropagation(), g?.(), y?.onClick?.(M));
            },
          }),
      ],
    });
  });
gl.classes = Pf;
gl.varsResolver = Qx;
gl.displayName = "@mantine/core/Pill";
gl.Group = Vf;
var Zx = { field: "m_45c4369d" };
const iN = { type: "visible" },
  fg = He((e) => {
    const r = Ee("PillsInputField", iN, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        vars: f,
        type: d,
        disabled: m,
        id: v,
        pointer: g,
        mod: y,
        attributes: b,
        ref: x,
        ...C
      } = r,
      R = S.use(Uf),
      T = S.use(Rl),
      _ = Ze({
        name: "PillsInputField",
        classes: Zx,
        props: r,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: b,
        rootSelector: "field",
      }),
      D = m || R?.disabled;
    return w.jsx(Ne, {
      component: "input",
      ref: tn(x, R?.fieldRef),
      "data-type": d,
      disabled: D,
      mod: [{ disabled: D, pointer: g }, y],
      ..._("field"),
      ...C,
      id: T?.inputId || v,
      "aria-invalid": R?.hasError,
      "aria-describedby": T?.describedBy,
      type: "text",
      onMouseDown: (j) => !g && j.stopPropagation(),
    });
  });
fg.classes = Zx;
fg.displayName = "@mantine/core/PillsInputField";
const sN = { size: "sm" },
  Ys = He((e) => {
    const {
        children: r,
        onMouseDown: o,
        onClick: l,
        size: s,
        disabled: c,
        __staticSelector: u,
        error: f,
        variant: d,
        ...m
      } = Ee(["Input", "InputWrapper", "PillsInput"], sN, e),
      v = S.useRef(null);
    return w.jsx(Uf, {
      value: { fieldRef: v, size: s, disabled: c, hasError: !!f, variant: d },
      children: w.jsx(Po, {
        size: s,
        error: f,
        variant: d,
        component: "div",
        "data-no-overflow": !0,
        onMouseDown: (g) => {
          (g.preventDefault(), o?.(g), v.current?.focus());
        },
        onClick: (g) => {
          (g.preventDefault(),
            g.currentTarget.closest("fieldset")?.disabled || (v.current?.focus(), l?.(g)));
        },
        ...m,
        multiline: !0,
        disabled: c,
        __staticSelector: u || "PillsInput",
        withAria: !1,
        children: r,
      }),
    });
  });
Ys.displayName = "@mantine/core/PillsInput";
Ys.classes = Po.classes;
Ys.Field = fg;
function Wx(e, r) {
  var o = {};
  for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && r.indexOf(l) < 0 && (o[l] = e[l]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, l = Object.getOwnPropertySymbols(e); s < l.length; s++)
      r.indexOf(l[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, l[s]) &&
        (o[l[s]] = e[l[s]]);
  return o;
}
var wi;
(function (e) {
  ((e.event = "event"), (e.props = "prop"));
})(wi || (wi = {}));
function Oo() {}
function cN(e) {
  var r,
    o = void 0;
  return function () {
    for (var l = [], s = arguments.length; s--; ) l[s] = arguments[s];
    return (
      (r &&
        l.length === r.length &&
        l.every(function (c, u) {
          return c === r[u];
        })) ||
        ((r = l), (o = e.apply(void 0, l))),
      o
    );
  };
}
function Gs(e) {
  return !!(e || "").match(/\d/);
}
function zo(e) {
  return e == null;
}
function uN(e) {
  return typeof e == "number" && isNaN(e);
}
function Jx(e) {
  return zo(e) || uN(e) || (typeof e == "number" && !isFinite(e));
}
function eC(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function fN(e) {
  switch (e) {
    case "lakh":
      return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
    case "wan":
      return /(\d)(?=(\d{4})+(?!\d))/g;
    default:
      return /(\d)(?=(\d{3})+(?!\d))/g;
  }
}
function dN(e, r, o) {
  var l = fN(o),
    s = e.search(/[1-9]/);
  return (
    (s = s === -1 ? e.length : s),
    e.substring(0, s) + e.substring(s, e.length).replace(l, "$1" + r)
  );
}
function w1(e) {
  var r = S.useRef(e);
  r.current = e;
  var o = S.useRef(function () {
    for (var l = [], s = arguments.length; s--; ) l[s] = arguments[s];
    return r.current.apply(r, l);
  });
  return o.current;
}
function dg(e, r) {
  r === void 0 && (r = !0);
  var o = e[0] === "-",
    l = o && r;
  e = e.replace("-", "");
  var s = e.split("."),
    c = s[0],
    u = s[1] || "";
  return { beforeDecimal: c, afterDecimal: u, hasNegation: o, addNegation: l };
}
function hN(e) {
  if (!e) return e;
  var r = e[0] === "-";
  r && (e = e.substring(1, e.length));
  var o = e.split("."),
    l = o[0].replace(/^0+/, "") || "0",
    s = o[1] || "";
  return (r ? "-" : "") + l + (s ? "." + s : "");
}
function tC(e, r, o) {
  for (var l = "", s = o ? "0" : "", c = 0; c <= r - 1; c++) l += e[c] || s;
  return l;
}
function x1(e, r) {
  return Array(r + 1).join(e);
}
function nC(e) {
  var r = e + "",
    o = r[0] === "-" ? "-" : "";
  o && (r = r.substring(1));
  var l = r.split(/[eE]/g),
    s = l[0],
    c = l[1];
  if (((c = Number(c)), !c)) return o + s;
  s = s.replace(".", "");
  var u = 1 + c,
    f = s.length;
  return (
    u < 0
      ? (s = "0." + x1("0", Math.abs(u)) + s)
      : u >= f
        ? (s = s + x1("0", u - f))
        : (s = (s.substring(0, u) || "0") + "." + s.substring(u)),
    o + s
  );
}
function C1(e, r, o) {
  if (["", "-"].indexOf(e) !== -1) return e;
  var l = (e.indexOf(".") !== -1 || o) && r,
    s = dg(e),
    c = s.beforeDecimal,
    u = s.afterDecimal,
    f = s.hasNegation,
    d = parseFloat("0." + (u || "0")),
    m = u.length <= r ? "0." + u : d.toFixed(r),
    v = m.split("."),
    g = c;
  c &&
    Number(v[0]) &&
    (g = c
      .split("")
      .reverse()
      .reduce(function (C, R, T) {
        return C.length > T
          ? (Number(C[0]) + Number(R)).toString() + C.substring(1, C.length)
          : R + C;
      }, v[0]));
  var y = tC(v[1] || "", r, o),
    b = f ? "-" : "",
    x = l ? "." : "";
  return "" + b + g + x + y;
}
function fl(e, r) {
  if (((e.value = e.value), e !== null)) {
    if (e.createTextRange) {
      var o = e.createTextRange();
      return (o.move("character", r), o.select(), !0);
    }
    return e.selectionStart || e.selectionStart === 0
      ? (e.focus(), e.setSelectionRange(r, r), !0)
      : (e.focus(), !1);
  }
}
var rC = cN(function (e, r) {
    for (var o = 0, l = 0, s = e.length, c = r.length; e[o] === r[o] && o < s; ) o++;
    for (; e[s - 1 - l] === r[c - 1 - l] && c - l > o && s - l > o; ) l++;
    return { from: { start: o, end: s - l }, to: { start: o, end: c - l } };
  }),
  mN = function (e, r) {
    var o = Math.min(e.selectionStart, r);
    return { from: { start: o, end: e.selectionEnd }, to: { start: o, end: r } };
  };
function pN(e, r, o) {
  return Math.min(Math.max(e, r), o);
}
function Am(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function gN() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function vN(e) {
  return { from: { start: 0, end: 0 }, to: { start: 0, end: e.length }, lastValue: "" };
}
function yN(e) {
  var r = e.currentValue,
    o = e.formattedValue,
    l = e.currentValueIndex,
    s = e.formattedValueIndex;
  return r[l] === o[s];
}
function bN(e, r, o, l, s, c, u) {
  u === void 0 && (u = yN);
  var f = s.findIndex(function (j) {
      return j;
    }),
    d = e.slice(0, f);
  !r && !o.startsWith(d) && ((r = d), (o = d + o), (l = l + d.length));
  for (var m = o.length, v = e.length, g = {}, y = new Array(m), b = 0; b < m; b++) {
    y[b] = -1;
    for (var x = 0, C = v; x < C; x++) {
      var R = u({
        currentValue: o,
        lastValue: r,
        formattedValue: e,
        currentValueIndex: b,
        formattedValueIndex: x,
      });
      if (R && g[x] !== !0) {
        ((y[b] = x), (g[x] = !0));
        break;
      }
    }
  }
  for (var T = l; T < m && (y[T] === -1 || !c(o[T])); ) T++;
  var _ = T === m || y[T] === -1 ? v : y[T];
  for (T = l - 1; T > 0 && y[T] === -1; ) T--;
  var D = T === -1 || y[T] === -1 ? 0 : y[T] + 1;
  return D > _ ? _ : l - D < _ - l ? D : _;
}
function E1(e, r, o, l) {
  var s = e.length;
  if (((r = pN(r, 0, s)), l === "left")) {
    for (; r >= 0 && !o[r]; ) r--;
    r === -1 && (r = o.indexOf(!0));
  } else {
    for (; r <= s && !o[r]; ) r++;
    r > s && (r = o.lastIndexOf(!0));
  }
  return (r === -1 && (r = s), r);
}
function SN(e) {
  for (
    var r = Array.from({ length: e.length + 1 }).map(function () {
        return !0;
      }),
      o = 0,
      l = r.length;
    o < l;
    o++
  )
    r[o] = !!(Gs(e[o]) || Gs(e[o - 1]));
  return r;
}
function aC(e, r, o, l, s, c) {
  c === void 0 && (c = Oo);
  var u = w1(function (x, C) {
      var R, T;
      return (
        Jx(x)
          ? ((T = ""), (R = ""))
          : typeof x == "number" || C
            ? ((T = typeof x == "number" ? nC(x) : x), (R = l(T)))
            : ((T = s(x, void 0)), (R = l(T))),
        { formattedValue: R, numAsString: T }
      );
    }),
    f = S.useState(function () {
      return u(zo(e) ? r : e, o);
    }),
    d = f[0],
    m = f[1],
    v = w1(function (x, C) {
      (x.formattedValue !== d.formattedValue &&
        m({ formattedValue: x.formattedValue, numAsString: x.value }),
        c(x, C));
    }),
    g = e,
    y = o;
  zo(e) && ((g = d.numAsString), (y = !0));
  var b = u(g, y);
  return (
    S.useMemo(
      function () {
        m(b);
      },
      [b.formattedValue],
    ),
    S.useEffect(function () {
      if (!zo(r) && zo(e) && d.formattedValue !== "") {
        var x = parseFloat(d.numAsString);
        v(
          {
            formattedValue: d.formattedValue,
            value: d.numAsString,
            floatValue: isNaN(x) ? void 0 : x,
          },
          { event: void 0, source: wi.props },
        );
      }
    }, []),
    [d, v]
  );
}
function wN(e) {
  return e.replace(/[^0-9]/g, "");
}
function xN(e) {
  return e;
}
function CN(e) {
  var r = e.type;
  r === void 0 && (r = "text");
  var o = e.displayType;
  o === void 0 && (o = "input");
  var l = e.customInput,
    s = e.renderText,
    c = e.getInputRef,
    u = e.format;
  u === void 0 && (u = xN);
  var f = e.removeFormatting;
  f === void 0 && (f = wN);
  var d = e.defaultValue,
    m = e.valueIsNumericString,
    v = e.onValueChange,
    g = e.isAllowed,
    y = e.onChange;
  y === void 0 && (y = Oo);
  var b = e.onKeyDown;
  b === void 0 && (b = Oo);
  var x = e.onMouseUp;
  x === void 0 && (x = Oo);
  var C = e.onFocus;
  C === void 0 && (C = Oo);
  var R = e.onBlur;
  R === void 0 && (R = Oo);
  var T = e.value,
    _ = e.getCaretBoundary;
  _ === void 0 && (_ = SN);
  var D = e.isValidInputCharacter;
  D === void 0 && (D = Gs);
  var j = e.isCharacterSame,
    z = Wx(e, [
      "type",
      "displayType",
      "customInput",
      "renderText",
      "getInputRef",
      "format",
      "removeFormatting",
      "defaultValue",
      "valueIsNumericString",
      "onValueChange",
      "isAllowed",
      "onChange",
      "onKeyDown",
      "onMouseUp",
      "onFocus",
      "onBlur",
      "value",
      "getCaretBoundary",
      "isValidInputCharacter",
      "isCharacterSame",
    ]),
    H = aC(T, d, !!m, u, f, v),
    $ = H[0],
    M = $.formattedValue,
    K = $.numAsString,
    Y = H[1],
    ee = S.useRef(),
    ne = S.useRef({ formattedValue: M, numAsString: K }),
    oe = function (be, we) {
      ((ne.current = { formattedValue: be.formattedValue, numAsString: be.value }), Y(be, we));
    },
    U = S.useState(!1),
    re = U[0],
    N = U[1],
    k = S.useRef(null),
    B = S.useRef({ setCaretTimeout: null, focusTimeout: null });
  S.useEffect(function () {
    return (
      N(!0),
      function () {
        (clearTimeout(B.current.setCaretTimeout), clearTimeout(B.current.focusTimeout));
      }
    );
  }, []);
  var F = u,
    Z = function (be, we) {
      var Me = parseFloat(we);
      return { formattedValue: be, value: we, floatValue: isNaN(Me) ? void 0 : Me };
    },
    O = function (be, we, Me) {
      (be.selectionStart === 0 && be.selectionEnd === be.value.length) ||
        (fl(be, we),
        (B.current.setCaretTimeout = setTimeout(function () {
          be.value === Me && be.selectionStart !== we && fl(be, we);
        }, 0)));
    },
    P = function (be, we, Me) {
      return E1(be, we, _(be), Me);
    },
    Q = function (be, we, Me) {
      var xe = _(we),
        Be = bN(we, M, be, Me, xe, D, j);
      return ((Be = E1(we, Be, xe)), Be);
    },
    ae = function (be) {
      var we = be.formattedValue;
      we === void 0 && (we = "");
      var Me = be.input,
        xe = be.source,
        Be = be.event,
        Ve = be.numAsString,
        Xe;
      if (Me) {
        var ot = be.inputValue || Me.value,
          We = Am(Me);
        ((Me.value = we), (Xe = Q(ot, we, We)), Xe !== void 0 && O(Me, Xe, we));
      }
      we !== M && oe(Z(we, Ve), { event: Be, source: xe });
    };
  S.useEffect(
    function () {
      var be = ne.current,
        we = be.formattedValue,
        Me = be.numAsString;
      (M !== we || K !== Me) && oe(Z(M, K), { event: void 0, source: wi.props });
    },
    [M, K],
  );
  var ie = k.current ? Am(k.current) : void 0,
    ue = typeof window < "u" ? S.useLayoutEffect : S.useEffect;
  ue(
    function () {
      var be = k.current;
      if (M !== ne.current.formattedValue && be) {
        var we = Q(ne.current.formattedValue, M, ie);
        ((be.value = M), O(be, we, M));
      }
    },
    [M],
  );
  var ge = function (be, we, Me) {
      var xe = we.target,
        Be = ee.current ? mN(ee.current, xe.selectionEnd) : rC(M, be),
        Ve = Object.assign(Object.assign({}, Be), { lastValue: M }),
        Xe = f(be, Ve),
        ot = F(Xe);
      if (((Xe = f(ot, void 0)), g && !g(Z(ot, Xe)))) {
        var We = we.target,
          Ie = Am(We),
          Yt = Q(be, M, Ie);
        return ((We.value = M), O(We, Yt, M), !1);
      }
      return (
        ae({
          formattedValue: ot,
          numAsString: Xe,
          inputValue: be,
          event: we,
          source: Me,
          input: we.target,
        }),
        !0
      );
    },
    Se = function (be, we) {
      we === void 0 && (we = 0);
      var Me = be.selectionStart,
        xe = be.selectionEnd;
      ee.current = { selectionStart: Me, selectionEnd: xe + we };
    },
    Ce = function (be) {
      var we = be.target,
        Me = we.value,
        xe = ge(Me, be, wi.event);
      (xe && y(be), (ee.current = void 0));
    },
    Ye = function (be) {
      var we = be.target,
        Me = be.key,
        xe = we.selectionStart,
        Be = we.selectionEnd,
        Ve = we.value;
      Ve === void 0 && (Ve = "");
      var Xe;
      Me === "ArrowLeft" || Me === "Backspace"
        ? (Xe = Math.max(xe - 1, 0))
        : Me === "ArrowRight"
          ? (Xe = Math.min(xe + 1, Ve.length))
          : Me === "Delete" && (Xe = xe);
      var ot = 0;
      Me === "Delete" && xe === Be && (ot = 1);
      var We = Me === "ArrowLeft" || Me === "ArrowRight";
      if (Xe === void 0 || (xe !== Be && !We)) {
        (b(be), Se(we, ot));
        return;
      }
      var Ie = Xe;
      if (We) {
        var Yt = Me === "ArrowLeft" ? "left" : "right";
        ((Ie = P(Ve, Xe, Yt)), Ie !== Xe && be.preventDefault());
      } else
        Me === "Delete" && !D(Ve[Xe])
          ? (Ie = P(Ve, Xe, "right"))
          : Me === "Backspace" && !D(Ve[Xe]) && (Ie = P(Ve, Xe, "left"));
      (Ie !== Xe && O(we, Ie, Ve), b(be), Se(we, ot));
    },
    je = function (be) {
      var we = be.target,
        Me = function () {
          var xe = we.selectionStart,
            Be = we.selectionEnd,
            Ve = we.value;
          if ((Ve === void 0 && (Ve = ""), xe === Be)) {
            var Xe = P(Ve, xe);
            Xe !== xe && O(we, Xe, Ve);
          }
        };
      (Me(),
        requestAnimationFrame(function () {
          Me();
        }),
        x(be),
        Se(we));
    },
    de = function (be) {
      be.persist && be.persist();
      var we = be.target,
        Me = be.currentTarget;
      ((k.current = we),
        (B.current.focusTimeout = setTimeout(function () {
          var xe = we.selectionStart,
            Be = we.selectionEnd,
            Ve = we.value;
          Ve === void 0 && (Ve = "");
          var Xe = P(Ve, xe);
          (Xe !== xe && !(xe === 0 && Be === Ve.length) && O(we, Xe, Ve),
            C(Object.assign(Object.assign({}, be), { currentTarget: Me })));
        }, 0)));
    },
    _e = function (be) {
      ((k.current = null),
        clearTimeout(B.current.focusTimeout),
        clearTimeout(B.current.setCaretTimeout),
        R(be));
    },
    ze = re && gN() ? "numeric" : void 0,
    Oe = Object.assign({ inputMode: ze }, z, {
      type: r,
      value: M,
      onChange: Ce,
      onKeyDown: Ye,
      onMouseUp: je,
      onFocus: de,
      onBlur: _e,
    });
  if (o === "text")
    return s
      ? Va.createElement(Va.Fragment, null, s(M, z) || null)
      : Va.createElement("span", Object.assign({}, z, { ref: c }), M);
  if (l) {
    var at = l;
    return Va.createElement(at, Object.assign({}, Oe, { ref: c }));
  }
  return Va.createElement("input", Object.assign({}, Oe, { ref: c }));
}
function R1(e, r) {
  var o = r.decimalScale,
    l = r.fixedDecimalScale,
    s = r.prefix;
  s === void 0 && (s = "");
  var c = r.suffix;
  c === void 0 && (c = "");
  var u = r.allowNegative,
    f = r.thousandsGroupStyle;
  if ((f === void 0 && (f = "thousand"), e === "" || e === "-")) return e;
  var d = If(r),
    m = d.thousandSeparator,
    v = d.decimalSeparator,
    g = (o !== 0 && e.indexOf(".") !== -1) || (o && l),
    y = dg(e, u),
    b = y.beforeDecimal,
    x = y.afterDecimal,
    C = y.addNegation;
  return (
    o !== void 0 && (x = tC(x, o, !!l)),
    m && (b = dN(b, m, f)),
    s && (b = s + b),
    c && (x = x + c),
    C && (b = "-" + b),
    (e = b + ((g && v) || "") + x),
    e
  );
}
function If(e) {
  var r = e.decimalSeparator;
  r === void 0 && (r = ".");
  var o = e.thousandSeparator,
    l = e.allowedDecimalSeparators;
  return (
    o === !0 && (o = ","),
    l || (l = [r, "."]),
    { decimalSeparator: r, thousandSeparator: o, allowedDecimalSeparators: l }
  );
}
function EN(e, r) {
  e === void 0 && (e = "");
  var o = new RegExp("(-)"),
    l = new RegExp("(-)(.)*(-)"),
    s = o.test(e),
    c = l.test(e);
  return ((e = e.replace(/-/g, "")), s && !c && r && (e = "-" + e), e);
}
function RN(e, r) {
  return new RegExp("(^-)|[0-9]|" + eC(e), "g");
}
function TN(e, r, o) {
  return e === ""
    ? !0
    : !r?.match(/\d/) && !o?.match(/\d/) && typeof e == "string" && !isNaN(Number(e));
}
function _N(e, r, o) {
  var l;
  r === void 0 && (r = vN(e));
  var s = o.allowNegative,
    c = o.prefix;
  c === void 0 && (c = "");
  var u = o.suffix;
  u === void 0 && (u = "");
  var f = o.decimalScale,
    d = r.from,
    m = r.to,
    v = m.start,
    g = m.end,
    y = If(o),
    b = y.allowedDecimalSeparators,
    x = y.decimalSeparator,
    C = e[g] === x;
  if (Gs(e) && (e === c || e === u) && r.lastValue === "") return e;
  if (g - v === 1 && b.indexOf(e[v]) !== -1) {
    var R = f === 0 ? "" : x;
    e = e.substring(0, v) + R + e.substring(v + 1, e.length);
  }
  var T = function (k, B, F) {
      var Z = !1,
        O = !1;
      c.startsWith("-")
        ? (Z = !1)
        : k.startsWith("--")
          ? ((Z = !1), (O = !0))
          : u.startsWith("-") && k.length === u.length
            ? (Z = !1)
            : k[0] === "-" && (Z = !0);
      var P = Z ? 1 : 0;
      return (
        O && (P = 2),
        P && ((k = k.substring(P)), (B -= P), (F -= P)),
        { value: k, start: B, end: F, hasNegation: Z }
      );
    },
    _ = T(e, v, g),
    D = _.hasNegation;
  ((l = _), (e = l.value), (v = l.start), (g = l.end));
  var j = T(r.lastValue, d.start, d.end),
    z = j.start,
    H = j.end,
    $ = j.value,
    M = e.substring(v, g);
  e.length &&
    $.length &&
    (z > $.length - u.length || H < c.length) &&
    !(M && u.startsWith(M)) &&
    (e = $);
  var K = 0;
  (e.startsWith(c) ? (K += c.length) : v < c.length && (K = v), (e = e.substring(K)), (g -= K));
  var Y = e.length,
    ee = e.length - u.length;
  (e.endsWith(u) ? (Y = ee) : (g > ee || g > e.length - u.length) && (Y = g),
    (e = e.substring(0, Y)),
    (e = EN(D ? "-" + e : e, s)),
    (e = (e.match(RN(x)) || []).join("")));
  var ne = e.indexOf(x);
  e = e.replace(new RegExp(eC(x), "g"), function (k, B) {
    return B === ne ? "." : "";
  });
  var oe = dg(e, s),
    U = oe.beforeDecimal,
    re = oe.afterDecimal,
    N = oe.addNegation;
  return (
    m.end - m.start < d.end - d.start && U === "" && C && !parseFloat(re) && (e = N ? "-" : ""),
    e
  );
}
function DN(e, r) {
  var o = r.prefix;
  o === void 0 && (o = "");
  var l = r.suffix;
  l === void 0 && (l = "");
  var s = Array.from({ length: e.length + 1 }).map(function () {
      return !0;
    }),
    c = e[0] === "-";
  s.fill(!1, 0, Math.min(o.length + (c ? 1 : 0), e.length));
  var u = e.length;
  return (s.fill(!1, u - l.length + 1, u + 1), s);
}
function AN(e) {
  var r = If(e),
    o = r.thousandSeparator,
    l = r.decimalSeparator,
    s = e.prefix;
  s === void 0 && (s = "");
  var c = e.allowNegative;
  if ((c === void 0 && (c = !0), o === l))
    throw new Error(
      `
        Decimal separator can't be same as thousand separator.
        thousandSeparator: ` +
        o +
        ` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: ` +
        l +
        ` (default value for decimalSeparator is .)
     `,
    );
  return (
    s.startsWith("-") &&
      c &&
      (console.error(
        `
      Prefix can't start with '-' when allowNegative is true.
      prefix: ` +
          s +
          `
      allowNegative: ` +
          c +
          `
    `,
      ),
      (c = !1)),
    Object.assign(Object.assign({}, e), { allowNegative: c })
  );
}
function MN(e) {
  ((e = AN(e)), e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle);
  var r = e.suffix,
    o = e.allowNegative,
    l = e.allowLeadingZeros,
    s = e.onKeyDown;
  s === void 0 && (s = Oo);
  var c = e.onBlur;
  c === void 0 && (c = Oo);
  var u = e.thousandSeparator,
    f = e.decimalScale,
    d = e.fixedDecimalScale,
    m = e.prefix;
  m === void 0 && (m = "");
  var v = e.defaultValue,
    g = e.value,
    y = e.valueIsNumericString,
    b = e.onValueChange,
    x = Wx(e, [
      "decimalSeparator",
      "allowedDecimalSeparators",
      "thousandsGroupStyle",
      "suffix",
      "allowNegative",
      "allowLeadingZeros",
      "onKeyDown",
      "onBlur",
      "thousandSeparator",
      "decimalScale",
      "fixedDecimalScale",
      "prefix",
      "defaultValue",
      "value",
      "valueIsNumericString",
      "onValueChange",
    ]),
    C = If(e),
    R = C.decimalSeparator,
    T = C.allowedDecimalSeparators,
    _ = function (N) {
      return R1(N, e);
    },
    D = function (N, k) {
      return _N(N, k, e);
    },
    j = zo(g) ? v : g,
    z = y ?? TN(j, m, r);
  zo(g) ? zo(v) || (z = z || typeof v == "number") : (z = z || typeof g == "number");
  var H = function (N) {
      return Jx(N)
        ? N
        : (typeof N == "number" && (N = nC(N)), z && typeof f == "number" ? C1(N, f, !!d) : N);
    },
    $ = aC(H(g), H(v), !!z, _, D, b),
    M = $[0],
    K = M.numAsString,
    Y = M.formattedValue,
    ee = $[1],
    ne = function (N) {
      var k = N.target,
        B = N.key,
        F = k.selectionStart,
        Z = k.selectionEnd,
        O = k.value;
      if (
        (O === void 0 && (O = ""),
        (B === "Backspace" || B === "Delete") && Z < m.length && O !== "-")
      ) {
        N.preventDefault();
        return;
      }
      if (F !== Z) {
        s(N);
        return;
      }
      (B === "Backspace" && O[0] === "-" && F === m.length + 1 && o && fl(k, 1),
        f &&
          d &&
          (B === "Backspace" && O[F - 1] === R
            ? (fl(k, F - 1), N.preventDefault())
            : B === "Delete" && O[F] === R && N.preventDefault()),
        T?.includes(B) && O[F] === R && fl(k, F + 1));
      var P = u === !0 ? "," : u;
      (B === "Backspace" && O[F - 1] === P && fl(k, F - 1),
        B === "Delete" && O[F] === P && fl(k, F + 1),
        s(N));
    },
    oe = function (N) {
      var k = K;
      if ((k.match(/\d/g) || (k = ""), l || (k = hN(k)), d && f && (k = C1(k, f, d)), k !== K)) {
        var B = R1(k, e);
        ee(
          { formattedValue: B, value: k, floatValue: parseFloat(k) },
          { event: N, source: wi.event },
        );
      }
      c(N);
    },
    U = function (N) {
      return N === R ? !0 : Gs(N);
    },
    re = function (N) {
      var k = N.currentValue,
        B = N.lastValue,
        F = N.formattedValue,
        Z = N.currentValueIndex,
        O = N.formattedValueIndex,
        P = k[Z],
        Q = F[O],
        ae = rC(B, k),
        ie = ae.to,
        ue = function (ge) {
          return D(ge).indexOf(".") + m.length;
        };
      return g === 0 && d && f && k[ie.start] === R && ue(k) < Z && ue(F) > O
        ? !1
        : Z >= ie.start && Z < ie.end && T && T.includes(P) && Q === R
          ? !0
          : P === Q;
    };
  return Object.assign(Object.assign({}, x), {
    value: Y,
    valueIsNumericString: !1,
    isValidInputCharacter: U,
    isCharacterSame: re,
    onValueChange: ee,
    format: _,
    removeFormatting: D,
    getCaretBoundary: function (N) {
      return DN(N, e);
    },
    onKeyDown: ne,
    onBlur: oe,
  });
}
function NN(e) {
  var r = MN(e);
  return Va.createElement(CN, Object.assign({}, r));
}
function T1({ direction: e, style: r, ...o }) {
  return w.jsx("svg", {
    style: {
      width: "var(--ni-chevron-size)",
      height: "var(--ni-chevron-size)",
      transform: e === "up" ? "rotate(180deg)" : void 0,
      ...r,
    },
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...o,
    children: w.jsx("path", {
      d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }),
  });
}
var rp = { root: "m_e2f5cd4e", controls: "m_95e17d22", control: "m_80b4b171" };
const ON = /^(0\.0*|-0(\.0*)?)$/,
  _1 = /^-?0\d+(\.\d+)?\.?$/,
  jN = /\.\d*0$/,
  oC = /^-?\d+\.$/;
function ap(e) {
  return typeof e == "string" && e !== "" && !Number.isNaN(Number(e));
}
function Mm(e) {
  return typeof e == "bigint";
}
function Nm(e) {
  return typeof e == "number"
    ? e < Number.MAX_SAFE_INTEGER
    : e === "" || (ap(e) && Number(e) < Number.MAX_SAFE_INTEGER);
}
function lC(e, r) {
  return e === "" || e === "-" || (!r && e.startsWith("-")) ? !1 : /^-?\d+$/.test(e);
}
function Om(e, r) {
  return typeof e == "bigint" ? !0 : e === "" || lC(e, r);
}
function Ns(e) {
  if (!/^-?\d+$/.test(e)) return null;
  try {
    return BigInt(e);
  } catch {
    return null;
  }
}
function ju(e) {
  if (typeof e == "bigint") return e;
  if (typeof e == "number" && Number.isFinite(e) && Number.isInteger(e)) return BigInt(e);
}
function qu(e, r, o) {
  return r !== void 0 && e < r ? r : o !== void 0 && e > o ? o : e;
}
function zN(e) {
  return e.toString().replace(".", "").length;
}
function kN(e, r) {
  return (
    (typeof e == "number" ? e < Number.MAX_SAFE_INTEGER : !Number.isNaN(Number(e))) &&
    !Number.isNaN(e) &&
    zN(r) < 14 &&
    r !== ""
  );
}
function LN(e, r, o) {
  return e === void 0 ? !0 : (r === void 0 || e >= r) && (o === void 0 || e <= o);
}
const jm = {
    size: "sm",
    step: 1,
    clampBehavior: "blur",
    allowDecimal: !0,
    allowNegative: !0,
    withKeyboardEvents: !0,
    allowLeadingZeros: !0,
    trimLeadingZeroesOnBlur: !0,
    startValue: 0,
    allowedDecimalSeparators: [".", ","],
  },
  iC = (e, { size: r }) => ({ controls: { "--ni-chevron-size": gt(r, "ni-chevron-size") } });
function BN(e, r, o) {
  const l = e.toString(),
    s = oC.test(l),
    c = l.replace(/^0+(?=\d)/, ""),
    u = parseFloat(c);
  if (Number.isNaN(u)) return c;
  if (u > Number.MAX_SAFE_INTEGER) return r !== void 0 ? r : c;
  const f = ks(u, o, r);
  return s ? `${f.toString().replace(/^0+(?=\d)/, "")}.` : f;
}
function $N(e, r) {
  if (e === "" || e === "-") return e;
  const o = Ns(e);
  return o === null ? e : r.clampBehavior === "blur" ? qu(o, r.min, r.max) : o;
}
const Ff = pf((e) => {
  const r = Ee(["Input", "InputWrapper", "NumberInput"], jm, e),
    {
      className: o,
      classNames: l,
      styles: s,
      unstyled: c,
      vars: u,
      onChange: f,
      onValueChange: d,
      value: m,
      defaultValue: v,
      max: g,
      min: y,
      step: b,
      hideControls: x,
      rightSection: C,
      isAllowed: R,
      clampBehavior: T,
      onBlur: _,
      allowDecimal: D,
      decimalScale: j,
      onKeyDown: z,
      onKeyDownCapture: H,
      handlersRef: $,
      startValue: M,
      disabled: K,
      rightSectionPointerEvents: Y,
      allowNegative: ee,
      readOnly: ne,
      size: oe,
      rightSectionWidth: U,
      stepHoldInterval: re,
      stepHoldDelay: N,
      allowLeadingZeros: k,
      withKeyboardEvents: B,
      trimLeadingZeroesOnBlur: F,
      allowedDecimalSeparators: Z,
      selectAllOnFocus: O,
      onMinReached: P,
      onMaxReached: Q,
      onFocus: ae,
      attributes: ie,
      ref: ue,
      ...ge
    } = r,
    Se = ee ?? !0,
    Ce = k ?? !0,
    Ye = Ze({
      name: "NumberInput",
      classes: rp,
      props: r,
      classNames: l,
      styles: s,
      unstyled: c,
      attributes: ie,
      vars: u,
      varsResolver: iC,
    }),
    { resolvedClassNames: je, resolvedStyles: de } = tc({ classNames: l, styles: s, props: r }),
    _e = S.useRef(Mm(m) || Mm(v) ? "bigint" : "number");
  Mm(m) ? (_e.current = "bigint") : typeof m == "number" && (_e.current = "number");
  const ze = _e.current === "bigint",
    [Oe, at] = Yr({ value: m, defaultValue: v, finalValue: "", onChange: f }),
    be = N !== void 0 && re !== void 0,
    we = S.useRef(null),
    Me = S.useRef(null),
    xe = S.useRef(0),
    Be = typeof y == "number" ? y : void 0,
    Ve = typeof g == "number" ? g : void 0,
    Xe = typeof b == "number" ? b : jm.step,
    ot = typeof M == "number" ? M : jm.startValue,
    We = ju(y),
    Ie = ju(g),
    Yt = ju(b) ?? BigInt(1),
    pn = ju(M) ?? BigInt(0),
    Gt = (Re) => (!lC(Re, Se) || (Ce && _1.test(Re)) ? Re : (Ns(Re) ?? Re)),
    zt = (Re) => {
      const $e = Number(Re);
      return Number.isSafeInteger($e) ? $e : void 0;
    },
    nn = (Re, $e) => {
      ($e.source === "event" &&
        at(
          ze
            ? Gt(Re.value)
            : kN(Re.floatValue, Re.value) &&
                !ON.test(Re.value) &&
                !(Ce && _1.test(Re.value)) &&
                !jN.test(Re.value) &&
                !oC.test(Re.value)
              ? Re.floatValue
              : Re.value,
        ),
        d?.(Re, $e));
    },
    An = (Re) => {
      const $e = String(Re).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
      return $e ? Math.max(0, ($e[1] ? $e[1].length : 0) - ($e[2] ? +$e[2] : 0)) : 0;
    },
    Vt = (Re) => {
      we.current && typeof Re < "u" && we.current.setSelectionRange(Re, Re);
    },
    Ht = S.useRef(Zu);
  Ht.current = () => {
    if (ze) {
      if (!Om(Oe, Se)) return;
      let Tt;
      const L = Oe;
      if (typeof L == "bigint") {
        const G = L + Yt;
        (Ie !== void 0 && G > Ie && Q?.(), (Tt = Ie !== void 0 && G > Ie ? Ie : G));
      } else if (typeof L == "string" && L !== "") {
        const G = Ns(L);
        if (G === null) return;
        const ce = G + Yt;
        (Ie !== void 0 && ce > Ie && Q?.(), (Tt = Ie !== void 0 && ce > Ie ? Ie : ce));
      } else Tt = qu(pn, We, Ie);
      const I = Tt.toString();
      (at(Tt),
        d?.({ floatValue: zt(Tt), formattedValue: I, value: I }, { source: "increment" }),
        setTimeout(() => Vt(we.current?.value.length), 0));
      return;
    }
    if (!Nm(Oe)) return;
    let Re;
    const $e = An(Oe),
      Xt = An(Xe),
      an = Math.max($e, Xt),
      yt = 10 ** an;
    if (!ap(Oe) && (typeof Oe != "number" || Number.isNaN(Oe))) Re = ks(ot, Be, Ve);
    else if (Ve !== void 0) {
      const Tt = (Math.round(Number(Oe) * yt) + Math.round(Xe * yt)) / yt;
      (Tt > Ve && Q?.(), (Re = Tt <= Ve ? Tt : Ve));
    } else Re = (Math.round(Number(Oe) * yt) + Math.round(Xe * yt)) / yt;
    const kt = Re.toFixed(an);
    (at(parseFloat(kt)),
      d?.({ floatValue: parseFloat(kt), formattedValue: kt, value: kt }, { source: "increment" }),
      setTimeout(() => Vt(we.current?.value.length), 0));
  };
  const At = S.useRef(Zu);
  At.current = () => {
    if (ze) {
      if (!Om(Oe, Se)) return;
      let L;
      const I = We !== void 0 ? We : Se ? void 0 : BigInt(0),
        G = Oe;
      if (typeof G == "bigint") {
        const he = G - Yt;
        (I !== void 0 && he < I && P?.(), (L = I !== void 0 && he < I ? I : he));
      } else if (typeof G == "string" && G !== "") {
        const he = Ns(G);
        if (he === null) return;
        const Te = he - Yt;
        (I !== void 0 && Te < I && P?.(), (L = I !== void 0 && Te < I ? I : Te));
      } else L = qu(pn, I, Ie);
      const ce = L.toString();
      (at(L),
        d?.({ floatValue: zt(L), formattedValue: ce, value: ce }, { source: "decrement" }),
        setTimeout(() => Vt(we.current?.value.length), 0));
      return;
    }
    if (!Nm(Oe)) return;
    let Re;
    const $e = Be !== void 0 ? Be : Se ? Number.MIN_SAFE_INTEGER : 0,
      Xt = An(Oe),
      an = An(Xe),
      yt = Math.max(Xt, an),
      kt = 10 ** yt;
    if ((!ap(Oe) && typeof Oe != "number") || Number.isNaN(Oe)) Re = ks(ot, $e, Ve);
    else {
      const L = (Math.round(Number(Oe) * kt) - Math.round(Xe * kt)) / kt;
      ($e !== void 0 && L < $e && P?.(), (Re = $e !== void 0 && L < $e ? $e : L));
    }
    const Tt = Re.toFixed(yt);
    (at(parseFloat(Tt)),
      d?.({ floatValue: parseFloat(Tt), formattedValue: Tt, value: Tt }, { source: "decrement" }),
      setTimeout(() => Vt(we.current?.value.length), 0));
  };
  const Ft = (Re) => {
      const $e = Re.clipboardData.getData("text"),
        Xt = ge.decimalSeparator || ".",
        an = (Z || [".", ","]).filter((yt) => yt !== Xt);
      if (an.some((yt) => $e.includes(yt))) {
        Re.preventDefault();
        let yt = $e;
        an.forEach((Tt) => {
          yt = yt.split(Tt).join(Xt);
        });
        const kt = we.current;
        if (kt) {
          const Tt = kt.selectionStart ?? 0,
            L = kt.selectionEnd ?? 0,
            I = kt.value,
            G = I.substring(0, Tt) + yt + I.substring(L);
          (Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set?.call(
            kt,
            G,
          ),
            kt.dispatchEvent(new Event("change", { bubbles: !0 })));
          const ce = Tt + yt.length;
          setTimeout(() => Vt(ce), 0);
        }
      }
      ge.onPaste?.(Re);
    },
    zr = (Re) => {
      (z?.(Re),
        !(ne || !B) &&
          (Re.key === "ArrowUp" && (Re.preventDefault(), Ht.current?.()),
          Re.key === "ArrowDown" && (Re.preventDefault(), At.current?.())));
    },
    kr = (Re) => {
      if ((H?.(Re), Re.key === "Backspace")) {
        const $e = we.current;
        $e &&
          $e.selectionStart === 0 &&
          $e.selectionStart === $e.selectionEnd &&
          (Re.preventDefault(), window.setTimeout(() => Vt(0), 0));
      }
    },
    Lr = (Re) => {
      (O && setTimeout(() => Re.currentTarget.select(), 0), ae?.(Re));
    },
    Mn = (Re) => {
      let $e = Oe;
      (ze
        ? (T === "blur" && typeof $e == "bigint" && ($e = qu($e, We, Ie)),
          F && typeof $e == "string" && ($e = $N($e, { min: We, max: Ie, clampBehavior: T })))
        : (T === "blur" && typeof $e == "number" && ($e = ks($e, Be, Ve)),
          F && typeof $e == "string" && An($e) < 15 && ($e = BN($e, Ve, Be))),
        Oe !== $e && at($e),
        _?.(Re));
    };
  Wu($, { increment: Ht.current, decrement: At.current });
  const gn = (Re) => {
      (Re ? Ht.current?.() : At.current?.(), (xe.current += 1));
    },
    Nn = (Re) => {
      if ((gn(Re), be)) {
        const $e = typeof re == "number" ? re : re(xe.current);
        Me.current = window.setTimeout(() => Nn(Re), $e);
      }
    },
    rn = (Re, $e) => {
      (Re.preventDefault(),
        we.current?.focus(),
        gn($e),
        be && (Me.current = window.setTimeout(() => Nn($e), N)));
    },
    Bn = () => {
      (Me.current && window.clearTimeout(Me.current), (Me.current = null), (xe.current = 0));
    },
    xn = w.jsxs("div", {
      ...Ye("controls"),
      children: [
        w.jsx(Wn, {
          ...Ye("control"),
          tabIndex: -1,
          "aria-hidden": !0,
          disabled:
            K ||
            (typeof Oe == "number" && Ve !== void 0 && Oe >= Ve) ||
            (typeof Oe == "bigint" && Ie !== void 0 && Oe >= Ie),
          mod: { direction: "up" },
          onMouseDown: (Re) => Re.preventDefault(),
          onPointerDown: (Re) => {
            rn(Re, !0);
          },
          onPointerUp: Bn,
          onPointerLeave: Bn,
          children: w.jsx(T1, { direction: "up" }),
        }),
        w.jsx(Wn, {
          ...Ye("control"),
          tabIndex: -1,
          "aria-hidden": !0,
          disabled:
            K ||
            (typeof Oe == "number" && Be !== void 0 && Oe <= Be) ||
            (typeof Oe == "bigint" && We !== void 0 && Oe <= We),
          mod: { direction: "down" },
          onMouseDown: (Re) => Re.preventDefault(),
          onPointerDown: (Re) => {
            rn(Re, !1);
          },
          onPointerUp: Bn,
          onPointerLeave: Bn,
          children: w.jsx(T1, { direction: "down" }),
        }),
      ],
    });
  return w.jsx(Po, {
    component: NN,
    allowNegative: ee,
    className: Dn(rp.root, o),
    size: oe,
    ...ge,
    inputMode: ze ? "numeric" : "decimal",
    readOnly: ne,
    disabled: K,
    value: typeof Oe == "bigint" ? Oe.toString() : Oe,
    getInputRef: tn(ue, we),
    onValueChange: nn,
    rightSection: x || ne || !(ze ? Om(Oe, Se) : Nm(Oe)) ? C : C || xn,
    classNames: je,
    styles: de,
    unstyled: c,
    __staticSelector: "NumberInput",
    decimalScale: ze ? 0 : D ? j : 0,
    onPaste: Ft,
    onFocus: Lr,
    onKeyDown: zr,
    onKeyDownCapture: kr,
    rightSectionPointerEvents: Y ?? (K ? "none" : void 0),
    rightSectionWidth: U ?? `var(--ni-right-section-width-${oe || "sm"})`,
    allowLeadingZeros: k,
    allowedDecimalSeparators: Z,
    onBlur: Mn,
    attributes: ie,
    isAllowed: (Re) => {
      if (!(!R || R(Re))) return !1;
      if (T !== "strict") return !0;
      if (!ze) return LN(Re.floatValue, Be, Ve);
      if (Re.value === "" || Re.value === "-") return !0;
      const $e = Ns(Re.value);
      return $e === null ? !0 : (We === void 0 || $e >= We) && (Ie === void 0 || $e <= Ie);
    },
  });
});
Ff.classes = { ...Po.classes, ...rp };
Ff.varsResolver = iC;
Ff.displayName = "@mantine/core/NumberInput";
function HN({ offset: e, position: r, defaultOpened: o }) {
  const [l, s] = S.useState(o),
    c = S.useRef(null),
    {
      x: u,
      y: f,
      elements: d,
      refs: m,
      update: v,
      placement: g,
    } = Cf({
      placement: r,
      middleware: [Bp({ crossAxis: !0, padding: 5, rootBoundary: "document" })],
    }),
    y = g.includes("right") ? e : r.includes("left") ? e * -1 : 0,
    b = g.includes("bottom") ? e : r.includes("top") ? e * -1 : 0,
    x = S.useCallback(
      ({ clientX: C, clientY: R }) => {
        m.setPositionReference({
          getBoundingClientRect() {
            return {
              width: 0,
              height: 0,
              x: C,
              y: R,
              left: C + y,
              top: R + b,
              right: C,
              bottom: R,
            };
          },
        });
      },
      [d.reference],
    );
  return (
    S.useEffect(() => {
      if (m.floating.current) {
        const C = c.current;
        C.addEventListener("mousemove", x);
        const R = Fa(m.floating.current);
        return (
          R.forEach((T) => {
            T.addEventListener("scroll", v);
          }),
          () => {
            (C.removeEventListener("mousemove", x),
              R.forEach((T) => {
                T.removeEventListener("scroll", v);
              }));
          }
        );
      }
    }, [d.reference, m.floating.current, v, x, l]),
    {
      handleMouseMove: x,
      x: u,
      y: f,
      opened: l,
      setOpened: s,
      boundaryRef: c,
      floating: m.setFloating,
    }
  );
}
var qf = { tooltip: "m_1b3c8819", arrow: "m_f898399f" };
const UN = {
    refProp: "ref",
    withinPortal: !0,
    offset: 10,
    position: "right",
    zIndex: Xa("popover"),
  },
  sC = (e, { radius: r, color: o }) => ({
    tooltip: {
      "--tooltip-radius": r === void 0 ? void 0 : Ln(r),
      "--tooltip-bg": o ? ur(o, e) : void 0,
      "--tooltip-color": o ? "var(--mantine-color-white)" : void 0,
    },
  }),
  Yf = He((e) => {
    const r = Ee("TooltipFloating", UN, e),
      {
        children: o,
        refProp: l,
        withinPortal: s,
        style: c,
        className: u,
        classNames: f,
        styles: d,
        unstyled: m,
        radius: v,
        color: g,
        label: y,
        offset: b,
        position: x,
        multiline: C,
        zIndex: R,
        disabled: T,
        defaultOpened: _,
        variant: D,
        vars: j,
        portalProps: z,
        attributes: H,
        ref: $,
        ...M
      } = r,
      K = mn(),
      Y = Ze({
        name: "TooltipFloating",
        props: r,
        classes: qf,
        className: u,
        style: c,
        classNames: f,
        styles: d,
        unstyled: m,
        attributes: H,
        rootSelector: "tooltip",
        vars: j,
        varsResolver: sC,
      }),
      {
        handleMouseMove: ee,
        x: ne,
        y: oe,
        opened: U,
        boundaryRef: re,
        floating: N,
        setOpened: k,
      } = HN({ offset: b, position: x, defaultOpened: _ }),
      B = El(o);
    if (!B)
      throw new Error(
        "[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported",
      );
    const F = tn(re, hf(B), $),
      Z = B.props,
      O = (Q) => {
        (Z.onMouseEnter?.(Q), ee(Q), k(!0));
      },
      P = (Q) => {
        (Z.onMouseLeave?.(Q), k(!1));
      };
    return w.jsxs(w.Fragment, {
      children: [
        w.jsx(Sl, {
          ...z,
          withinPortal: s,
          children: w.jsx(Ne, {
            ...M,
            ...Y("tooltip", {
              style: {
                ...Dp(c, K),
                zIndex: R,
                display: !T && U ? "block" : "none",
                top: (oe && Math.round(oe)) ?? "",
                left: (ne && Math.round(ne)) ?? "",
              },
            }),
            variant: D,
            ref: N,
            mod: { multiline: C },
            children: y,
          }),
        }),
        S.cloneElement(B, { ...Z, [l]: F, onMouseEnter: O, onMouseLeave: P }),
      ],
    });
  });
Yf.classes = qf;
Yf.varsResolver = sC;
Yf.displayName = "@mantine/core/TooltipFloating";
const cC = S.createContext({ withinGroup: !1 }),
  PN = { openDelay: 0, closeDelay: 0 };
function hg(e) {
  const { openDelay: r, closeDelay: o, children: l } = Ee("TooltipGroup", PN, e);
  return w.jsx(cC, {
    value: { withinGroup: !0 },
    children: w.jsx(QD, { delay: { open: r, close: o }, children: l }),
  });
}
hg.displayName = "@mantine/core/TooltipGroup";
hg.extend = (e) => e;
function VN(e) {
  if (e === void 0) return { shift: !0, flip: !0 };
  const r = { ...e };
  return (e.shift === void 0 && (r.shift = !0), e.flip === void 0 && (r.flip = !0), r);
}
function IN(e) {
  const r = VN(e.middlewares),
    o = [ow(e.offset)];
  return (
    r.shift &&
      o.push(Bp(typeof r.shift == "boolean" ? { padding: 8 } : { padding: 8, ...r.shift })),
    r.flip && o.push(typeof r.flip == "boolean" ? of() : of(r.flip)),
    o.push(lw({ element: e.arrowRef, padding: e.arrowOffset })),
    r.inline
      ? o.push(typeof r.inline == "boolean" ? Bs() : Bs(r.inline))
      : e.inline && o.push(Bs()),
    o
  );
}
function FN(e) {
  const [r, o] = S.useState(e.defaultOpened),
    l = typeof e.opened == "boolean" ? e.opened : r,
    s = S.use(cC).withinGroup,
    c = Wr(),
    u = S.useCallback(
      (j) => {
        (o(j), j && R(c));
      },
      [c],
    ),
    {
      x: f,
      y: d,
      context: m,
      refs: v,
      placement: g,
      middlewareData: { arrow: { x: y, y: b } = {} },
    } = Cf({
      strategy: e.strategy,
      placement: e.position,
      open: l,
      onOpenChange: u,
      middleware: IN(e),
      whileElementsMounted: ep,
    }),
    { delay: x, currentId: C, setCurrentId: R } = ZD(m, { id: c }),
    { getReferenceProps: T, getFloatingProps: _ } = fw([
      cw(m, {
        enabled: e.events?.hover,
        delay: s ? x : { open: e.openDelay, close: e.closeDelay },
        mouseOnly: !e.events?.touch,
      }),
      rA(m, { enabled: e.events?.focus, visibleOnly: !0 }),
      oA(m, { role: "tooltip" }),
      tA(m, { enabled: typeof e.opened > "u" }),
    ]);
  yl(() => {
    e.onPositionChange?.(g);
  }, [g]);
  const D = l && C && C !== c;
  return {
    x: f,
    y: d,
    arrowX: y,
    arrowY: b,
    reference: v.setReference,
    floating: v.setFloating,
    getFloatingProps: _,
    getReferenceProps: T,
    isGroupPhase: D,
    opened: l,
    placement: g,
  };
}
const qN = {
    position: "top",
    refProp: "ref",
    withinPortal: !0,
    arrowSize: 4,
    arrowOffset: 5,
    arrowRadius: 0,
    arrowPosition: "side",
    offset: 5,
    transitionProps: { duration: 100, transition: "fade" },
    events: { hover: !0, focus: !1, touch: !1 },
    zIndex: Xa("popover"),
    middlewares: { flip: !0, shift: !0, inline: !1 },
  },
  uC = (e, { radius: r, color: o, variant: l, autoContrast: s }) => {
    const c = e.variantColorResolver({
      theme: e,
      color: o || e.primaryColor,
      autoContrast: s,
      variant: l || "filled",
    });
    return {
      tooltip: {
        "--tooltip-radius": r === void 0 ? void 0 : Ln(r),
        "--tooltip-bg": o ? c.background : void 0,
        "--tooltip-color": o ? c.color : void 0,
      },
    };
  },
  Or = He((e) => {
    const r = Ee("Tooltip", qN, e),
      {
        children: o,
        position: l,
        refProp: s,
        label: c,
        openDelay: u,
        closeDelay: f,
        onPositionChange: d,
        opened: m,
        defaultOpened: v,
        withinPortal: g,
        radius: y,
        color: b,
        classNames: x,
        styles: C,
        unstyled: R,
        style: T,
        className: _,
        withArrow: D,
        arrowSize: j,
        arrowOffset: z,
        arrowRadius: H,
        arrowPosition: $,
        offset: M,
        transitionProps: K,
        multiline: Y,
        events: ee,
        zIndex: ne,
        disabled: oe,
        onClick: U,
        onMouseEnter: re,
        onMouseLeave: N,
        inline: k,
        variant: B,
        keepMounted: F,
        vars: Z,
        portalProps: O,
        mod: P,
        floatingStrategy: Q,
        middlewares: ae,
        autoContrast: ie,
        attributes: ue,
        target: ge,
        ref: Se,
        ...Ce
      } = r,
      { dir: Ye } = Za(),
      je = S.useRef(null),
      de = FN({
        position: Vp(Ye, l),
        closeDelay: f,
        openDelay: u,
        onPositionChange: d,
        opened: m,
        defaultOpened: v,
        events: ee,
        arrowRef: je,
        arrowOffset: z,
        offset: typeof M == "number" ? M + (D ? j / 2 : 0) : M,
        inline: k,
        strategy: Q,
        middlewares: ae,
      });
    S.useEffect(() => {
      const Me =
        ge instanceof HTMLElement
          ? ge
          : typeof ge == "string"
            ? document.querySelector(ge)
            : ge?.current || null;
      Me && de.reference(Me);
    }, [ge, de]);
    const _e = Ze({
        name: "Tooltip",
        props: r,
        classes: qf,
        className: _,
        style: T,
        classNames: x,
        styles: C,
        unstyled: R,
        attributes: ue,
        rootSelector: "tooltip",
        vars: Z,
        varsResolver: uC,
      }),
      ze = El(o);
    if (!ge && !ze)
      throw new Error(
        "[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported",
      );
    const Oe = _e("tooltip");
    if (ge) {
      const Me = m1(K, { duration: 100, transition: "fade" });
      return w.jsx(w.Fragment, {
        children: w.jsx(Sl, {
          ...O,
          withinPortal: g,
          children: w.jsx($o, {
            ...Me,
            keepMounted: F,
            mounted: !oe && !!de.opened,
            duration: de.isGroupPhase ? 10 : Me.duration,
            children: (xe) =>
              w.jsxs(Ne, {
                ...Ce,
                "data-fixed": Q === "fixed" || void 0,
                variant: B,
                mod: [{ multiline: Y }, P],
                ...Oe,
                ...de.getFloatingProps({
                  ref: de.floating,
                  className: Oe.className,
                  style: { ...Oe.style, ...xe, zIndex: ne, top: de.y ?? 0, left: de.x ?? 0 },
                }),
                children: [
                  c,
                  w.jsx(lf, {
                    ref: je,
                    arrowX: de.arrowX,
                    arrowY: de.arrowY,
                    visible: D,
                    position: de.placement,
                    arrowSize: j,
                    arrowOffset: z,
                    arrowRadius: H,
                    arrowPosition: $,
                    ..._e("arrow"),
                  }),
                ],
              }),
          }),
        }),
      });
    }
    const at = ze.props,
      be = tn(de.reference, hf(ze), Se),
      we = m1(K, { duration: 100, transition: "fade" });
    return w.jsxs(w.Fragment, {
      children: [
        w.jsx(Sl, {
          ...O,
          withinPortal: g,
          children: w.jsx($o, {
            ...we,
            keepMounted: F,
            mounted: !oe && !!de.opened,
            duration: de.isGroupPhase ? 10 : we.duration,
            children: (Me) =>
              w.jsxs(Ne, {
                ...Ce,
                "data-fixed": Q === "fixed" || void 0,
                variant: B,
                mod: [{ multiline: Y }, P],
                ...de.getFloatingProps({
                  ref: de.floating,
                  className: _e("tooltip").className,
                  style: {
                    ..._e("tooltip").style,
                    ...Me,
                    zIndex: ne,
                    top: de.y ?? 0,
                    left: de.x ?? 0,
                  },
                }),
                children: [
                  c,
                  w.jsx(lf, {
                    ref: je,
                    arrowX: de.arrowX,
                    arrowY: de.arrowY,
                    visible: D,
                    position: de.placement,
                    arrowSize: j,
                    arrowOffset: z,
                    arrowRadius: H,
                    arrowPosition: $,
                    ..._e("arrow"),
                  }),
                ],
              }),
          }),
        }),
        S.cloneElement(
          ze,
          de.getReferenceProps({
            onClick: U,
            onMouseEnter: re,
            onMouseLeave: N,
            onMouseMove: r.onMouseMove,
            onPointerDown: r.onPointerDown,
            onPointerEnter: r.onPointerEnter,
            ...at,
            className: Dn(_, at.className),
            [s]: be,
          }),
        ),
      ],
    });
  });
Or.classes = qf;
Or.varsResolver = uC;
Or.displayName = "@mantine/core/Tooltip";
Or.Floating = Yf;
Or.Group = hg;
function fC(e) {
  if (e !== void 0) return typeof e == "number" ? pe(e) : e;
}
function YN({ spacing: e, verticalSpacing: r, cols: o, minColWidth: l, autoRows: s, selector: c }) {
  const u = mn(),
    f = r === void 0 ? e : r,
    d = l !== void 0,
    m = xl({
      "--sg-spacing-x": un(fa(e)),
      "--sg-spacing-y": un(fa(f)),
      "--sg-auto-rows": s,
      ...(d ? { "--sg-min-col-width": fC(l) } : { "--sg-cols": fa(o)?.toString() }),
    }),
    v = wn(u.breakpoints).reduce(
      (g, y) => (
        g[y] || (g[y] = {}),
        typeof e == "object" && e[y] !== void 0 && (g[y]["--sg-spacing-x"] = un(e[y])),
        typeof f == "object" && f[y] !== void 0 && (g[y]["--sg-spacing-y"] = un(f[y])),
        !d && typeof o == "object" && o[y] !== void 0 && (g[y]["--sg-cols"] = o[y]),
        g
      ),
      {},
    );
  return w.jsx(nc, {
    styles: m,
    media: SS(wn(v), u.breakpoints)
      .filter((g) => wn(v[g.value]).length > 0)
      .map((g) => ({ query: `(min-width: ${u.breakpoints[g.value]})`, styles: v[g.value] })),
    selector: c,
  });
}
function zm(e) {
  return typeof e == "object" && e !== null ? wn(e) : [];
}
function GN(e) {
  return e.sort((r, o) => vl(r) - vl(o));
}
function XN({ spacing: e, verticalSpacing: r, cols: o, minColWidth: l }) {
  return GN(Array.from(new Set([...zm(e), ...zm(r), ...(l !== void 0 ? [] : zm(o))])));
}
function KN({ spacing: e, verticalSpacing: r, cols: o, minColWidth: l, autoRows: s, selector: c }) {
  const u = r === void 0 ? e : r,
    f = l !== void 0,
    d = xl({
      "--sg-spacing-x": un(fa(e)),
      "--sg-spacing-y": un(fa(u)),
      "--sg-auto-rows": s,
      ...(f ? { "--sg-min-col-width": fC(l) } : { "--sg-cols": fa(o)?.toString() }),
    }),
    m = XN({ spacing: e, verticalSpacing: r, cols: o, minColWidth: l }),
    v = m.reduce(
      (g, y) => (
        g[y] || (g[y] = {}),
        typeof e == "object" && e[y] !== void 0 && (g[y]["--sg-spacing-x"] = un(e[y])),
        typeof u == "object" && u[y] !== void 0 && (g[y]["--sg-spacing-y"] = un(u[y])),
        !f && typeof o == "object" && o[y] !== void 0 && (g[y]["--sg-cols"] = o[y]),
        g
      ),
      {},
    );
  return w.jsx(nc, {
    styles: d,
    container: m.map((g) => ({ query: `simple-grid (min-width: ${g})`, styles: v[g] })),
    selector: c,
  });
}
var dC = { container: "m_925c2d2c", root: "m_2415a157" };
const QN = { cols: 1, spacing: "md", type: "media" },
  mg = He((e) => {
    const r = Ee("SimpleGrid", QN, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        vars: f,
        cols: d,
        verticalSpacing: m,
        spacing: v,
        type: g,
        minColWidth: y,
        autoFlow: b,
        autoRows: x,
        attributes: C,
        ...R
      } = r,
      T = Ze({
        name: "SimpleGrid",
        classes: dC,
        props: r,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: C,
        vars: f,
      }),
      _ = _p(),
      D = y !== void 0 ? b || "auto-fill" : void 0;
    return g === "container"
      ? w.jsxs(w.Fragment, {
          children: [
            w.jsx(KN, { ...r, selector: `.${_}` }),
            w.jsx("div", {
              ...T("container"),
              children: w.jsx(Ne, { ...T("root", { className: _ }), ...R, "data-auto-cols": D }),
            }),
          ],
        })
      : w.jsxs(w.Fragment, {
          children: [
            w.jsx(YN, { ...r, selector: `.${_}` }),
            w.jsx(Ne, { ...T("root", { className: _ }), ...R, "data-auto-cols": D }),
          ],
        });
  });
mg.classes = dC;
mg.displayName = "@mantine/core/SimpleGrid";
var hC = { root: "m_6d731127" };
const ZN = { gap: "md", align: "stretch", justify: "flex-start" },
  mC = (e, { gap: r, align: o, justify: l }) => ({
    root: { "--stack-gap": un(r), "--stack-align": o, "--stack-justify": l },
  }),
  Io = He((e) => {
    const r = Ee("Stack", ZN, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        vars: f,
        align: d,
        justify: m,
        gap: v,
        variant: g,
        attributes: y,
        ...b
      } = r;
    return w.jsx(Ne, {
      ...Ze({
        name: "Stack",
        props: r,
        classes: hC,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: y,
        vars: f,
        varsResolver: mC,
      })("root"),
      variant: g,
      ...b,
    });
  });
Io.classes = hC;
Io.varsResolver = mC;
Io.displayName = "@mantine/core/Stack";
const pC = S.createContext(null),
  WN = { hiddenInputValuesSeparator: "," },
  pg = pf((e) => {
    const {
        value: r,
        defaultValue: o,
        onChange: l,
        size: s,
        wrapperProps: c,
        children: u,
        readOnly: f,
        name: d,
        hiddenInputValuesSeparator: m,
        hiddenInputProps: v,
        maxSelectedValues: g,
        disabled: y,
        ...b
      } = Ee("SwitchGroup", WN, e),
      [x, C] = Yr({ value: r, defaultValue: o, finalValue: [], onChange: l }),
      R = (D) => {
        const j = D.currentTarget.value;
        if (f) return;
        const z = x.includes(j);
        (!z && g && x.length >= g) || C(z ? x.filter((H) => H !== j) : [...x, j]);
      },
      T = (D) => {
        if (y) return !0;
        if (!g) return !1;
        const j = x.includes(D),
          z = x.length >= g;
        return !j && z;
      },
      _ = x.join(m);
    return w.jsx(pC, {
      value: { value: x, onChange: R, size: s, isDisabled: T },
      children: w.jsxs(en.Wrapper, {
        size: s,
        ...c,
        ...b,
        labelElement: "div",
        __staticSelector: "SwitchGroup",
        children: [
          w.jsx(gx, { role: "group", children: u }),
          w.jsx("input", { type: "hidden", name: d, value: _, ...v }),
        ],
      }),
    });
  });
pg.classes = en.Wrapper.classes;
pg.displayName = "@mantine/core/SwitchGroup";
var gC = {
  root: "m_5f93f3bb",
  input: "m_926b4011",
  track: "m_9307d992",
  thumb: "m_93039a1d",
  trackLabel: "m_8277e082",
};
const JN = { labelPosition: "right", withThumbIndicator: !0 },
  vC = (e, { radius: r, color: o, size: l }) => ({
    root: {
      "--switch-radius": r === void 0 ? void 0 : Ln(r),
      "--switch-height": gt(l, "switch-height"),
      "--switch-width": gt(l, "switch-width"),
      "--switch-thumb-size": gt(l, "switch-thumb-size"),
      "--switch-label-font-size": gt(l, "switch-label-font-size"),
      "--switch-track-label-padding": gt(l, "switch-track-label-padding"),
      "--switch-color": o ? ur(o, e) : void 0,
    },
  }),
  fc = He((e) => {
    const r = Ee("Switch", JN, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        vars: f,
        color: d,
        label: m,
        offLabel: v,
        onLabel: g,
        id: y,
        size: b,
        radius: x,
        wrapperProps: C,
        thumbIcon: R,
        checked: T,
        defaultChecked: _,
        onChange: D,
        labelPosition: j,
        description: z,
        error: H,
        disabled: $,
        variant: M,
        rootRef: K,
        mod: Y,
        withThumbIndicator: ee,
        attributes: ne,
        ...oe
      } = r,
      U = S.use(pC),
      re = b || U?.size,
      N = Ze({
        name: "Switch",
        props: r,
        classes: gC,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: ne,
        vars: f,
        varsResolver: vC,
      }),
      { styleProps: k, rest: B } = Ei(oe),
      F = Wr(y),
      Z =
        [
          z ? `${F}-description` : void 0,
          H && typeof H != "boolean" ? `${F}-error` : void 0,
          B["aria-describedby"],
        ]
          .filter(Boolean)
          .join(" ") || void 0,
      O = {
        checked: U?.value.includes(B.value) ?? T,
        onChange: (ie) => {
          (U?.onChange(ie), D?.(ie));
        },
      },
      P = $ || U?.isDisabled?.(B.value),
      [Q, ae] = Yr({ value: O.checked ?? T, defaultValue: _, finalValue: !1 });
    return w.jsxs(rg, {
      ...N("root"),
      __staticSelector: "Switch",
      __stylesApiProps: r,
      id: F,
      size: re,
      labelPosition: j,
      label: m,
      description: z,
      error: H,
      disabled: P,
      bodyElement: "label",
      labelElement: "span",
      classNames: o,
      styles: c,
      unstyled: u,
      "data-checked": O.checked,
      variant: M,
      ref: K,
      mod: Y,
      attributes: ne,
      inert: B.inert,
      ...k,
      ...C,
      children: [
        w.jsx("input", {
          ...B,
          ...O,
          disabled: P,
          checked: Q,
          "data-checked": O.checked,
          onChange: (ie) => {
            (O.onChange?.(ie), ae(ie.currentTarget.checked));
          },
          id: F,
          type: "checkbox",
          role: "switch",
          inert: B.inert,
          "aria-describedby": Z,
          ...N("input"),
        }),
        w.jsxs(Ne, {
          "aria-hidden": "true",
          component: "span",
          mod: { error: H, "label-position": j, "without-labels": !g && !v },
          ...N("track"),
          children: [
            w.jsx(Ne, {
              component: "span",
              mod: { "reduce-motion": !0, "with-thumb-indicator": ee && !R },
              ...N("thumb"),
              children: R,
            }),
            w.jsx("span", { ...N("trackLabel"), children: Q ? g : v }),
          ],
        }),
      ],
    });
  });
fc.classes = { ...gC, ...Rx };
fc.varsResolver = vC;
fc.displayName = "@mantine/core/Switch";
fc.Group = pg;
const e3 = ["h1", "h2", "h3", "h4", "h5", "h6"],
  t3 = ["xs", "sm", "md", "lg", "xl"];
function n3(e, r) {
  const o = r !== void 0 ? r : `h${e}`;
  return e3.includes(o)
    ? {
        fontSize: `var(--mantine-${o}-font-size)`,
        fontWeight: `var(--mantine-${o}-font-weight)`,
        lineHeight: `var(--mantine-${o}-line-height)`,
      }
    : t3.includes(o)
      ? {
          fontSize: `var(--mantine-font-size-${o})`,
          fontWeight: `var(--mantine-h${e}-font-weight)`,
          lineHeight: `var(--mantine-h${e}-line-height)`,
        }
      : {
          fontSize: pe(o),
          fontWeight: `var(--mantine-h${e}-font-weight)`,
          lineHeight: `var(--mantine-h${e}-line-height)`,
        };
}
var yC = { root: "m_8a5d1357" };
const r3 = { order: 1 },
  bC = (e, { order: r, size: o, lineClamp: l, textWrap: s }) => {
    const c = n3(r || 1, o);
    return {
      root: {
        "--title-fw": c.fontWeight,
        "--title-lh": c.lineHeight,
        "--title-fz": c.fontSize,
        "--title-line-clamp": typeof l == "number" ? l.toString() : void 0,
        "--title-text-wrap": s,
      },
    };
  },
  Pn = He((e) => {
    const r = Ee("Title", r3, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        order: f,
        vars: d,
        size: m,
        variant: v,
        lineClamp: g,
        textWrap: y,
        mod: b,
        attributes: x,
        ...C
      } = r,
      R = Ze({
        name: "Title",
        props: r,
        classes: yC,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: x,
        vars: d,
        varsResolver: bC,
      });
    return [1, 2, 3, 4, 5, 6].includes(f)
      ? w.jsx(Ne, {
          ...R("root"),
          component: `h${f}`,
          variant: v,
          mod: [{ order: f, "data-line-clamp": typeof g == "number" }, b],
          size: m,
          ...C,
        })
      : null;
  });
Pn.classes = yC;
Pn.varsResolver = bC;
Pn.displayName = "@mantine/core/Title";
function dl(e, r) {
  for (const o of r) {
    if (o.value === e) return o;
    if (Array.isArray(o.children)) {
      const l = dl(e, o.children);
      if (l) return l;
    }
  }
  return null;
}
function sf(e, r, o = []) {
  const l = dl(e, r);
  return l
    ? !Array.isArray(l.children) || l.children.length === 0
      ? [l.value]
      : (l.children.forEach((s) => {
          Array.isArray(s.children) && s.children.length > 0 ? sf(s.value, r, o) : o.push(s.value);
        }),
        o)
    : o;
}
function Gf(e, r, o = []) {
  const l = [];
  for (const s of e)
    if (Array.isArray(s.children) && s.children.length > 0) {
      const c = Gf(s.children, r, o);
      if (c.currentTreeChecked.length === s.children.length) {
        const u = c.currentTreeChecked.every((d) => d.checked),
          f = { checked: u, indeterminate: !u, value: s.value, hasChildren: !0 };
        (l.push(f), o.push(f));
      } else if (c.currentTreeChecked.length > 0) {
        const u = { checked: !1, indeterminate: !0, value: s.value, hasChildren: !0 };
        (l.push(u), o.push(u));
      }
    } else if (r.includes(s.value)) {
      const c = { checked: !0, indeterminate: !1, value: s.value, hasChildren: !1 };
      (l.push(c), o.push(c));
    }
  return { result: o, currentTreeChecked: l };
}
function op(e, r, o) {
  return o.length === 0
    ? !1
    : o.includes(e)
      ? !0
      : Gf(r, o).result.some((l) => l.value === e && l.checked);
}
function a3(e, r, o) {
  return o.length === 0 ? !1 : Gf(r, o).result.some((l) => l.value === e && l.indeterminate);
}
function SC(e, r, o, l = {}) {
  return (
    r.forEach((s) => {
      ((l[s.value] = s.value in e ? e[s.value] : s.value === o),
        Array.isArray(s.children) && SC(e, s.children, o, l));
    }),
    l
  );
}
function zu(e, r) {
  const o = SC({}, e, []);
  if (r === "*") {
    const l = {},
      s = Object.keys(o);
    for (let c = 0; c < s.length; c++) l[s[c]] = !0;
    return l;
  }
  return (
    r.forEach((l) => {
      o[l] = !0;
    }),
    o
  );
}
function o3(e, r) {
  return (typeof r.label == "string" ? r.label : r.value)
    .toLowerCase()
    .includes(e.toLowerCase().trim());
}
function wC(e, r, o = o3) {
  if (!r.trim()) return e;
  const l = [];
  for (const s of e) {
    const c = o(r, s),
      u = Array.isArray(s.children) && s.children.length > 0 ? wC(s.children, r, o) : [];
    (c || u.length > 0) && l.push(u.length > 0 ? { ...s, children: u } : { ...s });
  }
  return l;
}
var Ao = {
  optionsWrapper: "m_529d33e8",
  option: "m_28bb748",
  expandIcon: "m_aa3e3f86",
  checkIcon: "m_eaa4cdee",
  label: "m_ffe3a9c1",
  guideLine: "m_57207d5d",
  branchVertical: "m_41b9db0b",
  branchHorizontal: "m_1246e79",
};
const Do = 20,
  ku = 8,
  l3 = 5,
  i3 = 6;
function xC({
  node: e,
  level: r,
  expanded: o,
  hasChildren: l,
  selected: s,
  checked: c,
  indeterminate: u,
  showCheckbox: f,
  isLastChild: d,
  lineGuides: m,
  withLines: v,
  onToggleExpand: g,
  renderNode: y,
  chevronAriaLabels: b,
}) {
  const x = (r - 1) * Do,
    C = (H) => {
      (H.stopPropagation(), H.preventDefault(), g(e.value));
    },
    R = (H) => {
      H.preventDefault();
    },
    T = y
      ? y({
          node: e,
          level: r,
          expanded: o,
          hasChildren: l,
          selected: s,
          checked: c,
          indeterminate: u,
        })
      : null,
    _ =
      v && r > 1
        ? w.jsxs(w.Fragment, {
            children: [
              m.map((H, $) =>
                H
                  ? w.jsx(
                      "span",
                      {
                        className: Ao.guideLine,
                        style: { insetInlineStart: ku + ($ + 1) * Do - Do / 2 },
                      },
                      `g${$}`,
                    )
                  : null,
              ),
              w.jsx("span", {
                className: Ao.branchVertical,
                "data-last": d || void 0,
                style: { insetInlineStart: ku + (r - 1) * Do - Do / 2 },
              }),
              w.jsx("span", {
                className: Ao.branchHorizontal,
                style: { insetInlineStart: ku + (r - 1) * Do - Do / 2, width: Do / 2 },
              }),
            ],
          })
        : null,
    D = s || c,
    j = !f && D,
    z = f ? (u && !c ? "mixed" : c) : void 0;
  return w.jsxs(St.Option, {
    value: e.value,
    disabled: e.nodeProps?.disabled,
    active: D,
    className: Ao.option,
    style: { paddingInlineStart: ku + x + (v && r > 1 ? l3 : 0) + (l ? 0 : i3) },
    "aria-selected": D,
    "aria-level": r,
    "aria-expanded": l ? o : void 0,
    "aria-checked": z,
    children: [
      _,
      T ||
        w.jsxs(w.Fragment, {
          children: [
            l &&
              w.jsx("span", {
                className: Ao.expandIcon,
                "data-expanded": o || void 0,
                onClick: C,
                onKeyDown: (H) => {
                  H.key === "Enter" && C(H);
                },
                onMouseDown: R,
                role: "button",
                tabIndex: -1,
                "aria-label": o ? (b?.collapse ?? "Collapse") : (b?.expand ?? "Expand"),
                children: w.jsx(Is, { size: "80%" }),
              }),
            f && w.jsx(sc, { checked: c || u, indeterminate: !c && u, size: "18px" }),
            w.jsx("span", { className: Ao.label, children: e.label }),
            j && w.jsx(Sx, { className: Ao.checkIcon }),
          ],
        }),
    ],
  });
}
xC.displayName = "@mantine/core/TreeSelectOption";
function CC(e, r, o, l, s, c) {
  for (let u = 0; u < r.length; u++) {
    const f = r[u],
      d = u === r.length - 1,
      m = Array.isArray(f.children),
      v = !!f.hasChildren && !m,
      g = m || v,
      y = o[f.value] || !1;
    if (
      (e.push({
        node: f,
        level: s,
        parent: l,
        hasChildren: g,
        expanded: y,
        isLastChild: d,
        lineGuides: c,
      }),
      y && m)
    ) {
      const b = s >= 2 ? [...c, !d] : [];
      CC(e, f.children, o, f.value, s + 1, b);
    }
  }
}
function s3(e, r) {
  const o = [];
  return (CC(o, e, r, null, 1, []), o);
}
function c3(e, r) {
  const o = new Set();
  for (const l of e) for (const s of sf(l, r)) o.add(s);
  return Array.from(o);
}
function EC(e, r) {
  const o = [];
  for (const l of e)
    op(l.value, e, r)
      ? o.push(l.value)
      : Array.isArray(l.children) && l.children.length > 0 && o.push(...EC(l.children, r));
  return o;
}
function D1(e, r, o) {
  if (e.length === 0) return [];
  switch (o) {
    case "child":
      return e;
    case "all":
      return Gf(r, e)
        .result.filter((l) => l.checked)
        .map((l) => l.value);
    case "parent":
      return EC(r, e);
    default:
      return e;
  }
}
const u3 = {
    mode: "single",
    allowDeselect: !0,
    checkedStrategy: "child",
    maxValues: 1 / 0,
    hiddenInputValuesDivider: ",",
    clearSearchOnChange: !0,
    openOnFocus: !0,
    size: "sm",
    withLines: !0,
  },
  A1 = { xs: 41, sm: 50, md: 60, lg: 72, xl: 89 };
function RC(e, r) {
  for (const o of r) {
    if (o.value === e) return [];
    if (Array.isArray(o.children)) {
      const l = RC(e, o.children);
      if (l !== null) return [o.value, ...l];
    }
  }
  return null;
}
const gg = pf((e) => {
  const r = Ee(["Input", "InputWrapper", "TreeSelect"], u3, e),
    {
      classNames: o,
      className: l,
      style: s,
      styles: c,
      unstyled: u,
      vars: f,
      size: d,
      data: m,
      mode: v,
      value: g,
      defaultValue: y,
      onChange: b,
      checkStrictly: x,
      checkedStrategy: C,
      defaultExpandedValues: R,
      defaultExpandAll: T,
      expandedValues: _,
      onExpandedChange: D,
      expandOnClick: j,
      searchable: z,
      searchValue: H,
      defaultSearchValue: $,
      onSearchChange: M,
      filter: K,
      nothingFoundMessage: Y,
      allowDeselect: ee,
      clearable: ne,
      clearSectionMode: oe,
      clearButtonProps: U,
      maxValues: re,
      maxDisplayedValues: N,
      maxDisplayedValuesContent: k,
      onRemove: B,
      onClear: F,
      renderNode: Z,
      withLines: O,
      hiddenInputProps: P,
      hiddenInputValuesDivider: Q,
      scrollAreaProps: ae,
      chevronColor: ie,
      maxDropdownHeight: ue,
      dropdownOpened: ge,
      defaultDropdownOpened: Se,
      onDropdownOpen: Ce,
      onDropdownClose: Ye,
      comboboxProps: je,
      clearSearchOnChange: de,
      openOnFocus: _e,
      chevronAriaLabels: ze,
      variant: Oe,
      onKeyDown: at,
      onFocus: be,
      onBlur: we,
      onClick: Me,
      readOnly: xe,
      disabled: Be,
      radius: Ve,
      rightSection: Xe,
      rightSectionWidth: ot,
      rightSectionPointerEvents: We,
      rightSectionProps: Ie,
      leftSection: Yt,
      leftSectionWidth: pn,
      leftSectionPointerEvents: Gt,
      leftSectionProps: zt,
      inputContainer: nn,
      inputWrapperOrder: An,
      withAsterisk: Vt,
      labelProps: Ht,
      descriptionProps: At,
      errorProps: Ft,
      wrapperProps: zr,
      description: kr,
      label: Lr,
      error: Mn,
      withErrorStyles: gn,
      name: Nn,
      form: rn,
      id: Bn,
      placeholder: xn,
      required: Re,
      mod: $e,
      attributes: Xt,
      ...an
    } = r,
    yt = v === "multiple" || v === "checkbox",
    kt = v === "checkbox",
    Tt = Wr(Bn),
    L = mx({
      opened: ge,
      defaultOpened: Se,
      onDropdownOpen: () => {
        (Ce?.(), L.updateSelectedOptionIndex("active", { scrollIntoView: !0 }));
      },
      onDropdownClose: () => {
        (Ye?.(), L.resetSelectedOption());
      },
    }),
    I = S.useMemo(() => (T ? zu(m, "*") : R ? zu(m, R) : zu(m, [])), []),
    [G, ce] = Yr({
      value: S.useCallback(
        (ye) => {
          if (ye) return zu(m, ye);
        },
        [m],
      )(_),
      defaultValue: I,
      finalValue: {},
      onChange: (ye) => {
        D &&
          D(
            Object.entries(ye)
              .filter(([, nt]) => nt)
              .map(([nt]) => nt),
          );
      },
    }),
    he = S.useCallback(
      (ye) => {
        ce({ ...G, [ye]: !G[ye] });
      },
      [G],
    ),
    [Te, De] = Yr({
      value: H,
      defaultValue: $,
      finalValue: S.useMemo(() => {
        if (v !== "single" || !y) return "";
        const ye = dl(y, m);
        return ye && typeof ye.label == "string" ? ye.label : "";
      }, []),
      onChange: M,
    }),
    Ae = (ye) => {
      (De(ye), L.resetSelectedOption());
    },
    [ve, Ue] = Yr({ value: g, defaultValue: y, finalValue: yt ? [] : null, onChange: b }),
    ke = S.useMemo(
      () => (!kt || !ve || !Array.isArray(ve) ? [] : x ? ve : c3(ve, m)),
      [kt, ve, m, x],
    ),
    Ke = S.useMemo(() => {
      if (!z || !Te) return m;
      if (v === "single" && ve) {
        const ye = dl(ve, m);
        if (ye && Te === (typeof ye.label == "string" ? ye.label : "")) return m;
      }
      return wC(m, Te, K);
    }, [m, Te, K, z, v, ve]),
    qe = S.useMemo(() => {
      if (Te && Ke !== m) {
        const ye = { ...G },
          nt = (lt) => {
            for (const bt of lt)
              Array.isArray(bt.children) &&
                bt.children.length > 0 &&
                ((ye[bt.value] = !0), nt(bt.children));
          };
        return (nt(Ke), ye);
      }
      return G;
    }, [Ke, G, Te, m]),
    et = S.useMemo(() => s3(Ke, qe), [Ke, qe]),
    ut = S.useRef(et);
  ut.current = et;
  const Mt = S.useMemo(() => {
      const ye = {},
        nt = (lt) => {
          for (const bt of lt) ((ye[bt.value] = bt), Array.isArray(bt.children) && nt(bt.children));
        };
      return (nt(m), ye);
    }, [m]),
    ht = (ye) => {
      const nt = Mt[ye];
      return nt && typeof nt.label == "string" ? nt.label : ye;
    },
    st = Ze({
      name: "TreeSelect",
      classes: {},
      props: r,
      classNames: o,
      styles: c,
      unstyled: u,
      attributes: Xt,
    }),
    { resolvedClassNames: Bt, resolvedStyles: ct } = tc({ props: r, styles: c, classNames: o }),
    {
      styleProps: Br,
      rest: { type: fr, autoComplete: Cn, ...vn },
    } = Ei(an),
    $n = (ye) => {
      if (v === "single") {
        if (j) {
          const lt = dl(ye, m);
          if (lt && Array.isArray(lt.children) && lt.children.length > 0) {
            he(ye);
            return;
          }
        }
        const nt = ee && ye === ve ? null : ye;
        (Ue(nt), L.closeDropdown(), de && Ae(nt ? ht(nt) : ""));
      } else if (v === "multiple") {
        if (j) {
          const lt = dl(ye, m);
          if (lt && Array.isArray(lt.children) && lt.children.length > 0) {
            he(ye);
            return;
          }
        }
        const nt = ve || [];
        if (nt.includes(ye)) (Ue(nt.filter((lt) => lt !== ye)), B?.(ye));
        else if (nt.length < (re ?? 1 / 0)) Ue([...nt, ye]);
        else return;
        de && De("");
      } else if (v === "checkbox") {
        const nt = x ? ke.includes(ye) : op(ye, m, ke);
        let lt;
        if (x) lt = nt ? ke.filter((bn) => bn !== ye) : [...ke, ye];
        else {
          const bn = sf(ye, m);
          nt ? (lt = ke.filter((Fo) => !bn.includes(Fo))) : (lt = [...new Set([...ke, ...bn])]);
        }
        const bt = D1(lt, m, C);
        if (!nt && bt.length > (re ?? 1 / 0)) return;
        if ((Ue(bt), de && De(""), j)) {
          const bn = dl(ye, m);
          bn && Array.isArray(bn.children) && bn.children.length > 0 && (G[ye] || he(ye));
        }
      }
    },
    Sa = (ye) => {
      if (
        (at?.(ye),
        ye.key === " " && !z && yt && (ye.preventDefault(), L.toggleDropdown()),
        ye.key === "Backspace" && Te.length === 0 && yt)
      ) {
        const bt = ve || [];
        if (bt.length > 0) {
          const bn = bt[bt.length - 1];
          (B?.(bn), Ue(bt.slice(0, -1)));
        }
      }
      if (!L.dropdownOpened) return;
      const nt = L.getSelectedOptionIndex();
      if (nt < 0 || nt >= ut.current.length) return;
      const lt = ut.current[nt];
      if (
        (ye.key === "ArrowRight" &&
          lt.hasChildren &&
          !lt.expanded &&
          (ye.preventDefault(), he(lt.node.value)),
        ye.key === "ArrowLeft")
      ) {
        if (lt.hasChildren && lt.expanded) (ye.preventDefault(), he(lt.node.value));
        else if (lt.parent) {
          ye.preventDefault();
          const bt = ut.current.findIndex((bn) => bn.node.value === lt.parent);
          bt >= 0 && L.selectOption(bt);
        }
      }
    };
  S.useEffect(() => {
    v !== "single" || !z || (g === null ? Ae("") : typeof g == "string" && Ae(ht(g)));
  }, [g]);
  const In = S.useRef(!1);
  S.useEffect(() => {
    if (L.dropdownOpened && !In.current && z && ve) {
      const ye = Array.isArray(ve) ? ve : [ve],
        nt = { ...G };
      let lt = !1;
      for (const bt of ye) {
        const bn = RC(bt, m);
        if (bn) for (const Fo of bn) nt[Fo] || ((nt[Fo] = !0), (lt = !0));
      }
      lt &&
        (ce(nt),
        requestAnimationFrame(() => {
          L.updateSelectedOptionIndex("active", { scrollIntoView: !0 });
        }));
    }
    In.current = L.dropdownOpened;
  });
  const wa = w.jsx(St.ClearButton, {
      ...U,
      onClear: () => {
        (F?.(), Ue(yt ? [] : null), Ae(""), L.focusTarget());
      },
    }),
    $r = yt ? Array.isArray(ve) && ve.length > 0 : ve != null && ve !== "",
    er = ne && $r && !Be && !xe,
    Qe = S.useMemo(() => (v !== "single" || !ve ? "" : ht(ve)), [v, ve, Mt]),
    Ct = S.useMemo(() => (!yt || !Array.isArray(ve) ? [] : ve), [yt, ve]),
    Hn = er && yt ? { paddingInlineEnd: A1[d] ?? A1.sm } : void 0,
    tr = N != null ? Ct.slice(0, N) : Ct,
    ea = N != null ? Math.max(0, Ct.length - N) : 0,
    xa = tr.map((ye, nt) =>
      w.jsx(
        gl,
        {
          withRemoveButton: !xe,
          onRemove: () => {
            if (kt) {
              const lt = x ? [ye] : sf(ye, m);
              Ue(
                D1(
                  ke.filter((bt) => !lt.includes(bt)),
                  m,
                  C,
                ),
              );
            } else Ue(ve.filter((lt) => lt !== ye));
            B?.(ye);
          },
          unstyled: u,
          disabled: Be,
          ...st("pill"),
          children: ht(ye),
        },
        `${ye}-${nt}`,
      ),
    );
  if (ea > 0) {
    const ye = typeof k == "function" ? k(ea) : k || `+${ea} more`;
    xa.push(w.jsx(gl, { unstyled: u, disabled: Be, ...st("pill"), children: ye }, "__overflow"));
  }
  const Et = et.length === 0,
    Hr = et.map((ye) => {
      const nt =
          v === "single"
            ? ve === ye.node.value
            : v === "multiple"
              ? (ve || []).includes(ye.node.value)
              : !1,
        lt = kt ? (x ? ke.includes(ye.node.value) : op(ye.node.value, m, ke)) : !1,
        bt = kt && !x ? a3(ye.node.value, m, ke) : !1;
      return w.jsx(
        xC,
        {
          node: ye.node,
          level: ye.level,
          expanded: ye.expanded,
          hasChildren: ye.hasChildren,
          selected: nt,
          checked: lt,
          indeterminate: bt,
          showCheckbox: kt,
          isLastChild: ye.isLastChild,
          lineGuides: ye.lineGuides,
          withLines: !!O,
          onToggleExpand: he,
          renderNode: Z,
          chevronAriaLabels: ze,
        },
        ye.node.value,
      );
    }),
    yn = w.jsx(St.Dropdown, {
      hidden: xe || Be,
      children: w.jsxs(St.Options, {
        className: Ao.optionsWrapper,
        "aria-multiselectable": yt || void 0,
        children: [
          w.jsx(Uo.Autosize, {
            mah: ue ?? 220,
            type: "scroll",
            scrollbarSize: "var(--combobox-padding)",
            offsetScrollbars: "y",
            ...ae,
            children: Hr,
          }),
          Et && Y && w.jsx(St.Empty, { children: Y }),
        ],
      }),
    });
  return yt
    ? w.jsxs(w.Fragment, {
        children: [
          w.jsxs(St, {
            store: L,
            classNames: Bt,
            styles: ct,
            unstyled: u,
            size: d,
            readOnly: xe,
            __staticSelector: "TreeSelect",
            attributes: Xt,
            onOptionSubmit: $n,
            ...je,
            children: [
              w.jsx(St.DropdownTarget, {
                children: w.jsx(Ys, {
                  ...Br,
                  __staticSelector: "TreeSelect",
                  classNames: Bt,
                  styles: ct,
                  unstyled: u,
                  size: d,
                  className: l,
                  style: s,
                  variant: Oe,
                  disabled: Be,
                  radius: Ve,
                  __defaultRightSection: w.jsx(St.Chevron, {
                    size: d,
                    error: Mn,
                    unstyled: u,
                    color: ie,
                  }),
                  __clearSection: wa,
                  __clearable: er,
                  __clearSectionMode: oe,
                  rightSection: Xe,
                  rightSectionPointerEvents: We || "none",
                  rightSectionWidth: ot,
                  rightSectionProps: Ie,
                  leftSection: Yt,
                  leftSectionWidth: pn,
                  leftSectionPointerEvents: Gt,
                  leftSectionProps: zt,
                  inputContainer: nn,
                  inputWrapperOrder: An,
                  withAsterisk: Vt,
                  labelProps: Ht,
                  descriptionProps: At,
                  errorProps: Ft,
                  wrapperProps: zr,
                  description: kr,
                  label: Lr,
                  error: Mn,
                  withErrorStyles: gn,
                  __stylesApiProps: {
                    ...r,
                    rightSectionPointerEvents: We || "none",
                    multiline: !0,
                  },
                  pointer: !z,
                  onClick: () => (z ? L.openDropdown() : L.toggleDropdown()),
                  "data-expanded": L.dropdownOpened || void 0,
                  id: Tt,
                  required: Re,
                  mod: $e,
                  attributes: Xt,
                  children: w.jsxs(gl.Group, {
                    attributes: Xt,
                    disabled: Be,
                    unstyled: u,
                    ...st("pillsList", { style: Hn }),
                    children: [
                      xa,
                      w.jsx(St.EventsTarget, {
                        autoComplete: Cn,
                        children: w.jsx(Ys.Field, {
                          ...vn,
                          id: Tt,
                          placeholder: xn,
                          type: !z && !xn ? "hidden" : "visible",
                          ...st("inputField"),
                          unstyled: u,
                          onFocus: (ye) => {
                            (be?.(ye), _e && z && L.openDropdown());
                          },
                          onBlur: (ye) => {
                            (we?.(ye), L.closeDropdown(), Ae(""));
                          },
                          onKeyDown: Sa,
                          value: Te,
                          onChange: (ye) => {
                            (Ae(ye.currentTarget.value), z && L.openDropdown());
                          },
                          disabled: Be,
                          readOnly: xe || !z,
                          pointer: !z,
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              yn,
            ],
          }),
          w.jsx(St.HiddenInput, {
            name: Nn,
            valuesDivider: Q,
            value: ve,
            form: rn,
            disabled: Be,
            ...P,
          }),
        ],
      })
    : w.jsxs(w.Fragment, {
        children: [
          w.jsxs(St, {
            store: L,
            __staticSelector: "TreeSelect",
            classNames: Bt,
            styles: ct,
            unstyled: u,
            readOnly: xe,
            size: d,
            attributes: Xt,
            onOptionSubmit: $n,
            ...je,
            children: [
              w.jsx(St.Target, {
                targetType: z ? "input" : "button",
                autoComplete: Cn,
                children: w.jsx(Po, {
                  id: Tt,
                  __defaultRightSection: w.jsx(St.Chevron, {
                    size: d,
                    error: Mn,
                    unstyled: u,
                    color: ie,
                  }),
                  __clearSection: wa,
                  __clearable: er,
                  __clearSectionMode: oe,
                  rightSection: Xe,
                  rightSectionPointerEvents: We || "none",
                  ...vn,
                  ...Br,
                  size: d,
                  __staticSelector: "TreeSelect",
                  disabled: Be,
                  readOnly: xe || !z,
                  value: z ? Te : Qe,
                  onChange: (ye) => {
                    (Ae(ye.currentTarget.value), L.openDropdown());
                  },
                  onFocus: (ye) => {
                    (_e && z && L.openDropdown(), be?.(ye));
                  },
                  onBlur: (ye) => {
                    (z && L.closeDropdown(), Ae(ve ? ht(ve) : ""), we?.(ye));
                  },
                  onClick: (ye) => {
                    (z ? L.openDropdown() : L.toggleDropdown(), Me?.(ye));
                  },
                  onKeyDown: Sa,
                  classNames: Bt,
                  styles: ct,
                  unstyled: u,
                  pointer: !z,
                  error: Mn,
                  attributes: Xt,
                  className: l,
                  style: s,
                  variant: Oe,
                  radius: Ve,
                  leftSection: Yt,
                  leftSectionWidth: pn,
                  leftSectionPointerEvents: Gt,
                  leftSectionProps: zt,
                  rightSectionWidth: ot,
                  rightSectionProps: Ie,
                  inputContainer: nn,
                  inputWrapperOrder: An,
                  withAsterisk: Vt,
                  labelProps: Ht,
                  descriptionProps: At,
                  errorProps: Ft,
                  wrapperProps: zr,
                  description: kr,
                  label: Lr,
                  withErrorStyles: gn,
                  placeholder: xn,
                  required: Re,
                  mod: $e,
                }),
              }),
              yn,
            ],
          }),
          w.jsx(St.HiddenInput, { value: ve, name: Nn, form: rn, disabled: Be, ...P }),
        ],
      });
});
gg.classes = { ...Po.classes, ...St.classes };
gg.displayName = "@mantine/core/TreeSelect";
const f3 = "_footer_32mlk_1",
  d3 = "_inner_32mlk_5",
  M1 = { footer: f3, inner: d3 };
function h3() {
  const { setColorScheme: e } = vT();
  return w.jsxs(Wa, {
    children: [
      w.jsx(qa, { color: "orange", onClick: () => e("light"), children: "Light" }),
      w.jsx(qa, { color: "orange", onClick: () => e("dark"), children: "Dark" }),
      w.jsx(qa, { color: "orange", onClick: () => e("auto"), children: "Auto" }),
    ],
  });
}
const m3 = [{ label: "Contact", link: "/contact" }];
function p3() {
  return (
    m3.map((e) =>
      w.jsx(qp, { c: "dimmed", href: e.link, lh: 1, size: "sm", children: e.label }, e.label),
    ),
    w.jsx("div", {
      className: M1.footer,
      children: w.jsx("div", { className: M1.inner, children: w.jsx(h3, {}) }),
    })
  );
}
var g3 = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none",
  },
};
const _l = (e, r, o, l) => {
  const s = S.forwardRef(
    (
      {
        color: c = "currentColor",
        size: u = 24,
        stroke: f = 2,
        title: d,
        className: m,
        children: v,
        ...g
      },
      y,
    ) =>
      S.createElement(
        "svg",
        {
          ref: y,
          ...g3[e],
          width: u,
          height: u,
          className: ["tabler-icon", `tabler-icon-${r}`, m].join(" "),
          strokeWidth: f,
          stroke: c,
          ...g,
        },
        [
          d && S.createElement("title", { key: "svg-title" }, d),
          ...l.map(([b, x]) => S.createElement(b, x)),
          ...(Array.isArray(v) ? v : [v]),
        ],
      ),
  );
  return ((s.displayName = `${o}`), s);
};
const v3 = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]],
  TC = _l("outline", "chevron-down", "ChevronDown", v3);
const y3 = [
    ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }],
    ["path", { d: "M12 7v5l3 3", key: "svg-1" }],
  ],
  b3 = _l("outline", "clock", "Clock", y3);
const S3 = [
    ["path", { d: "M5 21c.475 -4.27 2.3 -7.64 6.331 -9.683", key: "svg-0" }],
    [
      "path",
      {
        d: "M6.618 6.623c-1.874 1.625 -2.625 3.877 -2.632 6.377c0 1 0 3 2 5h3.014c2.733 0 5.092 -.635 6.92 -2.087m1.899 -2.099c1.224 -1.872 1.987 -4.434 2.181 -7.814v-2h-4.014c-2.863 0 -5.118 .405 -6.861 1.118",
        key: "svg-1",
      },
    ],
    ["path", { d: "M3 3l18 18", key: "svg-2" }],
  ],
  w3 = _l("outline", "leaf-off", "LeafOff", S3);
const x3 = [
    ["path", { d: "M5 21c.5 -4.5 2.5 -8 7 -10", key: "svg-0" }],
    [
      "path",
      {
        d: "M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3l.014 0",
        key: "svg-1",
      },
    ],
  ],
  vg = _l("outline", "leaf", "Leaf", x3);
const C3 = [
    ["path", { d: "M10 4l2 1l2 -1", key: "svg-0" }],
    ["path", { d: "M12 2v6.5l3 1.72", key: "svg-1" }],
    ["path", { d: "M17.928 6.268l.134 2.232l1.866 1.232", key: "svg-2" }],
    ["path", { d: "M20.66 7l-5.629 3.25l.01 3.458", key: "svg-3" }],
    ["path", { d: "M19.928 14.268l-1.866 1.232l-.134 2.232", key: "svg-4" }],
    ["path", { d: "M20.66 17l-5.629 -3.25l-2.99 1.738", key: "svg-5" }],
    ["path", { d: "M14 20l-2 -1l-2 1", key: "svg-6" }],
    ["path", { d: "M12 22v-6.5l-3 -1.72", key: "svg-7" }],
    ["path", { d: "M6.072 17.732l-.134 -2.232l-1.866 -1.232", key: "svg-8" }],
    ["path", { d: "M3.34 17l5.629 -3.25l-.01 -3.458", key: "svg-9" }],
    ["path", { d: "M4.072 9.732l1.866 -1.232l.134 -2.232", key: "svg-10" }],
    ["path", { d: "M3.34 7l5.629 3.25l2.99 -1.738", key: "svg-11" }],
  ],
  yg = _l("outline", "snowflake", "Snowflake", C3);
const E3 = [
    ["path", { d: "M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656", key: "svg-0" }],
    ["path", { d: "M6.343 17.657l-1.414 1.414", key: "svg-1" }],
    ["path", { d: "M6.343 6.343l-1.414 -1.414", key: "svg-2" }],
    ["path", { d: "M17.657 6.343l1.414 -1.414", key: "svg-3" }],
    ["path", { d: "M17.657 17.657l1.414 1.414", key: "svg-4" }],
    ["path", { d: "M4 12h-2", key: "svg-5" }],
    ["path", { d: "M12 4v-2", key: "svg-6" }],
    ["path", { d: "M20 12h2", key: "svg-7" }],
    ["path", { d: "M12 20v2", key: "svg-8" }],
  ],
  bg = _l("outline", "sun-high", "SunHigh", E3);
const R3 = [
    [
      "path",
      {
        d: "M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12m0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3",
        key: "svg-0",
      },
    ],
  ],
  T3 = _l("outline", "tools-kitchen-2", "ToolsKitchen2", R3),
  _3 = "/assets/cooking-pot-bmQNcMlT.svg",
  D3 = "_header_1iqpo_1",
  A3 = "_inner_1iqpo_9",
  M3 = "_link_1iqpo_16",
  N3 = "_subLink_1iqpo_40",
  O3 = "_menuLink_1iqpo_56 _link_1iqpo_16",
  j3 = "_linkLabel_1iqpo_64",
  ia = { header: D3, inner: A3, link: M3, subLink: N3, menuLink: O3, linkLabel: j3 },
  z3 = {
    path: "/cassoulet",
    originalLink:
      "https://www.waitrose.com/ecom/recipe/summer-veg-bacon-cassoulet?srsltid=AfmBOorEAYEGF5ACVVMPyB0U7wzypcdICXb_pp0mLghy4yfruC2lP8Ug",
    image:
      "https://waitrose-prod.scene7.com/is/image/waitroseprod/summer-veg-and-bacon-cassoulet?uuid=cdb282f7-d972-4d21-94e7-9720a19c98d6&$Waitrose-Image-Preset-90$&wid=2400&fit=constrain%2C0",
    imageAlt: "Serving bowl filled with cassoulet - a butter bean based stew",
    title: "Summer veg & bacon cassoulet",
    time: "1 hr 10",
    description:
      "A less heavy take on the traditional French stew, this has all the flavours of a hot summer holiday. Roasting the veg first intensifies the flavour so everything tastes its absolute best.",
    serves: 8,
    ingredients: [
      [2, " aubergines, cut into 2cm chunks"],
      [2, " red or orange peppers, deseeded and cut into 2cm chunks"],
      [100, "ml extra virgin olive oil"],
      [200, "g pack unsmoked bacon lardons"],
      [1, " onion, peeled and finely sliced"],
      [3, " cloves garlic, peeled and crushed"],
      [400, "g cherry tomatoes on the vine, stalks removed"],
      [2, " x 400g can butter beans, drained"],
      [3, " sprigs rosemary"],
      [500, "ml water"],
      [2, " vegetable stock cubes"],
      [1, " handful of basil leaves, to serve"],
      [8, " portions of garlic-rubbed sourdough toast, to serve (optional)"],
      [1, " lemon, cut into wedges, to serve"],
    ],
    method: [
      "Preheat the oven to 220°C, gas mark 7. Spread the aubergines and peppers out in a single layer over 1 or 2 roasting tins, drizzle generously with 5 tbsp oil and toss to coat. Spread out again, then season and roast for 35-40 minutes, turning once, until golden and caramelised.",
      "Meanwhile, heat 2 tbsp oil in a wide ovenproof shallow casserole and place over a medium-high heat. Fry the lardons for 10 minutes, until crisp and golden, then remove with a slotted spoon, leaving the fat in the pan.",
      "Fry the onion in the fat for 8-10 minutes, stirring often, until softened with a little colour, then add the garlic and fry for 2 minutes more. Set aside until needed.",
      "When the roasted vegetables are ready, add the tomatoes, beans, rosemary, water and stock cubes to the onion pan and bring to a simmer. Add the roasted vegetables, season well, then transfer, uncovered, to the oven. Bake for 20 minutes, until the tops of the vegetables and beans are deep golden and a little crisp. Scatter the cassoulet with the basil, then serve with garlic-rubbed toast, if liked, and lemon wedges for squeezing.",
    ],
    filters: {
      details: {
        type: "main meal",
        base: "served with bread/toast",
        protein: "beans",
        dish: "stew",
        cookingMethod: ["hob", "oven"],
      },
      attributes: { freezable: !0, hotWeatherFriendly: !1, barnRecipe: !1 },
      dietaries: {
        veganAdjustable: !0,
        makeItVegan: {
          instructions: "Removed the bacon",
          veganIngredients: [
            [2, " aubergines, cut into 2cm chunks"],
            [2, " red or orange peppers, deseeded and cut into 2cm chunks"],
            [100, "ml extra virgin olive oil"],
            [1, " onion, peeled and finely sliced"],
            [3, " cloves garlic, peeled and crushed"],
            [400, "g cherry tomatoes on the vine, stalks removed"],
            [2, " x 400g can butter beans, drained"],
            [3, " sprigs rosemary"],
            [500, "ml water"],
            [2, " vegetable stock cubes"],
            [1, " handful of basil leaves, to serve"],
            [8, " portions of garlic-rubbed sourdough toast, to serve (optional)"],
            [1, " lemon, cut into wedges, to serve"],
          ],
          veganMethod: [
            "Preheat the oven to 220°C, gas mark 7. Spread the aubergines and peppers out in a single layer over 1 or 2 roasting tins, drizzle generously with 5 tbsp oil and toss to coat. Spread out again, then season and roast for 35-40 minutes, turning once, until golden and caramelised.",
            "Meanwhile, heat 2 tbsp oil in a wide ovenproof shallow casserole and place over a medium-high heat.",
            "Fry the onion in the oil for 8-10 minutes, stirring often, until softened with a little colour, then add the garlic and fry for 2 minutes more. Set aside until needed.",
            "When the roasted vegetables are ready, add the tomatoes, beans, rosemary, water and stock cubes to the onion pan and bring to a simmer. Add the roasted vegetables, season well, then transfer, uncovered, to the oven. Bake for 20 minutes, until the tops of the vegetables and beans are deep golden and a little crisp. Scatter the cassoulet with the basil, then serve with garlic-rubbed toast, if liked, and lemon wedges for squeezing.",
          ],
        },
      },
    },
  },
  k3 = {
    path: "/chicken-caesar-salad-wrap",
    originalLink: "",
    image: "https://i.pinimg.com/originals/15/ad/46/15ad46012040bcd7eab776f7d10a24f5.jpg",
    imageAlt:
      "A bowl of tossed chicken, bacon, croutons and lettuce, with a healthy amount of parmesan grated on top",
    title: "Chicken caesar salad wrap",
    time: "1 hr 20",
    description: "",
    serves: 4,
    ingredients: [[2, "hg"]],
    method: [""],
    filters: {
      details: {
        type: "main meal",
        base: "wrap",
        protein: "chicken",
        dish: "salad",
        cookingMethod: ["oven"],
      },
      attributes: { freezable: !1, hotWeatherFriendly: !0, barnRecipe: !0 },
      dietaries: { veganAdjustable: !1 },
    },
  },
  L3 = "/assets/chicken-pasta-bake-cropped-mAHegL8n.jpg",
  B3 = {
    path: "/chicken-pasta-bake",
    originalLink: "https://www.bbcgoodfood.com/recipes/chicken-pasta-bake",
    image: L3,
    imageAlt: "Chicken pasta bake topped with golden melted cheese",
    title: "Chicken pasta bake",
    time: "1 hr 15",
    description:
      "Enjoy this gooey cheese and chicken pasta bake for the ultimate weekday family dinner. Serve straight from the dish with a dressed green salad.",
    serves: 8,
    ingredients: [
      [4, " tbsp olive oil"],
      [1, " onion, finely chopped"],
      [2, " garlic cloves, crushed"],
      [0.25, " tsp chilli flakes"],
      [2, " x 400g cans chopped tomatoes"],
      [6, " tbsp mascarpone"],
      [1, " bag of kale"],
      [1, " x 260g can of sweetcorn"],
      [4, " skinless chicken breasts, sliced into strips"],
      [300, "g penne"],
      [70, "g mature cheddar, grated"],
      [50, "g grated mozzarella"],
      [0.5, " small bunch of parsley, finely chopped"],
    ],
    method: [
      "Heat 2 tbsp of the oil in a pan over a medium heat and fry the onion gently for 10-12 mins. Add the garlic and chilli flakes and cook for 1 min. Tip in the tomatoes and season to taste. Simmer uncovered for 20 mins or until thickened, then stir through the mascarpone, kale and sweetcorn.",
      "Heat 1 tbsp of oil in a non-stick frying pan. Season the chicken and fry for 5-7 mins or until the chicken is cooked through.",
      "Heat the oven to 220C/200C fan/gas 7. Cook the penne following pack instructions. Drain and toss with the remaining oil. Tip the pasta into a medium sized ovenproof dish. Stir in the chicken and pour over the sauce. Top with the cheddar, mozzarella and parsley. Bake for 20 mins or until golden brown and bubbling.",
    ],
    filters: {
      details: {
        type: "main meal",
        base: "pasta",
        protein: "chicken",
        dish: "pasta bake",
        cookingMethod: ["hob", "oven"],
      },
      attributes: { freezable: !0, hotWeatherFriendly: !1, barnRecipe: !1 },
      dietaries: { veganAdjustable: !1 },
    },
  },
  $3 = {
    path: "/french-dressing",
    originalLink: "https://www.bbcgoodfood.com/howto/guide/10-salad-dressings-you-can-make-minutes",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2016/08/French-dressing-a881090.jpg?quality=90&webp=true&fit=975,649",
    imageAlt:
      "A bowl of yellow salad dressing in a white and blue bowl with a whisk discarded to the side",
    title: "French dressing",
    time: "1 hr 30",
    description:
      "A classic recipe that everyone enjoys, made with oil and vinegar. This is the solid foundation of the salad dressing world.",
    serves: 8,
    ingredients: [
      [1, " tsp Dijon mustard"],
      [2, " tbsp white wine vinegar"],
      [6, " tbsp extra virgin olive oil"],
      [1, " pinch of sugar"],
      [1, " pinch of salt and pepper"],
    ],
    method: [
      "To make, whisk 1 tsp Dijon mustard with 2 tbsp white wine vinegar, 6 tbsp extra virgin olive oil, a pinch of sugar and salt and pepper in a small bowl or shake together in a jam jar.",
    ],
    filters: {
      details: { type: "other" },
      attributes: { freezable: !1, hotWeatherFriendly: !0, barnRecipe: !1 },
      dietaries: {
        veganAdjustable: !0,
        makeItVegan: {
          instructions: "no changes required",
          veganIngredients: [[1, "n/a"]],
          veganMethod: ["n/a"],
        },
      },
    },
  },
  H3 = {
    path: "/gochujang-pasta",
    originalLink: "https://www.mealofjoy.com/p/sausage-gochujang-pasta",
    image:
      "https://substackcdn.com/image/fetch/$s_!I9KH!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb65a86b1-15e6-4b19-90ce-74f833391e7f_3024x3442.jpeg",
    imageAlt: "",
    title: "Sausage gochujang pasta",
    time: "1 hr",
    description: "",
    serves: 4,
    ingredients: [
      [400, "g pasta (rigatoni or any short pasta)"],
      [6, " high-quality sausages (about 320g)"],
      [30, "g butter"],
      [1, " shallot"],
      [3, " garlic cloves"],
      [2, " tbsp gochujang paste"],
      [220, "ml cream"],
      [2, " limes"],
      [2, " tbsp honey"],
      [30, "g coriander"],
      [15, "g panko breadcrumbs"],
      [40, "g parmesan"],
      [1, " pinch of salt"],
      [1, " pinch of pepper"],
      [1, " splash of olive oil"],
    ],
    method: [
      "Remove the casing from the sausages and fry them in a pan or wok with a little oil over medium-high heat until they are golden brown. Remove from the pan and set aside.",
      "Add the butter, and when it starts to melt, add the shallot and garlic. Sauté for a couple of minutes until softened, then add the gochujang and cream.",
      "Stir in 30g of Parmesan cheese, the juice of two limes, and the honey. Let it simmer for about 3 minutes, then put the crispy sausage pieces back in. Stir everything well and let it simmer a bit more until it thickens slightly. Season with salt and pepper to taste.",
      "Cook the pasta. Once it's al dente, drain it and save a little bit of the cooking water. Add a small ladle of the cooking water to your pan and mix until the sauce becomes glossy. Keep tasting and add more water if needed.",
      "Add almost all the chopped cilantro to the pasta and mix, reserving some for the topping.",
      "Heat a tablespoon of olive oil in a pan and toast the panko breadcrumbs. Remove from heat, let cool slightly, grate 10g of Parmesan over it, and mix in the remaining chopped cilantro.",
      "Plate the pasta with the crunchy cilantro topping and a little lime zest.",
    ],
    filters: {
      details: {
        type: "main meal",
        base: "pasta",
        protein: "sausage",
        dish: "pasta",
        cookingMethod: ["hob"],
      },
      attributes: { freezable: !0, hotWeatherFriendly: !1, barnRecipe: !1 },
      dietaries: { veganAdjustable: !1 },
    },
  },
  U3 = {
    path: "/greek-pasta-salad",
    originalLink: "https://www.bbc.co.uk/food/recipes/greek_pasta_salad_15496",
    image:
      "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/greek_pasta_salad_15496_16x9.jpg",
    imageAlt: "Greek pasta salad with cherry tomatoes, feta, olives, and red onion",
    title: "Greek pasta salad",
    time: "30 mins",
    description:
      "A fresh and vibrant Greek-style pasta salad featuring bow-shaped pasta tossed in a zesty oregano dressing with cherry tomatoes, olives, cucumber, red onion, and crumbled feta. Specially designed to be easy and approachable for young chefs or quick meal prep.",
    serves: 4,
    ingredients: [
      [200, "g bow-shaped pasta"],
      [3, " tbsp extra virgin olive oil"],
      [1, " tbsp red wine vinegar"],
      [1, " tsp dried oregano"],
      [18, " cherry tomatoes"],
      [75, "g olives"],
      [0.5, " small cucumber"],
      [1, " red onion"],
      [100, "g feta"],
    ],
    method: [
      "Fill a medium saucepan with hot water from the tap until it's three-quarters full. Set the pan on the hob, season with a pinch of salt, and bring to a boil over medium-high heat. Carefully tip the pasta into the boiling water.",
      "Carefully stir the pasta with a long wooden spoon to prevent sticking. Cook for 10 minutes, stirring occasionally, ensuring the water remains at a gentle boil.",
      "While the pasta cooks, measure the extra virgin olive oil, red wine vinegar, and dried oregano into a large mixing bowl. Season with salt and black pepper, and mix well to create the dressing.",
      "Check if the pasta is cooked through. It should be soft but with a slight bite. If needed, cook for an additional 2 minutes.",
      "Place a large colander in the sink. Turn off the heat and carefully drain the pasta. Let it cool for a few minutes, then transfer it into the mixing bowl with the dressing. Mix until well coated.",
      "On a chopping board, carefully cut the cherry tomatoes and pitted olives in half. Add them directly to the pasta bowl.",
      "Cut the cucumber half lengthways, then halve each piece again to make four long chunks. Slice across to create small triangles and add to the bowl.",
      "Peel the red onion, slice it in half through the root, and thinly slice into half-moon shapes. Add the sliced onion to the bowl.",
      "Crumble the feta cheese into small pieces over the salad, then gently toss everything together until well combined. Serve straightaway or chill for up to a day.",
    ],
    filters: {
      attributes: { barnRecipe: !1, freezable: !1, hotWeatherFriendly: !0 },
      details: {
        type: "main meal",
        base: "pasta",
        protein: "none",
        dish: "salad",
        cookingMethod: ["hob", "no cook"],
      },
      dietaries: {
        veganAdjustable: !0,
        makeItVegan: {
          instructions: "Swapped the feta for a plant-based Greek-style vegan cheese alternative.",
          veganIngredients: [
            [200, "g bow-shaped pasta"],
            [3, " tbsp extra virgin olive oil"],
            [1, " tbsp red wine vinegar"],
            [1, " tsp dried oregano"],
            [18, " cherry tomatoes"],
            [75, "g olives"],
            [0.5, " small cucumber"],
            [1, " red onion"],
            [100, "g vegan feta alternative"],
          ],
          veganMethod: [
            "Fill a medium saucepan with hot water from the tap until it's three-quarters full. Set the pan on the hob, season with a pinch of salt, and bring to a boil over medium-high heat. Carefully tip the pasta into the boiling water.",
            "Carefully stir the pasta with a long wooden spoon to prevent sticking. Cook for 10 minutes, stirring occasionally, ensuring the water remains at a gentle boil.",
            "While the pasta cooks, measure the extra virgin olive oil, red wine vinegar, and dried oregano into a large mixing bowl. Season with salt and black pepper, and mix well to create the dressing.",
            "Check if the pasta is cooked through. It should be soft but with a slight bite. If needed, cook for an additional 2 minutes.",
            "Place a large colander in the sink. Turn off the heat and carefully drain the pasta. Let it cool for a few minutes, then transfer it into the mixing bowl with the dressing. Mix until well coated.",
            "On a chopping board, carefully cut the cherry tomatoes and pitted olives in half. Add them directly to the pasta bowl.",
            "Cut the cucumber half lengthways, then halve each piece again to make four long chunks. Slice across to create small triangles and add to the bowl.",
            "Peel the red onion, slice it in half through the root, and thinly slice into half-moon shapes. Add the sliced onion to the bowl.",
            "Crumble the vegan feta alternative into small pieces over the bowl, then gently mix everything together until well combined. Eat straightaway, or chill for up to a day before eating.",
          ],
        },
      },
    },
  },
  P3 = {
    path: "/lentil-gnocchi-ragu",
    originalLink: "https://www.bbc.co.uk/food/recipes/saucy_lentil_gnocchi_rag_84948",
    image:
      "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/saucy_lentil_gnocchi_rag_84948_16x9.jpg",
    imageAlt: "Serving bowl of lentil gnocchi ragu with basil and parmesan sprinkled on top",
    title: "Saucy lentil gnocchi ragù",
    time: "1 hr 30",
    description:
      "An extremely saucy and comforting ragù-style dish that skips the meat but does not skimp on flavour. Made in one pot, it really couldn't be easier!",
    serves: 8,
    ingredients: [
      [1, " tbsp olive oil"],
      [1, " tsp paprika"],
      [1, " tsp dried oregano"],
      [0.5, " tsp dried red chilli flakes (optional)"],
      [5, " garlic cloves, blended or finely chopped"],
      [1, " onion, blended or finely chopped"],
      [2, " celery sticks, blended or finely chopped"],
      [250, "g chestnut mushrooms, blended or finely chopped"],
      [2, " carrots, peeled and blended or finely chopped"],
      [2, " tbsp tomato purée"],
      [3, " tbsp dark soy sauce"],
      [1, " x 400g tin chopped tomatoes"],
      [1, " vegetable stock cube"],
      [1, " x 400g tin green lentils, drained"],
      [1, " tsp sugar"],
      [2, " x 400g packets fresh gnocchi"],
      [1, " pinch of salt and freshly ground black pepper"],
      [1, " handful of fresh basil leaves, sliced, to garnish"],
      [
        1,
        " heap of vegetarian hard cheese or dairy-free alternative, finely grated, to serve (optional)",
      ],
    ],
    method: [
      "Heat the oil in a large saucepan. Stir in the paprika, oregano and chilli flakes and fry for 1 minute to infuse the spices.",
      "Add the garlic, onion and celery and cook for a few minutes until softened. Add the mushrooms and cook for 5 minutes to draw out their moisture. Add the carrots and cook for a further 2 minutes.",
      "Mix in the tomato purée and soy sauce.",
      "Pour in the tomatoes. Refill the empty tomato tin with boiling water and the stock cube, stir until dissolved and then pour the stock into the pan. Add the lentils and sugar and mix everything together.",
      "Simmer for around 15 minutes, stirring occasionally, or until it begins to thicken but still remains saucy. Season generously with salt and pepper.",
      "Add the gnocchi directly into the sauce, stir through and cook for a few minutes until soft and ready to eat.",
      "Serve in bowls and garnish with a handful of the basil. Serve with a good sprinkling of the cheese, if using.",
    ],
    filters: {
      details: {
        type: "main meal",
        base: "gnocchi",
        protein: "lentils",
        dish: "ragu",
        cookingMethod: ["hob"],
      },
      attributes: { freezable: !0, hotWeatherFriendly: !1, barnRecipe: !1 },
      dietaries: {
        veganAdjustable: !0,
        makeItVegan: {
          instructions: "Removed the cheese",
          veganIngredients: [
            [1, " tsp paprika"],
            [1, " tsp dried oregano"],
            [0.5, " tsp dried red chilli flakes (optional)"],
            [5, " garlic cloves, blended or finely chopped"],
            [1, " onion, blended or finely chopped"],
            [2, " celery sticks, blended or finely chopped"],
            [250, "g chestnut mushrooms, blended or finely chopped"],
            [2, " carrots, peeled and blended or finely chopped"],
            [2, " tbsp tomato purée"],
            [3, " tbsp dark soy sauce"],
            [1, " x 400g tin chopped tomatoes"],
            [1, " vegetable stock cube"],
            [1, " x 400g tin green lentils, drained"],
            [1, " tsp sugar"],
            [2, " x 400g packets fresh gnocchi"],
            [1, " pinch of salt and freshly ground black pepper"],
            [1, " handful of fresh basil leaves, sliced, to garnish"],
            [
              1,
              " heap of vegetarian hard cheese or dairy-free alternative, finely grated, to serve (optional)",
            ],
          ],
          veganMethod: [
            "Heat the oil in a large saucepan. Stir in the paprika, oregano and chilli flakes and fry for 1 minute to infuse the spices.",
            "Add the garlic, onion and celery and cook for a few minutes until softened. Add the mushrooms and cook for 5 minutes to draw out their moisture. Add the carrots and cook for a further 2 minutes.",
            "Mix in the tomato purée and soy sauce.",
            "Pour in the tomatoes. Refill the empty tomato tin with boiling water and the stock cube, stir until dissolved and then pour the stock into the pan. Add the lentils and sugar and mix everything together.",
            "Simmer for around 15 minutes, stirring occasionally, or until it begins to thicken but still remains saucy. Season generously with salt and pepper.",
            "Add the gnocchi directly into the sauce, stir through and cook for a few minutes until soft and ready to eat.",
            "Serve in bowls and garnish with a handful of the basil.",
          ],
        },
      },
    },
  },
  V3 = {
    path: "/sausage-bolognese",
    originalLink: "https://www.bbc.co.uk/food/recipes/spicy_sausage_pasta_42455",
    image:
      "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/spicy_sausage_pasta_42455_16x9.jpg",
    imageAlt: "",
    title: "Sausage bolognese",
    time: "1 hr 20",
    description: "",
    serves: 4,
    ingredients: [
      [6, " good-quality sausages"],
      [1, " tbsp olive oil"],
      [1, " small onion, finely chopped"],
      [0.5, " tsp dried chilli flakes, according to taste"],
      [400, "g tin chopped tomatoes"],
      [2, " tbsp tomato purée"],
      [150, "ml red wine or water"],
      [0.5, " tsp dried mixed herbs or dried oregano"],
      [275, "g dried spaghetti (or other pasta if freezing)"],
      [1, " heap of grated parmesan, to serve (optional)"],
      [1, " handful of fresh basil leaves, to serve (optional)"],
    ],
    method: [
      "Squeeze the sausagemeat out of the skins into a large non-stick frying pan. Add the oil and onion and cook over a medium heat for 10 minutes, or until lightly browned. Use two wooden spoons to break up the sausagemeat into small mince-like pieces as it cooks. Add the chilli flakes and cook for 1 minute more, stirring.",
      "Add the tomatoes, tomato purée, red wine (or water) and oregano. Bring to a gentle simmer and cook for 8–10 minutes, or until the sauce has thickened, stirring regularly.",
      "Meanwhile, fill a large saucepan with water and bring to the boil. Add the pasta to the water and cook for 7–9 minutes (or according to the pack instructions) until tender, stirring occasionally to separate the strands.",
      "Drain the cooked pasta in a colander and return to the saucepan. Tip the spicy sausage sauce into the same pan and toss well together. Serve topped with grated Parmesan and scattered with torn basil leaves.",
    ],
    filters: {
      details: {
        type: "main meal",
        base: "pasta",
        protein: "sausage",
        dish: "bolognese",
        cookingMethod: ["hob"],
      },
      attributes: { freezable: !0, hotWeatherFriendly: !1, barnRecipe: !1 },
      dietaries: { veganAdjustable: !1 },
    },
  },
  I3 = {
    path: "/sausage-courgette-pilaf",
    originalLink: "https://www.bbcgoodfoodme.com/recipes/easy-sausage-courgette-pilaf/",
    image:
      "https://www.bbcgoodfoodme.com/assets/legacy/recipe/recipe-image/2020/07/sausagecourgette-pilaf.jpg",
    imageAlt: "",
    title: "Sausage & courgette pilaf",
    time: "1 hr 20",
    description:
      "Whip up this speedy sausage, courgette and rice dish in just 20 minutes. Full of flavour, it's ideal for when you want something quick and easy.",
    serves: 1,
    ingredients: [
      [100, "g basmati rice"],
      [1, " tsp vegetable oil"],
      [3, " sausages, meat squeezed from the skins"],
      [1, " tsp fennel seeds, black onion seeds or crushed coriander seeds"],
      [1, " courgette, sliced into half-moons"],
      [100, "g frozen peas"],
      [200, "ml vegetable stock"],
      [0.5, " small bunch of mint, leaves picked and finely chopped"],
      [0.5, " small bunch of dill, finely chopped"],
      [2, " tbsp fat-free yogurt"],
    ],
    method: [
      "Rinse the rice until the water runs clear, then leave to soak. Heat the oil in a medium saucepan with a tight-fitting lid and fry the sausagemeat for 2-3 minutes until crisp and golden. Stir in the seeds and courgette and fry for another 2 minutes over a high heat to evaporate the moisture.",
      "Add the drained rice, peas, stock and half the chopped herbs. Bring to a simmer, then reduce the heat to low and cover with the lid. Cook for 10-12 minutes until the rice is tender.",
      "Fold most of the remaining herbs through the rice. Serve topped with the last of the herbs, with the yogurt on the side.",
    ],
    filters: {
      details: {
        type: "main meal",
        base: "rice",
        protein: "sausage",
        dish: "pilaf",
        cookingMethod: ["hob"],
      },
      attributes: { freezable: !0, hotWeatherFriendly: !1, barnRecipe: !1 },
      dietaries: { veganAdjustable: !1 },
    },
  },
  F3 = {
    path: "/sausage-leek-mash-pie",
    originalLink: "https://www.bbcgoodfood.com/recipes/sausage-leek-mash-pie",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/sausage-leek-mash-pie-07a67d4.jpg?quality=90&webp=true&resize=440,400",
    imageAlt:
      "Serving pot filled to the brim with cheesy mash, with a thick sausage and leek gravy peeking through below",
    title: "Sausage & leek mash pie",
    time: "1 hr 20",
    description:
      "Enjoy sausages and kale with a cheesy mash topping made with leeks and mustard. You can freeze this pie for busy weeknights when you need to feed a crowd",
    serves: 2,
    ingredients: [
      [4, " large potatoes, peeled and cut into 3cm chunks"],
      [2, " tbsp oil"],
      [6, " pork sausages"],
      [1, " tbsp plain flour"],
      [450, "ml fresh chicken gravy"],
      [150, "g kale, shredded"],
      [3, " leeks, finely sliced"],
      [0.5, " tbsp wholegrain mustard"],
      [2, " tbsp whole milk"],
      [50, "g smoked or ordinary cheddar, grated"],
    ],
    method: [
      "Boil the potatoes for 12 mins or until tender. Drain and leave to steam-dry.",
      "Heat 1 tbsp oil in a shallow casserole or deep skillet (20-25cm). Pinch the sausages out of their skins into large pieces, directly into the pan, and fry over a medium heat for 7-8 mins or until golden brown. Add the flour and stir everything together, cooking for 1 min. Pour in the gravy and 100-200ml water, bring to a simmer, then add the kale and cook for 5 mins. Remove from the heat.",
      "Meanwhile, in a separate pan, add the remaining 1 tbsp oil, then the leeks and fry for 5-10 mins until tender, adding a small splash of water to help them cook. Heat your grill to its highest setting.",
      "Mash the potatoes until smooth. Stir through the leeks, mustard and milk, and season. Spoon and swirl the mash on top of the sausage mixture, then scatter over the grated cheese and grill for 3-5 mins or until golden and bubbling.",
    ],
    filters: {
      details: {
        type: "main meal",
        base: "potato",
        protein: "sausage",
        dish: "pie",
        cookingMethod: ["hob", "grill"],
      },
      attributes: { freezable: !0, hotWeatherFriendly: !1, barnRecipe: !1 },
      dietaries: { veganAdjustable: !1 },
    },
  },
  xi = [z3, H3, V3, P3, F3, I3, k3, B3, $3, U3],
  q3 = xi.map((e) => ({
    link: e.path,
    label: e.path
      .slice(1)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (r) => r.toUpperCase()),
  })),
  N1 = [
    { label: "Home", link: "/" },
    { label: "Main Meals", link: "/main-meal-recipes" },
    { label: "Baking", link: "/baking-recipes" },
    { label: "Other", link: "/other-recipes" },
    {
      label: "Recipe Library",
      link: "/recipe-library",
      links: [{ link: "/recipe-library", label: "All Recipes" }, ...q3],
    },
  ];
function Y3() {
  const [e, { toggle: r, close: o }] = bp(!1),
    l = N1.map((s) => {
      const c = s.links?.map((u) =>
        w.jsx(xr.Item, {
          children: w.jsx("a", { href: u.link, className: ia.menuLink, children: u.label }, u.link),
        }),
      );
      return c
        ? w.jsxs(
            xr,
            {
              trigger: "hover",
              transitionProps: { exitDuration: 0 },
              withinPortal: !0,
              children: [
                w.jsx(xr.Target, {
                  children: w.jsx("a", {
                    href: s.link,
                    className: ia.link,
                    children: w.jsxs(ya, {
                      children: [
                        w.jsx("span", { className: ia.linkLabel, children: s.label }),
                        w.jsx(TC, { size: 14, stroke: 1.5 }),
                      ],
                    }),
                  }),
                }),
                w.jsx(xr.Dropdown, { children: c }),
              ],
            },
            s.label,
          )
        : w.jsx("a", { href: s.link, className: ia.link, children: s.label }, s.label);
    });
  return w.jsxs("header", {
    className: ia.header,
    children: [
      w.jsx(Nr, {
        size: "100%",
        children: w.jsxs("div", {
          className: ia.inner,
          children: [
            w.jsx("a", {
              href: "/",
              children: w.jsx(uc, { src: _3, h: 28, w: "auto", fit: "contain" }),
            }),
            w.jsx(Wa, { gap: 5, visibleFrom: "sm", children: l }),
            w.jsx(Mf, {
              opened: e,
              onClick: r,
              size: "sm",
              hiddenFrom: "sm",
              "aria-label": "Toggle navigation",
            }),
          ],
        }),
      }),
      w.jsx(Jr, {
        opened: e,
        onClose: o,
        size: "100%",
        padding: "md",
        title: "Navigation",
        hiddenFrom: "sm",
        zIndex: 1e6,
        children: w.jsxs(Uo, {
          h: "calc(100vh - 80px",
          mx: "-md",
          children: [
            w.jsx(jf, { my: "sm" }),
            N1.map((s) =>
              s.links
                ? w.jsx(G3, { link: s }, s.label)
                : w.jsx("a", { href: s.link, className: ia.link, children: s.label }, s.label),
            ),
          ],
        }),
      }),
    ],
  });
}
const G3 = ({ link: e }) => {
  const [r, { toggle: o }] = bp(!1);
  return w.jsxs(w.Fragment, {
    children: [
      w.jsx(Wn, {
        className: ia.link,
        onClick: o,
        children: w.jsxs(ya, {
          inline: !0,
          children: [
            w.jsx("span", { className: ia.linkLabel, children: e.label }),
            w.jsx(TC, { size: 14, stroke: 1.5 }),
          ],
        }),
      }),
      w.jsx(LS, {
        expanded: r,
        children: e.links?.map((l) =>
          w.jsx("a", { href: l.link, className: ia.subLink, children: l.label }, l.link),
        ),
      }),
    ],
  });
};
var _C = (e) => {
    throw TypeError(e);
  },
  DC = (e, r, o) => r.has(e) || _C("Cannot " + o),
  Sr = (e, r, o) => (DC(e, r, "read from private field"), o ? o.call(e) : r.get(e)),
  Os = (e, r, o) =>
    r.has(e)
      ? _C("Cannot add the same private member more than once")
      : r instanceof WeakSet
        ? r.add(e)
        : r.set(e, o),
  oa = (e, r, o, l) => (DC(e, r, "write to private field"), r.set(e, o), o),
  O1 = "popstate";
function j1(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "pathname" in e &&
    "search" in e &&
    "hash" in e &&
    "state" in e &&
    "key" in e
  );
}
function X3(e = {}) {
  function r(l, s) {
    let c = s.state?.masked,
      { pathname: u, search: f, hash: d } = c || l.location;
    return Xs(
      "",
      { pathname: u, search: f, hash: d },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default",
      c
        ? { pathname: l.location.pathname, search: l.location.search, hash: l.location.hash }
        : void 0,
    );
  }
  function o(l, s) {
    return typeof s == "string" ? s : ga(s);
  }
  return Q3(r, o, null, e);
}
function it(e, r) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(r);
}
function fn(e, r) {
  if (!e) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function K3() {
  return Math.random().toString(36).substring(2, 10);
}
function z1(e, r) {
  return {
    usr: e.state,
    key: e.key,
    idx: r,
    masked: e.mask ? { pathname: e.pathname, search: e.search, hash: e.hash } : void 0,
  };
}
function Xs(e, r, o = null, l, s) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof r == "string" ? ba(r) : r),
    state: o,
    key: (r && r.key) || l || K3(),
    mask: s,
  };
}
function ga({ pathname: e = "/", search: r = "", hash: o = "" }) {
  return (
    r && r !== "?" && (e += r.charAt(0) === "?" ? r : "?" + r),
    o && o !== "#" && (e += o.charAt(0) === "#" ? o : "#" + o),
    e
  );
}
function ba(e) {
  let r = {};
  if (e) {
    let o = e.indexOf("#");
    o >= 0 && ((r.hash = e.substring(o)), (e = e.substring(0, o)));
    let l = e.indexOf("?");
    (l >= 0 && ((r.search = e.substring(l)), (e = e.substring(0, l))), e && (r.pathname = e));
  }
  return r;
}
function Q3(e, r, o, l = {}) {
  let { window: s = document.defaultView, v5Compat: c = !1 } = l,
    u = s.history,
    f = "POP",
    d = null,
    m = v();
  m == null && ((m = 0), u.replaceState({ ...u.state, idx: m }, ""));
  function v() {
    return (u.state || { idx: null }).idx;
  }
  function g() {
    f = "POP";
    let R = v(),
      T = R == null ? null : R - m;
    ((m = R), d && d({ action: f, location: C.location, delta: T }));
  }
  function y(R, T) {
    f = "PUSH";
    let _ = j1(R) ? R : Xs(C.location, R, T);
    m = v() + 1;
    let D = z1(_, m),
      j = C.createHref(_.mask || _);
    try {
      u.pushState(D, "", j);
    } catch (z) {
      if (z instanceof DOMException && z.name === "DataCloneError") throw z;
      s.location.assign(j);
    }
    c && d && d({ action: f, location: C.location, delta: 1 });
  }
  function b(R, T) {
    f = "REPLACE";
    let _ = j1(R) ? R : Xs(C.location, R, T);
    m = v();
    let D = z1(_, m),
      j = C.createHref(_.mask || _);
    (u.replaceState(D, "", j), c && d && d({ action: f, location: C.location, delta: 0 }));
  }
  function x(R) {
    return AC(R);
  }
  let C = {
    get action() {
      return f;
    },
    get location() {
      return e(s, u);
    },
    listen(R) {
      if (d) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(O1, g),
        (d = R),
        () => {
          (s.removeEventListener(O1, g), (d = null));
        }
      );
    },
    createHref(R) {
      return r(s, R);
    },
    createURL: x,
    encodeLocation(R) {
      let T = x(R);
      return { pathname: T.pathname, search: T.search, hash: T.hash };
    },
    push: y,
    replace: b,
    go(R) {
      return u.go(R);
    },
  };
  return C;
}
function AC(e, r = !1) {
  let o = "http://localhost";
  (typeof window < "u" &&
    (o = window.location.origin !== "null" ? window.location.origin : window.location.href),
    it(o, "No window.location.(origin|href) available to create URL"));
  let l = typeof e == "string" ? e : ga(e);
  return ((l = l.replace(/ $/, "%20")), !r && l.startsWith("//") && (l = o + l), new URL(l, o));
}
var js,
  k1 = class {
    constructor(e) {
      if ((Os(this, js, new Map()), e)) for (let [r, o] of e) this.set(r, o);
    }
    get(e) {
      if (Sr(this, js).has(e)) return Sr(this, js).get(e);
      if (e.defaultValue !== void 0) return e.defaultValue;
      throw new Error("No value found for context");
    }
    set(e, r) {
      Sr(this, js).set(e, r);
    }
  };
js = new WeakMap();
var Z3 = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function W3(e) {
  return Z3.has(e);
}
var J3 = new Set(["lazy", "caseSensitive", "path", "id", "index", "middleware", "children"]);
function eO(e) {
  return J3.has(e);
}
function tO(e) {
  return e.index === !0;
}
function Ks(e, r, o = [], l = {}, s = !1) {
  return e.map((c, u) => {
    let f = [...o, String(u)],
      d = typeof c.id == "string" ? c.id : f.join("-");
    if (
      (it(c.index !== !0 || !c.children, "Cannot specify children on an index route"),
      it(
        s || !l[d],
        `Found a route id collision on id "${d}".  Route id's must be globally unique within Data Router usages`,
      ),
      tO(c))
    ) {
      let m = { ...c, id: d };
      return ((l[d] = L1(m, r(m))), m);
    } else {
      let m = { ...c, id: d, children: void 0 };
      return ((l[d] = L1(m, r(m))), c.children && (m.children = Ks(c.children, r, f, l, s)), m);
    }
  });
}
function L1(e, r) {
  return Object.assign(e, {
    ...r,
    ...(typeof r.lazy == "object" && r.lazy != null ? { lazy: { ...e.lazy, ...r.lazy } } : {}),
  });
}
function MC(e, r, o = "/") {
  return Ir(e, r, o, !1);
}
function Ir(e, r, o, l, s) {
  let c = typeof r == "string" ? ba(r) : r,
    u = Rr(c.pathname || "/", o);
  if (u == null) return null;
  let f = s ?? Yu(e),
    d = null,
    m = mO(u);
  for (let v = 0; d == null && v < f.length; ++v) d = dO(f[v], m, l);
  return d;
}
function nO(e, r) {
  let { route: o, pathname: l, params: s } = e;
  return { id: o.id, pathname: l, params: s, data: r[o.id], loaderData: r[o.id], handle: o.handle };
}
function Yu(e) {
  let r = NC(e);
  return (rO(r), r);
}
function NC(e, r = [], o = [], l = "", s = !1) {
  let c = (u, f, d = s, m) => {
    let v = {
      relativePath: m === void 0 ? u.path || "" : m,
      caseSensitive: u.caseSensitive === !0,
      childrenIndex: f,
      route: u,
    };
    if (v.relativePath.startsWith("/")) {
      if (!v.relativePath.startsWith(l) && d) return;
      (it(
        v.relativePath.startsWith(l),
        `Absolute route path "${v.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (v.relativePath = v.relativePath.slice(l.length)));
    }
    let g = Cr([l, v.relativePath]),
      y = o.concat(v);
    (u.children &&
      u.children.length > 0 &&
      (it(
        u.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`,
      ),
      NC(u.children, r, y, g, d)),
      !(u.path == null && !u.index) && r.push({ path: g, score: uO(g, u.index), routesMeta: y }));
  };
  return (
    e.forEach((u, f) => {
      if (u.path === "" || !u.path?.includes("?")) c(u, f);
      else for (let d of OC(u.path)) c(u, f, !0, d);
    }),
    r
  );
}
function OC(e) {
  let r = e.split("/");
  if (r.length === 0) return [];
  let [o, ...l] = r,
    s = o.endsWith("?"),
    c = o.replace(/\?$/, "");
  if (l.length === 0) return s ? [c, ""] : [c];
  let u = OC(l.join("/")),
    f = [];
  return (
    f.push(...u.map((d) => (d === "" ? c : [c, d].join("/")))),
    s && f.push(...u),
    f.map((d) => (e.startsWith("/") && d === "" ? "/" : d))
  );
}
function rO(e) {
  e.sort((r, o) =>
    r.score !== o.score
      ? o.score - r.score
      : fO(
          r.routesMeta.map((l) => l.childrenIndex),
          o.routesMeta.map((l) => l.childrenIndex),
        ),
  );
}
var aO = /^:[\w-]+$/,
  oO = 3,
  lO = 2,
  iO = 1,
  sO = 10,
  cO = -2,
  B1 = (e) => e === "*";
function uO(e, r) {
  let o = e.split("/"),
    l = o.length;
  return (
    o.some(B1) && (l += cO),
    r && (l += lO),
    o.filter((s) => !B1(s)).reduce((s, c) => s + (aO.test(c) ? oO : c === "" ? iO : sO), l)
  );
}
function fO(e, r) {
  return e.length === r.length && e.slice(0, -1).every((l, s) => l === r[s])
    ? e[e.length - 1] - r[r.length - 1]
    : 0;
}
function dO(e, r, o = !1) {
  let { routesMeta: l } = e,
    s = {},
    c = "/",
    u = [];
  for (let f = 0; f < l.length; ++f) {
    let d = l[f],
      m = f === l.length - 1,
      v = c === "/" ? r : r.slice(c.length) || "/",
      g = cf({ path: d.relativePath, caseSensitive: d.caseSensitive, end: m }, v),
      y = d.route;
    if (
      (!g &&
        m &&
        o &&
        !l[l.length - 1].route.index &&
        (g = cf({ path: d.relativePath, caseSensitive: d.caseSensitive, end: !1 }, v)),
      !g)
    )
      return null;
    (Object.assign(s, g.params),
      u.push({
        params: s,
        pathname: Cr([c, g.pathname]),
        pathnameBase: vO(Cr([c, g.pathnameBase])),
        route: y,
      }),
      g.pathnameBase !== "/" && (c = Cr([c, g.pathnameBase])));
  }
  return u;
}
function cf(e, r) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [o, l] = hO(e.path, e.caseSensitive, e.end),
    s = r.match(o);
  if (!s) return null;
  let c = s[0],
    u = c.replace(/(.)\/+$/, "$1"),
    f = s.slice(1);
  return {
    params: l.reduce((m, { paramName: v, isOptional: g }, y) => {
      if (v === "*") {
        let x = f[y] || "";
        u = c.slice(0, c.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const b = f[y];
      return (g && !b ? (m[v] = void 0) : (m[v] = (b || "").replace(/%2F/g, "/")), m);
    }, {}),
    pathname: c,
    pathnameBase: u,
    pattern: e,
  };
}
function hO(e, r = !1, o = !0) {
  fn(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`,
  );
  let l = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(/\/:([\w-]+)(\?)?/g, (u, f, d, m, v) => {
          if ((l.push({ paramName: f, isOptional: d != null }), d)) {
            let g = v.charAt(m + u.length);
            return g && g !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
          }
          return "/([^\\/]+)";
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    e.endsWith("*")
      ? (l.push({ paramName: "*" }), (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : o
        ? (s += "\\/*$")
        : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, r ? void 0 : "i"), l]
  );
}
function mO(e) {
  try {
    return e
      .split("/")
      .map((r) => decodeURIComponent(r).replace(/\//g, "%2F"))
      .join("/");
  } catch (r) {
    return (
      fn(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`,
      ),
      e
    );
  }
}
function Rr(e, r) {
  if (r === "/") return e;
  if (!e.toLowerCase().startsWith(r.toLowerCase())) return null;
  let o = r.endsWith("/") ? r.length - 1 : r.length,
    l = e.charAt(o);
  return l && l !== "/" ? null : e.slice(o) || "/";
}
function pO({ basename: e, pathname: r }) {
  return r === "/" ? e : Cr([e, r]);
}
var jC = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Sg = (e) => jC.test(e);
function gO(e, r = "/") {
  let { pathname: o, search: l = "", hash: s = "" } = typeof e == "string" ? ba(e) : e,
    c;
  return (
    o ? ((o = xg(o)), o.startsWith("/") ? (c = $1(o.substring(1), "/")) : (c = $1(o, r))) : (c = r),
    { pathname: c, search: yO(l), hash: bO(s) }
  );
}
function $1(e, r) {
  let o = uf(r).split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? o.length > 1 && o.pop() : s !== "." && o.push(s);
    }),
    o.length > 1 ? o.join("/") : "/"
  );
}
function km(e, r, o, l) {
  return `Cannot include a '${e}' character in a manually specified \`to.${r}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function zC(e) {
  return e.filter((r, o) => o === 0 || (r.route.path && r.route.path.length > 0));
}
function wg(e) {
  let r = zC(e);
  return r.map((o, l) => (l === r.length - 1 ? o.pathname : o.pathnameBase));
}
function Xf(e, r, o, l = !1) {
  let s;
  typeof e == "string"
    ? (s = ba(e))
    : ((s = { ...e }),
      it(!s.pathname || !s.pathname.includes("?"), km("?", "pathname", "search", s)),
      it(!s.pathname || !s.pathname.includes("#"), km("#", "pathname", "hash", s)),
      it(!s.search || !s.search.includes("#"), km("#", "search", "hash", s)));
  let c = e === "" || s.pathname === "",
    u = c ? "/" : s.pathname,
    f;
  if (u == null) f = o;
  else {
    let g = r.length - 1;
    if (!l && u.startsWith("..")) {
      let y = u.split("/");
      for (; y[0] === ".."; ) (y.shift(), (g -= 1));
      s.pathname = y.join("/");
    }
    f = g >= 0 ? r[g] : "/";
  }
  let d = gO(s, f),
    m = u && u !== "/" && u.endsWith("/"),
    v = (c || u === ".") && o.endsWith("/");
  return (!d.pathname.endsWith("/") && (m || v) && (d.pathname += "/"), d);
}
var xg = (e) => e.replace(/\/\/+/g, "/"),
  Cr = (e) => xg(e.join("/")),
  uf = (e) => e.replace(/\/+$/, ""),
  vO = (e) => uf(e).replace(/^\/*/, "/"),
  yO = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  bO = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e),
  dc = class {
    constructor(e, r, o, l = !1) {
      ((this.status = e),
        (this.statusText = r || ""),
        (this.internal = l),
        o instanceof Error ? ((this.data = o.toString()), (this.error = o)) : (this.data = o));
    }
  };
function Qs(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
function hc(e) {
  let r = e.map((o) => o.route.path).filter(Boolean);
  return Cr(r) || "/";
}
var kC =
  typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function LC(e, r) {
  let o = e;
  if (typeof o != "string" || !jC.test(o)) return { absoluteURL: void 0, isExternal: !1, to: o };
  let l = o,
    s = !1;
  if (kC)
    try {
      let c = new URL(window.location.href),
        u = o.startsWith("//") ? new URL(c.protocol + o) : new URL(o),
        f = Rr(u.pathname, r);
      u.origin === c.origin && f != null ? (o = f + u.search + u.hash) : (s = !0);
    } catch {
      fn(
        !1,
        `<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: l, isExternal: s, to: o };
}
var ko = Symbol("Uninstrumented");
function SO(e, r) {
  let o = {
    lazy: [],
    "lazy.loader": [],
    "lazy.action": [],
    "lazy.middleware": [],
    middleware: [],
    loader: [],
    action: [],
  };
  e.forEach((s) =>
    s({
      id: r.id,
      index: r.index,
      path: r.path,
      instrument(c) {
        let u = Object.keys(o);
        for (let f of u) c[f] && o[f].push(c[f]);
      },
    }),
  );
  let l = {};
  if (typeof r.lazy == "function" && o.lazy.length > 0) {
    let s = mi(o.lazy, r.lazy, () => {});
    s && (l.lazy = s);
  }
  if (typeof r.lazy == "object") {
    let s = r.lazy;
    ["middleware", "loader", "action"].forEach((c) => {
      let u = s[c],
        f = o[`lazy.${c}`];
      if (typeof u == "function" && f.length > 0) {
        let d = mi(f, u, () => {});
        d && (l.lazy = Object.assign(l.lazy || {}, { [c]: d }));
      }
    });
  }
  return (
    ["loader", "action"].forEach((s) => {
      let c = r[s];
      if (typeof c == "function" && o[s].length > 0) {
        let u = c[ko] ?? c,
          f = mi(o[s], u, (...d) => H1(d[0]));
        f && (s === "loader" && u.hydrate === !0 && (f.hydrate = !0), (f[ko] = u), (l[s] = f));
      }
    }),
    r.middleware &&
      r.middleware.length > 0 &&
      o.middleware.length > 0 &&
      (l.middleware = r.middleware.map((s) => {
        let c = s[ko] ?? s,
          u = mi(o.middleware, c, (...f) => H1(f[0]));
        return u ? ((u[ko] = c), u) : s;
      })),
    l
  );
}
function wO(e, r) {
  let o = { navigate: [], fetch: [] };
  if (
    (r.forEach((l) =>
      l({
        instrument(s) {
          let c = Object.keys(s);
          for (let u of c) s[u] && o[u].push(s[u]);
        },
      }),
    ),
    o.navigate.length > 0)
  ) {
    let l = e.navigate[ko] ?? e.navigate,
      s = mi(o.navigate, l, (...c) => {
        let [u, f] = c;
        return {
          to: typeof u == "number" || typeof u == "string" ? u : u ? ga(u) : ".",
          ...U1(e, f ?? {}),
        };
      });
    s && ((s[ko] = l), (e.navigate = s));
  }
  if (o.fetch.length > 0) {
    let l = e.fetch[ko] ?? e.fetch,
      s = mi(o.fetch, l, (...c) => {
        let [u, , f, d] = c;
        return { href: f ?? ".", fetcherKey: u, ...U1(e, d ?? {}) };
      });
    s && ((s[ko] = l), (e.fetch = s));
  }
  return e;
}
function mi(e, r, o) {
  return e.length === 0
    ? null
    : async (...l) => {
        let s = await BC(e, o(...l), () => r(...l), e.length - 1);
        if (s.type === "error") throw s.value;
        return s.value;
      };
}
async function BC(e, r, o, l) {
  let s = e[l],
    c;
  if (s) {
    let u,
      f = async () => (
        u
          ? console.error("You cannot call instrumented handlers more than once")
          : (u = BC(e, r, o, l - 1)),
        (c = await u),
        it(c, "Expected a result"),
        c.type === "error" && c.value instanceof Error
          ? { status: "error", error: c.value }
          : { status: "success", error: void 0 }
      );
    try {
      await s(f, r);
    } catch (d) {
      console.error("An instrumentation function threw an error:", d);
    }
    (u || (await f()), await u);
  } else
    try {
      c = { type: "success", value: await o() };
    } catch (u) {
      c = { type: "error", value: u };
    }
  return c || { type: "error", value: new Error("No result assigned in instrumentation chain.") };
}
function H1(e) {
  let { request: r, context: o, params: l, pattern: s } = e;
  return { request: xO(r), params: { ...l }, pattern: s, context: CO(o) };
}
function U1(e, r) {
  return {
    currentUrl: ga(e.state.location),
    ...("formMethod" in r ? { formMethod: r.formMethod } : {}),
    ...("formEncType" in r ? { formEncType: r.formEncType } : {}),
    ...("formData" in r ? { formData: r.formData } : {}),
    ...("body" in r ? { body: r.body } : {}),
  };
}
function xO(e) {
  return { method: e.method, url: e.url, headers: { get: (...r) => e.headers.get(...r) } };
}
function CO(e) {
  if (RO(e)) {
    let r = { ...e };
    return (Object.freeze(r), r);
  } else return { get: (r) => e.get(r) };
}
var EO = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function RO(e) {
  if (e === null || typeof e != "object") return !1;
  const r = Object.getPrototypeOf(e);
  return (
    r === Object.prototype || r === null || Object.getOwnPropertyNames(r).sort().join("\0") === EO
  );
}
var $C = ["POST", "PUT", "PATCH", "DELETE"],
  TO = new Set($C),
  _O = ["GET", ...$C],
  DO = new Set(_O),
  HC = new Set([301, 302, 303, 307, 308]),
  AO = new Set([307, 308]),
  Lm = {
    state: "idle",
    location: void 0,
    matches: void 0,
    historyAction: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  MO = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Es = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  NO = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  UC = "remix-router-transitions",
  PC = Symbol("ResetLoaderData"),
  cl,
  fi,
  Mo,
  di,
  OO = class {
    constructor(e) {
      (Os(this, cl),
        Os(this, fi),
        Os(this, Mo),
        Os(this, di),
        oa(this, cl, e),
        oa(this, fi, Yu(e)));
    }
    get stableRoutes() {
      return Sr(this, cl);
    }
    get activeRoutes() {
      return Sr(this, Mo) ?? Sr(this, cl);
    }
    get branches() {
      return Sr(this, di) ?? Sr(this, fi);
    }
    get hasHMRRoutes() {
      return Sr(this, Mo) != null;
    }
    setRoutes(e) {
      (oa(this, cl, e), oa(this, fi, Yu(e)));
    }
    setHmrRoutes(e) {
      (oa(this, Mo, e), oa(this, di, Yu(e)));
    }
    commitHmrRoutes() {
      Sr(this, Mo) &&
        (oa(this, cl, Sr(this, Mo)),
        oa(this, fi, Sr(this, di)),
        oa(this, Mo, void 0),
        oa(this, di, void 0));
    }
  };
cl = new WeakMap();
fi = new WeakMap();
Mo = new WeakMap();
di = new WeakMap();
function jO(e) {
  const r = e.window ? e.window : typeof window < "u" ? window : void 0,
    o = typeof r < "u" && typeof r.document < "u" && typeof r.document.createElement < "u";
  it(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let l = e.hydrationRouteProperties || [],
    s = e.mapRouteProperties || NO,
    c = s;
  if (e.instrumentations) {
    let L = e.instrumentations;
    c = (I) => ({ ...s(I), ...SO(L.map((G) => G.route).filter(Boolean), I) });
  }
  let u = {},
    f = new OO(Ks(e.routes, c, void 0, u)),
    d = e.basename || "/";
  d.startsWith("/") || (d = `/${d}`);
  let m = e.dataStrategy || $O,
    v = { ...e.future },
    g = null,
    y = new Set(),
    b = null,
    x = null,
    C = null,
    R = null,
    T = e.hydrationData != null,
    _ = Ir(f.activeRoutes, e.history.location, d, !1, f.branches),
    D = !1,
    j = null,
    z,
    H;
  if (_ == null && !e.patchRoutesOnNavigation) {
    let L = wr(404, { pathname: e.history.location.pathname }),
      { matches: I, route: G } = Lu(f.activeRoutes);
    ((z = !0), (H = !z), (_ = I), (j = { [G.id]: L }));
  } else if (
    (_ &&
      !e.hydrationData &&
      Xt(_, f.activeRoutes, e.history.location.pathname).active &&
      (_ = null),
    _)
  )
    if (_.some((L) => L.route.lazy)) ((z = !1), (H = !z));
    else if (!_.some((L) => Cg(L.route))) ((z = !0), (H = !z));
    else {
      let L = e.hydrationData ? e.hydrationData.loaderData : null,
        I = e.hydrationData ? e.hydrationData.errors : null,
        G = _;
      if (I) {
        let ce = _.findIndex((he) => I[he.route.id] !== void 0);
        G = G.slice(0, ce + 1);
      }
      ((H = !1),
        (z = !0),
        G.forEach((ce) => {
          let he = VC(ce.route, L, I);
          ((H = H || he.renderFallback), (z = z && !he.shouldLoad));
        }));
    }
  else {
    ((z = !1), (H = !z), (_ = []));
    let L = Xt(null, f.activeRoutes, e.history.location.pathname);
    L.active && L.matches && ((D = !0), (_ = L.matches));
  }
  let $,
    M = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: _,
      initialized: z,
      renderFallback: H,
      navigation: Lm,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || j,
      fetchers: new Map(),
      blockers: new Map(),
    },
    K = "POP",
    Y = null,
    ee = !1,
    ne,
    oe = !1,
    U = new Map(),
    re = null,
    N = !1,
    k = !1,
    B = new Set(),
    F = new Map(),
    Z = 0,
    O = -1,
    P = new Map(),
    Q = new Set(),
    ae = new Map(),
    ie = new Map(),
    ue = new Set(),
    ge = new Map(),
    Se,
    Ce = null;
  function Ye() {
    if (
      ((g = e.history.listen(({ action: L, location: I, delta: G }) => {
        if (Se) {
          (Se(), (Se = void 0));
          return;
        }
        fn(
          ge.size === 0 || G != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let ce = Nn({ currentLocation: M.location, nextLocation: I, historyAction: L });
        if (ce && G != null) {
          let he = new Promise((Te) => {
            Se = Te;
          });
          (e.history.go(G * -1),
            gn(ce, {
              state: "blocked",
              location: I,
              proceed() {
                (gn(ce, { state: "proceeding", proceed: void 0, reset: void 0, location: I }),
                  he.then(() => e.history.go(G)));
              },
              reset() {
                let Te = new Map(M.blockers);
                (Te.set(ce, Es), _e({ blockers: Te }));
              },
            }),
            Y?.resolve(),
            (Y = null));
          return;
        }
        return be(L, I);
      })),
      o)
    ) {
      nj(r, U);
      let L = () => rj(r, U);
      (r.addEventListener("pagehide", L), (re = () => r.removeEventListener("pagehide", L)));
    }
    return (M.initialized || be("POP", M.location, { initialHydration: !0 }), $);
  }
  function je() {
    (g && g(),
      re && re(),
      y.clear(),
      ne && ne.abort(),
      M.fetchers.forEach((L, I) => Vt(M.fetchers, I)),
      M.blockers.forEach((L, I) => Mn(I)));
  }
  function de(L) {
    if ((y.add(L), b)) {
      let { newErrors: I } = b;
      ((b = null),
        L(M, { deletedFetchers: [], newErrors: I, viewTransitionOpts: void 0, flushSync: !1 }));
    }
    return () => y.delete(L);
  }
  function _e(L, I = {}) {
    (L.matches &&
      (L.matches = L.matches.map((he) => {
        let Te = u[he.route.id],
          De = he.route;
        return De.element !== Te.element ||
          De.errorElement !== Te.errorElement ||
          De.hydrateFallbackElement !== Te.hydrateFallbackElement
          ? { ...he, route: Te }
          : he;
      })),
      (M = { ...M, ...L }));
    let G = [],
      ce = [];
    (M.fetchers.forEach((he, Te) => {
      he.state === "idle" && (ue.has(Te) ? G.push(Te) : ce.push(Te));
    }),
      ue.forEach((he) => {
        !M.fetchers.has(he) && !F.has(he) && G.push(he);
      }),
      y.size === 0 && (b = { newErrors: L.errors ?? null }),
      [...y].forEach((he) =>
        he(M, {
          deletedFetchers: G,
          newErrors: L.errors ?? null,
          viewTransitionOpts: I.viewTransitionOpts,
          flushSync: I.flushSync === !0,
        }),
      ),
      G.forEach((he) => Vt(M.fetchers, he)),
      ce.forEach((he) => M.fetchers.delete(he)));
  }
  function ze(L, I, { flushSync: G } = {}) {
    let ce =
        M.actionData != null &&
        M.navigation.formMethod != null &&
        jn(M.navigation.formMethod) &&
        M.navigation.state === "loading" &&
        L.state?._isRedirect !== !0,
      he;
    I.actionData
      ? Object.keys(I.actionData).length > 0
        ? (he = I.actionData)
        : (he = null)
      : ce
        ? (he = M.actionData)
        : (he = null);
    let Te = I.loaderData
        ? Z1(M.loaderData, I.loaderData, I.matches || [], I.errors)
        : M.loaderData,
      De = M.blockers;
    De.size > 0 && ((De = new Map(De)), De.forEach((ke, Ke) => De.set(Ke, Es)));
    let Ae = N ? !1 : $e(L, I.matches || M.matches),
      ve =
        ee === !0 ||
        (M.navigation.formMethod != null &&
          jn(M.navigation.formMethod) &&
          L.state?._isRedirect !== !0);
    (f.commitHmrRoutes(),
      N ||
        K === "POP" ||
        (K === "PUSH"
          ? e.history.push(L, L.state)
          : K === "REPLACE" && e.history.replace(L, L.state)));
    let Ue;
    if (K === "POP") {
      let ke = U.get(M.location.pathname);
      ke && ke.has(L.pathname)
        ? (Ue = { currentLocation: M.location, nextLocation: L })
        : U.has(L.pathname) && (Ue = { currentLocation: L, nextLocation: M.location });
    } else if (oe) {
      let ke = U.get(M.location.pathname);
      (ke ? ke.add(L.pathname) : ((ke = new Set([L.pathname])), U.set(M.location.pathname, ke)),
        (Ue = { currentLocation: M.location, nextLocation: L }));
    }
    (_e(
      {
        ...I,
        actionData: he,
        loaderData: Te,
        historyAction: K,
        location: L,
        initialized: !0,
        renderFallback: !1,
        navigation: Lm,
        revalidation: "idle",
        restoreScrollPosition: Ae,
        preventScrollReset: ve,
        blockers: De,
      },
      { viewTransitionOpts: Ue, flushSync: G === !0 },
    ),
      (K = "POP"),
      (ee = !1),
      (oe = !1),
      (N = !1),
      (k = !1),
      Y?.resolve(),
      (Y = null),
      Ce?.resolve(),
      (Ce = null));
  }
  async function Oe(L, I) {
    if ((Y?.resolve(), (Y = null), typeof L == "number")) {
      Y || (Y = tS());
      let ut = Y.promise;
      return (e.history.go(L), ut);
    }
    let G = lp(M.location, M.matches, d, L, I?.fromRouteId, I?.relative),
      { path: ce, submission: he, error: Te } = P1(!1, G, I),
      De;
    I?.mask &&
      (De = {
        pathname: "",
        search: "",
        hash: "",
        ...(typeof I.mask == "string" ? ba(I.mask) : { ...M.location.mask, ...I.mask }),
      });
    let Ae = M.location,
      ve = Xs(Ae, ce, I && I.state, void 0, De);
    ve = { ...ve, ...e.history.encodeLocation(ve) };
    let Ue = I && I.replace != null ? I.replace : void 0,
      ke = "PUSH";
    Ue === !0
      ? (ke = "REPLACE")
      : Ue === !1 ||
        (he != null &&
          jn(he.formMethod) &&
          he.formAction === M.location.pathname + M.location.search &&
          (ke = "REPLACE"));
    let Ke = I && "preventScrollReset" in I ? I.preventScrollReset === !0 : void 0,
      qe = (I && I.flushSync) === !0,
      et = Nn({ currentLocation: Ae, nextLocation: ve, historyAction: ke });
    if (et) {
      gn(et, {
        state: "blocked",
        location: ve,
        proceed() {
          (gn(et, { state: "proceeding", proceed: void 0, reset: void 0, location: ve }), Oe(L, I));
        },
        reset() {
          let ut = new Map(M.blockers);
          (ut.set(et, Es), _e({ blockers: ut }));
        },
      });
      return;
    }
    await be(ke, ve, {
      submission: he,
      pendingError: Te,
      preventScrollReset: Ke,
      replace: I && I.replace,
      enableViewTransition: I && I.viewTransition,
      flushSync: qe,
      callSiteDefaultShouldRevalidate: I && I.defaultShouldRevalidate,
    });
  }
  function at() {
    (Ce || (Ce = tS()), pn(), _e({ revalidation: "loading" }));
    let L = Ce.promise;
    return M.navigation.state === "submitting"
      ? L
      : M.navigation.state === "idle"
        ? (be(M.historyAction, M.location, { startUninterruptedRevalidation: !0 }), L)
        : (be(K || M.historyAction, M.navigation.location, {
            overrideNavigation: M.navigation,
            enableViewTransition: oe === !0,
          }),
          L);
  }
  async function be(L, I, G) {
    (ne && ne.abort(),
      (ne = null),
      (K = L),
      (N = (G && G.startUninterruptedRevalidation) === !0),
      Re(M.location, M.matches),
      (ee = (G && G.preventScrollReset) === !0),
      (oe = (G && G.enableViewTransition) === !0));
    let ce = f.activeRoutes,
      he =
        G?.initialHydration && M.matches && M.matches.length > 0 && !D
          ? M.matches
          : Ir(ce, I, d, !1, f.branches),
      Te = (G && G.flushSync) === !0;
    if (
      he &&
      M.initialized &&
      !k &&
      YO(M.location, I) &&
      !(G && G.submission && jn(G.submission.formMethod))
    ) {
      ze(I, { matches: he }, { flushSync: Te });
      return;
    }
    let De = Xt(he, ce, I.pathname);
    if ((De.active && De.matches && (he = De.matches), !he)) {
      let { error: ht, notFoundMatches: st, route: Bt } = rn(I.pathname);
      ze(I, { matches: st, loaderData: {}, errors: { [Bt.id]: ht } }, { flushSync: Te });
      return;
    }
    let Ae =
      G && G.overrideNavigation
        ? { ...G.overrideNavigation, matches: he, historyAction: L }
        : void 0;
    ne = new AbortController();
    let ve = hi(e.history, I, ne.signal, G && G.submission),
      Ue = e.getContext ? await e.getContext() : new k1(),
      ke;
    if (G && G.pendingError) ke = [jo(he).route.id, { type: "error", error: G.pendingError }];
    else if (G && G.submission && jn(G.submission.formMethod)) {
      let ht = await we(ve, I, G.submission, he, L, Ue, De.active, G && G.initialHydration === !0, {
        replace: G.replace,
        flushSync: Te,
      });
      if (ht.shortCircuited) return;
      if (ht.pendingActionResult) {
        let [st, Bt] = ht.pendingActionResult;
        if (cr(Bt) && Qs(Bt.error) && Bt.error.status === 404) {
          ((ne = null), ze(I, { matches: ht.matches, loaderData: {}, errors: { [st]: Bt.error } }));
          return;
        }
      }
      ((he = ht.matches || he),
        (ke = ht.pendingActionResult),
        (Ae = Bm(I, he, L, G.submission)),
        (Te = !1),
        (De.active = !1),
        (ve = hi(e.history, ve.url, ve.signal)));
    }
    let {
      shortCircuited: Ke,
      matches: qe,
      loaderData: et,
      errors: ut,
      workingFetchers: Mt,
    } = await Me(
      ve,
      I,
      he,
      L,
      Ue,
      De.active,
      Ae,
      G && G.submission,
      G && G.fetcherSubmission,
      G && G.replace,
      G && G.initialHydration === !0,
      Te,
      ke,
      G && G.callSiteDefaultShouldRevalidate,
    );
    Ke ||
      ((ne = null),
      ze(I, {
        matches: qe || he,
        ...W1(ke),
        loaderData: et,
        errors: ut,
        ...(Mt ? { fetchers: Mt } : {}),
      }));
  }
  async function we(L, I, G, ce, he, Te, De, Ae, ve = {}) {
    pn();
    let Ue = ej(I, ce, he, G);
    if ((_e({ navigation: Ue }, { flushSync: ve.flushSync === !0 }), De)) {
      let qe = await an(ce, I.pathname, L.signal);
      if (qe.type === "aborted") return { shortCircuited: !0 };
      if (qe.type === "error") {
        if (qe.partialMatches.length === 0) {
          let { matches: ut, route: Mt } = Lu(f.activeRoutes);
          return { matches: ut, pendingActionResult: [Mt.id, { type: "error", error: qe.error }] };
        }
        let et = jo(qe.partialMatches).route.id;
        return {
          matches: qe.partialMatches,
          pendingActionResult: [et, { type: "error", error: qe.error }],
        };
      } else if (qe.matches) ce = qe.matches;
      else {
        let { notFoundMatches: et, error: ut, route: Mt } = rn(I.pathname);
        return { matches: et, pendingActionResult: [Mt.id, { type: "error", error: ut }] };
      }
    }
    let ke,
      Ke = Gu(ce, I);
    if (!Ke.route.action && !Ke.route.lazy)
      ke = {
        type: "error",
        error: wr(405, { method: L.method, pathname: I.pathname, routeId: Ke.route.id }),
      };
    else {
      let qe = vi(c, u, L, I, ce, Ke, Ae ? [] : l, Te),
        et = await Ie(L, I, qe, Te, null);
      if (((ke = et[Ke.route.id]), !ke)) {
        for (let ut of ce)
          if (et[ut.route.id]) {
            ke = et[ut.route.id];
            break;
          }
      }
      if (L.signal.aborted) return { shortCircuited: !0 };
    }
    if (ml(ke)) {
      let qe;
      return (
        ve && ve.replace != null
          ? (qe = ve.replace)
          : (qe =
              X1(ke.response.headers.get("Location"), new URL(L.url), d, e.history) ===
              M.location.pathname + M.location.search),
        await We(L, ke, !0, { submission: G, replace: qe }),
        { shortCircuited: !0 }
      );
    }
    if (cr(ke)) {
      let qe = jo(ce, Ke.route.id);
      return (
        (ve && ve.replace) !== !0 && (K = "PUSH"),
        { matches: ce, pendingActionResult: [qe.route.id, ke, Ke.route.id] }
      );
    }
    return { matches: ce, pendingActionResult: [Ke.route.id, ke] };
  }
  async function Me(L, I, G, ce, he, Te, De, Ae, ve, Ue, ke, Ke, qe, et) {
    let ut = De || Bm(I, G, ce, Ae),
      Mt = Ae || ve || eS(ut),
      ht = !N && !ke;
    if (Te) {
      if (ht) {
        let Ct = xe(qe);
        _e({ navigation: ut, ...(Ct !== void 0 ? { actionData: Ct } : {}) }, { flushSync: Ke });
      }
      let Qe = await an(G, I.pathname, L.signal);
      if (Qe.type === "aborted") return { shortCircuited: !0 };
      if (Qe.type === "error") {
        if (Qe.partialMatches.length === 0) {
          let { matches: Hn, route: tr } = Lu(f.activeRoutes);
          return { matches: Hn, loaderData: {}, errors: { [tr.id]: Qe.error } };
        }
        let Ct = jo(Qe.partialMatches).route.id;
        return { matches: Qe.partialMatches, loaderData: {}, errors: { [Ct]: Qe.error } };
      } else if (Qe.matches) G = Qe.matches;
      else {
        let { error: Ct, notFoundMatches: Hn, route: tr } = rn(I.pathname);
        return { matches: Hn, loaderData: {}, errors: { [tr.id]: Ct } };
      }
    }
    let st = f.activeRoutes,
      { dsMatches: Bt, revalidatingFetchers: ct } = V1(
        L,
        he,
        c,
        u,
        e.history,
        M,
        G,
        Mt,
        I,
        ke ? [] : l,
        ke === !0,
        k,
        B,
        ue,
        ae,
        Q,
        st,
        d,
        e.patchRoutesOnNavigation != null,
        f.branches,
        qe,
        et,
      );
    if (
      ((O = ++Z),
      !e.dataStrategy &&
        !Bt.some((Qe) => Qe.shouldLoad) &&
        !Bt.some((Qe) => Qe.route.middleware && Qe.route.middleware.length > 0) &&
        ct.length === 0)
    ) {
      let Qe = new Map(M.fetchers),
        Ct = zr(Qe);
      return (
        ze(
          I,
          {
            matches: G,
            loaderData: {},
            errors: qe && cr(qe[1]) ? { [qe[0]]: qe[1].error } : null,
            ...W1(qe),
            ...(Ct ? { fetchers: Qe } : {}),
          },
          { flushSync: Ke },
        ),
        { shortCircuited: !0 }
      );
    }
    if (ht) {
      let Qe = {};
      if (!Te) {
        Qe.navigation = ut;
        let Ct = xe(qe);
        Ct !== void 0 && (Qe.actionData = Ct);
      }
      (ct.length > 0 && (Qe.fetchers = Be(ct)), _e(Qe, { flushSync: Ke }));
    }
    ct.forEach((Qe) => {
      (At(Qe.key), Qe.controller && F.set(Qe.key, Qe.controller));
    });
    let Br = () => ct.forEach((Qe) => At(Qe.key));
    ne && ne.signal.addEventListener("abort", Br);
    let { loaderResults: fr, fetcherResults: Cn } = await Yt(Bt, ct, L, I, he);
    if (L.signal.aborted) return { shortCircuited: !0 };
    (ne && ne.signal.removeEventListener("abort", Br), ct.forEach((Qe) => F.delete(Qe.key)));
    let vn = Bu(fr);
    if (vn) return (await We(L, vn.result, !0, { replace: Ue }), { shortCircuited: !0 });
    if (((vn = Bu(Cn)), vn))
      return (Q.add(vn.key), await We(L, vn.result, !0, { replace: Ue }), { shortCircuited: !0 });
    let $n = new Map(M.fetchers),
      { loaderData: Sa, errors: In } = Q1(M, G, fr, qe, ct, Cn, $n);
    ke && M.errors && (In = { ...M.errors, ...In });
    let wa = zr($n),
      $r = kr(O, $n),
      er = wa || $r || ct.length > 0;
    return { matches: G, loaderData: Sa, errors: In, ...(er ? { workingFetchers: $n } : {}) };
  }
  function xe(L) {
    if (L && !cr(L[1])) return { [L[0]]: L[1].data };
    if (M.actionData) return Object.keys(M.actionData).length === 0 ? null : M.actionData;
  }
  function Be(L) {
    let I = new Map(M.fetchers);
    return (
      L.forEach((G) => {
        let ce = I.get(G.key),
          he = Rs(void 0, ce ? ce.data : void 0);
        I.set(G.key, he);
      }),
      I
    );
  }
  async function Ve(L, I, G, ce) {
    At(L);
    let he = (ce && ce.flushSync) === !0,
      Te = f.activeRoutes,
      De = lp(M.location, M.matches, d, G, I, ce?.relative),
      Ae = Ir(Te, De, d, !1, f.branches),
      ve = Xt(Ae, Te, De);
    if ((ve.active && ve.matches && (Ae = ve.matches), !Ae)) {
      zt(L, I, wr(404, { pathname: De }), { flushSync: he });
      return;
    }
    let { path: Ue, submission: ke, error: Ke } = P1(!0, De, ce);
    if (Ke) {
      zt(L, I, Ke, { flushSync: he });
      return;
    }
    let qe = e.getContext ? await e.getContext() : new k1(),
      et = (ce && ce.preventScrollReset) === !0;
    if (ke && jn(ke.formMethod)) {
      await Xe(L, I, Ue, Ae, qe, ve.active, he, et, ke, ce && ce.defaultShouldRevalidate);
      return;
    }
    (ae.set(L, { routeId: I, path: Ue }), await ot(L, I, Ue, Ae, qe, ve.active, he, et, ke));
  }
  async function Xe(L, I, G, ce, he, Te, De, Ae, ve, Ue) {
    (pn(), ae.delete(L));
    let ke = M.fetchers.get(L);
    Gt(L, tj(ve, ke), { flushSync: De });
    let Ke = new AbortController(),
      qe = hi(e.history, G, Ke.signal, ve);
    if (Te) {
      let Et = await an(ce, new URL(qe.url).pathname, qe.signal, L);
      if (Et.type === "aborted") return;
      if (Et.type === "error") {
        zt(L, I, Et.error, { flushSync: De });
        return;
      } else if (Et.matches) ce = Et.matches;
      else {
        zt(L, I, wr(404, { pathname: G }), { flushSync: De });
        return;
      }
    }
    let et = Gu(ce, G);
    if (!et.route.action && !et.route.lazy) {
      let Et = wr(405, { method: ve.formMethod, pathname: G, routeId: I });
      zt(L, I, Et, { flushSync: De });
      return;
    }
    F.set(L, Ke);
    let ut = Z,
      Mt = vi(c, u, qe, G, ce, et, l, he),
      ht = await Ie(qe, G, Mt, he, L),
      st = ht[et.route.id];
    if (!st) {
      for (let Et of Mt)
        if (ht[Et.route.id]) {
          st = ht[Et.route.id];
          break;
        }
    }
    if (qe.signal.aborted) {
      F.get(L) === Ke && F.delete(L);
      return;
    }
    if (ue.has(L)) {
      if (ml(st) || cr(st)) {
        Gt(L, la(void 0));
        return;
      }
    } else {
      if (ml(st))
        if ((F.delete(L), O > ut)) {
          Gt(L, la(void 0));
          return;
        } else
          return (
            Q.add(L),
            Gt(L, Rs(ve)),
            We(qe, st, !1, { fetcherSubmission: ve, preventScrollReset: Ae })
          );
      if (cr(st)) {
        zt(L, I, st.error);
        return;
      }
    }
    let Bt = M.navigation.location || M.location,
      ct = hi(e.history, Bt, Ke.signal),
      Br = f.activeRoutes,
      fr =
        M.navigation.state !== "idle"
          ? Ir(Br, M.navigation.location, d, !1, f.branches)
          : M.matches;
    it(fr, "Didn't find any matches after fetcher action");
    let Cn = ++Z;
    P.set(L, Cn);
    let { dsMatches: vn, revalidatingFetchers: $n } = V1(
        ct,
        he,
        c,
        u,
        e.history,
        M,
        fr,
        ve,
        Bt,
        l,
        !1,
        k,
        B,
        ue,
        ae,
        Q,
        Br,
        d,
        e.patchRoutesOnNavigation != null,
        f.branches,
        [et.route.id, st],
        Ue,
      ),
      Sa = Rs(ve, st.data),
      In = new Map(M.fetchers);
    (In.set(L, Sa),
      $n
        .filter((Et) => Et.key !== L)
        .forEach((Et) => {
          let Hr = Et.key,
            yn = In.get(Hr),
            ye = Rs(void 0, yn ? yn.data : void 0);
          (In.set(Hr, ye), At(Hr), Et.controller && F.set(Hr, Et.controller));
        }),
      _e({ fetchers: In }));
    let wa = () => $n.forEach((Et) => At(Et.key));
    Ke.signal.addEventListener("abort", wa);
    let { loaderResults: $r, fetcherResults: er } = await Yt(vn, $n, ct, Bt, he);
    if (Ke.signal.aborted) return;
    (Ke.signal.removeEventListener("abort", wa),
      P.delete(L),
      F.delete(L),
      $n.forEach((Et) => F.delete(Et.key)));
    let Qe = M.fetchers.has(L),
      Ct = (Et) => {
        if (!Qe) return Et;
        let Hr = new Map(Et.fetchers);
        return (Hr.set(L, la(st.data)), { ...Et, fetchers: Hr });
      },
      Hn = Bu($r);
    if (Hn) return ((M = Ct(M)), We(ct, Hn.result, !1, { preventScrollReset: Ae }));
    if (((Hn = Bu(er)), Hn))
      return (Q.add(Hn.key), (M = Ct(M)), We(ct, Hn.result, !1, { preventScrollReset: Ae }));
    let tr = new Map(M.fetchers);
    Qe && tr.set(L, la(st.data));
    let { loaderData: ea, errors: xa } = Q1(M, fr, $r, void 0, $n, er, tr);
    (kr(Cn, tr),
      M.navigation.state === "loading" && Cn > O
        ? (it(K, "Expected pending action"),
          ne && ne.abort(),
          ze(M.navigation.location, { matches: fr, loaderData: ea, errors: xa, fetchers: tr }))
        : (_e({ errors: xa, loaderData: Z1(M.loaderData, ea, fr, xa), fetchers: tr }), (k = !1)));
  }
  async function ot(L, I, G, ce, he, Te, De, Ae, ve) {
    let Ue = M.fetchers.get(L);
    Gt(L, Rs(ve, Ue ? Ue.data : void 0), { flushSync: De });
    let ke = new AbortController(),
      Ke = hi(e.history, G, ke.signal);
    if (Te) {
      let st = await an(ce, new URL(Ke.url).pathname, Ke.signal, L);
      if (st.type === "aborted") return;
      if (st.type === "error") {
        zt(L, I, st.error, { flushSync: De });
        return;
      } else if (st.matches) ce = st.matches;
      else {
        zt(L, I, wr(404, { pathname: G }), { flushSync: De });
        return;
      }
    }
    let qe = Gu(ce, G);
    F.set(L, ke);
    let et = Z,
      ut = vi(c, u, Ke, G, ce, qe, l, he),
      Mt = await Ie(Ke, G, ut, he, L),
      ht = Mt[qe.route.id];
    if (!ht) {
      for (let st of ce)
        if (Mt[st.route.id]) {
          ht = Mt[st.route.id];
          break;
        }
    }
    if ((F.get(L) === ke && F.delete(L), !Ke.signal.aborted)) {
      if (ue.has(L)) {
        Gt(L, la(void 0));
        return;
      }
      if (ml(ht))
        if (O > et) {
          Gt(L, la(void 0));
          return;
        } else {
          (Q.add(L), await We(Ke, ht, !1, { preventScrollReset: Ae }));
          return;
        }
      if (cr(ht)) {
        zt(L, I, ht.error);
        return;
      }
      Gt(L, la(ht.data));
    }
  }
  async function We(
    L,
    I,
    G,
    { submission: ce, fetcherSubmission: he, preventScrollReset: Te, replace: De } = {},
  ) {
    (G || (Y?.resolve(), (Y = null)), I.response.headers.has("X-Remix-Revalidate") && (k = !0));
    let Ae = I.response.headers.get("Location");
    (it(Ae, "Expected a Location header on the redirect Response"),
      (Ae = X1(Ae, new URL(L.url), d, e.history)));
    let ve = Xs(M.location, Ae, { _isRedirect: !0 });
    if (o) {
      let ut = !1;
      if (I.response.headers.has("X-Remix-Reload-Document")) ut = !0;
      else if (Sg(Ae)) {
        const Mt = AC(Ae, !0);
        ut = Mt.origin !== r.location.origin || Rr(Mt.pathname, d) == null;
      }
      if (ut) {
        De ? r.location.replace(Ae) : r.location.assign(Ae);
        return;
      }
    }
    ne = null;
    let Ue = De === !0 || I.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH",
      { formMethod: ke, formAction: Ke, formEncType: qe } = M.navigation;
    !ce && !he && ke && Ke && qe && (ce = eS(M.navigation));
    let et = ce || he;
    if (AO.has(I.response.status) && et && jn(et.formMethod))
      await be(Ue, ve, {
        submission: { ...et, formAction: Ae },
        preventScrollReset: Te || ee,
        enableViewTransition: G ? oe : void 0,
      });
    else {
      let ut = Bm(ve, [], Ue, ce);
      await be(Ue, ve, {
        overrideNavigation: ut,
        fetcherSubmission: he,
        preventScrollReset: Te || ee,
        enableViewTransition: G ? oe : void 0,
      });
    }
  }
  async function Ie(L, I, G, ce, he) {
    let Te,
      De = {};
    try {
      Te = await UO(m, L, I, G, he, ce, !1);
    } catch (Ae) {
      return (
        G.filter((ve) => ve.shouldLoad).forEach((ve) => {
          De[ve.route.id] = { type: "error", error: Ae };
        }),
        De
      );
    }
    if (L.signal.aborted) return De;
    if (!jn(L.method))
      for (let Ae of G) {
        if (Te[Ae.route.id]?.type === "error") break;
        !Te.hasOwnProperty(Ae.route.id) &&
          !M.loaderData.hasOwnProperty(Ae.route.id) &&
          (!M.errors || !M.errors.hasOwnProperty(Ae.route.id)) &&
          Ae.shouldCallHandler() &&
          (Te[Ae.route.id] = {
            type: "error",
            result: new Error(`No result returned from dataStrategy for route ${Ae.route.id}`),
          });
      }
    for (let [Ae, ve] of Object.entries(Te))
      if (QO(ve)) {
        let Ue = ve.result;
        De[Ae] = { type: "redirect", response: FO(Ue, L, Ae, G, d) };
      } else De[Ae] = await IO(ve);
    return De;
  }
  async function Yt(L, I, G, ce, he) {
    let Te = Ie(G, ce, L, he, null),
      De = Promise.all(
        I.map(async (Ue) => {
          if (Ue.matches && Ue.match && Ue.request && Ue.controller) {
            let Ke = (await Ie(Ue.request, Ue.path, Ue.matches, he, Ue.key))[Ue.match.route.id];
            return { [Ue.key]: Ke };
          } else
            return Promise.resolve({
              [Ue.key]: { type: "error", error: wr(404, { pathname: Ue.path }) },
            });
        }),
      ),
      Ae = await Te,
      ve = (await De).reduce((Ue, ke) => Object.assign(Ue, ke), {});
    return { loaderResults: Ae, fetcherResults: ve };
  }
  function pn() {
    ((k = !0),
      ae.forEach((L, I) => {
        (F.has(I) && B.add(I), At(I));
      }));
  }
  function Gt(L, I, G = {}) {
    let ce = new Map(M.fetchers);
    (ce.set(L, I), _e({ fetchers: ce }, { flushSync: (G && G.flushSync) === !0 }));
  }
  function zt(L, I, G, ce = {}) {
    let he = jo(M.matches, I),
      Te = new Map(M.fetchers);
    (Vt(Te, L),
      _e(
        { errors: { [he.route.id]: G }, fetchers: Te },
        { flushSync: (ce && ce.flushSync) === !0 },
      ));
  }
  function nn(L) {
    return (ie.set(L, (ie.get(L) || 0) + 1), ue.has(L) && ue.delete(L), M.fetchers.get(L) || MO);
  }
  function An(L, I) {
    (At(L, I?.reason), Gt(L, la(null)));
  }
  function Vt(L, I) {
    let G = M.fetchers.get(I);
    (F.has(I) && !(G && G.state === "loading" && P.has(I)) && At(I),
      ae.delete(I),
      P.delete(I),
      Q.delete(I),
      ue.delete(I),
      B.delete(I),
      L.delete(I));
  }
  function Ht(L) {
    let I = (ie.get(L) || 0) - 1;
    (I <= 0 ? (ie.delete(L), ue.add(L)) : ie.set(L, I), _e({ fetchers: new Map(M.fetchers) }));
  }
  function At(L, I) {
    let G = F.get(L);
    G && (G.abort(I), F.delete(L));
  }
  function Ft(L, I) {
    for (let G of L) {
      let ce = I.get(G);
      it(ce, `Expected fetcher: ${G}`);
      let he = la(ce.data);
      I.set(G, he);
    }
  }
  function zr(L) {
    let I = [],
      G = !1;
    for (let ce of Q) {
      let he = L.get(ce);
      (it(he, `Expected fetcher: ${ce}`),
        he.state === "loading" && (Q.delete(ce), I.push(ce), (G = !0)));
    }
    return (Ft(I, L), G);
  }
  function kr(L, I) {
    let G = [];
    for (let [ce, he] of P)
      if (he < L) {
        let Te = I.get(ce);
        (it(Te, `Expected fetcher: ${ce}`),
          Te.state === "loading" && (At(ce), P.delete(ce), G.push(ce)));
      }
    return (Ft(G, I), G.length > 0);
  }
  function Lr(L, I) {
    let G = M.blockers.get(L) || Es;
    return (ge.get(L) !== I && ge.set(L, I), G);
  }
  function Mn(L) {
    (M.blockers.delete(L), ge.delete(L));
  }
  function gn(L, I) {
    let G = M.blockers.get(L) || Es;
    it(
      (G.state === "unblocked" && I.state === "blocked") ||
        (G.state === "blocked" && I.state === "blocked") ||
        (G.state === "blocked" && I.state === "proceeding") ||
        (G.state === "blocked" && I.state === "unblocked") ||
        (G.state === "proceeding" && I.state === "unblocked"),
      `Invalid blocker state transition: ${G.state} -> ${I.state}`,
    );
    let ce = new Map(M.blockers);
    (ce.set(L, I), _e({ blockers: ce }));
  }
  function Nn({ currentLocation: L, nextLocation: I, historyAction: G }) {
    if (ge.size === 0) return;
    ge.size > 1 && fn(!1, "A router only supports one blocker at a time");
    let ce = Array.from(ge.entries()),
      [he, Te] = ce[ce.length - 1],
      De = M.blockers.get(he);
    if (
      !(De && De.state === "proceeding") &&
      Te({ currentLocation: L, nextLocation: I, historyAction: G })
    )
      return he;
  }
  function rn(L) {
    let I = wr(404, { pathname: L }),
      G = f.activeRoutes,
      { matches: ce, route: he } = Lu(G);
    return { notFoundMatches: ce, route: he, error: I };
  }
  function Bn(L, I, G) {
    if (((x = L), (R = I), (C = G || null), !T && M.navigation === Lm)) {
      T = !0;
      let ce = $e(M.location, M.matches);
      ce != null && _e({ restoreScrollPosition: ce });
    }
    return () => {
      ((x = null), (R = null), (C = null));
    };
  }
  function xn(L, I) {
    return (
      (C &&
        C(
          L,
          I.map((ce) => nO(ce, M.loaderData)),
        )) ||
      L.key
    );
  }
  function Re(L, I) {
    if (x && R) {
      let G = xn(L, I);
      x[G] = R();
    }
  }
  function $e(L, I) {
    if (x) {
      let G = xn(L, I),
        ce = x[G];
      if (typeof ce == "number") return ce;
    }
    return null;
  }
  function Xt(L, I, G) {
    if (e.patchRoutesOnNavigation) {
      let ce = f.branches;
      if (L) {
        if (Object.keys(L[0].params).length > 0)
          return { active: !0, matches: Ir(I, G, d, !0, ce) };
      } else return { active: !0, matches: Ir(I, G, d, !0, ce) || [] };
    }
    return { active: !1, matches: null };
  }
  async function an(L, I, G, ce) {
    if (!e.patchRoutesOnNavigation) return { type: "success", matches: L };
    let he = L;
    for (;;) {
      let Te = u;
      try {
        await e.patchRoutesOnNavigation({
          signal: G,
          path: I,
          matches: he,
          fetcherKey: ce,
          patch: (Ue, ke) => {
            G.aborted || I1(Ue, ke, f, Te, c, !1);
          },
        });
      } catch (Ue) {
        return { type: "error", error: Ue, partialMatches: he };
      }
      if (G.aborted) return { type: "aborted" };
      let De = f.branches,
        Ae = Ir(f.activeRoutes, I, d, !1, De),
        ve = null;
      if (Ae) {
        if (Object.keys(Ae[0].params).length === 0) return { type: "success", matches: Ae };
        if (
          ((ve = Ir(f.activeRoutes, I, d, !0, De)),
          !(ve && he.length < ve.length && yt(he, ve.slice(0, he.length))))
        )
          return { type: "success", matches: Ae };
      }
      if ((ve || (ve = Ir(f.activeRoutes, I, d, !0, De)), !ve || yt(he, ve)))
        return { type: "success", matches: null };
      he = ve;
    }
  }
  function yt(L, I) {
    return L.length === I.length && L.every((G, ce) => G.route.id === I[ce].route.id);
  }
  function kt(L) {
    ((u = {}), f.setHmrRoutes(Ks(L, c, void 0, u)));
  }
  function Tt(L, I, G = !1) {
    (I1(L, I, f, u, c, G), f.hasHMRRoutes || _e({}));
  }
  return (
    ($ = {
      get basename() {
        return d;
      },
      get future() {
        return v;
      },
      get state() {
        return M;
      },
      get routes() {
        return f.stableRoutes;
      },
      get branches() {
        return f.branches;
      },
      get manifest() {
        return u;
      },
      get window() {
        return r;
      },
      initialize: Ye,
      subscribe: de,
      enableScrollRestoration: Bn,
      navigate: Oe,
      fetch: Ve,
      revalidate: at,
      createHref: (L) => e.history.createHref(L),
      encodeLocation: (L) => e.history.encodeLocation(L),
      getFetcher: nn,
      resetFetcher: An,
      deleteFetcher: Ht,
      dispose: je,
      getBlocker: Lr,
      deleteBlocker: Mn,
      patchRoutes: Tt,
      _internalFetchControllers: F,
      _internalSetRoutes: kt,
      _internalSetStateDoNotUseOrYouWillBreakYourApp(L) {
        _e(L);
      },
    }),
    e.instrumentations && ($ = wO($, e.instrumentations.map((L) => L.router).filter(Boolean))),
    $
  );
}
function zO(e) {
  return (
    e != null && (("formData" in e && e.formData != null) || ("body" in e && e.body !== void 0))
  );
}
function lp(e, r, o, l, s, c) {
  let u, f;
  if (s) {
    u = [];
    for (let m of r)
      if ((u.push(m), m.route.id === s)) {
        f = m;
        break;
      }
  } else ((u = r), (f = r[r.length - 1]));
  let d = Xf(l || ".", wg(u), Rr(e.pathname, o) || e.pathname, c === "path");
  if (
    (l == null && ((d.search = e.search), (d.hash = e.hash)),
    (l == null || l === "" || l === ".") && f)
  ) {
    let m = Rg(d.search);
    if (f.route.index && !m) d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index";
    else if (!f.route.index && m) {
      let v = new URLSearchParams(d.search),
        g = v.getAll("index");
      (v.delete("index"), g.filter((b) => b).forEach((b) => v.append("index", b)));
      let y = v.toString();
      d.search = y ? `?${y}` : "";
    }
  }
  return (o !== "/" && (d.pathname = pO({ basename: o, pathname: d.pathname })), ga(d));
}
function P1(e, r, o) {
  if (!o || !zO(o)) return { path: r };
  if (o.formMethod && !JO(o.formMethod))
    return { path: r, error: wr(405, { method: o.formMethod }) };
  let l = () => ({ path: r, error: wr(400, { type: "invalid-body" }) }),
    c = (o.formMethod || "get").toUpperCase(),
    u = KC(r);
  if (o.body !== void 0) {
    if (o.formEncType === "text/plain") {
      if (!jn(c)) return l();
      let g =
        typeof o.body == "string"
          ? o.body
          : o.body instanceof FormData || o.body instanceof URLSearchParams
            ? Array.from(o.body.entries()).reduce(
                (y, [b, x]) => `${y}${b}=${x}
`,
                "",
              )
            : String(o.body);
      return {
        path: r,
        submission: {
          formMethod: c,
          formAction: u,
          formEncType: o.formEncType,
          formData: void 0,
          json: void 0,
          text: g,
        },
      };
    } else if (o.formEncType === "application/json") {
      if (!jn(c)) return l();
      try {
        let g = typeof o.body == "string" ? JSON.parse(o.body) : o.body;
        return {
          path: r,
          submission: {
            formMethod: c,
            formAction: u,
            formEncType: o.formEncType,
            formData: void 0,
            json: g,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  it(typeof FormData == "function", "FormData is not available in this environment");
  let f, d;
  if (o.formData) ((f = sp(o.formData)), (d = o.formData));
  else if (o.body instanceof FormData) ((f = sp(o.body)), (d = o.body));
  else if (o.body instanceof URLSearchParams) ((f = o.body), (d = K1(f)));
  else if (o.body == null) ((f = new URLSearchParams()), (d = new FormData()));
  else
    try {
      ((f = new URLSearchParams(o.body)), (d = K1(f)));
    } catch {
      return l();
    }
  let m = {
    formMethod: c,
    formAction: u,
    formEncType: (o && o.formEncType) || "application/x-www-form-urlencoded",
    formData: d,
    json: void 0,
    text: void 0,
  };
  if (jn(m.formMethod)) return { path: r, submission: m };
  let v = ba(r);
  return (
    e && v.search && Rg(v.search) && f.append("index", ""),
    (v.search = `?${f}`),
    { path: ga(v), submission: m }
  );
}
function V1(e, r, o, l, s, c, u, f, d, m, v, g, y, b, x, C, R, T, _, D, j, z) {
  let H = j ? (cr(j[1]) ? j[1].error : j[1].data) : void 0,
    $ = s.createURL(c.location),
    M = s.createURL(d),
    K;
  if (v && c.errors) {
    let N = Object.keys(c.errors)[0];
    K = u.findIndex((k) => k.route.id === N);
  } else if (j && cr(j[1])) {
    let N = j[0];
    K = u.findIndex((k) => k.route.id === N) - 1;
  }
  let Y = j ? j[1].statusCode : void 0,
    ee = Y && Y >= 400,
    ne = {
      currentUrl: $,
      currentParams: c.matches[0]?.params || {},
      nextUrl: M,
      nextParams: u[0].params,
      ...f,
      actionResult: H,
      actionStatus: Y,
    },
    oe = hc(u),
    U = u.map((N, k) => {
      let { route: B } = N,
        F = null;
      if (K != null && k > K) F = !1;
      else if (B.lazy) F = !0;
      else if (!Cg(B)) F = !1;
      else if (v) {
        let { shouldLoad: Q } = VC(B, c.loaderData, c.errors);
        F = Q;
      } else kO(c.loaderData, c.matches[k], N) && (F = !0);
      if (F !== null) return ip(o, l, e, d, oe, N, m, r, F);
      let Z = !1;
      typeof z == "boolean"
        ? (Z = z)
        : ee
          ? (Z = !1)
          : (g ||
              $.pathname + $.search === M.pathname + M.search ||
              $.search !== M.search ||
              LO(c.matches[k], N)) &&
            (Z = !0);
      let O = { ...ne, defaultShouldRevalidate: Z },
        P = $s(N, O);
      return ip(o, l, e, d, oe, N, m, r, P, O, z);
    }),
    re = [];
  return (
    x.forEach((N, k) => {
      if (v || !u.some((ie) => ie.route.id === N.routeId) || b.has(k)) return;
      let B = c.fetchers.get(k),
        F = B && B.state !== "idle" && B.data === void 0,
        Z = Ir(R, N.path, T ?? "/", !1, D);
      if (!Z) {
        if (_ && F) return;
        re.push({
          key: k,
          routeId: N.routeId,
          path: N.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
        return;
      }
      if (C.has(k)) return;
      let O = Gu(Z, N.path),
        P = new AbortController(),
        Q = hi(s, N.path, P.signal),
        ae = null;
      if (y.has(k)) (y.delete(k), (ae = vi(o, l, Q, N.path, Z, O, m, r)));
      else if (F) g && (ae = vi(o, l, Q, N.path, Z, O, m, r));
      else {
        let ie;
        typeof z == "boolean" ? (ie = z) : ee ? (ie = !1) : (ie = g);
        let ue = { ...ne, defaultShouldRevalidate: ie };
        $s(O, ue) && (ae = vi(o, l, Q, N.path, Z, O, m, r, ue));
      }
      ae &&
        re.push({
          key: k,
          routeId: N.routeId,
          path: N.path,
          matches: ae,
          match: O,
          request: Q,
          controller: P,
        });
    }),
    { dsMatches: U, revalidatingFetchers: re }
  );
}
function Cg(e) {
  return e.loader != null || (e.middleware != null && e.middleware.length > 0);
}
function VC(e, r, o) {
  if (e.lazy) return { shouldLoad: !0, renderFallback: !0 };
  if (!Cg(e)) return { shouldLoad: !1, renderFallback: !1 };
  let l = r != null && e.id in r,
    s = o != null && o[e.id] !== void 0;
  if (!l && s) return { shouldLoad: !1, renderFallback: !1 };
  if (typeof e.loader == "function" && e.loader.hydrate === !0)
    return { shouldLoad: !0, renderFallback: !l };
  let c = !l && !s;
  return { shouldLoad: c, renderFallback: c };
}
function kO(e, r, o) {
  let l = !r || o.route.id !== r.route.id,
    s = !e.hasOwnProperty(o.route.id);
  return l || s;
}
function LO(e, r) {
  let o = e.route.path;
  return (
    e.pathname !== r.pathname || (o != null && o.endsWith("*") && e.params["*"] !== r.params["*"])
  );
}
function $s(e, r) {
  if (e.route.shouldRevalidate) {
    let o = e.route.shouldRevalidate(r);
    if (typeof o == "boolean") return o;
  }
  return r.defaultShouldRevalidate;
}
function I1(e, r, o, l, s, c) {
  let u;
  if (e) {
    let m = l[e];
    (it(m, `No route found to patch children into: routeId = ${e}`),
      m.children || (m.children = []),
      (u = m.children));
  } else u = o.activeRoutes;
  let f = [],
    d = [];
  if (
    (r.forEach((m) => {
      let v = u.find((g) => IC(m, g));
      v ? d.push({ existingRoute: v, newRoute: m }) : f.push(m);
    }),
    f.length > 0)
  ) {
    let m = Ks(f, s, [e || "_", "patch", String(u?.length || "0")], l);
    u.push(...m);
  }
  if (c && d.length > 0)
    for (let m = 0; m < d.length; m++) {
      let { existingRoute: v, newRoute: g } = d[m],
        y = v,
        [b] = Ks([g], s, [], {}, !0);
      Object.assign(y, {
        element: b.element ? b.element : y.element,
        errorElement: b.errorElement ? b.errorElement : y.errorElement,
        hydrateFallbackElement: b.hydrateFallbackElement
          ? b.hydrateFallbackElement
          : y.hydrateFallbackElement,
      });
    }
  o.hasHMRRoutes || o.setRoutes([...o.activeRoutes]);
}
function IC(e, r) {
  return "id" in e && "id" in r && e.id === r.id
    ? !0
    : e.index === r.index && e.path === r.path && e.caseSensitive === r.caseSensitive
      ? (!e.children || e.children.length === 0) && (!r.children || r.children.length === 0)
        ? !0
        : (e.children?.every((o, l) => r.children?.some((s) => IC(o, s))) ?? !1)
      : !1;
}
var F1 = new WeakMap(),
  FC = ({ key: e, route: r, manifest: o, mapRouteProperties: l }) => {
    let s = o[r.id];
    if ((it(s, "No route found in manifest"), !s.lazy || typeof s.lazy != "object")) return;
    let c = s.lazy[e];
    if (!c) return;
    let u = F1.get(s);
    u || ((u = {}), F1.set(s, u));
    let f = u[e];
    if (f) return f;
    let d = (async () => {
      let m = W3(e),
        g = s[e] !== void 0 && e !== "hasErrorBoundary";
      if (m)
        (fn(
          !m,
          "Route property " +
            e +
            " is not a supported lazy route property. This property will be ignored.",
        ),
          (u[e] = Promise.resolve()));
      else if (g)
        fn(
          !1,
          `Route "${s.id}" has a static property "${e}" defined. The lazy property will be ignored.`,
        );
      else {
        let y = await c();
        y != null && (Object.assign(s, { [e]: y }), Object.assign(s, l(s)));
      }
      typeof s.lazy == "object" &&
        ((s.lazy[e] = void 0),
        Object.values(s.lazy).every((y) => y === void 0) && (s.lazy = void 0));
    })();
    return ((u[e] = d), d);
  },
  q1 = new WeakMap();
function BO(e, r, o, l, s) {
  let c = o[e.id];
  if ((it(c, "No route found in manifest"), !e.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof e.lazy == "function") {
    let v = q1.get(c);
    if (v) return { lazyRoutePromise: v, lazyHandlerPromise: v };
    let g = (async () => {
      it(typeof e.lazy == "function", "No lazy route function found");
      let y = await e.lazy(),
        b = {};
      for (let x in y) {
        let C = y[x];
        if (C === void 0) continue;
        let R = eO(x),
          _ = c[x] !== void 0 && x !== "hasErrorBoundary";
        R
          ? fn(
              !R,
              "Route property " +
                x +
                " is not a supported property to be returned from a lazy route function. This property will be ignored.",
            )
          : _
            ? fn(
                !_,
                `Route "${c.id}" has a static property "${x}" defined but its lazy function is also returning a value for this property. The lazy route property "${x}" will be ignored.`,
              )
            : (b[x] = C);
      }
      (Object.assign(c, b), Object.assign(c, { ...l(c), lazy: void 0 }));
    })();
    return (q1.set(c, g), g.catch(() => {}), { lazyRoutePromise: g, lazyHandlerPromise: g });
  }
  let u = Object.keys(e.lazy),
    f = [],
    d;
  for (let v of u) {
    if (s && s.includes(v)) continue;
    let g = FC({ key: v, route: e, manifest: o, mapRouteProperties: l });
    g && (f.push(g), v === r && (d = g));
  }
  let m = f.length > 0 ? Promise.all(f).then(() => {}) : void 0;
  return (m?.catch(() => {}), d?.catch(() => {}), { lazyRoutePromise: m, lazyHandlerPromise: d });
}
async function Y1(e) {
  let r = e.matches.filter((s) => s.shouldLoad),
    o = {};
  return (
    (await Promise.all(r.map((s) => s.resolve()))).forEach((s, c) => {
      o[r[c].route.id] = s;
    }),
    o
  );
}
async function $O(e) {
  return e.matches.some((r) => r.route.middleware) ? qC(e, () => Y1(e)) : Y1(e);
}
function qC(e, r) {
  return HO(
    e,
    r,
    (l) => {
      if (WO(l)) throw l;
      return l;
    },
    XO,
    o,
  );
  function o(l, s, c) {
    if (c) return Promise.resolve(Object.assign(c.value, { [s]: { type: "error", result: l } }));
    {
      let { matches: u } = e,
        f = Math.min(
          Math.max(
            u.findIndex((m) => m.route.id === s),
            0,
          ),
          Math.max(
            u.findIndex((m) => m.shouldCallHandler()),
            0,
          ),
        ),
        d = jo(u, u[f].route.id).route.id;
      return Promise.resolve({ [d]: { type: "error", result: l } });
    }
  }
}
async function HO(e, r, o, l, s) {
  let { matches: c, ...u } = e,
    f = c.flatMap((m) =>
      m.route.middleware ? m.route.middleware.map((v) => [m.route.id, v]) : [],
    );
  return await YC(u, f, r, o, l, s);
}
async function YC(e, r, o, l, s, c, u = 0) {
  let { request: f } = e;
  if (f.signal.aborted) throw f.signal.reason ?? new Error(`Request aborted: ${f.method} ${f.url}`);
  let d = r[u];
  if (!d) return await o();
  let [m, v] = d,
    g,
    y = async () => {
      if (g) throw new Error("You may only call `next()` once per middleware");
      try {
        return ((g = { value: await YC(e, r, o, l, s, c, u + 1) }), g.value);
      } catch (b) {
        return ((g = { value: await c(b, m, g) }), g.value);
      }
    };
  try {
    let b = await v(e, y),
      x = b != null ? l(b) : void 0;
    return s(x) ? x : g ? (x ?? g.value) : ((g = { value: await y() }), g.value);
  } catch (b) {
    return await c(b, m, g);
  }
}
function GC(e, r, o, l, s) {
  let c = FC({ key: "middleware", route: l.route, manifest: r, mapRouteProperties: e }),
    u = BO(l.route, jn(o.method) ? "action" : "loader", r, e, s);
  return { middleware: c, route: u.lazyRoutePromise, handler: u.lazyHandlerPromise };
}
function ip(e, r, o, l, s, c, u, f, d, m = null, v) {
  let g = !1,
    y = GC(e, r, o, c, u);
  return {
    ...c,
    _lazyPromises: y,
    shouldLoad: d,
    shouldRevalidateArgs: m,
    shouldCallHandler(b) {
      return (
        (g = !0),
        m
          ? typeof v == "boolean"
            ? $s(c, { ...m, defaultShouldRevalidate: v })
            : typeof b == "boolean"
              ? $s(c, { ...m, defaultShouldRevalidate: b })
              : $s(c, m)
          : d
      );
    },
    resolve(b) {
      let { lazy: x, loader: C, middleware: R } = c.route,
        T = g || d || (b && !jn(o.method) && (x || C)),
        _ = R && R.length > 0 && !C && !x;
      return T && (jn(o.method) || !_)
        ? PO({
            request: o,
            path: l,
            pattern: s,
            match: c,
            lazyHandlerPromise: y?.handler,
            lazyRoutePromise: y?.route,
            handlerOverride: b,
            scopedContext: f,
          })
        : Promise.resolve({ type: "data", result: void 0 });
    },
  };
}
function vi(e, r, o, l, s, c, u, f, d = null) {
  return s.map((m) =>
    m.route.id !== c.route.id
      ? {
          ...m,
          shouldLoad: !1,
          shouldRevalidateArgs: d,
          shouldCallHandler: () => !1,
          _lazyPromises: GC(e, r, o, m, u),
          resolve: () => Promise.resolve({ type: "data", result: void 0 }),
        }
      : ip(e, r, o, l, hc(s), m, u, f, !0, d),
  );
}
async function UO(e, r, o, l, s, c, u) {
  l.some((v) => v._lazyPromises?.middleware) &&
    (await Promise.all(l.map((v) => v._lazyPromises?.middleware)));
  let f = {
      request: r,
      url: XC(r, o),
      pattern: hc(l),
      params: l[0].params,
      context: c,
      matches: l,
    },
    m = await e({
      ...f,
      fetcherKey: s,
      runClientMiddleware: (v) => {
        let g = f;
        return qC(g, () =>
          v({
            ...g,
            fetcherKey: s,
            runClientMiddleware: () => {
              throw new Error(
                "Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler",
              );
            },
          }),
        );
      },
    });
  try {
    await Promise.all(l.flatMap((v) => [v._lazyPromises?.handler, v._lazyPromises?.route]));
  } catch {}
  return m;
}
async function PO({
  request: e,
  path: r,
  pattern: o,
  match: l,
  lazyHandlerPromise: s,
  lazyRoutePromise: c,
  handlerOverride: u,
  scopedContext: f,
}) {
  let d,
    m,
    v = jn(e.method),
    g = v ? "action" : "loader",
    y = (b) => {
      let x,
        C = new Promise((_, D) => (x = D));
      ((m = () => x()), e.signal.addEventListener("abort", m));
      let R = (_) =>
          typeof b != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${g}" [routeId: ${l.route.id}]`,
                ),
              )
            : b(
                { request: e, url: XC(e, r), pattern: o, params: l.params, context: f },
                ...(_ !== void 0 ? [_] : []),
              ),
        T = (async () => {
          try {
            return { type: "data", result: await (u ? u((D) => R(D)) : R()) };
          } catch (_) {
            return { type: "error", result: _ };
          }
        })();
      return Promise.race([T, C]);
    };
  try {
    let b = v ? l.route.action : l.route.loader;
    if (s || c)
      if (b) {
        let x,
          [C] = await Promise.all([
            y(b).catch((R) => {
              x = R;
            }),
            s,
            c,
          ]);
        if (x !== void 0) throw x;
        d = C;
      } else {
        await s;
        let x = v ? l.route.action : l.route.loader;
        if (x) [d] = await Promise.all([y(x), c]);
        else if (g === "action") {
          let C = new URL(e.url),
            R = C.pathname + C.search;
          throw wr(405, { method: e.method, pathname: R, routeId: l.route.id });
        } else return { type: "data", result: void 0 };
      }
    else if (b) d = await y(b);
    else {
      let x = new URL(e.url),
        C = x.pathname + x.search;
      throw wr(404, { pathname: C });
    }
  } catch (b) {
    return { type: "error", result: b };
  } finally {
    m && e.signal.removeEventListener("abort", m);
  }
  return d;
}
async function VO(e) {
  let r = e.headers.get("Content-Type");
  return r && /\bapplication\/json\b/.test(r) ? (e.body == null ? null : e.json()) : e.text();
}
async function IO(e) {
  let { result: r, type: o } = e;
  if (Eg(r)) {
    let l;
    try {
      l = await VO(r);
    } catch (s) {
      return { type: "error", error: s };
    }
    return o === "error"
      ? {
          type: "error",
          error: new dc(r.status, r.statusText, l),
          statusCode: r.status,
          headers: r.headers,
        }
      : { type: "data", data: l, statusCode: r.status, headers: r.headers };
  }
  return o === "error"
    ? J1(r)
      ? r.data instanceof Error
        ? {
            type: "error",
            error: r.data,
            statusCode: r.init?.status,
            headers: r.init?.headers ? new Headers(r.init.headers) : void 0,
          }
        : {
            type: "error",
            error: GO(r),
            statusCode: Qs(r) ? r.status : void 0,
            headers: r.init?.headers ? new Headers(r.init.headers) : void 0,
          }
      : { type: "error", error: r, statusCode: Qs(r) ? r.status : void 0 }
    : J1(r)
      ? {
          type: "data",
          data: r.data,
          statusCode: r.init?.status,
          headers: r.init?.headers ? new Headers(r.init.headers) : void 0,
        }
      : { type: "data", data: r };
}
function FO(e, r, o, l, s) {
  let c = e.headers.get("Location");
  if (
    (it(c, "Redirects returned/thrown from loaders/actions must have a Location header"), !Sg(c))
  ) {
    let u = l.slice(0, l.findIndex((f) => f.route.id === o) + 1);
    ((c = lp(new URL(r.url), u, s, c)), e.headers.set("Location", c));
  }
  return e;
}
var G1 = [
  "about:",
  "blob:",
  "chrome:",
  "chrome-untrusted:",
  "content:",
  "data:",
  "devtools:",
  "file:",
  "filesystem:",
  "javascript:",
];
function X1(e, r, o, l) {
  if (Sg(e)) {
    let s = e,
      c = s.startsWith("//") ? new URL(r.protocol + s) : new URL(s);
    if (G1.includes(c.protocol)) throw new Error("Invalid redirect location");
    let u = Rr(c.pathname, o) != null;
    if (c.origin === r.origin && u) return xg(c.pathname) + c.search + c.hash;
  }
  try {
    let s = l.createURL(e);
    if (G1.includes(s.protocol)) throw new Error("Invalid redirect location");
  } catch {}
  return e;
}
function hi(e, r, o, l) {
  let s = e.createURL(KC(r)).toString(),
    c = { signal: o };
  if (l && jn(l.formMethod)) {
    let { formMethod: u, formEncType: f } = l;
    ((c.method = u.toUpperCase()),
      f === "application/json"
        ? ((c.headers = new Headers({ "Content-Type": f })), (c.body = JSON.stringify(l.json)))
        : f === "text/plain"
          ? (c.body = l.text)
          : f === "application/x-www-form-urlencoded" && l.formData
            ? (c.body = sp(l.formData))
            : (c.body = l.formData));
  }
  return new Request(s, c);
}
function XC(e, r) {
  let o = new URL(e.url),
    l = typeof r == "string" ? ba(r) : r;
  if (((o.pathname = l.pathname || "/"), l.search)) {
    let s = new URLSearchParams(l.search),
      c = s.getAll("index");
    s.delete("index");
    for (let u of c.filter(Boolean)) s.append("index", u);
    o.search = s.size ? `?${s.toString()}` : "";
  } else o.search = "";
  return ((o.hash = l.hash || ""), o);
}
function sp(e) {
  let r = new URLSearchParams();
  for (let [o, l] of e.entries()) r.append(o, typeof l == "string" ? l : l.name);
  return r;
}
function K1(e) {
  let r = new FormData();
  for (let [o, l] of e.entries()) r.append(o, l);
  return r;
}
function qO(e, r, o, l = !1, s = !1) {
  let c = {},
    u = null,
    f,
    d = !1,
    m = {},
    v = o && cr(o[1]) ? o[1].error : void 0;
  return (
    e.forEach((g) => {
      if (!(g.route.id in r)) return;
      let y = g.route.id,
        b = r[y];
      if ((it(!ml(b), "Cannot handle redirect results in processLoaderData"), cr(b))) {
        let x = b.error;
        if ((v !== void 0 && ((x = v), (v = void 0)), (u = u || {}), s)) u[y] = x;
        else {
          let C = jo(e, y);
          u[C.route.id] == null && (u[C.route.id] = x);
        }
        (l || (c[y] = PC),
          d || ((d = !0), (f = Qs(b.error) ? b.error.status : 500)),
          b.headers && (m[y] = b.headers));
      } else
        ((c[y] = b.data),
          b.statusCode && b.statusCode !== 200 && !d && (f = b.statusCode),
          b.headers && (m[y] = b.headers));
    }),
    v !== void 0 && o && ((u = { [o[0]]: v }), o[2] && (c[o[2]] = void 0)),
    { loaderData: c, errors: u, statusCode: f || 200, loaderHeaders: m }
  );
}
function Q1(e, r, o, l, s, c, u) {
  let { loaderData: f, errors: d } = qO(r, o, l);
  return (
    s
      .filter((m) => !m.matches || m.matches.some((v) => v.shouldLoad))
      .forEach((m) => {
        let { key: v, match: g, controller: y } = m;
        if (y && y.signal.aborted) return;
        let b = c[v];
        if ((it(b, "Did not find corresponding fetcher result"), cr(b))) {
          let x = jo(e.matches, g?.route.id);
          ((d && d[x.route.id]) || (d = { ...d, [x.route.id]: b.error }), u.delete(v));
        } else if (ml(b)) it(!1, "Unhandled fetcher revalidation redirect");
        else {
          let x = la(b.data);
          u.set(v, x);
        }
      }),
    { loaderData: f, errors: d }
  );
}
function Z1(e, r, o, l) {
  let s = Object.entries(r)
    .filter(([, c]) => c !== PC)
    .reduce((c, [u, f]) => ((c[u] = f), c), {});
  for (let c of o) {
    let u = c.route.id;
    if (
      (!r.hasOwnProperty(u) && e.hasOwnProperty(u) && c.route.loader && (s[u] = e[u]),
      l && l.hasOwnProperty(u))
    )
      break;
  }
  return s;
}
function W1(e) {
  return e ? (cr(e[1]) ? { actionData: {} } : { actionData: { [e[0]]: e[1].data } }) : {};
}
function jo(e, r) {
  return (
    (r ? e.slice(0, e.findIndex((l) => l.route.id === r) + 1) : [...e])
      .reverse()
      .find((l) => l.route.hasErrorBoundary === !0) || e[0]
  );
}
function Lu(e) {
  let r =
    e.length === 1
      ? e[0]
      : e.find((o) => o.index || !o.path || o.path === "/") || { id: "__shim-error-route__" };
  return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: r }], route: r };
}
function wr(e, { pathname: r, routeId: o, method: l, type: s, message: c } = {}) {
  let u = "Unknown Server Error",
    f = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((u = "Bad Request"),
        l && r && o
          ? (f = `You made a ${l} request to "${r}" but did not provide a \`loader\` for route "${o}", so there is no way to handle the request.`)
          : s === "invalid-body" && (f = "Unable to encode submission body"))
      : e === 403
        ? ((u = "Forbidden"), (f = `Route "${o}" does not match URL "${r}"`))
        : e === 404
          ? ((u = "Not Found"), (f = `No route matches URL "${r}"`))
          : e === 405 &&
            ((u = "Method Not Allowed"),
            l && r && o
              ? (f = `You made a ${l.toUpperCase()} request to "${r}" but did not provide an \`action\` for route "${o}", so there is no way to handle the request.`)
              : l && (f = `Invalid request method "${l.toUpperCase()}"`)),
    new dc(e || 500, u, new Error(f), !0)
  );
}
function Bu(e) {
  let r = Object.entries(e);
  for (let o = r.length - 1; o >= 0; o--) {
    let [l, s] = r[o];
    if (ml(s)) return { key: l, result: s };
  }
}
function KC(e) {
  let r = typeof e == "string" ? ba(e) : e;
  return ga({ ...r, hash: "" });
}
function YO(e, r) {
  return e.pathname !== r.pathname || e.search !== r.search
    ? !1
    : e.hash === ""
      ? r.hash !== ""
      : e.hash === r.hash
        ? !0
        : r.hash !== "";
}
function GO(e) {
  return new dc(e.init?.status ?? 500, e.init?.statusText ?? "Internal Server Error", e.data);
}
function XO(e) {
  return (
    e != null &&
    typeof e == "object" &&
    Object.entries(e).every(([r, o]) => typeof r == "string" && KO(o))
  );
}
function KO(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "type" in e &&
    "result" in e &&
    (e.type === "data" || e.type === "error")
  );
}
function QO(e) {
  return Eg(e.result) && HC.has(e.result.status);
}
function cr(e) {
  return e.type === "error";
}
function ml(e) {
  return (e && e.type) === "redirect";
}
function J1(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function Eg(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function ZO(e) {
  return HC.has(e);
}
function WO(e) {
  return Eg(e) && ZO(e.status) && e.headers.has("Location");
}
function JO(e) {
  return DO.has(e.toUpperCase());
}
function jn(e) {
  return TO.has(e.toUpperCase());
}
function Rg(e) {
  return new URLSearchParams(e).getAll("index").some((r) => r === "");
}
function Gu(e, r) {
  let o = typeof r == "string" ? ba(r).search : r.search;
  if (e[e.length - 1].route.index && Rg(o || "")) return e[e.length - 1];
  let l = zC(e);
  return l[l.length - 1];
}
function eS(e) {
  let { formMethod: r, formAction: o, formEncType: l, text: s, formData: c, json: u } = e;
  if (!(!r || !o || !l)) {
    if (s != null)
      return {
        formMethod: r,
        formAction: o,
        formEncType: l,
        formData: void 0,
        json: void 0,
        text: s,
      };
    if (c != null)
      return {
        formMethod: r,
        formAction: o,
        formEncType: l,
        formData: c,
        json: void 0,
        text: void 0,
      };
    if (u !== void 0)
      return {
        formMethod: r,
        formAction: o,
        formEncType: l,
        formData: void 0,
        json: u,
        text: void 0,
      };
  }
}
function Bm(e, r, o, l) {
  return l
    ? {
        state: "loading",
        location: e,
        matches: r,
        historyAction: o,
        formMethod: l.formMethod,
        formAction: l.formAction,
        formEncType: l.formEncType,
        formData: l.formData,
        json: l.json,
        text: l.text,
      }
    : {
        state: "loading",
        location: e,
        matches: r,
        historyAction: o,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function ej(e, r, o, l) {
  return {
    state: "submitting",
    location: e,
    matches: r,
    historyAction: o,
    formMethod: l.formMethod,
    formAction: l.formAction,
    formEncType: l.formEncType,
    formData: l.formData,
    json: l.json,
    text: l.text,
  };
}
function Rs(e, r) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: r,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: r,
      };
}
function tj(e, r) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: r ? r.data : void 0,
  };
}
function la(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function nj(e, r) {
  try {
    let o = e.sessionStorage.getItem(UC);
    if (o) {
      let l = JSON.parse(o);
      for (let [s, c] of Object.entries(l || {}))
        c && Array.isArray(c) && r.set(s, new Set(c || []));
    }
  } catch {}
}
function rj(e, r) {
  if (r.size > 0) {
    let o = {};
    for (let [l, s] of r) o[l] = [...s];
    try {
      e.sessionStorage.setItem(UC, JSON.stringify(o));
    } catch (l) {
      fn(!1, `Failed to save applied view transitions in sessionStorage (${l}).`);
    }
  }
}
function tS() {
  let e,
    r,
    o = new Promise((l, s) => {
      ((e = async (c) => {
        l(c);
        try {
          await o;
        } catch {}
      }),
        (r = async (c) => {
          s(c);
          try {
            await o;
          } catch {}
        }));
    });
  return { promise: o, resolve: e, reject: r };
}
var Dl = S.createContext(null);
Dl.displayName = "DataRouter";
var mc = S.createContext(null);
mc.displayName = "DataRouterState";
var QC = S.createContext(!1);
function ZC() {
  return S.useContext(QC);
}
var Tg = S.createContext({ isTransitioning: !1 });
Tg.displayName = "ViewTransition";
var WC = S.createContext(new Map());
WC.displayName = "Fetchers";
var aj = S.createContext(null);
aj.displayName = "Await";
var jr = S.createContext(null);
jr.displayName = "Navigation";
var Kf = S.createContext(null);
Kf.displayName = "Location";
var no = S.createContext({ outlet: null, matches: [], isDataRoute: !1 });
no.displayName = "Route";
var _g = S.createContext(null);
_g.displayName = "RouteError";
var JC = "REACT_ROUTER_ERROR",
  oj = "REDIRECT",
  lj = "ROUTE_ERROR_RESPONSE";
function ij(e) {
  if (e.startsWith(`${JC}:${oj}:{`))
    try {
      let r = JSON.parse(e.slice(28));
      if (
        typeof r == "object" &&
        r &&
        typeof r.status == "number" &&
        typeof r.statusText == "string" &&
        typeof r.location == "string" &&
        typeof r.reloadDocument == "boolean" &&
        typeof r.replace == "boolean"
      )
        return r;
    } catch {}
}
function sj(e) {
  if (e.startsWith(`${JC}:${lj}:{`))
    try {
      let r = JSON.parse(e.slice(40));
      if (
        typeof r == "object" &&
        r &&
        typeof r.status == "number" &&
        typeof r.statusText == "string"
      )
        return new dc(r.status, r.statusText, r.data);
    } catch {}
}
function cj(e, { relative: r } = {}) {
  it(pc(), "useHref() may be used only in the context of a <Router> component.");
  let { basename: o, navigator: l } = S.useContext(jr),
    { hash: s, pathname: c, search: u } = gc(e, { relative: r }),
    f = c;
  return (
    o !== "/" && (f = c === "/" ? o : Cr([o, c])),
    l.createHref({ pathname: f, search: u, hash: s })
  );
}
function pc() {
  return S.useContext(Kf) != null;
}
function ro() {
  return (
    it(pc(), "useLocation() may be used only in the context of a <Router> component."),
    S.useContext(Kf).location
  );
}
var eE =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function tE(e) {
  S.useContext(jr).static || S.useLayoutEffect(e);
}
function uj() {
  let { isDataRoute: e } = S.useContext(no);
  return e ? Cj() : fj();
}
function fj() {
  it(pc(), "useNavigate() may be used only in the context of a <Router> component.");
  let e = S.useContext(Dl),
    { basename: r, navigator: o } = S.useContext(jr),
    { matches: l } = S.useContext(no),
    { pathname: s } = ro(),
    c = JSON.stringify(wg(l)),
    u = S.useRef(!1);
  return (
    tE(() => {
      u.current = !0;
    }),
    S.useCallback(
      (d, m = {}) => {
        if ((fn(u.current, eE), !u.current)) return;
        if (typeof d == "number") {
          o.go(d);
          return;
        }
        let v = Xf(d, JSON.parse(c), s, m.relative === "path");
        (e == null && r !== "/" && (v.pathname = v.pathname === "/" ? r : Cr([r, v.pathname])),
          (m.replace ? o.replace : o.push)(v, m.state, m));
      },
      [r, o, c, s, e],
    )
  );
}
S.createContext(null);
function gc(e, { relative: r } = {}) {
  let { matches: o } = S.useContext(no),
    { pathname: l } = ro(),
    s = JSON.stringify(wg(o));
  return S.useMemo(() => Xf(e, JSON.parse(s), l, r === "path"), [e, s, l, r]);
}
function dj(e, r, o) {
  it(pc(), "useRoutes() may be used only in the context of a <Router> component.");
  let { navigator: l } = S.useContext(jr),
    { matches: s } = S.useContext(no),
    c = s[s.length - 1],
    u = c ? c.params : {},
    f = c ? c.pathname : "/",
    d = c ? c.pathnameBase : "/",
    m = c && c.route;
  {
    let R = (m && m.path) || "";
    rE(
      f,
      !m || R.endsWith("*") || R.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R === "/" ? "*" : `${R}/*`}">.`,
    );
  }
  let v = ro(),
    g;
  g = v;
  let y = g.pathname || "/",
    b = y;
  if (d !== "/") {
    let R = d.replace(/^\//, "").split("/");
    b = "/" + y.replace(/^\//, "").split("/").slice(R.length).join("/");
  }
  let x =
    o && o.state.matches.length
      ? o.state.matches.map((R) => Object.assign(R, { route: o.manifest[R.route.id] || R.route }))
      : MC(e, { pathname: b });
  return (
    fn(m || x != null, `No routes matched location "${g.pathname}${g.search}${g.hash}" `),
    fn(
      x == null ||
        x[x.length - 1].route.element !== void 0 ||
        x[x.length - 1].route.Component !== void 0 ||
        x[x.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ),
    vj(
      x &&
        x.map((R) =>
          Object.assign({}, R, {
            params: Object.assign({}, u, R.params),
            pathname: Cr([
              d,
              l.encodeLocation
                ? l.encodeLocation(
                    R.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23"),
                  ).pathname
                : R.pathname,
            ]),
            pathnameBase:
              R.pathnameBase === "/"
                ? d
                : Cr([
                    d,
                    l.encodeLocation
                      ? l.encodeLocation(
                          R.pathnameBase
                            .replace(/%/g, "%25")
                            .replace(/\?/g, "%3F")
                            .replace(/#/g, "%23"),
                        ).pathname
                      : R.pathnameBase,
                  ]),
          }),
        ),
      s,
      o,
    )
  );
}
function hj() {
  let e = xj(),
    r = Qs(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e),
    o = e instanceof Error ? e.stack : null,
    l = "rgba(200,200,200, 0.5)",
    s = { padding: "0.5rem", backgroundColor: l },
    c = { padding: "2px 4px", backgroundColor: l },
    u = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", e),
    (u = S.createElement(
      S.Fragment,
      null,
      S.createElement("p", null, "💿 Hey developer 👋"),
      S.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        S.createElement("code", { style: c }, "ErrorBoundary"),
        " or",
        " ",
        S.createElement("code", { style: c }, "errorElement"),
        " prop on your route.",
      ),
    )),
    S.createElement(
      S.Fragment,
      null,
      S.createElement("h2", null, "Unexpected Application Error!"),
      S.createElement("h3", { style: { fontStyle: "italic" } }, r),
      o ? S.createElement("pre", { style: s }, o) : null,
      u,
    )
  );
}
var mj = S.createElement(hj, null),
  nE = class extends S.Component {
    constructor(e) {
      (super(e),
        (this.state = { location: e.location, revalidation: e.revalidation, error: e.error }));
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, r) {
      return r.location !== e.location || (r.revalidation !== "idle" && e.revalidation === "idle")
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : r.error,
            location: r.location,
            revalidation: e.revalidation || r.revalidation,
          };
    }
    componentDidCatch(e, r) {
      this.props.onError
        ? this.props.onError(e, r)
        : console.error("React Router caught the following error during render", e);
    }
    render() {
      let e = this.state.error;
      if (
        this.context &&
        typeof e == "object" &&
        e &&
        "digest" in e &&
        typeof e.digest == "string"
      ) {
        const o = sj(e.digest);
        o && (e = o);
      }
      let r =
        e !== void 0
          ? S.createElement(
              no.Provider,
              { value: this.props.routeContext },
              S.createElement(_g.Provider, { value: e, children: this.props.component }),
            )
          : this.props.children;
      return this.context ? S.createElement(pj, { error: e }, r) : r;
    }
  };
nE.contextType = QC;
var $m = new WeakMap();
function pj({ children: e, error: r }) {
  let { basename: o } = S.useContext(jr);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let l = ij(r.digest);
    if (l) {
      let s = $m.get(r);
      if (s) throw s;
      let c = LC(l.location, o);
      if (kC && !$m.get(r))
        if (c.isExternal || l.reloadDocument) window.location.href = c.absoluteURL || c.to;
        else {
          const u = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(c.to, { replace: l.replace }),
          );
          throw ($m.set(r, u), u);
        }
      return S.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${c.absoluteURL || c.to}`,
      });
    }
  }
  return e;
}
function gj({ routeContext: e, match: r, children: o }) {
  let l = S.useContext(Dl);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = r.route.id),
    S.createElement(no.Provider, { value: e }, o)
  );
}
function vj(e, r = [], o) {
  let l = o?.state;
  if (e == null) {
    if (!l) return null;
    if (l.errors) e = l.matches;
    else if (r.length === 0 && !l.initialized && l.matches.length > 0) e = l.matches;
    else return null;
  }
  let s = e,
    c = l?.errors;
  if (c != null) {
    let v = s.findIndex((g) => g.route.id && c?.[g.route.id] !== void 0);
    (it(
      v >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`,
    ),
      (s = s.slice(0, Math.min(s.length, v + 1))));
  }
  let u = !1,
    f = -1;
  if (o && l) {
    u = l.renderFallback;
    for (let v = 0; v < s.length; v++) {
      let g = s[v];
      if (((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (f = v), g.route.id)) {
        let { loaderData: y, errors: b } = l,
          x = g.route.loader && !y.hasOwnProperty(g.route.id) && (!b || b[g.route.id] === void 0);
        if (g.route.lazy || x) {
          (o.isStatic && (u = !0), f >= 0 ? (s = s.slice(0, f + 1)) : (s = [s[0]]));
          break;
        }
      }
    }
  }
  let d = o?.onError,
    m =
      l && d
        ? (v, g) => {
            d(v, {
              location: l.location,
              params: l.matches?.[0]?.params ?? {},
              pattern: hc(l.matches),
              errorInfo: g,
            });
          }
        : void 0;
  return s.reduceRight((v, g, y) => {
    let b,
      x = !1,
      C = null,
      R = null;
    l &&
      ((b = c && g.route.id ? c[g.route.id] : void 0),
      (C = g.route.errorElement || mj),
      u &&
        (f < 0 && y === 0
          ? (rE(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (x = !0),
            (R = null))
          : f === y && ((x = !0), (R = g.route.hydrateFallbackElement || null))));
    let T = r.concat(s.slice(0, y + 1)),
      _ = () => {
        let D;
        return (
          b
            ? (D = C)
            : x
              ? (D = R)
              : g.route.Component
                ? (D = S.createElement(g.route.Component, null))
                : g.route.element
                  ? (D = g.route.element)
                  : (D = v),
          S.createElement(gj, {
            match: g,
            routeContext: { outlet: v, matches: T, isDataRoute: l != null },
            children: D,
          })
        );
      };
    return l && (g.route.ErrorBoundary || g.route.errorElement || y === 0)
      ? S.createElement(nE, {
          location: l.location,
          revalidation: l.revalidation,
          component: C,
          error: b,
          children: _(),
          routeContext: { outlet: null, matches: T, isDataRoute: !0 },
          onError: m,
        })
      : _();
  }, null);
}
function Dg(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function yj(e) {
  let r = S.useContext(Dl);
  return (it(r, Dg(e)), r);
}
function bj(e) {
  let r = S.useContext(mc);
  return (it(r, Dg(e)), r);
}
function Sj(e) {
  let r = S.useContext(no);
  return (it(r, Dg(e)), r);
}
function Ag(e) {
  let r = Sj(e),
    o = r.matches[r.matches.length - 1];
  return (it(o.route.id, `${e} can only be used on routes that contain a unique "id"`), o.route.id);
}
function wj() {
  return Ag("useRouteId");
}
function xj() {
  let e = S.useContext(_g),
    r = bj("useRouteError"),
    o = Ag("useRouteError");
  return e !== void 0 ? e : r.errors?.[o];
}
function Cj() {
  let { router: e } = yj("useNavigate"),
    r = Ag("useNavigate"),
    o = S.useRef(!1);
  return (
    tE(() => {
      o.current = !0;
    }),
    S.useCallback(
      async (s, c = {}) => {
        (fn(o.current, eE),
          o.current &&
            (typeof s == "number"
              ? await e.navigate(s)
              : await e.navigate(s, { fromRouteId: r, ...c })));
      },
      [e, r],
    )
  );
}
var nS = {};
function rE(e, r, o) {
  !r && !nS[e] && ((nS[e] = !0), fn(!1, o));
}
var rS = {};
function aS(e, r) {
  !e && !rS[r] && ((rS[r] = !0), console.warn(r));
}
var Ej = "useOptimistic",
  oS = mp[Ej],
  Rj = () => {};
function Tj(e) {
  return oS ? oS(e) : [e, Rj];
}
function _j(e) {
  let r = {
    hasErrorBoundary: e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      (e.element &&
        fn(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used.",
        ),
      Object.assign(r, { element: S.createElement(e.Component), Component: void 0 })),
    e.HydrateFallback &&
      (e.hydrateFallbackElement &&
        fn(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.",
        ),
      Object.assign(r, {
        hydrateFallbackElement: S.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      })),
    e.ErrorBoundary &&
      (e.errorElement &&
        fn(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.",
        ),
      Object.assign(r, { errorElement: S.createElement(e.ErrorBoundary), ErrorBoundary: void 0 })),
    r
  );
}
var Dj = ["HydrateFallback", "hydrateFallbackElement"],
  Aj = class {
    constructor() {
      ((this.status = "pending"),
        (this.promise = new Promise((e, r) => {
          ((this.resolve = (o) => {
            this.status === "pending" && ((this.status = "resolved"), e(o));
          }),
            (this.reject = (o) => {
              this.status === "pending" && ((this.status = "rejected"), r(o));
            }));
        })));
    }
  };
function Mj({ router: e, flushSync: r, onError: o, useTransitions: l }) {
  l = ZC() || l;
  let [c, u] = S.useState(e.state),
    [f, d] = Tj(c),
    [m, v] = S.useState(),
    [g, y] = S.useState({ isTransitioning: !1 }),
    [b, x] = S.useState(),
    [C, R] = S.useState(),
    [T, _] = S.useState(),
    D = S.useRef(new Map()),
    j = S.useCallback(
      (M, { deletedFetchers: K, newErrors: Y, flushSync: ee, viewTransitionOpts: ne }) => {
        (Y &&
          o &&
          Object.values(Y).forEach((U) =>
            o(U, {
              location: M.location,
              params: M.matches[0]?.params ?? {},
              pattern: hc(M.matches),
            }),
          ),
          M.fetchers.forEach((U, re) => {
            U.data !== void 0 && D.current.set(re, U.data);
          }),
          K.forEach((U) => D.current.delete(U)),
          aS(
            ee === !1 || r != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.',
          ));
        let oe =
          e.window != null &&
          e.window.document != null &&
          typeof e.window.document.startViewTransition == "function";
        if (
          (aS(
            ne == null || oe,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.",
          ),
          !ne || !oe)
        ) {
          r && ee
            ? r(() => u(M))
            : l === !1
              ? u(M)
              : S.startTransition(() => {
                  (l === !0 && d((U) => lS(U, M)), u(M));
                });
          return;
        }
        if (r && ee) {
          r(() => {
            (C && (b?.resolve(), C.skipTransition()),
              y({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: ne.currentLocation,
                nextLocation: ne.nextLocation,
              }));
          });
          let U = e.window.document.startViewTransition(() => {
            r(() => u(M));
          });
          (U.finished.finally(() => {
            r(() => {
              (x(void 0), R(void 0), v(void 0), y({ isTransitioning: !1 }));
            });
          }),
            r(() => R(U)));
          return;
        }
        C
          ? (b?.resolve(),
            C.skipTransition(),
            _({ state: M, currentLocation: ne.currentLocation, nextLocation: ne.nextLocation }))
          : (v(M),
            y({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: ne.currentLocation,
              nextLocation: ne.nextLocation,
            }));
      },
      [e.window, r, C, b, l, d, o],
    );
  (S.useLayoutEffect(() => e.subscribe(j), [e, j]),
    S.useEffect(() => {
      g.isTransitioning && !g.flushSync && x(new Aj());
    }, [g]),
    S.useEffect(() => {
      if (b && m && e.window) {
        let M = m,
          K = b.promise,
          Y = e.window.document.startViewTransition(async () => {
            (l === !1
              ? u(M)
              : S.startTransition(() => {
                  (l === !0 && d((ee) => lS(ee, M)), u(M));
                }),
              await K);
          });
        (Y.finished.finally(() => {
          (x(void 0), R(void 0), v(void 0), y({ isTransitioning: !1 }));
        }),
          R(Y));
      }
    }, [m, b, e.window, l, d]),
    S.useEffect(() => {
      b && m && f.location.key === m.location.key && b.resolve();
    }, [b, C, f.location, m]),
    S.useEffect(() => {
      !g.isTransitioning &&
        T &&
        (v(T.state),
        y({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: T.currentLocation,
          nextLocation: T.nextLocation,
        }),
        _(void 0));
    }, [g.isTransitioning, T]));
  let z = S.useMemo(
      () => ({
        createHref: e.createHref,
        encodeLocation: e.encodeLocation,
        go: (M) => e.navigate(M),
        push: (M, K, Y) => e.navigate(M, { state: K, preventScrollReset: Y?.preventScrollReset }),
        replace: (M, K, Y) =>
          e.navigate(M, { replace: !0, state: K, preventScrollReset: Y?.preventScrollReset }),
      }),
      [e],
    ),
    H = e.basename || "/",
    $ = S.useMemo(
      () => ({ router: e, navigator: z, static: !1, basename: H, onError: o }),
      [e, z, H, o],
    );
  return S.createElement(
    S.Fragment,
    null,
    S.createElement(
      Dl.Provider,
      { value: $ },
      S.createElement(
        mc.Provider,
        { value: f },
        S.createElement(
          WC.Provider,
          { value: D.current },
          S.createElement(
            Tg.Provider,
            { value: g },
            S.createElement(
              jj,
              {
                basename: H,
                location: f.location,
                navigationType: f.historyAction,
                navigator: z,
                useTransitions: l,
              },
              S.createElement(Nj, {
                routes: e.routes,
                manifest: e.manifest,
                future: e.future,
                state: f,
                isStatic: !1,
                onError: o,
              }),
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
function lS(e, r) {
  return {
    ...e,
    navigation: r.navigation.state !== "idle" ? r.navigation : e.navigation,
    revalidation: r.revalidation !== "idle" ? r.revalidation : e.revalidation,
    actionData: r.navigation.state !== "submitting" ? r.actionData : e.actionData,
    fetchers: r.fetchers,
  };
}
var Nj = S.memo(Oj);
function Oj({ routes: e, manifest: r, future: o, state: l, isStatic: s, onError: c }) {
  return dj(e, void 0, { manifest: r, state: l, isStatic: s, onError: c });
}
function jj({
  basename: e = "/",
  children: r = null,
  location: o,
  navigationType: l = "POP",
  navigator: s,
  static: c = !1,
  useTransitions: u,
}) {
  it(
    !pc(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let f = e.replace(/^\/*/, "/"),
    d = S.useMemo(
      () => ({ basename: f, navigator: s, static: c, useTransitions: u, future: {} }),
      [f, s, c, u],
    );
  typeof o == "string" && (o = ba(o));
  let {
      pathname: m = "/",
      search: v = "",
      hash: g = "",
      state: y = null,
      key: b = "default",
      mask: x,
    } = o,
    C = S.useMemo(() => {
      let R = Rr(m, f);
      return R == null
        ? null
        : {
            location: { pathname: R, search: v, hash: g, state: y, key: b, mask: x },
            navigationType: l,
          };
    }, [f, m, v, g, y, b, l, x]);
  return (
    fn(
      C != null,
      `<Router basename="${f}"> is not able to match the URL "${m}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    C == null
      ? null
      : S.createElement(
          jr.Provider,
          { value: d },
          S.createElement(Kf.Provider, { children: r, value: C }),
        )
  );
}
var Xu = "get",
  Ku = "application/x-www-form-urlencoded";
function Qf(e) {
  return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function zj(e) {
  return Qf(e) && e.tagName.toLowerCase() === "button";
}
function kj(e) {
  return Qf(e) && e.tagName.toLowerCase() === "form";
}
function Lj(e) {
  return Qf(e) && e.tagName.toLowerCase() === "input";
}
function Bj(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function $j(e, r) {
  return e.button === 0 && (!r || r === "_self") && !Bj(e);
}
var $u = null;
function Hj() {
  if ($u === null)
    try {
      (new FormData(document.createElement("form"), 0), ($u = !1));
    } catch {
      $u = !0;
    }
  return $u;
}
var Uj = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Hm(e) {
  return e != null && !Uj.has(e)
    ? (fn(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ku}"`,
      ),
      null)
    : e;
}
function Pj(e, r) {
  let o, l, s, c, u;
  if (kj(e)) {
    let f = e.getAttribute("action");
    ((l = f ? Rr(f, r) : null),
      (o = e.getAttribute("method") || Xu),
      (s = Hm(e.getAttribute("enctype")) || Ku),
      (c = new FormData(e)));
  } else if (zj(e) || (Lj(e) && (e.type === "submit" || e.type === "image"))) {
    let f = e.form;
    if (f == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let d = e.getAttribute("formaction") || f.getAttribute("action");
    if (
      ((l = d ? Rr(d, r) : null),
      (o = e.getAttribute("formmethod") || f.getAttribute("method") || Xu),
      (s = Hm(e.getAttribute("formenctype")) || Hm(f.getAttribute("enctype")) || Ku),
      (c = new FormData(f, e)),
      !Hj())
    ) {
      let { name: m, type: v, value: g } = e;
      if (v === "image") {
        let y = m ? `${m}.` : "";
        (c.append(`${y}x`, "0"), c.append(`${y}y`, "0"));
      } else m && c.append(m, g);
    }
  } else {
    if (Qf(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((o = Xu), (l = null), (s = Ku), (u = e));
  }
  return (
    c && s === "text/plain" && ((u = c), (c = void 0)),
    { action: l, method: o.toLowerCase(), encType: s, formData: c, body: u }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Mg(e, r) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(r);
}
function aE(e, r, o, l) {
  let s =
    typeof e == "string"
      ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin)
      : e;
  return (
    o
      ? s.pathname.endsWith("/")
        ? (s.pathname = `${s.pathname}_.${l}`)
        : (s.pathname = `${s.pathname}.${l}`)
      : s.pathname === "/"
        ? (s.pathname = `_root.${l}`)
        : r && Rr(s.pathname, r) === "/"
          ? (s.pathname = `${uf(r)}/_root.${l}`)
          : (s.pathname = `${uf(s.pathname)}.${l}`),
    s
  );
}
async function Vj(e, r) {
  if (e.id in r) return r[e.id];
  try {
    let o = await import(e.module);
    return ((r[e.id] = o), o);
  } catch (o) {
    return (
      console.error(`Error loading route module \`${e.module}\`, reloading page...`),
      console.error(o),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Ij(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string"
      : typeof e.rel == "string" && typeof e.href == "string";
}
async function Fj(e, r, o) {
  let l = await Promise.all(
    e.map(async (s) => {
      let c = r.routes[s.route.id];
      if (c) {
        let u = await Vj(c, o);
        return u.links ? u.links() : [];
      }
      return [];
    }),
  );
  return Xj(
    l
      .flat(1)
      .filter(Ij)
      .filter((s) => s.rel === "stylesheet" || s.rel === "preload")
      .map((s) =>
        s.rel === "stylesheet" ? { ...s, rel: "prefetch", as: "style" } : { ...s, rel: "prefetch" },
      ),
  );
}
function iS(e, r, o, l, s, c) {
  let u = (d, m) => (o[m] ? d.route.id !== o[m].route.id : !0),
    f = (d, m) =>
      o[m].pathname !== d.pathname ||
      (o[m].route.path?.endsWith("*") && o[m].params["*"] !== d.params["*"]);
  return c === "assets"
    ? r.filter((d, m) => u(d, m) || f(d, m))
    : c === "data"
      ? r.filter((d, m) => {
          let v = l.routes[d.route.id];
          if (!v || !v.hasLoader) return !1;
          if (u(d, m) || f(d, m)) return !0;
          if (d.route.shouldRevalidate) {
            let g = d.route.shouldRevalidate({
              currentUrl: new URL(s.pathname + s.search + s.hash, window.origin),
              currentParams: o[0]?.params || {},
              nextUrl: new URL(e, window.origin),
              nextParams: d.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof g == "boolean") return g;
          }
          return !0;
        })
      : [];
}
function qj(e, r, { includeHydrateFallback: o } = {}) {
  return Yj(
    e
      .map((l) => {
        let s = r.routes[l.route.id];
        if (!s) return [];
        let c = [s.module];
        return (
          s.clientActionModule && (c = c.concat(s.clientActionModule)),
          s.clientLoaderModule && (c = c.concat(s.clientLoaderModule)),
          o && s.hydrateFallbackModule && (c = c.concat(s.hydrateFallbackModule)),
          s.imports && (c = c.concat(s.imports)),
          c
        );
      })
      .flat(1),
  );
}
function Yj(e) {
  return [...new Set(e)];
}
function Gj(e) {
  let r = {},
    o = Object.keys(e).sort();
  for (let l of o) r[l] = e[l];
  return r;
}
function Xj(e, r) {
  let o = new Set();
  return (
    new Set(r),
    e.reduce((l, s) => {
      let c = JSON.stringify(Gj(s));
      return (o.has(c) || (o.add(c), l.push({ key: c, link: s })), l);
    }, [])
  );
}
function Ng() {
  let e = S.useContext(Dl);
  return (Mg(e, "You must render this element inside a <DataRouterContext.Provider> element"), e);
}
function Kj() {
  let e = S.useContext(mc);
  return (
    Mg(e, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    e
  );
}
var Og = S.createContext(void 0);
Og.displayName = "FrameworkContext";
function jg() {
  let e = S.useContext(Og);
  return (Mg(e, "You must render this element inside a <HydratedRouter> element"), e);
}
function Qj(e, r) {
  let o = S.useContext(Og),
    [l, s] = S.useState(!1),
    [c, u] = S.useState(!1),
    { onFocus: f, onBlur: d, onMouseEnter: m, onMouseLeave: v, onTouchStart: g } = r,
    y = S.useRef(null);
  (S.useEffect(() => {
    if ((e === "render" && u(!0), e === "viewport")) {
      let C = (T) => {
          T.forEach((_) => {
            u(_.isIntersecting);
          });
        },
        R = new IntersectionObserver(C, { threshold: 0.5 });
      return (
        y.current && R.observe(y.current),
        () => {
          R.disconnect();
        }
      );
    }
  }, [e]),
    S.useEffect(() => {
      if (l) {
        let C = setTimeout(() => {
          u(!0);
        }, 100);
        return () => {
          clearTimeout(C);
        };
      }
    }, [l]));
  let b = () => {
      s(!0);
    },
    x = () => {
      (s(!1), u(!1));
    };
  return o
    ? e !== "intent"
      ? [c, y, {}]
      : [
          c,
          y,
          {
            onFocus: Ts(f, b),
            onBlur: Ts(d, x),
            onMouseEnter: Ts(m, b),
            onMouseLeave: Ts(v, x),
            onTouchStart: Ts(g, b),
          },
        ]
    : [!1, y, {}];
}
function Ts(e, r) {
  return (o) => {
    (e && e(o), o.defaultPrevented || r(o));
  };
}
function Zj({ page: e, ...r }) {
  let o = ZC(),
    { router: l } = Ng(),
    s = S.useMemo(() => MC(l.routes, e, l.basename), [l.routes, e, l.basename]);
  return s
    ? o
      ? S.createElement(Jj, { page: e, matches: s, ...r })
      : S.createElement(e4, { page: e, matches: s, ...r })
    : null;
}
function Wj(e) {
  let { manifest: r, routeModules: o } = jg(),
    [l, s] = S.useState([]);
  return (
    S.useEffect(() => {
      let c = !1;
      return (
        Fj(e, r, o).then((u) => {
          c || s(u);
        }),
        () => {
          c = !0;
        }
      );
    }, [e, r, o]),
    l
  );
}
function Jj({ page: e, matches: r, ...o }) {
  let l = ro(),
    { future: s } = jg(),
    { basename: c } = Ng(),
    u = S.useMemo(() => {
      if (e === l.pathname + l.search + l.hash) return [];
      let f = aE(e, c, s.unstable_trailingSlashAwareDataRequests, "rsc"),
        d = !1,
        m = [];
      for (let v of r)
        typeof v.route.shouldRevalidate == "function" ? (d = !0) : m.push(v.route.id);
      return (
        d && m.length > 0 && f.searchParams.set("_routes", m.join(",")),
        [f.pathname + f.search]
      );
    }, [c, s.unstable_trailingSlashAwareDataRequests, e, l, r]);
  return S.createElement(
    S.Fragment,
    null,
    u.map((f) => S.createElement("link", { key: f, rel: "prefetch", as: "fetch", href: f, ...o })),
  );
}
function e4({ page: e, matches: r, ...o }) {
  let l = ro(),
    { future: s, manifest: c, routeModules: u } = jg(),
    { basename: f } = Ng(),
    { loaderData: d, matches: m } = Kj(),
    v = S.useMemo(() => iS(e, r, m, c, l, "data"), [e, r, m, c, l]),
    g = S.useMemo(() => iS(e, r, m, c, l, "assets"), [e, r, m, c, l]),
    y = S.useMemo(() => {
      if (e === l.pathname + l.search + l.hash) return [];
      let C = new Set(),
        R = !1;
      if (
        (r.forEach((_) => {
          let D = c.routes[_.route.id];
          !D ||
            !D.hasLoader ||
            ((!v.some((j) => j.route.id === _.route.id) &&
              _.route.id in d &&
              u[_.route.id]?.shouldRevalidate) ||
            D.hasClientLoader
              ? (R = !0)
              : C.add(_.route.id));
        }),
        C.size === 0)
      )
        return [];
      let T = aE(e, f, s.unstable_trailingSlashAwareDataRequests, "data");
      return (
        R &&
          C.size > 0 &&
          T.searchParams.set(
            "_routes",
            r
              .filter((_) => C.has(_.route.id))
              .map((_) => _.route.id)
              .join(","),
          ),
        [T.pathname + T.search]
      );
    }, [f, s.unstable_trailingSlashAwareDataRequests, d, l, c, v, r, e, u]),
    b = S.useMemo(() => qj(g, c), [g, c]),
    x = Wj(g);
  return S.createElement(
    S.Fragment,
    null,
    y.map((C) => S.createElement("link", { key: C, rel: "prefetch", as: "fetch", href: C, ...o })),
    b.map((C) => S.createElement("link", { key: C, rel: "modulepreload", href: C, ...o })),
    x.map(({ key: C, link: R }) =>
      S.createElement("link", {
        key: C,
        nonce: o.nonce,
        ...R,
        crossOrigin: R.crossOrigin ?? o.crossOrigin,
      }),
    ),
  );
}
function t4(...e) {
  return (r) => {
    e.forEach((o) => {
      typeof o == "function" ? o(r) : o != null && (o.current = r);
    });
  };
}
var n4 =
  typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  n4 && (window.__reactRouterVersion = "7.15.1");
} catch {}
function r4(e, r) {
  return jO({
    basename: r?.basename,
    getContext: r?.getContext,
    future: r?.future,
    history: X3({ window: r?.window }),
    hydrationData: a4(),
    routes: e,
    mapRouteProperties: _j,
    hydrationRouteProperties: Dj,
    dataStrategy: r?.dataStrategy,
    patchRoutesOnNavigation: r?.patchRoutesOnNavigation,
    window: r?.window,
    instrumentations: r?.instrumentations,
  }).initialize();
}
function a4() {
  let e = window?.__staticRouterHydrationData;
  return (e && e.errors && (e = { ...e, errors: o4(e.errors) }), e);
}
function o4(e) {
  if (!e) return null;
  let r = Object.entries(e),
    o = {};
  for (let [l, s] of r)
    if (s && s.__type === "RouteErrorResponse")
      o[l] = new dc(s.status, s.statusText, s.data, s.internal === !0);
    else if (s && s.__type === "Error") {
      if (s.__subType) {
        let c = window[s.__subType];
        if (typeof c == "function")
          try {
            let u = new c(s.message);
            ((u.stack = ""), (o[l] = u));
          } catch {}
      }
      if (o[l] == null) {
        let c = new Error(s.message);
        ((c.stack = ""), (o[l] = c));
      }
    } else o[l] = s;
  return o;
}
var oE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  lE = S.forwardRef(function (
    {
      onClick: r,
      discover: o = "render",
      prefetch: l = "none",
      relative: s,
      reloadDocument: c,
      replace: u,
      mask: f,
      state: d,
      target: m,
      to: v,
      preventScrollReset: g,
      viewTransition: y,
      defaultShouldRevalidate: b,
      ...x
    },
    C,
  ) {
    let { basename: R, navigator: T, useTransitions: _ } = S.useContext(jr),
      D = typeof v == "string" && oE.test(v),
      j = LC(v, R);
    v = j.to;
    let z = cj(v, { relative: s }),
      H = ro(),
      $ = null;
    if (f) {
      let re = Xf(f, [], H.mask ? H.mask.pathname : "/", !0);
      (R !== "/" && (re.pathname = re.pathname === "/" ? R : Cr([R, re.pathname])),
        ($ = T.createHref(re)));
    }
    let [M, K, Y] = Qj(l, x),
      ee = c4(v, {
        replace: u,
        mask: f,
        state: d,
        target: m,
        preventScrollReset: g,
        relative: s,
        viewTransition: y,
        defaultShouldRevalidate: b,
        useTransitions: _,
      });
    function ne(re) {
      (r && r(re), re.defaultPrevented || ee(re));
    }
    let oe = !(j.isExternal || c),
      U = S.createElement("a", {
        ...x,
        ...Y,
        href: (oe ? $ : void 0) || j.absoluteURL || z,
        onClick: oe ? ne : r,
        ref: t4(C, K),
        target: m,
        "data-discover": !D && o === "render" ? "true" : void 0,
      });
    return M && !D ? S.createElement(S.Fragment, null, U, S.createElement(Zj, { page: z })) : U;
  });
lE.displayName = "Link";
var l4 = S.forwardRef(function (
  {
    "aria-current": r = "page",
    caseSensitive: o = !1,
    className: l = "",
    end: s = !1,
    style: c,
    to: u,
    viewTransition: f,
    children: d,
    ...m
  },
  v,
) {
  let g = gc(u, { relative: m.relative }),
    y = ro(),
    b = S.useContext(mc),
    { navigator: x, basename: C } = S.useContext(jr),
    R = b != null && m4(g) && f === !0,
    T = x.encodeLocation ? x.encodeLocation(g).pathname : g.pathname,
    _ = y.pathname,
    D = b && b.navigation && b.navigation.location ? b.navigation.location.pathname : null;
  (o || ((_ = _.toLowerCase()), (D = D ? D.toLowerCase() : null), (T = T.toLowerCase())),
    D && C && (D = Rr(D, C) || D));
  const j = T !== "/" && T.endsWith("/") ? T.length - 1 : T.length;
  let z = _ === T || (!s && _.startsWith(T) && _.charAt(j) === "/"),
    H = D != null && (D === T || (!s && D.startsWith(T) && D.charAt(T.length) === "/")),
    $ = { isActive: z, isPending: H, isTransitioning: R },
    M = z ? r : void 0,
    K;
  typeof l == "function"
    ? (K = l($))
    : (K = [l, z ? "active" : null, H ? "pending" : null, R ? "transitioning" : null]
        .filter(Boolean)
        .join(" "));
  let Y = typeof c == "function" ? c($) : c;
  return S.createElement(
    lE,
    { ...m, "aria-current": M, className: K, ref: v, style: Y, to: u, viewTransition: f },
    typeof d == "function" ? d($) : d,
  );
});
l4.displayName = "NavLink";
var i4 = S.forwardRef(
  (
    {
      discover: e = "render",
      fetcherKey: r,
      navigate: o,
      reloadDocument: l,
      replace: s,
      state: c,
      method: u = Xu,
      action: f,
      onSubmit: d,
      relative: m,
      preventScrollReset: v,
      viewTransition: g,
      defaultShouldRevalidate: y,
      ...b
    },
    x,
  ) => {
    let { useTransitions: C } = S.useContext(jr),
      R = d4(),
      T = h4(f, { relative: m }),
      _ = u.toLowerCase() === "get" ? "get" : "post",
      D = typeof f == "string" && oE.test(f),
      j = (z) => {
        if ((d && d(z), z.defaultPrevented)) return;
        z.preventDefault();
        let H = z.nativeEvent.submitter,
          $ = H?.getAttribute("formmethod") || u,
          M = () =>
            R(H || z.currentTarget, {
              fetcherKey: r,
              method: $,
              navigate: o,
              replace: s,
              state: c,
              relative: m,
              preventScrollReset: v,
              viewTransition: g,
              defaultShouldRevalidate: y,
            });
        C && o !== !1 ? S.startTransition(() => M()) : M();
      };
    return S.createElement("form", {
      ref: x,
      method: _,
      action: T,
      onSubmit: l ? d : j,
      ...b,
      "data-discover": !D && e === "render" ? "true" : void 0,
    });
  },
);
i4.displayName = "Form";
function s4(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function iE(e) {
  let r = S.useContext(Dl);
  return (it(r, s4(e)), r);
}
function c4(
  e,
  {
    target: r,
    replace: o,
    mask: l,
    state: s,
    preventScrollReset: c,
    relative: u,
    viewTransition: f,
    defaultShouldRevalidate: d,
    useTransitions: m,
  } = {},
) {
  let v = uj(),
    g = ro(),
    y = gc(e, { relative: u });
  return S.useCallback(
    (b) => {
      if ($j(b, r)) {
        b.preventDefault();
        let x = o !== void 0 ? o : ga(g) === ga(y),
          C = () =>
            v(e, {
              replace: x,
              mask: l,
              state: s,
              preventScrollReset: c,
              relative: u,
              viewTransition: f,
              defaultShouldRevalidate: d,
            });
        m ? S.startTransition(() => C()) : C();
      }
    },
    [g, v, y, o, l, s, r, e, c, u, f, d, m],
  );
}
var u4 = 0,
  f4 = () => `__${String(++u4)}__`;
function d4() {
  let { router: e } = iE("useSubmit"),
    { basename: r } = S.useContext(jr),
    o = wj(),
    l = e.fetch,
    s = e.navigate;
  return S.useCallback(
    async (c, u = {}) => {
      let { action: f, method: d, encType: m, formData: v, body: g } = Pj(c, r);
      if (u.navigate === !1) {
        let y = u.fetcherKey || f4();
        await l(y, o, u.action || f, {
          defaultShouldRevalidate: u.defaultShouldRevalidate,
          preventScrollReset: u.preventScrollReset,
          formData: v,
          body: g,
          formMethod: u.method || d,
          formEncType: u.encType || m,
          flushSync: u.flushSync,
        });
      } else
        await s(u.action || f, {
          defaultShouldRevalidate: u.defaultShouldRevalidate,
          preventScrollReset: u.preventScrollReset,
          formData: v,
          body: g,
          formMethod: u.method || d,
          formEncType: u.encType || m,
          replace: u.replace,
          state: u.state,
          fromRouteId: o,
          flushSync: u.flushSync,
          viewTransition: u.viewTransition,
        });
    },
    [l, s, r, o],
  );
}
function h4(e, { relative: r } = {}) {
  let { basename: o } = S.useContext(jr),
    l = S.useContext(no);
  it(l, "useFormAction must be used inside a RouteContext");
  let [s] = l.matches.slice(-1),
    c = { ...gc(e || ".", { relative: r }) },
    u = ro();
  if (e == null) {
    c.search = u.search;
    let f = new URLSearchParams(c.search),
      d = f.getAll("index");
    if (d.some((v) => v === "")) {
      (f.delete("index"), d.filter((g) => g).forEach((g) => f.append("index", g)));
      let v = f.toString();
      c.search = v ? `?${v}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      s.route.index &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    o !== "/" && (c.pathname = c.pathname === "/" ? o : Cr([o, c.pathname])),
    ga(c)
  );
}
function m4(e, { relative: r } = {}) {
  let o = S.useContext(Tg);
  it(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: l } = iE("useViewTransitionState"),
    s = gc(e, { relative: r });
  if (!o.isTransitioning) return !1;
  let c = Rr(o.currentLocation.pathname, l) || o.currentLocation.pathname,
    u = Rr(o.nextLocation.pathname, l) || o.nextLocation.pathname;
  return cf(s.pathname, u) != null || cf(s.pathname, c) != null;
}
function p4(e) {
  return S.createElement(Mj, { flushSync: da.flushSync, ...e });
}
const g4 = "_pageContent_10ny8_1",
  v4 = "_stack_10ny8_5",
  Zr = { pageContent: g4, stack: v4 },
  y4 = "_title_chmap_1",
  sS = { title: y4 };
function b4() {
  return w.jsx(ya, {
    className: sS.container,
    children: w.jsx(Pn, {
      className: sS.title,
      ta: "center",
      children: w.jsx(Vn, {
        inherit: !0,
        variant: "gradient",
        component: "span",
        gradient: { from: "red", to: "orange" },
        children: "What to cook today?",
      }),
    }),
  });
}
const S4 = "_carousel_1s123_1",
  w4 = "_title_1s123_31",
  x4 = "_highlight_1s123_58",
  _s = { carousel: S4, title: w4, highlight: x4 },
  C4 = {
    active: !0,
    breakpoints: {},
    delay: 4e3,
    jump: !1,
    playOnInit: !0,
    stopOnFocusIn: !0,
    stopOnInteraction: !0,
    stopOnMouseEnter: !1,
    stopOnLastSnap: !1,
    rootNode: null,
  };
function E4(e, r) {
  const o = e.scrollSnapList();
  return typeof r == "number" ? o.map(() => r) : r(o, e);
}
function R4(e, r) {
  const o = e.rootNode();
  return (r && r(o)) || o;
}
function zg(e = {}) {
  let r,
    o,
    l,
    s,
    c = null,
    u = 0,
    f = !1,
    d = !1,
    m = !1,
    v = !1;
  function g(U, re) {
    o = U;
    const { mergeOptions: N, optionsAtMedia: k } = re,
      B = N(C4, zg.globalOptions),
      F = N(B, e);
    if (((r = k(F)), o.scrollSnapList().length <= 1)) return;
    ((v = r.jump), (l = !1), (s = E4(o, r.delay)));
    const { eventStore: Z, ownerDocument: O } = o.internalEngine(),
      P = !!o.internalEngine().options.watchDrag,
      Q = R4(o, r.rootNode);
    (Z.add(O, "visibilitychange", T),
      P && o.on("pointerDown", D),
      P && !r.stopOnInteraction && o.on("pointerUp", j),
      r.stopOnMouseEnter && Z.add(Q, "mouseenter", z),
      r.stopOnMouseEnter && !r.stopOnInteraction && Z.add(Q, "mouseleave", H),
      r.stopOnFocusIn && o.on("slideFocusStart", R),
      r.stopOnFocusIn && !r.stopOnInteraction && Z.add(o.containerNode(), "focusout", C),
      r.playOnInit && C());
  }
  function y() {
    (o.off("pointerDown", D).off("pointerUp", j).off("slideFocusStart", R),
      R(),
      (l = !0),
      (f = !1));
  }
  function b() {
    const { ownerWindow: U } = o.internalEngine();
    (U.clearTimeout(u),
      (u = U.setTimeout(ee, s[o.selectedScrollSnap()])),
      (c = new Date().getTime()),
      o.emit("autoplay:timerset"));
  }
  function x() {
    const { ownerWindow: U } = o.internalEngine();
    (U.clearTimeout(u), (u = 0), (c = null), o.emit("autoplay:timerstopped"));
  }
  function C() {
    if (!l) {
      if (_()) {
        m = !0;
        return;
      }
      (f || o.emit("autoplay:play"), b(), (f = !0));
    }
  }
  function R() {
    l || (f && o.emit("autoplay:stop"), x(), (f = !1));
  }
  function T() {
    if (_()) return ((m = f), R());
    m && C();
  }
  function _() {
    const { ownerDocument: U } = o.internalEngine();
    return U.visibilityState === "hidden";
  }
  function D() {
    d || R();
  }
  function j() {
    d || C();
  }
  function z() {
    ((d = !0), R());
  }
  function H() {
    ((d = !1), C());
  }
  function $(U) {
    (typeof U < "u" && (v = U), C());
  }
  function M() {
    f && R();
  }
  function K() {
    f && C();
  }
  function Y() {
    return f;
  }
  function ee() {
    const { index: U } = o.internalEngine(),
      re = U.clone().add(1).get(),
      N = o.scrollSnapList().length - 1,
      k = r.stopOnLastSnap && re === N;
    if ((o.canScrollNext() ? o.scrollNext(v) : o.scrollTo(0, v), o.emit("autoplay:select"), k))
      return R();
    C();
  }
  function ne() {
    if (!c) return null;
    const U = s[o.selectedScrollSnap()],
      re = new Date().getTime() - c;
    return U - re;
  }
  return {
    name: "autoplay",
    options: e,
    init: g,
    destroy: y,
    play: $,
    stop: M,
    reset: K,
    isPlaying: Y,
    timeUntilNext: ne,
  };
}
zg.globalOptions = void 0;
const T4 = "_card_1plr4_1",
  _4 = "_title_1plr4_11",
  D4 = "_category_1plr4_21",
  A4 = "_transparent_1plr4_28",
  Ds = { card: T4, title: _4, category: D4, transparent: A4 };
function M4(e) {
  const { image: r, title: o, time: l, path: s } = e;
  return w.jsx("a", {
    href: s,
    children: w.jsx(Bo, {
      shadow: "md",
      p: "xl",
      radius: "md",
      style: { backgroundImage: `url(${r})` },
      className: Ds.card,
      children: w.jsxs("div", {
        children: [
          w.jsx("div", {
            className: Ds.transparent,
            children: w.jsx(Pn, { order: 3, className: Ds.title, children: o }),
          }),
          w.jsx("div", {
            className: Ds.transparent,
            children: w.jsx(Vn, { className: Ds.category, size: "xs", children: l.toLowerCase() }),
          }),
        ],
      }),
    }),
  });
}
const [N4, O4] = Ga("Carousel component was not found in tree");
var kg = {
  root: "m_17884d0f",
  viewport: "m_a2dae653",
  container: "m_fcd81474",
  controls: "m_39bc3463",
  control: "m_64f58e10",
  indicators: "m_71ea3ab1",
  indicator: "m_eae68602",
  slide: "m_d98df724",
};
const Lg = He((e) => {
  const {
      classNames: r,
      className: o,
      style: l,
      styles: s,
      vars: c,
      mod: u,
      ...f
    } = Ee("CarouselSlide", null, e),
    d = O4();
  return w.jsx(Ne, {
    mod: [{ orientation: d.orientation }, u],
    role: "group",
    "aria-roledescription": "slide",
    "aria-label": "Carousel slide",
    ...d.getStyles("slide", { className: o, style: l, classNames: r, styles: s }),
    ...f,
  });
});
Lg.classes = kg;
Lg.displayName = "@mantine/carousel/CarouselSlide";
function j4({ slideGap: e, slideSize: r, selector: o }) {
  const l = mn(),
    s = xl({ "--carousel-slide-gap": un(fa(e)), "--carousel-slide-size": pe(fa(r)) }),
    c = wn(l.breakpoints).reduce(
      (u, f) => (
        u[f] || (u[f] = {}),
        typeof e == "object" && e[f] !== void 0 && (u[f]["--carousel-slide-gap"] = un(e[f])),
        typeof r == "object" && r[f] !== void 0 && (u[f]["--carousel-slide-size"] = un(r[f])),
        u
      ),
      {},
    );
  return w.jsx(nc, {
    styles: s,
    media: SS(wn(c), l.breakpoints)
      .filter((u) => wn(c[u.value]).length > 0)
      .map((u) => ({ query: `(min-width: ${l.breakpoints[u.value]})`, styles: c[u.value] })),
    selector: o,
  });
}
function cS(e) {
  return typeof e == "object" && e !== null ? wn(e) : [];
}
function z4(e) {
  return e.sort((r, o) => vl(r) - vl(o));
}
function k4({ slideGap: e, slideSize: r }) {
  return z4(Array.from(new Set([...cS(e), ...cS(r)])));
}
function L4({ slideGap: e, slideSize: r, selector: o }) {
  const l = xl({ "--carousel-slide-gap": un(fa(e)), "--carousel-slide-size": pe(fa(r)) }),
    s = k4({ slideGap: e, slideSize: r }).reduce(
      (c, u) => (
        c[u] || (c[u] = {}),
        typeof e == "object" && e[u] !== void 0 && (c[u]["--carousel-slide-gap"] = un(e[u])),
        typeof r == "object" && r[u] !== void 0 && (c[u]["--carousel-slide-size"] = un(r[u])),
        c
      ),
      {},
    );
  return w.jsx(nc, {
    styles: l,
    container: Object.keys(s).map((c) => ({ query: `carousel (min-width: ${c})`, styles: s[c] })),
    selector: o,
  });
}
function uS({ dir: e, orientation: r, direction: o }) {
  return o === "previous"
    ? r === "horizontal"
      ? 90 * (e === "ltr" ? 1 : -1)
      : -180
    : r === "horizontal"
      ? 90 * (e === "ltr" ? -1 : 1)
      : 0;
}
function B4(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function fS(e) {
  return B4(e) || Array.isArray(e);
}
function $4() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Bg(e, r) {
  const o = Object.keys(e),
    l = Object.keys(r);
  if (o.length !== l.length) return !1;
  const s = JSON.stringify(Object.keys(e.breakpoints || {})),
    c = JSON.stringify(Object.keys(r.breakpoints || {}));
  return s !== c
    ? !1
    : o.every((u) => {
        const f = e[u],
          d = r[u];
        return typeof f == "function" ? `${f}` == `${d}` : !fS(f) || !fS(d) ? f === d : Bg(f, d);
      });
}
function dS(e) {
  return e
    .concat()
    .sort((r, o) => (r.name > o.name ? 1 : -1))
    .map((r) => r.options);
}
function H4(e, r) {
  if (e.length !== r.length) return !1;
  const o = dS(e),
    l = dS(r);
  return o.every((s, c) => {
    const u = l[c];
    return Bg(s, u);
  });
}
function $g(e) {
  return typeof e == "number";
}
function cp(e) {
  return typeof e == "string";
}
function Zf(e) {
  return typeof e == "boolean";
}
function hS(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function qt(e) {
  return Math.abs(e);
}
function Hg(e) {
  return Math.sign(e);
}
function Hs(e, r) {
  return qt(e - r);
}
function U4(e, r) {
  if (e === 0 || r === 0 || qt(e) <= qt(r)) return 0;
  const o = Hs(qt(e), qt(r));
  return qt(o / e);
}
function P4(e) {
  return Math.round(e * 100) / 100;
}
function Zs(e) {
  return Ws(e).map(Number);
}
function Gr(e) {
  return e[vc(e)];
}
function vc(e) {
  return Math.max(0, e.length - 1);
}
function Ug(e, r) {
  return r === vc(e);
}
function mS(e, r = 0) {
  return Array.from(Array(e), (o, l) => r + l);
}
function Ws(e) {
  return Object.keys(e);
}
function sE(e, r) {
  return [e, r].reduce(
    (o, l) => (
      Ws(l).forEach((s) => {
        const c = o[s],
          u = l[s],
          f = hS(c) && hS(u);
        o[s] = f ? sE(c, u) : u;
      }),
      o
    ),
    {},
  );
}
function up(e, r) {
  return typeof r.MouseEvent < "u" && e instanceof r.MouseEvent;
}
function V4(e, r) {
  const o = { start: l, center: s, end: c };
  function l() {
    return 0;
  }
  function s(d) {
    return c(d) / 2;
  }
  function c(d) {
    return r - d;
  }
  function u(d, m) {
    return cp(e) ? o[e](d) : e(r, d, m);
  }
  return { measure: u };
}
function Js() {
  let e = [];
  function r(s, c, u, f = { passive: !0 }) {
    let d;
    if ("addEventListener" in s)
      (s.addEventListener(c, u, f), (d = () => s.removeEventListener(c, u, f)));
    else {
      const m = s;
      (m.addListener(u), (d = () => m.removeListener(u)));
    }
    return (e.push(d), l);
  }
  function o() {
    e = e.filter((s) => s());
  }
  const l = { add: r, clear: o };
  return l;
}
function I4(e, r, o, l) {
  const s = Js(),
    c = 1e3 / 60;
  let u = null,
    f = 0,
    d = 0;
  function m() {
    s.add(e, "visibilitychange", () => {
      e.hidden && x();
    });
  }
  function v() {
    (b(), s.clear());
  }
  function g(R) {
    if (!d) return;
    u || ((u = R), o(), o());
    const T = R - u;
    for (u = R, f += T; f >= c; ) (o(), (f -= c));
    const _ = f / c;
    (l(_), d && (d = r.requestAnimationFrame(g)));
  }
  function y() {
    d || (d = r.requestAnimationFrame(g));
  }
  function b() {
    (r.cancelAnimationFrame(d), (u = null), (f = 0), (d = 0));
  }
  function x() {
    ((u = null), (f = 0));
  }
  return { init: m, destroy: v, start: y, stop: b, update: o, render: l };
}
function F4(e, r) {
  const o = r === "rtl",
    l = e === "y",
    s = l ? "y" : "x",
    c = l ? "x" : "y",
    u = !l && o ? -1 : 1,
    f = v(),
    d = g();
  function m(x) {
    const { height: C, width: R } = x;
    return l ? C : R;
  }
  function v() {
    return l ? "top" : o ? "right" : "left";
  }
  function g() {
    return l ? "bottom" : o ? "left" : "right";
  }
  function y(x) {
    return x * u;
  }
  return { scroll: s, cross: c, startEdge: f, endEdge: d, measureSize: m, direction: y };
}
function wl(e = 0, r = 0) {
  const o = qt(e - r);
  function l(m) {
    return m < e;
  }
  function s(m) {
    return m > r;
  }
  function c(m) {
    return l(m) || s(m);
  }
  function u(m) {
    return c(m) ? (l(m) ? e : r) : m;
  }
  function f(m) {
    return o ? m - o * Math.ceil((m - r) / o) : m;
  }
  return {
    length: o,
    max: r,
    min: e,
    constrain: u,
    reachedAny: c,
    reachedMax: s,
    reachedMin: l,
    removeOffset: f,
  };
}
function cE(e, r, o) {
  const { constrain: l } = wl(0, e),
    s = e + 1;
  let c = u(r);
  function u(y) {
    return o ? qt((s + y) % s) : l(y);
  }
  function f() {
    return c;
  }
  function d(y) {
    return ((c = u(y)), g);
  }
  function m(y) {
    return v().set(f() + y);
  }
  function v() {
    return cE(e, f(), o);
  }
  const g = { get: f, set: d, add: m, clone: v };
  return g;
}
function q4(e, r, o, l, s, c, u, f, d, m, v, g, y, b, x, C, R, T, _) {
  const { cross: D, direction: j } = e,
    z = ["INPUT", "SELECT", "TEXTAREA"],
    H = { passive: !1 },
    $ = Js(),
    M = Js(),
    K = wl(50, 225).constrain(b.measure(20)),
    Y = { mouse: 300, touch: 400 },
    ee = { mouse: 500, touch: 600 },
    ne = x ? 43 : 25;
  let oe = !1,
    U = 0,
    re = 0,
    N = !1,
    k = !1,
    B = !1,
    F = !1;
  function Z(de) {
    if (!_) return;
    function _e(Oe) {
      (Zf(_) || _(de, Oe)) && ue(Oe);
    }
    const ze = r;
    $.add(ze, "dragstart", (Oe) => Oe.preventDefault(), H)
      .add(ze, "touchmove", () => {}, H)
      .add(ze, "touchend", () => {})
      .add(ze, "touchstart", _e)
      .add(ze, "mousedown", _e)
      .add(ze, "touchcancel", Se)
      .add(ze, "contextmenu", Se)
      .add(ze, "click", Ce, !0);
  }
  function O() {
    ($.clear(), M.clear());
  }
  function P() {
    const de = F ? o : r;
    M.add(de, "touchmove", ge, H)
      .add(de, "touchend", Se)
      .add(de, "mousemove", ge, H)
      .add(de, "mouseup", Se);
  }
  function Q(de) {
    const _e = de.nodeName || "";
    return z.includes(_e);
  }
  function ae() {
    return (x ? ee : Y)[F ? "mouse" : "touch"];
  }
  function ie(de, _e) {
    const ze = g.add(Hg(de) * -1),
      Oe = v.byDistance(de, !x).distance;
    return x || qt(de) < K ? Oe : R && _e ? Oe * 0.5 : v.byIndex(ze.get(), 0).distance;
  }
  function ue(de) {
    const _e = up(de, l);
    ((F = _e),
      (B = x && _e && !de.buttons && oe),
      (oe = Hs(s.get(), u.get()) >= 2),
      !(_e && de.button !== 0) &&
        (Q(de.target) ||
          ((N = !0),
          c.pointerDown(de),
          m.useFriction(0).useDuration(0),
          s.set(u),
          P(),
          (U = c.readPoint(de)),
          (re = c.readPoint(de, D)),
          y.emit("pointerDown"))));
  }
  function ge(de) {
    if (!up(de, l) && de.touches.length >= 2) return Se(de);
    const ze = c.readPoint(de),
      Oe = c.readPoint(de, D),
      at = Hs(ze, U),
      be = Hs(Oe, re);
    if (!k && !F && (!de.cancelable || ((k = at > be), !k))) return Se(de);
    const we = c.pointerMove(de);
    (at > C && (B = !0),
      m.useFriction(0.3).useDuration(0.75),
      f.start(),
      s.add(j(we)),
      de.preventDefault());
  }
  function Se(de) {
    const ze = v.byDistance(0, !1).index !== g.get(),
      Oe = c.pointerUp(de) * ae(),
      at = ie(j(Oe), ze),
      be = U4(Oe, at),
      we = ne - 10 * be,
      Me = T + be / 50;
    ((k = !1),
      (N = !1),
      M.clear(),
      m.useDuration(we).useFriction(Me),
      d.distance(at, !x),
      (F = !1),
      y.emit("pointerUp"));
  }
  function Ce(de) {
    B && (de.stopPropagation(), de.preventDefault(), (B = !1));
  }
  function Ye() {
    return N;
  }
  return { init: Z, destroy: O, pointerDown: Ye };
}
function Y4(e, r) {
  let l, s;
  function c(g) {
    return g.timeStamp;
  }
  function u(g, y) {
    const x = `client${(y || e.scroll) === "x" ? "X" : "Y"}`;
    return (up(g, r) ? g : g.touches[0])[x];
  }
  function f(g) {
    return ((l = g), (s = g), u(g));
  }
  function d(g) {
    const y = u(g) - u(s),
      b = c(g) - c(l) > 170;
    return ((s = g), b && (l = g), y);
  }
  function m(g) {
    if (!l || !s) return 0;
    const y = u(s) - u(l),
      b = c(g) - c(l),
      x = c(g) - c(s) > 170,
      C = y / b;
    return b && !x && qt(C) > 0.1 ? C : 0;
  }
  return { pointerDown: f, pointerMove: d, pointerUp: m, readPoint: u };
}
function G4() {
  function e(o) {
    const { offsetTop: l, offsetLeft: s, offsetWidth: c, offsetHeight: u } = o;
    return { top: l, right: s + c, bottom: l + u, left: s, width: c, height: u };
  }
  return { measure: e };
}
function X4(e) {
  function r(l) {
    return e * (l / 100);
  }
  return { measure: r };
}
function K4(e, r, o, l, s, c, u) {
  const f = [e].concat(l);
  let d,
    m,
    v = [],
    g = !1;
  function y(R) {
    return s.measureSize(u.measure(R));
  }
  function b(R) {
    if (!c) return;
    ((m = y(e)), (v = l.map(y)));
    function T(_) {
      for (const D of _) {
        if (g) return;
        const j = D.target === e,
          z = l.indexOf(D.target),
          H = j ? m : v[z],
          $ = y(j ? e : l[z]);
        if (qt($ - H) >= 0.5) {
          (R.reInit(), r.emit("resize"));
          break;
        }
      }
    }
    ((d = new ResizeObserver((_) => {
      (Zf(c) || c(R, _)) && T(_);
    })),
      o.requestAnimationFrame(() => {
        f.forEach((_) => d.observe(_));
      }));
  }
  function x() {
    ((g = !0), d && d.disconnect());
  }
  return { init: b, destroy: x };
}
function Q4(e, r, o, l, s, c) {
  let u = 0,
    f = 0,
    d = s,
    m = c,
    v = e.get(),
    g = 0;
  function y() {
    const H = l.get() - e.get(),
      $ = !d;
    let M = 0;
    return (
      $
        ? ((u = 0), o.set(l), e.set(l), (M = H))
        : (o.set(e), (u += H / d), (u *= m), (v += u), e.add(u), (M = v - g)),
      (f = Hg(M)),
      (g = v),
      z
    );
  }
  function b() {
    const H = l.get() - r.get();
    return qt(H) < 0.001;
  }
  function x() {
    return d;
  }
  function C() {
    return f;
  }
  function R() {
    return u;
  }
  function T() {
    return D(s);
  }
  function _() {
    return j(c);
  }
  function D(H) {
    return ((d = H), z);
  }
  function j(H) {
    return ((m = H), z);
  }
  const z = {
    direction: C,
    duration: x,
    velocity: R,
    seek: y,
    settled: b,
    useBaseFriction: _,
    useBaseDuration: T,
    useFriction: j,
    useDuration: D,
  };
  return z;
}
function Z4(e, r, o, l, s) {
  const c = s.measure(10),
    u = s.measure(50),
    f = wl(0.1, 0.99);
  let d = !1;
  function m() {
    return !(d || !e.reachedAny(o.get()) || !e.reachedAny(r.get()));
  }
  function v(b) {
    if (!m()) return;
    const x = e.reachedMin(r.get()) ? "min" : "max",
      C = qt(e[x] - r.get()),
      R = o.get() - r.get(),
      T = f.constrain(C / u);
    (o.subtract(R * T),
      !b && qt(R) < c && (o.set(e.constrain(o.get())), l.useDuration(25).useBaseFriction()));
  }
  function g(b) {
    d = !b;
  }
  return { shouldConstrain: m, constrain: v, toggleActive: g };
}
function W4(e, r, o, l, s) {
  const c = wl(-r + e, 0),
    u = g(),
    f = v(),
    d = y();
  function m(x, C) {
    return Hs(x, C) <= 1;
  }
  function v() {
    const x = u[0],
      C = Gr(u),
      R = u.lastIndexOf(x),
      T = u.indexOf(C) + 1;
    return wl(R, T);
  }
  function g() {
    return o
      .map((x, C) => {
        const { min: R, max: T } = c,
          _ = c.constrain(x),
          D = !C,
          j = Ug(o, C);
        return D ? T : j || m(R, _) ? R : m(T, _) ? T : _;
      })
      .map((x) => parseFloat(x.toFixed(3)));
  }
  function y() {
    if (r <= e + s) return [c.max];
    if (l === "keepSnaps") return u;
    const { min: x, max: C } = f;
    return u.slice(x, C);
  }
  return { snapsContained: d, scrollContainLimit: f };
}
function J4(e, r, o) {
  const l = r[0],
    s = o ? l - e : Gr(r);
  return { limit: wl(s, l) };
}
function e5(e, r, o, l) {
  const c = r.min + 0.1,
    u = r.max + 0.1,
    { reachedMin: f, reachedMax: d } = wl(c, u);
  function m(y) {
    return y === 1 ? d(o.get()) : y === -1 ? f(o.get()) : !1;
  }
  function v(y) {
    if (!m(y)) return;
    const b = e * (y * -1);
    l.forEach((x) => x.add(b));
  }
  return { loop: v };
}
function t5(e) {
  const { max: r, length: o } = e;
  function l(c) {
    const u = c - r;
    return o ? u / -o : 0;
  }
  return { get: l };
}
function n5(e, r, o, l, s) {
  const { startEdge: c, endEdge: u } = e,
    { groupSlides: f } = s,
    d = g().map(r.measure),
    m = y(),
    v = b();
  function g() {
    return f(l)
      .map((C) => Gr(C)[u] - C[0][c])
      .map(qt);
  }
  function y() {
    return l.map((C) => o[c] - C[c]).map((C) => -qt(C));
  }
  function b() {
    return f(m)
      .map((C) => C[0])
      .map((C, R) => C + d[R]);
  }
  return { snaps: m, snapsAligned: v };
}
function r5(e, r, o, l, s, c) {
  const { groupSlides: u } = s,
    { min: f, max: d } = l,
    m = v();
  function v() {
    const y = u(c),
      b = !e || r === "keepSnaps";
    return o.length === 1
      ? [c]
      : b
        ? y
        : y.slice(f, d).map((x, C, R) => {
            const T = !C,
              _ = Ug(R, C);
            if (T) {
              const D = Gr(R[0]) + 1;
              return mS(D);
            }
            if (_) {
              const D = vc(c) - Gr(R)[0] + 1;
              return mS(D, Gr(R)[0]);
            }
            return x;
          });
  }
  return { slideRegistry: m };
}
function a5(e, r, o, l, s) {
  const { reachedAny: c, removeOffset: u, constrain: f } = l;
  function d(x) {
    return x.concat().sort((C, R) => qt(C) - qt(R))[0];
  }
  function m(x) {
    const C = e ? u(x) : f(x),
      R = r
        .map((_, D) => ({ diff: v(_ - C, 0), index: D }))
        .sort((_, D) => qt(_.diff) - qt(D.diff)),
      { index: T } = R[0];
    return { index: T, distance: C };
  }
  function v(x, C) {
    const R = [x, x + o, x - o];
    if (!e) return x;
    if (!C) return d(R);
    const T = R.filter((_) => Hg(_) === C);
    return T.length ? d(T) : Gr(R) - o;
  }
  function g(x, C) {
    const R = r[x] - s.get(),
      T = v(R, C);
    return { index: x, distance: T };
  }
  function y(x, C) {
    const R = s.get() + x,
      { index: T, distance: _ } = m(R),
      D = !e && c(R);
    if (!C || D) return { index: T, distance: x };
    const j = r[T] - _,
      z = x + v(j, 0);
    return { index: T, distance: z };
  }
  return { byDistance: y, byIndex: g, shortcut: v };
}
function o5(e, r, o, l, s, c, u) {
  function f(g) {
    const y = g.distance,
      b = g.index !== r.get();
    (c.add(y),
      y && (l.duration() ? e.start() : (e.update(), e.render(1), e.update())),
      b && (o.set(r.get()), r.set(g.index), u.emit("select")));
  }
  function d(g, y) {
    const b = s.byDistance(g, y);
    f(b);
  }
  function m(g, y) {
    const b = r.clone().set(g),
      x = s.byIndex(b.get(), y);
    f(x);
  }
  return { distance: d, index: m };
}
function l5(e, r, o, l, s, c, u, f) {
  const d = { passive: !0, capture: !0 };
  let m = 0;
  function v(b) {
    if (!f) return;
    function x(C) {
      if (new Date().getTime() - m > 10) return;
      (u.emit("slideFocusStart"), (e.scrollLeft = 0));
      const _ = o.findIndex((D) => D.includes(C));
      $g(_) && (s.useDuration(0), l.index(_, 0), u.emit("slideFocus"));
    }
    (c.add(document, "keydown", g, !1),
      r.forEach((C, R) => {
        c.add(
          C,
          "focus",
          (T) => {
            (Zf(f) || f(b, T)) && x(R);
          },
          d,
        );
      }));
  }
  function g(b) {
    b.code === "Tab" && (m = new Date().getTime());
  }
  return { init: v };
}
function zs(e) {
  let r = e;
  function o() {
    return r;
  }
  function l(d) {
    r = u(d);
  }
  function s(d) {
    r += u(d);
  }
  function c(d) {
    r -= u(d);
  }
  function u(d) {
    return $g(d) ? d : d.get();
  }
  return { get: o, set: l, add: s, subtract: c };
}
function uE(e, r) {
  const o = e.scroll === "x" ? u : f,
    l = r.style;
  let s = null,
    c = !1;
  function u(y) {
    return `translate3d(${y}px,0px,0px)`;
  }
  function f(y) {
    return `translate3d(0px,${y}px,0px)`;
  }
  function d(y) {
    if (c) return;
    const b = P4(e.direction(y));
    b !== s && ((l.transform = o(b)), (s = b));
  }
  function m(y) {
    c = !y;
  }
  function v() {
    c || ((l.transform = ""), r.getAttribute("style") || r.removeAttribute("style"));
  }
  return { clear: v, to: d, toggleActive: m };
}
function i5(e, r, o, l, s, c, u, f, d) {
  const v = Zs(s),
    g = Zs(s).reverse(),
    y = T().concat(_());
  function b($, M) {
    return $.reduce((K, Y) => K - s[Y], M);
  }
  function x($, M) {
    return $.reduce((K, Y) => (b(K, M) > 0 ? K.concat([Y]) : K), []);
  }
  function C($) {
    return c.map((M, K) => ({ start: M - l[K] + 0.5 + $, end: M + r - 0.5 + $ }));
  }
  function R($, M, K) {
    const Y = C(M);
    return $.map((ee) => {
      const ne = K ? 0 : -o,
        oe = K ? o : 0,
        U = K ? "end" : "start",
        re = Y[ee][U];
      return {
        index: ee,
        loopPoint: re,
        slideLocation: zs(-1),
        translate: uE(e, d[ee]),
        target: () => (f.get() > re ? ne : oe),
      };
    });
  }
  function T() {
    const $ = u[0],
      M = x(g, $);
    return R(M, o, !1);
  }
  function _() {
    const $ = r - u[0] - 1,
      M = x(v, $);
    return R(M, -o, !0);
  }
  function D() {
    return y.every(({ index: $ }) => {
      const M = v.filter((K) => K !== $);
      return b(M, r) <= 0.1;
    });
  }
  function j() {
    y.forEach(($) => {
      const { target: M, translate: K, slideLocation: Y } = $,
        ee = M();
      ee !== Y.get() && (K.to(ee), Y.set(ee));
    });
  }
  function z() {
    y.forEach(($) => $.translate.clear());
  }
  return { canLoop: D, clear: z, loop: j, loopPoints: y };
}
function s5(e, r, o) {
  let l,
    s = !1;
  function c(d) {
    if (!o) return;
    function m(v) {
      for (const g of v)
        if (g.type === "childList") {
          (d.reInit(), r.emit("slidesChanged"));
          break;
        }
    }
    ((l = new MutationObserver((v) => {
      s || ((Zf(o) || o(d, v)) && m(v));
    })),
      l.observe(e, { childList: !0 }));
  }
  function u() {
    (l && l.disconnect(), (s = !0));
  }
  return { init: c, destroy: u };
}
function c5(e, r, o, l) {
  const s = {};
  let c = null,
    u = null,
    f,
    d = !1;
  function m() {
    ((f = new IntersectionObserver(
      (x) => {
        d ||
          (x.forEach((C) => {
            const R = r.indexOf(C.target);
            s[R] = C;
          }),
          (c = null),
          (u = null),
          o.emit("slidesInView"));
      },
      { root: e.parentElement, threshold: l },
    )),
      r.forEach((x) => f.observe(x)));
  }
  function v() {
    (f && f.disconnect(), (d = !0));
  }
  function g(x) {
    return Ws(s).reduce((C, R) => {
      const T = parseInt(R),
        { isIntersecting: _ } = s[T];
      return (((x && _) || (!x && !_)) && C.push(T), C);
    }, []);
  }
  function y(x = !0) {
    if (x && c) return c;
    if (!x && u) return u;
    const C = g(x);
    return (x && (c = C), x || (u = C), C);
  }
  return { init: m, destroy: v, get: y };
}
function u5(e, r, o, l, s, c) {
  const { measureSize: u, startEdge: f, endEdge: d } = e,
    m = o[0] && s,
    v = x(),
    g = C(),
    y = o.map(u),
    b = R();
  function x() {
    if (!m) return 0;
    const _ = o[0];
    return qt(r[f] - _[f]);
  }
  function C() {
    if (!m) return 0;
    const _ = c.getComputedStyle(Gr(l));
    return parseFloat(_.getPropertyValue(`margin-${d}`));
  }
  function R() {
    return o
      .map((_, D, j) => {
        const z = !D,
          H = Ug(j, D);
        return z ? y[D] + v : H ? y[D] + g : j[D + 1][f] - _[f];
      })
      .map(qt);
  }
  return { slideSizes: y, slideSizesWithGaps: b, startGap: v, endGap: g };
}
function f5(e, r, o, l, s, c, u, f, d) {
  const { startEdge: m, endEdge: v, direction: g } = e,
    y = $g(o);
  function b(T, _) {
    return Zs(T)
      .filter((D) => D % _ === 0)
      .map((D) => T.slice(D, D + _));
  }
  function x(T) {
    return T.length
      ? Zs(T)
          .reduce((_, D, j) => {
            const z = Gr(_) || 0,
              H = z === 0,
              $ = D === vc(T),
              M = s[m] - c[z][m],
              K = s[m] - c[D][v],
              Y = !l && H ? g(u) : 0,
              ee = !l && $ ? g(f) : 0,
              ne = qt(K - ee - (M + Y));
            return (j && ne > r + d && _.push(D), $ && _.push(T.length), _);
          }, [])
          .map((_, D, j) => {
            const z = Math.max(j[D - 1] || 0);
            return T.slice(z, _);
          })
      : [];
  }
  function C(T) {
    return y ? b(T, o) : x(T);
  }
  return { groupSlides: C };
}
function d5(e, r, o, l, s, c, u) {
  const {
      align: f,
      axis: d,
      direction: m,
      startIndex: v,
      loop: g,
      duration: y,
      dragFree: b,
      dragThreshold: x,
      inViewThreshold: C,
      slidesToScroll: R,
      skipSnaps: T,
      containScroll: _,
      watchResize: D,
      watchSlides: j,
      watchDrag: z,
      watchFocus: H,
    } = c,
    $ = 2,
    M = G4(),
    K = M.measure(r),
    Y = o.map(M.measure),
    ee = F4(d, m),
    ne = ee.measureSize(K),
    oe = X4(ne),
    U = V4(f, ne),
    re = !g && !!_,
    N = g || !!_,
    { slideSizes: k, slideSizesWithGaps: B, startGap: F, endGap: Z } = u5(ee, K, Y, o, N, s),
    O = f5(ee, ne, R, g, K, Y, F, Z, $),
    { snaps: P, snapsAligned: Q } = n5(ee, U, K, Y, O),
    ae = -Gr(P) + Gr(B),
    { snapsContained: ie, scrollContainLimit: ue } = W4(ne, ae, Q, _, $),
    ge = re ? ie : Q,
    { limit: Se } = J4(ae, ge, g),
    Ce = cE(vc(ge), v, g),
    Ye = Ce.clone(),
    je = Zs(o),
    de = ({ dragHandler: zt, scrollBody: nn, scrollBounds: An, options: { loop: Vt } }) => {
      (Vt || An.constrain(zt.pointerDown()), nn.seek());
    },
    _e = (
      {
        scrollBody: zt,
        translate: nn,
        location: An,
        offsetLocation: Vt,
        previousLocation: Ht,
        scrollLooper: At,
        slideLooper: Ft,
        dragHandler: zr,
        animation: kr,
        eventHandler: Lr,
        scrollBounds: Mn,
        options: { loop: gn },
      },
      Nn,
    ) => {
      const rn = zt.settled(),
        Bn = !Mn.shouldConstrain(),
        xn = gn ? rn : rn && Bn,
        Re = xn && !zr.pointerDown();
      Re && kr.stop();
      const $e = An.get() * Nn + Ht.get() * (1 - Nn);
      (Vt.set($e),
        gn && (At.loop(zt.direction()), Ft.loop()),
        nn.to(Vt.get()),
        Re && Lr.emit("settle"),
        xn || Lr.emit("scroll"));
    },
    ze = I4(
      l,
      s,
      () => de(Gt),
      (zt) => _e(Gt, zt),
    ),
    Oe = 0.68,
    at = ge[Ce.get()],
    be = zs(at),
    we = zs(at),
    Me = zs(at),
    xe = zs(at),
    Be = Q4(be, Me, we, xe, y, Oe),
    Ve = a5(g, ge, ae, Se, xe),
    Xe = o5(ze, Ce, Ye, Be, Ve, xe, u),
    ot = t5(Se),
    We = Js(),
    Ie = c5(r, o, u, C),
    { slideRegistry: Yt } = r5(re, _, ge, ue, O, je),
    pn = l5(e, o, Yt, Xe, Be, We, u, H),
    Gt = {
      ownerDocument: l,
      ownerWindow: s,
      eventHandler: u,
      containerRect: K,
      slideRects: Y,
      animation: ze,
      axis: ee,
      dragHandler: q4(ee, e, l, s, xe, Y4(ee, s), be, ze, Xe, Be, Ve, Ce, u, oe, b, x, T, Oe, z),
      eventStore: We,
      percentOfView: oe,
      index: Ce,
      indexPrevious: Ye,
      limit: Se,
      location: be,
      offsetLocation: Me,
      previousLocation: we,
      options: c,
      resizeHandler: K4(r, u, s, o, ee, D, M),
      scrollBody: Be,
      scrollBounds: Z4(Se, Me, xe, Be, oe),
      scrollLooper: e5(ae, Se, Me, [be, Me, we, xe]),
      scrollProgress: ot,
      scrollSnapList: ge.map(ot.get),
      scrollSnaps: ge,
      scrollTarget: Ve,
      scrollTo: Xe,
      slideLooper: i5(ee, ne, ae, k, B, P, ge, Me, o),
      slideFocus: pn,
      slidesHandler: s5(r, u, j),
      slidesInView: Ie,
      slideIndexes: je,
      slideRegistry: Yt,
      slidesToScroll: O,
      target: xe,
      translate: uE(ee, r),
    };
  return Gt;
}
function h5() {
  let e = {},
    r;
  function o(m) {
    r = m;
  }
  function l(m) {
    return e[m] || [];
  }
  function s(m) {
    return (l(m).forEach((v) => v(r, m)), d);
  }
  function c(m, v) {
    return ((e[m] = l(m).concat([v])), d);
  }
  function u(m, v) {
    return ((e[m] = l(m).filter((g) => g !== v)), d);
  }
  function f() {
    e = {};
  }
  const d = { init: o, emit: s, off: u, on: c, clear: f };
  return d;
}
const m5 = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0,
};
function p5(e) {
  function r(c, u) {
    return sE(c, u || {});
  }
  function o(c) {
    const u = c.breakpoints || {},
      f = Ws(u)
        .filter((d) => e.matchMedia(d).matches)
        .map((d) => u[d])
        .reduce((d, m) => r(d, m), {});
    return r(c, f);
  }
  function l(c) {
    return c
      .map((u) => Ws(u.breakpoints || {}))
      .reduce((u, f) => u.concat(f), [])
      .map(e.matchMedia);
  }
  return { mergeOptions: r, optionsAtMedia: o, optionsMediaQueries: l };
}
function g5(e) {
  let r = [];
  function o(c, u) {
    return (
      (r = u.filter(({ options: f }) => e.optionsAtMedia(f).active !== !1)),
      r.forEach((f) => f.init(c, e)),
      u.reduce((f, d) => Object.assign(f, { [d.name]: d }), {})
    );
  }
  function l() {
    r = r.filter((c) => c.destroy());
  }
  return { init: o, destroy: l };
}
function ff(e, r, o) {
  const l = e.ownerDocument,
    s = l.defaultView,
    c = p5(s),
    u = g5(c),
    f = Js(),
    d = h5(),
    { mergeOptions: m, optionsAtMedia: v, optionsMediaQueries: g } = c,
    { on: y, off: b, emit: x } = d,
    C = ee;
  let R = !1,
    T,
    _ = m(m5, ff.globalOptions),
    D = m(_),
    j = [],
    z,
    H,
    $;
  function M() {
    const { container: je, slides: de } = D;
    H = (cp(je) ? e.querySelector(je) : je) || e.children[0];
    const ze = cp(de) ? H.querySelectorAll(de) : de;
    $ = [].slice.call(ze || H.children);
  }
  function K(je) {
    const de = d5(e, H, $, l, s, je, d);
    if (je.loop && !de.slideLooper.canLoop()) {
      const _e = Object.assign({}, je, { loop: !1 });
      return K(_e);
    }
    return de;
  }
  function Y(je, de) {
    R ||
      ((_ = m(_, je)),
      (D = v(_)),
      (j = de || j),
      M(),
      (T = K(D)),
      g([_, ...j.map(({ options: _e }) => _e)]).forEach((_e) => f.add(_e, "change", ee)),
      D.active &&
        (T.translate.to(T.location.get()),
        T.animation.init(),
        T.slidesInView.init(),
        T.slideFocus.init(Ye),
        T.eventHandler.init(Ye),
        T.resizeHandler.init(Ye),
        T.slidesHandler.init(Ye),
        T.options.loop && T.slideLooper.loop(),
        H.offsetParent && $.length && T.dragHandler.init(Ye),
        (z = u.init(Ye, j))));
  }
  function ee(je, de) {
    const _e = O();
    (ne(), Y(m({ startIndex: _e }, je), de), d.emit("reInit"));
  }
  function ne() {
    (T.dragHandler.destroy(),
      T.eventStore.clear(),
      T.translate.clear(),
      T.slideLooper.clear(),
      T.resizeHandler.destroy(),
      T.slidesHandler.destroy(),
      T.slidesInView.destroy(),
      T.animation.destroy(),
      u.destroy(),
      f.clear());
  }
  function oe() {
    R || ((R = !0), f.clear(), ne(), d.emit("destroy"), d.clear());
  }
  function U(je, de, _e) {
    !D.active ||
      R ||
      (T.scrollBody.useBaseFriction().useDuration(de === !0 ? 0 : D.duration),
      T.scrollTo.index(je, _e || 0));
  }
  function re(je) {
    const de = T.index.add(1).get();
    U(de, je, -1);
  }
  function N(je) {
    const de = T.index.add(-1).get();
    U(de, je, 1);
  }
  function k() {
    return T.index.add(1).get() !== O();
  }
  function B() {
    return T.index.add(-1).get() !== O();
  }
  function F() {
    return T.scrollSnapList;
  }
  function Z() {
    return T.scrollProgress.get(T.offsetLocation.get());
  }
  function O() {
    return T.index.get();
  }
  function P() {
    return T.indexPrevious.get();
  }
  function Q() {
    return T.slidesInView.get();
  }
  function ae() {
    return T.slidesInView.get(!1);
  }
  function ie() {
    return z;
  }
  function ue() {
    return T;
  }
  function ge() {
    return e;
  }
  function Se() {
    return H;
  }
  function Ce() {
    return $;
  }
  const Ye = {
    canScrollNext: k,
    canScrollPrev: B,
    containerNode: Se,
    internalEngine: ue,
    destroy: oe,
    off: b,
    on: y,
    emit: x,
    plugins: ie,
    previousScrollSnap: P,
    reInit: C,
    rootNode: ge,
    scrollNext: re,
    scrollPrev: N,
    scrollProgress: Z,
    scrollSnapList: F,
    scrollTo: U,
    selectedScrollSnap: O,
    slideNodes: Ce,
    slidesInView: Q,
    slidesNotInView: ae,
  };
  return (Y(r, o), setTimeout(() => d.emit("init"), 0), Ye);
}
ff.globalOptions = void 0;
function Pg(e = {}, r = []) {
  const o = S.useRef(e),
    l = S.useRef(r),
    [s, c] = S.useState(),
    [u, f] = S.useState(),
    d = S.useCallback(() => {
      s && s.reInit(o.current, l.current);
    }, [s]);
  return (
    S.useEffect(() => {
      Bg(o.current, e) || ((o.current = e), d());
    }, [e, d]),
    S.useEffect(() => {
      H4(l.current, r) || ((l.current = r), d());
    }, [r, d]),
    S.useEffect(() => {
      if ($4() && u) {
        ff.globalOptions = Pg.globalOptions;
        const m = ff(u, o.current, l.current);
        return (c(m), () => m.destroy());
      } else c(void 0);
    }, [u, c]),
    [f, s]
  );
}
Pg.globalOptions = void 0;
const v5 = {
    controlSize: 26,
    controlsOffset: "sm",
    slideSize: "100%",
    slideGap: 0,
    orientation: "horizontal",
    includeGapInSize: !0,
    initialSlide: 0,
    withControls: !0,
    withIndicators: !1,
    withKeyboardEvents: !0,
    type: "media",
  },
  y5 = {
    align: "center",
    loop: !1,
    slidesToScroll: 1,
    dragFree: !1,
    inViewThreshold: 0,
    skipSnaps: !1,
    containScroll: "trimSnaps",
  },
  fE = (e, { height: r, controlSize: o, controlsOffset: l }) => ({
    root: {
      "--carousel-height": pe(r),
      "--carousel-control-size": pe(o),
      "--carousel-controls-offset": un(l),
    },
  }),
  Ci = He((e) => {
    const r = Ee("Carousel", v5, e),
      {
        classNames: o,
        className: l,
        style: s,
        styles: c,
        unstyled: u,
        vars: f,
        children: d,
        getEmblaApi: m,
        onNextSlide: v,
        onPreviousSlide: g,
        onSlideChange: y,
        nextControlProps: b,
        previousControlProps: x,
        controlSize: C,
        controlsOffset: R,
        slideSize: T,
        slideGap: _,
        orientation: D,
        height: j,
        includeGapInSize: z,
        draggable: H,
        initialSlide: $,
        withControls: M,
        withIndicators: K,
        plugins: Y,
        nextControlIcon: ee,
        previousControlIcon: ne,
        withKeyboardEvents: oe,
        mod: U,
        type: re,
        emblaOptions: N,
        attributes: k,
        getIndicatorProps: B,
        id: F,
        ...Z
      } = r,
      O = Ze({
        name: "Carousel",
        classes: kg,
        props: r,
        className: l,
        style: s,
        classNames: o,
        styles: c,
        unstyled: u,
        attributes: k,
        vars: f,
        varsResolver: fE,
      }),
      P = Wr(F),
      Q = _p(),
      { dir: ae } = Za(),
      [ie, ue] = Pg(
        {
          axis: D === "horizontal" ? "x" : "y",
          direction: D === "horizontal" ? ae : void 0,
          startIndex: $,
          ...y5,
          ...N,
        },
        Y,
      ),
      [ge, Se] = S.useState(0),
      [Ce, Ye] = S.useState(0),
      je = S.useCallback((xe) => ue && ue.scrollTo(xe), [ue]),
      de = S.useCallback(() => {
        if (!ue) return;
        const xe = ue.selectedScrollSnap();
        (Se(xe), xe !== ge && y?.(xe));
      }, [ue, Se, y, ge]),
      _e = S.useCallback(() => {
        (ue?.scrollPrev(), g?.());
      }, [ue]),
      ze = S.useCallback(() => {
        (ue?.scrollNext(), v?.());
      }, [ue]),
      Oe = S.useCallback(
        (xe) => {
          oe &&
            (xe.key === "ArrowRight" && (xe.preventDefault(), ze()),
            xe.key === "ArrowLeft" && (xe.preventDefault(), _e()),
            xe.key === "Home" && (xe.preventDefault(), ue?.scrollTo(0)),
            xe.key === "End" &&
              (xe.preventDefault(), ue?.scrollTo(ue.scrollSnapList().length - 1)));
        },
        [ue, ze, _e],
      );
    (S.useEffect(() => {
      if (ue)
        return (
          m?.(ue),
          de(),
          Ye(ue.scrollSnapList().length),
          ue.on("select", de),
          () => {
            ue.off("select", de);
          }
        );
    }, [ue, N?.slidesToScroll, de]),
      S.useEffect(() => {
        ue &&
          (ue.reInit(),
          Ye(ue.scrollSnapList().length),
          Se((xe) => ks(xe, 0, S.Children.toArray(d).length - 1)));
      }, [S.Children.toArray(d).length, N?.slidesToScroll]));
    const at = ue?.canScrollPrev() || !1,
      be = ue?.canScrollNext() || !1,
      we = S.useCallback(
        (xe, Be) => {
          const Ve = D === "horizontal",
            Xe = Ve ? "ArrowRight" : "ArrowDown",
            ot = Ve ? "ArrowLeft" : "ArrowUp";
          if (xe.key === Xe) {
            xe.preventDefault();
            const We = Be < Ce - 1 ? Be + 1 : 0;
            (je(We), xe.currentTarget.parentElement?.children[We]?.focus());
          }
          if (xe.key === ot) {
            xe.preventDefault();
            const We = Be > 0 ? Be - 1 : Ce - 1;
            (je(We), xe.currentTarget.parentElement?.children[We]?.focus());
          }
          (xe.key === "Home" &&
            (xe.preventDefault(), je(0), xe.currentTarget.parentElement?.children[0]?.focus()),
            xe.key === "End" &&
              (xe.preventDefault(),
              je(Ce - 1),
              xe.currentTarget.parentElement?.children[Ce - 1]?.focus()));
        },
        [D, Ce, je],
      ),
      Me = Array(Ce)
        .fill(0)
        .map((xe, Be) =>
          S.createElement(Wn, {
            ...O("indicator"),
            key: Be,
            role: "tab",
            "aria-label": `Go to slide ${Be + 1}`,
            "aria-selected": Be === ge,
            tabIndex: Be === ge ? 0 : -1,
            "data-active": Be === ge || void 0,
            onClick: () => je(Be),
            onKeyDown: (Ve) => we(Ve, Be),
            "data-orientation": D,
            onMouseDown: (Ve) => Ve.preventDefault(),
            ...B?.(Be),
          }),
        );
    return w.jsxs(N4, {
      value: { getStyles: O, orientation: D },
      children: [
        re === "container"
          ? w.jsx(L4, { ...r, selector: `.${Q}` })
          : w.jsx(j4, { ...r, selector: `.${Q}` }),
        w.jsxs(Ne, {
          role: "region",
          "aria-roledescription": "carousel",
          ...O("root", { className: Q }),
          ...Z,
          id: P,
          mod: [{ orientation: D, "include-gap-in-size": z }, U],
          onKeyDownCapture: Oe,
          children: [
            w.jsx(Ef, {
              role: "status",
              "aria-live": "polite",
              "aria-atomic": "true",
              children: Ce > 0 && `Slide ${ge + 1} of ${Ce}`,
            }),
            M &&
              w.jsxs("div", {
                ...O("controls"),
                "data-orientation": D,
                children: [
                  w.jsx(Wn, {
                    "aria-controls": P,
                    "aria-label": "Previous slide",
                    "aria-disabled": !at,
                    "data-inactive": !at || void 0,
                    "data-type": "previous",
                    tabIndex: at ? 0 : -1,
                    ...x,
                    ...O("control", { className: x?.className, style: x?.style }),
                    onClick: (xe) => {
                      (_e(), x?.onClick?.(xe));
                    },
                    children:
                      typeof ne < "u"
                        ? ne
                        : w.jsx(Is, {
                            style: {
                              transform: `rotate(${uS({ dir: ae, orientation: D, direction: "previous" })}deg)`,
                            },
                          }),
                  }),
                  w.jsx(Wn, {
                    "aria-controls": P,
                    "aria-label": "Next slide",
                    "aria-disabled": !be,
                    "data-inactive": !be || void 0,
                    "data-type": "next",
                    tabIndex: be ? 0 : -1,
                    ...O("control", { className: b?.className, style: b?.style }),
                    ...b,
                    onClick: (xe) => {
                      (ze(), b?.onClick?.(xe));
                    },
                    children:
                      typeof ee < "u"
                        ? ee
                        : w.jsx(Is, {
                            style: {
                              transform: `rotate(${uS({ dir: ae, orientation: D, direction: "next" })}deg)`,
                            },
                          }),
                  }),
                ],
              }),
            w.jsx("div", {
              ...O("viewport"),
              ref: ie,
              "data-type": re,
              children: w.jsx("div", {
                ...O("container", { className: Q }),
                "data-orientation": D,
                children: d,
              }),
            }),
            K &&
              w.jsx("div", {
                ...O("indicators"),
                role: "tablist",
                "aria-label": "Slides",
                "data-orientation": D,
                children: Me,
              }),
          ],
        }),
      ],
    });
  });
Ci.classes = kg;
Ci.varsResolver = fE;
Ci.displayName = "@mantine/carousel/Carousel";
Ci.Slide = Lg;
const b5 = "_control_uyl9o_1",
  S5 = { control: b5 };
function w5({ recipeType: e }) {
  const r = mn(),
    o = Ho(`(max-width: ${r.breakpoints.sm})`),
    s = (e ? xi.filter((u) => u.filters.details.type === e) : xi).map((u) =>
      w.jsx(Ci.Slide, { children: w.jsx(M4, { ...u }) }, u.title),
    ),
    c = S.useRef(zg({ delay: 4e3 }));
  return w.jsx(Ci, {
    "aria-label": "Gallery of recipes",
    flex: 1,
    classNames: S5,
    type: "container",
    slideSize: { base: "100%", "300px": "50%", "500px": "33.333333%" },
    slideGap: { base: 0, "300px": "md", "500px": "lg" },
    emblaOptions: { loop: !0, align: "start", slidesToScroll: o ? 1 : 2 },
    nextControlProps: { "aria-label": "Next slide" },
    previousControlProps: { "aria-label": "Previous slide" },
    plugins: [c.current],
    onMouseEnter: c.current.stop,
    onMouseLeave: () => c.current.reset(),
    children: s,
  });
}
function x5() {
  const e = ({ title: r, path: o, recipeType: l }) =>
    w.jsxs(w.Fragment, {
      children: [
        w.jsx("a", {
          href: o,
          children: w.jsx(Pn, {
            className: _s.title,
            children: w.jsx("span", { className: _s.highlight, children: r }),
          }),
        }),
        w.jsx(w5, { recipeType: l }),
      ],
    });
  return w.jsx(w.Fragment, {
    children: w.jsx(Nr, {
      size: "lg",
      children: w.jsxs("div", {
        className: _s.carousel,
        children: [
          w.jsx("a", {
            href: "/recipe-library",
            children: w.jsx(Pn, {
              className: _s.title,
              children: w.jsx("span", { className: _s.highlight, children: "View all recipes" }),
            }),
          }),
          w.jsx(e, { title: "Main meals", path: "/main-meal-recipes", recipeType: "main meal" }),
          w.jsx(e, { title: "Baking", path: "/baking-recipes", recipeType: "baking" }),
          w.jsx(e, { title: "Other", path: "/other-recipes", recipeType: "other" }),
        ],
      }),
    }),
  });
}
function C5() {
  return w.jsx(ya, {
    className: Zr.pageContent,
    children: w.jsxs(Io, { className: Zr.stack, children: [w.jsx(b4, {}), w.jsx(x5, {})] }),
  });
}
const E5 = "_inner_1evj3_1",
  R5 = "_content_1evj3_12",
  T5 = "_head_1evj3_22",
  _5 = "_imageParent_1evj3_33",
  D5 = "_image_1evj3_33",
  A5 = "_headText_1evj3_55",
  M5 = "_title_1evj3_63",
  N5 = "_icons_1evj3_75",
  O5 = "_subtitle_1evj3_97",
  j5 = "_text_1evj3_109",
  z5 = "_wrapper_1evj3_119",
  k5 = "_ingredients_1evj3_133",
  L5 = "_method_1evj3_137",
  B5 = "_button_1evj3_158",
  $5 = "_control_1evj3_163",
  H5 = "_ingredientItem_1evj3_177",
  U5 = "_ingredientLabel_1evj3_182",
  hn = {
    inner: E5,
    content: R5,
    head: T5,
    imageParent: _5,
    image: D5,
    headText: A5,
    title: M5,
    icons: N5,
    subtitle: O5,
    text: j5,
    wrapper: z5,
    ingredients: k5,
    method: L5,
    button: B5,
    control: $5,
    ingredientItem: H5,
    ingredientLabel: U5,
  },
  P5 = "_icons2_mppo2_1",
  V5 = "_servesGroup_mppo2_6",
  I5 = "_numberInput_mppo2_13",
  F5 = "_timeGroup_mppo2_18",
  q5 = "_text_mppo2_25",
  Y5 = "_icons_mppo2_1",
  Xr = { icons2: P5, servesGroup: V5, numberInput: I5, timeGroup: F5, text: q5, icons: Y5 };
function G5({ recipe: e, isVeganToggle: r, setIsVeganToggle: o }) {
  const l = mn(),
    s = Ho(`(max-width: ${l.breakpoints.sm})`),
    [c, u] = S.useState(!1);
  S.useEffect(() => {
    if (!r) return;
    u(!0);
    const d = setTimeout(() => u(!1), 3e3);
    return () => clearTimeout(d);
  }, [r]);
  const f =
    r && e.filters.dietaries.veganAdjustable ? "Remove vegan modifications" : "Make it vegan";
  return w.jsxs(Zt, {
    width: 200,
    position: "bottom",
    withArrow: !0,
    shadow: "md",
    opened: c,
    onDismiss: () => u(!1),
    transitionProps: { transition: "fade", duration: 400 },
    children: [
      w.jsx(Zt.Target, {
        children: w.jsx(Or, {
          label: f,
          refProp: "rootRef",
          position: "top",
          disabled: s,
          children: w.jsx(fc, {
            size: "lg",
            color: "var(--mantine-color-green-4)",
            onLabel: w.jsx(w3, { color: "var(--mantine-color-dark-5)" }),
            offLabel: w.jsx(vg, { color: "var(--mantine-color-green-6)" }),
            withThumbIndicator: !1,
            checked: r,
            onChange: (d) => o(d.currentTarget.checked),
          }),
        }),
      }),
      e.filters.dietaries.veganAdjustable && r
        ? w.jsx(Zt.Dropdown, {
            children: w.jsx(Vn, {
              size: "sm",
              children: e.filters.dietaries.makeItVegan.instructions,
            }),
          })
        : w.jsx(w.Fragment, {}),
    ],
  });
}
function X5(e) {
  if (e)
    return w.jsx("div", {
      children: w.jsx(Or, { label: "Freezable", children: w.jsx(yg, { className: Xr.icons2 }) }),
    });
}
function K5({ serves: e, servesValue: r, setServesValue: o }) {
  return w.jsx(Or, {
    label: `Makes ${r} portions`,
    children: w.jsxs("div", {
      className: Xr.servesGroup,
      children: [
        w.jsx(T3, { className: Xr.icons2 }),
        w.jsx(Ff, {
          "aria-label": "Number of portions",
          className: Xr.numberInput,
          defaultValue: e,
          min: 1,
          max: 50,
          allowDecimal: !1,
          value: r,
          onChange: (l) => {
            typeof l == "number" && o(l);
          },
        }),
      ],
    }),
  });
}
function Q5(e) {
  return w.jsx(Or, {
    label: `Takes ${e.toLowerCase()} to cook`,
    children: w.jsxs("div", {
      className: Xr.timeGroup,
      children: [
        w.jsx(b3, { className: Xr.icons2 }),
        w.jsx(Vn, { className: Xr.text, children: e.toLowerCase() }),
      ],
    }),
  });
}
function Z5({ recipe: e, isVeganToggle: r, setIsVeganToggle: o }) {
  if (e.filters.dietaries.veganAdjustable)
    return w.jsx(G5, { recipe: e, isVeganToggle: r, setIsVeganToggle: o });
}
function W5(e) {
  if (e) return w.jsx(bg, { className: Xr.icons2 });
}
function J5({
  recipe: e,
  servesValue: r,
  setServesValue: o,
  isVeganToggle: l,
  setIsVeganToggle: s,
}) {
  const { serves: c } = e;
  return w.jsxs(w.Fragment, {
    children: [
      K5({ serves: c, servesValue: r, setServesValue: o }),
      Q5(e.time),
      X5(e.filters.attributes.freezable),
      W5(e.filters.attributes.hotWeatherFriendly),
      w.jsx(Z5, { recipe: e, isVeganToggle: l, setIsVeganToggle: s }),
    ],
  });
}
function ez(e) {
  if (e)
    return w.jsx("div", {
      children: w.jsx(Or, {
        label: "Freezable",
        children: w.jsx(yg, { size: 40, stroke: 1.5, className: Xr.icons }),
      }),
    });
}
function tz(e) {
  if (e)
    return w.jsx("div", {
      children: w.jsx(Or, {
        label: "Hot weather friendly",
        children: w.jsx(bg, { size: 40, stroke: 1.5, className: Xr.icons }),
      }),
    });
}
function nz(e) {
  if (e)
    return w.jsx("div", {
      children: w.jsx(Or, {
        label: "possibility to make it vegan",
        children: w.jsx(vg, { size: 40, stroke: 1.5, className: Xr.icons }),
      }),
    });
}
function rz({ recipe: e }) {
  return w.jsxs(w.Fragment, {
    children: [
      ez(e.filters.attributes.freezable),
      tz(e.filters.attributes.hotWeatherFriendly),
      nz(e.filters.dietaries.veganAdjustable),
    ],
  });
}
function az(e) {
  const {
      image: r,
      title: o,
      description: l,
      serves: s,
      ingredients: c,
      method: u,
      time: f,
      filters: d,
    } = e,
    { dietaries: m } = d,
    { veganAdjustable: v } = m,
    [g, y] = S.useState(!1),
    [b, x] = S.useState(s),
    C = b / s,
    T = (g && v ? m.makeItVegan.veganIngredients : c).map((j) =>
      w.jsx(Fs, {
        id: "checklistItem",
        classNames: { item: hn.ingredientItem, itemLabel: hn.ingredientLabel },
        children: w.jsx(Tl, {
          color: "orange.4",
          iconColor: "dark.8",
          size: "md",
          label: [j[0] * C, j[1]],
        }),
      }),
    ),
    D = (g && v ? m.makeItVegan.veganMethod : u).map((j) => w.jsx(Fs, { children: j }));
  return w.jsx(Nr, {
    size: "xl",
    px: { base: 0, md: "md" },
    children: w.jsx("div", {
      className: hn.inner,
      children: w.jsxs("div", {
        className: hn.content,
        children: [
          w.jsxs("div", {
            className: hn.head,
            children: [
              w.jsx("div", {
                className: hn.imageParent,
                children: w.jsx(uc, { src: r, alt: e.imageAlt, className: hn.image }),
              }),
              w.jsxs("div", {
                className: hn.headText,
                children: [
                  w.jsx(Pn, {
                    className: hn.title,
                    children: g && v ? `Vegan ${o.toLowerCase()}` : o,
                  }),
                  w.jsx("div", {
                    className: hn.icons,
                    children: w.jsx(J5, {
                      recipe: e,
                      isVeganToggle: g,
                      setIsVeganToggle: y,
                      serves: s,
                      servesValue: b,
                      setServesValue: x,
                    }),
                  }),
                  w.jsx(Vn, { c: "dimmed", children: l }),
                ],
              }),
            ],
          }),
          w.jsxs("div", {
            className: hn.wrapper,
            children: [
              w.jsxs("div", {
                className: hn.ingredients,
                children: [
                  w.jsx(Pn, { className: hn.subtitle, children: "Ingredients" }),
                  w.jsx(Si, { mt: 30, spacing: "xs", className: hn.text, children: T }),
                ],
              }),
              w.jsxs("div", {
                className: hn.method,
                children: [
                  w.jsx(Pn, { className: hn.subtitle, children: "Method" }),
                  w.jsx(Si, {
                    mt: 30,
                    spacing: "sm",
                    size: "sm",
                    type: "ordered",
                    className: hn.text,
                    children: D,
                  }),
                ],
              }),
            ],
          }),
          w.jsx("div", {
            className: hn.button,
            children: w.jsx(qa, {
              component: "a",
              target: "_blank",
              href: e.originalLink,
              rel: "noopener noreferrer",
              color: "orange",
              variant: "default",
              size: "md",
              className: hn.control,
              children: "Original recipe",
            }),
          }),
        ],
      }),
    }),
  });
}
function oz(e) {
  return w.jsx(Nr, { className: Zr.pageContent, children: w.jsx(az, { ...e }) });
}
const lz = "_container_1s9th_1",
  iz = "_title_1s9th_5",
  sz = "_description_1s9th_14",
  Um = { container: lz, title: iz, description: sz },
  cz = "_card_120vs_10",
  uz = "_overlay_120vs_21",
  fz = "_title_120vs_32",
  dz = "_time_120vs_42",
  hz = "_caption_120vs_50",
  As = { card: cz, overlay: uz, title: fz, time: dz, caption: hz };
function mz(e) {
  const { image: r, title: o, time: l, path: s } = e;
  return w.jsx("a", {
    href: s,
    children: w.jsxs(Bo, {
      children: [
        w.jsx(Bo, {
          shadow: "md",
          radius: "md",
          style: { backgroundImage: `url(${r})` },
          className: As.card,
          children: w.jsxs("div", {
            className: As.overlay,
            children: [w.jsx(rz, { recipe: e }), w.jsx("div", {})],
          }),
        }),
        w.jsxs("div", {
          className: As.caption,
          children: [
            w.jsx(Pn, { className: As.title, children: o }),
            w.jsx(Vn, { className: As.time, size: "xs", children: l }),
          ],
        }),
      ],
    }),
  });
}
function pz(e, r) {
  const o = (d) => [...new Set(d)],
    l = o(
      e.flatMap((d) => (d.filters.details.type === "main meal" ? [d.filters.details.base] : [])),
    ),
    s = o(
      e.flatMap((d) => (d.filters.details.type === "main meal" ? [d.filters.details.protein] : [])),
    ),
    c = o(
      e.flatMap((d) => (d.filters.details.type === "main meal" ? [d.filters.details.dish] : [])),
    ),
    u = o(
      e.flatMap((d) =>
        d.filters.details.type === "main meal" ? d.filters.details.cookingMethod : [],
      ),
    ),
    f = [
      {
        value: "attributes",
        label: "Attributes",
        children: [
          { value: "freezable", label: "Freezable", nodeProps: { icon: w.jsx(yg, {}) } },
          {
            value: "hotWeatherFriendly",
            label: "Hot weather friendly",
            nodeProps: { icon: w.jsx(bg, {}) },
          },
          { value: "barnRecipe", label: "Recipe by Barn" },
        ],
      },
      {
        value: "dietaries",
        label: "Dietaries",
        children: [
          { value: "veganAdjustable", label: "Vegan friendly", nodeProps: { icon: w.jsx(vg, {}) } },
        ],
      },
    ];
  return (
    r ||
      f.push(
        {
          value: "type:main meal",
          label: "Main meal",
          children: [
            {
              value: "base",
              label: "Base",
              children: l.map((d) => ({ value: `base:${d}`, label: d })),
            },
            {
              value: "protein",
              label: "Protein",
              children: s.map((d) => ({ value: `protein:${d}`, label: d })),
            },
            {
              value: "dish",
              label: "Dish",
              children: c.map((d) => ({ value: `dish:${d}`, label: d })),
            },
            {
              value: "cookingMethod",
              label: "Cooking method",
              children: u.map((d) => ({ value: `cookingMethod:${d}`, label: d })),
            },
          ],
        },
        { value: "type:baking", label: "Baking" },
        { value: "type:other", label: "Other" },
      ),
    r === "main meal" &&
      f.push(
        {
          value: "base",
          label: "Base",
          children: l.map((d) => ({ value: `base:${d}`, label: d })),
        },
        {
          value: "protein",
          label: "Protein",
          children: s.map((d) => ({ value: `protein:${d}`, label: d })),
        },
        {
          value: "dish",
          label: "Dish",
          children: c.map((d) => ({ value: `dish:${d}`, label: d })),
        },
        {
          value: "cookingMethod",
          label: "Cooking method",
          children: u.map((d) => ({ value: `cookingMethod:${d}`, label: d })),
        },
      ),
    r === "baking" && f.push({ value: "type:baking", label: "Baking" }),
    r === "other" && f.push({ value: "type:other", label: "Other" }),
    f
  );
}
function Wf({ recipeType: e }) {
  const [r, o] = S.useState([]),
    l = e ? xi.filter((d) => d.filters.details.type === e) : xi,
    s = {
      freezable: (d) => d.filters.attributes.freezable,
      hotWeatherFriendly: (d) => d.filters.attributes.hotWeatherFriendly,
      barnRecipe: (d) => d.filters.attributes.barnRecipe,
      veganAdjustable: (d) => d.filters.dietaries.veganAdjustable,
      "type:main meal": (d) => d.filters.details.type === "main meal",
      "type:baking": (d) => d.filters.details.type === "baking",
      "type:other": (d) => d.filters.details.type === "other",
      ...Object.fromEntries(
        l.flatMap((d) => {
          if (d.filters.details.type !== "main meal") return [];
          const m = d.filters.details;
          return [
            [
              `base:${m.base}`,
              (v) => v.filters.details.type === "main meal" && v.filters.details.base === m.base,
            ],
            [
              `protein:${m.protein}`,
              (v) =>
                v.filters.details.type === "main meal" && v.filters.details.protein === m.protein,
            ],
            [
              `dish:${m.dish}`,
              (v) => v.filters.details.type === "main meal" && v.filters.details.dish === m.dish,
            ],
          ];
        }),
      ),
      ...Object.fromEntries(
        l.flatMap((d) =>
          d.filters.details.type !== "main meal"
            ? []
            : d.filters.details.cookingMethod.map((m) => [
                `cookingMethod:${m}`,
                (v) =>
                  v.filters.details.type === "main meal" &&
                  v.filters.details.cookingMethod.includes(m),
              ]),
        ),
      ),
    },
    c = r.length === 0 ? l : l.filter((d) => r.every((m) => s[m]?.(d) ?? !1)),
    u = pz(l, e),
    f = ({ node: d }) =>
      w.jsxs(Wa, {
        gap: "xs",
        children: [d.nodeProps?.icon, w.jsx(Vn, { size: "sm", children: d.label })],
      });
  return w.jsxs(Nr, {
    w: "100%",
    children: [
      w.jsx(gg, {
        label: "Filter recipes",
        placeholder: "Pick filters",
        data: u,
        renderNode: f,
        mode: "multiple",
        value: r,
        onChange: o,
        clearable: !0,
        searchable: !0,
        expandOnClick: !0,
        defaultExpandAll: !0,
        nothingFoundMessage: "Nothing found...",
        withLines: !1,
      }),
      w.jsx(mg, {
        cols: { base: 1, sm: 2, md: 3 },
        spacing: "xl",
        mt: 50,
        children: c.map((d) => w.jsx(mz, { ...d }, d.title)),
      }),
    ],
  });
}
function gz() {
  const e = mn();
  return (
    Ho(`(max-width: ${e.breakpoints.sm})`),
    w.jsxs(Nr, {
      className: Um.container,
      size: "lg",
      py: "xl",
      children: [
        w.jsx(Pn, {
          order: 2,
          className: Um.title,
          ta: "center",
          mt: "sm",
          children: "Recipe Library",
        }),
        w.jsx(Vn, {
          c: "dimmed",
          className: Um.description,
          ta: "center",
          mt: "md",
          children: "Every recipe on this website.",
        }),
        w.jsx(Wf, {}),
      ],
    })
  );
}
function vz() {
  return w.jsx(ya, {
    className: Zr.pageContent,
    children: w.jsx(Io, { className: Zr.stack, children: w.jsx(gz, {}) }),
  });
}
const yz = "_container_1s9th_1",
  bz = "_title_1s9th_5",
  Sz = "_description_1s9th_14",
  Pm = { container: yz, title: bz, description: Sz };
function wz() {
  const e = mn();
  return (
    Ho(`(max-width: ${e.breakpoints.sm})`),
    w.jsxs(Nr, {
      className: Pm.container,
      size: "lg",
      py: "xl",
      children: [
        w.jsx(Wa, {
          justify: "center",
          children: w.jsx(Ai, {
            color: "orange",
            variant: "filled",
            size: "lg",
            children: "Laura's favourites",
          }),
        }),
        w.jsx(Pn, {
          order: 2,
          className: Pm.title,
          ta: "center",
          mt: "sm",
          children: "Baking Recipes",
        }),
        w.jsx(Vn, {
          c: "dimmed",
          className: Pm.description,
          ta: "center",
          mt: "md",
          children: "Dishes that you can cook at home over and over again.",
        }),
        w.jsx(Wf, { recipeType: "baking" }),
      ],
    })
  );
}
function xz() {
  return w.jsx(ya, {
    className: Zr.pageContent,
    children: w.jsx(Io, { className: Zr.stack, children: w.jsx(wz, {}) }),
  });
}
const Cz = "_container_1s9th_1",
  Ez = "_title_1s9th_5",
  Rz = "_description_1s9th_14",
  Vm = { container: Cz, title: Ez, description: Rz };
function Tz() {
  const e = mn();
  return (
    Ho(`(max-width: ${e.breakpoints.sm})`),
    w.jsxs(Nr, {
      className: Vm.container,
      size: "lg",
      py: "xl",
      children: [
        w.jsx(Wa, {
          justify: "center",
          children: w.jsx(Ai, {
            color: "orange",
            variant: "filled",
            size: "lg",
            children: "Laura's favourites",
          }),
        }),
        w.jsx(Pn, { order: 2, className: Vm.title, ta: "center", mt: "sm", children: "Recipes" }),
        w.jsx(Vn, {
          c: "dimmed",
          className: Vm.description,
          ta: "center",
          mt: "md",
          children: "Dishes that you can cook at home over and over again.",
        }),
        w.jsx(Wf, { recipeType: "main meal" }),
      ],
    })
  );
}
function _z() {
  return w.jsx(ya, {
    className: Zr.pageContent,
    children: w.jsx(Io, { className: Zr.stack, children: w.jsx(Tz, {}) }),
  });
}
const Dz = "_container_1s9th_1",
  Az = "_title_1s9th_5",
  Mz = "_description_1s9th_14",
  Im = { container: Dz, title: Az, description: Mz };
function Nz() {
  const e = mn();
  return (
    Ho(`(max-width: ${e.breakpoints.sm})`),
    w.jsxs(Nr, {
      className: Im.container,
      size: "lg",
      py: "xl",
      children: [
        w.jsx(Wa, {
          justify: "center",
          children: w.jsx(Ai, {
            color: "orange",
            variant: "filled",
            size: "lg",
            children: "Laura's favourites",
          }),
        }),
        w.jsx(Pn, {
          order: 2,
          className: Im.title,
          ta: "center",
          mt: "sm",
          children: "Other Recipes",
        }),
        w.jsx(Vn, {
          c: "dimmed",
          className: Im.description,
          ta: "center",
          mt: "md",
          children: "Dishes that you can cook at home over and over again.",
        }),
        w.jsx(Wf, { recipeType: "other" }),
      ],
    })
  );
}
function Oz() {
  return w.jsx(ya, {
    className: Zr.pageContent,
    children: w.jsx(Io, { className: Zr.stack, children: w.jsx(Nz, {}) }),
  });
}
const jz = xi.map((e) => ({ path: e.path, element: w.jsx(oz, { ...e }) })),
  zz = r4([
    { path: "/", element: w.jsx(C5, {}) },
    ...jz,
    { path: "/recipe-library", element: w.jsx(vz, {}) },
    { path: "/main-meal-recipes", element: w.jsx(_z, {}) },
    { path: "/baking-recipes", element: w.jsx(xz, {}) },
    { path: "/other-recipes", element: w.jsx(Oz, {}) },
  ]);
function kz() {
  return w.jsx(p4, { router: zz });
}
const Lz = { cursorType: "pointer" },
  Bz = "_page_1b9ny_1",
  $z = "_main_1b9ny_5",
  Hz = "_body_1b9ny_11",
  Fm = { page: Bz, main: $z, body: Hz };
function Uz() {
  return w.jsx(NS, {
    theme: Lz,
    children: w.jsxs("div", {
      className: Fm.page,
      children: [
        w.jsx(Y3, {}),
        w.jsxs(Bo, {
          className: Fm.main,
          children: [w.jsx("div", { className: Fm.body, children: w.jsx(kz, {}) }), w.jsx(p3, {})],
        }),
      ],
    }),
  });
}
_2.createRoot(document.getElementById("root")).render(w.jsx(Uz, {}));
