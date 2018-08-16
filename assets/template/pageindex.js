var sitePageList = [{{ range $i, $e := .Site.Pages }}{{ if $i }}, {{ end }}
  {
    "title": {{ .Title | jsonify }},
    "url": "{{ .Permalink }}",
    "content": {{ .Plain | jsonify }}
  }{{ end }}
]

const HugoIndex = Lunr(function () {
    this.use(Lunr.jp);
    this.ref('url');
    this.field('title');
    this.field('content');

    sitePageList.forEach(function(page) {
        this.add(page);
    }, this);
});
