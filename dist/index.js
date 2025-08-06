import q from "react";
var ve = { exports: {} }, oe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt;
function or() {
  if (lt) return oe;
  lt = 1;
  var e = q, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(d, c, l) {
    var h, _ = {}, f = null, R = null;
    l !== void 0 && (f = "" + l), c.key !== void 0 && (f = "" + c.key), c.ref !== void 0 && (R = c.ref);
    for (h in c) s.call(c, h) && !a.hasOwnProperty(h) && (_[h] = c[h]);
    if (d && d.defaultProps) for (h in c = d.defaultProps, c) _[h] === void 0 && (_[h] = c[h]);
    return { $$typeof: t, type: d, key: f, ref: R, props: _, _owner: n.current };
  }
  return oe.Fragment = r, oe.jsx = o, oe.jsxs = o, oe;
}
var ae = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ut;
function ar() {
  return ut || (ut = 1, process.env.NODE_ENV !== "production" && function() {
    var e = q, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), d = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), A = Symbol.iterator, L = "@@iterator";
    function w(i) {
      if (i === null || typeof i != "object")
        return null;
      var u = A && i[A] || i[L];
      return typeof u == "function" ? u : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(i) {
      {
        for (var u = arguments.length, g = new Array(u > 1 ? u - 1 : 0), p = 1; p < u; p++)
          g[p - 1] = arguments[p];
        j("error", i, g);
      }
    }
    function j(i, u, g) {
      {
        var p = E.ReactDebugCurrentFrame, b = p.getStackAddendum();
        b !== "" && (u += "%s", g = g.concat([b]));
        var k = g.map(function(S) {
          return String(S);
        });
        k.unshift("Warning: " + u), Function.prototype.apply.call(console[i], console, k);
      }
    }
    var N = !1, D = !1, P = !1, W = !1, M = !1, x;
    x = Symbol.for("react.module.reference");
    function ee(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === s || i === a || M || i === n || i === l || i === h || W || i === R || N || D || P || typeof i == "object" && i !== null && (i.$$typeof === f || i.$$typeof === _ || i.$$typeof === o || i.$$typeof === d || i.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === x || i.getModuleId !== void 0));
    }
    function le(i, u, g) {
      var p = i.displayName;
      if (p)
        return p;
      var b = u.displayName || u.name || "";
      return b !== "" ? g + "(" + b + ")" : g;
    }
    function ue(i) {
      return i.displayName || "Context";
    }
    function F(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case s:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case n:
          return "StrictMode";
        case l:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case d:
            var u = i;
            return ue(u) + ".Consumer";
          case o:
            var g = i;
            return ue(g._context) + ".Provider";
          case c:
            return le(i, i.render, "ForwardRef");
          case _:
            var p = i.displayName || null;
            return p !== null ? p : F(i.type) || "Memo";
          case f: {
            var b = i, k = b._payload, S = b._init;
            try {
              return F(S(k));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, X = 0, de, ge, ie, he, Je, Ke, ze;
    function Ve() {
    }
    Ve.__reactDisabledLog = !0;
    function At() {
      {
        if (X === 0) {
          de = console.log, ge = console.info, ie = console.warn, he = console.error, Je = console.group, Ke = console.groupCollapsed, ze = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: Ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        X++;
      }
    }
    function jt() {
      {
        if (X--, X === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, i, {
              value: de
            }),
            info: V({}, i, {
              value: ge
            }),
            warn: V({}, i, {
              value: ie
            }),
            error: V({}, i, {
              value: he
            }),
            group: V({}, i, {
              value: Je
            }),
            groupCollapsed: V({}, i, {
              value: Ke
            }),
            groupEnd: V({}, i, {
              value: ze
            })
          });
        }
        X < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ke = E.ReactCurrentDispatcher, Ee;
    function _e(i, u, g) {
      {
        if (Ee === void 0)
          try {
            throw Error();
          } catch (b) {
            var p = b.stack.trim().match(/\n( *(at )?)/);
            Ee = p && p[1] || "";
          }
        return `
` + Ee + i;
      }
    }
    var Re = !1, pe;
    {
      var Nt = typeof WeakMap == "function" ? WeakMap : Map;
      pe = new Nt();
    }
    function Be(i, u) {
      if (!i || Re)
        return "";
      {
        var g = pe.get(i);
        if (g !== void 0)
          return g;
      }
      var p;
      Re = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var k;
      k = ke.current, ke.current = null, At();
      try {
        if (u) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch (U) {
              p = U;
            }
            Reflect.construct(i, [], S);
          } else {
            try {
              S.call();
            } catch (U) {
              p = U;
            }
            i.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            p = U;
          }
          i();
        }
      } catch (U) {
        if (U && p && typeof U.stack == "string") {
          for (var v = U.stack.split(`
`), I = p.stack.split(`
`), T = v.length - 1, C = I.length - 1; T >= 1 && C >= 0 && v[T] !== I[C]; )
            C--;
          for (; T >= 1 && C >= 0; T--, C--)
            if (v[T] !== I[C]) {
              if (T !== 1 || C !== 1)
                do
                  if (T--, C--, C < 0 || v[T] !== I[C]) {
                    var $ = `
` + v[T].replace(" at new ", " at ");
                    return i.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", i.displayName)), typeof i == "function" && pe.set(i, $), $;
                  }
                while (T >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        Re = !1, ke.current = k, jt(), Error.prepareStackTrace = b;
      }
      var re = i ? i.displayName || i.name : "", Q = re ? _e(re) : "";
      return typeof i == "function" && pe.set(i, Q), Q;
    }
    function qt(i, u, g) {
      return Be(i, !1);
    }
    function Dt(i) {
      var u = i.prototype;
      return !!(u && u.isReactComponent);
    }
    function fe(i, u, g) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return Be(i, Dt(i));
      if (typeof i == "string")
        return _e(i);
      switch (i) {
        case l:
          return _e("Suspense");
        case h:
          return _e("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case c:
            return qt(i.render);
          case _:
            return fe(i.type, u, g);
          case f: {
            var p = i, b = p._payload, k = p._init;
            try {
              return fe(k(b), u, g);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, Ye = {}, Ge = E.ReactDebugCurrentFrame;
    function we(i) {
      if (i) {
        var u = i._owner, g = fe(i.type, i._source, u ? u.type : null);
        Ge.setExtraStackFrame(g);
      } else
        Ge.setExtraStackFrame(null);
    }
    function Mt(i, u, g, p, b) {
      {
        var k = Function.call.bind(ne);
        for (var S in i)
          if (k(i, S)) {
            var v = void 0;
            try {
              if (typeof i[S] != "function") {
                var I = Error((p || "React class") + ": " + g + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw I.name = "Invariant Violation", I;
              }
              v = i[S](u, S, p, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              v = T;
            }
            v && !(v instanceof Error) && (we(b), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", g, S, typeof v), we(null)), v instanceof Error && !(v.message in Ye) && (Ye[v.message] = !0, we(b), y("Failed %s type: %s", g, v.message), we(null));
          }
      }
    }
    var $t = Array.isArray;
    function Te(i) {
      return $t(i);
    }
    function Lt(i) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, g = u && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return g;
      }
    }
    function Wt(i) {
      try {
        return Xe(i), !1;
      } catch {
        return !0;
      }
    }
    function Xe(i) {
      return "" + i;
    }
    function Qe(i) {
      if (Wt(i))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Lt(i)), Xe(i);
    }
    var Ze = E.ReactCurrentOwner, Ft = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, et, tt;
    function Ht(i) {
      if (ne.call(i, "ref")) {
        var u = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function Jt(i) {
      if (ne.call(i, "key")) {
        var u = Object.getOwnPropertyDescriptor(i, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function Kt(i, u) {
      typeof i.ref == "string" && Ze.current;
    }
    function zt(i, u) {
      {
        var g = function() {
          et || (et = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        g.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function Vt(i, u) {
      {
        var g = function() {
          tt || (tt = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        g.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var Bt = function(i, u, g, p, b, k, S) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: u,
        ref: g,
        props: S,
        // Record the component responsible for creating this element.
        _owner: k
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function Yt(i, u, g, p, b) {
      {
        var k, S = {}, v = null, I = null;
        g !== void 0 && (Qe(g), v = "" + g), Jt(u) && (Qe(u.key), v = "" + u.key), Ht(u) && (I = u.ref, Kt(u, b));
        for (k in u)
          ne.call(u, k) && !Ft.hasOwnProperty(k) && (S[k] = u[k]);
        if (i && i.defaultProps) {
          var T = i.defaultProps;
          for (k in T)
            S[k] === void 0 && (S[k] = T[k]);
        }
        if (v || I) {
          var C = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          v && zt(S, C), I && Vt(S, C);
        }
        return Bt(i, v, I, b, p, Ze.current, S);
      }
    }
    var Pe = E.ReactCurrentOwner, rt = E.ReactDebugCurrentFrame;
    function te(i) {
      if (i) {
        var u = i._owner, g = fe(i.type, i._source, u ? u.type : null);
        rt.setExtraStackFrame(g);
      } else
        rt.setExtraStackFrame(null);
    }
    var Ce;
    Ce = !1;
    function xe(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function st() {
      {
        if (Pe.current) {
          var i = F(Pe.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function Gt(i) {
      return "";
    }
    var it = {};
    function Xt(i) {
      {
        var u = st();
        if (!u) {
          var g = typeof i == "string" ? i : i.displayName || i.name;
          g && (u = `

Check the top-level render call using <` + g + ">.");
        }
        return u;
      }
    }
    function nt(i, u) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var g = Xt(u);
        if (it[g])
          return;
        it[g] = !0;
        var p = "";
        i && i._owner && i._owner !== Pe.current && (p = " It was passed a child from " + F(i._owner.type) + "."), te(i), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, p), te(null);
      }
    }
    function ot(i, u) {
      {
        if (typeof i != "object")
          return;
        if (Te(i))
          for (var g = 0; g < i.length; g++) {
            var p = i[g];
            xe(p) && nt(p, u);
          }
        else if (xe(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var b = w(i);
          if (typeof b == "function" && b !== i.entries)
            for (var k = b.call(i), S; !(S = k.next()).done; )
              xe(S.value) && nt(S.value, u);
        }
      }
    }
    function Qt(i) {
      {
        var u = i.type;
        if (u == null || typeof u == "string")
          return;
        var g;
        if (typeof u == "function")
          g = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === _))
          g = u.propTypes;
        else
          return;
        if (g) {
          var p = F(u);
          Mt(g, i.props, "prop", p, i);
        } else if (u.PropTypes !== void 0 && !Ce) {
          Ce = !0;
          var b = F(u);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Zt(i) {
      {
        for (var u = Object.keys(i.props), g = 0; g < u.length; g++) {
          var p = u[g];
          if (p !== "children" && p !== "key") {
            te(i), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), te(null);
            break;
          }
        }
        i.ref !== null && (te(i), y("Invalid attribute `ref` supplied to `React.Fragment`."), te(null));
      }
    }
    var at = {};
    function ct(i, u, g, p, b, k) {
      {
        var S = ee(i);
        if (!S) {
          var v = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var I = Gt();
          I ? v += I : v += st();
          var T;
          i === null ? T = "null" : Te(i) ? T = "array" : i !== void 0 && i.$$typeof === t ? (T = "<" + (F(i.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : T = typeof i, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, v);
        }
        var C = Yt(i, u, g, b, k);
        if (C == null)
          return C;
        if (S) {
          var $ = u.children;
          if ($ !== void 0)
            if (p)
              if (Te($)) {
                for (var re = 0; re < $.length; re++)
                  ot($[re], i);
                Object.freeze && Object.freeze($);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ot($, i);
        }
        if (ne.call(u, "key")) {
          var Q = F(i), U = Object.keys(u).filter(function(nr) {
            return nr !== "key";
          }), Ie = U.length > 0 ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!at[Q + Ie]) {
            var ir = U.length > 0 ? "{" + U.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ie, Q, ir, Q), at[Q + Ie] = !0;
          }
        }
        return i === s ? Zt(C) : Qt(C), C;
      }
    }
    function er(i, u, g) {
      return ct(i, u, g, !0);
    }
    function tr(i, u, g) {
      return ct(i, u, g, !1);
    }
    var rr = tr, sr = er;
    ae.Fragment = s, ae.jsx = rr, ae.jsxs = sr;
  }()), ae;
}
var dt;
function cr() {
  return dt || (dt = 1, process.env.NODE_ENV === "production" ? ve.exports = or() : ve.exports = ar()), ve.exports;
}
var Y = cr();
const lr = {
  // authority,
  // client_id: clientId,
  redirect_uri: window.location.origin,
  response_type: "code",
  scope: [
    // "phone",
    // "email",
    "openid",
    // "aws.cognito.signin.user.admin",
    "profile"
  ].join(" "),
  extraQueryParams: { lang: "ja" },
  onSigninCallback: () => window.history.replaceState({}, document.title, window.location.pathname)
};
function ss(e, t) {
  const r = window.location.origin;
  window.location.href = `${e}/logout?client_id=${t}&logout_uri=${encodeURIComponent(
    r
  )}`;
}
class ce extends Error {
}
ce.prototype.name = "InvalidTokenError";
function ur(e) {
  return decodeURIComponent(atob(e).replace(/(.)/g, (t, r) => {
    let s = r.charCodeAt(0).toString(16).toUpperCase();
    return s.length < 2 && (s = "0" + s), "%" + s;
  }));
}
function dr(e) {
  let t = e.replace(/-/g, "+").replace(/_/g, "/");
  switch (t.length % 4) {
    case 0:
      break;
    case 2:
      t += "==";
      break;
    case 3:
      t += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return ur(t);
  } catch {
    return atob(t);
  }
}
function gr(e, t) {
  if (typeof e != "string")
    throw new ce("Invalid token specified: must be a string");
  t || (t = {});
  const r = t.header === !0 ? 0 : 1, s = e.split(".")[r];
  if (typeof s != "string")
    throw new ce(`Invalid token specified: missing part #${r + 1}`);
  let n;
  try {
    n = dr(s);
  } catch (a) {
    throw new ce(`Invalid token specified: invalid base64 for part #${r + 1} (${a.message})`);
  }
  try {
    return JSON.parse(n);
  } catch (a) {
    throw new ce(`Invalid token specified: invalid json for part #${r + 1} (${a.message})`);
  }
}
var hr = {
  debug: () => {
  },
  info: () => {
  },
  warn: () => {
  },
  error: () => {
  }
}, K, z, Se = /* @__PURE__ */ ((e) => (e[e.NONE = 0] = "NONE", e[e.ERROR = 1] = "ERROR", e[e.WARN = 2] = "WARN", e[e.INFO = 3] = "INFO", e[e.DEBUG = 4] = "DEBUG", e))(Se || {});
((e) => {
  function t() {
    K = 3, z = hr;
  }
  e.reset = t;
  function r(n) {
    if (!(0 <= n && n <= 4))
      throw new Error("Invalid log level");
    K = n;
  }
  e.setLevel = r;
  function s(n) {
    z = n;
  }
  e.setLogger = s;
})(Se || (Se = {}));
var m = class H {
  constructor(t) {
    this._name = t;
  }
  /* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
  debug(...t) {
    K >= 4 && z.debug(H._format(this._name, this._method), ...t);
  }
  info(...t) {
    K >= 3 && z.info(H._format(this._name, this._method), ...t);
  }
  warn(...t) {
    K >= 2 && z.warn(H._format(this._name, this._method), ...t);
  }
  error(...t) {
    K >= 1 && z.error(H._format(this._name, this._method), ...t);
  }
  /* eslint-enable @typescript-eslint/no-unsafe-enum-comparison */
  throw(t) {
    throw this.error(t), t;
  }
  create(t) {
    const r = Object.create(this);
    return r._method = t, r.debug("begin"), r;
  }
  static createStatic(t, r) {
    const s = new H(`${t}.${r}`);
    return s.debug("begin"), s;
  }
  static _format(t, r) {
    const s = `[${t}]`;
    return r ? `${s} ${r}:` : s;
  }
  /* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
  // helpers for static class methods
  static debug(t, ...r) {
    K >= 4 && z.debug(H._format(t), ...r);
  }
  static info(t, ...r) {
    K >= 3 && z.info(H._format(t), ...r);
  }
  static warn(t, ...r) {
    K >= 2 && z.warn(H._format(t), ...r);
  }
  static error(t, ...r) {
    K >= 1 && z.error(H._format(t), ...r);
  }
  /* eslint-enable @typescript-eslint/no-unsafe-enum-comparison */
};
Se.reset();
var ye = class {
  // IMPORTANT: doesn't validate the token
  static decode(e) {
    try {
      return gr(e);
    } catch (t) {
      throw m.error("JwtUtils.decode", t), t;
    }
  }
  static async generateSignedJwt(e, t, r) {
    const s = O.encodeBase64Url(new TextEncoder().encode(JSON.stringify(e))), n = O.encodeBase64Url(new TextEncoder().encode(JSON.stringify(t))), a = `${s}.${n}`, o = await window.crypto.subtle.sign(
      {
        name: "ECDSA",
        hash: { name: "SHA-256" }
      },
      r,
      new TextEncoder().encode(a)
    ), d = O.encodeBase64Url(new Uint8Array(o));
    return `${a}.${d}`;
  }
}, _r = "10000000-1000-4000-8000-100000000000", je = (e) => btoa([...new Uint8Array(e)].map((t) => String.fromCharCode(t)).join("")), vt = class J {
  static _randomWord() {
    const t = new Uint32Array(1);
    return crypto.getRandomValues(t), t[0];
  }
  /**
   * Generates RFC4122 version 4 guid
   */
  static generateUUIDv4() {
    return _r.replace(
      /[018]/g,
      (r) => (+r ^ J._randomWord() & 15 >> +r / 4).toString(16)
    ).replace(/-/g, "");
  }
  /**
   * PKCE: Generate a code verifier
   */
  static generateCodeVerifier() {
    return J.generateUUIDv4() + J.generateUUIDv4() + J.generateUUIDv4();
  }
  /**
   * PKCE: Generate a code challenge
   */
  static async generateCodeChallenge(t) {
    if (!crypto.subtle)
      throw new Error("Crypto.subtle is available only in secure contexts (HTTPS).");
    try {
      const s = new TextEncoder().encode(t), n = await crypto.subtle.digest("SHA-256", s);
      return je(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    } catch (r) {
      throw m.error("CryptoUtils.generateCodeChallenge", r), r;
    }
  }
  /**
   * Generates a base64-encoded string for a basic auth header
   */
  static generateBasicAuth(t, r) {
    const n = new TextEncoder().encode([t, r].join(":"));
    return je(n);
  }
  /**
   * Generates a hash of a string using a given algorithm
   * @param alg
   * @param message
   */
  static async hash(t, r) {
    const s = new TextEncoder().encode(r), n = await crypto.subtle.digest(t, s);
    return new Uint8Array(n);
  }
  /**
   * Generates a rfc7638 compliant jwk thumbprint
   * @param jwk
   */
  static async customCalculateJwkThumbprint(t) {
    let r;
    switch (t.kty) {
      case "RSA":
        r = {
          e: t.e,
          kty: t.kty,
          n: t.n
        };
        break;
      case "EC":
        r = {
          crv: t.crv,
          kty: t.kty,
          x: t.x,
          y: t.y
        };
        break;
      case "OKP":
        r = {
          crv: t.crv,
          kty: t.kty,
          x: t.x
        };
        break;
      case "oct":
        r = {
          crv: t.k,
          kty: t.kty
        };
        break;
      default:
        throw new Error("Unknown jwk type");
    }
    const s = await J.hash("SHA-256", JSON.stringify(r));
    return J.encodeBase64Url(s);
  }
  static async generateDPoPProof({
    url: t,
    accessToken: r,
    httpMethod: s,
    keyPair: n,
    nonce: a
  }) {
    let o, d;
    const c = {
      jti: window.crypto.randomUUID(),
      htm: s ?? "GET",
      htu: t,
      iat: Math.floor(Date.now() / 1e3)
    };
    r && (o = await J.hash("SHA-256", r), d = J.encodeBase64Url(o), c.ath = d), a && (c.nonce = a);
    try {
      const l = await crypto.subtle.exportKey("jwk", n.publicKey), h = {
        alg: "ES256",
        typ: "dpop+jwt",
        jwk: {
          crv: l.crv,
          kty: l.kty,
          x: l.x,
          y: l.y
        }
      };
      return await ye.generateSignedJwt(h, c, n.privateKey);
    } catch (l) {
      throw l instanceof TypeError ? new Error(`Error exporting dpop public key: ${l.message}`) : l;
    }
  }
  static async generateDPoPJkt(t) {
    try {
      const r = await crypto.subtle.exportKey("jwk", t.publicKey);
      return await J.customCalculateJwkThumbprint(r);
    } catch (r) {
      throw r instanceof TypeError ? new Error(`Could not retrieve dpop keys from storage: ${r.message}`) : r;
    }
  }
  static async generateDPoPKeys() {
    return await window.crypto.subtle.generateKey(
      {
        name: "ECDSA",
        namedCurve: "P-256"
      },
      !1,
      ["sign", "verify"]
    );
  }
};
vt.encodeBase64Url = (e) => je(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
var O = vt, G = class {
  constructor(e) {
    this._name = e, this._callbacks = [], this._logger = new m(`Event('${this._name}')`);
  }
  addHandler(e) {
    return this._callbacks.push(e), () => this.removeHandler(e);
  }
  removeHandler(e) {
    const t = this._callbacks.lastIndexOf(e);
    t >= 0 && this._callbacks.splice(t, 1);
  }
  async raise(...e) {
    this._logger.debug("raise:", ...e);
    for (const t of this._callbacks)
      await t(...e);
  }
}, gt = class {
  /**
   * Populates a map of window features with a placement centered in front of
   * the current window. If no explicit width is given, a default value is
   * binned into [800, 720, 600, 480, 360] based on the current window's width.
   */
  static center({ ...e }) {
    var t, r, s;
    return e.width == null && (e.width = (t = [800, 720, 600, 480].find((n) => n <= window.outerWidth / 1.618)) != null ? t : 360), (r = e.left) != null || (e.left = Math.max(0, Math.round(window.screenX + (window.outerWidth - e.width) / 2))), e.height != null && ((s = e.top) != null || (e.top = Math.max(0, Math.round(window.screenY + (window.outerHeight - e.height) / 2)))), e;
  }
  static serialize(e) {
    return Object.entries(e).filter(([, t]) => t != null).map(([t, r]) => `${t}=${typeof r != "boolean" ? r : r ? "yes" : "no"}`).join(",");
  }
}, B = class me extends G {
  constructor() {
    super(...arguments), this._logger = new m(`Timer('${this._name}')`), this._timerHandle = null, this._expiration = 0, this._callback = () => {
      const t = this._expiration - me.getEpochTime();
      this._logger.debug("timer completes in", t), this._expiration <= me.getEpochTime() && (this.cancel(), super.raise());
    };
  }
  // get the time
  static getEpochTime() {
    return Math.floor(Date.now() / 1e3);
  }
  init(t) {
    const r = this._logger.create("init");
    t = Math.max(Math.floor(t), 1);
    const s = me.getEpochTime() + t;
    if (this.expiration === s && this._timerHandle) {
      r.debug("skipping since already initialized for expiration at", this.expiration);
      return;
    }
    this.cancel(), r.debug("using duration", t), this._expiration = s;
    const n = Math.min(t, 5);
    this._timerHandle = setInterval(this._callback, n * 1e3);
  }
  get expiration() {
    return this._expiration;
  }
  cancel() {
    this._logger.create("cancel"), this._timerHandle && (clearInterval(this._timerHandle), this._timerHandle = null);
  }
}, Ne = class {
  static readParams(e, t = "query") {
    if (!e) throw new TypeError("Invalid URL");
    const s = new URL(e, "http://127.0.0.1")[t === "fragment" ? "hash" : "search"];
    return new URLSearchParams(s.slice(1));
  }
}, se = ";", Z = class extends Error {
  constructor(e, t) {
    var r, s, n;
    if (super(e.error_description || e.error || ""), this.form = t, this.name = "ErrorResponse", !e.error)
      throw m.error("ErrorResponse", "No error passed"), new Error("No error passed");
    this.error = e.error, this.error_description = (r = e.error_description) != null ? r : null, this.error_uri = (s = e.error_uri) != null ? s : null, this.state = e.userState, this.session_state = (n = e.session_state) != null ? n : null, this.url_state = e.url_state;
  }
}, Le = class extends Error {
  constructor(e) {
    super(e), this.name = "ErrorTimeout";
  }
}, pr = class {
  constructor(e) {
    this._logger = new m("AccessTokenEvents"), this._expiringTimer = new B("Access token expiring"), this._expiredTimer = new B("Access token expired"), this._expiringNotificationTimeInSeconds = e.expiringNotificationTimeInSeconds;
  }
  async load(e) {
    const t = this._logger.create("load");
    if (e.access_token && e.expires_in !== void 0) {
      const r = e.expires_in;
      if (t.debug("access token present, remaining duration:", r), r > 0) {
        let n = r - this._expiringNotificationTimeInSeconds;
        n <= 0 && (n = 1), t.debug("registering expiring timer, raising in", n, "seconds"), this._expiringTimer.init(n);
      } else
        t.debug("canceling existing expiring timer because we're past expiration."), this._expiringTimer.cancel();
      const s = r + 1;
      t.debug("registering expired timer, raising in", s, "seconds"), this._expiredTimer.init(s);
    } else
      this._expiringTimer.cancel(), this._expiredTimer.cancel();
  }
  async unload() {
    this._logger.debug("unload: canceling existing access token timers"), this._expiringTimer.cancel(), this._expiredTimer.cancel();
  }
  /**
   * Add callback: Raised prior to the access token expiring.
   */
  addAccessTokenExpiring(e) {
    return this._expiringTimer.addHandler(e);
  }
  /**
   * Remove callback: Raised prior to the access token expiring.
   */
  removeAccessTokenExpiring(e) {
    this._expiringTimer.removeHandler(e);
  }
  /**
   * Add callback: Raised after the access token has expired.
   */
  addAccessTokenExpired(e) {
    return this._expiredTimer.addHandler(e);
  }
  /**
   * Remove callback: Raised after the access token has expired.
   */
  removeAccessTokenExpired(e) {
    this._expiredTimer.removeHandler(e);
  }
}, fr = class {
  constructor(e, t, r, s, n) {
    this._callback = e, this._client_id = t, this._intervalInSeconds = s, this._stopOnError = n, this._logger = new m("CheckSessionIFrame"), this._timer = null, this._session_state = null, this._message = (o) => {
      o.origin === this._frame_origin && o.source === this._frame.contentWindow && (o.data === "error" ? (this._logger.error("error message from check session op iframe"), this._stopOnError && this.stop()) : o.data === "changed" ? (this._logger.debug("changed message from check session op iframe"), this.stop(), this._callback()) : this._logger.debug(o.data + " message from check session op iframe"));
    };
    const a = new URL(r);
    this._frame_origin = a.origin, this._frame = window.document.createElement("iframe"), this._frame.style.visibility = "hidden", this._frame.style.position = "fixed", this._frame.style.left = "-1000px", this._frame.style.top = "0", this._frame.width = "0", this._frame.height = "0", this._frame.src = a.href;
  }
  load() {
    return new Promise((e) => {
      this._frame.onload = () => {
        e();
      }, window.document.body.appendChild(this._frame), window.addEventListener("message", this._message, !1);
    });
  }
  start(e) {
    if (this._session_state === e)
      return;
    this._logger.create("start"), this.stop(), this._session_state = e;
    const t = () => {
      !this._frame.contentWindow || !this._session_state || this._frame.contentWindow.postMessage(this._client_id + " " + this._session_state, this._frame_origin);
    };
    t(), this._timer = setInterval(t, this._intervalInSeconds * 1e3);
  }
  stop() {
    this._logger.create("stop"), this._session_state = null, this._timer && (clearInterval(this._timer), this._timer = null);
  }
}, mt = class {
  constructor() {
    this._logger = new m("InMemoryWebStorage"), this._data = {};
  }
  clear() {
    this._logger.create("clear"), this._data = {};
  }
  getItem(e) {
    return this._logger.create(`getItem('${e}')`), this._data[e];
  }
  setItem(e, t) {
    this._logger.create(`setItem('${e}')`), this._data[e] = t;
  }
  removeItem(e) {
    this._logger.create(`removeItem('${e}')`), delete this._data[e];
  }
  get length() {
    return Object.getOwnPropertyNames(this._data).length;
  }
  key(e) {
    return Object.getOwnPropertyNames(this._data)[e];
  }
}, qe = class extends Error {
  constructor(e, t) {
    super(t), this.name = "ErrorDPoPNonce", this.nonce = e;
  }
}, We = class {
  constructor(e = [], t = null, r = {}) {
    this._jwtHandler = t, this._extraHeaders = r, this._logger = new m("JsonService"), this._contentTypes = [], this._contentTypes.push(...e, "application/json"), t && this._contentTypes.push("application/jwt");
  }
  async fetchWithTimeout(e, t = {}) {
    const { timeoutInSeconds: r, ...s } = t;
    if (!r)
      return await fetch(e, s);
    const n = new AbortController(), a = setTimeout(() => n.abort(), r * 1e3);
    try {
      return await fetch(e, {
        ...t,
        signal: n.signal
      });
    } catch (o) {
      throw o instanceof DOMException && o.name === "AbortError" ? new Le("Network timed out") : o;
    } finally {
      clearTimeout(a);
    }
  }
  async getJson(e, {
    token: t,
    credentials: r,
    timeoutInSeconds: s
  } = {}) {
    const n = this._logger.create("getJson"), a = {
      Accept: this._contentTypes.join(", ")
    };
    t && (n.debug("token passed, setting Authorization header"), a.Authorization = "Bearer " + t), this._appendExtraHeaders(a);
    let o;
    try {
      n.debug("url:", e), o = await this.fetchWithTimeout(e, { method: "GET", headers: a, timeoutInSeconds: s, credentials: r });
    } catch (l) {
      throw n.error("Network Error"), l;
    }
    n.debug("HTTP response received, status", o.status);
    const d = o.headers.get("Content-Type");
    if (d && !this._contentTypes.find((l) => d.startsWith(l)) && n.throw(new Error(`Invalid response Content-Type: ${d ?? "undefined"}, from URL: ${e}`)), o.ok && this._jwtHandler && d?.startsWith("application/jwt"))
      return await this._jwtHandler(await o.text());
    let c;
    try {
      c = await o.json();
    } catch (l) {
      throw n.error("Error parsing JSON response", l), o.ok ? l : new Error(`${o.statusText} (${o.status})`);
    }
    if (!o.ok)
      throw n.error("Error from server:", c), c.error ? new Z(c) : new Error(`${o.statusText} (${o.status}): ${JSON.stringify(c)}`);
    return c;
  }
  async postForm(e, {
    body: t,
    basicAuth: r,
    timeoutInSeconds: s,
    initCredentials: n,
    extraHeaders: a
  }) {
    const o = this._logger.create("postForm"), d = {
      Accept: this._contentTypes.join(", "),
      "Content-Type": "application/x-www-form-urlencoded",
      ...a
    };
    r !== void 0 && (d.Authorization = "Basic " + r), this._appendExtraHeaders(d);
    let c;
    try {
      o.debug("url:", e), c = await this.fetchWithTimeout(e, { method: "POST", headers: d, body: t, timeoutInSeconds: s, credentials: n });
    } catch (f) {
      throw o.error("Network error"), f;
    }
    o.debug("HTTP response received, status", c.status);
    const l = c.headers.get("Content-Type");
    if (l && !this._contentTypes.find((f) => l.startsWith(f)))
      throw new Error(`Invalid response Content-Type: ${l ?? "undefined"}, from URL: ${e}`);
    const h = await c.text();
    let _ = {};
    if (h)
      try {
        _ = JSON.parse(h);
      } catch (f) {
        throw o.error("Error parsing JSON response", f), c.ok ? f : new Error(`${c.statusText} (${c.status})`);
      }
    if (!c.ok) {
      if (o.error("Error from server:", _), c.headers.has("dpop-nonce")) {
        const f = c.headers.get("dpop-nonce");
        throw new qe(f, `${JSON.stringify(_)}`);
      }
      throw _.error ? new Z(_, t) : new Error(`${c.statusText} (${c.status}): ${JSON.stringify(_)}`);
    }
    return _;
  }
  _appendExtraHeaders(e) {
    const t = this._logger.create("appendExtraHeaders"), r = Object.keys(this._extraHeaders), s = [
      "accept",
      "content-type"
    ], n = [
      "authorization"
    ];
    r.length !== 0 && r.forEach((a) => {
      if (s.includes(a.toLocaleLowerCase())) {
        t.warn("Protected header could not be set", a, s);
        return;
      }
      if (n.includes(a.toLocaleLowerCase()) && Object.keys(e).includes(a)) {
        t.warn("Header could not be overridden", a, n);
        return;
      }
      const o = typeof this._extraHeaders[a] == "function" ? this._extraHeaders[a]() : this._extraHeaders[a];
      o && o !== "" && (e[a] = o);
    });
  }
}, wr = class {
  constructor(e) {
    this._settings = e, this._logger = new m("MetadataService"), this._signingKeys = null, this._metadata = null, this._metadataUrl = this._settings.metadataUrl, this._jsonService = new We(
      ["application/jwk-set+json"],
      null,
      this._settings.extraHeaders
    ), this._settings.signingKeys && (this._logger.debug("using signingKeys from settings"), this._signingKeys = this._settings.signingKeys), this._settings.metadata && (this._logger.debug("using metadata from settings"), this._metadata = this._settings.metadata), this._settings.fetchRequestCredentials && (this._logger.debug("using fetchRequestCredentials from settings"), this._fetchRequestCredentials = this._settings.fetchRequestCredentials);
  }
  resetSigningKeys() {
    this._signingKeys = null;
  }
  async getMetadata() {
    const e = this._logger.create("getMetadata");
    if (this._metadata)
      return e.debug("using cached values"), this._metadata;
    if (!this._metadataUrl)
      throw e.throw(new Error("No authority or metadataUrl configured on settings")), null;
    e.debug("getting metadata from", this._metadataUrl);
    const t = await this._jsonService.getJson(this._metadataUrl, { credentials: this._fetchRequestCredentials, timeoutInSeconds: this._settings.requestTimeoutInSeconds });
    return e.debug("merging remote JSON with seed metadata"), this._metadata = Object.assign({}, t, this._settings.metadataSeed), this._metadata;
  }
  getIssuer() {
    return this._getMetadataProperty("issuer");
  }
  getAuthorizationEndpoint() {
    return this._getMetadataProperty("authorization_endpoint");
  }
  getUserInfoEndpoint() {
    return this._getMetadataProperty("userinfo_endpoint");
  }
  getTokenEndpoint(e = !0) {
    return this._getMetadataProperty("token_endpoint", e);
  }
  getCheckSessionIframe() {
    return this._getMetadataProperty("check_session_iframe", !0);
  }
  getEndSessionEndpoint() {
    return this._getMetadataProperty("end_session_endpoint", !0);
  }
  getRevocationEndpoint(e = !0) {
    return this._getMetadataProperty("revocation_endpoint", e);
  }
  getKeysEndpoint(e = !0) {
    return this._getMetadataProperty("jwks_uri", e);
  }
  async _getMetadataProperty(e, t = !1) {
    const r = this._logger.create(`_getMetadataProperty('${e}')`), s = await this.getMetadata();
    if (r.debug("resolved"), s[e] === void 0) {
      if (t === !0) {
        r.warn("Metadata does not contain optional property");
        return;
      }
      r.throw(new Error("Metadata does not contain property " + e));
    }
    return s[e];
  }
  async getSigningKeys() {
    const e = this._logger.create("getSigningKeys");
    if (this._signingKeys)
      return e.debug("returning signingKeys from cache"), this._signingKeys;
    const t = await this.getKeysEndpoint(!1);
    e.debug("got jwks_uri", t);
    const r = await this._jsonService.getJson(t, { timeoutInSeconds: this._settings.requestTimeoutInSeconds });
    if (e.debug("got key set", r), !Array.isArray(r.keys))
      throw e.throw(new Error("Missing keys on keyset")), null;
    return this._signingKeys = r.keys, this._signingKeys;
  }
}, St = class {
  constructor({
    prefix: e = "oidc.",
    store: t = localStorage
  } = {}) {
    this._logger = new m("WebStorageStateStore"), this._store = t, this._prefix = e;
  }
  async set(e, t) {
    this._logger.create(`set('${e}')`), e = this._prefix + e, await this._store.setItem(e, t);
  }
  async get(e) {
    return this._logger.create(`get('${e}')`), e = this._prefix + e, await this._store.getItem(e);
  }
  async remove(e) {
    this._logger.create(`remove('${e}')`), e = this._prefix + e;
    const t = await this._store.getItem(e);
    return await this._store.removeItem(e), t;
  }
  async getAllKeys() {
    this._logger.create("getAllKeys");
    const e = await this._store.length, t = [];
    for (let r = 0; r < e; r++) {
      const s = await this._store.key(r);
      s && s.indexOf(this._prefix) === 0 && t.push(s.substr(this._prefix.length));
    }
    return t;
  }
}, vr = "code", mr = "openid", Sr = "client_secret_post", yr = 900, De = class {
  constructor({
    // metadata related
    authority: e,
    metadataUrl: t,
    metadata: r,
    signingKeys: s,
    metadataSeed: n,
    // client related
    client_id: a,
    client_secret: o,
    response_type: d = vr,
    scope: c = mr,
    redirect_uri: l,
    post_logout_redirect_uri: h,
    client_authentication: _ = Sr,
    // optional protocol
    prompt: f,
    display: R,
    max_age: A,
    ui_locales: L,
    acr_values: w,
    resource: E,
    response_mode: y,
    // behavior flags
    filterProtocolClaims: j = !0,
    loadUserInfo: N = !1,
    requestTimeoutInSeconds: D,
    staleStateAgeInSeconds: P = yr,
    mergeClaimsStrategy: W = { array: "replace" },
    disablePKCE: M = !1,
    // other behavior
    stateStore: x,
    revokeTokenAdditionalContentTypes: ee,
    fetchRequestCredentials: le,
    refreshTokenAllowedScope: ue,
    // extra
    extraQueryParams: F = {},
    extraTokenParams: V = {},
    extraHeaders: X = {},
    dpop: de,
    omitScopeWhenRequesting: ge = !1
  }) {
    var ie;
    if (this.authority = e, t ? this.metadataUrl = t : (this.metadataUrl = e, e && (this.metadataUrl.endsWith("/") || (this.metadataUrl += "/"), this.metadataUrl += ".well-known/openid-configuration")), this.metadata = r, this.metadataSeed = n, this.signingKeys = s, this.client_id = a, this.client_secret = o, this.response_type = d, this.scope = c, this.redirect_uri = l, this.post_logout_redirect_uri = h, this.client_authentication = _, this.prompt = f, this.display = R, this.max_age = A, this.ui_locales = L, this.acr_values = w, this.resource = E, this.response_mode = y, this.filterProtocolClaims = j ?? !0, this.loadUserInfo = !!N, this.staleStateAgeInSeconds = P, this.mergeClaimsStrategy = W, this.omitScopeWhenRequesting = ge, this.disablePKCE = !!M, this.revokeTokenAdditionalContentTypes = ee, this.fetchRequestCredentials = le || "same-origin", this.requestTimeoutInSeconds = D, x)
      this.stateStore = x;
    else {
      const he = typeof window < "u" ? window.localStorage : new mt();
      this.stateStore = new St({ store: he });
    }
    if (this.refreshTokenAllowedScope = ue, this.extraQueryParams = F, this.extraTokenParams = V, this.extraHeaders = X, this.dpop = de, this.dpop && !((ie = this.dpop) != null && ie.store))
      throw new Error("A DPoPStore is required when dpop is enabled");
  }
}, br = class {
  constructor(e, t) {
    this._settings = e, this._metadataService = t, this._logger = new m("UserInfoService"), this._getClaimsFromJwt = async (r) => {
      const s = this._logger.create("_getClaimsFromJwt");
      try {
        const n = ye.decode(r);
        return s.debug("JWT decoding successful"), n;
      } catch (n) {
        throw s.error("Error parsing JWT response"), n;
      }
    }, this._jsonService = new We(
      void 0,
      this._getClaimsFromJwt,
      this._settings.extraHeaders
    );
  }
  async getClaims(e) {
    const t = this._logger.create("getClaims");
    e || this._logger.throw(new Error("No token passed"));
    const r = await this._metadataService.getUserInfoEndpoint();
    t.debug("got userinfo url", r);
    const s = await this._jsonService.getJson(r, {
      token: e,
      credentials: this._settings.fetchRequestCredentials,
      timeoutInSeconds: this._settings.requestTimeoutInSeconds
    });
    return t.debug("got claims", s), s;
  }
}, yt = class {
  constructor(e, t) {
    this._settings = e, this._metadataService = t, this._logger = new m("TokenClient"), this._jsonService = new We(
      this._settings.revokeTokenAdditionalContentTypes,
      null,
      this._settings.extraHeaders
    );
  }
  /**
   * Exchange code.
   *
   * @see https://www.rfc-editor.org/rfc/rfc6749#section-4.1.3
   */
  async exchangeCode({
    grant_type: e = "authorization_code",
    redirect_uri: t = this._settings.redirect_uri,
    client_id: r = this._settings.client_id,
    client_secret: s = this._settings.client_secret,
    extraHeaders: n,
    ...a
  }) {
    const o = this._logger.create("exchangeCode");
    r || o.throw(new Error("A client_id is required")), t || o.throw(new Error("A redirect_uri is required")), a.code || o.throw(new Error("A code is required"));
    const d = new URLSearchParams({ grant_type: e, redirect_uri: t });
    for (const [_, f] of Object.entries(a))
      f != null && d.set(_, f);
    let c;
    switch (this._settings.client_authentication) {
      case "client_secret_basic":
        if (s == null)
          throw o.throw(new Error("A client_secret is required")), null;
        c = O.generateBasicAuth(r, s);
        break;
      case "client_secret_post":
        d.append("client_id", r), s && d.append("client_secret", s);
        break;
    }
    const l = await this._metadataService.getTokenEndpoint(!1);
    o.debug("got token endpoint");
    const h = await this._jsonService.postForm(l, {
      body: d,
      basicAuth: c,
      timeoutInSeconds: this._settings.requestTimeoutInSeconds,
      initCredentials: this._settings.fetchRequestCredentials,
      extraHeaders: n
    });
    return o.debug("got response"), h;
  }
  /**
   * Exchange credentials.
   *
   * @see https://www.rfc-editor.org/rfc/rfc6749#section-4.3.2
   */
  async exchangeCredentials({
    grant_type: e = "password",
    client_id: t = this._settings.client_id,
    client_secret: r = this._settings.client_secret,
    scope: s = this._settings.scope,
    ...n
  }) {
    const a = this._logger.create("exchangeCredentials");
    t || a.throw(new Error("A client_id is required"));
    const o = new URLSearchParams({ grant_type: e });
    this._settings.omitScopeWhenRequesting || o.set("scope", s);
    for (const [h, _] of Object.entries(n))
      _ != null && o.set(h, _);
    let d;
    switch (this._settings.client_authentication) {
      case "client_secret_basic":
        if (r == null)
          throw a.throw(new Error("A client_secret is required")), null;
        d = O.generateBasicAuth(t, r);
        break;
      case "client_secret_post":
        o.append("client_id", t), r && o.append("client_secret", r);
        break;
    }
    const c = await this._metadataService.getTokenEndpoint(!1);
    a.debug("got token endpoint");
    const l = await this._jsonService.postForm(c, { body: o, basicAuth: d, timeoutInSeconds: this._settings.requestTimeoutInSeconds, initCredentials: this._settings.fetchRequestCredentials });
    return a.debug("got response"), l;
  }
  /**
   * Exchange a refresh token.
   *
   * @see https://www.rfc-editor.org/rfc/rfc6749#section-6
   */
  async exchangeRefreshToken({
    grant_type: e = "refresh_token",
    client_id: t = this._settings.client_id,
    client_secret: r = this._settings.client_secret,
    timeoutInSeconds: s,
    extraHeaders: n,
    ...a
  }) {
    const o = this._logger.create("exchangeRefreshToken");
    t || o.throw(new Error("A client_id is required")), a.refresh_token || o.throw(new Error("A refresh_token is required"));
    const d = new URLSearchParams({ grant_type: e });
    for (const [_, f] of Object.entries(a))
      Array.isArray(f) ? f.forEach((R) => d.append(_, R)) : f != null && d.set(_, f);
    let c;
    switch (this._settings.client_authentication) {
      case "client_secret_basic":
        if (r == null)
          throw o.throw(new Error("A client_secret is required")), null;
        c = O.generateBasicAuth(t, r);
        break;
      case "client_secret_post":
        d.append("client_id", t), r && d.append("client_secret", r);
        break;
    }
    const l = await this._metadataService.getTokenEndpoint(!1);
    o.debug("got token endpoint");
    const h = await this._jsonService.postForm(l, { body: d, basicAuth: c, timeoutInSeconds: s, initCredentials: this._settings.fetchRequestCredentials, extraHeaders: n });
    return o.debug("got response"), h;
  }
  /**
   * Revoke an access or refresh token.
   *
   * @see https://datatracker.ietf.org/doc/html/rfc7009#section-2.1
   */
  async revoke(e) {
    var t;
    const r = this._logger.create("revoke");
    e.token || r.throw(new Error("A token is required"));
    const s = await this._metadataService.getRevocationEndpoint(!1);
    r.debug(`got revocation endpoint, revoking ${(t = e.token_type_hint) != null ? t : "default token type"}`);
    const n = new URLSearchParams();
    for (const [a, o] of Object.entries(e))
      o != null && n.set(a, o);
    n.set("client_id", this._settings.client_id), this._settings.client_secret && n.set("client_secret", this._settings.client_secret), await this._jsonService.postForm(s, { body: n, timeoutInSeconds: this._settings.requestTimeoutInSeconds }), r.debug("got response");
  }
}, kr = class {
  constructor(e, t, r) {
    this._settings = e, this._metadataService = t, this._claimsService = r, this._logger = new m("ResponseValidator"), this._userInfoService = new br(this._settings, this._metadataService), this._tokenClient = new yt(this._settings, this._metadataService);
  }
  async validateSigninResponse(e, t, r) {
    const s = this._logger.create("validateSigninResponse");
    this._processSigninState(e, t), s.debug("state processed"), await this._processCode(e, t, r), s.debug("code processed"), e.isOpenId && this._validateIdTokenAttributes(e), s.debug("tokens validated"), await this._processClaims(e, t?.skipUserInfo, e.isOpenId), s.debug("claims processed");
  }
  async validateCredentialsResponse(e, t) {
    const r = this._logger.create("validateCredentialsResponse"), s = e.isOpenId && !!e.id_token;
    s && this._validateIdTokenAttributes(e), r.debug("tokens validated"), await this._processClaims(e, t, s), r.debug("claims processed");
  }
  async validateRefreshResponse(e, t) {
    var r, s;
    const n = this._logger.create("validateRefreshResponse");
    e.userState = t.data, (r = e.session_state) != null || (e.session_state = t.session_state), (s = e.scope) != null || (e.scope = t.scope), e.isOpenId && e.id_token && (this._validateIdTokenAttributes(e, t.id_token), n.debug("ID Token validated")), e.id_token || (e.id_token = t.id_token, e.profile = t.profile);
    const a = e.isOpenId && !!e.id_token;
    await this._processClaims(e, !1, a), n.debug("claims processed");
  }
  validateSignoutResponse(e, t) {
    const r = this._logger.create("validateSignoutResponse");
    if (t.id !== e.state && r.throw(new Error("State does not match")), r.debug("state validated"), e.userState = t.data, e.error)
      throw r.warn("Response was error", e.error), new Z(e);
  }
  _processSigninState(e, t) {
    var r;
    const s = this._logger.create("_processSigninState");
    if (t.id !== e.state && s.throw(new Error("State does not match")), t.client_id || s.throw(new Error("No client_id on state")), t.authority || s.throw(new Error("No authority on state")), this._settings.authority !== t.authority && s.throw(new Error("authority mismatch on settings vs. signin state")), this._settings.client_id && this._settings.client_id !== t.client_id && s.throw(new Error("client_id mismatch on settings vs. signin state")), s.debug("state validated"), e.userState = t.data, e.url_state = t.url_state, (r = e.scope) != null || (e.scope = t.scope), e.error)
      throw s.warn("Response was error", e.error), new Z(e);
    t.code_verifier && !e.code && s.throw(new Error("Expected code in response"));
  }
  async _processClaims(e, t = !1, r = !0) {
    const s = this._logger.create("_processClaims");
    if (e.profile = this._claimsService.filterProtocolClaims(e.profile), t || !this._settings.loadUserInfo || !e.access_token) {
      s.debug("not loading user info");
      return;
    }
    s.debug("loading user info");
    const n = await this._userInfoService.getClaims(e.access_token);
    s.debug("user info claims received from user info endpoint"), r && n.sub !== e.profile.sub && s.throw(new Error("subject from UserInfo response does not match subject in ID Token")), e.profile = this._claimsService.mergeClaims(e.profile, this._claimsService.filterProtocolClaims(n)), s.debug("user info claims received, updated profile:", e.profile);
  }
  async _processCode(e, t, r) {
    const s = this._logger.create("_processCode");
    if (e.code) {
      s.debug("Validating code");
      const n = await this._tokenClient.exchangeCode({
        client_id: t.client_id,
        client_secret: t.client_secret,
        code: e.code,
        redirect_uri: t.redirect_uri,
        code_verifier: t.code_verifier,
        extraHeaders: r,
        ...t.extraTokenParams
      });
      Object.assign(e, n);
    } else
      s.debug("No code to process");
  }
  _validateIdTokenAttributes(e, t) {
    var r;
    const s = this._logger.create("_validateIdTokenAttributes");
    s.debug("decoding ID Token JWT");
    const n = ye.decode((r = e.id_token) != null ? r : "");
    if (n.sub || s.throw(new Error("ID Token is missing a subject claim")), t) {
      const a = ye.decode(t);
      n.sub !== a.sub && s.throw(new Error("sub in id_token does not match current sub")), n.auth_time && n.auth_time !== a.auth_time && s.throw(new Error("auth_time in id_token does not match original auth_time")), n.azp && n.azp !== a.azp && s.throw(new Error("azp in id_token does not match original azp")), !n.azp && a.azp && s.throw(new Error("azp not in id_token, but present in original id_token"));
    }
    e.profile = n;
  }
}, be = class Me {
  constructor(t) {
    this.id = t.id || O.generateUUIDv4(), this.data = t.data, t.created && t.created > 0 ? this.created = t.created : this.created = B.getEpochTime(), this.request_type = t.request_type, this.url_state = t.url_state;
  }
  toStorageString() {
    return new m("State").create("toStorageString"), JSON.stringify({
      id: this.id,
      data: this.data,
      created: this.created,
      request_type: this.request_type,
      url_state: this.url_state
    });
  }
  static fromStorageString(t) {
    return m.createStatic("State", "fromStorageString"), Promise.resolve(new Me(JSON.parse(t)));
  }
  static async clearStaleState(t, r) {
    const s = m.createStatic("State", "clearStaleState"), n = B.getEpochTime() - r, a = await t.getAllKeys();
    s.debug("got keys", a);
    for (let o = 0; o < a.length; o++) {
      const d = a[o], c = await t.get(d);
      let l = !1;
      if (c)
        try {
          const h = await Me.fromStorageString(c);
          s.debug("got item from key:", d, h.created), h.created <= n && (l = !0);
        } catch (h) {
          s.error("Error parsing state for key:", d, h), l = !0;
        }
      else
        s.debug("no item in storage for key:", d), l = !0;
      l && (s.debug("removed item for key:", d), t.remove(d));
    }
  }
}, bt = class $e extends be {
  constructor(t) {
    super(t), this.code_verifier = t.code_verifier, this.code_challenge = t.code_challenge, this.authority = t.authority, this.client_id = t.client_id, this.redirect_uri = t.redirect_uri, this.scope = t.scope, this.client_secret = t.client_secret, this.extraTokenParams = t.extraTokenParams, this.response_mode = t.response_mode, this.skipUserInfo = t.skipUserInfo;
  }
  static async create(t) {
    const r = t.code_verifier === !0 ? O.generateCodeVerifier() : t.code_verifier || void 0, s = r ? await O.generateCodeChallenge(r) : void 0;
    return new $e({
      ...t,
      code_verifier: r,
      code_challenge: s
    });
  }
  toStorageString() {
    return new m("SigninState").create("toStorageString"), JSON.stringify({
      id: this.id,
      data: this.data,
      created: this.created,
      request_type: this.request_type,
      url_state: this.url_state,
      code_verifier: this.code_verifier,
      authority: this.authority,
      client_id: this.client_id,
      redirect_uri: this.redirect_uri,
      scope: this.scope,
      client_secret: this.client_secret,
      extraTokenParams: this.extraTokenParams,
      response_mode: this.response_mode,
      skipUserInfo: this.skipUserInfo
    });
  }
  static fromStorageString(t) {
    m.createStatic("SigninState", "fromStorageString");
    const r = JSON.parse(t);
    return $e.create(r);
  }
}, kt = class Et {
  constructor(t) {
    this.url = t.url, this.state = t.state;
  }
  static async create({
    // mandatory
    url: t,
    authority: r,
    client_id: s,
    redirect_uri: n,
    response_type: a,
    scope: o,
    // optional
    state_data: d,
    response_mode: c,
    request_type: l,
    client_secret: h,
    nonce: _,
    url_state: f,
    resource: R,
    skipUserInfo: A,
    extraQueryParams: L,
    extraTokenParams: w,
    disablePKCE: E,
    dpopJkt: y,
    omitScopeWhenRequesting: j,
    ...N
  }) {
    if (!t)
      throw this._logger.error("create: No url passed"), new Error("url");
    if (!s)
      throw this._logger.error("create: No client_id passed"), new Error("client_id");
    if (!n)
      throw this._logger.error("create: No redirect_uri passed"), new Error("redirect_uri");
    if (!a)
      throw this._logger.error("create: No response_type passed"), new Error("response_type");
    if (!o)
      throw this._logger.error("create: No scope passed"), new Error("scope");
    if (!r)
      throw this._logger.error("create: No authority passed"), new Error("authority");
    const D = await bt.create({
      data: d,
      request_type: l,
      url_state: f,
      code_verifier: !E,
      client_id: s,
      authority: r,
      redirect_uri: n,
      response_mode: c,
      client_secret: h,
      scope: o,
      extraTokenParams: w,
      skipUserInfo: A
    }), P = new URL(t);
    P.searchParams.append("client_id", s), P.searchParams.append("redirect_uri", n), P.searchParams.append("response_type", a), j || P.searchParams.append("scope", o), _ && P.searchParams.append("nonce", _), y && P.searchParams.append("dpop_jkt", y);
    let W = D.id;
    f && (W = `${W}${se}${f}`), P.searchParams.append("state", W), D.code_challenge && (P.searchParams.append("code_challenge", D.code_challenge), P.searchParams.append("code_challenge_method", "S256")), R && (Array.isArray(R) ? R : [R]).forEach((x) => P.searchParams.append("resource", x));
    for (const [M, x] of Object.entries({ response_mode: c, ...N, ...L }))
      x != null && P.searchParams.append(M, x.toString());
    return new Et({
      url: P.href,
      state: D
    });
  }
};
kt._logger = new m("SigninRequest");
var Er = kt, Rr = "openid", Ue = class {
  constructor(e) {
    if (this.access_token = "", this.token_type = "", this.profile = {}, this.state = e.get("state"), this.session_state = e.get("session_state"), this.state) {
      const t = decodeURIComponent(this.state).split(se);
      this.state = t[0], t.length > 1 && (this.url_state = t.slice(1).join(se));
    }
    this.error = e.get("error"), this.error_description = e.get("error_description"), this.error_uri = e.get("error_uri"), this.code = e.get("code");
  }
  get expires_in() {
    if (this.expires_at !== void 0)
      return this.expires_at - B.getEpochTime();
  }
  set expires_in(e) {
    typeof e == "string" && (e = Number(e)), e !== void 0 && e >= 0 && (this.expires_at = Math.floor(e) + B.getEpochTime());
  }
  get isOpenId() {
    var e;
    return ((e = this.scope) == null ? void 0 : e.split(" ").includes(Rr)) || !!this.id_token;
  }
}, Tr = class {
  constructor({
    url: e,
    state_data: t,
    id_token_hint: r,
    post_logout_redirect_uri: s,
    extraQueryParams: n,
    request_type: a,
    client_id: o,
    url_state: d
  }) {
    if (this._logger = new m("SignoutRequest"), !e)
      throw this._logger.error("ctor: No url passed"), new Error("url");
    const c = new URL(e);
    if (r && c.searchParams.append("id_token_hint", r), o && c.searchParams.append("client_id", o), s && (c.searchParams.append("post_logout_redirect_uri", s), t || d)) {
      this.state = new be({ data: t, request_type: a, url_state: d });
      let l = this.state.id;
      d && (l = `${l}${se}${d}`), c.searchParams.append("state", l);
    }
    for (const [l, h] of Object.entries({ ...n }))
      h != null && c.searchParams.append(l, h.toString());
    this.url = c.href;
  }
}, Pr = class {
  constructor(e) {
    if (this.state = e.get("state"), this.state) {
      const t = decodeURIComponent(this.state).split(se);
      this.state = t[0], t.length > 1 && (this.url_state = t.slice(1).join(se));
    }
    this.error = e.get("error"), this.error_description = e.get("error_description"), this.error_uri = e.get("error_uri");
  }
}, Cr = [
  "nbf",
  "jti",
  "auth_time",
  "nonce",
  "acr",
  "amr",
  "azp",
  "at_hash"
  // https://openid.net/specs/openid-connect-core-1_0.html#CodeIDToken
], xr = ["sub", "iss", "aud", "exp", "iat"], Ir = class {
  constructor(e) {
    this._settings = e, this._logger = new m("ClaimsService");
  }
  filterProtocolClaims(e) {
    const t = { ...e };
    if (this._settings.filterProtocolClaims) {
      let r;
      Array.isArray(this._settings.filterProtocolClaims) ? r = this._settings.filterProtocolClaims : r = Cr;
      for (const s of r)
        xr.includes(s) || delete t[s];
    }
    return t;
  }
  mergeClaims(e, t) {
    const r = { ...e };
    for (const [s, n] of Object.entries(t))
      if (r[s] !== n)
        if (Array.isArray(r[s]) || Array.isArray(n))
          if (this._settings.mergeClaimsStrategy.array == "replace")
            r[s] = n;
          else {
            const a = Array.isArray(r[s]) ? r[s] : [r[s]];
            for (const o of Array.isArray(n) ? n : [n])
              a.includes(o) || a.push(o);
            r[s] = a;
          }
        else typeof r[s] == "object" && typeof n == "object" ? r[s] = this.mergeClaims(r[s], n) : r[s] = n;
    return r;
  }
}, Rt = class {
  constructor(e, t) {
    this.keys = e, this.nonce = t;
  }
}, Ur = class {
  constructor(e, t) {
    this._logger = new m("OidcClient"), this.settings = e instanceof De ? e : new De(e), this.metadataService = t ?? new wr(this.settings), this._claimsService = new Ir(this.settings), this._validator = new kr(this.settings, this.metadataService, this._claimsService), this._tokenClient = new yt(this.settings, this.metadataService);
  }
  async createSigninRequest({
    state: e,
    request: t,
    request_uri: r,
    request_type: s,
    id_token_hint: n,
    login_hint: a,
    skipUserInfo: o,
    nonce: d,
    url_state: c,
    response_type: l = this.settings.response_type,
    scope: h = this.settings.scope,
    redirect_uri: _ = this.settings.redirect_uri,
    prompt: f = this.settings.prompt,
    display: R = this.settings.display,
    max_age: A = this.settings.max_age,
    ui_locales: L = this.settings.ui_locales,
    acr_values: w = this.settings.acr_values,
    resource: E = this.settings.resource,
    response_mode: y = this.settings.response_mode,
    extraQueryParams: j = this.settings.extraQueryParams,
    extraTokenParams: N = this.settings.extraTokenParams,
    dpopJkt: D,
    omitScopeWhenRequesting: P = this.settings.omitScopeWhenRequesting
  }) {
    const W = this._logger.create("createSigninRequest");
    if (l !== "code")
      throw new Error("Only the Authorization Code flow (with PKCE) is supported");
    const M = await this.metadataService.getAuthorizationEndpoint();
    W.debug("Received authorization endpoint", M);
    const x = await Er.create({
      url: M,
      authority: this.settings.authority,
      client_id: this.settings.client_id,
      redirect_uri: _,
      response_type: l,
      scope: h,
      state_data: e,
      url_state: c,
      prompt: f,
      display: R,
      max_age: A,
      ui_locales: L,
      id_token_hint: n,
      login_hint: a,
      acr_values: w,
      dpopJkt: D,
      resource: E,
      request: t,
      request_uri: r,
      extraQueryParams: j,
      extraTokenParams: N,
      request_type: s,
      response_mode: y,
      client_secret: this.settings.client_secret,
      skipUserInfo: o,
      nonce: d,
      disablePKCE: this.settings.disablePKCE,
      omitScopeWhenRequesting: P
    });
    await this.clearStaleState();
    const ee = x.state;
    return await this.settings.stateStore.set(ee.id, ee.toStorageString()), x;
  }
  async readSigninResponseState(e, t = !1) {
    const r = this._logger.create("readSigninResponseState"), s = new Ue(Ne.readParams(e, this.settings.response_mode));
    if (!s.state)
      throw r.throw(new Error("No state in response")), null;
    const n = await this.settings.stateStore[t ? "remove" : "get"](s.state);
    if (!n)
      throw r.throw(new Error("No matching state found in storage")), null;
    return { state: await bt.fromStorageString(n), response: s };
  }
  async processSigninResponse(e, t, r = !0) {
    const s = this._logger.create("processSigninResponse"), { state: n, response: a } = await this.readSigninResponseState(e, r);
    if (s.debug("received state from storage; validating response"), this.settings.dpop && this.settings.dpop.store) {
      const o = await this.getDpopProof(this.settings.dpop.store);
      t = { ...t, DPoP: o };
    }
    try {
      await this._validator.validateSigninResponse(a, n, t);
    } catch (o) {
      if (o instanceof qe && this.settings.dpop) {
        const d = await this.getDpopProof(this.settings.dpop.store, o.nonce);
        t.DPoP = d, await this._validator.validateSigninResponse(a, n, t);
      } else
        throw o;
    }
    return a;
  }
  async getDpopProof(e, t) {
    let r, s;
    return (await e.getAllKeys()).includes(this.settings.client_id) ? (s = await e.get(this.settings.client_id), s.nonce !== t && t && (s.nonce = t, await e.set(this.settings.client_id, s))) : (r = await O.generateDPoPKeys(), s = new Rt(r, t), await e.set(this.settings.client_id, s)), await O.generateDPoPProof({
      url: await this.metadataService.getTokenEndpoint(!1),
      httpMethod: "POST",
      keyPair: s.keys,
      nonce: s.nonce
    });
  }
  async processResourceOwnerPasswordCredentials({
    username: e,
    password: t,
    skipUserInfo: r = !1,
    extraTokenParams: s = {}
  }) {
    const n = await this._tokenClient.exchangeCredentials({ username: e, password: t, ...s }), a = new Ue(new URLSearchParams());
    return Object.assign(a, n), await this._validator.validateCredentialsResponse(a, r), a;
  }
  async useRefreshToken({
    state: e,
    redirect_uri: t,
    resource: r,
    timeoutInSeconds: s,
    extraHeaders: n,
    extraTokenParams: a
  }) {
    var o;
    const d = this._logger.create("useRefreshToken");
    let c;
    if (this.settings.refreshTokenAllowedScope === void 0)
      c = e.scope;
    else {
      const _ = this.settings.refreshTokenAllowedScope.split(" ");
      c = (((o = e.scope) == null ? void 0 : o.split(" ")) || []).filter((R) => _.includes(R)).join(" ");
    }
    if (this.settings.dpop && this.settings.dpop.store) {
      const _ = await this.getDpopProof(this.settings.dpop.store);
      n = { ...n, DPoP: _ };
    }
    let l;
    try {
      l = await this._tokenClient.exchangeRefreshToken({
        refresh_token: e.refresh_token,
        // provide the (possible filtered) scope list
        scope: c,
        redirect_uri: t,
        resource: r,
        timeoutInSeconds: s,
        extraHeaders: n,
        ...a
      });
    } catch (_) {
      if (_ instanceof qe && this.settings.dpop)
        n.DPoP = await this.getDpopProof(this.settings.dpop.store, _.nonce), l = await this._tokenClient.exchangeRefreshToken({
          refresh_token: e.refresh_token,
          // provide the (possible filtered) scope list
          scope: c,
          redirect_uri: t,
          resource: r,
          timeoutInSeconds: s,
          extraHeaders: n,
          ...a
        });
      else
        throw _;
    }
    const h = new Ue(new URLSearchParams());
    return Object.assign(h, l), d.debug("validating response", h), await this._validator.validateRefreshResponse(h, {
      ...e,
      // override the scope in the state handed over to the validator
      // so it can set the granted scope to the requested scope in case none is included in the response
      scope: c
    }), h;
  }
  async createSignoutRequest({
    state: e,
    id_token_hint: t,
    client_id: r,
    request_type: s,
    url_state: n,
    post_logout_redirect_uri: a = this.settings.post_logout_redirect_uri,
    extraQueryParams: o = this.settings.extraQueryParams
  } = {}) {
    const d = this._logger.create("createSignoutRequest"), c = await this.metadataService.getEndSessionEndpoint();
    if (!c)
      throw d.throw(new Error("No end session endpoint")), null;
    d.debug("Received end session endpoint", c), !r && a && !t && (r = this.settings.client_id);
    const l = new Tr({
      url: c,
      id_token_hint: t,
      client_id: r,
      post_logout_redirect_uri: a,
      state_data: e,
      extraQueryParams: o,
      request_type: s,
      url_state: n
    });
    await this.clearStaleState();
    const h = l.state;
    return h && (d.debug("Signout request has state to persist"), await this.settings.stateStore.set(h.id, h.toStorageString())), l;
  }
  async readSignoutResponseState(e, t = !1) {
    const r = this._logger.create("readSignoutResponseState"), s = new Pr(Ne.readParams(e, this.settings.response_mode));
    if (!s.state) {
      if (r.debug("No state in response"), s.error)
        throw r.warn("Response was error:", s.error), new Z(s);
      return { state: void 0, response: s };
    }
    const n = await this.settings.stateStore[t ? "remove" : "get"](s.state);
    if (!n)
      throw r.throw(new Error("No matching state found in storage")), null;
    return { state: await be.fromStorageString(n), response: s };
  }
  async processSignoutResponse(e) {
    const t = this._logger.create("processSignoutResponse"), { state: r, response: s } = await this.readSignoutResponseState(e, !0);
    return r ? (t.debug("Received state from storage; validating response"), this._validator.validateSignoutResponse(s, r)) : t.debug("No state from storage; skipping response validation"), s;
  }
  clearStaleState() {
    return this._logger.create("clearStaleState"), be.clearStaleState(this.settings.stateStore, this.settings.staleStateAgeInSeconds);
  }
  async revokeToken(e, t) {
    return this._logger.create("revokeToken"), await this._tokenClient.revoke({
      token: e,
      token_type_hint: t
    });
  }
}, Or = class {
  constructor(e) {
    this._userManager = e, this._logger = new m("SessionMonitor"), this._start = async (t) => {
      const r = t.session_state;
      if (!r)
        return;
      const s = this._logger.create("_start");
      if (t.profile ? (this._sub = t.profile.sub, s.debug("session_state", r, ", sub", this._sub)) : (this._sub = void 0, s.debug("session_state", r, ", anonymous user")), this._checkSessionIFrame) {
        this._checkSessionIFrame.start(r);
        return;
      }
      try {
        const n = await this._userManager.metadataService.getCheckSessionIframe();
        if (n) {
          s.debug("initializing check session iframe");
          const a = this._userManager.settings.client_id, o = this._userManager.settings.checkSessionIntervalInSeconds, d = this._userManager.settings.stopCheckSessionOnError, c = new fr(this._callback, a, n, o, d);
          await c.load(), this._checkSessionIFrame = c, c.start(r);
        } else
          s.warn("no check session iframe found in the metadata");
      } catch (n) {
        s.error("Error from getCheckSessionIframe:", n instanceof Error ? n.message : n);
      }
    }, this._stop = () => {
      const t = this._logger.create("_stop");
      if (this._sub = void 0, this._checkSessionIFrame && this._checkSessionIFrame.stop(), this._userManager.settings.monitorAnonymousSession) {
        const r = setInterval(async () => {
          clearInterval(r);
          try {
            const s = await this._userManager.querySessionStatus();
            if (s) {
              const n = {
                session_state: s.session_state,
                profile: s.sub ? {
                  sub: s.sub
                } : null
              };
              this._start(n);
            }
          } catch (s) {
            t.error("error from querySessionStatus", s instanceof Error ? s.message : s);
          }
        }, 1e3);
      }
    }, this._callback = async () => {
      const t = this._logger.create("_callback");
      try {
        const r = await this._userManager.querySessionStatus();
        let s = !0;
        r && this._checkSessionIFrame ? r.sub === this._sub ? (s = !1, this._checkSessionIFrame.start(r.session_state), t.debug("same sub still logged in at OP, session state has changed, restarting check session iframe; session_state", r.session_state), await this._userManager.events._raiseUserSessionChanged()) : t.debug("different subject signed into OP", r.sub) : t.debug("subject no longer signed into OP"), s ? this._sub ? await this._userManager.events._raiseUserSignedOut() : await this._userManager.events._raiseUserSignedIn() : t.debug("no change in session detected, no event to raise");
      } catch (r) {
        this._sub && (t.debug("Error calling queryCurrentSigninSession; raising signed out event", r), await this._userManager.events._raiseUserSignedOut());
      }
    }, e || this._logger.throw(new Error("No user manager passed")), this._userManager.events.addUserLoaded(this._start), this._userManager.events.addUserUnloaded(this._stop), this._init().catch((t) => {
      this._logger.error(t);
    });
  }
  async _init() {
    this._logger.create("_init");
    const e = await this._userManager.getUser();
    if (e)
      this._start(e);
    else if (this._userManager.settings.monitorAnonymousSession) {
      const t = await this._userManager.querySessionStatus();
      if (t) {
        const r = {
          session_state: t.session_state,
          profile: t.sub ? {
            sub: t.sub
          } : null
        };
        this._start(r);
      }
    }
  }
}, Oe = class Tt {
  constructor(t) {
    var r;
    this.id_token = t.id_token, this.session_state = (r = t.session_state) != null ? r : null, this.access_token = t.access_token, this.refresh_token = t.refresh_token, this.token_type = t.token_type, this.scope = t.scope, this.profile = t.profile, this.expires_at = t.expires_at, this.state = t.userState, this.url_state = t.url_state;
  }
  /** Computed number of seconds the access token has remaining. */
  get expires_in() {
    if (this.expires_at !== void 0)
      return this.expires_at - B.getEpochTime();
  }
  set expires_in(t) {
    t !== void 0 && (this.expires_at = Math.floor(t) + B.getEpochTime());
  }
  /** Computed value indicating if the access token is expired. */
  get expired() {
    const t = this.expires_in;
    if (t !== void 0)
      return t <= 0;
  }
  /** Array representing the parsed values from the `scope`. */
  get scopes() {
    var t, r;
    return (r = (t = this.scope) == null ? void 0 : t.split(" ")) != null ? r : [];
  }
  toStorageString() {
    return new m("User").create("toStorageString"), JSON.stringify({
      id_token: this.id_token,
      session_state: this.session_state,
      access_token: this.access_token,
      refresh_token: this.refresh_token,
      token_type: this.token_type,
      scope: this.scope,
      profile: this.profile,
      expires_at: this.expires_at
    });
  }
  static fromStorageString(t) {
    return m.createStatic("User", "fromStorageString"), new Tt(JSON.parse(t));
  }
}, ht = "oidc-client", Pt = class {
  constructor() {
    this._abort = new G("Window navigation aborted"), this._disposeHandlers = /* @__PURE__ */ new Set(), this._window = null;
  }
  async navigate(e) {
    const t = this._logger.create("navigate");
    if (!this._window)
      throw new Error("Attempted to navigate on a disposed window");
    t.debug("setting URL in window"), this._window.location.replace(e.url);
    const { url: r, keepOpen: s } = await new Promise((n, a) => {
      const o = (c) => {
        var l;
        const h = c.data, _ = (l = e.scriptOrigin) != null ? l : window.location.origin;
        if (!(c.origin !== _ || h?.source !== ht)) {
          try {
            const f = Ne.readParams(h.url, e.response_mode).get("state");
            if (f || t.warn("no state found in response url"), c.source !== this._window && f !== e.state)
              return;
          } catch {
            this._dispose(), a(new Error("Invalid response from window"));
          }
          n(h);
        }
      };
      window.addEventListener("message", o, !1), this._disposeHandlers.add(() => window.removeEventListener("message", o, !1));
      const d = new BroadcastChannel(`oidc-client-popup-${e.state}`);
      d.addEventListener("message", o, !1), this._disposeHandlers.add(() => d.close()), this._disposeHandlers.add(this._abort.addHandler((c) => {
        this._dispose(), a(c);
      }));
    });
    return t.debug("got response from window"), this._dispose(), s || this.close(), { url: r };
  }
  _dispose() {
    this._logger.create("_dispose");
    for (const e of this._disposeHandlers)
      e();
    this._disposeHandlers.clear();
  }
  static _notifyParent(e, t, r = !1, s = window.location.origin) {
    const n = {
      source: ht,
      url: t,
      keepOpen: r
    }, a = new m("_notifyParent");
    if (e)
      a.debug("With parent. Using parent.postMessage."), e.postMessage(n, s);
    else {
      a.debug("No parent. Using BroadcastChannel.");
      const o = new URL(t).searchParams.get("state");
      if (!o)
        throw new Error("No parent and no state in URL. Can't complete notification.");
      const d = new BroadcastChannel(`oidc-client-popup-${o}`);
      d.postMessage(n), d.close();
    }
  }
}, Ct = {
  location: !1,
  toolbar: !1,
  height: 640,
  closePopupWindowAfterInSeconds: -1
}, xt = "_blank", Ar = 60, jr = 2, It = 10, Nr = class extends De {
  constructor(e) {
    const {
      popup_redirect_uri: t = e.redirect_uri,
      popup_post_logout_redirect_uri: r = e.post_logout_redirect_uri,
      popupWindowFeatures: s = Ct,
      popupWindowTarget: n = xt,
      redirectMethod: a = "assign",
      redirectTarget: o = "self",
      iframeNotifyParentOrigin: d = e.iframeNotifyParentOrigin,
      iframeScriptOrigin: c = e.iframeScriptOrigin,
      requestTimeoutInSeconds: l,
      silent_redirect_uri: h = e.redirect_uri,
      silentRequestTimeoutInSeconds: _,
      automaticSilentRenew: f = !0,
      validateSubOnSilentRenew: R = !0,
      includeIdTokenInSilentRenew: A = !1,
      monitorSession: L = !1,
      monitorAnonymousSession: w = !1,
      checkSessionIntervalInSeconds: E = jr,
      query_status_response_type: y = "code",
      stopCheckSessionOnError: j = !0,
      revokeTokenTypes: N = ["access_token", "refresh_token"],
      revokeTokensOnSignout: D = !1,
      includeIdTokenInSilentSignout: P = !1,
      accessTokenExpiringNotificationTimeInSeconds: W = Ar,
      userStore: M
    } = e;
    if (super(e), this.popup_redirect_uri = t, this.popup_post_logout_redirect_uri = r, this.popupWindowFeatures = s, this.popupWindowTarget = n, this.redirectMethod = a, this.redirectTarget = o, this.iframeNotifyParentOrigin = d, this.iframeScriptOrigin = c, this.silent_redirect_uri = h, this.silentRequestTimeoutInSeconds = _ || l || It, this.automaticSilentRenew = f, this.validateSubOnSilentRenew = R, this.includeIdTokenInSilentRenew = A, this.monitorSession = L, this.monitorAnonymousSession = w, this.checkSessionIntervalInSeconds = E, this.stopCheckSessionOnError = j, this.query_status_response_type = y, this.revokeTokenTypes = N, this.revokeTokensOnSignout = D, this.includeIdTokenInSilentSignout = P, this.accessTokenExpiringNotificationTimeInSeconds = W, M)
      this.userStore = M;
    else {
      const x = typeof window < "u" ? window.sessionStorage : new mt();
      this.userStore = new St({ store: x });
    }
  }
}, _t = class Ut extends Pt {
  constructor({
    silentRequestTimeoutInSeconds: t = It
  }) {
    super(), this._logger = new m("IFrameWindow"), this._timeoutInSeconds = t, this._frame = Ut.createHiddenIframe(), this._window = this._frame.contentWindow;
  }
  static createHiddenIframe() {
    const t = window.document.createElement("iframe");
    return t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-1000px", t.style.top = "0", t.width = "0", t.height = "0", window.document.body.appendChild(t), t;
  }
  async navigate(t) {
    this._logger.debug("navigate: Using timeout of:", this._timeoutInSeconds);
    const r = setTimeout(() => void this._abort.raise(new Le("IFrame timed out without a response")), this._timeoutInSeconds * 1e3);
    return this._disposeHandlers.add(() => clearTimeout(r)), await super.navigate(t);
  }
  close() {
    var t;
    this._frame && (this._frame.parentNode && (this._frame.addEventListener("load", (r) => {
      var s;
      const n = r.target;
      (s = n.parentNode) == null || s.removeChild(n), this._abort.raise(new Error("IFrame removed from DOM"));
    }, !0), (t = this._frame.contentWindow) == null || t.location.replace("about:blank")), this._frame = null), this._window = null;
  }
  static notifyParent(t, r) {
    return super._notifyParent(window.parent, t, !1, r);
  }
}, qr = class {
  constructor(e) {
    this._settings = e, this._logger = new m("IFrameNavigator");
  }
  async prepare({
    silentRequestTimeoutInSeconds: e = this._settings.silentRequestTimeoutInSeconds
  }) {
    return new _t({ silentRequestTimeoutInSeconds: e });
  }
  async callback(e) {
    this._logger.create("callback"), _t.notifyParent(e, this._settings.iframeNotifyParentOrigin);
  }
}, Dr = 500, Mr = 1e3, pt = class extends Pt {
  constructor({
    popupWindowTarget: e = xt,
    popupWindowFeatures: t = {},
    popupSignal: r
  }) {
    super(), this._logger = new m("PopupWindow");
    const s = gt.center({ ...Ct, ...t });
    this._window = window.open(void 0, e, gt.serialize(s)), r && r.addEventListener("abort", () => {
      var n;
      this._abort.raise(new Error((n = r.reason) != null ? n : "Popup aborted"));
    }), t.closePopupWindowAfterInSeconds && t.closePopupWindowAfterInSeconds > 0 && setTimeout(() => {
      if (!this._window || typeof this._window.closed != "boolean" || this._window.closed) {
        this._abort.raise(new Error("Popup blocked by user"));
        return;
      }
      this.close();
    }, t.closePopupWindowAfterInSeconds * Mr);
  }
  async navigate(e) {
    var t;
    (t = this._window) == null || t.focus();
    const r = setInterval(() => {
      (!this._window || this._window.closed) && (this._logger.debug("Popup closed by user or isolated by redirect"), s(), this._disposeHandlers.delete(s));
    }, Dr), s = () => clearInterval(r);
    return this._disposeHandlers.add(s), await super.navigate(e);
  }
  close() {
    this._window && (this._window.closed || (this._window.close(), this._abort.raise(new Error("Popup closed")))), this._window = null;
  }
  static notifyOpener(e, t) {
    super._notifyParent(window.opener, e, t), !t && !window.opener && window.close();
  }
}, $r = class {
  constructor(e) {
    this._settings = e, this._logger = new m("PopupNavigator");
  }
  async prepare({
    popupWindowFeatures: e = this._settings.popupWindowFeatures,
    popupWindowTarget: t = this._settings.popupWindowTarget,
    popupSignal: r
  }) {
    return new pt({ popupWindowFeatures: e, popupWindowTarget: t, popupSignal: r });
  }
  async callback(e, { keepOpen: t = !1 }) {
    this._logger.create("callback"), pt.notifyOpener(e, t);
  }
}, Lr = class {
  constructor(e) {
    this._settings = e, this._logger = new m("RedirectNavigator");
  }
  async prepare({
    redirectMethod: e = this._settings.redirectMethod,
    redirectTarget: t = this._settings.redirectTarget
  }) {
    var r;
    this._logger.create("prepare");
    let s = window.self;
    t === "top" && (s = (r = window.top) != null ? r : window.self);
    const n = s.location[e].bind(s.location);
    let a;
    return {
      navigate: async (o) => {
        this._logger.create("navigate");
        const d = new Promise((c, l) => {
          a = l;
        });
        return n(o.url), await d;
      },
      close: () => {
        this._logger.create("close"), a?.(new Error("Redirect aborted")), s.stop();
      }
    };
  }
  async callback() {
  }
}, Wr = class extends pr {
  constructor(e) {
    super({ expiringNotificationTimeInSeconds: e.accessTokenExpiringNotificationTimeInSeconds }), this._logger = new m("UserManagerEvents"), this._userLoaded = new G("User loaded"), this._userUnloaded = new G("User unloaded"), this._silentRenewError = new G("Silent renew error"), this._userSignedIn = new G("User signed in"), this._userSignedOut = new G("User signed out"), this._userSessionChanged = new G("User session changed");
  }
  async load(e, t = !0) {
    await super.load(e), t && await this._userLoaded.raise(e);
  }
  async unload() {
    await super.unload(), await this._userUnloaded.raise();
  }
  /**
   * Add callback: Raised when a user session has been established (or re-established).
   */
  addUserLoaded(e) {
    return this._userLoaded.addHandler(e);
  }
  /**
   * Remove callback: Raised when a user session has been established (or re-established).
   */
  removeUserLoaded(e) {
    return this._userLoaded.removeHandler(e);
  }
  /**
   * Add callback: Raised when a user session has been terminated.
   */
  addUserUnloaded(e) {
    return this._userUnloaded.addHandler(e);
  }
  /**
   * Remove callback: Raised when a user session has been terminated.
   */
  removeUserUnloaded(e) {
    return this._userUnloaded.removeHandler(e);
  }
  /**
   * Add callback: Raised when the automatic silent renew has failed.
   */
  addSilentRenewError(e) {
    return this._silentRenewError.addHandler(e);
  }
  /**
   * Remove callback: Raised when the automatic silent renew has failed.
   */
  removeSilentRenewError(e) {
    return this._silentRenewError.removeHandler(e);
  }
  /**
   * @internal
   */
  async _raiseSilentRenewError(e) {
    await this._silentRenewError.raise(e);
  }
  /**
   * Add callback: Raised when the user is signed in (when `monitorSession` is set).
   * @see {@link UserManagerSettings.monitorSession}
   */
  addUserSignedIn(e) {
    return this._userSignedIn.addHandler(e);
  }
  /**
   * Remove callback: Raised when the user is signed in (when `monitorSession` is set).
   */
  removeUserSignedIn(e) {
    this._userSignedIn.removeHandler(e);
  }
  /**
   * @internal
   */
  async _raiseUserSignedIn() {
    await this._userSignedIn.raise();
  }
  /**
   * Add callback: Raised when the user's sign-in status at the OP has changed (when `monitorSession` is set).
   * @see {@link UserManagerSettings.monitorSession}
   */
  addUserSignedOut(e) {
    return this._userSignedOut.addHandler(e);
  }
  /**
   * Remove callback: Raised when the user's sign-in status at the OP has changed (when `monitorSession` is set).
   */
  removeUserSignedOut(e) {
    this._userSignedOut.removeHandler(e);
  }
  /**
   * @internal
   */
  async _raiseUserSignedOut() {
    await this._userSignedOut.raise();
  }
  /**
   * Add callback: Raised when the user session changed (when `monitorSession` is set).
   * @see {@link UserManagerSettings.monitorSession}
   */
  addUserSessionChanged(e) {
    return this._userSessionChanged.addHandler(e);
  }
  /**
   * Remove callback: Raised when the user session changed (when `monitorSession` is set).
   */
  removeUserSessionChanged(e) {
    this._userSessionChanged.removeHandler(e);
  }
  /**
   * @internal
   */
  async _raiseUserSessionChanged() {
    await this._userSessionChanged.raise();
  }
}, Fr = class {
  constructor(e) {
    this._userManager = e, this._logger = new m("SilentRenewService"), this._isStarted = !1, this._retryTimer = new B("Retry Silent Renew"), this._tokenExpiring = async () => {
      const t = this._logger.create("_tokenExpiring");
      try {
        await this._userManager.signinSilent(), t.debug("silent token renewal successful");
      } catch (r) {
        if (r instanceof Le) {
          t.warn("ErrorTimeout from signinSilent:", r, "retry in 5s"), this._retryTimer.init(5);
          return;
        }
        t.error("Error from signinSilent:", r), await this._userManager.events._raiseSilentRenewError(r);
      }
    };
  }
  async start() {
    const e = this._logger.create("start");
    if (!this._isStarted) {
      this._isStarted = !0, this._userManager.events.addAccessTokenExpiring(this._tokenExpiring), this._retryTimer.addHandler(this._tokenExpiring);
      try {
        await this._userManager.getUser();
      } catch (t) {
        e.error("getUser error", t);
      }
    }
  }
  stop() {
    this._isStarted && (this._retryTimer.cancel(), this._retryTimer.removeHandler(this._tokenExpiring), this._userManager.events.removeAccessTokenExpiring(this._tokenExpiring), this._isStarted = !1);
  }
}, Hr = class {
  constructor(e) {
    this.refresh_token = e.refresh_token, this.id_token = e.id_token, this.session_state = e.session_state, this.scope = e.scope, this.profile = e.profile, this.data = e.state;
  }
}, Jr = class {
  constructor(e, t, r, s) {
    this._logger = new m("UserManager"), this.settings = new Nr(e), this._client = new Ur(e), this._redirectNavigator = t ?? new Lr(this.settings), this._popupNavigator = r ?? new $r(this.settings), this._iframeNavigator = s ?? new qr(this.settings), this._events = new Wr(this.settings), this._silentRenewService = new Fr(this), this.settings.automaticSilentRenew && this.startSilentRenew(), this._sessionMonitor = null, this.settings.monitorSession && (this._sessionMonitor = new Or(this));
  }
  /**
   * Get object used to register for events raised by the `UserManager`.
   */
  get events() {
    return this._events;
  }
  /**
   * Get object used to access the metadata configuration of the identity provider.
   */
  get metadataService() {
    return this._client.metadataService;
  }
  /**
   * Load the `User` object for the currently authenticated user.
   *
   * @param raiseEvent - If `true`, the `UserLoaded` event will be raised. Defaults to false.
   * @returns A promise
   */
  async getUser(e = !1) {
    const t = this._logger.create("getUser"), r = await this._loadUser();
    return r ? (t.info("user loaded"), await this._events.load(r, e), r) : (t.info("user not found in storage"), null);
  }
  /**
   * Remove from any storage the currently authenticated user.
   *
   * @returns A promise
   */
  async removeUser() {
    const e = this._logger.create("removeUser");
    await this.storeUser(null), e.info("user removed from storage"), await this._events.unload();
  }
  /**
   * Trigger a redirect of the current window to the authorization endpoint.
   *
   * @returns A promise
   *
   * @throws `Error` In cases of wrong authentication.
   */
  async signinRedirect(e = {}) {
    var t;
    this._logger.create("signinRedirect");
    const {
      redirectMethod: r,
      ...s
    } = e;
    let n;
    (t = this.settings.dpop) != null && t.bind_authorization_code && (n = await this.generateDPoPJkt(this.settings.dpop));
    const a = await this._redirectNavigator.prepare({ redirectMethod: r });
    await this._signinStart({
      request_type: "si:r",
      dpopJkt: n,
      ...s
    }, a);
  }
  /**
   * Process the response (callback) from the authorization endpoint.
   * It is recommended to use {@link UserManager.signinCallback} instead.
   *
   * @returns A promise containing the authenticated `User`.
   *
   * @see {@link UserManager.signinCallback}
   */
  async signinRedirectCallback(e = window.location.href) {
    const t = this._logger.create("signinRedirectCallback"), r = await this._signinEnd(e);
    return r.profile && r.profile.sub ? t.info("success, signed in subject", r.profile.sub) : t.info("no subject"), r;
  }
  /**
   * Trigger the signin with user/password.
   *
   * @returns A promise containing the authenticated `User`.
   * @throws {@link ErrorResponse} In cases of wrong authentication.
   */
  async signinResourceOwnerCredentials({
    username: e,
    password: t,
    skipUserInfo: r = !1
  }) {
    const s = this._logger.create("signinResourceOwnerCredential"), n = await this._client.processResourceOwnerPasswordCredentials({
      username: e,
      password: t,
      skipUserInfo: r,
      extraTokenParams: this.settings.extraTokenParams
    });
    s.debug("got signin response");
    const a = await this._buildUser(n);
    return a.profile && a.profile.sub ? s.info("success, signed in subject", a.profile.sub) : s.info("no subject"), a;
  }
  /**
   * Trigger a request (via a popup window) to the authorization endpoint.
   *
   * @returns A promise containing the authenticated `User`.
   * @throws `Error` In cases of wrong authentication.
   */
  async signinPopup(e = {}) {
    var t;
    const r = this._logger.create("signinPopup");
    let s;
    (t = this.settings.dpop) != null && t.bind_authorization_code && (s = await this.generateDPoPJkt(this.settings.dpop));
    const {
      popupWindowFeatures: n,
      popupWindowTarget: a,
      popupSignal: o,
      ...d
    } = e, c = this.settings.popup_redirect_uri;
    c || r.throw(new Error("No popup_redirect_uri configured"));
    const l = await this._popupNavigator.prepare({ popupWindowFeatures: n, popupWindowTarget: a, popupSignal: o }), h = await this._signin({
      request_type: "si:p",
      redirect_uri: c,
      display: "popup",
      dpopJkt: s,
      ...d
    }, l);
    return h && (h.profile && h.profile.sub ? r.info("success, signed in subject", h.profile.sub) : r.info("no subject")), h;
  }
  /**
   * Notify the opening window of response (callback) from the authorization endpoint.
   * It is recommended to use {@link UserManager.signinCallback} instead.
   *
   * @returns A promise
   *
   * @see {@link UserManager.signinCallback}
   */
  async signinPopupCallback(e = window.location.href, t = !1) {
    const r = this._logger.create("signinPopupCallback");
    await this._popupNavigator.callback(e, { keepOpen: t }), r.info("success");
  }
  /**
   * Trigger a silent request (via refresh token or an iframe) to the authorization endpoint.
   *
   * @returns A promise that contains the authenticated `User`.
   */
  async signinSilent(e = {}) {
    var t, r;
    const s = this._logger.create("signinSilent"), {
      silentRequestTimeoutInSeconds: n,
      ...a
    } = e;
    let o = await this._loadUser();
    if (o?.refresh_token) {
      s.debug("using refresh token");
      const _ = new Hr(o);
      return await this._useRefreshToken({
        state: _,
        redirect_uri: a.redirect_uri,
        resource: a.resource,
        extraTokenParams: a.extraTokenParams,
        timeoutInSeconds: n
      });
    }
    let d;
    (t = this.settings.dpop) != null && t.bind_authorization_code && (d = await this.generateDPoPJkt(this.settings.dpop));
    const c = this.settings.silent_redirect_uri;
    c || s.throw(new Error("No silent_redirect_uri configured"));
    let l;
    o && this.settings.validateSubOnSilentRenew && (s.debug("subject prior to silent renew:", o.profile.sub), l = o.profile.sub);
    const h = await this._iframeNavigator.prepare({ silentRequestTimeoutInSeconds: n });
    return o = await this._signin({
      request_type: "si:s",
      redirect_uri: c,
      prompt: "none",
      id_token_hint: this.settings.includeIdTokenInSilentRenew ? o?.id_token : void 0,
      dpopJkt: d,
      ...a
    }, h, l), o && ((r = o.profile) != null && r.sub ? s.info("success, signed in subject", o.profile.sub) : s.info("no subject")), o;
  }
  async _useRefreshToken(e) {
    const t = await this._client.useRefreshToken({
      timeoutInSeconds: this.settings.silentRequestTimeoutInSeconds,
      ...e
    }), r = new Oe({ ...e.state, ...t });
    return await this.storeUser(r), await this._events.load(r), r;
  }
  /**
   *
   * Notify the parent window of response (callback) from the authorization endpoint.
   * It is recommended to use {@link UserManager.signinCallback} instead.
   *
   * @returns A promise
   *
   * @see {@link UserManager.signinCallback}
   */
  async signinSilentCallback(e = window.location.href) {
    const t = this._logger.create("signinSilentCallback");
    await this._iframeNavigator.callback(e), t.info("success");
  }
  /**
   * Process any response (callback) from the authorization endpoint, by dispatching the request_type
   * and executing one of the following functions:
   * - {@link UserManager.signinRedirectCallback}
   * - {@link UserManager.signinPopupCallback}
   * - {@link UserManager.signinSilentCallback}
   *
   * @throws `Error` If request_type is unknown or signin cannot be processed.
   */
  async signinCallback(e = window.location.href) {
    const { state: t } = await this._client.readSigninResponseState(e);
    switch (t.request_type) {
      case "si:r":
        return await this.signinRedirectCallback(e);
      case "si:p":
        await this.signinPopupCallback(e);
        break;
      case "si:s":
        await this.signinSilentCallback(e);
        break;
      default:
        throw new Error("invalid response_type in state");
    }
  }
  /**
   * Process any response (callback) from the end session endpoint, by dispatching the request_type
   * and executing one of the following functions:
   * - {@link UserManager.signoutRedirectCallback}
   * - {@link UserManager.signoutPopupCallback}
   * - {@link UserManager.signoutSilentCallback}
   *
   * @throws `Error` If request_type is unknown or signout cannot be processed.
   */
  async signoutCallback(e = window.location.href, t = !1) {
    const { state: r } = await this._client.readSignoutResponseState(e);
    if (r)
      switch (r.request_type) {
        case "so:r":
          return await this.signoutRedirectCallback(e);
        case "so:p":
          await this.signoutPopupCallback(e, t);
          break;
        case "so:s":
          await this.signoutSilentCallback(e);
          break;
        default:
          throw new Error("invalid response_type in state");
      }
  }
  /**
   * Query OP for user's current signin status.
   *
   * @returns A promise object with session_state and subject identifier.
   */
  async querySessionStatus(e = {}) {
    const t = this._logger.create("querySessionStatus"), {
      silentRequestTimeoutInSeconds: r,
      ...s
    } = e, n = this.settings.silent_redirect_uri;
    n || t.throw(new Error("No silent_redirect_uri configured"));
    const a = await this._loadUser(), o = await this._iframeNavigator.prepare({ silentRequestTimeoutInSeconds: r }), d = await this._signinStart({
      request_type: "si:s",
      // this acts like a signin silent
      redirect_uri: n,
      prompt: "none",
      id_token_hint: this.settings.includeIdTokenInSilentRenew ? a?.id_token : void 0,
      response_type: this.settings.query_status_response_type,
      scope: "openid",
      skipUserInfo: !0,
      ...s
    }, o);
    try {
      const c = {}, l = await this._client.processSigninResponse(d.url, c);
      return t.debug("got signin response"), l.session_state && l.profile.sub ? (t.info("success for subject", l.profile.sub), {
        session_state: l.session_state,
        sub: l.profile.sub
      }) : (t.info("success, user not authenticated"), null);
    } catch (c) {
      if (this.settings.monitorAnonymousSession && c instanceof Z)
        switch (c.error) {
          case "login_required":
          case "consent_required":
          case "interaction_required":
          case "account_selection_required":
            return t.info("success for anonymous user"), {
              session_state: c.session_state
            };
        }
      throw c;
    }
  }
  async _signin(e, t, r) {
    const s = await this._signinStart(e, t);
    return await this._signinEnd(s.url, r);
  }
  async _signinStart(e, t) {
    const r = this._logger.create("_signinStart");
    try {
      const s = await this._client.createSigninRequest(e);
      return r.debug("got signin request"), await t.navigate({
        url: s.url,
        state: s.state.id,
        response_mode: s.state.response_mode,
        scriptOrigin: this.settings.iframeScriptOrigin
      });
    } catch (s) {
      throw r.debug("error after preparing navigator, closing navigator window"), t.close(), s;
    }
  }
  async _signinEnd(e, t) {
    const r = this._logger.create("_signinEnd"), s = {}, n = await this._client.processSigninResponse(e, s);
    return r.debug("got signin response"), await this._buildUser(n, t);
  }
  async _buildUser(e, t) {
    const r = this._logger.create("_buildUser"), s = new Oe(e);
    if (t) {
      if (t !== s.profile.sub)
        throw r.debug("current user does not match user returned from signin. sub from signin:", s.profile.sub), new Z({ ...e, error: "login_required" });
      r.debug("current user matches user returned from signin");
    }
    return await this.storeUser(s), r.debug("user stored"), await this._events.load(s), s;
  }
  /**
   * Trigger a redirect of the current window to the end session endpoint.
   *
   * @returns A promise
   */
  async signoutRedirect(e = {}) {
    const t = this._logger.create("signoutRedirect"), {
      redirectMethod: r,
      ...s
    } = e, n = await this._redirectNavigator.prepare({ redirectMethod: r });
    await this._signoutStart({
      request_type: "so:r",
      post_logout_redirect_uri: this.settings.post_logout_redirect_uri,
      ...s
    }, n), t.info("success");
  }
  /**
   * Process response (callback) from the end session endpoint.
   * It is recommended to use {@link UserManager.signoutCallback} instead.
   *
   * @returns A promise containing signout response
   *
   * @see {@link UserManager.signoutCallback}
   */
  async signoutRedirectCallback(e = window.location.href) {
    const t = this._logger.create("signoutRedirectCallback"), r = await this._signoutEnd(e);
    return t.info("success"), r;
  }
  /**
   * Trigger a redirect of a popup window to the end session endpoint.
   *
   * @returns A promise
   */
  async signoutPopup(e = {}) {
    const t = this._logger.create("signoutPopup"), {
      popupWindowFeatures: r,
      popupWindowTarget: s,
      popupSignal: n,
      ...a
    } = e, o = this.settings.popup_post_logout_redirect_uri, d = await this._popupNavigator.prepare({ popupWindowFeatures: r, popupWindowTarget: s, popupSignal: n });
    await this._signout({
      request_type: "so:p",
      post_logout_redirect_uri: o,
      // we're putting a dummy entry in here because we
      // need a unique id from the state for notification
      // to the parent window, which is necessary if we
      // plan to return back to the client after signout
      // and so we can close the popup after signout
      state: o == null ? void 0 : {},
      ...a
    }, d), t.info("success");
  }
  /**
   * Process response (callback) from the end session endpoint from a popup window.
   * It is recommended to use {@link UserManager.signoutCallback} instead.
   *
   * @returns A promise
   *
   * @see {@link UserManager.signoutCallback}
   */
  async signoutPopupCallback(e = window.location.href, t = !1) {
    const r = this._logger.create("signoutPopupCallback");
    await this._popupNavigator.callback(e, { keepOpen: t }), r.info("success");
  }
  async _signout(e, t) {
    const r = await this._signoutStart(e, t);
    return await this._signoutEnd(r.url);
  }
  async _signoutStart(e = {}, t) {
    var r;
    const s = this._logger.create("_signoutStart");
    try {
      const n = await this._loadUser();
      s.debug("loaded current user from storage"), this.settings.revokeTokensOnSignout && await this._revokeInternal(n);
      const a = e.id_token_hint || n && n.id_token;
      a && (s.debug("setting id_token_hint in signout request"), e.id_token_hint = a), await this.removeUser(), s.debug("user removed, creating signout request");
      const o = await this._client.createSignoutRequest(e);
      return s.debug("got signout request"), await t.navigate({
        url: o.url,
        state: (r = o.state) == null ? void 0 : r.id,
        scriptOrigin: this.settings.iframeScriptOrigin
      });
    } catch (n) {
      throw s.debug("error after preparing navigator, closing navigator window"), t.close(), n;
    }
  }
  async _signoutEnd(e) {
    const t = this._logger.create("_signoutEnd"), r = await this._client.processSignoutResponse(e);
    return t.debug("got signout response"), r;
  }
  /**
   * Trigger a silent request (via an iframe) to the end session endpoint.
   *
   * @returns A promise
   */
  async signoutSilent(e = {}) {
    var t;
    const r = this._logger.create("signoutSilent"), {
      silentRequestTimeoutInSeconds: s,
      ...n
    } = e, a = this.settings.includeIdTokenInSilentSignout ? (t = await this._loadUser()) == null ? void 0 : t.id_token : void 0, o = this.settings.popup_post_logout_redirect_uri, d = await this._iframeNavigator.prepare({ silentRequestTimeoutInSeconds: s });
    await this._signout({
      request_type: "so:s",
      post_logout_redirect_uri: o,
      id_token_hint: a,
      ...n
    }, d), r.info("success");
  }
  /**
   * Notify the parent window of response (callback) from the end session endpoint.
   * It is recommended to use {@link UserManager.signoutCallback} instead.
   *
   * @returns A promise
   *
   * @see {@link UserManager.signoutCallback}
   */
  async signoutSilentCallback(e = window.location.href) {
    const t = this._logger.create("signoutSilentCallback");
    await this._iframeNavigator.callback(e), t.info("success");
  }
  async revokeTokens(e) {
    const t = await this._loadUser();
    await this._revokeInternal(t, e);
  }
  async _revokeInternal(e, t = this.settings.revokeTokenTypes) {
    const r = this._logger.create("_revokeInternal");
    if (!e) return;
    const s = t.filter((n) => typeof e[n] == "string");
    if (!s.length) {
      r.debug("no need to revoke due to no token(s)");
      return;
    }
    for (const n of s)
      await this._client.revokeToken(
        e[n],
        n
      ), r.info(`${n} revoked successfully`), n !== "access_token" && (e[n] = null);
    await this.storeUser(e), r.debug("user stored"), await this._events.load(e);
  }
  /**
   * Enables silent renew for the `UserManager`.
   */
  startSilentRenew() {
    this._logger.create("startSilentRenew"), this._silentRenewService.start();
  }
  /**
   * Disables silent renew for the `UserManager`.
   */
  stopSilentRenew() {
    this._silentRenewService.stop();
  }
  get _userStoreKey() {
    return `user:${this.settings.authority}:${this.settings.client_id}`;
  }
  async _loadUser() {
    const e = this._logger.create("_loadUser"), t = await this.settings.userStore.get(this._userStoreKey);
    return t ? (e.debug("user storageString loaded"), Oe.fromStorageString(t)) : (e.debug("no user storageString"), null);
  }
  async storeUser(e) {
    const t = this._logger.create("storeUser");
    if (e) {
      t.debug("storing user");
      const r = e.toStorageString();
      await this.settings.userStore.set(this._userStoreKey, r);
    } else
      this._logger.debug("removing user"), await this.settings.userStore.remove(this._userStoreKey), this.settings.dpop && await this.settings.dpop.store.remove(this.settings.client_id);
  }
  /**
   * Removes stale state entries in storage for incomplete authorize requests.
   */
  async clearStaleState() {
    await this._client.clearStaleState();
  }
  /**
   * Dynamically generates a DPoP proof for a given user, URL and optional Http method.
   * This method is useful when you need to make a request to a resource server
   * with fetch or similar, and you need to include a DPoP proof in a DPoP header.
   * @param url - The URL to generate the DPoP proof for
   * @param user - The user to generate the DPoP proof for
   * @param httpMethod - Optional, defaults to "GET"
   * @param nonce - Optional nonce provided by the resource server
   *
   * @returns A promise containing the DPoP proof or undefined if DPoP is not enabled/no user is found.
   */
  async dpopProof(e, t, r, s) {
    var n, a;
    const o = await ((a = (n = this.settings.dpop) == null ? void 0 : n.store) == null ? void 0 : a.get(this.settings.client_id));
    if (o)
      return await O.generateDPoPProof({
        url: e,
        accessToken: t?.access_token,
        httpMethod: r,
        keyPair: o.keys,
        nonce: s
      });
  }
  async generateDPoPJkt(e) {
    let t = await e.store.get(this.settings.client_id);
    if (!t) {
      const r = await O.generateDPoPKeys();
      t = new Rt(r), await e.store.set(this.settings.client_id, t);
    }
    return await O.generateDPoPJkt(t.keys);
  }
}, Fe = q.createContext(void 0);
Fe.displayName = "AuthContext";
var Kr = {
  isLoading: !0,
  isAuthenticated: !1
}, zr = (e, t) => {
  switch (t.type) {
    case "INITIALISED":
    case "USER_LOADED":
      return {
        ...e,
        user: t.user,
        isLoading: !1,
        isAuthenticated: t.user ? !t.user.expired : !1,
        error: void 0
      };
    case "USER_SIGNED_OUT":
    case "USER_UNLOADED":
      return {
        ...e,
        user: void 0,
        isAuthenticated: !1
      };
    case "NAVIGATOR_INIT":
      return {
        ...e,
        isLoading: !0,
        activeNavigator: t.method
      };
    case "NAVIGATOR_CLOSE":
      return {
        ...e,
        isLoading: !1,
        activeNavigator: void 0
      };
    case "ERROR": {
      const r = t.error;
      return r.toString = () => `${r.name}: ${r.message}`, {
        ...e,
        isLoading: !1,
        error: r
      };
    }
    default: {
      const r = new TypeError(`unknown type ${t.type}`), s = {
        name: r.name,
        message: r.message,
        innerError: r,
        stack: r.stack,
        source: "unknown"
      };
      return s.toString = () => `${s.name}: ${s.message}`, {
        ...e,
        isLoading: !1,
        error: s
      };
    }
  }
}, Vr = (e = window.location) => {
  let t = new URLSearchParams(e.search);
  return !!((t.get("code") || t.get("error")) && t.get("state") || (t = new URLSearchParams(e.hash.replace("#", "?")), (t.get("code") || t.get("error")) && t.get("state")));
}, Br = He("signinCallback", "Sign-in failed"), Yr = He("signoutCallback", "Sign-out failed"), Gr = He("renewSilent", "Renew silent failed");
function Ot(e, t) {
  return {
    name: Ae(e, "name", () => "Error"),
    message: Ae(e, "message", () => t),
    stack: Ae(e, "stack", () => new Error().stack),
    innerError: e
  };
}
function He(e, t) {
  return (r) => ({
    ...Ot(r, t),
    source: e
  });
}
function Ae(e, t, r) {
  if (e && typeof e == "object") {
    const s = e[t];
    if (typeof s == "string")
      return s;
  }
  return r();
}
var Xr = [
  "clearStaleState",
  "querySessionStatus",
  "revokeTokens",
  "startSilentRenew",
  "stopSilentRenew"
], Qr = [
  "signinPopup",
  "signinSilent",
  "signinRedirect",
  "signinResourceOwnerCredentials",
  "signoutPopup",
  "signoutRedirect",
  "signoutSilent"
], ft = (e) => () => {
  throw new Error(
    `UserManager#${e} was called from an unsupported context. If this is a server-rendered page, defer this call with useEffect() or pass a custom UserManager implementation.`
  );
}, wt = typeof window > "u" ? null : Jr, Zr = (e) => {
  const {
    children: t,
    onSigninCallback: r,
    skipSigninCallback: s,
    matchSignoutCallback: n,
    onSignoutCallback: a,
    onRemoveUser: o,
    userManager: d = null,
    ...c
  } = e, [l] = q.useState(() => d ?? (wt ? new wt(c) : { settings: c })), [h, _] = q.useReducer(zr, Kr), f = q.useMemo(
    () => Object.assign(
      {
        settings: l.settings,
        events: l.events
      },
      Object.fromEntries(
        Xr.map((w) => {
          var E, y;
          return [
            w,
            (y = (E = l[w]) == null ? void 0 : E.bind(l)) != null ? y : ft(w)
          ];
        })
      ),
      Object.fromEntries(
        Qr.map((w) => [
          w,
          l[w] ? async (E) => {
            _({
              type: "NAVIGATOR_INIT",
              method: w
            });
            try {
              return await l[w](E);
            } catch (y) {
              return _({
                type: "ERROR",
                error: {
                  ...Ot(y, `Unknown error while executing ${w}(...).`),
                  source: w,
                  args: E
                }
              }), null;
            } finally {
              _({ type: "NAVIGATOR_CLOSE" });
            }
          } : ft(w)
        ])
      )
    ),
    [l]
  ), R = q.useRef(!1);
  q.useEffect(() => {
    !l || R.current || (R.current = !0, (async () => {
      try {
        let w = null;
        Vr() && !s && (w = await l.signinCallback(), r && await r(w)), w = w || await l.getUser(), _({ type: "INITIALISED", user: w });
      } catch (w) {
        _({
          type: "ERROR",
          error: Br(w)
        });
      }
      try {
        if (n && n(l.settings)) {
          const w = await l.signoutCallback();
          a && await a(w);
        }
      } catch (w) {
        _({
          type: "ERROR",
          error: Yr(w)
        });
      }
    })());
  }, [l, s, r, a, n]), q.useEffect(() => {
    if (!l) return;
    const w = (N) => {
      _({ type: "USER_LOADED", user: N });
    };
    l.events.addUserLoaded(w);
    const E = () => {
      _({ type: "USER_UNLOADED" });
    };
    l.events.addUserUnloaded(E);
    const y = () => {
      _({ type: "USER_SIGNED_OUT" });
    };
    l.events.addUserSignedOut(y);
    const j = (N) => {
      _({
        type: "ERROR",
        error: Gr(N)
      });
    };
    return l.events.addSilentRenewError(j), () => {
      l.events.removeUserLoaded(w), l.events.removeUserUnloaded(E), l.events.removeUserSignedOut(y), l.events.removeSilentRenewError(j);
    };
  }, [l]);
  const A = q.useCallback(async () => {
    await l.removeUser(), o && await o();
  }, [l, o]), L = q.useMemo(() => ({
    ...h,
    ...f,
    removeUser: A
  }), [h, f, A]);
  return /* @__PURE__ */ q.createElement(Fe.Provider, { value: L }, t);
}, es = () => {
  const e = q.useContext(Fe);
  return e || console.warn("AuthProvider context is undefined, please verify you are calling useAuth() as child of a <AuthProvider> component."), e;
};
const ts = ({ children: e, Login: t, cognitoGroupName: r }) => {
  const s = es(), n = s.user?.profile;
  return s.isLoading ? /* @__PURE__ */ Y.jsx("div", { children: "Loading..." }) : s.error ? /* @__PURE__ */ Y.jsxs("div", { children: [
    "Encountering error... ",
    s.error.message
  ] }) : s.isAuthenticated ? r !== void 0 && !n?.["cognito:groups"]?.includes(r) ? /* @__PURE__ */ Y.jsxs("div", { children: [
    /* @__PURE__ */ Y.jsx("p", { children: "No project permission" }),
    /* @__PURE__ */ Y.jsx("button", { onClick: () => s.removeUser(), children: "Sign out" })
  ] }) : e : /* @__PURE__ */ Y.jsx(t, {});
}, is = ({
  children: e,
  Login: t,
  cognitoGroupName: r,
  ...s
}) => /* @__PURE__ */ Y.jsx(Zr, { ...lr, ...s, children: /* @__PURE__ */ Y.jsx(ts, { Login: t, cognitoGroupName: r, children: e }) });
export {
  is as AiResearchIdpProvider,
  ss as signOutRedirect,
  es as useAuth
};
