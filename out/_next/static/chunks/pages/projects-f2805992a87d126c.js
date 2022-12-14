;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [327],
  {
    8947: function (t, e, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/projects',
        function () {
          return r(2806)
        },
      ])
    },
    8100: function (t, e, r) {
      'use strict'
      var n = r(7320)
      function i(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        )
      }
      function a() {
        return (
          (a =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e]
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
              }
              return t
            }),
          a.apply(this, arguments)
        )
      }
      e.Z = function (t) {
        var e = a({}, t)
        return (0, n.tZ)(
          'img',
          (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = null != arguments[e] ? arguments[e] : {},
                n = Object.keys(r)
              'function' === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(r).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(r, t).enumerable
                  })
                )),
                n.forEach(function (e) {
                  i(t, e, r[e])
                })
            }
            return t
          })({}, e)
        )
      }
    },
    9831: function (t, e, r) {
      'use strict'
      r.d(e, {
        TQ: function () {
          return s
        },
        $t: function () {
          return d
        },
        Uy: function () {
          return m
        },
      })
      var n = r(7320),
        i = r(9008),
        a = r(1163),
        o = r(1576),
        c = r.n(o),
        l = function (t) {
          var e = t.title,
            r = t.description,
            o = t.ogType,
            l = t.ogImage,
            s = t.twImage,
            d = t.canonicalUrl,
            m = (0, a.useRouter)()
          return (0, n.BX)(i.default, {
            children: [
              (0, n.tZ)('title', { children: e }),
              (0, n.tZ)('meta', { name: 'robots', content: 'follow, index' }),
              (0, n.tZ)('meta', { name: 'description', content: r }),
              (0, n.tZ)('meta', {
                property: 'og:url',
                content: ''.concat(c().siteUrl).concat(m.asPath),
              }),
              (0, n.tZ)('meta', { property: 'og:type', content: o }),
              (0, n.tZ)('meta', { property: 'og:site_name', content: c().title }),
              (0, n.tZ)('meta', { property: 'og:description', content: r }),
              (0, n.tZ)('meta', { property: 'og:title', content: e }),
              'Array' === l.constructor.name
                ? l.map(function (t) {
                    var e = t.url
                    return (0, n.tZ)('meta', { property: 'og:image', content: e }, e)
                  })
                : (0, n.tZ)('meta', { property: 'og:image', content: l }, l),
              (0, n.tZ)('meta', { name: 'twitter:card', content: 'summary_large_image' }),
              (0, n.tZ)('meta', { name: 'twitter:site', content: c().twitter }),
              (0, n.tZ)('meta', { name: 'twitter:title', content: e }),
              (0, n.tZ)('meta', { name: 'twitter:description', content: r }),
              (0, n.tZ)('meta', { name: 'twitter:image', content: s }),
              (0, n.tZ)('link', {
                rel: 'canonical',
                href: d || ''.concat(c().siteUrl).concat(m.asPath),
              }),
            ],
          })
        },
        s = function (t) {
          var e = t.title,
            r = t.description,
            i = c().siteUrl + c().socialBanner,
            a = c().siteUrl + c().socialBanner
          return (0, n.tZ)(l, {
            title: e,
            description: r,
            ogType: 'website',
            ogImage: i,
            twImage: a,
          })
        },
        d = function (t) {
          var e = t.title,
            r = t.description,
            o = c().siteUrl + c().socialBanner,
            s = c().siteUrl + c().socialBanner,
            d = (0, a.useRouter)()
          return (0, n.BX)(n.HY, {
            children: [
              (0, n.tZ)(l, { title: e, description: r, ogType: 'website', ogImage: o, twImage: s }),
              (0, n.tZ)(i.default, {
                children: (0, n.tZ)('link', {
                  rel: 'alternate',
                  type: 'application/rss+xml',
                  title: ''.concat(r, ' - RSS feed'),
                  href: ''.concat(c().siteUrl).concat(d.asPath, '/feed.xml'),
                }),
              }),
            ],
          })
        },
        m = function (t) {
          var e = t.authorDetails,
            r = t.title,
            o = t.summary,
            s = t.date,
            d = t.lastmod,
            m = t.url,
            p = t.images,
            g = void 0 === p ? [] : p,
            u = t.canonicalUrl,
            h = ((0, a.useRouter)(), new Date(s).toISOString()),
            f = new Date(d || s).toISOString(),
            y = (0 === g.length ? [c().socialBanner] : 'string' === typeof g ? [g] : g).map(
              function (t) {
                return { '@type': 'ImageObject', url: t.includes('http') ? t : c().siteUrl + t }
              }
            ),
            b = {
              '@context': 'https://schema.org',
              '@type': 'Article',
              mainEntityOfPage: { '@type': 'WebPage', '@id': m },
              headline: r,
              image: y,
              datePublished: h,
              dateModified: f,
              author: e
                ? e.map(function (t) {
                    return { '@type': 'Person', name: t.name }
                  })
                : { '@type': 'Person', name: c().author },
              publisher: {
                '@type': 'Organization',
                name: c().author,
                logo: { '@type': 'ImageObject', url: ''.concat(c().siteUrl).concat(c().siteLogo) },
              },
              description: o,
            },
            Z = y[0].url
          return (0, n.BX)(n.HY, {
            children: [
              (0, n.tZ)(l, {
                title: r,
                description: o,
                ogType: 'article',
                ogImage: y,
                twImage: Z,
                canonicalUrl: u,
              }),
              (0, n.BX)(i.default, {
                children: [
                  s && (0, n.tZ)('meta', { property: 'article:published_time', content: h }),
                  d && (0, n.tZ)('meta', { property: 'article:modified_time', content: f }),
                  (0, n.tZ)('script', {
                    type: 'application/ld+json',
                    dangerouslySetInnerHTML: { __html: JSON.stringify(b, null, 2) },
                  }),
                ],
              }),
            ],
          })
        }
    },
    2806: function (t, e, r) {
      'use strict'
      r.r(e),
        r.d(e, {
          default: function () {
            return m
          },
        })
      var n = r(7320),
        i = r(1576),
        a = r.n(i),
        o = [
          {
            title: '\ud574\ucee4\ud1a4 \uc1fc\ud551\ubab0',
            description:
              '\ud574\ucee4\ud1a4\ucc98\ub7fc \ube60\ub974\uac8c \uc1fc\ud551\ubab0\uc758 \ud504\ub808\uc784\uc744 \ub9cc\ub4e4\uc5b4 \ubcf4\uace0 \uc2f6\uc5b4\uc11c \uc9c1\uc811 \uad6c\ud604\ud55c \uc1fc\ud551\ubab0.',
            imgSrc: '/static/images/google.png',
            href: 'https://hackathonshop.vercel.app',
          },
          {
            title: '\ud574\ucee4\ud1a4 \uc1fc\ud551\ubab0 Client',
            description:
              '\ud574\ucee4\ud1a4\ucc98\ub7fc \ube60\ub974\uac8c \uc1fc\ud551\ubab0\uc758 \ud504\ub808\uc784\uc744 \ub9cc\ub4e4\uc5b4 \ubcf4\uace0 \uc2f6\uc5b4\uc11c \uc9c1\uc811 \uad6c\ud604\ud55c \uc1fc\ud551\ubab0 \ud074\ub77c\uc774\uc5b8\ud2b8.',
            imgSrc: '/static/images/google.png',
            href: 'https://github.com/Jabee7531/hackathonshop-client',
          },
          {
            title: '\ud574\ucee4\ud1a4 \uc1fc\ud551\ubab0 Server',
            description:
              '\ud574\ucee4\ud1a4\ucc98\ub7fc \ube60\ub974\uac8c \uc1fc\ud551\ubab0\uc758 \ud504\ub808\uc784\uc744 \ub9cc\ub4e4\uc5b4 \ubcf4\uace0 \uc2f6\uc5b4\uc11c \uc9c1\uc811 \uad6c\ud604\ud55c \uc1fc\ud551\ubab0 \uc11c\ubc84.',
            imgSrc: '/static/images/google.png',
            href: 'https://github.com/Jabee7531/hackathonshop-server',
          },
          {
            title: '\ub450\ub9ac \uac24\ub7ec\ub9ac',
            description:
              '\uadc0\uc5ec\uc6b4 \ub450\ub9ac\uc758 \uac24\ub7ec\ub9ac\uc785\ub2c8\ub2e4. \uadc0\uc5ec\uc6b4 \uac15\uc544\uc9c0 \uc0ac\uc9c4\uc744 \uacf5\uc720\ud558\uace0 \ub313\uae00\uc744 \ub2ec\uc544 \uc18c\ud1b5\ud574 \ubcf4\uc138\uc694 !',
            imgSrc: '/static/images/duri-logo.png',
            href: 'https://duri.vercel.app',
          },
          {
            title: '\ub450\ub9ac \uac24\ub7ec\ub9ac Client',
            description:
              '\uadc0\uc5ec\uc6b4 \ub450\ub9ac\uc758 \uac24\ub7ec\ub9ac\uc785\ub2c8\ub2e4. \uadc0\uc5ec\uc6b4 \uac15\uc544\uc9c0 \uc0ac\uc9c4\uc744 \uacf5\uc720\ud558\uace0 \ub313\uae00\uc744 \ub2ec\uc544 \uc18c\ud1b5\ud574 \ubcf4\uc138\uc694 !',
            imgSrc: '/static/images/duri-logo.png',
            href: 'https://github.com/Jabee7531/duri-client',
          },
          {
            title: '\ub450\ub9ac \uac24\ub7ec\ub9ac Server',
            description:
              '\uadc0\uc5ec\uc6b4 \ub450\ub9ac\uc758 \uac24\ub7ec\ub9ac\uc785\ub2c8\ub2e4. \uadc0\uc5ec\uc6b4 \uac15\uc544\uc9c0 \uc0ac\uc9c4\uc744 \uacf5\uc720\ud558\uace0 \ub313\uae00\uc744 \ub2ec\uc544 \uc18c\ud1b5\ud574 \ubcf4\uc138\uc694 !',
            imgSrc: '/static/images/duri-logo.png',
            href: 'https://github.com/Jabee7531/duri-server',
          },
        ],
        c = r(8100),
        l = r(7233),
        s = function (t) {
          var e = t.title,
            r = t.description,
            i = t.imgSrc,
            a = t.href
          return (0, n.tZ)('div', {
            className: 'md p-4 md:w-1/2',
            style: { maxWidth: '544px' },
            children: (0, n.BX)('div', {
              className: ''.concat(
                i && 'h-full',
                '  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700'
              ),
              children: [
                i &&
                  (a
                    ? (0, n.tZ)(l.Z, {
                        href: a,
                        'aria-label': 'Link to '.concat(e),
                        children: (0, n.tZ)(c.Z, {
                          alt: e,
                          src: i,
                          className: 'object-cover object-center md:h-36 lg:h-48',
                          width: 544,
                          height: 306,
                        }),
                      })
                    : (0, n.tZ)(c.Z, {
                        alt: e,
                        src: i,
                        className: 'object-cover object-center md:h-36 lg:h-48',
                        width: 544,
                        height: 306,
                      })),
                (0, n.BX)('div', {
                  className: 'p-6',
                  children: [
                    (0, n.tZ)('h2', {
                      className: 'mb-3 text-2xl font-bold leading-8 tracking-tight',
                      children: a
                        ? (0, n.tZ)(l.Z, {
                            href: a,
                            'aria-label': 'Link to '.concat(e),
                            children: e,
                          })
                        : e,
                    }),
                    (0, n.tZ)('p', {
                      className: 'prose mb-3 max-w-none text-gray-500 dark:text-gray-400',
                      children: r,
                    }),
                    a &&
                      (0, n.tZ)(l.Z, {
                        href: a,
                        className:
                          'text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                        'aria-label': 'Link to '.concat(e),
                        children: 'Learn more \u2192',
                      }),
                  ],
                }),
              ],
            }),
          })
        },
        d = r(9831)
      function m() {
        return (0, n.BX)(n.HY, {
          children: [
            (0, n.tZ)(d.TQ, {
              title: 'Projects - '.concat(a().author),
              description: a().description,
            }),
            (0, n.BX)('div', {
              className: 'divide-y divide-gray-200 dark:divide-gray-700',
              children: [
                (0, n.tZ)('div', {
                  className: 'space-y-2 pt-6 pb-8 md:space-y-5',
                  children: (0, n.tZ)('h1', {
                    className:
                      'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                    children: 'Projects',
                  }),
                }),
                (0, n.tZ)('div', {
                  className: 'container py-12',
                  children: (0, n.tZ)('div', {
                    className: '-m-4 flex flex-wrap',
                    children: o.map(function (t) {
                      return (0,
                      n.tZ)(s, { title: t.title, description: t.description, imgSrc: t.imgSrc, href: t.href }, t.title)
                    }),
                  }),
                }),
              ],
            }),
          ],
        })
      }
    },
  },
  function (t) {
    t.O(0, [888, 179], function () {
      return (e = 8947), t((t.s = e))
      var e
    })
    var e = t.O()
    _N_E = e
  },
])
