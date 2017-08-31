document.getElementById("jokeBtn").onclick = function () {
    var promise = fetch('https://jokes-plaul.rhcloud.com/api/joke');
    promise.then(function (response) {
        return response.json();
    }).then(function (quote) {
        document.getElementById("joke").innerHTML = quote.joke;
        document.getElementById("id").innerHTML = quote.id;
        document.getElementById("ref").innerHTML = quote.reference;
    });
};


