var BannerCanAutoPlay = function(bannerBoxObj){
	this.bannerBoxObj = bannerBoxObj;
	this.ulObj = this.bannerBoxObj.find("ul");
	this.liObj = this.ulObj.find("li");
	this.liObj_width = this.liObj.width();
	this.liObj_length = this.liObj.length;
	this.leftBoj = this.bannerBoxObj.find(".left");
	this.rightBoj = this.bannerBoxObj.find(".right");
	this.ulObj.width(this.liObj_width * this.liObj_length);
	this.isPlay = false;
	this.timeObj = null;
	this.bind();
}
BannerCanAutoPlay.prototype = {
	bind: function(){
		var _this = this;
		this.autoPlay();
		this.leftBoj.on('click',function(){
			_this.switchFun(this,1);
		});
		this.rightBoj.on('click',function(){
			_this.switchFun(this);
		});
		this.bannerBoxObj.on('mouseover',function(){
			clearInterval(_this.timeObj);
		});
		this.bannerBoxObj.on('mouseleave',function(){
			_this.autoPlay();
		});
	}
}
BannerCanAutoPlay.prototype.autoPlay = function(){
	var _this = this;
	this.timeObj = setInterval(function(){
		_this.switchFun(this);
	},3000)
}
BannerCanAutoPlay.prototype.switchFun = function(obj,dir){
	var _this = this;
	if (!this.isPlay) {
		this.isPlay = true;
		var $ulObj = this.ulObj;
		if (dir == undefined) {
			$ulObj.animate({"marginLeft":-this.liObj_width},1000,function(){
				$ulObj.css({"marginLeft":0});
				$ulObj.append($ulObj.children().first());
				_this.isPlay = false;
			});
		}else{
			$ulObj.prepend($ulObj.children().last());
			$ulObj.css({"marginLeft":-this.liObj_width});
			$ulObj.animate({"marginLeft":0},1000,function(){
				_this.isPlay = false;
			});
		}
	}
}
