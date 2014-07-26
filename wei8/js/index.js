var options={
   vertical:false, // page up/down
   horizontal:true, // page left/right
   pagingDiv:"carousel_dots", // div to hold the dots for paging
   pagingCssName:"carousel_paging", //classname for the paging dots
   pagingCssNameSelected: "carousel_paging_selected", //classname for the selected page dots
   wrap:true //Creates a continuous carousel
}
$("#carousel_panel_home").carousel(options);

var options1={
   vertical:false, // page up/down
   horizontal:true, // page left/right
   pagingDiv:"carousel_dots_panel_sourcing", // div to hold the dots for paging
   pagingCssName:"carousel_paging", //classname for the paging dots
   pagingCssNameSelected: "carousel_paging_selected", //classname for the selected page dots
   wrap:true //Creates a continuous carousel
}
$("#carousel_panel_sourcing").carousel(options1);


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        
    },
	
	myAlert: function() {
		alert("aaa");
	},
	/*---------------------------------------------------↓首页↓----------------------------------------------------------*/
	login_load:function() {
		$("#regist").bind('click',app.handler.showpopup);
		$("#login").bind('click',app.handler.login);
	},
	login_unload:function() {
		$("#regist").unbind('click');
	},
	
	/*---------------------------------------------------↑首页↑----------------------------------------------------------*/
	/*------------------------------------------------↓事件绑定对象↓--------------------------------------------------------*/
	handler:{
		showpopup: function() {
			//$("#afui").popup("I'm replacing an alert box");
			var str = [
			'<form>',
			'<h3>欢迎注册微八千</h3>',
			'<div class="input-group" style="margin:20px 0">',
			'<label for="frm_username" >账 号 :</label><input id="frm_username" type="text" >',
			'<label for="frm_psw">密 码 :</label><input id="frm_psw" type="password" >',
			'</div>',
			'</form>'
			].join('');
			$.ui.popup(
				{
					title:"注册",
					message:str,
					cancelText:"取消",
					cancelCallback: function(){console.log("cancelled");},
					doneText:"确定",
					doneCallback: function(){console.log("Done for!");},
					cancelOnly:false
				}
			);	
		},
		login:function() {
			alert("dfdf");
			$.jsonP({
				url:"http://www.rdroad.cn/wei8.php?m=Index&a=username&callback=?",
				success:function(data){
					alert(data['ret']);
					alert(data.msg);
				},
				error:function(error){alert(error);}
				});
		}
	},
	/*------------------------------------------------↑事件绑定对象↑--------------------------------------------------------*/
	
};
