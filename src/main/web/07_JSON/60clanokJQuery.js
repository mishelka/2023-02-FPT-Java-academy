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
        $.ajax({
            type: 'GET',
            url: "http://"+server+"/api/article/"+artId,
            dataType: "json",
            success: function (article) {
                $.get("templates/article.mst",      //get() je vlastne specialna verzia ajax()
                    function (template) {
                        $("#"+articleElmId).html(Mustache.render(template, article));
                    }
                    ,"text")
            },
            error:function(responseObj,textStatus, errorThrown){
                errorDialog(textStatus+"("+errorThrown+")");
            }
        });
    }
}
