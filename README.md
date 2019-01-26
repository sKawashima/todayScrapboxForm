# 今日の日付のScrapboxに追記するフォーム
公開： https://skawashima.github.io/todayScrapboxForm/

普段使っていたブックマークレットをフォームに書き起こしただけです

## ソース
```
index.pug    : メタHTML
style.sass   : メタCSS
app.js       : スクリプト
  + openUrl(): Scrapboxの仕様に基づいて追記するURLを生成
dist/        : 公開フォルダ
```

## 使用技術
Parcel: モジュールバンドラ
