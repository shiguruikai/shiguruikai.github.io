# ヘルプページ

`OpenAPI-GUI`は、YAML形式のOpenAPIドキュメントをGUIで編集できるアプリです。

## ツールバー

### <span class="material-icons">save</span> Save as file
現在の内容をファイルに保存します。

### <span class="material-icons">sort</span> Sort properties
プロパティの並び替えを行います。<br>
並び順は作者の好み。（並び順は今後変更する可能性あり）

特に、下記のプロパティは、プロパティの名前(key)の昇順で並び替えられます。

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
  - responses
  - requestBodies
  - securitySchemes
  - links
  - examples


### <span class="material-icons">cleaning_services</span> Clean properties
不要なプロパティを削除します。<br>
例えば、下記のような、空文字がキーとなるプロパティを全て削除します。
```yaml
'': {}
```

### <span class="material-icons">undo</span><span class="material-icons">redo</span> Undo/Redo
変更を元に戻す、または、やり直しをする機能です。

## サイドナビゲーションメニュー

### <span class="material-icons">edit</span> Edit YAML
エディターを使用してOpenAPIのドキュメントを編集できます。<br>
このエディターに記述した内容は、OpenAPIの形式として読み込まれ、各画面のGUIで編集できます。

### <span class="material-icons">info</span> Info
infoを編集できます。

### <span class="material-icons">sell</span> Tags
tagsとその内容を編集できます。

#### 機能
- タグの追加
- タグの削除
- タグの名前順に並び替え
- タグの手動並び替え
- タグのプロパティの編集(name, description)

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
