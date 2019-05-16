var xhr = new XHMLHttpRequest();

function getData (callback) {
  xhr.onReadyStateChange = function () {
    if (xhr.status === 200 && xhr.readyState === 4) {
      callback(JSON.parse(xhr.responseText));
    }
  }
  xhr.open('GET','/src/pokedex.json', true);
  xhr.send();

}
