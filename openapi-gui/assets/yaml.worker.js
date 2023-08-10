importScripts('https://cdn.jsdelivr.net/npm/comlink@4.4.1/dist/umd/comlink.min.js');
importScripts('https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js');

Comlink.expose({
  dump: function (source, options) {
    return Promise.resolve(jsyaml.dump(source, options));
  },
});
