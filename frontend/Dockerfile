FROM node:14 as build-stage

WORKDIR /frontend
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]