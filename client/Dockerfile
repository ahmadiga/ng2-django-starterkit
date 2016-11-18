FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install typings --global
RUN npm install webpack-dev-server rimraf webpack -g
RUN npm install
COPY . /usr/src/app
CMD npm start
