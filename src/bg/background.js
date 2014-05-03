//example of using a message handler from the inject scripts

Firebase.enableLogging(true);
var f = new Firebase('https://incandescent-fire-4279.firebaseio.com/');

f.on('value', function(snapshot) {
  alert('Someone clicked! Total is now ' + snapshot.val());
});

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

