// JavaScript Document

//网站的主域名
var serverURL = 'http://www.phonegap100.com';

/*
写入loclstorage缓存
 * @param key
 * @param data
*/
function setItem(key,data){
	localStorage.setItem(key,data);
}
/*
读取localstorage缓存
  * @param key 
  * @returns
*/
function getItem(key){
	return localStorage.getItem(key);
}

/**
 * 检查网络情况
 * @returns {Boolean}
 */
function checkConnection() {
	var networkState = navigator.network.connection.type;
	if (networkState == Connection.NONE) {
		navigator.notification.confirm('请确认网络连接已开启,并重试', showAlert, '提示',
				'确定');
		return false;
	}else{
		return true;
	}
}
/*时间戳转换为 2011年3月16日 16:50:43 格式*/
function getDate(tm){
	var tt=new Date(parseInt(tm) * 1000).toLocaleString()
	return tt;
}