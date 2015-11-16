$(function(){
	$("head").append('<link href="ihref_gg/css/ihref_gg.css" rel="stylesheet" type="text/css">');
	$(".header").append('<div id="ihref_gg1"><div id="ihref_body"><div id="ihref_body_c"></div><a id="ihref_close" href="javascript:void(0)">关闭</a></div></div>')
	$("#ihref_body_c").load('ihref_gg/index.html', function(){
		$("#ihref_gg1").stop().slideDown('fast');
	});
	$("#ihref_close").click(function(){
		$("#ihref_gg1").stop().slideUp("fast");
	});
});