FROM node:14

WORKDIR /app

COPY ./app/package.json .
RUN npm install
RUN npm i nodemon -g
COPY ./app .

EXPOSE 8080

# CMD npm start
CMD [ "nodemon", "server.js" ]