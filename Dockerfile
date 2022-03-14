FROM node:17-alpine3.14
WORKDIR /app
COPY package.json /app
RUN npm install -g gatsby-cli
RUN npm install && npm cache clean --force
COPY . /app
RUN npm run build
EXPOSE 9000
CMD npm run serve