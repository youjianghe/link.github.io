//m导航
$(function($){
	$('.mnav').on('click',function(){
		$('#classify').toggleClass('active hidden-xs hidden-sm');
	});
    var href = window.location.hash;//获取链接地址后面#的内容
    if($(href).length<=0){href = '#mylinks_link'}//初始化找不到ID的到首页
    toggleLink($('#classify a[href="'+href+'"]'));

	$('#classify a').click(function (e) {
       toggleLink($(this));
	});
    $('#vframe').contents().find('body').append('<p style="color:#ffffff;">请在上面输入视频地址，并点击播放，vip视频也能看</p>')
    playVideo();
});

function playVideo(){
     $('.btn-play').click(function(){
            var api = $('#selecturl option:selected').val();
            var videourl = $('input[name = "videourl"]').val();
            $('#vframe').attr('src',api+videourl);
     });

}

function toggleLink(href){
    var link = href.attr('href').split('_')[1];
    if(link =="link"){
        $('.nav-tabs li').removeClass('active');
        href.parent().addClass('active');
        $('.tab-content .tab-pane').removeClass('active');
        $(href.attr('href')).addClass('active');
    }
}
function addFavorite2() {
    var url = window.location;
    var title = document.title;
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("360se") > -1) {
        alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
    }
    else if (ua.indexOf("msie 8") > -1) {
        window.external.AddToFavoritesBar(url, title); //IE8
    }
    else if (document.all) {
	  try{
	   window.external.addFavorite(url, title);
	  }catch(e){
	   alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
	  }
    }
    else if (window.sidebar) {
        window.sidebar.addPanel(title, url, "");
    }
    else {
  		alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
    }
}