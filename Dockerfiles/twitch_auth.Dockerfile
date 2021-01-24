FROM node:15-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8006

CMD [ "npm", "run", "dev"]