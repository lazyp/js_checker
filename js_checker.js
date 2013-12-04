/**
 *@author hexinglun@gmail.com
 */
(function() {
	/************************************内部变量、对象**************************************/
	var	_emailRegExp     = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
		_urlRegExp       = /^(http|https):\/\/.*$/;
	/*****************************************end*******************************************/
	
	var __checker = {
		/**
		 * 检验是否为数字
		 */
		isValidNumeric : function(num) {
			if (isFinite(num)) {
				return !isNaN(parseInt(num));
			}
			return false;
		} ,
	    /**
             *是否为手机号码
             */
	    isMobile : function(tel){
		if(__checker.isValidNumeric(tel) && tel.length == 11){
		    return true;
		}else{
		    return false;
		}
	    },
		/**
		 * url是否合法性
		 */
		isValidUrl : function(url) {
			return _urlRegExp.test(url);
		} ,
		// 检验IP
		isValidIP : function(ip) {
			try {
				var nums = ip.split(".");
				if (nums.length != 4) {
					return false;
				}
				for ( var index = 0; index < nums.length; index++) {
					var num = nums[index];
					if (this.isValidNumeric(num)) {
						num = parseInt(num);
						if (num > 255 || num < 0) {
							return false;
						}
					} else {
						return false;
					}
				}
			} catch (e) {
				return false;
			}
			return true;
		},
		isValidEmail : function(email){
			return _emailRegExp.test(email);
		}
	};

	// 注册
	window.checker = __checker;
})();
