# ヘルプページ

`OpenAPI-GUI`は、YAML 形式の OpenAPI ドキュメントを GUI で編集することができるアプリです。

## ツールバーのボタン

### <span class="material-icons">save</span> Save as file

現在の内容をファイルに保存します。

### <span class="material-icons">sort</span> Sort properties

プロパティの並び替えを行います。<br>
プロパティの並び順は、デフォルトの JSON Schema で定義されている順番をベースに、作成の好みで調整した順番です。（並び順は今後変更する可能性あり）<br>
下記プロパティは、プロパティの名前(キー)の昇順で並び替えます。

- OpenAPI Object
  - paths

- Response Object
  - content
  - links

- Operation Object
  - responses

- Components Object
  - schemas
  - headers
  - parameters
  - requestBodies
  - responses
  - securitySchemes
  - examples
  - links
  - callbacks

### <span class="material-icons">cleaning_services</span> Clean properties

不要なプロパティを削除します。<br>
例えば、下記のような、キーが空文字であるプロパティを削除します。

```yaml
'': {}
```

### <span class="material-icons">undo</span><span class="material-icons">redo</span> Undo/Redo

変更を元に戻す、または、やり直しをする機能です。

### <span class="material-icons">format_color_fill</span> Select a theme

カラーテーマを切り替えることができます。

## サイドナビゲーションメニュー

### <span class="material-icons">edit</span> Edit YAML

エディターで OpenAPI のドキュメントを編集できます。<br>

### <span class="material-icons">info</span> Info

info を編集できます。

### <span class="material-icons">sell</span> Tags

tags とその内容を編集できます。

#### 機能

- タグの追加
- タグの削除
- タグを手動並び替え
- タグを名前順に並び替え
- タグのプロパティの編集
- タグの名前を変更したとき、Operation にセットされているタグの名前も自動的に変更する。

### <span class="material-icons">folder</span> Paths

paths の PathItem を編集できます。<br>
フォルダメニューでは、右クリックのメニューから、アイテムの追加、コピー、削除が行えます。

### <span class="material-icons">folder</span> Tag Group

Operation をタグごとに表示します。

### Components

配下のフォルダメニューを選択すると、作成済みのアイテムのメニューを展開します。<br>
アイテムのメニューをクリックすると、アイテムの編集画面を表示します。<br>
フォルダメニューでは、右クリックのメニューから、アイテムの追加、コピー、削除が行えます。

## キーボードショートカット

| コマンド     | キーバインド                 |
| :----------- | :--------------------------- |
| Undo         | Ctrl + Z                     |
| Redo         | Ctrl + Y<br>Ctrl + Shift + Z |
| Save as file | Ctrl + S                     |
