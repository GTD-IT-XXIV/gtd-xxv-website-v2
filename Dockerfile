FROM node:18-alpine AS builder

WORKDIR /app/

COPY package*.json ./

RUN npm install --force --production

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=builder /app/build .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
