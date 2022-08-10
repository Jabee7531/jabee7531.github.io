;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [197],
  {
    2448: function (t, e, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/404',
        function () {
          return n(614)
        },
      ])
    },
    9831: function (t, e, n) {
      'use strict'
      n.d(e, {
        TQ: function () {
          return s
        },
        $t: function () {
          return m
        },
        Uy: function () {
          return d
        },
      })
      var r = n(7320),
        a = n(9008),
        i = n(1163),
        o = n(1576),
        c = n.n(o),
        l = function (t) {
          var e = t.title,
            n = t.description,
            o = t.ogType,
            l = t.ogImage,
            s = t.twImage,
            m = t.canonicalUrl,
            d = (0, i.useRouter)()
          return (0, r.BX)(a.default, {
            children: [
              (0, r.tZ)('title', { children: e }),
              (0, r.tZ)('meta', { name: 'robots', content: 'follow, index' }),
              (0, r.tZ)('meta', { name: 'description', content: n }),
              (0, r.tZ)('meta', {
                property: 'og:url',
                content: ''.concat(c().siteUrl).concat(d.asPath),
              }),
              (0, r.tZ)('meta', { property: 'og:type', content: o }),
              (0, r.tZ)('meta', { property: 'og:site_name', content: c().title }),
              (0, r.tZ)('meta', { property: 'og:description', content: n }),
              (0, r.tZ)('meta', { property: 'og:title', content: e }),
              'Array' === l.constructor.name
                ? l.map(function (t) {
                    var e = t.url
                    return (0, r.tZ)('meta', { property: 'og:image', content: e }, e)
                  })
                : (0, r.tZ)('meta', { property: 'og:image', content: l }, l),
              (0, r.tZ)('meta', { name: 'twitter:card', content: 'summary_large_image' }),
              (0, r.tZ)('meta', { name: 'twitter:site', content: c().twitter }),
              (0, r.tZ)('meta', { name: 'twitter:title', content: e }),
              (0, r.tZ)('meta', { name: 'twitter:description', content: n }),
              (0, r.tZ)('meta', { name: 'twitter:image', content: s }),
              (0, r.tZ)('link', {
                rel: 'canonical',
                href: m || ''.concat(c().siteUrl).concat(d.asPath),
              }),
            ],
          })
        },
        s = function (t) {
          var e = t.title,
            n = t.description,
            a = c().siteUrl + c().socialBanner,
            i = c().siteUrl + c().socialBanner
          return (0, r.tZ)(l, {
            title: e,
            description: n,
            ogType: 'website',
            ogImage: a,
            twImage: i,
          })
        },
        m = function (t) {
          var e = t.title,
            n = t.description,
            o = c().siteUrl + c().socialBanner,
            s = c().siteUrl + c().socialBanner,
            m = (0, i.useRouter)()
          return (0, r.BX)(r.HY, {
            children: [
              (0, r.tZ)(l, { title: e, description: n, ogType: 'website', ogImage: o, twImage: s }),
              (0, r.tZ)(a.default, {
                children: (0, r.tZ)('link', {
                  rel: 'alternate',
                  type: 'application/rss+xml',
                  title: ''.concat(n, ' - RSS feed'),
                  href: ''.concat(c().siteUrl).concat(m.asPath, '/feed.xml'),
                }),
              }),
            ],
          })
        },
        d = function (t) {
          var e = t.authorDetails,
            n = t.title,
            o = t.summary,
            s = t.date,
            m = t.lastmod,
            d = t.url,
            u = t.images,
            p = void 0 === u ? [] : u,
            g = t.canonicalUrl,
            h = ((0, i.useRouter)(), new Date(s).toISOString()),
            f = new Date(m || s).toISOString(),
            y = (0 === p.length ? [c().socialBanner] : 'string' === typeof p ? [p] : p).map(
              function (t) {
                return { '@type': 'ImageObject', url: t.includes('http') ? t : c().siteUrl + t }
              }
            ),
            Z = {
              '@context': 'https://schema.org',
              '@type': 'Article',
              mainEntityOfPage: { '@type': 'WebPage', '@id': d },
              headline: n,
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
            w = y[0].url
          return (0, r.BX)(r.HY, {
            children: [
              (0, r.tZ)(l, {
                title: n,
                description: o,
                ogType: 'article',
                ogImage: y,
                twImage: w,
                canonicalUrl: g,
              }),
              (0, r.BX)(a.default, {
                children: [
                  s && (0, r.tZ)('meta', { property: 'article:published_time', content: h }),
                  m && (0, r.tZ)('meta', { property: 'article:modified_time', content: f }),
                  (0, r.tZ)('script', {
                    type: 'application/ld+json',
                    dangerouslySetInnerHTML: { __html: JSON.stringify(Z, null, 2) },
                  }),
                ],
              }),
            ],
          })
        }
    },
    614: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, {
          default: function () {
            return l
          },
        })
      var r = n(7320),
        a = n(7233),
        i = n(9831),
        o = n(1576),
        c = n.n(o)
      function l() {
        return (0, r.BX)(r.HY, {
          children: [
            (0, r.tZ)(i.TQ, { title: 'Page Not Found - '.concat(c().title) }),
            (0, r.BX)('div', {
              className:
                'flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6',
              children: [
                (0, r.tZ)('div', {
                  className: 'space-x-2 pt-6 pb-8 md:space-y-5',
                  children: (0, r.tZ)('h1', {
                    className:
                      'text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14',
                    children: '404',
                  }),
                }),
                (0, r.BX)('div', {
                  className: 'max-w-md',
                  children: [
                    (0, r.tZ)('p', {
                      className: 'mb-4 text-xl font-bold leading-normal md:text-2xl',
                      children: "Sorry we couldn't find this page.",
                    }),
                    (0, r.tZ)('p', {
                      className: 'mb-8',
                      children:
                        'But dont worry, you can find plenty of other things on our homepage.',
                    }),
                    (0, r.tZ)(a.Z, {
                      href: '/',
                      children: (0, r.tZ)('button', {
                        className:
                          'focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500',
                        children: 'Back to homepage',
                      }),
                    }),
                  ],
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
      return (e = 2448), t((t.s = e))
      var e
    })
    var e = t.O()
    _N_E = e
  },
])
