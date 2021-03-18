# Electron Sample - contextIsolation対応
Electron v12から`contextIsolation`のデフォルトが`true`になったため、そのままだとIPC通信が利用できないため、`contextBridge`を使った方法に切り替えます。

## 解説ページ
※Please wait...

## 準備
Gitでリポジトリを取得します。
```shellsession
$ git clone https://github.com/katsube/electron-sample-contextisolation
```

Node.jsがインストールされている環境で以下のコマンドを実行し、必要なライブラリを取得します。
```shellsession
$ cd electron-sample-contextisolation
$ npm install
```

## 実行方法
以下でプレビューを行います。
```shellsession
$ npm start
```

以下のビルド用コマンドを叩くと、各OS用のインストーラーが作成されます。
```shellsession
$ npm run build-win
$ npm run build-mac
```
