FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN yarn install

COPY . .

ENTRYPOINT [ "yarn", "start" ]