require.config({
	baseUrl : "http://127.0.0.1/big/require/",
	paths : {
		"zepto" : "lib/zepto.min",
		"jquery" : "lib/jquery-1.8.3.min",
		"iscroll" : "lib/iscroll",
		"city" : "js/city",
		"hot" : "js/hot"
	}
})

require(["jquery","js/script1","js/hot"],function($,citys,hotCity){
	$("body").css("background","pink");
	console.log("我是main.js")
	var html="",hotHtml="";
	$.each(citys,function(i,v){
		html+="<li>"+v+"</li>"
	})
	$("#all").html(html);
	$.each(hotCity,function(i,v){
		hotHtml+="<li>"+v+"</li>"
	})
	$("#hot").html(hotHtml);
})