FROM redis

WORKDIR /var/lib/redis

COPY redis-sentinel-0.conf /etc/redis/redis.conf

EXPOSE 26379

CMD [ "redis-sentinel", "/etc/redis/redis.conf" ]
