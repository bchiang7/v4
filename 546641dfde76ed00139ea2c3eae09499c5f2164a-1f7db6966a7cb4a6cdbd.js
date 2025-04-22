/*! For license information please see 546641dfde76ed00139ea2c3eae09499c5f2164a-1f7db6966a7cb4a6cdbd.js.LICENSE.txt */
(self.webpackChunkv4 = self.webpackChunkv4 || []).push([
  [559],
  {
    2808: function (e) {
      var t = "undefined" != typeof Element,
        n = "function" == typeof Map,
        r = "function" == typeof Set,
        a = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
      function i(e, o) {
        if (e === o) return !0;
        if (e && o && "object" == typeof e && "object" == typeof o) {
          if (e.constructor !== o.constructor) return !1;
          var l, s, c, u;
          if (Array.isArray(e)) {
            if ((l = e.length) != o.length) return !1;
            for (s = l; 0 != s--; ) if (!i(e[s], o[s])) return !1;
            return !0;
          }
          if (n && e instanceof Map && o instanceof Map) {
            if (e.size !== o.size) return !1;
            for (u = e.entries(); !(s = u.next()).done; )
              if (!o.has(s.value[0])) return !1;
            for (u = e.entries(); !(s = u.next()).done; )
              if (!i(s.value[1], o.get(s.value[0]))) return !1;
            return !0;
          }
          if (r && e instanceof Set && o instanceof Set) {
            if (e.size !== o.size) return !1;
            for (u = e.entries(); !(s = u.next()).done; )
              if (!o.has(s.value[0])) return !1;
            return !0;
          }
          if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(o)) {
            if ((l = e.length) != o.length) return !1;
            for (s = l; 0 != s--; ) if (e[s] !== o[s]) return !1;
            return !0;
          }
          if (e.constructor === RegExp)
            return e.source === o.source && e.flags === o.flags;
          if (
            e.valueOf !== Object.prototype.valueOf &&
            "function" == typeof e.valueOf &&
            "function" == typeof o.valueOf
          )
            return e.valueOf() === o.valueOf();
          if (
            e.toString !== Object.prototype.toString &&
            "function" == typeof e.toString &&
            "function" == typeof o.toString
          )
            return e.toString() === o.toString();
          if ((l = (c = Object.keys(e)).length) !== Object.keys(o).length)
            return !1;
          for (s = l; 0 != s--; )
            if (!Object.prototype.hasOwnProperty.call(o, c[s])) return !1;
          if (t && e instanceof Element) return !1;
          for (s = l; 0 != s--; )
            if (
              (("_owner" !== c[s] && "__v" !== c[s] && "__o" !== c[s]) ||
                !e.$$typeof) &&
              !i(e[c[s]], o[c[s]])
            )
              return !1;
          return !0;
        }
        return e != e && o != o;
      }
      e.exports = function (e, t) {
        try {
          return i(e, t);
        } catch (n) {
          if ((n.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw n;
        }
      };
    },
    3673: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return me;
        },
      });
      var r,
        a,
        i,
        o,
        l = n(5556),
        s = n.n(l),
        c = n(6643),
        u = n.n(c),
        d = n(2808),
        f = n.n(d),
        m = n(6540),
        p = n(7325),
        h = n.n(p),
        g = "bodyAttributes",
        v = "htmlAttributes",
        x = "titleAttributes",
        b = {
          BASE: "base",
          BODY: "body",
          HEAD: "head",
          HTML: "html",
          LINK: "link",
          META: "meta",
          NOSCRIPT: "noscript",
          SCRIPT: "script",
          STYLE: "style",
          TITLE: "title",
        },
        y =
          (Object.keys(b).map(function (e) {
            return b[e];
          }),
          "charset"),
        w = "cssText",
        E = "href",
        k = "http-equiv",
        C = "innerHTML",
        S = "itemprop",
        T = "name",
        L = "property",
        A = "rel",
        j = "src",
        N = "target",
        O = {
          accesskey: "accessKey",
          charset: "charSet",
          class: "className",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          "http-equiv": "httpEquiv",
          itemprop: "itemProp",
          tabindex: "tabIndex",
        },
        z = "defaultTitle",
        I = "defer",
        M = "encodeSpecialCharacters",
        P = "onChangeClientState",
        _ = "titleTemplate",
        R = Object.keys(O).reduce(function (e, t) {
          return (e[O[t]] = t), e;
        }, {}),
        D = [b.NOSCRIPT, b.SCRIPT, b.STYLE],
        B = "data-react-helmet",
        F =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        H = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        W =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        q = function (e, t) {
          var n = {};
          for (var r in e)
            t.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
          return n;
        },
        Y = function (e) {
          return !1 ===
            (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1])
            ? String(e)
            : String(e)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#x27;");
        },
        V = function (e) {
          var t = Z(e, b.TITLE),
            n = Z(e, _);
          if (n && t)
            return n.replace(/%s/g, function () {
              return Array.isArray(t) ? t.join("") : t;
            });
          var r = Z(e, z);
          return t || r || void 0;
        },
        U = function (e) {
          return Z(e, P) || function () {};
        },
        G = function (e, t) {
          return t
            .filter(function (t) {
              return void 0 !== t[e];
            })
            .map(function (t) {
              return t[e];
            })
            .reduce(function (e, t) {
              return W({}, e, t);
            }, {});
        },
        $ = function (e, t) {
          return t
            .filter(function (e) {
              return void 0 !== e[b.BASE];
            })
            .map(function (e) {
              return e[b.BASE];
            })
            .reverse()
            .reduce(function (t, n) {
              if (!t.length)
                for (var r = Object.keys(n), a = 0; a < r.length; a++) {
                  var i = r[a].toLowerCase();
                  if (-1 !== e.indexOf(i) && n[i]) return t.concat(n);
                }
              return t;
            }, []);
        },
        X = function (e, t, n) {
          var r = {};
          return n
            .filter(function (t) {
              return (
                !!Array.isArray(t[e]) ||
                (void 0 !== t[e] &&
                  te(
                    "Helmet: " +
                      e +
                      ' should be of type "Array". Instead found type "' +
                      F(t[e]) +
                      '"'
                  ),
                !1)
              );
            })
            .map(function (t) {
              return t[e];
            })
            .reverse()
            .reduce(function (e, n) {
              var a = {};
              n.filter(function (e) {
                for (
                  var n = void 0, i = Object.keys(e), o = 0;
                  o < i.length;
                  o++
                ) {
                  var l = i[o],
                    s = l.toLowerCase();
                  -1 === t.indexOf(s) ||
                    (n === A && "canonical" === e[n].toLowerCase()) ||
                    (s === A && "stylesheet" === e[s].toLowerCase()) ||
                    (n = s),
                    -1 === t.indexOf(l) ||
                      (l !== C && l !== w && l !== S) ||
                      (n = l);
                }
                if (!n || !e[n]) return !1;
                var c = e[n].toLowerCase();
                return (
                  r[n] || (r[n] = {}),
                  a[n] || (a[n] = {}),
                  !r[n][c] && ((a[n][c] = !0), !0)
                );
              })
                .reverse()
                .forEach(function (t) {
                  return e.push(t);
                });
              for (var i = Object.keys(a), o = 0; o < i.length; o++) {
                var l = i[o],
                  s = h()({}, r[l], a[l]);
                r[l] = s;
              }
              return e;
            }, [])
            .reverse();
        },
        Z = function (e, t) {
          for (var n = e.length - 1; n >= 0; n--) {
            var r = e[n];
            if (r.hasOwnProperty(t)) return r[t];
          }
          return null;
        },
        Q =
          ((r = Date.now()),
          function (e) {
            var t = Date.now();
            t - r > 16
              ? ((r = t), e(t))
              : setTimeout(function () {
                  Q(e);
                }, 0);
          }),
        K = function (e) {
          return clearTimeout(e);
        },
        J =
          "undefined" != typeof window
            ? (window.requestAnimationFrame &&
                window.requestAnimationFrame.bind(window)) ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              Q
            : n.g.requestAnimationFrame || Q,
        ee =
          "undefined" != typeof window
            ? window.cancelAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.mozCancelAnimationFrame ||
              K
            : n.g.cancelAnimationFrame || K,
        te = function (e) {
          return (
            console && "function" == typeof console.warn && console.warn(e)
          );
        },
        ne = null,
        re = function (e, t) {
          var n = e.baseTag,
            r = e.bodyAttributes,
            a = e.htmlAttributes,
            i = e.linkTags,
            o = e.metaTags,
            l = e.noscriptTags,
            s = e.onChangeClientState,
            c = e.scriptTags,
            u = e.styleTags,
            d = e.title,
            f = e.titleAttributes;
          oe(b.BODY, r), oe(b.HTML, a), ie(d, f);
          var m = {
              baseTag: le(b.BASE, n),
              linkTags: le(b.LINK, i),
              metaTags: le(b.META, o),
              noscriptTags: le(b.NOSCRIPT, l),
              scriptTags: le(b.SCRIPT, c),
              styleTags: le(b.STYLE, u),
            },
            p = {},
            h = {};
          Object.keys(m).forEach(function (e) {
            var t = m[e],
              n = t.newTags,
              r = t.oldTags;
            n.length && (p[e] = n), r.length && (h[e] = m[e].oldTags);
          }),
            t && t(),
            s(e, p, h);
        },
        ae = function (e) {
          return Array.isArray(e) ? e.join("") : e;
        },
        ie = function (e, t) {
          void 0 !== e && document.title !== e && (document.title = ae(e)),
            oe(b.TITLE, t);
        },
        oe = function (e, t) {
          var n = document.getElementsByTagName(e)[0];
          if (n) {
            for (
              var r = n.getAttribute(B),
                a = r ? r.split(",") : [],
                i = [].concat(a),
                o = Object.keys(t),
                l = 0;
              l < o.length;
              l++
            ) {
              var s = o[l],
                c = t[s] || "";
              n.getAttribute(s) !== c && n.setAttribute(s, c),
                -1 === a.indexOf(s) && a.push(s);
              var u = i.indexOf(s);
              -1 !== u && i.splice(u, 1);
            }
            for (var d = i.length - 1; d >= 0; d--) n.removeAttribute(i[d]);
            a.length === i.length
              ? n.removeAttribute(B)
              : n.getAttribute(B) !== o.join(",") &&
                n.setAttribute(B, o.join(","));
          }
        },
        le = function (e, t) {
          var n = document.head || document.querySelector(b.HEAD),
            r = n.querySelectorAll(e + "[" + B + "]"),
            a = Array.prototype.slice.call(r),
            i = [],
            o = void 0;
          return (
            t &&
              t.length &&
              t.forEach(function (t) {
                var n = document.createElement(e);
                for (var r in t)
                  if (t.hasOwnProperty(r))
                    if (r === C) n.innerHTML = t.innerHTML;
                    else if (r === w)
                      n.styleSheet
                        ? (n.styleSheet.cssText = t.cssText)
                        : n.appendChild(document.createTextNode(t.cssText));
                    else {
                      var l = void 0 === t[r] ? "" : t[r];
                      n.setAttribute(r, l);
                    }
                n.setAttribute(B, "true"),
                  a.some(function (e, t) {
                    return (o = t), n.isEqualNode(e);
                  })
                    ? a.splice(o, 1)
                    : i.push(n);
              }),
            a.forEach(function (e) {
              return e.parentNode.removeChild(e);
            }),
            i.forEach(function (e) {
              return n.appendChild(e);
            }),
            { oldTags: a, newTags: i }
          );
        },
        se = function (e) {
          return Object.keys(e).reduce(function (t, n) {
            var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
            return t ? t + " " + r : r;
          }, "");
        },
        ce = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Object.keys(e).reduce(function (t, n) {
            return (t[O[n] || n] = e[n]), t;
          }, t);
        },
        ue = function (e, t, n) {
          switch (e) {
            case b.TITLE:
              return {
                toComponent: function () {
                  return (
                    (e = t.title),
                    (n = t.titleAttributes),
                    ((r = { key: e })[B] = !0),
                    (a = ce(n, r)),
                    [m.createElement(b.TITLE, a, e)]
                  );
                  var e, n, r, a;
                },
                toString: function () {
                  return (function (e, t, n, r) {
                    var a = se(n),
                      i = ae(t);
                    return a
                      ? "<" +
                          e +
                          " " +
                          B +
                          '="true" ' +
                          a +
                          ">" +
                          Y(i, r) +
                          "</" +
                          e +
                          ">"
                      : "<" +
                          e +
                          " " +
                          B +
                          '="true">' +
                          Y(i, r) +
                          "</" +
                          e +
                          ">";
                  })(e, t.title, t.titleAttributes, n);
                },
              };
            case g:
            case v:
              return {
                toComponent: function () {
                  return ce(t);
                },
                toString: function () {
                  return se(t);
                },
              };
            default:
              return {
                toComponent: function () {
                  return (function (e, t) {
                    return t.map(function (t, n) {
                      var r,
                        a = (((r = { key: n })[B] = !0), r);
                      return (
                        Object.keys(t).forEach(function (e) {
                          var n = O[e] || e;
                          if (n === C || n === w) {
                            var r = t.innerHTML || t.cssText;
                            a.dangerouslySetInnerHTML = { __html: r };
                          } else a[n] = t[e];
                        }),
                        m.createElement(e, a)
                      );
                    });
                  })(e, t);
                },
                toString: function () {
                  return (function (e, t, n) {
                    return t.reduce(function (t, r) {
                      var a = Object.keys(r)
                          .filter(function (e) {
                            return !(e === C || e === w);
                          })
                          .reduce(function (e, t) {
                            var a =
                              void 0 === r[t] ? t : t + '="' + Y(r[t], n) + '"';
                            return e ? e + " " + a : a;
                          }, ""),
                        i = r.innerHTML || r.cssText || "",
                        o = -1 === D.indexOf(e);
                      return (
                        t +
                        "<" +
                        e +
                        " " +
                        B +
                        '="true" ' +
                        a +
                        (o ? "/>" : ">" + i + "</" + e + ">")
                      );
                    }, "");
                  })(e, t, n);
                },
              };
          }
        },
        de = function (e) {
          var t = e.baseTag,
            n = e.bodyAttributes,
            r = e.encode,
            a = e.htmlAttributes,
            i = e.linkTags,
            o = e.metaTags,
            l = e.noscriptTags,
            s = e.scriptTags,
            c = e.styleTags,
            u = e.title,
            d = void 0 === u ? "" : u,
            f = e.titleAttributes;
          return {
            base: ue(b.BASE, t, r),
            bodyAttributes: ue(g, n, r),
            htmlAttributes: ue(v, a, r),
            link: ue(b.LINK, i, r),
            meta: ue(b.META, o, r),
            noscript: ue(b.NOSCRIPT, l, r),
            script: ue(b.SCRIPT, s, r),
            style: ue(b.STYLE, c, r),
            title: ue(b.TITLE, { title: d, titleAttributes: f }, r),
          };
        },
        fe = u()(
          function (e) {
            return {
              baseTag: $([E, N], e),
              bodyAttributes: G(g, e),
              defer: Z(e, I),
              encode: Z(e, M),
              htmlAttributes: G(v, e),
              linkTags: X(b.LINK, [A, E], e),
              metaTags: X(b.META, [T, y, k, L, S], e),
              noscriptTags: X(b.NOSCRIPT, [C], e),
              onChangeClientState: U(e),
              scriptTags: X(b.SCRIPT, [j, C], e),
              styleTags: X(b.STYLE, [w], e),
              title: V(e),
              titleAttributes: G(x, e),
            };
          },
          function (e) {
            ne && ee(ne),
              e.defer
                ? (ne = J(function () {
                    re(e, function () {
                      ne = null;
                    });
                  }))
                : (re(e), (ne = null));
          },
          de
        )(function () {
          return null;
        }),
        me =
          ((a = fe),
          (o = i =
            (function (e) {
              function t() {
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                  (function (e, t) {
                    if (!e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !t ||
                      ("object" != typeof t && "function" != typeof t)
                      ? e
                      : t;
                  })(this, e.apply(this, arguments))
                );
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(t, e),
                (t.prototype.shouldComponentUpdate = function (e) {
                  return !f()(this.props, e);
                }),
                (t.prototype.mapNestedChildrenToProps = function (e, t) {
                  if (!t) return null;
                  switch (e.type) {
                    case b.SCRIPT:
                    case b.NOSCRIPT:
                      return { innerHTML: t };
                    case b.STYLE:
                      return { cssText: t };
                  }
                  throw new Error(
                    "<" +
                      e.type +
                      " /> elements are self-closing and can not contain children. Refer to our API for more information."
                  );
                }),
                (t.prototype.flattenArrayTypeChildren = function (e) {
                  var t,
                    n = e.child,
                    r = e.arrayTypeChildren,
                    a = e.newChildProps,
                    i = e.nestedChildren;
                  return W(
                    {},
                    r,
                    (((t = {})[n.type] = [].concat(r[n.type] || [], [
                      W({}, a, this.mapNestedChildrenToProps(n, i)),
                    ])),
                    t)
                  );
                }),
                (t.prototype.mapObjectTypeChildren = function (e) {
                  var t,
                    n,
                    r = e.child,
                    a = e.newProps,
                    i = e.newChildProps,
                    o = e.nestedChildren;
                  switch (r.type) {
                    case b.TITLE:
                      return W(
                        {},
                        a,
                        (((t = {})[r.type] = o),
                        (t.titleAttributes = W({}, i)),
                        t)
                      );
                    case b.BODY:
                      return W({}, a, { bodyAttributes: W({}, i) });
                    case b.HTML:
                      return W({}, a, { htmlAttributes: W({}, i) });
                  }
                  return W({}, a, (((n = {})[r.type] = W({}, i)), n));
                }),
                (t.prototype.mapArrayTypeChildrenToProps = function (e, t) {
                  var n = W({}, t);
                  return (
                    Object.keys(e).forEach(function (t) {
                      var r;
                      n = W({}, n, (((r = {})[t] = e[t]), r));
                    }),
                    n
                  );
                }),
                (t.prototype.warnOnInvalidChildren = function (e, t) {
                  return !0;
                }),
                (t.prototype.mapChildrenToProps = function (e, t) {
                  var n = this,
                    r = {};
                  return (
                    m.Children.forEach(e, function (e) {
                      if (e && e.props) {
                        var a = e.props,
                          i = a.children,
                          o = (function (e) {
                            var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                            return Object.keys(e).reduce(function (t, n) {
                              return (t[R[n] || n] = e[n]), t;
                            }, t);
                          })(q(a, ["children"]));
                        switch ((n.warnOnInvalidChildren(e, i), e.type)) {
                          case b.LINK:
                          case b.META:
                          case b.NOSCRIPT:
                          case b.SCRIPT:
                          case b.STYLE:
                            r = n.flattenArrayTypeChildren({
                              child: e,
                              arrayTypeChildren: r,
                              newChildProps: o,
                              nestedChildren: i,
                            });
                            break;
                          default:
                            t = n.mapObjectTypeChildren({
                              child: e,
                              newProps: t,
                              newChildProps: o,
                              nestedChildren: i,
                            });
                        }
                      }
                    }),
                    (t = this.mapArrayTypeChildrenToProps(r, t))
                  );
                }),
                (t.prototype.render = function () {
                  var e = this.props,
                    t = e.children,
                    n = q(e, ["children"]),
                    r = W({}, n);
                  return (
                    t && (r = this.mapChildrenToProps(t, r)),
                    m.createElement(a, r)
                  );
                }),
                H(t, null, [
                  {
                    key: "canUseDOM",
                    set: function (e) {
                      a.canUseDOM = e;
                    },
                  },
                ]),
                t
              );
            })(m.Component)),
          (i.propTypes = {
            base: s().object,
            bodyAttributes: s().object,
            children: s().oneOfType([s().arrayOf(s().node), s().node]),
            defaultTitle: s().string,
            defer: s().bool,
            encodeSpecialCharacters: s().bool,
            htmlAttributes: s().object,
            link: s().arrayOf(s().object),
            meta: s().arrayOf(s().object),
            noscript: s().arrayOf(s().object),
            onChangeClientState: s().func,
            script: s().arrayOf(s().object),
            style: s().arrayOf(s().object),
            title: s().string,
            titleAttributes: s().object,
            titleTemplate: s().string,
          }),
          (i.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
          (i.peek = a.peek),
          (i.rewind = function () {
            var e = a.rewind();
            return (
              e ||
                (e = de({
                  baseTag: [],
                  bodyAttributes: {},
                  encodeSpecialCharacters: !0,
                  htmlAttributes: {},
                  linkTags: [],
                  metaTags: [],
                  noscriptTags: [],
                  scriptTags: [],
                  styleTags: [],
                  title: "",
                  titleAttributes: {},
                })),
              e
            );
          }),
          o);
      me.renderStatic = me.rewind;
    },
    6643: function (e, t, n) {
      "use strict";
      var r,
        a = n(6540),
        i = (r = a) && "object" == typeof r && "default" in r ? r.default : r;
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var l = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      e.exports = function (e, t, n) {
        if ("function" != typeof e)
          throw new Error("Expected reducePropsToState to be a function.");
        if ("function" != typeof t)
          throw new Error(
            "Expected handleStateChangeOnClient to be a function."
          );
        if (void 0 !== n && "function" != typeof n)
          throw new Error(
            "Expected mapStateOnServer to either be undefined or a function."
          );
        return function (r) {
          if ("function" != typeof r)
            throw new Error(
              "Expected WrappedComponent to be a React component."
            );
          var s,
            c = [];
          function u() {
            (s = e(
              c.map(function (e) {
                return e.props;
              })
            )),
              d.canUseDOM ? t(s) : n && (s = n(s));
          }
          var d = (function (e) {
            var t, n;
            function a() {
              return e.apply(this, arguments) || this;
            }
            (n = e),
              ((t = a).prototype = Object.create(n.prototype)),
              (t.prototype.constructor = t),
              (t.__proto__ = n),
              (a.peek = function () {
                return s;
              }),
              (a.rewind = function () {
                if (a.canUseDOM)
                  throw new Error(
                    "You may only call rewind() on the server. Call peek() to read the current state."
                  );
                var e = s;
                return (s = void 0), (c = []), e;
              });
            var o = a.prototype;
            return (
              (o.UNSAFE_componentWillMount = function () {
                c.push(this), u();
              }),
              (o.componentDidUpdate = function () {
                u();
              }),
              (o.componentWillUnmount = function () {
                var e = c.indexOf(this);
                c.splice(e, 1), u();
              }),
              (o.render = function () {
                return i.createElement(r, this.props);
              }),
              a
            );
          })(a.PureComponent);
          return (
            o(
              d,
              "displayName",
              "SideEffect(" +
                (function (e) {
                  return e.displayName || e.name || "Component";
                })(r) +
                ")"
            ),
            o(d, "canUseDOM", l),
            d
          );
        };
      };
    },
    5262: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return E;
        },
      });
      var r = n(8168),
        a = n(8587),
        i = n(5540);
      function o(e, t) {
        return e
          .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      var l = n(6540),
        s = n(961),
        c = !1,
        u = n(8640),
        d = function (e) {
          return e.scrollTop;
        },
        f = "unmounted",
        m = "exited",
        p = "entering",
        h = "entered",
        g = "exiting",
        v = (function (e) {
          function t(t, n) {
            var r;
            r = e.call(this, t, n) || this;
            var a,
              i = n && !n.isMounting ? t.enter : t.appear;
            return (
              (r.appearStatus = null),
              t.in
                ? i
                  ? ((a = m), (r.appearStatus = p))
                  : (a = h)
                : (a = t.unmountOnExit || t.mountOnEnter ? f : m),
              (r.state = { status: a }),
              (r.nextCallback = null),
              r
            );
          }
          (0, i.A)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === f ? { status: m } : null;
            });
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (n.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== p && n !== h && (t = p)
                  : (n !== p && n !== h) || (t = g);
              }
              this.updateStatus(!1, t);
            }),
            (n.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (n.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout;
              return (
                (e = t = n = r),
                null != r &&
                  "number" != typeof r &&
                  ((e = r.exit),
                  (t = r.enter),
                  (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (n.updateStatus = function (e, t) {
              if ((void 0 === e && (e = !1), null !== t))
                if ((this.cancelNextCallback(), t === p)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var n = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : s.findDOMNode(this);
                    n && d(n);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  this.state.status === m &&
                  this.setState({ status: f });
            }),
            (n.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                a = this.props.nodeRef ? [r] : [s.findDOMNode(this), r],
                i = a[0],
                o = a[1],
                l = this.getTimeouts(),
                u = r ? l.appear : l.enter;
              (!e && !n) || c
                ? this.safeSetState({ status: h }, function () {
                    t.props.onEntered(i);
                  })
                : (this.props.onEnter(i, o),
                  this.safeSetState({ status: p }, function () {
                    t.props.onEntering(i, o),
                      t.onTransitionEnd(u, function () {
                        t.safeSetState({ status: h }, function () {
                          t.props.onEntered(i, o);
                        });
                      });
                  }));
            }),
            (n.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : s.findDOMNode(this);
              t && !c
                ? (this.props.onExit(r),
                  this.safeSetState({ status: g }, function () {
                    e.props.onExiting(r),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: m }, function () {
                          e.props.onExited(r);
                        });
                      });
                  }))
                : this.safeSetState({ status: m }, function () {
                    e.props.onExited(r);
                  });
            }),
            (n.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (n.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (n.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (n.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : s.findDOMNode(this),
                r = null == e && !this.props.addEndListener;
              if (n && !r) {
                if (this.props.addEndListener) {
                  var a = this.props.nodeRef
                      ? [this.nextCallback]
                      : [n, this.nextCallback],
                    i = a[0],
                    o = a[1];
                  this.props.addEndListener(i, o);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (n.render = function () {
              var e = this.state.status;
              if (e === f) return null;
              var t = this.props,
                n = t.children,
                r =
                  (t.in,
                  t.mountOnEnter,
                  t.unmountOnExit,
                  t.appear,
                  t.enter,
                  t.exit,
                  t.timeout,
                  t.addEndListener,
                  t.onEnter,
                  t.onEntering,
                  t.onEntered,
                  t.onExit,
                  t.onExiting,
                  t.onExited,
                  t.nodeRef,
                  (0, a.A)(t, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return l.createElement(
                u.A.Provider,
                { value: null },
                "function" == typeof n
                  ? n(e, r)
                  : l.cloneElement(l.Children.only(n), r)
              );
            }),
            t
          );
        })(l.Component);
      function x() {}
      (v.contextType = u.A),
        (v.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: x,
          onEntering: x,
          onEntered: x,
          onExit: x,
          onExiting: x,
          onExited: x,
        }),
        (v.UNMOUNTED = f),
        (v.EXITED = m),
        (v.ENTERING = p),
        (v.ENTERED = h),
        (v.EXITING = g);
      var b = v,
        y = function (e, t) {
          return (
            e &&
            t &&
            t.split(" ").forEach(function (t) {
              return (
                (r = t),
                void ((n = e).classList
                  ? n.classList.remove(r)
                  : "string" == typeof n.className
                  ? (n.className = o(n.className, r))
                  : n.setAttribute(
                      "class",
                      o((n.className && n.className.baseVal) || "", r)
                    ))
              );
              var n, r;
            })
          );
        },
        w = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), a = 0;
              a < n;
              a++
            )
              r[a] = arguments[a];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).appliedClasses =
                { appear: {}, enter: {}, exit: {} }),
              (t.onEnter = function (e, n) {
                var r = t.resolveArguments(e, n),
                  a = r[0],
                  i = r[1];
                t.removeClasses(a, "exit"),
                  t.addClass(a, i ? "appear" : "enter", "base"),
                  t.props.onEnter && t.props.onEnter(e, n);
              }),
              (t.onEntering = function (e, n) {
                var r = t.resolveArguments(e, n),
                  a = r[0],
                  i = r[1] ? "appear" : "enter";
                t.addClass(a, i, "active"),
                  t.props.onEntering && t.props.onEntering(e, n);
              }),
              (t.onEntered = function (e, n) {
                var r = t.resolveArguments(e, n),
                  a = r[0],
                  i = r[1] ? "appear" : "enter";
                t.removeClasses(a, i),
                  t.addClass(a, i, "done"),
                  t.props.onEntered && t.props.onEntered(e, n);
              }),
              (t.onExit = function (e) {
                var n = t.resolveArguments(e)[0];
                t.removeClasses(n, "appear"),
                  t.removeClasses(n, "enter"),
                  t.addClass(n, "exit", "base"),
                  t.props.onExit && t.props.onExit(e);
              }),
              (t.onExiting = function (e) {
                var n = t.resolveArguments(e)[0];
                t.addClass(n, "exit", "active"),
                  t.props.onExiting && t.props.onExiting(e);
              }),
              (t.onExited = function (e) {
                var n = t.resolveArguments(e)[0];
                t.removeClasses(n, "exit"),
                  t.addClass(n, "exit", "done"),
                  t.props.onExited && t.props.onExited(e);
              }),
              (t.resolveArguments = function (e, n) {
                return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
              }),
              (t.getClassNames = function (e) {
                var n = t.props.classNames,
                  r = "string" == typeof n,
                  a = r ? "" + (r && n ? n + "-" : "") + e : n[e];
                return {
                  baseClassName: a,
                  activeClassName: r ? a + "-active" : n[e + "Active"],
                  doneClassName: r ? a + "-done" : n[e + "Done"],
                };
              }),
              t
            );
          }
          (0, i.A)(t, e);
          var n = t.prototype;
          return (
            (n.addClass = function (e, t, n) {
              var r = this.getClassNames(t)[n + "ClassName"],
                a = this.getClassNames("enter").doneClassName;
              "appear" === t && "done" === n && a && (r += " " + a),
                "active" === n && e && d(e),
                r &&
                  ((this.appliedClasses[t][n] = r),
                  (function (e, t) {
                    e &&
                      t &&
                      t.split(" ").forEach(function (t) {
                        return (
                          (r = t),
                          void ((n = e).classList
                            ? n.classList.add(r)
                            : (function (e, t) {
                                return e.classList
                                  ? !!t && e.classList.contains(t)
                                  : -1 !==
                                      (
                                        " " +
                                        (e.className.baseVal || e.className) +
                                        " "
                                      ).indexOf(" " + t + " ");
                              })(n, r) ||
                              ("string" == typeof n.className
                                ? (n.className = n.className + " " + r)
                                : n.setAttribute(
                                    "class",
                                    ((n.className && n.className.baseVal) ||
                                      "") +
                                      " " +
                                      r
                                  )))
                        );
                        var n, r;
                      });
                  })(e, r));
            }),
            (n.removeClasses = function (e, t) {
              var n = this.appliedClasses[t],
                r = n.base,
                a = n.active,
                i = n.done;
              (this.appliedClasses[t] = {}),
                r && y(e, r),
                a && y(e, a),
                i && y(e, i);
            }),
            (n.render = function () {
              var e = this.props,
                t = (e.classNames, (0, a.A)(e, ["classNames"]));
              return l.createElement(
                b,
                (0, r.A)({}, t, {
                  onEnter: this.onEnter,
                  onEntered: this.onEntered,
                  onEntering: this.onEntering,
                  onExit: this.onExit,
                  onExiting: this.onExiting,
                  onExited: this.onExited,
                })
              );
            }),
            t
          );
        })(l.Component);
      w.defaultProps = { classNames: "" };
      var E = w;
    },
    6181: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return m;
        },
      });
      var r = n(8587),
        a = n(8168);
      var i = n(5540),
        o = n(6540),
        l = n(8640);
      function s(e, t) {
        var n = Object.create(null);
        return (
          e &&
            o.Children.map(e, function (e) {
              return e;
            }).forEach(function (e) {
              n[e.key] = (function (e) {
                return t && (0, o.isValidElement)(e) ? t(e) : e;
              })(e);
            }),
          n
        );
      }
      function c(e, t, n) {
        return null != n[t] ? n[t] : e.props[t];
      }
      function u(e, t, n) {
        var r = s(e.children),
          a = (function (e, t) {
            function n(n) {
              return n in t ? t[n] : e[n];
            }
            (e = e || {}), (t = t || {});
            var r,
              a = Object.create(null),
              i = [];
            for (var o in e)
              o in t ? i.length && ((a[o] = i), (i = [])) : i.push(o);
            var l = {};
            for (var s in t) {
              if (a[s])
                for (r = 0; r < a[s].length; r++) {
                  var c = a[s][r];
                  l[a[s][r]] = n(c);
                }
              l[s] = n(s);
            }
            for (r = 0; r < i.length; r++) l[i[r]] = n(i[r]);
            return l;
          })(t, r);
        return (
          Object.keys(a).forEach(function (i) {
            var l = a[i];
            if ((0, o.isValidElement)(l)) {
              var s = i in t,
                u = i in r,
                d = t[i],
                f = (0, o.isValidElement)(d) && !d.props.in;
              !u || (s && !f)
                ? u || !s || f
                  ? u &&
                    s &&
                    (0, o.isValidElement)(d) &&
                    (a[i] = (0, o.cloneElement)(l, {
                      onExited: n.bind(null, l),
                      in: d.props.in,
                      exit: c(l, "exit", e),
                      enter: c(l, "enter", e),
                    }))
                  : (a[i] = (0, o.cloneElement)(l, { in: !1 }))
                : (a[i] = (0, o.cloneElement)(l, {
                    onExited: n.bind(null, l),
                    in: !0,
                    exit: c(l, "exit", e),
                    enter: c(l, "enter", e),
                  }));
            }
          }),
          a
        );
      }
      var d =
          Object.values ||
          function (e) {
            return Object.keys(e).map(function (t) {
              return e[t];
            });
          },
        f = (function (e) {
          function t(t, n) {
            var r,
              a = (r = e.call(this, t, n) || this).handleExited.bind(
                (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(r)
              );
            return (
              (r.state = {
                contextValue: { isMounting: !0 },
                handleExited: a,
                firstRender: !0,
              }),
              r
            );
          }
          (0, i.A)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              (this.mounted = !0),
                this.setState({ contextValue: { isMounting: !1 } });
            }),
            (n.componentWillUnmount = function () {
              this.mounted = !1;
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              var n,
                r,
                a = t.children,
                i = t.handleExited;
              return {
                children: t.firstRender
                  ? ((n = e),
                    (r = i),
                    s(n.children, function (e) {
                      return (0,
                      o.cloneElement)(e, { onExited: r.bind(null, e), in: !0, appear: c(e, "appear", n), enter: c(e, "enter", n), exit: c(e, "exit", n) });
                    }))
                  : u(e, a, i),
                firstRender: !1,
              };
            }),
            (n.handleExited = function (e, t) {
              var n = s(this.props.children);
              e.key in n ||
                (e.props.onExited && e.props.onExited(t),
                this.mounted &&
                  this.setState(function (t) {
                    var n = (0, a.A)({}, t.children);
                    return delete n[e.key], { children: n };
                  }));
            }),
            (n.render = function () {
              var e = this.props,
                t = e.component,
                n = e.childFactory,
                a = (0, r.A)(e, ["component", "childFactory"]),
                i = this.state.contextValue,
                s = d(this.state.children).map(n);
              return (
                delete a.appear,
                delete a.enter,
                delete a.exit,
                null === t
                  ? o.createElement(l.A.Provider, { value: i }, s)
                  : o.createElement(
                      l.A.Provider,
                      { value: i },
                      o.createElement(t, a, s)
                    )
              );
            }),
            t
          );
        })(o.Component);
      f.defaultProps = {
        component: "div",
        childFactory: function (e) {
          return e;
        },
      };
      var m = f;
    },
    8640: function (e, t, n) {
      "use strict";
      var r = n(6540);
      t.A = r.createContext(null);
    },
    3208: function (e, t, n) {
      "use strict";
      n.d(t, {
        In: function () {
          return u;
        },
        Wk: function () {
          return a;
        },
        Ed: function () {
          return i;
        },
        SE: function () {
          return o;
        },
        fq: function () {
          return l;
        },
        AR: function () {
          return s;
        },
        kh: function () {
          return c;
        },
        tx: function () {
          return d;
        },
        Xz: function () {
          return f;
        },
        Y3: function () {
          return m;
        },
        US: function () {
          return p;
        },
        x3: function () {
          return h;
        },
        H_: function () {
          return g;
        },
        zW: function () {
          return v;
        },
        aG: function () {
          return x;
        },
        fO: function () {
          return b;
        },
      });
      var r = n(6540);
      var a = () =>
        r.createElement(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 512 512",
            xmlSpace: "preserve",
          },
          r.createElement("title", null, "Apple App Store"),
          r.createElement(
            "g",
            null,
            r.createElement(
              "g",
              null,
              r.createElement("path", {
                d: "M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105\r C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302\r c41.355,0,75,33.645,75,75V407z",
              })
            )
          ),
          r.createElement(
            "g",
            null,
            r.createElement(
              "g",
              null,
              r.createElement("path", {
                d: "M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166\r l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664\r L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498\r C306.487,136.719,307.375,129.981,305.646,123.531z",
              })
            )
          ),
          r.createElement(
            "g",
            null,
            r.createElement(
              "g",
              null,
              r.createElement("path", {
                d: "M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65\r c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341\r H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z",
              })
            )
          ),
          r.createElement(
            "g",
            null,
            r.createElement(
              "g",
              null,
              r.createElement("path", {
                d: "M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344\r c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z",
              })
            )
          )
        );
      var i = () =>
        r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "feather feather-bookmark",
          },
          r.createElement("title", null, "Bookmark"),
          r.createElement("path", {
            d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
          })
        );
      var o = () =>
        r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            role: "img",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "feather feather-codepen",
          },
          r.createElement("title", null, "CodePen"),
          r.createElement("polygon", {
            points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",
          }),
          r.createElement("line", { x1: "12", y1: "22", x2: "12", y2: "15.5" }),
          r.createElement("polyline", { points: "22 8.5 12 15.5 2 8.5" }),
          r.createElement("polyline", { points: "2 15.5 12 8.5 22 15.5" }),
          r.createElement("line", { x1: "12", y1: "2", x2: "12", y2: "8.5" })
        );
      var l = () =>
        r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            role: "img",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "feather feather-external-link",
          },
          r.createElement("title", null, "External Link"),
          r.createElement("path", {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
          }),
          r.createElement("polyline", { points: "15 3 21 3 21 9" }),
          r.createElement("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
        );
      var s = () =>
        r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            role: "img",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "feather feather-folder",
          },
          r.createElement("title", null, "Folder"),
          r.createElement("path", {
            d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
          })
        );
      var c = () =>
        r.createElement(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "feather feather-git-branch",
          },
          r.createElement("title", null, "Git Fork"),
          r.createElement("line", { x1: "6", y1: "3", x2: "6", y2: "15" }),
          r.createElement("circle", { cx: "18", cy: "6", r: "3" }),
          r.createElement("circle", { cx: "6", cy: "18", r: "3" }),
          r.createElement("path", { d: "M18 9a9 9 0 0 1-9 9" })
        );
      var u = (e) => {
        let { name: t } = e;
        switch (t) {
          case "AppStore":
            return r.createElement(a, null);
          case "Bookmark":
            return r.createElement(i, null);
          case "Codepen":
            return r.createElement(o, null);
          case "External":
          default:
            return r.createElement(l, null);
          case "Folder":
            return r.createElement(s, null);
          case "Fork":
            return r.createElement(c, null);
          case "GitHub":
            return r.createElement(d, null);
          case "Instagram":
            return r.createElement(m, null);
          case "Linkedin":
            return r.createElement(p, null);
          case "Loader":
            return r.createElement(h, null);
          case "Logo":
            return r.createElement(g, null);
          case "PlayStore":
            return r.createElement(v, null);
          case "Star":
            return r.createElement(x, null);
          case "Twitter":
            return r.createElement(b, null);
        }
      };
      var d = () =>
        r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            role: "img",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "feather feather-github",
          },
          r.createElement("title", null, "GitHub"),
          r.createElement("path", {
            d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
          })
        );
      var f = () =>
        r.createElement(
          "svg",
          {
            id: "hex",
            xmlns: "http://www.w3.org/2000/svg",
            role: "img",
            viewBox: "0 0 84 96",
          },
          r.createElement("title", null, "Hexagon"),
          r.createElement(
            "g",
            { transform: "translate(-8.000000, -2.000000)" },
            r.createElement(
              "g",
              { transform: "translate(11.000000, 5.000000)" },
              r.createElement("polygon", {
                stroke: "currentColor",
                strokeWidth: "5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                points: "39 0 0 22 0 67 39 90 78 68 78 23",
                fill: "currentColor",
              })
            )
          )
        );
      var m = () =>
        r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            role: "img",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "feather feather-instagram",
          },
          r.createElement("title", null, "Instagram"),
          r.createElement("rect", {
            x: "2",
            y: "2",
            width: "20",
            height: "20",
            rx: "5",
            ry: "5",
          }),
          r.createElement("path", {
            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
          }),
          r.createElement("line", {
            x1: "17.5",
            y1: "6.5",
            x2: "17.51",
            y2: "6.5",
          })
        );
      var p = () =>
        r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            role: "img",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "feather feather-linkedin",
          },
          r.createElement("title", null, "LinkedIn"),
          r.createElement("path", {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
          }),
          r.createElement("rect", { x: "2", y: "9", width: "4", height: "12" }),
          r.createElement("circle", { cx: "4", cy: "4", r: "2" })
        );
      var h = () =>
        r.createElement(
          "svg",
          {
            id: "logo",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 100 100",
          },
          r.createElement("title", null, "Loader Logo"),
          r.createElement(
            "g",
            null,
            r.createElement(
              "g",
              { id: "B", transform: "translate(11.000000, 5.000000)" },
              r.createElement("path", {
                d: "M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z",
                fill: "currentColor",
              })
            ),
            r.createElement("path", {
              stroke: "currentColor",
              strokeWidth: "5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M 50, 5\r L 11, 27\r L 11, 72\r L 50, 95\r L 89, 73\r L 89, 28 z",
            })
          )
        );
      var g = () =>
        r.createElement(
          "svg",
          {
            id: "logo",
            xmlns: "http://www.w3.org/2000/svg",
            role: "img",
            viewBox: "0 0 84 96",
          },
          r.createElement("title", null, "Logo"),
          r.createElement(
            "g",
            { transform: "translate(-8.000000, -2.000000)" },
            r.createElement(
              "g",
              { transform: "translate(11.000000, 5.000000)" },
              r.createElement("polygon", {
                id: "Shape",
                stroke: "currentColor",
                strokeWidth: "5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                points: "39 0 0 22 0 67 39 90 78 68 78 23",
              }),
              r.createElement("path", {
                d: "M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z",
                fill: "currentColor",
              })
            )
          )
        );
      var v = () =>
        r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            role: "img",
            x: "0px",
            y: "0px",
            viewBox: "0 0 512.001 512.001",
          },
          r.createElement("title", null, "Google Play Store"),
          r.createElement("path", {
            d: "M464.252,212.09L99.624,8.07C84.247-1.873,64.754-2.691,48.574,5.967C32.183,14.74,22,31.737,22,50.329v411.342\r c0,18.592,10.183,35.59,26.573,44.361c16.097,8.617,35.593,7.891,51.052-2.101l364.628-204.022\r c16.121-9.02,25.747-25.435,25.747-43.908C490,237.527,480.374,221.111,464.252,212.09z M341.677,181.943l-50.339,50.339\r L113.108,54.051L341.677,181.943z M55.544,467.323V44.676L267.621,256L55.544,467.323z M113.108,457.949l178.232-178.231\r l50.339,50.339L113.108,457.949z M447.874,270.637l-75.779,42.401l-57.038-57.037l57.037-57.037l75.778,42.4\r c7.746,4.335,8.583,11.68,8.583,14.637C456.455,258.958,455.62,266.302,447.874,270.637z",
          })
        );
      var x = () =>
        r.createElement(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "feather feather-star",
          },
          r.createElement("title", null, "Star"),
          r.createElement("polygon", {
            points:
              "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
          })
        );
      var b = () =>
        r.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            role: "img",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "feather feather-twitter",
          },
          r.createElement("title", null, "Twitter"),
          r.createElement("path", {
            d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
          })
        );
    },
    7182: function (e, t, n) {
      "use strict";
      n.d(t, {
        Im: function () {
          return Et;
        },
        Bv: function () {
          return Rt;
        },
        Ps: function () {
          return ut;
        },
        Hi: function () {
          return zt;
        },
        wi: function () {
          return pt;
        },
        p3: function () {
          return s;
        },
        lq: function () {
          return gt;
        },
        XP: function () {
          return jt;
        },
        PE: function () {
          return _;
        },
        aH: function () {
          return Ye;
        },
        W1: function () {
          return at;
        },
        so: function () {
          return Je;
        },
        Jt: function () {
          return Pt;
        },
        mn: function () {
          return ot;
        },
        Gz: function () {
          return st;
        },
      });
      var r = n(6540),
        a = n(3673),
        i = n(5702),
        o = n(1015);
      const l = (e) => {
        let { title: t, description: n, image: l } = e;
        const { pathname: s } = (0, i.useLocation)(),
          { site: c } = (0, o.useStaticQuery)("1994492073"),
          {
            defaultTitle: u,
            defaultDescription: d,
            siteUrl: f,
            defaultImage: m,
            twitterUsername: p,
          } = c.siteMetadata,
          h = {
            title: t || u,
            description: n || d,
            image: "" + f + (l || m),
            url: "" + f + s,
          };
        return r.createElement(
          a.m,
          { title: t, defaultTitle: h.title, titleTemplate: "%s | " + u },
          r.createElement("html", { lang: "en" }),
          r.createElement("meta", {
            name: "description",
            content: h.description,
          }),
          r.createElement("meta", { name: "image", content: h.image }),
          r.createElement("meta", { property: "og:title", content: h.title }),
          r.createElement("meta", {
            property: "og:description",
            content: h.description,
          }),
          r.createElement("meta", { property: "og:image", content: h.image }),
          r.createElement("meta", { property: "og:url", content: h.url }),
          r.createElement("meta", { property: "og:type", content: "website" }),
          r.createElement("meta", {
            name: "twitter:card",
            content: "summary_large_image",
          }),
          r.createElement("meta", { name: "twitter:creator", content: p }),
          r.createElement("meta", { name: "twitter:title", content: h.title }),
          r.createElement("meta", {
            name: "twitter:description",
            content: h.description,
          }),
          r.createElement("meta", { name: "twitter:image", content: h.image }),
          r.createElement("meta", {
            name: "google-site-verification",
            content: "DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk",
          })
        );
      };
      var s = l;
      l.defaultProps = { title: null, description: null, image: null };
      var c = n(7859);
      const u = (0, c.css)([
        "color:var(--green);background-color:transparent;border:1px solid var(--green);border-radius:var(--border-radius);font-size:var(--fz-xs);font-family:var(--font-mono);line-height:1;text-decoration:none;padding:1.25rem 1.75rem;transition:var(--transition);&:hover,&:focus-visible{outline:none;box-shadow:4px 4px 0 0 var(--green);transform:translate(-5px,-5px);}&:after{display:none !important;}",
      ]);
      var d = {
        bp: {
          mobileS: "max-width: 330px",
          mobileM: "max-width: 400px",
          mobileL: "max-width: 480px",
          tabletS: "max-width: 600px",
          tabletL: "max-width: 768px",
          desktopXS: "max-width: 900px",
          desktopS: "max-width: 1080px",
          desktopM: "max-width: 1200px",
          desktopL: "max-width: 1400px",
        },
        mixins: {
          flexCenter: (0, c.css)([
            "display:flex;justify-content:center;align-items:center;",
          ]),
          flexBetween: (0, c.css)([
            "display:flex;justify-content:space-between;align-items:center;",
          ]),
          link: (0, c.css)([
            "display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;color:inherit;position:relative;transition:var(--transition);&:hover,&:focus-visible{color:var(--green);outline:0;}",
          ]),
          inlineLink: (0, c.css)([
            "display:inline-block;position:relative;color:var(--green);transition:var(--transition);&:hover,&:focus-visible{color:var(--green);outline:0;&:after{width:100%;}& > *{color:var(--green) !important;transition:var(--transition);}}&:after{content:'';display:block;width:0;height:1px;position:relative;bottom:0.37em;background-color:var(--green);opacity:0.5;@media (prefers-reduced-motion:no-preference){transition:var(--transition);}}",
          ]),
          button: u,
          smallButton: (0, c.css)([
            "color:var(--green);background-color:transparent;border:1px solid var(--green);border-radius:var(--border-radius);padding:0.75rem 1rem;font-size:var(--fz-xs);font-family:var(--font-mono);line-height:1;text-decoration:none;transition:var(--transition);&:hover,&:focus-visible{outline:none;box-shadow:3px 3px 0 0 var(--green);transform:translate(-4px,-4px);}&:after{display:none !important;}",
          ]),
          bigButton: (0, c.css)([
            "color:var(--green);background-color:transparent;border:1px solid var(--green);border-radius:var(--border-radius);padding:1.25rem 1.75rem;font-size:var(--fz-sm);font-family:var(--font-mono);line-height:1;text-decoration:none;transition:var(--transition);&:hover,&:focus-visible{outline:none;box-shadow:4px 4px 0 0 var(--green);transform:translate(-5px,-5px);}&:after{display:none !important;}",
          ]),
          boxShadow: (0, c.css)([
            "box-shadow:0 10px 30px -15px var(--navy-shadow);transition:var(--transition);&:hover,&:focus-visible{box-shadow:0 20px 30px -15px var(--navy-shadow);}",
          ]),
          fancyList: (0, c.css)([
            "padding:0;margin:0;list-style:none;font-size:var(--fz-lg);li{position:relative;padding-left:30px;margin-bottom:10px;&:before{content:'▹';position:absolute;left:0;color:var(--green);}}",
          ]),
          resetList: (0, c.css)(["list-style:none;padding:0;margin:0;"]),
        },
      };
      const f = {
          name: "Calibre",
          normal: {
            400: [
              n.p +
                "static/Calibre-Regular-98526589fa32315c552129869e08427e.woff",
              n.p +
                "static/Calibre-Regular-b0d4cbb1201155ddccc21d1b8059a670.woff2",
            ],
            500: [
              n.p +
                "static/Calibre-Medium-46693d9b57a6b8a657b5393258f6e899.woff",
              n.p +
                "static/Calibre-Medium-568dce56f869a519a015d3b69443b067.woff2",
            ],
            600: [
              n.p +
                "static/Calibre-Semibold-6972688a249bd53a6c7e69a89e50cdd6.woff",
              n.p +
                "static/Calibre-Semibold-94fc73852539d6733dc0d80252c5e3fb.woff2",
            ],
          },
          italic: {
            400: [
              n.p +
                "static/Calibre-RegularItalic-57371b9e514dbbe9da31dad1a298de2d.woff",
              n.p +
                "static/Calibre-RegularItalic-5f875bd7b669f1e11b622d4d6d71b5b0.woff2",
            ],
            500: [
              n.p +
                "static/Calibre-MediumItalic-aa285f95879aa2c2d26b228d5e422da6.woff",
              n.p +
                "static/Calibre-MediumItalic-7aa140573fd9ed30ae01e117c418b12b.woff2",
            ],
            600: [
              n.p +
                "static/Calibre-SemiboldItalic-ad4bd95abee7bca1bdd6a93398f84a04.woff",
              n.p +
                "static/Calibre-SemiboldItalic-5f04bffe7ce988169806d66e417a966a.woff2",
            ],
          },
        },
        m = {
          name: "SF Mono",
          normal: {
            400: [
              n.p +
                "static/SFMono-Regular-e36fa5257c93fc7711eae342068f9eda.woff",
              n.p +
                "static/SFMono-Regular-8799e6387338d58f2f137df821c86eb4.woff2",
            ],
            600: [
              n.p +
                "static/SFMono-Semibold-ee054046915420413d0068fb1e7105c3.woff",
              n.p +
                "static/SFMono-Semibold-6e6f6c93f4bdf9cbd090c60e97a017e2.woff2",
            ],
          },
          italic: {
            400: [
              n.p +
                "static/SFMono-RegularItalic-3a20a00dfdeb4ba538473fa7bf625cbd.woff",
              n.p +
                "static/SFMono-RegularItalic-a596917f86217b40000ff1b894cd0e52.woff2",
            ],
            600: [
              n.p +
                "static/SFMono-SemiboldItalic-10eb596e904940cd1aebb2cc6286015c.woff",
              n.p +
                "static/SFMono-SemiboldItalic-9a0ae6382e12c5e28a7342ffb41cf4da.woff2",
            ],
          },
        },
        p = function (e, t) {
          void 0 === t && (t = "normal");
          let n = "";
          for (const [r, a] of Object.entries(e[t])) {
            const i = a[0],
              o = a[1];
            n +=
              "\n      @font-face {\n        font-family: '" +
              e.name +
              "';\n        src: url(" +
              o +
              ") format('woff2'),\n            url(" +
              i +
              ") format('woff');\n        font-weight: " +
              r +
              ";\n        font-style: " +
              t +
              ";\n        font-display: auto;\n      }\n    ";
          }
          return n;
        },
        h = p(f),
        g = p(f, "italic"),
        v = p(m),
        x = p(m, "italic");
      var b = (0, c.css)(["", ""], h + g + v + x);
      var y = (0, c.css)([
        ":root{--dark-navy:#020c1b;--navy:#0a192f;--light-navy:#112240;--lightest-navy:#233554;--navy-shadow:rgba(2,12,27,0.7);--dark-slate:#495670;--slate:#8892b0;--light-slate:#a8b2d1;--lightest-slate:#ccd6f6;--white:#e6f1ff;--green:#64ffda;--green-tint:rgba(100,255,218,0.1);--pink:#f57dff;--blue:#57cbff;--font-sans:'Calibre','Inter','San Francisco','SF Pro Text',-apple-system,system-ui,sans-serif;--font-mono:'SF Mono','Fira Code','Fira Mono','Roboto Mono',monospace;--fz-xxs:12px;--fz-xs:13px;--fz-sm:14px;--fz-md:16px;--fz-lg:18px;--fz-xl:20px;--fz-xxl:22px;--fz-heading:32px;--border-radius:4px;--nav-height:100px;--nav-scroll-height:70px;--tab-height:42px;--tab-width:120px;--easing:cubic-bezier(0.645,0.045,0.355,1);--transition:all 0.25s cubic-bezier(0.645,0.045,0.355,1);--hamburger-width:30px;--ham-before:top 0.1s ease-in 0.25s,opacity 0.1s ease-in;--ham-before-active:top 0.1s ease-out,opacity 0.1s ease-out 0.12s;--ham-after:bottom 0.1s ease-in 0.25s,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);--ham-after-active:bottom 0.1s ease-out,transform 0.22s cubic-bezier(0.215,0.61,0.355,1) 0.12s;}",
      ]);
      var w = (0, c.css)([
        ".fadeup-enter{opacity:0.01;transform:translateY(20px);transition:opacity 300ms var(--easing),transform 300ms var(--easing);}.fadeup-enter-active{opacity:1;transform:translateY(0px);transition:opacity 300ms var(--easing),transform 300ms var(--easing);}.fadedown-enter{opacity:0.01;transform:translateY(-20px);transition:opacity 300ms var(--easing),transform 300ms var(--easing);}.fadedown-enter-active{opacity:1;transform:translateY(0px);transition:opacity 300ms var(--easing),transform 300ms var(--easing);}.fade-enter{opacity:0;}.fade-enter-active{opacity:1;transition:opacity 300ms var(--easing);}.fade-exit{opacity:1;}.fade-exit-active{opacity:0;transition:opacity 300ms var(--easing);}",
      ]);
      const E = "#112340",
        k = "#1d2d50",
        C = "#5ccfe6",
        S = "#c3a6ff",
        T = "#bae67e",
        L = "#ffd580",
        A = "#ffae57",
        j = "#ef6b73",
        N = "#a2aabc",
        O = "#8695b799";
      var z = (0, c.css)(
        [
          ".gatsby-highlight{background-color:",
          ";color:",
          ";border-radius:var(--border-radius);margin:2em 0;padding:1.25em;overflow:auto;position:relative;font-family:var(--font-mono);font-size:var(--fz-md);}.gatsby-highlight code[class*='language-'],.gatsby-highlight pre[class*='language-']{height:auto !important;font-size:var(--fz-sm);line-height:1.5;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;tab-size:2;hyphens:none;}.gatsby-highlight pre[class*='language-']{background-color:transparent;margin:0;padding:0;overflow:initial;float:left;min-width:100%;padding-top:2em;}.gatsby-code-title{padding:1em 1.5em;font-family:var(--font-mono);font-size:var(--fz-xs);background-color:",
          ";color:",
          ";border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom:1px solid ",
          ";& + .gatsby-highlight{margin-top:0;border-top-left-radius:0;border-top-right-radius:0;}}.gatsby-highlight-code-line{display:block;background-color:",
          ";border-left:2px solid var(--green);padding-left:calc(1em + 2px);padding-right:1em;margin-right:-1.35em;margin-left:-1.35em;}.gatsby-highlight pre[class*='language-']::before{background:var(--lightest-navy);color:var(--white);font-size:var(--fz-xxs);font-family:var(--font-mono);line-height:1.5;letter-spacing:0.1em;text-transform:uppercase;border-radius:0 0 3px 3px;position:absolute;top:0;left:1.25rem;padding:0.25rem 0.5rem;}.gatsby-highlight pre[class='language-javascript']::before{content:'js';}.gatsby-highlight pre[class='language-js']::before{content:'js';}.gatsby-highlight pre[class='language-jsx']::before{content:'jsx';}.gatsby-highlight pre[class='language-graphql']::before{content:'GraphQL';}.gatsby-highlight pre[class='language-html']::before{content:'html';}.gatsby-highlight pre[class='language-css']::before{content:'css';}.gatsby-highlight pre[class='language-mdx']::before{content:'mdx';}.gatsby-highlight pre[class='language-shell']::before{content:'shell';}.gatsby-highlight pre[class='language-sh']::before{content:'sh';}.gatsby-highlight pre[class='language-bash']::before{content:'bash';}.gatsby-highlight pre[class='language-yaml']::before{content:'yaml';}.gatsby-highlight pre[class='language-markdown']::before{content:'md';}.gatsby-highlight pre[class='language-json']::before,.gatsby-highlight pre[class='language-json5']::before{content:'json';}.gatsby-highlight pre[class='language-diff']::before{content:'diff';}.gatsby-highlight pre[class='language-text']::before{content:'text';}.gatsby-highlight pre[class='language-flow']::before{content:'flow';}.token{display:inline;}.token.comment,.token.block-comment,.token.prolog,.token.doctype,.token.cdata{color:",
          ";}.token.punctuation{color:",
          ";}.token.namespace,.token.deleted{color:",
          ";}.token.function-name,.token.function,.token.class-name,.token.constant,.token.symbol{color:",
          ";}.token.attr-name,.token.operator,.token.rule{color:",
          ";}.token.keyword,.token.boolean,.token.number,.token.property{color:",
          ";}.token.tag,.token.selector,.token.important,.token.atrule,.token.builtin,.token.entity,.token.url{color:",
          ";}.token.string,.token.char,.token.attr-value,.token.regex,.token.variable,.token.inserted{color:",
          ";}.token.important,.token.bold{font-weight:600;}.token.italic{font-style:italic;}.token.entity{cursor:help;}.namespace{opacity:0.7;}",
        ],
        E,
        N,
        E,
        N,
        k,
        k,
        O,
        N,
        j,
        L,
        A,
        S,
        C,
        T
      );
      const I = (0, c.createGlobalStyle)(
        [
          "",
          ";",
          ";html{box-sizing:border-box;width:100%;scroll-behavior:smooth;}*,*:before,*:after{box-sizing:inherit;}::selection{background-color:var(--lightest-navy);color:var(--lightest-slate);}:focus{outline:2px dashed var(--green);outline-offset:3px;}:focus:not(:focus-visible){outline:none;outline-offset:0px;}:focus-visible{outline:2px dashed var(--green);outline-offset:3px;}html{scrollbar-width:thin;scrollbar-color:var(--dark-slate) var(--navy);}::-webkit-scrollbar{width:12px;}::-webkit-scrollbar-track{background:var(--navy);}::-webkit-scrollbar-thumb{background-color:var(--dark-slate);border:3px solid var(--navy);border-radius:10px;}body{margin:0;width:100%;min-height:100%;overflow-x:hidden;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;background-color:var(--navy);color:var(--slate);font-family:var(--font-sans);font-size:var(--fz-xl);line-height:1.3;@media (max-width:480px){font-size:var(--fz-lg);}&.hidden{overflow:hidden;}&.blur{overflow:hidden;header{background-color:transparent;}#content > *{filter:blur(5px) brightness(0.7);transition:var(--transition);pointer-events:none;user-select:none;}}}#root{min-height:100vh;display:grid;grid-template-rows:1fr auto;grid-template-columns:100%;}main{margin:0 auto;width:100%;max-width:1600px;min-height:100vh;padding:200px 150px;@media (max-width:1080px){padding:200px 100px;}@media (max-width:768px){padding:150px 50px;}@media (max-width:480px){padding:125px 25px;}&.fillHeight{padding:0 150px;@media (max-width:1080px){padding:0 100px;}@media (max-width:768px){padding:0 50px;}@media (max-width:480px){padding:0 25px;}}}section{margin:0 auto;padding:100px 0;max-width:1000px;@media (max-width:768px){padding:80px 0;}@media (max-width:480px){padding:60px 0;}}h1,h2,h3,h4,h5,h6{margin:0 0 10px 0;font-weight:600;color:var(--lightest-slate);line-height:1.1;}.big-heading{margin:0;font-size:clamp(40px,8vw,80px);}.medium-heading{margin:0;font-size:clamp(40px,8vw,60px);}.numbered-heading{display:flex;align-items:center;position:relative;margin:10px 0 40px;width:100%;font-size:clamp(26px,5vw,var(--fz-heading));white-space:nowrap;&:before{position:relative;bottom:4px;counter-increment:section;content:'0' counter(section) '.';margin-right:10px;color:var(--green);font-family:var(--font-mono);font-size:clamp(var(--fz-md),3vw,var(--fz-xl));font-weight:400;@media (max-width:480px){margin-bottom:-3px;margin-right:5px;}}&:after{content:'';display:block;position:relative;top:-5px;width:300px;height:1px;margin-left:20px;background-color:var(--lightest-navy);@media (max-width:1080px){width:200px;}@media (max-width:768px){width:100%;}@media (max-width:600px){margin-left:10px;}}}img,svg,.gatsby-image-wrapper{width:100%;max-width:100%;vertical-align:middle;}img[alt=\"\"],img:not([alt]){filter:blur(5px);}svg{width:100%;height:100%;fill:currentColor;vertical-align:middle;&.feather{fill:none;}}a{display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;color:inherit;position:relative;transition:var(--transition);&:hover,&:focus{color:var(--green);}&.inline-link{",
          ";}}button{cursor:pointer;border:0;border-radius:0;}input,textarea{border-radius:0;outline:0;&:focus{outline:0;}&:focus,&:active{&::placeholder{opacity:0.5;}}}p{margin:0 0 15px 0;&:last-child,&:last-of-type{margin:0;}& > a{",
          ";}& > code{background-color:var(--light-navy);color:var(--white);font-size:var(--fz-sm);border-radius:var(--border-radius);padding:0.3em 0.5em;}}ul{&.fancy-list{padding:0;margin:0;list-style:none;font-size:var(--fz-lg);li{position:relative;padding-left:30px;margin-bottom:10px;&:before{content:'▹';position:absolute;left:0;color:var(--green);}}}}blockquote{border-left-color:var(--green);border-left-style:solid;border-left-width:1px;margin-left:0px;margin-right:0px;padding-left:1.5rem;p{font-style:italic;font-size:24px;}}hr{background-color:var(--lightest-navy);height:1px;border-width:0px;border-style:initial;border-color:initial;border-image:initial;margin:1rem;}code{font-family:var(--font-mono);font-size:var(--fz-md);}.skip-to-content{",
          ";position:absolute;top:auto;left:-999px;width:1px;height:1px;overflow:hidden;z-index:-99;&:hover,&:focus{background-color:var(--green);color:var(--navy);top:0;left:0;width:auto;height:auto;overflow:auto;z-index:99;box-shadow:none;transform:none;}}#logo{color:var(--green);}.overline{color:var(--green);font-family:var(--font-mono);font-size:var(--fz-md);font-weight:400;}.subtitle{color:var(--green);margin:0 0 20px 0;font-size:var(--fz-md);font-family:var(--font-mono);font-weight:400;line-height:1.5;@media (max-width:1080px){font-size:var(--fz-sm);}@media (max-width:768px){font-size:var(--fz-xs);}a{",
          ";line-height:1.5;}}.breadcrumb{display:flex;align-items:center;margin-bottom:50px;color:var(--green);.arrow{display:block;margin-right:10px;padding-top:4px;}a{",
          ";font-family:var(--font-mono);font-size:var(--fz-sm);font-weight:600;line-height:1.5;text-transform:uppercase;letter-spacing:0.1em;}}.gatsby-image-outer-wrapper{height:100%;}",
          ";",
          ";",
        ],
        b,
        y,
        (e) => {
          let { theme: t } = e;
          return t.mixins.inlineLink;
        },
        (e) => {
          let { theme: t } = e;
          return t.mixins.inlineLink;
        },
        (e) => {
          let { theme: t } = e;
          return t.mixins.button;
        },
        (e) => {
          let { theme: t } = e;
          return t.mixins.inlineLink;
        },
        (e) => {
          let { theme: t } = e;
          return t.mixins.inlineLink;
        },
        w,
        z
      );
      var M = I;
      const P = c.default.div.withConfig({
        displayName: "layout__StyledContent",
        componentId: "sc-1yw8zls-0",
      })(["display:flex;flex-direction:column;min-height:100vh;"]);
      var _ = (e) => {
          let { children: t, location: n } = e;
          const a = "/" === n.pathname,
            { 0: i, 1: o } = (0, r.useState)(a);
          return (
            (0, r.useEffect)(() => {
              if (!i) {
                if (n.hash) {
                  const e = n.hash.substring(1);
                  setTimeout(() => {
                    const t = document.getElementById(e);
                    t && (t.scrollIntoView(), t.focus());
                  }, 0);
                }
                (() => {
                  const e = Array.from(document.querySelectorAll("a"));
                  e.length > 0 &&
                    e.forEach((e) => {
                      e.host !== window.location.host &&
                        (e.setAttribute("rel", "noopener noreferrer"),
                        e.setAttribute("target", "_blank"));
                    });
                })();
              }
            }, [i]),
            r.createElement(
              r.Fragment,
              null,
              r.createElement(s, null),
              r.createElement(
                "div",
                { id: "root" },
                r.createElement(
                  c.ThemeProvider,
                  { theme: d },
                  r.createElement(M, null),
                  r.createElement(
                    "a",
                    { className: "skip-to-content", href: "#content" },
                    "Skip to Content"
                  ),
                  i && a
                    ? r.createElement(Ye, { finishLoading: () => o(!1) })
                    : r.createElement(
                        P,
                        null,
                        r.createElement(Je, { isHome: a }),
                        r.createElement(st, { isHome: a }),
                        r.createElement(ut, { isHome: a }),
                        r.createElement(
                          "div",
                          { id: "content" },
                          t,
                          r.createElement(pt, null)
                        )
                      )
                )
              )
            )
          );
        },
        R = {
          update: null,
          begin: null,
          loopBegin: null,
          changeBegin: null,
          change: null,
          changeComplete: null,
          loopComplete: null,
          complete: null,
          loop: 1,
          direction: "normal",
          autoplay: !0,
          timelineOffset: 0,
        },
        D = {
          duration: 1e3,
          delay: 0,
          endDelay: 0,
          easing: "easeOutElastic(1, .5)",
          round: 0,
        },
        B = [
          "translateX",
          "translateY",
          "translateZ",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "scale",
          "scaleX",
          "scaleY",
          "scaleZ",
          "skew",
          "skewX",
          "skewY",
          "perspective",
          "matrix",
          "matrix3d",
        ],
        F = { CSS: {}, springs: {} };
      function H(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      function W(e, t) {
        return e.indexOf(t) > -1;
      }
      function q(e, t) {
        return e.apply(null, t);
      }
      var Y = {
        arr: function (e) {
          return Array.isArray(e);
        },
        obj: function (e) {
          return W(Object.prototype.toString.call(e), "Object");
        },
        pth: function (e) {
          return Y.obj(e) && e.hasOwnProperty("totalLength");
        },
        svg: function (e) {
          return e instanceof SVGElement;
        },
        inp: function (e) {
          return e instanceof HTMLInputElement;
        },
        dom: function (e) {
          return e.nodeType || Y.svg(e);
        },
        str: function (e) {
          return "string" == typeof e;
        },
        fnc: function (e) {
          return "function" == typeof e;
        },
        und: function (e) {
          return void 0 === e;
        },
        nil: function (e) {
          return Y.und(e) || null === e;
        },
        hex: function (e) {
          return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
        },
        rgb: function (e) {
          return /^rgb/.test(e);
        },
        hsl: function (e) {
          return /^hsl/.test(e);
        },
        col: function (e) {
          return Y.hex(e) || Y.rgb(e) || Y.hsl(e);
        },
        key: function (e) {
          return (
            !R.hasOwnProperty(e) &&
            !D.hasOwnProperty(e) &&
            "targets" !== e &&
            "keyframes" !== e
          );
        },
      };
      function V(e) {
        var t = /\(([^)]+)\)/.exec(e);
        return t
          ? t[1].split(",").map(function (e) {
              return parseFloat(e);
            })
          : [];
      }
      function U(e, t) {
        var n = V(e),
          r = H(Y.und(n[0]) ? 1 : n[0], 0.1, 100),
          a = H(Y.und(n[1]) ? 100 : n[1], 0.1, 100),
          i = H(Y.und(n[2]) ? 10 : n[2], 0.1, 100),
          o = H(Y.und(n[3]) ? 0 : n[3], 0.1, 100),
          l = Math.sqrt(a / r),
          s = i / (2 * Math.sqrt(a * r)),
          c = s < 1 ? l * Math.sqrt(1 - s * s) : 0,
          u = 1,
          d = s < 1 ? (s * l - o) / c : -o + l;
        function f(e) {
          var n = t ? (t * e) / 1e3 : e;
          return (
            (n =
              s < 1
                ? Math.exp(-n * s * l) *
                  (u * Math.cos(c * n) + d * Math.sin(c * n))
                : (u + d * n) * Math.exp(-n * l)),
            0 === e || 1 === e ? e : 1 - n
          );
        }
        return t
          ? f
          : function () {
              var t = F.springs[e];
              if (t) return t;
              for (var n = 1 / 6, r = 0, a = 0; ; )
                if (1 === f((r += n))) {
                  if (++a >= 16) break;
                } else a = 0;
              var i = r * n * 1e3;
              return (F.springs[e] = i), i;
            };
      }
      function G(e) {
        return (
          void 0 === e && (e = 10),
          function (t) {
            return Math.ceil(H(t, 1e-6, 1) * e) * (1 / e);
          }
        );
      }
      var $,
        X,
        Z = (function () {
          var e = 0.1;
          function t(e, t) {
            return 1 - 3 * t + 3 * e;
          }
          function n(e, t) {
            return 3 * t - 6 * e;
          }
          function r(e) {
            return 3 * e;
          }
          function a(e, a, i) {
            return ((t(a, i) * e + n(a, i)) * e + r(a)) * e;
          }
          function i(e, a, i) {
            return 3 * t(a, i) * e * e + 2 * n(a, i) * e + r(a);
          }
          return function (t, n, r, o) {
            if (0 <= t && t <= 1 && 0 <= r && r <= 1) {
              var l = new Float32Array(11);
              if (t !== n || r !== o)
                for (var s = 0; s < 11; ++s) l[s] = a(s * e, t, r);
              return function (e) {
                return (t === n && r === o) || 0 === e || 1 === e
                  ? e
                  : a(c(e), n, o);
              };
            }
            function c(n) {
              for (var o = 0, s = 1; 10 !== s && l[s] <= n; ++s) o += e;
              --s;
              var c = o + ((n - l[s]) / (l[s + 1] - l[s])) * e,
                u = i(c, t, r);
              return u >= 0.001
                ? (function (e, t, n, r) {
                    for (var o = 0; o < 4; ++o) {
                      var l = i(t, n, r);
                      if (0 === l) return t;
                      t -= (a(t, n, r) - e) / l;
                    }
                    return t;
                  })(n, c, t, r)
                : 0 === u
                ? c
                : (function (e, t, n, r, i) {
                    var o,
                      l,
                      s = 0;
                    do {
                      (o = a((l = t + (n - t) / 2), r, i) - e) > 0
                        ? (n = l)
                        : (t = l);
                    } while (Math.abs(o) > 1e-7 && ++s < 10);
                    return l;
                  })(n, o, o + e, t, r);
            }
          };
        })(),
        Q =
          (($ = {
            linear: function () {
              return function (e) {
                return e;
              };
            },
          }),
          (X = {
            Sine: function () {
              return function (e) {
                return 1 - Math.cos((e * Math.PI) / 2);
              };
            },
            Expo: function () {
              return function (e) {
                return e ? Math.pow(2, 10 * e - 10) : 0;
              };
            },
            Circ: function () {
              return function (e) {
                return 1 - Math.sqrt(1 - e * e);
              };
            },
            Back: function () {
              return function (e) {
                return e * e * (3 * e - 2);
              };
            },
            Bounce: function () {
              return function (e) {
                for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11; );
                return (
                  1 / Math.pow(4, 3 - n) -
                  7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                );
              };
            },
            Elastic: function (e, t) {
              void 0 === e && (e = 1), void 0 === t && (t = 0.5);
              var n = H(e, 1, 10),
                r = H(t, 0.1, 2);
              return function (e) {
                return 0 === e || 1 === e
                  ? e
                  : -n *
                      Math.pow(2, 10 * (e - 1)) *
                      Math.sin(
                        ((e - 1 - (r / (2 * Math.PI)) * Math.asin(1 / n)) *
                          (2 * Math.PI)) /
                          r
                      );
              };
            },
          }),
          ["Quad", "Cubic", "Quart", "Quint"].forEach(function (e, t) {
            X[e] = function () {
              return function (e) {
                return Math.pow(e, t + 2);
              };
            };
          }),
          Object.keys(X).forEach(function (e) {
            var t = X[e];
            ($["easeIn" + e] = t),
              ($["easeOut" + e] = function (e, n) {
                return function (r) {
                  return 1 - t(e, n)(1 - r);
                };
              }),
              ($["easeInOut" + e] = function (e, n) {
                return function (r) {
                  return r < 0.5
                    ? t(e, n)(2 * r) / 2
                    : 1 - t(e, n)(-2 * r + 2) / 2;
                };
              }),
              ($["easeOutIn" + e] = function (e, n) {
                return function (r) {
                  return r < 0.5
                    ? (1 - t(e, n)(1 - 2 * r)) / 2
                    : (t(e, n)(2 * r - 1) + 1) / 2;
                };
              });
          }),
          $);
      function K(e, t) {
        if (Y.fnc(e)) return e;
        var n = e.split("(")[0],
          r = Q[n],
          a = V(e);
        switch (n) {
          case "spring":
            return U(e, t);
          case "cubicBezier":
            return q(Z, a);
          case "steps":
            return q(G, a);
          default:
            return q(r, a);
        }
      }
      function J(e) {
        try {
          return document.querySelectorAll(e);
        } catch (t) {
          return;
        }
      }
      function ee(e, t) {
        for (
          var n = e.length,
            r = arguments.length >= 2 ? arguments[1] : void 0,
            a = [],
            i = 0;
          i < n;
          i++
        )
          if (i in e) {
            var o = e[i];
            t.call(r, o, i, e) && a.push(o);
          }
        return a;
      }
      function te(e) {
        return e.reduce(function (e, t) {
          return e.concat(Y.arr(t) ? te(t) : t);
        }, []);
      }
      function ne(e) {
        return Y.arr(e)
          ? e
          : (Y.str(e) && (e = J(e) || e),
            e instanceof NodeList || e instanceof HTMLCollection
              ? [].slice.call(e)
              : [e]);
      }
      function re(e, t) {
        return e.some(function (e) {
          return e === t;
        });
      }
      function ae(e) {
        var t = {};
        for (var n in e) t[n] = e[n];
        return t;
      }
      function ie(e, t) {
        var n = ae(e);
        for (var r in e) n[r] = t.hasOwnProperty(r) ? t[r] : e[r];
        return n;
      }
      function oe(e, t) {
        var n = ae(e);
        for (var r in t) n[r] = Y.und(e[r]) ? t[r] : e[r];
        return n;
      }
      function le(e) {
        return Y.rgb(e)
          ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((t = e)))
            ? "rgba(" + n[1] + ",1)"
            : t
          : Y.hex(e)
          ? (function (e) {
              var t = e.replace(
                  /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                  function (e, t, n, r) {
                    return t + t + n + n + r + r;
                  }
                ),
                n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
              return (
                "rgba(" +
                parseInt(n[1], 16) +
                "," +
                parseInt(n[2], 16) +
                "," +
                parseInt(n[3], 16) +
                ",1)"
              );
            })(e)
          : Y.hsl(e)
          ? (function (e) {
              var t,
                n,
                r,
                a =
                  /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) ||
                  /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(
                    e
                  ),
                i = parseInt(a[1], 10) / 360,
                o = parseInt(a[2], 10) / 100,
                l = parseInt(a[3], 10) / 100,
                s = a[4] || 1;
              function c(e, t, n) {
                return (
                  n < 0 && (n += 1),
                  n > 1 && (n -= 1),
                  n < 1 / 6
                    ? e + 6 * (t - e) * n
                    : n < 0.5
                    ? t
                    : n < 2 / 3
                    ? e + (t - e) * (2 / 3 - n) * 6
                    : e
                );
              }
              if (0 == o) t = n = r = l;
              else {
                var u = l < 0.5 ? l * (1 + o) : l + o - l * o,
                  d = 2 * l - u;
                (t = c(d, u, i + 1 / 3)),
                  (n = c(d, u, i)),
                  (r = c(d, u, i - 1 / 3));
              }
              return (
                "rgba(" +
                255 * t +
                "," +
                255 * n +
                "," +
                255 * r +
                "," +
                s +
                ")"
              );
            })(e)
          : void 0;
        var t, n;
      }
      function se(e) {
        var t =
          /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
            e
          );
        if (t) return t[1];
      }
      function ce(e, t) {
        return Y.fnc(e) ? e(t.target, t.id, t.total) : e;
      }
      function ue(e, t) {
        return e.getAttribute(t);
      }
      function de(e, t, n) {
        if (re([n, "deg", "rad", "turn"], se(t))) return t;
        var r = F.CSS[t + n];
        if (!Y.und(r)) return r;
        var a = document.createElement(e.tagName),
          i =
            e.parentNode && e.parentNode !== document
              ? e.parentNode
              : document.body;
        i.appendChild(a),
          (a.style.position = "absolute"),
          (a.style.width = 100 + n);
        var o = 100 / a.offsetWidth;
        i.removeChild(a);
        var l = o * parseFloat(t);
        return (F.CSS[t + n] = l), l;
      }
      function fe(e, t, n) {
        if (t in e.style) {
          var r = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
            a = e.style[t] || getComputedStyle(e).getPropertyValue(r) || "0";
          return n ? de(e, a, n) : a;
        }
      }
      function me(e, t) {
        return Y.dom(e) && !Y.inp(e) && (!Y.nil(ue(e, t)) || (Y.svg(e) && e[t]))
          ? "attribute"
          : Y.dom(e) && re(B, t)
          ? "transform"
          : Y.dom(e) && "transform" !== t && fe(e, t)
          ? "css"
          : null != e[t]
          ? "object"
          : void 0;
      }
      function pe(e) {
        if (Y.dom(e)) {
          for (
            var t,
              n = e.style.transform || "",
              r = /(\w+)\(([^)]*)\)/g,
              a = new Map();
            (t = r.exec(n));

          )
            a.set(t[1], t[2]);
          return a;
        }
      }
      function he(e, t, n, r) {
        var a = W(t, "scale")
            ? 1
            : 0 +
              (function (e) {
                return W(e, "translate") || "perspective" === e
                  ? "px"
                  : W(e, "rotate") || W(e, "skew")
                  ? "deg"
                  : void 0;
              })(t),
          i = pe(e).get(t) || a;
        return (
          n && (n.transforms.list.set(t, i), (n.transforms.last = t)),
          r ? de(e, i, r) : i
        );
      }
      function ge(e, t, n, r) {
        switch (me(e, t)) {
          case "transform":
            return he(e, t, r, n);
          case "css":
            return fe(e, t, n);
          case "attribute":
            return ue(e, t);
          default:
            return e[t] || 0;
        }
      }
      function ve(e, t) {
        var n = /^(\*=|\+=|-=)/.exec(e);
        if (!n) return e;
        var r = se(e) || 0,
          a = parseFloat(t),
          i = parseFloat(e.replace(n[0], ""));
        switch (n[0][0]) {
          case "+":
            return a + i + r;
          case "-":
            return a - i + r;
          case "*":
            return a * i + r;
        }
      }
      function xe(e, t) {
        if (Y.col(e)) return le(e);
        if (/\s/g.test(e)) return e;
        var n = se(e),
          r = n ? e.substr(0, e.length - n.length) : e;
        return t ? r + t : r;
      }
      function be(e, t) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
      }
      function ye(e) {
        for (var t, n = e.points, r = 0, a = 0; a < n.numberOfItems; a++) {
          var i = n.getItem(a);
          a > 0 && (r += be(t, i)), (t = i);
        }
        return r;
      }
      function we(e) {
        if (e.getTotalLength) return e.getTotalLength();
        switch (e.tagName.toLowerCase()) {
          case "circle":
            return (function (e) {
              return 2 * Math.PI * ue(e, "r");
            })(e);
          case "rect":
            return (function (e) {
              return 2 * ue(e, "width") + 2 * ue(e, "height");
            })(e);
          case "line":
            return (function (e) {
              return be(
                { x: ue(e, "x1"), y: ue(e, "y1") },
                { x: ue(e, "x2"), y: ue(e, "y2") }
              );
            })(e);
          case "polyline":
            return ye(e);
          case "polygon":
            return (function (e) {
              var t = e.points;
              return ye(e) + be(t.getItem(t.numberOfItems - 1), t.getItem(0));
            })(e);
        }
      }
      function Ee(e, t) {
        var n = t || {},
          r =
            n.el ||
            (function (e) {
              for (var t = e.parentNode; Y.svg(t) && Y.svg(t.parentNode); )
                t = t.parentNode;
              return t;
            })(e),
          a = r.getBoundingClientRect(),
          i = ue(r, "viewBox"),
          o = a.width,
          l = a.height,
          s = n.viewBox || (i ? i.split(" ") : [0, 0, o, l]);
        return {
          el: r,
          viewBox: s,
          x: s[0] / 1,
          y: s[1] / 1,
          w: o,
          h: l,
          vW: s[2],
          vH: s[3],
        };
      }
      function ke(e, t, n) {
        function r(n) {
          void 0 === n && (n = 0);
          var r = t + n >= 1 ? t + n : 0;
          return e.el.getPointAtLength(r);
        }
        var a = Ee(e.el, e.svg),
          i = r(),
          o = r(-1),
          l = r(1),
          s = n ? 1 : a.w / a.vW,
          c = n ? 1 : a.h / a.vH;
        switch (e.property) {
          case "x":
            return (i.x - a.x) * s;
          case "y":
            return (i.y - a.y) * c;
          case "angle":
            return (180 * Math.atan2(l.y - o.y, l.x - o.x)) / Math.PI;
        }
      }
      function Ce(e, t) {
        var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
          r = xe(Y.pth(e) ? e.totalLength : e, t) + "";
        return {
          original: r,
          numbers: r.match(n) ? r.match(n).map(Number) : [0],
          strings: Y.str(e) || t ? r.split(n) : [],
        };
      }
      function Se(e) {
        return ee(
          e ? te(Y.arr(e) ? e.map(ne) : ne(e)) : [],
          function (e, t, n) {
            return n.indexOf(e) === t;
          }
        );
      }
      function Te(e) {
        var t = Se(e);
        return t.map(function (e, n) {
          return {
            target: e,
            id: n,
            total: t.length,
            transforms: { list: pe(e) },
          };
        });
      }
      function Le(e, t) {
        var n = ae(t);
        if (
          (/^spring/.test(n.easing) && (n.duration = U(n.easing)), Y.arr(e))
        ) {
          var r = e.length;
          2 === r && !Y.obj(e[0])
            ? (e = { value: e })
            : Y.fnc(t.duration) || (n.duration = t.duration / r);
        }
        var a = Y.arr(e) ? e : [e];
        return a
          .map(function (e, n) {
            var r = Y.obj(e) && !Y.pth(e) ? e : { value: e };
            return (
              Y.und(r.delay) && (r.delay = n ? 0 : t.delay),
              Y.und(r.endDelay) &&
                (r.endDelay = n === a.length - 1 ? t.endDelay : 0),
              r
            );
          })
          .map(function (e) {
            return oe(e, n);
          });
      }
      function Ae(e, t) {
        var n = [],
          r = t.keyframes;
        for (var a in (r &&
          (t = oe(
            (function (e) {
              for (
                var t = ee(
                    te(
                      e.map(function (e) {
                        return Object.keys(e);
                      })
                    ),
                    function (e) {
                      return Y.key(e);
                    }
                  ).reduce(function (e, t) {
                    return e.indexOf(t) < 0 && e.push(t), e;
                  }, []),
                  n = {},
                  r = function (r) {
                    var a = t[r];
                    n[a] = e.map(function (e) {
                      var t = {};
                      for (var n in e)
                        Y.key(n) ? n == a && (t.value = e[n]) : (t[n] = e[n]);
                      return t;
                    });
                  },
                  a = 0;
                a < t.length;
                a++
              )
                r(a);
              return n;
            })(r),
            t
          )),
        t))
          Y.key(a) && n.push({ name: a, tweens: Le(t[a], e) });
        return n;
      }
      function je(e, t) {
        var n;
        return e.tweens.map(function (r) {
          var a = (function (e, t) {
              var n = {};
              for (var r in e) {
                var a = ce(e[r], t);
                Y.arr(a) &&
                  1 ===
                    (a = a.map(function (e) {
                      return ce(e, t);
                    })).length &&
                  (a = a[0]),
                  (n[r] = a);
              }
              return (
                (n.duration = parseFloat(n.duration)),
                (n.delay = parseFloat(n.delay)),
                n
              );
            })(r, t),
            i = a.value,
            o = Y.arr(i) ? i[1] : i,
            l = se(o),
            s = ge(t.target, e.name, l, t),
            c = n ? n.to.original : s,
            u = Y.arr(i) ? i[0] : c,
            d = se(u) || se(s),
            f = l || d;
          return (
            Y.und(o) && (o = c),
            (a.from = Ce(u, f)),
            (a.to = Ce(ve(o, u), f)),
            (a.start = n ? n.end : 0),
            (a.end = a.start + a.delay + a.duration + a.endDelay),
            (a.easing = K(a.easing, a.duration)),
            (a.isPath = Y.pth(i)),
            (a.isPathTargetInsideSVG = a.isPath && Y.svg(t.target)),
            (a.isColor = Y.col(a.from.original)),
            a.isColor && (a.round = 1),
            (n = a),
            a
          );
        });
      }
      var Ne = {
        css: function (e, t, n) {
          return (e.style[t] = n);
        },
        attribute: function (e, t, n) {
          return e.setAttribute(t, n);
        },
        object: function (e, t, n) {
          return (e[t] = n);
        },
        transform: function (e, t, n, r, a) {
          if ((r.list.set(t, n), t === r.last || a)) {
            var i = "";
            r.list.forEach(function (e, t) {
              i += t + "(" + e + ") ";
            }),
              (e.style.transform = i);
          }
        },
      };
      function Oe(e, t) {
        Te(e).forEach(function (e) {
          for (var n in t) {
            var r = ce(t[n], e),
              a = e.target,
              i = se(r),
              o = ge(a, n, i, e),
              l = ve(xe(r, i || se(o)), o),
              s = me(a, n);
            Ne[s](a, n, l, e.transforms, !0);
          }
        });
      }
      function ze(e, t) {
        return ee(
          te(
            e.map(function (e) {
              return t.map(function (t) {
                return (function (e, t) {
                  var n = me(e.target, t.name);
                  if (n) {
                    var r = je(t, e),
                      a = r[r.length - 1];
                    return {
                      type: n,
                      property: t.name,
                      animatable: e,
                      tweens: r,
                      duration: a.end,
                      delay: r[0].delay,
                      endDelay: a.endDelay,
                    };
                  }
                })(e, t);
              });
            })
          ),
          function (e) {
            return !Y.und(e);
          }
        );
      }
      function Ie(e, t) {
        var n = e.length,
          r = function (e) {
            return e.timelineOffset ? e.timelineOffset : 0;
          },
          a = {};
        return (
          (a.duration = n
            ? Math.max.apply(
                Math,
                e.map(function (e) {
                  return r(e) + e.duration;
                })
              )
            : t.duration),
          (a.delay = n
            ? Math.min.apply(
                Math,
                e.map(function (e) {
                  return r(e) + e.delay;
                })
              )
            : t.delay),
          (a.endDelay = n
            ? a.duration -
              Math.max.apply(
                Math,
                e.map(function (e) {
                  return r(e) + e.duration - e.endDelay;
                })
              )
            : t.endDelay),
          a
        );
      }
      var Me = 0;
      var Pe = [],
        _e = (function () {
          var e;
          function t(n) {
            for (var r = Pe.length, a = 0; a < r; ) {
              var i = Pe[a];
              i.paused ? (Pe.splice(a, 1), r--) : (i.tick(n), a++);
            }
            e = a > 0 ? requestAnimationFrame(t) : void 0;
          }
          return (
            "undefined" != typeof document &&
              document.addEventListener("visibilitychange", function () {
                De.suspendWhenDocumentHidden &&
                  (Re()
                    ? (e = cancelAnimationFrame(e))
                    : (Pe.forEach(function (e) {
                        return e._onDocumentVisibility();
                      }),
                      _e()));
              }),
            function () {
              e ||
                (Re() && De.suspendWhenDocumentHidden) ||
                !(Pe.length > 0) ||
                (e = requestAnimationFrame(t));
            }
          );
        })();
      function Re() {
        return !!document && document.hidden;
      }
      function De(e) {
        void 0 === e && (e = {});
        var t,
          n = 0,
          r = 0,
          a = 0,
          i = 0,
          o = null;
        function l(e) {
          var t =
            window.Promise &&
            new Promise(function (e) {
              return (o = e);
            });
          return (e.finished = t), t;
        }
        var s = (function (e) {
          var t = ie(R, e),
            n = ie(D, e),
            r = Ae(n, e),
            a = Te(e.targets),
            i = ze(a, r),
            o = Ie(i, n),
            l = Me;
          return (
            Me++,
            oe(t, {
              id: l,
              children: [],
              animatables: a,
              animations: i,
              duration: o.duration,
              delay: o.delay,
              endDelay: o.endDelay,
            })
          );
        })(e);
        l(s);
        function c() {
          var e = s.direction;
          "alternate" !== e &&
            (s.direction = "normal" !== e ? "normal" : "reverse"),
            (s.reversed = !s.reversed),
            t.forEach(function (e) {
              return (e.reversed = s.reversed);
            });
        }
        function u(e) {
          return s.reversed ? s.duration - e : e;
        }
        function d() {
          (n = 0), (r = u(s.currentTime) * (1 / De.speed));
        }
        function f(e, t) {
          t && t.seek(e - t.timelineOffset);
        }
        function m(e) {
          for (var t = 0, n = s.animations, r = n.length; t < r; ) {
            var a = n[t],
              i = a.animatable,
              o = a.tweens,
              l = o.length - 1,
              c = o[l];
            l &&
              (c =
                ee(o, function (t) {
                  return e < t.end;
                })[0] || c);
            for (
              var u = H(e - c.start - c.delay, 0, c.duration) / c.duration,
                d = isNaN(u) ? 1 : c.easing(u),
                f = c.to.strings,
                m = c.round,
                p = [],
                h = c.to.numbers.length,
                g = void 0,
                v = 0;
              v < h;
              v++
            ) {
              var x = void 0,
                b = c.to.numbers[v],
                y = c.from.numbers[v] || 0;
              (x = c.isPath
                ? ke(c.value, d * b, c.isPathTargetInsideSVG)
                : y + d * (b - y)),
                m && ((c.isColor && v > 2) || (x = Math.round(x * m) / m)),
                p.push(x);
            }
            var w = f.length;
            if (w) {
              g = f[0];
              for (var E = 0; E < w; E++) {
                f[E];
                var k = f[E + 1],
                  C = p[E];
                isNaN(C) || (g += k ? C + k : C + " ");
              }
            } else g = p[0];
            Ne[a.type](i.target, a.property, g, i.transforms),
              (a.currentValue = g),
              t++;
          }
        }
        function p(e) {
          s[e] && !s.passThrough && s[e](s);
        }
        function h(e) {
          var d = s.duration,
            h = s.delay,
            g = d - s.endDelay,
            v = u(e);
          (s.progress = H((v / d) * 100, 0, 100)),
            (s.reversePlayback = v < s.currentTime),
            t &&
              (function (e) {
                if (s.reversePlayback) for (var n = i; n--; ) f(e, t[n]);
                else for (var r = 0; r < i; r++) f(e, t[r]);
              })(v),
            !s.began && s.currentTime > 0 && ((s.began = !0), p("begin")),
            !s.loopBegan &&
              s.currentTime > 0 &&
              ((s.loopBegan = !0), p("loopBegin")),
            v <= h && 0 !== s.currentTime && m(0),
            ((v >= g && s.currentTime !== d) || !d) && m(d),
            v > h && v < g
              ? (s.changeBegan ||
                  ((s.changeBegan = !0),
                  (s.changeCompleted = !1),
                  p("changeBegin")),
                p("change"),
                m(v))
              : s.changeBegan &&
                ((s.changeCompleted = !0),
                (s.changeBegan = !1),
                p("changeComplete")),
            (s.currentTime = H(v, 0, d)),
            s.began && p("update"),
            e >= d &&
              ((r = 0),
              s.remaining && !0 !== s.remaining && s.remaining--,
              s.remaining
                ? ((n = a),
                  p("loopComplete"),
                  (s.loopBegan = !1),
                  "alternate" === s.direction && c())
                : ((s.paused = !0),
                  s.completed ||
                    ((s.completed = !0),
                    p("loopComplete"),
                    p("complete"),
                    !s.passThrough && "Promise" in window && (o(), l(s)))));
        }
        return (
          (s.reset = function () {
            var e = s.direction;
            (s.passThrough = !1),
              (s.currentTime = 0),
              (s.progress = 0),
              (s.paused = !0),
              (s.began = !1),
              (s.loopBegan = !1),
              (s.changeBegan = !1),
              (s.completed = !1),
              (s.changeCompleted = !1),
              (s.reversePlayback = !1),
              (s.reversed = "reverse" === e),
              (s.remaining = s.loop),
              (t = s.children);
            for (var n = (i = t.length); n--; ) s.children[n].reset();
            ((s.reversed && !0 !== s.loop) ||
              ("alternate" === e && 1 === s.loop)) &&
              s.remaining++,
              m(s.reversed ? s.duration : 0);
          }),
          (s._onDocumentVisibility = d),
          (s.set = function (e, t) {
            return Oe(e, t), s;
          }),
          (s.tick = function (e) {
            (a = e), n || (n = a), h((a + (r - n)) * De.speed);
          }),
          (s.seek = function (e) {
            h(u(e));
          }),
          (s.pause = function () {
            (s.paused = !0), d();
          }),
          (s.play = function () {
            s.paused &&
              (s.completed && s.reset(),
              (s.paused = !1),
              Pe.push(s),
              d(),
              _e());
          }),
          (s.reverse = function () {
            c(), (s.completed = !s.reversed), d();
          }),
          (s.restart = function () {
            s.reset(), s.play();
          }),
          (s.remove = function (e) {
            Fe(Se(e), s);
          }),
          s.reset(),
          s.autoplay && s.play(),
          s
        );
      }
      function Be(e, t) {
        for (var n = t.length; n--; )
          re(e, t[n].animatable.target) && t.splice(n, 1);
      }
      function Fe(e, t) {
        var n = t.animations,
          r = t.children;
        Be(e, n);
        for (var a = r.length; a--; ) {
          var i = r[a],
            o = i.animations;
          Be(e, o), o.length || i.children.length || r.splice(a, 1);
        }
        n.length || r.length || t.pause();
      }
      (De.version = "3.2.1"),
        (De.speed = 1),
        (De.suspendWhenDocumentHidden = !0),
        (De.running = Pe),
        (De.remove = function (e) {
          for (var t = Se(e), n = Pe.length; n--; ) {
            Fe(t, Pe[n]);
          }
        }),
        (De.get = ge),
        (De.set = Oe),
        (De.convertPx = de),
        (De.path = function (e, t) {
          var n = Y.str(e) ? J(e)[0] : e,
            r = t || 100;
          return function (e) {
            return {
              property: e,
              el: n,
              svg: Ee(n),
              totalLength: we(n) * (r / 100),
            };
          };
        }),
        (De.setDashoffset = function (e) {
          var t = we(e);
          return e.setAttribute("stroke-dasharray", t), t;
        }),
        (De.stagger = function (e, t) {
          void 0 === t && (t = {});
          var n = t.direction || "normal",
            r = t.easing ? K(t.easing) : null,
            a = t.grid,
            i = t.axis,
            o = t.from || 0,
            l = "first" === o,
            s = "center" === o,
            c = "last" === o,
            u = Y.arr(e),
            d = u ? parseFloat(e[0]) : parseFloat(e),
            f = u ? parseFloat(e[1]) : 0,
            m = se(u ? e[1] : e) || 0,
            p = t.start || 0 + (u ? d : 0),
            h = [],
            g = 0;
          return function (e, t, v) {
            if (
              (l && (o = 0),
              s && (o = (v - 1) / 2),
              c && (o = v - 1),
              !h.length)
            ) {
              for (var x = 0; x < v; x++) {
                if (a) {
                  var b = s ? (a[0] - 1) / 2 : o % a[0],
                    y = s ? (a[1] - 1) / 2 : Math.floor(o / a[0]),
                    w = b - (x % a[0]),
                    E = y - Math.floor(x / a[0]),
                    k = Math.sqrt(w * w + E * E);
                  "x" === i && (k = -w), "y" === i && (k = -E), h.push(k);
                } else h.push(Math.abs(o - x));
                g = Math.max.apply(Math, h);
              }
              r &&
                (h = h.map(function (e) {
                  return r(e / g) * g;
                })),
                "reverse" === n &&
                  (h = h.map(function (e) {
                    return i ? (e < 0 ? -1 * e : -e) : Math.abs(g - e);
                  }));
            }
            return (
              p + (u ? (f - d) / g : d) * (Math.round(100 * h[t]) / 100) + m
            );
          };
        }),
        (De.timeline = function (e) {
          void 0 === e && (e = {});
          var t = De(e);
          return (
            (t.duration = 0),
            (t.add = function (n, r) {
              var a = Pe.indexOf(t),
                i = t.children;
              function o(e) {
                e.passThrough = !0;
              }
              a > -1 && Pe.splice(a, 1);
              for (var l = 0; l < i.length; l++) o(i[l]);
              var s = oe(n, ie(D, e));
              s.targets = s.targets || e.targets;
              var c = t.duration;
              (s.autoplay = !1),
                (s.direction = t.direction),
                (s.timelineOffset = Y.und(r) ? c : ve(r, c)),
                o(t),
                t.seek(s.timelineOffset);
              var u = De(s);
              o(u), i.push(u);
              var d = Ie(i, e);
              return (
                (t.delay = d.delay),
                (t.endDelay = d.endDelay),
                (t.duration = d.duration),
                t.seek(0),
                t.reset(),
                t.autoplay && t.play(),
                t
              );
            }),
            t
          );
        }),
        (De.easing = K),
        (De.penner = Q),
        (De.random = function (e, t) {
          return Math.floor(Math.random() * (t - e + 1)) + e;
        });
      var He = De,
        We = n(3208);
      const qe = c.default.div.withConfig({
        displayName: "loader__StyledLoader",
        componentId: "sc-177se4j-0",
      })(
        [
          "",
          ";position:fixed;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-color:var(--dark-navy);z-index:99;.logo-wrapper{width:max-content;max-width:100px;transition:var(--transition);opacity:",
          ";svg{display:block;width:100%;height:100%;margin:0 auto;fill:none;user-select:none;#B{opacity:0;}}}",
        ],
        (e) => {
          let { theme: t } = e;
          return t.mixins.flexCenter;
        },
        (e) => (e.isMounted ? 1 : 0)
      );
      var Ye = (e) => {
          let { finishLoading: t } = e;
          const { 0: n, 1: i } = (0, r.useState)(!1);
          return (
            (0, r.useEffect)(() => {
              const e = setTimeout(() => i(!0), 10);
              return (
                He.timeline({ complete: () => t() })
                  .add({
                    targets: "#logo path",
                    delay: 300,
                    duration: 1500,
                    easing: "easeInOutQuart",
                    strokeDashoffset: [He.setDashoffset, 0],
                  })
                  .add({
                    targets: "#logo #B",
                    duration: 700,
                    easing: "easeInOutQuart",
                    opacity: 1,
                  })
                  .add({
                    targets: "#logo",
                    delay: 500,
                    duration: 300,
                    easing: "easeInOutQuart",
                    opacity: 0,
                    scale: 0.1,
                  })
                  .add({
                    targets: ".loader",
                    duration: 200,
                    easing: "easeInOutQuart",
                    opacity: 0,
                    zIndex: -1,
                  }),
                () => clearTimeout(e)
              );
            }, []),
            r.createElement(
              qe,
              { className: "loader", isMounted: n },
              r.createElement(a.m, { bodyAttributes: { class: "hidden" } }),
              r.createElement(
                "div",
                { className: "logo-wrapper" },
                r.createElement(We.x3, null)
              )
            )
          );
        },
        Ve = n(6181),
        Ue = n(5262),
        Ge = n(1929),
        $e = n(1597),
        Xe = n(1378);
      const Ze = c.default.header.withConfig({
          displayName: "nav__StyledHeader",
          componentId: "sc-ghklvd-0",
        })(
          [
            "",
            ";position:fixed;top:0;z-index:11;padding:0px 50px;width:100%;height:var(--nav-height);background-color:rgba(10,25,47,0.85);filter:none !important;pointer-events:auto !important;user-select:auto !important;backdrop-filter:blur(10px);transition:var(--transition);@media (max-width:1080px){padding:0 40px;}@media (max-width:768px){padding:0 25px;}@media (prefers-reduced-motion:no-preference){",
            ";",
            ";}",
          ],
          (e) => {
            let { theme: t } = e;
            return t.mixins.flexBetween;
          },
          (e) =>
            "up" === e.scrollDirection &&
            !e.scrolledToTop &&
            (0, c.css)([
              "height:var(--nav-scroll-height);transform:translateY(0px);background-color:rgba(10,25,47,0.85);box-shadow:0 10px 30px -10px var(--navy-shadow);",
            ]),
          (e) =>
            "down" === e.scrollDirection &&
            !e.scrolledToTop &&
            (0, c.css)([
              "height:var(--nav-scroll-height);transform:translateY(calc(var(--nav-scroll-height) * -1));box-shadow:0 10px 30px -10px var(--navy-shadow);",
            ])
        ),
        Qe = c.default.nav.withConfig({
          displayName: "nav__StyledNav",
          componentId: "sc-ghklvd-1",
        })(
          [
            "",
            ";position:relative;width:100%;color:var(--lightest-slate);font-family:var(--font-mono);counter-reset:item 0;z-index:12;.logo{",
            ";a{color:var(--green);width:42px;height:42px;position:relative;z-index:1;.hex-container{position:absolute;top:0;left:0;z-index:-1;@media (prefers-reduced-motion:no-preference){transition:var(--transition);}}.logo-container{position:relative;z-index:1;svg{fill:none;user-select:none;@media (prefers-reduced-motion:no-preference){transition:var(--transition);}polygon{fill:var(--navy);}}}&:hover,&:focus{outline:0;transform:translate(-4px,-4px);.hex-container{transform:translate(4px,3px);}}}}",
          ],
          (e) => {
            let { theme: t } = e;
            return t.mixins.flexBetween;
          },
          (e) => {
            let { theme: t } = e;
            return t.mixins.flexCenter;
          }
        ),
        Ke = c.default.div.withConfig({
          displayName: "nav__StyledLinks",
          componentId: "sc-ghklvd-2",
        })(
          [
            "display:flex;align-items:center;@media (max-width:768px){display:none;}ol{",
            ";padding:0;margin:0;list-style:none;li{margin:0 5px;position:relative;counter-increment:item 1;font-size:var(--fz-xs);a{padding:10px;&:before{content:'0' counter(item) '.';margin-right:5px;color:var(--green);font-size:var(--fz-xxs);text-align:right;}}}}.resume-button{",
            ";margin-left:15px;font-size:var(--fz-xs);}",
          ],
          (e) => {
            let { theme: t } = e;
            return t.mixins.flexBetween;
          },
          (e) => {
            let { theme: t } = e;
            return t.mixins.smallButton;
          }
        );
      var Je = (e) => {
          let { isHome: t } = e;
          const { 0: n, 1: a } = (0, r.useState)(!t),
            i = (0, Xe.YU)("down"),
            { 0: l, 1: s } = (0, r.useState)(!0),
            c = (0, Xe.jt)(),
            u = () => {
              s(window.pageYOffset < 50);
            };
          (0, r.useEffect)(() => {
            if (c) return;
            const e = setTimeout(() => {
              a(!0);
            }, 100);
            return (
              window.addEventListener("scroll", u),
              () => {
                clearTimeout(e), window.removeEventListener("scroll", u);
              }
            );
          }, []);
          const d = t ? $e.Zc : 0,
            f = t ? "fade" : "",
            m = t ? "fadedown" : "",
            p = r.createElement(
              "div",
              { className: "logo", tabIndex: "-1" },
              t
                ? r.createElement(
                    "a",
                    { href: "/", "aria-label": "home" },
                    r.createElement(
                      "div",
                      { className: "hex-container" },
                      r.createElement(We.Xz, null)
                    ),
                    r.createElement(
                      "div",
                      { className: "logo-container" },
                      r.createElement(We.H_, null)
                    )
                  )
                : r.createElement(
                    o.Link,
                    { to: "/", "aria-label": "home" },
                    r.createElement(
                      "div",
                      { className: "hex-container" },
                      r.createElement(We.Xz, null)
                    ),
                    r.createElement(
                      "div",
                      { className: "logo-container" },
                      r.createElement(We.H_, null)
                    )
                  )
            ),
            h = r.createElement(
              "a",
              {
                className: "resume-button",
                href: "/resume.pdf",
                target: "_blank",
                rel: "noopener noreferrer",
              },
              "Resume"
            );
          return r.createElement(
            Ze,
            { scrollDirection: i, scrolledToTop: l },
            r.createElement(
              Qe,
              null,
              c
                ? r.createElement(
                    r.Fragment,
                    null,
                    p,
                    r.createElement(
                      Ke,
                      null,
                      r.createElement(
                        "ol",
                        null,
                        Ge.navLinks &&
                          Ge.navLinks.map((e, t) => {
                            let { url: n, name: a } = e;
                            return r.createElement(
                              "li",
                              { key: t },
                              r.createElement(o.Link, { to: n }, a)
                            );
                          })
                      ),
                      r.createElement("div", null, h)
                    ),
                    r.createElement(at, null)
                  )
                : r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(
                      Ve.A,
                      { component: null },
                      n &&
                        r.createElement(
                          Ue.A,
                          { classNames: f, timeout: d },
                          r.createElement(r.Fragment, null, p)
                        )
                    ),
                    r.createElement(
                      Ke,
                      null,
                      r.createElement(
                        "ol",
                        null,
                        r.createElement(
                          Ve.A,
                          { component: null },
                          n &&
                            Ge.navLinks &&
                            Ge.navLinks.map((e, n) => {
                              let { url: a, name: i } = e;
                              return r.createElement(
                                Ue.A,
                                { key: n, classNames: m, timeout: d },
                                r.createElement(
                                  "li",
                                  {
                                    key: n,
                                    style: {
                                      transitionDelay: (t ? 100 * n : 0) + "ms",
                                    },
                                  },
                                  r.createElement(o.Link, { to: a }, i)
                                )
                              );
                            })
                        )
                      ),
                      r.createElement(
                        Ve.A,
                        { component: null },
                        n &&
                          r.createElement(
                            Ue.A,
                            { classNames: m, timeout: d },
                            r.createElement(
                              "div",
                              {
                                style: {
                                  transitionDelay:
                                    (t ? 100 * Ge.navLinks.length : 0) + "ms",
                                },
                              },
                              h
                            )
                          )
                      )
                    ),
                    r.createElement(
                      Ve.A,
                      { component: null },
                      n &&
                        r.createElement(
                          Ue.A,
                          { classNames: f, timeout: d },
                          r.createElement(at, null)
                        )
                    )
                  )
            )
          );
        },
        et = n(4506);
      const tt = c.default.div.withConfig({
          displayName: "menu__StyledMenu",
          componentId: "sc-sdn9y6-0",
        })(["display:none;@media (max-width:768px){display:block;}"]),
        nt = c.default.button.withConfig({
          displayName: "menu__StyledHamburgerButton",
          componentId: "sc-sdn9y6-1",
        })(
          [
            "display:none;@media (max-width:768px){",
            ";position:relative;z-index:10;margin-right:-15px;padding:15px;border:0;background-color:transparent;color:inherit;text-transform:none;transition-timing-function:linear;transition-duration:0.15s;transition-property:opacity,filter;}.ham-box{display:inline-block;position:relative;width:var(--hamburger-width);height:24px;}.ham-box-inner{position:absolute;top:50%;right:0;width:var(--hamburger-width);height:2px;border-radius:var(--border-radius);background-color:var(--green);transition-duration:0.22s;transition-property:transform;transition-delay:",
            ";transform:rotate(",
            ");transition-timing-function:cubic-bezier( ",
            " );&:before,&:after{content:'';display:block;position:absolute;left:auto;right:0;width:var(--hamburger-width);height:2px;border-radius:4px;background-color:var(--green);transition-timing-function:ease;transition-duration:0.15s;transition-property:transform;}&:before{width:",
            ";top:",
            ";opacity:",
            ";transition:",
            ";}&:after{width:",
            ";bottom:",
            ";transform:rotate(",
            ");transition:",
            ";}}",
          ],
          (e) => {
            let { theme: t } = e;
            return t.mixins.flexCenter;
          },
          (e) => (e.menuOpen ? "0.12s" : "0s"),
          (e) => (e.menuOpen ? "225deg" : "0deg"),
          (e) =>
            e.menuOpen ? "0.215, 0.61, 0.355, 1" : "0.55, 0.055, 0.675, 0.19",
          (e) => (e.menuOpen ? "100%" : "120%"),
          (e) => (e.menuOpen ? "0" : "-10px"),
          (e) => (e.menuOpen ? 0 : 1),
          (e) => {
            let { menuOpen: t } = e;
            return t ? "var(--ham-before-active)" : "var(--ham-before)";
          },
          (e) => (e.menuOpen ? "100%" : "80%"),
          (e) => (e.menuOpen ? "0" : "-10px"),
          (e) => (e.menuOpen ? "-90deg" : "0"),
          (e) => {
            let { menuOpen: t } = e;
            return t ? "var(--ham-after-active)" : "var(--ham-after)";
          }
        ),
        rt = c.default.aside.withConfig({
          displayName: "menu__StyledSidebar",
          componentId: "sc-sdn9y6-2",
        })(
          [
            "display:none;@media (max-width:768px){",
            ";position:fixed;top:0;bottom:0;right:0;padding:50px 10px;width:min(75vw,400px);height:100vh;outline:0;background-color:var(--light-navy);box-shadow:-10px 0px 30px -15px var(--navy-shadow);z-index:9;transform:translateX(",
            "vw);visibility:",
            ";transition:var(--transition);}nav{",
            ";width:100%;flex-direction:column;color:var(--lightest-slate);font-family:var(--font-mono);text-align:center;}ol{padding:0;margin:0;list-style:none;width:100%;li{position:relative;margin:0 auto 20px;counter-increment:item 1;font-size:clamp(var(--fz-sm),4vw,var(--fz-lg));@media (max-width:600px){margin:0 auto 10px;}&:before{content:'0' counter(item) '.';display:block;margin-bottom:5px;color:var(--green);font-size:var(--fz-sm);}}a{",
            ";width:100%;padding:3px 20px 20px;}}.resume-link{",
            ";padding:18px 50px;margin:10% auto 0;width:max-content;}",
          ],
          (e) => {
            let { theme: t } = e;
            return t.mixins.flexCenter;
          },
          (e) => (e.menuOpen ? 0 : 100),
          (e) => (e.menuOpen ? "visible" : "hidden"),
          (e) => {
            let { theme: t } = e;
            return t.mixins.flexBetween;
          },
          (e) => {
            let { theme: t } = e;
            return t.mixins.link;
          },
          (e) => {
            let { theme: t } = e;
            return t.mixins.bigButton;
          }
        );
      var at = () => {
        const { 0: e, 1: t } = (0, r.useState)(!1),
          n = (0, r.useRef)(null),
          i = (0, r.useRef)(null);
        let l, s, c;
        const u = (e) => {
            switch (e.key) {
              case $e.Lb.ESCAPE:
              case $e.Lb.ESCAPE_IE11:
                t(!1);
                break;
              case $e.Lb.TAB:
                if (l && 1 === l.length) {
                  e.preventDefault();
                  break;
                }
                e.shiftKey
                  ? ((e) => {
                      document.activeElement === s &&
                        (e.preventDefault(), c.focus());
                    })(e)
                  : ((e) => {
                      document.activeElement === c &&
                        (e.preventDefault(), s.focus());
                    })(e);
            }
          },
          d = (e) => {
            e.currentTarget.innerWidth > 768 && t(!1);
          };
        (0, r.useEffect)(
          () => (
            document.addEventListener("keydown", u),
            window.addEventListener("resize", d),
            (l = [n.current].concat(
              (0, et.A)(Array.from(i.current.querySelectorAll("a")))
            )),
            (s = l[0]),
            (c = l[l.length - 1]),
            () => {
              document.removeEventListener("keydown", u),
                window.removeEventListener("resize", d);
            }
          ),
          []
        );
        const f = (0, r.useRef)();
        return (
          (0, Xe.Wr)(f, () => t(!1)),
          r.createElement(
            tt,
            null,
            r.createElement(
              a.m,
              null,
              r.createElement("body", { className: e ? "blur" : "" })
            ),
            r.createElement(
              "div",
              { ref: f },
              r.createElement(
                nt,
                {
                  onClick: () => t(!e),
                  menuOpen: e,
                  ref: n,
                  "aria-label": "Menu",
                },
                r.createElement(
                  "div",
                  { className: "ham-box" },
                  r.createElement("div", { className: "ham-box-inner" })
                )
              ),
              r.createElement(
                rt,
                { menuOpen: e, "aria-hidden": !e, tabIndex: e ? 1 : -1 },
                r.createElement(
                  "nav",
                  { ref: i },
                  Ge.navLinks &&
                    r.createElement(
                      "ol",
                      null,
                      Ge.navLinks.map((e, n) => {
                        let { url: a, name: i } = e;
                        return r.createElement(
                          "li",
                          { key: n },
                          r.createElement(
                            o.Link,
                            { to: a, onClick: () => t(!1) },
                            i
                          )
                        );
                      })
                    ),
                  r.createElement(
                    "a",
                    { href: "/resume.pdf", className: "resume-link" },
                    "Resume"
                  )
                )
              )
            )
          )
        );
      };
      const it = c.default.div.withConfig({
        displayName: "side__StyledSideElement",
        componentId: "sc-1duznzb-0",
      })(
        [
          "width:40px;position:fixed;bottom:0;left:",
          ";right:",
          ";z-index:10;color:var(--light-slate);@media (max-width:1080px){left:",
          ";right:",
          ";}@media (max-width:768px){display:none;}",
        ],
        (e) => ("left" === e.orientation ? "40px" : "auto"),
        (e) => ("left" === e.orientation ? "auto" : "40px"),
        (e) => ("left" === e.orientation ? "20px" : "auto"),
        (e) => ("left" === e.orientation ? "auto" : "20px")
      );
      var ot = (e) => {
        let { children: t, isHome: n, orientation: a } = e;
        const { 0: i, 1: o } = (0, r.useState)(!n),
          l = (0, Xe.jt)();
        return (
          (0, r.useEffect)(() => {
            if (!n || l) return;
            const e = setTimeout(() => o(!0), $e.Zc);
            return () => clearTimeout(e);
          }, []),
          r.createElement(
            it,
            { orientation: a },
            l
              ? r.createElement(r.Fragment, null, t)
              : r.createElement(
                  Ve.A,
                  { component: null },
                  i &&
                    r.createElement(
                      Ue.A,
                      { classNames: n ? "fade" : "", timeout: n ? $e.Zc : 0 },
                      t
                    )
                )
          )
        );
      };
      const lt = c.default.ul.withConfig({
        displayName: "social__StyledSocialList",
        componentId: "sc-anu6nt-0",
      })([
        "display:flex;flex-direction:column;align-items:center;margin:0;padding:0;list-style:none;&:after{content:'';display:block;width:1px;height:90px;margin:0 auto;background-color:var(--light-slate);}li{&:last-of-type{margin-bottom:20px;}a{padding:10px;&:hover,&:focus{transform:translateY(-3px);}svg{width:20px;height:20px;}}}",
      ]);
      var st = (e) => {
        let { isHome: t } = e;
        return r.createElement(
          ot,
          { isHome: t, orientation: "left" },
          r.createElement(
            lt,
            null,
            Ge.socialMedia &&
              Ge.socialMedia.map((e, t) => {
                let { url: n, name: a } = e;
                return r.createElement(
                  "li",
                  { key: t },
                  r.createElement(
                    "a",
                    {
                      href: n,
                      "aria-label": a,
                      target: "_blank",
                      rel: "noreferrer",
                    },
                    r.createElement(We.In, { name: a })
                  )
                );
              })
          )
        );
      };
      const ct = c.default.div.withConfig({
        displayName: "email__StyledLinkWrapper",
        componentId: "sc-2epoq-0",
      })([
        "display:flex;flex-direction:column;align-items:center;position:relative;&:after{content:'';display:block;width:1px;height:90px;margin:0 auto;background-color:var(--light-slate);}a{margin:20px auto;padding:10px;font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:var(--fz-lg);letter-spacing:0.1em;writing-mode:vertical-rl;&:hover,&:focus{transform:translateY(-3px);}}",
      ]);
      var ut = (e) => {
        let { isHome: t } = e;
        return r.createElement(
          ot,
          { isHome: t, orientation: "right" },
          r.createElement(
            ct,
            null,
            r.createElement("a", { href: "mailto:" + Ge.email }, Ge.email)
          )
        );
      };
      const dt = c.default.footer.withConfig({
          displayName: "footer__StyledFooter",
          componentId: "sc-4jwnt4-0",
        })(
          [
            "",
            ";flex-direction:column;height:auto;min-height:70px;padding:15px;text-align:center;",
          ],
          (e) => {
            let { theme: t } = e;
            return t.mixins.flexCenter;
          }
        ),
        ft = c.default.div.withConfig({
          displayName: "footer__StyledSocialLinks",
          componentId: "sc-4jwnt4-1",
        })(
          [
            "display:none;@media (max-width:768px){display:block;width:100%;max-width:270px;margin:0 auto 10px;color:var(--light-slate);}ul{",
            ";padding:0;margin:0;list-style:none;a{padding:10px;svg{width:20px;height:20px;}}}",
          ],
          (e) => {
            let { theme: t } = e;
            return t.mixins.flexBetween;
          }
        ),
        mt = c.default.div.withConfig({
          displayName: "footer__StyledCredit",
          componentId: "sc-4jwnt4-2",
        })([
          "color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:1;a{padding:10px;}.github-stats{margin-top:10px;& > span{display:inline-flex;align-items:center;margin:0 7px;}svg{display:inline-block;margin-right:5px;width:14px;height:14px;}}",
        ]);
      var pt = () => {
        const { 0: e, 1: t } = (0, r.useState)({ stars: null, forks: null });
        return (
          (0, r.useEffect)(() => {
            fetch("https://api.github.com/repos/bchiang7/v4")
              .then((e) => e.json())
              .then((e) => {
                const { stargazers_count: n, forks_count: r } = e;
                t({ stars: n, forks: r });
              })
              .catch((e) => console.error(e));
          }, []),
          r.createElement(
            dt,
            null,
            r.createElement(
              ft,
              null,
              r.createElement(
                "ul",
                null,
                Ge.socialMedia &&
                  Ge.socialMedia.map((e, t) => {
                    let { name: n, url: a } = e;
                    return r.createElement(
                      "li",
                      { key: t },
                      r.createElement(
                        "a",
                        { href: a, "aria-label": n },
                        r.createElement(We.In, { name: n })
                      )
                    );
                  })
              )
            ),
            r.createElement(
              mt,
              { tabindex: "-1" },
              r.createElement(
                "a",
                { href: "https://github.com/bchiang7/v4" },
                r.createElement(
                  "div",
                  null,
                  "Designed & Built by Brittany Chiang"
                ),
                e.stars &&
                  e.forks &&
                  r.createElement(
                    "div",
                    { className: "github-stats" },
                    r.createElement(
                      "span",
                      null,
                      r.createElement(We.In, { name: "Star" }),
                      r.createElement("span", null, e.stars.toLocaleString())
                    ),
                    r.createElement(
                      "span",
                      null,
                      r.createElement(We.In, { name: "Fork" }),
                      r.createElement("span", null, e.forks.toLocaleString())
                    )
                  )
              )
            )
          )
        );
      };
      const ht = c.default.section.withConfig({
        displayName: "hero__StyledHeroSection",
        componentId: "sc-116xg8t-0",
      })(
        [
          "",
          ";flex-direction:column;align-items:flex-start;min-height:100vh;height:100vh;padding:0;@media (max-height:700px) and (min-width:700px),(max-width:360px){height:auto;padding-top:var(--nav-height);}h1{margin:0 0 30px 4px;color:var(--green);font-family:var(--font-mono);font-size:clamp(var(--fz-sm),5vw,var(--fz-md));font-weight:400;@media (max-width:480px){margin:0 0 20px 2px;}}h3{margin-top:5px;color:var(--slate);line-height:0.9;}p{margin:20px 0 0;max-width:540px;}.email-link{",
          ";margin-top:50px;}",
        ],
        (e) => {
          let { theme: t } = e;
          return t.mixins.flexCenter;
        },
        (e) => {
          let { theme: t } = e;
          return t.mixins.bigButton;
        }
      );
      var gt = () => {
          const { 0: e, 1: t } = (0, r.useState)(!1),
            n = (0, Xe.jt)();
          (0, r.useEffect)(() => {
            if (n) return;
            const e = setTimeout(() => t(!0), $e.LF);
            return () => clearTimeout(e);
          }, []);
          const a = [
            r.createElement("h1", null, "Hi, my name is"),
            r.createElement(
              "h2",
              { className: "big-heading" },
              "Sahitya Dubey"
            ),
            r.createElement(
              "h3",
              { className: "big-heading" },
              "I build things for the mobile."
            ),
            r.createElement(
              r.Fragment,
              null,
              r.createElement(
                "p",
                null,
                "I’m a senior software engineer specializing in building exceptional digital mobile experiences. Currently, I’m focused on building accessible, human-centered products at",
                " ",
                r.createElement(
                  "a",
                  {
                    href: "https://www.allegion.com/corp/en/about.html",
                    target: "_blank",
                    rel: "noreferrer",
                  },
                  "Allegion"
                ),
                "."
              )
            ),
            r.createElement(
              "a",
              {
                className: "email-link",
                href: "https://github.com/sahityadubey",
                target: "_blank",
                rel: "noreferrer",
              },
              "Check out my projects!"
            ),
          ];
          return r.createElement(
            ht,
            null,
            n
              ? r.createElement(
                  r.Fragment,
                  null,
                  a.map((e, t) => r.createElement("div", { key: t }, e))
                )
              : r.createElement(
                  Ve.A,
                  { component: null },
                  e &&
                    a.map((e, t) =>
                      r.createElement(
                        Ue.A,
                        { key: t, classNames: "fadeup", timeout: $e.Zc },
                        r.createElement(
                          "div",
                          { style: { transitionDelay: t + 1 + "00ms" } },
                          e
                        )
                      )
                    )
                )
          );
        },
        vt = n(3973),
        xt = n(2468);
      const bt = c.default.section.withConfig({
          displayName: "about__StyledAboutSection",
          componentId: "sc-1ownso9-0",
        })([
          "max-width:900px;.inner{display:grid;grid-template-columns:3fr 2fr;grid-gap:50px;@media (max-width:768px){display:block;}}",
        ]),
        yt = c.default.div.withConfig({
          displayName: "about__StyledText",
          componentId: "sc-1ownso9-1",
        })([
          "ul.skills-list{display:grid;grid-template-columns:repeat(2,minmax(140px,200px));grid-gap:0 10px;padding:0;margin:20px 0 0 0;overflow:hidden;list-style:none;li{position:relative;margin-bottom:10px;padding-left:20px;font-family:var(--font-mono);font-size:var(--fz-xs);&:before{content:'▹';position:absolute;left:0;color:var(--green);font-size:var(--fz-sm);line-height:12px;}}}",
        ]),
        wt = c.default.div.withConfig({
          displayName: "about__StyledPic",
          componentId: "sc-1ownso9-2",
        })(
          [
            "position:relative;max-width:300px;@media (max-width:768px){margin:50px auto 0;width:70%;}.wrapper{",
            ";display:block;position:relative;width:100%;border-radius:var(--border-radius);background-color:var(--green);&:hover,&:focus{outline:0;transform:translate(-4px,-4px);&:after{transform:translate(8px,8px);}.img{filter:none;mix-blend-mode:normal;}}.img{position:relative;border-radius:var(--border-radius);mix-blend-mode:multiply;filter:grayscale(100%) contrast(1);transition:var(--transition);}&:before,&:after{content:'';display:block;position:absolute;width:100%;height:100%;border-radius:var(--border-radius);transition:var(--transition);}&:before{top:0;left:0;background-color:var(--navy);mix-blend-mode:screen;}&:after{border:2px solid var(--green);top:14px;left:14px;z-index:-1;}}",
          ],
          (e) => {
            let { theme: t } = e;
            return t.mixins.boxShadow;
          }
        );
      var Et = () => {
        const e = (0, r.useRef)(null),
          t = (0, Xe.jt)();
        (0, r.useEffect)(() => {
          t || xt.A.reveal(e.current, (0, Ge.srConfig)());
        }, []);
        const a = [
          "JavaScript (ES6+)",
          "TypeScript",
          "React",
          "Eleventy",
          "Node.js",
          "WordPress",
        ];
        return r.createElement(
          bt,
          { id: "about", ref: e },
          r.createElement("h2", { className: "numbered-heading" }, "About Me"),
          r.createElement(
            "div",
            { className: "inner" },
            r.createElement(
              yt,
              null,
              r.createElement(
                "div",
                null,
                r.createElement(
                  "p",
                  null,
                  "Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!"
                ),
                r.createElement(
                  "p",
                  null,
                  "Fast-forward to today, and I’ve had the privilege of working at",
                  " ",
                  r.createElement(
                    "a",
                    { href: "https://us.mullenlowe.com/" },
                    "an advertising agency"
                  ),
                  ",",
                  " ",
                  r.createElement(
                    "a",
                    { href: "https://starry.com/" },
                    "a start-up"
                  ),
                  ",",
                  " ",
                  r.createElement(
                    "a",
                    { href: "https://www.apple.com/" },
                    "a huge corporation"
                  ),
                  ", and",
                  " ",
                  r.createElement(
                    "a",
                    { href: "https://scout.camd.northeastern.edu/" },
                    "a student-led design studio"
                  ),
                  ". My main focus these days is building accessible, inclusive products and digital experiences at ",
                  r.createElement(
                    "a",
                    { href: "https://upstatement.com/" },
                    "Upstatement"
                  ),
                  " for a variety of clients."
                ),
                r.createElement(
                  "p",
                  null,
                  "I also recently",
                  " ",
                  r.createElement(
                    "a",
                    {
                      href: "https://www.newline.co/courses/build-a-spotify-connected-app",
                    },
                    "launched a course"
                  ),
                  " ",
                  "that covers everything you need to build a web app with the Spotify API using Node & React."
                ),
                r.createElement(
                  "p",
                  null,
                  "Here are a few technologies I’ve been working with recently:"
                )
              ),
              r.createElement(
                "ul",
                { className: "skills-list" },
                a && a.map((e, t) => r.createElement("li", { key: t }, e))
              )
            ),
            r.createElement(
              wt,
              null,
              r.createElement(
                "div",
                { className: "wrapper" },
                r.createElement(vt.S, {
                  className: "img",
                  src: "../../images/me.jpg",
                  width: 500,
                  quality: 95,
                  formats: ["AUTO", "WEBP", "AVIF"],
                  alt: "Headshot",
                  __imageData: n(3880),
                })
              )
            )
          )
        );
      };
      const kt = c.default.section.withConfig({
          displayName: "jobs__StyledJobsSection",
          componentId: "sc-59sdss-0",
        })([
          "max-width:700px;.inner{display:flex;@media (max-width:600px){display:block;}@media (min-width:700px){min-height:340px;}}",
        ]),
        Ct = c.default.div.withConfig({
          displayName: "jobs__StyledTabList",
          componentId: "sc-59sdss-1",
        })([
          "position:relative;z-index:3;width:max-content;padding:0;margin:0;list-style:none;@media (max-width:600px){display:flex;overflow-x:auto;width:calc(100% + 100px);padding-left:50px;margin-left:-50px;margin-bottom:30px;}@media (max-width:480px){width:calc(100% + 50px);padding-left:25px;margin-left:-25px;}li{&:first-of-type{@media (max-width:600px){margin-left:50px;}@media (max-width:480px){margin-left:25px;}}&:last-of-type{@media (max-width:600px){padding-right:50px;}@media (max-width:480px){padding-right:25px;}}}",
        ]),
        St = c.default.button.withConfig({
          displayName: "jobs__StyledTabButton",
          componentId: "sc-59sdss-2",
        })(
          [
            "",
            ";display:flex;align-items:center;width:100%;height:var(--tab-height);padding:0 20px 2px;border-left:2px solid var(--lightest-navy);background-color:transparent;color:",
            ";font-family:var(--font-mono);font-size:var(--fz-xs);text-align:left;white-space:nowrap;@media (max-width:768px){padding:0 15px 2px;}@media (max-width:600px){",
            ";min-width:120px;padding:0 15px;border-left:0;border-bottom:2px solid var(--lightest-navy);text-align:center;}&:hover,&:focus{background-color:var(--light-navy);}",
          ],
          (e) => {
            let { theme: t } = e;
            return t.mixins.link;
          },
          (e) => {
            let { isActive: t } = e;
            return t ? "var(--green)" : "var(--slate)";
          },
          (e) => {
            let { theme: t } = e;
            return t.mixins.flexCenter;
          }
        ),
        Tt = c.default.div.withConfig({
          displayName: "jobs__StyledHighlight",
          componentId: "sc-59sdss-3",
        })(
          [
            "position:absolute;top:0;left:0;z-index:10;width:2px;height:var(--tab-height);border-radius:var(--border-radius);background:var(--green);transform:translateY(calc(",
            " * var(--tab-height)));transition:transform 0.25s cubic-bezier(0.645,0.045,0.355,1);transition-delay:0.1s;@media (max-width:600px){top:auto;bottom:0;width:100%;max-width:var(--tab-width);height:2px;margin-left:50px;transform:translateX(calc(",
            " * var(--tab-width)));}@media (max-width:480px){margin-left:25px;}",
          ],
          (e) => {
            let { activeTabId: t } = e;
            return t;
          },
          (e) => {
            let { activeTabId: t } = e;
            return t;
          }
        ),
        Lt = c.default.div.withConfig({
          displayName: "jobs__StyledTabPanels",
          componentId: "sc-59sdss-4",
        })([
          "position:relative;width:100%;margin-left:20px;@media (max-width:600px){margin-left:0;}",
        ]),
        At = c.default.div.withConfig({
          displayName: "jobs__StyledTabPanel",
          componentId: "sc-59sdss-5",
        })(
          [
            "width:100%;height:auto;padding:10px 5px;ul{",
            ";}h3{margin-bottom:2px;font-size:var(--fz-xxl);font-weight:500;line-height:1.3;.company{color:var(--green);}}.range{margin-bottom:25px;color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xs);}",
          ],
          (e) => {
            let { theme: t } = e;
            return t.mixins.fancyList;
          }
        );
      var jt = () => {
        const e = (0, o.useStaticQuery)("2009693873").jobs.edges,
          { 0: t, 1: n } = (0, r.useState)(0),
          { 0: a, 1: i } = (0, r.useState)(null),
          l = (0, r.useRef)([]),
          s = (0, r.useRef)(null),
          c = (0, Xe.jt)();
        (0, r.useEffect)(() => {
          c || xt.A.reveal(s.current, (0, Ge.srConfig)());
        }, []);
        (0, r.useEffect)(() => {
          l.current[a]
            ? l.current[a].focus()
            : (a >= l.current.length && i(0), a < 0 && i(l.current.length - 1));
        }, [a]);
        return r.createElement(
          kt,
          { id: "jobs", ref: s },
          r.createElement(
            "h2",
            { className: "numbered-heading" },
            "Where I’ve Worked"
          ),
          r.createElement(
            "div",
            { className: "inner" },
            r.createElement(
              Ct,
              {
                role: "tablist",
                "aria-label": "Job tabs",
                onKeyDown: (e) =>
                  ((e) => {
                    switch (e.key) {
                      case $e.Lb.ARROW_UP:
                        e.preventDefault(), i(a - 1);
                        break;
                      case $e.Lb.ARROW_DOWN:
                        e.preventDefault(), i(a + 1);
                    }
                  })(e),
              },
              e &&
                e.map((e, a) => {
                  let { node: i } = e;
                  const { company: o } = i.frontmatter;
                  return r.createElement(
                    St,
                    {
                      key: a,
                      isActive: t === a,
                      onClick: () => n(a),
                      ref: (e) => (l.current[a] = e),
                      id: "tab-" + a,
                      role: "tab",
                      tabIndex: t === a ? "0" : "-1",
                      "aria-selected": t === a,
                      "aria-controls": "panel-" + a,
                    },
                    r.createElement("span", null, o)
                  );
                }),
              r.createElement(Tt, { activeTabId: t })
            ),
            r.createElement(
              Lt,
              null,
              e &&
                e.map((e, n) => {
                  let { node: a } = e;
                  const { frontmatter: i, html: o } = a,
                    { title: l, url: s, company: c, range: u } = i;
                  return r.createElement(
                    Ue.A,
                    { key: n, in: t === n, timeout: 250, classNames: "fade" },
                    r.createElement(
                      At,
                      {
                        id: "panel-" + n,
                        role: "tabpanel",
                        tabIndex: t === n ? "0" : "-1",
                        "aria-labelledby": "tab-" + n,
                        "aria-hidden": t !== n,
                        hidden: t !== n,
                      },
                      r.createElement(
                        "h3",
                        null,
                        r.createElement("span", null, l),
                        r.createElement(
                          "span",
                          { className: "company" },
                          " @ ",
                          r.createElement(
                            "a",
                            { href: s, className: "inline-link" },
                            c
                          )
                        )
                      ),
                      r.createElement("p", { className: "range" }, u),
                      r.createElement("div", {
                        dangerouslySetInnerHTML: { __html: o },
                      })
                    )
                  );
                })
            )
          )
        );
      };
      const Nt = c.default.ul.withConfig({
          displayName: "featured__StyledProjectsGrid",
          componentId: "sc-ywnbqt-0",
        })(["", ";a{position:relative;z-index:1;}"], (e) => {
          let { theme: t } = e;
          return t.mixins.resetList;
        }),
        Ot = c.default.li.withConfig({
          displayName: "featured__StyledProject",
          componentId: "sc-ywnbqt-1",
        })(
          [
            "position:relative;display:grid;grid-gap:10px;grid-template-columns:repeat(12,1fr);align-items:center;@media (max-width:768px){",
            ";}&:not(:last-of-type){margin-bottom:100px;@media (max-width:768px){margin-bottom:70px;}@media (max-width:480px){margin-bottom:30px;}}&:nth-of-type(odd){.project-content{grid-column:7 / -1;text-align:right;@media (max-width:1080px){grid-column:5 / -1;}@media (max-width:768px){grid-column:1 / -1;padding:40px 40px 30px;text-align:left;}@media (max-width:480px){padding:25px 25px 20px;}}.project-tech-list{justify-content:flex-end;@media (max-width:768px){justify-content:flex-start;}li{margin:0 0 5px 20px;@media (max-width:768px){margin:0 10px 5px 0;}}}.project-links{justify-content:flex-end;margin-left:0;margin-right:-10px;@media (max-width:768px){justify-content:flex-start;margin-left:-10px;margin-right:0;}}.project-image{grid-column:1 / 8;@media (max-width:768px){grid-column:1 / -1;}}}.project-content{position:relative;grid-column:1 / 7;grid-row:1 / -1;@media (max-width:1080px){grid-column:1 / 9;}@media (max-width:768px){display:flex;flex-direction:column;justify-content:center;height:100%;grid-column:1 / -1;padding:40px 40px 30px;z-index:5;}@media (max-width:480px){padding:30px 25px 20px;}}.project-overline{margin:10px 0;color:var(--green);font-family:var(--font-mono);font-size:var(--fz-xs);font-weight:400;}.project-title{color:var(--lightest-slate);font-size:clamp(24px,5vw,28px);@media (min-width:768px){margin:0 0 20px;}@media (max-width:768px){color:var(--white);a{position:static;&:before{content:'';display:block;position:absolute;z-index:0;width:100%;height:100%;top:0;left:0;}}}}.project-description{",
            ";position:relative;z-index:2;padding:25px;border-radius:var(--border-radius);background-color:var(--light-navy);color:var(--light-slate);font-size:var(--fz-lg);@media (max-width:768px){padding:20px 0;background-color:transparent;box-shadow:none;&:hover{box-shadow:none;}}a{",
            ";}strong{color:var(--white);font-weight:normal;}}.project-tech-list{display:flex;flex-wrap:wrap;position:relative;z-index:2;margin:25px 0 10px;padding:0;list-style:none;li{margin:0 20px 5px 0;color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xs);white-space:nowrap;}@media (max-width:768px){margin:10px 0;li{margin:0 10px 5px 0;color:var(--lightest-slate);}}}.project-links{display:flex;align-items:center;position:relative;margin-top:10px;margin-left:-10px;color:var(--lightest-slate);a{",
            ";padding:10px;&.external{svg{width:22px;height:22px;margin-top:-4px;}}svg{width:20px;height:20px;}}.cta{",
            ";margin:10px;}}.project-image{",
            ";grid-column:6 / -1;grid-row:1 / -1;position:relative;z-index:1;@media (max-width:768px){grid-column:1 / -1;height:100%;opacity:0.25;}a{width:100%;height:100%;background-color:var(--green);border-radius:var(--border-radius);vertical-align:middle;&:hover,&:focus{background:transparent;outline:0;&:before,.img{background:transparent;filter:none;}}&:before{content:'';position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;z-index:3;transition:var(--transition);background-color:var(--navy);mix-blend-mode:screen;}}.img{border-radius:var(--border-radius);mix-blend-mode:multiply;filter:grayscale(100%) contrast(1) brightness(90%);@media (max-width:768px){object-fit:cover;width:auto;height:100%;filter:grayscale(100%) contrast(1) brightness(50%);}}}",
          ],
          (e) => {
            let { theme: t } = e;
            return t.mixins.boxShadow;
          },
          (e) => {
            let { theme: t } = e;
            return t.mixins.boxShadow;
          },
          (e) => {
            let { theme: t } = e;
            return t.mixins.inlineLink;
          },
          (e) => {
            let { theme: t } = e;
            return t.mixins.flexCenter;
          },
          (e) => {
            let { theme: t } = e;
            return t.mixins.smallButton;
          },
          (e) => {
            let { theme: t } = e;
            return t.mixins.boxShadow;
          }
        );
      var zt = () => {
        const e = (0, o.useStaticQuery)("2031412112").featured.edges.filter(
            (e) => {
              let { node: t } = e;
              return t;
            }
          ),
          t = (0, r.useRef)(null),
          n = (0, r.useRef)([]),
          a = (0, Xe.jt)();
        return (
          (0, r.useEffect)(() => {
            a ||
              (xt.A.reveal(t.current, (0, Ge.srConfig)()),
              n.current.forEach((e, t) =>
                xt.A.reveal(e, (0, Ge.srConfig)(100 * t))
              ));
          }, []),
          r.createElement(
            "section",
            { id: "projects" },
            r.createElement(
              "h2",
              { className: "numbered-heading", ref: t },
              "Some Things I’ve Built"
            ),
            r.createElement(
              Nt,
              null,
              e &&
                e.map((e, t) => {
                  let { node: a } = e;
                  const { frontmatter: i, html: o } = a,
                    {
                      external: l,
                      title: s,
                      tech: c,
                      github: u,
                      cover: d,
                      cta: f,
                    } = i,
                    m = (0, vt.d)(d);
                  return r.createElement(
                    Ot,
                    { key: t, ref: (e) => (n.current[t] = e) },
                    r.createElement(
                      "div",
                      { className: "project-content" },
                      r.createElement(
                        "div",
                        null,
                        r.createElement(
                          "p",
                          { className: "project-overline" },
                          "Featured Project"
                        ),
                        r.createElement(
                          "h3",
                          { className: "project-title" },
                          r.createElement("a", { href: l }, s)
                        ),
                        r.createElement("div", {
                          className: "project-description",
                          dangerouslySetInnerHTML: { __html: o },
                        }),
                        c.length &&
                          r.createElement(
                            "ul",
                            { className: "project-tech-list" },
                            c.map((e, t) =>
                              r.createElement("li", { key: t }, e)
                            )
                          ),
                        r.createElement(
                          "div",
                          { className: "project-links" },
                          f &&
                            r.createElement(
                              "a",
                              {
                                href: f,
                                "aria-label": "Course Link",
                                className: "cta",
                              },
                              "Learn More"
                            ),
                          u &&
                            r.createElement(
                              "a",
                              { href: u, "aria-label": "GitHub Link" },
                              r.createElement(We.In, { name: "GitHub" })
                            ),
                          l &&
                            !f &&
                            r.createElement(
                              "a",
                              {
                                href: l,
                                "aria-label": "External Link",
                                className: "external",
                              },
                              r.createElement(We.In, { name: "External" })
                            )
                        )
                      )
                    ),
                    r.createElement(
                      "div",
                      { className: "project-image" },
                      r.createElement(
                        "a",
                        { href: l || u || "#" },
                        r.createElement(vt.G, {
                          image: m,
                          alt: s,
                          className: "img",
                        })
                      )
                    )
                  );
                })
            )
          )
        );
      };
      const It = c.default.section.withConfig({
          displayName: "projects__StyledProjectsSection",
          componentId: "sc-1v1fime-0",
        })(
          [
            "display:flex;flex-direction:column;align-items:center;h2{font-size:clamp(24px,5vw,var(--fz-heading));}.archive-link{font-family:var(--font-mono);font-size:var(--fz-sm);&:after{bottom:0.1em;}}.projects-grid{",
            ";display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;position:relative;margin-top:50px;@media (max-width:1080px){grid-template-columns:repeat(auto-fill,minmax(250px,1fr));}}.more-button{",
            ";margin:80px auto 0;}",
          ],
          (e) => {
            let { theme: t } = e;
            return t.mixins.resetList;
          },
          (e) => {
            let { theme: t } = e;
            return t.mixins.button;
          }
        ),
        Mt = c.default.li.withConfig({
          displayName: "projects__StyledProject",
          componentId: "sc-1v1fime-1",
        })(
          [
            "position:relative;cursor:default;transition:var(--transition);@media (prefers-reduced-motion:no-preference){&:hover,&:focus-within{.project-inner{transform:translateY(-7px);}}}a{position:relative;z-index:1;}.project-inner{",
            ";",
            ";flex-direction:column;align-items:flex-start;position:relative;height:100%;padding:2rem 1.75rem;border-radius:var(--border-radius);background-color:var(--light-navy);transition:var(--transition);overflow:auto;}.project-top{",
            ";margin-bottom:35px;.folder{color:var(--green);svg{width:40px;height:40px;}}.project-links{display:flex;align-items:center;margin-right:-10px;color:var(--light-slate);a{",
            ";padding:5px 7px;&.external{svg{width:22px;height:22px;margin-top:-4px;}}svg{width:20px;height:20px;}}}}.project-title{margin:0 0 10px;color:var(--lightest-slate);font-size:var(--fz-xxl);a{position:static;&:before{content:'';display:block;position:absolute;z-index:0;width:100%;height:100%;top:0;left:0;}}}.project-description{color:var(--light-slate);font-size:17px;a{",
            ";}}.project-tech-list{display:flex;align-items:flex-end;flex-grow:1;flex-wrap:wrap;padding:0;margin:20px 0 0 0;list-style:none;li{font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:1.75;&:not(:last-of-type){margin-right:15px;}}}",
          ],
          (e) => {
            let { theme: t } = e;
            return t.mixins.boxShadow;
          },
          (e) => {
            let { theme: t } = e;
            return t.mixins.flexBetween;
          },
          (e) => {
            let { theme: t } = e;
            return t.mixins.flexBetween;
          },
          (e) => {
            let { theme: t } = e;
            return t.mixins.flexCenter;
          },
          (e) => {
            let { theme: t } = e;
            return t.mixins.inlineLink;
          }
        );
      var Pt = () => {
        const e = (0, o.useStaticQuery)("3825832676"),
          { 0: t, 1: n } = (0, r.useState)(!1),
          a = (0, r.useRef)(null),
          i = (0, r.useRef)(null),
          l = (0, r.useRef)([]),
          s = (0, Xe.jt)();
        (0, r.useEffect)(() => {
          s ||
            (xt.A.reveal(a.current, (0, Ge.srConfig)()),
            xt.A.reveal(i.current, (0, Ge.srConfig)()),
            l.current.forEach((e, t) =>
              xt.A.reveal(e, (0, Ge.srConfig)(100 * t))
            ));
        }, []);
        const c = e.projects.edges.filter((e) => {
            let { node: t } = e;
            return t;
          }),
          u = c.slice(0, 6),
          d = t ? c : u,
          f = (e) => {
            const { frontmatter: t, html: n } = e,
              { github: a, external: i, title: o, tech: l } = t;
            return r.createElement(
              "div",
              { className: "project-inner" },
              r.createElement(
                "header",
                null,
                r.createElement(
                  "div",
                  { className: "project-top" },
                  r.createElement(
                    "div",
                    { className: "folder" },
                    r.createElement(We.In, { name: "Folder" })
                  ),
                  r.createElement(
                    "div",
                    { className: "project-links" },
                    a &&
                      r.createElement(
                        "a",
                        {
                          href: a,
                          "aria-label": "GitHub Link",
                          target: "_blank",
                          rel: "noreferrer",
                        },
                        r.createElement(We.In, { name: "GitHub" })
                      ),
                    i &&
                      r.createElement(
                        "a",
                        {
                          href: i,
                          "aria-label": "External Link",
                          className: "external",
                          target: "_blank",
                          rel: "noreferrer",
                        },
                        r.createElement(We.In, { name: "External" })
                      )
                  )
                ),
                r.createElement(
                  "h3",
                  { className: "project-title" },
                  r.createElement(
                    "a",
                    { href: i, target: "_blank", rel: "noreferrer" },
                    o
                  )
                ),
                r.createElement("div", {
                  className: "project-description",
                  dangerouslySetInnerHTML: { __html: n },
                })
              ),
              r.createElement(
                "footer",
                null,
                l &&
                  r.createElement(
                    "ul",
                    { className: "project-tech-list" },
                    l.map((e, t) => r.createElement("li", { key: t }, e))
                  )
              )
            );
          };
        return r.createElement(
          It,
          null,
          r.createElement("h2", { ref: a }, "Other Noteworthy Projects"),
          r.createElement(
            o.Link,
            { className: "inline-link archive-link", to: "/archive", ref: i },
            "view the archive"
          ),
          r.createElement(
            "ul",
            { className: "projects-grid" },
            s
              ? r.createElement(
                  r.Fragment,
                  null,
                  d &&
                    d.map((e, t) => {
                      let { node: n } = e;
                      return r.createElement(Mt, { key: t }, f(n));
                    })
                )
              : r.createElement(
                  Ve.A,
                  { component: null },
                  d &&
                    d.map((e, t) => {
                      let { node: n } = e;
                      return r.createElement(
                        Ue.A,
                        {
                          key: t,
                          classNames: "fadeup",
                          timeout: t >= 6 ? 300 * (t - 6) : 300,
                          exit: !1,
                        },
                        r.createElement(
                          Mt,
                          {
                            key: t,
                            ref: (e) => (l.current[t] = e),
                            style: {
                              transitionDelay:
                                (t >= 6 ? 100 * (t - 6) : 0) + "ms",
                            },
                          },
                          f(n)
                        )
                      );
                    })
                )
          ),
          r.createElement(
            "button",
            { className: "more-button", onClick: () => n(!t) },
            "Show ",
            t ? "Less" : "More"
          )
        );
      };
      const _t = c.default.section.withConfig({
        displayName: "contact__StyledContactSection",
        componentId: "sc-1m8df4t-0",
      })(
        [
          "max-width:600px;margin:0 auto 100px;text-align:center;@media (max-width:768px){margin:0 auto 50px;}.overline{display:block;margin-bottom:20px;color:var(--green);font-family:var(--font-mono);font-size:var(--fz-md);font-weight:400;&:before{bottom:0;font-size:var(--fz-sm);}&:after{display:none;}}.title{font-size:clamp(40px,5vw,60px);}.email-link{",
          ";margin-top:50px;}",
        ],
        (e) => {
          let { theme: t } = e;
          return t.mixins.bigButton;
        }
      );
      var Rt = () => {
        const e = (0, r.useRef)(null),
          t = (0, Xe.jt)();
        return (
          (0, r.useEffect)(() => {
            t || xt.A.reveal(e.current, (0, Ge.srConfig)());
          }, []),
          r.createElement(
            _t,
            { id: "contact", ref: e },
            r.createElement(
              "h2",
              { className: "numbered-heading overline" },
              "What’s Next?"
            ),
            r.createElement("h2", { className: "title" }, "Get In Touch"),
            r.createElement(
              "p",
              null,
              "Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!"
            ),
            r.createElement(
              "a",
              { className: "email-link", href: "mailto:" + Ge.email },
              "Say Hello"
            )
          )
        );
      };
    },
    1929: function (e) {
      e.exports = {
        email: "brittany.chiang@gmail.com",
        socialMedia: [
          { name: "GitHub", url: "https://github.com/bchiang7" },
          { name: "Instagram", url: "https://www.instagram.com/bchiang7" },
          { name: "Twitter", url: "https://twitter.com/bchiang7" },
          { name: "Linkedin", url: "https://www.linkedin.com/in/bchiang7" },
          { name: "Codepen", url: "https://codepen.io/bchiang7" },
        ],
        navLinks: [
          { name: "About", url: "/#about" },
          { name: "Experience", url: "/#jobs" },
          { name: "Work", url: "/#projects" },
          { name: "Contact", url: "/#contact" },
        ],
        colors: { green: "#64ffda", navy: "#0a192f", darkNavy: "#020c1b" },
        srConfig: function (e, t) {
          return (
            void 0 === e && (e = 200),
            void 0 === t && (t = 0.25),
            {
              origin: "bottom",
              distance: "20px",
              duration: 500,
              delay: e,
              rotate: { x: 0, y: 0, z: 0 },
              opacity: 0,
              scale: 1,
              easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
              mobile: !0,
              reset: !1,
              useDelay: "always",
              viewFactor: t,
              viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
            }
          );
        },
      };
    },
    1378: function (e, t, n) {
      "use strict";
      n.d(t, {
        Wr: function () {
          return a;
        },
        jt: function () {
          return s;
        },
        YU: function () {
          return c;
        },
      });
      var r = n(6540);
      var a = (e, t) => {
        (0, r.useEffect)(() => {
          const n = (n) => {
            e.current && !e.current.contains(n.target) && t(n);
          };
          return (
            document.addEventListener("mousedown", n),
            document.addEventListener("touchstart", n),
            () => {
              document.removeEventListener("mousedown", n),
                document.removeEventListener("touchstart", n);
            }
          );
        }, [e, t]);
      };
      const i = "(prefers-reduced-motion: no-preference)",
        o = "undefined" == typeof window,
        l = () => !!o || !window.matchMedia(i).matches;
      var s = function () {
        const { 0: e, 1: t } = (0, r.useState)(l);
        return (
          (0, r.useEffect)(() => {
            const e = window.matchMedia(i),
              n = (e) => {
                t(!e.matches);
              };
            return (
              e.addListener(n),
              () => {
                e.removeListener(n);
              }
            );
          }, []),
          e
        );
      };
      var c = function (e) {
        let {
          initialDirection: t,
          thresholdPixels: n,
          off: a,
        } = void 0 === e ? {} : e;
        const { 0: i, 1: o } = (0, r.useState)(t);
        return (
          (0, r.useEffect)(() => {
            const e = n || 0;
            let r = window.pageYOffset,
              i = !1;
            const l = () => {
                const t = window.pageYOffset;
                Math.abs(t - r) < e ||
                  (o(t > r ? "down" : "up"), (r = t > 0 ? t : 0)),
                  (i = !1);
              },
              s = () => {
                i || (window.requestAnimationFrame(l), (i = !0));
              };
            return (
              a ? o(t) : window.addEventListener("scroll", s),
              () => window.removeEventListener("scroll", s)
            );
          }, [t, n, a]),
          i
        );
      };
    },
    1597: function (e, t, n) {
      "use strict";
      n.d(t, {
        LF: function () {
          return r;
        },
        Lb: function () {
          return i;
        },
        Zc: function () {
          return a;
        },
      });
      const r = 1e3,
        a = 2e3,
        i = {
          ARROW_LEFT: "ArrowLeft",
          ARROW_LEFT_IE11: "Left",
          ARROW_RIGHT: "ArrowRight",
          ARROW_RIGHT_IE11: "Right",
          ARROW_UP: "ArrowUp",
          ARROW_UP_IE11: "Up",
          ARROW_DOWN: "ArrowDown",
          ARROW_DOWN_IE11: "Down",
          ESCAPE: "Escape",
          ESCAPE_IE11: "Esc",
          TAB: "Tab",
          SPACE: " ",
          SPACE_IE11: "Spacebar",
          ENTER: "Enter",
        };
    },
    2468: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return te;
        },
      });
      var r = function (e) {
        return "object" == typeof window.Node
          ? e instanceof window.Node
          : null !== e &&
              "object" == typeof e &&
              "number" == typeof e.nodeType &&
              "string" == typeof e.nodeName;
      };
      var a = function (e) {
        var t = Object.prototype.toString.call(e);
        return "object" == typeof window.NodeList
          ? e instanceof window.NodeList
          : null !== e &&
              "object" == typeof e &&
              "number" == typeof e.length &&
              /^\[object (HTMLCollection|NodeList|Object)\]$/.test(t) &&
              (0 === e.length || r(e[0]));
      };
      var i = function (e, t) {
        if ((void 0 === t && (t = document), e instanceof Array))
          return e.filter(r);
        if (r(e)) return [e];
        if (a(e)) return Array.prototype.slice.call(e);
        if ("string" == typeof e)
          try {
            var n = t.querySelectorAll(e);
            return Array.prototype.slice.call(n);
          } catch (i) {
            return [];
          }
        return [];
      };
      function o(e) {
        if (e.constructor !== Array) throw new TypeError("Expected array.");
        if (16 === e.length) return e;
        if (6 === e.length) {
          var t = l();
          return (
            (t[0] = e[0]),
            (t[1] = e[1]),
            (t[4] = e[2]),
            (t[5] = e[3]),
            (t[12] = e[4]),
            (t[13] = e[5]),
            t
          );
        }
        throw new RangeError("Expected array with either 6 or 16 values.");
      }
      function l() {
        for (var e = [], t = 0; t < 16; t++) t % 5 == 0 ? e.push(1) : e.push(0);
        return e;
      }
      function s(e, t) {
        for (var n = o(e), r = o(t), a = [], i = 0; i < 4; i++)
          for (
            var l = [n[i], n[i + 4], n[i + 8], n[i + 12]], s = 0;
            s < 4;
            s++
          ) {
            var c = 4 * s,
              u = [r[c], r[c + 1], r[c + 2], r[c + 3]],
              d = l[0] * u[0] + l[1] * u[1] + l[2] * u[2] + l[3] * u[3];
            a[i + c] = d;
          }
        return a;
      }
      function c(e) {
        if ("string" == typeof e) {
          var t = e.match(/matrix(3d)?\(([^)]+)\)/);
          if (t) return o(t[2].split(", ").map(parseFloat));
        }
        return l();
      }
      function u(e) {
        var t = (Math.PI / 180) * e,
          n = l();
        return (
          (n[0] = n[5] = Math.cos(t)),
          (n[1] = n[4] = Math.sin(t)),
          (n[4] *= -1),
          n
        );
      }
      function d(e, t) {
        var n = l();
        return (n[0] = e), (n[5] = "number" == typeof t ? t : e), n;
      }
      var f,
        m =
          ((f = Date.now()),
          function (e) {
            var t = Date.now();
            t - f > 16
              ? ((f = t), e(t))
              : setTimeout(function () {
                  return m(e);
                }, 0);
          }),
        p =
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          m,
        h = {
          delay: 0,
          distance: "0",
          duration: 600,
          easing: "cubic-bezier(0.5, 0, 0, 1)",
          interval: 0,
          opacity: 0,
          origin: "bottom",
          rotate: { x: 0, y: 0, z: 0 },
          scale: 1,
          cleanup: !1,
          container: document.documentElement,
          desktop: !0,
          mobile: !0,
          reset: !1,
          useDelay: "always",
          viewFactor: 0,
          viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
          afterReset: function () {},
          afterReveal: function () {},
          beforeReset: function () {},
          beforeReveal: function () {},
        };
      var g = {
        success: function () {
          document.documentElement.classList.add("sr"),
            document.body
              ? (document.body.style.height = "100%")
              : document.addEventListener("DOMContentLoaded", function () {
                  document.body.style.height = "100%";
                });
        },
        failure: function () {
          return (
            document.documentElement.classList.remove("sr"),
            {
              clean: function () {},
              destroy: function () {},
              reveal: function () {},
              sync: function () {},
              get noop() {
                return !0;
              },
            }
          );
        },
      };
      function v(e) {
        return (
          null !== e &&
          e instanceof Object &&
          (e.constructor === Object ||
            "[object Object]" === Object.prototype.toString.call(e))
        );
      }
      function x(e, t) {
        if (v(e))
          return Object.keys(e).forEach(function (n) {
            return t(e[n], n, e);
          });
        if (e instanceof Array)
          return e.forEach(function (n, r) {
            return t(n, r, e);
          });
        throw new TypeError("Expected either an array or object literal.");
      }
      function b(e) {
        for (var t = [], n = arguments.length - 1; n-- > 0; )
          t[n] = arguments[n + 1];
        if (this.constructor.debug && console) {
          var r = "%cScrollReveal: " + e;
          t.forEach(function (e) {
            return (r += "\n — " + e);
          }),
            console.log(r, "color: #ea654b;");
        }
      }
      function y() {
        var e = this,
          t = { active: [], stale: [] },
          n = { active: [], stale: [] },
          r = { active: [], stale: [] };
        try {
          x(i("[data-sr-id]"), function (e) {
            var n = parseInt(e.getAttribute("data-sr-id"));
            t.active.push(n);
          });
        } catch (a) {
          throw a;
        }
        x(this.store.elements, function (e) {
          -1 === t.active.indexOf(e.id) && t.stale.push(e.id);
        }),
          x(t.stale, function (t) {
            return delete e.store.elements[t];
          }),
          x(this.store.elements, function (e) {
            -1 === r.active.indexOf(e.containerId) &&
              r.active.push(e.containerId),
              e.hasOwnProperty("sequence") &&
                -1 === n.active.indexOf(e.sequence.id) &&
                n.active.push(e.sequence.id);
          }),
          x(this.store.containers, function (e) {
            -1 === r.active.indexOf(e.id) && r.stale.push(e.id);
          }),
          x(r.stale, function (t) {
            var n = e.store.containers[t].node;
            n.removeEventListener("scroll", e.delegate),
              n.removeEventListener("resize", e.delegate),
              delete e.store.containers[t];
          }),
          x(this.store.sequences, function (e) {
            -1 === n.active.indexOf(e.id) && n.stale.push(e.id);
          }),
          x(n.stale, function (t) {
            return delete e.store.sequences[t];
          });
      }
      var w = (function () {
        var e = {},
          t = document.documentElement.style;
        function n(n, r) {
          if ((void 0 === r && (r = t), n && "string" == typeof n)) {
            if (e[n]) return e[n];
            if ("string" == typeof r[n]) return (e[n] = n);
            if ("string" == typeof r["-webkit-" + n])
              return (e[n] = "-webkit-" + n);
            throw new RangeError('Unable to find "' + n + '" style property.');
          }
          throw new TypeError("Expected a string.");
        }
        return (
          (n.clearCache = function () {
            return (e = {});
          }),
          n
        );
      })();
      function E(e) {
        var t = window.getComputedStyle(e.node),
          n = t.position,
          r = e.config,
          a = {},
          i =
            (e.node.getAttribute("style") || "").match(
              /[\w-]+\s*:\s*[^;]+\s*/gi
            ) || [];
        (a.computed = i
          ? i
              .map(function (e) {
                return e.trim();
              })
              .join("; ") + ";"
          : ""),
          (a.generated = i.some(function (e) {
            return e.match(/visibility\s?:\s?visible/i);
          })
            ? a.computed
            : i
                .concat(["visibility: visible"])
                .map(function (e) {
                  return e.trim();
                })
                .join("; ") + ";");
        var o,
          f,
          m,
          p = parseFloat(t.opacity),
          h = isNaN(parseFloat(r.opacity))
            ? parseFloat(t.opacity)
            : parseFloat(r.opacity),
          g = {
            computed: p !== h ? "opacity: " + p + ";" : "",
            generated: p !== h ? "opacity: " + h + ";" : "",
          },
          v = [];
        if (parseFloat(r.distance)) {
          var x = "top" === r.origin || "bottom" === r.origin ? "Y" : "X",
            b = r.distance;
          ("top" !== r.origin && "left" !== r.origin) ||
            (b = /^-/.test(b) ? b.substr(1) : "-" + b);
          var y = b.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),
            E = y[0];
          switch (y[1]) {
            case "em":
              b = parseInt(t.fontSize) * E;
              break;
            case "px":
              b = E;
              break;
            case "%":
              b =
                "Y" === x
                  ? (e.node.getBoundingClientRect().height * E) / 100
                  : (e.node.getBoundingClientRect().width * E) / 100;
              break;
            default:
              throw new RangeError("Unrecognized or missing distance unit.");
          }
          "Y" === x
            ? v.push(
                (function (e) {
                  var t = l();
                  return (t[13] = e), t;
                })(b)
              )
            : v.push(
                (function (e) {
                  var t = l();
                  return (t[12] = e), t;
                })(b)
              );
        }
        r.rotate.x &&
          v.push(
            ((o = r.rotate.x),
            (f = (Math.PI / 180) * o),
            ((m = l())[5] = m[10] = Math.cos(f)),
            (m[6] = m[9] = Math.sin(f)),
            (m[9] *= -1),
            m)
          ),
          r.rotate.y &&
            v.push(
              (function (e) {
                var t = (Math.PI / 180) * e,
                  n = l();
                return (
                  (n[0] = n[10] = Math.cos(t)),
                  (n[2] = n[8] = Math.sin(t)),
                  (n[2] *= -1),
                  n
                );
              })(r.rotate.y)
            ),
          r.rotate.z && v.push(u(r.rotate.z)),
          1 !== r.scale &&
            (0 === r.scale ? v.push(d(2e-4)) : v.push(d(r.scale)));
        var k = {};
        if (v.length) {
          (k.property = w("transform")),
            (k.computed = { raw: t[k.property], matrix: c(t[k.property]) }),
            v.unshift(k.computed.matrix);
          var C = v.reduce(s);
          k.generated = {
            initial: k.property + ": matrix3d(" + C.join(", ") + ");",
            final:
              k.property + ": matrix3d(" + k.computed.matrix.join(", ") + ");",
          };
        } else k.generated = { initial: "", final: "" };
        var S = {};
        if (g.generated || k.generated.initial) {
          (S.property = w("transition")),
            (S.computed = t[S.property]),
            (S.fragments = []);
          var T = r.delay,
            L = r.duration,
            A = r.easing;
          g.generated &&
            S.fragments.push({
              delayed: "opacity " + L / 1e3 + "s " + A + " " + T / 1e3 + "s",
              instant: "opacity " + L / 1e3 + "s " + A + " 0s",
            }),
            k.generated.initial &&
              S.fragments.push({
                delayed:
                  k.property + " " + L / 1e3 + "s " + A + " " + T / 1e3 + "s",
                instant: k.property + " " + L / 1e3 + "s " + A + " 0s",
              }),
            S.computed &&
              !S.computed.match(/all 0s|none 0s/) &&
              S.fragments.unshift({ delayed: S.computed, instant: S.computed });
          var j = S.fragments.reduce(
            function (e, t, n) {
              return (
                (e.delayed += 0 === n ? t.delayed : ", " + t.delayed),
                (e.instant += 0 === n ? t.instant : ", " + t.instant),
                e
              );
            },
            { delayed: "", instant: "" }
          );
          S.generated = {
            delayed: S.property + ": " + j.delayed + ";",
            instant: S.property + ": " + j.instant + ";",
          };
        } else S.generated = { delayed: "", instant: "" };
        return {
          inline: a,
          opacity: g,
          position: n,
          transform: k,
          transition: S,
        };
      }
      function k(e, t) {
        t.split(";").forEach(function (t) {
          var n = t.split(":"),
            r = n[0],
            a = n.slice(1);
          r && a && (e.style[r.trim()] = a.join(":"));
        });
      }
      function C(e) {
        var t,
          n = this;
        try {
          x(i(e), function (e) {
            var r = e.getAttribute("data-sr-id");
            if (null !== r) {
              t = !0;
              var a = n.store.elements[r];
              a.callbackTimer && window.clearTimeout(a.callbackTimer.clock),
                k(a.node, a.styles.inline.generated),
                e.removeAttribute("data-sr-id"),
                delete n.store.elements[r];
            }
          });
        } catch (r) {
          return b.call(this, "Clean failed.", r.message);
        }
        if (t)
          try {
            y.call(this);
          } catch (r) {
            return b.call(this, "Clean failed.", r.message);
          }
      }
      function S() {
        var e = this;
        x(this.store.elements, function (e) {
          k(e.node, e.styles.inline.generated),
            e.node.removeAttribute("data-sr-id");
        }),
          x(this.store.containers, function (t) {
            var n = t.node === document.documentElement ? window : t.node;
            n.removeEventListener("scroll", e.delegate),
              n.removeEventListener("resize", e.delegate);
          }),
          (this.store = {
            containers: {},
            elements: {},
            history: [],
            sequences: {},
          });
      }
      function T(e) {
        for (var t = [], n = arguments.length - 1; n-- > 0; )
          t[n] = arguments[n + 1];
        if (v(e))
          return (
            x(t, function (t) {
              x(t, function (t, n) {
                v(t)
                  ? ((e[n] && v(e[n])) || (e[n] = {}), T(e[n], t))
                  : (e[n] = t);
              });
            }),
            e
          );
        throw new TypeError("Target must be an object literal.");
      }
      function L(e) {
        return (
          void 0 === e && (e = navigator.userAgent),
          /Android|iPhone|iPad|iPod/i.test(e)
        );
      }
      var A,
        j =
          ((A = 0),
          function () {
            return A++;
          });
      function N() {
        var e = this;
        y.call(this),
          x(this.store.elements, function (e) {
            var t = [e.styles.inline.generated];
            e.visible
              ? (t.push(e.styles.opacity.computed),
                t.push(e.styles.transform.generated.final),
                (e.revealed = !0))
              : (t.push(e.styles.opacity.generated),
                t.push(e.styles.transform.generated.initial),
                (e.revealed = !1)),
              k(
                e.node,
                t
                  .filter(function (e) {
                    return "" !== e;
                  })
                  .join(" ")
              );
          }),
          x(this.store.containers, function (t) {
            var n = t.node === document.documentElement ? window : t.node;
            n.addEventListener("scroll", e.delegate),
              n.addEventListener("resize", e.delegate);
          }),
          this.delegate(),
          (this.initTimeout = null);
      }
      function O(e, t) {
        void 0 === t && (t = {});
        var n = t.pristine || this.pristine,
          r =
            "always" === e.config.useDelay ||
            ("onload" === e.config.useDelay && n) ||
            ("once" === e.config.useDelay && !e.seen),
          a = e.visible && !e.revealed,
          i = !e.visible && e.revealed && e.config.reset;
        return t.reveal || a
          ? z.call(this, e, r)
          : t.reset || i
          ? I.call(this, e)
          : void 0;
      }
      function z(e, t) {
        var n = [
          e.styles.inline.generated,
          e.styles.opacity.computed,
          e.styles.transform.generated.final,
        ];
        t
          ? n.push(e.styles.transition.generated.delayed)
          : n.push(e.styles.transition.generated.instant),
          (e.revealed = e.seen = !0),
          k(
            e.node,
            n
              .filter(function (e) {
                return "" !== e;
              })
              .join(" ")
          ),
          M.call(this, e, t);
      }
      function I(e) {
        var t = [
          e.styles.inline.generated,
          e.styles.opacity.generated,
          e.styles.transform.generated.initial,
          e.styles.transition.generated.instant,
        ];
        (e.revealed = !1),
          k(
            e.node,
            t
              .filter(function (e) {
                return "" !== e;
              })
              .join(" ")
          ),
          M.call(this, e);
      }
      function M(e, t) {
        var n = this,
          r = t ? e.config.duration + e.config.delay : e.config.duration,
          a = e.revealed ? e.config.beforeReveal : e.config.beforeReset,
          i = e.revealed ? e.config.afterReveal : e.config.afterReset,
          o = 0;
        e.callbackTimer &&
          ((o = Date.now() - e.callbackTimer.start),
          window.clearTimeout(e.callbackTimer.clock)),
          a(e.node),
          (e.callbackTimer = {
            start: Date.now(),
            clock: window.setTimeout(function () {
              i(e.node),
                (e.callbackTimer = null),
                e.revealed &&
                  !e.config.reset &&
                  e.config.cleanup &&
                  C.call(n, e.node);
            }, r - o),
          });
      }
      function P(e, t) {
        if (
          (void 0 === t && (t = this.pristine),
          !e.visible && e.revealed && e.config.reset)
        )
          return O.call(this, e, { reset: !0 });
        var n = this.store.sequences[e.sequence.id],
          r = e.sequence.index;
        if (n) {
          var a = new R(n, "visible", this.store),
            i = new R(n, "revealed", this.store);
          if (((n.models = { visible: a, revealed: i }), !i.body.length)) {
            var o = n.members[a.body[0]],
              l = this.store.elements[o];
            if (l)
              return (
                D.call(this, n, a.body[0], -1, t),
                D.call(this, n, a.body[0], 1, t),
                O.call(this, l, { reveal: !0, pristine: t })
              );
          }
          if (
            !n.blocked.head &&
            r === [].concat(i.head).pop() &&
            r >= [].concat(a.body).shift()
          )
            return (
              D.call(this, n, r, -1, t),
              O.call(this, e, { reveal: !0, pristine: t })
            );
          if (
            !n.blocked.foot &&
            r === [].concat(i.foot).shift() &&
            r <= [].concat(a.body).pop()
          )
            return (
              D.call(this, n, r, 1, t),
              O.call(this, e, { reveal: !0, pristine: t })
            );
        }
      }
      function _(e) {
        var t = Math.abs(e);
        if (isNaN(t)) throw new RangeError("Invalid sequence interval.");
        (this.id = j()),
          (this.interval = Math.max(t, 16)),
          (this.members = []),
          (this.models = {}),
          (this.blocked = { head: !1, foot: !1 });
      }
      function R(e, t, n) {
        var r = this;
        (this.head = []),
          (this.body = []),
          (this.foot = []),
          x(e.members, function (e, a) {
            var i = n.elements[e];
            i && i[t] && r.body.push(a);
          }),
          this.body.length &&
            x(e.members, function (e, a) {
              var i = n.elements[e];
              i && !i[t] && (a < r.body[0] ? r.head.push(a) : r.foot.push(a));
            });
      }
      function D(e, t, n, r) {
        var a = this,
          i = ["head", null, "foot"][1 + n],
          o = e.members[t + n],
          l = this.store.elements[o];
        (e.blocked[i] = !0),
          setTimeout(function () {
            (e.blocked[i] = !1), l && P.call(a, l, r);
          }, e.interval);
      }
      function B(e, t, n) {
        var r = this;
        void 0 === t && (t = {}), void 0 === n && (n = !1);
        var a,
          o = [],
          l = t.interval || h.interval;
        try {
          l && (a = new _(l));
          var s = i(e);
          if (!s.length) throw new Error("Invalid reveal target.");
          var c = s.reduce(function (e, n) {
            var l = {},
              s = n.getAttribute("data-sr-id");
            s
              ? (T(l, r.store.elements[s]), k(l.node, l.styles.inline.computed))
              : ((l.id = j()),
                (l.node = n),
                (l.seen = !1),
                (l.revealed = !1),
                (l.visible = !1));
            var c = T({}, l.config || r.defaults, t);
            if ((!c.mobile && L()) || (!c.desktop && !L()))
              return s && C.call(r, l), e;
            var u,
              d = i(c.container)[0];
            if (!d) throw new Error("Invalid container.");
            return d.contains(n)
              ? ((u = (function (e) {
                  var t = [],
                    n = arguments.length - 1;
                  for (; n-- > 0; ) t[n] = arguments[n + 1];
                  var r = null;
                  return (
                    x(t, function (t) {
                      x(t, function (t) {
                        null === r && t.node === e && (r = t.id);
                      });
                    }),
                    r
                  );
                })(d, o, r.store.containers)),
                null === u && ((u = j()), o.push({ id: u, node: d })),
                (l.config = c),
                (l.containerId = u),
                (l.styles = E(l)),
                a &&
                  ((l.sequence = { id: a.id, index: a.members.length }),
                  a.members.push(l.id)),
                e.push(l),
                e)
              : e;
          }, []);
          x(c, function (e) {
            (r.store.elements[e.id] = e),
              e.node.setAttribute("data-sr-id", e.id);
          });
        } catch (u) {
          return b.call(this, "Reveal failed.", u.message);
        }
        x(o, function (e) {
          r.store.containers[e.id] = { id: e.id, node: e.node };
        }),
          a && (this.store.sequences[a.id] = a),
          !0 !== n &&
            (this.store.history.push({ target: e, options: t }),
            this.initTimeout && window.clearTimeout(this.initTimeout),
            (this.initTimeout = window.setTimeout(N.bind(this), 0)));
      }
      function F() {
        var e = this;
        x(this.store.history, function (t) {
          B.call(e, t.target, t.options, !0);
        }),
          N.call(this);
      }
      var H =
        Math.sign ||
        function (e) {
          return (e > 0) - (e < 0) || +e;
        };
      function W(e, t) {
        var n = t ? e.node.clientHeight : e.node.offsetHeight,
          r = t ? e.node.clientWidth : e.node.offsetWidth,
          a = 0,
          i = 0,
          o = e.node;
        do {
          isNaN(o.offsetTop) || (a += o.offsetTop),
            isNaN(o.offsetLeft) || (i += o.offsetLeft),
            (o = o.offsetParent);
        } while (o);
        return {
          bounds: { top: a, right: i + r, bottom: a + n, left: i },
          height: n,
          width: r,
        };
      }
      function q(e) {
        var t, n;
        return (
          e.node === document.documentElement
            ? ((t = window.pageYOffset), (n = window.pageXOffset))
            : ((t = e.node.scrollTop), (n = e.node.scrollLeft)),
          { top: t, left: n }
        );
      }
      function Y(e) {
        void 0 === e && (e = {});
        var t = this.store.containers[e.containerId];
        if (t) {
          var n = Math.max(0, Math.min(1, e.config.viewFactor)),
            r = e.config.viewOffset,
            a = e.geometry.bounds.top + e.geometry.height * n,
            i = e.geometry.bounds.right - e.geometry.width * n,
            o = e.geometry.bounds.bottom - e.geometry.height * n,
            l = e.geometry.bounds.left + e.geometry.width * n,
            s = t.geometry.bounds.top + t.scroll.top + r.top,
            c = t.geometry.bounds.right + t.scroll.left - r.right,
            u = t.geometry.bounds.bottom + t.scroll.top - r.bottom,
            d = t.geometry.bounds.left + t.scroll.left + r.left;
          return (
            (a < u && i > d && o > s && l < c) || "fixed" === e.styles.position
          );
        }
      }
      function V(e, t) {
        var n = this;
        void 0 === e && (e = { type: "init" }),
          void 0 === t && (t = this.store.elements),
          p(function () {
            var r = "init" === e.type || "resize" === e.type;
            x(n.store.containers, function (e) {
              r && (e.geometry = W.call(n, e, !0));
              var t = q.call(n, e);
              e.scroll &&
                (e.direction = {
                  x: H(t.left - e.scroll.left),
                  y: H(t.top - e.scroll.top),
                }),
                (e.scroll = t);
            }),
              x(t, function (e) {
                (r || void 0 === e.geometry) && (e.geometry = W.call(n, e)),
                  (e.visible = Y.call(n, e));
              }),
              x(t, function (e) {
                e.sequence ? P.call(n, e) : O.call(n, e);
              }),
              (n.pristine = !1);
          });
      }
      var U, G, $, X, Z, Q, K, J;
      function ee(e) {
        var t;
        if (
          (void 0 === e && (e = {}),
          void 0 === this || Object.getPrototypeOf(this) !== ee.prototype)
        )
          return new ee(e);
        if (!ee.isSupported())
          return (
            b.call(
              this,
              "Instantiation failed.",
              "This browser is not supported."
            ),
            g.failure()
          );
        try {
          t = T({}, Q || h, e);
        } catch (n) {
          return b.call(this, "Invalid configuration.", n.message), g.failure();
        }
        try {
          if (!i(t.container)[0]) throw new Error("Invalid container.");
        } catch (n) {
          return b.call(this, n.message), g.failure();
        }
        return (!(Q = t).mobile && L()) || (!Q.desktop && !L())
          ? (b.call(
              this,
              "This device is disabled.",
              "desktop: " + Q.desktop,
              "mobile: " + Q.mobile
            ),
            g.failure())
          : (g.success(),
            (this.store = {
              containers: {},
              elements: {},
              history: [],
              sequences: {},
            }),
            (this.pristine = !0),
            (U = U || V.bind(this)),
            (G = G || S.bind(this)),
            ($ = $ || B.bind(this)),
            (X = X || C.bind(this)),
            (Z = Z || F.bind(this)),
            Object.defineProperty(this, "delegate", {
              get: function () {
                return U;
              },
            }),
            Object.defineProperty(this, "destroy", {
              get: function () {
                return G;
              },
            }),
            Object.defineProperty(this, "reveal", {
              get: function () {
                return $;
              },
            }),
            Object.defineProperty(this, "clean", {
              get: function () {
                return X;
              },
            }),
            Object.defineProperty(this, "sync", {
              get: function () {
                return Z;
              },
            }),
            Object.defineProperty(this, "defaults", {
              get: function () {
                return Q;
              },
            }),
            Object.defineProperty(this, "version", {
              get: function () {
                return "4.0.9";
              },
            }),
            Object.defineProperty(this, "noop", {
              get: function () {
                return !1;
              },
            }),
            J || (J = this));
      }
      (ee.isSupported = function () {
        return (
          (function () {
            var e = document.documentElement.style;
            return "transform" in e || "WebkitTransform" in e;
          })() &&
          (function () {
            var e = document.documentElement.style;
            return "transition" in e || "WebkitTransition" in e;
          })()
        );
      }),
        Object.defineProperty(ee, "debug", {
          get: function () {
            return K || !1;
          },
          set: function (e) {
            return (K = "boolean" == typeof e ? e : K);
          },
        }),
        ee();
      var te = "undefined" == typeof window ? null : ee();
    },
    8168: function (e, t, n) {
      "use strict";
      function r() {
        return (
          (r = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          r.apply(this, arguments)
        );
      }
      n.d(t, {
        A: function () {
          return r;
        },
      });
    },
    8587: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      n.d(t, {
        A: function () {
          return r;
        },
      });
    },
    3880: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/static/30a645f7db6038f83287d0c6042d3b2b/25f3c/me.jpg","srcSet":"/static/30a645f7db6038f83287d0c6042d3b2b/2dd75/me.jpg 125w,\\n/static/30a645f7db6038f83287d0c6042d3b2b/754ad/me.jpg 250w,\\n/static/30a645f7db6038f83287d0c6042d3b2b/25f3c/me.jpg 500w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/static/30a645f7db6038f83287d0c6042d3b2b/aebc8/me.avif 125w,\\n/static/30a645f7db6038f83287d0c6042d3b2b/6b255/me.avif 250w,\\n/static/30a645f7db6038f83287d0c6042d3b2b/f9526/me.avif 500w","type":"image/avif","sizes":"(min-width: 500px) 500px, 100vw"},{"srcSet":"/static/30a645f7db6038f83287d0c6042d3b2b/4155f/me.webp 125w,\\n/static/30a645f7db6038f83287d0c6042d3b2b/02deb/me.webp 250w,\\n/static/30a645f7db6038f83287d0c6042d3b2b/1ee78/me.webp 500w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":500}'
      );
    },
  },
]);
//# sourceMappingURL=546641dfde76ed00139ea2c3eae09499c5f2164a-1f7db6966a7cb4a6cdbd.js.map
