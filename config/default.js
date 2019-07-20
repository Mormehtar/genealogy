module.exports = {
  server: {
    "key": "ssl/localhost/localhost.key",
    "crt": "ssl/localhost/localhost.crt"
  },
  keys: process.env['KOA_KEYS'] || [
    "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration.",
    "I will face my fear. I will permit it to pass over me and through me.",
    "And when it has gone past I will turn the inner eye to see its path.",
    "Where the fear has gone there will be nothing. Only I will remain."
  ],
  proxy: false,
};