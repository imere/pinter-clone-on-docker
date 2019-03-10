FROM redis

WORKDIR /var/lib/redis

COPY redis-sentinel-1.conf /etc/redis/redis.conf

EXPOSE 26380

CMD [ "redis-sentinel", "/etc/redis/redis.conf" ]
