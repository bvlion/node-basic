# node-basic

特に動的な動きをしないhtmlに、basic認証をかけて表示したいときに使えます。  
デプロイ先はHerokuを想定していますが、少し改変すればfirebaseでも可能です。

## 初期設定

* nodeとnpmを使えるようにする
* expressとbasic-auth-connectをインストール

```
npm install express basic-auth-connect --save
```

## ローカル動作

```
node index.js
```

## html作成場所

* htmlフォルダ以下

imgやjsのフォルダもhtml以下とする。

## Heroku設定

### 値設定
basic認証の値を以下のように設定する。

```
heroku config:set BASIC_AUTH_USERNAME="hoge_taro"
heroku config:set BASIC_AUTH_PASSWORD="your_password"
```

### Herokuへのデプロイ
masterにプッシュする

```
git push heroku master
```

※ 下記が実行できれば、CI系で同時デプロイも可能。（CiecleCI、Pipelines等）

```
git push https://heroku:$HEROKU_API_KEY@git.heroku.com/$HEROKU_APP_NAME.git
```

### 値取得方法
* HEROKU_APP_NAME [heroku apps]
* HEROKU_API_KEY [heroku auth:token]
