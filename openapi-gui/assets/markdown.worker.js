importScripts('https://cdn.jsdelivr.net/npm/comlink@4.4.1/dist/umd/comlink.min.js');
importScripts('https://cdn.jsdelivr.net/npm/marked@4.2.12/lib/marked.umd.min.js');

Comlink.expose({
  compileMarkdown: function (source) {
    return new Promise(function (resolve, reject) {
      marked.marked.parse(source, function (err, result) {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });
  },
});
