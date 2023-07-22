FROM node:18-alpine AS builder

WORKDIR /app/

COPY package*.json ./

RUN npm install --force --production

COPY . .

RUN npm run build

FROM nginx:alpine

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=builder /app/build .

EXPOSE 3000 88

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
