FROM node:9.6.1-onbuild
RUN npm install -g nodemon
EXPOSE 3000
CMD ["npm", "start"]