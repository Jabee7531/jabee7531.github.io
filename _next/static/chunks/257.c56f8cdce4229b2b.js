'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [257],
  {
    257: function (t, e, n) {
      n.r(e)
      var s = n(7320),
        i = n(1720),
        a = n(1576),
        r = n.n(a)
      e.default = function (t) {
        var e = t.frontMatter,
          n = (0, i.useState)(!0),
          a = n[0],
          o = n[1]
        return (0, s.BX)('div', {
          className: 'pt-6 pb-6 text-center text-gray-700 dark:text-gray-300',
          children: [
            a &&
              (0, s.tZ)('button', {
                onClick: function () {
                  if (
                    (o(!1),
                    (window.disqus_config = function () {
                      ;(this.page.url = window.location.href), (this.page.identifier = e.slug)
                    }),
                    void 0 === window.DISQUS)
                  ) {
                    var t = document.createElement('script')
                    ;(t.src =
                      'https://' + r().comment.disqusConfig.shortname + '.disqus.com/embed.js'),
                      t.setAttribute('data-timestamp', +new Date()),
                      t.setAttribute('crossorigin', 'anonymous'),
                      (t.async = !0),
                      document.body.appendChild(t)
                  } else window.DISQUS.reset({ reload: !0 })
                },
                children: 'Load Comments',
              }),
            (0, s.tZ)('div', { className: 'disqus-frame', id: 'disqus_thread' }),
          ],
        })
      }
    },
  },
])
