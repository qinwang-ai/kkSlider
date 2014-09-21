function loadkkcontrol(){
	var div = $('<div>');
	var img = $('<img>');
	var div_clr = $('<div>');
    div_clr.addClass('clear');
	$(".kkbox .slider").append(div_clr); //clear upper sliders float

	div.addClass('control-pre');
	img.attr( 'src','imgs/bn-pre.png');
	img.addClass( 'pre');
	div.html(img);
	$(".kkbox").append(div);

	var div = $('<div>');  //control div
	var img = $('<img>');
	img.addClass( 'next');
	div.addClass('control-next');
	img.attr( 'src','imgs/bn-next.png');
	div.html(img);
	$(".kkbox").append(div);
	//clear both
	var div_clr = $('<div>');
	div_clr.addClass('clear');
	$(".kkbox").append(div_clr);
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
		$(".control-pre").css( "top",  h*( -0.5) - tmp_h*0.5 );
		$(".control-next").css( "top",  h*( -0.5) - tmp_h*0.5 );
		$(".control-next").css( "left",  w - tmp_w*2);
	})
	$(".slider .page").css("width",w);
	$(".slider .page").css("height",h);
	$(".slider img").css("width",w);
	$(".slider img").css("height",h);

	$(".kkbox .next").click(function(){
	//		var w = $(window).width();
			var num = $(".slider").children().length - 1; //sliders's sum
			var curr_len = $(".slider").css("margin-left").length; //now margin-left's length
			var curr = $(".slider").css("margin-left").substr(0,curr_len - 2); //cut out "px"
			var move = curr - w;	//now - slider's width
			if(move < -(num-1)*w){	//back
				move = 0;
			}
			var obj = {};
			obj.marginLeft = move+"px";
			$(".slider").animate( obj);	//animate effect
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
	var mark_ii = setInterval( "$('.kkbox .next').click()", t);
	$(".kkbox").mouseover(function(){
		clearInterval(mark_ii);
	})
	$(".kkbox").mouseleave(function(){
		mark_ii = setInterval( "$('.kkbox .next').click()", t);
	})
}
