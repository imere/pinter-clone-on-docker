FROM node:8.11.1

WORKDIR /app

ADD . .

ENV PATH ./node_modules/.bin:$PATH

RUN npm install --silent

RUN npm config set unsafe-perm true

CMD [ "npm", "start" ]
