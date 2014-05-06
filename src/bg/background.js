Firebase.enableLogging(true);
var fb = new Firebase('https://incandescent-fire-4279.firebaseio.com/');

var lastItem = fb.endAt().limit(1);

lastItem.on('child_added', function(snapshot) {

  var bsu = snapshot.val();
  var notification = webkitNotifications.createNotification(
    '/icons/icon128.png',  // icon url - can be relative
    'New BSU!',  // notification title
    'its a party'  // notification body text
  );

  notification.onclick = function() {
    //window.open('http://www.hootsuite.com');
  }
  // Then show the notification.
  notification.show();

});

