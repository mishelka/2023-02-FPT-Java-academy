/**
 * Created by stefan.kr
 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Kód, ktorý sa vykoná pri načítaní skriptu

//Počet naraz zobrazených článkov
var pocetClankovNaStranu=100;

//Doménové meno servera s databázou článkov
var server="wt.kpi.fei.tuke.sk";



//Výpis prvých maximálne pocetClankovNaStranu článkov a zápis informácie do navigačného panela
writeArticles2Html(0, pocetClankovNaStranu, server, 'clanky', 'navigacia');



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//funkcie


/**
 * Vráti HTML kód pre navigačnú časť stránky
 * @param startIndex - index prvého zo zobrazených článkov
 * @param articlesCount - počet vypísaných článkov
 * @param articlesTotalCount  - celkový počet článkov v databáze servra
 * @returns {string} - HTML kód pre navigačnú časť stránky
 */

function navHtml(startIndex, articlesCount, articlesTotalCount){
    var htmlKod="";
    if(articlesCount>0){
        htmlKod+="Vypisujem články "+(startIndex+1)+" až "+(startIndex+articlesCount)+" z "+ articlesTotalCount;

    }
    htmlKod+=" <button onclick=\"writeArticles2Html("+startIndex+
             ", pocetClankovNaStranu, server, 'clanky', 'navigacia')\">" +
             "Načítaj znova</button>";
    return htmlKod;
}

/**
 * Zapíše autorov a názvy článkov do daného html elementu
 * @param articles  - pole objektov s článkami
 * @param articlesElmId - Id elementu do ktorého sa články majú vypísať
 * @param navElmId - Id elementu ktorý má obsahovať navigačné linky
 * @param startIndex - index (poradové číslo čláanku od 0) od ktorého sa články vypisujú
 * @param max - maximálny počet článkov.
 */
function renderListOfArticles(articles, articlesElmId, navElmId, startIndex, max){
    var articlesElm=document.getElementById(articlesElmId);
    var navElm=document.getElementById(navElmId);
    if(articlesElm&&navElm){
        //mrenderObjectWithTemplateFromFile(articles, "templates/listOfArticles.mst", articlesElmId);
        mrenderObjectWithTemplateFromElm(articles, "listOfArticlesMTemplate", articlesElmId);
        navElm.innerHTML=navHtml(startIndex, articles.articles.length,articles.meta.totalCount);
    }
}




/**
 * otvori dialogove okno s chybovym hlasenim
 * @param status -  hodnota XMLHttpRequest.status
 */
function errorDialog(status){
    window.alert("Chyba pri načítaní údajov zo servera.\nStatus= "+status);
}

/**
 * Zapíše údaje o článkoch do elementu s id articlesElmId a HTML kód navigácie do elementu s id navElmId
 * @param startIndex - index (poradové číslo čláanku od 0) od ktorého sa články vypisujú
 * @param max - maximálny počet článkov.
 * @param server - doménové meno servera odkiaľ sa majú údaje stiahnuť.
 * @param articlesElmId - Id elementu do ktorého sa články majú vypísať
 * @param navElmId - Id elementu ktorý má obsahovať navigačné linky
 */
function writeArticles2Html(startIndex, max, server, articlesElmId, navElmId){
    var restURL ="http://"+server+"/api/article/?max="+max+"&offset="+startIndex;
    console.log(restURL);
    getJSONAllBr(restURL,
        function(JSONObj){renderListOfArticles(JSONObj, articlesElmId, navElmId, startIndex, max)},
        function(status){errorDialog(status)});
}
