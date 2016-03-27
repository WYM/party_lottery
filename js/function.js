$(function () {
    var a;
    var b;
    var c;
    var current_abc = Array();
    var i = 0;
    var j = 2;
    var myInter;
    var now_turn = 1;
    var norepeat_array = new Array("9_9_9");
    $(".result_15").hide();
    $(".result_30").hide();
    $(".result_28").hide();
    alert("元旦晚会抽奖程序工作正常，可以进行抽奖。");
    $(".button_self").click(function (){
        if(now_turn == 1){
            now_turn++;
            $(".result_15").fadeIn(900);
            $(".button_img").attr("class", "stop_img");
            myInter =  setInterval(function(){
                change_num();
                if(j > 80){
                    //alert($(".result_15 > .inner > a").html());
                    i++;
                    show_num(15);
                    j = 2;
                    if(i == 15){
                        i = 0;
                        clearInterval(myInter);
                    }
                }
                j++;
            }, 20);
        }else if(now_turn == 2){
            now_turn++;
            $(".result_30").fadeIn(900);
            $(".button_img").attr("class", "stop_img");
            myInter =  setInterval(function(){
                change_num();
                if(j > 80){
                    show_num(30);
                    i++;
                    j = 2;
                    if(i == 30){
                        i = 0;
                        clearInterval(myInter);
                    }
                }
                j++;
            }, 20);
        }else if(now_turn == 3){
            now_turn++;
            $(".result_28").fadeIn(900);
            $(".button_img").attr("class", "stop_img");
            myInter =  setInterval(function(){
                change_num();
                if(j > 80){
                    show_num(28);
                    i++;
                    j = 2;
                    if(i == 28){
                        i = 0;
                        clearInterval(myInter);
                    }
                }
                j++;
            }, 20);
        }else{
            alert("所有抽奖均已完成！");
            $(".control").fadeIn("slow");
        }
        
        
    });

    $("#close_box_15").click(function(){
        $(".result_15").fadeOut(600);
        clear_num();
        $(".temp_saver").append('<br />');
    });

    $("#close_box_30").click(function(){
        $(".result_30").fadeOut(600);
        clear_num();
        $(".temp_saver").append('<br />');
    });

    $("#close_box_28").click(function(){
        $(".result_28").fadeOut(600);
        clear_num();
        $(".temp_saver").append('<br />');
    });
    $(".view_15").click(function(){
        $(".result_15").fadeIn(600);
    });
    $(".view_30").click(function(){
        $(".result_30").fadeIn(600);
    });
    $(".view_28").click(function(){
        $(".result_28").fadeIn(600);
    });
})
var get_random = function () {
    rdn = 99
    while(rdn > 9  || rdn < 0){
        rdn = Math.round(Math.random() * 10);
    }
    return rdn;
} 

var get_first = function () {
    rdn = 99
    while(rdn > 5  || rdn < 0){
        rdn = get_random();
    }
    return rdn;
} 

var change_num = function() {
    isRepeated = true;
    while (isRepeated){
        a = get_first();
        if(a != 0){
            if(get_random() > 8){
                a = 0;
            }
        }
        b = get_random();
        c = get_random();
        if(a == 0 && b == 0 && c == 0){
            a = 6;
        }
        $(".num_a").empty().append(a);
        $(".num_b").empty().append(b);
        $(".num_c").empty().append(c);
        if($(".temp_saver").html().replace('OK', '|' + a + b + c + '|') ==  $(".temp_saver").html()){
            isRepeated = false;
        }
    }
    //current_abc[now_turn][i] =  a + "_" + b + "_" + c;
}

var show_num = function(mydid){
    $(".result_" + mydid + " > .inner").append('<a class="new_num">'+ a + b + c +'</a>');
    $(".new_num").hide();
    $(".new_num").fadeIn(1000);
    $(".new_num").attr("class", "old_num");
    $(".temp_saver").append('|' + a + b + c + '|');
    //current_abc.push(1);
                    //alert(a);
    //current_abc[now_turn][i] =  a + "_" + b + "_" + c;
    //alert(current_abc);
    //alert(norepeat_array);
    //norepeat_array.concat(current_abc);
    //alert(norepeat_array.toString());
}

var clear_num = function() {
    $(".num_a").empty().append(0);
    $(".num_b").empty().append(0);
    $(".num_c").empty().append(0);
    $(".stop_img").attr("class", "button_img");
}