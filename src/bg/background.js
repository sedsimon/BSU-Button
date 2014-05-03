Firebase.enableLogging(true);
var f = new Firebase('https://incandescent-fire-4279.firebaseio.com/');

f.on('value', function(snapshot) {

  var notification = webkitNotifications.createNotification(
    '/icons/icon128.png',  // icon url - can be relative
    'Value Changed!',  // notification title
    'The new value is ' + snapshot.val()  // notification body text
  );

  // Then show the notification.
  notification.show();

});

