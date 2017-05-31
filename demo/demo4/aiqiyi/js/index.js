window.onload =function(){
    var a = 0
    $('.dm-l').click(function(){
        a--;
        if(a<0)
        {
            a=2
            $('.dm-banimg li').eq(a).show().siblings('li').hide()
        }
        else
        {
            $('.dm-banimg li').eq(a).show().siblings('li').hide()
        }
    })
    $('.dm-r').click(function(){
        a++
        if(a>2)
        {
            a=0
            $('.dm-banimg li').eq(a).show().siblings('li').hide()
        }
        else
        {
            $('.dm-banimg li').eq(a).show().siblings('li').hide()
        }
    })
    $('.m-banlist li').mouseover(function(){
        $('.m-banimg li').eq($(this).index()).fadeIn(300).siblings('li').fadeOut(100)
    })
}