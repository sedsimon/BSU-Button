document.addEventListener('DOMContentLoaded', function () {


  $("#postBSU").click(function() {


      chrome.storage.sync.get("UUID",function(obj) {
	  var UUID = obj.UUID;
	  if (typeof UUID === 'undefined') {
	      UUID = Math.random();
	      chrome.storage.sync.set({UUID:UUID},function() {});
	  }
	  
	  var bgpage = chrome.extension.getBackgroundPage();
	  
	  var fb = bgpage.fb;
	  
	  fb.push({UUID:UUID,title:$("#title").val(),url:$("#url").val(),message:$("#message").val()});
	  console.log("BSUed");
      });
      
  });

});


