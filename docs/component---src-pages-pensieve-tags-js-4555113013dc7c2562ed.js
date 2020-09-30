(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    '+W3S': function(e, a, t) {
      'use strict';
      t.r(a),
      t.d(a, 'pageQuery', function() {
        return f;
      });
      const n = t('q1tI');
      const l = t.n(n);
      const r = t('Wbzz');
      const o = t('N1om');
      const i = t.n(o);
      const s = t('qhky');
      const c = t('vOnD');
      const m = t('Kvkj');
      const u = c.d.main.withConfig({
        displayName: 'tags__StyledTagsContainer',
        componentId: 'sc-3n25qs-0',
      })([
        'max-width:1000px;h1{margin-bottom:50px;}ul{color:var(--light-slate);li{font-size:var(--fz-xxl);a{color:var(--light-slate);.count{color:var(--slate);font-family:var(--font-mono);font-size:var(--fz-md);}}}}',
      ]);
      a.default = function(e) {
        const a = e.data.allMarkdownRemark.group;
        const t = e.location;
        return l.a.createElement(
          m.i,
          { location: t },
          l.a.createElement(s.a, { title: 'Tags' }),
          l.a.createElement(
            u,
            null,
            l.a.createElement(
              'span',
              { className: 'breadcrumb' },
              l.a.createElement('span', { className: 'arrow' }, '←'),
              l.a.createElement(r.Link, { to: '/pensieve' }, 'All memories'),
            ),
            l.a.createElement('h1', null, 'Tags'),
            l.a.createElement(
              'ul',
              { className: 'fancy-list' },
              a.map(function(e) {
                return l.a.createElement(
                  'li',
                  { key: e.fieldValue },
                  l.a.createElement(
                    r.Link,
                    { to: `/pensieve/tags/${  i()(e.fieldValue)  }/`, className: 'inline-link' },
                    e.fieldValue,
                    ' ',
                    l.a.createElement('span', { className: 'count' }, '(', e.totalCount, ')'),
                  ),
                );
              }),
            ),
          ),
        );
      };
      var f = '884296885';
    },
  },
]);
//# sourceMappingURL=component---src-pages-pensieve-tags-js-4555113013dc7c2562ed.js.map
