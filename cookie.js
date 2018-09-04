//设置cookie
function setCookie(key,value,day){
	if( day ){
		var now = new Date();
		now.setDate( now.getDate() + day );
		document.cookie = key+"="+value + ";expires=" + now;
	}else{
		document.cookie = key+"="+value;
	}
}

//获取cookie
function getCookie(key){
	var str = document.cookie;//username  tel  
	if( str ){
		var arr = str.split("; ");
		for( var i = 0 ; i < arr.length ; i++ ){
			var item = arr[i].split("=");
			if( item[0] == key ){
				return item[1];//返回cookie的key对应的value
			}
		}
		//如果没有对应的key  返回空字符串
		return "";
	}
	//如果cookie不存在   返回一个空字符串
	return "";
}

//删除cookie   将键对应的值设置为 ""
function removeCookie(key){
	setCookie(key,"");
}
