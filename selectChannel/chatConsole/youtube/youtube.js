//クエリパラメータ取得
function getParam(name) {
    url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};

if (getParam('ELC') === 'true') {
    $('#chat').hide();
    $('#chat-messages > yt-live-chat-header-renderer').hide();
	$('#ticker').hide();
};