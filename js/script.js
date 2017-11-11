
/*彈跳視窗*/
$(function(){
	$(".login").click(function(){ 
		$(".blackBg").fadeIn()
		$("body").css({"overflow":"hidden"})
		return false;
		})	
	$(".close,.btn_back").click(function(){
		$(".blackBg").fadeOut()
		$("body").css({"overflow":"auto"})
		return false;
		})
		
})



/*內頁跳轉*/
$(function () {
    $("a[href*=#]:not([href=#])").click(function() {
         var target = $(this.hash);
         $("html,body").animate({
             scrollTop: target.offset().top
         },600);
         return false;
         });
});

/*gotop*/
$(function () {
    $(".gotop").click(function goTop() {
        $("html,body").animate({scrollTop: 0}, 300);
    });
	});
	
/*漢堡選單*/
$(function () {
        $(".icon_hamber").toggle(
            function () {
            $(".nav_btn_m").fadeIn(), $(".nav_btn_m").animate({top: 0})
            },
            function () {
            $(".nav_btn_m").fadeOut(), $(".nav_btn_m")
            }
        )
});
/*選擇語言與漢堡衝突*/
$(function () {
        $(".icon_hamber").click(
            function () {
            $(".sub_lang").fadeOut(), $(".sub_lang")
            }
        )
});

$(function () {
        $(".choise_lang,.sub_lang").click(
            function () {
            $(".nav_btn_m").fadeOut(), $(".nav_btn_m")
            }
        )
});
$(function () {
        $(".top_bar_m .nav_btn_m a").click(
            function () {
            $(".nav_btn_m").fadeOut(), $(".nav_btn_m")
            }
        )
});

/*選擇語言*/
$(function () {
        $(".choise_lang").toggle(
            function () {
            $(".sub_lang").fadeIn(), $(".sub_lang").animate({top:60})
            },
            function () {
            $(".sub_lang").fadeOut(), $(".sub_lang")
            }
        )
});