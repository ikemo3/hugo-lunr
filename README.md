# hugo-lunr

[Hugo][]で、全文検索を実現するためのテーマです。
現在は、全文検索のためのインデックス作成まで対応しています。

## 前提条件

[Theme Components][]および[Hugo Pipes][]を使用するため、
[Hugo][] 0.43以上が必要です。

## ビルド

```bash
npm install
npm run build
```

## テンプレートへの組み込み方法

テンプレートに以下の記述を追加してください。

```
{{- partialCached "hugo-lunr" . }}
```

## ライセンス

MITライセンスです。

[Hugo]: https://gohugo.io/
[Hugo Pipes]: https://gohugo.io/hugo-pipes/
[Theme Components]: https://gohugo.io/themes/theme-components/
