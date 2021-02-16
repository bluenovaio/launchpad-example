FROM node:14

WORKDIR /usr/src/app
COPY . ./
RUN yarn
RUN yarn build

EXPOSE 8080
CMD [ "node", "dist/bin/www.js" ]
