import A from "react";
var ie = { exports: {} }, G = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function Xe() {
  if (Te) return G;
  Te = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function s(r, i, o) {
    var n = null;
    if (o !== void 0 && (n = "" + o), i.key !== void 0 && (n = "" + i.key), "key" in i) {
      o = {};
      for (var d in i)
        d !== "key" && (o[d] = i[d]);
    } else o = i;
    return i = o.ref, {
      $$typeof: e,
      type: r,
      key: n,
      ref: i !== void 0 ? i : null,
      props: o
    };
  }
  return G.Fragment = t, G.jsx = s, G.jsxs = s, G;
}
var X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function Qe() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === F ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case T:
          return "Fragment";
        case S:
          return "Profiler";
        case p:
          return "StrictMode";
        case U:
          return "Suspense";
        case v:
          return "SuspenseList";
        case E:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case C:
            return "Portal";
          case P:
            return (c.displayName || "Context") + ".Provider";
          case y:
            return (c._context.displayName || "Context") + ".Consumer";
          case I:
            var _ = c.render;
            return c = c.displayName, c || (c = _.displayName || _.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case O:
            return _ = c.displayName || null, _ !== null ? _ : e(c.type) || "Memo";
          case x:
            _ = c._payload, c = c._init;
            try {
              return e(c(_));
            } catch {
            }
        }
      return null;
    }
    function t(c) {
      return "" + c;
    }
    function s(c) {
      try {
        t(c);
        var _ = !1;
      } catch {
        _ = !0;
      }
      if (_) {
        _ = console;
        var w = _.error, b = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return w.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          b
        ), t(c);
      }
    }
    function r(c) {
      if (c === T) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === x)
        return "<...>";
      try {
        var _ = e(c);
        return _ ? "<" + _ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var c = K.A;
      return c === null ? null : c.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function n(c) {
      if (Z.call(c, "key")) {
        var _ = Object.getOwnPropertyDescriptor(c, "key").get;
        if (_ && _.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function d(c, _) {
      function w() {
        ee || (ee = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: w,
        configurable: !0
      });
    }
    function l() {
      var c = e(this.type);
      return te[c] || (te[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function a(c, _, w, b, L, N, de, ue) {
      return w = N.ref, c = {
        $$typeof: m,
        type: c,
        key: _,
        props: N,
        _owner: L
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(c, "ref", { enumerable: !1, value: null }), c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(c, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(c, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: de
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ue
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function u(c, _, w, b, L, N, de, ue) {
      var k = _.children;
      if (k !== void 0)
        if (b)
          if (le(k)) {
            for (b = 0; b < k.length; b++)
              g(k[b]);
            Object.freeze && Object.freeze(k);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(k);
      if (Z.call(_, "key")) {
        k = e(c);
        var z = Object.keys(_).filter(function(Ge) {
          return Ge !== "key";
        });
        b = 0 < z.length ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}", re[k + b] || (z = 0 < z.length ? "{" + z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          b,
          k,
          z,
          k
        ), re[k + b] = !0);
      }
      if (k = null, w !== void 0 && (s(w), k = "" + w), n(_) && (s(_.key), k = "" + _.key), "key" in _) {
        w = {};
        for (var ge in _)
          ge !== "key" && (w[ge] = _[ge]);
      } else w = _;
      return k && d(
        w,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), a(
        c,
        k,
        N,
        L,
        i(),
        w,
        de,
        ue
      );
    }
    function g(c) {
      typeof c == "object" && c !== null && c.$$typeof === m && c._store && (c._store.validated = 1);
    }
    var h = A, m = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), P = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), E = Symbol.for("react.activity"), F = Symbol.for("react.client.reference"), K = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = Object.prototype.hasOwnProperty, le = Array.isArray, V = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var ee, te = {}, se = h.react_stack_bottom_frame.bind(
      h,
      o
    )(), Y = V(r(o)), re = {};
    X.Fragment = T, X.jsx = function(c, _, w, b, L) {
      var N = 1e4 > K.recentlyCreatedOwnerStacks++;
      return u(
        c,
        _,
        w,
        !1,
        b,
        L,
        N ? Error("react-stack-top-frame") : se,
        N ? V(r(c)) : Y
      );
    }, X.jsxs = function(c, _, w, b, L) {
      var N = 1e4 > K.recentlyCreatedOwnerStacks++;
      return u(
        c,
        _,
        w,
        !0,
        b,
        L,
        N ? Error("react-stack-top-frame") : se,
        N ? V(r(c)) : Y
      );
    };
  }()), X;
}
var Ie;
function Ze() {
  return Ie || (Ie = 1, process.env.NODE_ENV === "production" ? ie.exports = Xe() : ie.exports = Qe()), ie.exports;
}
var H = Ze();
const et = {
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
function Vt(e, t) {
  const s = window.location.origin;
  window.location.href = `${e}/logout?client_id=${t}&logout_uri=${encodeURIComponent(
    s
  )}`;
}
class Q extends Error {
}
Q.prototype.name = "InvalidTokenError";
function tt(e) {
  return decodeURIComponent(atob(e).replace(/(.)/g, (t, s) => {
    let r = s.charCodeAt(0).toString(16).toUpperCase();
    return r.length < 2 && (r = "0" + r), "%" + r;
  }));
}
function st(e) {
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
    return tt(t);
  } catch {
    return atob(t);
  }
}
function rt(e, t) {
  if (typeof e != "string")
    throw new Q("Invalid token specified: must be a string");
  t || (t = {});
  const s = t.header === !0 ? 0 : 1, r = e.split(".")[s];
  if (typeof r != "string")
    throw new Q(`Invalid token specified: missing part #${s + 1}`);
  let i;
  try {
    i = st(r);
  } catch (o) {
    throw new Q(`Invalid token specified: invalid base64 for part #${s + 1} (${o.message})`);
  }
  try {
    return JSON.parse(i);
  } catch (o) {
    throw new Q(`Invalid token specified: invalid json for part #${s + 1} (${o.message})`);
  }
}
var it = {
  debug: () => {
  },
  info: () => {
  },
  warn: () => {
  },
  error: () => {
  }
}, M, D, oe = /* @__PURE__ */ ((e) => (e[e.NONE = 0] = "NONE", e[e.ERROR = 1] = "ERROR", e[e.WARN = 2] = "WARN", e[e.INFO = 3] = "INFO", e[e.DEBUG = 4] = "DEBUG", e))(oe || {});
((e) => {
  function t() {
    M = 3, D = it;
  }
  e.reset = t;
  function s(i) {
    if (!(0 <= i && i <= 4))
      throw new Error("Invalid log level");
    M = i;
  }
  e.setLevel = s;
  function r(i) {
    D = i;
  }
  e.setLogger = r;
})(oe || (oe = {}));
var f = class j {
  constructor(t) {
    this._name = t;
  }
  /* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
  debug(...t) {
    M >= 4 && D.debug(j._format(this._name, this._method), ...t);
  }
  info(...t) {
    M >= 3 && D.info(j._format(this._name, this._method), ...t);
  }
  warn(...t) {
    M >= 2 && D.warn(j._format(this._name, this._method), ...t);
  }
  error(...t) {
    M >= 1 && D.error(j._format(this._name, this._method), ...t);
  }
  /* eslint-enable @typescript-eslint/no-unsafe-enum-comparison */
  throw(t) {
    throw this.error(t), t;
  }
  create(t) {
    const s = Object.create(this);
    return s._method = t, s.debug("begin"), s;
  }
  static createStatic(t, s) {
    const r = new j(`${t}.${s}`);
    return r.debug("begin"), r;
  }
  static _format(t, s) {
    const r = `[${t}]`;
    return s ? `${r} ${s}:` : r;
  }
  /* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
  // helpers for static class methods
  static debug(t, ...s) {
    M >= 4 && D.debug(j._format(t), ...s);
  }
  static info(t, ...s) {
    M >= 3 && D.info(j._format(t), ...s);
  }
  static warn(t, ...s) {
    M >= 2 && D.warn(j._format(t), ...s);
  }
  static error(t, ...s) {
    M >= 1 && D.error(j._format(t), ...s);
  }
  /* eslint-enable @typescript-eslint/no-unsafe-enum-comparison */
};
oe.reset();
var ae = class {
  // IMPORTANT: doesn't validate the token
  static decode(e) {
    try {
      return rt(e);
    } catch (t) {
      throw f.error("JwtUtils.decode", t), t;
    }
  }
  static async generateSignedJwt(e, t, s) {
    const r = R.encodeBase64Url(new TextEncoder().encode(JSON.stringify(e))), i = R.encodeBase64Url(new TextEncoder().encode(JSON.stringify(t))), o = `${r}.${i}`, n = await window.crypto.subtle.sign(
      {
        name: "ECDSA",
        hash: { name: "SHA-256" }
      },
      s,
      new TextEncoder().encode(o)
    ), d = R.encodeBase64Url(new Uint8Array(n));
    return `${o}.${d}`;
  }
}, nt = "10000000-1000-4000-8000-100000000000", fe = (e) => btoa([...new Uint8Array(e)].map((t) => String.fromCharCode(t)).join("")), je = class q {
  static _randomWord() {
    const t = new Uint32Array(1);
    return crypto.getRandomValues(t), t[0];
  }
  /**
   * Generates RFC4122 version 4 guid
   */
  static generateUUIDv4() {
    return nt.replace(
      /[018]/g,
      (s) => (+s ^ q._randomWord() & 15 >> +s / 4).toString(16)
    ).replace(/-/g, "");
  }
  /**
   * PKCE: Generate a code verifier
   */
  static generateCodeVerifier() {
    return q.generateUUIDv4() + q.generateUUIDv4() + q.generateUUIDv4();
  }
  /**
   * PKCE: Generate a code challenge
   */
  static async generateCodeChallenge(t) {
    if (!crypto.subtle)
      throw new Error("Crypto.subtle is available only in secure contexts (HTTPS).");
    try {
      const r = new TextEncoder().encode(t), i = await crypto.subtle.digest("SHA-256", r);
      return fe(i).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    } catch (s) {
      throw f.error("CryptoUtils.generateCodeChallenge", s), s;
    }
  }
  /**
   * Generates a base64-encoded string for a basic auth header
   */
  static generateBasicAuth(t, s) {
    const i = new TextEncoder().encode([t, s].join(":"));
    return fe(i);
  }
  /**
   * Generates a hash of a string using a given algorithm
   * @param alg
   * @param message
   */
  static async hash(t, s) {
    const r = new TextEncoder().encode(s), i = await crypto.subtle.digest(t, r);
    return new Uint8Array(i);
  }
  /**
   * Generates a rfc7638 compliant jwk thumbprint
   * @param jwk
   */
  static async customCalculateJwkThumbprint(t) {
    let s;
    switch (t.kty) {
      case "RSA":
        s = {
          e: t.e,
          kty: t.kty,
          n: t.n
        };
        break;
      case "EC":
        s = {
          crv: t.crv,
          kty: t.kty,
          x: t.x,
          y: t.y
        };
        break;
      case "OKP":
        s = {
          crv: t.crv,
          kty: t.kty,
          x: t.x
        };
        break;
      case "oct":
        s = {
          crv: t.k,
          kty: t.kty
        };
        break;
      default:
        throw new Error("Unknown jwk type");
    }
    const r = await q.hash("SHA-256", JSON.stringify(s));
    return q.encodeBase64Url(r);
  }
  static async generateDPoPProof({
    url: t,
    accessToken: s,
    httpMethod: r,
    keyPair: i,
    nonce: o
  }) {
    let n, d;
    const l = {
      jti: window.crypto.randomUUID(),
      htm: r ?? "GET",
      htu: t,
      iat: Math.floor(Date.now() / 1e3)
    };
    s && (n = await q.hash("SHA-256", s), d = q.encodeBase64Url(n), l.ath = d), o && (l.nonce = o);
    try {
      const a = await crypto.subtle.exportKey("jwk", i.publicKey), u = {
        alg: "ES256",
        typ: "dpop+jwt",
        jwk: {
          crv: a.crv,
          kty: a.kty,
          x: a.x,
          y: a.y
        }
      };
      return await ae.generateSignedJwt(u, l, i.privateKey);
    } catch (a) {
      throw a instanceof TypeError ? new Error(`Error exporting dpop public key: ${a.message}`) : a;
    }
  }
  static async generateDPoPJkt(t) {
    try {
      const s = await crypto.subtle.exportKey("jwk", t.publicKey);
      return await q.customCalculateJwkThumbprint(s);
    } catch (s) {
      throw s instanceof TypeError ? new Error(`Could not retrieve dpop keys from storage: ${s.message}`) : s;
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
je.encodeBase64Url = (e) => fe(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
var R = je, W = class {
  constructor(e) {
    this._name = e, this._callbacks = [], this._logger = new f(`Event('${this._name}')`);
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
}, xe = class {
  /**
   * Populates a map of window features with a placement centered in front of
   * the current window. If no explicit width is given, a default value is
   * binned into [800, 720, 600, 480, 360] based on the current window's width.
   */
  static center({ ...e }) {
    var t, s, r;
    return e.width == null && (e.width = (t = [800, 720, 600, 480].find((i) => i <= window.outerWidth / 1.618)) != null ? t : 360), (s = e.left) != null || (e.left = Math.max(0, Math.round(window.screenX + (window.outerWidth - e.width) / 2))), e.height != null && ((r = e.top) != null || (e.top = Math.max(0, Math.round(window.screenY + (window.outerHeight - e.height) / 2)))), e;
  }
  static serialize(e) {
    return Object.entries(e).filter(([, t]) => t != null).map(([t, s]) => `${t}=${typeof s != "boolean" ? s : s ? "yes" : "no"}`).join(",");
  }
}, $ = class ne extends W {
  constructor() {
    super(...arguments), this._logger = new f(`Timer('${this._name}')`), this._timerHandle = null, this._expiration = 0, this._callback = () => {
      const t = this._expiration - ne.getEpochTime();
      this._logger.debug("timer completes in", t), this._expiration <= ne.getEpochTime() && (this.cancel(), super.raise());
    };
  }
  // get the time
  static getEpochTime() {
    return Math.floor(Date.now() / 1e3);
  }
  init(t) {
    const s = this._logger.create("init");
    t = Math.max(Math.floor(t), 1);
    const r = ne.getEpochTime() + t;
    if (this.expiration === r && this._timerHandle) {
      s.debug("skipping since already initialized for expiration at", this.expiration);
      return;
    }
    this.cancel(), s.debug("using duration", t), this._expiration = r;
    const i = Math.min(t, 5);
    this._timerHandle = setInterval(this._callback, i * 1e3);
  }
  get expiration() {
    return this._expiration;
  }
  cancel() {
    this._logger.create("cancel"), this._timerHandle && (clearInterval(this._timerHandle), this._timerHandle = null);
  }
}, we = class {
  static readParams(e, t = "query") {
    if (!e) throw new TypeError("Invalid URL");
    const r = new URL(e, "http://127.0.0.1")[t === "fragment" ? "hash" : "search"];
    return new URLSearchParams(r.slice(1));
  }
}, B = ";", J = class extends Error {
  constructor(e, t) {
    var s, r, i;
    if (super(e.error_description || e.error || ""), this.form = t, this.name = "ErrorResponse", !e.error)
      throw f.error("ErrorResponse", "No error passed"), new Error("No error passed");
    this.error = e.error, this.error_description = (s = e.error_description) != null ? s : null, this.error_uri = (r = e.error_uri) != null ? r : null, this.state = e.userState, this.session_state = (i = e.session_state) != null ? i : null, this.url_state = e.url_state;
  }
}, be = class extends Error {
  constructor(e) {
    super(e), this.name = "ErrorTimeout";
  }
}, ot = class {
  constructor(e) {
    this._logger = new f("AccessTokenEvents"), this._expiringTimer = new $("Access token expiring"), this._expiredTimer = new $("Access token expired"), this._expiringNotificationTimeInSeconds = e.expiringNotificationTimeInSeconds;
  }
  async load(e) {
    const t = this._logger.create("load");
    if (e.access_token && e.expires_in !== void 0) {
      const s = e.expires_in;
      if (t.debug("access token present, remaining duration:", s), s > 0) {
        let i = s - this._expiringNotificationTimeInSeconds;
        i <= 0 && (i = 1), t.debug("registering expiring timer, raising in", i, "seconds"), this._expiringTimer.init(i);
      } else
        t.debug("canceling existing expiring timer because we're past expiration."), this._expiringTimer.cancel();
      const r = s + 1;
      t.debug("registering expired timer, raising in", r, "seconds"), this._expiredTimer.init(r);
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
}, at = class {
  constructor(e, t, s, r, i) {
    this._callback = e, this._client_id = t, this._intervalInSeconds = r, this._stopOnError = i, this._logger = new f("CheckSessionIFrame"), this._timer = null, this._session_state = null, this._message = (n) => {
      n.origin === this._frame_origin && n.source === this._frame.contentWindow && (n.data === "error" ? (this._logger.error("error message from check session op iframe"), this._stopOnError && this.stop()) : n.data === "changed" ? (this._logger.debug("changed message from check session op iframe"), this.stop(), this._callback()) : this._logger.debug(n.data + " message from check session op iframe"));
    };
    const o = new URL(s);
    this._frame_origin = o.origin, this._frame = window.document.createElement("iframe"), this._frame.style.visibility = "hidden", this._frame.style.position = "fixed", this._frame.style.left = "-1000px", this._frame.style.top = "0", this._frame.width = "0", this._frame.height = "0", this._frame.src = o.href;
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
}, qe = class {
  constructor() {
    this._logger = new f("InMemoryWebStorage"), this._data = {};
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
}, me = class extends Error {
  constructor(e, t) {
    super(t), this.name = "ErrorDPoPNonce", this.nonce = e;
  }
}, ke = class {
  constructor(e = [], t = null, s = {}) {
    this._jwtHandler = t, this._extraHeaders = s, this._logger = new f("JsonService"), this._contentTypes = [], this._contentTypes.push(...e, "application/json"), t && this._contentTypes.push("application/jwt");
  }
  async fetchWithTimeout(e, t = {}) {
    const { timeoutInSeconds: s, ...r } = t;
    if (!s)
      return await fetch(e, r);
    const i = new AbortController(), o = setTimeout(() => i.abort(), s * 1e3);
    try {
      return await fetch(e, {
        ...t,
        signal: i.signal
      });
    } catch (n) {
      throw n instanceof DOMException && n.name === "AbortError" ? new be("Network timed out") : n;
    } finally {
      clearTimeout(o);
    }
  }
  async getJson(e, {
    token: t,
    credentials: s,
    timeoutInSeconds: r
  } = {}) {
    const i = this._logger.create("getJson"), o = {
      Accept: this._contentTypes.join(", ")
    };
    t && (i.debug("token passed, setting Authorization header"), o.Authorization = "Bearer " + t), this._appendExtraHeaders(o);
    let n;
    try {
      i.debug("url:", e), n = await this.fetchWithTimeout(e, { method: "GET", headers: o, timeoutInSeconds: r, credentials: s });
    } catch (a) {
      throw i.error("Network Error"), a;
    }
    i.debug("HTTP response received, status", n.status);
    const d = n.headers.get("Content-Type");
    if (d && !this._contentTypes.find((a) => d.startsWith(a)) && i.throw(new Error(`Invalid response Content-Type: ${d ?? "undefined"}, from URL: ${e}`)), n.ok && this._jwtHandler && d?.startsWith("application/jwt"))
      return await this._jwtHandler(await n.text());
    let l;
    try {
      l = await n.json();
    } catch (a) {
      throw i.error("Error parsing JSON response", a), n.ok ? a : new Error(`${n.statusText} (${n.status})`);
    }
    if (!n.ok)
      throw i.error("Error from server:", l), l.error ? new J(l) : new Error(`${n.statusText} (${n.status}): ${JSON.stringify(l)}`);
    return l;
  }
  async postForm(e, {
    body: t,
    basicAuth: s,
    timeoutInSeconds: r,
    initCredentials: i,
    extraHeaders: o
  }) {
    const n = this._logger.create("postForm"), d = {
      Accept: this._contentTypes.join(", "),
      "Content-Type": "application/x-www-form-urlencoded",
      ...o
    };
    s !== void 0 && (d.Authorization = "Basic " + s), this._appendExtraHeaders(d);
    let l;
    try {
      n.debug("url:", e), l = await this.fetchWithTimeout(e, { method: "POST", headers: d, body: t, timeoutInSeconds: r, credentials: i });
    } catch (h) {
      throw n.error("Network error"), h;
    }
    n.debug("HTTP response received, status", l.status);
    const a = l.headers.get("Content-Type");
    if (a && !this._contentTypes.find((h) => a.startsWith(h)))
      throw new Error(`Invalid response Content-Type: ${a ?? "undefined"}, from URL: ${e}`);
    const u = await l.text();
    let g = {};
    if (u)
      try {
        g = JSON.parse(u);
      } catch (h) {
        throw n.error("Error parsing JSON response", h), l.ok ? h : new Error(`${l.statusText} (${l.status})`);
      }
    if (!l.ok) {
      if (n.error("Error from server:", g), l.headers.has("dpop-nonce")) {
        const h = l.headers.get("dpop-nonce");
        throw new me(h, `${JSON.stringify(g)}`);
      }
      throw g.error ? new J(g, t) : new Error(`${l.statusText} (${l.status}): ${JSON.stringify(g)}`);
    }
    return g;
  }
  _appendExtraHeaders(e) {
    const t = this._logger.create("appendExtraHeaders"), s = Object.keys(this._extraHeaders), r = [
      "accept",
      "content-type"
    ], i = [
      "authorization"
    ];
    s.length !== 0 && s.forEach((o) => {
      if (r.includes(o.toLocaleLowerCase())) {
        t.warn("Protected header could not be set", o, r);
        return;
      }
      if (i.includes(o.toLocaleLowerCase()) && Object.keys(e).includes(o)) {
        t.warn("Header could not be overridden", o, i);
        return;
      }
      const n = typeof this._extraHeaders[o] == "function" ? this._extraHeaders[o]() : this._extraHeaders[o];
      n && n !== "" && (e[o] = n);
    });
  }
}, ct = class {
  constructor(e) {
    this._settings = e, this._logger = new f("MetadataService"), this._signingKeys = null, this._metadata = null, this._metadataUrl = this._settings.metadataUrl, this._jsonService = new ke(
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
    const s = this._logger.create(`_getMetadataProperty('${e}')`), r = await this.getMetadata();
    if (s.debug("resolved"), r[e] === void 0) {
      if (t === !0) {
        s.warn("Metadata does not contain optional property");
        return;
      }
      s.throw(new Error("Metadata does not contain property " + e));
    }
    return r[e];
  }
  async getSigningKeys() {
    const e = this._logger.create("getSigningKeys");
    if (this._signingKeys)
      return e.debug("returning signingKeys from cache"), this._signingKeys;
    const t = await this.getKeysEndpoint(!1);
    e.debug("got jwks_uri", t);
    const s = await this._jsonService.getJson(t, { timeoutInSeconds: this._settings.requestTimeoutInSeconds });
    if (e.debug("got key set", s), !Array.isArray(s.keys))
      throw e.throw(new Error("Missing keys on keyset")), null;
    return this._signingKeys = s.keys, this._signingKeys;
  }
}, Me = class {
  constructor({
    prefix: e = "oidc.",
    store: t = localStorage
  } = {}) {
    this._logger = new f("WebStorageStateStore"), this._store = t, this._prefix = e;
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
    for (let s = 0; s < e; s++) {
      const r = await this._store.key(s);
      r && r.indexOf(this._prefix) === 0 && t.push(r.substr(this._prefix.length));
    }
    return t;
  }
}, lt = "code", dt = "openid", ut = "client_secret_post", gt = 900, ve = class {
  constructor({
    // metadata related
    authority: e,
    metadataUrl: t,
    metadata: s,
    signingKeys: r,
    metadataSeed: i,
    // client related
    client_id: o,
    client_secret: n,
    response_type: d = lt,
    scope: l = dt,
    redirect_uri: a,
    post_logout_redirect_uri: u,
    client_authentication: g = ut,
    // optional protocol
    prompt: h,
    display: m,
    max_age: C,
    ui_locales: T,
    acr_values: p,
    resource: S,
    response_mode: y,
    // behavior flags
    filterProtocolClaims: P = !0,
    loadUserInfo: I = !1,
    requestTimeoutInSeconds: U,
    staleStateAgeInSeconds: v = gt,
    mergeClaimsStrategy: O = { array: "replace" },
    disablePKCE: x = !1,
    // other behavior
    stateStore: E,
    revokeTokenAdditionalContentTypes: F,
    fetchRequestCredentials: K,
    refreshTokenAllowedScope: Z,
    // extra
    extraQueryParams: le = {},
    extraTokenParams: V = {},
    extraHeaders: ee = {},
    dpop: te,
    omitScopeWhenRequesting: se = !1
  }) {
    var Y;
    if (this.authority = e, t ? this.metadataUrl = t : (this.metadataUrl = e, e && (this.metadataUrl.endsWith("/") || (this.metadataUrl += "/"), this.metadataUrl += ".well-known/openid-configuration")), this.metadata = s, this.metadataSeed = i, this.signingKeys = r, this.client_id = o, this.client_secret = n, this.response_type = d, this.scope = l, this.redirect_uri = a, this.post_logout_redirect_uri = u, this.client_authentication = g, this.prompt = h, this.display = m, this.max_age = C, this.ui_locales = T, this.acr_values = p, this.resource = S, this.response_mode = y, this.filterProtocolClaims = P ?? !0, this.loadUserInfo = !!I, this.staleStateAgeInSeconds = v, this.mergeClaimsStrategy = O, this.omitScopeWhenRequesting = se, this.disablePKCE = !!x, this.revokeTokenAdditionalContentTypes = F, this.fetchRequestCredentials = K || "same-origin", this.requestTimeoutInSeconds = U, E)
      this.stateStore = E;
    else {
      const re = typeof window < "u" ? window.localStorage : new qe();
      this.stateStore = new Me({ store: re });
    }
    if (this.refreshTokenAllowedScope = Z, this.extraQueryParams = le, this.extraTokenParams = V, this.extraHeaders = ee, this.dpop = te, this.dpop && !((Y = this.dpop) != null && Y.store))
      throw new Error("A DPoPStore is required when dpop is enabled");
  }
}, ht = class {
  constructor(e, t) {
    this._settings = e, this._metadataService = t, this._logger = new f("UserInfoService"), this._getClaimsFromJwt = async (s) => {
      const r = this._logger.create("_getClaimsFromJwt");
      try {
        const i = ae.decode(s);
        return r.debug("JWT decoding successful"), i;
      } catch (i) {
        throw r.error("Error parsing JWT response"), i;
      }
    }, this._jsonService = new ke(
      void 0,
      this._getClaimsFromJwt,
      this._settings.extraHeaders
    );
  }
  async getClaims(e) {
    const t = this._logger.create("getClaims");
    e || this._logger.throw(new Error("No token passed"));
    const s = await this._metadataService.getUserInfoEndpoint();
    t.debug("got userinfo url", s);
    const r = await this._jsonService.getJson(s, {
      token: e,
      credentials: this._settings.fetchRequestCredentials,
      timeoutInSeconds: this._settings.requestTimeoutInSeconds
    });
    return t.debug("got claims", r), r;
  }
}, De = class {
  constructor(e, t) {
    this._settings = e, this._metadataService = t, this._logger = new f("TokenClient"), this._jsonService = new ke(
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
    client_id: s = this._settings.client_id,
    client_secret: r = this._settings.client_secret,
    extraHeaders: i,
    ...o
  }) {
    const n = this._logger.create("exchangeCode");
    s || n.throw(new Error("A client_id is required")), t || n.throw(new Error("A redirect_uri is required")), o.code || n.throw(new Error("A code is required"));
    const d = new URLSearchParams({ grant_type: e, redirect_uri: t });
    for (const [g, h] of Object.entries(o))
      h != null && d.set(g, h);
    let l;
    switch (this._settings.client_authentication) {
      case "client_secret_basic":
        if (r == null)
          throw n.throw(new Error("A client_secret is required")), null;
        l = R.generateBasicAuth(s, r);
        break;
      case "client_secret_post":
        d.append("client_id", s), r && d.append("client_secret", r);
        break;
    }
    const a = await this._metadataService.getTokenEndpoint(!1);
    n.debug("got token endpoint");
    const u = await this._jsonService.postForm(a, {
      body: d,
      basicAuth: l,
      timeoutInSeconds: this._settings.requestTimeoutInSeconds,
      initCredentials: this._settings.fetchRequestCredentials,
      extraHeaders: i
    });
    return n.debug("got response"), u;
  }
  /**
   * Exchange credentials.
   *
   * @see https://www.rfc-editor.org/rfc/rfc6749#section-4.3.2
   */
  async exchangeCredentials({
    grant_type: e = "password",
    client_id: t = this._settings.client_id,
    client_secret: s = this._settings.client_secret,
    scope: r = this._settings.scope,
    ...i
  }) {
    const o = this._logger.create("exchangeCredentials");
    t || o.throw(new Error("A client_id is required"));
    const n = new URLSearchParams({ grant_type: e });
    this._settings.omitScopeWhenRequesting || n.set("scope", r);
    for (const [u, g] of Object.entries(i))
      g != null && n.set(u, g);
    let d;
    switch (this._settings.client_authentication) {
      case "client_secret_basic":
        if (s == null)
          throw o.throw(new Error("A client_secret is required")), null;
        d = R.generateBasicAuth(t, s);
        break;
      case "client_secret_post":
        n.append("client_id", t), s && n.append("client_secret", s);
        break;
    }
    const l = await this._metadataService.getTokenEndpoint(!1);
    o.debug("got token endpoint");
    const a = await this._jsonService.postForm(l, { body: n, basicAuth: d, timeoutInSeconds: this._settings.requestTimeoutInSeconds, initCredentials: this._settings.fetchRequestCredentials });
    return o.debug("got response"), a;
  }
  /**
   * Exchange a refresh token.
   *
   * @see https://www.rfc-editor.org/rfc/rfc6749#section-6
   */
  async exchangeRefreshToken({
    grant_type: e = "refresh_token",
    client_id: t = this._settings.client_id,
    client_secret: s = this._settings.client_secret,
    timeoutInSeconds: r,
    extraHeaders: i,
    ...o
  }) {
    const n = this._logger.create("exchangeRefreshToken");
    t || n.throw(new Error("A client_id is required")), o.refresh_token || n.throw(new Error("A refresh_token is required"));
    const d = new URLSearchParams({ grant_type: e });
    for (const [g, h] of Object.entries(o))
      Array.isArray(h) ? h.forEach((m) => d.append(g, m)) : h != null && d.set(g, h);
    let l;
    switch (this._settings.client_authentication) {
      case "client_secret_basic":
        if (s == null)
          throw n.throw(new Error("A client_secret is required")), null;
        l = R.generateBasicAuth(t, s);
        break;
      case "client_secret_post":
        d.append("client_id", t), s && d.append("client_secret", s);
        break;
    }
    const a = await this._metadataService.getTokenEndpoint(!1);
    n.debug("got token endpoint");
    const u = await this._jsonService.postForm(a, { body: d, basicAuth: l, timeoutInSeconds: r, initCredentials: this._settings.fetchRequestCredentials, extraHeaders: i });
    return n.debug("got response"), u;
  }
  /**
   * Revoke an access or refresh token.
   *
   * @see https://datatracker.ietf.org/doc/html/rfc7009#section-2.1
   */
  async revoke(e) {
    var t;
    const s = this._logger.create("revoke");
    e.token || s.throw(new Error("A token is required"));
    const r = await this._metadataService.getRevocationEndpoint(!1);
    s.debug(`got revocation endpoint, revoking ${(t = e.token_type_hint) != null ? t : "default token type"}`);
    const i = new URLSearchParams();
    for (const [o, n] of Object.entries(e))
      n != null && i.set(o, n);
    i.set("client_id", this._settings.client_id), this._settings.client_secret && i.set("client_secret", this._settings.client_secret), await this._jsonService.postForm(r, { body: i, timeoutInSeconds: this._settings.requestTimeoutInSeconds }), s.debug("got response");
  }
}, _t = class {
  constructor(e, t, s) {
    this._settings = e, this._metadataService = t, this._claimsService = s, this._logger = new f("ResponseValidator"), this._userInfoService = new ht(this._settings, this._metadataService), this._tokenClient = new De(this._settings, this._metadataService);
  }
  async validateSigninResponse(e, t, s) {
    const r = this._logger.create("validateSigninResponse");
    this._processSigninState(e, t), r.debug("state processed"), await this._processCode(e, t, s), r.debug("code processed"), e.isOpenId && this._validateIdTokenAttributes(e), r.debug("tokens validated"), await this._processClaims(e, t?.skipUserInfo, e.isOpenId), r.debug("claims processed");
  }
  async validateCredentialsResponse(e, t) {
    const s = this._logger.create("validateCredentialsResponse"), r = e.isOpenId && !!e.id_token;
    r && this._validateIdTokenAttributes(e), s.debug("tokens validated"), await this._processClaims(e, t, r), s.debug("claims processed");
  }
  async validateRefreshResponse(e, t) {
    var s, r;
    const i = this._logger.create("validateRefreshResponse");
    e.userState = t.data, (s = e.session_state) != null || (e.session_state = t.session_state), (r = e.scope) != null || (e.scope = t.scope), e.isOpenId && e.id_token && (this._validateIdTokenAttributes(e, t.id_token), i.debug("ID Token validated")), e.id_token || (e.id_token = t.id_token, e.profile = t.profile);
    const o = e.isOpenId && !!e.id_token;
    await this._processClaims(e, !1, o), i.debug("claims processed");
  }
  validateSignoutResponse(e, t) {
    const s = this._logger.create("validateSignoutResponse");
    if (t.id !== e.state && s.throw(new Error("State does not match")), s.debug("state validated"), e.userState = t.data, e.error)
      throw s.warn("Response was error", e.error), new J(e);
  }
  _processSigninState(e, t) {
    var s;
    const r = this._logger.create("_processSigninState");
    if (t.id !== e.state && r.throw(new Error("State does not match")), t.client_id || r.throw(new Error("No client_id on state")), t.authority || r.throw(new Error("No authority on state")), this._settings.authority !== t.authority && r.throw(new Error("authority mismatch on settings vs. signin state")), this._settings.client_id && this._settings.client_id !== t.client_id && r.throw(new Error("client_id mismatch on settings vs. signin state")), r.debug("state validated"), e.userState = t.data, e.url_state = t.url_state, (s = e.scope) != null || (e.scope = t.scope), e.error)
      throw r.warn("Response was error", e.error), new J(e);
    t.code_verifier && !e.code && r.throw(new Error("Expected code in response"));
  }
  async _processClaims(e, t = !1, s = !0) {
    const r = this._logger.create("_processClaims");
    if (e.profile = this._claimsService.filterProtocolClaims(e.profile), t || !this._settings.loadUserInfo || !e.access_token) {
      r.debug("not loading user info");
      return;
    }
    r.debug("loading user info");
    const i = await this._userInfoService.getClaims(e.access_token);
    r.debug("user info claims received from user info endpoint"), s && i.sub !== e.profile.sub && r.throw(new Error("subject from UserInfo response does not match subject in ID Token")), e.profile = this._claimsService.mergeClaims(e.profile, this._claimsService.filterProtocolClaims(i)), r.debug("user info claims received, updated profile:", e.profile);
  }
  async _processCode(e, t, s) {
    const r = this._logger.create("_processCode");
    if (e.code) {
      r.debug("Validating code");
      const i = await this._tokenClient.exchangeCode({
        client_id: t.client_id,
        client_secret: t.client_secret,
        code: e.code,
        redirect_uri: t.redirect_uri,
        code_verifier: t.code_verifier,
        extraHeaders: s,
        ...t.extraTokenParams
      });
      Object.assign(e, i);
    } else
      r.debug("No code to process");
  }
  _validateIdTokenAttributes(e, t) {
    var s;
    const r = this._logger.create("_validateIdTokenAttributes");
    r.debug("decoding ID Token JWT");
    const i = ae.decode((s = e.id_token) != null ? s : "");
    if (i.sub || r.throw(new Error("ID Token is missing a subject claim")), t) {
      const o = ae.decode(t);
      i.sub !== o.sub && r.throw(new Error("sub in id_token does not match current sub")), i.auth_time && i.auth_time !== o.auth_time && r.throw(new Error("auth_time in id_token does not match original auth_time")), i.azp && i.azp !== o.azp && r.throw(new Error("azp in id_token does not match original azp")), !i.azp && o.azp && r.throw(new Error("azp not in id_token, but present in original id_token"));
    }
    e.profile = i;
  }
}, ce = class Se {
  constructor(t) {
    this.id = t.id || R.generateUUIDv4(), this.data = t.data, t.created && t.created > 0 ? this.created = t.created : this.created = $.getEpochTime(), this.request_type = t.request_type, this.url_state = t.url_state;
  }
  toStorageString() {
    return new f("State").create("toStorageString"), JSON.stringify({
      id: this.id,
      data: this.data,
      created: this.created,
      request_type: this.request_type,
      url_state: this.url_state
    });
  }
  static fromStorageString(t) {
    return f.createStatic("State", "fromStorageString"), Promise.resolve(new Se(JSON.parse(t)));
  }
  static async clearStaleState(t, s) {
    const r = f.createStatic("State", "clearStaleState"), i = $.getEpochTime() - s, o = await t.getAllKeys();
    r.debug("got keys", o);
    for (let n = 0; n < o.length; n++) {
      const d = o[n], l = await t.get(d);
      let a = !1;
      if (l)
        try {
          const u = await Se.fromStorageString(l);
          r.debug("got item from key:", d, u.created), u.created <= i && (a = !0);
        } catch (u) {
          r.error("Error parsing state for key:", d, u), a = !0;
        }
      else
        r.debug("no item in storage for key:", d), a = !0;
      a && (r.debug("removed item for key:", d), t.remove(d));
    }
  }
}, $e = class ye extends ce {
  constructor(t) {
    super(t), this.code_verifier = t.code_verifier, this.code_challenge = t.code_challenge, this.authority = t.authority, this.client_id = t.client_id, this.redirect_uri = t.redirect_uri, this.scope = t.scope, this.client_secret = t.client_secret, this.extraTokenParams = t.extraTokenParams, this.response_mode = t.response_mode, this.skipUserInfo = t.skipUserInfo;
  }
  static async create(t) {
    const s = t.code_verifier === !0 ? R.generateCodeVerifier() : t.code_verifier || void 0, r = s ? await R.generateCodeChallenge(s) : void 0;
    return new ye({
      ...t,
      code_verifier: s,
      code_challenge: r
    });
  }
  toStorageString() {
    return new f("SigninState").create("toStorageString"), JSON.stringify({
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
    f.createStatic("SigninState", "fromStorageString");
    const s = JSON.parse(t);
    return ye.create(s);
  }
}, Le = class He {
  constructor(t) {
    this.url = t.url, this.state = t.state;
  }
  static async create({
    // mandatory
    url: t,
    authority: s,
    client_id: r,
    redirect_uri: i,
    response_type: o,
    scope: n,
    // optional
    state_data: d,
    response_mode: l,
    request_type: a,
    client_secret: u,
    nonce: g,
    url_state: h,
    resource: m,
    skipUserInfo: C,
    extraQueryParams: T,
    extraTokenParams: p,
    disablePKCE: S,
    dpopJkt: y,
    omitScopeWhenRequesting: P,
    ...I
  }) {
    if (!t)
      throw this._logger.error("create: No url passed"), new Error("url");
    if (!r)
      throw this._logger.error("create: No client_id passed"), new Error("client_id");
    if (!i)
      throw this._logger.error("create: No redirect_uri passed"), new Error("redirect_uri");
    if (!o)
      throw this._logger.error("create: No response_type passed"), new Error("response_type");
    if (!n)
      throw this._logger.error("create: No scope passed"), new Error("scope");
    if (!s)
      throw this._logger.error("create: No authority passed"), new Error("authority");
    const U = await $e.create({
      data: d,
      request_type: a,
      url_state: h,
      code_verifier: !S,
      client_id: r,
      authority: s,
      redirect_uri: i,
      response_mode: l,
      client_secret: u,
      scope: n,
      extraTokenParams: p,
      skipUserInfo: C
    }), v = new URL(t);
    v.searchParams.append("client_id", r), v.searchParams.append("redirect_uri", i), v.searchParams.append("response_type", o), P || v.searchParams.append("scope", n), g && v.searchParams.append("nonce", g), y && v.searchParams.append("dpop_jkt", y);
    let O = U.id;
    h && (O = `${O}${B}${h}`), v.searchParams.append("state", O), U.code_challenge && (v.searchParams.append("code_challenge", U.code_challenge), v.searchParams.append("code_challenge_method", "S256")), m && (Array.isArray(m) ? m : [m]).forEach((E) => v.searchParams.append("resource", E));
    for (const [x, E] of Object.entries({ response_mode: l, ...I, ...T }))
      E != null && v.searchParams.append(x, E.toString());
    return new He({
      url: v.href,
      state: U
    });
  }
};
Le._logger = new f("SigninRequest");
var pt = Le, ft = "openid", he = class {
  constructor(e) {
    if (this.access_token = "", this.token_type = "", this.profile = {}, this.state = e.get("state"), this.session_state = e.get("session_state"), this.state) {
      const t = decodeURIComponent(this.state).split(B);
      this.state = t[0], t.length > 1 && (this.url_state = t.slice(1).join(B));
    }
    this.error = e.get("error"), this.error_description = e.get("error_description"), this.error_uri = e.get("error_uri"), this.code = e.get("code");
  }
  get expires_in() {
    if (this.expires_at !== void 0)
      return this.expires_at - $.getEpochTime();
  }
  set expires_in(e) {
    typeof e == "string" && (e = Number(e)), e !== void 0 && e >= 0 && (this.expires_at = Math.floor(e) + $.getEpochTime());
  }
  get isOpenId() {
    var e;
    return ((e = this.scope) == null ? void 0 : e.split(" ").includes(ft)) || !!this.id_token;
  }
}, wt = class {
  constructor({
    url: e,
    state_data: t,
    id_token_hint: s,
    post_logout_redirect_uri: r,
    extraQueryParams: i,
    request_type: o,
    client_id: n,
    url_state: d
  }) {
    if (this._logger = new f("SignoutRequest"), !e)
      throw this._logger.error("ctor: No url passed"), new Error("url");
    const l = new URL(e);
    if (s && l.searchParams.append("id_token_hint", s), n && l.searchParams.append("client_id", n), r && (l.searchParams.append("post_logout_redirect_uri", r), t || d)) {
      this.state = new ce({ data: t, request_type: o, url_state: d });
      let a = this.state.id;
      d && (a = `${a}${B}${d}`), l.searchParams.append("state", a);
    }
    for (const [a, u] of Object.entries({ ...i }))
      u != null && l.searchParams.append(a, u.toString());
    this.url = l.href;
  }
}, mt = class {
  constructor(e) {
    if (this.state = e.get("state"), this.state) {
      const t = decodeURIComponent(this.state).split(B);
      this.state = t[0], t.length > 1 && (this.url_state = t.slice(1).join(B));
    }
    this.error = e.get("error"), this.error_description = e.get("error_description"), this.error_uri = e.get("error_uri");
  }
}, vt = [
  "nbf",
  "jti",
  "auth_time",
  "nonce",
  "acr",
  "amr",
  "azp",
  "at_hash"
  // https://openid.net/specs/openid-connect-core-1_0.html#CodeIDToken
], St = ["sub", "iss", "aud", "exp", "iat"], yt = class {
  constructor(e) {
    this._settings = e, this._logger = new f("ClaimsService");
  }
  filterProtocolClaims(e) {
    const t = { ...e };
    if (this._settings.filterProtocolClaims) {
      let s;
      Array.isArray(this._settings.filterProtocolClaims) ? s = this._settings.filterProtocolClaims : s = vt;
      for (const r of s)
        St.includes(r) || delete t[r];
    }
    return t;
  }
  mergeClaims(e, t) {
    const s = { ...e };
    for (const [r, i] of Object.entries(t))
      if (s[r] !== i)
        if (Array.isArray(s[r]) || Array.isArray(i))
          if (this._settings.mergeClaimsStrategy.array == "replace")
            s[r] = i;
          else {
            const o = Array.isArray(s[r]) ? s[r] : [s[r]];
            for (const n of Array.isArray(i) ? i : [i])
              o.includes(n) || o.push(n);
            s[r] = o;
          }
        else typeof s[r] == "object" && typeof i == "object" ? s[r] = this.mergeClaims(s[r], i) : s[r] = i;
    return s;
  }
}, We = class {
  constructor(e, t) {
    this.keys = e, this.nonce = t;
  }
}, bt = class {
  constructor(e, t) {
    this._logger = new f("OidcClient"), this.settings = e instanceof ve ? e : new ve(e), this.metadataService = t ?? new ct(this.settings), this._claimsService = new yt(this.settings), this._validator = new _t(this.settings, this.metadataService, this._claimsService), this._tokenClient = new De(this.settings, this.metadataService);
  }
  async createSigninRequest({
    state: e,
    request: t,
    request_uri: s,
    request_type: r,
    id_token_hint: i,
    login_hint: o,
    skipUserInfo: n,
    nonce: d,
    url_state: l,
    response_type: a = this.settings.response_type,
    scope: u = this.settings.scope,
    redirect_uri: g = this.settings.redirect_uri,
    prompt: h = this.settings.prompt,
    display: m = this.settings.display,
    max_age: C = this.settings.max_age,
    ui_locales: T = this.settings.ui_locales,
    acr_values: p = this.settings.acr_values,
    resource: S = this.settings.resource,
    response_mode: y = this.settings.response_mode,
    extraQueryParams: P = this.settings.extraQueryParams,
    extraTokenParams: I = this.settings.extraTokenParams,
    dpopJkt: U,
    omitScopeWhenRequesting: v = this.settings.omitScopeWhenRequesting
  }) {
    const O = this._logger.create("createSigninRequest");
    if (a !== "code")
      throw new Error("Only the Authorization Code flow (with PKCE) is supported");
    const x = await this.metadataService.getAuthorizationEndpoint();
    O.debug("Received authorization endpoint", x);
    const E = await pt.create({
      url: x,
      authority: this.settings.authority,
      client_id: this.settings.client_id,
      redirect_uri: g,
      response_type: a,
      scope: u,
      state_data: e,
      url_state: l,
      prompt: h,
      display: m,
      max_age: C,
      ui_locales: T,
      id_token_hint: i,
      login_hint: o,
      acr_values: p,
      dpopJkt: U,
      resource: S,
      request: t,
      request_uri: s,
      extraQueryParams: P,
      extraTokenParams: I,
      request_type: r,
      response_mode: y,
      client_secret: this.settings.client_secret,
      skipUserInfo: n,
      nonce: d,
      disablePKCE: this.settings.disablePKCE,
      omitScopeWhenRequesting: v
    });
    await this.clearStaleState();
    const F = E.state;
    return await this.settings.stateStore.set(F.id, F.toStorageString()), E;
  }
  async readSigninResponseState(e, t = !1) {
    const s = this._logger.create("readSigninResponseState"), r = new he(we.readParams(e, this.settings.response_mode));
    if (!r.state)
      throw s.throw(new Error("No state in response")), null;
    const i = await this.settings.stateStore[t ? "remove" : "get"](r.state);
    if (!i)
      throw s.throw(new Error("No matching state found in storage")), null;
    return { state: await $e.fromStorageString(i), response: r };
  }
  async processSigninResponse(e, t, s = !0) {
    const r = this._logger.create("processSigninResponse"), { state: i, response: o } = await this.readSigninResponseState(e, s);
    if (r.debug("received state from storage; validating response"), this.settings.dpop && this.settings.dpop.store) {
      const n = await this.getDpopProof(this.settings.dpop.store);
      t = { ...t, DPoP: n };
    }
    try {
      await this._validator.validateSigninResponse(o, i, t);
    } catch (n) {
      if (n instanceof me && this.settings.dpop) {
        const d = await this.getDpopProof(this.settings.dpop.store, n.nonce);
        t.DPoP = d, await this._validator.validateSigninResponse(o, i, t);
      } else
        throw n;
    }
    return o;
  }
  async getDpopProof(e, t) {
    let s, r;
    return (await e.getAllKeys()).includes(this.settings.client_id) ? (r = await e.get(this.settings.client_id), r.nonce !== t && t && (r.nonce = t, await e.set(this.settings.client_id, r))) : (s = await R.generateDPoPKeys(), r = new We(s, t), await e.set(this.settings.client_id, r)), await R.generateDPoPProof({
      url: await this.metadataService.getTokenEndpoint(!1),
      httpMethod: "POST",
      keyPair: r.keys,
      nonce: r.nonce
    });
  }
  async processResourceOwnerPasswordCredentials({
    username: e,
    password: t,
    skipUserInfo: s = !1,
    extraTokenParams: r = {}
  }) {
    const i = await this._tokenClient.exchangeCredentials({ username: e, password: t, ...r }), o = new he(new URLSearchParams());
    return Object.assign(o, i), await this._validator.validateCredentialsResponse(o, s), o;
  }
  async useRefreshToken({
    state: e,
    redirect_uri: t,
    resource: s,
    timeoutInSeconds: r,
    extraHeaders: i,
    extraTokenParams: o
  }) {
    var n;
    const d = this._logger.create("useRefreshToken");
    let l;
    if (this.settings.refreshTokenAllowedScope === void 0)
      l = e.scope;
    else {
      const g = this.settings.refreshTokenAllowedScope.split(" ");
      l = (((n = e.scope) == null ? void 0 : n.split(" ")) || []).filter((m) => g.includes(m)).join(" ");
    }
    if (this.settings.dpop && this.settings.dpop.store) {
      const g = await this.getDpopProof(this.settings.dpop.store);
      i = { ...i, DPoP: g };
    }
    let a;
    try {
      a = await this._tokenClient.exchangeRefreshToken({
        refresh_token: e.refresh_token,
        // provide the (possible filtered) scope list
        scope: l,
        redirect_uri: t,
        resource: s,
        timeoutInSeconds: r,
        extraHeaders: i,
        ...o
      });
    } catch (g) {
      if (g instanceof me && this.settings.dpop)
        i.DPoP = await this.getDpopProof(this.settings.dpop.store, g.nonce), a = await this._tokenClient.exchangeRefreshToken({
          refresh_token: e.refresh_token,
          // provide the (possible filtered) scope list
          scope: l,
          redirect_uri: t,
          resource: s,
          timeoutInSeconds: r,
          extraHeaders: i,
          ...o
        });
      else
        throw g;
    }
    const u = new he(new URLSearchParams());
    return Object.assign(u, a), d.debug("validating response", u), await this._validator.validateRefreshResponse(u, {
      ...e,
      // override the scope in the state handed over to the validator
      // so it can set the granted scope to the requested scope in case none is included in the response
      scope: l
    }), u;
  }
  async createSignoutRequest({
    state: e,
    id_token_hint: t,
    client_id: s,
    request_type: r,
    url_state: i,
    post_logout_redirect_uri: o = this.settings.post_logout_redirect_uri,
    extraQueryParams: n = this.settings.extraQueryParams
  } = {}) {
    const d = this._logger.create("createSignoutRequest"), l = await this.metadataService.getEndSessionEndpoint();
    if (!l)
      throw d.throw(new Error("No end session endpoint")), null;
    d.debug("Received end session endpoint", l), !s && o && !t && (s = this.settings.client_id);
    const a = new wt({
      url: l,
      id_token_hint: t,
      client_id: s,
      post_logout_redirect_uri: o,
      state_data: e,
      extraQueryParams: n,
      request_type: r,
      url_state: i
    });
    await this.clearStaleState();
    const u = a.state;
    return u && (d.debug("Signout request has state to persist"), await this.settings.stateStore.set(u.id, u.toStorageString())), a;
  }
  async readSignoutResponseState(e, t = !1) {
    const s = this._logger.create("readSignoutResponseState"), r = new mt(we.readParams(e, this.settings.response_mode));
    if (!r.state) {
      if (s.debug("No state in response"), r.error)
        throw s.warn("Response was error:", r.error), new J(r);
      return { state: void 0, response: r };
    }
    const i = await this.settings.stateStore[t ? "remove" : "get"](r.state);
    if (!i)
      throw s.throw(new Error("No matching state found in storage")), null;
    return { state: await ce.fromStorageString(i), response: r };
  }
  async processSignoutResponse(e) {
    const t = this._logger.create("processSignoutResponse"), { state: s, response: r } = await this.readSignoutResponseState(e, !0);
    return s ? (t.debug("Received state from storage; validating response"), this._validator.validateSignoutResponse(r, s)) : t.debug("No state from storage; skipping response validation"), r;
  }
  clearStaleState() {
    return this._logger.create("clearStaleState"), ce.clearStaleState(this.settings.stateStore, this.settings.staleStateAgeInSeconds);
  }
  async revokeToken(e, t) {
    return this._logger.create("revokeToken"), await this._tokenClient.revoke({
      token: e,
      token_type_hint: t
    });
  }
}, kt = class {
  constructor(e) {
    this._userManager = e, this._logger = new f("SessionMonitor"), this._start = async (t) => {
      const s = t.session_state;
      if (!s)
        return;
      const r = this._logger.create("_start");
      if (t.profile ? (this._sub = t.profile.sub, r.debug("session_state", s, ", sub", this._sub)) : (this._sub = void 0, r.debug("session_state", s, ", anonymous user")), this._checkSessionIFrame) {
        this._checkSessionIFrame.start(s);
        return;
      }
      try {
        const i = await this._userManager.metadataService.getCheckSessionIframe();
        if (i) {
          r.debug("initializing check session iframe");
          const o = this._userManager.settings.client_id, n = this._userManager.settings.checkSessionIntervalInSeconds, d = this._userManager.settings.stopCheckSessionOnError, l = new at(this._callback, o, i, n, d);
          await l.load(), this._checkSessionIFrame = l, l.start(s);
        } else
          r.warn("no check session iframe found in the metadata");
      } catch (i) {
        r.error("Error from getCheckSessionIframe:", i instanceof Error ? i.message : i);
      }
    }, this._stop = () => {
      const t = this._logger.create("_stop");
      if (this._sub = void 0, this._checkSessionIFrame && this._checkSessionIFrame.stop(), this._userManager.settings.monitorAnonymousSession) {
        const s = setInterval(async () => {
          clearInterval(s);
          try {
            const r = await this._userManager.querySessionStatus();
            if (r) {
              const i = {
                session_state: r.session_state,
                profile: r.sub ? {
                  sub: r.sub
                } : null
              };
              this._start(i);
            }
          } catch (r) {
            t.error("error from querySessionStatus", r instanceof Error ? r.message : r);
          }
        }, 1e3);
      }
    }, this._callback = async () => {
      const t = this._logger.create("_callback");
      try {
        const s = await this._userManager.querySessionStatus();
        let r = !0;
        s && this._checkSessionIFrame ? s.sub === this._sub ? (r = !1, this._checkSessionIFrame.start(s.session_state), t.debug("same sub still logged in at OP, session state has changed, restarting check session iframe; session_state", s.session_state), await this._userManager.events._raiseUserSessionChanged()) : t.debug("different subject signed into OP", s.sub) : t.debug("subject no longer signed into OP"), r ? this._sub ? await this._userManager.events._raiseUserSignedOut() : await this._userManager.events._raiseUserSignedIn() : t.debug("no change in session detected, no event to raise");
      } catch (s) {
        this._sub && (t.debug("Error calling queryCurrentSigninSession; raising signed out event", s), await this._userManager.events._raiseUserSignedOut());
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
        const s = {
          session_state: t.session_state,
          profile: t.sub ? {
            sub: t.sub
          } : null
        };
        this._start(s);
      }
    }
  }
}, _e = class Je {
  constructor(t) {
    var s;
    this.id_token = t.id_token, this.session_state = (s = t.session_state) != null ? s : null, this.access_token = t.access_token, this.refresh_token = t.refresh_token, this.token_type = t.token_type, this.scope = t.scope, this.profile = t.profile, this.expires_at = t.expires_at, this.state = t.userState, this.url_state = t.url_state;
  }
  /** Computed number of seconds the access token has remaining. */
  get expires_in() {
    if (this.expires_at !== void 0)
      return this.expires_at - $.getEpochTime();
  }
  set expires_in(t) {
    t !== void 0 && (this.expires_at = Math.floor(t) + $.getEpochTime());
  }
  /** Computed value indicating if the access token is expired. */
  get expired() {
    const t = this.expires_in;
    if (t !== void 0)
      return t <= 0;
  }
  /** Array representing the parsed values from the `scope`. */
  get scopes() {
    var t, s;
    return (s = (t = this.scope) == null ? void 0 : t.split(" ")) != null ? s : [];
  }
  toStorageString() {
    return new f("User").create("toStorageString"), JSON.stringify({
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
    return f.createStatic("User", "fromStorageString"), new Je(JSON.parse(t));
  }
}, Ce = "oidc-client", Fe = class {
  constructor() {
    this._abort = new W("Window navigation aborted"), this._disposeHandlers = /* @__PURE__ */ new Set(), this._window = null;
  }
  async navigate(e) {
    const t = this._logger.create("navigate");
    if (!this._window)
      throw new Error("Attempted to navigate on a disposed window");
    t.debug("setting URL in window"), this._window.location.replace(e.url);
    const { url: s, keepOpen: r } = await new Promise((i, o) => {
      const n = (l) => {
        var a;
        const u = l.data, g = (a = e.scriptOrigin) != null ? a : window.location.origin;
        if (!(l.origin !== g || u?.source !== Ce)) {
          try {
            const h = we.readParams(u.url, e.response_mode).get("state");
            if (h || t.warn("no state found in response url"), l.source !== this._window && h !== e.state)
              return;
          } catch {
            this._dispose(), o(new Error("Invalid response from window"));
          }
          i(u);
        }
      };
      window.addEventListener("message", n, !1), this._disposeHandlers.add(() => window.removeEventListener("message", n, !1));
      const d = new BroadcastChannel(`oidc-client-popup-${e.state}`);
      d.addEventListener("message", n, !1), this._disposeHandlers.add(() => d.close()), this._disposeHandlers.add(this._abort.addHandler((l) => {
        this._dispose(), o(l);
      }));
    });
    return t.debug("got response from window"), this._dispose(), r || this.close(), { url: s };
  }
  _dispose() {
    this._logger.create("_dispose");
    for (const e of this._disposeHandlers)
      e();
    this._disposeHandlers.clear();
  }
  static _notifyParent(e, t, s = !1, r = window.location.origin) {
    const i = {
      source: Ce,
      url: t,
      keepOpen: s
    }, o = new f("_notifyParent");
    if (e)
      o.debug("With parent. Using parent.postMessage."), e.postMessage(i, r);
    else {
      o.debug("No parent. Using BroadcastChannel.");
      const n = new URL(t).searchParams.get("state");
      if (!n)
        throw new Error("No parent and no state in URL. Can't complete notification.");
      const d = new BroadcastChannel(`oidc-client-popup-${n}`);
      d.postMessage(i), d.close();
    }
  }
}, Ke = {
  location: !1,
  toolbar: !1,
  height: 640,
  closePopupWindowAfterInSeconds: -1
}, ze = "_blank", Et = 60, Rt = 2, Be = 10, Tt = class extends ve {
  constructor(e) {
    const {
      popup_redirect_uri: t = e.redirect_uri,
      popup_post_logout_redirect_uri: s = e.post_logout_redirect_uri,
      popupWindowFeatures: r = Ke,
      popupWindowTarget: i = ze,
      redirectMethod: o = "assign",
      redirectTarget: n = "self",
      iframeNotifyParentOrigin: d = e.iframeNotifyParentOrigin,
      iframeScriptOrigin: l = e.iframeScriptOrigin,
      requestTimeoutInSeconds: a,
      silent_redirect_uri: u = e.redirect_uri,
      silentRequestTimeoutInSeconds: g,
      automaticSilentRenew: h = !0,
      validateSubOnSilentRenew: m = !0,
      includeIdTokenInSilentRenew: C = !1,
      monitorSession: T = !1,
      monitorAnonymousSession: p = !1,
      checkSessionIntervalInSeconds: S = Rt,
      query_status_response_type: y = "code",
      stopCheckSessionOnError: P = !0,
      revokeTokenTypes: I = ["access_token", "refresh_token"],
      revokeTokensOnSignout: U = !1,
      includeIdTokenInSilentSignout: v = !1,
      accessTokenExpiringNotificationTimeInSeconds: O = Et,
      userStore: x
    } = e;
    if (super(e), this.popup_redirect_uri = t, this.popup_post_logout_redirect_uri = s, this.popupWindowFeatures = r, this.popupWindowTarget = i, this.redirectMethod = o, this.redirectTarget = n, this.iframeNotifyParentOrigin = d, this.iframeScriptOrigin = l, this.silent_redirect_uri = u, this.silentRequestTimeoutInSeconds = g || a || Be, this.automaticSilentRenew = h, this.validateSubOnSilentRenew = m, this.includeIdTokenInSilentRenew = C, this.monitorSession = T, this.monitorAnonymousSession = p, this.checkSessionIntervalInSeconds = S, this.stopCheckSessionOnError = P, this.query_status_response_type = y, this.revokeTokenTypes = I, this.revokeTokensOnSignout = U, this.includeIdTokenInSilentSignout = v, this.accessTokenExpiringNotificationTimeInSeconds = O, x)
      this.userStore = x;
    else {
      const E = typeof window < "u" ? window.sessionStorage : new qe();
      this.userStore = new Me({ store: E });
    }
  }
}, Ue = class Ve extends Fe {
  constructor({
    silentRequestTimeoutInSeconds: t = Be
  }) {
    super(), this._logger = new f("IFrameWindow"), this._timeoutInSeconds = t, this._frame = Ve.createHiddenIframe(), this._window = this._frame.contentWindow;
  }
  static createHiddenIframe() {
    const t = window.document.createElement("iframe");
    return t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-1000px", t.style.top = "0", t.width = "0", t.height = "0", window.document.body.appendChild(t), t;
  }
  async navigate(t) {
    this._logger.debug("navigate: Using timeout of:", this._timeoutInSeconds);
    const s = setTimeout(() => void this._abort.raise(new be("IFrame timed out without a response")), this._timeoutInSeconds * 1e3);
    return this._disposeHandlers.add(() => clearTimeout(s)), await super.navigate(t);
  }
  close() {
    var t;
    this._frame && (this._frame.parentNode && (this._frame.addEventListener("load", (s) => {
      var r;
      const i = s.target;
      (r = i.parentNode) == null || r.removeChild(i), this._abort.raise(new Error("IFrame removed from DOM"));
    }, !0), (t = this._frame.contentWindow) == null || t.location.replace("about:blank")), this._frame = null), this._window = null;
  }
  static notifyParent(t, s) {
    return super._notifyParent(window.parent, t, !1, s);
  }
}, Pt = class {
  constructor(e) {
    this._settings = e, this._logger = new f("IFrameNavigator");
  }
  async prepare({
    silentRequestTimeoutInSeconds: e = this._settings.silentRequestTimeoutInSeconds
  }) {
    return new Ue({ silentRequestTimeoutInSeconds: e });
  }
  async callback(e) {
    this._logger.create("callback"), Ue.notifyParent(e, this._settings.iframeNotifyParentOrigin);
  }
}, It = 500, xt = 1e3, Ae = class extends Fe {
  constructor({
    popupWindowTarget: e = ze,
    popupWindowFeatures: t = {},
    popupSignal: s
  }) {
    super(), this._logger = new f("PopupWindow");
    const r = xe.center({ ...Ke, ...t });
    this._window = window.open(void 0, e, xe.serialize(r)), s && s.addEventListener("abort", () => {
      var i;
      this._abort.raise(new Error((i = s.reason) != null ? i : "Popup aborted"));
    }), t.closePopupWindowAfterInSeconds && t.closePopupWindowAfterInSeconds > 0 && setTimeout(() => {
      if (!this._window || typeof this._window.closed != "boolean" || this._window.closed) {
        this._abort.raise(new Error("Popup blocked by user"));
        return;
      }
      this.close();
    }, t.closePopupWindowAfterInSeconds * xt);
  }
  async navigate(e) {
    var t;
    (t = this._window) == null || t.focus();
    const s = setInterval(() => {
      (!this._window || this._window.closed) && (this._logger.debug("Popup closed by user or isolated by redirect"), r(), this._disposeHandlers.delete(r));
    }, It), r = () => clearInterval(s);
    return this._disposeHandlers.add(r), await super.navigate(e);
  }
  close() {
    this._window && (this._window.closed || (this._window.close(), this._abort.raise(new Error("Popup closed")))), this._window = null;
  }
  static notifyOpener(e, t) {
    super._notifyParent(window.opener, e, t), !t && !window.opener && window.close();
  }
}, Ct = class {
  constructor(e) {
    this._settings = e, this._logger = new f("PopupNavigator");
  }
  async prepare({
    popupWindowFeatures: e = this._settings.popupWindowFeatures,
    popupWindowTarget: t = this._settings.popupWindowTarget,
    popupSignal: s
  }) {
    return new Ae({ popupWindowFeatures: e, popupWindowTarget: t, popupSignal: s });
  }
  async callback(e, { keepOpen: t = !1 }) {
    this._logger.create("callback"), Ae.notifyOpener(e, t);
  }
}, Ut = class {
  constructor(e) {
    this._settings = e, this._logger = new f("RedirectNavigator");
  }
  async prepare({
    redirectMethod: e = this._settings.redirectMethod,
    redirectTarget: t = this._settings.redirectTarget
  }) {
    var s;
    this._logger.create("prepare");
    let r = window.self;
    t === "top" && (r = (s = window.top) != null ? s : window.self);
    const i = r.location[e].bind(r.location);
    let o;
    return {
      navigate: async (n) => {
        this._logger.create("navigate");
        const d = new Promise((l, a) => {
          o = a;
        });
        return i(n.url), await d;
      },
      close: () => {
        this._logger.create("close"), o?.(new Error("Redirect aborted")), r.stop();
      }
    };
  }
  async callback() {
  }
}, At = class extends ot {
  constructor(e) {
    super({ expiringNotificationTimeInSeconds: e.accessTokenExpiringNotificationTimeInSeconds }), this._logger = new f("UserManagerEvents"), this._userLoaded = new W("User loaded"), this._userUnloaded = new W("User unloaded"), this._silentRenewError = new W("Silent renew error"), this._userSignedIn = new W("User signed in"), this._userSignedOut = new W("User signed out"), this._userSessionChanged = new W("User session changed");
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
}, Ot = class {
  constructor(e) {
    this._userManager = e, this._logger = new f("SilentRenewService"), this._isStarted = !1, this._retryTimer = new $("Retry Silent Renew"), this._tokenExpiring = async () => {
      const t = this._logger.create("_tokenExpiring");
      try {
        await this._userManager.signinSilent(), t.debug("silent token renewal successful");
      } catch (s) {
        if (s instanceof be) {
          t.warn("ErrorTimeout from signinSilent:", s, "retry in 5s"), this._retryTimer.init(5);
          return;
        }
        t.error("Error from signinSilent:", s), await this._userManager.events._raiseSilentRenewError(s);
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
}, Nt = class {
  constructor(e) {
    this.refresh_token = e.refresh_token, this.id_token = e.id_token, this.session_state = e.session_state, this.scope = e.scope, this.profile = e.profile, this.data = e.state;
  }
}, jt = class {
  constructor(e, t, s, r) {
    this._logger = new f("UserManager"), this.settings = new Tt(e), this._client = new bt(e), this._redirectNavigator = t ?? new Ut(this.settings), this._popupNavigator = s ?? new Ct(this.settings), this._iframeNavigator = r ?? new Pt(this.settings), this._events = new At(this.settings), this._silentRenewService = new Ot(this), this.settings.automaticSilentRenew && this.startSilentRenew(), this._sessionMonitor = null, this.settings.monitorSession && (this._sessionMonitor = new kt(this));
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
    const t = this._logger.create("getUser"), s = await this._loadUser();
    return s ? (t.info("user loaded"), await this._events.load(s, e), s) : (t.info("user not found in storage"), null);
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
      redirectMethod: s,
      ...r
    } = e;
    let i;
    (t = this.settings.dpop) != null && t.bind_authorization_code && (i = await this.generateDPoPJkt(this.settings.dpop));
    const o = await this._redirectNavigator.prepare({ redirectMethod: s });
    await this._signinStart({
      request_type: "si:r",
      dpopJkt: i,
      ...r
    }, o);
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
    const t = this._logger.create("signinRedirectCallback"), s = await this._signinEnd(e);
    return s.profile && s.profile.sub ? t.info("success, signed in subject", s.profile.sub) : t.info("no subject"), s;
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
    skipUserInfo: s = !1
  }) {
    const r = this._logger.create("signinResourceOwnerCredential"), i = await this._client.processResourceOwnerPasswordCredentials({
      username: e,
      password: t,
      skipUserInfo: s,
      extraTokenParams: this.settings.extraTokenParams
    });
    r.debug("got signin response");
    const o = await this._buildUser(i);
    return o.profile && o.profile.sub ? r.info("success, signed in subject", o.profile.sub) : r.info("no subject"), o;
  }
  /**
   * Trigger a request (via a popup window) to the authorization endpoint.
   *
   * @returns A promise containing the authenticated `User`.
   * @throws `Error` In cases of wrong authentication.
   */
  async signinPopup(e = {}) {
    var t;
    const s = this._logger.create("signinPopup");
    let r;
    (t = this.settings.dpop) != null && t.bind_authorization_code && (r = await this.generateDPoPJkt(this.settings.dpop));
    const {
      popupWindowFeatures: i,
      popupWindowTarget: o,
      popupSignal: n,
      ...d
    } = e, l = this.settings.popup_redirect_uri;
    l || s.throw(new Error("No popup_redirect_uri configured"));
    const a = await this._popupNavigator.prepare({ popupWindowFeatures: i, popupWindowTarget: o, popupSignal: n }), u = await this._signin({
      request_type: "si:p",
      redirect_uri: l,
      display: "popup",
      dpopJkt: r,
      ...d
    }, a);
    return u && (u.profile && u.profile.sub ? s.info("success, signed in subject", u.profile.sub) : s.info("no subject")), u;
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
    const s = this._logger.create("signinPopupCallback");
    await this._popupNavigator.callback(e, { keepOpen: t }), s.info("success");
  }
  /**
   * Trigger a silent request (via refresh token or an iframe) to the authorization endpoint.
   *
   * @returns A promise that contains the authenticated `User`.
   */
  async signinSilent(e = {}) {
    var t, s;
    const r = this._logger.create("signinSilent"), {
      silentRequestTimeoutInSeconds: i,
      ...o
    } = e;
    let n = await this._loadUser();
    if (n?.refresh_token) {
      r.debug("using refresh token");
      const g = new Nt(n);
      return await this._useRefreshToken({
        state: g,
        redirect_uri: o.redirect_uri,
        resource: o.resource,
        extraTokenParams: o.extraTokenParams,
        timeoutInSeconds: i
      });
    }
    let d;
    (t = this.settings.dpop) != null && t.bind_authorization_code && (d = await this.generateDPoPJkt(this.settings.dpop));
    const l = this.settings.silent_redirect_uri;
    l || r.throw(new Error("No silent_redirect_uri configured"));
    let a;
    n && this.settings.validateSubOnSilentRenew && (r.debug("subject prior to silent renew:", n.profile.sub), a = n.profile.sub);
    const u = await this._iframeNavigator.prepare({ silentRequestTimeoutInSeconds: i });
    return n = await this._signin({
      request_type: "si:s",
      redirect_uri: l,
      prompt: "none",
      id_token_hint: this.settings.includeIdTokenInSilentRenew ? n?.id_token : void 0,
      dpopJkt: d,
      ...o
    }, u, a), n && ((s = n.profile) != null && s.sub ? r.info("success, signed in subject", n.profile.sub) : r.info("no subject")), n;
  }
  async _useRefreshToken(e) {
    const t = await this._client.useRefreshToken({
      timeoutInSeconds: this.settings.silentRequestTimeoutInSeconds,
      ...e
    }), s = new _e({ ...e.state, ...t });
    return await this.storeUser(s), await this._events.load(s), s;
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
    const { state: s } = await this._client.readSignoutResponseState(e);
    if (s)
      switch (s.request_type) {
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
      silentRequestTimeoutInSeconds: s,
      ...r
    } = e, i = this.settings.silent_redirect_uri;
    i || t.throw(new Error("No silent_redirect_uri configured"));
    const o = await this._loadUser(), n = await this._iframeNavigator.prepare({ silentRequestTimeoutInSeconds: s }), d = await this._signinStart({
      request_type: "si:s",
      // this acts like a signin silent
      redirect_uri: i,
      prompt: "none",
      id_token_hint: this.settings.includeIdTokenInSilentRenew ? o?.id_token : void 0,
      response_type: this.settings.query_status_response_type,
      scope: "openid",
      skipUserInfo: !0,
      ...r
    }, n);
    try {
      const l = {}, a = await this._client.processSigninResponse(d.url, l);
      return t.debug("got signin response"), a.session_state && a.profile.sub ? (t.info("success for subject", a.profile.sub), {
        session_state: a.session_state,
        sub: a.profile.sub
      }) : (t.info("success, user not authenticated"), null);
    } catch (l) {
      if (this.settings.monitorAnonymousSession && l instanceof J)
        switch (l.error) {
          case "login_required":
          case "consent_required":
          case "interaction_required":
          case "account_selection_required":
            return t.info("success for anonymous user"), {
              session_state: l.session_state
            };
        }
      throw l;
    }
  }
  async _signin(e, t, s) {
    const r = await this._signinStart(e, t);
    return await this._signinEnd(r.url, s);
  }
  async _signinStart(e, t) {
    const s = this._logger.create("_signinStart");
    try {
      const r = await this._client.createSigninRequest(e);
      return s.debug("got signin request"), await t.navigate({
        url: r.url,
        state: r.state.id,
        response_mode: r.state.response_mode,
        scriptOrigin: this.settings.iframeScriptOrigin
      });
    } catch (r) {
      throw s.debug("error after preparing navigator, closing navigator window"), t.close(), r;
    }
  }
  async _signinEnd(e, t) {
    const s = this._logger.create("_signinEnd"), r = {}, i = await this._client.processSigninResponse(e, r);
    return s.debug("got signin response"), await this._buildUser(i, t);
  }
  async _buildUser(e, t) {
    const s = this._logger.create("_buildUser"), r = new _e(e);
    if (t) {
      if (t !== r.profile.sub)
        throw s.debug("current user does not match user returned from signin. sub from signin:", r.profile.sub), new J({ ...e, error: "login_required" });
      s.debug("current user matches user returned from signin");
    }
    return await this.storeUser(r), s.debug("user stored"), await this._events.load(r), r;
  }
  /**
   * Trigger a redirect of the current window to the end session endpoint.
   *
   * @returns A promise
   */
  async signoutRedirect(e = {}) {
    const t = this._logger.create("signoutRedirect"), {
      redirectMethod: s,
      ...r
    } = e, i = await this._redirectNavigator.prepare({ redirectMethod: s });
    await this._signoutStart({
      request_type: "so:r",
      post_logout_redirect_uri: this.settings.post_logout_redirect_uri,
      ...r
    }, i), t.info("success");
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
    const t = this._logger.create("signoutRedirectCallback"), s = await this._signoutEnd(e);
    return t.info("success"), s;
  }
  /**
   * Trigger a redirect of a popup window to the end session endpoint.
   *
   * @returns A promise
   */
  async signoutPopup(e = {}) {
    const t = this._logger.create("signoutPopup"), {
      popupWindowFeatures: s,
      popupWindowTarget: r,
      popupSignal: i,
      ...o
    } = e, n = this.settings.popup_post_logout_redirect_uri, d = await this._popupNavigator.prepare({ popupWindowFeatures: s, popupWindowTarget: r, popupSignal: i });
    await this._signout({
      request_type: "so:p",
      post_logout_redirect_uri: n,
      // we're putting a dummy entry in here because we
      // need a unique id from the state for notification
      // to the parent window, which is necessary if we
      // plan to return back to the client after signout
      // and so we can close the popup after signout
      state: n == null ? void 0 : {},
      ...o
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
    const s = this._logger.create("signoutPopupCallback");
    await this._popupNavigator.callback(e, { keepOpen: t }), s.info("success");
  }
  async _signout(e, t) {
    const s = await this._signoutStart(e, t);
    return await this._signoutEnd(s.url);
  }
  async _signoutStart(e = {}, t) {
    var s;
    const r = this._logger.create("_signoutStart");
    try {
      const i = await this._loadUser();
      r.debug("loaded current user from storage"), this.settings.revokeTokensOnSignout && await this._revokeInternal(i);
      const o = e.id_token_hint || i && i.id_token;
      o && (r.debug("setting id_token_hint in signout request"), e.id_token_hint = o), await this.removeUser(), r.debug("user removed, creating signout request");
      const n = await this._client.createSignoutRequest(e);
      return r.debug("got signout request"), await t.navigate({
        url: n.url,
        state: (s = n.state) == null ? void 0 : s.id,
        scriptOrigin: this.settings.iframeScriptOrigin
      });
    } catch (i) {
      throw r.debug("error after preparing navigator, closing navigator window"), t.close(), i;
    }
  }
  async _signoutEnd(e) {
    const t = this._logger.create("_signoutEnd"), s = await this._client.processSignoutResponse(e);
    return t.debug("got signout response"), s;
  }
  /**
   * Trigger a silent request (via an iframe) to the end session endpoint.
   *
   * @returns A promise
   */
  async signoutSilent(e = {}) {
    var t;
    const s = this._logger.create("signoutSilent"), {
      silentRequestTimeoutInSeconds: r,
      ...i
    } = e, o = this.settings.includeIdTokenInSilentSignout ? (t = await this._loadUser()) == null ? void 0 : t.id_token : void 0, n = this.settings.popup_post_logout_redirect_uri, d = await this._iframeNavigator.prepare({ silentRequestTimeoutInSeconds: r });
    await this._signout({
      request_type: "so:s",
      post_logout_redirect_uri: n,
      id_token_hint: o,
      ...i
    }, d), s.info("success");
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
    const s = this._logger.create("_revokeInternal");
    if (!e) return;
    const r = t.filter((i) => typeof e[i] == "string");
    if (!r.length) {
      s.debug("no need to revoke due to no token(s)");
      return;
    }
    for (const i of r)
      await this._client.revokeToken(
        e[i],
        i
      ), s.info(`${i} revoked successfully`), i !== "access_token" && (e[i] = null);
    await this.storeUser(e), s.debug("user stored"), await this._events.load(e);
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
    return t ? (e.debug("user storageString loaded"), _e.fromStorageString(t)) : (e.debug("no user storageString"), null);
  }
  async storeUser(e) {
    const t = this._logger.create("storeUser");
    if (e) {
      t.debug("storing user");
      const s = e.toStorageString();
      await this.settings.userStore.set(this._userStoreKey, s);
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
  async dpopProof(e, t, s, r) {
    var i, o;
    const n = await ((o = (i = this.settings.dpop) == null ? void 0 : i.store) == null ? void 0 : o.get(this.settings.client_id));
    if (n)
      return await R.generateDPoPProof({
        url: e,
        accessToken: t?.access_token,
        httpMethod: s,
        keyPair: n.keys,
        nonce: r
      });
  }
  async generateDPoPJkt(e) {
    let t = await e.store.get(this.settings.client_id);
    if (!t) {
      const s = await R.generateDPoPKeys();
      t = new We(s), await e.store.set(this.settings.client_id, t);
    }
    return await R.generateDPoPJkt(t.keys);
  }
}, Ee = A.createContext(void 0);
Ee.displayName = "AuthContext";
var qt = {
  isLoading: !0,
  isAuthenticated: !1
}, Mt = (e, t) => {
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
      const s = t.error;
      return s.toString = () => `${s.name}: ${s.message}`, {
        ...e,
        isLoading: !1,
        error: s
      };
    }
    default: {
      const s = new TypeError(`unknown type ${t.type}`), r = {
        name: s.name,
        message: s.message,
        innerError: s,
        stack: s.stack,
        source: "unknown"
      };
      return r.toString = () => `${r.name}: ${r.message}`, {
        ...e,
        isLoading: !1,
        error: r
      };
    }
  }
}, Dt = (e = window.location) => {
  let t = new URLSearchParams(e.search);
  return !!((t.get("code") || t.get("error")) && t.get("state") || (t = new URLSearchParams(e.hash.replace("#", "?")), (t.get("code") || t.get("error")) && t.get("state")));
}, $t = Re("signinCallback", "Sign-in failed"), Lt = Re("signoutCallback", "Sign-out failed"), Ht = Re("renewSilent", "Renew silent failed");
function Ye(e, t) {
  return {
    name: pe(e, "name", () => "Error"),
    message: pe(e, "message", () => t),
    stack: pe(e, "stack", () => new Error().stack),
    innerError: e
  };
}
function Re(e, t) {
  return (s) => ({
    ...Ye(s, t),
    source: e
  });
}
function pe(e, t, s) {
  if (e && typeof e == "object") {
    const r = e[t];
    if (typeof r == "string")
      return r;
  }
  return s();
}
var Wt = [
  "clearStaleState",
  "querySessionStatus",
  "revokeTokens",
  "startSilentRenew",
  "stopSilentRenew"
], Jt = [
  "signinPopup",
  "signinSilent",
  "signinRedirect",
  "signinResourceOwnerCredentials",
  "signoutPopup",
  "signoutRedirect",
  "signoutSilent"
], Oe = (e) => () => {
  throw new Error(
    `UserManager#${e} was called from an unsupported context. If this is a server-rendered page, defer this call with useEffect() or pass a custom UserManager implementation.`
  );
}, Ne = typeof window > "u" ? null : jt, Ft = (e) => {
  const {
    children: t,
    onSigninCallback: s,
    skipSigninCallback: r,
    matchSignoutCallback: i,
    onSignoutCallback: o,
    onRemoveUser: n,
    userManager: d = null,
    ...l
  } = e, [a] = A.useState(() => d ?? (Ne ? new Ne(l) : { settings: l })), [u, g] = A.useReducer(Mt, qt), h = A.useMemo(
    () => Object.assign(
      {
        settings: a.settings,
        events: a.events
      },
      Object.fromEntries(
        Wt.map((p) => {
          var S, y;
          return [
            p,
            (y = (S = a[p]) == null ? void 0 : S.bind(a)) != null ? y : Oe(p)
          ];
        })
      ),
      Object.fromEntries(
        Jt.map((p) => [
          p,
          a[p] ? async (S) => {
            g({
              type: "NAVIGATOR_INIT",
              method: p
            });
            try {
              return await a[p](S);
            } catch (y) {
              return g({
                type: "ERROR",
                error: {
                  ...Ye(y, `Unknown error while executing ${p}(...).`),
                  source: p,
                  args: S
                }
              }), null;
            } finally {
              g({ type: "NAVIGATOR_CLOSE" });
            }
          } : Oe(p)
        ])
      )
    ),
    [a]
  ), m = A.useRef(!1);
  A.useEffect(() => {
    !a || m.current || (m.current = !0, (async () => {
      try {
        let p = null;
        Dt() && !r && (p = await a.signinCallback(), s && await s(p)), p = p || await a.getUser(), g({ type: "INITIALISED", user: p });
      } catch (p) {
        g({
          type: "ERROR",
          error: $t(p)
        });
      }
      try {
        if (i && i(a.settings)) {
          const p = await a.signoutCallback();
          o && await o(p);
        }
      } catch (p) {
        g({
          type: "ERROR",
          error: Lt(p)
        });
      }
    })());
  }, [a, r, s, o, i]), A.useEffect(() => {
    if (!a) return;
    const p = (I) => {
      g({ type: "USER_LOADED", user: I });
    };
    a.events.addUserLoaded(p);
    const S = () => {
      g({ type: "USER_UNLOADED" });
    };
    a.events.addUserUnloaded(S);
    const y = () => {
      g({ type: "USER_SIGNED_OUT" });
    };
    a.events.addUserSignedOut(y);
    const P = (I) => {
      g({
        type: "ERROR",
        error: Ht(I)
      });
    };
    return a.events.addSilentRenewError(P), () => {
      a.events.removeUserLoaded(p), a.events.removeUserUnloaded(S), a.events.removeUserSignedOut(y), a.events.removeSilentRenewError(P);
    };
  }, [a]);
  const C = A.useCallback(async () => {
    await a.removeUser(), n && await n();
  }, [a, n]), T = A.useMemo(() => ({
    ...u,
    ...h,
    removeUser: C
  }), [u, h, C]);
  return /* @__PURE__ */ A.createElement(Ee.Provider, { value: T }, t);
}, Kt = () => {
  const e = A.useContext(Ee);
  return e || console.warn("AuthProvider context is undefined, please verify you are calling useAuth() as child of a <AuthProvider> component."), e;
};
const zt = ({ children: e, Login: t, cognitoGroupName: s }) => {
  const r = Kt(), i = r.user?.profile;
  return r.isLoading ? /* @__PURE__ */ H.jsx("div", { children: "Loading..." }) : r.error ? /* @__PURE__ */ H.jsxs("div", { children: [
    "Encountering error... ",
    r.error.message
  ] }) : r.isAuthenticated ? s !== void 0 && !i?.["cognito:groups"]?.includes(s) ? /* @__PURE__ */ H.jsxs("div", { children: [
    /* @__PURE__ */ H.jsx("p", { children: "No project permission" }),
    /* @__PURE__ */ H.jsx("button", { onClick: () => r.removeUser(), children: "Sign out" })
  ] }) : e : /* @__PURE__ */ H.jsx(t, {});
}, Yt = ({
  children: e,
  Login: t,
  cognitoGroupName: s,
  ...r
}) => /* @__PURE__ */ H.jsx(Ft, { ...et, ...r, children: /* @__PURE__ */ H.jsx(zt, { Login: t, cognitoGroupName: s, children: e }) });
export {
  Yt as AiResearchIdpProvider,
  Vt as signOutRedirect,
  Kt as useAuth
};
