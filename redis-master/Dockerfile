FROM redis

WORKDIR /var/lib/redis

COPY redis.conf /etc/redis/redis.conf

EXPOSE 6379

CMD [ "redis-server" , "/etc/redis/redis.conf"]
