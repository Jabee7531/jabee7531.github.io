'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [732],
  {
    732: function (t, e, a) {
      a.r(e)
      var n = a(7320),
        i = a(1720),
        r = a(425),
        s = a(1576),
        o = a.n(s)
      e.default = function () {
        var t = (0, i.useState)(!0),
          e = t[0],
          a = t[1],
          s = (0, r.F)(),
          c = s.theme,
          u = s.resolvedTheme,
          d =
            '' === o().comment.giscusConfig.themeURL
              ? 'dark' === c || 'dark' === u
                ? o().comment.giscusConfig.darkTheme
                : o().comment.giscusConfig.theme
              : o().comment.giscusConfig.themeURL,
          m = 'comments-container',
          g = (0, i.useCallback)(
            function () {
              var t
              a(!1)
              var e =
                  null === o() || void 0 === o() || null === (t = o().comment) || void 0 === t
                    ? void 0
                    : t.giscusConfig,
                n = e.repo,
                i = e.repositoryId,
                r = e.category,
                s = e.categoryId,
                c = e.mapping,
                u = e.reactions,
                g = e.metadata,
                l = e.inputPosition,
                p = e.lang,
                b = document.createElement('script')
              ;(b.src = 'https://giscus.app/client.js'),
                b.setAttribute('data-repo', n),
                b.setAttribute('data-repo-id', i),
                b.setAttribute('data-category', r),
                b.setAttribute('data-category-id', s),
                b.setAttribute('data-mapping', c),
                b.setAttribute('data-reactions-enabled', u),
                b.setAttribute('data-emit-metadata', g),
                b.setAttribute('data-input-position', l),
                b.setAttribute('data-lang', p),
                b.setAttribute('data-theme', d),
                b.setAttribute('crossorigin', 'anonymous'),
                (b.async = !0)
              var f = document.getElementById(m)
              return (
                f && f.appendChild(b),
                function () {
                  var t = document.getElementById(m)
                  t && (t.innerHTML = '')
                }
              )
            },
            [d]
          )
        return (
          (0, i.useEffect)(
            function () {
              document.querySelector('iframe.giscus-frame') && g()
            },
            [g]
          ),
          (0, n.BX)('div', {
            className: 'pt-6 pb-6 text-center text-gray-700 dark:text-gray-300',
            children: [
              e && (0, n.tZ)('button', { onClick: g, children: 'Load Comments' }),
              (0, n.tZ)('div', { className: 'giscus', id: m }),
            ],
          })
        )
      }
    },
  },
])
