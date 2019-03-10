FROM node:8.11.1

WORKDIR /app

ADD . .

ENV PATH ./node_modules/.bin:$PATH

RUN npm config set unsafe-perm true

RUN npm install --silent

CMD [ "npm", "start" ]
