Firebase.enableLogging(true);

document.addEventListener('DOMContentLoaded', function () {

  var bgpage = chrome.extension.getBackgroundPage();

  var fb = bgpage.fb;
  var title = 'I like hootsuite';
  var url = 'http://www.hootsuite.com';

  fb.push({title:title,url:url});
});

/*

f.transaction(function(curr) {
  if (isNaN(parseFloat(curr)))
    return 1; // initialize to 1.
  else
    return curr + 1; // increment.
}, function() {
    // Once the transaction has completed, update the UI (and watch for updates).
    f.on('value', function(s) {
      document.getElementById('contents').innerHTML = s.val();
    });
  });
*/
