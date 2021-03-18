# Electron Sample - contextIsolation対応
Electron v12からIPC通信の利用方法に一工夫必要になったため、ここでは`contextBridge`を使った方法を試します。

## 解説ページ
* [[Electron] contextBridge経由でIPC通信を行う](https://blog.katsubemakito.net/nodejs/electron/ipc-for-contextbridge)

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
