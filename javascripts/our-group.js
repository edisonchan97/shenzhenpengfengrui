var $select=$('.group-member li').index($('#selected'));
var i=50000;
$(".glyphicon-log-in").click(function(){
    $(".group-member li").find(".select").animate({
        width:'0.5rem',
        height:'0.5rem',
        marginTop:'0',
        opacity:'0.5'
    });
    $select++;
    i = (i+1)%5;
    if(i<0){
        j = (-1)*i;
    }else{
        j=i;
    }


    $('.group-member li').eq(0).find('.member-img').css('background-image',"url('images/group"+((0-j)<0?(5-j):(-1)*j)+".jpg')").css("background-size","100%");
    $('.group-member li').eq(1).find('.member-img').css('background-image',"url('images/group"+((1-j)<0?(6-j):(1-j))+".jpg')").css("background-size","100%");
    $('.group-member li').eq(3).find('.member-img').css('background-image',"url('images/group"+((3-j)<0?(8-j):(3-j))+".jpg')").css("background-size","100%");
    $('.group-member li').eq(4).find('.member-img').css('background-image',"url('images/group"+((4-j)<0?4:(4-j))+".jpg')").css("background-size","100%");


    if($select>4){
        $select=0;
    };
    name=$("#our-group").find('li').eq($select).find("input").attr("value");
    job=$("#our-group").find('li').eq($select).find("input").attr("job");
    $(".member-name").animate({
        marginLeft:'1.5rem',
    });
    $(".member-job").animate({
        marginLeft:'1.5rem',
    });
    $(".member-name").text(name);
    $(".member-job").text(job);
    $(".member-name").animate({
        marginLeft:'0.8rem',
    });
    $(".member-job").animate({
        marginLeft:'0.8rem',
    });
    $(".group-member li").find(".select").css('background-image',"url('images/group"+((2-i)<0?(7-i):(2-i))+".jpg')").css("background-size","100%");
    $(".group-member li").find(".select").animate({
        width:'1.6rem',
        height:'1.6rem',
        marginTop:'0.4rem',
        opacity:'1'
    });

});

/*$(".glyphicon-hand-left").click(function(){
    $(".group-member li").find(".select").animate({
        width:'0.5rem',
        height:'0.5rem',
        marginTop:'0',
        opacity:'0.5'
    });
    $select--;
    //i = (i-1)%5;
    //if(i<0){
    //    j = (-1)*i;
    //}else{
    //    j=i;
    //}

    console.log(i);
    //$('.group-member li').eq(0).find('.member-img').css('background-image',"url('images/group"+((0+j)>0?(0+j):0)+".jpg')").css("background-size","100%");
    //$('.group-member li').eq(1).find('.member-img').css('background-image',"url('images/group"+((1+j)>4?4:(1+j))+".jpg')").css("background-size","100%");
    //$('.group-member li').eq(3).find('.member-img').css('background-image',"url('images/group"+((3+j)<3?j-2:j+1)+".jpg')").css("background-size","100%");
    //$('.group-member li').eq(4).find('.member-img').css('background-image',"url('images/group"+((4-i)>0?4:(4-i))+".jpg')").css("background-size","100%");

    if($select<0){
        $select=4;
    };
    name=$("#our-group").find('li').eq($select).find("input").attr("value");
    job=$("#our-group").find('li').eq($select).find("input").attr("job");
    $(".member-name").animate({
        marginLeft:'1.5rem',
    });
    $(".member-job").animate({
        marginLeft:'1.5rem',
    });
    $(".member-name").text(name);
    $(".member-job").text(job);
    $(".member-name").animate({
        marginLeft:'0.8rem',
    });
    $(".member-job").animate({
        marginLeft:'0.8rem',
    });
    $(".group-member li").find(".select").css('background-image',"url('images/group"+$select+".jpg')").css("background-size","100%");
    $(".group-member li").find(".select").animate({
        width:'1.6rem',
        height:'1.6rem',
        marginTop:'0.4rem',
        opacity:'1'
    });

})
*/
$('.group-member li .member-img').mouseover(function(){
    $(this).animate({
        backgroundSize:'130%',
        opacity:'0.6',
    },500);
}).mouseout(function(){
    $(this).animate({
        backgroundSize:'100%',
        opacity:'1'
    },500);
});
