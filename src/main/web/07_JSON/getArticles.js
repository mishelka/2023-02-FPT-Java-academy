var articleCount = 5;
var server = "wt.kpi.fei.tuke.sk";

writeArticles2Html(0, articleCount, server);

function navHtml(startIndex, articlesCount, articlesTotalCount) {
    var htmlKod = "";
    if (articlesCount > 0) {
        htmlKod += "Printing articles" +
            " from " + (startIndex + 1) +
            " to " + (startIndex + articlesCount) +
            " of " + articlesTotalCount;
    }
    htmlKod += " <button onclick=\"writeArticles2Html("
        + startIndex +
        ", articleCount, server)\">" +
        "Load again</button>";
    return htmlKod;
}

function articlesHtml(data) {
    var count;
    var htmlKod = "";
    if (count = data.articles.length) { //ak su nejake clanky
        for (var i = 0; i < count; i++)
            htmlKod += "<p>" +
                data.articles[i].author + ": "
                + data.articles[i].title + " </p>";
    }
    return htmlKod;
}

function JSON2Html(data, startIndex, max) {
    var articlesElm = document.getElementById("articles");
    var navElm = document.getElementById("navigation");
    if (articlesElm && navElm) {
        articlesElm.innerHTML = articlesHtml(data);
        navElm.innerHTML = navHtml(startIndex, data.articles.length, data.meta.totalCount);
    }
}

function comm2HTML(comments, startIndex, max) {
    console.log(comments);
    var comm = document.getElementById("comments");
    comm.innerHTML = "";
    if(comm) {
        for(var c in comments.comments) {
            var li = document.createElement("li");
            li.innerHTML = comments.comments[c].text
            comm.appendChild(li);
        }
    }
}

function errorDialog(status) {
    window.alert("Chyba pri načítaní údajov zo servera.\nStatus= " + status);
}

function getJSONAllBr(url, successHandler, errorHandler) {
    var request = typeof XMLHttpRequest != 'undefined'
        ? new XMLHttpRequest()
        : new ActiveXObject('Microsoft.XMLHTTP');
    request.open('GET', url, true);
    request.onreadystatechange = function () { //alternativne mozem pouzit xhr.addEventListener("readystatechange",funkcia, false),
        // ale tu je pouzita anonymna funkcia a bolo by to iba neprehladnejsie
        var status;
        var data;
        if (request.readyState === 4) { // DONE, alternativne sa da pouzit XMLHttpRequest.DONE
            status = request.status;
            if (status === 200) { //uspesne vybavena poziadavka
                data = JSON.parse(request.responseText);
                //console.log(data);
                if(typeof successHandler === 'function') {
                    successHandler(data);
                }
            } else {
                errorHandler && errorHandler(status);
            }
        }
    };
    request.send();
};

function writeArticles2Html(startIndex, max, server) {
    var restURL = "http://" + server +
        "/api/article/?max=" + max +
        "&offset=" + startIndex;
    var commUrl = "http://" + server + "/api/article/33/comment";

    //console.log(restURL);
    getJSONAllBr(restURL,
        function (JSONObj) {
            JSON2Html(JSONObj, startIndex, max)
        },
        function (status) {
            errorDialog(status)
        });

    getJSONAllBr(commUrl,
        function (JSONObj) {
            comm2HTML(JSONObj, startIndex, max)
        },
        function (status) {
            errorDialog(status)
        });
}
