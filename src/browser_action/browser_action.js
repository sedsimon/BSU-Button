

chrome.tabs.query({active:true},function(tabs) {
    if (tabs){
	var url = tabs[0].url;
	var title = tabs[0].title;
	window.open("https://hootsuite.com/hootlet/social-share?partner=bsubutton&url="
		    + encodeURIComponent(url) +
		    "&title="
		    + encodeURIComponent(title));
    }
});


