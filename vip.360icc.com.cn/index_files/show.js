
var addClass=function(obj,cName){//类名添加;
	(obj.className.indexOf(cName)==-1) && (obj.className+=" "+cName)
}
function bindEvent(obj, eventName, fn) {
    //事件绑定
    if (obj.attachEvent) {
        obj.attachEvent('on' + eventName, fn);
    } else {
        obj.addEventListener(eventName, fn, false);
    }
}

if(typeof history.pushState!= 'undefined'){
	var initHash = location.hash;
	if (location.hash.indexOf('#_xcy_') == -1) {
		window.history.replaceState({
			page: 1
		}, '', '');
		history.pushState({
			page: 1
		}, 'bd', location["href"] +'#_xcy_');
	}
	if (location["hash"]["indexOf"]("_hmw_") == -1) {
		history.pushState({
			page: 1
		}, "", location["href"] + "#_hmw_")
	}
	bindEvent(window,"popstate",function() {
		var oShowMsg=document.getElementById("myModal");
		oShowMsg.style.display='none';
		addClass(oShowMsg,'out');
		if(location.hash.indexOf('#_xcy_') != -1 && location.hash.indexOf('#_hmw_') == -1){
			oShowMsg.style.display='block';
			addClass(oShowMsg,'in');
		}
		if ((initHash && location.hash.indexOf('#_xcy_') == -1 && location.hash.indexOf('#_hmw_') == -1) || (!initHash && !location.hash)) {
			var jumpLink = '/wap/by/by';
			if (window.parent == window) {
				window.location.href = jumpLink;
			} else {
				window.top.location.href = jumpLink;
			}
		}
	});
}

function beforeAfter(){
	for(var i = 0; i < $('.clear').length; i++) {
		if(!$('.clear')[i] && $('.clear')[i].nodeType !== 1) return;
		var oContent = $('.clear')[i].getAttribute("data-content") || '';
		var oBefore = document.createElement("small");
		oBefore.className="before";
		oBefore.innerHTML=oContent;
		$('.clear')[i].insertBefore(oBefore,$('.clear')[i].firstChild);
		var oAfter = document.createElement("small");
		oAfter.className="after";
		oAfter.innerHTML=oContent;
		$('.clear')[i].appendChild(oAfter);
	}
};
	
beforeAfter();
/*不能用a标签:相互影响;改用以下函数*/ 
function setTop(obj){
	document.documentElement.scrollTop=obj.offsetTop;
	window.pageYOffset=obj.offsetTop;
	document.body.scrollTop=obj.offsetTop;
}