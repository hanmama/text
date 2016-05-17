// 查找所有以b开头的城市
define(["city"],function(city){
	console.log("我是script1.js");
    var citys=[],arr;
    for(var i in city){
       arr=city[i]
       if(arr[1].charAt(0)=="B"){
          citys.push(arr[0]);
       }
    }
    return citys;
})