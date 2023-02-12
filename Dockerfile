FROM --platform=linux/amd64 node:14-alpine AS build

WORKDIR /app
COPY . .

RUN apk update -qq && apk add -qq libtool automake autoconf nasm vips fftw binutils build-base
RUN yarn
RUN yarn gatsby telemetry --disable
RUN yarn build

EXPOSE 8000

FROM --platform=linux/amd64 nginx:1.14-alpine AS deploy

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/public .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
