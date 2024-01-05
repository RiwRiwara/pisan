function Sn(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: ii } = Object.prototype,
  { getPrototypeOf: St } = Object,
  Me = ((e) => (t) => {
    const n = ii.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  M = (e) => ((e = e.toLowerCase()), (t) => Me(t) === e),
  je = (e) => (t) => typeof t === e,
  { isArray: Q } = Array,
  le = je("undefined");
function si(e) {
  return (
    e !== null &&
    !le(e) &&
    e.constructor !== null &&
    !le(e.constructor) &&
    T(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const An = M("ArrayBuffer");
function oi(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && An(e.buffer)),
    t
  );
}
const ai = je("string"),
  T = je("function"),
  On = je("number"),
  Le = (e) => e !== null && typeof e == "object",
  ci = (e) => e === !0 || e === !1,
  Ae = (e) => {
    if (Me(e) !== "object") return !1;
    const t = St(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  ui = M("Date"),
  li = M("File"),
  fi = M("Blob"),
  di = M("FileList"),
  pi = (e) => Le(e) && T(e.pipe),
  hi = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (T(e.append) &&
          ((t = Me(e)) === "formdata" ||
            (t === "object" &&
              T(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  _i = M("URLSearchParams"),
  mi = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function de(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), Q(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = s.length;
    let a;
    for (r = 0; r < o; r++) (a = s[r]), t.call(null, e[a], a, e);
  }
}
function vn(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const Rn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Tn = (e) => !le(e) && e !== Rn;
function et() {
  const { caseless: e } = (Tn(this) && this) || {},
    t = {},
    n = (r, i) => {
      const s = (e && vn(t, i)) || i;
      Ae(t[s]) && Ae(r)
        ? (t[s] = et(t[s], r))
        : Ae(r)
        ? (t[s] = et({}, r))
        : Q(r)
        ? (t[s] = r.slice())
        : (t[s] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && de(arguments[r], n);
  return t;
}
const yi = (e, t, n, { allOwnKeys: r } = {}) => (
    de(
      t,
      (i, s) => {
        n && T(i) ? (e[s] = Sn(i, n)) : (e[s] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  gi = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  bi = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  xi = (e, t, n, r) => {
    let i, s, o;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
        (o = i[s]), (!r || r(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
      e = n !== !1 && St(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  wi = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Ei = (e) => {
    if (!e) return null;
    if (Q(e)) return e;
    let t = e.length;
    if (!On(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Si = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && St(Uint8Array)),
  Ai = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const s = i.value;
      t.call(e, s[0], s[1]);
    }
  },
  Oi = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  vi = M("HTMLFormElement"),
  Ri = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  Yt = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Ti = M("RegExp"),
  Cn = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    de(n, (i, s) => {
      let o;
      (o = t(i, s, e)) !== !1 && (r[s] = o || i);
    }),
      Object.defineProperties(e, r);
  },
  Ci = (e) => {
    Cn(e, (t, n) => {
      if (T(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (T(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Pi = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((s) => {
          n[s] = !0;
        });
      };
    return Q(e) ? r(e) : r(String(e).split(t)), n;
  },
  Ni = () => {},
  Fi = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Ke = "abcdefghijklmnopqrstuvwxyz",
  Qt = "0123456789",
  Pn = { DIGIT: Qt, ALPHA: Ke, ALPHA_DIGIT: Ke + Ke.toUpperCase() + Qt },
  Mi = (e = 16, t = Pn.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function ji(e) {
  return !!(
    e &&
    T(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Li = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (Le(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const s = Q(r) ? [] : {};
            return (
              de(r, (o, a) => {
                const c = n(o, i + 1);
                !le(c) && (s[a] = c);
              }),
              (t[i] = void 0),
              s
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Ii = M("AsyncFunction"),
  Bi = (e) => e && (Le(e) || T(e)) && T(e.then) && T(e.catch),
  l = {
    isArray: Q,
    isArrayBuffer: An,
    isBuffer: si,
    isFormData: hi,
    isArrayBufferView: oi,
    isString: ai,
    isNumber: On,
    isBoolean: ci,
    isObject: Le,
    isPlainObject: Ae,
    isUndefined: le,
    isDate: ui,
    isFile: li,
    isBlob: fi,
    isRegExp: Ti,
    isFunction: T,
    isStream: pi,
    isURLSearchParams: _i,
    isTypedArray: Si,
    isFileList: di,
    forEach: de,
    merge: et,
    extend: yi,
    trim: mi,
    stripBOM: gi,
    inherits: bi,
    toFlatObject: xi,
    kindOf: Me,
    kindOfTest: M,
    endsWith: wi,
    toArray: Ei,
    forEachEntry: Ai,
    matchAll: Oi,
    isHTMLForm: vi,
    hasOwnProperty: Yt,
    hasOwnProp: Yt,
    reduceDescriptors: Cn,
    freezeMethods: Ci,
    toObjectSet: Pi,
    toCamelCase: Ri,
    noop: Ni,
    toFiniteNumber: Fi,
    findKey: vn,
    global: Rn,
    isContextDefined: Tn,
    ALPHABET: Pn,
    generateString: Mi,
    isSpecCompliantForm: ji,
    toJSONObject: Li,
    isAsyncFn: Ii,
    isThenable: Bi,
  };
function g(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
l.inherits(g, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: l.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Nn = g.prototype,
  Fn = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Fn[e] = { value: e };
});
Object.defineProperties(g, Fn);
Object.defineProperty(Nn, "isAxiosError", { value: !0 });
g.from = (e, t, n, r, i, s) => {
  const o = Object.create(Nn);
  return (
    l.toFlatObject(
      e,
      o,
      function (c) {
        return c !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    g.call(o, e.message, t, n, r, i),
    (o.cause = e),
    (o.name = e.name),
    s && Object.assign(o, s),
    o
  );
};
const Di = null;
function tt(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function Mn(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Zt(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, s) {
          return (i = Mn(i)), !n && s ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function $i(e) {
  return l.isArray(e) && !e.some(tt);
}
const ki = l.toFlatObject(l, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Ie(e, t, n) {
  if (!l.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = l.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (_, p) {
        return !l.isUndefined(p[_]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || d,
    s = n.dots,
    o = n.indexes,
    c = (n.Blob || (typeof Blob < "u" && Blob)) && l.isSpecCompliantForm(t);
  if (!l.isFunction(i)) throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null) return "";
    if (l.isDate(h)) return h.toISOString();
    if (!c && l.isBlob(h))
      throw new g("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(h) || l.isTypedArray(h)
      ? c && typeof Blob == "function"
        ? new Blob([h])
        : Buffer.from(h)
      : h;
  }
  function d(h, _, p) {
    let y = h;
    if (h && !p && typeof h == "object") {
      if (l.endsWith(_, "{}"))
        (_ = r ? _ : _.slice(0, -2)), (h = JSON.stringify(h));
      else if (
        (l.isArray(h) && $i(h)) ||
        ((l.isFileList(h) || l.endsWith(_, "[]")) && (y = l.toArray(h)))
      )
        return (
          (_ = Mn(_)),
          y.forEach(function (E, R) {
            !(l.isUndefined(E) || E === null) &&
              t.append(
                o === !0 ? Zt([_], R, s) : o === null ? _ : _ + "[]",
                u(E)
              );
          }),
          !1
        );
    }
    return tt(h) ? !0 : (t.append(Zt(p, _, s), u(h)), !1);
  }
  const f = [],
    m = Object.assign(ki, {
      defaultVisitor: d,
      convertValue: u,
      isVisitable: tt,
    });
  function b(h, _) {
    if (!l.isUndefined(h)) {
      if (f.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + _.join("."));
      f.push(h),
        l.forEach(h, function (y, x) {
          (!(l.isUndefined(y) || y === null) &&
            i.call(t, y, l.isString(x) ? x.trim() : x, _, m)) === !0 &&
            b(y, _ ? _.concat(x) : [x]);
        }),
        f.pop();
    }
  }
  if (!l.isObject(e)) throw new TypeError("data must be an object");
  return b(e), t;
}
function en(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function At(e, t) {
  (this._pairs = []), e && Ie(e, this, t);
}
const jn = At.prototype;
jn.append = function (t, n) {
  this._pairs.push([t, n]);
};
jn.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, en);
      }
    : en;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function Ui(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Ln(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Ui,
    i = n && n.serialize;
  let s;
  if (
    (i
      ? (s = i(t, n))
      : (s = l.isURLSearchParams(t) ? t.toString() : new At(t, n).toString(r)),
    s)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class tn {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    l.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const In = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Hi = typeof URLSearchParams < "u" ? URLSearchParams : At,
  qi = typeof FormData < "u" ? FormData : null,
  zi = typeof Blob < "u" ? Blob : null,
  Ki = {
    isBrowser: !0,
    classes: { URLSearchParams: Hi, FormData: qi, Blob: zi },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Bn = typeof window < "u" && typeof document < "u",
  Ji = ((e) => Bn && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  Wi =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Vi = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Bn,
        hasStandardBrowserEnv: Ji,
        hasStandardBrowserWebWorkerEnv: Wi,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  F = { ...Vi, ...Ki };
function Xi(e, t) {
  return Ie(
    e,
    new F.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, s) {
          return F.isNode && l.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Gi(e) {
  return l
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function Yi(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++) (s = n[r]), (t[s] = e[s]);
  return t;
}
function Dn(e) {
  function t(n, r, i, s) {
    let o = n[s++];
    const a = Number.isFinite(+o),
      c = s >= n.length;
    return (
      (o = !o && l.isArray(i) ? i.length : o),
      c
        ? (l.hasOwnProp(i, o) ? (i[o] = [i[o], r]) : (i[o] = r), !a)
        : ((!i[o] || !l.isObject(i[o])) && (i[o] = []),
          t(n, r, i[o], s) && l.isArray(i[o]) && (i[o] = Yi(i[o])),
          !a)
    );
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const n = {};
    return (
      l.forEachEntry(e, (r, i) => {
        t(Gi(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function Qi(e, t, n) {
  if (l.isString(e))
    try {
      return (t || JSON.parse)(e), l.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ot = {
  transitional: In,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        s = l.isObject(t);
      if ((s && l.isHTMLForm(t) && (t = new FormData(t)), l.isFormData(t)))
        return i && i ? JSON.stringify(Dn(t)) : t;
      if (
        l.isArrayBuffer(t) ||
        l.isBuffer(t) ||
        l.isStream(t) ||
        l.isFile(t) ||
        l.isBlob(t)
      )
        return t;
      if (l.isArrayBufferView(t)) return t.buffer;
      if (l.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (s) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Xi(t, this.formSerializer).toString();
        if ((a = l.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return Ie(
            a ? { "files[]": t } : t,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return s || i ? (n.setContentType("application/json", !1), Qi(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ot.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (t && l.isString(t) && ((r && !this.responseType) || i)) {
        const o = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError"
              ? g.from(a, g.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: F.classes.FormData, Blob: F.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
l.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ot.headers[e] = {};
});
const vt = Ot,
  Zi = l.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  es = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (i = o.indexOf(":")),
              (n = o.substring(0, i).trim().toLowerCase()),
              (r = o.substring(i + 1).trim()),
              !(!n || (t[n] && Zi[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  nn = Symbol("internals");
function re(e) {
  return e && String(e).trim().toLowerCase();
}
function Oe(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(Oe) : String(e);
}
function ts(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const ns = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Je(e, t, n, r, i) {
  if (l.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!l.isString(t))) {
    if (l.isString(r)) return t.indexOf(r) !== -1;
    if (l.isRegExp(r)) return r.test(t);
  }
}
function rs(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function is(e, t) {
  const n = l.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, s, o) {
        return this[r].call(this, t, i, s, o);
      },
      configurable: !0,
    });
  });
}
class Be {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function s(a, c, u) {
      const d = re(c);
      if (!d) throw new Error("header name must be a non-empty string");
      const f = l.findKey(i, d);
      (!f || i[f] === void 0 || u === !0 || (u === void 0 && i[f] !== !1)) &&
        (i[f || c] = Oe(a));
    }
    const o = (a, c) => l.forEach(a, (u, d) => s(u, d, c));
    return (
      l.isPlainObject(t) || t instanceof this.constructor
        ? o(t, n)
        : l.isString(t) && (t = t.trim()) && !ns(t)
        ? o(es(t), n)
        : t != null && s(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = re(t)), t)) {
      const r = l.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return ts(i);
        if (l.isFunction(n)) return n.call(this, i, r);
        if (l.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = re(t)), t)) {
      const r = l.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Je(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function s(o) {
      if (((o = re(o)), o)) {
        const a = l.findKey(r, o);
        a && (!n || Je(r, r[a], a, n)) && (delete r[a], (i = !0));
      }
    }
    return l.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Je(this, this[s], s, t, !0)) && (delete this[s], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      l.forEach(this, (i, s) => {
        const o = l.findKey(r, s);
        if (o) {
          (n[o] = Oe(i)), delete n[s];
          return;
        }
        const a = t ? rs(s) : String(s).trim();
        a !== s && delete n[s], (n[a] = Oe(i)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      l.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && l.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[nn] = this[nn] = { accessors: {} }).accessors,
      i = this.prototype;
    function s(o) {
      const a = re(o);
      r[a] || (is(i, o), (r[a] = !0));
    }
    return l.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
Be.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
l.reduceDescriptors(Be.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
l.freezeMethods(Be);
const j = Be;
function We(e, t) {
  const n = this || vt,
    r = t || n,
    i = j.from(r.headers);
  let s = r.data;
  return (
    l.forEach(e, function (a) {
      s = a.call(n, s, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    s
  );
}
function $n(e) {
  return !!(e && e.__CANCEL__);
}
function pe(e, t, n) {
  g.call(this, e ?? "canceled", g.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
l.inherits(pe, g, { __CANCEL__: !0 });
function ss(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new g(
          "Request failed with status code " + n.status,
          [g.ERR_BAD_REQUEST, g.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const os = F.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, i, s) {
        const o = [e + "=" + encodeURIComponent(t)];
        l.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
          l.isString(r) && o.push("path=" + r),
          l.isString(i) && o.push("domain=" + i),
          s === !0 && o.push("secure"),
          (document.cookie = o.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function as(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function cs(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function kn(e, t) {
  return e && !as(t) ? cs(e, t) : t;
}
const us = F.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function i(s) {
        let o = s;
        return (
          t && (n.setAttribute("href", o), (o = n.href)),
          n.setAttribute("href", o),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = i(window.location.href)),
        function (o) {
          const a = l.isString(o) ? i(o) : o;
          return a.protocol === r.protocol && a.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function ls(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function fs(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    s = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const u = Date.now(),
        d = r[s];
      o || (o = u), (n[i] = c), (r[i] = u);
      let f = s,
        m = 0;
      for (; f !== i; ) (m += n[f++]), (f = f % e);
      if (((i = (i + 1) % e), i === s && (s = (s + 1) % e), u - o < t)) return;
      const b = d && u - d;
      return b ? Math.round((m * 1e3) / b) : void 0;
    }
  );
}
function rn(e, t) {
  let n = 0;
  const r = fs(50, 250);
  return (i) => {
    const s = i.loaded,
      o = i.lengthComputable ? i.total : void 0,
      a = s - n,
      c = r(a),
      u = s <= o;
    n = s;
    const d = {
      loaded: s,
      total: o,
      progress: o ? s / o : void 0,
      bytes: a,
      rate: c || void 0,
      estimated: c && o && u ? (o - s) / c : void 0,
      event: i,
    };
    (d[t ? "download" : "upload"] = !0), e(d);
  };
}
const ds = typeof XMLHttpRequest < "u",
  ps =
    ds &&
    function (e) {
      return new Promise(function (n, r) {
        let i = e.data;
        const s = j.from(e.headers).normalize();
        let { responseType: o, withXSRFToken: a } = e,
          c;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(c),
            e.signal && e.signal.removeEventListener("abort", c);
        }
        let d;
        if (l.isFormData(i)) {
          if (F.hasStandardBrowserEnv || F.hasStandardBrowserWebWorkerEnv)
            s.setContentType(!1);
          else if ((d = s.getContentType()) !== !1) {
            const [_, ...p] = d
              ? d
                  .split(";")
                  .map((y) => y.trim())
                  .filter(Boolean)
              : [];
            s.setContentType([_ || "multipart/form-data", ...p].join("; "));
          }
        }
        let f = new XMLHttpRequest();
        if (e.auth) {
          const _ = e.auth.username || "",
            p = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          s.set("Authorization", "Basic " + btoa(_ + ":" + p));
        }
        const m = kn(e.baseURL, e.url);
        f.open(e.method.toUpperCase(), Ln(m, e.params, e.paramsSerializer), !0),
          (f.timeout = e.timeout);
        function b() {
          if (!f) return;
          const _ = j.from(
              "getAllResponseHeaders" in f && f.getAllResponseHeaders()
            ),
            y = {
              data:
                !o || o === "text" || o === "json"
                  ? f.responseText
                  : f.response,
              status: f.status,
              statusText: f.statusText,
              headers: _,
              config: e,
              request: f,
            };
          ss(
            function (E) {
              n(E), u();
            },
            function (E) {
              r(E), u();
            },
            y
          ),
            (f = null);
        }
        if (
          ("onloadend" in f
            ? (f.onloadend = b)
            : (f.onreadystatechange = function () {
                !f ||
                  f.readyState !== 4 ||
                  (f.status === 0 &&
                    !(f.responseURL && f.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(b);
              }),
          (f.onabort = function () {
            f &&
              (r(new g("Request aborted", g.ECONNABORTED, e, f)), (f = null));
          }),
          (f.onerror = function () {
            r(new g("Network Error", g.ERR_NETWORK, e, f)), (f = null);
          }),
          (f.ontimeout = function () {
            let p = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const y = e.transitional || In;
            e.timeoutErrorMessage && (p = e.timeoutErrorMessage),
              r(
                new g(
                  p,
                  y.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,
                  e,
                  f
                )
              ),
              (f = null);
          }),
          F.hasStandardBrowserEnv &&
            (a && l.isFunction(a) && (a = a(e)), a || (a !== !1 && us(m))))
        ) {
          const _ =
            e.xsrfHeaderName && e.xsrfCookieName && os.read(e.xsrfCookieName);
          _ && s.set(e.xsrfHeaderName, _);
        }
        i === void 0 && s.setContentType(null),
          "setRequestHeader" in f &&
            l.forEach(s.toJSON(), function (p, y) {
              f.setRequestHeader(y, p);
            }),
          l.isUndefined(e.withCredentials) ||
            (f.withCredentials = !!e.withCredentials),
          o && o !== "json" && (f.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            f.addEventListener("progress", rn(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            f.upload &&
            f.upload.addEventListener("progress", rn(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((c = (_) => {
              f &&
                (r(!_ || _.type ? new pe(null, e, f) : _),
                f.abort(),
                (f = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(c),
            e.signal &&
              (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
        const h = ls(m);
        if (h && F.protocols.indexOf(h) === -1) {
          r(new g("Unsupported protocol " + h + ":", g.ERR_BAD_REQUEST, e));
          return;
        }
        f.send(i || null);
      });
    },
  nt = { http: Di, xhr: ps };
l.forEach(nt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const sn = (e) => `- ${e}`,
  hs = (e) => l.isFunction(e) || e === null || e === !1,
  Un = {
    getAdapter: (e) => {
      e = l.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let s = 0; s < t; s++) {
        n = e[s];
        let o;
        if (
          ((r = n),
          !hs(n) && ((r = nt[(o = String(n)).toLowerCase()]), r === void 0))
        )
          throw new g(`Unknown adapter '${o}'`);
        if (r) break;
        i[o || "#" + s] = r;
      }
      if (!r) {
        const s = Object.entries(i).map(
          ([a, c]) =>
            `adapter ${a} ` +
            (c === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let o = t
          ? s.length > 1
            ? `since :
` +
              s.map(sn).join(`
`)
            : " " + sn(s[0])
          : "as no adapter specified";
        throw new g(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: nt,
  };
function Ve(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new pe(null, e);
}
function on(e) {
  return (
    Ve(e),
    (e.headers = j.from(e.headers)),
    (e.data = We.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Un.getAdapter(e.adapter || vt.adapter)(e).then(
      function (r) {
        return (
          Ve(e),
          (r.data = We.call(e, e.transformResponse, r)),
          (r.headers = j.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          $n(r) ||
            (Ve(e),
            r &&
              r.response &&
              ((r.response.data = We.call(e, e.transformResponse, r.response)),
              (r.response.headers = j.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const an = (e) => (e instanceof j ? e.toJSON() : e);
function X(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, f) {
    return l.isPlainObject(u) && l.isPlainObject(d)
      ? l.merge.call({ caseless: f }, u, d)
      : l.isPlainObject(d)
      ? l.merge({}, d)
      : l.isArray(d)
      ? d.slice()
      : d;
  }
  function i(u, d, f) {
    if (l.isUndefined(d)) {
      if (!l.isUndefined(u)) return r(void 0, u, f);
    } else return r(u, d, f);
  }
  function s(u, d) {
    if (!l.isUndefined(d)) return r(void 0, d);
  }
  function o(u, d) {
    if (l.isUndefined(d)) {
      if (!l.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, d);
  }
  function a(u, d, f) {
    if (f in t) return r(u, d);
    if (f in e) return r(void 0, u);
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (u, d) => i(an(u), an(d), !0),
  };
  return (
    l.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const f = c[d] || i,
        m = f(e[d], t[d], d);
      (l.isUndefined(m) && f !== a) || (n[d] = m);
    }),
    n
  );
}
const Hn = "1.6.3",
  Rt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Rt[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const cn = {};
Rt.transitional = function (t, n, r) {
  function i(s, o) {
    return (
      "[Axios v" +
      Hn +
      "] Transitional option '" +
      s +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (s, o, a) => {
    if (t === !1)
      throw new g(
        i(o, " has been removed" + (n ? " in " + n : "")),
        g.ERR_DEPRECATED
      );
    return (
      n &&
        !cn[o] &&
        ((cn[o] = !0),
        console.warn(
          i(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(s, o, a) : !0
    );
  };
};
function _s(e, t, n) {
  if (typeof e != "object")
    throw new g("options must be an object", g.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i],
      o = t[s];
    if (o) {
      const a = e[s],
        c = a === void 0 || o(a, s, e);
      if (c !== !0)
        throw new g("option " + s + " must be " + c, g.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new g("Unknown option " + s, g.ERR_BAD_OPTION);
  }
}
const rt = { assertOptions: _s, validators: Rt },
  B = rt.validators;
class Ce {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new tn(), response: new tn() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = X(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 &&
      rt.assertOptions(
        r,
        {
          silentJSONParsing: B.transitional(B.boolean),
          forcedJSONParsing: B.transitional(B.boolean),
          clarifyTimeoutError: B.transitional(B.boolean),
        },
        !1
      ),
      i != null &&
        (l.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : rt.assertOptions(
              i,
              { encode: B.function, serialize: B.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = s && l.merge(s.common, s[n.method]);
    s &&
      l.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (h) => {
          delete s[h];
        }
      ),
      (n.headers = j.concat(o, s));
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function (_) {
      (typeof _.runWhen == "function" && _.runWhen(n) === !1) ||
        ((c = c && _.synchronous), a.unshift(_.fulfilled, _.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (_) {
      u.push(_.fulfilled, _.rejected);
    });
    let d,
      f = 0,
      m;
    if (!c) {
      const h = [on.bind(this), void 0];
      for (
        h.unshift.apply(h, a),
          h.push.apply(h, u),
          m = h.length,
          d = Promise.resolve(n);
        f < m;

      )
        d = d.then(h[f++], h[f++]);
      return d;
    }
    m = a.length;
    let b = n;
    for (f = 0; f < m; ) {
      const h = a[f++],
        _ = a[f++];
      try {
        b = h(b);
      } catch (p) {
        _.call(this, p);
        break;
      }
    }
    try {
      d = on.call(this, b);
    } catch (h) {
      return Promise.reject(h);
    }
    for (f = 0, m = u.length; f < m; ) d = d.then(u[f++], u[f++]);
    return d;
  }
  getUri(t) {
    t = X(this.defaults, t);
    const n = kn(t.baseURL, t.url);
    return Ln(n, t.params, t.paramsSerializer);
  }
}
l.forEach(["delete", "get", "head", "options"], function (t) {
  Ce.prototype[t] = function (n, r) {
    return this.request(
      X(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
l.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (s, o, a) {
      return this.request(
        X(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: o,
        })
      );
    };
  }
  (Ce.prototype[t] = n()), (Ce.prototype[t + "Form"] = n(!0));
});
const ve = Ce;
class Tt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let s;
        const o = new Promise((a) => {
          r.subscribe(a), (s = a);
        }).then(i);
        return (
          (o.cancel = function () {
            r.unsubscribe(s);
          }),
          o
        );
      }),
      t(function (s, o, a) {
        r.reason || ((r.reason = new pe(s, o, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Tt(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
const ms = Tt;
function ys(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function gs(e) {
  return l.isObject(e) && e.isAxiosError === !0;
}
const it = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(it).forEach(([e, t]) => {
  it[t] = e;
});
const bs = it;
function qn(e) {
  const t = new ve(e),
    n = Sn(ve.prototype.request, t);
  return (
    l.extend(n, ve.prototype, t, { allOwnKeys: !0 }),
    l.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return qn(X(e, i));
    }),
    n
  );
}
const S = qn(vt);
S.Axios = ve;
S.CanceledError = pe;
S.CancelToken = ms;
S.isCancel = $n;
S.VERSION = Hn;
S.toFormData = Ie;
S.AxiosError = g;
S.Cancel = S.CanceledError;
S.all = function (t) {
  return Promise.all(t);
};
S.spread = ys;
S.isAxiosError = gs;
S.mergeConfig = X;
S.AxiosHeaders = j;
S.formToJSON = (e) => Dn(l.isHTMLForm(e) ? new FormData(e) : e);
S.getAdapter = Un.getAdapter;
S.HttpStatusCode = bs;
S.default = S;
const xs = S;
window.axios = xs;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var st = !1,
  ot = !1,
  z = [],
  at = -1;
function ws(e) {
  Es(e);
}
function Es(e) {
  z.includes(e) || z.push(e), Ss();
}
function zn(e) {
  let t = z.indexOf(e);
  t !== -1 && t > at && z.splice(t, 1);
}
function Ss() {
  !ot && !st && ((st = !0), queueMicrotask(As));
}
function As() {
  (st = !1), (ot = !0);
  for (let e = 0; e < z.length; e++) z[e](), (at = e);
  (z.length = 0), (at = -1), (ot = !1);
}
var Z,
  ee,
  he,
  Kn,
  ct = !0;
function Os(e) {
  (ct = !1), e(), (ct = !0);
}
function vs(e) {
  (Z = e.reactive),
    (he = e.release),
    (ee = (t) =>
      e.effect(t, {
        scheduler: (n) => {
          ct ? ws(n) : n();
        },
      })),
    (Kn = e.raw);
}
function un(e) {
  ee = e;
}
function Rs(e) {
  let t = () => {};
  return [
    (r) => {
      let i = ee(r);
      return (
        e._x_effects ||
          ((e._x_effects = new Set()),
          (e._x_runEffects = () => {
            e._x_effects.forEach((s) => s());
          })),
        e._x_effects.add(i),
        (t = () => {
          i !== void 0 && (e._x_effects.delete(i), he(i));
        }),
        i
      );
    },
    () => {
      t();
    },
  ];
}
function ae(e, t, n = {}) {
  e.dispatchEvent(
    new CustomEvent(t, { detail: n, bubbles: !0, composed: !0, cancelable: !0 })
  );
}
function $(e, t) {
  if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
    Array.from(e.children).forEach((i) => $(i, t));
    return;
  }
  let n = !1;
  if ((t(e, () => (n = !0)), n)) return;
  let r = e.firstElementChild;
  for (; r; ) $(r, t), (r = r.nextElementSibling);
}
function L(e, ...t) {
  console.warn(`Alpine Warning: ${e}`, ...t);
}
var ln = !1;
function Ts() {
  ln &&
    L(
      "Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."
    ),
    (ln = !0),
    document.body ||
      L(
        "Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"
      ),
    ae(document, "alpine:init"),
    ae(document, "alpine:initializing"),
    jt(),
    Ns((t) => I(t, $)),
    Nt((t) => Pt(t)),
    tr((t, n) => {
      Dt(t, n).forEach((r) => r());
    });
  let e = (t) => !De(t.parentElement, !0);
  Array.from(document.querySelectorAll(Vn().join(",")))
    .filter(e)
    .forEach((t) => {
      I(t);
    }),
    ae(document, "alpine:initialized");
}
var Ct = [],
  Jn = [];
function Wn() {
  return Ct.map((e) => e());
}
function Vn() {
  return Ct.concat(Jn).map((e) => e());
}
function Xn(e) {
  Ct.push(e);
}
function Gn(e) {
  Jn.push(e);
}
function De(e, t = !1) {
  return $e(e, (n) => {
    if ((t ? Vn() : Wn()).some((i) => n.matches(i))) return !0;
  });
}
function $e(e, t) {
  if (e) {
    if (t(e)) return e;
    if ((e._x_teleportBack && (e = e._x_teleportBack), !!e.parentElement))
      return $e(e.parentElement, t);
  }
}
function Cs(e) {
  return Wn().some((t) => e.matches(t));
}
var Yn = [];
function Ps(e) {
  Yn.push(e);
}
function I(e, t = $, n = () => {}) {
  Js(() => {
    t(e, (r, i) => {
      n(r, i),
        Yn.forEach((s) => s(r, i)),
        Dt(r, r.attributes).forEach((s) => s()),
        r._x_ignore && i();
    });
  });
}
function Pt(e) {
  $(e, (t) => {
    rr(t), Fs(t);
  });
}
var Qn = [],
  Zn = [],
  er = [];
function Ns(e) {
  er.push(e);
}
function Nt(e, t) {
  typeof t == "function"
    ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t))
    : ((t = e), Zn.push(t));
}
function tr(e) {
  Qn.push(e);
}
function nr(e, t, n) {
  e._x_attributeCleanups || (e._x_attributeCleanups = {}),
    e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
    e._x_attributeCleanups[t].push(n);
}
function rr(e, t) {
  e._x_attributeCleanups &&
    Object.entries(e._x_attributeCleanups).forEach(([n, r]) => {
      (t === void 0 || t.includes(n)) &&
        (r.forEach((i) => i()), delete e._x_attributeCleanups[n]);
    });
}
function Fs(e) {
  if (e._x_cleanups) for (; e._x_cleanups.length; ) e._x_cleanups.pop()();
}
var Ft = new MutationObserver(It),
  Mt = !1;
function jt() {
  Ft.observe(document, {
    subtree: !0,
    childList: !0,
    attributes: !0,
    attributeOldValue: !0,
  }),
    (Mt = !0);
}
function ir() {
  Ms(), Ft.disconnect(), (Mt = !1);
}
var ce = [],
  Xe = !1;
function Ms() {
  (ce = ce.concat(Ft.takeRecords())),
    ce.length &&
      !Xe &&
      ((Xe = !0),
      queueMicrotask(() => {
        js(), (Xe = !1);
      }));
}
function js() {
  It(ce), (ce.length = 0);
}
function O(e) {
  if (!Mt) return e();
  ir();
  let t = e();
  return jt(), t;
}
var Lt = !1,
  Pe = [];
function Ls() {
  Lt = !0;
}
function Is() {
  (Lt = !1), It(Pe), (Pe = []);
}
function It(e) {
  if (Lt) {
    Pe = Pe.concat(e);
    return;
  }
  let t = [],
    n = [],
    r = new Map(),
    i = new Map();
  for (let s = 0; s < e.length; s++)
    if (
      !e[s].target._x_ignoreMutationObserver &&
      (e[s].type === "childList" &&
        (e[s].addedNodes.forEach((o) => o.nodeType === 1 && t.push(o)),
        e[s].removedNodes.forEach((o) => o.nodeType === 1 && n.push(o))),
      e[s].type === "attributes")
    ) {
      let o = e[s].target,
        a = e[s].attributeName,
        c = e[s].oldValue,
        u = () => {
          r.has(o) || r.set(o, []),
            r.get(o).push({ name: a, value: o.getAttribute(a) });
        },
        d = () => {
          i.has(o) || i.set(o, []), i.get(o).push(a);
        };
      o.hasAttribute(a) && c === null
        ? u()
        : o.hasAttribute(a)
        ? (d(), u())
        : d();
    }
  i.forEach((s, o) => {
    rr(o, s);
  }),
    r.forEach((s, o) => {
      Qn.forEach((a) => a(o, s));
    });
  for (let s of n) t.includes(s) || (Zn.forEach((o) => o(s)), Pt(s));
  t.forEach((s) => {
    (s._x_ignoreSelf = !0), (s._x_ignore = !0);
  });
  for (let s of t)
    n.includes(s) ||
      (s.isConnected &&
        (delete s._x_ignoreSelf,
        delete s._x_ignore,
        er.forEach((o) => o(s)),
        (s._x_ignore = !0),
        (s._x_ignoreSelf = !0)));
  t.forEach((s) => {
    delete s._x_ignoreSelf, delete s._x_ignore;
  }),
    (t = null),
    (n = null),
    (r = null),
    (i = null);
}
function sr(e) {
  return me(G(e));
}
function _e(e, t, n) {
  return (
    (e._x_dataStack = [t, ...G(n || e)]),
    () => {
      e._x_dataStack = e._x_dataStack.filter((r) => r !== t);
    }
  );
}
function G(e) {
  return e._x_dataStack
    ? e._x_dataStack
    : typeof ShadowRoot == "function" && e instanceof ShadowRoot
    ? G(e.host)
    : e.parentNode
    ? G(e.parentNode)
    : [];
}
function me(e) {
  return new Proxy({ objects: e }, Bs);
}
var Bs = {
  ownKeys({ objects: e }) {
    return Array.from(new Set(e.flatMap((t) => Object.keys(t))));
  },
  has({ objects: e }, t) {
    return t == Symbol.unscopables
      ? !1
      : e.some((n) => Object.prototype.hasOwnProperty.call(n, t));
  },
  get({ objects: e }, t, n) {
    return t == "toJSON"
      ? Ds
      : Reflect.get(
          e.find((r) => Object.prototype.hasOwnProperty.call(r, t)) || {},
          t,
          n
        );
  },
  set({ objects: e }, t, n, r) {
    const i =
        e.find((o) => Object.prototype.hasOwnProperty.call(o, t)) ||
        e[e.length - 1],
      s = Object.getOwnPropertyDescriptor(i, t);
    return s != null && s.set && s != null && s.get
      ? Reflect.set(i, t, n, r)
      : Reflect.set(i, t, n);
  },
};
function Ds() {
  return Reflect.ownKeys(this).reduce(
    (t, n) => ((t[n] = Reflect.get(this, n)), t),
    {}
  );
}
function or(e) {
  let t = (r) => typeof r == "object" && !Array.isArray(r) && r !== null,
    n = (r, i = "") => {
      Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(
        ([s, { value: o, enumerable: a }]) => {
          if (a === !1 || o === void 0) return;
          let c = i === "" ? s : `${i}.${s}`;
          typeof o == "object" && o !== null && o._x_interceptor
            ? (r[s] = o.initialize(e, c, s))
            : t(o) && o !== r && !(o instanceof Element) && n(o, c);
        }
      );
    };
  return n(e);
}
function ar(e, t = () => {}) {
  let n = {
    initialValue: void 0,
    _x_interceptor: !0,
    initialize(r, i, s) {
      return e(
        this.initialValue,
        () => $s(r, i),
        (o) => ut(r, i, o),
        i,
        s
      );
    },
  };
  return (
    t(n),
    (r) => {
      if (typeof r == "object" && r !== null && r._x_interceptor) {
        let i = n.initialize.bind(n);
        n.initialize = (s, o, a) => {
          let c = r.initialize(s, o, a);
          return (n.initialValue = c), i(s, o, a);
        };
      } else n.initialValue = r;
      return n;
    }
  );
}
function $s(e, t) {
  return t.split(".").reduce((n, r) => n[r], e);
}
function ut(e, t, n) {
  if ((typeof t == "string" && (t = t.split(".")), t.length === 1)) e[t[0]] = n;
  else {
    if (t.length === 0) throw error;
    return e[t[0]] || (e[t[0]] = {}), ut(e[t[0]], t.slice(1), n);
  }
}
var cr = {};
function P(e, t) {
  cr[e] = t;
}
function lt(e, t) {
  return (
    Object.entries(cr).forEach(([n, r]) => {
      let i = null;
      function s() {
        if (i) return i;
        {
          let [o, a] = hr(t);
          return (i = { interceptor: ar, ...o }), Nt(t, a), i;
        }
      }
      Object.defineProperty(e, `$${n}`, {
        get() {
          return r(t, s());
        },
        enumerable: !1,
      });
    }),
    e
  );
}
function ks(e, t, n, ...r) {
  try {
    return n(...r);
  } catch (i) {
    fe(i, e, t);
  }
}
function fe(e, t, n = void 0) {
  Object.assign(e, { el: t, expression: n }),
    console.warn(
      `Alpine Expression Error: ${e.message}

${
  n
    ? 'Expression: "' +
      n +
      `"

`
    : ""
}`,
      t
    ),
    setTimeout(() => {
      throw e;
    }, 0);
}
var Re = !0;
function ur(e) {
  let t = Re;
  Re = !1;
  let n = e();
  return (Re = t), n;
}
function K(e, t, n = {}) {
  let r;
  return v(e, t)((i) => (r = i), n), r;
}
function v(...e) {
  return lr(...e);
}
var lr = fr;
function Us(e) {
  lr = e;
}
function fr(e, t) {
  let n = {};
  lt(n, e);
  let r = [n, ...G(e)],
    i = typeof t == "function" ? Hs(r, t) : zs(r, t, e);
  return ks.bind(null, e, t, i);
}
function Hs(e, t) {
  return (n = () => {}, { scope: r = {}, params: i = [] } = {}) => {
    let s = t.apply(me([r, ...e]), i);
    Ne(n, s);
  };
}
var Ge = {};
function qs(e, t) {
  if (Ge[e]) return Ge[e];
  let n = Object.getPrototypeOf(async function () {}).constructor,
    r =
      /^[\n\s]*if.*\(.*\)/.test(e.trim()) || /^(let|const)\s/.test(e.trim())
        ? `(async()=>{ ${e} })()`
        : e,
    s = (() => {
      try {
        let o = new n(
          ["__self", "scope"],
          `with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`
        );
        return Object.defineProperty(o, "name", { value: `[Alpine] ${e}` }), o;
      } catch (o) {
        return fe(o, t, e), Promise.resolve();
      }
    })();
  return (Ge[e] = s), s;
}
function zs(e, t, n) {
  let r = qs(t, n);
  return (i = () => {}, { scope: s = {}, params: o = [] } = {}) => {
    (r.result = void 0), (r.finished = !1);
    let a = me([s, ...e]);
    if (typeof r == "function") {
      let c = r(r, a).catch((u) => fe(u, n, t));
      r.finished
        ? (Ne(i, r.result, a, o, n), (r.result = void 0))
        : c
            .then((u) => {
              Ne(i, u, a, o, n);
            })
            .catch((u) => fe(u, n, t))
            .finally(() => (r.result = void 0));
    }
  };
}
function Ne(e, t, n, r, i) {
  if (Re && typeof t == "function") {
    let s = t.apply(n, r);
    s instanceof Promise
      ? s.then((o) => Ne(e, o, n, r)).catch((o) => fe(o, i, t))
      : e(s);
  } else
    typeof t == "object" && t instanceof Promise ? t.then((s) => e(s)) : e(t);
}
var Bt = "x-";
function te(e = "") {
  return Bt + e;
}
function Ks(e) {
  Bt = e;
}
var ft = {};
function A(e, t) {
  return (
    (ft[e] = t),
    {
      before(n) {
        if (!ft[n]) {
          console.warn(
            "Cannot find directive `${directive}`. `${name}` will use the default order of execution"
          );
          return;
        }
        const r = q.indexOf(n);
        q.splice(r >= 0 ? r : q.indexOf("DEFAULT"), 0, e);
      },
    }
  );
}
function Dt(e, t, n) {
  if (((t = Array.from(t)), e._x_virtualDirectives)) {
    let s = Object.entries(e._x_virtualDirectives).map(([a, c]) => ({
        name: a,
        value: c,
      })),
      o = dr(s);
    (s = s.map((a) =>
      o.find((c) => c.name === a.name)
        ? { name: `x-bind:${a.name}`, value: `"${a.value}"` }
        : a
    )),
      (t = t.concat(s));
  }
  let r = {};
  return t
    .map(yr((s, o) => (r[s] = o)))
    .filter(br)
    .map(Vs(r, n))
    .sort(Xs)
    .map((s) => Ws(e, s));
}
function dr(e) {
  return Array.from(e)
    .map(yr())
    .filter((t) => !br(t));
}
var dt = !1,
  oe = new Map(),
  pr = Symbol();
function Js(e) {
  dt = !0;
  let t = Symbol();
  (pr = t), oe.set(t, []);
  let n = () => {
      for (; oe.get(t).length; ) oe.get(t).shift()();
      oe.delete(t);
    },
    r = () => {
      (dt = !1), n();
    };
  e(n), r();
}
function hr(e) {
  let t = [],
    n = (a) => t.push(a),
    [r, i] = Rs(e);
  return (
    t.push(i),
    [
      {
        Alpine: ge,
        effect: r,
        cleanup: n,
        evaluateLater: v.bind(v, e),
        evaluate: K.bind(K, e),
      },
      () => t.forEach((a) => a()),
    ]
  );
}
function Ws(e, t) {
  let n = () => {},
    r = ft[t.type] || n,
    [i, s] = hr(e);
  nr(e, t.original, s);
  let o = () => {
    e._x_ignore ||
      e._x_ignoreSelf ||
      (r.inline && r.inline(e, t, i),
      (r = r.bind(r, e, t, i)),
      dt ? oe.get(pr).push(r) : r());
  };
  return (o.runCleanups = s), o;
}
var _r =
    (e, t) =>
    ({ name: n, value: r }) => (
      n.startsWith(e) && (n = n.replace(e, t)), { name: n, value: r }
    ),
  mr = (e) => e;
function yr(e = () => {}) {
  return ({ name: t, value: n }) => {
    let { name: r, value: i } = gr.reduce((s, o) => o(s), {
      name: t,
      value: n,
    });
    return r !== t && e(r, t), { name: r, value: i };
  };
}
var gr = [];
function $t(e) {
  gr.push(e);
}
function br({ name: e }) {
  return xr().test(e);
}
var xr = () => new RegExp(`^${Bt}([^:^.]+)\\b`);
function Vs(e, t) {
  return ({ name: n, value: r }) => {
    let i = n.match(xr()),
      s = n.match(/:([a-zA-Z0-9\-_:]+)/),
      o = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
      a = t || e[n] || n;
    return {
      type: i ? i[1] : null,
      value: s ? s[1] : null,
      modifiers: o.map((c) => c.replace(".", "")),
      expression: r,
      original: a,
    };
  };
}
var pt = "DEFAULT",
  q = [
    "ignore",
    "ref",
    "data",
    "id",
    "anchor",
    "bind",
    "init",
    "for",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    pt,
    "teleport",
  ];
function Xs(e, t) {
  let n = q.indexOf(e.type) === -1 ? pt : e.type,
    r = q.indexOf(t.type) === -1 ? pt : t.type;
  return q.indexOf(n) - q.indexOf(r);
}
var ht = [],
  kt = !1;
function Ut(e = () => {}) {
  return (
    queueMicrotask(() => {
      kt ||
        setTimeout(() => {
          _t();
        });
    }),
    new Promise((t) => {
      ht.push(() => {
        e(), t();
      });
    })
  );
}
function _t() {
  for (kt = !1; ht.length; ) ht.shift()();
}
function Gs() {
  kt = !0;
}
function Ht(e, t) {
  return Array.isArray(t)
    ? fn(e, t.join(" "))
    : typeof t == "object" && t !== null
    ? Ys(e, t)
    : typeof t == "function"
    ? Ht(e, t())
    : fn(e, t);
}
function fn(e, t) {
  let n = (i) =>
      i
        .split(" ")
        .filter((s) => !e.classList.contains(s))
        .filter(Boolean),
    r = (i) => (
      e.classList.add(...i),
      () => {
        e.classList.remove(...i);
      }
    );
  return (t = t === !0 ? (t = "") : t || ""), r(n(t));
}
function Ys(e, t) {
  let n = (a) => a.split(" ").filter(Boolean),
    r = Object.entries(t)
      .flatMap(([a, c]) => (c ? n(a) : !1))
      .filter(Boolean),
    i = Object.entries(t)
      .flatMap(([a, c]) => (c ? !1 : n(a)))
      .filter(Boolean),
    s = [],
    o = [];
  return (
    i.forEach((a) => {
      e.classList.contains(a) && (e.classList.remove(a), o.push(a));
    }),
    r.forEach((a) => {
      e.classList.contains(a) || (e.classList.add(a), s.push(a));
    }),
    () => {
      o.forEach((a) => e.classList.add(a)),
        s.forEach((a) => e.classList.remove(a));
    }
  );
}
function ke(e, t) {
  return typeof t == "object" && t !== null ? Qs(e, t) : Zs(e, t);
}
function Qs(e, t) {
  let n = {};
  return (
    Object.entries(t).forEach(([r, i]) => {
      (n[r] = e.style[r]),
        r.startsWith("--") || (r = eo(r)),
        e.style.setProperty(r, i);
    }),
    setTimeout(() => {
      e.style.length === 0 && e.removeAttribute("style");
    }),
    () => {
      ke(e, n);
    }
  );
}
function Zs(e, t) {
  let n = e.getAttribute("style", t);
  return (
    e.setAttribute("style", t),
    () => {
      e.setAttribute("style", n || "");
    }
  );
}
function eo(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function mt(e, t = () => {}) {
  let n = !1;
  return function () {
    n ? t.apply(this, arguments) : ((n = !0), e.apply(this, arguments));
  };
}
A(
  "transition",
  (e, { value: t, modifiers: n, expression: r }, { evaluate: i }) => {
    typeof r == "function" && (r = i(r)),
      r !== !1 && (!r || typeof r == "boolean" ? no(e, n, t) : to(e, r, t));
  }
);
function to(e, t, n) {
  wr(e, Ht, ""),
    {
      enter: (i) => {
        e._x_transition.enter.during = i;
      },
      "enter-start": (i) => {
        e._x_transition.enter.start = i;
      },
      "enter-end": (i) => {
        e._x_transition.enter.end = i;
      },
      leave: (i) => {
        e._x_transition.leave.during = i;
      },
      "leave-start": (i) => {
        e._x_transition.leave.start = i;
      },
      "leave-end": (i) => {
        e._x_transition.leave.end = i;
      },
    }[n](t);
}
function no(e, t, n) {
  wr(e, ke);
  let r = !t.includes("in") && !t.includes("out") && !n,
    i = r || t.includes("in") || ["enter"].includes(n),
    s = r || t.includes("out") || ["leave"].includes(n);
  t.includes("in") && !r && (t = t.filter((y, x) => x < t.indexOf("out"))),
    t.includes("out") && !r && (t = t.filter((y, x) => x > t.indexOf("out")));
  let o = !t.includes("opacity") && !t.includes("scale"),
    a = o || t.includes("opacity"),
    c = o || t.includes("scale"),
    u = a ? 0 : 1,
    d = c ? ie(t, "scale", 95) / 100 : 1,
    f = ie(t, "delay", 0) / 1e3,
    m = ie(t, "origin", "center"),
    b = "opacity, transform",
    h = ie(t, "duration", 150) / 1e3,
    _ = ie(t, "duration", 75) / 1e3,
    p = "cubic-bezier(0.4, 0.0, 0.2, 1)";
  i &&
    ((e._x_transition.enter.during = {
      transformOrigin: m,
      transitionDelay: `${f}s`,
      transitionProperty: b,
      transitionDuration: `${h}s`,
      transitionTimingFunction: p,
    }),
    (e._x_transition.enter.start = { opacity: u, transform: `scale(${d})` }),
    (e._x_transition.enter.end = { opacity: 1, transform: "scale(1)" })),
    s &&
      ((e._x_transition.leave.during = {
        transformOrigin: m,
        transitionDelay: `${f}s`,
        transitionProperty: b,
        transitionDuration: `${_}s`,
        transitionTimingFunction: p,
      }),
      (e._x_transition.leave.start = { opacity: 1, transform: "scale(1)" }),
      (e._x_transition.leave.end = { opacity: u, transform: `scale(${d})` }));
}
function wr(e, t, n = {}) {
  e._x_transition ||
    (e._x_transition = {
      enter: { during: n, start: n, end: n },
      leave: { during: n, start: n, end: n },
      in(r = () => {}, i = () => {}) {
        yt(
          e,
          t,
          {
            during: this.enter.during,
            start: this.enter.start,
            end: this.enter.end,
          },
          r,
          i
        );
      },
      out(r = () => {}, i = () => {}) {
        yt(
          e,
          t,
          {
            during: this.leave.during,
            start: this.leave.start,
            end: this.leave.end,
          },
          r,
          i
        );
      },
    });
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function (
  e,
  t,
  n,
  r
) {
  const i =
    document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
  let s = () => i(n);
  if (t) {
    e._x_transition && (e._x_transition.enter || e._x_transition.leave)
      ? e._x_transition.enter &&
        (Object.entries(e._x_transition.enter.during).length ||
          Object.entries(e._x_transition.enter.start).length ||
          Object.entries(e._x_transition.enter.end).length)
        ? e._x_transition.in(n)
        : s()
      : e._x_transition
      ? e._x_transition.in(n)
      : s();
    return;
  }
  (e._x_hidePromise = e._x_transition
    ? new Promise((o, a) => {
        e._x_transition.out(
          () => {},
          () => o(r)
        ),
          e._x_transitioning &&
            e._x_transitioning.beforeCancel(() =>
              a({ isFromCancelledTransition: !0 })
            );
      })
    : Promise.resolve(r)),
    queueMicrotask(() => {
      let o = Er(e);
      o
        ? (o._x_hideChildren || (o._x_hideChildren = []),
          o._x_hideChildren.push(e))
        : i(() => {
            let a = (c) => {
              let u = Promise.all([
                c._x_hidePromise,
                ...(c._x_hideChildren || []).map(a),
              ]).then(([d]) => d());
              return delete c._x_hidePromise, delete c._x_hideChildren, u;
            };
            a(e).catch((c) => {
              if (!c.isFromCancelledTransition) throw c;
            });
          });
    });
};
function Er(e) {
  let t = e.parentNode;
  if (t) return t._x_hidePromise ? t : Er(t);
}
function yt(
  e,
  t,
  { during: n, start: r, end: i } = {},
  s = () => {},
  o = () => {}
) {
  if (
    (e._x_transitioning && e._x_transitioning.cancel(),
    Object.keys(n).length === 0 &&
      Object.keys(r).length === 0 &&
      Object.keys(i).length === 0)
  ) {
    s(), o();
    return;
  }
  let a, c, u;
  ro(e, {
    start() {
      a = t(e, r);
    },
    during() {
      c = t(e, n);
    },
    before: s,
    end() {
      a(), (u = t(e, i));
    },
    after: o,
    cleanup() {
      c(), u();
    },
  });
}
function ro(e, t) {
  let n,
    r,
    i,
    s = mt(() => {
      O(() => {
        (n = !0),
          r || t.before(),
          i || (t.end(), _t()),
          t.after(),
          e.isConnected && t.cleanup(),
          delete e._x_transitioning;
      });
    });
  (e._x_transitioning = {
    beforeCancels: [],
    beforeCancel(o) {
      this.beforeCancels.push(o);
    },
    cancel: mt(function () {
      for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
      s();
    }),
    finish: s,
  }),
    O(() => {
      t.start(), t.during();
    }),
    Gs(),
    requestAnimationFrame(() => {
      if (n) return;
      let o =
          Number(
            getComputedStyle(e)
              .transitionDuration.replace(/,.*/, "")
              .replace("s", "")
          ) * 1e3,
        a =
          Number(
            getComputedStyle(e)
              .transitionDelay.replace(/,.*/, "")
              .replace("s", "")
          ) * 1e3;
      o === 0 &&
        (o =
          Number(getComputedStyle(e).animationDuration.replace("s", "")) * 1e3),
        O(() => {
          t.before();
        }),
        (r = !0),
        requestAnimationFrame(() => {
          n ||
            (O(() => {
              t.end();
            }),
            _t(),
            setTimeout(e._x_transitioning.finish, o + a),
            (i = !0));
        });
    });
}
function ie(e, t, n) {
  if (e.indexOf(t) === -1) return n;
  const r = e[e.indexOf(t) + 1];
  if (!r || (t === "scale" && isNaN(r))) return n;
  if (t === "duration" || t === "delay") {
    let i = r.match(/([0-9]+)ms/);
    if (i) return i[1];
  }
  return t === "origin" &&
    ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2])
    ? [r, e[e.indexOf(t) + 2]].join(" ")
    : r;
}
var k = !1;
function ye(e, t = () => {}) {
  return (...n) => (k ? t(...n) : e(...n));
}
function io(e) {
  return (...t) => k && e(...t);
}
var Sr = [];
function Ar(e) {
  Sr.push(e);
}
function so(e, t) {
  Sr.forEach((n) => n(e, t)),
    (k = !0),
    Or(() => {
      I(t, (n, r) => {
        r(n, () => {});
      });
    }),
    (k = !1);
}
var gt = !1;
function oo(e, t) {
  t._x_dataStack || (t._x_dataStack = e._x_dataStack),
    (k = !0),
    (gt = !0),
    Or(() => {
      ao(t);
    }),
    (k = !1),
    (gt = !1);
}
function ao(e) {
  let t = !1;
  I(e, (r, i) => {
    $(r, (s, o) => {
      if (t && Cs(s)) return o();
      (t = !0), i(s, o);
    });
  });
}
function Or(e) {
  let t = ee;
  un((n, r) => {
    let i = t(n);
    return he(i), () => {};
  }),
    e(),
    un(t);
}
function vr(e, t, n, r = []) {
  switch (
    (e._x_bindings || (e._x_bindings = Z({})),
    (e._x_bindings[t] = n),
    (t = r.includes("camel") ? mo(t) : t),
    t)
  ) {
    case "value":
      co(e, n);
      break;
    case "style":
      lo(e, n);
      break;
    case "class":
      uo(e, n);
      break;
    case "selected":
    case "checked":
      fo(e, t, n);
      break;
    default:
      Rr(e, t, n);
      break;
  }
}
function co(e, t) {
  if (e.type === "radio")
    e.attributes.value === void 0 && (e.value = t),
      window.fromModel &&
        (typeof t == "boolean"
          ? (e.checked = Te(e.value) === t)
          : (e.checked = dn(e.value, t)));
  else if (e.type === "checkbox")
    Number.isInteger(t)
      ? (e.value = t)
      : !Array.isArray(t) &&
        typeof t != "boolean" &&
        ![null, void 0].includes(t)
      ? (e.value = String(t))
      : Array.isArray(t)
      ? (e.checked = t.some((n) => dn(n, e.value)))
      : (e.checked = !!t);
  else if (e.tagName === "SELECT") _o(e, t);
  else {
    if (e.value === t) return;
    e.value = t === void 0 ? "" : t;
  }
}
function uo(e, t) {
  e._x_undoAddedClasses && e._x_undoAddedClasses(),
    (e._x_undoAddedClasses = Ht(e, t));
}
function lo(e, t) {
  e._x_undoAddedStyles && e._x_undoAddedStyles(),
    (e._x_undoAddedStyles = ke(e, t));
}
function fo(e, t, n) {
  Rr(e, t, n), ho(e, t, n);
}
function Rr(e, t, n) {
  [null, void 0, !1].includes(n) && yo(t)
    ? e.removeAttribute(t)
    : (Tr(t) && (n = t), po(e, t, n));
}
function po(e, t, n) {
  e.getAttribute(t) != n && e.setAttribute(t, n);
}
function ho(e, t, n) {
  e[t] !== n && (e[t] = n);
}
function _o(e, t) {
  const n = [].concat(t).map((r) => r + "");
  Array.from(e.options).forEach((r) => {
    r.selected = n.includes(r.value);
  });
}
function mo(e) {
  return e.toLowerCase().replace(/-(\w)/g, (t, n) => n.toUpperCase());
}
function dn(e, t) {
  return e == t;
}
function Te(e) {
  return [1, "1", "true", "on", "yes", !0].includes(e)
    ? !0
    : [0, "0", "false", "off", "no", !1].includes(e)
    ? !1
    : e
    ? !!e
    : null;
}
function Tr(e) {
  return [
    "disabled",
    "checked",
    "required",
    "readonly",
    "hidden",
    "open",
    "selected",
    "autofocus",
    "itemscope",
    "multiple",
    "novalidate",
    "allowfullscreen",
    "allowpaymentrequest",
    "formnovalidate",
    "autoplay",
    "controls",
    "loop",
    "muted",
    "playsinline",
    "default",
    "ismap",
    "reversed",
    "async",
    "defer",
    "nomodule",
  ].includes(e);
}
function yo(e) {
  return ![
    "aria-pressed",
    "aria-checked",
    "aria-expanded",
    "aria-selected",
  ].includes(e);
}
function go(e, t, n) {
  return e._x_bindings && e._x_bindings[t] !== void 0
    ? e._x_bindings[t]
    : Cr(e, t, n);
}
function bo(e, t, n, r = !0) {
  if (e._x_bindings && e._x_bindings[t] !== void 0) return e._x_bindings[t];
  if (e._x_inlineBindings && e._x_inlineBindings[t] !== void 0) {
    let i = e._x_inlineBindings[t];
    return (i.extract = r), ur(() => K(e, i.expression));
  }
  return Cr(e, t, n);
}
function Cr(e, t, n) {
  let r = e.getAttribute(t);
  return r === null
    ? typeof n == "function"
      ? n()
      : n
    : r === ""
    ? !0
    : Tr(t)
    ? !![t, "true"].includes(r)
    : r;
}
function Pr(e, t) {
  var n;
  return function () {
    var r = this,
      i = arguments,
      s = function () {
        (n = null), e.apply(r, i);
      };
    clearTimeout(n), (n = setTimeout(s, t));
  };
}
function Nr(e, t) {
  let n;
  return function () {
    let r = this,
      i = arguments;
    n || (e.apply(r, i), (n = !0), setTimeout(() => (n = !1), t));
  };
}
function Fr({ get: e, set: t }, { get: n, set: r }) {
  let i = !0,
    s,
    o = ee(() => {
      const a = e(),
        c = n();
      if (i) r(Ye(a)), (i = !1), (s = JSON.stringify(a));
      else {
        const u = JSON.stringify(a);
        u !== s ? (r(Ye(a)), (s = u)) : (t(Ye(c)), (s = JSON.stringify(c)));
      }
      JSON.stringify(n()), JSON.stringify(e());
    });
  return () => {
    he(o);
  };
}
function Ye(e) {
  return typeof e == "object" ? JSON.parse(JSON.stringify(e)) : e;
}
function xo(e) {
  (Array.isArray(e) ? e : [e]).forEach((n) => n(ge));
}
var H = {},
  pn = !1;
function wo(e, t) {
  if ((pn || ((H = Z(H)), (pn = !0)), t === void 0)) return H[e];
  (H[e] = t),
    typeof t == "object" &&
      t !== null &&
      t.hasOwnProperty("init") &&
      typeof t.init == "function" &&
      H[e].init(),
    or(H[e]);
}
function Eo() {
  return H;
}
var Mr = {};
function So(e, t) {
  let n = typeof t != "function" ? () => t : t;
  return e instanceof Element ? jr(e, n()) : ((Mr[e] = n), () => {});
}
function Ao(e) {
  return (
    Object.entries(Mr).forEach(([t, n]) => {
      Object.defineProperty(e, t, {
        get() {
          return (...r) => n(...r);
        },
      });
    }),
    e
  );
}
function jr(e, t, n) {
  let r = [];
  for (; r.length; ) r.pop()();
  let i = Object.entries(t).map(([o, a]) => ({ name: o, value: a })),
    s = dr(i);
  return (
    (i = i.map((o) =>
      s.find((a) => a.name === o.name)
        ? { name: `x-bind:${o.name}`, value: `"${o.value}"` }
        : o
    )),
    Dt(e, i, n).map((o) => {
      r.push(o.runCleanups), o();
    }),
    () => {
      for (; r.length; ) r.pop()();
    }
  );
}
var Lr = {};
function Oo(e, t) {
  Lr[e] = t;
}
function vo(e, t) {
  return (
    Object.entries(Lr).forEach(([n, r]) => {
      Object.defineProperty(e, n, {
        get() {
          return (...i) => r.bind(t)(...i);
        },
        enumerable: !1,
      });
    }),
    e
  );
}
var Ro = {
    get reactive() {
      return Z;
    },
    get release() {
      return he;
    },
    get effect() {
      return ee;
    },
    get raw() {
      return Kn;
    },
    version: "3.13.3",
    flushAndStopDeferringMutations: Is,
    dontAutoEvaluateFunctions: ur,
    disableEffectScheduling: Os,
    startObservingMutations: jt,
    stopObservingMutations: ir,
    setReactivityEngine: vs,
    onAttributeRemoved: nr,
    onAttributesAdded: tr,
    closestDataStack: G,
    skipDuringClone: ye,
    onlyDuringClone: io,
    addRootSelector: Xn,
    addInitSelector: Gn,
    interceptClone: Ar,
    addScopeToNode: _e,
    deferMutations: Ls,
    mapAttributes: $t,
    evaluateLater: v,
    interceptInit: Ps,
    setEvaluator: Us,
    mergeProxies: me,
    extractProp: bo,
    findClosest: $e,
    onElRemoved: Nt,
    closestRoot: De,
    destroyTree: Pt,
    interceptor: ar,
    transition: yt,
    setStyles: ke,
    mutateDom: O,
    directive: A,
    entangle: Fr,
    throttle: Nr,
    debounce: Pr,
    evaluate: K,
    initTree: I,
    nextTick: Ut,
    prefixed: te,
    prefix: Ks,
    plugin: xo,
    magic: P,
    store: wo,
    start: Ts,
    clone: oo,
    cloneNode: so,
    bound: go,
    $data: sr,
    walk: $,
    data: Oo,
    bind: So,
  },
  ge = Ro;
function To(e, t) {
  const n = Object.create(null),
    r = e.split(",");
  for (let i = 0; i < r.length; i++) n[r[i]] = !0;
  return t ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
var Co = Object.freeze({}),
  Po = Object.prototype.hasOwnProperty,
  Ue = (e, t) => Po.call(e, t),
  J = Array.isArray,
  ue = (e) => Ir(e) === "[object Map]",
  No = (e) => typeof e == "string",
  qt = (e) => typeof e == "symbol",
  He = (e) => e !== null && typeof e == "object",
  Fo = Object.prototype.toString,
  Ir = (e) => Fo.call(e),
  Br = (e) => Ir(e).slice(8, -1),
  zt = (e) =>
    No(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Mo = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  jo = Mo((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Dr = (e, t) => e !== t && (e === e || t === t),
  bt = new WeakMap(),
  se = [],
  N,
  W = Symbol("iterate"),
  xt = Symbol("Map key iterate");
function Lo(e) {
  return e && e._isEffect === !0;
}
function Io(e, t = Co) {
  Lo(e) && (e = e.raw);
  const n = $o(e, t);
  return t.lazy || n(), n;
}
function Bo(e) {
  e.active && ($r(e), e.options.onStop && e.options.onStop(), (e.active = !1));
}
var Do = 0;
function $o(e, t) {
  const n = function () {
    if (!n.active) return e();
    if (!se.includes(n)) {
      $r(n);
      try {
        return Uo(), se.push(n), (N = n), e();
      } finally {
        se.pop(), kr(), (N = se[se.length - 1]);
      }
    }
  };
  return (
    (n.id = Do++),
    (n.allowRecurse = !!t.allowRecurse),
    (n._isEffect = !0),
    (n.active = !0),
    (n.raw = e),
    (n.deps = []),
    (n.options = t),
    n
  );
}
function $r(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
var Y = !0,
  Kt = [];
function ko() {
  Kt.push(Y), (Y = !1);
}
function Uo() {
  Kt.push(Y), (Y = !0);
}
function kr() {
  const e = Kt.pop();
  Y = e === void 0 ? !0 : e;
}
function C(e, t, n) {
  if (!Y || N === void 0) return;
  let r = bt.get(e);
  r || bt.set(e, (r = new Map()));
  let i = r.get(n);
  i || r.set(n, (i = new Set())),
    i.has(N) ||
      (i.add(N),
      N.deps.push(i),
      N.options.onTrack &&
        N.options.onTrack({ effect: N, target: e, type: t, key: n }));
}
function U(e, t, n, r, i, s) {
  const o = bt.get(e);
  if (!o) return;
  const a = new Set(),
    c = (d) => {
      d &&
        d.forEach((f) => {
          (f !== N || f.allowRecurse) && a.add(f);
        });
    };
  if (t === "clear") o.forEach(c);
  else if (n === "length" && J(e))
    o.forEach((d, f) => {
      (f === "length" || f >= r) && c(d);
    });
  else
    switch ((n !== void 0 && c(o.get(n)), t)) {
      case "add":
        J(e)
          ? zt(n) && c(o.get("length"))
          : (c(o.get(W)), ue(e) && c(o.get(xt)));
        break;
      case "delete":
        J(e) || (c(o.get(W)), ue(e) && c(o.get(xt)));
        break;
      case "set":
        ue(e) && c(o.get(W));
        break;
    }
  const u = (d) => {
    d.options.onTrigger &&
      d.options.onTrigger({
        effect: d,
        target: e,
        key: n,
        type: t,
        newValue: r,
        oldValue: i,
        oldTarget: s,
      }),
      d.options.scheduler ? d.options.scheduler(d) : d();
  };
  a.forEach(u);
}
var Ho = To("__proto__,__v_isRef,__isVue"),
  Ur = new Set(
    Object.getOwnPropertyNames(Symbol)
      .map((e) => Symbol[e])
      .filter(qt)
  ),
  qo = Hr(),
  zo = Hr(!0),
  hn = Ko();
function Ko() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const r = w(this);
        for (let s = 0, o = this.length; s < o; s++) C(r, "get", s + "");
        const i = r[t](...n);
        return i === -1 || i === !1 ? r[t](...n.map(w)) : i;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        ko();
        const r = w(this)[t].apply(this, n);
        return kr(), r;
      };
    }),
    e
  );
}
function Hr(e = !1, t = !1) {
  return function (r, i, s) {
    if (i === "__v_isReactive") return !e;
    if (i === "__v_isReadonly") return e;
    if (i === "__v_raw" && s === (e ? (t ? aa : Jr) : t ? oa : Kr).get(r))
      return r;
    const o = J(r);
    if (!e && o && Ue(hn, i)) return Reflect.get(hn, i, s);
    const a = Reflect.get(r, i, s);
    return (qt(i) ? Ur.has(i) : Ho(i)) || (e || C(r, "get", i), t)
      ? a
      : wt(a)
      ? !o || !zt(i)
        ? a.value
        : a
      : He(a)
      ? e
        ? Wr(a)
        : Xt(a)
      : a;
  };
}
var Jo = Wo();
function Wo(e = !1) {
  return function (n, r, i, s) {
    let o = n[r];
    if (!e && ((i = w(i)), (o = w(o)), !J(n) && wt(o) && !wt(i)))
      return (o.value = i), !0;
    const a = J(n) && zt(r) ? Number(r) < n.length : Ue(n, r),
      c = Reflect.set(n, r, i, s);
    return (
      n === w(s) && (a ? Dr(i, o) && U(n, "set", r, i, o) : U(n, "add", r, i)),
      c
    );
  };
}
function Vo(e, t) {
  const n = Ue(e, t),
    r = e[t],
    i = Reflect.deleteProperty(e, t);
  return i && n && U(e, "delete", t, void 0, r), i;
}
function Xo(e, t) {
  const n = Reflect.has(e, t);
  return (!qt(t) || !Ur.has(t)) && C(e, "has", t), n;
}
function Go(e) {
  return C(e, "iterate", J(e) ? "length" : W), Reflect.ownKeys(e);
}
var Yo = { get: qo, set: Jo, deleteProperty: Vo, has: Xo, ownKeys: Go },
  Qo = {
    get: zo,
    set(e, t) {
      return (
        console.warn(
          `Set operation on key "${String(t)}" failed: target is readonly.`,
          e
        ),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        console.warn(
          `Delete operation on key "${String(t)}" failed: target is readonly.`,
          e
        ),
        !0
      );
    },
  },
  Jt = (e) => (He(e) ? Xt(e) : e),
  Wt = (e) => (He(e) ? Wr(e) : e),
  Vt = (e) => e,
  qe = (e) => Reflect.getPrototypeOf(e);
function be(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const i = w(e),
    s = w(t);
  t !== s && !n && C(i, "get", t), !n && C(i, "get", s);
  const { has: o } = qe(i),
    a = r ? Vt : n ? Wt : Jt;
  if (o.call(i, t)) return a(e.get(t));
  if (o.call(i, s)) return a(e.get(s));
  e !== i && e.get(t);
}
function xe(e, t = !1) {
  const n = this.__v_raw,
    r = w(n),
    i = w(e);
  return (
    e !== i && !t && C(r, "has", e),
    !t && C(r, "has", i),
    e === i ? n.has(e) : n.has(e) || n.has(i)
  );
}
function we(e, t = !1) {
  return (
    (e = e.__v_raw), !t && C(w(e), "iterate", W), Reflect.get(e, "size", e)
  );
}
function _n(e) {
  e = w(e);
  const t = w(this);
  return qe(t).has.call(t, e) || (t.add(e), U(t, "add", e, e)), this;
}
function mn(e, t) {
  t = w(t);
  const n = w(this),
    { has: r, get: i } = qe(n);
  let s = r.call(n, e);
  s ? zr(n, r, e) : ((e = w(e)), (s = r.call(n, e)));
  const o = i.call(n, e);
  return (
    n.set(e, t), s ? Dr(t, o) && U(n, "set", e, t, o) : U(n, "add", e, t), this
  );
}
function yn(e) {
  const t = w(this),
    { has: n, get: r } = qe(t);
  let i = n.call(t, e);
  i ? zr(t, n, e) : ((e = w(e)), (i = n.call(t, e)));
  const s = r ? r.call(t, e) : void 0,
    o = t.delete(e);
  return i && U(t, "delete", e, void 0, s), o;
}
function gn() {
  const e = w(this),
    t = e.size !== 0,
    n = ue(e) ? new Map(e) : new Set(e),
    r = e.clear();
  return t && U(e, "clear", void 0, void 0, n), r;
}
function Ee(e, t) {
  return function (r, i) {
    const s = this,
      o = s.__v_raw,
      a = w(o),
      c = t ? Vt : e ? Wt : Jt;
    return (
      !e && C(a, "iterate", W), o.forEach((u, d) => r.call(i, c(u), c(d), s))
    );
  };
}
function Se(e, t, n) {
  return function (...r) {
    const i = this.__v_raw,
      s = w(i),
      o = ue(s),
      a = e === "entries" || (e === Symbol.iterator && o),
      c = e === "keys" && o,
      u = i[e](...r),
      d = n ? Vt : t ? Wt : Jt;
    return (
      !t && C(s, "iterate", c ? xt : W),
      {
        next() {
          const { value: f, done: m } = u.next();
          return m
            ? { value: f, done: m }
            : { value: a ? [d(f[0]), d(f[1])] : d(f), done: m };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function D(e) {
  return function (...t) {
    {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${jo(e)} operation ${n}failed: target is readonly.`,
        w(this)
      );
    }
    return e === "delete" ? !1 : this;
  };
}
function Zo() {
  const e = {
      get(s) {
        return be(this, s);
      },
      get size() {
        return we(this);
      },
      has: xe,
      add: _n,
      set: mn,
      delete: yn,
      clear: gn,
      forEach: Ee(!1, !1),
    },
    t = {
      get(s) {
        return be(this, s, !1, !0);
      },
      get size() {
        return we(this);
      },
      has: xe,
      add: _n,
      set: mn,
      delete: yn,
      clear: gn,
      forEach: Ee(!1, !0),
    },
    n = {
      get(s) {
        return be(this, s, !0);
      },
      get size() {
        return we(this, !0);
      },
      has(s) {
        return xe.call(this, s, !0);
      },
      add: D("add"),
      set: D("set"),
      delete: D("delete"),
      clear: D("clear"),
      forEach: Ee(!0, !1),
    },
    r = {
      get(s) {
        return be(this, s, !0, !0);
      },
      get size() {
        return we(this, !0);
      },
      has(s) {
        return xe.call(this, s, !0);
      },
      add: D("add"),
      set: D("set"),
      delete: D("delete"),
      clear: D("clear"),
      forEach: Ee(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
      (e[s] = Se(s, !1, !1)),
        (n[s] = Se(s, !0, !1)),
        (t[s] = Se(s, !1, !0)),
        (r[s] = Se(s, !0, !0));
    }),
    [e, n, t, r]
  );
}
var [ea, ta, na, ra] = Zo();
function qr(e, t) {
  const n = t ? (e ? ra : na) : e ? ta : ea;
  return (r, i, s) =>
    i === "__v_isReactive"
      ? !e
      : i === "__v_isReadonly"
      ? e
      : i === "__v_raw"
      ? r
      : Reflect.get(Ue(n, i) && i in r ? n : r, i, s);
}
var ia = { get: qr(!1, !1) },
  sa = { get: qr(!0, !1) };
function zr(e, t, n) {
  const r = w(n);
  if (r !== n && t.call(e, r)) {
    const i = Br(e);
    console.warn(
      `Reactive ${i} contains both the raw and reactive versions of the same object${
        i === "Map" ? " as keys" : ""
      }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
var Kr = new WeakMap(),
  oa = new WeakMap(),
  Jr = new WeakMap(),
  aa = new WeakMap();
function ca(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ua(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ca(Br(e));
}
function Xt(e) {
  return e && e.__v_isReadonly ? e : Vr(e, !1, Yo, ia, Kr);
}
function Wr(e) {
  return Vr(e, !0, Qo, sa, Jr);
}
function Vr(e, t, n, r, i) {
  if (!He(e))
    return console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive)) return e;
  const s = i.get(e);
  if (s) return s;
  const o = ua(e);
  if (o === 0) return e;
  const a = new Proxy(e, o === 2 ? r : n);
  return i.set(e, a), a;
}
function w(e) {
  return (e && w(e.__v_raw)) || e;
}
function wt(e) {
  return !!(e && e.__v_isRef === !0);
}
P("nextTick", () => Ut);
P("dispatch", (e) => ae.bind(ae, e));
P("watch", (e, { evaluateLater: t, effect: n }) => (r, i) => {
  let s = t(r),
    o = !0,
    a,
    c = n(() =>
      s((u) => {
        JSON.stringify(u),
          o
            ? (a = u)
            : queueMicrotask(() => {
                i(u, a), (a = u);
              }),
          (o = !1);
      })
    );
  e._x_effects.delete(c);
});
P("store", Eo);
P("data", (e) => sr(e));
P("root", (e) => De(e));
P(
  "refs",
  (e) => (e._x_refs_proxy || (e._x_refs_proxy = me(la(e))), e._x_refs_proxy)
);
function la(e) {
  let t = [],
    n = e;
  for (; n; ) n._x_refs && t.push(n._x_refs), (n = n.parentNode);
  return t;
}
var Qe = {};
function Xr(e) {
  return Qe[e] || (Qe[e] = 0), ++Qe[e];
}
function fa(e, t) {
  return $e(e, (n) => {
    if (n._x_ids && n._x_ids[t]) return !0;
  });
}
function da(e, t) {
  e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = Xr(t));
}
P("id", (e) => (t, n = null) => {
  let r = fa(e, t),
    i = r ? r._x_ids[t] : Xr(t);
  return n ? `${t}-${i}-${n}` : `${t}-${i}`;
});
P("el", (e) => e);
Gr("Focus", "focus", "focus");
Gr("Persist", "persist", "persist");
function Gr(e, t, n) {
  P(t, (r) =>
    L(
      `You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,
      r
    )
  );
}
A(
  "modelable",
  (e, { expression: t }, { effect: n, evaluateLater: r, cleanup: i }) => {
    let s = r(t),
      o = () => {
        let d;
        return s((f) => (d = f)), d;
      },
      a = r(`${t} = __placeholder`),
      c = (d) => a(() => {}, { scope: { __placeholder: d } }),
      u = o();
    c(u),
      queueMicrotask(() => {
        if (!e._x_model) return;
        e._x_removeModelListeners.default();
        let d = e._x_model.get,
          f = e._x_model.set,
          m = Fr(
            {
              get() {
                return d();
              },
              set(b) {
                f(b);
              },
            },
            {
              get() {
                return o();
              },
              set(b) {
                c(b);
              },
            }
          );
        i(m);
      });
  }
);
A("teleport", (e, { modifiers: t, expression: n }, { cleanup: r }) => {
  e.tagName.toLowerCase() !== "template" &&
    L("x-teleport can only be used on a <template> tag", e);
  let i = bn(n),
    s = e.content.cloneNode(!0).firstElementChild;
  (e._x_teleport = s),
    (s._x_teleportBack = e),
    e.setAttribute("data-teleport-template", !0),
    s.setAttribute("data-teleport-target", !0),
    e._x_forwardEvents &&
      e._x_forwardEvents.forEach((a) => {
        s.addEventListener(a, (c) => {
          c.stopPropagation(), e.dispatchEvent(new c.constructor(c.type, c));
        });
      }),
    _e(s, {}, e);
  let o = (a, c, u) => {
    u.includes("prepend")
      ? c.parentNode.insertBefore(a, c)
      : u.includes("append")
      ? c.parentNode.insertBefore(a, c.nextSibling)
      : c.appendChild(a);
  };
  O(() => {
    o(s, i, t), I(s), (s._x_ignore = !0);
  }),
    (e._x_teleportPutBack = () => {
      let a = bn(n);
      O(() => {
        o(e._x_teleport, a, t);
      });
    }),
    r(() => s.remove());
});
var pa = document.createElement("div");
function bn(e) {
  let t = ye(
    () => document.querySelector(e),
    () => pa
  )();
  return t || L(`Cannot find x-teleport element for selector: "${e}"`), t;
}
var Yr = () => {};
Yr.inline = (e, { modifiers: t }, { cleanup: n }) => {
  t.includes("self") ? (e._x_ignoreSelf = !0) : (e._x_ignore = !0),
    n(() => {
      t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore;
    });
};
A("ignore", Yr);
A(
  "effect",
  ye((e, { expression: t }, { effect: n }) => {
    n(v(e, t));
  })
);
function Et(e, t, n, r) {
  let i = e,
    s = (c) => r(c),
    o = {},
    a = (c, u) => (d) => u(c, d);
  if (
    (n.includes("dot") && (t = ha(t)),
    n.includes("camel") && (t = _a(t)),
    n.includes("passive") && (o.passive = !0),
    n.includes("capture") && (o.capture = !0),
    n.includes("window") && (i = window),
    n.includes("document") && (i = document),
    n.includes("debounce"))
  ) {
    let c = n[n.indexOf("debounce") + 1] || "invalid-wait",
      u = Fe(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
    s = Pr(s, u);
  }
  if (n.includes("throttle")) {
    let c = n[n.indexOf("throttle") + 1] || "invalid-wait",
      u = Fe(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
    s = Nr(s, u);
  }
  return (
    n.includes("prevent") &&
      (s = a(s, (c, u) => {
        u.preventDefault(), c(u);
      })),
    n.includes("stop") &&
      (s = a(s, (c, u) => {
        u.stopPropagation(), c(u);
      })),
    n.includes("self") &&
      (s = a(s, (c, u) => {
        u.target === e && c(u);
      })),
    (n.includes("away") || n.includes("outside")) &&
      ((i = document),
      (s = a(s, (c, u) => {
        e.contains(u.target) ||
          (u.target.isConnected !== !1 &&
            ((e.offsetWidth < 1 && e.offsetHeight < 1) ||
              (e._x_isShown !== !1 && c(u))));
      }))),
    n.includes("once") &&
      (s = a(s, (c, u) => {
        c(u), i.removeEventListener(t, s, o);
      })),
    (s = a(s, (c, u) => {
      (ya(t) && ga(u, n)) || c(u);
    })),
    i.addEventListener(t, s, o),
    () => {
      i.removeEventListener(t, s, o);
    }
  );
}
function ha(e) {
  return e.replace(/-/g, ".");
}
function _a(e) {
  return e.toLowerCase().replace(/-(\w)/g, (t, n) => n.toUpperCase());
}
function Fe(e) {
  return !Array.isArray(e) && !isNaN(e);
}
function ma(e) {
  return [" ", "_"].includes(e)
    ? e
    : e
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[_\s]/, "-")
        .toLowerCase();
}
function ya(e) {
  return ["keydown", "keyup"].includes(e);
}
function ga(e, t) {
  let n = t.filter(
    (s) =>
      !["window", "document", "prevent", "stop", "once", "capture"].includes(s)
  );
  if (n.includes("debounce")) {
    let s = n.indexOf("debounce");
    n.splice(s, Fe((n[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (n.includes("throttle")) {
    let s = n.indexOf("throttle");
    n.splice(s, Fe((n[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (n.length === 0 || (n.length === 1 && xn(e.key).includes(n[0]))) return !1;
  const i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((s) =>
    n.includes(s)
  );
  return (
    (n = n.filter((s) => !i.includes(s))),
    !(
      i.length > 0 &&
      i.filter(
        (o) => ((o === "cmd" || o === "super") && (o = "meta"), e[`${o}Key`])
      ).length === i.length &&
      xn(e.key).includes(n[0])
    )
  );
}
function xn(e) {
  if (!e) return [];
  e = ma(e);
  let t = {
    ctrl: "control",
    slash: "/",
    space: " ",
    spacebar: " ",
    cmd: "meta",
    esc: "escape",
    up: "arrow-up",
    down: "arrow-down",
    left: "arrow-left",
    right: "arrow-right",
    period: ".",
    equal: "=",
    minus: "-",
    underscore: "_",
  };
  return (
    (t[e] = e),
    Object.keys(t)
      .map((n) => {
        if (t[n] === e) return n;
      })
      .filter((n) => n)
  );
}
A("model", (e, { modifiers: t, expression: n }, { effect: r, cleanup: i }) => {
  let s = e;
  t.includes("parent") && (s = e.parentNode);
  let o = v(s, n),
    a;
  typeof n == "string"
    ? (a = v(s, `${n} = __placeholder`))
    : typeof n == "function" && typeof n() == "string"
    ? (a = v(s, `${n()} = __placeholder`))
    : (a = () => {});
  let c = () => {
      let m;
      return o((b) => (m = b)), wn(m) ? m.get() : m;
    },
    u = (m) => {
      let b;
      o((h) => (b = h)),
        wn(b) ? b.set(m) : a(() => {}, { scope: { __placeholder: m } });
    };
  typeof n == "string" &&
    e.type === "radio" &&
    O(() => {
      e.hasAttribute("name") || e.setAttribute("name", n);
    });
  var d =
    e.tagName.toLowerCase() === "select" ||
    ["checkbox", "radio"].includes(e.type) ||
    t.includes("lazy")
      ? "change"
      : "input";
  let f = k
    ? () => {}
    : Et(e, d, t, (m) => {
        u(ba(e, t, m, c()));
      });
  if (
    (t.includes("fill") &&
      ([null, ""].includes(c()) ||
        (e.type === "checkbox" && Array.isArray(c()))) &&
      e.dispatchEvent(new Event(d, {})),
    e._x_removeModelListeners || (e._x_removeModelListeners = {}),
    (e._x_removeModelListeners.default = f),
    i(() => e._x_removeModelListeners.default()),
    e.form)
  ) {
    let m = Et(e.form, "reset", [], (b) => {
      Ut(() => e._x_model && e._x_model.set(e.value));
    });
    i(() => m());
  }
  (e._x_model = {
    get() {
      return c();
    },
    set(m) {
      u(m);
    },
  }),
    (e._x_forceModelUpdate = (m) => {
      m === void 0 && typeof n == "string" && n.match(/\./) && (m = ""),
        (window.fromModel = !0),
        O(() => vr(e, "value", m)),
        delete window.fromModel;
    }),
    r(() => {
      let m = c();
      (t.includes("unintrusive") && document.activeElement.isSameNode(e)) ||
        e._x_forceModelUpdate(m);
    });
});
function ba(e, t, n, r) {
  return O(() => {
    if (n instanceof CustomEvent && n.detail !== void 0)
      return n.detail !== null && n.detail !== void 0
        ? n.detail
        : n.target.value;
    if (e.type === "checkbox")
      if (Array.isArray(r)) {
        let i = null;
        return (
          t.includes("number")
            ? (i = Ze(n.target.value))
            : t.includes("boolean")
            ? (i = Te(n.target.value))
            : (i = n.target.value),
          n.target.checked ? r.concat([i]) : r.filter((s) => !xa(s, i))
        );
      } else return n.target.checked;
    else
      return e.tagName.toLowerCase() === "select" && e.multiple
        ? t.includes("number")
          ? Array.from(n.target.selectedOptions).map((i) => {
              let s = i.value || i.text;
              return Ze(s);
            })
          : t.includes("boolean")
          ? Array.from(n.target.selectedOptions).map((i) => {
              let s = i.value || i.text;
              return Te(s);
            })
          : Array.from(n.target.selectedOptions).map((i) => i.value || i.text)
        : t.includes("number")
        ? Ze(n.target.value)
        : t.includes("boolean")
        ? Te(n.target.value)
        : t.includes("trim")
        ? n.target.value.trim()
        : n.target.value;
  });
}
function Ze(e) {
  let t = e ? parseFloat(e) : null;
  return wa(t) ? t : e;
}
function xa(e, t) {
  return e == t;
}
function wa(e) {
  return !Array.isArray(e) && !isNaN(e);
}
function wn(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    typeof e.get == "function" &&
    typeof e.set == "function"
  );
}
A("cloak", (e) =>
  queueMicrotask(() => O(() => e.removeAttribute(te("cloak"))))
);
Gn(() => `[${te("init")}]`);
A(
  "init",
  ye((e, { expression: t }, { evaluate: n }) =>
    typeof t == "string" ? !!t.trim() && n(t, {}, !1) : n(t, {}, !1)
  )
);
A("text", (e, { expression: t }, { effect: n, evaluateLater: r }) => {
  let i = r(t);
  n(() => {
    i((s) => {
      O(() => {
        e.textContent = s;
      });
    });
  });
});
A("html", (e, { expression: t }, { effect: n, evaluateLater: r }) => {
  let i = r(t);
  n(() => {
    i((s) => {
      O(() => {
        (e.innerHTML = s), (e._x_ignoreSelf = !0), I(e), delete e._x_ignoreSelf;
      });
    });
  });
});
$t(_r(":", mr(te("bind:"))));
var Qr = (
  e,
  { value: t, modifiers: n, expression: r, original: i },
  { effect: s }
) => {
  if (!t) {
    let a = {};
    Ao(a),
      v(e, r)(
        (u) => {
          jr(e, u, i);
        },
        { scope: a }
      );
    return;
  }
  if (t === "key") return Ea(e, r);
  if (
    e._x_inlineBindings &&
    e._x_inlineBindings[t] &&
    e._x_inlineBindings[t].extract
  )
    return;
  let o = v(e, r);
  s(() =>
    o((a) => {
      a === void 0 && typeof r == "string" && r.match(/\./) && (a = ""),
        O(() => vr(e, t, a, n));
    })
  );
};
Qr.inline = (e, { value: t, modifiers: n, expression: r }) => {
  t &&
    (e._x_inlineBindings || (e._x_inlineBindings = {}),
    (e._x_inlineBindings[t] = { expression: r, extract: !1 }));
};
A("bind", Qr);
function Ea(e, t) {
  e._x_keyExpression = t;
}
Xn(() => `[${te("data")}]`);
A("data", (e, { expression: t }, { cleanup: n }) => {
  if (Sa(e)) return;
  t = t === "" ? "{}" : t;
  let r = {};
  lt(r, e);
  let i = {};
  vo(i, r);
  let s = K(e, t, { scope: i });
  (s === void 0 || s === !0) && (s = {}), lt(s, e);
  let o = Z(s);
  or(o);
  let a = _e(e, o);
  o.init && K(e, o.init),
    n(() => {
      o.destroy && K(e, o.destroy), a();
    });
});
Ar((e, t) => {
  e._x_dataStack &&
    ((t._x_dataStack = e._x_dataStack),
    t.setAttribute("data-has-alpine-state", !0));
});
function Sa(e) {
  return k ? (gt ? !0 : e.hasAttribute("data-has-alpine-state")) : !1;
}
A("show", (e, { modifiers: t, expression: n }, { effect: r }) => {
  let i = v(e, n);
  e._x_doHide ||
    (e._x_doHide = () => {
      O(() => {
        e.style.setProperty(
          "display",
          "none",
          t.includes("important") ? "important" : void 0
        );
      });
    }),
    e._x_doShow ||
      (e._x_doShow = () => {
        O(() => {
          e.style.length === 1 && e.style.display === "none"
            ? e.removeAttribute("style")
            : e.style.removeProperty("display");
        });
      });
  let s = () => {
      e._x_doHide(), (e._x_isShown = !1);
    },
    o = () => {
      e._x_doShow(), (e._x_isShown = !0);
    },
    a = () => setTimeout(o),
    c = mt(
      (f) => (f ? o() : s()),
      (f) => {
        typeof e._x_toggleAndCascadeWithTransitions == "function"
          ? e._x_toggleAndCascadeWithTransitions(e, f, o, s)
          : f
          ? a()
          : s();
      }
    ),
    u,
    d = !0;
  r(() =>
    i((f) => {
      (!d && f === u) ||
        (t.includes("immediate") && (f ? a() : s()), c(f), (u = f), (d = !1));
    })
  );
});
A("for", (e, { expression: t }, { effect: n, cleanup: r }) => {
  let i = Oa(t),
    s = v(e, i.items),
    o = v(e, e._x_keyExpression || "index");
  (e._x_prevKeys = []),
    (e._x_lookup = {}),
    n(() => Aa(e, i, s, o)),
    r(() => {
      Object.values(e._x_lookup).forEach((a) => a.remove()),
        delete e._x_prevKeys,
        delete e._x_lookup;
    });
});
function Aa(e, t, n, r) {
  let i = (o) => typeof o == "object" && !Array.isArray(o),
    s = e;
  n((o) => {
    va(o) && o >= 0 && (o = Array.from(Array(o).keys(), (p) => p + 1)),
      o === void 0 && (o = []);
    let a = e._x_lookup,
      c = e._x_prevKeys,
      u = [],
      d = [];
    if (i(o))
      o = Object.entries(o).map(([p, y]) => {
        let x = En(t, y, p, o);
        r((E) => d.push(E), { scope: { index: p, ...x } }), u.push(x);
      });
    else
      for (let p = 0; p < o.length; p++) {
        let y = En(t, o[p], p, o);
        r((x) => d.push(x), { scope: { index: p, ...y } }), u.push(y);
      }
    let f = [],
      m = [],
      b = [],
      h = [];
    for (let p = 0; p < c.length; p++) {
      let y = c[p];
      d.indexOf(y) === -1 && b.push(y);
    }
    c = c.filter((p) => !b.includes(p));
    let _ = "template";
    for (let p = 0; p < d.length; p++) {
      let y = d[p],
        x = c.indexOf(y);
      if (x === -1) c.splice(p, 0, y), f.push([_, p]);
      else if (x !== p) {
        let E = c.splice(p, 1)[0],
          R = c.splice(x - 1, 1)[0];
        c.splice(p, 0, R), c.splice(x, 0, E), m.push([E, R]);
      } else h.push(y);
      _ = y;
    }
    for (let p = 0; p < b.length; p++) {
      let y = b[p];
      a[y]._x_effects && a[y]._x_effects.forEach(zn),
        a[y].remove(),
        (a[y] = null),
        delete a[y];
    }
    for (let p = 0; p < m.length; p++) {
      let [y, x] = m[p],
        E = a[y],
        R = a[x],
        V = document.createElement("div");
      O(() => {
        R || L('x-for ":key" is undefined or invalid', s),
          R.after(V),
          E.after(R),
          R._x_currentIfEl && R.after(R._x_currentIfEl),
          V.before(E),
          E._x_currentIfEl && E.after(E._x_currentIfEl),
          V.remove();
      }),
        R._x_refreshXForScope(u[d.indexOf(x)]);
    }
    for (let p = 0; p < f.length; p++) {
      let [y, x] = f[p],
        E = y === "template" ? s : a[y];
      E._x_currentIfEl && (E = E._x_currentIfEl);
      let R = u[x],
        V = d[x],
        ne = document.importNode(s.content, !0).firstElementChild,
        Gt = Z(R);
      _e(ne, Gt, s),
        (ne._x_refreshXForScope = (ti) => {
          Object.entries(ti).forEach(([ni, ri]) => {
            Gt[ni] = ri;
          });
        }),
        O(() => {
          E.after(ne), I(ne);
        }),
        typeof V == "object" &&
          L(
            "x-for key cannot be an object, it must be a string or an integer",
            s
          ),
        (a[V] = ne);
    }
    for (let p = 0; p < h.length; p++)
      a[h[p]]._x_refreshXForScope(u[d.indexOf(h[p])]);
    s._x_prevKeys = d;
  });
}
function Oa(e) {
  let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
    n = /^\s*\(|\)\s*$/g,
    r = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
    i = e.match(r);
  if (!i) return;
  let s = {};
  s.items = i[2].trim();
  let o = i[1].replace(n, "").trim(),
    a = o.match(t);
  return (
    a
      ? ((s.item = o.replace(t, "").trim()),
        (s.index = a[1].trim()),
        a[2] && (s.collection = a[2].trim()))
      : (s.item = o),
    s
  );
}
function En(e, t, n, r) {
  let i = {};
  return (
    /^\[.*\]$/.test(e.item) && Array.isArray(t)
      ? e.item
          .replace("[", "")
          .replace("]", "")
          .split(",")
          .map((o) => o.trim())
          .forEach((o, a) => {
            i[o] = t[a];
          })
      : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && typeof t == "object"
      ? e.item
          .replace("{", "")
          .replace("}", "")
          .split(",")
          .map((o) => o.trim())
          .forEach((o) => {
            i[o] = t[o];
          })
      : (i[e.item] = t),
    e.index && (i[e.index] = n),
    e.collection && (i[e.collection] = r),
    i
  );
}
function va(e) {
  return !Array.isArray(e) && !isNaN(e);
}
function Zr() {}
Zr.inline = (e, { expression: t }, { cleanup: n }) => {
  let r = De(e);
  r._x_refs || (r._x_refs = {}),
    (r._x_refs[t] = e),
    n(() => delete r._x_refs[t]);
};
A("ref", Zr);
A("if", (e, { expression: t }, { effect: n, cleanup: r }) => {
  e.tagName.toLowerCase() !== "template" &&
    L("x-if can only be used on a <template> tag", e);
  let i = v(e, t),
    s = () => {
      if (e._x_currentIfEl) return e._x_currentIfEl;
      let a = e.content.cloneNode(!0).firstElementChild;
      return (
        _e(a, {}, e),
        O(() => {
          e.after(a), I(a);
        }),
        (e._x_currentIfEl = a),
        (e._x_undoIf = () => {
          $(a, (c) => {
            c._x_effects && c._x_effects.forEach(zn);
          }),
            a.remove(),
            delete e._x_currentIfEl;
        }),
        a
      );
    },
    o = () => {
      e._x_undoIf && (e._x_undoIf(), delete e._x_undoIf);
    };
  n(() =>
    i((a) => {
      a ? s() : o();
    })
  ),
    r(() => e._x_undoIf && e._x_undoIf());
});
A("id", (e, { expression: t }, { evaluate: n }) => {
  n(t).forEach((i) => da(e, i));
});
$t(_r("@", mr(te("on:"))));
A(
  "on",
  ye((e, { value: t, modifiers: n, expression: r }, { cleanup: i }) => {
    let s = r ? v(e, r) : () => {};
    e.tagName.toLowerCase() === "template" &&
      (e._x_forwardEvents || (e._x_forwardEvents = []),
      e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
    let o = Et(e, t, n, (a) => {
      s(() => {}, { scope: { $event: a }, params: [a] });
    });
    i(() => o());
  })
);
ze("Collapse", "collapse", "collapse");
ze("Intersect", "intersect", "intersect");
ze("Focus", "trap", "focus");
ze("Mask", "mask", "mask");
function ze(e, t, n) {
  A(t, (r) =>
    L(
      `You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`,
      r
    )
  );
}
ge.setEvaluator(fr);
ge.setReactivityEngine({ reactive: Xt, effect: Io, release: Bo, raw: w });
var Ra = ge,
  ei = Ra;
window.Alpine = ei;
ei.start();
