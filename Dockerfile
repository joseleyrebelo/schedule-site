FROM node:16.5.0-alpine

WORKDIR /app

COPY ./package.json /app

ENV PATH ./node_modules/.bin/:$PATH

RUN yarn install

COPY . /app