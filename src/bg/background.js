var fb = new Firebase('https://incandescent-fire-4279.firebaseio.com/');

var lastItem = fb.endAt().limit(1);

lastItem.on('child_added', function(snapshot) {
  var bsu = snapshot.val();
  chrome.storage.sync.get("UUID",function(obj) {
      var myUUID = obj.UUID;
      if (myUUID != bsu.UUID){
	  var notification = webkitNotifications.createNotification(
	      '/icons/icon128.png',  // icon url - can be relative
	      'New BSU!',  // notification title
	      bsu.message  // notification body text
	  );

	  notification.onclick = function() {
	      window.open("https://hootsuite.com/hootlet/social-share?partner=bsubutton&url="
			  + encodeURIComponent(bsu.url) +
			  "&title="
			  + encodeURIComponent(bsu.title));
	  }
	  notification.show();
      }

  });



});

