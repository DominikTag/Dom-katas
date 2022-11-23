FROM node
ENV NODE_ENV=production
WORKDIR /dom-weather-app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
CMD ["node", "server.js"]