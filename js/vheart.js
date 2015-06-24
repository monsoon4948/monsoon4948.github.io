$(function() {
	//mycard 我的名片
	(function() {
		var att = null;
		$("#myCard li a").hover(function() {
			att = $(this).attr("alt");
			$(this).append("<p><i class='icon-caret-up icon-2x'></i>" + att + "</p>");
			$(this).children("p").css({
				"opacity": 0
			}).stop().animate({
				"opacity": 1,
				"bottom": -40
			});

		}, function() {
			$(this).children("p").stop().animate({
				"opacity": 0,
				"bottom": -60
			}).remove();
		});
	})();

	//banner 打字效果
	(function() {
		var textLength = $("#iTyped").text().length;
		var text = $("#iTyped").text();
		var arr = [];

		$("#iTyped").text("");
		
		for(var i=0; i < textLength; i++) {
			arr[i] = text.substr(i, 1);
		}
		
		var t = 0; 

		function words() {
			if(t < textLength) {
				$("#iTyped").show().append(arr[t]);
				t++;
			}
		}

		var init = setInterval(words, 140);
	})();

	//sidebar选项卡
	(function() {
		var $nav = $("#recommend .recommend-nav");
		var $cont = $("#recommend .recommend-cont li");
		var $element = $("#recommend .recommend-nav li a");
		var index = 0;

		var $lineWidth = $element.width();
		var $linePadding = $element.css('padding-left');
		
		$nav.append("<div class='active'><i class='icon-caret-up icon-1x'></i></div>");
		$line = $nav.find(".active");

		$line.css({
			"width": $lineWidth,
			"left": $linePadding
		});

		$cont.eq(0).css("display", "block");

		$element.mouseenter(function() {
			index = $(this).parent().index();
			$line.stop().animate({
				"left": $element.outerWidth()*index + parseInt($linePadding)
			});
			$cont.eq(index).fadeIn().siblings().fadeOut();

		});
	})();

	//tech-silder 
	(function() {
		var target = $("#subNav li a");
		var wrap = $("#articleWrap .article-list");
		var index = 0;

		wrap.eq(0).css("display", "block");

		target.click(function() {
			index = $(this).parent().index();
			$(this).parent().addClass("active").siblings().removeClass("active");
			wrap.eq(index).show().siblings().hide();
		});
	})();

	//article
	(function() {
		var img = $(".article img");
		var width = img.width();
		var height = img.height();

		img.hover(function() {
			$(this).stop().animate({
				"width": width-20,
				"height" :height-20,
				"padding": 10
			}, function() {
				$(this).addClass("img-style");
			});
		}, function() {
			$(this).stop().animate({
				"width": width,
				"height": height,
				"padding": 0
			}, function() {
				$(this).removeClass("img-style");
			});
		});
	})();

	//文本渐变颜色
	(function() {
		var title = $(".article h2 a");
		title.hover(function() {
			$(this).stop().animate({
				"color": "#06A7E1"
			})
		}, function() {
			$(this).stop().animate({
				"color": "#555555"
			})
		});		
	})();



});