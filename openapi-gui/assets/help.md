# <span class="material-icons inline">help</span> ヘルプページ

TODO: もう少し書く

## ツールバーのボタン

### <span class="material-icons">sort</span> ソートボタン
プロパティのソートを行います。<br>
プロパティのソート順は作者の好み。順番は今後変更する可能性あり。

### <span class="material-icons">cleaning_services</span> クリーンボタン
不要なプロパティを削除します。<br>
例えば、下記のような、空文字がキーとなるプロパティを一括削除します。
```yaml
'': {}
```

### <span class="material-icons">undo</span><span class="material-icons">redo</span> Undo/Redoボタン
変更を`元に戻す/やり直し`する機能です。

## サイドナビゲーションメニュー

### <span class="material-icons">edit</span> Edit YAML
ブラウザ上で動作するエディターを使用してyamlを編集できます。<br>
このエディターに記述した内容は、OpenAPIの形式として読み込まれ、後述の各画面のGUIで編集できます。GUIで編集した内容は、コードの変換され、このエディターに反映されます。

### <span class="material-icons">info</span> Info
infoを編集できます。

#### 機能
- infoの編集(title, description, version)

### <span class="material-icons">sell</span> Tags
tagsとその内容を編集できます。

#### 機能
- タグの追加
- タグの削除
- タグの名前順に並び替え
- タグの手動並び替え
- タグのプロパティの編集(name, description)

### Components
フォルダメニューを選択すると、作成済みのアイテムのメニューを表示します。<br>
アイテムのメニューをクリックすると、編集画面を表示します。

下記のメニューでは、右クリックのメニューから、各アイテムの追加、コピー、削除が行えます。

- Paths
- Schemas
- Parameters
- Responses

## キーボードショートカット

| コマンド     | キーバインド                 |
| :----------- | :--------------------------- |
| Undo         | Ctrl + Z                     |
| Redo         | Ctrl + Y<br>Ctrl + Shift + Z |
| Save as file | Ctrl + S                     |
