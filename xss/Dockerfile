# Dockerfile
FROM node:14

# アプリケーションディレクトリを作成
WORKDIR /usr/src/app

# アプリケーションの依存関係をインストール
COPY package*.json ./
RUN npm install

# アプリケーションのソースをバンドルする
COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
