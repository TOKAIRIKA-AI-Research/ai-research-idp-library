import k from "react";
class D extends Error {
}
D.prototype.name = "InvalidTokenError";
function Ae(e) {
  return decodeURIComponent(atob(e).replace(/(.)/g, (t, s) => {
    let i = s.charCodeAt(0).toString(16).toUpperCase();
    return i.length < 2 && (i = "0" + i), "%" + i;
  }));
}
function Oe(e) {
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
    return Ae(t);
  } catch {
    return atob(t);
  }
}
function qe(e, t) {
  if (typeof e != "string")
    throw new D("Invalid token specified: must be a string");
  t || (t = {});
  const s = t.header === !0 ? 0 : 1, i = e.split(".")[s];
  if (typeof i != "string")
    throw new D(`Invalid token specified: missing part #${s + 1}`);
  let r;
  try {
    r = Oe(i);
  } catch (o) {
    throw new D(`Invalid token specified: invalid base64 for part #${s + 1} (${o.message})`);
  }
  try {
    return JSON.parse(r);
  } catch (o) {
    throw new D(`Invalid token specified: invalid json for part #${s + 1} (${o.message})`);
  }
}
var Ne = {
  debug: () => {
  },
  info: () => {
  },
  warn: () => {
  },
  error: () => {
  }
}, P, C, $ = /* @__PURE__ */ ((e) => (e[e.NONE = 0] = "NONE", e[e.ERROR = 1] = "ERROR", e[e.WARN = 2] = "WARN", e[e.INFO = 3] = "INFO", e[e.DEBUG = 4] = "DEBUG", e))($ || {});
((e) => {
  function t() {
    P = 3, C = Ne;
  }
  e.reset = t;
  function s(r) {
    if (!(0 <= r && r <= 4))
      throw new Error("Invalid log level");
    P = r;
  }
  e.setLevel = s;
  function i(r) {
    C = r;
  }
  e.setLogger = i;
})($ || ($ = {}));
var u = class I {
  constructor(t) {
    this._name = t;
  }
  /* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
  debug(...t) {
    P >= 4 && C.debug(I._format(this._name, this._method), ...t);
  }
  info(...t) {
    P >= 3 && C.info(I._format(this._name, this._method), ...t);
  }
  warn(...t) {
    P >= 2 && C.warn(I._format(this._name, this._method), ...t);
  }
  error(...t) {
    P >= 1 && C.error(I._format(this._name, this._method), ...t);
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
    const i = new I(`${t}.${s}`);
    return i.debug("begin"), i;
  }
  static _format(t, s) {
    const i = `[${t}]`;
    return s ? `${i} ${s}:` : i;
  }
  /* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
  // helpers for static class methods
  static debug(t, ...s) {
    P >= 4 && C.debug(I._format(t), ...s);
  }
  static info(t, ...s) {
    P >= 3 && C.info(I._format(t), ...s);
  }
  static warn(t, ...s) {
    P >= 2 && C.warn(I._format(t), ...s);
  }
  static error(t, ...s) {
    P >= 1 && C.error(I._format(t), ...s);
  }
  /* eslint-enable @typescript-eslint/no-unsafe-enum-comparison */
};
$.reset();
var L = class {
  // IMPORTANT: doesn't validate the token
  static decode(e) {
    try {
      return qe(e);
    } catch (t) {
      throw u.error("JwtUtils.decode", t), t;
    }
  }
  static async generateSignedJwt(e, t, s) {
    const i = S.encodeBase64Url(new TextEncoder().encode(JSON.stringify(e))), r = S.encodeBase64Url(new TextEncoder().encode(JSON.stringify(t))), o = `${i}.${r}`, n = await window.crypto.subtle.sign(
      {
        name: "ECDSA",
        hash: { name: "SHA-256" }
      },
      s,
      new TextEncoder().encode(o)
    ), l = S.encodeBase64Url(new Uint8Array(n));
    return `${o}.${l}`;
  }
}, Me = "10000000-1000-4000-8000-100000000000", z = (e) => btoa([...new Uint8Array(e)].map((t) => String.fromCharCode(t)).join("")), de = class U {
  static _randomWord() {
    const t = new Uint32Array(1);
    return crypto.getRandomValues(t), t[0];
  }
  /**
   * Generates RFC4122 version 4 guid
   */
  static generateUUIDv4() {
    return Me.replace(
      /[018]/g,
      (s) => (+s ^ U._randomWord() & 15 >> +s / 4).toString(16)
    ).replace(/-/g, "");
  }
  /**
   * PKCE: Generate a code verifier
   */
  static generateCodeVerifier() {
    return U.generateUUIDv4() + U.generateUUIDv4() + U.generateUUIDv4();
  }
  /**
   * PKCE: Generate a code challenge
   */
  static async generateCodeChallenge(t) {
    if (!crypto.subtle)
      throw new Error("Crypto.subtle is available only in secure contexts (HTTPS).");
    try {
      const i = new TextEncoder().encode(t), r = await crypto.subtle.digest("SHA-256", i);
      return z(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    } catch (s) {
      throw u.error("CryptoUtils.generateCodeChallenge", s), s;
    }
  }
  /**
   * Generates a base64-encoded string for a basic auth header
   */
  static generateBasicAuth(t, s) {
    const r = new TextEncoder().encode([t, s].join(":"));
    return z(r);
  }
  /**
   * Generates a hash of a string using a given algorithm
   * @param alg
   * @param message
   */
  static async hash(t, s) {
    const i = new TextEncoder().encode(s), r = await crypto.subtle.digest(t, i);
    return new Uint8Array(r);
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
    const i = await U.hash("SHA-256", JSON.stringify(s));
    return U.encodeBase64Url(i);
  }
  static async generateDPoPProof({
    url: t,
    accessToken: s,
    httpMethod: i,
    keyPair: r,
    nonce: o
  }) {
    let n, l;
    const c = {
      jti: window.crypto.randomUUID(),
      htm: i ?? "GET",
      htu: t,
      iat: Math.floor(Date.now() / 1e3)
    };
    s && (n = await U.hash("SHA-256", s), l = U.encodeBase64Url(n), c.ath = l), o && (c.nonce = o);
    try {
      const a = await crypto.subtle.exportKey("jwk", r.publicKey), d = {
        alg: "ES256",
        typ: "dpop+jwt",
        jwk: {
          crv: a.crv,
          kty: a.kty,
          x: a.x,
          y: a.y
        }
      };
      return await L.generateSignedJwt(d, c, r.privateKey);
    } catch (a) {
      throw a instanceof TypeError ? new Error(`Error exporting dpop public key: ${a.message}`) : a;
    }
  }
  static async generateDPoPJkt(t) {
    try {
      const s = await crypto.subtle.exportKey("jwk", t.publicKey);
      return await U.customCalculateJwkThumbprint(s);
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
de.encodeBase64Url = (e) => z(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
var S = de, q = class {
  constructor(e) {
    this._name = e, this._callbacks = [], this._logger = new u(`Event('${this._name}')`);
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
}, re = class {
  /**
   * Populates a map of window features with a placement centered in front of
   * the current window. If no explicit width is given, a default value is
   * binned into [800, 720, 600, 480, 360] based on the current window's width.
   */
  static center({ ...e }) {
    var t, s, i;
    return e.width == null && (e.width = (t = [800, 720, 600, 480].find((r) => r <= window.outerWidth / 1.618)) != null ? t : 360), (s = e.left) != null || (e.left = Math.max(0, Math.round(window.screenX + (window.outerWidth - e.width) / 2))), e.height != null && ((i = e.top) != null || (e.top = Math.max(0, Math.round(window.screenY + (window.outerHeight - e.height) / 2)))), e;
  }
  static serialize(e) {
    return Object.entries(e).filter(([, t]) => t != null).map(([t, s]) => `${t}=${typeof s != "boolean" ? s : s ? "yes" : "no"}`).join(",");
  }
}, O = class H extends q {
  constructor() {
    super(...arguments), this._logger = new u(`Timer('${this._name}')`), this._timerHandle = null, this._expiration = 0, this._callback = () => {
      const t = this._expiration - H.getEpochTime();
      this._logger.debug("timer completes in", t), this._expiration <= H.getEpochTime() && (this.cancel(), super.raise());
    };
  }
  // get the time
  static getEpochTime() {
    return Math.floor(Date.now() / 1e3);
  }
  init(t) {
    const s = this._logger.create("init");
    t = Math.max(Math.floor(t), 1);
    const i = H.getEpochTime() + t;
    if (this.expiration === i && this._timerHandle) {
      s.debug("skipping since already initialized for expiration at", this.expiration);
      return;
    }
    this.cancel(), s.debug("using duration", t), this._expiration = i;
    const r = Math.min(t, 5);
    this._timerHandle = setInterval(this._callback, r * 1e3);
  }
  get expiration() {
    return this._expiration;
  }
  cancel() {
    this._logger.create("cancel"), this._timerHandle && (clearInterval(this._timerHandle), this._timerHandle = null);
  }
}, B = class {
  static readParams(e, t = "query") {
    if (!e) throw new TypeError("Invalid URL");
    const i = new URL(e, "http://127.0.0.1")[t === "fragment" ? "hash" : "search"];
    return new URLSearchParams(i.slice(1));
  }
}, M = ";", N = class extends Error {
  constructor(e, t) {
    var s, i, r;
    if (super(e.error_description || e.error || ""), this.form = t, this.name = "ErrorResponse", !e.error)
      throw u.error("ErrorResponse", "No error passed"), new Error("No error passed");
    this.error = e.error, this.error_description = (s = e.error_description) != null ? s : null, this.error_uri = (i = e.error_uri) != null ? i : null, this.state = e.userState, this.session_state = (r = e.session_state) != null ? r : null, this.url_state = e.url_state;
  }
}, Y = class extends Error {
  constructor(e) {
    super(e), this.name = "ErrorTimeout";
  }
}, De = class {
  constructor(e) {
    this._logger = new u("AccessTokenEvents"), this._expiringTimer = new O("Access token expiring"), this._expiredTimer = new O("Access token expired"), this._expiringNotificationTimeInSeconds = e.expiringNotificationTimeInSeconds;
  }
  async load(e) {
    const t = this._logger.create("load");
    if (e.access_token && e.expires_in !== void 0) {
      const s = e.expires_in;
      if (t.debug("access token present, remaining duration:", s), s > 0) {
        let r = s - this._expiringNotificationTimeInSeconds;
        r <= 0 && (r = 1), t.debug("registering expiring timer, raising in", r, "seconds"), this._expiringTimer.init(r);
      } else
        t.debug("canceling existing expiring timer because we're past expiration."), this._expiringTimer.cancel();
      const i = s + 1;
      t.debug("registering expired timer, raising in", i, "seconds"), this._expiredTimer.init(i);
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
}, je = class {
  constructor(e, t, s, i, r) {
    this._callback = e, this._client_id = t, this._intervalInSeconds = i, this._stopOnError = r, this._logger = new u("CheckSessionIFrame"), this._timer = null, this._session_state = null, this._message = (n) => {
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
}, ge = class {
  constructor() {
    this._logger = new u("InMemoryWebStorage"), this._data = {};
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
}, V = class extends Error {
  constructor(e, t) {
    super(t), this.name = "ErrorDPoPNonce", this.nonce = e;
  }
}, Z = class {
  constructor(e = [], t = null, s = {}) {
    this._jwtHandler = t, this._extraHeaders = s, this._logger = new u("JsonService"), this._contentTypes = [], this._contentTypes.push(...e, "application/json"), t && this._contentTypes.push("application/jwt");
  }
  async fetchWithTimeout(e, t = {}) {
    const { timeoutInSeconds: s, ...i } = t;
    if (!s)
      return await fetch(e, i);
    const r = new AbortController(), o = setTimeout(() => r.abort(), s * 1e3);
    try {
      return await fetch(e, {
        ...t,
        signal: r.signal
      });
    } catch (n) {
      throw n instanceof DOMException && n.name === "AbortError" ? new Y("Network timed out") : n;
    } finally {
      clearTimeout(o);
    }
  }
  async getJson(e, {
    token: t,
    credentials: s,
    timeoutInSeconds: i
  } = {}) {
    const r = this._logger.create("getJson"), o = {
      Accept: this._contentTypes.join(", ")
    };
    t && (r.debug("token passed, setting Authorization header"), o.Authorization = "Bearer " + t), this._appendExtraHeaders(o);
    let n;
    try {
      r.debug("url:", e), n = await this.fetchWithTimeout(e, { method: "GET", headers: o, timeoutInSeconds: i, credentials: s });
    } catch (a) {
      throw r.error("Network Error"), a;
    }
    r.debug("HTTP response received, status", n.status);
    const l = n.headers.get("Content-Type");
    if (l && !this._contentTypes.find((a) => l.startsWith(a)) && r.throw(new Error(`Invalid response Content-Type: ${l ?? "undefined"}, from URL: ${e}`)), n.ok && this._jwtHandler && l?.startsWith("application/jwt"))
      return await this._jwtHandler(await n.text());
    let c;
    try {
      c = await n.json();
    } catch (a) {
      throw r.error("Error parsing JSON response", a), n.ok ? a : new Error(`${n.statusText} (${n.status})`);
    }
    if (!n.ok)
      throw r.error("Error from server:", c), c.error ? new N(c) : new Error(`${n.statusText} (${n.status}): ${JSON.stringify(c)}`);
    return c;
  }
  async postForm(e, {
    body: t,
    basicAuth: s,
    timeoutInSeconds: i,
    initCredentials: r,
    extraHeaders: o
  }) {
    const n = this._logger.create("postForm"), l = {
      Accept: this._contentTypes.join(", "),
      "Content-Type": "application/x-www-form-urlencoded",
      ...o
    };
    s !== void 0 && (l.Authorization = "Basic " + s), this._appendExtraHeaders(l);
    let c;
    try {
      n.debug("url:", e), c = await this.fetchWithTimeout(e, { method: "POST", headers: l, body: t, timeoutInSeconds: i, credentials: r });
    } catch (_) {
      throw n.error("Network error"), _;
    }
    n.debug("HTTP response received, status", c.status);
    const a = c.headers.get("Content-Type");
    if (a && !this._contentTypes.find((_) => a.startsWith(_)))
      throw new Error(`Invalid response Content-Type: ${a ?? "undefined"}, from URL: ${e}`);
    const d = await c.text();
    let g = {};
    if (d)
      try {
        g = JSON.parse(d);
      } catch (_) {
        throw n.error("Error parsing JSON response", _), c.ok ? _ : new Error(`${c.statusText} (${c.status})`);
      }
    if (!c.ok) {
      if (n.error("Error from server:", g), c.headers.has("dpop-nonce")) {
        const _ = c.headers.get("dpop-nonce");
        throw new V(_, `${JSON.stringify(g)}`);
      }
      throw g.error ? new N(g, t) : new Error(`${c.statusText} (${c.status}): ${JSON.stringify(g)}`);
    }
    return g;
  }
  _appendExtraHeaders(e) {
    const t = this._logger.create("appendExtraHeaders"), s = Object.keys(this._extraHeaders), i = [
      "accept",
      "content-type"
    ], r = [
      "authorization"
    ];
    s.length !== 0 && s.forEach((o) => {
      if (i.includes(o.toLocaleLowerCase())) {
        t.warn("Protected header could not be set", o, i);
        return;
      }
      if (r.includes(o.toLocaleLowerCase()) && Object.keys(e).includes(o)) {
        t.warn("Header could not be overridden", o, r);
        return;
      }
      const n = typeof this._extraHeaders[o] == "function" ? this._extraHeaders[o]() : this._extraHeaders[o];
      n && n !== "" && (e[o] = n);
    });
  }
}, He = class {
  constructor(e) {
    this._settings = e, this._logger = new u("MetadataService"), this._signingKeys = null, this._metadata = null, this._metadataUrl = this._settings.metadataUrl, this._jsonService = new Z(
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
    const s = this._logger.create(`_getMetadataProperty('${e}')`), i = await this.getMetadata();
    if (s.debug("resolved"), i[e] === void 0) {
      if (t === !0) {
        s.warn("Metadata does not contain optional property");
        return;
      }
      s.throw(new Error("Metadata does not contain property " + e));
    }
    return i[e];
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
}, he = class {
  constructor({
    prefix: e = "oidc.",
    store: t = localStorage
  } = {}) {
    this._logger = new u("WebStorageStateStore"), this._store = t, this._prefix = e;
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
      const i = await this._store.key(s);
      i && i.indexOf(this._prefix) === 0 && t.push(i.substr(this._prefix.length));
    }
    return t;
  }
}, $e = "code", Le = "openid", We = "client_secret_post", Je = 900, G = class {
  constructor({
    // metadata related
    authority: e,
    metadataUrl: t,
    metadata: s,
    signingKeys: i,
    metadataSeed: r,
    // client related
    client_id: o,
    client_secret: n,
    response_type: l = $e,
    scope: c = Le,
    redirect_uri: a,
    post_logout_redirect_uri: d,
    client_authentication: g = We,
    // optional protocol
    prompt: _,
    display: f,
    max_age: E,
    ui_locales: x,
    acr_values: h,
    resource: w,
    response_mode: m,
    // behavior flags
    filterProtocolClaims: y = !0,
    loadUserInfo: b = !1,
    requestTimeoutInSeconds: R,
    staleStateAgeInSeconds: p = Je,
    mergeClaimsStrategy: A = { array: "replace" },
    disablePKCE: T = !1,
    // other behavior
    stateStore: v,
    revokeTokenAdditionalContentTypes: j,
    fetchRequestCredentials: se,
    refreshTokenAllowedScope: Re,
    // extra
    extraQueryParams: Te = {},
    extraTokenParams: Ie = {},
    extraHeaders: Ue = {},
    dpop: Pe,
    omitScopeWhenRequesting: Ce = !1
  }) {
    var ie;
    if (this.authority = e, t ? this.metadataUrl = t : (this.metadataUrl = e, e && (this.metadataUrl.endsWith("/") || (this.metadataUrl += "/"), this.metadataUrl += ".well-known/openid-configuration")), this.metadata = s, this.metadataSeed = r, this.signingKeys = i, this.client_id = o, this.client_secret = n, this.response_type = l, this.scope = c, this.redirect_uri = a, this.post_logout_redirect_uri = d, this.client_authentication = g, this.prompt = _, this.display = f, this.max_age = E, this.ui_locales = x, this.acr_values = h, this.resource = w, this.response_mode = m, this.filterProtocolClaims = y ?? !0, this.loadUserInfo = !!b, this.staleStateAgeInSeconds = p, this.mergeClaimsStrategy = A, this.omitScopeWhenRequesting = Ce, this.disablePKCE = !!T, this.revokeTokenAdditionalContentTypes = j, this.fetchRequestCredentials = se || "same-origin", this.requestTimeoutInSeconds = R, v)
      this.stateStore = v;
    else {
      const xe = typeof window < "u" ? window.localStorage : new ge();
      this.stateStore = new he({ store: xe });
    }
    if (this.refreshTokenAllowedScope = Re, this.extraQueryParams = Te, this.extraTokenParams = Ie, this.extraHeaders = Ue, this.dpop = Pe, this.dpop && !((ie = this.dpop) != null && ie.store))
      throw new Error("A DPoPStore is required when dpop is enabled");
  }
}, Ke = class {
  constructor(e, t) {
    this._settings = e, this._metadataService = t, this._logger = new u("UserInfoService"), this._getClaimsFromJwt = async (s) => {
      const i = this._logger.create("_getClaimsFromJwt");
      try {
        const r = L.decode(s);
        return i.debug("JWT decoding successful"), r;
      } catch (r) {
        throw i.error("Error parsing JWT response"), r;
      }
    }, this._jsonService = new Z(
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
    const i = await this._jsonService.getJson(s, {
      token: e,
      credentials: this._settings.fetchRequestCredentials,
      timeoutInSeconds: this._settings.requestTimeoutInSeconds
    });
    return t.debug("got claims", i), i;
  }
}, ue = class {
  constructor(e, t) {
    this._settings = e, this._metadataService = t, this._logger = new u("TokenClient"), this._jsonService = new Z(
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
    client_secret: i = this._settings.client_secret,
    extraHeaders: r,
    ...o
  }) {
    const n = this._logger.create("exchangeCode");
    s || n.throw(new Error("A client_id is required")), t || n.throw(new Error("A redirect_uri is required")), o.code || n.throw(new Error("A code is required"));
    const l = new URLSearchParams({ grant_type: e, redirect_uri: t });
    for (const [g, _] of Object.entries(o))
      _ != null && l.set(g, _);
    let c;
    switch (this._settings.client_authentication) {
      case "client_secret_basic":
        if (i == null)
          throw n.throw(new Error("A client_secret is required")), null;
        c = S.generateBasicAuth(s, i);
        break;
      case "client_secret_post":
        l.append("client_id", s), i && l.append("client_secret", i);
        break;
    }
    const a = await this._metadataService.getTokenEndpoint(!1);
    n.debug("got token endpoint");
    const d = await this._jsonService.postForm(a, {
      body: l,
      basicAuth: c,
      timeoutInSeconds: this._settings.requestTimeoutInSeconds,
      initCredentials: this._settings.fetchRequestCredentials,
      extraHeaders: r
    });
    return n.debug("got response"), d;
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
    scope: i = this._settings.scope,
    ...r
  }) {
    const o = this._logger.create("exchangeCredentials");
    t || o.throw(new Error("A client_id is required"));
    const n = new URLSearchParams({ grant_type: e });
    this._settings.omitScopeWhenRequesting || n.set("scope", i);
    for (const [d, g] of Object.entries(r))
      g != null && n.set(d, g);
    let l;
    switch (this._settings.client_authentication) {
      case "client_secret_basic":
        if (s == null)
          throw o.throw(new Error("A client_secret is required")), null;
        l = S.generateBasicAuth(t, s);
        break;
      case "client_secret_post":
        n.append("client_id", t), s && n.append("client_secret", s);
        break;
    }
    const c = await this._metadataService.getTokenEndpoint(!1);
    o.debug("got token endpoint");
    const a = await this._jsonService.postForm(c, { body: n, basicAuth: l, timeoutInSeconds: this._settings.requestTimeoutInSeconds, initCredentials: this._settings.fetchRequestCredentials });
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
    timeoutInSeconds: i,
    extraHeaders: r,
    ...o
  }) {
    const n = this._logger.create("exchangeRefreshToken");
    t || n.throw(new Error("A client_id is required")), o.refresh_token || n.throw(new Error("A refresh_token is required"));
    const l = new URLSearchParams({ grant_type: e });
    for (const [g, _] of Object.entries(o))
      Array.isArray(_) ? _.forEach((f) => l.append(g, f)) : _ != null && l.set(g, _);
    let c;
    switch (this._settings.client_authentication) {
      case "client_secret_basic":
        if (s == null)
          throw n.throw(new Error("A client_secret is required")), null;
        c = S.generateBasicAuth(t, s);
        break;
      case "client_secret_post":
        l.append("client_id", t), s && l.append("client_secret", s);
        break;
    }
    const a = await this._metadataService.getTokenEndpoint(!1);
    n.debug("got token endpoint");
    const d = await this._jsonService.postForm(a, { body: l, basicAuth: c, timeoutInSeconds: i, initCredentials: this._settings.fetchRequestCredentials, extraHeaders: r });
    return n.debug("got response"), d;
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
    const i = await this._metadataService.getRevocationEndpoint(!1);
    s.debug(`got revocation endpoint, revoking ${(t = e.token_type_hint) != null ? t : "default token type"}`);
    const r = new URLSearchParams();
    for (const [o, n] of Object.entries(e))
      n != null && r.set(o, n);
    r.set("client_id", this._settings.client_id), this._settings.client_secret && r.set("client_secret", this._settings.client_secret), await this._jsonService.postForm(i, { body: r, timeoutInSeconds: this._settings.requestTimeoutInSeconds }), s.debug("got response");
  }
}, Fe = class {
  constructor(e, t, s) {
    this._settings = e, this._metadataService = t, this._claimsService = s, this._logger = new u("ResponseValidator"), this._userInfoService = new Ke(this._settings, this._metadataService), this._tokenClient = new ue(this._settings, this._metadataService);
  }
  async validateSigninResponse(e, t, s) {
    const i = this._logger.create("validateSigninResponse");
    this._processSigninState(e, t), i.debug("state processed"), await this._processCode(e, t, s), i.debug("code processed"), e.isOpenId && this._validateIdTokenAttributes(e), i.debug("tokens validated"), await this._processClaims(e, t?.skipUserInfo, e.isOpenId), i.debug("claims processed");
  }
  async validateCredentialsResponse(e, t) {
    const s = this._logger.create("validateCredentialsResponse"), i = e.isOpenId && !!e.id_token;
    i && this._validateIdTokenAttributes(e), s.debug("tokens validated"), await this._processClaims(e, t, i), s.debug("claims processed");
  }
  async validateRefreshResponse(e, t) {
    var s, i;
    const r = this._logger.create("validateRefreshResponse");
    e.userState = t.data, (s = e.session_state) != null || (e.session_state = t.session_state), (i = e.scope) != null || (e.scope = t.scope), e.isOpenId && e.id_token && (this._validateIdTokenAttributes(e, t.id_token), r.debug("ID Token validated")), e.id_token || (e.id_token = t.id_token, e.profile = t.profile);
    const o = e.isOpenId && !!e.id_token;
    await this._processClaims(e, !1, o), r.debug("claims processed");
  }
  validateSignoutResponse(e, t) {
    const s = this._logger.create("validateSignoutResponse");
    if (t.id !== e.state && s.throw(new Error("State does not match")), s.debug("state validated"), e.userState = t.data, e.error)
      throw s.warn("Response was error", e.error), new N(e);
  }
  _processSigninState(e, t) {
    var s;
    const i = this._logger.create("_processSigninState");
    if (t.id !== e.state && i.throw(new Error("State does not match")), t.client_id || i.throw(new Error("No client_id on state")), t.authority || i.throw(new Error("No authority on state")), this._settings.authority !== t.authority && i.throw(new Error("authority mismatch on settings vs. signin state")), this._settings.client_id && this._settings.client_id !== t.client_id && i.throw(new Error("client_id mismatch on settings vs. signin state")), i.debug("state validated"), e.userState = t.data, e.url_state = t.url_state, (s = e.scope) != null || (e.scope = t.scope), e.error)
      throw i.warn("Response was error", e.error), new N(e);
    t.code_verifier && !e.code && i.throw(new Error("Expected code in response"));
  }
  async _processClaims(e, t = !1, s = !0) {
    const i = this._logger.create("_processClaims");
    if (e.profile = this._claimsService.filterProtocolClaims(e.profile), t || !this._settings.loadUserInfo || !e.access_token) {
      i.debug("not loading user info");
      return;
    }
    i.debug("loading user info");
    const r = await this._userInfoService.getClaims(e.access_token);
    i.debug("user info claims received from user info endpoint"), s && r.sub !== e.profile.sub && i.throw(new Error("subject from UserInfo response does not match subject in ID Token")), e.profile = this._claimsService.mergeClaims(e.profile, this._claimsService.filterProtocolClaims(r)), i.debug("user info claims received, updated profile:", e.profile);
  }
  async _processCode(e, t, s) {
    const i = this._logger.create("_processCode");
    if (e.code) {
      i.debug("Validating code");
      const r = await this._tokenClient.exchangeCode({
        client_id: t.client_id,
        client_secret: t.client_secret,
        code: e.code,
        redirect_uri: t.redirect_uri,
        code_verifier: t.code_verifier,
        extraHeaders: s,
        ...t.extraTokenParams
      });
      Object.assign(e, r);
    } else
      i.debug("No code to process");
  }
  _validateIdTokenAttributes(e, t) {
    var s;
    const i = this._logger.create("_validateIdTokenAttributes");
    i.debug("decoding ID Token JWT");
    const r = L.decode((s = e.id_token) != null ? s : "");
    if (r.sub || i.throw(new Error("ID Token is missing a subject claim")), t) {
      const o = L.decode(t);
      r.sub !== o.sub && i.throw(new Error("sub in id_token does not match current sub")), r.auth_time && r.auth_time !== o.auth_time && i.throw(new Error("auth_time in id_token does not match original auth_time")), r.azp && r.azp !== o.azp && i.throw(new Error("azp in id_token does not match original azp")), !r.azp && o.azp && i.throw(new Error("azp not in id_token, but present in original id_token"));
    }
    e.profile = r;
  }
}, W = class Q {
  constructor(t) {
    this.id = t.id || S.generateUUIDv4(), this.data = t.data, t.created && t.created > 0 ? this.created = t.created : this.created = O.getEpochTime(), this.request_type = t.request_type, this.url_state = t.url_state;
  }
  toStorageString() {
    return new u("State").create("toStorageString"), JSON.stringify({
      id: this.id,
      data: this.data,
      created: this.created,
      request_type: this.request_type,
      url_state: this.url_state
    });
  }
  static fromStorageString(t) {
    return u.createStatic("State", "fromStorageString"), Promise.resolve(new Q(JSON.parse(t)));
  }
  static async clearStaleState(t, s) {
    const i = u.createStatic("State", "clearStaleState"), r = O.getEpochTime() - s, o = await t.getAllKeys();
    i.debug("got keys", o);
    for (let n = 0; n < o.length; n++) {
      const l = o[n], c = await t.get(l);
      let a = !1;
      if (c)
        try {
          const d = await Q.fromStorageString(c);
          i.debug("got item from key:", l, d.created), d.created <= r && (a = !0);
        } catch (d) {
          i.error("Error parsing state for key:", l, d), a = !0;
        }
      else
        i.debug("no item in storage for key:", l), a = !0;
      a && (i.debug("removed item for key:", l), t.remove(l));
    }
  }
}, _e = class X extends W {
  constructor(t) {
    super(t), this.code_verifier = t.code_verifier, this.code_challenge = t.code_challenge, this.authority = t.authority, this.client_id = t.client_id, this.redirect_uri = t.redirect_uri, this.scope = t.scope, this.client_secret = t.client_secret, this.extraTokenParams = t.extraTokenParams, this.response_mode = t.response_mode, this.skipUserInfo = t.skipUserInfo;
  }
  static async create(t) {
    const s = t.code_verifier === !0 ? S.generateCodeVerifier() : t.code_verifier || void 0, i = s ? await S.generateCodeChallenge(s) : void 0;
    return new X({
      ...t,
      code_verifier: s,
      code_challenge: i
    });
  }
  toStorageString() {
    return new u("SigninState").create("toStorageString"), JSON.stringify({
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
    u.createStatic("SigninState", "fromStorageString");
    const s = JSON.parse(t);
    return X.create(s);
  }
}, pe = class fe {
  constructor(t) {
    this.url = t.url, this.state = t.state;
  }
  static async create({
    // mandatory
    url: t,
    authority: s,
    client_id: i,
    redirect_uri: r,
    response_type: o,
    scope: n,
    // optional
    state_data: l,
    response_mode: c,
    request_type: a,
    client_secret: d,
    nonce: g,
    url_state: _,
    resource: f,
    skipUserInfo: E,
    extraQueryParams: x,
    extraTokenParams: h,
    disablePKCE: w,
    dpopJkt: m,
    omitScopeWhenRequesting: y,
    ...b
  }) {
    if (!t)
      throw this._logger.error("create: No url passed"), new Error("url");
    if (!i)
      throw this._logger.error("create: No client_id passed"), new Error("client_id");
    if (!r)
      throw this._logger.error("create: No redirect_uri passed"), new Error("redirect_uri");
    if (!o)
      throw this._logger.error("create: No response_type passed"), new Error("response_type");
    if (!n)
      throw this._logger.error("create: No scope passed"), new Error("scope");
    if (!s)
      throw this._logger.error("create: No authority passed"), new Error("authority");
    const R = await _e.create({
      data: l,
      request_type: a,
      url_state: _,
      code_verifier: !w,
      client_id: i,
      authority: s,
      redirect_uri: r,
      response_mode: c,
      client_secret: d,
      scope: n,
      extraTokenParams: h,
      skipUserInfo: E
    }), p = new URL(t);
    p.searchParams.append("client_id", i), p.searchParams.append("redirect_uri", r), p.searchParams.append("response_type", o), y || p.searchParams.append("scope", n), g && p.searchParams.append("nonce", g), m && p.searchParams.append("dpop_jkt", m);
    let A = R.id;
    _ && (A = `${A}${M}${_}`), p.searchParams.append("state", A), R.code_challenge && (p.searchParams.append("code_challenge", R.code_challenge), p.searchParams.append("code_challenge_method", "S256")), f && (Array.isArray(f) ? f : [f]).forEach((v) => p.searchParams.append("resource", v));
    for (const [T, v] of Object.entries({ response_mode: c, ...b, ...x }))
      v != null && p.searchParams.append(T, v.toString());
    return new fe({
      url: p.href,
      state: R
    });
  }
};
pe._logger = new u("SigninRequest");
var ze = pe, Be = "openid", J = class {
  constructor(e) {
    if (this.access_token = "", this.token_type = "", this.profile = {}, this.state = e.get("state"), this.session_state = e.get("session_state"), this.state) {
      const t = decodeURIComponent(this.state).split(M);
      this.state = t[0], t.length > 1 && (this.url_state = t.slice(1).join(M));
    }
    this.error = e.get("error"), this.error_description = e.get("error_description"), this.error_uri = e.get("error_uri"), this.code = e.get("code");
  }
  get expires_in() {
    if (this.expires_at !== void 0)
      return this.expires_at - O.getEpochTime();
  }
  set expires_in(e) {
    typeof e == "string" && (e = Number(e)), e !== void 0 && e >= 0 && (this.expires_at = Math.floor(e) + O.getEpochTime());
  }
  get isOpenId() {
    var e;
    return ((e = this.scope) == null ? void 0 : e.split(" ").includes(Be)) || !!this.id_token;
  }
}, Ve = class {
  constructor({
    url: e,
    state_data: t,
    id_token_hint: s,
    post_logout_redirect_uri: i,
    extraQueryParams: r,
    request_type: o,
    client_id: n,
    url_state: l
  }) {
    if (this._logger = new u("SignoutRequest"), !e)
      throw this._logger.error("ctor: No url passed"), new Error("url");
    const c = new URL(e);
    if (s && c.searchParams.append("id_token_hint", s), n && c.searchParams.append("client_id", n), i && (c.searchParams.append("post_logout_redirect_uri", i), t || l)) {
      this.state = new W({ data: t, request_type: o, url_state: l });
      let a = this.state.id;
      l && (a = `${a}${M}${l}`), c.searchParams.append("state", a);
    }
    for (const [a, d] of Object.entries({ ...r }))
      d != null && c.searchParams.append(a, d.toString());
    this.url = c.href;
  }
}, Ge = class {
  constructor(e) {
    if (this.state = e.get("state"), this.state) {
      const t = decodeURIComponent(this.state).split(M);
      this.state = t[0], t.length > 1 && (this.url_state = t.slice(1).join(M));
    }
    this.error = e.get("error"), this.error_description = e.get("error_description"), this.error_uri = e.get("error_uri");
  }
}, Qe = [
  "nbf",
  "jti",
  "auth_time",
  "nonce",
  "acr",
  "amr",
  "azp",
  "at_hash"
  // https://openid.net/specs/openid-connect-core-1_0.html#CodeIDToken
], Xe = ["sub", "iss", "aud", "exp", "iat"], Ye = class {
  constructor(e) {
    this._settings = e, this._logger = new u("ClaimsService");
  }
  filterProtocolClaims(e) {
    const t = { ...e };
    if (this._settings.filterProtocolClaims) {
      let s;
      Array.isArray(this._settings.filterProtocolClaims) ? s = this._settings.filterProtocolClaims : s = Qe;
      for (const i of s)
        Xe.includes(i) || delete t[i];
    }
    return t;
  }
  mergeClaims(e, t) {
    const s = { ...e };
    for (const [i, r] of Object.entries(t))
      if (s[i] !== r)
        if (Array.isArray(s[i]) || Array.isArray(r))
          if (this._settings.mergeClaimsStrategy.array == "replace")
            s[i] = r;
          else {
            const o = Array.isArray(s[i]) ? s[i] : [s[i]];
            for (const n of Array.isArray(r) ? r : [r])
              o.includes(n) || o.push(n);
            s[i] = o;
          }
        else typeof s[i] == "object" && typeof r == "object" ? s[i] = this.mergeClaims(s[i], r) : s[i] = r;
    return s;
  }
}, we = class {
  constructor(e, t) {
    this.keys = e, this.nonce = t;
  }
}, Ze = class {
  constructor(e, t) {
    this._logger = new u("OidcClient"), this.settings = e instanceof G ? e : new G(e), this.metadataService = t ?? new He(this.settings), this._claimsService = new Ye(this.settings), this._validator = new Fe(this.settings, this.metadataService, this._claimsService), this._tokenClient = new ue(this.settings, this.metadataService);
  }
  async createSigninRequest({
    state: e,
    request: t,
    request_uri: s,
    request_type: i,
    id_token_hint: r,
    login_hint: o,
    skipUserInfo: n,
    nonce: l,
    url_state: c,
    response_type: a = this.settings.response_type,
    scope: d = this.settings.scope,
    redirect_uri: g = this.settings.redirect_uri,
    prompt: _ = this.settings.prompt,
    display: f = this.settings.display,
    max_age: E = this.settings.max_age,
    ui_locales: x = this.settings.ui_locales,
    acr_values: h = this.settings.acr_values,
    resource: w = this.settings.resource,
    response_mode: m = this.settings.response_mode,
    extraQueryParams: y = this.settings.extraQueryParams,
    extraTokenParams: b = this.settings.extraTokenParams,
    dpopJkt: R,
    omitScopeWhenRequesting: p = this.settings.omitScopeWhenRequesting
  }) {
    const A = this._logger.create("createSigninRequest");
    if (a !== "code")
      throw new Error("Only the Authorization Code flow (with PKCE) is supported");
    const T = await this.metadataService.getAuthorizationEndpoint();
    A.debug("Received authorization endpoint", T);
    const v = await ze.create({
      url: T,
      authority: this.settings.authority,
      client_id: this.settings.client_id,
      redirect_uri: g,
      response_type: a,
      scope: d,
      state_data: e,
      url_state: c,
      prompt: _,
      display: f,
      max_age: E,
      ui_locales: x,
      id_token_hint: r,
      login_hint: o,
      acr_values: h,
      dpopJkt: R,
      resource: w,
      request: t,
      request_uri: s,
      extraQueryParams: y,
      extraTokenParams: b,
      request_type: i,
      response_mode: m,
      client_secret: this.settings.client_secret,
      skipUserInfo: n,
      nonce: l,
      disablePKCE: this.settings.disablePKCE,
      omitScopeWhenRequesting: p
    });
    await this.clearStaleState();
    const j = v.state;
    return await this.settings.stateStore.set(j.id, j.toStorageString()), v;
  }
  async readSigninResponseState(e, t = !1) {
    const s = this._logger.create("readSigninResponseState"), i = new J(B.readParams(e, this.settings.response_mode));
    if (!i.state)
      throw s.throw(new Error("No state in response")), null;
    const r = await this.settings.stateStore[t ? "remove" : "get"](i.state);
    if (!r)
      throw s.throw(new Error("No matching state found in storage")), null;
    return { state: await _e.fromStorageString(r), response: i };
  }
  async processSigninResponse(e, t, s = !0) {
    const i = this._logger.create("processSigninResponse"), { state: r, response: o } = await this.readSigninResponseState(e, s);
    if (i.debug("received state from storage; validating response"), this.settings.dpop && this.settings.dpop.store) {
      const n = await this.getDpopProof(this.settings.dpop.store);
      t = { ...t, DPoP: n };
    }
    try {
      await this._validator.validateSigninResponse(o, r, t);
    } catch (n) {
      if (n instanceof V && this.settings.dpop) {
        const l = await this.getDpopProof(this.settings.dpop.store, n.nonce);
        t.DPoP = l, await this._validator.validateSigninResponse(o, r, t);
      } else
        throw n;
    }
    return o;
  }
  async getDpopProof(e, t) {
    let s, i;
    return (await e.getAllKeys()).includes(this.settings.client_id) ? (i = await e.get(this.settings.client_id), i.nonce !== t && t && (i.nonce = t, await e.set(this.settings.client_id, i))) : (s = await S.generateDPoPKeys(), i = new we(s, t), await e.set(this.settings.client_id, i)), await S.generateDPoPProof({
      url: await this.metadataService.getTokenEndpoint(!1),
      httpMethod: "POST",
      keyPair: i.keys,
      nonce: i.nonce
    });
  }
  async processResourceOwnerPasswordCredentials({
    username: e,
    password: t,
    skipUserInfo: s = !1,
    extraTokenParams: i = {}
  }) {
    const r = await this._tokenClient.exchangeCredentials({ username: e, password: t, ...i }), o = new J(new URLSearchParams());
    return Object.assign(o, r), await this._validator.validateCredentialsResponse(o, s), o;
  }
  async useRefreshToken({
    state: e,
    redirect_uri: t,
    resource: s,
    timeoutInSeconds: i,
    extraHeaders: r,
    extraTokenParams: o
  }) {
    var n;
    const l = this._logger.create("useRefreshToken");
    let c;
    if (this.settings.refreshTokenAllowedScope === void 0)
      c = e.scope;
    else {
      const g = this.settings.refreshTokenAllowedScope.split(" ");
      c = (((n = e.scope) == null ? void 0 : n.split(" ")) || []).filter((f) => g.includes(f)).join(" ");
    }
    if (this.settings.dpop && this.settings.dpop.store) {
      const g = await this.getDpopProof(this.settings.dpop.store);
      r = { ...r, DPoP: g };
    }
    let a;
    try {
      a = await this._tokenClient.exchangeRefreshToken({
        refresh_token: e.refresh_token,
        // provide the (possible filtered) scope list
        scope: c,
        redirect_uri: t,
        resource: s,
        timeoutInSeconds: i,
        extraHeaders: r,
        ...o
      });
    } catch (g) {
      if (g instanceof V && this.settings.dpop)
        r.DPoP = await this.getDpopProof(this.settings.dpop.store, g.nonce), a = await this._tokenClient.exchangeRefreshToken({
          refresh_token: e.refresh_token,
          // provide the (possible filtered) scope list
          scope: c,
          redirect_uri: t,
          resource: s,
          timeoutInSeconds: i,
          extraHeaders: r,
          ...o
        });
      else
        throw g;
    }
    const d = new J(new URLSearchParams());
    return Object.assign(d, a), l.debug("validating response", d), await this._validator.validateRefreshResponse(d, {
      ...e,
      // override the scope in the state handed over to the validator
      // so it can set the granted scope to the requested scope in case none is included in the response
      scope: c
    }), d;
  }
  async createSignoutRequest({
    state: e,
    id_token_hint: t,
    client_id: s,
    request_type: i,
    url_state: r,
    post_logout_redirect_uri: o = this.settings.post_logout_redirect_uri,
    extraQueryParams: n = this.settings.extraQueryParams
  } = {}) {
    const l = this._logger.create("createSignoutRequest"), c = await this.metadataService.getEndSessionEndpoint();
    if (!c)
      throw l.throw(new Error("No end session endpoint")), null;
    l.debug("Received end session endpoint", c), !s && o && !t && (s = this.settings.client_id);
    const a = new Ve({
      url: c,
      id_token_hint: t,
      client_id: s,
      post_logout_redirect_uri: o,
      state_data: e,
      extraQueryParams: n,
      request_type: i,
      url_state: r
    });
    await this.clearStaleState();
    const d = a.state;
    return d && (l.debug("Signout request has state to persist"), await this.settings.stateStore.set(d.id, d.toStorageString())), a;
  }
  async readSignoutResponseState(e, t = !1) {
    const s = this._logger.create("readSignoutResponseState"), i = new Ge(B.readParams(e, this.settings.response_mode));
    if (!i.state) {
      if (s.debug("No state in response"), i.error)
        throw s.warn("Response was error:", i.error), new N(i);
      return { state: void 0, response: i };
    }
    const r = await this.settings.stateStore[t ? "remove" : "get"](i.state);
    if (!r)
      throw s.throw(new Error("No matching state found in storage")), null;
    return { state: await W.fromStorageString(r), response: i };
  }
  async processSignoutResponse(e) {
    const t = this._logger.create("processSignoutResponse"), { state: s, response: i } = await this.readSignoutResponseState(e, !0);
    return s ? (t.debug("Received state from storage; validating response"), this._validator.validateSignoutResponse(i, s)) : t.debug("No state from storage; skipping response validation"), i;
  }
  clearStaleState() {
    return this._logger.create("clearStaleState"), W.clearStaleState(this.settings.stateStore, this.settings.staleStateAgeInSeconds);
  }
  async revokeToken(e, t) {
    return this._logger.create("revokeToken"), await this._tokenClient.revoke({
      token: e,
      token_type_hint: t
    });
  }
}, et = class {
  constructor(e) {
    this._userManager = e, this._logger = new u("SessionMonitor"), this._start = async (t) => {
      const s = t.session_state;
      if (!s)
        return;
      const i = this._logger.create("_start");
      if (t.profile ? (this._sub = t.profile.sub, i.debug("session_state", s, ", sub", this._sub)) : (this._sub = void 0, i.debug("session_state", s, ", anonymous user")), this._checkSessionIFrame) {
        this._checkSessionIFrame.start(s);
        return;
      }
      try {
        const r = await this._userManager.metadataService.getCheckSessionIframe();
        if (r) {
          i.debug("initializing check session iframe");
          const o = this._userManager.settings.client_id, n = this._userManager.settings.checkSessionIntervalInSeconds, l = this._userManager.settings.stopCheckSessionOnError, c = new je(this._callback, o, r, n, l);
          await c.load(), this._checkSessionIFrame = c, c.start(s);
        } else
          i.warn("no check session iframe found in the metadata");
      } catch (r) {
        i.error("Error from getCheckSessionIframe:", r instanceof Error ? r.message : r);
      }
    }, this._stop = () => {
      const t = this._logger.create("_stop");
      if (this._sub = void 0, this._checkSessionIFrame && this._checkSessionIFrame.stop(), this._userManager.settings.monitorAnonymousSession) {
        const s = setInterval(async () => {
          clearInterval(s);
          try {
            const i = await this._userManager.querySessionStatus();
            if (i) {
              const r = {
                session_state: i.session_state,
                profile: i.sub ? {
                  sub: i.sub
                } : null
              };
              this._start(r);
            }
          } catch (i) {
            t.error("error from querySessionStatus", i instanceof Error ? i.message : i);
          }
        }, 1e3);
      }
    }, this._callback = async () => {
      const t = this._logger.create("_callback");
      try {
        const s = await this._userManager.querySessionStatus();
        let i = !0;
        s && this._checkSessionIFrame ? s.sub === this._sub ? (i = !1, this._checkSessionIFrame.start(s.session_state), t.debug("same sub still logged in at OP, session state has changed, restarting check session iframe; session_state", s.session_state), await this._userManager.events._raiseUserSessionChanged()) : t.debug("different subject signed into OP", s.sub) : t.debug("subject no longer signed into OP"), i ? this._sub ? await this._userManager.events._raiseUserSignedOut() : await this._userManager.events._raiseUserSignedIn() : t.debug("no change in session detected, no event to raise");
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
}, K = class me {
  constructor(t) {
    var s;
    this.id_token = t.id_token, this.session_state = (s = t.session_state) != null ? s : null, this.access_token = t.access_token, this.refresh_token = t.refresh_token, this.token_type = t.token_type, this.scope = t.scope, this.profile = t.profile, this.expires_at = t.expires_at, this.state = t.userState, this.url_state = t.url_state;
  }
  /** Computed number of seconds the access token has remaining. */
  get expires_in() {
    if (this.expires_at !== void 0)
      return this.expires_at - O.getEpochTime();
  }
  set expires_in(t) {
    t !== void 0 && (this.expires_at = Math.floor(t) + O.getEpochTime());
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
    return new u("User").create("toStorageString"), JSON.stringify({
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
    return u.createStatic("User", "fromStorageString"), new me(JSON.parse(t));
  }
}, ne = "oidc-client", Se = class {
  constructor() {
    this._abort = new q("Window navigation aborted"), this._disposeHandlers = /* @__PURE__ */ new Set(), this._window = null;
  }
  async navigate(e) {
    const t = this._logger.create("navigate");
    if (!this._window)
      throw new Error("Attempted to navigate on a disposed window");
    t.debug("setting URL in window"), this._window.location.replace(e.url);
    const { url: s, keepOpen: i } = await new Promise((r, o) => {
      const n = (c) => {
        var a;
        const d = c.data, g = (a = e.scriptOrigin) != null ? a : window.location.origin;
        if (!(c.origin !== g || d?.source !== ne)) {
          try {
            const _ = B.readParams(d.url, e.response_mode).get("state");
            if (_ || t.warn("no state found in response url"), c.source !== this._window && _ !== e.state)
              return;
          } catch {
            this._dispose(), o(new Error("Invalid response from window"));
          }
          r(d);
        }
      };
      window.addEventListener("message", n, !1), this._disposeHandlers.add(() => window.removeEventListener("message", n, !1));
      const l = new BroadcastChannel(`oidc-client-popup-${e.state}`);
      l.addEventListener("message", n, !1), this._disposeHandlers.add(() => l.close()), this._disposeHandlers.add(this._abort.addHandler((c) => {
        this._dispose(), o(c);
      }));
    });
    return t.debug("got response from window"), this._dispose(), i || this.close(), { url: s };
  }
  _dispose() {
    this._logger.create("_dispose");
    for (const e of this._disposeHandlers)
      e();
    this._disposeHandlers.clear();
  }
  static _notifyParent(e, t, s = !1, i = window.location.origin) {
    const r = {
      source: ne,
      url: t,
      keepOpen: s
    }, o = new u("_notifyParent");
    if (e)
      o.debug("With parent. Using parent.postMessage."), e.postMessage(r, i);
    else {
      o.debug("No parent. Using BroadcastChannel.");
      const n = new URL(t).searchParams.get("state");
      if (!n)
        throw new Error("No parent and no state in URL. Can't complete notification.");
      const l = new BroadcastChannel(`oidc-client-popup-${n}`);
      l.postMessage(r), l.close();
    }
  }
}, ve = {
  location: !1,
  toolbar: !1,
  height: 640,
  closePopupWindowAfterInSeconds: -1
}, ye = "_blank", tt = 60, st = 2, be = 10, it = class extends G {
  constructor(e) {
    const {
      popup_redirect_uri: t = e.redirect_uri,
      popup_post_logout_redirect_uri: s = e.post_logout_redirect_uri,
      popupWindowFeatures: i = ve,
      popupWindowTarget: r = ye,
      redirectMethod: o = "assign",
      redirectTarget: n = "self",
      iframeNotifyParentOrigin: l = e.iframeNotifyParentOrigin,
      iframeScriptOrigin: c = e.iframeScriptOrigin,
      requestTimeoutInSeconds: a,
      silent_redirect_uri: d = e.redirect_uri,
      silentRequestTimeoutInSeconds: g,
      automaticSilentRenew: _ = !0,
      validateSubOnSilentRenew: f = !0,
      includeIdTokenInSilentRenew: E = !1,
      monitorSession: x = !1,
      monitorAnonymousSession: h = !1,
      checkSessionIntervalInSeconds: w = st,
      query_status_response_type: m = "code",
      stopCheckSessionOnError: y = !0,
      revokeTokenTypes: b = ["access_token", "refresh_token"],
      revokeTokensOnSignout: R = !1,
      includeIdTokenInSilentSignout: p = !1,
      accessTokenExpiringNotificationTimeInSeconds: A = tt,
      userStore: T
    } = e;
    if (super(e), this.popup_redirect_uri = t, this.popup_post_logout_redirect_uri = s, this.popupWindowFeatures = i, this.popupWindowTarget = r, this.redirectMethod = o, this.redirectTarget = n, this.iframeNotifyParentOrigin = l, this.iframeScriptOrigin = c, this.silent_redirect_uri = d, this.silentRequestTimeoutInSeconds = g || a || be, this.automaticSilentRenew = _, this.validateSubOnSilentRenew = f, this.includeIdTokenInSilentRenew = E, this.monitorSession = x, this.monitorAnonymousSession = h, this.checkSessionIntervalInSeconds = w, this.stopCheckSessionOnError = y, this.query_status_response_type = m, this.revokeTokenTypes = b, this.revokeTokensOnSignout = R, this.includeIdTokenInSilentSignout = p, this.accessTokenExpiringNotificationTimeInSeconds = A, T)
      this.userStore = T;
    else {
      const v = typeof window < "u" ? window.sessionStorage : new ge();
      this.userStore = new he({ store: v });
    }
  }
}, oe = class ke extends Se {
  constructor({
    silentRequestTimeoutInSeconds: t = be
  }) {
    super(), this._logger = new u("IFrameWindow"), this._timeoutInSeconds = t, this._frame = ke.createHiddenIframe(), this._window = this._frame.contentWindow;
  }
  static createHiddenIframe() {
    const t = window.document.createElement("iframe");
    return t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-1000px", t.style.top = "0", t.width = "0", t.height = "0", window.document.body.appendChild(t), t;
  }
  async navigate(t) {
    this._logger.debug("navigate: Using timeout of:", this._timeoutInSeconds);
    const s = setTimeout(() => void this._abort.raise(new Y("IFrame timed out without a response")), this._timeoutInSeconds * 1e3);
    return this._disposeHandlers.add(() => clearTimeout(s)), await super.navigate(t);
  }
  close() {
    var t;
    this._frame && (this._frame.parentNode && (this._frame.addEventListener("load", (s) => {
      var i;
      const r = s.target;
      (i = r.parentNode) == null || i.removeChild(r), this._abort.raise(new Error("IFrame removed from DOM"));
    }, !0), (t = this._frame.contentWindow) == null || t.location.replace("about:blank")), this._frame = null), this._window = null;
  }
  static notifyParent(t, s) {
    return super._notifyParent(window.parent, t, !1, s);
  }
}, rt = class {
  constructor(e) {
    this._settings = e, this._logger = new u("IFrameNavigator");
  }
  async prepare({
    silentRequestTimeoutInSeconds: e = this._settings.silentRequestTimeoutInSeconds
  }) {
    return new oe({ silentRequestTimeoutInSeconds: e });
  }
  async callback(e) {
    this._logger.create("callback"), oe.notifyParent(e, this._settings.iframeNotifyParentOrigin);
  }
}, nt = 500, ot = 1e3, ae = class extends Se {
  constructor({
    popupWindowTarget: e = ye,
    popupWindowFeatures: t = {},
    popupSignal: s
  }) {
    super(), this._logger = new u("PopupWindow");
    const i = re.center({ ...ve, ...t });
    this._window = window.open(void 0, e, re.serialize(i)), s && s.addEventListener("abort", () => {
      var r;
      this._abort.raise(new Error((r = s.reason) != null ? r : "Popup aborted"));
    }), t.closePopupWindowAfterInSeconds && t.closePopupWindowAfterInSeconds > 0 && setTimeout(() => {
      if (!this._window || typeof this._window.closed != "boolean" || this._window.closed) {
        this._abort.raise(new Error("Popup blocked by user"));
        return;
      }
      this.close();
    }, t.closePopupWindowAfterInSeconds * ot);
  }
  async navigate(e) {
    var t;
    (t = this._window) == null || t.focus();
    const s = setInterval(() => {
      (!this._window || this._window.closed) && (this._logger.debug("Popup closed by user or isolated by redirect"), i(), this._disposeHandlers.delete(i));
    }, nt), i = () => clearInterval(s);
    return this._disposeHandlers.add(i), await super.navigate(e);
  }
  close() {
    this._window && (this._window.closed || (this._window.close(), this._abort.raise(new Error("Popup closed")))), this._window = null;
  }
  static notifyOpener(e, t) {
    super._notifyParent(window.opener, e, t), !t && !window.opener && window.close();
  }
}, at = class {
  constructor(e) {
    this._settings = e, this._logger = new u("PopupNavigator");
  }
  async prepare({
    popupWindowFeatures: e = this._settings.popupWindowFeatures,
    popupWindowTarget: t = this._settings.popupWindowTarget,
    popupSignal: s
  }) {
    return new ae({ popupWindowFeatures: e, popupWindowTarget: t, popupSignal: s });
  }
  async callback(e, { keepOpen: t = !1 }) {
    this._logger.create("callback"), ae.notifyOpener(e, t);
  }
}, ct = class {
  constructor(e) {
    this._settings = e, this._logger = new u("RedirectNavigator");
  }
  async prepare({
    redirectMethod: e = this._settings.redirectMethod,
    redirectTarget: t = this._settings.redirectTarget
  }) {
    var s;
    this._logger.create("prepare");
    let i = window.self;
    t === "top" && (i = (s = window.top) != null ? s : window.self);
    const r = i.location[e].bind(i.location);
    let o;
    return {
      navigate: async (n) => {
        this._logger.create("navigate");
        const l = new Promise((c, a) => {
          o = a;
        });
        return r(n.url), await l;
      },
      close: () => {
        this._logger.create("close"), o?.(new Error("Redirect aborted")), i.stop();
      }
    };
  }
  async callback() {
  }
}, lt = class extends De {
  constructor(e) {
    super({ expiringNotificationTimeInSeconds: e.accessTokenExpiringNotificationTimeInSeconds }), this._logger = new u("UserManagerEvents"), this._userLoaded = new q("User loaded"), this._userUnloaded = new q("User unloaded"), this._silentRenewError = new q("Silent renew error"), this._userSignedIn = new q("User signed in"), this._userSignedOut = new q("User signed out"), this._userSessionChanged = new q("User session changed");
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
}, dt = class {
  constructor(e) {
    this._userManager = e, this._logger = new u("SilentRenewService"), this._isStarted = !1, this._retryTimer = new O("Retry Silent Renew"), this._tokenExpiring = async () => {
      const t = this._logger.create("_tokenExpiring");
      try {
        await this._userManager.signinSilent(), t.debug("silent token renewal successful");
      } catch (s) {
        if (s instanceof Y) {
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
}, gt = class {
  constructor(e) {
    this.refresh_token = e.refresh_token, this.id_token = e.id_token, this.session_state = e.session_state, this.scope = e.scope, this.profile = e.profile, this.data = e.state;
  }
}, ht = class {
  constructor(e, t, s, i) {
    this._logger = new u("UserManager"), this.settings = new it(e), this._client = new Ze(e), this._redirectNavigator = t ?? new ct(this.settings), this._popupNavigator = s ?? new at(this.settings), this._iframeNavigator = i ?? new rt(this.settings), this._events = new lt(this.settings), this._silentRenewService = new dt(this), this.settings.automaticSilentRenew && this.startSilentRenew(), this._sessionMonitor = null, this.settings.monitorSession && (this._sessionMonitor = new et(this));
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
      ...i
    } = e;
    let r;
    (t = this.settings.dpop) != null && t.bind_authorization_code && (r = await this.generateDPoPJkt(this.settings.dpop));
    const o = await this._redirectNavigator.prepare({ redirectMethod: s });
    await this._signinStart({
      request_type: "si:r",
      dpopJkt: r,
      ...i
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
    const i = this._logger.create("signinResourceOwnerCredential"), r = await this._client.processResourceOwnerPasswordCredentials({
      username: e,
      password: t,
      skipUserInfo: s,
      extraTokenParams: this.settings.extraTokenParams
    });
    i.debug("got signin response");
    const o = await this._buildUser(r);
    return o.profile && o.profile.sub ? i.info("success, signed in subject", o.profile.sub) : i.info("no subject"), o;
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
    let i;
    (t = this.settings.dpop) != null && t.bind_authorization_code && (i = await this.generateDPoPJkt(this.settings.dpop));
    const {
      popupWindowFeatures: r,
      popupWindowTarget: o,
      popupSignal: n,
      ...l
    } = e, c = this.settings.popup_redirect_uri;
    c || s.throw(new Error("No popup_redirect_uri configured"));
    const a = await this._popupNavigator.prepare({ popupWindowFeatures: r, popupWindowTarget: o, popupSignal: n }), d = await this._signin({
      request_type: "si:p",
      redirect_uri: c,
      display: "popup",
      dpopJkt: i,
      ...l
    }, a);
    return d && (d.profile && d.profile.sub ? s.info("success, signed in subject", d.profile.sub) : s.info("no subject")), d;
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
    const i = this._logger.create("signinSilent"), {
      silentRequestTimeoutInSeconds: r,
      ...o
    } = e;
    let n = await this._loadUser();
    if (n?.refresh_token) {
      i.debug("using refresh token");
      const g = new gt(n);
      return await this._useRefreshToken({
        state: g,
        redirect_uri: o.redirect_uri,
        resource: o.resource,
        extraTokenParams: o.extraTokenParams,
        timeoutInSeconds: r
      });
    }
    let l;
    (t = this.settings.dpop) != null && t.bind_authorization_code && (l = await this.generateDPoPJkt(this.settings.dpop));
    const c = this.settings.silent_redirect_uri;
    c || i.throw(new Error("No silent_redirect_uri configured"));
    let a;
    n && this.settings.validateSubOnSilentRenew && (i.debug("subject prior to silent renew:", n.profile.sub), a = n.profile.sub);
    const d = await this._iframeNavigator.prepare({ silentRequestTimeoutInSeconds: r });
    return n = await this._signin({
      request_type: "si:s",
      redirect_uri: c,
      prompt: "none",
      id_token_hint: this.settings.includeIdTokenInSilentRenew ? n?.id_token : void 0,
      dpopJkt: l,
      ...o
    }, d, a), n && ((s = n.profile) != null && s.sub ? i.info("success, signed in subject", n.profile.sub) : i.info("no subject")), n;
  }
  async _useRefreshToken(e) {
    const t = await this._client.useRefreshToken({
      timeoutInSeconds: this.settings.silentRequestTimeoutInSeconds,
      ...e
    }), s = new K({ ...e.state, ...t });
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
      ...i
    } = e, r = this.settings.silent_redirect_uri;
    r || t.throw(new Error("No silent_redirect_uri configured"));
    const o = await this._loadUser(), n = await this._iframeNavigator.prepare({ silentRequestTimeoutInSeconds: s }), l = await this._signinStart({
      request_type: "si:s",
      // this acts like a signin silent
      redirect_uri: r,
      prompt: "none",
      id_token_hint: this.settings.includeIdTokenInSilentRenew ? o?.id_token : void 0,
      response_type: this.settings.query_status_response_type,
      scope: "openid",
      skipUserInfo: !0,
      ...i
    }, n);
    try {
      const c = {}, a = await this._client.processSigninResponse(l.url, c);
      return t.debug("got signin response"), a.session_state && a.profile.sub ? (t.info("success for subject", a.profile.sub), {
        session_state: a.session_state,
        sub: a.profile.sub
      }) : (t.info("success, user not authenticated"), null);
    } catch (c) {
      if (this.settings.monitorAnonymousSession && c instanceof N)
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
  async _signin(e, t, s) {
    const i = await this._signinStart(e, t);
    return await this._signinEnd(i.url, s);
  }
  async _signinStart(e, t) {
    const s = this._logger.create("_signinStart");
    try {
      const i = await this._client.createSigninRequest(e);
      return s.debug("got signin request"), await t.navigate({
        url: i.url,
        state: i.state.id,
        response_mode: i.state.response_mode,
        scriptOrigin: this.settings.iframeScriptOrigin
      });
    } catch (i) {
      throw s.debug("error after preparing navigator, closing navigator window"), t.close(), i;
    }
  }
  async _signinEnd(e, t) {
    const s = this._logger.create("_signinEnd"), i = {}, r = await this._client.processSigninResponse(e, i);
    return s.debug("got signin response"), await this._buildUser(r, t);
  }
  async _buildUser(e, t) {
    const s = this._logger.create("_buildUser"), i = new K(e);
    if (t) {
      if (t !== i.profile.sub)
        throw s.debug("current user does not match user returned from signin. sub from signin:", i.profile.sub), new N({ ...e, error: "login_required" });
      s.debug("current user matches user returned from signin");
    }
    return await this.storeUser(i), s.debug("user stored"), await this._events.load(i), i;
  }
  /**
   * Trigger a redirect of the current window to the end session endpoint.
   *
   * @returns A promise
   */
  async signoutRedirect(e = {}) {
    const t = this._logger.create("signoutRedirect"), {
      redirectMethod: s,
      ...i
    } = e, r = await this._redirectNavigator.prepare({ redirectMethod: s });
    await this._signoutStart({
      request_type: "so:r",
      post_logout_redirect_uri: this.settings.post_logout_redirect_uri,
      ...i
    }, r), t.info("success");
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
      popupWindowTarget: i,
      popupSignal: r,
      ...o
    } = e, n = this.settings.popup_post_logout_redirect_uri, l = await this._popupNavigator.prepare({ popupWindowFeatures: s, popupWindowTarget: i, popupSignal: r });
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
    }, l), t.info("success");
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
    const i = this._logger.create("_signoutStart");
    try {
      const r = await this._loadUser();
      i.debug("loaded current user from storage"), this.settings.revokeTokensOnSignout && await this._revokeInternal(r);
      const o = e.id_token_hint || r && r.id_token;
      o && (i.debug("setting id_token_hint in signout request"), e.id_token_hint = o), await this.removeUser(), i.debug("user removed, creating signout request");
      const n = await this._client.createSignoutRequest(e);
      return i.debug("got signout request"), await t.navigate({
        url: n.url,
        state: (s = n.state) == null ? void 0 : s.id,
        scriptOrigin: this.settings.iframeScriptOrigin
      });
    } catch (r) {
      throw i.debug("error after preparing navigator, closing navigator window"), t.close(), r;
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
      silentRequestTimeoutInSeconds: i,
      ...r
    } = e, o = this.settings.includeIdTokenInSilentSignout ? (t = await this._loadUser()) == null ? void 0 : t.id_token : void 0, n = this.settings.popup_post_logout_redirect_uri, l = await this._iframeNavigator.prepare({ silentRequestTimeoutInSeconds: i });
    await this._signout({
      request_type: "so:s",
      post_logout_redirect_uri: n,
      id_token_hint: o,
      ...r
    }, l), s.info("success");
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
    const i = t.filter((r) => typeof e[r] == "string");
    if (!i.length) {
      s.debug("no need to revoke due to no token(s)");
      return;
    }
    for (const r of i)
      await this._client.revokeToken(
        e[r],
        r
      ), s.info(`${r} revoked successfully`), r !== "access_token" && (e[r] = null);
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
    return t ? (e.debug("user storageString loaded"), K.fromStorageString(t)) : (e.debug("no user storageString"), null);
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
  async dpopProof(e, t, s, i) {
    var r, o;
    const n = await ((o = (r = this.settings.dpop) == null ? void 0 : r.store) == null ? void 0 : o.get(this.settings.client_id));
    if (n)
      return await S.generateDPoPProof({
        url: e,
        accessToken: t?.access_token,
        httpMethod: s,
        keyPair: n.keys,
        nonce: i
      });
  }
  async generateDPoPJkt(e) {
    let t = await e.store.get(this.settings.client_id);
    if (!t) {
      const s = await S.generateDPoPKeys();
      t = new we(s), await e.store.set(this.settings.client_id, t);
    }
    return await S.generateDPoPJkt(t.keys);
  }
}, ee = k.createContext(void 0);
ee.displayName = "AuthContext";
var ut = {
  isLoading: !0,
  isAuthenticated: !1
}, _t = (e, t) => {
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
      const s = new TypeError(`unknown type ${t.type}`), i = {
        name: s.name,
        message: s.message,
        innerError: s,
        stack: s.stack,
        source: "unknown"
      };
      return i.toString = () => `${i.name}: ${i.message}`, {
        ...e,
        isLoading: !1,
        error: i
      };
    }
  }
}, pt = (e = window.location) => {
  let t = new URLSearchParams(e.search);
  return !!((t.get("code") || t.get("error")) && t.get("state") || (t = new URLSearchParams(e.hash.replace("#", "?")), (t.get("code") || t.get("error")) && t.get("state")));
}, ft = te("signinCallback", "Sign-in failed"), wt = te("signoutCallback", "Sign-out failed"), mt = te("renewSilent", "Renew silent failed");
function Ee(e, t) {
  return {
    name: F(e, "name", () => "Error"),
    message: F(e, "message", () => t),
    stack: F(e, "stack", () => new Error().stack),
    innerError: e
  };
}
function te(e, t) {
  return (s) => ({
    ...Ee(s, t),
    source: e
  });
}
function F(e, t, s) {
  if (e && typeof e == "object") {
    const i = e[t];
    if (typeof i == "string")
      return i;
  }
  return s();
}
var St = [
  "clearStaleState",
  "querySessionStatus",
  "revokeTokens",
  "startSilentRenew",
  "stopSilentRenew"
], vt = [
  "signinPopup",
  "signinSilent",
  "signinRedirect",
  "signinResourceOwnerCredentials",
  "signoutPopup",
  "signoutRedirect",
  "signoutSilent"
], ce = (e) => () => {
  throw new Error(
    `UserManager#${e} was called from an unsupported context. If this is a server-rendered page, defer this call with useEffect() or pass a custom UserManager implementation.`
  );
}, le = typeof window > "u" ? null : ht, bt = (e) => {
  const {
    children: t,
    onSigninCallback: s,
    skipSigninCallback: i,
    matchSignoutCallback: r,
    onSignoutCallback: o,
    onRemoveUser: n,
    userManager: l = null,
    ...c
  } = e, [a] = k.useState(() => l ?? (le ? new le(c) : { settings: c })), [d, g] = k.useReducer(_t, ut), _ = k.useMemo(
    () => Object.assign(
      {
        settings: a.settings,
        events: a.events
      },
      Object.fromEntries(
        St.map((h) => {
          var w, m;
          return [
            h,
            (m = (w = a[h]) == null ? void 0 : w.bind(a)) != null ? m : ce(h)
          ];
        })
      ),
      Object.fromEntries(
        vt.map((h) => [
          h,
          a[h] ? async (w) => {
            g({
              type: "NAVIGATOR_INIT",
              method: h
            });
            try {
              return await a[h](w);
            } catch (m) {
              return g({
                type: "ERROR",
                error: {
                  ...Ee(m, `Unknown error while executing ${h}(...).`),
                  source: h,
                  args: w
                }
              }), null;
            } finally {
              g({ type: "NAVIGATOR_CLOSE" });
            }
          } : ce(h)
        ])
      )
    ),
    [a]
  ), f = k.useRef(!1);
  k.useEffect(() => {
    !a || f.current || (f.current = !0, (async () => {
      try {
        let h = null;
        pt() && !i && (h = await a.signinCallback(), s && await s(h)), h = h || await a.getUser(), g({ type: "INITIALISED", user: h });
      } catch (h) {
        g({
          type: "ERROR",
          error: ft(h)
        });
      }
      try {
        if (r && r(a.settings)) {
          const h = await a.signoutCallback();
          o && await o(h);
        }
      } catch (h) {
        g({
          type: "ERROR",
          error: wt(h)
        });
      }
    })());
  }, [a, i, s, o, r]), k.useEffect(() => {
    if (!a) return;
    const h = (b) => {
      g({ type: "USER_LOADED", user: b });
    };
    a.events.addUserLoaded(h);
    const w = () => {
      g({ type: "USER_UNLOADED" });
    };
    a.events.addUserUnloaded(w);
    const m = () => {
      g({ type: "USER_SIGNED_OUT" });
    };
    a.events.addUserSignedOut(m);
    const y = (b) => {
      g({
        type: "ERROR",
        error: mt(b)
      });
    };
    return a.events.addSilentRenewError(y), () => {
      a.events.removeUserLoaded(h), a.events.removeUserUnloaded(w), a.events.removeUserSignedOut(m), a.events.removeSilentRenewError(y);
    };
  }, [a]);
  const E = k.useCallback(async () => {
    await a.removeUser(), n && await n();
  }, [a, n]), x = k.useMemo(() => ({
    ...d,
    ..._,
    removeUser: E
  }), [d, _, E]);
  return /* @__PURE__ */ k.createElement(ee.Provider, { value: x }, t);
}, kt = () => {
  const e = k.useContext(ee);
  return e || console.warn("AuthProvider context is undefined, please verify you are calling useAuth() as child of a <AuthProvider> component."), e;
};
export {
  bt as AuthProvider,
  kt as useAuth
};
