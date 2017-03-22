window.onload =function (){
    var navList = document.getElementById('navList')
    var anavList = navList.getElementsByTagName('li')
    var navList_con1 = document.getElementById('navList_con1');

    var h = ($(window).height()-$('.side').height())/2
    $('.side').css('top',h+'px')
    
    for (var i = 0; i < anavList.length; i++) {
        anavList[i].onmouseover = function(){
            
            navList_con1.style.display = 'block'
        }        
        anavList[i].onmouseout = function(){
            navList_con1.style.display = 'none'
        }
    }
    navList_con1.onmouseover = function(){
        navList_con1.style.display = 'block'
    }
    navList_con1.onmouseout = function(){
        navList_con1.style.display = 'none'
    }

    //JQ
    $('.c-bannum li').mouseover(function(){
        var a = - $(this).index()*439 + 'px'
        $(this).attr('class','c-on').siblings().attr('class','')
        $('.c-banimg').animate({'marginLeft':a},300)
    })
    $('.F2-con-bannum li').mouseover( function(){
        var a = $(this).index()*340
        $(this).attr('class','c-on')
        $(this).siblings().attr('class','')
        $('.F2-con-banimg').animate({'left':-a+'px'},300)
    })
    var ban = 0
    var bantimer = setInterval(banner,3000)  
    function banner(){
        $('.banimg li').eq(ban).fadeIn(800).siblings('li').fadeOut(200)
        $('.bannum li').eq(ban).attr('class','ban_li').siblings('li').attr('class','')
        ban++;
        if(ban>2)
        {
            ban = 0
        }
    }
    $('.banimg li').mouseover(function(){
        clearInterval(bantimer)
    })
    $('.banimg li').mouseout(function(){
        bantimer = setInterval(banner,3000)
    })
    $('.bannum li').mouseover(function(){
        clearInterval(bantimer)
        $('.bannum li').eq($(this).index()).attr('class','ban_li').siblings('li').attr('class','')
        $('.banimg li').eq($(this).index()).fadeIn(800).siblings('li').fadeOut(200)
    })
    $('.bannum li').mouseover(function(){
        bantimer = clearInterval(bantimer)
    })
    var n =0 
    $('#pright').click(function() {            
            n +=999
            if(n>=0)
            {
                n=0
                $('.goods-ban ul').animate({'marginLeft':n+'px'},300)
            }
            else
            {
                $('.goods-ban ul').animate({'marginLeft':n+'px'},300)
            }
            
    });
    $('#pleft').click(function() {
            n-=999
            if(n<-2997)
            {
                n=-2997
                $('.goods-ban ul').animate({'marginLeft':n+'px'},300)
            }
            else
            {
                $('.goods-ban ul').animate({'marginLeft':n+'px'},300)
            }
    });
}
function barchange(obj){
        $("#"+obj+"bar li").mouseover(function(){

        s= $(this).index()+1
            
        for (var i = 1; i <= 9; i++) {
            if(s==i)
            {
                $('.'+obj+"-con-r"+i).css('display','block')
            }
            else
            {
                $('.'+obj+"-con-r"+i).css('display','none')
            }
        }
    })
 }

