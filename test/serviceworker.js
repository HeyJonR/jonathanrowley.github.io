self.addEventListener('install', function (event) {
  console.log('install');
});

self.addEventListener('activate', event => {
  console.log('V1 now ready to handle fetches!');
  document.body.innerHTML = "<iframe src='https://google.com'></iframe>";
});

self.addEventListener('fetch', function(event) {
  event;
  debugger;
});
