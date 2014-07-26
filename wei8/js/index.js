var options = {
	vertical : false, // page up/down
	horizontal : true, // page left/right
	pagingDiv : "carousel_dots", // div to hold the dots for paging
	pagingCssName : "carousel_paging", //classname for the paging dots
	pagingCssNameSelected : "carousel_paging_selected", //classname for the selected page dots
	wrap : true //Creates a continuous carousel
}
$("#carousel_panel_home").carousel(options);

var options1 = {
	vertical : false, // page up/down
	horizontal : true, // page left/right
	pagingDiv : "carousel_dots_panel_sourcing", // div to hold the dots for paging
	pagingCssName : "carousel_paging", //classname for the paging dots
	pagingCssNameSelected : "carousel_paging_selected", //classname for the selected page dots
	wrap : true //Creates a continuous carousel
}
$("#carousel_panel_sourcing").carousel(options1);

var app = {
	// Application Constructor
	initialize : function() {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents : function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
	onDeviceReady : function() {

	},

	myAlert : function() {
		alert("aaa");
	},
	//  ==========
	//  = 登陆页面 =
	//  ==========
	/*---------------------------------------------------↓登陆页↓----------------------------------------------------------*/
	login_load : function() {
		var uid = localStorage.getItem('uid');
		if (uid) {
			$.ui.loadContent("#panel_home", true, true, "");
		} else {
			$("#regist").bind('click', app.handler.showpopup);
			$("#login").bind('click', app.handler.login);
		}

	},
	login_unload : function() {
		$("#regist").unbind('click');
	},

	/*---------------------------------------------------↑登陆页↑----------------------------------------------------------*/
	//  ==========
	//  = 主页面 =
	//  ==========
	/*---------------------------------------------------主页面------------------------------------------------------------*/
	home_load : function() {

	},
	home_unload : function() {

	},
	/*------------------------------------------------------↑主页面↑---------------------------------------------------------*/
	//  ==========
	//  = 我得店铺 =
	//  ==========
	/*------------------------------------------------------我的店铺---------------------------------------------------------*/
	myshop_load : function() {
		var uid = localStorage.getItem('uid');
		$.jsonP({
			url : "http://www.rdroad.cn/wei8.php?m=Index&a=user_tiezi&uid=" + uid + "&p=1&callback=?",
			success : function(data) {
				//alert(data.msg);
				var ret = String(data.ret);
				var msg = data.msg;
				alert(ret);
				//Number ret = data.ret;
				if (ret === "-1000") {
					alert(msg);
					window.setTimeout($.ui.loadContent("#panel_home", true, true, ""),3000);
				} else {
					//alert(data.msg);
				}
			},
			error : function(error) {
				alert(error);
			}
		});
	},
	myshop_unload : function() {

	},

	/*------------------------------------------------------我的店铺---------------------------------------------------------*/
	//  ========== 
	//  = 个人中心 = 
	//  ========== 
	/*-----------------------------------------------------个人中心----------------------------------------------------------*/
	panel_user_load:function() {
		
	},
	panel_user_unload:function(){
		
	}
	/*-----------------------------------------------------个人中心----------------------------------------------------------*/
	
	/*------------------------------------------------↓事件绑定对象↓---------------------------------------------------------*/
	
	handler : {
		showpopup : function() {
			//$("#afui").popup("I'm replacing an alert box");
			var str = ['<form>', '<h3>欢迎注册微八千</h3>', '<div class="input-group" style="margin:20px 0">', '<label for="frm_username" >账 号 :</label><input id="reg_username" type="text" >', '<label for="frm_psw">密 码 :</label><input id="reg_psw" type="password" >', '</div>', '</form>'].join('');
			$.ui.popup({
				title : "注册",
				message : str,
				cancelText : "取消",
				cancelCallback : function() {
					console.log("cancelled");
				},
				doneText : "确定",
				doneCallback : function() {
					console.log("Done for!");
				},
				cancelOnly : false
			});
		},
		login : function() {
			var username = $("#frm_username").val();
			var password = $("#frm_psw").val();
			$.jsonP({
				url : "http://www.rdroad.cn/wei8.php?m=Index&a=username&username=" + username + "&password=" + password + "&callback=?",
				success : function(data) {
					var ret = data.ret;
					var uid = data.uid;
					var groupid = data.groupid;
					console.log(uid);
					if (ret === 0) {
						$.ui.loadContent("#panel_home", true, true, "pop");
						localStorage.setItem('uid', uid);
						localStorage.setItem('groupid', groupid);
					} else {
						alert(data.msg);
					}
				},
				error : function(error) {
					alert(error);
				}
			});
		}
	},
	/*------------------------------------------------↑事件绑定对象↑--------------------------------------------------------*/

};
