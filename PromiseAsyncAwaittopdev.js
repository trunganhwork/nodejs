

api.getUser('pikalong', function(err, user){
	if (err) throw err;
	api.getPostOfUser(function(err, posts){
		if (err) throw err;
		api.getCommentsOfPost(posts, function(err, comments){

		});
	});
});

api.getUser('pikalong')
	.then(user => api.getPostOfUser(user))
	.then(post => getCommentsOfPost(post))
	.catch(error => console.log(error));

const p = new Promise(function(resolve,reject){

})

api.getUser = function(user){
	return new Promise((resolve,reject) => {
		http.get(`users/${user}`),(error,result) => {
			if (error) return reject(error);
			resolve(result);
		}
	})
}

function onSuccess(user){console.log(user)}
function onError(error){console.error(error)}

api.getUser('pikalong').then(onSuccess,onError);

promise()
	.then(() => {return 'foo'})
	.then(result1 => {
		console.log(result1);
		return anotherPromise()
	})