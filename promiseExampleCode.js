if (window.Promise){
	console.log('Promise found');

	var promise = new Promise(function (resolve,reject) {
		var request = new XMLHttpRequest();

		request.open('GET','http://api.icndb.com/jokes/random');
		request.onload = function(){
			if (request.status == 200){
				resolve(request.response);
			}
			else {
				reject(Error(request.statusText));
			}
		}
	request.onError = function(){
		reject(Error('Error fetching data'));
	}
	request.send();
	});

	console.log('Asynchronous request made.');

	promise.then(function(data){
		console.log('Data was recieved');
		document.getElementsByTagName('body').textContent = JSON.parse(data).value.joke;

	}, function(error){
		console.log('Promise rejected');
		console.log(Error(error));
	}	
} else {
	console.log('Promise was not supported');
}

