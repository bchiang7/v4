(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    '6qSS': function(e, t, a) {
      'use strict';
      a.r(t),
      a.d(t, 'pageQuery', function() {
        return h;
      });
      const n = a('q1tI');
      const m = a.n(n);
      const r = a('Wbzz');
      const l = a('N1om');
      const o = a.n(l);
      const i = a('qhky');
      const c = a('vOnD');
      const s = a('Kvkj');
      const d = c.d.main.withConfig({
        displayName: 'post__StyledPostContainer',
        componentId: 'sc-8858gx-0',
      })(['max-width:1000px;']);
      const p = c.d.header.withConfig({
        displayName: 'post__StyledPostHeader',
        componentId: 'sc-8858gx-1',
      })(['margin-bottom:50px;.tag{margin-right:10px;}']);
      const g = c.d.div.withConfig({
        displayName: 'post__StyledPostContent',
        componentId: 'sc-8858gx-2',
      })([
        'margin-bottom:100px;h1,h2,h3,h4,h5,h6{margin:2em 0 1em;}p{margin:1em 0;line-height:1.5;color:var(--light-slate);}',
      ]);
      t.default = function(e) {
        const t = e.data;
        const a = e.location;
        const n = t.markdownRemark;
        const l = n.frontmatter;
        const c = n.html;
        const h = l.title;
        const u = l.date;
        const w = l.tags;
        return m.a.createElement(
          s.i,
          { location: a },
          m.a.createElement(i.a, { title: h }),
          m.a.createElement(
            d,
            null,
            m.a.createElement(
              'span',
              { className: 'breadcrumb' },
              m.a.createElement('span', { className: 'arrow' }, '←'),
              m.a.createElement(r.Link, { to: '/pensieve' }, 'All memories'),
            ),
            m.a.createElement(
              p,
              null,
              m.a.createElement('h1', { className: 'medium-heading' }, h),
              m.a.createElement(
                'p',
                { className: 'subtitle' },
                m.a.createElement(
                  'time',
                  null,
                  new Date(u).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }),
                ),
                m.a.createElement('span', null, ' — '),
                w &&
                  w.length > 0 &&
                  w.map(function(e, t) {
                    return m.a.createElement(
                      r.Link,
                      { key: t, to: `/pensieve/tags/${  o()(e)  }/`, className: 'tag' },
                      '#',
                      e,
                    );
                  }),
              ),
            ),
            m.a.createElement(g, { dangerouslySetInnerHTML: { __html: c } }),
          ),
        );
      };
      var h = '2562189066';
    },
  },
]);
//# sourceMappingURL=component---src-templates-post-js-ed8946a05cc1d281b38a.js.map
