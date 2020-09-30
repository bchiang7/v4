(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    ccoC: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, 'pageQuery', function () {
          return g;
        });
      var n = a('q1tI'),
        l = a.n(n),
        r = a('Wbzz'),
        i = a('N1om'),
        m = a.n(i),
        c = a('qhky'),
        o = a('vOnD'),
        s = a('Kvkj'),
        u = o.d.main.withConfig({
          displayName: 'tag__StyledTagsContainer',
          componentId: 'sc-1b47em6-0',
        })(
          [
            'max-width:1000px;a{',
            ';}h1{',
            ';margin-bottom:50px;a{font-size:var(--fz-lg);font-weight:400;}}ul{li{font-size:24px;h2{font-size:inherit;margin:0;a{color:var(--light-slate);}}.subtitle{color:var(--slate);font-size:var(--fz-sm);.tag{margin-right:10px;}}}}',
          ],
          function (e) {
            return e.theme.mixins.inlineLink;
          },
          function (e) {
            return e.theme.mixins.flexBetween;
          },
        );
      t.default = function (e) {
        var t = e.pageContext,
          a = e.data,
          n = e.location,
          i = t.tag,
          o = a.allMarkdownRemark.edges;
        return l.a.createElement(
          s.i,
          { location: n },
          l.a.createElement(c.a, { title: 'Tagged: #' + i }),
          l.a.createElement(
            u,
            null,
            l.a.createElement(
              'span',
              { className: 'breadcrumb' },
              l.a.createElement('span', { className: 'arrow' }, '←'),
              l.a.createElement(r.Link, { to: '/pensieve' }, 'All memories'),
            ),
            l.a.createElement(
              'h1',
              null,
              l.a.createElement('span', null, '#', i),
              l.a.createElement(
                'span',
                null,
                l.a.createElement(r.Link, { to: '/pensieve/tags' }, 'View all tags'),
              ),
            ),
            l.a.createElement(
              'ul',
              { className: 'fancy-list' },
              o.map(function (e) {
                var t = e.node.frontmatter,
                  a = t.title,
                  n = t.slug,
                  i = t.date,
                  c = t.tags;
                return l.a.createElement(
                  'li',
                  { key: n },
                  l.a.createElement('h2', null, l.a.createElement(r.Link, { to: n }, a)),
                  l.a.createElement(
                    'p',
                    { className: 'subtitle' },
                    l.a.createElement(
                      'time',
                      null,
                      new Date(i).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }),
                    ),
                    l.a.createElement('span', null, ' — '),
                    c &&
                      c.length > 0 &&
                      c.map(function (e, t) {
                        return l.a.createElement(
                          r.Link,
                          { key: t, to: '/pensieve/tags/' + m()(e) + '/', className: 'tag' },
                          '#',
                          e,
                        );
                      }),
                  ),
                );
              }),
            ),
          ),
        );
      };
      var g = '4215373522';
    },
  },
]);
//# sourceMappingURL=component---src-templates-tag-js-1ecc281f328ad6d06308.js.map
