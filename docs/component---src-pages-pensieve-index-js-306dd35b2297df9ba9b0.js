(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    SqBY: function(e, t, n) {
      'use strict';
      n.r(t),
      n.d(t, 'pageQuery', function() {
        return E;
      });
      const a = n('q1tI');
      const i = n.n(a);
      const l = n('Wbzz');
      const r = n('N1om');
      const o = n.n(r);
      const s = n('qhky');
      const m = n('vOnD');
      const d = n('Kvkj');
      const p = n('g67X');
      const c = m.d.main.withConfig({
        displayName: 'pensieve__StyledMainContainer',
        componentId: 'jb5p05-0',
      })(
        [
          '& > header{margin-bottom:100px;text-align:center;a{&:hover,&:focus{cursor:url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'48\' viewport=\'0 0 100 100\' style=\'fill:black;font-size:24px;\'><text y=\'50%\'>⚡</text></svg>") 20 0,auto;}}}footer{',
          ';width:100%;margin-top:20px;}',
        ],
        function(e) {
          return e.theme.mixins.flexBetween;
        },
      );
      const g = m.d.div.withConfig({ displayName: 'pensieve__StyledGrid', componentId: 'jb5p05-1' })([
        'margin-top:50px;.posts{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;position:relative;@media (max-width:1080px){grid-template-columns:repeat(auto-fill,minmax(250px,1fr));}}',
      ]);
      const f = m.d.div.withConfig({
        displayName: 'pensieve__StyledPostInner',
        componentId: 'jb5p05-2',
      })(
        [
          '',
          ';',
          ';flex-direction:column;align-items:flex-start;position:relative;height:100%;padding:2rem 1.75rem;border-radius:var(--border-radius);transition:var(--transition);background-color:var(--light-navy);header,a{width:100%;}',
        ],
        function(e) {
          return e.theme.mixins.boxShadow;
        },
        function(e) {
          return e.theme.mixins.flexBetween;
        },
      );
      const u = m.d.div.withConfig({ displayName: 'pensieve__StyledPost', componentId: 'jb5p05-3' })(
        [
          'transition:var(--transition);cursor:default;&:hover,&:focus{outline:0;',
          '{transform:translateY(-5px);}}',
        ],
        f,
      );
      const v = m.d.div.withConfig({
        displayName: 'pensieve__StyledPostHeader',
        componentId: 'jb5p05-4',
      })(['', ';margin-bottom:30px;'], function(e) {
        return e.theme.mixins.flexBetween;
      });
      const h = m.d.div.withConfig({ displayName: 'pensieve__StyledFolder', componentId: 'jb5p05-5' })([
        'color:var(--green);svg{width:40px;height:40px;}',
      ]);
      const x = m.d.h5.withConfig({
        displayName: 'pensieve__StyledPostName',
        componentId: 'jb5p05-6',
      })(['margin:0 0 10px;color:var(--lightest-slate);font-size:var(--fz-xxl);']);
      const w = m.d.div.withConfig({
        displayName: 'pensieve__StyledPostDescription',
        componentId: 'jb5p05-7',
      })(['color:var(--light-slate);font-size:17px;']);
      const y = m.d.span.withConfig({ displayName: 'pensieve__StyledDate', componentId: 'jb5p05-8' })([
        'color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xxs);text-transform:uppercase;',
      ]);
      const b = m.d.ul.withConfig({ displayName: 'pensieve__StyledTags', componentId: 'jb5p05-9' })([
        'display:flex;align-items:flex-end;flex-wrap:wrap;padding:0;margin:0;list-style:none;li{color:var(--green);font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:1.75;&:not(:last-of-type){margin-right:15px;}}',
      ]);
      t.default = function(e) {
        const t = e.location;
        const n = e.data.allMarkdownRemark.edges;
        return i.a.createElement(
          d.i,
          { location: t },
          i.a.createElement(s.a, { title: 'Pensieve' }),
          i.a.createElement(
            c,
            null,
            i.a.createElement(
              'header',
              null,
              i.a.createElement('h1', { className: 'big-heading' }, 'Pensieve'),
              i.a.createElement(
                'p',
                { className: 'subtitle' },
                i.a.createElement(
                  'a',
                  { href: 'https://www.wizardingworld.com/writing-by-jk-rowling/pensieve' },
                  'a collection of memories',
                ),
              ),
            ),
            i.a.createElement(
              g,
              null,
              i.a.createElement(
                'div',
                { className: 'posts' },
                n.length > 0 &&
                  n.map(function(e, t) {
                    const n = e.node.frontmatter;
                    const a = n.title;
                    const r = n.description;
                    const s = n.slug;
                    const m = n.date;
                    const d = n.tags;
                    const c = new Date(m);
                    return i.a.createElement(
                      u,
                      { key: t, tabIndex: '0' },
                      i.a.createElement(
                        f,
                        null,
                        i.a.createElement(
                          'header',
                          null,
                          i.a.createElement(
                            l.Link,
                            { to: s },
                            i.a.createElement(
                              v,
                              null,
                              i.a.createElement(h, null, i.a.createElement(p.p, null)),
                            ),
                            i.a.createElement(x, null, a),
                            i.a.createElement(w, null, r),
                          ),
                        ),
                        i.a.createElement(
                          'footer',
                          null,
                          i.a.createElement(y, null, `${  c.toLocaleDateString()}`),
                          i.a.createElement(
                            b,
                            null,
                            d.map(function(e, t) {
                              return i.a.createElement(
                                'li',
                                { key: t },
                                i.a.createElement(
                                  l.Link,
                                  {
                                    to: `/pensieve/tags/${  o()(e)  }/`,
                                    className: 'inline-link',
                                  },
                                  '#',
                                  e,
                                ),
                              );
                            }),
                          ),
                        ),
                      ),
                    );
                  }),
              ),
            ),
          ),
        );
      };
      var E = '3292513715';
    },
  },
]);
//# sourceMappingURL=component---src-pages-pensieve-index-js-306dd35b2297df9ba9b0.js.map
