FROM node:18-alpine
WORKDIR /metric_ui
COPY public/ public
COPY src/ src
COPY package.json package.json
COPY tsconfig.json tsconfig.json

RUN npm install --loglevel info

CMD ["npm", "start"]

