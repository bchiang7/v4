(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    '+VNo': function(e, t) {
      e.exports = '\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff';
    },
    '0PSK': function(e, t, n) {
      'use strict';
      const r = n('q1tI');
      const a = n.n(r);
      t.a = a.a.createContext(null);
    },
    '1XaA': function(e, t, n) {
      e.exports = `${n.p  }static/SFMono-SemiboldItalic-41da0311eaa7077546785a822a6ba21a.woff`;
    },
    '20nU': function(e, t) {
      e.exports = {
        email: 'brittany.chiang@gmail.com',
        socialMedia: [
          { name: 'GitHub', url: 'https://github.com/bchiang7' },
          { name: 'Linkedin', url: 'https://www.linkedin.com/in/bchiang7' },
          { name: 'Codepen', url: 'https://codepen.io/bchiang7' },
          { name: 'Instagram', url: 'https://www.instagram.com/bchiang7' },
          { name: 'Twitter', url: 'https://twitter.com/bchiang7' },
        ],
        navLinks: [
          { name: 'About', url: '/#about' },
          { name: 'Experience', url: '/#jobs' },
          { name: 'Work', url: '/#projects' },
          { name: 'Contact', url: '/#contact' },
        ],
        colors: { green: '#64ffda', navy: '#0a192f', darkNavy: '#020c1b' },
        srConfig: function(e, t) {
          return (
            void 0 === e && (e = 200),
            void 0 === t && (t = 0.25),
            {
              origin: 'bottom',
              distance: '20px',
              duration: 500,
              delay: e,
              rotate: { x: 0, y: 0, z: 0 },
              opacity: 0,
              scale: 1,
              easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
              mobile: !0,
              reset: !1,
              useDelay: 'always',
              viewFactor: t,
              viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
            }
          );
        },
      };
    },
    '3Dbu': function(e, t, n) {
      e.exports = `${n.p  }static/Calibre-Medium-46b36969c7bb1d7ed4c8253e8f274788.woff2`;
    },
    '3nLz': function(e, t, n) {
      'use strict';
      n('t+fG')('fixed', function(e) {
        return function() {
          return e(this, 'tt', '', '');
        };
      });
    },
    '5fzK': function(e, t, n) {
      e.exports = `${n.p  }static/Calibre-RegularItalic-3a445970c7bcd6b102ac6bd60178b0bc.woff`;
    },
    '5irr': function(e, t, n) {
      n('Sc3u')('Float32', 4, function(e) {
        return function(t, n, r) {
          return e(this, t, n, r);
        };
      });
    },
    '7Qib': function(e, t, n) {
      'use strict';
      n.d(t, 'c', function() {
        return r;
      }),
      n.d(t, 'b', function() {
        return a;
      }),
      n.d(t, 'a', function() {
        return i;
      });
      n('Ll4R');
      var r = 1e3;
      var a = 2e3;
      var i = {
        ARROW_LEFT: 'ArrowLeft',
        ARROW_LEFT_IE11: 'Left',
        ARROW_RIGHT: 'ArrowRight',
        ARROW_RIGHT_IE11: 'Right',
        ESCAPE: 'Escape',
        ESCAPE_IE11: 'Esc',
        TAB: 'Tab',
        SPACE: ' ',
        SPACE_IE11: 'Spacebar',
        ENTER: 'Enter',
      };
    },
    '8+s/': function(e, t, n) {
      'use strict';
      n('sc67'), n('AqHK'), n('pJf4'), n('pS08'), n('R48M');
      let r;
      const a = n('q1tI');
      const i = (r = a) && 'object' === typeof r && 'default' in r ? r.default : r;
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
      const s = !('undefined' === typeof window || !window.document || !window.document.createElement);
      e.exports = function(e, t, n) {
        if ('function' !== typeof e) {throw new Error('Expected reducePropsToState to be a function.');}
        if ('function' !== typeof t) {throw new Error('Expected handleStateChangeOnClient to be a function.');}
        if (void 0 !== n && 'function' !== typeof n) {throw new Error('Expected mapStateOnServer to either be undefined or a function.');}
        return function(r) {
          if ('function' !== typeof r) {throw new Error('Expected WrappedComponent to be a React component.');}
          let c;
          let l = [];
          function u() {
            (c = e(
              l.map(function(e) {
                return e.props;
              }),
            )),
            d.canUseDOM ? t(c) : n && (c = n(c));
          }
          var d = (function(e) {
            let t; let n;
            function a() {
              return e.apply(this, arguments) || this;
            }
            (n = e),
            ((t = a).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (a.peek = function() {
              return c;
            }),
            (a.rewind = function() {
              if (a.canUseDOM) {
                throw new Error(
                  'You may only call rewind() on the server. Call peek() to read the current state.',
                );
              }
              const e = c;
              return (c = void 0), (l = []), e;
            });
            const o = a.prototype;
            return (
              (o.UNSAFE_componentWillMount = function() {
                l.push(this), u();
              }),
              (o.componentDidUpdate = function() {
                u();
              }),
              (o.componentWillUnmount = function() {
                const e = l.indexOf(this);
                l.splice(e, 1), u();
              }),
              (o.render = function() {
                return i.createElement(r, this.props);
              }),
              a
            );
          })(a.PureComponent);
          return (
            o(
              d,
              'displayName',
              `SideEffect(${ 
                (function(e) {
                  return e.displayName || e.name || 'Component';
                })(r) 
              })`,
            ),
            o(d, 'canUseDOM', s),
            d
          );
        };
      };
    },
    '8oxB': function(e, t) {
      let n;
      let r;
      const a = (e.exports = {});
      function i() {
        throw new Error('setTimeout has not been defined');
      }
      function o() {
        throw new Error('clearTimeout has not been defined');
      }
      function s(e) {
        if (n === setTimeout) {return setTimeout(e, 0);}
        if ((n === i || !n) && setTimeout) {return (n = setTimeout), setTimeout(e, 0);}
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function() {
        try {
          n = 'function' === typeof setTimeout ? setTimeout : i;
        } catch (e) {
          n = i;
        }
        try {
          r = 'function' === typeof clearTimeout ? clearTimeout : o;
        } catch (e) {
          r = o;
        }
      })();
      let c;
      let l = [];
      let u = !1;
      let d = -1;
      function f() {
        u && c && ((u = !1), c.length ? (l = c.concat(l)) : (d = -1), l.length && p());
      }
      function p() {
        if (!u) {
          const e = s(f);
          u = !0;
          for (let t = l.length; t; ) {
            for (c = l, l = []; ++d < t; ) {c && c[d].run();}
            (d = -1), (t = l.length);
          }
          (c = null),
          (u = !1),
          (function(e) {
            if (r === clearTimeout) {return clearTimeout(e);}
            if ((r === o || !r) && clearTimeout) {return (r = clearTimeout), clearTimeout(e);}
            try {
              r(e);
            } catch (t) {
              try {
                return r.call(null, e);
              } catch (t) {
                return r.call(this, e);
              }
            }
          })(e);
        }
      }
      function h(e, t) {
        (this.fun = e), (this.array = t);
      }
      function m() {}
      (a.nextTick = function(e) {
        const t = new Array(arguments.length - 1);
        if (arguments.length > 1) {for (let n = 1; n < arguments.length; n++) {t[n - 1] = arguments[n];}}
        l.push(new h(e, t)), 1 !== l.length || u || s(p);
      }),
      (h.prototype.run = function() {
        this.fun.apply(null, this.array);
      }),
      (a.title = 'browser'),
      (a.browser = !0),
      (a.env = {}),
      (a.argv = []),
      (a.version = ''),
      (a.versions = {}),
      (a.on = m),
      (a.addListener = m),
      (a.once = m),
      (a.off = m),
      (a.removeListener = m),
      (a.removeAllListeners = m),
      (a.emit = m),
      (a.prependListener = m),
      (a.prependOnceListener = m),
      (a.listeners = function(e) {
        return [];
      }),
      (a.binding = function(e) {
        throw new Error('process.binding is not supported');
      }),
      (a.cwd = function() {
        return '/';
      }),
      (a.chdir = function(e) {
        throw new Error('process.chdir is not supported');
      }),
      (a.umask = function() {
        return 0;
      });
    },
    '98nU': function(e) {
      e.exports = JSON.parse(
        '{"data":{"featured":{"edges":[{"node":{"frontmatter":{"title":"OctoProfile","cover":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'250\'%20viewBox=\'0%200%20400%20250\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M0%2080v80h47c2%200%203%200%203-9l1-10h94v20h8v-10l1-10h93v10l1%2010h7v-10l1-10h94v9l1%2010h24l25-1%201-80V0H0v80m192-64c-8%204-11%2014-7%2022%202%204%201%204%207%200%205-4%205-4%205%203-1%207%200%207%204%207l4-1-1-7%201-7%201%202%203%204c5%201%205%201%206-2%207-14-10-29-23-21m95%20171c0%206%200%206%203%206%206%202%2010%209%208%2015l-1%203%205%203%205%203%201-2c2-3%202-13%201-17-3-9-10-15-19-16l-3-1v6m-222%202c-3%203-6%208-6%2010s21%207%2022%206l-13-18c0-1-2%200-3%202m13%2019c-12%2014-13%2016-4%2018%207%203%2015%202%2020-2l2-2-7-8-7-9-4%203\'%20fill=\'%2364ffda\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1.6055045871559632,"src":"/static/76c828e964233651d4fb75f911746c90/73c85/octoprofile.png","srcSet":"/static/76c828e964233651d4fb75f911746c90/d4144/octoprofile.png 175w,\\n/static/76c828e964233651d4fb75f911746c90/a5370/octoprofile.png 350w,\\n/static/76c828e964233651d4fb75f911746c90/73c85/octoprofile.png 700w,\\n/static/76c828e964233651d4fb75f911746c90/4ff95/octoprofile.png 1050w,\\n/static/76c828e964233651d4fb75f911746c90/54967/octoprofile.png 1400w,\\n/static/76c828e964233651d4fb75f911746c90/21ecb/octoprofile.png 3200w","srcWebp":"/static/76c828e964233651d4fb75f911746c90/47203/octoprofile.webp","srcSetWebp":"/static/76c828e964233651d4fb75f911746c90/5575a/octoprofile.webp 175w,\\n/static/76c828e964233651d4fb75f911746c90/8ea22/octoprofile.webp 350w,\\n/static/76c828e964233651d4fb75f911746c90/47203/octoprofile.webp 700w,\\n/static/76c828e964233651d4fb75f911746c90/565e9/octoprofile.webp 1050w,\\n/static/76c828e964233651d4fb75f911746c90/9592d/octoprofile.webp 1400w,\\n/static/76c828e964233651d4fb75f911746c90/f9eef/octoprofile.webp 3200w","sizes":"(max-width: 700px) 100vw, 700px"}}},"tech":["Next.js","Chart.js","GitHub API"],"github":"https://github.com/bchiang7/octoprofile","external":"https://octoprofile.now.sh"},"html":"<p>A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.</p>"}},{"node":{"frontmatter":{"title":"Spotify Profile","cover":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'250\'%20viewBox=\'0%200%20400%20250\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M0%2037a269%20269%200%20002%2048L1%2096l-1%2077v77h401V0H0v37m10-24c-3%203-3%207%200%2010%207%206%2016-1%2013-9-3-5-9-6-13-1m205%2020c0%202-1%202-11%203-2%200-2%201-2%203%200%203%200%203-3%203s-3%200-3%202c1%201%200%202-1%203-2%201-1%202%203%202%203%200%204%200%204%202s0%202-4%202h-5l2%201c2%200%202%201%202%202l-2%201-2%201%204%201c4%200%205%201%206%203l-5%201c-2%200-4%200-3%201l1%203%202%202%201%202%201%201%201-2-1-2c-2%200-2-3%200-3%202-1%202-1%202%201l1%202c1%200%202%201%202%203%200%205%201%206%205%206%202%200%202%200%202-3-1-5-2-7-4-7-1%201-2-3-1-5%201-1%201-1-1-1h-3l3-1%201-1-5-1c-3%200-4%200-4-2%200-3%2010-3%2011%200%200%202%201%203%202%203l2%203c1%202%207%203%209%201h2v1c0%202%202%203%202%200%201-2%200-5-1-5-2%200-3-5-2-8%202-3%201-3-2-2-1%201-2%201-2-1-1-2-4-1-5%201%200%203-2%203-3%200-1-2%200-3%203-3s3%200%202-3-3-4-6-1h-2l-2-1c-2%201-4-2-2-3%203-1%2018-3%2018-1l1%201%201-1%201-2c1-1%200-1-4-1-4%201-5%200-5-1l-1-1v1m13%20181c0%207%201%207%204%204%201-2%202-3%201-4v-1c3-1%204%201%204%204%200%202%201%203%202%203%202%200%202-1%202-6v-7h-13v7m-1%2023v7h6l7%201h-7c-9%200-8%202%202%202%206%200%209-1%206-2v-1c2%200%202-1%202-6v-7h-16v6\'%20fill=\'%2364ffda\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1.6055045871559632,"src":"/static/3936989a99991beb6d649d7a7039df60/73c85/demo.png","srcSet":"/static/3936989a99991beb6d649d7a7039df60/d4144/demo.png 175w,\\n/static/3936989a99991beb6d649d7a7039df60/a5370/demo.png 350w,\\n/static/3936989a99991beb6d649d7a7039df60/73c85/demo.png 700w,\\n/static/3936989a99991beb6d649d7a7039df60/4ff95/demo.png 1050w,\\n/static/3936989a99991beb6d649d7a7039df60/e4d72/demo.png 1280w","srcWebp":"/static/3936989a99991beb6d649d7a7039df60/47203/demo.webp","srcSetWebp":"/static/3936989a99991beb6d649d7a7039df60/5575a/demo.webp 175w,\\n/static/3936989a99991beb6d649d7a7039df60/8ea22/demo.webp 350w,\\n/static/3936989a99991beb6d649d7a7039df60/47203/demo.webp 700w,\\n/static/3936989a99991beb6d649d7a7039df60/565e9/demo.webp 1050w,\\n/static/3936989a99991beb6d649d7a7039df60/135cd/demo.webp 1280w","sizes":"(max-width: 700px) 100vw, 700px"}}},"tech":["React","Node.js","Express","Spotify Web API"],"github":"https://github.com/bchiang7/spotify-profile","external":"https://spotify-profile.herokuapp.com/"},"html":"<p>A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</p>"}},{"node":{"frontmatter":{"title":"Halcyon Theme","cover":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'250\'%20viewBox=\'0%200%20400%20250\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M24%20119c-6%200-7%205-8%2050a414%20414%200%2001-4%2078v3h213v-59c0-59%200-60%202-60s2%201%202%2029v28h133v5h-60v2c0%202%200%202-1%201h-6c-5%200-6-1-4-3l-4-1h-5l3%201c5%202%205%203%201%203l-4-1c0-2-2-3-5-3v1c3%201%201%203-4%203-4%200-4-1-4-2%200-2-2-2-5-1-2%201-2%201%200%201%202-1%203%200%203%201l-2%201h-9c-9%200-13-2-5-2l5-1-7-1h-8v5l-1%205-1-5v-5h-10v58h159v-8l-1-13-3-60a155%20155%200%2000-3-47v-3H207a48127%2048127%200%2001-183%200m7%2024c0%202%201%202%2023%202%2021%200%2022%200%2022-2s-1-2-22-2c-22%200-23%200-23%202m331%200l1%2014v12h2c4%200%204-1%203-4-1-2-1-2%201-2s2%200%201-1c-2%200-2-1-1-1%201-1%200-4-2-5-2%200-2%200%200-1l2-1%203-1c2%200%201-1-2-1l-6-1%203-1%204-2h-4c-4%200-3-2%201-3%203%200%203%200%202-1-2-1-2-1%201-1%208%200%207-2-1-2-7%200-8%200-8%202m-93%2010a133%20133%200%200040%200l4%201%203-1c-1-2-47-2-47%200m-185%202c-7%200-7%200-7%203v2h27c-5%203-1%203%2022%203l16-1h1l2%201%201-1c0-1-3-2-6-1h-1l36-1h35v-3l1-2h-59a3174%203174%200%2001-68%200m208%201h-10l-10%201%207%201c33%201%2033%201%2033-1h2c2%202%205%202%208%201h7l-1-2h-36m-22%205v2a795%20795%200%200057-2%20253%20253%200%2000-43%200h-14m-19%2019c-2%201%202%202%2016%202l15-1h1l6%201h6l2-1c-1-2-17-2-21-1h-2a60%2060%200%2000-16%200h-7m40%2023a434%20434%200%2001-44%201%20174%20174%200%200042%201c0%202%209%201%209%200%201-2-6-3-7-2M31%20214c0%202%201%202%2023%202%2021%200%2022%200%2022-2s-1-2-22-2c-22%200-23%200-23%202m76%200l5%201h5l27%201c27%200%2028%200%2028-3h-18a474%20474%200%2001-47%201m32%204c-1%202%202%202%2026%202%2017%200%2023-1%2024-2l-6-1-6%201h-38m115%201l19%201c11%200%2018%200%2017-1l1-1%202%201h13c0-2-3-2-15-2l-12%201h-18c-2-2-7-1-7%201m0%209c0%201%203%202%2019%201h22c3-2%203-2%203%200h2l1-2h-40c-2-1-7-1-7%201\'%20fill=\'%2364ffda\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1.6055045871559632,"src":"/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/73c85/halcyon.png","srcSet":"/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/d4144/halcyon.png 175w,\\n/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/a5370/halcyon.png 350w,\\n/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/73c85/halcyon.png 700w,\\n/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/4ff95/halcyon.png 1050w,\\n/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/e4d72/halcyon.png 1280w","srcWebp":"/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/47203/halcyon.webp","srcSetWebp":"/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/5575a/halcyon.webp 175w,\\n/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/8ea22/halcyon.webp 350w,\\n/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/47203/halcyon.webp 700w,\\n/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/565e9/halcyon.webp 1050w,\\n/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/135cd/halcyon.webp 1280w","sizes":"(max-width: 700px) 100vw, 700px"}}},"tech":["VS Code","Sublime Text","Atom","iTerm2","Hyper"],"github":"https://github.com/bchiang7/halcyon-site","external":"https://halcyon-theme.netlify.com/"},"html":"<p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on <a href=\\"https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Visual Studio Marketplace</a>, <a href=\\"https://packagecontrol.io/packages/Halcyon%20Theme\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Package Control</a>, <a href=\\"https://atom.io/themes/halcyon-syntax\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">Atom Package Manager</a>, and <a href=\\"https://www.npmjs.com/package/hyper-halcyon-theme\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">npm</a>.</p>"}}]}}}',
      );
    },
    '9eSz': function(e, t, n) {
      'use strict';
      n('rzGZ'), n('Dq+y'), n('8npG'), n('YbXK'), n('eMsz'), n('zTTH'), n('3nLz');
      const r = n('TqRt');
      (t.__esModule = !0), (t.default = void 0);
      let a;
      const i = r(n('PJYZ'));
      const o = r(n('VbXa'));
      const s = r(n('8OQS'));
      const c = r(n('pVnL'));
      const l = r(n('q1tI'));
      const u = r(n('17x9'));
      const d = function(e) {
        const t = (0, c.default)({}, e);
        const n = t.resolutions;
        const r = t.sizes;
        const a = t.critical;
        return (
          n && ((t.fixed = n), delete t.resolutions),
          r && ((t.fluid = r), delete t.sizes),
          a && (t.loading = 'eager'),
          t.fluid && (t.fluid = E([].concat(t.fluid))),
          t.fixed && (t.fixed = E([].concat(t.fixed))),
          t
        );
      };
      const f = function(e) {
        const t = e.media;
        return !!t && b && !!window.matchMedia(t).matches;
      };
      const p = function(e) {
        const t = e.fluid;
        const n = e.fixed;
        return h(t || n).src;
      };
      var h = function(e) {
        if (
          b &&
            (function(e) {
              return (
                !!e &&
                Array.isArray(e) &&
                e.some(function(e) {
                  return void 0 !== e.media;
                })
              );
            })(e)
        ) {
          const t = e.findIndex(f);
          if (-1 !== t) {return e[t];}
          const n = e.findIndex(function(e) {
            return void 0 === e.media;
          });
          if (-1 !== n) {return e[n];}
        }
        return e[0];
      };
      const m = Object.create({});
      const g = function(e) {
        const t = d(e);
        const n = p(t);
        return m[n] || !1;
      };
      const v = 'undefined' !== typeof HTMLImageElement && 'loading' in HTMLImageElement.prototype;
      var b = 'undefined' !== typeof window;
      const y = b && window.IntersectionObserver;
      const w = new WeakMap();
      function x(e) {
        return e.map(function(e) {
          const t = e.src;
          const n = e.srcSet;
          const r = e.srcSetWebp;
          const a = e.media;
          const i = e.sizes;
          return l.default.createElement(
            l.default.Fragment,
            { key: t },
            r &&
              l.default.createElement('source', {
                type: 'image/webp',
                media: a,
                srcSet: r,
                sizes: i,
              }),
            l.default.createElement('source', { media: a, srcSet: n, sizes: i }),
          );
        });
      }
      function E(e) {
        const t = [];
        const n = [];
        return (
          e.forEach(function(e) {
            return (e.media ? t : n).push(e);
          }),
          [].concat(t, n)
        );
      }
      function S(e) {
        return e.map(function(e) {
          const t = e.src;
          const n = e.media;
          const r = e.tracedSVG;
          return l.default.createElement('source', { key: t, media: n, srcSet: r });
        });
      }
      function k(e) {
        return e.map(function(e) {
          const t = e.src;
          const n = e.media;
          const r = e.base64;
          return l.default.createElement('source', { key: t, media: n, srcSet: r });
        });
      }
      function C(e, t) {
        const n = e.srcSet;
        const r = e.srcSetWebp;
        const a = e.media;
        const i = e.sizes;
        return (
          `<source ${ 
            t ? 'type=\'image/webp\' ' : '' 
          }${a ? `media="${  a  }" ` : '' 
          }srcset="${ 
            t ? r : n 
          }" ${ 
            i ? `sizes="${  i  }" ` : '' 
          }/>`
        );
      }
      const O = function(e, t) {
        const n =
            (void 0 === a &&
              'undefined' !== typeof window &&
              window.IntersectionObserver &&
              (a = new window.IntersectionObserver(
                function(e) {
                  e.forEach(function(e) {
                    if (w.has(e.target)) {
                      const t = w.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (a.unobserve(e.target), w.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: '200px' },
              )),
            a);
        return (
          n && (n.observe(e), w.set(e, t)),
          function() {
            n.unobserve(e), w.delete(e);
          }
        );
      };
      const j = function(e) {
        const t = e.src ? `src="${  e.src  }" ` : 'src="" ';
        const n = e.sizes ? `sizes="${  e.sizes  }" ` : '';
        const r = e.srcSet ? `srcset="${  e.srcSet  }" ` : '';
        const a = e.title ? `title="${  e.title  }" ` : '';
        const i = e.alt ? `alt="${  e.alt  }" ` : 'alt="" ';
        const o = e.width ? `width="${  e.width  }" ` : '';
        const s = e.height ? `height="${  e.height  }" ` : '';
        const c = e.crossOrigin ? `crossorigin="${  e.crossOrigin  }" ` : '';
        const l = e.loading ? `loading="${  e.loading  }" ` : '';
        const u = e.draggable ? `draggable="${  e.draggable  }" ` : '';
        return (
          `<picture>${ 
            e.imageVariants
              .map(function(e) {
                return (e.srcSetWebp ? C(e, !0) : '') + C(e);
              })
              .join('') 
          }<img ${ 
            l 
          }${o 
          }${s 
          }${n 
          }${r 
          }${t 
          }${i 
          }${a 
          }${c 
          }${u 
          }style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>`
        );
      };
      const A = l.default.forwardRef(function(e, t) {
        const n = e.src;
        const r = e.imageVariants;
        const a = e.generateSources;
        const i = e.spreadProps;
        const o = e.ariaHidden;
        const s = l.default.createElement(
          I,
          (0, c.default)({ ref: t, src: n }, i, { ariaHidden: o }),
        );
        return r.length > 1 ? l.default.createElement('picture', null, a(r), s) : s;
      });
      var I = l.default.forwardRef(function(e, t) {
        const n = e.sizes;
        const r = e.srcSet;
        const a = e.src;
        const i = e.style;
        const o = e.onLoad;
        const u = e.onError;
        const d = e.loading;
        const f = e.draggable;
        const p = e.ariaHidden;
        const h = (0, s.default)(e, [
          'sizes',
          'srcSet',
          'src',
          'style',
          'onLoad',
          'onError',
          'loading',
          'draggable',
          'ariaHidden',
        ]);
        return l.default.createElement(
          'img',
          (0, c.default)({ 'aria-hidden': p, sizes: n, srcSet: r, src: a }, h, {
            onLoad: o,
            onError: u,
            ref: t,
            loading: d,
            draggable: f,
            style: (0, c.default)(
              {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              },
              i,
            ),
          }),
        );
      });
      I.propTypes = { style: u.default.object, onError: u.default.func, onLoad: u.default.func };
      const T = (function(e) {
        function t(t) {
          let n;
          ((n = e.call(this, t) || this).seenBefore = b && g(t)),
          (n.isCritical = 'eager' === t.loading || t.critical),
          (n.addNoScript = !(n.isCritical && !t.fadeIn)),
          (n.useIOSupport = !v && y && !n.isCritical && !n.seenBefore);
          const r = n.isCritical || (b && (v || !n.useIOSupport));
          return (
            (n.state = {
              isVisible: r,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !n.seenBefore && t.fadeIn,
            }),
            (n.imageRef = l.default.createRef()),
            (n.placeholderRef = t.placeholderRef || l.default.createRef()),
            (n.handleImageLoaded = n.handleImageLoaded.bind((0, i.default)(n))),
            (n.handleRef = n.handleRef.bind((0, i.default)(n))),
            n
          );
        }
        (0, o.default)(t, e);
        const n = t.prototype;
        return (
          (n.componentDidMount = function() {
            if (
              (this.state.isVisible &&
                'function' === typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: g(this.props) }),
              this.isCritical)
            ) {
              const e = this.imageRef.current;
              e && e.complete && this.handleImageLoaded();
            }
          }),
          (n.componentWillUnmount = function() {
            this.cleanUpListeners && this.cleanUpListeners();
          }),
          (n.handleRef = function(e) {
            const t = this;
            this.useIOSupport &&
              e &&
              (this.cleanUpListeners = O(e, function() {
                const e = g(t.props);
                t.state.isVisible ||
                  'function' !== typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                t.setState({ isVisible: !0 }, function() {
                  t.setState({
                    imgLoaded: e,
                    imgCached: !(!t.imageRef.current || !t.imageRef.current.currentSrc),
                  });
                });
              }));
          }),
          (n.handleImageLoaded = function() {
            let e; let t; let n;
            (e = this.props),
            (t = d(e)),
            (n = p(t)),
            (m[n] = !0),
            this.setState({ imgLoaded: !0 }),
            this.props.onLoad && this.props.onLoad();
          }),
          (n.render = function() {
            const e = d(this.props);
            const t = e.title;
            const n = e.alt;
            const r = e.className;
            const a = e.style;
            const i = void 0 === a ? {} : a;
            const o = e.imgStyle;
            const s = void 0 === o ? {} : o;
            const u = e.placeholderStyle;
            const f = void 0 === u ? {} : u;
            const p = e.placeholderClassName;
            const m = e.fluid;
            const g = e.fixed;
            const v = e.backgroundColor;
            const b = e.durationFadeIn;
            const y = e.Tag;
            const w = e.itemProp;
            const E = e.loading;
            const C = e.draggable;
            const O = !1 === this.state.fadeIn || this.state.imgLoaded;
            const T = !0 === this.state.fadeIn && !this.state.imgCached;
            const M = (0, c.default)(
              { opacity: O ? 1 : 0, transition: T ? `opacity ${  b  }ms` : 'none' },
              s,
            );
            const N = 'boolean' === typeof v ? 'lightgray' : v;
            const L = { transitionDelay: `${b  }ms` };
            const z = (0, c.default)({ opacity: this.state.imgLoaded ? 0 : 1 }, T && L, {}, s, {}, f);
            const P = {
              title: t,
              alt: this.state.isVisible ? '' : n,
              style: z,
              className: p,
              itemProp: w,
            };
            if (m) {
              const R = m;
              const _ = h(m);
              return l.default.createElement(
                y,
                {
                  className: `${r || ''  } gatsby-image-wrapper`,
                  style: (0, c.default)({ position: 'relative', overflow: 'hidden' }, i),
                  ref: this.handleRef,
                  key: `fluid-${  JSON.stringify(_.srcSet)}`,
                },
                l.default.createElement(y, {
                  'aria-hidden': !0,
                  style: { width: '100%', paddingBottom: `${100 / _.aspectRatio  }%` },
                }),
                N &&
                  l.default.createElement(y, {
                    'aria-hidden': !0,
                    title: t,
                    style: (0, c.default)(
                      {
                        backgroundColor: N,
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0,
                      },
                      T && L,
                    ),
                  }),
                _.base64 &&
                  l.default.createElement(A, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: _.base64,
                    spreadProps: P,
                    imageVariants: R,
                    generateSources: k,
                  }),
                _.tracedSVG &&
                  l.default.createElement(A, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: _.tracedSVG,
                    spreadProps: P,
                    imageVariants: R,
                    generateSources: S,
                  }),
                this.state.isVisible &&
                  l.default.createElement(
                    'picture',
                    null,
                    x(R),
                    l.default.createElement(I, {
                      alt: n,
                      title: t,
                      sizes: _.sizes,
                      src: _.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: _.srcSet,
                      style: M,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: w,
                      loading: E,
                      draggable: C,
                    }),
                  ),
                this.addNoScript &&
                  l.default.createElement('noscript', {
                    dangerouslySetInnerHTML: {
                      __html: j(
                        (0, c.default)({ alt: n, title: t, loading: E }, _, { imageVariants: R }),
                      ),
                    },
                  }),
              );
            }
            if (g) {
              const F = g;
              const H = h(g);
              const D = (0, c.default)(
                {
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'inline-block',
                  width: H.width,
                  height: H.height,
                },
                i,
              );
              return (
                'inherit' === i.display && delete D.display,
                l.default.createElement(
                  y,
                  {
                    className: `${r || ''  } gatsby-image-wrapper`,
                    style: D,
                    ref: this.handleRef,
                    key: `fixed-${  JSON.stringify(H.srcSet)}`,
                  },
                  N &&
                    l.default.createElement(y, {
                      'aria-hidden': !0,
                      title: t,
                      style: (0, c.default)(
                        {
                          backgroundColor: N,
                          width: H.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: H.height,
                        },
                        T && L,
                      ),
                    }),
                  H.base64 &&
                    l.default.createElement(A, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: H.base64,
                      spreadProps: P,
                      imageVariants: F,
                      generateSources: k,
                    }),
                  H.tracedSVG &&
                    l.default.createElement(A, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: H.tracedSVG,
                      spreadProps: P,
                      imageVariants: F,
                      generateSources: S,
                    }),
                  this.state.isVisible &&
                    l.default.createElement(
                      'picture',
                      null,
                      x(F),
                      l.default.createElement(I, {
                        alt: n,
                        title: t,
                        width: H.width,
                        height: H.height,
                        sizes: H.sizes,
                        src: H.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: H.srcSet,
                        style: M,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: w,
                        loading: E,
                        draggable: C,
                      }),
                    ),
                  this.addNoScript &&
                    l.default.createElement('noscript', {
                      dangerouslySetInnerHTML: {
                        __html: j(
                          (0, c.default)({ alt: n, title: t, loading: E }, H, { imageVariants: F }),
                        ),
                      },
                    }),
                )
              );
            }
            return null;
          }),
          t
        );
      })(l.default.Component);
      T.defaultProps = { fadeIn: !0, durationFadeIn: 500, alt: '', Tag: 'div', loading: 'lazy' };
      const M = u.default.shape({
        width: u.default.number.isRequired,
        height: u.default.number.isRequired,
        src: u.default.string.isRequired,
        srcSet: u.default.string.isRequired,
        base64: u.default.string,
        tracedSVG: u.default.string,
        srcWebp: u.default.string,
        srcSetWebp: u.default.string,
        media: u.default.string,
      });
      const N = u.default.shape({
        aspectRatio: u.default.number.isRequired,
        src: u.default.string.isRequired,
        srcSet: u.default.string.isRequired,
        sizes: u.default.string.isRequired,
        base64: u.default.string,
        tracedSVG: u.default.string,
        srcWebp: u.default.string,
        srcSetWebp: u.default.string,
        media: u.default.string,
      });
      T.propTypes = {
        resolutions: M,
        sizes: N,
        fixed: u.default.oneOfType([M, u.default.arrayOf(M)]),
        fluid: u.default.oneOfType([N, u.default.arrayOf(N)]),
        fadeIn: u.default.bool,
        durationFadeIn: u.default.number,
        title: u.default.string,
        alt: u.default.string,
        className: u.default.oneOfType([u.default.string, u.default.object]),
        critical: u.default.bool,
        crossOrigin: u.default.oneOfType([u.default.string, u.default.bool]),
        style: u.default.object,
        imgStyle: u.default.object,
        placeholderStyle: u.default.object,
        placeholderClassName: u.default.string,
        backgroundColor: u.default.oneOfType([u.default.string, u.default.bool]),
        onLoad: u.default.func,
        onError: u.default.func,
        onStartLoad: u.default.func,
        Tag: u.default.string,
        itemProp: u.default.string,
        loading: u.default.oneOf(['auto', 'lazy', 'eager']),
        draggable: u.default.bool,
      };
      const L = T;
      t.default = L;
    },
    '9nM1': function(e, t, n) {
      e.exports = `${n.p  }static/SFMono-RegularItalic-502441ff6ee56a1df1558e8461050a46.woff`;
    },
    '9uj6': function(e, t, n) {
      'use strict';
      const r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
      const a = (function(e) {
        const t = {};
        return function(n) {
          return void 0 === t[n] && (t[n] = e(n)), t[n];
        };
      })(function(e) {
        return (
          r.test(e) ||
            (111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91)
        );
      });
      t.a = a;
    },
    C9fy: function(e, t, n) {
      const r = Date.prototype;
      const a = r.toString;
      const i = r.getTime;
      `${new Date(NaN)  }` != 'Invalid Date' &&
        n('IYdN')(r, 'toString', function() {
          const e = i.call(this);
          return e == e ? a.call(this) : 'Invalid Date';
        });
    },
    DrhF: function(e, t, n) {
      const r = n('BjK0');
      const a = n('N+BI').onFreeze;
      n('939a')('freeze', function(e) {
        return function(t) {
          return e && r(t) ? e(a(t)) : t;
        };
      });
    },
    ECyS: function(e, t, n) {
      'use strict';
      n('rzGZ'),
      n('Dq+y'),
      n('8npG'),
      n('Ggvi'),
      n('gu/5'),
      n('eoYm'),
      n('U6Bt'),
      n('4DPX'),
      n('JHok'),
      n('R48M'),
      n('pJf4'),
      n('q8oJ'),
      n('C9fy');
      function r(e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      }
      function a(e) {
        return (
          'Object' === r(e) &&
          e.constructor === Object &&
          Object.getPrototypeOf(e) === Object.prototype
        );
      }
      function i(e) {
        return 'Array' === r(e);
      }
      function o(e) {
        return 'Symbol' === r(e);
      }
      function s() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) {e += arguments[t].length;}
        const r = Array(e);
        let a = 0;
        for (t = 0; t < n; t++) {for (let i = arguments[t], o = 0, s = i.length; o < s; o++, a++) {r[a] = i[o];}}
        return r;
      }
      function c(e, t, n, r) {
        const a = r.propertyIsEnumerable(t) ? 'enumerable' : 'nonenumerable';
        'enumerable' === a && (e[t] = n),
        'nonenumerable' === a &&
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            });
      }
      function l(e, t, n) {
        if (!a(t)) {
          return (
            n &&
              i(n) &&
              n.forEach(function(n) {
                t = n(e, t);
              }),
            t
          );
        }
        let r = {};
        a(e) &&
          (r = s(Object.getOwnPropertyNames(e), Object.getOwnPropertySymbols(e)).reduce(function(
            n,
            r,
          ) {
            const a = e[r];
            return (
              ((!o(r) && !Object.getOwnPropertyNames(t).includes(r)) ||
                (o(r) && !Object.getOwnPropertySymbols(t).includes(r))) &&
                c(n, r, a, e),
              n
            );
          },
          {}));
        return s(Object.getOwnPropertyNames(t), Object.getOwnPropertySymbols(t)).reduce(function(
          r,
          o,
        ) {
          let s = t[o];
          const u = a(e) ? e[o] : void 0;
          return (
            n &&
              i(n) &&
              n.forEach(function(e) {
                s = e(u, s);
              }),
            void 0 !== u && a(s) && (s = l(u, s, n)),
            c(r, o, s, t),
            r
          );
        },
        r);
      }
      t.a = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) {t[n - 1] = arguments[n];}
        let r = null;
        let i = e;
        return (
          a(e) && e.extensions && 1 === Object.keys(e).length && ((i = {}), (r = e.extensions)),
          t.reduce(function(e, t) {
            return l(e, t, r);
          }, i)
        );
      };
    },
    EMED: function(e, t, n) {
      const r = n('P8UN');
      r(r.S, 'Math', { sign: n('gDik') });
    },
    'EU/P': function(e, t, n) {
      const r = n('P8UN');
      const a = n('ap2Z');
      const i = n('96qb');
      const o = n('+VNo');
      const s = `[${  o  }]`;
      const c = RegExp(`^${  s  }${s  }*`);
      const l = RegExp(`${s + s  }*$`);
      const u = function(e, t, n) {
        const a = {};
        const s = i(function() {
          return !!o[e]() || '​' != '​'[e]();
        });
        const c = (a[e] = s ? t(d) : o[e]);
        n && (a[n] = c), r(r.P + r.F * s, 'String', a);
      };
      var d = (u.trim = function(e, t) {
        return (
          (e = String(a(e))), 1 & t && (e = e.replace(c, '')), 2 & t && (e = e.replace(l, '')), e
        );
      });
      e.exports = u;
    },
    HXzo: function(e, t, n) {
      'use strict';
      n('EU/P')('trim', function(e) {
        return function() {
          return e(this, 3);
        };
      });
    },
    Hq9K: function(e) {
      e.exports = JSON.parse(
        '{"data":{"projects":{"edges":[{"node":{"frontmatter":{"title":"Integrating Algolia Search with WordPress Multisite","tech":["Algolia","WordPress","PHP"],"github":"","external":"https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c"},"html":"<p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>"}},{"node":{"frontmatter":{"title":"Time to Have More Fun","tech":["Next.js","Tailwind CSS","Firebase"],"github":"https://github.com/bchiang7/time-to-have-more-fun","external":"https://time-to-have-more-fun.now.sh/"},"html":"<p>A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS</p>"}},{"node":{"frontmatter":{"title":"Building a Headless Mobile App CMS From Scratch","tech":["Node","Express","Firebase","Vue"],"github":"","external":"https://medium.com/stories-from-upstatement/building-a-headless-mobile-app-cms-from-scratch-bab2d17744d9"},"html":"<p>Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement</p>"}},{"node":{"frontmatter":{"title":"Google Keep Clone","tech":["Vue","Firebase"],"github":"https://github.com/bchiang7/google-keep-vue-firebase","external":"https://keep-vue.netlify.com/"},"html":"<p>A simple Google Keep clone built with Vue and Firebase.</p>"}},{"node":{"frontmatter":{"title":"Apple Music Embeddable Web Player Widget","tech":["MusicKit.js","JS","SCSS"],"github":"","external":"https://tools.applemusic.com/en-us"},"html":"<p>Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging <a href=\\"https://developer.apple.com/documentation/musickitjs\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">MusicKit.js</a>. Read more about this project on <a href=\\"https://9to5mac.com/2018/06/03/apple-music-embeddable-web-player-listen-browser/\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">9to5Mac</a>.</p>"}},{"node":{"frontmatter":{"title":"Apple Music Facebook Messenger Integration","tech":["Ember","JS","SCSS"],"github":"","external":"https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming"},"html":"<p>Facebook Messenger chat bot extension featuring authentication and full song streaming from within the Messenger app. Read more about it on <a href=\\"https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">The Verge</a>.</p>"}},{"node":{"frontmatter":{"title":"Personal Website V3","tech":["Jekyll","SCSS","JS"],"github":"https://github.com/bchiang7/bchiang7.github.io","external":"https://bchiang7.github.io/v3/"},"html":"<p>Third iteration of my personal website built with Jekyll and hosted on GitHub Pages.</p>"}},{"node":{"frontmatter":{"title":"Personal Website V2","tech":["Jekyll","SCSS","JS"],"github":"https://github.com/bchiang7/v2","external":"https://bchiang7.github.io/v2/"},"html":"<p>Second iteration of my personal website. Designed and developed with a conscious effort to avoid using any superfluous frameworks like Bootstrap.</p>"}},{"node":{"frontmatter":{"title":"Screentime 2.0","tech":["Cordova","Backbone","Marionette"],"github":"","external":"https://starry.com/blog/product/whats-new-screentime-just-got-better-for-parents"},"html":"<p>Starry Station android app feature that provided users with the ability to easily filter content, pause the internet, and even create custom rules for blocking apps like Facebook and Twitter right from their phones.</p>"}},{"node":{"frontmatter":{"title":"React Profile","tech":["React","CSS"],"github":"https://github.com/bchiang7/react-profile","external":"https://bchiang7.github.io/react-profile/"},"html":"<p>Online version of my 2016 resume made for fun. I was interested in learning React.js, so I found a simple tutorial and it spun into a weekend project.</p>"}},{"node":{"frontmatter":{"title":"Personal Website V1","tech":["HTML","CSS","JS","Bootstrap"],"github":"https://github.com/bchiang7/v1","external":"https://bchiang7.github.io/v1/"},"html":"<p>My first portfolio website I designed and built in 2014. I learned quite a bit about HTML, CSS, and SEO. Since then, I think my web development and design skills have improved immensely.</p>"}},{"node":{"frontmatter":{"title":"Fontipsums","tech":["HTML","SCSS"],"github":"https://github.com/bchiang7/fontipsums/","external":"http://bchiang7.github.io/fontipsums/"},"html":"<p>Simple website to display some of my favorite font pairings combined with some fun lorem ipsum variations found on the web.</p>"}},{"node":{"frontmatter":{"title":"NU Women in Tech","tech":["Jekyll","Bootstrap"],"github":"https://github.com/nuwit/website","external":"https://nuwit.ccs.neu.edu/"},"html":"<p>Complete overhaul and redesign of NU Women in Tech\'s club website using Jekyll, built while serving as web chair on the e-board.</p>"}}]}}}',
      );
    },
    J2fq: function(e, t, n) {
      e.exports = `${n.p  }static/Calibre-RegularItalic-35657aa2d12ff78e3d8a8a5ba28c2c35.woff2`;
    },
    Jegl: function(e, t, n) {
      for (
        var r,
          a = n('emib'),
          i = n('8wc8'),
          o = n('UEZ0'),
          s = o('typed_array'),
          c = o('view'),
          l = !(!a.ArrayBuffer || !a.DataView),
          u = l,
          d = 0,
          f = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(
            ',',
          );
        d < 9;

      ) {(r = a[f[d++]]) ? (i(r.prototype, s, !0), i(r.prototype, c, !0)) : (u = !1);}
      e.exports = { ABV: l, CONSTR: u, TYPED: s, VIEW: c };
    },
    KdGe: function(e, t, n) {
      e.exports = `${n.p  }static/Calibre-Semibold-347808401d7a6607ff9a86897aec0a39.woff`;
    },
    Kvkj: function(e, t, n) {
      'use strict';
      n.d(t, 'f', function() {
        return l;
      }),
      n.d(t, 'i', function() {
        return he;
      }),
      n.d(t, 'j', function() {
        return Et;
      }),
      n.d(t, 'l', function() {
        return Lt;
      }),
      n.d(t, 'k', function() {
        return Ht;
      }),
      n.d(t, 'n', function() {
        return Bt;
      }),
      n.d(t, 'o', function() {
        return Vt;
      }),
      n.d(t, 'c', function() {
        return Ut;
      }),
      n.d(t, 'e', function() {
        return $t;
      }),
      n.d(t, 'g', function() {
        return Qt;
      }),
      n.d(t, 'a', function() {
        return on;
      }),
      n.d(t, 'h', function() {
        return pn;
      }),
      n.d(t, 'd', function() {
        return gn;
      }),
      n.d(t, 'm', function() {
        return wn;
      }),
      n.d(t, 'b', function() {
        return En;
      });
      const r = n('VEi9');
      const a = n('q1tI');
      const i = n.n(a);
      const o = n('qhky');
      const s = n('YwZP');
      const c = function(e) {
        const t = e.title;
        const n = e.description;
        const a = e.image;
        const c = Object(s.useLocation)().pathname;
        const l = r.data.site.siteMetadata;
        const u = l.defaultTitle;
        const d = l.defaultDescription;
        const f = l.siteUrl;
        const p = l.defaultImage;
        const h = l.twitterUsername;
        const m = { title: t || u, description: n || d, image: `${  f  }${a || p}`, url: `${  f  }${c}` };
        return i.a.createElement(
          o.a,
          { title: t, defaultTitle: m.title, titleTemplate: `%s | ${  u}` },
          i.a.createElement('html', { lang: 'en' }),
          i.a.createElement('meta', { name: 'description', content: m.description }),
          i.a.createElement('meta', { name: 'image', content: m.image }),
          i.a.createElement('meta', { property: 'og:title', content: m.title }),
          i.a.createElement('meta', { property: 'og:description', content: m.description }),
          i.a.createElement('meta', { property: 'og:image', content: m.image }),
          i.a.createElement('meta', { property: 'og:url', content: m.url }),
          i.a.createElement('meta', { property: 'og:type', content: 'website' }),
          i.a.createElement('meta', { name: 'twitter:card', content: 'summary_large_image' }),
          i.a.createElement('meta', { name: 'twitter:creator', content: h }),
          i.a.createElement('meta', { name: 'twitter:title', content: m.title }),
          i.a.createElement('meta', { name: 'twitter:description', content: m.description }),
          i.a.createElement('meta', { name: 'twitter:image', content: m.image }),
          i.a.createElement('meta', {
            name: 'google-site-verification',
            content: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
          }),
        );
      };
      var l = c;
      c.defaultProps = { title: null, description: null, image: null };
      n('YbXK'), n('cFtU');
      const u = n('vOnD');
      const d = Object(u.c)([
        'color:var(--green);background-color:transparent;border:1px solid var(--green);border-radius:var(--border-radius);font-size:var(--fz-xs);font-family:var(--font-mono);line-height:1;text-decoration:none;cursor:pointer;transition:var(--transition);padding:1.25rem 1.75rem;&:hover,&:focus,&:active{background-color:var(--green-tint);outline:none;}&:after{display:none !important;}',
      ]);
      const f = {
        bp: {
          mobileS: 'max-width: 330px',
          mobileM: 'max-width: 400px',
          mobileL: 'max-width: 480px',
          tabletS: 'max-width: 600px',
          tabletL: 'max-width: 768px',
          desktopXS: 'max-width: 900px',
          desktopS: 'max-width: 1080px',
          desktopM: 'max-width: 1200px',
          desktopL: 'max-width: 1400px',
        },
        mixins: {
          flexCenter: Object(u.c)(['display:flex;justify-content:center;align-items:center;']),
          flexBetween: Object(u.c)([
            'display:flex;justify-content:space-between;align-items:center;',
          ]),
          link: Object(u.c)([
            'display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;color:inherit;position:relative;transition:var(--transition);cursor:pointer;&:hover,&:active,&:focus{color:var(--green);outline:0;}',
          ]),
          inlineLink: Object(u.c)([
            'display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;position:relative;transition:var(--transition);cursor:pointer;color:var(--green);&:hover,&:focus,&:active{color:var(--green);outline:0;&:after{width:100%;}& > *{color:var(--green) !important;transition:var(--transition);}}&:after{content:\'\';display:block;width:0;height:1px;position:relative;bottom:0.37em;background-color:var(--green);transition:var(--transition);opacity:0.5;}',
          ]),
          button: d,
          smallButton: Object(u.c)([
            'color:var(--green);background-color:transparent;border:1px solid var(--green);border-radius:var(--border-radius);padding:0.75rem 1rem;font-size:var(--fz-xs);font-family:var(--font-mono);line-height:1;text-decoration:none;cursor:pointer;transition:var(--transition);&:hover,&:focus,&:active{background-color:var(--green-tint);}&:after{display:none !important;}',
          ]),
          bigButton: Object(u.c)([
            'color:var(--green);background-color:transparent;border:1px solid var(--green);border-radius:var(--border-radius);padding:1.25rem 1.75rem;font-size:var(--fz-sm);font-family:var(--font-mono);line-height:1;text-decoration:none;cursor:pointer;transition:var(--transition);&:hover,&:focus,&:active{background-color:var(--green-tint);}&:after{display:none !important;}',
          ]),
          boxShadow: Object(u.c)([
            'box-shadow:0 10px 30px -15px var(--navy-shadow);transition:var(--transition);&:hover,&:focus{box-shadow:0 20px 30px -15px var(--navy-shadow);}',
          ]),
          fancyList: Object(u.c)([
            'padding:0;margin:0;list-style:none;font-size:var(--fz-lg);li{position:relative;padding-left:30px;margin-bottom:10px;&:before{content:\'▹\';position:absolute;left:0;color:var(--green);}}',
          ]),
        },
      };
      const p = (n('pJf4'), n('rzGZ'), n('Dq+y'), n('8npG'), n('PZd/'), n('o/VY'));
      const h = n.n(p);
      const m = n('L+mo');
      const g = n.n(m);
      const v = n('mVfl');
      const b = n.n(v);
      const y = n('3Dbu');
      const w = n.n(y);
      const x = n('KdGe');
      const E = n.n(x);
      const S = n('ND0z');
      const k = n.n(S);
      const C = n('5fzK');
      const O = n.n(C);
      const j = n('J2fq');
      const A = n.n(j);
      const I = n('n+Nz');
      const T = n.n(I);
      const M = n('uwVU');
      const N = n.n(M);
      const L = n('U06U');
      const z = n.n(L);
      const P = n('hip/');
      const R = n.n(P);
      const _ = n('rGBt');
      const F = n.n(_);
      const H = n('t0tN');
      const D = n.n(H);
      const B = n('f1WF');
      const q = n.n(B);
      const V = n('Q5Fx');
      const W = n.n(V);
      const U = n('9nM1');
      const G = n.n(U);
      const J = n('ucN8');
      const Y = n.n(J);
      const $ = n('1XaA');
      const K = n.n($);
      const Q = n('gp9K');
      const X = n.n(Q);
      const Z = {
        name: 'Calibre',
        normal: { 400: [h.a, g.a], 500: [b.a, w.a], 600: [E.a, k.a] },
        italic: { 400: [O.a, A.a], 500: [T.a, N.a], 600: [z.a, R.a] },
      };
      const ee = {
        name: 'SF Mono',
        normal: { 400: [F.a, D.a], 600: [q.a, W.a] },
        italic: { 400: [G.a, Y.a], 600: [K.a, X.a] },
      };
      const te = function(e, t) {
        void 0 === t && (t = 'normal');
        for (var n = '', r = 0, a = Object.entries(e[t]); r < a.length; r++) {
          const i = a[r];
          const o = i[0];
          const s = i[1];
          const c = s[0];
          const l = s[1];
          n +=
              `\n      @font-face {\n        font-family: '${ 
                e.name 
              }';\n        src: url(${ 
                l 
              }) format('woff2'),\n            url(${ 
                c 
              }) format('woff');\n        font-weight: ${ 
                o 
              };\n        font-style: ${ 
                t 
              };\n        font-display: auto;\n      }\n    `;
        }
        return n;
      };
      const ne = te(Z);
      const re = te(Z, 'italic');
      const ae = te(ee);
      const ie = te(ee, 'italic');
      const oe = Object(u.c)(['', ''], ne + re + ae + ie);
      const se = Object(u.c)([
        '.fadeup-enter{opacity:0.01;transform:translateY(20px);transition:opacity 300ms var(--easing),transform 300ms var(--easing);}.fadeup-enter-active{opacity:1;transform:translateY(0px);transition:opacity 300ms var(--easing),transform 300ms var(--easing);}.fadedown-enter{opacity:0.01;transform:translateY(-20px);transition:opacity 300ms var(--easing),transform 300ms var(--easing);}.fadedown-enter-active{opacity:1;transform:translateY(0px);transition:opacity 300ms var(--easing),transform 300ms var(--easing);}.fade-enter{opacity:0;}.fade-enter-active{opacity:1;transition:opacity 300ms var(--easing);}.fade-exit{opacity:1;}.fade-exit-active{opacity:0;transition:opacity 300ms var(--easing);}',
      ]);
      const ce = {
        bg: '#112340',
        lineHighlight: '#1d2d50',
        blue: '#5ccfe6',
        purple: '#c3a6ff',
        green: '#bae67e',
        yellow: '#ffd580',
        orange: '#ffae57',
        red: '#ef6b73',
        grey: '#a2aabc',
        comment: '#8695b799',
      };
      const le = Object(u.c)(
        [
          '.gatsby-highlight{background-color:',
          ';color:',
          ';border-radius:var(--border-radius);margin:2em 0;padding:1.25em;overflow:auto;position:relative;font-family:var(--font-mono);font-size:var(--fz-md);}.gatsby-highlight code[class*=\'language-\'],.gatsby-highlight pre[class*=\'language-\']{height:auto !important;font-size:var(--fz-sm);line-height:1.5;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;tab-size:2;hyphens:none;}.gatsby-highlight pre[class*=\'language-\']{background-color:transparent;margin:0;padding:0;overflow:initial;float:left;min-width:100%;padding-top:2em;}.gatsby-code-title{padding:1em 1.5em;font-family:var(--font-mono);font-size:var(--fz-xs);background-color:',
          ';color:',
          ';border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom:1px solid ',
          ';& + .gatsby-highlight{margin-top:0;border-top-left-radius:0;border-top-right-radius:0;}}.gatsby-highlight-code-line{display:block;background-color:',
          ';border-left:2px solid var(--green);padding-left:calc(1em + 2px);padding-right:1em;margin-right:-1.35em;margin-left:-1.35em;}.gatsby-highlight pre[class*=\'language-\']::before{background:var(--lightest-navy);color:var(--white);font-size:var(--fz-xxs);font-family:var(--font-mono);line-height:1.5;letter-spacing:0.1em;text-transform:uppercase;border-radius:0 0 3px 3px;position:absolute;top:0;left:1.25rem;padding:0.25rem 0.5rem;}.gatsby-highlight pre[class=\'language-javascript\']::before{content:\'js\';}.gatsby-highlight pre[class=\'language-js\']::before{content:\'js\';}.gatsby-highlight pre[class=\'language-jsx\']::before{content:\'jsx\';}.gatsby-highlight pre[class=\'language-graphql\']::before{content:\'GraphQL\';}.gatsby-highlight pre[class=\'language-html\']::before{content:\'html\';}.gatsby-highlight pre[class=\'language-css\']::before{content:\'css\';}.gatsby-highlight pre[class=\'language-mdx\']::before{content:\'mdx\';}.gatsby-highlight pre[class=\'language-shell\']::before{content:\'shell\';}.gatsby-highlight pre[class=\'language-sh\']::before{content:\'sh\';}.gatsby-highlight pre[class=\'language-bash\']::before{content:\'bash\';}.gatsby-highlight pre[class=\'language-yaml\']::before{content:\'yaml\';}.gatsby-highlight pre[class=\'language-markdown\']::before{content:\'md\';}.gatsby-highlight pre[class=\'language-json\']::before,.gatsby-highlight pre[class=\'language-json5\']::before{content:\'json\';}.gatsby-highlight pre[class=\'language-diff\']::before{content:\'diff\';}.gatsby-highlight pre[class=\'language-text\']::before{content:\'text\';}.gatsby-highlight pre[class=\'language-flow\']::before{content:\'flow\';}.token{display:inline;}.token.comment,.token.block-comment,.token.prolog,.token.doctype,.token.cdata{color:',
          ';}.token.punctuation{color:',
          ';}.token.namespace,.token.deleted{color:',
          ';}.token.function-name,.token.function,.token.class-name,.token.constant,.token.symbol{color:',
          ';}.token.attr-name,.token.operator,.token.rule{color:',
          ';}.token.keyword,.token.boolean,.token.number,.token.property{color:',
          ';}.token.tag,.token.selector,.token.important,.token.atrule,.token.builtin,.token.entity,.token.url{color:',
          ';}.token.string,.token.char,.token.attr-value,.token.regex,.token.variable,.token.inserted{color:',
          ';}.token.important,.token.bold{font-weight:600;}.token.italic{font-style:italic;}.token.entity{cursor:help;}.namespace{opacity:0.7;}',
        ],
        ce.bg,
        ce.variable,
        ce.bg,
        ce.grey,
        ce.lineHighlight,
        ce.lineHighlight,
        ce.comment,
        ce.grey,
        ce.red,
        ce.yellow,
        ce.orange,
        ce.purple,
        ce.blue,
        ce.green,
      );
      function ue() {
        const e = (function(e, t) {
          t || (t = e.slice(0));
          return (e.raw = t), e;
        })([
          '\n  ',
          ';\n\n  :root {\n    --dark-navy: #020c1b;\n    --navy: #0a192f;\n    --light-navy: #172a45;\n    --lightest-navy: #303C55;\n    --navy-shadow: rgba(2, 12, 27, 0.7);\n    --slate: #8892b0;\n    --light-slate: #a8b2d1;\n    --lightest-slate: #ccd6f6;\n    --white: #e6f1ff;\n    --green: #64ffda;\n    --green-tint: rgba(100, 255, 218, 0.1);\n\n    --font-sans: \'Calibre\', \'San Francisco\', \'SF Pro Text\', -apple-system, system-ui, sans-serif;\n    --font-mono: \'SF Mono\', \'Fira Code\', \'Fira Mono\', \'Roboto Mono\', monospace;\n\n    --fz-xxs: 12px;\n    --fz-xs: 13px;\n    --fz-sm: 14px;\n    --fz-md: 16px;\n    --fz-lg: 18px;\n    --fz-xl: 20px;\n    --fz-xxl: 22px;\n    --fz-heading: 32px;\n\n    --border-radius: 4px;\n    --nav-height: 100px;\n    --nav-scroll-height: 70px;\n\n    --tab-height: 42px;\n    --tab-width: 120px;\n\n    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);\n    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n    --hamburger-width: 30px;\n\n    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;\n    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;\n    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;\n  }\n\n  html {\n    box-sizing: border-box;\n    width: 100%;\n  }\n\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n\n  ::selection {\n    background-color: var(--slate);\n    color: var(--lightest-slate);\n  }\n\n  body {\n    margin: 0;\n    width: 100%;\n    min-height: 100%;\n    overflow-x: hidden;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    background-color: var(--navy);\n    color: var(--slate);\n    font-family: var(--font-sans);\n    font-size: var(--fz-xl);\n    line-height: 1.3;\n\n    @media (max-width: 480px) {\n      font-size: var(--fz-lg);\n    }\n\n    &.hidden {\n      overflow: hidden;\n    }\n\n    &.blur {\n      overflow: hidden;\n\n      header {\n        background-color: transparent;\n      }\n\n      #content > * {\n        filter: blur(5px) brightness(0.7);\n        transition: var(--transition);\n        pointer-events: none;\n        user-select: none;\n      }\n    }\n  }\n\n  #root {\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: 1fr auto;\n    grid-template-columns: 100%;\n  }\n\n  main {\n    margin: 0 auto;\n    width: 100%;\n    max-width: 1600px;\n    min-height: 100vh;\n    padding: 200px 150px;\n\n    @media (max-width: 1080px) {\n      padding: 200px 100px;\n    }\n    @media (max-width: 768px) {\n      padding: 150px 50px;\n    }\n    @media (max-width: 480px) {\n      padding: 125px 25px;\n    }\n\n    &.fillHeight {\n      padding: 0 150px;\n\n      @media (max-width: 1080px) {\n        padding: 0 100px;\n      }\n      @media (max-width: 768px) {\n        padding: 0 50px;\n      }\n      @media (max-width: 480px) {\n        padding: 0 25px;\n      }\n    }\n  }\n\n  section {\n    margin: 0 auto;\n    padding: 100px 0;\n    max-width: 1000px;\n\n    @media (max-width: 768px) {\n      padding: 80px 0;\n    }\n\n    @media (max-width: 480px) {\n      padding: 60px 0;\n    }\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 0 0 10px 0;\n    font-weight: 600;\n    color: var(--lightest-slate);\n    line-height: 1.1;\n  }\n\n  .big-heading {\n    margin: 0;\n    font-size: clamp(40px, 8vw, 80px);\n  }\n\n  .medium-heading {\n    margin: 0;\n    font-size: clamp(40px, 8vw, 60px);\n  }\n\n  .numbered-heading {\n    display: flex;\n    align-items: center;\n    position: relative;\n    margin: 10px 0 40px;\n    width: 100%;\n    font-size: clamp(26px, 5vw, var(--fz-heading));\n    white-space: nowrap;\n\n    &:before {\n      position: relative;\n      bottom: 4px;\n      counter-increment: section;\n      content: \'0\' counter(section) \'.\';\n      margin-right: 10px;\n      color: var(--green);\n      font-family: var(--font-mono);\n      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));\n      font-weight: 400;\n\n      @media (max-width: 480px) {\n        margin-bottom: -3px;\n        margin-right: 5px;\n      }\n    }\n\n    &:after {\n      content: \'\';\n      display: block;\n      position: relative;\n      top: -5px;\n      width: 300px;\n      height: 1px;\n      margin-left: 20px;\n      background-color: var(--lightest-navy);\n\n      @media (max-width: 1080px) {\n        width: 200px;\n      }\n      @media (max-width: 768px) {\n        width: 100%;\n      }\n      @media (max-width: 600px) {\n        margin-left: 10px;\n      }\n    }\n  }\n\n  img,\n  svg,\n  .gatsby-image-wrapper {\n    width: 100%;\n    max-width: 100%;\n    vertical-align: middle;\n  }\n\n  img[alt=""],\n  img:not([alt]) {\n    filter: blur(5px);\n  }\n\n  svg {\n    width: 100%;\n    height: 100%;\n    fill: currentColor;\n    vertical-align: middle;\n  }\n\n  a {\n    display: inline-block;\n    text-decoration: none;\n    text-decoration-skip-ink: auto;\n    color: inherit;\n    position: relative;\n    transition: var(--transition);\n    cursor: pointer;\n\n    &:hover,\n    &:focus {\n      color: var(--green);\n    }\n\n    &.inline-link {\n      ',
          ';\n    }\n  }\n\n  button {\n    cursor: pointer;\n    border: 0;\n    border-radius: 0;\n  }\n\n  input, textarea {\n    border-radius: 0;\n    outline: 0;\n\n    &:focus {\n      outline: 0;\n    }\n    &:focus,\n    &:active {\n      &::placeholder {\n        opacity: 0.5;\n      }\n    }\n  }\n\n  p {\n    margin: 0 0 15px 0;\n\n    &:last-child,\n    &:last-of-type {\n      margin: 0;\n    }\n\n    & > a {\n      ',
          ';\n    }\n\n    & > code {\n      background-color: var(--light-navy);\n      color: var(--white);\n      font-size: var(--fz-sm);\n      border-radius: var(--border-radius);\n      padding: 0.3em 0.5em;\n    }\n  }\n\n  ul {\n    &.fancy-list {\n      padding: 0;\n      margin: 0;\n      list-style: none;\n      font-size: var(--fz-lg);\n      li {\n        position: relative;\n        padding-left: 30px;\n        margin-bottom: 10px;\n        &:before {\n          content: \'▹\';\n          position: absolute;\n          left: 0;\n          color: var(--green);\n        }\n      }\n    }\n  }\n\n  blockquote {\n    border-left-color: var(--green);\n    border-left-style: solid;\n    border-left-width: 1px;\n    margin-left: 0px;\n    margin-right: 0px;\n    padding-left: 1.5rem;\n\n    p {\n      font-style: italic;\n      font-size: 24px;\n    }\n  }\n\n  hr {\n    background-color: var(--lightest-navy);\n    height: 1px;\n    border-width: 0px;\n    border-style: initial;\n    border-color: initial;\n    border-image: initial;\n    margin: 1rem;\n  }\n\n  code {\n    font-family: var(--font-mono);\n    font-size: var(--fz-md);\n  }\n\n  #logo {\n    color: var(--green);\n  }\n\n  .overline {\n    color: var(--green);\n    font-family: var(--font-mono);\n    font-size: var(--fz-md);\n    font-weight: 400;\n  }\n\n  .subtitle {\n    color: var(--green);\n    margin: 0 0 20px 0;\n    font-size: var(--fz-md);\n    font-family: var(--font-mono);\n    font-weight: 400;\n    line-height: 1.5;\n    @media (max-width: 1080px) {\n      font-size: var(--fz-sm);\n    }\n    @media (max-width: 768px) {\n      font-size: var(--fz-xs);\n    }\n\n    a {\n      ',
          ';\n      line-height: 1.5;\n    }\n  }\n\n  .breadcrumb {\n    display: flex;\n    align-items: center;\n    margin-bottom: 50px;\n    color: var(--green);\n\n    .arrow {\n      display: block;\n      margin-right: 10px;\n      padding-top: 4px;\n    }\n\n    a {\n      ',
          ';\n      font-family: var(--font-mono);\n      font-size: var(--fz-sm);\n      font-weight: 600;\n      line-height: 1.5;\n      text-transform: uppercase;\n      letter-spacing: 0.1em;\n    }\n  }\n\n  .gatsby-image-outer-wrapper {\n    height: 100%;\n  }\n\n  ',
          ';\n\n  ',
          ';\n',
        ]);
        return (
          (ue = function() {
            return e;
          }),
          e
        );
      }
      const de = Object(u.b)(
        ue(),
        oe,
        function(e) {
          return e.theme.mixins.inlineLink;
        },
        function(e) {
          return e.theme.mixins.inlineLink;
        },
        function(e) {
          return e.theme.mixins.inlineLink;
        },
        function(e) {
          return e.theme.mixins.inlineLink;
        },
        se,
        le,
      );
      'undefined' !== typeof window && n('SR+s')('a[href*="#"]');
      const fe = u.d.a.withConfig({
        displayName: 'layout__SkipToContentLink',
        componentId: 'sc-1yw8zls-0',
      })([
        'position:absolute;top:auto;left:-999px;width:1px;height:1px;overflow:hidden;z-index:-99;&:focus,&:active{top:0;left:0;width:auto;height:auto;padding:18px 23px;outline:0;border-radius:var(--border-radius);background-color:var(--light-navy);color:var(--green);font-family:var(--font-mono);font-size:var(--fz-sm);line-height:1;text-decoration:none;cursor:pointer;overflow:auto;transition:var(--transition);z-index:99;}',
      ]);
      const pe = u.d.div.withConfig({
        displayName: 'layout__StyledContent',
        componentId: 'sc-1yw8zls-1',
      })(['display:flex;flex-direction:column;min-height:100vh;']);
      var he = function(e) {
        const t = e.children;
        const n = e.location;
        const r = '/' === n.pathname;
        const o = Object(a.useState)(r);
        const s = o[0];
        const c = o[1];
        Object(a.useEffect)(
          function() {
            if (!s && n.hash) {
              const e = n.hash.substring(1);
              setTimeout(function() {
                const t = document.getElementById(e);
                t && (t.scrollIntoView(), t.focus());
              }, 0);
            }
          },
          [s],
        );
        return (
          Object(a.useEffect)(function() {
            let e;
            (e = Array.from(document.querySelectorAll('a'))).length > 0 &&
                e.forEach(function(e) {
                  e.host !== window.location.host &&
                    (e.setAttribute('rel', 'noopener noreferrer'),
                    e.setAttribute('target', '_blank'));
                });
          }, []),
          i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(l, null),
            i.a.createElement(
              'div',
              { id: 'root' },
              i.a.createElement(
                u.a,
                { theme: f },
                i.a.createElement(de, null),
                i.a.createElement(fe, { href: '#content' }, 'Skip to Content'),
                s && r
                  ? i.a.createElement(Et, {
                    finishLoading: function() {
                      return c(!1);
                    },
                  })
                  : i.a.createElement(
                    pe,
                    null,
                    i.a.createElement(Lt, { isHome: r }),
                    i.a.createElement(Vt, { isHome: r }),
                    i.a.createElement(Ut, { isHome: r }),
                    i.a.createElement('div', { id: 'content' }, t, i.a.createElement($t, null)),
                  ),
              ),
            ),
          )
        );
      };
      const me =
          (n('6kNP'),
          n('YBKJ'),
          n('Ll4R'),
          n('xJgp'),
          n('sC2a'),
          n('wZFJ'),
          n('U6Bt'),
          n('Ggvi'),
          n('JHok'),
          n('5irr'),
          n('HQhv'),
          n('AqHK'),
          n('q8oJ'),
          n('C9fy'),
          n('MIFh'),
          n('sc67'),
          {
            update: null,
            begin: null,
            loopBegin: null,
            changeBegin: null,
            change: null,
            changeComplete: null,
            loopComplete: null,
            complete: null,
            loop: 1,
            direction: 'normal',
            autoplay: !0,
            timelineOffset: 0,
          });
      const ge = { duration: 1e3, delay: 0, endDelay: 0, easing: 'easeOutElastic(1, .5)', round: 0 };
      const ve = [
        'translateX',
        'translateY',
        'translateZ',
        'rotate',
        'rotateX',
        'rotateY',
        'rotateZ',
        'scale',
        'scaleX',
        'scaleY',
        'scaleZ',
        'skew',
        'skewX',
        'skewY',
        'perspective',
      ];
      const be = { CSS: {}, springs: {} };
      function ye(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      function we(e, t) {
        return e.indexOf(t) > -1;
      }
      function xe(e, t) {
        return e.apply(null, t);
      }
      var Ee = {
        arr: function(e) {
          return Array.isArray(e);
        },
        obj: function(e) {
          return we(Object.prototype.toString.call(e), 'Object');
        },
        pth: function(e) {
          return Ee.obj(e) && e.hasOwnProperty('totalLength');
        },
        svg: function(e) {
          return e instanceof SVGElement;
        },
        inp: function(e) {
          return e instanceof HTMLInputElement;
        },
        dom: function(e) {
          return e.nodeType || Ee.svg(e);
        },
        str: function(e) {
          return 'string' === typeof e;
        },
        fnc: function(e) {
          return 'function' === typeof e;
        },
        und: function(e) {
          return void 0 === e;
        },
        hex: function(e) {
          return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
        },
        rgb: function(e) {
          return /^rgb/.test(e);
        },
        hsl: function(e) {
          return /^hsl/.test(e);
        },
        col: function(e) {
          return Ee.hex(e) || Ee.rgb(e) || Ee.hsl(e);
        },
        key: function(e) {
          return (
            !me.hasOwnProperty(e) && !ge.hasOwnProperty(e) && 'targets' !== e && 'keyframes' !== e
          );
        },
      };
      function Se(e) {
        const t = /\(([^)]+)\)/.exec(e);
        return t
          ? t[1].split(',').map(function(e) {
            return parseFloat(e);
          })
          : [];
      }
      function ke(e, t) {
        const n = Se(e);
        const r = ye(Ee.und(n[0]) ? 1 : n[0], 0.1, 100);
        const a = ye(Ee.und(n[1]) ? 100 : n[1], 0.1, 100);
        const i = ye(Ee.und(n[2]) ? 10 : n[2], 0.1, 100);
        const o = ye(Ee.und(n[3]) ? 0 : n[3], 0.1, 100);
        const s = Math.sqrt(a / r);
        const c = i / (2 * Math.sqrt(a * r));
        const l = c < 1 ? s * Math.sqrt(1 - c * c) : 0;
        const u = c < 1 ? (c * s - o) / l : -o + s;
        function d(e) {
          let n = t ? (t * e) / 1e3 : e;
          return (
            (n =
              c < 1
                ? Math.exp(-n * c * s) * (1 * Math.cos(l * n) + u * Math.sin(l * n))
                : (1 + u * n) * Math.exp(-n * s)),
            0 === e || 1 === e ? e : 1 - n
          );
        }
        return t
          ? d
          : function() {
            const t = be.springs[e];
            if (t) {return t;}
            for (var n = 0, r = 0; ; ) {
              if (1 === d((n += 1 / 6))) {
                if (++r >= 16) {break;}
              } else {r = 0;}
            }
            const a = n * (1 / 6) * 1e3;
            return (be.springs[e] = a), a;
          };
      }
      function Ce(e) {
        return (
          void 0 === e && (e = 10),
          function(t) {
            return Math.round(t * e) * (1 / e);
          }
        );
      }
      let Oe;
      let je;
      const Ae = (function() {
        function e(e, t) {
          return 1 - 3 * t + 3 * e;
        }
        function t(e, t) {
          return 3 * t - 6 * e;
        }
        function n(e) {
          return 3 * e;
        }
        function r(r, a, i) {
          return ((e(a, i) * r + t(a, i)) * r + n(a)) * r;
        }
        function a(r, a, i) {
          return 3 * e(a, i) * r * r + 2 * t(a, i) * r + n(a);
        }
        return function(e, t, n, i) {
          if (0 <= e && e <= 1 && 0 <= n && n <= 1) {
            var o = new Float32Array(11);
            if (e !== t || n !== i) {for (let s = 0; s < 11; ++s) {o[s] = r(0.1 * s, e, n);}}
            return function(a) {
              return (e === t && n === i) || 0 === a || 1 === a ? a : r(c(a), t, i);
            };
          }
          function c(t) {
            for (var i = 0, s = 1; 10 !== s && o[s] <= t; ++s) {i += 0.1;}
            --s;
            const c = i + 0.1 * ((t - o[s]) / (o[s + 1] - o[s]));
            const l = a(c, e, n);
            return l >= 0.001
              ? (function(e, t, n, i) {
                for (let o = 0; o < 4; ++o) {
                  const s = a(t, n, i);
                  if (0 === s) {return t;}
                  t -= (r(t, n, i) - e) / s;
                }
                return t;
              })(t, c, e, n)
              : 0 === l
                ? c
                : (function(e, t, n, a, i) {
                  let o;
                  let s;
                  let c = 0;
                  do {
                    (o = r((s = t + (n - t) / 2), a, i) - e) > 0 ? (n = s) : (t = s);
                  } while (Math.abs(o) > 1e-7 && ++c < 10);
                  return s;
                })(t, i, i + 0.1, e, n);
          }
        };
      })();
      const Ie =
          ((Oe = {
            linear: function() {
              return function(e) {
                return e;
              };
            },
          }),
          (je = {
            Sine: function() {
              return function(e) {
                return 1 - Math.cos((e * Math.PI) / 2);
              };
            },
            Circ: function() {
              return function(e) {
                return 1 - Math.sqrt(1 - e * e);
              };
            },
            Back: function() {
              return function(e) {
                return e * e * (3 * e - 2);
              };
            },
            Bounce: function() {
              return function(e) {
                for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11; ){;}
                return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2);
              };
            },
            Elastic: function(e, t) {
              void 0 === e && (e = 1), void 0 === t && (t = 0.5);
              const n = ye(e, 1, 10);
              const r = ye(t, 0.1, 2);
              return function(e) {
                return 0 === e || 1 === e
                  ? e
                  : -n *
                      Math.pow(2, 10 * (e - 1)) *
                      Math.sin(
                        ((e - 1 - (r / (2 * Math.PI)) * Math.asin(1 / n)) * (2 * Math.PI)) / r,
                      );
              };
            },
          }),
          ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'].forEach(function(e, t) {
            je[e] = function() {
              return function(e) {
                return Math.pow(e, t + 2);
              };
            };
          }),
          Object.keys(je).forEach(function(e) {
            const t = je[e];
            (Oe[`easeIn${  e}`] = t),
            (Oe[`easeOut${  e}`] = function(e, n) {
              return function(r) {
                return 1 - t(e, n)(1 - r);
              };
            }),
            (Oe[`easeInOut${  e}`] = function(e, n) {
              return function(r) {
                return r < 0.5 ? t(e, n)(2 * r) / 2 : 1 - t(e, n)(-2 * r + 2) / 2;
              };
            });
          }),
          Oe);
      function Te(e, t) {
        if (Ee.fnc(e)) {return e;}
        const n = e.split('(')[0];
        const r = Ie[n];
        const a = Se(e);
        switch (n) {
          case 'spring':
            return ke(e, t);
          case 'cubicBezier':
            return xe(Ae, a);
          case 'steps':
            return xe(Ce, a);
          default:
            return xe(r, a);
        }
      }
      function Me(e) {
        try {
          return document.querySelectorAll(e);
        } catch (t) {
          return;
        }
      }
      function Ne(e, t) {
        for (
          var n = e.length, r = arguments.length >= 2 ? arguments[1] : void 0, a = [], i = 0;
          i < n;
          i++
        ) {
          if (i in e) {
            const o = e[i];
            t.call(r, o, i, e) && a.push(o);
          }
        }
        return a;
      }
      function Le(e) {
        return e.reduce(function(e, t) {
          return e.concat(Ee.arr(t) ? Le(t) : t);
        }, []);
      }
      function ze(e) {
        return Ee.arr(e)
          ? e
          : (Ee.str(e) && (e = Me(e) || e),
          e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e]);
      }
      function Pe(e, t) {
        return e.some(function(e) {
          return e === t;
        });
      }
      function Re(e) {
        const t = {};
        for (const n in e) {t[n] = e[n];}
        return t;
      }
      function _e(e, t) {
        const n = Re(e);
        for (const r in e) {n[r] = t.hasOwnProperty(r) ? t[r] : e[r];}
        return n;
      }
      function Fe(e, t) {
        const n = Re(e);
        for (const r in t) {n[r] = Ee.und(e[r]) ? t[r] : e[r];}
        return n;
      }
      function He(e) {
        return Ee.rgb(e)
          ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((t = e)))
            ? `rgba(${  n[1]  },1)`
            : t
          : Ee.hex(e)
            ? (function(e) {
              const t = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, r) {
                return t + t + n + n + r + r;
              });
              const n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
              return (
                `rgba(${ 
                  parseInt(n[1], 16) 
                },${ 
                  parseInt(n[2], 16) 
                },${ 
                  parseInt(n[3], 16) 
                },1)`
              );
            })(e)
            : Ee.hsl(e)
              ? (function(e) {
                let t;
                let n;
                let r;
                const a =
                  /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) ||
                  /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e);
                const i = parseInt(a[1], 10) / 360;
                const o = parseInt(a[2], 10) / 100;
                const s = parseInt(a[3], 10) / 100;
                const c = a[4] || 1;
                function l(e, t, n) {
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
                if (0 == o) {t = n = r = s;} else {
                  const u = s < 0.5 ? s * (1 + o) : s + o - s * o;
                  const d = 2 * s - u;
                  (t = l(d, u, i + 1 / 3)), (n = l(d, u, i)), (r = l(d, u, i - 1 / 3));
                }
                return `rgba(${  255 * t  },${  255 * n  },${  255 * r  },${  c  })`;
              })(e)
              : void 0;
        let t; let n;
      }
      function De(e) {
        const t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
          e,
        );
        if (t) {return t[1];}
      }
      function Be(e, t) {
        return Ee.fnc(e) ? e(t.target, t.id, t.total) : e;
      }
      function qe(e, t) {
        return e.getAttribute(t);
      }
      function Ve(e, t, n) {
        if (Pe([n, 'deg', 'rad', 'turn'], De(t))) {return t;}
        const r = be.CSS[t + n];
        if (!Ee.und(r)) {return r;}
        const a = document.createElement(e.tagName);
        const i = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
        i.appendChild(a), (a.style.position = 'absolute'), (a.style.width = 100 + n);
        const o = 100 / a.offsetWidth;
        i.removeChild(a);
        const s = o * parseFloat(t);
        return (be.CSS[t + n] = s), s;
      }
      function We(e, t, n) {
        if (t in e.style) {
          const r = t.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
          const a = e.style[t] || getComputedStyle(e).getPropertyValue(r) || '0';
          return n ? Ve(e, a, n) : a;
        }
      }
      function Ue(e, t) {
        return Ee.dom(e) && !Ee.inp(e) && (qe(e, t) || (Ee.svg(e) && e[t]))
          ? 'attribute'
          : Ee.dom(e) && Pe(ve, t)
            ? 'transform'
            : Ee.dom(e) && 'transform' !== t && We(e, t)
              ? 'css'
              : null != e[t]
                ? 'object'
                : void 0;
      }
      function Ge(e) {
        if (Ee.dom(e)) {
          for (
            var t, n = e.style.transform || '', r = /(\w+)\(([^)]*)\)/g, a = new Map();
            (t = r.exec(n));

          ) {a.set(t[1], t[2]);}
          return a;
        }
      }
      function Je(e, t, n, r) {
        const a = we(t, 'scale')
          ? 1
          : 0 +
              (function(e) {
                return we(e, 'translate') || 'perspective' === e
                  ? 'px'
                  : we(e, 'rotate') || we(e, 'skew')
                    ? 'deg'
                    : void 0;
              })(t);
        const i = Ge(e).get(t) || a;
        return n && (n.transforms.list.set(t, i), (n.transforms.last = t)), r ? Ve(e, i, r) : i;
      }
      function Ye(e, t, n, r) {
        switch (Ue(e, t)) {
          case 'transform':
            return Je(e, t, r, n);
          case 'css':
            return We(e, t, n);
          case 'attribute':
            return qe(e, t);
          default:
            return e[t] || 0;
        }
      }
      function $e(e, t) {
        const n = /^(\*=|\+=|-=)/.exec(e);
        if (!n) {return e;}
        const r = De(e) || 0;
        const a = parseFloat(t);
        const i = parseFloat(e.replace(n[0], ''));
        switch (n[0][0]) {
          case '+':
            return a + i + r;
          case '-':
            return a - i + r;
          case '*':
            return a * i + r;
        }
      }
      function Ke(e, t) {
        if (Ee.col(e)) {return He(e);}
        if (/\s/g.test(e)) {return e;}
        const n = De(e);
        const r = n ? e.substr(0, e.length - n.length) : e;
        return t ? r + t : r;
      }
      function Qe(e, t) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
      }
      function Xe(e) {
        for (var t, n = e.points, r = 0, a = 0; a < n.numberOfItems; a++) {
          const i = n.getItem(a);
          a > 0 && (r += Qe(t, i)), (t = i);
        }
        return r;
      }
      function Ze(e) {
        if (e.getTotalLength) {return e.getTotalLength();}
        switch (e.tagName.toLowerCase()) {
          case 'circle':
            return (function(e) {
              return 2 * Math.PI * qe(e, 'r');
            })(e);
          case 'rect':
            return (function(e) {
              return 2 * qe(e, 'width') + 2 * qe(e, 'height');
            })(e);
          case 'line':
            return (function(e) {
              return Qe({ x: qe(e, 'x1'), y: qe(e, 'y1') }, { x: qe(e, 'x2'), y: qe(e, 'y2') });
            })(e);
          case 'polyline':
            return Xe(e);
          case 'polygon':
            return (function(e) {
              const t = e.points;
              return Xe(e) + Qe(t.getItem(t.numberOfItems - 1), t.getItem(0));
            })(e);
        }
      }
      function et(e, t) {
        const n = t || {};
        const r =
            n.el ||
            (function(e) {
              for (var t = e.parentNode; Ee.svg(t) && Ee.svg(t.parentNode); ) {t = t.parentNode;}
              return t;
            })(e);
        const a = r.getBoundingClientRect();
        const i = qe(r, 'viewBox');
        const o = a.width;
        const s = a.height;
        const c = n.viewBox || (i ? i.split(' ') : [0, 0, o, s]);
        return { el: r, viewBox: c, x: c[0] / 1, y: c[1] / 1, w: o / c[2], h: s / c[3] };
      }
      function tt(e, t) {
        function n(n) {
          void 0 === n && (n = 0);
          const r = t + n >= 1 ? t + n : 0;
          return e.el.getPointAtLength(r);
        }
        const r = et(e.el, e.svg);
        const a = n();
        const i = n(-1);
        const o = n(1);
        switch (e.property) {
          case 'x':
            return (a.x - r.x) * r.w;
          case 'y':
            return (a.y - r.y) * r.h;
          case 'angle':
            return (180 * Math.atan2(o.y - i.y, o.x - i.x)) / Math.PI;
        }
      }
      function nt(e, t) {
        const n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;
        const r = `${Ke(Ee.pth(e) ? e.totalLength : e, t)  }`;
        return {
          original: r,
          numbers: r.match(n) ? r.match(n).map(Number) : [0],
          strings: Ee.str(e) || t ? r.split(n) : [],
        };
      }
      function rt(e) {
        return Ne(e ? Le(Ee.arr(e) ? e.map(ze) : ze(e)) : [], function(e, t, n) {
          return n.indexOf(e) === t;
        });
      }
      function at(e) {
        const t = rt(e);
        return t.map(function(e, n) {
          return { target: e, id: n, total: t.length, transforms: { list: Ge(e) } };
        });
      }
      function it(e, t) {
        const n = Re(t);
        if ((/^spring/.test(n.easing) && (n.duration = ke(n.easing)), Ee.arr(e))) {
          const r = e.length;
          2 === r && !Ee.obj(e[0])
            ? (e = { value: e })
            : Ee.fnc(t.duration) || (n.duration = t.duration / r);
        }
        const a = Ee.arr(e) ? e : [e];
        return a
          .map(function(e, n) {
            const r = Ee.obj(e) && !Ee.pth(e) ? e : { value: e };
            return (
              Ee.und(r.delay) && (r.delay = n ? 0 : t.delay),
              Ee.und(r.endDelay) && (r.endDelay = n === a.length - 1 ? t.endDelay : 0),
              r
            );
          })
          .map(function(e) {
            return Fe(e, n);
          });
      }
      function ot(e, t) {
        const n = [];
        const r = t.keyframes;
        for (const a in (r &&
          (t = Fe(
            (function(e) {
              for (
                var t = Ne(
                    Le(
                      e.map(function(e) {
                        return Object.keys(e);
                      }),
                    ),
                    function(e) {
                      return Ee.key(e);
                    },
                  ).reduce(function(e, t) {
                    return e.indexOf(t) < 0 && e.push(t), e;
                  }, []),
                  n = {},
                  r = function(r) {
                    const a = t[r];
                    n[a] = e.map(function(e) {
                      const t = {};
                      for (const n in e) {Ee.key(n) ? n == a && (t.value = e[n]) : (t[n] = e[n]);}
                      return t;
                    });
                  },
                  a = 0;
                a < t.length;
                a++
              ) {r(a);}
              return n;
            })(r),
            t,
          )),
        t)) {Ee.key(a) && n.push({ name: a, tweens: it(t[a], e) });}
        return n;
      }
      function st(e, t) {
        let n;
        return e.tweens.map(function(r) {
          const a = (function(e, t) {
            const n = {};
            for (const r in e) {
              let a = Be(e[r], t);
              Ee.arr(a) &&
                  1 ===
                    (a = a.map(function(e) {
                      return Be(e, t);
                    })).length &&
                  (a = a[0]),
              (n[r] = a);
            }
            return (n.duration = parseFloat(n.duration)), (n.delay = parseFloat(n.delay)), n;
          })(r, t);
          const i = a.value;
          let o = Ee.arr(i) ? i[1] : i;
          const s = De(o);
          const c = Ye(t.target, e.name, s, t);
          const l = n ? n.to.original : c;
          const u = Ee.arr(i) ? i[0] : l;
          const d = De(u) || De(c);
          const f = s || d;
          return (
            Ee.und(o) && (o = l),
            (a.from = nt(u, f)),
            (a.to = nt($e(o, u), f)),
            (a.start = n ? n.end : 0),
            (a.end = a.start + a.delay + a.duration + a.endDelay),
            (a.easing = Te(a.easing, a.duration)),
            (a.isPath = Ee.pth(i)),
            (a.isColor = Ee.col(a.from.original)),
            a.isColor && (a.round = 1),
            (n = a),
            a
          );
        });
      }
      const ct = {
        css: function(e, t, n) {
          return (e.style[t] = n);
        },
        attribute: function(e, t, n) {
          return e.setAttribute(t, n);
        },
        object: function(e, t, n) {
          return (e[t] = n);
        },
        transform: function(e, t, n, r, a) {
          if ((r.list.set(t, n), t === r.last || a)) {
            let i = '';
            r.list.forEach(function(e, t) {
              i += `${t  }(${  e  }) `;
            }),
            (e.style.transform = i);
          }
        },
      };
      function lt(e, t) {
        at(e).forEach(function(e) {
          for (const n in t) {
            const r = Be(t[n], e);
            const a = e.target;
            const i = De(r);
            const o = Ye(a, n, i, e);
            const s = $e(Ke(r, i || De(o)), o);
            const c = Ue(a, n);
            ct[c](a, n, s, e.transforms, !0);
          }
        });
      }
      function ut(e, t) {
        return Ne(
          Le(
            e.map(function(e) {
              return t.map(function(t) {
                return (function(e, t) {
                  const n = Ue(e.target, t.name);
                  if (n) {
                    const r = st(t, e);
                    const a = r[r.length - 1];
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
            }),
          ),
          function(e) {
            return !Ee.und(e);
          },
        );
      }
      function dt(e, t) {
        const n = e.length;
        const r = function(e) {
          return e.timelineOffset ? e.timelineOffset : 0;
        };
        const a = {};
        return (
          (a.duration = n
            ? Math.max.apply(
              Math,
              e.map(function(e) {
                return r(e) + e.duration;
              }),
            )
            : t.duration),
          (a.delay = n
            ? Math.min.apply(
              Math,
              e.map(function(e) {
                return r(e) + e.delay;
              }),
            )
            : t.delay),
          (a.endDelay = n
            ? a.duration -
              Math.max.apply(
                Math,
                e.map(function(e) {
                  return r(e) + e.duration - e.endDelay;
                }),
              )
            : t.endDelay),
          a
        );
      }
      let ft = 0;
      let pt;
      let ht = [];
      let mt = [];
      const gt = (function() {
        function e() {
          pt = requestAnimationFrame(t);
        }
        function t(t) {
          let n = ht.length;
          if (n) {
            for (let r = 0; r < n; ) {
              const a = ht[r];
              if (a.paused) {
                const i = ht.indexOf(a);
                i > -1 && (ht.splice(i, 1), (n = ht.length));
              } else {a.tick(t);}
              r++;
            }
            e();
          } else {pt = cancelAnimationFrame(pt);}
        }
        return e;
      })();
      function vt(e) {
        void 0 === e && (e = {});
        let t;
        let n = 0;
        let r = 0;
        let a = 0;
        let i = 0;
        let o = null;
        function s(e) {
          const t =
            window.Promise &&
            new Promise(function(e) {
              return (o = e);
            });
          return (e.finished = t), t;
        }
        const c = (function(e) {
          const t = _e(me, e);
          const n = _e(ge, e);
          const r = ot(n, e);
          const a = at(e.targets);
          const i = ut(a, r);
          const o = dt(i, n);
          const s = ft;
          return (
            ft++,
            Fe(t, {
              id: s,
              children: [],
              animatables: a,
              animations: i,
              duration: o.duration,
              delay: o.delay,
              endDelay: o.endDelay,
            })
          );
        })(e);
        s(c);
        function l() {
          const e = c.direction;
          'alternate' !== e && (c.direction = 'normal' !== e ? 'normal' : 'reverse'),
          (c.reversed = !c.reversed),
          t.forEach(function(e) {
            return (e.reversed = c.reversed);
          });
        }
        function u(e) {
          return c.reversed ? c.duration - e : e;
        }
        function d() {
          (n = 0), (r = u(c.currentTime) * (1 / vt.speed));
        }
        function f(e, t) {
          t && t.seek(e - t.timelineOffset);
        }
        function p(e) {
          for (let t = 0, n = c.animations, r = n.length; t < r; ) {
            const a = n[t];
            const i = a.animatable;
            const o = a.tweens;
            const s = o.length - 1;
            let l = o[s];
            s &&
              (l =
                Ne(o, function(t) {
                  return e < t.end;
                })[0] || l);
            for (
              var u = ye(e - l.start - l.delay, 0, l.duration) / l.duration,
                d = isNaN(u) ? 1 : l.easing(u),
                f = l.to.strings,
                p = l.round,
                h = [],
                m = l.to.numbers.length,
                g = void 0,
                v = 0;
              v < m;
              v++
            ) {
              let b = void 0;
              const y = l.to.numbers[v];
              const w = l.from.numbers[v] || 0;
              (b = l.isPath ? tt(l.value, d * y) : w + d * (y - w)),
              p && ((l.isColor && v > 2) || (b = Math.round(b * p) / p)),
              h.push(b);
            }
            const x = f.length;
            if (x) {
              g = f[0];
              for (let E = 0; E < x; E++) {
                f[E];
                const S = f[E + 1];
                const k = h[E];
                isNaN(k) || (g += S ? k + S : `${k  } `);
              }
            } else {g = h[0];}
            ct[a.type](i.target, a.property, g, i.transforms), (a.currentValue = g), t++;
          }
        }
        function h(e) {
          c[e] && !c.passThrough && c[e](c);
        }
        function m(e) {
          const d = c.duration;
          const m = c.delay;
          const g = d - c.endDelay;
          const v = u(e);
          (c.progress = ye((v / d) * 100, 0, 100)),
          (c.reversePlayback = v < c.currentTime),
          t &&
              (function(e) {
                if (c.reversePlayback) {for (let n = i; n--; ) {f(e, t[n]);}} else {for (let r = 0; r < i; r++) {f(e, t[r]);}}
              })(v),
          !c.began && c.currentTime > 0 && ((c.began = !0), h('begin')),
          !c.loopBegan && c.currentTime > 0 && ((c.loopBegan = !0), h('loopBegin')),
          v <= m && 0 !== c.currentTime && p(0),
          ((v >= g && c.currentTime !== d) || !d) && p(d),
          v > m && v < g
            ? (c.changeBegan ||
                  ((c.changeBegan = !0), (c.changeCompleted = !1), h('changeBegin')),
            h('change'),
            p(v))
            : c.changeBegan &&
                ((c.changeCompleted = !0), (c.changeBegan = !1), h('changeComplete')),
          (c.currentTime = ye(v, 0, d)),
          c.began && h('update'),
          e >= d &&
              ((r = 0),
              c.remaining && !0 !== c.remaining && c.remaining--,
              c.remaining
                ? ((n = a),
                h('loopComplete'),
                (c.loopBegan = !1),
                'alternate' === c.direction && l())
                : ((c.paused = !0),
                c.completed ||
                    ((c.completed = !0),
                    h('loopComplete'),
                    h('complete'),
                    !c.passThrough && 'Promise' in window && (o(), s(c)))));
        }
        return (
          (c.reset = function() {
            const e = c.direction;
            (c.passThrough = !1),
            (c.currentTime = 0),
            (c.progress = 0),
            (c.paused = !0),
            (c.began = !1),
            (c.loopBegan = !1),
            (c.changeBegan = !1),
            (c.completed = !1),
            (c.changeCompleted = !1),
            (c.reversePlayback = !1),
            (c.reversed = 'reverse' === e),
            (c.remaining = c.loop),
            (t = c.children);
            for (let n = (i = t.length); n--; ) {c.children[n].reset();}
            ((c.reversed && !0 !== c.loop) || ('alternate' === e && 1 === c.loop)) && c.remaining++,
            p(c.reversed ? c.duration : 0);
          }),
          (c.set = function(e, t) {
            return lt(e, t), c;
          }),
          (c.tick = function(e) {
            (a = e), n || (n = a), m((a + (r - n)) * vt.speed);
          }),
          (c.seek = function(e) {
            m(u(e));
          }),
          (c.pause = function() {
            (c.paused = !0), d();
          }),
          (c.play = function() {
            c.paused && (c.completed && c.reset(), (c.paused = !1), ht.push(c), d(), pt || gt());
          }),
          (c.reverse = function() {
            l(), d();
          }),
          (c.restart = function() {
            c.reset(), c.play();
          }),
          c.reset(),
          c.autoplay && c.play(),
          c
        );
      }
      function bt(e, t) {
        for (let n = t.length; n--; ) {Pe(e, t[n].animatable.target) && t.splice(n, 1);}
      }
      'undefined' !== typeof document &&
        document.addEventListener('visibilitychange', function() {
          document.hidden
            ? (ht.forEach(function(e) {
              return e.pause();
            }),
            (mt = ht.slice(0)),
            (vt.running = ht = []))
            : mt.forEach(function(e) {
              return e.play();
            });
        }),
      (vt.version = '3.1.0'),
      (vt.speed = 1),
      (vt.running = ht),
      (vt.remove = function(e) {
        for (let t = rt(e), n = ht.length; n--; ) {
          const r = ht[n];
          const a = r.animations;
          const i = r.children;
          bt(t, a);
          for (let o = i.length; o--; ) {
            const s = i[o];
            const c = s.animations;
            bt(t, c), c.length || s.children.length || i.splice(o, 1);
          }
          a.length || i.length || r.pause();
        }
      }),
      (vt.get = Ye),
      (vt.set = lt),
      (vt.convertPx = Ve),
      (vt.path = function(e, t) {
        const n = Ee.str(e) ? Me(e)[0] : e;
        const r = t || 100;
        return function(e) {
          return { property: e, el: n, svg: et(n), totalLength: Ze(n) * (r / 100) };
        };
      }),
      (vt.setDashoffset = function(e) {
        const t = Ze(e);
        return e.setAttribute('stroke-dasharray', t), t;
      }),
      (vt.stagger = function(e, t) {
        void 0 === t && (t = {});
        const n = t.direction || 'normal';
        const r = t.easing ? Te(t.easing) : null;
        const a = t.grid;
        const i = t.axis;
        let o = t.from || 0;
        const s = 'first' === o;
        const c = 'center' === o;
        const l = 'last' === o;
        const u = Ee.arr(e);
        const d = u ? parseFloat(e[0]) : parseFloat(e);
        const f = u ? parseFloat(e[1]) : 0;
        const p = De(u ? e[1] : e) || 0;
        const h = t.start || 0 + (u ? d : 0);
        let m = [];
        let g = 0;
        return function(e, t, v) {
          if ((s && (o = 0), c && (o = (v - 1) / 2), l && (o = v - 1), !m.length)) {
            for (let b = 0; b < v; b++) {
              if (a) {
                const y = c ? (a[0] - 1) / 2 : o % a[0];
                const w = c ? (a[1] - 1) / 2 : Math.floor(o / a[0]);
                const x = y - (b % a[0]);
                const E = w - Math.floor(b / a[0]);
                let S = Math.sqrt(x * x + E * E);
                'x' === i && (S = -x), 'y' === i && (S = -E), m.push(S);
              } else {m.push(Math.abs(o - b));}
              g = Math.max.apply(Math, m);
            }
            r &&
                (m = m.map(function(e) {
                  return r(e / g) * g;
                })),
            'reverse' === n &&
                  (m = m.map(function(e) {
                    return i ? (e < 0 ? -1 * e : -e) : Math.abs(g - e);
                  }));
          }
          return h + (u ? (f - d) / g : d) * (Math.round(100 * m[t]) / 100) + p;
        };
      }),
      (vt.timeline = function(e) {
        void 0 === e && (e = {});
        const t = vt(e);
        return (
          (t.duration = 0),
          (t.add = function(n, r) {
            const a = ht.indexOf(t);
            const i = t.children;
            function o(e) {
              e.passThrough = !0;
            }
            a > -1 && ht.splice(a, 1);
            for (let s = 0; s < i.length; s++) {o(i[s]);}
            const c = Fe(n, _e(ge, e));
            c.targets = c.targets || e.targets;
            const l = t.duration;
            (c.autoplay = !1),
            (c.direction = t.direction),
            (c.timelineOffset = Ee.und(r) ? l : $e(r, l)),
            o(t),
            t.seek(c.timelineOffset);
            const u = vt(c);
            o(u), i.push(u);
            const d = dt(i, e);
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
      (vt.easing = Te),
      (vt.penner = Ie),
      (vt.random = function(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e;
      });
      const yt = vt;
      const wt = n('g67X');
      const xt = u.d.div.withConfig({
        displayName: 'loader__StyledLoader',
        componentId: 'sc-177se4j-0',
      })(
        [
          '',
          ';position:fixed;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-color:var(--dark-navy);z-index:99;.logo-wrapper{width:max-content;max-width:100px;transition:var(--transition);opacity:',
          ';svg{display:block;width:100%;height:100%;margin:0 auto;fill:none;user-select:none;#B{opacity:0;}}}',
        ],
        function(e) {
          return e.theme.mixins.flexCenter;
        },
        function(e) {
          return e.isMounted ? 1 : 0;
        },
      );
      var Et = function(e) {
        const t = e.finishLoading;
        const n = Object(a.useState)(!1);
        const r = n[0];
        const s = n[1];
        return (
          Object(a.useEffect)(function() {
            const e = setTimeout(function() {
              return s(!0);
            }, 10);
            return (
              yt
                .timeline({
                  complete: function() {
                    return t();
                  },
                })
                .add({
                  targets: '#logo path',
                  delay: 300,
                  duration: 1500,
                  easing: 'easeInOutQuart',
                  strokeDashoffset: [yt.setDashoffset, 0],
                })
                .add({ targets: '#logo #B', duration: 700, easing: 'easeInOutQuart', opacity: 1 })
                .add({
                  targets: '#logo',
                  delay: 500,
                  duration: 300,
                  easing: 'easeInOutQuart',
                  opacity: 0,
                  scale: 0.1,
                })
                .add({
                  targets: '.loader',
                  duration: 200,
                  easing: 'easeInOutQuart',
                  opacity: 0,
                  zIndex: -1,
                }),
              function() {
                return clearTimeout(e);
              }
            );
          }, []),
          i.a.createElement(
            xt,
            { className: 'loader', isMounted: r },
            i.a.createElement(o.a, { bodyAttributes: { class: 'hidden' } }),
            i.a.createElement(
              'div',
              { className: 'logo-wrapper' },
              i.a.createElement(wt.j, null),
            ),
          )
        );
      };
      const St = n('Wbzz');
      const kt = n('VeD8');
      const Ct = n('pQ8y');
      const Ot = n('20nU');
      const jt = n('7Qib');
      const At = function(e, t) {
        Object(a.useEffect)(
          function() {
            const n = function(n) {
              e.current && !e.current.contains(n.target) && t(n);
            };
            return (
              document.addEventListener('mousedown', n),
              document.addEventListener('touchstart', n),
              function() {
                document.removeEventListener('mousedown', n),
                document.removeEventListener('touchstart', n);
              }
            );
          },
          [e, t],
        );
      };
      const It = function(e) {
        const t = void 0 === e ? {} : e;
        const n = t.initialDirection;
        const r = t.thresholdPixels;
        const i = t.off;
        const o = Object(a.useState)(n);
        const s = o[0];
        const c = o[1];
        return (
          Object(a.useEffect)(
            function() {
              const e = r || 0;
              let t = window.pageYOffset;
              let a = !1;
              const o = function() {
                const n = window.pageYOffset;
                Math.abs(n - t) < e || (c(n > t ? 'down' : 'up'), (t = n > 0 ? n : 0)),
                (a = !1);
              };
              const s = function() {
                a || (window.requestAnimationFrame(o), (a = !0));
              };
              return (
                i ? c(n) : window.addEventListener('scroll', s),
                function() {
                  return window.removeEventListener('scroll', s);
                }
              );
            },
            [n, r, i],
          ),
          s
        );
      };
      const Tt = u.d.header.withConfig({ displayName: 'nav__StyledHeader', componentId: 'ghklvd-0' })(
        [
          '',
          ';position:fixed;top:0;z-index:11;padding:0px 50px;width:100%;height:var(--nav-height);background-color:var(--navy);filter:none !important;pointer-events:auto !important;user-select:auto !important;backdrop-filter:blur(10px);transition:var(--transition);',
          ';',
          ';@media (max-width:1080px){padding:0 40px;}@media (max-width:768px){padding:0 25px;}',
        ],
        function(e) {
          return e.theme.mixins.flexBetween;
        },
        function(e) {
          return (
            'up' === e.scrollDirection &&
              !e.scrolledToTop &&
              Object(u.c)([
                'height:var(--nav-scroll-height);transform:translateY(0px);background-color:rgba(10,25,47,0.85);box-shadow:0 10px 30px -10px var(--navy-shadow);',
              ])
          );
        },
        function(e) {
          return (
            'down' === e.scrollDirection &&
              !e.scrolledToTop &&
              Object(u.c)([
                'height:var(--nav-scroll-height);transform:translateY(calc(var(--nav-scroll-height) * -1));box-shadow:0 10px 30px -10px var(--navy-shadow);',
              ])
          );
        },
      );
      const Mt = u.d.nav.withConfig({ displayName: 'nav__StyledNav', componentId: 'ghklvd-1' })(
        [
          '',
          ';position:relative;width:100%;color:var(--lightest-slate);font-family:var(--font-mono);counter-reset:item 0;z-index:12;.logo{',
          ';a{color:var(--green);width:42px;height:42px;&:hover,&:focus{svg{fill:var(--green-tint);}}svg{fill:none;transition:var(--transition);user-select:none;}}}',
        ],
        function(e) {
          return e.theme.mixins.flexBetween;
        },
        function(e) {
          return e.theme.mixins.flexCenter;
        },
      );
      const Nt = u.d.div.withConfig({ displayName: 'nav__StyledLinks', componentId: 'ghklvd-2' })(
        [
          'display:flex;align-items:center;@media (max-width:768px){display:none;}ol{',
          ';padding:0;margin:0;list-style:none;li{margin:0 5px;position:relative;counter-increment:item 1;font-size:var(--fz-xs);a{padding:10px;&:before{content:\'0\' counter(item) \'.\';margin-right:5px;color:var(--green);font-size:var(--fz-xxs);text-align:right;}}}}.resume-button{',
          ';margin-left:15px;font-size:var(--fz-xs);}',
        ],
        function(e) {
          return e.theme.mixins.flexBetween;
        },
        function(e) {
          return e.theme.mixins.smallButton;
        },
      );
      var Lt = function(e) {
        const t = e.isHome;
        const n = Object(a.useState)(!t);
        const r = n[0];
        const o = n[1];
        const s = It('down');
        const c = Object(a.useState)(!0);
        const l = c[0];
        const u = c[1];
        const d = function() {
          u(window.pageYOffset < 50);
        };
        Object(a.useEffect)(function() {
          const e = setTimeout(function() {
            o(!0);
          }, 100);
          return (
            window.addEventListener('scroll', d),
            function() {
              clearTimeout(e), window.removeEventListener('scroll', d);
            }
          );
        }, []);
        const f = t ? jt.b : 0;
        const p = t ? 'fade' : '';
        const h = t ? 'fadedown' : '';
        return i.a.createElement(
          Tt,
          { scrollDirection: s, scrolledToTop: l },
          i.a.createElement(
            Mt,
            null,
            i.a.createElement(
              kt.a,
              { component: null },
              r &&
                  i.a.createElement(
                    Ct.a,
                    { classNames: p, timeout: f },
                    i.a.createElement(
                      'div',
                      { className: 'logo', tabIndex: '-1' },
                      t
                        ? i.a.createElement(
                          'a',
                          { href: '/', 'aria-label': 'home' },
                          i.a.createElement(wt.l, null),
                        )
                        : i.a.createElement(
                          St.Link,
                          { to: '/', 'aria-label': 'home' },
                          i.a.createElement(wt.l, null),
                        ),
                    ),
                  ),
            ),
            i.a.createElement(
              Nt,
              null,
              i.a.createElement(
                'ol',
                null,
                i.a.createElement(
                  kt.a,
                  { component: null },
                  r &&
                      Ot.navLinks &&
                      Ot.navLinks.map(function(e, n) {
                        const r = e.url;
                        const a = e.name;
                        return i.a.createElement(
                          Ct.a,
                          { key: n, classNames: h, timeout: f },
                          i.a.createElement(
                            'li',
                            { key: n, style: { transitionDelay: `${t ? 100 * n : 0  }ms` } },
                            i.a.createElement(St.Link, { to: r }, a),
                          ),
                        );
                      }),
                ),
              ),
              i.a.createElement(
                kt.a,
                { component: null },
                r &&
                    i.a.createElement(
                      Ct.a,
                      { classNames: h, timeout: f },
                      i.a.createElement(
                        'div',
                        { style: { transitionDelay: `${t ? 100 * Ot.navLinks.length : 0  }ms` } },
                        i.a.createElement(
                          'a',
                          { href: '/resume.pdf', className: 'resume-button' },
                          'Resume',
                        ),
                      ),
                    ),
              ),
            ),
            i.a.createElement(
              kt.a,
              { component: null },
              r &&
                  i.a.createElement(
                    Ct.a,
                    { classNames: p, timeout: f },
                    i.a.createElement(Ht, null),
                  ),
            ),
          ),
        );
      };
      n('m210'), n('4DPX'), n('y7hu');
      function zt(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {return Pt(e);}
          })(e) ||
          (function(e) {
            if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) {return Array.from(e);}
          })(e) ||
          (function(e, t) {
            if (!e) {return;}
            if ('string' === typeof e) {return Pt(e, t);}
            let n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) {return Array.from(n);}
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {return Pt(e, t);}
          })(e) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function Pt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) {r[n] = e[n];}
        return r;
      }
      const Rt = u.d.div.withConfig({ displayName: 'menu__StyledMenu', componentId: 'sdn9y6-0' })([
        'display:none;@media (max-width:768px){display:block;}',
      ]);
      const _t = u.d.button.withConfig({
        displayName: 'menu__StyledHamburgerButton',
        componentId: 'sdn9y6-1',
      })(
        [
          'display:none;@media (max-width:768px){',
          ';position:relative;z-index:10;margin-right:-15px;padding:15px;border:0;background-color:transparent;color:inherit;text-transform:none;transition-timing-function:linear;transition-duration:0.15s;transition-property:opacity,filter;}.ham-box{display:inline-block;position:relative;width:var(--hamburger-width);height:24px;}.ham-box-inner{position:absolute;top:50%;right:0;width:var(--hamburger-width);height:2px;border-radius:var(--border-radius);background-color:var(--green);transition-duration:0.22s;transition-property:transform;transition-delay:',
          ';transform:rotate(',
          ');transition-timing-function:cubic-bezier( ',
          ' );&:before,&:after{content:\'\';display:block;position:absolute;left:auto;right:0;width:var(--hamburger-width);height:2px;border-radius:4px;background-color:var(--green);transition-timing-function:ease;transition-duration:0.15s;transition-property:transform;}&:before{width:',
          ';top:',
          ';opacity:',
          ';transition:',
          ';}&:after{width:',
          ';bottom:',
          ';transform:rotate(',
          ');transition:',
          ';}}',
        ],
        function(e) {
          return e.theme.mixins.flexCenter;
        },
        function(e) {
          return e.menuOpen ? '0.12s' : '0s';
        },
        function(e) {
          return e.menuOpen ? '225deg' : '0deg';
        },
        function(e) {
          return e.menuOpen ? '0.215, 0.61, 0.355, 1' : '0.55, 0.055, 0.675, 0.19';
        },
        function(e) {
          return e.menuOpen ? '100%' : '120%';
        },
        function(e) {
          return e.menuOpen ? '0' : '-10px';
        },
        function(e) {
          return e.menuOpen ? 0 : 1;
        },
        function(e) {
          return e.menuOpen ? 'var(--ham-before-active)' : 'var(--ham-before)';
        },
        function(e) {
          return e.menuOpen ? '100%' : '80%';
        },
        function(e) {
          return e.menuOpen ? '0' : '-10px';
        },
        function(e) {
          return e.menuOpen ? '-90deg' : '0';
        },
        function(e) {
          return e.menuOpen ? 'var(--ham-after-active)' : 'var(--ham-after)';
        },
      );
      const Ft = u.d.aside.withConfig({ displayName: 'menu__StyledSidebar', componentId: 'sdn9y6-2' })(
        [
          'display:none;@media (max-width:768px){',
          ';position:fixed;top:0;bottom:0;right:0;padding:50px 10px;width:min(75vw,400px);height:100vh;outline:0;background-color:var(--light-navy);box-shadow:-10px 0px 30px -15px var(--navy-shadow);z-index:9;transform:translateX(',
          'vw);visibility:',
          ';transition:var(--transition);}nav{',
          ';width:100%;flex-direction:column;color:var(--lightest-slate);font-family:var(--font-mono);text-align:center;}ol{padding:0;margin:0;list-style:none;width:100%;li{position:relative;margin:0 auto 20px;counter-increment:item 1;font-size:clamp(var(--fz-sm),4vw,var(--fz-lg));@media (max-width:600px){margin:0 auto 10px;}&:before{content:\'0\' counter(item) \'.\';display:block;margin-bottom:5px;color:var(--green);font-size:var(--fz-sm);}}a{',
          ';width:100%;padding:3px 20px 20px;}}.resume-link{',
          ';padding:18px 50px;margin:10% auto 0;width:max-content;}',
        ],
        function(e) {
          return e.theme.mixins.flexCenter;
        },
        function(e) {
          return e.menuOpen ? 0 : 100;
        },
        function(e) {
          return e.menuOpen ? 'visible' : 'hidden';
        },
        function(e) {
          return e.theme.mixins.flexBetween;
        },
        function(e) {
          return e.theme.mixins.link;
        },
        function(e) {
          return e.theme.mixins.bigButton;
        },
      );
      var Ht = function() {
        let e;
        let t;
        let n;
        const r = Object(a.useState)(!1);
        const s = r[0];
        const c = r[1];
        const l = Object(a.useRef)(null);
        const u = Object(a.useRef)(null);
        const d = function(r) {
          switch (r.key) {
            case jt.a.ESCAPE:
            case jt.a.ESCAPE_IE11:
              c(!1);
              break;
            case jt.a.TAB:
              if (e && 1 === e.length) {
                r.preventDefault();
                break;
              }
              r.shiftKey
                ? (function(e) {
                  document.activeElement === t && (e.preventDefault(), n.focus());
                })(r)
                : (function(e) {
                  document.activeElement === n && (e.preventDefault(), t.focus());
                })(r);
          }
        };
        const f = function(e) {
          e.currentTarget.innerWidth > 768 && c(!1);
        };
        Object(a.useEffect)(function() {
          return (
            document.addEventListener('keydown', d),
            window.addEventListener('resize', f),
            (e = [l.current].concat(zt(Array.from(u.current.querySelectorAll('a'))))),
            (t = e[0]),
            (n = e[e.length - 1]),
            function() {
              document.removeEventListener('keydown', d), window.removeEventListener('resize', f);
            }
          );
        }, []);
        const p = Object(a.useRef)();
        return (
          At(p, function() {
            return c(!1);
          }),
          i.a.createElement(
            Rt,
            null,
            i.a.createElement(
              o.a,
              null,
              i.a.createElement('body', { className: s ? 'blur' : '' }),
            ),
            i.a.createElement(
              'div',
              { ref: p },
              i.a.createElement(
                _t,
                {
                  onClick: function() {
                    return c(!s);
                  },
                  menuOpen: s,
                  ref: l,
                },
                i.a.createElement(
                  'div',
                  { className: 'ham-box' },
                  i.a.createElement('div', { className: 'ham-box-inner' }),
                ),
              ),
              i.a.createElement(
                Ft,
                { menuOpen: s, 'aria-hidden': !s, tabIndex: s ? 1 : -1 },
                i.a.createElement(
                  'nav',
                  { ref: u },
                  Ot.navLinks &&
                      i.a.createElement(
                        'ol',
                        null,
                        Ot.navLinks.map(function(e, t) {
                          const n = e.url;
                          const r = e.name;
                          return i.a.createElement(
                            'li',
                            { key: t },
                            i.a.createElement(St.Link, { to: n }, r),
                          );
                        }),
                      ),
                  i.a.createElement(
                    'a',
                    { href: '/resume.pdf', className: 'resume-link' },
                    'Resume',
                  ),
                ),
              ),
            ),
          )
        );
      };
      const Dt = u.d.div.withConfig({
        displayName: 'side__StyledSideElement',
        componentId: 'sc-1duznzb-0',
      })(
        [
          'width:40px;position:fixed;bottom:0;left:',
          ';right:',
          ';z-index:10;color:var(--light-slate);@media (max-width:1080px){left:',
          ';right:',
          ';}@media (max-width:768px){display:none;}',
        ],
        function(e) {
          return 'left' === e.orientation ? '40px' : 'auto';
        },
        function(e) {
          return 'left' === e.orientation ? 'auto' : '40px';
        },
        function(e) {
          return 'left' === e.orientation ? '20px' : 'auto';
        },
        function(e) {
          return 'left' === e.orientation ? 'auto' : '20px';
        },
      );
      var Bt = function(e) {
        const t = e.children;
        const n = e.isHome;
        const r = e.orientation;
        const o = Object(a.useState)(!n);
        const s = o[0];
        const c = o[1];
        return (
          Object(a.useEffect)(function() {
            if (n) {
              const e = setTimeout(function() {
                return c(!0);
              }, jt.b);
              return function() {
                return clearTimeout(e);
              };
            }
          }, []),
          i.a.createElement(
            Dt,
            { orientation: r },
            i.a.createElement(
              kt.a,
              { component: null },
              s &&
                  i.a.createElement(
                    Ct.a,
                    { classNames: n ? 'fade' : '', timeout: n ? jt.b : 0 },
                    t,
                  ),
            ),
          )
        );
      };
      const qt = u.d.ul.withConfig({
        displayName: 'social__StyledSocialList',
        componentId: 'anu6nt-0',
      })([
        'display:flex;flex-direction:column;align-items:center;margin:0;padding:0;list-style:none;&:after{content:\'\';display:block;width:1px;height:90px;margin:0 auto;background-color:var(--light-slate);}li{padding:10px;&:last-of-type{margin-bottom:20px;}a{&:hover,&:focus{transform:translateY(-3px);}svg{width:18px;height:18px;}}}',
      ]);
      var Vt = function(e) {
        const t = e.isHome;
        return i.a.createElement(
          Bt,
          { isHome: t, orientation: 'left' },
          i.a.createElement(
            qt,
            null,
            Ot.socialMedia &&
                Ot.socialMedia.map(function(e, t) {
                  const n = e.url;
                  const r = e.name;
                  return i.a.createElement(
                    'li',
                    { key: t },
                    i.a.createElement(
                      'a',
                      { href: n, 'aria-label': r },
                      i.a.createElement(wt.a, { name: r }),
                    ),
                  );
                }),
          ),
        );
      };
      const Wt = u.d.div.withConfig({
        displayName: 'email__StyledLinkWrapper',
        componentId: 'sc-2epoq-0',
      })([
        'display:flex;flex-direction:column;align-items:center;position:relative;&:after{content:\'\';display:block;width:1px;height:90px;margin:0 auto;background-color:var(--light-slate);}a{margin:20px auto;padding:10px;font-family:var(--font-mono);font-size:var(--fz-xxs);letter-spacing:0.1em;writing-mode:vertical-rl;&:hover,&:focus{transform:translateY(-3px);}}',
      ]);
      var Ut = function(e) {
        const t = e.isHome;
        return i.a.createElement(
          Bt,
          { isHome: t, orientation: 'right' },
          i.a.createElement(
            Wt,
            null,
            i.a.createElement('a', { href: `mailto:${  Ot.email}` }, Ot.email),
          ),
        );
      };
      const Gt = u.d.footer.withConfig({
        displayName: 'footer__StyledFooter',
        componentId: 'sc-4jwnt4-0',
      })(
        [
          '',
          ';flex-direction:column;height:auto;min-height:70px;padding:15px;text-align:center;',
        ],
        function(e) {
          return e.theme.mixins.flexCenter;
        },
      );
      const Jt = u.d.div.withConfig({
        displayName: 'footer__StyledSocialLinks',
        componentId: 'sc-4jwnt4-1',
      })(
        [
          'display:none;@media (max-width:768px){display:block;width:100%;max-width:270px;margin:0 auto 10px;color:var(--light-slate);}ul{',
          ';padding:0;margin:0;list-style:none;a{padding:10px;svg{width:20px;height:20px;}}}',
        ],
        function(e) {
          return e.theme.mixins.flexBetween;
        },
      );
      const Yt = u.d.div.withConfig({
        displayName: 'footer__StyledCredit',
        componentId: 'sc-4jwnt4-2',
      })([
        'color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:1;a{padding:10px;}.github-stats{margin-top:10px;& > span{display:inline-flex;align-items:center;margin:0 7px;}svg{display:inline-block;width:auto;height:15px;margin-right:5px;}}',
      ]);
      var $t = function() {
        const e = Object(a.useState)({ stars: null, forks: null });
        const t = e[0];
        const n = e[1];
        return (
          Object(a.useEffect)(function() {
            fetch('https://api.github.com/repos/bchiang7/v4')
              .then(function(e) {
                return e.json();
              })
              .then(function(e) {
                const t = e.stargazers_count;
                const r = e.forks_count;
                n({ stars: t, forks: r });
              })
              .catch(function(e) {
                return console.error(e);
              });
          }, []),
          i.a.createElement(
            Gt,
            null,
            i.a.createElement(
              Jt,
              null,
              i.a.createElement(
                'ul',
                null,
                Ot.socialMedia &&
                    Ot.socialMedia.map(function(e, t) {
                      const n = e.name;
                      const r = e.url;
                      return i.a.createElement(
                        'li',
                        { key: t },
                        i.a.createElement(
                          'a',
                          { href: r, 'aria-label': n },
                          i.a.createElement(wt.a, { name: n }),
                        ),
                      );
                    }),
              ),
            ),
            i.a.createElement(
              Yt,
              { tabindex: '-1' },
              i.a.createElement(
                'a',
                { href: 'https://github.com/bchiang7/v4' },
                i.a.createElement('div', null, 'Designed & Built by Brittany Chiang'),
                t.stars &&
                    t.forks &&
                    i.a.createElement(
                      'div',
                      { className: 'github-stats' },
                      i.a.createElement(
                        'span',
                        null,
                        i.a.createElement(wt.a, { name: 'Star' }),
                        i.a.createElement('span', null, t.stars.toLocaleString()),
                      ),
                      i.a.createElement(
                        'span',
                        null,
                        i.a.createElement(wt.a, { name: 'Fork' }),
                        i.a.createElement('span', null, t.forks.toLocaleString()),
                      ),
                    ),
              ),
            ),
          )
        );
      };
      const Kt = u.d.section.withConfig({
        displayName: 'hero__StyledHeroSection',
        componentId: 'sc-116xg8t-0',
      })(
        [
          '',
          ';flex-direction:column;align-items:flex-start;min-height:100vh;h1{margin:0 0 30px 4px;color:var(--green);font-family:var(--font-mono);font-size:clamp(var(--fz-sm),5vw,var(--fz-md));font-weight:400;@media (max-width:480px){margin:0 0 20px 2px;}}h3{margin-top:10px;color:var(--slate);line-height:0.9;}p{margin:20px 0 0;max-width:500px;}.email-link{',
          ';margin-top:50px;}',
        ],
        function(e) {
          return e.theme.mixins.flexCenter;
        },
        function(e) {
          return e.theme.mixins.bigButton;
        },
      );
      var Qt = function() {
        const e = Object(a.useState)(!1);
        const t = e[0];
        const n = e[1];
        Object(a.useEffect)(function() {
          const e = setTimeout(function() {
            return n(!0);
          }, jt.c);
          return function() {
            return clearTimeout(e);
          };
        }, []);
        const r = [
          i.a.createElement('h1', null, 'Hi, my name is'),
          i.a.createElement('h2', { className: 'big-heading' }, 'Brittany Chiang.'),
          i.a.createElement('h3', { className: 'big-heading' }, 'I build things for the web.'),
          i.a.createElement(
            'p',
            null,
            'I\'m a software engineer based in Boston, MA specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.',
          ),
          i.a.createElement(
            'a',
            { href: `mailto:${  Ot.email}`, className: 'email-link' },
            'Get In Touch',
          ),
        ];
        return i.a.createElement(
          Kt,
          null,
          i.a.createElement(
            kt.a,
            { component: null },
            t &&
                r.map(function(e, t) {
                  return i.a.createElement(
                    Ct.a,
                    { key: t, classNames: 'fadeup', timeout: jt.b },
                    i.a.createElement('div', { style: { transitionDelay: `${t + 1  }00ms` } }, e),
                  );
                }),
          ),
        );
      };
      const Xt = n('mknM');
      const Zt = n('9eSz');
      const en = n.n(Zt);
      const tn = n('nLfd');
      const nn = u.d.section.withConfig({
        displayName: 'about__StyledAboutSection',
        componentId: 'sc-1ownso9-0',
      })([
        'max-width:900px;.inner{display:grid;grid-template-columns:3fr 2fr;grid-gap:50px;@media (max-width:768px){display:block;}}',
      ]);
      const rn = u.d.div.withConfig({ displayName: 'about__StyledText', componentId: 'sc-1ownso9-1' })([
        'ul.skills-list{display:grid;grid-template-columns:repeat(2,minmax(140px,200px));padding:0;margin:20px 0 0 0;overflow:hidden;list-style:none;li{position:relative;margin-bottom:10px;padding-left:20px;font-family:var(--font-mono);font-size:var(--fz-xs);&:before{content:\'▹\';position:absolute;left:0;color:var(--green);font-size:var(--fz-sm);line-height:12px;}}}',
      ]);
      const an = u.d.div.withConfig({ displayName: 'about__StyledPic', componentId: 'sc-1ownso9-2' })(
        [
          'position:relative;max-width:300px;@media (max-width:768px){margin:50px auto 0;width:70%;}.wrapper{',
          ';display:block;position:relative;width:100%;border-radius:var(--border-radius);background-color:var(--green);&:hover,&:focus{background:transparent;outline:0;&:after{top:15px;left:15px;}.img{filter:none;mix-blend-mode:normal;}}.img{position:relative;border-radius:var(--border-radius);mix-blend-mode:multiply;filter:grayscale(100%) contrast(1);transition:var(--transition);}&:before,&:after{content:\'\';display:block;position:absolute;width:100%;height:100%;border-radius:var(--border-radius);transition:var(--transition);}&:before{top:0;left:0;background-color:var(--navy);mix-blend-mode:screen;}&:after{border:2px solid var(--green);top:20px;left:20px;z-index:-1;}}',
        ],
        function(e) {
          return e.theme.mixins.boxShadow;
        },
      );
      var on = function() {
        const e = Xt.data;
        const t = Object(a.useRef)(null);
        Object(a.useEffect)(function() {
          tn.a.reveal(t.current, Object(Ot.srConfig)());
        }, []);
        const n = ['JavaScript (ES6+)', 'HTML & (S)CSS', 'React', 'Vue', 'Node.js', 'WordPress'];
        return i.a.createElement(
          nn,
          { id: 'about', ref: t },
          i.a.createElement('h2', { className: 'numbered-heading' }, 'About Me'),
          i.a.createElement(
            'div',
            { className: 'inner' },
            i.a.createElement(
              rn,
              null,
              i.a.createElement(
                'div',
                null,
                i.a.createElement(
                  'p',
                  null,
                  'Hello! I\'m Brittany, a software engineer based in Boston, MA.',
                ),
                i.a.createElement(
                  'p',
                  null,
                  'I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.',
                ),
                i.a.createElement(
                  'p',
                  null,
                  'Shortly after graduating from',
                  ' ',
                  i.a.createElement(
                    'a',
                    { href: 'https://www.ccis.northeastern.edu' },
                    'Northeastern University',
                  ),
                  ', I joined the engineering team at ',
                  i.a.createElement('a', { href: 'https://www.upstatement.com' }, 'Upstatement'),
                  ' where I work on a wide variety of interesting and meaningful projects on a daily basis.',
                ),
                i.a.createElement(
                  'p',
                  null,
                  'Here are a few technologies I\'ve been working with recently:',
                ),
              ),
              i.a.createElement(
                'ul',
                { className: 'skills-list' },
                n &&
                    n.map(function(e, t) {
                      return i.a.createElement('li', { key: t }, e);
                    }),
              ),
            ),
            i.a.createElement(
              an,
              null,
              i.a.createElement(
                'div',
                { className: 'wrapper' },
                i.a.createElement(en.a, {
                  fluid: e.avatar.childImageSharp.fluid,
                  alt: 'Avatar',
                  className: 'img',
                }),
              ),
            ),
          ),
        );
      };
      const sn = n('Xj9Q');
      const cn = u.d.section.withConfig({
        displayName: 'jobs__StyledJobsSection',
        componentId: 'sc-59sdss-0',
      })(['max-width:700px;.inner{display:flex;@media (max-width:600px){display:block;}}']);
      const ln = u.d.ul.withConfig({ displayName: 'jobs__StyledTabList', componentId: 'sc-59sdss-1' })([
        'position:relative;z-index:3;width:max-content;padding:0;margin:0;list-style:none;@media (max-width:600px){display:flex;overflow-x:auto;width:calc(100% + 100px);margin-left:-50px;margin-bottom:30px;}@media (max-width:480px){width:calc(100% + 50px);margin-left:-25px;}li{&:first-of-type{@media (max-width:600px){margin-left:50px;}@media (max-width:480px){margin-left:25px;}}&:last-of-type{@media (max-width:600px){padding-right:50px;}@media (max-width:480px){padding-right:25px;}}}',
      ]);
      const un = u.d.button.withConfig({
        displayName: 'jobs__StyledTabButton',
        componentId: 'sc-59sdss-2',
      })(
        [
          '',
          ';display:flex;align-items:center;width:100%;height:var(--tab-height);padding:0 20px 2px;border-left:2px solid var(--lightest-navy);background-color:transparent;color:',
          ';font-family:var(--font-mono);font-size:var(--fz-xs);text-align:left;white-space:nowrap;@media (max-width:768px){padding:0 15px 2px;}@media (max-width:600px){',
          ';min-width:120px;padding:0 15px;border-left:0;border-bottom:2px solid var(--lightest-navy);text-align:center;}&:hover,&:focus{background-color:var(--light-navy);}',
        ],
        function(e) {
          return e.theme.mixins.link;
        },
        function(e) {
          return e.isActive ? 'var(--green)' : 'var(--slate)';
        },
        function(e) {
          return e.theme.mixins.flexCenter;
        },
      );
      const dn = u.d.div.withConfig({
        displayName: 'jobs__StyledHighlight',
        componentId: 'sc-59sdss-3',
      })(
        [
          'position:absolute;top:0;left:0;z-index:10;width:2px;height:var(--tab-height);border-radius:var(--border-radius);background:var(--green);transform:translateY(calc(',
          ' * var(--tab-height)));transition:transform 0.25s cubic-bezier(0.645,0.045,0.355,1);transition-delay:0.1s;@media (max-width:600px){top:auto;bottom:0;width:100%;max-width:var(--tab-width);height:2px;margin-left:50px;transform:translateX(calc(',
          ' * var(--tab-width)));}@media (max-width:480px){margin-left:25px;}',
        ],
        function(e) {
          return e.activeTabId;
        },
        function(e) {
          return e.activeTabId;
        },
      );
      const fn = u.d.div.withConfig({
        displayName: 'jobs__StyledTabContent',
        componentId: 'sc-59sdss-4',
      })(
        [
          'width:100%;height:auto;padding-top:10px;padding-left:30px;@media (max-width:768px){padding-left:20px;}@media (max-width:600px){padding-left:0;}ul{',
          ';}h3{margin-bottom:5px;font-size:var(--fz-xxl);font-weight:500;.company{color:var(--green);}}.range{margin-bottom:30px;color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xs);}',
        ],
        function(e) {
          return e.theme.mixins.fancyList;
        },
      );
      var pn = function() {
        const e = sn.data.jobs.edges;
        const t = Object(a.useState)(0);
        const n = t[0];
        const r = t[1];
        const o = Object(a.useState)(null);
        const s = o[0];
        const c = o[1];
        const l = Object(a.useRef)([]);
        const u = Object(a.useRef)(null);
        Object(a.useEffect)(function() {
          return tn.a.reveal(u.current, Object(Ot.srConfig)());
        }, []);
        Object(a.useEffect)(
          function() {
            l.current[s]
              ? l.current[s].focus()
              : (s >= l.current.length && c(0), s < 0 && c(l.current.length - 1));
          },
          [s],
        );
        return i.a.createElement(
          cn,
          { id: 'jobs', ref: u },
          i.a.createElement('h2', { className: 'numbered-heading' }, 'Where I’ve Worked'),
          i.a.createElement(
            'div',
            { className: 'inner' },
            i.a.createElement(
              ln,
              {
                role: 'tablist',
                'aria-label': 'Job tabs',
                onKeyDown: function(e) {
                  (e.key !== jt.a.ARROW_UP && e.key !== jt.a.ARROW_DOWN) ||
                      (e.preventDefault(),
                      e.key === jt.a.ARROW_UP && c(s - 1),
                      e.key === jt.a.ARROW_DOWN && c(s + 1));
                },
              },
              e &&
                  e.map(function(e, t) {
                    const a = e.node.frontmatter.company;
                    return i.a.createElement(
                      'li',
                      { key: t },
                      i.a.createElement(
                        un,
                        {
                          isActive: n === t,
                          onClick: function() {
                            return r(t);
                          },
                          ref: function(e) {
                            return (l.current[t] = e);
                          },
                          id: `tab-${  t}`,
                          role: 'tab',
                          'aria-selected': n === t,
                          'aria-controls': `panel-${  t}`,
                          tabIndex: n === t ? '0' : '-1',
                        },
                        i.a.createElement('span', null, a),
                      ),
                    );
                  }),
              i.a.createElement(dn, { activeTabId: n }),
            ),
            e &&
                e.map(function(e, t) {
                  const r = e.node;
                  const a = r.frontmatter;
                  const o = r.html;
                  const s = a.title;
                  const c = a.url;
                  const l = a.company;
                  const u = a.range;
                  return i.a.createElement(
                    Ct.a,
                    { key: t, in: n === t, timeout: 250, classNames: 'fade' },
                    i.a.createElement(
                      fn,
                      {
                        id: `panel-${  t}`,
                        role: 'tabpanel',
                        tabIndex: n === t ? '0' : '-1',
                        'aria-labelledby': `tab-${  t}`,
                        'aria-hidden': n !== t,
                        hidden: n !== t,
                      },
                      i.a.createElement(
                        'h3',
                        null,
                        i.a.createElement('span', null, s),
                        i.a.createElement(
                          'span',
                          { className: 'company' },
                          ' @ ',
                          i.a.createElement('a', { href: c, className: 'inline-link' }, l),
                        ),
                      ),
                      i.a.createElement('p', { className: 'range' }, u),
                      i.a.createElement('div', { dangerouslySetInnerHTML: { __html: o } }),
                    ),
                  );
                }),
          ),
        );
      };
      const hn = n('98nU');
      const mn = u.d.div.withConfig({
        displayName: 'featured__StyledProject',
        componentId: 'ywnbqt-0',
      })(
        [
          'display:grid;grid-gap:10px;grid-template-columns:repeat(12,1fr);align-items:center;&:not(:last-of-type){margin-bottom:100px;@media (max-width:768px){margin-bottom:70px;}@media (max-width:480px){margin-bottom:30px;}}&:nth-of-type(odd){.project-content{grid-column:7 / -1;text-align:right;@media (max-width:1080px){grid-column:5 / -1;}@media (max-width:768px){grid-column:1 / -1;padding:40px 40px 30px;}@media (max-width:480px){padding:25px 25px 20px;}}.project-tech-list{justify-content:flex-end;li{margin:0 0 5px 20px;@media (max-width:768px){margin:0 0 5px 10px;}}}.project-links{justify-content:flex-end;margin-left:0;margin-right:-10px;}.project-image{grid-column:1 / 8;@media (max-width:768px){grid-column:1 / -1;}}}.project-content{position:relative;grid-column:1 / 7;grid-row:1 / -1;@media (max-width:1080px){grid-column:1 / 9;}@media (max-width:768px){grid-column:1 / -1;padding:40px 40px 30px;z-index:5;}@media (max-width:480px){padding:30px 25px 20px;}}.project-overline{margin:10px 0;color:var(--green);font-family:var(--font-mono);font-size:var(--fz-xs);font-weight:400;}.project-title{color:var(--lightest-slate);font-size:clamp(24px,5vw,28px);@media (min-width:768px){margin:0 0 20px;}@media (max-width:768px){color:var(--white);}}.project-description{',
          ';position:relative;z-index:2;padding:25px;border-radius:var(--border-radius);background-color:var(--light-navy);color:var(--light-slate);font-size:var(--fz-lg);@media (max-width:768px){padding:20px 0;background-color:transparent;box-shadow:none;&:hover{box-shadow:none;}}a{',
          ';}}.project-tech-list{display:flex;flex-wrap:wrap;position:relative;z-index:2;margin:25px 0 10px;padding:0;list-style:none;li{margin:0 20px 5px 0;color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xs);white-space:nowrap;}@media (max-width:768px){margin:10px 0;li{margin:0 10px 5px 0;color:var(--lightest-slate);}}}.project-links{display:flex;align-items:center;position:relative;margin-top:10px;margin-left:-10px;color:var(--lightest-slate);a{padding:10px;svg{width:20px;height:20px;}}}.project-image{',
          ';grid-column:6 / -1;grid-row:1 / -1;position:relative;z-index:1;@media (max-width:768px){grid-column:1 / -1;height:100%;opacity:0.25;}a{width:100%;background-color:var(--green);border-radius:var(--border-radius);vertical-align:middle;&:hover,&:focus{background:transparent;&:before,.img{background:transparent;filter:none;}}&:before{content:\'\';position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;z-index:3;transition:var(--transition);background-color:var(--navy);mix-blend-mode:screen;}}.img{border-radius:var(--border-radius);mix-blend-mode:multiply;filter:grayscale(100%) contrast(1) brightness(90%);@media (max-width:768px){object-fit:cover;width:auto;height:100%;filter:grayscale(100%) contrast(1) brightness(80%);}}}',
        ],
        function(e) {
          return e.theme.mixins.boxShadow;
        },
        function(e) {
          return e.theme.mixins.inlineLink;
        },
        function(e) {
          return e.theme.mixins.boxShadow;
        },
      );
      var gn = function() {
        const e = hn.data.featured.edges.filter(function(e) {
          return e.node;
        });
        const t = Object(a.useRef)(null);
        const n = Object(a.useRef)([]);
        return (
          Object(a.useEffect)(function() {
            tn.a.reveal(t.current, Object(Ot.srConfig)()),
            n.current.forEach(function(e, t) {
              return tn.a.reveal(e, Object(Ot.srConfig)(100 * t));
            });
          }, []),
          i.a.createElement(
            'section',
            { id: 'projects' },
            i.a.createElement(
              'h2',
              { className: 'numbered-heading', ref: t },
              'Some Things I’ve Built',
            ),
            i.a.createElement(
              'div',
              null,
              e &&
                  e.map(function(e, t) {
                    const r = e.node;
                    const a = r.frontmatter;
                    const o = r.html;
                    const s = a.external;
                    const c = a.title;
                    const l = a.tech;
                    const u = a.github;
                    const d = a.cover;
                    return i.a.createElement(
                      mn,
                      {
                        key: t,
                        ref: function(e) {
                          return (n.current[t] = e);
                        },
                      },
                      i.a.createElement(
                        'div',
                        { className: 'project-content' },
                        i.a.createElement(
                          'p',
                          { className: 'project-overline' },
                          'Featured Project',
                        ),
                        i.a.createElement('h3', { className: 'project-title' }, c),
                        i.a.createElement('div', {
                          className: 'project-description',
                          dangerouslySetInnerHTML: { __html: o },
                        }),
                        l.length &&
                          i.a.createElement(
                            'ul',
                            { className: 'project-tech-list' },
                            l.map(function(e, t) {
                              return i.a.createElement('li', { key: t }, e);
                            }),
                          ),
                        i.a.createElement(
                          'div',
                          { className: 'project-links' },
                          u &&
                            i.a.createElement(
                              'a',
                              { href: u, 'aria-label': 'GitHub Link' },
                              i.a.createElement(wt.a, { name: 'GitHub' }),
                            ),
                          s &&
                            i.a.createElement(
                              'a',
                              { href: s, 'aria-label': 'External Link' },
                              i.a.createElement(wt.a, { name: 'External' }),
                            ),
                        ),
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'project-image' },
                        i.a.createElement(
                          'a',
                          { href: s || u || '#' },
                          i.a.createElement(en.a, {
                            fluid: d.childImageSharp.fluid,
                            alt: c,
                            className: 'img',
                          }),
                        ),
                      ),
                    );
                  }),
            ),
          )
        );
      };
      const vn = n('Hq9K');
      const bn = u.d.section.withConfig({
        displayName: 'projects__StyledProjectsSection',
        componentId: 'sc-1v1fime-0',
      })(
        [
          'display:flex;flex-direction:column;align-items:center;h2{font-size:clamp(24px,5vw,var(--fz-heading));}.archive-link{font-family:var(--font-mono);font-size:var(--fz-sm);&:after{bottom:0.1em;}}.projects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;position:relative;margin-top:50px;@media (max-width:1080px){grid-template-columns:repeat(auto-fill,minmax(250px,1fr));}}.more-button{',
          ';margin:80px auto 0;}',
        ],
        function(e) {
          return e.theme.mixins.button;
        },
      );
      const yn = u.d.div.withConfig({
        displayName: 'projects__StyledProject',
        componentId: 'sc-1v1fime-1',
      })(
        [
          'cursor:default;transition:var(--transition);&:hover,&:focus{outline:0;.project-inner{transform:translateY(-5px);}}.project-inner{',
          ';',
          ';flex-direction:column;align-items:flex-start;position:relative;height:100%;padding:2rem 1.75rem;border-radius:var(--border-radius);background-color:var(--light-navy);transition:var(--transition);}.project-top{',
          ';margin-bottom:30px;.folder{color:var(--green);svg{width:40px;height:40px;}}.project-links{margin-right:-10px;color:var(--light-slate);a{padding:5px 10px;svg{width:20px;height:20px;}}}}.project-title{margin:0 0 10px;color:var(--lightest-slate);font-size:var(--fz-xxl);}.project-description{color:var(--light-slate);font-size:17px;a{',
          ';}}.project-tech-list{display:flex;align-items:flex-end;flex-grow:1;flex-wrap:wrap;padding:0;margin:20px 0 0 0;list-style:none;li{font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:1.75;&:not(:last-of-type){margin-right:15px;}}}',
        ],
        function(e) {
          return e.theme.mixins.boxShadow;
        },
        function(e) {
          return e.theme.mixins.flexBetween;
        },
        function(e) {
          return e.theme.mixins.flexBetween;
        },
        function(e) {
          return e.theme.mixins.inlineLink;
        },
      );
      var wn = function() {
        const e = vn.data;
        const t = Object(a.useState)(!1);
        const n = t[0];
        const r = t[1];
        const o = Object(a.useRef)(null);
        const s = Object(a.useRef)(null);
        const c = Object(a.useRef)([]);
        Object(a.useEffect)(function() {
          tn.a.reveal(o.current, Object(Ot.srConfig)()),
          tn.a.reveal(s.current, Object(Ot.srConfig)()),
          c.current.forEach(function(e, t) {
            return tn.a.reveal(e, Object(Ot.srConfig)(100 * t));
          });
        }, []);
        const l = e.projects.edges.filter(function(e) {
          return e.node;
        });
        const u = l.slice(0, 6);
        const d = n ? l : u;
        return i.a.createElement(
          bn,
          null,
          i.a.createElement('h2', { ref: o }, 'Other Noteworthy Projects'),
          i.a.createElement(
            St.Link,
            { className: 'inline-link archive-link', to: '/archive', ref: s },
            'view the archive',
          ),
          i.a.createElement(
            kt.a,
            { className: 'projects-grid' },
            d &&
                d.map(function(e, t) {
                  const n = e.node;
                  const r = n.frontmatter;
                  const a = n.html;
                  const o = r.github;
                  const s = r.external;
                  const l = r.title;
                  const u = r.tech;
                  return i.a.createElement(
                    Ct.a,
                    {
                      key: t,
                      classNames: 'fadeup',
                      timeout: t >= 6 ? 300 * (t - 6) : 300,
                      exit: !1,
                    },
                    i.a.createElement(
                      yn,
                      {
                        key: t,
                        ref: function(e) {
                          return (c.current[t] = e);
                        },
                        tabIndex: '0',
                        style: { transitionDelay: `${t >= 6 ? 100 * (t - 6) : 0  }ms` },
                      },
                      i.a.createElement(
                        'div',
                        { className: 'project-inner' },
                        i.a.createElement(
                          'header',
                          null,
                          i.a.createElement(
                            'div',
                            { className: 'project-top' },
                            i.a.createElement(
                              'div',
                              { className: 'folder' },
                              i.a.createElement(wt.a, { name: 'Folder' }),
                            ),
                            i.a.createElement(
                              'div',
                              { className: 'project-links' },
                              o &&
                                i.a.createElement(
                                  'a',
                                  { href: o, 'aria-label': 'GitHub Link' },
                                  i.a.createElement(wt.a, { name: 'GitHub' }),
                                ),
                              s &&
                                i.a.createElement(
                                  'a',
                                  { href: s, 'aria-label': 'External Link' },
                                  i.a.createElement(wt.a, { name: 'External' }),
                                ),
                            ),
                          ),
                          i.a.createElement('h3', { className: 'project-title' }, l),
                          i.a.createElement('div', {
                            className: 'project-description',
                            dangerouslySetInnerHTML: { __html: a },
                          }),
                        ),
                        i.a.createElement(
                          'footer',
                          null,
                          u &&
                            i.a.createElement(
                              'ul',
                              { className: 'project-tech-list' },
                              u.map(function(e, t) {
                                return i.a.createElement('li', { key: t }, e);
                              }),
                            ),
                        ),
                      ),
                    ),
                  );
                }),
          ),
          i.a.createElement(
            'button',
            {
              className: 'more-button',
              onClick: function() {
                return r(!n);
              },
            },
            'Show ',
            n ? 'Less' : 'More',
          ),
        );
      };
      const xn = u.d.section.withConfig({
        displayName: 'contact__StyledContactSection',
        componentId: 'sc-1m8df4t-0',
      })(
        [
          'max-width:600px;margin:0 auto 100px;text-align:center;@media (max-width:768px){margin:0 auto 50px;}.overline{display:block;margin-bottom:20px;color:var(--green);font-family:var(--font-mono);font-size:var(--fz-md);font-weight:400;&:before{bottom:0;font-size:var(--fz-sm);}&:after{display:none;}}.title{font-size:clamp(40px,5vw,60px);}.email-link{',
          ';margin-top:50px;}',
        ],
        function(e) {
          return e.theme.mixins.bigButton;
        },
      );
      var En = function() {
        const e = Object(a.useRef)(null);
        return (
          Object(a.useEffect)(function() {
            return tn.a.reveal(e.current, Object(Ot.srConfig)());
          }, []),
          i.a.createElement(
            xn,
            { id: 'contact', ref: e },
            i.a.createElement('h2', { className: 'numbered-heading overline' }, 'What’s Next?'),
            i.a.createElement('h2', { className: 'title' }, 'Get In Touch'),
            i.a.createElement(
              'p',
              null,
              'Although I\'m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I\'ll try my best to get back to you!',
            ),
            i.a.createElement(
              'a',
              { className: 'email-link', href: `mailto:${  Ot.email}` },
              'Say Hello',
            ),
          )
        );
      };
    },
    'L+mo': function(e, t, n) {
      e.exports = `${n.p  }static/Calibre-Regular-b63c62e591d0c8fbe2c8f009883346d5.woff2`;
    },
    ME5O: function(e, t, n) {
      'use strict';
      t.a = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
      };
    },
    ND0z: function(e, t, n) {
      e.exports = `${n.p  }static/Calibre-Semibold-d8b856473a51d7eec2a9bccf2fbea54c.woff2`;
    },
    'PZd/': function(e, t, n) {
      const r = n('P8UN');
      const a = n('ys0W')(!0);
      r(r.S, 'Object', {
        entries: function(e) {
          return a(e);
        },
      });
    },
    Q5Fx: function(e, t, n) {
      e.exports = `${n.p  }static/SFMono-Semibold-cebe2bfbe8a283427e3c5ad8a1b8ae2f.woff2`;
    },
    R48M: function(e, t, n) {
      const r = n('P8UN');
      r(r.S + r.F * !n('QPJK'), 'Object', { defineProperty: n('rjfK').f });
    },
    SGlo: function(e, t, n) {
      'use strict';
      const r = n('rj/q');
      const a = n('N+BI').getWeak;
      const i = n('1a8y');
      const o = n('BjK0');
      const s = n('xa9o');
      const c = n('yde8');
      const l = n('Wadk');
      const u = n('qDzq');
      const d = n('O1i0');
      const f = l(5);
      const p = l(6);
      let h = 0;
      const m = function(e) {
        return e._l || (e._l = new g());
      };
      var g = function() {
        this.a = [];
      };
      const v = function(e, t) {
        return f(e.a, function(e) {
          return e[0] === t;
        });
      };
      (g.prototype = {
        get: function(e) {
          const t = v(this, e);
          if (t) {return t[1];}
        },
        has: function(e) {
          return !!v(this, e);
        },
        set: function(e, t) {
          const n = v(this, e);
          n ? (n[1] = t) : this.a.push([e, t]);
        },
        delete: function(e) {
          const t = p(this.a, function(t) {
            return t[0] === e;
          });
          return ~t && this.a.splice(t, 1), !!~t;
        },
      }),
      (e.exports = {
        getConstructor: function(e, t, n, i) {
          var l = e(function(e, r) {
            s(e, l, t, '_i'),
            (e._t = t),
            (e._i = h++),
            (e._l = void 0),
            null != r && c(r, n, e[i], e);
          });
          return (
            r(l.prototype, {
              delete: function(e) {
                if (!o(e)) {return !1;}
                const n = a(e);
                return !0 === n
                  ? m(d(this, t)).delete(e)
                  : n && u(n, this._i) && delete n[this._i];
              },
              has: function(e) {
                if (!o(e)) {return !1;}
                const n = a(e);
                return !0 === n ? m(d(this, t)).has(e) : n && u(n, this._i);
              },
            }),
            l
          );
        },
        def: function(e, t, n) {
          const r = a(i(t), !0);
          return !0 === r ? m(e).set(t, n) : (r[e._i] = n), e;
        },
        ufstore: m,
      });
    },
    'SR+s': function(e, t, n) {
      (function(r) {
        let a; let i;
        n('q/PY'),
        n('q8oJ'),
        n('C9fy'),
        n('8npG'),
        n('JHok'),
        window.Element &&
            !Element.prototype.closest &&
            (Element.prototype.closest = function(e) {
              let t;
              const n = (this.document || this.ownerDocument).querySelectorAll(e);
              let r = this;
              do {
                for (t = n.length; 0 <= --t && n.item(t) !== r; ){;}
              } while (t < 0 && (r = r.parentElement));
              return r;
            }),
        (function() {
          function e(e, t) {
            t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
            const n = document.createEvent('CustomEvent');
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
          }
          'function' !== typeof window.CustomEvent &&
              ((e.prototype = window.Event.prototype), (window.CustomEvent = e));
        })(),
        (function() {
          for (
            var e = 0, t = ['ms', 'moz', 'webkit', 'o'], n = 0;
            n < t.length && !window.requestAnimationFrame;
            ++n
          ) {
            (window.requestAnimationFrame = window[`${t[n]  }RequestAnimationFrame`]),
            (window.cancelAnimationFrame =
                  window[`${t[n]  }CancelAnimationFrame`] ||
                  window[`${t[n]  }CancelRequestAnimationFrame`]);
          }
          window.requestAnimationFrame ||
              (window.requestAnimationFrame = function(t, n) {
                const r = new Date().getTime();
                const a = Math.max(0, 16 - (r - e));
                const i = window.setTimeout(function() {
                  t(r + a);
                }, a);
                return (e = r + a), i;
              }),
          window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function(e) {
                  clearTimeout(e);
                });
        })(),
        (i = void 0 !== r ? r : 'undefined' !== typeof window ? window : this),
        void 0 ===
            (a = function() {
              return (function(e) {
                'use strict';
                const t = {
                  ignore: '[data-scroll-ignore]',
                  header: null,
                  topOnEmptyHash: !0,
                  speed: 500,
                  speedAsDuration: !1,
                  durationMax: null,
                  durationMin: null,
                  clip: !0,
                  offset: 0,
                  easing: 'easeInOutCubic',
                  customEasing: null,
                  updateURL: !0,
                  popstate: !0,
                  emitEvents: !0,
                };
                const n = function() {
                  const e = {};
                  return (
                    Array.prototype.forEach.call(arguments, function(t) {
                      for (const n in t) {
                        if (!t.hasOwnProperty(n)) {return;}
                        e[n] = t[n];
                      }
                    }),
                    e
                  );
                };
                const r = function(e) {
                  '#' === e.charAt(0) && (e = e.substr(1));
                  for (
                    var t, n = String(e), r = n.length, a = -1, i = '', o = n.charCodeAt(0);
                    ++a < r;

                  ) {
                    if (0 === (t = n.charCodeAt(a))) {
                      throw new InvalidCharacterError(
                        'Invalid character: the input contains U+0000.',
                      );
                    }
                    i +=
                        (1 <= t && t <= 31) ||
                        127 == t ||
                        (0 === a && 48 <= t && t <= 57) ||
                        (1 === a && 48 <= t && t <= 57 && 45 === o)
                          ? `\\${  t.toString(16)  } `
                          : 128 <= t ||
                            45 === t ||
                            95 === t ||
                            (48 <= t && t <= 57) ||
                            (65 <= t && t <= 90) ||
                            (97 <= t && t <= 122)
                            ? n.charAt(a)
                            : `\\${  n.charAt(a)}`;
                  }
                  return `#${  i}`;
                };
                const a = function() {
                  return Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight,
                    document.body.offsetHeight,
                    document.documentElement.offsetHeight,
                    document.body.clientHeight,
                    document.documentElement.clientHeight,
                  );
                };
                const i = function(t, n, r) {
                  0 === t && document.body.focus(),
                  r ||
                        (t.focus(),
                        document.activeElement !== t &&
                          (t.setAttribute('tabindex', '-1'), t.focus(), (t.style.outline = 'none')),
                        e.scrollTo(0, n));
                };
                const o = function(t, n, r, a) {
                  if (n.emitEvents && 'function' === typeof e.CustomEvent) {
                    const i = new CustomEvent(t, { bubbles: !0, detail: { anchor: r, toggle: a } });
                    document.dispatchEvent(i);
                  }
                };
                return function(s, c) {
                  let l;
                  let u;
                  let d;
                  let f;
                  var p = {
                    cancelScroll: function(e) {
                      cancelAnimationFrame(f), (f = null), e || o('scrollCancel', l);
                    },
                    animateScroll: function(r, s, c) {
                      p.cancelScroll();
                      const u = n(l || t, c || {});
                      const h = '[object Number]' === Object.prototype.toString.call(r);
                      const m = h || !r.tagName ? null : r;
                      if (h || m) {
                        const g = e.pageYOffset;
                        u.header && !d && (d = document.querySelector(u.header));
                        let v;
                        let b;
                        let y;
                        let w;
                        let x;
                        let E;
                        let S;
                        let k;
                        const C = (function(t) {
                          return t
                            ? ((n = t),
                            parseInt(e.getComputedStyle(n).height, 10) + t.offsetTop)
                            : 0;
                          let n;
                        })(d);
                        const O = h
                          ? r
                          : (function(t, n, r, i) {
                            let o = 0;
                            if (t.offsetParent) {for (; (o += t.offsetTop), (t = t.offsetParent); ){;}}
                            return (
                              (o = Math.max(o - n - r, 0)),
                              i && (o = Math.min(o, a() - e.innerHeight)),
                              o
                            );
                          })(
                            m,
                            C,
                            parseInt(
                              'function' === typeof u.offset ? u.offset(r, s) : u.offset,
                              10,
                            ),
                            u.clip,
                          );
                        const j = O - g;
                        const A = a();
                        let I = 0;
                        const T =
                              ((v = j),
                              (y = (b = u).speedAsDuration
                                ? b.speed
                                : Math.abs((v / 1e3) * b.speed)),
                              b.durationMax && y > b.durationMax
                                ? b.durationMax
                                : b.durationMin && y < b.durationMin
                                  ? b.durationMin
                                  : parseInt(y, 10));
                        0 === e.pageYOffset && e.scrollTo(0, 0),
                        (S = r),
                        (k = u),
                        h ||
                              (history.pushState &&
                                k.updateURL &&
                                history.pushState(
                                  { smoothScroll: JSON.stringify(k), anchor: S.id },
                                  document.title,
                                  S === document.documentElement ? '#top' : `#${  S.id}`,
                                )),
                        'matchMedia' in e && e.matchMedia('(prefers-reduced-motion)').matches
                          ? i(r, Math.floor(O), !1)
                          : (o('scrollStart', u, r, s),
                          p.cancelScroll(!0),
                          e.requestAnimationFrame(function t(n) {
                            let a; let c; let l;
                            w || (w = n),
                            (I += n - w),
                            (E =
                                      g +
                                      j *
                                        ((c = x = 1 < (x = 0 === T ? 0 : I / T) ? 1 : x),
                                        'easeInQuad' === (a = u).easing && (l = c * c),
                                        'easeOutQuad' === a.easing && (l = c * (2 - c)),
                                        'easeInOutQuad' === a.easing &&
                                          (l = c < 0.5 ? 2 * c * c : (4 - 2 * c) * c - 1),
                                        'easeInCubic' === a.easing && (l = c * c * c),
                                        'easeOutCubic' === a.easing && (l = --c * c * c + 1),
                                        'easeInOutCubic' === a.easing &&
                                          (l =
                                            c < 0.5
                                              ? 4 * c * c * c
                                              : (c - 1) * (2 * c - 2) * (2 * c - 2) + 1),
                                        'easeInQuart' === a.easing && (l = c * c * c * c),
                                        'easeOutQuart' === a.easing && (l = 1 - --c * c * c * c),
                                        'easeInOutQuart' === a.easing &&
                                          (l =
                                            c < 0.5 ? 8 * c * c * c * c : 1 - 8 * --c * c * c * c),
                                        'easeInQuint' === a.easing && (l = c * c * c * c * c),
                                        'easeOutQuint' === a.easing &&
                                          (l = 1 + --c * c * c * c * c),
                                        'easeInOutQuint' === a.easing &&
                                          (l =
                                            c < 0.5
                                              ? 16 * c * c * c * c * c
                                              : 1 + 16 * --c * c * c * c * c),
                                        a.customEasing && (l = a.customEasing(c)),
                                        l || c)),
                            e.scrollTo(0, Math.floor(E)),
                            (function(t, n) {
                              const a = e.pageYOffset;
                              if (t == n || a == n || (g < n && e.innerHeight + a) >= A) {
                                return (
                                  p.cancelScroll(!0),
                                  i(r, n, h),
                                  o('scrollStop', u, r, s),
                                  !(f = w = null)
                                );
                              }
                            })(E, O) || ((f = e.requestAnimationFrame(t)), (w = n));
                          }));
                      }
                    },
                  };
                  const h = function(t) {
                    if (
                      !t.defaultPrevented &&
                        !(0 !== t.button || t.metaKey || t.ctrlKey || t.shiftKey) &&
                        'closest' in t.target &&
                        (u = t.target.closest(s)) &&
                        'a' === u.tagName.toLowerCase() &&
                        !t.target.closest(l.ignore) &&
                        u.hostname === e.location.hostname &&
                        u.pathname === e.location.pathname &&
                        /#/.test(u.href)
                    ) {
                      let n; let a;
                      try {
                        n = r(decodeURIComponent(u.hash));
                      } catch (t) {
                        n = r(u.hash);
                      }
                      if ('#' === n) {
                        if (!l.topOnEmptyHash) {return;}
                        a = document.documentElement;
                      } else {a = document.querySelector(n);}
                      (a = a || '#top' !== n ? a : document.documentElement) &&
                          (t.preventDefault(),
                          (function(t) {
                            if (history.replaceState && t.updateURL && !history.state) {
                              let n = e.location.hash;
                              (n = n || ''),
                              history.replaceState(
                                { smoothScroll: JSON.stringify(t), anchor: n || e.pageYOffset },
                                document.title,
                                n || e.location.href,
                              );
                            }
                          })(l),
                          p.animateScroll(a, u));
                    }
                  };
                  const m = function(e) {
                    if (
                      null !== history.state &&
                        history.state.smoothScroll &&
                        history.state.smoothScroll === JSON.stringify(l)
                    ) {
                      let t = history.state.anchor;
                      ('string' === typeof t &&
                          t &&
                          !(t = document.querySelector(r(history.state.anchor)))) ||
                          p.animateScroll(t, null, { updateURL: !1 });
                    }
                  };
                  return (
                    (p.destroy = function() {
                      l &&
                        (document.removeEventListener('click', h, !1),
                        e.removeEventListener('popstate', m, !1),
                        p.cancelScroll(),
                        (f = d = u = l = null));
                    }),
                    (function() {
                      if (
                        !(
                          'querySelector' in document &&
                          'addEventListener' in e &&
                          'requestAnimationFrame' in e &&
                          'closest' in e.Element.prototype
                        )
                      ) {throw 'Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.';}
                      p.destroy(),
                      (l = n(t, c || {})),
                      (d = l.header ? document.querySelector(l.header) : null),
                      document.addEventListener('click', h, !1),
                      l.updateURL && l.popstate && e.addEventListener('popstate', m, !1);
                    })(),
                    p
                  );
                };
              })(i);
            }.apply(t, [])) || (e.exports = a);
      }.call(this, n('yLpj')));
    },
    Sc3u: function(e, t, n) {
      'use strict';
      if (n('QPJK')) {
        const r = n('939K');
        const a = n('emib');
        const i = n('96qb');
        const o = n('P8UN');
        const s = n('Jegl');
        const c = n('voZr');
        const l = n('ot9L');
        const u = n('xa9o');
        const d = n('pSXQ');
        const f = n('8wc8');
        const p = n('rj/q');
        const h = n('1Llc');
        const m = n('kiRH');
        const g = n('gx6d');
        const v = n('dTG6');
        const b = n('kxs/');
        const y = n('qDzq');
        const w = n('aHWV');
        const x = n('BjK0');
        const E = n('DFzH');
        const S = n('BuzY');
        const k = n('nsRs');
        const C = n('ltAs');
        const O = n('chL8').f;
        const j = n('U9/z');
        const A = n('UEZ0');
        const I = n('sOol');
        const T = n('Wadk');
        const M = n('Ar2q');
        const N = n('Ioy3');
        const L = n('Dq+y');
        const z = n('m+kh');
        const P = n('vUMq');
        const R = n('to/b');
        const _ = n('Y++M');
        const F = n('cRJv');
        const H = n('rjfK');
        const D = n('Drra');
        const B = H.f;
        const q = D.f;
        const V = a.RangeError;
        const W = a.TypeError;
        const U = a.Uint8Array;
        const G = Array.prototype;
        const J = c.ArrayBuffer;
        const Y = c.DataView;
        const $ = T(0);
        const K = T(2);
        const Q = T(3);
        const X = T(4);
        const Z = T(5);
        const ee = T(6);
        const te = M(!0);
        const ne = M(!1);
        const re = L.values;
        const ae = L.keys;
        const ie = L.entries;
        const oe = G.lastIndexOf;
        const se = G.reduce;
        const ce = G.reduceRight;
        const le = G.join;
        const ue = G.sort;
        const de = G.slice;
        let fe = G.toString;
        let pe = G.toLocaleString;
        const he = I('iterator');
        const me = I('toStringTag');
        const ge = A('typed_constructor');
        const ve = A('def_constructor');
        const be = s.CONSTR;
        const ye = s.TYPED;
        const we = s.VIEW;
        const xe = T(1, function(e, t) {
          return Oe(N(e, e[ve]), t);
        });
        const Ee = i(function() {
          return 1 === new U(new Uint16Array([1]).buffer)[0];
        });
        const Se =
            !!U &&
            !!U.prototype.set &&
            i(function() {
              new U(1).set({});
            });
        const ke = function(e, t) {
          const n = h(e);
          if (n < 0 || n % t) {throw V('Wrong offset!');}
          return n;
        };
        const Ce = function(e) {
          if (x(e) && ye in e) {return e;}
          throw W(`${e  } is not a typed array!`);
        };
        var Oe = function(e, t) {
          if (!x(e) || !(ge in e)) {throw W('It is not a typed array constructor!');}
          return new e(t);
        };
        const je = function(e, t) {
          return Ae(N(e, e[ve]), t);
        };
        var Ae = function(e, t) {
          for (var n = 0, r = t.length, a = Oe(e, r); r > n; ) {a[n] = t[n++];}
          return a;
        };
        const Ie = function(e, t, n) {
          B(e, t, {
            get: function() {
              return this._d[n];
            },
          });
        };
        const Te = function(e) {
          let t;
          let n;
          let r;
          let a;
          let i;
          let o;
          let s = E(e);
          const c = arguments.length;
          let u = c > 1 ? arguments[1] : void 0;
          const d = void 0 !== u;
          const f = j(s);
          if (null != f && !S(f)) {
            for (o = f.call(s), r = [], t = 0; !(i = o.next()).done; t++) {r.push(i.value);}
            s = r;
          }
          for (
            d && c > 2 && (u = l(u, arguments[2], 2)), t = 0, n = m(s.length), a = Oe(this, n);
            n > t;
            t++
          ) {a[t] = d ? u(s[t], t) : s[t];}
          return a;
        };
        const Me = function() {
          for (var e = 0, t = arguments.length, n = Oe(this, t); t > e; ) {n[e] = arguments[e++];}
          return n;
        };
        const Ne =
            !!U &&
            i(function() {
              pe.call(new U(1));
            });
        const Le = function() {
          return pe.apply(Ne ? de.call(Ce(this)) : Ce(this), arguments);
        };
        const ze = {
          copyWithin: function(e, t) {
            return F.call(Ce(this), e, t, arguments.length > 2 ? arguments[2] : void 0);
          },
          every: function(e) {
            return X(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          fill: function(e) {
            return _.apply(Ce(this), arguments);
          },
          filter: function(e) {
            return je(this, K(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0));
          },
          find: function(e) {
            return Z(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          findIndex: function(e) {
            return ee(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          forEach: function(e) {
            $(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          indexOf: function(e) {
            return ne(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          includes: function(e) {
            return te(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          join: function(e) {
            return le.apply(Ce(this), arguments);
          },
          lastIndexOf: function(e) {
            return oe.apply(Ce(this), arguments);
          },
          map: function(e) {
            return xe(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          reduce: function(e) {
            return se.apply(Ce(this), arguments);
          },
          reduceRight: function(e) {
            return ce.apply(Ce(this), arguments);
          },
          reverse: function() {
            for (var e, t = Ce(this).length, n = Math.floor(t / 2), r = 0; r < n; ) {(e = this[r]), (this[r++] = this[--t]), (this[t] = e);}
            return this;
          },
          some: function(e) {
            return Q(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          sort: function(e) {
            return ue.call(Ce(this), e);
          },
          subarray: function(e, t) {
            const n = Ce(this);
            const r = n.length;
            const a = v(e, r);
            return new (N(n, n[ve]))(
              n.buffer,
              n.byteOffset + a * n.BYTES_PER_ELEMENT,
              m((void 0 === t ? r : v(t, r)) - a),
            );
          },
        };
        const Pe = function(e, t) {
          return je(this, de.call(Ce(this), e, t));
        };
        const Re = function(e) {
          Ce(this);
          const t = ke(arguments[1], 1);
          const n = this.length;
          const r = E(e);
          const a = m(r.length);
          let i = 0;
          if (a + t > n) {throw V('Wrong length!');}
          for (; i < a; ) {this[t + i] = r[i++];}
        };
        const _e = {
          entries: function() {
            return ie.call(Ce(this));
          },
          keys: function() {
            return ae.call(Ce(this));
          },
          values: function() {
            return re.call(Ce(this));
          },
        };
        const Fe = function(e, t) {
          return x(e) && e[ye] && 'symbol' !== typeof t && t in e && String(+t) == String(t);
        };
        const He = function(e, t) {
          return Fe(e, (t = b(t, !0))) ? d(2, e[t]) : q(e, t);
        };
        const De = function(e, t, n) {
          return !(Fe(e, (t = b(t, !0))) && x(n) && y(n, 'value')) ||
              y(n, 'get') ||
              y(n, 'set') ||
              n.configurable ||
              (y(n, 'writable') && !n.writable) ||
              (y(n, 'enumerable') && !n.enumerable)
            ? B(e, t, n)
            : ((e[t] = n.value), e);
        };
        be || ((D.f = He), (H.f = De)),
        o(o.S + o.F * !be, 'Object', { getOwnPropertyDescriptor: He, defineProperty: De }),
        i(function() {
          fe.call({});
        }) &&
            (fe = pe = function() {
              return le.call(this);
            });
        const Be = p({}, ze);
        p(Be, _e),
        f(Be, he, _e.values),
        p(Be, {
          slice: Pe,
          set: Re,
          constructor: function() {},
          toString: fe,
          toLocaleString: Le,
        }),
        Ie(Be, 'buffer', 'b'),
        Ie(Be, 'byteOffset', 'o'),
        Ie(Be, 'byteLength', 'l'),
        Ie(Be, 'length', 'e'),
        B(Be, me, {
          get: function() {
            return this[ye];
          },
        }),
        (e.exports = function(e, t, n, c) {
          const l = `${e + ((c = !!c) ? 'Clamped' : '')  }Array`;
          const d = `get${  e}`;
          const p = `set${  e}`;
          let h = a[l];
          const v = h || {};
          const b = h && C(h);
          const y = !h || !s.ABV;
          const E = {};
          let S = h && h.prototype;
          const j = function(e, n) {
            B(e, n, {
              get: function() {
                return (function(e, n) {
                  const r = e._d;
                  return r.v[d](n * t + r.o, Ee);
                })(this, n);
              },
              set: function(e) {
                return (function(e, n, r) {
                  const a = e._d;
                  c && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r),
                  a.v[p](n * t + a.o, r, Ee);
                })(this, n, e);
              },
              enumerable: !0,
            });
          };
          y
            ? ((h = n(function(e, n, r, a) {
              u(e, h, l, '_d');
              let i;
              let o;
              let s;
              let c;
              let d = 0;
              let p = 0;
              if (x(n)) {
                if (
                  !(n instanceof J || 'ArrayBuffer' == (c = w(n)) || 'SharedArrayBuffer' == c)
                ) {return ye in n ? Ae(h, n) : Te.call(h, n);}
                (i = n), (p = ke(r, t));
                const v = n.byteLength;
                if (void 0 === a) {
                  if (v % t) {throw V('Wrong length!');}
                  if ((o = v - p) < 0) {throw V('Wrong length!');}
                } else if ((o = m(a) * t) + p > v) {throw V('Wrong length!');}
                s = o / t;
              } else {(s = g(n)), (i = new J((o = s * t)));}
              for (f(e, '_d', { b: i, o: p, l: o, e: s, v: new Y(i) }); d < s; ) {j(e, d++);}
            })),
            (S = h.prototype = k(Be)),
            f(S, 'constructor', h))
            : (i(function() {
              h(1);
            }) &&
                  i(function() {
                    new h(-1);
                  }) &&
                  P(function(e) {
                    new h(), new h(null), new h(1.5), new h(e);
                  }, !0)) ||
                ((h = n(function(e, n, r, a) {
                  let i;
                  return (
                    u(e, h, l),
                    x(n)
                      ? n instanceof J || 'ArrayBuffer' == (i = w(n)) || 'SharedArrayBuffer' == i
                        ? void 0 !== a
                          ? new v(n, ke(r, t), a)
                          : void 0 !== r
                            ? new v(n, ke(r, t))
                            : new v(n)
                        : ye in n
                          ? Ae(h, n)
                          : Te.call(h, n)
                      : new v(g(n))
                  );
                })),
                $(b !== Function.prototype ? O(v).concat(O(b)) : O(v), function(e) {
                  e in h || f(h, e, v[e]);
                }),
                (h.prototype = S),
                r || (S.constructor = h));
          const A = S[he];
          const I = !!A && ('values' == A.name || null == A.name);
          const T = _e.values;
          f(h, ge, !0),
          f(S, ye, l),
          f(S, we, !0),
          f(S, ve, h),
          (c ? new h(1)[me] == l : me in S) ||
                B(S, me, {
                  get: function() {
                    return l;
                  },
                }),
          (E[l] = h),
          o(o.G + o.W + o.F * (h != v), E),
          o(o.S, l, { BYTES_PER_ELEMENT: t }),
          o(
            o.S +
                  o.F *
                    i(function() {
                      v.of.call(h, 1);
                    }),
            l,
            { from: Te, of: Me },
          ),
          'BYTES_PER_ELEMENT' in S || f(S, 'BYTES_PER_ELEMENT', t),
          o(o.P, l, ze),
          R(l),
          o(o.P + o.F * Se, l, { set: Re }),
          o(o.P + o.F * !I, l, _e),
          r || S.toString == fe || (S.toString = fe),
          o(
            o.P +
                  o.F *
                    i(function() {
                      new h(1).slice();
                    }),
            l,
            { slice: Pe },
          ),
          o(
            o.P +
                  o.F *
                    (i(function() {
                      return [1, 2].toLocaleString() != new h([1, 2]).toLocaleString();
                    }) ||
                      !i(function() {
                        S.toLocaleString.call([1, 2]);
                      })),
            l,
            { toLocaleString: Le },
          ),
          (z[l] = I ? A : T),
          r || I || f(S, he, T);
        });
      } else {e.exports = function() {};}
    },
    TAZq: function(e, t, n) {
      n('HQhv'),
      n('JHok'),
      (e.exports = (function() {
        'use strict';
        return function(e) {
          function t(t) {
            if (t) {
              try {
                e(`${t  }}`);
              } catch (n) {}
            }
          }
          return function(n, r, a, i, o, s, c, l, u, d) {
            switch (n) {
              case 1:
                if (0 === u && 64 === r.charCodeAt(0)) {return e(`${r  };`), '';}
                break;
              case 2:
                if (0 === l) {return `${r  }/*|*/`;}
                break;
              case 3:
                switch (l) {
                  case 102:
                  case 112:
                    return e(a[0] + r), '';
                  default:
                    return r + (0 === d ? '/*|*/' : '');
                }
              case -2:
                r.split('/*|*/}').forEach(t);
            }
          };
        };
      })());
    },
    TOwV: function(e, t, n) {
      'use strict';
      e.exports = n('qT12');
    },
    U06U: function(e, t, n) {
      e.exports = `${n.p  }static/Calibre-SemiboldItalic-6473be72d5216d0ec21d273af09b9fa3.woff`;
    },
    VEi9: function(e) {
      e.exports = JSON.parse(
        '{"data":{"site":{"siteMetadata":{"defaultTitle":"Amirs Workshop","defaultDescription":"Amir Workshop is a software engineer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.","siteUrl":"https://brittanychiang.com","defaultImage":"/og.png","twitterUsername":"@bchiang7"}}}}',
      );
    },
    VeD8: function(e, t, n) {
      'use strict';
      n('n7j8'), n('Ggvi'), n('AqHK'), n('rzGZ'), n('Dq+y'), n('8npG'), n('cxuS');
      const r = n('zLVn');
      const a = n('wx14');
      const i = n('dI71');
      function o(e) {
        if (void 0 === e) {throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');}
        return e;
      }
      n('17x9');
      const s = n('q1tI');
      const c = n.n(s);
      const l = n('0PSK');
      n('JHok'), n('pS08');
      function u(e, t) {
        const n = Object.create(null);
        return (
          e &&
            s.Children.map(e, function(e) {
              return e;
            }).forEach(function(e) {
              n[e.key] = (function(e) {
                return t && Object(s.isValidElement)(e) ? t(e) : e;
              })(e);
            }),
          n
        );
      }
      function d(e, t, n) {
        return null != n[t] ? n[t] : e.props[t];
      }
      function f(e, t, n) {
        const r = u(e.children);
        const a = (function(e, t) {
          function n(n) {
            return n in t ? t[n] : e[n];
          }
          (e = e || {}), (t = t || {});
          let r;
          const a = Object.create(null);
          let i = [];
          for (const o in e) {o in t ? i.length && ((a[o] = i), (i = [])) : i.push(o);}
          const s = {};
          for (const c in t) {
            if (a[c]) {
              for (r = 0; r < a[c].length; r++) {
                const l = a[c][r];
                s[a[c][r]] = n(l);
              }
            }
            s[c] = n(c);
          }
          for (r = 0; r < i.length; r++) {s[i[r]] = n(i[r]);}
          return s;
        })(t, r);
        return (
          Object.keys(a).forEach(function(i) {
            const o = a[i];
            if (Object(s.isValidElement)(o)) {
              const c = i in t;
              const l = i in r;
              const u = t[i];
              const f = Object(s.isValidElement)(u) && !u.props.in;
              !l || (c && !f)
                ? l || !c || f
                  ? l &&
                    c &&
                    Object(s.isValidElement)(u) &&
                    (a[i] = Object(s.cloneElement)(o, {
                      onExited: n.bind(null, o),
                      in: u.props.in,
                      exit: d(o, 'exit', e),
                      enter: d(o, 'enter', e),
                    }))
                  : (a[i] = Object(s.cloneElement)(o, { in: !1 }))
                : (a[i] = Object(s.cloneElement)(o, {
                  onExited: n.bind(null, o),
                  in: !0,
                  exit: d(o, 'exit', e),
                  enter: d(o, 'enter', e),
                }));
            }
          }),
          a
        );
      }
      const p =
          Object.values ||
          function(e) {
            return Object.keys(e).map(function(t) {
              return e[t];
            });
          };
      const h = (function(e) {
        function t(t, n) {
          let r;
          const a = (r = e.call(this, t, n) || this).handleExited.bind(o(o(r)));
          return (
            (r.state = { contextValue: { isMounting: !0 }, handleExited: a, firstRender: !0 }), r
          );
        }
        Object(i.a)(t, e);
        const n = t.prototype;
        return (
          (n.componentDidMount = function() {
            (this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } });
          }),
          (n.componentWillUnmount = function() {
            this.mounted = !1;
          }),
          (t.getDerivedStateFromProps = function(e, t) {
            let n;
            let r;
            const a = t.children;
            const i = t.handleExited;
            return {
              children: t.firstRender
                ? ((n = e),
                (r = i),
                u(n.children, function(e) {
                  return Object(s.cloneElement)(e, {
                    onExited: r.bind(null, e),
                    in: !0,
                    appear: d(e, 'appear', n),
                    enter: d(e, 'enter', n),
                    exit: d(e, 'exit', n),
                  });
                }))
                : f(e, a, i),
              firstRender: !1,
            };
          }),
          (n.handleExited = function(e, t) {
            const n = u(this.props.children);
            e.key in n ||
                (e.props.onExited && e.props.onExited(t),
                this.mounted &&
                  this.setState(function(t) {
                    const n = Object(a.a)({}, t.children);
                    return delete n[e.key], { children: n };
                  }));
          }),
          (n.render = function() {
            const e = this.props;
            const t = e.component;
            const n = e.childFactory;
            const a = Object(r.a)(e, ['component', 'childFactory']);
            const i = this.state.contextValue;
            const o = p(this.state.children).map(n);
            return (
              delete a.appear,
              delete a.enter,
              delete a.exit,
              null === t
                ? c.a.createElement(l.a.Provider, { value: i }, o)
                : c.a.createElement(l.a.Provider, { value: i }, c.a.createElement(t, a, o))
            );
          }),
          t
        );
      })(c.a.Component);
      (h.propTypes = {}),
      (h.defaultProps = {
        component: 'div',
        childFactory: function(e) {
          return e;
        },
      });
      t.a = h;
    },
    Wwog: function(e, t, n) {
      'use strict';
      function r(e, t) {
        if (e.length !== t.length) {return !1;}
        for (let n = 0; n < e.length; n++) {if (e[n] !== t[n]) {return !1;}}
        return !0;
      }
      t.a = function(e, t) {
        let n;
        void 0 === t && (t = r);
        let a;
        let i = [];
        let o = !1;
        return function() {
          for (var r = [], s = 0; s < arguments.length; s++) {r[s] = arguments[s];}
          return (
            (o && n === this && t(r, i)) || ((a = e.apply(this, r)), (o = !0), (n = this), (i = r)),
            a
          );
        };
      };
    },
    Xj9Q: function(e) {
      e.exports = JSON.parse(
        '{"data":{"jobs":{"edges":[{"node":{"frontmatter":{"title":"Engineer","company":"Upstatement","location":"Boston, MA","range":"May 2018 - Present","url":"https://www.upstatement.com/"},"html":"<ul>\\n<li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>\\n<li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</li>\\n<li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>\\n</ul>"}},{"node":{"frontmatter":{"title":"Studio Developer","company":"Scout","location":"Northeastern University","range":"January - April 2018","url":"https://web.northeastern.edu/scout/"},"html":"<ul>\\n<li>Worked with a team of three designers to build a marketing website and e-commerce platform for <a href=\\"https://blistabloc.com\\" target=\\"_blank\\" rel=\\"nofollow noopener noreferrer\\">blistabloc</a>, an ambitious startup originating from Northeastern</li>\\n<li>Helped solidify a brand direction for blistabloc that spans both packaging and web</li>\\n<li>Interfaced with clients on a weekly basis, providing technological expertise</li>\\n</ul>"}},{"node":{"frontmatter":{"title":"UI Engineer Co-op","company":"Apple","location":"Cupertino, CA","range":"July - December 2017","url":"https://www.apple.com/music/"},"html":"<ul>\\n<li>Developed and shipped highly interactive web applications for Apple Music using Ember.js</li>\\n<li>Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs</li>\\n<li>Architected and implemented the front-end of Apple Music\'s embeddable web player widget, which lets users log in and listen to full songs in the browser</li>\\n<li>Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps</li>\\n</ul>"}},{"node":{"frontmatter":{"title":"Studio Developer","company":"Scout","location":"Northeastern University","range":"January - June 2017","url":"https://web.northeastern.edu/scout/"},"html":"<ul>\\n<li>Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern</li>\\n<li>Worked closely with designers and management team to develop, document, and manage the conference’s marketing website using Jekyll, Sass, and JavaScript</li>\\n</ul>"}},{"node":{"frontmatter":{"title":"Software Engineer Co-op","company":"Starry","location":"Boston, MA","range":"July - December 2016","url":"https://starry.com/"},"html":"<ul>\\n<li>Engineered and maintained major features of Starry\'s customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS</li>\\n<li>Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry Station</li>\\n<li>Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Starry’s iOS and Android mobile apps</li>\\n</ul>"}},{"node":{"frontmatter":{"title":"Creative Technologist Co-op","company":"MullenLowe","location":"Boston, MA","range":"July - December 2015","url":"https://us.mullenlowe.com/"},"html":"<ul>\\n<li>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</li>\\n<li>Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness</li>\\n<li>Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more</li>\\n</ul>"}}]}}}',
      );
    },
    'Y++M': function(e, t, n) {
      'use strict';
      const r = n('DFzH');
      const a = n('dTG6');
      const i = n('kiRH');
      e.exports = function(e) {
        for (
          var t = r(this),
            n = i(t.length),
            o = arguments.length,
            s = a(o > 1 ? arguments[1] : void 0, n),
            c = o > 2 ? arguments[2] : void 0,
            l = void 0 === c ? n : a(c, n);
          l > s;

        ) {t[s++] = e;}
        return t;
      };
    },
    YBKJ: function(e, t, n) {
      'use strict';
      const r = n('emib');
      const a = n('qDzq');
      const i = n('CCE/');
      const o = n('TUPI');
      const s = n('kxs/');
      const c = n('96qb');
      const l = n('chL8').f;
      const u = n('Drra').f;
      const d = n('rjfK').f;
      const f = n('EU/P').trim;
      let p = r.Number;
      const h = p;
      const m = p.prototype;
      const g = 'Number' == i(n('nsRs')(m));
      const v = 'trim' in String.prototype;
      const b = function(e) {
        let t = s(e, !1);
        if ('string' === typeof t && t.length > 2) {
          let n;
          let r;
          let a;
          const i = (t = v ? t.trim() : f(t, 3)).charCodeAt(0);
          if (43 === i || 45 === i) {
            if (88 === (n = t.charCodeAt(2)) || 120 === n) {return NaN;}
          } else if (48 === i) {
            switch (t.charCodeAt(1)) {
              case 66:
              case 98:
                (r = 2), (a = 49);
                break;
              case 79:
              case 111:
                (r = 8), (a = 55);
                break;
              default:
                return +t;
            }
            for (var o, c = t.slice(2), l = 0, u = c.length; l < u; l++) {if ((o = c.charCodeAt(l)) < 48 || o > a) {return NaN;}}
            return parseInt(c, r);
          }
        }
        return +t;
      };
      if (!p(' 0o1') || !p('0b1') || p('+0x1')) {
        p = function(e) {
          const t = arguments.length < 1 ? 0 : e;
          const n = this;
          return n instanceof p &&
            (g
              ? c(function() {
                m.valueOf.call(n);
              })
              : 'Number' != i(n))
            ? o(new h(b(t)), n, p)
            : b(t);
        };
        for (
          var y,
            w = n('QPJK')
              ? l(h)
              : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(
                ',',
              ),
            x = 0;
          w.length > x;
          x++
        ) {a(h, (y = w[x])) && !a(p, y) && d(p, y, u(h, y));}
        (p.prototype = m), (m.constructor = p), n('IYdN')(r, 'Number', p);
      }
    },
    aJjT: function(e, t, n) {
      n('sc67'),
      n('HQhv'),
      n('HXzo'),
      n('sC2a'),
      (e.exports = (function e(t) {
        'use strict';
        const n = /^\0+/g;
        const r = /[\0\r\f]/g;
        const a = /: */g;
        const i = /zoo|gra/;
        const o = /([,: ])(transform)/g;
        const s = /,+\s*(?![^(]*[)])/g;
        const c = / +\s*(?![^(]*[)])/g;
        const l = / *[\0] */g;
        const u = /,\r+?/g;
        const d = /([\t\r\n ])*\f?&/g;
        const f = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g;
        const p = /\W+/g;
        const h = /@(k\w+)\s*(\S*)\s*/;
        const m = /::(place)/g;
        const g = /:(read-only)/g;
        const v = /\s+(?=[{\];=:>])/g;
        const b = /([[}=:>])\s+/g;
        const y = /(\{[^{]+?);(?=\})/g;
        const w = /\s{2,}/g;
        const x = /([^\(])(:+) */g;
        const E = /[svh]\w+-[tblr]{2}/;
        const S = /\(\s*(.*)\s*\)/g;
        const k = /([\s\S]*?);/g;
        const C = /-self|flex-/g;
        const O = /[^]*?(:[rp][el]a[\w-]+)[^]*/;
        const j = /stretch|:\s*\w+\-(?:conte|avail)/;
        const A = /([^-])(image-set\()/;
        const I = '-webkit-';
        const T = '-moz-';
        const M = '-ms-';
        const N = 59;
        const L = 125;
        const z = 123;
        const P = 40;
        const R = 41;
        const _ = 10;
        const F = 13;
        const H = 32;
        const D = 45;
        const B = 42;
        const q = 44;
        const V = 58;
        const W = 47;
        let U = 1;
        let G = 1;
        let J = 0;
        let Y = 1;
        let $ = 1;
        let K = 1;
        let Q = 0;
        let X = 0;
        let Z = 0;
        const ee = [];
        const te = [];
        let ne = 0;
        let re = null;
        let ae = 0;
        let ie = 1;
        let oe = '';
        let se = '';
        let ce = '';
        function le(e, t, a, i, o) {
          for (
            var s,
              c,
              u = 0,
              d = 0,
              f = 0,
              p = 0,
              v = 0,
              b = 0,
              y = 0,
              w = 0,
              E = 0,
              k = 0,
              C = 0,
              O = 0,
              j = 0,
              A = 0,
              T = 0,
              M = 0,
              Q = 0,
              te = 0,
              re = 0,
              de = a.length,
              ve = de - 1,
              be = '',
              ye = '',
              we = '',
              xe = '',
              Ee = '',
              Se = '';
            T < de;

          ) {
            if (
              ((y = a.charCodeAt(T)),
              T === ve &&
                  d + p + f + u !== 0 &&
                  (0 !== d && (y = d === W ? _ : W), (p = f = u = 0), de++, ve++),
              d + p + f + u === 0)
            ) {
              if (T === ve && (M > 0 && (ye = ye.replace(r, '')), ye.trim().length > 0)) {
                switch (y) {
                  case H:
                  case 9:
                  case N:
                  case F:
                  case _:
                    break;
                  default:
                    ye += a.charAt(T);
                }
                y = N;
              }
              if (1 === Q) {
                switch (y) {
                  case z:
                  case L:
                  case N:
                  case 34:
                  case 39:
                  case P:
                  case R:
                  case q:
                    Q = 0;
                  case 9:
                  case F:
                  case _:
                  case H:
                    break;
                  default:
                    for (Q = 0, re = T, v = y, T--, y = N; re < de; ) {
                      switch (a.charCodeAt(re++)) {
                        case _:
                        case F:
                        case N:
                          ++T, (y = v), (re = de);
                          break;
                        case V:
                          M > 0 && (++T, (y = v));
                        case z:
                          re = de;
                      }
                    }
                }
              }
              switch (y) {
                case z:
                  for (v = (ye = ye.trim()).charCodeAt(0), C = 1, re = ++T; T < de; ) {
                    switch ((y = a.charCodeAt(T))) {
                      case z:
                        C++;
                        break;
                      case L:
                        C--;
                        break;
                      case W:
                        switch ((b = a.charCodeAt(T + 1))) {
                          case B:
                          case W:
                            T = ge(b, T, ve, a);
                        }
                        break;
                      case 91:
                        y++;
                      case P:
                        y++;
                      case 34:
                      case 39:
                        for (; T++ < ve && a.charCodeAt(T) !== y; ){;}
                    }
                    if (0 === C) {break;}
                    T++;
                  }
                  switch (
                    ((we = a.substring(re, T)),
                    0 === v && (v = (ye = ye.replace(n, '').trim()).charCodeAt(0)),
                    v)
                  ) {
                    case 64:
                      switch ((M > 0 && (ye = ye.replace(r, '')), (b = ye.charCodeAt(1)))) {
                        case 100:
                        case 109:
                        case 115:
                        case D:
                          s = t;
                          break;
                        default:
                          s = ee;
                      }
                      if (
                        ((re = (we = le(t, s, we, b, o + 1)).length),
                        Z > 0 && 0 === re && (re = ye.length),
                        ne > 0 &&
                            ((c = me(3, we, (s = ue(ee, ye, te)), t, G, U, re, b, o, i)),
                            (ye = s.join('')),
                            void 0 !== c &&
                              0 === (re = (we = c.trim()).length) &&
                              ((b = 0), (we = ''))),
                        re > 0)
                      ) {
                        switch (b) {
                          case 115:
                            ye = ye.replace(S, he);
                          case 100:
                          case 109:
                          case D:
                            we = `${ye  }{${  we  }}`;
                            break;
                          case 107:
                            (we =
                                `${ye = ye.replace(h, `$1 $2${  ie > 0 ? oe : ''}`) 
                                }{${ 
                                  we 
                                }}`),
                            (we =
                                  1 === $ || (2 === $ && pe(`@${  we}`, 3))
                                    ? `@${  I  }${we  }@${  we}`
                                    : `@${  we}`);
                            break;
                          default:
                            (we = ye + we), 112 === i && ((xe += we), (we = ''));
                        }
                      } else {we = '';}
                      break;
                    default:
                      we = le(t, ue(t, ye, te), we, i, o + 1);
                  }
                  (Ee += we),
                  (O = 0),
                  (Q = 0),
                  (A = 0),
                  (M = 0),
                  (te = 0),
                  (j = 0),
                  (ye = ''),
                  (we = ''),
                  (y = a.charCodeAt(++T));
                  break;
                case L:
                case N:
                  if ((re = (ye = (M > 0 ? ye.replace(r, '') : ye).trim()).length) > 1) {
                    switch (
                      (0 === A &&
                          ((v = ye.charCodeAt(0)) === D || (v > 96 && v < 123)) &&
                          (re = (ye = ye.replace(' ', ':')).length),
                      ne > 0 &&
                          void 0 !== (c = me(1, ye, t, e, G, U, xe.length, i, o, i)) &&
                          0 === (re = (ye = c.trim()).length) &&
                          (ye = '\0\0'),
                      (v = ye.charCodeAt(0)),
                      (b = ye.charCodeAt(1)),
                      v)
                    ) {
                      case 0:
                        break;
                      case 64:
                        if (105 === b || 99 === b) {
                          Se += ye + a.charAt(T);
                          break;
                        }
                      default:
                        if (ye.charCodeAt(re - 1) === V) {break;}
                        xe += fe(ye, v, b, ye.charCodeAt(2));
                    }
                  }
                  (O = 0),
                  (Q = 0),
                  (A = 0),
                  (M = 0),
                  (te = 0),
                  (ye = ''),
                  (y = a.charCodeAt(++T));
              }
            }
            switch (y) {
              case F:
              case _:
                if (d + p + f + u + X === 0) {
                  switch (k) {
                    case R:
                    case 39:
                    case 34:
                    case 64:
                    case 126:
                    case 62:
                    case B:
                    case 43:
                    case W:
                    case D:
                    case V:
                    case q:
                    case N:
                    case z:
                    case L:
                      break;
                    default:
                      A > 0 && (Q = 1);
                  }
                }
                d === W
                  ? (d = 0)
                  : Y + O === 0 && 107 !== i && ye.length > 0 && ((M = 1), (ye += '\0')),
                ne * ae > 0 && me(0, ye, t, e, G, U, xe.length, i, o, i),
                (U = 1),
                G++;
                break;
              case N:
              case L:
                if (d + p + f + u === 0) {
                  U++;
                  break;
                }
              default:
                switch ((U++, (be = a.charAt(T)), y)) {
                  case 9:
                  case H:
                    if (p + u + d === 0) {
                      switch (w) {
                        case q:
                        case V:
                        case 9:
                        case H:
                          be = '';
                          break;
                        default:
                          y !== H && (be = ' ');
                      }
                    }
                    break;
                  case 0:
                    be = '\\0';
                    break;
                  case 12:
                    be = '\\f';
                    break;
                  case 11:
                    be = '\\v';
                    break;
                  case 38:
                    p + d + u === 0 && Y > 0 && ((te = 1), (M = 1), (be = `\f${  be}`));
                    break;
                  case 108:
                    if (p + d + u + J === 0 && A > 0) {
                      switch (T - A) {
                        case 2:
                          112 === w && a.charCodeAt(T - 3) === V && (J = w);
                        case 8:
                          111 === E && (J = E);
                      }
                    }
                    break;
                  case V:
                    p + d + u === 0 && (A = T);
                    break;
                  case q:
                    d + f + p + u === 0 && ((M = 1), (be += '\r'));
                    break;
                  case 34:
                  case 39:
                    0 === d && (p = p === y ? 0 : 0 === p ? y : p);
                    break;
                  case 91:
                    p + d + f === 0 && u++;
                    break;
                  case 93:
                    p + d + f === 0 && u--;
                    break;
                  case R:
                    p + d + u === 0 && f--;
                    break;
                  case P:
                    if (p + d + u === 0) {
                      if (0 === O) {
                        switch (2 * w + 3 * E) {
                          case 533:
                            break;
                          default:
                            (C = 0), (O = 1);
                        }
                      }
                      f++;
                    }
                    break;
                  case 64:
                    d + f + p + u + A + j === 0 && (j = 1);
                    break;
                  case B:
                  case W:
                    if (p + u + f > 0) {break;}
                    switch (d) {
                      case 0:
                        switch (2 * y + 3 * a.charCodeAt(T + 1)) {
                          case 235:
                            d = W;
                            break;
                          case 220:
                            (re = T), (d = B);
                        }
                        break;
                      case B:
                        y === W &&
                            w === B &&
                            re + 2 !== T &&
                            (33 === a.charCodeAt(re + 2) && (xe += a.substring(re, T + 1)),
                            (be = ''),
                            (d = 0));
                    }
                }
                if (0 === d) {
                  if (Y + p + u + j === 0 && 107 !== i && y !== N) {
                    switch (y) {
                      case q:
                      case 126:
                      case 62:
                      case 43:
                      case R:
                      case P:
                        if (0 === O) {
                          switch (w) {
                            case 9:
                            case H:
                            case _:
                            case F:
                              be += '\0';
                              break;
                            default:
                              be = `\0${  be  }${y === q ? '' : '\0'}`;
                          }
                          M = 1;
                        } else {
                          switch (y) {
                            case P:
                              A + 7 === T && 108 === w && (A = 0), (O = ++C);
                              break;
                            case R:
                              0 == (O = --C) && ((M = 1), (be += '\0'));
                          }
                        }
                        break;
                      case 9:
                      case H:
                        switch (w) {
                          case 0:
                          case z:
                          case L:
                          case N:
                          case q:
                          case 12:
                          case 9:
                          case H:
                          case _:
                          case F:
                            break;
                          default:
                            0 === O && ((M = 1), (be += '\0'));
                        }
                    }
                  }
                  (ye += be), y !== H && 9 !== y && (k = y);
                }
            }
            (E = w), (w = y), T++;
          }
          if (
            ((re = xe.length),
            Z > 0 &&
                0 === re &&
                0 === Ee.length &&
                (0 === t[0].length) == 0 &&
                (109 !== i || (1 === t.length && (Y > 0 ? se : ce) === t[0])) &&
                (re = t.join(',').length + 2),
            re > 0)
          ) {
            if (
              ((s =
                  0 === Y && 107 !== i
                    ? (function(e) {
                      for (var t, n, a = 0, i = e.length, o = Array(i); a < i; ++a) {
                        for (
                          var s = e[a].split(l), c = '', u = 0, d = 0, f = 0, p = 0, h = s.length;
                          u < h;
                          ++u
                        ) {
                          if (!(0 === (d = (n = s[u]).length) && h > 1)) {
                            if (
                              ((f = c.charCodeAt(c.length - 1)),
                              (p = n.charCodeAt(0)),
                              (t = ''),
                              0 !== u)
                            ) {
                              switch (f) {
                                case B:
                                case 126:
                                case 62:
                                case 43:
                                case H:
                                case P:
                                  break;
                                default:
                                  t = ' ';
                              }
                            }
                            switch (p) {
                              case 38:
                                n = t + se;
                              case 126:
                              case 62:
                              case 43:
                              case H:
                              case R:
                              case P:
                                break;
                              case 91:
                                n = t + n + se;
                                break;
                              case V:
                                switch (2 * n.charCodeAt(1) + 3 * n.charCodeAt(2)) {
                                  case 530:
                                    if (K > 0) {
                                      n = t + n.substring(8, d - 1);
                                      break;
                                    }
                                  default:
                                    (u < 1 || s[u - 1].length < 1) && (n = t + se + n);
                                }
                                break;
                              case q:
                                t = '';
                              default:
                                n =
                                    d > 1 && n.indexOf(':') > 0
                                      ? t + n.replace(x, `$1${  se  }$2`)
                                      : t + n + se;
                            }
                            c += n;
                          }
                        }
                        o[a] = c.replace(r, '').trim();
                      }
                      return o;
                    })(t)
                    : t),
              ne > 0 &&
                  void 0 !== (c = me(2, xe, s, e, G, U, re, i, o, i)) &&
                  0 === (xe = c).length)
            ) {return Se + xe + Ee;}
            if (((xe = `${s.join(',')  }{${  xe  }}`), $ * J != 0)) {
              switch ((2 !== $ || pe(xe, 2) || (J = 0), J)) {
                case 111:
                  xe = xe.replace(g, ':-moz-$1') + xe;
                  break;
                case 112:
                  xe =
                      xe.replace(m, `::${  I  }input-$1`) +
                      xe.replace(m, '::-moz-$1') +
                      xe.replace(m, ':-ms-input-$1') +
                      xe;
              }
              J = 0;
            }
          }
          return Se + xe + Ee;
        }
        function ue(e, t, n) {
          const r = t.trim().split(u);
          let a = r;
          const i = r.length;
          const o = e.length;
          switch (o) {
            case 0:
            case 1:
              for (var s = 0, c = 0 === o ? '' : `${e[0]  } `; s < i; ++s) {a[s] = de(c, a[s], n, o).trim();}
              break;
            default:
              s = 0;
              var l = 0;
              for (a = []; s < i; ++s) {for (let d = 0; d < o; ++d) {a[l++] = de(`${e[d]  } `, r[s], n, o).trim();}}
          }
          return a;
        }
        function de(e, t, n, r) {
          let a = t;
          let i = a.charCodeAt(0);
          switch ((i < 33 && (i = (a = a.trim()).charCodeAt(0)), i)) {
            case 38:
              switch (Y + r) {
                case 0:
                case 1:
                  if (0 === e.trim().length) {break;}
                default:
                  return a.replace(d, `$1${  e.trim()}`);
              }
              break;
            case V:
              switch (a.charCodeAt(1)) {
                case 103:
                  if (K > 0 && Y > 0) {return a.replace(f, '$1').replace(d, `$1${  ce}`);}
                  break;
                default:
                  return e.trim() + a.replace(d, `$1${  e.trim()}`);
              }
            default:
              if (n * Y > 0 && a.indexOf('\f') > 0) {return a.replace(d, (e.charCodeAt(0) === V ? '' : '$1') + e.trim());}
          }
          return e + a;
        }
        function fe(e, t, n, r) {
          let l;
          let u = 0;
          let d = `${e  };`;
          let f = 2 * t + 3 * n + 4 * r;
          if (944 === f) {
            return (function(e) {
              let t = e.length;
              let n = e.indexOf(':', 9) + 1;
              const r = e.substring(0, n).trim();
              let a = e.substring(n, t - 1).trim();
              switch (e.charCodeAt(9) * ie) {
                case 0:
                  break;
                case D:
                  if (110 !== e.charCodeAt(10)) {break;}
                default:
                  var i = a.split(((a = ''), s));
                  var o = 0;
                  for (n = 0, t = i.length; o < t; n = 0, ++o) {
                    for (var l = i[o], u = l.split(c); (l = u[n]); ) {
                      const d = l.charCodeAt(0);
                      if (
                        1 === ie &&
                          ((d > 64 && d < 90) ||
                            (d > 96 && d < 123) ||
                            95 === d ||
                            (d === D && l.charCodeAt(1) !== D))
                      ) {
                        switch (isNaN(parseFloat(l)) + (-1 !== l.indexOf('('))) {
                          case 1:
                            switch (l) {
                              case 'infinite':
                              case 'alternate':
                              case 'backwards':
                              case 'running':
                              case 'normal':
                              case 'forwards':
                              case 'both':
                              case 'none':
                              case 'linear':
                              case 'ease':
                              case 'ease-in':
                              case 'ease-out':
                              case 'ease-in-out':
                              case 'paused':
                              case 'reverse':
                              case 'alternate-reverse':
                              case 'inherit':
                              case 'initial':
                              case 'unset':
                              case 'step-start':
                              case 'step-end':
                                break;
                              default:
                                l += oe;
                            }
                        }
                      }
                      u[n++] = l;
                    }
                    a += (0 === o ? '' : ',') + u.join(' ');
                  }
              }
              return (a = `${r + a  };`), 1 === $ || (2 === $ && pe(a, 1)) ? I + a + a : a;
            })(d);
          }
          if (0 === $ || (2 === $ && !pe(d, 1))) {return d;}
          switch (f) {
            case 1015:
              return 97 === d.charCodeAt(10) ? I + d + d : d;
            case 951:
              return 116 === d.charCodeAt(3) ? I + d + d : d;
            case 963:
              return 110 === d.charCodeAt(5) ? I + d + d : d;
            case 1009:
              if (100 !== d.charCodeAt(4)) {break;}
            case 969:
            case 942:
              return I + d + d;
            case 978:
              return I + d + T + d + d;
            case 1019:
            case 983:
              return I + d + T + d + M + d + d;
            case 883:
              return d.charCodeAt(8) === D
                ? I + d + d
                : d.indexOf('image-set(', 11) > 0
                  ? d.replace(A, `$1${  I  }$2`) + d
                  : d;
            case 932:
              if (d.charCodeAt(4) === D) {
                switch (d.charCodeAt(5)) {
                  case 103:
                    return (
                      `${I 
                      }box-${ 
                        d.replace('-grow', '') 
                      }${I 
                      }${d 
                      }${M 
                      }${d.replace('grow', 'positive') 
                      }${d}`
                    );
                  case 115:
                    return I + d + M + d.replace('shrink', 'negative') + d;
                  case 98:
                    return I + d + M + d.replace('basis', 'preferred-size') + d;
                }
              }
              return I + d + M + d + d;
            case 964:
              return `${I + d + M  }flex-${  d  }${d}`;
            case 1023:
              if (99 !== d.charCodeAt(8)) {break;}
              return (
                (l = d
                  .substring(d.indexOf(':', 15))
                  .replace('flex-', '')
                  .replace('space-between', 'justify')),
                `${I  }box-pack${  l  }${I  }${d  }${M  }flex-pack${  l  }${d}`
              );
            case 1005:
              return i.test(d) ? d.replace(a, `:${  I}`) + d.replace(a, `:${  T}`) + d : d;
            case 1e3:
              switch (
                ((u = (l = d.substring(13).trim()).indexOf('-') + 1),
                l.charCodeAt(0) + l.charCodeAt(u))
              ) {
                case 226:
                  l = d.replace(E, 'tb');
                  break;
                case 232:
                  l = d.replace(E, 'tb-rl');
                  break;
                case 220:
                  l = d.replace(E, 'lr');
                  break;
                default:
                  return d;
              }
              return I + d + M + l + d;
            case 1017:
              if (-1 === d.indexOf('sticky', 9)) {return d;}
            case 975:
              switch (
                ((u = (d = e).length - 10),
                (f =
                    (l = (33 === d.charCodeAt(u) ? d.substring(0, u) : d)
                      .substring(e.indexOf(':', 7) + 1)
                      .trim()).charCodeAt(0) +
                    (0 | l.charCodeAt(7))))
              ) {
                case 203:
                  if (l.charCodeAt(8) < 111) {break;}
                case 115:
                  d = `${d.replace(l, I + l)  };${  d}`;
                  break;
                case 207:
                case 102:
                  d =
                      `${d.replace(l, `${I + (f > 102 ? 'inline-' : '')  }box`) 
                      };${ 
                        d.replace(l, I + l) 
                      };${ 
                        d.replace(l, `${M + l  }box`) 
                      };${ 
                        d}`;
              }
              return `${d  };`;
            case 938:
              if (d.charCodeAt(5) === D) {
                switch (d.charCodeAt(6)) {
                  case 105:
                    return (
                      (l = d.replace('-items', '')), `${I + d + I  }box-${  l  }${M  }flex-${  l  }${d}`
                    );
                  case 115:
                    return `${I + d + M  }flex-item-${  d.replace(C, '')  }${d}`;
                  default:
                    return (
                      `${I +
                        d +
                        M 
                      }flex-line-pack${ 
                        d.replace('align-content', '').replace(C, '') 
                      }${d}`
                    );
                }
              }
              break;
            case 973:
            case 989:
              if (d.charCodeAt(3) !== D || 122 === d.charCodeAt(4)) {break;}
            case 931:
            case 953:
              if (!0 === j.test(e)) {
                return 115 === (l = e.substring(e.indexOf(':') + 1)).charCodeAt(0)
                  ? fe(e.replace('stretch', 'fill-available'), t, n, r).replace(
                    ':fill-available',
                    ':stretch',
                  )
                  : d.replace(l, I + l) + d.replace(l, T + l.replace('fill-', '')) + d;
              }
              break;
            case 962:
              if (
                ((d = I + d + (102 === d.charCodeAt(5) ? M + d : '') + d),
                n + r === 211 && 105 === d.charCodeAt(13) && d.indexOf('transform', 10) > 0)
              ) {return d.substring(0, d.indexOf(';', 27) + 1).replace(o, `$1${  I  }$2`) + d;}
          }
          return d;
        }
        function pe(e, t) {
          const n = e.indexOf(1 === t ? ':' : '{');
          const r = e.substring(0, 3 !== t ? n : 10);
          const a = e.substring(n + 1, e.length - 1);
          return re(2 !== t ? r : r.replace(O, '$1'), a, t);
        }
        function he(e, t) {
          const n = fe(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
          return n !== `${t  };` ? n.replace(k, ' or ($1)').substring(4) : `(${  t  })`;
        }
        function me(e, t, n, r, a, i, o, s, c, l) {
          for (var u, d = 0, f = t; d < ne; ++d) {
            switch ((u = te[d].call(be, e, f, n, r, a, i, o, s, c, l))) {
              case void 0:
              case !1:
              case !0:
              case null:
                break;
              default:
                f = u;
            }
          }
          if (f !== t) {return f;}
        }
        function ge(e, t, n, r) {
          for (var a = t + 1; a < n; ++a) {
            switch (r.charCodeAt(a)) {
              case W:
                if (e === B && r.charCodeAt(a - 1) === B && t + 2 !== a) {return a + 1;}
                break;
              case _:
                if (e === W) {return a + 1;}
            }
          }
          return a;
        }
        function ve(e) {
          for (const t in e) {
            const n = e[t];
            switch (t) {
              case 'keyframe':
                ie = 0 | n;
                break;
              case 'global':
                K = 0 | n;
                break;
              case 'cascade':
                Y = 0 | n;
                break;
              case 'compress':
                Q = 0 | n;
                break;
              case 'semicolon':
                X = 0 | n;
                break;
              case 'preserve':
                Z = 0 | n;
                break;
              case 'prefix':
                (re = null),
                n ? ('function' !== typeof n ? ($ = 1) : (($ = 2), (re = n))) : ($ = 0);
            }
          }
          return ve;
        }
        function be(t, n) {
          if (void 0 !== this && this.constructor === be) {return e(t);}
          let a = t;
          let i = a.charCodeAt(0);
          i < 33 && (i = (a = a.trim()).charCodeAt(0)),
          ie > 0 && (oe = a.replace(p, 91 === i ? '' : '-')),
          (i = 1),
          1 === Y ? (ce = a) : (se = a);
          let o;
          const s = [ce];
          ne > 0 &&
              void 0 !== (o = me(-1, n, s, s, G, U, 0, 0, 0, 0)) &&
              'string' === typeof o &&
              (n = o);
          let c = le(ee, s, n, 0, 0);
          return (
            ne > 0 &&
                void 0 !== (o = me(-2, c, s, s, G, U, c.length, 0, 0, 0)) &&
                'string' !== typeof (c = o) &&
                (i = 0),
            (oe = ''),
            (ce = ''),
            (se = ''),
            (J = 0),
            (G = 1),
            (U = 1),
            Q * i == 0
              ? c
              : c.replace(r, '').replace(v, '').replace(b, '$1').replace(y, '$1').replace(w, ' ')
          );
        }
        return (
          (be.use = function e(t) {
            switch (t) {
              case void 0:
              case null:
                ne = te.length = 0;
                break;
              default:
                if ('function' === typeof t) {te[ne++] = t;} else if ('object' === typeof t) {for (let n = 0, r = t.length; n < r; ++n) {e(t[n]);}} else {ae = 0 | !!t;}
            }
            return e;
          }),
          (be.set = ve),
          void 0 !== t && ve(t),
          be
        );
      })(null));
    },
    bmMU: function(e, t, n) {
      n('Ll4R'),
      n('Ggvi'),
      n('q8oJ'),
      n('C9fy'),
      n('Kz6e'),
      n('klQ5'),
      n('MIFh'),
      n('ToIb'),
      n('rzGZ'),
      n('Dq+y'),
      n('8npG'),
      n('YbXK'),
      n('xJgp');
      const r = 'undefined' !== typeof Element;
      const a = 'function' === typeof Map;
      const i = 'function' === typeof Set;
      const o = 'function' === typeof ArrayBuffer && !!ArrayBuffer.isView;
      e.exports = function(e, t) {
        try {
          return (function e(t, n) {
            if (t === n) {return !0;}
            if (t && n && 'object' === typeof t && 'object' === typeof n) {
              if (t.constructor !== n.constructor) {return !1;}
              let s; let c; let l; let u;
              if (Array.isArray(t)) {
                if ((s = t.length) != n.length) {return !1;}
                for (c = s; 0 != c--; ) {if (!e(t[c], n[c])) {return !1;}}
                return !0;
              }
              if (a && t instanceof Map && n instanceof Map) {
                if (t.size !== n.size) {return !1;}
                for (u = t.entries(); !(c = u.next()).done; ) {if (!n.has(c.value[0])) {return !1;}}
                for (u = t.entries(); !(c = u.next()).done; ) {if (!e(c.value[1], n.get(c.value[0]))) {return !1;}}
                return !0;
              }
              if (i && t instanceof Set && n instanceof Set) {
                if (t.size !== n.size) {return !1;}
                for (u = t.entries(); !(c = u.next()).done; ) {if (!n.has(c.value[0])) {return !1;}}
                return !0;
              }
              if (o && ArrayBuffer.isView(t) && ArrayBuffer.isView(n)) {
                if ((s = t.length) != n.length) {return !1;}
                for (c = s; 0 != c--; ) {if (t[c] !== n[c]) {return !1;}}
                return !0;
              }
              if (t.constructor === RegExp) {return t.source === n.source && t.flags === n.flags;}
              if (t.valueOf !== Object.prototype.valueOf) {return t.valueOf() === n.valueOf();}
              if (t.toString !== Object.prototype.toString) {return t.toString() === n.toString();}
              if ((s = (l = Object.keys(t)).length) !== Object.keys(n).length) {return !1;}
              for (c = s; 0 != c--; ) {if (!Object.prototype.hasOwnProperty.call(n, l[c])) {return !1;}}
              if (r && t instanceof Element) {return !1;}
              for (c = s; 0 != c--; ) {
                if (
                  (('_owner' !== l[c] && '__v' !== l[c] && '__o' !== l[c]) || !t.$$typeof) &&
                  !e(t[l[c]], n[l[c]])
                ) {return !1;}
              }
              return !0;
            }
            return t != t && n != n;
          })(e, t);
        } catch (n) {
          if ((n.message || '').match(/stack|recursion/i)) {return console.warn('react-fast-compare cannot handle circular refs'), !1;}
          throw n;
        }
      };
    },
    cRJv: function(e, t, n) {
      'use strict';
      const r = n('DFzH');
      const a = n('dTG6');
      const i = n('kiRH');
      e.exports =
        [].copyWithin ||
        function(e, t) {
          const n = r(this);
          const o = i(n.length);
          let s = a(e, o);
          let c = a(t, o);
          const l = arguments.length > 2 ? arguments[2] : void 0;
          let u = Math.min((void 0 === l ? o : a(l, o)) - c, o - s);
          let d = 1;
          for (c < s && s < c + u && ((d = -1), (c += u - 1), (s += u - 1)); u-- > 0; ) {c in n ? (n[s] = n[c]) : delete n[s], (s += d), (c += d);}
          return n;
        };
    },
    cxuS: function(e, t, n) {
      const r = n('P8UN');
      const a = n('ys0W')(!1);
      r(r.S, 'Object', {
        values: function(e) {
          return a(e);
        },
      });
    },
    dI71: function(e, t, n) {
      'use strict';
      function r(e, t) {
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = t);
      }
      n.d(t, 'a', function() {
        return r;
      });
    },
    eMsz: function(e, t, n) {
      'use strict';
      let r;
      const a = n('emib');
      const i = n('Wadk')(0);
      const o = n('IYdN');
      const s = n('N+BI');
      const c = n('k5Iv');
      const l = n('SGlo');
      const u = n('BjK0');
      const d = n('O1i0');
      const f = n('O1i0');
      const p = !a.ActiveXObject && 'ActiveXObject' in a;
      const h = s.getWeak;
      const m = Object.isExtensible;
      const g = l.ufstore;
      const v = function(e) {
        return function() {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      };
      const b = {
        get: function(e) {
          if (u(e)) {
            const t = h(e);
            return !0 === t ? g(d(this, 'WeakMap')).get(e) : t ? t[this._i] : void 0;
          }
        },
        set: function(e, t) {
          return l.def(d(this, 'WeakMap'), e, t);
        },
      };
      const y = (e.exports = n('94Pd')('WeakMap', v, b, l, !0, !0));
      f &&
        p &&
        (c((r = l.getConstructor(v, 'WeakMap')).prototype, b),
        (s.NEED = !0),
        i(['delete', 'has', 'get', 'set'], function(e) {
          const t = y.prototype;
          const n = t[e];
          o(t, e, function(t, a) {
            if (u(t) && !m(t)) {
              this._f || (this._f = new r());
              const i = this._f[e](t, a);
              return 'set' == e ? this : i;
            }
            return n.call(this, t, a);
          });
        }));
    },
    f1WF: function(e, t, n) {
      e.exports = `${n.p  }static/SFMono-Semibold-2d4bff46a7a9ba9dc7701f75726a7815.woff`;
    },
    g67X: function(e, t, n) {
      'use strict';
      n.d(t, 'b', function() {
        return i;
      }),
      n.d(t, 'c', function() {
        return o;
      }),
      n.d(t, 'd', function() {
        return s;
      }),
      n.d(t, 'e', function() {
        return c;
      }),
      n.d(t, 'f', function() {
        return l;
      }),
      n.d(t, 'a', function() {
        return u;
      }),
      n.d(t, 'g', function() {
        return d;
      }),
      n.d(t, 'h', function() {
        return f;
      }),
      n.d(t, 'i', function() {
        return p;
      }),
      n.d(t, 'j', function() {
        return h;
      }),
      n.d(t, 'k', function() {
        return m;
      }),
      n.d(t, 'l', function() {
        return g;
      }),
      n.d(t, 'm', function() {
        return v;
      }),
      n.d(t, 'n', function() {
        return b;
      }),
      n.d(t, 'o', function() {
        return y;
      }),
      n.d(t, 'p', function() {
        return w;
      });
      const r = n('q1tI');
      const a = n.n(r);
      var i = function() {
        return a.a.createElement(
          'svg',
          {
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            x: '0px',
            y: '0px',
            viewBox: '0 0 512 512',
            xmlSpace: 'preserve',
          },
          a.a.createElement('title', null, 'Apple App Store'),
          a.a.createElement(
            'g',
            null,
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d:
                    'M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105 C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302 c41.355,0,75,33.645,75,75V407z',
              }),
            ),
          ),
          a.a.createElement(
            'g',
            null,
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d:
                    'M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166 l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664 L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498 C306.487,136.719,307.375,129.981,305.646,123.531z',
              }),
            ),
          ),
          a.a.createElement(
            'g',
            null,
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d:
                    'M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65 c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341 H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z',
              }),
            ),
          ),
          a.a.createElement(
            'g',
            null,
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d:
                    'M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344 c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z',
              }),
            ),
          ),
        );
      };
      var o = function() {
        return a.a.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', role: 'img', viewBox: '0 0 31.665 31.665' },
          a.a.createElement('title', null, 'Codepen'),
          a.a.createElement('path', {
            d:
                'M16.878,0.415c-0.854-0.565-1.968-0.552-2.809,0.034L1.485,9.214c-0.671,0.468-1.071,1.233-1.071,2.052v9.444 c0,0.84,0.421,1.623,1.122,2.086l12.79,8.455c0.836,0.553,1.922,0.553,2.758,0l13.044-8.618c0.7-0.463,1.122-1.246,1.122-2.086 v-9.279c0-0.839-0.421-1.622-1.121-2.085L16.878,0.415z M26.621,10.645l-4.821,3.237l-4.521-3.288L17.25,4.127L26.621,10.645z M13.979,4.133v6.329l-4.633,3.24l-4.621-3.099L13.979,4.133z M3.458,13.722l2.991,2.004l-2.991,2.093V13.722z M14.058,27.215 l-9.331-6.258l4.661-3.258l4.67,3.133V27.215z M12.286,15.674l3.021-2.113l3.519,2.313l-3.119,2.095L12.286,15.674z M17.354,27.215 V20.83l4.463-2.991l4.805,3.159L17.354,27.215z M27.954,17.927l-3.168-2.082l3.168-2.125V17.927z',
          }),
        );
      };
      var s = function() {
        return a.a.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', role: 'img', viewBox: '0 0 194.818 194.818' },
          a.a.createElement('title', null, 'External'),
          a.a.createElement(
            'g',
            null,
            a.a.createElement('path', {
              d:
                  'M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z',
            }),
            a.a.createElement('path', {
              d:
                  'M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z',
            }),
          ),
        );
      };
      var c = function() {
        return a.a.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', role: 'img', viewBox: '0 0 60 60' },
          a.a.createElement('title', null, 'Folder'),
          a.a.createElement('path', {
            d:
                'M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0 c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177 C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5 H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083 c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953 c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z',
          }),
        );
      };
      var l = function() {
        return a.a.createElement(
          'svg',
          {
            'aria-label': 'forks',
            viewBox: '0 0 10 16',
            version: '1.1',
            width: '10',
            height: '16',
            role: 'img',
          },
          a.a.createElement('path', {
            fillRule: 'evenodd',
            d:
                'M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z',
          }),
        );
      };
      var u =
          (n('pJf4'),
          function(e) {
            switch (e.name) {
              case 'AppStore':
                return a.a.createElement(i, null);
              case 'Codepen':
                return a.a.createElement(o, null);
              case 'External':
                return a.a.createElement(s, null);
              case 'Folder':
                return a.a.createElement(c, null);
              case 'Fork':
                return a.a.createElement(l, null);
              case 'GitHub':
                return a.a.createElement(d, null);
              case 'Instagram':
                return a.a.createElement(f, null);
              case 'Linkedin':
                return a.a.createElement(p, null);
              case 'Loader':
                return a.a.createElement(h, null);
              case 'Location':
                return a.a.createElement(m, null);
              case 'Logo':
                return a.a.createElement(g, null);
              case 'PlayStore':
                return a.a.createElement(v, null);
              case 'Star':
                return a.a.createElement(b, null);
              case 'Twitter':
                return a.a.createElement(y, null);
              case 'Zap':
                return a.a.createElement(w, null);
              default:
                return a.a.createElement(s, null);
            }
          });
      var d = function() {
        return a.a.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', role: 'img', viewBox: '0 0 438.549 438.549' },
          a.a.createElement('title', null, 'GitHub'),
          a.a.createElement('path', {
            d:
                'M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z',
          }),
        );
      };
      var f = function() {
        return a.a.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', role: 'img', viewBox: '0 0 512 512' },
          a.a.createElement('title', null, 'Instagram'),
          a.a.createElement(
            'g',
            null,
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d:
                    'M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160 C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48 h192c61.76,0,112,50.24,112,112V352z',
              }),
            ),
          ),
          a.a.createElement(
            'g',
            null,
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d:
                    'M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z',
              }),
            ),
          ),
          a.a.createElement(
            'g',
            null,
            a.a.createElement(
              'g',
              null,
              a.a.createElement('circle', { cx: '393.6', cy: '118.4', r: '17.056' }),
            ),
          ),
        );
      };
      var p = function() {
        return a.a.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', role: 'img', viewBox: '0 0 430.117 430.117' },
          a.a.createElement('title', null, 'LinkedIn'),
          a.a.createElement('path', {
            d:
                'M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z',
          }),
        );
      };
      var h = function() {
        return a.a.createElement(
          'svg',
          { id: 'logo', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100' },
          a.a.createElement('title', null, 'Loader Logo'),
          a.a.createElement(
            'g',
            null,
            a.a.createElement(
              'g',
              { id: 'B', transform: 'translate(11.000000, 5.000000)' },
              a.a.createElement('path', {
                d:
                    'M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z',
                fill: 'currentColor',
              }),
            ),
            a.a.createElement('path', {
              stroke: 'currentColor',
              strokeWidth: '5',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              d: 'M 50, 5 L 11, 27 L 11, 72 L 50, 95 L 89, 73 L 89, 28 z',
            }),
          ),
        );
      };
      var m = function() {
        return a.a.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', role: 'img', viewBox: '0 0 512 512' },
          a.a.createElement('title', null, 'Location'),
          a.a.createElement(
            'g',
            null,
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d:
                    'M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257    c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22    C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34    C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180    C406.1,207.121,398.689,233.688,384.866,256.818z',
              }),
            ),
          ),
          a.a.createElement(
            'g',
            null,
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d:
                    'M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z     M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2    C316.1,212.683,289.784,240.2,256,240.2z',
              }),
            ),
          ),
        );
      };
      var g = function() {
        return a.a.createElement(
          'svg',
          { id: 'logo', xmlns: 'http://www.w3.org/2000/svg', role: 'img', viewBox: '0 0 84 96' },
          a.a.createElement('title', null, 'Logo'),
          a.a.createElement(
            'g',
            { transform: 'translate(-8.000000, -2.000000)' },
            a.a.createElement(
              'g',
              { transform: 'translate(11.000000, 5.000000)' },
              a.a.createElement('path', {
                d:
                    'M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z',
                fill: 'currentColor',
              }),
              a.a.createElement('polygon', {
                id: 'Shape',
                stroke: 'currentColor',
                strokeWidth: '5',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                points: '39 0 0 22 0 67 39 90 78 68 78 23',
              }),
            ),
          ),
        );
      };
      var v = function() {
        return a.a.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            role: 'img',
            x: '0px',
            y: '0px',
            viewBox: '0 0 512.001 512.001',
          },
          a.a.createElement('title', null, 'Google Play Store'),
          a.a.createElement('path', {
            d:
                'M464.252,212.09L99.624,8.07C84.247-1.873,64.754-2.691,48.574,5.967C32.183,14.74,22,31.737,22,50.329v411.342 c0,18.592,10.183,35.59,26.573,44.361c16.097,8.617,35.593,7.891,51.052-2.101l364.628-204.022 c16.121-9.02,25.747-25.435,25.747-43.908C490,237.527,480.374,221.111,464.252,212.09z M341.677,181.943l-50.339,50.339 L113.108,54.051L341.677,181.943z M55.544,467.323V44.676L267.621,256L55.544,467.323z M113.108,457.949l178.232-178.231 l50.339,50.339L113.108,457.949z M447.874,270.637l-75.779,42.401l-57.038-57.037l57.037-57.037l75.778,42.4 c7.746,4.335,8.583,11.68,8.583,14.637C456.455,258.958,455.62,266.302,447.874,270.637z',
          }),
        );
      };
      var b = function() {
        return a.a.createElement(
          'svg',
          {
            'aria-label': 'stars',
            viewBox: '0 0 14 16',
            version: '1.1',
            width: '14',
            height: '16',
            role: 'img',
          },
          a.a.createElement('path', {
            fillRule: 'evenodd',
            d:
                'M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z',
          }),
        );
      };
      var y = function() {
        return a.a.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', role: 'img', viewBox: '0 0 612 612' },
          a.a.createElement('title', null, 'Twitter'),
          a.a.createElement('path', {
            d:
                'M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411 c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513 c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101 c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104 c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194 c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485 c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z',
          }),
        );
      };
      var w = function() {
        return a.a.createElement(
          'svg',
          {
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 512.001 512.001',
            enableBackground: 'new 0 0 512.001 512.001',
          },
          a.a.createElement('path', {
            d:
                'm413.951,200.174c-2.828-5.047-8.164-8.174-13.953-8.174h-110.608l14.555-174.668c0.609-7.312-3.836-14.1-10.781-16.467-6.914-2.383-14.609,0.282-18.594,6.446l-175.998,271.997c-3.188,4.922-3.43,11.194-0.625,16.342 2.805,5.148 8.195,8.35 14.054,8.35h110.718l-14.672,190.773c-0.57,7.375 3.992,14.18 11.031,16.454 1.625,0.523 3.281,0.774 4.922,0.774 5.453,0 10.687-2.804 13.656-7.656l175.998-287.998c3.016-4.937 3.133-11.126 0.297-16.173zm-168.896,230.685l10.898-141.63c0.344-4.445-1.187-8.829-4.211-12.103-3.031-3.265-7.289-5.126-11.742-5.126h-98.585l125.335-193.707-10.695,128.382c-0.367,4.461 1.141,8.865 4.172,12.162 3.031,3.29 7.296,5.163 11.773,5.163h99.468l-126.413,206.859z',
          }),
        );
      };
    },
    gDik: function(e, t) {
      e.exports =
        Math.sign ||
        function(e) {
          return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1;
        };
    },
    gp9K: function(e, t, n) {
      e.exports = `${n.p  }static/SFMono-SemiboldItalic-2fd68bed64aeaceadc6402efc4d82767.woff2`;
    },
    gx6d: function(e, t, n) {
      const r = n('1Llc');
      const a = n('kiRH');
      e.exports = function(e) {
        if (void 0 === e) {return 0;}
        const t = r(e);
        const n = a(t);
        if (t !== n) {throw RangeError('Wrong length!');}
        return n;
      };
    },
    'hip/': function(e, t, n) {
      e.exports = `${n.p  }static/Calibre-SemiboldItalic-8f3e4b3eaed73e67bbc4fc81f308a35f.woff2`;
    },
    klQ5: function(e, t, n) {
      const r = n('emib');
      const a = n('TUPI');
      const i = n('rjfK').f;
      const o = n('chL8').f;
      const s = n('mhTz');
      const c = n('lb9j');
      let l = r.RegExp;
      const u = l;
      const d = l.prototype;
      const f = /a/g;
      const p = /a/g;
      const h = new l(f) !== f;
      if (
        n('QPJK') &&
        (!h ||
          n('96qb')(function() {
            return (p[n('sOol')('match')] = !1), l(f) != f || l(p) == p || '/a/i' != l(f, 'i');
          }))
      ) {
        l = function(e, t) {
          const n = this instanceof l;
          let r = s(e);
          const i = void 0 === t;
          return !n && r && e.constructor === l && i
            ? e
            : a(
              h
                ? new u(r && !i ? e.source : e, t)
                : u((r = e instanceof l) ? e.source : e, r && i ? c.call(e) : t),
              n ? this : d,
              l,
            );
        };
        for (
          let m = function(e) {
              (e in l) ||
                i(l, e, {
                  configurable: !0,
                  get: function() {
                    return u[e];
                  },
                  set: function(t) {
                    u[e] = t;
                  },
                });
            },
            g = o(u),
            v = 0;
          g.length > v;

        ) {m(g[v++]);}
        (d.constructor = l), (l.prototype = d), n('IYdN')(r, 'RegExp', l);
      }
      n('to/b')('RegExp');
    },
    lFjb: function(e, t, n) {
      'use strict';
      const r = n('P8UN');
      const a = n('5SQf');
      const i = n('1Llc');
      const o = n('kiRH');
      const s = [].lastIndexOf;
      const c = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
      r(r.P + r.F * (c || !n('h/qr')(s)), 'Array', {
        lastIndexOf: function(e) {
          if (c) {return s.apply(this, arguments) || 0;}
          const t = a(this);
          const n = o(t.length);
          let r = n - 1;
          for (
            arguments.length > 1 && (r = Math.min(r, i(arguments[1]))), r < 0 && (r = n + r);
            r >= 0;
            r--
          ) {if (r in t && t[r] === e) {return r || 0;}}
          return -1;
        },
      });
    },
    mVfl: function(e, t, n) {
      e.exports = `${n.p  }static/Calibre-Medium-115d37180a9c07e2f480ca81b032babe.woff`;
    },
    mknM: function(e) {
      e.exports = JSON.parse(
        '{"data":{"avatar":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'400\'%20height=\'400\'%20viewBox=\'0%200%20400%20400\'%20preserveAspectRatio=\'none\'%3e%3cpath%20d=\'M180%2053l-8%203c-6%201-12%205-12%206l-4%203c-7%205-24%2024-28%2032a212%20212%200%2000-14%2097c1%2017%202%2019%202%2014l1-6v5l1%2011c0%206%201%2013%202%2012l1-3c0-4%202-4%202%200l2%202v-4l-1-10-2-8-1-7-2-15c-2-11-2-11%200-9l1%206%201%203c1-1%202%201%202%207l1%204%201%202%201%201%202%204%203%205c2%201%202%201%201-4a176%20176%200%20011-41h1l3%207c4%2017%2013%2023%2032%2021h7l-1%203a1390%201390%200%2001-1%207c0%203%2014%206%2017%204h1c-1%203%2012%203%2015%200%201-1%203-2%208-2l8-1c2-3%203-10%201-12h9c12%200%2018-1%2024-7%204-4%208-14%208-18%200-2%200-2%201-1l1%208%201%207%201%203-1%202-1%201c0%202%200%202%202%201%203-1%205-7%204-10%200-2%203-1%203%201%201%201%201%201%203-2s4-15%202-14v-8c2-1-2-19-7-28l-2-9c1-2%200-5-3-10l-3-8c0-3-6-11-12-18-7-7-24-20-27-20l-14-7-8-1-16-1c-5%200-7%200-9%202m19%2033c0%202-2%204-5%202h-3l-2-1-2-1-2%201-3%201h-5l-6%202-3%202-2%202c-2%201-2%201-2%203%201%202%201%202-1%203-2%200-3%201-4%203-1%205-1%206-3%206l-2%202-1%201-3%209-1%204-1%201-3%2010v5l-1%205-1%202c-1%202-1%202%204%202%205-1%205-1%205%201l-3%202c-3%200-9%206-9%207v4c-1%205%202%2015%205%2019%208%208%2028%208%2037%200l1-3%201-1%202-5v-6l-1-1h1c2%201%202%201%202-1v-11l-4-1-11-2c-7-1-6-3%200-3%207%200%2016%202%2018%205%203%203%2015%203%2020-1%206-4%2011-5%2032-5%2016%200%2018-1%2016-2l-1-3-1-1-2-4-2-5-3-6c-3-13-5-17-6-17l-1-2c0-2%200-3-2-3-3%200-9-6-9-8l-2-2-2-2c1-1%200-1-1-1l-3-1-2-1-3-1c0-2-1-2-4-1l-3-1c0-1-3-2-4-1h-1c0-2-5-2-5%200h-2c-1-2-1-2-1%200m-46%2052c-3%201-5%204-5%205h3c0-2%201-2%203-1l22%201c0-2-14-7-19-7l-4%202m79%2012c-11%202-12%202-11%204l3%201h1a702%20702%200%200010%202c14%201%2020%204%2010%205l-6%201h-1c2-2%202-2%201-3-1-2-3%200-3%203%200%202-6%205-8%204l-1%201%203%202c4%200%205%201%202%202l-12-2%202-2c2%200%202%200-1-1-3%200-4-1-4-2h-1l-1%201v-1l-1-1c-3%200-2-2%200-2v-1l-1-2h-1c-2%200-1%207%201%2013s5%2011%209%2013c7%203%2028%202%2032-2%207-6%2010-24%205-29-5-4-15-6-27-4m-74%209v1l-2%201h-4l-5%202c-4%201-3%203%202%203l10%201c13%203%2022%203%2023%201%200-2-1-3-3-4-2-2-2-2-2%200%201%201%201%202-1%202-1%201-1%201-1-2%201-3%201-3-2-4s-13-2-15-1m40%204c-2%202-4%206-5%2013a32%2032%200%2001-5%2011c0%203-1%205-3%205-4%201-8%205-7%207%200%203%204%204%206%203%203-1%209-2%2010%200%202%201%2011%201%2014-1h10c2%202%207-2%206-6l-6-6-4-5v-1l-1-2h-1c-1%201-3-3-3-6%201-9-6-16-11-12m-35%2046c-3%202-5%205-5%207-1%203-1%204%202%202%201-1%201-1%203%201l2%203%201%201%203%202%208%206%201%201%2011%207h11c8%200%208-2%200-2l-6-2c-1-2-1-2%201-2s2%200%200-2l-3-2h-4l-4-2c-2%200-2-1-2-3%200-3%201-4%203-1%201%201%201%201%203-1h6l6-1h18c1-2%203-2%203-1%202%203%200%206-5%207l-6%203c0%201%205%200%208-2l10-2%204-3%204-3%202-2c1-1%200-2-15-2l-15%201h-5c-1-2-20-2-20%200l-3%201h-3l-5%201c-5%200-11-3-8-4l2-3%201-1c1%200%203-4%202-5l-6%203m100%2010l-6%2013-4%207%201%208c1%205%202%2012%204%2015%203%209%204%2031%201%2037v10l-1%203c0%202-1%205-4%208-2%203-6%2022-4%2022l3-3c1-3%202-3%202-2l-1%203c-1%202%201%2014%203%2019l1%207a1166%201166%200%200111%2028l3%206h123v-4c0-6-2-14-4-18v-13h-2c-3%202-4%202-6-3-1-3-1-4%201-5%203-4%206-2%208%205l1%205%203%2028c0%205%200%205%202%205s2-1%202-15c0-18-3-31-6-26-1%202-2-1-2-7%201-4-2-12-6-17l-6-7c-4-7-10-11-23-18-7-3-27-11-33-12l-15-6-14-7c-5-2-7-4-16-13l-10-11v-17c-1-15-2-28-4-30l-2%205m-114%2026c2%204%202%204-1%205-5%200-13%206-14%2011l-2%203v1c0%202-3%205-15%2016-8%207-9%208-17%2010l-18%206-17%206c-12%203-23%209-23%2013l-1%201c-1-1-1%200%200%200l-2%206-2%204v-4c1-4%200-5-2-3l-5%204c-5%204-14%2023-14%2030l-2%207a312%20312%200%2000-13%2034v5h23l24-1%202-1%201%201h23l2-2c0-3%201-5%202-5v8h22c19%200%2023%200%2022-2l1-1%201%202%2014%201h14v-2l-1-7c-3-8%201-32%204-30l1-1%203-5c3-2%203-3%203-8v-12l-1-4-2-1%201-1c2-1%202-1%200-2l-2-5c-1-14-1-15%201-15l1-1-2-2c-2%200-2-1-2-7%200-14-1-21-2-23v-2c2%200%204-3%202-4l-1-6c0-6-1-7-3-8s-2-1-1-2%202-1%204%201l4%203%201%201c0%203%205%2011%207%2012%202%200%203%201%203%202l1%201%203%202%206%202%204%201h15c8-1%2012-1%2016-3%208-3%208-4%200-4l-14-1h-1c0%202-3%201-3-1h-2c-2%202-16-1-16-3l-1-1-11-9-3-2-3-1c0-1-1-2-2-1l-1-1-5-4c-3-3-4-3-4-1\'%20fill=\'%2364ffda\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/30a645f7db6038f83287d0c6042d3b2b/0f3a1/me.jpg","srcSet":"/static/30a645f7db6038f83287d0c6042d3b2b/1ada3/me.jpg 125w,\\n/static/30a645f7db6038f83287d0c6042d3b2b/8f7df/me.jpg 250w,\\n/static/30a645f7db6038f83287d0c6042d3b2b/0f3a1/me.jpg 500w","srcWebp":"/static/30a645f7db6038f83287d0c6042d3b2b/e9589/me.webp","srcSetWebp":"/static/30a645f7db6038f83287d0c6042d3b2b/549da/me.webp 125w,\\n/static/30a645f7db6038f83287d0c6042d3b2b/7ca0e/me.webp 250w,\\n/static/30a645f7db6038f83287d0c6042d3b2b/e9589/me.webp 500w","sizes":"(max-width: 500px) 100vw, 500px"}}}}}',
      );
    },
    'n+Nz': function(e, t, n) {
      e.exports = `${n.p  }static/Calibre-MediumItalic-4afe8032c647b57de924543c052e0ee4.woff`;
    },
    nLfd: function(e, t, n) {
      'use strict';
      n('R48M'),
      n('EMED'),
      n('n7j8'),
      n('1dPr'),
      n('OeI1'),
      n('U6Bt'),
      n('wZFJ'),
      n('HXzo'),
      n('AqHK'),
      n('Ll4R'),
      n('sc67'),
      n('JHok'),
      n('rzGZ'),
      n('Dq+y'),
      n('Ggvi'),
      n('q8oJ'),
      n('C9fy'),
      n('8npG');
      const r = function(e) {
        return 'object' === typeof window.Node
          ? e instanceof window.Node
          : null !== e &&
              'object' === typeof e &&
              'number' === typeof e.nodeType &&
              'string' === typeof e.nodeName;
      };
      const a = function(e) {
        const t = Object.prototype.toString.call(e);
        return 'object' === typeof window.NodeList
          ? e instanceof window.NodeList
          : null !== e &&
              'object' === typeof e &&
              'number' === typeof e.length &&
              /^\[object (HTMLCollection|NodeList|Object)\]$/.test(t) &&
              (0 === e.length || r(e[0]));
      };
      const i = function(e, t) {
        if ((void 0 === t && (t = document), e instanceof Array)) {return e.filter(r);}
        if (r(e)) {return [e];}
        if (a(e)) {return Array.prototype.slice.call(e);}
        if ('string' === typeof e) {
          try {
            const n = t.querySelectorAll(e);
            return Array.prototype.slice.call(n);
          } catch (i) {
            return [];
          }
        }
        return [];
      };
      n('HQhv');
      function o(e) {
        if (e.constructor !== Array) {throw new TypeError('Expected array.');}
        if (16 === e.length) {return e;}
        if (6 === e.length) {
          const t = s();
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
        throw new RangeError('Expected array with either 6 or 16 values.');
      }
      function s() {
        for (var e = [], t = 0; t < 16; t++) {t % 5 == 0 ? e.push(1) : e.push(0);}
        return e;
      }
      function c(e, t) {
        for (var n = o(e), r = o(t), a = [], i = 0; i < 4; i++) {
          for (let s = [n[i], n[i + 4], n[i + 8], n[i + 12]], c = 0; c < 4; c++) {
            const l = 4 * c;
            const u = [r[l], r[l + 1], r[l + 2], r[l + 3]];
            const d = s[0] * u[0] + s[1] * u[1] + s[2] * u[2] + s[3] * u[3];
            a[i + l] = d;
          }
        }
        return a;
      }
      function l(e) {
        if ('string' === typeof e) {
          const t = e.match(/matrix(3d)?\(([^)]+)\)/);
          if (t) {return o(t[2].split(', ').map(parseFloat));}
        }
        return s();
      }
      function u(e) {
        const t = (Math.PI / 180) * e;
        const n = s();
        return (n[0] = n[5] = Math.cos(t)), (n[1] = n[4] = Math.sin(t)), (n[4] *= -1), n;
      }
      function d(e, t) {
        const n = s();
        return (n[0] = e), (n[5] = 'number' === typeof t ? t : e), n;
      }
      let f;
      var p =
          ((f = Date.now()),
          function(e) {
            const t = Date.now();
            t - f > 16
              ? ((f = t), e(t))
              : setTimeout(function() {
                return p(e);
              }, 0);
          });
      const h =
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          p;
      const m = {
        delay: 0,
        distance: '0',
        duration: 600,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        interval: 0,
        opacity: 0,
        origin: 'bottom',
        rotate: { x: 0, y: 0, z: 0 },
        scale: 1,
        cleanup: !1,
        container: document.documentElement,
        desktop: !0,
        mobile: !0,
        reset: !1,
        useDelay: 'always',
        viewFactor: 0,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
        afterReset: function() {},
        afterReveal: function() {},
        beforeReset: function() {},
        beforeReveal: function() {},
      };
      const g = {
        success: function() {
          document.documentElement.classList.add('sr'),
          document.body
            ? (document.body.style.height = '100%')
            : document.addEventListener('DOMContentLoaded', function() {
              document.body.style.height = '100%';
            });
        },
        failure: function() {
          return (
            document.documentElement.classList.remove('sr'),
            {
              clean: function() {},
              destroy: function() {},
              reveal: function() {},
              sync: function() {},
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
          (e.constructor === Object || '[object Object]' === Object.prototype.toString.call(e))
        );
      }
      function b(e, t) {
        if (v(e)) {
          return Object.keys(e).forEach(function(n) {
            return t(e[n], n, e);
          });
        }
        if (e instanceof Array) {
          return e.forEach(function(n, r) {
            return t(n, r, e);
          });
        }
        throw new TypeError('Expected either an array or object literal.');
      }
      function y(e) {
        for (var t = [], n = arguments.length - 1; n-- > 0; ) {t[n] = arguments[n + 1];}
        if (this.constructor.debug && console) {
          let r = `%cScrollReveal: ${  e}`;
          t.forEach(function(e) {
            return (r += `\n — ${  e}`);
          }),
          console.log(r, 'color: #ea654b;');
        }
      }
      function w() {
        const e = this;
        const t = { active: [], stale: [] };
        const n = { active: [], stale: [] };
        const r = { active: [], stale: [] };
        try {
          b(i('[data-sr-id]'), function(e) {
            const n = parseInt(e.getAttribute('data-sr-id'));
            t.active.push(n);
          });
        } catch (a) {
          throw a;
        }
        b(this.store.elements, function(e) {
          -1 === t.active.indexOf(e.id) && t.stale.push(e.id);
        }),
        b(t.stale, function(t) {
          return delete e.store.elements[t];
        }),
        b(this.store.elements, function(e) {
          -1 === r.active.indexOf(e.containerId) && r.active.push(e.containerId),
          e.hasOwnProperty('sequence') &&
                -1 === n.active.indexOf(e.sequence.id) &&
                n.active.push(e.sequence.id);
        }),
        b(this.store.containers, function(e) {
          -1 === r.active.indexOf(e.id) && r.stale.push(e.id);
        }),
        b(r.stale, function(t) {
          const n = e.store.containers[t].node;
          n.removeEventListener('scroll', e.delegate),
          n.removeEventListener('resize', e.delegate),
          delete e.store.containers[t];
        }),
        b(this.store.sequences, function(e) {
          -1 === n.active.indexOf(e.id) && n.stale.push(e.id);
        }),
        b(n.stale, function(t) {
          return delete e.store.sequences[t];
        });
      }
      function x(e) {
        let t;
        const n = this;
        try {
          b(i(e), function(e) {
            const r = e.getAttribute('data-sr-id');
            if (null !== r) {
              t = !0;
              const a = n.store.elements[r];
              a.callbackTimer && window.clearTimeout(a.callbackTimer.clock),
              e.setAttribute('style', a.styles.inline.generated),
              e.removeAttribute('data-sr-id'),
              delete n.store.elements[r];
            }
          });
        } catch (r) {
          return y.call(this, 'Clean failed.', r.message);
        }
        if (t) {
          try {
            w.call(this);
          } catch (r) {
            return y.call(this, 'Clean failed.', r.message);
          }
        }
      }
      function E() {
        const e = this;
        b(this.store.elements, function(e) {
          e.node.setAttribute('style', e.styles.inline.generated),
          e.node.removeAttribute('data-sr-id');
        }),
        b(this.store.containers, function(t) {
          const n = t.node === document.documentElement ? window : t.node;
          n.removeEventListener('scroll', e.delegate),
          n.removeEventListener('resize', e.delegate);
        }),
        (this.store = { containers: {}, elements: {}, history: [], sequences: {} });
      }
      const S = (function() {
        let e = {};
        const t = document.documentElement.style;
        function n(n, r) {
          if ((void 0 === r && (r = t), n && 'string' === typeof n)) {
            if (e[n]) {return e[n];}
            if ('string' === typeof r[n]) {return (e[n] = n);}
            if ('string' === typeof r[`-webkit-${  n}`]) {return (e[n] = `-webkit-${  n}`);}
            throw new RangeError(`Unable to find "${  n  }" style property.`);
          }
          throw new TypeError('Expected a string.');
        }
        return (
          (n.clearCache = function() {
            return (e = {});
          }),
          n
        );
      })();
      function k(e) {
        const t = window.getComputedStyle(e.node);
        const n = t.position;
        const r = e.config;
        const a = {};
        const i = (e.node.getAttribute('style') || '').match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];
        (a.computed = i
          ? `${i
            .map(function(e) {
              return e.trim();
            })
            .join('; ')  };`
          : ''),
        (a.generated = i.some(function(e) {
          return e.match(/visibility\s?:\s?visible/i);
        })
          ? a.computed
          : `${i
            .concat(['visibility: visible'])
            .map(function(e) {
              return e.trim();
            })
            .join('; ')  };`);
        let o;
        let f;
        let p;
        const h = parseFloat(t.opacity);
        const m = isNaN(parseFloat(r.opacity)) ? parseFloat(t.opacity) : parseFloat(r.opacity);
        const g = {
          computed: h !== m ? `opacity: ${  h  };` : '',
          generated: h !== m ? `opacity: ${  m  };` : '',
        };
        const v = [];
        if (parseFloat(r.distance)) {
          const b = 'top' === r.origin || 'bottom' === r.origin ? 'Y' : 'X';
          let y = r.distance;
          ('top' !== r.origin && 'left' !== r.origin) || (y = /^-/.test(y) ? y.substr(1) : `-${  y}`);
          const w = y.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g);
          const x = w[0];
          switch (w[1]) {
            case 'em':
              y = parseInt(t.fontSize) * x;
              break;
            case 'px':
              y = x;
              break;
            case '%':
              y =
                'Y' === b
                  ? (e.node.getBoundingClientRect().height * x) / 100
                  : (e.node.getBoundingClientRect().width * x) / 100;
              break;
            default:
              throw new RangeError('Unrecognized or missing distance unit.');
          }
          'Y' === b
            ? v.push(
              (function(e) {
                const t = s();
                return (t[13] = e), t;
              })(y),
            )
            : v.push(
              (function(e) {
                const t = s();
                return (t[12] = e), t;
              })(y),
            );
        }
        r.rotate.x &&
          v.push(
            ((o = r.rotate.x),
            (f = (Math.PI / 180) * o),
            ((p = s())[5] = p[10] = Math.cos(f)),
            (p[6] = p[9] = Math.sin(f)),
            (p[9] *= -1),
            p),
          ),
        r.rotate.y &&
            v.push(
              (function(e) {
                const t = (Math.PI / 180) * e;
                const n = s();
                return (n[0] = n[10] = Math.cos(t)), (n[2] = n[8] = Math.sin(t)), (n[2] *= -1), n;
              })(r.rotate.y),
            ),
        r.rotate.z && v.push(u(r.rotate.z)),
        1 !== r.scale && (0 === r.scale ? v.push(d(2e-4)) : v.push(d(r.scale)));
        const E = {};
        if (v.length) {
          (E.property = S('transform')),
          (E.computed = { raw: t[E.property], matrix: l(t[E.property]) }),
          v.unshift(E.computed.matrix);
          const k = v.reduce(c);
          E.generated = {
            initial: `${E.property  }: matrix3d(${  k.join(', ')  });`,
            final: `${E.property  }: matrix3d(${  E.computed.matrix.join(', ')  });`,
          };
        } else {E.generated = { initial: '', final: '' };}
        const C = {};
        if (g.generated || E.generated.initial) {
          (C.property = S('transition')), (C.computed = t[C.property]), (C.fragments = []);
          const O = r.delay;
          const j = r.duration;
          const A = r.easing;
          g.generated &&
            C.fragments.push({
              delayed: `opacity ${  j / 1e3  }s ${  A  } ${  O / 1e3  }s`,
              instant: `opacity ${  j / 1e3  }s ${  A  } 0s`,
            }),
          E.generated.initial &&
              C.fragments.push({
                delayed: `${E.property  } ${  j / 1e3  }s ${  A  } ${  O / 1e3  }s`,
                instant: `${E.property  } ${  j / 1e3  }s ${  A  } 0s`,
              }),
          C.computed &&
              !C.computed.match(/all 0s|none 0s/) &&
              C.fragments.unshift({ delayed: C.computed, instant: C.computed });
          const I = C.fragments.reduce(
            function(e, t, n) {
              return (
                (e.delayed += 0 === n ? t.delayed : `, ${  t.delayed}`),
                (e.instant += 0 === n ? t.instant : `, ${  t.instant}`),
                e
              );
            },
            { delayed: '', instant: '' },
          );
          C.generated = {
            delayed: `${C.property  }: ${  I.delayed  };`,
            instant: `${C.property  }: ${  I.instant  };`,
          };
        } else {C.generated = { delayed: '', instant: '' };}
        return { inline: a, opacity: g, position: n, transform: E, transition: C };
      }
      function C(e, t) {
        void 0 === t && (t = {});
        const n = t.pristine || this.pristine;
        const r =
            'always' === e.config.useDelay ||
            ('onload' === e.config.useDelay && n) ||
            ('once' === e.config.useDelay && !e.seen);
        const a = e.visible && !e.revealed;
        const i = !e.visible && e.revealed && e.config.reset;
        return t.reveal || a ? O.call(this, e, r) : t.reset || i ? j.call(this, e) : void 0;
      }
      function O(e, t) {
        const n = [
          e.styles.inline.generated,
          e.styles.opacity.computed,
          e.styles.transform.generated.final,
        ];
        t
          ? n.push(e.styles.transition.generated.delayed)
          : n.push(e.styles.transition.generated.instant),
        (e.revealed = e.seen = !0),
        e.node.setAttribute(
          'style',
          n
            .filter(function(e) {
              return '' !== e;
            })
            .join(' '),
        ),
        A.call(this, e, t);
      }
      function j(e) {
        const t = [
          e.styles.inline.generated,
          e.styles.opacity.generated,
          e.styles.transform.generated.initial,
          e.styles.transition.generated.instant,
        ];
        (e.revealed = !1),
        e.node.setAttribute(
          'style',
          t
            .filter(function(e) {
              return '' !== e;
            })
            .join(' '),
        ),
        A.call(this, e);
      }
      function A(e, t) {
        const n = this;
        const r = t ? e.config.duration + e.config.delay : e.config.duration;
        const a = e.revealed ? e.config.beforeReveal : e.config.beforeReset;
        const i = e.revealed ? e.config.afterReveal : e.config.afterReset;
        let o = 0;
        e.callbackTimer &&
          ((o = Date.now() - e.callbackTimer.start), window.clearTimeout(e.callbackTimer.clock)),
        a(e.node),
        (e.callbackTimer = {
          start: Date.now(),
          clock: window.setTimeout(function() {
            i(e.node),
            (e.callbackTimer = null),
            e.revealed && !e.config.reset && e.config.cleanup && x.call(n, e.node);
          }, r - o),
        });
      }
      let I;
      const T =
          ((I = 0),
          function() {
            return I++;
          });
      function M(e, t) {
        if ((void 0 === t && (t = this.pristine), !e.visible && e.revealed && e.config.reset)) {return C.call(this, e, { reset: !0 });}
        const n = this.store.sequences[e.sequence.id];
        const r = e.sequence.index;
        if (n) {
          const a = new L(n, 'visible', this.store);
          const i = new L(n, 'revealed', this.store);
          if (((n.models = { visible: a, revealed: i }), !i.body.length)) {
            const o = n.members[a.body[0]];
            const s = this.store.elements[o];
            if (s) {
              return (
                z.call(this, n, a.body[0], -1, t),
                z.call(this, n, a.body[0], 1, t),
                C.call(this, s, { reveal: !0, pristine: t })
              );
            }
          }
          if (!n.blocked.head && r === [].concat(i.head).pop() && r >= [].concat(a.body).shift()) {return z.call(this, n, r, -1, t), C.call(this, e, { reveal: !0, pristine: t });}
          if (!n.blocked.foot && r === [].concat(i.foot).shift() && r <= [].concat(a.body).pop()) {return z.call(this, n, r, 1, t), C.call(this, e, { reveal: !0, pristine: t });}
        }
      }
      function N(e) {
        const t = Math.abs(e);
        if (isNaN(t)) {throw new RangeError('Invalid sequence interval.');}
        (this.id = T()),
        (this.interval = Math.max(t, 16)),
        (this.members = []),
        (this.models = {}),
        (this.blocked = { head: !1, foot: !1 });
      }
      function L(e, t, n) {
        const r = this;
        (this.head = []),
        (this.body = []),
        (this.foot = []),
        b(e.members, function(e, a) {
          const i = n.elements[e];
          i && i[t] && r.body.push(a);
        }),
        this.body.length &&
            b(e.members, function(e, a) {
              const i = n.elements[e];
              i && !i[t] && (a < r.body[0] ? r.head.push(a) : r.foot.push(a));
            });
      }
      function z(e, t, n, r) {
        const a = this;
        const i = ['head', null, 'foot'][1 + n];
        const o = e.members[t + n];
        const s = this.store.elements[o];
        (e.blocked[i] = !0),
        setTimeout(function() {
          (e.blocked[i] = !1), s && M.call(a, s, r);
        }, e.interval);
      }
      function P() {
        const e = this;
        w.call(this),
        b(this.store.elements, function(e) {
          const t = [e.styles.inline.generated];
          e.visible
            ? (t.push(e.styles.opacity.computed),
            t.push(e.styles.transform.generated.final),
            (e.revealed = !0))
            : (t.push(e.styles.opacity.generated),
            t.push(e.styles.transform.generated.initial),
            (e.revealed = !1)),
          e.node.setAttribute(
            'style',
            t
              .filter(function(e) {
                return '' !== e;
              })
              .join(' '),
          );
        }),
        b(this.store.containers, function(t) {
          const n = t.node === document.documentElement ? window : t.node;
          n.addEventListener('scroll', e.delegate), n.addEventListener('resize', e.delegate);
        }),
        this.delegate(),
        (this.initTimeout = null);
      }
      function R(e) {
        return void 0 === e && (e = navigator.userAgent), /Android|iPhone|iPad|iPod/i.test(e);
      }
      function _(e) {
        for (var t = [], n = arguments.length - 1; n-- > 0; ) {t[n] = arguments[n + 1];}
        if (v(e)) {
          return (
            b(t, function(t) {
              b(t, function(t, n) {
                v(t) ? ((e[n] && v(e[n])) || (e[n] = {}), _(e[n], t)) : (e[n] = t);
              });
            }),
            e
          );
        }
        throw new TypeError('Target must be an object literal.');
      }
      function F(e, t, n) {
        const r = this;
        void 0 === t && (t = {}), void 0 === n && (n = !1);
        let a;
        const o = [];
        const s = t.interval || m.interval;
        try {
          s && (a = new N(s));
          const c = i(e);
          if (!c.length) {throw new Error('Invalid reveal target.');}
          const l = c.reduce(function(e, n) {
            const s = {};
            const c = n.getAttribute('data-sr-id');
            c
              ? (_(s, r.store.elements[c]), s.node.setAttribute('style', s.styles.inline.computed))
              : ((s.id = T()), (s.node = n), (s.seen = !1), (s.revealed = !1), (s.visible = !1));
            const l = _({}, s.config || r.defaults, t);
            if ((!l.mobile && R()) || (!l.desktop && !R())) {return c && x.call(r, s), e;}
            let u;
            const d = i(l.container)[0];
            if (!d) {throw new Error('Invalid container.');}
            return d.contains(n)
              ? (null ===
                  (u = (function(e) {
                    const t = [];
                    let n = arguments.length - 1;
                    for (; n-- > 0; ) {t[n] = arguments[n + 1];}
                    let r = null;
                    return (
                      b(t, function(t) {
                        b(t, function(t) {
                          null === r && t.node === e && (r = t.id);
                        });
                      }),
                      r
                    );
                  })(d, o, r.store.containers)) && ((u = T()), o.push({ id: u, node: d })),
              (s.config = l),
              (s.containerId = u),
              (s.styles = k(s)),
              a && ((s.sequence = { id: a.id, index: a.members.length }), a.members.push(s.id)),
              e.push(s),
              e)
              : e;
          }, []);
          b(l, function(e) {
            (r.store.elements[e.id] = e), e.node.setAttribute('data-sr-id', e.id);
          });
        } catch (u) {
          return y.call(this, 'Reveal failed.', u.message);
        }
        b(o, function(e) {
          r.store.containers[e.id] = { id: e.id, node: e.node };
        }),
        a && (this.store.sequences[a.id] = a),
        !0 !== n &&
            (this.store.history.push({ target: e, options: t }),
            this.initTimeout && window.clearTimeout(this.initTimeout),
            (this.initTimeout = window.setTimeout(P.bind(this), 0)));
      }
      function H() {
        const e = this;
        b(this.store.history, function(t) {
          F.call(e, t.target, t.options, !0);
        }),
        P.call(this);
      }
      const D =
        Math.sign ||
        function(e) {
          return (e > 0) - (e < 0) || +e;
        };
      function B(e, t) {
        const n = t ? e.node.clientHeight : e.node.offsetHeight;
        const r = t ? e.node.clientWidth : e.node.offsetWidth;
        let a = 0;
        let i = 0;
        let o = e.node;
        do {
          isNaN(o.offsetTop) || (a += o.offsetTop),
          isNaN(o.offsetLeft) || (i += o.offsetLeft),
          (o = o.offsetParent);
        } while (o);
        return { bounds: { top: a, right: i + r, bottom: a + n, left: i }, height: n, width: r };
      }
      function q(e) {
        let t; let n;
        return (
          e.node === document.documentElement
            ? ((t = window.pageYOffset), (n = window.pageXOffset))
            : ((t = e.node.scrollTop), (n = e.node.scrollLeft)),
          { top: t, left: n }
        );
      }
      function V(e) {
        void 0 === e && (e = {});
        const t = this.store.containers[e.containerId];
        if (t) {
          const n = Math.max(0, Math.min(1, e.config.viewFactor));
          const r = e.config.viewOffset;
          const a = e.geometry.bounds.top + e.geometry.height * n;
          const i = e.geometry.bounds.right - e.geometry.width * n;
          const o = e.geometry.bounds.bottom - e.geometry.height * n;
          const s = e.geometry.bounds.left + e.geometry.width * n;
          const c = t.geometry.bounds.top + t.scroll.top + r.top;
          const l = t.geometry.bounds.right + t.scroll.left - r.right;
          const u = t.geometry.bounds.bottom + t.scroll.top - r.bottom;
          const d = t.geometry.bounds.left + t.scroll.left + r.left;
          return (a < u && i > d && o > c && s < l) || 'fixed' === e.styles.position;
        }
      }
      function W(e, t) {
        const n = this;
        void 0 === e && (e = { type: 'init' }),
        void 0 === t && (t = this.store.elements),
        h(function() {
          const r = 'init' === e.type || 'resize' === e.type;
          b(n.store.containers, function(e) {
            r && (e.geometry = B.call(n, e, !0));
            const t = q.call(n, e);
            e.scroll &&
                (e.direction = { x: D(t.left - e.scroll.left), y: D(t.top - e.scroll.top) }),
            (e.scroll = t);
          }),
          b(t, function(e) {
            r && (e.geometry = B.call(n, e)), (e.visible = V.call(n, e));
          }),
          b(t, function(e) {
            e.sequence ? M.call(n, e) : C.call(n, e);
          }),
          (n.pristine = !1);
        });
      }
      let U; let G; let J; let Y; let $; let K; let Q; let X;
      function Z(e) {
        let t;
        if (
          (void 0 === e && (e = {}), void 0 === this || Object.getPrototypeOf(this) !== Z.prototype)
        ) {return new Z(e);}
        if (!Z.isSupported()) {
          return (
            y.call(this, 'Instantiation failed.', 'This browser is not supported.'), g.failure()
          );
        }
        try {
          t = _({}, K || m, e);
        } catch (n) {
          return y.call(this, 'Invalid configuration.', n.message), g.failure();
        }
        try {
          if (!i(t.container)[0]) {throw new Error('Invalid container.');}
        } catch (n) {
          return y.call(this, n.message), g.failure();
        }
        return (!(K = t).mobile && R()) || (!K.desktop && !R())
          ? (y.call(
            this,
            'This device is disabled.',
            `desktop: ${  K.desktop}`,
            `mobile: ${  K.mobile}`,
          ),
          g.failure())
          : (g.success(),
          (this.store = { containers: {}, elements: {}, history: [], sequences: {} }),
          (this.pristine = !0),
          (U = U || W.bind(this)),
          (G = G || E.bind(this)),
          (J = J || F.bind(this)),
          (Y = Y || x.bind(this)),
          ($ = $ || H.bind(this)),
          Object.defineProperty(this, 'delegate', {
            get: function() {
              return U;
            },
          }),
          Object.defineProperty(this, 'destroy', {
            get: function() {
              return G;
            },
          }),
          Object.defineProperty(this, 'reveal', {
            get: function() {
              return J;
            },
          }),
          Object.defineProperty(this, 'clean', {
            get: function() {
              return Y;
            },
          }),
          Object.defineProperty(this, 'sync', {
            get: function() {
              return $;
            },
          }),
          Object.defineProperty(this, 'defaults', {
            get: function() {
              return K;
            },
          }),
          Object.defineProperty(this, 'version', {
            get: function() {
              return '4.0.6';
            },
          }),
          Object.defineProperty(this, 'noop', {
            get: function() {
              return !1;
            },
          }),
          X || (X = this));
      }
      (Z.isSupported = function() {
        return (
          (function() {
            const e = document.documentElement.style;
            return 'transform' in e || 'WebkitTransform' in e;
          })() &&
          (function() {
            const e = document.documentElement.style;
            return 'transition' in e || 'WebkitTransition' in e;
          })()
        );
      }),
      Object.defineProperty(Z, 'debug', {
        get: function() {
          return Q || !1;
        },
        set: function(e) {
          return (Q = 'boolean' === typeof e ? e : Q);
        },
      }),
      Z();
      const ee = 'undefined' === typeof window ? null : Z();
      t.a = ee;
    },
    'o/VY': function(e, t, n) {
      e.exports = `${n.p  }static/Calibre-Regular-e08232148510aade507c2af9bb66acd0.woff`;
    },
    pQ8y: function(e, t, n) {
      'use strict';
      n('HQhv'), n('JHok');
      const r = n('wx14');
      const a = n('zLVn');
      const i = n('dI71');
      n('17x9'), n('sc67');
      n('klQ5'), n('sC2a');
      function o(e, t) {
        return e
          .replace(new RegExp(`(^|\\s)${  t  }(?:\\s|$)`, 'g'), '$1')
          .replace(/\s+/g, ' ')
          .replace(/^\s*|\s*$/g, '');
      }
      const s = n('q1tI');
      const c = n.n(s);
      const l = n('i8i4');
      const u = n.n(l);
      const d = !1;
      const f = n('0PSK');
      const p = (function(e) {
        function t(t, n) {
          let r;
          r = e.call(this, t, n) || this;
          let a;
          const i = n && !n.isMounting ? t.enter : t.appear;
          return (
            (r.appearStatus = null),
            t.in
              ? i
                ? ((a = 'exited'), (r.appearStatus = 'entering'))
                : (a = 'entered')
              : (a = t.unmountOnExit || t.mountOnEnter ? 'unmounted' : 'exited'),
            (r.state = { status: a }),
            (r.nextCallback = null),
            r
          );
        }
        Object(i.a)(t, e),
        (t.getDerivedStateFromProps = function(e, t) {
          return e.in && 'unmounted' === t.status ? { status: 'exited' } : null;
        });
        const n = t.prototype;
        return (
          (n.componentDidMount = function() {
            this.updateStatus(!0, this.appearStatus);
          }),
          (n.componentDidUpdate = function(e) {
            let t = null;
            if (e !== this.props) {
              const n = this.state.status;
              this.props.in
                ? 'entering' !== n && 'entered' !== n && (t = 'entering')
                : ('entering' !== n && 'entered' !== n) || (t = 'exiting');
            }
            this.updateStatus(!1, t);
          }),
          (n.componentWillUnmount = function() {
            this.cancelNextCallback();
          }),
          (n.getTimeouts = function() {
            let e;
            let t;
            let n;
            const r = this.props.timeout;
            return (
              (e = t = n = r),
              null != r &&
                  'number' !== typeof r &&
                  ((e = r.exit), (t = r.enter), (n = void 0 !== r.appear ? r.appear : t)),
              { exit: e, enter: t, appear: n }
            );
          }),
          (n.updateStatus = function(e, t) {
            if ((void 0 === e && (e = !1), null !== t)) {
              this.cancelNextCallback();
              const n = u.a.findDOMNode(this);
              'entering' === t ? this.performEnter(n, e) : this.performExit(n);
            } else {
              this.props.unmountOnExit &&
                  'exited' === this.state.status &&
                  this.setState({ status: 'unmounted' });
            }
          }),
          (n.performEnter = function(e, t) {
            const n = this;
            const r = this.props.enter;
            const a = this.context ? this.context.isMounting : t;
            const i = this.getTimeouts();
            const o = a ? i.appear : i.enter;
            (!t && !r) || d
              ? this.safeSetState({ status: 'entered' }, function() {
                n.props.onEntered(e);
              })
              : (this.props.onEnter(e, a),
              this.safeSetState({ status: 'entering' }, function() {
                n.props.onEntering(e, a),
                n.onTransitionEnd(e, o, function() {
                  n.safeSetState({ status: 'entered' }, function() {
                    n.props.onEntered(e, a);
                  });
                });
              }));
          }),
          (n.performExit = function(e) {
            const t = this;
            const n = this.props.exit;
            const r = this.getTimeouts();
            n && !d
              ? (this.props.onExit(e),
              this.safeSetState({ status: 'exiting' }, function() {
                t.props.onExiting(e),
                t.onTransitionEnd(e, r.exit, function() {
                  t.safeSetState({ status: 'exited' }, function() {
                    t.props.onExited(e);
                  });
                });
              }))
              : this.safeSetState({ status: 'exited' }, function() {
                t.props.onExited(e);
              });
          }),
          (n.cancelNextCallback = function() {
            null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
          }),
          (n.safeSetState = function(e, t) {
            (t = this.setNextCallback(t)), this.setState(e, t);
          }),
          (n.setNextCallback = function(e) {
            const t = this;
            let n = !0;
            return (
              (this.nextCallback = function(r) {
                n && ((n = !1), (t.nextCallback = null), e(r));
              }),
              (this.nextCallback.cancel = function() {
                n = !1;
              }),
              this.nextCallback
            );
          }),
          (n.onTransitionEnd = function(e, t, n) {
            this.setNextCallback(n);
            const r = null == t && !this.props.addEndListener;
            e && !r
              ? (this.props.addEndListener && this.props.addEndListener(e, this.nextCallback),
              null != t && setTimeout(this.nextCallback, t))
              : setTimeout(this.nextCallback, 0);
          }),
          (n.render = function() {
            const e = this.state.status;
            if ('unmounted' === e) {return null;}
            const t = this.props;
            const n = t.children;
            const r = Object(a.a)(t, ['children']);
            if (
              (delete r.in,
              delete r.mountOnEnter,
              delete r.unmountOnExit,
              delete r.appear,
              delete r.enter,
              delete r.exit,
              delete r.timeout,
              delete r.addEndListener,
              delete r.onEnter,
              delete r.onEntering,
              delete r.onEntered,
              delete r.onExit,
              delete r.onExiting,
              delete r.onExited,
              'function' === typeof n)
            ) {return c.a.createElement(f.a.Provider, { value: null }, n(e, r));}
            const i = c.a.Children.only(n);
            return c.a.createElement(f.a.Provider, { value: null }, c.a.cloneElement(i, r));
          }),
          t
        );
      })(c.a.Component);
      function h() {}
      (p.contextType = f.a),
      (p.propTypes = {}),
      (p.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: h,
        onEntering: h,
        onEntered: h,
        onExit: h,
        onExiting: h,
        onExited: h,
      }),
      (p.UNMOUNTED = 0),
      (p.EXITED = 1),
      (p.ENTERING = 2),
      (p.ENTERED = 3),
      (p.EXITING = 4);
      const m = p;
      const g = function(e, t) {
        return (
          e &&
            t &&
            t.split(' ').forEach(function(t) {
              return (
                (r = t),
                void ((n = e).classList
                  ? n.classList.remove(r)
                  : 'string' === typeof n.className
                    ? (n.className = o(n.className, r))
                    : n.setAttribute('class', o((n.className && n.className.baseVal) || '', r)))
              );
              let n; let r;
            })
        );
      };
      const v = (function(e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) {r[a] = arguments[a];}
          return (
            ((t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
              appear: {},
              enter: {},
              exit: {},
            }),
            (t.onEnter = function(e, n) {
              t.removeClasses(e, 'exit'),
              t.addClass(e, n ? 'appear' : 'enter', 'base'),
              t.props.onEnter && t.props.onEnter(e, n);
            }),
            (t.onEntering = function(e, n) {
              const r = n ? 'appear' : 'enter';
              t.addClass(e, r, 'active'), t.props.onEntering && t.props.onEntering(e, n);
            }),
            (t.onEntered = function(e, n) {
              const r = n ? 'appear' : 'enter';
              t.removeClasses(e, r),
              t.addClass(e, r, 'done'),
              t.props.onEntered && t.props.onEntered(e, n);
            }),
            (t.onExit = function(e) {
              t.removeClasses(e, 'appear'),
              t.removeClasses(e, 'enter'),
              t.addClass(e, 'exit', 'base'),
              t.props.onExit && t.props.onExit(e);
            }),
            (t.onExiting = function(e) {
              t.addClass(e, 'exit', 'active'), t.props.onExiting && t.props.onExiting(e);
            }),
            (t.onExited = function(e) {
              t.removeClasses(e, 'exit'),
              t.addClass(e, 'exit', 'done'),
              t.props.onExited && t.props.onExited(e);
            }),
            (t.getClassNames = function(e) {
              const n = t.props.classNames;
              const r = 'string' === typeof n;
              const a = r ? `${  r && n ? `${n  }-` : ''  }${e}` : n[e];
              return {
                baseClassName: a,
                activeClassName: r ? `${a  }-active` : n[`${e  }Active`],
                doneClassName: r ? `${a  }-done` : n[`${e  }Done`],
              };
            }),
            t
          );
        }
        Object(i.a)(t, e);
        const n = t.prototype;
        return (
          (n.addClass = function(e, t, n) {
            let r = this.getClassNames(t)[`${n  }ClassName`];
            'appear' === t &&
                'done' === n &&
                (r += ` ${  this.getClassNames('enter').doneClassName}`),
            'active' === n && e && e.scrollTop,
            (this.appliedClasses[t][n] = r),
            (function(e, t) {
              e &&
                    t &&
                    t.split(' ').forEach(function(t) {
                      return (
                        (r = t),
                        void ((n = e).classList
                          ? n.classList.add(r)
                          : (function(e, t) {
                            return e.classList
                              ? !!t && e.classList.contains(t)
                              : -1 !==
                                    (` ${  e.className.baseVal || e.className  } `).indexOf(
                                      ` ${  t  } `,
                                    );
                          })(n, r) ||
                            ('string' === typeof n.className
                              ? (n.className = `${n.className  } ${  r}`)
                              : n.setAttribute(
                                'class',
                                `${(n.className && n.className.baseVal) || ''  } ${  r}`,
                              )))
                      );
                      let n; let r;
                    });
            })(e, r);
          }),
          (n.removeClasses = function(e, t) {
            const n = this.appliedClasses[t];
            const r = n.base;
            const a = n.active;
            const i = n.done;
            (this.appliedClasses[t] = {}), r && g(e, r), a && g(e, a), i && g(e, i);
          }),
          (n.render = function() {
            const e = this.props;
            const t = (e.classNames, Object(a.a)(e, ['classNames']));
            return c.a.createElement(
              m,
              Object(r.a)({}, t, {
                onEnter: this.onEnter,
                onEntered: this.onEntered,
                onEntering: this.onEntering,
                onExit: this.onExit,
                onExiting: this.onExiting,
                onExited: this.onExited,
              }),
            );
          }),
          t
        );
      })(c.a.Component);
      (v.defaultProps = { classNames: '' }), (v.propTypes = {});
      t.a = v;
    },
    'q/PY': function(e, t, n) {
      'use strict';
      n('t+fG')('anchor', function(e) {
        return function(t) {
          return e(this, 'a', 'name', t);
        };
      });
    },
    qT12: function(e, t, n) {
      'use strict';
      n('m210'), n('4DPX');
      const r = 'function' === typeof Symbol && Symbol.for;
      const a = r ? Symbol.for('react.element') : 60103;
      const i = r ? Symbol.for('react.portal') : 60106;
      const o = r ? Symbol.for('react.fragment') : 60107;
      const s = r ? Symbol.for('react.strict_mode') : 60108;
      const c = r ? Symbol.for('react.profiler') : 60114;
      const l = r ? Symbol.for('react.provider') : 60109;
      const u = r ? Symbol.for('react.context') : 60110;
      const d = r ? Symbol.for('react.async_mode') : 60111;
      const f = r ? Symbol.for('react.concurrent_mode') : 60111;
      const p = r ? Symbol.for('react.forward_ref') : 60112;
      const h = r ? Symbol.for('react.suspense') : 60113;
      const m = r ? Symbol.for('react.suspense_list') : 60120;
      const g = r ? Symbol.for('react.memo') : 60115;
      const v = r ? Symbol.for('react.lazy') : 60116;
      const b = r ? Symbol.for('react.block') : 60121;
      const y = r ? Symbol.for('react.fundamental') : 60117;
      const w = r ? Symbol.for('react.responder') : 60118;
      const x = r ? Symbol.for('react.scope') : 60119;
      function E(e) {
        if ('object' === typeof e && null !== e) {
          const t = e.$$typeof;
          switch (t) {
            case a:
              switch ((e = e.type)) {
                case d:
                case f:
                case o:
                case c:
                case s:
                case h:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case p:
                    case v:
                    case g:
                    case l:
                      return e;
                    default:
                      return t;
                  }
              }
            case i:
              return t;
          }
        }
      }
      function S(e) {
        return E(e) === f;
      }
      (t.AsyncMode = d),
      (t.ConcurrentMode = f),
      (t.ContextConsumer = u),
      (t.ContextProvider = l),
      (t.Element = a),
      (t.ForwardRef = p),
      (t.Fragment = o),
      (t.Lazy = v),
      (t.Memo = g),
      (t.Portal = i),
      (t.Profiler = c),
      (t.StrictMode = s),
      (t.Suspense = h),
      (t.isAsyncMode = function(e) {
        return S(e) || E(e) === d;
      }),
      (t.isConcurrentMode = S),
      (t.isContextConsumer = function(e) {
        return E(e) === u;
      }),
      (t.isContextProvider = function(e) {
        return E(e) === l;
      }),
      (t.isElement = function(e) {
        return 'object' === typeof e && null !== e && e.$$typeof === a;
      }),
      (t.isForwardRef = function(e) {
        return E(e) === p;
      }),
      (t.isFragment = function(e) {
        return E(e) === o;
      }),
      (t.isLazy = function(e) {
        return E(e) === v;
      }),
      (t.isMemo = function(e) {
        return E(e) === g;
      }),
      (t.isPortal = function(e) {
        return E(e) === i;
      }),
      (t.isProfiler = function(e) {
        return E(e) === c;
      }),
      (t.isStrictMode = function(e) {
        return E(e) === s;
      }),
      (t.isSuspense = function(e) {
        return E(e) === h;
      }),
      (t.isValidElementType = function(e) {
        return (
          'string' === typeof e ||
            'function' === typeof e ||
            e === o ||
            e === f ||
            e === c ||
            e === s ||
            e === h ||
            e === m ||
            ('object' === typeof e &&
              null !== e &&
              (e.$$typeof === v ||
                e.$$typeof === g ||
                e.$$typeof === l ||
                e.$$typeof === u ||
                e.$$typeof === p ||
                e.$$typeof === y ||
                e.$$typeof === w ||
                e.$$typeof === x ||
                e.$$typeof === b))
        );
      }),
      (t.typeOf = E);
    },
    qhky: function(e, t, n) {
      'use strict';
      (function(e) {
        n.d(t, 'a', function() {
          return me;
        });
        n('wZFJ'),
        n('HQhv'),
        n('n7j8'),
        n('1dPr'),
        n('JHok'),
        n('OeI1'),
        n('MIFh'),
        n('sC2a'),
        n('sc67'),
        n('LagC'),
        n('pS08'),
        n('E5k/'),
        n('R48M'),
        n('m210'),
        n('4DPX'),
        n('U6Bt'),
        n('rzGZ'),
        n('Dq+y'),
        n('8npG'),
        n('Ggvi'),
        n('AqHK');
        let r;
        let a;
        let i;
        let o;
        const s = n('17x9');
        const c = n.n(s);
        const l = n('8+s/');
        const u = n.n(l);
        const d = n('bmMU');
        const f = n.n(d);
        const p = n('q1tI');
        const h = n.n(p);
        const m = n('MgzW');
        const g = n.n(m);
        const v = 'bodyAttributes';
        const b = 'htmlAttributes';
        const y = 'titleAttributes';
        const w = {
          BASE: 'base',
          BODY: 'body',
          HEAD: 'head',
          HTML: 'html',
          LINK: 'link',
          META: 'meta',
          NOSCRIPT: 'noscript',
          SCRIPT: 'script',
          STYLE: 'style',
          TITLE: 'title',
        };
        const x =
            (Object.keys(w).map(function(e) {
              return w[e];
            }),
            'charset');
        const E = 'cssText';
        const S = 'href';
        const k = 'http-equiv';
        const C = 'innerHTML';
        const O = 'itemprop';
        const j = 'name';
        const A = 'property';
        const I = 'rel';
        const T = 'src';
        const M = 'target';
        const N = {
          accesskey: 'accessKey',
          charset: 'charSet',
          class: 'className',
          contenteditable: 'contentEditable',
          contextmenu: 'contextMenu',
          'http-equiv': 'httpEquiv',
          itemprop: 'itemProp',
          tabindex: 'tabIndex',
        };
        const L = 'defaultTitle';
        const z = 'defer';
        const P = 'encodeSpecialCharacters';
        const R = 'onChangeClientState';
        const _ = 'titleTemplate';
        const F = Object.keys(N).reduce(function(e, t) {
          return (e[N[t]] = t), e;
        }, {});
        const H = [w.NOSCRIPT, w.SCRIPT, w.STYLE];
        const D =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function(e) {
                return typeof e;
              }
              : function(e) {
                return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              };
        const B = function(e, t) {
          if (!(e instanceof t)) {throw new TypeError('Cannot call a class as a function');}
        };
        const q = (function() {
          function e(e, t) {
            for (let n = 0; n < t.length; n++) {
              const r = t[n];
              (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
        const V =
            Object.assign ||
            function(e) {
              for (let t = 1; t < arguments.length; t++) {
                const n = arguments[t];
                for (const r in n) {Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);}
              }
              return e;
            };
        const W = function(e, t) {
          const n = {};
          for (const r in e) {t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));}
          return n;
        };
        const U = function(e, t) {
          if (!e) {throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');}
          return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
        };
        const G = function(e) {
          const t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return !1 === t
            ? String(e)
            : String(e)
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#x27;');
        };
        const J = function(e) {
          const t = X(e, w.TITLE);
          const n = X(e, _);
          if (n && t) {
            return n.replace(/%s/g, function() {
              return Array.isArray(t) ? t.join('') : t;
            });
          }
          const r = X(e, L);
          return t || r || void 0;
        };
        const Y = function(e) {
          return X(e, R) || function() {};
        };
        const $ = function(e, t) {
          return t
            .filter(function(t) {
              return void 0 !== t[e];
            })
            .map(function(t) {
              return t[e];
            })
            .reduce(function(e, t) {
              return V({}, e, t);
            }, {});
        };
        const K = function(e, t) {
          return t
            .filter(function(e) {
              return void 0 !== e[w.BASE];
            })
            .map(function(e) {
              return e[w.BASE];
            })
            .reverse()
            .reduce(function(t, n) {
              if (!t.length) {
                for (let r = Object.keys(n), a = 0; a < r.length; a++) {
                  const i = r[a].toLowerCase();
                  if (-1 !== e.indexOf(i) && n[i]) {return t.concat(n);}
                }
              }
              return t;
            }, []);
        };
        const Q = function(e, t, n) {
          const r = {};
          return n
            .filter(function(t) {
              return (
                !!Array.isArray(t[e]) ||
                  (void 0 !== t[e] &&
                    re(
                      `Helmet: ${ 
                        e 
                      } should be of type "Array". Instead found type "${ 
                        D(t[e]) 
                      }"`,
                    ),
                  !1)
              );
            })
            .map(function(t) {
              return t[e];
            })
            .reverse()
            .reduce(function(e, n) {
              const a = {};
              n.filter(function(e) {
                for (var n = void 0, i = Object.keys(e), o = 0; o < i.length; o++) {
                  const s = i[o];
                  const c = s.toLowerCase();
                  -1 === t.indexOf(c) ||
                      (n === I && 'canonical' === e[n].toLowerCase()) ||
                      (c === I && 'stylesheet' === e[c].toLowerCase()) ||
                      (n = c),
                  -1 === t.indexOf(s) || (s !== C && s !== E && s !== O) || (n = s);
                }
                if (!n || !e[n]) {return !1;}
                const l = e[n].toLowerCase();
                return r[n] || (r[n] = {}), a[n] || (a[n] = {}), !r[n][l] && ((a[n][l] = !0), !0);
              })
                .reverse()
                .forEach(function(t) {
                  return e.push(t);
                });
              for (let i = Object.keys(a), o = 0; o < i.length; o++) {
                const s = i[o];
                const c = g()({}, r[s], a[s]);
                r[s] = c;
              }
              return e;
            }, [])
            .reverse();
        };
        var X = function(e, t) {
          for (let n = e.length - 1; n >= 0; n--) {
            const r = e[n];
            if (r.hasOwnProperty(t)) {return r[t];}
          }
          return null;
        };
        var Z =
            ((r = Date.now()),
            function(e) {
              const t = Date.now();
              t - r > 16
                ? ((r = t), e(t))
                : setTimeout(function() {
                  Z(e);
                }, 0);
            });
        const ee = function(e) {
          return clearTimeout(e);
        };
        const te =
            'undefined' !== typeof window
              ? (window.requestAnimationFrame && window.requestAnimationFrame.bind(window)) ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                Z
              : e.requestAnimationFrame || Z;
        const ne =
            'undefined' !== typeof window
              ? window.cancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                ee
              : e.cancelAnimationFrame || ee;
        var re = function(e) {
          return console && 'function' === typeof console.warn && console.warn(e);
        };
        let ae = null;
        const ie = function(e, t) {
          const n = e.baseTag;
          const r = e.bodyAttributes;
          const a = e.htmlAttributes;
          const i = e.linkTags;
          const o = e.metaTags;
          const s = e.noscriptTags;
          const c = e.onChangeClientState;
          const l = e.scriptTags;
          const u = e.styleTags;
          const d = e.title;
          const f = e.titleAttributes;
          ce(w.BODY, r), ce(w.HTML, a), se(d, f);
          const p = {
            baseTag: le(w.BASE, n),
            linkTags: le(w.LINK, i),
            metaTags: le(w.META, o),
            noscriptTags: le(w.NOSCRIPT, s),
            scriptTags: le(w.SCRIPT, l),
            styleTags: le(w.STYLE, u),
          };
          const h = {};
          const m = {};
          Object.keys(p).forEach(function(e) {
            const t = p[e];
            const n = t.newTags;
            const r = t.oldTags;
            n.length && (h[e] = n), r.length && (m[e] = p[e].oldTags);
          }),
          t && t(),
          c(e, h, m);
        };
        const oe = function(e) {
          return Array.isArray(e) ? e.join('') : e;
        };
        var se = function(e, t) {
          void 0 !== e && document.title !== e && (document.title = oe(e)), ce(w.TITLE, t);
        };
        var ce = function(e, t) {
          const n = document.getElementsByTagName(e)[0];
          if (n) {
            for (
              var r = n.getAttribute('data-react-helmet'),
                a = r ? r.split(',') : [],
                i = [].concat(a),
                o = Object.keys(t),
                s = 0;
              s < o.length;
              s++
            ) {
              const c = o[s];
              const l = t[c] || '';
              n.getAttribute(c) !== l && n.setAttribute(c, l), -1 === a.indexOf(c) && a.push(c);
              const u = i.indexOf(c);
              -1 !== u && i.splice(u, 1);
            }
            for (let d = i.length - 1; d >= 0; d--) {n.removeAttribute(i[d]);}
            a.length === i.length
              ? n.removeAttribute('data-react-helmet')
              : n.getAttribute('data-react-helmet') !== o.join(',') &&
                  n.setAttribute('data-react-helmet', o.join(','));
          }
        };
        var le = function(e, t) {
          const n = document.head || document.querySelector(w.HEAD);
          const r = n.querySelectorAll(`${e  }[data-react-helmet]`);
          const a = Array.prototype.slice.call(r);
          const i = [];
          let o = void 0;
          return (
            t &&
                t.length &&
                t.forEach(function(t) {
                  const n = document.createElement(e);
                  for (const r in t) {
                    if (t.hasOwnProperty(r)) {
                      if (r === C) {n.innerHTML = t.innerHTML;} else if (r === E) {
                        n.styleSheet
                          ? (n.styleSheet.cssText = t.cssText)
                          : n.appendChild(document.createTextNode(t.cssText));
                      } else {
                        const s = void 0 === t[r] ? '' : t[r];
                        n.setAttribute(r, s);
                      }
                    }
                  }
                  n.setAttribute('data-react-helmet', 'true'),
                  a.some(function(e, t) {
                    return (o = t), n.isEqualNode(e);
                  })
                    ? a.splice(o, 1)
                    : i.push(n);
                }),
            a.forEach(function(e) {
              return e.parentNode.removeChild(e);
            }),
            i.forEach(function(e) {
              return n.appendChild(e);
            }),
            { oldTags: a, newTags: i }
          );
        };
        const ue = function(e) {
          return Object.keys(e).reduce(function(t, n) {
            const r = void 0 !== e[n] ? `${n  }="${  e[n]  }"` : `${  n}`;
            return t ? `${t  } ${  r}` : r;
          }, '');
        };
        const de = function(e) {
          const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Object.keys(e).reduce(function(t, n) {
            return (t[N[n] || n] = e[n]), t;
          }, t);
        };
        const fe = function(e, t, n) {
          switch (e) {
            case w.TITLE:
              return {
                toComponent: function() {
                  return (
                    (e = t.title),
                    (n = t.titleAttributes),
                    ((r = { key: e })['data-react-helmet'] = !0),
                    (a = de(n, r)),
                    [h.a.createElement(w.TITLE, a, e)]
                  );
                  let e; let n; let r; let a;
                },
                toString: function() {
                  return (function(e, t, n, r) {
                    const a = ue(n);
                    const i = oe(t);
                    return a
                      ? `<${ 
                        e 
                      } data-react-helmet="true" ${ 
                        a 
                      }>${ 
                        G(i, r) 
                      }</${ 
                        e 
                      }>`
                      : `<${  e  } data-react-helmet="true">${  G(i, r)  }</${  e  }>`;
                  })(e, t.title, t.titleAttributes, n);
                },
              };
            case v:
            case b:
              return {
                toComponent: function() {
                  return de(t);
                },
                toString: function() {
                  return ue(t);
                },
              };
            default:
              return {
                toComponent: function() {
                  return (function(e, t) {
                    return t.map(function(t, n) {
                      let r;
                      const a = (((r = { key: n })['data-react-helmet'] = !0), r);
                      return (
                        Object.keys(t).forEach(function(e) {
                          const n = N[e] || e;
                          if (n === C || n === E) {
                            const r = t.innerHTML || t.cssText;
                            a.dangerouslySetInnerHTML = { __html: r };
                          } else {a[n] = t[e];}
                        }),
                        h.a.createElement(e, a)
                      );
                    });
                  })(e, t);
                },
                toString: function() {
                  return (function(e, t, n) {
                    return t.reduce(function(t, r) {
                      const a = Object.keys(r)
                        .filter(function(e) {
                          return !(e === C || e === E);
                        })
                        .reduce(function(e, t) {
                          const a = void 0 === r[t] ? t : `${t  }="${  G(r[t], n)  }"`;
                          return e ? `${e  } ${  a}` : a;
                        }, '');
                      const i = r.innerHTML || r.cssText || '';
                      const o = -1 === H.indexOf(e);
                      return (
                        `${t 
                        }<${ 
                          e 
                        } data-react-helmet="true" ${ 
                          a 
                        }${o ? '/>' : `>${  i  }</${  e  }>`}`
                      );
                    }, '');
                  })(e, t, n);
                },
              };
          }
        };
        const pe = function(e) {
          const t = e.baseTag;
          const n = e.bodyAttributes;
          const r = e.encode;
          const a = e.htmlAttributes;
          const i = e.linkTags;
          const o = e.metaTags;
          const s = e.noscriptTags;
          const c = e.scriptTags;
          const l = e.styleTags;
          const u = e.title;
          const d = void 0 === u ? '' : u;
          const f = e.titleAttributes;
          return {
            base: fe(w.BASE, t, r),
            bodyAttributes: fe(v, n, r),
            htmlAttributes: fe(b, a, r),
            link: fe(w.LINK, i, r),
            meta: fe(w.META, o, r),
            noscript: fe(w.NOSCRIPT, s, r),
            script: fe(w.SCRIPT, c, r),
            style: fe(w.STYLE, l, r),
            title: fe(w.TITLE, { title: d, titleAttributes: f }, r),
          };
        };
        const he = u()(
          function(e) {
            return {
              baseTag: K([S, M], e),
              bodyAttributes: $(v, e),
              defer: X(e, z),
              encode: X(e, P),
              htmlAttributes: $(b, e),
              linkTags: Q(w.LINK, [I, S], e),
              metaTags: Q(w.META, [j, x, k, A, O], e),
              noscriptTags: Q(w.NOSCRIPT, [C], e),
              onChangeClientState: Y(e),
              scriptTags: Q(w.SCRIPT, [T, C], e),
              styleTags: Q(w.STYLE, [E], e),
              title: J(e),
              titleAttributes: $(y, e),
            };
          },
          function(e) {
            ae && ne(ae),
            e.defer
              ? (ae = te(function() {
                ie(e, function() {
                  ae = null;
                });
              }))
              : (ie(e), (ae = null));
          },
          pe,
        )(function() {
          return null;
        });
        var me =
            ((a = he),
            (o = i = (function(e) {
              function t() {
                return B(this, t), U(this, e.apply(this, arguments));
              }
              return (
                (function(e, t) {
                  if ('function' !== typeof t && null !== t) {
                    throw new TypeError(
                      `Super expression must either be null or a function, not ${  typeof t}`,
                    );
                  }
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                  })),
                  t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, e),
                (t.prototype.shouldComponentUpdate = function(e) {
                  return !f()(this.props, e);
                }),
                (t.prototype.mapNestedChildrenToProps = function(e, t) {
                  if (!t) {return null;}
                  switch (e.type) {
                    case w.SCRIPT:
                    case w.NOSCRIPT:
                      return { innerHTML: t };
                    case w.STYLE:
                      return { cssText: t };
                  }
                  throw new Error(
                    `<${ 
                      e.type 
                    } /> elements are self-closing and can not contain children. Refer to our API for more information.`,
                  );
                }),
                (t.prototype.flattenArrayTypeChildren = function(e) {
                  let t;
                  const n = e.child;
                  const r = e.arrayTypeChildren;
                  const a = e.newChildProps;
                  const i = e.nestedChildren;
                  return V(
                    {},
                    r,
                    (((t = {})[n.type] = [].concat(r[n.type] || [], [
                      V({}, a, this.mapNestedChildrenToProps(n, i)),
                    ])),
                    t),
                  );
                }),
                (t.prototype.mapObjectTypeChildren = function(e) {
                  let t;
                  let n;
                  const r = e.child;
                  const a = e.newProps;
                  const i = e.newChildProps;
                  const o = e.nestedChildren;
                  switch (r.type) {
                    case w.TITLE:
                      return V({}, a, (((t = {})[r.type] = o), (t.titleAttributes = V({}, i)), t));
                    case w.BODY:
                      return V({}, a, { bodyAttributes: V({}, i) });
                    case w.HTML:
                      return V({}, a, { htmlAttributes: V({}, i) });
                  }
                  return V({}, a, (((n = {})[r.type] = V({}, i)), n));
                }),
                (t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
                  let n = V({}, t);
                  return (
                    Object.keys(e).forEach(function(t) {
                      let r;
                      n = V({}, n, (((r = {})[t] = e[t]), r));
                    }),
                    n
                  );
                }),
                (t.prototype.warnOnInvalidChildren = function(e, t) {
                  return !0;
                }),
                (t.prototype.mapChildrenToProps = function(e, t) {
                  const n = this;
                  let r = {};
                  return (
                    h.a.Children.forEach(e, function(e) {
                      if (e && e.props) {
                        const a = e.props;
                        const i = a.children;
                        const o = (function(e) {
                          const t =
                              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                          return Object.keys(e).reduce(function(t, n) {
                            return (t[F[n] || n] = e[n]), t;
                          }, t);
                        })(W(a, ['children']));
                        switch ((n.warnOnInvalidChildren(e, i), e.type)) {
                          case w.LINK:
                          case w.META:
                          case w.NOSCRIPT:
                          case w.SCRIPT:
                          case w.STYLE:
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
                (t.prototype.render = function() {
                  const e = this.props;
                  const t = e.children;
                  const n = W(e, ['children']);
                  let r = V({}, n);
                  return t && (r = this.mapChildrenToProps(t, r)), h.a.createElement(a, r);
                }),
                q(t, null, [
                  {
                    key: 'canUseDOM',
                    set: function(e) {
                      a.canUseDOM = e;
                    },
                  },
                ]),
                t
              );
            })(h.a.Component)),
            (i.propTypes = {
              base: c.a.object,
              bodyAttributes: c.a.object,
              children: c.a.oneOfType([c.a.arrayOf(c.a.node), c.a.node]),
              defaultTitle: c.a.string,
              defer: c.a.bool,
              encodeSpecialCharacters: c.a.bool,
              htmlAttributes: c.a.object,
              link: c.a.arrayOf(c.a.object),
              meta: c.a.arrayOf(c.a.object),
              noscript: c.a.arrayOf(c.a.object),
              onChangeClientState: c.a.func,
              script: c.a.arrayOf(c.a.object),
              style: c.a.arrayOf(c.a.object),
              title: c.a.string,
              titleAttributes: c.a.object,
              titleTemplate: c.a.string,
            }),
            (i.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
            (i.peek = a.peek),
            (i.rewind = function() {
              let e = a.rewind();
              return (
                e ||
                  (e = pe({
                    baseTag: [],
                    bodyAttributes: {},
                    encodeSpecialCharacters: !0,
                    htmlAttributes: {},
                    linkTags: [],
                    metaTags: [],
                    noscriptTags: [],
                    scriptTags: [],
                    styleTags: [],
                    title: '',
                    titleAttributes: {},
                  })),
                e
              );
            }),
            o);
        me.renderStatic = me.rewind;
      }.call(this, n('yLpj')));
    },
    rGBt: function(e, t, n) {
      e.exports = `${n.p  }static/SFMono-Regular-d59c1702c527525e9939ba06166a3750.woff`;
    },
    't+fG': function(e, t, n) {
      const r = n('P8UN');
      const a = n('96qb');
      const i = n('ap2Z');
      const o = /"/g;
      const s = function(e, t, n, r) {
        const a = String(i(e));
        let s = `<${  t}`;
        return (
          '' !== n && (s += ` ${  n  }="${  String(r).replace(o, '&quot;')  }"`),
          `${s  }>${  a  }</${  t  }>`
        );
      };
      e.exports = function(e, t) {
        const n = {};
        (n[e] = t(s)),
        r(
          r.P +
              r.F *
                a(function() {
                  const t = ''[e]('"');
                  return t !== t.toLowerCase() || t.split('"').length > 3;
                }),
          'String',
          n,
        );
      };
    },
    t0tN: function(e, t, n) {
      e.exports = `${n.p  }static/SFMono-Regular-7faa66605357721067fe1b07d9103015.woff2`;
    },
    ucN8: function(e, t, n) {
      e.exports = `${n.p  }static/SFMono-RegularItalic-bb1fc3ab1772befac3587b30ca876a09.woff2`;
    },
    uwVU: function(e, t, n) {
      e.exports = `${n.p  }static/Calibre-MediumItalic-3df14639dd2cb07c83bd39707d70910f.woff2`;
    },
    vOnD: function(e, t, n) {
      'use strict';
      (function(e) {
        n.d(t, 'b', function() {
          return tt;
        }),
        n.d(t, 'c', function() {
          return ye;
        }),
        n.d(t, 'a', function() {
          return Ge;
        });
        n('n7j8'),
        n('wZFJ'),
        n('MIFh'),
        n('q8oJ'),
        n('C9fy'),
        n('HQhv'),
        n('OeI1'),
        n('rzGZ'),
        n('Dq+y'),
        n('8npG'),
        n('Ggvi'),
        n('klQ5'),
        n('lFjb'),
        n('AqHK'),
        n('HXzo'),
        n('sC2a'),
        n('JHok'),
        n('pJf4'),
        n('DrhF'),
        n('sc67'),
        n('LagC'),
        n('pS08'),
        n('E5k/'),
        n('R48M'),
        n('m210'),
        n('4DPX');
        const r = n('aJjT');
        const a = n.n(r);
        const i = n('TAZq');
        const o = n.n(i);
        const s = n('q1tI');
        const c = n.n(s);
        const l = n('ME5O');
        const u = n('TOwV');
        const d = n('Wwog');
        const f = (n('17x9'), n('9uj6'));
        const p = n('ECyS');
        const h = function(e, t) {
          for (var n = [e[0]], r = 0, a = t.length; r < a; r += 1) {n.push(t[r], e[r + 1]);}
          return n;
        };
        const m =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function(e) {
                return typeof e;
              }
              : function(e) {
                return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              };
        const g = function(e, t) {
          if (!(e instanceof t)) {throw new TypeError('Cannot call a class as a function');}
        };
        const v = (function() {
          function e(e, t) {
            for (let n = 0; n < t.length; n++) {
              const r = t[n];
              (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })();
        const b =
            Object.assign ||
            function(e) {
              for (let t = 1; t < arguments.length; t++) {
                const n = arguments[t];
                for (const r in n) {Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);}
              }
              return e;
            };
        const y = function(e, t) {
          if ('function' !== typeof t && null !== t) {
            throw new TypeError(
              `Super expression must either be null or a function, not ${  typeof t}`,
            );
          }
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
          })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        };
        const w = function(e, t) {
          if (!e) {throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');}
          return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
        };
        const x = function(e) {
          return 'object' === (void 0 === e ? 'undefined' : m(e)) && e.constructor === Object;
        };
        const E = Object.freeze([]);
        const S = Object.freeze({});
        function k(e) {
          return 'function' === typeof e;
        }
        function C(e) {
          return e.displayName || e.name || 'Component';
        }
        function O(e) {
          return e && 'string' === typeof e.styledComponentId;
        }
        const j = (void 0 !== e && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) || 'data-styled';
        const A = 'undefined' !== typeof window && 'HTMLElement' in window;
        const I =
            ('boolean' === typeof SC_DISABLE_SPEEDY && SC_DISABLE_SPEEDY) ||
            (void 0 !== e && ({}.REACT_APP_SC_DISABLE_SPEEDY || {}.SC_DISABLE_SPEEDY)) ||
            !1;
        const T = {};
        const M = (function(e) {
          function t(n) {
            g(this, t);
            for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) {a[i - 1] = arguments[i];}
            const o = w(
              this,
              e.call(
                this,
                `An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#${ 
                  n 
                } for more information.${ 
                  a.length > 0 ? ` Additional arguments: ${  a.join(', ')}` : ''}`,
              ),
            );
            return w(o);
          }
          return y(t, e), t;
        })(Error);
        const N = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;
        const L = function(e) {
          const t = `${  e || ''}`;
          const n = [];
          return (
            t.replace(N, function(e, t, r) {
              return n.push({ componentId: t, matchIndex: r }), e;
            }),
            n.map(function(e, r) {
              const a = e.componentId;
              const i = e.matchIndex;
              const o = n[r + 1];
              return { componentId: a, cssFromDOM: o ? t.slice(i, o.matchIndex) : t.slice(i) };
            })
          );
        };
        const z = /^\s*\/\/.*$/gm;
        const P = new a.a({
          global: !1,
          cascade: !0,
          keyframe: !1,
          prefix: !1,
          compress: !1,
          semicolon: !0,
        });
        const R = new a.a({
          global: !1,
          cascade: !0,
          keyframe: !1,
          prefix: !0,
          compress: !1,
          semicolon: !1,
        });
        let _ = [];
        const F = function(e) {
          if (-2 === e) {
            const t = _;
            return (_ = []), t;
          }
        };
        const H = o()(function(e) {
          _.push(e);
        });
        let D = void 0;
        let B = void 0;
        let q = void 0;
        const V = function(e, t, n) {
          return t > 0 && -1 !== n.slice(0, t).indexOf(B) && n.slice(t - B.length, t) !== B
            ? `.${  D}`
            : e;
        };
        R.use([
          function(e, t, n) {
            2 === e && n.length && n[0].lastIndexOf(B) > 0 && (n[0] = n[0].replace(q, V));
          },
          H,
          F,
        ]),
        P.use([H, F]);
        const W = function(e) {
          return P('', e);
        };
        function U(e, t, n) {
          const r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '&';
          const a = e.join('').replace(z, '');
          const i = t && n ? `${n  } ${  t  } { ${  a  } }` : a;
          return (D = r), (B = t), (q = new RegExp(`\\${  B  }\\b`, 'g')), R(n || !t ? '' : t, i);
        }
        const G = function() {
          return n.nc;
        };
        const J = function(e, t, n) {
          n && ((e[t] || (e[t] = Object.create(null)))[n] = !0);
        };
        const Y = function(e, t) {
          e[t] = Object.create(null);
        };
        const $ = function(e) {
          return function(t, n) {
            return void 0 !== e[t] && e[t][n];
          };
        };
        const K = function(e) {
          let t = '';
          for (const n in e) {t += `${Object.keys(e[n]).join(' ')  } `;}
          return t.trim();
        };
        const Q = function(e) {
          if (e.sheet) {return e.sheet;}
          for (let t = e.ownerDocument.styleSheets.length, n = 0; n < t; n += 1) {
            const r = e.ownerDocument.styleSheets[n];
            if (r.ownerNode === e) {return r;}
          }
          throw new M(10);
        };
        const X = function(e, t, n) {
          if (!t) {return !1;}
          const r = e.cssRules.length;
          try {
            e.insertRule(t, n <= r ? n : r);
          } catch (a) {
            return !1;
          }
          return !0;
        };
        const Z = function(e) {
          return `\n/* sc-component-id: ${  e  } */\n`;
        };
        const ee = function(e, t) {
          for (var n = 0, r = 0; r <= t; r += 1) {n += e[r];}
          return n;
        };
        const te = function(e, t) {
          return function(n) {
            const r = G();
            return (
              `<style ${ 
                [r && `nonce="${  r  }"`, `${j  }="${  K(t)  }"`, 'data-styled-version="4.4.1"', n]
                  .filter(Boolean)
                  .join(' ') 
              }>${ 
                e() 
              }</style>`
            );
          };
        };
        const ne = function(e, t) {
          return function() {
            let n;
            const r = (((n = {})[j] = K(t)), (n['data-styled-version'] = '4.4.1'), n);
            const a = G();
            return (
              a && (r.nonce = a),
              c.a.createElement('style', b({}, r, { dangerouslySetInnerHTML: { __html: e() } }))
            );
          };
        };
        const re = function(e) {
          return function() {
            return Object.keys(e);
          };
        };
        const ae = function(e, t) {
          return e.createTextNode(Z(t));
        };
        const ie = function e(t, n) {
          const r = void 0 === t ? Object.create(null) : t;
          const a = void 0 === n ? Object.create(null) : n;
          const i = function(e) {
            const t = a[e];
            return void 0 !== t ? t : (a[e] = ['']);
          };
          const o = function() {
            let e = '';
            for (const t in a) {
              const n = a[t][0];
              n && (e += Z(t) + n);
            }
            return e;
          };
          return {
            clone: function() {
              const t = (function(e) {
                const t = Object.create(null);
                for (const n in e) {t[n] = b({}, e[n]);}
                return t;
              })(r);
              const n = Object.create(null);
              for (const i in a) {n[i] = [a[i][0]];}
              return e(t, n);
            },
            css: o,
            getIds: re(a),
            hasNameForId: $(r),
            insertMarker: i,
            insertRules: function(e, t, n) {
              (i(e)[0] += t.join(' ')), J(r, e, n);
            },
            removeRules: function(e) {
              const t = a[e];
              void 0 !== t && ((t[0] = ''), Y(r, e));
            },
            sealed: !1,
            styleTag: null,
            toElement: ne(o, r),
            toHTML: te(o, r),
          };
        };
        const oe = function(e, t, n, r, a) {
          if (A && !n) {
            const i = (function(e, t, n) {
              let r = document;
              e ? (r = e.ownerDocument) : t && (r = t.ownerDocument);
              const a = r.createElement('style');
              a.setAttribute(j, ''), a.setAttribute('data-styled-version', '4.4.1');
              const i = G();
              if ((i && a.setAttribute('nonce', i), a.appendChild(r.createTextNode('')), e && !t)) {e.appendChild(a);} else {
                if (!t || !e || !t.parentNode) {throw new M(6);}
                t.parentNode.insertBefore(a, n ? t : t.nextSibling);
              }
              return a;
            })(e, t, r);
            return I
              ? (function(e, t) {
                const n = Object.create(null);
                const r = Object.create(null);
                const a = void 0 !== t;
                let i = !1;
                const o = function(t) {
                  const a = r[t];
                  return void 0 !== a
                    ? a
                    : ((r[t] = ae(e.ownerDocument, t)),
                    e.appendChild(r[t]),
                    (n[t] = Object.create(null)),
                    r[t]);
                };
                const s = function() {
                  let e = '';
                  for (const t in r) {e += r[t].data;}
                  return e;
                };
                return {
                  clone: function() {
                    throw new M(5);
                  },
                  css: s,
                  getIds: re(r),
                  hasNameForId: $(n),
                  insertMarker: o,
                  insertRules: function(e, r, s) {
                    for (var c = o(e), l = [], u = r.length, d = 0; d < u; d += 1) {
                      const f = r[d];
                      let p = a;
                      if (p && -1 !== f.indexOf('@import')) {l.push(f);} else {
                        p = !1;
                        const h = d === u - 1 ? '' : ' ';
                        c.appendData(`${  f  }${h}`);
                      }
                    }
                    J(n, e, s),
                    a && l.length > 0 && ((i = !0), t().insertRules(`${e  }-import`, l));
                  },
                  removeRules: function(o) {
                    const s = r[o];
                    if (void 0 !== s) {
                      const c = ae(e.ownerDocument, o);
                      e.replaceChild(c, s),
                      (r[o] = c),
                      Y(n, o),
                      a && i && t().removeRules(`${o  }-import`);
                    }
                  },
                  sealed: !1,
                  styleTag: e,
                  toElement: ne(s, n),
                  toHTML: te(s, n),
                };
              })(i, a)
              : (function(e, t) {
                const n = Object.create(null);
                const r = Object.create(null);
                const a = [];
                const i = void 0 !== t;
                let o = !1;
                const s = function(e) {
                  const t = r[e];
                  return void 0 !== t ? t : ((r[e] = a.length), a.push(0), Y(n, e), r[e]);
                };
                const c = function() {
                  const t = Q(e).cssRules;
                  let n = '';
                  for (const i in r) {
                    n += Z(i);
                    for (let o = r[i], s = ee(a, o), c = s - a[o]; c < s; c += 1) {
                      const l = t[c];
                      void 0 !== l && (n += l.cssText);
                    }
                  }
                  return n;
                };
                return {
                  clone: function() {
                    throw new M(5);
                  },
                  css: c,
                  getIds: re(r),
                  hasNameForId: $(n),
                  insertMarker: s,
                  insertRules: function(r, c, l) {
                    for (
                      var u = s(r), d = Q(e), f = ee(a, u), p = 0, h = [], m = c.length, g = 0;
                      g < m;
                      g += 1
                    ) {
                      const v = c[g];
                      let b = i;
                      b && -1 !== v.indexOf('@import')
                        ? h.push(v)
                        : X(d, v, f + p) && ((b = !1), (p += 1));
                    }
                    i && h.length > 0 && ((o = !0), t().insertRules(`${r  }-import`, h)),
                    (a[u] += p),
                    J(n, r, l);
                  },
                  removeRules: function(s) {
                    const c = r[s];
                    if (void 0 !== c && !1 !== e.isConnected) {
                      const l = a[c];
                      !(function(e, t, n) {
                        for (let r = t - n, a = t; a > r; a -= 1) {e.deleteRule(a);}
                      })(Q(e), ee(a, c) - 1, l),
                      (a[c] = 0),
                      Y(n, s),
                      i && o && t().removeRules(`${s  }-import`);
                    }
                  },
                  sealed: !1,
                  styleTag: e,
                  toElement: ne(c, n),
                  toHTML: te(c, n),
                };
              })(i, a);
          }
          return ie();
        };
        const se = /\s+/;
        let ce = void 0;
        ce = A ? (I ? 40 : 1e3) : -1;
        let le = 0;
        let ue = void 0;
        const de = (function() {
          function e() {
            const t = this;
            const n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : A
                      ? document.head
                      : null;
            const r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            g(this, e),
            (this.getImportRuleTag = function() {
              const e = t.importRuleTag;
              if (void 0 !== e) {return e;}
              const n = t.tags[0];
              return (t.importRuleTag = oe(t.target, n ? n.styleTag : null, t.forceServer, !0));
            }),
            (le += 1),
            (this.id = le),
            (this.forceServer = r),
            (this.target = r ? null : n),
            (this.tagMap = {}),
            (this.deferred = {}),
            (this.rehydratedNames = {}),
            (this.ignoreRehydratedNames = {}),
            (this.tags = []),
            (this.capacity = 1),
            (this.clones = []);
          }
          return (
            (e.prototype.rehydrate = function() {
              if (!A || this.forceServer) {return this;}
              const e = [];
              const t = [];
              let n = !1;
              const r = document.querySelectorAll(`style[${  j  }][data-styled-version="4.4.1"]`);
              const a = r.length;
              if (!a) {return this;}
              for (let i = 0; i < a; i += 1) {
                const o = r[i];
                n || (n = !!o.getAttribute('data-styled-streamed'));
                for (
                  var s, c = (o.getAttribute(j) || '').trim().split(se), l = c.length, u = 0;
                  u < l;
                  u += 1
                ) {(s = c[u]), (this.rehydratedNames[s] = !0);}
                t.push.apply(t, L(o.textContent)), e.push(o);
              }
              const d = t.length;
              if (!d) {return this;}
              const f = this.makeTag(null);
              !(function(e, t, n) {
                for (let r = 0, a = n.length; r < a; r += 1) {
                  const i = n[r];
                  const o = i.componentId;
                  const s = i.cssFromDOM;
                  const c = W(s);
                  e.insertRules(o, c);
                }
                for (let l = 0, u = t.length; l < u; l += 1) {
                  const d = t[l];
                  d.parentNode && d.parentNode.removeChild(d);
                }
              })(f, e, t),
              (this.capacity = Math.max(1, ce - d)),
              this.tags.push(f);
              for (let p = 0; p < d; p += 1) {this.tagMap[t[p].componentId] = f;}
              return this;
            }),
            (e.reset = function() {
              const t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              ue = new e(void 0, t).rehydrate();
            }),
            (e.prototype.clone = function() {
              const t = new e(this.target, this.forceServer);
              return (
                this.clones.push(t),
                (t.tags = this.tags.map(function(e) {
                  for (var n = e.getIds(), r = e.clone(), a = 0; a < n.length; a += 1) {t.tagMap[n[a]] = r;}
                  return r;
                })),
                (t.rehydratedNames = b({}, this.rehydratedNames)),
                (t.deferred = b({}, this.deferred)),
                t
              );
            }),
            (e.prototype.sealAllTags = function() {
              (this.capacity = 1),
              this.tags.forEach(function(e) {
                e.sealed = !0;
              });
            }),
            (e.prototype.makeTag = function(e) {
              const t = e ? e.styleTag : null;
              return oe(this.target, t, this.forceServer, !1, this.getImportRuleTag);
            }),
            (e.prototype.getTagForId = function(e) {
              const t = this.tagMap[e];
              if (void 0 !== t && !t.sealed) {return t;}
              let n = this.tags[this.tags.length - 1];
              return (
                (this.capacity -= 1),
                0 === this.capacity &&
                    ((this.capacity = ce), (n = this.makeTag(n)), this.tags.push(n)),
                (this.tagMap[e] = n)
              );
            }),
            (e.prototype.hasId = function(e) {
              return void 0 !== this.tagMap[e];
            }),
            (e.prototype.hasNameForId = function(e, t) {
              if (void 0 === this.ignoreRehydratedNames[e] && this.rehydratedNames[t]) {return !0;}
              const n = this.tagMap[e];
              return void 0 !== n && n.hasNameForId(e, t);
            }),
            (e.prototype.deferredInject = function(e, t) {
              if (void 0 === this.tagMap[e]) {
                for (let n = this.clones, r = 0; r < n.length; r += 1) {n[r].deferredInject(e, t);}
                this.getTagForId(e).insertMarker(e), (this.deferred[e] = t);
              }
            }),
            (e.prototype.inject = function(e, t, n) {
              for (let r = this.clones, a = 0; a < r.length; a += 1) {r[a].inject(e, t, n);}
              const i = this.getTagForId(e);
              if (void 0 !== this.deferred[e]) {
                const o = this.deferred[e].concat(t);
                i.insertRules(e, o, n), (this.deferred[e] = void 0);
              } else {i.insertRules(e, t, n);}
            }),
            (e.prototype.remove = function(e) {
              const t = this.tagMap[e];
              if (void 0 !== t) {
                for (let n = this.clones, r = 0; r < n.length; r += 1) {n[r].remove(e);}
                t.removeRules(e),
                (this.ignoreRehydratedNames[e] = !0),
                (this.deferred[e] = void 0);
              }
            }),
            (e.prototype.toHTML = function() {
              return this.tags
                .map(function(e) {
                  return e.toHTML();
                })
                .join('');
            }),
            (e.prototype.toReactElements = function() {
              const e = this.id;
              return this.tags.map(function(t, n) {
                const r = `sc-${  e  }-${  n}`;
                return Object(s.cloneElement)(t.toElement(), { key: r });
              });
            }),
            v(e, null, [
              {
                key: 'master',
                get: function() {
                  return ue || (ue = new e().rehydrate());
                },
              },
              {
                key: 'instance',
                get: function() {
                  return e.master;
                },
              },
            ]),
            e
          );
        })();
        const fe = (function() {
          function e(t, n) {
            const r = this;
            g(this, e),
            (this.inject = function(e) {
              e.hasNameForId(r.id, r.name) || e.inject(r.id, r.rules, r.name);
            }),
            (this.toString = function() {
              throw new M(12, String(r.name));
            }),
            (this.name = t),
            (this.rules = n),
            (this.id = `sc-keyframes-${  t}`);
          }
          return (
            (e.prototype.getName = function() {
              return this.name;
            }),
            e
          );
        })();
        const pe = /([A-Z])/g;
        const he = /^ms-/;
        function me(e) {
          return e.replace(pe, '-$1').toLowerCase().replace(he, '-ms-');
        }
        const ge = function(e) {
          return null == e || !1 === e || '' === e;
        };
        const ve = function e(t, n) {
          const r = [];
          return (
            Object.keys(t).forEach(function(n) {
              if (!ge(t[n])) {
                if (x(t[n])) {return r.push.apply(r, e(t[n], n)), r;}
                if (k(t[n])) {return r.push(`${me(n)  }:`, t[n], ';'), r;}
                r.push(
                  `${me(n) 
                  }: ${ 
                    (a = n),
                    `${null == (i = t[n]) || 'boolean' === typeof i || '' === i
                      ? ''
                      : 'number' !== typeof i || 0 === i || a in l.a
                        ? String(i).trim()
                        : `${i  }px`  };`}`,
                );
              }
              let a; let i;
              return r;
            }),
            n ? [`${n  } {`].concat(r, ['}']) : r
          );
        };
        function be(e, t, n) {
          if (Array.isArray(e)) {
            for (var r, a = [], i = 0, o = e.length; i < o; i += 1) {null !== (r = be(e[i], t, n)) && (Array.isArray(r) ? a.push.apply(a, r) : a.push(r));}
            return a;
          }
          return ge(e)
            ? null
            : O(e)
              ? `.${  e.styledComponentId}`
              : k(e)
                ? 'function' !== typeof (s = e) || (s.prototype && s.prototype.isReactComponent) || !t
                  ? e
                  : be(e(t), t, n)
                : e instanceof fe
                  ? n
                    ? (e.inject(n), e.getName())
                    : e
                  : x(e)
                    ? ve(e)
                    : e.toString();
          let s;
        }
        function ye(e) {
          for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {n[r - 1] = arguments[r];}
          return k(e) || x(e) ? be(h(E, [e].concat(n))) : be(h(e, n));
        }
        function we(e) {
          for (var t, n = 0 | e.length, r = 0 | n, a = 0; n >= 4; ) {
            (t =
              1540483477 *
                (65535 &
                  (t =
                    (255 & e.charCodeAt(a)) |
                    ((255 & e.charCodeAt(++a)) << 8) |
                    ((255 & e.charCodeAt(++a)) << 16) |
                    ((255 & e.charCodeAt(++a)) << 24))) +
              (((1540483477 * (t >>> 16)) & 65535) << 16)),
            (r =
                (1540483477 * (65535 & r) + (((1540483477 * (r >>> 16)) & 65535) << 16)) ^
                (t =
                  1540483477 * (65535 & (t ^= t >>> 24)) +
                  (((1540483477 * (t >>> 16)) & 65535) << 16))),
            (n -= 4),
            ++a;
          }
          switch (n) {
            case 3:
              r ^= (255 & e.charCodeAt(a + 2)) << 16;
            case 2:
              r ^= (255 & e.charCodeAt(a + 1)) << 8;
            case 1:
              r =
                1540483477 * (65535 & (r ^= 255 & e.charCodeAt(a))) +
                (((1540483477 * (r >>> 16)) & 65535) << 16);
          }
          return (
            ((r =
              1540483477 * (65535 & (r ^= r >>> 13)) +
              (((1540483477 * (r >>> 16)) & 65535) << 16)) ^
              (r >>> 15)) >>>
            0
          );
        }
        const xe = function(e) {
          return String.fromCharCode(e + (e > 25 ? 39 : 97));
        };
        function Ee(e) {
          let t = '';
          let n = void 0;
          for (n = e; n > 52; n = Math.floor(n / 52)) {t = xe(n % 52) + t;}
          return xe(n % 52) + t;
        }
        function Se(e, t) {
          for (let n = 0; n < e.length; n += 1) {
            const r = e[n];
            if (Array.isArray(r) && !Se(r, t)) {return !1;}
            if (k(r) && !O(r)) {return !1;}
          }
          return !t.some(function(e) {
            return (
              k(e) ||
              (function(e) {
                for (const t in e) {if (k(e[t])) {return !0;}}
                return !1;
              })(e)
            );
          });
        }
        let ke;
        const Ce = function(e) {
          return Ee(we(e));
        };
        const Oe = (function() {
          function e(t, n, r) {
            g(this, e),
            (this.rules = t),
            (this.isStatic = Se(t, n)),
            (this.componentId = r),
            de.master.hasId(r) || de.master.deferredInject(r, []);
          }
          return (
            (e.prototype.generateAndInjectStyles = function(e, t) {
              const n = this.isStatic;
              const r = this.componentId;
              const a = this.lastClassName;
              if (A && n && 'string' === typeof a && t.hasNameForId(r, a)) {return a;}
              const i = be(this.rules, e, t);
              const o = Ce(this.componentId + i.join(''));
              return (
                t.hasNameForId(r, o) || t.inject(this.componentId, U(i, `.${  o}`, void 0, r), o),
                (this.lastClassName = o),
                o
              );
            }),
            (e.generateName = function(e) {
              return Ce(e);
            }),
            e
          );
        })();
        const je = function(e, t) {
          const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S;
          const r = !!n && e.theme === n.theme;
          const a = e.theme && !r ? e.theme : t || n.theme;
          return a;
        };
        const Ae = /[[\].#*$><+~=|^:(),"'`-]+/g;
        const Ie = /(^-|-$)/g;
        function Te(e) {
          return e.replace(Ae, '-').replace(Ie, '');
        }
        function Me(e) {
          return 'string' === typeof e && !0;
        }
        const Ne = {
          childContextTypes: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDerivedStateFromProps: !0,
          propTypes: !0,
          type: !0,
        };
        const Le = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        };
        const ze = (((ke = {})[u.ForwardRef] = { $$typeof: !0, render: !0 }), ke);
        const Pe = Object.defineProperty;
        const Re = Object.getOwnPropertyNames;
        const _e = Object.getOwnPropertySymbols;
        const Fe =
            void 0 === _e
              ? function() {
                return [];
              }
              : _e;
        const He = Object.getOwnPropertyDescriptor;
        const De = Object.getPrototypeOf;
        const Be = Object.prototype;
        const qe = Array.prototype;
        function Ve(e, t, n) {
          if ('string' !== typeof t) {
            const r = De(t);
            r && r !== Be && Ve(e, r, n);
            for (
              let a = qe.concat(Re(t), Fe(t)),
                i = ze[e.$$typeof] || Ne,
                o = ze[t.$$typeof] || Ne,
                s = a.length,
                c = void 0,
                l = void 0;
              s--;

            ) {
              if (
                ((l = a[s]),
                !(Le[l] || (n && n[l]) || (o && o[l]) || (i && i[l])) && (c = He(t, l)))
              ) {
                try {
                  Pe(e, l, c);
                } catch (u) {}
              }
            }
            return e;
          }
          return e;
        }
        const We = Object(s.createContext)();
        const Ue = We.Consumer;
        var Ge = (function(e) {
          function t(n) {
            g(this, t);
            const r = w(this, e.call(this, n));
            return (
              (r.getContext = Object(d.a)(r.getContext.bind(r))),
              (r.renderInner = r.renderInner.bind(r)),
              r
            );
          }
          return (
            y(t, e),
            (t.prototype.render = function() {
              return this.props.children
                ? c.a.createElement(We.Consumer, null, this.renderInner)
                : null;
            }),
            (t.prototype.renderInner = function(e) {
              const t = this.getContext(this.props.theme, e);
              return c.a.createElement(We.Provider, { value: t }, this.props.children);
            }),
            (t.prototype.getTheme = function(e, t) {
              if (k(e)) {return e(t);}
              if (
                null === e ||
                  Array.isArray(e) ||
                  'object' !== (void 0 === e ? 'undefined' : m(e))
              ) {throw new M(8);}
              return b({}, t, e);
            }),
            (t.prototype.getContext = function(e, t) {
              return this.getTheme(e, t);
            }),
            t
          );
        })(s.Component);
        const Je =
            ((function() {
              function e() {
                g(this, e),
                (this.masterSheet = de.master),
                (this.instance = this.masterSheet.clone()),
                (this.sealed = !1);
              }
              (e.prototype.seal = function() {
                if (!this.sealed) {
                  const e = this.masterSheet.clones.indexOf(this.instance);
                  this.masterSheet.clones.splice(e, 1), (this.sealed = !0);
                }
              }),
              (e.prototype.collectStyles = function(e) {
                if (this.sealed) {throw new M(2);}
                return c.a.createElement($e, { sheet: this.instance }, e);
              }),
              (e.prototype.getStyleTags = function() {
                return this.seal(), this.instance.toHTML();
              }),
              (e.prototype.getStyleElement = function() {
                return this.seal(), this.instance.toReactElements();
              }),
              (e.prototype.interleaveWithNodeStream = function(e) {
                throw new M(3);
              });
            })(),
            Object(s.createContext)());
        const Ye = Je.Consumer;
        var $e = (function(e) {
          function t(n) {
            g(this, t);
            const r = w(this, e.call(this, n));
            return (r.getContext = Object(d.a)(r.getContext)), r;
          }
          return (
            y(t, e),
            (t.prototype.getContext = function(e, t) {
              if (e) {return e;}
              if (t) {return new de(t);}
              throw new M(4);
            }),
            (t.prototype.render = function() {
              const e = this.props;
              const t = e.children;
              const n = e.sheet;
              const r = e.target;
              return c.a.createElement(Je.Provider, { value: this.getContext(n, r) }, t);
            }),
            t
          );
        })(s.Component);
        const Ke = {};
        const Qe = (function(e) {
          function t() {
            g(this, t);
            const n = w(this, e.call(this));
            return (
              (n.attrs = {}),
              (n.renderOuter = n.renderOuter.bind(n)),
              (n.renderInner = n.renderInner.bind(n)),
              n
            );
          }
          return (
            y(t, e),
            (t.prototype.render = function() {
              return c.a.createElement(Ye, null, this.renderOuter);
            }),
            (t.prototype.renderOuter = function() {
              const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : de.master;
              return (
                (this.styleSheet = e),
                this.props.forwardedComponent.componentStyle.isStatic
                  ? this.renderInner()
                  : c.a.createElement(Ue, null, this.renderInner)
              );
            }),
            (t.prototype.renderInner = function(e) {
              const t = this.props.forwardedComponent;
              const n = t.componentStyle;
              const r = t.defaultProps;
              const a = (t.displayName, t.foldedComponentIds);
              const i = t.styledComponentId;
              const o = t.target;
              let c = void 0;
              c = n.isStatic
                ? this.generateAndInjectStyles(S, this.props)
                : this.generateAndInjectStyles(je(this.props, e, r) || S, this.props);
              const l = this.props.as || this.attrs.as || o;
              const u = Me(l);
              const d = {};
              const p = b({}, this.props, this.attrs);
              let h = void 0;
              for (h in p) {
                'forwardedComponent' !== h &&
                  'as' !== h &&
                  ('forwardedRef' === h
                    ? (d.ref = p[h])
                    : 'forwardedAs' === h
                      ? (d.as = p[h])
                      : (u && !Object(f.a)(h)) || (d[h] = p[h]));
              }
              return (
                this.props.style &&
                  this.attrs.style &&
                  (d.style = b({}, this.attrs.style, this.props.style)),
                (d.className = Array.prototype
                  .concat(a, i, c !== i ? c : null, this.props.className, this.attrs.className)
                  .filter(Boolean)
                  .join(' ')),
                Object(s.createElement)(l, d)
              );
            }),
            (t.prototype.buildExecutionContext = function(e, t, n) {
              const r = this;
              const a = b({}, t, { theme: e });
              return n.length
                ? ((this.attrs = {}),
                n.forEach(function(e) {
                  let t;
                  let n = e;
                  let i = !1;
                  let o = void 0;
                  let s = void 0;
                  for (s in (k(n) && ((n = n(a)), (i = !0)), n)) {
                    (o = n[s]),
                    i ||
                          !k(o) ||
                          ((t = o) && t.prototype && t.prototype.isReactComponent) ||
                          O(o) ||
                          (o = o(a)),
                    (r.attrs[s] = o),
                    (a[s] = o);
                  }
                }),
                a)
                : a;
            }),
            (t.prototype.generateAndInjectStyles = function(e, t) {
              const n = t.forwardedComponent;
              const r = n.attrs;
              const a = n.componentStyle;
              n.warnTooManyClasses;
              return a.isStatic && !r.length
                ? a.generateAndInjectStyles(S, this.styleSheet)
                : a.generateAndInjectStyles(this.buildExecutionContext(e, t, r), this.styleSheet);
            }),
            t
          );
        })(s.Component);
        function Xe(e, t, n) {
          const r = O(e);
          const a = !Me(e);
          const i = t.displayName;
          const o =
              void 0 === i
                ? (function(e) {
                  return Me(e) ? `styled.${  e}` : `Styled(${  C(e)  })`;
                })(e)
                : i;
          const s = t.componentId;
          const l =
              void 0 === s
                ? (function(e, t, n) {
                  const r = 'string' !== typeof t ? 'sc' : Te(t);
                  const a = (Ke[r] || 0) + 1;
                  Ke[r] = a;
                  const i = `${r  }-${  e.generateName(r + a)}`;
                  return n ? `${n  }-${  i}` : i;
                })(Oe, t.displayName, t.parentComponentId)
                : s;
          const u = t.ParentComponent;
          const d = void 0 === u ? Qe : u;
          const f = t.attrs;
          const h = void 0 === f ? E : f;
          const m =
              t.displayName && t.componentId
                ? `${Te(t.displayName)  }-${  t.componentId}`
                : t.componentId || l;
          const g = r && e.attrs ? Array.prototype.concat(e.attrs, h).filter(Boolean) : h;
          const v = new Oe(r ? e.componentStyle.rules.concat(n) : n, g, m);
          let y = void 0;
          const w = function(e, t) {
            return c.a.createElement(d, b({}, e, { forwardedComponent: y, forwardedRef: t }));
          };
          return (
            (w.displayName = o),
            ((y = c.a.forwardRef(w)).displayName = o),
            (y.attrs = g),
            (y.componentStyle = v),
            (y.foldedComponentIds = r
              ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
              : E),
            (y.styledComponentId = m),
            (y.target = r ? e.target : e),
            (y.withComponent = function(e) {
              const r = t.componentId;
              const a = (function(e, t) {
                const n = {};
                for (const r in e) {
                  t.indexOf(r) >= 0 ||
                      (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
                }
                return n;
              })(t, ['componentId']);
              const i = r && `${r  }-${  Me(e) ? e : Te(C(e))}`;
              return Xe(e, b({}, a, { attrs: g, componentId: i, ParentComponent: d }), n);
            }),
            Object.defineProperty(y, 'defaultProps', {
              get: function() {
                return this._foldedDefaultProps;
              },
              set: function(t) {
                this._foldedDefaultProps = r ? Object(p.a)(e.defaultProps, t) : t;
              },
            }),
            (y.toString = function() {
              return `.${  y.styledComponentId}`;
            }),
            a &&
              Ve(y, e, {
                attrs: !0,
                componentStyle: !0,
                displayName: !0,
                foldedComponentIds: !0,
                styledComponentId: !0,
                target: !0,
                withComponent: !0,
              }),
            y
          );
        }
        const Ze = function(e) {
          return (function e(t, n) {
            const r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S;
            if (!Object(u.isValidElementType)(n)) {throw new M(1, String(n));}
            const a = function() {
              return t(n, r, ye.apply(void 0, arguments));
            };
            return (
              (a.withConfig = function(a) {
                return e(t, n, b({}, r, a));
              }),
              (a.attrs = function(a) {
                return e(
                  t,
                  n,
                  b({}, r, { attrs: Array.prototype.concat(r.attrs, a).filter(Boolean) }),
                );
              }),
              a
            );
          })(Xe, e);
        };
        [
          'a',
          'abbr',
          'address',
          'area',
          'article',
          'aside',
          'audio',
          'b',
          'base',
          'bdi',
          'bdo',
          'big',
          'blockquote',
          'body',
          'br',
          'button',
          'canvas',
          'caption',
          'cite',
          'code',
          'col',
          'colgroup',
          'data',
          'datalist',
          'dd',
          'del',
          'details',
          'dfn',
          'dialog',
          'div',
          'dl',
          'dt',
          'em',
          'embed',
          'fieldset',
          'figcaption',
          'figure',
          'footer',
          'form',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'head',
          'header',
          'hgroup',
          'hr',
          'html',
          'i',
          'iframe',
          'img',
          'input',
          'ins',
          'kbd',
          'keygen',
          'label',
          'legend',
          'li',
          'link',
          'main',
          'map',
          'mark',
          'marquee',
          'menu',
          'menuitem',
          'meta',
          'meter',
          'nav',
          'noscript',
          'object',
          'ol',
          'optgroup',
          'option',
          'output',
          'p',
          'param',
          'picture',
          'pre',
          'progress',
          'q',
          'rp',
          'rt',
          'ruby',
          's',
          'samp',
          'script',
          'section',
          'select',
          'small',
          'source',
          'span',
          'strong',
          'style',
          'sub',
          'summary',
          'sup',
          'table',
          'tbody',
          'td',
          'textarea',
          'tfoot',
          'th',
          'thead',
          'time',
          'title',
          'tr',
          'track',
          'u',
          'ul',
          'var',
          'video',
          'wbr',
          'circle',
          'clipPath',
          'defs',
          'ellipse',
          'foreignObject',
          'g',
          'image',
          'line',
          'linearGradient',
          'marker',
          'mask',
          'path',
          'pattern',
          'polygon',
          'polyline',
          'radialGradient',
          'rect',
          'stop',
          'svg',
          'text',
          'tspan',
        ].forEach(function(e) {
          Ze[e] = Ze(e);
        });
        const et = (function() {
          function e(t, n) {
            g(this, e),
            (this.rules = t),
            (this.componentId = n),
            (this.isStatic = Se(t, E)),
            de.master.hasId(n) || de.master.deferredInject(n, []);
          }
          return (
            (e.prototype.createStyles = function(e, t) {
              const n = U(be(this.rules, e, t), '');
              t.inject(this.componentId, n);
            }),
            (e.prototype.removeStyles = function(e) {
              const t = this.componentId;
              e.hasId(t) && e.remove(t);
            }),
            (e.prototype.renderStyles = function(e, t) {
              this.removeStyles(t), this.createStyles(e, t);
            }),
            e
          );
        })();
        function tt(e) {
          for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {n[r - 1] = arguments[r];}
          const a = ye.apply(void 0, [e].concat(n));
          const i = `sc-global-${  we(JSON.stringify(a))}`;
          const o = new et(a, i);
          const s = (function(e) {
            function t(n) {
              g(this, t);
              const r = w(this, e.call(this, n));
              const a = r.constructor;
              const i = a.globalStyle;
              const o = a.styledComponentId;
              return (
                A && (window.scCGSHMRCache[o] = (window.scCGSHMRCache[o] || 0) + 1),
                (r.state = { globalStyle: i, styledComponentId: o }),
                r
              );
            }
            return (
              y(t, e),
              (t.prototype.componentWillUnmount = function() {
                window.scCGSHMRCache[this.state.styledComponentId] &&
                    (window.scCGSHMRCache[this.state.styledComponentId] -= 1),
                0 === window.scCGSHMRCache[this.state.styledComponentId] &&
                      this.state.globalStyle.removeStyles(this.styleSheet);
              }),
              (t.prototype.render = function() {
                const e = this;
                return c.a.createElement(Ye, null, function(t) {
                  e.styleSheet = t || de.master;
                  const n = e.state.globalStyle;
                  return n.isStatic
                    ? (n.renderStyles(T, e.styleSheet), null)
                    : c.a.createElement(Ue, null, function(t) {
                      const r = e.constructor.defaultProps;
                      const a = b({}, e.props);
                      return (
                        void 0 !== t && (a.theme = je(e.props, t, r)),
                        n.renderStyles(a, e.styleSheet),
                        null
                      );
                    });
                });
              }),
              t
            );
          })(c.a.Component);
          return (s.globalStyle = o), (s.styledComponentId = i), s;
        }
        A && (window.scCGSHMRCache = {});
        t.d = Ze;
      }.call(this, n('8oxB')));
    },
    voZr: function(e, t, n) {
      'use strict';
      const r = n('emib');
      const a = n('QPJK');
      const i = n('939K');
      const o = n('Jegl');
      const s = n('8wc8');
      const c = n('rj/q');
      const l = n('96qb');
      const u = n('xa9o');
      const d = n('1Llc');
      const f = n('kiRH');
      const p = n('gx6d');
      const h = n('chL8').f;
      const m = n('rjfK').f;
      const g = n('Y++M');
      const v = n('dSuk');
      let b = r.ArrayBuffer;
      let y = r.DataView;
      const w = r.Math;
      const x = r.RangeError;
      const E = r.Infinity;
      const S = b;
      const k = w.abs;
      const C = w.pow;
      const O = w.floor;
      const j = w.log;
      const A = w.LN2;
      const I = a ? '_b' : 'buffer';
      const T = a ? '_l' : 'byteLength';
      const M = a ? '_o' : 'byteOffset';
      function N(e, t, n) {
        let r;
        let a;
        let i;
        const o = new Array(n);
        let s = 8 * n - t - 1;
        const c = (1 << s) - 1;
        const l = c >> 1;
        const u = 23 === t ? C(2, -24) - C(2, -77) : 0;
        let d = 0;
        const f = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
        for (
          (e = k(e)) != e || e === E
            ? ((a = e != e ? 1 : 0), (r = c))
            : ((r = O(j(e) / A)),
            e * (i = C(2, -r)) < 1 && (r--, (i *= 2)),
            (e += r + l >= 1 ? u / i : u * C(2, 1 - l)) * i >= 2 && (r++, (i /= 2)),
            r + l >= c
              ? ((a = 0), (r = c))
              : r + l >= 1
                ? ((a = (e * i - 1) * C(2, t)), (r += l))
                : ((a = e * C(2, l - 1) * C(2, t)), (r = 0)));
          t >= 8;
          o[d++] = 255 & a, a /= 256, t -= 8
        ){;}
        for (r = (r << t) | a, s += t; s > 0; o[d++] = 255 & r, r /= 256, s -= 8){;}
        return (o[--d] |= 128 * f), o;
      }
      function L(e, t, n) {
        let r;
        const a = 8 * n - t - 1;
        const i = (1 << a) - 1;
        const o = i >> 1;
        let s = a - 7;
        let c = n - 1;
        let l = e[c--];
        let u = 127 & l;
        for (l >>= 7; s > 0; u = 256 * u + e[c], c--, s -= 8){;}
        for (r = u & ((1 << -s) - 1), u >>= -s, s += t; s > 0; r = 256 * r + e[c], c--, s -= 8){;}
        if (0 === u) {u = 1 - o;} else {
          if (u === i) {return r ? NaN : l ? -E : E;}
          (r += C(2, t)), (u -= o);
        }
        return (l ? -1 : 1) * r * C(2, u - t);
      }
      function z(e) {
        return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
      }
      function P(e) {
        return [255 & e];
      }
      function R(e) {
        return [255 & e, (e >> 8) & 255];
      }
      function _(e) {
        return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
      }
      function F(e) {
        return N(e, 52, 8);
      }
      function H(e) {
        return N(e, 23, 4);
      }
      function D(e, t, n) {
        m(e.prototype, t, {
          get: function() {
            return this[n];
          },
        });
      }
      function B(e, t, n, r) {
        const a = p(+n);
        if (a + t > e[T]) {throw x('Wrong index!');}
        const i = e[I]._b;
        const o = a + e[M];
        const s = i.slice(o, o + t);
        return r ? s : s.reverse();
      }
      function q(e, t, n, r, a, i) {
        const o = p(+n);
        if (o + t > e[T]) {throw x('Wrong index!');}
        for (let s = e[I]._b, c = o + e[M], l = r(+a), u = 0; u < t; u++) {s[c + u] = l[i ? u : t - u - 1];}
      }
      if (o.ABV) {
        if (
          !l(function() {
            b(1);
          }) ||
          !l(function() {
            new b(-1);
          }) ||
          l(function() {
            return new b(), new b(1.5), new b(NaN), 'ArrayBuffer' != b.name;
          })
        ) {
          for (
            var V,
              W = ((b = function(e) {
                return u(this, b), new S(p(e));
              }).prototype = S.prototype),
              U = h(S),
              G = 0;
            U.length > G;

          ) {(V = U[G++]) in b || s(b, V, S[V]);}
          i || (W.constructor = b);
        }
        const J = new y(new b(2));
        const Y = y.prototype.setInt8;
        J.setInt8(0, 2147483648),
        J.setInt8(1, 2147483649),
        (!J.getInt8(0) && J.getInt8(1)) ||
            c(
              y.prototype,
              {
                setInt8: function(e, t) {
                  Y.call(this, e, (t << 24) >> 24);
                },
                setUint8: function(e, t) {
                  Y.call(this, e, (t << 24) >> 24);
                },
              },
              !0,
            );
      } else {
        (b = function(e) {
          u(this, b, 'ArrayBuffer');
          const t = p(e);
          (this._b = g.call(new Array(t), 0)), (this[T] = t);
        }),
        (y = function(e, t, n) {
          u(this, y, 'DataView'), u(e, b, 'DataView');
          const r = e[T];
          const a = d(t);
          if (a < 0 || a > r) {throw x('Wrong offset!');}
          if (a + (n = void 0 === n ? r - a : f(n)) > r) {throw x('Wrong length!');}
          (this[I] = e), (this[M] = a), (this[T] = n);
        }),
        a &&
            (D(b, 'byteLength', '_l'),
            D(y, 'buffer', '_b'),
            D(y, 'byteLength', '_l'),
            D(y, 'byteOffset', '_o')),
        c(y.prototype, {
          getInt8: function(e) {
            return (B(this, 1, e)[0] << 24) >> 24;
          },
          getUint8: function(e) {
            return B(this, 1, e)[0];
          },
          getInt16: function(e) {
            const t = B(this, 2, e, arguments[1]);
            return (((t[1] << 8) | t[0]) << 16) >> 16;
          },
          getUint16: function(e) {
            const t = B(this, 2, e, arguments[1]);
            return (t[1] << 8) | t[0];
          },
          getInt32: function(e) {
            return z(B(this, 4, e, arguments[1]));
          },
          getUint32: function(e) {
            return z(B(this, 4, e, arguments[1])) >>> 0;
          },
          getFloat32: function(e) {
            return L(B(this, 4, e, arguments[1]), 23, 4);
          },
          getFloat64: function(e) {
            return L(B(this, 8, e, arguments[1]), 52, 8);
          },
          setInt8: function(e, t) {
            q(this, 1, e, P, t);
          },
          setUint8: function(e, t) {
            q(this, 1, e, P, t);
          },
          setInt16: function(e, t) {
            q(this, 2, e, R, t, arguments[2]);
          },
          setUint16: function(e, t) {
            q(this, 2, e, R, t, arguments[2]);
          },
          setInt32: function(e, t) {
            q(this, 4, e, _, t, arguments[2]);
          },
          setUint32: function(e, t) {
            q(this, 4, e, _, t, arguments[2]);
          },
          setFloat32: function(e, t) {
            q(this, 4, e, H, t, arguments[2]);
          },
          setFloat64: function(e, t) {
            q(this, 8, e, F, t, arguments[2]);
          },
        });
      }
      v(b, 'ArrayBuffer'),
      v(y, 'DataView'),
      s(y.prototype, o.VIEW, !0),
      (t.ArrayBuffer = b),
      (t.DataView = y);
    },
    wx14: function(e, t, n) {
      'use strict';
      function r() {
        return (r =
          Object.assign ||
          function(e) {
            for (let t = 1; t < arguments.length; t++) {
              const n = arguments[t];
              for (const r in n) {Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);}
            }
            return e;
          }).apply(this, arguments);
      }
      n.d(t, 'a', function() {
        return r;
      });
    },
    y7hu: function(e, t, n) {
      'use strict';
      n('t+fG')('link', function(e) {
        return function(t) {
          return e(this, 'a', 'href', t);
        };
      });
    },
    yLpj: function(e, t) {
      let n;
      n = (function() {
        return this;
      })();
      try {
        n = n || new Function('return this')();
      } catch (r) {
        'object' === typeof window && (n = window);
      }
      e.exports = n;
    },
    ys0W: function(e, t, n) {
      const r = n('QPJK');
      const a = n('2mBY');
      const i = n('5SQf');
      const o = n('BnbX').f;
      e.exports = function(e) {
        return function(t) {
          for (var n, s = i(t), c = a(s), l = c.length, u = 0, d = []; l > u; ) {(n = c[u++]), (r && !o.call(s, n)) || d.push(e ? [n, s[n]] : s[n]);}
          return d;
        };
      };
    },
    zLVn: function(e, t, n) {
      'use strict';
      function r(e, t) {
        if (null == e) {return {};}
        let n;
        let r;
        const a = {};
        const i = Object.keys(e);
        for (r = 0; r < i.length; r++) {(n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);}
        return a;
      }
      n.d(t, 'a', function() {
        return r;
      });
    },
    zTTH: function(e, t, n) {
      'use strict';
      const r = n('P8UN');
      const a = n('Wadk')(6);
      const i = 'findIndex';
      let o = !0;
      i in [] &&
        Array(1)[i](function() {
          o = !1;
        }),
      r(r.P + r.F * o, 'Array', {
        findIndex: function(e) {
          return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }),
      n('Dq1/')(i);
    },
  },
]);
//# sourceMappingURL=5095f2faf3496f1b7cf2ac65aad050cbc717db5e-ae3018d15a5115511cbf.js.map
