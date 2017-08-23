var $browser=$('html, body');
$('a').click(function(){
    $browser.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});
$gallery=$(".gallery");
$cover=$(".gallery span img");
$(window).scroll(function(){
    $group=$(".group");
    var winH = $(window).height();//浏览器窗体的高度
    scrollTop = $(window).scrollTop();//当前浏览器窗体顶部对与文档顶部的距离
    offSetTop = $group.offset().top;//我们的团队距离浏览器顶部的偏移
    GalleryoffSetTop = $gallery.offset().top;//我们的作品距离浏览器顶部的偏移
    if(offSetTop<winH+scrollTop){
        $url=$group.attr('src');
        $group.css('background-image',"url('"+$url+"')").css("background-size","100%");
    }
    if(GalleryoffSetTop<winH+scrollTop){
        $(".gallery").find('span').each(function(){
            var $src=$(this).attr("src");
            $(this).find("img").attr("src",$src);
        })
    }
});
$gallery.find("span").find("img").mouseover(function(){
    $("img").stop(true,true);
    $(this).animate({
        opacity:'0.6',
    },500).siblings("h3").css("display","block");
}).mouseout(function(){
    $("img").stop(true,true);
    $(this).animate({
        opacity:'1'
    },500).siblings("h3").css("display","none");
});
$cover.click(function(){
    var $img = $(this).attr('src');
    $('#cover').css('display',"block");
    $('.show').css('display',"block");
    $('.show').animate({
        top:'0.5rem'
    }).find("img").attr('src',$img);
});
$("#cover span").click(function(){
    $(".show").animate({
        top:'50%'
    },500,function(){
        $('#cover').css('display','none');
    });
});
$("#cover").click(function(e){
    //if(e.target==)
    if(e.target==this){
        $(".show").animate({
            top:'150%'
        },500,function(){
            $('#cover').css('display','none');
            $('.show').css('display','none');
        });
    }
});
var i=0;
$(".glyphicon-hand-right").click(function(){
    i++;
    var comoffset= -6.4*i;
    if(comoffset < -19.2){
        comoffset=0;
        i=0;
    }
    $('.comment-box').animate({
        left:''+comoffset+'rem'
    },1000);
});
$(".glyphicon-hand-left").click(function(){
    i--;
    var comoffset= -6.4*i;
    if(comoffset > 0){
        comoffset = -12.8;
        i=2;
    }
    $('.comment-box').animate({
        left:''+comoffset+'rem'
    },1000);
});
