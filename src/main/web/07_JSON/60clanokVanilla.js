/**
 * Created by stefan.kr
 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Kód, ktorý sa vykoná pri načítaní skriptu

writeArticle2Html("article");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//funkcie



/**
 * otvori dialogove okno s chybovym hlasenim
 * @param status -  hodnota XMLHttpRequest.status
 */
function errorDialog(status){
    window.alert("Chyba pri načítaní údajov zo servera.\nStatus= "+status);
}


function writeArticle2Html(articleElmId){
    var artId = queryString2obj().id;

    if (isFinite(artId)){
        var restURL ="http://"+server+"/api/article/"+artId;
        console.log(restURL);
        getJSONAllBr(restURL,
            function(article){ mrenderObjectWithTemplateFromFile(article, "templates/article.mst", articleElmId);},
            function(status){errorDialog(status)});
    }

}
