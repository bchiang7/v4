(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    w2l6: function (e, t, n) {
      'use strict';
      n.r(t);
      var o = n('q1tI'),
        a = n.n(o),
        i = n('Wbzz'),
        l = n('qhky'),
        c = n('VeD8'),
        m = n('pQ8y'),
        r = n('vOnD'),
        u = n('7Qib'),
        s = n('Kvkj'),
        f = r.d.main.withConfig({
          displayName: 'sc-404__StyledMainContainer',
          componentId: 'bnxlhm-0',
        })(['', ';flex-direction:column;'], function (e) {
          return e.theme.mixins.flexCenter;
        }),
        p = r.d.h1.withConfig({ displayName: 'sc-404__StyledTitle', componentId: 'bnxlhm-1' })([
          'color:var(--green);font-family:var(--font-mono);font-size:clamp(100px,25vw,200px);line-height:1;',
        ]),
        d = r.d.h2.withConfig({ displayName: 'sc-404__StyledSubtitle', componentId: 'bnxlhm-2' })([
          'font-size:clamp(30px,5vw,50px);font-weight:400;',
        ]),
        h = Object(r.d)(i.Link).withConfig({
          displayName: 'sc-404__StyledHomeButton',
          componentId: 'bnxlhm-3',
        })(['', ';margin-top:40px;'], function (e) {
          return e.theme.mixins.bigButton;
        });
      t.default = function (e) {
        var t = e.location,
          n = Object(o.useState)(!1),
          i = n[0],
          r = n[1];
        return (
          Object(o.useEffect)(function () {
            var e = setTimeout(function () {
              return r(!0);
            }, u.c);
            return function () {
              return clearTimeout(e);
            };
          }, []),
          a.a.createElement(
            s.i,
            { location: t },
            a.a.createElement(l.a, { title: 'Page Not Found' }),
            a.a.createElement(
              c.a,
              { component: null },
              i &&
                a.a.createElement(
                  m.a,
                  { timeout: 500, classNames: 'fadeup' },
                  a.a.createElement(
                    f,
                    { className: 'fillHeight' },
                    a.a.createElement(p, null, '404'),
                    a.a.createElement(d, null, 'Page Not Found'),
                    a.a.createElement(h, { to: '/' }, 'Go Home'),
                  ),
                ),
            ),
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-404-js-e324fa75d17aa820e48d.js.map
