var library = (function(){
	return {
		// Utility --- Complete Functions Below
		identity : function(val) {},

		// Collections --- Complete Functions Below
		each : function(list, iterator) {},

		filter : function(list, test) {},

		reject : function(list, test) {},

		map : function(list, iterator) {},

		pluck : function(list, key) {
			return this.map(list, function(item){
				return item[key];
			});
		},
		reduce : function(list, iterator, accumulator) {},

		every : function(list, iterator) {},

		some : function(list, iterator) {},

		contains : function(list, target) {},

		// Advanced Collections --- Complete Functions Below
		shuffle : function(array) {},

		invoke : function(list, methodName, args) {},

		sortBy : function(list, iterator) {},

		// Objects --- Complete Functions Below
		extend : function(obj) {},

		defaults : function(obj) {},

		// Arrays --- Complete Functions Below
		first : function(array, n) {
			return n === undefined ? array[0] : array.slice(0, n);
		},

		last : function(array, n) {
			var last = array[array.length - 1];
			return last;
		},

		indexOf : function(array, target){
			//find the number index 
			//of the target value of the array
			var resultIndex = -1;

			for(var i = 0; i < array.length; i++){
				if(array[i] === target && resultIndex === -1){
					resultIndex = i;
				}
			}
				return resultIndex;
		},
			
		uniq : function(array) {},

		// Advanced Arrays --- Complete Functions Below
		zip : function() {},

		flatten : function(nestedArray, result) {
			var firstIten = nestedArray[0];
			var retultArray = result === undefined ? [] : result
			if (firstItem != undefined) {
				if (Array.isArray(firstItem)){
					this.flatten(firstItem, resultArray);
			} else {
				resultArray.push(firstItem);
				nestedArray.shift();
				this.flatten(nestedArray, resultArray);
			}

			}
			return resultArray;
		},

		intersection : function() {},

		difference : function(array) {},

		// Functions --- Complete Functions Below
		once : function(func) {},

		memoize : function(func) {},

		delay : function(func, wait) {}
		
	}
})();




