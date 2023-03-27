/**
 * Created by stefan.kr
 */


/**
 * Do elementu s id=targetElmId vlozi HTML spracovane z udajov z dataObject podla sablony, ktora je v elemente s
 * id=templateElmId
 * @param dataObject - objekt s udajmi
 * @param templateElmId - objekt s Mustache sablonou
 * @param targetElmId - element kam sa ma vypisat vysledne html
 */
function mrenderObjectWithTemplateFromElm(dataObject,templateElmId,targetElmId){
    document.getElementById(targetElmId).innerHTML =
        Mustache.render(document.getElementById(templateElmId).innerHTML, dataObject);
}



/**
 * Do elementu s id=targetElmId vlozi HTML spracovane z udajov z dataObject podla sablony, ktora je v subore s
 * URL =templateFileUrl
 * @param dataObject - objekt s udajmi
 * @param templateFileUrl - URL subora s Mustache sablonou
 * @param targetElmId - element kam sa ma vypisat vysledne html
 */
function mrenderObjectWithTemplateFromFile(dataObject,templateFileUrl,targetElmId){
    getTextFromUrl(
        templateFileUrl,

        {
            idOfTargetElm:targetElmId,
            data2Render:dataObject
        },

        function(template, paramObj){
            var targetElm = document.getElementById(paramObj.idOfTargetElm);
            if(targetElm) targetElm.innerHTML = Mustache.render(template, paramObj.data2Render);
        },

        function(errCode, paramObj){
            var targetElm = document.getElementById(paramObj.idOfTargetElm);
            if(targetElm) targetElm.innerHTML = "Error, code="+errCode;
        }
    );
}

