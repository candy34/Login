FROM node: 6.10.3-alpine



RUN mkdir -p /usr/src/app/ex-sesh
WORKDIR /usr/src/app/ex-sesh

COPY ./package.json /usr/src/app/ex-sesh
RUN npm install

COPY . /ust/src/app/ex-sesh

EXPOSE 3000
CMD [ "npm", "start"]
