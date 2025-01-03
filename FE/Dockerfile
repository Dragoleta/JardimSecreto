FROM node:22-slim


ENV HOME=/home/app

COPY package.json package-lock.json

WORKDIR $HOME/node_docker

RUN yarn && yarn cache clean

COPY . $HOME/node_docker
EXPOSE 4200


FROM node:22-slim
COPY --from=0 /home/app /home/app
WORKDIR /home/app/node_docker
CMD ["yarn", "start"]
