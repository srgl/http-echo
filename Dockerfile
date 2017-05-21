FROM node:7-alpine

RUN mkdir -p /app
WORKDIR /app

EXPOSE 80

COPY . /app
CMD node app.js
