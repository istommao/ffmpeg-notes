importScripts('https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.6.0/ffmpeg-core.min.js');
importScripts('https://cdn.jsdelivr.net/npm/comlinkjs@3.0.2/umd/comlink.js');
importScripts('https://cdn.jsdelivr.net/npm/@salomvary/ffmpeg.js-umd@3.1.9001/ffmpeg-webm.js');

var ffmpegjs = require('./ffmpeg-core.min.js')

Comlink.expose(ffmpegjs, self);

// self.importScripts('ffmpeg.js');

// onmessage = function(e) {
//   console.log('ffmpeg_run', ffmpeg_run);
//   var files = e.data;
//   console.log(files);
//   ffmpeg_run({
//    // arguments: ['-i', 'https://gw.alicdn.com/bao/uploaded/LB1l2iXISzqK1RjSZFjXXblCFXa.mp4?file=LB1l2iXISzqK1RjSZFjXXblCFXa.mp4', '-b:v', '64k', '-bufsize', '64k', '-vf', 'showinfo', '-strict', '-2', 'out.mp4'],
//   // arguments: ['-i', '/input/' + files[0].name  'out.mp4'],
//    arguments: ['-version'],
//     //files: files,
//   }, function(results) {
//     console.log('result',results);
//    // self.postMessage(results[0].data, [results[0].data]);
//   });

// }