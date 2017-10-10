/*滚动定点固定*/
function flxedToTop(obj) {
	var aint = $(obj).offset().top;
	$(window).on('scroll.zy', function() {
		var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		if(top > aint) {
			$(obj).css({
				'position': 'fixed',
				'top': '0',
				'left': '50%',
				'width': $(obj).parent().width() + "px",
				'margin-left': '-' + $(obj).parent().width() / 2 + "px"
			});
		}
		if(top < aint) {
			$(obj).css({
				'position': 'static',
				'margin-left': "0"
			});
		}
	});
}
/*滚动定点固定*/
function flxedToBottom(obj) {
	var aint = $(obj).offset().top;
	$(window).on('scroll.zy', function() {
		var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		if(top > aint) {
			$(obj).css({
				'position': 'fixed',
				'bottom': '0',
				'left': '50%',
				'width': $(obj).parent().width() + "px",
				'margin-left': '-' + $(obj).parent().width() / 2 + "px"
			});
		}
		if(top < aint) {
			$(obj).css({
				'position': 'static',
				'margin-left': "0"
			});
		}
	});
}

function flxedBottom(obj) {
	$(obj).css({
		'position': 'fixed',
		'bottom': '0',
		'left': '50%',
		'width': $(obj).parent().width() + "px",
		'margin-left': '-' + $(obj).parent().width() / 2 + "px"
	});
}

function setTab(cursel) {
	cursel_0 = cursel;
	for(var i = 1; i <= links_len; i++) {
		var menu = document.getElementById("page" + i);
		var menudiv = document.getElementById("page_" + i);
		if(i == cursel) {
			menu.className = "off";
			menudiv.style.display = "block";
		} else {
			menu.className = "";
			menudiv.style.display = "none";
		}
	}
}

function Next() {
	cursel_0++;
	if(cursel_0 > links_len)
		cursel_0 = 1
	setTab(cursel_0);
}
var cursel_0 = 1;
var links_len;
onload = function() {
	if(document.getElementById("menu") != null) {
		var links = document.getElementById("menu").getElementsByTagName('li');
		links_len = links.length;
	}
}



function shoucang() {
	var url = window.location;
	var title = document.title;
	var ua = navigator.userAgent.toLowerCase();
	if (ua.indexOf("360se") > -1) {
		alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
	} else if (ua.indexOf("msie 8") > -1) {
		window.external.AddToFavoritesBar(url, title); //IE8
	} else if (document.all) {
		try {
			window.external.addFavorite(url, title);
		} catch (e) {

			alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
		}
	} else if (window.sidebar) {
		window.sidebar.addPanel(title, url, "");
	} else {
		alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');

	}
	return false;
}
