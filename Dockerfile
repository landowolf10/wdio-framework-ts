# =============================
#  WebdriverIO + Appium + TS
# =============================
FROM node:20-slim

RUN apt-get update && apt-get install -y \
    git \
    curl \
    unzip \
    zip \
    openjdk-17-jre-headless \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package*.json tsconfig.json ./

RUN npm install

COPY . .

RUN npx playwright install-deps
RUN npx playwright install chrome firefox

ENTRYPOINT ["npx", "wdio"]