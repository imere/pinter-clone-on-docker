FROM node:8.11.1 as builder

WORKDIR /app

ADD . .

ENV PHANTOMJS_CDNURL http://npm.taobao.org/mirrors/phantomjs
ENV CHROMEDRIVER_CDNURL http://npm.taobao.org/mirrors/chromedriver
ENV SELENIUM_CDNURL http://npm.taobao.org/mirrorss/selenium
ENV SASS_BINARY_SITE https://npm.taobao.org/mirrors/node-sass

ENV PATH ./node_modules/.bin:$PATH

RUN npm config set unsafe-perm true

RUN npm install --silent --registry=https://registry.npm.taobao.org

RUN npm run prod


FROM nginx:1.15.0-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx/dev.conf /etc/nginx/conf.d/

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
