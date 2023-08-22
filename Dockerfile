FROM node:19.2-alpine3.16 as dev

WORKDIR /app


COPY package.json ./

RUN npm install --prod



FROM node:19.2-alpine3.16 as prod

WORKDIR /app 

COPY package.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

CMD ["npm", "start"]