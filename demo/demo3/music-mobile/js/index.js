function changeSize(){
    var propo=$(window).width()/640;
	$('html').css('font-size',20*propo+'px');
};
$(document).ready(function(){
   changeSize();
});
$(window).resize(function(){
	changeSize();
});
