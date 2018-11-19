FROM node:8
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
EXPOSE 3000
RUN echo 'Docker initalization in progress'
RUN npm install
CMD ["npm", "start"]
