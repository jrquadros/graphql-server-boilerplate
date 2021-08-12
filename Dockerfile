FROM node:16

WORKDIR /app

COPY package.json /app

RUN yarn 

COPY . /app

RUN yarn build

EXPOSE 8080

CMD [ "node", "./dist/server_bundle.js"]

