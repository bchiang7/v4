FROM node:12 as build

WORKDIR /app
COPY . /app

RUN npm install -g gatsby-cli
RUN yarn --frozen-lockfile --non-interactive
RUN npm run build


#2nd stage
FROM nginx:alpine

COPY --from=build /app/docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=build --chown=nginx:nginx /app/public /usr/share/nginx/html
RUN touch /var/run/nginx.pid && chown nginx:nginx /var/run/nginx.pid

EXPOSE 80
HEALTHCHECK CMD [ "wget", "-q", "localhost:80" ]