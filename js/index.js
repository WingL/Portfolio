/*
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $("#menu ul li").css("padding","0");
            $("#name").css("padding","0")
        } else{
            $("#menu ul li").css("padding","40px 0 20px 0");
            $("#name").css("padding","40px 0 20px 0")
        }
    });
}); 
*/



$(document).ready(function () {
    console.log("ready");
    $(".hiremebtn").click(function () {
        $("#hiremepop").show();

    });
    $(".closebtn").click(function () {
        $("#hiremepop").hide();
    });
});



$(document).ready(function () {
    console.log("ready");
    $(".contactbtn").click(function () {
        $("#contactpop").show();

    });
    $(".closebtn").click(function () {
        $("#contactpop").hide();
    });
});

