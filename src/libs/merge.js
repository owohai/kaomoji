        /*******************\
              
               STOLEN       
                from
https://www.npmjs.com/package/merge-json

        \*******************/

// Why steal?
/*
With the uprising of protestware and other things,
I've decided to import and customise this module
to my needs, while fatisfying the secuirty nerd
in me. Yes -- I know package-lock(s) exist.
*/
// Inspried by other internal 
// libs by the db-d org, on GitHub.

var jsonC = {}.constructor ;

var isJSON = function(json){
	if(json && json.constructor === jsonC){
		return true ;
	}else{
		return false ;
	}
}

exports.isJSON = isJSON ;

var mergeJSON = function(json1, json2){
	var result = null ;
	if(isJSON(json2)){
		result = {} ;
		if(isJSON(json1)){
			for(var key in json1){
				result[key] = json1[key] ;
			}
		}

		for(var key in json2){
			if(typeof result[key] === "object" && typeof json2 === "object"){
				result[key] = mergeJSON(result[key], json2[key]) ;
			}else{
				result[key] = json2[key] ;
			}
		}
	}else if(Array.isArray(json1) && Array.isArray(json2)){
		result = json1 ;

		for(var i = 0; i < json2.length; i++){
			if(result.indexOf(json2[i]) === -1){
				result[result.length] = json2[i] ;
			}
		}
	}else{
		result = json2 ;
	}

	return result ;
}

exports.merge = mergeJSON ;
