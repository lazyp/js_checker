(function() {
	var __checker = {
		/**
		 * 检验是否为数字
		 */
		isNumeric : function(num) {
			if (isFinite(num)) {
				return !isNaN(parseInt(num));
			}
			return false;
		} ,
		/**
		 * 检查url的合法性
		 */
		checkUrl : function(str) {
			var urlReg = /^(http|https):\/\/.*$/;
			return urlReg.test(str);
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
					if (this.isNumeric(num)) {
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
		}
	};

	// 注册
	window.checker = __checker;
})();