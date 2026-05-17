(function() {
  const R = document.createElement("link").relList;
  if (R && R.supports && R.supports("modulepreload")) return;
  for (const Y of document.querySelectorAll('link[rel="modulepreload"]')) h(Y);
  new MutationObserver((Y) => {
    for (const B of Y) if (B.type === "childList") for (const yl of B.addedNodes) yl.tagName === "LINK" && yl.rel === "modulepreload" && h(yl);
  }).observe(document, { childList: true, subtree: true });
  function Z(Y) {
    const B = {};
    return Y.integrity && (B.integrity = Y.integrity), Y.referrerPolicy && (B.referrerPolicy = Y.referrerPolicy), Y.crossOrigin === "use-credentials" ? B.credentials = "include" : Y.crossOrigin === "anonymous" ? B.credentials = "omit" : B.credentials = "same-origin", B;
  }
  function h(Y) {
    if (Y.ep) return;
    Y.ep = true;
    const B = Z(Y);
    fetch(Y.href, B);
  }
})();
var fi = { exports: {} }, ze = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var oy;
function Wm() {
  if (oy) return ze;
  oy = 1;
  var A = Symbol.for("react.transitional.element"), R = Symbol.for("react.fragment");
  function Z(h, Y, B) {
    var yl = null;
    if (B !== void 0 && (yl = "" + B), Y.key !== void 0 && (yl = "" + Y.key), "key" in Y) {
      B = {};
      for (var gl in Y) gl !== "key" && (B[gl] = Y[gl]);
    } else B = Y;
    return Y = B.ref, { $$typeof: A, type: h, key: yl, ref: Y !== void 0 ? Y : null, props: B };
  }
  return ze.Fragment = R, ze.jsx = Z, ze.jsxs = Z, ze;
}
var hy;
function $m() {
  return hy || (hy = 1, fi.exports = Wm()), fi.exports;
}
var p = $m(), ci = { exports: {} }, x = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var ry;
function km() {
  if (ry) return x;
  ry = 1;
  var A = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), yl = Symbol.for("react.context"), gl = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), T = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), vl = Symbol.iterator;
  function Gl(d) {
    return d === null || typeof d != "object" ? null : (d = vl && d[vl] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var w = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, rl = Object.assign, Xl = {};
  function il(d, E, O) {
    this.props = d, this.context = E, this.refs = Xl, this.updater = O || w;
  }
  il.prototype.isReactComponent = {}, il.prototype.setState = function(d, E) {
    if (typeof d != "object" && typeof d != "function" && d != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, d, E, "setState");
  }, il.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function pl() {
  }
  pl.prototype = il.prototype;
  function Ul(d, E, O) {
    this.props = d, this.context = E, this.refs = Xl, this.updater = O || w;
  }
  var Pl = Ul.prototype = new pl();
  Pl.constructor = Ul, rl(Pl, il.prototype), Pl.isPureReactComponent = true;
  var _t = Array.isArray;
  function Vl() {
  }
  var k = { H: null, A: null, T: null, S: null }, Ll = Object.prototype.hasOwnProperty;
  function Ot(d, E, O) {
    var U = O.ref;
    return { $$typeof: A, type: d, key: E, ref: U !== void 0 ? U : null, props: O };
  }
  function Qa(d, E) {
    return Ot(d.type, E, d.props);
  }
  function Mt(d) {
    return typeof d == "object" && d !== null && d.$$typeof === A;
  }
  function Kl(d) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + d.replace(/[=:]/g, function(O) {
      return E[O];
    });
  }
  var Ea = /\/+/g;
  function Ht(d, E) {
    return typeof d == "object" && d !== null && d.key != null ? Kl("" + d.key) : E.toString(36);
  }
  function zt(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (typeof d.status == "string" ? d.then(Vl, Vl) : (d.status = "pending", d.then(function(E) {
          d.status === "pending" && (d.status = "fulfilled", d.value = E);
        }, function(E) {
          d.status === "pending" && (d.status = "rejected", d.reason = E);
        })), d.status) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function S(d, E, O, U, G) {
    var L = typeof d;
    (L === "undefined" || L === "boolean") && (d = null);
    var tl = false;
    if (d === null) tl = true;
    else switch (L) {
      case "bigint":
      case "string":
      case "number":
        tl = true;
        break;
      case "object":
        switch (d.$$typeof) {
          case A:
          case R:
            tl = true;
            break;
          case V:
            return tl = d._init, S(tl(d._payload), E, O, U, G);
        }
    }
    if (tl) return G = G(d), tl = U === "" ? "." + Ht(d, 0) : U, _t(G) ? (O = "", tl != null && (O = tl.replace(Ea, "$&/") + "/"), S(G, E, O, "", function(pu) {
      return pu;
    })) : G != null && (Mt(G) && (G = Qa(G, O + (G.key == null || d && d.key === G.key ? "" : ("" + G.key).replace(Ea, "$&/") + "/") + tl)), E.push(G)), 1;
    tl = 0;
    var Ql = U === "" ? "." : U + ":";
    if (_t(d)) for (var zl = 0; zl < d.length; zl++) U = d[zl], L = Ql + Ht(U, zl), tl += S(U, E, O, L, G);
    else if (zl = Gl(d), typeof zl == "function") for (d = zl.call(d), zl = 0; !(U = d.next()).done; ) U = U.value, L = Ql + Ht(U, zl++), tl += S(U, E, O, L, G);
    else if (L === "object") {
      if (typeof d.then == "function") return S(zt(d), E, O, U, G);
      throw E = String(d), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.");
    }
    return tl;
  }
  function _(d, E, O) {
    if (d == null) return d;
    var U = [], G = 0;
    return S(d, U, "", "", function(L) {
      return E.call(O, L, G++);
    }), U;
  }
  function q(d) {
    if (d._status === -1) {
      var E = d._result;
      E = E(), E.then(function(O) {
        (d._status === 0 || d._status === -1) && (d._status = 1, d._result = O);
      }, function(O) {
        (d._status === 0 || d._status === -1) && (d._status = 2, d._result = O);
      }), d._status === -1 && (d._status = 0, d._result = E);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var el = typeof reportError == "function" ? reportError : function(d) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var E = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d), error: d });
      if (!window.dispatchEvent(E)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", d);
      return;
    }
    console.error(d);
  }, sl = { map: _, forEach: function(d, E, O) {
    _(d, function() {
      E.apply(this, arguments);
    }, O);
  }, count: function(d) {
    var E = 0;
    return _(d, function() {
      E++;
    }), E;
  }, toArray: function(d) {
    return _(d, function(E) {
      return E;
    }) || [];
  }, only: function(d) {
    if (!Mt(d)) throw Error("React.Children.only expected to receive a single React element child.");
    return d;
  } };
  return x.Activity = C, x.Children = sl, x.Component = il, x.Fragment = Z, x.Profiler = Y, x.PureComponent = Ul, x.StrictMode = h, x.Suspense = D, x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k, x.__COMPILER_RUNTIME = { __proto__: null, c: function(d) {
    return k.H.useMemoCache(d);
  } }, x.cache = function(d) {
    return function() {
      return d.apply(null, arguments);
    };
  }, x.cacheSignal = function() {
    return null;
  }, x.cloneElement = function(d, E, O) {
    if (d == null) throw Error("The argument must be a React element, but you passed " + d + ".");
    var U = rl({}, d.props), G = d.key;
    if (E != null) for (L in E.key !== void 0 && (G = "" + E.key), E) !Ll.call(E, L) || L === "key" || L === "__self" || L === "__source" || L === "ref" && E.ref === void 0 || (U[L] = E[L]);
    var L = arguments.length - 2;
    if (L === 1) U.children = O;
    else if (1 < L) {
      for (var tl = Array(L), Ql = 0; Ql < L; Ql++) tl[Ql] = arguments[Ql + 2];
      U.children = tl;
    }
    return Ot(d.type, G, U);
  }, x.createContext = function(d) {
    return d = { $$typeof: yl, _currentValue: d, _currentValue2: d, _threadCount: 0, Provider: null, Consumer: null }, d.Provider = d, d.Consumer = { $$typeof: B, _context: d }, d;
  }, x.createElement = function(d, E, O) {
    var U, G = {}, L = null;
    if (E != null) for (U in E.key !== void 0 && (L = "" + E.key), E) Ll.call(E, U) && U !== "key" && U !== "__self" && U !== "__source" && (G[U] = E[U]);
    var tl = arguments.length - 2;
    if (tl === 1) G.children = O;
    else if (1 < tl) {
      for (var Ql = Array(tl), zl = 0; zl < tl; zl++) Ql[zl] = arguments[zl + 2];
      G.children = Ql;
    }
    if (d && d.defaultProps) for (U in tl = d.defaultProps, tl) G[U] === void 0 && (G[U] = tl[U]);
    return Ot(d, L, G);
  }, x.createRef = function() {
    return { current: null };
  }, x.forwardRef = function(d) {
    return { $$typeof: gl, render: d };
  }, x.isValidElement = Mt, x.lazy = function(d) {
    return { $$typeof: V, _payload: { _status: -1, _result: d }, _init: q };
  }, x.memo = function(d, E) {
    return { $$typeof: T, type: d, compare: E === void 0 ? null : E };
  }, x.startTransition = function(d) {
    var E = k.T, O = {};
    k.T = O;
    try {
      var U = d(), G = k.S;
      G !== null && G(O, U), typeof U == "object" && U !== null && typeof U.then == "function" && U.then(Vl, el);
    } catch (L) {
      el(L);
    } finally {
      E !== null && O.types !== null && (E.types = O.types), k.T = E;
    }
  }, x.unstable_useCacheRefresh = function() {
    return k.H.useCacheRefresh();
  }, x.use = function(d) {
    return k.H.use(d);
  }, x.useActionState = function(d, E, O) {
    return k.H.useActionState(d, E, O);
  }, x.useCallback = function(d, E) {
    return k.H.useCallback(d, E);
  }, x.useContext = function(d) {
    return k.H.useContext(d);
  }, x.useDebugValue = function() {
  }, x.useDeferredValue = function(d, E) {
    return k.H.useDeferredValue(d, E);
  }, x.useEffect = function(d, E) {
    return k.H.useEffect(d, E);
  }, x.useEffectEvent = function(d) {
    return k.H.useEffectEvent(d);
  }, x.useId = function() {
    return k.H.useId();
  }, x.useImperativeHandle = function(d, E, O) {
    return k.H.useImperativeHandle(d, E, O);
  }, x.useInsertionEffect = function(d, E) {
    return k.H.useInsertionEffect(d, E);
  }, x.useLayoutEffect = function(d, E) {
    return k.H.useLayoutEffect(d, E);
  }, x.useMemo = function(d, E) {
    return k.H.useMemo(d, E);
  }, x.useOptimistic = function(d, E) {
    return k.H.useOptimistic(d, E);
  }, x.useReducer = function(d, E, O) {
    return k.H.useReducer(d, E, O);
  }, x.useRef = function(d) {
    return k.H.useRef(d);
  }, x.useState = function(d) {
    return k.H.useState(d);
  }, x.useSyncExternalStore = function(d, E, O) {
    return k.H.useSyncExternalStore(d, E, O);
  }, x.useTransition = function() {
    return k.H.useTransition();
  }, x.version = "19.2.5", x;
}
var gy;
function vi() {
  return gy || (gy = 1, ci.exports = km()), ci.exports;
}
var xl = vi(), ii = { exports: {} }, Ee = {}, si = { exports: {} }, di = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Sy;
function Fm() {
  return Sy || (Sy = 1, (function(A) {
    function R(S, _) {
      var q = S.length;
      S.push(_);
      l: for (; 0 < q; ) {
        var el = q - 1 >>> 1, sl = S[el];
        if (0 < Y(sl, _)) S[el] = _, S[q] = sl, q = el;
        else break l;
      }
    }
    function Z(S) {
      return S.length === 0 ? null : S[0];
    }
    function h(S) {
      if (S.length === 0) return null;
      var _ = S[0], q = S.pop();
      if (q !== _) {
        S[0] = q;
        l: for (var el = 0, sl = S.length, d = sl >>> 1; el < d; ) {
          var E = 2 * (el + 1) - 1, O = S[E], U = E + 1, G = S[U];
          if (0 > Y(O, q)) U < sl && 0 > Y(G, O) ? (S[el] = G, S[U] = q, el = U) : (S[el] = O, S[E] = q, el = E);
          else if (U < sl && 0 > Y(G, q)) S[el] = G, S[U] = q, el = U;
          else break l;
        }
      }
      return _;
    }
    function Y(S, _) {
      var q = S.sortIndex - _.sortIndex;
      return q !== 0 ? q : S.id - _.id;
    }
    if (A.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var B = performance;
      A.unstable_now = function() {
        return B.now();
      };
    } else {
      var yl = Date, gl = yl.now();
      A.unstable_now = function() {
        return yl.now() - gl;
      };
    }
    var D = [], T = [], V = 1, C = null, vl = 3, Gl = false, w = false, rl = false, Xl = false, il = typeof setTimeout == "function" ? setTimeout : null, pl = typeof clearTimeout == "function" ? clearTimeout : null, Ul = typeof setImmediate < "u" ? setImmediate : null;
    function Pl(S) {
      for (var _ = Z(T); _ !== null; ) {
        if (_.callback === null) h(T);
        else if (_.startTime <= S) h(T), _.sortIndex = _.expirationTime, R(D, _);
        else break;
        _ = Z(T);
      }
    }
    function _t(S) {
      if (rl = false, Pl(S), !w) if (Z(D) !== null) w = true, Vl || (Vl = true, Kl());
      else {
        var _ = Z(T);
        _ !== null && zt(_t, _.startTime - S);
      }
    }
    var Vl = false, k = -1, Ll = 5, Ot = -1;
    function Qa() {
      return Xl ? true : !(A.unstable_now() - Ot < Ll);
    }
    function Mt() {
      if (Xl = false, Vl) {
        var S = A.unstable_now();
        Ot = S;
        var _ = true;
        try {
          l: {
            w = false, rl && (rl = false, pl(k), k = -1), Gl = true;
            var q = vl;
            try {
              t: {
                for (Pl(S), C = Z(D); C !== null && !(C.expirationTime > S && Qa()); ) {
                  var el = C.callback;
                  if (typeof el == "function") {
                    C.callback = null, vl = C.priorityLevel;
                    var sl = el(C.expirationTime <= S);
                    if (S = A.unstable_now(), typeof sl == "function") {
                      C.callback = sl, Pl(S), _ = true;
                      break t;
                    }
                    C === Z(D) && h(D), Pl(S);
                  } else h(D);
                  C = Z(D);
                }
                if (C !== null) _ = true;
                else {
                  var d = Z(T);
                  d !== null && zt(_t, d.startTime - S), _ = false;
                }
              }
              break l;
            } finally {
              C = null, vl = q, Gl = false;
            }
            _ = void 0;
          }
        } finally {
          _ ? Kl() : Vl = false;
        }
      }
    }
    var Kl;
    if (typeof Ul == "function") Kl = function() {
      Ul(Mt);
    };
    else if (typeof MessageChannel < "u") {
      var Ea = new MessageChannel(), Ht = Ea.port2;
      Ea.port1.onmessage = Mt, Kl = function() {
        Ht.postMessage(null);
      };
    } else Kl = function() {
      il(Mt, 0);
    };
    function zt(S, _) {
      k = il(function() {
        S(A.unstable_now());
      }, _);
    }
    A.unstable_IdlePriority = 5, A.unstable_ImmediatePriority = 1, A.unstable_LowPriority = 4, A.unstable_NormalPriority = 3, A.unstable_Profiling = null, A.unstable_UserBlockingPriority = 2, A.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, A.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ll = 0 < S ? Math.floor(1e3 / S) : 5;
    }, A.unstable_getCurrentPriorityLevel = function() {
      return vl;
    }, A.unstable_next = function(S) {
      switch (vl) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = vl;
      }
      var q = vl;
      vl = _;
      try {
        return S();
      } finally {
        vl = q;
      }
    }, A.unstable_requestPaint = function() {
      Xl = true;
    }, A.unstable_runWithPriority = function(S, _) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var q = vl;
      vl = S;
      try {
        return _();
      } finally {
        vl = q;
      }
    }, A.unstable_scheduleCallback = function(S, _, q) {
      var el = A.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? el + q : el) : q = el, S) {
        case 1:
          var sl = -1;
          break;
        case 2:
          sl = 250;
          break;
        case 5:
          sl = 1073741823;
          break;
        case 4:
          sl = 1e4;
          break;
        default:
          sl = 5e3;
      }
      return sl = q + sl, S = { id: V++, callback: _, priorityLevel: S, startTime: q, expirationTime: sl, sortIndex: -1 }, q > el ? (S.sortIndex = q, R(T, S), Z(D) === null && S === Z(T) && (rl ? (pl(k), k = -1) : rl = true, zt(_t, q - el))) : (S.sortIndex = sl, R(D, S), w || Gl || (w = true, Vl || (Vl = true, Kl()))), S;
    }, A.unstable_shouldYield = Qa, A.unstable_wrapCallback = function(S) {
      var _ = vl;
      return function() {
        var q = vl;
        vl = _;
        try {
          return S.apply(this, arguments);
        } finally {
          vl = q;
        }
      };
    };
  })(di)), di;
}
var by;
function Im() {
  return by || (by = 1, si.exports = Fm()), si.exports;
}
var yi = { exports: {} }, Yl = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var zy;
function Pm() {
  if (zy) return Yl;
  zy = 1;
  var A = vi();
  function R(D) {
    var T = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var V = 2; V < arguments.length; V++) T += "&args[]=" + encodeURIComponent(arguments[V]);
    }
    return "Minified React error #" + D + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Z() {
  }
  var h = { d: { f: Z, r: function() {
    throw Error(R(522));
  }, D: Z, C: Z, L: Z, m: Z, X: Z, S: Z, M: Z }, p: 0, findDOMNode: null }, Y = Symbol.for("react.portal");
  function B(D, T, V) {
    var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Y, key: C == null ? null : "" + C, children: D, containerInfo: T, implementation: V };
  }
  var yl = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function gl(D, T) {
    if (D === "font") return "";
    if (typeof T == "string") return T === "use-credentials" ? T : "";
  }
  return Yl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h, Yl.createPortal = function(D, T) {
    var V = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11) throw Error(R(299));
    return B(D, T, null, V);
  }, Yl.flushSync = function(D) {
    var T = yl.T, V = h.p;
    try {
      if (yl.T = null, h.p = 2, D) return D();
    } finally {
      yl.T = T, h.p = V, h.d.f();
    }
  }, Yl.preconnect = function(D, T) {
    typeof D == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, h.d.C(D, T));
  }, Yl.prefetchDNS = function(D) {
    typeof D == "string" && h.d.D(D);
  }, Yl.preinit = function(D, T) {
    if (typeof D == "string" && T && typeof T.as == "string") {
      var V = T.as, C = gl(V, T.crossOrigin), vl = typeof T.integrity == "string" ? T.integrity : void 0, Gl = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
      V === "style" ? h.d.S(D, typeof T.precedence == "string" ? T.precedence : void 0, { crossOrigin: C, integrity: vl, fetchPriority: Gl }) : V === "script" && h.d.X(D, { crossOrigin: C, integrity: vl, fetchPriority: Gl, nonce: typeof T.nonce == "string" ? T.nonce : void 0 });
    }
  }, Yl.preinitModule = function(D, T) {
    if (typeof D == "string") if (typeof T == "object" && T !== null) {
      if (T.as == null || T.as === "script") {
        var V = gl(T.as, T.crossOrigin);
        h.d.M(D, { crossOrigin: V, integrity: typeof T.integrity == "string" ? T.integrity : void 0, nonce: typeof T.nonce == "string" ? T.nonce : void 0 });
      }
    } else T == null && h.d.M(D);
  }, Yl.preload = function(D, T) {
    if (typeof D == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
      var V = T.as, C = gl(V, T.crossOrigin);
      h.d.L(D, V, { crossOrigin: C, integrity: typeof T.integrity == "string" ? T.integrity : void 0, nonce: typeof T.nonce == "string" ? T.nonce : void 0, type: typeof T.type == "string" ? T.type : void 0, fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0, referrerPolicy: typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0, imageSrcSet: typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0, imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0, media: typeof T.media == "string" ? T.media : void 0 });
    }
  }, Yl.preloadModule = function(D, T) {
    if (typeof D == "string") if (T) {
      var V = gl(T.as, T.crossOrigin);
      h.d.m(D, { as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0, crossOrigin: V, integrity: typeof T.integrity == "string" ? T.integrity : void 0 });
    } else h.d.m(D);
  }, Yl.requestFormReset = function(D) {
    h.d.r(D);
  }, Yl.unstable_batchedUpdates = function(D, T) {
    return D(T);
  }, Yl.useFormState = function(D, T, V) {
    return yl.H.useFormState(D, T, V);
  }, Yl.useFormStatus = function() {
    return yl.H.useHostTransitionStatus();
  }, Yl.version = "19.2.5", Yl;
}
var Ey;
function lo() {
  if (Ey) return yi.exports;
  Ey = 1;
  function A() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
    } catch (R) {
      console.error(R);
    }
  }
  return A(), yi.exports = Pm(), yi.exports;
}
/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ty;
function to() {
  if (Ty) return Ee;
  Ty = 1;
  var A = Im(), R = vi(), Z = lo();
  function h(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Y(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function B(l) {
    var t = l, a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (a = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function yl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function gl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function D(l) {
    if (B(l) !== l) throw Error(h(188));
  }
  function T(l) {
    var t = l.alternate;
    if (!t) {
      if (t = B(l), t === null) throw Error(h(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (u = e.return, u !== null) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return D(e), l;
          if (n === u) return D(e), t;
          n = n.sibling;
        }
        throw Error(h(188));
      }
      if (a.return !== u.return) a = e, u = n;
      else {
        for (var f = false, c = e.child; c; ) {
          if (c === a) {
            f = true, a = e, u = n;
            break;
          }
          if (c === u) {
            f = true, u = e, a = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === a) {
              f = true, a = n, u = e;
              break;
            }
            if (c === u) {
              f = true, u = n, a = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(h(189));
        }
      }
      if (a.alternate !== u) throw Error(h(190));
    }
    if (a.tag !== 3) throw Error(h(188));
    return a.stateNode.current === a ? l : t;
  }
  function V(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = V(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var C = Object.assign, vl = Symbol.for("react.element"), Gl = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), rl = Symbol.for("react.fragment"), Xl = Symbol.for("react.strict_mode"), il = Symbol.for("react.profiler"), pl = Symbol.for("react.consumer"), Ul = Symbol.for("react.context"), Pl = Symbol.for("react.forward_ref"), _t = Symbol.for("react.suspense"), Vl = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), Ll = Symbol.for("react.lazy"), Ot = Symbol.for("react.activity"), Qa = Symbol.for("react.memo_cache_sentinel"), Mt = Symbol.iterator;
  function Kl(l) {
    return l === null || typeof l != "object" ? null : (l = Mt && l[Mt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ea = Symbol.for("react.client.reference");
  function Ht(l) {
    if (l == null) return null;
    if (typeof l == "function") return l.$$typeof === Ea ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case rl:
        return "Fragment";
      case il:
        return "Profiler";
      case Xl:
        return "StrictMode";
      case _t:
        return "Suspense";
      case Vl:
        return "SuspenseList";
      case Ot:
        return "Activity";
    }
    if (typeof l == "object") switch (l.$$typeof) {
      case w:
        return "Portal";
      case Ul:
        return l.displayName || "Context";
      case pl:
        return (l._context.displayName || "Context") + ".Consumer";
      case Pl:
        var t = l.render;
        return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
      case k:
        return t = l.displayName || null, t !== null ? t : Ht(l.type) || "Memo";
      case Ll:
        t = l._payload, l = l._init;
        try {
          return Ht(l(t));
        } catch {
        }
    }
    return null;
  }
  var zt = Array.isArray, S = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = Z.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = { pending: false, data: null, method: null, action: null }, el = [], sl = -1;
  function d(l) {
    return { current: l };
  }
  function E(l) {
    0 > sl || (l.current = el[sl], el[sl] = null, sl--);
  }
  function O(l, t) {
    sl++, el[sl] = l.current, l.current = t;
  }
  var U = d(null), G = d(null), L = d(null), tl = d(null);
  function Ql(l, t) {
    switch (O(L, t), O(G, l), O(U, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Yd(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI) t = Yd(t), l = xd(t, l);
        else switch (l) {
          case "svg":
            l = 1;
            break;
          case "math":
            l = 2;
            break;
          default:
            l = 0;
        }
    }
    E(U), O(U, l);
  }
  function zl() {
    E(U), E(G), E(L);
  }
  function pu(l) {
    l.memoizedState !== null && O(tl, l);
    var t = U.current, a = xd(t, l.type);
    t !== a && (O(G, l), O(U, a));
  }
  function Te(l) {
    G.current === l && (E(U), E(G)), tl.current === l && (E(tl), re._currentValue = q);
  }
  var Qn, mi;
  function Ta(l) {
    if (Qn === void 0) try {
      throw Error();
    } catch (a) {
      var t = a.stack.trim().match(/\n( *(at )?)/);
      Qn = t && t[1] || "", mi = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Qn + l + mi;
  }
  var Zn = false;
  function Vn(l, t) {
    if (!l || Zn) return "";
    Zn = true;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = { DetermineComponentFrameRoot: function() {
        try {
          if (t) {
            var z = function() {
              throw Error();
            };
            if (Object.defineProperty(z.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(z, []);
              } catch (r) {
                var o = r;
              }
              Reflect.construct(l, [], z);
            } else {
              try {
                z.call();
              } catch (r) {
                o = r;
              }
              l.call(z.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (r) {
              o = r;
            }
            (z = l()) && typeof z.catch == "function" && z.catch(function() {
            });
          }
        } catch (r) {
          if (r && o && typeof r.stack == "string") return [r.stack, o.stack];
        }
        return [null, null];
      } };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot, "name");
      e && e.configurable && Object.defineProperty(u.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var n = u.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), m = c.split(`
`);
        for (e = u = 0; u < i.length && !i[u].includes("DetermineComponentFrameRoot"); ) u++;
        for (; e < m.length && !m[e].includes("DetermineComponentFrameRoot"); ) e++;
        if (u === i.length || e === m.length) for (u = i.length - 1, e = m.length - 1; 1 <= u && 0 <= e && i[u] !== m[e]; ) e--;
        for (; 1 <= u && 0 <= e; u--, e--) if (i[u] !== m[e]) {
          if (u !== 1 || e !== 1) do
            if (u--, e--, 0 > e || i[u] !== m[e]) {
              var g = `
` + i[u].replace(" at new ", " at ");
              return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
            }
          while (1 <= u && 0 <= e);
          break;
        }
      }
    } finally {
      Zn = false, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? Ta(a) : "";
  }
  function Oy(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ta(l.type);
      case 16:
        return Ta("Lazy");
      case 13:
        return l.child !== t && t !== null ? Ta("Suspense Fallback") : Ta("Suspense");
      case 19:
        return Ta("SuspenseList");
      case 0:
      case 15:
        return Vn(l.type, false);
      case 11:
        return Vn(l.type.render, false);
      case 1:
        return Vn(l.type, true);
      case 31:
        return Ta("Activity");
      default:
        return "";
    }
  }
  function oi(l) {
    try {
      var t = "", a = null;
      do
        t += Oy(l, a), a = l, l = l.return;
      while (l);
      return t;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  var Ln = Object.prototype.hasOwnProperty, Kn = A.unstable_scheduleCallback, Jn = A.unstable_cancelCallback, My = A.unstable_shouldYield, py = A.unstable_requestPaint, lt = A.unstable_now, Dy = A.unstable_getCurrentPriorityLevel, hi = A.unstable_ImmediatePriority, ri = A.unstable_UserBlockingPriority, Ae = A.unstable_NormalPriority, Uy = A.unstable_LowPriority, gi = A.unstable_IdlePriority, Ny = A.log, Hy = A.unstable_setDisableYieldValue, Du = null, tt = null;
  function kt(l) {
    if (typeof Ny == "function" && Hy(l), tt && typeof tt.setStrictMode == "function") try {
      tt.setStrictMode(Du, l);
    } catch {
    }
  }
  var at = Math.clz32 ? Math.clz32 : jy, Ry = Math.log, Cy = Math.LN2;
  function jy(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Ry(l) / Cy | 0) | 0;
  }
  var _e = 256, Oe = 262144, Me = 4194304;
  function Aa(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
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
        return l;
    }
  }
  function pe(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = u & 134217727;
    return c !== 0 ? (u = c & ~n, u !== 0 ? e = Aa(u) : (f &= c, f !== 0 ? e = Aa(f) : a || (a = c & ~l, a !== 0 && (e = Aa(a))))) : (c = u & ~n, c !== 0 ? e = Aa(c) : f !== 0 ? e = Aa(f) : a || (a = u & ~l, a !== 0 && (e = Aa(a)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : e;
  }
  function Uu(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function qy(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
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
        return t + 5e3;
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
  function Si() {
    var l = Me;
    return Me <<= 1, (Me & 62914560) === 0 && (Me = 4194304), l;
  }
  function wn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Nu(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function By(l, t, a, u, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, m = l.hiddenUpdates;
    for (a = f & ~a; 0 < a; ) {
      var g = 31 - at(a), z = 1 << g;
      c[g] = 0, i[g] = -1;
      var o = m[g];
      if (o !== null) for (m[g] = null, g = 0; g < o.length; g++) {
        var r = o[g];
        r !== null && (r.lane &= -536870913);
      }
      a &= ~z;
    }
    u !== 0 && bi(l, u, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function bi(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var u = 31 - at(t);
    l.entangledLanes |= t, l.entanglements[u] = l.entanglements[u] | 1073741824 | a & 261930;
  }
  function zi(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var u = 31 - at(a), e = 1 << u;
      e & t | l[u] & t && (l[u] |= t), a &= ~e;
    }
  }
  function Ei(l, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : Wn(a), (a & (l.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function Wn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function $n(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ti() {
    var l = _.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : cy(l.type));
  }
  function Ai(l, t) {
    var a = _.p;
    try {
      return _.p = l, t();
    } finally {
      _.p = a;
    }
  }
  var Ft = Math.random().toString(36).slice(2), Rl = "__reactFiber$" + Ft, Jl = "__reactProps$" + Ft, Za = "__reactContainer$" + Ft, kn = "__reactEvents$" + Ft, Yy = "__reactListeners$" + Ft, xy = "__reactHandles$" + Ft, _i = "__reactResources$" + Ft, Hu = "__reactMarker$" + Ft;
  function Fn(l) {
    delete l[Rl], delete l[Jl], delete l[kn], delete l[Yy], delete l[xy];
  }
  function Va(l) {
    var t = l[Rl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[Za] || a[Rl]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null) for (l = Kd(l); l !== null; ) {
          if (a = l[Rl]) return a;
          l = Kd(l);
        }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function La(l) {
    if (l = l[Rl] || l[Za]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l;
    }
    return null;
  }
  function Ru(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(h(33));
  }
  function Ka(l) {
    var t = l[_i];
    return t || (t = l[_i] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Nl(l) {
    l[Hu] = true;
  }
  var Oi = /* @__PURE__ */ new Set(), Mi = {};
  function _a(l, t) {
    Ja(l, t), Ja(l + "Capture", t);
  }
  function Ja(l, t) {
    for (Mi[l] = t, l = 0; l < t.length; l++) Oi.add(t[l]);
  }
  var Gy = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), pi = {}, Di = {};
  function Xy(l) {
    return Ln.call(Di, l) ? true : Ln.call(pi, l) ? false : Gy.test(l) ? Di[l] = true : (pi[l] = true, false);
  }
  function De(l, t, a) {
    if (Xy(t)) if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
          l.removeAttribute(t);
          return;
        case "boolean":
          var u = t.toLowerCase().slice(0, 5);
          if (u !== "data-" && u !== "aria-") {
            l.removeAttribute(t);
            return;
          }
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Ue(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Rt(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  function dt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Ui(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Qy(l, t, a) {
    var u = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (!l.hasOwnProperty(t) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var e = u.get, n = u.set;
      return Object.defineProperty(l, t, { configurable: true, get: function() {
        return e.call(this);
      }, set: function(f) {
        a = "" + f, n.call(this, f);
      } }), Object.defineProperty(l, t, { enumerable: u.enumerable }), { getValue: function() {
        return a;
      }, setValue: function(f) {
        a = "" + f;
      }, stopTracking: function() {
        l._valueTracker = null, delete l[t];
      } };
    }
  }
  function In(l) {
    if (!l._valueTracker) {
      var t = Ui(l) ? "checked" : "value";
      l._valueTracker = Qy(l, t, "" + l[t]);
    }
  }
  function Ni(l) {
    if (!l) return false;
    var t = l._valueTracker;
    if (!t) return true;
    var a = t.getValue(), u = "";
    return l && (u = Ui(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== a ? (t.setValue(l), true) : false;
  }
  function Ne(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Zy = /[\n"\\]/g;
  function yt(l) {
    return l.replace(Zy, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Pn(l, t, a, u, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + dt(t)) : l.value !== "" + dt(t) && (l.value = "" + dt(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? lf(l, f, dt(t)) : a != null ? lf(l, f, dt(a)) : u != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + dt(c) : l.removeAttribute("name");
  }
  function Hi(l, t, a, u, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        In(l);
        return;
      }
      a = a != null ? "" + dt(a) : "", t = t != null ? "" + dt(t) : a, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    u = u ?? e, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = c ? l.checked : !!u, l.defaultChecked = !!u, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), In(l);
  }
  function lf(l, t, a) {
    t === "number" && Ne(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function wa(l, t, a, u) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < a.length; e++) t["$" + a[e]] = true;
      for (a = 0; a < l.length; a++) e = t.hasOwnProperty("$" + l[a].value), l[a].selected !== e && (l[a].selected = e), e && u && (l[a].defaultSelected = true);
    } else {
      for (a = "" + dt(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          l[e].selected = true, u && (l[e].defaultSelected = true);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = true);
    }
  }
  function Ri(l, t, a) {
    if (t != null && (t = "" + dt(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + dt(a) : "";
  }
  function Ci(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(h(92));
        if (zt(u)) {
          if (1 < u.length) throw Error(h(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), t = a;
    }
    a = dt(t), l.defaultValue = a, u = l.textContent, u === a && u !== "" && u !== null && (l.value = u), In(l);
  }
  function Wa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Vy = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function ji(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, a) : typeof a != "number" || a === 0 || Vy.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function qi(l, t, a) {
    if (t != null && typeof t != "object") throw Error(h(62));
    if (l = l.style, a != null) {
      for (var u in a) !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
      for (var e in t) u = t[e], t.hasOwnProperty(e) && a[e] !== u && ji(l, e, u);
    } else for (var n in t) t.hasOwnProperty(n) && ji(l, n, t[n]);
  }
  function tf(l) {
    if (l.indexOf("-") === -1) return false;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var Ly = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Ky = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function He(l) {
    return Ky.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Ct() {
  }
  var af = null;
  function uf(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var $a = null, ka = null;
  function Bi(l) {
    var t = La(l);
    if (t && (l = t.stateNode)) {
      var a = l[Jl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (Pn(l, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll('input[name="' + yt("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Jl] || null;
                if (!e) throw Error(h(90));
                Pn(u, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name);
              }
            }
            for (t = 0; t < a.length; t++) u = a[t], u.form === l.form && Ni(u);
          }
          break l;
        case "textarea":
          Ri(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && wa(l, !!a.multiple, t, false);
      }
    }
  }
  var ef = false;
  function Yi(l, t, a) {
    if (ef) return l(t, a);
    ef = true;
    try {
      var u = l(t);
      return u;
    } finally {
      if (ef = false, ($a !== null || ka !== null) && (bn(), $a && (t = $a, l = ka, ka = $a = null, Bi(t), l))) for (t = 0; t < l.length; t++) Bi(l[t]);
    }
  }
  function Cu(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Jl] || null;
    if (u === null) return null;
    a = u[t];
    l: switch (t) {
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
        (u = !u.disabled) || (l = l.type, u = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !u;
        break l;
      default:
        l = false;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(h(231, t, typeof a));
    return a;
  }
  var jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), nf = false;
  if (jt) try {
    var ju = {};
    Object.defineProperty(ju, "passive", { get: function() {
      nf = true;
    } }), window.addEventListener("test", ju, ju), window.removeEventListener("test", ju, ju);
  } catch {
    nf = false;
  }
  var It = null, ff = null, Re = null;
  function xi() {
    if (Re) return Re;
    var l, t = ff, a = t.length, u, e = "value" in It ? It.value : It.textContent, n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++) ;
    var f = a - l;
    for (u = 1; u <= f && t[a - u] === e[n - u]; u++) ;
    return Re = e.slice(l, 1 < u ? 1 - u : void 0);
  }
  function Ce(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function je() {
    return true;
  }
  function Gi() {
    return false;
  }
  function wl(l) {
    function t(a, u, e, n, f) {
      this._reactName = a, this._targetInst = e, this.type = u, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l) l.hasOwnProperty(c) && (a = l[c], this[c] = a ? a(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === false) ? je : Gi, this.isPropagationStopped = Gi, this;
    }
    return C(t.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a = this.nativeEvent;
      a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = false), this.isDefaultPrevented = je);
    }, stopPropagation: function() {
      var a = this.nativeEvent;
      a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = true), this.isPropagationStopped = je);
    }, persist: function() {
    }, isPersistent: je }), t;
  }
  var Oa = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(l) {
    return l.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, qe = wl(Oa), qu = C({}, Oa, { view: 0, detail: 0 }), Jy = wl(qu), cf, sf, Bu, Be = C({}, qu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yf, button: 0, buttons: 0, relatedTarget: function(l) {
    return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
  }, movementX: function(l) {
    return "movementX" in l ? l.movementX : (l !== Bu && (Bu && l.type === "mousemove" ? (cf = l.screenX - Bu.screenX, sf = l.screenY - Bu.screenY) : sf = cf = 0, Bu = l), cf);
  }, movementY: function(l) {
    return "movementY" in l ? l.movementY : sf;
  } }), Xi = wl(Be), wy = C({}, Be, { dataTransfer: 0 }), Wy = wl(wy), $y = C({}, qu, { relatedTarget: 0 }), df = wl($y), ky = C({}, Oa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Fy = wl(ky), Iy = C({}, Oa, { clipboardData: function(l) {
    return "clipboardData" in l ? l.clipboardData : window.clipboardData;
  } }), Py = wl(Iy), lv = C({}, Oa, { data: 0 }), Qi = wl(lv), tv = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, av = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, uv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ev(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = uv[l]) ? !!t[l] : false;
  }
  function yf() {
    return ev;
  }
  var nv = C({}, qu, { key: function(l) {
    if (l.key) {
      var t = tv[l.key] || l.key;
      if (t !== "Unidentified") return t;
    }
    return l.type === "keypress" ? (l = Ce(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? av[l.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yf, charCode: function(l) {
    return l.type === "keypress" ? Ce(l) : 0;
  }, keyCode: function(l) {
    return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
  }, which: function(l) {
    return l.type === "keypress" ? Ce(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
  } }), fv = wl(nv), cv = C({}, Be, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Zi = wl(cv), iv = C({}, qu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yf }), sv = wl(iv), dv = C({}, Oa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), yv = wl(dv), vv = C({}, Be, { deltaX: function(l) {
    return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
  }, deltaY: function(l) {
    return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), mv = wl(vv), ov = C({}, Oa, { newState: 0, oldState: 0 }), hv = wl(ov), rv = [9, 13, 27, 32], vf = jt && "CompositionEvent" in window, Yu = null;
  jt && "documentMode" in document && (Yu = document.documentMode);
  var gv = jt && "TextEvent" in window && !Yu, Vi = jt && (!vf || Yu && 8 < Yu && 11 >= Yu), Li = " ", Ki = false;
  function Ji(l, t) {
    switch (l) {
      case "keyup":
        return rv.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function wi(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Fa = false;
  function Sv(l, t) {
    switch (l) {
      case "compositionend":
        return wi(t);
      case "keypress":
        return t.which !== 32 ? null : (Ki = true, Li);
      case "textInput":
        return l = t.data, l === Li && Ki ? null : l;
      default:
        return null;
    }
  }
  function bv(l, t) {
    if (Fa) return l === "compositionend" || !vf && Ji(l, t) ? (l = xi(), Re = ff = It = null, Fa = false, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Vi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var zv = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function Wi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!zv[l.type] : t === "textarea";
  }
  function $i(l, t, a, u) {
    $a ? ka ? ka.push(u) : ka = [u] : $a = u, t = Mn(t, "onChange"), 0 < t.length && (a = new qe("onChange", "change", null, a, u), l.push({ event: a, listeners: t }));
  }
  var xu = null, Gu = null;
  function Ev(l) {
    Hd(l, 0);
  }
  function Ye(l) {
    var t = Ru(l);
    if (Ni(t)) return l;
  }
  function ki(l, t) {
    if (l === "change") return t;
  }
  var Fi = false;
  if (jt) {
    var mf;
    if (jt) {
      var of = "oninput" in document;
      if (!of) {
        var Ii = document.createElement("div");
        Ii.setAttribute("oninput", "return;"), of = typeof Ii.oninput == "function";
      }
      mf = of;
    } else mf = false;
    Fi = mf && (!document.documentMode || 9 < document.documentMode);
  }
  function Pi() {
    xu && (xu.detachEvent("onpropertychange", ls), Gu = xu = null);
  }
  function ls(l) {
    if (l.propertyName === "value" && Ye(Gu)) {
      var t = [];
      $i(t, Gu, l, uf(l)), Yi(Ev, t);
    }
  }
  function Tv(l, t, a) {
    l === "focusin" ? (Pi(), xu = t, Gu = a, xu.attachEvent("onpropertychange", ls)) : l === "focusout" && Pi();
  }
  function Av(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown") return Ye(Gu);
  }
  function _v(l, t) {
    if (l === "click") return Ye(t);
  }
  function Ov(l, t) {
    if (l === "input" || l === "change") return Ye(t);
  }
  function Mv(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var ut = typeof Object.is == "function" ? Object.is : Mv;
  function Xu(l, t) {
    if (ut(l, t)) return true;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null) return false;
    var a = Object.keys(l), u = Object.keys(t);
    if (a.length !== u.length) return false;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!Ln.call(t, e) || !ut(l[e], t[e])) return false;
    }
    return true;
  }
  function ts(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function as(l, t) {
    var a = ts(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (u = l + a.textContent.length, l <= t && u >= t) return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = ts(a);
    }
  }
  function us(l, t) {
    return l && t ? l === t ? true : l && l.nodeType === 3 ? false : t && t.nodeType === 3 ? us(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : false : false;
  }
  function es(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Ne(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = false;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Ne(l.document);
    }
    return t;
  }
  function hf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var pv = jt && "documentMode" in document && 11 >= document.documentMode, Ia = null, rf = null, Qu = null, gf = false;
  function ns(l, t, a) {
    var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    gf || Ia == null || Ia !== Ne(u) || (u = Ia, "selectionStart" in u && hf(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), Qu && Xu(Qu, u) || (Qu = u, u = Mn(rf, "onSelect"), 0 < u.length && (t = new qe("onSelect", "select", null, t, a), l.push({ event: t, listeners: u }), t.target = Ia)));
  }
  function Ma(l, t) {
    var a = {};
    return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
  }
  var Pa = { animationend: Ma("Animation", "AnimationEnd"), animationiteration: Ma("Animation", "AnimationIteration"), animationstart: Ma("Animation", "AnimationStart"), transitionrun: Ma("Transition", "TransitionRun"), transitionstart: Ma("Transition", "TransitionStart"), transitioncancel: Ma("Transition", "TransitionCancel"), transitionend: Ma("Transition", "TransitionEnd") }, Sf = {}, fs = {};
  jt && (fs = document.createElement("div").style, "AnimationEvent" in window || (delete Pa.animationend.animation, delete Pa.animationiteration.animation, delete Pa.animationstart.animation), "TransitionEvent" in window || delete Pa.transitionend.transition);
  function pa(l) {
    if (Sf[l]) return Sf[l];
    if (!Pa[l]) return l;
    var t = Pa[l], a;
    for (a in t) if (t.hasOwnProperty(a) && a in fs) return Sf[l] = t[a];
    return l;
  }
  var cs = pa("animationend"), is = pa("animationiteration"), ss = pa("animationstart"), Dv = pa("transitionrun"), Uv = pa("transitionstart"), Nv = pa("transitioncancel"), ds = pa("transitionend"), ys = /* @__PURE__ */ new Map(), bf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  bf.push("scrollEnd");
  function Et(l, t) {
    ys.set(l, t), _a(t, [l]);
  }
  var xe = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l), error: l });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, vt = [], lu = 0, zf = 0;
  function Ge() {
    for (var l = lu, t = zf = lu = 0; t < l; ) {
      var a = vt[t];
      vt[t++] = null;
      var u = vt[t];
      vt[t++] = null;
      var e = vt[t];
      vt[t++] = null;
      var n = vt[t];
      if (vt[t++] = null, u !== null && e !== null) {
        var f = u.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), u.pending = e;
      }
      n !== 0 && vs(a, e, n);
    }
  }
  function Xe(l, t, a, u) {
    vt[lu++] = l, vt[lu++] = t, vt[lu++] = a, vt[lu++] = u, zf |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u);
  }
  function Ef(l, t, a, u) {
    return Xe(l, t, a, u), Qe(l);
  }
  function Da(l, t) {
    return Xe(l, null, null, t), Qe(l);
  }
  function vs(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = false, n = l.return; n !== null; ) n.childLanes |= a, u = n.alternate, u !== null && (u.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = true)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - at(a), l = n.hiddenUpdates, u = l[e], u === null ? l[e] = [t] : u.push(t), t.lane = a | 536870912), n) : null;
  }
  function Qe(l) {
    if (50 < se) throw se = 0, Nc = null, Error(h(185));
    for (var t = l.return; t !== null; ) l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var tu = {};
  function Hv(l, t, a, u) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function et(l, t, a, u) {
    return new Hv(l, t, a, u);
  }
  function Tf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function qt(l, t) {
    var a = l.alternate;
    return a === null ? (a = et(l.tag, t, l.key, l.mode), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function ms(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), l;
  }
  function Ze(l, t, a, u, e, n) {
    var f = 0;
    if (u = l, typeof l == "function") Tf(l) && (f = 1);
    else if (typeof l == "string") f = Bm(l, a, U.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else l: switch (l) {
      case Ot:
        return l = et(31, a, t, e), l.elementType = Ot, l.lanes = n, l;
      case rl:
        return Ua(a.children, e, n, t);
      case Xl:
        f = 8, e |= 24;
        break;
      case il:
        return l = et(12, a, t, e | 2), l.elementType = il, l.lanes = n, l;
      case _t:
        return l = et(13, a, t, e), l.elementType = _t, l.lanes = n, l;
      case Vl:
        return l = et(19, a, t, e), l.elementType = Vl, l.lanes = n, l;
      default:
        if (typeof l == "object" && l !== null) switch (l.$$typeof) {
          case Ul:
            f = 10;
            break l;
          case pl:
            f = 9;
            break l;
          case Pl:
            f = 11;
            break l;
          case k:
            f = 14;
            break l;
          case Ll:
            f = 16, u = null;
            break l;
        }
        f = 29, a = Error(h(130, l === null ? "null" : typeof l, "")), u = null;
    }
    return t = et(f, a, t, e), t.elementType = l, t.type = u, t.lanes = n, t;
  }
  function Ua(l, t, a, u) {
    return l = et(7, l, u, t), l.lanes = a, l;
  }
  function Af(l, t, a) {
    return l = et(6, l, null, t), l.lanes = a, l;
  }
  function os(l) {
    var t = et(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function _f(l, t, a) {
    return t = et(4, l.children !== null ? l.children : [], l.key, t), t.lanes = a, t.stateNode = { containerInfo: l.containerInfo, pendingChildren: null, implementation: l.implementation }, t;
  }
  var hs = /* @__PURE__ */ new WeakMap();
  function mt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = hs.get(l);
      return a !== void 0 ? a : (t = { value: l, source: t, stack: oi(t) }, hs.set(l, t), t);
    }
    return { value: l, source: t, stack: oi(t) };
  }
  var au = [], uu = 0, Ve = null, Zu = 0, ot = [], ht = 0, Pt = null, pt = 1, Dt = "";
  function Bt(l, t) {
    au[uu++] = Zu, au[uu++] = Ve, Ve = l, Zu = t;
  }
  function rs(l, t, a) {
    ot[ht++] = pt, ot[ht++] = Dt, ot[ht++] = Pt, Pt = l;
    var u = pt;
    l = Dt;
    var e = 32 - at(u) - 1;
    u &= ~(1 << e), a += 1;
    var n = 32 - at(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (u & (1 << f) - 1).toString(32), u >>= f, e -= f, pt = 1 << 32 - at(t) + e | a << e | u, Dt = n + l;
    } else pt = 1 << n | a << e | u, Dt = l;
  }
  function Of(l) {
    l.return !== null && (Bt(l, 1), rs(l, 1, 0));
  }
  function Mf(l) {
    for (; l === Ve; ) Ve = au[--uu], au[uu] = null, Zu = au[--uu], au[uu] = null;
    for (; l === Pt; ) Pt = ot[--ht], ot[ht] = null, Dt = ot[--ht], ot[ht] = null, pt = ot[--ht], ot[ht] = null;
  }
  function gs(l, t) {
    ot[ht++] = pt, ot[ht++] = Dt, ot[ht++] = Pt, pt = t.id, Dt = t.overflow, Pt = l;
  }
  var Cl = null, ml = null, F = false, la = null, rt = false, pf = Error(h(519));
  function ta(l) {
    var t = Error(h(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw Vu(mt(t, l)), pf;
  }
  function Ss(l) {
    var t = l.stateNode, a = l.type, u = l.memoizedProps;
    switch (t[Rl] = l, t[Jl] = u, a) {
      case "dialog":
        J("cancel", t), J("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        J("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ye.length; a++) J(ye[a], t);
        break;
      case "source":
        J("error", t);
        break;
      case "img":
      case "image":
      case "link":
        J("error", t), J("load", t);
        break;
      case "details":
        J("toggle", t);
        break;
      case "input":
        J("invalid", t), Hi(t, u.value, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name, true);
        break;
      case "select":
        J("invalid", t);
        break;
      case "textarea":
        J("invalid", t), Ci(t, u.value, u.defaultValue, u.children);
    }
    a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === true || qd(t.textContent, a) ? (u.popover != null && (J("beforetoggle", t), J("toggle", t)), u.onScroll != null && J("scroll", t), u.onScrollEnd != null && J("scrollend", t), u.onClick != null && (t.onclick = Ct), t = true) : t = false, t || ta(l, true);
  }
  function bs(l) {
    for (Cl = l.return; Cl; ) switch (Cl.tag) {
      case 5:
      case 31:
      case 13:
        rt = false;
        return;
      case 27:
      case 3:
        rt = true;
        return;
      default:
        Cl = Cl.return;
    }
  }
  function eu(l) {
    if (l !== Cl) return false;
    if (!F) return bs(l), F = true, false;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Kc(l.type, l.memoizedProps)), a = !a), a && ml && ta(l), bs(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(317));
      ml = Ld(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(317));
      ml = Ld(l);
    } else t === 27 ? (t = ml, ha(l.type) ? (l = kc, kc = null, ml = l) : ml = t) : ml = Cl ? St(l.stateNode.nextSibling) : null;
    return true;
  }
  function Na() {
    ml = Cl = null, F = false;
  }
  function Df() {
    var l = la;
    return l !== null && (Fl === null ? Fl = l : Fl.push.apply(Fl, l), la = null), l;
  }
  function Vu(l) {
    la === null ? la = [l] : la.push(l);
  }
  var Uf = d(null), Ha = null, Yt = null;
  function aa(l, t, a) {
    O(Uf, t._currentValue), t._currentValue = a;
  }
  function xt(l) {
    l._currentValue = Uf.current, E(Uf);
  }
  function Nf(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), l === a) break;
      l = l.return;
    }
  }
  function Hf(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++) if (c.context === t[i]) {
            n.lanes |= a, c = n.alternate, c !== null && (c.lanes |= a), Nf(n.return, a, l), u || (f = null);
            break l;
          }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(h(341));
        f.lanes |= a, n = f.alternate, n !== null && (n.lanes |= a), Nf(f, a, l), f = null;
      } else f = e.child;
      if (f !== null) f.return = e;
      else for (f = e; f !== null; ) {
        if (f === l) {
          f = null;
          break;
        }
        if (e = f.sibling, e !== null) {
          e.return = f.return, f = e;
          break;
        }
        f = f.return;
      }
      e = f;
    }
  }
  function nu(l, t, a, u) {
    l = null;
    for (var e = t, n = false; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = true;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(h(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          ut(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === tl.current) {
        if (f = e.alternate, f === null) throw Error(h(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(re) : l = [re]);
      }
      e = e.return;
    }
    l !== null && Hf(t, l, a, u), t.flags |= 262144;
  }
  function Le(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ut(l.context._currentValue, l.memoizedValue)) return true;
      l = l.next;
    }
    return false;
  }
  function Ra(l) {
    Ha = l, Yt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function jl(l) {
    return zs(Ha, l);
  }
  function Ke(l, t) {
    return Ha === null && Ra(l), zs(l, t);
  }
  function zs(l, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Yt === null) {
      if (l === null) throw Error(h(308));
      Yt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Yt = Yt.next = t;
    return a;
  }
  var Rv = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = { aborted: false, addEventListener: function(a, u) {
      l.push(u);
    } };
    this.abort = function() {
      t.aborted = true, l.forEach(function(a) {
        return a();
      });
    };
  }, Cv = A.unstable_scheduleCallback, jv = A.unstable_NormalPriority, Al = { $$typeof: Ul, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Rf() {
    return { controller: new Rv(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function Lu(l) {
    l.refCount--, l.refCount === 0 && Cv(jv, function() {
      l.controller.abort();
    });
  }
  var Ku = null, Cf = 0, fu = 0, cu = null;
  function qv(l, t) {
    if (Ku === null) {
      var a = Ku = [];
      Cf = 0, fu = Bc(), cu = { status: "pending", value: void 0, then: function(u) {
        a.push(u);
      } };
    }
    return Cf++, t.then(Es, Es), t;
  }
  function Es() {
    if (--Cf === 0 && Ku !== null) {
      cu !== null && (cu.status = "fulfilled");
      var l = Ku;
      Ku = null, fu = 0, cu = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Bv(l, t) {
    var a = [], u = { status: "pending", value: null, reason: null, then: function(e) {
      a.push(e);
    } };
    return l.then(function() {
      u.status = "fulfilled", u.value = t;
      for (var e = 0; e < a.length; e++) (0, a[e])(t);
    }, function(e) {
      for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++) (0, a[e])(void 0);
    }), u;
  }
  var Ts = S.S;
  S.S = function(l, t) {
    nd = lt(), typeof t == "object" && t !== null && typeof t.then == "function" && qv(l, t), Ts !== null && Ts(l, t);
  };
  var Ca = d(null);
  function jf() {
    var l = Ca.current;
    return l !== null ? l : dl.pooledCache;
  }
  function Je(l, t) {
    t === null ? O(Ca, Ca.current) : O(Ca, t.pool);
  }
  function As() {
    var l = jf();
    return l === null ? null : { parent: Al._currentValue, pool: l };
  }
  var iu = Error(h(460)), qf = Error(h(474)), we = Error(h(542)), We = { then: function() {
  } };
  function _s(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Os(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(Ct, Ct), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, ps(l), l;
      default:
        if (typeof t.status == "string") t.then(Ct, Ct);
        else {
          if (l = dl, l !== null && 100 < l.shellSuspendCounter) throw Error(h(482));
          l = t, l.status = "pending", l.then(function(u) {
            if (t.status === "pending") {
              var e = t;
              e.status = "fulfilled", e.value = u;
            }
          }, function(u) {
            if (t.status === "pending") {
              var e = t;
              e.status = "rejected", e.reason = u;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, ps(l), l;
        }
        throw qa = t, iu;
    }
  }
  function ja(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (qa = a, iu) : a;
    }
  }
  var qa = null;
  function Ms() {
    if (qa === null) throw Error(h(459));
    var l = qa;
    return qa = null, l;
  }
  function ps(l) {
    if (l === iu || l === we) throw Error(h(483));
  }
  var su = null, Ju = 0;
  function $e(l) {
    var t = Ju;
    return Ju += 1, su === null && (su = []), Os(su, l, t);
  }
  function wu(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function ke(l, t) {
    throw t.$$typeof === vl ? Error(h(525)) : (l = Object.prototype.toString.call(t), Error(h(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
  }
  function Ds(l) {
    function t(y, s) {
      if (l) {
        var v = y.deletions;
        v === null ? (y.deletions = [s], y.flags |= 16) : v.push(s);
      }
    }
    function a(y, s) {
      if (!l) return null;
      for (; s !== null; ) t(y, s), s = s.sibling;
      return null;
    }
    function u(y) {
      for (var s = /* @__PURE__ */ new Map(); y !== null; ) y.key !== null ? s.set(y.key, y) : s.set(y.index, y), y = y.sibling;
      return s;
    }
    function e(y, s) {
      return y = qt(y, s), y.index = 0, y.sibling = null, y;
    }
    function n(y, s, v) {
      return y.index = v, l ? (v = y.alternate, v !== null ? (v = v.index, v < s ? (y.flags |= 67108866, s) : v) : (y.flags |= 67108866, s)) : (y.flags |= 1048576, s);
    }
    function f(y) {
      return l && y.alternate === null && (y.flags |= 67108866), y;
    }
    function c(y, s, v, b) {
      return s === null || s.tag !== 6 ? (s = Af(v, y.mode, b), s.return = y, s) : (s = e(s, v), s.return = y, s);
    }
    function i(y, s, v, b) {
      var H = v.type;
      return H === rl ? g(y, s, v.props.children, b, v.key) : s !== null && (s.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Ll && ja(H) === s.type) ? (s = e(s, v.props), wu(s, v), s.return = y, s) : (s = Ze(v.type, v.key, v.props, null, y.mode, b), wu(s, v), s.return = y, s);
    }
    function m(y, s, v, b) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== v.containerInfo || s.stateNode.implementation !== v.implementation ? (s = _f(v, y.mode, b), s.return = y, s) : (s = e(s, v.children || []), s.return = y, s);
    }
    function g(y, s, v, b, H) {
      return s === null || s.tag !== 7 ? (s = Ua(v, y.mode, b, H), s.return = y, s) : (s = e(s, v), s.return = y, s);
    }
    function z(y, s, v) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint") return s = Af("" + s, y.mode, v), s.return = y, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Gl:
            return v = Ze(s.type, s.key, s.props, null, y.mode, v), wu(v, s), v.return = y, v;
          case w:
            return s = _f(s, y.mode, v), s.return = y, s;
          case Ll:
            return s = ja(s), z(y, s, v);
        }
        if (zt(s) || Kl(s)) return s = Ua(s, y.mode, v, null), s.return = y, s;
        if (typeof s.then == "function") return z(y, $e(s), v);
        if (s.$$typeof === Ul) return z(y, Ke(y, s), v);
        ke(y, s);
      }
      return null;
    }
    function o(y, s, v, b) {
      var H = s !== null ? s.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return H !== null ? null : c(y, s, "" + v, b);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Gl:
            return v.key === H ? i(y, s, v, b) : null;
          case w:
            return v.key === H ? m(y, s, v, b) : null;
          case Ll:
            return v = ja(v), o(y, s, v, b);
        }
        if (zt(v) || Kl(v)) return H !== null ? null : g(y, s, v, b, null);
        if (typeof v.then == "function") return o(y, s, $e(v), b);
        if (v.$$typeof === Ul) return o(y, s, Ke(y, v), b);
        ke(y, v);
      }
      return null;
    }
    function r(y, s, v, b, H) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint") return y = y.get(v) || null, c(s, y, "" + b, H);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Gl:
            return y = y.get(b.key === null ? v : b.key) || null, i(s, y, b, H);
          case w:
            return y = y.get(b.key === null ? v : b.key) || null, m(s, y, b, H);
          case Ll:
            return b = ja(b), r(y, s, v, b, H);
        }
        if (zt(b) || Kl(b)) return y = y.get(v) || null, g(s, y, b, H, null);
        if (typeof b.then == "function") return r(y, s, v, $e(b), H);
        if (b.$$typeof === Ul) return r(y, s, v, Ke(s, b), H);
        ke(s, b);
      }
      return null;
    }
    function M(y, s, v, b) {
      for (var H = null, I = null, N = s, Q = s = 0, $ = null; N !== null && Q < v.length; Q++) {
        N.index > Q ? ($ = N, N = null) : $ = N.sibling;
        var P = o(y, N, v[Q], b);
        if (P === null) {
          N === null && (N = $);
          break;
        }
        l && N && P.alternate === null && t(y, N), s = n(P, s, Q), I === null ? H = P : I.sibling = P, I = P, N = $;
      }
      if (Q === v.length) return a(y, N), F && Bt(y, Q), H;
      if (N === null) {
        for (; Q < v.length; Q++) N = z(y, v[Q], b), N !== null && (s = n(N, s, Q), I === null ? H = N : I.sibling = N, I = N);
        return F && Bt(y, Q), H;
      }
      for (N = u(N); Q < v.length; Q++) $ = r(N, y, Q, v[Q], b), $ !== null && (l && $.alternate !== null && N.delete($.key === null ? Q : $.key), s = n($, s, Q), I === null ? H = $ : I.sibling = $, I = $);
      return l && N.forEach(function(za) {
        return t(y, za);
      }), F && Bt(y, Q), H;
    }
    function j(y, s, v, b) {
      if (v == null) throw Error(h(151));
      for (var H = null, I = null, N = s, Q = s = 0, $ = null, P = v.next(); N !== null && !P.done; Q++, P = v.next()) {
        N.index > Q ? ($ = N, N = null) : $ = N.sibling;
        var za = o(y, N, P.value, b);
        if (za === null) {
          N === null && (N = $);
          break;
        }
        l && N && za.alternate === null && t(y, N), s = n(za, s, Q), I === null ? H = za : I.sibling = za, I = za, N = $;
      }
      if (P.done) return a(y, N), F && Bt(y, Q), H;
      if (N === null) {
        for (; !P.done; Q++, P = v.next()) P = z(y, P.value, b), P !== null && (s = n(P, s, Q), I === null ? H = P : I.sibling = P, I = P);
        return F && Bt(y, Q), H;
      }
      for (N = u(N); !P.done; Q++, P = v.next()) P = r(N, y, Q, P.value, b), P !== null && (l && P.alternate !== null && N.delete(P.key === null ? Q : P.key), s = n(P, s, Q), I === null ? H = P : I.sibling = P, I = P);
      return l && N.forEach(function(wm) {
        return t(y, wm);
      }), F && Bt(y, Q), H;
    }
    function cl(y, s, v, b) {
      if (typeof v == "object" && v !== null && v.type === rl && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Gl:
            l: {
              for (var H = v.key; s !== null; ) {
                if (s.key === H) {
                  if (H = v.type, H === rl) {
                    if (s.tag === 7) {
                      a(y, s.sibling), b = e(s, v.props.children), b.return = y, y = b;
                      break l;
                    }
                  } else if (s.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Ll && ja(H) === s.type) {
                    a(y, s.sibling), b = e(s, v.props), wu(b, v), b.return = y, y = b;
                    break l;
                  }
                  a(y, s);
                  break;
                } else t(y, s);
                s = s.sibling;
              }
              v.type === rl ? (b = Ua(v.props.children, y.mode, b, v.key), b.return = y, y = b) : (b = Ze(v.type, v.key, v.props, null, y.mode, b), wu(b, v), b.return = y, y = b);
            }
            return f(y);
          case w:
            l: {
              for (H = v.key; s !== null; ) {
                if (s.key === H) if (s.tag === 4 && s.stateNode.containerInfo === v.containerInfo && s.stateNode.implementation === v.implementation) {
                  a(y, s.sibling), b = e(s, v.children || []), b.return = y, y = b;
                  break l;
                } else {
                  a(y, s);
                  break;
                }
                else t(y, s);
                s = s.sibling;
              }
              b = _f(v, y.mode, b), b.return = y, y = b;
            }
            return f(y);
          case Ll:
            return v = ja(v), cl(y, s, v, b);
        }
        if (zt(v)) return M(y, s, v, b);
        if (Kl(v)) {
          if (H = Kl(v), typeof H != "function") throw Error(h(150));
          return v = H.call(v), j(y, s, v, b);
        }
        if (typeof v.then == "function") return cl(y, s, $e(v), b);
        if (v.$$typeof === Ul) return cl(y, s, Ke(y, v), b);
        ke(y, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, s !== null && s.tag === 6 ? (a(y, s.sibling), b = e(s, v), b.return = y, y = b) : (a(y, s), b = Af(v, y.mode, b), b.return = y, y = b), f(y)) : a(y, s);
    }
    return function(y, s, v, b) {
      try {
        Ju = 0;
        var H = cl(y, s, v, b);
        return su = null, H;
      } catch (N) {
        if (N === iu || N === we) throw N;
        var I = et(29, N, null, y.mode);
        return I.lanes = b, I.return = y, I;
      } finally {
      }
    };
  }
  var Ba = Ds(true), Us = Ds(false), ua = false;
  function Bf(l) {
    l.updateQueue = { baseState: l.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function Yf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = { baseState: l.baseState, firstBaseUpdate: l.firstBaseUpdate, lastBaseUpdate: l.lastBaseUpdate, shared: l.shared, callbacks: null });
  }
  function ea(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function na(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (ll & 2) !== 0) {
      var e = u.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), u.pending = t, t = Qe(l), vs(l, null, a), t;
    }
    return Xe(l, u, t, a), Qe(l);
  }
  function Wu(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, zi(l, a);
    }
  }
  function xf(l, t) {
    var a = l.updateQueue, u = l.alternate;
    if (u !== null && (u = u.updateQueue, a === u)) {
      var e = null, n = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var f = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null };
          n === null ? e = n = f : n = n.next = f, a = a.next;
        } while (a !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      a = { baseState: u.baseState, firstBaseUpdate: e, lastBaseUpdate: n, shared: u.shared, callbacks: u.callbacks }, l.updateQueue = a;
      return;
    }
    l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t;
  }
  var Gf = false;
  function $u() {
    if (Gf) {
      var l = cu;
      if (l !== null) throw l;
    }
  }
  function ku(l, t, a, u) {
    Gf = false;
    var e = l.updateQueue;
    ua = false;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, m = i.next;
      i.next = null, f === null ? n = m : f.next = m, f = i;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, c = g.lastBaseUpdate, c !== f && (c === null ? g.firstBaseUpdate = m : c.next = m, g.lastBaseUpdate = i));
    }
    if (n !== null) {
      var z = e.baseState;
      f = 0, g = m = i = null, c = n;
      do {
        var o = c.lane & -536870913, r = o !== c.lane;
        if (r ? (W & o) === o : (u & o) === o) {
          o !== 0 && o === fu && (Gf = true), g !== null && (g = g.next = { lane: 0, tag: c.tag, payload: c.payload, callback: null, next: null });
          l: {
            var M = l, j = c;
            o = t;
            var cl = a;
            switch (j.tag) {
              case 1:
                if (M = j.payload, typeof M == "function") {
                  z = M.call(cl, z, o);
                  break l;
                }
                z = M;
                break l;
              case 3:
                M.flags = M.flags & -65537 | 128;
              case 0:
                if (M = j.payload, o = typeof M == "function" ? M.call(cl, z, o) : M, o == null) break l;
                z = C({}, z, o);
                break l;
              case 2:
                ua = true;
            }
          }
          o = c.callback, o !== null && (l.flags |= 64, r && (l.flags |= 8192), r = e.callbacks, r === null ? e.callbacks = [o] : r.push(o));
        } else r = { lane: o, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, g === null ? (m = g = r, i = z) : g = g.next = r, f |= o;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null) break;
          r = c, c = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
        }
      } while (true);
      g === null && (i = z), e.baseState = i, e.firstBaseUpdate = m, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), da |= f, l.lanes = f, l.memoizedState = z;
    }
  }
  function Ns(l, t) {
    if (typeof l != "function") throw Error(h(191, l));
    l.call(t);
  }
  function Hs(l, t) {
    var a = l.callbacks;
    if (a !== null) for (l.callbacks = null, l = 0; l < a.length; l++) Ns(a[l], t);
  }
  var du = d(null), Fe = d(0);
  function Rs(l, t) {
    l = wt, O(Fe, l), O(du, t), wt = l | t.baseLanes;
  }
  function Xf() {
    O(Fe, wt), O(du, du.current);
  }
  function Qf() {
    wt = Fe.current, E(du), E(Fe);
  }
  var nt = d(null), gt = null;
  function fa(l) {
    var t = l.alternate;
    O(El, El.current & 1), O(nt, l), gt === null && (t === null || du.current !== null || t.memoizedState !== null) && (gt = l);
  }
  function Zf(l) {
    O(El, El.current), O(nt, l), gt === null && (gt = l);
  }
  function Cs(l) {
    l.tag === 22 ? (O(El, El.current), O(nt, l), gt === null && (gt = l)) : ca();
  }
  function ca() {
    O(El, El.current), O(nt, nt.current);
  }
  function ft(l) {
    E(nt), gt === l && (gt = null), E(El);
  }
  var El = d(0);
  function Ie(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Wc(a) || $c(a))) return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Gt = 0, X = null, nl = null, _l = null, Pe = false, yu = false, Ya = false, ln = 0, Fu = 0, vu = null, Yv = 0;
  function Sl() {
    throw Error(h(321));
  }
  function Vf(l, t) {
    if (t === null) return false;
    for (var a = 0; a < t.length && a < l.length; a++) if (!ut(l[a], t[a])) return false;
    return true;
  }
  function Lf(l, t, a, u, e, n) {
    return Gt = n, X = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, S.H = l === null || l.memoizedState === null ? r0 : nc, Ya = false, n = a(u, e), Ya = false, yu && (n = qs(t, a, u, e)), js(l), n;
  }
  function js(l) {
    S.H = le;
    var t = nl !== null && nl.next !== null;
    if (Gt = 0, _l = nl = X = null, Pe = false, Fu = 0, vu = null, t) throw Error(h(300));
    l === null || Ol || (l = l.dependencies, l !== null && Le(l) && (Ol = true));
  }
  function qs(l, t, a, u) {
    X = l;
    var e = 0;
    do {
      if (yu && (vu = null), Fu = 0, yu = false, 25 <= e) throw Error(h(301));
      if (e += 1, _l = nl = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      S.H = g0, n = t(a, u);
    } while (yu);
    return n;
  }
  function xv() {
    var l = S.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Iu(t) : t, l = l.useState()[0], (nl !== null ? nl.memoizedState : null) !== l && (X.flags |= 1024), t;
  }
  function Kf() {
    var l = ln !== 0;
    return ln = 0, l;
  }
  function Jf(l, t, a) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
  }
  function wf(l) {
    if (Pe) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Pe = false;
    }
    Gt = 0, _l = nl = X = null, yu = false, Fu = ln = 0, vu = null;
  }
  function Zl() {
    var l = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return _l === null ? X.memoizedState = _l = l : _l = _l.next = l, _l;
  }
  function Tl() {
    if (nl === null) {
      var l = X.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = nl.next;
    var t = _l === null ? X.memoizedState : _l.next;
    if (t !== null) _l = t, nl = l;
    else {
      if (l === null) throw X.alternate === null ? Error(h(467)) : Error(h(310));
      nl = l, l = { memoizedState: nl.memoizedState, baseState: nl.baseState, baseQueue: nl.baseQueue, queue: nl.queue, next: null }, _l === null ? X.memoizedState = _l = l : _l = _l.next = l;
    }
    return _l;
  }
  function tn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Iu(l) {
    var t = Fu;
    return Fu += 1, vu === null && (vu = []), l = Os(vu, l, t), t = X, (_l === null ? t.memoizedState : _l.next) === null && (t = t.alternate, S.H = t === null || t.memoizedState === null ? r0 : nc), l;
  }
  function an(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Iu(l);
      if (l.$$typeof === Ul) return jl(l);
    }
    throw Error(h(438, String(l)));
  }
  function Wf(l) {
    var t = null, a = X.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var u = X.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = { data: u.data.map(function(e) {
        return e.slice();
      }), index: 0 })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = tn(), X.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0) for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = Qa;
    return t.index++, a;
  }
  function Xt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function un(l) {
    var t = Tl();
    return $f(t, nl, l);
  }
  function $f(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(h(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue, n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, u.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var c = f = null, i = null, m = t, g = false;
      do {
        var z = m.lane & -536870913;
        if (z !== m.lane ? (W & z) === z : (Gt & z) === z) {
          var o = m.revertLane;
          if (o === 0) i !== null && (i = i.next = { lane: 0, revertLane: 0, gesture: null, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null }), z === fu && (g = true);
          else if ((Gt & o) === o) {
            m = m.next, o === fu && (g = true);
            continue;
          } else z = { lane: 0, revertLane: m.revertLane, gesture: null, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null }, i === null ? (c = i = z, f = n) : i = i.next = z, X.lanes |= o, da |= o;
          z = m.action, Ya && a(n, z), n = m.hasEagerState ? m.eagerState : a(n, z);
        } else o = { lane: z, revertLane: m.revertLane, gesture: m.gesture, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null }, i === null ? (c = i = o, f = n) : i = i.next = o, X.lanes |= z, da |= z;
        m = m.next;
      } while (m !== null && m !== t);
      if (i === null ? f = n : i.next = c, !ut(n, l.memoizedState) && (Ol = true, g && (a = cu, a !== null))) throw a;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, u.lastRenderedState = n;
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function kf(l) {
    var t = Tl(), a = t.queue;
    if (a === null) throw Error(h(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch, e = a.pending, n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      ut(n, t.memoizedState) || (Ol = true), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
    }
    return [n, u];
  }
  function Bs(l, t, a) {
    var u = X, e = Tl(), n = F;
    if (n) {
      if (a === void 0) throw Error(h(407));
      a = a();
    } else a = t();
    var f = !ut((nl || e).memoizedState, a);
    if (f && (e.memoizedState = a, Ol = true), e = e.queue, Pf(Gs.bind(null, u, e, l), [l]), e.getSnapshot !== t || f || _l !== null && _l.memoizedState.tag & 1) {
      if (u.flags |= 2048, mu(9, { destroy: void 0 }, xs.bind(null, u, e, a, t), null), dl === null) throw Error(h(349));
      n || (Gt & 127) !== 0 || Ys(u, t, a);
    }
    return a;
  }
  function Ys(l, t, a) {
    l.flags |= 16384, l = { getSnapshot: t, value: a }, t = X.updateQueue, t === null ? (t = tn(), X.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function xs(l, t, a, u) {
    t.value = a, t.getSnapshot = u, Xs(t) && Qs(l);
  }
  function Gs(l, t, a) {
    return a(function() {
      Xs(t) && Qs(l);
    });
  }
  function Xs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !ut(l, a);
    } catch {
      return true;
    }
  }
  function Qs(l) {
    var t = Da(l, 2);
    t !== null && Il(t, l, 2);
  }
  function Ff(l) {
    var t = Zl();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), Ya) {
        kt(true);
        try {
          a();
        } finally {
          kt(false);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Xt, lastRenderedState: l }, t;
  }
  function Zs(l, t, a, u) {
    return l.baseState = a, $f(l, nl, typeof u == "function" ? u : Xt);
  }
  function Gv(l, t, a, u, e) {
    if (fn(l)) throw Error(h(485));
    if (l = t.action, l !== null) {
      var n = { payload: e, action: l, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(f) {
        n.listeners.push(f);
      } };
      S.T !== null ? a(true) : n.isTransition = false, u(n), a = t.pending, a === null ? (n.next = t.pending = n, Vs(t, n)) : (n.next = a.next, t.pending = a.next = n);
    }
  }
  function Vs(l, t) {
    var a = t.action, u = t.payload, e = l.state;
    if (t.isTransition) {
      var n = S.T, f = {};
      S.T = f;
      try {
        var c = a(e, u), i = S.S;
        i !== null && i(f, c), Ls(l, t, c);
      } catch (m) {
        If(l, t, m);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), S.T = n;
      }
    } else try {
      n = a(e, u), Ls(l, t, n);
    } catch (m) {
      If(l, t, m);
    }
  }
  function Ls(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(u) {
      Ks(l, t, u);
    }, function(u) {
      return If(l, t, u);
    }) : Ks(l, t, a);
  }
  function Ks(l, t, a) {
    t.status = "fulfilled", t.value = a, Js(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, Vs(l, a)));
  }
  function If(l, t, a) {
    var u = l.pending;
    if (l.pending = null, u !== null) {
      u = u.next;
      do
        t.status = "rejected", t.reason = a, Js(t), t = t.next;
      while (t !== u);
    }
    l.action = null;
  }
  function Js(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function ws(l, t) {
    return t;
  }
  function Ws(l, t) {
    if (F) {
      var a = dl.formState;
      if (a !== null) {
        l: {
          var u = X;
          if (F) {
            if (ml) {
              t: {
                for (var e = ml, n = rt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = St(e.nextSibling), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                ml = St(e.nextSibling), u = e.data === "F!";
                break l;
              }
            }
            ta(u);
          }
          u = false;
        }
        u && (t = a[0]);
      }
    }
    return a = Zl(), a.memoizedState = a.baseState = t, u = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ws, lastRenderedState: t }, a.queue = u, a = m0.bind(null, X, u), u.dispatch = a, u = Ff(false), n = ec.bind(null, X, false, u.queue), u = Zl(), e = { state: t, dispatch: null, action: l, pending: null }, u.queue = e, a = Gv.bind(null, X, e, n, a), e.dispatch = a, u.memoizedState = l, [t, a, false];
  }
  function $s(l) {
    var t = Tl();
    return ks(t, nl, l);
  }
  function ks(l, t, a) {
    if (t = $f(l, t, ws)[0], l = un(Xt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var u = Iu(t);
    } catch (f) {
      throw f === iu ? we : f;
    }
    else u = t;
    t = Tl();
    var e = t.queue, n = e.dispatch;
    return a !== t.memoizedState && (X.flags |= 2048, mu(9, { destroy: void 0 }, Xv.bind(null, e, a), null)), [u, n, l];
  }
  function Xv(l, t) {
    l.action = t;
  }
  function Fs(l) {
    var t = Tl(), a = nl;
    if (a !== null) return ks(t, a, l);
    Tl(), t = t.memoizedState, a = Tl();
    var u = a.queue.dispatch;
    return a.memoizedState = l, [t, u, false];
  }
  function mu(l, t, a, u) {
    return l = { tag: l, create: a, deps: u, inst: t, next: null }, t = X.updateQueue, t === null && (t = tn(), X.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (u = a.next, a.next = l, l.next = u, t.lastEffect = l), l;
  }
  function Is() {
    return Tl().memoizedState;
  }
  function en(l, t, a, u) {
    var e = Zl();
    X.flags |= l, e.memoizedState = mu(1 | t, { destroy: void 0 }, a, u === void 0 ? null : u);
  }
  function nn(l, t, a, u) {
    var e = Tl();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    nl !== null && u !== null && Vf(u, nl.memoizedState.deps) ? e.memoizedState = mu(t, n, a, u) : (X.flags |= l, e.memoizedState = mu(1 | t, n, a, u));
  }
  function Ps(l, t) {
    en(8390656, 8, l, t);
  }
  function Pf(l, t) {
    nn(2048, 8, l, t);
  }
  function Qv(l) {
    X.flags |= 4;
    var t = X.updateQueue;
    if (t === null) t = tn(), X.updateQueue = t, t.events = [l];
    else {
      var a = t.events;
      a === null ? t.events = [l] : a.push(l);
    }
  }
  function l0(l) {
    var t = Tl().memoizedState;
    return Qv({ ref: t, nextImpl: l }), function() {
      if ((ll & 2) !== 0) throw Error(h(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function t0(l, t) {
    return nn(4, 2, l, t);
  }
  function a0(l, t) {
    return nn(4, 4, l, t);
  }
  function u0(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null) return l = l(), t.current = l, function() {
      t.current = null;
    };
  }
  function e0(l, t, a) {
    a = a != null ? a.concat([l]) : null, nn(4, 4, u0.bind(null, t, l), a);
  }
  function lc() {
  }
  function n0(l, t) {
    var a = Tl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && Vf(t, u[1]) ? u[0] : (a.memoizedState = [l, t], l);
  }
  function f0(l, t) {
    var a = Tl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && Vf(t, u[1])) return u[0];
    if (u = l(), Ya) {
      kt(true);
      try {
        l();
      } finally {
        kt(false);
      }
    }
    return a.memoizedState = [u, t], u;
  }
  function tc(l, t, a) {
    return a === void 0 || (Gt & 1073741824) !== 0 && (W & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a, l = cd(), X.lanes |= l, da |= l, a);
  }
  function c0(l, t, a, u) {
    return ut(a, t) ? a : du.current !== null ? (l = tc(l, a, u), ut(l, t) || (Ol = true), l) : (Gt & 42) === 0 || (Gt & 1073741824) !== 0 && (W & 261930) === 0 ? (Ol = true, l.memoizedState = a) : (l = cd(), X.lanes |= l, da |= l, t);
  }
  function i0(l, t, a, u, e) {
    var n = _.p;
    _.p = n !== 0 && 8 > n ? n : 8;
    var f = S.T, c = {};
    S.T = c, ec(l, false, t, a);
    try {
      var i = e(), m = S.S;
      if (m !== null && m(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var g = Bv(i, u);
        Pu(l, t, g, st(l));
      } else Pu(l, t, u, st(l));
    } catch (z) {
      Pu(l, t, { then: function() {
      }, status: "rejected", reason: z }, st());
    } finally {
      _.p = n, f !== null && c.types !== null && (f.types = c.types), S.T = f;
    }
  }
  function Zv() {
  }
  function ac(l, t, a, u) {
    if (l.tag !== 5) throw Error(h(476));
    var e = s0(l).queue;
    i0(l, e, t, q, a === null ? Zv : function() {
      return d0(l), a(u);
    });
  }
  function s0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = { memoizedState: q, baseState: q, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Xt, lastRenderedState: q }, next: null };
    var a = {};
    return t.next = { memoizedState: a, baseState: a, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Xt, lastRenderedState: a }, next: null }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function d0(l) {
    var t = s0(l);
    t.next === null && (t = l.alternate.memoizedState), Pu(l, t.next.queue, {}, st());
  }
  function uc() {
    return jl(re);
  }
  function y0() {
    return Tl().memoizedState;
  }
  function v0() {
    return Tl().memoizedState;
  }
  function Vv(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = st();
          l = ea(a);
          var u = na(t, l, a);
          u !== null && (Il(u, t, a), Wu(u, t, a)), t = { cache: Rf() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Lv(l, t, a) {
    var u = st();
    a = { lane: u, revertLane: 0, gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, fn(l) ? o0(t, a) : (a = Ef(l, t, a, u), a !== null && (Il(a, l, u), h0(a, t, u)));
  }
  function m0(l, t, a) {
    var u = st();
    Pu(l, t, a, u);
  }
  function Pu(l, t, a, u) {
    var e = { lane: u, revertLane: 0, gesture: null, action: a, hasEagerState: false, eagerState: null, next: null };
    if (fn(l)) o0(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
        var f = t.lastRenderedState, c = n(f, a);
        if (e.hasEagerState = true, e.eagerState = c, ut(c, f)) return Xe(l, t, e, 0), dl === null && Ge(), false;
      } catch {
      } finally {
      }
      if (a = Ef(l, t, e, u), a !== null) return Il(a, l, u), h0(a, t, u), true;
    }
    return false;
  }
  function ec(l, t, a, u) {
    if (u = { lane: 2, revertLane: Bc(), gesture: null, action: u, hasEagerState: false, eagerState: null, next: null }, fn(l)) {
      if (t) throw Error(h(479));
    } else t = Ef(l, a, u, 2), t !== null && Il(t, l, 2);
  }
  function fn(l) {
    var t = l.alternate;
    return l === X || t !== null && t === X;
  }
  function o0(l, t) {
    yu = Pe = true;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function h0(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, zi(l, a);
    }
  }
  var le = { readContext: jl, use: an, useCallback: Sl, useContext: Sl, useEffect: Sl, useImperativeHandle: Sl, useLayoutEffect: Sl, useInsertionEffect: Sl, useMemo: Sl, useReducer: Sl, useRef: Sl, useState: Sl, useDebugValue: Sl, useDeferredValue: Sl, useTransition: Sl, useSyncExternalStore: Sl, useId: Sl, useHostTransitionStatus: Sl, useFormState: Sl, useActionState: Sl, useOptimistic: Sl, useMemoCache: Sl, useCacheRefresh: Sl };
  le.useEffectEvent = Sl;
  var r0 = { readContext: jl, use: an, useCallback: function(l, t) {
    return Zl().memoizedState = [l, t === void 0 ? null : t], l;
  }, useContext: jl, useEffect: Ps, useImperativeHandle: function(l, t, a) {
    a = a != null ? a.concat([l]) : null, en(4194308, 4, u0.bind(null, t, l), a);
  }, useLayoutEffect: function(l, t) {
    return en(4194308, 4, l, t);
  }, useInsertionEffect: function(l, t) {
    en(4, 2, l, t);
  }, useMemo: function(l, t) {
    var a = Zl();
    t = t === void 0 ? null : t;
    var u = l();
    if (Ya) {
      kt(true);
      try {
        l();
      } finally {
        kt(false);
      }
    }
    return a.memoizedState = [u, t], u;
  }, useReducer: function(l, t, a) {
    var u = Zl();
    if (a !== void 0) {
      var e = a(t);
      if (Ya) {
        kt(true);
        try {
          a(t);
        } finally {
          kt(false);
        }
      }
    } else e = t;
    return u.memoizedState = u.baseState = e, l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: l, lastRenderedState: e }, u.queue = l, l = l.dispatch = Lv.bind(null, X, l), [u.memoizedState, l];
  }, useRef: function(l) {
    var t = Zl();
    return l = { current: l }, t.memoizedState = l;
  }, useState: function(l) {
    l = Ff(l);
    var t = l.queue, a = m0.bind(null, X, t);
    return t.dispatch = a, [l.memoizedState, a];
  }, useDebugValue: lc, useDeferredValue: function(l, t) {
    var a = Zl();
    return tc(a, l, t);
  }, useTransition: function() {
    var l = Ff(false);
    return l = i0.bind(null, X, l.queue, true, false), Zl().memoizedState = l, [false, l];
  }, useSyncExternalStore: function(l, t, a) {
    var u = X, e = Zl();
    if (F) {
      if (a === void 0) throw Error(h(407));
      a = a();
    } else {
      if (a = t(), dl === null) throw Error(h(349));
      (W & 127) !== 0 || Ys(u, t, a);
    }
    e.memoizedState = a;
    var n = { value: a, getSnapshot: t };
    return e.queue = n, Ps(Gs.bind(null, u, n, l), [l]), u.flags |= 2048, mu(9, { destroy: void 0 }, xs.bind(null, u, n, a, t), null), a;
  }, useId: function() {
    var l = Zl(), t = dl.identifierPrefix;
    if (F) {
      var a = Dt, u = pt;
      a = (u & ~(1 << 32 - at(u) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = ln++, 0 < a && (t += "H" + a.toString(32)), t += "_";
    } else a = Yv++, t = "_" + t + "r_" + a.toString(32) + "_";
    return l.memoizedState = t;
  }, useHostTransitionStatus: uc, useFormState: Ws, useActionState: Ws, useOptimistic: function(l) {
    var t = Zl();
    t.memoizedState = t.baseState = l;
    var a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return t.queue = a, t = ec.bind(null, X, true, a), a.dispatch = t, [l, t];
  }, useMemoCache: Wf, useCacheRefresh: function() {
    return Zl().memoizedState = Vv.bind(null, X);
  }, useEffectEvent: function(l) {
    var t = Zl(), a = { impl: l };
    return t.memoizedState = a, function() {
      if ((ll & 2) !== 0) throw Error(h(440));
      return a.impl.apply(void 0, arguments);
    };
  } }, nc = { readContext: jl, use: an, useCallback: n0, useContext: jl, useEffect: Pf, useImperativeHandle: e0, useInsertionEffect: t0, useLayoutEffect: a0, useMemo: f0, useReducer: un, useRef: Is, useState: function() {
    return un(Xt);
  }, useDebugValue: lc, useDeferredValue: function(l, t) {
    var a = Tl();
    return c0(a, nl.memoizedState, l, t);
  }, useTransition: function() {
    var l = un(Xt)[0], t = Tl().memoizedState;
    return [typeof l == "boolean" ? l : Iu(l), t];
  }, useSyncExternalStore: Bs, useId: y0, useHostTransitionStatus: uc, useFormState: $s, useActionState: $s, useOptimistic: function(l, t) {
    var a = Tl();
    return Zs(a, nl, l, t);
  }, useMemoCache: Wf, useCacheRefresh: v0 };
  nc.useEffectEvent = l0;
  var g0 = { readContext: jl, use: an, useCallback: n0, useContext: jl, useEffect: Pf, useImperativeHandle: e0, useInsertionEffect: t0, useLayoutEffect: a0, useMemo: f0, useReducer: kf, useRef: Is, useState: function() {
    return kf(Xt);
  }, useDebugValue: lc, useDeferredValue: function(l, t) {
    var a = Tl();
    return nl === null ? tc(a, l, t) : c0(a, nl.memoizedState, l, t);
  }, useTransition: function() {
    var l = kf(Xt)[0], t = Tl().memoizedState;
    return [typeof l == "boolean" ? l : Iu(l), t];
  }, useSyncExternalStore: Bs, useId: y0, useHostTransitionStatus: uc, useFormState: Fs, useActionState: Fs, useOptimistic: function(l, t) {
    var a = Tl();
    return nl !== null ? Zs(a, nl, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
  }, useMemoCache: Wf, useCacheRefresh: v0 };
  g0.useEffectEvent = l0;
  function fc(l, t, a, u) {
    t = l.memoizedState, a = a(u, t), a = a == null ? t : C({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var cc = { enqueueSetState: function(l, t, a) {
    l = l._reactInternals;
    var u = st(), e = ea(u);
    e.payload = t, a != null && (e.callback = a), t = na(l, e, u), t !== null && (Il(t, l, u), Wu(t, l, u));
  }, enqueueReplaceState: function(l, t, a) {
    l = l._reactInternals;
    var u = st(), e = ea(u);
    e.tag = 1, e.payload = t, a != null && (e.callback = a), t = na(l, e, u), t !== null && (Il(t, l, u), Wu(t, l, u));
  }, enqueueForceUpdate: function(l, t) {
    l = l._reactInternals;
    var a = st(), u = ea(a);
    u.tag = 2, t != null && (u.callback = t), t = na(l, u, a), t !== null && (Il(t, l, a), Wu(t, l, a));
  } };
  function S0(l, t, a, u, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Xu(a, u) || !Xu(e, n) : true;
  }
  function b0(l, t, a, u) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== l && cc.enqueueReplaceState(t, t.state, null);
  }
  function xa(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t) u !== "ref" && (a[u] = t[u]);
    }
    if (l = l.defaultProps) {
      a === t && (a = C({}, a));
      for (var e in l) a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  function z0(l) {
    xe(l);
  }
  function E0(l) {
    console.error(l);
  }
  function T0(l) {
    xe(l);
  }
  function cn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function A0(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, { componentStack: a.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function ic(l, t, a) {
    return a = ea(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      cn(l, t);
    }, a;
  }
  function _0(l) {
    return l = ea(l), l.tag = 3, l;
  }
  function O0(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        A0(t, a, u);
      };
    }
    var f = a.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      A0(t, a, u), typeof e != "function" && (ya === null ? ya = /* @__PURE__ */ new Set([this]) : ya.add(this));
      var c = u.stack;
      this.componentDidCatch(u.value, { componentStack: c !== null ? c : "" });
    });
  }
  function Kv(l, t, a, u, e) {
    if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (t = a.alternate, t !== null && nu(t, a, e, true), a = nt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return gt === null ? zn() : a.alternate === null && bl === 0 && (bl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = e, u === We ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([u]) : t.add(u), Cc(l, u, e)), false;
          case 22:
            return a.flags |= 65536, u === We ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([u]) }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([u]) : a.add(u)), Cc(l, u, e)), false;
        }
        throw Error(h(435, a.tag));
      }
      return Cc(l, u, e), zn(), false;
    }
    if (F) return t = nt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, u !== pf && (l = Error(h(422), { cause: u }), Vu(mt(l, a)))) : (u !== pf && (t = Error(h(423), { cause: u }), Vu(mt(t, a))), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, u = mt(u, a), e = ic(l.stateNode, u, e), xf(l, e), bl !== 4 && (bl = 2)), false;
    var n = Error(h(520), { cause: u });
    if (n = mt(n, a), ie === null ? ie = [n] : ie.push(n), bl !== 4 && (bl = 2), t === null) return true;
    u = mt(u, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = e & -e, a.lanes |= l, l = ic(a.stateNode, u, l), xf(a, l), false;
        case 1:
          if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ya === null || !ya.has(n)))) return a.flags |= 65536, e &= -e, a.lanes |= e, e = _0(e), O0(e, l, a, u), xf(a, e), false;
      }
      a = a.return;
    } while (a !== null);
    return false;
  }
  var sc = Error(h(461)), Ol = false;
  function ql(l, t, a, u) {
    t.child = l === null ? Us(t, null, a, u) : Ba(t, l.child, a, u);
  }
  function M0(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var f = {};
      for (var c in u) c !== "ref" && (f[c] = u[c]);
    } else f = u;
    return Ra(t), u = Lf(l, t, a, f, n, e), c = Kf(), l !== null && !Ol ? (Jf(l, t, e), Qt(l, t, e)) : (F && c && Of(t), t.flags |= 1, ql(l, t, u, e), t.child);
  }
  function p0(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !Tf(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, D0(l, t, n, u, e)) : (l = Ze(a.type, null, u, t, t.mode, e), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !gc(l, e)) {
      var f = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Xu, a(f, u) && l.ref === t.ref) return Qt(l, t, e);
    }
    return t.flags |= 1, l = qt(n, u), l.ref = t.ref, l.return = t, t.child = l;
  }
  function D0(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Xu(n, u) && l.ref === t.ref) if (Ol = false, t.pendingProps = u = n, gc(l, e)) (l.flags & 131072) !== 0 && (Ol = true);
      else return t.lanes = l.lanes, Qt(l, t, e);
    }
    return dc(l, t, a, u, e);
  }
  function U0(l, t, a, u) {
    var e = u.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), u.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | a : a, l !== null) {
          for (u = t.child = l.child, e = 0; u !== null; ) e = e | u.lanes | u.childLanes, u = u.sibling;
          u = e & ~n;
        } else u = 0, t.child = null;
        return N0(l, t, n, a, u);
      }
      if ((a & 536870912) !== 0) t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Je(t, n !== null ? n.cachePool : null), n !== null ? Rs(t, n) : Xf(), Cs(t);
      else return u = t.lanes = 536870912, N0(l, t, n !== null ? n.baseLanes | a : a, a, u);
    } else n !== null ? (Je(t, n.cachePool), Rs(t, n), ca(), t.memoizedState = null) : (l !== null && Je(t, null), Xf(), ca());
    return ql(l, t, e, a), t.child;
  }
  function te(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
  }
  function N0(l, t, a, u, e) {
    var n = jf();
    return n = n === null ? null : { parent: Al._currentValue, pool: n }, t.memoizedState = { baseLanes: a, cachePool: n }, l !== null && Je(t, null), Xf(), Cs(t), l !== null && nu(l, t, u, true), t.childLanes = e, null;
  }
  function sn(l, t) {
    return t = yn({ mode: t.mode, children: t.children }, l.mode), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function H0(l, t, a) {
    return Ba(t, l.child, null, a), l = sn(t, t.pendingProps), l.flags |= 2, ft(t), t.memoizedState = null, l;
  }
  function Jv(l, t, a) {
    var u = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (F) {
        if (u.mode === "hidden") return l = sn(t, u), t.lanes = 536870912, te(null, l);
        if (Zf(t), (l = ml) ? (l = Vd(l, rt), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = { dehydrated: l, treeContext: Pt !== null ? { id: pt, overflow: Dt } : null, retryLane: 536870912, hydrationErrors: null }, a = os(l), a.return = t, t.child = a, Cl = t, ml = null)) : l = null, l === null) throw ta(t);
        return t.lanes = 536870912, null;
      }
      return sn(t, u);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (Zf(t), e) if (t.flags & 256) t.flags &= -257, t = H0(l, t, a);
      else if (t.memoizedState !== null) t.child = l.child, t.flags |= 128, t = null;
      else throw Error(h(558));
      else if (Ol || nu(l, t, a, false), e = (a & l.childLanes) !== 0, Ol || e) {
        if (u = dl, u !== null && (f = Ei(u, a), f !== 0 && f !== n.retryLane)) throw n.retryLane = f, Da(l, f), Il(u, l, f), sc;
        zn(), t = H0(l, t, a);
      } else l = n.treeContext, ml = St(f.nextSibling), Cl = t, F = true, la = null, rt = false, l !== null && gs(t, l), t = sn(t, u), t.flags |= 4096;
      return t;
    }
    return l = qt(l.child, { mode: u.mode, children: u.children }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function dn(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(h(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function dc(l, t, a, u, e) {
    return Ra(t), a = Lf(l, t, a, u, void 0, e), u = Kf(), l !== null && !Ol ? (Jf(l, t, e), Qt(l, t, e)) : (F && u && Of(t), t.flags |= 1, ql(l, t, a, e), t.child);
  }
  function R0(l, t, a, u, e, n) {
    return Ra(t), t.updateQueue = null, a = qs(t, u, a, e), js(l), u = Kf(), l !== null && !Ol ? (Jf(l, t, n), Qt(l, t, n)) : (F && u && Of(t), t.flags |= 1, ql(l, t, a, n), t.child);
  }
  function C0(l, t, a, u, e) {
    if (Ra(t), t.stateNode === null) {
      var n = tu, f = a.contextType;
      typeof f == "object" && f !== null && (n = jl(f)), n = new a(u, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = cc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = u, n.state = t.memoizedState, n.refs = {}, Bf(t), f = a.contextType, n.context = typeof f == "object" && f !== null ? jl(f) : tu, n.state = t.memoizedState, f = a.getDerivedStateFromProps, typeof f == "function" && (fc(t, a, f, u), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && cc.enqueueReplaceState(n, n.state, null), ku(t, u, n, e), $u(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = true;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = xa(a, c);
      n.props = i;
      var m = n.context, g = a.contextType;
      f = tu, typeof g == "object" && g !== null && (f = jl(g));
      var z = a.getDerivedStateFromProps;
      g = typeof z == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || m !== f) && b0(t, n, u, f), ua = false;
      var o = t.memoizedState;
      n.state = o, ku(t, u, n, e), $u(), m = t.memoizedState, c || o !== m || ua ? (typeof z == "function" && (fc(t, a, z, u), m = t.memoizedState), (i = ua || S0(t, a, i, u, o, m, f)) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = m), n.props = u, n.state = m, n.context = f, u = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = false);
    } else {
      n = t.stateNode, Yf(l, t), f = t.memoizedProps, g = xa(a, f), n.props = g, z = t.pendingProps, o = n.context, m = a.contextType, i = tu, typeof m == "object" && m !== null && (i = jl(m)), c = a.getDerivedStateFromProps, (m = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== z || o !== i) && b0(t, n, u, i), ua = false, o = t.memoizedState, n.state = o, ku(t, u, n, e), $u();
      var r = t.memoizedState;
      f !== z || o !== r || ua || l !== null && l.dependencies !== null && Le(l.dependencies) ? (typeof c == "function" && (fc(t, a, c, u), r = t.memoizedState), (g = ua || S0(t, a, g, u, o, r, i) || l !== null && l.dependencies !== null && Le(l.dependencies)) ? (m || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, r, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(u, r, i)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = r), n.props = u, n.state = r, n.context = i, u = g) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 1024), u = false);
    }
    return n = u, dn(l, t), u = (t.flags & 128) !== 0, n || u ? (n = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && u ? (t.child = Ba(t, l.child, null, e), t.child = Ba(t, null, a, e)) : ql(l, t, a, e), t.memoizedState = n.state, l = t.child) : l = Qt(l, t, e), l;
  }
  function j0(l, t, a, u) {
    return Na(), t.flags |= 256, ql(l, t, a, u), t.child;
  }
  var yc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function vc(l) {
    return { baseLanes: l, cachePool: As() };
  }
  function mc(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= it), l;
  }
  function q0(l, t, a) {
    var u = t.pendingProps, e = false, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? false : (El.current & 2) !== 0), f && (e = true, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (F) {
        if (e ? fa(t) : ca(), (l = ml) ? (l = Vd(l, rt), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = { dehydrated: l, treeContext: Pt !== null ? { id: pt, overflow: Dt } : null, retryLane: 536870912, hydrationErrors: null }, a = os(l), a.return = t, t.child = a, Cl = t, ml = null)) : l = null, l === null) throw ta(t);
        return $c(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = u.children;
      return u = u.fallback, e ? (ca(), e = t.mode, c = yn({ mode: "hidden", children: c }, e), u = Ua(u, e, a, null), c.return = t, u.return = t, c.sibling = u, t.child = c, u = t.child, u.memoizedState = vc(a), u.childLanes = mc(l, f, a), t.memoizedState = yc, te(null, u)) : (fa(t), oc(t, c));
    }
    var i = l.memoizedState;
    if (i !== null && (c = i.dehydrated, c !== null)) {
      if (n) t.flags & 256 ? (fa(t), t.flags &= -257, t = hc(l, t, a)) : t.memoizedState !== null ? (ca(), t.child = l.child, t.flags |= 128, t = null) : (ca(), c = u.fallback, e = t.mode, u = yn({ mode: "visible", children: u.children }, e), c = Ua(c, e, a, null), c.flags |= 2, u.return = t, c.return = t, u.sibling = c, t.child = u, Ba(t, l.child, null, a), u = t.child, u.memoizedState = vc(a), u.childLanes = mc(l, f, a), t.memoizedState = yc, t = te(null, u));
      else if (fa(t), $c(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var m = f.dgst;
        f = m, u = Error(h(419)), u.stack = "", u.digest = f, Vu({ value: u, source: null, stack: null }), t = hc(l, t, a);
      } else if (Ol || nu(l, t, a, false), f = (a & l.childLanes) !== 0, Ol || f) {
        if (f = dl, f !== null && (u = Ei(f, a), u !== 0 && u !== i.retryLane)) throw i.retryLane = u, Da(l, u), Il(f, l, u), sc;
        Wc(c) || zn(), t = hc(l, t, a);
      } else Wc(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, ml = St(c.nextSibling), Cl = t, F = true, la = null, rt = false, l !== null && gs(t, l), t = oc(t, u.children), t.flags |= 4096);
      return t;
    }
    return e ? (ca(), c = u.fallback, e = t.mode, i = l.child, m = i.sibling, u = qt(i, { mode: "hidden", children: u.children }), u.subtreeFlags = i.subtreeFlags & 65011712, m !== null ? c = qt(m, c) : (c = Ua(c, e, a, null), c.flags |= 2), c.return = t, u.return = t, u.sibling = c, t.child = u, te(null, u), u = t.child, c = l.child.memoizedState, c === null ? c = vc(a) : (e = c.cachePool, e !== null ? (i = Al._currentValue, e = e.parent !== i ? { parent: i, pool: i } : e) : e = As(), c = { baseLanes: c.baseLanes | a, cachePool: e }), u.memoizedState = c, u.childLanes = mc(l, f, a), t.memoizedState = yc, te(l.child, u)) : (fa(t), a = l.child, l = a.sibling, a = qt(a, { mode: "visible", children: u.children }), a.return = t, a.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = a, t.memoizedState = null, a);
  }
  function oc(l, t) {
    return t = yn({ mode: "visible", children: t }, l.mode), t.return = l, l.child = t;
  }
  function yn(l, t) {
    return l = et(22, l, null, t), l.lanes = 0, l;
  }
  function hc(l, t, a) {
    return Ba(t, l.child, null, a), l = oc(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l;
  }
  function B0(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), Nf(l.return, t, a);
  }
  function rc(l, t, a, u, e, n) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: u, tail: a, tailMode: e, treeForkCount: n } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = u, f.tail = a, f.tailMode = e, f.treeForkCount = n);
  }
  function Y0(l, t, a) {
    var u = t.pendingProps, e = u.revealOrder, n = u.tail;
    u = u.children;
    var f = El.current, c = (f & 2) !== 0;
    if (c ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, O(El, f), ql(l, t, u, a), u = F ? Zu : 0, !c && l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null; ) {
      if (l.tag === 13) l.memoizedState !== null && B0(l, a, t);
      else if (l.tag === 19) B0(l, a, t);
      else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break l;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) break l;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    switch (e) {
      case "forwards":
        for (a = t.child, e = null; a !== null; ) l = a.alternate, l !== null && Ie(l) === null && (e = a), a = a.sibling;
        a = e, a === null ? (e = t.child, t.child = null) : (e = a.sibling, a.sibling = null), rc(t, false, e, a, n, u);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && Ie(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = a, a = e, e = l;
        }
        rc(t, true, a, null, n, u);
        break;
      case "together":
        rc(t, false, null, null, void 0, u);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Qt(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), da |= t.lanes, (a & t.childLanes) === 0) if (l !== null) {
      if (nu(l, t, a, false), (a & t.childLanes) === 0) return null;
    } else return null;
    if (l !== null && t.child !== l.child) throw Error(h(153));
    if (t.child !== null) {
      for (l = t.child, a = qt(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; ) l = l.sibling, a = a.sibling = qt(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function gc(l, t) {
    return (l.lanes & t) !== 0 ? true : (l = l.dependencies, !!(l !== null && Le(l)));
  }
  function wv(l, t, a) {
    switch (t.tag) {
      case 3:
        Ql(t, t.stateNode.containerInfo), aa(t, Al, l.memoizedState.cache), Na();
        break;
      case 27:
      case 5:
        pu(t);
        break;
      case 4:
        Ql(t, t.stateNode.containerInfo);
        break;
      case 10:
        aa(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, Zf(t), null;
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null) return u.dehydrated !== null ? (fa(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? q0(l, t, a) : (fa(t), l = Qt(l, t, a), l !== null ? l.sibling : null);
        fa(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (u = (a & t.childLanes) !== 0, u || (nu(l, t, a, false), u = (a & t.childLanes) !== 0), e) {
          if (u) return Y0(l, t, a);
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), O(El, El.current), u) break;
        return null;
      case 22:
        return t.lanes = 0, U0(l, t, a, t.pendingProps);
      case 24:
        aa(t, Al, l.memoizedState.cache);
    }
    return Qt(l, t, a);
  }
  function x0(l, t, a) {
    if (l !== null) if (l.memoizedProps !== t.pendingProps) Ol = true;
    else {
      if (!gc(l, a) && (t.flags & 128) === 0) return Ol = false, wv(l, t, a);
      Ol = (l.flags & 131072) !== 0;
    }
    else Ol = false, F && (t.flags & 1048576) !== 0 && rs(t, Zu, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var u = t.pendingProps;
          if (l = ja(t.elementType), t.type = l, typeof l == "function") Tf(l) ? (u = xa(l, u), t.tag = 1, t = C0(null, t, l, u, a)) : (t.tag = 0, t = dc(null, t, l, u, a));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === Pl) {
                t.tag = 11, t = M0(null, t, l, u, a);
                break l;
              } else if (e === k) {
                t.tag = 14, t = p0(null, t, l, u, a);
                break l;
              }
            }
            throw t = Ht(l) || l, Error(h(306, t, ""));
          }
        }
        return t;
      case 0:
        return dc(l, t, t.type, t.pendingProps, a);
      case 1:
        return u = t.type, e = xa(u, t.pendingProps), C0(l, t, u, e, a);
      case 3:
        l: {
          if (Ql(t, t.stateNode.containerInfo), l === null) throw Error(h(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Yf(l, t), ku(t, u, null, a);
          var f = t.memoizedState;
          if (u = f.cache, aa(t, Al, u), u !== n.cache && Hf(t, [Al], a, true), $u(), u = f.element, n.isDehydrated) if (n = { element: u, isDehydrated: false, cache: f.cache }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
            t = j0(l, t, u, a);
            break l;
          } else if (u !== e) {
            e = mt(Error(h(424)), t), Vu(e), t = j0(l, t, u, a);
            break l;
          } else {
            switch (l = t.stateNode.containerInfo, l.nodeType) {
              case 9:
                l = l.body;
                break;
              default:
                l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
            }
            for (ml = St(l.firstChild), Cl = t, F = true, la = null, rt = true, a = Us(t, null, u, a), t.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
          }
          else {
            if (Na(), u === e) {
              t = Qt(l, t, a);
              break l;
            }
            ql(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return dn(l, t), l === null ? (a = $d(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : F || (a = t.type, l = t.pendingProps, u = pn(L.current).createElement(a), u[Rl] = t, u[Jl] = l, Bl(u, a, l), Nl(u), t.stateNode = u) : t.memoizedState = $d(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
      case 27:
        return pu(t), l === null && F && (u = t.stateNode = Jd(t.type, t.pendingProps, L.current), Cl = t, rt = true, e = ml, ha(t.type) ? (kc = e, ml = St(u.firstChild)) : ml = e), ql(l, t, t.pendingProps.children, a), dn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && F && ((e = u = ml) && (u = Am(u, t.type, t.pendingProps, rt), u !== null ? (t.stateNode = u, Cl = t, ml = St(u.firstChild), rt = false, e = true) : e = false), e || ta(t)), pu(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, u = n.children, Kc(e, n) ? u = null : f !== null && Kc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Lf(l, t, xv, null, null, a), re._currentValue = e), dn(l, t), ql(l, t, u, a), t.child;
      case 6:
        return l === null && F && ((l = a = ml) && (a = _m(a, t.pendingProps, rt), a !== null ? (t.stateNode = a, Cl = t, ml = null, l = true) : l = false), l || ta(t)), null;
      case 13:
        return q0(l, t, a);
      case 4:
        return Ql(t, t.stateNode.containerInfo), u = t.pendingProps, l === null ? t.child = Ba(t, null, u, a) : ql(l, t, u, a), t.child;
      case 11:
        return M0(l, t, t.type, t.pendingProps, a);
      case 7:
        return ql(l, t, t.pendingProps, a), t.child;
      case 8:
        return ql(l, t, t.pendingProps.children, a), t.child;
      case 12:
        return ql(l, t, t.pendingProps.children, a), t.child;
      case 10:
        return u = t.pendingProps, aa(t, t.type, u.value), ql(l, t, u.children, a), t.child;
      case 9:
        return e = t.type._context, u = t.pendingProps.children, Ra(t), e = jl(e), u = u(e), t.flags |= 1, ql(l, t, u, a), t.child;
      case 14:
        return p0(l, t, t.type, t.pendingProps, a);
      case 15:
        return D0(l, t, t.type, t.pendingProps, a);
      case 19:
        return Y0(l, t, a);
      case 31:
        return Jv(l, t, a);
      case 22:
        return U0(l, t, a, t.pendingProps);
      case 24:
        return Ra(t), u = jl(Al), l === null ? (e = jf(), e === null && (e = dl, n = Rf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= a), e = n), t.memoizedState = { parent: u, cache: e }, Bf(t), aa(t, Al, e)) : ((l.lanes & a) !== 0 && (Yf(l, t), ku(t, null, null, a), $u()), e = l.memoizedState, n = t.memoizedState, e.parent !== u ? (e = { parent: u, cache: u }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), aa(t, Al, u)) : (u = n.cache, aa(t, Al, u), u !== e.cache && Hf(t, [Al], a, true))), ql(l, t, t.pendingProps.children, a), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(h(156, t.tag));
  }
  function Zt(l) {
    l.flags |= 4;
  }
  function Sc(l, t, a, u, e) {
    if ((t = (l.mode & 32) !== 0) && (t = false), t) {
      if (l.flags |= 16777216, (e & 335544128) === e) if (l.stateNode.complete) l.flags |= 8192;
      else if (yd()) l.flags |= 8192;
      else throw qa = We, qf;
    } else l.flags &= -16777217;
  }
  function G0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
    else if (l.flags |= 16777216, !ly(t)) if (yd()) l.flags |= 8192;
    else throw qa = We, qf;
  }
  function vn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Si() : 536870912, l.lanes |= t, gu |= t);
  }
  function ae(l, t) {
    if (!F) switch (l.tailMode) {
      case "hidden":
        t = l.tail;
        for (var a = null; t !== null; ) t.alternate !== null && (a = t), t = t.sibling;
        a === null ? l.tail = null : a.sibling = null;
        break;
      case "collapsed":
        a = l.tail;
        for (var u = null; a !== null; ) a.alternate !== null && (u = a), a = a.sibling;
        u === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : u.sibling = null;
    }
  }
  function ol(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, a = 0, u = 0;
    if (t) for (var e = l.child; e !== null; ) a |= e.lanes | e.childLanes, u |= e.subtreeFlags & 65011712, u |= e.flags & 65011712, e.return = l, e = e.sibling;
    else for (e = l.child; e !== null; ) a |= e.lanes | e.childLanes, u |= e.subtreeFlags, u |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= u, l.childLanes = a, t;
  }
  function Wv(l, t, a) {
    var u = t.pendingProps;
    switch (Mf(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ol(t), null;
      case 1:
        return ol(t), null;
      case 3:
        return a = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), xt(Al), zl(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (eu(t) ? Zt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Df())), ol(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (Zt(t), n !== null ? (ol(t), G0(t, n)) : (ol(t), Sc(t, e, null, u, a))) : n ? n !== l.memoizedState ? (Zt(t), ol(t), G0(t, n)) : (ol(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== u && Zt(t), ol(t), Sc(t, e, l, u, a)), null;
      case 27:
        if (Te(t), a = L.current, e = t.type, l !== null && t.stateNode != null) l.memoizedProps !== u && Zt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(h(166));
            return ol(t), null;
          }
          l = U.current, eu(t) ? Ss(t) : (l = Jd(e, u, a), t.stateNode = l, Zt(t));
        }
        return ol(t), null;
      case 5:
        if (Te(t), e = t.type, l !== null && t.stateNode != null) l.memoizedProps !== u && Zt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(h(166));
            return ol(t), null;
          }
          if (n = U.current, eu(t)) Ss(t);
          else {
            var f = pn(L.current);
            switch (n) {
              case 1:
                n = f.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                n = f.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    n = f.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    n = f.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                    break;
                  case "script":
                    n = f.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild);
                    break;
                  case "select":
                    n = typeof u.is == "string" ? f.createElement("select", { is: u.is }) : f.createElement("select"), u.multiple ? n.multiple = true : u.size && (n.size = u.size);
                    break;
                  default:
                    n = typeof u.is == "string" ? f.createElement(e, { is: u.is }) : f.createElement(e);
                }
            }
            n[Rl] = t, n[Jl] = u;
            l: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break l;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t) break l;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = n;
            l: switch (Bl(n, e, u), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break l;
              case "img":
                u = true;
                break l;
              default:
                u = false;
            }
            u && Zt(t);
          }
        }
        return ol(t), Sc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== u && Zt(t);
        else {
          if (typeof u != "string" && t.stateNode === null) throw Error(h(166));
          if (l = L.current, eu(t)) {
            if (l = t.stateNode, a = t.memoizedProps, u = null, e = Cl, e !== null) switch (e.tag) {
              case 27:
              case 5:
                u = e.memoizedProps;
            }
            l[Rl] = t, l = !!(l.nodeValue === a || u !== null && u.suppressHydrationWarning === true || qd(l.nodeValue, a)), l || ta(t, true);
          } else l = pn(l).createTextNode(u), l[Rl] = t, t.stateNode = l;
        }
        return ol(t), null;
      case 31:
        if (a = t.memoizedState, l === null || l.memoizedState !== null) {
          if (u = eu(t), a !== null) {
            if (l === null) {
              if (!u) throw Error(h(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(557));
              l[Rl] = t;
            } else Na(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ol(t), l = false;
          } else a = Df(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), l = true;
          if (!l) return t.flags & 256 ? (ft(t), t) : (ft(t), null);
          if ((t.flags & 128) !== 0) throw Error(h(558));
        }
        return ol(t), null;
      case 13:
        if (u = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = eu(t), u !== null && u.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(h(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(h(317));
              e[Rl] = t;
            } else Na(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ol(t), e = false;
          } else e = Df(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = true;
          if (!e) return t.flags & 256 ? (ft(t), t) : (ft(t), null);
        }
        return ft(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = u !== null, l = l !== null && l.memoizedState !== null, a && (u = t.child, e = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool), n = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== e && (u.flags |= 2048)), a !== l && a && (t.child.flags |= 8192), vn(t, t.updateQueue), ol(t), null);
      case 4:
        return zl(), l === null && Xc(t.stateNode.containerInfo), ol(t), null;
      case 10:
        return xt(t.type), ol(t), null;
      case 19:
        if (E(El), u = t.memoizedState, u === null) return ol(t), null;
        if (e = (t.flags & 128) !== 0, n = u.rendering, n === null) if (e) ae(u, false);
        else {
          if (bl !== 0 || l !== null && (l.flags & 128) !== 0) for (l = t.child; l !== null; ) {
            if (n = Ie(l), n !== null) {
              for (t.flags |= 128, ae(u, false), l = n.updateQueue, t.updateQueue = l, vn(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; ) ms(a, l), a = a.sibling;
              return O(El, El.current & 1 | 2), F && Bt(t, u.treeForkCount), t.child;
            }
            l = l.sibling;
          }
          u.tail !== null && lt() > gn && (t.flags |= 128, e = true, ae(u, false), t.lanes = 4194304);
        }
        else {
          if (!e) if (l = Ie(n), l !== null) {
            if (t.flags |= 128, e = true, l = l.updateQueue, t.updateQueue = l, vn(t, l), ae(u, true), u.tail === null && u.tailMode === "hidden" && !n.alternate && !F) return ol(t), null;
          } else 2 * lt() - u.renderingStartTime > gn && a !== 536870912 && (t.flags |= 128, e = true, ae(u, false), t.lanes = 4194304);
          u.isBackwards ? (n.sibling = t.child, t.child = n) : (l = u.last, l !== null ? l.sibling = n : t.child = n, u.last = n);
        }
        return u.tail !== null ? (l = u.tail, u.rendering = l, u.tail = l.sibling, u.renderingStartTime = lt(), l.sibling = null, a = El.current, O(El, e ? a & 1 | 2 : a & 1), F && Bt(t, u.treeForkCount), l) : (ol(t), null);
      case 22:
      case 23:
        return ft(t), Qf(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (ol(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ol(t), a = t.updateQueue, a !== null && vn(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), l !== null && E(Ca), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), xt(Al), ol(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function $v(l, t) {
    switch (Mf(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return xt(Al), zl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Te(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (ft(t), t.alternate === null) throw Error(h(340));
          Na();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (ft(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null) throw Error(h(340));
          Na();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return E(El), null;
      case 4:
        return zl(), null;
      case 10:
        return xt(t.type), null;
      case 22:
      case 23:
        return ft(t), Qf(), l !== null && E(Ca), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return xt(Al), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function X0(l, t) {
    switch (Mf(t), t.tag) {
      case 3:
        xt(Al), zl();
        break;
      case 26:
      case 27:
      case 5:
        Te(t);
        break;
      case 4:
        zl();
        break;
      case 31:
        t.memoizedState !== null && ft(t);
        break;
      case 13:
        ft(t);
        break;
      case 19:
        E(El);
        break;
      case 10:
        xt(t.type);
        break;
      case 22:
      case 23:
        ft(t), Qf(), l !== null && E(Ca);
        break;
      case 24:
        xt(Al);
    }
  }
  function ue(l, t) {
    try {
      var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create, f = a.inst;
            u = n(), f.destroy = u;
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (c) {
      ul(t, t.return, c);
    }
  }
  function ia(l, t, a) {
    try {
      var u = t.updateQueue, e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var f = u.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = t;
              var i = a, m = c;
              try {
                m();
              } catch (g) {
                ul(e, i, g);
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (g) {
      ul(t, t.return, g);
    }
  }
  function Q0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Hs(t, a);
      } catch (u) {
        ul(l, l.return, u);
      }
    }
  }
  function Z0(l, t, a) {
    a.props = xa(l.type, l.memoizedProps), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (u) {
      ul(l, t, u);
    }
  }
  function ee(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof a == "function" ? l.refCleanup = a(u) : a.current = u;
      }
    } catch (e) {
      ul(l, t, e);
    }
  }
  function Ut(l, t) {
    var a = l.ref, u = l.refCleanup;
    if (a !== null) if (typeof u == "function") try {
      u();
    } catch (e) {
      ul(l, t, e);
    } finally {
      l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
    }
    else if (typeof a == "function") try {
      a(null);
    } catch (e) {
      ul(l, t, e);
    }
    else a.current = null;
  }
  function V0(l) {
    var t = l.type, a = l.memoizedProps, u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? u.src = a.src : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      ul(l, l.return, e);
    }
  }
  function bc(l, t, a) {
    try {
      var u = l.stateNode;
      gm(u, l.type, a, t), u[Jl] = t;
    } catch (e) {
      ul(l, l.return, e);
    }
  }
  function L0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ha(l.type) || l.tag === 4;
  }
  function zc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || L0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && ha(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Ec(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6) l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Ct));
    else if (u !== 4 && (u === 27 && ha(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null)) for (Ec(l, t, a), l = l.sibling; l !== null; ) Ec(l, t, a), l = l.sibling;
  }
  function mn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6) l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (u !== 4 && (u === 27 && ha(l.type) && (a = l.stateNode), l = l.child, l !== null)) for (mn(l, t, a), l = l.sibling; l !== null; ) mn(l, t, a), l = l.sibling;
  }
  function K0(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
      Bl(t, u, a), t[Rl] = l, t[Jl] = a;
    } catch (n) {
      ul(l, l.return, n);
    }
  }
  var Vt = false, Ml = false, Tc = false, J0 = typeof WeakSet == "function" ? WeakSet : Set, Hl = null;
  function kv(l, t) {
    if (l = l.containerInfo, Vc = jn, l = es(l), hf(l)) {
      if ("selectionStart" in l) var a = { start: l.selectionStart, end: l.selectionEnd };
      else l: {
        a = (a = l.ownerDocument) && a.defaultView || window;
        var u = a.getSelection && a.getSelection();
        if (u && u.rangeCount !== 0) {
          a = u.anchorNode;
          var e = u.anchorOffset, n = u.focusNode;
          u = u.focusOffset;
          try {
            a.nodeType, n.nodeType;
          } catch {
            a = null;
            break l;
          }
          var f = 0, c = -1, i = -1, m = 0, g = 0, z = l, o = null;
          t: for (; ; ) {
            for (var r; z !== a || e !== 0 && z.nodeType !== 3 || (c = f + e), z !== n || u !== 0 && z.nodeType !== 3 || (i = f + u), z.nodeType === 3 && (f += z.nodeValue.length), (r = z.firstChild) !== null; ) o = z, z = r;
            for (; ; ) {
              if (z === l) break t;
              if (o === a && ++m === e && (c = f), o === n && ++g === u && (i = f), (r = z.nextSibling) !== null) break;
              z = o, o = z.parentNode;
            }
            z = r;
          }
          a = c === -1 || i === -1 ? null : { start: c, end: i };
        } else a = null;
      }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Lc = { focusedElem: l, selectionRange: a }, jn = false, Hl = t; Hl !== null; ) if (t = Hl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null) l.return = t, Hl = l;
    else for (; Hl !== null; ) {
      switch (t = Hl, n = t.alternate, l = t.flags, t.tag) {
        case 0:
          if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null)) for (a = 0; a < l.length; a++) e = l[a], e.ref.impl = e.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((l & 1024) !== 0 && n !== null) {
            l = void 0, a = t, e = n.memoizedProps, n = n.memoizedState, u = a.stateNode;
            try {
              var M = xa(a.type, e);
              l = u.getSnapshotBeforeUpdate(M, n), u.__reactInternalSnapshotBeforeUpdate = l;
            } catch (j) {
              ul(a, a.return, j);
            }
          }
          break;
        case 3:
          if ((l & 1024) !== 0) {
            if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9) wc(l);
            else if (a === 1) switch (l.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                wc(l);
                break;
              default:
                l.textContent = "";
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
          if ((l & 1024) !== 0) throw Error(h(163));
      }
      if (l = t.sibling, l !== null) {
        l.return = t.return, Hl = l;
        break;
      }
      Hl = t.return;
    }
  }
  function w0(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Kt(l, a), u & 4 && ue(5, a);
        break;
      case 1:
        if (Kt(l, a), u & 4) if (l = a.stateNode, t === null) try {
          l.componentDidMount();
        } catch (f) {
          ul(a, a.return, f);
        }
        else {
          var e = xa(a.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
          } catch (f) {
            ul(a, a.return, f);
          }
        }
        u & 64 && Q0(a), u & 512 && ee(a, a.return);
        break;
      case 3:
        if (Kt(l, a), u & 64 && (l = a.updateQueue, l !== null)) {
          if (t = null, a.child !== null) switch (a.child.tag) {
            case 27:
            case 5:
              t = a.child.stateNode;
              break;
            case 1:
              t = a.child.stateNode;
          }
          try {
            Hs(l, t);
          } catch (f) {
            ul(a, a.return, f);
          }
        }
        break;
      case 27:
        t === null && u & 4 && K0(a);
      case 26:
      case 5:
        Kt(l, a), t === null && u & 4 && V0(a), u & 512 && ee(a, a.return);
        break;
      case 12:
        Kt(l, a);
        break;
      case 31:
        Kt(l, a), u & 4 && k0(l, a);
        break;
      case 13:
        Kt(l, a), u & 4 && F0(l, a), u & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = nm.bind(null, a), Om(l, a))));
        break;
      case 22:
        if (u = a.memoizedState !== null || Vt, !u) {
          t = t !== null && t.memoizedState !== null || Ml, e = Vt;
          var n = Ml;
          Vt = u, (Ml = t) && !n ? Jt(l, a, (a.subtreeFlags & 8772) !== 0) : Kt(l, a), Vt = e, Ml = n;
        }
        break;
      case 30:
        break;
      default:
        Kt(l, a);
    }
  }
  function W0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, W0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Fn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var hl = null, Wl = false;
  function Lt(l, t, a) {
    for (a = a.child; a !== null; ) $0(l, t, a), a = a.sibling;
  }
  function $0(l, t, a) {
    if (tt && typeof tt.onCommitFiberUnmount == "function") try {
      tt.onCommitFiberUnmount(Du, a);
    } catch {
    }
    switch (a.tag) {
      case 26:
        Ml || Ut(a, t), Lt(l, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Ml || Ut(a, t);
        var u = hl, e = Wl;
        ha(a.type) && (hl = a.stateNode, Wl = false), Lt(l, t, a), me(a.stateNode), hl = u, Wl = e;
        break;
      case 5:
        Ml || Ut(a, t);
      case 6:
        if (u = hl, e = Wl, hl = null, Lt(l, t, a), hl = u, Wl = e, hl !== null) if (Wl) try {
          (hl.nodeType === 9 ? hl.body : hl.nodeName === "HTML" ? hl.ownerDocument.body : hl).removeChild(a.stateNode);
        } catch (n) {
          ul(a, t, n);
        }
        else try {
          hl.removeChild(a.stateNode);
        } catch (n) {
          ul(a, t, n);
        }
        break;
      case 18:
        hl !== null && (Wl ? (l = hl, Qd(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, a.stateNode), Ou(l)) : Qd(hl, a.stateNode));
        break;
      case 4:
        u = hl, e = Wl, hl = a.stateNode.containerInfo, Wl = true, Lt(l, t, a), hl = u, Wl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ia(2, a, t), Ml || ia(4, a, t), Lt(l, t, a);
        break;
      case 1:
        Ml || (Ut(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && Z0(a, t, u)), Lt(l, t, a);
        break;
      case 21:
        Lt(l, t, a);
        break;
      case 22:
        Ml = (u = Ml) || a.memoizedState !== null, Lt(l, t, a), Ml = u;
        break;
      default:
        Lt(l, t, a);
    }
  }
  function k0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Ou(l);
      } catch (a) {
        ul(t, t.return, a);
      }
    }
  }
  function F0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
      Ou(l);
    } catch (a) {
      ul(t, t.return, a);
    }
  }
  function Fv(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new J0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new J0()), t;
      default:
        throw Error(h(435, l.tag));
    }
  }
  function on(l, t) {
    var a = Fv(l);
    t.forEach(function(u) {
      if (!a.has(u)) {
        a.add(u);
        var e = fm.bind(null, l, u);
        u.then(e, e);
      }
    });
  }
  function $l(l, t) {
    var a = t.deletions;
    if (a !== null) for (var u = 0; u < a.length; u++) {
      var e = a[u], n = l, f = t, c = f;
      l: for (; c !== null; ) {
        switch (c.tag) {
          case 27:
            if (ha(c.type)) {
              hl = c.stateNode, Wl = false;
              break l;
            }
            break;
          case 5:
            hl = c.stateNode, Wl = false;
            break l;
          case 3:
          case 4:
            hl = c.stateNode.containerInfo, Wl = true;
            break l;
        }
        c = c.return;
      }
      if (hl === null) throw Error(h(160));
      $0(n, f, e), hl = null, Wl = false, n = e.alternate, n !== null && (n.return = null), e.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) I0(t, l), t = t.sibling;
  }
  var Tt = null;
  function I0(l, t) {
    var a = l.alternate, u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        $l(t, l), kl(l), u & 4 && (ia(3, l, l.return), ue(3, l), ia(5, l, l.return));
        break;
      case 1:
        $l(t, l), kl(l), u & 512 && (Ml || a === null || Ut(a, a.return)), u & 64 && Vt && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
        break;
      case 26:
        var e = Tt;
        if ($l(t, l), kl(l), u & 512 && (Ml || a === null || Ut(a, a.return)), u & 4) {
          var n = a !== null ? a.memoizedState : null;
          if (u = l.memoizedState, a === null) if (u === null) if (l.stateNode === null) {
            l: {
              u = l.type, a = l.memoizedProps, e = e.ownerDocument || e;
              t: switch (u) {
                case "title":
                  n = e.getElementsByTagName("title")[0], (!n || n[Hu] || n[Rl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(u), e.head.insertBefore(n, e.querySelector("head > title"))), Bl(n, u, a), n[Rl] = l, Nl(n), u = n;
                  break l;
                case "link":
                  var f = Id("link", "href", e).get(u + (a.href || ""));
                  if (f) {
                    for (var c = 0; c < f.length; c++) if (n = f[c], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                      f.splice(c, 1);
                      break t;
                    }
                  }
                  n = e.createElement(u), Bl(n, u, a), e.head.appendChild(n);
                  break;
                case "meta":
                  if (f = Id("meta", "content", e).get(u + (a.content || ""))) {
                    for (c = 0; c < f.length; c++) if (n = f[c], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                      f.splice(c, 1);
                      break t;
                    }
                  }
                  n = e.createElement(u), Bl(n, u, a), e.head.appendChild(n);
                  break;
                default:
                  throw Error(h(468, u));
              }
              n[Rl] = l, Nl(n), u = n;
            }
            l.stateNode = u;
          } else Pd(e, l.type, l.stateNode);
          else l.stateNode = Fd(e, u, l.memoizedProps);
          else n !== u ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, u === null ? Pd(e, l.type, l.stateNode) : Fd(e, u, l.memoizedProps)) : u === null && l.stateNode !== null && bc(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        $l(t, l), kl(l), u & 512 && (Ml || a === null || Ut(a, a.return)), a !== null && u & 4 && bc(l, l.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if ($l(t, l), kl(l), u & 512 && (Ml || a === null || Ut(a, a.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Wa(e, "");
          } catch (M) {
            ul(l, l.return, M);
          }
        }
        u & 4 && l.stateNode != null && (e = l.memoizedProps, bc(l, e, a !== null ? a.memoizedProps : e)), u & 1024 && (Tc = true);
        break;
      case 6:
        if ($l(t, l), kl(l), u & 4) {
          if (l.stateNode === null) throw Error(h(162));
          u = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = u;
          } catch (M) {
            ul(l, l.return, M);
          }
        }
        break;
      case 3:
        if (Nn = null, e = Tt, Tt = Dn(t.containerInfo), $l(t, l), Tt = e, kl(l), u & 4 && a !== null && a.memoizedState.isDehydrated) try {
          Ou(t.containerInfo);
        } catch (M) {
          ul(l, l.return, M);
        }
        Tc && (Tc = false, P0(l));
        break;
      case 4:
        u = Tt, Tt = Dn(l.stateNode.containerInfo), $l(t, l), kl(l), Tt = u;
        break;
      case 12:
        $l(t, l), kl(l);
        break;
      case 31:
        $l(t, l), kl(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, on(l, u)));
        break;
      case 13:
        $l(t, l), kl(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (rn = lt()), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, on(l, u)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = a !== null && a.memoizedState !== null, m = Vt, g = Ml;
        if (Vt = m || e, Ml = g || i, $l(t, l), Ml = g, Vt = m, kl(l), u & 8192) l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (a === null || i || Vt || Ml || Ga(l)), a = null, t = l; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (a === null) {
              i = a = t;
              try {
                if (n = i.stateNode, e) f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                else {
                  c = i.stateNode;
                  var z = i.memoizedProps.style, o = z != null && z.hasOwnProperty("display") ? z.display : null;
                  c.style.display = o == null || typeof o == "boolean" ? "" : ("" + o).trim();
                }
              } catch (M) {
                ul(i, i.return, M);
              }
            }
          } else if (t.tag === 6) {
            if (a === null) {
              i = t;
              try {
                i.stateNode.nodeValue = e ? "" : i.memoizedProps;
              } catch (M) {
                ul(i, i.return, M);
              }
            }
          } else if (t.tag === 18) {
            if (a === null) {
              i = t;
              try {
                var r = i.stateNode;
                e ? Zd(r, true) : Zd(i.stateNode, false);
              } catch (M) {
                ul(i, i.return, M);
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === l) break l;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l) break l;
            a === t && (a = null), t = t.return;
          }
          a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
        }
        u & 4 && (u = l.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, on(l, a))));
        break;
      case 19:
        $l(t, l), kl(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, on(l, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        $l(t, l), kl(l);
    }
  }
  function kl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null; ) {
          if (L0(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(h(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode, n = zc(l);
            mn(l, n, e);
            break;
          case 5:
            var f = a.stateNode;
            a.flags & 32 && (Wa(f, ""), a.flags &= -33);
            var c = zc(l);
            mn(l, c, f);
            break;
          case 3:
          case 4:
            var i = a.stateNode.containerInfo, m = zc(l);
            Ec(l, m, i);
            break;
          default:
            throw Error(h(161));
        }
      } catch (g) {
        ul(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function P0(l) {
    if (l.subtreeFlags & 1024) for (l = l.child; l !== null; ) {
      var t = l;
      P0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
    }
  }
  function Kt(l, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) w0(l, t.alternate, t), t = t.sibling;
  }
  function Ga(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ia(4, t, t.return), Ga(t);
          break;
        case 1:
          Ut(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Z0(t, t.return, a), Ga(t);
          break;
        case 27:
          me(t.stateNode);
        case 26:
        case 5:
          Ut(t, t.return), Ga(t);
          break;
        case 22:
          t.memoizedState === null && Ga(t);
          break;
        case 30:
          Ga(t);
          break;
        default:
          Ga(t);
      }
      l = l.sibling;
    }
  }
  function Jt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Jt(e, n, a), ue(4, n);
          break;
        case 1:
          if (Jt(e, n, a), u = n, e = u.stateNode, typeof e.componentDidMount == "function") try {
            e.componentDidMount();
          } catch (m) {
            ul(u, u.return, m);
          }
          if (u = n, e = u.updateQueue, e !== null) {
            var c = u.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null) for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++) Ns(i[e], c);
            } catch (m) {
              ul(u, u.return, m);
            }
          }
          a && f & 64 && Q0(n), ee(n, n.return);
          break;
        case 27:
          K0(n);
        case 26:
        case 5:
          Jt(e, n, a), a && u === null && f & 4 && V0(n), ee(n, n.return);
          break;
        case 12:
          Jt(e, n, a);
          break;
        case 31:
          Jt(e, n, a), a && f & 4 && k0(e, n);
          break;
        case 13:
          Jt(e, n, a), a && f & 4 && F0(e, n);
          break;
        case 22:
          n.memoizedState === null && Jt(e, n, a), ee(n, n.return);
          break;
        case 30:
          break;
        default:
          Jt(e, n, a);
      }
      t = t.sibling;
    }
  }
  function Ac(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Lu(a));
  }
  function _c(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Lu(l));
  }
  function At(l, t, a, u) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) ld(l, t, a, u), t = t.sibling;
  }
  function ld(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        At(l, t, a, u), e & 2048 && ue(9, t);
        break;
      case 1:
        At(l, t, a, u);
        break;
      case 3:
        At(l, t, a, u), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Lu(l)));
        break;
      case 12:
        if (e & 2048) {
          At(l, t, a, u), l = t.stateNode;
          try {
            var n = t.memoizedProps, f = n.id, c = n.onPostCommit;
            typeof c == "function" && c(f, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
          } catch (i) {
            ul(t, t.return, i);
          }
        } else At(l, t, a, u);
        break;
      case 31:
        At(l, t, a, u);
        break;
      case 13:
        At(l, t, a, u);
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? At(l, t, a, u) : ne(l, t) : n._visibility & 2 ? At(l, t, a, u) : (n._visibility |= 2, ou(l, t, a, u, (t.subtreeFlags & 10256) !== 0 || false)), e & 2048 && Ac(f, t);
        break;
      case 24:
        At(l, t, a, u), e & 2048 && _c(t.alternate, t);
        break;
      default:
        At(l, t, a, u);
    }
  }
  function ou(l, t, a, u, e) {
    for (e = e && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
      var n = l, f = t, c = a, i = u, m = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ou(n, f, c, i, e), ue(8, f);
          break;
        case 23:
          break;
        case 22:
          var g = f.stateNode;
          f.memoizedState !== null ? g._visibility & 2 ? ou(n, f, c, i, e) : ne(n, f) : (g._visibility |= 2, ou(n, f, c, i, e)), e && m & 2048 && Ac(f.alternate, f);
          break;
        case 24:
          ou(n, f, c, i, e), e && m & 2048 && _c(f.alternate, f);
          break;
        default:
          ou(n, f, c, i, e);
      }
      t = t.sibling;
    }
  }
  function ne(l, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var a = l, u = t, e = u.flags;
      switch (u.tag) {
        case 22:
          ne(a, u), e & 2048 && Ac(u.alternate, u);
          break;
        case 24:
          ne(a, u), e & 2048 && _c(u.alternate, u);
          break;
        default:
          ne(a, u);
      }
      t = t.sibling;
    }
  }
  var fe = 8192;
  function hu(l, t, a) {
    if (l.subtreeFlags & fe) for (l = l.child; l !== null; ) td(l, t, a), l = l.sibling;
  }
  function td(l, t, a) {
    switch (l.tag) {
      case 26:
        hu(l, t, a), l.flags & fe && l.memoizedState !== null && Ym(a, Tt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        hu(l, t, a);
        break;
      case 3:
      case 4:
        var u = Tt;
        Tt = Dn(l.stateNode.containerInfo), hu(l, t, a), Tt = u;
        break;
      case 22:
        l.memoizedState === null && (u = l.alternate, u !== null && u.memoizedState !== null ? (u = fe, fe = 16777216, hu(l, t, a), fe = u) : hu(l, t, a));
        break;
      default:
        hu(l, t, a);
    }
  }
  function ad(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function ce(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var a = 0; a < t.length; a++) {
        var u = t[a];
        Hl = u, ed(u, l);
      }
      ad(l);
    }
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) ud(l), l = l.sibling;
  }
  function ud(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ce(l), l.flags & 2048 && ia(9, l, l.return);
        break;
      case 3:
        ce(l);
        break;
      case 12:
        ce(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, hn(l)) : ce(l);
        break;
      default:
        ce(l);
    }
  }
  function hn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var a = 0; a < t.length; a++) {
        var u = t[a];
        Hl = u, ed(u, l);
      }
      ad(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          ia(8, t, t.return), hn(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, hn(t));
          break;
        default:
          hn(t);
      }
      l = l.sibling;
    }
  }
  function ed(l, t) {
    for (; Hl !== null; ) {
      var a = Hl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ia(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Lu(a.memoizedState.cache);
      }
      if (u = a.child, u !== null) u.return = a, Hl = u;
      else l: for (a = l; Hl !== null; ) {
        u = Hl;
        var e = u.sibling, n = u.return;
        if (W0(u), u === a) {
          Hl = null;
          break l;
        }
        if (e !== null) {
          e.return = n, Hl = e;
          break l;
        }
        Hl = n;
      }
    }
  }
  var Iv = { getCacheForType: function(l) {
    var t = jl(Al), a = t.data.get(l);
    return a === void 0 && (a = l(), t.data.set(l, a)), a;
  }, cacheSignal: function() {
    return jl(Al).controller.signal;
  } }, Pv = typeof WeakMap == "function" ? WeakMap : Map, ll = 0, dl = null, K = null, W = 0, al = 0, ct = null, sa = false, ru = false, Oc = false, wt = 0, bl = 0, da = 0, Xa = 0, Mc = 0, it = 0, gu = 0, ie = null, Fl = null, pc = false, rn = 0, nd = 0, gn = 1 / 0, Sn = null, ya = null, Dl = 0, va = null, Su = null, Wt = 0, Dc = 0, Uc = null, fd = null, se = 0, Nc = null;
  function st() {
    return (ll & 2) !== 0 && W !== 0 ? W & -W : S.T !== null ? Bc() : Ti();
  }
  function cd() {
    if (it === 0) if ((W & 536870912) === 0 || F) {
      var l = Oe;
      Oe <<= 1, (Oe & 3932160) === 0 && (Oe = 262144), it = l;
    } else it = 536870912;
    return l = nt.current, l !== null && (l.flags |= 32), it;
  }
  function Il(l, t, a) {
    (l === dl && (al === 2 || al === 9) || l.cancelPendingCommit !== null) && (bu(l, 0), ma(l, W, it, false)), Nu(l, a), ((ll & 2) === 0 || l !== dl) && (l === dl && ((ll & 2) === 0 && (Xa |= a), bl === 4 && ma(l, W, it, false)), Nt(l));
  }
  function id(l, t, a) {
    if ((ll & 6) !== 0) throw Error(h(327));
    var u = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Uu(l, t), e = u ? am(l, t) : Rc(l, t, true), n = u;
    do {
      if (e === 0) {
        ru && !u && ma(l, t, 0, false);
        break;
      } else {
        if (a = l.current.alternate, n && !lm(a)) {
          e = Rc(l, t, false), n = false;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n) var f = 0;
          else f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = ie;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (bu(c, f).flags |= 256), f = Rc(c, f, false), f !== 2) {
                if (Oc && !i) {
                  c.errorRecoveryDisabledLanes |= n, Xa |= n, e = 4;
                  break l;
                }
                n = Fl, Fl = e, n !== null && (Fl === null ? Fl = n : Fl.push.apply(Fl, n));
              }
              e = f;
            }
            if (n = false, e !== 2) continue;
          }
        }
        if (e === 1) {
          bu(l, 0), ma(l, t, 0, true);
          break;
        }
        l: {
          switch (u = l, n = e, n) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ma(u, t, it, !sa);
              break l;
            case 2:
              Fl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((t & 62914560) === t && (e = rn + 300 - lt(), 10 < e)) {
            if (ma(u, t, it, !sa), pe(u, 0, true) !== 0) break l;
            Wt = t, u.timeoutHandle = Gd(sd.bind(null, u, a, Fl, Sn, pc, t, it, Xa, gu, sa, n, "Throttled", -0, 0), e);
            break l;
          }
          sd(u, a, Fl, Sn, pc, t, it, Xa, gu, sa, n, null, -0, 0);
        }
      }
      break;
    } while (true);
    Nt(l);
  }
  function sd(l, t, a, u, e, n, f, c, i, m, g, z, o, r) {
    if (l.timeoutHandle = -1, z = t.subtreeFlags, z & 8192 || (z & 16785408) === 16785408) {
      z = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: Ct }, td(t, n, z);
      var M = (n & 62914560) === n ? rn - lt() : (n & 4194048) === n ? nd - lt() : 0;
      if (M = xm(z, M), M !== null) {
        Wt = n, l.cancelPendingCommit = M(gd.bind(null, l, t, n, a, u, e, f, c, i, g, z, null, o, r)), ma(l, n, f, !m);
        return;
      }
    }
    gd(l, t, n, a, u, e, f, c, i);
  }
  function lm(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null))) for (var u = 0; u < a.length; u++) {
        var e = a[u], n = e.getSnapshot;
        e = e.value;
        try {
          if (!ut(n(), e)) return false;
        } catch {
          return false;
        }
      }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null) a.return = t, t = a;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function ma(l, t, a, u) {
    t &= ~Mc, t &= ~Xa, l.suspendedLanes |= t, l.pingedLanes &= ~t, u && (l.warmLanes |= t), u = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - at(e), f = 1 << n;
      u[n] = -1, e &= ~f;
    }
    a !== 0 && bi(l, a, t);
  }
  function bn() {
    return (ll & 6) === 0 ? (de(0), false) : true;
  }
  function Hc() {
    if (K !== null) {
      if (al === 0) var l = K.return;
      else l = K, Yt = Ha = null, wf(l), su = null, Ju = 0, l = K;
      for (; l !== null; ) X0(l.alternate, l), l = l.return;
      K = null;
    }
  }
  function bu(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, zm(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), Wt = 0, Hc(), dl = l, K = a = qt(l.current, null), W = t, al = 0, ct = null, sa = false, ru = Uu(l, t), Oc = false, gu = it = Mc = Xa = da = bl = 0, Fl = ie = null, pc = false, (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0) for (l = l.entanglements, u &= t; 0 < u; ) {
      var e = 31 - at(u), n = 1 << e;
      t |= l[e], u &= ~n;
    }
    return wt = t, Ge(), a;
  }
  function dd(l, t) {
    X = null, S.H = le, t === iu || t === we ? (t = Ms(), al = 3) : t === qf ? (t = Ms(), al = 4) : al = t === sc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ct = t, K === null && (bl = 1, cn(l, mt(t, l.current)));
  }
  function yd() {
    var l = nt.current;
    return l === null ? true : (W & 4194048) === W ? gt === null : (W & 62914560) === W || (W & 536870912) !== 0 ? l === gt : false;
  }
  function vd() {
    var l = S.H;
    return S.H = le, l === null ? le : l;
  }
  function md() {
    var l = S.A;
    return S.A = Iv, l;
  }
  function zn() {
    bl = 4, sa || (W & 4194048) !== W && nt.current !== null || (ru = true), (da & 134217727) === 0 && (Xa & 134217727) === 0 || dl === null || ma(dl, W, it, false);
  }
  function Rc(l, t, a) {
    var u = ll;
    ll |= 2;
    var e = vd(), n = md();
    (dl !== l || W !== t) && (Sn = null, bu(l, t)), t = false;
    var f = bl;
    l: do
      try {
        if (al !== 0 && K !== null) {
          var c = K, i = ct;
          switch (al) {
            case 8:
              Hc(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              nt.current === null && (t = true);
              var m = al;
              if (al = 0, ct = null, zu(l, c, i, m), a && ru) {
                f = 0;
                break l;
              }
              break;
            default:
              m = al, al = 0, ct = null, zu(l, c, i, m);
          }
        }
        tm(), f = bl;
        break;
      } catch (g) {
        dd(l, g);
      }
    while (true);
    return t && l.shellSuspendCounter++, Yt = Ha = null, ll = u, S.H = e, S.A = n, K === null && (dl = null, W = 0, Ge()), f;
  }
  function tm() {
    for (; K !== null; ) od(K);
  }
  function am(l, t) {
    var a = ll;
    ll |= 2;
    var u = vd(), e = md();
    dl !== l || W !== t ? (Sn = null, gn = lt() + 500, bu(l, t)) : ru = Uu(l, t);
    l: do
      try {
        if (al !== 0 && K !== null) {
          t = K;
          var n = ct;
          t: switch (al) {
            case 1:
              al = 0, ct = null, zu(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (_s(n)) {
                al = 0, ct = null, hd(t);
                break;
              }
              t = function() {
                al !== 2 && al !== 9 || dl !== l || (al = 7), Nt(l);
              }, n.then(t, t);
              break l;
            case 3:
              al = 7;
              break l;
            case 4:
              al = 5;
              break l;
            case 7:
              _s(n) ? (al = 0, ct = null, hd(t)) : (al = 0, ct = null, zu(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (K.tag) {
                case 26:
                  f = K.memoizedState;
                case 5:
                case 27:
                  var c = K;
                  if (f ? ly(f) : c.stateNode.complete) {
                    al = 0, ct = null;
                    var i = c.sibling;
                    if (i !== null) K = i;
                    else {
                      var m = c.return;
                      m !== null ? (K = m, En(m)) : K = null;
                    }
                    break t;
                  }
              }
              al = 0, ct = null, zu(l, t, n, 5);
              break;
            case 6:
              al = 0, ct = null, zu(l, t, n, 6);
              break;
            case 8:
              Hc(), bl = 6;
              break l;
            default:
              throw Error(h(462));
          }
        }
        um();
        break;
      } catch (g) {
        dd(l, g);
      }
    while (true);
    return Yt = Ha = null, S.H = u, S.A = e, ll = a, K !== null ? 0 : (dl = null, W = 0, Ge(), bl);
  }
  function um() {
    for (; K !== null && !My(); ) od(K);
  }
  function od(l) {
    var t = x0(l.alternate, l, wt);
    l.memoizedProps = l.pendingProps, t === null ? En(l) : K = t;
  }
  function hd(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = R0(a, t, t.pendingProps, t.type, void 0, W);
        break;
      case 11:
        t = R0(a, t, t.pendingProps, t.type.render, t.ref, W);
        break;
      case 5:
        wf(t);
      default:
        X0(a, t), t = K = ms(t, wt), t = x0(a, t, wt);
    }
    l.memoizedProps = l.pendingProps, t === null ? En(l) : K = t;
  }
  function zu(l, t, a, u) {
    Yt = Ha = null, wf(t), su = null, Ju = 0;
    var e = t.return;
    try {
      if (Kv(l, e, t, a, W)) {
        bl = 1, cn(l, mt(a, l.current)), K = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw K = e, n;
      bl = 1, cn(l, mt(a, l.current)), K = null;
      return;
    }
    t.flags & 32768 ? (F || u === 1 ? l = true : ru || (W & 536870912) !== 0 ? l = false : (sa = l = true, (u === 2 || u === 9 || u === 3 || u === 6) && (u = nt.current, u !== null && u.tag === 13 && (u.flags |= 16384))), rd(t, l)) : En(t);
  }
  function En(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        rd(t, sa);
        return;
      }
      l = t.return;
      var a = Wv(t.alternate, t, wt);
      if (a !== null) {
        K = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        K = t;
        return;
      }
      K = t = l;
    } while (t !== null);
    bl === 0 && (bl = 5);
  }
  function rd(l, t) {
    do {
      var a = $v(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, K = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
        K = l;
        return;
      }
      K = l = a;
    } while (l !== null);
    bl = 6, K = null;
  }
  function gd(l, t, a, u, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      Tn();
    while (Dl !== 0);
    if ((ll & 6) !== 0) throw Error(h(327));
    if (t !== null) {
      if (t === l.current) throw Error(h(177));
      if (n = t.lanes | t.childLanes, n |= zf, By(l, a, n, f, c, i), l === dl && (K = dl = null, W = 0), Su = t, va = l, Wt = a, Dc = n, Uc = e, fd = u, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, cm(Ae, function() {
        return Td(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
        u = S.T, S.T = null, e = _.p, _.p = 2, f = ll, ll |= 4;
        try {
          kv(l, t, a);
        } finally {
          ll = f, _.p = e, S.T = u;
        }
      }
      Dl = 1, Sd(), bd(), zd();
    }
  }
  function Sd() {
    if (Dl === 1) {
      Dl = 0;
      var l = va, t = Su, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = S.T, S.T = null;
        var u = _.p;
        _.p = 2;
        var e = ll;
        ll |= 4;
        try {
          I0(t, l);
          var n = Lc, f = es(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && us(c.ownerDocument.documentElement, c)) {
            if (i !== null && hf(c)) {
              var m = i.start, g = i.end;
              if (g === void 0 && (g = m), "selectionStart" in c) c.selectionStart = m, c.selectionEnd = Math.min(g, c.value.length);
              else {
                var z = c.ownerDocument || document, o = z && z.defaultView || window;
                if (o.getSelection) {
                  var r = o.getSelection(), M = c.textContent.length, j = Math.min(i.start, M), cl = i.end === void 0 ? j : Math.min(i.end, M);
                  !r.extend && j > cl && (f = cl, cl = j, j = f);
                  var y = as(c, j), s = as(c, cl);
                  if (y && s && (r.rangeCount !== 1 || r.anchorNode !== y.node || r.anchorOffset !== y.offset || r.focusNode !== s.node || r.focusOffset !== s.offset)) {
                    var v = z.createRange();
                    v.setStart(y.node, y.offset), r.removeAllRanges(), j > cl ? (r.addRange(v), r.extend(s.node, s.offset)) : (v.setEnd(s.node, s.offset), r.addRange(v));
                  }
                }
              }
            }
            for (z = [], r = c; r = r.parentNode; ) r.nodeType === 1 && z.push({ element: r, left: r.scrollLeft, top: r.scrollTop });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < z.length; c++) {
              var b = z[c];
              b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
            }
          }
          jn = !!Vc, Lc = Vc = null;
        } finally {
          ll = e, _.p = u, S.T = a;
        }
      }
      l.current = t, Dl = 2;
    }
  }
  function bd() {
    if (Dl === 2) {
      Dl = 0;
      var l = va, t = Su, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = S.T, S.T = null;
        var u = _.p;
        _.p = 2;
        var e = ll;
        ll |= 4;
        try {
          w0(l, t.alternate, t);
        } finally {
          ll = e, _.p = u, S.T = a;
        }
      }
      Dl = 3;
    }
  }
  function zd() {
    if (Dl === 4 || Dl === 3) {
      Dl = 0, py();
      var l = va, t = Su, a = Wt, u = fd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Dl = 5 : (Dl = 0, Su = va = null, Ed(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (ya = null), $n(a), t = t.stateNode, tt && typeof tt.onCommitFiberRoot == "function") try {
        tt.onCommitFiberRoot(Du, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (u !== null) {
        t = S.T, e = _.p, _.p = 2, S.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < u.length; f++) {
            var c = u[f];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          S.T = t, _.p = e;
        }
      }
      (Wt & 3) !== 0 && Tn(), Nt(l), e = l.pendingLanes, (a & 261930) !== 0 && (e & 42) !== 0 ? l === Nc ? se++ : (se = 0, Nc = l) : se = 0, de(0);
    }
  }
  function Ed(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Lu(t)));
  }
  function Tn() {
    return Sd(), bd(), zd(), Td();
  }
  function Td() {
    if (Dl !== 5) return false;
    var l = va, t = Dc;
    Dc = 0;
    var a = $n(Wt), u = S.T, e = _.p;
    try {
      _.p = 32 > a ? 32 : a, S.T = null, a = Uc, Uc = null;
      var n = va, f = Wt;
      if (Dl = 0, Su = va = null, Wt = 0, (ll & 6) !== 0) throw Error(h(331));
      var c = ll;
      if (ll |= 4, ud(n.current), ld(n, n.current, f, a), ll = c, de(0, false), tt && typeof tt.onPostCommitFiberRoot == "function") try {
        tt.onPostCommitFiberRoot(Du, n);
      } catch {
      }
      return true;
    } finally {
      _.p = e, S.T = u, Ed(l, t);
    }
  }
  function Ad(l, t, a) {
    t = mt(a, t), t = ic(l.stateNode, t, 2), l = na(l, t, 2), l !== null && (Nu(l, 2), Nt(l));
  }
  function ul(l, t, a) {
    if (l.tag === 3) Ad(l, l, a);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Ad(t, l, a);
        break;
      } else if (t.tag === 1) {
        var u = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (ya === null || !ya.has(u))) {
          l = mt(a, l), a = _0(2), u = na(t, a, 2), u !== null && (O0(a, u, t, l), Nu(u, 2), Nt(u));
          break;
        }
      }
      t = t.return;
    }
  }
  function Cc(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new Pv();
      var e = /* @__PURE__ */ new Set();
      u.set(t, e);
    } else e = u.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), u.set(t, e));
    e.has(a) || (Oc = true, e.add(a), l = em.bind(null, l, t, a), t.then(l, l));
  }
  function em(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, dl === l && (W & a) === a && (bl === 4 || bl === 3 && (W & 62914560) === W && 300 > lt() - rn ? (ll & 2) === 0 && bu(l, 0) : Mc |= a, gu === W && (gu = 0)), Nt(l);
  }
  function _d(l, t) {
    t === 0 && (t = Si()), l = Da(l, t), l !== null && (Nu(l, t), Nt(l));
  }
  function nm(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), _d(l, a);
  }
  function fm(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var u = l.stateNode, e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(h(314));
    }
    u !== null && u.delete(t), _d(l, a);
  }
  function cm(l, t) {
    return Kn(l, t);
  }
  var An = null, Eu = null, jc = false, _n = false, qc = false, oa = 0;
  function Nt(l) {
    l !== Eu && l.next === null && (Eu === null ? An = Eu = l : Eu = Eu.next = l), _n = true, jc || (jc = true, sm());
  }
  function de(l, t) {
    if (!qc && _n) {
      qc = true;
      do
        for (var a = false, u = An; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = u.suspendedLanes, c = u.pingedLanes;
              n = (1 << 31 - at(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = true, Dd(u, n));
          } else n = W, n = pe(u, u === dl ? n : 0, u.cancelPendingCommit !== null || u.timeoutHandle !== -1), (n & 3) === 0 || Uu(u, n) || (a = true, Dd(u, n));
          u = u.next;
        }
      while (a);
      qc = false;
    }
  }
  function im() {
    Od();
  }
  function Od() {
    _n = jc = false;
    var l = 0;
    oa !== 0 && bm() && (l = oa);
    for (var t = lt(), a = null, u = An; u !== null; ) {
      var e = u.next, n = Md(u, t);
      n === 0 ? (u.next = null, a === null ? An = e : a.next = e, e === null && (Eu = a)) : (a = u, (l !== 0 || (n & 3) !== 0) && (_n = true)), u = e;
    }
    Dl !== 0 && Dl !== 5 || de(l), oa !== 0 && (oa = 0);
  }
  function Md(l, t) {
    for (var a = l.suspendedLanes, u = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - at(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & a) === 0 || (c & u) !== 0) && (e[f] = qy(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = dl, a = W, a = pe(l, l === t ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), u = l.callbackNode, a === 0 || l === t && (al === 2 || al === 9) || l.cancelPendingCommit !== null) return u !== null && u !== null && Jn(u), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || Uu(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (u !== null && Jn(u), $n(a)) {
        case 2:
        case 8:
          a = ri;
          break;
        case 32:
          a = Ae;
          break;
        case 268435456:
          a = gi;
          break;
        default:
          a = Ae;
      }
      return u = pd.bind(null, l), a = Kn(a, u), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return u !== null && u !== null && Jn(u), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function pd(l, t) {
    if (Dl !== 0 && Dl !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (Tn() && l.callbackNode !== a) return null;
    var u = W;
    return u = pe(l, l === dl ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), u === 0 ? null : (id(l, u, t), Md(l, lt()), l.callbackNode != null && l.callbackNode === a ? pd.bind(null, l) : null);
  }
  function Dd(l, t) {
    if (Tn()) return null;
    id(l, t, true);
  }
  function sm() {
    Em(function() {
      (ll & 6) !== 0 ? Kn(hi, im) : Od();
    });
  }
  function Bc() {
    if (oa === 0) {
      var l = fu;
      l === 0 && (l = _e, _e <<= 1, (_e & 261888) === 0 && (_e = 256)), oa = l;
    }
    return oa;
  }
  function Ud(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : He("" + l);
  }
  function Nd(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function dm(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = Ud((e[Jl] || null).action), f = u.submitter;
      f && (t = (t = f[Jl] || null) ? Ud(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new qe("action", "action", null, u, e);
      l.push({ event: c, listeners: [{ instance: null, listener: function() {
        if (u.defaultPrevented) {
          if (oa !== 0) {
            var i = f ? Nd(e, f) : new FormData(e);
            ac(a, { pending: true, data: i, method: e.method, action: n }, null, i);
          }
        } else typeof n == "function" && (c.preventDefault(), i = f ? Nd(e, f) : new FormData(e), ac(a, { pending: true, data: i, method: e.method, action: n }, n, i));
      }, currentTarget: e }] });
    }
  }
  for (var Yc = 0; Yc < bf.length; Yc++) {
    var xc = bf[Yc], ym = xc.toLowerCase(), vm = xc[0].toUpperCase() + xc.slice(1);
    Et(ym, "on" + vm);
  }
  Et(cs, "onAnimationEnd"), Et(is, "onAnimationIteration"), Et(ss, "onAnimationStart"), Et("dblclick", "onDoubleClick"), Et("focusin", "onFocus"), Et("focusout", "onBlur"), Et(Dv, "onTransitionRun"), Et(Uv, "onTransitionStart"), Et(Nv, "onTransitionCancel"), Et(ds, "onTransitionEnd"), Ja("onMouseEnter", ["mouseout", "mouseover"]), Ja("onMouseLeave", ["mouseout", "mouseover"]), Ja("onPointerEnter", ["pointerout", "pointerover"]), Ja("onPointerLeave", ["pointerout", "pointerover"]), _a("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), _a("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), _a("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), _a("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), _a("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), _a("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ye = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mm = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ye));
  function Hd(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a], e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t) for (var f = u.length - 1; 0 <= f; f--) {
          var c = u[f], i = c.instance, m = c.currentTarget;
          if (c = c.listener, i !== n && e.isPropagationStopped()) break l;
          n = c, e.currentTarget = m;
          try {
            n(e);
          } catch (g) {
            xe(g);
          }
          e.currentTarget = null, n = i;
        }
        else for (f = 0; f < u.length; f++) {
          if (c = u[f], i = c.instance, m = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped()) break l;
          n = c, e.currentTarget = m;
          try {
            n(e);
          } catch (g) {
            xe(g);
          }
          e.currentTarget = null, n = i;
        }
      }
    }
  }
  function J(l, t) {
    var a = t[kn];
    a === void 0 && (a = t[kn] = /* @__PURE__ */ new Set());
    var u = l + "__bubble";
    a.has(u) || (Rd(t, l, 2, false), a.add(u));
  }
  function Gc(l, t, a) {
    var u = 0;
    t && (u |= 4), Rd(a, l, u, t);
  }
  var On = "_reactListening" + Math.random().toString(36).slice(2);
  function Xc(l) {
    if (!l[On]) {
      l[On] = true, Oi.forEach(function(a) {
        a !== "selectionchange" && (mm.has(a) || Gc(a, false, l), Gc(a, true, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[On] || (t[On] = true, Gc("selectionchange", false, t));
    }
  }
  function Rd(l, t, a, u) {
    switch (cy(t)) {
      case 2:
        var e = Qm;
        break;
      case 8:
        e = Zm;
        break;
      default:
        e = ti;
    }
    a = e.bind(null, t, a, l), e = void 0, !nf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = true), u ? e !== void 0 ? l.addEventListener(t, a, { capture: true, passive: e }) : l.addEventListener(t, a, true) : e !== void 0 ? l.addEventListener(t, a, { passive: e }) : l.addEventListener(t, a, false);
  }
  function Qc(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null) l: for (; ; ) {
      if (u === null) return;
      var f = u.tag;
      if (f === 3 || f === 4) {
        var c = u.stateNode.containerInfo;
        if (c === e) break;
        if (f === 4) for (f = u.return; f !== null; ) {
          var i = f.tag;
          if ((i === 3 || i === 4) && f.stateNode.containerInfo === e) return;
          f = f.return;
        }
        for (; c !== null; ) {
          if (f = Va(c), f === null) return;
          if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
            u = n = f;
            continue l;
          }
          c = c.parentNode;
        }
      }
      u = u.return;
    }
    Yi(function() {
      var m = n, g = uf(a), z = [];
      l: {
        var o = ys.get(l);
        if (o !== void 0) {
          var r = qe, M = l;
          switch (l) {
            case "keypress":
              if (Ce(a) === 0) break l;
            case "keydown":
            case "keyup":
              r = fv;
              break;
            case "focusin":
              M = "focus", r = df;
              break;
            case "focusout":
              M = "blur", r = df;
              break;
            case "beforeblur":
            case "afterblur":
              r = df;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              r = Xi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              r = Wy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              r = sv;
              break;
            case cs:
            case is:
            case ss:
              r = Fy;
              break;
            case ds:
              r = yv;
              break;
            case "scroll":
            case "scrollend":
              r = Jy;
              break;
            case "wheel":
              r = mv;
              break;
            case "copy":
            case "cut":
            case "paste":
              r = Py;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              r = Zi;
              break;
            case "toggle":
            case "beforetoggle":
              r = hv;
          }
          var j = (t & 4) !== 0, cl = !j && (l === "scroll" || l === "scrollend"), y = j ? o !== null ? o + "Capture" : null : o;
          j = [];
          for (var s = m, v; s !== null; ) {
            var b = s;
            if (v = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || v === null || y === null || (b = Cu(s, y), b != null && j.push(ve(s, b, v))), cl) break;
            s = s.return;
          }
          0 < j.length && (o = new r(o, M, null, a, g), z.push({ event: o, listeners: j }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (o = l === "mouseover" || l === "pointerover", r = l === "mouseout" || l === "pointerout", o && a !== af && (M = a.relatedTarget || a.fromElement) && (Va(M) || M[Za])) break l;
          if ((r || o) && (o = g.window === g ? g : (o = g.ownerDocument) ? o.defaultView || o.parentWindow : window, r ? (M = a.relatedTarget || a.toElement, r = m, M = M ? Va(M) : null, M !== null && (cl = B(M), j = M.tag, M !== cl || j !== 5 && j !== 27 && j !== 6) && (M = null)) : (r = null, M = m), r !== M)) {
            if (j = Xi, b = "onMouseLeave", y = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (j = Zi, b = "onPointerLeave", y = "onPointerEnter", s = "pointer"), cl = r == null ? o : Ru(r), v = M == null ? o : Ru(M), o = new j(b, s + "leave", r, a, g), o.target = cl, o.relatedTarget = v, b = null, Va(g) === m && (j = new j(y, s + "enter", M, a, g), j.target = v, j.relatedTarget = cl, b = j), cl = b, r && M) t: {
              for (j = om, y = r, s = M, v = 0, b = y; b; b = j(b)) v++;
              b = 0;
              for (var H = s; H; H = j(H)) b++;
              for (; 0 < v - b; ) y = j(y), v--;
              for (; 0 < b - v; ) s = j(s), b--;
              for (; v--; ) {
                if (y === s || s !== null && y === s.alternate) {
                  j = y;
                  break t;
                }
                y = j(y), s = j(s);
              }
              j = null;
            }
            else j = null;
            r !== null && Cd(z, o, r, j, false), M !== null && cl !== null && Cd(z, cl, M, j, true);
          }
        }
        l: {
          if (o = m ? Ru(m) : window, r = o.nodeName && o.nodeName.toLowerCase(), r === "select" || r === "input" && o.type === "file") var I = ki;
          else if (Wi(o)) if (Fi) I = Ov;
          else {
            I = Av;
            var N = Tv;
          }
          else r = o.nodeName, !r || r.toLowerCase() !== "input" || o.type !== "checkbox" && o.type !== "radio" ? m && tf(m.elementType) && (I = ki) : I = _v;
          if (I && (I = I(l, m))) {
            $i(z, I, a, g);
            break l;
          }
          N && N(l, o, m), l === "focusout" && m && o.type === "number" && m.memoizedProps.value != null && lf(o, "number", o.value);
        }
        switch (N = m ? Ru(m) : window, l) {
          case "focusin":
            (Wi(N) || N.contentEditable === "true") && (Ia = N, rf = m, Qu = null);
            break;
          case "focusout":
            Qu = rf = Ia = null;
            break;
          case "mousedown":
            gf = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gf = false, ns(z, a, g);
            break;
          case "selectionchange":
            if (pv) break;
          case "keydown":
          case "keyup":
            ns(z, a, g);
        }
        var Q;
        if (vf) l: {
          switch (l) {
            case "compositionstart":
              var $ = "onCompositionStart";
              break l;
            case "compositionend":
              $ = "onCompositionEnd";
              break l;
            case "compositionupdate":
              $ = "onCompositionUpdate";
              break l;
          }
          $ = void 0;
        }
        else Fa ? Ji(l, a) && ($ = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && ($ = "onCompositionStart");
        $ && (Vi && a.locale !== "ko" && (Fa || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && Fa && (Q = xi()) : (It = g, ff = "value" in It ? It.value : It.textContent, Fa = true)), N = Mn(m, $), 0 < N.length && ($ = new Qi($, l, null, a, g), z.push({ event: $, listeners: N }), Q ? $.data = Q : (Q = wi(a), Q !== null && ($.data = Q)))), (Q = gv ? Sv(l, a) : bv(l, a)) && ($ = Mn(m, "onBeforeInput"), 0 < $.length && (N = new Qi("onBeforeInput", "beforeinput", null, a, g), z.push({ event: N, listeners: $ }), N.data = Q)), dm(z, l, m, a, g);
      }
      Hd(z, t);
    });
  }
  function ve(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function Mn(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Cu(l, a), e != null && u.unshift(ve(l, e, n)), e = Cu(l, t), e != null && u.push(ve(l, e, n))), l.tag === 3) return u;
      l = l.return;
    }
    return [];
  }
  function om(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Cd(l, t, a, u, e) {
    for (var n = t._reactName, f = []; a !== null && a !== u; ) {
      var c = a, i = c.alternate, m = c.stateNode;
      if (c = c.tag, i !== null && i === u) break;
      c !== 5 && c !== 26 && c !== 27 || m === null || (i = m, e ? (m = Cu(a, n), m != null && f.unshift(ve(a, m, i))) : e || (m = Cu(a, n), m != null && f.push(ve(a, m, i)))), a = a.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var hm = /\r\n?/g, rm = /\u0000|\uFFFD/g;
  function jd(l) {
    return (typeof l == "string" ? l : "" + l).replace(hm, `
`).replace(rm, "");
  }
  function qd(l, t) {
    return t = jd(t), jd(l) === t;
  }
  function fl(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string" ? t === "body" || t === "textarea" && u === "" || Wa(l, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && Wa(l, "" + u);
        break;
      case "className":
        Ue(l, "class", u);
        break;
      case "tabIndex":
        Ue(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ue(l, a, u);
        break;
      case "style":
        qi(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          Ue(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = He("" + u), l.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof n == "function" && (a === "formAction" ? (t !== "input" && fl(l, t, "name", e.name, e, null), fl(l, t, "formEncType", e.formEncType, e, null), fl(l, t, "formMethod", e.formMethod, e, null), fl(l, t, "formTarget", e.formTarget, e, null)) : (fl(l, t, "encType", e.encType, e, null), fl(l, t, "method", e.method, e, null), fl(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = He("" + u), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = Ct);
        break;
      case "onScroll":
        u != null && J("scroll", l);
        break;
      case "onScrollEnd":
        u != null && J("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(h(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
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
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        a = He("" + u), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "" + u) : l.removeAttribute(a);
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
        u && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === true ? l.setAttribute(a, "") : u !== false && u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? l.removeAttribute(a) : l.setAttribute(a, u);
        break;
      case "popover":
        J("beforetoggle", l), J("toggle", l), De(l, "popover", u);
        break;
      case "xlinkActuate":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        Rt(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        Rt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        De(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Ly.get(a) || a, De(l, a, u));
    }
  }
  function Zc(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        qi(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(h(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string" ? Wa(l, u) : (typeof u == "number" || typeof u == "bigint") && Wa(l, "" + u);
        break;
      case "onScroll":
        u != null && J("scroll", l);
        break;
      case "onScrollEnd":
        u != null && J("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = Ct);
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
        if (!Mi.hasOwnProperty(a)) l: {
          if (a[0] === "o" && a[1] === "n" && (e = a.endsWith("Capture"), t = a.slice(2, e ? a.length - 7 : void 0), n = l[Jl] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof u == "function")) {
            typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, u, e);
            break l;
          }
          a in l ? l[a] = u : u === true ? l.setAttribute(a, "") : De(l, a, u);
        }
    }
  }
  function Bl(l, t, a) {
    switch (t) {
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
        J("error", l), J("load", l);
        var u = false, e = false, n;
        for (n in a) if (a.hasOwnProperty(n)) {
          var f = a[n];
          if (f != null) switch (n) {
            case "src":
              u = true;
              break;
            case "srcSet":
              e = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(h(137, t));
            default:
              fl(l, t, n, f, a, null);
          }
        }
        e && fl(l, t, "srcSet", a.srcSet, a, null), u && fl(l, t, "src", a.src, a, null);
        return;
      case "input":
        J("invalid", l);
        var c = n = f = e = null, i = null, m = null;
        for (u in a) if (a.hasOwnProperty(u)) {
          var g = a[u];
          if (g != null) switch (u) {
            case "name":
              e = g;
              break;
            case "type":
              f = g;
              break;
            case "checked":
              i = g;
              break;
            case "defaultChecked":
              m = g;
              break;
            case "value":
              n = g;
              break;
            case "defaultValue":
              c = g;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (g != null) throw Error(h(137, t));
              break;
            default:
              fl(l, t, u, g, a, null);
          }
        }
        Hi(l, n, c, i, m, f, e, false);
        return;
      case "select":
        J("invalid", l), u = f = n = null;
        for (e in a) if (a.hasOwnProperty(e) && (c = a[e], c != null)) switch (e) {
          case "value":
            n = c;
            break;
          case "defaultValue":
            f = c;
            break;
          case "multiple":
            u = c;
          default:
            fl(l, t, e, c, a, null);
        }
        t = n, a = f, l.multiple = !!u, t != null ? wa(l, !!u, t, false) : a != null && wa(l, !!u, a, true);
        return;
      case "textarea":
        J("invalid", l), n = e = u = null;
        for (f in a) if (a.hasOwnProperty(f) && (c = a[f], c != null)) switch (f) {
          case "value":
            u = c;
            break;
          case "defaultValue":
            e = c;
            break;
          case "children":
            n = c;
            break;
          case "dangerouslySetInnerHTML":
            if (c != null) throw Error(h(91));
            break;
          default:
            fl(l, t, f, c, a, null);
        }
        Ci(l, u, e, n);
        return;
      case "option":
        for (i in a) if (a.hasOwnProperty(i) && (u = a[i], u != null)) switch (i) {
          case "selected":
            l.selected = u && typeof u != "function" && typeof u != "symbol";
            break;
          default:
            fl(l, t, i, u, a, null);
        }
        return;
      case "dialog":
        J("beforetoggle", l), J("toggle", l), J("cancel", l), J("close", l);
        break;
      case "iframe":
      case "object":
        J("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ye.length; u++) J(ye[u], l);
        break;
      case "image":
        J("error", l), J("load", l);
        break;
      case "details":
        J("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        J("error", l), J("load", l);
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
        for (m in a) if (a.hasOwnProperty(m) && (u = a[m], u != null)) switch (m) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(h(137, t));
          default:
            fl(l, t, m, u, a, null);
        }
        return;
      default:
        if (tf(t)) {
          for (g in a) a.hasOwnProperty(g) && (u = a[g], u !== void 0 && Zc(l, t, g, u, a, void 0));
          return;
        }
    }
    for (c in a) a.hasOwnProperty(c) && (u = a[c], u != null && fl(l, t, c, u, a, null));
  }
  function gm(l, t, a, u) {
    switch (t) {
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
        var e = null, n = null, f = null, c = null, i = null, m = null, g = null;
        for (r in a) {
          var z = a[r];
          if (a.hasOwnProperty(r) && z != null) switch (r) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              i = z;
            default:
              u.hasOwnProperty(r) || fl(l, t, r, null, u, z);
          }
        }
        for (var o in u) {
          var r = u[o];
          if (z = a[o], u.hasOwnProperty(o) && (r != null || z != null)) switch (o) {
            case "type":
              n = r;
              break;
            case "name":
              e = r;
              break;
            case "checked":
              m = r;
              break;
            case "defaultChecked":
              g = r;
              break;
            case "value":
              f = r;
              break;
            case "defaultValue":
              c = r;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (r != null) throw Error(h(137, t));
              break;
            default:
              r !== z && fl(l, t, o, r, u, z);
          }
        }
        Pn(l, f, c, i, m, g, n, e);
        return;
      case "select":
        r = f = c = o = null;
        for (n in a) if (i = a[n], a.hasOwnProperty(n) && i != null) switch (n) {
          case "value":
            break;
          case "multiple":
            r = i;
          default:
            u.hasOwnProperty(n) || fl(l, t, n, null, u, i);
        }
        for (e in u) if (n = u[e], i = a[e], u.hasOwnProperty(e) && (n != null || i != null)) switch (e) {
          case "value":
            o = n;
            break;
          case "defaultValue":
            c = n;
            break;
          case "multiple":
            f = n;
          default:
            n !== i && fl(l, t, e, n, u, i);
        }
        t = c, a = f, u = r, o != null ? wa(l, !!a, o, false) : !!u != !!a && (t != null ? wa(l, !!a, t, true) : wa(l, !!a, a ? [] : "", false));
        return;
      case "textarea":
        r = o = null;
        for (c in a) if (e = a[c], a.hasOwnProperty(c) && e != null && !u.hasOwnProperty(c)) switch (c) {
          case "value":
            break;
          case "children":
            break;
          default:
            fl(l, t, c, null, u, e);
        }
        for (f in u) if (e = u[f], n = a[f], u.hasOwnProperty(f) && (e != null || n != null)) switch (f) {
          case "value":
            o = e;
            break;
          case "defaultValue":
            r = e;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (e != null) throw Error(h(91));
            break;
          default:
            e !== n && fl(l, t, f, e, u, n);
        }
        Ri(l, o, r);
        return;
      case "option":
        for (var M in a) if (o = a[M], a.hasOwnProperty(M) && o != null && !u.hasOwnProperty(M)) switch (M) {
          case "selected":
            l.selected = false;
            break;
          default:
            fl(l, t, M, null, u, o);
        }
        for (i in u) if (o = u[i], r = a[i], u.hasOwnProperty(i) && o !== r && (o != null || r != null)) switch (i) {
          case "selected":
            l.selected = o && typeof o != "function" && typeof o != "symbol";
            break;
          default:
            fl(l, t, i, o, u, r);
        }
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
        for (var j in a) o = a[j], a.hasOwnProperty(j) && o != null && !u.hasOwnProperty(j) && fl(l, t, j, null, u, o);
        for (m in u) if (o = u[m], r = a[m], u.hasOwnProperty(m) && o !== r && (o != null || r != null)) switch (m) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (o != null) throw Error(h(137, t));
            break;
          default:
            fl(l, t, m, o, u, r);
        }
        return;
      default:
        if (tf(t)) {
          for (var cl in a) o = a[cl], a.hasOwnProperty(cl) && o !== void 0 && !u.hasOwnProperty(cl) && Zc(l, t, cl, void 0, u, o);
          for (g in u) o = u[g], r = a[g], !u.hasOwnProperty(g) || o === r || o === void 0 && r === void 0 || Zc(l, t, g, o, u, r);
          return;
        }
    }
    for (var y in a) o = a[y], a.hasOwnProperty(y) && o != null && !u.hasOwnProperty(y) && fl(l, t, y, null, u, o);
    for (z in u) o = u[z], r = a[z], !u.hasOwnProperty(z) || o === r || o == null && r == null || fl(l, t, z, o, u, r);
  }
  function Bd(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return true;
      default:
        return false;
    }
  }
  function Sm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, a = performance.getEntriesByType("resource"), u = 0; u < a.length; u++) {
        var e = a[u], n = e.transferSize, f = e.initiatorType, c = e.duration;
        if (n && c && Bd(f)) {
          for (f = 0, c = e.responseEnd, u += 1; u < a.length; u++) {
            var i = a[u], m = i.startTime;
            if (m > c) break;
            var g = i.transferSize, z = i.initiatorType;
            g && Bd(z) && (i = i.responseEnd, f += g * (i < c ? 1 : (c - m) / (i - m)));
          }
          if (--u, t += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Vc = null, Lc = null;
  function pn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Yd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function xd(l, t) {
    if (l === 0) switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Kc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Jc = null;
  function bm() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Jc ? false : (Jc = l, true) : (Jc = null, false);
  }
  var Gd = typeof setTimeout == "function" ? setTimeout : void 0, zm = typeof clearTimeout == "function" ? clearTimeout : void 0, Xd = typeof Promise == "function" ? Promise : void 0, Em = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xd < "u" ? function(l) {
    return Xd.resolve(null).then(l).catch(Tm);
  } : Gd;
  function Tm(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function ha(l) {
    return l === "head";
  }
  function Qd(l, t) {
    var a = t, u = 0;
    do {
      var e = a.nextSibling;
      if (l.removeChild(a), e && e.nodeType === 8) if (a = e.data, a === "/$" || a === "/&") {
        if (u === 0) {
          l.removeChild(e), Ou(t);
          return;
        }
        u--;
      } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") u++;
      else if (a === "html") me(l.ownerDocument.documentElement);
      else if (a === "head") {
        a = l.ownerDocument.head, me(a);
        for (var n = a.firstChild; n; ) {
          var f = n.nextSibling, c = n.nodeName;
          n[Hu] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || a.removeChild(n), n = f;
        }
      } else a === "body" && me(l.ownerDocument.body);
      a = e;
    } while (a);
    Ou(t);
  }
  function Zd(l, t) {
    var a = l;
    l = 0;
    do {
      var u = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), u && u.nodeType === 8) if (a = u.data, a === "/$") {
        if (l === 0) break;
        l--;
      } else a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || l++;
      a = u;
    } while (a);
  }
  function wc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          wc(a), Fn(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function Am(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (u) {
        if (!l[Hu]) switch (t) {
          case "meta":
            if (!l.hasAttribute("itemprop")) break;
            return l;
          case "link":
            if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence")) break;
            if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title)) break;
            return l;
          case "style":
            if (l.hasAttribute("data-precedence")) break;
            return l;
          case "script":
            if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
            return l;
          default:
            return l;
        }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (l = St(l.nextSibling), l === null) break;
    }
    return null;
  }
  function _m(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = St(l.nextSibling), l === null)) return null;
    return l;
  }
  function Vd(l, t) {
    for (; l.nodeType !== 8; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = St(l.nextSibling), l === null)) return null;
    return l;
  }
  function Wc(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function $c(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Om(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading") t();
    else {
      var u = function() {
        t(), a.removeEventListener("DOMContentLoaded", u);
      };
      a.addEventListener("DOMContentLoaded", u), l._reactRetry = u;
    }
  }
  function St(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var kc = null;
  function Ld(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return St(l.nextSibling);
          t--;
        } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Kd(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Jd(l, t, a) {
    switch (t = pn(a), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(h(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(h(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(h(454));
        return l;
      default:
        throw Error(h(451));
    }
  }
  function me(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    Fn(l);
  }
  var bt = /* @__PURE__ */ new Map(), wd = /* @__PURE__ */ new Set();
  function Dn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var $t = _.d;
  _.d = { f: Mm, r: pm, D: Dm, C: Um, L: Nm, m: Hm, X: Cm, S: Rm, M: jm };
  function Mm() {
    var l = $t.f(), t = bn();
    return l || t;
  }
  function pm(l) {
    var t = La(l);
    t !== null && t.tag === 5 && t.type === "form" ? d0(t) : $t.r(l);
  }
  var Tu = typeof document > "u" ? null : document;
  function Wd(l, t, a) {
    var u = Tu;
    if (u && typeof t == "string" && t) {
      var e = yt(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof a == "string" && (e += '[crossorigin="' + a + '"]'), wd.has(e) || (wd.add(e), l = { rel: l, crossOrigin: a, href: t }, u.querySelector(e) === null && (t = u.createElement("link"), Bl(t, "link", l), Nl(t), u.head.appendChild(t)));
    }
  }
  function Dm(l) {
    $t.D(l), Wd("dns-prefetch", l, null);
  }
  function Um(l, t) {
    $t.C(l, t), Wd("preconnect", l, t);
  }
  function Nm(l, t, a) {
    $t.L(l, t, a);
    var u = Tu;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + yt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (e += '[imagesrcset="' + yt(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (e += '[imagesizes="' + yt(a.imageSizes) + '"]')) : e += '[href="' + yt(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = Au(l);
          break;
        case "script":
          n = _u(l);
      }
      bt.has(n) || (l = C({ rel: "preload", href: t === "image" && a && a.imageSrcSet ? void 0 : l, as: t }, a), bt.set(n, l), u.querySelector(e) !== null || t === "style" && u.querySelector(oe(n)) || t === "script" && u.querySelector(he(n)) || (t = u.createElement("link"), Bl(t, "link", l), Nl(t), u.head.appendChild(t)));
    }
  }
  function Hm(l, t) {
    $t.m(l, t);
    var a = Tu;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + yt(u) + '"][href="' + yt(l) + '"]', n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = _u(l);
      }
      if (!bt.has(n) && (l = C({ rel: "modulepreload", href: l }, t), bt.set(n, l), a.querySelector(e) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(he(n))) return;
        }
        u = a.createElement("link"), Bl(u, "link", l), Nl(u), a.head.appendChild(u);
      }
    }
  }
  function Rm(l, t, a) {
    $t.S(l, t, a);
    var u = Tu;
    if (u && l) {
      var e = Ka(u).hoistableStyles, n = Au(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = u.querySelector(oe(n))) c.loading = 5;
        else {
          l = C({ rel: "stylesheet", href: l, "data-precedence": t }, a), (a = bt.get(n)) && Fc(l, a);
          var i = f = u.createElement("link");
          Nl(i), Bl(i, "link", l), i._p = new Promise(function(m, g) {
            i.onload = m, i.onerror = g;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Un(f, t, u);
        }
        f = { type: "stylesheet", instance: f, count: 1, state: c }, e.set(n, f);
      }
    }
  }
  function Cm(l, t) {
    $t.X(l, t);
    var a = Tu;
    if (a && l) {
      var u = Ka(a).hoistableScripts, e = _u(l), n = u.get(e);
      n || (n = a.querySelector(he(e)), n || (l = C({ src: l, async: true }, t), (t = bt.get(e)) && Ic(l, t), n = a.createElement("script"), Nl(n), Bl(n, "link", l), a.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, u.set(e, n));
    }
  }
  function jm(l, t) {
    $t.M(l, t);
    var a = Tu;
    if (a && l) {
      var u = Ka(a).hoistableScripts, e = _u(l), n = u.get(e);
      n || (n = a.querySelector(he(e)), n || (l = C({ src: l, async: true, type: "module" }, t), (t = bt.get(e)) && Ic(l, t), n = a.createElement("script"), Nl(n), Bl(n, "link", l), a.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, u.set(e, n));
    }
  }
  function $d(l, t, a, u) {
    var e = (e = L.current) ? Dn(e) : null;
    if (!e) throw Error(h(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Au(a.href), a = Ka(e).hoistableStyles, u = a.get(t), u || (u = { type: "style", instance: null, count: 0, state: null }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          l = Au(a.href);
          var n = Ka(e).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, n.set(l, f), (n = e.querySelector(oe(l))) && !n._p && (f.instance = n, f.state.loading = 5), bt.has(l) || (a = { rel: "preload", as: "style", href: a.href, crossOrigin: a.crossOrigin, integrity: a.integrity, media: a.media, hrefLang: a.hrefLang, referrerPolicy: a.referrerPolicy }, bt.set(l, a), n || qm(e, l, a, f.state))), t && u === null) throw Error(h(528, ""));
          return f;
        }
        if (t && u !== null) throw Error(h(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = _u(a), a = Ka(e).hoistableScripts, u = a.get(t), u || (u = { type: "script", instance: null, count: 0, state: null }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(h(444, l));
    }
  }
  function Au(l) {
    return 'href="' + yt(l) + '"';
  }
  function oe(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function kd(l) {
    return C({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function qm(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"), u.preload = t, t.addEventListener("load", function() {
      return u.loading |= 1;
    }), t.addEventListener("error", function() {
      return u.loading |= 2;
    }), Bl(t, "link", a), Nl(t), l.head.appendChild(t));
  }
  function _u(l) {
    return '[src="' + yt(l) + '"]';
  }
  function he(l) {
    return "script[async]" + l;
  }
  function Fd(l, t, a) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var u = l.querySelector('style[data-href~="' + yt(a.href) + '"]');
        if (u) return t.instance = u, Nl(u), u;
        var e = C({}, a, { "data-href": a.href, "data-precedence": a.precedence, href: null, precedence: null });
        return u = (l.ownerDocument || l).createElement("style"), Nl(u), Bl(u, "style", e), Un(u, a.precedence, l), t.instance = u;
      case "stylesheet":
        e = Au(a.href);
        var n = l.querySelector(oe(e));
        if (n) return t.state.loading |= 4, t.instance = n, Nl(n), n;
        u = kd(a), (e = bt.get(e)) && Fc(u, e), n = (l.ownerDocument || l).createElement("link"), Nl(n);
        var f = n;
        return f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Bl(n, "link", u), t.state.loading |= 4, Un(n, a.precedence, l), t.instance = n;
      case "script":
        return n = _u(a.src), (e = l.querySelector(he(n))) ? (t.instance = e, Nl(e), e) : (u = a, (e = bt.get(n)) && (u = C({}, a), Ic(u, e)), l = l.ownerDocument || l, e = l.createElement("script"), Nl(e), Bl(e, "link", u), l.head.appendChild(e), t.instance = e);
      case "void":
        return null;
      default:
        throw Error(h(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance, t.state.loading |= 4, Un(u, a.precedence, l));
    return t.instance;
  }
  function Un(l, t, a) {
    for (var u = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), e = u.length ? u[u.length - 1] : null, n = e, f = 0; f < u.length; f++) {
      var c = u[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function Fc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Ic(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Nn = null;
  function Id(l, t, a) {
    if (Nn === null) {
      var u = /* @__PURE__ */ new Map(), e = Nn = /* @__PURE__ */ new Map();
      e.set(a, u);
    } else e = Nn, u = e.get(a), u || (u = /* @__PURE__ */ new Map(), e.set(a, u));
    if (u.has(l)) return u;
    for (u.set(l, null), a = a.getElementsByTagName(l), e = 0; e < a.length; e++) {
      var n = a[e];
      if (!(n[Hu] || n[Rl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = u.get(f);
        c ? c.push(n) : u.set(f, [n]);
      }
    }
    return u;
  }
  function Pd(l, t, a) {
    l = l.ownerDocument || l, l.head.insertBefore(a, t === "title" ? l.querySelector("head > title") : null);
  }
  function Bm(l, t, a) {
    if (a === 1 || t.itemProp != null) return false;
    switch (l) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return true;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return true;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return true;
    }
    return false;
  }
  function ly(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Ym(l, t, a, u) {
    if (a.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== false) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var e = Au(u.href), n = t.querySelector(oe(e));
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Hn.bind(l), t.then(l, l)), a.state.loading |= 4, a.instance = n, Nl(n);
          return;
        }
        n = t.ownerDocument || t, u = kd(u), (e = bt.get(e)) && Fc(u, e), n = n.createElement("link"), Nl(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Bl(n, "link", u), a.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++, a = Hn.bind(l), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Pc = 0;
  function xm(l, t) {
    return l.stylesheets && l.count === 0 && Cn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(a) {
      var u = setTimeout(function() {
        if (l.stylesheets && Cn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Pc === 0 && (Pc = 62500 * Sm());
      var e = setTimeout(function() {
        if (l.waitingForImages = false, l.count === 0 && (l.stylesheets && Cn(l, l.stylesheets), l.unsuspend)) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, (l.imgBytes > Pc ? 50 : 800) + t);
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(u), clearTimeout(e);
      };
    } : null;
  }
  function Hn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Cn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Rn = null;
  function Cn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Rn = /* @__PURE__ */ new Map(), t.forEach(Gm, l), Rn = null, Hn.call(l));
  }
  function Gm(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Rn.get(l);
      if (a) var u = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Rn.set(l, a);
        for (var e = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (a.set(f.dataset.precedence, f), u = f);
        }
        u && a.set(null, u);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = a.get(f) || u, n === u && a.set(null, e), a.set(f, e), this.count++, u = Hn.bind(this), e.addEventListener("load", u), e.addEventListener("error", u), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var re = { $$typeof: Ul, Provider: null, Consumer: null, _currentValue: q, _currentValue2: q, _threadCount: 0 };
  function Xm(l, t, a, u, e, n, f, c, i) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = wn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wn(0), this.hiddenUpdates = wn(null), this.identifierPrefix = u, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ty(l, t, a, u, e, n, f, c, i, m, g, z) {
    return l = new Xm(l, t, a, f, i, m, g, z, c), t = 1, n === true && (t |= 24), n = et(3, null, null, t), l.current = n, n.stateNode = l, t = Rf(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = { element: u, isDehydrated: a, cache: t }, Bf(n), l;
  }
  function ay(l) {
    return l ? (l = tu, l) : tu;
  }
  function uy(l, t, a, u, e, n) {
    e = ay(e), u.context === null ? u.context = e : u.pendingContext = e, u = ea(t), u.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (u.callback = n), a = na(l, u, t), a !== null && (Il(a, l, t), Wu(a, l, t));
  }
  function ey(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function li(l, t) {
    ey(l, t), (l = l.alternate) && ey(l, t);
  }
  function ny(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Da(l, 67108864);
      t !== null && Il(t, l, 67108864), li(l, 67108864);
    }
  }
  function fy(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = st();
      t = Wn(t);
      var a = Da(l, t);
      a !== null && Il(a, l, t), li(l, t);
    }
  }
  var jn = true;
  function Qm(l, t, a, u) {
    var e = S.T;
    S.T = null;
    var n = _.p;
    try {
      _.p = 2, ti(l, t, a, u);
    } finally {
      _.p = n, S.T = e;
    }
  }
  function Zm(l, t, a, u) {
    var e = S.T;
    S.T = null;
    var n = _.p;
    try {
      _.p = 8, ti(l, t, a, u);
    } finally {
      _.p = n, S.T = e;
    }
  }
  function ti(l, t, a, u) {
    if (jn) {
      var e = ai(u);
      if (e === null) Qc(l, t, u, qn, a), iy(l, u);
      else if (Lm(e, l, t, a, u)) u.stopPropagation();
      else if (iy(l, u), t & 4 && -1 < Vm.indexOf(l)) {
        for (; e !== null; ) {
          var n = La(e);
          if (n !== null) switch (n.tag) {
            case 3:
              if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                var f = Aa(n.pendingLanes);
                if (f !== 0) {
                  var c = n;
                  for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                    var i = 1 << 31 - at(f);
                    c.entanglements[1] |= i, f &= ~i;
                  }
                  Nt(n), (ll & 6) === 0 && (gn = lt() + 500, de(0));
                }
              }
              break;
            case 31:
            case 13:
              c = Da(n, 2), c !== null && Il(c, n, 2), bn(), li(n, 2);
          }
          if (n = ai(u), n === null && Qc(l, t, u, qn, a), n === e) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else Qc(l, t, u, null, a);
    }
  }
  function ai(l) {
    return l = uf(l), ui(l);
  }
  var qn = null;
  function ui(l) {
    if (qn = null, l = Va(l), l !== null) {
      var t = B(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = yl(t), l !== null) return l;
          l = null;
        } else if (a === 31) {
          if (l = gl(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return qn = l, null;
  }
  function cy(l) {
    switch (l) {
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
        switch (Dy()) {
          case hi:
            return 2;
          case ri:
            return 8;
          case Ae:
          case Uy:
            return 32;
          case gi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ei = false, ra = null, ga = null, Sa = null, ge = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), ba = [], Vm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function iy(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ra = null;
        break;
      case "dragenter":
      case "dragleave":
        ga = null;
        break;
      case "mouseover":
      case "mouseout":
        Sa = null;
        break;
      case "pointerover":
      case "pointerout":
        ge.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Se.delete(t.pointerId);
    }
  }
  function be(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n ? (l = { blockedOn: t, domEventName: a, eventSystemFlags: u, nativeEvent: n, targetContainers: [e] }, t !== null && (t = La(t), t !== null && ny(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function Lm(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return ra = be(ra, l, t, a, u, e), true;
      case "dragenter":
        return ga = be(ga, l, t, a, u, e), true;
      case "mouseover":
        return Sa = be(Sa, l, t, a, u, e), true;
      case "pointerover":
        var n = e.pointerId;
        return ge.set(n, be(ge.get(n) || null, l, t, a, u, e)), true;
      case "gotpointercapture":
        return n = e.pointerId, Se.set(n, be(Se.get(n) || null, l, t, a, u, e)), true;
    }
    return false;
  }
  function sy(l) {
    var t = Va(l.target);
    if (t !== null) {
      var a = B(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = yl(a), t !== null) {
            l.blockedOn = t, Ai(l.priority, function() {
              fy(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = gl(a), t !== null) {
            l.blockedOn = t, Ai(l.priority, function() {
              fy(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Bn(l) {
    if (l.blockedOn !== null) return false;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = ai(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(a.type, a);
        af = u, a.target.dispatchEvent(u), af = null;
      } else return t = La(a), t !== null && ny(t), l.blockedOn = a, false;
      t.shift();
    }
    return true;
  }
  function dy(l, t, a) {
    Bn(l) && a.delete(t);
  }
  function Km() {
    ei = false, ra !== null && Bn(ra) && (ra = null), ga !== null && Bn(ga) && (ga = null), Sa !== null && Bn(Sa) && (Sa = null), ge.forEach(dy), Se.forEach(dy);
  }
  function Yn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, ei || (ei = true, A.unstable_scheduleCallback(A.unstable_NormalPriority, Km)));
  }
  var xn = null;
  function yy(l) {
    xn !== l && (xn = l, A.unstable_scheduleCallback(A.unstable_NormalPriority, function() {
      xn === l && (xn = null);
      for (var t = 0; t < l.length; t += 3) {
        var a = l[t], u = l[t + 1], e = l[t + 2];
        if (typeof u != "function") {
          if (ui(u || a) === null) continue;
          break;
        }
        var n = La(a);
        n !== null && (l.splice(t, 3), t -= 3, ac(n, { pending: true, data: e, method: a.method, action: u }, u, e));
      }
    }));
  }
  function Ou(l) {
    function t(i) {
      return Yn(i, l);
    }
    ra !== null && Yn(ra, l), ga !== null && Yn(ga, l), Sa !== null && Yn(Sa, l), ge.forEach(t), Se.forEach(t);
    for (var a = 0; a < ba.length; a++) {
      var u = ba[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < ba.length && (a = ba[0], a.blockedOn === null); ) sy(a), a.blockedOn === null && ba.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null) for (u = 0; u < a.length; u += 3) {
      var e = a[u], n = a[u + 1], f = e[Jl] || null;
      if (typeof n == "function") f || yy(a);
      else if (f) {
        var c = null;
        if (n && n.hasAttribute("formAction")) {
          if (e = n, f = n[Jl] || null) c = f.formAction;
          else if (ui(e) !== null) continue;
        } else c = f.action;
        typeof c == "function" ? a[u + 1] = c : (a.splice(u, 3), u -= 3), yy(a);
      }
    }
  }
  function vy() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({ handler: function() {
        return new Promise(function(f) {
          return e = f;
        });
      }, focusReset: "manual", scroll: "manual" });
    }
    function t() {
      e !== null && (e(), e = null), u || setTimeout(a, 20);
    }
    function a() {
      if (!u && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, { state: n.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var u = false, e = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        u = true, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e !== null && (e(), e = null);
      };
    }
  }
  function ni(l) {
    this._internalRoot = l;
  }
  Gn.prototype.render = ni.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(h(409));
    var a = t.current, u = st();
    uy(a, u, l, t, null, null);
  }, Gn.prototype.unmount = ni.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      uy(l.current, 2, null, l, null, null), bn(), t[Za] = null;
    }
  };
  function Gn(l) {
    this._internalRoot = l;
  }
  Gn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Ti();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < ba.length && t !== 0 && t < ba[a].priority; a++) ;
      ba.splice(a, 0, l), a === 0 && sy(l);
    }
  };
  var my = R.version;
  if (my !== "19.2.5") throw Error(h(527, my, "19.2.5"));
  _.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0) throw typeof l.render == "function" ? Error(h(188)) : (l = Object.keys(l).join(","), Error(h(268, l)));
    return l = T(t), l = l !== null ? V(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Jm = { bundleType: 0, version: "19.2.5", rendererPackageName: "react-dom", currentDispatcherRef: S, reconcilerVersion: "19.2.5" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xn.isDisabled && Xn.supportsFiber) try {
      Du = Xn.inject(Jm), tt = Xn;
    } catch {
    }
  }
  return Ee.createRoot = function(l, t) {
    if (!Y(l)) throw Error(h(299));
    var a = false, u = "", e = z0, n = E0, f = T0;
    return t != null && (t.unstable_strictMode === true && (a = true), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = ty(l, 1, false, null, null, a, u, null, e, n, f, vy), l[Za] = t.current, Xc(l), new ni(t);
  }, Ee.hydrateRoot = function(l, t, a) {
    if (!Y(l)) throw Error(h(299));
    var u = false, e = "", n = z0, f = E0, c = T0, i = null;
    return a != null && (a.unstable_strictMode === true && (u = true), a.identifierPrefix !== void 0 && (e = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (f = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.formState !== void 0 && (i = a.formState)), t = ty(l, 1, true, t, a ?? null, u, e, i, n, f, c, vy), t.context = ay(null), a = t.current, u = st(), u = Wn(u), e = ea(u), e.callback = null, na(a, e, u), a = u, t.current.lanes = a, Nu(t, a), Nt(t), l[Za] = t.current, Xc(l), new Gn(t);
  }, Ee.version = "19.2.5", Ee;
}
var Ay;
function ao() {
  if (Ay) return ii.exports;
  Ay = 1;
  function A() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
    } catch (R) {
      console.error(R);
    }
  }
  return A(), ii.exports = to(), ii.exports;
}
var uo = ao();
function eo(A) {
  return new Worker("/assets/decode.worker-D9pI3B-r.js", { type: "module", name: A == null ? void 0 : A.name });
}
function no() {
  const [A, R] = xl.useState(null), [Z, h] = xl.useState(null), [Y, B] = xl.useState(() => window.location.hash === "#tracker" ? "tracker" : "decode"), [yl, gl] = xl.useState({ status: "idle", analysis: null, error: null }), D = xl.useRef(null), T = xl.useRef(null), V = xl.useRef(null);
  xl.useEffect(() => (V.current = new eo(), () => {
    var _a;
    (_a = V.current) == null ? void 0 : _a.terminate();
  }), []), xl.useEffect(() => {
    const w = () => {
      B(window.location.hash === "#tracker" ? "tracker" : "decode");
    };
    return window.addEventListener("hashchange", w), () => {
      window.removeEventListener("hashchange", w);
    };
  }, []);
  const C = xl.useCallback((w) => {
    B(w), window.location.hash = w === "tracker" ? "tracker" : "decode";
  }, []), vl = xl.useCallback((w) => {
    if (!w.target.files || w.target.files.length === 0) return;
    const rl = w.target.files[0];
    D.current && (D.current.value = "Decoding..."), T.current && (T.current.href !== "#" && URL.revokeObjectURL(T.current.href), T.current.href = "#"), R(rl);
  }, []);
  xl.useEffect(() => {
    if (!A || !V.current) return;
    const w = V.current, rl = (il) => {
      if (il.data.type === "success") {
        const { result: pl, blobUrl: Ul } = il.data;
        D.current && (pl.length > 1e5 ? D.current.value = pl.slice(0, 1e5) + `

... (${(pl.length / 1024 / 1024).toFixed(2)} MB total - download for full content)` : D.current.value = pl), T.current && (T.current.href = Ul, T.current.download = A.name.replace(".sii", "-decoded.sii"));
      } else il.data.type === "decode-error" && D.current && (D.current.value = `Error: ${il.data.message}`);
    };
    w.addEventListener("message", rl);
    const Xl = new FileReader();
    return Xl.onload = (il) => {
      var _a;
      const pl = (_a = il.target) == null ? void 0 : _a.result;
      w.postMessage({ type: "decode", buffer: pl }, [pl]);
    }, Xl.readAsArrayBuffer(A), () => {
      w.removeEventListener("message", rl);
    };
  }, [A]);
  const Gl = xl.useCallback((w) => {
    !w.target.files || w.target.files.length === 0 || (gl({ status: "loading", analysis: null, error: null }), h(w.target.files[0]));
  }, []);
  return xl.useEffect(() => {
    if (!Z || !V.current) return;
    const w = V.current, rl = (il) => {
      if (il.data.type === "analysis-success") try {
        gl({ status: "success", analysis: JSON.parse(il.data.result), error: null });
      } catch {
        gl({ status: "error", analysis: null, error: "Tracker output could not be read." });
      }
      else il.data.type === "analysis-error" && gl({ status: "error", analysis: null, error: il.data.message });
    };
    w.addEventListener("message", rl);
    const Xl = new FileReader();
    return Xl.onload = (il) => {
      var _a;
      const pl = (_a = il.target) == null ? void 0 : _a.result;
      w.postMessage({ type: "analyze", buffer: pl }, [pl]);
    }, Xl.readAsArrayBuffer(Z), () => {
      w.removeEventListener("message", rl);
    };
  }, [Z]), p.jsxs("main", { className: "app-shell", children: [p.jsxs("header", { className: "app-header", children: [p.jsx("h1", { children: "SII Decode" }), p.jsxs("nav", { className: "tabs", "aria-label": "Primary", children: [p.jsx("button", { type: "button", className: Y === "decode" ? "active" : "", onClick: () => C("decode"), children: "Decode" }), p.jsx("button", { type: "button", className: Y === "tracker" ? "active" : "", onClick: () => C("tracker"), children: "ETS2 Tracker" })] })] }), Y === "decode" ? p.jsxs("section", { className: "panel", "aria-labelledby": "decode-title", children: [p.jsx("h2", { id: "decode-title", children: "Decode" }), p.jsx("div", { className: "file-row", children: p.jsx("input", { type: "file", id: "file", "data-testid": "file-upload", onChange: vl }) }), p.jsx("textarea", { id: "output", rows: 20, ref: D, "data-testid": "file-display", spellCheck: "false", readOnly: true }), p.jsx("div", { children: p.jsx("a", { href: "#", ref: T, "data-testid": "file-download", children: "Download decoded file" }) })] }) : p.jsx(fo, { state: yl, onFileChange: Gl }), p.jsxs("p", { className: "footer", children: ["Your file is not uploaded to any server, it is decoded using your own browser.", p.jsx("br", {}), "This tools is", " ", p.jsx("a", { href: "https://github.com/fangyi-zhou/sii-decode-rs/", children: "open source" }), ". If you encounter any issues, please report them", " ", p.jsx("a", { href: "https://github.com/fangyi-zhou/sii-decode-rs/issues", children: "on GitHub" }), "."] })] });
}
function fo({ state: A, onFileChange: R }) {
  return p.jsxs("section", { className: "panel", "aria-labelledby": "tracker-title", children: [p.jsx("h2", { id: "tracker-title", children: "ETS2 Tracker" }), p.jsx("div", { className: "file-row", children: p.jsx("input", { type: "file", id: "tracker-file", "data-testid": "tracker-file-upload", onChange: R }) }), A.status === "loading" ? p.jsx("p", { "data-testid": "tracker-status", children: "Analyzing save..." }) : null, A.status === "error" ? p.jsxs("p", { className: "error", "data-testid": "tracker-error", children: ["Error: ", A.error] }) : null, A.status === "success" && A.analysis ? p.jsxs("div", { className: "tracker-results", "data-testid": "tracker-results", children: [p.jsx(co, { analysis: A.analysis }), p.jsx(io, { achievements: A.analysis.achievements })] }) : null] });
}
function co({ analysis: A }) {
  const R = A.analytics;
  return p.jsxs("section", { className: "summary-grid", "aria-label": "Analytics summary", children: [p.jsx(Mu, { label: "Deliveries", value: R.delivery_count }), p.jsx(Mu, { label: "Distance", value: `${R.total_distance_km} km` }), p.jsx(Mu, { label: "Revenue", value: vo(R.total_revenue) }), p.jsx(Mu, { label: "Cargos", value: R.unique_cargos.length }), p.jsx(Mu, { label: "Companies", value: R.unique_companies.length }), p.jsx(Mu, { label: "Job Types", value: Object.keys(R.job_type_breakdown).length })] });
}
function Mu({ label: A, value: R }) {
  return p.jsxs("div", { className: "metric", children: [p.jsx("span", { children: A }), p.jsx("strong", { children: R })] });
}
function io({ achievements: A }) {
  return p.jsx("section", { className: "achievements", "aria-label": "Achievements", children: A.map((R) => p.jsxs("article", { className: "achievement", children: [p.jsxs("div", { className: "achievement-heading", children: [p.jsxs("div", { children: [p.jsx("h3", { children: R.display_name }), p.jsx("p", { children: R.description })] }), p.jsx("span", { className: `status ${R.status}`, children: R.status === "complete" ? "Complete" : "In progress" })] }), p.jsx("progress", { value: R.progress.current, max: R.progress.target, "aria-label": `${R.display_name} progress` }), p.jsxs("div", { className: "progress-text", children: [R.progress.current, " / ", R.progress.target, " ", R.progress.unit] }), p.jsx(so, { evidence: R.evidence, itemLabel: yo(R.id) })] }, R.id)) });
}
function so({ evidence: A, itemLabel: R }) {
  const [Z, h] = xl.useState(null), Y = Z ? _y(Z.value) : [];
  return p.jsxs(p.Fragment, { children: [p.jsx("ul", { className: "evidence-list", children: A.map((B) => {
    const yl = _y(B.value), gl = R !== null && yl.length > 1;
    return p.jsxs("li", { children: [p.jsx("span", { className: "evidence-label", children: B.label }), gl ? p.jsxs("button", { type: "button", className: "evidence-summary", onClick: () => h(B), children: ["View ", yl.length, " ", R] }) : p.jsx("span", { className: "evidence-value", children: B.value })] }, B.label);
  }) }), Z ? p.jsx("div", { className: "evidence-popout-backdrop", onClick: () => h(null), children: p.jsxs("section", { className: "evidence-popout", role: "dialog", "aria-modal": "true", "aria-labelledby": "evidence-popout-title", onClick: (B) => B.stopPropagation(), children: [p.jsxs("div", { className: "evidence-popout-heading", children: [p.jsxs("div", { children: [p.jsx("h4", { id: "evidence-popout-title", children: Z.label }), p.jsxs("p", { children: [Y.length, " ", R ?? "items"] })] }), p.jsx("button", { type: "button", className: "evidence-popout-close", onClick: () => h(null), children: "Close" })] }), p.jsx("ul", { className: "cargo-popout-list", children: Y.map((B) => p.jsx("li", { children: B }, B)) })] }) }) : null] });
}
function _y(A) {
  return A.split(",").map((R) => R.trim()).filter(Boolean);
}
function yo(A) {
  return A === "reliable_contractor" ? "companies" : A === "experience_beats_all" || A === "all_is_possible" ? "cargos" : null;
}
function vo(A) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(A);
}
uo.createRoot(document.getElementById("root")).render(p.jsx(xl.StrictMode, { children: p.jsx(no, {}) }));
