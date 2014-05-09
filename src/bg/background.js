var fb = new Firebase('https://incandescent-fire-4279.firebaseio.com/');

var lastItem = fb.endAt().limit(1);

lastItem.on('child_added', function(snapshot) {
  var bsu = snapshot.val();
  chrome.storage.sync.get("UUID",function(obj) {
      var myUUID = obj.UUID;
    //  if (myUUID != bsu.UUID){
      chrome.storage.sync.get("lastNotification", function(obj){
	  var lastNotification = obj.lastNotification;
	  if (lastNotification !== snapshot.name()){
	      var notification = webkitNotifications.createNotification(
		  '/icons/128px marketing owly.png',  // icon url - can be relative
		  'New post available!',  // notification title
		  'Click to #BSU' // notification body text
	      );

	      notification.onclick = function() {
		  window.open("https://hootsuite.com/hootlet/social-share?partner=bsunotification&url="
			      + encodeURIComponent(bsu.url) +
			      "&title="
			      + encodeURIComponent(bsu.title));
	      }
	      notification.show();
	      chrome.storage.sync.set({lastNotification:snapshot.name()},function(){});
	  }
     });

  //    }

 });
});





chrome.runtime.onMessage.addListener(
  function(request,sender,sendResponse) {
    // send contents to firebase
    if (request.messageType === 'BSU') {
	chrome.storage.sync.get("UUID",function(obj) {
	    var UUID = obj.UUID;
	    if (typeof UUID === 'undefined') {
		UUID = Math.random();
		chrome.storage.sync.set({UUID:UUID},function() {});
	    }
	    
	    fb.push({UUID:UUID,title:request.title,url:request.url});
	    sendResponse({message:'sent'});
	});
    }
  });

