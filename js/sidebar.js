

$(function(){
    $('.sidebar_trigger').click(function(){
        $('nav li').fadeToggle();
    });
    //console.log('lalla');
});

$(function(){
	$(window).scroll(function(){
    if($(document).scrollTop()>100){
    	$(".navigation").css({'backgroundColor':"rgba(0,0,0,0.5)"});
    }
    else{
    	$(".navigation").css({'backgroundColor':"rgba(0,0,0,0.2)"});
    }
    });
});

/*window.onresize = function() { //监听窗口变化
　　window.location.reload(); //兼容chrome safari
　　window.location.href = ""; //兼容火狐
}*/

var change = 1;
window.onresize = function() { //监听窗口变化
    var width = window.innerWidth;
    //var url = window.location.href;
    if(width >= 980 ){
        if(change == 1){//防止多次刷新
            var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
            if(userAgent.indexOf("Firefox") > -1){//判断是否Firefox浏览器
                window.location.href = ""; //兼容火狐
            } else {
                window.location.reload();
            }
            change =0;
        }
    } else {
        change = 1;
    }
　　
}


