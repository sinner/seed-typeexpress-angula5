FROM node:8

# Create app directory
WORKDIR /usr/src/app

ADD . /usr/src/app

# Install app dependencies
# COPY package.json .
# For npm@5 or later, copy package-lock.json as well

RUN apt-get update

RUN apt-get install nano

# Create a nonroot user, and switch to it
RUN /usr/sbin/useradd --create-home --home-dir /usr/src/app --shell /bin/bash nonroot
RUN /usr/sbin/adduser nonroot sudo
RUN usermod -aG root nonroot
RUN chown -R nonroot /usr/src/app

USER nonroot

RUN npm cache verify

RUN npm cache clean --force

RUN npm install

USER root

RUN npm cache verify

RUN npm cache clean --force

# Install runtime dependencies
RUN npm install -g yarn
RUN npm install -g nps
RUN npm install -g typeorm
RUN npm install -g

# Install app dependencies
RUN yarn install

# Build and run the app
CMD npm start serve

EXPOSE 3000
