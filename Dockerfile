FROM node

ENV MONGO_DB_USERNAME=${MONGO_DB_USERNAME} \
    MONGO_DB_PWD=${MONGO_DB_PWD}

WORKDIR /DockerWithDev/Nodeapp

COPY package*.json ./

COPY . .

EXPOSE 3000

RUN npm install

CMD ["node","app.js"]