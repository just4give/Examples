var maxtime=1000;

var logger = function(err, val, waittime){
	if(err){
		console.log(err.message);
	}else{
		console.log("Result is ="+val+ " ("+waittime+ "ms)");
	}
}


function evenDoubler(val , callback){
	var waittime = Math.floor(Math.random()*(maxtime+1));
	if(val%2){
		setTimeout(function(){
		callback(new Error("Odd input of "+val));	
	},waittime);
		
	}else{
		setTimeout(function(){
			callback(null, val*2, waittime);
		},waittime);
		
	}
}



for(var i=0; i<10;i++){
	evenDoubler(i, logger);
}