FROM node:10.15.1

RUN npm install -g nodemon

COPY . /

EXPOSE 3000

CMD ["npm", "start"]