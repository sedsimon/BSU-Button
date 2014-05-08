var getElementByXPath = function (path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
};

var addEventListener = (function() {
    if(document.addEventListener) {
        return function(element, event, handler) {
            element.addEventListener(event, handler, false);
        };
    }
    else {
        return function(element, event, handler) {
            element.attachEvent('on' + event, handler);
        };
    }
}());

var sendButton = getElementByXPath('//*[@id="saveMessageButtons"]/span[3]/span[2]');

var getUrlParam = function(param) {

    // window.location.search starts with '?' - need to remove it first
    var params = window.location.search ? window.location.search.substring(1) : null;
    var keyVals = params ? params.split('&') : null;
    if (keyVals) {
	for (var i = 0; i < keyVals.length; i++){
	    var pair = keyVals[i].split('=');
	    if (pair && pair[0] === param){
		return pair[1];
	    }
	}
	return null;
    }

}

if (getUrlParam('partner') !== 'bsunotification') {
    addEventListener(sendButton,'click',function() {


	var message = getElementByXPath('//*[@id="messageBoxForm"]/div[1]/div/div[1]/div[1]/textarea').value;

	// pull URL out of message
	var urlRE = /http.*$/

	var url = message.match(urlRE)[0];
	var title = message.replace(urlRE,'');

	chrome.runtime.sendMessage({messageType: 'BSU',title:title,url:url},function(response){
	    console.log(response.message);
	});
	
    });
}
