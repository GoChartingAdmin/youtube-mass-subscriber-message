var script = ['if(document.location.href !== "https://www.youtube.com/subscribers") {',
	'window.location.href = "https://www.youtube.com/subscribers";',
	'alert("navigating you to https://www.youtube.com/subscribers");',
'} else {',
	'var cookie = document.cookie;',
	'var token = $(\'input[name="session_token"]\').attr("value");',
	'var message = "Testing again. This is a test message. Please dont bother about it. Sorry for bugging you.";',
	'alert(token);',
	"var subscribers = $('tbody#subscribers-table-list tr.subscribers-table-item');",
	"console.log(subscribers);",
	'for(i = 0;i<subscribers.length;i++) {',
	"var id = subscribers.eq(i).find('.description-text a').attr('data-ytid');",
	"$.ajax({",
		"//headers: {'Cookie': cookie, 'origin': 'https://www.youtube.com', 'referer': 'https://www.youtube.com/subscribers', 'x-youtube-client-version': '1.20160204', 'x-youtube-page-cl': '113861800', 'x-youtube-page-label': 'youtube_20160204_RC2', 'x-youtube-variants-checksum': 'a6bca601ea2834dd7d17365dc3ab96a3'},	  ",
	  
	  'type: "POST",',
	  "url: 'https://www.youtube.com/comment_ajax?action_send_message=1',",
	  "data: {channel_id: id, content: message, session_token: token },",
	"});",
'}}\n'].join('\n');
//"//headers: {'Cookie': cookie, 'origin': 'https://www.youtube.com', 'referer': 'https://www.youtube.com/subscribers', 'x-youtube-client-version': '1.20160204', 'x-youtube-page-cl': '113861800', 'x-youtube-page-label': 'youtube_20160204_RC2', 'x-youtube-variants-checksum': 'a6bca601ea2834dd7d17365dc3ab96a3'},	  ",
var j = chrome.extension.getURL('jquery.js');
var k = chrome.extension.getURL('hook.js');
$.getScript(j, function() {
$.getScript(k);
});
