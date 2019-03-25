var redis = require('redis');
var client = redis.createClient();
client.on('error', function(err){
    console.log('Something went wrong ', err)
});
client.set('my test key', 'my test value', redis.print);
client.get('my test key', function(error, result) {
    if (error) throw error;
    console.log('GET result ->', result)
});