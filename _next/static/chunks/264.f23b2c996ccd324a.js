;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [264],
  {
    9742: function (t, e) {
      'use strict'
      ;(e.byteLength = function (t) {
        var e = a(t),
          r = e[0],
          n = e[1]
        return (3 * (r + n)) / 4 - n
      }),
        (e.toByteArray = function (t) {
          var e,
            r,
            i = a(t),
            o = i[0],
            h = i[1],
            c = new s(
              (function (t, e, r) {
                return (3 * (e + r)) / 4 - r
              })(0, o, h)
            ),
            u = 0,
            f = h > 0 ? o - 4 : o
          for (r = 0; r < f; r += 4)
            (e =
              (n[t.charCodeAt(r)] << 18) |
              (n[t.charCodeAt(r + 1)] << 12) |
              (n[t.charCodeAt(r + 2)] << 6) |
              n[t.charCodeAt(r + 3)]),
              (c[u++] = (e >> 16) & 255),
              (c[u++] = (e >> 8) & 255),
              (c[u++] = 255 & e)
          2 === h &&
            ((e = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)), (c[u++] = 255 & e))
          1 === h &&
            ((e =
              (n[t.charCodeAt(r)] << 10) |
              (n[t.charCodeAt(r + 1)] << 4) |
              (n[t.charCodeAt(r + 2)] >> 2)),
            (c[u++] = (e >> 8) & 255),
            (c[u++] = 255 & e))
          return c
        }),
        (e.fromByteArray = function (t) {
          for (var e, n = t.length, s = n % 3, i = [], o = 16383, h = 0, a = n - s; h < a; h += o)
            i.push(c(t, h, h + o > a ? a : h + o))
          1 === s
            ? ((e = t[n - 1]), i.push(r[e >> 2] + r[(e << 4) & 63] + '=='))
            : 2 === s &&
              ((e = (t[n - 2] << 8) + t[n - 1]),
              i.push(r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + '='))
          return i.join('')
        })
      for (
        var r = [],
          n = [],
          s = 'undefined' !== typeof Uint8Array ? Uint8Array : Array,
          i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          o = 0,
          h = i.length;
        o < h;
        ++o
      )
        (r[o] = i[o]), (n[i.charCodeAt(o)] = o)
      function a(t) {
        var e = t.length
        if (e % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4')
        var r = t.indexOf('=')
        return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)]
      }
      function c(t, e, n) {
        for (var s, i, o = [], h = e; h < n; h += 3)
          (s = ((t[h] << 16) & 16711680) + ((t[h + 1] << 8) & 65280) + (255 & t[h + 2])),
            o.push(r[((i = s) >> 18) & 63] + r[(i >> 12) & 63] + r[(i >> 6) & 63] + r[63 & i])
        return o.join('')
      }
      ;(n['-'.charCodeAt(0)] = 62), (n['_'.charCodeAt(0)] = 63)
    },
    8764: function (t, e, r) {
      'use strict'
      var n = r(9742),
        s = r(645),
        i =
          'function' === typeof Symbol && 'function' === typeof Symbol.for
            ? Symbol.for('nodejs.util.inspect.custom')
            : null
      ;(e.Buffer = a),
        (e.SlowBuffer = function (t) {
          ;+t != t && (t = 0)
          return a.alloc(+t)
        }),
        (e.INSPECT_MAX_BYTES = 50)
      var o = 2147483647
      function h(t) {
        if (t > o) throw new RangeError('The value "' + t + '" is invalid for option "size"')
        var e = new Uint8Array(t)
        return Object.setPrototypeOf(e, a.prototype), e
      }
      function a(t, e, r) {
        if ('number' === typeof t) {
          if ('string' === typeof e)
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            )
          return f(t)
        }
        return c(t, e, r)
      }
      function c(t, e, r) {
        if ('string' === typeof t)
          return (function (t, e) {
            ;('string' === typeof e && '' !== e) || (e = 'utf8')
            if (!a.isEncoding(e)) throw new TypeError('Unknown encoding: ' + e)
            var r = 0 | y(t, e),
              n = h(r),
              s = n.write(t, e)
            s !== r && (n = n.slice(0, s))
            return n
          })(t, e)
        if (ArrayBuffer.isView(t))
          return (function (t) {
            if (F(t, Uint8Array)) {
              var e = new Uint8Array(t)
              return l(e.buffer, e.byteOffset, e.byteLength)
            }
            return p(t)
          })(t)
        if (null == t)
          throw new TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
              typeof t
          )
        if (F(t, ArrayBuffer) || (t && F(t.buffer, ArrayBuffer))) return l(t, e, r)
        if (
          'undefined' !== typeof SharedArrayBuffer &&
          (F(t, SharedArrayBuffer) || (t && F(t.buffer, SharedArrayBuffer)))
        )
          return l(t, e, r)
        if ('number' === typeof t)
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          )
        var n = t.valueOf && t.valueOf()
        if (null != n && n !== t) return a.from(n, e, r)
        var s = (function (t) {
          if (a.isBuffer(t)) {
            var e = 0 | d(t.length),
              r = h(e)
            return 0 === r.length || t.copy(r, 0, 0, e), r
          }
          if (void 0 !== t.length) return 'number' !== typeof t.length || V(t.length) ? h(0) : p(t)
          if ('Buffer' === t.type && Array.isArray(t.data)) return p(t.data)
        })(t)
        if (s) return s
        if (
          'undefined' !== typeof Symbol &&
          null != Symbol.toPrimitive &&
          'function' === typeof t[Symbol.toPrimitive]
        )
          return a.from(t[Symbol.toPrimitive]('string'), e, r)
        throw new TypeError(
          'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
            typeof t
        )
      }
      function u(t) {
        if ('number' !== typeof t) throw new TypeError('"size" argument must be of type number')
        if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
      }
      function f(t) {
        return u(t), h(t < 0 ? 0 : 0 | d(t))
      }
      function p(t) {
        for (var e = t.length < 0 ? 0 : 0 | d(t.length), r = h(e), n = 0; n < e; n += 1)
          r[n] = 255 & t[n]
        return r
      }
      function l(t, e, r) {
        if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds')
        if (t.byteLength < e + (r || 0))
          throw new RangeError('"length" is outside of buffer bounds')
        var n
        return (
          (n =
            void 0 === e && void 0 === r
              ? new Uint8Array(t)
              : void 0 === r
              ? new Uint8Array(t, e)
              : new Uint8Array(t, e, r)),
          Object.setPrototypeOf(n, a.prototype),
          n
        )
      }
      function d(t) {
        if (t >= o)
          throw new RangeError(
            'Attempt to allocate Buffer larger than maximum size: 0x' + o.toString(16) + ' bytes'
          )
        return 0 | t
      }
      function y(t, e) {
        if (a.isBuffer(t)) return t.length
        if (ArrayBuffer.isView(t) || F(t, ArrayBuffer)) return t.byteLength
        if ('string' !== typeof t)
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof t
          )
        var r = t.length,
          n = arguments.length > 2 && !0 === arguments[2]
        if (!n && 0 === r) return 0
        for (var s = !1; ; )
          switch (e) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return r
            case 'utf8':
            case 'utf-8':
              return M(t).length
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 2 * r
            case 'hex':
              return r >>> 1
            case 'base64':
              return q(t).length
            default:
              if (s) return n ? -1 : M(t).length
              ;(e = ('' + e).toLowerCase()), (s = !0)
          }
      }
      function g(t, e, r) {
        var n = !1
        if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return ''
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0)) return ''
        if ((r >>>= 0) <= (e >>>= 0)) return ''
        for (t || (t = 'utf8'); ; )
          switch (t) {
            case 'hex':
              return L(this, e, r)
            case 'utf8':
            case 'utf-8':
              return O(this, e, r)
            case 'ascii':
              return _(this, e, r)
            case 'latin1':
            case 'binary':
              return C(this, e, r)
            case 'base64':
              return R(this, e, r)
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return S(this, e, r)
            default:
              if (n) throw new TypeError('Unknown encoding: ' + t)
              ;(t = (t + '').toLowerCase()), (n = !0)
          }
      }
      function m(t, e, r) {
        var n = t[e]
        ;(t[e] = t[r]), (t[r] = n)
      }
      function b(t, e, r, n, s) {
        if (0 === t.length) return -1
        if (
          ('string' === typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          V((r = +r)) && (r = s ? 0 : t.length - 1),
          r < 0 && (r = t.length + r),
          r >= t.length)
        ) {
          if (s) return -1
          r = t.length - 1
        } else if (r < 0) {
          if (!s) return -1
          r = 0
        }
        if (('string' === typeof e && (e = a.from(e, n)), a.isBuffer(e)))
          return 0 === e.length ? -1 : w(t, e, r, n, s)
        if ('number' === typeof e)
          return (
            (e &= 255),
            'function' === typeof Uint8Array.prototype.indexOf
              ? s
                ? Uint8Array.prototype.indexOf.call(t, e, r)
                : Uint8Array.prototype.lastIndexOf.call(t, e, r)
              : w(t, [e], r, n, s)
          )
        throw new TypeError('val must be string, number or Buffer')
      }
      function w(t, e, r, n, s) {
        var i,
          o = 1,
          h = t.length,
          a = e.length
        if (
          void 0 !== n &&
          ('ucs2' === (n = String(n).toLowerCase()) ||
            'ucs-2' === n ||
            'utf16le' === n ||
            'utf-16le' === n)
        ) {
          if (t.length < 2 || e.length < 2) return -1
          ;(o = 2), (h /= 2), (a /= 2), (r /= 2)
        }
        function c(t, e) {
          return 1 === o ? t[e] : t.readUInt16BE(e * o)
        }
        if (s) {
          var u = -1
          for (i = r; i < h; i++)
            if (c(t, i) === c(e, -1 === u ? 0 : i - u)) {
              if ((-1 === u && (u = i), i - u + 1 === a)) return u * o
            } else -1 !== u && (i -= i - u), (u = -1)
        } else
          for (r + a > h && (r = h - a), i = r; i >= 0; i--) {
            for (var f = !0, p = 0; p < a; p++)
              if (c(t, i + p) !== c(e, p)) {
                f = !1
                break
              }
            if (f) return i
          }
        return -1
      }
      function v(t, e, r, n) {
        r = Number(r) || 0
        var s = t.length - r
        n ? (n = Number(n)) > s && (n = s) : (n = s)
        var i = e.length
        n > i / 2 && (n = i / 2)
        for (var o = 0; o < n; ++o) {
          var h = parseInt(e.substr(2 * o, 2), 16)
          if (V(h)) return o
          t[r + o] = h
        }
        return o
      }
      function E(t, e, r, n) {
        return D(M(e, t.length - r), t, r, n)
      }
      function A(t, e, r, n) {
        return D(
          (function (t) {
            for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r))
            return e
          })(e),
          t,
          r,
          n
        )
      }
      function k(t, e, r, n) {
        return D(q(e), t, r, n)
      }
      function B(t, e, r, n) {
        return D(
          (function (t, e) {
            for (var r, n, s, i = [], o = 0; o < t.length && !((e -= 2) < 0); ++o)
              (n = (r = t.charCodeAt(o)) >> 8), (s = r % 256), i.push(s), i.push(n)
            return i
          })(e, t.length - r),
          t,
          r,
          n
        )
      }
      function R(t, e, r) {
        return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r))
      }
      function O(t, e, r) {
        r = Math.min(t.length, r)
        for (var n = [], s = e; s < r; ) {
          var i,
            o,
            h,
            a,
            c = t[s],
            u = null,
            f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1
          if (s + f <= r)
            switch (f) {
              case 1:
                c < 128 && (u = c)
                break
              case 2:
                128 === (192 & (i = t[s + 1])) && (a = ((31 & c) << 6) | (63 & i)) > 127 && (u = a)
                break
              case 3:
                ;(i = t[s + 1]),
                  (o = t[s + 2]),
                  128 === (192 & i) &&
                    128 === (192 & o) &&
                    (a = ((15 & c) << 12) | ((63 & i) << 6) | (63 & o)) > 2047 &&
                    (a < 55296 || a > 57343) &&
                    (u = a)
                break
              case 4:
                ;(i = t[s + 1]),
                  (o = t[s + 2]),
                  (h = t[s + 3]),
                  128 === (192 & i) &&
                    128 === (192 & o) &&
                    128 === (192 & h) &&
                    (a = ((15 & c) << 18) | ((63 & i) << 12) | ((63 & o) << 6) | (63 & h)) >
                      65535 &&
                    a < 1114112 &&
                    (u = a)
            }
          null === u
            ? ((u = 65533), (f = 1))
            : u > 65535 &&
              ((u -= 65536), n.push(((u >>> 10) & 1023) | 55296), (u = 56320 | (1023 & u))),
            n.push(u),
            (s += f)
        }
        return (function (t) {
          var e = t.length
          if (e <= T) return String.fromCharCode.apply(String, t)
          var r = '',
            n = 0
          for (; n < e; ) r += String.fromCharCode.apply(String, t.slice(n, (n += T)))
          return r
        })(n)
      }
      ;(e.kMaxLength = o),
        (a.TYPED_ARRAY_SUPPORT = (function () {
          try {
            var t = new Uint8Array(1),
              e = {
                foo: function () {
                  return 42
                },
              }
            return (
              Object.setPrototypeOf(e, Uint8Array.prototype),
              Object.setPrototypeOf(t, e),
              42 === t.foo()
            )
          } catch (r) {
            return !1
          }
        })()),
        a.TYPED_ARRAY_SUPPORT ||
          'undefined' === typeof console ||
          'function' !== typeof console.error ||
          console.error(
            'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
          ),
        Object.defineProperty(a.prototype, 'parent', {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.buffer
          },
        }),
        Object.defineProperty(a.prototype, 'offset', {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.byteOffset
          },
        }),
        (a.poolSize = 8192),
        (a.from = function (t, e, r) {
          return c(t, e, r)
        }),
        Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(a, Uint8Array),
        (a.alloc = function (t, e, r) {
          return (function (t, e, r) {
            return (
              u(t),
              t <= 0
                ? h(t)
                : void 0 !== e
                ? 'string' === typeof r
                  ? h(t).fill(e, r)
                  : h(t).fill(e)
                : h(t)
            )
          })(t, e, r)
        }),
        (a.allocUnsafe = function (t) {
          return f(t)
        }),
        (a.allocUnsafeSlow = function (t) {
          return f(t)
        }),
        (a.isBuffer = function (t) {
          return null != t && !0 === t._isBuffer && t !== a.prototype
        }),
        (a.compare = function (t, e) {
          if (
            (F(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
            F(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
            !a.isBuffer(t) || !a.isBuffer(e))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            )
          if (t === e) return 0
          for (var r = t.length, n = e.length, s = 0, i = Math.min(r, n); s < i; ++s)
            if (t[s] !== e[s]) {
              ;(r = t[s]), (n = e[s])
              break
            }
          return r < n ? -1 : n < r ? 1 : 0
        }),
        (a.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0
            default:
              return !1
          }
        }),
        (a.concat = function (t, e) {
          if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers')
          if (0 === t.length) return a.alloc(0)
          var r
          if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length
          var n = a.allocUnsafe(e),
            s = 0
          for (r = 0; r < t.length; ++r) {
            var i = t[r]
            if (F(i, Uint8Array))
              s + i.length > n.length
                ? a.from(i).copy(n, s)
                : Uint8Array.prototype.set.call(n, i, s)
            else {
              if (!a.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers')
              i.copy(n, s)
            }
            s += i.length
          }
          return n
        }),
        (a.byteLength = y),
        (a.prototype._isBuffer = !0),
        (a.prototype.swap16 = function () {
          var t = this.length
          if (t % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits')
          for (var e = 0; e < t; e += 2) m(this, e, e + 1)
          return this
        }),
        (a.prototype.swap32 = function () {
          var t = this.length
          if (t % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits')
          for (var e = 0; e < t; e += 4) m(this, e, e + 3), m(this, e + 1, e + 2)
          return this
        }),
        (a.prototype.swap64 = function () {
          var t = this.length
          if (t % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits')
          for (var e = 0; e < t; e += 8)
            m(this, e, e + 7), m(this, e + 1, e + 6), m(this, e + 2, e + 5), m(this, e + 3, e + 4)
          return this
        }),
        (a.prototype.toString = function () {
          var t = this.length
          return 0 === t ? '' : 0 === arguments.length ? O(this, 0, t) : g.apply(this, arguments)
        }),
        (a.prototype.toLocaleString = a.prototype.toString),
        (a.prototype.equals = function (t) {
          if (!a.isBuffer(t)) throw new TypeError('Argument must be a Buffer')
          return this === t || 0 === a.compare(this, t)
        }),
        (a.prototype.inspect = function () {
          var t = '',
            r = e.INSPECT_MAX_BYTES
          return (
            (t = this.toString('hex', 0, r)
              .replace(/(.{2})/g, '$1 ')
              .trim()),
            this.length > r && (t += ' ... '),
            '<Buffer ' + t + '>'
          )
        }),
        i && (a.prototype[i] = a.prototype.inspect),
        (a.prototype.compare = function (t, e, r, n, s) {
          if ((F(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(t)))
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof t
            )
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === s && (s = this.length),
            e < 0 || r > t.length || n < 0 || s > this.length)
          )
            throw new RangeError('out of range index')
          if (n >= s && e >= r) return 0
          if (n >= s) return -1
          if (e >= r) return 1
          if (this === t) return 0
          for (
            var i = (s >>>= 0) - (n >>>= 0),
              o = (r >>>= 0) - (e >>>= 0),
              h = Math.min(i, o),
              c = this.slice(n, s),
              u = t.slice(e, r),
              f = 0;
            f < h;
            ++f
          )
            if (c[f] !== u[f]) {
              ;(i = c[f]), (o = u[f])
              break
            }
          return i < o ? -1 : o < i ? 1 : 0
        }),
        (a.prototype.includes = function (t, e, r) {
          return -1 !== this.indexOf(t, e, r)
        }),
        (a.prototype.indexOf = function (t, e, r) {
          return b(this, t, e, r, !0)
        }),
        (a.prototype.lastIndexOf = function (t, e, r) {
          return b(this, t, e, r, !1)
        }),
        (a.prototype.write = function (t, e, r, n) {
          if (void 0 === e) (n = 'utf8'), (r = this.length), (e = 0)
          else if (void 0 === r && 'string' === typeof e) (n = e), (r = this.length), (e = 0)
          else {
            if (!isFinite(e))
              throw new Error(
                'Buffer.write(string, encoding, offset[, length]) is no longer supported'
              )
            ;(e >>>= 0),
              isFinite(r) ? ((r >>>= 0), void 0 === n && (n = 'utf8')) : ((n = r), (r = void 0))
          }
          var s = this.length - e
          if (
            ((void 0 === r || r > s) && (r = s),
            (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
          )
            throw new RangeError('Attempt to write outside buffer bounds')
          n || (n = 'utf8')
          for (var i = !1; ; )
            switch (n) {
              case 'hex':
                return v(this, t, e, r)
              case 'utf8':
              case 'utf-8':
                return E(this, t, e, r)
              case 'ascii':
              case 'latin1':
              case 'binary':
                return A(this, t, e, r)
              case 'base64':
                return k(this, t, e, r)
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return B(this, t, e, r)
              default:
                if (i) throw new TypeError('Unknown encoding: ' + n)
                ;(n = ('' + n).toLowerCase()), (i = !0)
            }
        }),
        (a.prototype.toJSON = function () {
          return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) }
        })
      var T = 4096
      function _(t, e, r) {
        var n = ''
        r = Math.min(t.length, r)
        for (var s = e; s < r; ++s) n += String.fromCharCode(127 & t[s])
        return n
      }
      function C(t, e, r) {
        var n = ''
        r = Math.min(t.length, r)
        for (var s = e; s < r; ++s) n += String.fromCharCode(t[s])
        return n
      }
      function L(t, e, r) {
        var n = t.length
        ;(!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n)
        for (var s = '', i = e; i < r; ++i) s += z[t[i]]
        return s
      }
      function S(t, e, r) {
        for (var n = t.slice(e, r), s = '', i = 0; i < n.length - 1; i += 2)
          s += String.fromCharCode(n[i] + 256 * n[i + 1])
        return s
      }
      function x(t, e, r) {
        if (t % 1 !== 0 || t < 0) throw new RangeError('offset is not uint')
        if (t + e > r) throw new RangeError('Trying to access beyond buffer length')
      }
      function N(t, e, r, n, s, i) {
        if (!a.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance')
        if (e > s || e < i) throw new RangeError('"value" argument is out of bounds')
        if (r + n > t.length) throw new RangeError('Index out of range')
      }
      function U(t, e, r, n, s, i) {
        if (r + n > t.length) throw new RangeError('Index out of range')
        if (r < 0) throw new RangeError('Index out of range')
      }
      function I(t, e, r, n, i) {
        return (e = +e), (r >>>= 0), i || U(t, 0, r, 4), s.write(t, e, r, n, 23, 4), r + 4
      }
      function P(t, e, r, n, i) {
        return (e = +e), (r >>>= 0), i || U(t, 0, r, 8), s.write(t, e, r, n, 52, 8), r + 8
      }
      ;(a.prototype.slice = function (t, e) {
        var r = this.length
        ;(t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
          (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
          e < t && (e = t)
        var n = this.subarray(t, e)
        return Object.setPrototypeOf(n, a.prototype), n
      }),
        (a.prototype.readUintLE = a.prototype.readUIntLE =
          function (t, e, r) {
            ;(t >>>= 0), (e >>>= 0), r || x(t, e, this.length)
            for (var n = this[t], s = 1, i = 0; ++i < e && (s *= 256); ) n += this[t + i] * s
            return n
          }),
        (a.prototype.readUintBE = a.prototype.readUIntBE =
          function (t, e, r) {
            ;(t >>>= 0), (e >>>= 0), r || x(t, e, this.length)
            for (var n = this[t + --e], s = 1; e > 0 && (s *= 256); ) n += this[t + --e] * s
            return n
          }),
        (a.prototype.readUint8 = a.prototype.readUInt8 =
          function (t, e) {
            return (t >>>= 0), e || x(t, 1, this.length), this[t]
          }),
        (a.prototype.readUint16LE = a.prototype.readUInt16LE =
          function (t, e) {
            return (t >>>= 0), e || x(t, 2, this.length), this[t] | (this[t + 1] << 8)
          }),
        (a.prototype.readUint16BE = a.prototype.readUInt16BE =
          function (t, e) {
            return (t >>>= 0), e || x(t, 2, this.length), (this[t] << 8) | this[t + 1]
          }),
        (a.prototype.readUint32LE = a.prototype.readUInt32LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || x(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3]
            )
          }),
        (a.prototype.readUint32BE = a.prototype.readUInt32BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || x(t, 4, this.length),
              16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            )
          }),
        (a.prototype.readIntLE = function (t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || x(t, e, this.length)
          for (var n = this[t], s = 1, i = 0; ++i < e && (s *= 256); ) n += this[t + i] * s
          return n >= (s *= 128) && (n -= Math.pow(2, 8 * e)), n
        }),
        (a.prototype.readIntBE = function (t, e, r) {
          ;(t >>>= 0), (e >>>= 0), r || x(t, e, this.length)
          for (var n = e, s = 1, i = this[t + --n]; n > 0 && (s *= 256); ) i += this[t + --n] * s
          return i >= (s *= 128) && (i -= Math.pow(2, 8 * e)), i
        }),
        (a.prototype.readInt8 = function (t, e) {
          return (
            (t >>>= 0),
            e || x(t, 1, this.length),
            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
          )
        }),
        (a.prototype.readInt16LE = function (t, e) {
          ;(t >>>= 0), e || x(t, 2, this.length)
          var r = this[t] | (this[t + 1] << 8)
          return 32768 & r ? 4294901760 | r : r
        }),
        (a.prototype.readInt16BE = function (t, e) {
          ;(t >>>= 0), e || x(t, 2, this.length)
          var r = this[t + 1] | (this[t] << 8)
          return 32768 & r ? 4294901760 | r : r
        }),
        (a.prototype.readInt32LE = function (t, e) {
          return (
            (t >>>= 0),
            e || x(t, 4, this.length),
            this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24)
          )
        }),
        (a.prototype.readInt32BE = function (t, e) {
          return (
            (t >>>= 0),
            e || x(t, 4, this.length),
            (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]
          )
        }),
        (a.prototype.readFloatLE = function (t, e) {
          return (t >>>= 0), e || x(t, 4, this.length), s.read(this, t, !0, 23, 4)
        }),
        (a.prototype.readFloatBE = function (t, e) {
          return (t >>>= 0), e || x(t, 4, this.length), s.read(this, t, !1, 23, 4)
        }),
        (a.prototype.readDoubleLE = function (t, e) {
          return (t >>>= 0), e || x(t, 8, this.length), s.read(this, t, !0, 52, 8)
        }),
        (a.prototype.readDoubleBE = function (t, e) {
          return (t >>>= 0), e || x(t, 8, this.length), s.read(this, t, !1, 52, 8)
        }),
        (a.prototype.writeUintLE = a.prototype.writeUIntLE =
          function (t, e, r, n) {
            ;((t = +t), (e >>>= 0), (r >>>= 0), n) || N(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
            var s = 1,
              i = 0
            for (this[e] = 255 & t; ++i < r && (s *= 256); ) this[e + i] = (t / s) & 255
            return e + r
          }),
        (a.prototype.writeUintBE = a.prototype.writeUIntBE =
          function (t, e, r, n) {
            ;((t = +t), (e >>>= 0), (r >>>= 0), n) || N(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
            var s = r - 1,
              i = 1
            for (this[e + s] = 255 & t; --s >= 0 && (i *= 256); ) this[e + s] = (t / i) & 255
            return e + r
          }),
        (a.prototype.writeUint8 = a.prototype.writeUInt8 =
          function (t, e, r) {
            return (t = +t), (e >>>= 0), r || N(this, t, e, 1, 255, 0), (this[e] = 255 & t), e + 1
          }),
        (a.prototype.writeUint16LE = a.prototype.writeUInt16LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || N(this, t, e, 2, 65535, 0),
              (this[e] = 255 & t),
              (this[e + 1] = t >>> 8),
              e + 2
            )
          }),
        (a.prototype.writeUint16BE = a.prototype.writeUInt16BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || N(this, t, e, 2, 65535, 0),
              (this[e] = t >>> 8),
              (this[e + 1] = 255 & t),
              e + 2
            )
          }),
        (a.prototype.writeUint32LE = a.prototype.writeUInt32LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || N(this, t, e, 4, 4294967295, 0),
              (this[e + 3] = t >>> 24),
              (this[e + 2] = t >>> 16),
              (this[e + 1] = t >>> 8),
              (this[e] = 255 & t),
              e + 4
            )
          }),
        (a.prototype.writeUint32BE = a.prototype.writeUInt32BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || N(this, t, e, 4, 4294967295, 0),
              (this[e] = t >>> 24),
              (this[e + 1] = t >>> 16),
              (this[e + 2] = t >>> 8),
              (this[e + 3] = 255 & t),
              e + 4
            )
          }),
        (a.prototype.writeIntLE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            var s = Math.pow(2, 8 * r - 1)
            N(this, t, e, r, s - 1, -s)
          }
          var i = 0,
            o = 1,
            h = 0
          for (this[e] = 255 & t; ++i < r && (o *= 256); )
            t < 0 && 0 === h && 0 !== this[e + i - 1] && (h = 1),
              (this[e + i] = (((t / o) >> 0) - h) & 255)
          return e + r
        }),
        (a.prototype.writeIntBE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            var s = Math.pow(2, 8 * r - 1)
            N(this, t, e, r, s - 1, -s)
          }
          var i = r - 1,
            o = 1,
            h = 0
          for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
            t < 0 && 0 === h && 0 !== this[e + i + 1] && (h = 1),
              (this[e + i] = (((t / o) >> 0) - h) & 255)
          return e + r
        }),
        (a.prototype.writeInt8 = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || N(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          )
        }),
        (a.prototype.writeInt16LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || N(this, t, e, 2, 32767, -32768),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          )
        }),
        (a.prototype.writeInt16BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || N(this, t, e, 2, 32767, -32768),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          )
        }),
        (a.prototype.writeInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || N(this, t, e, 4, 2147483647, -2147483648),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          )
        }),
        (a.prototype.writeInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || N(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          )
        }),
        (a.prototype.writeFloatLE = function (t, e, r) {
          return I(this, t, e, !0, r)
        }),
        (a.prototype.writeFloatBE = function (t, e, r) {
          return I(this, t, e, !1, r)
        }),
        (a.prototype.writeDoubleLE = function (t, e, r) {
          return P(this, t, e, !0, r)
        }),
        (a.prototype.writeDoubleBE = function (t, e, r) {
          return P(this, t, e, !1, r)
        }),
        (a.prototype.copy = function (t, e, r, n) {
          if (!a.isBuffer(t)) throw new TypeError('argument should be a Buffer')
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r)
          )
            return 0
          if (0 === t.length || 0 === this.length) return 0
          if (e < 0) throw new RangeError('targetStart out of bounds')
          if (r < 0 || r >= this.length) throw new RangeError('Index out of range')
          if (n < 0) throw new RangeError('sourceEnd out of bounds')
          n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r)
          var s = n - r
          return (
            this === t && 'function' === typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(e, r, n)
              : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
            s
          )
        }),
        (a.prototype.fill = function (t, e, r, n) {
          if ('string' === typeof t) {
            if (
              ('string' === typeof e
                ? ((n = e), (e = 0), (r = this.length))
                : 'string' === typeof r && ((n = r), (r = this.length)),
              void 0 !== n && 'string' !== typeof n)
            )
              throw new TypeError('encoding must be a string')
            if ('string' === typeof n && !a.isEncoding(n))
              throw new TypeError('Unknown encoding: ' + n)
            if (1 === t.length) {
              var s = t.charCodeAt(0)
              ;(('utf8' === n && s < 128) || 'latin1' === n) && (t = s)
            }
          } else 'number' === typeof t ? (t &= 255) : 'boolean' === typeof t && (t = Number(t))
          if (e < 0 || this.length < e || this.length < r)
            throw new RangeError('Out of range index')
          if (r <= e) return this
          var i
          if (
            ((e >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            t || (t = 0),
            'number' === typeof t)
          )
            for (i = e; i < r; ++i) this[i] = t
          else {
            var o = a.isBuffer(t) ? t : a.from(t, n),
              h = o.length
            if (0 === h)
              throw new TypeError('The value "' + t + '" is invalid for argument "value"')
            for (i = 0; i < r - e; ++i) this[i + e] = o[i % h]
          }
          return this
        })
      var j = /[^+/0-9A-Za-z-_]/g
      function M(t, e) {
        var r
        e = e || 1 / 0
        for (var n = t.length, s = null, i = [], o = 0; o < n; ++o) {
          if ((r = t.charCodeAt(o)) > 55295 && r < 57344) {
            if (!s) {
              if (r > 56319) {
                ;(e -= 3) > -1 && i.push(239, 191, 189)
                continue
              }
              if (o + 1 === n) {
                ;(e -= 3) > -1 && i.push(239, 191, 189)
                continue
              }
              s = r
              continue
            }
            if (r < 56320) {
              ;(e -= 3) > -1 && i.push(239, 191, 189), (s = r)
              continue
            }
            r = 65536 + (((s - 55296) << 10) | (r - 56320))
          } else s && (e -= 3) > -1 && i.push(239, 191, 189)
          if (((s = null), r < 128)) {
            if ((e -= 1) < 0) break
            i.push(r)
          } else if (r < 2048) {
            if ((e -= 2) < 0) break
            i.push((r >> 6) | 192, (63 & r) | 128)
          } else if (r < 65536) {
            if ((e -= 3) < 0) break
            i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128)
          } else {
            if (!(r < 1114112)) throw new Error('Invalid code point')
            if ((e -= 4) < 0) break
            i.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128)
          }
        }
        return i
      }
      function q(t) {
        return n.toByteArray(
          (function (t) {
            if ((t = (t = t.split('=')[0]).trim().replace(j, '')).length < 2) return ''
            for (; t.length % 4 !== 0; ) t += '='
            return t
          })(t)
        )
      }
      function D(t, e, r, n) {
        for (var s = 0; s < n && !(s + r >= e.length || s >= t.length); ++s) e[s + r] = t[s]
        return s
      }
      function F(t, e) {
        return (
          t instanceof e ||
          (null != t &&
            null != t.constructor &&
            null != t.constructor.name &&
            t.constructor.name === e.name)
        )
      }
      function V(t) {
        return t !== t
      }
      var z = (function () {
        for (var t = '0123456789abcdef', e = new Array(256), r = 0; r < 16; ++r)
          for (var n = 16 * r, s = 0; s < 16; ++s) e[n + s] = t[r] + t[s]
        return e
      })()
    },
    645: function (t, e) {
      ;(e.read = function (t, e, r, n, s) {
        var i,
          o,
          h = 8 * s - n - 1,
          a = (1 << h) - 1,
          c = a >> 1,
          u = -7,
          f = r ? s - 1 : 0,
          p = r ? -1 : 1,
          l = t[e + f]
        for (
          f += p, i = l & ((1 << -u) - 1), l >>= -u, u += h;
          u > 0;
          i = 256 * i + t[e + f], f += p, u -= 8
        );
        for (
          o = i & ((1 << -u) - 1), i >>= -u, u += n;
          u > 0;
          o = 256 * o + t[e + f], f += p, u -= 8
        );
        if (0 === i) i = 1 - c
        else {
          if (i === a) return o ? NaN : (1 / 0) * (l ? -1 : 1)
          ;(o += Math.pow(2, n)), (i -= c)
        }
        return (l ? -1 : 1) * o * Math.pow(2, i - n)
      }),
        (e.write = function (t, e, r, n, s, i) {
          var o,
            h,
            a,
            c = 8 * i - s - 1,
            u = (1 << c) - 1,
            f = u >> 1,
            p = 23 === s ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            l = n ? 0 : i - 1,
            d = n ? 1 : -1,
            y = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((h = isNaN(e) ? 1 : 0), (o = u))
                : ((o = Math.floor(Math.log(e) / Math.LN2)),
                  e * (a = Math.pow(2, -o)) < 1 && (o--, (a *= 2)),
                  (e += o + f >= 1 ? p / a : p * Math.pow(2, 1 - f)) * a >= 2 && (o++, (a /= 2)),
                  o + f >= u
                    ? ((h = 0), (o = u))
                    : o + f >= 1
                    ? ((h = (e * a - 1) * Math.pow(2, s)), (o += f))
                    : ((h = e * Math.pow(2, f - 1) * Math.pow(2, s)), (o = 0)));
            s >= 8;
            t[r + l] = 255 & h, l += d, h /= 256, s -= 8
          );
          for (o = (o << s) | h, c += s; c > 0; t[r + l] = 255 & o, l += d, o /= 256, c -= 8);
          t[r + l - d] |= 128 * y
        })
    },
    3264: function (t, e, r) {
      'use strict'
      r.r(e),
        r.d(e, {
          Manager: function () {
            return dt
          },
          Socket: function () {
            return pt
          },
          connect: function () {
            return gt
          },
          default: function () {
            return gt
          },
          io: function () {
            return gt
          },
          protocol: function () {
            return it
          },
        })
      var n = {}
      r.r(n),
        r.d(n, {
          Decoder: function () {
            return at
          },
          Encoder: function () {
            return ht
          },
          PacketType: function () {
            return ot
          },
          protocol: function () {
            return it
          },
        })
      const s = Object.create(null)
      ;(s.open = '0'),
        (s.close = '1'),
        (s.ping = '2'),
        (s.pong = '3'),
        (s.message = '4'),
        (s.upgrade = '5'),
        (s.noop = '6')
      const i = Object.create(null)
      Object.keys(s).forEach((t) => {
        i[s[t]] = t
      })
      const o = { type: 'error', data: 'parser error' },
        h =
          'function' === typeof Blob ||
          ('undefined' !== typeof Blob &&
            '[object BlobConstructor]' === Object.prototype.toString.call(Blob)),
        a = 'function' === typeof ArrayBuffer,
        c = (t, e) => {
          const r = new FileReader()
          return (
            (r.onload = function () {
              const t = r.result.split(',')[1]
              e('b' + t)
            }),
            r.readAsDataURL(t)
          )
        }
      var u = ({ type: t, data: e }, r, n) => {
        return h && e instanceof Blob
          ? r
            ? n(e)
            : c(e, n)
          : a &&
            (e instanceof ArrayBuffer ||
              ((i = e),
              'function' === typeof ArrayBuffer.isView
                ? ArrayBuffer.isView(i)
                : i && i.buffer instanceof ArrayBuffer))
          ? r
            ? n(e)
            : c(new Blob([e]), n)
          : n(s[t] + (e || ''))
        var i
      }
      const f = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        p = 'undefined' === typeof Uint8Array ? [] : new Uint8Array(256)
      for (let bt = 0; bt < f.length; bt++) p[f.charCodeAt(bt)] = bt
      const l = 'function' === typeof ArrayBuffer,
        d = (t, e) => {
          if (l) {
            const r = ((t) => {
              let e,
                r,
                n,
                s,
                i,
                o = 0.75 * t.length,
                h = t.length,
                a = 0
              '=' === t[t.length - 1] && (o--, '=' === t[t.length - 2] && o--)
              const c = new ArrayBuffer(o),
                u = new Uint8Array(c)
              for (e = 0; e < h; e += 4)
                (r = p[t.charCodeAt(e)]),
                  (n = p[t.charCodeAt(e + 1)]),
                  (s = p[t.charCodeAt(e + 2)]),
                  (i = p[t.charCodeAt(e + 3)]),
                  (u[a++] = (r << 2) | (n >> 4)),
                  (u[a++] = ((15 & n) << 4) | (s >> 2)),
                  (u[a++] = ((3 & s) << 6) | (63 & i))
              return c
            })(t)
            return y(r, e)
          }
          return { base64: !0, data: t }
        },
        y = (t, e) => ('blob' === e && t instanceof ArrayBuffer ? new Blob([t]) : t)
      var g = (t, e) => {
        if ('string' !== typeof t) return { type: 'message', data: y(t, e) }
        const r = t.charAt(0)
        if ('b' === r) return { type: 'message', data: d(t.substring(1), e) }
        return i[r] ? (t.length > 1 ? { type: i[r], data: t.substring(1) } : { type: i[r] }) : o
      }
      const m = String.fromCharCode(30)
      function b(t) {
        if (t)
          return (function (t) {
            for (var e in b.prototype) t[e] = b.prototype[e]
            return t
          })(t)
      }
      ;(b.prototype.on = b.prototype.addEventListener =
        function (t, e) {
          return (
            (this._callbacks = this._callbacks || {}),
            (this._callbacks['$' + t] = this._callbacks['$' + t] || []).push(e),
            this
          )
        }),
        (b.prototype.once = function (t, e) {
          function r() {
            this.off(t, r), e.apply(this, arguments)
          }
          return (r.fn = e), this.on(t, r), this
        }),
        (b.prototype.off =
          b.prototype.removeListener =
          b.prototype.removeAllListeners =
          b.prototype.removeEventListener =
            function (t, e) {
              if (((this._callbacks = this._callbacks || {}), 0 == arguments.length))
                return (this._callbacks = {}), this
              var r,
                n = this._callbacks['$' + t]
              if (!n) return this
              if (1 == arguments.length) return delete this._callbacks['$' + t], this
              for (var s = 0; s < n.length; s++)
                if ((r = n[s]) === e || r.fn === e) {
                  n.splice(s, 1)
                  break
                }
              return 0 === n.length && delete this._callbacks['$' + t], this
            }),
        (b.prototype.emit = function (t) {
          this._callbacks = this._callbacks || {}
          for (
            var e = new Array(arguments.length - 1), r = this._callbacks['$' + t], n = 1;
            n < arguments.length;
            n++
          )
            e[n - 1] = arguments[n]
          if (r) {
            n = 0
            for (var s = (r = r.slice(0)).length; n < s; ++n) r[n].apply(this, e)
          }
          return this
        }),
        (b.prototype.emitReserved = b.prototype.emit),
        (b.prototype.listeners = function (t) {
          return (this._callbacks = this._callbacks || {}), this._callbacks['$' + t] || []
        }),
        (b.prototype.hasListeners = function (t) {
          return !!this.listeners(t).length
        })
      const w =
        'undefined' !== typeof self
          ? self
          : 'undefined' !== typeof window
          ? window
          : Function('return this')()
      function v(t, ...e) {
        return e.reduce((e, r) => (t.hasOwnProperty(r) && (e[r] = t[r]), e), {})
      }
      const E = setTimeout,
        A = clearTimeout
      function k(t, e) {
        e.useNativeTimers
          ? ((t.setTimeoutFn = E.bind(w)), (t.clearTimeoutFn = A.bind(w)))
          : ((t.setTimeoutFn = setTimeout.bind(w)), (t.clearTimeoutFn = clearTimeout.bind(w)))
      }
      class B extends Error {
        constructor(t, e, r) {
          super(t), (this.description = e), (this.context = r), (this.type = 'TransportError')
        }
      }
      class R extends b {
        constructor(t) {
          super(),
            (this.writable = !1),
            k(this, t),
            (this.opts = t),
            (this.query = t.query),
            (this.readyState = ''),
            (this.socket = t.socket)
        }
        onError(t, e, r) {
          return super.emitReserved('error', new B(t, e, r)), this
        }
        open() {
          return (
            ('closed' !== this.readyState && '' !== this.readyState) ||
              ((this.readyState = 'opening'), this.doOpen()),
            this
          )
        }
        close() {
          return (
            ('opening' !== this.readyState && 'open' !== this.readyState) ||
              (this.doClose(), this.onClose()),
            this
          )
        }
        send(t) {
          'open' === this.readyState && this.write(t)
        }
        onOpen() {
          ;(this.readyState = 'open'), (this.writable = !0), super.emitReserved('open')
        }
        onData(t) {
          const e = g(t, this.socket.binaryType)
          this.onPacket(e)
        }
        onPacket(t) {
          super.emitReserved('packet', t)
        }
        onClose(t) {
          ;(this.readyState = 'closed'), super.emitReserved('close', t)
        }
      }
      const O = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
        T = {}
      let _,
        C = 0,
        L = 0
      function S(t) {
        let e = ''
        do {
          ;(e = O[t % 64] + e), (t = Math.floor(t / 64))
        } while (t > 0)
        return e
      }
      function x() {
        const t = S(+new Date())
        return t !== _ ? ((C = 0), (_ = t)) : t + '.' + S(C++)
      }
      for (; L < 64; L++) T[O[L]] = L
      function N(t) {
        let e = ''
        for (let r in t)
          t.hasOwnProperty(r) &&
            (e.length && (e += '&'), (e += encodeURIComponent(r) + '=' + encodeURIComponent(t[r])))
        return e
      }
      let U = !1
      try {
        U = 'undefined' !== typeof XMLHttpRequest && 'withCredentials' in new XMLHttpRequest()
      } catch (mt) {}
      const I = U
      function P(t) {
        const e = t.xdomain
        try {
          if ('undefined' !== typeof XMLHttpRequest && (!e || I)) return new XMLHttpRequest()
        } catch (r) {}
        if (!e)
          try {
            return new w[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP')
          } catch (r) {}
      }
      function j() {}
      const M = null != new P({ xdomain: !1 }).responseType
      class q extends b {
        constructor(t, e) {
          super(),
            k(this, e),
            (this.opts = e),
            (this.method = e.method || 'GET'),
            (this.uri = t),
            (this.async = !1 !== e.async),
            (this.data = void 0 !== e.data ? e.data : null),
            this.create()
        }
        create() {
          const t = v(
            this.opts,
            'agent',
            'pfx',
            'key',
            'passphrase',
            'cert',
            'ca',
            'ciphers',
            'rejectUnauthorized',
            'autoUnref'
          )
          ;(t.xdomain = !!this.opts.xd), (t.xscheme = !!this.opts.xs)
          const e = (this.xhr = new P(t))
          try {
            e.open(this.method, this.uri, this.async)
            try {
              if (this.opts.extraHeaders) {
                e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0)
                for (let t in this.opts.extraHeaders)
                  this.opts.extraHeaders.hasOwnProperty(t) &&
                    e.setRequestHeader(t, this.opts.extraHeaders[t])
              }
            } catch (r) {}
            if ('POST' === this.method)
              try {
                e.setRequestHeader('Content-type', 'text/plain;charset=UTF-8')
              } catch (r) {}
            try {
              e.setRequestHeader('Accept', '*/*')
            } catch (r) {}
            'withCredentials' in e && (e.withCredentials = this.opts.withCredentials),
              this.opts.requestTimeout && (e.timeout = this.opts.requestTimeout),
              (e.onreadystatechange = () => {
                4 === e.readyState &&
                  (200 === e.status || 1223 === e.status
                    ? this.onLoad()
                    : this.setTimeoutFn(() => {
                        this.onError('number' === typeof e.status ? e.status : 0)
                      }, 0))
              }),
              e.send(this.data)
          } catch (r) {
            return void this.setTimeoutFn(() => {
              this.onError(r)
            }, 0)
          }
          'undefined' !== typeof document &&
            ((this.index = q.requestsCount++), (q.requests[this.index] = this))
        }
        onError(t) {
          this.emitReserved('error', t, this.xhr), this.cleanup(!0)
        }
        cleanup(t) {
          if ('undefined' !== typeof this.xhr && null !== this.xhr) {
            if (((this.xhr.onreadystatechange = j), t))
              try {
                this.xhr.abort()
              } catch (e) {}
            'undefined' !== typeof document && delete q.requests[this.index], (this.xhr = null)
          }
        }
        onLoad() {
          const t = this.xhr.responseText
          null !== t && (this.emitReserved('data', t), this.emitReserved('success'), this.cleanup())
        }
        abort() {
          this.cleanup()
        }
      }
      if (((q.requestsCount = 0), (q.requests = {}), 'undefined' !== typeof document))
        if ('function' === typeof attachEvent) attachEvent('onunload', D)
        else if ('function' === typeof addEventListener) {
          addEventListener('onpagehide' in w ? 'pagehide' : 'unload', D, !1)
        }
      function D() {
        for (let t in q.requests) q.requests.hasOwnProperty(t) && q.requests[t].abort()
      }
      const F =
          'function' === typeof Promise && 'function' === typeof Promise.resolve
            ? (t) => Promise.resolve().then(t)
            : (t, e) => e(t, 0),
        V = w.WebSocket || w.MozWebSocket
      r(8764).Buffer
      const z =
        'undefined' !== typeof navigator &&
        'string' === typeof navigator.product &&
        'reactnative' === navigator.product.toLowerCase()
      const Y = {
          websocket: class extends R {
            constructor(t) {
              super(t), (this.supportsBinary = !t.forceBase64)
            }
            get name() {
              return 'websocket'
            }
            doOpen() {
              if (!this.check()) return
              const t = this.uri(),
                e = this.opts.protocols,
                r = z
                  ? {}
                  : v(
                      this.opts,
                      'agent',
                      'perMessageDeflate',
                      'pfx',
                      'key',
                      'passphrase',
                      'cert',
                      'ca',
                      'ciphers',
                      'rejectUnauthorized',
                      'localAddress',
                      'protocolVersion',
                      'origin',
                      'maxPayload',
                      'family',
                      'checkServerIdentity'
                    )
              this.opts.extraHeaders && (r.headers = this.opts.extraHeaders)
              try {
                this.ws = z ? new V(t, e, r) : e ? new V(t, e) : new V(t)
              } catch (mt) {
                return this.emitReserved('error', mt)
              }
              ;(this.ws.binaryType = this.socket.binaryType || 'arraybuffer'),
                this.addEventListeners()
            }
            addEventListeners() {
              ;(this.ws.onopen = () => {
                this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
              }),
                (this.ws.onclose = (t) =>
                  this.onClose({ description: 'websocket connection closed', context: t })),
                (this.ws.onmessage = (t) => this.onData(t.data)),
                (this.ws.onerror = (t) => this.onError('websocket error', t))
            }
            write(t) {
              this.writable = !1
              for (let e = 0; e < t.length; e++) {
                const r = t[e],
                  n = e === t.length - 1
                u(r, this.supportsBinary, (t) => {
                  try {
                    this.ws.send(t)
                  } catch (e) {}
                  n &&
                    F(() => {
                      ;(this.writable = !0), this.emitReserved('drain')
                    }, this.setTimeoutFn)
                })
              }
            }
            doClose() {
              'undefined' !== typeof this.ws && (this.ws.close(), (this.ws = null))
            }
            uri() {
              let t = this.query || {}
              const e = this.opts.secure ? 'wss' : 'ws'
              let r = ''
              this.opts.port &&
                (('wss' === e && 443 !== Number(this.opts.port)) ||
                  ('ws' === e && 80 !== Number(this.opts.port))) &&
                (r = ':' + this.opts.port),
                this.opts.timestampRequests && (t[this.opts.timestampParam] = x()),
                this.supportsBinary || (t.b64 = 1)
              const n = N(t)
              return (
                e +
                '://' +
                (-1 !== this.opts.hostname.indexOf(':')
                  ? '[' + this.opts.hostname + ']'
                  : this.opts.hostname) +
                r +
                this.opts.path +
                (n.length ? '?' + n : '')
              )
            }
            check() {
              return !!V
            }
          },
          polling: class extends R {
            constructor(t) {
              if ((super(t), (this.polling = !1), 'undefined' !== typeof location)) {
                const e = 'https:' === location.protocol
                let r = location.port
                r || (r = e ? '443' : '80'),
                  (this.xd =
                    ('undefined' !== typeof location && t.hostname !== location.hostname) ||
                    r !== t.port),
                  (this.xs = t.secure !== e)
              }
              const e = t && t.forceBase64
              this.supportsBinary = M && !e
            }
            get name() {
              return 'polling'
            }
            doOpen() {
              this.poll()
            }
            pause(t) {
              this.readyState = 'pausing'
              const e = () => {
                ;(this.readyState = 'paused'), t()
              }
              if (this.polling || !this.writable) {
                let t = 0
                this.polling &&
                  (t++,
                  this.once('pollComplete', function () {
                    --t || e()
                  })),
                  this.writable ||
                    (t++,
                    this.once('drain', function () {
                      --t || e()
                    }))
              } else e()
            }
            poll() {
              ;(this.polling = !0), this.doPoll(), this.emitReserved('poll')
            }
            onData(t) {
              ;((t, e) => {
                const r = t.split(m),
                  n = []
                for (let s = 0; s < r.length; s++) {
                  const t = g(r[s], e)
                  if ((n.push(t), 'error' === t.type)) break
                }
                return n
              })(t, this.socket.binaryType).forEach((t) => {
                if (
                  ('opening' === this.readyState && 'open' === t.type && this.onOpen(),
                  'close' === t.type)
                )
                  return this.onClose({ description: 'transport closed by the server' }), !1
                this.onPacket(t)
              }),
                'closed' !== this.readyState &&
                  ((this.polling = !1),
                  this.emitReserved('pollComplete'),
                  'open' === this.readyState && this.poll())
            }
            doClose() {
              const t = () => {
                this.write([{ type: 'close' }])
              }
              'open' === this.readyState ? t() : this.once('open', t)
            }
            write(t) {
              ;(this.writable = !1),
                ((t, e) => {
                  const r = t.length,
                    n = new Array(r)
                  let s = 0
                  t.forEach((t, i) => {
                    u(t, !1, (t) => {
                      ;(n[i] = t), ++s === r && e(n.join(m))
                    })
                  })
                })(t, (t) => {
                  this.doWrite(t, () => {
                    ;(this.writable = !0), this.emitReserved('drain')
                  })
                })
            }
            uri() {
              let t = this.query || {}
              const e = this.opts.secure ? 'https' : 'http'
              let r = ''
              !1 !== this.opts.timestampRequests && (t[this.opts.timestampParam] = x()),
                this.supportsBinary || t.sid || (t.b64 = 1),
                this.opts.port &&
                  (('https' === e && 443 !== Number(this.opts.port)) ||
                    ('http' === e && 80 !== Number(this.opts.port))) &&
                  (r = ':' + this.opts.port)
              const n = N(t)
              return (
                e +
                '://' +
                (-1 !== this.opts.hostname.indexOf(':')
                  ? '[' + this.opts.hostname + ']'
                  : this.opts.hostname) +
                r +
                this.opts.path +
                (n.length ? '?' + n : '')
              )
            }
            request(t = {}) {
              return Object.assign(t, { xd: this.xd, xs: this.xs }, this.opts), new q(this.uri(), t)
            }
            doWrite(t, e) {
              const r = this.request({ method: 'POST', data: t })
              r.on('success', e),
                r.on('error', (t, e) => {
                  this.onError('xhr post error', t, e)
                })
            }
            doPoll() {
              const t = this.request()
              t.on('data', this.onData.bind(this)),
                t.on('error', (t, e) => {
                  this.onError('xhr poll error', t, e)
                }),
                (this.pollXhr = t)
            }
          },
        },
        H =
          /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        K = [
          'source',
          'protocol',
          'authority',
          'userInfo',
          'user',
          'password',
          'host',
          'port',
          'relative',
          'path',
          'directory',
          'file',
          'query',
          'anchor',
        ]
      function W(t) {
        const e = t,
          r = t.indexOf('['),
          n = t.indexOf(']')
        ;-1 != r &&
          -1 != n &&
          (t = t.substring(0, r) + t.substring(r, n).replace(/:/g, ';') + t.substring(n, t.length))
        let s = H.exec(t || ''),
          i = {},
          o = 14
        for (; o--; ) i[K[o]] = s[o] || ''
        return (
          -1 != r &&
            -1 != n &&
            ((i.source = e),
            (i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ':')),
            (i.authority = i.authority.replace('[', '').replace(']', '').replace(/;/g, ':')),
            (i.ipv6uri = !0)),
          (i.pathNames = (function (t, e) {
            const r = /\/{2,9}/g,
              n = e.replace(r, '/').split('/')
            ;('/' != e.substr(0, 1) && 0 !== e.length) || n.splice(0, 1)
            '/' == e.substr(e.length - 1, 1) && n.splice(n.length - 1, 1)
            return n
          })(0, i.path)),
          (i.queryKey = (function (t, e) {
            const r = {}
            return (
              e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (t, e, n) {
                e && (r[e] = n)
              }),
              r
            )
          })(0, i.query)),
          i
        )
      }
      class J extends b {
        constructor(t, e = {}) {
          super(),
            t && 'object' === typeof t && ((e = t), (t = null)),
            t
              ? ((t = W(t)),
                (e.hostname = t.host),
                (e.secure = 'https' === t.protocol || 'wss' === t.protocol),
                (e.port = t.port),
                t.query && (e.query = t.query))
              : e.host && (e.hostname = W(e.host).host),
            k(this, e),
            (this.secure =
              null != e.secure
                ? e.secure
                : 'undefined' !== typeof location && 'https:' === location.protocol),
            e.hostname && !e.port && (e.port = this.secure ? '443' : '80'),
            (this.hostname =
              e.hostname || ('undefined' !== typeof location ? location.hostname : 'localhost')),
            (this.port =
              e.port ||
              ('undefined' !== typeof location && location.port
                ? location.port
                : this.secure
                ? '443'
                : '80')),
            (this.transports = e.transports || ['polling', 'websocket']),
            (this.readyState = ''),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0),
            (this.opts = Object.assign(
              {
                path: '/engine.io',
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: 't',
                rememberUpgrade: !1,
                rejectUnauthorized: !0,
                perMessageDeflate: { threshold: 1024 },
                transportOptions: {},
                closeOnBeforeunload: !0,
              },
              e
            )),
            (this.opts.path = this.opts.path.replace(/\/$/, '') + '/'),
            'string' === typeof this.opts.query &&
              (this.opts.query = (function (t) {
                let e = {},
                  r = t.split('&')
                for (let n = 0, s = r.length; n < s; n++) {
                  let t = r[n].split('=')
                  e[decodeURIComponent(t[0])] = decodeURIComponent(t[1])
                }
                return e
              })(this.opts.query)),
            (this.id = null),
            (this.upgrades = null),
            (this.pingInterval = null),
            (this.pingTimeout = null),
            (this.pingTimeoutTimer = null),
            'function' === typeof addEventListener &&
              (this.opts.closeOnBeforeunload &&
                addEventListener(
                  'beforeunload',
                  () => {
                    this.transport && (this.transport.removeAllListeners(), this.transport.close())
                  },
                  !1
                ),
              'localhost' !== this.hostname &&
                ((this.offlineEventListener = () => {
                  this.onClose('transport close', { description: 'network connection lost' })
                }),
                addEventListener('offline', this.offlineEventListener, !1))),
            this.open()
        }
        createTransport(t) {
          const e = Object.assign({}, this.opts.query)
          ;(e.EIO = 4), (e.transport = t), this.id && (e.sid = this.id)
          const r = Object.assign({}, this.opts.transportOptions[t], this.opts, {
            query: e,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port,
          })
          return new Y[t](r)
        }
        open() {
          let t
          if (
            this.opts.rememberUpgrade &&
            J.priorWebsocketSuccess &&
            -1 !== this.transports.indexOf('websocket')
          )
            t = 'websocket'
          else {
            if (0 === this.transports.length)
              return void this.setTimeoutFn(() => {
                this.emitReserved('error', 'No transports available')
              }, 0)
            t = this.transports[0]
          }
          this.readyState = 'opening'
          try {
            t = this.createTransport(t)
          } catch (e) {
            return this.transports.shift(), void this.open()
          }
          t.open(), this.setTransport(t)
        }
        setTransport(t) {
          this.transport && this.transport.removeAllListeners(),
            (this.transport = t),
            t
              .on('drain', this.onDrain.bind(this))
              .on('packet', this.onPacket.bind(this))
              .on('error', this.onError.bind(this))
              .on('close', (t) => this.onClose('transport close', t))
        }
        probe(t) {
          let e = this.createTransport(t),
            r = !1
          J.priorWebsocketSuccess = !1
          const n = () => {
            r ||
              (e.send([{ type: 'ping', data: 'probe' }]),
              e.once('packet', (t) => {
                if (!r)
                  if ('pong' === t.type && 'probe' === t.data) {
                    if (((this.upgrading = !0), this.emitReserved('upgrading', e), !e)) return
                    ;(J.priorWebsocketSuccess = 'websocket' === e.name),
                      this.transport.pause(() => {
                        r ||
                          ('closed' !== this.readyState &&
                            (c(),
                            this.setTransport(e),
                            e.send([{ type: 'upgrade' }]),
                            this.emitReserved('upgrade', e),
                            (e = null),
                            (this.upgrading = !1),
                            this.flush()))
                      })
                  } else {
                    const t = new Error('probe error')
                    ;(t.transport = e.name), this.emitReserved('upgradeError', t)
                  }
              }))
          }
          function s() {
            r || ((r = !0), c(), e.close(), (e = null))
          }
          const i = (t) => {
            const r = new Error('probe error: ' + t)
            ;(r.transport = e.name), s(), this.emitReserved('upgradeError', r)
          }
          function o() {
            i('transport closed')
          }
          function h() {
            i('socket closed')
          }
          function a(t) {
            e && t.name !== e.name && s()
          }
          const c = () => {
            e.removeListener('open', n),
              e.removeListener('error', i),
              e.removeListener('close', o),
              this.off('close', h),
              this.off('upgrading', a)
          }
          e.once('open', n),
            e.once('error', i),
            e.once('close', o),
            this.once('close', h),
            this.once('upgrading', a),
            e.open()
        }
        onOpen() {
          if (
            ((this.readyState = 'open'),
            (J.priorWebsocketSuccess = 'websocket' === this.transport.name),
            this.emitReserved('open'),
            this.flush(),
            'open' === this.readyState && this.opts.upgrade && this.transport.pause)
          ) {
            let t = 0
            const e = this.upgrades.length
            for (; t < e; t++) this.probe(this.upgrades[t])
          }
        }
        onPacket(t) {
          if (
            'opening' === this.readyState ||
            'open' === this.readyState ||
            'closing' === this.readyState
          )
            switch ((this.emitReserved('packet', t), this.emitReserved('heartbeat'), t.type)) {
              case 'open':
                this.onHandshake(JSON.parse(t.data))
                break
              case 'ping':
                this.resetPingTimeout(),
                  this.sendPacket('pong'),
                  this.emitReserved('ping'),
                  this.emitReserved('pong')
                break
              case 'error':
                const e = new Error('server error')
                ;(e.code = t.data), this.onError(e)
                break
              case 'message':
                this.emitReserved('data', t.data), this.emitReserved('message', t.data)
            }
        }
        onHandshake(t) {
          this.emitReserved('handshake', t),
            (this.id = t.sid),
            (this.transport.query.sid = t.sid),
            (this.upgrades = this.filterUpgrades(t.upgrades)),
            (this.pingInterval = t.pingInterval),
            (this.pingTimeout = t.pingTimeout),
            (this.maxPayload = t.maxPayload),
            this.onOpen(),
            'closed' !== this.readyState && this.resetPingTimeout()
        }
        resetPingTimeout() {
          this.clearTimeoutFn(this.pingTimeoutTimer),
            (this.pingTimeoutTimer = this.setTimeoutFn(() => {
              this.onClose('ping timeout')
            }, this.pingInterval + this.pingTimeout)),
            this.opts.autoUnref && this.pingTimeoutTimer.unref()
        }
        onDrain() {
          this.writeBuffer.splice(0, this.prevBufferLen),
            (this.prevBufferLen = 0),
            0 === this.writeBuffer.length ? this.emitReserved('drain') : this.flush()
        }
        flush() {
          if (
            'closed' !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length
          ) {
            const t = this.getWritablePackets()
            this.transport.send(t), (this.prevBufferLen = t.length), this.emitReserved('flush')
          }
        }
        getWritablePackets() {
          if (
            !(this.maxPayload && 'polling' === this.transport.name && this.writeBuffer.length > 1)
          )
            return this.writeBuffer
          let t = 1
          for (let r = 0; r < this.writeBuffer.length; r++) {
            const n = this.writeBuffer[r].data
            if (
              (n &&
                (t +=
                  'string' === typeof (e = n)
                    ? (function (t) {
                        let e = 0,
                          r = 0
                        for (let n = 0, s = t.length; n < s; n++)
                          (e = t.charCodeAt(n)),
                            e < 128
                              ? (r += 1)
                              : e < 2048
                              ? (r += 2)
                              : e < 55296 || e >= 57344
                              ? (r += 3)
                              : (n++, (r += 4))
                        return r
                      })(e)
                    : Math.ceil(1.33 * (e.byteLength || e.size))),
              r > 0 && t > this.maxPayload)
            )
              return this.writeBuffer.slice(0, r)
            t += 2
          }
          var e
          return this.writeBuffer
        }
        write(t, e, r) {
          return this.sendPacket('message', t, e, r), this
        }
        send(t, e, r) {
          return this.sendPacket('message', t, e, r), this
        }
        sendPacket(t, e, r, n) {
          if (
            ('function' === typeof e && ((n = e), (e = void 0)),
            'function' === typeof r && ((n = r), (r = null)),
            'closing' === this.readyState || 'closed' === this.readyState)
          )
            return
          ;(r = r || {}).compress = !1 !== r.compress
          const s = { type: t, data: e, options: r }
          this.emitReserved('packetCreate', s),
            this.writeBuffer.push(s),
            n && this.once('flush', n),
            this.flush()
        }
        close() {
          const t = () => {
              this.onClose('forced close'), this.transport.close()
            },
            e = () => {
              this.off('upgrade', e), this.off('upgradeError', e), t()
            },
            r = () => {
              this.once('upgrade', e), this.once('upgradeError', e)
            }
          return (
            ('opening' !== this.readyState && 'open' !== this.readyState) ||
              ((this.readyState = 'closing'),
              this.writeBuffer.length
                ? this.once('drain', () => {
                    this.upgrading ? r() : t()
                  })
                : this.upgrading
                ? r()
                : t()),
            this
          )
        }
        onError(t) {
          ;(J.priorWebsocketSuccess = !1),
            this.emitReserved('error', t),
            this.onClose('transport error', t)
        }
        onClose(t, e) {
          ;('opening' !== this.readyState &&
            'open' !== this.readyState &&
            'closing' !== this.readyState) ||
            (this.clearTimeoutFn(this.pingTimeoutTimer),
            this.transport.removeAllListeners('close'),
            this.transport.close(),
            this.transport.removeAllListeners(),
            'function' === typeof removeEventListener &&
              removeEventListener('offline', this.offlineEventListener, !1),
            (this.readyState = 'closed'),
            (this.id = null),
            this.emitReserved('close', t, e),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0))
        }
        filterUpgrades(t) {
          const e = []
          let r = 0
          const n = t.length
          for (; r < n; r++) ~this.transports.indexOf(t[r]) && e.push(t[r])
          return e
        }
      }
      J.protocol = 4
      J.protocol
      const X = 'function' === typeof ArrayBuffer,
        $ = Object.prototype.toString,
        G =
          'function' === typeof Blob ||
          ('undefined' !== typeof Blob && '[object BlobConstructor]' === $.call(Blob)),
        Z =
          'function' === typeof File ||
          ('undefined' !== typeof File && '[object FileConstructor]' === $.call(File))
      function Q(t) {
        return (
          (X &&
            (t instanceof ArrayBuffer ||
              ((t) =>
                'function' === typeof ArrayBuffer.isView
                  ? ArrayBuffer.isView(t)
                  : t.buffer instanceof ArrayBuffer)(t))) ||
          (G && t instanceof Blob) ||
          (Z && t instanceof File)
        )
      }
      function tt(t, e) {
        if (!t || 'object' !== typeof t) return !1
        if (Array.isArray(t)) {
          for (let e = 0, r = t.length; e < r; e++) if (tt(t[e])) return !0
          return !1
        }
        if (Q(t)) return !0
        if (t.toJSON && 'function' === typeof t.toJSON && 1 === arguments.length)
          return tt(t.toJSON(), !0)
        for (const r in t) if (Object.prototype.hasOwnProperty.call(t, r) && tt(t[r])) return !0
        return !1
      }
      function et(t) {
        const e = [],
          r = t.data,
          n = t
        return (n.data = rt(r, e)), (n.attachments = e.length), { packet: n, buffers: e }
      }
      function rt(t, e) {
        if (!t) return t
        if (Q(t)) {
          const r = { _placeholder: !0, num: e.length }
          return e.push(t), r
        }
        if (Array.isArray(t)) {
          const r = new Array(t.length)
          for (let n = 0; n < t.length; n++) r[n] = rt(t[n], e)
          return r
        }
        if ('object' === typeof t && !(t instanceof Date)) {
          const r = {}
          for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[n] = rt(t[n], e))
          return r
        }
        return t
      }
      function nt(t, e) {
        return (t.data = st(t.data, e)), (t.attachments = void 0), t
      }
      function st(t, e) {
        if (!t) return t
        if (t && !0 === t._placeholder) {
          if ('number' === typeof t.num && t.num >= 0 && t.num < e.length) return e[t.num]
          throw new Error('illegal attachments')
        }
        if (Array.isArray(t)) for (let r = 0; r < t.length; r++) t[r] = st(t[r], e)
        else if ('object' === typeof t)
          for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (t[r] = st(t[r], e))
        return t
      }
      const it = 5
      var ot
      !(function (t) {
        ;(t[(t.CONNECT = 0)] = 'CONNECT'),
          (t[(t.DISCONNECT = 1)] = 'DISCONNECT'),
          (t[(t.EVENT = 2)] = 'EVENT'),
          (t[(t.ACK = 3)] = 'ACK'),
          (t[(t.CONNECT_ERROR = 4)] = 'CONNECT_ERROR'),
          (t[(t.BINARY_EVENT = 5)] = 'BINARY_EVENT'),
          (t[(t.BINARY_ACK = 6)] = 'BINARY_ACK')
      })(ot || (ot = {}))
      class ht {
        constructor(t) {
          this.replacer = t
        }
        encode(t) {
          return (t.type !== ot.EVENT && t.type !== ot.ACK) || !tt(t)
            ? [this.encodeAsString(t)]
            : ((t.type = t.type === ot.EVENT ? ot.BINARY_EVENT : ot.BINARY_ACK),
              this.encodeAsBinary(t))
        }
        encodeAsString(t) {
          let e = '' + t.type
          return (
            (t.type !== ot.BINARY_EVENT && t.type !== ot.BINARY_ACK) || (e += t.attachments + '-'),
            t.nsp && '/' !== t.nsp && (e += t.nsp + ','),
            null != t.id && (e += t.id),
            null != t.data && (e += JSON.stringify(t.data, this.replacer)),
            e
          )
        }
        encodeAsBinary(t) {
          const e = et(t),
            r = this.encodeAsString(e.packet),
            n = e.buffers
          return n.unshift(r), n
        }
      }
      class at extends b {
        constructor(t) {
          super(), (this.reviver = t)
        }
        add(t) {
          let e
          if ('string' === typeof t) {
            if (this.reconstructor)
              throw new Error('got plaintext data when reconstructing a packet')
            ;(e = this.decodeString(t)),
              e.type === ot.BINARY_EVENT || e.type === ot.BINARY_ACK
                ? ((this.reconstructor = new ct(e)),
                  0 === e.attachments && super.emitReserved('decoded', e))
                : super.emitReserved('decoded', e)
          } else {
            if (!Q(t) && !t.base64) throw new Error('Unknown type: ' + t)
            if (!this.reconstructor)
              throw new Error('got binary data when not reconstructing a packet')
            ;(e = this.reconstructor.takeBinaryData(t)),
              e && ((this.reconstructor = null), super.emitReserved('decoded', e))
          }
        }
        decodeString(t) {
          let e = 0
          const r = { type: Number(t.charAt(0)) }
          if (void 0 === ot[r.type]) throw new Error('unknown packet type ' + r.type)
          if (r.type === ot.BINARY_EVENT || r.type === ot.BINARY_ACK) {
            const n = e + 1
            for (; '-' !== t.charAt(++e) && e != t.length; );
            const s = t.substring(n, e)
            if (s != Number(s) || '-' !== t.charAt(e)) throw new Error('Illegal attachments')
            r.attachments = Number(s)
          }
          if ('/' === t.charAt(e + 1)) {
            const n = e + 1
            for (; ++e; ) {
              if (',' === t.charAt(e)) break
              if (e === t.length) break
            }
            r.nsp = t.substring(n, e)
          } else r.nsp = '/'
          const n = t.charAt(e + 1)
          if ('' !== n && Number(n) == n) {
            const n = e + 1
            for (; ++e; ) {
              const r = t.charAt(e)
              if (null == r || Number(r) != r) {
                --e
                break
              }
              if (e === t.length) break
            }
            r.id = Number(t.substring(n, e + 1))
          }
          if (t.charAt(++e)) {
            const n = this.tryParse(t.substr(e))
            if (!at.isPayloadValid(r.type, n)) throw new Error('invalid payload')
            r.data = n
          }
          return r
        }
        tryParse(t) {
          try {
            return JSON.parse(t, this.reviver)
          } catch (e) {
            return !1
          }
        }
        static isPayloadValid(t, e) {
          switch (t) {
            case ot.CONNECT:
              return 'object' === typeof e
            case ot.DISCONNECT:
              return void 0 === e
            case ot.CONNECT_ERROR:
              return 'string' === typeof e || 'object' === typeof e
            case ot.EVENT:
            case ot.BINARY_EVENT:
              return Array.isArray(e) && e.length > 0
            case ot.ACK:
            case ot.BINARY_ACK:
              return Array.isArray(e)
          }
        }
        destroy() {
          this.reconstructor && this.reconstructor.finishedReconstruction()
        }
      }
      class ct {
        constructor(t) {
          ;(this.packet = t), (this.buffers = []), (this.reconPack = t)
        }
        takeBinaryData(t) {
          if ((this.buffers.push(t), this.buffers.length === this.reconPack.attachments)) {
            const t = nt(this.reconPack, this.buffers)
            return this.finishedReconstruction(), t
          }
          return null
        }
        finishedReconstruction() {
          ;(this.reconPack = null), (this.buffers = [])
        }
      }
      function ut(t, e, r) {
        return (
          t.on(e, r),
          function () {
            t.off(e, r)
          }
        )
      }
      const ft = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1,
      })
      class pt extends b {
        constructor(t, e, r) {
          super(),
            (this.connected = !1),
            (this.receiveBuffer = []),
            (this.sendBuffer = []),
            (this.ids = 0),
            (this.acks = {}),
            (this.flags = {}),
            (this.io = t),
            (this.nsp = e),
            r && r.auth && (this.auth = r.auth),
            this.io._autoConnect && this.open()
        }
        get disconnected() {
          return !this.connected
        }
        subEvents() {
          if (this.subs) return
          const t = this.io
          this.subs = [
            ut(t, 'open', this.onopen.bind(this)),
            ut(t, 'packet', this.onpacket.bind(this)),
            ut(t, 'error', this.onerror.bind(this)),
            ut(t, 'close', this.onclose.bind(this)),
          ]
        }
        get active() {
          return !!this.subs
        }
        connect() {
          return (
            this.connected ||
              (this.subEvents(),
              this.io._reconnecting || this.io.open(),
              'open' === this.io._readyState && this.onopen()),
            this
          )
        }
        open() {
          return this.connect()
        }
        send(...t) {
          return t.unshift('message'), this.emit.apply(this, t), this
        }
        emit(t, ...e) {
          if (ft.hasOwnProperty(t)) throw new Error('"' + t + '" is a reserved event name')
          e.unshift(t)
          const r = { type: ot.EVENT, data: e, options: {} }
          if (
            ((r.options.compress = !1 !== this.flags.compress),
            'function' === typeof e[e.length - 1])
          ) {
            const t = this.ids++,
              n = e.pop()
            this._registerAckCallback(t, n), (r.id = t)
          }
          const n = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable
          return (
            (this.flags.volatile && (!n || !this.connected)) ||
              (this.connected
                ? (this.notifyOutgoingListeners(r), this.packet(r))
                : this.sendBuffer.push(r)),
            (this.flags = {}),
            this
          )
        }
        _registerAckCallback(t, e) {
          const r = this.flags.timeout
          if (void 0 === r) return void (this.acks[t] = e)
          const n = this.io.setTimeoutFn(() => {
            delete this.acks[t]
            for (let e = 0; e < this.sendBuffer.length; e++)
              this.sendBuffer[e].id === t && this.sendBuffer.splice(e, 1)
            e.call(this, new Error('operation has timed out'))
          }, r)
          this.acks[t] = (...t) => {
            this.io.clearTimeoutFn(n), e.apply(this, [null, ...t])
          }
        }
        packet(t) {
          ;(t.nsp = this.nsp), this.io._packet(t)
        }
        onopen() {
          'function' == typeof this.auth
            ? this.auth((t) => {
                this.packet({ type: ot.CONNECT, data: t })
              })
            : this.packet({ type: ot.CONNECT, data: this.auth })
        }
        onerror(t) {
          this.connected || this.emitReserved('connect_error', t)
        }
        onclose(t, e) {
          ;(this.connected = !1), delete this.id, this.emitReserved('disconnect', t, e)
        }
        onpacket(t) {
          if (t.nsp === this.nsp)
            switch (t.type) {
              case ot.CONNECT:
                if (t.data && t.data.sid) {
                  const e = t.data.sid
                  this.onconnect(e)
                } else
                  this.emitReserved(
                    'connect_error',
                    new Error(
                      'It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)'
                    )
                  )
                break
              case ot.EVENT:
              case ot.BINARY_EVENT:
                this.onevent(t)
                break
              case ot.ACK:
              case ot.BINARY_ACK:
                this.onack(t)
                break
              case ot.DISCONNECT:
                this.ondisconnect()
                break
              case ot.CONNECT_ERROR:
                this.destroy()
                const e = new Error(t.data.message)
                ;(e.data = t.data.data), this.emitReserved('connect_error', e)
            }
        }
        onevent(t) {
          const e = t.data || []
          null != t.id && e.push(this.ack(t.id)),
            this.connected ? this.emitEvent(e) : this.receiveBuffer.push(Object.freeze(e))
        }
        emitEvent(t) {
          if (this._anyListeners && this._anyListeners.length) {
            const e = this._anyListeners.slice()
            for (const r of e) r.apply(this, t)
          }
          super.emit.apply(this, t)
        }
        ack(t) {
          const e = this
          let r = !1
          return function (...n) {
            r || ((r = !0), e.packet({ type: ot.ACK, id: t, data: n }))
          }
        }
        onack(t) {
          const e = this.acks[t.id]
          'function' === typeof e && (e.apply(this, t.data), delete this.acks[t.id])
        }
        onconnect(t) {
          ;(this.id = t), (this.connected = !0), this.emitBuffered(), this.emitReserved('connect')
        }
        emitBuffered() {
          this.receiveBuffer.forEach((t) => this.emitEvent(t)),
            (this.receiveBuffer = []),
            this.sendBuffer.forEach((t) => {
              this.notifyOutgoingListeners(t), this.packet(t)
            }),
            (this.sendBuffer = [])
        }
        ondisconnect() {
          this.destroy(), this.onclose('io server disconnect')
        }
        destroy() {
          this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)), this.io._destroy(this)
        }
        disconnect() {
          return (
            this.connected && this.packet({ type: ot.DISCONNECT }),
            this.destroy(),
            this.connected && this.onclose('io client disconnect'),
            this
          )
        }
        close() {
          return this.disconnect()
        }
        compress(t) {
          return (this.flags.compress = t), this
        }
        get volatile() {
          return (this.flags.volatile = !0), this
        }
        timeout(t) {
          return (this.flags.timeout = t), this
        }
        onAny(t) {
          return (this._anyListeners = this._anyListeners || []), this._anyListeners.push(t), this
        }
        prependAny(t) {
          return (
            (this._anyListeners = this._anyListeners || []), this._anyListeners.unshift(t), this
          )
        }
        offAny(t) {
          if (!this._anyListeners) return this
          if (t) {
            const e = this._anyListeners
            for (let r = 0; r < e.length; r++) if (t === e[r]) return e.splice(r, 1), this
          } else this._anyListeners = []
          return this
        }
        listenersAny() {
          return this._anyListeners || []
        }
        onAnyOutgoing(t) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.push(t),
            this
          )
        }
        prependAnyOutgoing(t) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.unshift(t),
            this
          )
        }
        offAnyOutgoing(t) {
          if (!this._anyOutgoingListeners) return this
          if (t) {
            const e = this._anyOutgoingListeners
            for (let r = 0; r < e.length; r++) if (t === e[r]) return e.splice(r, 1), this
          } else this._anyOutgoingListeners = []
          return this
        }
        listenersAnyOutgoing() {
          return this._anyOutgoingListeners || []
        }
        notifyOutgoingListeners(t) {
          if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const e = this._anyOutgoingListeners.slice()
            for (const r of e) r.apply(this, t.data)
          }
        }
      }
      function lt(t) {
        ;(t = t || {}),
          (this.ms = t.min || 100),
          (this.max = t.max || 1e4),
          (this.factor = t.factor || 2),
          (this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0),
          (this.attempts = 0)
      }
      ;(lt.prototype.duration = function () {
        var t = this.ms * Math.pow(this.factor, this.attempts++)
        if (this.jitter) {
          var e = Math.random(),
            r = Math.floor(e * this.jitter * t)
          t = 0 == (1 & Math.floor(10 * e)) ? t - r : t + r
        }
        return 0 | Math.min(t, this.max)
      }),
        (lt.prototype.reset = function () {
          this.attempts = 0
        }),
        (lt.prototype.setMin = function (t) {
          this.ms = t
        }),
        (lt.prototype.setMax = function (t) {
          this.max = t
        }),
        (lt.prototype.setJitter = function (t) {
          this.jitter = t
        })
      class dt extends b {
        constructor(t, e) {
          var r
          super(),
            (this.nsps = {}),
            (this.subs = []),
            t && 'object' === typeof t && ((e = t), (t = void 0)),
            ((e = e || {}).path = e.path || '/socket.io'),
            (this.opts = e),
            k(this, e),
            this.reconnection(!1 !== e.reconnection),
            this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(e.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),
            this.randomizationFactor(
              null !== (r = e.randomizationFactor) && void 0 !== r ? r : 0.5
            ),
            (this.backoff = new lt({
              min: this.reconnectionDelay(),
              max: this.reconnectionDelayMax(),
              jitter: this.randomizationFactor(),
            })),
            this.timeout(null == e.timeout ? 2e4 : e.timeout),
            (this._readyState = 'closed'),
            (this.uri = t)
          const s = e.parser || n
          ;(this.encoder = new s.Encoder()),
            (this.decoder = new s.Decoder()),
            (this._autoConnect = !1 !== e.autoConnect),
            this._autoConnect && this.open()
        }
        reconnection(t) {
          return arguments.length ? ((this._reconnection = !!t), this) : this._reconnection
        }
        reconnectionAttempts(t) {
          return void 0 === t
            ? this._reconnectionAttempts
            : ((this._reconnectionAttempts = t), this)
        }
        reconnectionDelay(t) {
          var e
          return void 0 === t
            ? this._reconnectionDelay
            : ((this._reconnectionDelay = t),
              null === (e = this.backoff) || void 0 === e || e.setMin(t),
              this)
        }
        randomizationFactor(t) {
          var e
          return void 0 === t
            ? this._randomizationFactor
            : ((this._randomizationFactor = t),
              null === (e = this.backoff) || void 0 === e || e.setJitter(t),
              this)
        }
        reconnectionDelayMax(t) {
          var e
          return void 0 === t
            ? this._reconnectionDelayMax
            : ((this._reconnectionDelayMax = t),
              null === (e = this.backoff) || void 0 === e || e.setMax(t),
              this)
        }
        timeout(t) {
          return arguments.length ? ((this._timeout = t), this) : this._timeout
        }
        maybeReconnectOnOpen() {
          !this._reconnecting &&
            this._reconnection &&
            0 === this.backoff.attempts &&
            this.reconnect()
        }
        open(t) {
          if (~this._readyState.indexOf('open')) return this
          this.engine = new J(this.uri, this.opts)
          const e = this.engine,
            r = this
          ;(this._readyState = 'opening'), (this.skipReconnect = !1)
          const n = ut(e, 'open', function () {
              r.onopen(), t && t()
            }),
            s = ut(e, 'error', (e) => {
              r.cleanup(),
                (r._readyState = 'closed'),
                this.emitReserved('error', e),
                t ? t(e) : r.maybeReconnectOnOpen()
            })
          if (!1 !== this._timeout) {
            const t = this._timeout
            0 === t && n()
            const r = this.setTimeoutFn(() => {
              n(), e.close(), e.emit('error', new Error('timeout'))
            }, t)
            this.opts.autoUnref && r.unref(),
              this.subs.push(function () {
                clearTimeout(r)
              })
          }
          return this.subs.push(n), this.subs.push(s), this
        }
        connect(t) {
          return this.open(t)
        }
        onopen() {
          this.cleanup(), (this._readyState = 'open'), this.emitReserved('open')
          const t = this.engine
          this.subs.push(
            ut(t, 'ping', this.onping.bind(this)),
            ut(t, 'data', this.ondata.bind(this)),
            ut(t, 'error', this.onerror.bind(this)),
            ut(t, 'close', this.onclose.bind(this)),
            ut(this.decoder, 'decoded', this.ondecoded.bind(this))
          )
        }
        onping() {
          this.emitReserved('ping')
        }
        ondata(t) {
          this.decoder.add(t)
        }
        ondecoded(t) {
          this.emitReserved('packet', t)
        }
        onerror(t) {
          this.emitReserved('error', t)
        }
        socket(t, e) {
          let r = this.nsps[t]
          return r || ((r = new pt(this, t, e)), (this.nsps[t] = r)), r
        }
        _destroy(t) {
          const e = Object.keys(this.nsps)
          for (const r of e) {
            if (this.nsps[r].active) return
          }
          this._close()
        }
        _packet(t) {
          const e = this.encoder.encode(t)
          for (let r = 0; r < e.length; r++) this.engine.write(e[r], t.options)
        }
        cleanup() {
          this.subs.forEach((t) => t()), (this.subs.length = 0), this.decoder.destroy()
        }
        _close() {
          ;(this.skipReconnect = !0),
            (this._reconnecting = !1),
            this.onclose('forced close'),
            this.engine && this.engine.close()
        }
        disconnect() {
          return this._close()
        }
        onclose(t, e) {
          this.cleanup(),
            this.backoff.reset(),
            (this._readyState = 'closed'),
            this.emitReserved('close', t, e),
            this._reconnection && !this.skipReconnect && this.reconnect()
        }
        reconnect() {
          if (this._reconnecting || this.skipReconnect) return this
          const t = this
          if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(), this.emitReserved('reconnect_failed'), (this._reconnecting = !1)
          else {
            const e = this.backoff.duration()
            this._reconnecting = !0
            const r = this.setTimeoutFn(() => {
              t.skipReconnect ||
                (this.emitReserved('reconnect_attempt', t.backoff.attempts),
                t.skipReconnect ||
                  t.open((e) => {
                    e
                      ? ((t._reconnecting = !1),
                        t.reconnect(),
                        this.emitReserved('reconnect_error', e))
                      : t.onreconnect()
                  }))
            }, e)
            this.opts.autoUnref && r.unref(),
              this.subs.push(function () {
                clearTimeout(r)
              })
          }
        }
        onreconnect() {
          const t = this.backoff.attempts
          ;(this._reconnecting = !1), this.backoff.reset(), this.emitReserved('reconnect', t)
        }
      }
      const yt = {}
      function gt(t, e) {
        'object' === typeof t && ((e = t), (t = void 0))
        const r = (function (t, e = '', r) {
            let n = t
            ;(r = r || ('undefined' !== typeof location && location)),
              null == t && (t = r.protocol + '//' + r.host),
              'string' === typeof t &&
                ('/' === t.charAt(0) && (t = '/' === t.charAt(1) ? r.protocol + t : r.host + t),
                /^(https?|wss?):\/\//.test(t) ||
                  (t = 'undefined' !== typeof r ? r.protocol + '//' + t : 'https://' + t),
                (n = W(t))),
              n.port ||
                (/^(http|ws)$/.test(n.protocol)
                  ? (n.port = '80')
                  : /^(http|ws)s$/.test(n.protocol) && (n.port = '443')),
              (n.path = n.path || '/')
            const s = -1 !== n.host.indexOf(':') ? '[' + n.host + ']' : n.host
            return (
              (n.id = n.protocol + '://' + s + ':' + n.port + e),
              (n.href = n.protocol + '://' + s + (r && r.port === n.port ? '' : ':' + n.port)),
              n
            )
          })(t, (e = e || {}).path || '/socket.io'),
          n = r.source,
          s = r.id,
          i = r.path,
          o = yt[s] && i in yt[s].nsps
        let h
        return (
          e.forceNew || e['force new connection'] || !1 === e.multiplex || o
            ? (h = new dt(n, e))
            : (yt[s] || (yt[s] = new dt(n, e)), (h = yt[s])),
          r.query && !e.query && (e.query = r.queryKey),
          h.socket(r.path, e)
        )
      }
      Object.assign(gt, { Manager: dt, Socket: pt, io: gt, connect: gt })
    },
  },
])
