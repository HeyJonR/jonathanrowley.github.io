self.addEventListener('install', function (event) {
  console.log('install');
});

self.addEventListener('activate', event => {
  console.log('V1 now ready to handle fetches!');
});

self.addEventListener('fetch', function(event) {
  event;
  debugger;
});
