# 使い方

- `pages` directory 以下にページを配置する
- パッケージマネージャーには[yarn](https://yarnpkg.com/)を使用するので yarn がインストールされてない場合は `npm i yarn -g` を実行しインストールすること
- `yarn dev` を実行すると開発用サーバーが立ち上がる
- 基本的にページの共通レイアウトが `components/layout` にあるのでそれを利用する
- nodejs のバージョンは 16.14.2。18 系だと webpack error が出る可能性があるため
- github に push する前に`yarn format`でコードを整形してくれたら嬉しい
