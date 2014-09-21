function loadkkcontrol(){
	var div = $('<div>');
	var img = $('<img>');
	div.addClass('control-pre');
	img.attr( 'src','imgs/bn-pre.png');
	img.addClass( 'pre');
	div.html(img);
	$(".kkbox").append(div);

	var div = $('<div>');
	var img = $('<img>');
	img.addClass( 'next');
	div.addClass('control-next');
	img.attr( 'src','imgs/bn-next.png');
	div.html(img);
	$(".kkbox").append(div);
}

function loadSlider( w, h, t){
//			var w = $( window).width();
//			var h = $( window).height();
	$(".kkbox").css( "width", w);
	$(".control").css( "width",w);
	loadkkcontrol();
	$(window).load(function(){
		var tmp_h = $(" .control-pre").height();
		var tmp_w = $(" .control-pre").width();
		$(".control-pre").css( "margin-top",  h*( -0.5) - tmp_h*0.5 );
		$(".control-next").css( "margin-top",  h*( -0.5) - tmp_h*0.5 );
		$(".control-next").css( "margin-left",  w - tmp_w);
	})
	$(".slider .page").css("width",w);
	$(".slider .page").css("height",h);
	$(".slider img").css("width",w);
	$(".slider img").css("height",h);

	$(".kkbox .next").click(function(){
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

	$(".kkbox .pre").click(function(){
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
	setInterval( "$('.kkbox .next').click()", t);
}


