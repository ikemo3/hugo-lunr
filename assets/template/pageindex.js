var HugoIndexes = [{{ range $i, $e := .Site.Pages }}{{ if $i }}, {{ end }}
  {
    "title": {{ .Title | jsonify }},
    "url": "{{ .Permalink }}",
    {{- with .Params.tags }}
    "tags": {{ . | jsonify }},
    {{- end }}
    "content": {{ .Plain | jsonify }}
  }{{ end }}
]
