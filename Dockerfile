FROM node:current-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json yarn.lock ./

RUN yarn install

COPY . ./

CMD ["npm", "start"]
