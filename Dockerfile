FROM node:latest
EXPOSE 3000
WORKDIR /app
ADD . /app
CMD npm install && npm start
