FROM node:14

WORKDIR /backend
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "run", "start"]
