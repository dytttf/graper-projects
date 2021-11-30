var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
var encode = function (e) {
    var t, a, n, r, o, i, c, l = "", s = 0;
    for (e = _utf8_encode(e); s < e.length;)
        r = (t = e.charCodeAt(s++)) >> 2,
            o = (3 & t) << 4 | (a = e.charCodeAt(s++)) >> 4,
            i = (15 & a) << 2 | (n = e.charCodeAt(s++)) >> 6,
            c = 63 & n,
            isNaN(a) ? i = c = 64 : isNaN(n) && (c = 64),
            l = l + _keyStr.charAt(r) + _keyStr.charAt(o) + _keyStr.charAt(i) + _keyStr.charAt(c);
    return l
}
var _utf8_encode = function (e) {
        e = e.replace(/\r\n/g, "\n");
        for (var t = "", a = 0; a < e.length; a++) {
            var n = e.charCodeAt(a);
            n < 128 ? t += String.fromCharCode(n) : n > 127 && n < 2048 ? (t += String.fromCharCode(n >> 6 | 192),
                t += String.fromCharCode(63 & n | 128)) : (t += String.fromCharCode(n >> 12 | 224),
                t += String.fromCharCode(n >> 6 & 63 | 128),
                t += String.fromCharCode(63 & n | 128))
        }
        return t
    }

// //
// r = encode("111")
// console.log(r)