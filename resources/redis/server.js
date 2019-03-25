const RedisServer = require('redis-server');

// Simply pass the port that you want a Redis server to listen on.
const server = new RedisServer({
    conf: 'D:/redis/64bit/redis.conf'
});


server.open((err) => {
    if (err === null) {
    // You may now connect a client to the Redis
    // server bound to port 6379.
}
});
