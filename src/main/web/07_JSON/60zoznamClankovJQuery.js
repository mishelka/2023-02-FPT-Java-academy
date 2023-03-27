/**
 * Created by stefan.kr
 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Kód, ktorý sa vykoná pri načítaní skriptu

//Počet naraz zobrazených článkov
var pocetClankovNaStranu=100;

//Doménové meno servera s databázou článkov
var server="wt.kpi.fei.tuke.sk";

console.log("Zacinam stahovat zoznam clankov ...");


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
 * otvori dialogove okno s chybovym hlasenim
 * @param status -  hodnota XMLHttpRequest.status
 */
function errorDialog(status){
    window.alert("Chyba pri načítaní údajov zo servera.\nStatus= "+status);
}

/**
 * Zapíše údaje o článkoch do elementu s id articlesElmId a HTML kód navigácie do elementu s id navElmId
 * Iba verzia s Mustache sablonou z elementu s id =listOfArticlesMTemplate
 * @param startIndex - index (poradové číslo čláanku od 0) od ktorého sa články vypisujú
 * @param max - maximálny počet článkov.
 * @param server - doménové meno servera odkiaľ sa majú údaje stiahnuť.
 * @param articlesElmId - Id elementu do ktorého sa články majú vypísať
 * @param navElmId - Id elementu ktorý má obsahovať navigačné linky
 */
function writeArticles2Html(startIndex, max, server, articlesElmId, navElmId){
    $.ajax({
        type: 'GET',
        url: "http://"+server+"/api/article/",
        data: { max: max, offset: startIndex },
        dataType: "json",
        success: function (articles) {
            $("#"+articlesElmId).html(Mustache.render($("#listOfArticlesMTemplate").html(), articles));
            $("#"+navElmId).html(navHtml(startIndex, articles.articles.length,articles.meta.totalCount));
        },
        error:function(responseObj,textStatus, errorThrown){
            errorDialog(textStatus+"("+errorThrown+")");
        }
    });
}