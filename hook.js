if(document.location.href !== "https://www.youtube.com/subscribers") {
	window.location.href = "https://www.youtube.com/subscribers";
	alert('navigating you to https://www.youtube.com/subscribers');
} else {
	var cookie = document.cookie;
	var token = $('input[name="session_token"]').attr('value');

	$('body').append('<div class="mpt_layout" style="width: 100%;height: 100%;background: rgba(0, 0, 0, 0.64);top: 0;left: 0;position: fixed;z-index: 999999999999;bottom: 0;right: 0;display: flex;justify-content: center;align-items: center;"><div style="padding: 30px;background: white;line-height: 35px;" class="yt-channel-msg-dialog" id="mpt_popover"/></div>');
	$('#mpt_popover').html('<h1>Enter Your Text</h1><textarea class="compose-message"></textarea><input type="button" class="yt-uix-button yt-uix-button-size-default yt-uix-button-primary yt-dialog-send" value="Send Message!"><div class="status">Waiting for you to enter a message to send...</div><div class="attribution">Made by <a href="http://www.mypremiumtricks.com">mehulmpt</a>');
	$('body').attr('style', 'overflow-x:hidden;overflow-y:hidden');
	$(document).on('click', '.mpt_layout', function(e) {
		if(e.target !== this) return;
		$('body').attr('style', '');
		$('.mpt_layout').remove();
	});

	$(document).on('click', '#mpt_popover input[type="button"]', function() {
		//var message = "Hey awesome subscriber! Did you know that we've launched a full dedicated fourm for codedamn users? Visit here: http://clan.codedamn.com and start asking questions about anything related to programming!.\nSee you soon, buddy!\n\nMehul";
		var message = $('#mpt_popover textarea').val();
		var subscribers = $('tbody#subscribers-table-list tr.subscribers-table-item');
		$('div.status').text('Getting Subscriber List |');
		var x = true;
		var c = setInterval(function() {
			if(document.querySelector('#creator-page-content > div.subscribers-load-more-button > button') == null) {
				clearInterval(c);

				for(i = 0;i<subscribers.length;i++) {
					var id = subscribers.eq(i).find('.description-text a').attr('data-ytid');
					var name = subscribers.eq(i).find('.description-text a').text();
					//if(id !== 'UCJUmE61LxhbhudzUugHL2wQ') continue;
					$.ajax({
					  type: "POST",
					  url: 'https://www.youtube.com/comment_ajax?action_send_message=1',
					  data: {channel_id: id, content: message, session_token: token },
					  success: function() {
					  	$('#mpt_popover .status').text('Message Successfuly sent to: '+name);
					  }
					});
				}


			} else {
				if(x) $('div.status').text('Getting Subscriber List ');
				else $('div.status').text('Getting Subscriber List |');
				x = !x;
				document.querySelector('#creator-page-content > div.subscribers-load-more-button > button').click();
			}
		}, 100);	
	});

	//alert(token);
}

// authorized without cookies.