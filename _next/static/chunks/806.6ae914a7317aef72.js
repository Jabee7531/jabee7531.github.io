'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [806],
  {
    8806: function (e, t, n) {
      n.r(t)
      var r = n(7320),
        c = n(1720),
        a = n(425),
        s = n(1576),
        u = n.n(s)
      t.default = function () {
        var e = (0, c.useState)(!0),
          t = e[0],
          n = e[1],
          s = (0, a.F)(),
          m = s.theme,
          i = s.resolvedTheme,
          o =
            'dark' === m || 'dark' === i
              ? u().comment.utterancesConfig.darkTheme
              : u().comment.utterancesConfig.theme,
          l = 'comments-container',
          d = (0, c.useCallback)(
            function () {
              n(!1)
              var e = document.createElement('script')
              ;(e.src = 'https://utteranc.es/client.js'),
                e.setAttribute('repo', u().comment.utterancesConfig.repo),
                e.setAttribute('issue-term', u().comment.utterancesConfig.issueTerm),
                e.setAttribute('label', u().comment.utterancesConfig.label),
                e.setAttribute('theme', o),
                e.setAttribute('crossorigin', 'anonymous'),
                (e.async = !0)
              var t = document.getElementById(l)
              return (
                t && t.appendChild(e),
                function () {
                  var e = document.getElementById(l)
                  e && (e.innerHTML = '')
                }
              )
            },
            [o]
          )
        return (
          (0, c.useEffect)(
            function () {
              document.querySelector('iframe.utterances-frame') && d()
            },
            [d]
          ),
          (0, r.BX)('div', {
            className: 'pt-6 pb-6 text-center text-gray-700 dark:text-gray-300',
            children: [
              t && (0, r.tZ)('button', { onClick: d, children: 'Load Comments' }),
              (0, r.tZ)('div', { className: 'utterances-frame relative', id: l }),
            ],
          })
        )
      }
    },
  },
])
