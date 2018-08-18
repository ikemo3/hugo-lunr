var HugoIndexes = [{{ range $i, $e := .Site.Pages }}{{ if $i }}, {{ end }}
  {
    "title": {{ .Title | jsonify }},
    "url": "{{ .Permalink }}",
    "content": {{ .Plain | jsonify }}
  }{{ end }}
]
