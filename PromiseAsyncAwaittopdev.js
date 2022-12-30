

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
	.then(result2 => {console.log(result2)})
	.catch(error => {console.error(error)});

const p = Promise.resolve(12)
	.then(result1 => {console.log(result1)})
	.then(result2 => Promise.reject(new Error('dung lai nhanh')))
	.then(() => '')
	.catch(err => console.error(err));


async function(){
	try{
		const user = await api.getUSer('pikalong');
		const post = await api.getPostofUser(user);
		const comments = await api.getCommentsOfPosts(post)
	} catch(err) {
		console.error(err);
	}
}

Promise.resolve(1)
	.then(2)
	.then(console.log);
console.log('This prints 1');

Promise.resolve(1)
	.then(Promise.resolve(2))
	.then(console.log);
console.log('This also prints 1');

Promise.resolve(1)
	.then(() => 2)
	.then(console.log);
Promise.resoolve(1)
	.then(() => Promise.resolve(2))
	.then(console.log);
console.log('This prints 2')

