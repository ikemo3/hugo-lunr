function decodeEntity(str) {
    return str.replace(/&quot;/g, '"')
        .replace(/&gt;/g, '>')
        .replace(/&lt;/g, '<')
        .replace(/&amp;/g, '&');
}

function search(event) {
    const searchText = document.getElementById('searchText').value;
    if (searchText === "") {
        clearResults();
        return;
    }

    const url = "/.netlify/functions/search?q=" + encodeURIComponent(searchText);
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (pages) {
        const count = pages.length;
        const pages100 = pages.slice(0, 100);
        writeResults(searchText, pages100, count);
    });
}

function clearResults() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
}

function highlight(searchText, str) {
    let fromIndex = 0;
    const span = document.createElement("span");
    while (true) {
        const index = str.indexOf(searchText, fromIndex);
        if (index === -1) {
            break;
        }

        // マッチしない文字列が長すぎる場合は切り捨てる
        let before = str.substring(fromIndex, index);
        if (before.length >= 100) {
            before = "..." + before.substring(before.length - 100);
        }

        span.appendChild(document.createTextNode(decodeEntity(before)));

        const searchTextSpan = document.createElement("span");
        searchTextSpan.textContent = decodeEntity(searchText);
        searchTextSpan.style.backgroundColor = "#FFD700";
        searchTextSpan.style.fontWeight = "bold";
        span.appendChild(searchTextSpan);

        fromIndex = index + searchText.length;
    }

    // 残り文字列も長すぎる場合は切り捨てる
    let last = str.substring(fromIndex);
    if (last.length >= 100) {
        last = last.substring(0, 100) + "...";
    }

    span.appendChild(document.createTextNode(decodeEntity(last)));
    return span;
}

function writeResults(searchText, pages, count) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    const countDiv = document.createElement("div");
    countDiv.textContent = count + "件ヒットしました。";
    resultDiv.appendChild(countDiv);
    resultDiv.appendChild(document.createElement("br"));

    pages.forEach(function (page) {
        const div = document.createElement("div");
        const a = document.createElement("a");
        a.href = page.url;
        a.textContent = page.title;

        div.appendChild(a);
        div.appendChild(document.createElement("br"));
        div.appendChild(highlight(searchText, page.content));
        div.appendChild(document.createElement("br"));
        div.appendChild(document.createElement("br"));

        resultDiv.appendChild(div);
    });
}

document.getElementById('searchButton').addEventListener('click', search);
