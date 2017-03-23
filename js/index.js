$(function(){

    $('#particles').particleground({
            dotColor: '#fff',
            lineColor: '#fff',
            parallax: false
    });
    $(window).resize(function(){
        var poldh = $('.person').height();
        var yheight = $('.person').outerHeight(true)-poldh;
        var heightall = $(window).height()-2*yheight;
        //heightall>=560?$('.person').height(heightall):$('.person').height(560);
        $('.person').height(heightall);
    }).resize();
    $('.person-con li:odd').hover(function() {
        $(this).stop().animate({width:'100%'}, 400)
        $(this).prev('li').stop().animate({width:'0%'}, 400,function(){
            $(this).css('display','none')
            $(this).next().find('strong').fadeIn(400);
        })
    }, function() {
       $(this).stop().animate({width:'25%'}, 400)
        $(this).prev('li').stop().animate({width:'70%'}, 400).css('display','block')
                                    .next().find('strong').hide();
    });
//右侧内容动画控制
    $('.main-tab li').bind('click', tab);
    function tab(){
        $(this).find('span').addClass('fa-spin');
        $(this).animate({width:'130px'}, 200,function(){
            $(this).css('background', 'white').siblings('li').css('background', 'none');
            $(this).children('div').css('opacity', '1').parent().siblings('li').children('div').css('opacity', '0')
        })
        $(this).siblings('li').animate({width:'30px'}, 200).find('span').removeClass('fa-spin');
        $('.tab-con').eq($(this).index()).slideDown().siblings('.tab-con').slideUp();
    }
    $('.main-tab li:first').trigger('click');
    $('.demo a').attr("target", "_blank");
    //卡片切换
    $('.life li').click(function(event) {
        var otherli = $(this).siblings('li');
        var d = $(this).clone(true);
        var oldclass = $(this).attr('class');
        $(this).remove()
        var a = 0;
        var b = 0;
        for (var i = 1; i<3; i++) {
            $(otherli[i-1]).animate({top: a*10+'%',left: b*12+'%'});
            a+=1;
            b+=1
            $(otherli[i-1]).find('.styleicon').stop().animate({opacity:1}, 400)
        }
        $(d).appendTo('.life').attr('class', oldclass).stop().animate({
            top: '20%',
            left: '24%'
        },200);
        $(d).find('.styleicon').stop().animate({opacity:0.1}, 400)
    });

    //音乐播放控制
    var audio = $('audio');
    var pstate = 0;
    var ptimer;
    var ps = 0;
    $('.play-o').click(function(){
        change();
    })
    function change(){
        if(pstate ==0)
        {
            $('.play-o').removeClass('fa-play-circle').addClass('fa-pause-circle')
            pstate = 1;  
            playing();
            audio[ps].play(); 
            var alltime = Math.ceil(audio[ps].duration); 
            var songsec = alltime%60;
            var songmin = parseInt(alltime/60);
            var realtime = songmin+':'+songsec;
            $('.total-t').empty().append(realtime);
        }
        else{
            $('.play-o').removeClass('fa-pause-circle').addClass('fa-play-circle')
            pstate = 0; 
            audio[ps].pause();  
            clearInterval(ptimer);
        }
    }
    function playing(){
        ptimer = setInterval(function(){
            var percent = audio[ps].currentTime / audio[ps].duration;
            $('.press-dot').css('width', percent*100+'%');
            if(percent==1){
                ps<audio.length-1?ps++:ps=audio.length-1;
                qiege(ps-1);
            }         
        }, 60)
    }
    $('.play-n').click(function(){
        ps<audio.length-1?ps++:ps=audio.length-1;
        qiege(ps-1);
    })
    $('.play-p').click(function(){
        ps>=1?ps--:ps=0;
        qiege(ps+1);
    })
    function qiege(obj){
        if(audio[obj].paused){
            pstate = 0;
            change();
            audio[obj].currentTime = 0;
        }
        else{
            audio[obj].pause();
            pstate = 0;
            change(); 
            audio[obj].currentTime = 0;           
        }
    }
})
