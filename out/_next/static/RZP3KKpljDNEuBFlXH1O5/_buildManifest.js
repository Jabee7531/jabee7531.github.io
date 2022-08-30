;(self.__BUILD_MANIFEST = (function (s, a) {
  return {
    __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
    '/': ['static/chunks/pages/index-3ac210d7f0cdc5c0.js'],
    '/404': ['static/chunks/pages/404-3607bcfd5c634236.js'],
    '/_error': ['static/chunks/pages/_error-a9f36ce656a10e9d.js'],
    '/about': [s, a, 'static/chunks/pages/about-439a54c8103464cb.js'],
    '/blog': ['static/chunks/pages/blog-bec87cdd3d5dca87.js'],
    '/blog/page/[page]': ['static/chunks/pages/blog/page/[page]-97e15fe6e19ca25d.js'],
    '/blog/[...slug]': [s, a, 'static/chunks/pages/blog/[...slug]-5f87243d6efe2844.js'],
    '/projects': ['static/chunks/pages/projects-f2805992a87d126c.js'],
    '/tags': ['static/chunks/pages/tags-195a99bf1f26025d.js'],
    '/tags/[tag]': ['static/chunks/pages/tags/[tag]-3104fbd43c5485df.js'],
    sortedPages: [
      '/',
      '/404',
      '/_app',
      '/_error',
      '/about',
      '/blog',
      '/blog/page/[page]',
      '/blog/[...slug]',
      '/projects',
      '/tags',
      '/tags/[tag]',
    ],
  }
})('static/chunks/410-1fac91fa0a8ba801.js', 'static/chunks/712-00c38b60515be178.js')),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()
