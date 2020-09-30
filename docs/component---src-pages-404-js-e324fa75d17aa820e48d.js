(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    w2l6: function(e, t, n) {
      'use strict';
      n.r(t);
      const o = n('q1tI');
      const a = n.n(o);
      const i = n('Wbzz');
      const l = n('qhky');
      const c = n('VeD8');
      const m = n('pQ8y');
      const r = n('vOnD');
      const u = n('7Qib');
      const s = n('Kvkj');
      const f = r.d.main.withConfig({
        displayName: 'sc-404__StyledMainContainer',
        componentId: 'bnxlhm-0',
      })(['', ';flex-direction:column;'], function(e) {
        return e.theme.mixins.flexCenter;
      });
      const p = r.d.h1.withConfig({ displayName: 'sc-404__StyledTitle', componentId: 'bnxlhm-1' })([
        'color:var(--green);font-family:var(--font-mono);font-size:clamp(100px,25vw,200px);line-height:1;',
      ]);
      const d = r.d.h2.withConfig({ displayName: 'sc-404__StyledSubtitle', componentId: 'bnxlhm-2' })([
        'font-size:clamp(30px,5vw,50px);font-weight:400;',
      ]);
      const h = Object(r.d)(i.Link).withConfig({
        displayName: 'sc-404__StyledHomeButton',
        componentId: 'bnxlhm-3',
      })(['', ';margin-top:40px;'], function(e) {
        return e.theme.mixins.bigButton;
      });
      t.default = function(e) {
        const t = e.location;
        const n = Object(o.useState)(!1);
        const i = n[0];
        const r = n[1];
        return (
          Object(o.useEffect)(function() {
            const e = setTimeout(function() {
              return r(!0);
            }, u.c);
            return function() {
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
