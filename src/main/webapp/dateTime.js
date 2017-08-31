var promise = fetch("DateTime");
promise.then(function (response) {
    return response.json();
}).then(function (date) {
    var today = "Today is" + date.day + "/" + date.month + " - " + date.year + ". Current time is: " + date.hour + ":" + date.minute + "." + date.second;
    document.getElementById("currentDate").innerHTML = today;
});