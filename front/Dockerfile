FROM node:17-alpine3.14 as builder
WORKDIR /front
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm install -g serve
COPY . .
RUN npm run build
CMD ["serve", "-s", "build"]


#
#FROM nginx:1.21.0-alpine as production
#COPY --from=builder /front/build /usr/share/nginx/html
#EXPOSE 80serve -s build