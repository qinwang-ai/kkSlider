function loadSlider( w, h){
//			var w = $( window).width();
//			var h = $( window).height();
	$(".kkbox").css( "width", w);
	$(".control").css( "width",w);

	$(window).load(function(){
		var tmp_h = $(" .control").height();
		$(".control").css( "margin-top",  h*( -0.5) - tmp_h*0.5 );
	})
	$(".slider .page").css("width",w);
	$(".slider .page").css("height",h);
	$(".slider img").css("width",w);
	$(".slider img").css("height",h);
	
	$(".next").click(function(){
	//		var w = $(window).width();
			var num = $(".slider").children().length - 1;
			var curr_len = $(".slider").css("margin-left").length;
			var curr = $(".slider").css("margin-left").substr(0,curr_len - 2);
			var move = curr - w;
			if(move < -(num-1)*w){
				move = 0;
			}
			var obj = {};
			obj.marginLeft = move+"px";
			$(".slider").animate( obj);
	})

	$(".pre").click(function(){
//			var w = $(window).width();
			var num = $(".slider").children().length - 1;
			var curr_len = $(".slider").css("margin-left").length;
			var curr = $(".slider").css("margin-left").substr(0,curr_len - 2);
			var move = parseInt( curr) + parseInt( w);
			if(move>0){
				move = -(num-1)*w;
			}
			var obj = {};
			obj.marginLeft = move+"px";
			$(".slider").animate( obj);
	})
}
