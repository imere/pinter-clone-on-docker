FROM node:8.11.1 as builder

WORKDIR /app

ADD . .

ENV PATH ./node_modules/.bin:$PATH

RUN npm rebuild

RUN npm install --silent

RUN npm config set unsafe-perm true

RUN npm run prod


FROM nginx:1.15.0-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY --from=builder /app/dist /var/www/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
